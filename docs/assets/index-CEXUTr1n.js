import { B as o } from './index-DKuUlBQG.js';
const f = async (t) => {
    try {
      await window.kasware.requestAccounts(),
        (await window.kasware.getNetwork()) !== t && (await window.kasware.switchNetwork(t));
      const e = await window.kasware.getAccounts(),
        r = await window.kasware.getPublicKey();
      return { address: e[0].toLowerCase(), publicKey: r };
    } catch (a) {
      throw new Error('KasWare connect: ' + (a.message ?? JSON.stringify(a)));
    }
  },
  K = async (t) => {
    try {
      return `0x${await window.kasware.signMessage(t)}`;
    } catch (a) {
      throw new Error('KasWare sign: ' + (a.message ?? JSON.stringify(a)));
    }
  },
  h = async (t, a) => {
    try {
      if (!t || a <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const r = new o(a).toNumber();
      if ((await window.kasware.getBalance()).total < r) throw new Error('Not enough KAS balance');
      const s = await window.kasware.sendKaspa(t, r),
        n = JSON.parse(s);
      return console.debug(`Transfer KAS: ${n}`), n.id;
    } catch (e) {
      throw new Error('KasWare transferKaspa: ' + (e.message ?? JSON.stringify(e)));
    }
  },
  b = async (t, a, e) => {
    try {
      if (!t || !e || a <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const s = (await window.kasware.getKRC20Balance()).find((u) => u.tick.toUpperCase() === e.toUpperCase());
      if (!s) throw new Error(`Not enough KRC20(${e}) balance`);
      const n = new o(a).toNumber();
      if (Number(s.balance) < n) throw new Error(`Not enough KRC20(${e}) balance`);
      const i = { p: 'KRC-20', op: 'transfer', tick: e.toUpperCase(), amt: n.toString(), to: t },
        g = await window.kasware.signKRC20Transaction(JSON.stringify(i), 4, t),
        c = JSON.parse(g);
      return console.debug(`Transfer KRC20: ${c}`), c.revealId;
    } catch (r) {
      throw new Error('KasWare transferKrc20: ' + (r.message ?? JSON.stringify(r)));
    }
  },
  y = async (t) => {
    try {
      const e = (await window.kasware.getKRC20Balance()).find((r) => r.tick.toUpperCase() === t.toUpperCase());
      return e ? Number(e.dec) : 0;
    } catch (a) {
      return console.warn('Failed to get KRC20 decimals:', a), 0;
    }
  };
export { f as connect, y as getKrc20Decimals, K as sign, h as transferKaspa, b as transferKrc20 };
