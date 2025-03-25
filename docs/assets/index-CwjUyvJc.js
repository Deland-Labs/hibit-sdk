var H1 = Object.defineProperty;
var G1 = (n, a, u) => (a in n ? H1(n, a, { enumerable: !0, configurable: !0, writable: !0, value: u }) : (n[a] = u));
var gm = (n, a, u) => G1(n, typeof a != 'symbol' ? a + '' : a, u);
(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const m of c)
      if (m.type === 'childList')
        for (const o of m.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o);
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
var No =
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
var Kf = { exports: {} },
  Nu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vm;
function F1() {
  if (vm) return Nu;
  vm = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
  function u(s, c, m) {
    var o = null;
    if ((m !== void 0 && (o = '' + m), c.key !== void 0 && (o = '' + c.key), 'key' in c)) {
      m = {};
      for (var h in c) h !== 'key' && (m[h] = c[h]);
    } else m = c;
    return (c = m.ref), { $$typeof: n, type: s, key: o, ref: c !== void 0 ? c : null, props: m };
  }
  return (Nu.Fragment = a), (Nu.jsx = u), (Nu.jsxs = u), Nu;
}
var bm;
function V1() {
  return bm || ((bm = 1), (Kf.exports = F1())), Kf.exports;
}
var q = V1(),
  Jf = { exports: {} },
  at = {},
  Sm;
function Y1() {
  if (Sm) return at;
  Sm = 1;
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
    o = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    S = Symbol.for('react.suspense'),
    x = Symbol.for('react.memo'),
    B = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function _(D) {
    return D === null || typeof D != 'object'
      ? null
      : ((D = (v && D[v]) || D['@@iterator']), typeof D == 'function' ? D : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    W = Object.assign,
    ce = {};
  function de(D, ee, be) {
    (this.props = D), (this.context = ee), (this.refs = ce), (this.updater = be || O);
  }
  (de.prototype.isReactComponent = {}),
    (de.prototype.setState = function (D, ee) {
      if (typeof D != 'object' && typeof D != 'function' && D != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, D, ee, 'setState');
    }),
    (de.prototype.forceUpdate = function (D) {
      this.updater.enqueueForceUpdate(this, D, 'forceUpdate');
    });
  function ve() {}
  ve.prototype = de.prototype;
  function Q(D, ee, be) {
    (this.props = D), (this.context = ee), (this.refs = ce), (this.updater = be || O);
  }
  var je = (Q.prototype = new ve());
  (je.constructor = Q), W(je, de.prototype), (je.isPureReactComponent = !0);
  var We = Array.isArray,
    _e = { H: null, A: null, T: null, S: null },
    we = Object.prototype.hasOwnProperty;
  function De(D, ee, be, me, A, Ue) {
    return (be = Ue.ref), { $$typeof: n, type: D, key: ee, ref: be !== void 0 ? be : null, props: Ue };
  }
  function y(D, ee) {
    return De(D.type, ee, void 0, void 0, void 0, D.props);
  }
  function E(D) {
    return typeof D == 'object' && D !== null && D.$$typeof === n;
  }
  function w(D) {
    var ee = { '=': '=0', ':': '=2' };
    return (
      '$' +
      D.replace(/[=:]/g, function (be) {
        return ee[be];
      })
    );
  }
  var F = /\/+/g;
  function V(D, ee) {
    return typeof D == 'object' && D !== null && D.key != null ? w('' + D.key) : ee.toString(36);
  }
  function Y() {}
  function X(D) {
    switch (D.status) {
      case 'fulfilled':
        return D.value;
      case 'rejected':
        throw D.reason;
      default:
        switch (
          (typeof D.status == 'string'
            ? D.then(Y, Y)
            : ((D.status = 'pending'),
              D.then(
                function (ee) {
                  D.status === 'pending' && ((D.status = 'fulfilled'), (D.value = ee));
                },
                function (ee) {
                  D.status === 'pending' && ((D.status = 'rejected'), (D.reason = ee));
                }
              )),
          D.status)
        ) {
          case 'fulfilled':
            return D.value;
          case 'rejected':
            throw D.reason;
        }
    }
    throw D;
  }
  function C(D, ee, be, me, A) {
    var Ue = typeof D;
    (Ue === 'undefined' || Ue === 'boolean') && (D = null);
    var Ne = !1;
    if (D === null) Ne = !0;
    else
      switch (Ue) {
        case 'bigint':
        case 'string':
        case 'number':
          Ne = !0;
          break;
        case 'object':
          switch (D.$$typeof) {
            case n:
            case a:
              Ne = !0;
              break;
            case B:
              return (Ne = D._init), C(Ne(D._payload), ee, be, me, A);
          }
      }
    if (Ne)
      return (
        (A = A(D)),
        (Ne = me === '' ? '.' + V(D, 0) : me),
        We(A)
          ? ((be = ''),
            Ne != null && (be = Ne.replace(F, '$&/') + '/'),
            C(A, ee, be, '', function (Re) {
              return Re;
            }))
          : A != null &&
            (E(A) &&
              (A = y(
                A,
                be + (A.key == null || (D && D.key === A.key) ? '' : ('' + A.key).replace(F, '$&/') + '/') + Ne
              )),
            ee.push(A)),
        1
      );
    Ne = 0;
    var Ke = me === '' ? '.' : me + ':';
    if (We(D)) for (var Oe = 0; Oe < D.length; Oe++) (me = D[Oe]), (Ue = Ke + V(me, Oe)), (Ne += C(me, ee, be, Ue, A));
    else if (((Oe = _(D)), typeof Oe == 'function'))
      for (D = Oe.call(D), Oe = 0; !(me = D.next()).done; )
        (me = me.value), (Ue = Ke + V(me, Oe++)), (Ne += C(me, ee, be, Ue, A));
    else if (Ue === 'object') {
      if (typeof D.then == 'function') return C(X(D), ee, be, me, A);
      throw (
        ((ee = String(D)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (ee === '[object Object]' ? 'object with keys {' + Object.keys(D).join(', ') + '}' : ee) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return Ne;
  }
  function T(D, ee, be) {
    if (D == null) return D;
    var me = [],
      A = 0;
    return (
      C(D, me, '', '', function (Ue) {
        return ee.call(be, Ue, A++);
      }),
      me
    );
  }
  function G(D) {
    if (D._status === -1) {
      var ee = D._result;
      (ee = ee()),
        ee.then(
          function (be) {
            (D._status === 0 || D._status === -1) && ((D._status = 1), (D._result = be));
          },
          function (be) {
            (D._status === 0 || D._status === -1) && ((D._status = 2), (D._result = be));
          }
        ),
        D._status === -1 && ((D._status = 0), (D._result = ee));
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var I =
    typeof reportError == 'function'
      ? reportError
      : function (D) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var ee = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof D == 'object' && D !== null && typeof D.message == 'string' ? String(D.message) : String(D),
              error: D
            });
            if (!window.dispatchEvent(ee)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', D);
            return;
          }
          console.error(D);
        };
  function ue() {}
  return (
    (at.Children = {
      map: T,
      forEach: function (D, ee, be) {
        T(
          D,
          function () {
            ee.apply(this, arguments);
          },
          be
        );
      },
      count: function (D) {
        var ee = 0;
        return (
          T(D, function () {
            ee++;
          }),
          ee
        );
      },
      toArray: function (D) {
        return (
          T(D, function (ee) {
            return ee;
          }) || []
        );
      },
      only: function (D) {
        if (!E(D)) throw Error('React.Children.only expected to receive a single React element child.');
        return D;
      }
    }),
    (at.Component = de),
    (at.Fragment = u),
    (at.Profiler = c),
    (at.PureComponent = Q),
    (at.StrictMode = s),
    (at.Suspense = S),
    (at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _e),
    (at.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (at.cache = function (D) {
      return function () {
        return D.apply(null, arguments);
      };
    }),
    (at.cloneElement = function (D, ee, be) {
      if (D == null) throw Error('The argument must be a React element, but you passed ' + D + '.');
      var me = W({}, D.props),
        A = D.key,
        Ue = void 0;
      if (ee != null)
        for (Ne in (ee.ref !== void 0 && (Ue = void 0), ee.key !== void 0 && (A = '' + ee.key), ee))
          !we.call(ee, Ne) ||
            Ne === 'key' ||
            Ne === '__self' ||
            Ne === '__source' ||
            (Ne === 'ref' && ee.ref === void 0) ||
            (me[Ne] = ee[Ne]);
      var Ne = arguments.length - 2;
      if (Ne === 1) me.children = be;
      else if (1 < Ne) {
        for (var Ke = Array(Ne), Oe = 0; Oe < Ne; Oe++) Ke[Oe] = arguments[Oe + 2];
        me.children = Ke;
      }
      return De(D.type, A, void 0, void 0, Ue, me);
    }),
    (at.createContext = function (D) {
      return (
        (D = { $$typeof: o, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null }),
        (D.Provider = D),
        (D.Consumer = { $$typeof: m, _context: D }),
        D
      );
    }),
    (at.createElement = function (D, ee, be) {
      var me,
        A = {},
        Ue = null;
      if (ee != null)
        for (me in (ee.key !== void 0 && (Ue = '' + ee.key), ee))
          we.call(ee, me) && me !== 'key' && me !== '__self' && me !== '__source' && (A[me] = ee[me]);
      var Ne = arguments.length - 2;
      if (Ne === 1) A.children = be;
      else if (1 < Ne) {
        for (var Ke = Array(Ne), Oe = 0; Oe < Ne; Oe++) Ke[Oe] = arguments[Oe + 2];
        A.children = Ke;
      }
      if (D && D.defaultProps) for (me in ((Ne = D.defaultProps), Ne)) A[me] === void 0 && (A[me] = Ne[me]);
      return De(D, Ue, void 0, void 0, null, A);
    }),
    (at.createRef = function () {
      return { current: null };
    }),
    (at.forwardRef = function (D) {
      return { $$typeof: h, render: D };
    }),
    (at.isValidElement = E),
    (at.lazy = function (D) {
      return { $$typeof: B, _payload: { _status: -1, _result: D }, _init: G };
    }),
    (at.memo = function (D, ee) {
      return { $$typeof: x, type: D, compare: ee === void 0 ? null : ee };
    }),
    (at.startTransition = function (D) {
      var ee = _e.T,
        be = {};
      _e.T = be;
      try {
        var me = D(),
          A = _e.S;
        A !== null && A(be, me), typeof me == 'object' && me !== null && typeof me.then == 'function' && me.then(ue, I);
      } catch (Ue) {
        I(Ue);
      } finally {
        _e.T = ee;
      }
    }),
    (at.unstable_useCacheRefresh = function () {
      return _e.H.useCacheRefresh();
    }),
    (at.use = function (D) {
      return _e.H.use(D);
    }),
    (at.useActionState = function (D, ee, be) {
      return _e.H.useActionState(D, ee, be);
    }),
    (at.useCallback = function (D, ee) {
      return _e.H.useCallback(D, ee);
    }),
    (at.useContext = function (D) {
      return _e.H.useContext(D);
    }),
    (at.useDebugValue = function () {}),
    (at.useDeferredValue = function (D, ee) {
      return _e.H.useDeferredValue(D, ee);
    }),
    (at.useEffect = function (D, ee) {
      return _e.H.useEffect(D, ee);
    }),
    (at.useId = function () {
      return _e.H.useId();
    }),
    (at.useImperativeHandle = function (D, ee, be) {
      return _e.H.useImperativeHandle(D, ee, be);
    }),
    (at.useInsertionEffect = function (D, ee) {
      return _e.H.useInsertionEffect(D, ee);
    }),
    (at.useLayoutEffect = function (D, ee) {
      return _e.H.useLayoutEffect(D, ee);
    }),
    (at.useMemo = function (D, ee) {
      return _e.H.useMemo(D, ee);
    }),
    (at.useOptimistic = function (D, ee) {
      return _e.H.useOptimistic(D, ee);
    }),
    (at.useReducer = function (D, ee, be) {
      return _e.H.useReducer(D, ee, be);
    }),
    (at.useRef = function (D) {
      return _e.H.useRef(D);
    }),
    (at.useState = function (D) {
      return _e.H.useState(D);
    }),
    (at.useSyncExternalStore = function (D, ee, be) {
      return _e.H.useSyncExternalStore(D, ee, be);
    }),
    (at.useTransition = function () {
      return _e.H.useTransition();
    }),
    (at.version = '19.0.0'),
    at
  );
}
var xm;
function Do() {
  return xm || ((xm = 1), (Jf.exports = Y1())), Jf.exports;
}
var He = Do();
const xt = Iu(He);
var Wf = { exports: {} },
  Ou = {},
  Pf = { exports: {} },
  eo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em;
function $1() {
  return (
    Em ||
      ((Em = 1),
      (function (n) {
        function a(T, G) {
          var I = T.length;
          T.push(G);
          e: for (; 0 < I; ) {
            var ue = (I - 1) >>> 1,
              D = T[ue];
            if (0 < c(D, G)) (T[ue] = G), (T[I] = D), (I = ue);
            else break e;
          }
        }
        function u(T) {
          return T.length === 0 ? null : T[0];
        }
        function s(T) {
          if (T.length === 0) return null;
          var G = T[0],
            I = T.pop();
          if (I !== G) {
            T[0] = I;
            e: for (var ue = 0, D = T.length, ee = D >>> 1; ue < ee; ) {
              var be = 2 * (ue + 1) - 1,
                me = T[be],
                A = be + 1,
                Ue = T[A];
              if (0 > c(me, I))
                A < D && 0 > c(Ue, me) ? ((T[ue] = Ue), (T[A] = I), (ue = A)) : ((T[ue] = me), (T[be] = I), (ue = be));
              else if (A < D && 0 > c(Ue, I)) (T[ue] = Ue), (T[A] = I), (ue = A);
              else break e;
            }
          }
          return G;
        }
        function c(T, G) {
          var I = T.sortIndex - G.sortIndex;
          return I !== 0 ? I : T.id - G.id;
        }
        if (((n.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var m = performance;
          n.unstable_now = function () {
            return m.now();
          };
        } else {
          var o = Date,
            h = o.now();
          n.unstable_now = function () {
            return o.now() - h;
          };
        }
        var S = [],
          x = [],
          B = 1,
          v = null,
          _ = 3,
          O = !1,
          W = !1,
          ce = !1,
          de = typeof setTimeout == 'function' ? setTimeout : null,
          ve = typeof clearTimeout == 'function' ? clearTimeout : null,
          Q = typeof setImmediate < 'u' ? setImmediate : null;
        function je(T) {
          for (var G = u(x); G !== null; ) {
            if (G.callback === null) s(x);
            else if (G.startTime <= T) s(x), (G.sortIndex = G.expirationTime), a(S, G);
            else break;
            G = u(x);
          }
        }
        function We(T) {
          if (((ce = !1), je(T), !W))
            if (u(S) !== null) (W = !0), X();
            else {
              var G = u(x);
              G !== null && C(We, G.startTime - T);
            }
        }
        var _e = !1,
          we = -1,
          De = 5,
          y = -1;
        function E() {
          return !(n.unstable_now() - y < De);
        }
        function w() {
          if (_e) {
            var T = n.unstable_now();
            y = T;
            var G = !0;
            try {
              e: {
                (W = !1), ce && ((ce = !1), ve(we), (we = -1)), (O = !0);
                var I = _;
                try {
                  t: {
                    for (je(T), v = u(S); v !== null && !(v.expirationTime > T && E()); ) {
                      var ue = v.callback;
                      if (typeof ue == 'function') {
                        (v.callback = null), (_ = v.priorityLevel);
                        var D = ue(v.expirationTime <= T);
                        if (((T = n.unstable_now()), typeof D == 'function')) {
                          (v.callback = D), je(T), (G = !0);
                          break t;
                        }
                        v === u(S) && s(S), je(T);
                      } else s(S);
                      v = u(S);
                    }
                    if (v !== null) G = !0;
                    else {
                      var ee = u(x);
                      ee !== null && C(We, ee.startTime - T), (G = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (_ = I), (O = !1);
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
            Q(w);
          };
        else if (typeof MessageChannel < 'u') {
          var V = new MessageChannel(),
            Y = V.port2;
          (V.port1.onmessage = w),
            (F = function () {
              Y.postMessage(null);
            });
        } else
          F = function () {
            de(w, 0);
          };
        function X() {
          _e || ((_e = !0), F());
        }
        function C(T, G) {
          we = de(function () {
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
            W || O || ((W = !0), X());
          }),
          (n.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (De = 0 < T ? Math.floor(1e3 / T) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return u(S);
          }),
          (n.unstable_next = function (T) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = _;
            }
            var I = _;
            _ = G;
            try {
              return T();
            } finally {
              _ = I;
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
            var I = _;
            _ = T;
            try {
              return G();
            } finally {
              _ = I;
            }
          }),
          (n.unstable_scheduleCallback = function (T, G, I) {
            var ue = n.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? ue + I : ue))
                : (I = ue),
              T)
            ) {
              case 1:
                var D = -1;
                break;
              case 2:
                D = 250;
                break;
              case 5:
                D = 1073741823;
                break;
              case 4:
                D = 1e4;
                break;
              default:
                D = 5e3;
            }
            return (
              (D = I + D),
              (T = { id: B++, callback: G, priorityLevel: T, startTime: I, expirationTime: D, sortIndex: -1 }),
              I > ue
                ? ((T.sortIndex = I),
                  a(x, T),
                  u(S) === null && T === u(x) && (ce ? (ve(we), (we = -1)) : (ce = !0), C(We, I - ue)))
                : ((T.sortIndex = D), a(S, T), W || O || ((W = !0), X())),
              T
            );
          }),
          (n.unstable_shouldYield = E),
          (n.unstable_wrapCallback = function (T) {
            var G = _;
            return function () {
              var I = _;
              _ = G;
              try {
                return T.apply(this, arguments);
              } finally {
                _ = I;
              }
            };
          });
      })(eo)),
    eo
  );
}
var _m;
function X1() {
  return _m || ((_m = 1), (Pf.exports = $1())), Pf.exports;
}
var to = { exports: {} },
  ur = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wm;
function Z1() {
  if (wm) return ur;
  wm = 1;
  var n = Do();
  function a(S) {
    var x = 'https://react.dev/errors/' + S;
    if (1 < arguments.length) {
      x += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++) x += '&args[]=' + encodeURIComponent(arguments[B]);
    }
    return (
      'Minified React error #' +
      S +
      '; visit ' +
      x +
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
  function m(S, x, B) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: v == null ? null : '' + v, children: S, containerInfo: x, implementation: B };
  }
  var o = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(S, x) {
    if (S === 'font') return '';
    if (typeof x == 'string') return x === 'use-credentials' ? x : '';
  }
  return (
    (ur.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ur.createPortal = function (S, x) {
      var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11)) throw Error(a(299));
      return m(S, x, null, B);
    }),
    (ur.flushSync = function (S) {
      var x = o.T,
        B = s.p;
      try {
        if (((o.T = null), (s.p = 2), S)) return S();
      } finally {
        (o.T = x), (s.p = B), s.d.f();
      }
    }),
    (ur.preconnect = function (S, x) {
      typeof S == 'string' &&
        (x
          ? ((x = x.crossOrigin), (x = typeof x == 'string' ? (x === 'use-credentials' ? x : '') : void 0))
          : (x = null),
        s.d.C(S, x));
    }),
    (ur.prefetchDNS = function (S) {
      typeof S == 'string' && s.d.D(S);
    }),
    (ur.preinit = function (S, x) {
      if (typeof S == 'string' && x && typeof x.as == 'string') {
        var B = x.as,
          v = h(B, x.crossOrigin),
          _ = typeof x.integrity == 'string' ? x.integrity : void 0,
          O = typeof x.fetchPriority == 'string' ? x.fetchPriority : void 0;
        B === 'style'
          ? s.d.S(S, typeof x.precedence == 'string' ? x.precedence : void 0, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: O
            })
          : B === 'script' &&
            s.d.X(S, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: O,
              nonce: typeof x.nonce == 'string' ? x.nonce : void 0
            });
      }
    }),
    (ur.preinitModule = function (S, x) {
      if (typeof S == 'string')
        if (typeof x == 'object' && x !== null) {
          if (x.as == null || x.as === 'script') {
            var B = h(x.as, x.crossOrigin);
            s.d.M(S, {
              crossOrigin: B,
              integrity: typeof x.integrity == 'string' ? x.integrity : void 0,
              nonce: typeof x.nonce == 'string' ? x.nonce : void 0
            });
          }
        } else x == null && s.d.M(S);
    }),
    (ur.preload = function (S, x) {
      if (typeof S == 'string' && typeof x == 'object' && x !== null && typeof x.as == 'string') {
        var B = x.as,
          v = h(B, x.crossOrigin);
        s.d.L(S, B, {
          crossOrigin: v,
          integrity: typeof x.integrity == 'string' ? x.integrity : void 0,
          nonce: typeof x.nonce == 'string' ? x.nonce : void 0,
          type: typeof x.type == 'string' ? x.type : void 0,
          fetchPriority: typeof x.fetchPriority == 'string' ? x.fetchPriority : void 0,
          referrerPolicy: typeof x.referrerPolicy == 'string' ? x.referrerPolicy : void 0,
          imageSrcSet: typeof x.imageSrcSet == 'string' ? x.imageSrcSet : void 0,
          imageSizes: typeof x.imageSizes == 'string' ? x.imageSizes : void 0,
          media: typeof x.media == 'string' ? x.media : void 0
        });
      }
    }),
    (ur.preloadModule = function (S, x) {
      if (typeof S == 'string')
        if (x) {
          var B = h(x.as, x.crossOrigin);
          s.d.m(S, {
            as: typeof x.as == 'string' && x.as !== 'script' ? x.as : void 0,
            crossOrigin: B,
            integrity: typeof x.integrity == 'string' ? x.integrity : void 0
          });
        } else s.d.m(S);
    }),
    (ur.requestFormReset = function (S) {
      s.d.r(S);
    }),
    (ur.unstable_batchedUpdates = function (S, x) {
      return S(x);
    }),
    (ur.useFormState = function (S, x, B) {
      return o.H.useFormState(S, x, B);
    }),
    (ur.useFormStatus = function () {
      return o.H.useHostTransitionStatus();
    }),
    (ur.version = '19.0.0'),
    ur
  );
}
var Am;
function Q1() {
  if (Am) return to.exports;
  Am = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (to.exports = Z1()), to.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nm;
function K1() {
  if (Nm) return Ou;
  Nm = 1;
  var n = X1(),
    a = Do(),
    u = Q1();
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
    o = Symbol.for('react.transitional.element'),
    h = Symbol.for('react.portal'),
    S = Symbol.for('react.fragment'),
    x = Symbol.for('react.strict_mode'),
    B = Symbol.for('react.profiler'),
    v = Symbol.for('react.provider'),
    _ = Symbol.for('react.consumer'),
    O = Symbol.for('react.context'),
    W = Symbol.for('react.forward_ref'),
    ce = Symbol.for('react.suspense'),
    de = Symbol.for('react.suspense_list'),
    ve = Symbol.for('react.memo'),
    Q = Symbol.for('react.lazy'),
    je = Symbol.for('react.offscreen'),
    We = Symbol.for('react.memo_cache_sentinel'),
    _e = Symbol.iterator;
  function we(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (_e && e[_e]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var De = Symbol.for('react.client.reference');
  function y(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === De ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case S:
        return 'Fragment';
      case h:
        return 'Portal';
      case B:
        return 'Profiler';
      case x:
        return 'StrictMode';
      case ce:
        return 'Suspense';
      case de:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case O:
          return (e.displayName || 'Context') + '.Provider';
        case _:
          return (e._context.displayName || 'Context') + '.Consumer';
        case W:
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
  var E = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = Object.assign,
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
                  var ye = Se;
                }
                Reflect.construct(e, [], Te);
              } else {
                try {
                  Te.call();
                } catch (Se) {
                  ye = Se;
                }
                e.call(Te.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Se) {
                ye = Se;
              }
              (Te = e()) && typeof Te.catch == 'function' && Te.catch(function () {});
            }
          } catch (Se) {
            if (Se && ye && typeof Se.stack == 'string') return [Se.stack, ye.stack];
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
        U = f[1];
      if (g && U) {
        var $ = g.split(`
`),
          le = U.split(`
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
                  var xe =
                    `
` + $[i].replace(' at new ', ' at ');
                  return (
                    e.displayName && xe.includes('<anonymous>') && (xe = xe.replace('<anonymous>', e.displayName)), xe
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
  function I(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
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
  function D(e) {
    if (I(e) !== e) throw Error(s(188));
  }
  function ee(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = I(e)), t === null)) throw Error(s(188));
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
          if (f === r) return D(l), e;
          if (f === i) return D(l), t;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== i.return) (r = l), (i = f);
      else {
        for (var g = !1, U = l.child; U; ) {
          if (U === r) {
            (g = !0), (r = l), (i = f);
            break;
          }
          if (U === i) {
            (g = !0), (i = l), (r = f);
            break;
          }
          U = U.sibling;
        }
        if (!g) {
          for (U = f.child; U; ) {
            if (U === r) {
              (g = !0), (r = f), (i = l);
              break;
            }
            if (U === i) {
              (g = !0), (i = f), (r = l);
              break;
            }
            U = U.sibling;
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
  var me = Array.isArray,
    A = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Ue = { pending: !1, data: null, method: null, action: null },
    Ne = [],
    Ke = -1;
  function Oe(e) {
    return { current: e };
  }
  function Re(e) {
    0 > Ke || ((e.current = Ne[Ke]), (Ne[Ke] = null), Ke--);
  }
  function M(e, t) {
    Ke++, (Ne[Ke] = e.current), (e.current = t);
  }
  var R = Oe(null),
    Z = Oe(null),
    ie = Oe(null),
    P = Oe(null);
  function ne(e, t) {
    switch ((M(ie, t), M(Z, e), M(R, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? $0(t) : 0;
        break;
      default:
        if (((e = e === 8 ? t.parentNode : t), (t = e.tagName), (e = e.namespaceURI))) (e = $0(e)), (t = X0(e, t));
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
    Re(R), M(R, t);
  }
  function fe() {
    Re(R), Re(Z), Re(ie);
  }
  function re(e) {
    e.memoizedState !== null && M(P, e);
    var t = R.current,
      r = X0(t, e.type);
    t !== r && (M(Z, e), M(R, r));
  }
  function N(e) {
    Z.current === e && (Re(R), Re(Z)), P.current === e && (Re(P), (xu._currentValue = Ue));
  }
  var z = Object.prototype.hasOwnProperty,
    L = n.unstable_scheduleCallback,
    J = n.unstable_cancelCallback,
    pe = n.unstable_shouldYield,
    ge = n.unstable_requestPaint,
    Me = n.unstable_now,
    qe = n.unstable_getCurrentPriorityLevel,
    tt = n.unstable_ImmediatePriority,
    b = n.unstable_UserBlockingPriority,
    d = n.unstable_NormalPriority,
    p = n.unstable_LowPriority,
    H = n.unstable_IdlePriority,
    te = n.log,
    j = n.unstable_setDisableYieldValue,
    k = null,
    se = null;
  function Ee(e) {
    if (se && typeof se.onCommitFiberRoot == 'function')
      try {
        se.onCommitFiberRoot(k, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Be(e) {
    if ((typeof te == 'function' && j(e), se && typeof se.setStrictMode == 'function'))
      try {
        se.setStrictMode(k, e);
      } catch {}
  }
  var Ce = Math.clz32 ? Math.clz32 : Ie,
    Pe = Math.log,
    $e = Math.LN2;
  function Ie(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Pe(e) / $e) | 0)) | 0;
  }
  var Le = 128,
    Ge = 4194304;
  function Fe(e) {
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
    var U = r & 134217727;
    return (
      U !== 0
        ? ((r = U & ~l),
          r !== 0 ? (i = Fe(r)) : ((f &= U), f !== 0 ? (i = Fe(f)) : e || ((g = U & ~g), g !== 0 && (i = Fe(g)))))
        : ((U = r & ~l), U !== 0 ? (i = Fe(U)) : f !== 0 ? (i = Fe(f)) : e || ((g = r & ~g), g !== 0 && (i = Fe(g)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & l) === 0 &&
            ((l = i & -i), (g = t & -t), l >= g || (l === 32 && (g & 4194176) !== 0))
          ? t
          : i
    );
  }
  function st(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Rt(e, t) {
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
    var e = Le;
    return (Le <<= 1), (Le & 4194176) === 0 && (Le = 128), e;
  }
  function Zi() {
    var e = Ge;
    return (Ge <<= 1), (Ge & 62914560) === 0 && (Ge = 4194304), e;
  }
  function Qi(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Ot(e, t) {
    (e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function $o(e, t, r, i, l, f) {
    var g = e.pendingLanes;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0);
    var U = e.entanglements,
      $ = e.expirationTimes,
      le = e.hiddenUpdates;
    for (r = g & ~r; 0 < r; ) {
      var xe = 31 - Ce(r),
        Te = 1 << xe;
      (U[xe] = 0), ($[xe] = -1);
      var ye = le[xe];
      if (ye !== null)
        for (le[xe] = null, xe = 0; xe < ye.length; xe++) {
          var Se = ye[xe];
          Se !== null && (Se.lane &= -536870913);
        }
      r &= ~Te;
    }
    i !== 0 && Gs(e, i, 0), f !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t));
  }
  function Gs(e, t, r) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var i = 31 - Ce(t);
    (e.entangledLanes |= t), (e.entanglements[i] = e.entanglements[i] | 1073741824 | (r & 4194218));
  }
  function Fs(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var i = 31 - Ce(r),
        l = 1 << i;
      (l & t) | (e[i] & t) && (e[i] |= t), (r &= ~l);
    }
  }
  function Ku(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function Ju() {
    var e = A.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : om(e.type));
  }
  function Vs(e, t) {
    var r = A.p;
    try {
      return (A.p = e), t();
    } finally {
      A.p = r;
    }
  }
  var un = Math.random().toString(36).slice(2),
    ft = '__reactFiber$' + un,
    ir = '__reactProps$' + un,
    Hn = '__reactContainer$' + un,
    Da = '__reactEvents$' + un,
    Ys = '__reactListeners$' + un,
    $s = '__reactHandles$' + un,
    Wu = '__reactResources$' + un,
    gi = '__reactMarker$' + un;
  function ja(e) {
    delete e[ft], delete e[ir], delete e[Da], delete e[Ys], delete e[$s];
  }
  function dt(e) {
    var t = e[ft];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Hn] || r[ft])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = K0(e); e !== null; ) {
            if ((r = e[ft])) return r;
            e = K0(e);
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
    var t = e[Wu];
    return t || (t = e[Wu] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
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
    jy = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Xo = {},
    Zo = {};
  function Cy(e) {
    return z.call(Zo, e) ? !0 : z.call(Xo, e) ? !1 : jy.test(e) ? (Zo[e] = !0) : ((Xo[e] = !0), !1);
  }
  function Pu(e, t, r) {
    if (Cy(t))
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
  function el(e, t, r) {
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
  function kr(e) {
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
  function Qo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function ky(e) {
    var t = Qo(e) ? 'checked' : 'value',
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
  function tl(e) {
    e._valueTracker || (e._valueTracker = ky(e));
  }
  function Ko(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      i = '';
    return e && (i = Qo(e) ? (e.checked ? 'true' : 'false') : e.value), (e = i), e !== r ? (t.setValue(e), !0) : !1;
  }
  function rl(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var qy = /[\n"\\]/g;
  function qr(e) {
    return e.replace(qy, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Xs(e, t, r, i, l, f, g, U) {
    (e.name = ''),
      g != null && typeof g != 'function' && typeof g != 'symbol' && typeof g != 'boolean'
        ? (e.type = g)
        : e.removeAttribute('type'),
      t != null
        ? g === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + kr(t))
          : e.value !== '' + kr(t) && (e.value = '' + kr(t))
        : (g !== 'submit' && g !== 'reset') || e.removeAttribute('value'),
      t != null ? Zs(e, g, kr(t)) : r != null ? Zs(e, g, kr(r)) : i != null && e.removeAttribute('value'),
      l == null && f != null && (e.defaultChecked = !!f),
      l != null && (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      U != null && typeof U != 'function' && typeof U != 'symbol' && typeof U != 'boolean'
        ? (e.name = '' + kr(U))
        : e.removeAttribute('name');
  }
  function Jo(e, t, r, i, l, f, g, U) {
    if (
      (f != null && typeof f != 'function' && typeof f != 'symbol' && typeof f != 'boolean' && (e.type = f),
      t != null || r != null)
    ) {
      if (!((f !== 'submit' && f !== 'reset') || t != null)) return;
      (r = r != null ? '' + kr(r) : ''),
        (t = t != null ? '' + kr(t) : r),
        U || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (i = i ?? l),
      (i = typeof i != 'function' && typeof i != 'symbol' && !!i),
      (e.checked = U ? e.checked : !!i),
      (e.defaultChecked = !!i),
      g != null && typeof g != 'function' && typeof g != 'symbol' && typeof g != 'boolean' && (e.name = g);
  }
  function Zs(e, t, r) {
    (t === 'number' && rl(e.ownerDocument) === e) || e.defaultValue === '' + r || (e.defaultValue = '' + r);
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
      for (r = '' + kr(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          (e[l].selected = !0), i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Wo(e, t, r) {
    if (t != null && ((t = '' + kr(t)), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? '' + kr(r) : '';
  }
  function Po(e, t, r, i) {
    if (t == null) {
      if (i != null) {
        if (r != null) throw Error(s(92));
        if (me(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ''), (t = r);
    }
    (r = kr(t)), (e.defaultValue = r), (i = e.textContent), i === r && i !== '' && i !== null && (e.value = i);
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
  var zy = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function eh(e, t, r) {
    var i = t.indexOf('--') === 0;
    r == null || typeof r == 'boolean' || r === ''
      ? i
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : i
        ? e.setProperty(t, r)
        : typeof r != 'number' || r === 0 || zy.has(t)
          ? t === 'float'
            ? (e.cssFloat = r)
            : (e[t] = ('' + r).trim())
          : (e[t] = r + 'px');
  }
  function th(e, t, r) {
    if (t != null && typeof t != 'object') throw Error(s(62));
    if (((e = e.style), r != null)) {
      for (var i in r)
        !r.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf('--') === 0 ? e.setProperty(i, '') : i === 'float' ? (e.cssFloat = '') : (e[i] = ''));
      for (var l in t) (i = t[l]), t.hasOwnProperty(l) && r[l] !== i && eh(e, l, i);
    } else for (var f in t) t.hasOwnProperty(f) && eh(e, f, t[f]);
  }
  function Qs(e) {
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
  var Iy = new Map([
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
    Ly =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function nl(e) {
    return Ly.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ks = null;
  function Js(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wi = null,
    Pi = null;
  function rh(e) {
    var t = Gn(e);
    if (t && (e = t.stateNode)) {
      var r = e[ir] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Xs(e, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name),
            (t = r.name),
            r.type === 'radio' && t != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll('input[name="' + qr('' + t) + '"][type="radio"]'), t = 0; t < r.length; t++) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var l = i[ir] || null;
                if (!l) throw Error(s(90));
                Xs(i, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
              }
            }
            for (t = 0; t < r.length; t++) (i = r[t]), i.form === e.form && Ko(i);
          }
          break e;
        case 'textarea':
          Wo(e, r.value, r.defaultValue);
          break e;
        case 'select':
          (t = r.value), t != null && Ki(e, !!r.multiple, t, !1);
      }
    }
  }
  var Ws = !1;
  function nh(e, t, r) {
    if (Ws) return e(t, r);
    Ws = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (((Ws = !1), (Wi !== null || Pi !== null) && (Ll(), Wi && ((t = Wi), (e = Pi), (Pi = Wi = null), rh(t), e))))
        for (t = 0; t < e.length; t++) rh(e[t]);
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
  var Ps = !1;
  if (ln)
    try {
      var ka = {};
      Object.defineProperty(ka, 'passive', {
        get: function () {
          Ps = !0;
        }
      }),
        window.addEventListener('test', ka, ka),
        window.removeEventListener('test', ka, ka);
    } catch {
      Ps = !1;
    }
  var Fn = null,
    ec = null,
    il = null;
  function ih() {
    if (il) return il;
    var e,
      t = ec,
      r = t.length,
      i,
      l = 'value' in Fn ? Fn.value : Fn.textContent,
      f = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var g = r - e;
    for (i = 1; i <= g && t[r - i] === l[f - i]; i++);
    return (il = l.slice(e, 1 < i ? 1 - i : void 0));
  }
  function al(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ul() {
    return !0;
  }
  function ah() {
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
      for (var U in e) e.hasOwnProperty(U) && ((r = e[U]), (this[U] = r ? r(f) : f[U]));
      return (
        (this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ul : ah),
        (this.isPropagationStopped = ah),
        this
      );
    }
    return (
      w(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault ? r.preventDefault() : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = ul));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = ul));
        },
        persist: function () {},
        isPersistent: ul
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
    ll = pr(bi),
    qa = w({}, bi, { view: 0, detail: 0 }),
    Hy = pr(qa),
    tc,
    rc,
    za,
    sl = w({}, qa, {
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
      getModifierState: ic,
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
          : (e !== za &&
              (za && e.type === 'mousemove'
                ? ((tc = e.screenX - za.screenX), (rc = e.screenY - za.screenY))
                : (rc = tc = 0),
              (za = e)),
            tc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : rc;
      }
    }),
    uh = pr(sl),
    Gy = w({}, sl, { dataTransfer: 0 }),
    Fy = pr(Gy),
    Vy = w({}, qa, { relatedTarget: 0 }),
    nc = pr(Vy),
    Yy = w({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $y = pr(Yy),
    Xy = w({}, bi, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      }
    }),
    Zy = pr(Xy),
    Qy = w({}, bi, { data: 0 }),
    lh = pr(Qy),
    Ky = {
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
    Jy = {
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
    Wy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Py(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wy[e]) ? !!t[e] : !1;
  }
  function ic() {
    return Py;
  }
  var eg = w({}, qa, {
      key: function (e) {
        if (e.key) {
          var t = Ky[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = al(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Jy[e.keyCode] || 'Unidentified'
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
      getModifierState: ic,
      charCode: function (e) {
        return e.type === 'keypress' ? al(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? al(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      }
    }),
    tg = pr(eg),
    rg = w({}, sl, {
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
    sh = pr(rg),
    ng = w({}, qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ic
    }),
    ig = pr(ng),
    ag = w({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ug = pr(ag),
    lg = w({}, sl, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    sg = pr(lg),
    cg = w({}, bi, { newState: 0, oldState: 0 }),
    fg = pr(cg),
    og = [9, 13, 27, 32],
    ac = ln && 'CompositionEvent' in window,
    Ia = null;
  ln && 'documentMode' in document && (Ia = document.documentMode);
  var hg = ln && 'TextEvent' in window && !Ia,
    ch = ln && (!ac || (Ia && 8 < Ia && 11 >= Ia)),
    fh = ' ',
    oh = !1;
  function hh(e, t) {
    switch (e) {
      case 'keyup':
        return og.indexOf(t.keyCode) !== -1;
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
  function dh(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var ea = !1;
  function dg(e, t) {
    switch (e) {
      case 'compositionend':
        return dh(t);
      case 'keypress':
        return t.which !== 32 ? null : ((oh = !0), fh);
      case 'textInput':
        return (e = t.data), e === fh && oh ? null : e;
      default:
        return null;
    }
  }
  function mg(e, t) {
    if (ea)
      return e === 'compositionend' || (!ac && hh(e, t)) ? ((e = ih()), (il = ec = Fn = null), (ea = !1), e) : null;
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
        return ch && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var pg = {
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
  function mh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!pg[e.type] : t === 'textarea';
  }
  function ph(e, t, r, i) {
    Wi ? (Pi ? Pi.push(i) : (Pi = [i])) : (Wi = i),
      (t = Yl(t, 'onChange')),
      0 < t.length && ((r = new ll('onChange', 'change', null, r, i)), e.push({ event: r, listeners: t }));
  }
  var La = null,
    Ha = null;
  function yg(e) {
    H0(e, 0);
  }
  function cl(e) {
    var t = vi(e);
    if (Ko(t)) return e;
  }
  function yh(e, t) {
    if (e === 'change') return t;
  }
  var gh = !1;
  if (ln) {
    var uc;
    if (ln) {
      var lc = 'oninput' in document;
      if (!lc) {
        var vh = document.createElement('div');
        vh.setAttribute('oninput', 'return;'), (lc = typeof vh.oninput == 'function');
      }
      uc = lc;
    } else uc = !1;
    gh = uc && (!document.documentMode || 9 < document.documentMode);
  }
  function bh() {
    La && (La.detachEvent('onpropertychange', Sh), (Ha = La = null));
  }
  function Sh(e) {
    if (e.propertyName === 'value' && cl(Ha)) {
      var t = [];
      ph(t, Ha, e, Js(e)), nh(yg, t);
    }
  }
  function gg(e, t, r) {
    e === 'focusin' ? (bh(), (La = t), (Ha = r), La.attachEvent('onpropertychange', Sh)) : e === 'focusout' && bh();
  }
  function vg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return cl(Ha);
  }
  function bg(e, t) {
    if (e === 'click') return cl(t);
  }
  function Sg(e, t) {
    if (e === 'input' || e === 'change') return cl(t);
  }
  function xg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wr = typeof Object.is == 'function' ? Object.is : xg;
  function Ga(e, t) {
    if (wr(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var l = r[i];
      if (!z.call(t, l) || !wr(e[l], t[l])) return !1;
    }
    return !0;
  }
  function xh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Eh(e, t) {
    var r = xh(e);
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
      r = xh(r);
    }
  }
  function _h(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? _h(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function wh(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = rl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = rl(e.document);
    }
    return t;
  }
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Eg(e, t) {
    var r = wh(t);
    t = e.focusedElem;
    var i = e.selectionRange;
    if (r !== t && t && t.ownerDocument && _h(t.ownerDocument.documentElement, t)) {
      if (i !== null && sc(t)) {
        if (((e = i.start), (r = i.end), r === void 0 && (r = e), 'selectionStart' in t))
          (t.selectionStart = e), (t.selectionEnd = Math.min(r, t.value.length));
        else if (((r = ((e = t.ownerDocument || document) && e.defaultView) || window), r.getSelection)) {
          r = r.getSelection();
          var l = t.textContent.length,
            f = Math.min(i.start, l);
          (i = i.end === void 0 ? f : Math.min(i.end, l)),
            !r.extend && f > i && ((l = i), (i = f), (f = l)),
            (l = Eh(t, f));
          var g = Eh(t, i);
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
  var _g = ln && 'documentMode' in document && 11 >= document.documentMode,
    ta = null,
    cc = null,
    Fa = null,
    fc = !1;
  function Ah(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    fc ||
      ta == null ||
      ta !== rl(i) ||
      ((i = ta),
      'selectionStart' in i && sc(i)
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
        (i = Yl(cc, 'onSelect')),
        0 < i.length &&
          ((t = new ll('onSelect', 'select', null, t, r)), e.push({ event: t, listeners: i }), (t.target = ta))));
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
    oc = {},
    Nh = {};
  ln &&
    ((Nh = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ra.animationend.animation, delete ra.animationiteration.animation, delete ra.animationstart.animation),
    'TransitionEvent' in window || delete ra.transitionend.transition);
  function xi(e) {
    if (oc[e]) return oc[e];
    if (!ra[e]) return e;
    var t = ra[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Nh) return (oc[e] = t[r]);
    return e;
  }
  var Oh = xi('animationend'),
    Th = xi('animationiteration'),
    Mh = xi('animationstart'),
    wg = xi('transitionrun'),
    Ag = xi('transitionstart'),
    Ng = xi('transitioncancel'),
    Bh = xi('transitionend'),
    Uh = new Map(),
    Rh =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' '
      );
  function Wr(e, t) {
    Uh.set(e, t), jr(t, [e]);
  }
  var zr = [],
    na = 0,
    hc = 0;
  function fl() {
    for (var e = na, t = (hc = na = 0); t < e; ) {
      var r = zr[t];
      zr[t++] = null;
      var i = zr[t];
      zr[t++] = null;
      var l = zr[t];
      zr[t++] = null;
      var f = zr[t];
      if (((zr[t++] = null), i !== null && l !== null)) {
        var g = i.pending;
        g === null ? (l.next = l) : ((l.next = g.next), (g.next = l)), (i.pending = l);
      }
      f !== 0 && Dh(r, l, f);
    }
  }
  function ol(e, t, r, i) {
    (zr[na++] = e),
      (zr[na++] = t),
      (zr[na++] = r),
      (zr[na++] = i),
      (hc |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i);
  }
  function dc(e, t, r, i) {
    return ol(e, t, r, i), hl(e);
  }
  function Vn(e, t) {
    return ol(e, null, null, t), hl(e);
  }
  function Dh(e, t, r) {
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
  function hl(e) {
    if (50 < mu) throw ((mu = 0), (Sf = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ia = {},
    jh = new WeakMap();
  function Ir(e, t) {
    if (typeof e == 'object' && e !== null) {
      var r = jh.get(e);
      return r !== void 0 ? r : ((t = { value: e, source: t, stack: G(t) }), jh.set(e, t), t);
    }
    return { value: e, source: t, stack: G(t) };
  }
  var aa = [],
    ua = 0,
    dl = null,
    ml = 0,
    Lr = [],
    Hr = 0,
    Ei = null,
    bn = 1,
    Sn = '';
  function _i(e, t) {
    (aa[ua++] = ml), (aa[ua++] = dl), (dl = e), (ml = t);
  }
  function Ch(e, t, r) {
    (Lr[Hr++] = bn), (Lr[Hr++] = Sn), (Lr[Hr++] = Ei), (Ei = e);
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
  function mc(e) {
    e.return !== null && (_i(e, 1), Ch(e, 1, 0));
  }
  function pc(e) {
    for (; e === dl; ) (dl = aa[--ua]), (aa[ua] = null), (ml = aa[--ua]), (aa[ua] = null);
    for (; e === Ei; )
      (Ei = Lr[--Hr]), (Lr[Hr] = null), (Sn = Lr[--Hr]), (Lr[Hr] = null), (bn = Lr[--Hr]), (Lr[Hr] = null);
  }
  var or = null,
    tr = null,
    vt = !1,
    Pr = null,
    sn = !1,
    yc = Error(s(519));
  function wi(e) {
    var t = Error(s(418, ''));
    throw ($a(Ir(t, e)), yc);
  }
  function kh(e) {
    var t = e.stateNode,
      r = e.type,
      i = e.memoizedProps;
    switch (((t[ft] = e), (t[ir] = i), r)) {
      case 'dialog':
        mt('cancel', t), mt('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        mt('load', t);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < yu.length; r++) mt(yu[r], t);
        break;
      case 'source':
        mt('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        mt('error', t), mt('load', t);
        break;
      case 'details':
        mt('toggle', t);
        break;
      case 'input':
        mt('invalid', t), Jo(t, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0), tl(t);
        break;
      case 'select':
        mt('invalid', t);
        break;
      case 'textarea':
        mt('invalid', t), Po(t, i.value, i.defaultValue, i.children), tl(t);
    }
    (r = i.children),
      (typeof r != 'string' && typeof r != 'number' && typeof r != 'bigint') ||
      t.textContent === '' + r ||
      i.suppressHydrationWarning === !0 ||
      Y0(t.textContent, r)
        ? (i.popover != null && (mt('beforetoggle', t), mt('toggle', t)),
          i.onScroll != null && mt('scroll', t),
          i.onScrollEnd != null && mt('scrollend', t),
          i.onClick != null && (t.onclick = $l),
          (t = !0))
        : (t = !1),
      t || wi(e);
  }
  function qh(e) {
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
    if (!vt) return qh(e), (vt = !0), !1;
    var t = !1,
      r;
    if (
      ((r = e.tag !== 3 && e.tag !== 27) &&
        ((r = e.tag === 5) && ((r = e.type), (r = !(r !== 'form' && r !== 'button') || qf(e.type, e.memoizedProps))),
        (r = !r)),
      r && (t = !0),
      t && tr && wi(e),
      qh(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((r = e.data), r === '/$')) {
              if (t === 0) {
                tr = tn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          e = e.nextSibling;
        }
        tr = null;
      }
    } else tr = or ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ya() {
    (tr = or = null), (vt = !1);
  }
  function $a(e) {
    Pr === null ? (Pr = [e]) : Pr.push(e);
  }
  var Xa = Error(s(460)),
    zh = Error(s(474)),
    gc = { then: function () {} };
  function Ih(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function pl() {}
  function Lh(e, t, r) {
    switch (((r = e[r]), r === void 0 ? e.push(t) : r !== t && (t.then(pl, pl), (t = r)), t.status)) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), e === Xa ? Error(s(483)) : e);
      default:
        if (typeof t.status == 'string') t.then(pl, pl);
        else {
          if (((e = Tt), e !== null && 100 < e.shellSuspendCounter)) throw Error(s(482));
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
  function Hh() {
    if (Za === null) throw Error(s(459));
    var e = Za;
    return (Za = null), e;
  }
  var la = null,
    Qa = 0;
  function yl(e) {
    var t = Qa;
    return (Qa += 1), la === null && (la = []), Lh(la, e, t);
  }
  function Ka(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function gl(e, t) {
    throw t.$$typeof === m
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
  }
  function Gh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Fh(e) {
    function t(oe, ae) {
      if (e) {
        var he = oe.deletions;
        he === null ? ((oe.deletions = [ae]), (oe.flags |= 16)) : he.push(ae);
      }
    }
    function r(oe, ae) {
      if (!e) return null;
      for (; ae !== null; ) t(oe, ae), (ae = ae.sibling);
      return null;
    }
    function i(oe) {
      for (var ae = new Map(); oe !== null; )
        oe.key !== null ? ae.set(oe.key, oe) : ae.set(oe.index, oe), (oe = oe.sibling);
      return ae;
    }
    function l(oe, ae) {
      return (oe = ri(oe, ae)), (oe.index = 0), (oe.sibling = null), oe;
    }
    function f(oe, ae, he) {
      return (
        (oe.index = he),
        e
          ? ((he = oe.alternate),
            he !== null ? ((he = he.index), he < ae ? ((oe.flags |= 33554434), ae) : he) : ((oe.flags |= 33554434), ae))
          : ((oe.flags |= 1048576), ae)
      );
    }
    function g(oe) {
      return e && oe.alternate === null && (oe.flags |= 33554434), oe;
    }
    function U(oe, ae, he, Ae) {
      return ae === null || ae.tag !== 6
        ? ((ae = hf(he, oe.mode, Ae)), (ae.return = oe), ae)
        : ((ae = l(ae, he)), (ae.return = oe), ae);
    }
    function $(oe, ae, he, Ae) {
      var Xe = he.type;
      return Xe === S
        ? xe(oe, ae, he.props.children, Ae, he.key)
        : ae !== null &&
            (ae.elementType === Xe || (typeof Xe == 'object' && Xe !== null && Xe.$$typeof === Q && Gh(Xe) === ae.type))
          ? ((ae = l(ae, he.props)), Ka(ae, he), (ae.return = oe), ae)
          : ((ae = Cl(he.type, he.key, he.props, null, oe.mode, Ae)), Ka(ae, he), (ae.return = oe), ae);
    }
    function le(oe, ae, he, Ae) {
      return ae === null ||
        ae.tag !== 4 ||
        ae.stateNode.containerInfo !== he.containerInfo ||
        ae.stateNode.implementation !== he.implementation
        ? ((ae = df(he, oe.mode, Ae)), (ae.return = oe), ae)
        : ((ae = l(ae, he.children || [])), (ae.return = oe), ae);
    }
    function xe(oe, ae, he, Ae, Xe) {
      return ae === null || ae.tag !== 7
        ? ((ae = ji(he, oe.mode, Ae, Xe)), (ae.return = oe), ae)
        : ((ae = l(ae, he)), (ae.return = oe), ae);
    }
    function Te(oe, ae, he) {
      if ((typeof ae == 'string' && ae !== '') || typeof ae == 'number' || typeof ae == 'bigint')
        return (ae = hf('' + ae, oe.mode, he)), (ae.return = oe), ae;
      if (typeof ae == 'object' && ae !== null) {
        switch (ae.$$typeof) {
          case o:
            return (he = Cl(ae.type, ae.key, ae.props, null, oe.mode, he)), Ka(he, ae), (he.return = oe), he;
          case h:
            return (ae = df(ae, oe.mode, he)), (ae.return = oe), ae;
          case Q:
            var Ae = ae._init;
            return (ae = Ae(ae._payload)), Te(oe, ae, he);
        }
        if (me(ae) || we(ae)) return (ae = ji(ae, oe.mode, he, null)), (ae.return = oe), ae;
        if (typeof ae.then == 'function') return Te(oe, yl(ae), he);
        if (ae.$$typeof === O) return Te(oe, Rl(oe, ae), he);
        gl(oe, ae);
      }
      return null;
    }
    function ye(oe, ae, he, Ae) {
      var Xe = ae !== null ? ae.key : null;
      if ((typeof he == 'string' && he !== '') || typeof he == 'number' || typeof he == 'bigint')
        return Xe !== null ? null : U(oe, ae, '' + he, Ae);
      if (typeof he == 'object' && he !== null) {
        switch (he.$$typeof) {
          case o:
            return he.key === Xe ? $(oe, ae, he, Ae) : null;
          case h:
            return he.key === Xe ? le(oe, ae, he, Ae) : null;
          case Q:
            return (Xe = he._init), (he = Xe(he._payload)), ye(oe, ae, he, Ae);
        }
        if (me(he) || we(he)) return Xe !== null ? null : xe(oe, ae, he, Ae, null);
        if (typeof he.then == 'function') return ye(oe, ae, yl(he), Ae);
        if (he.$$typeof === O) return ye(oe, ae, Rl(oe, he), Ae);
        gl(oe, he);
      }
      return null;
    }
    function Se(oe, ae, he, Ae, Xe) {
      if ((typeof Ae == 'string' && Ae !== '') || typeof Ae == 'number' || typeof Ae == 'bigint')
        return (oe = oe.get(he) || null), U(ae, oe, '' + Ae, Xe);
      if (typeof Ae == 'object' && Ae !== null) {
        switch (Ae.$$typeof) {
          case o:
            return (oe = oe.get(Ae.key === null ? he : Ae.key) || null), $(ae, oe, Ae, Xe);
          case h:
            return (oe = oe.get(Ae.key === null ? he : Ae.key) || null), le(ae, oe, Ae, Xe);
          case Q:
            var ct = Ae._init;
            return (Ae = ct(Ae._payload)), Se(oe, ae, he, Ae, Xe);
        }
        if (me(Ae) || we(Ae)) return (oe = oe.get(he) || null), xe(ae, oe, Ae, Xe, null);
        if (typeof Ae.then == 'function') return Se(oe, ae, he, yl(Ae), Xe);
        if (Ae.$$typeof === O) return Se(oe, ae, he, Rl(ae, Ae), Xe);
        gl(ae, Ae);
      }
      return null;
    }
    function Ze(oe, ae, he, Ae) {
      for (var Xe = null, ct = null, Qe = ae, et = (ae = 0), er = null; Qe !== null && et < he.length; et++) {
        Qe.index > et ? ((er = Qe), (Qe = null)) : (er = Qe.sibling);
        var bt = ye(oe, Qe, he[et], Ae);
        if (bt === null) {
          Qe === null && (Qe = er);
          break;
        }
        e && Qe && bt.alternate === null && t(oe, Qe),
          (ae = f(bt, ae, et)),
          ct === null ? (Xe = bt) : (ct.sibling = bt),
          (ct = bt),
          (Qe = er);
      }
      if (et === he.length) return r(oe, Qe), vt && _i(oe, et), Xe;
      if (Qe === null) {
        for (; et < he.length; et++)
          (Qe = Te(oe, he[et], Ae)),
            Qe !== null && ((ae = f(Qe, ae, et)), ct === null ? (Xe = Qe) : (ct.sibling = Qe), (ct = Qe));
        return vt && _i(oe, et), Xe;
      }
      for (Qe = i(Qe); et < he.length; et++)
        (er = Se(Qe, oe, et, he[et], Ae)),
          er !== null &&
            (e && er.alternate !== null && Qe.delete(er.key === null ? et : er.key),
            (ae = f(er, ae, et)),
            ct === null ? (Xe = er) : (ct.sibling = er),
            (ct = er));
      return (
        e &&
          Qe.forEach(function (ci) {
            return t(oe, ci);
          }),
        vt && _i(oe, et),
        Xe
      );
    }
    function rt(oe, ae, he, Ae) {
      if (he == null) throw Error(s(151));
      for (
        var Xe = null, ct = null, Qe = ae, et = (ae = 0), er = null, bt = he.next();
        Qe !== null && !bt.done;
        et++, bt = he.next()
      ) {
        Qe.index > et ? ((er = Qe), (Qe = null)) : (er = Qe.sibling);
        var ci = ye(oe, Qe, bt.value, Ae);
        if (ci === null) {
          Qe === null && (Qe = er);
          break;
        }
        e && Qe && ci.alternate === null && t(oe, Qe),
          (ae = f(ci, ae, et)),
          ct === null ? (Xe = ci) : (ct.sibling = ci),
          (ct = ci),
          (Qe = er);
      }
      if (bt.done) return r(oe, Qe), vt && _i(oe, et), Xe;
      if (Qe === null) {
        for (; !bt.done; et++, bt = he.next())
          (bt = Te(oe, bt.value, Ae)),
            bt !== null && ((ae = f(bt, ae, et)), ct === null ? (Xe = bt) : (ct.sibling = bt), (ct = bt));
        return vt && _i(oe, et), Xe;
      }
      for (Qe = i(Qe); !bt.done; et++, bt = he.next())
        (bt = Se(Qe, oe, et, bt.value, Ae)),
          bt !== null &&
            (e && bt.alternate !== null && Qe.delete(bt.key === null ? et : bt.key),
            (ae = f(bt, ae, et)),
            ct === null ? (Xe = bt) : (ct.sibling = bt),
            (ct = bt));
      return (
        e &&
          Qe.forEach(function (L1) {
            return t(oe, L1);
          }),
        vt && _i(oe, et),
        Xe
      );
    }
    function zt(oe, ae, he, Ae) {
      if (
        (typeof he == 'object' && he !== null && he.type === S && he.key === null && (he = he.props.children),
        typeof he == 'object' && he !== null)
      ) {
        switch (he.$$typeof) {
          case o:
            e: {
              for (var Xe = he.key; ae !== null; ) {
                if (ae.key === Xe) {
                  if (((Xe = he.type), Xe === S)) {
                    if (ae.tag === 7) {
                      r(oe, ae.sibling), (Ae = l(ae, he.props.children)), (Ae.return = oe), (oe = Ae);
                      break e;
                    }
                  } else if (
                    ae.elementType === Xe ||
                    (typeof Xe == 'object' && Xe !== null && Xe.$$typeof === Q && Gh(Xe) === ae.type)
                  ) {
                    r(oe, ae.sibling), (Ae = l(ae, he.props)), Ka(Ae, he), (Ae.return = oe), (oe = Ae);
                    break e;
                  }
                  r(oe, ae);
                  break;
                } else t(oe, ae);
                ae = ae.sibling;
              }
              he.type === S
                ? ((Ae = ji(he.props.children, oe.mode, Ae, he.key)), (Ae.return = oe), (oe = Ae))
                : ((Ae = Cl(he.type, he.key, he.props, null, oe.mode, Ae)), Ka(Ae, he), (Ae.return = oe), (oe = Ae));
            }
            return g(oe);
          case h:
            e: {
              for (Xe = he.key; ae !== null; ) {
                if (ae.key === Xe)
                  if (
                    ae.tag === 4 &&
                    ae.stateNode.containerInfo === he.containerInfo &&
                    ae.stateNode.implementation === he.implementation
                  ) {
                    r(oe, ae.sibling), (Ae = l(ae, he.children || [])), (Ae.return = oe), (oe = Ae);
                    break e;
                  } else {
                    r(oe, ae);
                    break;
                  }
                else t(oe, ae);
                ae = ae.sibling;
              }
              (Ae = df(he, oe.mode, Ae)), (Ae.return = oe), (oe = Ae);
            }
            return g(oe);
          case Q:
            return (Xe = he._init), (he = Xe(he._payload)), zt(oe, ae, he, Ae);
        }
        if (me(he)) return Ze(oe, ae, he, Ae);
        if (we(he)) {
          if (((Xe = we(he)), typeof Xe != 'function')) throw Error(s(150));
          return (he = Xe.call(he)), rt(oe, ae, he, Ae);
        }
        if (typeof he.then == 'function') return zt(oe, ae, yl(he), Ae);
        if (he.$$typeof === O) return zt(oe, ae, Rl(oe, he), Ae);
        gl(oe, he);
      }
      return (typeof he == 'string' && he !== '') || typeof he == 'number' || typeof he == 'bigint'
        ? ((he = '' + he),
          ae !== null && ae.tag === 6
            ? (r(oe, ae.sibling), (Ae = l(ae, he)), (Ae.return = oe), (oe = Ae))
            : (r(oe, ae), (Ae = hf(he, oe.mode, Ae)), (Ae.return = oe), (oe = Ae)),
          g(oe))
        : r(oe, ae);
    }
    return function (oe, ae, he, Ae) {
      try {
        Qa = 0;
        var Xe = zt(oe, ae, he, Ae);
        return (la = null), Xe;
      } catch (Qe) {
        if (Qe === Xa) throw Qe;
        var ct = Yr(29, Qe, null, oe.mode);
        return (ct.lanes = Ae), (ct.return = oe), ct;
      } finally {
      }
    };
  }
  var Ai = Fh(!0),
    Vh = Fh(!1),
    sa = Oe(null),
    vl = Oe(0);
  function Yh(e, t) {
    (e = Un), M(vl, e), M(sa, t), (Un = e | t.baseLanes);
  }
  function vc() {
    M(vl, Un), M(sa, sa.current);
  }
  function bc() {
    (Un = vl.current), Re(sa), Re(vl);
  }
  var Gr = Oe(null),
    cn = null;
  function Yn(e) {
    var t = e.alternate;
    M(Xt, Xt.current & 1),
      M(Gr, e),
      cn === null && (t === null || sa.current !== null || t.memoizedState !== null) && (cn = e);
  }
  function $h(e) {
    if (e.tag === 22) {
      if ((M(Xt, Xt.current), M(Gr, e), cn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (cn = e);
      }
    } else $n();
  }
  function $n() {
    M(Xt, Xt.current), M(Gr, Gr.current);
  }
  function xn(e) {
    Re(Gr), cn === e && (cn = null), Re(Xt);
  }
  var Xt = Oe(0);
  function bl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
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
  var Og =
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
    Tg = n.unstable_scheduleCallback,
    Mg = n.unstable_NormalPriority,
    Zt = { $$typeof: O, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Sc() {
    return { controller: new Og(), data: new Map(), refCount: 0 };
  }
  function Ja(e) {
    e.refCount--,
      e.refCount === 0 &&
        Tg(Mg, function () {
          e.controller.abort();
        });
  }
  var Wa = null,
    xc = 0,
    ca = 0,
    fa = null;
  function Bg(e, t) {
    if (Wa === null) {
      var r = (Wa = []);
      (xc = 0),
        (ca = Tf()),
        (fa = {
          status: 'pending',
          value: void 0,
          then: function (i) {
            r.push(i);
          }
        });
    }
    return xc++, t.then(Xh, Xh), t;
  }
  function Xh() {
    if (--xc === 0 && Wa !== null) {
      fa !== null && (fa.status = 'fulfilled');
      var e = Wa;
      (Wa = null), (ca = 0), (fa = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ug(e, t) {
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
  var Zh = E.S;
  E.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && Bg(e, t), Zh !== null && Zh(e, t);
  };
  var Ni = Oe(null);
  function Ec() {
    var e = Ni.current;
    return e !== null ? e : Tt.pooledCache;
  }
  function Sl(e, t) {
    t === null ? M(Ni, Ni.current) : M(Ni, t.pool);
  }
  function Qh() {
    var e = Ec();
    return e === null ? null : { parent: Zt._currentValue, pool: e };
  }
  var Xn = 0,
    lt = null,
    Et = null,
    Ft = null,
    xl = !1,
    oa = !1,
    Oi = !1,
    El = 0,
    Pa = 0,
    ha = null,
    Rg = 0;
  function It() {
    throw Error(s(321));
  }
  function _c(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!wr(e[r], t[r])) return !1;
    return !0;
  }
  function wc(e, t, r, i, l, f) {
    return (
      (Xn = f),
      (lt = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (E.H = e === null || e.memoizedState === null ? Ti : Zn),
      (Oi = !1),
      (f = r(i, l)),
      (Oi = !1),
      oa && (f = Jh(t, r, i, l)),
      Kh(e),
      f
    );
  }
  function Kh(e) {
    E.H = fn;
    var t = Et !== null && Et.next !== null;
    if (((Xn = 0), (Ft = Et = lt = null), (xl = !1), (Pa = 0), (ha = null), t)) throw Error(s(300));
    e === null || Wt || ((e = e.dependencies), e !== null && Ul(e) && (Wt = !0));
  }
  function Jh(e, t, r, i) {
    lt = e;
    var l = 0;
    do {
      if ((oa && (ha = null), (Pa = 0), (oa = !1), 25 <= l)) throw Error(s(301));
      if (((l += 1), (Ft = Et = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null), (f.events = null), (f.stores = null), f.memoCache != null && (f.memoCache.index = 0);
      }
      (E.H = Mi), (f = t(r, i));
    } while (oa);
    return f;
  }
  function Dg() {
    var e = E.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? eu(t) : t),
      (e = e.useState()[0]),
      (Et !== null ? Et.memoizedState : null) !== e && (lt.flags |= 1024),
      t
    );
  }
  function Ac() {
    var e = El !== 0;
    return (El = 0), e;
  }
  function Nc(e, t, r) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r);
  }
  function Oc(e) {
    if (xl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      xl = !1;
    }
    (Xn = 0), (Ft = Et = lt = null), (oa = !1), (Pa = El = 0), (ha = null);
  }
  function yr() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ft === null ? (lt.memoizedState = Ft = e) : (Ft = Ft.next = e), Ft;
  }
  function Vt() {
    if (Et === null) {
      var e = lt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Et.next;
    var t = Ft === null ? lt.memoizedState : Ft.next;
    if (t !== null) (Ft = t), (Et = e);
    else {
      if (e === null) throw lt.alternate === null ? Error(s(467)) : Error(s(310));
      (Et = e),
        (e = {
          memoizedState: Et.memoizedState,
          baseState: Et.baseState,
          baseQueue: Et.baseQueue,
          queue: Et.queue,
          next: null
        }),
        Ft === null ? (lt.memoizedState = Ft = e) : (Ft = Ft.next = e);
    }
    return Ft;
  }
  var _l;
  _l = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function eu(e) {
    var t = Pa;
    return (
      (Pa += 1),
      ha === null && (ha = []),
      (e = Lh(ha, e, t)),
      (t = lt),
      (Ft === null ? t.memoizedState : Ft.next) === null &&
        ((t = t.alternate), (E.H = t === null || t.memoizedState === null ? Ti : Zn)),
      e
    );
  }
  function wl(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return eu(e);
      if (e.$$typeof === O) return ar(e);
    }
    throw Error(s(438, String(e)));
  }
  function Tc(e) {
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
      r === null && ((r = _l()), (lt.updateQueue = r)),
      (r.memoCache = t),
      (r = t.data[t.index]),
      r === void 0)
    )
      for (r = t.data[t.index] = Array(e), i = 0; i < e; i++) r[i] = We;
    return t.index++, r;
  }
  function En(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Al(e) {
    var t = Vt();
    return Mc(t, Et, e);
  }
  function Mc(e, t, r) {
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
      var U = (g = null),
        $ = null,
        le = t,
        xe = !1;
      do {
        var Te = le.lane & -536870913;
        if (Te !== le.lane ? (pt & Te) === Te : (Xn & Te) === Te) {
          var ye = le.revertLane;
          if (ye === 0)
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
              Te === ca && (xe = !0);
          else if ((Xn & ye) === ye) {
            (le = le.next), ye === ca && (xe = !0);
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
              $ === null ? ((U = $ = Te), (g = f)) : ($ = $.next = Te),
              (lt.lanes |= ye),
              (ni |= ye);
          (Te = le.action), Oi && r(f, Te), (f = le.hasEagerState ? le.eagerState : r(f, Te));
        } else
          (ye = {
            lane: Te,
            revertLane: le.revertLane,
            action: le.action,
            hasEagerState: le.hasEagerState,
            eagerState: le.eagerState,
            next: null
          }),
            $ === null ? ((U = $ = ye), (g = f)) : ($ = $.next = ye),
            (lt.lanes |= Te),
            (ni |= Te);
        le = le.next;
      } while (le !== null && le !== t);
      if (($ === null ? (g = f) : ($.next = U), !wr(f, e.memoizedState) && ((Wt = !0), xe && ((r = fa), r !== null))))
        throw r;
      (e.memoizedState = f), (e.baseState = g), (e.baseQueue = $), (i.lastRenderedState = f);
    }
    return l === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function Bc(e) {
    var t = Vt(),
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
      wr(f, t.memoizedState) || (Wt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f);
    }
    return [f, i];
  }
  function Wh(e, t, r) {
    var i = lt,
      l = Vt(),
      f = vt;
    if (f) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else r = t();
    var g = !wr((Et || l).memoizedState, r);
    if (
      (g && ((l.memoizedState = r), (Wt = !0)),
      (l = l.queue),
      Dc(td.bind(null, i, l, e), [e]),
      l.getSnapshot !== t || g || (Ft !== null && Ft.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), da(9, ed.bind(null, i, l, r, t), { destroy: void 0 }, null), Tt === null))
        throw Error(s(349));
      f || (Xn & 60) !== 0 || Ph(i, t, r);
    }
    return r;
  }
  function Ph(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = lt.updateQueue),
      t === null
        ? ((t = _l()), (lt.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function ed(e, t, r, i) {
    (t.value = r), (t.getSnapshot = i), rd(t) && nd(e);
  }
  function td(e, t, r) {
    return r(function () {
      rd(t) && nd(e);
    });
  }
  function rd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !wr(e, r);
    } catch {
      return !0;
    }
  }
  function nd(e) {
    var t = Vn(e, 2);
    t !== null && hr(t, e, 2);
  }
  function Uc(e) {
    var t = yr();
    if (typeof e == 'function') {
      var r = e;
      if (((e = r()), Oi)) {
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
      (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: En, lastRenderedState: e }),
      t
    );
  }
  function id(e, t, r, i) {
    return (e.baseState = r), Mc(e, Et, typeof i == 'function' ? i : En);
  }
  function jg(e, t, r, i, l) {
    if (Tl(e)) throw Error(s(485));
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
      E.T !== null ? r(!0) : (f.isTransition = !1),
        i(f),
        (r = t.pending),
        r === null ? ((f.next = t.pending = f), ad(t, f)) : ((f.next = r.next), (t.pending = r.next = f));
    }
  }
  function ad(e, t) {
    var r = t.action,
      i = t.payload,
      l = e.state;
    if (t.isTransition) {
      var f = E.T,
        g = {};
      E.T = g;
      try {
        var U = r(l, i),
          $ = E.S;
        $ !== null && $(g, U), ud(e, t, U);
      } catch (le) {
        Rc(e, t, le);
      } finally {
        E.T = f;
      }
    } else
      try {
        (f = r(l, i)), ud(e, t, f);
      } catch (le) {
        Rc(e, t, le);
      }
  }
  function ud(e, t, r) {
    r !== null && typeof r == 'object' && typeof r.then == 'function'
      ? r.then(
          function (i) {
            ld(e, t, i);
          },
          function (i) {
            return Rc(e, t, i);
          }
        )
      : ld(e, t, r);
  }
  function ld(e, t, r) {
    (t.status = 'fulfilled'),
      (t.value = r),
      sd(t),
      (e.state = r),
      (t = e.pending),
      t !== null && ((r = t.next), r === t ? (e.pending = null) : ((r = r.next), (t.next = r), ad(e, r)));
  }
  function Rc(e, t, r) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do (t.status = 'rejected'), (t.reason = r), sd(t), (t = t.next);
      while (t !== i);
    }
    e.action = null;
  }
  function sd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function cd(e, t) {
    return t;
  }
  function fd(e, t) {
    if (vt) {
      var r = Tt.formState;
      if (r !== null) {
        e: {
          var i = lt;
          if (vt) {
            if (tr) {
              t: {
                for (var l = tr, f = sn; l.nodeType !== 8; ) {
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
                (tr = tn(l.nextSibling)), (i = l.data === 'F!');
                break e;
              }
            }
            wi(i);
          }
          i = !1;
        }
        i && (t = r[0]);
      }
    }
    return (
      (r = yr()),
      (r.memoizedState = r.baseState = t),
      (i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: cd, lastRenderedState: t }),
      (r.queue = i),
      (r = Td.bind(null, lt, i)),
      (i.dispatch = r),
      (i = Uc(!1)),
      (f = zc.bind(null, lt, !1, i.queue)),
      (i = yr()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = l),
      (r = jg.bind(null, lt, l, f, r)),
      (l.dispatch = r),
      (i.memoizedState = e),
      [t, r, !1]
    );
  }
  function od(e) {
    var t = Vt();
    return hd(t, Et, e);
  }
  function hd(e, t, r) {
    (t = Mc(e, t, cd)[0]),
      (e = Al(En)[0]),
      (t = typeof t == 'object' && t !== null && typeof t.then == 'function' ? eu(t) : t);
    var i = Vt(),
      l = i.queue,
      f = l.dispatch;
    return (
      r !== i.memoizedState && ((lt.flags |= 2048), da(9, Cg.bind(null, l, r), { destroy: void 0 }, null)), [t, f, e]
    );
  }
  function Cg(e, t) {
    e.action = t;
  }
  function dd(e) {
    var t = Vt(),
      r = Et;
    if (r !== null) return hd(t, r, e);
    Vt(), (t = t.memoizedState), (r = Vt());
    var i = r.queue.dispatch;
    return (r.memoizedState = e), [t, i, !1];
  }
  function da(e, t, r, i) {
    return (
      (e = { tag: e, create: t, inst: r, deps: i, next: null }),
      (t = lt.updateQueue),
      t === null && ((t = _l()), (lt.updateQueue = t)),
      (r = t.lastEffect),
      r === null ? (t.lastEffect = e.next = e) : ((i = r.next), (r.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function md() {
    return Vt().memoizedState;
  }
  function Nl(e, t, r, i) {
    var l = yr();
    (lt.flags |= e), (l.memoizedState = da(1 | t, r, { destroy: void 0 }, i === void 0 ? null : i));
  }
  function Ol(e, t, r, i) {
    var l = Vt();
    i = i === void 0 ? null : i;
    var f = l.memoizedState.inst;
    Et !== null && i !== null && _c(i, Et.memoizedState.deps)
      ? (l.memoizedState = da(t, r, f, i))
      : ((lt.flags |= e), (l.memoizedState = da(1 | t, r, f, i)));
  }
  function pd(e, t) {
    Nl(8390656, 8, e, t);
  }
  function Dc(e, t) {
    Ol(2048, 8, e, t);
  }
  function yd(e, t) {
    return Ol(4, 2, e, t);
  }
  function gd(e, t) {
    return Ol(4, 4, e, t);
  }
  function vd(e, t) {
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
  function bd(e, t, r) {
    (r = r != null ? r.concat([e]) : null), Ol(4, 4, vd.bind(null, t, e), r);
  }
  function jc() {}
  function Sd(e, t) {
    var r = Vt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return t !== null && _c(t, i[1]) ? i[0] : ((r.memoizedState = [e, t]), e);
  }
  function xd(e, t) {
    var r = Vt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    if (t !== null && _c(t, i[1])) return i[0];
    if (((i = e()), Oi)) {
      Be(!0);
      try {
        e();
      } finally {
        Be(!1);
      }
    }
    return (r.memoizedState = [i, t]), i;
  }
  function Cc(e, t, r) {
    return r === void 0 || (Xn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = r), (e = _0()), (lt.lanes |= e), (ni |= e), r);
  }
  function Ed(e, t, r, i) {
    return wr(r, t)
      ? r
      : sa.current !== null
        ? ((e = Cc(e, r, i)), wr(e, t) || (Wt = !0), e)
        : (Xn & 42) === 0
          ? ((Wt = !0), (e.memoizedState = r))
          : ((e = _0()), (lt.lanes |= e), (ni |= e), t);
  }
  function _d(e, t, r, i, l) {
    var f = A.p;
    A.p = f !== 0 && 8 > f ? f : 8;
    var g = E.T,
      U = {};
    (E.T = U), zc(e, !1, t, r);
    try {
      var $ = l(),
        le = E.S;
      if ((le !== null && le(U, $), $ !== null && typeof $ == 'object' && typeof $.then == 'function')) {
        var xe = Ug($, i);
        tu(e, t, xe, Tr(e));
      } else tu(e, t, i, Tr(e));
    } catch (Te) {
      tu(e, t, { then: function () {}, status: 'rejected', reason: Te }, Tr());
    } finally {
      (A.p = f), (E.T = g);
    }
  }
  function kg() {}
  function kc(e, t, r, i) {
    if (e.tag !== 5) throw Error(s(476));
    var l = wd(e).queue;
    _d(
      e,
      l,
      t,
      Ue,
      r === null
        ? kg
        : function () {
            return Ad(e), r(i);
          }
    );
  }
  function wd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Ue,
      baseState: Ue,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: En, lastRenderedState: Ue },
      next: null
    };
    var r = {};
    return (
      (t.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: En, lastRenderedState: r },
        next: null
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Ad(e) {
    var t = wd(e).next.queue;
    tu(e, t, {}, Tr());
  }
  function qc() {
    return ar(xu);
  }
  function Nd() {
    return Vt().memoizedState;
  }
  function Od() {
    return Vt().memoizedState;
  }
  function qg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = Tr();
          e = Jn(r);
          var i = Wn(t, e, r);
          i !== null && (hr(i, t, r), iu(i, t, r)), (t = { cache: Sc() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function zg(e, t, r) {
    var i = Tr();
    (r = { lane: i, revertLane: 0, action: r, hasEagerState: !1, eagerState: null, next: null }),
      Tl(e) ? Md(t, r) : ((r = dc(e, t, r, i)), r !== null && (hr(r, e, i), Bd(r, t, i)));
  }
  function Td(e, t, r) {
    var i = Tr();
    tu(e, t, r, i);
  }
  function tu(e, t, r, i) {
    var l = { lane: i, revertLane: 0, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Tl(e)) Md(t, l);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && ((f = t.lastRenderedReducer), f !== null))
        try {
          var g = t.lastRenderedState,
            U = f(g, r);
          if (((l.hasEagerState = !0), (l.eagerState = U), wr(U, g))) return ol(e, t, l, 0), Tt === null && fl(), !1;
        } catch {
        } finally {
        }
      if (((r = dc(e, t, l, i)), r !== null)) return hr(r, e, i), Bd(r, t, i), !0;
    }
    return !1;
  }
  function zc(e, t, r, i) {
    if (((i = { lane: 2, revertLane: Tf(), action: i, hasEagerState: !1, eagerState: null, next: null }), Tl(e))) {
      if (t) throw Error(s(479));
    } else (t = dc(e, r, i, 2)), t !== null && hr(t, e, 2);
  }
  function Tl(e) {
    var t = e.alternate;
    return e === lt || (t !== null && t === lt);
  }
  function Md(e, t) {
    oa = xl = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
  }
  function Bd(e, t, r) {
    if ((r & 4194176) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), Fs(e, r);
    }
  }
  var fn = {
    readContext: ar,
    use: wl,
    useCallback: It,
    useContext: It,
    useEffect: It,
    useImperativeHandle: It,
    useLayoutEffect: It,
    useInsertionEffect: It,
    useMemo: It,
    useReducer: It,
    useRef: It,
    useState: It,
    useDebugValue: It,
    useDeferredValue: It,
    useTransition: It,
    useSyncExternalStore: It,
    useId: It
  };
  (fn.useCacheRefresh = It),
    (fn.useMemoCache = It),
    (fn.useHostTransitionStatus = It),
    (fn.useFormState = It),
    (fn.useActionState = It),
    (fn.useOptimistic = It);
  var Ti = {
    readContext: ar,
    use: wl,
    useCallback: function (e, t) {
      return (yr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ar,
    useEffect: pd,
    useImperativeHandle: function (e, t, r) {
      (r = r != null ? r.concat([e]) : null), Nl(4194308, 4, vd.bind(null, t, e), r);
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = yr();
      t = t === void 0 ? null : t;
      var i = e();
      if (Oi) {
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
        if (Oi) {
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
        (e = e.dispatch = zg.bind(null, lt, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Uc(e);
      var t = e.queue,
        r = Td.bind(null, lt, t);
      return (t.dispatch = r), [e.memoizedState, r];
    },
    useDebugValue: jc,
    useDeferredValue: function (e, t) {
      var r = yr();
      return Cc(r, e, t);
    },
    useTransition: function () {
      var e = Uc(!1);
      return (e = _d.bind(null, lt, e.queue, !0, !1)), (yr().memoizedState = e), [!1, e];
    },
    useSyncExternalStore: function (e, t, r) {
      var i = lt,
        l = yr();
      if (vt) {
        if (r === void 0) throw Error(s(407));
        r = r();
      } else {
        if (((r = t()), Tt === null)) throw Error(s(349));
        (pt & 60) !== 0 || Ph(i, t, r);
      }
      l.memoizedState = r;
      var f = { value: r, getSnapshot: t };
      return (
        (l.queue = f),
        pd(td.bind(null, i, f, e), [e]),
        (i.flags |= 2048),
        da(9, ed.bind(null, i, f, r, t), { destroy: void 0 }, null),
        r
      );
    },
    useId: function () {
      var e = yr(),
        t = Tt.identifierPrefix;
      if (vt) {
        var r = Sn,
          i = bn;
        (r = (i & ~(1 << (32 - Ce(i) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = El++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':');
      } else (r = Rg++), (t = ':' + t + 'r' + r.toString(32) + ':');
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (yr().memoizedState = qg.bind(null, lt));
    }
  };
  (Ti.useMemoCache = Tc),
    (Ti.useHostTransitionStatus = qc),
    (Ti.useFormState = fd),
    (Ti.useActionState = fd),
    (Ti.useOptimistic = function (e) {
      var t = yr();
      t.memoizedState = t.baseState = e;
      var r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return (t.queue = r), (t = zc.bind(null, lt, !0, r)), (r.dispatch = t), [e, t];
    });
  var Zn = {
    readContext: ar,
    use: wl,
    useCallback: Sd,
    useContext: ar,
    useEffect: Dc,
    useImperativeHandle: bd,
    useInsertionEffect: yd,
    useLayoutEffect: gd,
    useMemo: xd,
    useReducer: Al,
    useRef: md,
    useState: function () {
      return Al(En);
    },
    useDebugValue: jc,
    useDeferredValue: function (e, t) {
      var r = Vt();
      return Ed(r, Et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Al(En)[0],
        t = Vt().memoizedState;
      return [typeof e == 'boolean' ? e : eu(e), t];
    },
    useSyncExternalStore: Wh,
    useId: Nd
  };
  (Zn.useCacheRefresh = Od),
    (Zn.useMemoCache = Tc),
    (Zn.useHostTransitionStatus = qc),
    (Zn.useFormState = od),
    (Zn.useActionState = od),
    (Zn.useOptimistic = function (e, t) {
      var r = Vt();
      return id(r, Et, e, t);
    });
  var Mi = {
    readContext: ar,
    use: wl,
    useCallback: Sd,
    useContext: ar,
    useEffect: Dc,
    useImperativeHandle: bd,
    useInsertionEffect: yd,
    useLayoutEffect: gd,
    useMemo: xd,
    useReducer: Bc,
    useRef: md,
    useState: function () {
      return Bc(En);
    },
    useDebugValue: jc,
    useDeferredValue: function (e, t) {
      var r = Vt();
      return Et === null ? Cc(r, e, t) : Ed(r, Et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Bc(En)[0],
        t = Vt().memoizedState;
      return [typeof e == 'boolean' ? e : eu(e), t];
    },
    useSyncExternalStore: Wh,
    useId: Nd
  };
  (Mi.useCacheRefresh = Od),
    (Mi.useMemoCache = Tc),
    (Mi.useHostTransitionStatus = qc),
    (Mi.useFormState = dd),
    (Mi.useActionState = dd),
    (Mi.useOptimistic = function (e, t) {
      var r = Vt();
      return Et !== null ? id(r, Et, e, t) : ((r.baseState = e), [e, r.queue.dispatch]);
    });
  function Ic(e, t, r, i) {
    (t = e.memoizedState),
      (r = r(i, t)),
      (r = r == null ? t : w({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Lc = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? I(e) === e : !1;
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
  function Ud(e, t, r, i, l, f, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(i, f, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ga(r, i) || !Ga(l, f)
          : !0
    );
  }
  function Rd(e, t, r, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, i),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(r, i),
      t.state !== e && Lc.enqueueReplaceState(t, t.state, null);
  }
  function Bi(e, t) {
    var r = t;
    if ('ref' in t) {
      r = {};
      for (var i in t) i !== 'ref' && (r[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      r === t && (r = w({}, r));
      for (var l in e) r[l] === void 0 && (r[l] = e[l]);
    }
    return r;
  }
  var Ml =
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
  function Dd(e) {
    Ml(e);
  }
  function jd(e) {
    console.error(e);
  }
  function Cd(e) {
    Ml(e);
  }
  function Bl(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function kd(e, t, r) {
    try {
      var i = e.onCaughtError;
      i(r.value, { componentStack: r.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Hc(e, t, r) {
    return (
      (r = Jn(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        Bl(e, t);
      }),
      r
    );
  }
  function qd(e) {
    return (e = Jn(e)), (e.tag = 3), e;
  }
  function zd(e, t, r, i) {
    var l = r.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var f = i.value;
      (e.payload = function () {
        return l(f);
      }),
        (e.callback = function () {
          kd(t, r, i);
        });
    }
    var g = r.stateNode;
    g !== null &&
      typeof g.componentDidCatch == 'function' &&
      (e.callback = function () {
        kd(t, r, i), typeof l != 'function' && (ii === null ? (ii = new Set([this])) : ii.add(this));
        var U = i.stack;
        this.componentDidCatch(i.value, { componentStack: U !== null ? U : '' });
      });
  }
  function Ig(e, t, r, i, l) {
    if (((r.flags |= 32768), i !== null && typeof i == 'object' && typeof i.then == 'function')) {
      if (((t = r.alternate), t !== null && nu(t, r, l, !0), (r = Gr.current), r !== null)) {
        switch (r.tag) {
          case 13:
            return (
              cn === null ? _f() : r.alternate === null && qt === 0 && (qt = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = l),
              i === gc
                ? (r.flags |= 16384)
                : ((t = r.updateQueue), t === null ? (r.updateQueue = new Set([i])) : t.add(i), Af(e, i, l)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              i === gc
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([i]) }),
                      (r.updateQueue = t))
                    : ((r = t.retryQueue), r === null ? (t.retryQueue = new Set([i])) : r.add(i)),
                  Af(e, i, l)),
              !1
            );
        }
        throw Error(s(435, r.tag));
      }
      return Af(e, i, l), _f(), !1;
    }
    if (vt)
      return (
        (t = Gr.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            i !== yc && ((e = Error(s(422), { cause: i })), $a(Ir(e, r))))
          : (i !== yc && ((t = Error(s(423), { cause: i })), $a(Ir(t, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (i = Ir(i, r)),
            (l = Hc(e.stateNode, i, l)),
            rf(e, l),
            qt !== 4 && (qt = 2)),
        !1
      );
    var f = Error(s(520), { cause: i });
    if (((f = Ir(f, r)), hu === null ? (hu = [f]) : hu.push(f), qt !== 4 && (qt = 2), t === null)) return !0;
    (i = Ir(i, r)), (r = t);
    do {
      switch (r.tag) {
        case 3:
          return (r.flags |= 65536), (e = l & -l), (r.lanes |= e), (e = Hc(r.stateNode, i, e)), rf(r, e), !1;
        case 1:
          if (
            ((t = r.type),
            (f = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (f !== null && typeof f.componentDidCatch == 'function' && (ii === null || !ii.has(f)))))
          )
            return (r.flags |= 65536), (l &= -l), (r.lanes |= l), (l = qd(l)), zd(l, e, r, i), rf(r, l), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Id = Error(s(461)),
    Wt = !1;
  function rr(e, t, r, i) {
    t.child = e === null ? Vh(t, null, r, i) : Ai(t, e.child, r, i);
  }
  function Ld(e, t, r, i, l) {
    r = r.render;
    var f = t.ref;
    if ('ref' in i) {
      var g = {};
      for (var U in i) U !== 'ref' && (g[U] = i[U]);
    } else g = i;
    return (
      Ri(t),
      (i = wc(e, t, r, g, f, l)),
      (U = Ac()),
      e !== null && !Wt ? (Nc(e, t, l), _n(e, t, l)) : (vt && U && mc(t), (t.flags |= 1), rr(e, t, i, l), t.child)
    );
  }
  function Hd(e, t, r, i, l) {
    if (e === null) {
      var f = r.type;
      return typeof f == 'function' && !of(f) && f.defaultProps === void 0 && r.compare === null
        ? ((t.tag = 15), (t.type = f), Gd(e, t, f, i, l))
        : ((e = Cl(r.type, null, i, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), !Kc(e, l))) {
      var g = f.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Ga), r(g, i) && e.ref === t.ref)) return _n(e, t, l);
    }
    return (t.flags |= 1), (e = ri(f, i)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Gd(e, t, r, i, l) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ga(f, i) && e.ref === t.ref)
        if (((Wt = !1), (t.pendingProps = i = f), Kc(e, l))) (e.flags & 131072) !== 0 && (Wt = !0);
        else return (t.lanes = e.lanes), _n(e, t, l);
    }
    return Gc(e, t, r, i, l);
  }
  function Fd(e, t, r) {
    var i = t.pendingProps,
      l = i.children,
      f = (t.stateNode._pendingVisibility & 2) !== 0,
      g = e !== null ? e.memoizedState : null;
    if ((ru(e, t), i.mode === 'hidden' || f)) {
      if ((t.flags & 128) !== 0) {
        if (((i = g !== null ? g.baseLanes | r : r), e !== null)) {
          for (l = t.child = e.child, f = 0; l !== null; ) (f = f | l.lanes | l.childLanes), (l = l.sibling);
          t.childLanes = f & ~i;
        } else (t.childLanes = 0), (t.child = null);
        return Vd(e, t, i, r);
      }
      if ((r & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Sl(t, g !== null ? g.cachePool : null),
          g !== null ? Yh(t, g) : vc(),
          $h(t);
      else return (t.lanes = t.childLanes = 536870912), Vd(e, t, g !== null ? g.baseLanes | r : r, r);
    } else
      g !== null
        ? (Sl(t, g.cachePool), Yh(t, g), $n(), (t.memoizedState = null))
        : (e !== null && Sl(t, null), vc(), $n());
    return rr(e, t, l, r), t.child;
  }
  function Vd(e, t, r, i) {
    var l = Ec();
    return (
      (l = l === null ? null : { parent: Zt._currentValue, pool: l }),
      (t.memoizedState = { baseLanes: r, cachePool: l }),
      e !== null && Sl(t, null),
      vc(),
      $h(t),
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
  function Gc(e, t, r, i, l) {
    return (
      Ri(t),
      (r = wc(e, t, r, i, void 0, l)),
      (i = Ac()),
      e !== null && !Wt ? (Nc(e, t, l), _n(e, t, l)) : (vt && i && mc(t), (t.flags |= 1), rr(e, t, r, l), t.child)
    );
  }
  function Yd(e, t, r, i, l, f) {
    return (
      Ri(t),
      (t.updateQueue = null),
      (r = Jh(t, i, r, l)),
      Kh(e),
      (i = Ac()),
      e !== null && !Wt ? (Nc(e, t, f), _n(e, t, f)) : (vt && i && mc(t), (t.flags |= 1), rr(e, t, r, f), t.child)
    );
  }
  function $d(e, t, r, i, l) {
    if ((Ri(t), t.stateNode === null)) {
      var f = ia,
        g = r.contextType;
      typeof g == 'object' && g !== null && (f = ar(g)),
        (f = new r(i, f)),
        (t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Lc),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = i),
        (f.state = t.memoizedState),
        (f.refs = {}),
        ef(t),
        (g = r.contextType),
        (f.context = typeof g == 'object' && g !== null ? ar(g) : ia),
        (f.state = t.memoizedState),
        (g = r.getDerivedStateFromProps),
        typeof g == 'function' && (Ic(t, r, g, i), (f.state = t.memoizedState)),
        typeof r.getDerivedStateFromProps == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function' ||
          (typeof f.UNSAFE_componentWillMount != 'function' && typeof f.componentWillMount != 'function') ||
          ((g = f.state),
          typeof f.componentWillMount == 'function' && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == 'function' && f.UNSAFE_componentWillMount(),
          g !== f.state && Lc.enqueueReplaceState(f, f.state, null),
          uu(t, i, f, l),
          au(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
        (i = !0);
    } else if (e === null) {
      f = t.stateNode;
      var U = t.memoizedProps,
        $ = Bi(r, U);
      f.props = $;
      var le = f.context,
        xe = r.contextType;
      (g = ia), typeof xe == 'object' && xe !== null && (g = ar(xe));
      var Te = r.getDerivedStateFromProps;
      (xe = typeof Te == 'function' || typeof f.getSnapshotBeforeUpdate == 'function'),
        (U = t.pendingProps !== U),
        xe ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((U || le !== g) && Rd(t, f, i, g)),
        (Kn = !1);
      var ye = t.memoizedState;
      (f.state = ye),
        uu(t, i, f, l),
        au(),
        (le = t.memoizedState),
        U || ye !== le || Kn
          ? (typeof Te == 'function' && (Ic(t, r, Te, i), (le = t.memoizedState)),
            ($ = Kn || Ud(t, r, $, i, ye, le, g))
              ? (xe ||
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
        tf(e, t),
        (g = t.memoizedProps),
        (xe = Bi(r, g)),
        (f.props = xe),
        (Te = t.pendingProps),
        (ye = f.context),
        (le = r.contextType),
        ($ = ia),
        typeof le == 'object' && le !== null && ($ = ar(le)),
        (U = r.getDerivedStateFromProps),
        (le = typeof U == 'function' || typeof f.getSnapshotBeforeUpdate == 'function') ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((g !== Te || ye !== $) && Rd(t, f, i, $)),
        (Kn = !1),
        (ye = t.memoizedState),
        (f.state = ye),
        uu(t, i, f, l),
        au();
      var Se = t.memoizedState;
      g !== Te || ye !== Se || Kn || (e !== null && e.dependencies !== null && Ul(e.dependencies))
        ? (typeof U == 'function' && (Ic(t, r, U, i), (Se = t.memoizedState)),
          (xe = Kn || Ud(t, r, xe, i, ye, Se, $) || (e !== null && e.dependencies !== null && Ul(e.dependencies)))
            ? (le ||
                (typeof f.UNSAFE_componentWillUpdate != 'function' && typeof f.componentWillUpdate != 'function') ||
                (typeof f.componentWillUpdate == 'function' && f.componentWillUpdate(i, Se, $),
                typeof f.UNSAFE_componentWillUpdate == 'function' && f.UNSAFE_componentWillUpdate(i, Se, $)),
              typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof f.componentDidUpdate != 'function' ||
                (g === e.memoizedProps && ye === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != 'function' ||
                (g === e.memoizedProps && ye === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = Se)),
          (f.props = i),
          (f.state = Se),
          (f.context = $),
          (i = xe))
        : (typeof f.componentDidUpdate != 'function' ||
            (g === e.memoizedProps && ye === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != 'function' ||
            (g === e.memoizedProps && ye === e.memoizedState) ||
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
          e !== null && i ? ((t.child = Ai(t, e.child, null, l)), (t.child = Ai(t, null, r, l))) : rr(e, t, r, l),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = _n(e, t, l)),
      e
    );
  }
  function Xd(e, t, r, i) {
    return Ya(), (t.flags |= 256), rr(e, t, r, i), t.child;
  }
  var Fc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vc(e) {
    return { baseLanes: e, cachePool: Qh() };
  }
  function Yc(e, t, r) {
    return (e = e !== null ? e.childLanes & ~r : 0), t && (e |= $r), e;
  }
  function Zd(e, t, r) {
    var i = t.pendingProps,
      l = !1,
      f = (t.flags & 128) !== 0,
      g;
    if (
      ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
      g && ((l = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (vt) {
        if ((l ? Yn(t) : $n(), vt)) {
          var U = tr,
            $;
          if (($ = U)) {
            e: {
              for ($ = U, U = sn; $.nodeType !== 8; ) {
                if (!U) {
                  U = null;
                  break e;
                }
                if ((($ = tn($.nextSibling)), $ === null)) {
                  U = null;
                  break e;
                }
              }
              U = $;
            }
            U !== null
              ? ((t.memoizedState = {
                  dehydrated: U,
                  treeContext: Ei !== null ? { id: bn, overflow: Sn } : null,
                  retryLane: 536870912
                }),
                ($ = Yr(18, null, null, 0)),
                ($.stateNode = U),
                ($.return = t),
                (t.child = $),
                (or = t),
                (tr = null),
                ($ = !0))
              : ($ = !1);
          }
          $ || wi(t);
        }
        if (((U = t.memoizedState), U !== null && ((U = U.dehydrated), U !== null)))
          return U.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
        xn(t);
      }
      return (
        (U = i.children),
        (i = i.fallback),
        l
          ? ($n(),
            (l = t.mode),
            (U = Xc({ mode: 'hidden', children: U }, l)),
            (i = ji(i, l, r, null)),
            (U.return = t),
            (i.return = t),
            (U.sibling = i),
            (t.child = U),
            (l = t.child),
            (l.memoizedState = Vc(r)),
            (l.childLanes = Yc(e, g, r)),
            (t.memoizedState = Fc),
            i)
          : (Yn(t), $c(t, U))
      );
    }
    if ((($ = e.memoizedState), $ !== null && ((U = $.dehydrated), U !== null))) {
      if (f)
        t.flags & 256
          ? (Yn(t), (t.flags &= -257), (t = Zc(e, t, r)))
          : t.memoizedState !== null
            ? ($n(), (t.child = e.child), (t.flags |= 128), (t = null))
            : ($n(),
              (l = i.fallback),
              (U = t.mode),
              (i = Xc({ mode: 'visible', children: i.children }, U)),
              (l = ji(l, U, r, null)),
              (l.flags |= 2),
              (i.return = t),
              (l.return = t),
              (i.sibling = l),
              (t.child = i),
              Ai(t, e.child, null, r),
              (i = t.child),
              (i.memoizedState = Vc(r)),
              (i.childLanes = Yc(e, g, r)),
              (t.memoizedState = Fc),
              (t = l));
      else if ((Yn(t), U.data === '$!')) {
        if (((g = U.nextSibling && U.nextSibling.dataset), g)) var le = g.dgst;
        (g = le),
          (i = Error(s(419))),
          (i.stack = ''),
          (i.digest = g),
          $a({ value: i, source: null, stack: null }),
          (t = Zc(e, t, r));
      } else if ((Wt || nu(e, t, r, !1), (g = (r & e.childLanes) !== 0), Wt || g)) {
        if (((g = Tt), g !== null)) {
          if (((i = r & -r), (i & 42) !== 0)) i = 1;
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
          if (((i = (i & (g.suspendedLanes | r)) !== 0 ? 0 : i), i !== 0 && i !== $.retryLane))
            throw (($.retryLane = i), Vn(e, i), hr(g, e, i), Id);
        }
        U.data === '$?' || _f(), (t = Zc(e, t, r));
      } else
        U.data === '$?'
          ? ((t.flags |= 128), (t.child = e.child), (t = e1.bind(null, e)), (U._reactRetry = t), (t = null))
          : ((e = $.treeContext),
            (tr = tn(U.nextSibling)),
            (or = t),
            (vt = !0),
            (Pr = null),
            (sn = !1),
            e !== null && ((Lr[Hr++] = bn), (Lr[Hr++] = Sn), (Lr[Hr++] = Ei), (bn = e.id), (Sn = e.overflow), (Ei = t)),
            (t = $c(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? ($n(),
        (l = i.fallback),
        (U = t.mode),
        ($ = e.child),
        (le = $.sibling),
        (i = ri($, { mode: 'hidden', children: i.children })),
        (i.subtreeFlags = $.subtreeFlags & 31457280),
        le !== null ? (l = ri(le, l)) : ((l = ji(l, U, r, null)), (l.flags |= 2)),
        (l.return = t),
        (i.return = t),
        (i.sibling = l),
        (t.child = i),
        (i = l),
        (l = t.child),
        (U = e.child.memoizedState),
        U === null
          ? (U = Vc(r))
          : (($ = U.cachePool),
            $ !== null ? ((le = Zt._currentValue), ($ = $.parent !== le ? { parent: le, pool: le } : $)) : ($ = Qh()),
            (U = { baseLanes: U.baseLanes | r, cachePool: $ })),
        (l.memoizedState = U),
        (l.childLanes = Yc(e, g, r)),
        (t.memoizedState = Fc),
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
  function $c(e, t) {
    return (t = Xc({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function Xc(e, t) {
    return S0(e, t, 0, null);
  }
  function Zc(e, t, r) {
    return Ai(t, e.child, null, r), (e = $c(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
  }
  function Qd(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Wc(e.return, t, r);
  }
  function Qc(e, t, r, i, l) {
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
  function Kd(e, t, r) {
    var i = t.pendingProps,
      l = i.revealOrder,
      f = i.tail;
    if ((rr(e, t, i.children, r), (i = Xt.current), (i & 2) !== 0)) (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Qd(e, r, t);
          else if (e.tag === 19) Qd(e, r, t);
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
    switch ((M(Xt, i), l)) {
      case 'forwards':
        for (r = t.child, l = null; r !== null; )
          (e = r.alternate), e !== null && bl(e) === null && (l = r), (r = r.sibling);
        (r = l),
          r === null ? ((l = t.child), (t.child = null)) : ((l = r.sibling), (r.sibling = null)),
          Qc(t, !1, l, r, f);
        break;
      case 'backwards':
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && bl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        Qc(t, !0, r, null, f);
        break;
      case 'together':
        Qc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function _n(e, t, r) {
    if ((e !== null && (t.dependencies = e.dependencies), (ni |= t.lanes), (r & t.childLanes) === 0))
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
  function Kc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Ul(e)));
  }
  function Lg(e, t, r) {
    switch (t.tag) {
      case 3:
        ne(t, t.stateNode.containerInfo), Qn(t, Zt, e.memoizedState.cache), Ya();
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
            : (r & t.child.childLanes) !== 0
              ? Zd(e, t, r)
              : (Yn(t), (e = _n(e, t, r)), e !== null ? e.sibling : null);
        Yn(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (((i = (r & t.childLanes) !== 0), i || (nu(e, t, r, !1), (i = (r & t.childLanes) !== 0)), l)) {
          if (i) return Kd(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          M(Xt, Xt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Fd(e, t, r);
      case 24:
        Qn(t, Zt, e.memoizedState.cache);
    }
    return _n(e, t, r);
  }
  function Jd(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Wt = !0;
      else {
        if (!Kc(e, r) && (t.flags & 128) === 0) return (Wt = !1), Lg(e, t, r);
        Wt = (e.flags & 131072) !== 0;
      }
    else (Wt = !1), vt && (t.flags & 1048576) !== 0 && Ch(t, ml, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var i = t.elementType,
            l = i._init;
          if (((i = l(i._payload)), (t.type = i), typeof i == 'function'))
            of(i)
              ? ((e = Bi(i, e)), (t.tag = 1), (t = $d(null, t, i, e, r)))
              : ((t.tag = 0), (t = Gc(null, t, i, e, r)));
          else {
            if (i != null) {
              if (((l = i.$$typeof), l === W)) {
                (t.tag = 11), (t = Ld(null, t, i, e, r));
                break e;
              } else if (l === ve) {
                (t.tag = 14), (t = Hd(null, t, i, e, r));
                break e;
              }
            }
            throw ((t = y(i) || i), Error(s(306, t, '')));
          }
        }
        return t;
      case 0:
        return Gc(e, t, t.type, t.pendingProps, r);
      case 1:
        return (i = t.type), (l = Bi(i, t.pendingProps)), $d(e, t, i, l, r);
      case 3:
        e: {
          if ((ne(t, t.stateNode.containerInfo), e === null)) throw Error(s(387));
          var f = t.pendingProps;
          (l = t.memoizedState), (i = l.element), tf(e, t), uu(t, f, null, r);
          var g = t.memoizedState;
          if (((f = g.cache), Qn(t, Zt, f), f !== l.cache && Pc(t, [Zt], r, !0), au(), (f = g.element), l.isDehydrated))
            if (
              ((l = { element: f, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              t = Xd(e, t, f, r);
              break e;
            } else if (f !== i) {
              (i = Ir(Error(s(424)), t)), $a(i), (t = Xd(e, t, f, r));
              break e;
            } else
              for (
                tr = tn(t.stateNode.containerInfo.firstChild),
                  or = t,
                  vt = !0,
                  Pr = null,
                  sn = !0,
                  r = Vh(t, null, f, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Ya(), f === i)) {
              t = _n(e, t, r);
              break e;
            }
            rr(e, t, f, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ru(e, t),
          e === null
            ? (r = em(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = r)
              : vt ||
                ((r = t.type),
                (e = t.pendingProps),
                (i = Xl(ie.current).createElement(r)),
                (i[ft] = t),
                (i[ir] = e),
                nr(i, r, e),
                Je(i),
                (t.stateNode = i))
            : (t.memoizedState = em(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          re(t),
          e === null &&
            vt &&
            ((i = t.stateNode = J0(t.type, t.pendingProps, ie.current)), (or = t), (sn = !0), (tr = tn(i.firstChild))),
          (i = t.pendingProps.children),
          e !== null || vt ? rr(e, t, i, r) : (t.child = Ai(t, null, i, r)),
          ru(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            vt &&
            ((l = i = tr) &&
              ((i = y1(i, t.type, t.pendingProps, sn)),
              i !== null ? ((t.stateNode = i), (or = t), (tr = tn(i.firstChild)), (sn = !1), (l = !0)) : (l = !1)),
            l || wi(t)),
          re(t),
          (l = t.type),
          (f = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (i = f.children),
          qf(l, f) ? (i = null) : g !== null && qf(l, g) && (t.flags |= 32),
          t.memoizedState !== null && ((l = wc(e, t, Dg, null, null, r)), (xu._currentValue = l)),
          ru(e, t),
          rr(e, t, i, r),
          t.child
        );
      case 6:
        return (
          e === null &&
            vt &&
            ((e = r = tr) &&
              ((r = g1(r, t.pendingProps, sn)),
              r !== null ? ((t.stateNode = r), (or = t), (tr = null), (e = !0)) : (e = !1)),
            e || wi(t)),
          null
        );
      case 13:
        return Zd(e, t, r);
      case 4:
        return (
          ne(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Ai(t, null, i, r)) : rr(e, t, i, r),
          t.child
        );
      case 11:
        return Ld(e, t, t.type, t.pendingProps, r);
      case 7:
        return rr(e, t, t.pendingProps, r), t.child;
      case 8:
        return rr(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return rr(e, t, t.pendingProps.children, r), t.child;
      case 10:
        return (i = t.pendingProps), Qn(t, t.type, i.value), rr(e, t, i.children, r), t.child;
      case 9:
        return (
          (l = t.type._context),
          (i = t.pendingProps.children),
          Ri(t),
          (l = ar(l)),
          (i = i(l)),
          (t.flags |= 1),
          rr(e, t, i, r),
          t.child
        );
      case 14:
        return Hd(e, t, t.type, t.pendingProps, r);
      case 15:
        return Gd(e, t, t.type, t.pendingProps, r);
      case 19:
        return Kd(e, t, r);
      case 22:
        return Fd(e, t, r);
      case 24:
        return (
          Ri(t),
          (i = ar(Zt)),
          e === null
            ? ((l = Ec()),
              l === null &&
                ((l = Tt),
                (f = Sc()),
                (l.pooledCache = f),
                f.refCount++,
                f !== null && (l.pooledCacheLanes |= r),
                (l = f)),
              (t.memoizedState = { parent: i, cache: l }),
              ef(t),
              Qn(t, Zt, l))
            : ((e.lanes & r) !== 0 && (tf(e, t), uu(t, null, null, r), au()),
              (l = e.memoizedState),
              (f = t.memoizedState),
              l.parent !== i
                ? ((l = { parent: i, cache: i }),
                  (t.memoizedState = l),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
                  Qn(t, Zt, i))
                : ((i = f.cache), Qn(t, Zt, i), i !== l.cache && Pc(t, [Zt], r, !0))),
          rr(e, t, t.pendingProps.children, r),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  var Jc = Oe(null),
    Ui = null,
    wn = null;
  function Qn(e, t, r) {
    M(Jc, t._currentValue), (t._currentValue = r);
  }
  function An(e) {
    (e._currentValue = Jc.current), Re(Jc);
  }
  function Wc(e, t, r) {
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
  function Pc(e, t, r, i) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var f = l.dependencies;
      if (f !== null) {
        var g = l.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var U = f;
          f = l;
          for (var $ = 0; $ < t.length; $++)
            if (U.context === t[$]) {
              (f.lanes |= r), (U = f.alternate), U !== null && (U.lanes |= r), Wc(f.return, r, e), i || (g = null);
              break e;
            }
          f = U.next;
        }
      } else if (l.tag === 18) {
        if (((g = l.return), g === null)) throw Error(s(341));
        (g.lanes |= r), (f = g.alternate), f !== null && (f.lanes |= r), Wc(g, r, e), (g = null);
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
        if ((l.flags & 524288) !== 0) f = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var g = l.alternate;
        if (g === null) throw Error(s(387));
        if (((g = g.memoizedProps), g !== null)) {
          var U = l.type;
          wr(l.pendingProps.value, g.value) || (e !== null ? e.push(U) : (e = [U]));
        }
      } else if (l === P.current) {
        if (((g = l.alternate), g === null)) throw Error(s(387));
        g.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(xu) : (e = [xu]));
      }
      l = l.return;
    }
    e !== null && Pc(t, e, r, i), (t.flags |= 262144);
  }
  function Ul(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!wr(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ri(e) {
    (Ui = e), (wn = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function ar(e) {
    return Wd(Ui, e);
  }
  function Rl(e, t) {
    return Ui === null && Ri(e), Wd(e, t);
  }
  function Wd(e, t) {
    var r = t._currentValue;
    if (((t = { context: t, memoizedValue: r, next: null }), wn === null)) {
      if (e === null) throw Error(s(308));
      (wn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else wn = wn.next = t;
    return r;
  }
  var Kn = !1;
  function ef(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function tf(e, t) {
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
    if (((i = i.shared), (jt & 2) !== 0)) {
      var l = i.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (i.pending = t), (t = hl(e)), Dh(e, null, r), t
      );
    }
    return ol(e, i, t, r), hl(e);
  }
  function iu(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194176) !== 0))) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), Fs(e, r);
    }
  }
  function rf(e, t) {
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
  var nf = !1;
  function au() {
    if (nf) {
      var e = fa;
      if (e !== null) throw e;
    }
  }
  function uu(e, t, r, i) {
    nf = !1;
    var l = e.updateQueue;
    Kn = !1;
    var f = l.firstBaseUpdate,
      g = l.lastBaseUpdate,
      U = l.shared.pending;
    if (U !== null) {
      l.shared.pending = null;
      var $ = U,
        le = $.next;
      ($.next = null), g === null ? (f = le) : (g.next = le), (g = $);
      var xe = e.alternate;
      xe !== null &&
        ((xe = xe.updateQueue),
        (U = xe.lastBaseUpdate),
        U !== g && (U === null ? (xe.firstBaseUpdate = le) : (U.next = le), (xe.lastBaseUpdate = $)));
    }
    if (f !== null) {
      var Te = l.baseState;
      (g = 0), (xe = le = $ = null), (U = f);
      do {
        var ye = U.lane & -536870913,
          Se = ye !== U.lane;
        if (Se ? (pt & ye) === ye : (i & ye) === ye) {
          ye !== 0 && ye === ca && (nf = !0),
            xe !== null && (xe = xe.next = { lane: 0, tag: U.tag, payload: U.payload, callback: null, next: null });
          e: {
            var Ze = e,
              rt = U;
            ye = t;
            var zt = r;
            switch (rt.tag) {
              case 1:
                if (((Ze = rt.payload), typeof Ze == 'function')) {
                  Te = Ze.call(zt, Te, ye);
                  break e;
                }
                Te = Ze;
                break e;
              case 3:
                Ze.flags = (Ze.flags & -65537) | 128;
              case 0:
                if (((Ze = rt.payload), (ye = typeof Ze == 'function' ? Ze.call(zt, Te, ye) : Ze), ye == null)) break e;
                Te = w({}, Te, ye);
                break e;
              case 2:
                Kn = !0;
            }
          }
          (ye = U.callback),
            ye !== null &&
              ((e.flags |= 64),
              Se && (e.flags |= 8192),
              (Se = l.callbacks),
              Se === null ? (l.callbacks = [ye]) : Se.push(ye));
        } else
          (Se = { lane: ye, tag: U.tag, payload: U.payload, callback: U.callback, next: null }),
            xe === null ? ((le = xe = Se), ($ = Te)) : (xe = xe.next = Se),
            (g |= ye);
        if (((U = U.next), U === null)) {
          if (((U = l.shared.pending), U === null)) break;
          (Se = U), (U = Se.next), (Se.next = null), (l.lastBaseUpdate = Se), (l.shared.pending = null);
        }
      } while (!0);
      xe === null && ($ = Te),
        (l.baseState = $),
        (l.firstBaseUpdate = le),
        (l.lastBaseUpdate = xe),
        f === null && (l.shared.lanes = 0),
        (ni |= g),
        (e.lanes = g),
        (e.memoizedState = Te);
    }
  }
  function Pd(e, t) {
    if (typeof e != 'function') throw Error(s(191, e));
    e.call(t);
  }
  function e0(e, t) {
    var r = e.callbacks;
    if (r !== null) for (e.callbacks = null, e = 0; e < r.length; e++) Pd(r[e], t);
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
    } catch (U) {
      Nt(t, t.return, U);
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
              U = g.destroy;
            if (U !== void 0) {
              (g.destroy = void 0), (l = t);
              var $ = r;
              try {
                U();
              } catch (le) {
                Nt(l, $, le);
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (le) {
      Nt(t, t.return, le);
    }
  }
  function t0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        e0(t, r);
      } catch (i) {
        Nt(e, e.return, i);
      }
    }
  }
  function r0(e, t, r) {
    (r.props = Bi(e.type, e.memoizedProps)), (r.state = e.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (i) {
      Nt(e, t, i);
    }
  }
  function Di(e, t) {
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
      Nt(e, t, f);
    }
  }
  function Ar(e, t) {
    var r = e.ref,
      i = e.refCleanup;
    if (r !== null)
      if (typeof i == 'function')
        try {
          i();
        } catch (l) {
          Nt(e, t, l);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof r == 'function')
        try {
          r(null);
        } catch (l) {
          Nt(e, t, l);
        }
      else r.current = null;
  }
  function n0(e) {
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
      Nt(e, e.return, l);
    }
  }
  function i0(e, t, r) {
    try {
      var i = e.stateNode;
      o1(i, e.type, r, t), (i[ir] = t);
    } catch (l) {
      Nt(e, e.return, l);
    }
  }
  function a0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
  }
  function af(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || a0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uf(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = $l));
    else if (i !== 4 && i !== 27 && ((e = e.child), e !== null))
      for (uf(e, t, r), e = e.sibling; e !== null; ) uf(e, t, r), (e = e.sibling);
  }
  function Dl(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && i !== 27 && ((e = e.child), e !== null))
      for (Dl(e, t, r), e = e.sibling; e !== null; ) Dl(e, t, r), (e = e.sibling);
  }
  var Nn = !1,
    kt = !1,
    lf = !1,
    u0 = typeof WeakSet == 'function' ? WeakSet : Set,
    Pt = null,
    l0 = !1;
  function Hg(e, t) {
    if (((e = e.containerInfo), (Cf = Pl), (e = wh(e)), sc(e))) {
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
              U = -1,
              $ = -1,
              le = 0,
              xe = 0,
              Te = e,
              ye = null;
            t: for (;;) {
              for (
                var Se;
                Te !== r || (l !== 0 && Te.nodeType !== 3) || (U = g + l),
                  Te !== f || (i !== 0 && Te.nodeType !== 3) || ($ = g + i),
                  Te.nodeType === 3 && (g += Te.nodeValue.length),
                  (Se = Te.firstChild) !== null;

              )
                (ye = Te), (Te = Se);
              for (;;) {
                if (Te === e) break t;
                if (
                  (ye === r && ++le === l && (U = g), ye === f && ++xe === i && ($ = g), (Se = Te.nextSibling) !== null)
                )
                  break;
                (Te = ye), (ye = Te.parentNode);
              }
              Te = Se;
            }
            r = U === -1 || $ === -1 ? null : { start: U, end: $ };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (kf = { focusedElem: e, selectionRange: r }, Pl = !1, Pt = t; Pt !== null; )
      if (((t = Pt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (Pt = e);
      else
        for (; Pt !== null; ) {
          switch (((t = Pt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                (e = void 0), (r = t), (l = f.memoizedProps), (f = f.memoizedState), (i = r.stateNode);
                try {
                  var Ze = Bi(r.type, l, r.elementType === r.type);
                  (e = i.getSnapshotBeforeUpdate(Ze, f)), (i.__reactInternalSnapshotBeforeUpdate = e);
                } catch (rt) {
                  Nt(r, r.return, rt);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (r = e.nodeType), r === 9)) Lf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Lf(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Pt = e);
            break;
          }
          Pt = t.return;
        }
    return (Ze = l0), (l0 = !1), Ze;
  }
  function s0(e, t, r) {
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
            } catch (U) {
              Nt(r, r.return, U);
            }
          else {
            var l = Bi(r.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (U) {
              Nt(r, r.return, U);
            }
          }
        i & 64 && t0(r), i & 512 && Di(r, r.return);
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
            e0(i, e);
          } catch (U) {
            Nt(r, r.return, U);
          }
        }
        break;
      case 26:
        Tn(e, r), i & 512 && Di(r, r.return);
        break;
      case 27:
      case 5:
        Tn(e, r), t === null && i & 4 && n0(r), i & 512 && Di(r, r.return);
        break;
      case 12:
        Tn(e, r);
        break;
      case 13:
        Tn(e, r), i & 4 && o0(e, r);
        break;
      case 22:
        if (((l = r.memoizedState !== null || Nn), !l)) {
          t = (t !== null && t.memoizedState !== null) || kt;
          var f = Nn,
            g = kt;
          (Nn = l), (kt = t) && !g ? ei(e, r, (r.subtreeFlags & 8772) !== 0) : Tn(e, r), (Nn = f), (kt = g);
        }
        i & 512 && (r.memoizedProps.mode === 'manual' ? Di(r, r.return) : Ar(r, r.return));
        break;
      default:
        Tn(e, r);
    }
  }
  function c0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), c0(t)),
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
  var Yt = null,
    Nr = !1;
  function On(e, t, r) {
    for (r = r.child; r !== null; ) f0(e, t, r), (r = r.sibling);
  }
  function f0(e, t, r) {
    if (se && typeof se.onCommitFiberUnmount == 'function')
      try {
        se.onCommitFiberUnmount(k, r);
      } catch {}
    switch (r.tag) {
      case 26:
        kt || Ar(r, t),
          On(e, t, r),
          r.memoizedState ? r.memoizedState.count-- : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        kt || Ar(r, t);
        var i = Yt,
          l = Nr;
        for (Yt = r.stateNode, On(e, t, r), r = r.stateNode, t = r.attributes; t.length; ) r.removeAttributeNode(t[0]);
        ja(r), (Yt = i), (Nr = l);
        break;
      case 5:
        kt || Ar(r, t);
      case 6:
        l = Yt;
        var f = Nr;
        if (((Yt = null), On(e, t, r), (Yt = l), (Nr = f), Yt !== null))
          if (Nr)
            try {
              (e = Yt), (i = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i);
            } catch (g) {
              Nt(r, t, g);
            }
          else
            try {
              Yt.removeChild(r.stateNode);
            } catch (g) {
              Nt(r, t, g);
            }
        break;
      case 18:
        Yt !== null &&
          (Nr
            ? ((t = Yt),
              (r = r.stateNode),
              t.nodeType === 8 ? If(t.parentNode, r) : t.nodeType === 1 && If(t, r),
              Au(t))
            : If(Yt, r.stateNode));
        break;
      case 4:
        (i = Yt), (l = Nr), (Yt = r.stateNode.containerInfo), (Nr = !0), On(e, t, r), (Yt = i), (Nr = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        kt || Pn(2, r, t), kt || Pn(4, r, t), On(e, t, r);
        break;
      case 1:
        kt || (Ar(r, t), (i = r.stateNode), typeof i.componentWillUnmount == 'function' && r0(r, t, i)), On(e, t, r);
        break;
      case 21:
        On(e, t, r);
        break;
      case 22:
        kt || Ar(r, t), (kt = (i = kt) || r.memoizedState !== null), On(e, t, r), (kt = i);
        break;
      default:
        On(e, t, r);
    }
  }
  function o0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Au(e);
      } catch (r) {
        Nt(t, t.return, r);
      }
  }
  function Gg(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new u0()), t;
      case 22:
        return (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new u0()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function sf(e, t) {
    var r = Gg(e);
    t.forEach(function (i) {
      var l = t1.bind(null, e, i);
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
          U = g;
        e: for (; U !== null; ) {
          switch (U.tag) {
            case 27:
            case 5:
              (Yt = U.stateNode), (Nr = !1);
              break e;
            case 3:
              (Yt = U.stateNode.containerInfo), (Nr = !0);
              break e;
            case 4:
              (Yt = U.stateNode.containerInfo), (Nr = !0);
              break e;
          }
          U = U.return;
        }
        if (Yt === null) throw Error(s(160));
        f0(f, g, l), (Yt = null), (Nr = !1), (f = l.alternate), f !== null && (f.return = null), (l.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) h0(t, e), (t = t.sibling);
  }
  var en = null;
  function h0(e, t) {
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
          i & 512 && (kt || r === null || Ar(r, r.return)),
          i & 64 &&
            Nn &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((r = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = r === null ? i : r.concat(i)))));
        break;
      case 26:
        var l = en;
        if ((Fr(t, e), Vr(e), i & 512 && (kt || r === null || Ar(r, r.return)), i & 4)) {
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
                        nr(f, i, r),
                        (f[ft] = e),
                        Je(f),
                        (i = f);
                      break e;
                    case 'link':
                      var g = nm('link', 'href', l).get(i + (r.href || ''));
                      if (g) {
                        for (var U = 0; U < g.length; U++)
                          if (
                            ((f = g[U]),
                            f.getAttribute('href') === (r.href == null ? null : r.href) &&
                              f.getAttribute('rel') === (r.rel == null ? null : r.rel) &&
                              f.getAttribute('title') === (r.title == null ? null : r.title) &&
                              f.getAttribute('crossorigin') === (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            g.splice(U, 1);
                            break t;
                          }
                      }
                      (f = l.createElement(i)), nr(f, i, r), l.head.appendChild(f);
                      break;
                    case 'meta':
                      if ((g = nm('meta', 'content', l).get(i + (r.content || '')))) {
                        for (U = 0; U < g.length; U++)
                          if (
                            ((f = g[U]),
                            f.getAttribute('content') === (r.content == null ? null : '' + r.content) &&
                              f.getAttribute('name') === (r.name == null ? null : r.name) &&
                              f.getAttribute('property') === (r.property == null ? null : r.property) &&
                              f.getAttribute('http-equiv') === (r.httpEquiv == null ? null : r.httpEquiv) &&
                              f.getAttribute('charset') === (r.charSet == null ? null : r.charSet))
                          ) {
                            g.splice(U, 1);
                            break t;
                          }
                      }
                      (f = l.createElement(i)), nr(f, i, r), l.head.appendChild(f);
                      break;
                    default:
                      throw Error(s(468, i));
                  }
                  (f[ft] = e), Je(f), (i = f);
                }
                e.stateNode = i;
              } else im(l, e.type, e.stateNode);
            else e.stateNode = rm(l, i, e.memoizedProps);
          else
            f !== i
              ? (f === null ? r.stateNode !== null && ((r = r.stateNode), r.parentNode.removeChild(r)) : f.count--,
                i === null ? im(l, e.type, e.stateNode) : rm(l, i, e.memoizedProps))
              : i === null && e.stateNode !== null && i0(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        if (i & 4 && e.alternate === null) {
          (l = e.stateNode), (f = e.memoizedProps);
          try {
            for (var $ = l.firstChild; $; ) {
              var le = $.nextSibling,
                xe = $.nodeName;
              $[gi] ||
                xe === 'HEAD' ||
                xe === 'BODY' ||
                xe === 'SCRIPT' ||
                xe === 'STYLE' ||
                (xe === 'LINK' && $.rel.toLowerCase() === 'stylesheet') ||
                l.removeChild($),
                ($ = le);
            }
            for (var Te = e.type, ye = l.attributes; ye.length; ) l.removeAttributeNode(ye[0]);
            nr(l, Te, f), (l[ft] = e), (l[ir] = f);
          } catch (Ze) {
            Nt(e, e.return, Ze);
          }
        }
      case 5:
        if ((Fr(t, e), Vr(e), i & 512 && (kt || r === null || Ar(r, r.return)), e.flags & 32)) {
          l = e.stateNode;
          try {
            Ji(l, '');
          } catch (Ze) {
            Nt(e, e.return, Ze);
          }
        }
        i & 4 && e.stateNode != null && ((l = e.memoizedProps), i0(e, l, r !== null ? r.memoizedProps : l)),
          i & 1024 && (lf = !0);
        break;
      case 6:
        if ((Fr(t, e), Vr(e), i & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (i = e.memoizedProps), (r = e.stateNode);
          try {
            r.nodeValue = i;
          } catch (Ze) {
            Nt(e, e.return, Ze);
          }
        }
        break;
      case 3:
        if (
          ((Kl = null),
          (l = en),
          (en = Zl(t.containerInfo)),
          Fr(t, e),
          (en = l),
          Vr(e),
          i & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Au(t.containerInfo);
          } catch (Ze) {
            Nt(e, e.return, Ze);
          }
        lf && ((lf = !1), d0(e));
        break;
      case 4:
        (i = en), (en = Zl(e.stateNode.containerInfo)), Fr(t, e), Vr(e), (en = i);
        break;
      case 12:
        Fr(t, e), Vr(e);
        break;
      case 13:
        Fr(t, e),
          Vr(e),
          e.child.flags & 8192 && (e.memoizedState !== null) != (r !== null && r.memoizedState !== null) && (gf = Me()),
          i & 4 && ((i = e.updateQueue), i !== null && ((e.updateQueue = null), sf(e, i)));
        break;
      case 22:
        if (
          (i & 512 && (kt || r === null || Ar(r, r.return)),
          ($ = e.memoizedState !== null),
          (le = r !== null && r.memoizedState !== null),
          (xe = Nn),
          (Te = kt),
          (Nn = xe || $),
          (kt = Te || le),
          Fr(t, e),
          (kt = Te),
          (Nn = xe),
          Vr(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          i & 8192 &&
            ((t._visibility = $ ? t._visibility & -2 : t._visibility | 1),
            $ && ((t = Nn || kt), r === null || le || t || ma(e)),
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
                    (g = le.stateNode), (U = le.memoizedProps.style);
                    var Se = U != null && U.hasOwnProperty('display') ? U.display : null;
                    g.style.display = Se == null || typeof Se == 'boolean' ? '' : ('' + Se).trim();
                  }
                } catch (Ze) {
                  Nt(le, le.return, Ze);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                le = t;
                try {
                  le.stateNode.nodeValue = $ ? '' : le.memoizedProps;
                } catch (Ze) {
                  Nt(le, le.return, Ze);
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
          ((i = e.updateQueue), i !== null && ((r = i.retryQueue), r !== null && ((i.retryQueue = null), sf(e, r))));
        break;
      case 19:
        Fr(t, e), Vr(e), i & 4 && ((i = e.updateQueue), i !== null && ((e.updateQueue = null), sf(e, i)));
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
              if (a0(r)) {
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
                f = af(e);
              Dl(e, f, l);
              break;
            case 5:
              var g = i.stateNode;
              i.flags & 32 && (Ji(g, ''), (i.flags &= -33));
              var U = af(e);
              Dl(e, U, g);
              break;
            case 3:
            case 4:
              var $ = i.stateNode.containerInfo,
                le = af(e);
              uf(e, le, $);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (xe) {
        Nt(e, e.return, xe);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function d0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        d0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function Tn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) s0(e, t.alternate, t), (t = t.sibling);
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
          Ar(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == 'function' && r0(t, t.return, r), ma(t);
          break;
        case 26:
        case 27:
        case 5:
          Ar(t, t.return), ma(t);
          break;
        case 22:
          Ar(t, t.return), t.memoizedState === null && ma(t);
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
              Nt(i, i.return, le);
            }
          if (((i = f), (l = i.updateQueue), l !== null)) {
            var U = i.stateNode;
            try {
              var $ = l.shared.hiddenCallbacks;
              if ($ !== null) for (l.shared.hiddenCallbacks = null, l = 0; l < $.length; l++) Pd($[l], U);
            } catch (le) {
              Nt(i, i.return, le);
            }
          }
          r && g & 64 && t0(f), Di(f, f.return);
          break;
        case 26:
        case 27:
        case 5:
          ei(l, f, r), r && i === null && g & 4 && n0(f), Di(f, f.return);
          break;
        case 12:
          ei(l, f, r);
          break;
        case 13:
          ei(l, f, r), r && g & 4 && o0(l, f);
          break;
        case 22:
          f.memoizedState === null && ei(l, f, r), Di(f, f.return);
          break;
        default:
          ei(l, f, r);
      }
      t = t.sibling;
    }
  }
  function cf(e, t) {
    var r = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && Ja(r));
  }
  function ff(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ja(e));
  }
  function ti(e, t, r, i) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) m0(e, t, r, i), (t = t.sibling);
  }
  function m0(e, t, r, i) {
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
              U = f.onPostCommit;
            typeof U == 'function' && U(g, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch ($) {
            Nt(t, t.return, $);
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
          l & 2048 && cf(t.alternate, t);
        break;
      case 24:
        ti(e, t, r, i), l & 2048 && ff(t.alternate, t);
        break;
      default:
        ti(e, t, r, i);
    }
  }
  function pa(e, t, r, i, l) {
    for (l = l && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e,
        g = t,
        U = r,
        $ = i,
        le = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          pa(f, g, U, $, l), lu(8, g);
          break;
        case 23:
          break;
        case 22:
          var xe = g.stateNode;
          g.memoizedState !== null
            ? xe._visibility & 4
              ? pa(f, g, U, $, l)
              : su(f, g)
            : ((xe._visibility |= 4), pa(f, g, U, $, l)),
            l && le & 2048 && cf(g.alternate, g);
          break;
        case 24:
          pa(f, g, U, $, l), l && le & 2048 && ff(g.alternate, g);
          break;
        default:
          pa(f, g, U, $, l);
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
            su(r, i), l & 2048 && cf(i.alternate, i);
            break;
          case 24:
            su(r, i), l & 2048 && ff(i.alternate, i);
            break;
          default:
            su(r, i);
        }
        t = t.sibling;
      }
  }
  var cu = 8192;
  function ya(e) {
    if (e.subtreeFlags & cu) for (e = e.child; e !== null; ) p0(e), (e = e.sibling);
  }
  function p0(e) {
    switch (e.tag) {
      case 26:
        ya(e), e.flags & cu && e.memoizedState !== null && B1(en, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ya(e);
        break;
      case 3:
      case 4:
        var t = en;
        (en = Zl(e.stateNode.containerInfo)), ya(e), (en = t);
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
  function y0(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function fu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (Pt = i), v0(i, e);
        }
      y0(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) g0(e), (e = e.sibling);
  }
  function g0(e) {
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
          ? ((t._visibility &= -5), jl(e))
          : fu(e);
        break;
      default:
        fu(e);
    }
  }
  function jl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (Pt = i), v0(i, e);
        }
      y0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Pn(8, t, t.return), jl(t);
          break;
        case 22:
          (r = t.stateNode), r._visibility & 4 && ((r._visibility &= -5), jl(t));
          break;
        default:
          jl(t);
      }
      e = e.sibling;
    }
  }
  function v0(e, t) {
    for (; Pt !== null; ) {
      var r = Pt;
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
      if (((i = r.child), i !== null)) (i.return = r), (Pt = i);
      else
        e: for (r = e; Pt !== null; ) {
          i = Pt;
          var l = i.sibling,
            f = i.return;
          if ((c0(i), i === r)) {
            Pt = null;
            break e;
          }
          if (l !== null) {
            (l.return = f), (Pt = l);
            break e;
          }
          Pt = f;
        }
    }
  }
  function Fg(e, t, r, i) {
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
    return new Fg(e, t, r, i);
  }
  function of(e) {
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
  function b0(e, t) {
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
  function Cl(e, t, r, i, l, f) {
    var g = 0;
    if (((i = e), typeof e == 'function')) of(e) && (g = 1);
    else if (typeof e == 'string') g = T1(e, r, R.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case S:
          return ji(r.children, l, f, t);
        case x:
          (g = 8), (l |= 24);
          break;
        case B:
          return (e = Yr(12, r, t, l | 2)), (e.elementType = B), (e.lanes = f), e;
        case ce:
          return (e = Yr(13, r, t, l)), (e.elementType = ce), (e.lanes = f), e;
        case de:
          return (e = Yr(19, r, t, l)), (e.elementType = de), (e.lanes = f), e;
        case je:
          return S0(r, l, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case v:
              case O:
                g = 10;
                break e;
              case _:
                g = 9;
                break e;
              case W:
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
  function S0(e, t, r, i) {
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
        if ((l._pendingVisibility & 2) === 0) {
          var g = Vn(f, 2);
          g !== null && ((l._pendingVisibility |= 2), hr(g, f, 2));
        }
      },
      attach: function () {
        var f = l._current;
        if (f === null) throw Error(s(456));
        if ((l._pendingVisibility & 2) !== 0) {
          var g = Vn(f, 2);
          g !== null && ((l._pendingVisibility &= -3), hr(g, f, 2));
        }
      }
    };
    return (e.stateNode = l), e;
  }
  function hf(e, t, r) {
    return (e = Yr(6, e, null, t)), (e.lanes = r), e;
  }
  function df(e, t, r) {
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
  function x0(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !am(t))) {
      if (
        ((t = Gr.current),
        t !== null &&
          ((pt & 4194176) === pt ? cn !== null : ((pt & 62914560) !== pt && (pt & 536870912) === 0) || t !== cn))
      )
        throw ((Za = gc), zh);
      e.flags |= 8192;
    }
  }
  function kl(e, t) {
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
  function Dt(e) {
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
  function Vg(e, t, r) {
    var i = t.pendingProps;
    switch ((pc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Dt(t), null;
      case 1:
        return Dt(t), null;
      case 3:
        return (
          (r = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          An(Zt),
          fe(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Va(t)
              ? Mn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pr !== null && (xf(Pr), (Pr = null)))),
          Dt(t),
          null
        );
      case 26:
        return (
          (r = t.memoizedState),
          e === null
            ? (Mn(t), r !== null ? (Dt(t), x0(t, r)) : (Dt(t), (t.flags &= -16777217)))
            : r
              ? r !== e.memoizedState
                ? (Mn(t), Dt(t), x0(t, r))
                : (Dt(t), (t.flags &= -16777217))
              : (e.memoizedProps !== i && Mn(t), Dt(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        N(t), (r = ie.current);
        var l = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== i && Mn(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(s(166));
            return Dt(t), null;
          }
          (e = R.current), Va(t) ? kh(t) : ((e = J0(l, i, r)), (t.stateNode = e), Mn(t));
        }
        return Dt(t), null;
      case 5:
        if ((N(t), (r = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== i && Mn(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(s(166));
            return Dt(t), null;
          }
          if (((e = R.current), Va(t))) kh(t);
          else {
            switch (((l = Xl(ie.current)), e)) {
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
            e: switch ((nr(e, r, i), r)) {
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
        return Dt(t), (t.flags &= -16777217), null;
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
              (e = !!(e.nodeValue === r || (i !== null && i.suppressHydrationWarning === !0) || Y0(e.nodeValue, r))),
              e || wi(t);
          } else (e = Xl(e).createTextNode(i)), (e[ft] = t), (t.stateNode = e);
        }
        return Dt(t), null;
      case 13:
        if (((i = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((l = Va(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(s(317));
              l[ft] = t;
            } else Ya(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Dt(t), (l = !1);
          } else Pr !== null && (xf(Pr), (Pr = null)), (l = !0);
          if (!l) return t.flags & 256 ? (xn(t), t) : (xn(t), null);
        }
        if ((xn(t), (t.flags & 128) !== 0)) return (t.lanes = r), t;
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
        return r !== e && r && (t.child.flags |= 8192), kl(t, t.updateQueue), Dt(t), null;
      case 4:
        return fe(), e === null && Rf(t.stateNode.containerInfo), Dt(t), null;
      case 10:
        return An(t.type), Dt(t), null;
      case 19:
        if ((Re(Xt), (l = t.memoizedState), l === null)) return Dt(t), null;
        if (((i = (t.flags & 128) !== 0), (f = l.rendering), f === null))
          if (i) ou(l, !1);
          else {
            if (qt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = bl(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      ou(l, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      kl(t, e),
                      t.subtreeFlags = 0,
                      e = r,
                      r = t.child;
                    r !== null;

                  )
                    b0(r, e), (r = r.sibling);
                  return M(Xt, (Xt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Me() > ql && ((t.flags |= 128), (i = !0), ou(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = bl(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                kl(t, e),
                ou(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !f.alternate && !vt)
              )
                return Dt(t), null;
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
            (e = Xt.current),
            M(Xt, i ? (e & 1) | 2 : e & 1),
            t)
          : (Dt(t), null);
      case 22:
      case 23:
        return (
          xn(t),
          bc(),
          (i = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
          i
            ? (r & 536870912) !== 0 && (t.flags & 128) === 0 && (Dt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Dt(t),
          (r = t.updateQueue),
          r !== null && kl(t, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
          i !== r && (t.flags |= 2048),
          e !== null && Re(Ni),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          An(Zt),
          Dt(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Yg(e, t) {
    switch ((pc(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          An(Zt), fe(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return N(t), null;
      case 13:
        if ((xn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Ya();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return Re(Xt), null;
      case 4:
        return fe(), null;
      case 10:
        return An(t.type), null;
      case 22:
      case 23:
        return xn(t), bc(), e !== null && Re(Ni), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 24:
        return An(Zt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function E0(e, t) {
    switch ((pc(t), t.tag)) {
      case 3:
        An(Zt), fe();
        break;
      case 26:
      case 27:
      case 5:
        N(t);
        break;
      case 4:
        fe();
        break;
      case 13:
        xn(t);
        break;
      case 19:
        Re(Xt);
        break;
      case 10:
        An(t.type);
        break;
      case 22:
      case 23:
        xn(t), bc(), e !== null && Re(Ni);
        break;
      case 24:
        An(Zt);
    }
  }
  var $g = {
      getCacheForType: function (e) {
        var t = ar(Zt),
          r = t.data.get(e);
        return r === void 0 && ((r = e()), t.data.set(e, r)), r;
      }
    },
    Xg = typeof WeakMap == 'function' ? WeakMap : Map,
    jt = 0,
    Tt = null,
    ht = null,
    pt = 0,
    Mt = 0,
    Or = null,
    Bn = !1,
    ga = !1,
    mf = !1,
    Un = 0,
    qt = 0,
    ni = 0,
    Ci = 0,
    pf = 0,
    $r = 0,
    va = 0,
    hu = null,
    on = null,
    yf = !1,
    gf = 0,
    ql = 1 / 0,
    zl = null,
    ii = null,
    Il = !1,
    ki = null,
    du = 0,
    vf = 0,
    bf = null,
    mu = 0,
    Sf = null;
  function Tr() {
    if ((jt & 2) !== 0 && pt !== 0) return pt & -pt;
    if (E.T !== null) {
      var e = ca;
      return e !== 0 ? e : Tf();
    }
    return Ju();
  }
  function _0() {
    $r === 0 && ($r = (pt & 536870912) === 0 || vt ? fr() : 536870912);
    var e = Gr.current;
    return e !== null && (e.flags |= 32), $r;
  }
  function hr(e, t, r) {
    ((e === Tt && Mt === 2) || e.cancelPendingCommit !== null) && (ba(e, 0), Rn(e, pt, $r, !1)),
      Ot(e, r),
      ((jt & 2) === 0 || e !== Tt) && (e === Tt && ((jt & 2) === 0 && (Ci |= r), qt === 4 && Rn(e, pt, $r, !1)), hn(e));
  }
  function w0(e, t, r) {
    if ((jt & 6) !== 0) throw Error(s(327));
    var i = (!r && (t & 60) === 0 && (t & e.expiredLanes) === 0) || st(e, t),
      l = i ? Kg(e, t) : wf(e, t, !0),
      f = i;
    do {
      if (l === 0) {
        ga && !i && Rn(e, t, 0, !1);
        break;
      } else if (l === 6) Rn(e, t, 0, !Bn);
      else {
        if (((r = e.current.alternate), f && !Zg(r))) {
          (l = wf(e, t, !1)), (f = !1);
          continue;
        }
        if (l === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var g = 0;
          else (g = e.pendingLanes & -536870913), (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            t = g;
            e: {
              var U = e;
              l = hu;
              var $ = U.current.memoizedState.isDehydrated;
              if (($ && (ba(U, g).flags |= 256), (g = wf(U, g, !1)), g !== 2)) {
                if (mf && !$) {
                  (U.errorRecoveryDisabledLanes |= f), (Ci |= f), (l = 4);
                  break e;
                }
                (f = on), (on = l), f !== null && xf(f);
              }
              l = g;
            }
            if (((f = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          ba(e, 0), Rn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((i = e), l)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194176) === t) {
                Rn(i, t, $r, !Bn);
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
          if (((i.finishedWork = r), (i.finishedLanes = t), (t & 62914560) === t && ((f = gf + 300 - Me()), 10 < f))) {
            if ((Rn(i, t, $r, !Bn), nt(i, 0) !== 0)) break e;
            i.timeoutHandle = Z0(A0.bind(null, i, r, on, zl, yf, t, $r, Ci, va, Bn, 2, -0, 0), f);
            break e;
          }
          A0(i, r, on, zl, yf, t, $r, Ci, va, Bn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    hn(e);
  }
  function xf(e) {
    on === null ? (on = e) : on.push.apply(on, e);
  }
  function A0(e, t, r, i, l, f, g, U, $, le, xe, Te, ye) {
    var Se = t.subtreeFlags;
    if (
      (Se & 8192 || (Se & 16785408) === 16785408) &&
      ((Su = { stylesheets: null, count: 0, unsuspend: M1 }), p0(t), (t = U1()), t !== null)
    ) {
      (e.cancelPendingCommit = t(R0.bind(null, e, r, i, l, g, U, $, 1, Te, ye))), Rn(e, f, g, !le);
      return;
    }
    R0(e, r, i, l, g, U, $, xe, Te, ye);
  }
  function Zg(e) {
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
            if (!wr(f(), l)) return !1;
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
  function Rn(e, t, r, i) {
    (t &= ~pf),
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
    r !== 0 && Gs(e, r, t);
  }
  function Ll() {
    return (jt & 6) === 0 ? (pu(0), !1) : !0;
  }
  function Ef() {
    if (ht !== null) {
      if (Mt === 0) var e = ht.return;
      else (e = ht), (wn = Ui = null), Oc(e), (la = null), (Qa = 0), (e = ht);
      for (; e !== null; ) E0(e.alternate, e), (e = e.return);
      ht = null;
    }
  }
  function ba(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    r !== -1 && ((e.timeoutHandle = -1), d1(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      Ef(),
      (Tt = e),
      (ht = r = ri(e.current, null)),
      (pt = t),
      (Mt = 0),
      (Or = null),
      (Bn = !1),
      (ga = st(e, t)),
      (mf = !1),
      (va = $r = pf = Ci = ni = qt = 0),
      (on = hu = null),
      (yf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var l = 31 - Ce(i),
          f = 1 << l;
        (t |= e[l]), (i &= ~f);
      }
    return (Un = t), fl(), r;
  }
  function N0(e, t) {
    (lt = null),
      (E.H = fn),
      t === Xa
        ? ((t = Hh()), (Mt = 3))
        : t === zh
          ? ((t = Hh()), (Mt = 4))
          : (Mt = t === Id ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
      (Or = t),
      ht === null && ((qt = 1), Bl(e, Ir(t, e.current)));
  }
  function O0() {
    var e = E.H;
    return (E.H = fn), e === null ? fn : e;
  }
  function T0() {
    var e = E.A;
    return (E.A = $g), e;
  }
  function _f() {
    (qt = 4),
      Bn || ((pt & 4194176) !== pt && Gr.current !== null) || (ga = !0),
      ((ni & 134217727) === 0 && (Ci & 134217727) === 0) || Tt === null || Rn(Tt, pt, $r, !1);
  }
  function wf(e, t, r) {
    var i = jt;
    jt |= 2;
    var l = O0(),
      f = T0();
    (Tt !== e || pt !== t) && ((zl = null), ba(e, t)), (t = !1);
    var g = qt;
    e: do
      try {
        if (Mt !== 0 && ht !== null) {
          var U = ht,
            $ = Or;
          switch (Mt) {
            case 8:
              Ef(), (g = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Gr.current === null && (t = !0);
              var le = Mt;
              if (((Mt = 0), (Or = null), Sa(e, U, $, le), r && ga)) {
                g = 0;
                break e;
              }
              break;
            default:
              (le = Mt), (Mt = 0), (Or = null), Sa(e, U, $, le);
          }
        }
        Qg(), (g = qt);
        break;
      } catch (xe) {
        N0(e, xe);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (wn = Ui = null),
      (jt = i),
      (E.H = l),
      (E.A = f),
      ht === null && ((Tt = null), (pt = 0), fl()),
      g
    );
  }
  function Qg() {
    for (; ht !== null; ) M0(ht);
  }
  function Kg(e, t) {
    var r = jt;
    jt |= 2;
    var i = O0(),
      l = T0();
    Tt !== e || pt !== t ? ((zl = null), (ql = Me() + 500), ba(e, t)) : (ga = st(e, t));
    e: do
      try {
        if (Mt !== 0 && ht !== null) {
          t = ht;
          var f = Or;
          t: switch (Mt) {
            case 1:
              (Mt = 0), (Or = null), Sa(e, t, f, 1);
              break;
            case 2:
              if (Ih(f)) {
                (Mt = 0), (Or = null), B0(t);
                break;
              }
              (t = function () {
                Mt === 2 && Tt === e && (Mt = 7), hn(e);
              }),
                f.then(t, t);
              break e;
            case 3:
              Mt = 7;
              break e;
            case 4:
              Mt = 5;
              break e;
            case 7:
              Ih(f) ? ((Mt = 0), (Or = null), B0(t)) : ((Mt = 0), (Or = null), Sa(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (ht.tag) {
                case 26:
                  g = ht.memoizedState;
                case 5:
                case 27:
                  var U = ht;
                  if (!g || am(g)) {
                    (Mt = 0), (Or = null);
                    var $ = U.sibling;
                    if ($ !== null) ht = $;
                    else {
                      var le = U.return;
                      le !== null ? ((ht = le), Hl(le)) : (ht = null);
                    }
                    break t;
                  }
              }
              (Mt = 0), (Or = null), Sa(e, t, f, 5);
              break;
            case 6:
              (Mt = 0), (Or = null), Sa(e, t, f, 6);
              break;
            case 8:
              Ef(), (qt = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        Jg();
        break;
      } catch (xe) {
        N0(e, xe);
      }
    while (!0);
    return (wn = Ui = null), (E.H = i), (E.A = l), (jt = r), ht !== null ? 0 : ((Tt = null), (pt = 0), fl(), qt);
  }
  function Jg() {
    for (; ht !== null && !pe(); ) M0(ht);
  }
  function M0(e) {
    var t = Jd(e.alternate, e, Un);
    (e.memoizedProps = e.pendingProps), t === null ? Hl(e) : (ht = t);
  }
  function B0(e) {
    var t = e,
      r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Yd(r, t, t.pendingProps, t.type, void 0, pt);
        break;
      case 11:
        t = Yd(r, t, t.pendingProps, t.type.render, t.ref, pt);
        break;
      case 5:
        Oc(t);
      default:
        E0(r, t), (t = ht = b0(t, Un)), (t = Jd(r, t, Un));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Hl(e) : (ht = t);
  }
  function Sa(e, t, r, i) {
    (wn = Ui = null), Oc(t), (la = null), (Qa = 0);
    var l = t.return;
    try {
      if (Ig(e, l, t, r, pt)) {
        (qt = 1), Bl(e, Ir(r, e.current)), (ht = null);
        return;
      }
    } catch (f) {
      if (l !== null) throw ((ht = l), f);
      (qt = 1), Bl(e, Ir(r, e.current)), (ht = null);
      return;
    }
    t.flags & 32768
      ? (vt || i === 1
          ? (e = !0)
          : ga || (pt & 536870912) !== 0
            ? (e = !1)
            : ((Bn = e = !0),
              (i === 2 || i === 3 || i === 6) && ((i = Gr.current), i !== null && i.tag === 13 && (i.flags |= 16384))),
        U0(t, e))
      : Hl(t);
  }
  function Hl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        U0(t, Bn);
        return;
      }
      e = t.return;
      var r = Vg(t.alternate, t, Un);
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
    qt === 0 && (qt = 5);
  }
  function U0(e, t) {
    do {
      var r = Yg(e.alternate, e);
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
    (qt = 6), (ht = null);
  }
  function R0(e, t, r, i, l, f, g, U, $, le) {
    var xe = E.T,
      Te = A.p;
    try {
      (A.p = 2), (E.T = null), Wg(e, t, r, i, Te, l, f, g, U, $, le);
    } finally {
      (E.T = xe), (A.p = Te);
    }
  }
  function Wg(e, t, r, i, l, f, g, U) {
    do xa();
    while (ki !== null);
    if ((jt & 6) !== 0) throw Error(s(327));
    var $ = e.finishedWork;
    if (((i = e.finishedLanes), $ === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), $ === e.current)) throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0), (e.cancelPendingCommit = null);
    var le = $.lanes | $.childLanes;
    if (
      ((le |= hc),
      $o(e, i, le, f, g, U),
      e === Tt && ((ht = Tt = null), (pt = 0)),
      (($.subtreeFlags & 10256) === 0 && ($.flags & 10256) === 0) ||
        Il ||
        ((Il = !0),
        (vf = le),
        (bf = r),
        r1(d, function () {
          return xa(), null;
        })),
      (r = ($.flags & 15990) !== 0),
      ($.subtreeFlags & 15990) !== 0 || r
        ? ((r = E.T),
          (E.T = null),
          (f = A.p),
          (A.p = 2),
          (g = jt),
          (jt |= 4),
          Hg(e, $),
          h0($, e),
          Eg(kf, e.containerInfo),
          (Pl = !!Cf),
          (kf = Cf = null),
          (e.current = $),
          s0(e, $.alternate, $),
          ge(),
          (jt = g),
          (A.p = f),
          (E.T = r))
        : (e.current = $),
      Il ? ((Il = !1), (ki = e), (du = i)) : D0(e, le),
      (le = e.pendingLanes),
      le === 0 && (ii = null),
      Ee($.stateNode),
      hn(e),
      t !== null)
    )
      for (l = e.onRecoverableError, $ = 0; $ < t.length; $++) (le = t[$]), l(le.value, { componentStack: le.stack });
    return (
      (du & 3) !== 0 && xa(),
      (le = e.pendingLanes),
      (i & 4194218) !== 0 && (le & 42) !== 0 ? (e === Sf ? mu++ : ((mu = 0), (Sf = e))) : (mu = 0),
      pu(0),
      null
    );
  }
  function D0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ja(t)));
  }
  function xa() {
    if (ki !== null) {
      var e = ki,
        t = vf;
      vf = 0;
      var r = Ku(du),
        i = E.T,
        l = A.p;
      try {
        if (((A.p = 32 > r ? 32 : r), (E.T = null), ki === null)) var f = !1;
        else {
          (r = bf), (bf = null);
          var g = ki,
            U = du;
          if (((ki = null), (du = 0), (jt & 6) !== 0)) throw Error(s(331));
          var $ = jt;
          if (
            ((jt |= 4),
            g0(g.current),
            m0(g, g.current, U, r),
            (jt = $),
            pu(0, !1),
            se && typeof se.onPostCommitFiberRoot == 'function')
          )
            try {
              se.onPostCommitFiberRoot(k, g);
            } catch {}
          f = !0;
        }
        return f;
      } finally {
        (A.p = l), (E.T = i), D0(e, t);
      }
    }
    return !1;
  }
  function j0(e, t, r) {
    (t = Ir(r, t)), (t = Hc(e.stateNode, t, 2)), (e = Wn(e, t, 2)), e !== null && (Ot(e, 2), hn(e));
  }
  function Nt(e, t, r) {
    if (e.tag === 3) j0(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          j0(t, e, r);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof i.componentDidCatch == 'function' && (ii === null || !ii.has(i)))
          ) {
            (e = Ir(r, e)), (r = qd(2)), (i = Wn(t, r, 2)), i !== null && (zd(r, i, t, e), Ot(i, 2), hn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Af(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Xg();
      var l = new Set();
      i.set(t, l);
    } else (l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l));
    l.has(r) || ((mf = !0), l.add(r), (e = Pg.bind(null, e, t, r)), t.then(e, e));
  }
  function Pg(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      Tt === e &&
        (pt & r) === r &&
        (qt === 4 || (qt === 3 && (pt & 62914560) === pt && 300 > Me() - gf) ? (jt & 2) === 0 && ba(e, 0) : (pf |= r),
        va === pt && (va = 0)),
      hn(e);
  }
  function C0(e, t) {
    t === 0 && (t = Zi()), (e = Vn(e, t)), e !== null && (Ot(e, t), hn(e));
  }
  function e1(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), C0(e, r);
  }
  function t1(e, t) {
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
    i !== null && i.delete(t), C0(e, r);
  }
  function r1(e, t) {
    return L(e, t);
  }
  var Gl = null,
    Ea = null,
    Nf = !1,
    Fl = !1,
    Of = !1,
    qi = 0;
  function hn(e) {
    e !== Ea && e.next === null && (Ea === null ? (Gl = Ea = e) : (Ea = Ea.next = e)),
      (Fl = !0),
      Nf || ((Nf = !0), i1(n1));
  }
  function pu(e, t) {
    if (!Of && Fl) {
      Of = !0;
      do
        for (var r = !1, i = Gl; i !== null; ) {
          if (e !== 0) {
            var l = i.pendingLanes;
            if (l === 0) var f = 0;
            else {
              var g = i.suspendedLanes,
                U = i.pingedLanes;
              (f = (1 << (31 - Ce(42 | e) + 1)) - 1),
                (f &= l & ~(g & ~U)),
                (f = f & 201326677 ? (f & 201326677) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((r = !0), z0(i, f));
          } else (f = pt), (f = nt(i, i === Tt ? f : 0)), (f & 3) === 0 || st(i, f) || ((r = !0), z0(i, f));
          i = i.next;
        }
      while (r);
      Of = !1;
    }
  }
  function n1() {
    Fl = Nf = !1;
    var e = 0;
    qi !== 0 && (h1() && (e = qi), (qi = 0));
    for (var t = Me(), r = null, i = Gl; i !== null; ) {
      var l = i.next,
        f = k0(i, t);
      f === 0
        ? ((i.next = null), r === null ? (Gl = l) : (r.next = l), l === null && (Ea = r))
        : ((r = i), (e !== 0 || (f & 3) !== 0) && (Fl = !0)),
        (i = l);
    }
    pu(e);
  }
  function k0(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var g = 31 - Ce(f),
        U = 1 << g,
        $ = l[g];
      $ === -1 ? ((U & r) === 0 || (U & i) !== 0) && (l[g] = Rt(U, t)) : $ <= t && (e.expiredLanes |= U), (f &= ~U);
    }
    if (
      ((t = Tt),
      (r = pt),
      (r = nt(e, e === t ? r : 0)),
      (i = e.callbackNode),
      r === 0 || (e === t && Mt === 2) || e.cancelPendingCommit !== null)
    )
      return i !== null && i !== null && J(i), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((r & 3) === 0 || st(e, r)) {
      if (((t = r & -r), t === e.callbackPriority)) return t;
      switch ((i !== null && J(i), Ku(r))) {
        case 2:
        case 8:
          r = b;
          break;
        case 32:
          r = d;
          break;
        case 268435456:
          r = H;
          break;
        default:
          r = d;
      }
      return (i = q0.bind(null, e)), (r = L(r, i)), (e.callbackPriority = t), (e.callbackNode = r), t;
    }
    return i !== null && i !== null && J(i), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function q0(e, t) {
    var r = e.callbackNode;
    if (xa() && e.callbackNode !== r) return null;
    var i = pt;
    return (
      (i = nt(e, e === Tt ? i : 0)),
      i === 0
        ? null
        : (w0(e, i, t), k0(e, Me()), e.callbackNode != null && e.callbackNode === r ? q0.bind(null, e) : null)
    );
  }
  function z0(e, t) {
    if (xa()) return null;
    w0(e, t, !0);
  }
  function i1(e) {
    m1(function () {
      (jt & 6) !== 0 ? L(tt, e) : e();
    });
  }
  function Tf() {
    return qi === 0 && (qi = fr()), qi;
  }
  function I0(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : nl('' + e);
  }
  function L0(e, t) {
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
  function a1(e, t, r, i, l) {
    if (t === 'submit' && r && r.stateNode === l) {
      var f = I0((l[ir] || null).action),
        g = i.submitter;
      g &&
        ((t = (t = g[ir] || null) ? I0(t.formAction) : g.getAttribute('formAction')),
        t !== null && ((f = t), (g = null)));
      var U = new ll('action', 'action', null, i, l);
      e.push({
        event: U,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (qi !== 0) {
                  var $ = g ? L0(l, g) : new FormData(l);
                  kc(r, { pending: !0, data: $, method: l.method, action: f }, null, $);
                }
              } else
                typeof f == 'function' &&
                  (U.preventDefault(),
                  ($ = g ? L0(l, g) : new FormData(l)),
                  kc(r, { pending: !0, data: $, method: l.method, action: f }, f, $));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Mf = 0; Mf < Rh.length; Mf++) {
    var Bf = Rh[Mf],
      u1 = Bf.toLowerCase(),
      l1 = Bf[0].toUpperCase() + Bf.slice(1);
    Wr(u1, 'on' + l1);
  }
  Wr(Oh, 'onAnimationEnd'),
    Wr(Th, 'onAnimationIteration'),
    Wr(Mh, 'onAnimationStart'),
    Wr('dblclick', 'onDoubleClick'),
    Wr('focusin', 'onFocus'),
    Wr('focusout', 'onBlur'),
    Wr(wg, 'onTransitionRun'),
    Wr(Ag, 'onTransitionStart'),
    Wr(Ng, 'onTransitionCancel'),
    Wr(Bh, 'onTransitionEnd'),
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
    s1 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(yu));
  function H0(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r],
        l = i.event;
      i = i.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var U = i[g],
              $ = U.instance,
              le = U.currentTarget;
            if (((U = U.listener), $ !== f && l.isPropagationStopped())) break e;
            (f = U), (l.currentTarget = le);
            try {
              f(l);
            } catch (xe) {
              Ml(xe);
            }
            (l.currentTarget = null), (f = $);
          }
        else
          for (g = 0; g < i.length; g++) {
            if (
              ((U = i[g]),
              ($ = U.instance),
              (le = U.currentTarget),
              (U = U.listener),
              $ !== f && l.isPropagationStopped())
            )
              break e;
            (f = U), (l.currentTarget = le);
            try {
              f(l);
            } catch (xe) {
              Ml(xe);
            }
            (l.currentTarget = null), (f = $);
          }
      }
    }
  }
  function mt(e, t) {
    var r = t[Da];
    r === void 0 && (r = t[Da] = new Set());
    var i = e + '__bubble';
    r.has(i) || (G0(t, e, 2, !1), r.add(i));
  }
  function Uf(e, t, r) {
    var i = 0;
    t && (i |= 4), G0(r, e, i, t);
  }
  var Vl = '_reactListening' + Math.random().toString(36).slice(2);
  function Rf(e) {
    if (!e[Vl]) {
      (e[Vl] = !0),
        ot.forEach(function (r) {
          r !== 'selectionchange' && (s1.has(r) || Uf(r, !1, e), Uf(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vl] || ((t[Vl] = !0), Uf('selectionchange', !1, t));
    }
  }
  function G0(e, t, r, i) {
    switch (om(t)) {
      case 2:
        var l = j1;
        break;
      case 8:
        l = C1;
        break;
      default:
        l = Yf;
    }
    (r = l.bind(null, t, r, e)),
      (l = void 0),
      !Ps || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      i
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
          ? e.addEventListener(t, r, { passive: l })
          : e.addEventListener(t, r, !1);
  }
  function Df(e, t, r, i, l) {
    var f = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var U = i.stateNode.containerInfo;
          if (U === l || (U.nodeType === 8 && U.parentNode === l)) break;
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
          for (; U !== null; ) {
            if (((g = dt(U)), g === null)) return;
            if ((($ = g.tag), $ === 5 || $ === 6 || $ === 26 || $ === 27)) {
              i = f = g;
              continue e;
            }
            U = U.parentNode;
          }
        }
        i = i.return;
      }
    nh(function () {
      var le = f,
        xe = Js(r),
        Te = [];
      e: {
        var ye = Uh.get(e);
        if (ye !== void 0) {
          var Se = ll,
            Ze = e;
          switch (e) {
            case 'keypress':
              if (al(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              Se = tg;
              break;
            case 'focusin':
              (Ze = 'focus'), (Se = nc);
              break;
            case 'focusout':
              (Ze = 'blur'), (Se = nc);
              break;
            case 'beforeblur':
            case 'afterblur':
              Se = nc;
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
              Se = uh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Se = Fy;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Se = ig;
              break;
            case Oh:
            case Th:
            case Mh:
              Se = $y;
              break;
            case Bh:
              Se = ug;
              break;
            case 'scroll':
            case 'scrollend':
              Se = Hy;
              break;
            case 'wheel':
              Se = sg;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Se = Zy;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Se = sh;
              break;
            case 'toggle':
            case 'beforetoggle':
              Se = fg;
          }
          var rt = (t & 4) !== 0,
            zt = !rt && (e === 'scroll' || e === 'scrollend'),
            oe = rt ? (ye !== null ? ye + 'Capture' : null) : ye;
          rt = [];
          for (var ae = le, he; ae !== null; ) {
            var Ae = ae;
            if (
              ((he = Ae.stateNode),
              (Ae = Ae.tag),
              (Ae !== 5 && Ae !== 26 && Ae !== 27) ||
                he === null ||
                oe === null ||
                ((Ae = Ca(ae, oe)), Ae != null && rt.push(gu(ae, Ae, he))),
              zt)
            )
              break;
            ae = ae.return;
          }
          0 < rt.length && ((ye = new Se(ye, Ze, null, r, xe)), Te.push({ event: ye, listeners: rt }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((ye = e === 'mouseover' || e === 'pointerover'),
            (Se = e === 'mouseout' || e === 'pointerout'),
            ye && r !== Ks && (Ze = r.relatedTarget || r.fromElement) && (dt(Ze) || Ze[Hn]))
          )
            break e;
          if (
            (Se || ye) &&
            ((ye = xe.window === xe ? xe : (ye = xe.ownerDocument) ? ye.defaultView || ye.parentWindow : window),
            Se
              ? ((Ze = r.relatedTarget || r.toElement),
                (Se = le),
                (Ze = Ze ? dt(Ze) : null),
                Ze !== null &&
                  ((zt = I(Ze)), (rt = Ze.tag), Ze !== zt || (rt !== 5 && rt !== 27 && rt !== 6)) &&
                  (Ze = null))
              : ((Se = null), (Ze = le)),
            Se !== Ze)
          ) {
            if (
              ((rt = uh),
              (Ae = 'onMouseLeave'),
              (oe = 'onMouseEnter'),
              (ae = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((rt = sh), (Ae = 'onPointerLeave'), (oe = 'onPointerEnter'), (ae = 'pointer')),
              (zt = Se == null ? ye : vi(Se)),
              (he = Ze == null ? ye : vi(Ze)),
              (ye = new rt(Ae, ae + 'leave', Se, r, xe)),
              (ye.target = zt),
              (ye.relatedTarget = he),
              (Ae = null),
              dt(xe) === le &&
                ((rt = new rt(oe, ae + 'enter', Ze, r, xe)), (rt.target = he), (rt.relatedTarget = zt), (Ae = rt)),
              (zt = Ae),
              Se && Ze)
            )
              t: {
                for (rt = Se, oe = Ze, ae = 0, he = rt; he; he = _a(he)) ae++;
                for (he = 0, Ae = oe; Ae; Ae = _a(Ae)) he++;
                for (; 0 < ae - he; ) (rt = _a(rt)), ae--;
                for (; 0 < he - ae; ) (oe = _a(oe)), he--;
                for (; ae--; ) {
                  if (rt === oe || (oe !== null && rt === oe.alternate)) break t;
                  (rt = _a(rt)), (oe = _a(oe));
                }
                rt = null;
              }
            else rt = null;
            Se !== null && F0(Te, ye, Se, rt, !1), Ze !== null && zt !== null && F0(Te, zt, Ze, rt, !0);
          }
        }
        e: {
          if (
            ((ye = le ? vi(le) : window),
            (Se = ye.nodeName && ye.nodeName.toLowerCase()),
            Se === 'select' || (Se === 'input' && ye.type === 'file'))
          )
            var Xe = yh;
          else if (mh(ye))
            if (gh) Xe = Sg;
            else {
              Xe = vg;
              var ct = gg;
            }
          else
            (Se = ye.nodeName),
              !Se || Se.toLowerCase() !== 'input' || (ye.type !== 'checkbox' && ye.type !== 'radio')
                ? le && Qs(le.elementType) && (Xe = yh)
                : (Xe = bg);
          if (Xe && (Xe = Xe(e, le))) {
            ph(Te, Xe, r, xe);
            break e;
          }
          ct && ct(e, ye, le),
            e === 'focusout' &&
              le &&
              ye.type === 'number' &&
              le.memoizedProps.value != null &&
              Zs(ye, 'number', ye.value);
        }
        switch (((ct = le ? vi(le) : window), e)) {
          case 'focusin':
            (mh(ct) || ct.contentEditable === 'true') && ((ta = ct), (cc = le), (Fa = null));
            break;
          case 'focusout':
            Fa = cc = ta = null;
            break;
          case 'mousedown':
            fc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (fc = !1), Ah(Te, r, xe);
            break;
          case 'selectionchange':
            if (_g) break;
          case 'keydown':
          case 'keyup':
            Ah(Te, r, xe);
        }
        var Qe;
        if (ac)
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
            ? hh(e, r) && (et = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (et = 'onCompositionStart');
        et &&
          (ch &&
            r.locale !== 'ko' &&
            (ea || et !== 'onCompositionStart'
              ? et === 'onCompositionEnd' && ea && (Qe = ih())
              : ((Fn = xe), (ec = 'value' in Fn ? Fn.value : Fn.textContent), (ea = !0))),
          (ct = Yl(le, et)),
          0 < ct.length &&
            ((et = new lh(et, e, null, r, xe)),
            Te.push({ event: et, listeners: ct }),
            Qe ? (et.data = Qe) : ((Qe = dh(r)), Qe !== null && (et.data = Qe)))),
          (Qe = hg ? dg(e, r) : mg(e, r)) &&
            ((et = Yl(le, 'onBeforeInput')),
            0 < et.length &&
              ((ct = new lh('onBeforeInput', 'beforeinput', null, r, xe)),
              Te.push({ event: ct, listeners: et }),
              (ct.data = Qe))),
          a1(Te, e, le, r, xe);
      }
      H0(Te, t);
    });
  }
  function gu(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Yl(e, t) {
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
  function F0(e, t, r, i, l) {
    for (var f = t._reactName, g = []; r !== null && r !== i; ) {
      var U = r,
        $ = U.alternate,
        le = U.stateNode;
      if (((U = U.tag), $ !== null && $ === i)) break;
      (U !== 5 && U !== 26 && U !== 27) ||
        le === null ||
        (($ = le),
        l
          ? ((le = Ca(r, f)), le != null && g.unshift(gu(r, le, $)))
          : l || ((le = Ca(r, f)), le != null && g.push(gu(r, le, $)))),
        (r = r.return);
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var c1 = /\r\n?/g,
    f1 = /\u0000|\uFFFD/g;
  function V0(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        c1,
        `
`
      )
      .replace(f1, '');
  }
  function Y0(e, t) {
    return (t = V0(t)), V0(e) === t;
  }
  function $l() {}
  function _t(e, t, r, i, l, f) {
    switch (r) {
      case 'children':
        typeof i == 'string'
          ? t === 'body' || (t === 'textarea' && i === '') || Ji(e, i)
          : (typeof i == 'number' || typeof i == 'bigint') && t !== 'body' && Ji(e, '' + i);
        break;
      case 'className':
        el(e, 'class', i);
        break;
      case 'tabIndex':
        el(e, 'tabindex', i);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        el(e, r, i);
        break;
      case 'style':
        th(e, i, f);
        break;
      case 'data':
        if (t !== 'object') {
          el(e, 'data', i);
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
        (i = nl('' + i)), e.setAttribute(r, i);
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
        (i = nl('' + i)), e.setAttribute(r, i);
        break;
      case 'onClick':
        i != null && (e.onclick = $l);
        break;
      case 'onScroll':
        i != null && mt('scroll', e);
        break;
      case 'onScrollEnd':
        i != null && mt('scrollend', e);
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
        (r = nl('' + i)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', r);
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
        mt('beforetoggle', e), mt('toggle', e), Pu(e, 'popover', i);
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
        Pu(e, 'is', i);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < r.length) || (r[0] !== 'o' && r[0] !== 'O') || (r[1] !== 'n' && r[1] !== 'N')) &&
          ((r = Iy.get(r) || r), Pu(e, r, i));
    }
  }
  function jf(e, t, r, i, l, f) {
    switch (r) {
      case 'style':
        th(e, i, f);
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
        i != null && mt('scroll', e);
        break;
      case 'onScrollEnd':
        i != null && mt('scrollend', e);
        break;
      case 'onClick':
        i != null && (e.onclick = $l);
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
            r in e ? (e[r] = i) : i === !0 ? e.setAttribute(r, '') : Pu(e, r, i);
          }
    }
  }
  function nr(e, t, r) {
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
        mt('error', e), mt('load', e);
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
        mt('invalid', e);
        var U = (f = g = l = null),
          $ = null,
          le = null;
        for (i in r)
          if (r.hasOwnProperty(i)) {
            var xe = r[i];
            if (xe != null)
              switch (i) {
                case 'name':
                  l = xe;
                  break;
                case 'type':
                  g = xe;
                  break;
                case 'checked':
                  $ = xe;
                  break;
                case 'defaultChecked':
                  le = xe;
                  break;
                case 'value':
                  f = xe;
                  break;
                case 'defaultValue':
                  U = xe;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (xe != null) throw Error(s(137, t));
                  break;
                default:
                  _t(e, t, i, xe, r, null);
              }
          }
        Jo(e, f, U, $, le, g, l, !1), tl(e);
        return;
      case 'select':
        mt('invalid', e), (i = g = f = null);
        for (l in r)
          if (r.hasOwnProperty(l) && ((U = r[l]), U != null))
            switch (l) {
              case 'value':
                f = U;
                break;
              case 'defaultValue':
                g = U;
                break;
              case 'multiple':
                i = U;
              default:
                _t(e, t, l, U, r, null);
            }
        (t = f), (r = g), (e.multiple = !!i), t != null ? Ki(e, !!i, t, !1) : r != null && Ki(e, !!i, r, !0);
        return;
      case 'textarea':
        mt('invalid', e), (f = l = i = null);
        for (g in r)
          if (r.hasOwnProperty(g) && ((U = r[g]), U != null))
            switch (g) {
              case 'value':
                i = U;
                break;
              case 'defaultValue':
                l = U;
                break;
              case 'children':
                f = U;
                break;
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(s(91));
                break;
              default:
                _t(e, t, g, U, r, null);
            }
        Po(e, i, l, f), tl(e);
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
        mt('cancel', e), mt('close', e);
        break;
      case 'iframe':
      case 'object':
        mt('load', e);
        break;
      case 'video':
      case 'audio':
        for (i = 0; i < yu.length; i++) mt(yu[i], e);
        break;
      case 'image':
        mt('error', e), mt('load', e);
        break;
      case 'details':
        mt('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        mt('error', e), mt('load', e);
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
        if (Qs(t)) {
          for (xe in r) r.hasOwnProperty(xe) && ((i = r[xe]), i !== void 0 && jf(e, t, xe, i, r, void 0));
          return;
        }
    }
    for (U in r) r.hasOwnProperty(U) && ((i = r[U]), i != null && _t(e, t, U, i, r, null));
  }
  function o1(e, t, r, i) {
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
          U = null,
          $ = null,
          le = null,
          xe = null;
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
        for (var ye in i) {
          var Se = i[ye];
          if (((Te = r[ye]), i.hasOwnProperty(ye) && (Se != null || Te != null)))
            switch (ye) {
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
                xe = Se;
                break;
              case 'value':
                g = Se;
                break;
              case 'defaultValue':
                U = Se;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Se != null) throw Error(s(137, t));
                break;
              default:
                Se !== Te && _t(e, t, ye, Se, i, Te);
            }
        }
        Xs(e, g, U, $, le, xe, f, l);
        return;
      case 'select':
        Se = g = U = ye = null;
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
                ye = f;
                break;
              case 'defaultValue':
                U = f;
                break;
              case 'multiple':
                g = f;
              default:
                f !== $ && _t(e, t, l, f, i, $);
            }
        (t = U),
          (r = g),
          (i = Se),
          ye != null ? Ki(e, !!r, ye, !1) : !!i != !!r && (t != null ? Ki(e, !!r, t, !0) : Ki(e, !!r, r ? [] : '', !1));
        return;
      case 'textarea':
        Se = ye = null;
        for (U in r)
          if (((l = r[U]), r.hasOwnProperty(U) && l != null && !i.hasOwnProperty(U)))
            switch (U) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                _t(e, t, U, null, i, l);
            }
        for (g in i)
          if (((l = i[g]), (f = r[g]), i.hasOwnProperty(g) && (l != null || f != null)))
            switch (g) {
              case 'value':
                ye = l;
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
        Wo(e, ye, Se);
        return;
      case 'option':
        for (var Ze in r)
          if (((ye = r[Ze]), r.hasOwnProperty(Ze) && ye != null && !i.hasOwnProperty(Ze)))
            switch (Ze) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                _t(e, t, Ze, null, i, ye);
            }
        for ($ in i)
          if (((ye = i[$]), (Se = r[$]), i.hasOwnProperty($) && ye !== Se && (ye != null || Se != null)))
            switch ($) {
              case 'selected':
                e.selected = ye && typeof ye != 'function' && typeof ye != 'symbol';
                break;
              default:
                _t(e, t, $, ye, i, Se);
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
          (ye = r[rt]), r.hasOwnProperty(rt) && ye != null && !i.hasOwnProperty(rt) && _t(e, t, rt, null, i, ye);
        for (le in i)
          if (((ye = i[le]), (Se = r[le]), i.hasOwnProperty(le) && ye !== Se && (ye != null || Se != null)))
            switch (le) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (ye != null) throw Error(s(137, t));
                break;
              default:
                _t(e, t, le, ye, i, Se);
            }
        return;
      default:
        if (Qs(t)) {
          for (var zt in r)
            (ye = r[zt]), r.hasOwnProperty(zt) && ye !== void 0 && !i.hasOwnProperty(zt) && jf(e, t, zt, void 0, i, ye);
          for (xe in i)
            (ye = i[xe]),
              (Se = r[xe]),
              !i.hasOwnProperty(xe) || ye === Se || (ye === void 0 && Se === void 0) || jf(e, t, xe, ye, i, Se);
          return;
        }
    }
    for (var oe in r)
      (ye = r[oe]), r.hasOwnProperty(oe) && ye != null && !i.hasOwnProperty(oe) && _t(e, t, oe, null, i, ye);
    for (Te in i)
      (ye = i[Te]),
        (Se = r[Te]),
        !i.hasOwnProperty(Te) || ye === Se || (ye == null && Se == null) || _t(e, t, Te, ye, i, Se);
  }
  var Cf = null,
    kf = null;
  function Xl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function $0(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function X0(e, t) {
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
  function qf(e, t) {
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
  var zf = null;
  function h1() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === zf ? !1 : ((zf = e), !0)) : ((zf = null), !1);
  }
  var Z0 = typeof setTimeout == 'function' ? setTimeout : void 0,
    d1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Q0 = typeof Promise == 'function' ? Promise : void 0,
    m1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Q0 < 'u'
          ? function (e) {
              return Q0.resolve(null).then(e).catch(p1);
            }
          : Z0;
  function p1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function If(e, t) {
    var r = t,
      i = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === '/$')) {
          if (i === 0) {
            e.removeChild(l), Au(t);
            return;
          }
          i--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || i++;
      r = l;
    } while (r);
    Au(t);
  }
  function Lf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (((t = t.nextSibling), r.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Lf(r), ja(r);
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
  function y1(e, t, r, i) {
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
  function g1(e, t, r) {
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
  function K0(e) {
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
  function J0(e, t, r) {
    switch (((t = Xl(r)), e)) {
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
    W0 = new Set();
  function Zl(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
  }
  var Dn = A.d;
  A.d = { f: v1, r: b1, D: S1, C: x1, L: E1, m: _1, X: A1, S: w1, M: N1 };
  function v1() {
    var e = Dn.f(),
      t = Ll();
    return e || t;
  }
  function b1(e) {
    var t = Gn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Ad(t) : Dn.r(e);
  }
  var wa = typeof document > 'u' ? null : document;
  function P0(e, t, r) {
    var i = wa;
    if (i && typeof t == 'string' && t) {
      var l = qr(t);
      (l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof r == 'string' && (l += '[crossorigin="' + r + '"]'),
        W0.has(l) ||
          (W0.add(l),
          (e = { rel: e, crossOrigin: r, href: t }),
          i.querySelector(l) === null &&
            ((t = i.createElement('link')), nr(t, 'link', e), Je(t), i.head.appendChild(t)));
    }
  }
  function S1(e) {
    Dn.D(e), P0('dns-prefetch', e, null);
  }
  function x1(e, t) {
    Dn.C(e, t), P0('preconnect', e, t);
  }
  function E1(e, t, r) {
    Dn.L(e, t, r);
    var i = wa;
    if (i && e && t) {
      var l = 'link[rel="preload"][as="' + qr(t) + '"]';
      t === 'image' && r && r.imageSrcSet
        ? ((l += '[imagesrcset="' + qr(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == 'string' && (l += '[imagesizes="' + qr(r.imageSizes) + '"]'))
        : (l += '[href="' + qr(e) + '"]');
      var f = l;
      switch (t) {
        case 'style':
          f = Aa(e);
          break;
        case 'script':
          f = Na(e);
      }
      Xr.has(f) ||
        ((e = w({ rel: 'preload', href: t === 'image' && r && r.imageSrcSet ? void 0 : e, as: t }, r)),
        Xr.set(f, e),
        i.querySelector(l) !== null ||
          (t === 'style' && i.querySelector(vu(f))) ||
          (t === 'script' && i.querySelector(bu(f))) ||
          ((t = i.createElement('link')), nr(t, 'link', e), Je(t), i.head.appendChild(t)));
    }
  }
  function _1(e, t) {
    Dn.m(e, t);
    var r = wa;
    if (r && e) {
      var i = t && typeof t.as == 'string' ? t.as : 'script',
        l = 'link[rel="modulepreload"][as="' + qr(i) + '"][href="' + qr(e) + '"]',
        f = l;
      switch (i) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          f = Na(e);
      }
      if (!Xr.has(f) && ((e = w({ rel: 'modulepreload', href: e }, t)), Xr.set(f, e), r.querySelector(l) === null)) {
        switch (i) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (r.querySelector(bu(f))) return;
        }
        (i = r.createElement('link')), nr(i, 'link', e), Je(i), r.head.appendChild(i);
      }
    }
  }
  function w1(e, t, r) {
    Dn.S(e, t, r);
    var i = wa;
    if (i && e) {
      var l = K(i).hoistableStyles,
        f = Aa(e);
      t = t || 'default';
      var g = l.get(f);
      if (!g) {
        var U = { loading: 0, preload: null };
        if ((g = i.querySelector(vu(f)))) U.loading = 5;
        else {
          (e = w({ rel: 'stylesheet', href: e, 'data-precedence': t }, r)), (r = Xr.get(f)) && Hf(e, r);
          var $ = (g = i.createElement('link'));
          Je($),
            nr($, 'link', e),
            ($._p = new Promise(function (le, xe) {
              ($.onload = le), ($.onerror = xe);
            })),
            $.addEventListener('load', function () {
              U.loading |= 1;
            }),
            $.addEventListener('error', function () {
              U.loading |= 2;
            }),
            (U.loading |= 4),
            Ql(g, t, i);
        }
        (g = { type: 'stylesheet', instance: g, count: 1, state: U }), l.set(f, g);
      }
    }
  }
  function A1(e, t) {
    Dn.X(e, t);
    var r = wa;
    if (r && e) {
      var i = K(r).hoistableScripts,
        l = Na(e),
        f = i.get(l);
      f ||
        ((f = r.querySelector(bu(l))),
        f ||
          ((e = w({ src: e, async: !0 }, t)),
          (t = Xr.get(l)) && Gf(e, t),
          (f = r.createElement('script')),
          Je(f),
          nr(f, 'link', e),
          r.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        i.set(l, f));
    }
  }
  function N1(e, t) {
    Dn.M(e, t);
    var r = wa;
    if (r && e) {
      var i = K(r).hoistableScripts,
        l = Na(e),
        f = i.get(l);
      f ||
        ((f = r.querySelector(bu(l))),
        f ||
          ((e = w({ src: e, async: !0, type: 'module' }, t)),
          (t = Xr.get(l)) && Gf(e, t),
          (f = r.createElement('script')),
          Je(f),
          nr(f, 'link', e),
          r.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        i.set(l, f));
    }
  }
  function em(e, t, r, i) {
    var l = (l = ie.current) ? Zl(l) : null;
    if (!l) throw Error(s(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof r.precedence == 'string' && typeof r.href == 'string'
          ? ((t = Aa(r.href)),
            (r = K(l).hoistableStyles),
            (i = r.get(t)),
            i || ((i = { type: 'style', instance: null, count: 0, state: null }), r.set(t, i)),
            i)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (r.rel === 'stylesheet' && typeof r.href == 'string' && typeof r.precedence == 'string') {
          e = Aa(r.href);
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
                f || O1(l, e, r, g.state))),
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
            ? ((t = Na(r)),
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
  function Aa(e) {
    return 'href="' + qr(e) + '"';
  }
  function vu(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function tm(e) {
    return w({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function O1(e, t, r, i) {
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
        nr(t, 'link', r),
        Je(t),
        e.head.appendChild(t));
  }
  function Na(e) {
    return '[src="' + qr(e) + '"]';
  }
  function bu(e) {
    return 'script[async]' + e;
  }
  function rm(e, t, r) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var i = e.querySelector('style[data-href~="' + qr(r.href) + '"]');
          if (i) return (t.instance = i), Je(i), i;
          var l = w({}, r, { 'data-href': r.href, 'data-precedence': r.precedence, href: null, precedence: null });
          return (
            (i = (e.ownerDocument || e).createElement('style')),
            Je(i),
            nr(i, 'style', l),
            Ql(i, r.precedence, e),
            (t.instance = i)
          );
        case 'stylesheet':
          l = Aa(r.href);
          var f = e.querySelector(vu(l));
          if (f) return (t.state.loading |= 4), (t.instance = f), Je(f), f;
          (i = tm(r)), (l = Xr.get(l)) && Hf(i, l), (f = (e.ownerDocument || e).createElement('link')), Je(f);
          var g = f;
          return (
            (g._p = new Promise(function (U, $) {
              (g.onload = U), (g.onerror = $);
            })),
            nr(f, 'link', i),
            (t.state.loading |= 4),
            Ql(f, r.precedence, e),
            (t.instance = f)
          );
        case 'script':
          return (
            (f = Na(r.src)),
            (l = e.querySelector(bu(f)))
              ? ((t.instance = l), Je(l), l)
              : ((i = r),
                (l = Xr.get(f)) && ((i = w({}, r)), Gf(i, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement('script')),
                Je(l),
                nr(l, 'link', i),
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
        (t.state.loading & 4) === 0 &&
        ((i = t.instance), (t.state.loading |= 4), Ql(i, r.precedence, e));
    return t.instance;
  }
  function Ql(e, t, r) {
    for (
      var i = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        l = i.length ? i[i.length - 1] : null,
        f = l,
        g = 0;
      g < i.length;
      g++
    ) {
      var U = i[g];
      if (U.dataset.precedence === t) f = U;
      else if (f !== l) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = r.nodeType === 9 ? r.head : r), t.insertBefore(e, t.firstChild));
  }
  function Hf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Gf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Kl = null;
  function nm(e, t, r) {
    if (Kl === null) {
      var i = new Map(),
        l = (Kl = new Map());
      l.set(r, i);
    } else (l = Kl), (i = l.get(r)), i || ((i = new Map()), l.set(r, i));
    if (i.has(e)) return i;
    for (i.set(e, null), r = r.getElementsByTagName(e), l = 0; l < r.length; l++) {
      var f = r[l];
      if (
        !(f[gi] || f[ft] || (e === 'link' && f.getAttribute('rel') === 'stylesheet')) &&
        f.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var g = f.getAttribute(t) || '';
        g = e + g;
        var U = i.get(g);
        U ? U.push(f) : i.set(g, [f]);
      }
    }
    return i;
  }
  function im(e, t, r) {
    (e = e.ownerDocument || e), e.head.insertBefore(r, t === 'title' ? e.querySelector('head > title') : null);
  }
  function T1(e, t, r) {
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
  function am(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var Su = null;
  function M1() {}
  function B1(e, t, r) {
    if (Su === null) throw Error(s(475));
    var i = Su;
    if (
      t.type === 'stylesheet' &&
      (typeof r.media != 'string' || matchMedia(r.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var l = Aa(r.href),
          f = e.querySelector(vu(l));
        if (f) {
          (e = f._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (i.count++, (i = Jl.bind(i)), e.then(i, i)),
            (t.state.loading |= 4),
            (t.instance = f),
            Je(f);
          return;
        }
        (f = e.ownerDocument || e), (r = tm(r)), (l = Xr.get(l)) && Hf(r, l), (f = f.createElement('link')), Je(f);
        var g = f;
        (g._p = new Promise(function (U, $) {
          (g.onload = U), (g.onerror = $);
        })),
          nr(f, 'link', r),
          (t.instance = f);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (i.count++, (t = Jl.bind(i)), e.addEventListener('load', t), e.addEventListener('error', t));
    }
  }
  function U1() {
    if (Su === null) throw Error(s(475));
    var e = Su;
    return (
      e.stylesheets && e.count === 0 && Ff(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var r = setTimeout(function () {
              if ((e.stylesheets && Ff(e, e.stylesheets), e.unsuspend)) {
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
  function Jl() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Ff(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Wl = null;
  function Ff(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null && (e.count++, (Wl = new Map()), t.forEach(R1, e), (Wl = null), Jl.call(e));
  }
  function R1(e, t) {
    if (!(t.state.loading & 4)) {
      var r = Wl.get(e);
      if (r) var i = r.get(null);
      else {
        (r = new Map()), Wl.set(e, r);
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
        (i = Jl.bind(this)),
        l.addEventListener('load', i),
        l.addEventListener('error', i),
        f
          ? f.parentNode.insertBefore(l, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var xu = { $$typeof: O, Provider: null, Consumer: null, _currentValue: Ue, _currentValue2: Ue, _threadCount: 0 };
  function D1(e, t, r, i, l, f, g, U) {
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
      (this.formState = U),
      (this.incompleteTransitions = new Map());
  }
  function um(e, t, r, i, l, f, g, U, $, le, xe, Te) {
    return (
      (e = new D1(e, t, r, g, U, $, le, Te)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = Yr(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = Sc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: i, isDehydrated: r, cache: t }),
      ef(f),
      e
    );
  }
  function lm(e) {
    return e ? ((e = ia), e) : ia;
  }
  function sm(e, t, r, i, l, f) {
    (l = lm(l)),
      i.context === null ? (i.context = l) : (i.pendingContext = l),
      (i = Jn(t)),
      (i.payload = { element: r }),
      (f = f === void 0 ? null : f),
      f !== null && (i.callback = f),
      (r = Wn(e, i, t)),
      r !== null && (hr(r, e, t), iu(r, e, t));
  }
  function cm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Vf(e, t) {
    cm(e, t), (e = e.alternate) && cm(e, t);
  }
  function fm(e) {
    if (e.tag === 13) {
      var t = Vn(e, 67108864);
      t !== null && hr(t, e, 67108864), Vf(e, 67108864);
    }
  }
  var Pl = !0;
  function j1(e, t, r, i) {
    var l = E.T;
    E.T = null;
    var f = A.p;
    try {
      (A.p = 2), Yf(e, t, r, i);
    } finally {
      (A.p = f), (E.T = l);
    }
  }
  function C1(e, t, r, i) {
    var l = E.T;
    E.T = null;
    var f = A.p;
    try {
      (A.p = 8), Yf(e, t, r, i);
    } finally {
      (A.p = f), (E.T = l);
    }
  }
  function Yf(e, t, r, i) {
    if (Pl) {
      var l = $f(i);
      if (l === null) Df(e, t, i, es, r), hm(e, i);
      else if (q1(l, e, t, r, i)) i.stopPropagation();
      else if ((hm(e, i), t & 4 && -1 < k1.indexOf(e))) {
        for (; l !== null; ) {
          var f = Gn(l);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var g = Fe(f.pendingLanes);
                  if (g !== 0) {
                    var U = f;
                    for (U.pendingLanes |= 2, U.entangledLanes |= 2; g; ) {
                      var $ = 1 << (31 - Ce(g));
                      (U.entanglements[1] |= $), (g &= ~$);
                    }
                    hn(f), (jt & 6) === 0 && ((ql = Me() + 500), pu(0));
                  }
                }
                break;
              case 13:
                (U = Vn(f, 2)), U !== null && hr(U, f, 2), Ll(), Vf(f, 2);
            }
          if (((f = $f(i)), f === null && Df(e, t, i, es, r), f === l)) break;
          l = f;
        }
        l !== null && i.stopPropagation();
      } else Df(e, t, i, null, r);
    }
  }
  function $f(e) {
    return (e = Js(e)), Xf(e);
  }
  var es = null;
  function Xf(e) {
    if (((es = null), (e = dt(e)), e !== null)) {
      var t = I(e);
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
    return (es = e), null;
  }
  function om(e) {
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
        switch (qe()) {
          case tt:
            return 2;
          case b:
            return 8;
          case d:
          case p:
            return 32;
          case H:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zf = !1,
    ai = null,
    ui = null,
    li = null,
    Eu = new Map(),
    _u = new Map(),
    si = [],
    k1 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function hm(e, t) {
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
        Eu.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        _u.delete(t.pointerId);
    }
  }
  function wu(e, t, r, i, l, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = { blockedOn: t, domEventName: r, eventSystemFlags: i, nativeEvent: f, targetContainers: [l] }),
        t !== null && ((t = Gn(t)), t !== null && fm(t)),
        e)
      : ((e.eventSystemFlags |= i), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function q1(e, t, r, i, l) {
    switch (t) {
      case 'focusin':
        return (ai = wu(ai, e, t, r, i, l)), !0;
      case 'dragenter':
        return (ui = wu(ui, e, t, r, i, l)), !0;
      case 'mouseover':
        return (li = wu(li, e, t, r, i, l)), !0;
      case 'pointerover':
        var f = l.pointerId;
        return Eu.set(f, wu(Eu.get(f) || null, e, t, r, i, l)), !0;
      case 'gotpointercapture':
        return (f = l.pointerId), _u.set(f, wu(_u.get(f) || null, e, t, r, i, l)), !0;
    }
    return !1;
  }
  function dm(e) {
    var t = dt(e.target);
    if (t !== null) {
      var r = I(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = ue(r)), t !== null)) {
            (e.blockedOn = t),
              Vs(e.priority, function () {
                if (r.tag === 13) {
                  var i = Tr(),
                    l = Vn(r, i);
                  l !== null && hr(l, r, i), Vf(r, i);
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
  function ts(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = $f(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        (Ks = i), r.target.dispatchEvent(i), (Ks = null);
      } else return (t = Gn(r)), t !== null && fm(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function mm(e, t, r) {
    ts(e) && r.delete(t);
  }
  function z1() {
    (Zf = !1),
      ai !== null && ts(ai) && (ai = null),
      ui !== null && ts(ui) && (ui = null),
      li !== null && ts(li) && (li = null),
      Eu.forEach(mm),
      _u.forEach(mm);
  }
  function rs(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), Zf || ((Zf = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, z1)));
  }
  var ns = null;
  function pm(e) {
    ns !== e &&
      ((ns = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        ns === e && (ns = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t],
            i = e[t + 1],
            l = e[t + 2];
          if (typeof i != 'function') {
            if (Xf(i || r) === null) continue;
            break;
          }
          var f = Gn(r);
          f !== null && (e.splice(t, 3), (t -= 3), kc(f, { pending: !0, data: l, method: r.method, action: i }, i, l));
        }
      }));
  }
  function Au(e) {
    function t($) {
      return rs($, e);
    }
    ai !== null && rs(ai, e), ui !== null && rs(ui, e), li !== null && rs(li, e), Eu.forEach(t), _u.forEach(t);
    for (var r = 0; r < si.length; r++) {
      var i = si[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < si.length && ((r = si[0]), r.blockedOn === null); ) dm(r), r.blockedOn === null && si.shift();
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (i = 0; i < r.length; i += 3) {
        var l = r[i],
          f = r[i + 1],
          g = l[ir] || null;
        if (typeof f == 'function') g || pm(r);
        else if (g) {
          var U = null;
          if (f && f.hasAttribute('formAction')) {
            if (((l = f), (g = f[ir] || null))) U = g.formAction;
            else if (Xf(l) !== null) continue;
          } else U = g.action;
          typeof U == 'function' ? (r[i + 1] = U) : (r.splice(i, 3), (i -= 3)), pm(r);
        }
      }
  }
  function Qf(e) {
    this._internalRoot = e;
  }
  (is.prototype.render = Qf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var r = t.current,
        i = Tr();
      sm(r, i, e, t, null, null);
    }),
    (is.prototype.unmount = Qf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && xa(), sm(e.current, 2, null, e, null, null), Ll(), (t[Hn] = null);
        }
      });
  function is(e) {
    this._internalRoot = e;
  }
  is.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < si.length && t !== 0 && t < si[r].priority; r++);
      si.splice(r, 0, e), r === 0 && dm(e);
    }
  };
  var ym = a.version;
  if (ym !== '19.0.0') throw Error(s(527, ym, '19.0.0'));
  A.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ? Error(s(188)) : ((e = Object.keys(e).join(',')), Error(s(268, e)));
    return (e = ee(t)), (e = e !== null ? be(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var I1 = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: E,
    findFiberByHostInstance: dt,
    reconcilerVersion: '19.0.0'
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!as.isDisabled && as.supportsFiber)
      try {
        (k = as.inject(I1)), (se = as);
      } catch {}
  }
  return (
    (Ou.createRoot = function (e, t) {
      if (!c(e)) throw Error(s(299));
      var r = !1,
        i = '',
        l = Dd,
        f = jd,
        g = Cd,
        U = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (U = t.unstable_transitionCallbacks)),
        (t = um(e, 1, !1, null, null, r, i, l, f, g, U, null)),
        (e[Hn] = t.current),
        Rf(e.nodeType === 8 ? e.parentNode : e),
        new Qf(t)
      );
    }),
    (Ou.hydrateRoot = function (e, t, r) {
      if (!c(e)) throw Error(s(299));
      var i = !1,
        l = '',
        f = Dd,
        g = jd,
        U = Cd,
        $ = null,
        le = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (i = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (g = r.onCaughtError),
          r.onRecoverableError !== void 0 && (U = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 && ($ = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (le = r.formState)),
        (t = um(e, 1, !0, t, r ?? null, i, l, f, g, U, $, le)),
        (t.context = lm(null)),
        (r = t.current),
        (i = Tr()),
        (l = Jn(i)),
        (l.callback = null),
        Wn(r, l, i),
        (t.current.lanes = i),
        Ot(t, i),
        hn(t),
        (e[Hn] = t.current),
        Rf(e),
        new is(t)
      );
    }),
    (Ou.version = '19.0.0'),
    Ou
  );
}
var Om;
function J1() {
  if (Om) return Wf.exports;
  Om = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (Wf.exports = K1()), Wf.exports;
}
var W1 = J1();
const P1 = Iu(W1);
var ev = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  ro = Math.ceil,
  Qr = Math.floor,
  br = '[BigNumber Error] ',
  Tm = br + 'Number primitive has more than 15 significant digits: ',
  rn = 1e14,
  it = 14,
  Mm = 9007199254740991,
  no = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  fi = 1e7,
  Mr = 1e9;
function Dp(n) {
  var a,
    u,
    s,
    c = (Q.prototype = { constructor: Q, toString: null, valueOf: null }),
    m = new Q(1),
    o = 20,
    h = 4,
    S = -7,
    x = 21,
    B = -1e7,
    v = 1e7,
    _ = !1,
    O = 1,
    W = 0,
    ce = {
      prefix: '',
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ',',
      decimalSeparator: '.',
      fractionGroupSize: 0,
      fractionGroupSeparator: ' ',
      suffix: ''
    },
    de = '0123456789abcdefghijklmnopqrstuvwxyz',
    ve = !0;
  function Q(y, E) {
    var w,
      F,
      V,
      Y,
      X,
      C,
      T,
      G,
      I = this;
    if (!(I instanceof Q)) return new Q(y, E);
    if (E == null) {
      if (y && y._isBigNumber === !0) {
        (I.s = y.s),
          !y.c || y.e > v ? (I.c = I.e = null) : y.e < B ? (I.c = [(I.e = 0)]) : ((I.e = y.e), (I.c = y.c.slice()));
        return;
      }
      if ((C = typeof y == 'number') && y * 0 == 0) {
        if (((I.s = 1 / y < 0 ? ((y = -y), -1) : 1), y === ~~y)) {
          for (Y = 0, X = y; X >= 10; X /= 10, Y++);
          Y > v ? (I.c = I.e = null) : ((I.e = Y), (I.c = [y]));
          return;
        }
        G = String(y);
      } else {
        if (!ev.test((G = String(y)))) return s(I, G, C);
        I.s = G.charCodeAt(0) == 45 ? ((G = G.slice(1)), -1) : 1;
      }
      (Y = G.indexOf('.')) > -1 && (G = G.replace('.', '')),
        (X = G.search(/e/i)) > 0
          ? (Y < 0 && (Y = X), (Y += +G.slice(X + 1)), (G = G.substring(0, X)))
          : Y < 0 && (Y = G.length);
    } else {
      if ((Ct(E, 2, de.length, 'Base'), E == 10 && ve)) return (I = new Q(y)), we(I, o + I.e + 1, h);
      if (((G = String(y)), (C = typeof y == 'number'))) {
        if (y * 0 != 0) return s(I, G, C, E);
        if (((I.s = 1 / y < 0 ? ((G = G.slice(1)), -1) : 1), Q.DEBUG && G.replace(/^0\.0*|\./, '').length > 15))
          throw Error(Tm + y);
      } else I.s = G.charCodeAt(0) === 45 ? ((G = G.slice(1)), -1) : 1;
      for (w = de.slice(0, E), Y = X = 0, T = G.length; X < T; X++)
        if (w.indexOf((F = G.charAt(X))) < 0) {
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
          return s(I, String(y), C, E);
        }
      (C = !1), (G = u(G, E, 10, I.s)), (Y = G.indexOf('.')) > -1 ? (G = G.replace('.', '')) : (Y = G.length);
    }
    for (X = 0; G.charCodeAt(X) === 48; X++);
    for (T = G.length; G.charCodeAt(--T) === 48; );
    if ((G = G.slice(X, ++T))) {
      if (((T -= X), C && Q.DEBUG && T > 15 && (y > Mm || y !== Qr(y)))) throw Error(Tm + I.s * y);
      if ((Y = Y - X - 1) > v) I.c = I.e = null;
      else if (Y < B) I.c = [(I.e = 0)];
      else {
        if (((I.e = Y), (I.c = []), (X = (Y + 1) % it), Y < 0 && (X += it), X < T)) {
          for (X && I.c.push(+G.slice(0, X)), T -= it; X < T; ) I.c.push(+G.slice(X, (X += it)));
          X = it - (G = G.slice(X)).length;
        } else X -= T;
        for (; X--; G += '0');
        I.c.push(+G);
      }
    } else I.c = [(I.e = 0)];
  }
  (Q.clone = Dp),
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
        var E, w;
        if (y != null)
          if (typeof y == 'object') {
            if (
              (y.hasOwnProperty((E = 'DECIMAL_PLACES')) && ((w = y[E]), Ct(w, 0, Mr, E), (o = w)),
              y.hasOwnProperty((E = 'ROUNDING_MODE')) && ((w = y[E]), Ct(w, 0, 8, E), (h = w)),
              y.hasOwnProperty((E = 'EXPONENTIAL_AT')) &&
                ((w = y[E]),
                w && w.pop
                  ? (Ct(w[0], -1e9, 0, E), Ct(w[1], 0, Mr, E), (S = w[0]), (x = w[1]))
                  : (Ct(w, -1e9, Mr, E), (S = -(x = w < 0 ? -w : w)))),
              y.hasOwnProperty((E = 'RANGE')))
            )
              if (((w = y[E]), w && w.pop)) Ct(w[0], -1e9, -1, E), Ct(w[1], 1, Mr, E), (B = w[0]), (v = w[1]);
              else if ((Ct(w, -1e9, Mr, E), w)) B = -(v = w < 0 ? -w : w);
              else throw Error(br + E + ' cannot be zero: ' + w);
            if (y.hasOwnProperty((E = 'CRYPTO')))
              if (((w = y[E]), w === !!w))
                if (w)
                  if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) _ = w;
                  else throw ((_ = !w), Error(br + 'crypto unavailable'));
                else _ = w;
              else throw Error(br + E + ' not true or false: ' + w);
            if (
              (y.hasOwnProperty((E = 'MODULO_MODE')) && ((w = y[E]), Ct(w, 0, 9, E), (O = w)),
              y.hasOwnProperty((E = 'POW_PRECISION')) && ((w = y[E]), Ct(w, 0, Mr, E), (W = w)),
              y.hasOwnProperty((E = 'FORMAT')))
            )
              if (((w = y[E]), typeof w == 'object')) ce = w;
              else throw Error(br + E + ' not an object: ' + w);
            if (y.hasOwnProperty((E = 'ALPHABET')))
              if (((w = y[E]), typeof w == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(w)))
                (ve = w.slice(0, 10) == '0123456789'), (de = w);
              else throw Error(br + E + ' invalid: ' + w);
          } else throw Error(br + 'Object expected: ' + y);
        return {
          DECIMAL_PLACES: o,
          ROUNDING_MODE: h,
          EXPONENTIAL_AT: [S, x],
          RANGE: [B, v],
          CRYPTO: _,
          MODULO_MODE: O,
          POW_PRECISION: W,
          FORMAT: ce,
          ALPHABET: de
        };
      }),
    (Q.isBigNumber = function (y) {
      if (!y || y._isBigNumber !== !0) return !1;
      if (!Q.DEBUG) return !0;
      var E,
        w,
        F = y.c,
        V = y.e,
        Y = y.s;
      e: if ({}.toString.call(F) == '[object Array]') {
        if ((Y === 1 || Y === -1) && V >= -1e9 && V <= Mr && V === Qr(V)) {
          if (F[0] === 0) {
            if (V === 0 && F.length === 1) return !0;
            break e;
          }
          if (((E = (V + 1) % it), E < 1 && (E += it), String(F[0]).length == E)) {
            for (E = 0; E < F.length; E++) if (((w = F[E]), w < 0 || w >= rn || w !== Qr(w))) break e;
            if (w !== 0) return !0;
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
        E =
          (Math.random() * y) & 2097151
            ? function () {
                return Qr(Math.random() * y);
              }
            : function () {
                return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
              };
      return function (w) {
        var F,
          V,
          Y,
          X,
          C,
          T = 0,
          G = [],
          I = new Q(m);
        if ((w == null ? (w = o) : Ct(w, 0, Mr), (X = ro(w / it)), _))
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
          } else throw ((_ = !1), Error(br + 'crypto unavailable'));
        if (!_) for (; T < X; ) (C = E()), C < 9e15 && (G[T++] = C % 1e14);
        for (X = G[--T], w %= it, X && w && ((C = no[it - w]), (G[T] = Qr(X / C) * C)); G[T] === 0; G.pop(), T--);
        if (T < 0) G = [(Y = 0)];
        else {
          for (Y = -1; G[0] === 0; G.splice(0, 1), Y -= it);
          for (T = 1, C = G[0]; C >= 10; C /= 10, T++);
          T < it && (Y -= it - T);
        }
        return (I.e = Y), (I.c = G), I;
      };
    })()),
    (Q.sum = function () {
      for (var y = 1, E = arguments, w = new Q(E[0]); y < E.length; ) w = w.plus(E[y++]);
      return w;
    }),
    (u = (function () {
      var y = '0123456789';
      function E(w, F, V, Y) {
        for (var X, C = [0], T, G = 0, I = w.length; G < I; ) {
          for (T = C.length; T--; C[T] *= F);
          for (C[0] += Y.indexOf(w.charAt(G++)), X = 0; X < C.length; X++)
            C[X] > V - 1 && (C[X + 1] == null && (C[X + 1] = 0), (C[X + 1] += (C[X] / V) | 0), (C[X] %= V));
        }
        return C.reverse();
      }
      return function (w, F, V, Y, X) {
        var C,
          T,
          G,
          I,
          ue,
          D,
          ee,
          be,
          me = w.indexOf('.'),
          A = o,
          Ue = h;
        for (
          me >= 0 &&
            ((I = W),
            (W = 0),
            (w = w.replace('.', '')),
            (be = new Q(F)),
            (D = be.pow(w.length - me)),
            (W = I),
            (be.c = E(jn(Zr(D.c), D.e, '0'), 10, V, y)),
            (be.e = be.c.length)),
            ee = E(w, F, V, X ? ((C = de), y) : ((C = y), de)),
            G = I = ee.length;
          ee[--I] == 0;
          ee.pop()
        );
        if (!ee[0]) return C.charAt(0);
        if (
          (me < 0
            ? --G
            : ((D.c = ee), (D.e = G), (D.s = Y), (D = a(D, be, A, Ue, V)), (ee = D.c), (ue = D.r), (G = D.e)),
          (T = G + A + 1),
          (me = ee[T]),
          (I = V / 2),
          (ue = ue || T < 0 || ee[T + 1] != null),
          (ue =
            Ue < 4
              ? (me != null || ue) && (Ue == 0 || Ue == (D.s < 0 ? 3 : 2))
              : me > I || (me == I && (Ue == 4 || ue || (Ue == 6 && ee[T - 1] & 1) || Ue == (D.s < 0 ? 8 : 7)))),
          T < 1 || !ee[0])
        )
          w = ue ? jn(C.charAt(1), -A, C.charAt(0)) : C.charAt(0);
        else {
          if (((ee.length = T), ue)) for (--V; ++ee[--T] > V; ) (ee[T] = 0), T || (++G, (ee = [1].concat(ee)));
          for (I = ee.length; !ee[--I]; );
          for (me = 0, w = ''; me <= I; w += C.charAt(ee[me++]));
          w = jn(w, G, C.charAt(0));
        }
        return w;
      };
    })()),
    (a = (function () {
      function y(F, V, Y) {
        var X,
          C,
          T,
          G,
          I = 0,
          ue = F.length,
          D = V % fi,
          ee = (V / fi) | 0;
        for (F = F.slice(); ue--; )
          (T = F[ue] % fi),
            (G = (F[ue] / fi) | 0),
            (X = ee * T + G * D),
            (C = D * T + (X % fi) * fi + I),
            (I = ((C / Y) | 0) + ((X / fi) | 0) + ee * G),
            (F[ue] = C % Y);
        return I && (F = [I].concat(F)), F;
      }
      function E(F, V, Y, X) {
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
      function w(F, V, Y, X) {
        for (var C = 0; Y--; ) (F[Y] -= C), (C = F[Y] < V[Y] ? 1 : 0), (F[Y] = C * X + F[Y] - V[Y]);
        for (; !F[0] && F.length > 1; F.splice(0, 1));
      }
      return function (F, V, Y, X, C) {
        var T,
          G,
          I,
          ue,
          D,
          ee,
          be,
          me,
          A,
          Ue,
          Ne,
          Ke,
          Oe,
          Re,
          M,
          R,
          Z,
          ie = F.s == V.s ? 1 : -1,
          P = F.c,
          ne = V.c;
        if (!P || !P[0] || !ne || !ne[0])
          return new Q(
            !F.s || !V.s || (P ? ne && P[0] == ne[0] : !ne) ? NaN : (P && P[0] == 0) || !ne ? ie * 0 : ie / 0
          );
        for (
          me = new Q(ie),
            A = me.c = [],
            G = F.e - V.e,
            ie = Y + G + 1,
            C || ((C = rn), (G = Kr(F.e / it) - Kr(V.e / it)), (ie = (ie / it) | 0)),
            I = 0;
          ne[I] == (P[I] || 0);
          I++
        );
        if ((ne[I] > (P[I] || 0) && G--, ie < 0)) A.push(1), (ue = !0);
        else {
          for (
            Re = P.length,
              R = ne.length,
              I = 0,
              ie += 2,
              D = Qr(C / (ne[0] + 1)),
              D > 1 && ((ne = y(ne, D, C)), (P = y(P, D, C)), (R = ne.length), (Re = P.length)),
              Oe = R,
              Ue = P.slice(0, R),
              Ne = Ue.length;
            Ne < R;
            Ue[Ne++] = 0
          );
          (Z = ne.slice()), (Z = [0].concat(Z)), (M = ne[0]), ne[1] >= C / 2 && M++;
          do {
            if (((D = 0), (T = E(ne, Ue, R, Ne)), T < 0)) {
              if (((Ke = Ue[0]), R != Ne && (Ke = Ke * C + (Ue[1] || 0)), (D = Qr(Ke / M)), D > 1))
                for (D >= C && (D = C - 1), ee = y(ne, D, C), be = ee.length, Ne = Ue.length; E(ee, Ue, be, Ne) == 1; )
                  D--, w(ee, R < be ? Z : ne, be, C), (be = ee.length), (T = 1);
              else D == 0 && (T = D = 1), (ee = ne.slice()), (be = ee.length);
              if ((be < Ne && (ee = [0].concat(ee)), w(Ue, ee, Ne, C), (Ne = Ue.length), T == -1))
                for (; E(ne, Ue, R, Ne) < 1; ) D++, w(Ue, R < Ne ? Z : ne, Ne, C), (Ne = Ue.length);
            } else T === 0 && (D++, (Ue = [0]));
            (A[I++] = D), Ue[0] ? (Ue[Ne++] = P[Oe] || 0) : ((Ue = [P[Oe]]), (Ne = 1));
          } while ((Oe++ < Re || Ue[0] != null) && ie--);
          (ue = Ue[0] != null), A[0] || A.splice(0, 1);
        }
        if (C == rn) {
          for (I = 1, ie = A[0]; ie >= 10; ie /= 10, I++);
          we(me, Y + (me.e = I + G * it - 1) + 1, X, ue);
        } else (me.e = G), (me.r = +ue);
        return me;
      };
    })());
  function je(y, E, w, F) {
    var V, Y, X, C, T;
    if ((w == null ? (w = h) : Ct(w, 0, 8), !y.c)) return y.toString();
    if (((V = y.c[0]), (X = y.e), E == null))
      (T = Zr(y.c)), (T = F == 1 || (F == 2 && (X <= S || X >= x)) ? ls(T, X) : jn(T, X, '0'));
    else if (
      ((y = we(new Q(y), E, w)), (Y = y.e), (T = Zr(y.c)), (C = T.length), F == 1 || (F == 2 && (E <= Y || Y <= S)))
    ) {
      for (; C < E; T += '0', C++);
      T = ls(T, Y);
    } else if (((E -= X), (T = jn(T, Y, '0')), Y + 1 > C)) {
      if (--E > 0) for (T += '.'; E--; T += '0');
    } else if (((E += Y - C), E > 0)) for (Y + 1 == C && (T += '.'); E--; T += '0');
    return y.s < 0 && V ? '-' + T : T;
  }
  function We(y, E) {
    for (var w, F, V = 1, Y = new Q(y[0]); V < y.length; V++)
      (F = new Q(y[V])), (!F.s || (w = zi(Y, F)) === E || (w === 0 && Y.s === E)) && (Y = F);
    return Y;
  }
  function _e(y, E, w) {
    for (var F = 1, V = E.length; !E[--V]; E.pop());
    for (V = E[0]; V >= 10; V /= 10, F++);
    return (w = F + w * it - 1) > v ? (y.c = y.e = null) : w < B ? (y.c = [(y.e = 0)]) : ((y.e = w), (y.c = E)), y;
  }
  s = (function () {
    var y = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      E = /^([^.]+)\.$/,
      w = /^\.([^.]+)$/,
      F = /^-?(Infinity|NaN)$/,
      V = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (Y, X, C, T) {
      var G,
        I = C ? X : X.replace(V, '');
      if (F.test(I)) Y.s = isNaN(I) ? null : I < 0 ? -1 : 1;
      else {
        if (
          !C &&
          ((I = I.replace(y, function (ue, D, ee) {
            return (G = (ee = ee.toLowerCase()) == 'x' ? 16 : ee == 'b' ? 2 : 8), !T || T == G ? D : ue;
          })),
          T && ((G = T), (I = I.replace(E, '$1').replace(w, '0.$1'))),
          X != I)
        )
          return new Q(I, G);
        if (Q.DEBUG) throw Error(br + 'Not a' + (T ? ' base ' + T : '') + ' number: ' + X);
        Y.s = null;
      }
      Y.c = Y.e = null;
    };
  })();
  function we(y, E, w, F) {
    var V,
      Y,
      X,
      C,
      T,
      G,
      I,
      ue = y.c,
      D = no;
    if (ue) {
      e: {
        for (V = 1, C = ue[0]; C >= 10; C /= 10, V++);
        if (((Y = E - V), Y < 0)) (Y += it), (X = E), (T = ue[(G = 0)]), (I = Qr((T / D[V - X - 1]) % 10));
        else if (((G = ro((Y + 1) / it)), G >= ue.length))
          if (F) {
            for (; ue.length <= G; ue.push(0));
            (T = I = 0), (V = 1), (Y %= it), (X = Y - it + 1);
          } else break e;
        else {
          for (T = C = ue[G], V = 1; C >= 10; C /= 10, V++);
          (Y %= it), (X = Y - it + V), (I = X < 0 ? 0 : Qr((T / D[V - X - 1]) % 10));
        }
        if (
          ((F = F || E < 0 || ue[G + 1] != null || (X < 0 ? T : T % D[V - X - 1])),
          (F =
            w < 4
              ? (I || F) && (w == 0 || w == (y.s < 0 ? 3 : 2))
              : I > 5 ||
                (I == 5 &&
                  (w == 4 ||
                    F ||
                    (w == 6 && (Y > 0 ? (X > 0 ? T / D[V - X] : 0) : ue[G - 1]) % 10 & 1) ||
                    w == (y.s < 0 ? 8 : 7)))),
          E < 1 || !ue[0])
        )
          return (
            (ue.length = 0),
            F ? ((E -= y.e + 1), (ue[0] = D[(it - (E % it)) % it]), (y.e = -E || 0)) : (ue[0] = y.e = 0),
            y
          );
        if (
          (Y == 0
            ? ((ue.length = G), (C = 1), G--)
            : ((ue.length = G + 1), (C = D[it - Y]), (ue[G] = X > 0 ? Qr((T / D[V - X]) % D[X]) * C : 0)),
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
      y.e > v ? (y.c = y.e = null) : y.e < B && (y.c = [(y.e = 0)]);
    }
    return y;
  }
  function De(y) {
    var E,
      w = y.e;
    return w === null
      ? y.toString()
      : ((E = Zr(y.c)), (E = w <= S || w >= x ? ls(E, w) : jn(E, w, '0')), y.s < 0 ? '-' + E : E);
  }
  return (
    (c.absoluteValue = c.abs =
      function () {
        var y = new Q(this);
        return y.s < 0 && (y.s = 1), y;
      }),
    (c.comparedTo = function (y, E) {
      return zi(this, new Q(y, E));
    }),
    (c.decimalPlaces = c.dp =
      function (y, E) {
        var w,
          F,
          V,
          Y = this;
        if (y != null) return Ct(y, 0, Mr), E == null ? (E = h) : Ct(E, 0, 8), we(new Q(Y), y + Y.e + 1, E);
        if (!(w = Y.c)) return null;
        if (((F = ((V = w.length - 1) - Kr(this.e / it)) * it), (V = w[V]))) for (; V % 10 == 0; V /= 10, F--);
        return F < 0 && (F = 0), F;
      }),
    (c.dividedBy = c.div =
      function (y, E) {
        return a(this, new Q(y, E), o, h);
      }),
    (c.dividedToIntegerBy = c.idiv =
      function (y, E) {
        return a(this, new Q(y, E), 0, 1);
      }),
    (c.exponentiatedBy = c.pow =
      function (y, E) {
        var w,
          F,
          V,
          Y,
          X,
          C,
          T,
          G,
          I,
          ue = this;
        if (((y = new Q(y)), y.c && !y.isInteger())) throw Error(br + 'Exponent not an integer: ' + De(y));
        if (
          (E != null && (E = new Q(E)),
          (C = y.e > 14),
          !ue.c || !ue.c[0] || (ue.c[0] == 1 && !ue.e && ue.c.length == 1) || !y.c || !y.c[0])
        )
          return (I = new Q(Math.pow(+De(ue), C ? y.s * (2 - us(y)) : +De(y)))), E ? I.mod(E) : I;
        if (((T = y.s < 0), E)) {
          if (E.c ? !E.c[0] : !E.s) return new Q(NaN);
          (F = !T && ue.isInteger() && E.isInteger()), F && (ue = ue.mod(E));
        } else {
          if (
            y.e > 9 &&
            (ue.e > 0 ||
              ue.e < -1 ||
              (ue.e == 0 ? ue.c[0] > 1 || (C && ue.c[1] >= 24e7) : ue.c[0] < 8e13 || (C && ue.c[0] <= 9999975e7)))
          )
            return (Y = ue.s < 0 && us(y) ? -0 : 0), ue.e > -1 && (Y = 1 / Y), new Q(T ? 1 / Y : Y);
          W && (Y = ro(W / it + 2));
        }
        for (
          C ? ((w = new Q(0.5)), T && (y.s = 1), (G = us(y))) : ((V = Math.abs(+De(y))), (G = V % 2)), I = new Q(m);
          ;

        ) {
          if (G) {
            if (((I = I.times(ue)), !I.c)) break;
            Y ? I.c.length > Y && (I.c.length = Y) : F && (I = I.mod(E));
          }
          if (V) {
            if (((V = Qr(V / 2)), V === 0)) break;
            G = V % 2;
          } else if (((y = y.times(w)), we(y, y.e + 1, 1), y.e > 14)) G = us(y);
          else {
            if (((V = +De(y)), V === 0)) break;
            G = V % 2;
          }
          (ue = ue.times(ue)), Y ? ue.c && ue.c.length > Y && (ue.c.length = Y) : F && (ue = ue.mod(E));
        }
        return F ? I : (T && (I = m.div(I)), E ? I.mod(E) : Y ? we(I, W, h, X) : I);
      }),
    (c.integerValue = function (y) {
      var E = new Q(this);
      return y == null ? (y = h) : Ct(y, 0, 8), we(E, E.e + 1, y);
    }),
    (c.isEqualTo = c.eq =
      function (y, E) {
        return zi(this, new Q(y, E)) === 0;
      }),
    (c.isFinite = function () {
      return !!this.c;
    }),
    (c.isGreaterThan = c.gt =
      function (y, E) {
        return zi(this, new Q(y, E)) > 0;
      }),
    (c.isGreaterThanOrEqualTo = c.gte =
      function (y, E) {
        return (E = zi(this, new Q(y, E))) === 1 || E === 0;
      }),
    (c.isInteger = function () {
      return !!this.c && Kr(this.e / it) > this.c.length - 2;
    }),
    (c.isLessThan = c.lt =
      function (y, E) {
        return zi(this, new Q(y, E)) < 0;
      }),
    (c.isLessThanOrEqualTo = c.lte =
      function (y, E) {
        return (E = zi(this, new Q(y, E))) === -1 || E === 0;
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
    (c.minus = function (y, E) {
      var w,
        F,
        V,
        Y,
        X = this,
        C = X.s;
      if (((y = new Q(y, E)), (E = y.s), !C || !E)) return new Q(NaN);
      if (C != E) return (y.s = -E), X.plus(y);
      var T = X.e / it,
        G = y.e / it,
        I = X.c,
        ue = y.c;
      if (!T || !G) {
        if (!I || !ue) return I ? ((y.s = -E), y) : new Q(ue ? X : NaN);
        if (!I[0] || !ue[0]) return ue[0] ? ((y.s = -E), y) : new Q(I[0] ? X : h == 3 ? -0 : 0);
      }
      if (((T = Kr(T)), (G = Kr(G)), (I = I.slice()), (C = T - G))) {
        for ((Y = C < 0) ? ((C = -C), (V = I)) : ((G = T), (V = ue)), V.reverse(), E = C; E--; V.push(0));
        V.reverse();
      } else
        for (F = (Y = (C = I.length) < (E = ue.length)) ? C : E, C = E = 0; E < F; E++)
          if (I[E] != ue[E]) {
            Y = I[E] < ue[E];
            break;
          }
      if ((Y && ((V = I), (I = ue), (ue = V), (y.s = -y.s)), (E = (F = ue.length) - (w = I.length)), E > 0))
        for (; E--; I[w++] = 0);
      for (E = rn - 1; F > C; ) {
        if (I[--F] < ue[F]) {
          for (w = F; w && !I[--w]; I[w] = E);
          --I[w], (I[F] += rn);
        }
        I[F] -= ue[F];
      }
      for (; I[0] == 0; I.splice(0, 1), --G);
      return I[0] ? _e(y, I, G) : ((y.s = h == 3 ? -1 : 1), (y.c = [(y.e = 0)]), y);
    }),
    (c.modulo = c.mod =
      function (y, E) {
        var w,
          F,
          V = this;
        return (
          (y = new Q(y, E)),
          !V.c || !y.s || (y.c && !y.c[0])
            ? new Q(NaN)
            : !y.c || (V.c && !V.c[0])
              ? new Q(V)
              : (O == 9 ? ((F = y.s), (y.s = 1), (w = a(V, y, 0, 3)), (y.s = F), (w.s *= F)) : (w = a(V, y, 0, O)),
                (y = V.minus(w.times(y))),
                !y.c[0] && O == 1 && (y.s = V.s),
                y)
        );
      }),
    (c.multipliedBy = c.times =
      function (y, E) {
        var w,
          F,
          V,
          Y,
          X,
          C,
          T,
          G,
          I,
          ue,
          D,
          ee,
          be,
          me,
          A,
          Ue = this,
          Ne = Ue.c,
          Ke = (y = new Q(y, E)).c;
        if (!Ne || !Ke || !Ne[0] || !Ke[0])
          return (
            !Ue.s || !y.s || (Ne && !Ne[0] && !Ke) || (Ke && !Ke[0] && !Ne)
              ? (y.c = y.e = y.s = null)
              : ((y.s *= Ue.s), !Ne || !Ke ? (y.c = y.e = null) : ((y.c = [0]), (y.e = 0))),
            y
          );
        for (
          F = Kr(Ue.e / it) + Kr(y.e / it),
            y.s *= Ue.s,
            T = Ne.length,
            ue = Ke.length,
            T < ue && ((be = Ne), (Ne = Ke), (Ke = be), (V = T), (T = ue), (ue = V)),
            V = T + ue,
            be = [];
          V--;
          be.push(0)
        );
        for (me = rn, A = fi, V = ue; --V >= 0; ) {
          for (w = 0, D = Ke[V] % A, ee = (Ke[V] / A) | 0, X = T, Y = V + X; Y > V; )
            (G = Ne[--X] % A),
              (I = (Ne[X] / A) | 0),
              (C = ee * G + I * D),
              (G = D * G + (C % A) * A + be[Y] + w),
              (w = ((G / me) | 0) + ((C / A) | 0) + ee * I),
              (be[Y--] = G % me);
          be[Y] = w;
        }
        return w ? ++F : be.splice(0, 1), _e(y, be, F);
      }),
    (c.negated = function () {
      var y = new Q(this);
      return (y.s = -y.s || null), y;
    }),
    (c.plus = function (y, E) {
      var w,
        F = this,
        V = F.s;
      if (((y = new Q(y, E)), (E = y.s), !V || !E)) return new Q(NaN);
      if (V != E) return (y.s = -E), F.minus(y);
      var Y = F.e / it,
        X = y.e / it,
        C = F.c,
        T = y.c;
      if (!Y || !X) {
        if (!C || !T) return new Q(V / 0);
        if (!C[0] || !T[0]) return T[0] ? y : new Q(C[0] ? F : V * 0);
      }
      if (((Y = Kr(Y)), (X = Kr(X)), (C = C.slice()), (V = Y - X))) {
        for (V > 0 ? ((X = Y), (w = T)) : ((V = -V), (w = C)), w.reverse(); V--; w.push(0));
        w.reverse();
      }
      for (V = C.length, E = T.length, V - E < 0 && ((w = T), (T = C), (C = w), (E = V)), V = 0; E; )
        (V = ((C[--E] = C[E] + T[E] + V) / rn) | 0), (C[E] = rn === C[E] ? 0 : C[E] % rn);
      return V && ((C = [V].concat(C)), ++X), _e(y, C, X);
    }),
    (c.precision = c.sd =
      function (y, E) {
        var w,
          F,
          V,
          Y = this;
        if (y != null && y !== !!y) return Ct(y, 1, Mr), E == null ? (E = h) : Ct(E, 0, 8), we(new Q(Y), y, E);
        if (!(w = Y.c)) return null;
        if (((V = w.length - 1), (F = V * it + 1), (V = w[V]))) {
          for (; V % 10 == 0; V /= 10, F--);
          for (V = w[0]; V >= 10; V /= 10, F++);
        }
        return y && Y.e + 1 > F && (F = Y.e + 1), F;
      }),
    (c.shiftedBy = function (y) {
      return Ct(y, -9007199254740991, Mm), this.times('1e' + y);
    }),
    (c.squareRoot = c.sqrt =
      function () {
        var y,
          E,
          w,
          F,
          V,
          Y = this,
          X = Y.c,
          C = Y.s,
          T = Y.e,
          G = o + 4,
          I = new Q('0.5');
        if (C !== 1 || !X || !X[0]) return new Q(!C || (C < 0 && (!X || X[0])) ? NaN : X ? Y : 1 / 0);
        if (
          ((C = Math.sqrt(+De(Y))),
          C == 0 || C == 1 / 0
            ? ((E = Zr(X)),
              (E.length + T) % 2 == 0 && (E += '0'),
              (C = Math.sqrt(+E)),
              (T = Kr((T + 1) / 2) - (T < 0 || T % 2)),
              C == 1 / 0 ? (E = '5e' + T) : ((E = C.toExponential()), (E = E.slice(0, E.indexOf('e') + 1) + T)),
              (w = new Q(E)))
            : (w = new Q(C + '')),
          w.c[0])
        ) {
          for (T = w.e, C = T + G, C < 3 && (C = 0); ; )
            if (((V = w), (w = I.times(V.plus(a(Y, V, G, 1)))), Zr(V.c).slice(0, C) === (E = Zr(w.c)).slice(0, C)))
              if ((w.e < T && --C, (E = E.slice(C - 3, C + 1)), E == '9999' || (!F && E == '4999'))) {
                if (!F && (we(V, V.e + o + 2, 0), V.times(V).eq(Y))) {
                  w = V;
                  break;
                }
                (G += 4), (C += 4), (F = 1);
              } else {
                (!+E || (!+E.slice(1) && E.charAt(0) == '5')) && (we(w, w.e + o + 2, 1), (y = !w.times(w).eq(Y)));
                break;
              }
        }
        return we(w, w.e + o + 1, h, y);
      }),
    (c.toExponential = function (y, E) {
      return y != null && (Ct(y, 0, Mr), y++), je(this, y, E, 1);
    }),
    (c.toFixed = function (y, E) {
      return y != null && (Ct(y, 0, Mr), (y = y + this.e + 1)), je(this, y, E);
    }),
    (c.toFormat = function (y, E, w) {
      var F,
        V = this;
      if (w == null)
        y != null && E && typeof E == 'object'
          ? ((w = E), (E = null))
          : y && typeof y == 'object'
            ? ((w = y), (y = E = null))
            : (w = ce);
      else if (typeof w != 'object') throw Error(br + 'Argument not an object: ' + w);
      if (((F = V.toFixed(y, E)), V.c)) {
        var Y,
          X = F.split('.'),
          C = +w.groupSize,
          T = +w.secondaryGroupSize,
          G = w.groupSeparator || '',
          I = X[0],
          ue = X[1],
          D = V.s < 0,
          ee = D ? I.slice(1) : I,
          be = ee.length;
        if ((T && ((Y = C), (C = T), (T = Y), (be -= Y)), C > 0 && be > 0)) {
          for (Y = be % C || C, I = ee.substr(0, Y); Y < be; Y += C) I += G + ee.substr(Y, C);
          T > 0 && (I += G + ee.slice(Y)), D && (I = '-' + I);
        }
        F = ue
          ? I +
            (w.decimalSeparator || '') +
            ((T = +w.fractionGroupSize)
              ? ue.replace(new RegExp('\\d{' + T + '}\\B', 'g'), '$&' + (w.fractionGroupSeparator || ''))
              : ue)
          : I;
      }
      return (w.prefix || '') + F + (w.suffix || '');
    }),
    (c.toFraction = function (y) {
      var E,
        w,
        F,
        V,
        Y,
        X,
        C,
        T,
        G,
        I,
        ue,
        D,
        ee = this,
        be = ee.c;
      if (y != null && ((C = new Q(y)), (!C.isInteger() && (C.c || C.s !== 1)) || C.lt(m)))
        throw Error(br + 'Argument ' + (C.isInteger() ? 'out of range: ' : 'not an integer: ') + De(C));
      if (!be) return new Q(ee);
      for (
        E = new Q(m),
          G = w = new Q(m),
          F = T = new Q(m),
          D = Zr(be),
          Y = E.e = D.length - ee.e - 1,
          E.c[0] = no[(X = Y % it) < 0 ? it + X : X],
          y = !y || C.comparedTo(E) > 0 ? (Y > 0 ? E : G) : C,
          X = v,
          v = 1 / 0,
          C = new Q(D),
          T.c[0] = 0;
        (I = a(C, E, 0, 1)), (V = w.plus(I.times(F))), V.comparedTo(y) != 1;

      )
        (w = F), (F = V), (G = T.plus(I.times((V = G)))), (T = V), (E = C.minus(I.times((V = E)))), (C = V);
      return (
        (V = a(y.minus(w), F, 0, 1)),
        (T = T.plus(V.times(G))),
        (w = w.plus(V.times(F))),
        (T.s = G.s = ee.s),
        (Y = Y * 2),
        (ue =
          a(G, F, Y, h)
            .minus(ee)
            .abs()
            .comparedTo(a(T, w, Y, h).minus(ee).abs()) < 1
            ? [G, F]
            : [T, w]),
        (v = X),
        ue
      );
    }),
    (c.toNumber = function () {
      return +De(this);
    }),
    (c.toPrecision = function (y, E) {
      return y != null && Ct(y, 1, Mr), je(this, y, E, 2);
    }),
    (c.toString = function (y) {
      var E,
        w = this,
        F = w.s,
        V = w.e;
      return (
        V === null
          ? F
            ? ((E = 'Infinity'), F < 0 && (E = '-' + E))
            : (E = 'NaN')
          : (y == null
              ? (E = V <= S || V >= x ? ls(Zr(w.c), V) : jn(Zr(w.c), V, '0'))
              : y === 10 && ve
                ? ((w = we(new Q(w), o + V + 1, h)), (E = jn(Zr(w.c), w.e, '0')))
                : (Ct(y, 2, de.length, 'Base'), (E = u(jn(Zr(w.c), V, '0'), 10, y, F, !0))),
            F < 0 && w.c[0] && (E = '-' + E)),
        E
      );
    }),
    (c.valueOf = c.toJSON =
      function () {
        return De(this);
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
function zi(n, a) {
  var u,
    s,
    c = n.c,
    m = a.c,
    o = n.s,
    h = a.s,
    S = n.e,
    x = a.e;
  if (!o || !h) return null;
  if (((u = c && !c[0]), (s = m && !m[0]), u || s)) return u ? (s ? 0 : -h) : o;
  if (o != h) return o;
  if (((u = o < 0), (s = S == x), !c || !m)) return s ? 0 : !c ^ u ? 1 : -1;
  if (!s) return (S > x) ^ u ? 1 : -1;
  for (h = (S = c.length) < (x = m.length) ? S : x, o = 0; o < h; o++)
    if (c[o] != m[o]) return (c[o] > m[o]) ^ u ? 1 : -1;
  return S == x ? 0 : (S > x) ^ u ? 1 : -1;
}
function Ct(n, a, u, s) {
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
function us(n) {
  var a = n.c.length - 1;
  return Kr(n.e / it) == a && n.c[a] % 2 != 0;
}
function ls(n, a) {
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
var In = Dp();
class Ut {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    return a ? new Ut(BigInt(a)) : null;
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value === a.value : !1;
  }
}
Object.defineProperty(Ut, 'Bitcoin', { enumerable: !0, configurable: !0, writable: !0, value: new Ut(0n) });
Object.defineProperty(Ut, 'Ethereum', { enumerable: !0, configurable: !0, writable: !0, value: new Ut(60n) });
Object.defineProperty(Ut, 'Solana', { enumerable: !0, configurable: !0, writable: !0, value: new Ut(501n) });
Object.defineProperty(Ut, 'Dfinity', { enumerable: !0, configurable: !0, writable: !0, value: new Ut(223n) });
Object.defineProperty(Ut, 'Ton', { enumerable: !0, configurable: !0, writable: !0, value: new Ut(607n) });
Object.defineProperty(Ut, 'Tron', { enumerable: !0, configurable: !0, writable: !0, value: new Ut(195n) });
Object.defineProperty(Ut, 'Kaspa', { enumerable: !0, configurable: !0, writable: !0, value: new Ut(111111n) });
class ze {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    return a ? new ze(BigInt(a)) : null;
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value === a.value : !1;
  }
}
Object.defineProperty(ze, 'MainNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(1n) });
Object.defineProperty(ze, 'TestNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(0n) });
Object.defineProperty(ze, 'BtcMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(1n) });
Object.defineProperty(ze, 'BtcTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(2n) });
Object.defineProperty(ze, 'EvmMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(0x1n) });
Object.defineProperty(ze, 'EvmSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(0xaa36a7n)
});
Object.defineProperty(ze, 'EvmBscNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(0x38n) });
Object.defineProperty(ze, 'EvmBscTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(97n) });
Object.defineProperty(ze, 'EvmBaseNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(8453n) });
Object.defineProperty(ze, 'EvmBaseSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(84532n)
});
Object.defineProperty(ze, 'EvmAvalancheNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(43114n) });
Object.defineProperty(ze, 'EvmAvalancheFujiNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(43113n)
});
Object.defineProperty(ze, 'EvmScrollNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(534352n) });
Object.defineProperty(ze, 'EvmScrollSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(534351n)
});
Object.defineProperty(ze, 'EvmBitlayerNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(200901n) });
Object.defineProperty(ze, 'EvmBitlayerTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(200810n)
});
Object.defineProperty(ze, 'EvmSwanNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(254n) });
Object.defineProperty(ze, 'EvmSwanTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(20241133n)
});
Object.defineProperty(ze, 'EvmPantaNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(331n) });
Object.defineProperty(ze, 'SolanaMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(0x3n) });
Object.defineProperty(ze, 'SolanaTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(0x2n) });
Object.defineProperty(ze, 'TonMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(1n) });
Object.defineProperty(ze, 'TonTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(2n) });
Object.defineProperty(ze, 'TronMainNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(0x2b6653dcn)
});
Object.defineProperty(ze, 'TronShastaTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(0x94a9059en)
});
Object.defineProperty(ze, 'TronNileTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new ze(0xcd8690dcn)
});
Object.defineProperty(ze, 'DfinityMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(1n) });
Object.defineProperty(ze, 'KaspaMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(0n) });
Object.defineProperty(ze, 'KaspaTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new ze(1n) });
class Lu {
  constructor(a, u) {
    Object.defineProperty(this, 'chain', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'network', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.chain = a),
      (this.network = u);
  }
  toString() {
    return `${this.chain.toString()}_${this.network.toString()}`;
  }
  static fromString(a) {
    if (!a || !a.includes('_')) throw new Error(`Invalid chainId format: ${a}. Expected format: "chain_network"`);
    const [u, s] = a.split('_'),
      c = Ut.fromString(u),
      m = ze.fromString(s);
    if (!c || !m) throw new Error(`Invalid chain or network in chainId: ${a}`);
    return new Lu(c, m);
  }
  equals(a) {
    return this.chain.equals(a.chain) && this.network.equals(a.network);
  }
}
function tv(n) {
  return { chainId: n.chainId, depositAddress: n.depositAddress || void 0, displayName: n.displayName || void 0 };
}
var vs;
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
})(vs || (vs = {}));
function rv(n) {
  const a = Number(n);
  return Object.values(vs).includes(a) ? a : null;
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
var Bm;
(function (n) {
  (n.EVM = 'EVM'),
    (n.Bitcoin = 'Bitcoin'),
    (n.Solana = 'Solana'),
    (n.Tron = 'Tron'),
    (n.Ton = 'Ton'),
    (n.IC = 'ICP'),
    (n.Kaspa = 'Kaspa');
})(Bm || (Bm = {}));
var yi;
(function (n) {
  (n[(n.Source = 0)] = 'Source'), (n[(n.Target = 1)] = 'Target');
})(yi || (yi = {}));
var zn;
(function (n) {
  (n[(n.LimitOrder = 0)] = 'LimitOrder'), (n[(n.SwapOrder = 1)] = 'SwapOrder');
})(zn || (zn = {}));
var wt;
(function (n) {
  (n[(n.Ask = 1)] = 'Ask'), (n[(n.Bid = 2)] = 'Bid');
})(wt || (wt = {}));
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
var bs;
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
})(bs || (bs = {}));
var Ra;
(function (n) {
  (n.Mainnet = 'mainnet'), (n.Testnet = 'testnet');
})(Ra || (Ra = {}));
var Um;
(function (n) {
  (n.BtcEcdsa = '0x3e8'),
    (n.EvmEcdsa = '0x3e9'),
    (n.TronEcdsa = '0x3ea'),
    (n.TonEddsaOpenMask = '0x7d0'),
    (n.SolanaEddsa = '0x7da'),
    (n.IcpEddsa = '0x7e4'),
    (n.KaspaSchnorr = '0xbc2');
})(Um || (Um = {}));
var Ss;
(function (n) {
  n[(n.V0 = 0)] = 'V0';
})(Ss || (Ss = {}));
function Rm(n) {
  if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
function nv(n) {
  return n instanceof Uint8Array || (ArrayBuffer.isView(n) && n.constructor.name === 'Uint8Array');
}
function jo(n, ...a) {
  if (!nv(n)) throw new Error('Uint8Array expected');
  if (a.length > 0 && !a.includes(n.length))
    throw new Error('Uint8Array expected of length ' + a + ', got length=' + n.length);
}
function iv(n) {
  if (typeof n != 'function' || typeof n.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  Rm(n.outputLen), Rm(n.blockLen);
}
function xs(n, a = !0) {
  if (n.destroyed) throw new Error('Hash instance has been destroyed');
  if (a && n.finished) throw new Error('Hash#digest() has already been called');
}
function av(n, a) {
  jo(n);
  const u = a.outputLen;
  if (n.length < u) throw new Error('digestInto() expects output buffer of length at least ' + u);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function io(n) {
  return new DataView(n.buffer, n.byteOffset, n.byteLength);
}
function dn(n, a) {
  return (n << (32 - a)) | (n >>> a);
}
function uv(n) {
  if (typeof n != 'string') throw new Error('utf8ToBytes expected string, got ' + typeof n);
  return new Uint8Array(new TextEncoder().encode(n));
}
function Co(n) {
  return typeof n == 'string' && (n = uv(n)), jo(n), n;
}
class jp {
  clone() {
    return this._cloneInto();
  }
}
function lv(n) {
  const a = (s) => n().update(Co(s)).digest(),
    u = n();
  return (a.outputLen = u.outputLen), (a.blockLen = u.blockLen), (a.create = () => n()), a;
}
class Cp extends jp {
  constructor(a, u) {
    super(), (this.finished = !1), (this.destroyed = !1), iv(a);
    const s = Co(u);
    if (((this.iHash = a.create()), typeof this.iHash.update != 'function'))
      throw new Error('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const c = this.blockLen,
      m = new Uint8Array(c);
    m.set(s.length > c ? a.create().update(s).digest() : s);
    for (let o = 0; o < m.length; o++) m[o] ^= 54;
    this.iHash.update(m), (this.oHash = a.create());
    for (let o = 0; o < m.length; o++) m[o] ^= 106;
    this.oHash.update(m), m.fill(0);
  }
  update(a) {
    return xs(this), this.iHash.update(a), this;
  }
  digestInto(a) {
    xs(this),
      jo(a, this.outputLen),
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
    const { oHash: u, iHash: s, finished: c, destroyed: m, blockLen: o, outputLen: h } = this;
    return (
      (a = a),
      (a.finished = c),
      (a.destroyed = m),
      (a.blockLen = o),
      (a.outputLen = h),
      (a.oHash = u._cloneInto(a.oHash)),
      (a.iHash = s._cloneInto(a.iHash)),
      a
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const kp = (n, a, u) => new Cp(n, a).update(u).digest();
kp.create = (n, a) => new Cp(n, a);
function sv(n, a, u, s) {
  if (typeof n.setBigUint64 == 'function') return n.setBigUint64(a, u, s);
  const c = BigInt(32),
    m = BigInt(4294967295),
    o = Number((u >> c) & m),
    h = Number(u & m),
    S = s ? 4 : 0,
    x = s ? 0 : 4;
  n.setUint32(a + S, o, s), n.setUint32(a + x, h, s);
}
function cv(n, a, u) {
  return (n & a) ^ (~n & u);
}
function fv(n, a, u) {
  return (n & a) ^ (n & u) ^ (a & u);
}
class ov extends jp {
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
      (this.view = io(this.buffer));
  }
  update(a) {
    xs(this);
    const { view: u, buffer: s, blockLen: c } = this;
    a = Co(a);
    const m = a.length;
    for (let o = 0; o < m; ) {
      const h = Math.min(c - this.pos, m - o);
      if (h === c) {
        const S = io(a);
        for (; c <= m - o; o += c) this.process(S, o);
        continue;
      }
      s.set(a.subarray(o, o + h), this.pos),
        (this.pos += h),
        (o += h),
        this.pos === c && (this.process(u, 0), (this.pos = 0));
    }
    return (this.length += a.length), this.roundClean(), this;
  }
  digestInto(a) {
    xs(this), av(a, this), (this.finished = !0);
    const { buffer: u, view: s, blockLen: c, isLE: m } = this;
    let { pos: o } = this;
    (u[o++] = 128), this.buffer.subarray(o).fill(0), this.padOffset > c - o && (this.process(s, 0), (o = 0));
    for (let v = o; v < c; v++) u[v] = 0;
    sv(s, c - 8, BigInt(this.length * 8), m), this.process(s, 0);
    const h = io(a),
      S = this.outputLen;
    if (S % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const x = S / 4,
      B = this.get();
    if (x > B.length) throw new Error('_sha2: outputLen bigger than state');
    for (let v = 0; v < x; v++) h.setUint32(4 * v, B[v], m);
  }
  digest() {
    const { buffer: a, outputLen: u } = this;
    this.digestInto(a);
    const s = a.slice(0, u);
    return this.destroy(), s;
  }
  _cloneInto(a) {
    a || (a = new this.constructor()), a.set(...this.get());
    const { blockLen: u, buffer: s, length: c, finished: m, destroyed: o, pos: h } = this;
    return (a.length = c), (a.pos = h), (a.finished = m), (a.destroyed = o), c % u && a.buffer.set(s), a;
  }
}
const hv = new Uint32Array([
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
class dv extends ov {
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
    const { A: a, B: u, C: s, D: c, E: m, F: o, G: h, H: S } = this;
    return [a, u, s, c, m, o, h, S];
  }
  set(a, u, s, c, m, o, h, S) {
    (this.A = a | 0),
      (this.B = u | 0),
      (this.C = s | 0),
      (this.D = c | 0),
      (this.E = m | 0),
      (this.F = o | 0),
      (this.G = h | 0),
      (this.H = S | 0);
  }
  process(a, u) {
    for (let v = 0; v < 16; v++, u += 4) hi[v] = a.getUint32(u, !1);
    for (let v = 16; v < 64; v++) {
      const _ = hi[v - 15],
        O = hi[v - 2],
        W = dn(_, 7) ^ dn(_, 18) ^ (_ >>> 3),
        ce = dn(O, 17) ^ dn(O, 19) ^ (O >>> 10);
      hi[v] = (ce + hi[v - 7] + W + hi[v - 16]) | 0;
    }
    let { A: s, B: c, C: m, D: o, E: h, F: S, G: x, H: B } = this;
    for (let v = 0; v < 64; v++) {
      const _ = dn(h, 6) ^ dn(h, 11) ^ dn(h, 25),
        O = (B + _ + cv(h, S, x) + hv[v] + hi[v]) | 0,
        ce = ((dn(s, 2) ^ dn(s, 13) ^ dn(s, 22)) + fv(s, c, m)) | 0;
      (B = x), (x = S), (S = h), (h = (o + O) | 0), (o = m), (m = c), (c = s), (s = (O + ce) | 0);
    }
    (s = (s + this.A) | 0),
      (c = (c + this.B) | 0),
      (m = (m + this.C) | 0),
      (o = (o + this.D) | 0),
      (h = (h + this.E) | 0),
      (S = (S + this.F) | 0),
      (x = (x + this.G) | 0),
      (B = (B + this.H) | 0),
      this.set(s, c, m, o, h, S, x, B);
  }
  roundClean() {
    hi.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const qp = lv(() => new dv());
var ao = {},
  uo = {},
  Tu = {},
  Dm;
function mv() {
  if (Dm) return Tu;
  (Dm = 1), (Tu.byteLength = h), (Tu.toByteArray = x), (Tu.fromByteArray = _);
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
  function o(O) {
    var W = O.length;
    if (W % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    var ce = O.indexOf('=');
    ce === -1 && (ce = W);
    var de = ce === W ? 0 : 4 - (ce % 4);
    return [ce, de];
  }
  function h(O) {
    var W = o(O),
      ce = W[0],
      de = W[1];
    return ((ce + de) * 3) / 4 - de;
  }
  function S(O, W, ce) {
    return ((W + ce) * 3) / 4 - ce;
  }
  function x(O) {
    var W,
      ce = o(O),
      de = ce[0],
      ve = ce[1],
      Q = new u(S(O, de, ve)),
      je = 0,
      We = ve > 0 ? de - 4 : de,
      _e;
    for (_e = 0; _e < We; _e += 4)
      (W =
        (a[O.charCodeAt(_e)] << 18) |
        (a[O.charCodeAt(_e + 1)] << 12) |
        (a[O.charCodeAt(_e + 2)] << 6) |
        a[O.charCodeAt(_e + 3)]),
        (Q[je++] = (W >> 16) & 255),
        (Q[je++] = (W >> 8) & 255),
        (Q[je++] = W & 255);
    return (
      ve === 2 && ((W = (a[O.charCodeAt(_e)] << 2) | (a[O.charCodeAt(_e + 1)] >> 4)), (Q[je++] = W & 255)),
      ve === 1 &&
        ((W = (a[O.charCodeAt(_e)] << 10) | (a[O.charCodeAt(_e + 1)] << 4) | (a[O.charCodeAt(_e + 2)] >> 2)),
        (Q[je++] = (W >> 8) & 255),
        (Q[je++] = W & 255)),
      Q
    );
  }
  function B(O) {
    return n[(O >> 18) & 63] + n[(O >> 12) & 63] + n[(O >> 6) & 63] + n[O & 63];
  }
  function v(O, W, ce) {
    for (var de, ve = [], Q = W; Q < ce; Q += 3)
      (de = ((O[Q] << 16) & 16711680) + ((O[Q + 1] << 8) & 65280) + (O[Q + 2] & 255)), ve.push(B(de));
    return ve.join('');
  }
  function _(O) {
    for (var W, ce = O.length, de = ce % 3, ve = [], Q = 16383, je = 0, We = ce - de; je < We; je += Q)
      ve.push(v(O, je, je + Q > We ? We : je + Q));
    return (
      de === 1
        ? ((W = O[ce - 1]), ve.push(n[W >> 2] + n[(W << 4) & 63] + '=='))
        : de === 2 &&
          ((W = (O[ce - 2] << 8) + O[ce - 1]), ve.push(n[W >> 10] + n[(W >> 4) & 63] + n[(W << 2) & 63] + '=')),
      ve.join('')
    );
  }
  return Tu;
}
var ss = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var jm;
function zp() {
  return (
    jm ||
      ((jm = 1),
      (ss.read = function (n, a, u, s, c) {
        var m,
          o,
          h = c * 8 - s - 1,
          S = (1 << h) - 1,
          x = S >> 1,
          B = -7,
          v = u ? c - 1 : 0,
          _ = u ? -1 : 1,
          O = n[a + v];
        for (v += _, m = O & ((1 << -B) - 1), O >>= -B, B += h; B > 0; m = m * 256 + n[a + v], v += _, B -= 8);
        for (o = m & ((1 << -B) - 1), m >>= -B, B += s; B > 0; o = o * 256 + n[a + v], v += _, B -= 8);
        if (m === 0) m = 1 - x;
        else {
          if (m === S) return o ? NaN : (O ? -1 : 1) * (1 / 0);
          (o = o + Math.pow(2, s)), (m = m - x);
        }
        return (O ? -1 : 1) * o * Math.pow(2, m - s);
      }),
      (ss.write = function (n, a, u, s, c, m) {
        var o,
          h,
          S,
          x = m * 8 - c - 1,
          B = (1 << x) - 1,
          v = B >> 1,
          _ = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          O = s ? 0 : m - 1,
          W = s ? 1 : -1,
          ce = a < 0 || (a === 0 && 1 / a < 0) ? 1 : 0;
        for (
          a = Math.abs(a),
            isNaN(a) || a === 1 / 0
              ? ((h = isNaN(a) ? 1 : 0), (o = B))
              : ((o = Math.floor(Math.log(a) / Math.LN2)),
                a * (S = Math.pow(2, -o)) < 1 && (o--, (S *= 2)),
                o + v >= 1 ? (a += _ / S) : (a += _ * Math.pow(2, 1 - v)),
                a * S >= 2 && (o++, (S /= 2)),
                o + v >= B
                  ? ((h = 0), (o = B))
                  : o + v >= 1
                    ? ((h = (a * S - 1) * Math.pow(2, c)), (o = o + v))
                    : ((h = a * Math.pow(2, v - 1) * Math.pow(2, c)), (o = 0)));
          c >= 8;
          n[u + O] = h & 255, O += W, h /= 256, c -= 8
        );
        for (o = (o << c) | h, x += c; x > 0; n[u + O] = o & 255, O += W, o /= 256, x -= 8);
        n[u + O - W] |= ce * 128;
      })),
    ss
  );
}
var Cm;
function Hu() {
  return (
    Cm ||
      ((Cm = 1),
      (function (n) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */ const a = mv(),
          u = zp(),
          s =
            typeof Symbol == 'function' && typeof Symbol.for == 'function'
              ? Symbol.for('nodejs.util.inspect.custom')
              : null;
        (n.Buffer = h), (n.SlowBuffer = Q), (n.INSPECT_MAX_BYTES = 50);
        const c = 2147483647;
        (n.kMaxLength = c),
          (h.TYPED_ARRAY_SUPPORT = m()),
          !h.TYPED_ARRAY_SUPPORT &&
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
        Object.defineProperty(h.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (h.isBuffer(this)) return this.buffer;
          }
        }),
          Object.defineProperty(h.prototype, 'offset', {
            enumerable: !0,
            get: function () {
              if (h.isBuffer(this)) return this.byteOffset;
            }
          });
        function o(b) {
          if (b > c) throw new RangeError('The value "' + b + '" is invalid for option "size"');
          const d = new Uint8Array(b);
          return Object.setPrototypeOf(d, h.prototype), d;
        }
        function h(b, d, p) {
          if (typeof b == 'number') {
            if (typeof d == 'string')
              throw new TypeError('The "string" argument must be of type string. Received type number');
            return v(b);
          }
          return S(b, d, p);
        }
        h.poolSize = 8192;
        function S(b, d, p) {
          if (typeof b == 'string') return _(b, d);
          if (ArrayBuffer.isView(b)) return W(b);
          if (b == null)
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof b
            );
          if (
            pe(b, ArrayBuffer) ||
            (b && pe(b.buffer, ArrayBuffer)) ||
            (typeof SharedArrayBuffer < 'u' && (pe(b, SharedArrayBuffer) || (b && pe(b.buffer, SharedArrayBuffer))))
          )
            return ce(b, d, p);
          if (typeof b == 'number')
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          const H = b.valueOf && b.valueOf();
          if (H != null && H !== b) return h.from(H, d, p);
          const te = de(b);
          if (te) return te;
          if (typeof Symbol < 'u' && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == 'function')
            return h.from(b[Symbol.toPrimitive]('string'), d, p);
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof b
          );
        }
        (h.from = function (b, d, p) {
          return S(b, d, p);
        }),
          Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(h, Uint8Array);
        function x(b) {
          if (typeof b != 'number') throw new TypeError('"size" argument must be of type number');
          if (b < 0) throw new RangeError('The value "' + b + '" is invalid for option "size"');
        }
        function B(b, d, p) {
          return x(b), b <= 0 ? o(b) : d !== void 0 ? (typeof p == 'string' ? o(b).fill(d, p) : o(b).fill(d)) : o(b);
        }
        h.alloc = function (b, d, p) {
          return B(b, d, p);
        };
        function v(b) {
          return x(b), o(b < 0 ? 0 : ve(b) | 0);
        }
        (h.allocUnsafe = function (b) {
          return v(b);
        }),
          (h.allocUnsafeSlow = function (b) {
            return v(b);
          });
        function _(b, d) {
          if (((typeof d != 'string' || d === '') && (d = 'utf8'), !h.isEncoding(d)))
            throw new TypeError('Unknown encoding: ' + d);
          const p = je(b, d) | 0;
          let H = o(p);
          const te = H.write(b, d);
          return te !== p && (H = H.slice(0, te)), H;
        }
        function O(b) {
          const d = b.length < 0 ? 0 : ve(b.length) | 0,
            p = o(d);
          for (let H = 0; H < d; H += 1) p[H] = b[H] & 255;
          return p;
        }
        function W(b) {
          if (pe(b, Uint8Array)) {
            const d = new Uint8Array(b);
            return ce(d.buffer, d.byteOffset, d.byteLength);
          }
          return O(b);
        }
        function ce(b, d, p) {
          if (d < 0 || b.byteLength < d) throw new RangeError('"offset" is outside of buffer bounds');
          if (b.byteLength < d + (p || 0)) throw new RangeError('"length" is outside of buffer bounds');
          let H;
          return (
            d === void 0 && p === void 0
              ? (H = new Uint8Array(b))
              : p === void 0
                ? (H = new Uint8Array(b, d))
                : (H = new Uint8Array(b, d, p)),
            Object.setPrototypeOf(H, h.prototype),
            H
          );
        }
        function de(b) {
          if (h.isBuffer(b)) {
            const d = ve(b.length) | 0,
              p = o(d);
            return p.length === 0 || b.copy(p, 0, 0, d), p;
          }
          if (b.length !== void 0) return typeof b.length != 'number' || ge(b.length) ? o(0) : O(b);
          if (b.type === 'Buffer' && Array.isArray(b.data)) return O(b.data);
        }
        function ve(b) {
          if (b >= c)
            throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + c.toString(16) + ' bytes');
          return b | 0;
        }
        function Q(b) {
          return +b != b && (b = 0), h.alloc(+b);
        }
        (h.isBuffer = function (d) {
          return d != null && d._isBuffer === !0 && d !== h.prototype;
        }),
          (h.compare = function (d, p) {
            if (
              (pe(d, Uint8Array) && (d = h.from(d, d.offset, d.byteLength)),
              pe(p, Uint8Array) && (p = h.from(p, p.offset, p.byteLength)),
              !h.isBuffer(d) || !h.isBuffer(p))
            )
              throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (d === p) return 0;
            let H = d.length,
              te = p.length;
            for (let j = 0, k = Math.min(H, te); j < k; ++j)
              if (d[j] !== p[j]) {
                (H = d[j]), (te = p[j]);
                break;
              }
            return H < te ? -1 : te < H ? 1 : 0;
          }),
          (h.isEncoding = function (d) {
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
          (h.concat = function (d, p) {
            if (!Array.isArray(d)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (d.length === 0) return h.alloc(0);
            let H;
            if (p === void 0) for (p = 0, H = 0; H < d.length; ++H) p += d[H].length;
            const te = h.allocUnsafe(p);
            let j = 0;
            for (H = 0; H < d.length; ++H) {
              let k = d[H];
              if (pe(k, Uint8Array))
                j + k.length > te.length
                  ? (h.isBuffer(k) || (k = h.from(k)), k.copy(te, j))
                  : Uint8Array.prototype.set.call(te, k, j);
              else if (h.isBuffer(k)) k.copy(te, j);
              else throw new TypeError('"list" argument must be an Array of Buffers');
              j += k.length;
            }
            return te;
          });
        function je(b, d) {
          if (h.isBuffer(b)) return b.length;
          if (ArrayBuffer.isView(b) || pe(b, ArrayBuffer)) return b.byteLength;
          if (typeof b != 'string')
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
            );
          const p = b.length,
            H = arguments.length > 2 && arguments[2] === !0;
          if (!H && p === 0) return 0;
          let te = !1;
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
                return L(b).length;
              default:
                if (te) return H ? -1 : re(b).length;
                (d = ('' + d).toLowerCase()), (te = !0);
            }
        }
        h.byteLength = je;
        function We(b, d, p) {
          let H = !1;
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
                return I(this, d, p);
              case 'base64':
                return Y(this, d, p);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return D(this, d, p);
              default:
                if (H) throw new TypeError('Unknown encoding: ' + b);
                (b = (b + '').toLowerCase()), (H = !0);
            }
        }
        h.prototype._isBuffer = !0;
        function _e(b, d, p) {
          const H = b[d];
          (b[d] = b[p]), (b[p] = H);
        }
        (h.prototype.swap16 = function () {
          const d = this.length;
          if (d % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (let p = 0; p < d; p += 2) _e(this, p, p + 1);
          return this;
        }),
          (h.prototype.swap32 = function () {
            const d = this.length;
            if (d % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (let p = 0; p < d; p += 4) _e(this, p, p + 3), _e(this, p + 1, p + 2);
            return this;
          }),
          (h.prototype.swap64 = function () {
            const d = this.length;
            if (d % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (let p = 0; p < d; p += 8)
              _e(this, p, p + 7), _e(this, p + 1, p + 6), _e(this, p + 2, p + 5), _e(this, p + 3, p + 4);
            return this;
          }),
          (h.prototype.toString = function () {
            const d = this.length;
            return d === 0 ? '' : arguments.length === 0 ? X(this, 0, d) : We.apply(this, arguments);
          }),
          (h.prototype.toLocaleString = h.prototype.toString),
          (h.prototype.equals = function (d) {
            if (!h.isBuffer(d)) throw new TypeError('Argument must be a Buffer');
            return this === d ? !0 : h.compare(this, d) === 0;
          }),
          (h.prototype.inspect = function () {
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
          s && (h.prototype[s] = h.prototype.inspect),
          (h.prototype.compare = function (d, p, H, te, j) {
            if ((pe(d, Uint8Array) && (d = h.from(d, d.offset, d.byteLength)), !h.isBuffer(d)))
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof d
              );
            if (
              (p === void 0 && (p = 0),
              H === void 0 && (H = d ? d.length : 0),
              te === void 0 && (te = 0),
              j === void 0 && (j = this.length),
              p < 0 || H > d.length || te < 0 || j > this.length)
            )
              throw new RangeError('out of range index');
            if (te >= j && p >= H) return 0;
            if (te >= j) return -1;
            if (p >= H) return 1;
            if (((p >>>= 0), (H >>>= 0), (te >>>= 0), (j >>>= 0), this === d)) return 0;
            let k = j - te,
              se = H - p;
            const Ee = Math.min(k, se),
              Be = this.slice(te, j),
              Ce = d.slice(p, H);
            for (let Pe = 0; Pe < Ee; ++Pe)
              if (Be[Pe] !== Ce[Pe]) {
                (k = Be[Pe]), (se = Ce[Pe]);
                break;
              }
            return k < se ? -1 : se < k ? 1 : 0;
          });
        function we(b, d, p, H, te) {
          if (b.length === 0) return -1;
          if (
            (typeof p == 'string'
              ? ((H = p), (p = 0))
              : p > 2147483647
                ? (p = 2147483647)
                : p < -2147483648 && (p = -2147483648),
            (p = +p),
            ge(p) && (p = te ? 0 : b.length - 1),
            p < 0 && (p = b.length + p),
            p >= b.length)
          ) {
            if (te) return -1;
            p = b.length - 1;
          } else if (p < 0)
            if (te) p = 0;
            else return -1;
          if ((typeof d == 'string' && (d = h.from(d, H)), h.isBuffer(d)))
            return d.length === 0 ? -1 : De(b, d, p, H, te);
          if (typeof d == 'number')
            return (
              (d = d & 255),
              typeof Uint8Array.prototype.indexOf == 'function'
                ? te
                  ? Uint8Array.prototype.indexOf.call(b, d, p)
                  : Uint8Array.prototype.lastIndexOf.call(b, d, p)
                : De(b, [d], p, H, te)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function De(b, d, p, H, te) {
          let j = 1,
            k = b.length,
            se = d.length;
          if (
            H !== void 0 &&
            ((H = String(H).toLowerCase()), H === 'ucs2' || H === 'ucs-2' || H === 'utf16le' || H === 'utf-16le')
          ) {
            if (b.length < 2 || d.length < 2) return -1;
            (j = 2), (k /= 2), (se /= 2), (p /= 2);
          }
          function Ee(Ce, Pe) {
            return j === 1 ? Ce[Pe] : Ce.readUInt16BE(Pe * j);
          }
          let Be;
          if (te) {
            let Ce = -1;
            for (Be = p; Be < k; Be++)
              if (Ee(b, Be) === Ee(d, Ce === -1 ? 0 : Be - Ce)) {
                if ((Ce === -1 && (Ce = Be), Be - Ce + 1 === se)) return Ce * j;
              } else Ce !== -1 && (Be -= Be - Ce), (Ce = -1);
          } else
            for (p + se > k && (p = k - se), Be = p; Be >= 0; Be--) {
              let Ce = !0;
              for (let Pe = 0; Pe < se; Pe++)
                if (Ee(b, Be + Pe) !== Ee(d, Pe)) {
                  Ce = !1;
                  break;
                }
              if (Ce) return Be;
            }
          return -1;
        }
        (h.prototype.includes = function (d, p, H) {
          return this.indexOf(d, p, H) !== -1;
        }),
          (h.prototype.indexOf = function (d, p, H) {
            return we(this, d, p, H, !0);
          }),
          (h.prototype.lastIndexOf = function (d, p, H) {
            return we(this, d, p, H, !1);
          });
        function y(b, d, p, H) {
          p = Number(p) || 0;
          const te = b.length - p;
          H ? ((H = Number(H)), H > te && (H = te)) : (H = te);
          const j = d.length;
          H > j / 2 && (H = j / 2);
          let k;
          for (k = 0; k < H; ++k) {
            const se = parseInt(d.substr(k * 2, 2), 16);
            if (ge(se)) return k;
            b[p + k] = se;
          }
          return k;
        }
        function E(b, d, p, H) {
          return J(re(d, b.length - p), b, p, H);
        }
        function w(b, d, p, H) {
          return J(N(d), b, p, H);
        }
        function F(b, d, p, H) {
          return J(L(d), b, p, H);
        }
        function V(b, d, p, H) {
          return J(z(d, b.length - p), b, p, H);
        }
        (h.prototype.write = function (d, p, H, te) {
          if (p === void 0) (te = 'utf8'), (H = this.length), (p = 0);
          else if (H === void 0 && typeof p == 'string') (te = p), (H = this.length), (p = 0);
          else if (isFinite(p))
            (p = p >>> 0), isFinite(H) ? ((H = H >>> 0), te === void 0 && (te = 'utf8')) : ((te = H), (H = void 0));
          else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          const j = this.length - p;
          if (((H === void 0 || H > j) && (H = j), (d.length > 0 && (H < 0 || p < 0)) || p > this.length))
            throw new RangeError('Attempt to write outside buffer bounds');
          te || (te = 'utf8');
          let k = !1;
          for (;;)
            switch (te) {
              case 'hex':
                return y(this, d, p, H);
              case 'utf8':
              case 'utf-8':
                return E(this, d, p, H);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return w(this, d, p, H);
              case 'base64':
                return F(this, d, p, H);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return V(this, d, p, H);
              default:
                if (k) throw new TypeError('Unknown encoding: ' + te);
                (te = ('' + te).toLowerCase()), (k = !0);
            }
        }),
          (h.prototype.toJSON = function () {
            return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        function Y(b, d, p) {
          return d === 0 && p === b.length ? a.fromByteArray(b) : a.fromByteArray(b.slice(d, p));
        }
        function X(b, d, p) {
          p = Math.min(b.length, p);
          const H = [];
          let te = d;
          for (; te < p; ) {
            const j = b[te];
            let k = null,
              se = j > 239 ? 4 : j > 223 ? 3 : j > 191 ? 2 : 1;
            if (te + se <= p) {
              let Ee, Be, Ce, Pe;
              switch (se) {
                case 1:
                  j < 128 && (k = j);
                  break;
                case 2:
                  (Ee = b[te + 1]), (Ee & 192) === 128 && ((Pe = ((j & 31) << 6) | (Ee & 63)), Pe > 127 && (k = Pe));
                  break;
                case 3:
                  (Ee = b[te + 1]),
                    (Be = b[te + 2]),
                    (Ee & 192) === 128 &&
                      (Be & 192) === 128 &&
                      ((Pe = ((j & 15) << 12) | ((Ee & 63) << 6) | (Be & 63)),
                      Pe > 2047 && (Pe < 55296 || Pe > 57343) && (k = Pe));
                  break;
                case 4:
                  (Ee = b[te + 1]),
                    (Be = b[te + 2]),
                    (Ce = b[te + 3]),
                    (Ee & 192) === 128 &&
                      (Be & 192) === 128 &&
                      (Ce & 192) === 128 &&
                      ((Pe = ((j & 15) << 18) | ((Ee & 63) << 12) | ((Be & 63) << 6) | (Ce & 63)),
                      Pe > 65535 && Pe < 1114112 && (k = Pe));
              }
            }
            k === null
              ? ((k = 65533), (se = 1))
              : k > 65535 && ((k -= 65536), H.push(((k >>> 10) & 1023) | 55296), (k = 56320 | (k & 1023))),
              H.push(k),
              (te += se);
          }
          return T(H);
        }
        const C = 4096;
        function T(b) {
          const d = b.length;
          if (d <= C) return String.fromCharCode.apply(String, b);
          let p = '',
            H = 0;
          for (; H < d; ) p += String.fromCharCode.apply(String, b.slice(H, (H += C)));
          return p;
        }
        function G(b, d, p) {
          let H = '';
          p = Math.min(b.length, p);
          for (let te = d; te < p; ++te) H += String.fromCharCode(b[te] & 127);
          return H;
        }
        function I(b, d, p) {
          let H = '';
          p = Math.min(b.length, p);
          for (let te = d; te < p; ++te) H += String.fromCharCode(b[te]);
          return H;
        }
        function ue(b, d, p) {
          const H = b.length;
          (!d || d < 0) && (d = 0), (!p || p < 0 || p > H) && (p = H);
          let te = '';
          for (let j = d; j < p; ++j) te += Me[b[j]];
          return te;
        }
        function D(b, d, p) {
          const H = b.slice(d, p);
          let te = '';
          for (let j = 0; j < H.length - 1; j += 2) te += String.fromCharCode(H[j] + H[j + 1] * 256);
          return te;
        }
        h.prototype.slice = function (d, p) {
          const H = this.length;
          (d = ~~d),
            (p = p === void 0 ? H : ~~p),
            d < 0 ? ((d += H), d < 0 && (d = 0)) : d > H && (d = H),
            p < 0 ? ((p += H), p < 0 && (p = 0)) : p > H && (p = H),
            p < d && (p = d);
          const te = this.subarray(d, p);
          return Object.setPrototypeOf(te, h.prototype), te;
        };
        function ee(b, d, p) {
          if (b % 1 !== 0 || b < 0) throw new RangeError('offset is not uint');
          if (b + d > p) throw new RangeError('Trying to access beyond buffer length');
        }
        (h.prototype.readUintLE = h.prototype.readUIntLE =
          function (d, p, H) {
            (d = d >>> 0), (p = p >>> 0), H || ee(d, p, this.length);
            let te = this[d],
              j = 1,
              k = 0;
            for (; ++k < p && (j *= 256); ) te += this[d + k] * j;
            return te;
          }),
          (h.prototype.readUintBE = h.prototype.readUIntBE =
            function (d, p, H) {
              (d = d >>> 0), (p = p >>> 0), H || ee(d, p, this.length);
              let te = this[d + --p],
                j = 1;
              for (; p > 0 && (j *= 256); ) te += this[d + --p] * j;
              return te;
            }),
          (h.prototype.readUint8 = h.prototype.readUInt8 =
            function (d, p) {
              return (d = d >>> 0), p || ee(d, 1, this.length), this[d];
            }),
          (h.prototype.readUint16LE = h.prototype.readUInt16LE =
            function (d, p) {
              return (d = d >>> 0), p || ee(d, 2, this.length), this[d] | (this[d + 1] << 8);
            }),
          (h.prototype.readUint16BE = h.prototype.readUInt16BE =
            function (d, p) {
              return (d = d >>> 0), p || ee(d, 2, this.length), (this[d] << 8) | this[d + 1];
            }),
          (h.prototype.readUint32LE = h.prototype.readUInt32LE =
            function (d, p) {
              return (
                (d = d >>> 0),
                p || ee(d, 4, this.length),
                (this[d] | (this[d + 1] << 8) | (this[d + 2] << 16)) + this[d + 3] * 16777216
              );
            }),
          (h.prototype.readUint32BE = h.prototype.readUInt32BE =
            function (d, p) {
              return (
                (d = d >>> 0),
                p || ee(d, 4, this.length),
                this[d] * 16777216 + ((this[d + 1] << 16) | (this[d + 2] << 8) | this[d + 3])
              );
            }),
          (h.prototype.readBigUInt64LE = qe(function (d) {
            (d = d >>> 0), ie(d, 'offset');
            const p = this[d],
              H = this[d + 7];
            (p === void 0 || H === void 0) && P(d, this.length - 8);
            const te = p + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24,
              j = this[++d] + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + H * 2 ** 24;
            return BigInt(te) + (BigInt(j) << BigInt(32));
          })),
          (h.prototype.readBigUInt64BE = qe(function (d) {
            (d = d >>> 0), ie(d, 'offset');
            const p = this[d],
              H = this[d + 7];
            (p === void 0 || H === void 0) && P(d, this.length - 8);
            const te = p * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d],
              j = this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + H;
            return (BigInt(te) << BigInt(32)) + BigInt(j);
          })),
          (h.prototype.readIntLE = function (d, p, H) {
            (d = d >>> 0), (p = p >>> 0), H || ee(d, p, this.length);
            let te = this[d],
              j = 1,
              k = 0;
            for (; ++k < p && (j *= 256); ) te += this[d + k] * j;
            return (j *= 128), te >= j && (te -= Math.pow(2, 8 * p)), te;
          }),
          (h.prototype.readIntBE = function (d, p, H) {
            (d = d >>> 0), (p = p >>> 0), H || ee(d, p, this.length);
            let te = p,
              j = 1,
              k = this[d + --te];
            for (; te > 0 && (j *= 256); ) k += this[d + --te] * j;
            return (j *= 128), k >= j && (k -= Math.pow(2, 8 * p)), k;
          }),
          (h.prototype.readInt8 = function (d, p) {
            return (d = d >>> 0), p || ee(d, 1, this.length), this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d];
          }),
          (h.prototype.readInt16LE = function (d, p) {
            (d = d >>> 0), p || ee(d, 2, this.length);
            const H = this[d] | (this[d + 1] << 8);
            return H & 32768 ? H | 4294901760 : H;
          }),
          (h.prototype.readInt16BE = function (d, p) {
            (d = d >>> 0), p || ee(d, 2, this.length);
            const H = this[d + 1] | (this[d] << 8);
            return H & 32768 ? H | 4294901760 : H;
          }),
          (h.prototype.readInt32LE = function (d, p) {
            return (
              (d = d >>> 0),
              p || ee(d, 4, this.length),
              this[d] | (this[d + 1] << 8) | (this[d + 2] << 16) | (this[d + 3] << 24)
            );
          }),
          (h.prototype.readInt32BE = function (d, p) {
            return (
              (d = d >>> 0),
              p || ee(d, 4, this.length),
              (this[d] << 24) | (this[d + 1] << 16) | (this[d + 2] << 8) | this[d + 3]
            );
          }),
          (h.prototype.readBigInt64LE = qe(function (d) {
            (d = d >>> 0), ie(d, 'offset');
            const p = this[d],
              H = this[d + 7];
            (p === void 0 || H === void 0) && P(d, this.length - 8);
            const te = this[d + 4] + this[d + 5] * 2 ** 8 + this[d + 6] * 2 ** 16 + (H << 24);
            return (
              (BigInt(te) << BigInt(32)) + BigInt(p + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24)
            );
          })),
          (h.prototype.readBigInt64BE = qe(function (d) {
            (d = d >>> 0), ie(d, 'offset');
            const p = this[d],
              H = this[d + 7];
            (p === void 0 || H === void 0) && P(d, this.length - 8);
            const te = (p << 24) + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d];
            return (
              (BigInt(te) << BigInt(32)) + BigInt(this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + H)
            );
          })),
          (h.prototype.readFloatLE = function (d, p) {
            return (d = d >>> 0), p || ee(d, 4, this.length), u.read(this, d, !0, 23, 4);
          }),
          (h.prototype.readFloatBE = function (d, p) {
            return (d = d >>> 0), p || ee(d, 4, this.length), u.read(this, d, !1, 23, 4);
          }),
          (h.prototype.readDoubleLE = function (d, p) {
            return (d = d >>> 0), p || ee(d, 8, this.length), u.read(this, d, !0, 52, 8);
          }),
          (h.prototype.readDoubleBE = function (d, p) {
            return (d = d >>> 0), p || ee(d, 8, this.length), u.read(this, d, !1, 52, 8);
          });
        function be(b, d, p, H, te, j) {
          if (!h.isBuffer(b)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (d > te || d < j) throw new RangeError('"value" argument is out of bounds');
          if (p + H > b.length) throw new RangeError('Index out of range');
        }
        (h.prototype.writeUintLE = h.prototype.writeUIntLE =
          function (d, p, H, te) {
            if (((d = +d), (p = p >>> 0), (H = H >>> 0), !te)) {
              const se = Math.pow(2, 8 * H) - 1;
              be(this, d, p, H, se, 0);
            }
            let j = 1,
              k = 0;
            for (this[p] = d & 255; ++k < H && (j *= 256); ) this[p + k] = (d / j) & 255;
            return p + H;
          }),
          (h.prototype.writeUintBE = h.prototype.writeUIntBE =
            function (d, p, H, te) {
              if (((d = +d), (p = p >>> 0), (H = H >>> 0), !te)) {
                const se = Math.pow(2, 8 * H) - 1;
                be(this, d, p, H, se, 0);
              }
              let j = H - 1,
                k = 1;
              for (this[p + j] = d & 255; --j >= 0 && (k *= 256); ) this[p + j] = (d / k) & 255;
              return p + H;
            }),
          (h.prototype.writeUint8 = h.prototype.writeUInt8 =
            function (d, p, H) {
              return (d = +d), (p = p >>> 0), H || be(this, d, p, 1, 255, 0), (this[p] = d & 255), p + 1;
            }),
          (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
            function (d, p, H) {
              return (
                (d = +d),
                (p = p >>> 0),
                H || be(this, d, p, 2, 65535, 0),
                (this[p] = d & 255),
                (this[p + 1] = d >>> 8),
                p + 2
              );
            }),
          (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
            function (d, p, H) {
              return (
                (d = +d),
                (p = p >>> 0),
                H || be(this, d, p, 2, 65535, 0),
                (this[p] = d >>> 8),
                (this[p + 1] = d & 255),
                p + 2
              );
            }),
          (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
            function (d, p, H) {
              return (
                (d = +d),
                (p = p >>> 0),
                H || be(this, d, p, 4, 4294967295, 0),
                (this[p + 3] = d >>> 24),
                (this[p + 2] = d >>> 16),
                (this[p + 1] = d >>> 8),
                (this[p] = d & 255),
                p + 4
              );
            }),
          (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
            function (d, p, H) {
              return (
                (d = +d),
                (p = p >>> 0),
                H || be(this, d, p, 4, 4294967295, 0),
                (this[p] = d >>> 24),
                (this[p + 1] = d >>> 16),
                (this[p + 2] = d >>> 8),
                (this[p + 3] = d & 255),
                p + 4
              );
            });
        function me(b, d, p, H, te) {
          Z(d, H, te, b, p, 7);
          let j = Number(d & BigInt(4294967295));
          (b[p++] = j), (j = j >> 8), (b[p++] = j), (j = j >> 8), (b[p++] = j), (j = j >> 8), (b[p++] = j);
          let k = Number((d >> BigInt(32)) & BigInt(4294967295));
          return (b[p++] = k), (k = k >> 8), (b[p++] = k), (k = k >> 8), (b[p++] = k), (k = k >> 8), (b[p++] = k), p;
        }
        function A(b, d, p, H, te) {
          Z(d, H, te, b, p, 7);
          let j = Number(d & BigInt(4294967295));
          (b[p + 7] = j), (j = j >> 8), (b[p + 6] = j), (j = j >> 8), (b[p + 5] = j), (j = j >> 8), (b[p + 4] = j);
          let k = Number((d >> BigInt(32)) & BigInt(4294967295));
          return (
            (b[p + 3] = k), (k = k >> 8), (b[p + 2] = k), (k = k >> 8), (b[p + 1] = k), (k = k >> 8), (b[p] = k), p + 8
          );
        }
        (h.prototype.writeBigUInt64LE = qe(function (d, p = 0) {
          return me(this, d, p, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
          (h.prototype.writeBigUInt64BE = qe(function (d, p = 0) {
            return A(this, d, p, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (h.prototype.writeIntLE = function (d, p, H, te) {
            if (((d = +d), (p = p >>> 0), !te)) {
              const Ee = Math.pow(2, 8 * H - 1);
              be(this, d, p, H, Ee - 1, -Ee);
            }
            let j = 0,
              k = 1,
              se = 0;
            for (this[p] = d & 255; ++j < H && (k *= 256); )
              d < 0 && se === 0 && this[p + j - 1] !== 0 && (se = 1), (this[p + j] = (((d / k) >> 0) - se) & 255);
            return p + H;
          }),
          (h.prototype.writeIntBE = function (d, p, H, te) {
            if (((d = +d), (p = p >>> 0), !te)) {
              const Ee = Math.pow(2, 8 * H - 1);
              be(this, d, p, H, Ee - 1, -Ee);
            }
            let j = H - 1,
              k = 1,
              se = 0;
            for (this[p + j] = d & 255; --j >= 0 && (k *= 256); )
              d < 0 && se === 0 && this[p + j + 1] !== 0 && (se = 1), (this[p + j] = (((d / k) >> 0) - se) & 255);
            return p + H;
          }),
          (h.prototype.writeInt8 = function (d, p, H) {
            return (
              (d = +d),
              (p = p >>> 0),
              H || be(this, d, p, 1, 127, -128),
              d < 0 && (d = 255 + d + 1),
              (this[p] = d & 255),
              p + 1
            );
          }),
          (h.prototype.writeInt16LE = function (d, p, H) {
            return (
              (d = +d),
              (p = p >>> 0),
              H || be(this, d, p, 2, 32767, -32768),
              (this[p] = d & 255),
              (this[p + 1] = d >>> 8),
              p + 2
            );
          }),
          (h.prototype.writeInt16BE = function (d, p, H) {
            return (
              (d = +d),
              (p = p >>> 0),
              H || be(this, d, p, 2, 32767, -32768),
              (this[p] = d >>> 8),
              (this[p + 1] = d & 255),
              p + 2
            );
          }),
          (h.prototype.writeInt32LE = function (d, p, H) {
            return (
              (d = +d),
              (p = p >>> 0),
              H || be(this, d, p, 4, 2147483647, -2147483648),
              (this[p] = d & 255),
              (this[p + 1] = d >>> 8),
              (this[p + 2] = d >>> 16),
              (this[p + 3] = d >>> 24),
              p + 4
            );
          }),
          (h.prototype.writeInt32BE = function (d, p, H) {
            return (
              (d = +d),
              (p = p >>> 0),
              H || be(this, d, p, 4, 2147483647, -2147483648),
              d < 0 && (d = 4294967295 + d + 1),
              (this[p] = d >>> 24),
              (this[p + 1] = d >>> 16),
              (this[p + 2] = d >>> 8),
              (this[p + 3] = d & 255),
              p + 4
            );
          }),
          (h.prototype.writeBigInt64LE = qe(function (d, p = 0) {
            return me(this, d, p, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          })),
          (h.prototype.writeBigInt64BE = qe(function (d, p = 0) {
            return A(this, d, p, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          }));
        function Ue(b, d, p, H, te, j) {
          if (p + H > b.length) throw new RangeError('Index out of range');
          if (p < 0) throw new RangeError('Index out of range');
        }
        function Ne(b, d, p, H, te) {
          return (d = +d), (p = p >>> 0), te || Ue(b, d, p, 4), u.write(b, d, p, H, 23, 4), p + 4;
        }
        (h.prototype.writeFloatLE = function (d, p, H) {
          return Ne(this, d, p, !0, H);
        }),
          (h.prototype.writeFloatBE = function (d, p, H) {
            return Ne(this, d, p, !1, H);
          });
        function Ke(b, d, p, H, te) {
          return (d = +d), (p = p >>> 0), te || Ue(b, d, p, 8), u.write(b, d, p, H, 52, 8), p + 8;
        }
        (h.prototype.writeDoubleLE = function (d, p, H) {
          return Ke(this, d, p, !0, H);
        }),
          (h.prototype.writeDoubleBE = function (d, p, H) {
            return Ke(this, d, p, !1, H);
          }),
          (h.prototype.copy = function (d, p, H, te) {
            if (!h.isBuffer(d)) throw new TypeError('argument should be a Buffer');
            if (
              (H || (H = 0),
              !te && te !== 0 && (te = this.length),
              p >= d.length && (p = d.length),
              p || (p = 0),
              te > 0 && te < H && (te = H),
              te === H || d.length === 0 || this.length === 0)
            )
              return 0;
            if (p < 0) throw new RangeError('targetStart out of bounds');
            if (H < 0 || H >= this.length) throw new RangeError('Index out of range');
            if (te < 0) throw new RangeError('sourceEnd out of bounds');
            te > this.length && (te = this.length), d.length - p < te - H && (te = d.length - p + H);
            const j = te - H;
            return (
              this === d && typeof Uint8Array.prototype.copyWithin == 'function'
                ? this.copyWithin(p, H, te)
                : Uint8Array.prototype.set.call(d, this.subarray(H, te), p),
              j
            );
          }),
          (h.prototype.fill = function (d, p, H, te) {
            if (typeof d == 'string') {
              if (
                (typeof p == 'string'
                  ? ((te = p), (p = 0), (H = this.length))
                  : typeof H == 'string' && ((te = H), (H = this.length)),
                te !== void 0 && typeof te != 'string')
              )
                throw new TypeError('encoding must be a string');
              if (typeof te == 'string' && !h.isEncoding(te)) throw new TypeError('Unknown encoding: ' + te);
              if (d.length === 1) {
                const k = d.charCodeAt(0);
                ((te === 'utf8' && k < 128) || te === 'latin1') && (d = k);
              }
            } else typeof d == 'number' ? (d = d & 255) : typeof d == 'boolean' && (d = Number(d));
            if (p < 0 || this.length < p || this.length < H) throw new RangeError('Out of range index');
            if (H <= p) return this;
            (p = p >>> 0), (H = H === void 0 ? this.length : H >>> 0), d || (d = 0);
            let j;
            if (typeof d == 'number') for (j = p; j < H; ++j) this[j] = d;
            else {
              const k = h.isBuffer(d) ? d : h.from(d, te),
                se = k.length;
              if (se === 0) throw new TypeError('The value "' + d + '" is invalid for argument "value"');
              for (j = 0; j < H - p; ++j) this[j + p] = k[j % se];
            }
            return this;
          });
        const Oe = {};
        function Re(b, d, p) {
          Oe[b] = class extends p {
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
            set code(te) {
              Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: te, writable: !0 });
            }
            toString() {
              return `${this.name} [${b}]: ${this.message}`;
            }
          };
        }
        Re(
          'ERR_BUFFER_OUT_OF_BOUNDS',
          function (b) {
            return b ? `${b} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
          },
          RangeError
        ),
          Re(
            'ERR_INVALID_ARG_TYPE',
            function (b, d) {
              return `The "${b}" argument must be of type number. Received type ${typeof d}`;
            },
            TypeError
          ),
          Re(
            'ERR_OUT_OF_RANGE',
            function (b, d, p) {
              let H = `The value of "${b}" is out of range.`,
                te = p;
              return (
                Number.isInteger(p) && Math.abs(p) > 2 ** 32
                  ? (te = M(String(p)))
                  : typeof p == 'bigint' &&
                    ((te = String(p)),
                    (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (te = M(te)),
                    (te += 'n')),
                (H += ` It must be ${d}. Received ${te}`),
                H
              );
            },
            RangeError
          );
        function M(b) {
          let d = '',
            p = b.length;
          const H = b[0] === '-' ? 1 : 0;
          for (; p >= H + 4; p -= 3) d = `_${b.slice(p - 3, p)}${d}`;
          return `${b.slice(0, p)}${d}`;
        }
        function R(b, d, p) {
          ie(d, 'offset'), (b[d] === void 0 || b[d + p] === void 0) && P(d, b.length - (p + 1));
        }
        function Z(b, d, p, H, te, j) {
          if (b > p || b < d) {
            const k = typeof d == 'bigint' ? 'n' : '';
            let se;
            throw (
              (d === 0 || d === BigInt(0)
                ? (se = `>= 0${k} and < 2${k} ** ${(j + 1) * 8}${k}`)
                : (se = `>= -(2${k} ** ${(j + 1) * 8 - 1}${k}) and < 2 ** ${(j + 1) * 8 - 1}${k}`),
              new Oe.ERR_OUT_OF_RANGE('value', se, b))
            );
          }
          R(H, te, j);
        }
        function ie(b, d) {
          if (typeof b != 'number') throw new Oe.ERR_INVALID_ARG_TYPE(d, 'number', b);
        }
        function P(b, d, p) {
          throw Math.floor(b) !== b
            ? (ie(b, p), new Oe.ERR_OUT_OF_RANGE('offset', 'an integer', b))
            : d < 0
              ? new Oe.ERR_BUFFER_OUT_OF_BOUNDS()
              : new Oe.ERR_OUT_OF_RANGE('offset', `>= 0 and <= ${d}`, b);
        }
        const ne = /[^+/0-9A-Za-z-_]/g;
        function fe(b) {
          if (((b = b.split('=')[0]), (b = b.trim().replace(ne, '')), b.length < 2)) return '';
          for (; b.length % 4 !== 0; ) b = b + '=';
          return b;
        }
        function re(b, d) {
          d = d || 1 / 0;
          let p;
          const H = b.length;
          let te = null;
          const j = [];
          for (let k = 0; k < H; ++k) {
            if (((p = b.charCodeAt(k)), p > 55295 && p < 57344)) {
              if (!te) {
                if (p > 56319) {
                  (d -= 3) > -1 && j.push(239, 191, 189);
                  continue;
                } else if (k + 1 === H) {
                  (d -= 3) > -1 && j.push(239, 191, 189);
                  continue;
                }
                te = p;
                continue;
              }
              if (p < 56320) {
                (d -= 3) > -1 && j.push(239, 191, 189), (te = p);
                continue;
              }
              p = (((te - 55296) << 10) | (p - 56320)) + 65536;
            } else te && (d -= 3) > -1 && j.push(239, 191, 189);
            if (((te = null), p < 128)) {
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
        function N(b) {
          const d = [];
          for (let p = 0; p < b.length; ++p) d.push(b.charCodeAt(p) & 255);
          return d;
        }
        function z(b, d) {
          let p, H, te;
          const j = [];
          for (let k = 0; k < b.length && !((d -= 2) < 0); ++k)
            (p = b.charCodeAt(k)), (H = p >> 8), (te = p % 256), j.push(te), j.push(H);
          return j;
        }
        function L(b) {
          return a.toByteArray(fe(b));
        }
        function J(b, d, p, H) {
          let te;
          for (te = 0; te < H && !(te + p >= d.length || te >= b.length); ++te) d[te + p] = b[te];
          return te;
        }
        function pe(b, d) {
          return (
            b instanceof d ||
            (b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === d.name)
          );
        }
        function ge(b) {
          return b !== b;
        }
        const Me = (function () {
          const b = '0123456789abcdef',
            d = new Array(256);
          for (let p = 0; p < 16; ++p) {
            const H = p * 16;
            for (let te = 0; te < 16; ++te) d[H + te] = b[p] + b[te];
          }
          return d;
        })();
        function qe(b) {
          return typeof BigInt > 'u' ? tt : b;
        }
        function tt() {
          throw new Error('BigInt not supported');
        }
      })(uo)),
    uo
  );
}
var hs = { exports: {} },
  pv = hs.exports,
  km;
function Rs() {
  return (
    km ||
      ((km = 1),
      (function (n) {
        (function (a) {
          var u,
            s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            c = Math.ceil,
            m = Math.floor,
            o = '[BigNumber Error] ',
            h = o + 'Number primitive has more than 15 significant digits: ',
            S = 1e14,
            x = 14,
            B = 9007199254740991,
            v = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            _ = 1e7,
            O = 1e9;
          function W(we) {
            var De,
              y,
              E,
              w = (A.prototype = { constructor: A, toString: null, valueOf: null }),
              F = new A(1),
              V = 20,
              Y = 4,
              X = -7,
              C = 21,
              T = -1e7,
              G = 1e7,
              I = !1,
              ue = 1,
              D = 0,
              ee = {
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
              me = !0;
            function A(M, R) {
              var Z,
                ie,
                P,
                ne,
                fe,
                re,
                N,
                z,
                L = this;
              if (!(L instanceof A)) return new A(M, R);
              if (R == null) {
                if (M && M._isBigNumber === !0) {
                  (L.s = M.s),
                    !M.c || M.e > G
                      ? (L.c = L.e = null)
                      : M.e < T
                        ? (L.c = [(L.e = 0)])
                        : ((L.e = M.e), (L.c = M.c.slice()));
                  return;
                }
                if ((re = typeof M == 'number') && M * 0 == 0) {
                  if (((L.s = 1 / M < 0 ? ((M = -M), -1) : 1), M === ~~M)) {
                    for (ne = 0, fe = M; fe >= 10; fe /= 10, ne++);
                    ne > G ? (L.c = L.e = null) : ((L.e = ne), (L.c = [M]));
                    return;
                  }
                  z = String(M);
                } else {
                  if (!s.test((z = String(M)))) return E(L, z, re);
                  L.s = z.charCodeAt(0) == 45 ? ((z = z.slice(1)), -1) : 1;
                }
                (ne = z.indexOf('.')) > -1 && (z = z.replace('.', '')),
                  (fe = z.search(/e/i)) > 0
                    ? (ne < 0 && (ne = fe), (ne += +z.slice(fe + 1)), (z = z.substring(0, fe)))
                    : ne < 0 && (ne = z.length);
              } else {
                if ((Q(R, 2, be.length, 'Base'), R == 10 && me)) return (L = new A(M)), Oe(L, V + L.e + 1, Y);
                if (((z = String(M)), (re = typeof M == 'number'))) {
                  if (M * 0 != 0) return E(L, z, re, R);
                  if (
                    ((L.s = 1 / M < 0 ? ((z = z.slice(1)), -1) : 1), A.DEBUG && z.replace(/^0\.0*|\./, '').length > 15)
                  )
                    throw Error(h + M);
                } else L.s = z.charCodeAt(0) === 45 ? ((z = z.slice(1)), -1) : 1;
                for (Z = be.slice(0, R), ne = fe = 0, N = z.length; fe < N; fe++)
                  if (Z.indexOf((ie = z.charAt(fe))) < 0) {
                    if (ie == '.') {
                      if (fe > ne) {
                        ne = N;
                        continue;
                      }
                    } else if (
                      !P &&
                      ((z == z.toUpperCase() && (z = z.toLowerCase())) ||
                        (z == z.toLowerCase() && (z = z.toUpperCase())))
                    ) {
                      (P = !0), (fe = -1), (ne = 0);
                      continue;
                    }
                    return E(L, String(M), re, R);
                  }
                (re = !1),
                  (z = y(z, R, 10, L.s)),
                  (ne = z.indexOf('.')) > -1 ? (z = z.replace('.', '')) : (ne = z.length);
              }
              for (fe = 0; z.charCodeAt(fe) === 48; fe++);
              for (N = z.length; z.charCodeAt(--N) === 48; );
              if ((z = z.slice(fe, ++N))) {
                if (((N -= fe), re && A.DEBUG && N > 15 && (M > B || M !== m(M)))) throw Error(h + L.s * M);
                if ((ne = ne - fe - 1) > G) L.c = L.e = null;
                else if (ne < T) L.c = [(L.e = 0)];
                else {
                  if (((L.e = ne), (L.c = []), (fe = (ne + 1) % x), ne < 0 && (fe += x), fe < N)) {
                    for (fe && L.c.push(+z.slice(0, fe)), N -= x; fe < N; ) L.c.push(+z.slice(fe, (fe += x)));
                    fe = x - (z = z.slice(fe)).length;
                  } else fe -= N;
                  for (; fe--; z += '0');
                  L.c.push(+z);
                }
              } else L.c = [(L.e = 0)];
            }
            (A.clone = W),
              (A.ROUND_UP = 0),
              (A.ROUND_DOWN = 1),
              (A.ROUND_CEIL = 2),
              (A.ROUND_FLOOR = 3),
              (A.ROUND_HALF_UP = 4),
              (A.ROUND_HALF_DOWN = 5),
              (A.ROUND_HALF_EVEN = 6),
              (A.ROUND_HALF_CEIL = 7),
              (A.ROUND_HALF_FLOOR = 8),
              (A.EUCLID = 9),
              (A.config = A.set =
                function (M) {
                  var R, Z;
                  if (M != null)
                    if (typeof M == 'object') {
                      if (
                        (M.hasOwnProperty((R = 'DECIMAL_PLACES')) && ((Z = M[R]), Q(Z, 0, O, R), (V = Z)),
                        M.hasOwnProperty((R = 'ROUNDING_MODE')) && ((Z = M[R]), Q(Z, 0, 8, R), (Y = Z)),
                        M.hasOwnProperty((R = 'EXPONENTIAL_AT')) &&
                          ((Z = M[R]),
                          Z && Z.pop
                            ? (Q(Z[0], -1e9, 0, R), Q(Z[1], 0, O, R), (X = Z[0]), (C = Z[1]))
                            : (Q(Z, -1e9, O, R), (X = -(C = Z < 0 ? -Z : Z)))),
                        M.hasOwnProperty((R = 'RANGE')))
                      )
                        if (((Z = M[R]), Z && Z.pop)) Q(Z[0], -1e9, -1, R), Q(Z[1], 1, O, R), (T = Z[0]), (G = Z[1]);
                        else if ((Q(Z, -1e9, O, R), Z)) T = -(G = Z < 0 ? -Z : Z);
                        else throw Error(o + R + ' cannot be zero: ' + Z);
                      if (M.hasOwnProperty((R = 'CRYPTO')))
                        if (((Z = M[R]), Z === !!Z))
                          if (Z)
                            if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) I = Z;
                            else throw ((I = !Z), Error(o + 'crypto unavailable'));
                          else I = Z;
                        else throw Error(o + R + ' not true or false: ' + Z);
                      if (
                        (M.hasOwnProperty((R = 'MODULO_MODE')) && ((Z = M[R]), Q(Z, 0, 9, R), (ue = Z)),
                        M.hasOwnProperty((R = 'POW_PRECISION')) && ((Z = M[R]), Q(Z, 0, O, R), (D = Z)),
                        M.hasOwnProperty((R = 'FORMAT')))
                      )
                        if (((Z = M[R]), typeof Z == 'object')) ee = Z;
                        else throw Error(o + R + ' not an object: ' + Z);
                      if (M.hasOwnProperty((R = 'ALPHABET')))
                        if (((Z = M[R]), typeof Z == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(Z)))
                          (me = Z.slice(0, 10) == '0123456789'), (be = Z);
                        else throw Error(o + R + ' invalid: ' + Z);
                    } else throw Error(o + 'Object expected: ' + M);
                  return {
                    DECIMAL_PLACES: V,
                    ROUNDING_MODE: Y,
                    EXPONENTIAL_AT: [X, C],
                    RANGE: [T, G],
                    CRYPTO: I,
                    MODULO_MODE: ue,
                    POW_PRECISION: D,
                    FORMAT: ee,
                    ALPHABET: be
                  };
                }),
              (A.isBigNumber = function (M) {
                if (!M || M._isBigNumber !== !0) return !1;
                if (!A.DEBUG) return !0;
                var R,
                  Z,
                  ie = M.c,
                  P = M.e,
                  ne = M.s;
                e: if ({}.toString.call(ie) == '[object Array]') {
                  if ((ne === 1 || ne === -1) && P >= -1e9 && P <= O && P === m(P)) {
                    if (ie[0] === 0) {
                      if (P === 0 && ie.length === 1) return !0;
                      break e;
                    }
                    if (((R = (P + 1) % x), R < 1 && (R += x), String(ie[0]).length == R)) {
                      for (R = 0; R < ie.length; R++) if (((Z = ie[R]), Z < 0 || Z >= S || Z !== m(Z))) break e;
                      if (Z !== 0) return !0;
                    }
                  }
                } else if (ie === null && P === null && (ne === null || ne === 1 || ne === -1)) return !0;
                throw Error(o + 'Invalid BigNumber: ' + M);
              }),
              (A.maximum = A.max =
                function () {
                  return Ne(arguments, -1);
                }),
              (A.minimum = A.min =
                function () {
                  return Ne(arguments, 1);
                }),
              (A.random = (function () {
                var M = 9007199254740992,
                  R =
                    (Math.random() * M) & 2097151
                      ? function () {
                          return m(Math.random() * M);
                        }
                      : function () {
                          return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
                        };
                return function (Z) {
                  var ie,
                    P,
                    ne,
                    fe,
                    re,
                    N = 0,
                    z = [],
                    L = new A(F);
                  if ((Z == null ? (Z = V) : Q(Z, 0, O), (fe = c(Z / x)), I))
                    if (crypto.getRandomValues) {
                      for (ie = crypto.getRandomValues(new Uint32Array((fe *= 2))); N < fe; )
                        (re = ie[N] * 131072 + (ie[N + 1] >>> 11)),
                          re >= 9e15
                            ? ((P = crypto.getRandomValues(new Uint32Array(2))), (ie[N] = P[0]), (ie[N + 1] = P[1]))
                            : (z.push(re % 1e14), (N += 2));
                      N = fe / 2;
                    } else if (crypto.randomBytes) {
                      for (ie = crypto.randomBytes((fe *= 7)); N < fe; )
                        (re =
                          (ie[N] & 31) * 281474976710656 +
                          ie[N + 1] * 1099511627776 +
                          ie[N + 2] * 4294967296 +
                          ie[N + 3] * 16777216 +
                          (ie[N + 4] << 16) +
                          (ie[N + 5] << 8) +
                          ie[N + 6]),
                          re >= 9e15 ? crypto.randomBytes(7).copy(ie, N) : (z.push(re % 1e14), (N += 7));
                      N = fe / 7;
                    } else throw ((I = !1), Error(o + 'crypto unavailable'));
                  if (!I) for (; N < fe; ) (re = R()), re < 9e15 && (z[N++] = re % 1e14);
                  for (
                    fe = z[--N], Z %= x, fe && Z && ((re = v[x - Z]), (z[N] = m(fe / re) * re));
                    z[N] === 0;
                    z.pop(), N--
                  );
                  if (N < 0) z = [(ne = 0)];
                  else {
                    for (ne = -1; z[0] === 0; z.splice(0, 1), ne -= x);
                    for (N = 1, re = z[0]; re >= 10; re /= 10, N++);
                    N < x && (ne -= x - N);
                  }
                  return (L.e = ne), (L.c = z), L;
                };
              })()),
              (A.sum = function () {
                for (var M = 1, R = arguments, Z = new A(R[0]); M < R.length; ) Z = Z.plus(R[M++]);
                return Z;
              }),
              (y = (function () {
                var M = '0123456789';
                function R(Z, ie, P, ne) {
                  for (var fe, re = [0], N, z = 0, L = Z.length; z < L; ) {
                    for (N = re.length; N--; re[N] *= ie);
                    for (re[0] += ne.indexOf(Z.charAt(z++)), fe = 0; fe < re.length; fe++)
                      re[fe] > P - 1 &&
                        (re[fe + 1] == null && (re[fe + 1] = 0), (re[fe + 1] += (re[fe] / P) | 0), (re[fe] %= P));
                  }
                  return re.reverse();
                }
                return function (Z, ie, P, ne, fe) {
                  var re,
                    N,
                    z,
                    L,
                    J,
                    pe,
                    ge,
                    Me,
                    qe = Z.indexOf('.'),
                    tt = V,
                    b = Y;
                  for (
                    qe >= 0 &&
                      ((L = D),
                      (D = 0),
                      (Z = Z.replace('.', '')),
                      (Me = new A(ie)),
                      (pe = Me.pow(Z.length - qe)),
                      (D = L),
                      (Me.c = R(_e(de(pe.c), pe.e, '0'), 10, P, M)),
                      (Me.e = Me.c.length)),
                      ge = R(Z, ie, P, fe ? ((re = be), M) : ((re = M), be)),
                      z = L = ge.length;
                    ge[--L] == 0;
                    ge.pop()
                  );
                  if (!ge[0]) return re.charAt(0);
                  if (
                    (qe < 0
                      ? --z
                      : ((pe.c = ge),
                        (pe.e = z),
                        (pe.s = ne),
                        (pe = De(pe, Me, tt, b, P)),
                        (ge = pe.c),
                        (J = pe.r),
                        (z = pe.e)),
                    (N = z + tt + 1),
                    (qe = ge[N]),
                    (L = P / 2),
                    (J = J || N < 0 || ge[N + 1] != null),
                    (J =
                      b < 4
                        ? (qe != null || J) && (b == 0 || b == (pe.s < 0 ? 3 : 2))
                        : qe > L || (qe == L && (b == 4 || J || (b == 6 && ge[N - 1] & 1) || b == (pe.s < 0 ? 8 : 7)))),
                    N < 1 || !ge[0])
                  )
                    Z = J ? _e(re.charAt(1), -tt, re.charAt(0)) : re.charAt(0);
                  else {
                    if (((ge.length = N), J)) for (--P; ++ge[--N] > P; ) (ge[N] = 0), N || (++z, (ge = [1].concat(ge)));
                    for (L = ge.length; !ge[--L]; );
                    for (qe = 0, Z = ''; qe <= L; Z += re.charAt(ge[qe++]));
                    Z = _e(Z, z, re.charAt(0));
                  }
                  return Z;
                };
              })()),
              (De = (function () {
                function M(ie, P, ne) {
                  var fe,
                    re,
                    N,
                    z,
                    L = 0,
                    J = ie.length,
                    pe = P % _,
                    ge = (P / _) | 0;
                  for (ie = ie.slice(); J--; )
                    (N = ie[J] % _),
                      (z = (ie[J] / _) | 0),
                      (fe = ge * N + z * pe),
                      (re = pe * N + (fe % _) * _ + L),
                      (L = ((re / ne) | 0) + ((fe / _) | 0) + ge * z),
                      (ie[J] = re % ne);
                  return L && (ie = [L].concat(ie)), ie;
                }
                function R(ie, P, ne, fe) {
                  var re, N;
                  if (ne != fe) N = ne > fe ? 1 : -1;
                  else
                    for (re = N = 0; re < ne; re++)
                      if (ie[re] != P[re]) {
                        N = ie[re] > P[re] ? 1 : -1;
                        break;
                      }
                  return N;
                }
                function Z(ie, P, ne, fe) {
                  for (var re = 0; ne--; )
                    (ie[ne] -= re), (re = ie[ne] < P[ne] ? 1 : 0), (ie[ne] = re * fe + ie[ne] - P[ne]);
                  for (; !ie[0] && ie.length > 1; ie.splice(0, 1));
                }
                return function (ie, P, ne, fe, re) {
                  var N,
                    z,
                    L,
                    J,
                    pe,
                    ge,
                    Me,
                    qe,
                    tt,
                    b,
                    d,
                    p,
                    H,
                    te,
                    j,
                    k,
                    se,
                    Ee = ie.s == P.s ? 1 : -1,
                    Be = ie.c,
                    Ce = P.c;
                  if (!Be || !Be[0] || !Ce || !Ce[0])
                    return new A(
                      !ie.s || !P.s || (Be ? Ce && Be[0] == Ce[0] : !Ce)
                        ? NaN
                        : (Be && Be[0] == 0) || !Ce
                          ? Ee * 0
                          : Ee / 0
                    );
                  for (
                    qe = new A(Ee),
                      tt = qe.c = [],
                      z = ie.e - P.e,
                      Ee = ne + z + 1,
                      re || ((re = S), (z = ce(ie.e / x) - ce(P.e / x)), (Ee = (Ee / x) | 0)),
                      L = 0;
                    Ce[L] == (Be[L] || 0);
                    L++
                  );
                  if ((Ce[L] > (Be[L] || 0) && z--, Ee < 0)) tt.push(1), (J = !0);
                  else {
                    for (
                      te = Be.length,
                        k = Ce.length,
                        L = 0,
                        Ee += 2,
                        pe = m(re / (Ce[0] + 1)),
                        pe > 1 && ((Ce = M(Ce, pe, re)), (Be = M(Be, pe, re)), (k = Ce.length), (te = Be.length)),
                        H = k,
                        b = Be.slice(0, k),
                        d = b.length;
                      d < k;
                      b[d++] = 0
                    );
                    (se = Ce.slice()), (se = [0].concat(se)), (j = Ce[0]), Ce[1] >= re / 2 && j++;
                    do {
                      if (((pe = 0), (N = R(Ce, b, k, d)), N < 0)) {
                        if (((p = b[0]), k != d && (p = p * re + (b[1] || 0)), (pe = m(p / j)), pe > 1))
                          for (
                            pe >= re && (pe = re - 1), ge = M(Ce, pe, re), Me = ge.length, d = b.length;
                            R(ge, b, Me, d) == 1;

                          )
                            pe--, Z(ge, k < Me ? se : Ce, Me, re), (Me = ge.length), (N = 1);
                        else pe == 0 && (N = pe = 1), (ge = Ce.slice()), (Me = ge.length);
                        if ((Me < d && (ge = [0].concat(ge)), Z(b, ge, d, re), (d = b.length), N == -1))
                          for (; R(Ce, b, k, d) < 1; ) pe++, Z(b, k < d ? se : Ce, d, re), (d = b.length);
                      } else N === 0 && (pe++, (b = [0]));
                      (tt[L++] = pe), b[0] ? (b[d++] = Be[H] || 0) : ((b = [Be[H]]), (d = 1));
                    } while ((H++ < te || b[0] != null) && Ee--);
                    (J = b[0] != null), tt[0] || tt.splice(0, 1);
                  }
                  if (re == S) {
                    for (L = 1, Ee = tt[0]; Ee >= 10; Ee /= 10, L++);
                    Oe(qe, ne + (qe.e = L + z * x - 1) + 1, fe, J);
                  } else (qe.e = z), (qe.r = +J);
                  return qe;
                };
              })());
            function Ue(M, R, Z, ie) {
              var P, ne, fe, re, N;
              if ((Z == null ? (Z = Y) : Q(Z, 0, 8), !M.c)) return M.toString();
              if (((P = M.c[0]), (fe = M.e), R == null))
                (N = de(M.c)), (N = ie == 1 || (ie == 2 && (fe <= X || fe >= C)) ? We(N, fe) : _e(N, fe, '0'));
              else if (
                ((M = Oe(new A(M), R, Z)),
                (ne = M.e),
                (N = de(M.c)),
                (re = N.length),
                ie == 1 || (ie == 2 && (R <= ne || ne <= X)))
              ) {
                for (; re < R; N += '0', re++);
                N = We(N, ne);
              } else if (((R -= fe), (N = _e(N, ne, '0')), ne + 1 > re)) {
                if (--R > 0) for (N += '.'; R--; N += '0');
              } else if (((R += ne - re), R > 0)) for (ne + 1 == re && (N += '.'); R--; N += '0');
              return M.s < 0 && P ? '-' + N : N;
            }
            function Ne(M, R) {
              for (var Z, ie, P = 1, ne = new A(M[0]); P < M.length; P++)
                (ie = new A(M[P])), (!ie.s || (Z = ve(ne, ie)) === R || (Z === 0 && ne.s === R)) && (ne = ie);
              return ne;
            }
            function Ke(M, R, Z) {
              for (var ie = 1, P = R.length; !R[--P]; R.pop());
              for (P = R[0]; P >= 10; P /= 10, ie++);
              return (
                (Z = ie + Z * x - 1) > G ? (M.c = M.e = null) : Z < T ? (M.c = [(M.e = 0)]) : ((M.e = Z), (M.c = R)), M
              );
            }
            E = (function () {
              var M = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                R = /^([^.]+)\.$/,
                Z = /^\.([^.]+)$/,
                ie = /^-?(Infinity|NaN)$/,
                P = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (ne, fe, re, N) {
                var z,
                  L = re ? fe : fe.replace(P, '');
                if (ie.test(L)) ne.s = isNaN(L) ? null : L < 0 ? -1 : 1;
                else {
                  if (
                    !re &&
                    ((L = L.replace(M, function (J, pe, ge) {
                      return (z = (ge = ge.toLowerCase()) == 'x' ? 16 : ge == 'b' ? 2 : 8), !N || N == z ? pe : J;
                    })),
                    N && ((z = N), (L = L.replace(R, '$1').replace(Z, '0.$1'))),
                    fe != L)
                  )
                    return new A(L, z);
                  if (A.DEBUG) throw Error(o + 'Not a' + (N ? ' base ' + N : '') + ' number: ' + fe);
                  ne.s = null;
                }
                ne.c = ne.e = null;
              };
            })();
            function Oe(M, R, Z, ie) {
              var P,
                ne,
                fe,
                re,
                N,
                z,
                L,
                J = M.c,
                pe = v;
              if (J) {
                e: {
                  for (P = 1, re = J[0]; re >= 10; re /= 10, P++);
                  if (((ne = R - P), ne < 0)) (ne += x), (fe = R), (N = J[(z = 0)]), (L = m((N / pe[P - fe - 1]) % 10));
                  else if (((z = c((ne + 1) / x)), z >= J.length))
                    if (ie) {
                      for (; J.length <= z; J.push(0));
                      (N = L = 0), (P = 1), (ne %= x), (fe = ne - x + 1);
                    } else break e;
                  else {
                    for (N = re = J[z], P = 1; re >= 10; re /= 10, P++);
                    (ne %= x), (fe = ne - x + P), (L = fe < 0 ? 0 : m((N / pe[P - fe - 1]) % 10));
                  }
                  if (
                    ((ie = ie || R < 0 || J[z + 1] != null || (fe < 0 ? N : N % pe[P - fe - 1])),
                    (ie =
                      Z < 4
                        ? (L || ie) && (Z == 0 || Z == (M.s < 0 ? 3 : 2))
                        : L > 5 ||
                          (L == 5 &&
                            (Z == 4 ||
                              ie ||
                              (Z == 6 && (ne > 0 ? (fe > 0 ? N / pe[P - fe] : 0) : J[z - 1]) % 10 & 1) ||
                              Z == (M.s < 0 ? 8 : 7)))),
                    R < 1 || !J[0])
                  )
                    return (
                      (J.length = 0),
                      ie ? ((R -= M.e + 1), (J[0] = pe[(x - (R % x)) % x]), (M.e = -R || 0)) : (J[0] = M.e = 0),
                      M
                    );
                  if (
                    (ne == 0
                      ? ((J.length = z), (re = 1), z--)
                      : ((J.length = z + 1),
                        (re = pe[x - ne]),
                        (J[z] = fe > 0 ? m((N / pe[P - fe]) % pe[fe]) * re : 0)),
                    ie)
                  )
                    for (;;)
                      if (z == 0) {
                        for (ne = 1, fe = J[0]; fe >= 10; fe /= 10, ne++);
                        for (fe = J[0] += re, re = 1; fe >= 10; fe /= 10, re++);
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
            function Re(M) {
              var R,
                Z = M.e;
              return Z === null
                ? M.toString()
                : ((R = de(M.c)), (R = Z <= X || Z >= C ? We(R, Z) : _e(R, Z, '0')), M.s < 0 ? '-' + R : R);
            }
            return (
              (w.absoluteValue = w.abs =
                function () {
                  var M = new A(this);
                  return M.s < 0 && (M.s = 1), M;
                }),
              (w.comparedTo = function (M, R) {
                return ve(this, new A(M, R));
              }),
              (w.decimalPlaces = w.dp =
                function (M, R) {
                  var Z,
                    ie,
                    P,
                    ne = this;
                  if (M != null) return Q(M, 0, O), R == null ? (R = Y) : Q(R, 0, 8), Oe(new A(ne), M + ne.e + 1, R);
                  if (!(Z = ne.c)) return null;
                  if (((ie = ((P = Z.length - 1) - ce(this.e / x)) * x), (P = Z[P])))
                    for (; P % 10 == 0; P /= 10, ie--);
                  return ie < 0 && (ie = 0), ie;
                }),
              (w.dividedBy = w.div =
                function (M, R) {
                  return De(this, new A(M, R), V, Y);
                }),
              (w.dividedToIntegerBy = w.idiv =
                function (M, R) {
                  return De(this, new A(M, R), 0, 1);
                }),
              (w.exponentiatedBy = w.pow =
                function (M, R) {
                  var Z,
                    ie,
                    P,
                    ne,
                    fe,
                    re,
                    N,
                    z,
                    L,
                    J = this;
                  if (((M = new A(M)), M.c && !M.isInteger())) throw Error(o + 'Exponent not an integer: ' + Re(M));
                  if (
                    (R != null && (R = new A(R)),
                    (re = M.e > 14),
                    !J.c || !J.c[0] || (J.c[0] == 1 && !J.e && J.c.length == 1) || !M.c || !M.c[0])
                  )
                    return (L = new A(Math.pow(+Re(J), re ? M.s * (2 - je(M)) : +Re(M)))), R ? L.mod(R) : L;
                  if (((N = M.s < 0), R)) {
                    if (R.c ? !R.c[0] : !R.s) return new A(NaN);
                    (ie = !N && J.isInteger() && R.isInteger()), ie && (J = J.mod(R));
                  } else {
                    if (
                      M.e > 9 &&
                      (J.e > 0 ||
                        J.e < -1 ||
                        (J.e == 0
                          ? J.c[0] > 1 || (re && J.c[1] >= 24e7)
                          : J.c[0] < 8e13 || (re && J.c[0] <= 9999975e7)))
                    )
                      return (ne = J.s < 0 && je(M) ? -0 : 0), J.e > -1 && (ne = 1 / ne), new A(N ? 1 / ne : ne);
                    D && (ne = c(D / x + 2));
                  }
                  for (
                    re ? ((Z = new A(0.5)), N && (M.s = 1), (z = je(M))) : ((P = Math.abs(+Re(M))), (z = P % 2)),
                      L = new A(F);
                    ;

                  ) {
                    if (z) {
                      if (((L = L.times(J)), !L.c)) break;
                      ne ? L.c.length > ne && (L.c.length = ne) : ie && (L = L.mod(R));
                    }
                    if (P) {
                      if (((P = m(P / 2)), P === 0)) break;
                      z = P % 2;
                    } else if (((M = M.times(Z)), Oe(M, M.e + 1, 1), M.e > 14)) z = je(M);
                    else {
                      if (((P = +Re(M)), P === 0)) break;
                      z = P % 2;
                    }
                    (J = J.times(J)), ne ? J.c && J.c.length > ne && (J.c.length = ne) : ie && (J = J.mod(R));
                  }
                  return ie ? L : (N && (L = F.div(L)), R ? L.mod(R) : ne ? Oe(L, D, Y, fe) : L);
                }),
              (w.integerValue = function (M) {
                var R = new A(this);
                return M == null ? (M = Y) : Q(M, 0, 8), Oe(R, R.e + 1, M);
              }),
              (w.isEqualTo = w.eq =
                function (M, R) {
                  return ve(this, new A(M, R)) === 0;
                }),
              (w.isFinite = function () {
                return !!this.c;
              }),
              (w.isGreaterThan = w.gt =
                function (M, R) {
                  return ve(this, new A(M, R)) > 0;
                }),
              (w.isGreaterThanOrEqualTo = w.gte =
                function (M, R) {
                  return (R = ve(this, new A(M, R))) === 1 || R === 0;
                }),
              (w.isInteger = function () {
                return !!this.c && ce(this.e / x) > this.c.length - 2;
              }),
              (w.isLessThan = w.lt =
                function (M, R) {
                  return ve(this, new A(M, R)) < 0;
                }),
              (w.isLessThanOrEqualTo = w.lte =
                function (M, R) {
                  return (R = ve(this, new A(M, R))) === -1 || R === 0;
                }),
              (w.isNaN = function () {
                return !this.s;
              }),
              (w.isNegative = function () {
                return this.s < 0;
              }),
              (w.isPositive = function () {
                return this.s > 0;
              }),
              (w.isZero = function () {
                return !!this.c && this.c[0] == 0;
              }),
              (w.minus = function (M, R) {
                var Z,
                  ie,
                  P,
                  ne,
                  fe = this,
                  re = fe.s;
                if (((M = new A(M, R)), (R = M.s), !re || !R)) return new A(NaN);
                if (re != R) return (M.s = -R), fe.plus(M);
                var N = fe.e / x,
                  z = M.e / x,
                  L = fe.c,
                  J = M.c;
                if (!N || !z) {
                  if (!L || !J) return L ? ((M.s = -R), M) : new A(J ? fe : NaN);
                  if (!L[0] || !J[0]) return J[0] ? ((M.s = -R), M) : new A(L[0] ? fe : Y == 3 ? -0 : 0);
                }
                if (((N = ce(N)), (z = ce(z)), (L = L.slice()), (re = N - z))) {
                  for ((ne = re < 0) ? ((re = -re), (P = L)) : ((z = N), (P = J)), P.reverse(), R = re; R--; P.push(0));
                  P.reverse();
                } else
                  for (ie = (ne = (re = L.length) < (R = J.length)) ? re : R, re = R = 0; R < ie; R++)
                    if (L[R] != J[R]) {
                      ne = L[R] < J[R];
                      break;
                    }
                if ((ne && ((P = L), (L = J), (J = P), (M.s = -M.s)), (R = (ie = J.length) - (Z = L.length)), R > 0))
                  for (; R--; L[Z++] = 0);
                for (R = S - 1; ie > re; ) {
                  if (L[--ie] < J[ie]) {
                    for (Z = ie; Z && !L[--Z]; L[Z] = R);
                    --L[Z], (L[ie] += S);
                  }
                  L[ie] -= J[ie];
                }
                for (; L[0] == 0; L.splice(0, 1), --z);
                return L[0] ? Ke(M, L, z) : ((M.s = Y == 3 ? -1 : 1), (M.c = [(M.e = 0)]), M);
              }),
              (w.modulo = w.mod =
                function (M, R) {
                  var Z,
                    ie,
                    P = this;
                  return (
                    (M = new A(M, R)),
                    !P.c || !M.s || (M.c && !M.c[0])
                      ? new A(NaN)
                      : !M.c || (P.c && !P.c[0])
                        ? new A(P)
                        : (ue == 9
                            ? ((ie = M.s), (M.s = 1), (Z = De(P, M, 0, 3)), (M.s = ie), (Z.s *= ie))
                            : (Z = De(P, M, 0, ue)),
                          (M = P.minus(Z.times(M))),
                          !M.c[0] && ue == 1 && (M.s = P.s),
                          M)
                  );
                }),
              (w.multipliedBy = w.times =
                function (M, R) {
                  var Z,
                    ie,
                    P,
                    ne,
                    fe,
                    re,
                    N,
                    z,
                    L,
                    J,
                    pe,
                    ge,
                    Me,
                    qe,
                    tt,
                    b = this,
                    d = b.c,
                    p = (M = new A(M, R)).c;
                  if (!d || !p || !d[0] || !p[0])
                    return (
                      !b.s || !M.s || (d && !d[0] && !p) || (p && !p[0] && !d)
                        ? (M.c = M.e = M.s = null)
                        : ((M.s *= b.s), !d || !p ? (M.c = M.e = null) : ((M.c = [0]), (M.e = 0))),
                      M
                    );
                  for (
                    ie = ce(b.e / x) + ce(M.e / x),
                      M.s *= b.s,
                      N = d.length,
                      J = p.length,
                      N < J && ((Me = d), (d = p), (p = Me), (P = N), (N = J), (J = P)),
                      P = N + J,
                      Me = [];
                    P--;
                    Me.push(0)
                  );
                  for (qe = S, tt = _, P = J; --P >= 0; ) {
                    for (Z = 0, pe = p[P] % tt, ge = (p[P] / tt) | 0, fe = N, ne = P + fe; ne > P; )
                      (z = d[--fe] % tt),
                        (L = (d[fe] / tt) | 0),
                        (re = ge * z + L * pe),
                        (z = pe * z + (re % tt) * tt + Me[ne] + Z),
                        (Z = ((z / qe) | 0) + ((re / tt) | 0) + ge * L),
                        (Me[ne--] = z % qe);
                    Me[ne] = Z;
                  }
                  return Z ? ++ie : Me.splice(0, 1), Ke(M, Me, ie);
                }),
              (w.negated = function () {
                var M = new A(this);
                return (M.s = -M.s || null), M;
              }),
              (w.plus = function (M, R) {
                var Z,
                  ie = this,
                  P = ie.s;
                if (((M = new A(M, R)), (R = M.s), !P || !R)) return new A(NaN);
                if (P != R) return (M.s = -R), ie.minus(M);
                var ne = ie.e / x,
                  fe = M.e / x,
                  re = ie.c,
                  N = M.c;
                if (!ne || !fe) {
                  if (!re || !N) return new A(P / 0);
                  if (!re[0] || !N[0]) return N[0] ? M : new A(re[0] ? ie : P * 0);
                }
                if (((ne = ce(ne)), (fe = ce(fe)), (re = re.slice()), (P = ne - fe))) {
                  for (P > 0 ? ((fe = ne), (Z = N)) : ((P = -P), (Z = re)), Z.reverse(); P--; Z.push(0));
                  Z.reverse();
                }
                for (P = re.length, R = N.length, P - R < 0 && ((Z = N), (N = re), (re = Z), (R = P)), P = 0; R; )
                  (P = ((re[--R] = re[R] + N[R] + P) / S) | 0), (re[R] = S === re[R] ? 0 : re[R] % S);
                return P && ((re = [P].concat(re)), ++fe), Ke(M, re, fe);
              }),
              (w.precision = w.sd =
                function (M, R) {
                  var Z,
                    ie,
                    P,
                    ne = this;
                  if (M != null && M !== !!M) return Q(M, 1, O), R == null ? (R = Y) : Q(R, 0, 8), Oe(new A(ne), M, R);
                  if (!(Z = ne.c)) return null;
                  if (((P = Z.length - 1), (ie = P * x + 1), (P = Z[P]))) {
                    for (; P % 10 == 0; P /= 10, ie--);
                    for (P = Z[0]; P >= 10; P /= 10, ie++);
                  }
                  return M && ne.e + 1 > ie && (ie = ne.e + 1), ie;
                }),
              (w.shiftedBy = function (M) {
                return Q(M, -9007199254740991, B), this.times('1e' + M);
              }),
              (w.squareRoot = w.sqrt =
                function () {
                  var M,
                    R,
                    Z,
                    ie,
                    P,
                    ne = this,
                    fe = ne.c,
                    re = ne.s,
                    N = ne.e,
                    z = V + 4,
                    L = new A('0.5');
                  if (re !== 1 || !fe || !fe[0])
                    return new A(!re || (re < 0 && (!fe || fe[0])) ? NaN : fe ? ne : 1 / 0);
                  if (
                    ((re = Math.sqrt(+Re(ne))),
                    re == 0 || re == 1 / 0
                      ? ((R = de(fe)),
                        (R.length + N) % 2 == 0 && (R += '0'),
                        (re = Math.sqrt(+R)),
                        (N = ce((N + 1) / 2) - (N < 0 || N % 2)),
                        re == 1 / 0
                          ? (R = '5e' + N)
                          : ((R = re.toExponential()), (R = R.slice(0, R.indexOf('e') + 1) + N)),
                        (Z = new A(R)))
                      : (Z = new A(re + '')),
                    Z.c[0])
                  ) {
                    for (N = Z.e, re = N + z, re < 3 && (re = 0); ; )
                      if (
                        ((P = Z),
                        (Z = L.times(P.plus(De(ne, P, z, 1)))),
                        de(P.c).slice(0, re) === (R = de(Z.c)).slice(0, re))
                      )
                        if ((Z.e < N && --re, (R = R.slice(re - 3, re + 1)), R == '9999' || (!ie && R == '4999'))) {
                          if (!ie && (Oe(P, P.e + V + 2, 0), P.times(P).eq(ne))) {
                            Z = P;
                            break;
                          }
                          (z += 4), (re += 4), (ie = 1);
                        } else {
                          (!+R || (!+R.slice(1) && R.charAt(0) == '5')) &&
                            (Oe(Z, Z.e + V + 2, 1), (M = !Z.times(Z).eq(ne)));
                          break;
                        }
                  }
                  return Oe(Z, Z.e + V + 1, Y, M);
                }),
              (w.toExponential = function (M, R) {
                return M != null && (Q(M, 0, O), M++), Ue(this, M, R, 1);
              }),
              (w.toFixed = function (M, R) {
                return M != null && (Q(M, 0, O), (M = M + this.e + 1)), Ue(this, M, R);
              }),
              (w.toFormat = function (M, R, Z) {
                var ie,
                  P = this;
                if (Z == null)
                  M != null && R && typeof R == 'object'
                    ? ((Z = R), (R = null))
                    : M && typeof M == 'object'
                      ? ((Z = M), (M = R = null))
                      : (Z = ee);
                else if (typeof Z != 'object') throw Error(o + 'Argument not an object: ' + Z);
                if (((ie = P.toFixed(M, R)), P.c)) {
                  var ne,
                    fe = ie.split('.'),
                    re = +Z.groupSize,
                    N = +Z.secondaryGroupSize,
                    z = Z.groupSeparator || '',
                    L = fe[0],
                    J = fe[1],
                    pe = P.s < 0,
                    ge = pe ? L.slice(1) : L,
                    Me = ge.length;
                  if ((N && ((ne = re), (re = N), (N = ne), (Me -= ne)), re > 0 && Me > 0)) {
                    for (ne = Me % re || re, L = ge.substr(0, ne); ne < Me; ne += re) L += z + ge.substr(ne, re);
                    N > 0 && (L += z + ge.slice(ne)), pe && (L = '-' + L);
                  }
                  ie = J
                    ? L +
                      (Z.decimalSeparator || '') +
                      ((N = +Z.fractionGroupSize)
                        ? J.replace(new RegExp('\\d{' + N + '}\\B', 'g'), '$&' + (Z.fractionGroupSeparator || ''))
                        : J)
                    : L;
                }
                return (Z.prefix || '') + ie + (Z.suffix || '');
              }),
              (w.toFraction = function (M) {
                var R,
                  Z,
                  ie,
                  P,
                  ne,
                  fe,
                  re,
                  N,
                  z,
                  L,
                  J,
                  pe,
                  ge = this,
                  Me = ge.c;
                if (M != null && ((re = new A(M)), (!re.isInteger() && (re.c || re.s !== 1)) || re.lt(F)))
                  throw Error(o + 'Argument ' + (re.isInteger() ? 'out of range: ' : 'not an integer: ') + Re(re));
                if (!Me) return new A(ge);
                for (
                  R = new A(F),
                    z = Z = new A(F),
                    ie = N = new A(F),
                    pe = de(Me),
                    ne = R.e = pe.length - ge.e - 1,
                    R.c[0] = v[(fe = ne % x) < 0 ? x + fe : fe],
                    M = !M || re.comparedTo(R) > 0 ? (ne > 0 ? R : z) : re,
                    fe = G,
                    G = 1 / 0,
                    re = new A(pe),
                    N.c[0] = 0;
                  (L = De(re, R, 0, 1)), (P = Z.plus(L.times(ie))), P.comparedTo(M) != 1;

                )
                  (Z = ie),
                    (ie = P),
                    (z = N.plus(L.times((P = z)))),
                    (N = P),
                    (R = re.minus(L.times((P = R)))),
                    (re = P);
                return (
                  (P = De(M.minus(Z), ie, 0, 1)),
                  (N = N.plus(P.times(z))),
                  (Z = Z.plus(P.times(ie))),
                  (N.s = z.s = ge.s),
                  (ne = ne * 2),
                  (J =
                    De(z, ie, ne, Y)
                      .minus(ge)
                      .abs()
                      .comparedTo(De(N, Z, ne, Y).minus(ge).abs()) < 1
                      ? [z, ie]
                      : [N, Z]),
                  (G = fe),
                  J
                );
              }),
              (w.toNumber = function () {
                return +Re(this);
              }),
              (w.toPrecision = function (M, R) {
                return M != null && Q(M, 1, O), Ue(this, M, R, 2);
              }),
              (w.toString = function (M) {
                var R,
                  Z = this,
                  ie = Z.s,
                  P = Z.e;
                return (
                  P === null
                    ? ie
                      ? ((R = 'Infinity'), ie < 0 && (R = '-' + R))
                      : (R = 'NaN')
                    : (M == null
                        ? (R = P <= X || P >= C ? We(de(Z.c), P) : _e(de(Z.c), P, '0'))
                        : M === 10 && me
                          ? ((Z = Oe(new A(Z), V + P + 1, Y)), (R = _e(de(Z.c), Z.e, '0')))
                          : (Q(M, 2, be.length, 'Base'), (R = y(_e(de(Z.c), P, '0'), 10, M, ie, !0))),
                      ie < 0 && Z.c[0] && (R = '-' + R)),
                  R
                );
              }),
              (w.valueOf = w.toJSON =
                function () {
                  return Re(this);
                }),
              (w._isBigNumber = !0),
              we != null && A.set(we),
              A
            );
          }
          function ce(we) {
            var De = we | 0;
            return we > 0 || we === De ? De : De - 1;
          }
          function de(we) {
            for (var De, y, E = 1, w = we.length, F = we[0] + ''; E < w; ) {
              for (De = we[E++] + '', y = x - De.length; y--; De = '0' + De);
              F += De;
            }
            for (w = F.length; F.charCodeAt(--w) === 48; );
            return F.slice(0, w + 1 || 1);
          }
          function ve(we, De) {
            var y,
              E,
              w = we.c,
              F = De.c,
              V = we.s,
              Y = De.s,
              X = we.e,
              C = De.e;
            if (!V || !Y) return null;
            if (((y = w && !w[0]), (E = F && !F[0]), y || E)) return y ? (E ? 0 : -Y) : V;
            if (V != Y) return V;
            if (((y = V < 0), (E = X == C), !w || !F)) return E ? 0 : !w ^ y ? 1 : -1;
            if (!E) return (X > C) ^ y ? 1 : -1;
            for (Y = (X = w.length) < (C = F.length) ? X : C, V = 0; V < Y; V++)
              if (w[V] != F[V]) return (w[V] > F[V]) ^ y ? 1 : -1;
            return X == C ? 0 : (X > C) ^ y ? 1 : -1;
          }
          function Q(we, De, y, E) {
            if (we < De || we > y || we !== m(we))
              throw Error(
                o +
                  (E || 'Argument') +
                  (typeof we == 'number'
                    ? we < De || we > y
                      ? ' out of range: '
                      : ' not an integer: '
                    : ' not a primitive number: ') +
                  String(we)
              );
          }
          function je(we) {
            var De = we.c.length - 1;
            return ce(we.e / x) == De && we.c[De] % 2 != 0;
          }
          function We(we, De) {
            return (we.length > 1 ? we.charAt(0) + '.' + we.slice(1) : we) + (De < 0 ? 'e' : 'e+') + De;
          }
          function _e(we, De, y) {
            var E, w;
            if (De < 0) {
              for (w = y + '.'; ++De; w += y);
              we = w + we;
            } else if (((E = we.length), ++De > E)) {
              for (w = y, De -= E; --De; w += y);
              we += w;
            } else De < E && (we = we.slice(0, De) + '.' + we.slice(De));
            return we;
          }
          (u = W()),
            (u.default = u.BigNumber = u),
            n.exports
              ? (n.exports = u)
              : (a || (a = typeof globalThis < 'u' && globalThis ? globalThis : window), (a.BigNumber = u));
        })(pv);
      })(hs)),
    hs.exports
  );
}
var lo, qm;
function yv() {
  return (
    qm ||
      ((qm = 1),
      (lo = function (a, u, s) {
        var c = new a.Uint8Array(s),
          m = u.pushInt,
          o = u.pushInt32,
          h = u.pushInt32Neg,
          S = u.pushInt64,
          x = u.pushInt64Neg,
          B = u.pushFloat,
          v = u.pushFloatSingle,
          _ = u.pushFloatDouble,
          O = u.pushTrue,
          W = u.pushFalse,
          ce = u.pushUndefined,
          de = u.pushNull,
          ve = u.pushInfinity,
          Q = u.pushInfinityNeg,
          je = u.pushNaN,
          We = u.pushNaNNeg,
          _e = u.pushArrayStart,
          we = u.pushArrayStartFixed,
          De = u.pushArrayStartFixed32,
          y = u.pushArrayStartFixed64,
          E = u.pushObjectStart,
          w = u.pushObjectStartFixed,
          F = u.pushObjectStartFixed32,
          V = u.pushObjectStartFixed64,
          Y = u.pushByteString,
          X = u.pushByteStringStart,
          C = u.pushUtf8String,
          T = u.pushUtf8StringStart,
          G = u.pushSimpleUnassigned,
          I = u.pushTagStart,
          ue = u.pushTagStart4,
          D = u.pushTagStart8,
          ee = u.pushTagUnassigned,
          be = u.pushBreak,
          me = a.Math.pow,
          A = 0,
          Ue = 0,
          Ne = 0;
        function Ke(K) {
          for (
            K = K | 0, A = 0, Ue = K;
            (A | 0) < (Ue | 0) && ((Ne = vi[c[A] & 255](c[A] | 0) | 0), !((Ne | 0) > 0));

          );
          return Ne | 0;
        }
        function Oe(K) {
          return (K = K | 0), (((A | 0) + (K | 0)) | 0) < (Ue | 0) ? 0 : 1;
        }
        function Re(K) {
          return (K = K | 0), (c[K | 0] << 8) | c[(K + 1) | 0] | 0;
        }
        function M(K) {
          return (K = K | 0), (c[K | 0] << 24) | (c[(K + 1) | 0] << 16) | (c[(K + 2) | 0] << 8) | c[(K + 3) | 0] | 0;
        }
        function R(K) {
          return (K = K | 0), m(K | 0), (A = (A + 1) | 0), 0;
        }
        function Z(K) {
          return (K = K | 0), Oe(1) | 0 ? 1 : (m(c[(A + 1) | 0] | 0), (A = (A + 2) | 0), 0);
        }
        function ie(K) {
          return (K = K | 0), Oe(2) | 0 ? 1 : (m(Re((A + 1) | 0) | 0), (A = (A + 3) | 0), 0);
        }
        function P(K) {
          return (K = K | 0), Oe(4) | 0 ? 1 : (o(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0), (A = (A + 5) | 0), 0);
        }
        function ne(K) {
          return (
            (K = K | 0),
            Oe(8) | 0
              ? 1
              : (S(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0, Re((A + 5) | 0) | 0, Re((A + 7) | 0) | 0),
                (A = (A + 9) | 0),
                0)
          );
        }
        function fe(K) {
          return (K = K | 0), m((-1 - ((K - 32) | 0)) | 0), (A = (A + 1) | 0), 0;
        }
        function re(K) {
          return (K = K | 0), Oe(1) | 0 ? 1 : (m((-1 - (c[(A + 1) | 0] | 0)) | 0), (A = (A + 2) | 0), 0);
        }
        function N(K) {
          K = K | 0;
          var Je = 0;
          return Oe(2) | 0 ? 1 : ((Je = Re((A + 1) | 0) | 0), m((-1 - (Je | 0)) | 0), (A = (A + 3) | 0), 0);
        }
        function z(K) {
          return (K = K | 0), Oe(4) | 0 ? 1 : (h(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0), (A = (A + 5) | 0), 0);
        }
        function L(K) {
          return (
            (K = K | 0),
            Oe(8) | 0
              ? 1
              : (x(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0, Re((A + 5) | 0) | 0, Re((A + 7) | 0) | 0),
                (A = (A + 9) | 0),
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
            Oe(ut | 0) | 0
              ? 1
              : ((Je = (A + 1) | 0), (ot = (((A + 1) | 0) + (ut | 0)) | 0), Y(Je | 0, ot | 0), (A = ot | 0), 0)
          );
        }
        function pe(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Oe(1) | 0 ||
            ((ut = c[(A + 1) | 0] | 0), (Je = (A + 2) | 0), (ot = (((A + 2) | 0) + (ut | 0)) | 0), Oe((ut + 1) | 0) | 0)
            ? 1
            : (Y(Je | 0, ot | 0), (A = ot | 0), 0);
        }
        function ge(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Oe(2) | 0 ||
            ((ut = Re((A + 1) | 0) | 0),
            (Je = (A + 3) | 0),
            (ot = (((A + 3) | 0) + (ut | 0)) | 0),
            Oe((ut + 2) | 0) | 0)
            ? 1
            : (Y(Je | 0, ot | 0), (A = ot | 0), 0);
        }
        function Me(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Oe(4) | 0 ||
            ((ut = M((A + 1) | 0) | 0), (Je = (A + 5) | 0), (ot = (((A + 5) | 0) + (ut | 0)) | 0), Oe((ut + 4) | 0) | 0)
            ? 1
            : (Y(Je | 0, ot | 0), (A = ot | 0), 0);
        }
        function qe(K) {
          return (K = K | 0), 1;
        }
        function tt(K) {
          return (K = K | 0), X(), (A = (A + 1) | 0), 0;
        }
        function b(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return (
            (ut = (K - 96) | 0),
            Oe(ut | 0) | 0
              ? 1
              : ((Je = (A + 1) | 0), (ot = (((A + 1) | 0) + (ut | 0)) | 0), C(Je | 0, ot | 0), (A = ot | 0), 0)
          );
        }
        function d(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Oe(1) | 0 ||
            ((ut = c[(A + 1) | 0] | 0), (Je = (A + 2) | 0), (ot = (((A + 2) | 0) + (ut | 0)) | 0), Oe((ut + 1) | 0) | 0)
            ? 1
            : (C(Je | 0, ot | 0), (A = ot | 0), 0);
        }
        function p(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Oe(2) | 0 ||
            ((ut = Re((A + 1) | 0) | 0),
            (Je = (A + 3) | 0),
            (ot = (((A + 3) | 0) + (ut | 0)) | 0),
            Oe((ut + 2) | 0) | 0)
            ? 1
            : (C(Je | 0, ot | 0), (A = ot | 0), 0);
        }
        function H(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 0;
          return Oe(4) | 0 ||
            ((ut = M((A + 1) | 0) | 0), (Je = (A + 5) | 0), (ot = (((A + 5) | 0) + (ut | 0)) | 0), Oe((ut + 4) | 0) | 0)
            ? 1
            : (C(Je | 0, ot | 0), (A = ot | 0), 0);
        }
        function te(K) {
          return (K = K | 0), 1;
        }
        function j(K) {
          return (K = K | 0), T(), (A = (A + 1) | 0), 0;
        }
        function k(K) {
          return (K = K | 0), we((K - 128) | 0), (A = (A + 1) | 0), 0;
        }
        function se(K) {
          return (K = K | 0), Oe(1) | 0 ? 1 : (we(c[(A + 1) | 0] | 0), (A = (A + 2) | 0), 0);
        }
        function Ee(K) {
          return (K = K | 0), Oe(2) | 0 ? 1 : (we(Re((A + 1) | 0) | 0), (A = (A + 3) | 0), 0);
        }
        function Be(K) {
          return (K = K | 0), Oe(4) | 0 ? 1 : (De(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0), (A = (A + 5) | 0), 0);
        }
        function Ce(K) {
          return (
            (K = K | 0),
            Oe(8) | 0
              ? 1
              : (y(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0, Re((A + 5) | 0) | 0, Re((A + 7) | 0) | 0),
                (A = (A + 9) | 0),
                0)
          );
        }
        function Pe(K) {
          return (K = K | 0), _e(), (A = (A + 1) | 0), 0;
        }
        function $e(K) {
          K = K | 0;
          var Je = 0;
          return (Je = (K - 160) | 0), Oe(Je | 0) | 0 ? 1 : (w(Je | 0), (A = (A + 1) | 0), 0);
        }
        function Ie(K) {
          return (K = K | 0), Oe(1) | 0 ? 1 : (w(c[(A + 1) | 0] | 0), (A = (A + 2) | 0), 0);
        }
        function Le(K) {
          return (K = K | 0), Oe(2) | 0 ? 1 : (w(Re((A + 1) | 0) | 0), (A = (A + 3) | 0), 0);
        }
        function Ge(K) {
          return (K = K | 0), Oe(4) | 0 ? 1 : (F(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0), (A = (A + 5) | 0), 0);
        }
        function Fe(K) {
          return (
            (K = K | 0),
            Oe(8) | 0
              ? 1
              : (V(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0, Re((A + 5) | 0) | 0, Re((A + 7) | 0) | 0),
                (A = (A + 9) | 0),
                0)
          );
        }
        function nt(K) {
          return (K = K | 0), E(), (A = (A + 1) | 0), 0;
        }
        function st(K) {
          return (K = K | 0), I((K - 192) | 0 | 0), (A = (A + 1) | 0), 0;
        }
        function Rt(K) {
          return (K = K | 0), I(K | 0), (A = (A + 1) | 0), 0;
        }
        function fr(K) {
          return (K = K | 0), I(K | 0), (A = (A + 1) | 0), 0;
        }
        function Zi(K) {
          return (K = K | 0), I(K | 0), (A = (A + 1) | 0), 0;
        }
        function Qi(K) {
          return (K = K | 0), I(K | 0), (A = (A + 1) | 0), 0;
        }
        function Ot(K) {
          return (K = K | 0), I((K - 192) | 0 | 0), (A = (A + 1) | 0), 0;
        }
        function $o(K) {
          return (K = K | 0), I(K | 0), (A = (A + 1) | 0), 0;
        }
        function Gs(K) {
          return (K = K | 0), I(K | 0), (A = (A + 1) | 0), 0;
        }
        function Fs(K) {
          return (K = K | 0), I(K | 0), (A = (A + 1) | 0), 0;
        }
        function Ku(K) {
          return (K = K | 0), Oe(1) | 0 ? 1 : (I(c[(A + 1) | 0] | 0), (A = (A + 2) | 0), 0);
        }
        function Ju(K) {
          return (K = K | 0), Oe(2) | 0 ? 1 : (I(Re((A + 1) | 0) | 0), (A = (A + 3) | 0), 0);
        }
        function Vs(K) {
          return (K = K | 0), Oe(4) | 0 ? 1 : (ue(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0), (A = (A + 5) | 0), 0);
        }
        function un(K) {
          return (
            (K = K | 0),
            Oe(8) | 0
              ? 1
              : (D(Re((A + 1) | 0) | 0, Re((A + 3) | 0) | 0, Re((A + 5) | 0) | 0, Re((A + 7) | 0) | 0),
                (A = (A + 9) | 0),
                0)
          );
        }
        function ft(K) {
          return (K = K | 0), G(((K | 0) - 224) | 0), (A = (A + 1) | 0), 0;
        }
        function ir(K) {
          return (K = K | 0), W(), (A = (A + 1) | 0), 0;
        }
        function Hn(K) {
          return (K = K | 0), O(), (A = (A + 1) | 0), 0;
        }
        function Da(K) {
          return (K = K | 0), de(), (A = (A + 1) | 0), 0;
        }
        function Ys(K) {
          return (K = K | 0), ce(), (A = (A + 1) | 0), 0;
        }
        function $s(K) {
          return (K = K | 0), Oe(1) | 0 ? 1 : (G(c[(A + 1) | 0] | 0), (A = (A + 2) | 0), 0);
        }
        function Wu(K) {
          K = K | 0;
          var Je = 0,
            ot = 0,
            ut = 1,
            jr = 0,
            Cr = 0,
            ln = 0;
          return Oe(2) | 0
            ? 1
            : ((Je = c[(A + 1) | 0] | 0),
              (ot = c[(A + 2) | 0] | 0),
              (Je | 0) & 128 && (ut = -1),
              (jr = +(((Je | 0) & 124) >> 2)),
              (Cr = +((((Je | 0) & 3) << 8) | ot)),
              +jr == 0
                ? B(+(+ut * 5960464477539063e-23 * +Cr))
                : +jr == 31
                  ? +ut == 1
                    ? +Cr > 0
                      ? je()
                      : ve()
                    : +Cr > 0
                      ? We()
                      : Q()
                  : B(+(+ut * me(2, +(+jr - 25)) * +(1024 + Cr))),
              (A = (A + 3) | 0),
              0);
        }
        function gi(K) {
          return (
            (K = K | 0),
            Oe(4) | 0
              ? 1
              : (v(c[(A + 1) | 0] | 0, c[(A + 2) | 0] | 0, c[(A + 3) | 0] | 0, c[(A + 4) | 0] | 0),
                (A = (A + 5) | 0),
                0)
          );
        }
        function ja(K) {
          return (
            (K = K | 0),
            Oe(8) | 0
              ? 1
              : (_(
                  c[(A + 1) | 0] | 0,
                  c[(A + 2) | 0] | 0,
                  c[(A + 3) | 0] | 0,
                  c[(A + 4) | 0] | 0,
                  c[(A + 5) | 0] | 0,
                  c[(A + 6) | 0] | 0,
                  c[(A + 7) | 0] | 0,
                  c[(A + 8) | 0] | 0
                ),
                (A = (A + 9) | 0),
                0)
          );
        }
        function dt(K) {
          return (K = K | 0), 1;
        }
        function Gn(K) {
          return (K = K | 0), be(), (A = (A + 1) | 0), 0;
        }
        var vi = [
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          R,
          Z,
          ie,
          P,
          ne,
          dt,
          dt,
          dt,
          dt,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          re,
          N,
          z,
          L,
          dt,
          dt,
          dt,
          dt,
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
          pe,
          ge,
          Me,
          qe,
          dt,
          dt,
          dt,
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
          H,
          te,
          dt,
          dt,
          dt,
          j,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          k,
          se,
          Ee,
          Be,
          Ce,
          dt,
          dt,
          dt,
          Pe,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          $e,
          Ie,
          Le,
          Ge,
          Fe,
          dt,
          dt,
          dt,
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
          Ku,
          Ju,
          Vs,
          un,
          dt,
          dt,
          dt,
          dt,
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
          Da,
          Ys,
          $s,
          Wu,
          gi,
          ja,
          dt,
          dt,
          dt,
          Gn
        ];
        return { parse: Ke };
      })),
    lo
  );
}
var so = {},
  gr = {},
  zm;
function Ds() {
  if (zm) return gr;
  zm = 1;
  const n = Rs().BigNumber;
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
var Im;
function ko() {
  return (
    Im ||
      ((Im = 1),
      (function (n) {
        const { Buffer: a } = Hu(),
          u = Rs().BigNumber,
          s = Ds(),
          c = s.SHIFT32,
          m = s.SHIFT16,
          o = 2097151;
        n.parseHalf = function (x) {
          const B = x[0] & 128 ? -1 : 1,
            v = (x[0] & 124) >> 2,
            _ = ((x[0] & 3) << 8) | x[1];
          return v
            ? v === 31
              ? B * (_ ? NaN : 1 / 0)
              : B * Math.pow(2, v - 25) * (1024 + _)
            : B * 5960464477539063e-23 * _;
        };
        function h(S) {
          return S < 16 ? '0' + S.toString(16) : S.toString(16);
        }
        (n.arrayBufferToBignumber = function (S) {
          const x = S.byteLength;
          let B = '';
          for (let v = 0; v < x; v++) B += h(S[v]);
          return new u(B, 16);
        }),
          (n.buildMap = (S) => {
            const x = new Map(),
              B = Object.keys(S),
              v = B.length;
            for (let _ = 0; _ < v; _++) x.set(B[_], S[B[_]]);
            return x;
          }),
          (n.buildInt32 = (S, x) => S * m + x),
          (n.buildInt64 = (S, x, B, v) => {
            const _ = n.buildInt32(S, x),
              O = n.buildInt32(B, v);
            return _ > o ? new u(_).times(c).plus(O) : _ * c + O;
          }),
          (n.writeHalf = function (x, B) {
            const v = a.allocUnsafe(4);
            v.writeFloatBE(B, 0);
            const _ = v.readUInt32BE(0);
            if ((_ & 8191) !== 0) return !1;
            let O = (_ >> 16) & 32768;
            const W = (_ >> 23) & 255,
              ce = _ & 8388607;
            if (W >= 113 && W <= 142) O += ((W - 112) << 10) + (ce >> 13);
            else if (W >= 103 && W < 113) {
              if (ce & ((1 << (126 - W)) - 1)) return !1;
              O += (ce + 8388608) >> (126 - W);
            } else return !1;
            return x.writeUInt16BE(O, 0), !0;
          }),
          (n.keySorter = function (S, x) {
            const B = S[0].byteLength,
              v = x[0].byteLength;
            return B > v ? 1 : v > B ? -1 : S[0].compare(x[0]);
          }),
          (n.isNegativeZero = (S) => S === 0 && 1 / S < 0),
          (n.nextPowerOf2 = (S) => {
            let x = 0;
            if (S && !(S & (S - 1))) return S;
            for (; S !== 0; ) (S >>= 1), (x += 1);
            return 1 << x;
          });
      })(so)),
    so
  );
}
var co, Lm;
function Ip() {
  if (Lm) return co;
  Lm = 1;
  const n = Ds(),
    a = n.MT,
    u = n.SIMPLE,
    s = n.SYMS;
  class c {
    constructor(o) {
      if (typeof o != 'number') throw new Error('Invalid Simple type: ' + typeof o);
      if (o < 0 || o > 255 || (o | 0) !== o) throw new Error('value must be a small positive integer: ' + o);
      this.value = o;
    }
    toString() {
      return 'simple(' + this.value + ')';
    }
    inspect() {
      return 'simple(' + this.value + ')';
    }
    encodeCBOR(o) {
      return o._pushInt(this.value, a.SIMPLE_FLOAT);
    }
    static isSimple(o) {
      return o instanceof c;
    }
    static decode(o, h) {
      switch ((h == null && (h = !0), o)) {
        case u.FALSE:
          return !1;
        case u.TRUE:
          return !0;
        case u.NULL:
          return h ? null : s.NULL;
        case u.UNDEFINED:
          return h ? void 0 : s.UNDEFINED;
        case -1:
          if (!h) throw new Error('Invalid BREAK');
          return s.BREAK;
        default:
          return new c(o);
      }
    }
  }
  return (co = c), co;
}
var fo, Hm;
function Lp() {
  if (Hm) return fo;
  Hm = 1;
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
  return (fo = n), fo;
}
var oo, Gm;
function Hp() {
  if (Gm) return oo;
  Gm = 1;
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
    constructor(h = '', S = s) {
      (this.super = new u(h, S)),
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
    set hash(h) {
      this.super.hash = h;
    }
    set host(h) {
      this.super.host = h;
    }
    set hostname(h) {
      this.super.hostname = h;
    }
    set href(h) {
      this.super.href = h;
    }
    set password(h) {
      this.super.password = h;
    }
    set pathname(h) {
      this.super.pathname = h;
    }
    set port(h) {
      this.super.port = h;
    }
    set protocol(h) {
      this.super.protocol = h;
    }
    set search(h) {
      this.super.search = h;
    }
    set username(h) {
      this.super.username = h;
    }
    static createObjectURL(h) {
      return u.createObjectURL(h);
    }
    static revokeObjectURL(h) {
      u.revokeObjectURL(h);
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
  function m(o) {
    if (typeof o == 'string') return new u(o).toString();
    if (!(o instanceof u)) {
      const h = o.username && o.password ? `${o.username}:${o.password}@` : '',
        S = o.auth ? o.auth + '@' : '',
        x = o.port ? ':' + o.port : '',
        B = o.protocol ? o.protocol + '//' : '',
        v = o.host || '',
        _ = o.hostname || '',
        O = o.search || (o.query ? '?' + o.query : ''),
        W = o.hash || '',
        ce = o.pathname || '',
        de = o.path || ce + O;
      return `${B}${h || S}${v || _ + x}${de}${W}`;
    }
  }
  return (oo = { URLWithLegacySupport: c, URLSearchParams: globalThis.URLSearchParams, defaultBase: s, format: m }), oo;
}
var ho, Fm;
function gv() {
  if (Fm) return ho;
  Fm = 1;
  const { URLWithLegacySupport: n, format: a } = Hp();
  return (
    (ho = (u, s = {}, c = {}, m) => {
      let o = s.protocol ? s.protocol.replace(':', '') : 'http';
      o = (c[o] || m || o) + ':';
      let h;
      try {
        h = new n(u);
      } catch {
        h = {};
      }
      const S = Object.assign({}, s, { protocol: o || h.protocol, host: s.host || h.host });
      return new n(u, a(S)).toString();
    }),
    ho
  );
}
var mo, Vm;
function Gp() {
  if (Vm) return mo;
  Vm = 1;
  const { URLWithLegacySupport: n, format: a, URLSearchParams: u, defaultBase: s } = Hp(),
    c = gv();
  return (mo = { URL: n, URLSearchParams: u, format: a, relative: c, defaultBase: s }), mo;
}
var po, Ym;
function Fp() {
  if (Ym) return po;
  Ym = 1;
  const { Buffer: n } = Hu(),
    a = zp(),
    u = Rs().BigNumber,
    s = yv(),
    c = ko(),
    m = Ds(),
    o = Ip(),
    h = Lp(),
    { URL: S } = Gp();
  class x {
    constructor(v) {
      (v = v || {}),
        !v.size || v.size < 65536 ? (v.size = 65536) : (v.size = c.nextPowerOf2(v.size)),
        (this._heap = new ArrayBuffer(v.size)),
        (this._heap8 = new Uint8Array(this._heap)),
        (this._buffer = n.from(this._heap)),
        this._reset(),
        (this._knownTags = Object.assign(
          {
            0: (_) => new Date(_),
            1: (_) => new Date(_ * 1e3),
            2: (_) => c.arrayBufferToBignumber(_),
            3: (_) => m.NEG_ONE.minus(c.arrayBufferToBignumber(_)),
            4: (_) => m.TEN.pow(_[0]).times(_[1]),
            5: (_) => m.TWO.pow(_[0]).times(_[1]),
            32: (_) => new S(_),
            35: (_) => new RegExp(_)
          },
          v.tags
        )),
        (this.parser = s(
          No,
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
    _push(v, _) {
      const O = this._currentParent;
      switch ((O.values++, O.type)) {
        case m.PARENT.ARRAY:
        case m.PARENT.BYTE_STRING:
        case m.PARENT.UTF8_STRING:
          O.length > -1 ? (this._ref[this._ref.length - O.length] = v) : this._ref.push(v), this._dec();
          break;
        case m.PARENT.OBJECT:
          O.tmpKey != null
            ? ((this._ref[O.tmpKey] = v), (O.tmpKey = null), this._dec())
            : ((O.tmpKey = v), typeof O.tmpKey != 'string' && ((O.type = m.PARENT.MAP), (O.ref = c.buildMap(O.ref))));
          break;
        case m.PARENT.MAP:
          O.tmpKey != null ? (this._ref.set(O.tmpKey, v), (O.tmpKey = null), this._dec()) : (O.tmpKey = v);
          break;
        case m.PARENT.TAG:
          this._ref.push(v), _ || this._dec();
          break;
        default:
          throw new Error('Unknown parent type');
      }
    }
    _createParent(v, _, O) {
      this._parents[this._depth] = { type: _, length: O, ref: v, values: 0, tmpKey: null };
    }
    _reset() {
      (this._res = []),
        (this._parents = [{ type: m.PARENT.ARRAY, length: -1, ref: this._res, values: 0, tmpKey: null }]);
    }
    createTag(v, _) {
      const O = this._knownTags[v];
      return O ? O(_) : new h(v, _);
    }
    createMap(v, _) {
      return v;
    }
    createObject(v, _) {
      return v;
    }
    createArray(v, _) {
      return v;
    }
    createByteString(v, _) {
      return n.concat(v);
    }
    createByteStringFromHeap(v, _) {
      return v === _ ? n.alloc(0) : n.from(this._heap.slice(v, _));
    }
    createInt(v) {
      return v;
    }
    createInt32(v, _) {
      return c.buildInt32(v, _);
    }
    createInt64(v, _, O, W) {
      return c.buildInt64(v, _, O, W);
    }
    createFloat(v) {
      return v;
    }
    createFloatSingle(v, _, O, W) {
      return a.read([v, _, O, W], 0, !1, 23, 4);
    }
    createFloatDouble(v, _, O, W, ce, de, ve, Q) {
      return a.read([v, _, O, W, ce, de, ve, Q], 0, !1, 52, 8);
    }
    createInt32Neg(v, _) {
      return -1 - c.buildInt32(v, _);
    }
    createInt64Neg(v, _, O, W) {
      const ce = c.buildInt32(v, _),
        de = c.buildInt32(O, W);
      return ce > m.MAX_SAFE_HIGH ? m.NEG_ONE.minus(new u(ce).times(m.SHIFT32).plus(de)) : -1 - (ce * m.SHIFT32 + de);
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
    createUtf8String(v, _) {
      return v.join('');
    }
    createUtf8StringFromHeap(v, _) {
      return v === _ ? '' : this._buffer.toString('utf8', v, _);
    }
    createSimpleUnassigned(v) {
      return new o(v);
    }
    pushInt(v) {
      this._push(this.createInt(v));
    }
    pushInt32(v, _) {
      this._push(this.createInt32(v, _));
    }
    pushInt64(v, _, O, W) {
      this._push(this.createInt64(v, _, O, W));
    }
    pushFloat(v) {
      this._push(this.createFloat(v));
    }
    pushFloatSingle(v, _, O, W) {
      this._push(this.createFloatSingle(v, _, O, W));
    }
    pushFloatDouble(v, _, O, W, ce, de, ve, Q) {
      this._push(this.createFloatDouble(v, _, O, W, ce, de, ve, Q));
    }
    pushInt32Neg(v, _) {
      this._push(this.createInt32Neg(v, _));
    }
    pushInt64Neg(v, _, O, W) {
      this._push(this.createInt64Neg(v, _, O, W));
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
    pushArrayStartFixed32(v, _) {
      const O = c.buildInt32(v, _);
      this._createArrayStartFixed(O);
    }
    pushArrayStartFixed64(v, _, O, W) {
      const ce = c.buildInt64(v, _, O, W);
      this._createArrayStartFixed(ce);
    }
    pushObjectStart() {
      this._createObjectStartFixed(-1);
    }
    pushObjectStartFixed(v) {
      this._createObjectStartFixed(v);
    }
    pushObjectStartFixed32(v, _) {
      const O = c.buildInt32(v, _);
      this._createObjectStartFixed(O);
    }
    pushObjectStartFixed64(v, _, O, W) {
      const ce = c.buildInt64(v, _, O, W);
      this._createObjectStartFixed(ce);
    }
    pushByteStringStart() {
      this._parents[this._depth] = { type: m.PARENT.BYTE_STRING, length: -1, ref: [], values: 0, tmpKey: null };
    }
    pushByteString(v, _) {
      this._push(this.createByteStringFromHeap(v, _));
    }
    pushUtf8StringStart() {
      this._parents[this._depth] = { type: m.PARENT.UTF8_STRING, length: -1, ref: [], values: 0, tmpKey: null };
    }
    pushUtf8String(v, _) {
      this._push(this.createUtf8StringFromHeap(v, _));
    }
    pushSimpleUnassigned(v) {
      this._push(this.createSimpleUnassigned(v));
    }
    pushTagStart(v) {
      this._parents[this._depth] = { type: m.PARENT.TAG, length: 1, ref: [v] };
    }
    pushTagStart4(v, _) {
      this.pushTagStart(c.buildInt32(v, _));
    }
    pushTagStart8(v, _, O, W) {
      this.pushTagStart(c.buildInt64(v, _, O, W));
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
      const _ = this.parser.parse(v.byteLength);
      if (this._depth > 1) {
        for (; this._currentParent.length === 0; ) this._closeParent();
        if (this._depth > 1) throw new Error('Undeterminated nesting');
      }
      if (_ > 0) throw new Error('Failed to parse');
      if (this._res.length === 0) throw new Error('No valid result');
    }
    decodeFirst(v) {
      return this._decode(v), this._res[0];
    }
    decodeAll(v) {
      return this._decode(v), this._res;
    }
    static decode(v, _) {
      return typeof v == 'string' && (v = n.from(v, _ || 'hex')), new x({ size: v.length }).decodeFirst(v);
    }
    static decodeAll(v, _) {
      return typeof v == 'string' && (v = n.from(v, _ || 'hex')), new x({ size: v.length }).decodeAll(v);
    }
  }
  return (x.decodeFirst = x.decode), (po = x), po;
}
var yo, $m;
function vv() {
  if ($m) return yo;
  $m = 1;
  const { Buffer: n } = Hu(),
    a = Fp(),
    u = ko();
  class s extends a {
    createTag(o, h) {
      return `${o}(${h})`;
    }
    createInt(o) {
      return super.createInt(o).toString();
    }
    createInt32(o, h) {
      return super.createInt32(o, h).toString();
    }
    createInt64(o, h, S, x) {
      return super.createInt64(o, h, S, x).toString();
    }
    createInt32Neg(o, h) {
      return super.createInt32Neg(o, h).toString();
    }
    createInt64Neg(o, h, S, x) {
      return super.createInt64Neg(o, h, S, x).toString();
    }
    createTrue() {
      return 'true';
    }
    createFalse() {
      return 'false';
    }
    createFloat(o) {
      const h = super.createFloat(o);
      return u.isNegativeZero(o) ? '-0_1' : `${h}_1`;
    }
    createFloatSingle(o, h, S, x) {
      return `${super.createFloatSingle(o, h, S, x)}_2`;
    }
    createFloatDouble(o, h, S, x, B, v, _, O) {
      return `${super.createFloatDouble(o, h, S, x, B, v, _, O)}_3`;
    }
    createByteString(o, h) {
      const S = o.join(', ');
      return h === -1 ? `(_ ${S})` : `h'${S}`;
    }
    createByteStringFromHeap(o, h) {
      return `h'${n.from(super.createByteStringFromHeap(o, h)).toString('hex')}'`;
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
    createSimpleUnassigned(o) {
      return `simple(${o})`;
    }
    createArray(o, h) {
      const S = super.createArray(o, h);
      return h === -1 ? `[_ ${S.join(', ')}]` : `[${S.join(', ')}]`;
    }
    createMap(o, h) {
      const S = super.createMap(o),
        x = Array.from(S.keys()).reduce(c(S), '');
      return h === -1 ? `{_ ${x}}` : `{${x}}`;
    }
    createObject(o, h) {
      const S = super.createObject(o),
        x = Object.keys(S).reduce(c(S), '');
      return h === -1 ? `{_ ${x}}` : `{${x}}`;
    }
    createUtf8String(o, h) {
      const S = o.join(', ');
      return h === -1 ? `(_ ${S})` : `"${S}"`;
    }
    createUtf8StringFromHeap(o, h) {
      return `"${n.from(super.createUtf8StringFromHeap(o, h)).toString('utf8')}"`;
    }
    static diagnose(o, h) {
      return typeof o == 'string' && (o = n.from(o, h || 'hex')), new s().decodeFirst(o);
    }
  }
  yo = s;
  function c(m) {
    return (o, h) => (o ? `${o}, ${h}: ${m[h]}` : `${h}: ${m[h]}`);
  }
  return yo;
}
var go, Xm;
function bv() {
  if (Xm) return go;
  Xm = 1;
  const { Buffer: n } = Hu(),
    { URL: a } = Gp(),
    u = Rs().BigNumber,
    s = ko(),
    c = Ds(),
    m = c.MT,
    o = c.NUMBYTES,
    h = c.SHIFT32,
    S = c.SYMS,
    x = c.TAG,
    B = (c.MT.SIMPLE_FLOAT << 5) | c.NUMBYTES.TWO,
    v = (c.MT.SIMPLE_FLOAT << 5) | c.NUMBYTES.FOUR,
    _ = (c.MT.SIMPLE_FLOAT << 5) | c.NUMBYTES.EIGHT,
    O = (c.MT.SIMPLE_FLOAT << 5) | c.SIMPLE.TRUE,
    W = (c.MT.SIMPLE_FLOAT << 5) | c.SIMPLE.FALSE,
    ce = (c.MT.SIMPLE_FLOAT << 5) | c.SIMPLE.UNDEFINED,
    de = (c.MT.SIMPLE_FLOAT << 5) | c.SIMPLE.NULL,
    ve = new u('0x20000000000000'),
    Q = n.from('f97e00', 'hex'),
    je = n.from('f9fc00', 'hex'),
    We = n.from('f97c00', 'hex');
  function _e(De) {
    return {}.toString.call(De).slice(8, -1);
  }
  class we {
    constructor(y) {
      (y = y || {}),
        (this.streaming = typeof y.stream == 'function'),
        (this.onData = y.stream),
        (this.semanticTypes = [
          [a, this._pushUrl],
          [u, this._pushBigNumber]
        ]);
      const E = y.genTypes || [],
        w = E.length;
      for (let F = 0; F < w; F++) this.addSemanticType(E[F][0], E[F][1]);
      this._reset();
    }
    addSemanticType(y, E) {
      const w = this.semanticTypes.length;
      for (let F = 0; F < w; F++)
        if (this.semanticTypes[F][0] === y) {
          const Y = this.semanticTypes[F][1];
          return (this.semanticTypes[F][1] = E), Y;
        }
      return this.semanticTypes.push([y, E]), null;
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
    pushWrite(y, E, w) {
      return (
        (this.result[this.offset] = y),
        (this.resultMethod[this.offset] = E),
        (this.resultLength[this.offset] = w),
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
      const E = y < 0 ? je : We;
      return this.push(E);
    }
    _pushFloat(y) {
      const E = n.allocUnsafe(2);
      if (s.writeHalf(E, y) && s.parseHalf(E) === y) return this._pushUInt8(B) && this.push(E);
      const w = n.allocUnsafe(4);
      return (
        w.writeFloatBE(y, 0),
        w.readFloatBE(0) === y ? this._pushUInt8(v) && this.push(w) : this._pushUInt8(_) && this._pushDoubleBE(y)
      );
    }
    _pushInt(y, E, w) {
      const F = E << 5;
      return y < 24
        ? this._pushUInt8(F | y)
        : y <= 255
          ? this._pushUInt8(F | o.ONE) && this._pushUInt8(y)
          : y <= 65535
            ? this._pushUInt8(F | o.TWO) && this._pushUInt16BE(y)
            : y <= 4294967295
              ? this._pushUInt8(F | o.FOUR) && this._pushUInt32BE(y)
              : y <= Number.MAX_SAFE_INTEGER
                ? this._pushUInt8(F | o.EIGHT) && this._pushUInt32BE(Math.floor(y / h)) && this._pushUInt32BE(y % h)
                : E === m.NEG_INT
                  ? this._pushFloat(w)
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
      const E = n.byteLength(y, 'utf8');
      return this._pushInt(E, m.UTF8_STRING) && this.pushWrite(y, 5, E);
    }
    _pushBoolean(y) {
      return this._pushUInt8(y ? O : W);
    }
    _pushUndefined(y) {
      return this._pushUInt8(ce);
    }
    _pushArray(y, E) {
      const w = E.length;
      if (!y._pushInt(w, m.ARRAY)) return !1;
      for (let F = 0; F < w; F++) if (!y.pushAny(E[F])) return !1;
      return !0;
    }
    _pushTag(y) {
      return this._pushInt(y, m.TAG);
    }
    _pushDate(y, E) {
      return y._pushTag(x.DATE_EPOCH) && y.pushAny(Math.round(E / 1e3));
    }
    _pushBuffer(y, E) {
      return y._pushInt(E.length, m.BYTE_STRING) && y.push(E);
    }
    _pushNoFilter(y, E) {
      return y._pushBuffer(y, E.slice());
    }
    _pushRegexp(y, E) {
      return y._pushTag(x.REGEXP) && y.pushAny(E.source);
    }
    _pushSet(y, E) {
      if (!y._pushInt(E.size, m.ARRAY)) return !1;
      for (const w of E) if (!y.pushAny(w)) return !1;
      return !0;
    }
    _pushUrl(y, E) {
      return y._pushTag(x.URI) && y.pushAny(E.format());
    }
    _pushBigint(y) {
      let E = x.POS_BIGINT;
      y.isNegative() && ((y = y.negated().minus(1)), (E = x.NEG_BIGINT));
      let w = y.toString(16);
      w.length % 2 && (w = '0' + w);
      const F = n.from(w, 'hex');
      return this._pushTag(E) && this._pushBuffer(this, F);
    }
    _pushBigNumber(y, E) {
      if (E.isNaN()) return y._pushNaN();
      if (!E.isFinite()) return y._pushInfinity(E.isNegative() ? -1 / 0 : 1 / 0);
      if (E.isInteger()) return y._pushBigint(E);
      if (!(y._pushTag(x.DECIMAL_FRAC) && y._pushInt(2, m.ARRAY))) return !1;
      const w = E.decimalPlaces(),
        F = E.multipliedBy(new u(10).pow(w));
      return y._pushIntNum(-w) ? (F.abs().isLessThan(ve) ? y._pushIntNum(F.toNumber()) : y._pushBigint(F)) : !1;
    }
    _pushMap(y, E) {
      return y._pushInt(E.size, m.MAP) ? this._pushRawMap(E.size, Array.from(E)) : !1;
    }
    _pushObject(y) {
      if (!y) return this._pushUInt8(de);
      const E = this.semanticTypes.length;
      for (let Y = 0; Y < E; Y++)
        if (y instanceof this.semanticTypes[Y][0]) return this.semanticTypes[Y][1].call(y, this, y);
      const w = y.encodeCBOR;
      if (typeof w == 'function') return w.call(y, this);
      const F = Object.keys(y),
        V = F.length;
      return this._pushInt(V, m.MAP)
        ? this._pushRawMap(
            V,
            F.map((Y) => [Y, y[Y]])
          )
        : !1;
    }
    _pushRawMap(y, E) {
      E = E.map(function (w) {
        return (w[0] = we.encode(w[0])), w;
      }).sort(s.keySorter);
      for (let w = 0; w < y; w++) if (!this.push(E[w][0]) || !this.pushAny(E[w][1])) return !1;
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
          return this._pushUInt8(de);
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
        E = this.resultLength,
        w = this.resultMethod,
        F = this.offset;
      let V = 0,
        Y = 0;
      for (; Y < F; Y++) V += E[Y];
      const X = n.allocUnsafe(V);
      let C = 0,
        T = 0;
      for (Y = 0; Y < F; Y++) {
        switch (((T = E[Y]), w[Y])) {
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
      const E = new we();
      if (!E.pushAny(y)) throw new Error('Failed to encode input');
      return E.finalize();
    }
  }
  return (go = we), go;
}
var Zm;
function Sv() {
  return (
    Zm ||
      ((Zm = 1),
      (function (n) {
        (n.Diagnose = vv()),
          (n.Decoder = Fp()),
          (n.Encoder = bv()),
          (n.Simple = Ip()),
          (n.Tagged = Lp()),
          (n.decodeAll = n.Decoder.decodeAll),
          (n.decodeFirst = n.Decoder.decodeFirst),
          (n.diagnose = n.Diagnose.diagnose),
          (n.encode = n.Encoder.encode),
          (n.decode = n.Decoder.decode),
          (n.leveldb = { decode: n.Decoder.decodeAll, encode: n.Encoder.encode, buffer: !0, name: 'cbor' });
      })(ao)),
    ao
  );
}
var xv = Sv();
const Vp = Iu(xv);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ const qo = 2n ** 256n,
  Hi = qo - 0x1000003d1n,
  mr = qo - 0x14551231950b75fc4402da1732fc9bebfn,
  Ev = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,
  _v = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,
  Yp = { a: 0n, b: 7n },
  Rr = 32,
  Qm = (n) => Ye(Ye(n * n) * n + Yp.b),
  Bt = (n = '') => {
    throw new Error(n);
  },
  js = (n) => typeof n == 'bigint',
  $p = (n) => typeof n == 'string',
  vo = (n) => js(n) && 0n < n && n < Hi,
  zu = (n) => js(n) && 0n < n && n < mr,
  wv = (n) => n instanceof Uint8Array || (ArrayBuffer.isView(n) && n.constructor.name === 'Uint8Array'),
  Es = (n, a) => (!wv(n) || (typeof a == 'number' && a > 0 && n.length !== a) ? Bt('Uint8Array expected') : n),
  pn = (n) => new Uint8Array(n),
  Yi = (n, a) => Es($p(n) ? Gu(n) : pn(Es(n)), a),
  Ye = (n, a = Hi) => {
    const u = n % a;
    return u >= 0n ? u : a + u;
  },
  Km = (n) => (n instanceof Ur ? n : Bt('Point expected'));
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
      m = _s(c, 0, Rr),
      o = a.length;
    if (o === 33 && [2, 3].includes(s)) {
      vo(m) || Bt('Point hex invalid: x not FE');
      let h = Av(Qm(m));
      const S = (h & 1n) === 1n;
      ((s & 1) === 1) !== S && (h = Ye(-h)), (u = new Ur(m, h, 1n));
    }
    return (
      o === 65 && s === 4 && (u = new Ur(m, _s(c, Rr, 2 * Rr), 1n)), u ? u.ok() : Bt('Point invalid: not on curve')
    );
  }
  static fromPrivateKey(a) {
    return Gi.mul(Zp(a));
  }
  get x() {
    return this.aff().x;
  }
  get y() {
    return this.aff().y;
  }
  equals(a) {
    const { px: u, py: s, pz: c } = this,
      { px: m, py: o, pz: h } = Km(a),
      S = Ye(u * h),
      x = Ye(m * c),
      B = Ye(s * h),
      v = Ye(o * c);
    return S === x && B === v;
  }
  negate() {
    return new Ur(this.px, Ye(-this.py), this.pz);
  }
  double() {
    return this.add(this);
  }
  add(a) {
    const { px: u, py: s, pz: c } = this,
      { px: m, py: o, pz: h } = Km(a),
      { a: S, b: x } = Yp;
    let B = 0n,
      v = 0n,
      _ = 0n;
    const O = Ye(x * 3n);
    let W = Ye(u * m),
      ce = Ye(s * o),
      de = Ye(c * h),
      ve = Ye(u + s),
      Q = Ye(m + o);
    (ve = Ye(ve * Q)), (Q = Ye(W + ce)), (ve = Ye(ve - Q)), (Q = Ye(u + c));
    let je = Ye(m + h);
    return (
      (Q = Ye(Q * je)),
      (je = Ye(W + de)),
      (Q = Ye(Q - je)),
      (je = Ye(s + c)),
      (B = Ye(o + h)),
      (je = Ye(je * B)),
      (B = Ye(ce + de)),
      (je = Ye(je - B)),
      (_ = Ye(S * Q)),
      (B = Ye(O * de)),
      (_ = Ye(B + _)),
      (B = Ye(ce - _)),
      (_ = Ye(ce + _)),
      (v = Ye(B * _)),
      (ce = Ye(W + W)),
      (ce = Ye(ce + W)),
      (de = Ye(S * de)),
      (Q = Ye(O * Q)),
      (ce = Ye(ce + de)),
      (de = Ye(W - de)),
      (de = Ye(S * de)),
      (Q = Ye(Q + de)),
      (W = Ye(ce * Q)),
      (v = Ye(v + W)),
      (W = Ye(je * Q)),
      (B = Ye(ve * B)),
      (B = Ye(B - W)),
      (W = Ye(ve * ce)),
      (_ = Ye(je * _)),
      (_ = Ye(_ + W)),
      new Ur(B, v, _)
    );
  }
  mul(a, u = !0) {
    if (!u && a === 0n) return Uu;
    if ((zu(a) || Bt('scalar invalid'), this.equals(Gi))) return Uv(a).p;
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
    const c = ks(s, Hi);
    return Ye(s * c) !== 1n && Bt('inverse invalid'), { x: Ye(a * c), y: Ye(u * c) };
  }
  assertValidity() {
    const { x: a, y: u } = this.aff();
    return (
      (!vo(a) || !vo(u)) && Bt('Point invalid: x or y'), Ye(u * u) === Qm(a) ? this : Bt('Point invalid: not on curve')
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
    return (a ? ((s & 1n) === 0n ? '02' : '03') : '04') + Ru(u) + (a ? '' : Ru(s));
  }
  toRawBytes(a = !0) {
    return Gu(this.toHex(a));
  }
}
Ur.BASE = new Ur(Ev, _v, 1n);
Ur.ZERO = new Ur(0n, 1n, 0n);
const { BASE: Gi, ZERO: Uu } = Ur,
  Xp = (n, a) => n.toString(16).padStart(a, '0'),
  zo = (n) =>
    Array.from(Es(n))
      .map((a) => Xp(a, 2))
      .join(''),
  Cn = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 },
  Jm = (n) => {
    if (n >= Cn._0 && n <= Cn._9) return n - Cn._0;
    if (n >= Cn.A && n <= Cn.F) return n - (Cn.A - 10);
    if (n >= Cn.a && n <= Cn.f) return n - (Cn.a - 10);
  },
  Gu = (n) => {
    const a = 'hex invalid';
    if (!$p(n)) return Bt(a);
    const u = n.length,
      s = u / 2;
    if (u % 2) return Bt(a);
    const c = pn(s);
    for (let m = 0, o = 0; m < s; m++, o += 2) {
      const h = Jm(n.charCodeAt(o)),
        S = Jm(n.charCodeAt(o + 1));
      if (h === void 0 || S === void 0) return Bt(a);
      c[m] = h * 16 + S;
    }
    return c;
  },
  Fu = (n) => BigInt('0x' + (zo(n) || '0')),
  _s = (n, a, u) => Fu(n.slice(a, u)),
  Cs = (n) => (js(n) && n >= 0n && n < qo ? Gu(Xp(n, 2 * Rr)) : Bt('bigint expected')),
  Ru = (n) => zo(Cs(n)),
  Oo = (...n) => {
    const a = pn(n.reduce((s, c) => s + Es(c).length, 0));
    let u = 0;
    return (
      n.forEach((s) => {
        a.set(s, u), (u += s.length);
      }),
      a
    );
  },
  ks = (n, a) => {
    (n === 0n || a <= 0n) && Bt('no inverse n=' + n + ' mod=' + a);
    let u = Ye(n, a),
      s = a,
      c = 0n,
      m = 1n;
    for (; u !== 0n; ) {
      const o = s / u,
        h = s % u,
        S = c - m * o;
      (s = u), (u = h), (c = m), (m = S);
    }
    return s === 1n ? Ye(c, a) : Bt('no inverse');
  },
  Av = (n) => {
    let a = 1n;
    for (let u = n, s = (Hi + 1n) / 4n; s > 0n; s >>= 1n) s & 1n && (a = (a * u) % Hi), (u = (u * u) % Hi);
    return Ye(a * a) === n ? a : Bt('sqrt invalid');
  },
  Zp = (n) => (js(n) || (n = Fu(Yi(n, Rr))), zu(n) ? n : Bt('private key invalid 3')),
  To = (n) => n > mr >> 1n;
class Du {
  constructor(a, u, s) {
    (this.r = a), (this.s = u), (this.recovery = s), this.assertValidity();
  }
  static fromCompact(a) {
    return (a = Yi(a, 64)), new Du(_s(a, 0, Rr), _s(a, Rr, 2 * Rr));
  }
  assertValidity() {
    return zu(this.r) && zu(this.s) ? this : Bt();
  }
  addRecoveryBit(a) {
    return new Du(this.r, this.s, a);
  }
  hasHighS() {
    return To(this.s);
  }
  normalizeS() {
    return To(this.s) ? new Du(this.r, Ye(-this.s, mr), this.recovery) : this;
  }
  recoverPublicKey(a) {
    const { r: u, s, recovery: c } = this;
    [0, 1, 2, 3].includes(c) || Bt('recovery id invalid');
    const m = Kp(Yi(a, Rr)),
      o = c === 2 || c === 3 ? u + mr : u;
    o >= Hi && Bt('q.x invalid');
    const h = (c & 1) === 0 ? '02' : '03',
      S = Ur.fromHex(h + Ru(o)),
      x = ks(o, mr),
      B = Ye(-m * x, mr),
      v = Ye(s * x, mr);
    return Gi.mulAddQUns(S, B, v);
  }
  toCompactRawBytes() {
    return Gu(this.toCompactHex());
  }
  toCompactHex() {
    return Ru(this.r) + Ru(this.s);
  }
}
const Qp = (n) => {
    const a = n.length * 8 - 256;
    a > 1024 && Bt('msg invalid');
    const u = Fu(n);
    return a > 0 ? u >> BigInt(a) : u;
  },
  Kp = (n) => Ye(Qp(n), mr),
  Wm = (n) => Cs(n),
  Pm = () => (typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0);
let ju;
const Jp = { lowS: !0 },
  Nv = (n, a, u = Jp) => {
    ['der', 'recovered', 'canonical'].some((v) => v in u) && Bt('option not supported');
    let { lowS: s } = u;
    s == null && (s = !0);
    const c = Kp(Yi(n)),
      m = Wm(c),
      o = Zp(a),
      h = [Wm(o), m];
    let S = u.extraEntropy;
    S && h.push(S === !0 ? ws.randomBytes(Rr) : Yi(S));
    const x = c,
      B = (v) => {
        const _ = Qp(v);
        if (!zu(_)) return;
        const O = ks(_, mr),
          W = Gi.mul(_).aff(),
          ce = Ye(W.x, mr);
        if (ce === 0n) return;
        const de = Ye(O * Ye(x + Ye(o * ce, mr), mr), mr);
        if (de === 0n) return;
        let ve = de,
          Q = (W.x === ce ? 0 : 2) | Number(W.y & 1n);
        return s && To(de) && ((ve = Ye(-de, mr)), (Q ^= 1)), new Du(ce, ve, Q);
      };
    return { seed: Oo(...h), k2sig: B };
  };
function Ov(n) {
  let a = pn(Rr),
    u = pn(Rr),
    s = 0;
  const c = () => {
      a.fill(1), u.fill(0), (s = 0);
    },
    m = 'drbg: tried 1000 values';
  {
    const o = (...x) => {
        const B = ju;
        return B || Bt('etc.hmacSha256Sync not set'), B(u, a, ...x);
      },
      h = (x = pn()) => {
        (u = o(pn([0]), x)), (a = o()), x.length !== 0 && ((u = o(pn([1]), x)), (a = o()));
      },
      S = () => (s++ >= 1e3 && Bt(m), (a = o()), a);
    return (x, B) => {
      c(), h(x);
      let v;
      for (; !(v = B(S())); ) h();
      return c(), v;
    };
  }
}
const Tv = (n, a, u = Jp) => {
    const { seed: s, k2sig: c } = Nv(n, a, u);
    return Ov()(s, c);
  },
  Mv = (n) => {
    (n = Yi(n)), (n.length < Rr + 8 || n.length > 1024) && Bt('expected 40-1024b');
    const a = Ye(Fu(n), mr - 1n);
    return Cs(a + 1n);
  },
  ws = {
    hexToBytes: Gu,
    bytesToHex: zo,
    concatBytes: Oo,
    bytesToNumberBE: Fu,
    numberToBytesBE: Cs,
    mod: Ye,
    invert: ks,
    hmacSha256Async: async (n, ...a) => {
      const u = Pm(),
        s = u && u.subtle;
      if (!s) return Bt('etc.hmacSha256Async or crypto.subtle must be defined');
      const c = await s.importKey('raw', n, { name: 'HMAC', hash: { name: 'SHA-256' } }, !1, ['sign']);
      return pn(await s.sign('HMAC', c, Oo(...a)));
    },
    hmacSha256Sync: ju,
    hashToPrivateKey: Mv,
    randomBytes: (n = 32) => {
      const a = Pm();
      return (!a || !a.getRandomValues) && Bt('crypto.getRandomValues must be defined'), a.getRandomValues(pn(n));
    }
  };
Object.defineProperties(ws, {
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
  Bv = () => {
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
let ep;
const Uv = (n) => {
  const a = ep || (ep = Bv()),
    u = (B, v) => {
      let _ = v.negate();
      return B ? _ : v;
    };
  let s = Uu,
    c = Gi;
  const m = 1 + 256 / Ii,
    o = 2 ** (Ii - 1),
    h = BigInt(2 ** Ii - 1),
    S = 2 ** Ii,
    x = BigInt(Ii);
  for (let B = 0; B < m; B++) {
    const v = B * o;
    let _ = Number(n & h);
    (n >>= x), _ > o && ((_ -= S), (n += 1n));
    const O = v,
      W = v + Math.abs(_) - 1,
      ce = B % 2 !== 0,
      de = _ < 0;
    _ === 0 ? (c = c.add(u(ce, a[O]))) : (s = s.add(u(de, a[W])));
  }
  return { p: s, f: c };
};
var Fi = Hu();
ws.hmacSha256Sync = (n, ...a) => kp(qp, n, ws.concatBytes(...a));
class Rv {
  constructor(a, u, s, c, m = Ss.V0) {
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
    return Vp.encode(a);
  }
  hash() {
    return qp(this.toTxDataBytes());
  }
  sign(a) {
    const u = Tv(this.hash(), Fi.Buffer.from(a, 'hex'));
    return (this.signature = Fi.Buffer.concat([u.toCompactRawBytes(), Fi.Buffer.from([u.recovery])])), this;
  }
  isSigned() {
    return !!this.signature;
  }
}
function tp(n) {
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
var Dv = async (n, a) => {
    let u = typeof a == 'function' ? await a(n) : a;
    if (u) return n.scheme === 'bearer' ? `Bearer ${u}` : n.scheme === 'basic' ? `Basic ${btoa(u)}` : u;
  },
  jv = { bodySerializer: (n) => JSON.stringify(n, (a, u) => (typeof u == 'bigint' ? u.toString() : u)) },
  Cv = (n) => {
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
  kv = (n) => {
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
  qv = (n) => {
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
  Wp = ({ allowReserved: n, explode: a, name: u, style: s, value: c }) => {
    if (!a) {
      let h = (n ? c : c.map((S) => encodeURIComponent(S))).join(kv(s));
      switch (s) {
        case 'label':
          return `.${h}`;
        case 'matrix':
          return `;${u}=${h}`;
        case 'simple':
          return h;
        default:
          return `${u}=${h}`;
      }
    }
    let m = Cv(s),
      o = c
        .map((h) =>
          s === 'label' || s === 'simple'
            ? n
              ? h
              : encodeURIComponent(h)
            : qs({ allowReserved: n, name: u, value: h })
        )
        .join(m);
    return s === 'label' || s === 'matrix' ? m + o : o;
  },
  qs = ({ allowReserved: n, name: a, value: u }) => {
    if (u == null) return '';
    if (typeof u == 'object')
      throw new Error(
        'Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.'
      );
    return `${a}=${n ? u : encodeURIComponent(u)}`;
  },
  Pp = ({ allowReserved: n, explode: a, name: u, style: s, value: c }) => {
    if (c instanceof Date) return `${u}=${c.toISOString()}`;
    if (s !== 'deepObject' && !a) {
      let h = [];
      Object.entries(c).forEach(([x, B]) => {
        h = [...h, x, n ? B : encodeURIComponent(B)];
      });
      let S = h.join(',');
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
    let m = qv(s),
      o = Object.entries(c)
        .map(([h, S]) => qs({ allowReserved: n, name: s === 'deepObject' ? `${u}[${h}]` : h, value: S }))
        .join(m);
    return s === 'label' || s === 'matrix' ? m + o : o;
  },
  zv = /\{[^{}]+\}/g,
  Iv = ({ path: n, url: a }) => {
    let u = a,
      s = a.match(zv);
    if (s)
      for (let c of s) {
        let m = !1,
          o = c.substring(1, c.length - 1),
          h = 'simple';
        o.endsWith('*') && ((m = !0), (o = o.substring(0, o.length - 1))),
          o.startsWith('.')
            ? ((o = o.substring(1)), (h = 'label'))
            : o.startsWith(';') && ((o = o.substring(1)), (h = 'matrix'));
        let S = n[o];
        if (S == null) continue;
        if (Array.isArray(S)) {
          u = u.replace(c, Wp({ explode: m, name: o, style: h, value: S }));
          continue;
        }
        if (typeof S == 'object') {
          u = u.replace(c, Pp({ explode: m, name: o, style: h, value: S }));
          continue;
        }
        if (h === 'matrix') {
          u = u.replace(c, `;${qs({ name: o, value: S })}`);
          continue;
        }
        let x = encodeURIComponent(h === 'label' ? `.${S}` : S);
        u = u.replace(c, x);
      }
    return u;
  },
  ey =
    ({ allowReserved: n, array: a, object: u } = {}) =>
    (s) => {
      let c = [];
      if (s && typeof s == 'object')
        for (let m in s) {
          let o = s[m];
          if (o != null) {
            if (Array.isArray(o)) {
              c = [...c, Wp({ allowReserved: n, explode: !0, name: m, style: 'form', value: o, ...a })];
              continue;
            }
            if (typeof o == 'object') {
              c = [...c, Pp({ allowReserved: n, explode: !0, name: m, style: 'deepObject', value: o, ...u })];
              continue;
            }
            c = [...c, qs({ allowReserved: n, name: m, value: o })];
          }
        }
      return c.join('&');
    },
  Lv = (n) => {
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
  Hv = async ({ security: n, ...a }) => {
    for (let u of n) {
      let s = await Dv(u, a.auth);
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
  rp = (n) =>
    Gv({
      baseUrl: n.baseUrl,
      path: n.path,
      query: n.query,
      querySerializer: typeof n.querySerializer == 'function' ? n.querySerializer : ey(n.querySerializer),
      url: n.url
    }),
  Gv = ({ baseUrl: n, path: a, query: u, querySerializer: s, url: c }) => {
    let m = c.startsWith('/') ? c : `/${c}`,
      o = (n ?? '') + m;
    a && (o = Iv({ path: a, url: o }));
    let h = u ? s(u) : '';
    return h.startsWith('?') && (h = h.substring(1)), h && (o += `?${h}`), o;
  },
  np = (n, a) => {
    var s;
    let u = { ...n, ...a };
    return (
      (s = u.baseUrl) != null && s.endsWith('/') && (u.baseUrl = u.baseUrl.substring(0, u.baseUrl.length - 1)),
      (u.headers = ty(n.headers, a.headers)),
      u
    );
  },
  ty = (...n) => {
    let a = new Headers();
    for (let u of n) {
      if (!u || typeof u != 'object') continue;
      let s = u instanceof Headers ? u.entries() : Object.entries(u);
      for (let [c, m] of s)
        if (m === null) a.delete(c);
        else if (Array.isArray(m)) for (let o of m) a.append(c, o);
        else m !== void 0 && a.set(c, typeof m == 'object' ? JSON.stringify(m) : m);
    }
    return a;
  },
  bo = class {
    constructor() {
      gm(this, '_fns');
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
  Fv = () => ({ error: new bo(), request: new bo(), response: new bo() }),
  Vv = ey({ allowReserved: !1, array: { explode: !0, style: 'form' }, object: { explode: !0, style: 'deepObject' } }),
  Yv = { 'Content-Type': 'application/json' },
  ry = (n = {}) => ({ ...jv, headers: Yv, parseAs: 'auto', querySerializer: Vv, ...n }),
  $v = (n = {}) => {
    let a = np(ry(), n),
      u = () => ({ ...a }),
      s = (o) => ((a = np(a, o)), u()),
      c = Fv(),
      m = async (o) => {
        let h = { ...a, ...o, fetch: o.fetch ?? a.fetch ?? globalThis.fetch, headers: ty(a.headers, o.headers) };
        h.security && (await Hv({ ...h, security: h.security })),
          h.body && h.bodySerializer && (h.body = h.bodySerializer(h.body)),
          h.body || h.headers.delete('Content-Type');
        let S = rp(h),
          x = { redirect: 'follow', ...h },
          B = new Request(S, x);
        for (let de of c.request._fns) B = await de(B, h);
        let v = h.fetch,
          _ = await v(B);
        for (let de of c.response._fns) _ = await de(_, B, h);
        let O = { request: B, response: _ };
        if (_.ok) {
          if (_.status === 204 || _.headers.get('Content-Length') === '0') return { data: {}, ...O };
          let de = (h.parseAs === 'auto' ? Lv(_.headers.get('Content-Type')) : h.parseAs) ?? 'json';
          if (de === 'stream') return { data: _.body, ...O };
          let ve = await _[de]();
          return (
            de === 'json' &&
              (h.responseValidator && (await h.responseValidator(ve)),
              h.responseTransformer && (ve = await h.responseTransformer(ve))),
            { data: ve, ...O }
          );
        }
        let W = await _.text();
        try {
          W = JSON.parse(W);
        } catch {}
        let ce = W;
        for (let de of c.error._fns) ce = await de(W, _, B, h);
        if (((ce = ce || {}), h.throwOnError)) throw ce;
        return { error: ce, ...O };
      };
    return {
      buildUrl: rp,
      connect: (o) => m({ ...o, method: 'CONNECT' }),
      delete: (o) => m({ ...o, method: 'DELETE' }),
      get: (o) => m({ ...o, method: 'GET' }),
      getConfig: u,
      head: (o) => m({ ...o, method: 'HEAD' }),
      interceptors: c,
      options: (o) => m({ ...o, method: 'OPTIONS' }),
      patch: (o) => m({ ...o, method: 'PATCH' }),
      post: (o) => m({ ...o, method: 'POST' }),
      put: (o) => m({ ...o, method: 'PUT' }),
      request: m,
      setConfig: s,
      trace: (o) => m({ ...o, method: 'TRACE' })
    };
  };
const $t = $v(ry({ baseUrl: 'https://testnetopenapi.hibit.app' })),
  Xv = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/timestamp', ...n }),
  Zv = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/assets', ...n }),
  Qv = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/asset', ...n }),
  Kv = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/chains', ...n }),
  Jv = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/market/depth', ...n }),
  Wv = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/markets/swap', ...n }),
  ip = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/markets/ticker', ...n }),
  Pv = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/markets/ticker/extended', ...n }),
  eb = (n) => (n.client ?? $t).get({ url: '/v1/market/kline', ...n }),
  tb = (n) => (n.client ?? $t).get({ url: '/v1/market/trade', ...n }),
  rb = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/markets', ...n }),
  nb = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/market', ...n }),
  ib = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/order/trades', ...n }),
  ab = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/orders', ...n }),
  ub = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/order', ...n }),
  lb = (n) =>
    ((n == null ? void 0 : n.client) ?? $t).post({
      url: '/v1/tx/submit-spot-order',
      ...n,
      headers: { 'Content-Type': 'application/json', ...(n == null ? void 0 : n.headers) }
    }),
  sb = (n) =>
    ((n == null ? void 0 : n.client) ?? $t).post({
      url: '/v1/tx/cancel-spot-order',
      ...n,
      headers: { 'Content-Type': 'application/json', ...(n == null ? void 0 : n.headers) }
    }),
  cb = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/wallet/nonce', ...n }),
  fb = (n) => ((n == null ? void 0 : n.client) ?? $t).get({ url: '/v1/wallet/balances', ...n });
function ap(n) {
  var a;
  return {
    assetId: n.assetId,
    chainId: n.chainId ? Lu.fromString(n.chainId) : void 0,
    chainAssetType: rv(n.chainAssetType),
    contractAddress: n.contractAddress,
    decimalPlaces: n.decimalPlaces,
    isBaseToken: n.isBaseToken,
    displayName: n.displayName || void 0,
    assetSymbol: n.assetSymbol,
    subAssets: ((a = n.subAssets) == null ? void 0 : a.map((u) => ob(u))) || void 0
  };
}
function ob(n) {
  return {
    assetId: n.assetId,
    chainId: n.chainId ? Lu.fromString(n.chainId) : void 0,
    chainAssetType: n.chainAssetType,
    contractAddress: n.contractAddress,
    decimalPlaces: n.decimalPlaces
  };
}
function hb(n) {
  var a, u;
  return {
    query: {
      ChainIds: (a = n.chainIds) == null ? void 0 : a.map((s) => s.toString()),
      ChainAssetTypes: (u = n.chainAssetTypes) == null ? void 0 : u.map((s) => s.toString()),
      Limit: n.limit,
      Offset: n.offset,
      OrderBy: n.orderBy
    }
  };
}
function db(n) {
  return { query: { AssetId: n.toString() } };
}
function mb(n) {
  var a, u;
  return {
    query: {
      ChainIds: (a = n.chainIds) == null ? void 0 : a.map((s) => s.toString()),
      ChainAssetTypes: (u = n.chainAssetTypes) == null ? void 0 : u.map((s) => s.toString()),
      BaseAssetId: n.baseAssetId ? String(n.baseAssetId) : void 0,
      QuoteAssetId: n.quoteAssetId ? String(n.quoteAssetId) : void 0,
      Limit: n.limit,
      Offset: n.offset,
      OrderBy: n.orderBy
    }
  };
}
function pb(n) {
  return { query: { MarketId: String(n) } };
}
function up(n) {
  return {
    marketId: BigInt(n.marketId),
    marketSymbol: n.marketSymbol,
    baseAssetId: BigInt(n.baseAssetId),
    quoteAssetId: BigInt(n.quoteAssetId),
    depthLevels: n.depthLevels
  };
}
function yb(n) {
  return { query: { MarketId: n ? String(n) : void 0 } };
}
function lp(n) {
  var a, u;
  return {
    query: {
      MarketId: n.marketId ? String(n.marketId) : void 0,
      ChainIds: (a = n.chainIds) == null ? void 0 : a.map((s) => s.toString()),
      ChainAssetTypes: (u = n.chainAssetTypes) == null ? void 0 : u.map((s) => s.toString())
    }
  };
}
function sp(n) {
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
function gb(n) {
  return {
    id: BigInt(n.id),
    open: Number(n.o),
    high: Number(n.h),
    low: Number(n.l),
    close: Number(n.c),
    volume: Number(n.v),
    amount: Number(n.a),
    timestamp: Number(n.t),
    lastPriceInUsd: Number(n.lpusd),
    amountInUsd: Number(n.ausd),
    baseAssetSymbol: n.bas,
    quoteAssetSymbol: n.qas
  };
}
function vb(n) {
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
function bb(n) {
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
function Sb(n) {
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
function xb(n) {
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
function Eb(n) {
  return { query: n ? { MarketId: String(n) } : {} };
}
function _b(n) {
  return {
    marketId: BigInt(n.marketId),
    poolAmount: Number(n.poolAmount),
    poolVolume: Number(n.poolVolume),
    poolLiquidity: BigInt(n.poolLiquidity)
  };
}
function wb(n) {
  return { query: { Index: n.index, MarketId: String(n.marketId), Limit: n.limit } };
}
function Ab(n) {
  return {
    asks: n.asks.map((a) => ({ price: Number(a[0]), volume: Number(a[1]) })),
    bids: n.bids.map((a) => ({ price: Number(a[0]), volume: Number(a[1]) }))
  };
}
function Nb(n) {
  return [n.orderId !== void 0, n.clientOrderId !== void 0, n.txHash !== void 0].filter(Boolean).length === 1;
}
function Ob(n) {
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
function Tb(n) {
  return { query: { OrderId: n.orderId, ClientOrderId: n.clientOrderId, TxHash: n.txHash } };
}
function cp(n) {
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
function Mb(n) {
  return { query: { OrderId: n } };
}
function Bb(n) {
  return {
    tradeId: n.tid,
    filledPrice: Number(n.fp),
    filledVolume: Number(n.fv),
    filledAmount: Number(n.fa),
    tradeSide: n.ts,
    timestamp: Number(n.t)
  };
}
var fp = {};
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
***************************************************************************** */ var op;
function Ub() {
  if (op) return fp;
  op = 1;
  var n;
  return (
    (function (a) {
      (function (u) {
        var s =
            typeof globalThis == 'object'
              ? globalThis
              : typeof No == 'object'
                ? No
                : typeof globalThis == 'object'
                  ? globalThis
                  : typeof this == 'object'
                    ? this
                    : S(),
          c = m(a);
        typeof s.Reflect < 'u' && (c = m(s.Reflect, c)), u(c, s), typeof s.Reflect > 'u' && (s.Reflect = a);
        function m(x, B) {
          return function (v, _) {
            Object.defineProperty(x, v, { configurable: !0, writable: !0, value: _ }), B && B(v, _);
          };
        }
        function o() {
          try {
            return Function('return this;')();
          } catch {}
        }
        function h() {
          try {
            return (0, eval)('(function() { return this; })()');
          } catch {}
        }
        function S() {
          return o() || h();
        }
      })(function (u, s) {
        var c = Object.prototype.hasOwnProperty,
          m = typeof Symbol == 'function',
          o = m && typeof Symbol.toPrimitive < 'u' ? Symbol.toPrimitive : '@@toPrimitive',
          h = m && typeof Symbol.iterator < 'u' ? Symbol.iterator : '@@iterator',
          S = typeof Object.create == 'function',
          x = { __proto__: [] } instanceof Array,
          B = !S && !x,
          v = {
            create: S
              ? function () {
                  return te(Object.create(null));
                }
              : x
                ? function () {
                    return te({ __proto__: null });
                  }
                : function () {
                    return te({});
                  },
            has: B
              ? function (j, k) {
                  return c.call(j, k);
                }
              : function (j, k) {
                  return k in j;
                },
            get: B
              ? function (j, k) {
                  return c.call(j, k) ? j[k] : void 0;
                }
              : function (j, k) {
                  return j[k];
                }
          },
          _ = Object.getPrototypeOf(Function),
          O = typeof Map == 'function' && typeof Map.prototype.entries == 'function' ? Map : d(),
          W = typeof Set == 'function' && typeof Set.prototype.entries == 'function' ? Set : p(),
          ce = typeof WeakMap == 'function' ? WeakMap : H(),
          de = m ? Symbol.for('@reflect-metadata:registry') : void 0,
          ve = Me(),
          Q = qe(ve);
        function je(j, k, se, Ee) {
          if (me(se)) {
            if (!Z(j)) throw new TypeError();
            if (!P(k)) throw new TypeError();
            return Y(j, k);
          } else {
            if (!Z(j)) throw new TypeError();
            if (!Ne(k)) throw new TypeError();
            if (!Ne(Ee) && !me(Ee) && !A(Ee)) throw new TypeError();
            return A(Ee) && (Ee = void 0), (se = R(se)), X(j, k, se, Ee);
          }
        }
        u('decorate', je);
        function We(j, k) {
          function se(Ee, Be) {
            if (!Ne(Ee)) throw new TypeError();
            if (!me(Be) && !ne(Be)) throw new TypeError();
            ue(j, k, Ee, Be);
          }
          return se;
        }
        u('metadata', We);
        function _e(j, k, se, Ee) {
          if (!Ne(se)) throw new TypeError();
          return me(Ee) || (Ee = R(Ee)), ue(j, k, se, Ee);
        }
        u('defineMetadata', _e);
        function we(j, k, se) {
          if (!Ne(k)) throw new TypeError();
          return me(se) || (se = R(se)), C(j, k, se);
        }
        u('hasMetadata', we);
        function De(j, k, se) {
          if (!Ne(k)) throw new TypeError();
          return me(se) || (se = R(se)), T(j, k, se);
        }
        u('hasOwnMetadata', De);
        function y(j, k, se) {
          if (!Ne(k)) throw new TypeError();
          return me(se) || (se = R(se)), G(j, k, se);
        }
        u('getMetadata', y);
        function E(j, k, se) {
          if (!Ne(k)) throw new TypeError();
          return me(se) || (se = R(se)), I(j, k, se);
        }
        u('getOwnMetadata', E);
        function w(j, k) {
          if (!Ne(j)) throw new TypeError();
          return me(k) || (k = R(k)), D(j, k);
        }
        u('getMetadataKeys', w);
        function F(j, k) {
          if (!Ne(j)) throw new TypeError();
          return me(k) || (k = R(k)), ee(j, k);
        }
        u('getOwnMetadataKeys', F);
        function V(j, k, se) {
          if (!Ne(k)) throw new TypeError();
          if ((me(se) || (se = R(se)), !Ne(k))) throw new TypeError();
          me(se) || (se = R(se));
          var Ee = b(k, se, !1);
          return me(Ee) ? !1 : Ee.OrdinaryDeleteMetadata(j, k, se);
        }
        u('deleteMetadata', V);
        function Y(j, k) {
          for (var se = j.length - 1; se >= 0; --se) {
            var Ee = j[se],
              Be = Ee(k);
            if (!me(Be) && !A(Be)) {
              if (!P(Be)) throw new TypeError();
              k = Be;
            }
          }
          return k;
        }
        function X(j, k, se, Ee) {
          for (var Be = j.length - 1; Be >= 0; --Be) {
            var Ce = j[Be],
              Pe = Ce(k, se, Ee);
            if (!me(Pe) && !A(Pe)) {
              if (!Ne(Pe)) throw new TypeError();
              Ee = Pe;
            }
          }
          return Ee;
        }
        function C(j, k, se) {
          var Ee = T(j, k, se);
          if (Ee) return !0;
          var Be = pe(k);
          return A(Be) ? !1 : C(j, Be, se);
        }
        function T(j, k, se) {
          var Ee = b(k, se, !1);
          return me(Ee) ? !1 : Re(Ee.OrdinaryHasOwnMetadata(j, k, se));
        }
        function G(j, k, se) {
          var Ee = T(j, k, se);
          if (Ee) return I(j, k, se);
          var Be = pe(k);
          if (!A(Be)) return G(j, Be, se);
        }
        function I(j, k, se) {
          var Ee = b(k, se, !1);
          if (!me(Ee)) return Ee.OrdinaryGetOwnMetadata(j, k, se);
        }
        function ue(j, k, se, Ee) {
          var Be = b(se, Ee, !0);
          Be.OrdinaryDefineOwnMetadata(j, k, se, Ee);
        }
        function D(j, k) {
          var se = ee(j, k),
            Ee = pe(j);
          if (Ee === null) return se;
          var Be = D(Ee, k);
          if (Be.length <= 0) return se;
          if (se.length <= 0) return Be;
          for (var Ce = new W(), Pe = [], $e = 0, Ie = se; $e < Ie.length; $e++) {
            var Le = Ie[$e],
              Ge = Ce.has(Le);
            Ge || (Ce.add(Le), Pe.push(Le));
          }
          for (var Fe = 0, nt = Be; Fe < nt.length; Fe++) {
            var Le = nt[Fe],
              Ge = Ce.has(Le);
            Ge || (Ce.add(Le), Pe.push(Le));
          }
          return Pe;
        }
        function ee(j, k) {
          var se = b(j, k, !1);
          return se ? se.OrdinaryOwnMetadataKeys(j, k) : [];
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
        function me(j) {
          return j === void 0;
        }
        function A(j) {
          return j === null;
        }
        function Ue(j) {
          return typeof j == 'symbol';
        }
        function Ne(j) {
          return typeof j == 'object' ? j !== null : typeof j == 'function';
        }
        function Ke(j, k) {
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
            Ee = re(j, o);
          if (Ee !== void 0) {
            var Be = Ee.call(j, se);
            if (Ne(Be)) throw new TypeError();
            return Be;
          }
          return Oe(j);
        }
        function Oe(j, k) {
          var se, Ee, Be;
          {
            var Ce = j.toString;
            if (ie(Ce)) {
              var Ee = Ce.call(j);
              if (!Ne(Ee)) return Ee;
            }
            var se = j.valueOf;
            if (ie(se)) {
              var Ee = se.call(j);
              if (!Ne(Ee)) return Ee;
            }
          }
          throw new TypeError();
        }
        function Re(j) {
          return !!j;
        }
        function M(j) {
          return '' + j;
        }
        function R(j) {
          var k = Ke(j);
          return Ue(k) ? k : M(k);
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
        function P(j) {
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
        function fe(j, k) {
          return j === k || (j !== j && k !== k);
        }
        function re(j, k) {
          var se = j[k];
          if (se != null) {
            if (!ie(se)) throw new TypeError();
            return se;
          }
        }
        function N(j) {
          var k = re(j, h);
          if (!ie(k)) throw new TypeError();
          var se = k.call(j);
          if (!Ne(se)) throw new TypeError();
          return se;
        }
        function z(j) {
          return j.value;
        }
        function L(j) {
          var k = j.next();
          return k.done ? !1 : k;
        }
        function J(j) {
          var k = j.return;
          k && k.call(j);
        }
        function pe(j) {
          var k = Object.getPrototypeOf(j);
          if (typeof j != 'function' || j === _ || k !== _) return k;
          var se = j.prototype,
            Ee = se && Object.getPrototypeOf(se);
          if (Ee == null || Ee === Object.prototype) return k;
          var Be = Ee.constructor;
          return typeof Be != 'function' || Be === j ? k : Be;
        }
        function ge() {
          var j;
          !me(de) &&
            typeof s.Reflect < 'u' &&
            !(de in s.Reflect) &&
            typeof s.Reflect.defineMetadata == 'function' &&
            (j = tt(s.Reflect));
          var k,
            se,
            Ee,
            Be = new ce(),
            Ce = { registerProvider: Pe, getProvider: Ie, setProvider: Ge };
          return Ce;
          function Pe(Fe) {
            if (!Object.isExtensible(Ce)) throw new Error('Cannot add provider to a frozen registry.');
            switch (!0) {
              case j === Fe:
                break;
              case me(k):
                k = Fe;
                break;
              case k === Fe:
                break;
              case me(se):
                se = Fe;
                break;
              case se === Fe:
                break;
              default:
                Ee === void 0 && (Ee = new W()), Ee.add(Fe);
                break;
            }
          }
          function $e(Fe, nt) {
            if (!me(k)) {
              if (k.isProviderFor(Fe, nt)) return k;
              if (!me(se)) {
                if (se.isProviderFor(Fe, nt)) return k;
                if (!me(Ee))
                  for (var st = N(Ee); ; ) {
                    var Rt = L(st);
                    if (!Rt) return;
                    var fr = z(Rt);
                    if (fr.isProviderFor(Fe, nt)) return J(st), fr;
                  }
              }
            }
            if (!me(j) && j.isProviderFor(Fe, nt)) return j;
          }
          function Ie(Fe, nt) {
            var st = Be.get(Fe),
              Rt;
            return (
              me(st) || (Rt = st.get(nt)),
              me(Rt) && ((Rt = $e(Fe, nt)), me(Rt) || (me(st) && ((st = new O()), Be.set(Fe, st)), st.set(nt, Rt))),
              Rt
            );
          }
          function Le(Fe) {
            if (me(Fe)) throw new TypeError();
            return k === Fe || se === Fe || (!me(Ee) && Ee.has(Fe));
          }
          function Ge(Fe, nt, st) {
            if (!Le(st)) throw new Error('Metadata provider not registered.');
            var Rt = Ie(Fe, nt);
            if (Rt !== st) {
              if (!me(Rt)) return !1;
              var fr = Be.get(Fe);
              me(fr) && ((fr = new O()), Be.set(Fe, fr)), fr.set(nt, st);
            }
            return !0;
          }
        }
        function Me() {
          var j;
          return (
            !me(de) && Ne(s.Reflect) && Object.isExtensible(s.Reflect) && (j = s.Reflect[de]),
            me(j) && (j = ge()),
            !me(de) &&
              Ne(s.Reflect) &&
              Object.isExtensible(s.Reflect) &&
              Object.defineProperty(s.Reflect, de, { enumerable: !1, configurable: !1, writable: !1, value: j }),
            j
          );
        }
        function qe(j) {
          var k = new ce(),
            se = {
              isProviderFor: function (Le, Ge) {
                var Fe = k.get(Le);
                return me(Fe) ? !1 : Fe.has(Ge);
              },
              OrdinaryDefineOwnMetadata: Pe,
              OrdinaryHasOwnMetadata: Be,
              OrdinaryGetOwnMetadata: Ce,
              OrdinaryOwnMetadataKeys: $e,
              OrdinaryDeleteMetadata: Ie
            };
          return ve.registerProvider(se), se;
          function Ee(Le, Ge, Fe) {
            var nt = k.get(Le),
              st = !1;
            if (me(nt)) {
              if (!Fe) return;
              (nt = new O()), k.set(Le, nt), (st = !0);
            }
            var Rt = nt.get(Ge);
            if (me(Rt)) {
              if (!Fe) return;
              if (((Rt = new O()), nt.set(Ge, Rt), !j.setProvider(Le, Ge, se)))
                throw (nt.delete(Ge), st && k.delete(Le), new Error('Wrong provider for target.'));
            }
            return Rt;
          }
          function Be(Le, Ge, Fe) {
            var nt = Ee(Ge, Fe, !1);
            return me(nt) ? !1 : Re(nt.has(Le));
          }
          function Ce(Le, Ge, Fe) {
            var nt = Ee(Ge, Fe, !1);
            if (!me(nt)) return nt.get(Le);
          }
          function Pe(Le, Ge, Fe, nt) {
            var st = Ee(Fe, nt, !0);
            st.set(Le, Ge);
          }
          function $e(Le, Ge) {
            var Fe = [],
              nt = Ee(Le, Ge, !1);
            if (me(nt)) return Fe;
            for (var st = nt.keys(), Rt = N(st), fr = 0; ; ) {
              var Zi = L(Rt);
              if (!Zi) return (Fe.length = fr), Fe;
              var Qi = z(Zi);
              try {
                Fe[fr] = Qi;
              } catch (Ot) {
                try {
                  J(Rt);
                } finally {
                  throw Ot;
                }
              }
              fr++;
            }
          }
          function Ie(Le, Ge, Fe) {
            var nt = Ee(Ge, Fe, !1);
            if (me(nt) || !nt.delete(Le)) return !1;
            if (nt.size === 0) {
              var st = k.get(Ge);
              me(st) || (st.delete(Fe), st.size === 0 && k.delete(st));
            }
            return !0;
          }
        }
        function tt(j) {
          var k = j.defineMetadata,
            se = j.hasOwnMetadata,
            Ee = j.getOwnMetadata,
            Be = j.getOwnMetadataKeys,
            Ce = j.deleteMetadata,
            Pe = new ce(),
            $e = {
              isProviderFor: function (Ie, Le) {
                var Ge = Pe.get(Ie);
                return !me(Ge) && Ge.has(Le)
                  ? !0
                  : Be(Ie, Le).length
                    ? (me(Ge) && ((Ge = new W()), Pe.set(Ie, Ge)), Ge.add(Le), !0)
                    : !1;
              },
              OrdinaryDefineOwnMetadata: k,
              OrdinaryHasOwnMetadata: se,
              OrdinaryGetOwnMetadata: Ee,
              OrdinaryOwnMetadataKeys: Be,
              OrdinaryDeleteMetadata: Ce
            };
          return $e;
        }
        function b(j, k, se) {
          var Ee = ve.getProvider(j, k);
          if (!me(Ee)) return Ee;
          if (se) {
            if (ve.setProvider(j, k, Q)) return Q;
            throw new Error('Illegal state.');
          }
        }
        function d() {
          var j = {},
            k = [],
            se = (function () {
              function $e(Ie, Le, Ge) {
                (this._index = 0), (this._keys = Ie), (this._values = Le), (this._selector = Ge);
              }
              return (
                ($e.prototype['@@iterator'] = function () {
                  return this;
                }),
                ($e.prototype[h] = function () {
                  return this;
                }),
                ($e.prototype.next = function () {
                  var Ie = this._index;
                  if (Ie >= 0 && Ie < this._keys.length) {
                    var Le = this._selector(this._keys[Ie], this._values[Ie]);
                    return (
                      Ie + 1 >= this._keys.length
                        ? ((this._index = -1), (this._keys = k), (this._values = k))
                        : this._index++,
                      { value: Le, done: !1 }
                    );
                  }
                  return { value: void 0, done: !0 };
                }),
                ($e.prototype.throw = function (Ie) {
                  throw (this._index >= 0 && ((this._index = -1), (this._keys = k), (this._values = k)), Ie);
                }),
                ($e.prototype.return = function (Ie) {
                  return (
                    this._index >= 0 && ((this._index = -1), (this._keys = k), (this._values = k)),
                    { value: Ie, done: !0 }
                  );
                }),
                $e
              );
            })(),
            Ee = (function () {
              function $e() {
                (this._keys = []), (this._values = []), (this._cacheKey = j), (this._cacheIndex = -2);
              }
              return (
                Object.defineProperty($e.prototype, 'size', {
                  get: function () {
                    return this._keys.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                ($e.prototype.has = function (Ie) {
                  return this._find(Ie, !1) >= 0;
                }),
                ($e.prototype.get = function (Ie) {
                  var Le = this._find(Ie, !1);
                  return Le >= 0 ? this._values[Le] : void 0;
                }),
                ($e.prototype.set = function (Ie, Le) {
                  var Ge = this._find(Ie, !0);
                  return (this._values[Ge] = Le), this;
                }),
                ($e.prototype.delete = function (Ie) {
                  var Le = this._find(Ie, !1);
                  if (Le >= 0) {
                    for (var Ge = this._keys.length, Fe = Le + 1; Fe < Ge; Fe++)
                      (this._keys[Fe - 1] = this._keys[Fe]), (this._values[Fe - 1] = this._values[Fe]);
                    return (
                      this._keys.length--,
                      this._values.length--,
                      fe(Ie, this._cacheKey) && ((this._cacheKey = j), (this._cacheIndex = -2)),
                      !0
                    );
                  }
                  return !1;
                }),
                ($e.prototype.clear = function () {
                  (this._keys.length = 0), (this._values.length = 0), (this._cacheKey = j), (this._cacheIndex = -2);
                }),
                ($e.prototype.keys = function () {
                  return new se(this._keys, this._values, Be);
                }),
                ($e.prototype.values = function () {
                  return new se(this._keys, this._values, Ce);
                }),
                ($e.prototype.entries = function () {
                  return new se(this._keys, this._values, Pe);
                }),
                ($e.prototype['@@iterator'] = function () {
                  return this.entries();
                }),
                ($e.prototype[h] = function () {
                  return this.entries();
                }),
                ($e.prototype._find = function (Ie, Le) {
                  if (!fe(this._cacheKey, Ie)) {
                    this._cacheIndex = -1;
                    for (var Ge = 0; Ge < this._keys.length; Ge++)
                      if (fe(this._keys[Ge], Ie)) {
                        this._cacheIndex = Ge;
                        break;
                      }
                  }
                  return (
                    this._cacheIndex < 0 &&
                      Le &&
                      ((this._cacheIndex = this._keys.length), this._keys.push(Ie), this._values.push(void 0)),
                    this._cacheIndex
                  );
                }),
                $e
              );
            })();
          return Ee;
          function Be($e, Ie) {
            return $e;
          }
          function Ce($e, Ie) {
            return Ie;
          }
          function Pe($e, Ie) {
            return [$e, Ie];
          }
        }
        function p() {
          var j = (function () {
            function k() {
              this._map = new O();
            }
            return (
              Object.defineProperty(k.prototype, 'size', {
                get: function () {
                  return this._map.size;
                },
                enumerable: !0,
                configurable: !0
              }),
              (k.prototype.has = function (se) {
                return this._map.has(se);
              }),
              (k.prototype.add = function (se) {
                return this._map.set(se, se), this;
              }),
              (k.prototype.delete = function (se) {
                return this._map.delete(se);
              }),
              (k.prototype.clear = function () {
                this._map.clear();
              }),
              (k.prototype.keys = function () {
                return this._map.keys();
              }),
              (k.prototype.values = function () {
                return this._map.keys();
              }),
              (k.prototype.entries = function () {
                return this._map.entries();
              }),
              (k.prototype['@@iterator'] = function () {
                return this.keys();
              }),
              (k.prototype[h] = function () {
                return this.keys();
              }),
              k
            );
          })();
          return j;
        }
        function H() {
          var j = 16,
            k = v.create(),
            se = Ee();
          return (function () {
            function Ie() {
              this._key = Ee();
            }
            return (
              (Ie.prototype.has = function (Le) {
                var Ge = Be(Le, !1);
                return Ge !== void 0 ? v.has(Ge, this._key) : !1;
              }),
              (Ie.prototype.get = function (Le) {
                var Ge = Be(Le, !1);
                return Ge !== void 0 ? v.get(Ge, this._key) : void 0;
              }),
              (Ie.prototype.set = function (Le, Ge) {
                var Fe = Be(Le, !0);
                return (Fe[this._key] = Ge), this;
              }),
              (Ie.prototype.delete = function (Le) {
                var Ge = Be(Le, !1);
                return Ge !== void 0 ? delete Ge[this._key] : !1;
              }),
              (Ie.prototype.clear = function () {
                this._key = Ee();
              }),
              Ie
            );
          })();
          function Ee() {
            var Ie;
            do Ie = '@@WeakMap@@' + $e();
            while (v.has(k, Ie));
            return (k[Ie] = !0), Ie;
          }
          function Be(Ie, Le) {
            if (!c.call(Ie, se)) {
              if (!Le) return;
              Object.defineProperty(Ie, se, { value: v.create() });
            }
            return Ie[se];
          }
          function Ce(Ie, Le) {
            for (var Ge = 0; Ge < Le; ++Ge) Ie[Ge] = (Math.random() * 255) | 0;
            return Ie;
          }
          function Pe(Ie) {
            if (typeof Uint8Array == 'function') {
              var Le = new Uint8Array(Ie);
              return (
                typeof crypto < 'u'
                  ? crypto.getRandomValues(Le)
                  : typeof msCrypto < 'u'
                    ? msCrypto.getRandomValues(Le)
                    : Ce(Le, Ie),
                Le
              );
            }
            return Ce(new Array(Ie), Ie);
          }
          function $e() {
            var Ie = Pe(j);
            (Ie[6] = (Ie[6] & 79) | 64), (Ie[8] = (Ie[8] & 191) | 128);
            for (var Le = '', Ge = 0; Ge < j; ++Ge) {
              var Fe = Ie[Ge];
              (Ge === 4 || Ge === 6 || Ge === 8) && (Le += '-'),
                Fe < 16 && (Le += '0'),
                (Le += Fe.toString(16).toLowerCase());
            }
            return Le;
          }
        }
        function te(j) {
          return (j.__ = void 0), delete j.__, j;
        }
      });
    })(n || (n = {})),
    fp
  );
}
Ub();
const ny = Symbol('format'),
  iy = Symbol('cbor_biguint');
function lr(n) {
  return Reflect.metadata(ny, n);
}
function Vu() {
  return Reflect.metadata(iy, !0);
}
class hp {
  static getCborIndex(a, u) {
    return Reflect.getMetadata(ny, a, u);
  }
  static isCborBigUint(a, u) {
    return Reflect.getMetadata(iy, a, u);
  }
}
class Yu {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    if (!a) throw new Error('Invalid OrderId');
    const u = a.toLowerCase().startsWith('0x') ? a.slice(2) : a;
    if (!/^[0-9a-f]+$/i.test(u)) throw new Error('Invalid OrderId: not a valid hex string');
    return new Yu(new In(`0x${u}`));
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value.isEqualTo(a.value) : !1;
  }
}
class Rb {
  static encode(a) {
    const u = this.createCborArray(a);
    return Fi.Buffer.from(Vp.encode(u));
  }
  static createCborArray(a) {
    if (!a) return [];
    const u = Object.getOwnPropertyNames(a),
      s = [];
    for (const c of u) {
      const m = a[c],
        o = hp.getCborIndex(a, c);
      o !== void 0 && (s[o] = this.processValue(m, a, c));
    }
    return s;
  }
  static processValue(a, u, s) {
    return a === void 0
      ? null
      : a instanceof In
        ? a
        : a instanceof Ut || a instanceof ze || a instanceof Yu
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
    return hp.isCborBigUint(u, s) || typeof a == 'bigint' || typeof a == 'number'
      ? a == null
        ? null
        : In(a.toString())
      : a;
  }
}
class cs {
  static createTransaction(a, u, s, c, m = Ss.V0) {
    const o = Rb.encode(c);
    return new Rv(a, u, s, o, m);
  }
  static sign(a, u) {
    return a.sign(u);
  }
}
function Db(n) {
  return { query: { HIN: String(n) } };
}
function jb(n) {
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
    o;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') m = Reflect.decorate(n, a, u, s);
  else for (var h = n.length - 1; h >= 0; h--) (o = n[h]) && (m = (c < 3 ? o(m) : c > 3 ? o(a, u, m) : o(a, u)) || m);
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
const Cb = 32,
  kb = 'https://testnetopenapi.hibit.app',
  qb = 'https://openapi.hibit.app';
class $u {
  constructor(a) {
    Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'price', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'volume', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.assign(this, a);
  }
}
sr([lr(0), Vu(), cr('design:type', Number)], $u.prototype, 'orderSide', void 0);
sr([lr(1), cr('design:type', BigInt)], $u.prototype, 'price', void 0);
sr([lr(2), cr('design:type', BigInt)], $u.prototype, 'volume', void 0);
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
sr([lr(1), Vu(), cr('design:type', Number)], $i.prototype, 'exactTokensType', void 0);
sr([lr(2), Vu(), cr('design:type', Number)], $i.prototype, 'orderSide', void 0);
sr([lr(3), cr('design:type', BigInt)], $i.prototype, 'minOut', void 0);
sr([lr(4), cr('design:type', BigInt)], $i.prototype, 'maxIn', void 0);
class Xu {
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
sr([lr(0), Vu(), cr('design:type', Number)], Xu.prototype, 'orderCategory', void 0);
sr([lr(1), cr('design:type', BigInt)], Xu.prototype, 'marketId', void 0);
sr([lr(2), cr('design:type', $u)], Xu.prototype, 'limitOrderDetails', void 0);
sr([lr(3), cr('design:type', $i)], Xu.prototype, 'swapV2OrderDetails', void 0);
class Zu {
  constructor(a) {
    Object.defineProperty(this, 'marketId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'isCancelAll', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.isCancelAll = !1),
      Object.assign(this, a);
  }
}
sr([lr(0), cr('design:type', BigInt)], Zu.prototype, 'marketId', void 0);
sr([lr(1), cr('design:type', Yu)], Zu.prototype, 'orderId', void 0);
sr([lr(2), Vu(), cr('design:type', Number)], Zu.prototype, 'orderSide', void 0);
sr([lr(3), cr('design:type', Boolean)], Zu.prototype, 'isCancelAll', void 0);
function zb(n, a) {
  let u, s, c;
  return (
    n.exactTokensType === yi.Source
      ? ((u = n.orderSide === wt.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals),
        (s = n.orderSide === wt.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals),
        (c = n.orderSide === wt.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals))
      : ((u = n.orderSide === wt.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals),
        (s = n.orderSide === wt.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals),
        (c = n.orderSide === wt.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals)),
    new $i({
      exactTokens: Cu(n.exactTokens, u),
      exactTokensType: n.exactTokensType,
      orderSide: n.orderSide,
      minOut: n.minOut ? Cu(n.minOut, s) : void 0,
      maxIn: n.maxIn ? Cu(n.maxIn, c) : void 0
    })
  );
}
function Ib(n, a) {
  return new $u({ orderSide: n.orderSide, price: Cu(n.price, Cb), volume: Cu(n.volume, a.baseAssetDecimals) });
}
function Lb(n, a) {
  return new Xu({
    orderCategory: n.orderCategory,
    marketId: n.marketId,
    limitOrderDetails: n.limitOrderDetails ? Ib(n.limitOrderDetails, a) : void 0,
    swapV2OrderDetails: n.swapV2OrderDetails ? zb(n.swapV2OrderDetails, a) : void 0
  });
}
function Hb(n) {
  return new Zu({
    marketId: n.marketId,
    orderId: n.orderId ? Yu.fromString(n.orderId) : void 0,
    orderSide: n.orderSide,
    isCancelAll: n.isCancelAll
  });
}
class Gb {
  constructor() {
    Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  setOptions(a) {
    (this.options = a), $t.setConfig({ baseUrl: a.network === Ra.Mainnet ? qb : kb });
  }
  async getTimestamp() {
    var s, c;
    const a = 'getTimestamp',
      u = await Xv();
    return (
      this.ensureSuccess(a, u.data),
      ((c = (s = u.data) == null ? void 0 : s.data) != null && c.timestamp) || Br.throwInvalidResponseError(a),
      u.data.data.timestamp
    );
  }
  async getChains() {
    const a = 'getChains',
      u = await Kv();
    return this.ensureSuccess(a, u.data), u.data.data.map((s) => tv(s));
  }
  async getAssets(a) {
    const u = 'getAssets',
      s = await Zv(hb(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => ap(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getAsset(a) {
    const u = 'getAsset',
      s = await Qv(db(a));
    return this.ensureSuccess(u, s.data), ap(s.data.data);
  }
  async getMarkets(a) {
    const u = 'getMarkets',
      s = await rb(mb(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => up(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getMarket(a) {
    const u = 'getMarket',
      s = await nb(pb(a));
    return this.ensureSuccess(u, s.data), up(s.data.data);
  }
  async getMarketsTicker(a) {
    const u = 'getMarketsTicker',
      s = await ip(yb(a));
    return this.ensureSuccess(u, s.data), s.data.data.items.map((c) => sp(c));
  }
  async getMarkets24HrTicker(a) {
    const u = 'getMarkets24HrTicker',
      s = await ip(lp(a || {}));
    return this.ensureSuccess(u, s.data), s.data.data.items.map((c) => sp(c));
  }
  async getMarkets24HrTickerExtended(a) {
    const u = 'getMarkets24HrTickerExtended',
      s = await Pv(lp(a || {}));
    return this.ensureSuccess(u, s.data), s.data.data.items.map((c) => gb(c));
  }
  async getMarketsSwapInfo(a) {
    const u = 'getMarketsSwapInfo',
      s = await Wv(Eb(a));
    return this.ensureSuccess(u, s.data), s.data.data.items.map((c) => _b(c));
  }
  async getMarketDepth(a) {
    const u = 'getMarketDepth',
      s = await Jv(wb(a));
    return this.ensureSuccess(u, s.data), Ab(s.data.data);
  }
  async getMarketKline(a) {
    const u = 'getMarketKline',
      s = await eb(vb(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => bb(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getMarketTrade(a) {
    const u = 'getMarketTrade',
      s = await tb(Sb(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => xb(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getOrders(a) {
    const u = 'getOrders';
    this.ensureHIN(u);
    const s = await ab(Ob(a));
    return (
      this.ensureSuccess(u, s.data), { items: s.data.data.items.map((c) => cp(c)), totalCount: s.data.data.totalCount }
    );
  }
  async getOrder(a) {
    const u = 'getOrder';
    Nb(a) ||
      Br.throwBadRequestError(
        u,
        400,
        'Must have exactly one of the following properties set: `OrderId`, `ClientOrderId`, or `TxHash`'
      );
    const s = await ub(Tb(a));
    return this.ensureSuccess(u, s.data), cp(s.data.data);
  }
  async getOrderTrades(a) {
    const u = 'getOrderTrades',
      s = await ib(Mb(a));
    return this.ensureSuccess(u, s.data), s.data.data.map((c) => Bb(c));
  }
  async submitSpotOrder(a, u, s) {
    const c = 'submitSpotOrder';
    this.ensurePrivateKey(c);
    const m = s ? BigInt(s) : await this.getNonce(this.options.hin),
      o = Lb(a, u),
      h = cs.createTransaction(bs.CreateSpotOrder, this.options.hin, m | 0n, o),
      S = cs.sign(h, this.options.proxyKey),
      x = await lb(tp(S));
    this.ensureSuccess(c, x.data);
  }
  async cancelSpotOrder(a, u) {
    const s = 'cancelSpotOrder';
    this.ensurePrivateKey(s), (a.isCancelAll === void 0 || a.isCancelAll === null) && (a.isCancelAll = !1);
    const c = u ? BigInt(u) : await this.getNonce(this.options.hin),
      m = Hb(a),
      o = cs.createTransaction(bs.CancelSpotOrder, this.options.hin, c | 0n, m),
      h = cs.sign(o, this.options.proxyKey),
      S = await sb(tp(h));
    this.ensureSuccess(s, S.data);
  }
  async getWalletBalances(a) {
    const u = 'getWalletBalances',
      s = await fb(jb(a));
    this.ensureSuccess(u, s.data);
    const c = new Map();
    for (const [m, o] of Object.entries(s.data.data)) c.set(m, In(o));
    return c;
  }
  async getNonce(a) {
    const u = 'getNonce',
      s = await cb(Db(a));
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
const Gt = ({ title: n, form: a, loading: u, result: s, error: c }) =>
  q.jsxs('section', {
    children: [
      q.jsx('h2', { className: 'text-lg font-bold', children: n }),
      q.jsxs('div', {
        className: 'flex mt-2 border rounded-lg overflow-hidden',
        children: [
          q.jsx('div', { className: `${typeof s < 'u' ? 'max-w-1/2 border-r' : 'flex-1'} p-4`, children: a }),
          typeof s < 'u' &&
            q.jsxs('div', {
              className: 'p-4 flex flex-col gap-2 overflow-hidden',
              children: [
                q.jsx('p', { className: 'text-sm text-gray-600', children: 'Result' }),
                q.jsx('pre', {
                  className: 'max-w-full max-h-[500px] overflow-auto',
                  children: u
                    ? 'loading...'
                    : JSON.stringify(
                        s,
                        (m, o) => {
                          if (typeof o == 'bigint') return String(o);
                          if (o instanceof Map) {
                            const h = {};
                            return (
                              o.forEach((S, x) => {
                                h[x] = String(S);
                              }),
                              h
                            );
                          }
                          return o;
                        },
                        2
                      )
                }),
                q.jsx('pre', { className: 'text-red-500 whitespace-pre-wrap', children: c })
              ]
            })
        ]
      })
    ]
  });
function Fb({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    h = async () => {
      u(!0), c(null), o('');
      try {
        c(await n.getTimestamp());
      } catch (S) {
        o(S.message ?? JSON.stringify(S));
      } finally {
        u(!1);
      }
    };
  return q.jsx(Gt, {
    title: 'GetTimestamp',
    form: q.jsx('div', {
      children: q.jsx('button', { className: 'btn', onClick: h, disabled: a, children: a ? 'Loading...' : 'Submit' })
    }),
    loading: a,
    result: s,
    error: m
  });
}
function Vb({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    h = async () => {
      u(!0), c(null), o('');
      try {
        c(await n.getChains());
      } catch (S) {
        o(S.message ?? JSON.stringify(S));
      } finally {
        u(!1);
      }
    };
  return q.jsx(Gt, {
    title: 'GetChains',
    form: q.jsx('div', {
      children: q.jsx('button', { className: 'btn', onClick: h, disabled: a, children: a ? 'Loading...' : 'Submit' })
    }),
    loading: a,
    result: s,
    error: m
  });
}
var Qu = (n) => n.type === 'checkbox',
  Li = (n) => n instanceof Date,
  dr = (n) => n == null;
const ay = (n) => typeof n == 'object';
var Ht = (n) => !dr(n) && !Array.isArray(n) && ay(n) && !Li(n),
  uy = (n) => (Ht(n) && n.target ? (Qu(n.target) ? n.target.checked : n.target.value) : n),
  Yb = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  ly = (n, a) => n.has(Yb(a)),
  $b = (n) => {
    const a = n.constructor && n.constructor.prototype;
    return Ht(a) && a.hasOwnProperty('isPrototypeOf');
  },
  Io = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Sr(n) {
  let a;
  const u = Array.isArray(n),
    s = typeof FileList < 'u' ? n instanceof FileList : !1;
  if (n instanceof Date) a = new Date(n);
  else if (n instanceof Set) a = new Set(n);
  else if (!(Io && (n instanceof Blob || s)) && (u || Ht(n)))
    if (((a = u ? [] : {}), !u && !$b(n))) a = n;
    else for (const c in n) n.hasOwnProperty(c) && (a[c] = Sr(n[c]));
  else return n;
  return a;
}
var zs = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  Lt = (n) => n === void 0,
  ke = (n, a, u) => {
    if (!a || !Ht(n)) return u;
    const s = zs(a.split(/[,[\].]+?/)).reduce((c, m) => (dr(c) ? c : c[m]), n);
    return Lt(s) || s === n ? (Lt(n[a]) ? u : n[a]) : s;
  },
  Jr = (n) => typeof n == 'boolean',
  Lo = (n) => /^\w*$/.test(n),
  sy = (n) => zs(n.replace(/["|']|\]/g, '').split(/\.|\[/)),
  St = (n, a, u) => {
    let s = -1;
    const c = Lo(a) ? [a] : sy(a),
      m = c.length,
      o = m - 1;
    for (; ++s < m; ) {
      const h = c[s];
      let S = u;
      if (s !== o) {
        const x = n[h];
        S = Ht(x) || Array.isArray(x) ? x : isNaN(+c[s + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      (n[h] = S), (n = n[h]);
    }
    return n;
  };
const As = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  nn = { onBlur: 'onBlur', onChange: 'onChange', onSubmit: 'onSubmit', onTouched: 'onTouched', all: 'all' },
  kn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
  },
  Xb = xt.createContext(null),
  Ho = () => xt.useContext(Xb);
var cy = (n, a, u, s = !0) => {
    const c = { defaultValues: a._defaultValues };
    for (const m in n)
      Object.defineProperty(c, m, {
        get: () => {
          const o = m;
          return a._proxyFormState[o] !== nn.all && (a._proxyFormState[o] = !s || nn.all), u && (u[o] = !0), n[o];
        }
      });
    return c;
  },
  xr = (n) => Ht(n) && !Object.keys(n).length,
  fy = (n, a, u, s) => {
    u(n);
    const { name: c, ...m } = n;
    return (
      xr(m) || Object.keys(m).length >= Object.keys(a).length || Object.keys(m).find((o) => a[o] === (!s || nn.all))
    );
  },
  ku = (n) => (Array.isArray(n) ? n : [n]),
  oy = (n, a, u) => !n || !a || n === a || ku(n).some((s) => s && (u ? s === a : s.startsWith(a) || a.startsWith(s)));
function Go(n) {
  const a = xt.useRef(n);
  (a.current = n),
    xt.useEffect(() => {
      const u = !n.disabled && a.current.subject && a.current.subject.subscribe({ next: a.current.next });
      return () => {
        u && u.unsubscribe();
      };
    }, [n.disabled]);
}
function Zb(n) {
  const a = Ho(),
    { control: u = a.control, disabled: s, name: c, exact: m } = n || {},
    [o, h] = xt.useState(u._formState),
    S = xt.useRef(!0),
    x = xt.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    }),
    B = xt.useRef(c);
  return (
    (B.current = c),
    Go({
      disabled: s,
      next: (v) =>
        S.current && oy(B.current, v.name, m) && fy(v, x.current, u._updateFormState) && h({ ...u._formState, ...v }),
      subject: u._subjects.state
    }),
    xt.useEffect(
      () => (
        (S.current = !0),
        x.current.isValid && u._updateValid(!0),
        () => {
          S.current = !1;
        }
      ),
      [u]
    ),
    xt.useMemo(() => cy(o, u, x.current, !1), [o, u])
  );
}
var gn = (n) => typeof n == 'string',
  hy = (n, a, u, s, c) =>
    gn(n)
      ? (s && a.watch.add(n), ke(u, n, c))
      : Array.isArray(n)
        ? n.map((m) => (s && a.watch.add(m), ke(u, m)))
        : (s && (a.watchAll = !0), u);
function Qb(n) {
  const a = Ho(),
    { control: u = a.control, name: s, defaultValue: c, disabled: m, exact: o } = n || {},
    h = xt.useRef(s);
  (h.current = s),
    Go({
      disabled: m,
      subject: u._subjects.values,
      next: (B) => {
        oy(h.current, B.name, o) && x(Sr(hy(h.current, u._names, B.values || u._formValues, !1, c)));
      }
    });
  const [S, x] = xt.useState(u._getWatch(s, c));
  return xt.useEffect(() => u._removeUnmounted()), S;
}
function Kb(n) {
  const a = Ho(),
    { name: u, disabled: s, control: c = a.control, shouldUnregister: m } = n,
    o = ly(c._names.array, u),
    h = Qb({
      control: c,
      name: u,
      defaultValue: ke(c._formValues, u, ke(c._defaultValues, u, n.defaultValue)),
      exact: !0
    }),
    S = Zb({ control: c, name: u, exact: !0 }),
    x = xt.useRef(c.register(u, { ...n.rules, value: h, ...(Jr(n.disabled) ? { disabled: n.disabled } : {}) })),
    B = xt.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ke(S.errors, u) },
            isDirty: { enumerable: !0, get: () => !!ke(S.dirtyFields, u) },
            isTouched: { enumerable: !0, get: () => !!ke(S.touchedFields, u) },
            isValidating: { enumerable: !0, get: () => !!ke(S.validatingFields, u) },
            error: { enumerable: !0, get: () => ke(S.errors, u) }
          }
        ),
      [S, u]
    ),
    v = xt.useMemo(
      () => ({
        name: u,
        value: h,
        ...(Jr(s) || S.disabled ? { disabled: S.disabled || s } : {}),
        onChange: (_) => x.current.onChange({ target: { value: uy(_), name: u }, type: As.CHANGE }),
        onBlur: () => x.current.onBlur({ target: { value: ke(c._formValues, u), name: u }, type: As.BLUR }),
        ref: (_) => {
          const O = ke(c._fields, u);
          O &&
            _ &&
            (O._f.ref = {
              focus: () => _.focus(),
              select: () => _.select(),
              setCustomValidity: (W) => _.setCustomValidity(W),
              reportValidity: () => _.reportValidity()
            });
        }
      }),
      [u, c._formValues, s, S.disabled, h, c._fields]
    );
  return (
    xt.useEffect(() => {
      const _ = c._options.shouldUnregister || m,
        O = (W, ce) => {
          const de = ke(c._fields, W);
          de && de._f && (de._f.mount = ce);
        };
      if ((O(u, !0), _)) {
        const W = Sr(ke(c._options.defaultValues, u));
        St(c._defaultValues, u, W), Lt(ke(c._formValues, u)) && St(c._formValues, u, W);
      }
      return (
        !o && c.register(u),
        () => {
          (o ? _ && !c._state.action : _) ? c.unregister(u) : O(u, !1);
        }
      );
    }, [u, c, o, m]),
    xt.useEffect(() => {
      c._updateDisabledField({ disabled: s, fields: c._fields, name: u });
    }, [s, u, c]),
    xt.useMemo(() => ({ field: v, formState: S, fieldState: B }), [v, S, B])
  );
}
const _r = (n) => n.render(Kb(n));
var dy = (n, a, u, s, c) => (a ? { ...u[n], types: { ...(u[n] && u[n].types ? u[n].types : {}), [s]: c || !0 } } : {}),
  dp = (n) => ({
    isOnSubmit: !n || n === nn.onSubmit,
    isOnBlur: n === nn.onBlur,
    isOnChange: n === nn.onChange,
    isOnAll: n === nn.all,
    isOnTouch: n === nn.onTouched
  }),
  mp = (n, a, u) =>
    !u &&
    (a.watchAll || a.watch.has(n) || [...a.watch].some((s) => n.startsWith(s) && /^\.\w+/.test(n.slice(s.length))));
const qu = (n, a, u, s) => {
  for (const c of u || Object.keys(n)) {
    const m = ke(n, c);
    if (m) {
      const { _f: o, ...h } = m;
      if (o) {
        if (o.refs && o.refs[0] && a(o.refs[0], c) && !s) return !0;
        if (o.ref && a(o.ref, o.name) && !s) return !0;
        if (qu(h, a)) break;
      } else if (Ht(h) && qu(h, a)) break;
    }
  }
};
var Jb = (n, a, u) => {
    const s = ku(ke(n, u));
    return St(s, 'root', a[u]), St(n, u, s), n;
  },
  Fo = (n) => n.type === 'file',
  yn = (n) => typeof n == 'function',
  Ns = (n) => {
    if (!Io) return !1;
    const a = n ? n.ownerDocument : 0;
    return n instanceof (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement);
  },
  ds = (n) => gn(n),
  Vo = (n) => n.type === 'radio',
  Os = (n) => n instanceof RegExp;
const pp = { value: !1, isValid: !1 },
  yp = { value: !0, isValid: !0 };
var my = (n) => {
  if (Array.isArray(n)) {
    if (n.length > 1) {
      const a = n.filter((u) => u && u.checked && !u.disabled).map((u) => u.value);
      return { value: a, isValid: !!a.length };
    }
    return n[0].checked && !n[0].disabled
      ? n[0].attributes && !Lt(n[0].attributes.value)
        ? Lt(n[0].value) || n[0].value === ''
          ? yp
          : { value: n[0].value, isValid: !0 }
        : yp
      : pp;
  }
  return pp;
};
const gp = { isValid: !1, value: null };
var py = (n) =>
  Array.isArray(n) ? n.reduce((a, u) => (u && u.checked && !u.disabled ? { isValid: !0, value: u.value } : a), gp) : gp;
function vp(n, a, u = 'validate') {
  if (ds(n) || (Array.isArray(n) && n.every(ds)) || (Jr(n) && !n)) return { type: u, message: ds(n) ? n : '', ref: a };
}
var Oa = (n) => (Ht(n) && !Os(n) ? n : { value: n, message: '' }),
  bp = async (n, a, u, s, c, m) => {
    const {
        ref: o,
        refs: h,
        required: S,
        maxLength: x,
        minLength: B,
        min: v,
        max: _,
        pattern: O,
        validate: W,
        name: ce,
        valueAsNumber: de,
        mount: ve
      } = n._f,
      Q = ke(u, ce);
    if (!ve || a.has(ce)) return {};
    const je = h ? h[0] : o,
      We = (V) => {
        c && je.reportValidity && (je.setCustomValidity(Jr(V) ? '' : V || ''), je.reportValidity());
      },
      _e = {},
      we = Vo(o),
      De = Qu(o),
      y = we || De,
      E =
        ((de || Fo(o)) && Lt(o.value) && Lt(Q)) ||
        (Ns(o) && o.value === '') ||
        Q === '' ||
        (Array.isArray(Q) && !Q.length),
      w = dy.bind(null, ce, s, _e),
      F = (V, Y, X, C = kn.maxLength, T = kn.minLength) => {
        const G = V ? Y : X;
        _e[ce] = { type: V ? C : T, message: G, ref: o, ...w(V ? C : T, G) };
      };
    if (
      m
        ? !Array.isArray(Q) || !Q.length
        : S && ((!y && (E || dr(Q))) || (Jr(Q) && !Q) || (De && !my(h).isValid) || (we && !py(h).isValid))
    ) {
      const { value: V, message: Y } = ds(S) ? { value: !!S, message: S } : Oa(S);
      if (V && ((_e[ce] = { type: kn.required, message: Y, ref: je, ...w(kn.required, Y) }), !s)) return We(Y), _e;
    }
    if (!E && (!dr(v) || !dr(_))) {
      let V, Y;
      const X = Oa(_),
        C = Oa(v);
      if (!dr(Q) && !isNaN(Q)) {
        const T = o.valueAsNumber || (Q && +Q);
        dr(X.value) || (V = T > X.value), dr(C.value) || (Y = T < C.value);
      } else {
        const T = o.valueAsDate || new Date(Q),
          G = (D) => new Date(new Date().toDateString() + ' ' + D),
          I = o.type == 'time',
          ue = o.type == 'week';
        gn(X.value) && Q && (V = I ? G(Q) > G(X.value) : ue ? Q > X.value : T > new Date(X.value)),
          gn(C.value) && Q && (Y = I ? G(Q) < G(C.value) : ue ? Q < C.value : T < new Date(C.value));
      }
      if ((V || Y) && (F(!!V, X.message, C.message, kn.max, kn.min), !s)) return We(_e[ce].message), _e;
    }
    if ((x || B) && !E && (gn(Q) || (m && Array.isArray(Q)))) {
      const V = Oa(x),
        Y = Oa(B),
        X = !dr(V.value) && Q.length > +V.value,
        C = !dr(Y.value) && Q.length < +Y.value;
      if ((X || C) && (F(X, V.message, Y.message), !s)) return We(_e[ce].message), _e;
    }
    if (O && !E && gn(Q)) {
      const { value: V, message: Y } = Oa(O);
      if (Os(V) && !Q.match(V) && ((_e[ce] = { type: kn.pattern, message: Y, ref: o, ...w(kn.pattern, Y) }), !s))
        return We(Y), _e;
    }
    if (W) {
      if (yn(W)) {
        const V = await W(Q, u),
          Y = vp(V, je);
        if (Y && ((_e[ce] = { ...Y, ...w(kn.validate, Y.message) }), !s)) return We(Y.message), _e;
      } else if (Ht(W)) {
        let V = {};
        for (const Y in W) {
          if (!xr(V) && !s) break;
          const X = vp(await W[Y](Q, u), je, Y);
          X && ((V = { ...X, ...w(Y, X.message) }), We(X.message), s && (_e[ce] = V));
        }
        if (!xr(V) && ((_e[ce] = { ref: je, ...V }), !s)) return _e;
      }
    }
    return We(!0), _e;
  };
function Wb(n, a) {
  const u = a.slice(0, -1).length;
  let s = 0;
  for (; s < u; ) n = Lt(n) ? s++ : n[a[s++]];
  return n;
}
function Pb(n) {
  for (const a in n) if (n.hasOwnProperty(a) && !Lt(n[a])) return !1;
  return !0;
}
function Qt(n, a) {
  const u = Array.isArray(a) ? a : Lo(a) ? [a] : sy(a),
    s = u.length === 1 ? n : Wb(n, u),
    c = u.length - 1,
    m = u[c];
  return s && delete s[m], c !== 0 && ((Ht(s) && xr(s)) || (Array.isArray(s) && Pb(s))) && Qt(n, u.slice(0, -1)), n;
}
var So = () => {
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
  Mo = (n) => dr(n) || !ay(n);
function pi(n, a) {
  if (Mo(n) || Mo(a)) return n === a;
  if (Li(n) && Li(a)) return n.getTime() === a.getTime();
  const u = Object.keys(n),
    s = Object.keys(a);
  if (u.length !== s.length) return !1;
  for (const c of u) {
    const m = n[c];
    if (!s.includes(c)) return !1;
    if (c !== 'ref') {
      const o = a[c];
      if ((Li(m) && Li(o)) || (Ht(m) && Ht(o)) || (Array.isArray(m) && Array.isArray(o)) ? !pi(m, o) : m !== o)
        return !1;
    }
  }
  return !0;
}
var yy = (n) => n.type === 'select-multiple',
  eS = (n) => Vo(n) || Qu(n),
  xo = (n) => Ns(n) && n.isConnected,
  gy = (n) => {
    for (const a in n) if (yn(n[a])) return !0;
    return !1;
  };
function Ts(n, a = {}) {
  const u = Array.isArray(n);
  if (Ht(n) || u)
    for (const s in n)
      Array.isArray(n[s]) || (Ht(n[s]) && !gy(n[s]))
        ? ((a[s] = Array.isArray(n[s]) ? [] : {}), Ts(n[s], a[s]))
        : dr(n[s]) || (a[s] = !0);
  return a;
}
function vy(n, a, u) {
  const s = Array.isArray(n);
  if (Ht(n) || s)
    for (const c in n)
      Array.isArray(n[c]) || (Ht(n[c]) && !gy(n[c]))
        ? Lt(a) || Mo(u[c])
          ? (u[c] = Array.isArray(n[c]) ? Ts(n[c], []) : { ...Ts(n[c]) })
          : vy(n[c], dr(a) ? {} : a[c], u[c])
        : (u[c] = !pi(n[c], a[c]));
  return u;
}
var Mu = (n, a) => vy(n, a, Ts(a)),
  by = (n, { valueAsNumber: a, valueAsDate: u, setValueAs: s }) =>
    Lt(n) ? n : a ? (n === '' ? NaN : n && +n) : u && gn(n) ? new Date(n) : s ? s(n) : n;
function Eo(n) {
  const a = n.ref;
  return Fo(a)
    ? a.files
    : Vo(a)
      ? py(n.refs).value
      : yy(a)
        ? [...a.selectedOptions].map(({ value: u }) => u)
        : Qu(a)
          ? my(n.refs).value
          : by(Lt(a.value) ? n.ref.value : a.value, n);
}
var tS = (n, a, u, s) => {
    const c = {};
    for (const m of n) {
      const o = ke(a, m);
      o && St(c, m, o._f);
    }
    return { criteriaMode: u, names: [...n], fields: c, shouldUseNativeValidation: s };
  },
  Bu = (n) => (Lt(n) ? n : Os(n) ? n.source : Ht(n) ? (Os(n.value) ? n.value.source : n.value) : n);
const Sp = 'AsyncFunction';
var rS = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (yn(n.validate) && n.validate.constructor.name === Sp) ||
      (Ht(n.validate) && Object.values(n.validate).find((a) => a.constructor.name === Sp))
    ),
  nS = (n) => n.mount && (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate);
function xp(n, a, u) {
  const s = ke(n, u);
  if (s || Lo(u)) return { error: s, name: u };
  const c = u.split('.');
  for (; c.length; ) {
    const m = c.join('.'),
      o = ke(a, m),
      h = ke(n, m);
    if (o && !Array.isArray(o) && u !== m) return { name: u };
    if (h && h.type) return { name: m, error: h };
    c.pop();
  }
  return { name: u };
}
var iS = (n, a, u, s, c) =>
    c.isOnAll
      ? !1
      : !u && c.isOnTouch
        ? !(a || n)
        : (u ? s.isOnBlur : c.isOnBlur)
          ? !n
          : (u ? s.isOnChange : c.isOnChange)
            ? n
            : !0,
  aS = (n, a) => !zs(ke(n, a)).length && Qt(n, a);
const uS = { mode: nn.onSubmit, reValidateMode: nn.onChange, shouldFocusError: !0 };
function lS(n = {}) {
  let a = { ...uS, ...n },
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
    c = Ht(a.defaultValues) || Ht(a.values) ? Sr(a.defaultValues || a.values) || {} : {},
    m = a.shouldUnregister ? {} : Sr(c),
    o = { action: !1, mount: !1, watch: !1 },
    h = { mount: new Set(), disabled: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
    S,
    x = 0;
  const B = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    },
    v = { values: So(), array: So(), state: So() },
    _ = dp(a.mode),
    O = dp(a.reValidateMode),
    W = a.criteriaMode === nn.all,
    ce = (N) => (z) => {
      clearTimeout(x), (x = setTimeout(N, z));
    },
    de = async (N) => {
      if (!a.disabled && (B.isValid || N)) {
        const z = a.resolver ? xr((await y()).errors) : await w(s, !0);
        z !== u.isValid && v.state.next({ isValid: z });
      }
    },
    ve = (N, z) => {
      !a.disabled &&
        (B.isValidating || B.validatingFields) &&
        ((N || Array.from(h.mount)).forEach((L) => {
          L && (z ? St(u.validatingFields, L, z) : Qt(u.validatingFields, L));
        }),
        v.state.next({ validatingFields: u.validatingFields, isValidating: !xr(u.validatingFields) }));
    },
    Q = (N, z = [], L, J, pe = !0, ge = !0) => {
      if (J && L && !a.disabled) {
        if (((o.action = !0), ge && Array.isArray(ke(s, N)))) {
          const Me = L(ke(s, N), J.argA, J.argB);
          pe && St(s, N, Me);
        }
        if (ge && Array.isArray(ke(u.errors, N))) {
          const Me = L(ke(u.errors, N), J.argA, J.argB);
          pe && St(u.errors, N, Me), aS(u.errors, N);
        }
        if (B.touchedFields && ge && Array.isArray(ke(u.touchedFields, N))) {
          const Me = L(ke(u.touchedFields, N), J.argA, J.argB);
          pe && St(u.touchedFields, N, Me);
        }
        B.dirtyFields && (u.dirtyFields = Mu(c, m)),
          v.state.next({ name: N, isDirty: V(N, z), dirtyFields: u.dirtyFields, errors: u.errors, isValid: u.isValid });
      } else St(m, N, z);
    },
    je = (N, z) => {
      St(u.errors, N, z), v.state.next({ errors: u.errors });
    },
    We = (N) => {
      (u.errors = N), v.state.next({ errors: u.errors, isValid: !1 });
    },
    _e = (N, z, L, J) => {
      const pe = ke(s, N);
      if (pe) {
        const ge = ke(m, N, Lt(L) ? ke(c, N) : L);
        Lt(ge) || (J && J.defaultChecked) || z ? St(m, N, z ? ge : Eo(pe._f)) : C(N, ge), o.mount && de();
      }
    },
    we = (N, z, L, J, pe) => {
      let ge = !1,
        Me = !1;
      const qe = { name: N };
      if (!a.disabled) {
        const tt = !!(ke(s, N) && ke(s, N)._f && ke(s, N)._f.disabled);
        if (!L || J) {
          B.isDirty && ((Me = u.isDirty), (u.isDirty = qe.isDirty = V()), (ge = Me !== qe.isDirty));
          const b = tt || pi(ke(c, N), z);
          (Me = !!(!tt && ke(u.dirtyFields, N))),
            b || tt ? Qt(u.dirtyFields, N) : St(u.dirtyFields, N, !0),
            (qe.dirtyFields = u.dirtyFields),
            (ge = ge || (B.dirtyFields && Me !== !b));
        }
        if (L) {
          const b = ke(u.touchedFields, N);
          b ||
            (St(u.touchedFields, N, L),
            (qe.touchedFields = u.touchedFields),
            (ge = ge || (B.touchedFields && b !== L)));
        }
        ge && pe && v.state.next(qe);
      }
      return ge ? qe : {};
    },
    De = (N, z, L, J) => {
      const pe = ke(u.errors, N),
        ge = B.isValid && Jr(z) && u.isValid !== z;
      if (
        (a.delayError && L
          ? ((S = ce(() => je(N, L))), S(a.delayError))
          : (clearTimeout(x), (S = null), L ? St(u.errors, N, L) : Qt(u.errors, N)),
        (L ? !pi(pe, L) : pe) || !xr(J) || ge)
      ) {
        const Me = { ...J, ...(ge && Jr(z) ? { isValid: z } : {}), errors: u.errors, name: N };
        (u = { ...u, ...Me }), v.state.next(Me);
      }
    },
    y = async (N) => {
      ve(N, !0);
      const z = await a.resolver(m, a.context, tS(N || h.mount, s, a.criteriaMode, a.shouldUseNativeValidation));
      return ve(N), z;
    },
    E = async (N) => {
      const { errors: z } = await y(N);
      if (N)
        for (const L of N) {
          const J = ke(z, L);
          J ? St(u.errors, L, J) : Qt(u.errors, L);
        }
      else u.errors = z;
      return z;
    },
    w = async (N, z, L = { valid: !0 }) => {
      for (const J in N) {
        const pe = N[J];
        if (pe) {
          const { _f: ge, ...Me } = pe;
          if (ge) {
            const qe = h.array.has(ge.name),
              tt = pe._f && rS(pe._f);
            tt && B.validatingFields && ve([J], !0);
            const b = await bp(pe, h.disabled, m, W, a.shouldUseNativeValidation && !z, qe);
            if ((tt && B.validatingFields && ve([J]), b[ge.name] && ((L.valid = !1), z))) break;
            !z &&
              (ke(b, ge.name)
                ? qe
                  ? Jb(u.errors, b, ge.name)
                  : St(u.errors, ge.name, b[ge.name])
                : Qt(u.errors, ge.name));
          }
          !xr(Me) && (await w(Me, z, L));
        }
      }
      return L.valid;
    },
    F = () => {
      for (const N of h.unMount) {
        const z = ke(s, N);
        z && (z._f.refs ? z._f.refs.every((L) => !xo(L)) : !xo(z._f.ref)) && Ne(N);
      }
      h.unMount = new Set();
    },
    V = (N, z) => !a.disabled && (N && z && St(m, N, z), !pi(ee(), c)),
    Y = (N, z, L) => hy(N, h, { ...(o.mount ? m : Lt(z) ? c : gn(N) ? { [N]: z } : z) }, L, z),
    X = (N) => zs(ke(o.mount ? m : c, N, a.shouldUnregister ? ke(c, N, []) : [])),
    C = (N, z, L = {}) => {
      const J = ke(s, N);
      let pe = z;
      if (J) {
        const ge = J._f;
        ge &&
          (!ge.disabled && St(m, N, by(z, ge)),
          (pe = Ns(ge.ref) && dr(z) ? '' : z),
          yy(ge.ref)
            ? [...ge.ref.options].forEach((Me) => (Me.selected = pe.includes(Me.value)))
            : ge.refs
              ? Qu(ge.ref)
                ? ge.refs.length > 1
                  ? ge.refs.forEach(
                      (Me) =>
                        (!Me.defaultChecked || !Me.disabled) &&
                        (Me.checked = Array.isArray(pe) ? !!pe.find((qe) => qe === Me.value) : pe === Me.value)
                    )
                  : ge.refs[0] && (ge.refs[0].checked = !!pe)
                : ge.refs.forEach((Me) => (Me.checked = Me.value === pe))
              : Fo(ge.ref)
                ? (ge.ref.value = '')
                : ((ge.ref.value = pe), ge.ref.type || v.values.next({ name: N, values: { ...m } })));
      }
      (L.shouldDirty || L.shouldTouch) && we(N, pe, L.shouldTouch, L.shouldDirty, !0), L.shouldValidate && D(N);
    },
    T = (N, z, L) => {
      for (const J in z) {
        const pe = z[J],
          ge = `${N}.${J}`,
          Me = ke(s, ge);
        (h.array.has(N) || Ht(pe) || (Me && !Me._f)) && !Li(pe) ? T(ge, pe, L) : C(ge, pe, L);
      }
    },
    G = (N, z, L = {}) => {
      const J = ke(s, N),
        pe = h.array.has(N),
        ge = Sr(z);
      St(m, N, ge),
        pe
          ? (v.array.next({ name: N, values: { ...m } }),
            (B.isDirty || B.dirtyFields) &&
              L.shouldDirty &&
              v.state.next({ name: N, dirtyFields: Mu(c, m), isDirty: V(N, ge) }))
          : J && !J._f && !dr(ge)
            ? T(N, ge, L)
            : C(N, ge, L),
        mp(N, h) && v.state.next({ ...u }),
        v.values.next({ name: o.mount ? N : void 0, values: { ...m } });
    },
    I = async (N) => {
      o.mount = !0;
      const z = N.target;
      let L = z.name,
        J = !0;
      const pe = ke(s, L),
        ge = () => (z.type ? Eo(pe._f) : uy(N)),
        Me = (qe) => {
          J = Number.isNaN(qe) || (Li(qe) && isNaN(qe.getTime())) || pi(qe, ke(m, L, qe));
        };
      if (pe) {
        let qe, tt;
        const b = ge(),
          d = N.type === As.BLUR || N.type === As.FOCUS_OUT,
          p =
            (!nS(pe._f) && !a.resolver && !ke(u.errors, L) && !pe._f.deps) ||
            iS(d, ke(u.touchedFields, L), u.isSubmitted, O, _),
          H = mp(L, h, d);
        St(m, L, b), d ? (pe._f.onBlur && pe._f.onBlur(N), S && S(0)) : pe._f.onChange && pe._f.onChange(N);
        const te = we(L, b, d, !1),
          j = !xr(te) || H;
        if ((!d && v.values.next({ name: L, type: N.type, values: { ...m } }), p))
          return (
            B.isValid && (a.mode === 'onBlur' && d ? de() : d || de()), j && v.state.next({ name: L, ...(H ? {} : te) })
          );
        if ((!d && H && v.state.next({ ...u }), a.resolver)) {
          const { errors: k } = await y([L]);
          if ((Me(b), J)) {
            const se = xp(u.errors, s, L),
              Ee = xp(k, s, se.name || L);
            (qe = Ee.error), (L = Ee.name), (tt = xr(k));
          }
        } else
          ve([L], !0),
            (qe = (await bp(pe, h.disabled, m, W, a.shouldUseNativeValidation))[L]),
            ve([L]),
            Me(b),
            J && (qe ? (tt = !1) : B.isValid && (tt = await w(s, !0)));
        J && (pe._f.deps && D(pe._f.deps), De(L, tt, qe, te));
      }
    },
    ue = (N, z) => {
      if (ke(u.errors, z) && N.focus) return N.focus(), 1;
    },
    D = async (N, z = {}) => {
      let L, J;
      const pe = ku(N);
      if (a.resolver) {
        const ge = await E(Lt(N) ? N : pe);
        (L = xr(ge)), (J = N ? !pe.some((Me) => ke(ge, Me)) : L);
      } else
        N
          ? ((J = (
              await Promise.all(
                pe.map(async (ge) => {
                  const Me = ke(s, ge);
                  return await w(Me && Me._f ? { [ge]: Me } : Me);
                })
              )
            ).every(Boolean)),
            !(!J && !u.isValid) && de())
          : (J = L = await w(s));
      return (
        v.state.next({
          ...(!gn(N) || (B.isValid && L !== u.isValid) ? {} : { name: N }),
          ...(a.resolver || !N ? { isValid: L } : {}),
          errors: u.errors
        }),
        z.shouldFocus && !J && qu(s, ue, N ? pe : h.mount),
        J
      );
    },
    ee = (N) => {
      const z = { ...(o.mount ? m : c) };
      return Lt(N) ? z : gn(N) ? ke(z, N) : N.map((L) => ke(z, L));
    },
    be = (N, z) => ({
      invalid: !!ke((z || u).errors, N),
      isDirty: !!ke((z || u).dirtyFields, N),
      error: ke((z || u).errors, N),
      isValidating: !!ke(u.validatingFields, N),
      isTouched: !!ke((z || u).touchedFields, N)
    }),
    me = (N) => {
      N && ku(N).forEach((z) => Qt(u.errors, z)), v.state.next({ errors: N ? u.errors : {} });
    },
    A = (N, z, L) => {
      const J = (ke(s, N, { _f: {} })._f || {}).ref,
        pe = ke(u.errors, N) || {},
        { ref: ge, message: Me, type: qe, ...tt } = pe;
      St(u.errors, N, { ...tt, ...z, ref: J }),
        v.state.next({ name: N, errors: u.errors, isValid: !1 }),
        L && L.shouldFocus && J && J.focus && J.focus();
    },
    Ue = (N, z) => (yn(N) ? v.values.subscribe({ next: (L) => N(Y(void 0, z), L) }) : Y(N, z, !0)),
    Ne = (N, z = {}) => {
      for (const L of N ? ku(N) : h.mount)
        h.mount.delete(L),
          h.array.delete(L),
          z.keepValue || (Qt(s, L), Qt(m, L)),
          !z.keepError && Qt(u.errors, L),
          !z.keepDirty && Qt(u.dirtyFields, L),
          !z.keepTouched && Qt(u.touchedFields, L),
          !z.keepIsValidating && Qt(u.validatingFields, L),
          !a.shouldUnregister && !z.keepDefaultValue && Qt(c, L);
      v.values.next({ values: { ...m } }),
        v.state.next({ ...u, ...(z.keepDirty ? { isDirty: V() } : {}) }),
        !z.keepIsValid && de();
    },
    Ke = ({ disabled: N, name: z, field: L, fields: J }) => {
      ((Jr(N) && o.mount) || N || h.disabled.has(z)) &&
        (N ? h.disabled.add(z) : h.disabled.delete(z), we(z, Eo(L ? L._f : ke(J, z)._f), !1, !1, !0));
    },
    Oe = (N, z = {}) => {
      let L = ke(s, N);
      const J = Jr(z.disabled) || Jr(a.disabled);
      return (
        St(s, N, { ...(L || {}), _f: { ...(L && L._f ? L._f : { ref: { name: N } }), name: N, mount: !0, ...z } }),
        h.mount.add(N),
        L ? Ke({ field: L, disabled: Jr(z.disabled) ? z.disabled : a.disabled, name: N }) : _e(N, !0, z.value),
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
          name: N,
          onChange: I,
          onBlur: I,
          ref: (pe) => {
            if (pe) {
              Oe(N, z), (L = ke(s, N));
              const ge = (Lt(pe.value) && pe.querySelectorAll && pe.querySelectorAll('input,select,textarea')[0]) || pe,
                Me = eS(ge),
                qe = L._f.refs || [];
              if (Me ? qe.find((tt) => tt === ge) : ge === L._f.ref) return;
              St(s, N, {
                _f: {
                  ...L._f,
                  ...(Me
                    ? {
                        refs: [...qe.filter(xo), ge, ...(Array.isArray(ke(c, N)) ? [{}] : [])],
                        ref: { type: ge.type, name: N }
                      }
                    : { ref: ge })
                }
              }),
                _e(N, !1, void 0, ge);
            } else
              (L = ke(s, N, {})),
                L._f && (L._f.mount = !1),
                (a.shouldUnregister || z.shouldUnregister) && !(ly(h.array, N) && o.action) && h.unMount.add(N);
          }
        }
      );
    },
    Re = () => a.shouldFocusError && qu(s, ue, h.mount),
    M = (N) => {
      Jr(N) &&
        (v.state.next({ disabled: N }),
        qu(
          s,
          (z, L) => {
            const J = ke(s, L);
            J &&
              ((z.disabled = J._f.disabled || N),
              Array.isArray(J._f.refs) &&
                J._f.refs.forEach((pe) => {
                  pe.disabled = J._f.disabled || N;
                }));
          },
          0,
          !1
        ));
    },
    R = (N, z) => async (L) => {
      let J;
      L && (L.preventDefault && L.preventDefault(), L.persist && L.persist());
      let pe = Sr(m);
      if (h.disabled.size) for (const ge of h.disabled) St(pe, ge, void 0);
      if ((v.state.next({ isSubmitting: !0 }), a.resolver)) {
        const { errors: ge, values: Me } = await y();
        (u.errors = ge), (pe = Me);
      } else await w(s);
      if ((Qt(u.errors, 'root'), xr(u.errors))) {
        v.state.next({ errors: {} });
        try {
          await N(pe, L);
        } catch (ge) {
          J = ge;
        }
      } else z && (await z({ ...u.errors }, L)), Re(), setTimeout(Re);
      if (
        (v.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: xr(u.errors) && !J,
          submitCount: u.submitCount + 1,
          errors: u.errors
        }),
        J)
      )
        throw J;
    },
    Z = (N, z = {}) => {
      ke(s, N) &&
        (Lt(z.defaultValue) ? G(N, Sr(ke(c, N))) : (G(N, z.defaultValue), St(c, N, Sr(z.defaultValue))),
        z.keepTouched || Qt(u.touchedFields, N),
        z.keepDirty || (Qt(u.dirtyFields, N), (u.isDirty = z.defaultValue ? V(N, Sr(ke(c, N))) : V())),
        z.keepError || (Qt(u.errors, N), B.isValid && de()),
        v.state.next({ ...u }));
    },
    ie = (N, z = {}) => {
      const L = N ? Sr(N) : c,
        J = Sr(L),
        pe = xr(N),
        ge = pe ? c : J;
      if ((z.keepDefaultValues || (c = L), !z.keepValues)) {
        if (z.keepDirtyValues) {
          const Me = new Set([...h.mount, ...Object.keys(Mu(c, m))]);
          for (const qe of Array.from(Me)) ke(u.dirtyFields, qe) ? St(ge, qe, ke(m, qe)) : G(qe, ke(ge, qe));
        } else {
          if (Io && Lt(N))
            for (const Me of h.mount) {
              const qe = ke(s, Me);
              if (qe && qe._f) {
                const tt = Array.isArray(qe._f.refs) ? qe._f.refs[0] : qe._f.ref;
                if (Ns(tt)) {
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
        (m = a.shouldUnregister ? (z.keepDefaultValues ? Sr(c) : {}) : Sr(ge)),
          v.array.next({ values: { ...ge } }),
          v.values.next({ values: { ...ge } });
      }
      (h = {
        mount: z.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: ''
      }),
        (o.mount = !B.isValid || !!z.keepIsValid || !!z.keepDirtyValues),
        (o.watch = !!a.shouldUnregister),
        v.state.next({
          submitCount: z.keepSubmitCount ? u.submitCount : 0,
          isDirty: pe ? !1 : z.keepDirty ? u.isDirty : !!(z.keepDefaultValues && !pi(N, c)),
          isSubmitted: z.keepIsSubmitted ? u.isSubmitted : !1,
          dirtyFields: pe
            ? {}
            : z.keepDirtyValues
              ? z.keepDefaultValues && m
                ? Mu(c, m)
                : u.dirtyFields
              : z.keepDefaultValues && N
                ? Mu(c, N)
                : z.keepDirty
                  ? u.dirtyFields
                  : {},
          touchedFields: z.keepTouched ? u.touchedFields : {},
          errors: z.keepErrors ? u.errors : {},
          isSubmitSuccessful: z.keepIsSubmitSuccessful ? u.isSubmitSuccessful : !1,
          isSubmitting: !1
        });
    },
    P = (N, z) => ie(yn(N) ? N(m) : N, z);
  return {
    control: {
      register: Oe,
      unregister: Ne,
      getFieldState: be,
      handleSubmit: R,
      setError: A,
      _executeSchema: y,
      _getWatch: Y,
      _getDirty: V,
      _updateValid: de,
      _removeUnmounted: F,
      _updateFieldArray: Q,
      _updateDisabledField: Ke,
      _getFieldArray: X,
      _reset: ie,
      _resetDefaultValues: () =>
        yn(a.defaultValues) &&
        a.defaultValues().then((N) => {
          P(N, a.resetOptions), v.state.next({ isLoading: !1 });
        }),
      _updateFormState: (N) => {
        u = { ...u, ...N };
      },
      _disableForm: M,
      _subjects: v,
      _proxyFormState: B,
      _setErrors: We,
      get _fields() {
        return s;
      },
      get _formValues() {
        return m;
      },
      get _state() {
        return o;
      },
      set _state(N) {
        o = N;
      },
      get _defaultValues() {
        return c;
      },
      get _names() {
        return h;
      },
      set _names(N) {
        h = N;
      },
      get _formState() {
        return u;
      },
      set _formState(N) {
        u = N;
      },
      get _options() {
        return a;
      },
      set _options(N) {
        a = { ...a, ...N };
      }
    },
    trigger: D,
    register: Oe,
    handleSubmit: R,
    watch: Ue,
    setValue: G,
    getValues: ee,
    reset: P,
    resetField: Z,
    clearErrors: me,
    unregister: Ne,
    setError: A,
    setFocus: (N, z = {}) => {
      const L = ke(s, N),
        J = L && L._f;
      if (J) {
        const pe = J.refs ? J.refs[0] : J.ref;
        pe.focus && (pe.focus(), z.shouldSelect && yn(pe.select) && pe.select());
      }
    },
    getFieldState: be
  };
}
function Kt(n = {}) {
  const a = xt.useRef(void 0),
    u = xt.useRef(void 0),
    [s, c] = xt.useState({
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
  a.current || (a.current = { ...lS(n), formState: s });
  const m = a.current.control;
  return (
    (m._options = n),
    Go({
      subject: m._subjects.state,
      next: (o) => {
        fy(o, m._proxyFormState, m._updateFormState, !0) && c({ ...m._formState });
      }
    }),
    xt.useEffect(() => m._disableForm(n.disabled), [m, n.disabled]),
    xt.useEffect(() => {
      if (m._proxyFormState.isDirty) {
        const o = m._getDirty();
        o !== s.isDirty && m._subjects.state.next({ isDirty: o });
      }
    }, [m, s.isDirty]),
    xt.useEffect(() => {
      n.values && !pi(n.values, u.current)
        ? (m._reset(n.values, m._options.resetOptions), (u.current = n.values), c((o) => ({ ...o })))
        : m._resetDefaultValues();
    }, [n.values, m]),
    xt.useEffect(() => {
      n.errors && m._setErrors(n.errors);
    }, [n.errors, m]),
    xt.useEffect(() => {
      m._state.mount || (m._updateValid(), (m._state.mount = !0)),
        m._state.watch && ((m._state.watch = !1), m._subjects.state.next({ ...m._formState })),
        m._removeUnmounted();
    }),
    xt.useEffect(() => {
      n.shouldUnregister && m._subjects.values.next({ values: m._getWatch() });
    }, [n.shouldUnregister, m]),
    (a.current.formState = cy(s, m)),
    a.current
  );
}
const Ep = (n, a, u) => {
    if (n && 'reportValidity' in n) {
      const s = ke(u, a);
      n.setCustomValidity((s && s.message) || ''), n.reportValidity();
    }
  },
  Sy = (n, a) => {
    for (const u in a.fields) {
      const s = a.fields[u];
      s && s.ref && 'reportValidity' in s.ref ? Ep(s.ref, u, n) : s && s.refs && s.refs.forEach((c) => Ep(c, u, n));
    }
  },
  sS = (n, a) => {
    a.shouldUseNativeValidation && Sy(n, a);
    const u = {};
    for (const s in n) {
      const c = ke(a.fields, s),
        m = Object.assign(n[s] || {}, { ref: c && c.ref });
      if (cS(a.names || Object.keys(n), s)) {
        const o = Object.assign({}, ke(u, s));
        St(o, 'root', m), St(u, s, o);
      } else St(u, s, m);
    }
    return u;
  },
  cS = (n, a) => n.some((u) => u.match(`^${a}\\.\\d+`));
function Jt(n, a, u) {
  return (
    a === void 0 && (a = {}),
    u === void 0 && (u = {}),
    function (s, c, m) {
      try {
        return Promise.resolve(
          (function (o, h) {
            try {
              var S =
                (a.context,
                Promise.resolve(
                  n[u.mode === 'sync' ? 'validateSync' : 'validate'](
                    s,
                    Object.assign({ abortEarly: !1 }, a, { context: c })
                  )
                ).then(function (x) {
                  return (
                    m.shouldUseNativeValidation && Sy({}, m), { values: u.raw ? Object.assign({}, s) : x, errors: {} }
                  );
                }));
            } catch (x) {
              return h(x);
            }
            return S && S.then ? S.then(void 0, h) : S;
          })(0, function (o) {
            if (!o.inner) throw o;
            return {
              values: {},
              errors: sS(
                ((h = o),
                (S = !m.shouldUseNativeValidation && m.criteriaMode === 'all'),
                (h.inner || []).reduce(function (x, B) {
                  if ((x[B.path] || (x[B.path] = { message: B.message, type: B.type }), S)) {
                    var v = x[B.path].types,
                      _ = v && v[B.type];
                    x[B.path] = dy(B.path, S, x, B.type, _ ? [].concat(_, B.message) : B.message);
                  }
                  return x;
                }, {})),
                m
              )
            };
            var h, S;
          })
        );
      } catch (o) {
        return Promise.reject(o);
      }
    }
  );
}
var _o, _p;
function fS() {
  if (_p) return _o;
  _p = 1;
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
    o = 512,
    h = new n(o),
    S = new n(o),
    x = new n(o);
  _o = {
    Cache: n,
    split: v,
    normalizePath: B,
    setter: function (ve) {
      var Q = B(ve);
      return (
        S.get(ve) ||
        S.set(ve, function (We, _e) {
          for (var we = 0, De = Q.length, y = We; we < De - 1; ) {
            var E = Q[we];
            if (E === '__proto__' || E === 'constructor' || E === 'prototype') return We;
            y = y[Q[we++]];
          }
          y[Q[we]] = _e;
        })
      );
    },
    getter: function (ve, Q) {
      var je = B(ve);
      return (
        x.get(ve) ||
        x.set(ve, function (_e) {
          for (var we = 0, De = je.length; we < De; )
            if (_e != null || !Q) _e = _e[je[we++]];
            else return;
          return _e;
        })
      );
    },
    join: function (ve) {
      return ve.reduce(function (Q, je) {
        return Q + (O(je) || u.test(je) ? '[' + je + ']' : (Q ? '.' : '') + je);
      }, '');
    },
    forEach: function (ve, Q, je) {
      _(Array.isArray(ve) ? ve : v(ve), Q, je);
    }
  };
  function B(ve) {
    return (
      h.get(ve) ||
      h.set(
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
  function _(ve, Q, je) {
    var We = ve.length,
      _e,
      we,
      De,
      y;
    for (we = 0; we < We; we++)
      (_e = ve[we]),
        _e &&
          (de(_e) && (_e = '"' + _e + '"'), (y = O(_e)), (De = !y && /^\d+$/.test(_e)), Q.call(je, _e, y, De, we, ve));
  }
  function O(ve) {
    return typeof ve == 'string' && ve && ["'", '"'].indexOf(ve.charAt(0)) !== -1;
  }
  function W(ve) {
    return ve.match(s) && !ve.match(u);
  }
  function ce(ve) {
    return c.test(ve);
  }
  function de(ve) {
    return !O(ve) && (W(ve) || ce(ve));
  }
  return _o;
}
var Vi = fS(),
  wo,
  wp;
function oS() {
  if (wp) return wo;
  wp = 1;
  const n =
      /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    a = (B) => B.match(n) || [],
    u = (B) => B[0].toUpperCase() + B.slice(1),
    s = (B, v) => a(B).join(v).toLowerCase(),
    c = (B) => a(B).reduce((v, _) => `${v}${v ? _[0].toUpperCase() + _.slice(1).toLowerCase() : _.toLowerCase()}`, '');
  return (
    (wo = {
      words: a,
      upperFirst: u,
      camelCase: c,
      pascalCase: (B) => u(c(B)),
      snakeCase: (B) => s(B, '_'),
      kebabCase: (B) => s(B, '-'),
      sentenceCase: (B) => u(s(B, ' ')),
      titleCase: (B) => a(B).map(u).join(' ')
    }),
    wo
  );
}
var Ao = oS(),
  fs = { exports: {} },
  Ap;
function hS() {
  if (Ap) return fs.exports;
  (Ap = 1),
    (fs.exports = function (c) {
      return n(a(c), c);
    }),
    (fs.exports.array = n);
  function n(c, m) {
    var o = c.length,
      h = new Array(o),
      S = {},
      x = o,
      B = u(m),
      v = s(c);
    for (
      m.forEach(function (O) {
        if (!v.has(O[0]) || !v.has(O[1]))
          throw new Error('Unknown node. There is an unknown node in the supplied edges.');
      });
      x--;

    )
      S[x] || _(c[x], x, new Set());
    return h;
    function _(O, W, ce) {
      if (ce.has(O)) {
        var de;
        try {
          de = ', node was:' + JSON.stringify(O);
        } catch {
          de = '';
        }
        throw new Error('Cyclic dependency' + de);
      }
      if (!v.has(O))
        throw new Error(
          'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(O)
        );
      if (!S[W]) {
        S[W] = !0;
        var ve = B.get(O) || new Set();
        if (((ve = Array.from(ve)), (W = ve.length))) {
          ce.add(O);
          do {
            var Q = ve[--W];
            _(Q, v.get(Q), ce);
          } while (W);
          ce.delete(O);
        }
        h[--o] = O;
      }
    }
  }
  function a(c) {
    for (var m = new Set(), o = 0, h = c.length; o < h; o++) {
      var S = c[o];
      m.add(S[0]), m.add(S[1]);
    }
    return Array.from(m);
  }
  function u(c) {
    for (var m = new Map(), o = 0, h = c.length; o < h; o++) {
      var S = c[o];
      m.has(S[0]) || m.set(S[0], new Set()), m.has(S[1]) || m.set(S[1], new Set()), m.get(S[0]).add(S[1]);
    }
    return m;
  }
  function s(c) {
    for (var m = new Map(), o = 0, h = c.length; o < h; o++) m.set(c[o], o);
    return m;
  }
  return fs.exports;
}
var dS = hS();
const mS = Iu(dS),
  pS = Object.prototype.toString,
  yS = Error.prototype.toString,
  gS = RegExp.prototype.toString,
  vS = typeof Symbol < 'u' ? Symbol.prototype.toString : () => '',
  bS = /^Symbol\((.*)\)(.*)$/;
function SS(n) {
  return n != +n ? 'NaN' : n === 0 && 1 / n < 0 ? '-0' : '' + n;
}
function Np(n, a = !1) {
  if (n == null || n === !0 || n === !1) return '' + n;
  const u = typeof n;
  if (u === 'number') return SS(n);
  if (u === 'string') return a ? `"${n}"` : n;
  if (u === 'function') return '[Function ' + (n.name || 'anonymous') + ']';
  if (u === 'symbol') return vS.call(n).replace(bS, 'Symbol($1)');
  const s = pS.call(n).slice(8, -1);
  return s === 'Date'
    ? isNaN(n.getTime())
      ? '' + n
      : n.toISOString(n)
    : s === 'Error' || n instanceof Error
      ? '[' + yS.call(n) + ']'
      : s === 'RegExp'
        ? gS.call(n)
        : null;
}
function Ln(n, a) {
  let u = Np(n, a);
  return u !== null
    ? u
    : JSON.stringify(
        n,
        function (s, c) {
          let m = Np(this[s], a);
          return m !== null ? m : c;
        },
        2
      );
}
function xy(n) {
  return n == null ? [] : [].concat(n);
}
let Ey,
  _y,
  wy,
  xS = /\$\{\s*(\w+)\s*\}/g;
Ey = Symbol.toStringTag;
class Op {
  constructor(a, u, s, c) {
    (this.name = void 0),
      (this.message = void 0),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = void 0),
      (this.inner = void 0),
      (this[Ey] = 'Error'),
      (this.name = 'ValidationError'),
      (this.value = u),
      (this.path = s),
      (this.type = c),
      (this.errors = []),
      (this.inner = []),
      xy(a).forEach((m) => {
        if (Er.isError(m)) {
          this.errors.push(...m.errors);
          const o = m.inner.length ? m.inner : [m];
          this.inner.push(...o);
        } else this.errors.push(m);
      }),
      (this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]);
  }
}
_y = Symbol.hasInstance;
wy = Symbol.toStringTag;
class Er extends Error {
  static formatError(a, u) {
    const s = u.label || u.path || 'this';
    return (
      (u = Object.assign({}, u, { path: s, originalPath: u.path })),
      typeof a == 'string' ? a.replace(xS, (c, m) => Ln(u[m])) : typeof a == 'function' ? a(u) : a
    );
  }
  static isError(a) {
    return a && a.name === 'ValidationError';
  }
  constructor(a, u, s, c, m) {
    const o = new Op(a, u, s, c);
    if (m) return o;
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = []),
      (this.inner = []),
      (this[wy] = 'Error'),
      (this.name = o.name),
      (this.message = o.message),
      (this.type = o.type),
      (this.value = o.value),
      (this.path = o.path),
      (this.errors = o.errors),
      (this.inner = o.inner),
      Error.captureStackTrace && Error.captureStackTrace(this, Er);
  }
  static [_y](a) {
    return Op[Symbol.hasInstance](a) || super[Symbol.hasInstance](a);
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
  Bo = { min: '${path} field must be later than ${min}', max: '${path} field must be at earlier than ${max}' },
  Uo = { isValue: '${path} field must be ${value}' },
  ms = {
    noUnknown: '${path} field has unspecified keys: ${unknown}',
    exact: '${path} object contains unknown properties: ${properties}'
  },
  ps = {
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items',
    length: '${path} must have ${length} items'
  },
  ES = {
    notType: (n) => {
      const { path: a, value: u, spec: s } = n,
        c = s.types.length;
      if (Array.isArray(u)) {
        if (u.length < c)
          return `${a} tuple value has too few items, expected a length of ${c} but got ${u.length} for value: \`${Ln(u, !0)}\``;
        if (u.length > c)
          return `${a} tuple value has too many items, expected a length of ${c} but got ${u.length} for value: \`${Ln(u, !0)}\``;
      }
      return Er.formatError(mn.notType, n);
    }
  };
Object.assign(Object.create(null), {
  mixed: mn,
  string: vr,
  number: di,
  date: Bo,
  object: ms,
  array: ps,
  boolean: Uo,
  tuple: ES
});
const Is = (n) => n && n.__isYupSchema__;
class Ms {
  static fromOptions(a, u) {
    if (!u.then && !u.otherwise)
      throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let { is: s, then: c, otherwise: m } = u,
      o = typeof s == 'function' ? s : (...h) => h.every((S) => S === s);
    return new Ms(a, (h, S) => {
      var x;
      let B = o(...h) ? c : m;
      return (x = B == null ? void 0 : B(S)) != null ? x : S;
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
    if (!Is(c)) throw new TypeError('conditions must return a schema object');
    return c.resolve(u);
  }
}
const os = { context: '$', value: '.' };
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
    (this.isContext = this.key[0] === os.context),
      (this.isValue = this.key[0] === os.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let s = this.isContext ? os.context : this.isValue ? os.value : '';
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
  function a({ value: u, path: s = '', options: c, originalValue: m, schema: o }, h, S) {
    const { name: x, test: B, params: v, message: _, skipAbsent: O } = n;
    let {
      parent: W,
      context: ce,
      abortEarly: de = o.spec.abortEarly,
      disableStackTrace: ve = o.spec.disableStackTrace
    } = c;
    function Q(F) {
      return Xi.isRef(F) ? F.getValue(u, W, ce) : F;
    }
    function je(F = {}) {
      const V = Object.assign(
        {
          value: u,
          originalValue: m,
          label: o.spec.label,
          path: F.path || s,
          spec: o.spec,
          disableStackTrace: F.disableStackTrace || ve
        },
        v,
        F.params
      );
      for (const X of Object.keys(V)) V[X] = Q(V[X]);
      const Y = new Er(Er.formatError(F.message || _, V), u, V.path, F.type || x, V.disableStackTrace);
      return (Y.params = V), Y;
    }
    const We = de ? h : S;
    let _e = {
      path: s,
      parent: W,
      type: x,
      from: c.from,
      createError: je,
      resolve: Q,
      options: c,
      originalValue: m,
      schema: o
    };
    const we = (F) => {
        Er.isError(F) ? We(F) : F ? S(null) : We(je());
      },
      De = (F) => {
        Er.isError(F) ? We(F) : h(F);
      };
    if (O && an(u)) return we(!0);
    let E;
    try {
      var w;
      if (((E = B.call(_e, u, _e)), typeof ((w = E) == null ? void 0 : w.then) == 'function')) {
        if (c.sync)
          throw new Error(
            `Validation test of type: "${_e.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
          );
        return Promise.resolve(E).then(we, De);
      }
    } catch (F) {
      De(F);
      return;
    }
    we(E);
  }
  return (a.OPTIONS = n), a;
}
function _S(n, a, u, s = u) {
  let c, m, o;
  return a
    ? (Vi.forEach(a, (h, S, x) => {
        let B = S ? h.slice(1, h.length - 1) : h;
        n = n.resolve({ context: s, parent: c, value: u });
        let v = n.type === 'tuple',
          _ = x ? parseInt(B, 10) : 0;
        if (n.innerType || v) {
          if (v && !x)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`
            );
          if (u && _ >= u.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${h}, in the path: ${a}. because there is no value at that index. `
            );
          (c = u), (u = u && u[_]), (n = v ? n.spec.types[_] : n.innerType);
        }
        if (!x) {
          if (!n.fields || !n.fields[B])
            throw new Error(
              `The schema does not contain the path: ${a}. (failed at: ${o} which is a type: "${n.type}")`
            );
          (c = u), (u = u && u[B]), (n = n.fields[B]);
        }
        (m = B), (o = S ? '[' + h + ']' : '.' + h);
      }),
      { schema: n, parent: c, parentPath: m })
    : { parent: c, parentPath: a, schema: n };
}
class Bs extends Set {
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
    return new Bs(this.values());
  }
  merge(a, u) {
    const s = this.clone();
    return a.forEach((c) => s.add(c)), u.forEach((c) => s.delete(c)), s;
  }
}
function Ma(n, a = new Map()) {
  if (Is(n) || !n || typeof n != 'object') return n;
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
class Dr {
  constructor(a) {
    (this.type = void 0),
      (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this.internalTests = {}),
      (this._whitelist = new Bs()),
      (this._blacklist = new Bs()),
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
        a.tests.forEach((o) => {
          m.test(o.OPTIONS);
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
      let o = Ln(a),
        h = Ln(m);
      throw new TypeError(
        `The value of ${u.path || 'field'} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${o} 
` + (h !== o ? `result of cast: ${h}` : '')
      );
    }
    return m;
  }
  _cast(a, u) {
    let s = a === void 0 ? a : this.transforms.reduce((c, m) => m.call(this, c, a, this), a);
    return s === void 0 && (s = this.getDefault(u)), s;
  }
  _validate(a, u = {}, s, c) {
    let { path: m, originalValue: o = a, strict: h = this.spec.strict } = u,
      S = a;
    h || (S = this._cast(S, Object.assign({ assert: !1 }, u)));
    let x = [];
    for (let B of Object.values(this.internalTests)) B && x.push(B);
    this.runTests({ path: m, value: S, originalValue: o, options: u, tests: x }, s, (B) => {
      if (B.length) return c(B, S);
      this.runTests({ path: m, value: S, originalValue: o, options: u, tests: this.tests }, s, c);
    });
  }
  runTests(a, u, s) {
    let c = !1,
      { tests: m, value: o, originalValue: h, path: S, options: x } = a,
      B = (ce) => {
        c || ((c = !0), u(ce, o));
      },
      v = (ce) => {
        c || ((c = !0), s(ce, o));
      },
      _ = m.length,
      O = [];
    if (!_) return v([]);
    let W = { value: o, originalValue: h, path: S, options: x, schema: this };
    for (let ce = 0; ce < m.length; ce++) {
      const de = m[ce];
      de(W, B, function (Q) {
        Q && (Array.isArray(Q) ? O.push(...Q) : O.push(Q)), --_ <= 0 && v(O);
      });
    }
  }
  asNestedTest({ key: a, index: u, parent: s, parentPath: c, originalParent: m, options: o }) {
    const h = a ?? u;
    if (h == null) throw TypeError('Must include `key` or `index` for nested validations');
    const S = typeof h == 'number';
    let x = s[h];
    const B = Object.assign({}, o, {
      strict: !0,
      parent: s,
      value: x,
      originalValue: m[h],
      key: void 0,
      [S ? 'index' : 'key']: h,
      path: S || h.includes('.') ? `${c || ''}[${S ? h : `"${h}"`}]` : (c ? `${c}.` : '') + a
    });
    return (v, _, O) => this.resolve(B)._validate(x, B, _, O);
  }
  validate(a, u) {
    var s;
    let c = this.resolve(Object.assign({}, u, { value: a })),
      m = (s = u == null ? void 0 : u.disableStackTrace) != null ? s : c.spec.disableStackTrace;
    return new Promise((o, h) =>
      c._validate(
        a,
        u,
        (S, x) => {
          Er.isError(S) && (S.value = x), h(S);
        },
        (S, x) => {
          S.length ? h(new Er(S, x, void 0, void 0, m)) : o(x);
        }
      )
    );
  }
  validateSync(a, u) {
    var s;
    let c = this.resolve(Object.assign({}, u, { value: a })),
      m,
      o = (s = u == null ? void 0 : u.disableStackTrace) != null ? s : c.spec.disableStackTrace;
    return (
      c._validate(
        a,
        Object.assign({}, u, { sync: !0 }),
        (h, S) => {
          throw (Er.isError(h) && (h.value = S), h);
        },
        (h, S) => {
          if (h.length) throw new Er(h, a, void 0, void 0, o);
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
        if (Er.isError(s)) return !1;
        throw s;
      }
    );
  }
  isValidSync(a, u) {
    try {
      return this.validateSync(a, u), !0;
    } catch (s) {
      if (Er.isError(s)) return !1;
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
      (s.tests = s.tests.filter((o) => !(o.OPTIONS.name === u.name && (m || o.OPTIONS.test === c.OPTIONS.test)))),
      s.tests.push(c),
      s
    );
  }
  when(a, u) {
    !Array.isArray(a) && typeof a != 'string' && ((u = a), (a = '.'));
    let s = this.clone(),
      c = xy(a).map((m) => new Xi(m));
    return (
      c.forEach((m) => {
        m.isSibling && s.deps.push(m.key);
      }),
      s.conditions.push(typeof u == 'function' ? new Ms(c, u) : Ms.fromOptions(c, u)),
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
            o = m.resolveAll(this.resolve);
          return o.includes(c) ? !0 : this.createError({ params: { values: Array.from(m).join(', '), resolved: o } });
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
            o = m.resolveAll(this.resolve);
          return o.includes(c) ? this.createError({ params: { values: Array.from(m).join(', '), resolved: o } }) : !0;
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
      { label: s, meta: c, optional: m, nullable: o } = u.spec;
    return {
      meta: c,
      label: s,
      optional: m,
      nullable: o,
      default: u.getDefault(a),
      type: u.type,
      oneOf: u._whitelist.describe(),
      notOneOf: u._blacklist.describe(),
      tests: u.tests
        .map((S) => ({ name: S.OPTIONS.name, params: S.OPTIONS.params }))
        .filter((S, x, B) => B.findIndex((v) => v.name === S.name) === x)
    };
  }
}
Dr.prototype.__isYupSchema__ = !0;
for (const n of ['validate', 'validateSync'])
  Dr.prototype[`${n}At`] = function (a, u, s = {}) {
    const { parent: c, parentPath: m, schema: o } = _S(this, a, u, s.context);
    return o[n](c && c[m], Object.assign({}, s, { parent: c, path: a }));
  };
for (const n of ['equals', 'is']) Dr.prototype[n] = Dr.prototype.oneOf;
for (const n of ['not', 'nope']) Dr.prototype[n] = Dr.prototype.notOneOf;
function Ay() {
  return new Ny();
}
class Ny extends Dr {
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
  isTrue(a = Uo.isValue) {
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
  isFalse(a = Uo.isValue) {
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
Ay.prototype = Ny.prototype;
const wS =
  /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function AS(n) {
  const a = Ro(n);
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
function Ro(n) {
  var a, u;
  const s = wS.exec(n);
  return s
    ? {
        year: qn(s[1]),
        month: qn(s[2], 1) - 1,
        day: qn(s[3], 1),
        hour: qn(s[4]),
        minute: qn(s[5]),
        second: qn(s[6]),
        millisecond: s[7] ? qn(s[7].substring(0, 3)) : 0,
        precision: (a = (u = s[7]) == null ? void 0 : u.length) != null ? a : void 0,
        z: s[8] || void 0,
        plusMinus: s[9] || void 0,
        hourOffset: qn(s[10]),
        minuteOffset: qn(s[11])
      }
    : null;
}
function qn(n, a = 0) {
  return Number(n) || a;
}
let NS =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  OS =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  TS =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  MS = '^\\d{4}-\\d{2}-\\d{2}',
  BS = '\\d{2}:\\d{2}:\\d{2}',
  US = '(([+-]\\d{2}(:?\\d{2})?)|Z)',
  RS = new RegExp(`${MS}T${BS}(\\.\\d+)?${US}$`),
  DS = (n) => an(n) || n === n.trim(),
  jS = {}.toString();
function gt() {
  return new Oy();
}
class Oy extends Dr {
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
          return c === jS ? a : c;
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
        test: (o) => (o === '' && s) || o.search(a) !== -1
      })
    );
  }
  email(a = vr.email) {
    return this.matches(NS, { name: 'email', message: a, excludeEmptyString: !0 });
  }
  url(a = vr.url) {
    return this.matches(OS, { name: 'url', message: a, excludeEmptyString: !0 });
  }
  uuid(a = vr.uuid) {
    return this.matches(TS, { name: 'uuid', message: a, excludeEmptyString: !1 });
  }
  datetime(a) {
    let u = '',
      s,
      c;
    return (
      a && (typeof a == 'object' ? ({ message: u = '', allowOffset: s = !1, precision: c = void 0 } = a) : (u = a)),
      this.matches(RS, { name: 'datetime', message: u || vr.datetime, excludeEmptyString: !0 })
        .test({
          name: 'datetime_offset',
          message: u || vr.datetime_offset,
          params: { allowOffset: s },
          skipAbsent: !0,
          test: (m) => {
            if (!m || s) return !0;
            const o = Ro(m);
            return o ? !!o.z : !1;
          }
        })
        .test({
          name: 'datetime_precision',
          message: u || vr.datetime_precision,
          params: { precision: c },
          skipAbsent: !0,
          test: (m) => {
            if (!m || c == null) return !0;
            const o = Ro(m);
            return o ? o.precision === c : !1;
          }
        })
    );
  }
  ensure() {
    return this.default('').transform((a) => (a === null ? '' : a));
  }
  trim(a = vr.trim) {
    return this.transform((u) => (u != null ? u.trim() : u)).test({ message: a, name: 'trim', test: DS });
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
gt.prototype = Oy.prototype;
let CS = (n) => n != +n;
function yt() {
  return new Ty();
}
class Ty extends Dr {
  constructor() {
    super({
      type: 'number',
      check(a) {
        return a instanceof Number && (a = a.valueOf()), typeof a == 'number' && !CS(a);
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
yt.prototype = Ty.prototype;
let kS = new Date(''),
  qS = (n) => Object.prototype.toString.call(n) === '[object Date]';
class Yo extends Dr {
  constructor() {
    super({
      type: 'date',
      check(a) {
        return qS(a) && !isNaN(a.getTime());
      }
    }),
      this.withMutation(() => {
        this.transform((a, u, s) =>
          !s.spec.coerce || s.isType(a) || a === null ? a : ((a = AS(a)), isNaN(a) ? Yo.INVALID_DATE : new Date(a))
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
  min(a, u = Bo.min) {
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
  max(a, u = Bo.max) {
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
Yo.INVALID_DATE = kS;
function zS(n, a = []) {
  let u = [],
    s = new Set(),
    c = new Set(a.map(([o, h]) => `${o}-${h}`));
  function m(o, h) {
    let S = Vi.split(o)[0];
    s.add(S), c.has(`${h}-${S}`) || u.push([h, S]);
  }
  for (const o of Object.keys(n)) {
    let h = n[o];
    s.add(o), Xi.isRef(h) && h.isSibling ? m(h.path, o) : Is(h) && 'deps' in h && h.deps.forEach((S) => m(S, o));
  }
  return mS.array(Array.from(s), u).reverse();
}
function Tp(n, a) {
  let u = 1 / 0;
  return (
    n.some((s, c) => {
      var m;
      if ((m = a.path) != null && m.includes(s)) return (u = c), !0;
    }),
    u
  );
}
function My(n) {
  return (a, u) => Tp(n, a) - Tp(n, u);
}
const By = (n, a, u) => {
  if (typeof n != 'string') return n;
  let s = n;
  try {
    s = JSON.parse(n);
  } catch {}
  return u.isType(s) ? s : n;
};
function ys(n) {
  if ('fields' in n) {
    const a = {};
    for (const [u, s] of Object.entries(n.fields)) a[u] = ys(s);
    return n.setFields(a);
  }
  if (n.type === 'array') {
    const a = n.optional();
    return a.innerType && (a.innerType = ys(a.innerType)), a;
  }
  return n.type === 'tuple' ? n.optional().clone({ types: n.spec.types.map(ys) }) : 'optional' in n ? n.optional() : n;
}
const IS = (n, a) => {
  const u = [...Vi.normalizePath(a)];
  if (u.length === 1) return u[0] in n;
  let s = u.pop(),
    c = Vi.getter(Vi.join(u), !0)(n);
  return !!(c && s in c);
};
let Mp = (n) => Object.prototype.toString.call(n) === '[object Object]';
function Bp(n, a) {
  let u = Object.keys(n.fields);
  return Object.keys(a).filter((s) => u.indexOf(s) === -1);
}
const LS = My([]);
function At(n) {
  return new Uy(n);
}
class Uy extends Dr {
  constructor(a) {
    super({
      type: 'object',
      check(u) {
        return Mp(u) || typeof u == 'function';
      }
    }),
      (this.fields = Object.create(null)),
      (this._sortErrors = LS),
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
      o = (s = u.stripUnknown) != null ? s : this.spec.noUnknown,
      h = [].concat(
        this._nodes,
        Object.keys(c).filter((v) => !this._nodes.includes(v))
      ),
      S = {},
      x = Object.assign({}, u, { parent: S, __validating: u.__validating || !1 }),
      B = !1;
    for (const v of h) {
      let _ = m[v],
        O = v in c;
      if (_) {
        let W,
          ce = c[v];
        (x.path = (u.path ? `${u.path}.` : '') + v), (_ = _.resolve({ value: ce, context: u.context, parent: S }));
        let de = _ instanceof Dr ? _.spec : void 0,
          ve = de == null ? void 0 : de.strict;
        if (de != null && de.strip) {
          B = B || v in c;
          continue;
        }
        (W = !u.__validating || !ve ? _.cast(c[v], x) : c[v]), W !== void 0 && (S[v] = W);
      } else O && !o && (S[v] = c[v]);
      (O !== v in S || S[v] !== c[v]) && (B = !0);
    }
    return B ? S : c;
  }
  _validate(a, u = {}, s, c) {
    let { from: m = [], originalValue: o = a, recursive: h = this.spec.recursive } = u;
    (u.from = [{ schema: this, value: o }, ...m]),
      (u.__validating = !0),
      (u.originalValue = o),
      super._validate(a, u, s, (S, x) => {
        if (!h || !Mp(x)) {
          c(S, x);
          return;
        }
        o = o || x;
        let B = [];
        for (let v of this._nodes) {
          let _ = this.fields[v];
          !_ ||
            Xi.isRef(_) ||
            B.push(_.asNestedTest({ options: u, key: v, parent: x, parentPath: u.path, originalParent: o }));
        }
        this.runTests({ tests: B, value: x, originalValue: o, options: u }, s, (v) => {
          c(v.sort(this._sortErrors).concat(S), x);
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
      const o = s[c];
      s[c] = o === void 0 ? m : o;
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
        let o = a;
        (c = o) != null && c.value && (o = Object.assign({}, o, { parent: o.value, value: o.value[s] })),
          (u[s] = m && 'getDefault' in m ? m.getDefault(o) : void 0);
      }),
      u
    );
  }
  setFields(a, u) {
    let s = this.clone();
    return (s.fields = a), (s._nodes = zS(a, u)), (s._sortErrors = My(Object.keys(a))), u && (s._excludedEdges = u), s;
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
    return ys(this);
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
      let o = m;
      return IS(m, a) && ((o = Object.assign({}, m)), s || delete o[a], (o[u] = c(m))), o;
    });
  }
  json() {
    return this.transform(By);
  }
  exact(a) {
    return this.test({
      name: 'exact',
      exclusive: !0,
      message: a || ms.exact,
      test(u) {
        if (u == null) return !0;
        const s = Bp(this.schema, u);
        return s.length === 0 || this.createError({ params: { properties: s.join(', ') } });
      }
    });
  }
  stripUnknown() {
    return this.clone({ noUnknown: !0 });
  }
  noUnknown(a = !0, u = ms.noUnknown) {
    typeof a != 'boolean' && ((u = a), (a = !0));
    let s = this.test({
      name: 'noUnknown',
      exclusive: !0,
      message: u,
      test(c) {
        if (c == null) return !0;
        const m = Bp(this.schema, c);
        return !a || m.length === 0 || this.createError({ params: { unknown: m.join(', ') } });
      }
    });
    return (s.spec.noUnknown = a), s;
  }
  unknown(a = !0, u = ms.noUnknown) {
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
    return this.transformKeys(Ao.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Ao.snakeCase);
  }
  constantCase() {
    return this.transformKeys((a) => Ao.snakeCase(a).toUpperCase());
  }
  describe(a) {
    const u = (a ? this.resolve(a) : this).clone(),
      s = super.describe(a);
    s.fields = {};
    for (const [m, o] of Object.entries(u.fields)) {
      var c;
      let h = a;
      (c = h) != null && c.value && (h = Object.assign({}, h, { parent: h.value, value: h.value[m] })),
        (s.fields[m] = o.describe(h));
    }
    return s;
  }
}
At.prototype = Uy.prototype;
function Ry(n) {
  return new Dy(n);
}
class Dy extends Dr {
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
    const m = s.map((o, h) => {
      const S = this.innerType.cast(o, Object.assign({}, u, { path: `${u.path || ''}[${h}]` }));
      return S !== o && (c = !0), S;
    });
    return c ? m : s;
  }
  _validate(a, u = {}, s, c) {
    var m;
    let o = this.innerType,
      h = (m = u.recursive) != null ? m : this.spec.recursive;
    u.originalValue != null && u.originalValue,
      super._validate(a, u, s, (S, x) => {
        var B;
        if (!h || !o || !this._typeCheck(x)) {
          c(S, x);
          return;
        }
        let v = new Array(x.length);
        for (let O = 0; O < x.length; O++) {
          var _;
          v[O] = o.asNestedTest({
            options: u,
            index: O,
            parent: x,
            parentPath: u.path,
            originalParent: (_ = u.originalValue) != null ? _ : a
          });
        }
        this.runTests(
          { value: x, tests: v, originalValue: (B = u.originalValue) != null ? B : a, options: u },
          s,
          (O) => c(O.concat(S), x)
        );
      });
  }
  clone(a) {
    const u = super.clone(a);
    return (u.innerType = this.innerType), u;
  }
  json() {
    return this.transform(By);
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
    if (!Is(a)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + Ln(a));
    return (u.innerType = a), (u.spec = Object.assign({}, u.spec, { types: a })), u;
  }
  length(a, u = ps.length) {
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
      (u = u || ps.min),
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
      (u = u || ps.max),
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
Ry.prototype = Dy.prototype;
const Ve = ({ label: n, labelDesc: a, children: u, error: s, required: c }) =>
    q.jsxs('label', {
      className: 'flex flex-col gap-1',
      children: [
        q.jsxs('span', {
          className: 'text-sm text-gray-500',
          children: [
            c && q.jsx('span', { className: 'text-red-500', children: '*' }),
            n,
            a && q.jsxs('span', { children: ['(', a, ')'] })
          ]
        }),
        u,
        s && q.jsx('span', { className: 'text-sm text-red-500', children: s.message })
      ]
    }),
  HS = [
    {
      chain: Ut.Bitcoin,
      name: 'Bitcoin',
      networks: [
        { network: ze.BtcMainNet, name: 'MainNet' },
        { network: ze.BtcTestNet, name: 'TestNet' }
      ]
    },
    {
      chain: Ut.Ethereum,
      name: 'Ethereum',
      networks: [
        { network: ze.EvmMainNet, name: 'MainNet' },
        { network: ze.EvmSepoliaNet, name: 'Sepolia' }
      ]
    },
    {
      chain: Ut.Solana,
      name: 'Solana',
      networks: [
        { network: ze.SolanaMainNet, name: 'MainNet' },
        { network: ze.SolanaTestNet, name: 'TestNet' }
      ]
    },
    { chain: Ut.Dfinity, name: 'Internet Computer', networks: [{ network: ze.DfinityMainNet, name: 'MainNet' }] },
    {
      chain: Ut.Ton,
      name: 'TON',
      networks: [
        { network: ze.TonMainNet, name: 'MainNet' },
        { network: ze.TonTestNet, name: 'TestNet' }
      ]
    },
    {
      chain: Ut.Tron,
      name: 'TRON',
      networks: [
        { network: ze.TronMainNet, name: 'MainNet' },
        { network: ze.TronShastaTestNet, name: 'Shasta TestNet' },
        { network: ze.TronNileTestNet, name: 'Nile TestNet' }
      ]
    },
    {
      chain: Ut.Kaspa,
      name: 'Kaspa',
      networks: [
        { network: ze.KaspaMainNet, name: 'MainNet' },
        { network: ze.KaspaTestNet, name: 'TestNet' }
      ]
    }
  ];
function Ls({ selectedChainIds: n, onChange: a, error: u }) {
  const s = (m, o) => n.some((h) => h.chain.equals(m) && h.network.equals(o)),
    c = (m, o) => {
      const h = new Lu(m, o),
        S = n.some((x) => x.equals(h));
      a(S ? n.filter((x) => !x.equals(h)) : [...n, h]);
    };
  return q.jsx(Ve, {
    label: 'ChainIds',
    labelDesc: 'select multiple chains',
    error: u,
    children: q.jsx('div', {
      className: 'flex flex-col gap-1 max-h-80 overflow-y-auto p-2 border rounded',
      children: HS.map((m) =>
        q.jsxs(
          'div',
          {
            children: [
              q.jsx('div', { className: 'font-bold mt-1', children: m.name }),
              q.jsx('div', {
                className: 'ml-4',
                children: m.networks.map((o) =>
                  q.jsxs(
                    'label',
                    {
                      className: 'flex items-center gap-2',
                      children: [
                        q.jsx('input', {
                          type: 'checkbox',
                          checked: s(m.chain, o.network),
                          onChange: () => c(m.chain, o.network)
                        }),
                        q.jsxs('span', { children: [o.name, ' (', m.chain.toString(), '_', o.network.toString(), ')'] })
                      ]
                    },
                    o.network.toString()
                  )
                )
              })
            ]
          },
          m.chain.toString()
        )
      )
    })
  });
}
function Hs({ selectedAssetTypes: n, onChange: a, error: u }) {
  const s = (c) => {
    n.includes(c) ? a(n.filter((m) => m !== c)) : a([...n, c]);
  };
  return q.jsx(Ve, {
    label: 'ChainAssetTypes',
    labelDesc: 'select multiple types',
    error: u,
    children: q.jsx('div', {
      className: 'flex flex-col gap-1 max-h-40 overflow-y-auto p-2 border rounded',
      children: Object.entries(vs)
        .filter(([c]) => isNaN(Number(c)))
        .map(([c, m]) =>
          q.jsxs(
            'label',
            {
              className: 'flex items-center gap-2',
              children: [
                q.jsx('input', { type: 'checkbox', checked: n.includes(Number(m)), onChange: () => s(Number(m)) }),
                q.jsxs('span', { children: [c, ' (', m, ')'] })
              ]
            },
            m
          )
        )
    })
  });
}
const GS = At({
  chainIds: At().nullable(),
  chainAssetTypes: At().nullable(),
  limit: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  offset: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  orderBy: gt()
});
function FS({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    [h, S] = He.useState([]),
    [x, B] = He.useState([]),
    {
      register: v,
      handleSubmit: _,
      formState: { errors: O }
    } = Kt({ resolver: Jt(GS) }),
    W = _(async (ce) => {
      u(!0), c(null), o('');
      try {
        const de = {
          chainIds: x.length > 0 ? x : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0,
          limit: ce.limit ?? void 0,
          offset: ce.offset ?? void 0,
          orderBy: ce.orderBy || void 0
        };
        c(await n.getAssets(de));
      } catch (de) {
        o(de.message ?? JSON.stringify(de));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetAssets',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ls, { selectedChainIds: x, onChange: B, error: O.chainIds }),
        q.jsx(Hs, { selectedAssetTypes: h, onChange: S, error: O.chainAssetTypes }),
        q.jsx(Ve, {
          label: 'Limit',
          error: O.limit,
          children: q.jsx('input', { type: 'number', className: 'input', ...v('limit') })
        }),
        q.jsx(Ve, {
          label: 'Offset',
          error: O.offset,
          children: q.jsx('input', { type: 'number', className: 'input', ...v('offset') })
        }),
        q.jsx(Ve, {
          label: 'OrderBy',
          error: O.orderBy,
          children: q.jsx('input', { type: 'text', className: 'input', ...v('orderBy') })
        }),
        q.jsx('button', { className: 'btn', onClick: W, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const VS = At({ assetId: gt().required() });
function YS({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      handleSubmit: S,
      formState: { errors: x }
    } = Kt({ resolver: Jt(VS) }),
    B = S(async (v) => {
      u(!0), c(null), o('');
      try {
        const _ = BigInt(v.assetId);
        c(await n.getAsset(_));
      } catch (_) {
        o(_.message ?? JSON.stringify(_));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetAsset',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'AssetId',
          error: x.assetId,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('assetId') })
        }),
        q.jsx('button', { className: 'btn', onClick: B, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const $S = At({
  chainIds: At().nullable(),
  chainAssetTypes: At().nullable(),
  baseAssetId: gt(),
  quoteAssetId: gt(),
  limit: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  offset: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  orderBy: gt()
});
function XS({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    [h, S] = He.useState([]),
    [x, B] = He.useState([]),
    {
      register: v,
      handleSubmit: _,
      formState: { errors: O }
    } = Kt({ resolver: Jt($S) }),
    W = _(async (ce) => {
      u(!0), c(null), o('');
      try {
        const de = {
          chainIds: x.length > 0 ? x : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0,
          baseAssetId: ce.baseAssetId ? BigInt(ce.baseAssetId) : void 0,
          quoteAssetId: ce.quoteAssetId ? BigInt(ce.quoteAssetId) : void 0,
          limit: ce.limit ?? void 0,
          offset: ce.offset ?? void 0,
          orderBy: ce.orderBy || void 0
        };
        c(await n.getMarkets(de));
      } catch (de) {
        o(de.message ?? JSON.stringify(de));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetMarkets',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ls, { selectedChainIds: x, onChange: B, error: O.chainIds }),
        q.jsx(Hs, { selectedAssetTypes: h, onChange: S, error: O.chainAssetTypes }),
        q.jsx(Ve, {
          label: 'BaseAssetId',
          error: O.baseAssetId,
          children: q.jsx('input', { type: 'number', className: 'input', ...v('baseAssetId') })
        }),
        q.jsx(Ve, {
          label: 'QuoteAssetId',
          error: O.quoteAssetId,
          children: q.jsx('input', { type: 'number', className: 'input', ...v('quoteAssetId') })
        }),
        q.jsx(Ve, {
          label: 'Limit',
          error: O.limit,
          children: q.jsx('input', { type: 'number', className: 'input', ...v('limit') })
        }),
        q.jsx(Ve, {
          label: 'Offset',
          error: O.offset,
          children: q.jsx('input', { type: 'number', className: 'input', ...v('offset') })
        }),
        q.jsx(Ve, {
          label: 'OrderBy',
          error: O.orderBy,
          children: q.jsx('input', { type: 'text', className: 'input', ...v('orderBy') })
        }),
        q.jsx('button', { className: 'btn', onClick: W, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const ZS = At({ marketId: gt().required() });
function QS({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      handleSubmit: S,
      formState: { errors: x }
    } = Kt({ resolver: Jt(ZS) }),
    B = S(async (v) => {
      u(!0), c(null), o('');
      try {
        const _ = BigInt(v.marketId);
        c(await n.getMarket(_));
      } catch (_) {
        o(_.message ?? JSON.stringify(_));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetMarket',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: x.marketId,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx('button', { className: 'btn', onClick: B, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const KS = At({ marketId: gt(), chainIds: At().nullable(), chainAssetTypes: At().nullable() });
function JS({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    [h, S] = He.useState([]),
    [x, B] = He.useState([]),
    {
      register: v,
      handleSubmit: _,
      formState: { errors: O }
    } = Kt({ resolver: Jt(KS) }),
    W = _(async (ce) => {
      u(!0), c(null), o('');
      try {
        const de = {
          marketId: ce.marketId ? BigInt(ce.marketId) : void 0,
          chainIds: x.length > 0 ? x : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0
        };
        c(await n.getMarkets24HrTicker(de));
      } catch (de) {
        o(de.message ?? JSON.stringify(de));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetMarkets24HrTicker',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: O.marketId,
          children: q.jsx('input', { type: 'number', className: 'input', ...v('marketId') })
        }),
        q.jsx(Ls, { selectedChainIds: x, onChange: B, error: O.chainIds }),
        q.jsx(Hs, { selectedAssetTypes: h, onChange: S, error: O.chainAssetTypes }),
        q.jsx('button', { className: 'btn', onClick: W, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const WS = At({ marketId: gt(), chainIds: At().nullable(), chainAssetTypes: At().nullable() });
function PS({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    [h, S] = He.useState([]),
    [x, B] = He.useState([]),
    {
      register: v,
      handleSubmit: _,
      formState: { errors: O }
    } = Kt({ resolver: Jt(WS) }),
    W = _(async (ce) => {
      u(!0), c(null), o('');
      try {
        const de = {
          marketId: ce.marketId ? BigInt(ce.marketId) : void 0,
          chainIds: x.length > 0 ? x : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0
        };
        c(await n.getMarkets24HrTickerExtended(de));
      } catch (de) {
        o(de.message ?? JSON.stringify(de));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetMarkets24HrTickerExtended',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: O.marketId,
          children: q.jsx('input', { type: 'number', className: 'input', ...v('marketId') })
        }),
        q.jsx(Ls, { selectedChainIds: x, onChange: B, error: O.chainIds }),
        q.jsx(Hs, { selectedAssetTypes: h, onChange: S, error: O.chainAssetTypes }),
        q.jsx('button', { className: 'btn', onClick: W, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const e2 = At({ marketId: gt() });
function t2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      handleSubmit: S,
      formState: { errors: x }
    } = Kt({ resolver: Jt(e2) }),
    B = S(async (v) => {
      u(!0), c(null), o('');
      try {
        const _ = v.marketId ? BigInt(v.marketId) : void 0;
        c(await n.getMarketsSwapInfo(_));
      } catch (_) {
        o(_.message ?? JSON.stringify(_));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetMarketsSwapInfo',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: x.marketId,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx('button', { className: 'btn', onClick: B, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const r2 = At({
  marketId: gt().required(),
  tickSpace: yt()
    .oneOf(
      Object.keys(Ua)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  limit: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  offset: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  orderBy: gt()
});
function n2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      control: S,
      handleSubmit: x,
      formState: { errors: B }
    } = Kt({ resolver: Jt(r2) }),
    v = x(async (_) => {
      u(!0), c(null), o('');
      try {
        const O = {
          marketId: BigInt(_.marketId),
          tickSpace: _.tickSpace,
          limit: _.limit ?? void 0,
          offset: _.offset ?? void 0,
          orderBy: _.orderBy || void 0
        };
        c(await n.getMarketKline(O));
      } catch (O) {
        o(O.message ?? JSON.stringify(O));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetMarketKline',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: B.marketId,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx(Ve, {
          label: 'TickSpace',
          error: B.tickSpace,
          required: !0,
          children: q.jsx(_r, {
            name: 'tickSpace',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Ua)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'getMarketKline-tickSpace',
                            type: 'radio',
                            checked: _.value === Number(Ua[O]),
                            onChange: (W) => {
                              W.target.checked && _.onChange(Number(Ua[O]));
                            }
                          })
                        ]
                      },
                      O
                    )
                  )
              })
          })
        }),
        q.jsx(Ve, {
          label: 'Limit',
          error: B.limit,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        q.jsx(Ve, {
          label: 'Offset',
          error: B.offset,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        q.jsx(Ve, {
          label: 'OrderBy',
          error: B.orderBy,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        q.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const i2 = At({
  index: yt()
    .oneOf(
      Object.keys(Ba)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  marketId: gt().required(),
  limit: yt().required().min(1).max(100)
});
function a2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      control: S,
      handleSubmit: x,
      formState: { errors: B }
    } = Kt({ defaultValues: { limit: 10 }, resolver: Jt(i2) }),
    v = x(async (_) => {
      u(!0), c(null), o('');
      try {
        const O = { index: _.index, marketId: BigInt(_.marketId), limit: _.limit };
        c(await n.getMarketDepth(O));
      } catch (O) {
        o(O.message ?? JSON.stringify(O));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetMarketDepth',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'Index',
          error: B.index,
          required: !0,
          children: q.jsx(_r, {
            name: 'index',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Ba)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'getMarketDepth-index',
                            type: 'radio',
                            checked: _.value === Number(Ba[O]),
                            onChange: (W) => {
                              W.target.checked && _.onChange(Number(Ba[O]));
                            }
                          })
                        ]
                      },
                      O
                    )
                  )
              })
          })
        }),
        q.jsx(Ve, {
          label: 'MarketId',
          error: B.marketId,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx(Ve, {
          label: 'Limit',
          error: B.limit,
          required: !0,
          children: q.jsx('input', { type: 'number', min: 1, max: 100, className: 'input', ...h('limit') })
        }),
        q.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
var gs = { exports: {} },
  u2 = gs.exports,
  Up;
function l2() {
  return (
    Up ||
      ((Up = 1),
      (function (n, a) {
        (function (u, s) {
          n.exports = s();
        })(u2, function () {
          var u = 1e3,
            s = 6e4,
            c = 36e5,
            m = 'millisecond',
            o = 'second',
            h = 'minute',
            S = 'hour',
            x = 'day',
            B = 'week',
            v = 'month',
            _ = 'quarter',
            O = 'year',
            W = 'date',
            ce = 'Invalid Date',
            de = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
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
                  I = T % 60;
                return (C <= 0 ? '+' : '-') + je(G, 2, '0') + ':' + je(I, 2, '0');
              },
              m: function X(C, T) {
                if (C.date() < T.date()) return -X(T, C);
                var G = 12 * (T.year() - C.year()) + (T.month() - C.month()),
                  I = C.clone().add(G, v),
                  ue = T - I < 0,
                  D = C.clone().add(G + (ue ? -1 : 1), v);
                return +(-(G + (T - I) / (ue ? I - D : D - I)) || 0);
              },
              a: function (X) {
                return X < 0 ? Math.ceil(X) || 0 : Math.floor(X);
              },
              p: function (X) {
                return (
                  { M: v, y: O, w: B, d: x, D: W, h: S, m: h, s: o, ms: m, Q: _ }[X] ||
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
            we = {};
          we[_e] = Q;
          var De = '$isDayjsObject',
            y = function (X) {
              return X instanceof V || !(!X || !X[De]);
            },
            E = function X(C, T, G) {
              var I;
              if (!C) return _e;
              if (typeof C == 'string') {
                var ue = C.toLowerCase();
                we[ue] && (I = ue), T && ((we[ue] = T), (I = ue));
                var D = C.split('-');
                if (!I && D.length > 1) return X(D[0]);
              } else {
                var ee = C.name;
                (we[ee] = C), (I = ee);
              }
              return !G && I && (_e = I), I || (!G && _e);
            },
            w = function (X, C) {
              if (y(X)) return X.clone();
              var T = typeof C == 'object' ? C : {};
              return (T.date = X), (T.args = arguments), new V(T);
            },
            F = We;
          (F.l = E),
            (F.i = y),
            (F.w = function (X, C) {
              return w(X, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
            });
          var V = (function () {
              function X(T) {
                (this.$L = E(T.locale, null, !0)), this.parse(T), (this.$x = this.$x || T.x || {}), (this[De] = !0);
              }
              var C = X.prototype;
              return (
                (C.parse = function (T) {
                  (this.$d = (function (G) {
                    var I = G.date,
                      ue = G.utc;
                    if (I === null) return new Date(NaN);
                    if (F.u(I)) return new Date();
                    if (I instanceof Date) return new Date(I);
                    if (typeof I == 'string' && !/Z$/i.test(I)) {
                      var D = I.match(de);
                      if (D) {
                        var ee = D[2] - 1 || 0,
                          be = (D[7] || '0').substring(0, 3);
                        return ue
                          ? new Date(Date.UTC(D[1], ee, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, be))
                          : new Date(D[1], ee, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, be);
                      }
                    }
                    return new Date(I);
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
                  return this.$d.toString() !== ce;
                }),
                (C.isSame = function (T, G) {
                  var I = w(T);
                  return this.startOf(G) <= I && I <= this.endOf(G);
                }),
                (C.isAfter = function (T, G) {
                  return w(T) < this.startOf(G);
                }),
                (C.isBefore = function (T, G) {
                  return this.endOf(G) < w(T);
                }),
                (C.$g = function (T, G, I) {
                  return F.u(T) ? this[G] : this.set(I, T);
                }),
                (C.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (C.valueOf = function () {
                  return this.$d.getTime();
                }),
                (C.startOf = function (T, G) {
                  var I = this,
                    ue = !!F.u(G) || G,
                    D = F.p(T),
                    ee = function (Re, M) {
                      var R = F.w(I.$u ? Date.UTC(I.$y, M, Re) : new Date(I.$y, M, Re), I);
                      return ue ? R : R.endOf(x);
                    },
                    be = function (Re, M) {
                      return F.w(
                        I.toDate()[Re].apply(I.toDate('s'), (ue ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(M)),
                        I
                      );
                    },
                    me = this.$W,
                    A = this.$M,
                    Ue = this.$D,
                    Ne = 'set' + (this.$u ? 'UTC' : '');
                  switch (D) {
                    case O:
                      return ue ? ee(1, 0) : ee(31, 11);
                    case v:
                      return ue ? ee(1, A) : ee(0, A + 1);
                    case B:
                      var Ke = this.$locale().weekStart || 0,
                        Oe = (me < Ke ? me + 7 : me) - Ke;
                      return ee(ue ? Ue - Oe : Ue + (6 - Oe), A);
                    case x:
                    case W:
                      return be(Ne + 'Hours', 0);
                    case S:
                      return be(Ne + 'Minutes', 1);
                    case h:
                      return be(Ne + 'Seconds', 2);
                    case o:
                      return be(Ne + 'Milliseconds', 3);
                    default:
                      return this.clone();
                  }
                }),
                (C.endOf = function (T) {
                  return this.startOf(T, !1);
                }),
                (C.$set = function (T, G) {
                  var I,
                    ue = F.p(T),
                    D = 'set' + (this.$u ? 'UTC' : ''),
                    ee = ((I = {}),
                    (I[x] = D + 'Date'),
                    (I[W] = D + 'Date'),
                    (I[v] = D + 'Month'),
                    (I[O] = D + 'FullYear'),
                    (I[S] = D + 'Hours'),
                    (I[h] = D + 'Minutes'),
                    (I[o] = D + 'Seconds'),
                    (I[m] = D + 'Milliseconds'),
                    I)[ue],
                    be = ue === x ? this.$D + (G - this.$W) : G;
                  if (ue === v || ue === O) {
                    var me = this.clone().set(W, 1);
                    me.$d[ee](be), me.init(), (this.$d = me.set(W, Math.min(this.$D, me.daysInMonth())).$d);
                  } else ee && this.$d[ee](be);
                  return this.init(), this;
                }),
                (C.set = function (T, G) {
                  return this.clone().$set(T, G);
                }),
                (C.get = function (T) {
                  return this[F.p(T)]();
                }),
                (C.add = function (T, G) {
                  var I,
                    ue = this;
                  T = Number(T);
                  var D = F.p(G),
                    ee = function (A) {
                      var Ue = w(ue);
                      return F.w(Ue.date(Ue.date() + Math.round(A * T)), ue);
                    };
                  if (D === v) return this.set(v, this.$M + T);
                  if (D === O) return this.set(O, this.$y + T);
                  if (D === x) return ee(1);
                  if (D === B) return ee(7);
                  var be = ((I = {}), (I[h] = s), (I[S] = c), (I[o] = u), I)[D] || 1,
                    me = this.$d.getTime() + T * be;
                  return F.w(me, this);
                }),
                (C.subtract = function (T, G) {
                  return this.add(-1 * T, G);
                }),
                (C.format = function (T) {
                  var G = this,
                    I = this.$locale();
                  if (!this.isValid()) return I.invalidDate || ce;
                  var ue = T || 'YYYY-MM-DDTHH:mm:ssZ',
                    D = F.z(this),
                    ee = this.$H,
                    be = this.$m,
                    me = this.$M,
                    A = I.weekdays,
                    Ue = I.months,
                    Ne = I.meridiem,
                    Ke = function (M, R, Z, ie) {
                      return (M && (M[R] || M(G, ue))) || Z[R].slice(0, ie);
                    },
                    Oe = function (M) {
                      return F.s(ee % 12 || 12, M, '0');
                    },
                    Re =
                      Ne ||
                      function (M, R, Z) {
                        var ie = M < 12 ? 'AM' : 'PM';
                        return Z ? ie.toLowerCase() : ie;
                      };
                  return ue.replace(ve, function (M, R) {
                    return (
                      R ||
                      (function (Z) {
                        switch (Z) {
                          case 'YY':
                            return String(G.$y).slice(-2);
                          case 'YYYY':
                            return F.s(G.$y, 4, '0');
                          case 'M':
                            return me + 1;
                          case 'MM':
                            return F.s(me + 1, 2, '0');
                          case 'MMM':
                            return Ke(I.monthsShort, me, Ue, 3);
                          case 'MMMM':
                            return Ke(Ue, me);
                          case 'D':
                            return G.$D;
                          case 'DD':
                            return F.s(G.$D, 2, '0');
                          case 'd':
                            return String(G.$W);
                          case 'dd':
                            return Ke(I.weekdaysMin, G.$W, A, 2);
                          case 'ddd':
                            return Ke(I.weekdaysShort, G.$W, A, 3);
                          case 'dddd':
                            return A[G.$W];
                          case 'H':
                            return String(ee);
                          case 'HH':
                            return F.s(ee, 2, '0');
                          case 'h':
                            return Oe(1);
                          case 'hh':
                            return Oe(2);
                          case 'a':
                            return Re(ee, be, !0);
                          case 'A':
                            return Re(ee, be, !1);
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
                            return D;
                        }
                        return null;
                      })(M) ||
                      D.replace(':', '')
                    );
                  });
                }),
                (C.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (C.diff = function (T, G, I) {
                  var ue,
                    D = this,
                    ee = F.p(G),
                    be = w(T),
                    me = (be.utcOffset() - this.utcOffset()) * s,
                    A = this - be,
                    Ue = function () {
                      return F.m(D, be);
                    };
                  switch (ee) {
                    case O:
                      ue = Ue() / 12;
                      break;
                    case v:
                      ue = Ue();
                      break;
                    case _:
                      ue = Ue() / 3;
                      break;
                    case B:
                      ue = (A - me) / 6048e5;
                      break;
                    case x:
                      ue = (A - me) / 864e5;
                      break;
                    case S:
                      ue = A / c;
                      break;
                    case h:
                      ue = A / s;
                      break;
                    case o:
                      ue = A / u;
                      break;
                    default:
                      ue = A;
                  }
                  return I ? ue : F.a(ue);
                }),
                (C.daysInMonth = function () {
                  return this.endOf(v).$D;
                }),
                (C.$locale = function () {
                  return we[this.$L];
                }),
                (C.locale = function (T, G) {
                  if (!T) return this.$L;
                  var I = this.clone(),
                    ue = E(T, G, !0);
                  return ue && (I.$L = ue), I;
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
            (w.prototype = Y),
            [
              ['$ms', m],
              ['$s', o],
              ['$m', h],
              ['$H', S],
              ['$W', x],
              ['$M', v],
              ['$y', O],
              ['$D', W]
            ].forEach(function (X) {
              Y[X[1]] = function (C) {
                return this.$g(C, X[0], X[1]);
              };
            }),
            (w.extend = function (X, C) {
              return X.$i || (X(C, V, w), (X.$i = !0)), w;
            }),
            (w.locale = E),
            (w.isDayjs = y),
            (w.unix = function (X) {
              return w(1e3 * X);
            }),
            (w.en = we[_e]),
            (w.Ls = we),
            (w.p = {}),
            w
          );
        });
      })(gs)),
    gs.exports
  );
}
var s2 = l2();
const Us = Iu(s2),
  c2 = At({
    marketId: gt().required(),
    tradedAtStart: yt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    tradedAtEnd: yt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    limit: yt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    offset: yt()
      .nullable()
      .transform((n, a) => (a === '' ? null : n)),
    orderBy: gt()
  });
function f2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      control: S,
      handleSubmit: x,
      formState: { errors: B }
    } = Kt({ resolver: Jt(c2) }),
    v = x(async (_) => {
      u(!0), c(null), o('');
      try {
        const O = {
          marketId: BigInt(_.marketId),
          tradedAtStart: _.tradedAtStart ?? void 0,
          tradedAtEnd: _.tradedAtEnd ?? void 0,
          limit: _.limit ?? void 0,
          offset: _.offset ?? void 0,
          orderBy: _.orderBy || void 0
        };
        c(await n.getMarketTrade(O));
      } catch (O) {
        o(O.message ?? JSON.stringify(O));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetMarketTrade',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: B.marketId,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx(Ve, {
          label: 'TradedAtStart',
          error: B.tradedAtStart,
          children: q.jsx(_r, {
            control: S,
            name: 'tradedAtStart',
            render: ({ field: _ }) =>
              q.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ..._,
                value: _.value ? Us(_.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (O) => {
                  _.onChange(O.target.value ? new Date(O.target.value).getTime() : void 0);
                }
              })
          })
        }),
        q.jsx(Ve, {
          label: 'TradedAtEnd',
          error: B.tradedAtEnd,
          children: q.jsx(_r, {
            control: S,
            name: 'tradedAtEnd',
            render: ({ field: _ }) =>
              q.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ..._,
                value: _.value ? Us(_.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (O) => {
                  _.onChange(O.target.value ? new Date(O.target.value).getTime() : void 0);
                }
              })
          })
        }),
        q.jsx(Ve, {
          label: 'Limit',
          error: B.limit,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        q.jsx(Ve, {
          label: 'Offset',
          error: B.offset,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        q.jsx(Ve, {
          label: 'OrderBy',
          error: B.orderBy,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        q.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const o2 = At({
  marketId: gt().required(),
  orderSide: yt()
    .oneOf(
      Object.keys(wt)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  price: yt().required(),
  volume: yt().required(),
  baseAssetDecimals: yt().required(),
  quoteAssetDecimals: yt().required()
});
function h2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      control: S,
      handleSubmit: x,
      formState: { errors: B }
    } = Kt({ resolver: Jt(o2) }),
    v = x(async (_) => {
      u(!0), c(null), o('');
      try {
        const O = {
            marketId: BigInt(_.marketId),
            orderCategory: zn.LimitOrder,
            limitOrderDetails: { orderSide: _.orderSide, price: _.price, volume: _.volume }
          },
          W = { baseAssetDecimals: _.baseAssetDecimals, quoteAssetDecimals: _.quoteAssetDecimals };
        await n.submitSpotOrder(O, W), c(!0);
      } catch (O) {
        o(O.message ?? JSON.stringify(O)), c(!1);
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'SubmitSpotOrderLimit',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: B.marketId,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx(Ve, {
          label: 'OrderSide',
          error: B.orderSide,
          required: !0,
          children: q.jsx(_r, {
            name: 'orderSide',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(wt)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'SubmitSpotOrderLimit-orderSide',
                            type: 'radio',
                            value: Number(wt[O]),
                            checked: _.value === Number(wt[O]),
                            onChange: (W) => {
                              W.target.checked && _.onChange(Number(wt[O]));
                            }
                          })
                        ]
                      },
                      O
                    )
                  )
              })
          })
        }),
        q.jsx(Ve, {
          label: 'Price',
          error: B.price,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('price') })
        }),
        q.jsx(Ve, {
          label: 'Volume',
          error: B.volume,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('volume') })
        }),
        q.jsx(Ve, {
          label: 'BaseAssetDecimals',
          error: B.baseAssetDecimals,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('baseAssetDecimals') })
        }),
        q.jsx(Ve, {
          label: 'QuoteAssetDecimals',
          error: B.quoteAssetDecimals,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('quoteAssetDecimals') })
        }),
        q.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const d2 = At({
  marketId: gt().required(),
  orderSide: yt()
    .oneOf(
      Object.keys(wt)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  exactTokensType: yt()
    .oneOf(
      Object.keys(yi)
        .filter((n) => !isNaN(Number(n)))
        .map(Number)
    )
    .required(),
  exactTokens: yt().required(),
  minOut: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  maxIn: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  baseAssetDecimals: yt().required(),
  quoteAssetDecimals: yt().required()
});
function m2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      control: S,
      handleSubmit: x,
      formState: { errors: B }
    } = Kt({ resolver: Jt(d2) }),
    v = x(async (_) => {
      u(!0), c(null), o('');
      try {
        const O = {
            marketId: BigInt(_.marketId),
            orderCategory: zn.SwapOrder,
            swapV2OrderDetails: {
              orderSide: _.orderSide,
              exactTokensType: _.exactTokensType,
              exactTokens: _.exactTokens,
              minOut: _.minOut ?? void 0,
              maxIn: _.maxIn ?? void 0
            }
          },
          W = { baseAssetDecimals: _.baseAssetDecimals, quoteAssetDecimals: _.quoteAssetDecimals };
        await n.submitSpotOrder(O, W), c(!0);
      } catch (O) {
        o(O.message ?? JSON.stringify(O)), c(!1);
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'SubmitSpotOrderSwapV2',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: B.marketId,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx(Ve, {
          label: 'OrderSide',
          error: B.orderSide,
          required: !0,
          children: q.jsx(_r, {
            name: 'orderSide',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(wt)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'SubmitSpotOrderSwapV2-orderSide',
                            type: 'radio',
                            value: Number(wt[O]),
                            checked: _.value === Number(wt[O]),
                            onChange: (W) => {
                              W.target.checked && _.onChange(Number(wt[O]));
                            }
                          })
                        ]
                      },
                      O
                    )
                  )
              })
          })
        }),
        q.jsx(Ve, {
          label: 'ExactTokensType',
          error: B.exactTokensType,
          required: !0,
          children: q.jsx(_r, {
            name: 'exactTokensType',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(yi)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'SubmitSpotOrderSwapV2-exactTokensType',
                            type: 'radio',
                            value: Number(yi[O]),
                            checked: _.value === Number(yi[O]),
                            onChange: (W) => {
                              W.target.checked && _.onChange(Number(yi[O]));
                            }
                          })
                        ]
                      },
                      O
                    )
                  )
              })
          })
        }),
        q.jsx(Ve, {
          label: 'ExactTokens',
          error: B.exactTokens,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('exactTokens') })
        }),
        q.jsx(Ve, {
          label: 'MinOut',
          error: B.minOut,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('minOut') })
        }),
        q.jsx(Ve, {
          label: 'MaxIn',
          error: B.maxIn,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('maxIn') })
        }),
        q.jsx(Ve, {
          label: 'BaseAssetDecimals',
          error: B.baseAssetDecimals,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('baseAssetDecimals') })
        }),
        q.jsx(Ve, {
          label: 'QuoteAssetDecimals',
          error: B.quoteAssetDecimals,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('quoteAssetDecimals') })
        }),
        q.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const p2 = At({
  marketId: gt(),
  orderId: gt(),
  orderSide: yt().oneOf(
    Object.keys(wt)
      .filter((n) => !isNaN(Number(n)))
      .map(Number)
  ),
  isCancelAll: Ay()
});
function y2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      control: S,
      handleSubmit: x,
      formState: { errors: B }
    } = Kt({ resolver: Jt(p2) }),
    v = x(async (_) => {
      var ce, de;
      u(!0), c(null), o('');
      const O = (ce = _.marketId) == null ? void 0 : ce.trim(),
        W = (de = _.orderId) == null ? void 0 : de.trim();
      try {
        const ve = {
          marketId: O ? BigInt(O) : void 0,
          orderId: W || void 0,
          orderSide: _.orderSide ?? void 0,
          isCancelAll: _.isCancelAll ?? void 0
        };
        await n.cancelSpotOrder(ve), c(!0);
      } catch (ve) {
        o(ve.message ?? JSON.stringify(ve)), c(!1);
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'CancelSpotOrder',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'MarketId',
          error: B.marketId,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx(Ve, {
          label: 'OrderId',
          error: B.orderId,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        q.jsx(Ve, {
          label: 'OrderSide',
          error: B.orderSide,
          children: q.jsx(_r, {
            name: 'orderSide',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(wt)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'CancelSpotOrder-orderSide',
                            type: 'radio',
                            value: Number(wt[O]),
                            checked: _.value === Number(wt[O]),
                            onChange: (W) => {
                              W.target.checked && _.onChange(Number(wt[O]));
                            }
                          })
                        ]
                      },
                      O
                    )
                  )
              })
          })
        }),
        q.jsx(Ve, {
          label: 'isCancelAll',
          error: B.isCancelAll,
          children: q.jsxs('label', {
            className: 'flex items-center gap-1',
            children: [
              q.jsx('span', { children: 'IsCancelAll' }),
              q.jsx('input', { type: 'checkbox', className: 'input', ...h('isCancelAll') })
            ]
          })
        }),
        q.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const g2 = At({
  hin: gt().required(),
  status: Ry(
    yt()
      .oneOf(
        Object.keys(mi)
          .filter((n) => !isNaN(Number(n)))
          .map(Number)
      )
      .required()
  ),
  marketId: gt(),
  orderIds: gt(),
  orderCategory: yt().oneOf(
    Object.keys(zn)
      .filter((n) => !isNaN(Number(n)))
      .map(Number)
  ),
  orderSide: yt().oneOf(
    Object.keys(wt)
      .filter((n) => !isNaN(Number(n)))
      .map(Number)
  ),
  createdAtStart: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  createdAtEnd: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  limit: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  offset: yt()
    .nullable()
    .transform((n, a) => (a === '' ? null : n)),
  orderBy: gt()
});
function v2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      control: S,
      handleSubmit: x,
      formState: { errors: B }
    } = Kt({ resolver: Jt(g2) }),
    v = x(async (_) => {
      var O;
      u(!0), c(null), o('');
      try {
        const W = {
          hin: BigInt(_.hin),
          status: (O = _.status) != null && O.length ? _.status : void 0,
          marketId: _.marketId ? BigInt(_.marketId) : void 0,
          orderIds: _.orderIds ? _.orderIds.split(',').map((ce) => ce.trim()) : void 0,
          orderCategory: _.orderCategory ?? void 0,
          orderSide: _.orderSide ?? void 0,
          createdAtStart: _.createdAtStart ?? void 0,
          createdAtEnd: _.createdAtEnd ?? void 0,
          limit: _.limit ?? void 0,
          offset: _.offset ?? void 0,
          orderBy: _.orderBy || void 0
        };
        c(await n.getOrders(W));
      } catch (W) {
        o(W.message ?? JSON.stringify(W));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetOrders',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'HIN(Hibit chain identity number)',
          error: B.hin,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('hin') })
        }),
        q.jsx(Ve, {
          label: 'Status',
          error: B.status,
          children: q.jsx(_r, {
            name: 'status',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(mi)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) => {
                    var W;
                    return q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'GetOrders-status',
                            type: 'checkbox',
                            value: Number(mi[O]),
                            checked: ((W = _.value) == null ? void 0 : W.includes(Number(mi[O]))) ?? !1,
                            onChange: (ce) => {
                              ce.target.checked
                                ? _.onChange([...(_.value ?? []), Number(mi[O])])
                                : _.onChange((_.value ?? []).filter((de) => de !== Number(mi[O])));
                            }
                          })
                        ]
                      },
                      O
                    );
                  })
              })
          })
        }),
        q.jsx(Ve, {
          label: 'MarketId',
          error: B.marketId,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        q.jsx(Ve, {
          label: 'OrderIds',
          error: B.orderIds,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('orderIds') })
        }),
        q.jsx(Ve, {
          label: 'OrderCategory',
          error: B.orderCategory,
          children: q.jsx(_r, {
            name: 'orderCategory',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(zn)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'GetOrders-orderCategory',
                            type: 'radio',
                            value: Number(zn[O]),
                            checked: _.value === Number(zn[O]),
                            onChange: (W) => {
                              W.target.checked && _.onChange(Number(zn[O]));
                            }
                          })
                        ]
                      },
                      O
                    )
                  )
              })
          })
        }),
        q.jsx(Ve, {
          label: 'OrderSide',
          error: B.orderSide,
          children: q.jsx(_r, {
            name: 'orderSide',
            control: S,
            render: ({ field: _ }) =>
              q.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(wt)
                  .filter((O) => isNaN(Number(O)))
                  .map((O) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: O }),
                          q.jsx('input', {
                            name: 'GetOrders-orderSide',
                            type: 'radio',
                            value: Number(wt[O]),
                            checked: _.value === Number(wt[O]),
                            onChange: (W) => {
                              W.target.checked && _.onChange(Number(wt[O]));
                            }
                          })
                        ]
                      },
                      O
                    )
                  )
              })
          })
        }),
        q.jsx(Ve, {
          label: 'CreatedAtStart',
          error: B.createdAtStart,
          children: q.jsx(_r, {
            control: S,
            name: 'createdAtStart',
            render: ({ field: _ }) =>
              q.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ..._,
                value: _.value ? Us(_.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (O) => {
                  _.onChange(O.target.value ? new Date(O.target.value).getTime() : void 0);
                }
              })
          })
        }),
        q.jsx(Ve, {
          label: 'CreatedAtEnd',
          error: B.createdAtEnd,
          children: q.jsx(_r, {
            control: S,
            name: 'createdAtEnd',
            render: ({ field: _ }) =>
              q.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ..._,
                value: _.value ? Us(_.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (O) => {
                  _.onChange(O.target.value ? new Date(O.target.value).getTime() : void 0);
                }
              })
          })
        }),
        q.jsx(Ve, {
          label: 'Limit',
          error: B.limit,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        q.jsx(Ve, {
          label: 'Offset',
          error: B.offset,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        q.jsx(Ve, {
          label: 'OrderBy',
          error: B.orderBy,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        q.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const b2 = At({ orderId: gt(), clientOrderId: gt(), txHash: gt() }).test(
  'exactly-one-identifier',
  'Exactly one of Order ID, Client Order ID, or Tx Hash must be provided',
  function (n) {
    return [!!n.orderId, !!n.clientOrderId, !!n.txHash].filter(Boolean).length === 1;
  }
);
function S2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      handleSubmit: S,
      formState: { errors: x }
    } = Kt({ resolver: Jt(b2) }),
    B = S(async (v) => {
      u(!0), c(null), o('');
      try {
        c(await n.getOrder(v));
      } catch (_) {
        o(_.message ?? JSON.stringify(_));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetOrder',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'Order ID',
          error: x.orderId,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        q.jsx(Ve, {
          label: 'Client Order ID',
          error: x.clientOrderId,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('clientOrderId') })
        }),
        q.jsx(Ve, {
          label: 'Tx Hash',
          error: x.txHash,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('txHash') })
        }),
        q.jsx('button', { className: 'btn', onClick: B, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const x2 = At({ orderId: gt().required() });
function E2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      handleSubmit: S,
      formState: { errors: x }
    } = Kt({ resolver: Jt(x2) }),
    B = S(async (v) => {
      u(!0), c(null), o('');
      try {
        const _ = v.orderId;
        c(await n.getOrderTrades(_));
      } catch (_) {
        o(_.message ?? JSON.stringify(_));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetOrderTrades',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'OrderId',
          error: x.orderId,
          required: !0,
          children: q.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        q.jsx('button', { className: 'btn', onClick: B, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const _2 = At({ hin: gt().required(), assetId: gt() });
function w2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      handleSubmit: S,
      formState: { errors: x }
    } = Kt({ resolver: Jt(_2) }),
    B = S(async (v) => {
      u(!0), c(null), o('');
      try {
        const _ = { hin: BigInt(v.hin), assetId: v.assetId ? BigInt(v.assetId) : void 0 },
          O = await n.getWalletBalances(_);
        c(O);
      } catch (_) {
        o(_.message ?? JSON.stringify(_));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetWalletBalances',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'HIN(Hibit chain identity number)',
          error: x.hin,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('hin'), pattern: '[0-9]*' })
        }),
        q.jsx(Ve, {
          label: 'AssetId',
          error: x.assetId,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('assetId'), pattern: '[0-9]*' })
        }),
        q.jsx('button', { className: 'btn', onClick: B, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const A2 = At({ hin: gt().required() });
function N2({ client: n }) {
  const [a, u] = He.useState(!1),
    [s, c] = He.useState(null),
    [m, o] = He.useState(''),
    {
      register: h,
      handleSubmit: S,
      formState: { errors: x }
    } = Kt({ resolver: Jt(A2) }),
    B = S(async (v) => {
      u(!0), c(null), o('');
      try {
        const _ = BigInt(v.hin);
        c(await n.getNonce(_));
      } catch (_) {
        o(_.message ?? JSON.stringify(_));
      } finally {
        u(!1);
      }
    });
  return q.jsx(Gt, {
    title: 'GetNonce',
    form: q.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        q.jsx(Ve, {
          label: 'HIN(Hibit chain identity number)',
          error: x.hin,
          required: !0,
          children: q.jsx('input', { type: 'number', className: 'input', ...h('hin') })
        }),
        q.jsx('button', { className: 'btn', onClick: B, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: s,
    error: m
  });
}
const O2 = At({
  network: gt().oneOf(Object.values(Ra).map(String)).required(),
  hin: gt().required(),
  proxyKey: gt().required()
});
function T2({ client: n, defaultOptions: a }) {
  var S;
  const {
      register: u,
      control: s,
      watch: c,
      formState: { errors: m, isValid: o }
    } = Kt({
      defaultValues: {
        network: a.network,
        hin: ((S = a.hin) == null ? void 0 : S.toString()) ?? '',
        proxyKey: a.proxyKey
      },
      resolver: Jt(O2),
      mode: 'onChange'
    }),
    h = c();
  return (
    He.useEffect(() => {
      o && h.hin && h.proxyKey && n.setOptions({ network: h.network, hin: BigInt(h.hin), proxyKey: h.proxyKey });
    }, [h, o, n]),
    q.jsx(Gt, {
      title: 'SDK Options Config',
      form: q.jsxs('div', {
        className: 'flex flex-col gap-2',
        children: [
          q.jsx(Ve, {
            label: 'Network',
            error: m.network,
            required: !0,
            children: q.jsx(_r, {
              name: 'network',
              control: s,
              render: ({ field: x }) =>
                q.jsx('div', {
                  className: 'flex items-center gap-3 flex-wrap',
                  children: Object.values(Ra).map((B) =>
                    q.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          q.jsx('span', { children: B }),
                          q.jsx('input', {
                            name: 'network',
                            type: 'radio',
                            checked: x.value === B,
                            onChange: (v) => {
                              v.target.checked && x.onChange(B);
                            }
                          })
                        ]
                      },
                      B
                    )
                  )
                })
            })
          }),
          q.jsx(Ve, {
            label: 'HIN',
            error: m.hin,
            required: !0,
            children: q.jsx('input', { type: 'number', className: 'input', ...u('hin') })
          }),
          q.jsx(Ve, {
            label: 'Proxy Key',
            error: m.proxyKey,
            required: !0,
            children: q.jsx('input', { type: 'text', className: 'input', ...u('proxyKey') })
          }),
          q.jsx('div', {
            className: 'flex items-center gap-2',
            children: q.jsx('a', {
              href: 'https://docs.hibit.app/developers/getting-your-proxy-key',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-blue-500 underline',
              children: 'How to get your HIN and Proxy Key?'
            })
          })
        ]
      }),
      error: ''
    })
  );
}
const Rp = {
    network: Ra.Testnet,
    hin: BigInt(1e4),
    proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
  },
  M2 = () => {
    const [n, a] = He.useState(null);
    return (
      He.useEffect(() => {
        const u = new Gb();
        u.setOptions(Rp), a(u);
      }, []),
      n
        ? q.jsxs('main', {
            className: 'container mx-auto flex flex-col gap-6 p-6',
            children: [
              q.jsx('h1', { className: 'text-3xl font-bold text-center', children: 'Hibit SDK Examples' }),
              q.jsx(T2, { client: n, defaultOptions: Rp }),
              q.jsx(Fb, { client: n }),
              q.jsx(Vb, { client: n }),
              q.jsx(FS, { client: n }),
              q.jsx(YS, { client: n }),
              q.jsx(XS, { client: n }),
              q.jsx(QS, { client: n }),
              q.jsx(JS, { client: n }),
              q.jsx(PS, { client: n }),
              q.jsx(t2, { client: n }),
              q.jsx(a2, { client: n }),
              q.jsx(n2, { client: n }),
              q.jsx(f2, { client: n }),
              q.jsx(h2, { client: n }),
              q.jsx(m2, { client: n }),
              q.jsx(y2, { client: n }),
              q.jsx(v2, { client: n }),
              q.jsx(S2, { client: n }),
              q.jsx(E2, { client: n }),
              q.jsx(w2, { client: n }),
              q.jsx(N2, { client: n })
            ]
          })
        : null
    );
  };
P1.createRoot(document.getElementById('root')).render(q.jsx(xt.StrictMode, { children: q.jsx(M2, {}) }));
