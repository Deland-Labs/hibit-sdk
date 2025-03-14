var C1 = Object.defineProperty;
var q1 = (n, a, u) => (a in n ? C1(n, a, { enumerable: !0, configurable: !0, writable: !0, value: u }) : (n[a] = u));
var mm = (n, a, u) => q1(n, typeof a != 'symbol' ? a + '' : a, u);
(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const m of c)
      if (m.type === 'childList')
        for (const h of m.addedNodes) h.tagName === 'LINK' && h.rel === 'modulepreload' && s(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const m = {};
    return (
      c.integrity && (m.integrity = c.integrity),
      c.referrerPolicy && (m.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (m.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (m.credentials = 'omit')
          : (m.credentials = 'same-origin'),
      m
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const m = u(c);
    fetch(c.href, m);
  }
})();
var xo =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof globalThis < 'u'
          ? globalThis
          : {};
function Iu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var $f = { exports: {} },
  Ou = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pm;
function z1() {
  if (pm) return Ou;
  pm = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
  function u(s, c, m) {
    var h = null;
    if ((m !== void 0 && (h = '' + m), c.key !== void 0 && (h = '' + c.key), 'key' in c)) {
      m = {};
      for (var o in c) o !== 'key' && (m[o] = c[o]);
    } else m = c;
    return (c = m.ref), { $$typeof: n, type: s, key: h, ref: c !== void 0 ? c : null, props: m };
  }
  return (Ou.Fragment = a), (Ou.jsx = u), (Ou.jsxs = u), Ou;
}
var ym;
function k1() {
  return ym || ((ym = 1), ($f.exports = z1())), $f.exports;
}
var H = k1(),
  Xf = { exports: {} },
  at = {},
  gm;
function I1() {
  if (gm) return at;
  gm = 1;
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    m = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    o = Symbol.for('react.forward_ref'),
    S = Symbol.for('react.suspense'),
    E = Symbol.for('react.memo'),
    U = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function x(R) {
    return R === null || typeof R != 'object'
      ? null
      : ((R = (v && R[v]) || R['@@iterator']), typeof R == 'function' ? R : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    te = Object.assign,
    he = {};
  function ge(R, P, be) {
    (this.props = R), (this.context = P), (this.refs = he), (this.updater = be || N);
  }
  (ge.prototype.isReactComponent = {}),
    (ge.prototype.setState = function (R, P) {
      if (typeof R != 'object' && typeof R != 'function' && R != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, R, P, 'setState');
    }),
    (ge.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, 'forceUpdate');
    });
  function ve() {}
  ve.prototype = ge.prototype;
  function Q(R, P, be) {
    (this.props = R), (this.context = P), (this.refs = he), (this.updater = be || N);
  }
  var je = (Q.prototype = new ve());
  (je.constructor = Q), te(je, ge.prototype), (je.isPureReactComponent = !0);
  var We = Array.isArray,
    _e = { H: null, A: null, T: null, S: null },
    Ae = Object.prototype.hasOwnProperty;
  function Re(R, P, be, de, w, Ue) {
    return (be = Ue.ref), { $$typeof: n, type: R, key: P, ref: be !== void 0 ? be : null, props: Ue };
  }
  function y(R, P) {
    return Re(R.type, P, void 0, void 0, void 0, R.props);
  }
  function _(R) {
    return typeof R == 'object' && R !== null && R.$$typeof === n;
  }
  function A(R) {
    var P = { '=': '=0', ':': '=2' };
    return (
      '$' +
      R.replace(/[=:]/g, function (be) {
        return P[be];
      })
    );
  }
  var F = /\/+/g;
  function V(R, P) {
    return typeof R == 'object' && R !== null && R.key != null ? A('' + R.key) : P.toString(36);
  }
  function Y() {}
  function X(R) {
    switch (R.status) {
      case 'fulfilled':
        return R.value;
      case 'rejected':
        throw R.reason;
      default:
        switch (
          (typeof R.status == 'string'
            ? R.then(Y, Y)
            : ((R.status = 'pending'),
              R.then(
                function (P) {
                  R.status === 'pending' && ((R.status = 'fulfilled'), (R.value = P));
                },
                function (P) {
                  R.status === 'pending' && ((R.status = 'rejected'), (R.reason = P));
                }
              )),
          R.status)
        ) {
          case 'fulfilled':
            return R.value;
          case 'rejected':
            throw R.reason;
        }
    }
    throw R;
  }
  function C(R, P, be, de, w) {
    var Ue = typeof R;
    (Ue === 'undefined' || Ue === 'boolean') && (R = null);
    var Oe = !1;
    if (R === null) Oe = !0;
    else
      switch (Ue) {
        case 'bigint':
        case 'string':
        case 'number':
          Oe = !0;
          break;
        case 'object':
          switch (R.$$typeof) {
            case n:
            case a:
              Oe = !0;
              break;
            case U:
              return (Oe = R._init), C(Oe(R._payload), P, be, de, w);
          }
      }
    if (Oe)
      return (
        (w = w(R)),
        (Oe = de === '' ? '.' + V(R, 0) : de),
        We(w)
          ? ((be = ''),
            Oe != null && (be = Oe.replace(F, '$&/') + '/'),
            C(w, P, be, '', function (De) {
              return De;
            }))
          : w != null &&
            (_(w) &&
              (w = y(
                w,
                be + (w.key == null || (R && R.key === w.key) ? '' : ('' + w.key).replace(F, '$&/') + '/') + Oe
              )),
            P.push(w)),
        1
      );
    Oe = 0;
    var Ke = de === '' ? '.' : de + ':';
    if (We(R)) for (var Ne = 0; Ne < R.length; Ne++) (de = R[Ne]), (Ue = Ke + V(de, Ne)), (Oe += C(de, P, be, Ue, w));
    else if (((Ne = x(R)), typeof Ne == 'function'))
      for (R = Ne.call(R), Ne = 0; !(de = R.next()).done; )
        (de = de.value), (Ue = Ke + V(de, Ne++)), (Oe += C(de, P, be, Ue, w));
    else if (Ue === 'object') {
      if (typeof R.then == 'function') return C(X(R), P, be, de, w);
      throw (
        ((P = String(R)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (P === '[object Object]' ? 'object with keys {' + Object.keys(R).join(', ') + '}' : P) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return Oe;
  }
  function T(R, P, be) {
    if (R == null) return R;
    var de = [],
      w = 0;
    return (
      C(R, de, '', '', function (Ue) {
        return P.call(be, Ue, w++);
      }),
      de
    );
  }
  function G(R) {
    if (R._status === -1) {
      var P = R._result;
      (P = P()),
        P.then(
          function (be) {
            (R._status === 0 || R._status === -1) && ((R._status = 1), (R._result = be));
          },
          function (be) {
            (R._status === 0 || R._status === -1) && ((R._status = 2), (R._result = be));
          }
        ),
        R._status === -1 && ((R._status = 0), (R._result = P));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var k =
    typeof reportError == 'function'
      ? reportError
      : function (R) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var P = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof R == 'object' && R !== null && typeof R.message == 'string' ? String(R.message) : String(R),
              error: R
            });
            if (!window.dispatchEvent(P)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', R);
            return;
          }
          console.error(R);
        };
  function ue() {}
  return (
    (at.Children = {
      map: T,
      forEach: function (R, P, be) {
        T(
          R,
          function () {
            P.apply(this, arguments);
          },
          be
        );
      },
      count: function (R) {
        var P = 0;
        return (
          T(R, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (R) {
        return (
          T(R, function (P) {
            return P;
          }) || []
        );
      },
      only: function (R) {
        if (!_(R)) throw Error('React.Children.only expected to receive a single React element child.');
        return R;
      }
    }),
    (at.Component = ge),
    (at.Fragment = u),
    (at.Profiler = c),
    (at.PureComponent = Q),
    (at.StrictMode = s),
    (at.Suspense = S),
    (at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _e),
    (at.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (at.cache = function (R) {
      return function () {
        return R.apply(null, arguments);
      };
    }),
    (at.cloneElement = function (R, P, be) {
      if (R == null) throw Error('The argument must be a React element, but you passed ' + R + '.');
      var de = te({}, R.props),
        w = R.key,
        Ue = void 0;
      if (P != null)
        for (Oe in (P.ref !== void 0 && (Ue = void 0), P.key !== void 0 && (w = '' + P.key), P))
          !Ae.call(P, Oe) ||
            Oe === 'key' ||
            Oe === '__self' ||
            Oe === '__source' ||
            (Oe === 'ref' && P.ref === void 0) ||
            (de[Oe] = P[Oe]);
      var Oe = arguments.length - 2;
      if (Oe === 1) de.children = be;
      else if (1 < Oe) {
        for (var Ke = Array(Oe), Ne = 0; Ne < Oe; Ne++) Ke[Ne] = arguments[Ne + 2];
        de.children = Ke;
      }
      return Re(R.type, w, void 0, void 0, Ue, de);
    }),
    (at.createContext = function (R) {
      return (
        (R = { $$typeof: h, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null }),
        (R.Provider = R),
        (R.Consumer = { $$typeof: m, _context: R }),
        R
      );
    }),
    (at.createElement = function (R, P, be) {
      var de,
        w = {},
        Ue = null;
      if (P != null)
        for (de in (P.key !== void 0 && (Ue = '' + P.key), P))
          Ae.call(P, de) && de !== 'key' && de !== '__self' && de !== '__source' && (w[de] = P[de]);
      var Oe = arguments.length - 2;
      if (Oe === 1) w.children = be;
      else if (1 < Oe) {
        for (var Ke = Array(Oe), Ne = 0; Ne < Oe; Ne++) Ke[Ne] = arguments[Ne + 2];
        w.children = Ke;
      }
      if (R && R.defaultProps) for (de in ((Oe = R.defaultProps), Oe)) w[de] === void 0 && (w[de] = Oe[de]);
      return Re(R, Ue, void 0, void 0, null, w);
    }),
    (at.createRef = function () {
      return { current: null };
    }),
    (at.forwardRef = function (R) {
      return { $$typeof: o, render: R };
    }),
    (at.isValidElement = _),
    (at.lazy = function (R) {
      return { $$typeof: U, _payload: { _status: -1, _result: R }, _init: G };
    }),
    (at.memo = function (R, P) {
      return { $$typeof: E, type: R, compare: P === void 0 ? null : P };
    }),
    (at.startTransition = function (R) {
      var P = _e.T,
        be = {};
      _e.T = be;
      try {
        var de = R(),
          w = _e.S;
        w !== null && w(be, de), typeof de == 'object' && de !== null && typeof de.then == 'function' && de.then(ue, k);
      } catch (Ue) {
        k(Ue);
      } finally {
        _e.T = P;
      }
    }),
    (at.unstable_useCacheRefresh = function () {
      return _e.H.useCacheRefresh();
    }),
    (at.use = function (R) {
      return _e.H.use(R);
    }),
    (at.useActionState = function (R, P, be) {
      return _e.H.useActionState(R, P, be);
    }),
    (at.useCallback = function (R, P) {
      return _e.H.useCallback(R, P);
    }),
    (at.useContext = function (R) {
      return _e.H.useContext(R);
    }),
    (at.useDebugValue = function () {}),
    (at.useDeferredValue = function (R, P) {
      return _e.H.useDeferredValue(R, P);
    }),
    (at.useEffect = function (R, P) {
      return _e.H.useEffect(R, P);
    }),
    (at.useId = function () {
      return _e.H.useId();
    }),
    (at.useImperativeHandle = function (R, P, be) {
      return _e.H.useImperativeHandle(R, P, be);
    }),
    (at.useInsertionEffect = function (R, P) {
      return _e.H.useInsertionEffect(R, P);
    }),
    (at.useLayoutEffect = function (R, P) {
      return _e.H.useLayoutEffect(R, P);
    }),
    (at.useMemo = function (R, P) {
      return _e.H.useMemo(R, P);
    }),
    (at.useOptimistic = function (R, P) {
      return _e.H.useOptimistic(R, P);
    }),
    (at.useReducer = function (R, P, be) {
      return _e.H.useReducer(R, P, be);
    }),
    (at.useRef = function (R) {
      return _e.H.useRef(R);
    }),
    (at.useState = function (R) {
      return _e.H.useState(R);
    }),
    (at.useSyncExternalStore = function (R, P, be) {
      return _e.H.useSyncExternalStore(R, P, be);
    }),
    (at.useTransition = function () {
      return _e.H.useTransition();
    }),
    (at.version = '19.0.0'),
    at
  );
}
var vm;
function Bo() {
  return vm || ((vm = 1), (Xf.exports = I1())), Xf.exports;
}
var Xe = Bo();
const Et = Iu(Xe);
var Zf = { exports: {} },
  Nu = {},
  Qf = { exports: {} },
  Kf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bm;
function L1() {
  return (
    bm ||
      ((bm = 1),
      (function (n) {
        function a(T, G) {
          var k = T.length;
          T.push(G);
          e: for (; 0 < k; ) {
            var ue = (k - 1) >>> 1,
              R = T[ue];
            if (0 < c(R, G)) (T[ue] = G), (T[k] = R), (k = ue);
            else break e;
          }
        }
        function u(T) {
          return T.length === 0 ? null : T[0];
        }
        function s(T) {
          if (T.length === 0) return null;
          var G = T[0],
            k = T.pop();
          if (k !== G) {
            T[0] = k;
            e: for (var ue = 0, R = T.length, P = R >>> 1; ue < P; ) {
              var be = 2 * (ue + 1) - 1,
                de = T[be],
                w = be + 1,
                Ue = T[w];
              if (0 > c(de, k))
                w < R && 0 > c(Ue, de) ? ((T[ue] = Ue), (T[w] = k), (ue = w)) : ((T[ue] = de), (T[be] = k), (ue = be));
              else if (w < R && 0 > c(Ue, k)) (T[ue] = Ue), (T[w] = k), (ue = w);
              else break e;
            }
          }
          return G;
        }
        function c(T, G) {
          var k = T.sortIndex - G.sortIndex;
          return k !== 0 ? k : T.id - G.id;
        }
        if (((n.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var m = performance;
          n.unstable_now = function () {
            return m.now();
          };
        } else {
          var h = Date,
            o = h.now();
          n.unstable_now = function () {
            return h.now() - o;
          };
        }
        var S = [],
          E = [],
          U = 1,
          v = null,
          x = 3,
          N = !1,
          te = !1,
          he = !1,
          ge = typeof setTimeout == 'function' ? setTimeout : null,
          ve = typeof clearTimeout == 'function' ? clearTimeout : null,
          Q = typeof setImmediate < 'u' ? setImmediate : null;
        function je(T) {
          for (var G = u(E); G !== null; ) {
            if (G.callback === null) s(E);
            else if (G.startTime <= T) s(E), (G.sortIndex = G.expirationTime), a(S, G);
            else break;
            G = u(E);
          }
        }
        function We(T) {
          if (((he = !1), je(T), !te))
            if (u(S) !== null) (te = !0), X();
            else {
              var G = u(E);
              G !== null && C(We, G.startTime - T);
            }
        }
        var _e = !1,
          Ae = -1,
          Re = 5,
          y = -1;
        function _() {
          return !(n.unstable_now() - y < Re);
        }
        function A() {
          if (_e) {
            var T = n.unstable_now();
            y = T;
            var G = !0;
            try {
              e: {
                (te = !1), he && ((he = !1), ve(Ae), (Ae = -1)), (N = !0);
                var k = x;
                try {
                  t: {
                    for (je(T), v = u(S); v !== null && !(v.expirationTime > T && _()); ) {
                      var ue = v.callback;
                      if (typeof ue == 'function') {
                        (v.callback = null), (x = v.priorityLevel);
                        var R = ue(v.expirationTime <= T);
                        if (((T = n.unstable_now()), typeof R == 'function')) {
                          (v.callback = R), je(T), (G = !0);
                          break t;
                        }
                        v === u(S) && s(S), je(T);
                      } else s(S);
                      v = u(S);
                    }
                    if (v !== null) G = !0;
                    else {
                      var P = u(E);
                      P !== null && C(We, P.startTime - T), (G = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (x = k), (N = !1);
                }
                G = void 0;
              }
            } finally {
              G ? F() : (_e = !1);
            }
          }
        }
        var F;
        if (typeof Q == 'function')
          F = function () {
            Q(A);
          };
        else if (typeof MessageChannel < 'u') {
          var V = new MessageChannel(),
            Y = V.port2;
          (V.port1.onmessage = A),
            (F = function () {
              Y.postMessage(null);
            });
        } else
          F = function () {
            ge(A, 0);
          };
        function X() {
          _e || ((_e = !0), F());
        }
        function C(T, G) {
          Ae = ge(function () {
            T(n.unstable_now());
          }, G);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (T) {
            T.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            te || N || ((te = !0), X());
          }),
          (n.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Re = 0 < T ? Math.floor(1e3 / T) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return u(S);
          }),
          (n.unstable_next = function (T) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = x;
            }
            var k = x;
            x = G;
            try {
              return T();
            } finally {
              x = k;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (T, G) {
            switch (T) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                T = 3;
            }
            var k = x;
            x = T;
            try {
              return G();
            } finally {
              x = k;
            }
          }),
          (n.unstable_scheduleCallback = function (T, G, k) {
            var ue = n.unstable_now();
            switch (
              (typeof k == 'object' && k !== null
                ? ((k = k.delay), (k = typeof k == 'number' && 0 < k ? ue + k : ue))
                : (k = ue),
              T)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = k + R),
              (T = { id: U++, callback: G, priorityLevel: T, startTime: k, expirationTime: R, sortIndex: -1 }),
              k > ue
                ? ((T.sortIndex = k),
                  a(E, T),
                  u(S) === null && T === u(E) && (he ? (ve(Ae), (Ae = -1)) : (he = !0), C(We, k - ue)))
                : ((T.sortIndex = R), a(S, T), te || N || ((te = !0), X())),
              T
            );
          }),
          (n.unstable_shouldYield = _),
          (n.unstable_wrapCallback = function (T) {
            var G = x;
            return function () {
              var k = x;
              x = G;
              try {
                return T.apply(this, arguments);
              } finally {
                x = k;
              }
            };
          });
      })(Kf)),
    Kf
  );
}
var Sm;
function H1() {
  return Sm || ((Sm = 1), (Qf.exports = L1())), Qf.exports;
}
var Jf = { exports: {} },
  ur = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em;
function G1() {
  if (Em) return ur;
  Em = 1;
  var n = Bo();
  function a(S) {
    var E = 'https://react.dev/errors/' + S;
    if (1 < arguments.length) {
      E += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++) E += '&args[]=' + encodeURIComponent(arguments[U]);
    }
    return (
      'Minified React error #' +
      S +
      '; visit ' +
      E +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function u() {}
  var s = {
      d: {
        f: u,
        r: function () {
          throw Error(a(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u
      },
      p: 0,
      findDOMNode: null
    },
    c = Symbol.for('react.portal');
  function m(S, E, U) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: v == null ? null : '' + v, children: S, containerInfo: E, implementation: U };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function o(S, E) {
    if (S === 'font') return '';
    if (typeof E == 'string') return E === 'use-credentials' ? E : '';
  }
  return (
    (ur.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ur.createPortal = function (S, E) {
      var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)) throw Error(a(299));
      return m(S, E, null, U);
    }),
    (ur.flushSync = function (S) {
      var E = h.T,
        U = s.p;
      try {
        if (((h.T = null), (s.p = 2), S)) return S();
      } finally {
        (h.T = E), (s.p = U), s.d.f();
      }
    }),
    (ur.preconnect = function (S, E) {
      typeof S == 'string' &&
        (E
          ? ((E = E.crossOrigin), (E = typeof E == 'string' ? (E === 'use-credentials' ? E : '') : void 0))
          : (E = null),
        s.d.C(S, E));
    }),
    (ur.prefetchDNS = function (S) {
      typeof S == 'string' && s.d.D(S);
    }),
    (ur.preinit = function (S, E) {
      if (typeof S == 'string' && E && typeof E.as == 'string') {
        var U = E.as,
          v = o(U, E.crossOrigin),
          x = typeof E.integrity == 'string' ? E.integrity : void 0,
          N = typeof E.fetchPriority == 'string' ? E.fetchPriority : void 0;
        U === 'style'
          ? s.d.S(S, typeof E.precedence == 'string' ? E.precedence : void 0, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: N
            })
          : U === 'script' &&
            s.d.X(S, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: N,
              nonce: typeof E.nonce == 'string' ? E.nonce : void 0
            });
      }
    }),
    (ur.preinitModule = function (S, E) {
      if (typeof S == 'string')
        if (typeof E == 'object' && E !== null) {
          if (E.as == null || E.as === 'script') {
            var U = o(E.as, E.crossOrigin);
            s.d.M(S, {
              crossOrigin: U,
              integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
              nonce: typeof E.nonce == 'string' ? E.nonce : void 0
            });
          }
        } else E == null && s.d.M(S);
    }),
    (ur.preload = function (S, E) {
      if (typeof S == 'string' && typeof E == 'object' && E !== null && typeof E.as == 'string') {
        var U = E.as,
          v = o(U, E.crossOrigin);
        s.d.L(S, U, {
          crossOrigin: v,
          integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
          nonce: typeof E.nonce == 'string' ? E.nonce : void 0,
          type: typeof E.type == 'string' ? E.type : void 0,
          fetchPriority: typeof E.fetchPriority == 'string' ? E.fetchPriority : void 0,
          referrerPolicy: typeof E.referrerPolicy == 'string' ? E.referrerPolicy : void 0,
          imageSrcSet: typeof E.imageSrcSet == 'string' ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == 'string' ? E.imageSizes : void 0,
          media: typeof E.media == 'string' ? E.media : void 0
        });
      }
    }),
    (ur.preloadModule = function (S, E) {
      if (typeof S == 'string')
        if (E) {
          var U = o(E.as, E.crossOrigin);
          s.d.m(S, {
            as: typeof E.as == 'string' && E.as !== 'script' ? E.as : void 0,
            crossOrigin: U,
            integrity: typeof E.integrity == 'string' ? E.integrity : void 0
          });
        } else s.d.m(S);
    }),
    (ur.requestFormReset = function (S) {
      s.d.r(S);
    }),
    (ur.unstable_batchedUpdates = function (S, E) {
      return S(E);
    }),
    (ur.useFormState = function (S, E, U) {
      return h.H.useFormState(S, E, U);
    }),
    (ur.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (ur.version = '19.0.0'),
    ur
  );
}
var xm;
function F1() {
  if (xm) return Jf.exports;
  xm = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (Jf.exports = G1()), Jf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m;
function V1() {
  if (_m) return Nu;
  _m = 1;
  var n = H1(),
    a = Bo(),
    u = F1();
  function s(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++) t += '&args[]=' + encodeURIComponent(arguments[r]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var m = Symbol.for('react.element'),
    h = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    S = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    U = Symbol.for('react.profiler'),
    v = Symbol.for('react.provider'),
    x = Symbol.for('react.consumer'),
    N = Symbol.for('react.context'),
    te = Symbol.for('react.forward_ref'),
    he = Symbol.for('react.suspense'),
    ge = Symbol.for('react.suspense_list'),
    ve = Symbol.for('react.memo'),
    Q = Symbol.for('react.lazy'),
    je = Symbol.for('react.offscreen'),
    We = Symbol.for('react.memo_cache_sentinel'),
    _e = Symbol.iterator;
  function Ae(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (_e && e[_e]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var Re = Symbol.for('react.client.reference');
  function y(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === Re ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case S:
        return 'Fragment';
      case o:
        return 'Portal';
      case U:
        return 'Profiler';
      case E:
        return 'StrictMode';
      case he:
        return 'Suspense';
      case ge:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case N:
          return (e.displayName || 'Context') + '.Provider';
        case x:
          return (e._context.displayName || 'Context') + '.Consumer';
        case te:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ve:
          return (t = e.displayName || null), t !== null ? t : y(e.type) || 'Memo';
        case Q:
          (t = e._payload), (e = e._init);
          try {
            return y(e(t));
          } catch {}
      }
    return null;
  }
  var _ = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    A = Object.assign,
    F,
    V;
  function Y(e) {
    if (F === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        (F = (t && t[1]) || ''),
          (V =
            -1 <
            r.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < r.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      F +
      e +
      V
    );
  }
  var X = !1;
  function C(e, t) {
    if (!e || X) return '';
    X = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Te = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Te.prototype, 'props', {
                  set: function () {
                    throw Error();
                  }
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Te, []);
                } catch (Se) {
                  var pe = Se;
                }
                Reflect.construct(e, [], Te);
              } else {
                try {
                  Te.call();
                } catch (Se) {
                  pe = Se;
                }
                e.call(Te.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Se) {
                pe = Se;
              }
              (Te = e()) && typeof Te.catch == 'function' && Te.catch(function () {});
            }
          } catch (Se) {
            if (Se && pe && typeof Se.stack == 'string') return [Se.stack, pe.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var l = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, 'name');
      l &&
        l.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
      var f = i.DetermineComponentFrameRoot(),
        g = f[0],
        B = f[1];
      if (g && B) {
        var $ = g.split(`
`),
          le = B.split(`
`);
        for (l = i = 0; i < $.length && !$[i].includes('DetermineComponentFrameRoot'); ) i++;
        for (; l < le.length && !le[l].includes('DetermineComponentFrameRoot'); ) l++;
        if (i === $.length || l === le.length)
          for (i = $.length - 1, l = le.length - 1; 1 <= i && 0 <= l && $[i] !== le[l]; ) l--;
        for (; 1 <= i && 0 <= l; i--, l--)
          if ($[i] !== le[l]) {
            if (i !== 1 || l !== 1)
              do
                if ((i--, l--, 0 > l || $[i] !== le[l])) {
                  var Ee =
                    `
` + $[i].replace(' at new ', ' at ');
                  return (
                    e.displayName && Ee.includes('<anonymous>') && (Ee = Ee.replace('<anonymous>', e.displayName)), Ee
                  );
                }
              while (1 <= i && 0 <= l);
            break;
          }
      }
    } finally {
      (X = !1), (Error.prepareStackTrace = r);
    }
    return (r = e ? e.displayName || e.name : '') ? Y(r) : '';
  }
  function T(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Y(e.type);
      case 16:
        return Y('Lazy');
      case 13:
        return Y('Suspense');
      case 19:
        return Y('SuspenseList');
      case 0:
      case 15:
        return (e = C(e.type, !1)), e;
      case 11:
        return (e = C(e.type.render, !1)), e;
      case 1:
        return (e = C(e.type, !0)), e;
      default:
        return '';
    }
  }
  function G(e) {
    try {
      var t = '';
      do (t += T(e)), (e = e.return);
      while (e);
      return t;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  function k(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function ue(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function R(e) {
    if (k(e) !== e) throw Error(s(188));
  }
  function P(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = k(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var l = r.return;
      if (l === null) break;
      var f = l.alternate;
      if (f === null) {
        if (((i = l.return), i !== null)) {
          r = i;
          continue;
        }
        break;
      }
      if (l.child === f.child) {
        for (f = l.child; f; ) {
          if (f === r) return R(l), e;
          if (f === i) return R(l), t;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== i.return) (r = l), (i = f);
      else {
        for (var g = !1, B = l.child; B; ) {
          if (B === r) {
            (g = !0), (r = l), (i = f);
            break;
          }
          if (B === i) {
            (g = !0), (i = l), (r = f);
            break;
          }
          B = B.sibling;
        }
        if (!g) {
          for (B = f.child; B; ) {
            if (B === r) {
              (g = !0), (r = f), (i = l);
              break;
            }
            if (B === i) {
              (g = !0), (i = f), (r = l);
              break;
            }
            B = B.sibling;
          }
          if (!g) throw Error(s(189));
        }
      }
      if (r.alternate !== i) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function be(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = be(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var de = Array.isArray,
    w = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Ue = { pending: !1, data: null, method: null, action: null },
    Oe = [],
    Ke = -1;
  function Ne(e) {
    return { current: e };
  }
  function De(e) {
    0 > Ke || ((e.current = Oe[Ke]), (Oe[Ke] = null), Ke--);
  }
  function M(e, t) {
    Ke++, (Oe[Ke] = e.current), (e.current = t);
  }
  var D = Ne(null),
    Z = Ne(null),
    ie = Ne(null),
    W = Ne(null);
  function ne(e, t) {
    switch ((M(ie, t), M(Z, e), M(D, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? F0(t) : 0;
        break;
      default:
        if (((e = e === 8 ? t.parentNode : t), (t = e.tagName), (e = e.namespaceURI))) (e = F0(e)), (t = V0(e, t));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    De(D), M(D, t);
  }
  function ce() {
    De(D), De(Z), De(ie);
  }
  function re(e) {
    e.memoizedState !== null && M(W, e);
    var t = D.current,
      r = V0(t, e.type);
    t !== r && (M(Z, e), M(D, r));
  }
  function O(e) {
    Z.current === e && (De(D), De(Z)), W.current === e && (De(W), (Eu._currentValue = Ue));
  }
  var z = Object.prototype.hasOwnProperty,
    I = n.unstable_scheduleCallback,
    J = n.unstable_cancelCallback,
    me = n.unstable_shouldYield,
    ye = n.unstable_requestPaint,
    Me = n.unstable_now,
    ze = n.unstable_getCurrentPriorityLevel,
    tt = n.unstable_ImmediatePriority,
    b = n.unstable_UserBlockingPriority,
    d = n.unstable_NormalPriority,
    p = n.unstable_LowPriority,
    L = n.unstable_IdlePriority,
    ee = n.log,
    j = n.unstable_setDisableYieldValue,
    q = null,
    se = null;
  function xe(e) {
    if (se && typeof se.onCommitFiberRoot == 'function')
      try {
        se.onCommitFiberRoot(q, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Be(e) {
    if ((typeof ee == 'function' && j(e), se && typeof se.setStrictMode == 'function'))
      try {
        se.setStrictMode(q, e);
      } catch {}
  }
  var Ce = Math.clz32 ? Math.clz32 : ke,
    Pe = Math.log,
    Ve = Math.LN2;
  function ke(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Pe(e) / Ve) | 0)) | 0;
  }
  var Ie = 128,
    Le = 4194304;
  function He(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function nt(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0,
      l = e.suspendedLanes,
      f = e.pingedLanes,
      g = e.warmLanes;
    e = e.finishedLanes !== 0;
    var B = r & 134217727;
    return (
      B !== 0
        ? ((r = B & ~l),
          r !== 0 ? (i = He(r)) : ((f &= B), f !== 0 ? (i = He(f)) : e || ((g = B & ~g), g !== 0 && (i = He(g)))))
        : ((B = r & ~l), B !== 0 ? (i = He(B)) : f !== 0 ? (i = He(f)) : e || ((g = r & ~g), g !== 0 && (i = He(g)))),
      i === 0
        ? 0
        : t !== 0 && t !== i && !(t & l) && ((l = i & -i), (g = t & -t), l >= g || (l === 32 && (g & 4194176) !== 0))
          ? t
          : i
    );
  }
  function st(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Bt(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fr() {
    var e = Ie;
    return (Ie <<= 1), !(Ie & 4194176) && (Ie = 128), e;
  }
  function Zi() {
    var e = Le;
    return (Le <<= 1), !(Le & 62914560) && (Le = 4194304), e;
  }
  function Qi(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Ot(e, t) {
    (e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Fo(e, t, r, i, l, f) {
    var g = e.pendingLanes;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0);
    var B = e.entanglements,
      $ = e.expirationTimes,
      le = e.hiddenUpdates;
    for (r = g & ~r; 0 < r; ) {
      var Ee = 31 - Ce(r),
        Te = 1 << Ee;
      (B[Ee] = 0), ($[Ee] = -1);
      var pe = le[Ee];
      if (pe !== null)
        for (le[Ee] = null, Ee = 0; Ee < pe.length; Ee++) {
          var Se = pe[Ee];
          Se !== null && (Se.lane &= -536870913);
        }
      r &= ~Te;
    }
    i !== 0 && ks(e, i, 0), f !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t));
  }
  function ks(e, t, r) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var i = 31 - Ce(t);
    (e.entangledLanes |= t), (e.entanglements[i] = e.entanglements[i] | 1073741824 | (r & 4194218));
  }
  function Is(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var i = 31 - Ce(r),
        l = 1 << i;
      (l & t) | (e[i] & t) && (e[i] |= t), (r &= ~l);
    }
  }
  function Qu(e) {
    return (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2;
  }
  function Ku() {
    var e = w.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : sm(e.type));
  }
  function Ls(e, t) {
    var r = w.p;
    try {
      return (w.p = e), t();
    } finally {
      w.p = r;
    }
  }
  var un = Math.random().toString(36).slice(2),
    ft = '__reactFiber$' + un,
    ir = '__reactProps$' + un,
    Hn = '__reactContainer$' + un,
    Ra = '__reactEvents$' + un,
    Hs = '__reactListeners$' + un,
    Gs = '__reactHandles$' + un,
    Ju = '__reactResources$' + un,
    gi = '__reactMarker$' + un;
  function ja(e) {
    delete e[ft], delete e[ir], delete e[Ra], delete e[Hs], delete e[Gs];
  }
  function mt(e) {
    var t = e[ft];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Hn] || r[ft])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = X0(e); e !== null; ) {
            if ((r = e[ft])) return r;
            e = X0(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Gn(e) {
    if ((e = e[ft] || e[Hn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function vi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function K(e) {
    var t = e[Ju];
    return t || (t = e[Ju] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function Je(e) {
    e[gi] = !0;
  }
  var ot = new Set(),
    ut = {};
  function jr(e, t) {
    Cr(e, t), Cr(e + 'Capture', t);
  }
  function Cr(e, t) {
    for (ut[e] = t, e = 0; e < t.length; e++) ot.add(t[e]);
  }
  var ln = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    Ty = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Vo = {},
    Yo = {};
  function My(e) {
    return z.call(Yo, e) ? !0 : z.call(Vo, e) ? !1 : Ty.test(e) ? (Yo[e] = !0) : ((Vo[e] = !0), !1);
  }
  function Wu(e, t, r) {
    if (My(t))
      if (r === null) e.removeAttribute(t);
      else {
        switch (typeof r) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var i = t.toLowerCase().slice(0, 5);
            if (i !== 'data-' && i !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + r);
      }
  }
  function Pu(e, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + r);
    }
  }
  function vn(e, t, r, i) {
    if (i === null) e.removeAttribute(r);
    else {
      switch (typeof i) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(t, r, '' + i);
    }
  }
  function qr(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function $o(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function By(e) {
    var t = $o(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof r < 'u' && typeof r.get == 'function' && typeof r.set == 'function') {
      var l = r.get,
        f = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (g) {
            (i = '' + g), f.call(this, g);
          }
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (g) {
            i = '' + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          }
        }
      );
    }
  }
  function el(e) {
    e._valueTracker || (e._valueTracker = By(e));
  }
  function Xo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      i = '';
    return e && (i = $o(e) ? (e.checked ? 'true' : 'false') : e.value), (e = i), e !== r ? (t.setValue(e), !0) : !1;
  }
  function tl(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Uy = /[\n"\\]/g;
  function zr(e) {
    return e.replace(Uy, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Fs(e, t, r, i, l, f, g, B) {
    (e.name = ''),
      g != null && typeof g != 'function' && typeof g != 'symbol' && typeof g != 'boolean'
        ? (e.type = g)
        : e.removeAttribute('type'),
      t != null
        ? g === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + qr(t))
          : e.value !== '' + qr(t) && (e.value = '' + qr(t))
        : (g !== 'submit' && g !== 'reset') || e.removeAttribute('value'),
      t != null ? Vs(e, g, qr(t)) : r != null ? Vs(e, g, qr(r)) : i != null && e.removeAttribute('value'),
      l == null && f != null && (e.defaultChecked = !!f),
      l != null && (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      B != null && typeof B != 'function' && typeof B != 'symbol' && typeof B != 'boolean'
        ? (e.name = '' + qr(B))
        : e.removeAttribute('name');
  }
  function Zo(e, t, r, i, l, f, g, B) {
    if (
      (f != null && typeof f != 'function' && typeof f != 'symbol' && typeof f != 'boolean' && (e.type = f),
      t != null || r != null)
    ) {
      if (!((f !== 'submit' && f !== 'reset') || t != null)) return;
      (r = r != null ? '' + qr(r) : ''),
        (t = t != null ? '' + qr(t) : r),
        B || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (i = i ?? l),
      (i = typeof i != 'function' && typeof i != 'symbol' && !!i),
      (e.checked = B ? e.checked : !!i),
      (e.defaultChecked = !!i),
      g != null && typeof g != 'function' && typeof g != 'symbol' && typeof g != 'boolean' && (e.name = g);
  }
  function Vs(e, t, r) {
    (t === 'number' && tl(e.ownerDocument) === e) || e.defaultValue === '' + r || (e.defaultValue = '' + r);
  }
  function Ki(e, t, r, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < r.length; l++) t['$' + r[l]] = !0;
      for (r = 0; r < e.length; r++)
        (l = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== l && (e[r].selected = l),
          l && i && (e[r].defaultSelected = !0);
    } else {
      for (r = '' + qr(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          (e[l].selected = !0), i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Qo(e, t, r) {
    if (t != null && ((t = '' + qr(t)), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? '' + qr(r) : '';
  }
  function Ko(e, t, r, i) {
    if (t == null) {
      if (i != null) {
        if (r != null) throw Error(s(92));
        if (de(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ''), (t = r);
    }
    (r = qr(t)), (e.defaultValue = r), (i = e.textContent), i === r && i !== '' && i !== null && (e.value = i);
  }
  function Ji(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dy = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Jo(e, t, r) {
    var i = t.indexOf('--') === 0;
    r == null || typeof r == 'boolean' || r === ''
      ? i
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : i
        ? e.setProperty(t, r)
        : typeof r != 'number' || r === 0 || Dy.has(t)
          ? t === 'float'
            ? (e.cssFloat = r)
            : (e[t] = ('' + r).trim())
          : (e[t] = r + 'px');
  }
  function Wo(e, t, r) {
    if (t != null && typeof t != 'object') throw Error(s(62));
    if (((e = e.style), r != null)) {
      for (var i in r)
        !r.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf('--') === 0 ? e.setProperty(i, '') : i === 'float' ? (e.cssFloat = '') : (e[i] = ''));
      for (var l in t) (i = t[l]), t.hasOwnProperty(l) && r[l] !== i && Jo(e, l, i);
    } else for (var f in t) t.hasOwnProperty(f) && Jo(e, f, t[f]);
  }
  function Ys(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Ry = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height']
    ]),
    jy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function rl(e) {
    return jy.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var $s = null;
  function Xs(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wi = null,
    Pi = null;
  function Po(e) {
    var t = Gn(e);
    if (t && (e = t.stateNode)) {
      var r = e[ir] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Fs(e, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name),
            (t = r.name),
            r.type === 'radio' && t != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll('input[name="' + zr('' + t) + '"][type="radio"]'), t = 0; t < r.length; t++) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var l = i[ir] || null;
                if (!l) throw Error(s(90));
                Fs(i, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
              }
            }
            for (t = 0; t < r.length; t++) (i = r[t]), i.form === e.form && Xo(i);
          }
          break e;
        case 'textarea':
          Qo(e, r.value, r.defaultValue);
          break e;
        case 'select':
          (t = r.value), t != null && Ki(e, !!r.multiple, t, !1);
      }
    }
  }
  var Zs = !1;
  function eh(e, t, r) {
    if (Zs) return e(t, r);
    Zs = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (((Zs = !1), (Wi !== null || Pi !== null) && (Il(), Wi && ((t = Wi), (e = Pi), (Pi = Wi = null), Po(t), e))))
        for (t = 0; t < e.length; t++) Po(e[t]);
    }
  }
  function Ca(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = r[ir] || null;
    if (i === null) return null;
    r = i[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (i = !i.disabled) ||
          ((e = e.type), (i = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(s(231, t, typeof r));
    return r;
  }
  var Qs = !1;
  if (ln)
    try {
      var qa = {};
      Object.defineProperty(qa, 'passive', {
        get: function () {
          Qs = !0;
        }
      }),
        window.addEventListener('test', qa, qa),
        window.removeEventListener('test', qa, qa);
    } catch {
      Qs = !1;
    }
  var Fn = null,
    Ks = null,
    nl = null;
  function th() {
    if (nl) return nl;
    var e,
      t = Ks,
      r = t.length,
      i,
      l = 'value' in Fn ? Fn.value : Fn.textContent,
      f = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var g = r - e;
    for (i = 1; i <= g && t[r - i] === l[f - i]; i++);
    return (nl = l.slice(e, 1 < i ? 1 - i : void 0));
  }
  function il(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function al() {
    return !0;
  }
  function rh() {
    return !1;
  }
  function pr(e) {
    function t(r, i, l, f, g) {
      (this._reactName = r),
        (this._targetInst = l),
        (this.type = i),
        (this.nativeEvent = f),
        (this.target = g),
        (this.currentTarget = null);
      for (var B in e) e.hasOwnProperty(B) && ((r = e[B]), (this[B] = r ? r(f) : f[B]));
      return (
        (this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? al : rh),
        (this.isPropagationStopped = rh),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault ? r.preventDefault() : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = al));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = al));
        },
        persist: function () {},
        isPersistent: al
      }),
      t
    );
  }
  var bi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    ul = pr(bi),
    za = A({}, bi, { view: 0, detail: 0 }),
    Cy = pr(za),
    Js,
    Ws,
    ka,
    ll = A({}, za, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ec,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== ka &&
              (ka && e.type === 'mousemove'
                ? ((Js = e.screenX - ka.screenX), (Ws = e.screenY - ka.screenY))
                : (Ws = Js = 0),
              (ka = e)),
            Js);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ws;
      }
    }),
    nh = pr(ll),
    qy = A({}, ll, { dataTransfer: 0 }),
    zy = pr(qy),
    ky = A({}, za, { relatedTarget: 0 }),
    Ps = pr(ky),
    Iy = A({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ly = pr(Iy),
    Hy = A({}, bi, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      }
    }),
    Gy = pr(Hy),
    Fy = A({}, bi, { data: 0 }),
    ih = pr(Fy),
    Vy = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified'
    },
    Yy = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta'
    },
    $y = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Xy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $y[e]) ? !!t[e] : !1;
  }
  function ec() {
    return Xy;
  }
  var Zy = A({}, za, {
      key: function (e) {
        if (e.key) {
          var t = Vy[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = il(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Yy[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ec,
      charCode: function (e) {
        return e.type === 'keypress' ? il(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? il(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      }
    }),
    Qy = pr(Zy),
    Ky = A({}, ll, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    ah = pr(Ky),
    Jy = A({}, za, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ec
    }),
    Wy = pr(Jy),
    Py = A({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = pr(Py),
    tg = A({}, ll, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    rg = pr(tg),
    ng = A({}, bi, { newState: 0, oldState: 0 }),
    ig = pr(ng),
    ag = [9, 13, 27, 32],
    tc = ln && 'CompositionEvent' in window,
    Ia = null;
  ln && 'documentMode' in document && (Ia = document.documentMode);
  var ug = ln && 'TextEvent' in window && !Ia,
    uh = ln && (!tc || (Ia && 8 < Ia && 11 >= Ia)),
    lh = ' ',
    sh = !1;
  function ch(e, t) {
    switch (e) {
      case 'keyup':
        return ag.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function fh(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var ea = !1;
  function lg(e, t) {
    switch (e) {
      case 'compositionend':
        return fh(t);
      case 'keypress':
        return t.which !== 32 ? null : ((sh = !0), lh);
      case 'textInput':
        return (e = t.data), e === lh && sh ? null : e;
      default:
        return null;
    }
  }
  function sg(e, t) {
    if (ea)
      return e === 'compositionend' || (!tc && ch(e, t)) ? ((e = th()), (nl = Ks = Fn = null), (ea = !1), e) : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return uh && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var cg = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function oh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!cg[e.type] : t === 'textarea';
  }
  function hh(e, t, r, i) {
    Wi ? (Pi ? Pi.push(i) : (Pi = [i])) : (Wi = i),
      (t = Vl(t, 'onChange')),
      0 < t.length && ((r = new ul('onChange', 'change', null, r, i)), e.push({ event: r, listeners: t }));
  }
  var La = null,
    Ha = null;
  function fg(e) {
    k0(e, 0);
  }
  function sl(e) {
    var t = vi(e);
    if (Xo(t)) return e;
  }
  function dh(e, t) {
    if (e === 'change') return t;
  }
  var mh = !1;
  if (ln) {
    var rc;
    if (ln) {
      var nc = 'oninput' in document;
      if (!nc) {
        var ph = document.createElement('div');
        ph.setAttribute('oninput', 'return;'), (nc = typeof ph.oninput == 'function');
      }
      rc = nc;
    } else rc = !1;
    mh = rc && (!document.documentMode || 9 < document.documentMode);
  }
  function yh() {
    La && (La.detachEvent('onpropertychange', gh), (Ha = La = null));
  }
  function gh(e) {
    if (e.propertyName === 'value' && sl(Ha)) {
      var t = [];
      hh(t, Ha, e, Xs(e)), eh(fg, t);
    }
  }
  function og(e, t, r) {
    e === 'focusin' ? (yh(), (La = t), (Ha = r), La.attachEvent('onpropertychange', gh)) : e === 'focusout' && yh();
  }
  function hg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return sl(Ha);
  }
  function dg(e, t) {
    if (e === 'click') return sl(t);
  }
  function mg(e, t) {
    if (e === 'input' || e === 'change') return sl(t);
  }
  function pg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ar = typeof Object.is == 'function' ? Object.is : pg;
  function Ga(e, t) {
    if (Ar(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var l = r[i];
      if (!z.call(t, l) || !Ar(e[l], t[l])) return !1;
    }
    return !0;
  }
  function vh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bh(e, t) {
    var r = vh(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (((i = e + r.textContent.length), e <= t && i >= t)) return { node: r, offset: t - e };
        e = i;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = vh(r);
    }
  }
  function Sh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Sh(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Eh(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = tl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = tl(e.document);
    }
    return t;
  }
  function ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function yg(e, t) {
    var r = Eh(t);
    t = e.focusedElem;
    var i = e.selectionRange;
    if (r !== t && t && t.ownerDocument && Sh(t.ownerDocument.documentElement, t)) {
      if (i !== null && ic(t)) {
        if (((e = i.start), (r = i.end), r === void 0 && (r = e), 'selectionStart' in t))
          (t.selectionStart = e), (t.selectionEnd = Math.min(r, t.value.length));
        else if (((r = ((e = t.ownerDocument || document) && e.defaultView) || window), r.getSelection)) {
          r = r.getSelection();
          var l = t.textContent.length,
            f = Math.min(i.start, l);
          (i = i.end === void 0 ? f : Math.min(i.end, l)),
            !r.extend && f > i && ((l = i), (i = f), (f = l)),
            (l = bh(t, f));
          var g = bh(t, i);
          l &&
            g &&
            (r.rangeCount !== 1 ||
              r.anchorNode !== l.node ||
              r.anchorOffset !== l.offset ||
              r.focusNode !== g.node ||
              r.focusOffset !== g.offset) &&
            ((e = e.createRange()),
            e.setStart(l.node, l.offset),
            r.removeAllRanges(),
            f > i ? (r.addRange(e), r.extend(g.node, g.offset)) : (e.setEnd(g.node, g.offset), r.addRange(e)));
        }
      }
      for (e = [], r = t; (r = r.parentNode); )
        r.nodeType === 1 && e.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof t.focus == 'function' && t.focus(), t = 0; t < e.length; t++)
        (r = e[t]), (r.element.scrollLeft = r.left), (r.element.scrollTop = r.top);
    }
  }
  var gg = ln && 'documentMode' in document && 11 >= document.documentMode,
    ta = null,
    ac = null,
    Fa = null,
    uc = !1;
  function xh(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    uc ||
      ta == null ||
      ta !== tl(i) ||
      ((i = ta),
      'selectionStart' in i && ic(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
          })),
      (Fa && Ga(Fa, i)) ||
        ((Fa = i),
        (i = Vl(ac, 'onSelect')),
        0 < i.length &&
          ((t = new ul('onSelect', 'select', null, t, r)), e.push({ event: t, listeners: i }), (t.target = ta))));
  }
  function Si(e, t) {
    var r = {};
    return (r[e.toLowerCase()] = t.toLowerCase()), (r['Webkit' + e] = 'webkit' + t), (r['Moz' + e] = 'moz' + t), r;
  }
  var ra = {
      animationend: Si('Animation', 'AnimationEnd'),
      animationiteration: Si('Animation', 'AnimationIteration'),
      animationstart: Si('Animation', 'AnimationStart'),
      transitionrun: Si('Transition', 'TransitionRun'),
      transitionstart: Si('Transition', 'TransitionStart'),
      transitioncancel: Si('Transition', 'TransitionCancel'),
      transitionend: Si('Transition', 'TransitionEnd')
    },
    lc = {},
    _h = {};
  ln &&
    ((_h = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ra.animationend.animation, delete ra.animationiteration.animation, delete ra.animationstart.animation),
    'TransitionEvent' in window || delete ra.transitionend.transition);
  function Ei(e) {
    if (lc[e]) return lc[e];
    if (!ra[e]) return e;
    var t = ra[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in _h) return (lc[e] = t[r]);
    return e;
  }
  var Ah = Ei('animationend'),
    wh = Ei('animationiteration'),
    Oh = Ei('animationstart'),
    vg = Ei('transitionrun'),
    bg = Ei('transitionstart'),
    Sg = Ei('transitioncancel'),
    Nh = Ei('transitionend'),
    Th = new Map(),
    Mh =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wr(e, t) {
    Th.set(e, t), jr(t, [e]);
  }
  var kr = [],
    na = 0,
    sc = 0;
  function cl() {
    for (var e = na, t = (sc = na = 0); t < e; ) {
      var r = kr[t];
      kr[t++] = null;
      var i = kr[t];
      kr[t++] = null;
      var l = kr[t];
      kr[t++] = null;
      var f = kr[t];
      if (((kr[t++] = null), i !== null && l !== null)) {
        var g = i.pending;
        g === null ? (l.next = l) : ((l.next = g.next), (g.next = l)), (i.pending = l);
      }
      f !== 0 && Bh(r, l, f);
    }
  }
  function fl(e, t, r, i) {
    (kr[na++] = e),
      (kr[na++] = t),
      (kr[na++] = r),
      (kr[na++] = i),
      (sc |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i);
  }
  function cc(e, t, r, i) {
    return fl(e, t, r, i), ol(e);
  }
  function Vn(e, t) {
    return fl(e, null, null, t), ol(e);
  }
  function Bh(e, t, r) {
    e.lanes |= r;
    var i = e.alternate;
    i !== null && (i.lanes |= r);
    for (var l = !1, f = e.return; f !== null; )
      (f.childLanes |= r),
        (i = f.alternate),
        i !== null && (i.childLanes |= r),
        f.tag === 22 && ((e = f.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = f),
        (f = f.return);
    l &&
      t !== null &&
      e.tag === 3 &&
      ((f = e.stateNode),
      (l = 31 - Ce(r)),
      (f = f.hiddenUpdates),
      (e = f[l]),
      e === null ? (f[l] = [t]) : e.push(t),
      (t.lane = r | 536870912));
  }
  function ol(e) {
    if (50 < mu) throw ((mu = 0), (yf = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ia = {},
    Uh = new WeakMap();
  function Ir(e, t) {
    if (typeof e == 'object' && e !== null) {
      var r = Uh.get(e);
      return r !== void 0 ? r : ((t = { value: e, source: t, stack: G(t) }), Uh.set(e, t), t);
    }
    return { value: e, source: t, stack: G(t) };
  }
  var aa = [],
    ua = 0,
    hl = null,
    dl = 0,
    Lr = [],
    Hr = 0,
    xi = null,
    bn = 1,
    Sn = '';
  function _i(e, t) {
    (aa[ua++] = dl), (aa[ua++] = hl), (hl = e), (dl = t);
  }
  function Dh(e, t, r) {
    (Lr[Hr++] = bn), (Lr[Hr++] = Sn), (Lr[Hr++] = xi), (xi = e);
    var i = bn;
    e = Sn;
    var l = 32 - Ce(i) - 1;
    (i &= ~(1 << l)), (r += 1);
    var f = 32 - Ce(t) + l;
    if (30 < f) {
      var g = l - (l % 5);
      (f = (i & ((1 << g) - 1)).toString(32)),
        (i >>= g),
        (l -= g),
        (bn = (1 << (32 - Ce(t) + l)) | (r << l) | i),
        (Sn = f + e);
    } else (bn = (1 << f) | (r << l) | i), (Sn = e);
  }
  function fc(e) {
    e.return !== null && (_i(e, 1), Dh(e, 1, 0));
  }
  function oc(e) {
    for (; e === hl; ) (hl = aa[--ua]), (aa[ua] = null), (dl = aa[--ua]), (aa[ua] = null);
    for (; e === xi; )
      (xi = Lr[--Hr]), (Lr[Hr] = null), (Sn = Lr[--Hr]), (Lr[Hr] = null), (bn = Lr[--Hr]), (Lr[Hr] = null);
  }
  var or = null,
    er = null,
    vt = !1,
    Pr = null,
    sn = !1,
    hc = Error(s(519));
  function Ai(e) {
    var t = Error(s(418, ''));
    throw ($a(Ir(t, e)), hc);
  }
  function Rh(e) {
    var t = e.stateNode,
      r = e.type,
      i = e.memoizedProps;
    switch (((t[ft] = e), (t[ir] = i), r)) {
      case 'dialog':
        pt('cancel', t), pt('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        pt('load', t);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < yu.length; r++) pt(yu[r], t);
        break;
      case 'source':
        pt('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        pt('error', t), pt('load', t);
        break;
      case 'details':
        pt('toggle', t);
        break;
      case 'input':
        pt('invalid', t), Zo(t, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0), el(t);
        break;
      case 'select':
        pt('invalid', t);
        break;
      case 'textarea':
        pt('invalid', t), Ko(t, i.value, i.defaultValue, i.children), el(t);
    }
    (r = i.children),
      (typeof r != 'string' && typeof r != 'number' && typeof r != 'bigint') ||
      t.textContent === '' + r ||
      i.suppressHydrationWarning === !0 ||
      G0(t.textContent, r)
        ? (i.popover != null && (pt('beforetoggle', t), pt('toggle', t)),
          i.onScroll != null && pt('scroll', t),
          i.onScrollEnd != null && pt('scrollend', t),
          i.onClick != null && (t.onclick = Yl),
          (t = !0))
        : (t = !1),
      t || Ai(e);
  }
  function jh(e) {
    for (or = e.return; or; )
      switch (or.tag) {
        case 3:
        case 27:
          sn = !0;
          return;
        case 5:
        case 13:
          sn = !1;
          return;
        default:
          or = or.return;
      }
  }
  function Va(e) {
    if (e !== or) return !1;
    if (!vt) return jh(e), (vt = !0), !1;
    var t = !1,
      r;
    if (
      ((r = e.tag !== 3 && e.tag !== 27) &&
        ((r = e.tag === 5) && ((r = e.type), (r = !(r !== 'form' && r !== 'button') || Rf(e.type, e.memoizedProps))),
        (r = !r)),
      r && (t = !0),
      t && er && Ai(e),
      jh(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((r = e.data), r === '/$')) {
              if (t === 0) {
                er = tn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          e = e.nextSibling;
        }
        er = null;
      }
    } else er = or ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ya() {
    (er = or = null), (vt = !1);
  }
  function $a(e) {
    Pr === null ? (Pr = [e]) : Pr.push(e);
  }
  var Xa = Error(s(460)),
    Ch = Error(s(474)),
    dc = { then: function () {} };
  function qh(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function ml() {}
  function zh(e, t, r) {
    switch (((r = e[r]), r === void 0 ? e.push(t) : r !== t && (t.then(ml, ml), (t = r)), t.status)) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), e === Xa ? Error(s(483)) : e);
      default:
        if (typeof t.status == 'string') t.then(ml, ml);
        else {
          if (((e = Nt), e !== null && 100 < e.shellSuspendCounter)) throw Error(s(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (i) {
                if (t.status === 'pending') {
                  var l = t;
                  (l.status = 'fulfilled'), (l.value = i);
                }
              },
              function (i) {
                if (t.status === 'pending') {
                  var l = t;
                  (l.status = 'rejected'), (l.reason = i);
                }
              }
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), e === Xa ? Error(s(483)) : e);
        }
        throw ((Za = t), Xa);
    }
  }
  var Za = null;
  function kh() {
    if (Za === null) throw Error(s(459));
    var e = Za;
    return (Za = null), e;
  }
  var la = null,
    Qa = 0;
  function pl(e) {
    var t = Qa;
    return (Qa += 1), la === null && (la = []), zh(la, e, t);
  }
  function Ka(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function yl(e, t) {
    throw t.$$typeof === m
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
  }
  function Ih(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Lh(e) {
    function t(fe, ae) {
      if (e) {
        var oe = fe.deletions;
        oe === null ? ((fe.deletions = [ae]), (fe.flags |= 16)) : oe.push(ae);
      }
    }
    function r(fe, ae) {
      if (!e) return null;
      for (; ae !== null; ) t(fe, ae), (ae = ae.sibling);
      return null;
    }
    function i(fe) {
      for (var ae = new Map(); fe !== null; )
        fe.key !== null ? ae.set(fe.key, fe) : ae.set(fe.index, fe), (fe = fe.sibling);
      return ae;
    }
    function l(fe, ae) {
      return (fe = ri(fe, ae)), (fe.index = 0), (fe.sibling = null), fe;
    }
    function f(fe, ae, oe) {
      return (
        (fe.index = oe),
        e
          ? ((oe = fe.alternate),
            oe !== null ? ((oe = oe.index), oe < ae ? ((fe.flags |= 33554434), ae) : oe) : ((fe.flags |= 33554434), ae))
          : ((fe.flags |= 1048576), ae)
      );
    }
    function g(fe) {
      return e && fe.alternate === null && (fe.flags |= 33554434), fe;
    }
    function B(fe, ae, oe, we) {
      return ae === null || ae.tag !== 6
        ? ((ae = sf(oe, fe.mode, we)), (ae.return = fe), ae)
        : ((ae = l(ae, oe)), (ae.return = fe), ae);
    }
    function $(fe, ae, oe, we) {
      var Ye = oe.type;
      return Ye === S
        ? Ee(fe, ae, oe.props.children, we, oe.key)
        : ae !== null &&
            (ae.elementType === Ye || (typeof Ye == 'object' && Ye !== null && Ye.$$typeof === Q && Ih(Ye) === ae.type))
          ? ((ae = l(ae, oe.props)), Ka(ae, oe), (ae.return = fe), ae)
          : ((ae = jl(oe.type, oe.key, oe.props, null, fe.mode, we)), Ka(ae, oe), (ae.return = fe), ae);
    }
    function le(fe, ae, oe, we) {
      return ae === null ||
        ae.tag !== 4 ||
        ae.stateNode.containerInfo !== oe.containerInfo ||
        ae.stateNode.implementation !== oe.implementation
        ? ((ae = cf(oe, fe.mode, we)), (ae.return = fe), ae)
        : ((ae = l(ae, oe.children || [])), (ae.return = fe), ae);
    }
    function Ee(fe, ae, oe, we, Ye) {
      return ae === null || ae.tag !== 7
        ? ((ae = ji(oe, fe.mode, we, Ye)), (ae.return = fe), ae)
        : ((ae = l(ae, oe)), (ae.return = fe), ae);
    }
    function Te(fe, ae, oe) {
      if ((typeof ae == 'string' && ae !== '') || typeof ae == 'number' || typeof ae == 'bigint')
        return (ae = sf('' + ae, fe.mode, oe)), (ae.return = fe), ae;
      if (typeof ae == 'object' && ae !== null) {
        switch (ae.$$typeof) {
          case h:
            return (oe = jl(ae.type, ae.key, ae.props, null, fe.mode, oe)), Ka(oe, ae), (oe.return = fe), oe;
          case o:
            return (ae = cf(ae, fe.mode, oe)), (ae.return = fe), ae;
          case Q:
            var we = ae._init;
            return (ae = we(ae._payload)), Te(fe, ae, oe);
        }
        if (de(ae) || Ae(ae)) return (ae = ji(ae, fe.mode, oe, null)), (ae.return = fe), ae;
        if (typeof ae.then == 'function') return Te(fe, pl(ae), oe);
        if (ae.$$typeof === N) return Te(fe, Ul(fe, ae), oe);
        yl(fe, ae);
      }
      return null;
    }
    function pe(fe, ae, oe, we) {
      var Ye = ae !== null ? ae.key : null;
      if ((typeof oe == 'string' && oe !== '') || typeof oe == 'number' || typeof oe == 'bigint')
        return Ye !== null ? null : B(fe, ae, '' + oe, we);
      if (typeof oe == 'object' && oe !== null) {
        switch (oe.$$typeof) {
          case h:
            return oe.key === Ye ? $(fe, ae, oe, we) : null;
          case o:
            return oe.key === Ye ? le(fe, ae, oe, we) : null;
          case Q:
            return (Ye = oe._init), (oe = Ye(oe._payload)), pe(fe, ae, oe, we);
        }
        if (de(oe) || Ae(oe)) return Ye !== null ? null : Ee(fe, ae, oe, we, null);
        if (typeof oe.then == 'function') return pe(fe, ae, pl(oe), we);
        if (oe.$$typeof === N) return pe(fe, ae, Ul(fe, oe), we);
        yl(fe, oe);
      }
      return null;
    }
    function Se(fe, ae, oe, we, Ye) {
      if ((typeof we == 'string' && we !== '') || typeof we == 'number' || typeof we == 'bigint')
        return (fe = fe.get(oe) || null), B(ae, fe, '' + we, Ye);
      if (typeof we == 'object' && we !== null) {
        switch (we.$$typeof) {
          case h:
            return (fe = fe.get(we.key === null ? oe : we.key) || null), $(ae, fe, we, Ye);
          case o:
            return (fe = fe.get(we.key === null ? oe : we.key) || null), le(ae, fe, we, Ye);
          case Q:
            var ct = we._init;
            return (we = ct(we._payload)), Se(fe, ae, oe, we, Ye);
        }
        if (de(we) || Ae(we)) return (fe = fe.get(oe) || null), Ee(ae, fe, we, Ye, null);
        if (typeof we.then == 'function') return Se(fe, ae, oe, pl(we), Ye);
        if (we.$$typeof === N) return Se(fe, ae, oe, Ul(ae, we), Ye);
        yl(ae, we);
      }
      return null;
    }
    function Ze(fe, ae, oe, we) {
      for (var Ye = null, ct = null, Qe = ae, et = (ae = 0), Jt = null; Qe !== null && et < oe.length; et++) {
        Qe.index > et ? ((Jt = Qe), (Qe = null)) : (Jt = Qe.sibling);
        var bt = pe(fe, Qe, oe[et], we);
        if (bt === null) {
          Qe === null && (Qe = Jt);
          break;
        }
        e && Qe && bt.alternate === null && t(fe, Qe),
          (ae = f(bt, ae, et)),
          ct === null ? (Ye = bt) : (ct.sibling = bt),
          (ct = bt),
          (Qe = Jt);
      }
      if (et === oe.length) return r(fe, Qe), vt && _i(fe, et), Ye;
      if (Qe === null) {
        for (; et < oe.length; et++)
          (Qe = Te(fe, oe[et], we)),
            Qe !== null && ((ae = f(Qe, ae, et)), ct === null ? (Ye = Qe) : (ct.sibling = Qe), (ct = Qe));
        return vt && _i(fe, et), Ye;
      }
      for (Qe = i(Qe); et < oe.length; et++)
        (Jt = Se(Qe, fe, et, oe[et], we)),
          Jt !== null &&
            (e && Jt.alternate !== null && Qe.delete(Jt.key === null ? et : Jt.key),
            (ae = f(Jt, ae, et)),
            ct === null ? (Ye = Jt) : (ct.sibling = Jt),
            (ct = Jt));
      return (
        e &&
          Qe.forEach(function (ci) {
            return t(fe, ci);
          }),
        vt && _i(fe, et),
        Ye
      );
    }
    function rt(fe, ae, oe, we) {
      if (oe == null) throw Error(s(151));
      for (
        var Ye = null, ct = null, Qe = ae, et = (ae = 0), Jt = null, bt = oe.next();
        Qe !== null && !bt.done;
        et++, bt = oe.next()
      ) {
        Qe.index > et ? ((Jt = Qe), (Qe = null)) : (Jt = Qe.sibling);
        var ci = pe(fe, Qe, bt.value, we);
        if (ci === null) {
          Qe === null && (Qe = Jt);
          break;
        }
        e && Qe && ci.alternate === null && t(fe, Qe),
          (ae = f(ci, ae, et)),
          ct === null ? (Ye = ci) : (ct.sibling = ci),
          (ct = ci),
          (Qe = Jt);
      }
      if (bt.done) return r(fe, Qe), vt && _i(fe, et), Ye;
      if (Qe === null) {
        for (; !bt.done; et++, bt = oe.next())
          (bt = Te(fe, bt.value, we)),
            bt !== null && ((ae = f(bt, ae, et)), ct === null ? (Ye = bt) : (ct.sibling = bt), (ct = bt));
        return vt && _i(fe, et), Ye;
      }
      for (Qe = i(Qe); !bt.done; et++, bt = oe.next())
        (bt = Se(Qe, fe, et, bt.value, we)),
          bt !== null &&
            (e && bt.alternate !== null && Qe.delete(bt.key === null ? et : bt.key),
            (ae = f(bt, ae, et)),
            ct === null ? (Ye = bt) : (ct.sibling = bt),
            (ct = bt));
      return (
        e &&
          Qe.forEach(function (j1) {
            return t(fe, j1);
          }),
        vt && _i(fe, et),
        Ye
      );
    }
    function qt(fe, ae, oe, we) {
      if (
        (typeof oe == 'object' && oe !== null && oe.type === S && oe.key === null && (oe = oe.props.children),
        typeof oe == 'object' && oe !== null)
      ) {
        switch (oe.$$typeof) {
          case h:
            e: {
              for (var Ye = oe.key; ae !== null; ) {
                if (ae.key === Ye) {
                  if (((Ye = oe.type), Ye === S)) {
                    if (ae.tag === 7) {
                      r(fe, ae.sibling), (we = l(ae, oe.props.children)), (we.return = fe), (fe = we);
                      break e;
                    }
                  } else if (
                    ae.elementType === Ye ||
                    (typeof Ye == 'object' && Ye !== null && Ye.$$typeof === Q && Ih(Ye) === ae.type)
                  ) {
                    r(fe, ae.sibling), (we = l(ae, oe.props)), Ka(we, oe), (we.return = fe), (fe = we);
                    break e;
                  }
                  r(fe, ae);
                  break;
                } else t(fe, ae);
                ae = ae.sibling;
              }
              oe.type === S
                ? ((we = ji(oe.props.children, fe.mode, we, oe.key)), (we.return = fe), (fe = we))
                : ((we = jl(oe.type, oe.key, oe.props, null, fe.mode, we)), Ka(we, oe), (we.return = fe), (fe = we));
            }
            return g(fe);
          case o:
            e: {
              for (Ye = oe.key; ae !== null; ) {
                if (ae.key === Ye)
                  if (
                    ae.tag === 4 &&
                    ae.stateNode.containerInfo === oe.containerInfo &&
                    ae.stateNode.implementation === oe.implementation
                  ) {
                    r(fe, ae.sibling), (we = l(ae, oe.children || [])), (we.return = fe), (fe = we);
                    break e;
                  } else {
                    r(fe, ae);
                    break;
                  }
                else t(fe, ae);
                ae = ae.sibling;
              }
              (we = cf(oe, fe.mode, we)), (we.return = fe), (fe = we);
            }
            return g(fe);
          case Q:
            return (Ye = oe._init), (oe = Ye(oe._payload)), qt(fe, ae, oe, we);
        }
        if (de(oe)) return Ze(fe, ae, oe, we);
        if (Ae(oe)) {
          if (((Ye = Ae(oe)), typeof Ye != 'function')) throw Error(s(150));
          return (oe = Ye.call(oe)), rt(fe, ae, oe, we);
        }
        if (typeof oe.then == 'function') return qt(fe, ae, pl(oe), we);
        if (oe.$$typeof === N) return qt(fe, ae, Ul(fe, oe), we);
        yl(fe, oe);
      }
      return (typeof oe == 'string' && oe !== '') || typeof oe == 'number' || typeof oe == 'bigint'
        ? ((oe = '' + oe),
          ae !== null && ae.tag === 6
            ? (r(fe, ae.sibling), (we = l(ae, oe)), (we.return = fe), (fe = we))
            : (r(fe, ae), (we = sf(oe, fe.mode, we)), (we.return = fe), (fe = we)),
          g(fe))
        : r(fe, ae);
    }
    return function (fe, ae, oe, we) {
      try {
        Qa = 0;
        var Ye = qt(fe, ae, oe, we);
        return (la = null), Ye;
      } catch (Qe) {
        if (Qe === Xa) throw Qe;
        var ct = Yr(29, Qe, null, fe.mode);
        return (ct.lanes = we), (ct.return = fe), ct;
      } finally {
      }
    };
  }
  var wi = Lh(!0),
    Hh = Lh(!1),
    sa = Ne(null),
    gl = Ne(0);
  function Gh(e, t) {
    (e = Un), M(gl, e), M(sa, t), (Un = e | t.baseLanes);
  }
  function mc() {
    M(gl, Un), M(sa, sa.current);
  }
  function pc() {
    (Un = gl.current), De(sa), De(gl);
  }
  var Gr = Ne(null),
    cn = null;
  function Yn(e) {
    var t = e.alternate;
    M(Vt, Vt.current & 1),
      M(Gr, e),
      cn === null && (t === null || sa.current !== null || t.memoizedState !== null) && (cn = e);
  }
  function Fh(e) {
    if (e.tag === 22) {
      if ((M(Vt, Vt.current), M(Gr, e), cn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (cn = e);
      }
    } else $n();
  }
  function $n() {
    M(Vt, Vt.current), M(Gr, Gr.current);
  }
  function En(e) {
    De(Gr), cn === e && (cn = null), De(Vt);
  }
  var Vt = Ne(0);
  function vl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Eg =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (r, i) {
                  e.push(i);
                }
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (r) {
                  return r();
                });
            };
          },
    xg = n.unstable_scheduleCallback,
    _g = n.unstable_NormalPriority,
    Yt = { $$typeof: N, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function yc() {
    return { controller: new Eg(), data: new Map(), refCount: 0 };
  }
  function Ja(e) {
    e.refCount--,
      e.refCount === 0 &&
        xg(_g, function () {
          e.controller.abort();
        });
  }
  var Wa = null,
    gc = 0,
    ca = 0,
    fa = null;
  function Ag(e, t) {
    if (Wa === null) {
      var r = (Wa = []);
      (gc = 0),
        (ca = Af()),
        (fa = {
          status: 'pending',
          value: void 0,
          then: function (i) {
            r.push(i);
          }
        });
    }
    return gc++, t.then(Vh, Vh), t;
  }
  function Vh() {
    if (--gc === 0 && Wa !== null) {
      fa !== null && (fa.status = 'fulfilled');
      var e = Wa;
      (Wa = null), (ca = 0), (fa = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function wg(e, t) {
    var r = [],
      i = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (l) {
          r.push(l);
        }
      };
    return (
      e.then(
        function () {
          (i.status = 'fulfilled'), (i.value = t);
          for (var l = 0; l < r.length; l++) (0, r[l])(t);
        },
        function (l) {
          for (i.status = 'rejected', i.reason = l, l = 0; l < r.length; l++) (0, r[l])(void 0);
        }
      ),
      i
    );
  }
  var Yh = _.S;
  _.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && Ag(e, t), Yh !== null && Yh(e, t);
  };
  var Oi = Ne(null);
  function vc() {
    var e = Oi.current;
    return e !== null ? e : Nt.pooledCache;
  }
  function bl(e, t) {
    t === null ? M(Oi, Oi.current) : M(Oi, t.pool);
  }
  function $h() {
    var e = vc();
    return e === null ? null : { parent: Yt._currentValue, pool: e };
  }
  var Xn = 0,
    lt = null,
    xt = null,
    Lt = null,
    Sl = !1,
    oa = !1,
    Ni = !1,
    El = 0,
    Pa = 0,
    ha = null,
    Og = 0;
  function zt() {
    throw Error(s(321));
  }
  function bc(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Ar(e[r], t[r])) return !1;
    return !0;
  }
  function Sc(e, t, r, i, l, f) {
    return (
      (Xn = f),
      (lt = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_.H = e === null || e.memoizedState === null ? Ti : Zn),
      (Ni = !1),
      (f = r(i, l)),
      (Ni = !1),
      oa && (f = Zh(t, r, i, l)),
      Xh(e),
      f
    );
  }
  function Xh(e) {
    _.H = fn;
    var t = xt !== null && xt.next !== null;
    if (((Xn = 0), (Lt = xt = lt = null), (Sl = !1), (Pa = 0), (ha = null), t)) throw Error(s(300));
    e === null || Qt || ((e = e.dependencies), e !== null && Bl(e) && (Qt = !0));
  }
  function Zh(e, t, r, i) {
    lt = e;
    var l = 0;
    do {
      if ((oa && (ha = null), (Pa = 0), (oa = !1), 25 <= l)) throw Error(s(301));
      if (((l += 1), (Lt = xt = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null), (f.events = null), (f.stores = null), f.memoCache != null && (f.memoCache.index = 0);
      }
      (_.H = Mi), (f = t(r, i));
    } while (oa);
    return f;
  }
  function Ng() {
    var e = _.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? eu(t) : t),
      (e = e.useState()[0]),
      (xt !== null ? xt.memoizedState : null) !== e && (lt.flags |= 1024),
      t
    );
  }
  function Ec() {
    var e = El !== 0;
    return (El = 0), e;
  }
  function xc(e, t, r) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r);
  }
  function _c(e) {
    if (Sl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Sl = !1;
    }
    (Xn = 0), (Lt = xt = lt = null), (oa = !1), (Pa = El = 0), (ha = null);
  }
  function yr() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Lt === null ? (lt.memoizedState = Lt = e) : (Lt = Lt.next = e), Lt;
  }
  function Ht() {
    if (xt === null) {
      var e = lt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xt.next;
    var t = Lt === null ? lt.memoizedState : Lt.next;
    if (t !== null) (Lt = t), (xt = e);
    else {
      if (e === null) throw lt.alternate === null ? Error(s(467)) : Error(s(310));
      (xt = e),
        (e = {
          memoizedState: xt.memoizedState,
          baseState: xt.baseState,
          baseQueue: xt.baseQueue,
          queue: xt.queue,
          next: null
        }),
        Lt === null ? (lt.memoizedState = Lt = e) : (Lt = Lt.next = e);
    }
    return Lt;
  }
  var xl;
  xl = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function eu(e) {
    var t = Pa;
    return (
      (Pa += 1),
      ha === null && (ha = []),
      (e = zh(ha, e, t)),
      (t = lt),
      (Lt === null ? t.memoizedState : Lt.next) === null &&
        ((t = t.alternate), (_.H = t === null || t.memoizedState === null ? Ti : Zn)),
      e
    );
  }
  function _l(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return eu(e);
      if (e.$$typeof === N) return ar(e);
    }
    throw Error(s(438, String(e)));
  }
  function Ac(e) {
    var t = null,
      r = lt.updateQueue;
    if ((r !== null && (t = r.memoCache), t == null)) {
      var i = lt.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (l) {
                return l.slice();
              }),
              index: 0
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      r === null && ((r = xl()), (lt.updateQueue = r)),
      (r.memoCache = t),
      (r = t.data[t.index]),
      r === void 0)
    )
      for (r = t.data[t.index] = Array(e), i = 0; i < e; i++) r[i] = We;
    return t.index++, r;
  }
  function xn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Al(e) {
    var t = Ht();
    return wc(t, xt, e);
  }
  function wc(e, t, r) {
    var i = e.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = r;
    var l = e.baseQueue,
      f = i.pending;
    if (f !== null) {
      if (l !== null) {
        var g = l.next;
        (l.next = f.next), (f.next = g);
      }
      (t.baseQueue = l = f), (i.pending = null);
    }
    if (((f = e.baseState), l === null)) e.memoizedState = f;
    else {
      t = l.next;
      var B = (g = null),
        $ = null,
        le = t,
        Ee = !1;
      do {
        var Te = le.lane & -536870913;
        if (Te !== le.lane ? (yt & Te) === Te : (Xn & Te) === Te) {
          var pe = le.revertLane;
          if (pe === 0)
            $ !== null &&
              ($ = $.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: le.action,
                  hasEagerState: le.hasEagerState,
                  eagerState: le.eagerState,
                  next: null
                }),
              Te === ca && (Ee = !0);
          else if ((Xn & pe) === pe) {
            (le = le.next), pe === ca && (Ee = !0);
            continue;
          } else
            (Te = {
              lane: 0,
              revertLane: le.revertLane,
              action: le.action,
              hasEagerState: le.hasEagerState,
              eagerState: le.eagerState,
              next: null
            }),
              $ === null ? ((B = $ = Te), (g = f)) : ($ = $.next = Te),
              (lt.lanes |= pe),
              (ni |= pe);
          (Te = le.action), Ni && r(f, Te), (f = le.hasEagerState ? le.eagerState : r(f, Te));
        } else
          (pe = {
            lane: Te,
            revertLane: le.revertLane,
            action: le.action,
            hasEagerState: le.hasEagerState,
            eagerState: le.eagerState,
            next: null
          }),
            $ === null ? ((B = $ = pe), (g = f)) : ($ = $.next = pe),
            (lt.lanes |= Te),
            (ni |= Te);
        le = le.next;
      } while (le !== null && le !== t);
      if (($ === null ? (g = f) : ($.next = B), !Ar(f, e.memoizedState) && ((Qt = !0), Ee && ((r = fa), r !== null))))
        throw r;
      (e.memoizedState = f), (e.baseState = g), (e.baseQueue = $), (i.lastRenderedState = f);
    }
    return l === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function Oc(e) {
    var t = Ht(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch,
      l = r.pending,
      f = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var g = (l = l.next);
      do (f = e(f, g.action)), (g = g.next);
      while (g !== l);
      Ar(f, t.memoizedState) || (Qt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f);
    }
    return [f, i];
  }
  function Qh(e, t, r) {
    var i = lt,
      l = Ht(),
      f = vt;
    if (f) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else r = t();
    var g = !Ar((xt || l).memoizedState, r);
    if (
      (g && ((l.memoizedState = r), (Qt = !0)),
      (l = l.queue),
      Mc(Wh.bind(null, i, l, e), [e]),
      l.getSnapshot !== t || g || (Lt !== null && Lt.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), da(9, Jh.bind(null, i, l, r, t), { destroy: void 0 }, null), Nt === null))
        throw Error(s(349));
      f || Xn & 60 || Kh(i, t, r);
    }
    return r;
  }
  function Kh(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = lt.updateQueue),
      t === null
        ? ((t = xl()), (lt.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Jh(e, t, r, i) {
    (t.value = r), (t.getSnapshot = i), Ph(t) && ed(e);
  }
  function Wh(e, t, r) {
    return r(function () {
      Ph(t) && ed(e);
    });
  }
  function Ph(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ar(e, r);
    } catch {
      return !0;
    }
  }
  function ed(e) {
    var t = Vn(e, 2);
    t !== null && hr(t, e, 2);
  }
  function Nc(e) {
    var t = yr();
    if (typeof e == 'function') {
      var r = e;
      if (((e = r()), Ni)) {
        Be(!0);
        try {
          r();
        } finally {
          Be(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xn, lastRenderedState: e }),
      t
    );
  }
  function td(e, t, r, i) {
    return (e.baseState = r), wc(e, xt, typeof i == 'function' ? i : xn);
  }
  function Tg(e, t, r, i, l) {
    if (Nl(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          f.listeners.push(g);
        }
      };
      _.T !== null ? r(!0) : (f.isTransition = !1),
        i(f),
        (r = t.pending),
        r === null ? ((f.next = t.pending = f), rd(t, f)) : ((f.next = r.next), (t.pending = r.next = f));
    }
  }
  function rd(e, t) {
    var r = t.action,
      i = t.payload,
      l = e.state;
    if (t.isTransition) {
      var f = _.T,
        g = {};
      _.T = g;
      try {
        var B = r(l, i),
          $ = _.S;
        $ !== null && $(g, B), nd(e, t, B);
      } catch (le) {
        Tc(e, t, le);
      } finally {
        _.T = f;
      }
    } else
      try {
        (f = r(l, i)), nd(e, t, f);
      } catch (le) {
        Tc(e, t, le);
      }
  }
  function nd(e, t, r) {
    r !== null && typeof r == 'object' && typeof r.then == 'function'
      ? r.then(
          function (i) {
            id(e, t, i);
          },
          function (i) {
            return Tc(e, t, i);
          }
        )
      : id(e, t, r);
  }
  function id(e, t, r) {
    (t.status = 'fulfilled'),
      (t.value = r),
      ad(t),
      (e.state = r),
      (t = e.pending),
      t !== null && ((r = t.next), r === t ? (e.pending = null) : ((r = r.next), (t.next = r), rd(e, r)));
  }
  function Tc(e, t, r) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do (t.status = 'rejected'), (t.reason = r), ad(t), (t = t.next);
      while (t !== i);
    }
    e.action = null;
  }
  function ad(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ud(e, t) {
    return t;
  }
  function ld(e, t) {
    if (vt) {
      var r = Nt.formState;
      if (r !== null) {
        e: {
          var i = lt;
          if (vt) {
            if (er) {
              t: {
                for (var l = er, f = sn; l.nodeType !== 8; ) {
                  if (!f) {
                    l = null;
                    break t;
                  }
                  if (((l = tn(l.nextSibling)), l === null)) {
                    l = null;
                    break t;
                  }
                }
                (f = l.data), (l = f === 'F!' || f === 'F' ? l : null);
              }
              if (l) {
                (er = tn(l.nextSibling)), (i = l.data === 'F!');
                break e;
              }
            }
            Ai(i);
          }
          i = !1;
        }
        i && (t = r[0]);
      }
    }
    return (
      (r = yr()),
      (r.memoizedState = r.baseState = t),
      (i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ud, lastRenderedState: t }),
      (r.queue = i),
      (r = wd.bind(null, lt, i)),
      (i.dispatch = r),
      (i = Nc(!1)),
      (f = jc.bind(null, lt, !1, i.queue)),
      (i = yr()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = l),
      (r = Tg.bind(null, lt, l, f, r)),
      (l.dispatch = r),
      (i.memoizedState = e),
      [t, r, !1]
    );
  }
  function sd(e) {
    var t = Ht();
    return cd(t, xt, e);
  }
  function cd(e, t, r) {
    (t = wc(e, t, ud)[0]),
      (e = Al(xn)[0]),
      (t = typeof t == 'object' && t !== null && typeof t.then == 'function' ? eu(t) : t);
    var i = Ht(),
      l = i.queue,
      f = l.dispatch;
    return (
      r !== i.memoizedState && ((lt.flags |= 2048), da(9, Mg.bind(null, l, r), { destroy: void 0 }, null)), [t, f, e]
    );
  }
  function Mg(e, t) {
    e.action = t;
  }
  function fd(e) {
    var t = Ht(),
      r = xt;
    if (r !== null) return cd(t, r, e);
    Ht(), (t = t.memoizedState), (r = Ht());
    var i = r.queue.dispatch;
    return (r.memoizedState = e), [t, i, !1];
  }
  function da(e, t, r, i) {
    return (
      (e = { tag: e, create: t, inst: r, deps: i, next: null }),
      (t = lt.updateQueue),
      t === null && ((t = xl()), (lt.updateQueue = t)),
      (r = t.lastEffect),
      r === null ? (t.lastEffect = e.next = e) : ((i = r.next), (r.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function od() {
    return Ht().memoizedState;
  }
  function wl(e, t, r, i) {
    var l = yr();
    (lt.flags |= e), (l.memoizedState = da(1 | t, r, { destroy: void 0 }, i === void 0 ? null : i));
  }
  function Ol(e, t, r, i) {
    var l = Ht();
    i = i === void 0 ? null : i;
    var f = l.memoizedState.inst;
    xt !== null && i !== null && bc(i, xt.memoizedState.deps)
      ? (l.memoizedState = da(t, r, f, i))
      : ((lt.flags |= e), (l.memoizedState = da(1 | t, r, f, i)));
  }
  function hd(e, t) {
    wl(8390656, 8, e, t);
  }
  function Mc(e, t) {
    Ol(2048, 8, e, t);
  }
  function dd(e, t) {
    return Ol(4, 2, e, t);
  }
  function md(e, t) {
    return Ol(4, 4, e, t);
  }
  function pd(e, t) {
    if (typeof t == 'function') {
      e = e();
      var r = t(e);
      return function () {
        typeof r == 'function' ? r() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function yd(e, t, r) {
    (r = r != null ? r.concat([e]) : null), Ol(4, 4, pd.bind(null, t, e), r);
  }
  function Bc() {}
  function gd(e, t) {
    var r = Ht();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return t !== null && bc(t, i[1]) ? i[0] : ((r.memoizedState = [e, t]), e);
  }
  function vd(e, t) {
    var r = Ht();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    if (t !== null && bc(t, i[1])) return i[0];
    if (((i = e()), Ni)) {
      Be(!0);
      try {
        e();
      } finally {
        Be(!1);
      }
    }
    return (r.memoizedState = [i, t]), i;
  }
  function Uc(e, t, r) {
    return r === void 0 || Xn & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = r), (e = S0()), (lt.lanes |= e), (ni |= e), r);
  }
  function bd(e, t, r, i) {
    return Ar(r, t)
      ? r
      : sa.current !== null
        ? ((e = Uc(e, r, i)), Ar(e, t) || (Qt = !0), e)
        : Xn & 42
          ? ((e = S0()), (lt.lanes |= e), (ni |= e), t)
          : ((Qt = !0), (e.memoizedState = r));
  }
  function Sd(e, t, r, i, l) {
    var f = w.p;
    w.p = f !== 0 && 8 > f ? f : 8;
    var g = _.T,
      B = {};
    (_.T = B), jc(e, !1, t, r);
    try {
      var $ = l(),
        le = _.S;
      if ((le !== null && le(B, $), $ !== null && typeof $ == 'object' && typeof $.then == 'function')) {
        var Ee = wg($, i);
        tu(e, t, Ee, Tr(e));
      } else tu(e, t, i, Tr(e));
    } catch (Te) {
      tu(e, t, { then: function () {}, status: 'rejected', reason: Te }, Tr());
    } finally {
      (w.p = f), (_.T = g);
    }
  }
  function Bg() {}
  function Dc(e, t, r, i) {
    if (e.tag !== 5) throw Error(s(476));
    var l = Ed(e).queue;
    Sd(
      e,
      l,
      t,
      Ue,
      r === null
        ? Bg
        : function () {
            return xd(e), r(i);
          }
    );
  }
  function Ed(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Ue,
      baseState: Ue,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xn, lastRenderedState: Ue },
      next: null
    };
    var r = {};
    return (
      (t.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xn, lastRenderedState: r },
        next: null
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function xd(e) {
    var t = Ed(e).next.queue;
    tu(e, t, {}, Tr());
  }
  function Rc() {
    return ar(Eu);
  }
  function _d() {
    return Ht().memoizedState;
  }
  function Ad() {
    return Ht().memoizedState;
  }
  function Ug(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = Tr();
          e = Jn(r);
          var i = Wn(t, e, r);
          i !== null && (hr(i, t, r), iu(i, t, r)), (t = { cache: yc() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Dg(e, t, r) {
    var i = Tr();
    (r = { lane: i, revertLane: 0, action: r, hasEagerState: !1, eagerState: null, next: null }),
      Nl(e) ? Od(t, r) : ((r = cc(e, t, r, i)), r !== null && (hr(r, e, i), Nd(r, t, i)));
  }
  function wd(e, t, r) {
    var i = Tr();
    tu(e, t, r, i);
  }
  function tu(e, t, r, i) {
    var l = { lane: i, revertLane: 0, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Nl(e)) Od(t, l);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && ((f = t.lastRenderedReducer), f !== null))
        try {
          var g = t.lastRenderedState,
            B = f(g, r);
          if (((l.hasEagerState = !0), (l.eagerState = B), Ar(B, g))) return fl(e, t, l, 0), Nt === null && cl(), !1;
        } catch {
        } finally {
        }
      if (((r = cc(e, t, l, i)), r !== null)) return hr(r, e, i), Nd(r, t, i), !0;
    }
    return !1;
  }
  function jc(e, t, r, i) {
    if (((i = { lane: 2, revertLane: Af(), action: i, hasEagerState: !1, eagerState: null, next: null }), Nl(e))) {
      if (t) throw Error(s(479));
    } else (t = cc(e, r, i, 2)), t !== null && hr(t, e, 2);
  }
  function Nl(e) {
    var t = e.alternate;
    return e === lt || (t !== null && t === lt);
  }
  function Od(e, t) {
    oa = Sl = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
  }
  function Nd(e, t, r) {
    if (r & 4194176) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), Is(e, r);
    }
  }
  var fn = {
    readContext: ar,
    use: _l,
    useCallback: zt,
    useContext: zt,
    useEffect: zt,
    useImperativeHandle: zt,
    useLayoutEffect: zt,
    useInsertionEffect: zt,
    useMemo: zt,
    useReducer: zt,
    useRef: zt,
    useState: zt,
    useDebugValue: zt,
    useDeferredValue: zt,
    useTransition: zt,
    useSyncExternalStore: zt,
    useId: zt
  };
  (fn.useCacheRefresh = zt),
    (fn.useMemoCache = zt),
    (fn.useHostTransitionStatus = zt),
    (fn.useFormState = zt),
    (fn.useActionState = zt),
    (fn.useOptimistic = zt);
  var Ti = {
    readContext: ar,
    use: _l,
    useCallback: function (e, t) {
      return (yr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ar,
    useEffect: hd,
    useImperativeHandle: function (e, t, r) {
      (r = r != null ? r.concat([e]) : null), wl(4194308, 4, pd.bind(null, t, e), r);
    },
    useLayoutEffect: function (e, t) {
      return wl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      wl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = yr();
      t = t === void 0 ? null : t;
      var i = e();
      if (Ni) {
        Be(!0);
        try {
          e();
        } finally {
          Be(!1);
        }
      }
      return (r.memoizedState = [i, t]), i;
    },
    useReducer: function (e, t, r) {
      var i = yr();
      if (r !== void 0) {
        var l = r(t);
        if (Ni) {
          Be(!0);
          try {
            r(t);
          } finally {
            Be(!1);
          }
        }
      } else l = t;
      return (
        (i.memoizedState = i.baseState = l),
        (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: l }),
        (i.queue = e),
        (e = e.dispatch = Dg.bind(null, lt, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Nc(e);
      var t = e.queue,
        r = wd.bind(null, lt, t);
      return (t.dispatch = r), [e.memoizedState, r];
    },
    useDebugValue: Bc,
    useDeferredValue: function (e, t) {
      var r = yr();
      return Uc(r, e, t);
    },
    useTransition: function () {
      var e = Nc(!1);
      return (e = Sd.bind(null, lt, e.queue, !0, !1)), (yr().memoizedState = e), [!1, e];
    },
    useSyncExternalStore: function (e, t, r) {
      var i = lt,
        l = yr();
      if (vt) {
        if (r === void 0) throw Error(s(407));
        r = r();
      } else {
        if (((r = t()), Nt === null)) throw Error(s(349));
        yt & 60 || Kh(i, t, r);
      }
      l.memoizedState = r;
      var f = { value: r, getSnapshot: t };
      return (
        (l.queue = f),
        hd(Wh.bind(null, i, f, e), [e]),
        (i.flags |= 2048),
        da(9, Jh.bind(null, i, f, r, t), { destroy: void 0 }, null),
        r
      );
    },
    useId: function () {
      var e = yr(),
        t = Nt.identifierPrefix;
      if (vt) {
        var r = Sn,
          i = bn;
        (r = (i & ~(1 << (32 - Ce(i) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = El++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':');
      } else (r = Og++), (t = ':' + t + 'r' + r.toString(32) + ':');
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (yr().memoizedState = Ug.bind(null, lt));
    }
  };
  (Ti.useMemoCache = Ac),
    (Ti.useHostTransitionStatus = Rc),
    (Ti.useFormState = ld),
    (Ti.useActionState = ld),
    (Ti.useOptimistic = function (e) {
      var t = yr();
      t.memoizedState = t.baseState = e;
      var r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return (t.queue = r), (t = jc.bind(null, lt, !0, r)), (r.dispatch = t), [e, t];
    });
  var Zn = {
    readContext: ar,
    use: _l,
    useCallback: gd,
    useContext: ar,
    useEffect: Mc,
    useImperativeHandle: yd,
    useInsertionEffect: dd,
    useLayoutEffect: md,
    useMemo: vd,
    useReducer: Al,
    useRef: od,
    useState: function () {
      return Al(xn);
    },
    useDebugValue: Bc,
    useDeferredValue: function (e, t) {
      var r = Ht();
      return bd(r, xt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Al(xn)[0],
        t = Ht().memoizedState;
      return [typeof e == 'boolean' ? e : eu(e), t];
    },
    useSyncExternalStore: Qh,
    useId: _d
  };
  (Zn.useCacheRefresh = Ad),
    (Zn.useMemoCache = Ac),
    (Zn.useHostTransitionStatus = Rc),
    (Zn.useFormState = sd),
    (Zn.useActionState = sd),
    (Zn.useOptimistic = function (e, t) {
      var r = Ht();
      return td(r, xt, e, t);
    });
  var Mi = {
    readContext: ar,
    use: _l,
    useCallback: gd,
    useContext: ar,
    useEffect: Mc,
    useImperativeHandle: yd,
    useInsertionEffect: dd,
    useLayoutEffect: md,
    useMemo: vd,
    useReducer: Oc,
    useRef: od,
    useState: function () {
      return Oc(xn);
    },
    useDebugValue: Bc,
    useDeferredValue: function (e, t) {
      var r = Ht();
      return xt === null ? Uc(r, e, t) : bd(r, xt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Oc(xn)[0],
        t = Ht().memoizedState;
      return [typeof e == 'boolean' ? e : eu(e), t];
    },
    useSyncExternalStore: Qh,
    useId: _d
  };
  (Mi.useCacheRefresh = Ad),
    (Mi.useMemoCache = Ac),
    (Mi.useHostTransitionStatus = Rc),
    (Mi.useFormState = fd),
    (Mi.useActionState = fd),
    (Mi.useOptimistic = function (e, t) {
      var r = Ht();
      return xt !== null ? td(r, xt, e, t) : ((r.baseState = e), [e, r.queue.dispatch]);
    });
  function Cc(e, t, r, i) {
    (t = e.memoizedState),
      (r = r(i, t)),
      (r = r == null ? t : A({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var qc = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? k(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var i = Tr(),
        l = Jn(i);
      (l.payload = t), r != null && (l.callback = r), (t = Wn(e, l, i)), t !== null && (hr(t, e, i), iu(t, e, i));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var i = Tr(),
        l = Jn(i);
      (l.tag = 1),
        (l.payload = t),
        r != null && (l.callback = r),
        (t = Wn(e, l, i)),
        t !== null && (hr(t, e, i), iu(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Tr(),
        i = Jn(r);
      (i.tag = 2), t != null && (i.callback = t), (t = Wn(e, i, r)), t !== null && (hr(t, e, r), iu(t, e, r));
    }
  };
  function Td(e, t, r, i, l, f, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(i, f, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ga(r, i) || !Ga(l, f)
          : !0
    );
  }
  function Md(e, t, r, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, i),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(r, i),
      t.state !== e && qc.enqueueReplaceState(t, t.state, null);
  }
  function Bi(e, t) {
    var r = t;
    if ('ref' in t) {
      r = {};
      for (var i in t) i !== 'ref' && (r[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      r === t && (r = A({}, r));
      for (var l in e) r[l] === void 0 && (r[l] = e[l]);
    }
    return r;
  }
  var Tl =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string' ? String(e.message) : String(e),
              error: e
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function Bd(e) {
    Tl(e);
  }
  function Ud(e) {
    console.error(e);
  }
  function Dd(e) {
    Tl(e);
  }
  function Ml(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Rd(e, t, r) {
    try {
      var i = e.onCaughtError;
      i(r.value, { componentStack: r.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function zc(e, t, r) {
    return (
      (r = Jn(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        Ml(e, t);
      }),
      r
    );
  }
  function jd(e) {
    return (e = Jn(e)), (e.tag = 3), e;
  }
  function Cd(e, t, r, i) {
    var l = r.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var f = i.value;
      (e.payload = function () {
        return l(f);
      }),
        (e.callback = function () {
          Rd(t, r, i);
        });
    }
    var g = r.stateNode;
    g !== null &&
      typeof g.componentDidCatch == 'function' &&
      (e.callback = function () {
        Rd(t, r, i), typeof l != 'function' && (ii === null ? (ii = new Set([this])) : ii.add(this));
        var B = i.stack;
        this.componentDidCatch(i.value, { componentStack: B !== null ? B : '' });
      });
  }
  function Rg(e, t, r, i, l) {
    if (((r.flags |= 32768), i !== null && typeof i == 'object' && typeof i.then == 'function')) {
      if (((t = r.alternate), t !== null && nu(t, r, l, !0), (r = Gr.current), r !== null)) {
        switch (r.tag) {
          case 13:
            return (
              cn === null ? bf() : r.alternate === null && Ct === 0 && (Ct = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = l),
              i === dc
                ? (r.flags |= 16384)
                : ((t = r.updateQueue), t === null ? (r.updateQueue = new Set([i])) : t.add(i), Ef(e, i, l)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              i === dc
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([i]) }),
                      (r.updateQueue = t))
                    : ((r = t.retryQueue), r === null ? (t.retryQueue = new Set([i])) : r.add(i)),
                  Ef(e, i, l)),
              !1
            );
        }
        throw Error(s(435, r.tag));
      }
      return Ef(e, i, l), bf(), !1;
    }
    if (vt)
      return (
        (t = Gr.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            i !== hc && ((e = Error(s(422), { cause: i })), $a(Ir(e, r))))
          : (i !== hc && ((t = Error(s(423), { cause: i })), $a(Ir(t, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (i = Ir(i, r)),
            (l = zc(e.stateNode, i, l)),
            Wc(e, l),
            Ct !== 4 && (Ct = 2)),
        !1
      );
    var f = Error(s(520), { cause: i });
    if (((f = Ir(f, r)), hu === null ? (hu = [f]) : hu.push(f), Ct !== 4 && (Ct = 2), t === null)) return !0;
    (i = Ir(i, r)), (r = t);
    do {
      switch (r.tag) {
        case 3:
          return (r.flags |= 65536), (e = l & -l), (r.lanes |= e), (e = zc(r.stateNode, i, e)), Wc(r, e), !1;
        case 1:
          if (
            ((t = r.type),
            (f = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (f !== null && typeof f.componentDidCatch == 'function' && (ii === null || !ii.has(f)))))
          )
            return (r.flags |= 65536), (l &= -l), (r.lanes |= l), (l = jd(l)), Cd(l, e, r, i), Wc(r, l), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var qd = Error(s(461)),
    Qt = !1;
  function tr(e, t, r, i) {
    t.child = e === null ? Hh(t, null, r, i) : wi(t, e.child, r, i);
  }
  function zd(e, t, r, i, l) {
    r = r.render;
    var f = t.ref;
    if ('ref' in i) {
      var g = {};
      for (var B in i) B !== 'ref' && (g[B] = i[B]);
    } else g = i;
    return (
      Di(t),
      (i = Sc(e, t, r, g, f, l)),
      (B = Ec()),
      e !== null && !Qt ? (xc(e, t, l), _n(e, t, l)) : (vt && B && fc(t), (t.flags |= 1), tr(e, t, i, l), t.child)
    );
  }
  function kd(e, t, r, i, l) {
    if (e === null) {
      var f = r.type;
      return typeof f == 'function' && !lf(f) && f.defaultProps === void 0 && r.compare === null
        ? ((t.tag = 15), (t.type = f), Id(e, t, f, i, l))
        : ((e = jl(r.type, null, i, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), !$c(e, l))) {
      var g = f.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Ga), r(g, i) && e.ref === t.ref)) return _n(e, t, l);
    }
    return (t.flags |= 1), (e = ri(f, i)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Id(e, t, r, i, l) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ga(f, i) && e.ref === t.ref)
        if (((Qt = !1), (t.pendingProps = i = f), $c(e, l))) e.flags & 131072 && (Qt = !0);
        else return (t.lanes = e.lanes), _n(e, t, l);
    }
    return kc(e, t, r, i, l);
  }
  function Ld(e, t, r) {
    var i = t.pendingProps,
      l = i.children,
      f = (t.stateNode._pendingVisibility & 2) !== 0,
      g = e !== null ? e.memoizedState : null;
    if ((ru(e, t), i.mode === 'hidden' || f)) {
      if (t.flags & 128) {
        if (((i = g !== null ? g.baseLanes | r : r), e !== null)) {
          for (l = t.child = e.child, f = 0; l !== null; ) (f = f | l.lanes | l.childLanes), (l = l.sibling);
          t.childLanes = f & ~i;
        } else (t.childLanes = 0), (t.child = null);
        return Hd(e, t, i, r);
      }
      if (r & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && bl(t, g !== null ? g.cachePool : null),
          g !== null ? Gh(t, g) : mc(),
          Fh(t);
      else return (t.lanes = t.childLanes = 536870912), Hd(e, t, g !== null ? g.baseLanes | r : r, r);
    } else
      g !== null
        ? (bl(t, g.cachePool), Gh(t, g), $n(), (t.memoizedState = null))
        : (e !== null && bl(t, null), mc(), $n());
    return tr(e, t, l, r), t.child;
  }
  function Hd(e, t, r, i) {
    var l = vc();
    return (
      (l = l === null ? null : { parent: Yt._currentValue, pool: l }),
      (t.memoizedState = { baseLanes: r, cachePool: l }),
      e !== null && bl(t, null),
      mc(),
      Fh(t),
      e !== null && nu(e, t, i, !0),
      null
    );
  }
  function ru(e, t) {
    var r = t.ref;
    if (r === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof r != 'function' && typeof r != 'object') throw Error(s(284));
      (e === null || e.ref !== r) && (t.flags |= 2097664);
    }
  }
  function kc(e, t, r, i, l) {
    return (
      Di(t),
      (r = Sc(e, t, r, i, void 0, l)),
      (i = Ec()),
      e !== null && !Qt ? (xc(e, t, l), _n(e, t, l)) : (vt && i && fc(t), (t.flags |= 1), tr(e, t, r, l), t.child)
    );
  }
  function Gd(e, t, r, i, l, f) {
    return (
      Di(t),
      (t.updateQueue = null),
      (r = Zh(t, i, r, l)),
      Xh(e),
      (i = Ec()),
      e !== null && !Qt ? (xc(e, t, f), _n(e, t, f)) : (vt && i && fc(t), (t.flags |= 1), tr(e, t, r, f), t.child)
    );
  }
  function Fd(e, t, r, i, l) {
    if ((Di(t), t.stateNode === null)) {
      var f = ia,
        g = r.contextType;
      typeof g == 'object' && g !== null && (f = ar(g)),
        (f = new r(i, f)),
        (t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = qc),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = i),
        (f.state = t.memoizedState),
        (f.refs = {}),
        Kc(t),
        (g = r.contextType),
        (f.context = typeof g == 'object' && g !== null ? ar(g) : ia),
        (f.state = t.memoizedState),
        (g = r.getDerivedStateFromProps),
        typeof g == 'function' && (Cc(t, r, g, i), (f.state = t.memoizedState)),
        typeof r.getDerivedStateFromProps == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function' ||
          (typeof f.UNSAFE_componentWillMount != 'function' && typeof f.componentWillMount != 'function') ||
          ((g = f.state),
          typeof f.componentWillMount == 'function' && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == 'function' && f.UNSAFE_componentWillMount(),
          g !== f.state && qc.enqueueReplaceState(f, f.state, null),
          uu(t, i, f, l),
          au(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
        (i = !0);
    } else if (e === null) {
      f = t.stateNode;
      var B = t.memoizedProps,
        $ = Bi(r, B);
      f.props = $;
      var le = f.context,
        Ee = r.contextType;
      (g = ia), typeof Ee == 'object' && Ee !== null && (g = ar(Ee));
      var Te = r.getDerivedStateFromProps;
      (Ee = typeof Te == 'function' || typeof f.getSnapshotBeforeUpdate == 'function'),
        (B = t.pendingProps !== B),
        Ee ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((B || le !== g) && Md(t, f, i, g)),
        (Kn = !1);
      var pe = t.memoizedState;
      (f.state = pe),
        uu(t, i, f, l),
        au(),
        (le = t.memoizedState),
        B || pe !== le || Kn
          ? (typeof Te == 'function' && (Cc(t, r, Te, i), (le = t.memoizedState)),
            ($ = Kn || Td(t, r, $, i, pe, le, g))
              ? (Ee ||
                  (typeof f.UNSAFE_componentWillMount != 'function' && typeof f.componentWillMount != 'function') ||
                  (typeof f.componentWillMount == 'function' && f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == 'function' && f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = le)),
            (f.props = i),
            (f.state = le),
            (f.context = g),
            (i = $))
          : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308), (i = !1));
    } else {
      (f = t.stateNode),
        Jc(e, t),
        (g = t.memoizedProps),
        (Ee = Bi(r, g)),
        (f.props = Ee),
        (Te = t.pendingProps),
        (pe = f.context),
        (le = r.contextType),
        ($ = ia),
        typeof le == 'object' && le !== null && ($ = ar(le)),
        (B = r.getDerivedStateFromProps),
        (le = typeof B == 'function' || typeof f.getSnapshotBeforeUpdate == 'function') ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((g !== Te || pe !== $) && Md(t, f, i, $)),
        (Kn = !1),
        (pe = t.memoizedState),
        (f.state = pe),
        uu(t, i, f, l),
        au();
      var Se = t.memoizedState;
      g !== Te || pe !== Se || Kn || (e !== null && e.dependencies !== null && Bl(e.dependencies))
        ? (typeof B == 'function' && (Cc(t, r, B, i), (Se = t.memoizedState)),
          (Ee = Kn || Td(t, r, Ee, i, pe, Se, $) || (e !== null && e.dependencies !== null && Bl(e.dependencies)))
            ? (le ||
                (typeof f.UNSAFE_componentWillUpdate != 'function' && typeof f.componentWillUpdate != 'function') ||
                (typeof f.componentWillUpdate == 'function' && f.componentWillUpdate(i, Se, $),
                typeof f.UNSAFE_componentWillUpdate == 'function' && f.UNSAFE_componentWillUpdate(i, Se, $)),
              typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof f.componentDidUpdate != 'function' ||
                (g === e.memoizedProps && pe === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != 'function' ||
                (g === e.memoizedProps && pe === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = Se)),
          (f.props = i),
          (f.state = Se),
          (f.context = $),
          (i = Ee))
        : (typeof f.componentDidUpdate != 'function' ||
            (g === e.memoizedProps && pe === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != 'function' ||
            (g === e.memoizedProps && pe === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return (
      (f = i),
      ru(e, t),
      (i = (t.flags & 128) !== 0),
      f || i
        ? ((f = t.stateNode),
          (r = i && typeof r.getDerivedStateFromError != 'function' ? null : f.render()),
          (t.flags |= 1),
          e !== null && i ? ((t.child = wi(t, e.child, null, l)), (t.child = wi(t, null, r, l))) : tr(e, t, r, l),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = _n(e, t, l)),
      e
    );
  }
  function Vd(e, t, r, i) {
    return Ya(), (t.flags |= 256), tr(e, t, r, i), t.child;
  }
  var Ic = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Lc(e) {
    return { baseLanes: e, cachePool: $h() };
  }
  function Hc(e, t, r) {
    return (e = e !== null ? e.childLanes & ~r : 0), t && (e |= $r), e;
  }
  function Yd(e, t, r) {
    var i = t.pendingProps,
      l = !1,
      f = (t.flags & 128) !== 0,
      g;
    if (
      ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (Vt.current & 2) !== 0),
      g && ((l = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (vt) {
        if ((l ? Yn(t) : $n(), vt)) {
          var B = er,
            $;
          if (($ = B)) {
            e: {
              for ($ = B, B = sn; $.nodeType !== 8; ) {
                if (!B) {
                  B = null;
                  break e;
                }
                if ((($ = tn($.nextSibling)), $ === null)) {
                  B = null;
                  break e;
                }
              }
              B = $;
            }
            B !== null
              ? ((t.memoizedState = {
                  dehydrated: B,
                  treeContext: xi !== null ? { id: bn, overflow: Sn } : null,
                  retryLane: 536870912
                }),
                ($ = Yr(18, null, null, 0)),
                ($.stateNode = B),
                ($.return = t),
                (t.child = $),
                (or = t),
                (er = null),
                ($ = !0))
              : ($ = !1);
          }
          $ || Ai(t);
        }
        if (((B = t.memoizedState), B !== null && ((B = B.dehydrated), B !== null)))
          return B.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
        En(t);
      }
      return (
        (B = i.children),
        (i = i.fallback),
        l
          ? ($n(),
            (l = t.mode),
            (B = Fc({ mode: 'hidden', children: B }, l)),
            (i = ji(i, l, r, null)),
            (B.return = t),
            (i.return = t),
            (B.sibling = i),
            (t.child = B),
            (l = t.child),
            (l.memoizedState = Lc(r)),
            (l.childLanes = Hc(e, g, r)),
            (t.memoizedState = Ic),
            i)
          : (Yn(t), Gc(t, B))
      );
    }
    if ((($ = e.memoizedState), $ !== null && ((B = $.dehydrated), B !== null))) {
      if (f)
        t.flags & 256
          ? (Yn(t), (t.flags &= -257), (t = Vc(e, t, r)))
          : t.memoizedState !== null
            ? ($n(), (t.child = e.child), (t.flags |= 128), (t = null))
            : ($n(),
              (l = i.fallback),
              (B = t.mode),
              (i = Fc({ mode: 'visible', children: i.children }, B)),
              (l = ji(l, B, r, null)),
              (l.flags |= 2),
              (i.return = t),
              (l.return = t),
              (i.sibling = l),
              (t.child = i),
              wi(t, e.child, null, r),
              (i = t.child),
              (i.memoizedState = Lc(r)),
              (i.childLanes = Hc(e, g, r)),
              (t.memoizedState = Ic),
              (t = l));
      else if ((Yn(t), B.data === '$!')) {
        if (((g = B.nextSibling && B.nextSibling.dataset), g)) var le = g.dgst;
        (g = le),
          (i = Error(s(419))),
          (i.stack = ''),
          (i.digest = g),
          $a({ value: i, source: null, stack: null }),
          (t = Vc(e, t, r));
      } else if ((Qt || nu(e, t, r, !1), (g = (r & e.childLanes) !== 0), Qt || g)) {
        if (((g = Nt), g !== null)) {
          if (((i = r & -r), i & 42)) i = 1;
          else
            switch (i) {
              case 2:
                i = 1;
                break;
              case 8:
                i = 4;
                break;
              case 32:
                i = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                i = 64;
                break;
              case 268435456:
                i = 134217728;
                break;
              default:
                i = 0;
            }
          if (((i = i & (g.suspendedLanes | r) ? 0 : i), i !== 0 && i !== $.retryLane))
            throw (($.retryLane = i), Vn(e, i), hr(g, e, i), qd);
        }
        B.data === '$?' || bf(), (t = Vc(e, t, r));
      } else
        B.data === '$?'
          ? ((t.flags |= 128), (t.child = e.child), (t = Zg.bind(null, e)), (B._reactRetry = t), (t = null))
          : ((e = $.treeContext),
            (er = tn(B.nextSibling)),
            (or = t),
            (vt = !0),
            (Pr = null),
            (sn = !1),
            e !== null && ((Lr[Hr++] = bn), (Lr[Hr++] = Sn), (Lr[Hr++] = xi), (bn = e.id), (Sn = e.overflow), (xi = t)),
            (t = Gc(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? ($n(),
        (l = i.fallback),
        (B = t.mode),
        ($ = e.child),
        (le = $.sibling),
        (i = ri($, { mode: 'hidden', children: i.children })),
        (i.subtreeFlags = $.subtreeFlags & 31457280),
        le !== null ? (l = ri(le, l)) : ((l = ji(l, B, r, null)), (l.flags |= 2)),
        (l.return = t),
        (i.return = t),
        (i.sibling = l),
        (t.child = i),
        (i = l),
        (l = t.child),
        (B = e.child.memoizedState),
        B === null
          ? (B = Lc(r))
          : (($ = B.cachePool),
            $ !== null ? ((le = Yt._currentValue), ($ = $.parent !== le ? { parent: le, pool: le } : $)) : ($ = $h()),
            (B = { baseLanes: B.baseLanes | r, cachePool: $ })),
        (l.memoizedState = B),
        (l.childLanes = Hc(e, g, r)),
        (t.memoizedState = Ic),
        i)
      : (Yn(t),
        (r = e.child),
        (e = r.sibling),
        (r = ri(r, { mode: 'visible', children: i.children })),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((g = t.deletions), g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r);
  }
  function Gc(e, t) {
    return (t = Fc({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function Fc(e, t) {
    return g0(e, t, 0, null);
  }
  function Vc(e, t, r) {
    return wi(t, e.child, null, r), (e = Gc(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
  }
  function $d(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Zc(e.return, t, r);
  }
  function Yc(e, t, r, i, l) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: r, tailMode: l })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = i),
        (f.tail = r),
        (f.tailMode = l));
  }
  function Xd(e, t, r) {
    var i = t.pendingProps,
      l = i.revealOrder,
      f = i.tail;
    if ((tr(e, t, i.children, r), (i = Vt.current), i & 2)) (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && $d(e, r, t);
          else if (e.tag === 19) $d(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      i &= 1;
    }
    switch ((M(Vt, i), l)) {
      case 'forwards':
        for (r = t.child, l = null; r !== null; )
          (e = r.alternate), e !== null && vl(e) === null && (l = r), (r = r.sibling);
        (r = l),
          r === null ? ((l = t.child), (t.child = null)) : ((l = r.sibling), (r.sibling = null)),
          Yc(t, !1, l, r, f);
        break;
      case 'backwards':
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && vl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        Yc(t, !0, r, null, f);
        break;
      case 'together':
        Yc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function _n(e, t, r) {
    if ((e !== null && (t.dependencies = e.dependencies), (ni |= t.lanes), !(r & t.childLanes)))
      if (e !== null) {
        if ((nu(e, t, r, !1), (r & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = ri(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        (e = e.sibling), (r = r.sibling = ri(e, e.pendingProps)), (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function $c(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && Bl(e)));
  }
  function jg(e, t, r) {
    switch (t.tag) {
      case 3:
        ne(t, t.stateNode.containerInfo), Qn(t, Yt, e.memoizedState.cache), Ya();
        break;
      case 27:
      case 5:
        re(t);
        break;
      case 4:
        ne(t, t.stateNode.containerInfo);
        break;
      case 10:
        Qn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Yn(t), (t.flags |= 128), null)
            : r & t.child.childLanes
              ? Yd(e, t, r)
              : (Yn(t), (e = _n(e, t, r)), e !== null ? e.sibling : null);
        Yn(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (((i = (r & t.childLanes) !== 0), i || (nu(e, t, r, !1), (i = (r & t.childLanes) !== 0)), l)) {
          if (i) return Xd(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          M(Vt, Vt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ld(e, t, r);
      case 24:
        Qn(t, Yt, e.memoizedState.cache);
    }
    return _n(e, t, r);
  }
  function Zd(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Qt = !0;
      else {
        if (!$c(e, r) && !(t.flags & 128)) return (Qt = !1), jg(e, t, r);
        Qt = !!(e.flags & 131072);
      }
    else (Qt = !1), vt && t.flags & 1048576 && Dh(t, dl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var i = t.elementType,
            l = i._init;
          if (((i = l(i._payload)), (t.type = i), typeof i == 'function'))
            lf(i)
              ? ((e = Bi(i, e)), (t.tag = 1), (t = Fd(null, t, i, e, r)))
              : ((t.tag = 0), (t = kc(null, t, i, e, r)));
          else {
            if (i != null) {
              if (((l = i.$$typeof), l === te)) {
                (t.tag = 11), (t = zd(null, t, i, e, r));
                break e;
              } else if (l === ve) {
                (t.tag = 14), (t = kd(null, t, i, e, r));
                break e;
              }
            }
            throw ((t = y(i) || i), Error(s(306, t, '')));
          }
        }
        return t;
      case 0:
        return kc(e, t, t.type, t.pendingProps, r);
      case 1:
        return (i = t.type), (l = Bi(i, t.pendingProps)), Fd(e, t, i, l, r);
      case 3:
        e: {
          if ((ne(t, t.stateNode.containerInfo), e === null)) throw Error(s(387));
          var f = t.pendingProps;
          (l = t.memoizedState), (i = l.element), Jc(e, t), uu(t, f, null, r);
          var g = t.memoizedState;
          if (((f = g.cache), Qn(t, Yt, f), f !== l.cache && Qc(t, [Yt], r, !0), au(), (f = g.element), l.isDehydrated))
            if (
              ((l = { element: f, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              t = Vd(e, t, f, r);
              break e;
            } else if (f !== i) {
              (i = Ir(Error(s(424)), t)), $a(i), (t = Vd(e, t, f, r));
              break e;
            } else
              for (
                er = tn(t.stateNode.containerInfo.firstChild),
                  or = t,
                  vt = !0,
                  Pr = null,
                  sn = !0,
                  r = Hh(t, null, f, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Ya(), f === i)) {
              t = _n(e, t, r);
              break e;
            }
            tr(e, t, f, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ru(e, t),
          e === null
            ? (r = J0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = r)
              : vt ||
                ((r = t.type),
                (e = t.pendingProps),
                (i = $l(ie.current).createElement(r)),
                (i[ft] = t),
                (i[ir] = e),
                rr(i, r, e),
                Je(i),
                (t.stateNode = i))
            : (t.memoizedState = J0(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          re(t),
          e === null &&
            vt &&
            ((i = t.stateNode = Z0(t.type, t.pendingProps, ie.current)), (or = t), (sn = !0), (er = tn(i.firstChild))),
          (i = t.pendingProps.children),
          e !== null || vt ? tr(e, t, i, r) : (t.child = wi(t, null, i, r)),
          ru(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            vt &&
            ((l = i = er) &&
              ((i = f1(i, t.type, t.pendingProps, sn)),
              i !== null ? ((t.stateNode = i), (or = t), (er = tn(i.firstChild)), (sn = !1), (l = !0)) : (l = !1)),
            l || Ai(t)),
          re(t),
          (l = t.type),
          (f = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (i = f.children),
          Rf(l, f) ? (i = null) : g !== null && Rf(l, g) && (t.flags |= 32),
          t.memoizedState !== null && ((l = Sc(e, t, Ng, null, null, r)), (Eu._currentValue = l)),
          ru(e, t),
          tr(e, t, i, r),
          t.child
        );
      case 6:
        return (
          e === null &&
            vt &&
            ((e = r = er) &&
              ((r = o1(r, t.pendingProps, sn)),
              r !== null ? ((t.stateNode = r), (or = t), (er = null), (e = !0)) : (e = !1)),
            e || Ai(t)),
          null
        );
      case 13:
        return Yd(e, t, r);
      case 4:
        return (
          ne(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = wi(t, null, i, r)) : tr(e, t, i, r),
          t.child
        );
      case 11:
        return zd(e, t, t.type, t.pendingProps, r);
      case 7:
        return tr(e, t, t.pendingProps, r), t.child;
      case 8:
        return tr(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return tr(e, t, t.pendingProps.children, r), t.child;
      case 10:
        return (i = t.pendingProps), Qn(t, t.type, i.value), tr(e, t, i.children, r), t.child;
      case 9:
        return (
          (l = t.type._context),
          (i = t.pendingProps.children),
          Di(t),
          (l = ar(l)),
          (i = i(l)),
          (t.flags |= 1),
          tr(e, t, i, r),
          t.child
        );
      case 14:
        return kd(e, t, t.type, t.pendingProps, r);
      case 15:
        return Id(e, t, t.type, t.pendingProps, r);
      case 19:
        return Xd(e, t, r);
      case 22:
        return Ld(e, t, r);
      case 24:
        return (
          Di(t),
          (i = ar(Yt)),
          e === null
            ? ((l = vc()),
              l === null &&
                ((l = Nt),
                (f = yc()),
                (l.pooledCache = f),
                f.refCount++,
                f !== null && (l.pooledCacheLanes |= r),
                (l = f)),
              (t.memoizedState = { parent: i, cache: l }),
              Kc(t),
              Qn(t, Yt, l))
            : (e.lanes & r && (Jc(e, t), uu(t, null, null, r), au()),
              (l = e.memoizedState),
              (f = t.memoizedState),
              l.parent !== i
                ? ((l = { parent: i, cache: i }),
                  (t.memoizedState = l),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
                  Qn(t, Yt, i))
                : ((i = f.cache), Qn(t, Yt, i), i !== l.cache && Qc(t, [Yt], r, !0))),
          tr(e, t, t.pendingProps.children, r),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  var Xc = Ne(null),
    Ui = null,
    An = null;
  function Qn(e, t, r) {
    M(Xc, t._currentValue), (t._currentValue = r);
  }
  function wn(e) {
    (e._currentValue = Xc.current), De(Xc);
  }
  function Zc(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Qc(e, t, r, i) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var f = l.dependencies;
      if (f !== null) {
        var g = l.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var B = f;
          f = l;
          for (var $ = 0; $ < t.length; $++)
            if (B.context === t[$]) {
              (f.lanes |= r), (B = f.alternate), B !== null && (B.lanes |= r), Zc(f.return, r, e), i || (g = null);
              break e;
            }
          f = B.next;
        }
      } else if (l.tag === 18) {
        if (((g = l.return), g === null)) throw Error(s(341));
        (g.lanes |= r), (f = g.alternate), f !== null && (f.lanes |= r), Zc(g, r, e), (g = null);
      } else g = l.child;
      if (g !== null) g.return = l;
      else
        for (g = l; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((l = g.sibling), l !== null)) {
            (l.return = g.return), (g = l);
            break;
          }
          g = g.return;
        }
      l = g;
    }
  }
  function nu(e, t, r, i) {
    e = null;
    for (var l = t, f = !1; l !== null; ) {
      if (!f) {
        if (l.flags & 524288) f = !0;
        else if (l.flags & 262144) break;
      }
      if (l.tag === 10) {
        var g = l.alternate;
        if (g === null) throw Error(s(387));
        if (((g = g.memoizedProps), g !== null)) {
          var B = l.type;
          Ar(l.pendingProps.value, g.value) || (e !== null ? e.push(B) : (e = [B]));
        }
      } else if (l === W.current) {
        if (((g = l.alternate), g === null)) throw Error(s(387));
        g.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Eu) : (e = [Eu]));
      }
      l = l.return;
    }
    e !== null && Qc(t, e, r, i), (t.flags |= 262144);
  }
  function Bl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ar(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Di(e) {
    (Ui = e), (An = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function ar(e) {
    return Qd(Ui, e);
  }
  function Ul(e, t) {
    return Ui === null && Di(e), Qd(e, t);
  }
  function Qd(e, t) {
    var r = t._currentValue;
    if (((t = { context: t, memoizedValue: r, next: null }), An === null)) {
      if (e === null) throw Error(s(308));
      (An = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else An = An.next = t;
    return r;
  }
  var Kn = !1;
  function Kc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Jc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null
        });
  }
  function Jn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Wn(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), Dt & 2)) {
      var l = i.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (i.pending = t), (t = ol(e)), Bh(e, null, r), t
      );
    }
    return fl(e, i, t, r), ol(e);
  }
  function iu(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194176) !== 0))) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), Is(e, r);
    }
  }
  function Wc(e, t) {
    var r = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), r === i)) {
      var l = null,
        f = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var g = { lane: r.lane, tag: r.tag, payload: r.payload, callback: null, next: null };
          f === null ? (l = f = g) : (f = f.next = g), (r = r.next);
        } while (r !== null);
        f === null ? (l = f = t) : (f = f.next = t);
      } else l = f = t;
      (r = { baseState: i.baseState, firstBaseUpdate: l, lastBaseUpdate: f, shared: i.shared, callbacks: i.callbacks }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t);
  }
  var Pc = !1;
  function au() {
    if (Pc) {
      var e = fa;
      if (e !== null) throw e;
    }
  }
  function uu(e, t, r, i) {
    Pc = !1;
    var l = e.updateQueue;
    Kn = !1;
    var f = l.firstBaseUpdate,
      g = l.lastBaseUpdate,
      B = l.shared.pending;
    if (B !== null) {
      l.shared.pending = null;
      var $ = B,
        le = $.next;
      ($.next = null), g === null ? (f = le) : (g.next = le), (g = $);
      var Ee = e.alternate;
      Ee !== null &&
        ((Ee = Ee.updateQueue),
        (B = Ee.lastBaseUpdate),
        B !== g && (B === null ? (Ee.firstBaseUpdate = le) : (B.next = le), (Ee.lastBaseUpdate = $)));
    }
    if (f !== null) {
      var Te = l.baseState;
      (g = 0), (Ee = le = $ = null), (B = f);
      do {
        var pe = B.lane & -536870913,
          Se = pe !== B.lane;
        if (Se ? (yt & pe) === pe : (i & pe) === pe) {
          pe !== 0 && pe === ca && (Pc = !0),
            Ee !== null && (Ee = Ee.next = { lane: 0, tag: B.tag, payload: B.payload, callback: null, next: null });
          e: {
            var Ze = e,
              rt = B;
            pe = t;
            var qt = r;
            switch (rt.tag) {
              case 1:
                if (((Ze = rt.payload), typeof Ze == 'function')) {
                  Te = Ze.call(qt, Te, pe);
                  break e;
                }
                Te = Ze;
                break e;
              case 3:
                Ze.flags = (Ze.flags & -65537) | 128;
              case 0:
                if (((Ze = rt.payload), (pe = typeof Ze == 'function' ? Ze.call(qt, Te, pe) : Ze), pe == null)) break e;
                Te = A({}, Te, pe);
                break e;
              case 2:
                Kn = !0;
            }
          }
          (pe = B.callback),
            pe !== null &&
              ((e.flags |= 64),
              Se && (e.flags |= 8192),
              (Se = l.callbacks),
              Se === null ? (l.callbacks = [pe]) : Se.push(pe));
        } else
          (Se = { lane: pe, tag: B.tag, payload: B.payload, callback: B.callback, next: null }),
            Ee === null ? ((le = Ee = Se), ($ = Te)) : (Ee = Ee.next = Se),
            (g |= pe);
        if (((B = B.next), B === null)) {
          if (((B = l.shared.pending), B === null)) break;
          (Se = B), (B = Se.next), (Se.next = null), (l.lastBaseUpdate = Se), (l.shared.pending = null);
        }
      } while (!0);
      Ee === null && ($ = Te),
        (l.baseState = $),
        (l.firstBaseUpdate = le),
        (l.lastBaseUpdate = Ee),
        f === null && (l.shared.lanes = 0),
        (ni |= g),
        (e.lanes = g),
        (e.memoizedState = Te);
    }
  }
  function Kd(e, t) {
    if (typeof e != 'function') throw Error(s(191, e));
    e.call(t);
  }
  function Jd(e, t) {
    var r = e.callbacks;
    if (r !== null) for (e.callbacks = null, e = 0; e < r.length; e++) Kd(r[e], t);
  }
  function lu(e, t) {
    try {
      var r = t.updateQueue,
        i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var l = i.next;
        r = l;
        do {
          if ((r.tag & e) === e) {
            i = void 0;
            var f = r.create,
              g = r.inst;
            (i = f()), (g.destroy = i);
          }
          r = r.next;
        } while (r !== l);
      }
    } catch (B) {
      wt(t, t.return, B);
    }
  }
  function Pn(e, t, r) {
    try {
      var i = t.updateQueue,
        l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var f = l.next;
        i = f;
        do {
          if ((i.tag & e) === e) {
            var g = i.inst,
              B = g.destroy;
            if (B !== void 0) {
              (g.destroy = void 0), (l = t);
              var $ = r;
              try {
                B();
              } catch (le) {
                wt(l, $, le);
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (le) {
      wt(t, t.return, le);
    }
  }
  function Wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Jd(t, r);
      } catch (i) {
        wt(e, e.return, i);
      }
    }
  }
  function Pd(e, t, r) {
    (r.props = Bi(e.type, e.memoizedProps)), (r.state = e.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (i) {
      wt(e, t, i);
    }
  }
  function Ri(e, t) {
    try {
      var r = e.ref;
      if (r !== null) {
        var i = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = i;
            break;
          default:
            l = i;
        }
        typeof r == 'function' ? (e.refCleanup = r(l)) : (r.current = l);
      }
    } catch (f) {
      wt(e, t, f);
    }
  }
  function wr(e, t) {
    var r = e.ref,
      i = e.refCleanup;
    if (r !== null)
      if (typeof i == 'function')
        try {
          i();
        } catch (l) {
          wt(e, t, l);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof r == 'function')
        try {
          r(null);
        } catch (l) {
          wt(e, t, l);
        }
      else r.current = null;
  }
  function e0(e) {
    var t = e.type,
      r = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          r.autoFocus && i.focus();
          break e;
        case 'img':
          r.src ? (i.src = r.src) : r.srcSet && (i.srcset = r.srcSet);
      }
    } catch (l) {
      wt(e, e.return, l);
    }
  }
  function t0(e, t, r) {
    try {
      var i = e.stateNode;
      a1(i, e.type, r, t), (i[ir] = t);
    } catch (l) {
      wt(e, e.return, l);
    }
  }
  function r0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
  }
  function ef(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || r0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function tf(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Yl));
    else if (i !== 4 && i !== 27 && ((e = e.child), e !== null))
      for (tf(e, t, r), e = e.sibling; e !== null; ) tf(e, t, r), (e = e.sibling);
  }
  function Dl(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && i !== 27 && ((e = e.child), e !== null))
      for (Dl(e, t, r), e = e.sibling; e !== null; ) Dl(e, t, r), (e = e.sibling);
  }
  var On = !1,
    jt = !1,
    rf = !1,
    n0 = typeof WeakSet == 'function' ? WeakSet : Set,
    Kt = null,
    i0 = !1;
  function Cg(e, t) {
    if (((e = e.containerInfo), (Uf = Wl), (e = Eh(e)), ic(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var l = i.anchorOffset,
              f = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, f.nodeType;
            } catch {
              r = null;
              break e;
            }
            var g = 0,
              B = -1,
              $ = -1,
              le = 0,
              Ee = 0,
              Te = e,
              pe = null;
            t: for (;;) {
              for (
                var Se;
                Te !== r || (l !== 0 && Te.nodeType !== 3) || (B = g + l),
                  Te !== f || (i !== 0 && Te.nodeType !== 3) || ($ = g + i),
                  Te.nodeType === 3 && (g += Te.nodeValue.length),
                  (Se = Te.firstChild) !== null;

              )
                (pe = Te), (Te = Se);
              for (;;) {
                if (Te === e) break t;
                if (
                  (pe === r && ++le === l && (B = g), pe === f && ++Ee === i && ($ = g), (Se = Te.nextSibling) !== null)
                )
                  break;
                (Te = pe), (pe = Te.parentNode);
              }
              Te = Se;
            }
            r = B === -1 || $ === -1 ? null : { start: B, end: $ };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Df = { focusedElem: e, selectionRange: r }, Wl = !1, Kt = t; Kt !== null; )
      if (((t = Kt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (Kt = e);
      else
        for (; Kt !== null; ) {
          switch (((t = Kt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && f !== null) {
                (e = void 0), (r = t), (l = f.memoizedProps), (f = f.memoizedState), (i = r.stateNode);
                try {
                  var Ze = Bi(r.type, l, r.elementType === r.type);
                  (e = i.getSnapshotBeforeUpdate(Ze, f)), (i.__reactInternalSnapshotBeforeUpdate = e);
                } catch (rt) {
                  wt(r, r.return, rt);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (((e = t.stateNode.containerInfo), (r = e.nodeType), r === 9)) qf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      qf(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (e & 1024) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Kt = e);
            break;
          }
          Kt = t.return;
        }
    return (Ze = i0), (i0 = !1), Ze;
  }
  function a0(e, t, r) {
    var i = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Tn(e, r), i & 4 && lu(5, r);
        break;
      case 1:
        if ((Tn(e, r), i & 4))
          if (((e = r.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (B) {
              wt(r, r.return, B);
            }
          else {
            var l = Bi(r.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (B) {
              wt(r, r.return, B);
            }
          }
        i & 64 && Wd(r), i & 512 && Ri(r, r.return);
        break;
      case 3:
        if ((Tn(e, r), i & 64 && ((i = r.updateQueue), i !== null))) {
          if (((e = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                e = r.child.stateNode;
                break;
              case 1:
                e = r.child.stateNode;
            }
          try {
            Jd(i, e);
          } catch (B) {
            wt(r, r.return, B);
          }
        }
        break;
      case 26:
        Tn(e, r), i & 512 && Ri(r, r.return);
        break;
      case 27:
      case 5:
        Tn(e, r), t === null && i & 4 && e0(r), i & 512 && Ri(r, r.return);
        break;
      case 12:
        Tn(e, r);
        break;
      case 13:
        Tn(e, r), i & 4 && s0(e, r);
        break;
      case 22:
        if (((l = r.memoizedState !== null || On), !l)) {
          t = (t !== null && t.memoizedState !== null) || jt;
          var f = On,
            g = jt;
          (On = l), (jt = t) && !g ? ei(e, r, (r.subtreeFlags & 8772) !== 0) : Tn(e, r), (On = f), (jt = g);
        }
        i & 512 && (r.memoizedProps.mode === 'manual' ? Ri(r, r.return) : wr(r, r.return));
        break;
      default:
        Tn(e, r);
    }
  }
  function u0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), u0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ja(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Gt = null,
    Or = !1;
  function Nn(e, t, r) {
    for (r = r.child; r !== null; ) l0(e, t, r), (r = r.sibling);
  }
  function l0(e, t, r) {
    if (se && typeof se.onCommitFiberUnmount == 'function')
      try {
        se.onCommitFiberUnmount(q, r);
      } catch {}
    switch (r.tag) {
      case 26:
        jt || wr(r, t),
          Nn(e, t, r),
          r.memoizedState ? r.memoizedState.count-- : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        jt || wr(r, t);
        var i = Gt,
          l = Or;
        for (Gt = r.stateNode, Nn(e, t, r), r = r.stateNode, t = r.attributes; t.length; ) r.removeAttributeNode(t[0]);
        ja(r), (Gt = i), (Or = l);
        break;
      case 5:
        jt || wr(r, t);
      case 6:
        l = Gt;
        var f = Or;
        if (((Gt = null), Nn(e, t, r), (Gt = l), (Or = f), Gt !== null))
          if (Or)
            try {
              (e = Gt), (i = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i);
            } catch (g) {
              wt(r, t, g);
            }
          else
            try {
              Gt.removeChild(r.stateNode);
            } catch (g) {
              wt(r, t, g);
            }
        break;
      case 18:
        Gt !== null &&
          (Or
            ? ((t = Gt),
              (r = r.stateNode),
              t.nodeType === 8 ? Cf(t.parentNode, r) : t.nodeType === 1 && Cf(t, r),
              wu(t))
            : Cf(Gt, r.stateNode));
        break;
      case 4:
        (i = Gt), (l = Or), (Gt = r.stateNode.containerInfo), (Or = !0), Nn(e, t, r), (Gt = i), (Or = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jt || Pn(2, r, t), jt || Pn(4, r, t), Nn(e, t, r);
        break;
      case 1:
        jt || (wr(r, t), (i = r.stateNode), typeof i.componentWillUnmount == 'function' && Pd(r, t, i)), Nn(e, t, r);
        break;
      case 21:
        Nn(e, t, r);
        break;
      case 22:
        jt || wr(r, t), (jt = (i = jt) || r.memoizedState !== null), Nn(e, t, r), (jt = i);
        break;
      default:
        Nn(e, t, r);
    }
  }
  function s0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        wu(e);
      } catch (r) {
        wt(t, t.return, r);
      }
  }
  function qg(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new n0()), t;
      case 22:
        return (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new n0()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function nf(e, t) {
    var r = qg(e);
    t.forEach(function (i) {
      var l = Qg.bind(null, e, i);
      r.has(i) || (r.add(i), i.then(l, l));
    });
  }
  function Fr(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var l = r[i],
          f = e,
          g = t,
          B = g;
        e: for (; B !== null; ) {
          switch (B.tag) {
            case 27:
            case 5:
              (Gt = B.stateNode), (Or = !1);
              break e;
            case 3:
              (Gt = B.stateNode.containerInfo), (Or = !0);
              break e;
            case 4:
              (Gt = B.stateNode.containerInfo), (Or = !0);
              break e;
          }
          B = B.return;
        }
        if (Gt === null) throw Error(s(160));
        l0(f, g, l), (Gt = null), (Or = !1), (f = l.alternate), f !== null && (f.return = null), (l.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) c0(t, e), (t = t.sibling);
  }
  var en = null;
  function c0(e, t) {
    var r = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fr(t, e), Vr(e), i & 4 && (Pn(3, e, e.return), lu(3, e), Pn(5, e, e.return));
        break;
      case 1:
        Fr(t, e),
          Vr(e),
          i & 512 && (jt || r === null || wr(r, r.return)),
          i & 64 &&
            On &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((r = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = r === null ? i : r.concat(i)))));
        break;
      case 26:
        var l = en;
        if ((Fr(t, e), Vr(e), i & 512 && (jt || r === null || wr(r, r.return)), i & 4)) {
          var f = r !== null ? r.memoizedState : null;
          if (((i = e.memoizedState), r === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  (i = e.type), (r = e.memoizedProps), (l = l.ownerDocument || l);
                  t: switch (i) {
                    case 'title':
                      (f = l.getElementsByTagName('title')[0]),
                        (!f ||
                          f[gi] ||
                          f[ft] ||
                          f.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          f.hasAttribute('itemprop')) &&
                          ((f = l.createElement(i)), l.head.insertBefore(f, l.querySelector('head > title'))),
                        rr(f, i, r),
                        (f[ft] = e),
                        Je(f),
                        (i = f);
                      break e;
                    case 'link':
                      var g = em('link', 'href', l).get(i + (r.href || ''));
                      if (g) {
                        for (var B = 0; B < g.length; B++)
                          if (
                            ((f = g[B]),
                            f.getAttribute('href') === (r.href == null ? null : r.href) &&
                              f.getAttribute('rel') === (r.rel == null ? null : r.rel) &&
                              f.getAttribute('title') === (r.title == null ? null : r.title) &&
                              f.getAttribute('crossorigin') === (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            g.splice(B, 1);
                            break t;
                          }
                      }
                      (f = l.createElement(i)), rr(f, i, r), l.head.appendChild(f);
                      break;
                    case 'meta':
                      if ((g = em('meta', 'content', l).get(i + (r.content || '')))) {
                        for (B = 0; B < g.length; B++)
                          if (
                            ((f = g[B]),
                            f.getAttribute('content') === (r.content == null ? null : '' + r.content) &&
                              f.getAttribute('name') === (r.name == null ? null : r.name) &&
                              f.getAttribute('property') === (r.property == null ? null : r.property) &&
                              f.getAttribute('http-equiv') === (r.httpEquiv == null ? null : r.httpEquiv) &&
                              f.getAttribute('charset') === (r.charSet == null ? null : r.charSet))
                          ) {
                            g.splice(B, 1);
                            break t;
                          }
                      }
                      (f = l.createElement(i)), rr(f, i, r), l.head.appendChild(f);
                      break;
                    default:
                      throw Error(s(468, i));
                  }
                  (f[ft] = e), Je(f), (i = f);
                }
                e.stateNode = i;
              } else tm(l, e.type, e.stateNode);
            else e.stateNode = P0(l, i, e.memoizedProps);
          else
            f !== i
              ? (f === null ? r.stateNode !== null && ((r = r.stateNode), r.parentNode.removeChild(r)) : f.count--,
                i === null ? tm(l, e.type, e.stateNode) : P0(l, i, e.memoizedProps))
              : i === null && e.stateNode !== null && t0(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        if (i & 4 && e.alternate === null) {
          (l = e.stateNode), (f = e.memoizedProps);
          try {
            for (var $ = l.firstChild; $; ) {
              var le = $.nextSibling,
                Ee = $.nodeName;
              $[gi] ||
                Ee === 'HEAD' ||
                Ee === 'BODY' ||
                Ee === 'SCRIPT' ||
                Ee === 'STYLE' ||
                (Ee === 'LINK' && $.rel.toLowerCase() === 'stylesheet') ||
                l.removeChild($),
                ($ = le);
            }
            for (var Te = e.type, pe = l.attributes; pe.length; ) l.removeAttributeNode(pe[0]);
            rr(l, Te, f), (l[ft] = e), (l[ir] = f);
          } catch (Ze) {
            wt(e, e.return, Ze);
          }
        }
      case 5:
        if ((Fr(t, e), Vr(e), i & 512 && (jt || r === null || wr(r, r.return)), e.flags & 32)) {
          l = e.stateNode;
          try {
            Ji(l, '');
          } catch (Ze) {
            wt(e, e.return, Ze);
          }
        }
        i & 4 && e.stateNode != null && ((l = e.memoizedProps), t0(e, l, r !== null ? r.memoizedProps : l)),
          i & 1024 && (rf = !0);
        break;
      case 6:
        if ((Fr(t, e), Vr(e), i & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (i = e.memoizedProps), (r = e.stateNode);
          try {
            r.nodeValue = i;
          } catch (Ze) {
            wt(e, e.return, Ze);
          }
        }
        break;
      case 3:
        if (
          ((Ql = null),
          (l = en),
          (en = Xl(t.containerInfo)),
          Fr(t, e),
          (en = l),
          Vr(e),
          i & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            wu(t.containerInfo);
          } catch (Ze) {
            wt(e, e.return, Ze);
          }
        rf && ((rf = !1), f0(e));
        break;
      case 4:
        (i = en), (en = Xl(e.stateNode.containerInfo)), Fr(t, e), Vr(e), (en = i);
        break;
      case 12:
        Fr(t, e), Vr(e);
        break;
      case 13:
        Fr(t, e),
          Vr(e),
          e.child.flags & 8192 && (e.memoizedState !== null) != (r !== null && r.memoizedState !== null) && (df = Me()),
          i & 4 && ((i = e.updateQueue), i !== null && ((e.updateQueue = null), nf(e, i)));
        break;
      case 22:
        if (
          (i & 512 && (jt || r === null || wr(r, r.return)),
          ($ = e.memoizedState !== null),
          (le = r !== null && r.memoizedState !== null),
          (Ee = On),
          (Te = jt),
          (On = Ee || $),
          (jt = Te || le),
          Fr(t, e),
          (jt = Te),
          (On = Ee),
          Vr(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          i & 8192 &&
            ((t._visibility = $ ? t._visibility & -2 : t._visibility | 1),
            $ && ((t = On || jt), r === null || le || t || ma(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== 'manual'))
        )
          e: for (r = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (r === null) {
                le = r = t;
                try {
                  if (((l = le.stateNode), $))
                    (f = l.style),
                      typeof f.setProperty == 'function'
                        ? f.setProperty('display', 'none', 'important')
                        : (f.display = 'none');
                  else {
                    (g = le.stateNode), (B = le.memoizedProps.style);
                    var Se = B != null && B.hasOwnProperty('display') ? B.display : null;
                    g.style.display = Se == null || typeof Se == 'boolean' ? '' : ('' + Se).trim();
                  }
                } catch (Ze) {
                  wt(le, le.return, Ze);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                le = t;
                try {
                  le.stateNode.nodeValue = $ ? '' : le.memoizedProps;
                } catch (Ze) {
                  wt(le, le.return, Ze);
                }
              }
            } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) && t.child !== null) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              r === t && (r = null), (t = t.return);
            }
            r === t && (r = null), (t.sibling.return = t.return), (t = t.sibling);
          }
        i & 4 &&
          ((i = e.updateQueue), i !== null && ((r = i.retryQueue), r !== null && ((i.retryQueue = null), nf(e, r))));
        break;
      case 19:
        Fr(t, e), Vr(e), i & 4 && ((i = e.updateQueue), i !== null && ((e.updateQueue = null), nf(e, i)));
        break;
      case 21:
        break;
      default:
        Fr(t, e), Vr(e);
    }
  }
  function Vr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var r = e.return; r !== null; ) {
              if (r0(r)) {
                var i = r;
                break e;
              }
              r = r.return;
            }
            throw Error(s(160));
          }
          switch (i.tag) {
            case 27:
              var l = i.stateNode,
                f = ef(e);
              Dl(e, f, l);
              break;
            case 5:
              var g = i.stateNode;
              i.flags & 32 && (Ji(g, ''), (i.flags &= -33));
              var B = ef(e);
              Dl(e, B, g);
              break;
            case 3:
            case 4:
              var $ = i.stateNode.containerInfo,
                le = ef(e);
              tf(e, le, $);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (Ee) {
        wt(e, e.return, Ee);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function f0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        f0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function Tn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) a0(e, t.alternate, t), (t = t.sibling);
  }
  function ma(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pn(4, t, t.return), ma(t);
          break;
        case 1:
          wr(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == 'function' && Pd(t, t.return, r), ma(t);
          break;
        case 26:
        case 27:
        case 5:
          wr(t, t.return), ma(t);
          break;
        case 22:
          wr(t, t.return), t.memoizedState === null && ma(t);
          break;
        default:
          ma(t);
      }
      e = e.sibling;
    }
  }
  function ei(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate,
        l = e,
        f = t,
        g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ei(l, f, r), lu(4, f);
          break;
        case 1:
          if ((ei(l, f, r), (i = f), (l = i.stateNode), typeof l.componentDidMount == 'function'))
            try {
              l.componentDidMount();
            } catch (le) {
              wt(i, i.return, le);
            }
          if (((i = f), (l = i.updateQueue), l !== null)) {
            var B = i.stateNode;
            try {
              var $ = l.shared.hiddenCallbacks;
              if ($ !== null) for (l.shared.hiddenCallbacks = null, l = 0; l < $.length; l++) Kd($[l], B);
            } catch (le) {
              wt(i, i.return, le);
            }
          }
          r && g & 64 && Wd(f), Ri(f, f.return);
          break;
        case 26:
        case 27:
        case 5:
          ei(l, f, r), r && i === null && g & 4 && e0(f), Ri(f, f.return);
          break;
        case 12:
          ei(l, f, r);
          break;
        case 13:
          ei(l, f, r), r && g & 4 && s0(l, f);
          break;
        case 22:
          f.memoizedState === null && ei(l, f, r), Ri(f, f.return);
          break;
        default:
          ei(l, f, r);
      }
      t = t.sibling;
    }
  }
  function af(e, t) {
    var r = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && Ja(r));
  }
  function uf(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ja(e));
  }
  function ti(e, t, r, i) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) o0(e, t, r, i), (t = t.sibling);
  }
  function o0(e, t, r, i) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ti(e, t, r, i), l & 2048 && lu(9, t);
        break;
      case 3:
        ti(e, t, r, i),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ja(e)));
        break;
      case 12:
        if (l & 2048) {
          ti(e, t, r, i), (e = t.stateNode);
          try {
            var f = t.memoizedProps,
              g = f.id,
              B = f.onPostCommit;
            typeof B == 'function' && B(g, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch ($) {
            wt(t, t.return, $);
          }
        } else ti(e, t, r, i);
        break;
      case 23:
        break;
      case 22:
        (f = t.stateNode),
          t.memoizedState !== null
            ? f._visibility & 4
              ? ti(e, t, r, i)
              : su(e, t)
            : f._visibility & 4
              ? ti(e, t, r, i)
              : ((f._visibility |= 4), pa(e, t, r, i, (t.subtreeFlags & 10256) !== 0)),
          l & 2048 && af(t.alternate, t);
        break;
      case 24:
        ti(e, t, r, i), l & 2048 && uf(t.alternate, t);
        break;
      default:
        ti(e, t, r, i);
    }
  }
  function pa(e, t, r, i, l) {
    for (l = l && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e,
        g = t,
        B = r,
        $ = i,
        le = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          pa(f, g, B, $, l), lu(8, g);
          break;
        case 23:
          break;
        case 22:
          var Ee = g.stateNode;
          g.memoizedState !== null
            ? Ee._visibility & 4
              ? pa(f, g, B, $, l)
              : su(f, g)
            : ((Ee._visibility |= 4), pa(f, g, B, $, l)),
            l && le & 2048 && af(g.alternate, g);
          break;
        case 24:
          pa(f, g, B, $, l), l && le & 2048 && uf(g.alternate, g);
          break;
        default:
          pa(f, g, B, $, l);
      }
      t = t.sibling;
    }
  }
  function su(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e,
          i = t,
          l = i.flags;
        switch (i.tag) {
          case 22:
            su(r, i), l & 2048 && af(i.alternate, i);
            break;
          case 24:
            su(r, i), l & 2048 && uf(i.alternate, i);
            break;
          default:
            su(r, i);
        }
        t = t.sibling;
      }
  }
  var cu = 8192;
  function ya(e) {
    if (e.subtreeFlags & cu) for (e = e.child; e !== null; ) h0(e), (e = e.sibling);
  }
  function h0(e) {
    switch (e.tag) {
      case 26:
        ya(e), e.flags & cu && e.memoizedState !== null && A1(en, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ya(e);
        break;
      case 3:
      case 4:
        var t = en;
        (en = Xl(e.stateNode.containerInfo)), ya(e), (en = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null ? ((t = cu), (cu = 16777216), ya(e), (cu = t)) : ya(e));
        break;
      default:
        ya(e);
    }
  }
  function d0(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function fu(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (Kt = i), p0(i, e);
        }
      d0(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) m0(e), (e = e.sibling);
  }
  function m0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        fu(e), e.flags & 2048 && Pn(9, e, e.return);
        break;
      case 3:
        fu(e);
        break;
      case 12:
        fu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), Rl(e))
          : fu(e);
        break;
      default:
        fu(e);
    }
  }
  function Rl(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (Kt = i), p0(i, e);
        }
      d0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Pn(8, t, t.return), Rl(t);
          break;
        case 22:
          (r = t.stateNode), r._visibility & 4 && ((r._visibility &= -5), Rl(t));
          break;
        default:
          Rl(t);
      }
      e = e.sibling;
    }
  }
  function p0(e, t) {
    for (; Kt !== null; ) {
      var r = Kt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Pn(8, r, t);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var i = r.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Ja(r.memoizedState.cache);
      }
      if (((i = r.child), i !== null)) (i.return = r), (Kt = i);
      else
        e: for (r = e; Kt !== null; ) {
          i = Kt;
          var l = i.sibling,
            f = i.return;
          if ((u0(i), i === r)) {
            Kt = null;
            break e;
          }
          if (l !== null) {
            (l.return = f), (Kt = l);
            break e;
          }
          Kt = f;
        }
    }
  }
  function zg(e, t, r, i) {
    (this.tag = e),
      (this.key = r),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Yr(e, t, r, i) {
    return new zg(e, t, r, i);
  }
  function lf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function ri(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Yr(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t), (r.type = e.type), (r.flags = 0), (r.subtreeFlags = 0), (r.deletions = null)),
      (r.flags = e.flags & 31457280),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function y0(e, t) {
    e.flags &= 31457282;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (t = r.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function jl(e, t, r, i, l, f) {
    var g = 0;
    if (((i = e), typeof e == 'function')) lf(e) && (g = 1);
    else if (typeof e == 'string') g = x1(e, r, D.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case S:
          return ji(r.children, l, f, t);
        case E:
          (g = 8), (l |= 24);
          break;
        case U:
          return (e = Yr(12, r, t, l | 2)), (e.elementType = U), (e.lanes = f), e;
        case he:
          return (e = Yr(13, r, t, l)), (e.elementType = he), (e.lanes = f), e;
        case ge:
          return (e = Yr(19, r, t, l)), (e.elementType = ge), (e.lanes = f), e;
        case je:
          return g0(r, l, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case v:
              case N:
                g = 10;
                break e;
              case x:
                g = 9;
                break e;
              case te:
                g = 11;
                break e;
              case ve:
                g = 14;
                break e;
              case Q:
                (g = 16), (i = null);
                break e;
            }
          (g = 29), (r = Error(s(130, e === null ? 'null' : typeof e, ''))), (i = null);
      }
    return (t = Yr(g, r, t, l)), (t.elementType = e), (t.type = i), (t.lanes = f), t;
  }
  function ji(e, t, r, i) {
    return (e = Yr(7, e, i, t)), (e.lanes = r), e;
  }
  function g0(e, t, r, i) {
    (e = Yr(22, e, i, t)), (e.elementType = je), (e.lanes = r);
    var l = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var f = l._current;
        if (f === null) throw Error(s(456));
        if (!(l._pendingVisibility & 2)) {
          var g = Vn(f, 2);
          g !== null && ((l._pendingVisibility |= 2), hr(g, f, 2));
        }
      },
      attach: function () {
        var f = l._current;
        if (f === null) throw Error(s(456));
        if (l._pendingVisibility & 2) {
          var g = Vn(f, 2);
          g !== null && ((l._pendingVisibility &= -3), hr(g, f, 2));
        }
      }
    };
    return (e.stateNode = l), e;
  }
  function sf(e, t, r) {
    return (e = Yr(6, e, null, t)), (e.lanes = r), e;
  }
  function cf(e, t, r) {
    return (
      (t = Yr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function Mn(e) {
    e.flags |= 4;
  }
  function v0(e, t) {
    if (t.type !== 'stylesheet' || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !rm(t))) {
      if (
        ((t = Gr.current),
        t !== null && ((yt & 4194176) === yt ? cn !== null : ((yt & 62914560) !== yt && !(yt & 536870912)) || t !== cn))
      )
        throw ((Za = dc), Ch);
      e.flags |= 8192;
    }
  }
  function Cl(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? Zi() : 536870912), (e.lanes |= t), (va |= t));
  }
  function ou(e, t) {
    if (!vt)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var i = null; r !== null; ) r.alternate !== null && (i = r), (r = r.sibling);
          i === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (i.sibling = null);
      }
  }
  function Ut(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      i = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags & 31457280),
          (i |= l.flags & 31457280),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes), (i |= l.subtreeFlags), (i |= l.flags), (l.return = e), (l = l.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = r), t;
  }
  function kg(e, t, r) {
    var i = t.pendingProps;
    switch ((oc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ut(t), null;
      case 1:
        return Ut(t), null;
      case 3:
        return (
          (r = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          wn(Yt),
          ce(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Va(t)
              ? Mn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Pr !== null && (gf(Pr), (Pr = null)))),
          Ut(t),
          null
        );
      case 26:
        return (
          (r = t.memoizedState),
          e === null
            ? (Mn(t), r !== null ? (Ut(t), v0(t, r)) : (Ut(t), (t.flags &= -16777217)))
            : r
              ? r !== e.memoizedState
                ? (Mn(t), Ut(t), v0(t, r))
                : (Ut(t), (t.flags &= -16777217))
              : (e.memoizedProps !== i && Mn(t), Ut(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        O(t), (r = ie.current);
        var l = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== i && Mn(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(s(166));
            return Ut(t), null;
          }
          (e = D.current), Va(t) ? Rh(t) : ((e = Z0(l, i, r)), (t.stateNode = e), Mn(t));
        }
        return Ut(t), null;
      case 5:
        if ((O(t), (r = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== i && Mn(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(s(166));
            return Ut(t), null;
          }
          if (((e = D.current), Va(t))) Rh(t);
          else {
            switch (((l = $l(ie.current)), e)) {
              case 1:
                e = l.createElementNS('http://www.w3.org/2000/svg', r);
                break;
              case 2:
                e = l.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                break;
              default:
                switch (r) {
                  case 'svg':
                    e = l.createElementNS('http://www.w3.org/2000/svg', r);
                    break;
                  case 'math':
                    e = l.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                    break;
                  case 'script':
                    (e = l.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e = typeof i.is == 'string' ? l.createElement('select', { is: i.is }) : l.createElement('select')),
                      i.multiple ? (e.multiple = !0) : i.size && (e.size = i.size);
                    break;
                  default:
                    e = typeof i.is == 'string' ? l.createElement(r, { is: i.is }) : l.createElement(r);
                }
            }
            (e[ft] = t), (e[ir] = i);
            e: for (l = t.child; l !== null; ) {
              if (l.tag === 5 || l.tag === 6) e.appendChild(l.stateNode);
              else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                (l.child.return = l), (l = l.child);
                continue;
              }
              if (l === t) break e;
              for (; l.sibling === null; ) {
                if (l.return === null || l.return === t) break e;
                l = l.return;
              }
              (l.sibling.return = l.return), (l = l.sibling);
            }
            t.stateNode = e;
            e: switch ((rr(e, r, i), r)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!i.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Mn(t);
          }
        }
        return Ut(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && Mn(t);
        else {
          if (typeof i != 'string' && t.stateNode === null) throw Error(s(166));
          if (((e = ie.current), Va(t))) {
            if (((e = t.stateNode), (r = t.memoizedProps), (i = null), (l = or), l !== null))
              switch (l.tag) {
                case 27:
                case 5:
                  i = l.memoizedProps;
              }
            (e[ft] = t),
              (e = !!(e.nodeValue === r || (i !== null && i.suppressHydrationWarning === !0) || G0(e.nodeValue, r))),
              e || Ai(t);
          } else (e = $l(e).createTextNode(i)), (e[ft] = t), (t.stateNode = e);
        }
        return Ut(t), null;
      case 13:
        if (((i = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((l = Va(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(s(317));
              l[ft] = t;
            } else Ya(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
            Ut(t), (l = !1);
          } else Pr !== null && (gf(Pr), (Pr = null)), (l = !0);
          if (!l) return t.flags & 256 ? (En(t), t) : (En(t), null);
        }
        if ((En(t), t.flags & 128)) return (t.lanes = r), t;
        if (((r = i !== null), (e = e !== null && e.memoizedState !== null), r)) {
          (i = t.child),
            (l = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (l = i.alternate.memoizedState.cachePool.pool);
          var f = null;
          i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool),
            f !== l && (i.flags |= 2048);
        }
        return r !== e && r && (t.child.flags |= 8192), Cl(t, t.updateQueue), Ut(t), null;
      case 4:
        return ce(), e === null && Tf(t.stateNode.containerInfo), Ut(t), null;
      case 10:
        return wn(t.type), Ut(t), null;
      case 19:
        if ((De(Vt), (l = t.memoizedState), l === null)) return Ut(t), null;
        if (((i = (t.flags & 128) !== 0), (f = l.rendering), f === null))
          if (i) ou(l, !1);
          else {
            if (Ct !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((f = vl(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      ou(l, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      Cl(t, e),
                      t.subtreeFlags = 0,
                      e = r,
                      r = t.child;
                    r !== null;

                  )
                    y0(r, e), (r = r.sibling);
                  return M(Vt, (Vt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Me() > ql && ((t.flags |= 128), (i = !0), ou(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = vl(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Cl(t, e),
                ou(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !f.alternate && !vt)
              )
                return Ut(t), null;
            } else
              2 * Me() - l.renderingStartTime > ql &&
                r !== 536870912 &&
                ((t.flags |= 128), (i = !0), ou(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = l.last), e !== null ? (e.sibling = f) : (t.child = f), (l.last = f));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = Me()),
            (t.sibling = null),
            (e = Vt.current),
            M(Vt, i ? (e & 1) | 2 : e & 1),
            t)
          : (Ut(t), null);
      case 22:
      case 23:
        return (
          En(t),
          pc(),
          (i = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
          i ? r & 536870912 && !(t.flags & 128) && (Ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ut(t),
          (r = t.updateQueue),
          r !== null && Cl(t, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
          i !== r && (t.flags |= 2048),
          e !== null && De(Oi),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          wn(Yt),
          Ut(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ig(e, t) {
    switch ((oc(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return wn(Yt), ce(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
      case 26:
      case 27:
      case 5:
        return O(t), null;
      case 13:
        if ((En(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Ya();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return De(Vt), null;
      case 4:
        return ce(), null;
      case 10:
        return wn(t.type), null;
      case 22:
      case 23:
        return En(t), pc(), e !== null && De(Oi), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 24:
        return wn(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function b0(e, t) {
    switch ((oc(t), t.tag)) {
      case 3:
        wn(Yt), ce();
        break;
      case 26:
      case 27:
      case 5:
        O(t);
        break;
      case 4:
        ce();
        break;
      case 13:
        En(t);
        break;
      case 19:
        De(Vt);
        break;
      case 10:
        wn(t.type);
        break;
      case 22:
      case 23:
        En(t), pc(), e !== null && De(Oi);
        break;
      case 24:
        wn(Yt);
    }
  }
  var Lg = {
      getCacheForType: function (e) {
        var t = ar(Yt),
          r = t.data.get(e);
        return r === void 0 && ((r = e()), t.data.set(e, r)), r;
      }
    },
    Hg = typeof WeakMap == 'function' ? WeakMap : Map,
    Dt = 0,
    Nt = null,
    ht = null,
    yt = 0,
    Tt = 0,
    Nr = null,
    Bn = !1,
    ga = !1,
    ff = !1,
    Un = 0,
    Ct = 0,
    ni = 0,
    Ci = 0,
    of = 0,
    $r = 0,
    va = 0,
    hu = null,
    on = null,
    hf = !1,
    df = 0,
    ql = 1 / 0,
    zl = null,
    ii = null,
    kl = !1,
    qi = null,
    du = 0,
    mf = 0,
    pf = null,
    mu = 0,
    yf = null;
  function Tr() {
    if (Dt & 2 && yt !== 0) return yt & -yt;
    if (_.T !== null) {
      var e = ca;
      return e !== 0 ? e : Af();
    }
    return Ku();
  }
  function S0() {
    $r === 0 && ($r = !(yt & 536870912) || vt ? fr() : 536870912);
    var e = Gr.current;
    return e !== null && (e.flags |= 32), $r;
  }
  function hr(e, t, r) {
    ((e === Nt && Tt === 2) || e.cancelPendingCommit !== null) && (ba(e, 0), Dn(e, yt, $r, !1)),
      Ot(e, r),
      (!(Dt & 2) || e !== Nt) && (e === Nt && (!(Dt & 2) && (Ci |= r), Ct === 4 && Dn(e, yt, $r, !1)), hn(e));
  }
  function E0(e, t, r) {
    if (Dt & 6) throw Error(s(327));
    var i = (!r && (t & 60) === 0 && (t & e.expiredLanes) === 0) || st(e, t),
      l = i ? Vg(e, t) : Sf(e, t, !0),
      f = i;
    do {
      if (l === 0) {
        ga && !i && Dn(e, t, 0, !1);
        break;
      } else if (l === 6) Dn(e, t, 0, !Bn);
      else {
        if (((r = e.current.alternate), f && !Gg(r))) {
          (l = Sf(e, t, !1)), (f = !1);
          continue;
        }
        if (l === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var g = 0;
          else (g = e.pendingLanes & -536870913), (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            t = g;
            e: {
              var B = e;
              l = hu;
              var $ = B.current.memoizedState.isDehydrated;
              if (($ && (ba(B, g).flags |= 256), (g = Sf(B, g, !1)), g !== 2)) {
                if (ff && !$) {
                  (B.errorRecoveryDisabledLanes |= f), (Ci |= f), (l = 4);
                  break e;
                }
                (f = on), (on = l), f !== null && gf(f);
              }
              l = g;
            }
            if (((f = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          ba(e, 0), Dn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((i = e), l)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194176) === t) {
                Dn(i, t, $r, !Bn);
                break e;
              }
              break;
            case 2:
              on = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (((i.finishedWork = r), (i.finishedLanes = t), (t & 62914560) === t && ((f = df + 300 - Me()), 10 < f))) {
            if ((Dn(i, t, $r, !Bn), nt(i, 0) !== 0)) break e;
            i.timeoutHandle = Y0(x0.bind(null, i, r, on, zl, hf, t, $r, Ci, va, Bn, 2, -0, 0), f);
            break e;
          }
          x0(i, r, on, zl, hf, t, $r, Ci, va, Bn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    hn(e);
  }
  function gf(e) {
    on === null ? (on = e) : on.push.apply(on, e);
  }
  function x0(e, t, r, i, l, f, g, B, $, le, Ee, Te, pe) {
    var Se = t.subtreeFlags;
    if (
      (Se & 8192 || (Se & 16785408) === 16785408) &&
      ((Su = { stylesheets: null, count: 0, unsuspend: _1 }), h0(t), (t = w1()), t !== null)
    ) {
      (e.cancelPendingCommit = t(M0.bind(null, e, r, i, l, g, B, $, 1, Te, pe))), Dn(e, f, g, !le);
      return;
    }
    M0(e, r, i, l, g, B, $, Ee, Te, pe);
  }
  function Gg(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        t.flags & 16384 &&
        ((r = t.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var i = 0; i < r.length; i++) {
          var l = r[i],
            f = l.getSnapshot;
          l = l.value;
          try {
            if (!Ar(f(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Dn(e, t, r, i) {
    (t &= ~of),
      (t &= ~Ci),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      i && (e.warmLanes |= t),
      (i = e.expirationTimes);
    for (var l = t; 0 < l; ) {
      var f = 31 - Ce(l),
        g = 1 << f;
      (i[f] = -1), (l &= ~g);
    }
    r !== 0 && ks(e, r, t);
  }
  function Il() {
    return Dt & 6 ? !0 : (pu(0), !1);
  }
  function vf() {
    if (ht !== null) {
      if (Tt === 0) var e = ht.return;
      else (e = ht), (An = Ui = null), _c(e), (la = null), (Qa = 0), (e = ht);
      for (; e !== null; ) b0(e.alternate, e), (e = e.return);
      ht = null;
    }
  }
  function ba(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    r !== -1 && ((e.timeoutHandle = -1), l1(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      vf(),
      (Nt = e),
      (ht = r = ri(e.current, null)),
      (yt = t),
      (Tt = 0),
      (Nr = null),
      (Bn = !1),
      (ga = st(e, t)),
      (ff = !1),
      (va = $r = of = Ci = ni = Ct = 0),
      (on = hu = null),
      (hf = !1),
      t & 8 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var l = 31 - Ce(i),
          f = 1 << l;
        (t |= e[l]), (i &= ~f);
      }
    return (Un = t), cl(), r;
  }
  function _0(e, t) {
    (lt = null),
      (_.H = fn),
      t === Xa
        ? ((t = kh()), (Tt = 3))
        : t === Ch
          ? ((t = kh()), (Tt = 4))
          : (Tt = t === qd ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
      (Nr = t),
      ht === null && ((Ct = 1), Ml(e, Ir(t, e.current)));
  }
  function A0() {
    var e = _.H;
    return (_.H = fn), e === null ? fn : e;
  }
  function w0() {
    var e = _.A;
    return (_.A = Lg), e;
  }
  function bf() {
    (Ct = 4),
      Bn || ((yt & 4194176) !== yt && Gr.current !== null) || (ga = !0),
      (!(ni & 134217727) && !(Ci & 134217727)) || Nt === null || Dn(Nt, yt, $r, !1);
  }
  function Sf(e, t, r) {
    var i = Dt;
    Dt |= 2;
    var l = A0(),
      f = w0();
    (Nt !== e || yt !== t) && ((zl = null), ba(e, t)), (t = !1);
    var g = Ct;
    e: do
      try {
        if (Tt !== 0 && ht !== null) {
          var B = ht,
            $ = Nr;
          switch (Tt) {
            case 8:
              vf(), (g = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Gr.current === null && (t = !0);
              var le = Tt;
              if (((Tt = 0), (Nr = null), Sa(e, B, $, le), r && ga)) {
                g = 0;
                break e;
              }
              break;
            default:
              (le = Tt), (Tt = 0), (Nr = null), Sa(e, B, $, le);
          }
        }
        Fg(), (g = Ct);
        break;
      } catch (Ee) {
        _0(e, Ee);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (An = Ui = null),
      (Dt = i),
      (_.H = l),
      (_.A = f),
      ht === null && ((Nt = null), (yt = 0), cl()),
      g
    );
  }
  function Fg() {
    for (; ht !== null; ) O0(ht);
  }
  function Vg(e, t) {
    var r = Dt;
    Dt |= 2;
    var i = A0(),
      l = w0();
    Nt !== e || yt !== t ? ((zl = null), (ql = Me() + 500), ba(e, t)) : (ga = st(e, t));
    e: do
      try {
        if (Tt !== 0 && ht !== null) {
          t = ht;
          var f = Nr;
          t: switch (Tt) {
            case 1:
              (Tt = 0), (Nr = null), Sa(e, t, f, 1);
              break;
            case 2:
              if (qh(f)) {
                (Tt = 0), (Nr = null), N0(t);
                break;
              }
              (t = function () {
                Tt === 2 && Nt === e && (Tt = 7), hn(e);
              }),
                f.then(t, t);
              break e;
            case 3:
              Tt = 7;
              break e;
            case 4:
              Tt = 5;
              break e;
            case 7:
              qh(f) ? ((Tt = 0), (Nr = null), N0(t)) : ((Tt = 0), (Nr = null), Sa(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (ht.tag) {
                case 26:
                  g = ht.memoizedState;
                case 5:
                case 27:
                  var B = ht;
                  if (!g || rm(g)) {
                    (Tt = 0), (Nr = null);
                    var $ = B.sibling;
                    if ($ !== null) ht = $;
                    else {
                      var le = B.return;
                      le !== null ? ((ht = le), Ll(le)) : (ht = null);
                    }
                    break t;
                  }
              }
              (Tt = 0), (Nr = null), Sa(e, t, f, 5);
              break;
            case 6:
              (Tt = 0), (Nr = null), Sa(e, t, f, 6);
              break;
            case 8:
              vf(), (Ct = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        Yg();
        break;
      } catch (Ee) {
        _0(e, Ee);
      }
    while (!0);
    return (An = Ui = null), (_.H = i), (_.A = l), (Dt = r), ht !== null ? 0 : ((Nt = null), (yt = 0), cl(), Ct);
  }
  function Yg() {
    for (; ht !== null && !me(); ) O0(ht);
  }
  function O0(e) {
    var t = Zd(e.alternate, e, Un);
    (e.memoizedProps = e.pendingProps), t === null ? Ll(e) : (ht = t);
  }
  function N0(e) {
    var t = e,
      r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Gd(r, t, t.pendingProps, t.type, void 0, yt);
        break;
      case 11:
        t = Gd(r, t, t.pendingProps, t.type.render, t.ref, yt);
        break;
      case 5:
        _c(t);
      default:
        b0(r, t), (t = ht = y0(t, Un)), (t = Zd(r, t, Un));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Ll(e) : (ht = t);
  }
  function Sa(e, t, r, i) {
    (An = Ui = null), _c(t), (la = null), (Qa = 0);
    var l = t.return;
    try {
      if (Rg(e, l, t, r, yt)) {
        (Ct = 1), Ml(e, Ir(r, e.current)), (ht = null);
        return;
      }
    } catch (f) {
      if (l !== null) throw ((ht = l), f);
      (Ct = 1), Ml(e, Ir(r, e.current)), (ht = null);
      return;
    }
    t.flags & 32768
      ? (vt || i === 1
          ? (e = !0)
          : ga || yt & 536870912
            ? (e = !1)
            : ((Bn = e = !0),
              (i === 2 || i === 3 || i === 6) && ((i = Gr.current), i !== null && i.tag === 13 && (i.flags |= 16384))),
        T0(t, e))
      : Ll(t);
  }
  function Ll(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        T0(t, Bn);
        return;
      }
      e = t.return;
      var r = kg(t.alternate, t, Un);
      if (r !== null) {
        ht = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ht = t;
        return;
      }
      ht = t = e;
    } while (t !== null);
    Ct === 0 && (Ct = 5);
  }
  function T0(e, t) {
    do {
      var r = Ig(e.alternate, e);
      if (r !== null) {
        (r.flags &= 32767), (ht = r);
        return;
      }
      if (
        ((r = e.return),
        r !== null && ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ht = e;
        return;
      }
      ht = e = r;
    } while (e !== null);
    (Ct = 6), (ht = null);
  }
  function M0(e, t, r, i, l, f, g, B, $, le) {
    var Ee = _.T,
      Te = w.p;
    try {
      (w.p = 2), (_.T = null), $g(e, t, r, i, Te, l, f, g, B, $, le);
    } finally {
      (_.T = Ee), (w.p = Te);
    }
  }
  function $g(e, t, r, i, l, f, g, B) {
    do Ea();
    while (qi !== null);
    if (Dt & 6) throw Error(s(327));
    var $ = e.finishedWork;
    if (((i = e.finishedLanes), $ === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), $ === e.current)) throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0), (e.cancelPendingCommit = null);
    var le = $.lanes | $.childLanes;
    if (
      ((le |= sc),
      Fo(e, i, le, f, g, B),
      e === Nt && ((ht = Nt = null), (yt = 0)),
      (!($.subtreeFlags & 10256) && !($.flags & 10256)) ||
        kl ||
        ((kl = !0),
        (mf = le),
        (pf = r),
        Kg(d, function () {
          return Ea(), null;
        })),
      (r = ($.flags & 15990) !== 0),
      $.subtreeFlags & 15990 || r
        ? ((r = _.T),
          (_.T = null),
          (f = w.p),
          (w.p = 2),
          (g = Dt),
          (Dt |= 4),
          Cg(e, $),
          c0($, e),
          yg(Df, e.containerInfo),
          (Wl = !!Uf),
          (Df = Uf = null),
          (e.current = $),
          a0(e, $.alternate, $),
          ye(),
          (Dt = g),
          (w.p = f),
          (_.T = r))
        : (e.current = $),
      kl ? ((kl = !1), (qi = e), (du = i)) : B0(e, le),
      (le = e.pendingLanes),
      le === 0 && (ii = null),
      xe($.stateNode),
      hn(e),
      t !== null)
    )
      for (l = e.onRecoverableError, $ = 0; $ < t.length; $++) (le = t[$]), l(le.value, { componentStack: le.stack });
    return (
      du & 3 && Ea(),
      (le = e.pendingLanes),
      i & 4194218 && le & 42 ? (e === yf ? mu++ : ((mu = 0), (yf = e))) : (mu = 0),
      pu(0),
      null
    );
  }
  function B0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ja(t)));
  }
  function Ea() {
    if (qi !== null) {
      var e = qi,
        t = mf;
      mf = 0;
      var r = Qu(du),
        i = _.T,
        l = w.p;
      try {
        if (((w.p = 32 > r ? 32 : r), (_.T = null), qi === null)) var f = !1;
        else {
          (r = pf), (pf = null);
          var g = qi,
            B = du;
          if (((qi = null), (du = 0), Dt & 6)) throw Error(s(331));
          var $ = Dt;
          if (
            ((Dt |= 4),
            m0(g.current),
            o0(g, g.current, B, r),
            (Dt = $),
            pu(0, !1),
            se && typeof se.onPostCommitFiberRoot == 'function')
          )
            try {
              se.onPostCommitFiberRoot(q, g);
            } catch {}
          f = !0;
        }
        return f;
      } finally {
        (w.p = l), (_.T = i), B0(e, t);
      }
    }
    return !1;
  }
  function U0(e, t, r) {
    (t = Ir(r, t)), (t = zc(e.stateNode, t, 2)), (e = Wn(e, t, 2)), e !== null && (Ot(e, 2), hn(e));
  }
  function wt(e, t, r) {
    if (e.tag === 3) U0(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          U0(t, e, r);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof i.componentDidCatch == 'function' && (ii === null || !ii.has(i)))
          ) {
            (e = Ir(r, e)), (r = jd(2)), (i = Wn(t, r, 2)), i !== null && (Cd(r, i, t, e), Ot(i, 2), hn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ef(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Hg();
      var l = new Set();
      i.set(t, l);
    } else (l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l));
    l.has(r) || ((ff = !0), l.add(r), (e = Xg.bind(null, e, t, r)), t.then(e, e));
  }
  function Xg(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      Nt === e &&
        (yt & r) === r &&
        (Ct === 4 || (Ct === 3 && (yt & 62914560) === yt && 300 > Me() - df) ? !(Dt & 2) && ba(e, 0) : (of |= r),
        va === yt && (va = 0)),
      hn(e);
  }
  function D0(e, t) {
    t === 0 && (t = Zi()), (e = Vn(e, t)), e !== null && (Ot(e, t), hn(e));
  }
  function Zg(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), D0(e, r);
  }
  function Qg(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          l = e.memoizedState;
        l !== null && (r = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    i !== null && i.delete(t), D0(e, r);
  }
  function Kg(e, t) {
    return I(e, t);
  }
  var Hl = null,
    xa = null,
    xf = !1,
    Gl = !1,
    _f = !1,
    zi = 0;
  function hn(e) {
    e !== xa && e.next === null && (xa === null ? (Hl = xa = e) : (xa = xa.next = e)),
      (Gl = !0),
      xf || ((xf = !0), Wg(Jg));
  }
  function pu(e, t) {
    if (!_f && Gl) {
      _f = !0;
      do
        for (var r = !1, i = Hl; i !== null; ) {
          if (e !== 0) {
            var l = i.pendingLanes;
            if (l === 0) var f = 0;
            else {
              var g = i.suspendedLanes,
                B = i.pingedLanes;
              (f = (1 << (31 - Ce(42 | e) + 1)) - 1),
                (f &= l & ~(g & ~B)),
                (f = f & 201326677 ? (f & 201326677) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((r = !0), C0(i, f));
          } else (f = yt), (f = nt(i, i === Nt ? f : 0)), !(f & 3) || st(i, f) || ((r = !0), C0(i, f));
          i = i.next;
        }
      while (r);
      _f = !1;
    }
  }
  function Jg() {
    Gl = xf = !1;
    var e = 0;
    zi !== 0 && (u1() && (e = zi), (zi = 0));
    for (var t = Me(), r = null, i = Hl; i !== null; ) {
      var l = i.next,
        f = R0(i, t);
      f === 0
        ? ((i.next = null), r === null ? (Hl = l) : (r.next = l), l === null && (xa = r))
        : ((r = i), (e !== 0 || f & 3) && (Gl = !0)),
        (i = l);
    }
    pu(e);
  }
  function R0(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var g = 31 - Ce(f),
        B = 1 << g,
        $ = l[g];
      $ === -1 ? (!(B & r) || B & i) && (l[g] = Bt(B, t)) : $ <= t && (e.expiredLanes |= B), (f &= ~B);
    }
    if (
      ((t = Nt),
      (r = yt),
      (r = nt(e, e === t ? r : 0)),
      (i = e.callbackNode),
      r === 0 || (e === t && Tt === 2) || e.cancelPendingCommit !== null)
    )
      return i !== null && i !== null && J(i), (e.callbackNode = null), (e.callbackPriority = 0);
    if (!(r & 3) || st(e, r)) {
      if (((t = r & -r), t === e.callbackPriority)) return t;
      switch ((i !== null && J(i), Qu(r))) {
        case 2:
        case 8:
          r = b;
          break;
        case 32:
          r = d;
          break;
        case 268435456:
          r = L;
          break;
        default:
          r = d;
      }
      return (i = j0.bind(null, e)), (r = I(r, i)), (e.callbackPriority = t), (e.callbackNode = r), t;
    }
    return i !== null && i !== null && J(i), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function j0(e, t) {
    var r = e.callbackNode;
    if (Ea() && e.callbackNode !== r) return null;
    var i = yt;
    return (
      (i = nt(e, e === Nt ? i : 0)),
      i === 0
        ? null
        : (E0(e, i, t), R0(e, Me()), e.callbackNode != null && e.callbackNode === r ? j0.bind(null, e) : null)
    );
  }
  function C0(e, t) {
    if (Ea()) return null;
    E0(e, t, !0);
  }
  function Wg(e) {
    s1(function () {
      Dt & 6 ? I(tt, e) : e();
    });
  }
  function Af() {
    return zi === 0 && (zi = fr()), zi;
  }
  function q0(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : rl('' + e);
  }
  function z0(e, t) {
    var r = t.ownerDocument.createElement('input');
    return (
      (r.name = t.name),
      (r.value = t.value),
      e.id && r.setAttribute('form', e.id),
      t.parentNode.insertBefore(r, t),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function Pg(e, t, r, i, l) {
    if (t === 'submit' && r && r.stateNode === l) {
      var f = q0((l[ir] || null).action),
        g = i.submitter;
      g &&
        ((t = (t = g[ir] || null) ? q0(t.formAction) : g.getAttribute('formAction')),
        t !== null && ((f = t), (g = null)));
      var B = new ul('action', 'action', null, i, l);
      e.push({
        event: B,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (zi !== 0) {
                  var $ = g ? z0(l, g) : new FormData(l);
                  Dc(r, { pending: !0, data: $, method: l.method, action: f }, null, $);
                }
              } else
                typeof f == 'function' &&
                  (B.preventDefault(),
                  ($ = g ? z0(l, g) : new FormData(l)),
                  Dc(r, { pending: !0, data: $, method: l.method, action: f }, f, $));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var wf = 0; wf < Mh.length; wf++) {
    var Of = Mh[wf],
      e1 = Of.toLowerCase(),
      t1 = Of[0].toUpperCase() + Of.slice(1);
    Wr(e1, 'on' + t1);
  }
  Wr(Ah, 'onAnimationEnd'),
    Wr(wh, 'onAnimationIteration'),
    Wr(Oh, 'onAnimationStart'),
    Wr('dblclick', 'onDoubleClick'),
    Wr('focusin', 'onFocus'),
    Wr('focusout', 'onBlur'),
    Wr(vg, 'onTransitionRun'),
    Wr(bg, 'onTransitionStart'),
    Wr(Sg, 'onTransitionCancel'),
    Wr(Nh, 'onTransitionEnd'),
    Cr('onMouseEnter', ['mouseout', 'mouseover']),
    Cr('onMouseLeave', ['mouseout', 'mouseover']),
    Cr('onPointerEnter', ['pointerout', 'pointerover']),
    Cr('onPointerLeave', ['pointerout', 'pointerover']),
    jr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    jr('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    jr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    jr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    jr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    jr('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var yu =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    r1 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(yu));
  function k0(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r],
        l = i.event;
      i = i.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var B = i[g],
              $ = B.instance,
              le = B.currentTarget;
            if (((B = B.listener), $ !== f && l.isPropagationStopped())) break e;
            (f = B), (l.currentTarget = le);
            try {
              f(l);
            } catch (Ee) {
              Tl(Ee);
            }
            (l.currentTarget = null), (f = $);
          }
        else
          for (g = 0; g < i.length; g++) {
            if (
              ((B = i[g]),
              ($ = B.instance),
              (le = B.currentTarget),
              (B = B.listener),
              $ !== f && l.isPropagationStopped())
            )
              break e;
            (f = B), (l.currentTarget = le);
            try {
              f(l);
            } catch (Ee) {
              Tl(Ee);
            }
            (l.currentTarget = null), (f = $);
          }
      }
    }
  }
  function pt(e, t) {
    var r = t[Ra];
    r === void 0 && (r = t[Ra] = new Set());
    var i = e + '__bubble';
    r.has(i) || (I0(t, e, 2, !1), r.add(i));
  }
  function Nf(e, t, r) {
    var i = 0;
    t && (i |= 4), I0(r, e, i, t);
  }
  var Fl = '_reactListening' + Math.random().toString(36).slice(2);
  function Tf(e) {
    if (!e[Fl]) {
      (e[Fl] = !0),
        ot.forEach(function (r) {
          r !== 'selectionchange' && (r1.has(r) || Nf(r, !1, e), Nf(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fl] || ((t[Fl] = !0), Nf('selectionchange', !1, t));
    }
  }
  function I0(e, t, r, i) {
    switch (sm(t)) {
      case 2:
        var l = T1;
        break;
      case 8:
        l = M1;
        break;
      default:
        l = Hf;
    }
    (r = l.bind(null, t, r, e)),
      (l = void 0),
      !Qs || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      i
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
          ? e.addEventListener(t, r, { passive: l })
          : e.addEventListener(t, r, !1);
  }
  function Mf(e, t, r, i, l) {
    var f = i;
    if (!(t & 1) && !(t & 2) && i !== null)
      e: for (;;) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var B = i.stateNode.containerInfo;
          if (B === l || (B.nodeType === 8 && B.parentNode === l)) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var $ = g.tag;
              if (
                ($ === 3 || $ === 4) &&
                (($ = g.stateNode.containerInfo), $ === l || ($.nodeType === 8 && $.parentNode === l))
              )
                return;
              g = g.return;
            }
          for (; B !== null; ) {
            if (((g = mt(B)), g === null)) return;
            if ((($ = g.tag), $ === 5 || $ === 6 || $ === 26 || $ === 27)) {
              i = f = g;
              continue e;
            }
            B = B.parentNode;
          }
        }
        i = i.return;
      }
    eh(function () {
      var le = f,
        Ee = Xs(r),
        Te = [];
      e: {
        var pe = Th.get(e);
        if (pe !== void 0) {
          var Se = ul,
            Ze = e;
          switch (e) {
            case 'keypress':
              if (il(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              Se = Qy;
              break;
            case 'focusin':
              (Ze = 'focus'), (Se = Ps);
              break;
            case 'focusout':
              (Ze = 'blur'), (Se = Ps);
              break;
            case 'beforeblur':
            case 'afterblur':
              Se = Ps;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Se = nh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Se = zy;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Se = Wy;
              break;
            case Ah:
            case wh:
            case Oh:
              Se = Ly;
              break;
            case Nh:
              Se = eg;
              break;
            case 'scroll':
            case 'scrollend':
              Se = Cy;
              break;
            case 'wheel':
              Se = rg;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Se = Gy;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Se = ah;
              break;
            case 'toggle':
            case 'beforetoggle':
              Se = ig;
          }
          var rt = (t & 4) !== 0,
            qt = !rt && (e === 'scroll' || e === 'scrollend'),
            fe = rt ? (pe !== null ? pe + 'Capture' : null) : pe;
          rt = [];
          for (var ae = le, oe; ae !== null; ) {
            var we = ae;
            if (
              ((oe = we.stateNode),
              (we = we.tag),
              (we !== 5 && we !== 26 && we !== 27) ||
                oe === null ||
                fe === null ||
                ((we = Ca(ae, fe)), we != null && rt.push(gu(ae, we, oe))),
              qt)
            )
              break;
            ae = ae.return;
          }
          0 < rt.length && ((pe = new Se(pe, Ze, null, r, Ee)), Te.push({ event: pe, listeners: rt }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((pe = e === 'mouseover' || e === 'pointerover'),
            (Se = e === 'mouseout' || e === 'pointerout'),
            pe && r !== $s && (Ze = r.relatedTarget || r.fromElement) && (mt(Ze) || Ze[Hn]))
          )
            break e;
          if (
            (Se || pe) &&
            ((pe = Ee.window === Ee ? Ee : (pe = Ee.ownerDocument) ? pe.defaultView || pe.parentWindow : window),
            Se
              ? ((Ze = r.relatedTarget || r.toElement),
                (Se = le),
                (Ze = Ze ? mt(Ze) : null),
                Ze !== null &&
                  ((qt = k(Ze)), (rt = Ze.tag), Ze !== qt || (rt !== 5 && rt !== 27 && rt !== 6)) &&
                  (Ze = null))
              : ((Se = null), (Ze = le)),
            Se !== Ze)
          ) {
            if (
              ((rt = nh),
              (we = 'onMouseLeave'),
              (fe = 'onMouseEnter'),
              (ae = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((rt = ah), (we = 'onPointerLeave'), (fe = 'onPointerEnter'), (ae = 'pointer')),
              (qt = Se == null ? pe : vi(Se)),
              (oe = Ze == null ? pe : vi(Ze)),
              (pe = new rt(we, ae + 'leave', Se, r, Ee)),
              (pe.target = qt),
              (pe.relatedTarget = oe),
              (we = null),
              mt(Ee) === le &&
                ((rt = new rt(fe, ae + 'enter', Ze, r, Ee)), (rt.target = oe), (rt.relatedTarget = qt), (we = rt)),
              (qt = we),
              Se && Ze)
            )
              t: {
                for (rt = Se, fe = Ze, ae = 0, oe = rt; oe; oe = _a(oe)) ae++;
                for (oe = 0, we = fe; we; we = _a(we)) oe++;
                for (; 0 < ae - oe; ) (rt = _a(rt)), ae--;
                for (; 0 < oe - ae; ) (fe = _a(fe)), oe--;
                for (; ae--; ) {
                  if (rt === fe || (fe !== null && rt === fe.alternate)) break t;
                  (rt = _a(rt)), (fe = _a(fe));
                }
                rt = null;
              }
            else rt = null;
            Se !== null && L0(Te, pe, Se, rt, !1), Ze !== null && qt !== null && L0(Te, qt, Ze, rt, !0);
          }
        }
        e: {
          if (
            ((pe = le ? vi(le) : window),
            (Se = pe.nodeName && pe.nodeName.toLowerCase()),
            Se === 'select' || (Se === 'input' && pe.type === 'file'))
          )
            var Ye = dh;
          else if (oh(pe))
            if (mh) Ye = mg;
            else {
              Ye = hg;
              var ct = og;
            }
          else
            (Se = pe.nodeName),
              !Se || Se.toLowerCase() !== 'input' || (pe.type !== 'checkbox' && pe.type !== 'radio')
                ? le && Ys(le.elementType) && (Ye = dh)
                : (Ye = dg);
          if (Ye && (Ye = Ye(e, le))) {
            hh(Te, Ye, r, Ee);
            break e;
          }
          ct && ct(e, pe, le),
            e === 'focusout' &&
              le &&
              pe.type === 'number' &&
              le.memoizedProps.value != null &&
              Vs(pe, 'number', pe.value);
        }
        switch (((ct = le ? vi(le) : window), e)) {
          case 'focusin':
            (oh(ct) || ct.contentEditable === 'true') && ((ta = ct), (ac = le), (Fa = null));
            break;
          case 'focusout':
            Fa = ac = ta = null;
            break;
          case 'mousedown':
            uc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (uc = !1), xh(Te, r, Ee);
            break;
          case 'selectionchange':
            if (gg) break;
          case 'keydown':
          case 'keyup':
            xh(Te, r, Ee);
        }
        var Qe;
        if (tc)
          e: {
            switch (e) {
              case 'compositionstart':
                var et = 'onCompositionStart';
                break e;
              case 'compositionend':
                et = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                et = 'onCompositionUpdate';
                break e;
            }
            et = void 0;
          }
        else
          ea
            ? ch(e, r) && (et = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (et = 'onCompositionStart');
        et &&
          (uh &&
            r.locale !== 'ko' &&
            (ea || et !== 'onCompositionStart'
              ? et === 'onCompositionEnd' && ea && (Qe = th())
              : ((Fn = Ee), (Ks = 'value' in Fn ? Fn.value : Fn.textContent), (ea = !0))),
          (ct = Vl(le, et)),
          0 < ct.length &&
            ((et = new ih(et, e, null, r, Ee)),
            Te.push({ event: et, listeners: ct }),
            Qe ? (et.data = Qe) : ((Qe = fh(r)), Qe !== null && (et.data = Qe)))),
          (Qe = ug ? lg(e, r) : sg(e, r)) &&
            ((et = Vl(le, 'onBeforeInput')),
            0 < et.length &&
              ((ct = new ih('onBeforeInput', 'beforeinput', null, r, Ee)),
              Te.push({ event: ct, listeners: et }),
              (ct.data = Qe))),
          Pg(Te, e, le, r, Ee);
      }
      k0(Te, t);
    });
  }
  function gu(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Vl(e, t) {
    for (var r = t + 'Capture', i = []; e !== null; ) {
      var l = e,
        f = l.stateNode;
      (l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          f === null ||
          ((l = Ca(e, r)), l != null && i.unshift(gu(e, l, f)), (l = Ca(e, t)), l != null && i.push(gu(e, l, f))),
        (e = e.return);
    }
    return i;
  }
  function _a(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function L0(e, t, r, i, l) {
    for (var f = t._reactName, g = []; r !== null && r !== i; ) {
      var B = r,
        $ = B.alternate,
        le = B.stateNode;
      if (((B = B.tag), $ !== null && $ === i)) break;
      (B !== 5 && B !== 26 && B !== 27) ||
        le === null ||
        (($ = le),
        l
          ? ((le = Ca(r, f)), le != null && g.unshift(gu(r, le, $)))
          : l || ((le = Ca(r, f)), le != null && g.push(gu(r, le, $)))),
        (r = r.return);
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var n1 = /\r\n?/g,
    i1 = /\u0000|\uFFFD/g;
  function H0(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        n1,
        `
`
      )
      .replace(i1, '');
  }
  function G0(e, t) {
    return (t = H0(t)), H0(e) === t;
  }
  function Yl() {}
  function _t(e, t, r, i, l, f) {
    switch (r) {
      case 'children':
        typeof i == 'string'
          ? t === 'body' || (t === 'textarea' && i === '') || Ji(e, i)
          : (typeof i == 'number' || typeof i == 'bigint') && t !== 'body' && Ji(e, '' + i);
        break;
      case 'className':
        Pu(e, 'class', i);
        break;
      case 'tabIndex':
        Pu(e, 'tabindex', i);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Pu(e, r, i);
        break;
      case 'style':
        Wo(e, i, f);
        break;
      case 'data':
        if (t !== 'object') {
          Pu(e, 'data', i);
          break;
        }
      case 'src':
      case 'href':
        if (i === '' && (t !== 'a' || r !== 'href')) {
          e.removeAttribute(r);
          break;
        }
        if (i == null || typeof i == 'function' || typeof i == 'symbol' || typeof i == 'boolean') {
          e.removeAttribute(r);
          break;
        }
        (i = rl('' + i)), e.setAttribute(r, i);
        break;
      case 'action':
      case 'formAction':
        if (typeof i == 'function') {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == 'function' &&
            (r === 'formAction'
              ? (t !== 'input' && _t(e, t, 'name', l.name, l, null),
                _t(e, t, 'formEncType', l.formEncType, l, null),
                _t(e, t, 'formMethod', l.formMethod, l, null),
                _t(e, t, 'formTarget', l.formTarget, l, null))
              : (_t(e, t, 'encType', l.encType, l, null),
                _t(e, t, 'method', l.method, l, null),
                _t(e, t, 'target', l.target, l, null)));
        if (i == null || typeof i == 'symbol' || typeof i == 'boolean') {
          e.removeAttribute(r);
          break;
        }
        (i = rl('' + i)), e.setAttribute(r, i);
        break;
      case 'onClick':
        i != null && (e.onclick = Yl);
        break;
      case 'onScroll':
        i != null && pt('scroll', e);
        break;
      case 'onScrollEnd':
        i != null && pt('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (i != null) {
          if (typeof i != 'object' || !('__html' in i)) throw Error(s(61));
          if (((r = i.__html), r != null)) {
            if (l.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case 'multiple':
        e.multiple = i && typeof i != 'function' && typeof i != 'symbol';
        break;
      case 'muted':
        e.muted = i && typeof i != 'function' && typeof i != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (i == null || typeof i == 'function' || typeof i == 'boolean' || typeof i == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (r = rl('' + i)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', r);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        i != null && typeof i != 'function' && typeof i != 'symbol' ? e.setAttribute(r, '' + i) : e.removeAttribute(r);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        i && typeof i != 'function' && typeof i != 'symbol' ? e.setAttribute(r, '') : e.removeAttribute(r);
        break;
      case 'capture':
      case 'download':
        i === !0
          ? e.setAttribute(r, '')
          : i !== !1 && i != null && typeof i != 'function' && typeof i != 'symbol'
            ? e.setAttribute(r, i)
            : e.removeAttribute(r);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        i != null && typeof i != 'function' && typeof i != 'symbol' && !isNaN(i) && 1 <= i
          ? e.setAttribute(r, i)
          : e.removeAttribute(r);
        break;
      case 'rowSpan':
      case 'start':
        i == null || typeof i == 'function' || typeof i == 'symbol' || isNaN(i)
          ? e.removeAttribute(r)
          : e.setAttribute(r, i);
        break;
      case 'popover':
        pt('beforetoggle', e), pt('toggle', e), Wu(e, 'popover', i);
        break;
      case 'xlinkActuate':
        vn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', i);
        break;
      case 'xlinkArcrole':
        vn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', i);
        break;
      case 'xlinkRole':
        vn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', i);
        break;
      case 'xlinkShow':
        vn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', i);
        break;
      case 'xlinkTitle':
        vn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', i);
        break;
      case 'xlinkType':
        vn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', i);
        break;
      case 'xmlBase':
        vn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', i);
        break;
      case 'xmlLang':
        vn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', i);
        break;
      case 'xmlSpace':
        vn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', i);
        break;
      case 'is':
        Wu(e, 'is', i);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < r.length) || (r[0] !== 'o' && r[0] !== 'O') || (r[1] !== 'n' && r[1] !== 'N')) &&
          ((r = Ry.get(r) || r), Wu(e, r, i));
    }
  }
  function Bf(e, t, r, i, l, f) {
    switch (r) {
      case 'style':
        Wo(e, i, f);
        break;
      case 'dangerouslySetInnerHTML':
        if (i != null) {
          if (typeof i != 'object' || !('__html' in i)) throw Error(s(61));
          if (((r = i.__html), r != null)) {
            if (l.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case 'children':
        typeof i == 'string' ? Ji(e, i) : (typeof i == 'number' || typeof i == 'bigint') && Ji(e, '' + i);
        break;
      case 'onScroll':
        i != null && pt('scroll', e);
        break;
      case 'onScrollEnd':
        i != null && pt('scrollend', e);
        break;
      case 'onClick':
        i != null && (e.onclick = Yl);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!ut.hasOwnProperty(r))
          e: {
            if (
              r[0] === 'o' &&
              r[1] === 'n' &&
              ((l = r.endsWith('Capture')),
              (t = r.slice(2, l ? r.length - 7 : void 0)),
              (f = e[ir] || null),
              (f = f != null ? f[r] : null),
              typeof f == 'function' && e.removeEventListener(t, f, l),
              typeof i == 'function')
            ) {
              typeof f != 'function' &&
                f !== null &&
                (r in e ? (e[r] = null) : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(t, i, l);
              break e;
            }
            r in e ? (e[r] = i) : i === !0 ? e.setAttribute(r, '') : Wu(e, r, i);
          }
    }
  }
  function rr(e, t, r) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        pt('error', e), pt('load', e);
        var i = !1,
          l = !1,
          f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var g = r[f];
            if (g != null)
              switch (f) {
                case 'src':
                  i = !0;
                  break;
                case 'srcSet':
                  l = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, t));
                default:
                  _t(e, t, f, g, r, null);
              }
          }
        l && _t(e, t, 'srcSet', r.srcSet, r, null), i && _t(e, t, 'src', r.src, r, null);
        return;
      case 'input':
        pt('invalid', e);
        var B = (f = g = l = null),
          $ = null,
          le = null;
        for (i in r)
          if (r.hasOwnProperty(i)) {
            var Ee = r[i];
            if (Ee != null)
              switch (i) {
                case 'name':
                  l = Ee;
                  break;
                case 'type':
                  g = Ee;
                  break;
                case 'checked':
                  $ = Ee;
                  break;
                case 'defaultChecked':
                  le = Ee;
                  break;
                case 'value':
                  f = Ee;
                  break;
                case 'defaultValue':
                  B = Ee;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (Ee != null) throw Error(s(137, t));
                  break;
                default:
                  _t(e, t, i, Ee, r, null);
              }
          }
        Zo(e, f, B, $, le, g, l, !1), el(e);
        return;
      case 'select':
        pt('invalid', e), (i = g = f = null);
        for (l in r)
          if (r.hasOwnProperty(l) && ((B = r[l]), B != null))
            switch (l) {
              case 'value':
                f = B;
                break;
              case 'defaultValue':
                g = B;
                break;
              case 'multiple':
                i = B;
              default:
                _t(e, t, l, B, r, null);
            }
        (t = f), (r = g), (e.multiple = !!i), t != null ? Ki(e, !!i, t, !1) : r != null && Ki(e, !!i, r, !0);
        return;
      case 'textarea':
        pt('invalid', e), (f = l = i = null);
        for (g in r)
          if (r.hasOwnProperty(g) && ((B = r[g]), B != null))
            switch (g) {
              case 'value':
                i = B;
                break;
              case 'defaultValue':
                l = B;
                break;
              case 'children':
                f = B;
                break;
              case 'dangerouslySetInnerHTML':
                if (B != null) throw Error(s(91));
                break;
              default:
                _t(e, t, g, B, r, null);
            }
        Ko(e, i, l, f), el(e);
        return;
      case 'option':
        for ($ in r)
          if (r.hasOwnProperty($) && ((i = r[$]), i != null))
            switch ($) {
              case 'selected':
                e.selected = i && typeof i != 'function' && typeof i != 'symbol';
                break;
              default:
                _t(e, t, $, i, r, null);
            }
        return;
      case 'dialog':
        pt('cancel', e), pt('close', e);
        break;
      case 'iframe':
      case 'object':
        pt('load', e);
        break;
      case 'video':
      case 'audio':
        for (i = 0; i < yu.length; i++) pt(yu[i], e);
        break;
      case 'image':
        pt('error', e), pt('load', e);
        break;
      case 'details':
        pt('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        pt('error', e), pt('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (le in r)
          if (r.hasOwnProperty(le) && ((i = r[le]), i != null))
            switch (le) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, t));
              default:
                _t(e, t, le, i, r, null);
            }
        return;
      default:
        if (Ys(t)) {
          for (Ee in r) r.hasOwnProperty(Ee) && ((i = r[Ee]), i !== void 0 && Bf(e, t, Ee, i, r, void 0));
          return;
        }
    }
    for (B in r) r.hasOwnProperty(B) && ((i = r[B]), i != null && _t(e, t, B, i, r, null));
  }
  function a1(e, t, r, i) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var l = null,
          f = null,
          g = null,
          B = null,
          $ = null,
          le = null,
          Ee = null;
        for (Se in r) {
          var Te = r[Se];
          if (r.hasOwnProperty(Se) && Te != null)
            switch (Se) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                $ = Te;
              default:
                i.hasOwnProperty(Se) || _t(e, t, Se, null, i, Te);
            }
        }
        for (var pe in i) {
          var Se = i[pe];
          if (((Te = r[pe]), i.hasOwnProperty(pe) && (Se != null || Te != null)))
            switch (pe) {
              case 'type':
                f = Se;
                break;
              case 'name':
                l = Se;
                break;
              case 'checked':
                le = Se;
                break;
              case 'defaultChecked':
                Ee = Se;
                break;
              case 'value':
                g = Se;
                break;
              case 'defaultValue':
                B = Se;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Se != null) throw Error(s(137, t));
                break;
              default:
                Se !== Te && _t(e, t, pe, Se, i, Te);
            }
        }
        Fs(e, g, B, $, le, Ee, f, l);
        return;
      case 'select':
        Se = g = B = pe = null;
        for (f in r)
          if ((($ = r[f]), r.hasOwnProperty(f) && $ != null))
            switch (f) {
              case 'value':
                break;
              case 'multiple':
                Se = $;
              default:
                i.hasOwnProperty(f) || _t(e, t, f, null, i, $);
            }
        for (l in i)
          if (((f = i[l]), ($ = r[l]), i.hasOwnProperty(l) && (f != null || $ != null)))
            switch (l) {
              case 'value':
                pe = f;
                break;
              case 'defaultValue':
                B = f;
                break;
              case 'multiple':
                g = f;
              default:
                f !== $ && _t(e, t, l, f, i, $);
            }
        (t = B),
          (r = g),
          (i = Se),
          pe != null ? Ki(e, !!r, pe, !1) : !!i != !!r && (t != null ? Ki(e, !!r, t, !0) : Ki(e, !!r, r ? [] : '', !1));
        return;
      case 'textarea':
        Se = pe = null;
        for (B in r)
          if (((l = r[B]), r.hasOwnProperty(B) && l != null && !i.hasOwnProperty(B)))
            switch (B) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                _t(e, t, B, null, i, l);
            }
        for (g in i)
          if (((l = i[g]), (f = r[g]), i.hasOwnProperty(g) && (l != null || f != null)))
            switch (g) {
              case 'value':
                pe = l;
                break;
              case 'defaultValue':
                Se = l;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (l != null) throw Error(s(91));
                break;
              default:
                l !== f && _t(e, t, g, l, i, f);
            }
        Qo(e, pe, Se);
        return;
      case 'option':
        for (var Ze in r)
          if (((pe = r[Ze]), r.hasOwnProperty(Ze) && pe != null && !i.hasOwnProperty(Ze)))
            switch (Ze) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                _t(e, t, Ze, null, i, pe);
            }
        for ($ in i)
          if (((pe = i[$]), (Se = r[$]), i.hasOwnProperty($) && pe !== Se && (pe != null || Se != null)))
            switch ($) {
              case 'selected':
                e.selected = pe && typeof pe != 'function' && typeof pe != 'symbol';
                break;
              default:
                _t(e, t, $, pe, i, Se);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var rt in r)
          (pe = r[rt]), r.hasOwnProperty(rt) && pe != null && !i.hasOwnProperty(rt) && _t(e, t, rt, null, i, pe);
        for (le in i)
          if (((pe = i[le]), (Se = r[le]), i.hasOwnProperty(le) && pe !== Se && (pe != null || Se != null)))
            switch (le) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (pe != null) throw Error(s(137, t));
                break;
              default:
                _t(e, t, le, pe, i, Se);
            }
        return;
      default:
        if (Ys(t)) {
          for (var qt in r)
            (pe = r[qt]), r.hasOwnProperty(qt) && pe !== void 0 && !i.hasOwnProperty(qt) && Bf(e, t, qt, void 0, i, pe);
          for (Ee in i)
            (pe = i[Ee]),
              (Se = r[Ee]),
              !i.hasOwnProperty(Ee) || pe === Se || (pe === void 0 && Se === void 0) || Bf(e, t, Ee, pe, i, Se);
          return;
        }
    }
    for (var fe in r)
      (pe = r[fe]), r.hasOwnProperty(fe) && pe != null && !i.hasOwnProperty(fe) && _t(e, t, fe, null, i, pe);
    for (Te in i)
      (pe = i[Te]),
        (Se = r[Te]),
        !i.hasOwnProperty(Te) || pe === Se || (pe == null && Se == null) || _t(e, t, Te, pe, i, Se);
  }
  var Uf = null,
    Df = null;
  function $l(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function F0(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function V0(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Rf(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var jf = null;
  function u1() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === jf ? !1 : ((jf = e), !0)) : ((jf = null), !1);
  }
  var Y0 = typeof setTimeout == 'function' ? setTimeout : void 0,
    l1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    $0 = typeof Promise == 'function' ? Promise : void 0,
    s1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof $0 < 'u'
          ? function (e) {
              return $0.resolve(null).then(e).catch(c1);
            }
          : Y0;
  function c1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Cf(e, t) {
    var r = t,
      i = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === '/$')) {
          if (i === 0) {
            e.removeChild(l), wu(t);
            return;
          }
          i--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || i++;
      r = l;
    } while (r);
    wu(t);
  }
  function qf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (((t = t.nextSibling), r.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          qf(r), ja(r);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (r.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(r);
    }
  }
  function f1(e, t, r, i) {
    for (; e.nodeType === 1; ) {
      var l = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (i) {
        if (!e[gi])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (((f = e.getAttribute('rel')), f === 'stylesheet' && e.hasAttribute('data-precedence'))) break;
              if (
                f !== l.rel ||
                e.getAttribute('href') !== (l.href == null ? null : l.href) ||
                e.getAttribute('crossorigin') !== (l.crossOrigin == null ? null : l.crossOrigin) ||
                e.getAttribute('title') !== (l.title == null ? null : l.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((f = e.getAttribute('src')),
                (f !== (l.src == null ? null : l.src) ||
                  e.getAttribute('type') !== (l.type == null ? null : l.type) ||
                  e.getAttribute('crossorigin') !== (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  f &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var f = l.name == null ? null : '' + l.name;
        if (l.type === 'hidden' && e.getAttribute('name') === f) return e;
      } else return e;
      if (((e = tn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function o1(e, t, r) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !r) ||
        ((e = tn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function X0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Z0(e, t, r) {
    switch (((t = $l(r)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var Xr = new Map(),
    Q0 = new Set();
  function Xl(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
  }
  var Rn = w.d;
  w.d = { f: h1, r: d1, D: m1, C: p1, L: y1, m: g1, X: b1, S: v1, M: S1 };
  function h1() {
    var e = Rn.f(),
      t = Il();
    return e || t;
  }
  function d1(e) {
    var t = Gn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? xd(t) : Rn.r(e);
  }
  var Aa = typeof document > 'u' ? null : document;
  function K0(e, t, r) {
    var i = Aa;
    if (i && typeof t == 'string' && t) {
      var l = zr(t);
      (l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof r == 'string' && (l += '[crossorigin="' + r + '"]'),
        Q0.has(l) ||
          (Q0.add(l),
          (e = { rel: e, crossOrigin: r, href: t }),
          i.querySelector(l) === null &&
            ((t = i.createElement('link')), rr(t, 'link', e), Je(t), i.head.appendChild(t)));
    }
  }
  function m1(e) {
    Rn.D(e), K0('dns-prefetch', e, null);
  }
  function p1(e, t) {
    Rn.C(e, t), K0('preconnect', e, t);
  }
  function y1(e, t, r) {
    Rn.L(e, t, r);
    var i = Aa;
    if (i && e && t) {
      var l = 'link[rel="preload"][as="' + zr(t) + '"]';
      t === 'image' && r && r.imageSrcSet
        ? ((l += '[imagesrcset="' + zr(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == 'string' && (l += '[imagesizes="' + zr(r.imageSizes) + '"]'))
        : (l += '[href="' + zr(e) + '"]');
      var f = l;
      switch (t) {
        case 'style':
          f = wa(e);
          break;
        case 'script':
          f = Oa(e);
      }
      Xr.has(f) ||
        ((e = A({ rel: 'preload', href: t === 'image' && r && r.imageSrcSet ? void 0 : e, as: t }, r)),
        Xr.set(f, e),
        i.querySelector(l) !== null ||
          (t === 'style' && i.querySelector(vu(f))) ||
          (t === 'script' && i.querySelector(bu(f))) ||
          ((t = i.createElement('link')), rr(t, 'link', e), Je(t), i.head.appendChild(t)));
    }
  }
  function g1(e, t) {
    Rn.m(e, t);
    var r = Aa;
    if (r && e) {
      var i = t && typeof t.as == 'string' ? t.as : 'script',
        l = 'link[rel="modulepreload"][as="' + zr(i) + '"][href="' + zr(e) + '"]',
        f = l;
      switch (i) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          f = Oa(e);
      }
      if (!Xr.has(f) && ((e = A({ rel: 'modulepreload', href: e }, t)), Xr.set(f, e), r.querySelector(l) === null)) {
        switch (i) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (r.querySelector(bu(f))) return;
        }
        (i = r.createElement('link')), rr(i, 'link', e), Je(i), r.head.appendChild(i);
      }
    }
  }
  function v1(e, t, r) {
    Rn.S(e, t, r);
    var i = Aa;
    if (i && e) {
      var l = K(i).hoistableStyles,
        f = wa(e);
      t = t || 'default';
      var g = l.get(f);
      if (!g) {
        var B = { loading: 0, preload: null };
        if ((g = i.querySelector(vu(f)))) B.loading = 5;
        else {
          (e = A({ rel: 'stylesheet', href: e, 'data-precedence': t }, r)), (r = Xr.get(f)) && zf(e, r);
          var $ = (g = i.createElement('link'));
          Je($),
            rr($, 'link', e),
            ($._p = new Promise(function (le, Ee) {
              ($.onload = le), ($.onerror = Ee);
            })),
            $.addEventListener('load', function () {
              B.loading |= 1;
            }),
            $.addEventListener('error', function () {
              B.loading |= 2;
            }),
            (B.loading |= 4),
            Zl(g, t, i);
        }
        (g = { type: 'stylesheet', instance: g, count: 1, state: B }), l.set(f, g);
      }
    }
  }
  function b1(e, t) {
    Rn.X(e, t);
    var r = Aa;
    if (r && e) {
      var i = K(r).hoistableScripts,
        l = Oa(e),
        f = i.get(l);
      f ||
        ((f = r.querySelector(bu(l))),
        f ||
          ((e = A({ src: e, async: !0 }, t)),
          (t = Xr.get(l)) && kf(e, t),
          (f = r.createElement('script')),
          Je(f),
          rr(f, 'link', e),
          r.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        i.set(l, f));
    }
  }
  function S1(e, t) {
    Rn.M(e, t);
    var r = Aa;
    if (r && e) {
      var i = K(r).hoistableScripts,
        l = Oa(e),
        f = i.get(l);
      f ||
        ((f = r.querySelector(bu(l))),
        f ||
          ((e = A({ src: e, async: !0, type: 'module' }, t)),
          (t = Xr.get(l)) && kf(e, t),
          (f = r.createElement('script')),
          Je(f),
          rr(f, 'link', e),
          r.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        i.set(l, f));
    }
  }
  function J0(e, t, r, i) {
    var l = (l = ie.current) ? Xl(l) : null;
    if (!l) throw Error(s(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof r.precedence == 'string' && typeof r.href == 'string'
          ? ((t = wa(r.href)),
            (r = K(l).hoistableStyles),
            (i = r.get(t)),
            i || ((i = { type: 'style', instance: null, count: 0, state: null }), r.set(t, i)),
            i)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (r.rel === 'stylesheet' && typeof r.href == 'string' && typeof r.precedence == 'string') {
          e = wa(r.href);
          var f = K(l).hoistableStyles,
            g = f.get(e);
          if (
            (g ||
              ((l = l.ownerDocument || l),
              (g = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              f.set(e, g),
              (f = l.querySelector(vu(e))) && !f._p && ((g.instance = f), (g.state.loading = 5)),
              Xr.has(e) ||
                ((r = {
                  rel: 'preload',
                  as: 'style',
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy
                }),
                Xr.set(e, r),
                f || E1(l, e, r, g.state))),
            t && i === null)
          )
            throw Error(s(528, ''));
          return g;
        }
        if (t && i !== null) throw Error(s(529, ''));
        return null;
      case 'script':
        return (
          (t = r.async),
          (r = r.src),
          typeof r == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Oa(r)),
              (r = K(l).hoistableScripts),
              (i = r.get(t)),
              i || ((i = { type: 'script', instance: null, count: 0, state: null }), r.set(t, i)),
              i)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function wa(e) {
    return 'href="' + zr(e) + '"';
  }
  function vu(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function W0(e) {
    return A({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function E1(e, t, r, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (i.loading = 1)
      : ((t = e.createElement('link')),
        (i.preload = t),
        t.addEventListener('load', function () {
          return (i.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (i.loading |= 2);
        }),
        rr(t, 'link', r),
        Je(t),
        e.head.appendChild(t));
  }
  function Oa(e) {
    return '[src="' + zr(e) + '"]';
  }
  function bu(e) {
    return 'script[async]' + e;
  }
  function P0(e, t, r) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var i = e.querySelector('style[data-href~="' + zr(r.href) + '"]');
          if (i) return (t.instance = i), Je(i), i;
          var l = A({}, r, { 'data-href': r.href, 'data-precedence': r.precedence, href: null, precedence: null });
          return (
            (i = (e.ownerDocument || e).createElement('style')),
            Je(i),
            rr(i, 'style', l),
            Zl(i, r.precedence, e),
            (t.instance = i)
          );
        case 'stylesheet':
          l = wa(r.href);
          var f = e.querySelector(vu(l));
          if (f) return (t.state.loading |= 4), (t.instance = f), Je(f), f;
          (i = W0(r)), (l = Xr.get(l)) && zf(i, l), (f = (e.ownerDocument || e).createElement('link')), Je(f);
          var g = f;
          return (
            (g._p = new Promise(function (B, $) {
              (g.onload = B), (g.onerror = $);
            })),
            rr(f, 'link', i),
            (t.state.loading |= 4),
            Zl(f, r.precedence, e),
            (t.instance = f)
          );
        case 'script':
          return (
            (f = Oa(r.src)),
            (l = e.querySelector(bu(f)))
              ? ((t.instance = l), Je(l), l)
              : ((i = r),
                (l = Xr.get(f)) && ((i = A({}, r)), kf(i, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement('script')),
                Je(l),
                rr(l, 'link', i),
                e.head.appendChild(l),
                (t.instance = l))
          );
        case 'void':
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        !(t.state.loading & 4) &&
        ((i = t.instance), (t.state.loading |= 4), Zl(i, r.precedence, e));
    return t.instance;
  }
  function Zl(e, t, r) {
    for (
      var i = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        l = i.length ? i[i.length - 1] : null,
        f = l,
        g = 0;
      g < i.length;
      g++
    ) {
      var B = i[g];
      if (B.dataset.precedence === t) f = B;
      else if (f !== l) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = r.nodeType === 9 ? r.head : r), t.insertBefore(e, t.firstChild));
  }
  function zf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function kf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Ql = null;
  function em(e, t, r) {
    if (Ql === null) {
      var i = new Map(),
        l = (Ql = new Map());
      l.set(r, i);
    } else (l = Ql), (i = l.get(r)), i || ((i = new Map()), l.set(r, i));
    if (i.has(e)) return i;
    for (i.set(e, null), r = r.getElementsByTagName(e), l = 0; l < r.length; l++) {
      var f = r[l];
      if (
        !(f[gi] || f[ft] || (e === 'link' && f.getAttribute('rel') === 'stylesheet')) &&
        f.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var g = f.getAttribute(t) || '';
        g = e + g;
        var B = i.get(g);
        B ? B.push(f) : i.set(g, [f]);
      }
    }
    return i;
  }
  function tm(e, t, r) {
    (e = e.ownerDocument || e), e.head.insertBefore(r, t === 'title' ? e.querySelector('head > title') : null);
  }
  function x1(e, t, r) {
    if (r === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (typeof t.rel != 'string' || typeof t.href != 'string' || t.href === '' || t.onLoad || t.onError) break;
        switch (t.rel) {
          case 'stylesheet':
            return (e = t.disabled), typeof t.precedence == 'string' && e == null;
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function rm(e) {
    return !(e.type === 'stylesheet' && !(e.state.loading & 3));
  }
  var Su = null;
  function _1() {}
  function A1(e, t, r) {
    if (Su === null) throw Error(s(475));
    var i = Su;
    if (
      t.type === 'stylesheet' &&
      (typeof r.media != 'string' || matchMedia(r.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var l = wa(r.href),
          f = e.querySelector(vu(l));
        if (f) {
          (e = f._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (i.count++, (i = Kl.bind(i)), e.then(i, i)),
            (t.state.loading |= 4),
            (t.instance = f),
            Je(f);
          return;
        }
        (f = e.ownerDocument || e), (r = W0(r)), (l = Xr.get(l)) && zf(r, l), (f = f.createElement('link')), Je(f);
        var g = f;
        (g._p = new Promise(function (B, $) {
          (g.onload = B), (g.onerror = $);
        })),
          rr(f, 'link', r),
          (t.instance = f);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (i.count++, (t = Kl.bind(i)), e.addEventListener('load', t), e.addEventListener('error', t));
    }
  }
  function w1() {
    if (Su === null) throw Error(s(475));
    var e = Su;
    return (
      e.stylesheets && e.count === 0 && If(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var r = setTimeout(function () {
              if ((e.stylesheets && If(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                (e.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(r);
              }
            );
          }
        : null
    );
  }
  function Kl() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) If(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Jl = null;
  function If(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null && (e.count++, (Jl = new Map()), t.forEach(O1, e), (Jl = null), Kl.call(e));
  }
  function O1(e, t) {
    if (!(t.state.loading & 4)) {
      var r = Jl.get(e);
      if (r) var i = r.get(null);
      else {
        (r = new Map()), Jl.set(e, r);
        for (var l = e.querySelectorAll('link[data-precedence],style[data-precedence]'), f = 0; f < l.length; f++) {
          var g = l[f];
          (g.nodeName === 'LINK' || g.getAttribute('media') !== 'not all') && (r.set(g.dataset.precedence, g), (i = g));
        }
        i && r.set(null, i);
      }
      (l = t.instance),
        (g = l.getAttribute('data-precedence')),
        (f = r.get(g) || i),
        f === i && r.set(null, l),
        r.set(g, l),
        this.count++,
        (i = Kl.bind(this)),
        l.addEventListener('load', i),
        l.addEventListener('error', i),
        f
          ? f.parentNode.insertBefore(l, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Eu = { $$typeof: N, Provider: null, Consumer: null, _currentValue: Ue, _currentValue2: Ue, _threadCount: 0 };
  function N1(e, t, r, i, l, f, g, B) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Qi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Qi(0)),
      (this.hiddenUpdates = Qi(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = l),
      (this.onCaughtError = f),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = B),
      (this.incompleteTransitions = new Map());
  }
  function nm(e, t, r, i, l, f, g, B, $, le, Ee, Te) {
    return (
      (e = new N1(e, t, r, g, B, $, le, Te)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = Yr(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = yc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: i, isDehydrated: r, cache: t }),
      Kc(f),
      e
    );
  }
  function im(e) {
    return e ? ((e = ia), e) : ia;
  }
  function am(e, t, r, i, l, f) {
    (l = im(l)),
      i.context === null ? (i.context = l) : (i.pendingContext = l),
      (i = Jn(t)),
      (i.payload = { element: r }),
      (f = f === void 0 ? null : f),
      f !== null && (i.callback = f),
      (r = Wn(e, i, t)),
      r !== null && (hr(r, e, t), iu(r, e, t));
  }
  function um(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Lf(e, t) {
    um(e, t), (e = e.alternate) && um(e, t);
  }
  function lm(e) {
    if (e.tag === 13) {
      var t = Vn(e, 67108864);
      t !== null && hr(t, e, 67108864), Lf(e, 67108864);
    }
  }
  var Wl = !0;
  function T1(e, t, r, i) {
    var l = _.T;
    _.T = null;
    var f = w.p;
    try {
      (w.p = 2), Hf(e, t, r, i);
    } finally {
      (w.p = f), (_.T = l);
    }
  }
  function M1(e, t, r, i) {
    var l = _.T;
    _.T = null;
    var f = w.p;
    try {
      (w.p = 8), Hf(e, t, r, i);
    } finally {
      (w.p = f), (_.T = l);
    }
  }
  function Hf(e, t, r, i) {
    if (Wl) {
      var l = Gf(i);
      if (l === null) Mf(e, t, i, Pl, r), cm(e, i);
      else if (U1(l, e, t, r, i)) i.stopPropagation();
      else if ((cm(e, i), t & 4 && -1 < B1.indexOf(e))) {
        for (; l !== null; ) {
          var f = Gn(l);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var g = He(f.pendingLanes);
                  if (g !== 0) {
                    var B = f;
                    for (B.pendingLanes |= 2, B.entangledLanes |= 2; g; ) {
                      var $ = 1 << (31 - Ce(g));
                      (B.entanglements[1] |= $), (g &= ~$);
                    }
                    hn(f), !(Dt & 6) && ((ql = Me() + 500), pu(0));
                  }
                }
                break;
              case 13:
                (B = Vn(f, 2)), B !== null && hr(B, f, 2), Il(), Lf(f, 2);
            }
          if (((f = Gf(i)), f === null && Mf(e, t, i, Pl, r), f === l)) break;
          l = f;
        }
        l !== null && i.stopPropagation();
      } else Mf(e, t, i, null, r);
    }
  }
  function Gf(e) {
    return (e = Xs(e)), Ff(e);
  }
  var Pl = null;
  function Ff(e) {
    if (((Pl = null), (e = mt(e)), e !== null)) {
      var t = k(e);
      if (t === null) e = null;
      else {
        var r = t.tag;
        if (r === 13) {
          if (((e = ue(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Pl = e), null;
  }
  function sm(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (ze()) {
          case tt:
            return 2;
          case b:
            return 8;
          case d:
          case p:
            return 32;
          case L:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vf = !1,
    ai = null,
    ui = null,
    li = null,
    xu = new Map(),
    _u = new Map(),
    si = [],
    B1 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function cm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        ai = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ui = null;
        break;
      case 'mouseover':
      case 'mouseout':
        li = null;
        break;
      case 'pointerover':
      case 'pointerout':
        xu.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        _u.delete(t.pointerId);
    }
  }
  function Au(e, t, r, i, l, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = { blockedOn: t, domEventName: r, eventSystemFlags: i, nativeEvent: f, targetContainers: [l] }),
        t !== null && ((t = Gn(t)), t !== null && lm(t)),
        e)
      : ((e.eventSystemFlags |= i), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function U1(e, t, r, i, l) {
    switch (t) {
      case 'focusin':
        return (ai = Au(ai, e, t, r, i, l)), !0;
      case 'dragenter':
        return (ui = Au(ui, e, t, r, i, l)), !0;
      case 'mouseover':
        return (li = Au(li, e, t, r, i, l)), !0;
      case 'pointerover':
        var f = l.pointerId;
        return xu.set(f, Au(xu.get(f) || null, e, t, r, i, l)), !0;
      case 'gotpointercapture':
        return (f = l.pointerId), _u.set(f, Au(_u.get(f) || null, e, t, r, i, l)), !0;
    }
    return !1;
  }
  function fm(e) {
    var t = mt(e.target);
    if (t !== null) {
      var r = k(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = ue(r)), t !== null)) {
            (e.blockedOn = t),
              Ls(e.priority, function () {
                if (r.tag === 13) {
                  var i = Tr(),
                    l = Vn(r, i);
                  l !== null && hr(l, r, i), Lf(r, i);
                }
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function es(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Gf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        ($s = i), r.target.dispatchEvent(i), ($s = null);
      } else return (t = Gn(r)), t !== null && lm(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function om(e, t, r) {
    es(e) && r.delete(t);
  }
  function D1() {
    (Vf = !1),
      ai !== null && es(ai) && (ai = null),
      ui !== null && es(ui) && (ui = null),
      li !== null && es(li) && (li = null),
      xu.forEach(om),
      _u.forEach(om);
  }
  function ts(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), Vf || ((Vf = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, D1)));
  }
  var rs = null;
  function hm(e) {
    rs !== e &&
      ((rs = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        rs === e && (rs = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t],
            i = e[t + 1],
            l = e[t + 2];
          if (typeof i != 'function') {
            if (Ff(i || r) === null) continue;
            break;
          }
          var f = Gn(r);
          f !== null && (e.splice(t, 3), (t -= 3), Dc(f, { pending: !0, data: l, method: r.method, action: i }, i, l));
        }
      }));
  }
  function wu(e) {
    function t($) {
      return ts($, e);
    }
    ai !== null && ts(ai, e), ui !== null && ts(ui, e), li !== null && ts(li, e), xu.forEach(t), _u.forEach(t);
    for (var r = 0; r < si.length; r++) {
      var i = si[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < si.length && ((r = si[0]), r.blockedOn === null); ) fm(r), r.blockedOn === null && si.shift();
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (i = 0; i < r.length; i += 3) {
        var l = r[i],
          f = r[i + 1],
          g = l[ir] || null;
        if (typeof f == 'function') g || hm(r);
        else if (g) {
          var B = null;
          if (f && f.hasAttribute('formAction')) {
            if (((l = f), (g = f[ir] || null))) B = g.formAction;
            else if (Ff(l) !== null) continue;
          } else B = g.action;
          typeof B == 'function' ? (r[i + 1] = B) : (r.splice(i, 3), (i -= 3)), hm(r);
        }
      }
  }
  function Yf(e) {
    this._internalRoot = e;
  }
  (ns.prototype.render = Yf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var r = t.current,
        i = Tr();
      am(r, i, e, t, null, null);
    }),
    (ns.prototype.unmount = Yf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Ea(), am(e.current, 2, null, e, null, null), Il(), (t[Hn] = null);
        }
      });
  function ns(e) {
    this._internalRoot = e;
  }
  ns.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ku();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < si.length && t !== 0 && t < si[r].priority; r++);
      si.splice(r, 0, e), r === 0 && fm(e);
    }
  };
  var dm = a.version;
  if (dm !== '19.0.0') throw Error(s(527, dm, '19.0.0'));
  w.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ? Error(s(188)) : ((e = Object.keys(e).join(',')), Error(s(268, e)));
    return (e = P(t)), (e = e !== null ? be(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var R1 = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: _,
    findFiberByHostInstance: mt,
    reconcilerVersion: '19.0.0'
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!is.isDisabled && is.supportsFiber)
      try {
        (q = is.inject(R1)), (se = is);
      } catch {}
  }
  return (
    (Nu.createRoot = function (e, t) {
      if (!c(e)) throw Error(s(299));
      var r = !1,
        i = '',
        l = Bd,
        f = Ud,
        g = Dd,
        B = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (B = t.unstable_transitionCallbacks)),
        (t = nm(e, 1, !1, null, null, r, i, l, f, g, B, null)),
        (e[Hn] = t.current),
        Tf(e.nodeType === 8 ? e.parentNode : e),
        new Yf(t)
      );
    }),
    (Nu.hydrateRoot = function (e, t, r) {
      if (!c(e)) throw Error(s(299));
      var i = !1,
        l = '',
        f = Bd,
        g = Ud,
        B = Dd,
        $ = null,
        le = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (i = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (g = r.onCaughtError),
          r.onRecoverableError !== void 0 && (B = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 && ($ = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (le = r.formState)),
        (t = nm(e, 1, !0, t, r ?? null, i, l, f, g, B, $, le)),
        (t.context = im(null)),
        (r = t.current),
        (i = Tr()),
        (l = Jn(i)),
        (l.callback = null),
        Wn(r, l, i),
        (t.current.lanes = i),
        Ot(t, i),
        hn(t),
        (e[Hn] = t.current),
        Tf(e),
        new ns(t)
      );
    }),
    (Nu.version = '19.0.0'),
    Nu
  );
}
var Am;
function Y1() {
  if (Am) return Zf.exports;
  Am = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (Zf.exports = V1()), Zf.exports;
}
var $1 = Y1();
const X1 = Iu($1);
var Z1 = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Wf = Math.ceil,
  Qr = Math.floor,
  br = '[BigNumber Error] ',
  wm = br + 'Number primitive has more than 15 significant digits: ',
  rn = 1e14,
  it = 14,
  Om = 9007199254740991,
  Pf = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  fi = 1e7,
  Mr = 1e9;
function Np(n) {
  var a,
    u,
    s,
    c = (Q.prototype = { constructor: Q, toString: null, valueOf: null }),
    m = new Q(1),
    h = 20,
    o = 4,
    S = -7,
    E = 21,
    U = -1e7,
    v = 1e7,
    x = !1,
    N = 1,
    te = 0,
    he = {
      prefix: '',
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ',',
      decimalSeparator: '.',
      fractionGroupSize: 0,
      fractionGroupSeparator: ' ',
      suffix: ''
    },
    ge = '0123456789abcdefghijklmnopqrstuvwxyz',
    ve = !0;
  function Q(y, _) {
    var A,
      F,
      V,
      Y,
      X,
      C,
      T,
      G,
      k = this;
    if (!(k instanceof Q)) return new Q(y, _);
    if (_ == null) {
      if (y && y._isBigNumber === !0) {
        (k.s = y.s),
          !y.c || y.e > v ? (k.c = k.e = null) : y.e < U ? (k.c = [(k.e = 0)]) : ((k.e = y.e), (k.c = y.c.slice()));
        return;
      }
      if ((C = typeof y == 'number') && y * 0 == 0) {
        if (((k.s = 1 / y < 0 ? ((y = -y), -1) : 1), y === ~~y)) {
          for (Y = 0, X = y; X >= 10; X /= 10, Y++);
          Y > v ? (k.c = k.e = null) : ((k.e = Y), (k.c = [y]));
          return;
        }
        G = String(y);
      } else {
        if (!Z1.test((G = String(y)))) return s(k, G, C);
        k.s = G.charCodeAt(0) == 45 ? ((G = G.slice(1)), -1) : 1;
      }
      (Y = G.indexOf('.')) > -1 && (G = G.replace('.', '')),
        (X = G.search(/e/i)) > 0
          ? (Y < 0 && (Y = X), (Y += +G.slice(X + 1)), (G = G.substring(0, X)))
          : Y < 0 && (Y = G.length);
    } else {
      if ((Rt(_, 2, ge.length, 'Base'), _ == 10 && ve)) return (k = new Q(y)), Ae(k, h + k.e + 1, o);
      if (((G = String(y)), (C = typeof y == 'number'))) {
        if (y * 0 != 0) return s(k, G, C, _);
        if (((k.s = 1 / y < 0 ? ((G = G.slice(1)), -1) : 1), Q.DEBUG && G.replace(/^0\.0*|\./, '').length > 15))
          throw Error(wm + y);
      } else k.s = G.charCodeAt(0) === 45 ? ((G = G.slice(1)), -1) : 1;
      for (A = ge.slice(0, _), Y = X = 0, T = G.length; X < T; X++)
        if (A.indexOf((F = G.charAt(X))) < 0) {
          if (F == '.') {
            if (X > Y) {
              Y = T;
              continue;
            }
          } else if (
            !V &&
            ((G == G.toUpperCase() && (G = G.toLowerCase())) || (G == G.toLowerCase() && (G = G.toUpperCase())))
          ) {
            (V = !0), (X = -1), (Y = 0);
            continue;
          }
          return s(k, String(y), C, _);
        }
      (C = !1), (G = u(G, _, 10, k.s)), (Y = G.indexOf('.')) > -1 ? (G = G.replace('.', '')) : (Y = G.length);
    }
    for (X = 0; G.charCodeAt(X) === 48; X++);
    for (T = G.length; G.charCodeAt(--T) === 48; );
    if ((G = G.slice(X, ++T))) {
      if (((T -= X), C && Q.DEBUG && T > 15 && (y > Om || y !== Qr(y)))) throw Error(wm + k.s * y);
      if ((Y = Y - X - 1) > v) k.c = k.e = null;
      else if (Y < U) k.c = [(k.e = 0)];
      else {
        if (((k.e = Y), (k.c = []), (X = (Y + 1) % it), Y < 0 && (X += it), X < T)) {
          for (X && k.c.push(+G.slice(0, X)), T -= it; X < T; ) k.c.push(+G.slice(X, (X += it)));
          X = it - (G = G.slice(X)).length;
        } else X -= T;
        for (; X--; G += '0');
        k.c.push(+G);
      }
    } else k.c = [(k.e = 0)];
  }
  (Q.clone = Np),
    (Q.ROUND_UP = 0),
    (Q.ROUND_DOWN = 1),
    (Q.ROUND_CEIL = 2),
    (Q.ROUND_FLOOR = 3),
    (Q.ROUND_HALF_UP = 4),
    (Q.ROUND_HALF_DOWN = 5),
    (Q.ROUND_HALF_EVEN = 6),
    (Q.ROUND_HALF_CEIL = 7),
    (Q.ROUND_HALF_FLOOR = 8),
    (Q.EUCLID = 9),
    (Q.config = Q.set =
      function (y) {
        var _, A;
        if (y != null)
          if (typeof y == 'object') {
            if (
              (y.hasOwnProperty((_ = 'DECIMAL_PLACES')) && ((A = y[_]), Rt(A, 0, Mr, _), (h = A)),
              y.hasOwnProperty((_ = 'ROUNDING_MODE')) && ((A = y[_]), Rt(A, 0, 8, _), (o = A)),
              y.hasOwnProperty((_ = 'EXPONENTIAL_AT')) &&
                ((A = y[_]),
                A && A.pop
                  ? (Rt(A[0], -1e9, 0, _), Rt(A[1], 0, Mr, _), (S = A[0]), (E = A[1]))
                  : (Rt(A, -1e9, Mr, _), (S = -(E = A < 0 ? -A : A)))),
              y.hasOwnProperty((_ = 'RANGE')))
            )
              if (((A = y[_]), A && A.pop)) Rt(A[0], -1e9, -1, _), Rt(A[1], 1, Mr, _), (U = A[0]), (v = A[1]);
              else if ((Rt(A, -1e9, Mr, _), A)) U = -(v = A < 0 ? -A : A);
              else throw Error(br + _ + ' cannot be zero: ' + A);
            if (y.hasOwnProperty((_ = 'CRYPTO')))
              if (((A = y[_]), A === !!A))
                if (A)
                  if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) x = A;
                  else throw ((x = !A), Error(br + 'crypto unavailable'));
                else x = A;
              else throw Error(br + _ + ' not true or false: ' + A);
            if (
              (y.hasOwnProperty((_ = 'MODULO_MODE')) && ((A = y[_]), Rt(A, 0, 9, _), (N = A)),
              y.hasOwnProperty((_ = 'POW_PRECISION')) && ((A = y[_]), Rt(A, 0, Mr, _), (te = A)),
              y.hasOwnProperty((_ = 'FORMAT')))
            )
              if (((A = y[_]), typeof A == 'object')) he = A;
              else throw Error(br + _ + ' not an object: ' + A);
            if (y.hasOwnProperty((_ = 'ALPHABET')))
              if (((A = y[_]), typeof A == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(A)))
                (ve = A.slice(0, 10) == '0123456789'), (ge = A);
              else throw Error(br + _ + ' invalid: ' + A);
          } else throw Error(br + 'Object expected: ' + y);
        return {
          DECIMAL_PLACES: h,
          ROUNDING_MODE: o,
          EXPONENTIAL_AT: [S, E],
          RANGE: [U, v],
          CRYPTO: x,
          MODULO_MODE: N,
          POW_PRECISION: te,
          FORMAT: he,
          ALPHABET: ge
        };
      }),
    (Q.isBigNumber = function (y) {
      if (!y || y._isBigNumber !== !0) return !1;
      if (!Q.DEBUG) return !0;
      var _,
        A,
        F = y.c,
        V = y.e,
        Y = y.s;
      e: if ({}.toString.call(F) == '[object Array]') {
        if ((Y === 1 || Y === -1) && V >= -1e9 && V <= Mr && V === Qr(V)) {
          if (F[0] === 0) {
            if (V === 0 && F.length === 1) return !0;
            break e;
          }
          if (((_ = (V + 1) % it), _ < 1 && (_ += it), String(F[0]).length == _)) {
            for (_ = 0; _ < F.length; _++) if (((A = F[_]), A < 0 || A >= rn || A !== Qr(A))) break e;
            if (A !== 0) return !0;
          }
        }
      } else if (F === null && V === null && (Y === null || Y === 1 || Y === -1)) return !0;
      throw Error(br + 'Invalid BigNumber: ' + y);
    }),
    (Q.maximum = Q.max =
      function () {
        return We(arguments, -1);
      }),
    (Q.minimum = Q.min =
      function () {
        return We(arguments, 1);
      }),
    (Q.random = (function () {
      var y = 9007199254740992,
        _ =
          (Math.random() * y) & 2097151
            ? function () {
                return Qr(Math.random() * y);
              }
            : function () {
                return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
              };
      return function (A) {
        var F,
          V,
          Y,
          X,
          C,
          T = 0,
          G = [],
          k = new Q(m);
        if ((A == null ? (A = h) : Rt(A, 0, Mr), (X = Wf(A / it)), x))
          if (crypto.getRandomValues) {
            for (F = crypto.getRandomValues(new Uint32Array((X *= 2))); T < X; )
              (C = F[T] * 131072 + (F[T + 1] >>> 11)),
                C >= 9e15
                  ? ((V = crypto.getRandomValues(new Uint32Array(2))), (F[T] = V[0]), (F[T + 1] = V[1]))
                  : (G.push(C % 1e14), (T += 2));
            T = X / 2;
          } else if (crypto.randomBytes) {
            for (F = crypto.randomBytes((X *= 7)); T < X; )
              (C =
                (F[T] & 31) * 281474976710656 +
                F[T + 1] * 1099511627776 +
                F[T + 2] * 4294967296 +
                F[T + 3] * 16777216 +
                (F[T + 4] << 16) +
                (F[T + 5] << 8) +
                F[T + 6]),
                C >= 9e15 ? crypto.randomBytes(7).copy(F, T) : (G.push(C % 1e14), (T += 7));
            T = X / 7;
          } else throw ((x = !1), Error(br + 'crypto unavailable'));
        if (!x) for (; T < X; ) (C = _()), C < 9e15 && (G[T++] = C % 1e14);
        for (X = G[--T], A %= it, X && A && ((C = Pf[it - A]), (G[T] = Qr(X / C) * C)); G[T] === 0; G.pop(), T--);
        if (T < 0) G = [(Y = 0)];
        else {
          for (Y = -1; G[0] === 0; G.splice(0, 1), Y -= it);
          for (T = 1, C = G[0]; C >= 10; C /= 10, T++);
          T < it && (Y -= it - T);
        }
        return (k.e = Y), (k.c = G), k;
      };
    })()),
    (Q.sum = function () {
      for (var y = 1, _ = arguments, A = new Q(_[0]); y < _.length; ) A = A.plus(_[y++]);
      return A;
    }),
    (u = (function () {
      var y = '0123456789';
      function _(A, F, V, Y) {
        for (var X, C = [0], T, G = 0, k = A.length; G < k; ) {
          for (T = C.length; T--; C[T] *= F);
          for (C[0] += Y.indexOf(A.charAt(G++)), X = 0; X < C.length; X++)
            C[X] > V - 1 && (C[X + 1] == null && (C[X + 1] = 0), (C[X + 1] += (C[X] / V) | 0), (C[X] %= V));
        }
        return C.reverse();
      }
      return function (A, F, V, Y, X) {
        var C,
          T,
          G,
          k,
          ue,
          R,
          P,
          be,
          de = A.indexOf('.'),
          w = h,
          Ue = o;
        for (
          de >= 0 &&
            ((k = te),
            (te = 0),
            (A = A.replace('.', '')),
            (be = new Q(F)),
            (R = be.pow(A.length - de)),
            (te = k),
            (be.c = _(jn(Zr(R.c), R.e, '0'), 10, V, y)),
            (be.e = be.c.length)),
            P = _(A, F, V, X ? ((C = ge), y) : ((C = y), ge)),
            G = k = P.length;
          P[--k] == 0;
          P.pop()
        );
        if (!P[0]) return C.charAt(0);
        if (
          (de < 0 ? --G : ((R.c = P), (R.e = G), (R.s = Y), (R = a(R, be, w, Ue, V)), (P = R.c), (ue = R.r), (G = R.e)),
          (T = G + w + 1),
          (de = P[T]),
          (k = V / 2),
          (ue = ue || T < 0 || P[T + 1] != null),
          (ue =
            Ue < 4
              ? (de != null || ue) && (Ue == 0 || Ue == (R.s < 0 ? 3 : 2))
              : de > k || (de == k && (Ue == 4 || ue || (Ue == 6 && P[T - 1] & 1) || Ue == (R.s < 0 ? 8 : 7)))),
          T < 1 || !P[0])
        )
          A = ue ? jn(C.charAt(1), -w, C.charAt(0)) : C.charAt(0);
        else {
          if (((P.length = T), ue)) for (--V; ++P[--T] > V; ) (P[T] = 0), T || (++G, (P = [1].concat(P)));
          for (k = P.length; !P[--k]; );
          for (de = 0, A = ''; de <= k; A += C.charAt(P[de++]));
          A = jn(A, G, C.charAt(0));
        }
        return A;
      };
    })()),
    (a = (function () {
      function y(F, V, Y) {
        var X,
          C,
          T,
          G,
          k = 0,
          ue = F.length,
          R = V % fi,
          P = (V / fi) | 0;
        for (F = F.slice(); ue--; )
          (T = F[ue] % fi),
            (G = (F[ue] / fi) | 0),
            (X = P * T + G * R),
            (C = R * T + (X % fi) * fi + k),
            (k = ((C / Y) | 0) + ((X / fi) | 0) + P * G),
            (F[ue] = C % Y);
        return k && (F = [k].concat(F)), F;
      }
      function _(F, V, Y, X) {
        var C, T;
        if (Y != X) T = Y > X ? 1 : -1;
        else
          for (C = T = 0; C < Y; C++)
            if (F[C] != V[C]) {
              T = F[C] > V[C] ? 1 : -1;
              break;
            }
        return T;
      }
      function A(F, V, Y, X) {
        for (var C = 0; Y--; ) (F[Y] -= C), (C = F[Y] < V[Y] ? 1 : 0), (F[Y] = C * X + F[Y] - V[Y]);
        for (; !F[0] && F.length > 1; F.splice(0, 1));
      }
      return function (F, V, Y, X, C) {
        var T,
          G,
          k,
          ue,
          R,
          P,
          be,
          de,
          w,
          Ue,
          Oe,
          Ke,
          Ne,
          De,
          M,
          D,
          Z,
          ie = F.s == V.s ? 1 : -1,
          W = F.c,
          ne = V.c;
        if (!W || !W[0] || !ne || !ne[0])
          return new Q(
            !F.s || !V.s || (W ? ne && W[0] == ne[0] : !ne) ? NaN : (W && W[0] == 0) || !ne ? ie * 0 : ie / 0
          );
        for (
          de = new Q(ie),
            w = de.c = [],
            G = F.e - V.e,
            ie = Y + G + 1,
            C || ((C = rn), (G = Kr(F.e / it) - Kr(V.e / it)), (ie = (ie / it) | 0)),
            k = 0;
          ne[k] == (W[k] || 0);
          k++
        );
        if ((ne[k] > (W[k] || 0) && G--, ie < 0)) w.push(1), (ue = !0);
        else {
          for (
            De = W.length,
              D = ne.length,
              k = 0,
              ie += 2,
              R = Qr(C / (ne[0] + 1)),
              R > 1 && ((ne = y(ne, R, C)), (W = y(W, R, C)), (D = ne.length), (De = W.length)),
              Ne = D,
              Ue = W.slice(0, D),
              Oe = Ue.length;
            Oe < D;
            Ue[Oe++] = 0
          );
          (Z = ne.slice()), (Z = [0].concat(Z)), (M = ne[0]), ne[1] >= C / 2 && M++;
          do {
            if (((R = 0), (T = _(ne, Ue, D, Oe)), T < 0)) {
              if (((Ke = Ue[0]), D != Oe && (Ke = Ke * C + (Ue[1] || 0)), (R = Qr(Ke / M)), R > 1))
                for (R >= C && (R = C - 1), P = y(ne, R, C), be = P.length, Oe = Ue.length; _(P, Ue, be, Oe) == 1; )
                  R--, A(P, D < be ? Z : ne, be, C), (be = P.length), (T = 1);
              else R == 0 && (T = R = 1), (P = ne.slice()), (be = P.length);
              if ((be < Oe && (P = [0].concat(P)), A(Ue, P, Oe, C), (Oe = Ue.length), T == -1))
                for (; _(ne, Ue, D, Oe) < 1; ) R++, A(Ue, D < Oe ? Z : ne, Oe, C), (Oe = Ue.length);
            } else T === 0 && (R++, (Ue = [0]));
            (w[k++] = R), Ue[0] ? (Ue[Oe++] = W[Ne] || 0) : ((Ue = [W[Ne]]), (Oe = 1));
          } while ((Ne++ < De || Ue[0] != null) && ie--);
          (ue = Ue[0] != null), w[0] || w.splice(0, 1);
        }
        if (C == rn) {
          for (k = 1, ie = w[0]; ie >= 10; ie /= 10, k++);
          Ae(de, Y + (de.e = k + G * it - 1) + 1, X, ue);
        } else (de.e = G), (de.r = +ue);
        return de;
      };
    })());
  function je(y, _, A, F) {
    var V, Y, X, C, T;
    if ((A == null ? (A = o) : Rt(A, 0, 8), !y.c)) return y.toString();
    if (((V = y.c[0]), (X = y.e), _ == null))
      (T = Zr(y.c)), (T = F == 1 || (F == 2 && (X <= S || X >= E)) ? us(T, X) : jn(T, X, '0'));
    else if (
      ((y = Ae(new Q(y), _, A)), (Y = y.e), (T = Zr(y.c)), (C = T.length), F == 1 || (F == 2 && (_ <= Y || Y <= S)))
    ) {
      for (; C < _; T += '0', C++);
      T = us(T, Y);
    } else if (((_ -= X), (T = jn(T, Y, '0')), Y + 1 > C)) {
      if (--_ > 0) for (T += '.'; _--; T += '0');
    } else if (((_ += Y - C), _ > 0)) for (Y + 1 == C && (T += '.'); _--; T += '0');
    return y.s < 0 && V ? '-' + T : T;
  }
  function We(y, _) {
    for (var A, F, V = 1, Y = new Q(y[0]); V < y.length; V++)
      (F = new Q(y[V])), (!F.s || (A = ki(Y, F)) === _ || (A === 0 && Y.s === _)) && (Y = F);
    return Y;
  }
  function _e(y, _, A) {
    for (var F = 1, V = _.length; !_[--V]; _.pop());
    for (V = _[0]; V >= 10; V /= 10, F++);
    return (A = F + A * it - 1) > v ? (y.c = y.e = null) : A < U ? (y.c = [(y.e = 0)]) : ((y.e = A), (y.c = _)), y;
  }
  s = (function () {
    var y = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      _ = /^([^.]+)\.$/,
      A = /^\.([^.]+)$/,
      F = /^-?(Infinity|NaN)$/,
      V = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (Y, X, C, T) {
      var G,
        k = C ? X : X.replace(V, '');
      if (F.test(k)) Y.s = isNaN(k) ? null : k < 0 ? -1 : 1;
      else {
        if (
          !C &&
          ((k = k.replace(y, function (ue, R, P) {
            return (G = (P = P.toLowerCase()) == 'x' ? 16 : P == 'b' ? 2 : 8), !T || T == G ? R : ue;
          })),
          T && ((G = T), (k = k.replace(_, '$1').replace(A, '0.$1'))),
          X != k)
        )
          return new Q(k, G);
        if (Q.DEBUG) throw Error(br + 'Not a' + (T ? ' base ' + T : '') + ' number: ' + X);
        Y.s = null;
      }
      Y.c = Y.e = null;
    };
  })();
  function Ae(y, _, A, F) {
    var V,
      Y,
      X,
      C,
      T,
      G,
      k,
      ue = y.c,
      R = Pf;
    if (ue) {
      e: {
        for (V = 1, C = ue[0]; C >= 10; C /= 10, V++);
        if (((Y = _ - V), Y < 0)) (Y += it), (X = _), (T = ue[(G = 0)]), (k = Qr((T / R[V - X - 1]) % 10));
        else if (((G = Wf((Y + 1) / it)), G >= ue.length))
          if (F) {
            for (; ue.length <= G; ue.push(0));
            (T = k = 0), (V = 1), (Y %= it), (X = Y - it + 1);
          } else break e;
        else {
          for (T = C = ue[G], V = 1; C >= 10; C /= 10, V++);
          (Y %= it), (X = Y - it + V), (k = X < 0 ? 0 : Qr((T / R[V - X - 1]) % 10));
        }
        if (
          ((F = F || _ < 0 || ue[G + 1] != null || (X < 0 ? T : T % R[V - X - 1])),
          (F =
            A < 4
              ? (k || F) && (A == 0 || A == (y.s < 0 ? 3 : 2))
              : k > 5 ||
                (k == 5 &&
                  (A == 4 ||
                    F ||
                    (A == 6 && (Y > 0 ? (X > 0 ? T / R[V - X] : 0) : ue[G - 1]) % 10 & 1) ||
                    A == (y.s < 0 ? 8 : 7)))),
          _ < 1 || !ue[0])
        )
          return (
            (ue.length = 0),
            F ? ((_ -= y.e + 1), (ue[0] = R[(it - (_ % it)) % it]), (y.e = -_ || 0)) : (ue[0] = y.e = 0),
            y
          );
        if (
          (Y == 0
            ? ((ue.length = G), (C = 1), G--)
            : ((ue.length = G + 1), (C = R[it - Y]), (ue[G] = X > 0 ? Qr((T / R[V - X]) % R[X]) * C : 0)),
          F)
        )
          for (;;)
            if (G == 0) {
              for (Y = 1, X = ue[0]; X >= 10; X /= 10, Y++);
              for (X = ue[0] += C, C = 1; X >= 10; X /= 10, C++);
              Y != C && (y.e++, ue[0] == rn && (ue[0] = 1));
              break;
            } else {
              if (((ue[G] += C), ue[G] != rn)) break;
              (ue[G--] = 0), (C = 1);
            }
        for (Y = ue.length; ue[--Y] === 0; ue.pop());
      }
      y.e > v ? (y.c = y.e = null) : y.e < U && (y.c = [(y.e = 0)]);
    }
    return y;
  }
  function Re(y) {
    var _,
      A = y.e;
    return A === null
      ? y.toString()
      : ((_ = Zr(y.c)), (_ = A <= S || A >= E ? us(_, A) : jn(_, A, '0')), y.s < 0 ? '-' + _ : _);
  }
  return (
    (c.absoluteValue = c.abs =
      function () {
        var y = new Q(this);
        return y.s < 0 && (y.s = 1), y;
      }),
    (c.comparedTo = function (y, _) {
      return ki(this, new Q(y, _));
    }),
    (c.decimalPlaces = c.dp =
      function (y, _) {
        var A,
          F,
          V,
          Y = this;
        if (y != null) return Rt(y, 0, Mr), _ == null ? (_ = o) : Rt(_, 0, 8), Ae(new Q(Y), y + Y.e + 1, _);
        if (!(A = Y.c)) return null;
        if (((F = ((V = A.length - 1) - Kr(this.e / it)) * it), (V = A[V]))) for (; V % 10 == 0; V /= 10, F--);
        return F < 0 && (F = 0), F;
      }),
    (c.dividedBy = c.div =
      function (y, _) {
        return a(this, new Q(y, _), h, o);
      }),
    (c.dividedToIntegerBy = c.idiv =
      function (y, _) {
        return a(this, new Q(y, _), 0, 1);
      }),
    (c.exponentiatedBy = c.pow =
      function (y, _) {
        var A,
          F,
          V,
          Y,
          X,
          C,
          T,
          G,
          k,
          ue = this;
        if (((y = new Q(y)), y.c && !y.isInteger())) throw Error(br + 'Exponent not an integer: ' + Re(y));
        if (
          (_ != null && (_ = new Q(_)),
          (C = y.e > 14),
          !ue.c || !ue.c[0] || (ue.c[0] == 1 && !ue.e && ue.c.length == 1) || !y.c || !y.c[0])
        )
          return (k = new Q(Math.pow(+Re(ue), C ? y.s * (2 - as(y)) : +Re(y)))), _ ? k.mod(_) : k;
        if (((T = y.s < 0), _)) {
          if (_.c ? !_.c[0] : !_.s) return new Q(NaN);
          (F = !T && ue.isInteger() && _.isInteger()), F && (ue = ue.mod(_));
        } else {
          if (
            y.e > 9 &&
            (ue.e > 0 ||
              ue.e < -1 ||
              (ue.e == 0 ? ue.c[0] > 1 || (C && ue.c[1] >= 24e7) : ue.c[0] < 8e13 || (C && ue.c[0] <= 9999975e7)))
          )
            return (Y = ue.s < 0 && as(y) ? -0 : 0), ue.e > -1 && (Y = 1 / Y), new Q(T ? 1 / Y : Y);
          te && (Y = Wf(te / it + 2));
        }
        for (
          C ? ((A = new Q(0.5)), T && (y.s = 1), (G = as(y))) : ((V = Math.abs(+Re(y))), (G = V % 2)), k = new Q(m);
          ;

        ) {
          if (G) {
            if (((k = k.times(ue)), !k.c)) break;
            Y ? k.c.length > Y && (k.c.length = Y) : F && (k = k.mod(_));
          }
          if (V) {
            if (((V = Qr(V / 2)), V === 0)) break;
            G = V % 2;
          } else if (((y = y.times(A)), Ae(y, y.e + 1, 1), y.e > 14)) G = as(y);
          else {
            if (((V = +Re(y)), V === 0)) break;
            G = V % 2;
          }
          (ue = ue.times(ue)), Y ? ue.c && ue.c.length > Y && (ue.c.length = Y) : F && (ue = ue.mod(_));
        }
        return F ? k : (T && (k = m.div(k)), _ ? k.mod(_) : Y ? Ae(k, te, o, X) : k);
      }),
    (c.integerValue = function (y) {
      var _ = new Q(this);
      return y == null ? (y = o) : Rt(y, 0, 8), Ae(_, _.e + 1, y);
    }),
    (c.isEqualTo = c.eq =
      function (y, _) {
        return ki(this, new Q(y, _)) === 0;
      }),
    (c.isFinite = function () {
      return !!this.c;
    }),
    (c.isGreaterThan = c.gt =
      function (y, _) {
        return ki(this, new Q(y, _)) > 0;
      }),
    (c.isGreaterThanOrEqualTo = c.gte =
      function (y, _) {
        return (_ = ki(this, new Q(y, _))) === 1 || _ === 0;
      }),
    (c.isInteger = function () {
      return !!this.c && Kr(this.e / it) > this.c.length - 2;
    }),
    (c.isLessThan = c.lt =
      function (y, _) {
        return ki(this, new Q(y, _)) < 0;
      }),
    (c.isLessThanOrEqualTo = c.lte =
      function (y, _) {
        return (_ = ki(this, new Q(y, _))) === -1 || _ === 0;
      }),
    (c.isNaN = function () {
      return !this.s;
    }),
    (c.isNegative = function () {
      return this.s < 0;
    }),
    (c.isPositive = function () {
      return this.s > 0;
    }),
    (c.isZero = function () {
      return !!this.c && this.c[0] == 0;
    }),
    (c.minus = function (y, _) {
      var A,
        F,
        V,
        Y,
        X = this,
        C = X.s;
      if (((y = new Q(y, _)), (_ = y.s), !C || !_)) return new Q(NaN);
      if (C != _) return (y.s = -_), X.plus(y);
      var T = X.e / it,
        G = y.e / it,
        k = X.c,
        ue = y.c;
      if (!T || !G) {
        if (!k || !ue) return k ? ((y.s = -_), y) : new Q(ue ? X : NaN);
        if (!k[0] || !ue[0]) return ue[0] ? ((y.s = -_), y) : new Q(k[0] ? X : o == 3 ? -0 : 0);
      }
      if (((T = Kr(T)), (G = Kr(G)), (k = k.slice()), (C = T - G))) {
        for ((Y = C < 0) ? ((C = -C), (V = k)) : ((G = T), (V = ue)), V.reverse(), _ = C; _--; V.push(0));
        V.reverse();
      } else
        for (F = (Y = (C = k.length) < (_ = ue.length)) ? C : _, C = _ = 0; _ < F; _++)
          if (k[_] != ue[_]) {
            Y = k[_] < ue[_];
            break;
          }
      if ((Y && ((V = k), (k = ue), (ue = V), (y.s = -y.s)), (_ = (F = ue.length) - (A = k.length)), _ > 0))
        for (; _--; k[A++] = 0);
      for (_ = rn - 1; F > C; ) {
        if (k[--F] < ue[F]) {
          for (A = F; A && !k[--A]; k[A] = _);
          --k[A], (k[F] += rn);
        }
        k[F] -= ue[F];
      }
      for (; k[0] == 0; k.splice(0, 1), --G);
      return k[0] ? _e(y, k, G) : ((y.s = o == 3 ? -1 : 1), (y.c = [(y.e = 0)]), y);
    }),
    (c.modulo = c.mod =
      function (y, _) {
        var A,
          F,
          V = this;
        return (
          (y = new Q(y, _)),
          !V.c || !y.s || (y.c && !y.c[0])
            ? new Q(NaN)
            : !y.c || (V.c && !V.c[0])
              ? new Q(V)
              : (N == 9 ? ((F = y.s), (y.s = 1), (A = a(V, y, 0, 3)), (y.s = F), (A.s *= F)) : (A = a(V, y, 0, N)),
                (y = V.minus(A.times(y))),
                !y.c[0] && N == 1 && (y.s = V.s),
                y)
        );
      }),
    (c.multipliedBy = c.times =
      function (y, _) {
        var A,
          F,
          V,
          Y,
          X,
          C,
          T,
          G,
          k,
          ue,
          R,
          P,
          be,
          de,
          w,
          Ue = this,
          Oe = Ue.c,
          Ke = (y = new Q(y, _)).c;
        if (!Oe || !Ke || !Oe[0] || !Ke[0])
          return (
            !Ue.s || !y.s || (Oe && !Oe[0] && !Ke) || (Ke && !Ke[0] && !Oe)
              ? (y.c = y.e = y.s = null)
              : ((y.s *= Ue.s), !Oe || !Ke ? (y.c = y.e = null) : ((y.c = [0]), (y.e = 0))),
            y
          );
        for (
          F = Kr(Ue.e / it) + Kr(y.e / it),
            y.s *= Ue.s,
            T = Oe.length,
            ue = Ke.length,
            T < ue && ((be = Oe), (Oe = Ke), (Ke = be), (V = T), (T = ue), (ue = V)),
            V = T + ue,
            be = [];
          V--;
          be.push(0)
        );
        for (de = rn, w = fi, V = ue; --V >= 0; ) {
          for (A = 0, R = Ke[V] % w, P = (Ke[V] / w) | 0, X = T, Y = V + X; Y > V; )
            (G = Oe[--X] % w),
              (k = (Oe[X] / w) | 0),
              (C = P * G + k * R),
              (G = R * G + (C % w) * w + be[Y] + A),
              (A = ((G / de) | 0) + ((C / w) | 0) + P * k),
              (be[Y--] = G % de);
          be[Y] = A;
        }
        return A ? ++F : be.splice(0, 1), _e(y, be, F);
      }),
    (c.negated = function () {
      var y = new Q(this);
      return (y.s = -y.s || null), y;
    }),
    (c.plus = function (y, _) {
      var A,
        F = this,
        V = F.s;
      if (((y = new Q(y, _)), (_ = y.s), !V || !_)) return new Q(NaN);
      if (V != _) return (y.s = -_), F.minus(y);
      var Y = F.e / it,
        X = y.e / it,
        C = F.c,
        T = y.c;
      if (!Y || !X) {
        if (!C || !T) return new Q(V / 0);
        if (!C[0] || !T[0]) return T[0] ? y : new Q(C[0] ? F : V * 0);
      }
      if (((Y = Kr(Y)), (X = Kr(X)), (C = C.slice()), (V = Y - X))) {
        for (V > 0 ? ((X = Y), (A = T)) : ((V = -V), (A = C)), A.reverse(); V--; A.push(0));
        A.reverse();
      }
      for (V = C.length, _ = T.length, V - _ < 0 && ((A = T), (T = C), (C = A), (_ = V)), V = 0; _; )
        (V = ((C[--_] = C[_] + T[_] + V) / rn) | 0), (C[_] = rn === C[_] ? 0 : C[_] % rn);
      return V && ((C = [V].concat(C)), ++X), _e(y, C, X);
    }),
    (c.precision = c.sd =
      function (y, _) {
        var A,
          F,
          V,
          Y = this;
        if (y != null && y !== !!y) return Rt(y, 1, Mr), _ == null ? (_ = o) : Rt(_, 0, 8), Ae(new Q(Y), y, _);
        if (!(A = Y.c)) return null;
        if (((V = A.length - 1), (F = V * it + 1), (V = A[V]))) {
          for (; V % 10 == 0; V /= 10, F--);
          for (V = A[0]; V >= 10; V /= 10, F++);
        }
        return y && Y.e + 1 > F && (F = Y.e + 1), F;
      }),
    (c.shiftedBy = function (y) {
      return Rt(y, -9007199254740991, Om), this.times('1e' + y);
    }),
    (c.squareRoot = c.sqrt =
      function () {
        var y,
          _,
          A,
          F,
          V,
          Y = this,
          X = Y.c,
          C = Y.s,
          T = Y.e,
          G = h + 4,
          k = new Q('0.5');
        if (C !== 1 || !X || !X[0]) return new Q(!C || (C < 0 && (!X || X[0])) ? NaN : X ? Y : 1 / 0);
        if (
          ((C = Math.sqrt(+Re(Y))),
          C == 0 || C == 1 / 0
            ? ((_ = Zr(X)),
              (_.length + T) % 2 == 0 && (_ += '0'),
              (C = Math.sqrt(+_)),
              (T = Kr((T + 1) / 2) - (T < 0 || T % 2)),
              C == 1 / 0 ? (_ = '5e' + T) : ((_ = C.toExponential()), (_ = _.slice(0, _.indexOf('e') + 1) + T)),
              (A = new Q(_)))
            : (A = new Q(C + '')),
          A.c[0])
        ) {
          for (T = A.e, C = T + G, C < 3 && (C = 0); ; )
            if (((V = A), (A = k.times(V.plus(a(Y, V, G, 1)))), Zr(V.c).slice(0, C) === (_ = Zr(A.c)).slice(0, C)))
              if ((A.e < T && --C, (_ = _.slice(C - 3, C + 1)), _ == '9999' || (!F && _ == '4999'))) {
                if (!F && (Ae(V, V.e + h + 2, 0), V.times(V).eq(Y))) {
                  A = V;
                  break;
                }
                (G += 4), (C += 4), (F = 1);
              } else {
                (!+_ || (!+_.slice(1) && _.charAt(0) == '5')) && (Ae(A, A.e + h + 2, 1), (y = !A.times(A).eq(Y)));
                break;
              }
        }
        return Ae(A, A.e + h + 1, o, y);
      }),
    (c.toExponential = function (y, _) {
      return y != null && (Rt(y, 0, Mr), y++), je(this, y, _, 1);
    }),
    (c.toFixed = function (y, _) {
      return y != null && (Rt(y, 0, Mr), (y = y + this.e + 1)), je(this, y, _);
    }),
    (c.toFormat = function (y, _, A) {
      var F,
        V = this;
      if (A == null)
        y != null && _ && typeof _ == 'object'
          ? ((A = _), (_ = null))
          : y && typeof y == 'object'
            ? ((A = y), (y = _ = null))
            : (A = he);
      else if (typeof A != 'object') throw Error(br + 'Argument not an object: ' + A);
      if (((F = V.toFixed(y, _)), V.c)) {
        var Y,
          X = F.split('.'),
          C = +A.groupSize,
          T = +A.secondaryGroupSize,
          G = A.groupSeparator || '',
          k = X[0],
          ue = X[1],
          R = V.s < 0,
          P = R ? k.slice(1) : k,
          be = P.length;
        if ((T && ((Y = C), (C = T), (T = Y), (be -= Y)), C > 0 && be > 0)) {
          for (Y = be % C || C, k = P.substr(0, Y); Y < be; Y += C) k += G + P.substr(Y, C);
          T > 0 && (k += G + P.slice(Y)), R && (k = '-' + k);
        }
        F = ue
          ? k +
            (A.decimalSeparator || '') +
            ((T = +A.fractionGroupSize)
              ? ue.replace(new RegExp('\\d{' + T + '}\\B', 'g'), '$&' + (A.fractionGroupSeparator || ''))
              : ue)
          : k;
      }
      return (A.prefix || '') + F + (A.suffix || '');
    }),
    (c.toFraction = function (y) {
      var _,
        A,
        F,
        V,
        Y,
        X,
        C,
        T,
        G,
        k,
        ue,
        R,
        P = this,
        be = P.c;
      if (y != null && ((C = new Q(y)), (!C.isInteger() && (C.c || C.s !== 1)) || C.lt(m)))
        throw Error(br + 'Argument ' + (C.isInteger() ? 'out of range: ' : 'not an integer: ') + Re(C));
      if (!be) return new Q(P);
      for (
        _ = new Q(m),
          G = A = new Q(m),
          F = T = new Q(m),
          R = Zr(be),
          Y = _.e = R.length - P.e - 1,
          _.c[0] = Pf[(X = Y % it) < 0 ? it + X : X],
          y = !y || C.comparedTo(_) > 0 ? (Y > 0 ? _ : G) : C,
          X = v,
          v = 1 / 0,
          C = new Q(R),
          T.c[0] = 0;
        (k = a(C, _, 0, 1)), (V = A.plus(k.times(F))), V.comparedTo(y) != 1;

      )
        (A = F), (F = V), (G = T.plus(k.times((V = G)))), (T = V), (_ = C.minus(k.times((V = _)))), (C = V);
      return (
        (V = a(y.minus(A), F, 0, 1)),
        (T = T.plus(V.times(G))),
        (A = A.plus(V.times(F))),
        (T.s = G.s = P.s),
        (Y = Y * 2),
        (ue =
          a(G, F, Y, o)
            .minus(P)
            .abs()
            .comparedTo(a(T, A, Y, o).minus(P).abs()) < 1
            ? [G, F]
            : [T, A]),
        (v = X),
        ue
      );
    }),
    (c.toNumber = function () {
      return +Re(this);
    }),
    (c.toPrecision = function (y, _) {
      return y != null && Rt(y, 1, Mr), je(this, y, _, 2);
    }),
    (c.toString = function (y) {
      var _,
        A = this,
        F = A.s,
        V = A.e;
      return (
        V === null
          ? F
            ? ((_ = 'Infinity'), F < 0 && (_ = '-' + _))
            : (_ = 'NaN')
          : (y == null
              ? (_ = V <= S || V >= E ? us(Zr(A.c), V) : jn(Zr(A.c), V, '0'))
              : y === 10 && ve
                ? ((A = Ae(new Q(A), h + V + 1, o)), (_ = jn(Zr(A.c), A.e, '0')))
                : (Rt(y, 2, ge.length, 'Base'), (_ = u(jn(Zr(A.c), V, '0'), 10, y, F, !0))),
            F < 0 && A.c[0] && (_ = '-' + _)),
        _
      );
    }),
    (c.valueOf = c.toJSON =
      function () {
        return Re(this);
      }),
    (c._isBigNumber = !0),
    (c[Symbol.toStringTag] = 'BigNumber'),
    (c[Symbol.for('nodejs.util.inspect.custom')] = c.valueOf),
    n != null && Q.set(n),
    Q
  );
}
function Kr(n) {
  var a = n | 0;
  return n > 0 || n === a ? a : a - 1;
}
function Zr(n) {
  for (var a, u, s = 1, c = n.length, m = n[0] + ''; s < c; ) {
    for (a = n[s++] + '', u = it - a.length; u--; a = '0' + a);
    m += a;
  }
  for (c = m.length; m.charCodeAt(--c) === 48; );
  return m.slice(0, c + 1 || 1);
}
function ki(n, a) {
  var u,
    s,
    c = n.c,
    m = a.c,
    h = n.s,
    o = a.s,
    S = n.e,
    E = a.e;
  if (!h || !o) return null;
  if (((u = c && !c[0]), (s = m && !m[0]), u || s)) return u ? (s ? 0 : -o) : h;
  if (h != o) return h;
  if (((u = h < 0), (s = S == E), !c || !m)) return s ? 0 : !c ^ u ? 1 : -1;
  if (!s) return (S > E) ^ u ? 1 : -1;
  for (o = (S = c.length) < (E = m.length) ? S : E, h = 0; h < o; h++)
    if (c[h] != m[h]) return (c[h] > m[h]) ^ u ? 1 : -1;
  return S == E ? 0 : (S > E) ^ u ? 1 : -1;
}
function Rt(n, a, u, s) {
  if (n < a || n > u || n !== Qr(n))
    throw Error(
      br +
        (s || 'Argument') +
        (typeof n == 'number'
          ? n < a || n > u
            ? ' out of range: '
            : ' not an integer: '
          : ' not a primitive number: ') +
        String(n)
    );
}
function as(n) {
  var a = n.c.length - 1;
  return Kr(n.e / it) == a && n.c[a] % 2 != 0;
}
function us(n, a) {
  return (n.length > 1 ? n.charAt(0) + '.' + n.slice(1) : n) + (a < 0 ? 'e' : 'e+') + a;
}
function jn(n, a, u) {
  var s, c;
  if (a < 0) {
    for (c = u + '.'; ++a; c += u);
    n = c + n;
  } else if (((s = n.length), ++a > s)) {
    for (c = u, a -= s; --a; c += u);
    n += c;
  } else a < s && (n = n.slice(0, a) + '.' + n.slice(a));
  return n;
}
var In = Np();
class nr {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    return a ? new nr(BigInt(a)) : null;
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value === a.value : !1;
  }
}
Object.defineProperty(nr, 'Bitcoin', { enumerable: !0, configurable: !0, writable: !0, value: new nr(0n) });
Object.defineProperty(nr, 'Ethereum', { enumerable: !0, configurable: !0, writable: !0, value: new nr(60n) });
Object.defineProperty(nr, 'Solana', { enumerable: !0, configurable: !0, writable: !0, value: new nr(501n) });
Object.defineProperty(nr, 'Dfinity', { enumerable: !0, configurable: !0, writable: !0, value: new nr(223n) });
Object.defineProperty(nr, 'Ton', { enumerable: !0, configurable: !0, writable: !0, value: new nr(607n) });
Object.defineProperty(nr, 'Tron', { enumerable: !0, configurable: !0, writable: !0, value: new nr(195n) });
Object.defineProperty(nr, 'Kaspa', { enumerable: !0, configurable: !0, writable: !0, value: new nr(111111n) });
class $e {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    return a ? new $e(BigInt(a)) : null;
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value === a.value : !1;
  }
}
Object.defineProperty($e, 'MainNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(1n) });
Object.defineProperty($e, 'TestNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(0n) });
Object.defineProperty($e, 'BtcMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(1n) });
Object.defineProperty($e, 'BtcTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(2n) });
Object.defineProperty($e, 'EvmMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(0x1n) });
Object.defineProperty($e, 'EvmSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(0xaa36a7n)
});
Object.defineProperty($e, 'EvmBscNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(0x38n) });
Object.defineProperty($e, 'EvmBscTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(97n) });
Object.defineProperty($e, 'EvmBaseNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(8453n) });
Object.defineProperty($e, 'EvmBaseSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(84532n)
});
Object.defineProperty($e, 'EvmAvalancheNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(43114n) });
Object.defineProperty($e, 'EvmAvalancheFujiNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(43113n)
});
Object.defineProperty($e, 'EvmScrollNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(534352n) });
Object.defineProperty($e, 'EvmScrollSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(534351n)
});
Object.defineProperty($e, 'EvmBitlayerNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(200901n) });
Object.defineProperty($e, 'EvmBitlayerTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(200810n)
});
Object.defineProperty($e, 'EvmSwanNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(254n) });
Object.defineProperty($e, 'EvmSwanTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(20241133n)
});
Object.defineProperty($e, 'EvmPantaNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(331n) });
Object.defineProperty($e, 'SolanaMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(0x3n) });
Object.defineProperty($e, 'SolanaTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(0x2n) });
Object.defineProperty($e, 'TonMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(1n) });
Object.defineProperty($e, 'TonTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(2n) });
Object.defineProperty($e, 'TronMainNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(0x2b6653dcn)
});
Object.defineProperty($e, 'TronShastaTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(0x94a9059en)
});
Object.defineProperty($e, 'TronNileTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new $e(0xcd8690dcn)
});
Object.defineProperty($e, 'DfinityMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(1n) });
Object.defineProperty($e, 'KaspaMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(0n) });
Object.defineProperty($e, 'KaspaTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new $e(1n) });
function Q1(n) {
  return { chainId: n.chainId, depositAddress: n.depositAddress || void 0, displayName: n.displayName || void 0 };
}
var _o;
(function (n) {
  (n[(n.Native = 0)] = 'Native'),
    (n[(n.NativeGas = 1)] = 'NativeGas'),
    (n[(n.ERC20 = 3)] = 'ERC20'),
    (n[(n.ERC721 = 4)] = 'ERC721'),
    (n[(n.ICP = 5)] = 'ICP'),
    (n[(n.ICRC3 = 6)] = 'ICRC3'),
    (n[(n.BRC20 = 7)] = 'BRC20'),
    (n[(n.SPL = 8)] = 'SPL'),
    (n[(n.TRC20 = 9)] = 'TRC20'),
    (n[(n.Jetton = 10)] = 'Jetton'),
    (n[(n.KRC20 = 11)] = 'KRC20');
})(_o || (_o = {}));
function K1(n) {
  const a = Number(n);
  return Object.values(_o).includes(a) ? a : null;
}
var Ba;
(function (n) {
  (n[(n.L1 = 1)] = 'L1'),
    (n[(n.L2 = 2)] = 'L2'),
    (n[(n.L3 = 3)] = 'L3'),
    (n[(n.L4 = 4)] = 'L4'),
    (n[(n.L5 = 5)] = 'L5'),
    (n[(n.L6 = 6)] = 'L6');
})(Ba || (Ba = {}));
var Nm;
(function (n) {
  (n.EVM = 'EVM'),
    (n.Bitcoin = 'Bitcoin'),
    (n.Solana = 'Solana'),
    (n.Tron = 'Tron'),
    (n.Ton = 'Ton'),
    (n.IC = 'ICP'),
    (n.Kaspa = 'Kaspa');
})(Nm || (Nm = {}));
var yi;
(function (n) {
  (n[(n.Source = 0)] = 'Source'), (n[(n.Target = 1)] = 'Target');
})(yi || (yi = {}));
var kn;
(function (n) {
  (n[(n.LimitOrder = 0)] = 'LimitOrder'), (n[(n.SwapOrder = 1)] = 'SwapOrder');
})(kn || (kn = {}));
var At;
(function (n) {
  (n[(n.Ask = 1)] = 'Ask'), (n[(n.Bid = 2)] = 'Bid');
})(At || (At = {}));
var Ua;
(function (n) {
  (n[(n.OneMinute = 1)] = 'OneMinute'),
    (n[(n.FiveMinutes = 2)] = 'FiveMinutes'),
    (n[(n.FifteenMinutes = 3)] = 'FifteenMinutes'),
    (n[(n.ThirtyMinutes = 4)] = 'ThirtyMinutes'),
    (n[(n.OneHour = 5)] = 'OneHour'),
    (n[(n.FourHours = 6)] = 'FourHours'),
    (n[(n.OneDay = 7)] = 'OneDay'),
    (n[(n.OneWeek = 8)] = 'OneWeek'),
    (n[(n.OneMonth = 9)] = 'OneMonth');
})(Ua || (Ua = {}));
var mi;
(function (n) {
  (n[(n.Created = 0)] = 'Created'), (n[(n.Fulfilled = 1)] = 'Fulfilled'), (n[(n.Cancelled = 2)] = 'Cancelled');
})(mi || (mi = {}));
var gs;
(function (n) {
  (n[(n.WalletRegister = 100)] = 'WalletRegister'),
    (n[(n.Deposit = 200)] = 'Deposit'),
    (n[(n.Withdraw = 201)] = 'Withdraw'),
    (n[(n.Transfer = 300)] = 'Transfer'),
    (n[(n.ResetMainSecret = 400)] = 'ResetMainSecret'),
    (n[(n.CreateApiSecret = 401)] = 'CreateApiSecret'),
    (n[(n.DestroyApiSecret = 402)] = 'DestroyApiSecret'),
    (n[(n.CreateSpotOrder = 500)] = 'CreateSpotOrder'),
    (n[(n.CancelSpotOrder = 501)] = 'CancelSpotOrder'),
    (n[(n.AddAmmV2Liquidity = 600)] = 'AddAmmV2Liquidity'),
    (n[(n.RemoveAmmV2Liquidity = 601)] = 'RemoveAmmV2Liquidity'),
    (n[(n.RegisterAsset = 700)] = 'RegisterAsset'),
    (n[(n.UpdateGlobalWithdrawalFeeTo = 701)] = 'UpdateGlobalWithdrawalFeeTo'),
    (n[(n.UpdateAssetWithdrawalFeeTo = 702)] = 'UpdateAssetWithdrawalFeeTo'),
    (n[(n.UpdateChainConfirmationTimes = 800)] = 'UpdateChainConfirmationTimes'),
    (n[(n.RegisterMarket = 900)] = 'RegisterMarket'),
    (n[(n.UpdateMarketTradingSettings = 901)] = 'UpdateMarketTradingSettings'),
    (n[(n.UpdateSpotMarketInitialFeeTo = 902)] = 'UpdateSpotMarketInitialFeeTo'),
    (n[(n.UpdateMarketFeeTo = 903)] = 'UpdateMarketFeeTo'),
    (n[(n.UpdateMarketInitialFee = 904)] = 'UpdateMarketInitialFee'),
    (n[(n.UpdateMarketFee = 905)] = 'UpdateMarketFee'),
    (n[(n.ClaimSpotMarketTradingFee = 906)] = 'ClaimSpotMarketTradingFee'),
    (n[(n.UpdateSpotMarketRoyalty = 907)] = 'UpdateSpotMarketRoyalty'),
    (n[(n.ClaimSpotMarketRoyalty = 908)] = 'ClaimSpotMarketRoyalty'),
    (n[(n.AssetAccountBinding = 1e3)] = 'AssetAccountBinding'),
    (n[(n.AssetAccountUnbinding = 1001)] = 'AssetAccountUnbinding'),
    (n[(n.SubmitMemeOrder = 1100)] = 'SubmitMemeOrder'),
    (n[(n.CancelMemeOrder = 1101)] = 'CancelMemeOrder'),
    (n[(n.RegisterMemeMarket = 1200)] = 'RegisterMemeMarket'),
    (n[(n.UpdateMemeMarketInitialTradingSettings = 1201)] = 'UpdateMemeMarketInitialTradingSettings'),
    (n[(n.UpdateMemeMarketTradingSettings = 1202)] = 'UpdateMemeMarketTradingSettings'),
    (n[(n.UpdateMemeMarketInitialFeeTo = 1203)] = 'UpdateMemeMarketInitialFeeTo'),
    (n[(n.UpdateMemeMarketFeeTo = 1204)] = 'UpdateMemeMarketFeeTo'),
    (n[(n.UpdateMemeMarketInitialTradingFee = 1205)] = 'UpdateMemeMarketInitialTradingFee'),
    (n[(n.UpdateMemeMarketTradingFee = 1206)] = 'UpdateMemeMarketTradingFee'),
    (n[(n.ClaimMemeMarketTradingFee = 1207)] = 'ClaimMemeMarketTradingFee');
})(gs || (gs = {}));
var Da;
(function (n) {
  (n.Mainnet = 'mainnet'), (n.Testnet = 'testnet');
})(Da || (Da = {}));
var Tm;
(function (n) {
  (n.BtcEcdsa = '0x3e8'),
    (n.EvmEcdsa = '0x3e9'),
    (n.TronEcdsa = '0x3ea'),
    (n.TonEddsaOpenMask = '0x7d0'),
    (n.SolanaEddsa = '0x7da'),
    (n.IcpEddsa = '0x7e4'),
    (n.KaspaSchnorr = '0xbc2');
})(Tm || (Tm = {}));
var vs;
(function (n) {
  n[(n.V0 = 0)] = 'V0';
})(vs || (vs = {}));
function Mm(n) {
  if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
function J1(n) {
  return n instanceof Uint8Array || (ArrayBuffer.isView(n) && n.constructor.name === 'Uint8Array');
}
function Uo(n, ...a) {
  if (!J1(n)) throw new Error('Uint8Array expected');
  if (a.length > 0 && !a.includes(n.length))
    throw new Error('Uint8Array expected of length ' + a + ', got length=' + n.length);
}
function W1(n) {
  if (typeof n != 'function' || typeof n.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  Mm(n.outputLen), Mm(n.blockLen);
}
function bs(n, a = !0) {
  if (n.destroyed) throw new Error('Hash instance has been destroyed');
  if (a && n.finished) throw new Error('Hash#digest() has already been called');
}
function P1(n, a) {
  Uo(n);
  const u = a.outputLen;
  if (n.length < u) throw new Error('digestInto() expects output buffer of length at least ' + u);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function eo(n) {
  return new DataView(n.buffer, n.byteOffset, n.byteLength);
}
function dn(n, a) {
  return (n << (32 - a)) | (n >>> a);
}
function ev(n) {
  if (typeof n != 'string') throw new Error('utf8ToBytes expected string, got ' + typeof n);
  return new Uint8Array(new TextEncoder().encode(n));
}
function Do(n) {
  return typeof n == 'string' && (n = ev(n)), Uo(n), n;
}
class Tp {
  clone() {
    return this._cloneInto();
  }
}
function tv(n) {
  const a = (s) => n().update(Do(s)).digest(),
    u = n();
  return (a.outputLen = u.outputLen), (a.blockLen = u.blockLen), (a.create = () => n()), a;
}
class Mp extends Tp {
  constructor(a, u) {
    super(), (this.finished = !1), (this.destroyed = !1), W1(a);
    const s = Do(u);
    if (((this.iHash = a.create()), typeof this.iHash.update != 'function'))
      throw new Error('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const c = this.blockLen,
      m = new Uint8Array(c);
    m.set(s.length > c ? a.create().update(s).digest() : s);
    for (let h = 0; h < m.length; h++) m[h] ^= 54;
    this.iHash.update(m), (this.oHash = a.create());
    for (let h = 0; h < m.length; h++) m[h] ^= 106;
    this.oHash.update(m), m.fill(0);
  }
  update(a) {
    return bs(this), this.iHash.update(a), this;
  }
  digestInto(a) {
    bs(this),
      Uo(a, this.outputLen),
      (this.finished = !0),
      this.iHash.digestInto(a),
      this.oHash.update(a),
      this.oHash.digestInto(a),
      this.destroy();
  }
  digest() {
    const a = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(a), a;
  }
  _cloneInto(a) {
    a || (a = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: u, iHash: s, finished: c, destroyed: m, blockLen: h, outputLen: o } = this;
    return (
      (a = a),
      (a.finished = c),
      (a.destroyed = m),
      (a.blockLen = h),
      (a.outputLen = o),
      (a.oHash = u._cloneInto(a.oHash)),
      (a.iHash = s._cloneInto(a.iHash)),
      a
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const Bp = (n, a, u) => new Mp(n, a).update(u).digest();
Bp.create = (n, a) => new Mp(n, a);
function rv(n, a, u, s) {
  if (typeof n.setBigUint64 == 'function') return n.setBigUint64(a, u, s);
  const c = BigInt(32),
    m = BigInt(4294967295),
    h = Number((u >> c) & m),
    o = Number(u & m),
    S = s ? 4 : 0,
    E = s ? 0 : 4;
  n.setUint32(a + S, h, s), n.setUint32(a + E, o, s);
}
function nv(n, a, u) {
  return (n & a) ^ (~n & u);
}
function iv(n, a, u) {
  return (n & a) ^ (n & u) ^ (a & u);
}
class av extends Tp {
  constructor(a, u, s, c) {
    super(),
      (this.blockLen = a),
      (this.outputLen = u),
      (this.padOffset = s),
      (this.isLE = c),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(a)),
      (this.view = eo(this.buffer));
  }
  update(a) {
    bs(this);
    const { view: u, buffer: s, blockLen: c } = this;
    a = Do(a);
    const m = a.length;
    for (let h = 0; h < m; ) {
      const o = Math.min(c - this.pos, m - h);
      if (o === c) {
        const S = eo(a);
        for (; c <= m - h; h += c) this.process(S, h);
        continue;
      }
      s.set(a.subarray(h, h + o), this.pos),
        (this.pos += o),
        (h += o),
        this.pos === c && (this.process(u, 0), (this.pos = 0));
    }
    return (this.length += a.length), this.roundClean(), this;
  }
  digestInto(a) {
    bs(this), P1(a, this), (this.finished = !0);
    const { buffer: u, view: s, blockLen: c, isLE: m } = this;
    let { pos: h } = this;
    (u[h++] = 128), this.buffer.subarray(h).fill(0), this.padOffset > c - h && (this.process(s, 0), (h = 0));
    for (let v = h; v < c; v++) u[v] = 0;
    rv(s, c - 8, BigInt(this.length * 8), m), this.process(s, 0);
    const o = eo(a),
      S = this.outputLen;
    if (S % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const E = S / 4,
      U = this.get();
    if (E > U.length) throw new Error('_sha2: outputLen bigger than state');
    for (let v = 0; v < E; v++) o.setUint32(4 * v, U[v], m);
  }
  digest() {
    const { buffer: a, outputLen: u } = this;
    this.digestInto(a);
    const s = a.slice(0, u);
    return this.destroy(), s;
  }
  _cloneInto(a) {
    a || (a = new this.constructor()), a.set(...this.get());
    const { blockLen: u, buffer: s, length: c, finished: m, destroyed: h, pos: o } = this;
    return (a.length = c), (a.pos = o), (a.finished = m), (a.destroyed = h), c % u && a.buffer.set(s), a;
  }
}
const uv = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
    310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078,
    604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
    3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
    2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
    275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222,
    2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
  ]),
  oi = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
  hi = new Uint32Array(64);
class lv extends av {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = oi[0] | 0),
      (this.B = oi[1] | 0),
      (this.C = oi[2] | 0),
      (this.D = oi[3] | 0),
      (this.E = oi[4] | 0),
      (this.F = oi[5] | 0),
      (this.G = oi[6] | 0),
      (this.H = oi[7] | 0);
  }
  get() {
    const { A: a, B: u, C: s, D: c, E: m, F: h, G: o, H: S } = this;
    return [a, u, s, c, m, h, o, S];
  }
  set(a, u, s, c, m, h, o, S) {
    (this.A = a | 0),
      (this.B = u | 0),
      (this.C = s | 0),
      (this.D = c | 0),
      (this.E = m | 0),
      (this.F = h | 0),
      (this.G = o | 0),
      (this.H = S | 0);
  }
  process(a, u) {
    for (let v = 0; v < 16; v++, u += 4) hi[v] = a.getUint32(u, !1);
    for (let v = 16; v < 64; v++) {
      const x = hi[v - 15],
        N = hi[v - 2],
        te = dn(x, 7) ^ dn(x, 18) ^ (x >>> 3),
        he = dn(N, 17) ^ dn(N, 19) ^ (N >>> 10);
      hi[v] = (he + hi[v - 7] + te + hi[v - 16]) | 0;
    }
    let { A: s, B: c, C: m, D: h, E: o, F: S, G: E, H: U } = this;
    for (let v = 0; v < 64; v++) {
      const x = dn(o, 6) ^ dn(o, 11) ^ dn(o, 25),
        N = (U + x + nv(o, S, E) + uv[v] + hi[v]) | 0,
        he = ((dn(s, 2) ^ dn(s, 13) ^ dn(s, 22)) + iv(s, c, m)) | 0;
      (U = E), (E = S), (S = o), (o = (h + N) | 0), (h = m), (m = c), (c = s), (s = (N + he) | 0);
    }
    (s = (s + this.A) | 0),
      (c = (c + this.B) | 0),
      (m = (m + this.C) | 0),
      (h = (h + this.D) | 0),
      (o = (o + this.E) | 0),
      (S = (S + this.F) | 0),
      (E = (E + this.G) | 0),
      (U = (U + this.H) | 0),
      this.set(s, c, m, h, o, S, E, U);
  }
  roundClean() {
    hi.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Up = tv(() => new lv());
var to = {},
  ro = {},
  Tu = {},
  Bm;
function sv() {
  if (Bm) return Tu;
  (Bm = 1), (Tu.byteLength = o), (Tu.toByteArray = E), (Tu.fromByteArray = x);
  for (
    var n = [],
      a = [],
      u = typeof Uint8Array < 'u' ? Uint8Array : Array,
      s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      c = 0,
      m = s.length;
    c < m;
    ++c
  )
    (n[c] = s[c]), (a[s.charCodeAt(c)] = c);
  (a[45] = 62), (a[95] = 63);
  function h(N) {
    var te = N.length;
    if (te % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    var he = N.indexOf('=');
    he === -1 && (he = te);
    var ge = he === te ? 0 : 4 - (he % 4);
    return [he, ge];
  }
  function o(N) {
    var te = h(N),
      he = te[0],
      ge = te[1];
    return ((he + ge) * 3) / 4 - ge;
  }
  function S(N, te, he) {
    return ((te + he) * 3) / 4 - he;
  }
  function E(N) {
    var te,
      he = h(N),
      ge = he[0],
      ve = he[1],
      Q = new u(S(N, ge, ve)),
      je = 0,
      We = ve > 0 ? ge - 4 : ge,
      _e;
    for (_e = 0; _e < We; _e += 4)
      (te =
        (a[N.charCodeAt(_e)] << 18) |
        (a[N.charCodeAt(_e + 1)] << 12) |
        (a[N.charCodeAt(_e + 2)] << 6) |
        a[N.charCodeAt(_e + 3)]),
        (Q[je++] = (te >> 16) & 255),
        (Q[je++] = (te >> 8) & 255),
        (Q[je++] = te & 255);
    return (
      ve === 2 && ((te = (a[N.charCodeAt(_e)] << 2) | (a[N.charCodeAt(_e + 1)] >> 4)), (Q[je++] = te & 255)),
      ve === 1 &&
        ((te = (a[N.charCodeAt(_e)] << 10) | (a[N.charCodeAt(_e + 1)] << 4) | (a[N.charCodeAt(_e + 2)] >> 2)),
        (Q[je++] = (te >> 8) & 255),
        (Q[je++] = te & 255)),
      Q
    );
  }
  function U(N) {
    return n[(N >> 18) & 63] + n[(N >> 12) & 63] + n[(N >> 6) & 63] + n[N & 63];
  }
  function v(N, te, he) {
    for (var ge, ve = [], Q = te; Q < he; Q += 3)
      (ge = ((N[Q] << 16) & 16711680) + ((N[Q + 1] << 8) & 65280) + (N[Q + 2] & 255)), ve.push(U(ge));
    return ve.join('');
  }
  function x(N) {
    for (var te, he = N.length, ge = he % 3, ve = [], Q = 16383, je = 0, We = he - ge; je < We; je += Q)
      ve.push(v(N, je, je + Q > We ? We : je + Q));
    return (
      ge === 1
        ? ((te = N[he - 1]), ve.push(n[te >> 2] + n[(te << 4) & 63] + '=='))
        : ge === 2 &&
          ((te = (N[he - 2] << 8) + N[he - 1]), ve.push(n[te >> 10] + n[(te >> 4) & 63] + n[(te << 2) & 63] + '=')),
      ve.join('')
    );
  }
  return Tu;
}
var ls = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var Um;
function Dp() {
  return (
    Um ||
      ((Um = 1),
      (ls.read = function (n, a, u, s, c) {
        var m,
          h,
          o = c * 8 - s - 1,
          S = (1 << o) - 1,
          E = S >> 1,
          U = -7,
          v = u ? c - 1 : 0,
          x = u ? -1 : 1,
          N = n[a + v];
        for (v += x, m = N & ((1 << -U) - 1), N >>= -U, U += o; U > 0; m = m * 256 + n[a + v], v += x, U -= 8);
        for (h = m & ((1 << -U) - 1), m >>= -U, U += s; U > 0; h = h * 256 + n[a + v], v += x, U -= 8);
        if (m === 0) m = 1 - E;
        else {
          if (m === S) return h ? NaN : (N ? -1 : 1) * (1 / 0);
          (h = h + Math.pow(2, s)), (m = m - E);
        }
        return (N ? -1 : 1) * h * Math.pow(2, m - s);
      }),
      (ls.write = function (n, a, u, s, c, m) {
        var h,
          o,
          S,
          E = m * 8 - c - 1,
          U = (1 << E) - 1,
          v = U >> 1,
          x = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          N = s ? 0 : m - 1,
          te = s ? 1 : -1,
          he = a < 0 || (a === 0 && 1 / a < 0) ? 1 : 0;
        for (
          a = Math.abs(a),
            isNaN(a) || a === 1 / 0
              ? ((o = isNaN(a) ? 1 : 0), (h = U))
              : ((h = Math.floor(Math.log(a) / Math.LN2)),
                a * (S = Math.pow(2, -h)) < 1 && (h--, (S *= 2)),
                h + v >= 1 ? (a += x / S) : (a += x * Math.pow(2, 1 - v)),
                a * S >= 2 && (h++, (S /= 2)),
                h + v >= U
                  ? ((o = 0), (h = U))
                  : h + v >= 1
                    ? ((o = (a * S - 1) * Math.pow(2, c)), (h = h + v))
                    : ((o = a * Math.pow(2, v - 1) * Math.pow(2, c)), (h = 0)));
          c >= 8;
          n[u + N] = o & 255, N += te, o /= 256, c -= 8
        );
        for (h = (h << c) | o, E += c; E > 0; n[u + N] = h & 255, N += te, h /= 256, E -= 8);
        n[u + N - te] |= he * 128;
      })),
    ls
  );
}
var Dm;
function Lu() {
  return (
    Dm ||
      ((Dm = 1),
      (function (n) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */ const a = sv(),
          u = Dp(),
          s =
            typeof Symbol == 'function' && typeof Symbol.for == 'function'
              ? Symbol.for('nodejs.util.inspect.custom')
              : null;
        (n.Buffer = o), (n.SlowBuffer = Q), (n.INSPECT_MAX_BYTES = 50);
        const c = 2147483647;
        (n.kMaxLength = c),
          (o.TYPED_ARRAY_SUPPORT = m()),
          !o.TYPED_ARRAY_SUPPORT &&
            typeof console < 'u' &&
            typeof console.error == 'function' &&
            console.error(
              'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
            );
        function m() {
          try {
            const b = new Uint8Array(1),
              d = {
                foo: function () {
                  return 42;
                }
              };
            return Object.setPrototypeOf(d, Uint8Array.prototype), Object.setPrototypeOf(b, d), b.foo() === 42;
          } catch {
            return !1;
          }
        }
        Object.defineProperty(o.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (o.isBuffer(this)) return this.buffer;
          }
        }),
          Object.defineProperty(o.prototype, 'offset', {
            enumerable: !0,
            get: function () {
              if (o.isBuffer(this)) return this.byteOffset;
            }
          });
        function h(b) {
          if (b > c) throw new RangeError('The value "' + b + '" is invalid for option "size"');
          const d = new Uint8Array(b);
          return Object.setPrototypeOf(d, o.prototype), d;
        }
        function o(b, d, p) {
          if (typeof b == 'number') {
            if (typeof d == 'string')
              throw new TypeError('The "string" argument must be of type string. Received type number');
            return v(b);
          }
          return S(b, d, p);
        }
        o.poolSize = 8192;
        function S(b, d, p) {
          if (typeof b == 'string') return x(b, d);
          if (ArrayBuffer.isView(b)) return te(b);
          if (b == null)
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof b
            );
          if (
            me(b, ArrayBuffer) ||
            (b && me(b.buffer, ArrayBuffer)) ||
            (typeof SharedArrayBuffer < 'u' && (me(b, SharedArrayBuffer) || (b && me(b.buffer, SharedArrayBuffer))))
          )
            return he(b, d, p);
          if (typeof b == 'number')
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          const L = b.valueOf && b.valueOf();
          if (L != null && L !== b) return o.from(L, d, p);
          const ee = ge(b);
          if (ee) return ee;
          if (typeof Symbol < 'u' && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == 'function')
            return o.from(b[Symbol.toPrimitive]('string'), d, p);
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof b
          );
        }
        (o.from = function (b, d, p) {
          return S(b, d, p);
        }),
          Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(o, Uint8Array);
        function E(b) {
          if (typeof b != 'number') throw new TypeError('"size" argument must be of type number');
          if (b < 0) throw new RangeError('The value "' + b + '" is invalid for option "size"');
        }
        function U(b, d, p) {
          return E(b), b <= 0 ? h(b) : d !== void 0 ? (typeof p == 'string' ? h(b).fill(d, p) : h(b).fill(d)) : h(b);
        }
        o.alloc = function (b, d, p) {
          return U(b, d, p);
        };
        function v(b) {
          return E(b), h(b < 0 ? 0 : ve(b) | 0);
        }
        (o.allocUnsafe = function (b) {
          return v(b);
        }),
          (o.allocUnsafeSlow = function (b) {
            return v(b);
          });
        function x(b, d) {
          if (((typeof d != 'string' || d === '') && (d = 'utf8'), !o.isEncoding(d)))
            throw new TypeError('Unknown encoding: ' + d);
          const p = je(b, d) | 0;
          let L = h(p);
          const ee = L.write(b, d);
          return ee !== p && (L = L.slice(0, ee)), L;
        }
        function N(b) {
          const d = b.length < 0 ? 0 : ve(b.length) | 0,
            p = h(d);
          for (let L = 0; L < d; L += 1) p[L] = b[L] & 255;
          return p;
        }
        function te(b) {
          if (me(b, Uint8Array)) {
            const d = new Uint8Array(b);
            return he(d.buffer, d.byteOffset, d.byteLength);
          }
          return N(b);
        }
        function he(b, d, p) {
          if (d < 0 || b.byteLength < d) throw new RangeError('"offset" is outside of buffer bounds');
          if (b.byteLength < d + (p || 0)) throw new RangeError('"length" is outside of buffer bounds');
          let L;
          return (
            d === void 0 && p === void 0
              ? (L = new Uint8Array(b))
              : p === void 0
                ? (L = new Uint8Array(b, d))
                : (L = new Uint8Array(b, d, p)),
            Object.setPrototypeOf(L, o.prototype),
            L
          );
        }
        function ge(b) {
          if (o.isBuffer(b)) {
            const d = ve(b.length) | 0,
              p = h(d);
            return p.length === 0 || b.copy(p, 0, 0, d), p;
          }
          if (b.length !== void 0) return typeof b.length != 'number' || ye(b.length) ? h(0) : N(b);
          if (b.type === 'Buffer' && Array.isArray(b.data)) return N(b.data);
        }
        function ve(b) {
          if (b >= c)
            throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + c.toString(16) + ' bytes');
          return b | 0;
        }
        function Q(b) {
          return +b != b && (b = 0), o.alloc(+b);
        }
        (o.isBuffer = function (d) {
          return d != null && d._isBuffer === !0 && d !== o.prototype;
        }),
          (o.compare = function (d, p) {
            if (
              (me(d, Uint8Array) && (d = o.from(d, d.offset, d.byteLength)),
              me(p, Uint8Array) && (p = o.from(p, p.offset, p.byteLength)),
              !o.isBuffer(d) || !o.isBuffer(p))
            )
              throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (d === p) return 0;
            let L = d.length,
              ee = p.length;
            for (let j = 0, q = Math.min(L, ee); j < q; ++j)
              if (d[j] !== p[j]) {
                (L = d[j]), (ee = p[j]);
                break;
              }
            return L < ee ? -1 : ee < L ? 1 : 0;
          }),
          (o.isEncoding = function (d) {
            switch (String(d).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (o.concat = function (d, p) {
            if (!Array.isArray(d)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (d.length === 0) return o.alloc(0);
            let L;
            if (p === void 0) for (p = 0, L = 0; L < d.length; ++L) p += d[L].length;
            const ee = o.allocUnsafe(p);
            let j = 0;
            for (L = 0; L < d.length; ++L) {
              let q = d[L];
              if (me(q, Uint8Array))
                j + q.length > ee.length
                  ? (o.isBuffer(q) || (q = o.from(q)), q.copy(ee, j))
                  : Uint8Array.prototype.set.call(ee, q, j);
              else if (o.isBuffer(q)) q.copy(ee, j);
              else throw new TypeError('"list" argument must be an Array of Buffers');
              j += q.length;
            }
            return ee;
          });
        function je(b, d) {
          if (o.isBuffer(b)) return b.length;
          if (ArrayBuffer.isView(b) || me(b, ArrayBuffer)) return b.byteLength;
          if (typeof b != 'string')
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
            );
          const p = b.length,
            L = arguments.length > 2 && arguments[2] === !0;
          if (!L && p === 0) return 0;
          let ee = !1;
          for (;;)
            switch (d) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return p;
              case 'utf8':
              case 'utf-8':
                return re(b).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return p * 2;
              case 'hex':
                return p >>> 1;
              case 'base64':
                return I(b).length;
              default:
                if (ee) return L ? -1 : re(b).length;
                (d = ('' + d).toLowerCase()), (ee = !0);
            }
        }
        o.byteLength = je;
        function We(b, d, p) {
          let L = !1;
          if (
            ((d === void 0 || d < 0) && (d = 0),
            d > this.length ||
              ((p === void 0 || p > this.length) && (p = this.length), p <= 0) ||
              ((p >>>= 0), (d >>>= 0), p <= d))
          )
            return '';
          for (b || (b = 'utf8'); ; )
            switch (b) {
              case 'hex':
                return ue(this, d, p);
              case 'utf8':
              case 'utf-8':
                return X(this, d, p);
              case 'ascii':
                return G(this, d, p);
              case 'latin1':
              case 'binary':
                return k(this, d, p);
              case 'base64':
                return Y(this, d, p);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return R(this, d, p);
              default:
                if (L) throw new TypeError('Unknown encoding: ' + b);
                (b = (b + '').toLowerCase()), (L = !0);
            }
        }
        o.prototype._isBuffer = !0;
        function _e(b, d, p) {
          const L = b[d];
          (b[d] = b[p]), (b[p] = L);
        }
        (o.prototype.swap16 = function () {
          const d = this.length;
          if (d % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (let p = 0; p < d; p += 2) _e(this, p, p + 1);
          return this;
        }),
          (o.prototype.swap32 = function () {
            const d = this.length;
            if (d % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (let p = 0; p < d; p += 4) _e(this, p, p + 3), _e(this, p + 1, p + 2);
            return this;
          }),
          (o.prototype.swap64 = function () {
            const d = this.length;
            if (d % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (let p = 0; p < d; p += 8)
              _e(this, p, p + 7), _e(this, p + 1, p + 6), _e(this, p + 2, p + 5), _e(this, p + 3, p + 4);
            return this;
          }),
          (o.prototype.toString = function () {
            const d = this.length;
            return d === 0 ? '' : arguments.length === 0 ? X(this, 0, d) : We.apply(this, arguments);
          }),
          (o.prototype.toLocaleString = o.prototype.toString),
          (o.prototype.equals = function (d) {
            if (!o.isBuffer(d)) throw new TypeError('Argument must be a Buffer');
            return this === d ? !0 : o.compare(this, d) === 0;
          }),
          (o.prototype.inspect = function () {
            let d = '';
            const p = n.INSPECT_MAX_BYTES;
            return (
              (d = this.toString('hex', 0, p)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
              this.length > p && (d += ' ... '),
              '<Buffer ' + d + '>'
            );
          }),
          s && (o.prototype[s] = o.prototype.inspect),
          (o.prototype.compare = function (d, p, L, ee, j) {
            if ((me(d, Uint8Array) && (d = o.from(d, d.offset, d.byteLength)), !o.isBuffer(d)))
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof d
              );
            if (
              (p === void 0 && (p = 0),
              L === void 0 && (L = d ? d.length : 0),
              ee === void 0 && (ee = 0),
              j === void 0 && (j = this.length),
              p < 0 || L > d.length || ee < 0 || j > this.length)
            )
              throw new RangeError('out of range index');
            if (ee >= j && p >= L) return 0;
            if (ee >= j) return -1;
            if (p >= L) return 1;
            if (((p >>>= 0), (L >>>= 0), (ee >>>= 0), (j >>>= 0), this === d)) return 0;
            let q = j - ee,
              se = L - p;
            const xe = Math.min(q, se),
              Be = this.slice(ee, j),
              Ce = d.slice(p, L);
            for (let Pe = 0; Pe < xe; ++Pe)
              if (Be[Pe] !== Ce[Pe]) {
                (q = Be[Pe]), (se = Ce[Pe]);
                break;
              }
            return q < se ? -1 : se < q ? 1 : 0;
          });
        function Ae(b, d, p, L, ee) {
          if (b.length === 0) return -1;
          if (
            (typeof p == 'string'
              ? ((L = p), (p = 0))
              : p > 2147483647
                ? (p = 2147483647)
                : p < -2147483648 && (p = -2147483648),
            (p = +p),
            ye(p) && (p = ee ? 0 : b.length - 1),
            p < 0 && (p = b.length + p),
            p >= b.length)
          ) {
            if (ee) return -1;
            p = b.length - 1;
          } else if (p < 0)
            if (ee) p = 0;
            else return -1;
          if ((typeof d == 'string' && (d = o.from(d, L)), o.isBuffer(d)))
            return d.length === 0 ? -1 : Re(b, d, p, L, ee);
          if (typeof d == 'number')
            return (
              (d = d & 255),
              typeof Uint8Array.prototype.indexOf == 'function'
                ? ee
                  ? Uint8Array.prototype.indexOf.call(b, d, p)
                  : Uint8Array.prototype.lastIndexOf.call(b, d, p)
                : Re(b, [d], p, L, ee)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function Re(b, d, p, L, ee) {
          let j = 1,
            q = b.length,
            se = d.length;
          if (
            L !== void 0 &&
            ((L = String(L).toLowerCase()), L === 'ucs2' || L === 'ucs-2' || L === 'utf16le' || L === 'utf-16le')
          ) {
            if (b.length < 2 || d.length < 2) return -1;
            (j = 2), (q /= 2), (se /= 2), (p /= 2);
          }
          function xe(Ce, Pe) {
            return j === 1 ? Ce[Pe] : Ce.readUInt16BE(Pe * j);
          }
          let Be;
          if (ee) {
            let Ce = -1;
            for (Be = p; Be < q; Be++)
              if (xe(b, Be) === xe(d, Ce === -1 ? 0 : Be - Ce)) {
                if ((Ce === -1 && (Ce = Be), Be - Ce + 1 === se)) return Ce * j;
              } else Ce !== -1 && (Be -= Be - Ce), (Ce = -1);
          } else
            for (p + se > q && (p = q - se), Be = p; Be >= 0; Be--) {
              let Ce = !0;
              for (let Pe = 0; Pe < se; Pe++)
                if (xe(b, Be + Pe) !== xe(d, Pe)) {
                  Ce = !1;
                  break;
                }
              if (Ce) return Be;
            }
          return -1;
        }
        (o.prototype.includes = function (d, p, L) {
          return this.indexOf(d, p, L) !== -1;
        }),
          (o.prototype.indexOf = function (d, p, L) {
            return Ae(this, d, p, L, !0);
          }),
          (o.prototype.lastIndexOf = function (d, p, L) {
            return Ae(this, d, p, L, !1);
          });
        function y(b, d, p, L) {
          p = Number(p) || 0;
          const ee = b.length - p;
          L ? ((L = Number(L)), L > ee && (L = ee)) : (L = ee);
          const j = d.length;
          L > j / 2 && (L = j / 2);
          let q;
          for (q = 0; q < L; ++q) {
            const se = parseInt(d.substr(q * 2, 2), 16);
            if (ye(se)) return q;
            b[p + q] = se;
          }
          return q;
        }
        function _(b, d, p, L) {
          return J(re(d, b.length - p), b, p, L);
        }
        function A(b, d, p, L) {
          return J(O(d), b, p, L);
        }
        function F(b, d, p, L) {
          return J(I(d), b, p, L);
        }
        function V(b, d, p, L) {
          return J(z(d, b.length - p), b, p, L);
        }
        (o.prototype.write = function (d, p, L, ee) {
          if (p === void 0) (ee = 'utf8'), (L = this.length), (p = 0);
          else if (L === void 0 && typeof p == 'string') (ee = p), (L = this.length), (p = 0);
          else if (isFinite(p))
            (p = p >>> 0), isFinite(L) ? ((L = L >>> 0), ee === void 0 && (ee = 'utf8')) : ((ee = L), (L = void 0));
          else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          const j = this.length - p;
          if (((L === void 0 || L > j) && (L = j), (d.length > 0 && (L < 0 || p < 0)) || p > this.length))
            throw new RangeError('Attempt to write outside buffer bounds');
          ee || (ee = 'utf8');
          let q = !1;
          for (;;)
            switch (ee) {
              case 'hex':
                return y(this, d, p, L);
              case 'utf8':
              case 'utf-8':
                return _(this, d, p, L);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return A(this, d, p, L);
              case 'base64':
                return F(this, d, p, L);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return V(this, d, p, L);
              default:
                if (q) throw new TypeError('Unknown encoding: ' + ee);
                (ee = ('' + ee).toLowerCase()), (q = !0);
            }
        }),
          (o.prototype.toJSON = function () {
            return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        function Y(b, d, p) {
          return d === 0 && p === b.length ? a.fromByteArray(b) : a.fromByteArray(b.slice(d, p));
        }
        function X(b, d, p) {
          p = Math.min(b.length, p);
          const L = [];
          let ee = d;
          for (; ee < p; ) {
            const j = b[ee];
            let q = null,
              se = j > 239 ? 4 : j > 223 ? 3 : j > 191 ? 2 : 1;
            if (ee + se <= p) {
              let xe, Be, Ce, Pe;
              switch (se) {
                case 1:
                  j < 128 && (q = j);
                  break;
                case 2:
                  (xe = b[ee + 1]), (xe & 192) === 128 && ((Pe = ((j & 31) << 6) | (xe & 63)), Pe > 127 && (q = Pe));
                  break;
                case 3:
                  (xe = b[ee + 1]),
                    (Be = b[ee + 2]),
                    (xe & 192) === 128 &&
                      (Be & 192) === 128 &&
                      ((Pe = ((j & 15) << 12) | ((xe & 63) << 6) | (Be & 63)),
                      Pe > 2047 && (Pe < 55296 || Pe > 57343) && (q = Pe));
                  break;
                case 4:
                  (xe = b[ee + 1]),
                    (Be = b[ee + 2]),
                    (Ce = b[ee + 3]),
                    (xe & 192) === 128 &&
                      (Be & 192) === 128 &&
                      (Ce & 192) === 128 &&
                      ((Pe = ((j & 15) << 18) | ((xe & 63) << 12) | ((Be & 63) << 6) | (Ce & 63)),
                      Pe > 65535 && Pe < 1114112 && (q = Pe));
              }
            }
            q === null
              ? ((q = 65533), (se = 1))
              : q > 65535 && ((q -= 65536), L.push(((q >>> 10) & 1023) | 55296), (q = 56320 | (q & 1023))),
              L.push(q),
              (ee += se);
          }
          return T(L);
        }
        const C = 4096;
        function T(b) {
          const d = b.length;
          if (d <= C) return String.fromCharCode.apply(String, b);
          let p = '',
            L = 0;
          for (; L < d; ) p += String.fromCharCode.apply(String, b.slice(L, (L += C)));
          return p;
        }
        function G(b, d, p) {
          let L = '';
          p = Math.min(b.length, p);
          for (let ee = d; ee < p; ++ee) L += String.fromCharCode(b[ee] & 127);
          return L;
        }
        function k(b, d, p) {
          let L = '';
          p = Math.min(b.length, p);
          for (let ee = d; ee < p; ++ee) L += String.fromCharCode(b[ee]);
          return L;
        }
        function ue(b, d, p) {
          const L = b.length;
          (!d || d < 0) && (d = 0), (!p || p < 0 || p > L) && (p = L);
          let ee = '';
          for (let j = d; j < p; ++j) ee += Me[b[j]];
          return ee;
        }
        function R(b, d, p) {
          const L = b.slice(d, p);
          let ee = '';
          for (let j = 0; j < L.length - 1; j += 2) ee += String.fromCharCode(L[j] + L[j + 1] * 256);
          return ee;
        }
        o.prototype.slice = function (d, p) {
          const L = this.length;
          (d = ~~d),
            (p = p === void 0 ? L : ~~p),
            d < 0 ? ((d += L), d < 0 && (d = 0)) : d > L && (d = L),
            p < 0 ? ((p += L), p < 0 && (p = 0)) : p > L && (p = L),
            p < d && (p = d);
          const ee = this.subarray(d, p);
          return Object.setPrototypeOf(ee, o.prototype), ee;
        };
        function P(b, d, p) {
          if (b % 1 !== 0 || b < 0) throw new RangeError('offset is not uint');
          if (b + d > p) throw new RangeError('Trying to access beyond buffer length');
        }
        (o.prototype.readUintLE = o.prototype.readUIntLE =
          function (d, p, L) {
            (d = d >>> 0), (p = p >>> 0), L || P(d, p, this.length);
            let ee = this[d],
              j = 1,
              q = 0;
            for (; ++q < p && (j *= 256); ) ee += this[d + q] * j;
            return ee;
          }),
          (o.prototype.readUintBE = o.prototype.readUIntBE =
            function (d, p, L) {
              (d = d >>> 0), (p = p >>> 0), L || P(d, p, this.length);
              let ee = this[d + --p],
                j = 1;
              for (; p > 0 && (j *= 256); ) ee += this[d + --p] * j;
              return ee;
            }),
          (o.prototype.readUint8 = o.prototype.readUInt8 =
            function (d, p) {
              return (d = d >>> 0), p || P(d, 1, this.length), this[d];
            }),
          (o.prototype.readUint16LE = o.prototype.readUInt16LE =
            function (d, p) {
              return (d = d >>> 0), p || P(d, 2, this.length), this[d] | (this[d + 1] << 8);
            }),
          (o.prototype.readUint16BE = o.prototype.readUInt16BE =
            function (d, p) {
              return (d = d >>> 0), p || P(d, 2, this.length), (this[d] << 8) | this[d + 1];
            }),
          (o.prototype.readUint32LE = o.prototype.readUInt32LE =
            function (d, p) {
              return (
                (d = d >>> 0),
                p || P(d, 4, this.length),
                (this[d] | (this[d + 1] << 8) | (this[d + 2] << 16)) + this[d + 3] * 16777216
              );
            }),
          (o.prototype.readUint32BE = o.prototype.readUInt32BE =
            function (d, p) {
              return (
                (d = d >>> 0),
                p || P(d, 4, this.length),
                this[d] * 16777216 + ((this[d + 1] << 16) | (this[d + 2] << 8) | this[d + 3])
              );
            }),
          (o.prototype.readBigUInt64LE = ze(function (d) {
            (d = d >>> 0), ie(d, 'offset');
            const p = this[d],
              L = this[d + 7];
            (p === void 0 || L === void 0) && W(d, this.length - 8);
            const ee = p + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24,
              j = this[++d] + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + L * 2 ** 24;
            return BigInt(ee) + (BigInt(j) << BigInt(32));
          })),
          (o.prototype.readBigUInt64BE = ze(function (d) {
            (d = d >>> 0), ie(d, 'offset');
            const p = this[d],
              L = this[d + 7];
            (p === void 0 || L === void 0) && W(d, this.length - 8);
            const ee = p * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d],
              j = this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + L;
            return (BigInt(ee) << BigInt(32)) + BigInt(j);
          })),
          (o.prototype.readIntLE = function (d, p, L) {
            (d = d >>> 0), (p = p >>> 0), L || P(d, p, this.length);
            let ee = this[d],
              j = 1,
              q = 0;
            for (; ++q < p && (j *= 256); ) ee += this[d + q] * j;
            return (j *= 128), ee >= j && (ee -= Math.pow(2, 8 * p)), ee;
          }),
          (o.prototype.readIntBE = function (d, p, L) {
            (d = d >>> 0), (p = p >>> 0), L || P(d, p, this.length);
            let ee = p,
              j = 1,
              q = this[d + --ee];
            for (; ee > 0 && (j *= 256); ) q += this[d + --ee] * j;
            return (j *= 128), q >= j && (q -= Math.pow(2, 8 * p)), q;
          }),
          (o.prototype.readInt8 = function (d, p) {
            return (d = d >>> 0), p || P(d, 1, this.length), this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d];
          }),
          (o.prototype.readInt16LE = function (d, p) {
            (d = d >>> 0), p || P(d, 2, this.length);
            const L = this[d] | (this[d + 1] << 8);
            return L & 32768 ? L | 4294901760 : L;
          }),
          (o.prototype.readInt16BE = function (d, p) {
            (d = d >>> 0), p || P(d, 2, this.length);
            const L = this[d + 1] | (this[d] << 8);
            return L & 32768 ? L | 4294901760 : L;
          }),
          (o.prototype.readInt32LE = function (d, p) {
            return (
              (d = d >>> 0),
              p || P(d, 4, this.length),
              this[d] | (this[d + 1] << 8) | (this[d + 2] << 16) | (this[d + 3] << 24)
            );
          }),
          (o.prototype.readInt32BE = function (d, p) {
            return (
              (d = d >>> 0),
              p || P(d, 4, this.length),
              (this[d] << 24) | (this[d + 1] << 16) | (this[d + 2] << 8) | this[d + 3]
            );
          }),
          (o.prototype.readBigInt64LE = ze(function (d) {
            (d = d >>> 0), ie(d, 'offset');
            const p = this[d],
              L = this[d + 7];
            (p === void 0 || L === void 0) && W(d, this.length - 8);
            const ee = this[d + 4] + this[d + 5] * 2 ** 8 + this[d + 6] * 2 ** 16 + (L << 24);
            return (
              (BigInt(ee) << BigInt(32)) + BigInt(p + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24)
            );
          })),
          (o.prototype.readBigInt64BE = ze(function (d) {
            (d = d >>> 0), ie(d, 'offset');
            const p = this[d],
              L = this[d + 7];
            (p === void 0 || L === void 0) && W(d, this.length - 8);
            const ee = (p << 24) + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d];
            return (
              (BigInt(ee) << BigInt(32)) + BigInt(this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + L)
            );
          })),
          (o.prototype.readFloatLE = function (d, p) {
            return (d = d >>> 0), p || P(d, 4, this.length), u.read(this, d, !0, 23, 4);
          }),
          (o.prototype.readFloatBE = function (d, p) {
            return (d = d >>> 0), p || P(d, 4, this.length), u.read(this, d, !1, 23, 4);
          }),
          (o.prototype.readDoubleLE = function (d, p) {
            return (d = d >>> 0), p || P(d, 8, this.length), u.read(this, d, !0, 52, 8);
          }),
          (o.prototype.readDoubleBE = function (d, p) {
            return (d = d >>> 0), p || P(d, 8, this.length), u.read(this, d, !1, 52, 8);
          });
        function be(b, d, p, L, ee, j) {
          if (!o.isBuffer(b)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (d > ee || d < j) throw new RangeError('"value" argument is out of bounds');
          if (p + L > b.length) throw new RangeError('Index out of range');
        }
        (o.prototype.writeUintLE = o.prototype.writeUIntLE =
          function (d, p, L, ee) {
            if (((d = +d), (p = p >>> 0), (L = L >>> 0), !ee)) {
              const se = Math.pow(2, 8 * L) - 1;
              be(this, d, p, L, se, 0);
            }
            let j = 1,
              q = 0;
            for (this[p] = d & 255; ++q < L && (j *= 256); ) this[p + q] = (d / j) & 255;
            return p + L;
          }),
          (o.prototype.writeUintBE = o.prototype.writeUIntBE =
            function (d, p, L, ee) {
              if (((d = +d), (p = p >>> 0), (L = L >>> 0), !ee)) {
                const se = Math.pow(2, 8 * L) - 1;
                be(this, d, p, L, se, 0);
              }
              let j = L - 1,
                q = 1;
              for (this[p + j] = d & 255; --j >= 0 && (q *= 256); ) this[p + j] = (d / q) & 255;
              return p + L;
            }),
          (o.prototype.writeUint8 = o.prototype.writeUInt8 =
            function (d, p, L) {
              return (d = +d), (p = p >>> 0), L || be(this, d, p, 1, 255, 0), (this[p] = d & 255), p + 1;
            }),
          (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
            function (d, p, L) {
              return (
                (d = +d),
                (p = p >>> 0),
                L || be(this, d, p, 2, 65535, 0),
                (this[p] = d & 255),
                (this[p + 1] = d >>> 8),
                p + 2
              );
            }),
          (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
            function (d, p, L) {
              return (
                (d = +d),
                (p = p >>> 0),
                L || be(this, d, p, 2, 65535, 0),
                (this[p] = d >>> 8),
                (this[p + 1] = d & 255),
                p + 2
              );
            }),
          (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
            function (d, p, L) {
              return (
                (d = +d),
                (p = p >>> 0),
                L || be(this, d, p, 4, 4294967295, 0),
                (this[p + 3] = d >>> 24),
                (this[p + 2] = d >>> 16),
                (this[p + 1] = d >>> 8),
                (this[p] = d & 255),
                p + 4
              );
            }),
          (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
            function (d, p, L) {
              return (
                (d = +d),
                (p = p >>> 0),
                L || be(this, d, p, 4, 4294967295, 0),
                (this[p] = d >>> 24),
                (this[p + 1] = d >>> 16),
                (this[p + 2] = d >>> 8),
                (this[p + 3] = d & 255),
                p + 4
              );
            });
        function de(b, d, p, L, ee) {
          Z(d, L, ee, b, p, 7);
          let j = Number(d & BigInt(4294967295));
          (b[p++] = j), (j = j >> 8), (b[p++] = j), (j = j >> 8), (b[p++] = j), (j = j >> 8), (b[p++] = j);
          let q = Number((d >> BigInt(32)) & BigInt(4294967295));
          return (b[p++] = q), (q = q >> 8), (b[p++] = q), (q = q >> 8), (b[p++] = q), (q = q >> 8), (b[p++] = q), p;
        }
        function w(b, d, p, L, ee) {
          Z(d, L, ee, b, p, 7);
          let j = Number(d & BigInt(4294967295));
          (b[p + 7] = j), (j = j >> 8), (b[p + 6] = j), (j = j >> 8), (b[p + 5] = j), (j = j >> 8), (b[p + 4] = j);
          let q = Number((d >> BigInt(32)) & BigInt(4294967295));
          return (
            (b[p + 3] = q), (q = q >> 8), (b[p + 2] = q), (q = q >> 8), (b[p + 1] = q), (q = q >> 8), (b[p] = q), p + 8
          );
        }
        (o.prototype.writeBigUInt64LE = ze(function (d, p = 0) {
          return de(this, d, p, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
          (o.prototype.writeBigUInt64BE = ze(function (d, p = 0) {
            return w(this, d, p, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (o.prototype.writeIntLE = function (d, p, L, ee) {
            if (((d = +d), (p = p >>> 0), !ee)) {
              const xe = Math.pow(2, 8 * L - 1);
              be(this, d, p, L, xe - 1, -xe);
            }
            let j = 0,
              q = 1,
              se = 0;
            for (this[p] = d & 255; ++j < L && (q *= 256); )
              d < 0 && se === 0 && this[p + j - 1] !== 0 && (se = 1), (this[p + j] = (((d / q) >> 0) - se) & 255);
            return p + L;
          }),
          (o.prototype.writeIntBE = function (d, p, L, ee) {
            if (((d = +d), (p = p >>> 0), !ee)) {
              const xe = Math.pow(2, 8 * L - 1);
              be(this, d, p, L, xe - 1, -xe);
            }
            let j = L - 1,
              q = 1,
              se = 0;
            for (this[p + j] = d & 255; --j >= 0 && (q *= 256); )
              d < 0 && se === 0 && this[p + j + 1] !== 0 && (se = 1), (this[p + j] = (((d / q) >> 0) - se) & 255);
            return p + L;
          }),
          (o.prototype.writeInt8 = function (d, p, L) {
            return (
              (d = +d),
              (p = p >>> 0),
              L || be(this, d, p, 1, 127, -128),
              d < 0 && (d = 255 + d + 1),
              (this[p] = d & 255),
              p + 1
            );
          }),
          (o.prototype.writeInt16LE = function (d, p, L) {
            return (
              (d = +d),
              (p = p >>> 0),
              L || be(this, d, p, 2, 32767, -32768),
              (this[p] = d & 255),
              (this[p + 1] = d >>> 8),
              p + 2
            );
          }),
          (o.prototype.writeInt16BE = function (d, p, L) {
            return (
              (d = +d),
              (p = p >>> 0),
              L || be(this, d, p, 2, 32767, -32768),
              (this[p] = d >>> 8),
              (this[p + 1] = d & 255),
              p + 2
            );
          }),
          (o.prototype.writeInt32LE = function (d, p, L) {
            return (
              (d = +d),
              (p = p >>> 0),
              L || be(this, d, p, 4, 2147483647, -2147483648),
              (this[p] = d & 255),
              (this[p + 1] = d >>> 8),
              (this[p + 2] = d >>> 16),
              (this[p + 3] = d >>> 24),
              p + 4
            );
          }),
          (o.prototype.writeInt32BE = function (d, p, L) {
            return (
              (d = +d),
              (p = p >>> 0),
              L || be(this, d, p, 4, 2147483647, -2147483648),
              d < 0 && (d = 4294967295 + d + 1),
              (this[p] = d >>> 24),
              (this[p + 1] = d >>> 16),
              (this[p + 2] = d >>> 8),
              (this[p + 3] = d & 255),
              p + 4
            );
          }),
          (o.prototype.writeBigInt64LE = ze(function (d, p = 0) {
            return de(this, d, p, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          })),
          (o.prototype.writeBigInt64BE = ze(function (d, p = 0) {
            return w(this, d, p, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          }));
        function Ue(b, d, p, L, ee, j) {
          if (p + L > b.length) throw new RangeError('Index out of range');
          if (p < 0) throw new RangeError('Index out of range');
        }
        function Oe(b, d, p, L, ee) {
          return (d = +d), (p = p >>> 0), ee || Ue(b, d, p, 4), u.write(b, d, p, L, 23, 4), p + 4;
        }
        (o.prototype.writeFloatLE = function (d, p, L) {
          return Oe(this, d, p, !0, L);
        }),
          (o.prototype.writeFloatBE = function (d, p, L) {
            return Oe(this, d, p, !1, L);
          });
        function Ke(b, d, p, L, ee) {
          return (d = +d), (p = p >>> 0), ee || Ue(b, d, p, 8), u.write(b, d, p, L, 52, 8), p + 8;
        }
        (o.prototype.writeDoubleLE = function (d, p, L) {
          return Ke(this, d, p, !0, L);
        }),
          (o.prototype.writeDoubleBE = function (d, p, L) {
            return Ke(this, d, p, !1, L);
          }),
          (o.prototype.copy = function (d, p, L, ee) {
            if (!o.isBuffer(d)) throw new TypeError('argument should be a Buffer');
            if (
              (L || (L = 0),
              !ee && ee !== 0 && (ee = this.length),
              p >= d.length && (p = d.length),
              p || (p = 0),
              ee > 0 && ee < L && (ee = L),
              ee === L || d.length === 0 || this.length === 0)
            )
              return 0;
            if (p < 0) throw new RangeError('targetStart out of bounds');
            if (L < 0 || L >= this.length) throw new RangeError('Index out of range');
            if (ee < 0) throw new RangeError('sourceEnd out of bounds');
            ee > this.length && (ee = this.length), d.length - p < ee - L && (ee = d.length - p + L);
            const j = ee - L;
            return (
              this === d && typeof Uint8Array.prototype.copyWithin == 'function'
                ? this.copyWithin(p, L, ee)
                : Uint8Array.prototype.set.call(d, this.subarray(L, ee), p),
              j
            );
          }),
          (o.prototype.fill = function (d, p, L, ee) {
            if (typeof d == 'string') {
              if (
                (typeof p == 'string'
                  ? ((ee = p), (p = 0), (L = this.length))
                  : typeof L == 'string' && ((ee = L), (L = this.length)),
                ee !== void 0 && typeof ee != 'string')
              )
                throw new TypeError('encoding must be a string');
              if (typeof ee == 'string' && !o.isEncoding(ee)) throw new TypeError('Unknown encoding: ' + ee);
              if (d.length === 1) {
                const q = d.charCodeAt(0);
                ((ee === 'utf8' && q < 128) || ee === 'latin1') && (d = q);
              }
            } else typeof d == 'number' ? (d = d & 255) : typeof d == 'boolean' && (d = Number(d));
            if (p < 0 || this.length < p || this.length < L) throw new RangeError('Out of range index');
            if (L <= p) return this;
            (p = p >>> 0), (L = L === void 0 ? this.length : L >>> 0), d || (d = 0);
            let j;
            if (typeof d == 'number') for (j = p; j < L; ++j) this[j] = d;
            else {
              const q = o.isBuffer(d) ? d : o.from(d, ee),
                se = q.length;
              if (se === 0) throw new TypeError('The value "' + d + '" is invalid for argument "value"');
              for (j = 0; j < L - p; ++j) this[j + p] = q[j % se];
            }
            return this;
          });
        const Ne = {};
        function De(b, d, p) {
          Ne[b] = class extends p {
            constructor() {
              super(),
                Object.defineProperty(this, 'message', {
                  value: d.apply(this, arguments),
                  writable: !0,
                  configurable: !0
                }),
                (this.name = `${this.name} [${b}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return b;
            }
            set code(ee) {
              Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: ee, writable: !0 });
            }
            toString() {
              return `${this.name} [${b}]: ${this.message}`;
            }
          };
        }
        De(
          'ERR_BUFFER_OUT_OF_BOUNDS',
          function (b) {
            return b ? `${b} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
          },
          RangeError
        ),
          De(
            'ERR_INVALID_ARG_TYPE',
            function (b, d) {
              return `The "${b}" argument must be of type number. Received type ${typeof d}`;
            },
            TypeError
          ),
          De(
            'ERR_OUT_OF_RANGE',
            function (b, d, p) {
              let L = `The value of "${b}" is out of range.`,
                ee = p;
              return (
                Number.isInteger(p) && Math.abs(p) > 2 ** 32
                  ? (ee = M(String(p)))
                  : typeof p == 'bigint' &&
                    ((ee = String(p)),
                    (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (ee = M(ee)),
                    (ee += 'n')),
                (L += ` It must be ${d}. Received ${ee}`),
                L
              );
            },
            RangeError
          );
        function M(b) {
          let d = '',
            p = b.length;
          const L = b[0] === '-' ? 1 : 0;
          for (; p >= L + 4; p -= 3) d = `_${b.slice(p - 3, p)}${d}`;
          return `${b.slice(0, p)}${d}`;
        }
        function D(b, d, p) {
          ie(d, 'offset'), (b[d] === void 0 || b[d + p] === void 0) && W(d, b.length - (p + 1));
        }
        function Z(b, d, p, L, ee, j) {
          if (b > p || b < d) {
            const q = typeof d == 'bigint' ? 'n' : '';
            let se;
            throw (
              (d === 0 || d === BigInt(0)
                ? (se = `>= 0${q} and < 2${q} ** ${(j + 1) * 8}${q}`)
                : (se = `>= -(2${q} ** ${(j + 1) * 8 - 1}${q}) and < 2 ** ${(j + 1) * 8 - 1}${q}`),
              new Ne.ERR_OUT_OF_RANGE('value', se, b))
            );
          }
          D(L, ee, j);
        }
        function ie(b, d) {
          if (typeof b != 'number') throw new Ne.ERR_INVALID_ARG_TYPE(d, 'number', b);
        }
        function W(b, d, p) {
          throw Math.floor(b) !== b
            ? (ie(b, p), new Ne.ERR_OUT_OF_RANGE('offset', 'an integer', b))
            : d < 0
              ? new Ne.ERR_BUFFER_OUT_OF_BOUNDS()
              : new Ne.ERR_OUT_OF_RANGE('offset', `>= 0 and <= ${d}`, b);
        }
        const ne = /[^+/0-9A-Za-z-_]/g;
        function ce(b) {
          if (((b = b.split('=')[0]), (b = b.trim().replace(ne, '')), b.length < 2)) return '';
          for (; b.length % 4 !== 0; ) b = b + '=';
          return b;
        }
        function re(b, d) {
          d = d || 1 / 0;
          let p;
          const L = b.length;
          let ee = null;
          const j = [];
          for (let q = 0; q < L; ++q) {
            if (((p = b.charCodeAt(q)), p > 55295 && p < 57344)) {
              if (!ee) {
                if (p > 56319) {
                  (d -= 3) > -1 && j.push(239, 191, 189);
                  continue;
                } else if (q + 1 === L) {
                  (d -= 3) > -1 && j.push(239, 191, 189);
                  continue;
                }
                ee = p;
                continue;
              }
              if (p < 56320) {
                (d -= 3) > -1 && j.push(239, 191, 189), (ee = p);
                continue;
              }
              p = (((ee - 55296) << 10) | (p - 56320)) + 65536;
            } else ee && (d -= 3) > -1 && j.push(239, 191, 189);
            if (((ee = null), p < 128)) {
              if ((d -= 1) < 0) break;
              j.push(p);
            } else if (p < 2048) {
              if ((d -= 2) < 0) break;
              j.push((p >> 6) | 192, (p & 63) | 128);
            } else if (p < 65536) {
              if ((d -= 3) < 0) break;
              j.push((p >> 12) | 224, ((p >> 6) & 63) | 128, (p & 63) | 128);
            } else if (p < 1114112) {
              if ((d -= 4) < 0) break;
              j.push((p >> 18) | 240, ((p >> 12) & 63) | 128, ((p >> 6) & 63) | 128, (p & 63) | 128);
            } else throw new Error('Invalid code point');
          }
          return j;
        }
        function O(b) {
          const d = [];
          for (let p = 0; p < b.length; ++p) d.push(b.charCodeAt(p) & 255);
          return d;
        }
        function z(b, d) {
          let p, L, ee;
          const j = [];
          for (let q = 0; q < b.length && !((d -= 2) < 0); ++q)
            (p = b.charCodeAt(q)), (L = p >> 8), (ee = p % 256), j.push(ee), j.push(L);
          return j;
        }
        function I(b) {
          return a.toByteArray(ce(b));
        }
        function J(b, d, p, L) {
          let ee;
          for (ee = 0; ee < L && !(ee + p >= d.length || ee >= b.length); ++ee) d[ee + p] = b[ee];
          return ee;
        }
        function me(b, d) {
          return (
            b instanceof d ||
            (b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === d.name)
          );
        }
        function ye(b) {
          return b !== b;
        }
        const Me = (function () {
          const b = '0123456789abcdef',
            d = new Array(256);
          for (let p = 0; p < 16; ++p) {
            const L = p * 16;
            for (let ee = 0; ee < 16; ++ee) d[L + ee] = b[p] + b[ee];
          }
          return d;
        })();
        function ze(b) {
          return typeof BigInt > 'u' ? tt : b;
        }
        function tt() {
          throw new Error('BigInt not supported');
        }
      })(ro)),
    ro
  );
}
var os = { exports: {} },
  cv = os.exports,
  Rm;
function Bs() {
  return (
    Rm ||
      ((Rm = 1),
      (function (n) {
        (function (a) {
          var u,
            s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            c = Math.ceil,
            m = Math.floor,
            h = '[BigNumber Error] ',
            o = h + 'Number primitive has more than 15 significant digits: ',
            S = 1e14,
            E = 14,
            U = 9007199254740991,
            v = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            x = 1e7,
            N = 1e9;
          function te(Ae) {
            var Re,
              y,
              _,
              A = (w.prototype = { constructor: w, toString: null, valueOf: null }),
              F = new w(1),
              V = 20,
              Y = 4,
              X = -7,
              C = 21,
              T = -1e7,
              G = 1e7,
              k = !1,
              ue = 1,
              R = 0,
              P = {
                prefix: '',
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ',',
                decimalSeparator: '.',
                fractionGroupSize: 0,
                fractionGroupSeparator: ' ',
                suffix: ''
              },
              be = '0123456789abcdefghijklmnopqrstuvwxyz',
              de = !0;
            function w(M, D) {
              var Z,
                ie,
                W,
                ne,
                ce,
                re,
                O,
                z,
                I = this;
              if (!(I instanceof w)) return new w(M, D);
              if (D == null) {
                if (M && M._isBigNumber === !0) {
                  (I.s = M.s),
                    !M.c || M.e > G
                      ? (I.c = I.e = null)
                      : M.e < T
                        ? (I.c = [(I.e = 0)])
                        : ((I.e = M.e), (I.c = M.c.slice()));
                  return;
                }
                if ((re = typeof M == 'number') && M * 0 == 0) {
                  if (((I.s = 1 / M < 0 ? ((M = -M), -1) : 1), M === ~~M)) {
                    for (ne = 0, ce = M; ce >= 10; ce /= 10, ne++);
                    ne > G ? (I.c = I.e = null) : ((I.e = ne), (I.c = [M]));
                    return;
                  }
                  z = String(M);
                } else {
                  if (!s.test((z = String(M)))) return _(I, z, re);
                  I.s = z.charCodeAt(0) == 45 ? ((z = z.slice(1)), -1) : 1;
                }
                (ne = z.indexOf('.')) > -1 && (z = z.replace('.', '')),
                  (ce = z.search(/e/i)) > 0
                    ? (ne < 0 && (ne = ce), (ne += +z.slice(ce + 1)), (z = z.substring(0, ce)))
                    : ne < 0 && (ne = z.length);
              } else {
                if ((Q(D, 2, be.length, 'Base'), D == 10 && de)) return (I = new w(M)), Ne(I, V + I.e + 1, Y);
                if (((z = String(M)), (re = typeof M == 'number'))) {
                  if (M * 0 != 0) return _(I, z, re, D);
                  if (
                    ((I.s = 1 / M < 0 ? ((z = z.slice(1)), -1) : 1), w.DEBUG && z.replace(/^0\.0*|\./, '').length > 15)
                  )
                    throw Error(o + M);
                } else I.s = z.charCodeAt(0) === 45 ? ((z = z.slice(1)), -1) : 1;
                for (Z = be.slice(0, D), ne = ce = 0, O = z.length; ce < O; ce++)
                  if (Z.indexOf((ie = z.charAt(ce))) < 0) {
                    if (ie == '.') {
                      if (ce > ne) {
                        ne = O;
                        continue;
                      }
                    } else if (
                      !W &&
                      ((z == z.toUpperCase() && (z = z.toLowerCase())) ||
                        (z == z.toLowerCase() && (z = z.toUpperCase())))
                    ) {
                      (W = !0), (ce = -1), (ne = 0);
                      continue;
                    }
                    return _(I, String(M), re, D);
                  }
                (re = !1),
                  (z = y(z, D, 10, I.s)),
                  (ne = z.indexOf('.')) > -1 ? (z = z.replace('.', '')) : (ne = z.length);
              }
              for (ce = 0; z.charCodeAt(ce) === 48; ce++);
              for (O = z.length; z.charCodeAt(--O) === 48; );
              if ((z = z.slice(ce, ++O))) {
                if (((O -= ce), re && w.DEBUG && O > 15 && (M > U || M !== m(M)))) throw Error(o + I.s * M);
                if ((ne = ne - ce - 1) > G) I.c = I.e = null;
                else if (ne < T) I.c = [(I.e = 0)];
                else {
                  if (((I.e = ne), (I.c = []), (ce = (ne + 1) % E), ne < 0 && (ce += E), ce < O)) {
                    for (ce && I.c.push(+z.slice(0, ce)), O -= E; ce < O; ) I.c.push(+z.slice(ce, (ce += E)));
                    ce = E - (z = z.slice(ce)).length;
                  } else ce -= O;
                  for (; ce--; z += '0');
                  I.c.push(+z);
                }
              } else I.c = [(I.e = 0)];
            }
            (w.clone = te),
              (w.ROUND_UP = 0),
              (w.ROUND_DOWN = 1),
              (w.ROUND_CEIL = 2),
              (w.ROUND_FLOOR = 3),
              (w.ROUND_HALF_UP = 4),
              (w.ROUND_HALF_DOWN = 5),
              (w.ROUND_HALF_EVEN = 6),
              (w.ROUND_HALF_CEIL = 7),
              (w.ROUND_HALF_FLOOR = 8),
              (w.EUCLID = 9),
              (w.config = w.set =
                function (M) {
                  var D, Z;
                  if (M != null)
                    if (typeof M == 'object') {
                      if (
                        (M.hasOwnProperty((D = 'DECIMAL_PLACES')) && ((Z = M[D]), Q(Z, 0, N, D), (V = Z)),
                        M.hasOwnProperty((D = 'ROUNDING_MODE')) && ((Z = M[D]), Q(Z, 0, 8, D), (Y = Z)),
                        M.hasOwnProperty((D = 'EXPONENTIAL_AT')) &&
                          ((Z = M[D]),
                          Z && Z.pop
                            ? (Q(Z[0], -1e9, 0, D), Q(Z[1], 0, N, D), (X = Z[0]), (C = Z[1]))
                            : (Q(Z, -1e9, N, D), (X = -(C = Z < 0 ? -Z : Z)))),
                        M.hasOwnProperty((D = 'RANGE')))
                      )
                        if (((Z = M[D]), Z && Z.pop)) Q(Z[0], -1e9, -1, D), Q(Z[1], 1, N, D), (T = Z[0]), (G = Z[1]);
                        else if ((Q(Z, -1e9, N, D), Z)) T = -(G = Z < 0 ? -Z : Z);
                        else throw Error(h + D + ' cannot be zero: ' + Z);
                      if (M.hasOwnProperty((D = 'CRYPTO')))
                        if (((Z = M[D]), Z === !!Z))
                          if (Z)
                            if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) k = Z;
                            else throw ((k = !Z), Error(h + 'crypto unavailable'));
                          else k = Z;
                        else throw Error(h + D + ' not true or false: ' + Z);
                      if (
                        (M.hasOwnProperty((D = 'MODULO_MODE')) && ((Z = M[D]), Q(Z, 0, 9, D), (ue = Z)),
                        M.hasOwnProperty((D = 'POW_PRECISION')) && ((Z = M[D]), Q(Z, 0, N, D), (R = Z)),
                        M.hasOwnProperty((D = 'FORMAT')))
                      )
                        if (((Z = M[D]), typeof Z == 'object')) P = Z;
                        else throw Error(h + D + ' not an object: ' + Z);
                      if (M.hasOwnProperty((D = 'ALPHABET')))
                        if (((Z = M[D]), typeof Z == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(Z)))
                          (de = Z.slice(0, 10) == '0123456789'), (be = Z);
                        else throw Error(h + D + ' invalid: ' + Z);
                    } else throw Error(h + 'Object expected: ' + M);
                  return {
                    DECIMAL_PLACES: V,
                    ROUNDING_MODE: Y,
                    EXPONENTIAL_AT: [X, C],
                    RANGE: [T, G],
                    CRYPTO: k,
                    MODULO_MODE: ue,
                    POW_PRECISION: R,
                    FORMAT: P,
                    ALPHABET: be
                  };
                }),
              (w.isBigNumber = function (M) {
                if (!M || M._isBigNumber !== !0) return !1;
                if (!w.DEBUG) return !0;
                var D,
                  Z,
                  ie = M.c,
                  W = M.e,
                  ne = M.s;
                e: if ({}.toString.call(ie) == '[object Array]') {
                  if ((ne === 1 || ne === -1) && W >= -1e9 && W <= N && W === m(W)) {
                    if (ie[0] === 0) {
                      if (W === 0 && ie.length === 1) return !0;
                      break e;
                    }
                    if (((D = (W + 1) % E), D < 1 && (D += E), String(ie[0]).length == D)) {
                      for (D = 0; D < ie.length; D++) if (((Z = ie[D]), Z < 0 || Z >= S || Z !== m(Z))) break e;
                      if (Z !== 0) return !0;
                    }
                  }
                } else if (ie === null && W === null && (ne === null || ne === 1 || ne === -1)) return !0;
                throw Error(h + 'Invalid BigNumber: ' + M);
              }),
              (w.maximum = w.max =
                function () {
                  return Oe(arguments, -1);
                }),
              (w.minimum = w.min =
                function () {
                  return Oe(arguments, 1);
                }),
              (w.random = (function () {
                var M = 9007199254740992,
                  D =
                    (Math.random() * M) & 2097151
                      ? function () {
                          return m(Math.random() * M);
                        }
                      : function () {
                          return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
                        };
                return function (Z) {
                  var ie,
                    W,
                    ne,
                    ce,
                    re,
                    O = 0,
                    z = [],
                    I = new w(F);
                  if ((Z == null ? (Z = V) : Q(Z, 0, N), (ce = c(Z / E)), k))
                    if (crypto.getRandomValues) {
                      for (ie = crypto.getRandomValues(new Uint32Array((ce *= 2))); O < ce; )
                        (re = ie[O] * 131072 + (ie[O + 1] >>> 11)),
                          re >= 9e15
                            ? ((W = crypto.getRandomValues(new Uint32Array(2))), (ie[O] = W[0]), (ie[O + 1] = W[1]))
                            : (z.push(re % 1e14), (O += 2));
                      O = ce / 2;
                    } else if (crypto.randomBytes) {
                      for (ie = crypto.randomBytes((ce *= 7)); O < ce; )
                        (re =
                          (ie[O] & 31) * 281474976710656 +
                          ie[O + 1] * 1099511627776 +
                          ie[O + 2] * 4294967296 +
                          ie[O + 3] * 16777216 +
                          (ie[O + 4] << 16) +
                          (ie[O + 5] << 8) +
                          ie[O + 6]),
                          re >= 9e15 ? crypto.randomBytes(7).copy(ie, O) : (z.push(re % 1e14), (O += 7));
                      O = ce / 7;
                    } else throw ((k = !1), Error(h + 'crypto unavailable'));
                  if (!k) for (; O < ce; ) (re = D()), re < 9e15 && (z[O++] = re % 1e14);
                  for (
                    ce = z[--O], Z %= E, ce && Z && ((re = v[E - Z]), (z[O] = m(ce / re) * re));
                    z[O] === 0;
                    z.pop(), O--
                  );
                  if (O < 0) z = [(ne = 0)];
                  else {
                    for (ne = -1; z[0] === 0; z.splice(0, 1), ne -= E);
                    for (O = 1, re = z[0]; re >= 10; re /= 10, O++);
                    O < E && (ne -= E - O);
                  }
                  return (I.e = ne), (I.c = z), I;
                };
              })()),
              (w.sum = function () {
                for (var M = 1, D = arguments, Z = new w(D[0]); M < D.length; ) Z = Z.plus(D[M++]);
                return Z;
              }),
              (y = (function () {
                var M = '0123456789';
                function D(Z, ie, W, ne) {
                  for (var ce, re = [0], O, z = 0, I = Z.length; z < I; ) {
                    for (O = re.length; O--; re[O] *= ie);
                    for (re[0] += ne.indexOf(Z.charAt(z++)), ce = 0; ce < re.length; ce++)
                      re[ce] > W - 1 &&
                        (re[ce + 1] == null && (re[ce + 1] = 0), (re[ce + 1] += (re[ce] / W) | 0), (re[ce] %= W));
                  }
                  return re.reverse();
                }
                return function (Z, ie, W, ne, ce) {
                  var re,
                    O,
                    z,
                    I,
                    J,
                    me,
                    ye,
                    Me,
                    ze = Z.indexOf('.'),
                    tt = V,
                    b = Y;
                  for (
                    ze >= 0 &&
                      ((I = R),
                      (R = 0),
                      (Z = Z.replace('.', '')),
                      (Me = new w(ie)),
                      (me = Me.pow(Z.length - ze)),
                      (R = I),
                      (Me.c = D(_e(ge(me.c), me.e, '0'), 10, W, M)),
                      (Me.e = Me.c.length)),
                      ye = D(Z, ie, W, ce ? ((re = be), M) : ((re = M), be)),
                      z = I = ye.length;
                    ye[--I] == 0;
                    ye.pop()
                  );
                  if (!ye[0]) return re.charAt(0);
                  if (
                    (ze < 0
                      ? --z
                      : ((me.c = ye),
                        (me.e = z),
                        (me.s = ne),
                        (me = Re(me, Me, tt, b, W)),
                        (ye = me.c),
                        (J = me.r),
                        (z = me.e)),
                    (O = z + tt + 1),
                    (ze = ye[O]),
                    (I = W / 2),
                    (J = J || O < 0 || ye[O + 1] != null),
                    (J =
                      b < 4
                        ? (ze != null || J) && (b == 0 || b == (me.s < 0 ? 3 : 2))
                        : ze > I || (ze == I && (b == 4 || J || (b == 6 && ye[O - 1] & 1) || b == (me.s < 0 ? 8 : 7)))),
                    O < 1 || !ye[0])
                  )
                    Z = J ? _e(re.charAt(1), -tt, re.charAt(0)) : re.charAt(0);
                  else {
                    if (((ye.length = O), J)) for (--W; ++ye[--O] > W; ) (ye[O] = 0), O || (++z, (ye = [1].concat(ye)));
                    for (I = ye.length; !ye[--I]; );
                    for (ze = 0, Z = ''; ze <= I; Z += re.charAt(ye[ze++]));
                    Z = _e(Z, z, re.charAt(0));
                  }
                  return Z;
                };
              })()),
              (Re = (function () {
                function M(ie, W, ne) {
                  var ce,
                    re,
                    O,
                    z,
                    I = 0,
                    J = ie.length,
                    me = W % x,
                    ye = (W / x) | 0;
                  for (ie = ie.slice(); J--; )
                    (O = ie[J] % x),
                      (z = (ie[J] / x) | 0),
                      (ce = ye * O + z * me),
                      (re = me * O + (ce % x) * x + I),
                      (I = ((re / ne) | 0) + ((ce / x) | 0) + ye * z),
                      (ie[J] = re % ne);
                  return I && (ie = [I].concat(ie)), ie;
                }
                function D(ie, W, ne, ce) {
                  var re, O;
                  if (ne != ce) O = ne > ce ? 1 : -1;
                  else
                    for (re = O = 0; re < ne; re++)
                      if (ie[re] != W[re]) {
                        O = ie[re] > W[re] ? 1 : -1;
                        break;
                      }
                  return O;
                }
                function Z(ie, W, ne, ce) {
                  for (var re = 0; ne--; )
                    (ie[ne] -= re), (re = ie[ne] < W[ne] ? 1 : 0), (ie[ne] = re * ce + ie[ne] - W[ne]);
                  for (; !ie[0] && ie.length > 1; ie.splice(0, 1));
                }
                return function (ie, W, ne, ce, re) {
                  var O,
                    z,
                    I,
                    J,
                    me,
                    ye,
                    Me,
                    ze,
                    tt,
                    b,
                    d,
                    p,
                    L,
                    ee,
                    j,
                    q,
                    se,
                    xe = ie.s == W.s ? 1 : -1,
                    Be = ie.c,
                    Ce = W.c;
                  if (!Be || !Be[0] || !Ce || !Ce[0])
                    return new w(
                      !ie.s || !W.s || (Be ? Ce && Be[0] == Ce[0] : !Ce)
                        ? NaN
                        : (Be && Be[0] == 0) || !Ce
                          ? xe * 0
                          : xe / 0
                    );
                  for (
                    ze = new w(xe),
                      tt = ze.c = [],
                      z = ie.e - W.e,
                      xe = ne + z + 1,
                      re || ((re = S), (z = he(ie.e / E) - he(W.e / E)), (xe = (xe / E) | 0)),
                      I = 0;
                    Ce[I] == (Be[I] || 0);
                    I++
                  );
                  if ((Ce[I] > (Be[I] || 0) && z--, xe < 0)) tt.push(1), (J = !0);
                  else {
                    for (
                      ee = Be.length,
                        q = Ce.length,
                        I = 0,
                        xe += 2,
                        me = m(re / (Ce[0] + 1)),
                        me > 1 && ((Ce = M(Ce, me, re)), (Be = M(Be, me, re)), (q = Ce.length), (ee = Be.length)),
                        L = q,
                        b = Be.slice(0, q),
                        d = b.length;
                      d < q;
                      b[d++] = 0
                    );
                    (se = Ce.slice()), (se = [0].concat(se)), (j = Ce[0]), Ce[1] >= re / 2 && j++;
                    do {
                      if (((me = 0), (O = D(Ce, b, q, d)), O < 0)) {
                        if (((p = b[0]), q != d && (p = p * re + (b[1] || 0)), (me = m(p / j)), me > 1))
                          for (
                            me >= re && (me = re - 1), ye = M(Ce, me, re), Me = ye.length, d = b.length;
                            D(ye, b, Me, d) == 1;

                          )
                            me--, Z(ye, q < Me ? se : Ce, Me, re), (Me = ye.length), (O = 1);
                        else me == 0 && (O = me = 1), (ye = Ce.slice()), (Me = ye.length);
                        if ((Me < d && (ye = [0].concat(ye)), Z(b, ye, d, re), (d = b.length), O == -1))
                          for (; D(Ce, b, q, d) < 1; ) me++, Z(b, q < d ? se : Ce, d, re), (d = b.length);
                      } else O === 0 && (me++, (b = [0]));
                      (tt[I++] = me), b[0] ? (b[d++] = Be[L] || 0) : ((b = [Be[L]]), (d = 1));
                    } while ((L++ < ee || b[0] != null) && xe--);
                    (J = b[0] != null), tt[0] || tt.splice(0, 1);
                  }
                  if (re == S) {
                    for (I = 1, xe = tt[0]; xe >= 10; xe /= 10, I++);
                    Ne(ze, ne + (ze.e = I + z * E - 1) + 1, ce, J);
                  } else (ze.e = z), (ze.r = +J);
                  return ze;
                };
              })());
            function Ue(M, D, Z, ie) {
              var W, ne, ce, re, O;
              if ((Z == null ? (Z = Y) : Q(Z, 0, 8), !M.c)) return M.toString();
              if (((W = M.c[0]), (ce = M.e), D == null))
                (O = ge(M.c)), (O = ie == 1 || (ie == 2 && (ce <= X || ce >= C)) ? We(O, ce) : _e(O, ce, '0'));
              else if (
                ((M = Ne(new w(M), D, Z)),
                (ne = M.e),
                (O = ge(M.c)),
                (re = O.length),
                ie == 1 || (ie == 2 && (D <= ne || ne <= X)))
              ) {
                for (; re < D; O += '0', re++);
                O = We(O, ne);
              } else if (((D -= ce), (O = _e(O, ne, '0')), ne + 1 > re)) {
                if (--D > 0) for (O += '.'; D--; O += '0');
              } else if (((D += ne - re), D > 0)) for (ne + 1 == re && (O += '.'); D--; O += '0');
              return M.s < 0 && W ? '-' + O : O;
            }
            function Oe(M, D) {
              for (var Z, ie, W = 1, ne = new w(M[0]); W < M.length; W++)
                (ie = new w(M[W])), (!ie.s || (Z = ve(ne, ie)) === D || (Z === 0 && ne.s === D)) && (ne = ie);
              return ne;
            }
            function Ke(M, D, Z) {
              for (var ie = 1, W = D.length; !D[--W]; D.pop());
              for (W = D[0]; W >= 10; W /= 10, ie++);
              return (
                (Z = ie + Z * E - 1) > G ? (M.c = M.e = null) : Z < T ? (M.c = [(M.e = 0)]) : ((M.e = Z), (M.c = D)), M
              );
            }
            _ = (function () {
              var M = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                D = /^([^.]+)\.$/,
                Z = /^\.([^.]+)$/,
                ie = /^-?(Infinity|NaN)$/,
                W = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (ne, ce, re, O) {
                var z,
                  I = re ? ce : ce.replace(W, '');
                if (ie.test(I)) ne.s = isNaN(I) ? null : I < 0 ? -1 : 1;
                else {
                  if (
                    !re &&
                    ((I = I.replace(M, function (J, me, ye) {
                      return (z = (ye = ye.toLowerCase()) == 'x' ? 16 : ye == 'b' ? 2 : 8), !O || O == z ? me : J;
                    })),
                    O && ((z = O), (I = I.replace(D, '$1').replace(Z, '0.$1'))),
                    ce != I)
                  )
                    return new w(I, z);
                  if (w.DEBUG) throw Error(h + 'Not a' + (O ? ' base ' + O : '') + ' number: ' + ce);
                  ne.s = null;
                }
                ne.c = ne.e = null;
              };
            })();
            function Ne(M, D, Z, ie) {
              var W,
                ne,
                ce,
                re,
                O,
                z,
                I,
                J = M.c,
                me = v;
              if (J) {
                e: {
                  for (W = 1, re = J[0]; re >= 10; re /= 10, W++);
                  if (((ne = D - W), ne < 0)) (ne += E), (ce = D), (O = J[(z = 0)]), (I = m((O / me[W - ce - 1]) % 10));
                  else if (((z = c((ne + 1) / E)), z >= J.length))
                    if (ie) {
                      for (; J.length <= z; J.push(0));
                      (O = I = 0), (W = 1), (ne %= E), (ce = ne - E + 1);
                    } else break e;
                  else {
                    for (O = re = J[z], W = 1; re >= 10; re /= 10, W++);
                    (ne %= E), (ce = ne - E + W), (I = ce < 0 ? 0 : m((O / me[W - ce - 1]) % 10));
                  }
                  if (
                    ((ie = ie || D < 0 || J[z + 1] != null || (ce < 0 ? O : O % me[W - ce - 1])),
                    (ie =
                      Z < 4
                        ? (I || ie) && (Z == 0 || Z == (M.s < 0 ? 3 : 2))
                        : I > 5 ||
                          (I == 5 &&
                            (Z == 4 ||
                              ie ||
                              (Z == 6 && (ne > 0 ? (ce > 0 ? O / me[W - ce] : 0) : J[z - 1]) % 10 & 1) ||
                              Z == (M.s < 0 ? 8 : 7)))),
                    D < 1 || !J[0])
                  )
                    return (
                      (J.length = 0),
                      ie ? ((D -= M.e + 1), (J[0] = me[(E - (D % E)) % E]), (M.e = -D || 0)) : (J[0] = M.e = 0),
                      M
                    );
                  if (
                    (ne == 0
                      ? ((J.length = z), (re = 1), z--)
                      : ((J.length = z + 1),
                        (re = me[E - ne]),
                        (J[z] = ce > 0 ? m((O / me[W - ce]) % me[ce]) * re : 0)),
                    ie)
                  )
                    for (;;)
                      if (z == 0) {
                        for (ne = 1, ce = J[0]; ce >= 10; ce /= 10, ne++);
                        for (ce = J[0] += re, re = 1; ce >= 10; ce /= 10, re++);
                        ne != re && (M.e++, J[0] == S && (J[0] = 1));
                        break;
                      } else {
                        if (((J[z] += re), J[z] != S)) break;
                        (J[z--] = 0), (re = 1);
                      }
                  for (ne = J.length; J[--ne] === 0; J.pop());
                }
                M.e > G ? (M.c = M.e = null) : M.e < T && (M.c = [(M.e = 0)]);
              }
              return M;
            }
            function De(M) {
              var D,
                Z = M.e;
              return Z === null
                ? M.toString()
                : ((D = ge(M.c)), (D = Z <= X || Z >= C ? We(D, Z) : _e(D, Z, '0')), M.s < 0 ? '-' + D : D);
            }
            return (
              (A.absoluteValue = A.abs =
                function () {
                  var M = new w(this);
                  return M.s < 0 && (M.s = 1), M;
                }),
              (A.comparedTo = function (M, D) {
                return ve(this, new w(M, D));
              }),
              (A.decimalPlaces = A.dp =
                function (M, D) {
                  var Z,
                    ie,
                    W,
                    ne = this;
                  if (M != null) return Q(M, 0, N), D == null ? (D = Y) : Q(D, 0, 8), Ne(new w(ne), M + ne.e + 1, D);
                  if (!(Z = ne.c)) return null;
                  if (((ie = ((W = Z.length - 1) - he(this.e / E)) * E), (W = Z[W])))
                    for (; W % 10 == 0; W /= 10, ie--);
                  return ie < 0 && (ie = 0), ie;
                }),
              (A.dividedBy = A.div =
                function (M, D) {
                  return Re(this, new w(M, D), V, Y);
                }),
              (A.dividedToIntegerBy = A.idiv =
                function (M, D) {
                  return Re(this, new w(M, D), 0, 1);
                }),
              (A.exponentiatedBy = A.pow =
                function (M, D) {
                  var Z,
                    ie,
                    W,
                    ne,
                    ce,
                    re,
                    O,
                    z,
                    I,
                    J = this;
                  if (((M = new w(M)), M.c && !M.isInteger())) throw Error(h + 'Exponent not an integer: ' + De(M));
                  if (
                    (D != null && (D = new w(D)),
                    (re = M.e > 14),
                    !J.c || !J.c[0] || (J.c[0] == 1 && !J.e && J.c.length == 1) || !M.c || !M.c[0])
                  )
                    return (I = new w(Math.pow(+De(J), re ? M.s * (2 - je(M)) : +De(M)))), D ? I.mod(D) : I;
                  if (((O = M.s < 0), D)) {
                    if (D.c ? !D.c[0] : !D.s) return new w(NaN);
                    (ie = !O && J.isInteger() && D.isInteger()), ie && (J = J.mod(D));
                  } else {
                    if (
                      M.e > 9 &&
                      (J.e > 0 ||
                        J.e < -1 ||
                        (J.e == 0
                          ? J.c[0] > 1 || (re && J.c[1] >= 24e7)
                          : J.c[0] < 8e13 || (re && J.c[0] <= 9999975e7)))
                    )
                      return (ne = J.s < 0 && je(M) ? -0 : 0), J.e > -1 && (ne = 1 / ne), new w(O ? 1 / ne : ne);
                    R && (ne = c(R / E + 2));
                  }
                  for (
                    re ? ((Z = new w(0.5)), O && (M.s = 1), (z = je(M))) : ((W = Math.abs(+De(M))), (z = W % 2)),
                      I = new w(F);
                    ;

                  ) {
                    if (z) {
                      if (((I = I.times(J)), !I.c)) break;
                      ne ? I.c.length > ne && (I.c.length = ne) : ie && (I = I.mod(D));
                    }
                    if (W) {
                      if (((W = m(W / 2)), W === 0)) break;
                      z = W % 2;
                    } else if (((M = M.times(Z)), Ne(M, M.e + 1, 1), M.e > 14)) z = je(M);
                    else {
                      if (((W = +De(M)), W === 0)) break;
                      z = W % 2;
                    }
                    (J = J.times(J)), ne ? J.c && J.c.length > ne && (J.c.length = ne) : ie && (J = J.mod(D));
                  }
                  return ie ? I : (O && (I = F.div(I)), D ? I.mod(D) : ne ? Ne(I, R, Y, ce) : I);
                }),
              (A.integerValue = function (M) {
                var D = new w(this);
                return M == null ? (M = Y) : Q(M, 0, 8), Ne(D, D.e + 1, M);
              }),
              (A.isEqualTo = A.eq =
                function (M, D) {
                  return ve(this, new w(M, D)) === 0;
                }),
              (A.isFinite = function () {
                return !!this.c;
              }),
              (A.isGreaterThan = A.gt =
                function (M, D) {
                  return ve(this, new w(M, D)) > 0;
                }),
              (A.isGreaterThanOrEqualTo = A.gte =
                function (M, D) {
                  return (D = ve(this, new w(M, D))) === 1 || D === 0;
                }),
              (A.isInteger = function () {
                return !!this.c && he(this.e / E) > this.c.length - 2;
              }),
              (A.isLessThan = A.lt =
                function (M, D) {
                  return ve(this, new w(M, D)) < 0;
                }),
              (A.isLessThanOrEqualTo = A.lte =
                function (M, D) {
                  return (D = ve(this, new w(M, D))) === -1 || D === 0;
                }),
              (A.isNaN = function () {
                return !this.s;
              }),
              (A.isNegative = function () {
                return this.s < 0;
              }),
              (A.isPositive = function () {
                return this.s > 0;
              }),
              (A.isZero = function () {
                return !!this.c && this.c[0] == 0;
              }),
              (A.minus = function (M, D) {
                var Z,
                  ie,
                  W,
                  ne,
                  ce = this,
                  re = ce.s;
                if (((M = new w(M, D)), (D = M.s), !re || !D)) return new w(NaN);
                if (re != D) return (M.s = -D), ce.plus(M);
                var O = ce.e / E,
                  z = M.e / E,
                  I = ce.c,
                  J = M.c;
                if (!O || !z) {
                  if (!I || !J) return I ? ((M.s = -D), M) : new w(J ? ce : NaN);
                  if (!I[0] || !J[0]) return J[0] ? ((M.s = -D), M) : new w(I[0] ? ce : Y == 3 ? -0 : 0);
                }
                if (((O = he(O)), (z = he(z)), (I = I.slice()), (re = O - z))) {
                  for ((ne = re < 0) ? ((re = -re), (W = I)) : ((z = O), (W = J)), W.reverse(), D = re; D--; W.push(0));
                  W.reverse();
                } else
                  for (ie = (ne = (re = I.length) < (D = J.length)) ? re : D, re = D = 0; D < ie; D++)
                    if (I[D] != J[D]) {
                      ne = I[D] < J[D];
                      break;
                    }
                if ((ne && ((W = I), (I = J), (J = W), (M.s = -M.s)), (D = (ie = J.length) - (Z = I.length)), D > 0))
                  for (; D--; I[Z++] = 0);
                for (D = S - 1; ie > re; ) {
                  if (I[--ie] < J[ie]) {
                    for (Z = ie; Z && !I[--Z]; I[Z] = D);
                    --I[Z], (I[ie] += S);
                  }
                  I[ie] -= J[ie];
                }
                for (; I[0] == 0; I.splice(0, 1), --z);
                return I[0] ? Ke(M, I, z) : ((M.s = Y == 3 ? -1 : 1), (M.c = [(M.e = 0)]), M);
              }),
              (A.modulo = A.mod =
                function (M, D) {
                  var Z,
                    ie,
                    W = this;
                  return (
                    (M = new w(M, D)),
                    !W.c || !M.s || (M.c && !M.c[0])
                      ? new w(NaN)
                      : !M.c || (W.c && !W.c[0])
                        ? new w(W)
                        : (ue == 9
                            ? ((ie = M.s), (M.s = 1), (Z = Re(W, M, 0, 3)), (M.s = ie), (Z.s *= ie))
                            : (Z = Re(W, M, 0, ue)),
                          (M = W.minus(Z.times(M))),
                          !M.c[0] && ue == 1 && (M.s = W.s),
                          M)
                  );
                }),
              (A.multipliedBy = A.times =
                function (M, D) {
                  var Z,
                    ie,
                    W,
                    ne,
                    ce,
                    re,
                    O,
                    z,
                    I,
                    J,
                    me,
                    ye,
                    Me,
                    ze,
                    tt,
                    b = this,
                    d = b.c,
                    p = (M = new w(M, D)).c;
                  if (!d || !p || !d[0] || !p[0])
                    return (
                      !b.s || !M.s || (d && !d[0] && !p) || (p && !p[0] && !d)
                        ? (M.c = M.e = M.s = null)
                        : ((M.s *= b.s), !d || !p ? (M.c = M.e = null) : ((M.c = [0]), (M.e = 0))),
                      M
                    );
                  for (
                    ie = he(b.e / E) + he(M.e / E),
                      M.s *= b.s,
                      O = d.length,
                      J = p.length,
                      O < J && ((Me = d), (d = p), (p = Me), (W = O), (O = J), (J = W)),
                      W = O + J,
                      Me = [];
                    W--;
                    Me.push(0)
                  );
                  for (ze = S, tt = x, W = J; --W >= 0; ) {
                    for (Z = 0, me = p[W] % tt, ye = (p[W] / tt) | 0, ce = O, ne = W + ce; ne > W; )
                      (z = d[--ce] % tt),
                        (I = (d[ce] / tt) | 0),
                        (re = ye * z + I * me),
                        (z = me * z + (re % tt) * tt + Me[ne] + Z),
                        (Z = ((z / ze) | 0) + ((re / tt) | 0) + ye * I),
                        (Me[ne--] = z % ze);
                    Me[ne] = Z;
                  }
                  return Z ? ++ie : Me.splice(0, 1), Ke(M, Me, ie);
                }),
              (A.negated = function () {
                var M = new w(this);
                return (M.s = -M.s || null), M;
              }),
              (A.plus = function (M, D) {
                var Z,
                  ie = this,
                  W = ie.s;
                if (((M = new w(M, D)), (D = M.s), !W || !D)) return new w(NaN);
                if (W != D) return (M.s = -D), ie.minus(M);
                var ne = ie.e / E,
                  ce = M.e / E,
                  re = ie.c,
                  O = M.c;
                if (!ne || !ce) {
                  if (!re || !O) return new w(W / 0);
                  if (!re[0] || !O[0]) return O[0] ? M : new w(re[0] ? ie : W * 0);
                }
                if (((ne = he(ne)), (ce = he(ce)), (re = re.slice()), (W = ne - ce))) {
                  for (W > 0 ? ((ce = ne), (Z = O)) : ((W = -W), (Z = re)), Z.reverse(); W--; Z.push(0));
                  Z.reverse();
                }
                for (W = re.length, D = O.length, W - D < 0 && ((Z = O), (O = re), (re = Z), (D = W)), W = 0; D; )
                  (W = ((re[--D] = re[D] + O[D] + W) / S) | 0), (re[D] = S === re[D] ? 0 : re[D] % S);
                return W && ((re = [W].concat(re)), ++ce), Ke(M, re, ce);
              }),
              (A.precision = A.sd =
                function (M, D) {
                  var Z,
                    ie,
                    W,
                    ne = this;
                  if (M != null && M !== !!M) return Q(M, 1, N), D == null ? (D = Y) : Q(D, 0, 8), Ne(new w(ne), M, D);
                  if (!(Z = ne.c)) return null;
                  if (((W = Z.length - 1), (ie = W * E + 1), (W = Z[W]))) {
                    for (; W % 10 == 0; W /= 10, ie--);
                    for (W = Z[0]; W >= 10; W /= 10, ie++);
                  }
                  return M && ne.e + 1 > ie && (ie = ne.e + 1), ie;
                }),
              (A.shiftedBy = function (M) {
                return Q(M, -9007199254740991, U), this.times('1e' + M);
              }),
              (A.squareRoot = A.sqrt =
                function () {
                  var M,
                    D,
                    Z,
                    ie,
                    W,
                    ne = this,
                    ce = ne.c,
                    re = ne.s,
                    O = ne.e,
                    z = V + 4,
                    I = new w('0.5');
                  if (re !== 1 || !ce || !ce[0])
                    return new w(!re || (re < 0 && (!ce || ce[0])) ? NaN : ce ? ne : 1 / 0);
                  if (
                    ((re = Math.sqrt(+De(ne))),
                    re == 0 || re == 1 / 0
                      ? ((D = ge(ce)),
                        (D.length + O) % 2 == 0 && (D += '0'),
                        (re = Math.sqrt(+D)),
                        (O = he((O + 1) / 2) - (O < 0 || O % 2)),
                        re == 1 / 0
                          ? (D = '5e' + O)
                          : ((D = re.toExponential()), (D = D.slice(0, D.indexOf('e') + 1) + O)),
                        (Z = new w(D)))
                      : (Z = new w(re + '')),
                    Z.c[0])
                  ) {
                    for (O = Z.e, re = O + z, re < 3 && (re = 0); ; )
                      if (
                        ((W = Z),
                        (Z = I.times(W.plus(Re(ne, W, z, 1)))),
                        ge(W.c).slice(0, re) === (D = ge(Z.c)).slice(0, re))
                      )
                        if ((Z.e < O && --re, (D = D.slice(re - 3, re + 1)), D == '9999' || (!ie && D == '4999'))) {
                          if (!ie && (Ne(W, W.e + V + 2, 0), W.times(W).eq(ne))) {
                            Z = W;
                            break;
                          }
                          (z += 4), (re += 4), (ie = 1);
                        } else {
                          (!+D || (!+D.slice(1) && D.charAt(0) == '5')) &&
                            (Ne(Z, Z.e + V + 2, 1), (M = !Z.times(Z).eq(ne)));
                          break;
                        }
                  }
                  return Ne(Z, Z.e + V + 1, Y, M);
                }),
              (A.toExponential = function (M, D) {
                return M != null && (Q(M, 0, N), M++), Ue(this, M, D, 1);
              }),
              (A.toFixed = function (M, D) {
                return M != null && (Q(M, 0, N), (M = M + this.e + 1)), Ue(this, M, D);
              }),
              (A.toFormat = function (M, D, Z) {
                var ie,
                  W = this;
                if (Z == null)
                  M != null && D && typeof D == 'object'
                    ? ((Z = D), (D = null))
                    : M && typeof M == 'object'
                      ? ((Z = M), (M = D = null))
                      : (Z = P);
                else if (typeof Z != 'object') throw Error(h + 'Argument not an object: ' + Z);
                if (((ie = W.toFixed(M, D)), W.c)) {
                  var ne,
                    ce = ie.split('.'),
                    re = +Z.groupSize,
                    O = +Z.secondaryGroupSize,
                    z = Z.groupSeparator || '',
                    I = ce[0],
                    J = ce[1],
                    me = W.s < 0,
                    ye = me ? I.slice(1) : I,
                    Me = ye.length;
                  if ((O && ((ne = re), (re = O), (O = ne), (Me -= ne)), re > 0 && Me > 0)) {
                    for (ne = Me % re || re, I = ye.substr(0, ne); ne < Me; ne += re) I += z + ye.substr(ne, re);
                    O > 0 && (I += z + ye.slice(ne)), me && (I = '-' + I);
                  }
                  ie = J
                    ? I +
                      (Z.decimalSeparator || '') +
                      ((O = +Z.fractionGroupSize)
                        ? J.replace(new RegExp('\\d{' + O + '}\\B', 'g'), '$&' + (Z.fractionGroupSeparator || ''))
                        : J)
                    : I;
                }
                return (Z.prefix || '') + ie + (Z.suffix || '');
              }),
              (A.toFraction = function (M) {
                var D,
                  Z,
                  ie,
                  W,
                  ne,
                  ce,
                  re,
                  O,
                  z,
                  I,
                  J,
                  me,
                  ye = this,
                  Me = ye.c;
                if (M != null && ((re = new w(M)), (!re.isInteger() && (re.c || re.s !== 1)) || re.lt(F)))
                  throw Error(h + 'Argument ' + (re.isInteger() ? 'out of range: ' : 'not an integer: ') + De(re));
                if (!Me) return new w(ye);
                for (
                  D = new w(F),
                    z = Z = new w(F),
                    ie = O = new w(F),
                    me = ge(Me),
                    ne = D.e = me.length - ye.e - 1,
                    D.c[0] = v[(ce = ne % E) < 0 ? E + ce : ce],
                    M = !M || re.comparedTo(D) > 0 ? (ne > 0 ? D : z) : re,
                    ce = G,
                    G = 1 / 0,
                    re = new w(me),
                    O.c[0] = 0;
                  (I = Re(re, D, 0, 1)), (W = Z.plus(I.times(ie))), W.comparedTo(M) != 1;

                )
                  (Z = ie),
                    (ie = W),
                    (z = O.plus(I.times((W = z)))),
                    (O = W),
                    (D = re.minus(I.times((W = D)))),
                    (re = W);
                return (
                  (W = Re(M.minus(Z), ie, 0, 1)),
                  (O = O.plus(W.times(z))),
                  (Z = Z.plus(W.times(ie))),
                  (O.s = z.s = ye.s),
                  (ne = ne * 2),
                  (J =
                    Re(z, ie, ne, Y)
                      .minus(ye)
                      .abs()
                      .comparedTo(Re(O, Z, ne, Y).minus(ye).abs()) < 1
                      ? [z, ie]
                      : [O, Z]),
                  (G = ce),
                  J
                );
              }),
              (A.toNumber = function () {
                return +De(this);
              }),
              (A.toPrecision = function (M, D) {
                return M != null && Q(M, 1, N), Ue(this, M, D, 2);
              }),
              (A.toString = function (M) {
                var D,
                  Z = this,
                  ie = Z.s,
                  W = Z.e;
                return (
                  W === null
                    ? ie
                      ? ((D = 'Infinity'), ie < 0 && (D = '-' + D))
                      : (D = 'NaN')
                    : (M == null
                        ? (D = W <= X || W >= C ? We(ge(Z.c), W) : _e(ge(Z.c), W, '0'))
                        : M === 10 && de
                          ? ((Z = Ne(new w(Z), V + W + 1, Y)), (D = _e(ge(Z.c), Z.e, '0')))
                          : (Q(M, 2, be.length, 'Base'), (D = y(_e(ge(Z.c), W, '0'), 10, M, ie, !0))),
                      ie < 0 && Z.c[0] && (D = '-' + D)),
                  D
                );
              }),
              (A.valueOf = A.toJSON =
                function () {
                  return De(this);
                }),
              (A._isBigNumber = !0),
              Ae != null && w.set(Ae),
              w
            );
          }
          function he(Ae) {
            var Re = Ae | 0;
            return Ae > 0 || Ae === Re ? Re : Re - 1;
          }
          function ge(Ae) {
            for (var Re, y, _ = 1, A = Ae.length, F = Ae[0] + ''; _ < A; ) {
              for (Re = Ae[_++] + '', y = E - Re.length; y--; Re = '0' + Re);
              F += Re;
            }
            for (A = F.length; F.charCodeAt(--A) === 48; );
            return F.slice(0, A + 1 || 1);
          }
          function ve(Ae, Re) {
            var y,
              _,
              A = Ae.c,
              F = Re.c,
              V = Ae.s,
              Y = Re.s,
              X = Ae.e,
              C = Re.e;
            if (!V || !Y) return null;
            if (((y = A && !A[0]), (_ = F && !F[0]), y || _)) return y ? (_ ? 0 : -Y) : V;
            if (V != Y) return V;
            if (((y = V < 0), (_ = X == C), !A || !F)) return _ ? 0 : !A ^ y ? 1 : -1;
            if (!_) return (X > C) ^ y ? 1 : -1;
            for (Y = (X = A.length) < (C = F.length) ? X : C, V = 0; V < Y; V++)
              if (A[V] != F[V]) return (A[V] > F[V]) ^ y ? 1 : -1;
            return X == C ? 0 : (X > C) ^ y ? 1 : -1;
          }
          function Q(Ae, Re, y, _) {
            if (Ae < Re || Ae > y || Ae !== m(Ae))
              throw Error(
                h +
                  (_ || 'Argument') +
                  (typeof Ae == 'number'
                    ? Ae < Re || Ae > y
                      ? ' out of range: '
                      : ' not an integer: '
                    : ' not a primitive number: ') +
                  String(Ae)
              );
          }
          function je(Ae) {
            var Re = Ae.c.length - 1;
            return he(Ae.e / E) == Re && Ae.c[Re] % 2 != 0;
          }
          function We(Ae, Re) {
            return (Ae.length > 1 ? Ae.charAt(0) + '.' + Ae.slice(1) : Ae) + (Re < 0 ? 'e' : 'e+') + Re;
          }
          function _e(Ae, Re, y) {
            var _, A;
            if (Re < 0) {
              for (A = y + '.'; ++Re; A += y);
              Ae = A + Ae;
            } else if (((_ = Ae.length), ++Re > _)) {
              for (A = y, Re -= _; --Re; A += y);
              Ae += A;
            } else Re < _ && (Ae = Ae.slice(0, Re) + '.' + Ae.slice(Re));
            return Ae;
          }
          (u = te()),
            (u.default = u.BigNumber = u),
            n.exports
              ? (n.exports = u)
              : (a || (a = typeof globalThis < 'u' && globalThis ? globalThis : window), (a.BigNumber = u));
        })(cv);
      })(os)),
    os.exports
  );
}
var no, jm;
function fv() {
  return (
    jm ||
      ((jm = 1),
      (no = function (a, u, s) {
        var c = new a.Uint8Array(s),
          m = u.pushInt,
          h = u.pushInt32,
          o = u.pushInt32Neg,
          S = u.pushInt64,
          E = u.pushInt64Neg,
          U = u.pushFloat,
          v = u.pushFloatSingle,
          x = u.pushFloatDouble,
          N = u.pushTrue,
          te = u.pushFalse,
          he = u.pushUndefined,
          ge = u.pushNull,
          ve = u.pushInfinity,
          Q = u.pushInfinityNeg,
          je = u.pushNaN,
          We = u.pushNaNNeg,
          _e = u.pushArrayStart,
          Ae = u.pushArrayStartFixed,
          Re = u.pushArrayStartFixed32,
          y = u.pushArrayStartFixed64,
          _ = u.pushObjectStart,
          A = u.pushObjectStartFixed,
          F = u.pushObjectStartFixed32,
          V = u.pushObjectStartFixed64,
          Y = u.pushByteString,
          X = u.pushByteStringStart,
          C = u.pushUtf8String,
          T = u.pushUtf8StringStart,
          G = u.pushSimpleUnassigned,
          k = u.pushTagStart,
          ue = u.pushTagStart4,
          R = u.pushTagStart8,
          P = u.pushTagUnassigned,
          be = u.pushBreak,
          de = a.Math.pow,
          w = 0,
          Ue = 0,
          Oe = 0;
        function Ke(K) {
          for (
            K = K | 0, w = 0, Ue = K;
            (w | 0) < (Ue | 0) && ((Oe = vi[c[w] & 255](c[w] | 0) | 0), !((Oe | 0) > 0));

          );
          return Oe | 0;
        }
        function Ne(K) {
          return (K = K | 0), (((w | 0) + (K | 0)) | 0) < (Ue | 0) ? 0 : 1;
        }
        function De(K) {
          return (K = K | 0), (c[K | 0] << 8) | c[(K + 1) | 0] | 0;
        }
        function M(K) {
          return (K = K | 0), (c[K | 0] << 24) | (c[(K + 1) | 0] << 16) | (c[(K + 2) | 0] << 8) | c[(K + 3) | 0] | 0;
        }
        function D(K) {
          return (K = K | 0), m(K | 0), (w = (w + 1) | 0), 0;
        }
        function Z(K) {
          return (K = K | 0), Ne(1) | 0 ? 1 : (m(c[(w + 1) | 0] | 0), (w = (w + 2) | 0), 0);
        }
        function ie(K) {
          return (K = K | 0), Ne(2) | 0 ? 1 : (m(De((w + 1) | 0) | 0), (w = (w + 3) | 0), 0);
        }
        function W(K) {
          return (K = K | 0), Ne(4) | 0 ? 1 : (h(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0), (w = (w + 5) | 0), 0);
        }
        function ne(K) {
          return (
            (K = K | 0),
            Ne(8) | 0
              ? 1
              : (S(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0, De((w + 5) | 0) | 0, De((w + 7) | 0) | 0),
                (w = (w + 9) | 0),
                0)
          );
        }
        function ce(K) {
          return (K = K | 0), m((-1 - ((K - 32) | 0)) | 0), (w = (w + 1) | 0), 0;
        }
        function re(K) {
          return (K = K | 0), Ne(1) | 0 ? 1 : (m((-1 - (c[(w + 1) | 0] | 0)) | 0), (w = (w + 2) | 0), 0);
        }
        function O(K) {
          K = K | 0;
          var Je = 0;
          return Ne(2) | 0 ? 1 : ((Je = De((w + 1) | 0) | 0), m((-1 - (Je | 0)) | 0), (w = (w + 3) | 0), 0);
        }
        function z(K) {
          return (K = K | 0), Ne(4) | 0 ? 1 : (o(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0), (w = (w + 5) | 0), 0);
        }
        function I(K) {
          return (
            (K = K | 0),
            Ne(8) | 0
              ? 1
              : (E(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0, De((w + 5) | 0) | 0, De((w + 7) | 0) | 0),
                (w = (w + 9) | 0),
                0)
          );
        }
        function J(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return (
            (ut = (K - 64) | 0),
            Ne(ut | 0) | 0
              ? 1
              : ((Je = (w + 1) | 0), (ot = (((w + 1) | 0) + (ut | 0)) | 0), Y(Je | 0, ot | 0), (w = ot | 0), 0)
          );
        }
        function me(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Ne(1) | 0 ||
            ((ut = c[(w + 1) | 0] | 0), (Je = (w + 2) | 0), (ot = (((w + 2) | 0) + (ut | 0)) | 0), Ne((ut + 1) | 0) | 0)
            ? 1
            : (Y(Je | 0, ot | 0), (w = ot | 0), 0);
        }
        function ye(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Ne(2) | 0 ||
            ((ut = De((w + 1) | 0) | 0),
            (Je = (w + 3) | 0),
            (ot = (((w + 3) | 0) + (ut | 0)) | 0),
            Ne((ut + 2) | 0) | 0)
            ? 1
            : (Y(Je | 0, ot | 0), (w = ot | 0), 0);
        }
        function Me(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Ne(4) | 0 ||
            ((ut = M((w + 1) | 0) | 0), (Je = (w + 5) | 0), (ot = (((w + 5) | 0) + (ut | 0)) | 0), Ne((ut + 4) | 0) | 0)
            ? 1
            : (Y(Je | 0, ot | 0), (w = ot | 0), 0);
        }
        function ze(K) {
          return (K = K | 0), 1;
        }
        function tt(K) {
          return (K = K | 0), X(), (w = (w + 1) | 0), 0;
        }
        function b(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return (
            (ut = (K - 96) | 0),
            Ne(ut | 0) | 0
              ? 1
              : ((Je = (w + 1) | 0), (ot = (((w + 1) | 0) + (ut | 0)) | 0), C(Je | 0, ot | 0), (w = ot | 0), 0)
          );
        }
        function d(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Ne(1) | 0 ||
            ((ut = c[(w + 1) | 0] | 0), (Je = (w + 2) | 0), (ot = (((w + 2) | 0) + (ut | 0)) | 0), Ne((ut + 1) | 0) | 0)
            ? 1
            : (C(Je | 0, ot | 0), (w = ot | 0), 0);
        }
        function p(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Ne(2) | 0 ||
            ((ut = De((w + 1) | 0) | 0),
            (Je = (w + 3) | 0),
            (ot = (((w + 3) | 0) + (ut | 0)) | 0),
            Ne((ut + 2) | 0) | 0)
            ? 1
            : (C(Je | 0, ot | 0), (w = ot | 0), 0);
        }
        function L(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Ne(4) | 0 ||
            ((ut = M((w + 1) | 0) | 0), (Je = (w + 5) | 0), (ot = (((w + 5) | 0) + (ut | 0)) | 0), Ne((ut + 4) | 0) | 0)
            ? 1
            : (C(Je | 0, ot | 0), (w = ot | 0), 0);
        }
        function ee(K) {
          return (K = K | 0), 1;
        }
        function j(K) {
          return (K = K | 0), T(), (w = (w + 1) | 0), 0;
        }
        function q(K) {
          return (K = K | 0), Ae((K - 128) | 0), (w = (w + 1) | 0), 0;
        }
        function se(K) {
          return (K = K | 0), Ne(1) | 0 ? 1 : (Ae(c[(w + 1) | 0] | 0), (w = (w + 2) | 0), 0);
        }
        function xe(K) {
          return (K = K | 0), Ne(2) | 0 ? 1 : (Ae(De((w + 1) | 0) | 0), (w = (w + 3) | 0), 0);
        }
        function Be(K) {
          return (K = K | 0), Ne(4) | 0 ? 1 : (Re(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0), (w = (w + 5) | 0), 0);
        }
        function Ce(K) {
          return (
            (K = K | 0),
            Ne(8) | 0
              ? 1
              : (y(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0, De((w + 5) | 0) | 0, De((w + 7) | 0) | 0),
                (w = (w + 9) | 0),
                0)
          );
        }
        function Pe(K) {
          return (K = K | 0), _e(), (w = (w + 1) | 0), 0;
        }
        function Ve(K) {
          K = K | 0;
          var Je = 0;
          return (Je = (K - 160) | 0), Ne(Je | 0) | 0 ? 1 : (A(Je | 0), (w = (w + 1) | 0), 0);
        }
        function ke(K) {
          return (K = K | 0), Ne(1) | 0 ? 1 : (A(c[(w + 1) | 0] | 0), (w = (w + 2) | 0), 0);
        }
        function Ie(K) {
          return (K = K | 0), Ne(2) | 0 ? 1 : (A(De((w + 1) | 0) | 0), (w = (w + 3) | 0), 0);
        }
        function Le(K) {
          return (K = K | 0), Ne(4) | 0 ? 1 : (F(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0), (w = (w + 5) | 0), 0);
        }
        function He(K) {
          return (
            (K = K | 0),
            Ne(8) | 0
              ? 1
              : (V(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0, De((w + 5) | 0) | 0, De((w + 7) | 0) | 0),
                (w = (w + 9) | 0),
                0)
          );
        }
        function nt(K) {
          return (K = K | 0), _(), (w = (w + 1) | 0), 0;
        }
        function st(K) {
          return (K = K | 0), k((K - 192) | 0 | 0), (w = (w + 1) | 0), 0;
        }
        function Bt(K) {
          return (K = K | 0), k(K | 0), (w = (w + 1) | 0), 0;
        }
        function fr(K) {
          return (K = K | 0), k(K | 0), (w = (w + 1) | 0), 0;
        }
        function Zi(K) {
          return (K = K | 0), k(K | 0), (w = (w + 1) | 0), 0;
        }
        function Qi(K) {
          return (K = K | 0), k(K | 0), (w = (w + 1) | 0), 0;
        }
        function Ot(K) {
          return (K = K | 0), k((K - 192) | 0 | 0), (w = (w + 1) | 0), 0;
        }
        function Fo(K) {
          return (K = K | 0), k(K | 0), (w = (w + 1) | 0), 0;
        }
        function ks(K) {
          return (K = K | 0), k(K | 0), (w = (w + 1) | 0), 0;
        }
        function Is(K) {
          return (K = K | 0), k(K | 0), (w = (w + 1) | 0), 0;
        }
        function Qu(K) {
          return (K = K | 0), Ne(1) | 0 ? 1 : (k(c[(w + 1) | 0] | 0), (w = (w + 2) | 0), 0);
        }
        function Ku(K) {
          return (K = K | 0), Ne(2) | 0 ? 1 : (k(De((w + 1) | 0) | 0), (w = (w + 3) | 0), 0);
        }
        function Ls(K) {
          return (K = K | 0), Ne(4) | 0 ? 1 : (ue(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0), (w = (w + 5) | 0), 0);
        }
        function un(K) {
          return (
            (K = K | 0),
            Ne(8) | 0
              ? 1
              : (R(De((w + 1) | 0) | 0, De((w + 3) | 0) | 0, De((w + 5) | 0) | 0, De((w + 7) | 0) | 0),
                (w = (w + 9) | 0),
                0)
          );
        }
        function ft(K) {
          return (K = K | 0), G(((K | 0) - 224) | 0), (w = (w + 1) | 0), 0;
        }
        function ir(K) {
          return (K = K | 0), te(), (w = (w + 1) | 0), 0;
        }
        function Hn(K) {
          return (K = K | 0), N(), (w = (w + 1) | 0), 0;
        }
        function Ra(K) {
          return (K = K | 0), ge(), (w = (w + 1) | 0), 0;
        }
        function Hs(K) {
          return (K = K | 0), he(), (w = (w + 1) | 0), 0;
        }
        function Gs(K) {
          return (K = K | 0), Ne(1) | 0 ? 1 : (G(c[(w + 1) | 0] | 0), (w = (w + 2) | 0), 0);
        }
        function Ju(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 1,
            jr = 0,
            Cr = 0,
            ln = 0;
          return Ne(2) | 0
            ? 1
            : ((Je = c[(w + 1) | 0] | 0),
              (ot = c[(w + 2) | 0] | 0),
              (Je | 0) & 128 && (ut = -1),
              (jr = +(((Je | 0) & 124) >> 2)),
              (Cr = +((((Je | 0) & 3) << 8) | ot)),
              +jr == 0
                ? U(+(+ut * 5960464477539063e-23 * +Cr))
                : +jr == 31
                  ? +ut == 1
                    ? +Cr > 0
                      ? je()
                      : ve()
                    : +Cr > 0
                      ? We()
                      : Q()
                  : U(+(+ut * de(2, +(+jr - 25)) * +(1024 + Cr))),
              (w = (w + 3) | 0),
              0);
        }
        function gi(K) {
          return (
            (K = K | 0),
            Ne(4) | 0
              ? 1
              : (v(c[(w + 1) | 0] | 0, c[(w + 2) | 0] | 0, c[(w + 3) | 0] | 0, c[(w + 4) | 0] | 0),
                (w = (w + 5) | 0),
                0)
          );
        }
        function ja(K) {
          return (
            (K = K | 0),
            Ne(8) | 0
              ? 1
              : (x(
                  c[(w + 1) | 0] | 0,
                  c[(w + 2) | 0] | 0,
                  c[(w + 3) | 0] | 0,
                  c[(w + 4) | 0] | 0,
                  c[(w + 5) | 0] | 0,
                  c[(w + 6) | 0] | 0,
                  c[(w + 7) | 0] | 0,
                  c[(w + 8) | 0] | 0
                ),
                (w = (w + 9) | 0),
                0)
          );
        }
        function mt(K) {
          return (K = K | 0), 1;
        }
        function Gn(K) {
          return (K = K | 0), be(), (w = (w + 1) | 0), 0;
        }
        var vi = [
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          D,
          Z,
          ie,
          W,
          ne,
          mt,
          mt,
          mt,
          mt,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          ce,
          re,
          O,
          z,
          I,
          mt,
          mt,
          mt,
          mt,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          J,
          me,
          ye,
          Me,
          ze,
          mt,
          mt,
          mt,
          tt,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          b,
          d,
          p,
          L,
          ee,
          mt,
          mt,
          mt,
          j,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          q,
          se,
          xe,
          Be,
          Ce,
          mt,
          mt,
          mt,
          Pe,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          Ve,
          ke,
          Ie,
          Le,
          He,
          mt,
          mt,
          mt,
          nt,
          st,
          st,
          st,
          st,
          st,
          st,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Ot,
          Qu,
          Ku,
          Ls,
          un,
          mt,
          mt,
          mt,
          mt,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ft,
          ir,
          Hn,
          Ra,
          Hs,
          Gs,
          Ju,
          gi,
          ja,
          mt,
          mt,
          mt,
          Gn
        ];
        return { parse: Ke };
      })),
    no
  );
}
var io = {},
  gr = {},
  Cm;
function Us() {
  if (Cm) return gr;
  Cm = 1;
  const n = Bs().BigNumber;
  return (
    (gr.MT = { POS_INT: 0, NEG_INT: 1, BYTE_STRING: 2, UTF8_STRING: 3, ARRAY: 4, MAP: 5, TAG: 6, SIMPLE_FLOAT: 7 }),
    (gr.TAG = {
      DATE_STRING: 0,
      DATE_EPOCH: 1,
      POS_BIGINT: 2,
      NEG_BIGINT: 3,
      DECIMAL_FRAC: 4,
      BIGFLOAT: 5,
      BASE64URL_EXPECTED: 21,
      BASE64_EXPECTED: 22,
      BASE16_EXPECTED: 23,
      CBOR: 24,
      URI: 32,
      BASE64URL: 33,
      BASE64: 34,
      REGEXP: 35,
      MIME: 36
    }),
    (gr.NUMBYTES = { ZERO: 0, ONE: 24, TWO: 25, FOUR: 26, EIGHT: 27, INDEFINITE: 31 }),
    (gr.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 }),
    (gr.SYMS = {
      NULL: Symbol('null'),
      UNDEFINED: Symbol('undef'),
      PARENT: Symbol('parent'),
      BREAK: Symbol('break'),
      STREAM: Symbol('stream')
    }),
    (gr.SHIFT32 = Math.pow(2, 32)),
    (gr.SHIFT16 = Math.pow(2, 16)),
    (gr.MAX_SAFE_HIGH = 2097151),
    (gr.NEG_ONE = new n(-1)),
    (gr.TEN = new n(10)),
    (gr.TWO = new n(2)),
    (gr.PARENT = { ARRAY: 0, OBJECT: 1, MAP: 2, TAG: 3, BYTE_STRING: 4, UTF8_STRING: 5 }),
    gr
  );
}
var qm;
function Ro() {
  return (
    qm ||
      ((qm = 1),
      (function (n) {
        const { Buffer: a } = Lu(),
          u = Bs().BigNumber,
          s = Us(),
          c = s.SHIFT32,
          m = s.SHIFT16,
          h = 2097151;
        n.parseHalf = function (E) {
          const U = E[0] & 128 ? -1 : 1,
            v = (E[0] & 124) >> 2,
            x = ((E[0] & 3) << 8) | E[1];
          return v
            ? v === 31
              ? U * (x ? NaN : 1 / 0)
              : U * Math.pow(2, v - 25) * (1024 + x)
            : U * 5960464477539063e-23 * x;
        };
        function o(S) {
          return S < 16 ? '0' + S.toString(16) : S.toString(16);
        }
        (n.arrayBufferToBignumber = function (S) {
          const E = S.byteLength;
          let U = '';
          for (let v = 0; v < E; v++) U += o(S[v]);
          return new u(U, 16);
        }),
          (n.buildMap = (S) => {
            const E = new Map(),
              U = Object.keys(S),
              v = U.length;
            for (let x = 0; x < v; x++) E.set(U[x], S[U[x]]);
            return E;
          }),
          (n.buildInt32 = (S, E) => S * m + E),
          (n.buildInt64 = (S, E, U, v) => {
            const x = n.buildInt32(S, E),
              N = n.buildInt32(U, v);
            return x > h ? new u(x).times(c).plus(N) : x * c + N;
          }),
          (n.writeHalf = function (E, U) {
            const v = a.allocUnsafe(4);
            v.writeFloatBE(U, 0);
            const x = v.readUInt32BE(0);
            if (x & 8191) return !1;
            let N = (x >> 16) & 32768;
            const te = (x >> 23) & 255,
              he = x & 8388607;
            if (te >= 113 && te <= 142) N += ((te - 112) << 10) + (he >> 13);
            else if (te >= 103 && te < 113) {
              if (he & ((1 << (126 - te)) - 1)) return !1;
              N += (he + 8388608) >> (126 - te);
            } else return !1;
            return E.writeUInt16BE(N, 0), !0;
          }),
          (n.keySorter = function (S, E) {
            const U = S[0].byteLength,
              v = E[0].byteLength;
            return U > v ? 1 : v > U ? -1 : S[0].compare(E[0]);
          }),
          (n.isNegativeZero = (S) => S === 0 && 1 / S < 0),
          (n.nextPowerOf2 = (S) => {
            let E = 0;
            if (S && !(S & (S - 1))) return S;
            for (; S !== 0; ) (S >>= 1), (E += 1);
            return 1 << E;
          });
      })(io)),
    io
  );
}
var ao, zm;
function Rp() {
  if (zm) return ao;
  zm = 1;
  const n = Us(),
    a = n.MT,
    u = n.SIMPLE,
    s = n.SYMS;
  class c {
    constructor(h) {
      if (typeof h != 'number') throw new Error('Invalid Simple type: ' + typeof h);
      if (h < 0 || h > 255 || (h | 0) !== h) throw new Error('value must be a small positive integer: ' + h);
      this.value = h;
    }
    toString() {
      return 'simple(' + this.value + ')';
    }
    inspect() {
      return 'simple(' + this.value + ')';
    }
    encodeCBOR(h) {
      return h._pushInt(this.value, a.SIMPLE_FLOAT);
    }
    static isSimple(h) {
      return h instanceof c;
    }
    static decode(h, o) {
      switch ((o == null && (o = !0), h)) {
        case u.FALSE:
          return !1;
        case u.TRUE:
          return !0;
        case u.NULL:
          return o ? null : s.NULL;
        case u.UNDEFINED:
          return o ? void 0 : s.UNDEFINED;
        case -1:
          if (!o) throw new Error('Invalid BREAK');
          return s.BREAK;
        default:
          return new c(h);
      }
    }
  }
  return (ao = c), ao;
}
var uo, km;
function jp() {
  if (km) return uo;
  km = 1;
  class n {
    constructor(u, s, c) {
      if (((this.tag = u), (this.value = s), (this.err = c), typeof this.tag != 'number'))
        throw new Error('Invalid tag type (' + typeof this.tag + ')');
      if (this.tag < 0 || (this.tag | 0) !== this.tag) throw new Error('Tag must be a positive integer: ' + this.tag);
    }
    toString() {
      return `${this.tag}(${JSON.stringify(this.value)})`;
    }
    encodeCBOR(u) {
      return u._pushTag(this.tag), u.pushAny(this.value);
    }
    convert(u) {
      let s, c;
      if (
        ((c = u != null ? u[this.tag] : void 0),
        typeof c != 'function' && ((c = n['_tag' + this.tag]), typeof c != 'function'))
      )
        return this;
      try {
        return c.call(n, this.value);
      } catch (m) {
        return (s = m), (this.err = s), this;
      }
    }
  }
  return (uo = n), uo;
}
var lo, Im;
function Cp() {
  if (Im) return lo;
  Im = 1;
  const n = typeof navigator < 'u' && navigator.product === 'ReactNative';
  function a() {
    return n
      ? 'http://localhost'
      : globalThis.location
        ? globalThis.location.protocol + '//' + globalThis.location.host
        : '';
  }
  const u = globalThis.URL,
    s = a();
  class c {
    constructor(o = '', S = s) {
      (this.super = new u(o, S)),
        (this.path = this.pathname + this.search),
        (this.auth = this.username && this.password ? this.username + ':' + this.password : null),
        (this.query = this.search && this.search.startsWith('?') ? this.search.slice(1) : null);
    }
    get hash() {
      return this.super.hash;
    }
    get host() {
      return this.super.host;
    }
    get hostname() {
      return this.super.hostname;
    }
    get href() {
      return this.super.href;
    }
    get origin() {
      return this.super.origin;
    }
    get password() {
      return this.super.password;
    }
    get pathname() {
      return this.super.pathname;
    }
    get port() {
      return this.super.port;
    }
    get protocol() {
      return this.super.protocol;
    }
    get search() {
      return this.super.search;
    }
    get searchParams() {
      return this.super.searchParams;
    }
    get username() {
      return this.super.username;
    }
    set hash(o) {
      this.super.hash = o;
    }
    set host(o) {
      this.super.host = o;
    }
    set hostname(o) {
      this.super.hostname = o;
    }
    set href(o) {
      this.super.href = o;
    }
    set password(o) {
      this.super.password = o;
    }
    set pathname(o) {
      this.super.pathname = o;
    }
    set port(o) {
      this.super.port = o;
    }
    set protocol(o) {
      this.super.protocol = o;
    }
    set search(o) {
      this.super.search = o;
    }
    set username(o) {
      this.super.username = o;
    }
    static createObjectURL(o) {
      return u.createObjectURL(o);
    }
    static revokeObjectURL(o) {
      u.revokeObjectURL(o);
    }
    toJSON() {
      return this.super.toJSON();
    }
    toString() {
      return this.super.toString();
    }
    format() {
      return this.toString();
    }
  }
  function m(h) {
    if (typeof h == 'string') return new u(h).toString();
    if (!(h instanceof u)) {
      const o = h.username && h.password ? `${h.username}:${h.password}@` : '',
        S = h.auth ? h.auth + '@' : '',
        E = h.port ? ':' + h.port : '',
        U = h.protocol ? h.protocol + '//' : '',
        v = h.host || '',
        x = h.hostname || '',
        N = h.search || (h.query ? '?' + h.query : ''),
        te = h.hash || '',
        he = h.pathname || '',
        ge = h.path || he + N;
      return `${U}${o || S}${v || x + E}${ge}${te}`;
    }
  }
  return (lo = { URLWithLegacySupport: c, URLSearchParams: globalThis.URLSearchParams, defaultBase: s, format: m }), lo;
}
var so, Lm;
function ov() {
  if (Lm) return so;
  Lm = 1;
  const { URLWithLegacySupport: n, format: a } = Cp();
  return (
    (so = (u, s = {}, c = {}, m) => {
      let h = s.protocol ? s.protocol.replace(':', '') : 'http';
      h = (c[h] || m || h) + ':';
      let o;
      try {
        o = new n(u);
      } catch {
        o = {};
      }
      const S = Object.assign({}, s, { protocol: h || o.protocol, host: s.host || o.host });
      return new n(u, a(S)).toString();
    }),
    so
  );
}
var co, Hm;
function qp() {
  if (Hm) return co;
  Hm = 1;
  const { URLWithLegacySupport: n, format: a, URLSearchParams: u, defaultBase: s } = Cp(),
    c = ov();
  return (co = { URL: n, URLSearchParams: u, format: a, relative: c, defaultBase: s }), co;
}
var fo, Gm;
function zp() {
  if (Gm) return fo;
  Gm = 1;
  const { Buffer: n } = Lu(),
    a = Dp(),
    u = Bs().BigNumber,
    s = fv(),
    c = Ro(),
    m = Us(),
    h = Rp(),
    o = jp(),
    { URL: S } = qp();
  class E {
    constructor(v) {
      (v = v || {}),
        !v.size || v.size < 65536 ? (v.size = 65536) : (v.size = c.nextPowerOf2(v.size)),
        (this._heap = new ArrayBuffer(v.size)),
        (this._heap8 = new Uint8Array(this._heap)),
        (this._buffer = n.from(this._heap)),
        this._reset(),
        (this._knownTags = Object.assign(
          {
            0: (x) => new Date(x),
            1: (x) => new Date(x * 1e3),
            2: (x) => c.arrayBufferToBignumber(x),
            3: (x) => m.NEG_ONE.minus(c.arrayBufferToBignumber(x)),
            4: (x) => m.TEN.pow(x[0]).times(x[1]),
            5: (x) => m.TWO.pow(x[0]).times(x[1]),
            32: (x) => new S(x),
            35: (x) => new RegExp(x)
          },
          v.tags
        )),
        (this.parser = s(
          xo,
          {
            log: console.log.bind(console),
            pushInt: this.pushInt.bind(this),
            pushInt32: this.pushInt32.bind(this),
            pushInt32Neg: this.pushInt32Neg.bind(this),
            pushInt64: this.pushInt64.bind(this),
            pushInt64Neg: this.pushInt64Neg.bind(this),
            pushFloat: this.pushFloat.bind(this),
            pushFloatSingle: this.pushFloatSingle.bind(this),
            pushFloatDouble: this.pushFloatDouble.bind(this),
            pushTrue: this.pushTrue.bind(this),
            pushFalse: this.pushFalse.bind(this),
            pushUndefined: this.pushUndefined.bind(this),
            pushNull: this.pushNull.bind(this),
            pushInfinity: this.pushInfinity.bind(this),
            pushInfinityNeg: this.pushInfinityNeg.bind(this),
            pushNaN: this.pushNaN.bind(this),
            pushNaNNeg: this.pushNaNNeg.bind(this),
            pushArrayStart: this.pushArrayStart.bind(this),
            pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
            pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
            pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
            pushObjectStart: this.pushObjectStart.bind(this),
            pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
            pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
            pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
            pushByteString: this.pushByteString.bind(this),
            pushByteStringStart: this.pushByteStringStart.bind(this),
            pushUtf8String: this.pushUtf8String.bind(this),
            pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
            pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
            pushTagUnassigned: this.pushTagUnassigned.bind(this),
            pushTagStart: this.pushTagStart.bind(this),
            pushTagStart4: this.pushTagStart4.bind(this),
            pushTagStart8: this.pushTagStart8.bind(this),
            pushBreak: this.pushBreak.bind(this)
          },
          this._heap
        ));
    }
    get _depth() {
      return this._parents.length;
    }
    get _currentParent() {
      return this._parents[this._depth - 1];
    }
    get _ref() {
      return this._currentParent.ref;
    }
    _closeParent() {
      const v = this._parents.pop();
      if (v.length > 0) throw new Error(`Missing ${v.length} elements`);
      switch (v.type) {
        case m.PARENT.TAG:
          this._push(this.createTag(v.ref[0], v.ref[1]));
          break;
        case m.PARENT.BYTE_STRING:
          this._push(this.createByteString(v.ref, v.length));
          break;
        case m.PARENT.UTF8_STRING:
          this._push(this.createUtf8String(v.ref, v.length));
          break;
        case m.PARENT.MAP:
          if (v.values % 2 > 0) throw new Error('Odd number of elements in the map');
          this._push(this.createMap(v.ref, v.length));
          break;
        case m.PARENT.OBJECT:
          if (v.values % 2 > 0) throw new Error('Odd number of elements in the map');
          this._push(this.createObject(v.ref, v.length));
          break;
        case m.PARENT.ARRAY:
          this._push(this.createArray(v.ref, v.length));
          break;
      }
      this._currentParent && this._currentParent.type === m.PARENT.TAG && this._dec();
    }
    _dec() {
      const v = this._currentParent;
      v.length < 0 || (v.length--, v.length === 0 && this._closeParent());
    }
    _push(v, x) {
      const N = this._currentParent;
      switch ((N.values++, N.type)) {
        case m.PARENT.ARRAY:
        case m.PARENT.BYTE_STRING:
        case m.PARENT.UTF8_STRING:
          N.length > -1 ? (this._ref[this._ref.length - N.length] = v) : this._ref.push(v), this._dec();
          break;
        case m.PARENT.OBJECT:
          N.tmpKey != null
            ? ((this._ref[N.tmpKey] = v), (N.tmpKey = null), this._dec())
            : ((N.tmpKey = v), typeof N.tmpKey != 'string' && ((N.type = m.PARENT.MAP), (N.ref = c.buildMap(N.ref))));
          break;
        case m.PARENT.MAP:
          N.tmpKey != null ? (this._ref.set(N.tmpKey, v), (N.tmpKey = null), this._dec()) : (N.tmpKey = v);
          break;
        case m.PARENT.TAG:
          this._ref.push(v), x || this._dec();
          break;
        default:
          throw new Error('Unknown parent type');
      }
    }
    _createParent(v, x, N) {
      this._parents[this._depth] = { type: x, length: N, ref: v, values: 0, tmpKey: null };
    }
    _reset() {
      (this._res = []),
        (this._parents = [{ type: m.PARENT.ARRAY, length: -1, ref: this._res, values: 0, tmpKey: null }]);
    }
    createTag(v, x) {
      const N = this._knownTags[v];
      return N ? N(x) : new o(v, x);
    }
    createMap(v, x) {
      return v;
    }
    createObject(v, x) {
      return v;
    }
    createArray(v, x) {
      return v;
    }
    createByteString(v, x) {
      return n.concat(v);
    }
    createByteStringFromHeap(v, x) {
      return v === x ? n.alloc(0) : n.from(this._heap.slice(v, x));
    }
    createInt(v) {
      return v;
    }
    createInt32(v, x) {
      return c.buildInt32(v, x);
    }
    createInt64(v, x, N, te) {
      return c.buildInt64(v, x, N, te);
    }
    createFloat(v) {
      return v;
    }
    createFloatSingle(v, x, N, te) {
      return a.read([v, x, N, te], 0, !1, 23, 4);
    }
    createFloatDouble(v, x, N, te, he, ge, ve, Q) {
      return a.read([v, x, N, te, he, ge, ve, Q], 0, !1, 52, 8);
    }
    createInt32Neg(v, x) {
      return -1 - c.buildInt32(v, x);
    }
    createInt64Neg(v, x, N, te) {
      const he = c.buildInt32(v, x),
        ge = c.buildInt32(N, te);
      return he > m.MAX_SAFE_HIGH ? m.NEG_ONE.minus(new u(he).times(m.SHIFT32).plus(ge)) : -1 - (he * m.SHIFT32 + ge);
    }
    createTrue() {
      return !0;
    }
    createFalse() {
      return !1;
    }
    createNull() {
      return null;
    }
    createUndefined() {}
    createInfinity() {
      return 1 / 0;
    }
    createInfinityNeg() {
      return -1 / 0;
    }
    createNaN() {
      return NaN;
    }
    createNaNNeg() {
      return NaN;
    }
    createUtf8String(v, x) {
      return v.join('');
    }
    createUtf8StringFromHeap(v, x) {
      return v === x ? '' : this._buffer.toString('utf8', v, x);
    }
    createSimpleUnassigned(v) {
      return new h(v);
    }
    pushInt(v) {
      this._push(this.createInt(v));
    }
    pushInt32(v, x) {
      this._push(this.createInt32(v, x));
    }
    pushInt64(v, x, N, te) {
      this._push(this.createInt64(v, x, N, te));
    }
    pushFloat(v) {
      this._push(this.createFloat(v));
    }
    pushFloatSingle(v, x, N, te) {
      this._push(this.createFloatSingle(v, x, N, te));
    }
    pushFloatDouble(v, x, N, te, he, ge, ve, Q) {
      this._push(this.createFloatDouble(v, x, N, te, he, ge, ve, Q));
    }
    pushInt32Neg(v, x) {
      this._push(this.createInt32Neg(v, x));
    }
    pushInt64Neg(v, x, N, te) {
      this._push(this.createInt64Neg(v, x, N, te));
    }
    pushTrue() {
      this._push(this.createTrue());
    }
    pushFalse() {
      this._push(this.createFalse());
    }
    pushNull() {
      this._push(this.createNull());
    }
    pushUndefined() {
      this._push(this.createUndefined());
    }
    pushInfinity() {
      this._push(this.createInfinity());
    }
    pushInfinityNeg() {
      this._push(this.createInfinityNeg());
    }
    pushNaN() {
      this._push(this.createNaN());
    }
    pushNaNNeg() {
      this._push(this.createNaNNeg());
    }
    pushArrayStart() {
      this._createParent([], m.PARENT.ARRAY, -1);
    }
    pushArrayStartFixed(v) {
      this._createArrayStartFixed(v);
    }
    pushArrayStartFixed32(v, x) {
      const N = c.buildInt32(v, x);
      this._createArrayStartFixed(N);
    }
    pushArrayStartFixed64(v, x, N, te) {
      const he = c.buildInt64(v, x, N, te);
      this._createArrayStartFixed(he);
    }
    pushObjectStart() {
      this._createObjectStartFixed(-1);
    }
    pushObjectStartFixed(v) {
      this._createObjectStartFixed(v);
    }
    pushObjectStartFixed32(v, x) {
      const N = c.buildInt32(v, x);
      this._createObjectStartFixed(N);
    }
    pushObjectStartFixed64(v, x, N, te) {
      const he = c.buildInt64(v, x, N, te);
      this._createObjectStartFixed(he);
    }
    pushByteStringStart() {
      this._parents[this._depth] = { type: m.PARENT.BYTE_STRING, length: -1, ref: [], values: 0, tmpKey: null };
    }
    pushByteString(v, x) {
      this._push(this.createByteStringFromHeap(v, x));
    }
    pushUtf8StringStart() {
      this._parents[this._depth] = { type: m.PARENT.UTF8_STRING, length: -1, ref: [], values: 0, tmpKey: null };
    }
    pushUtf8String(v, x) {
      this._push(this.createUtf8StringFromHeap(v, x));
    }
    pushSimpleUnassigned(v) {
      this._push(this.createSimpleUnassigned(v));
    }
    pushTagStart(v) {
      this._parents[this._depth] = { type: m.PARENT.TAG, length: 1, ref: [v] };
    }
    pushTagStart4(v, x) {
      this.pushTagStart(c.buildInt32(v, x));
    }
    pushTagStart8(v, x, N, te) {
      this.pushTagStart(c.buildInt64(v, x, N, te));
    }
    pushTagUnassigned(v) {
      this._push(this.createTag(v));
    }
    pushBreak() {
      if (this._currentParent.length > -1) throw new Error('Unexpected break');
      this._closeParent();
    }
    _createObjectStartFixed(v) {
      if (v === 0) {
        this._push(this.createObject({}));
        return;
      }
      this._createParent({}, m.PARENT.OBJECT, v);
    }
    _createArrayStartFixed(v) {
      if (v === 0) {
        this._push(this.createArray([]));
        return;
      }
      this._createParent(new Array(v), m.PARENT.ARRAY, v);
    }
    _decode(v) {
      if (v.byteLength === 0) throw new Error('Input too short');
      this._reset(), this._heap8.set(v);
      const x = this.parser.parse(v.byteLength);
      if (this._depth > 1) {
        for (; this._currentParent.length === 0; ) this._closeParent();
        if (this._depth > 1) throw new Error('Undeterminated nesting');
      }
      if (x > 0) throw new Error('Failed to parse');
      if (this._res.length === 0) throw new Error('No valid result');
    }
    decodeFirst(v) {
      return this._decode(v), this._res[0];
    }
    decodeAll(v) {
      return this._decode(v), this._res;
    }
    static decode(v, x) {
      return typeof v == 'string' && (v = n.from(v, x || 'hex')), new E({ size: v.length }).decodeFirst(v);
    }
    static decodeAll(v, x) {
      return typeof v == 'string' && (v = n.from(v, x || 'hex')), new E({ size: v.length }).decodeAll(v);
    }
  }
  return (E.decodeFirst = E.decode), (fo = E), fo;
}
var oo, Fm;
function hv() {
  if (Fm) return oo;
  Fm = 1;
  const { Buffer: n } = Lu(),
    a = zp(),
    u = Ro();
  class s extends a {
    createTag(h, o) {
      return `${h}(${o})`;
    }
    createInt(h) {
      return super.createInt(h).toString();
    }
    createInt32(h, o) {
      return super.createInt32(h, o).toString();
    }
    createInt64(h, o, S, E) {
      return super.createInt64(h, o, S, E).toString();
    }
    createInt32Neg(h, o) {
      return super.createInt32Neg(h, o).toString();
    }
    createInt64Neg(h, o, S, E) {
      return super.createInt64Neg(h, o, S, E).toString();
    }
    createTrue() {
      return 'true';
    }
    createFalse() {
      return 'false';
    }
    createFloat(h) {
      const o = super.createFloat(h);
      return u.isNegativeZero(h) ? '-0_1' : `${o}_1`;
    }
    createFloatSingle(h, o, S, E) {
      return `${super.createFloatSingle(h, o, S, E)}_2`;
    }
    createFloatDouble(h, o, S, E, U, v, x, N) {
      return `${super.createFloatDouble(h, o, S, E, U, v, x, N)}_3`;
    }
    createByteString(h, o) {
      const S = h.join(', ');
      return o === -1 ? `(_ ${S})` : `h'${S}`;
    }
    createByteStringFromHeap(h, o) {
      return `h'${n.from(super.createByteStringFromHeap(h, o)).toString('hex')}'`;
    }
    createInfinity() {
      return 'Infinity_1';
    }
    createInfinityNeg() {
      return '-Infinity_1';
    }
    createNaN() {
      return 'NaN_1';
    }
    createNaNNeg() {
      return '-NaN_1';
    }
    createNull() {
      return 'null';
    }
    createUndefined() {
      return 'undefined';
    }
    createSimpleUnassigned(h) {
      return `simple(${h})`;
    }
    createArray(h, o) {
      const S = super.createArray(h, o);
      return o === -1 ? `[_ ${S.join(', ')}]` : `[${S.join(', ')}]`;
    }
    createMap(h, o) {
      const S = super.createMap(h),
        E = Array.from(S.keys()).reduce(c(S), '');
      return o === -1 ? `{_ ${E}}` : `{${E}}`;
    }
    createObject(h, o) {
      const S = super.createObject(h),
        E = Object.keys(S).reduce(c(S), '');
      return o === -1 ? `{_ ${E}}` : `{${E}}`;
    }
    createUtf8String(h, o) {
      const S = h.join(', ');
      return o === -1 ? `(_ ${S})` : `"${S}"`;
    }
    createUtf8StringFromHeap(h, o) {
      return `"${n.from(super.createUtf8StringFromHeap(h, o)).toString('utf8')}"`;
    }
    static diagnose(h, o) {
      return typeof h == 'string' && (h = n.from(h, o || 'hex')), new s().decodeFirst(h);
    }
  }
  oo = s;
  function c(m) {
    return (h, o) => (h ? `${h}, ${o}: ${m[o]}` : `${o}: ${m[o]}`);
  }
  return oo;
}
var ho, Vm;
function dv() {
  if (Vm) return ho;
  Vm = 1;
  const { Buffer: n } = Lu(),
    { URL: a } = qp(),
    u = Bs().BigNumber,
    s = Ro(),
    c = Us(),
    m = c.MT,
    h = c.NUMBYTES,
    o = c.SHIFT32,
    S = c.SYMS,
    E = c.TAG,
    U = (c.MT.SIMPLE_FLOAT << 5) | c.NUMBYTES.TWO,
    v = (c.MT.SIMPLE_FLOAT << 5) | c.NUMBYTES.FOUR,
    x = (c.MT.SIMPLE_FLOAT << 5) | c.NUMBYTES.EIGHT,
    N = (c.MT.SIMPLE_FLOAT << 5) | c.SIMPLE.TRUE,
    te = (c.MT.SIMPLE_FLOAT << 5) | c.SIMPLE.FALSE,
    he = (c.MT.SIMPLE_FLOAT << 5) | c.SIMPLE.UNDEFINED,
    ge = (c.MT.SIMPLE_FLOAT << 5) | c.SIMPLE.NULL,
    ve = new u('0x20000000000000'),
    Q = n.from('f97e00', 'hex'),
    je = n.from('f9fc00', 'hex'),
    We = n.from('f97c00', 'hex');
  function _e(Re) {
    return {}.toString.call(Re).slice(8, -1);
  }
  class Ae {
    constructor(y) {
      (y = y || {}),
        (this.streaming = typeof y.stream == 'function'),
        (this.onData = y.stream),
        (this.semanticTypes = [
          [a, this._pushUrl],
          [u, this._pushBigNumber]
        ]);
      const _ = y.genTypes || [],
        A = _.length;
      for (let F = 0; F < A; F++) this.addSemanticType(_[F][0], _[F][1]);
      this._reset();
    }
    addSemanticType(y, _) {
      const A = this.semanticTypes.length;
      for (let F = 0; F < A; F++)
        if (this.semanticTypes[F][0] === y) {
          const Y = this.semanticTypes[F][1];
          return (this.semanticTypes[F][1] = _), Y;
        }
      return this.semanticTypes.push([y, _]), null;
    }
    push(y) {
      return (
        y &&
          ((this.result[this.offset] = y),
          (this.resultMethod[this.offset] = 0),
          (this.resultLength[this.offset] = y.length),
          this.offset++,
          this.streaming && this.onData(this.finalize())),
        !0
      );
    }
    pushWrite(y, _, A) {
      return (
        (this.result[this.offset] = y),
        (this.resultMethod[this.offset] = _),
        (this.resultLength[this.offset] = A),
        this.offset++,
        this.streaming && this.onData(this.finalize()),
        !0
      );
    }
    _pushUInt8(y) {
      return this.pushWrite(y, 1, 1);
    }
    _pushUInt16BE(y) {
      return this.pushWrite(y, 2, 2);
    }
    _pushUInt32BE(y) {
      return this.pushWrite(y, 3, 4);
    }
    _pushDoubleBE(y) {
      return this.pushWrite(y, 4, 8);
    }
    _pushNaN() {
      return this.push(Q);
    }
    _pushInfinity(y) {
      const _ = y < 0 ? je : We;
      return this.push(_);
    }
    _pushFloat(y) {
      const _ = n.allocUnsafe(2);
      if (s.writeHalf(_, y) && s.parseHalf(_) === y) return this._pushUInt8(U) && this.push(_);
      const A = n.allocUnsafe(4);
      return (
        A.writeFloatBE(y, 0),
        A.readFloatBE(0) === y ? this._pushUInt8(v) && this.push(A) : this._pushUInt8(x) && this._pushDoubleBE(y)
      );
    }
    _pushInt(y, _, A) {
      const F = _ << 5;
      return y < 24
        ? this._pushUInt8(F | y)
        : y <= 255
          ? this._pushUInt8(F | h.ONE) && this._pushUInt8(y)
          : y <= 65535
            ? this._pushUInt8(F | h.TWO) && this._pushUInt16BE(y)
            : y <= 4294967295
              ? this._pushUInt8(F | h.FOUR) && this._pushUInt32BE(y)
              : y <= Number.MAX_SAFE_INTEGER
                ? this._pushUInt8(F | h.EIGHT) && this._pushUInt32BE(Math.floor(y / o)) && this._pushUInt32BE(y % o)
                : _ === m.NEG_INT
                  ? this._pushFloat(A)
                  : this._pushFloat(y);
    }
    _pushIntNum(y) {
      return y < 0 ? this._pushInt(-y - 1, m.NEG_INT, y) : this._pushInt(y, m.POS_INT);
    }
    _pushNumber(y) {
      switch (!1) {
        case y === y:
          return this._pushNaN(y);
        case isFinite(y):
          return this._pushInfinity(y);
        case y % 1 !== 0:
          return this._pushIntNum(y);
        default:
          return this._pushFloat(y);
      }
    }
    _pushString(y) {
      const _ = n.byteLength(y, 'utf8');
      return this._pushInt(_, m.UTF8_STRING) && this.pushWrite(y, 5, _);
    }
    _pushBoolean(y) {
      return this._pushUInt8(y ? N : te);
    }
    _pushUndefined(y) {
      return this._pushUInt8(he);
    }
    _pushArray(y, _) {
      const A = _.length;
      if (!y._pushInt(A, m.ARRAY)) return !1;
      for (let F = 0; F < A; F++) if (!y.pushAny(_[F])) return !1;
      return !0;
    }
    _pushTag(y) {
      return this._pushInt(y, m.TAG);
    }
    _pushDate(y, _) {
      return y._pushTag(E.DATE_EPOCH) && y.pushAny(Math.round(_ / 1e3));
    }
    _pushBuffer(y, _) {
      return y._pushInt(_.length, m.BYTE_STRING) && y.push(_);
    }
    _pushNoFilter(y, _) {
      return y._pushBuffer(y, _.slice());
    }
    _pushRegexp(y, _) {
      return y._pushTag(E.REGEXP) && y.pushAny(_.source);
    }
    _pushSet(y, _) {
      if (!y._pushInt(_.size, m.ARRAY)) return !1;
      for (const A of _) if (!y.pushAny(A)) return !1;
      return !0;
    }
    _pushUrl(y, _) {
      return y._pushTag(E.URI) && y.pushAny(_.format());
    }
    _pushBigint(y) {
      let _ = E.POS_BIGINT;
      y.isNegative() && ((y = y.negated().minus(1)), (_ = E.NEG_BIGINT));
      let A = y.toString(16);
      A.length % 2 && (A = '0' + A);
      const F = n.from(A, 'hex');
      return this._pushTag(_) && this._pushBuffer(this, F);
    }
    _pushBigNumber(y, _) {
      if (_.isNaN()) return y._pushNaN();
      if (!_.isFinite()) return y._pushInfinity(_.isNegative() ? -1 / 0 : 1 / 0);
      if (_.isInteger()) return y._pushBigint(_);
      if (!(y._pushTag(E.DECIMAL_FRAC) && y._pushInt(2, m.ARRAY))) return !1;
      const A = _.decimalPlaces(),
        F = _.multipliedBy(new u(10).pow(A));
      return y._pushIntNum(-A) ? (F.abs().isLessThan(ve) ? y._pushIntNum(F.toNumber()) : y._pushBigint(F)) : !1;
    }
    _pushMap(y, _) {
      return y._pushInt(_.size, m.MAP) ? this._pushRawMap(_.size, Array.from(_)) : !1;
    }
    _pushObject(y) {
      if (!y) return this._pushUInt8(ge);
      const _ = this.semanticTypes.length;
      for (let Y = 0; Y < _; Y++)
        if (y instanceof this.semanticTypes[Y][0]) return this.semanticTypes[Y][1].call(y, this, y);
      const A = y.encodeCBOR;
      if (typeof A == 'function') return A.call(y, this);
      const F = Object.keys(y),
        V = F.length;
      return this._pushInt(V, m.MAP)
        ? this._pushRawMap(
            V,
            F.map((Y) => [Y, y[Y]])
          )
        : !1;
    }
    _pushRawMap(y, _) {
      _ = _.map(function (A) {
        return (A[0] = Ae.encode(A[0])), A;
      }).sort(s.keySorter);
      for (let A = 0; A < y; A++) if (!this.push(_[A][0]) || !this.pushAny(_[A][1])) return !1;
      return !0;
    }
    write(y) {
      return this.pushAny(y);
    }
    pushAny(y) {
      switch (_e(y)) {
        case 'Number':
          return this._pushNumber(y);
        case 'String':
          return this._pushString(y);
        case 'Boolean':
          return this._pushBoolean(y);
        case 'Object':
          return this._pushObject(y);
        case 'Array':
          return this._pushArray(this, y);
        case 'Uint8Array':
          return this._pushBuffer(this, n.isBuffer(y) ? y : n.from(y));
        case 'Null':
          return this._pushUInt8(ge);
        case 'Undefined':
          return this._pushUndefined(y);
        case 'Map':
          return this._pushMap(this, y);
        case 'Set':
          return this._pushSet(this, y);
        case 'URL':
          return this._pushUrl(this, y);
        case 'BigNumber':
          return this._pushBigNumber(this, y);
        case 'Date':
          return this._pushDate(this, y);
        case 'RegExp':
          return this._pushRegexp(this, y);
        case 'Symbol':
          switch (y) {
            case S.NULL:
              return this._pushObject(null);
            case S.UNDEFINED:
              return this._pushUndefined(void 0);
            default:
              throw new Error('Unknown symbol: ' + y.toString());
          }
        default:
          throw new Error('Unknown type: ' + typeof y + ', ' + (y ? y.toString() : ''));
      }
    }
    finalize() {
      if (this.offset === 0) return null;
      const y = this.result,
        _ = this.resultLength,
        A = this.resultMethod,
        F = this.offset;
      let V = 0,
        Y = 0;
      for (; Y < F; Y++) V += _[Y];
      const X = n.allocUnsafe(V);
      let C = 0,
        T = 0;
      for (Y = 0; Y < F; Y++) {
        switch (((T = _[Y]), A[Y])) {
          case 0:
            y[Y].copy(X, C);
            break;
          case 1:
            X.writeUInt8(y[Y], C, !0);
            break;
          case 2:
            X.writeUInt16BE(y[Y], C, !0);
            break;
          case 3:
            X.writeUInt32BE(y[Y], C, !0);
            break;
          case 4:
            X.writeDoubleBE(y[Y], C, !0);
            break;
          case 5:
            X.write(y[Y], C, T, 'utf8');
            break;
          default:
            throw new Error('unkown method');
        }
        C += T;
      }
      const G = X;
      return this._reset(), G;
    }
    _reset() {
      (this.result = []), (this.resultMethod = []), (this.resultLength = []), (this.offset = 0);
    }
    static encode(y) {
      const _ = new Ae();
      if (!_.pushAny(y)) throw new Error('Failed to encode input');
      return _.finalize();
    }
  }
  return (ho = Ae), ho;
}
var Ym;
function mv() {
  return (
    Ym ||
      ((Ym = 1),
      (function (n) {
        (n.Diagnose = hv()),
          (n.Decoder = zp()),
          (n.Encoder = dv()),
          (n.Simple = Rp()),
          (n.Tagged = jp()),
          (n.decodeAll = n.Decoder.decodeAll),
          (n.decodeFirst = n.Decoder.decodeFirst),
          (n.diagnose = n.Diagnose.diagnose),
          (n.encode = n.Encoder.encode),
          (n.decode = n.Decoder.decode),
          (n.leveldb = { decode: n.Decoder.decodeAll, encode: n.Encoder.encode, buffer: !0, name: 'cbor' });
      })(to)),
    to
  );
}
var pv = mv();
const kp = Iu(pv);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ const jo = 2n ** 256n,
  Hi = jo - 0x1000003d1n,
  mr = jo - 0x14551231950b75fc4402da1732fc9bebfn,
  yv = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,
  gv = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,
  Ip = { a: 0n, b: 7n },
  Dr = 32,
  $m = (n) => Fe(Fe(n * n) * n + Ip.b),
  Mt = (n = '') => {
    throw new Error(n);
  },
  Ds = (n) => typeof n == 'bigint',
  Lp = (n) => typeof n == 'string',
  mo = (n) => Ds(n) && 0n < n && n < Hi,
  ku = (n) => Ds(n) && 0n < n && n < mr,
  vv = (n) => n instanceof Uint8Array || (ArrayBuffer.isView(n) && n.constructor.name === 'Uint8Array'),
  Ss = (n, a) => (!vv(n) || (typeof a == 'number' && a > 0 && n.length !== a) ? Mt('Uint8Array expected') : n),
  pn = (n) => new Uint8Array(n),
  Yi = (n, a) => Ss(Lp(n) ? Hu(n) : pn(Ss(n)), a),
  Fe = (n, a = Hi) => {
    const u = n % a;
    return u >= 0n ? u : a + u;
  },
  Xm = (n) => (n instanceof Ur ? n : Mt('Point expected'));
class Ur {
  constructor(a, u, s) {
    (this.px = a), (this.py = u), (this.pz = s), Object.freeze(this);
  }
  static fromAffine(a) {
    return a.x === 0n && a.y === 0n ? Uu : new Ur(a.x, a.y, 1n);
  }
  static fromHex(a) {
    a = Yi(a);
    let u;
    const s = a[0],
      c = a.subarray(1),
      m = Es(c, 0, Dr),
      h = a.length;
    if (h === 33 && [2, 3].includes(s)) {
      mo(m) || Mt('Point hex invalid: x not FE');
      let o = bv($m(m));
      const S = (o & 1n) === 1n;
      ((s & 1) === 1) !== S && (o = Fe(-o)), (u = new Ur(m, o, 1n));
    }
    return (
      h === 65 && s === 4 && (u = new Ur(m, Es(c, Dr, 2 * Dr), 1n)), u ? u.ok() : Mt('Point invalid: not on curve')
    );
  }
  static fromPrivateKey(a) {
    return Gi.mul(Gp(a));
  }
  get x() {
    return this.aff().x;
  }
  get y() {
    return this.aff().y;
  }
  equals(a) {
    const { px: u, py: s, pz: c } = this,
      { px: m, py: h, pz: o } = Xm(a),
      S = Fe(u * o),
      E = Fe(m * c),
      U = Fe(s * o),
      v = Fe(h * c);
    return S === E && U === v;
  }
  negate() {
    return new Ur(this.px, Fe(-this.py), this.pz);
  }
  double() {
    return this.add(this);
  }
  add(a) {
    const { px: u, py: s, pz: c } = this,
      { px: m, py: h, pz: o } = Xm(a),
      { a: S, b: E } = Ip;
    let U = 0n,
      v = 0n,
      x = 0n;
    const N = Fe(E * 3n);
    let te = Fe(u * m),
      he = Fe(s * h),
      ge = Fe(c * o),
      ve = Fe(u + s),
      Q = Fe(m + h);
    (ve = Fe(ve * Q)), (Q = Fe(te + he)), (ve = Fe(ve - Q)), (Q = Fe(u + c));
    let je = Fe(m + o);
    return (
      (Q = Fe(Q * je)),
      (je = Fe(te + ge)),
      (Q = Fe(Q - je)),
      (je = Fe(s + c)),
      (U = Fe(h + o)),
      (je = Fe(je * U)),
      (U = Fe(he + ge)),
      (je = Fe(je - U)),
      (x = Fe(S * Q)),
      (U = Fe(N * ge)),
      (x = Fe(U + x)),
      (U = Fe(he - x)),
      (x = Fe(he + x)),
      (v = Fe(U * x)),
      (he = Fe(te + te)),
      (he = Fe(he + te)),
      (ge = Fe(S * ge)),
      (Q = Fe(N * Q)),
      (he = Fe(he + ge)),
      (ge = Fe(te - ge)),
      (ge = Fe(S * ge)),
      (Q = Fe(Q + ge)),
      (te = Fe(he * Q)),
      (v = Fe(v + te)),
      (te = Fe(je * Q)),
      (U = Fe(ve * U)),
      (U = Fe(U - te)),
      (te = Fe(ve * he)),
      (x = Fe(je * x)),
      (x = Fe(x + te)),
      new Ur(U, v, x)
    );
  }
  mul(a, u = !0) {
    if (!u && a === 0n) return Uu;
    if ((ku(a) || Mt('scalar invalid'), this.equals(Gi))) return wv(a).p;
    let s = Uu,
      c = Gi;
    for (let m = this; a > 0n; m = m.double(), a >>= 1n) a & 1n ? (s = s.add(m)) : u && (c = c.add(m));
    return s;
  }
  mulAddQUns(a, u, s) {
    return this.mul(u, !1).add(a.mul(s, !1)).ok();
  }
  toAffine() {
    const { px: a, py: u, pz: s } = this;
    if (this.equals(Uu)) return { x: 0n, y: 0n };
    if (s === 1n) return { x: a, y: u };
    const c = js(s, Hi);
    return Fe(s * c) !== 1n && Mt('inverse invalid'), { x: Fe(a * c), y: Fe(u * c) };
  }
  assertValidity() {
    const { x: a, y: u } = this.aff();
    return (
      (!mo(a) || !mo(u)) && Mt('Point invalid: x or y'), Fe(u * u) === $m(a) ? this : Mt('Point invalid: not on curve')
    );
  }
  multiply(a) {
    return this.mul(a);
  }
  aff() {
    return this.toAffine();
  }
  ok() {
    return this.assertValidity();
  }
  toHex(a = !0) {
    const { x: u, y: s } = this.aff();
    return (a ? ((s & 1n) === 0n ? '02' : '03') : '04') + Du(u) + (a ? '' : Du(s));
  }
  toRawBytes(a = !0) {
    return Hu(this.toHex(a));
  }
}
Ur.BASE = new Ur(yv, gv, 1n);
Ur.ZERO = new Ur(0n, 1n, 0n);
const { BASE: Gi, ZERO: Uu } = Ur,
  Hp = (n, a) => n.toString(16).padStart(a, '0'),
  Co = (n) =>
    Array.from(Ss(n))
      .map((a) => Hp(a, 2))
      .join(''),
  Cn = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 },
  Zm = (n) => {
    if (n >= Cn._0 && n <= Cn._9) return n - Cn._0;
    if (n >= Cn.A && n <= Cn.F) return n - (Cn.A - 10);
    if (n >= Cn.a && n <= Cn.f) return n - (Cn.a - 10);
  },
  Hu = (n) => {
    const a = 'hex invalid';
    if (!Lp(n)) return Mt(a);
    const u = n.length,
      s = u / 2;
    if (u % 2) return Mt(a);
    const c = pn(s);
    for (let m = 0, h = 0; m < s; m++, h += 2) {
      const o = Zm(n.charCodeAt(h)),
        S = Zm(n.charCodeAt(h + 1));
      if (o === void 0 || S === void 0) return Mt(a);
      c[m] = o * 16 + S;
    }
    return c;
  },
  Gu = (n) => BigInt('0x' + (Co(n) || '0')),
  Es = (n, a, u) => Gu(n.slice(a, u)),
  Rs = (n) => (Ds(n) && n >= 0n && n < jo ? Hu(Hp(n, 2 * Dr)) : Mt('bigint expected')),
  Du = (n) => Co(Rs(n)),
  Ao = (...n) => {
    const a = pn(n.reduce((s, c) => s + Ss(c).length, 0));
    let u = 0;
    return (
      n.forEach((s) => {
        a.set(s, u), (u += s.length);
      }),
      a
    );
  },
  js = (n, a) => {
    (n === 0n || a <= 0n) && Mt('no inverse n=' + n + ' mod=' + a);
    let u = Fe(n, a),
      s = a,
      c = 0n,
      m = 1n;
    for (; u !== 0n; ) {
      const h = s / u,
        o = s % u,
        S = c - m * h;
      (s = u), (u = o), (c = m), (m = S);
    }
    return s === 1n ? Fe(c, a) : Mt('no inverse');
  },
  bv = (n) => {
    let a = 1n;
    for (let u = n, s = (Hi + 1n) / 4n; s > 0n; s >>= 1n) s & 1n && (a = (a * u) % Hi), (u = (u * u) % Hi);
    return Fe(a * a) === n ? a : Mt('sqrt invalid');
  },
  Gp = (n) => (Ds(n) || (n = Gu(Yi(n, Dr))), ku(n) ? n : Mt('private key invalid 3')),
  wo = (n) => n > mr >> 1n;
class Ru {
  constructor(a, u, s) {
    (this.r = a), (this.s = u), (this.recovery = s), this.assertValidity();
  }
  static fromCompact(a) {
    return (a = Yi(a, 64)), new Ru(Es(a, 0, Dr), Es(a, Dr, 2 * Dr));
  }
  assertValidity() {
    return ku(this.r) && ku(this.s) ? this : Mt();
  }
  addRecoveryBit(a) {
    return new Ru(this.r, this.s, a);
  }
  hasHighS() {
    return wo(this.s);
  }
  normalizeS() {
    return wo(this.s) ? new Ru(this.r, Fe(-this.s, mr), this.recovery) : this;
  }
  recoverPublicKey(a) {
    const { r: u, s, recovery: c } = this;
    [0, 1, 2, 3].includes(c) || Mt('recovery id invalid');
    const m = Vp(Yi(a, Dr)),
      h = c === 2 || c === 3 ? u + mr : u;
    h >= Hi && Mt('q.x invalid');
    const o = c & 1 ? '03' : '02',
      S = Ur.fromHex(o + Du(h)),
      E = js(h, mr),
      U = Fe(-m * E, mr),
      v = Fe(s * E, mr);
    return Gi.mulAddQUns(S, U, v);
  }
  toCompactRawBytes() {
    return Hu(this.toCompactHex());
  }
  toCompactHex() {
    return Du(this.r) + Du(this.s);
  }
}
const Fp = (n) => {
    const a = n.length * 8 - 256;
    a > 1024 && Mt('msg invalid');
    const u = Gu(n);
    return a > 0 ? u >> BigInt(a) : u;
  },
  Vp = (n) => Fe(Fp(n), mr),
  Qm = (n) => Rs(n),
  Km = () => (typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0);
let ju;
const Yp = { lowS: !0 },
  Sv = (n, a, u = Yp) => {
    ['der', 'recovered', 'canonical'].some((v) => v in u) && Mt('option not supported');
    let { lowS: s } = u;
    s == null && (s = !0);
    const c = Vp(Yi(n)),
      m = Qm(c),
      h = Gp(a),
      o = [Qm(h), m];
    let S = u.extraEntropy;
    S && o.push(S === !0 ? xs.randomBytes(Dr) : Yi(S));
    const E = c,
      U = (v) => {
        const x = Fp(v);
        if (!ku(x)) return;
        const N = js(x, mr),
          te = Gi.mul(x).aff(),
          he = Fe(te.x, mr);
        if (he === 0n) return;
        const ge = Fe(N * Fe(E + Fe(h * he, mr), mr), mr);
        if (ge === 0n) return;
        let ve = ge,
          Q = (te.x === he ? 0 : 2) | Number(te.y & 1n);
        return s && wo(ge) && ((ve = Fe(-ge, mr)), (Q ^= 1)), new Ru(he, ve, Q);
      };
    return { seed: Ao(...o), k2sig: U };
  };
function Ev(n) {
  let a = pn(Dr),
    u = pn(Dr),
    s = 0;
  const c = () => {
      a.fill(1), u.fill(0), (s = 0);
    },
    m = 'drbg: tried 1000 values';
  {
    const h = (...E) => {
        const U = ju;
        return U || Mt('etc.hmacSha256Sync not set'), U(u, a, ...E);
      },
      o = (E = pn()) => {
        (u = h(pn([0]), E)), (a = h()), E.length !== 0 && ((u = h(pn([1]), E)), (a = h()));
      },
      S = () => (s++ >= 1e3 && Mt(m), (a = h()), a);
    return (E, U) => {
      c(), o(E);
      let v;
      for (; !(v = U(S())); ) o();
      return c(), v;
    };
  }
}
const xv = (n, a, u = Yp) => {
    const { seed: s, k2sig: c } = Sv(n, a, u);
    return Ev()(s, c);
  },
  _v = (n) => {
    (n = Yi(n)), (n.length < Dr + 8 || n.length > 1024) && Mt('expected 40-1024b');
    const a = Fe(Gu(n), mr - 1n);
    return Rs(a + 1n);
  },
  xs = {
    hexToBytes: Hu,
    bytesToHex: Co,
    concatBytes: Ao,
    bytesToNumberBE: Gu,
    numberToBytesBE: Rs,
    mod: Fe,
    invert: js,
    hmacSha256Async: async (n, ...a) => {
      const u = Km(),
        s = u && u.subtle;
      if (!s) return Mt('etc.hmacSha256Async or crypto.subtle must be defined');
      const c = await s.importKey('raw', n, { name: 'HMAC', hash: { name: 'SHA-256' } }, !1, ['sign']);
      return pn(await s.sign('HMAC', c, Ao(...a)));
    },
    hmacSha256Sync: ju,
    hashToPrivateKey: _v,
    randomBytes: (n = 32) => {
      const a = Km();
      return (!a || !a.getRandomValues) && Mt('crypto.getRandomValues must be defined'), a.getRandomValues(pn(n));
    }
  };
Object.defineProperties(xs, {
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return ju;
    },
    set(n) {
      ju || (ju = n);
    }
  }
});
const Ii = 8,
  Av = () => {
    const n = [],
      a = 256 / Ii + 1;
    let u = Gi,
      s = u;
    for (let c = 0; c < a; c++) {
      (s = u), n.push(s);
      for (let m = 1; m < 2 ** (Ii - 1); m++) (s = s.add(u)), n.push(s);
      u = s.double();
    }
    return n;
  };
let Jm;
const wv = (n) => {
  const a = Jm || (Jm = Av()),
    u = (U, v) => {
      let x = v.negate();
      return U ? x : v;
    };
  let s = Uu,
    c = Gi;
  const m = 1 + 256 / Ii,
    h = 2 ** (Ii - 1),
    o = BigInt(2 ** Ii - 1),
    S = 2 ** Ii,
    E = BigInt(Ii);
  for (let U = 0; U < m; U++) {
    const v = U * h;
    let x = Number(n & o);
    (n >>= E), x > h && ((x -= S), (n += 1n));
    const N = v,
      te = v + Math.abs(x) - 1,
      he = U % 2 !== 0,
      ge = x < 0;
    x === 0 ? (c = c.add(u(he, a[N]))) : (s = s.add(u(ge, a[te])));
  }
  return { p: s, f: c };
};
var Fi = Lu();
xs.hmacSha256Sync = (n, ...a) => Bp(Up, n, xs.concatBytes(...a));
class Ov {
  constructor(a, u, s, c, m = vs.V0) {
    Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'type', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'from', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'nonce', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'payload', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'signature', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.version = m),
      (this.type = a),
      (this.from = u),
      (this.nonce = s),
      (this.payload = c);
  }
  toTxDataBytes() {
    const a = [this.version, In(this.type), In(this.from.toString()), In(this.nonce.toString()), this.payload];
    return kp.encode(a);
  }
  hash() {
    return Up(this.toTxDataBytes());
  }
  sign(a) {
    const u = xv(this.hash(), Fi.Buffer.from(a, 'hex'));
    return (this.signature = Fi.Buffer.concat([u.toCompactRawBytes(), Fi.Buffer.from([u.recovery])])), this;
  }
  isSigned() {
    return !!this.signature;
  }
}
function Wm(n) {
  if (!n.isSigned()) throw new Error('Transaction must be signed before mapping to API request');
  const a = {};
  return (
    (a.body = {
      type: n.type.toString(),
      userId: n.from.toString(),
      nonce: n.nonce.toString(),
      message: Fi.Buffer.from(n.payload).toString('hex'),
      hash: Fi.Buffer.from(n.hash()).toString('hex'),
      signature: Fi.Buffer.from(n.signature).toString('hex')
    }),
    a
  );
}
var Nv = async (n, a) => {
    let u = typeof a == 'function' ? await a(n) : a;
    if (u) return n.scheme === 'bearer' ? `Bearer ${u}` : n.scheme === 'basic' ? `Basic ${btoa(u)}` : u;
  },
  Tv = { bodySerializer: (n) => JSON.stringify(n, (a, u) => (typeof u == 'bigint' ? u.toString() : u)) },
  Mv = (n) => {
    switch (n) {
      case 'label':
        return '.';
      case 'matrix':
        return ';';
      case 'simple':
        return ',';
      default:
        return '&';
    }
  },
  Bv = (n) => {
    switch (n) {
      case 'form':
        return ',';
      case 'pipeDelimited':
        return '|';
      case 'spaceDelimited':
        return '%20';
      default:
        return ',';
    }
  },
  Uv = (n) => {
    switch (n) {
      case 'label':
        return '.';
      case 'matrix':
        return ';';
      case 'simple':
        return ',';
      default:
        return '&';
    }
  },
  $p = ({ allowReserved: n, explode: a, name: u, style: s, value: c }) => {
    if (!a) {
      let o = (n ? c : c.map((S) => encodeURIComponent(S))).join(Bv(s));
      switch (s) {
        case 'label':
          return `.${o}`;
        case 'matrix':
          return `;${u}=${o}`;
        case 'simple':
          return o;
        default:
          return `${u}=${o}`;
      }
    }
    let m = Mv(s),
      h = c
        .map((o) =>
          s === 'label' || s === 'simple'
            ? n
              ? o
              : encodeURIComponent(o)
            : Cs({ allowReserved: n, name: u, value: o })
        )
        .join(m);
    return s === 'label' || s === 'matrix' ? m + h : h;
  },
  Cs = ({ allowReserved: n, name: a, value: u }) => {
    if (u == null) return '';
    if (typeof u == 'object')
      throw new Error(
        'Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.'
      );
    return `${a}=${n ? u : encodeURIComponent(u)}`;
  },
  Xp = ({ allowReserved: n, explode: a, name: u, style: s, value: c }) => {
    if (c instanceof Date) return `${u}=${c.toISOString()}`;
    if (s !== 'deepObject' && !a) {
      let o = [];
      Object.entries(c).forEach(([E, U]) => {
        o = [...o, E, n ? U : encodeURIComponent(U)];
      });
      let S = o.join(',');
      switch (s) {
        case 'form':
          return `${u}=${S}`;
        case 'label':
          return `.${S}`;
        case 'matrix':
          return `;${u}=${S}`;
        default:
          return S;
      }
    }
    let m = Uv(s),
      h = Object.entries(c)
        .map(([o, S]) => Cs({ allowReserved: n, name: s === 'deepObject' ? `${u}[${o}]` : o, value: S }))
        .join(m);
    return s === 'label' || s === 'matrix' ? m + h : h;
  },
  Dv = /\{[^{}]+\}/g,
  Rv = ({ path: n, url: a }) => {
    let u = a,
      s = a.match(Dv);
    if (s)
      for (let c of s) {
        let m = !1,
          h = c.substring(1, c.length - 1),
          o = 'simple';
        h.endsWith('*') && ((m = !0), (h = h.substring(0, h.length - 1))),
          h.startsWith('.')
            ? ((h = h.substring(1)), (o = 'label'))
            : h.startsWith(';') && ((h = h.substring(1)), (o = 'matrix'));
        let S = n[h];
        if (S == null) continue;
        if (Array.isArray(S)) {
          u = u.replace(c, $p({ explode: m, name: h, style: o, value: S }));
          continue;
        }
        if (typeof S == 'object') {
          u = u.replace(c, Xp({ explode: m, name: h, style: o, value: S }));
          continue;
        }
        if (o === 'matrix') {
          u = u.replace(c, `;${Cs({ name: h, value: S })}`);
          continue;
        }
        let E = encodeURIComponent(o === 'label' ? `.${S}` : S);
        u = u.replace(c, E);
      }
    return u;
  },
  Zp =
    ({ allowReserved: n, array: a, object: u } = {}) =>
    (s) => {
      let c = [];
      if (s && typeof s == 'object')
        for (let m in s) {
          let h = s[m];
          if (h != null) {
            if (Array.isArray(h)) {
              c = [...c, $p({ allowReserved: n, explode: !0, name: m, style: 'form', value: h, ...a })];
              continue;
            }
            if (typeof h == 'object') {
              c = [...c, Xp({ allowReserved: n, explode: !0, name: m, style: 'deepObject', value: h, ...u })];
              continue;
            }
            c = [...c, Cs({ allowReserved: n, name: m, value: h })];
          }
        }
      return c.join('&');
    },
  jv = (n) => {
    var u;
    if (!n) return 'stream';
    let a = (u = n.split(';')[0]) == null ? void 0 : u.trim();
    if (a) {
      if (a.startsWith('application/json') || a.endsWith('+json')) return 'json';
      if (a === 'multipart/form-data') return 'formData';
      if (['application/', 'audio/', 'image/', 'video/'].some((s) => a.startsWith(s))) return 'blob';
      if (a.startsWith('text/')) return 'text';
    }
  },
  Cv = async ({ security: n, ...a }) => {
    for (let u of n) {
      let s = await Nv(u, a.auth);
      if (!s) continue;
      let c = u.name ?? 'Authorization';
      switch (u.in) {
        case 'query':
          a.query || (a.query = {}), (a.query[c] = s);
          break;
        case 'header':
        default:
          a.headers.set(c, s);
          break;
      }
      return;
    }
  },
  Pm = (n) =>
    qv({
      baseUrl: n.baseUrl,
      path: n.path,
      query: n.query,
      querySerializer: typeof n.querySerializer == 'function' ? n.querySerializer : Zp(n.querySerializer),
      url: n.url
    }),
  qv = ({ baseUrl: n, path: a, query: u, querySerializer: s, url: c }) => {
    let m = c.startsWith('/') ? c : `/${c}`,
      h = (n ?? '') + m;
    a && (h = Rv({ path: a, url: h }));
    let o = u ? s(u) : '';
    return o.startsWith('?') && (o = o.substring(1)), o && (h += `?${o}`), h;
  },
  ep = (n, a) => {
    var s;
    let u = { ...n, ...a };
    return (
      (s = u.baseUrl) != null && s.endsWith('/') && (u.baseUrl = u.baseUrl.substring(0, u.baseUrl.length - 1)),
      (u.headers = Qp(n.headers, a.headers)),
      u
    );
  },
  Qp = (...n) => {
    let a = new Headers();
    for (let u of n) {
      if (!u || typeof u != 'object') continue;
      let s = u instanceof Headers ? u.entries() : Object.entries(u);
      for (let [c, m] of s)
        if (m === null) a.delete(c);
        else if (Array.isArray(m)) for (let h of m) a.append(c, h);
        else m !== void 0 && a.set(c, typeof m == 'object' ? JSON.stringify(m) : m);
    }
    return a;
  },
  po = class {
    constructor() {
      mm(this, '_fns');
      this._fns = [];
    }
    clear() {
      this._fns = [];
    }
    exists(n) {
      return this._fns.indexOf(n) !== -1;
    }
    eject(n) {
      let a = this._fns.indexOf(n);
      a !== -1 && (this._fns = [...this._fns.slice(0, a), ...this._fns.slice(a + 1)]);
    }
    use(n) {
      this._fns = [...this._fns, n];
    }
  },
  zv = () => ({ error: new po(), request: new po(), response: new po() }),
  kv = Zp({ allowReserved: !1, array: { explode: !0, style: 'form' }, object: { explode: !0, style: 'deepObject' } }),
  Iv = { 'Content-Type': 'application/json' },
  Kp = (n = {}) => ({ ...Tv, headers: Iv, parseAs: 'auto', querySerializer: kv, ...n }),
  Lv = (n = {}) => {
    let a = ep(Kp(), n),
      u = () => ({ ...a }),
      s = (h) => ((a = ep(a, h)), u()),
      c = zv(),
      m = async (h) => {
        let o = { ...a, ...h, fetch: h.fetch ?? a.fetch ?? globalThis.fetch, headers: Qp(a.headers, h.headers) };
        o.security && (await Cv({ ...o, security: o.security })),
          o.body && o.bodySerializer && (o.body = o.bodySerializer(o.body)),
          o.body || o.headers.delete('Content-Type');
        let S = Pm(o),
          E = { redirect: 'follow', ...o },
          U = new Request(S, E);
        for (let ge of c.request._fns) U = await ge(U, o);
        let v = o.fetch,
          x = await v(U);
        for (let ge of c.response._fns) x = await ge(x, U, o);
        let N = { request: U, response: x };
        if (x.ok) {
          if (x.status === 204 || x.headers.get('Content-Length') === '0') return { data: {}, ...N };
          let ge = (o.parseAs === 'auto' ? jv(x.headers.get('Content-Type')) : o.parseAs) ?? 'json';
          if (ge === 'stream') return { data: x.body, ...N };
          let ve = await x[ge]();
          return (
            ge === 'json' &&
              (o.responseValidator && (await o.responseValidator(ve)),
              o.responseTransformer && (ve = await o.responseTransformer(ve))),
            { data: ve, ...N }
          );
        }
        let te = await x.text();
        try {
          te = JSON.parse(te);
        } catch {}
        let he = te;
        for (let ge of c.error._fns) he = await ge(te, x, U, o);
        if (((he = he || {}), o.throwOnError)) throw he;
        return { error: he, ...N };
      };
    return {
      buildUrl: Pm,
      connect: (h) => m({ ...h, method: 'CONNECT' }),
      delete: (h) => m({ ...h, method: 'DELETE' }),
      get: (h) => m({ ...h, method: 'GET' }),
      getConfig: u,
      head: (h) => m({ ...h, method: 'HEAD' }),
      interceptors: c,
      options: (h) => m({ ...h, method: 'OPTIONS' }),
      patch: (h) => m({ ...h, method: 'PATCH' }),
      post: (h) => m({ ...h, method: 'POST' }),
      put: (h) => m({ ...h, method: 'PUT' }),
      request: m,
      setConfig: s,
      trace: (h) => m({ ...h, method: 'TRACE' })
    };
  };
const Xt = Lv(Kp({ baseUrl: 'https://testnetopenapi.hibit.app' })),
  Hv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/timestamp', ...n }),
  Gv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/assets', ...n }),
  Fv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/asset', ...n }),
  Vv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/chains', ...n }),
  Yv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/market/depth', ...n }),
  $v = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/markets/swap', ...n }),
  Xv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/markets/ticker', ...n }),
  Zv = (n) => (n.client ?? Xt).get({ url: '/v1/market/kline', ...n }),
  Qv = (n) => (n.client ?? Xt).get({ url: '/v1/market/trade', ...n }),
  Kv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/markets', ...n }),
  Jv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/market', ...n }),
  Wv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/order/trades', ...n }),
  Pv = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/orders', ...n }),
  eb = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/order', ...n }),
  tb = (n) =>
    ((n == null ? void 0 : n.client) ?? Xt).post({
      url: '/v1/tx/submit-spot-order',
      ...n,
      headers: { 'Content-Type': 'application/json', ...(n == null ? void 0 : n.headers) }
    }),
  rb = (n) =>
    ((n == null ? void 0 : n.client) ?? Xt).post({
      url: '/v1/tx/cancel-spot-order',
      ...n,
      headers: { 'Content-Type': 'application/json', ...(n == null ? void 0 : n.headers) }
    }),
  nb = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/wallet/nonce', ...n }),
  ib = (n) => ((n == null ? void 0 : n.client) ?? Xt).get({ url: '/v1/wallet/balances', ...n });
function tp(n) {
  var a;
  return {
    assetId: n.assetId,
    chainId: n.chainId || void 0,
    chainAssetType: K1(n.chainAssetType),
    contractAddress: n.contractAddress,
    decimalPlaces: n.decimalPlaces,
    isBaseToken: n.isBaseToken,
    displayName: n.displayName || void 0,
    assetSymbol: n.assetSymbol,
    subAssets: ((a = n.subAssets) == null ? void 0 : a.map((u) => ab(u))) || void 0
  };
}
function ab(n) {
  return {
    assetId: n.assetId,
    chainId: n.chainId || void 0,
    chainAssetType: n.chainAssetType,
    contractAddress: n.contractAddress,
    decimalPlaces: n.decimalPlaces
  };
}
function ub(n) {
  var a;
  return {
    query: {
      ChainIds: n.chainIds,
      ChainAssetTypes: (a = n.chainAssetTypes) == null ? void 0 : a.map((u) => u.toString()),
      Limit: n.limit,
      Offset: n.offset,
      OrderBy: n.orderBy
    }
  };
}
function lb(n) {
  return { query: { AssetId: n.toString() } };
}
function sb(n) {
  return {
    query: {
      ChainIds: n.chainIds,
      ChainAssetTypes: n.chainAssetTypes,
      BaseAssetId: n.baseAssetId ? String(n.baseAssetId) : void 0,
      QuoteAssetId: n.quoteAssetId ? String(n.quoteAssetId) : void 0,
      Limit: n.limit,
      Offset: n.offset,
      OrderBy: n.orderBy
    }
  };
}
function cb(n) {
  return { query: { MarketId: String(n) } };
}
function rp(n) {
  return {
    marketId: BigInt(n.marketId),
    marketSymbol: n.marketSymbol,
    baseAssetId: BigInt(n.baseAssetId),
    quoteAssetId: BigInt(n.quoteAssetId),
    depthLevels: n.depthLevels
  };
}
function fb(n) {
  return { query: { MarketId: n ? String(n) : void 0 } };
}
function ob(n) {
  return {
    id: BigInt(n.id),
    open: Number(n.o),
    high: Number(n.h),
    low: Number(n.l),
    close: Number(n.c),
    volume: Number(n.v),
    amount: Number(n.a),
    timestamp: Number(n.t)
  };
}
function hb(n) {
  return {
    query: {
      MarketId: String(n.marketId),
      TickSpace: n.tickSpace,
      Limit: n.limit,
      Offset: n.offset,
      OrderBy: n.orderBy
    }
  };
}
function db(n) {
  return {
    open: Number(n.o),
    high: Number(n.h),
    low: Number(n.l),
    close: Number(n.c),
    volume: Number(n.v),
    amount: Number(n.a),
    timestamp: Number(n.t)
  };
}
function mb(n) {
  return {
    query: {
      MarketId: String(n.marketId),
      TradedAtStart: n.tradedAtStart,
      TradedAtEnd: n.tradedAtEnd,
      Limit: n.limit,
      Offset: n.offset,
      OrderBy: n.orderBy
    }
  };
}
function pb(n) {
  return {
    maker: n.maker || null,
    taker: n.taker,
    takerSide: n.takerSide,
    price: Number(n.p),
    volume: Number(n.v),
    amount: Number(n.a),
    timestamp: Number(n.t)
  };
}
function yb(n) {
  return { query: n ? { MarketId: String(n) } : {} };
}
function gb(n) {
  return {
    marketId: BigInt(n.marketId),
    poolAmount: Number(n.poolAmount),
    poolVolume: Number(n.poolVolume),
    poolLiquidity: BigInt(n.poolLiquidity)
  };
}
function vb(n) {
  return { query: { Index: n.index, MarketId: String(n.marketId), Limit: n.limit } };
}
function bb(n) {
  return {
    asks: n.asks.map((a) => ({ price: Number(a[0]), volume: Number(a[1]) })),
    bids: n.bids.map((a) => ({ price: Number(a[0]), volume: Number(a[1]) }))
  };
}
function Sb(n) {
  return [n.orderId !== void 0, n.clientOrderId !== void 0, n.txHash !== void 0].filter(Boolean).length === 1;
}
function Eb(n) {
  return {
    query: {
      HIN: String(n.hin),
      Status: n.status,
      MarketId: n.marketId ? String(n.marketId) : void 0,
      OrderIds: n.orderIds,
      OrderCategory: n.orderCategory,
      OrderSide: n.orderSide,
      CreatedAtStart: n.createdAtStart,
      CreatedAtEnd: n.createdAtEnd,
      Limit: n.limit,
      Offset: n.offset,
      OrderBy: n.orderBy
    }
  };
}
function xb(n) {
  return { query: { OrderId: n.orderId, ClientOrderId: n.clientOrderId, TxHash: n.txHash } };
}
function np(n) {
  return {
    id: n.id,
    marketId: BigInt(n.mid),
    hin: BigInt(n.hin),
    category: n.cat,
    side: n.s,
    filledVolume: Number(n.fv),
    filledAmount: Number(n.fa),
    totalVolume: Number(n.tv),
    totalAmount: Number(n.ta),
    filledPrice: Number(n.fp),
    price: Number(n.p),
    status: n.st,
    timestamp: Number(n.t)
  };
}
function _b(n) {
  return { query: { OrderId: n } };
}
function Ab(n) {
  return {
    tradeId: n.tid,
    filledPrice: Number(n.fp),
    filledVolume: Number(n.fv),
    filledAmount: Number(n.fa),
    tradeSide: n.ts,
    timestamp: Number(n.t)
  };
}
var ip = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var ap;
function wb() {
  if (ap) return ip;
  ap = 1;
  var n;
  return (
    (function (a) {
      (function (u) {
        var s =
            typeof globalThis == 'object'
              ? globalThis
              : typeof xo == 'object'
                ? xo
                : typeof globalThis == 'object'
                  ? globalThis
                  : typeof this == 'object'
                    ? this
                    : S(),
          c = m(a);
        typeof s.Reflect < 'u' && (c = m(s.Reflect, c)), u(c, s), typeof s.Reflect > 'u' && (s.Reflect = a);
        function m(E, U) {
          return function (v, x) {
            Object.defineProperty(E, v, { configurable: !0, writable: !0, value: x }), U && U(v, x);
          };
        }
        function h() {
          try {
            return Function('return this;')();
          } catch {}
        }
        function o() {
          try {
            return (0, eval)('(function() { return this; })()');
          } catch {}
        }
        function S() {
          return h() || o();
        }
      })(function (u, s) {
        var c = Object.prototype.hasOwnProperty,
          m = typeof Symbol == 'function',
          h = m && typeof Symbol.toPrimitive < 'u' ? Symbol.toPrimitive : '@@toPrimitive',
          o = m && typeof Symbol.iterator < 'u' ? Symbol.iterator : '@@iterator',
          S = typeof Object.create == 'function',
          E = { __proto__: [] } instanceof Array,
          U = !S && !E,
          v = {
            create: S
              ? function () {
                  return ee(Object.create(null));
                }
              : E
                ? function () {
                    return ee({ __proto__: null });
                  }
                : function () {
                    return ee({});
                  },
            has: U
              ? function (j, q) {
                  return c.call(j, q);
                }
              : function (j, q) {
                  return q in j;
                },
            get: U
              ? function (j, q) {
                  return c.call(j, q) ? j[q] : void 0;
                }
              : function (j, q) {
                  return j[q];
                }
          },
          x = Object.getPrototypeOf(Function),
          N = typeof Map == 'function' && typeof Map.prototype.entries == 'function' ? Map : d(),
          te = typeof Set == 'function' && typeof Set.prototype.entries == 'function' ? Set : p(),
          he = typeof WeakMap == 'function' ? WeakMap : L(),
          ge = m ? Symbol.for('@reflect-metadata:registry') : void 0,
          ve = Me(),
          Q = ze(ve);
        function je(j, q, se, xe) {
          if (de(se)) {
            if (!Z(j)) throw new TypeError();
            if (!W(q)) throw new TypeError();
            return Y(j, q);
          } else {
            if (!Z(j)) throw new TypeError();
            if (!Oe(q)) throw new TypeError();
            if (!Oe(xe) && !de(xe) && !w(xe)) throw new TypeError();
            return w(xe) && (xe = void 0), (se = D(se)), X(j, q, se, xe);
          }
        }
        u('decorate', je);
        function We(j, q) {
          function se(xe, Be) {
            if (!Oe(xe)) throw new TypeError();
            if (!de(Be) && !ne(Be)) throw new TypeError();
            ue(j, q, xe, Be);
          }
          return se;
        }
        u('metadata', We);
        function _e(j, q, se, xe) {
          if (!Oe(se)) throw new TypeError();
          return de(xe) || (xe = D(xe)), ue(j, q, se, xe);
        }
        u('defineMetadata', _e);
        function Ae(j, q, se) {
          if (!Oe(q)) throw new TypeError();
          return de(se) || (se = D(se)), C(j, q, se);
        }
        u('hasMetadata', Ae);
        function Re(j, q, se) {
          if (!Oe(q)) throw new TypeError();
          return de(se) || (se = D(se)), T(j, q, se);
        }
        u('hasOwnMetadata', Re);
        function y(j, q, se) {
          if (!Oe(q)) throw new TypeError();
          return de(se) || (se = D(se)), G(j, q, se);
        }
        u('getMetadata', y);
        function _(j, q, se) {
          if (!Oe(q)) throw new TypeError();
          return de(se) || (se = D(se)), k(j, q, se);
        }
        u('getOwnMetadata', _);
        function A(j, q) {
          if (!Oe(j)) throw new TypeError();
          return de(q) || (q = D(q)), R(j, q);
        }
        u('getMetadataKeys', A);
        function F(j, q) {
          if (!Oe(j)) throw new TypeError();
          return de(q) || (q = D(q)), P(j, q);
        }
        u('getOwnMetadataKeys', F);
        function V(j, q, se) {
          if (!Oe(q)) throw new TypeError();
          if ((de(se) || (se = D(se)), !Oe(q))) throw new TypeError();
          de(se) || (se = D(se));
          var xe = b(q, se, !1);
          return de(xe) ? !1 : xe.OrdinaryDeleteMetadata(j, q, se);
        }
        u('deleteMetadata', V);
        function Y(j, q) {
          for (var se = j.length - 1; se >= 0; --se) {
            var xe = j[se],
              Be = xe(q);
            if (!de(Be) && !w(Be)) {
              if (!W(Be)) throw new TypeError();
              q = Be;
            }
          }
          return q;
        }
        function X(j, q, se, xe) {
          for (var Be = j.length - 1; Be >= 0; --Be) {
            var Ce = j[Be],
              Pe = Ce(q, se, xe);
            if (!de(Pe) && !w(Pe)) {
              if (!Oe(Pe)) throw new TypeError();
              xe = Pe;
            }
          }
          return xe;
        }
        function C(j, q, se) {
          var xe = T(j, q, se);
          if (xe) return !0;
          var Be = me(q);
          return w(Be) ? !1 : C(j, Be, se);
        }
        function T(j, q, se) {
          var xe = b(q, se, !1);
          return de(xe) ? !1 : De(xe.OrdinaryHasOwnMetadata(j, q, se));
        }
        function G(j, q, se) {
          var xe = T(j, q, se);
          if (xe) return k(j, q, se);
          var Be = me(q);
          if (!w(Be)) return G(j, Be, se);
        }
        function k(j, q, se) {
          var xe = b(q, se, !1);
          if (!de(xe)) return xe.OrdinaryGetOwnMetadata(j, q, se);
        }
        function ue(j, q, se, xe) {
          var Be = b(se, xe, !0);
          Be.OrdinaryDefineOwnMetadata(j, q, se, xe);
        }
        function R(j, q) {
          var se = P(j, q),
            xe = me(j);
          if (xe === null) return se;
          var Be = R(xe, q);
          if (Be.length <= 0) return se;
          if (se.length <= 0) return Be;
          for (var Ce = new te(), Pe = [], Ve = 0, ke = se; Ve < ke.length; Ve++) {
            var Ie = ke[Ve],
              Le = Ce.has(Ie);
            Le || (Ce.add(Ie), Pe.push(Ie));
          }
          for (var He = 0, nt = Be; He < nt.length; He++) {
            var Ie = nt[He],
              Le = Ce.has(Ie);
            Le || (Ce.add(Ie), Pe.push(Ie));
          }
          return Pe;
        }
        function P(j, q) {
          var se = b(j, q, !1);
          return se ? se.OrdinaryOwnMetadataKeys(j, q) : [];
        }
        function be(j) {
          if (j === null) return 1;
          switch (typeof j) {
            case 'undefined':
              return 0;
            case 'boolean':
              return 2;
            case 'string':
              return 3;
            case 'symbol':
              return 4;
            case 'number':
              return 5;
            case 'object':
              return j === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function de(j) {
          return j === void 0;
        }
        function w(j) {
          return j === null;
        }
        function Ue(j) {
          return typeof j == 'symbol';
        }
        function Oe(j) {
          return typeof j == 'object' ? j !== null : typeof j == 'function';
        }
        function Ke(j, q) {
          switch (be(j)) {
            case 0:
              return j;
            case 1:
              return j;
            case 2:
              return j;
            case 3:
              return j;
            case 4:
              return j;
            case 5:
              return j;
          }
          var se = 'string',
            xe = re(j, h);
          if (xe !== void 0) {
            var Be = xe.call(j, se);
            if (Oe(Be)) throw new TypeError();
            return Be;
          }
          return Ne(j);
        }
        function Ne(j, q) {
          var se, xe, Be;
          {
            var Ce = j.toString;
            if (ie(Ce)) {
              var xe = Ce.call(j);
              if (!Oe(xe)) return xe;
            }
            var se = j.valueOf;
            if (ie(se)) {
              var xe = se.call(j);
              if (!Oe(xe)) return xe;
            }
          }
          throw new TypeError();
        }
        function De(j) {
          return !!j;
        }
        function M(j) {
          return '' + j;
        }
        function D(j) {
          var q = Ke(j);
          return Ue(q) ? q : M(q);
        }
        function Z(j) {
          return Array.isArray
            ? Array.isArray(j)
            : j instanceof Object
              ? j instanceof Array
              : Object.prototype.toString.call(j) === '[object Array]';
        }
        function ie(j) {
          return typeof j == 'function';
        }
        function W(j) {
          return typeof j == 'function';
        }
        function ne(j) {
          switch (be(j)) {
            case 3:
              return !0;
            case 4:
              return !0;
            default:
              return !1;
          }
        }
        function ce(j, q) {
          return j === q || (j !== j && q !== q);
        }
        function re(j, q) {
          var se = j[q];
          if (se != null) {
            if (!ie(se)) throw new TypeError();
            return se;
          }
        }
        function O(j) {
          var q = re(j, o);
          if (!ie(q)) throw new TypeError();
          var se = q.call(j);
          if (!Oe(se)) throw new TypeError();
          return se;
        }
        function z(j) {
          return j.value;
        }
        function I(j) {
          var q = j.next();
          return q.done ? !1 : q;
        }
        function J(j) {
          var q = j.return;
          q && q.call(j);
        }
        function me(j) {
          var q = Object.getPrototypeOf(j);
          if (typeof j != 'function' || j === x || q !== x) return q;
          var se = j.prototype,
            xe = se && Object.getPrototypeOf(se);
          if (xe == null || xe === Object.prototype) return q;
          var Be = xe.constructor;
          return typeof Be != 'function' || Be === j ? q : Be;
        }
        function ye() {
          var j;
          !de(ge) &&
            typeof s.Reflect < 'u' &&
            !(ge in s.Reflect) &&
            typeof s.Reflect.defineMetadata == 'function' &&
            (j = tt(s.Reflect));
          var q,
            se,
            xe,
            Be = new he(),
            Ce = { registerProvider: Pe, getProvider: ke, setProvider: Le };
          return Ce;
          function Pe(He) {
            if (!Object.isExtensible(Ce)) throw new Error('Cannot add provider to a frozen registry.');
            switch (!0) {
              case j === He:
                break;
              case de(q):
                q = He;
                break;
              case q === He:
                break;
              case de(se):
                se = He;
                break;
              case se === He:
                break;
              default:
                xe === void 0 && (xe = new te()), xe.add(He);
                break;
            }
          }
          function Ve(He, nt) {
            if (!de(q)) {
              if (q.isProviderFor(He, nt)) return q;
              if (!de(se)) {
                if (se.isProviderFor(He, nt)) return q;
                if (!de(xe))
                  for (var st = O(xe); ; ) {
                    var Bt = I(st);
                    if (!Bt) return;
                    var fr = z(Bt);
                    if (fr.isProviderFor(He, nt)) return J(st), fr;
                  }
              }
            }
            if (!de(j) && j.isProviderFor(He, nt)) return j;
          }
          function ke(He, nt) {
            var st = Be.get(He),
              Bt;
            return (
              de(st) || (Bt = st.get(nt)),
              de(Bt) && ((Bt = Ve(He, nt)), de(Bt) || (de(st) && ((st = new N()), Be.set(He, st)), st.set(nt, Bt))),
              Bt
            );
          }
          function Ie(He) {
            if (de(He)) throw new TypeError();
            return q === He || se === He || (!de(xe) && xe.has(He));
          }
          function Le(He, nt, st) {
            if (!Ie(st)) throw new Error('Metadata provider not registered.');
            var Bt = ke(He, nt);
            if (Bt !== st) {
              if (!de(Bt)) return !1;
              var fr = Be.get(He);
              de(fr) && ((fr = new N()), Be.set(He, fr)), fr.set(nt, st);
            }
            return !0;
          }
        }
        function Me() {
          var j;
          return (
            !de(ge) && Oe(s.Reflect) && Object.isExtensible(s.Reflect) && (j = s.Reflect[ge]),
            de(j) && (j = ye()),
            !de(ge) &&
              Oe(s.Reflect) &&
              Object.isExtensible(s.Reflect) &&
              Object.defineProperty(s.Reflect, ge, { enumerable: !1, configurable: !1, writable: !1, value: j }),
            j
          );
        }
        function ze(j) {
          var q = new he(),
            se = {
              isProviderFor: function (Ie, Le) {
                var He = q.get(Ie);
                return de(He) ? !1 : He.has(Le);
              },
              OrdinaryDefineOwnMetadata: Pe,
              OrdinaryHasOwnMetadata: Be,
              OrdinaryGetOwnMetadata: Ce,
              OrdinaryOwnMetadataKeys: Ve,
              OrdinaryDeleteMetadata: ke
            };
          return ve.registerProvider(se), se;
          function xe(Ie, Le, He) {
            var nt = q.get(Ie),
              st = !1;
            if (de(nt)) {
              if (!He) return;
              (nt = new N()), q.set(Ie, nt), (st = !0);
            }
            var Bt = nt.get(Le);
            if (de(Bt)) {
              if (!He) return;
              if (((Bt = new N()), nt.set(Le, Bt), !j.setProvider(Ie, Le, se)))
                throw (nt.delete(Le), st && q.delete(Ie), new Error('Wrong provider for target.'));
            }
            return Bt;
          }
          function Be(Ie, Le, He) {
            var nt = xe(Le, He, !1);
            return de(nt) ? !1 : De(nt.has(Ie));
          }
          function Ce(Ie, Le, He) {
            var nt = xe(Le, He, !1);
            if (!de(nt)) return nt.get(Ie);
          }
          function Pe(Ie, Le, He, nt) {
            var st = xe(He, nt, !0);
            st.set(Ie, Le);
          }
          function Ve(Ie, Le) {
            var He = [],
              nt = xe(Ie, Le, !1);
            if (de(nt)) return He;
            for (var st = nt.keys(), Bt = O(st), fr = 0; ; ) {
              var Zi = I(Bt);
              if (!Zi) return (He.length = fr), He;
              var Qi = z(Zi);
              try {
                He[fr] = Qi;
              } catch (Ot) {
                try {
                  J(Bt);
                } finally {
                  throw Ot;
                }
              }
              fr++;
            }
          }
          function ke(Ie, Le, He) {
            var nt = xe(Le, He, !1);
            if (de(nt) || !nt.delete(Ie)) return !1;
            if (nt.size === 0) {
              var st = q.get(Le);
              de(st) || (st.delete(He), st.size === 0 && q.delete(st));
            }
            return !0;
          }
        }
        function tt(j) {
          var q = j.defineMetadata,
            se = j.hasOwnMetadata,
            xe = j.getOwnMetadata,
            Be = j.getOwnMetadataKeys,
            Ce = j.deleteMetadata,
            Pe = new he(),
            Ve = {
              isProviderFor: function (ke, Ie) {
                var Le = Pe.get(ke);
                return !de(Le) && Le.has(Ie)
                  ? !0
                  : Be(ke, Ie).length
                    ? (de(Le) && ((Le = new te()), Pe.set(ke, Le)), Le.add(Ie), !0)
                    : !1;
              },
              OrdinaryDefineOwnMetadata: q,
              OrdinaryHasOwnMetadata: se,
              OrdinaryGetOwnMetadata: xe,
              OrdinaryOwnMetadataKeys: Be,
              OrdinaryDeleteMetadata: Ce
            };
          return Ve;
        }
        function b(j, q, se) {
          var xe = ve.getProvider(j, q);
          if (!de(xe)) return xe;
          if (se) {
            if (ve.setProvider(j, q, Q)) return Q;
            throw new Error('Illegal state.');
          }
        }
        function d() {
          var j = {},
            q = [],
            se = (function () {
              function Ve(ke, Ie, Le) {
                (this._index = 0), (this._keys = ke), (this._values = Ie), (this._selector = Le);
              }
              return (
                (Ve.prototype['@@iterator'] = function () {
                  return this;
                }),
                (Ve.prototype[o] = function () {
                  return this;
                }),
                (Ve.prototype.next = function () {
                  var ke = this._index;
                  if (ke >= 0 && ke < this._keys.length) {
                    var Ie = this._selector(this._keys[ke], this._values[ke]);
                    return (
                      ke + 1 >= this._keys.length
                        ? ((this._index = -1), (this._keys = q), (this._values = q))
                        : this._index++,
                      { value: Ie, done: !1 }
                    );
                  }
                  return { value: void 0, done: !0 };
                }),
                (Ve.prototype.throw = function (ke) {
                  throw (this._index >= 0 && ((this._index = -1), (this._keys = q), (this._values = q)), ke);
                }),
                (Ve.prototype.return = function (ke) {
                  return (
                    this._index >= 0 && ((this._index = -1), (this._keys = q), (this._values = q)),
                    { value: ke, done: !0 }
                  );
                }),
                Ve
              );
            })(),
            xe = (function () {
              function Ve() {
                (this._keys = []), (this._values = []), (this._cacheKey = j), (this._cacheIndex = -2);
              }
              return (
                Object.defineProperty(Ve.prototype, 'size', {
                  get: function () {
                    return this._keys.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (Ve.prototype.has = function (ke) {
                  return this._find(ke, !1) >= 0;
                }),
                (Ve.prototype.get = function (ke) {
                  var Ie = this._find(ke, !1);
                  return Ie >= 0 ? this._values[Ie] : void 0;
                }),
                (Ve.prototype.set = function (ke, Ie) {
                  var Le = this._find(ke, !0);
                  return (this._values[Le] = Ie), this;
                }),
                (Ve.prototype.delete = function (ke) {
                  var Ie = this._find(ke, !1);
                  if (Ie >= 0) {
                    for (var Le = this._keys.length, He = Ie + 1; He < Le; He++)
                      (this._keys[He - 1] = this._keys[He]), (this._values[He - 1] = this._values[He]);
                    return (
                      this._keys.length--,
                      this._values.length--,
                      ce(ke, this._cacheKey) && ((this._cacheKey = j), (this._cacheIndex = -2)),
                      !0
                    );
                  }
                  return !1;
                }),
                (Ve.prototype.clear = function () {
                  (this._keys.length = 0), (this._values.length = 0), (this._cacheKey = j), (this._cacheIndex = -2);
                }),
                (Ve.prototype.keys = function () {
                  return new se(this._keys, this._values, Be);
                }),
                (Ve.prototype.values = function () {
                  return new se(this._keys, this._values, Ce);
                }),
                (Ve.prototype.entries = function () {
                  return new se(this._keys, this._values, Pe);
                }),
                (Ve.prototype['@@iterator'] = function () {
                  return this.entries();
                }),
                (Ve.prototype[o] = function () {
                  return this.entries();
                }),
                (Ve.prototype._find = function (ke, Ie) {
                  if (!ce(this._cacheKey, ke)) {
                    this._cacheIndex = -1;
                    for (var Le = 0; Le < this._keys.length; Le++)
                      if (ce(this._keys[Le], ke)) {
                        this._cacheIndex = Le;
                        break;
                      }
                  }
                  return (
                    this._cacheIndex < 0 &&
                      Ie &&
                      ((this._cacheIndex = this._keys.length), this._keys.push(ke), this._values.push(void 0)),
                    this._cacheIndex
                  );
                }),
                Ve
              );
            })();
          return xe;
          function Be(Ve, ke) {
            return Ve;
          }
          function Ce(Ve, ke) {
            return ke;
          }
          function Pe(Ve, ke) {
            return [Ve, ke];
          }
        }
        function p() {
          var j = (function () {
            function q() {
              this._map = new N();
            }
            return (
              Object.defineProperty(q.prototype, 'size', {
                get: function () {
                  return this._map.size;
                },
                enumerable: !0,
                configurable: !0
              }),
              (q.prototype.has = function (se) {
                return this._map.has(se);
              }),
              (q.prototype.add = function (se) {
                return this._map.set(se, se), this;
              }),
              (q.prototype.delete = function (se) {
                return this._map.delete(se);
              }),
              (q.prototype.clear = function () {
                this._map.clear();
              }),
              (q.prototype.keys = function () {
                return this._map.keys();
              }),
              (q.prototype.values = function () {
                return this._map.keys();
              }),
              (q.prototype.entries = function () {
                return this._map.entries();
              }),
              (q.prototype['@@iterator'] = function () {
                return this.keys();
              }),
              (q.prototype[o] = function () {
                return this.keys();
              }),
              q
            );
          })();
          return j;
        }
        function L() {
          var j = 16,
            q = v.create(),
            se = xe();
          return (function () {
            function ke() {
              this._key = xe();
            }
            return (
              (ke.prototype.has = function (Ie) {
                var Le = Be(Ie, !1);
                return Le !== void 0 ? v.has(Le, this._key) : !1;
              }),
              (ke.prototype.get = function (Ie) {
                var Le = Be(Ie, !1);
                return Le !== void 0 ? v.get(Le, this._key) : void 0;
              }),
              (ke.prototype.set = function (Ie, Le) {
                var He = Be(Ie, !0);
                return (He[this._key] = Le), this;
              }),
              (ke.prototype.delete = function (Ie) {
                var Le = Be(Ie, !1);
                return Le !== void 0 ? delete Le[this._key] : !1;
              }),
              (ke.prototype.clear = function () {
                this._key = xe();
              }),
              ke
            );
          })();
          function xe() {
            var ke;
            do ke = '@@WeakMap@@' + Ve();
            while (v.has(q, ke));
            return (q[ke] = !0), ke;
          }
          function Be(ke, Ie) {
            if (!c.call(ke, se)) {
              if (!Ie) return;
              Object.defineProperty(ke, se, { value: v.create() });
            }
            return ke[se];
          }
          function Ce(ke, Ie) {
            for (var Le = 0; Le < Ie; ++Le) ke[Le] = (Math.random() * 255) | 0;
            return ke;
          }
          function Pe(ke) {
            if (typeof Uint8Array == 'function') {
              var Ie = new Uint8Array(ke);
              return (
                typeof crypto < 'u'
                  ? crypto.getRandomValues(Ie)
                  : typeof msCrypto < 'u'
                    ? msCrypto.getRandomValues(Ie)
                    : Ce(Ie, ke),
                Ie
              );
            }
            return Ce(new Array(ke), ke);
          }
          function Ve() {
            var ke = Pe(j);
            (ke[6] = (ke[6] & 79) | 64), (ke[8] = (ke[8] & 191) | 128);
            for (var Ie = '', Le = 0; Le < j; ++Le) {
              var He = ke[Le];
              (Le === 4 || Le === 6 || Le === 8) && (Ie += '-'),
                He < 16 && (Ie += '0'),
                (Ie += He.toString(16).toLowerCase());
            }
            return Ie;
          }
        }
        function ee(j) {
          return (j.__ = void 0), delete j.__, j;
        }
      });
    })(n || (n = {})),
    ip
  );
}
wb();
const Jp = Symbol('format'),
  Wp = Symbol('cbor_biguint');
function lr(n) {
  return Reflect.metadata(Jp, n);
}
function Fu() {
  return Reflect.metadata(Wp, !0);
}
class up {
  static getCborIndex(a, u) {
    return Reflect.getMetadata(Jp, a, u);
  }
  static isCborBigUint(a, u) {
    return Reflect.getMetadata(Wp, a, u);
  }
}
class Vu {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    if (!a) throw new Error('Invalid OrderId');
    const u = a.toLowerCase().startsWith('0x') ? a.slice(2) : a;
    if (!/^[0-9a-f]+$/i.test(u)) throw new Error('Invalid OrderId: not a valid hex string');
    return new Vu(new In(`0x${u}`));
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value.isEqualTo(a.value) : !1;
  }
}
class Ob {
  static encode(a) {
    const u = this.createCborArray(a);
    return Fi.Buffer.from(kp.encode(u));
  }
  static createCborArray(a) {
    if (!a) return [];
    const u = Object.getOwnPropertyNames(a),
      s = [];
    for (const c of u) {
      const m = a[c],
        h = up.getCborIndex(a, c);
      h !== void 0 && (s[h] = this.processValue(m, a, c));
    }
    return s;
  }
  static processValue(a, u, s) {
    return a === void 0
      ? null
      : a instanceof In
        ? a
        : a instanceof nr || a instanceof $e || a instanceof Vu
          ? a.value
          : a instanceof Uint8Array
            ? a
            : a instanceof Array
              ? this.processArray(a)
              : a instanceof Object
                ? this.createCborArray(a)
                : this.processPrimitive(a, u, s);
  }
  static processArray(a) {
    return a.map((u) => this.createCborArray(u));
  }
  static processPrimitive(a, u, s) {
    return up.isCborBigUint(u, s) || typeof a == 'bigint' || typeof a == 'number'
      ? a == null
        ? null
        : In(a.toString())
      : a;
  }
}
class ss {
  static createTransaction(a, u, s, c, m = vs.V0) {
    const h = Ob.encode(c);
    return new Ov(a, u, s, h, m);
  }
  static sign(a, u) {
    return a.sign(u);
  }
}
function Nb(n) {
  return { query: { HIN: String(n) } };
}
function Tb(n) {
  return { query: { HIN: String(n.hin), AssetId: n.assetId ? String(n.assetId) : void 0 } };
}
class Br extends Error {
  constructor(a) {
    super(a), (this.name = 'HibitApiError');
  }
  static throwBadRequestError(a, u, s) {
    throw u !== void 0 && s !== void 0
      ? new Br(`Bad request: ${a} failed with code ${u} and message ${s}`)
      : u !== void 0
        ? new Br(`Bad request: ${a} failed with code ${u}`)
        : s !== void 0
          ? new Br(`Bad request: ${a} failed with message ${s}`)
          : new Br(`Bad request: ${a}`);
  }
  static throwInvalidResponseError(a) {
    throw new Br(`Invalid response: ${a}`);
  }
  static throwRequiredHINError(a) {
    throw new Br(`HIN is required: ${a}`);
  }
  static throwRequiredPrivKeyError(a) {
    throw new Br(`Private key is required: ${a}`);
  }
}
function sr(n, a, u, s) {
  var c = arguments.length,
    m = c < 3 ? a : s === null ? (s = Object.getOwnPropertyDescriptor(a, u)) : s,
    h;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') m = Reflect.decorate(n, a, u, s);
  else for (var o = n.length - 1; o >= 0; o--) (h = n[o]) && (m = (c < 3 ? h(m) : c > 3 ? h(a, u, m) : h(a, u)) || m);
  return c > 3 && m && Object.defineProperty(a, u, m), m;
}
function cr(n, a) {
  if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function') return Reflect.metadata(n, a);
}
function Cu(n, a) {
  const u = new In(n),
    s = new In(10).pow(a);
  return BigInt(u.multipliedBy(s).toFixed(0));
}
const Mb = 32,
  Bb = 'https://testnetopenapi.hibit.app',
  Ub = 'https://openapi.hibit.app';
class Yu {
  constructor(a) {
    Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'price', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'volume', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.assign(this, a);
  }
}
sr([lr(0), Fu(), cr('design:type', Number)], Yu.prototype, 'orderSide', void 0);
sr([lr(1), cr('design:type', BigInt)], Yu.prototype, 'price', void 0);
sr([lr(2), cr('design:type', BigInt)], Yu.prototype, 'volume', void 0);
class $i {
  constructor(a) {
    Object.defineProperty(this, 'exactTokens', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'exactTokensType', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'minOut', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'maxIn', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.assign(this, a);
  }
}
sr([lr(0), cr('design:type', BigInt)], $i.prototype, 'exactTokens', void 0);
sr([lr(1), Fu(), cr('design:type', Number)], $i.prototype, 'exactTokensType', void 0);
sr([lr(2), Fu(), cr('design:type', Number)], $i.prototype, 'orderSide', void 0);
sr([lr(3), cr('design:type', BigInt)], $i.prototype, 'minOut', void 0);
sr([lr(4), cr('design:type', BigInt)], $i.prototype, 'maxIn', void 0);
class $u {
  constructor(a) {
    Object.defineProperty(this, 'orderCategory', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'marketId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'limitOrderDetails', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }),
      Object.defineProperty(this, 'swapV2OrderDetails', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }),
      Object.assign(this, a);
  }
}
sr([lr(0), Fu(), cr('design:type', Number)], $u.prototype, 'orderCategory', void 0);
sr([lr(1), cr('design:type', BigInt)], $u.prototype, 'marketId', void 0);
sr([lr(2), cr('design:type', Yu)], $u.prototype, 'limitOrderDetails', void 0);
sr([lr(3), cr('design:type', $i)], $u.prototype, 'swapV2OrderDetails', void 0);
class Xu {
  constructor(a) {
    Object.defineProperty(this, 'marketId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'isCancelAll', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.isCancelAll = !1),
      Object.assign(this, a);
  }
}
sr([lr(0), cr('design:type', BigInt)], Xu.prototype, 'marketId', void 0);
sr([lr(1), cr('design:type', Vu)], Xu.prototype, 'orderId', void 0);
sr([lr(2), Fu(), cr('design:type', Number)], Xu.prototype, 'orderSide', void 0);
sr([lr(3), cr('design:type', Boolean)], Xu.prototype, 'isCancelAll', void 0);
function Db(n, a) {
  let u, s, c;
  return (
    n.exactTokensType === yi.Source
      ? ((u = n.orderSide === At.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals),
        (s = n.orderSide === At.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals),
        (c = n.orderSide === At.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals))
      : ((u = n.orderSide === At.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals),
        (s = n.orderSide === At.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals),
        (c = n.orderSide === At.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals)),
    new $i({
      exactTokens: Cu(n.exactTokens, u),
      exactTokensType: n.exactTokensType,
      orderSide: n.orderSide,
      minOut: n.minOut ? Cu(n.minOut, s) : void 0,
      maxIn: n.maxIn ? Cu(n.maxIn, c) : void 0
    })
  );
}
function Rb(n, a) {
  return new Yu({ orderSide: n.orderSide, price: Cu(n.price, Mb), volume: Cu(n.volume, a.baseAssetDecimals) });
}
function jb(n, a) {
  return new $u({
    orderCategory: n.orderCategory,
    marketId: n.marketId,
    limitOrderDetails: n.limitOrderDetails ? Rb(n.limitOrderDetails, a) : void 0,
    swapV2OrderDetails: n.swapV2OrderDetails ? Db(n.swapV2OrderDetails, a) : void 0
  });
}
function Cb(n) {
  return new Xu({
    marketId: n.marketId,
    orderId: n.orderId ? Vu.fromString(n.orderId) : void 0,
    orderSide: n.orderSide,
    isCancelAll: n.isCancelAll
  });
}
class qb {
  constructor() {
    Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  setOptions(a) {
    (this.options = a), Xt.setConfig({ baseUrl: a.network === Da.Mainnet ? Ub : Bb });
  }
  async getTimestamp() {
    var s, c;
    const a = 'getTimestamp',
      u = await Hv();
    return (
      this.ensureSuccess(a, u.data),
      ((c = (s = u.data) == null ? void 0 : s.data) != null && c.timestamp) || Br.throwInvalidResponseError(a),
      u.data.data.timestamp
    );
  }
  async getChains() {
    const a = 'getChains',
      u = await Vv();
    return this.ensureSuccess(a, u.data), u.data.data.map((s) => Q1(s));
  }
  async getAssets(a) {
    const u = 'getAssets',
      s = await Gv(ub(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => tp(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getAsset(a) {
    const u = 'getAsset',
      s = await Fv(lb(a));
    return this.ensureSuccess(u, s.data), tp(s.data.data);
  }
  async getMarkets(a) {
    const u = 'getMarkets',
      s = await Kv(sb(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => rp(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getMarket(a) {
    const u = 'getMarket',
      s = await Jv(cb(a));
    return this.ensureSuccess(u, s.data), rp(s.data.data);
  }
  async getMarketsTicker(a) {
    const u = 'getMarketsTicker',
      s = await Xv(fb(a));
    return this.ensureSuccess(u, s.data), s.data.data.items.map((c) => ob(c));
  }
  async getMarketsSwapInfo(a) {
    const u = 'getMarketsSwapInfo',
      s = await $v(yb(a));
    return this.ensureSuccess(u, s.data), s.data.data.items.map((c) => gb(c));
  }
  async getMarketDepth(a) {
    const u = 'getMarketDepth',
      s = await Yv(vb(a));
    return this.ensureSuccess(u, s.data), bb(s.data.data);
  }
  async getMarketKline(a) {
    const u = 'getMarketKline',
      s = await Zv(hb(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => db(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getMarketTrade(a) {
    const u = 'getMarketTrade',
      s = await Qv(mb(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => pb(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getOrders(a) {
    const u = 'getOrders';
    this.ensureHIN(u);
    const s = await Pv(Eb(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => np(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getOrder(a) {
    const u = 'getOrder';
    Sb(a) ||
      Br.throwBadRequestError(
        u,
        400,
        'Must have exactly one of the following properties set: `OrderId`, `ClientOrderId`, or `TxHash`'
      );
    const s = await eb(xb(a));
    return this.ensureSuccess(u, s.data), np(s.data.data);
  }
  async getOrderTrades(a) {
    const u = 'getOrderTrades',
      s = await Wv(_b(a));
    return this.ensureSuccess(u, s.data), s.data.data.map((c) => Ab(c));
  }
  async submitSpotOrder(a, u, s) {
    const c = 'submitSpotOrder';
    this.ensurePrivateKey(c);
    const m = s ? BigInt(s) : await this.getNonce(this.options.hin),
      h = jb(a, u),
      o = ss.createTransaction(gs.CreateSpotOrder, this.options.hin, m | 0n, h),
      S = ss.sign(o, this.options.proxyKey),
      E = await tb(Wm(S));
    this.ensureSuccess(c, E.data);
  }
  async cancelSpotOrder(a, u) {
    const s = 'cancelSpotOrder';
    this.ensurePrivateKey(s), (a.isCancelAll === void 0 || a.isCancelAll === null) && (a.isCancelAll = !1);
    const c = u ? BigInt(u) : await this.getNonce(this.options.hin),
      m = Cb(a),
      h = ss.createTransaction(gs.CancelSpotOrder, this.options.hin, c | 0n, m),
      o = ss.sign(h, this.options.proxyKey),
      S = await rb(Wm(o));
    this.ensureSuccess(s, S.data);
  }
  async getWalletBalances(a) {
    const u = 'getWalletBalances',
      s = await ib(Tb(a));
    this.ensureSuccess(u, s.data);
    const c = new Map();
    for (const [m, h] of Object.entries(s.data.data)) c.set(m, In(h));
    return c;
  }
  async getNonce(a) {
    const u = 'getNonce',
      s = await nb(Nb(a));
    return this.ensureSuccess(u, s.data), BigInt(s.data.data.nonce);
  }
  ensureSuccess(a, u) {
    (u == null ? void 0 : u.code) != 200 &&
      Br.throwBadRequestError(a, u == null ? void 0 : u.code, u == null ? void 0 : u.message);
  }
  ensurePrivateKey(a) {
    this.ensureHIN(a), this.options.proxyKey || Br.throwRequiredPrivKeyError(a);
  }
  ensureHIN(a) {
    this.options.hin || Br.throwRequiredHINError(a);
  }
}
const Ft = ({ title: n, form: a, result: u, error: s }) =>
  H.jsxs('section', {
    children: [
      H.jsx('h2', { className: 'text-lg font-bold', children: n }),
      H.jsxs('div', {
        className: 'flex mt-2 border rounded-lg overflow-hidden',
        children: [
          H.jsx('div', { className: `${typeof u < 'u' ? 'max-w-1/2 border-r' : 'flex-1'} p-4`, children: a }),
          typeof u < 'u' &&
            H.jsxs('div', {
              className: 'p-4 flex flex-col gap-2 overflow-hidden',
              children: [
                H.jsx('p', { className: 'text-sm text-gray-600', children: 'Result' }),
                H.jsx('pre', {
                  className: 'max-w-full max-h-[500px] overflow-auto',
                  children: JSON.stringify(
                    u,
                    (c, m) => {
                      if (typeof m == 'bigint') return String(m);
                      if (m instanceof Map) {
                        const h = {};
                        return (
                          m.forEach((o, S) => {
                            h[S] = String(o);
                          }),
                          h
                        );
                      }
                      return m;
                    },
                    2
                  )
                }),
                H.jsx('pre', { className: 'text-red-500 whitespace-pre-wrap', children: s })
              ]
            })
        ]
      })
    ]
  });
function zb({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    o = async () => {
      u(!0), c(null), h('');
      try {
        c(await n.getTimestamp());
      } catch (S) {
        h(S.message ?? JSON.stringify(S));
      } finally {
        u(!1);
      }
    };
  return H.jsx(Ft, {
    title: 'GetTimestamp',
    form: H.jsx('div', {
      children: H.jsx('button', { className: 'btn', onClick: o, disabled: a, children: a ? 'Loading...' : 'Submit' })
    }),
    result: s,
    error: m
  });
}
function kb({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    o = async () => {
      u(!0), c(null), h('');
      try {
        c(await n.getChains());
      } catch (S) {
        h(S.message ?? JSON.stringify(S));
      } finally {
        u(!1);
      }
    };
  return H.jsx(Ft, {
    title: 'GetChains',
    form: H.jsx('div', {
      children: H.jsx('button', { className: 'btn', onClick: o, disabled: a, children: a ? 'Loading...' : 'Submit' })
    }),
    result: s,
    error: m
  });
}
var Zu = (n) => n.type === 'checkbox',
  Li = (n) => n instanceof Date,
  dr = (n) => n == null;
const Pp = (n) => typeof n == 'object';
var It = (n) => !dr(n) && !Array.isArray(n) && Pp(n) && !Li(n),
  ey = (n) => (It(n) && n.target ? (Zu(n.target) ? n.target.checked : n.target.value) : n),
  Ib = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  ty = (n, a) => n.has(Ib(a)),
  Lb = (n) => {
    const a = n.constructor && n.constructor.prototype;
    return It(a) && a.hasOwnProperty('isPrototypeOf');
  },
  qo = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Sr(n) {
  let a;
  const u = Array.isArray(n),
    s = typeof FileList < 'u' ? n instanceof FileList : !1;
  if (n instanceof Date) a = new Date(n);
  else if (n instanceof Set) a = new Set(n);
  else if (!(qo && (n instanceof Blob || s)) && (u || It(n)))
    if (((a = u ? [] : {}), !u && !Lb(n))) a = n;
    else for (const c in n) n.hasOwnProperty(c) && (a[c] = Sr(n[c]));
  else return n;
  return a;
}
var qs = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  kt = (n) => n === void 0,
  qe = (n, a, u) => {
    if (!a || !It(n)) return u;
    const s = qs(a.split(/[,[\].]+?/)).reduce((c, m) => (dr(c) ? c : c[m]), n);
    return kt(s) || s === n ? (kt(n[a]) ? u : n[a]) : s;
  },
  Jr = (n) => typeof n == 'boolean',
  zo = (n) => /^\w*$/.test(n),
  ry = (n) => qs(n.replace(/["|']|\]/g, '').split(/\.|\[/)),
  St = (n, a, u) => {
    let s = -1;
    const c = zo(a) ? [a] : ry(a),
      m = c.length,
      h = m - 1;
    for (; ++s < m; ) {
      const o = c[s];
      let S = u;
      if (s !== h) {
        const E = n[o];
        S = It(E) || Array.isArray(E) ? E : isNaN(+c[s + 1]) ? {} : [];
      }
      if (o === '__proto__' || o === 'constructor' || o === 'prototype') return;
      (n[o] = S), (n = n[o]);
    }
    return n;
  };
const _s = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  nn = { onBlur: 'onBlur', onChange: 'onChange', onSubmit: 'onSubmit', onTouched: 'onTouched', all: 'all' },
  qn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
  },
  Hb = Et.createContext(null),
  ko = () => Et.useContext(Hb);
var ny = (n, a, u, s = !0) => {
    const c = { defaultValues: a._defaultValues };
    for (const m in n)
      Object.defineProperty(c, m, {
        get: () => {
          const h = m;
          return a._proxyFormState[h] !== nn.all && (a._proxyFormState[h] = !s || nn.all), u && (u[h] = !0), n[h];
        }
      });
    return c;
  },
  Er = (n) => It(n) && !Object.keys(n).length,
  iy = (n, a, u, s) => {
    u(n);
    const { name: c, ...m } = n;
    return (
      Er(m) || Object.keys(m).length >= Object.keys(a).length || Object.keys(m).find((h) => a[h] === (!s || nn.all))
    );
  },
  qu = (n) => (Array.isArray(n) ? n : [n]),
  ay = (n, a, u) => !n || !a || n === a || qu(n).some((s) => s && (u ? s === a : s.startsWith(a) || a.startsWith(s)));
function Io(n) {
  const a = Et.useRef(n);
  (a.current = n),
    Et.useEffect(() => {
      const u = !n.disabled && a.current.subject && a.current.subject.subscribe({ next: a.current.next });
      return () => {
        u && u.unsubscribe();
      };
    }, [n.disabled]);
}
function Gb(n) {
  const a = ko(),
    { control: u = a.control, disabled: s, name: c, exact: m } = n || {},
    [h, o] = Et.useState(u._formState),
    S = Et.useRef(!0),
    E = Et.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    }),
    U = Et.useRef(c);
  return (
    (U.current = c),
    Io({
      disabled: s,
      next: (v) =>
        S.current && ay(U.current, v.name, m) && iy(v, E.current, u._updateFormState) && o({ ...u._formState, ...v }),
      subject: u._subjects.state
    }),
    Et.useEffect(
      () => (
        (S.current = !0),
        E.current.isValid && u._updateValid(!0),
        () => {
          S.current = !1;
        }
      ),
      [u]
    ),
    Et.useMemo(() => ny(h, u, E.current, !1), [h, u])
  );
}
var gn = (n) => typeof n == 'string',
  uy = (n, a, u, s, c) =>
    gn(n)
      ? (s && a.watch.add(n), qe(u, n, c))
      : Array.isArray(n)
        ? n.map((m) => (s && a.watch.add(m), qe(u, m)))
        : (s && (a.watchAll = !0), u);
function Fb(n) {
  const a = ko(),
    { control: u = a.control, name: s, defaultValue: c, disabled: m, exact: h } = n || {},
    o = Et.useRef(s);
  (o.current = s),
    Io({
      disabled: m,
      subject: u._subjects.values,
      next: (U) => {
        ay(o.current, U.name, h) && E(Sr(uy(o.current, u._names, U.values || u._formValues, !1, c)));
      }
    });
  const [S, E] = Et.useState(u._getWatch(s, c));
  return Et.useEffect(() => u._removeUnmounted()), S;
}
function Vb(n) {
  const a = ko(),
    { name: u, disabled: s, control: c = a.control, shouldUnregister: m } = n,
    h = ty(c._names.array, u),
    o = Fb({
      control: c,
      name: u,
      defaultValue: qe(c._formValues, u, qe(c._defaultValues, u, n.defaultValue)),
      exact: !0
    }),
    S = Gb({ control: c, name: u, exact: !0 }),
    E = Et.useRef(c.register(u, { ...n.rules, value: o, ...(Jr(n.disabled) ? { disabled: n.disabled } : {}) })),
    U = Et.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!qe(S.errors, u) },
            isDirty: { enumerable: !0, get: () => !!qe(S.dirtyFields, u) },
            isTouched: { enumerable: !0, get: () => !!qe(S.touchedFields, u) },
            isValidating: { enumerable: !0, get: () => !!qe(S.validatingFields, u) },
            error: { enumerable: !0, get: () => qe(S.errors, u) }
          }
        ),
      [S, u]
    ),
    v = Et.useMemo(
      () => ({
        name: u,
        value: o,
        ...(Jr(s) || S.disabled ? { disabled: S.disabled || s } : {}),
        onChange: (x) => E.current.onChange({ target: { value: ey(x), name: u }, type: _s.CHANGE }),
        onBlur: () => E.current.onBlur({ target: { value: qe(c._formValues, u), name: u }, type: _s.BLUR }),
        ref: (x) => {
          const N = qe(c._fields, u);
          N &&
            x &&
            (N._f.ref = {
              focus: () => x.focus(),
              select: () => x.select(),
              setCustomValidity: (te) => x.setCustomValidity(te),
              reportValidity: () => x.reportValidity()
            });
        }
      }),
      [u, c._formValues, s, S.disabled, o, c._fields]
    );
  return (
    Et.useEffect(() => {
      const x = c._options.shouldUnregister || m,
        N = (te, he) => {
          const ge = qe(c._fields, te);
          ge && ge._f && (ge._f.mount = he);
        };
      if ((N(u, !0), x)) {
        const te = Sr(qe(c._options.defaultValues, u));
        St(c._defaultValues, u, te), kt(qe(c._formValues, u)) && St(c._formValues, u, te);
      }
      return (
        !h && c.register(u),
        () => {
          (h ? x && !c._state.action : x) ? c.unregister(u) : N(u, !1);
        }
      );
    }, [u, c, h, m]),
    Et.useEffect(() => {
      c._updateDisabledField({ disabled: s, fields: c._fields, name: u });
    }, [s, u, c]),
    Et.useMemo(() => ({ field: v, formState: S, fieldState: U }), [v, S, U])
  );
}
const _r = (n) => n.render(Vb(n));
var ly = (n, a, u, s, c) => (a ? { ...u[n], types: { ...(u[n] && u[n].types ? u[n].types : {}), [s]: c || !0 } } : {}),
  lp = (n) => ({
    isOnSubmit: !n || n === nn.onSubmit,
    isOnBlur: n === nn.onBlur,
    isOnChange: n === nn.onChange,
    isOnAll: n === nn.all,
    isOnTouch: n === nn.onTouched
  }),
  sp = (n, a, u) =>
    !u &&
    (a.watchAll || a.watch.has(n) || [...a.watch].some((s) => n.startsWith(s) && /^\.\w+/.test(n.slice(s.length))));
const zu = (n, a, u, s) => {
  for (const c of u || Object.keys(n)) {
    const m = qe(n, c);
    if (m) {
      const { _f: h, ...o } = m;
      if (h) {
        if (h.refs && h.refs[0] && a(h.refs[0], c) && !s) return !0;
        if (h.ref && a(h.ref, h.name) && !s) return !0;
        if (zu(o, a)) break;
      } else if (It(o) && zu(o, a)) break;
    }
  }
};
var Yb = (n, a, u) => {
    const s = qu(qe(n, u));
    return St(s, 'root', a[u]), St(n, u, s), n;
  },
  Lo = (n) => n.type === 'file',
  yn = (n) => typeof n == 'function',
  As = (n) => {
    if (!qo) return !1;
    const a = n ? n.ownerDocument : 0;
    return n instanceof (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement);
  },
  hs = (n) => gn(n),
  Ho = (n) => n.type === 'radio',
  ws = (n) => n instanceof RegExp;
const cp = { value: !1, isValid: !1 },
  fp = { value: !0, isValid: !0 };
var sy = (n) => {
  if (Array.isArray(n)) {
    if (n.length > 1) {
      const a = n.filter((u) => u && u.checked && !u.disabled).map((u) => u.value);
      return { value: a, isValid: !!a.length };
    }
    return n[0].checked && !n[0].disabled
      ? n[0].attributes && !kt(n[0].attributes.value)
        ? kt(n[0].value) || n[0].value === ''
          ? fp
          : { value: n[0].value, isValid: !0 }
        : fp
      : cp;
  }
  return cp;
};
const op = { isValid: !1, value: null };
var cy = (n) =>
  Array.isArray(n) ? n.reduce((a, u) => (u && u.checked && !u.disabled ? { isValid: !0, value: u.value } : a), op) : op;
function hp(n, a, u = 'validate') {
  if (hs(n) || (Array.isArray(n) && n.every(hs)) || (Jr(n) && !n)) return { type: u, message: hs(n) ? n : '', ref: a };
}
var Na = (n) => (It(n) && !ws(n) ? n : { value: n, message: '' }),
  dp = async (n, a, u, s, c, m) => {
    const {
        ref: h,
        refs: o,
        required: S,
        maxLength: E,
        minLength: U,
        min: v,
        max: x,
        pattern: N,
        validate: te,
        name: he,
        valueAsNumber: ge,
        mount: ve
      } = n._f,
      Q = qe(u, he);
    if (!ve || a.has(he)) return {};
    const je = o ? o[0] : h,
      We = (V) => {
        c && je.reportValidity && (je.setCustomValidity(Jr(V) ? '' : V || ''), je.reportValidity());
      },
      _e = {},
      Ae = Ho(h),
      Re = Zu(h),
      y = Ae || Re,
      _ =
        ((ge || Lo(h)) && kt(h.value) && kt(Q)) ||
        (As(h) && h.value === '') ||
        Q === '' ||
        (Array.isArray(Q) && !Q.length),
      A = ly.bind(null, he, s, _e),
      F = (V, Y, X, C = qn.maxLength, T = qn.minLength) => {
        const G = V ? Y : X;
        _e[he] = { type: V ? C : T, message: G, ref: h, ...A(V ? C : T, G) };
      };
    if (
      m
        ? !Array.isArray(Q) || !Q.length
        : S && ((!y && (_ || dr(Q))) || (Jr(Q) && !Q) || (Re && !sy(o).isValid) || (Ae && !cy(o).isValid))
    ) {
      const { value: V, message: Y } = hs(S) ? { value: !!S, message: S } : Na(S);
      if (V && ((_e[he] = { type: qn.required, message: Y, ref: je, ...A(qn.required, Y) }), !s)) return We(Y), _e;
    }
    if (!_ && (!dr(v) || !dr(x))) {
      let V, Y;
      const X = Na(x),
        C = Na(v);
      if (!dr(Q) && !isNaN(Q)) {
        const T = h.valueAsNumber || (Q && +Q);
        dr(X.value) || (V = T > X.value), dr(C.value) || (Y = T < C.value);
      } else {
        const T = h.valueAsDate || new Date(Q),
          G = (R) => new Date(new Date().toDateString() + ' ' + R),
          k = h.type == 'time',
          ue = h.type == 'week';
        gn(X.value) && Q && (V = k ? G(Q) > G(X.value) : ue ? Q > X.value : T > new Date(X.value)),
          gn(C.value) && Q && (Y = k ? G(Q) < G(C.value) : ue ? Q < C.value : T < new Date(C.value));
      }
      if ((V || Y) && (F(!!V, X.message, C.message, qn.max, qn.min), !s)) return We(_e[he].message), _e;
    }
    if ((E || U) && !_ && (gn(Q) || (m && Array.isArray(Q)))) {
      const V = Na(E),
        Y = Na(U),
        X = !dr(V.value) && Q.length > +V.value,
        C = !dr(Y.value) && Q.length < +Y.value;
      if ((X || C) && (F(X, V.message, Y.message), !s)) return We(_e[he].message), _e;
    }
    if (N && !_ && gn(Q)) {
      const { value: V, message: Y } = Na(N);
      if (ws(V) && !Q.match(V) && ((_e[he] = { type: qn.pattern, message: Y, ref: h, ...A(qn.pattern, Y) }), !s))
        return We(Y), _e;
    }
    if (te) {
      if (yn(te)) {
        const V = await te(Q, u),
          Y = hp(V, je);
        if (Y && ((_e[he] = { ...Y, ...A(qn.validate, Y.message) }), !s)) return We(Y.message), _e;
      } else if (It(te)) {
        let V = {};
        for (const Y in te) {
          if (!Er(V) && !s) break;
          const X = hp(await te[Y](Q, u), je, Y);
          X && ((V = { ...X, ...A(Y, X.message) }), We(X.message), s && (_e[he] = V));
        }
        if (!Er(V) && ((_e[he] = { ref: je, ...V }), !s)) return _e;
      }
    }
    return We(!0), _e;
  };
function $b(n, a) {
  const u = a.slice(0, -1).length;
  let s = 0;
  for (; s < u; ) n = kt(n) ? s++ : n[a[s++]];
  return n;
}
function Xb(n) {
  for (const a in n) if (n.hasOwnProperty(a) && !kt(n[a])) return !1;
  return !0;
}
function $t(n, a) {
  const u = Array.isArray(a) ? a : zo(a) ? [a] : ry(a),
    s = u.length === 1 ? n : $b(n, u),
    c = u.length - 1,
    m = u[c];
  return s && delete s[m], c !== 0 && ((It(s) && Er(s)) || (Array.isArray(s) && Xb(s))) && $t(n, u.slice(0, -1)), n;
}
var yo = () => {
    let n = [];
    return {
      get observers() {
        return n;
      },
      next: (c) => {
        for (const m of n) m.next && m.next(c);
      },
      subscribe: (c) => (
        n.push(c),
        {
          unsubscribe: () => {
            n = n.filter((m) => m !== c);
          }
        }
      ),
      unsubscribe: () => {
        n = [];
      }
    };
  },
  Oo = (n) => dr(n) || !Pp(n);
function pi(n, a) {
  if (Oo(n) || Oo(a)) return n === a;
  if (Li(n) && Li(a)) return n.getTime() === a.getTime();
  const u = Object.keys(n),
    s = Object.keys(a);
  if (u.length !== s.length) return !1;
  for (const c of u) {
    const m = n[c];
    if (!s.includes(c)) return !1;
    if (c !== 'ref') {
      const h = a[c];
      if ((Li(m) && Li(h)) || (It(m) && It(h)) || (Array.isArray(m) && Array.isArray(h)) ? !pi(m, h) : m !== h)
        return !1;
    }
  }
  return !0;
}
var fy = (n) => n.type === 'select-multiple',
  Zb = (n) => Ho(n) || Zu(n),
  go = (n) => As(n) && n.isConnected,
  oy = (n) => {
    for (const a in n) if (yn(n[a])) return !0;
    return !1;
  };
function Os(n, a = {}) {
  const u = Array.isArray(n);
  if (It(n) || u)
    for (const s in n)
      Array.isArray(n[s]) || (It(n[s]) && !oy(n[s]))
        ? ((a[s] = Array.isArray(n[s]) ? [] : {}), Os(n[s], a[s]))
        : dr(n[s]) || (a[s] = !0);
  return a;
}
function hy(n, a, u) {
  const s = Array.isArray(n);
  if (It(n) || s)
    for (const c in n)
      Array.isArray(n[c]) || (It(n[c]) && !oy(n[c]))
        ? kt(a) || Oo(u[c])
          ? (u[c] = Array.isArray(n[c]) ? Os(n[c], []) : { ...Os(n[c]) })
          : hy(n[c], dr(a) ? {} : a[c], u[c])
        : (u[c] = !pi(n[c], a[c]));
  return u;
}
var Mu = (n, a) => hy(n, a, Os(a)),
  dy = (n, { valueAsNumber: a, valueAsDate: u, setValueAs: s }) =>
    kt(n) ? n : a ? (n === '' ? NaN : n && +n) : u && gn(n) ? new Date(n) : s ? s(n) : n;
function vo(n) {
  const a = n.ref;
  return Lo(a)
    ? a.files
    : Ho(a)
      ? cy(n.refs).value
      : fy(a)
        ? [...a.selectedOptions].map(({ value: u }) => u)
        : Zu(a)
          ? sy(n.refs).value
          : dy(kt(a.value) ? n.ref.value : a.value, n);
}
var Qb = (n, a, u, s) => {
    const c = {};
    for (const m of n) {
      const h = qe(a, m);
      h && St(c, m, h._f);
    }
    return { criteriaMode: u, names: [...n], fields: c, shouldUseNativeValidation: s };
  },
  Bu = (n) => (kt(n) ? n : ws(n) ? n.source : It(n) ? (ws(n.value) ? n.value.source : n.value) : n);
const mp = 'AsyncFunction';
var Kb = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (yn(n.validate) && n.validate.constructor.name === mp) ||
      (It(n.validate) && Object.values(n.validate).find((a) => a.constructor.name === mp))
    ),
  Jb = (n) => n.mount && (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate);
function pp(n, a, u) {
  const s = qe(n, u);
  if (s || zo(u)) return { error: s, name: u };
  const c = u.split('.');
  for (; c.length; ) {
    const m = c.join('.'),
      h = qe(a, m),
      o = qe(n, m);
    if (h && !Array.isArray(h) && u !== m) return { name: u };
    if (o && o.type) return { name: m, error: o };
    c.pop();
  }
  return { name: u };
}
var Wb = (n, a, u, s, c) =>
    c.isOnAll
      ? !1
      : !u && c.isOnTouch
        ? !(a || n)
        : (u ? s.isOnBlur : c.isOnBlur)
          ? !n
          : (u ? s.isOnChange : c.isOnChange)
            ? n
            : !0,
  Pb = (n, a) => !qs(qe(n, a)).length && $t(n, a);
const eS = { mode: nn.onSubmit, reValidateMode: nn.onChange, shouldFocusError: !0 };
function tS(n = {}) {
  let a = { ...eS, ...n },
    u = {
      submitCount: 0,
      isDirty: !1,
      isLoading: yn(a.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: a.errors || {},
      disabled: a.disabled || !1
    },
    s = {},
    c = It(a.defaultValues) || It(a.values) ? Sr(a.defaultValues || a.values) || {} : {},
    m = a.shouldUnregister ? {} : Sr(c),
    h = { action: !1, mount: !1, watch: !1 },
    o = { mount: new Set(), disabled: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
    S,
    E = 0;
  const U = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    },
    v = { values: yo(), array: yo(), state: yo() },
    x = lp(a.mode),
    N = lp(a.reValidateMode),
    te = a.criteriaMode === nn.all,
    he = (O) => (z) => {
      clearTimeout(E), (E = setTimeout(O, z));
    },
    ge = async (O) => {
      if (!a.disabled && (U.isValid || O)) {
        const z = a.resolver ? Er((await y()).errors) : await A(s, !0);
        z !== u.isValid && v.state.next({ isValid: z });
      }
    },
    ve = (O, z) => {
      !a.disabled &&
        (U.isValidating || U.validatingFields) &&
        ((O || Array.from(o.mount)).forEach((I) => {
          I && (z ? St(u.validatingFields, I, z) : $t(u.validatingFields, I));
        }),
        v.state.next({ validatingFields: u.validatingFields, isValidating: !Er(u.validatingFields) }));
    },
    Q = (O, z = [], I, J, me = !0, ye = !0) => {
      if (J && I && !a.disabled) {
        if (((h.action = !0), ye && Array.isArray(qe(s, O)))) {
          const Me = I(qe(s, O), J.argA, J.argB);
          me && St(s, O, Me);
        }
        if (ye && Array.isArray(qe(u.errors, O))) {
          const Me = I(qe(u.errors, O), J.argA, J.argB);
          me && St(u.errors, O, Me), Pb(u.errors, O);
        }
        if (U.touchedFields && ye && Array.isArray(qe(u.touchedFields, O))) {
          const Me = I(qe(u.touchedFields, O), J.argA, J.argB);
          me && St(u.touchedFields, O, Me);
        }
        U.dirtyFields && (u.dirtyFields = Mu(c, m)),
          v.state.next({ name: O, isDirty: V(O, z), dirtyFields: u.dirtyFields, errors: u.errors, isValid: u.isValid });
      } else St(m, O, z);
    },
    je = (O, z) => {
      St(u.errors, O, z), v.state.next({ errors: u.errors });
    },
    We = (O) => {
      (u.errors = O), v.state.next({ errors: u.errors, isValid: !1 });
    },
    _e = (O, z, I, J) => {
      const me = qe(s, O);
      if (me) {
        const ye = qe(m, O, kt(I) ? qe(c, O) : I);
        kt(ye) || (J && J.defaultChecked) || z ? St(m, O, z ? ye : vo(me._f)) : C(O, ye), h.mount && ge();
      }
    },
    Ae = (O, z, I, J, me) => {
      let ye = !1,
        Me = !1;
      const ze = { name: O };
      if (!a.disabled) {
        const tt = !!(qe(s, O) && qe(s, O)._f && qe(s, O)._f.disabled);
        if (!I || J) {
          U.isDirty && ((Me = u.isDirty), (u.isDirty = ze.isDirty = V()), (ye = Me !== ze.isDirty));
          const b = tt || pi(qe(c, O), z);
          (Me = !!(!tt && qe(u.dirtyFields, O))),
            b || tt ? $t(u.dirtyFields, O) : St(u.dirtyFields, O, !0),
            (ze.dirtyFields = u.dirtyFields),
            (ye = ye || (U.dirtyFields && Me !== !b));
        }
        if (I) {
          const b = qe(u.touchedFields, O);
          b ||
            (St(u.touchedFields, O, I),
            (ze.touchedFields = u.touchedFields),
            (ye = ye || (U.touchedFields && b !== I)));
        }
        ye && me && v.state.next(ze);
      }
      return ye ? ze : {};
    },
    Re = (O, z, I, J) => {
      const me = qe(u.errors, O),
        ye = U.isValid && Jr(z) && u.isValid !== z;
      if (
        (a.delayError && I
          ? ((S = he(() => je(O, I))), S(a.delayError))
          : (clearTimeout(E), (S = null), I ? St(u.errors, O, I) : $t(u.errors, O)),
        (I ? !pi(me, I) : me) || !Er(J) || ye)
      ) {
        const Me = { ...J, ...(ye && Jr(z) ? { isValid: z } : {}), errors: u.errors, name: O };
        (u = { ...u, ...Me }), v.state.next(Me);
      }
    },
    y = async (O) => {
      ve(O, !0);
      const z = await a.resolver(m, a.context, Qb(O || o.mount, s, a.criteriaMode, a.shouldUseNativeValidation));
      return ve(O), z;
    },
    _ = async (O) => {
      const { errors: z } = await y(O);
      if (O)
        for (const I of O) {
          const J = qe(z, I);
          J ? St(u.errors, I, J) : $t(u.errors, I);
        }
      else u.errors = z;
      return z;
    },
    A = async (O, z, I = { valid: !0 }) => {
      for (const J in O) {
        const me = O[J];
        if (me) {
          const { _f: ye, ...Me } = me;
          if (ye) {
            const ze = o.array.has(ye.name),
              tt = me._f && Kb(me._f);
            tt && U.validatingFields && ve([J], !0);
            const b = await dp(me, o.disabled, m, te, a.shouldUseNativeValidation && !z, ze);
            if ((tt && U.validatingFields && ve([J]), b[ye.name] && ((I.valid = !1), z))) break;
            !z &&
              (qe(b, ye.name)
                ? ze
                  ? Yb(u.errors, b, ye.name)
                  : St(u.errors, ye.name, b[ye.name])
                : $t(u.errors, ye.name));
          }
          !Er(Me) && (await A(Me, z, I));
        }
      }
      return I.valid;
    },
    F = () => {
      for (const O of o.unMount) {
        const z = qe(s, O);
        z && (z._f.refs ? z._f.refs.every((I) => !go(I)) : !go(z._f.ref)) && Oe(O);
      }
      o.unMount = new Set();
    },
    V = (O, z) => !a.disabled && (O && z && St(m, O, z), !pi(P(), c)),
    Y = (O, z, I) => uy(O, o, { ...(h.mount ? m : kt(z) ? c : gn(O) ? { [O]: z } : z) }, I, z),
    X = (O) => qs(qe(h.mount ? m : c, O, a.shouldUnregister ? qe(c, O, []) : [])),
    C = (O, z, I = {}) => {
      const J = qe(s, O);
      let me = z;
      if (J) {
        const ye = J._f;
        ye &&
          (!ye.disabled && St(m, O, dy(z, ye)),
          (me = As(ye.ref) && dr(z) ? '' : z),
          fy(ye.ref)
            ? [...ye.ref.options].forEach((Me) => (Me.selected = me.includes(Me.value)))
            : ye.refs
              ? Zu(ye.ref)
                ? ye.refs.length > 1
                  ? ye.refs.forEach(
                      (Me) =>
                        (!Me.defaultChecked || !Me.disabled) &&
                        (Me.checked = Array.isArray(me) ? !!me.find((ze) => ze === Me.value) : me === Me.value)
                    )
                  : ye.refs[0] && (ye.refs[0].checked = !!me)
                : ye.refs.forEach((Me) => (Me.checked = Me.value === me))
              : Lo(ye.ref)
                ? (ye.ref.value = '')
                : ((ye.ref.value = me), ye.ref.type || v.values.next({ name: O, values: { ...m } })));
      }
      (I.shouldDirty || I.shouldTouch) && Ae(O, me, I.shouldTouch, I.shouldDirty, !0), I.shouldValidate && R(O);
    },
    T = (O, z, I) => {
      for (const J in z) {
        const me = z[J],
          ye = `${O}.${J}`,
          Me = qe(s, ye);
        (o.array.has(O) || It(me) || (Me && !Me._f)) && !Li(me) ? T(ye, me, I) : C(ye, me, I);
      }
    },
    G = (O, z, I = {}) => {
      const J = qe(s, O),
        me = o.array.has(O),
        ye = Sr(z);
      St(m, O, ye),
        me
          ? (v.array.next({ name: O, values: { ...m } }),
            (U.isDirty || U.dirtyFields) &&
              I.shouldDirty &&
              v.state.next({ name: O, dirtyFields: Mu(c, m), isDirty: V(O, ye) }))
          : J && !J._f && !dr(ye)
            ? T(O, ye, I)
            : C(O, ye, I),
        sp(O, o) && v.state.next({ ...u }),
        v.values.next({ name: h.mount ? O : void 0, values: { ...m } });
    },
    k = async (O) => {
      h.mount = !0;
      const z = O.target;
      let I = z.name,
        J = !0;
      const me = qe(s, I),
        ye = () => (z.type ? vo(me._f) : ey(O)),
        Me = (ze) => {
          J = Number.isNaN(ze) || (Li(ze) && isNaN(ze.getTime())) || pi(ze, qe(m, I, ze));
        };
      if (me) {
        let ze, tt;
        const b = ye(),
          d = O.type === _s.BLUR || O.type === _s.FOCUS_OUT,
          p =
            (!Jb(me._f) && !a.resolver && !qe(u.errors, I) && !me._f.deps) ||
            Wb(d, qe(u.touchedFields, I), u.isSubmitted, N, x),
          L = sp(I, o, d);
        St(m, I, b), d ? (me._f.onBlur && me._f.onBlur(O), S && S(0)) : me._f.onChange && me._f.onChange(O);
        const ee = Ae(I, b, d, !1),
          j = !Er(ee) || L;
        if ((!d && v.values.next({ name: I, type: O.type, values: { ...m } }), p))
          return (
            U.isValid && (a.mode === 'onBlur' && d ? ge() : d || ge()), j && v.state.next({ name: I, ...(L ? {} : ee) })
          );
        if ((!d && L && v.state.next({ ...u }), a.resolver)) {
          const { errors: q } = await y([I]);
          if ((Me(b), J)) {
            const se = pp(u.errors, s, I),
              xe = pp(q, s, se.name || I);
            (ze = xe.error), (I = xe.name), (tt = Er(q));
          }
        } else
          ve([I], !0),
            (ze = (await dp(me, o.disabled, m, te, a.shouldUseNativeValidation))[I]),
            ve([I]),
            Me(b),
            J && (ze ? (tt = !1) : U.isValid && (tt = await A(s, !0)));
        J && (me._f.deps && R(me._f.deps), Re(I, tt, ze, ee));
      }
    },
    ue = (O, z) => {
      if (qe(u.errors, z) && O.focus) return O.focus(), 1;
    },
    R = async (O, z = {}) => {
      let I, J;
      const me = qu(O);
      if (a.resolver) {
        const ye = await _(kt(O) ? O : me);
        (I = Er(ye)), (J = O ? !me.some((Me) => qe(ye, Me)) : I);
      } else
        O
          ? ((J = (
              await Promise.all(
                me.map(async (ye) => {
                  const Me = qe(s, ye);
                  return await A(Me && Me._f ? { [ye]: Me } : Me);
                })
              )
            ).every(Boolean)),
            !(!J && !u.isValid) && ge())
          : (J = I = await A(s));
      return (
        v.state.next({
          ...(!gn(O) || (U.isValid && I !== u.isValid) ? {} : { name: O }),
          ...(a.resolver || !O ? { isValid: I } : {}),
          errors: u.errors
        }),
        z.shouldFocus && !J && zu(s, ue, O ? me : o.mount),
        J
      );
    },
    P = (O) => {
      const z = { ...(h.mount ? m : c) };
      return kt(O) ? z : gn(O) ? qe(z, O) : O.map((I) => qe(z, I));
    },
    be = (O, z) => ({
      invalid: !!qe((z || u).errors, O),
      isDirty: !!qe((z || u).dirtyFields, O),
      error: qe((z || u).errors, O),
      isValidating: !!qe(u.validatingFields, O),
      isTouched: !!qe((z || u).touchedFields, O)
    }),
    de = (O) => {
      O && qu(O).forEach((z) => $t(u.errors, z)), v.state.next({ errors: O ? u.errors : {} });
    },
    w = (O, z, I) => {
      const J = (qe(s, O, { _f: {} })._f || {}).ref,
        me = qe(u.errors, O) || {},
        { ref: ye, message: Me, type: ze, ...tt } = me;
      St(u.errors, O, { ...tt, ...z, ref: J }),
        v.state.next({ name: O, errors: u.errors, isValid: !1 }),
        I && I.shouldFocus && J && J.focus && J.focus();
    },
    Ue = (O, z) => (yn(O) ? v.values.subscribe({ next: (I) => O(Y(void 0, z), I) }) : Y(O, z, !0)),
    Oe = (O, z = {}) => {
      for (const I of O ? qu(O) : o.mount)
        o.mount.delete(I),
          o.array.delete(I),
          z.keepValue || ($t(s, I), $t(m, I)),
          !z.keepError && $t(u.errors, I),
          !z.keepDirty && $t(u.dirtyFields, I),
          !z.keepTouched && $t(u.touchedFields, I),
          !z.keepIsValidating && $t(u.validatingFields, I),
          !a.shouldUnregister && !z.keepDefaultValue && $t(c, I);
      v.values.next({ values: { ...m } }),
        v.state.next({ ...u, ...(z.keepDirty ? { isDirty: V() } : {}) }),
        !z.keepIsValid && ge();
    },
    Ke = ({ disabled: O, name: z, field: I, fields: J }) => {
      ((Jr(O) && h.mount) || O || o.disabled.has(z)) &&
        (O ? o.disabled.add(z) : o.disabled.delete(z), Ae(z, vo(I ? I._f : qe(J, z)._f), !1, !1, !0));
    },
    Ne = (O, z = {}) => {
      let I = qe(s, O);
      const J = Jr(z.disabled) || Jr(a.disabled);
      return (
        St(s, O, { ...(I || {}), _f: { ...(I && I._f ? I._f : { ref: { name: O } }), name: O, mount: !0, ...z } }),
        o.mount.add(O),
        I ? Ke({ field: I, disabled: Jr(z.disabled) ? z.disabled : a.disabled, name: O }) : _e(O, !0, z.value),
        {
          ...(J ? { disabled: z.disabled || a.disabled } : {}),
          ...(a.progressive
            ? {
                required: !!z.required,
                min: Bu(z.min),
                max: Bu(z.max),
                minLength: Bu(z.minLength),
                maxLength: Bu(z.maxLength),
                pattern: Bu(z.pattern)
              }
            : {}),
          name: O,
          onChange: k,
          onBlur: k,
          ref: (me) => {
            if (me) {
              Ne(O, z), (I = qe(s, O));
              const ye = (kt(me.value) && me.querySelectorAll && me.querySelectorAll('input,select,textarea')[0]) || me,
                Me = Zb(ye),
                ze = I._f.refs || [];
              if (Me ? ze.find((tt) => tt === ye) : ye === I._f.ref) return;
              St(s, O, {
                _f: {
                  ...I._f,
                  ...(Me
                    ? {
                        refs: [...ze.filter(go), ye, ...(Array.isArray(qe(c, O)) ? [{}] : [])],
                        ref: { type: ye.type, name: O }
                      }
                    : { ref: ye })
                }
              }),
                _e(O, !1, void 0, ye);
            } else
              (I = qe(s, O, {})),
                I._f && (I._f.mount = !1),
                (a.shouldUnregister || z.shouldUnregister) && !(ty(o.array, O) && h.action) && o.unMount.add(O);
          }
        }
      );
    },
    De = () => a.shouldFocusError && zu(s, ue, o.mount),
    M = (O) => {
      Jr(O) &&
        (v.state.next({ disabled: O }),
        zu(
          s,
          (z, I) => {
            const J = qe(s, I);
            J &&
              ((z.disabled = J._f.disabled || O),
              Array.isArray(J._f.refs) &&
                J._f.refs.forEach((me) => {
                  me.disabled = J._f.disabled || O;
                }));
          },
          0,
          !1
        ));
    },
    D = (O, z) => async (I) => {
      let J;
      I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
      let me = Sr(m);
      if (o.disabled.size) for (const ye of o.disabled) St(me, ye, void 0);
      if ((v.state.next({ isSubmitting: !0 }), a.resolver)) {
        const { errors: ye, values: Me } = await y();
        (u.errors = ye), (me = Me);
      } else await A(s);
      if (($t(u.errors, 'root'), Er(u.errors))) {
        v.state.next({ errors: {} });
        try {
          await O(me, I);
        } catch (ye) {
          J = ye;
        }
      } else z && (await z({ ...u.errors }, I)), De(), setTimeout(De);
      if (
        (v.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Er(u.errors) && !J,
          submitCount: u.submitCount + 1,
          errors: u.errors
        }),
        J)
      )
        throw J;
    },
    Z = (O, z = {}) => {
      qe(s, O) &&
        (kt(z.defaultValue) ? G(O, Sr(qe(c, O))) : (G(O, z.defaultValue), St(c, O, Sr(z.defaultValue))),
        z.keepTouched || $t(u.touchedFields, O),
        z.keepDirty || ($t(u.dirtyFields, O), (u.isDirty = z.defaultValue ? V(O, Sr(qe(c, O))) : V())),
        z.keepError || ($t(u.errors, O), U.isValid && ge()),
        v.state.next({ ...u }));
    },
    ie = (O, z = {}) => {
      const I = O ? Sr(O) : c,
        J = Sr(I),
        me = Er(O),
        ye = me ? c : J;
      if ((z.keepDefaultValues || (c = I), !z.keepValues)) {
        if (z.keepDirtyValues) {
          const Me = new Set([...o.mount, ...Object.keys(Mu(c, m))]);
          for (const ze of Array.from(Me)) qe(u.dirtyFields, ze) ? St(ye, ze, qe(m, ze)) : G(ze, qe(ye, ze));
        } else {
          if (qo && kt(O))
            for (const Me of o.mount) {
              const ze = qe(s, Me);
              if (ze && ze._f) {
                const tt = Array.isArray(ze._f.refs) ? ze._f.refs[0] : ze._f.ref;
                if (As(tt)) {
                  const b = tt.closest('form');
                  if (b) {
                    b.reset();
                    break;
                  }
                }
              }
            }
          s = {};
        }
        (m = a.shouldUnregister ? (z.keepDefaultValues ? Sr(c) : {}) : Sr(ye)),
          v.array.next({ values: { ...ye } }),
          v.values.next({ values: { ...ye } });
      }
      (o = {
        mount: z.keepDirtyValues ? o.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: ''
      }),
        (h.mount = !U.isValid || !!z.keepIsValid || !!z.keepDirtyValues),
        (h.watch = !!a.shouldUnregister),
        v.state.next({
          submitCount: z.keepSubmitCount ? u.submitCount : 0,
          isDirty: me ? !1 : z.keepDirty ? u.isDirty : !!(z.keepDefaultValues && !pi(O, c)),
          isSubmitted: z.keepIsSubmitted ? u.isSubmitted : !1,
          dirtyFields: me
            ? {}
            : z.keepDirtyValues
              ? z.keepDefaultValues && m
                ? Mu(c, m)
                : u.dirtyFields
              : z.keepDefaultValues && O
                ? Mu(c, O)
                : z.keepDirty
                  ? u.dirtyFields
                  : {},
          touchedFields: z.keepTouched ? u.touchedFields : {},
          errors: z.keepErrors ? u.errors : {},
          isSubmitSuccessful: z.keepIsSubmitSuccessful ? u.isSubmitSuccessful : !1,
          isSubmitting: !1
        });
    },
    W = (O, z) => ie(yn(O) ? O(m) : O, z);
  return {
    control: {
      register: Ne,
      unregister: Oe,
      getFieldState: be,
      handleSubmit: D,
      setError: w,
      _executeSchema: y,
      _getWatch: Y,
      _getDirty: V,
      _updateValid: ge,
      _removeUnmounted: F,
      _updateFieldArray: Q,
      _updateDisabledField: Ke,
      _getFieldArray: X,
      _reset: ie,
      _resetDefaultValues: () =>
        yn(a.defaultValues) &&
        a.defaultValues().then((O) => {
          W(O, a.resetOptions), v.state.next({ isLoading: !1 });
        }),
      _updateFormState: (O) => {
        u = { ...u, ...O };
      },
      _disableForm: M,
      _subjects: v,
      _proxyFormState: U,
      _setErrors: We,
      get _fields() {
        return s;
      },
      get _formValues() {
        return m;
      },
      get _state() {
        return h;
      },
      set _state(O) {
        h = O;
      },
      get _defaultValues() {
        return c;
      },
      get _names() {
        return o;
      },
      set _names(O) {
        o = O;
      },
      get _formState() {
        return u;
      },
      set _formState(O) {
        u = O;
      },
      get _options() {
        return a;
      },
      set _options(O) {
        a = { ...a, ...O };
      }
    },
    trigger: R,
    register: Ne,
    handleSubmit: D,
    watch: Ue,
    setValue: G,
    getValues: P,
    reset: W,
    resetField: Z,
    clearErrors: de,
    unregister: Oe,
    setError: w,
    setFocus: (O, z = {}) => {
      const I = qe(s, O),
        J = I && I._f;
      if (J) {
        const me = J.refs ? J.refs[0] : J.ref;
        me.focus && (me.focus(), z.shouldSelect && yn(me.select) && me.select());
      }
    },
    getFieldState: be
  };
}
function Wt(n = {}) {
  const a = Et.useRef(void 0),
    u = Et.useRef(void 0),
    [s, c] = Et.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: yn(n.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
      defaultValues: yn(n.defaultValues) ? void 0 : n.defaultValues
    });
  a.current || (a.current = { ...tS(n), formState: s });
  const m = a.current.control;
  return (
    (m._options = n),
    Io({
      subject: m._subjects.state,
      next: (h) => {
        iy(h, m._proxyFormState, m._updateFormState, !0) && c({ ...m._formState });
      }
    }),
    Et.useEffect(() => m._disableForm(n.disabled), [m, n.disabled]),
    Et.useEffect(() => {
      if (m._proxyFormState.isDirty) {
        const h = m._getDirty();
        h !== s.isDirty && m._subjects.state.next({ isDirty: h });
      }
    }, [m, s.isDirty]),
    Et.useEffect(() => {
      n.values && !pi(n.values, u.current)
        ? (m._reset(n.values, m._options.resetOptions), (u.current = n.values), c((h) => ({ ...h })))
        : m._resetDefaultValues();
    }, [n.values, m]),
    Et.useEffect(() => {
      n.errors && m._setErrors(n.errors);
    }, [n.errors, m]),
    Et.useEffect(() => {
      m._state.mount || (m._updateValid(), (m._state.mount = !0)),
        m._state.watch && ((m._state.watch = !1), m._subjects.state.next({ ...m._formState })),
        m._removeUnmounted();
    }),
    Et.useEffect(() => {
      n.shouldUnregister && m._subjects.values.next({ values: m._getWatch() });
    }, [n.shouldUnregister, m]),
    (a.current.formState = ny(s, m)),
    a.current
  );
}
const yp = (n, a, u) => {
    if (n && 'reportValidity' in n) {
      const s = qe(u, a);
      n.setCustomValidity((s && s.message) || ''), n.reportValidity();
    }
  },
  my = (n, a) => {
    for (const u in a.fields) {
      const s = a.fields[u];
      s && s.ref && 'reportValidity' in s.ref ? yp(s.ref, u, n) : s && s.refs && s.refs.forEach((c) => yp(c, u, n));
    }
  },
  rS = (n, a) => {
    a.shouldUseNativeValidation && my(n, a);
    const u = {};
    for (const s in n) {
      const c = qe(a.fields, s),
        m = Object.assign(n[s] || {}, { ref: c && c.ref });
      if (nS(a.names || Object.keys(n), s)) {
        const h = Object.assign({}, qe(u, s));
        St(h, 'root', m), St(u, s, h);
      } else St(u, s, m);
    }
    return u;
  },
  nS = (n, a) => n.some((u) => u.match(`^${a}\\.\\d+`));
function Pt(n, a, u) {
  return (
    a === void 0 && (a = {}),
    u === void 0 && (u = {}),
    function (s, c, m) {
      try {
        return Promise.resolve(
          (function (h, o) {
            try {
              var S =
                (a.context,
                Promise.resolve(
                  n[u.mode === 'sync' ? 'validateSync' : 'validate'](
                    s,
                    Object.assign({ abortEarly: !1 }, a, { context: c })
                  )
                ).then(function (E) {
                  return (
                    m.shouldUseNativeValidation && my({}, m), { values: u.raw ? Object.assign({}, s) : E, errors: {} }
                  );
                }));
            } catch (E) {
              return o(E);
            }
            return S && S.then ? S.then(void 0, o) : S;
          })(0, function (h) {
            if (!h.inner) throw h;
            return {
              values: {},
              errors: rS(
                ((o = h),
                (S = !m.shouldUseNativeValidation && m.criteriaMode === 'all'),
                (o.inner || []).reduce(function (E, U) {
                  if ((E[U.path] || (E[U.path] = { message: U.message, type: U.type }), S)) {
                    var v = E[U.path].types,
                      x = v && v[U.type];
                    E[U.path] = ly(U.path, S, E, U.type, x ? [].concat(x, U.message) : U.message);
                  }
                  return E;
                }, {})),
                m
              )
            };
            var o, S;
          })
        );
      } catch (h) {
        return Promise.reject(h);
      }
    }
  );
}
var bo, gp;
function iS() {
  if (gp) return bo;
  gp = 1;
  function n(ve) {
    (this._maxSize = ve), this.clear();
  }
  (n.prototype.clear = function () {
    (this._size = 0), (this._values = Object.create(null));
  }),
    (n.prototype.get = function (ve) {
      return this._values[ve];
    }),
    (n.prototype.set = function (ve, Q) {
      return this._size >= this._maxSize && this.clear(), ve in this._values || this._size++, (this._values[ve] = Q);
    });
  var a = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    u = /^\d+$/,
    s = /^\d/,
    c = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    m = /^\s*(['"]?)(.*?)(\1)\s*$/,
    h = 512,
    o = new n(h),
    S = new n(h),
    E = new n(h);
  bo = {
    Cache: n,
    split: v,
    normalizePath: U,
    setter: function (ve) {
      var Q = U(ve);
      return (
        S.get(ve) ||
        S.set(ve, function (We, _e) {
          for (var Ae = 0, Re = Q.length, y = We; Ae < Re - 1; ) {
            var _ = Q[Ae];
            if (_ === '__proto__' || _ === 'constructor' || _ === 'prototype') return We;
            y = y[Q[Ae++]];
          }
          y[Q[Ae]] = _e;
        })
      );
    },
    getter: function (ve, Q) {
      var je = U(ve);
      return (
        E.get(ve) ||
        E.set(ve, function (_e) {
          for (var Ae = 0, Re = je.length; Ae < Re; )
            if (_e != null || !Q) _e = _e[je[Ae++]];
            else return;
          return _e;
        })
      );
    },
    join: function (ve) {
      return ve.reduce(function (Q, je) {
        return Q + (N(je) || u.test(je) ? '[' + je + ']' : (Q ? '.' : '') + je);
      }, '');
    },
    forEach: function (ve, Q, je) {
      x(Array.isArray(ve) ? ve : v(ve), Q, je);
    }
  };
  function U(ve) {
    return (
      o.get(ve) ||
      o.set(
        ve,
        v(ve).map(function (Q) {
          return Q.replace(m, '$2');
        })
      )
    );
  }
  function v(ve) {
    return ve.match(a) || [''];
  }
  function x(ve, Q, je) {
    var We = ve.length,
      _e,
      Ae,
      Re,
      y;
    for (Ae = 0; Ae < We; Ae++)
      (_e = ve[Ae]),
        _e &&
          (ge(_e) && (_e = '"' + _e + '"'), (y = N(_e)), (Re = !y && /^\d+$/.test(_e)), Q.call(je, _e, y, Re, Ae, ve));
  }
  function N(ve) {
    return typeof ve == 'string' && ve && ["'", '"'].indexOf(ve.charAt(0)) !== -1;
  }
  function te(ve) {
    return ve.match(s) && !ve.match(u);
  }
  function he(ve) {
    return c.test(ve);
  }
  function ge(ve) {
    return !N(ve) && (te(ve) || he(ve));
  }
  return bo;
}
var Vi = iS(),
  So,
  vp;
function aS() {
  if (vp) return So;
  vp = 1;
  const n =
      /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    a = (U) => U.match(n) || [],
    u = (U) => U[0].toUpperCase() + U.slice(1),
    s = (U, v) => a(U).join(v).toLowerCase(),
    c = (U) => a(U).reduce((v, x) => `${v}${v ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()}`, '');
  return (
    (So = {
      words: a,
      upperFirst: u,
      camelCase: c,
      pascalCase: (U) => u(c(U)),
      snakeCase: (U) => s(U, '_'),
      kebabCase: (U) => s(U, '-'),
      sentenceCase: (U) => u(s(U, ' ')),
      titleCase: (U) => a(U).map(u).join(' ')
    }),
    So
  );
}
var Eo = aS(),
  cs = { exports: {} },
  bp;
function uS() {
  if (bp) return cs.exports;
  (bp = 1),
    (cs.exports = function (c) {
      return n(a(c), c);
    }),
    (cs.exports.array = n);
  function n(c, m) {
    var h = c.length,
      o = new Array(h),
      S = {},
      E = h,
      U = u(m),
      v = s(c);
    for (
      m.forEach(function (N) {
        if (!v.has(N[0]) || !v.has(N[1]))
          throw new Error('Unknown node. There is an unknown node in the supplied edges.');
      });
      E--;

    )
      S[E] || x(c[E], E, new Set());
    return o;
    function x(N, te, he) {
      if (he.has(N)) {
        var ge;
        try {
          ge = ', node was:' + JSON.stringify(N);
        } catch {
          ge = '';
        }
        throw new Error('Cyclic dependency' + ge);
      }
      if (!v.has(N))
        throw new Error(
          'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(N)
        );
      if (!S[te]) {
        S[te] = !0;
        var ve = U.get(N) || new Set();
        if (((ve = Array.from(ve)), (te = ve.length))) {
          he.add(N);
          do {
            var Q = ve[--te];
            x(Q, v.get(Q), he);
          } while (te);
          he.delete(N);
        }
        o[--h] = N;
      }
    }
  }
  function a(c) {
    for (var m = new Set(), h = 0, o = c.length; h < o; h++) {
      var S = c[h];
      m.add(S[0]), m.add(S[1]);
    }
    return Array.from(m);
  }
  function u(c) {
    for (var m = new Map(), h = 0, o = c.length; h < o; h++) {
      var S = c[h];
      m.has(S[0]) || m.set(S[0], new Set()), m.has(S[1]) || m.set(S[1], new Set()), m.get(S[0]).add(S[1]);
    }
    return m;
  }
  function s(c) {
    for (var m = new Map(), h = 0, o = c.length; h < o; h++) m.set(c[h], h);
    return m;
  }
  return cs.exports;
}
var lS = uS();
const sS = Iu(lS),
  cS = Object.prototype.toString,
  fS = Error.prototype.toString,
  oS = RegExp.prototype.toString,
  hS = typeof Symbol < 'u' ? Symbol.prototype.toString : () => '',
  dS = /^Symbol\((.*)\)(.*)$/;
function mS(n) {
  return n != +n ? 'NaN' : n === 0 && 1 / n < 0 ? '-0' : '' + n;
}
function Sp(n, a = !1) {
  if (n == null || n === !0 || n === !1) return '' + n;
  const u = typeof n;
  if (u === 'number') return mS(n);
  if (u === 'string') return a ? `"${n}"` : n;
  if (u === 'function') return '[Function ' + (n.name || 'anonymous') + ']';
  if (u === 'symbol') return hS.call(n).replace(dS, 'Symbol($1)');
  const s = cS.call(n).slice(8, -1);
  return s === 'Date'
    ? isNaN(n.getTime())
      ? '' + n
      : n.toISOString(n)
    : s === 'Error' || n instanceof Error
      ? '[' + fS.call(n) + ']'
      : s === 'RegExp'
        ? oS.call(n)
        : null;
}
function Ln(n, a) {
  let u = Sp(n, a);
  return u !== null
    ? u
    : JSON.stringify(
        n,
        function (s, c) {
          let m = Sp(this[s], a);
          return m !== null ? m : c;
        },
        2
      );
}
function py(n) {
  return n == null ? [] : [].concat(n);
}
let yy,
  gy,
  vy,
  pS = /\$\{\s*(\w+)\s*\}/g;
yy = Symbol.toStringTag;
class Ep {
  constructor(a, u, s, c) {
    (this.name = void 0),
      (this.message = void 0),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = void 0),
      (this.inner = void 0),
      (this[yy] = 'Error'),
      (this.name = 'ValidationError'),
      (this.value = u),
      (this.path = s),
      (this.type = c),
      (this.errors = []),
      (this.inner = []),
      py(a).forEach((m) => {
        if (xr.isError(m)) {
          this.errors.push(...m.errors);
          const h = m.inner.length ? m.inner : [m];
          this.inner.push(...h);
        } else this.errors.push(m);
      }),
      (this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]);
  }
}
gy = Symbol.hasInstance;
vy = Symbol.toStringTag;
class xr extends Error {
  static formatError(a, u) {
    const s = u.label || u.path || 'this';
    return (
      (u = Object.assign({}, u, { path: s, originalPath: u.path })),
      typeof a == 'string' ? a.replace(pS, (c, m) => Ln(u[m])) : typeof a == 'function' ? a(u) : a
    );
  }
  static isError(a) {
    return a && a.name === 'ValidationError';
  }
  constructor(a, u, s, c, m) {
    const h = new Ep(a, u, s, c);
    if (m) return h;
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = []),
      (this.inner = []),
      (this[vy] = 'Error'),
      (this.name = h.name),
      (this.message = h.message),
      (this.type = h.type),
      (this.value = h.value),
      (this.path = h.path),
      (this.errors = h.errors),
      (this.inner = h.inner),
      Error.captureStackTrace && Error.captureStackTrace(this, xr);
  }
  static [gy](a) {
    return Ep[Symbol.hasInstance](a) || super[Symbol.hasInstance](a);
  }
}
let mn = {
    default: '${path} is invalid',
    required: '${path} is a required field',
    defined: '${path} must be defined',
    notNull: '${path} cannot be null',
    oneOf: '${path} must be one of the following values: ${values}',
    notOneOf: '${path} must not be one of the following values: ${values}',
    notType: ({ path: n, type: a, value: u, originalValue: s }) => {
      const c = s != null && s !== u ? ` (cast from the value \`${Ln(s, !0)}\`).` : '.';
      return a !== 'mixed'
        ? `${n} must be a \`${a}\` type, but the final value was: \`${Ln(u, !0)}\`` + c
        : `${n} must match the configured type. The validated value was: \`${Ln(u, !0)}\`` + c;
    }
  },
  vr = {
    length: '${path} must be exactly ${length} characters',
    min: '${path} must be at least ${min} characters',
    max: '${path} must be at most ${max} characters',
    matches: '${path} must match the following: "${regex}"',
    email: '${path} must be a valid email',
    url: '${path} must be a valid URL',
    uuid: '${path} must be a valid UUID',
    datetime: '${path} must be a valid ISO date-time',
    datetime_precision:
      '${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits',
    datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: '${path} must be a trimmed string',
    lowercase: '${path} must be a lowercase string',
    uppercase: '${path} must be a upper case string'
  },
  di = {
    min: '${path} must be greater than or equal to ${min}',
    max: '${path} must be less than or equal to ${max}',
    lessThan: '${path} must be less than ${less}',
    moreThan: '${path} must be greater than ${more}',
    positive: '${path} must be a positive number',
    negative: '${path} must be a negative number',
    integer: '${path} must be an integer'
  },
  No = { min: '${path} field must be later than ${min}', max: '${path} field must be at earlier than ${max}' },
  To = { isValue: '${path} field must be ${value}' },
  ds = {
    noUnknown: '${path} field has unspecified keys: ${unknown}',
    exact: '${path} object contains unknown properties: ${properties}'
  },
  ms = {
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items',
    length: '${path} must have ${length} items'
  },
  yS = {
    notType: (n) => {
      const { path: a, value: u, spec: s } = n,
        c = s.types.length;
      if (Array.isArray(u)) {
        if (u.length < c)
          return `${a} tuple value has too few items, expected a length of ${c} but got ${u.length} for value: \`${Ln(u, !0)}\``;
        if (u.length > c)
          return `${a} tuple value has too many items, expected a length of ${c} but got ${u.length} for value: \`${Ln(u, !0)}\``;
      }
      return xr.formatError(mn.notType, n);
    }
  };
Object.assign(Object.create(null), {
  mixed: mn,
  string: vr,
  number: di,
  date: No,
  object: ds,
  array: ms,
  boolean: To,
  tuple: yS
});
const zs = (n) => n && n.__isYupSchema__;
class Ns {
  static fromOptions(a, u) {
    if (!u.then && !u.otherwise)
      throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let { is: s, then: c, otherwise: m } = u,
      h = typeof s == 'function' ? s : (...o) => o.every((S) => S === s);
    return new Ns(a, (o, S) => {
      var E;
      let U = h(...o) ? c : m;
      return (E = U == null ? void 0 : U(S)) != null ? E : S;
    });
  }
  constructor(a, u) {
    (this.fn = void 0), (this.refs = a), (this.refs = a), (this.fn = u);
  }
  resolve(a, u) {
    let s = this.refs.map((m) =>
        m.getValue(u == null ? void 0 : u.value, u == null ? void 0 : u.parent, u == null ? void 0 : u.context)
      ),
      c = this.fn(s, a, u);
    if (c === void 0 || c === a) return a;
    if (!zs(c)) throw new TypeError('conditions must return a schema object');
    return c.resolve(u);
  }
}
const fs = { context: '$', value: '.' };
class Xi {
  constructor(a, u = {}) {
    if (
      ((this.key = void 0),
      (this.isContext = void 0),
      (this.isValue = void 0),
      (this.isSibling = void 0),
      (this.path = void 0),
      (this.getter = void 0),
      (this.map = void 0),
      typeof a != 'string')
    )
      throw new TypeError('ref must be a string, got: ' + a);
    if (((this.key = a.trim()), a === '')) throw new TypeError('ref must be a non-empty string');
    (this.isContext = this.key[0] === fs.context),
      (this.isValue = this.key[0] === fs.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let s = this.isContext ? fs.context : this.isValue ? fs.value : '';
    (this.path = this.key.slice(s.length)), (this.getter = this.path && Vi.getter(this.path, !0)), (this.map = u.map);
  }
  getValue(a, u, s) {
    let c = this.isContext ? s : this.isValue ? a : u;
    return this.getter && (c = this.getter(c || {})), this.map && (c = this.map(c)), c;
  }
  cast(a, u) {
    return this.getValue(a, u == null ? void 0 : u.parent, u == null ? void 0 : u.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return { type: 'ref', key: this.key };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(a) {
    return a && a.__isYupRef;
  }
}
Xi.prototype.__isYupRef = !0;
const an = (n) => n == null;
function Ta(n) {
  function a({ value: u, path: s = '', options: c, originalValue: m, schema: h }, o, S) {
    const { name: E, test: U, params: v, message: x, skipAbsent: N } = n;
    let {
      parent: te,
      context: he,
      abortEarly: ge = h.spec.abortEarly,
      disableStackTrace: ve = h.spec.disableStackTrace
    } = c;
    function Q(F) {
      return Xi.isRef(F) ? F.getValue(u, te, he) : F;
    }
    function je(F = {}) {
      const V = Object.assign(
        {
          value: u,
          originalValue: m,
          label: h.spec.label,
          path: F.path || s,
          spec: h.spec,
          disableStackTrace: F.disableStackTrace || ve
        },
        v,
        F.params
      );
      for (const X of Object.keys(V)) V[X] = Q(V[X]);
      const Y = new xr(xr.formatError(F.message || x, V), u, V.path, F.type || E, V.disableStackTrace);
      return (Y.params = V), Y;
    }
    const We = ge ? o : S;
    let _e = {
      path: s,
      parent: te,
      type: E,
      from: c.from,
      createError: je,
      resolve: Q,
      options: c,
      originalValue: m,
      schema: h
    };
    const Ae = (F) => {
        xr.isError(F) ? We(F) : F ? S(null) : We(je());
      },
      Re = (F) => {
        xr.isError(F) ? We(F) : o(F);
      };
    if (N && an(u)) return Ae(!0);
    let _;
    try {
      var A;
      if (((_ = U.call(_e, u, _e)), typeof ((A = _) == null ? void 0 : A.then) == 'function')) {
        if (c.sync)
          throw new Error(
            `Validation test of type: "${_e.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
          );
        return Promise.resolve(_).then(Ae, Re);
      }
    } catch (F) {
      Re(F);
      return;
    }
    Ae(_);
  }
  return (a.OPTIONS = n), a;
}
function gS(n, a, u, s = u) {
  let c, m, h;
  return a
    ? (Vi.forEach(a, (o, S, E) => {
        let U = S ? o.slice(1, o.length - 1) : o;
        n = n.resolve({ context: s, parent: c, value: u });
        let v = n.type === 'tuple',
          x = E ? parseInt(U, 10) : 0;
        if (n.innerType || v) {
          if (v && !E)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${h}" must contain an index to the tuple element, e.g. "${h}[0]"`
            );
          if (u && x >= u.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${o}, in the path: ${a}. because there is no value at that index. `
            );
          (c = u), (u = u && u[x]), (n = v ? n.spec.types[x] : n.innerType);
        }
        if (!E) {
          if (!n.fields || !n.fields[U])
            throw new Error(
              `The schema does not contain the path: ${a}. (failed at: ${h} which is a type: "${n.type}")`
            );
          (c = u), (u = u && u[U]), (n = n.fields[U]);
        }
        (m = U), (h = S ? '[' + o + ']' : '.' + o);
      }),
      { schema: n, parent: c, parentPath: m })
    : { parent: c, parentPath: a, schema: n };
}
class Ts extends Set {
  describe() {
    const a = [];
    for (const u of this.values()) a.push(Xi.isRef(u) ? u.describe() : u);
    return a;
  }
  resolveAll(a) {
    let u = [];
    for (const s of this.values()) u.push(a(s));
    return u;
  }
  clone() {
    return new Ts(this.values());
  }
  merge(a, u) {
    const s = this.clone();
    return a.forEach((c) => s.add(c)), u.forEach((c) => s.delete(c)), s;
  }
}
function Ma(n, a = new Map()) {
  if (zs(n) || !n || typeof n != 'object') return n;
  if (a.has(n)) return a.get(n);
  let u;
  if (n instanceof Date) (u = new Date(n.getTime())), a.set(n, u);
  else if (n instanceof RegExp) (u = new RegExp(n)), a.set(n, u);
  else if (Array.isArray(n)) {
    (u = new Array(n.length)), a.set(n, u);
    for (let s = 0; s < n.length; s++) u[s] = Ma(n[s], a);
  } else if (n instanceof Map) {
    (u = new Map()), a.set(n, u);
    for (const [s, c] of n.entries()) u.set(s, Ma(c, a));
  } else if (n instanceof Set) {
    (u = new Set()), a.set(n, u);
    for (const s of n) u.add(Ma(s, a));
  } else if (n instanceof Object) {
    (u = {}), a.set(n, u);
    for (const [s, c] of Object.entries(n)) u[s] = Ma(c, a);
  } else throw Error(`Unable to clone ${n}`);
  return u;
}
class Rr {
  constructor(a) {
    (this.type = void 0),
      (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this.internalTests = {}),
      (this._whitelist = new Ts()),
      (this._blacklist = new Ts()),
      (this.exclusiveTests = Object.create(null)),
      (this._typeCheck = void 0),
      (this.spec = void 0),
      (this.tests = []),
      (this.transforms = []),
      this.withMutation(() => {
        this.typeError(mn.notType);
      }),
      (this.type = a.type),
      (this._typeCheck = a.check),
      (this.spec = Object.assign(
        {
          strip: !1,
          strict: !1,
          abortEarly: !0,
          recursive: !0,
          disableStackTrace: !1,
          nullable: !1,
          optional: !0,
          coerce: !0
        },
        a == null ? void 0 : a.spec
      )),
      this.withMutation((u) => {
        u.nonNullable();
      });
  }
  get _type() {
    return this.type;
  }
  clone(a) {
    if (this._mutate) return a && Object.assign(this.spec, a), this;
    const u = Object.create(Object.getPrototypeOf(this));
    return (
      (u.type = this.type),
      (u._typeCheck = this._typeCheck),
      (u._whitelist = this._whitelist.clone()),
      (u._blacklist = this._blacklist.clone()),
      (u.internalTests = Object.assign({}, this.internalTests)),
      (u.exclusiveTests = Object.assign({}, this.exclusiveTests)),
      (u.deps = [...this.deps]),
      (u.conditions = [...this.conditions]),
      (u.tests = [...this.tests]),
      (u.transforms = [...this.transforms]),
      (u.spec = Ma(Object.assign({}, this.spec, a))),
      u
    );
  }
  label(a) {
    let u = this.clone();
    return (u.spec.label = a), u;
  }
  meta(...a) {
    if (a.length === 0) return this.spec.meta;
    let u = this.clone();
    return (u.spec.meta = Object.assign(u.spec.meta || {}, a[0])), u;
  }
  withMutation(a) {
    let u = this._mutate;
    this._mutate = !0;
    let s = a(this);
    return (this._mutate = u), s;
  }
  concat(a) {
    if (!a || a === this) return this;
    if (a.type !== this.type && this.type !== 'mixed')
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${a.type}`);
    let u = this,
      s = a.clone();
    const c = Object.assign({}, u.spec, s.spec);
    return (
      (s.spec = c),
      (s.internalTests = Object.assign({}, u.internalTests, s.internalTests)),
      (s._whitelist = u._whitelist.merge(a._whitelist, a._blacklist)),
      (s._blacklist = u._blacklist.merge(a._blacklist, a._whitelist)),
      (s.tests = u.tests),
      (s.exclusiveTests = u.exclusiveTests),
      s.withMutation((m) => {
        a.tests.forEach((h) => {
          m.test(h.OPTIONS);
        });
      }),
      (s.transforms = [...u.transforms, ...s.transforms]),
      s
    );
  }
  isType(a) {
    return a == null
      ? !!((this.spec.nullable && a === null) || (this.spec.optional && a === void 0))
      : this._typeCheck(a);
  }
  resolve(a) {
    let u = this;
    if (u.conditions.length) {
      let s = u.conditions;
      (u = u.clone()), (u.conditions = []), (u = s.reduce((c, m) => m.resolve(c, a), u)), (u = u.resolve(a));
    }
    return u;
  }
  resolveOptions(a) {
    var u, s, c, m;
    return Object.assign({}, a, {
      from: a.from || [],
      strict: (u = a.strict) != null ? u : this.spec.strict,
      abortEarly: (s = a.abortEarly) != null ? s : this.spec.abortEarly,
      recursive: (c = a.recursive) != null ? c : this.spec.recursive,
      disableStackTrace: (m = a.disableStackTrace) != null ? m : this.spec.disableStackTrace
    });
  }
  cast(a, u = {}) {
    let s = this.resolve(Object.assign({ value: a }, u)),
      c = u.assert === 'ignore-optionality',
      m = s._cast(a, u);
    if (u.assert !== !1 && !s.isType(m)) {
      if (c && an(m)) return m;
      let h = Ln(a),
        o = Ln(m);
      throw new TypeError(
        `The value of ${u.path || 'field'} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${h} 
` + (o !== h ? `result of cast: ${o}` : '')
      );
    }
    return m;
  }
  _cast(a, u) {
    let s = a === void 0 ? a : this.transforms.reduce((c, m) => m.call(this, c, a, this), a);
    return s === void 0 && (s = this.getDefault(u)), s;
  }
  _validate(a, u = {}, s, c) {
    let { path: m, originalValue: h = a, strict: o = this.spec.strict } = u,
      S = a;
    o || (S = this._cast(S, Object.assign({ assert: !1 }, u)));
    let E = [];
    for (let U of Object.values(this.internalTests)) U && E.push(U);
    this.runTests({ path: m, value: S, originalValue: h, options: u, tests: E }, s, (U) => {
      if (U.length) return c(U, S);
      this.runTests({ path: m, value: S, originalValue: h, options: u, tests: this.tests }, s, c);
    });
  }
  runTests(a, u, s) {
    let c = !1,
      { tests: m, value: h, originalValue: o, path: S, options: E } = a,
      U = (he) => {
        c || ((c = !0), u(he, h));
      },
      v = (he) => {
        c || ((c = !0), s(he, h));
      },
      x = m.length,
      N = [];
    if (!x) return v([]);
    let te = { value: h, originalValue: o, path: S, options: E, schema: this };
    for (let he = 0; he < m.length; he++) {
      const ge = m[he];
      ge(te, U, function (Q) {
        Q && (Array.isArray(Q) ? N.push(...Q) : N.push(Q)), --x <= 0 && v(N);
      });
    }
  }
  asNestedTest({ key: a, index: u, parent: s, parentPath: c, originalParent: m, options: h }) {
    const o = a ?? u;
    if (o == null) throw TypeError('Must include `key` or `index` for nested validations');
    const S = typeof o == 'number';
    let E = s[o];
    const U = Object.assign({}, h, {
      strict: !0,
      parent: s,
      value: E,
      originalValue: m[o],
      key: void 0,
      [S ? 'index' : 'key']: o,
      path: S || o.includes('.') ? `${c || ''}[${S ? o : `"${o}"`}]` : (c ? `${c}.` : '') + a
    });
    return (v, x, N) => this.resolve(U)._validate(E, U, x, N);
  }
  validate(a, u) {
    var s;
    let c = this.resolve(Object.assign({}, u, { value: a })),
      m = (s = u == null ? void 0 : u.disableStackTrace) != null ? s : c.spec.disableStackTrace;
    return new Promise((h, o) =>
      c._validate(
        a,
        u,
        (S, E) => {
          xr.isError(S) && (S.value = E), o(S);
        },
        (S, E) => {
          S.length ? o(new xr(S, E, void 0, void 0, m)) : h(E);
        }
      )
    );
  }
  validateSync(a, u) {
    var s;
    let c = this.resolve(Object.assign({}, u, { value: a })),
      m,
      h = (s = u == null ? void 0 : u.disableStackTrace) != null ? s : c.spec.disableStackTrace;
    return (
      c._validate(
        a,
        Object.assign({}, u, { sync: !0 }),
        (o, S) => {
          throw (xr.isError(o) && (o.value = S), o);
        },
        (o, S) => {
          if (o.length) throw new xr(o, a, void 0, void 0, h);
          m = S;
        }
      ),
      m
    );
  }
  isValid(a, u) {
    return this.validate(a, u).then(
      () => !0,
      (s) => {
        if (xr.isError(s)) return !1;
        throw s;
      }
    );
  }
  isValidSync(a, u) {
    try {
      return this.validateSync(a, u), !0;
    } catch (s) {
      if (xr.isError(s)) return !1;
      throw s;
    }
  }
  _getDefault(a) {
    let u = this.spec.default;
    return u == null ? u : typeof u == 'function' ? u.call(this, a) : Ma(u);
  }
  getDefault(a) {
    return this.resolve(a || {})._getDefault(a);
  }
  default(a) {
    return arguments.length === 0 ? this._getDefault() : this.clone({ default: a });
  }
  strict(a = !0) {
    return this.clone({ strict: a });
  }
  nullability(a, u) {
    const s = this.clone({ nullable: a });
    return (
      (s.internalTests.nullable = Ta({
        message: u,
        name: 'nullable',
        test(c) {
          return c === null ? this.schema.spec.nullable : !0;
        }
      })),
      s
    );
  }
  optionality(a, u) {
    const s = this.clone({ optional: a });
    return (
      (s.internalTests.optionality = Ta({
        message: u,
        name: 'optionality',
        test(c) {
          return c === void 0 ? this.schema.spec.optional : !0;
        }
      })),
      s
    );
  }
  optional() {
    return this.optionality(!0);
  }
  defined(a = mn.defined) {
    return this.optionality(!1, a);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(a = mn.notNull) {
    return this.nullability(!1, a);
  }
  required(a = mn.required) {
    return this.clone().withMutation((u) => u.nonNullable(a).defined(a));
  }
  notRequired() {
    return this.clone().withMutation((a) => a.nullable().optional());
  }
  transform(a) {
    let u = this.clone();
    return u.transforms.push(a), u;
  }
  test(...a) {
    let u;
    if (
      (a.length === 1
        ? typeof a[0] == 'function'
          ? (u = { test: a[0] })
          : (u = a[0])
        : a.length === 2
          ? (u = { name: a[0], test: a[1] })
          : (u = { name: a[0], message: a[1], test: a[2] }),
      u.message === void 0 && (u.message = mn.default),
      typeof u.test != 'function')
    )
      throw new TypeError('`test` is a required parameters');
    let s = this.clone(),
      c = Ta(u),
      m = u.exclusive || (u.name && s.exclusiveTests[u.name] === !0);
    if (u.exclusive && !u.name)
      throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
    return (
      u.name && (s.exclusiveTests[u.name] = !!u.exclusive),
      (s.tests = s.tests.filter((h) => !(h.OPTIONS.name === u.name && (m || h.OPTIONS.test === c.OPTIONS.test)))),
      s.tests.push(c),
      s
    );
  }
  when(a, u) {
    !Array.isArray(a) && typeof a != 'string' && ((u = a), (a = '.'));
    let s = this.clone(),
      c = py(a).map((m) => new Xi(m));
    return (
      c.forEach((m) => {
        m.isSibling && s.deps.push(m.key);
      }),
      s.conditions.push(typeof u == 'function' ? new Ns(c, u) : Ns.fromOptions(c, u)),
      s
    );
  }
  typeError(a) {
    let u = this.clone();
    return (
      (u.internalTests.typeError = Ta({
        message: a,
        name: 'typeError',
        skipAbsent: !0,
        test(s) {
          return this.schema._typeCheck(s) ? !0 : this.createError({ params: { type: this.schema.type } });
        }
      })),
      u
    );
  }
  oneOf(a, u = mn.oneOf) {
    let s = this.clone();
    return (
      a.forEach((c) => {
        s._whitelist.add(c), s._blacklist.delete(c);
      }),
      (s.internalTests.whiteList = Ta({
        message: u,
        name: 'oneOf',
        skipAbsent: !0,
        test(c) {
          let m = this.schema._whitelist,
            h = m.resolveAll(this.resolve);
          return h.includes(c) ? !0 : this.createError({ params: { values: Array.from(m).join(', '), resolved: h } });
        }
      })),
      s
    );
  }
  notOneOf(a, u = mn.notOneOf) {
    let s = this.clone();
    return (
      a.forEach((c) => {
        s._blacklist.add(c), s._whitelist.delete(c);
      }),
      (s.internalTests.blacklist = Ta({
        message: u,
        name: 'notOneOf',
        test(c) {
          let m = this.schema._blacklist,
            h = m.resolveAll(this.resolve);
          return h.includes(c) ? this.createError({ params: { values: Array.from(m).join(', '), resolved: h } }) : !0;
        }
      })),
      s
    );
  }
  strip(a = !0) {
    let u = this.clone();
    return (u.spec.strip = a), u;
  }
  describe(a) {
    const u = (a ? this.resolve(a) : this).clone(),
      { label: s, meta: c, optional: m, nullable: h } = u.spec;
    return {
      meta: c,
      label: s,
      optional: m,
      nullable: h,
      default: u.getDefault(a),
      type: u.type,
      oneOf: u._whitelist.describe(),
      notOneOf: u._blacklist.describe(),
      tests: u.tests
        .map((S) => ({ name: S.OPTIONS.name, params: S.OPTIONS.params }))
        .filter((S, E, U) => U.findIndex((v) => v.name === S.name) === E)
    };
  }
}
Rr.prototype.__isYupSchema__ = !0;
for (const n of ['validate', 'validateSync'])
  Rr.prototype[`${n}At`] = function (a, u, s = {}) {
    const { parent: c, parentPath: m, schema: h } = gS(this, a, u, s.context);
    return h[n](c && c[m], Object.assign({}, s, { parent: c, path: a }));
  };
for (const n of ['equals', 'is']) Rr.prototype[n] = Rr.prototype.oneOf;
for (const n of ['not', 'nope']) Rr.prototype[n] = Rr.prototype.notOneOf;
function by() {
  return new Sy();
}
class Sy extends Rr {
  constructor() {
    super({
      type: 'boolean',
      check(a) {
        return a instanceof Boolean && (a = a.valueOf()), typeof a == 'boolean';
      }
    }),
      this.withMutation(() => {
        this.transform((a, u, s) => {
          if (s.spec.coerce && !s.isType(a)) {
            if (/^(true|1)$/i.test(String(a))) return !0;
            if (/^(false|0)$/i.test(String(a))) return !1;
          }
          return a;
        });
      });
  }
  isTrue(a = To.isValue) {
    return this.test({
      message: a,
      name: 'is-value',
      exclusive: !0,
      params: { value: 'true' },
      test(u) {
        return an(u) || u === !0;
      }
    });
  }
  isFalse(a = To.isValue) {
    return this.test({
      message: a,
      name: 'is-value',
      exclusive: !0,
      params: { value: 'false' },
      test(u) {
        return an(u) || u === !1;
      }
    });
  }
  default(a) {
    return super.default(a);
  }
  defined(a) {
    return super.defined(a);
  }
  optional() {
    return super.optional();
  }
  required(a) {
    return super.required(a);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(a) {
    return super.nonNullable(a);
  }
  strip(a) {
    return super.strip(a);
  }
}
by.prototype = Sy.prototype;
const vS =
  /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function bS(n) {
  const a = Mo(n);
  if (!a) return Date.parse ? Date.parse(n) : Number.NaN;
  if (a.z === void 0 && a.plusMinus === void 0)
    return new Date(a.year, a.month, a.day, a.hour, a.minute, a.second, a.millisecond).valueOf();
  let u = 0;
  return (
    a.z !== 'Z' &&
      a.plusMinus !== void 0 &&
      ((u = a.hourOffset * 60 + a.minuteOffset), a.plusMinus === '+' && (u = 0 - u)),
    Date.UTC(a.year, a.month, a.day, a.hour, a.minute + u, a.second, a.millisecond)
  );
}
function Mo(n) {
  var a, u;
  const s = vS.exec(n);
  return s
    ? {
        year: zn(s[1]),
        month: zn(s[2], 1) - 1,
        day: zn(s[3], 1),
        hour: zn(s[4]),
        minute: zn(s[5]),
        second: zn(s[6]),
        millisecond: s[7] ? zn(s[7].substring(0, 3)) : 0,
        precision: (a = (u = s[7]) == null ? void 0 : u.length) != null ? a : void 0,
        z: s[8] || void 0,
        plusMinus: s[9] || void 0,
        hourOffset: zn(s[10]),
        minuteOffset: zn(s[11])
      }
    : null;
}
function zn(n, a = 0) {
  return Number(n) || a;
}
let SS =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  ES =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  xS =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  _S = '^\\d{4}-\\d{2}-\\d{2}',
  AS = '\\d{2}:\\d{2}:\\d{2}',
  wS = '(([+-]\\d{2}(:?\\d{2})?)|Z)',
  OS = new RegExp(`${_S}T${AS}(\\.\\d+)?${wS}$`),
  NS = (n) => an(n) || n === n.trim(),
  TS = {}.toString();
function dt() {
  return new Ey();
}
class Ey extends Rr {
  constructor() {
    super({
      type: 'string',
      check(a) {
        return a instanceof String && (a = a.valueOf()), typeof a == 'string';
      }
    }),
      this.withMutation(() => {
        this.transform((a, u, s) => {
          if (!s.spec.coerce || s.isType(a) || Array.isArray(a)) return a;
          const c = a != null && a.toString ? a.toString() : a;
          return c === TS ? a : c;
        });
      });
  }
  required(a) {
    return super
      .required(a)
      .withMutation((u) =>
        u.test({ message: a || mn.required, name: 'required', skipAbsent: !0, test: (s) => !!s.length })
      );
  }
  notRequired() {
    return super
      .notRequired()
      .withMutation((a) => ((a.tests = a.tests.filter((u) => u.OPTIONS.name !== 'required')), a));
  }
  length(a, u = vr.length) {
    return this.test({
      message: u,
      name: 'length',
      exclusive: !0,
      params: { length: a },
      skipAbsent: !0,
      test(s) {
        return s.length === this.resolve(a);
      }
    });
  }
  min(a, u = vr.min) {
    return this.test({
      message: u,
      name: 'min',
      exclusive: !0,
      params: { min: a },
      skipAbsent: !0,
      test(s) {
        return s.length >= this.resolve(a);
      }
    });
  }
  max(a, u = vr.max) {
    return this.test({
      name: 'max',
      exclusive: !0,
      message: u,
      params: { max: a },
      skipAbsent: !0,
      test(s) {
        return s.length <= this.resolve(a);
      }
    });
  }
  matches(a, u) {
    let s = !1,
      c,
      m;
    return (
      u && (typeof u == 'object' ? ({ excludeEmptyString: s = !1, message: c, name: m } = u) : (c = u)),
      this.test({
        name: m || 'matches',
        message: c || vr.matches,
        params: { regex: a },
        skipAbsent: !0,
        test: (h) => (h === '' && s) || h.search(a) !== -1
      })
    );
  }
  email(a = vr.email) {
    return this.matches(SS, { name: 'email', message: a, excludeEmptyString: !0 });
  }
  url(a = vr.url) {
    return this.matches(ES, { name: 'url', message: a, excludeEmptyString: !0 });
  }
  uuid(a = vr.uuid) {
    return this.matches(xS, { name: 'uuid', message: a, excludeEmptyString: !1 });
  }
  datetime(a) {
    let u = '',
      s,
      c;
    return (
      a && (typeof a == 'object' ? ({ message: u = '', allowOffset: s = !1, precision: c = void 0 } = a) : (u = a)),
      this.matches(OS, { name: 'datetime', message: u || vr.datetime, excludeEmptyString: !0 })
        .test({
          name: 'datetime_offset',
          message: u || vr.datetime_offset,
          params: { allowOffset: s },
          skipAbsent: !0,
          test: (m) => {
            if (!m || s) return !0;
            const h = Mo(m);
            return h ? !!h.z : !1;
          }
        })
        .test({
          name: 'datetime_precision',
          message: u || vr.datetime_precision,
          params: { precision: c },
          skipAbsent: !0,
          test: (m) => {
            if (!m || c == null) return !0;
            const h = Mo(m);
            return h ? h.precision === c : !1;
          }
        })
    );
  }
  ensure() {
    return this.default('').transform((a) => (a === null ? '' : a));
  }
  trim(a = vr.trim) {
    return this.transform((u) => (u != null ? u.trim() : u)).test({ message: a, name: 'trim', test: NS });
  }
  lowercase(a = vr.lowercase) {
    return this.transform((u) => (an(u) ? u : u.toLowerCase())).test({
      message: a,
      name: 'string_case',
      exclusive: !0,
      skipAbsent: !0,
      test: (u) => an(u) || u === u.toLowerCase()
    });
  }
  uppercase(a = vr.uppercase) {
    return this.transform((u) => (an(u) ? u : u.toUpperCase())).test({
      message: a,
      name: 'string_case',
      exclusive: !0,
      skipAbsent: !0,
      test: (u) => an(u) || u === u.toUpperCase()
    });
  }
}
dt.prototype = Ey.prototype;
let MS = (n) => n != +n;
function gt() {
  return new xy();
}
class xy extends Rr {
  constructor() {
    super({
      type: 'number',
      check(a) {
        return a instanceof Number && (a = a.valueOf()), typeof a == 'number' && !MS(a);
      }
    }),
      this.withMutation(() => {
        this.transform((a, u, s) => {
          if (!s.spec.coerce) return a;
          let c = a;
          if (typeof c == 'string') {
            if (((c = c.replace(/\s/g, '')), c === '')) return NaN;
            c = +c;
          }
          return s.isType(c) || c === null ? c : parseFloat(c);
        });
      });
  }
  min(a, u = di.min) {
    return this.test({
      message: u,
      name: 'min',
      exclusive: !0,
      params: { min: a },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(a);
      }
    });
  }
  max(a, u = di.max) {
    return this.test({
      message: u,
      name: 'max',
      exclusive: !0,
      params: { max: a },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(a);
      }
    });
  }
  lessThan(a, u = di.lessThan) {
    return this.test({
      message: u,
      name: 'max',
      exclusive: !0,
      params: { less: a },
      skipAbsent: !0,
      test(s) {
        return s < this.resolve(a);
      }
    });
  }
  moreThan(a, u = di.moreThan) {
    return this.test({
      message: u,
      name: 'min',
      exclusive: !0,
      params: { more: a },
      skipAbsent: !0,
      test(s) {
        return s > this.resolve(a);
      }
    });
  }
  positive(a = di.positive) {
    return this.moreThan(0, a);
  }
  negative(a = di.negative) {
    return this.lessThan(0, a);
  }
  integer(a = di.integer) {
    return this.test({ name: 'integer', message: a, skipAbsent: !0, test: (u) => Number.isInteger(u) });
  }
  truncate() {
    return this.transform((a) => (an(a) ? a : a | 0));
  }
  round(a) {
    var u;
    let s = ['ceil', 'floor', 'round', 'trunc'];
    if (((a = ((u = a) == null ? void 0 : u.toLowerCase()) || 'round'), a === 'trunc')) return this.truncate();
    if (s.indexOf(a.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + s.join(', '));
    return this.transform((c) => (an(c) ? c : Math[a](c)));
  }
}
gt.prototype = xy.prototype;
let BS = new Date(''),
  US = (n) => Object.prototype.toString.call(n) === '[object Date]';
class Go extends Rr {
  constructor() {
    super({
      type: 'date',
      check(a) {
        return US(a) && !isNaN(a.getTime());
      }
    }),
      this.withMutation(() => {
        this.transform((a, u, s) =>
          !s.spec.coerce || s.isType(a) || a === null ? a : ((a = bS(a)), isNaN(a) ? Go.INVALID_DATE : new Date(a))
        );
      });
  }
  prepareParam(a, u) {
    let s;
    if (Xi.isRef(a)) s = a;
    else {
      let c = this.cast(a);
      if (!this._typeCheck(c))
        throw new TypeError(`\`${u}\` must be a Date or a value that can be \`cast()\` to a Date`);
      s = c;
    }
    return s;
  }
  min(a, u = No.min) {
    let s = this.prepareParam(a, 'min');
    return this.test({
      message: u,
      name: 'min',
      exclusive: !0,
      params: { min: a },
      skipAbsent: !0,
      test(c) {
        return c >= this.resolve(s);
      }
    });
  }
  max(a, u = No.max) {
    let s = this.prepareParam(a, 'max');
    return this.test({
      message: u,
      name: 'max',
      exclusive: !0,
      params: { max: a },
      skipAbsent: !0,
      test(c) {
        return c <= this.resolve(s);
      }
    });
  }
}
Go.INVALID_DATE = BS;
function DS(n, a = []) {
  let u = [],
    s = new Set(),
    c = new Set(a.map(([h, o]) => `${h}-${o}`));
  function m(h, o) {
    let S = Vi.split(h)[0];
    s.add(S), c.has(`${o}-${S}`) || u.push([o, S]);
  }
  for (const h of Object.keys(n)) {
    let o = n[h];
    s.add(h), Xi.isRef(o) && o.isSibling ? m(o.path, h) : zs(o) && 'deps' in o && o.deps.forEach((S) => m(S, h));
  }
  return sS.array(Array.from(s), u).reverse();
}
function xp(n, a) {
  let u = 1 / 0;
  return (
    n.some((s, c) => {
      var m;
      if ((m = a.path) != null && m.includes(s)) return (u = c), !0;
    }),
    u
  );
}
function _y(n) {
  return (a, u) => xp(n, a) - xp(n, u);
}
const Ay = (n, a, u) => {
  if (typeof n != 'string') return n;
  let s = n;
  try {
    s = JSON.parse(n);
  } catch {}
  return u.isType(s) ? s : n;
};
function ps(n) {
  if ('fields' in n) {
    const a = {};
    for (const [u, s] of Object.entries(n.fields)) a[u] = ps(s);
    return n.setFields(a);
  }
  if (n.type === 'array') {
    const a = n.optional();
    return a.innerType && (a.innerType = ps(a.innerType)), a;
  }
  return n.type === 'tuple' ? n.optional().clone({ types: n.spec.types.map(ps) }) : 'optional' in n ? n.optional() : n;
}
const RS = (n, a) => {
  const u = [...Vi.normalizePath(a)];
  if (u.length === 1) return u[0] in n;
  let s = u.pop(),
    c = Vi.getter(Vi.join(u), !0)(n);
  return !!(c && s in c);
};
let _p = (n) => Object.prototype.toString.call(n) === '[object Object]';
function Ap(n, a) {
  let u = Object.keys(n.fields);
  return Object.keys(a).filter((s) => u.indexOf(s) === -1);
}
const jS = _y([]);
function Zt(n) {
  return new wy(n);
}
class wy extends Rr {
  constructor(a) {
    super({
      type: 'object',
      check(u) {
        return _p(u) || typeof u == 'function';
      }
    }),
      (this.fields = Object.create(null)),
      (this._sortErrors = jS),
      (this._nodes = []),
      (this._excludedEdges = []),
      this.withMutation(() => {
        a && this.shape(a);
      });
  }
  _cast(a, u = {}) {
    var s;
    let c = super._cast(a, u);
    if (c === void 0) return this.getDefault(u);
    if (!this._typeCheck(c)) return c;
    let m = this.fields,
      h = (s = u.stripUnknown) != null ? s : this.spec.noUnknown,
      o = [].concat(
        this._nodes,
        Object.keys(c).filter((v) => !this._nodes.includes(v))
      ),
      S = {},
      E = Object.assign({}, u, { parent: S, __validating: u.__validating || !1 }),
      U = !1;
    for (const v of o) {
      let x = m[v],
        N = v in c;
      if (x) {
        let te,
          he = c[v];
        (E.path = (u.path ? `${u.path}.` : '') + v), (x = x.resolve({ value: he, context: u.context, parent: S }));
        let ge = x instanceof Rr ? x.spec : void 0,
          ve = ge == null ? void 0 : ge.strict;
        if (ge != null && ge.strip) {
          U = U || v in c;
          continue;
        }
        (te = !u.__validating || !ve ? x.cast(c[v], E) : c[v]), te !== void 0 && (S[v] = te);
      } else N && !h && (S[v] = c[v]);
      (N !== v in S || S[v] !== c[v]) && (U = !0);
    }
    return U ? S : c;
  }
  _validate(a, u = {}, s, c) {
    let { from: m = [], originalValue: h = a, recursive: o = this.spec.recursive } = u;
    (u.from = [{ schema: this, value: h }, ...m]),
      (u.__validating = !0),
      (u.originalValue = h),
      super._validate(a, u, s, (S, E) => {
        if (!o || !_p(E)) {
          c(S, E);
          return;
        }
        h = h || E;
        let U = [];
        for (let v of this._nodes) {
          let x = this.fields[v];
          !x ||
            Xi.isRef(x) ||
            U.push(x.asNestedTest({ options: u, key: v, parent: E, parentPath: u.path, originalParent: h }));
        }
        this.runTests({ tests: U, value: E, originalValue: h, options: u }, s, (v) => {
          c(v.sort(this._sortErrors).concat(S), E);
        });
      });
  }
  clone(a) {
    const u = super.clone(a);
    return (
      (u.fields = Object.assign({}, this.fields)),
      (u._nodes = this._nodes),
      (u._excludedEdges = this._excludedEdges),
      (u._sortErrors = this._sortErrors),
      u
    );
  }
  concat(a) {
    let u = super.concat(a),
      s = u.fields;
    for (let [c, m] of Object.entries(this.fields)) {
      const h = s[c];
      s[c] = h === void 0 ? m : h;
    }
    return u.withMutation((c) => c.setFields(s, [...this._excludedEdges, ...a._excludedEdges]));
  }
  _getDefault(a) {
    if ('default' in this.spec) return super._getDefault(a);
    if (!this._nodes.length) return;
    let u = {};
    return (
      this._nodes.forEach((s) => {
        var c;
        const m = this.fields[s];
        let h = a;
        (c = h) != null && c.value && (h = Object.assign({}, h, { parent: h.value, value: h.value[s] })),
          (u[s] = m && 'getDefault' in m ? m.getDefault(h) : void 0);
      }),
      u
    );
  }
  setFields(a, u) {
    let s = this.clone();
    return (s.fields = a), (s._nodes = DS(a, u)), (s._sortErrors = _y(Object.keys(a))), u && (s._excludedEdges = u), s;
  }
  shape(a, u = []) {
    return this.clone().withMutation((s) => {
      let c = s._excludedEdges;
      return (
        u.length && (Array.isArray(u[0]) || (u = [u]), (c = [...s._excludedEdges, ...u])),
        s.setFields(Object.assign(s.fields, a), c)
      );
    });
  }
  partial() {
    const a = {};
    for (const [u, s] of Object.entries(this.fields))
      a[u] = 'optional' in s && s.optional instanceof Function ? s.optional() : s;
    return this.setFields(a);
  }
  deepPartial() {
    return ps(this);
  }
  pick(a) {
    const u = {};
    for (const s of a) this.fields[s] && (u[s] = this.fields[s]);
    return this.setFields(
      u,
      this._excludedEdges.filter(([s, c]) => a.includes(s) && a.includes(c))
    );
  }
  omit(a) {
    const u = [];
    for (const s of Object.keys(this.fields)) a.includes(s) || u.push(s);
    return this.pick(u);
  }
  from(a, u, s) {
    let c = Vi.getter(a, !0);
    return this.transform((m) => {
      if (!m) return m;
      let h = m;
      return RS(m, a) && ((h = Object.assign({}, m)), s || delete h[a], (h[u] = c(m))), h;
    });
  }
  json() {
    return this.transform(Ay);
  }
  exact(a) {
    return this.test({
      name: 'exact',
      exclusive: !0,
      message: a || ds.exact,
      test(u) {
        if (u == null) return !0;
        const s = Ap(this.schema, u);
        return s.length === 0 || this.createError({ params: { properties: s.join(', ') } });
      }
    });
  }
  stripUnknown() {
    return this.clone({ noUnknown: !0 });
  }
  noUnknown(a = !0, u = ds.noUnknown) {
    typeof a != 'boolean' && ((u = a), (a = !0));
    let s = this.test({
      name: 'noUnknown',
      exclusive: !0,
      message: u,
      test(c) {
        if (c == null) return !0;
        const m = Ap(this.schema, c);
        return !a || m.length === 0 || this.createError({ params: { unknown: m.join(', ') } });
      }
    });
    return (s.spec.noUnknown = a), s;
  }
  unknown(a = !0, u = ds.noUnknown) {
    return this.noUnknown(!a, u);
  }
  transformKeys(a) {
    return this.transform((u) => {
      if (!u) return u;
      const s = {};
      for (const c of Object.keys(u)) s[a(c)] = u[c];
      return s;
    });
  }
  camelCase() {
    return this.transformKeys(Eo.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Eo.snakeCase);
  }
  constantCase() {
    return this.transformKeys((a) => Eo.snakeCase(a).toUpperCase());
  }
  describe(a) {
    const u = (a ? this.resolve(a) : this).clone(),
      s = super.describe(a);
    s.fields = {};
    for (const [m, h] of Object.entries(u.fields)) {
      var c;
      let o = a;
      (c = o) != null && c.value && (o = Object.assign({}, o, { parent: o.value, value: o.value[m] })),
        (s.fields[m] = h.describe(o));
    }
    return s;
  }
}
Zt.prototype = wy.prototype;
function Oy(n) {
  return new Ny(n);
}
class Ny extends Rr {
  constructor(a) {
    super({
      type: 'array',
      spec: { types: a },
      check(u) {
        return Array.isArray(u);
      }
    }),
      (this.innerType = void 0),
      (this.innerType = a);
  }
  _cast(a, u) {
    const s = super._cast(a, u);
    if (!this._typeCheck(s) || !this.innerType) return s;
    let c = !1;
    const m = s.map((h, o) => {
      const S = this.innerType.cast(h, Object.assign({}, u, { path: `${u.path || ''}[${o}]` }));
      return S !== h && (c = !0), S;
    });
    return c ? m : s;
  }
  _validate(a, u = {}, s, c) {
    var m;
    let h = this.innerType,
      o = (m = u.recursive) != null ? m : this.spec.recursive;
    u.originalValue != null && u.originalValue,
      super._validate(a, u, s, (S, E) => {
        var U;
        if (!o || !h || !this._typeCheck(E)) {
          c(S, E);
          return;
        }
        let v = new Array(E.length);
        for (let N = 0; N < E.length; N++) {
          var x;
          v[N] = h.asNestedTest({
            options: u,
            index: N,
            parent: E,
            parentPath: u.path,
            originalParent: (x = u.originalValue) != null ? x : a
          });
        }
        this.runTests(
          { value: E, tests: v, originalValue: (U = u.originalValue) != null ? U : a, options: u },
          s,
          (N) => c(N.concat(S), E)
        );
      });
  }
  clone(a) {
    const u = super.clone(a);
    return (u.innerType = this.innerType), u;
  }
  json() {
    return this.transform(Ay);
  }
  concat(a) {
    let u = super.concat(a);
    return (
      (u.innerType = this.innerType),
      a.innerType && (u.innerType = u.innerType ? u.innerType.concat(a.innerType) : a.innerType),
      u
    );
  }
  of(a) {
    let u = this.clone();
    if (!zs(a)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + Ln(a));
    return (u.innerType = a), (u.spec = Object.assign({}, u.spec, { types: a })), u;
  }
  length(a, u = ms.length) {
    return this.test({
      message: u,
      name: 'length',
      exclusive: !0,
      params: { length: a },
      skipAbsent: !0,
      test(s) {
        return s.length === this.resolve(a);
      }
    });
  }
  min(a, u) {
    return (
      (u = u || ms.min),
      this.test({
        message: u,
        name: 'min',
        exclusive: !0,
        params: { min: a },
        skipAbsent: !0,
        test(s) {
          return s.length >= this.resolve(a);
        }
      })
    );
  }
  max(a, u) {
    return (
      (u = u || ms.max),
      this.test({
        message: u,
        name: 'max',
        exclusive: !0,
        params: { max: a },
        skipAbsent: !0,
        test(s) {
          return s.length <= this.resolve(a);
        }
      })
    );
  }
  ensure() {
    return this.default(() => []).transform((a, u) => (this._typeCheck(a) ? a : u == null ? [] : [].concat(u)));
  }
  compact(a) {
    let u = a ? (s, c, m) => !a(s, c, m) : (s) => !!s;
    return this.transform((s) => (s != null ? s.filter(u) : s));
  }
  describe(a) {
    const u = (a ? this.resolve(a) : this).clone(),
      s = super.describe(a);
    if (u.innerType) {
      var c;
      let m = a;
      (c = m) != null && c.value && (m = Object.assign({}, m, { parent: m.value, value: m.value[0] })),
        (s.innerType = u.innerType.describe(m));
    }
    return s;
  }
}
Oy.prototype = Ny.prototype;
const Ge = ({ label: n, labelDesc: a, children: u, error: s, required: c }) =>
    H.jsxs('label', {
      className: 'flex flex-col gap-1',
      children: [
        H.jsxs('span', {
          className: 'text-sm text-gray-500',
          children: [
            c && H.jsx('span', { className: 'text-red-500', children: '*' }),
            n,
            a && H.jsxs('span', { children: ['(', a, ')'] })
          ]
        }),
        u,
        s && H.jsx('span', { className: 'text-sm text-red-500', children: s.message })
      ]
    }),
  CS = Zt({
    chainIds: dt(),
    chainAssetTypes: dt(),
    limit: gt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    offset: gt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    orderBy: dt()
  });
function qS({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(CS) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = {
          chainIds: v.chainIds ? v.chainIds.split(',').map((N) => N.trim()) : void 0,
          chainAssetTypes: v.chainAssetTypes ? v.chainAssetTypes.split(',').map((N) => N.trim()) : void 0,
          limit: v.limit ?? void 0,
          offset: v.offset ?? void 0,
          orderBy: v.orderBy || void 0
        };
        c(await n.getAssets(x));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetAssets',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'ChainIds',
          labelDesc: 'comma separated',
          error: E.chainIds,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('chainIds') })
        }),
        H.jsx(Ge, {
          label: 'ChainAssetTypes',
          labelDesc: 'comma separated',
          error: E.chainAssetTypes,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('chainAssetTypes') })
        }),
        H.jsx(Ge, {
          label: 'Limit',
          error: E.limit,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('limit') })
        }),
        H.jsx(Ge, {
          label: 'Offset',
          error: E.offset,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('offset') })
        }),
        H.jsx(Ge, {
          label: 'OrderBy',
          error: E.orderBy,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderBy') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const zS = Zt({ assetId: dt().required() });
function kS({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(zS) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = BigInt(v.assetId);
        c(await n.getAsset(x));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetAsset',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'AssetId',
          error: E.assetId,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('assetId') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const IS = Zt({
  chainIds: dt(),
  chainAssetTypes: dt(),
  baseAssetId: dt(),
  quoteAssetId: dt(),
  limit: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  offset: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  orderBy: dt()
});
function LS({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(IS) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = {
          chainIds: v.chainIds ? v.chainIds.split(',').map((N) => N.trim()) : void 0,
          chainAssetTypes: v.chainAssetTypes ? v.chainAssetTypes.split(',').map((N) => N.trim()) : void 0,
          baseAssetId: v.baseAssetId ? BigInt(v.baseAssetId) : void 0,
          quoteAssetId: v.quoteAssetId ? BigInt(v.quoteAssetId) : void 0,
          limit: v.limit ?? void 0,
          offset: v.offset ?? void 0,
          orderBy: v.orderBy || void 0
        };
        c(await n.getMarkets(x));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetMarkets',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'ChainIds',
          labelDesc: 'comma separated',
          error: E.chainIds,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('chainIds') })
        }),
        H.jsx(Ge, {
          label: 'ChainAssetTypes',
          labelDesc: 'comma separated',
          error: E.chainAssetTypes,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('chainAssetTypes') })
        }),
        H.jsx(Ge, {
          label: 'BaseAssetId',
          error: E.baseAssetId,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('baseAssetId') })
        }),
        H.jsx(Ge, {
          label: 'QuoteAssetId',
          error: E.quoteAssetId,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('quoteAssetId') })
        }),
        H.jsx(Ge, {
          label: 'Limit',
          error: E.limit,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('limit') })
        }),
        H.jsx(Ge, {
          label: 'Offset',
          error: E.offset,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('offset') })
        }),
        H.jsx(Ge, {
          label: 'OrderBy',
          error: E.orderBy,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderBy') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const HS = Zt({ marketId: dt().required() });
function GS({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(HS) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = BigInt(v.marketId);
        c(await n.getMarket(x));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetMarket',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'MarketId',
          error: E.marketId,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const FS = Zt({ marketId: dt() });
function VS({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(FS) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = v.marketId ? BigInt(v.marketId) : void 0;
        c(await n.getMarketsTicker(x));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetMarketsTicker',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'MarketId',
          error: E.marketId,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const YS = Zt({ marketId: dt() });
function $S({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(YS) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = v.marketId ? BigInt(v.marketId) : void 0;
        c(await n.getMarketsSwapInfo(x));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetMarketsSwapInfo',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'MarketId',
          error: E.marketId,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const XS = Zt({
  marketId: dt().required(),
  tickSpace: gt()
    .oneOf(
      Object.keys(Ua)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  limit: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  offset: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  orderBy: dt()
});
function ZS({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      control: S,
      handleSubmit: E,
      formState: { errors: U }
    } = Wt({ resolver: Pt(XS) }),
    v = E(async (x) => {
      u(!0), c(null), h('');
      try {
        const N = {
          marketId: BigInt(x.marketId),
          tickSpace: x.tickSpace,
          limit: x.limit ?? void 0,
          offset: x.offset ?? void 0,
          orderBy: x.orderBy || void 0
        };
        c(await n.getMarketKline(N));
      } catch (N) {
        h(N.message ?? JSON.stringify(N));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetMarketKline',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'MarketId',
          error: U.marketId,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx(Ge, {
          label: 'TickSpace',
          error: U.tickSpace,
          required: !0,
          children: H.jsx(_r, {
            name: 'tickSpace',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Ua)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) =>
                    H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'getMarketKline-tickSpace',
                            type: 'radio',
                            checked: x.value === Number(Ua[N]),
                            onChange: (te) => {
                              te.target.checked && x.onChange(Number(Ua[N]));
                            }
                          })
                        ]
                      },
                      N
                    )
                  )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'Limit',
          error: U.limit,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('limit') })
        }),
        H.jsx(Ge, {
          label: 'Offset',
          error: U.offset,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('offset') })
        }),
        H.jsx(Ge, {
          label: 'OrderBy',
          error: U.orderBy,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderBy') })
        }),
        H.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const QS = Zt({
  index: gt()
    .oneOf(
      Object.keys(Ba)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  marketId: dt().required(),
  limit: gt().required().min(1).max(100)
});
function KS({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      control: S,
      handleSubmit: E,
      formState: { errors: U }
    } = Wt({ defaultValues: { limit: 10 }, resolver: Pt(QS) }),
    v = E(async (x) => {
      u(!0), c(null), h('');
      try {
        const N = { index: x.index, marketId: BigInt(x.marketId), limit: x.limit };
        c(await n.getMarketDepth(N));
      } catch (N) {
        h(N.message ?? JSON.stringify(N));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetMarketDepth',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'Index',
          error: U.index,
          required: !0,
          children: H.jsx(_r, {
            name: 'index',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Ba)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) =>
                    H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'getMarketDepth-index',
                            type: 'radio',
                            checked: x.value === Number(Ba[N]),
                            onChange: (te) => {
                              te.target.checked && x.onChange(Number(Ba[N]));
                            }
                          })
                        ]
                      },
                      N
                    )
                  )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'MarketId',
          error: U.marketId,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx(Ge, {
          label: 'Limit',
          error: U.limit,
          required: !0,
          children: H.jsx('input', { type: 'number', min: 1, max: 100, className: 'input', ...o('limit') })
        }),
        H.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
var ys = { exports: {} },
  JS = ys.exports,
  wp;
function WS() {
  return (
    wp ||
      ((wp = 1),
      (function (n, a) {
        (function (u, s) {
          n.exports = s();
        })(JS, function () {
          var u = 1e3,
            s = 6e4,
            c = 36e5,
            m = 'millisecond',
            h = 'second',
            o = 'minute',
            S = 'hour',
            E = 'day',
            U = 'week',
            v = 'month',
            x = 'quarter',
            N = 'year',
            te = 'date',
            he = 'Invalid Date',
            ge = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            ve = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            Q = {
              name: 'en',
              weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
              months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
              ordinal: function (X) {
                var C = ['th', 'st', 'nd', 'rd'],
                  T = X % 100;
                return '[' + X + (C[(T - 20) % 10] || C[T] || C[0]) + ']';
              }
            },
            je = function (X, C, T) {
              var G = String(X);
              return !G || G.length >= C ? X : '' + Array(C + 1 - G.length).join(T) + X;
            },
            We = {
              s: je,
              z: function (X) {
                var C = -X.utcOffset(),
                  T = Math.abs(C),
                  G = Math.floor(T / 60),
                  k = T % 60;
                return (C <= 0 ? '+' : '-') + je(G, 2, '0') + ':' + je(k, 2, '0');
              },
              m: function X(C, T) {
                if (C.date() < T.date()) return -X(T, C);
                var G = 12 * (T.year() - C.year()) + (T.month() - C.month()),
                  k = C.clone().add(G, v),
                  ue = T - k < 0,
                  R = C.clone().add(G + (ue ? -1 : 1), v);
                return +(-(G + (T - k) / (ue ? k - R : R - k)) || 0);
              },
              a: function (X) {
                return X < 0 ? Math.ceil(X) || 0 : Math.floor(X);
              },
              p: function (X) {
                return (
                  { M: v, y: N, w: U, d: E, D: te, h: S, m: o, s: h, ms: m, Q: x }[X] ||
                  String(X || '')
                    .toLowerCase()
                    .replace(/s$/, '')
                );
              },
              u: function (X) {
                return X === void 0;
              }
            },
            _e = 'en',
            Ae = {};
          Ae[_e] = Q;
          var Re = '$isDayjsObject',
            y = function (X) {
              return X instanceof V || !(!X || !X[Re]);
            },
            _ = function X(C, T, G) {
              var k;
              if (!C) return _e;
              if (typeof C == 'string') {
                var ue = C.toLowerCase();
                Ae[ue] && (k = ue), T && ((Ae[ue] = T), (k = ue));
                var R = C.split('-');
                if (!k && R.length > 1) return X(R[0]);
              } else {
                var P = C.name;
                (Ae[P] = C), (k = P);
              }
              return !G && k && (_e = k), k || (!G && _e);
            },
            A = function (X, C) {
              if (y(X)) return X.clone();
              var T = typeof C == 'object' ? C : {};
              return (T.date = X), (T.args = arguments), new V(T);
            },
            F = We;
          (F.l = _),
            (F.i = y),
            (F.w = function (X, C) {
              return A(X, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
            });
          var V = (function () {
              function X(T) {
                (this.$L = _(T.locale, null, !0)), this.parse(T), (this.$x = this.$x || T.x || {}), (this[Re] = !0);
              }
              var C = X.prototype;
              return (
                (C.parse = function (T) {
                  (this.$d = (function (G) {
                    var k = G.date,
                      ue = G.utc;
                    if (k === null) return new Date(NaN);
                    if (F.u(k)) return new Date();
                    if (k instanceof Date) return new Date(k);
                    if (typeof k == 'string' && !/Z$/i.test(k)) {
                      var R = k.match(ge);
                      if (R) {
                        var P = R[2] - 1 || 0,
                          be = (R[7] || '0').substring(0, 3);
                        return ue
                          ? new Date(Date.UTC(R[1], P, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, be))
                          : new Date(R[1], P, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, be);
                      }
                    }
                    return new Date(k);
                  })(T)),
                    this.init();
                }),
                (C.init = function () {
                  var T = this.$d;
                  (this.$y = T.getFullYear()),
                    (this.$M = T.getMonth()),
                    (this.$D = T.getDate()),
                    (this.$W = T.getDay()),
                    (this.$H = T.getHours()),
                    (this.$m = T.getMinutes()),
                    (this.$s = T.getSeconds()),
                    (this.$ms = T.getMilliseconds());
                }),
                (C.$utils = function () {
                  return F;
                }),
                (C.isValid = function () {
                  return this.$d.toString() !== he;
                }),
                (C.isSame = function (T, G) {
                  var k = A(T);
                  return this.startOf(G) <= k && k <= this.endOf(G);
                }),
                (C.isAfter = function (T, G) {
                  return A(T) < this.startOf(G);
                }),
                (C.isBefore = function (T, G) {
                  return this.endOf(G) < A(T);
                }),
                (C.$g = function (T, G, k) {
                  return F.u(T) ? this[G] : this.set(k, T);
                }),
                (C.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (C.valueOf = function () {
                  return this.$d.getTime();
                }),
                (C.startOf = function (T, G) {
                  var k = this,
                    ue = !!F.u(G) || G,
                    R = F.p(T),
                    P = function (De, M) {
                      var D = F.w(k.$u ? Date.UTC(k.$y, M, De) : new Date(k.$y, M, De), k);
                      return ue ? D : D.endOf(E);
                    },
                    be = function (De, M) {
                      return F.w(
                        k.toDate()[De].apply(k.toDate('s'), (ue ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(M)),
                        k
                      );
                    },
                    de = this.$W,
                    w = this.$M,
                    Ue = this.$D,
                    Oe = 'set' + (this.$u ? 'UTC' : '');
                  switch (R) {
                    case N:
                      return ue ? P(1, 0) : P(31, 11);
                    case v:
                      return ue ? P(1, w) : P(0, w + 1);
                    case U:
                      var Ke = this.$locale().weekStart || 0,
                        Ne = (de < Ke ? de + 7 : de) - Ke;
                      return P(ue ? Ue - Ne : Ue + (6 - Ne), w);
                    case E:
                    case te:
                      return be(Oe + 'Hours', 0);
                    case S:
                      return be(Oe + 'Minutes', 1);
                    case o:
                      return be(Oe + 'Seconds', 2);
                    case h:
                      return be(Oe + 'Milliseconds', 3);
                    default:
                      return this.clone();
                  }
                }),
                (C.endOf = function (T) {
                  return this.startOf(T, !1);
                }),
                (C.$set = function (T, G) {
                  var k,
                    ue = F.p(T),
                    R = 'set' + (this.$u ? 'UTC' : ''),
                    P = ((k = {}),
                    (k[E] = R + 'Date'),
                    (k[te] = R + 'Date'),
                    (k[v] = R + 'Month'),
                    (k[N] = R + 'FullYear'),
                    (k[S] = R + 'Hours'),
                    (k[o] = R + 'Minutes'),
                    (k[h] = R + 'Seconds'),
                    (k[m] = R + 'Milliseconds'),
                    k)[ue],
                    be = ue === E ? this.$D + (G - this.$W) : G;
                  if (ue === v || ue === N) {
                    var de = this.clone().set(te, 1);
                    de.$d[P](be), de.init(), (this.$d = de.set(te, Math.min(this.$D, de.daysInMonth())).$d);
                  } else P && this.$d[P](be);
                  return this.init(), this;
                }),
                (C.set = function (T, G) {
                  return this.clone().$set(T, G);
                }),
                (C.get = function (T) {
                  return this[F.p(T)]();
                }),
                (C.add = function (T, G) {
                  var k,
                    ue = this;
                  T = Number(T);
                  var R = F.p(G),
                    P = function (w) {
                      var Ue = A(ue);
                      return F.w(Ue.date(Ue.date() + Math.round(w * T)), ue);
                    };
                  if (R === v) return this.set(v, this.$M + T);
                  if (R === N) return this.set(N, this.$y + T);
                  if (R === E) return P(1);
                  if (R === U) return P(7);
                  var be = ((k = {}), (k[o] = s), (k[S] = c), (k[h] = u), k)[R] || 1,
                    de = this.$d.getTime() + T * be;
                  return F.w(de, this);
                }),
                (C.subtract = function (T, G) {
                  return this.add(-1 * T, G);
                }),
                (C.format = function (T) {
                  var G = this,
                    k = this.$locale();
                  if (!this.isValid()) return k.invalidDate || he;
                  var ue = T || 'YYYY-MM-DDTHH:mm:ssZ',
                    R = F.z(this),
                    P = this.$H,
                    be = this.$m,
                    de = this.$M,
                    w = k.weekdays,
                    Ue = k.months,
                    Oe = k.meridiem,
                    Ke = function (M, D, Z, ie) {
                      return (M && (M[D] || M(G, ue))) || Z[D].slice(0, ie);
                    },
                    Ne = function (M) {
                      return F.s(P % 12 || 12, M, '0');
                    },
                    De =
                      Oe ||
                      function (M, D, Z) {
                        var ie = M < 12 ? 'AM' : 'PM';
                        return Z ? ie.toLowerCase() : ie;
                      };
                  return ue.replace(ve, function (M, D) {
                    return (
                      D ||
                      (function (Z) {
                        switch (Z) {
                          case 'YY':
                            return String(G.$y).slice(-2);
                          case 'YYYY':
                            return F.s(G.$y, 4, '0');
                          case 'M':
                            return de + 1;
                          case 'MM':
                            return F.s(de + 1, 2, '0');
                          case 'MMM':
                            return Ke(k.monthsShort, de, Ue, 3);
                          case 'MMMM':
                            return Ke(Ue, de);
                          case 'D':
                            return G.$D;
                          case 'DD':
                            return F.s(G.$D, 2, '0');
                          case 'd':
                            return String(G.$W);
                          case 'dd':
                            return Ke(k.weekdaysMin, G.$W, w, 2);
                          case 'ddd':
                            return Ke(k.weekdaysShort, G.$W, w, 3);
                          case 'dddd':
                            return w[G.$W];
                          case 'H':
                            return String(P);
                          case 'HH':
                            return F.s(P, 2, '0');
                          case 'h':
                            return Ne(1);
                          case 'hh':
                            return Ne(2);
                          case 'a':
                            return De(P, be, !0);
                          case 'A':
                            return De(P, be, !1);
                          case 'm':
                            return String(be);
                          case 'mm':
                            return F.s(be, 2, '0');
                          case 's':
                            return String(G.$s);
                          case 'ss':
                            return F.s(G.$s, 2, '0');
                          case 'SSS':
                            return F.s(G.$ms, 3, '0');
                          case 'Z':
                            return R;
                        }
                        return null;
                      })(M) ||
                      R.replace(':', '')
                    );
                  });
                }),
                (C.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (C.diff = function (T, G, k) {
                  var ue,
                    R = this,
                    P = F.p(G),
                    be = A(T),
                    de = (be.utcOffset() - this.utcOffset()) * s,
                    w = this - be,
                    Ue = function () {
                      return F.m(R, be);
                    };
                  switch (P) {
                    case N:
                      ue = Ue() / 12;
                      break;
                    case v:
                      ue = Ue();
                      break;
                    case x:
                      ue = Ue() / 3;
                      break;
                    case U:
                      ue = (w - de) / 6048e5;
                      break;
                    case E:
                      ue = (w - de) / 864e5;
                      break;
                    case S:
                      ue = w / c;
                      break;
                    case o:
                      ue = w / s;
                      break;
                    case h:
                      ue = w / u;
                      break;
                    default:
                      ue = w;
                  }
                  return k ? ue : F.a(ue);
                }),
                (C.daysInMonth = function () {
                  return this.endOf(v).$D;
                }),
                (C.$locale = function () {
                  return Ae[this.$L];
                }),
                (C.locale = function (T, G) {
                  if (!T) return this.$L;
                  var k = this.clone(),
                    ue = _(T, G, !0);
                  return ue && (k.$L = ue), k;
                }),
                (C.clone = function () {
                  return F.w(this.$d, this);
                }),
                (C.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (C.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (C.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (C.toString = function () {
                  return this.$d.toUTCString();
                }),
                X
              );
            })(),
            Y = V.prototype;
          return (
            (A.prototype = Y),
            [
              ['$ms', m],
              ['$s', h],
              ['$m', o],
              ['$H', S],
              ['$W', E],
              ['$M', v],
              ['$y', N],
              ['$D', te]
            ].forEach(function (X) {
              Y[X[1]] = function (C) {
                return this.$g(C, X[0], X[1]);
              };
            }),
            (A.extend = function (X, C) {
              return X.$i || (X(C, V, A), (X.$i = !0)), A;
            }),
            (A.locale = _),
            (A.isDayjs = y),
            (A.unix = function (X) {
              return A(1e3 * X);
            }),
            (A.en = Ae[_e]),
            (A.Ls = Ae),
            (A.p = {}),
            A
          );
        });
      })(ys)),
    ys.exports
  );
}
var PS = WS();
const Ms = Iu(PS),
  e2 = Zt({
    marketId: dt().required(),
    tradedAtStart: gt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    tradedAtEnd: gt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    limit: gt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    offset: gt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    orderBy: dt()
  });
function t2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      control: S,
      handleSubmit: E,
      formState: { errors: U }
    } = Wt({ resolver: Pt(e2) }),
    v = E(async (x) => {
      u(!0), c(null), h('');
      try {
        const N = {
          marketId: BigInt(x.marketId),
          tradedAtStart: x.tradedAtStart ?? void 0,
          tradedAtEnd: x.tradedAtEnd ?? void 0,
          limit: x.limit ?? void 0,
          offset: x.offset ?? void 0,
          orderBy: x.orderBy || void 0
        };
        c(await n.getMarketTrade(N));
      } catch (N) {
        h(N.message ?? JSON.stringify(N));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetMarketTrade',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'MarketId',
          error: U.marketId,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx(Ge, {
          label: 'TradedAtStart',
          error: U.tradedAtStart,
          children: H.jsx(_r, {
            control: S,
            name: 'tradedAtStart',
            render: ({ field: x }) =>
              H.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...x,
                value: x.value ? Ms(x.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (N) => {
                  x.onChange(N.target.value ? new Date(N.target.value).getTime() : void 0);
                }
              })
          })
        }),
        H.jsx(Ge, {
          label: 'TradedAtEnd',
          error: U.tradedAtEnd,
          children: H.jsx(_r, {
            control: S,
            name: 'tradedAtEnd',
            render: ({ field: x }) =>
              H.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...x,
                value: x.value ? Ms(x.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (N) => {
                  x.onChange(N.target.value ? new Date(N.target.value).getTime() : void 0);
                }
              })
          })
        }),
        H.jsx(Ge, {
          label: 'Limit',
          error: U.limit,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('limit') })
        }),
        H.jsx(Ge, {
          label: 'Offset',
          error: U.offset,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('offset') })
        }),
        H.jsx(Ge, {
          label: 'OrderBy',
          error: U.orderBy,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderBy') })
        }),
        H.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const r2 = Zt({
  marketId: dt().required(),
  orderSide: gt()
    .oneOf(
      Object.keys(At)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  price: gt().required(),
  volume: gt().required(),
  baseAssetDecimals: gt().required(),
  quoteAssetDecimals: gt().required()
});
function n2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      control: S,
      handleSubmit: E,
      formState: { errors: U }
    } = Wt({ resolver: Pt(r2) }),
    v = E(async (x) => {
      u(!0), c(null), h('');
      try {
        const N = {
            marketId: BigInt(x.marketId),
            orderCategory: kn.LimitOrder,
            limitOrderDetails: { orderSide: x.orderSide, price: x.price, volume: x.volume }
          },
          te = { baseAssetDecimals: x.baseAssetDecimals, quoteAssetDecimals: x.quoteAssetDecimals };
        await n.submitSpotOrder(N, te), c(!0);
      } catch (N) {
        h(N.message ?? JSON.stringify(N)), c(!1);
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'SubmitSpotOrderLimit',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'MarketId',
          error: U.marketId,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx(Ge, {
          label: 'OrderSide',
          error: U.orderSide,
          required: !0,
          children: H.jsx(_r, {
            name: 'orderSide',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(At)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) =>
                    H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'SubmitSpotOrderLimit-orderSide',
                            type: 'radio',
                            value: Number(At[N]),
                            checked: x.value === Number(At[N]),
                            onChange: (te) => {
                              te.target.checked && x.onChange(Number(At[N]));
                            }
                          })
                        ]
                      },
                      N
                    )
                  )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'Price',
          error: U.price,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('price') })
        }),
        H.jsx(Ge, {
          label: 'Volume',
          error: U.volume,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('volume') })
        }),
        H.jsx(Ge, {
          label: 'BaseAssetDecimals',
          error: U.baseAssetDecimals,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('baseAssetDecimals') })
        }),
        H.jsx(Ge, {
          label: 'QuoteAssetDecimals',
          error: U.quoteAssetDecimals,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('quoteAssetDecimals') })
        }),
        H.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const i2 = Zt({
  marketId: dt().required(),
  orderSide: gt()
    .oneOf(
      Object.keys(At)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  exactTokensType: gt()
    .oneOf(
      Object.keys(yi)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  exactTokens: gt().required(),
  minOut: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  maxIn: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  baseAssetDecimals: gt().required(),
  quoteAssetDecimals: gt().required()
});
function a2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      control: S,
      handleSubmit: E,
      formState: { errors: U }
    } = Wt({ resolver: Pt(i2) }),
    v = E(async (x) => {
      u(!0), c(null), h('');
      try {
        const N = {
            marketId: BigInt(x.marketId),
            orderCategory: kn.SwapOrder,
            swapV2OrderDetails: {
              orderSide: x.orderSide,
              exactTokensType: x.exactTokensType,
              exactTokens: x.exactTokens,
              minOut: x.minOut ?? void 0,
              maxIn: x.maxIn ?? void 0
            }
          },
          te = { baseAssetDecimals: x.baseAssetDecimals, quoteAssetDecimals: x.quoteAssetDecimals };
        await n.submitSpotOrder(N, te), c(!0);
      } catch (N) {
        h(N.message ?? JSON.stringify(N)), c(!1);
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'SubmitSpotOrderSwapV2',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'MarketId',
          error: U.marketId,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx(Ge, {
          label: 'OrderSide',
          error: U.orderSide,
          required: !0,
          children: H.jsx(_r, {
            name: 'orderSide',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(At)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) =>
                    H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'SubmitSpotOrderSwapV2-orderSide',
                            type: 'radio',
                            value: Number(At[N]),
                            checked: x.value === Number(At[N]),
                            onChange: (te) => {
                              te.target.checked && x.onChange(Number(At[N]));
                            }
                          })
                        ]
                      },
                      N
                    )
                  )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'ExactTokensType',
          error: U.exactTokensType,
          required: !0,
          children: H.jsx(_r, {
            name: 'exactTokensType',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(yi)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) =>
                    H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'SubmitSpotOrderSwapV2-exactTokensType',
                            type: 'radio',
                            value: Number(yi[N]),
                            checked: x.value === Number(yi[N]),
                            onChange: (te) => {
                              te.target.checked && x.onChange(Number(yi[N]));
                            }
                          })
                        ]
                      },
                      N
                    )
                  )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'ExactTokens',
          error: U.exactTokens,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('exactTokens') })
        }),
        H.jsx(Ge, {
          label: 'MinOut',
          error: U.minOut,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('minOut') })
        }),
        H.jsx(Ge, {
          label: 'MaxIn',
          error: U.maxIn,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('maxIn') })
        }),
        H.jsx(Ge, {
          label: 'BaseAssetDecimals',
          error: U.baseAssetDecimals,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('baseAssetDecimals') })
        }),
        H.jsx(Ge, {
          label: 'QuoteAssetDecimals',
          error: U.quoteAssetDecimals,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('quoteAssetDecimals') })
        }),
        H.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const u2 = Zt({
  marketId: dt(),
  orderId: dt(),
  orderSide: gt().oneOf(
    Object.keys(At)
      .filter((n) => !isNaN(Number(n)))
      .map(Number)
  ),
  isCancelAll: by()
});
function l2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      control: S,
      handleSubmit: E,
      formState: { errors: U }
    } = Wt({ resolver: Pt(u2) }),
    v = E(async (x) => {
      var he, ge;
      u(!0), c(null), h('');
      const N = (he = x.marketId) == null ? void 0 : he.trim(),
        te = (ge = x.orderId) == null ? void 0 : ge.trim();
      try {
        const ve = {
          marketId: N ? BigInt(N) : void 0,
          orderId: te || void 0,
          orderSide: x.orderSide ?? void 0,
          isCancelAll: x.isCancelAll ?? void 0
        };
        await n.cancelSpotOrder(ve), c(!0);
      } catch (ve) {
        h(ve.message ?? JSON.stringify(ve)), c(!1);
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'CancelSpotOrder',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'MarketId',
          error: U.marketId,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx(Ge, {
          label: 'OrderId',
          error: U.orderId,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderId') })
        }),
        H.jsx(Ge, {
          label: 'OrderSide',
          error: U.orderSide,
          children: H.jsx(_r, {
            name: 'orderSide',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(At)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) =>
                    H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'CancelSpotOrder-orderSide',
                            type: 'radio',
                            value: Number(At[N]),
                            checked: x.value === Number(At[N]),
                            onChange: (te) => {
                              te.target.checked && x.onChange(Number(At[N]));
                            }
                          })
                        ]
                      },
                      N
                    )
                  )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'isCancelAll',
          error: U.isCancelAll,
          children: H.jsxs('label', {
            className: 'flex items-center gap-1',
            children: [
              H.jsx('span', { children: 'IsCancelAll' }),
              H.jsx('input', { type: 'checkbox', className: 'input', ...o('isCancelAll') })
            ]
          })
        }),
        H.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const s2 = Zt({
  hin: dt().required(),
  status: Oy(
    gt()
      .oneOf(
        Object.keys(mi)
          .filter((n) => !isNaN(Number(n)))
          .map(Number)
      )
      .required()
  ),
  marketId: dt(),
  orderIds: dt(),
  orderCategory: gt().oneOf(
    Object.keys(kn)
      .filter((n) => !isNaN(Number(n)))
      .map(Number)
  ),
  orderSide: gt().oneOf(
    Object.keys(At)
      .filter((n) => !isNaN(Number(n)))
      .map(Number)
  ),
  createdAtStart: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  createdAtEnd: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  limit: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  offset: gt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  orderBy: dt()
});
function c2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      control: S,
      handleSubmit: E,
      formState: { errors: U }
    } = Wt({ resolver: Pt(s2) }),
    v = E(async (x) => {
      var N;
      u(!0), c(null), h('');
      try {
        const te = {
          hin: BigInt(x.hin),
          status: (N = x.status) != null && N.length ? x.status : void 0,
          marketId: x.marketId ? BigInt(x.marketId) : void 0,
          orderIds: x.orderIds ? x.orderIds.split(',').map((he) => he.trim()) : void 0,
          orderCategory: x.orderCategory ?? void 0,
          orderSide: x.orderSide ?? void 0,
          createdAtStart: x.createdAtStart ?? void 0,
          createdAtEnd: x.createdAtEnd ?? void 0,
          limit: x.limit ?? void 0,
          offset: x.offset ?? void 0,
          orderBy: x.orderBy || void 0
        };
        c(await n.getOrders(te));
      } catch (te) {
        h(te.message ?? JSON.stringify(te));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetOrders',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'HIN(Hibit chain identity number)',
          error: U.hin,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('hin') })
        }),
        H.jsx(Ge, {
          label: 'Status',
          error: U.status,
          children: H.jsx(_r, {
            name: 'status',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(mi)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) => {
                    var te;
                    return H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'GetOrders-status',
                            type: 'checkbox',
                            value: Number(mi[N]),
                            checked: ((te = x.value) == null ? void 0 : te.includes(Number(mi[N]))) ?? !1,
                            onChange: (he) => {
                              he.target.checked
                                ? x.onChange([...(x.value ?? []), Number(mi[N])])
                                : x.onChange((x.value ?? []).filter((ge) => ge !== Number(mi[N])));
                            }
                          })
                        ]
                      },
                      N
                    );
                  })
              })
          })
        }),
        H.jsx(Ge, {
          label: 'MarketId',
          error: U.marketId,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('marketId') })
        }),
        H.jsx(Ge, {
          label: 'OrderIds',
          error: U.orderIds,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderIds') })
        }),
        H.jsx(Ge, {
          label: 'OrderCategory',
          error: U.orderCategory,
          children: H.jsx(_r, {
            name: 'orderCategory',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(kn)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) =>
                    H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'GetOrders-orderCategory',
                            type: 'radio',
                            value: Number(kn[N]),
                            checked: x.value === Number(kn[N]),
                            onChange: (te) => {
                              te.target.checked && x.onChange(Number(kn[N]));
                            }
                          })
                        ]
                      },
                      N
                    )
                  )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'OrderSide',
          error: U.orderSide,
          children: H.jsx(_r, {
            name: 'orderSide',
            control: S,
            render: ({ field: x }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(At)
                  .filter((N) => isNaN(Number(N)))
                  .map((N) =>
                    H.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          H.jsx('span', { children: N }),
                          H.jsx('input', {
                            name: 'GetOrders-orderSide',
                            type: 'radio',
                            value: Number(At[N]),
                            checked: x.value === Number(At[N]),
                            onChange: (te) => {
                              te.target.checked && x.onChange(Number(At[N]));
                            }
                          })
                        ]
                      },
                      N
                    )
                  )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'CreatedAtStart',
          error: U.createdAtStart,
          children: H.jsx(_r, {
            control: S,
            name: 'createdAtStart',
            render: ({ field: x }) =>
              H.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...x,
                value: x.value ? Ms(x.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (N) => {
                  x.onChange(N.target.value ? new Date(N.target.value).getTime() : void 0);
                }
              })
          })
        }),
        H.jsx(Ge, {
          label: 'CreatedAtEnd',
          error: U.createdAtEnd,
          children: H.jsx(_r, {
            control: S,
            name: 'createdAtEnd',
            render: ({ field: x }) =>
              H.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...x,
                value: x.value ? Ms(x.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (N) => {
                  x.onChange(N.target.value ? new Date(N.target.value).getTime() : void 0);
                }
              })
          })
        }),
        H.jsx(Ge, {
          label: 'Limit',
          error: U.limit,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('limit') })
        }),
        H.jsx(Ge, {
          label: 'Offset',
          error: U.offset,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('offset') })
        }),
        H.jsx(Ge, {
          label: 'OrderBy',
          error: U.orderBy,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderBy') })
        }),
        H.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const f2 = Zt({ orderId: dt(), clientOrderId: dt(), txHash: dt() }).test(
  'exactly-one-identifier',
  'Exactly one of Order ID, Client Order ID, or Tx Hash must be provided',
  function (n) {
    return [!!n.orderId, !!n.clientOrderId, !!n.txHash].filter(Boolean).length === 1;
  }
);
function o2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(f2) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        c(await n.getOrder(v));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetOrder',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'Order ID',
          error: E.orderId,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderId') })
        }),
        H.jsx(Ge, {
          label: 'Client Order ID',
          error: E.clientOrderId,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('clientOrderId') })
        }),
        H.jsx(Ge, {
          label: 'Tx Hash',
          error: E.txHash,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('txHash') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const h2 = Zt({ orderId: dt().required() });
function d2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(h2) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = v.orderId;
        c(await n.getOrderTrades(x));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetOrderTrades',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'OrderId',
          error: E.orderId,
          required: !0,
          children: H.jsx('input', { type: 'text', className: 'input', ...o('orderId') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const m2 = Zt({ hin: dt().required(), assetId: dt() });
function p2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(m2) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = { hin: BigInt(v.hin), assetId: v.assetId ? BigInt(v.assetId) : void 0 },
          N = await n.getWalletBalances(x);
        c(N);
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetWalletBalances',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'HIN(Hibit chain identity number)',
          error: E.hin,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('hin'), pattern: '[0-9]*' })
        }),
        H.jsx(Ge, {
          label: 'AssetId',
          error: E.assetId,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('assetId'), pattern: '[0-9]*' })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const y2 = Zt({ hin: dt().required() });
function g2({ client: n }) {
  const [a, u] = Xe.useState(!1),
    [s, c] = Xe.useState(null),
    [m, h] = Xe.useState(''),
    {
      register: o,
      handleSubmit: S,
      formState: { errors: E }
    } = Wt({ resolver: Pt(y2) }),
    U = S(async (v) => {
      u(!0), c(null), h('');
      try {
        const x = BigInt(v.hin);
        c(await n.getNonce(x));
      } catch (x) {
        h(x.message ?? JSON.stringify(x));
      } finally {
        u(!1);
      }
    });
  return H.jsx(Ft, {
    title: 'GetNonce',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'HIN(Hibit chain identity number)',
          error: E.hin,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...o('hin') })
        }),
        H.jsx('button', { className: 'btn', onClick: U, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    result: s,
    error: m
  });
}
const v2 = Zt({
  network: dt().oneOf(Object.values(Da).map(String)).required(),
  hin: dt().required(),
  proxyKey: dt().required()
});
function b2({ client: n, defaultOptions: a }) {
  var o;
  const {
      register: u,
      control: s,
      handleSubmit: c,
      formState: { errors: m }
    } = Wt({
      defaultValues: {
        network: a.network,
        hin: ((o = a.hin) == null ? void 0 : o.toString()) ?? '',
        proxyKey: a.proxyKey
      },
      resolver: Pt(v2)
    }),
    h = c(async (S) => {
      n.setOptions({ network: S.network, hin: BigInt(S.hin), proxyKey: S.proxyKey });
    });
  return H.jsx(Ft, {
    title: 'SDK Options Config',
    form: H.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        H.jsx(Ge, {
          label: 'Network',
          error: m.network,
          required: !0,
          children: H.jsx(_r, {
            name: 'network',
            control: s,
            render: ({ field: S }) =>
              H.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.values(Da).map((E) =>
                  H.jsxs(
                    'label',
                    {
                      className: 'flex items-center gap-1',
                      children: [
                        H.jsx('span', { children: E }),
                        H.jsx('input', {
                          name: 'network',
                          type: 'radio',
                          checked: S.value === E,
                          onChange: (U) => {
                            U.target.checked && S.onChange(E);
                          }
                        })
                      ]
                    },
                    E
                  )
                )
              })
          })
        }),
        H.jsx(Ge, {
          label: 'HIN',
          error: m.hin,
          required: !0,
          children: H.jsx('input', { type: 'number', className: 'input', ...u('hin') })
        }),
        H.jsx(Ge, {
          label: 'Proxy Key',
          error: m.proxyKey,
          required: !0,
          children: H.jsx('input', { type: 'text', className: 'input', ...u('proxyKey') })
        }),
        H.jsx('button', { className: 'btn self-start', onClick: h, children: 'Update Options' })
      ]
    }),
    error: ''
  });
}
const Op = {
    network: Da.Testnet,
    hin: BigInt(1e4),
    proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
  },
  S2 = () => {
    const [n, a] = Xe.useState(null);
    return (
      Xe.useEffect(() => {
        const u = new qb();
        u.setOptions(Op), a(u);
      }, []),
      n
        ? H.jsxs('main', {
            className: 'container mx-auto flex flex-col gap-6 p-6',
            children: [
              H.jsx('h1', { className: 'text-3xl font-bold text-center', children: 'Hibit SDK Examples' }),
              H.jsx(b2, { client: n, defaultOptions: Op }),
              H.jsx(zb, { client: n }),
              H.jsx(kb, { client: n }),
              H.jsx(qS, { client: n }),
              H.jsx(kS, { client: n }),
              H.jsx(LS, { client: n }),
              H.jsx(GS, { client: n }),
              H.jsx(VS, { client: n }),
              H.jsx($S, { client: n }),
              H.jsx(KS, { client: n }),
              H.jsx(ZS, { client: n }),
              H.jsx(t2, { client: n }),
              H.jsx(n2, { client: n }),
              H.jsx(a2, { client: n }),
              H.jsx(l2, { client: n }),
              H.jsx(c2, { client: n }),
              H.jsx(o2, { client: n }),
              H.jsx(d2, { client: n }),
              H.jsx(p2, { client: n }),
              H.jsx(g2, { client: n })
            ]
          })
        : null
    );
  };
X1.createRoot(document.getElementById('root')).render(H.jsx(Et.StrictMode, { children: H.jsx(S2, {}) }));
