import { B as w } from './index-BFpg2PZw.js';
const f = async (a) => {
    try {
      await window.kasware.requestAccounts(),
        (await window.kasware.getNetwork()) !== a && (await window.kasware.switchNetwork(a));
      const n = await window.kasware.getAccounts(),
        t = await window.kasware.getPublicKey();
      return { address: n[0].toLowerCase(), publicKey: t };
    } catch (e) {
      throw new Error('KasWare connect: ' + (e.message ?? JSON.stringify(e)));
    }
  },
  K = async (a) => {
    try {
      return `0x${await window.kasware.signMessage(a)}`;
    } catch (e) {
      throw new Error('KasWare sign: ' + (e.message ?? JSON.stringify(e)));
    }
  },
  b = async (a, e) => {
    try {
      if (!a || e <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const t = new w(e).toNumber();
      if ((await window.kasware.getBalance()).total < t) throw new Error('Not enough KAS balance');
      const c = await window.kasware.sendKaspa(a, t),
        o = JSON.parse(c);
      return console.debug(`Transfer KAS: ${o}`), o.id;
    } catch (n) {
      throw new Error('KasWare transferKaspa: ' + (n.message ?? JSON.stringify(n)));
    }
  },
  m = async (a, e, n) => {
    try {
      if (!a || !n || e <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const c = (await window.kasware.getKRC20Balance()).find((g) => g.tick.toUpperCase() === n.toUpperCase());
      if (!c) throw new Error(`Not enough KRC20(${n}) balance`);
      const o = new w(e).toNumber();
      if (Number(c.balance) < o) throw new Error(`Not enough KRC20(${n}) balance`);
      const i = { p: 'KRC-20', op: 'transfer', tick: n.toUpperCase(), amt: o.toString(), to: a },
        l = await window.kasware.signKRC20Transaction(JSON.stringify(i), 4, a),
        s = JSON.parse(l);
      return console.debug(`Transfer KRC20: ${s}`), s.revealId;
    } catch (t) {
      throw new Error('KasWare transferKrc20: ' + (t.message ?? JSON.stringify(t)));
    }
  },
  h = async (a) => {
    const e = { HITZ: 8, NACHO: 8, KAS: 8 };
    try {
      if (
        (console.log('[DEBUG] getKrc20Decimals called with:', a),
        console.log('[DEBUG] window.kasware exists:', !!window.kasware),
        !window.kasware)
      )
        return console.log('[DEBUG] Kasware not available, using fallback decimals'), e[a.toUpperCase()] || 8;
      try {
        const r = await window.kasware.getAccounts();
        if ((console.log('[DEBUG] Kasware accounts:', r), !r || r.length === 0))
          return console.log('[DEBUG] Kasware not connected, using fallback decimals'), e[a.toUpperCase()] || 8;
      } catch (r) {
        return (
          console.log('[DEBUG] Failed to check Kasware connection, using fallback decimals:', r),
          e[a.toUpperCase()] || 8
        );
      }
      const n = await window.kasware.getKRC20Balance();
      console.log('[DEBUG] KRC20 balance response:', n);
      const t = n.find((r) => r.tick.toUpperCase() === a.toUpperCase());
      if ((console.log('[DEBUG] Found tick balance:', t), t)) {
        const r = Number(t.dec);
        return console.log('[DEBUG] Got decimals from wallet:', r), r;
      } else {
        const r = e[a.toUpperCase()] || 8;
        return console.log('[DEBUG] Token not found in wallet, using fallback decimals:', r), r;
      }
    } catch (n) {
      console.warn('Failed to get KRC20 decimals:', n), console.error('[DEBUG] Error details:', n);
      const t = e[a.toUpperCase()] || 8;
      return console.log('[DEBUG] Using fallback decimals due to error:', t), t;
    }
  };
export { f as connect, h as getKrc20Decimals, K as sign, b as transferKaspa, m as transferKrc20 };
