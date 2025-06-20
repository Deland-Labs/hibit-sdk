import { E as e } from './index-J9qbee1J.js';
const n = async (t) => {
  try {
    if (!window.ethereum) throw new Error('MetaMask not found');
    if (!t || t.trim() === '') return e;
    const o = await window.ethereum.request({ method: 'eth_call', params: [{ to: t, data: '0x313ce567' }, 'latest'] }),
      r = parseInt(o, 16);
    return isNaN(r) ? e : r;
  } catch (a) {
    return console.warn('Failed to get ERC20 decimals:', a), e;
  }
};
export { n as getErc20Decimals };
