var Yv = Object.defineProperty;
var Xv = (r, i, a) => (i in r ? Yv(r, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (r[i] = a));
var Pm = (r, i, a) => Xv(r, typeof i != 'symbol' ? i + '' : i, a);
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) u(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === 'childList')
        for (const d of f.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && u(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function u(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = a(s);
    fetch(s.href, f);
  }
})();
var Qf =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof globalThis < 'u'
          ? globalThis
          : {};
function tu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r;
}
var bf = { exports: {} },
  ql = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jm;
function Kv() {
  if (Jm) return ql;
  Jm = 1;
  var r = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.fragment');
  function a(u, s, f) {
    var d = null;
    if ((f !== void 0 && (d = '' + f), s.key !== void 0 && (d = '' + s.key), 'key' in s)) {
      f = {};
      for (var h in s) h !== 'key' && (f[h] = s[h]);
    } else f = s;
    return (s = f.ref), { $$typeof: r, type: u, key: d, ref: s !== void 0 ? s : null, props: f };
  }
  return (ql.Fragment = i), (ql.jsx = a), (ql.jsxs = a), ql;
}
var Wm;
function Zv() {
  return Wm || ((Wm = 1), (bf.exports = Kv())), bf.exports;
}
var T = Zv(),
  Sf = { exports: {} },
  lt = {},
  ep;
function Qv() {
  if (ep) return lt;
  ep = 1;
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var r = Symbol.for('react.transitional.element'),
    i = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    b = Symbol.iterator;
  function S(U) {
    return U === null || typeof U != 'object'
      ? null
      : ((U = (b && U[b]) || U['@@iterator']), typeof U == 'function' ? U : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    I = Object.assign,
    P = {};
  function J(U, ne, we) {
    (this.props = U), (this.context = ne), (this.refs = P), (this.updater = we || E);
  }
  (J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (U, ne) {
      if (typeof U != 'object' && typeof U != 'function' && U != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, U, ne, 'setState');
    }),
    (J.prototype.forceUpdate = function (U) {
      this.updater.enqueueForceUpdate(this, U, 'forceUpdate');
    });
  function W() {}
  W.prototype = J.prototype;
  function z(U, ne, we) {
    (this.props = U), (this.context = ne), (this.refs = P), (this.updater = we || E);
  }
  var ve = (z.prototype = new W());
  (ve.constructor = z), I(ve, J.prototype), (ve.isPureReactComponent = !0);
  var qe = Array.isArray,
    xe = { H: null, A: null, T: null, S: null },
    Ee = Object.prototype.hasOwnProperty;
  function De(U, ne, we, ye, O, je) {
    return (we = je.ref), { $$typeof: r, type: U, key: ne, ref: we !== void 0 ? we : null, props: je };
  }
  function v(U, ne) {
    return De(U.type, ne, void 0, void 0, void 0, U.props);
  }
  function w(U) {
    return typeof U == 'object' && U !== null && U.$$typeof === r;
  }
  function N(U) {
    var ne = { '=': '=0', ':': '=2' };
    return (
      '$' +
      U.replace(/[=:]/g, function (we) {
        return ne[we];
      })
    );
  }
  var G = /\/+/g;
  function Y(U, ne) {
    return typeof U == 'object' && U !== null && U.key != null ? N('' + U.key) : ne.toString(36);
  }
  function X() {}
  function Z(U) {
    switch (U.status) {
      case 'fulfilled':
        return U.value;
      case 'rejected':
        throw U.reason;
      default:
        switch (
          (typeof U.status == 'string'
            ? U.then(X, X)
            : ((U.status = 'pending'),
              U.then(
                function (ne) {
                  U.status === 'pending' && ((U.status = 'fulfilled'), (U.value = ne));
                },
                function (ne) {
                  U.status === 'pending' && ((U.status = 'rejected'), (U.reason = ne));
                }
              )),
          U.status)
        ) {
          case 'fulfilled':
            return U.value;
          case 'rejected':
            throw U.reason;
        }
    }
    throw U;
  }
  function k(U, ne, we, ye, O) {
    var je = typeof U;
    (je === 'undefined' || je === 'boolean') && (U = null);
    var Oe = !1;
    if (U === null) Oe = !0;
    else
      switch (je) {
        case 'bigint':
        case 'string':
        case 'number':
          Oe = !0;
          break;
        case 'object':
          switch (U.$$typeof) {
            case r:
            case i:
              Oe = !0;
              break;
            case _:
              return (Oe = U._init), k(Oe(U._payload), ne, we, ye, O);
          }
      }
    if (Oe)
      return (
        (O = O(U)),
        (Oe = ye === '' ? '.' + Y(U, 0) : ye),
        qe(O)
          ? ((we = ''),
            Oe != null && (we = Oe.replace(G, '$&/') + '/'),
            k(O, ne, we, '', function (ke) {
              return ke;
            }))
          : O != null &&
            (w(O) &&
              (O = v(
                O,
                we + (O.key == null || (U && U.key === O.key) ? '' : ('' + O.key).replace(G, '$&/') + '/') + Oe
              )),
            ne.push(O)),
        1
      );
    Oe = 0;
    var Pe = ye === '' ? '.' : ye + ':';
    if (qe(U)) for (var Me = 0; Me < U.length; Me++) (ye = U[Me]), (je = Pe + Y(ye, Me)), (Oe += k(ye, ne, we, je, O));
    else if (((Me = S(U)), typeof Me == 'function'))
      for (U = Me.call(U), Me = 0; !(ye = U.next()).done; )
        (ye = ye.value), (je = Pe + Y(ye, Me++)), (Oe += k(ye, ne, we, je, O));
    else if (je === 'object') {
      if (typeof U.then == 'function') return k(Z(U), ne, we, ye, O);
      throw (
        ((ne = String(U)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (ne === '[object Object]' ? 'object with keys {' + Object.keys(U).join(', ') + '}' : ne) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return Oe;
  }
  function R(U, ne, we) {
    if (U == null) return U;
    var ye = [],
      O = 0;
    return (
      k(U, ye, '', '', function (je) {
        return ne.call(we, je, O++);
      }),
      ye
    );
  }
  function $(U) {
    if (U._status === -1) {
      var ne = U._result;
      (ne = ne()),
        ne.then(
          function (we) {
            (U._status === 0 || U._status === -1) && ((U._status = 1), (U._result = we));
          },
          function (we) {
            (U._status === 0 || U._status === -1) && ((U._status = 2), (U._result = we));
          }
        ),
        U._status === -1 && ((U._status = 0), (U._result = ne));
    }
    if (U._status === 1) return U._result.default;
    throw U._result;
  }
  var H =
    typeof reportError == 'function'
      ? reportError
      : function (U) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var ne = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof U == 'object' && U !== null && typeof U.message == 'string' ? String(U.message) : String(U),
              error: U
            });
            if (!window.dispatchEvent(ne)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', U);
            return;
          }
          console.error(U);
        };
  function oe() {}
  return (
    (lt.Children = {
      map: R,
      forEach: function (U, ne, we) {
        R(
          U,
          function () {
            ne.apply(this, arguments);
          },
          we
        );
      },
      count: function (U) {
        var ne = 0;
        return (
          R(U, function () {
            ne++;
          }),
          ne
        );
      },
      toArray: function (U) {
        return (
          R(U, function (ne) {
            return ne;
          }) || []
        );
      },
      only: function (U) {
        if (!w(U)) throw Error('React.Children.only expected to receive a single React element child.');
        return U;
      }
    }),
    (lt.Component = J),
    (lt.Fragment = a),
    (lt.Profiler = s),
    (lt.PureComponent = z),
    (lt.StrictMode = u),
    (lt.Suspense = p),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = xe),
    (lt.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (lt.cache = function (U) {
      return function () {
        return U.apply(null, arguments);
      };
    }),
    (lt.cloneElement = function (U, ne, we) {
      if (U == null) throw Error('The argument must be a React element, but you passed ' + U + '.');
      var ye = I({}, U.props),
        O = U.key,
        je = void 0;
      if (ne != null)
        for (Oe in (ne.ref !== void 0 && (je = void 0), ne.key !== void 0 && (O = '' + ne.key), ne))
          !Ee.call(ne, Oe) ||
            Oe === 'key' ||
            Oe === '__self' ||
            Oe === '__source' ||
            (Oe === 'ref' && ne.ref === void 0) ||
            (ye[Oe] = ne[Oe]);
      var Oe = arguments.length - 2;
      if (Oe === 1) ye.children = we;
      else if (1 < Oe) {
        for (var Pe = Array(Oe), Me = 0; Me < Oe; Me++) Pe[Me] = arguments[Me + 2];
        ye.children = Pe;
      }
      return De(U.type, O, void 0, void 0, je, ye);
    }),
    (lt.createContext = function (U) {
      return (
        (U = { $$typeof: d, _currentValue: U, _currentValue2: U, _threadCount: 0, Provider: null, Consumer: null }),
        (U.Provider = U),
        (U.Consumer = { $$typeof: f, _context: U }),
        U
      );
    }),
    (lt.createElement = function (U, ne, we) {
      var ye,
        O = {},
        je = null;
      if (ne != null)
        for (ye in (ne.key !== void 0 && (je = '' + ne.key), ne))
          Ee.call(ne, ye) && ye !== 'key' && ye !== '__self' && ye !== '__source' && (O[ye] = ne[ye]);
      var Oe = arguments.length - 2;
      if (Oe === 1) O.children = we;
      else if (1 < Oe) {
        for (var Pe = Array(Oe), Me = 0; Me < Oe; Me++) Pe[Me] = arguments[Me + 2];
        O.children = Pe;
      }
      if (U && U.defaultProps) for (ye in ((Oe = U.defaultProps), Oe)) O[ye] === void 0 && (O[ye] = Oe[ye]);
      return De(U, je, void 0, void 0, null, O);
    }),
    (lt.createRef = function () {
      return { current: null };
    }),
    (lt.forwardRef = function (U) {
      return { $$typeof: h, render: U };
    }),
    (lt.isValidElement = w),
    (lt.lazy = function (U) {
      return { $$typeof: _, _payload: { _status: -1, _result: U }, _init: $ };
    }),
    (lt.memo = function (U, ne) {
      return { $$typeof: y, type: U, compare: ne === void 0 ? null : ne };
    }),
    (lt.startTransition = function (U) {
      var ne = xe.T,
        we = {};
      xe.T = we;
      try {
        var ye = U(),
          O = xe.S;
        O !== null && O(we, ye), typeof ye == 'object' && ye !== null && typeof ye.then == 'function' && ye.then(oe, H);
      } catch (je) {
        H(je);
      } finally {
        xe.T = ne;
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return xe.H.useCacheRefresh();
    }),
    (lt.use = function (U) {
      return xe.H.use(U);
    }),
    (lt.useActionState = function (U, ne, we) {
      return xe.H.useActionState(U, ne, we);
    }),
    (lt.useCallback = function (U, ne) {
      return xe.H.useCallback(U, ne);
    }),
    (lt.useContext = function (U) {
      return xe.H.useContext(U);
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (U, ne) {
      return xe.H.useDeferredValue(U, ne);
    }),
    (lt.useEffect = function (U, ne) {
      return xe.H.useEffect(U, ne);
    }),
    (lt.useId = function () {
      return xe.H.useId();
    }),
    (lt.useImperativeHandle = function (U, ne, we) {
      return xe.H.useImperativeHandle(U, ne, we);
    }),
    (lt.useInsertionEffect = function (U, ne) {
      return xe.H.useInsertionEffect(U, ne);
    }),
    (lt.useLayoutEffect = function (U, ne) {
      return xe.H.useLayoutEffect(U, ne);
    }),
    (lt.useMemo = function (U, ne) {
      return xe.H.useMemo(U, ne);
    }),
    (lt.useOptimistic = function (U, ne) {
      return xe.H.useOptimistic(U, ne);
    }),
    (lt.useReducer = function (U, ne, we) {
      return xe.H.useReducer(U, ne, we);
    }),
    (lt.useRef = function (U) {
      return xe.H.useRef(U);
    }),
    (lt.useState = function (U) {
      return xe.H.useState(U);
    }),
    (lt.useSyncExternalStore = function (U, ne, we) {
      return xe.H.useSyncExternalStore(U, ne, we);
    }),
    (lt.useTransition = function () {
      return xe.H.useTransition();
    }),
    (lt.version = '19.0.0'),
    lt
  );
}
var tp;
function ud() {
  return tp || ((tp = 1), (Sf.exports = Qv())), Sf.exports;
}
var le = ud();
const wt = tu(le);
var xf = { exports: {} },
  zl = {},
  wf = { exports: {} },
  Ef = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rp;
function Pv() {
  return (
    rp ||
      ((rp = 1),
      (function (r) {
        function i(R, $) {
          var H = R.length;
          R.push($);
          e: for (; 0 < H; ) {
            var oe = (H - 1) >>> 1,
              U = R[oe];
            if (0 < s(U, $)) (R[oe] = $), (R[H] = U), (H = oe);
            else break e;
          }
        }
        function a(R) {
          return R.length === 0 ? null : R[0];
        }
        function u(R) {
          if (R.length === 0) return null;
          var $ = R[0],
            H = R.pop();
          if (H !== $) {
            R[0] = H;
            e: for (var oe = 0, U = R.length, ne = U >>> 1; oe < ne; ) {
              var we = 2 * (oe + 1) - 1,
                ye = R[we],
                O = we + 1,
                je = R[O];
              if (0 > s(ye, H))
                O < U && 0 > s(je, ye) ? ((R[oe] = je), (R[O] = H), (oe = O)) : ((R[oe] = ye), (R[we] = H), (oe = we));
              else if (O < U && 0 > s(je, H)) (R[oe] = je), (R[O] = H), (oe = O);
              else break e;
            }
          }
          return $;
        }
        function s(R, $) {
          var H = R.sortIndex - $.sortIndex;
          return H !== 0 ? H : R.id - $.id;
        }
        if (((r.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var f = performance;
          r.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            h = d.now();
          r.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          y = [],
          _ = 1,
          b = null,
          S = 3,
          E = !1,
          I = !1,
          P = !1,
          J = typeof setTimeout == 'function' ? setTimeout : null,
          W = typeof clearTimeout == 'function' ? clearTimeout : null,
          z = typeof setImmediate < 'u' ? setImmediate : null;
        function ve(R) {
          for (var $ = a(y); $ !== null; ) {
            if ($.callback === null) u(y);
            else if ($.startTime <= R) u(y), ($.sortIndex = $.expirationTime), i(p, $);
            else break;
            $ = a(y);
          }
        }
        function qe(R) {
          if (((P = !1), ve(R), !I))
            if (a(p) !== null) (I = !0), Z();
            else {
              var $ = a(y);
              $ !== null && k(qe, $.startTime - R);
            }
        }
        var xe = !1,
          Ee = -1,
          De = 5,
          v = -1;
        function w() {
          return !(r.unstable_now() - v < De);
        }
        function N() {
          if (xe) {
            var R = r.unstable_now();
            v = R;
            var $ = !0;
            try {
              e: {
                (I = !1), P && ((P = !1), W(Ee), (Ee = -1)), (E = !0);
                var H = S;
                try {
                  t: {
                    for (ve(R), b = a(p); b !== null && !(b.expirationTime > R && w()); ) {
                      var oe = b.callback;
                      if (typeof oe == 'function') {
                        (b.callback = null), (S = b.priorityLevel);
                        var U = oe(b.expirationTime <= R);
                        if (((R = r.unstable_now()), typeof U == 'function')) {
                          (b.callback = U), ve(R), ($ = !0);
                          break t;
                        }
                        b === a(p) && u(p), ve(R);
                      } else u(p);
                      b = a(p);
                    }
                    if (b !== null) $ = !0;
                    else {
                      var ne = a(y);
                      ne !== null && k(qe, ne.startTime - R), ($ = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (S = H), (E = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? G() : (xe = !1);
            }
          }
        }
        var G;
        if (typeof z == 'function')
          G = function () {
            z(N);
          };
        else if (typeof MessageChannel < 'u') {
          var Y = new MessageChannel(),
            X = Y.port2;
          (Y.port1.onmessage = N),
            (G = function () {
              X.postMessage(null);
            });
        } else
          G = function () {
            J(N, 0);
          };
        function Z() {
          xe || ((xe = !0), G());
        }
        function k(R, $) {
          Ee = J(function () {
            R(r.unstable_now());
          }, $);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            I || E || ((I = !0), Z());
          }),
          (r.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (De = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return a(p);
          }),
          (r.unstable_next = function (R) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = S;
            }
            var H = S;
            S = $;
            try {
              return R();
            } finally {
              S = H;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (R, $) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var H = S;
            S = R;
            try {
              return $();
            } finally {
              S = H;
            }
          }),
          (r.unstable_scheduleCallback = function (R, $, H) {
            var oe = r.unstable_now();
            switch (
              (typeof H == 'object' && H !== null
                ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? oe + H : oe))
                : (H = oe),
              R)
            ) {
              case 1:
                var U = -1;
                break;
              case 2:
                U = 250;
                break;
              case 5:
                U = 1073741823;
                break;
              case 4:
                U = 1e4;
                break;
              default:
                U = 5e3;
            }
            return (
              (U = H + U),
              (R = { id: _++, callback: $, priorityLevel: R, startTime: H, expirationTime: U, sortIndex: -1 }),
              H > oe
                ? ((R.sortIndex = H),
                  i(y, R),
                  a(p) === null && R === a(y) && (P ? (W(Ee), (Ee = -1)) : (P = !0), k(qe, H - oe)))
                : ((R.sortIndex = U), i(p, R), I || E || ((I = !0), Z())),
              R
            );
          }),
          (r.unstable_shouldYield = w),
          (r.unstable_wrapCallback = function (R) {
            var $ = S;
            return function () {
              var H = S;
              S = $;
              try {
                return R.apply(this, arguments);
              } finally {
                S = H;
              }
            };
          });
      })(Ef)),
    Ef
  );
}
var np;
function Jv() {
  return np || ((np = 1), (wf.exports = Pv())), wf.exports;
}
var Af = { exports: {} },
  sr = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip;
function Wv() {
  if (ip) return sr;
  ip = 1;
  var r = ud();
  function i(p) {
    var y = 'https://react.dev/errors/' + p;
    if (1 < arguments.length) {
      y += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++) y += '&args[]=' + encodeURIComponent(arguments[_]);
    }
    return (
      'Minified React error #' +
      p +
      '; visit ' +
      y +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function a() {}
  var u = {
      d: {
        f: a,
        r: function () {
          throw Error(i(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a
      },
      p: 0,
      findDOMNode: null
    },
    s = Symbol.for('react.portal');
  function f(p, y, _) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: s, key: b == null ? null : '' + b, children: p, containerInfo: y, implementation: _ };
  }
  var d = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, y) {
    if (p === 'font') return '';
    if (typeof y == 'string') return y === 'use-credentials' ? y : '';
  }
  return (
    (sr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (sr.createPortal = function (p, y) {
      var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)) throw Error(i(299));
      return f(p, y, null, _);
    }),
    (sr.flushSync = function (p) {
      var y = d.T,
        _ = u.p;
      try {
        if (((d.T = null), (u.p = 2), p)) return p();
      } finally {
        (d.T = y), (u.p = _), u.d.f();
      }
    }),
    (sr.preconnect = function (p, y) {
      typeof p == 'string' &&
        (y
          ? ((y = y.crossOrigin), (y = typeof y == 'string' ? (y === 'use-credentials' ? y : '') : void 0))
          : (y = null),
        u.d.C(p, y));
    }),
    (sr.prefetchDNS = function (p) {
      typeof p == 'string' && u.d.D(p);
    }),
    (sr.preinit = function (p, y) {
      if (typeof p == 'string' && y && typeof y.as == 'string') {
        var _ = y.as,
          b = h(_, y.crossOrigin),
          S = typeof y.integrity == 'string' ? y.integrity : void 0,
          E = typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0;
        _ === 'style'
          ? u.d.S(p, typeof y.precedence == 'string' ? y.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: E
            })
          : _ === 'script' &&
            u.d.X(p, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: E,
              nonce: typeof y.nonce == 'string' ? y.nonce : void 0
            });
      }
    }),
    (sr.preinitModule = function (p, y) {
      if (typeof p == 'string')
        if (typeof y == 'object' && y !== null) {
          if (y.as == null || y.as === 'script') {
            var _ = h(y.as, y.crossOrigin);
            u.d.M(p, {
              crossOrigin: _,
              integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
              nonce: typeof y.nonce == 'string' ? y.nonce : void 0
            });
          }
        } else y == null && u.d.M(p);
    }),
    (sr.preload = function (p, y) {
      if (typeof p == 'string' && typeof y == 'object' && y !== null && typeof y.as == 'string') {
        var _ = y.as,
          b = h(_, y.crossOrigin);
        u.d.L(p, _, {
          crossOrigin: b,
          integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
          nonce: typeof y.nonce == 'string' ? y.nonce : void 0,
          type: typeof y.type == 'string' ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == 'string' ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == 'string' ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == 'string' ? y.imageSizes : void 0,
          media: typeof y.media == 'string' ? y.media : void 0
        });
      }
    }),
    (sr.preloadModule = function (p, y) {
      if (typeof p == 'string')
        if (y) {
          var _ = h(y.as, y.crossOrigin);
          u.d.m(p, {
            as: typeof y.as == 'string' && y.as !== 'script' ? y.as : void 0,
            crossOrigin: _,
            integrity: typeof y.integrity == 'string' ? y.integrity : void 0
          });
        } else u.d.m(p);
    }),
    (sr.requestFormReset = function (p) {
      u.d.r(p);
    }),
    (sr.unstable_batchedUpdates = function (p, y) {
      return p(y);
    }),
    (sr.useFormState = function (p, y, _) {
      return d.H.useFormState(p, y, _);
    }),
    (sr.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (sr.version = '19.0.0'),
    sr
  );
}
var ap;
function eb() {
  if (ap) return Af.exports;
  ap = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), (Af.exports = Wv()), Af.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lp;
function tb() {
  if (lp) return zl;
  lp = 1;
  var r = Jv(),
    i = ud(),
    a = eb();
  function u(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var f = Symbol.for('react.element'),
    d = Symbol.for('react.transitional.element'),
    h = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    y = Symbol.for('react.strict_mode'),
    _ = Symbol.for('react.profiler'),
    b = Symbol.for('react.provider'),
    S = Symbol.for('react.consumer'),
    E = Symbol.for('react.context'),
    I = Symbol.for('react.forward_ref'),
    P = Symbol.for('react.suspense'),
    J = Symbol.for('react.suspense_list'),
    W = Symbol.for('react.memo'),
    z = Symbol.for('react.lazy'),
    ve = Symbol.for('react.offscreen'),
    qe = Symbol.for('react.memo_cache_sentinel'),
    xe = Symbol.iterator;
  function Ee(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (xe && e[xe]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var De = Symbol.for('react.client.reference');
  function v(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === De ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case p:
        return 'Fragment';
      case h:
        return 'Portal';
      case _:
        return 'Profiler';
      case y:
        return 'StrictMode';
      case P:
        return 'Suspense';
      case J:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case E:
          return (e.displayName || 'Context') + '.Provider';
        case S:
          return (e._context.displayName || 'Context') + '.Consumer';
        case I:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case W:
          return (t = e.displayName || null), t !== null ? t : v(e.type) || 'Memo';
        case z:
          (t = e._payload), (e = e._init);
          try {
            return v(e(t));
          } catch {}
      }
    return null;
  }
  var w = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = Object.assign,
    G,
    Y;
  function X(e) {
    if (G === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (G = (t && t[1]) || ''),
          (Y =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      G +
      e +
      Y
    );
  }
  var Z = !1;
  function k(e, t) {
    if (!e || Z) return '';
    Z = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Re = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Re.prototype, 'props', {
                  set: function () {
                    throw Error();
                  }
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Re, []);
                } catch (Ae) {
                  var be = Ae;
                }
                Reflect.construct(e, [], Re);
              } else {
                try {
                  Re.call();
                } catch (Ae) {
                  be = Ae;
                }
                e.call(Re.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Ae) {
                be = Ae;
              }
              (Re = e()) && typeof Re.catch == 'function' && Re.catch(function () {});
            }
          } catch (Ae) {
            if (Ae && be && typeof Ae.stack == 'string') return [Ae.stack, be.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
      var o = l.DetermineComponentFrameRoot(),
        x = o[0],
        C = o[1];
      if (x && C) {
        var K = x.split(`
`),
          fe = C.split(`
`);
        for (c = l = 0; l < K.length && !K[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; c < fe.length && !fe[c].includes('DetermineComponentFrameRoot'); ) c++;
        if (l === K.length || c === fe.length)
          for (l = K.length - 1, c = fe.length - 1; 1 <= l && 0 <= c && K[l] !== fe[c]; ) c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (K[l] !== fe[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || K[l] !== fe[c])) {
                  var _e =
                    `
` + K[l].replace(' at new ', ' at ');
                  return (
                    e.displayName && _e.includes('<anonymous>') && (_e = _e.replace('<anonymous>', e.displayName)), _e
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (Z = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : '') ? X(n) : '';
  }
  function R(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return X(e.type);
      case 16:
        return X('Lazy');
      case 13:
        return X('Suspense');
      case 19:
        return X('SuspenseList');
      case 0:
      case 15:
        return (e = k(e.type, !1)), e;
      case 11:
        return (e = k(e.type.render, !1)), e;
      case 1:
        return (e = k(e.type, !0)), e;
      default:
        return '';
    }
  }
  function $(e) {
    try {
      var t = '';
      do (t += R(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function H(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function oe(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function U(e) {
    if (H(e) !== e) throw Error(u(188));
  }
  function ne(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = H(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var c = n.return;
      if (c === null) break;
      var o = c.alternate;
      if (o === null) {
        if (((l = c.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (c.child === o.child) {
        for (o = c.child; o; ) {
          if (o === n) return U(c), e;
          if (o === l) return U(c), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== l.return) (n = c), (l = o);
      else {
        for (var x = !1, C = c.child; C; ) {
          if (C === n) {
            (x = !0), (n = c), (l = o);
            break;
          }
          if (C === l) {
            (x = !0), (l = c), (n = o);
            break;
          }
          C = C.sibling;
        }
        if (!x) {
          for (C = o.child; C; ) {
            if (C === n) {
              (x = !0), (n = o), (l = c);
              break;
            }
            if (C === l) {
              (x = !0), (l = o), (n = c);
              break;
            }
            C = C.sibling;
          }
          if (!x) throw Error(u(189));
        }
      }
      if (n.alternate !== l) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function we(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = we(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var ye = Array.isArray,
    O = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    je = { pending: !1, data: null, method: null, action: null },
    Oe = [],
    Pe = -1;
  function Me(e) {
    return { current: e };
  }
  function ke(e) {
    0 > Pe || ((e.current = Oe[Pe]), (Oe[Pe] = null), Pe--);
  }
  function B(e, t) {
    Pe++, (Oe[Pe] = e.current), (e.current = t);
  }
  var D = Me(null),
    Q = Me(null),
    se = Me(null),
    re = Me(null);
  function ue(e, t) {
    switch ((B(se, t), B(Q, e), B(D, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? Nm(t) : 0;
        break;
      default:
        if (((e = e === 8 ? t.parentNode : t), (t = e.tagName), (e = e.namespaceURI))) (e = Nm(e)), (t = Tm(e, t));
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
    ke(D), B(D, t);
  }
  function he() {
    ke(D), ke(Q), ke(se);
  }
  function ae(e) {
    e.memoizedState !== null && B(re, e);
    var t = D.current,
      n = Tm(t, e.type);
    t !== n && (B(Q, e), B(D, n));
  }
  function M(e) {
    Q.current === e && (ke(D), ke(Q)), re.current === e && (ke(re), (Ul._currentValue = je));
  }
  var q = Object.prototype.hasOwnProperty,
    F = r.unstable_scheduleCallback,
    te = r.unstable_cancelCallback,
    ge = r.unstable_shouldYield,
    Se = r.unstable_requestPaint,
    Be = r.unstable_now,
    ze = r.unstable_getCurrentPriorityLevel,
    rt = r.unstable_ImmediatePriority,
    A = r.unstable_UserBlockingPriority,
    m = r.unstable_NormalPriority,
    g = r.unstable_LowPriority,
    V = r.unstable_IdlePriority,
    ie = r.log,
    j = r.unstable_setDisableYieldValue,
    L = null,
    de = null;
  function Ne(e) {
    if (de && typeof de.onCommitFiberRoot == 'function')
      try {
        de.onCommitFiberRoot(L, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Ce(e) {
    if ((typeof ie == 'function' && j(e), de && typeof de.setStrictMode == 'function'))
      try {
        de.setStrictMode(L, e);
      } catch {}
  }
  var Ie = Math.clz32 ? Math.clz32 : Fe,
    et = Math.log,
    Xe = Math.LN2;
  function Fe(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((et(e) / Xe) | 0)) | 0;
  }
  var Ve = 128,
    Ge = 4194304;
  function $e(e) {
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
  function it(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      c = e.suspendedLanes,
      o = e.pingedLanes,
      x = e.warmLanes;
    e = e.finishedLanes !== 0;
    var C = n & 134217727;
    return (
      C !== 0
        ? ((n = C & ~c),
          n !== 0 ? (l = $e(n)) : ((o &= C), o !== 0 ? (l = $e(o)) : e || ((x = C & ~x), x !== 0 && (l = $e(x)))))
        : ((C = n & ~c), C !== 0 ? (l = $e(C)) : o !== 0 ? (l = $e(o)) : e || ((x = n & ~x), x !== 0 && (l = $e(x)))),
      l === 0
        ? 0
        : t !== 0 &&
            t !== l &&
            (t & c) === 0 &&
            ((c = l & -l), (x = t & -t), c >= x || (c === 32 && (x & 4194176) !== 0))
          ? t
          : l
    );
  }
  function ot(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Dt(e, t) {
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
  function dr() {
    var e = Ve;
    return (Ve <<= 1), (Ve & 4194176) === 0 && (Ve = 128), e;
  }
  function la() {
    var e = Ge;
    return (Ge <<= 1), (Ge & 62914560) === 0 && (Ge = 4194304), e;
  }
  function ua(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Tt(e, t) {
    (e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Nd(e, t, n, l, c, o) {
    var x = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var C = e.entanglements,
      K = e.expirationTimes,
      fe = e.hiddenUpdates;
    for (n = x & ~n; 0 < n; ) {
      var _e = 31 - Ie(n),
        Re = 1 << _e;
      (C[_e] = 0), (K[_e] = -1);
      var be = fe[_e];
      if (be !== null)
        for (fe[_e] = null, _e = 0; _e < be.length; _e++) {
          var Ae = be[_e];
          Ae !== null && (Ae.lane &= -536870913);
        }
      n &= ~Re;
    }
    l !== 0 && oc(e, l, 0), o !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(x & ~t));
  }
  function oc(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - Ie(t);
    (e.entangledLanes |= t), (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194218));
  }
  function fc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Ie(n),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (n &= ~c);
    }
  }
  function pu(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function yu() {
    var e = O.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : $m(e.type));
  }
  function dc(e, t) {
    var n = O.p;
    try {
      return (O.p = e), t();
    } finally {
      O.p = n;
    }
  }
  var on = Math.random().toString(36).slice(2),
    dt = '__reactFiber$' + on,
    lr = '__reactProps$' + on,
    Qn = '__reactContainer$' + on,
    Ya = '__reactEvents$' + on,
    hc = '__reactListeners$' + on,
    mc = '__reactHandles$' + on,
    gu = '__reactResources$' + on,
    Ti = '__reactMarker$' + on;
  function Xa(e) {
    delete e[dt], delete e[lr], delete e[Ya], delete e[hc], delete e[mc];
  }
  function pt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Qn] || n[dt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Rm(e); e !== null; ) {
            if ((n = e[dt])) return n;
            e = Rm(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Pn(e) {
    if ((e = e[dt] || e[Qn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Oi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ee(e) {
    var t = e[gu];
    return t || (t = e[gu] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function Je(e) {
    e[Ti] = !0;
  }
  var ht = new Set(),
    st = {};
  function kr(e, t) {
    Ir(e, t), Ir(e + 'Capture', t);
  }
  function Ir(e, t) {
    for (st[e] = t, e = 0; e < t.length; e++) ht.add(t[e]);
  }
  var fn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    qg = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Td = {},
    Od = {};
  function zg(e) {
    return q.call(Od, e) ? !0 : q.call(Td, e) ? !1 : qg.test(e) ? (Od[e] = !0) : ((Td[e] = !0), !1);
  }
  function vu(e, t, n) {
    if (zg(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + n);
      }
  }
  function bu(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + n);
    }
  }
  function An(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, '' + l);
    }
  }
  function Lr(e) {
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
  function Md(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Hg(e) {
    var t = Md(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
      var c = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (x) {
            (l = '' + x), o.call(this, x);
          }
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (x) {
            l = '' + x;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          }
        }
      );
    }
  }
  function Su(e) {
    e._valueTracker || (e._valueTracker = Hg(e));
  }
  function Rd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return e && (l = Md(e) ? (e.checked ? 'true' : 'false') : e.value), (e = l), e !== n ? (t.setValue(e), !0) : !1;
  }
  function xu(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Fg = /[\n"\\]/g;
  function qr(e) {
    return e.replace(Fg, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function pc(e, t, n, l, c, o, x, C) {
    (e.name = ''),
      x != null && typeof x != 'function' && typeof x != 'symbol' && typeof x != 'boolean'
        ? (e.type = x)
        : e.removeAttribute('type'),
      t != null
        ? x === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Lr(t))
          : e.value !== '' + Lr(t) && (e.value = '' + Lr(t))
        : (x !== 'submit' && x !== 'reset') || e.removeAttribute('value'),
      t != null ? yc(e, x, Lr(t)) : n != null ? yc(e, x, Lr(n)) : l != null && e.removeAttribute('value'),
      c == null && o != null && (e.defaultChecked = !!o),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (e.name = '' + Lr(C))
        : e.removeAttribute('name');
  }
  function Bd(e, t, n, l, c, o, x, C) {
    if (
      (o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean' && (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== 'submit' && o !== 'reset') || t != null)) return;
      (n = n != null ? '' + Lr(n) : ''),
        (t = t != null ? '' + Lr(t) : n),
        C || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? c),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = C ? e.checked : !!l),
      (e.defaultChecked = !!l),
      x != null && typeof x != 'function' && typeof x != 'symbol' && typeof x != 'boolean' && (e.name = x);
  }
  function yc(e, t, n) {
    (t === 'number' && xu(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
  }
  function sa(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < n.length; c++) t['$' + n[c]] = !0;
      for (n = 0; n < e.length; n++)
        (c = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== c && (e[n].selected = c),
          c && l && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + Lr(n), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === n) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cd(e, t, n) {
    if (t != null && ((t = '' + Lr(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Lr(n) : '';
  }
  function Dd(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(u(92));
        if (ye(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ''), (t = n);
    }
    (n = Lr(t)), (e.defaultValue = n), (l = e.textContent), l === n && l !== '' && l !== null && (e.value = l);
  }
  function ca(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Vg = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Ud(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Vg.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function jd(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(u(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0 ? e.setProperty(l, '') : l === 'float' ? (e.cssFloat = '') : (e[l] = ''));
      for (var c in t) (l = t[c]), t.hasOwnProperty(c) && n[c] !== l && Ud(e, c, l);
    } else for (var o in t) t.hasOwnProperty(o) && Ud(e, o, t[o]);
  }
  function gc(e) {
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
  var Gg = new Map([
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
    $g =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wu(e) {
    return $g.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var vc = null;
  function bc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var oa = null,
    fa = null;
  function kd(e) {
    var t = Pn(e);
    if (t && (e = t.stateNode)) {
      var n = e[lr] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (pc(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + qr('' + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var c = l[lr] || null;
                if (!c) throw Error(u(90));
                pc(l, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
              }
            }
            for (t = 0; t < n.length; t++) (l = n[t]), l.form === e.form && Rd(l);
          }
          break e;
        case 'textarea':
          Cd(e, n.value, n.defaultValue);
          break e;
        case 'select':
          (t = n.value), t != null && sa(e, !!n.multiple, t, !1);
      }
    }
  }
  var Sc = !1;
  function Id(e, t, n) {
    if (Sc) return e(t, n);
    Sc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (((Sc = !1), (oa !== null || fa !== null) && (as(), oa && ((t = oa), (e = fa), (fa = oa = null), kd(t), e))))
        for (t = 0; t < e.length; t++) kd(e[t]);
    }
  }
  function Ka(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[lr] || null;
    if (l === null) return null;
    n = l[t];
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
        (l = !l.disabled) ||
          ((e = e.type), (l = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(u(231, t, typeof n));
    return n;
  }
  var xc = !1;
  if (fn)
    try {
      var Za = {};
      Object.defineProperty(Za, 'passive', {
        get: function () {
          xc = !0;
        }
      }),
        window.addEventListener('test', Za, Za),
        window.removeEventListener('test', Za, Za);
    } catch {
      xc = !1;
    }
  var Jn = null,
    wc = null,
    Eu = null;
  function Ld() {
    if (Eu) return Eu;
    var e,
      t = wc,
      n = t.length,
      l,
      c = 'value' in Jn ? Jn.value : Jn.textContent,
      o = c.length;
    for (e = 0; e < n && t[e] === c[e]; e++);
    var x = n - e;
    for (l = 1; l <= x && t[n - l] === c[o - l]; l++);
    return (Eu = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Au(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function _u() {
    return !0;
  }
  function qd() {
    return !1;
  }
  function vr(e) {
    function t(n, l, c, o, x) {
      (this._reactName = n),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = x),
        (this.currentTarget = null);
      for (var C in e) e.hasOwnProperty(C) && ((n = e[C]), (this[C] = n ? n(o) : o[C]));
      return (
        (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? _u : qd),
        (this.isPropagationStopped = qd),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = _u));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = _u));
        },
        persist: function () {},
        isPersistent: _u
      }),
      t
    );
  }
  var Mi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Nu = vr(Mi),
    Qa = N({}, Mi, { view: 0, detail: 0 }),
    Yg = vr(Qa),
    Ec,
    Ac,
    Pa,
    Tu = N({}, Qa, {
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
      getModifierState: Nc,
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
          : (e !== Pa &&
              (Pa && e.type === 'mousemove'
                ? ((Ec = e.screenX - Pa.screenX), (Ac = e.screenY - Pa.screenY))
                : (Ac = Ec = 0),
              (Pa = e)),
            Ec);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ac;
      }
    }),
    zd = vr(Tu),
    Xg = N({}, Tu, { dataTransfer: 0 }),
    Kg = vr(Xg),
    Zg = N({}, Qa, { relatedTarget: 0 }),
    _c = vr(Zg),
    Qg = N({}, Mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pg = vr(Qg),
    Jg = N({}, Mi, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      }
    }),
    Wg = vr(Jg),
    e1 = N({}, Mi, { data: 0 }),
    Hd = vr(e1),
    t1 = {
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
    r1 = {
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
    n1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function i1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = n1[e]) ? !!t[e] : !1;
  }
  function Nc() {
    return i1;
  }
  var a1 = N({}, Qa, {
      key: function (e) {
        if (e.key) {
          var t = t1[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Au(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? r1[e.keyCode] || 'Unidentified'
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
      getModifierState: Nc,
      charCode: function (e) {
        return e.type === 'keypress' ? Au(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? Au(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      }
    }),
    l1 = vr(a1),
    u1 = N({}, Tu, {
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
    Fd = vr(u1),
    s1 = N({}, Qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nc
    }),
    c1 = vr(s1),
    o1 = N({}, Mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f1 = vr(o1),
    d1 = N({}, Tu, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    h1 = vr(d1),
    m1 = N({}, Mi, { newState: 0, oldState: 0 }),
    p1 = vr(m1),
    y1 = [9, 13, 27, 32],
    Tc = fn && 'CompositionEvent' in window,
    Ja = null;
  fn && 'documentMode' in document && (Ja = document.documentMode);
  var g1 = fn && 'TextEvent' in window && !Ja,
    Vd = fn && (!Tc || (Ja && 8 < Ja && 11 >= Ja)),
    Gd = ' ',
    $d = !1;
  function Yd(e, t) {
    switch (e) {
      case 'keyup':
        return y1.indexOf(t.keyCode) !== -1;
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
  function Xd(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var da = !1;
  function v1(e, t) {
    switch (e) {
      case 'compositionend':
        return Xd(t);
      case 'keypress':
        return t.which !== 32 ? null : (($d = !0), Gd);
      case 'textInput':
        return (e = t.data), e === Gd && $d ? null : e;
      default:
        return null;
    }
  }
  function b1(e, t) {
    if (da)
      return e === 'compositionend' || (!Tc && Yd(e, t)) ? ((e = Ld()), (Eu = wc = Jn = null), (da = !1), e) : null;
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
        return Vd && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var S1 = {
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
  function Kd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!S1[e.type] : t === 'textarea';
  }
  function Zd(e, t, n, l) {
    oa ? (fa ? fa.push(l) : (fa = [l])) : (oa = l),
      (t = os(t, 'onChange')),
      0 < t.length && ((n = new Nu('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t }));
  }
  var Wa = null,
    el = null;
  function x1(e) {
    xm(e, 0);
  }
  function Ou(e) {
    var t = Oi(e);
    if (Rd(t)) return e;
  }
  function Qd(e, t) {
    if (e === 'change') return t;
  }
  var Pd = !1;
  if (fn) {
    var Oc;
    if (fn) {
      var Mc = 'oninput' in document;
      if (!Mc) {
        var Jd = document.createElement('div');
        Jd.setAttribute('oninput', 'return;'), (Mc = typeof Jd.oninput == 'function');
      }
      Oc = Mc;
    } else Oc = !1;
    Pd = Oc && (!document.documentMode || 9 < document.documentMode);
  }
  function Wd() {
    Wa && (Wa.detachEvent('onpropertychange', eh), (el = Wa = null));
  }
  function eh(e) {
    if (e.propertyName === 'value' && Ou(el)) {
      var t = [];
      Zd(t, el, e, bc(e)), Id(x1, t);
    }
  }
  function w1(e, t, n) {
    e === 'focusin' ? (Wd(), (Wa = t), (el = n), Wa.attachEvent('onpropertychange', eh)) : e === 'focusout' && Wd();
  }
  function E1(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ou(el);
  }
  function A1(e, t) {
    if (e === 'click') return Ou(t);
  }
  function _1(e, t) {
    if (e === 'input' || e === 'change') return Ou(t);
  }
  function N1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Tr = typeof Object.is == 'function' ? Object.is : N1;
  function tl(e, t) {
    if (Tr(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var c = n[l];
      if (!q.call(t, c) || !Tr(e[c], t[c])) return !1;
    }
    return !0;
  }
  function th(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rh(e, t) {
    var n = th(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t)) return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = th(n);
    }
  }
  function nh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? nh(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ih(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = xu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xu(e.document);
    }
    return t;
  }
  function Rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function T1(e, t) {
    var n = ih(t);
    t = e.focusedElem;
    var l = e.selectionRange;
    if (n !== t && t && t.ownerDocument && nh(t.ownerDocument.documentElement, t)) {
      if (l !== null && Rc(t)) {
        if (((e = l.start), (n = l.end), n === void 0 && (n = e), 'selectionStart' in t))
          (t.selectionStart = e), (t.selectionEnd = Math.min(n, t.value.length));
        else if (((n = ((e = t.ownerDocument || document) && e.defaultView) || window), n.getSelection)) {
          n = n.getSelection();
          var c = t.textContent.length,
            o = Math.min(l.start, c);
          (l = l.end === void 0 ? o : Math.min(l.end, c)),
            !n.extend && o > l && ((c = l), (l = o), (o = c)),
            (c = rh(t, o));
          var x = rh(t, l);
          c &&
            x &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== c.node ||
              n.anchorOffset !== c.offset ||
              n.focusNode !== x.node ||
              n.focusOffset !== x.offset) &&
            ((e = e.createRange()),
            e.setStart(c.node, c.offset),
            n.removeAllRanges(),
            o > l ? (n.addRange(e), n.extend(x.node, x.offset)) : (e.setEnd(x.node, x.offset), n.addRange(e)));
        }
      }
      for (e = [], n = t; (n = n.parentNode); )
        n.nodeType === 1 && e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof t.focus == 'function' && t.focus(), t = 0; t < e.length; t++)
        (n = e[t]), (n.element.scrollLeft = n.left), (n.element.scrollTop = n.top);
    }
  }
  var O1 = fn && 'documentMode' in document && 11 >= document.documentMode,
    ha = null,
    Bc = null,
    rl = null,
    Cc = !1;
  function ah(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Cc ||
      ha == null ||
      ha !== xu(l) ||
      ((l = ha),
      'selectionStart' in l && Rc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
          })),
      (rl && tl(rl, l)) ||
        ((rl = l),
        (l = os(Bc, 'onSelect')),
        0 < l.length &&
          ((t = new Nu('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: l }), (t.target = ha))));
  }
  function Ri(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
  }
  var ma = {
      animationend: Ri('Animation', 'AnimationEnd'),
      animationiteration: Ri('Animation', 'AnimationIteration'),
      animationstart: Ri('Animation', 'AnimationStart'),
      transitionrun: Ri('Transition', 'TransitionRun'),
      transitionstart: Ri('Transition', 'TransitionStart'),
      transitioncancel: Ri('Transition', 'TransitionCancel'),
      transitionend: Ri('Transition', 'TransitionEnd')
    },
    Dc = {},
    lh = {};
  fn &&
    ((lh = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation),
    'TransitionEvent' in window || delete ma.transitionend.transition);
  function Bi(e) {
    if (Dc[e]) return Dc[e];
    if (!ma[e]) return e;
    var t = ma[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in lh) return (Dc[e] = t[n]);
    return e;
  }
  var uh = Bi('animationend'),
    sh = Bi('animationiteration'),
    ch = Bi('animationstart'),
    M1 = Bi('transitionrun'),
    R1 = Bi('transitionstart'),
    B1 = Bi('transitioncancel'),
    oh = Bi('transitionend'),
    fh = new Map(),
    dh =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' '
      );
  function tn(e, t) {
    fh.set(e, t), kr(t, [e]);
  }
  var zr = [],
    pa = 0,
    Uc = 0;
  function Mu() {
    for (var e = pa, t = (Uc = pa = 0); t < e; ) {
      var n = zr[t];
      zr[t++] = null;
      var l = zr[t];
      zr[t++] = null;
      var c = zr[t];
      zr[t++] = null;
      var o = zr[t];
      if (((zr[t++] = null), l !== null && c !== null)) {
        var x = l.pending;
        x === null ? (c.next = c) : ((c.next = x.next), (x.next = c)), (l.pending = c);
      }
      o !== 0 && hh(n, c, o);
    }
  }
  function Ru(e, t, n, l) {
    (zr[pa++] = e),
      (zr[pa++] = t),
      (zr[pa++] = n),
      (zr[pa++] = l),
      (Uc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function jc(e, t, n, l) {
    return Ru(e, t, n, l), Bu(e);
  }
  function Wn(e, t) {
    return Ru(e, null, null, t), Bu(e);
  }
  function hh(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var c = !1, o = e.return; o !== null; )
      (o.childLanes |= n),
        (l = o.alternate),
        l !== null && (l.childLanes |= n),
        o.tag === 22 && ((e = o.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = o),
        (o = o.return);
    c &&
      t !== null &&
      e.tag === 3 &&
      ((o = e.stateNode),
      (c = 31 - Ie(n)),
      (o = o.hiddenUpdates),
      (e = o[c]),
      e === null ? (o[c] = [t]) : e.push(t),
      (t.lane = n | 536870912));
  }
  function Bu(e) {
    if (50 < Tl) throw ((Tl = 0), (Fo = null), Error(u(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ya = {},
    mh = new WeakMap();
  function Hr(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = mh.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: $(t) }), mh.set(e, t), t);
    }
    return { value: e, source: t, stack: $(t) };
  }
  var ga = [],
    va = 0,
    Cu = null,
    Du = 0,
    Fr = [],
    Vr = 0,
    Ci = null,
    _n = 1,
    Nn = '';
  function Di(e, t) {
    (ga[va++] = Du), (ga[va++] = Cu), (Cu = e), (Du = t);
  }
  function ph(e, t, n) {
    (Fr[Vr++] = _n), (Fr[Vr++] = Nn), (Fr[Vr++] = Ci), (Ci = e);
    var l = _n;
    e = Nn;
    var c = 32 - Ie(l) - 1;
    (l &= ~(1 << c)), (n += 1);
    var o = 32 - Ie(t) + c;
    if (30 < o) {
      var x = c - (c % 5);
      (o = (l & ((1 << x) - 1)).toString(32)),
        (l >>= x),
        (c -= x),
        (_n = (1 << (32 - Ie(t) + c)) | (n << c) | l),
        (Nn = o + e);
    } else (_n = (1 << o) | (n << c) | l), (Nn = e);
  }
  function kc(e) {
    e.return !== null && (Di(e, 1), ph(e, 1, 0));
  }
  function Ic(e) {
    for (; e === Cu; ) (Cu = ga[--va]), (ga[va] = null), (Du = ga[--va]), (ga[va] = null);
    for (; e === Ci; )
      (Ci = Fr[--Vr]), (Fr[Vr] = null), (Nn = Fr[--Vr]), (Fr[Vr] = null), (_n = Fr[--Vr]), (Fr[Vr] = null);
  }
  var hr = null,
    rr = null,
    bt = !1,
    rn = null,
    dn = !1,
    Lc = Error(u(519));
  function Ui(e) {
    var t = Error(u(418, ''));
    throw (al(Hr(t, e)), Lc);
  }
  function yh(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[dt] = e), (t[lr] = l), n)) {
      case 'dialog':
        yt('cancel', t), yt('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        yt('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Ml.length; n++) yt(Ml[n], t);
        break;
      case 'source':
        yt('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        yt('error', t), yt('load', t);
        break;
      case 'details':
        yt('toggle', t);
        break;
      case 'input':
        yt('invalid', t), Bd(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), Su(t);
        break;
      case 'select':
        yt('invalid', t);
        break;
      case 'textarea':
        yt('invalid', t), Dd(t, l.value, l.defaultValue, l.children), Su(t);
    }
    (n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      _m(t.textContent, n)
        ? (l.popover != null && (yt('beforetoggle', t), yt('toggle', t)),
          l.onScroll != null && yt('scroll', t),
          l.onScrollEnd != null && yt('scrollend', t),
          l.onClick != null && (t.onclick = fs),
          (t = !0))
        : (t = !1),
      t || Ui(e);
  }
  function gh(e) {
    for (hr = e.return; hr; )
      switch (hr.tag) {
        case 3:
        case 27:
          dn = !0;
          return;
        case 5:
        case 13:
          dn = !1;
          return;
        default:
          hr = hr.return;
      }
  }
  function nl(e) {
    if (e !== hr) return !1;
    if (!bt) return gh(e), (bt = !0), !1;
    var t = !1,
      n;
    if (
      ((n = e.tag !== 3 && e.tag !== 27) &&
        ((n = e.tag === 5) && ((n = e.type), (n = !(n !== 'form' && n !== 'button') || lf(e.type, e.memoizedProps))),
        (n = !n)),
      n && (t = !0),
      t && rr && Ui(e),
      gh(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === '/$')) {
              if (t === 0) {
                rr = an(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          e = e.nextSibling;
        }
        rr = null;
      }
    } else rr = hr ? an(e.stateNode.nextSibling) : null;
    return !0;
  }
  function il() {
    (rr = hr = null), (bt = !1);
  }
  function al(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  var ll = Error(u(460)),
    vh = Error(u(474)),
    qc = { then: function () {} };
  function bh(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Uu() {}
  function Sh(e, t, n) {
    switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Uu, Uu), (t = n)), t.status)) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), e === ll ? Error(u(483)) : e);
      default:
        if (typeof t.status == 'string') t.then(Uu, Uu);
        else {
          if (((e = Ot), e !== null && 100 < e.shellSuspendCounter)) throw Error(u(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var c = t;
                  (c.status = 'fulfilled'), (c.value = l);
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var c = t;
                  (c.status = 'rejected'), (c.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), e === ll ? Error(u(483)) : e);
        }
        throw ((ul = t), ll);
    }
  }
  var ul = null;
  function xh() {
    if (ul === null) throw Error(u(459));
    var e = ul;
    return (ul = null), e;
  }
  var ba = null,
    sl = 0;
  function ju(e) {
    var t = sl;
    return (sl += 1), ba === null && (ba = []), Sh(ba, e, t);
  }
  function cl(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function ku(e, t) {
    throw t.$$typeof === f
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(u(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
  }
  function wh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Eh(e) {
    function t(me, ce) {
      if (e) {
        var pe = me.deletions;
        pe === null ? ((me.deletions = [ce]), (me.flags |= 16)) : pe.push(ce);
      }
    }
    function n(me, ce) {
      if (!e) return null;
      for (; ce !== null; ) t(me, ce), (ce = ce.sibling);
      return null;
    }
    function l(me) {
      for (var ce = new Map(); me !== null; )
        me.key !== null ? ce.set(me.key, me) : ce.set(me.index, me), (me = me.sibling);
      return ce;
    }
    function c(me, ce) {
      return (me = fi(me, ce)), (me.index = 0), (me.sibling = null), me;
    }
    function o(me, ce, pe) {
      return (
        (me.index = pe),
        e
          ? ((pe = me.alternate),
            pe !== null ? ((pe = pe.index), pe < ce ? ((me.flags |= 33554434), ce) : pe) : ((me.flags |= 33554434), ce))
          : ((me.flags |= 1048576), ce)
      );
    }
    function x(me) {
      return e && me.alternate === null && (me.flags |= 33554434), me;
    }
    function C(me, ce, pe, Te) {
      return ce === null || ce.tag !== 6
        ? ((ce = Uo(pe, me.mode, Te)), (ce.return = me), ce)
        : ((ce = c(ce, pe)), (ce.return = me), ce);
    }
    function K(me, ce, pe, Te) {
      var Ke = pe.type;
      return Ke === p
        ? _e(me, ce, pe.props.children, Te, pe.key)
        : ce !== null &&
            (ce.elementType === Ke || (typeof Ke == 'object' && Ke !== null && Ke.$$typeof === z && wh(Ke) === ce.type))
          ? ((ce = c(ce, pe.props)), cl(ce, pe), (ce.return = me), ce)
          : ((ce = es(pe.type, pe.key, pe.props, null, me.mode, Te)), cl(ce, pe), (ce.return = me), ce);
    }
    function fe(me, ce, pe, Te) {
      return ce === null ||
        ce.tag !== 4 ||
        ce.stateNode.containerInfo !== pe.containerInfo ||
        ce.stateNode.implementation !== pe.implementation
        ? ((ce = jo(pe, me.mode, Te)), (ce.return = me), ce)
        : ((ce = c(ce, pe.children || [])), (ce.return = me), ce);
    }
    function _e(me, ce, pe, Te, Ke) {
      return ce === null || ce.tag !== 7
        ? ((ce = Gi(pe, me.mode, Te, Ke)), (ce.return = me), ce)
        : ((ce = c(ce, pe)), (ce.return = me), ce);
    }
    function Re(me, ce, pe) {
      if ((typeof ce == 'string' && ce !== '') || typeof ce == 'number' || typeof ce == 'bigint')
        return (ce = Uo('' + ce, me.mode, pe)), (ce.return = me), ce;
      if (typeof ce == 'object' && ce !== null) {
        switch (ce.$$typeof) {
          case d:
            return (pe = es(ce.type, ce.key, ce.props, null, me.mode, pe)), cl(pe, ce), (pe.return = me), pe;
          case h:
            return (ce = jo(ce, me.mode, pe)), (ce.return = me), ce;
          case z:
            var Te = ce._init;
            return (ce = Te(ce._payload)), Re(me, ce, pe);
        }
        if (ye(ce) || Ee(ce)) return (ce = Gi(ce, me.mode, pe, null)), (ce.return = me), ce;
        if (typeof ce.then == 'function') return Re(me, ju(ce), pe);
        if (ce.$$typeof === E) return Re(me, Pu(me, ce), pe);
        ku(me, ce);
      }
      return null;
    }
    function be(me, ce, pe, Te) {
      var Ke = ce !== null ? ce.key : null;
      if ((typeof pe == 'string' && pe !== '') || typeof pe == 'number' || typeof pe == 'bigint')
        return Ke !== null ? null : C(me, ce, '' + pe, Te);
      if (typeof pe == 'object' && pe !== null) {
        switch (pe.$$typeof) {
          case d:
            return pe.key === Ke ? K(me, ce, pe, Te) : null;
          case h:
            return pe.key === Ke ? fe(me, ce, pe, Te) : null;
          case z:
            return (Ke = pe._init), (pe = Ke(pe._payload)), be(me, ce, pe, Te);
        }
        if (ye(pe) || Ee(pe)) return Ke !== null ? null : _e(me, ce, pe, Te, null);
        if (typeof pe.then == 'function') return be(me, ce, ju(pe), Te);
        if (pe.$$typeof === E) return be(me, ce, Pu(me, pe), Te);
        ku(me, pe);
      }
      return null;
    }
    function Ae(me, ce, pe, Te, Ke) {
      if ((typeof Te == 'string' && Te !== '') || typeof Te == 'number' || typeof Te == 'bigint')
        return (me = me.get(pe) || null), C(ce, me, '' + Te, Ke);
      if (typeof Te == 'object' && Te !== null) {
        switch (Te.$$typeof) {
          case d:
            return (me = me.get(Te.key === null ? pe : Te.key) || null), K(ce, me, Te, Ke);
          case h:
            return (me = me.get(Te.key === null ? pe : Te.key) || null), fe(ce, me, Te, Ke);
          case z:
            var ft = Te._init;
            return (Te = ft(Te._payload)), Ae(me, ce, pe, Te, Ke);
        }
        if (ye(Te) || Ee(Te)) return (me = me.get(pe) || null), _e(ce, me, Te, Ke, null);
        if (typeof Te.then == 'function') return Ae(me, ce, pe, ju(Te), Ke);
        if (Te.$$typeof === E) return Ae(me, ce, pe, Pu(ce, Te), Ke);
        ku(ce, Te);
      }
      return null;
    }
    function Ze(me, ce, pe, Te) {
      for (var Ke = null, ft = null, Qe = ce, tt = (ce = 0), tr = null; Qe !== null && tt < pe.length; tt++) {
        Qe.index > tt ? ((tr = Qe), (Qe = null)) : (tr = Qe.sibling);
        var St = be(me, Qe, pe[tt], Te);
        if (St === null) {
          Qe === null && (Qe = tr);
          break;
        }
        e && Qe && St.alternate === null && t(me, Qe),
          (ce = o(St, ce, tt)),
          ft === null ? (Ke = St) : (ft.sibling = St),
          (ft = St),
          (Qe = tr);
      }
      if (tt === pe.length) return n(me, Qe), bt && Di(me, tt), Ke;
      if (Qe === null) {
        for (; tt < pe.length; tt++)
          (Qe = Re(me, pe[tt], Te)),
            Qe !== null && ((ce = o(Qe, ce, tt)), ft === null ? (Ke = Qe) : (ft.sibling = Qe), (ft = Qe));
        return bt && Di(me, tt), Ke;
      }
      for (Qe = l(Qe); tt < pe.length; tt++)
        (tr = Ae(Qe, me, tt, pe[tt], Te)),
          tr !== null &&
            (e && tr.alternate !== null && Qe.delete(tr.key === null ? tt : tr.key),
            (ce = o(tr, ce, tt)),
            ft === null ? (Ke = tr) : (ft.sibling = tr),
            (ft = tr));
      return (
        e &&
          Qe.forEach(function (vi) {
            return t(me, vi);
          }),
        bt && Di(me, tt),
        Ke
      );
    }
    function nt(me, ce, pe, Te) {
      if (pe == null) throw Error(u(151));
      for (
        var Ke = null, ft = null, Qe = ce, tt = (ce = 0), tr = null, St = pe.next();
        Qe !== null && !St.done;
        tt++, St = pe.next()
      ) {
        Qe.index > tt ? ((tr = Qe), (Qe = null)) : (tr = Qe.sibling);
        var vi = be(me, Qe, St.value, Te);
        if (vi === null) {
          Qe === null && (Qe = tr);
          break;
        }
        e && Qe && vi.alternate === null && t(me, Qe),
          (ce = o(vi, ce, tt)),
          ft === null ? (Ke = vi) : (ft.sibling = vi),
          (ft = vi),
          (Qe = tr);
      }
      if (St.done) return n(me, Qe), bt && Di(me, tt), Ke;
      if (Qe === null) {
        for (; !St.done; tt++, St = pe.next())
          (St = Re(me, St.value, Te)),
            St !== null && ((ce = o(St, ce, tt)), ft === null ? (Ke = St) : (ft.sibling = St), (ft = St));
        return bt && Di(me, tt), Ke;
      }
      for (Qe = l(Qe); !St.done; tt++, St = pe.next())
        (St = Ae(Qe, me, tt, St.value, Te)),
          St !== null &&
            (e && St.alternate !== null && Qe.delete(St.key === null ? tt : St.key),
            (ce = o(St, ce, tt)),
            ft === null ? (Ke = St) : (ft.sibling = St),
            (ft = St));
      return (
        e &&
          Qe.forEach(function ($v) {
            return t(me, $v);
          }),
        bt && Di(me, tt),
        Ke
      );
    }
    function Ft(me, ce, pe, Te) {
      if (
        (typeof pe == 'object' && pe !== null && pe.type === p && pe.key === null && (pe = pe.props.children),
        typeof pe == 'object' && pe !== null)
      ) {
        switch (pe.$$typeof) {
          case d:
            e: {
              for (var Ke = pe.key; ce !== null; ) {
                if (ce.key === Ke) {
                  if (((Ke = pe.type), Ke === p)) {
                    if (ce.tag === 7) {
                      n(me, ce.sibling), (Te = c(ce, pe.props.children)), (Te.return = me), (me = Te);
                      break e;
                    }
                  } else if (
                    ce.elementType === Ke ||
                    (typeof Ke == 'object' && Ke !== null && Ke.$$typeof === z && wh(Ke) === ce.type)
                  ) {
                    n(me, ce.sibling), (Te = c(ce, pe.props)), cl(Te, pe), (Te.return = me), (me = Te);
                    break e;
                  }
                  n(me, ce);
                  break;
                } else t(me, ce);
                ce = ce.sibling;
              }
              pe.type === p
                ? ((Te = Gi(pe.props.children, me.mode, Te, pe.key)), (Te.return = me), (me = Te))
                : ((Te = es(pe.type, pe.key, pe.props, null, me.mode, Te)), cl(Te, pe), (Te.return = me), (me = Te));
            }
            return x(me);
          case h:
            e: {
              for (Ke = pe.key; ce !== null; ) {
                if (ce.key === Ke)
                  if (
                    ce.tag === 4 &&
                    ce.stateNode.containerInfo === pe.containerInfo &&
                    ce.stateNode.implementation === pe.implementation
                  ) {
                    n(me, ce.sibling), (Te = c(ce, pe.children || [])), (Te.return = me), (me = Te);
                    break e;
                  } else {
                    n(me, ce);
                    break;
                  }
                else t(me, ce);
                ce = ce.sibling;
              }
              (Te = jo(pe, me.mode, Te)), (Te.return = me), (me = Te);
            }
            return x(me);
          case z:
            return (Ke = pe._init), (pe = Ke(pe._payload)), Ft(me, ce, pe, Te);
        }
        if (ye(pe)) return Ze(me, ce, pe, Te);
        if (Ee(pe)) {
          if (((Ke = Ee(pe)), typeof Ke != 'function')) throw Error(u(150));
          return (pe = Ke.call(pe)), nt(me, ce, pe, Te);
        }
        if (typeof pe.then == 'function') return Ft(me, ce, ju(pe), Te);
        if (pe.$$typeof === E) return Ft(me, ce, Pu(me, pe), Te);
        ku(me, pe);
      }
      return (typeof pe == 'string' && pe !== '') || typeof pe == 'number' || typeof pe == 'bigint'
        ? ((pe = '' + pe),
          ce !== null && ce.tag === 6
            ? (n(me, ce.sibling), (Te = c(ce, pe)), (Te.return = me), (me = Te))
            : (n(me, ce), (Te = Uo(pe, me.mode, Te)), (Te.return = me), (me = Te)),
          x(me))
        : n(me, ce);
    }
    return function (me, ce, pe, Te) {
      try {
        sl = 0;
        var Ke = Ft(me, ce, pe, Te);
        return (ba = null), Ke;
      } catch (Qe) {
        if (Qe === ll) throw Qe;
        var ft = Xr(29, Qe, null, me.mode);
        return (ft.lanes = Te), (ft.return = me), ft;
      } finally {
      }
    };
  }
  var ji = Eh(!0),
    Ah = Eh(!1),
    Sa = Me(null),
    Iu = Me(0);
  function _h(e, t) {
    (e = In), B(Iu, e), B(Sa, t), (In = e | t.baseLanes);
  }
  function zc() {
    B(Iu, In), B(Sa, Sa.current);
  }
  function Hc() {
    (In = Iu.current), ke(Sa), ke(Iu);
  }
  var Gr = Me(null),
    hn = null;
  function ei(e) {
    var t = e.alternate;
    B(Qt, Qt.current & 1),
      B(Gr, e),
      hn === null && (t === null || Sa.current !== null || t.memoizedState !== null) && (hn = e);
  }
  function Nh(e) {
    if (e.tag === 22) {
      if ((B(Qt, Qt.current), B(Gr, e), hn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (hn = e);
      }
    } else ti();
  }
  function ti() {
    B(Qt, Qt.current), B(Gr, Gr.current);
  }
  function Tn(e) {
    ke(Gr), hn === e && (hn = null), ke(Qt);
  }
  var Qt = Me(0);
  function Lu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
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
  var C1 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                }
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    D1 = r.unstable_scheduleCallback,
    U1 = r.unstable_NormalPriority,
    Pt = { $$typeof: E, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Fc() {
    return { controller: new C1(), data: new Map(), refCount: 0 };
  }
  function ol(e) {
    e.refCount--,
      e.refCount === 0 &&
        D1(U1, function () {
          e.controller.abort();
        });
  }
  var fl = null,
    Vc = 0,
    xa = 0,
    wa = null;
  function j1(e, t) {
    if (fl === null) {
      var n = (fl = []);
      (Vc = 0),
        (xa = Qo()),
        (wa = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          }
        });
    }
    return Vc++, t.then(Th, Th), t;
  }
  function Th() {
    if (--Vc === 0 && fl !== null) {
      wa !== null && (wa.status = 'fulfilled');
      var e = fl;
      (fl = null), (xa = 0), (wa = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function k1(e, t) {
    var n = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (c) {
          n.push(c);
        }
      };
    return (
      e.then(
        function () {
          (l.status = 'fulfilled'), (l.value = t);
          for (var c = 0; c < n.length; c++) (0, n[c])(t);
        },
        function (c) {
          for (l.status = 'rejected', l.reason = c, c = 0; c < n.length; c++) (0, n[c])(void 0);
        }
      ),
      l
    );
  }
  var Oh = w.S;
  w.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && j1(e, t), Oh !== null && Oh(e, t);
  };
  var ki = Me(null);
  function Gc() {
    var e = ki.current;
    return e !== null ? e : Ot.pooledCache;
  }
  function qu(e, t) {
    t === null ? B(ki, ki.current) : B(ki, t.pool);
  }
  function Mh() {
    var e = Gc();
    return e === null ? null : { parent: Pt._currentValue, pool: e };
  }
  var ri = 0,
    ct = null,
    Et = null,
    Xt = null,
    zu = !1,
    Ea = !1,
    Ii = !1,
    Hu = 0,
    dl = 0,
    Aa = null,
    I1 = 0;
  function Vt() {
    throw Error(u(321));
  }
  function $c(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Tr(e[n], t[n])) return !1;
    return !0;
  }
  function Yc(e, t, n, l, c, o) {
    return (
      (ri = o),
      (ct = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (w.H = e === null || e.memoizedState === null ? Li : ni),
      (Ii = !1),
      (o = n(l, c)),
      (Ii = !1),
      Ea && (o = Bh(t, n, l, c)),
      Rh(e),
      o
    );
  }
  function Rh(e) {
    w.H = mn;
    var t = Et !== null && Et.next !== null;
    if (((ri = 0), (Xt = Et = ct = null), (zu = !1), (dl = 0), (Aa = null), t)) throw Error(u(300));
    e === null || Wt || ((e = e.dependencies), e !== null && Qu(e) && (Wt = !0));
  }
  function Bh(e, t, n, l) {
    ct = e;
    var c = 0;
    do {
      if ((Ea && (Aa = null), (dl = 0), (Ea = !1), 25 <= c)) throw Error(u(301));
      if (((c += 1), (Xt = Et = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        (o.lastEffect = null), (o.events = null), (o.stores = null), o.memoCache != null && (o.memoCache.index = 0);
      }
      (w.H = qi), (o = t(n, l));
    } while (Ea);
    return o;
  }
  function L1() {
    var e = w.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? hl(t) : t),
      (e = e.useState()[0]),
      (Et !== null ? Et.memoizedState : null) !== e && (ct.flags |= 1024),
      t
    );
  }
  function Xc() {
    var e = Hu !== 0;
    return (Hu = 0), e;
  }
  function Kc(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Zc(e) {
    if (zu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      zu = !1;
    }
    (ri = 0), (Xt = Et = ct = null), (Ea = !1), (dl = Hu = 0), (Aa = null);
  }
  function br() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xt === null ? (ct.memoizedState = Xt = e) : (Xt = Xt.next = e), Xt;
  }
  function Kt() {
    if (Et === null) {
      var e = ct.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Et.next;
    var t = Xt === null ? ct.memoizedState : Xt.next;
    if (t !== null) (Xt = t), (Et = e);
    else {
      if (e === null) throw ct.alternate === null ? Error(u(467)) : Error(u(310));
      (Et = e),
        (e = {
          memoizedState: Et.memoizedState,
          baseState: Et.baseState,
          baseQueue: Et.baseQueue,
          queue: Et.queue,
          next: null
        }),
        Xt === null ? (ct.memoizedState = Xt = e) : (Xt = Xt.next = e);
    }
    return Xt;
  }
  var Fu;
  Fu = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function hl(e) {
    var t = dl;
    return (
      (dl += 1),
      Aa === null && (Aa = []),
      (e = Sh(Aa, e, t)),
      (t = ct),
      (Xt === null ? t.memoizedState : Xt.next) === null &&
        ((t = t.alternate), (w.H = t === null || t.memoizedState === null ? Li : ni)),
      e
    );
  }
  function Vu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return hl(e);
      if (e.$$typeof === E) return ur(e);
    }
    throw Error(u(438, String(e)));
  }
  function Qc(e) {
    var t = null,
      n = ct.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = ct.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Fu()), (ct.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = qe;
    return t.index++, n;
  }
  function On(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Gu(e) {
    var t = Kt();
    return Pc(t, Et, e);
  }
  function Pc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = n;
    var c = e.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (c !== null) {
        var x = c.next;
        (c.next = o.next), (o.next = x);
      }
      (t.baseQueue = c = o), (l.pending = null);
    }
    if (((o = e.baseState), c === null)) e.memoizedState = o;
    else {
      t = c.next;
      var C = (x = null),
        K = null,
        fe = t,
        _e = !1;
      do {
        var Re = fe.lane & -536870913;
        if (Re !== fe.lane ? (gt & Re) === Re : (ri & Re) === Re) {
          var be = fe.revertLane;
          if (be === 0)
            K !== null &&
              (K = K.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: fe.action,
                  hasEagerState: fe.hasEagerState,
                  eagerState: fe.eagerState,
                  next: null
                }),
              Re === xa && (_e = !0);
          else if ((ri & be) === be) {
            (fe = fe.next), be === xa && (_e = !0);
            continue;
          } else
            (Re = {
              lane: 0,
              revertLane: fe.revertLane,
              action: fe.action,
              hasEagerState: fe.hasEagerState,
              eagerState: fe.eagerState,
              next: null
            }),
              K === null ? ((C = K = Re), (x = o)) : (K = K.next = Re),
              (ct.lanes |= be),
              (di |= be);
          (Re = fe.action), Ii && n(o, Re), (o = fe.hasEagerState ? fe.eagerState : n(o, Re));
        } else
          (be = {
            lane: Re,
            revertLane: fe.revertLane,
            action: fe.action,
            hasEagerState: fe.hasEagerState,
            eagerState: fe.eagerState,
            next: null
          }),
            K === null ? ((C = K = be), (x = o)) : (K = K.next = be),
            (ct.lanes |= Re),
            (di |= Re);
        fe = fe.next;
      } while (fe !== null && fe !== t);
      if ((K === null ? (x = o) : (K.next = C), !Tr(o, e.memoizedState) && ((Wt = !0), _e && ((n = wa), n !== null))))
        throw n;
      (e.memoizedState = o), (e.baseState = x), (e.baseQueue = K), (l.lastRenderedState = o);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Jc(e) {
    var t = Kt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      c = n.pending,
      o = t.memoizedState;
    if (c !== null) {
      n.pending = null;
      var x = (c = c.next);
      do (o = e(o, x.action)), (x = x.next);
      while (x !== c);
      Tr(o, t.memoizedState) || (Wt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, l];
  }
  function Ch(e, t, n) {
    var l = ct,
      c = Kt(),
      o = bt;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = t();
    var x = !Tr((Et || c).memoizedState, n);
    if (
      (x && ((c.memoizedState = n), (Wt = !0)),
      (c = c.queue),
      to(jh.bind(null, l, c, e), [e]),
      c.getSnapshot !== t || x || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), _a(9, Uh.bind(null, l, c, n, t), { destroy: void 0 }, null), Ot === null))
        throw Error(u(349));
      o || (ri & 60) !== 0 || Dh(l, t, n);
    }
    return n;
  }
  function Dh(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ct.updateQueue),
      t === null
        ? ((t = Fu()), (ct.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Uh(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), kh(t) && Ih(e);
  }
  function jh(e, t, n) {
    return n(function () {
      kh(t) && Ih(e);
    });
  }
  function kh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Tr(e, n);
    } catch {
      return !0;
    }
  }
  function Ih(e) {
    var t = Wn(e, 2);
    t !== null && mr(t, e, 2);
  }
  function Wc(e) {
    var t = br();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Ii)) {
        Ce(!0);
        try {
          n();
        } finally {
          Ce(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: e }),
      t
    );
  }
  function Lh(e, t, n, l) {
    return (e.baseState = n), Pc(e, Et, typeof l == 'function' ? l : On);
  }
  function q1(e, t, n, l, c) {
    if (Xu(e)) throw Error(u(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (x) {
          o.listeners.push(x);
        }
      };
      w.T !== null ? n(!0) : (o.isTransition = !1),
        l(o),
        (n = t.pending),
        n === null ? ((o.next = t.pending = o), qh(t, o)) : ((o.next = n.next), (t.pending = n.next = o));
    }
  }
  function qh(e, t) {
    var n = t.action,
      l = t.payload,
      c = e.state;
    if (t.isTransition) {
      var o = w.T,
        x = {};
      w.T = x;
      try {
        var C = n(c, l),
          K = w.S;
        K !== null && K(x, C), zh(e, t, C);
      } catch (fe) {
        eo(e, t, fe);
      } finally {
        w.T = o;
      }
    } else
      try {
        (o = n(c, l)), zh(e, t, o);
      } catch (fe) {
        eo(e, t, fe);
      }
  }
  function zh(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            Hh(e, t, l);
          },
          function (l) {
            return eo(e, t, l);
          }
        )
      : Hh(e, t, n);
  }
  function Hh(e, t, n) {
    (t.status = 'fulfilled'),
      (t.value = n),
      Fh(t),
      (e.state = n),
      (t = e.pending),
      t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), qh(e, n)));
  }
  function eo(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = 'rejected'), (t.reason = n), Fh(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function Fh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Vh(e, t) {
    return t;
  }
  function Gh(e, t) {
    if (bt) {
      var n = Ot.formState;
      if (n !== null) {
        e: {
          var l = ct;
          if (bt) {
            if (rr) {
              t: {
                for (var c = rr, o = dn; c.nodeType !== 8; ) {
                  if (!o) {
                    c = null;
                    break t;
                  }
                  if (((c = an(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (o = c.data), (c = o === 'F!' || o === 'F' ? c : null);
              }
              if (c) {
                (rr = an(c.nextSibling)), (l = c.data === 'F!');
                break e;
              }
            }
            Ui(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = br()),
      (n.memoizedState = n.baseState = t),
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: t }),
      (n.queue = l),
      (n = s0.bind(null, ct, l)),
      (l.dispatch = n),
      (l = Wc(!1)),
      (o = lo.bind(null, ct, !1, l.queue)),
      (l = br()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (n = q1.bind(null, ct, c, o, n)),
      (c.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function $h(e) {
    var t = Kt();
    return Yh(t, Et, e);
  }
  function Yh(e, t, n) {
    (t = Pc(e, t, Vh)[0]),
      (e = Gu(On)[0]),
      (t = typeof t == 'object' && t !== null && typeof t.then == 'function' ? hl(t) : t);
    var l = Kt(),
      c = l.queue,
      o = c.dispatch;
    return (
      n !== l.memoizedState && ((ct.flags |= 2048), _a(9, z1.bind(null, c, n), { destroy: void 0 }, null)), [t, o, e]
    );
  }
  function z1(e, t) {
    e.action = t;
  }
  function Xh(e) {
    var t = Kt(),
      n = Et;
    if (n !== null) return Yh(t, n, e);
    Kt(), (t = t.memoizedState), (n = Kt());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function _a(e, t, n, l) {
    return (
      (e = { tag: e, create: t, inst: n, deps: l, next: null }),
      (t = ct.updateQueue),
      t === null && ((t = Fu()), (ct.updateQueue = t)),
      (n = t.lastEffect),
      n === null ? (t.lastEffect = e.next = e) : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Kh() {
    return Kt().memoizedState;
  }
  function $u(e, t, n, l) {
    var c = br();
    (ct.flags |= e), (c.memoizedState = _a(1 | t, n, { destroy: void 0 }, l === void 0 ? null : l));
  }
  function Yu(e, t, n, l) {
    var c = Kt();
    l = l === void 0 ? null : l;
    var o = c.memoizedState.inst;
    Et !== null && l !== null && $c(l, Et.memoizedState.deps)
      ? (c.memoizedState = _a(t, n, o, l))
      : ((ct.flags |= e), (c.memoizedState = _a(1 | t, n, o, l)));
  }
  function Zh(e, t) {
    $u(8390656, 8, e, t);
  }
  function to(e, t) {
    Yu(2048, 8, e, t);
  }
  function Qh(e, t) {
    return Yu(4, 2, e, t);
  }
  function Ph(e, t) {
    return Yu(4, 4, e, t);
  }
  function Jh(e, t) {
    if (typeof t == 'function') {
      e = e();
      var n = t(e);
      return function () {
        typeof n == 'function' ? n() : t(null);
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
  function Wh(e, t, n) {
    (n = n != null ? n.concat([e]) : null), Yu(4, 4, Jh.bind(null, t, e), n);
  }
  function ro() {}
  function e0(e, t) {
    var n = Kt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && $c(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function t0(e, t) {
    var n = Kt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && $c(t, l[1])) return l[0];
    if (((l = e()), Ii)) {
      Ce(!0);
      try {
        e();
      } finally {
        Ce(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function no(e, t, n) {
    return n === void 0 || (ri & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = nm()), (ct.lanes |= e), (di |= e), n);
  }
  function r0(e, t, n, l) {
    return Tr(n, t)
      ? n
      : Sa.current !== null
        ? ((e = no(e, n, l)), Tr(e, t) || (Wt = !0), e)
        : (ri & 42) === 0
          ? ((Wt = !0), (e.memoizedState = n))
          : ((e = nm()), (ct.lanes |= e), (di |= e), t);
  }
  function n0(e, t, n, l, c) {
    var o = O.p;
    O.p = o !== 0 && 8 > o ? o : 8;
    var x = w.T,
      C = {};
    (w.T = C), lo(e, !1, t, n);
    try {
      var K = c(),
        fe = w.S;
      if ((fe !== null && fe(C, K), K !== null && typeof K == 'object' && typeof K.then == 'function')) {
        var _e = k1(K, l);
        ml(e, t, _e, Br(e));
      } else ml(e, t, l, Br(e));
    } catch (Re) {
      ml(e, t, { then: function () {}, status: 'rejected', reason: Re }, Br());
    } finally {
      (O.p = o), (w.T = x);
    }
  }
  function H1() {}
  function io(e, t, n, l) {
    if (e.tag !== 5) throw Error(u(476));
    var c = i0(e).queue;
    n0(
      e,
      c,
      t,
      je,
      n === null
        ? H1
        : function () {
            return a0(e), n(l);
          }
    );
  }
  function i0(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: je,
      baseState: je,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: je },
      next: null
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: n },
        next: null
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function a0(e) {
    var t = i0(e).next.queue;
    ml(e, t, {}, Br());
  }
  function ao() {
    return ur(Ul);
  }
  function l0() {
    return Kt().memoizedState;
  }
  function u0() {
    return Kt().memoizedState;
  }
  function F1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Br();
          e = li(n);
          var l = ui(t, e, n);
          l !== null && (mr(l, t, n), gl(l, t, n)), (t = { cache: Fc() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function V1(e, t, n) {
    var l = Br();
    (n = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
      Xu(e) ? c0(t, n) : ((n = jc(e, t, n, l)), n !== null && (mr(n, e, l), o0(n, t, l)));
  }
  function s0(e, t, n) {
    var l = Br();
    ml(e, t, n, l);
  }
  function ml(e, t, n, l) {
    var c = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Xu(e)) c0(t, c);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
        try {
          var x = t.lastRenderedState,
            C = o(x, n);
          if (((c.hasEagerState = !0), (c.eagerState = C), Tr(C, x))) return Ru(e, t, c, 0), Ot === null && Mu(), !1;
        } catch {
        } finally {
        }
      if (((n = jc(e, t, c, l)), n !== null)) return mr(n, e, l), o0(n, t, l), !0;
    }
    return !1;
  }
  function lo(e, t, n, l) {
    if (((l = { lane: 2, revertLane: Qo(), action: l, hasEagerState: !1, eagerState: null, next: null }), Xu(e))) {
      if (t) throw Error(u(479));
    } else (t = jc(e, n, l, 2)), t !== null && mr(t, e, 2);
  }
  function Xu(e) {
    var t = e.alternate;
    return e === ct || (t !== null && t === ct);
  }
  function c0(e, t) {
    Ea = zu = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function o0(e, t, n) {
    if ((n & 4194176) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), fc(e, n);
    }
  }
  var mn = {
    readContext: ur,
    use: Vu,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt
  };
  (mn.useCacheRefresh = Vt),
    (mn.useMemoCache = Vt),
    (mn.useHostTransitionStatus = Vt),
    (mn.useFormState = Vt),
    (mn.useActionState = Vt),
    (mn.useOptimistic = Vt);
  var Li = {
    readContext: ur,
    use: Vu,
    useCallback: function (e, t) {
      return (br().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ur,
    useEffect: Zh,
    useImperativeHandle: function (e, t, n) {
      (n = n != null ? n.concat([e]) : null), $u(4194308, 4, Jh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return $u(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      $u(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = br();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ii) {
        Ce(!0);
        try {
          e();
        } finally {
          Ce(!1);
        }
      }
      return (n.memoizedState = [l, t]), l;
    },
    useReducer: function (e, t, n) {
      var l = br();
      if (n !== void 0) {
        var c = n(t);
        if (Ii) {
          Ce(!0);
          try {
            n(t);
          } finally {
            Ce(!1);
          }
        }
      } else c = t;
      return (
        (l.memoizedState = l.baseState = c),
        (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: c }),
        (l.queue = e),
        (e = e.dispatch = V1.bind(null, ct, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = br();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Wc(e);
      var t = e.queue,
        n = s0.bind(null, ct, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: ro,
    useDeferredValue: function (e, t) {
      var n = br();
      return no(n, e, t);
    },
    useTransition: function () {
      var e = Wc(!1);
      return (e = n0.bind(null, ct, e.queue, !0, !1)), (br().memoizedState = e), [!1, e];
    },
    useSyncExternalStore: function (e, t, n) {
      var l = ct,
        c = br();
      if (bt) {
        if (n === void 0) throw Error(u(407));
        n = n();
      } else {
        if (((n = t()), Ot === null)) throw Error(u(349));
        (gt & 60) !== 0 || Dh(l, t, n);
      }
      c.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (c.queue = o),
        Zh(jh.bind(null, l, o, e), [e]),
        (l.flags |= 2048),
        _a(9, Uh.bind(null, l, o, n, t), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var e = br(),
        t = Ot.identifierPrefix;
      if (bt) {
        var n = Nn,
          l = _n;
        (n = (l & ~(1 << (32 - Ie(l) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Hu++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = I1++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (br().memoizedState = F1.bind(null, ct));
    }
  };
  (Li.useMemoCache = Qc),
    (Li.useHostTransitionStatus = ao),
    (Li.useFormState = Gh),
    (Li.useActionState = Gh),
    (Li.useOptimistic = function (e) {
      var t = br();
      t.memoizedState = t.baseState = e;
      var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return (t.queue = n), (t = lo.bind(null, ct, !0, n)), (n.dispatch = t), [e, t];
    });
  var ni = {
    readContext: ur,
    use: Vu,
    useCallback: e0,
    useContext: ur,
    useEffect: to,
    useImperativeHandle: Wh,
    useInsertionEffect: Qh,
    useLayoutEffect: Ph,
    useMemo: t0,
    useReducer: Gu,
    useRef: Kh,
    useState: function () {
      return Gu(On);
    },
    useDebugValue: ro,
    useDeferredValue: function (e, t) {
      var n = Kt();
      return r0(n, Et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Gu(On)[0],
        t = Kt().memoizedState;
      return [typeof e == 'boolean' ? e : hl(e), t];
    },
    useSyncExternalStore: Ch,
    useId: l0
  };
  (ni.useCacheRefresh = u0),
    (ni.useMemoCache = Qc),
    (ni.useHostTransitionStatus = ao),
    (ni.useFormState = $h),
    (ni.useActionState = $h),
    (ni.useOptimistic = function (e, t) {
      var n = Kt();
      return Lh(n, Et, e, t);
    });
  var qi = {
    readContext: ur,
    use: Vu,
    useCallback: e0,
    useContext: ur,
    useEffect: to,
    useImperativeHandle: Wh,
    useInsertionEffect: Qh,
    useLayoutEffect: Ph,
    useMemo: t0,
    useReducer: Jc,
    useRef: Kh,
    useState: function () {
      return Jc(On);
    },
    useDebugValue: ro,
    useDeferredValue: function (e, t) {
      var n = Kt();
      return Et === null ? no(n, e, t) : r0(n, Et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Jc(On)[0],
        t = Kt().memoizedState;
      return [typeof e == 'boolean' ? e : hl(e), t];
    },
    useSyncExternalStore: Ch,
    useId: l0
  };
  (qi.useCacheRefresh = u0),
    (qi.useMemoCache = Qc),
    (qi.useHostTransitionStatus = ao),
    (qi.useFormState = Xh),
    (qi.useActionState = Xh),
    (qi.useOptimistic = function (e, t) {
      var n = Kt();
      return Et !== null ? Lh(n, Et, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    });
  function uo(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var so = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? H(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Br(),
        c = li(l);
      (c.payload = t), n != null && (c.callback = n), (t = ui(e, c, l)), t !== null && (mr(t, e, l), gl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Br(),
        c = li(l);
      (c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = ui(e, c, l)),
        t !== null && (mr(t, e, l), gl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Br(),
        l = li(n);
      (l.tag = 2), t != null && (l.callback = t), (t = ui(e, l, n)), t !== null && (mr(t, e, n), gl(t, e, n));
    }
  };
  function f0(e, t, n, l, c, o, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, o, x)
        : t.prototype && t.prototype.isPureReactComponent
          ? !tl(n, l) || !tl(c, o)
          : !0
    );
  }
  function d0(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && so.enqueueReplaceState(t, t.state, null);
  }
  function zi(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = N({}, n));
      for (var c in e) n[c] === void 0 && (n[c] = e[c]);
    }
    return n;
  }
  var Ku =
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
  function h0(e) {
    Ku(e);
  }
  function m0(e) {
    console.error(e);
  }
  function p0(e) {
    Ku(e);
  }
  function Zu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function y0(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function co(e, t, n) {
    return (
      (n = li(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Zu(e, t);
      }),
      n
    );
  }
  function g0(e) {
    return (e = li(e)), (e.tag = 3), e;
  }
  function v0(e, t, n, l) {
    var c = n.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var o = l.value;
      (e.payload = function () {
        return c(o);
      }),
        (e.callback = function () {
          y0(t, n, l);
        });
    }
    var x = n.stateNode;
    x !== null &&
      typeof x.componentDidCatch == 'function' &&
      (e.callback = function () {
        y0(t, n, l), typeof c != 'function' && (hi === null ? (hi = new Set([this])) : hi.add(this));
        var C = l.stack;
        this.componentDidCatch(l.value, { componentStack: C !== null ? C : '' });
      });
  }
  function G1(e, t, n, l, c) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = n.alternate), t !== null && yl(t, n, c, !0), (n = Gr.current), n !== null)) {
        switch (n.tag) {
          case 13:
            return (
              hn === null ? $o() : n.alternate === null && Ht === 0 && (Ht = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = c),
              l === qc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue), t === null ? (n.updateQueue = new Set([l])) : t.add(l), Xo(e, l, c)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === qc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Xo(e, l, c)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return Xo(e, l, c), $o(), !1;
    }
    if (bt)
      return (
        (t = Gr.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            l !== Lc && ((e = Error(u(422), { cause: l })), al(Hr(e, n))))
          : (l !== Lc && ((t = Error(u(423), { cause: l })), al(Hr(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = Hr(l, n)),
            (c = co(e.stateNode, l, c)),
            _o(e, c),
            Ht !== 4 && (Ht = 2)),
        !1
      );
    var o = Error(u(520), { cause: l });
    if (((o = Hr(o, n)), _l === null ? (_l = [o]) : _l.push(o), Ht !== 4 && (Ht = 2), t === null)) return !0;
    (l = Hr(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (n.flags |= 65536), (e = c & -c), (n.lanes |= e), (e = co(n.stateNode, l, e)), _o(n, e), !1;
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (o !== null && typeof o.componentDidCatch == 'function' && (hi === null || !hi.has(o)))))
          )
            return (n.flags |= 65536), (c &= -c), (n.lanes |= c), (c = g0(c)), v0(c, e, n, l), _o(n, c), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var b0 = Error(u(461)),
    Wt = !1;
  function nr(e, t, n, l) {
    t.child = e === null ? Ah(t, null, n, l) : ji(t, e.child, n, l);
  }
  function S0(e, t, n, l, c) {
    n = n.render;
    var o = t.ref;
    if ('ref' in l) {
      var x = {};
      for (var C in l) C !== 'ref' && (x[C] = l[C]);
    } else x = l;
    return (
      Fi(t),
      (l = Yc(e, t, n, x, o, c)),
      (C = Xc()),
      e !== null && !Wt ? (Kc(e, t, c), Mn(e, t, c)) : (bt && C && kc(t), (t.flags |= 1), nr(e, t, l, c), t.child)
    );
  }
  function x0(e, t, n, l, c) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' && !Do(o) && o.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = o), w0(e, t, o, l, c))
        : ((e = es(n.type, null, l, t, t.mode, c)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), !bo(e, c))) {
      var x = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : tl), n(x, l) && e.ref === t.ref)) return Mn(e, t, c);
    }
    return (t.flags |= 1), (e = fi(o, l)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function w0(e, t, n, l, c) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (tl(o, l) && e.ref === t.ref)
        if (((Wt = !1), (t.pendingProps = l = o), bo(e, c))) (e.flags & 131072) !== 0 && (Wt = !0);
        else return (t.lanes = e.lanes), Mn(e, t, c);
    }
    return oo(e, t, n, l, c);
  }
  function E0(e, t, n) {
    var l = t.pendingProps,
      c = l.children,
      o = (t.stateNode._pendingVisibility & 2) !== 0,
      x = e !== null ? e.memoizedState : null;
    if ((pl(e, t), l.mode === 'hidden' || o)) {
      if ((t.flags & 128) !== 0) {
        if (((l = x !== null ? x.baseLanes | n : n), e !== null)) {
          for (c = t.child = e.child, o = 0; c !== null; ) (o = o | c.lanes | c.childLanes), (c = c.sibling);
          t.childLanes = o & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return A0(e, t, l, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && qu(t, x !== null ? x.cachePool : null),
          x !== null ? _h(t, x) : zc(),
          Nh(t);
      else return (t.lanes = t.childLanes = 536870912), A0(e, t, x !== null ? x.baseLanes | n : n, n);
    } else
      x !== null
        ? (qu(t, x.cachePool), _h(t, x), ti(), (t.memoizedState = null))
        : (e !== null && qu(t, null), zc(), ti());
    return nr(e, t, c, n), t.child;
  }
  function A0(e, t, n, l) {
    var c = Gc();
    return (
      (c = c === null ? null : { parent: Pt._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: n, cachePool: c }),
      e !== null && qu(t, null),
      zc(),
      Nh(t),
      e !== null && yl(e, t, l, !0),
      null
    );
  }
  function pl(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(u(284));
      (e === null || e.ref !== n) && (t.flags |= 2097664);
    }
  }
  function oo(e, t, n, l, c) {
    return (
      Fi(t),
      (n = Yc(e, t, n, l, void 0, c)),
      (l = Xc()),
      e !== null && !Wt ? (Kc(e, t, c), Mn(e, t, c)) : (bt && l && kc(t), (t.flags |= 1), nr(e, t, n, c), t.child)
    );
  }
  function _0(e, t, n, l, c, o) {
    return (
      Fi(t),
      (t.updateQueue = null),
      (n = Bh(t, l, n, c)),
      Rh(e),
      (l = Xc()),
      e !== null && !Wt ? (Kc(e, t, o), Mn(e, t, o)) : (bt && l && kc(t), (t.flags |= 1), nr(e, t, n, o), t.child)
    );
  }
  function N0(e, t, n, l, c) {
    if ((Fi(t), t.stateNode === null)) {
      var o = ya,
        x = n.contextType;
      typeof x == 'object' && x !== null && (o = ur(x)),
        (o = new n(l, o)),
        (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = so),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = l),
        (o.state = t.memoizedState),
        (o.refs = {}),
        Eo(t),
        (x = n.contextType),
        (o.context = typeof x == 'object' && x !== null ? ur(x) : ya),
        (o.state = t.memoizedState),
        (x = n.getDerivedStateFromProps),
        typeof x == 'function' && (uo(t, n, x, l), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function' ||
          (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
          ((x = o.state),
          typeof o.componentWillMount == 'function' && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
          x !== o.state && so.enqueueReplaceState(o, o.state, null),
          bl(t, l, o, c),
          vl(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      o = t.stateNode;
      var C = t.memoizedProps,
        K = zi(n, C);
      o.props = K;
      var fe = o.context,
        _e = n.contextType;
      (x = ya), typeof _e == 'object' && _e !== null && (x = ur(_e));
      var Re = n.getDerivedStateFromProps;
      (_e = typeof Re == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        _e ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((C || fe !== x) && d0(t, o, l, x)),
        (ai = !1);
      var be = t.memoizedState;
      (o.state = be),
        bl(t, l, o, c),
        vl(),
        (fe = t.memoizedState),
        C || be !== fe || ai
          ? (typeof Re == 'function' && (uo(t, n, Re, l), (fe = t.memoizedState)),
            (K = ai || f0(t, n, K, l, be, fe, x))
              ? (_e ||
                  (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
                  (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = fe)),
            (o.props = l),
            (o.state = fe),
            (o.context = x),
            (l = K))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1));
    } else {
      (o = t.stateNode),
        Ao(e, t),
        (x = t.memoizedProps),
        (_e = zi(n, x)),
        (o.props = _e),
        (Re = t.pendingProps),
        (be = o.context),
        (fe = n.contextType),
        (K = ya),
        typeof fe == 'object' && fe !== null && (K = ur(fe)),
        (C = n.getDerivedStateFromProps),
        (fe = typeof C == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((x !== Re || be !== K) && d0(t, o, l, K)),
        (ai = !1),
        (be = t.memoizedState),
        (o.state = be),
        bl(t, l, o, c),
        vl();
      var Ae = t.memoizedState;
      x !== Re || be !== Ae || ai || (e !== null && e.dependencies !== null && Qu(e.dependencies))
        ? (typeof C == 'function' && (uo(t, n, C, l), (Ae = t.memoizedState)),
          (_e = ai || f0(t, n, _e, l, be, Ae, K) || (e !== null && e.dependencies !== null && Qu(e.dependencies)))
            ? (fe ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(l, Ae, K),
                typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(l, Ae, K)),
              typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (x === e.memoizedProps && be === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (x === e.memoizedProps && be === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = Ae)),
          (o.props = l),
          (o.state = Ae),
          (o.context = K),
          (l = _e))
        : (typeof o.componentDidUpdate != 'function' ||
            (x === e.memoizedProps && be === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (x === e.memoizedProps && be === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      pl(e, t),
      (l = (t.flags & 128) !== 0),
      o || l
        ? ((o = t.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : o.render()),
          (t.flags |= 1),
          e !== null && l ? ((t.child = ji(t, e.child, null, c)), (t.child = ji(t, null, n, c))) : nr(e, t, n, c),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = Mn(e, t, c)),
      e
    );
  }
  function T0(e, t, n, l) {
    return il(), (t.flags |= 256), nr(e, t, n, l), t.child;
  }
  var fo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ho(e) {
    return { baseLanes: e, cachePool: Mh() };
  }
  function mo(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Kr), e;
  }
  function O0(e, t, n) {
    var l = t.pendingProps,
      c = !1,
      o = (t.flags & 128) !== 0,
      x;
    if (
      ((x = o) || (x = e !== null && e.memoizedState === null ? !1 : (Qt.current & 2) !== 0),
      x && ((c = !0), (t.flags &= -129)),
      (x = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (bt) {
        if ((c ? ei(t) : ti(), bt)) {
          var C = rr,
            K;
          if ((K = C)) {
            e: {
              for (K = C, C = dn; K.nodeType !== 8; ) {
                if (!C) {
                  C = null;
                  break e;
                }
                if (((K = an(K.nextSibling)), K === null)) {
                  C = null;
                  break e;
                }
              }
              C = K;
            }
            C !== null
              ? ((t.memoizedState = {
                  dehydrated: C,
                  treeContext: Ci !== null ? { id: _n, overflow: Nn } : null,
                  retryLane: 536870912
                }),
                (K = Xr(18, null, null, 0)),
                (K.stateNode = C),
                (K.return = t),
                (t.child = K),
                (hr = t),
                (rr = null),
                (K = !0))
              : (K = !1);
          }
          K || Ui(t);
        }
        if (((C = t.memoizedState), C !== null && ((C = C.dehydrated), C !== null)))
          return C.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Tn(t);
      }
      return (
        (C = l.children),
        (l = l.fallback),
        c
          ? (ti(),
            (c = t.mode),
            (C = yo({ mode: 'hidden', children: C }, c)),
            (l = Gi(l, c, n, null)),
            (C.return = t),
            (l.return = t),
            (C.sibling = l),
            (t.child = C),
            (c = t.child),
            (c.memoizedState = ho(n)),
            (c.childLanes = mo(e, x, n)),
            (t.memoizedState = fo),
            l)
          : (ei(t), po(t, C))
      );
    }
    if (((K = e.memoizedState), K !== null && ((C = K.dehydrated), C !== null))) {
      if (o)
        t.flags & 256
          ? (ei(t), (t.flags &= -257), (t = go(e, t, n)))
          : t.memoizedState !== null
            ? (ti(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ti(),
              (c = l.fallback),
              (C = t.mode),
              (l = yo({ mode: 'visible', children: l.children }, C)),
              (c = Gi(c, C, n, null)),
              (c.flags |= 2),
              (l.return = t),
              (c.return = t),
              (l.sibling = c),
              (t.child = l),
              ji(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = ho(n)),
              (l.childLanes = mo(e, x, n)),
              (t.memoizedState = fo),
              (t = c));
      else if ((ei(t), C.data === '$!')) {
        if (((x = C.nextSibling && C.nextSibling.dataset), x)) var fe = x.dgst;
        (x = fe),
          (l = Error(u(419))),
          (l.stack = ''),
          (l.digest = x),
          al({ value: l, source: null, stack: null }),
          (t = go(e, t, n));
      } else if ((Wt || yl(e, t, n, !1), (x = (n & e.childLanes) !== 0), Wt || x)) {
        if (((x = Ot), x !== null)) {
          if (((l = n & -n), (l & 42) !== 0)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
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
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (((l = (l & (x.suspendedLanes | n)) !== 0 ? 0 : l), l !== 0 && l !== K.retryLane))
            throw ((K.retryLane = l), Wn(e, l), mr(x, e, l), b0);
        }
        C.data === '$?' || $o(), (t = go(e, t, n));
      } else
        C.data === '$?'
          ? ((t.flags |= 128), (t.child = e.child), (t = av.bind(null, e)), (C._reactRetry = t), (t = null))
          : ((e = K.treeContext),
            (rr = an(C.nextSibling)),
            (hr = t),
            (bt = !0),
            (rn = null),
            (dn = !1),
            e !== null && ((Fr[Vr++] = _n), (Fr[Vr++] = Nn), (Fr[Vr++] = Ci), (_n = e.id), (Nn = e.overflow), (Ci = t)),
            (t = po(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (ti(),
        (c = l.fallback),
        (C = t.mode),
        (K = e.child),
        (fe = K.sibling),
        (l = fi(K, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = K.subtreeFlags & 31457280),
        fe !== null ? (c = fi(fe, c)) : ((c = Gi(c, C, n, null)), (c.flags |= 2)),
        (c.return = t),
        (l.return = t),
        (l.sibling = c),
        (t.child = l),
        (l = c),
        (c = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = ho(n))
          : ((K = C.cachePool),
            K !== null ? ((fe = Pt._currentValue), (K = K.parent !== fe ? { parent: fe, pool: fe } : K)) : (K = Mh()),
            (C = { baseLanes: C.baseLanes | n, cachePool: K })),
        (c.memoizedState = C),
        (c.childLanes = mo(e, x, n)),
        (t.memoizedState = fo),
        l)
      : (ei(t),
        (n = e.child),
        (e = n.sibling),
        (n = fi(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null && ((x = t.deletions), x === null ? ((t.deletions = [e]), (t.flags |= 16)) : x.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function po(e, t) {
    return (t = yo({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function yo(e, t) {
    return em(e, t, 0, null);
  }
  function go(e, t, n) {
    return ji(t, e.child, null, n), (e = po(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
  }
  function M0(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), xo(e.return, t, n);
  }
  function vo(e, t, n, l, c) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: n, tailMode: c })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = l),
        (o.tail = n),
        (o.tailMode = c));
  }
  function R0(e, t, n) {
    var l = t.pendingProps,
      c = l.revealOrder,
      o = l.tail;
    if ((nr(e, t, l.children, n), (l = Qt.current), (l & 2) !== 0)) (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && M0(e, n, t);
          else if (e.tag === 19) M0(e, n, t);
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
      l &= 1;
    }
    switch ((B(Qt, l), c)) {
      case 'forwards':
        for (n = t.child, c = null; n !== null; )
          (e = n.alternate), e !== null && Lu(e) === null && (c = n), (n = n.sibling);
        (n = c),
          n === null ? ((c = t.child), (t.child = null)) : ((c = n.sibling), (n.sibling = null)),
          vo(t, !1, c, n, o);
        break;
      case 'backwards':
        for (n = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Lu(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = n), (n = c), (c = e);
        }
        vo(t, !0, n, null, o);
        break;
      case 'together':
        vo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Mn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (di |= t.lanes), (n & t.childLanes) === 0))
      if (e !== null) {
        if ((yl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = fi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = fi(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function bo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Qu(e)));
  }
  function $1(e, t, n) {
    switch (t.tag) {
      case 3:
        ue(t, t.stateNode.containerInfo), ii(t, Pt, e.memoizedState.cache), il();
        break;
      case 27:
      case 5:
        ae(t);
        break;
      case 4:
        ue(t, t.stateNode.containerInfo);
        break;
      case 10:
        ii(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ei(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? O0(e, t, n)
              : (ei(t), (e = Mn(e, t, n)), e !== null ? e.sibling : null);
        ei(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (((l = (n & t.childLanes) !== 0), l || (yl(e, t, n, !1), (l = (n & t.childLanes) !== 0)), c)) {
          if (l) return R0(e, t, n);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          B(Qt, Qt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), E0(e, t, n);
      case 24:
        ii(t, Pt, e.memoizedState.cache);
    }
    return Mn(e, t, n);
  }
  function B0(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Wt = !0;
      else {
        if (!bo(e, n) && (t.flags & 128) === 0) return (Wt = !1), $1(e, t, n);
        Wt = (e.flags & 131072) !== 0;
      }
    else (Wt = !1), bt && (t.flags & 1048576) !== 0 && ph(t, Du, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            c = l._init;
          if (((l = c(l._payload)), (t.type = l), typeof l == 'function'))
            Do(l)
              ? ((e = zi(l, e)), (t.tag = 1), (t = N0(null, t, l, e, n)))
              : ((t.tag = 0), (t = oo(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === I)) {
                (t.tag = 11), (t = S0(null, t, l, e, n));
                break e;
              } else if (c === W) {
                (t.tag = 14), (t = x0(null, t, l, e, n));
                break e;
              }
            }
            throw ((t = v(l) || l), Error(u(306, t, '')));
          }
        }
        return t;
      case 0:
        return oo(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (c = zi(l, t.pendingProps)), N0(e, t, l, c, n);
      case 3:
        e: {
          if ((ue(t, t.stateNode.containerInfo), e === null)) throw Error(u(387));
          var o = t.pendingProps;
          (c = t.memoizedState), (l = c.element), Ao(e, t), bl(t, o, null, n);
          var x = t.memoizedState;
          if (((o = x.cache), ii(t, Pt, o), o !== c.cache && wo(t, [Pt], n, !0), vl(), (o = x.element), c.isDehydrated))
            if (
              ((c = { element: o, isDehydrated: !1, cache: x.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = T0(e, t, o, n);
              break e;
            } else if (o !== l) {
              (l = Hr(Error(u(424)), t)), al(l), (t = T0(e, t, o, n));
              break e;
            } else
              for (
                rr = an(t.stateNode.containerInfo.firstChild),
                  hr = t,
                  bt = !0,
                  rn = null,
                  dn = !0,
                  n = Ah(t, null, o, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((il(), o === l)) {
              t = Mn(e, t, n);
              break e;
            }
            nr(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          pl(e, t),
          e === null
            ? (n = Um(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : bt ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = ds(se.current).createElement(n)),
                (l[dt] = t),
                (l[lr] = e),
                ir(l, n, e),
                Je(l),
                (t.stateNode = l))
            : (t.memoizedState = Um(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          ae(t),
          e === null &&
            bt &&
            ((l = t.stateNode = Bm(t.type, t.pendingProps, se.current)), (hr = t), (dn = !0), (rr = an(l.firstChild))),
          (l = t.pendingProps.children),
          e !== null || bt ? nr(e, t, l, n) : (t.child = ji(t, null, l, n)),
          pl(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            bt &&
            ((c = l = rr) &&
              ((l = xv(l, t.type, t.pendingProps, dn)),
              l !== null ? ((t.stateNode = l), (hr = t), (rr = an(l.firstChild)), (dn = !1), (c = !0)) : (c = !1)),
            c || Ui(t)),
          ae(t),
          (c = t.type),
          (o = t.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (l = o.children),
          lf(c, o) ? (l = null) : x !== null && lf(c, x) && (t.flags |= 32),
          t.memoizedState !== null && ((c = Yc(e, t, L1, null, null, n)), (Ul._currentValue = c)),
          pl(e, t),
          nr(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            bt &&
            ((e = n = rr) &&
              ((n = wv(n, t.pendingProps, dn)),
              n !== null ? ((t.stateNode = n), (hr = t), (rr = null), (e = !0)) : (e = !1)),
            e || Ui(t)),
          null
        );
      case 13:
        return O0(e, t, n);
      case 4:
        return (
          ue(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = ji(t, null, l, n)) : nr(e, t, l, n),
          t.child
        );
      case 11:
        return S0(e, t, t.type, t.pendingProps, n);
      case 7:
        return nr(e, t, t.pendingProps, n), t.child;
      case 8:
        return nr(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return nr(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (l = t.pendingProps), ii(t, t.type, l.value), nr(e, t, l.children, n), t.child;
      case 9:
        return (
          (c = t.type._context),
          (l = t.pendingProps.children),
          Fi(t),
          (c = ur(c)),
          (l = l(c)),
          (t.flags |= 1),
          nr(e, t, l, n),
          t.child
        );
      case 14:
        return x0(e, t, t.type, t.pendingProps, n);
      case 15:
        return w0(e, t, t.type, t.pendingProps, n);
      case 19:
        return R0(e, t, n);
      case 22:
        return E0(e, t, n);
      case 24:
        return (
          Fi(t),
          (l = ur(Pt)),
          e === null
            ? ((c = Gc()),
              c === null &&
                ((c = Ot),
                (o = Fc()),
                (c.pooledCache = o),
                o.refCount++,
                o !== null && (c.pooledCacheLanes |= n),
                (c = o)),
              (t.memoizedState = { parent: l, cache: c }),
              Eo(t),
              ii(t, Pt, c))
            : ((e.lanes & n) !== 0 && (Ao(e, t), bl(t, null, null, n), vl()),
              (c = e.memoizedState),
              (o = t.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (t.memoizedState = c),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c),
                  ii(t, Pt, l))
                : ((l = o.cache), ii(t, Pt, l), l !== c.cache && wo(t, [Pt], n, !0))),
          nr(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  var So = Me(null),
    Hi = null,
    Rn = null;
  function ii(e, t, n) {
    B(So, t._currentValue), (t._currentValue = n);
  }
  function Bn(e) {
    (e._currentValue = So.current), ke(So);
  }
  function xo(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function wo(e, t, n, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var o = c.dependencies;
      if (o !== null) {
        var x = c.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var C = o;
          o = c;
          for (var K = 0; K < t.length; K++)
            if (C.context === t[K]) {
              (o.lanes |= n), (C = o.alternate), C !== null && (C.lanes |= n), xo(o.return, n, e), l || (x = null);
              break e;
            }
          o = C.next;
        }
      } else if (c.tag === 18) {
        if (((x = c.return), x === null)) throw Error(u(341));
        (x.lanes |= n), (o = x.alternate), o !== null && (o.lanes |= n), xo(x, n, e), (x = null);
      } else x = c.child;
      if (x !== null) x.return = c;
      else
        for (x = c; x !== null; ) {
          if (x === e) {
            x = null;
            break;
          }
          if (((c = x.sibling), c !== null)) {
            (c.return = x.return), (x = c);
            break;
          }
          x = x.return;
        }
      c = x;
    }
  }
  function yl(e, t, n, l) {
    e = null;
    for (var c = t, o = !1; c !== null; ) {
      if (!o) {
        if ((c.flags & 524288) !== 0) o = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var x = c.alternate;
        if (x === null) throw Error(u(387));
        if (((x = x.memoizedProps), x !== null)) {
          var C = c.type;
          Tr(c.pendingProps.value, x.value) || (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (c === re.current) {
        if (((x = c.alternate), x === null)) throw Error(u(387));
        x.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ul) : (e = [Ul]));
      }
      c = c.return;
    }
    e !== null && wo(t, e, n, l), (t.flags |= 262144);
  }
  function Qu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Tr(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Fi(e) {
    (Hi = e), (Rn = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function ur(e) {
    return C0(Hi, e);
  }
  function Pu(e, t) {
    return Hi === null && Fi(e), C0(e, t);
  }
  function C0(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Rn === null)) {
      if (e === null) throw Error(u(308));
      (Rn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else Rn = Rn.next = t;
    return n;
  }
  var ai = !1;
  function Eo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ao(e, t) {
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
  function li(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ui(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (It & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)), (l.pending = t), (t = Bu(e)), hh(e, null, n), t
      );
    }
    return Ru(e, l, t, n), Bu(e);
  }
  function gl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), fc(e, n);
    }
  }
  function _o(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var c = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var x = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          o === null ? (c = o = x) : (o = o.next = x), (n = n.next);
        } while (n !== null);
        o === null ? (c = o = t) : (o = o.next = t);
      } else c = o = t;
      (n = { baseState: l.baseState, firstBaseUpdate: c, lastBaseUpdate: o, shared: l.shared, callbacks: l.callbacks }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
  }
  var No = !1;
  function vl() {
    if (No) {
      var e = wa;
      if (e !== null) throw e;
    }
  }
  function bl(e, t, n, l) {
    No = !1;
    var c = e.updateQueue;
    ai = !1;
    var o = c.firstBaseUpdate,
      x = c.lastBaseUpdate,
      C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var K = C,
        fe = K.next;
      (K.next = null), x === null ? (o = fe) : (x.next = fe), (x = K);
      var _e = e.alternate;
      _e !== null &&
        ((_e = _e.updateQueue),
        (C = _e.lastBaseUpdate),
        C !== x && (C === null ? (_e.firstBaseUpdate = fe) : (C.next = fe), (_e.lastBaseUpdate = K)));
    }
    if (o !== null) {
      var Re = c.baseState;
      (x = 0), (_e = fe = K = null), (C = o);
      do {
        var be = C.lane & -536870913,
          Ae = be !== C.lane;
        if (Ae ? (gt & be) === be : (l & be) === be) {
          be !== 0 && be === xa && (No = !0),
            _e !== null && (_e = _e.next = { lane: 0, tag: C.tag, payload: C.payload, callback: null, next: null });
          e: {
            var Ze = e,
              nt = C;
            be = t;
            var Ft = n;
            switch (nt.tag) {
              case 1:
                if (((Ze = nt.payload), typeof Ze == 'function')) {
                  Re = Ze.call(Ft, Re, be);
                  break e;
                }
                Re = Ze;
                break e;
              case 3:
                Ze.flags = (Ze.flags & -65537) | 128;
              case 0:
                if (((Ze = nt.payload), (be = typeof Ze == 'function' ? Ze.call(Ft, Re, be) : Ze), be == null)) break e;
                Re = N({}, Re, be);
                break e;
              case 2:
                ai = !0;
            }
          }
          (be = C.callback),
            be !== null &&
              ((e.flags |= 64),
              Ae && (e.flags |= 8192),
              (Ae = c.callbacks),
              Ae === null ? (c.callbacks = [be]) : Ae.push(be));
        } else
          (Ae = { lane: be, tag: C.tag, payload: C.payload, callback: C.callback, next: null }),
            _e === null ? ((fe = _e = Ae), (K = Re)) : (_e = _e.next = Ae),
            (x |= be);
        if (((C = C.next), C === null)) {
          if (((C = c.shared.pending), C === null)) break;
          (Ae = C), (C = Ae.next), (Ae.next = null), (c.lastBaseUpdate = Ae), (c.shared.pending = null);
        }
      } while (!0);
      _e === null && (K = Re),
        (c.baseState = K),
        (c.firstBaseUpdate = fe),
        (c.lastBaseUpdate = _e),
        o === null && (c.shared.lanes = 0),
        (di |= x),
        (e.lanes = x),
        (e.memoizedState = Re);
    }
  }
  function D0(e, t) {
    if (typeof e != 'function') throw Error(u(191, e));
    e.call(t);
  }
  function U0(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) D0(n[e], t);
  }
  function Sl(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        n = c;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var o = n.create,
              x = n.inst;
            (l = o()), (x.destroy = l);
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (C) {
      Nt(t, t.return, C);
    }
  }
  function si(e, t, n) {
    try {
      var l = t.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var o = c.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            var x = l.inst,
              C = x.destroy;
            if (C !== void 0) {
              (x.destroy = void 0), (c = t);
              var K = n;
              try {
                C();
              } catch (fe) {
                Nt(c, K, fe);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (fe) {
      Nt(t, t.return, fe);
    }
  }
  function j0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        U0(t, n);
      } catch (l) {
        Nt(e, e.return, l);
      }
    }
  }
  function k0(e, t, n) {
    (n.props = zi(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Nt(e, t, l);
    }
  }
  function Vi(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        var l = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var c = l;
            break;
          default:
            c = l;
        }
        typeof n == 'function' ? (e.refCleanup = n(c)) : (n.current = c);
      }
    } catch (o) {
      Nt(e, t, o);
    }
  }
  function Or(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (c) {
          Nt(e, t, c);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (c) {
          Nt(e, t, c);
        }
      else n.current = null;
  }
  function I0(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && l.focus();
          break e;
        case 'img':
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (c) {
      Nt(e, e.return, c);
    }
  }
  function L0(e, t, n) {
    try {
      var l = e.stateNode;
      yv(l, e.type, n, t), (l[lr] = t);
    } catch (c) {
      Nt(e, e.return, c);
    }
  }
  function q0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
  }
  function To(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || q0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Oo(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = fs));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Oo(e, t, n), e = e.sibling; e !== null; ) Oo(e, t, n), (e = e.sibling);
  }
  function Ju(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Ju(e, t, n), e = e.sibling; e !== null; ) Ju(e, t, n), (e = e.sibling);
  }
  var Cn = !1,
    zt = !1,
    Mo = !1,
    z0 = typeof WeakSet == 'function' ? WeakSet : Set,
    er = null,
    H0 = !1;
  function Y1(e, t) {
    if (((e = e.containerInfo), (nf = vs), (e = ih(e)), Rc(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var c = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var x = 0,
              C = -1,
              K = -1,
              fe = 0,
              _e = 0,
              Re = e,
              be = null;
            t: for (;;) {
              for (
                var Ae;
                Re !== n || (c !== 0 && Re.nodeType !== 3) || (C = x + c),
                  Re !== o || (l !== 0 && Re.nodeType !== 3) || (K = x + l),
                  Re.nodeType === 3 && (x += Re.nodeValue.length),
                  (Ae = Re.firstChild) !== null;

              )
                (be = Re), (Re = Ae);
              for (;;) {
                if (Re === e) break t;
                if (
                  (be === n && ++fe === c && (C = x), be === o && ++_e === l && (K = x), (Ae = Re.nextSibling) !== null)
                )
                  break;
                (Re = be), (be = Re.parentNode);
              }
              Re = Ae;
            }
            n = C === -1 || K === -1 ? null : { start: C, end: K };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (af = { focusedElem: e, selectionRange: n }, vs = !1, er = t; er !== null; )
      if (((t = er), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (er = e);
      else
        for (; er !== null; ) {
          switch (((t = er), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                (e = void 0), (n = t), (c = o.memoizedProps), (o = o.memoizedState), (l = n.stateNode);
                try {
                  var Ze = zi(n.type, c, n.elementType === n.type);
                  (e = l.getSnapshotBeforeUpdate(Ze, o)), (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (nt) {
                  Nt(n, n.return, nt);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) cf(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      cf(e);
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
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (er = e);
            break;
          }
          er = t.return;
        }
    return (Ze = H0), (H0 = !1), Ze;
  }
  function F0(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Un(e, n), l & 4 && Sl(5, n);
        break;
      case 1:
        if ((Un(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (C) {
              Nt(n, n.return, C);
            }
          else {
            var c = zi(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (C) {
              Nt(n, n.return, C);
            }
          }
        l & 64 && j0(n), l & 512 && Vi(n, n.return);
        break;
      case 3:
        if ((Un(e, n), l & 64 && ((l = n.updateQueue), l !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            U0(l, e);
          } catch (C) {
            Nt(n, n.return, C);
          }
        }
        break;
      case 26:
        Un(e, n), l & 512 && Vi(n, n.return);
        break;
      case 27:
      case 5:
        Un(e, n), t === null && l & 4 && I0(n), l & 512 && Vi(n, n.return);
        break;
      case 12:
        Un(e, n);
        break;
      case 13:
        Un(e, n), l & 4 && $0(e, n);
        break;
      case 22:
        if (((c = n.memoizedState !== null || Cn), !c)) {
          t = (t !== null && t.memoizedState !== null) || zt;
          var o = Cn,
            x = zt;
          (Cn = c), (zt = t) && !x ? ci(e, n, (n.subtreeFlags & 8772) !== 0) : Un(e, n), (Cn = o), (zt = x);
        }
        l & 512 && (n.memoizedProps.mode === 'manual' ? Vi(n, n.return) : Or(n, n.return));
        break;
      default:
        Un(e, n);
    }
  }
  function V0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), V0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Xa(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Zt = null,
    Mr = !1;
  function Dn(e, t, n) {
    for (n = n.child; n !== null; ) G0(e, t, n), (n = n.sibling);
  }
  function G0(e, t, n) {
    if (de && typeof de.onCommitFiberUnmount == 'function')
      try {
        de.onCommitFiberUnmount(L, n);
      } catch {}
    switch (n.tag) {
      case 26:
        zt || Or(n, t),
          Dn(e, t, n),
          n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        zt || Or(n, t);
        var l = Zt,
          c = Mr;
        for (Zt = n.stateNode, Dn(e, t, n), n = n.stateNode, t = n.attributes; t.length; ) n.removeAttributeNode(t[0]);
        Xa(n), (Zt = l), (Mr = c);
        break;
      case 5:
        zt || Or(n, t);
      case 6:
        c = Zt;
        var o = Mr;
        if (((Zt = null), Dn(e, t, n), (Zt = c), (Mr = o), Zt !== null))
          if (Mr)
            try {
              (e = Zt), (l = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(l) : e.removeChild(l);
            } catch (x) {
              Nt(n, t, x);
            }
          else
            try {
              Zt.removeChild(n.stateNode);
            } catch (x) {
              Nt(n, t, x);
            }
        break;
      case 18:
        Zt !== null &&
          (Mr
            ? ((t = Zt),
              (n = n.stateNode),
              t.nodeType === 8 ? sf(t.parentNode, n) : t.nodeType === 1 && sf(t, n),
              Ll(t))
            : sf(Zt, n.stateNode));
        break;
      case 4:
        (l = Zt), (c = Mr), (Zt = n.stateNode.containerInfo), (Mr = !0), Dn(e, t, n), (Zt = l), (Mr = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        zt || si(2, n, t), zt || si(4, n, t), Dn(e, t, n);
        break;
      case 1:
        zt || (Or(n, t), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && k0(n, t, l)), Dn(e, t, n);
        break;
      case 21:
        Dn(e, t, n);
        break;
      case 22:
        zt || Or(n, t), (zt = (l = zt) || n.memoizedState !== null), Dn(e, t, n), (zt = l);
        break;
      default:
        Dn(e, t, n);
    }
  }
  function $0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ll(e);
      } catch (n) {
        Nt(t, t.return, n);
      }
  }
  function X1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new z0()), t;
      case 22:
        return (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new z0()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Ro(e, t) {
    var n = X1(e);
    t.forEach(function (l) {
      var c = lv.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(c, c));
    });
  }
  function $r(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var c = n[l],
          o = e,
          x = t,
          C = x;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
            case 5:
              (Zt = C.stateNode), (Mr = !1);
              break e;
            case 3:
              (Zt = C.stateNode.containerInfo), (Mr = !0);
              break e;
            case 4:
              (Zt = C.stateNode.containerInfo), (Mr = !0);
              break e;
          }
          C = C.return;
        }
        if (Zt === null) throw Error(u(160));
        G0(o, x, c), (Zt = null), (Mr = !1), (o = c.alternate), o !== null && (o.return = null), (c.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) Y0(t, e), (t = t.sibling);
  }
  var nn = null;
  function Y0(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $r(t, e), Yr(e), l & 4 && (si(3, e, e.return), Sl(3, e), si(5, e, e.return));
        break;
      case 1:
        $r(t, e),
          Yr(e),
          l & 512 && (zt || n === null || Or(n, n.return)),
          l & 64 &&
            Cn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var c = nn;
        if (($r(t, e), Yr(e), l & 512 && (zt || n === null || Or(n, n.return)), l & 4)) {
          var o = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type), (n = e.memoizedProps), (c = c.ownerDocument || c);
                  t: switch (l) {
                    case 'title':
                      (o = c.getElementsByTagName('title')[0]),
                        (!o ||
                          o[Ti] ||
                          o[dt] ||
                          o.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          o.hasAttribute('itemprop')) &&
                          ((o = c.createElement(l)), c.head.insertBefore(o, c.querySelector('head > title'))),
                        ir(o, l, n),
                        (o[dt] = e),
                        Je(o),
                        (l = o);
                      break e;
                    case 'link':
                      var x = Im('link', 'href', c).get(l + (n.href || ''));
                      if (x) {
                        for (var C = 0; C < x.length; C++)
                          if (
                            ((o = x[C]),
                            o.getAttribute('href') === (n.href == null ? null : n.href) &&
                              o.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              o.getAttribute('title') === (n.title == null ? null : n.title) &&
                              o.getAttribute('crossorigin') === (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            x.splice(C, 1);
                            break t;
                          }
                      }
                      (o = c.createElement(l)), ir(o, l, n), c.head.appendChild(o);
                      break;
                    case 'meta':
                      if ((x = Im('meta', 'content', c).get(l + (n.content || '')))) {
                        for (C = 0; C < x.length; C++)
                          if (
                            ((o = x[C]),
                            o.getAttribute('content') === (n.content == null ? null : '' + n.content) &&
                              o.getAttribute('name') === (n.name == null ? null : n.name) &&
                              o.getAttribute('property') === (n.property == null ? null : n.property) &&
                              o.getAttribute('http-equiv') === (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            x.splice(C, 1);
                            break t;
                          }
                      }
                      (o = c.createElement(l)), ir(o, l, n), c.head.appendChild(o);
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  (o[dt] = e), Je(o), (l = o);
                }
                e.stateNode = l;
              } else Lm(c, e.type, e.stateNode);
            else e.stateNode = km(c, l, e.memoizedProps);
          else
            o !== l
              ? (o === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : o.count--,
                l === null ? Lm(c, e.type, e.stateNode) : km(c, l, e.memoizedProps))
              : l === null && e.stateNode !== null && L0(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && e.alternate === null) {
          (c = e.stateNode), (o = e.memoizedProps);
          try {
            for (var K = c.firstChild; K; ) {
              var fe = K.nextSibling,
                _e = K.nodeName;
              K[Ti] ||
                _e === 'HEAD' ||
                _e === 'BODY' ||
                _e === 'SCRIPT' ||
                _e === 'STYLE' ||
                (_e === 'LINK' && K.rel.toLowerCase() === 'stylesheet') ||
                c.removeChild(K),
                (K = fe);
            }
            for (var Re = e.type, be = c.attributes; be.length; ) c.removeAttributeNode(be[0]);
            ir(c, Re, o), (c[dt] = e), (c[lr] = o);
          } catch (Ze) {
            Nt(e, e.return, Ze);
          }
        }
      case 5:
        if (($r(t, e), Yr(e), l & 512 && (zt || n === null || Or(n, n.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            ca(c, '');
          } catch (Ze) {
            Nt(e, e.return, Ze);
          }
        }
        l & 4 && e.stateNode != null && ((c = e.memoizedProps), L0(e, c, n !== null ? n.memoizedProps : c)),
          l & 1024 && (Mo = !0);
        break;
      case 6:
        if (($r(t, e), Yr(e), l & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (Ze) {
            Nt(e, e.return, Ze);
          }
        }
        break;
      case 3:
        if (
          ((ps = null),
          (c = nn),
          (nn = hs(t.containerInfo)),
          $r(t, e),
          (nn = c),
          Yr(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ll(t.containerInfo);
          } catch (Ze) {
            Nt(e, e.return, Ze);
          }
        Mo && ((Mo = !1), X0(e));
        break;
      case 4:
        (l = nn), (nn = hs(e.stateNode.containerInfo)), $r(t, e), Yr(e), (nn = l);
        break;
      case 12:
        $r(t, e), Yr(e);
        break;
      case 13:
        $r(t, e),
          Yr(e),
          e.child.flags & 8192 && (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (qo = Be()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Ro(e, l)));
        break;
      case 22:
        if (
          (l & 512 && (zt || n === null || Or(n, n.return)),
          (K = e.memoizedState !== null),
          (fe = n !== null && n.memoizedState !== null),
          (_e = Cn),
          (Re = zt),
          (Cn = _e || K),
          (zt = Re || fe),
          $r(t, e),
          (zt = Re),
          (Cn = _e),
          Yr(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          l & 8192 &&
            ((t._visibility = K ? t._visibility & -2 : t._visibility | 1),
            K && ((t = Cn || zt), n === null || fe || t || Na(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== 'manual'))
        )
          e: for (n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (n === null) {
                fe = n = t;
                try {
                  if (((c = fe.stateNode), K))
                    (o = c.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none');
                  else {
                    (x = fe.stateNode), (C = fe.memoizedProps.style);
                    var Ae = C != null && C.hasOwnProperty('display') ? C.display : null;
                    x.style.display = Ae == null || typeof Ae == 'boolean' ? '' : ('' + Ae).trim();
                  }
                } catch (Ze) {
                  Nt(fe, fe.return, Ze);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                fe = t;
                try {
                  fe.stateNode.nodeValue = K ? '' : fe.memoizedProps;
                } catch (Ze) {
                  Nt(fe, fe.return, Ze);
                }
              }
            } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) && t.child !== null) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue), l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Ro(e, n))));
        break;
      case 19:
        $r(t, e), Yr(e), l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Ro(e, l)));
        break;
      case 21:
        break;
      default:
        $r(t, e), Yr(e);
    }
  }
  function Yr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var n = e.return; n !== null; ) {
              if (q0(n)) {
                var l = n;
                break e;
              }
              n = n.return;
            }
            throw Error(u(160));
          }
          switch (l.tag) {
            case 27:
              var c = l.stateNode,
                o = To(e);
              Ju(e, o, c);
              break;
            case 5:
              var x = l.stateNode;
              l.flags & 32 && (ca(x, ''), (l.flags &= -33));
              var C = To(e);
              Ju(e, C, x);
              break;
            case 3:
            case 4:
              var K = l.stateNode.containerInfo,
                fe = To(e);
              Oo(e, fe, K);
              break;
            default:
              throw Error(u(161));
          }
        }
      } catch (_e) {
        Nt(e, e.return, _e);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function X0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        X0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function Un(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) F0(e, t.alternate, t), (t = t.sibling);
  }
  function Na(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          si(4, t, t.return), Na(t);
          break;
        case 1:
          Or(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == 'function' && k0(t, t.return, n), Na(t);
          break;
        case 26:
        case 27:
        case 5:
          Or(t, t.return), Na(t);
          break;
        case 22:
          Or(t, t.return), t.memoizedState === null && Na(t);
          break;
        default:
          Na(t);
      }
      e = e.sibling;
    }
  }
  function ci(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        c = e,
        o = t,
        x = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          ci(c, o, n), Sl(4, o);
          break;
        case 1:
          if ((ci(c, o, n), (l = o), (c = l.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (fe) {
              Nt(l, l.return, fe);
            }
          if (((l = o), (c = l.updateQueue), c !== null)) {
            var C = l.stateNode;
            try {
              var K = c.shared.hiddenCallbacks;
              if (K !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < K.length; c++) D0(K[c], C);
            } catch (fe) {
              Nt(l, l.return, fe);
            }
          }
          n && x & 64 && j0(o), Vi(o, o.return);
          break;
        case 26:
        case 27:
        case 5:
          ci(c, o, n), n && l === null && x & 4 && I0(o), Vi(o, o.return);
          break;
        case 12:
          ci(c, o, n);
          break;
        case 13:
          ci(c, o, n), n && x & 4 && $0(c, o);
          break;
        case 22:
          o.memoizedState === null && ci(c, o, n), Vi(o, o.return);
          break;
        default:
          ci(c, o, n);
      }
      t = t.sibling;
    }
  }
  function Bo(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && ol(n));
  }
  function Co(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ol(e));
  }
  function oi(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) K0(e, t, n, l), (t = t.sibling);
  }
  function K0(e, t, n, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        oi(e, t, n, l), c & 2048 && Sl(9, t);
        break;
      case 3:
        oi(e, t, n, l),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ol(e)));
        break;
      case 12:
        if (c & 2048) {
          oi(e, t, n, l), (e = t.stateNode);
          try {
            var o = t.memoizedProps,
              x = o.id,
              C = o.onPostCommit;
            typeof C == 'function' && C(x, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (K) {
            Nt(t, t.return, K);
          }
        } else oi(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (o = t.stateNode),
          t.memoizedState !== null
            ? o._visibility & 4
              ? oi(e, t, n, l)
              : xl(e, t)
            : o._visibility & 4
              ? oi(e, t, n, l)
              : ((o._visibility |= 4), Ta(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          c & 2048 && Bo(t.alternate, t);
        break;
      case 24:
        oi(e, t, n, l), c & 2048 && Co(t.alternate, t);
        break;
      default:
        oi(e, t, n, l);
    }
  }
  function Ta(e, t, n, l, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var o = e,
        x = t,
        C = n,
        K = l,
        fe = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          Ta(o, x, C, K, c), Sl(8, x);
          break;
        case 23:
          break;
        case 22:
          var _e = x.stateNode;
          x.memoizedState !== null
            ? _e._visibility & 4
              ? Ta(o, x, C, K, c)
              : xl(o, x)
            : ((_e._visibility |= 4), Ta(o, x, C, K, c)),
            c && fe & 2048 && Bo(x.alternate, x);
          break;
        case 24:
          Ta(o, x, C, K, c), c && fe & 2048 && Co(x.alternate, x);
          break;
        default:
          Ta(o, x, C, K, c);
      }
      t = t.sibling;
    }
  }
  function xl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          c = l.flags;
        switch (l.tag) {
          case 22:
            xl(n, l), c & 2048 && Bo(l.alternate, l);
            break;
          case 24:
            xl(n, l), c & 2048 && Co(l.alternate, l);
            break;
          default:
            xl(n, l);
        }
        t = t.sibling;
      }
  }
  var wl = 8192;
  function Oa(e) {
    if (e.subtreeFlags & wl) for (e = e.child; e !== null; ) Z0(e), (e = e.sibling);
  }
  function Z0(e) {
    switch (e.tag) {
      case 26:
        Oa(e), e.flags & wl && e.memoizedState !== null && jv(nn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Oa(e);
        break;
      case 3:
      case 4:
        var t = nn;
        (nn = hs(e.stateNode.containerInfo)), Oa(e), (nn = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null ? ((t = wl), (wl = 16777216), Oa(e), (wl = t)) : Oa(e));
        break;
      default:
        Oa(e);
    }
  }
  function Q0(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function El(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (er = l), J0(l, e);
        }
      Q0(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) P0(e), (e = e.sibling);
  }
  function P0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        El(e), e.flags & 2048 && si(9, e, e.return);
        break;
      case 3:
        El(e);
        break;
      case 12:
        El(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), Wu(e))
          : El(e);
        break;
      default:
        El(e);
    }
  }
  function Wu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (er = l), J0(l, e);
        }
      Q0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          si(8, t, t.return), Wu(t);
          break;
        case 22:
          (n = t.stateNode), n._visibility & 4 && ((n._visibility &= -5), Wu(t));
          break;
        default:
          Wu(t);
      }
      e = e.sibling;
    }
  }
  function J0(e, t) {
    for (; er !== null; ) {
      var n = er;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          si(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ol(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (er = l);
      else
        e: for (n = e; er !== null; ) {
          l = er;
          var c = l.sibling,
            o = l.return;
          if ((V0(l), l === n)) {
            er = null;
            break e;
          }
          if (c !== null) {
            (c.return = o), (er = c);
            break e;
          }
          er = o;
        }
    }
  }
  function K1(e, t, n, l) {
    (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Xr(e, t, n, l) {
    return new K1(e, t, n, l);
  }
  function Do(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function fi(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Xr(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = e.flags & 31457280),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function W0(e, t) {
    e.flags &= 31457282;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function es(e, t, n, l, c, o) {
    var x = 0;
    if (((l = e), typeof e == 'function')) Do(e) && (x = 1);
    else if (typeof e == 'string') x = Dv(e, n, D.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case p:
          return Gi(n.children, c, o, t);
        case y:
          (x = 8), (c |= 24);
          break;
        case _:
          return (e = Xr(12, n, t, c | 2)), (e.elementType = _), (e.lanes = o), e;
        case P:
          return (e = Xr(13, n, t, c)), (e.elementType = P), (e.lanes = o), e;
        case J:
          return (e = Xr(19, n, t, c)), (e.elementType = J), (e.lanes = o), e;
        case ve:
          return em(n, c, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case b:
              case E:
                x = 10;
                break e;
              case S:
                x = 9;
                break e;
              case I:
                x = 11;
                break e;
              case W:
                x = 14;
                break e;
              case z:
                (x = 16), (l = null);
                break e;
            }
          (x = 29), (n = Error(u(130, e === null ? 'null' : typeof e, ''))), (l = null);
      }
    return (t = Xr(x, n, t, c)), (t.elementType = e), (t.type = l), (t.lanes = o), t;
  }
  function Gi(e, t, n, l) {
    return (e = Xr(7, e, l, t)), (e.lanes = n), e;
  }
  function em(e, t, n, l) {
    (e = Xr(22, e, l, t)), (e.elementType = ve), (e.lanes = n);
    var c = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var o = c._current;
        if (o === null) throw Error(u(456));
        if ((c._pendingVisibility & 2) === 0) {
          var x = Wn(o, 2);
          x !== null && ((c._pendingVisibility |= 2), mr(x, o, 2));
        }
      },
      attach: function () {
        var o = c._current;
        if (o === null) throw Error(u(456));
        if ((c._pendingVisibility & 2) !== 0) {
          var x = Wn(o, 2);
          x !== null && ((c._pendingVisibility &= -3), mr(x, o, 2));
        }
      }
    };
    return (e.stateNode = c), e;
  }
  function Uo(e, t, n) {
    return (e = Xr(6, e, null, t)), (e.lanes = n), e;
  }
  function jo(e, t, n) {
    return (
      (t = Xr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function jn(e) {
    e.flags |= 4;
  }
  function tm(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !qm(t))) {
      if (
        ((t = Gr.current),
        t !== null &&
          ((gt & 4194176) === gt ? hn !== null : ((gt & 62914560) !== gt && (gt & 536870912) === 0) || t !== hn))
      )
        throw ((ul = qc), vh);
      e.flags |= 8192;
    }
  }
  function ts(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? la() : 536870912), (e.lanes |= t), (Ra |= t));
  }
  function Al(e, t) {
    if (!bt)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var l = null; n !== null; ) n.alternate !== null && (l = n), (n = n.sibling);
          l === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (l.sibling = null);
      }
  }
  function kt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 31457280),
          (l |= c.flags & 31457280),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (n |= c.lanes | c.childLanes), (l |= c.subtreeFlags), (l |= c.flags), (c.return = e), (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function Z1(e, t, n) {
    var l = t.pendingProps;
    switch ((Ic(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kt(t), null;
      case 1:
        return kt(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Bn(Pt),
          he(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (nl(t)
              ? jn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rn !== null && (Vo(rn), (rn = null)))),
          kt(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (jn(t), n !== null ? (kt(t), tm(t, n)) : (kt(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (jn(t), kt(t), tm(t, n))
                : (kt(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && jn(t), kt(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        M(t), (n = se.current);
        var c = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && jn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return kt(t), null;
          }
          (e = D.current), nl(t) ? yh(t) : ((e = Bm(c, l, n)), (t.stateNode = e), jn(t));
        }
        return kt(t), null;
      case 5:
        if ((M(t), (n = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== l && jn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return kt(t), null;
          }
          if (((e = D.current), nl(t))) yh(t);
          else {
            switch (((c = ds(se.current)), e)) {
              case 1:
                e = c.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                e = c.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    e = c.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    e = c.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                    break;
                  case 'script':
                    (e = c.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e = typeof l.is == 'string' ? c.createElement('select', { is: l.is }) : c.createElement('select')),
                      l.multiple ? (e.multiple = !0) : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == 'string' ? c.createElement(n, { is: l.is }) : c.createElement(n);
                }
            }
            (e[dt] = t), (e[lr] = l);
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            t.stateNode = e;
            e: switch ((ir(e, n, l), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!l.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && jn(t);
          }
        }
        return kt(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && jn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(u(166));
          if (((e = se.current), nl(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (c = hr), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[dt] = t),
              (e = !!(e.nodeValue === n || (l !== null && l.suppressHydrationWarning === !0) || _m(e.nodeValue, n))),
              e || Ui(t);
          } else (e = ds(e).createTextNode(l)), (e[dt] = t), (t.stateNode = e);
        }
        return kt(t), null;
      case 13:
        if (((l = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((c = nl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(u(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c)) throw Error(u(317));
              c[dt] = t;
            } else il(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            kt(t), (c = !1);
          } else rn !== null && (Vo(rn), (rn = null)), (c = !0);
          if (!c) return t.flags & 256 ? (Tn(t), t) : (Tn(t), null);
        }
        if ((Tn(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
        if (((n = l !== null), (e = e !== null && e.memoizedState !== null), n)) {
          (l = t.child),
            (c = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (c = l.alternate.memoizedState.cachePool.pool);
          var o = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (o = l.memoizedState.cachePool.pool),
            o !== c && (l.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), ts(t, t.updateQueue), kt(t), null;
      case 4:
        return he(), e === null && ef(t.stateNode.containerInfo), kt(t), null;
      case 10:
        return Bn(t.type), kt(t), null;
      case 19:
        if ((ke(Qt), (c = t.memoizedState), c === null)) return kt(t), null;
        if (((l = (t.flags & 128) !== 0), (o = c.rendering), o === null))
          if (l) Al(c, !1);
          else {
            if (Ht !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Lu(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Al(c, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      ts(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    W0(n, e), (n = n.sibling);
                  return B(Qt, (Qt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null && Be() > rs && ((t.flags |= 128), (l = !0), Al(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Lu(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ts(t, e),
                Al(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !o.alternate && !bt)
              )
                return kt(t), null;
            } else
              2 * Be() - c.renderingStartTime > rs &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), Al(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = c.last), e !== null ? (e.sibling = o) : (t.child = o), (c.last = o));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Be()),
            (t.sibling = null),
            (e = Qt.current),
            B(Qt, l ? (e & 1) | 2 : e & 1),
            t)
          : (kt(t), null);
      case 22:
      case 23:
        return (
          Tn(t),
          Hc(),
          (l = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== l && (t.flags |= 8192) : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (kt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : kt(t),
          (n = t.updateQueue),
          n !== null && ts(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && ke(ki),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Bn(Pt),
          kt(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Q1(e, t) {
    switch ((Ic(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          Bn(Pt), he(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return M(t), null;
      case 13:
        if ((Tn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(u(340));
          il();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ke(Qt), null;
      case 4:
        return he(), null;
      case 10:
        return Bn(t.type), null;
      case 22:
      case 23:
        return Tn(t), Hc(), e !== null && ke(ki), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 24:
        return Bn(Pt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function rm(e, t) {
    switch ((Ic(t), t.tag)) {
      case 3:
        Bn(Pt), he();
        break;
      case 26:
      case 27:
      case 5:
        M(t);
        break;
      case 4:
        he();
        break;
      case 13:
        Tn(t);
        break;
      case 19:
        ke(Qt);
        break;
      case 10:
        Bn(t.type);
        break;
      case 22:
      case 23:
        Tn(t), Hc(), e !== null && ke(ki);
        break;
      case 24:
        Bn(Pt);
    }
  }
  var P1 = {
      getCacheForType: function (e) {
        var t = ur(Pt),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      }
    },
    J1 = typeof WeakMap == 'function' ? WeakMap : Map,
    It = 0,
    Ot = null,
    mt = null,
    gt = 0,
    Mt = 0,
    Rr = null,
    kn = !1,
    Ma = !1,
    ko = !1,
    In = 0,
    Ht = 0,
    di = 0,
    $i = 0,
    Io = 0,
    Kr = 0,
    Ra = 0,
    _l = null,
    pn = null,
    Lo = !1,
    qo = 0,
    rs = 1 / 0,
    ns = null,
    hi = null,
    is = !1,
    Yi = null,
    Nl = 0,
    zo = 0,
    Ho = null,
    Tl = 0,
    Fo = null;
  function Br() {
    if ((It & 2) !== 0 && gt !== 0) return gt & -gt;
    if (w.T !== null) {
      var e = xa;
      return e !== 0 ? e : Qo();
    }
    return yu();
  }
  function nm() {
    Kr === 0 && (Kr = (gt & 536870912) === 0 || bt ? dr() : 536870912);
    var e = Gr.current;
    return e !== null && (e.flags |= 32), Kr;
  }
  function mr(e, t, n) {
    ((e === Ot && Mt === 2) || e.cancelPendingCommit !== null) && (Ba(e, 0), Ln(e, gt, Kr, !1)),
      Tt(e, n),
      ((It & 2) === 0 || e !== Ot) && (e === Ot && ((It & 2) === 0 && ($i |= n), Ht === 4 && Ln(e, gt, Kr, !1)), yn(e));
  }
  function im(e, t, n) {
    if ((It & 6) !== 0) throw Error(u(327));
    var l = (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || ot(e, t),
      c = l ? tv(e, t) : Yo(e, t, !0),
      o = l;
    do {
      if (c === 0) {
        Ma && !l && Ln(e, t, 0, !1);
        break;
      } else if (c === 6) Ln(e, t, 0, !kn);
      else {
        if (((n = e.current.alternate), o && !W1(n))) {
          (c = Yo(e, t, !1)), (o = !1);
          continue;
        }
        if (c === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var x = 0;
          else (x = e.pendingLanes & -536870913), (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0);
          if (x !== 0) {
            t = x;
            e: {
              var C = e;
              c = _l;
              var K = C.current.memoizedState.isDehydrated;
              if ((K && (Ba(C, x).flags |= 256), (x = Yo(C, x, !1)), x !== 2)) {
                if (ko && !K) {
                  (C.errorRecoveryDisabledLanes |= o), ($i |= o), (c = 4);
                  break e;
                }
                (o = pn), (pn = c), o !== null && Vo(o);
              }
              c = x;
            }
            if (((o = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Ba(e, 0), Ln(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), c)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194176) === t) {
                Ln(l, t, Kr, !kn);
                break e;
              }
              break;
            case 2:
              pn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if (((l.finishedWork = n), (l.finishedLanes = t), (t & 62914560) === t && ((o = qo + 300 - Be()), 10 < o))) {
            if ((Ln(l, t, Kr, !kn), it(l, 0) !== 0)) break e;
            l.timeoutHandle = Om(am.bind(null, l, n, pn, ns, Lo, t, Kr, $i, Ra, kn, 2, -0, 0), o);
            break e;
          }
          am(l, n, pn, ns, Lo, t, Kr, $i, Ra, kn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    yn(e);
  }
  function Vo(e) {
    pn === null ? (pn = e) : pn.push.apply(pn, e);
  }
  function am(e, t, n, l, c, o, x, C, K, fe, _e, Re, be) {
    var Ae = t.subtreeFlags;
    if (
      (Ae & 8192 || (Ae & 16785408) === 16785408) &&
      ((Dl = { stylesheets: null, count: 0, unsuspend: Uv }), Z0(t), (t = kv()), t !== null)
    ) {
      (e.cancelPendingCommit = t(dm.bind(null, e, n, l, c, x, C, K, 1, Re, be))), Ln(e, o, x, !fe);
      return;
    }
    dm(e, n, l, c, x, C, K, _e, Re, be);
  }
  function W1(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var c = n[l],
            o = c.getSnapshot;
          c = c.value;
          try {
            if (!Tr(o(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
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
  function Ln(e, t, n, l) {
    (t &= ~Io),
      (t &= ~$i),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var c = t; 0 < c; ) {
      var o = 31 - Ie(c),
        x = 1 << o;
      (l[o] = -1), (c &= ~x);
    }
    n !== 0 && oc(e, n, t);
  }
  function as() {
    return (It & 6) === 0 ? (Ol(0), !1) : !0;
  }
  function Go() {
    if (mt !== null) {
      if (Mt === 0) var e = mt.return;
      else (e = mt), (Rn = Hi = null), Zc(e), (ba = null), (sl = 0), (e = mt);
      for (; e !== null; ) rm(e.alternate, e), (e = e.return);
      mt = null;
    }
  }
  function Ba(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), vv(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      Go(),
      (Ot = e),
      (mt = n = fi(e.current, null)),
      (gt = t),
      (Mt = 0),
      (Rr = null),
      (kn = !1),
      (Ma = ot(e, t)),
      (ko = !1),
      (Ra = Kr = Io = $i = di = Ht = 0),
      (pn = _l = null),
      (Lo = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var c = 31 - Ie(l),
          o = 1 << c;
        (t |= e[c]), (l &= ~o);
      }
    return (In = t), Mu(), n;
  }
  function lm(e, t) {
    (ct = null),
      (w.H = mn),
      t === ll
        ? ((t = xh()), (Mt = 3))
        : t === vh
          ? ((t = xh()), (Mt = 4))
          : (Mt = t === b0 ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
      (Rr = t),
      mt === null && ((Ht = 1), Zu(e, Hr(t, e.current)));
  }
  function um() {
    var e = w.H;
    return (w.H = mn), e === null ? mn : e;
  }
  function sm() {
    var e = w.A;
    return (w.A = P1), e;
  }
  function $o() {
    (Ht = 4),
      kn || ((gt & 4194176) !== gt && Gr.current !== null) || (Ma = !0),
      ((di & 134217727) === 0 && ($i & 134217727) === 0) || Ot === null || Ln(Ot, gt, Kr, !1);
  }
  function Yo(e, t, n) {
    var l = It;
    It |= 2;
    var c = um(),
      o = sm();
    (Ot !== e || gt !== t) && ((ns = null), Ba(e, t)), (t = !1);
    var x = Ht;
    e: do
      try {
        if (Mt !== 0 && mt !== null) {
          var C = mt,
            K = Rr;
          switch (Mt) {
            case 8:
              Go(), (x = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Gr.current === null && (t = !0);
              var fe = Mt;
              if (((Mt = 0), (Rr = null), Ca(e, C, K, fe), n && Ma)) {
                x = 0;
                break e;
              }
              break;
            default:
              (fe = Mt), (Mt = 0), (Rr = null), Ca(e, C, K, fe);
          }
        }
        ev(), (x = Ht);
        break;
      } catch (_e) {
        lm(e, _e);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Rn = Hi = null),
      (It = l),
      (w.H = c),
      (w.A = o),
      mt === null && ((Ot = null), (gt = 0), Mu()),
      x
    );
  }
  function ev() {
    for (; mt !== null; ) cm(mt);
  }
  function tv(e, t) {
    var n = It;
    It |= 2;
    var l = um(),
      c = sm();
    Ot !== e || gt !== t ? ((ns = null), (rs = Be() + 500), Ba(e, t)) : (Ma = ot(e, t));
    e: do
      try {
        if (Mt !== 0 && mt !== null) {
          t = mt;
          var o = Rr;
          t: switch (Mt) {
            case 1:
              (Mt = 0), (Rr = null), Ca(e, t, o, 1);
              break;
            case 2:
              if (bh(o)) {
                (Mt = 0), (Rr = null), om(t);
                break;
              }
              (t = function () {
                Mt === 2 && Ot === e && (Mt = 7), yn(e);
              }),
                o.then(t, t);
              break e;
            case 3:
              Mt = 7;
              break e;
            case 4:
              Mt = 5;
              break e;
            case 7:
              bh(o) ? ((Mt = 0), (Rr = null), om(t)) : ((Mt = 0), (Rr = null), Ca(e, t, o, 7));
              break;
            case 5:
              var x = null;
              switch (mt.tag) {
                case 26:
                  x = mt.memoizedState;
                case 5:
                case 27:
                  var C = mt;
                  if (!x || qm(x)) {
                    (Mt = 0), (Rr = null);
                    var K = C.sibling;
                    if (K !== null) mt = K;
                    else {
                      var fe = C.return;
                      fe !== null ? ((mt = fe), ls(fe)) : (mt = null);
                    }
                    break t;
                  }
              }
              (Mt = 0), (Rr = null), Ca(e, t, o, 5);
              break;
            case 6:
              (Mt = 0), (Rr = null), Ca(e, t, o, 6);
              break;
            case 8:
              Go(), (Ht = 6);
              break e;
            default:
              throw Error(u(462));
          }
        }
        rv();
        break;
      } catch (_e) {
        lm(e, _e);
      }
    while (!0);
    return (Rn = Hi = null), (w.H = l), (w.A = c), (It = n), mt !== null ? 0 : ((Ot = null), (gt = 0), Mu(), Ht);
  }
  function rv() {
    for (; mt !== null && !ge(); ) cm(mt);
  }
  function cm(e) {
    var t = B0(e.alternate, e, In);
    (e.memoizedProps = e.pendingProps), t === null ? ls(e) : (mt = t);
  }
  function om(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _0(n, t, t.pendingProps, t.type, void 0, gt);
        break;
      case 11:
        t = _0(n, t, t.pendingProps, t.type.render, t.ref, gt);
        break;
      case 5:
        Zc(t);
      default:
        rm(n, t), (t = mt = W0(t, In)), (t = B0(n, t, In));
    }
    (e.memoizedProps = e.pendingProps), t === null ? ls(e) : (mt = t);
  }
  function Ca(e, t, n, l) {
    (Rn = Hi = null), Zc(t), (ba = null), (sl = 0);
    var c = t.return;
    try {
      if (G1(e, c, t, n, gt)) {
        (Ht = 1), Zu(e, Hr(n, e.current)), (mt = null);
        return;
      }
    } catch (o) {
      if (c !== null) throw ((mt = c), o);
      (Ht = 1), Zu(e, Hr(n, e.current)), (mt = null);
      return;
    }
    t.flags & 32768
      ? (bt || l === 1
          ? (e = !0)
          : Ma || (gt & 536870912) !== 0
            ? (e = !1)
            : ((kn = e = !0),
              (l === 2 || l === 3 || l === 6) && ((l = Gr.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        fm(t, e))
      : ls(t);
  }
  function ls(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fm(t, kn);
        return;
      }
      e = t.return;
      var n = Z1(t.alternate, t, In);
      if (n !== null) {
        mt = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        mt = t;
        return;
      }
      mt = t = e;
    } while (t !== null);
    Ht === 0 && (Ht = 5);
  }
  function fm(e, t) {
    do {
      var n = Q1(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (mt = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        mt = e;
        return;
      }
      mt = e = n;
    } while (e !== null);
    (Ht = 6), (mt = null);
  }
  function dm(e, t, n, l, c, o, x, C, K, fe) {
    var _e = w.T,
      Re = O.p;
    try {
      (O.p = 2), (w.T = null), nv(e, t, n, l, Re, c, o, x, C, K, fe);
    } finally {
      (w.T = _e), (O.p = Re);
    }
  }
  function nv(e, t, n, l, c, o, x, C) {
    do Da();
    while (Yi !== null);
    if ((It & 6) !== 0) throw Error(u(327));
    var K = e.finishedWork;
    if (((l = e.finishedLanes), K === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), K === e.current)) throw Error(u(177));
    (e.callbackNode = null), (e.callbackPriority = 0), (e.cancelPendingCommit = null);
    var fe = K.lanes | K.childLanes;
    if (
      ((fe |= Uc),
      Nd(e, l, fe, o, x, C),
      e === Ot && ((mt = Ot = null), (gt = 0)),
      ((K.subtreeFlags & 10256) === 0 && (K.flags & 10256) === 0) ||
        is ||
        ((is = !0),
        (zo = fe),
        (Ho = n),
        uv(m, function () {
          return Da(), null;
        })),
      (n = (K.flags & 15990) !== 0),
      (K.subtreeFlags & 15990) !== 0 || n
        ? ((n = w.T),
          (w.T = null),
          (o = O.p),
          (O.p = 2),
          (x = It),
          (It |= 4),
          Y1(e, K),
          Y0(K, e),
          T1(af, e.containerInfo),
          (vs = !!nf),
          (af = nf = null),
          (e.current = K),
          F0(e, K.alternate, K),
          Se(),
          (It = x),
          (O.p = o),
          (w.T = n))
        : (e.current = K),
      is ? ((is = !1), (Yi = e), (Nl = l)) : hm(e, fe),
      (fe = e.pendingLanes),
      fe === 0 && (hi = null),
      Ne(K.stateNode),
      yn(e),
      t !== null)
    )
      for (c = e.onRecoverableError, K = 0; K < t.length; K++) (fe = t[K]), c(fe.value, { componentStack: fe.stack });
    return (
      (Nl & 3) !== 0 && Da(),
      (fe = e.pendingLanes),
      (l & 4194218) !== 0 && (fe & 42) !== 0 ? (e === Fo ? Tl++ : ((Tl = 0), (Fo = e))) : (Tl = 0),
      Ol(0),
      null
    );
  }
  function hm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), ol(t)));
  }
  function Da() {
    if (Yi !== null) {
      var e = Yi,
        t = zo;
      zo = 0;
      var n = pu(Nl),
        l = w.T,
        c = O.p;
      try {
        if (((O.p = 32 > n ? 32 : n), (w.T = null), Yi === null)) var o = !1;
        else {
          (n = Ho), (Ho = null);
          var x = Yi,
            C = Nl;
          if (((Yi = null), (Nl = 0), (It & 6) !== 0)) throw Error(u(331));
          var K = It;
          if (
            ((It |= 4),
            P0(x.current),
            K0(x, x.current, C, n),
            (It = K),
            Ol(0, !1),
            de && typeof de.onPostCommitFiberRoot == 'function')
          )
            try {
              de.onPostCommitFiberRoot(L, x);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (O.p = c), (w.T = l), hm(e, t);
      }
    }
    return !1;
  }
  function mm(e, t, n) {
    (t = Hr(n, t)), (t = co(e.stateNode, t, 2)), (e = ui(e, t, 2)), e !== null && (Tt(e, 2), yn(e));
  }
  function Nt(e, t, n) {
    if (e.tag === 3) mm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          mm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (hi === null || !hi.has(l)))
          ) {
            (e = Hr(n, e)), (n = g0(2)), (l = ui(t, n, 2)), l !== null && (v0(n, l, t, e), Tt(l, 2), yn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Xo(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new J1();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(n) || ((ko = !0), c.add(n), (e = iv.bind(null, e, t, n)), t.then(e, e));
  }
  function iv(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ot === e &&
        (gt & n) === n &&
        (Ht === 4 || (Ht === 3 && (gt & 62914560) === gt && 300 > Be() - qo) ? (It & 2) === 0 && Ba(e, 0) : (Io |= n),
        Ra === gt && (Ra = 0)),
      yn(e);
  }
  function pm(e, t) {
    t === 0 && (t = la()), (e = Wn(e, t)), e !== null && (Tt(e, t), yn(e));
  }
  function av(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), pm(e, n);
  }
  function lv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (n = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    l !== null && l.delete(t), pm(e, n);
  }
  function uv(e, t) {
    return F(e, t);
  }
  var us = null,
    Ua = null,
    Ko = !1,
    ss = !1,
    Zo = !1,
    Xi = 0;
  function yn(e) {
    e !== Ua && e.next === null && (Ua === null ? (us = Ua = e) : (Ua = Ua.next = e)),
      (ss = !0),
      Ko || ((Ko = !0), cv(sv));
  }
  function Ol(e, t) {
    if (!Zo && ss) {
      Zo = !0;
      do
        for (var n = !1, l = us; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var o = 0;
            else {
              var x = l.suspendedLanes,
                C = l.pingedLanes;
              (o = (1 << (31 - Ie(42 | e) + 1)) - 1),
                (o &= c & ~(x & ~C)),
                (o = o & 201326677 ? (o & 201326677) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), vm(l, o));
          } else (o = gt), (o = it(l, l === Ot ? o : 0)), (o & 3) === 0 || ot(l, o) || ((n = !0), vm(l, o));
          l = l.next;
        }
      while (n);
      Zo = !1;
    }
  }
  function sv() {
    ss = Ko = !1;
    var e = 0;
    Xi !== 0 && (gv() && (e = Xi), (Xi = 0));
    for (var t = Be(), n = null, l = us; l !== null; ) {
      var c = l.next,
        o = ym(l, t);
      o === 0
        ? ((l.next = null), n === null ? (us = c) : (n.next = c), c === null && (Ua = n))
        : ((n = l), (e !== 0 || (o & 3) !== 0) && (ss = !0)),
        (l = c);
    }
    Ol(e);
  }
  function ym(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o; ) {
      var x = 31 - Ie(o),
        C = 1 << x,
        K = c[x];
      K === -1 ? ((C & n) === 0 || (C & l) !== 0) && (c[x] = Dt(C, t)) : K <= t && (e.expiredLanes |= C), (o &= ~C);
    }
    if (
      ((t = Ot),
      (n = gt),
      (n = it(e, e === t ? n : 0)),
      (l = e.callbackNode),
      n === 0 || (e === t && Mt === 2) || e.cancelPendingCommit !== null)
    )
      return l !== null && l !== null && te(l), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((n & 3) === 0 || ot(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && te(l), pu(n))) {
        case 2:
        case 8:
          n = A;
          break;
        case 32:
          n = m;
          break;
        case 268435456:
          n = V;
          break;
        default:
          n = m;
      }
      return (l = gm.bind(null, e)), (n = F(n, l)), (e.callbackPriority = t), (e.callbackNode = n), t;
    }
    return l !== null && l !== null && te(l), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function gm(e, t) {
    var n = e.callbackNode;
    if (Da() && e.callbackNode !== n) return null;
    var l = gt;
    return (
      (l = it(e, e === Ot ? l : 0)),
      l === 0
        ? null
        : (im(e, l, t), ym(e, Be()), e.callbackNode != null && e.callbackNode === n ? gm.bind(null, e) : null)
    );
  }
  function vm(e, t) {
    if (Da()) return null;
    im(e, t, !0);
  }
  function cv(e) {
    bv(function () {
      (It & 6) !== 0 ? F(rt, e) : e();
    });
  }
  function Qo() {
    return Xi === 0 && (Xi = dr()), Xi;
  }
  function bm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : wu('' + e);
  }
  function Sm(e, t) {
    var n = t.ownerDocument.createElement('input');
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function ov(e, t, n, l, c) {
    if (t === 'submit' && n && n.stateNode === c) {
      var o = bm((c[lr] || null).action),
        x = l.submitter;
      x &&
        ((t = (t = x[lr] || null) ? bm(t.formAction) : x.getAttribute('formAction')),
        t !== null && ((o = t), (x = null)));
      var C = new Nu('action', 'action', null, l, c);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Xi !== 0) {
                  var K = x ? Sm(c, x) : new FormData(c);
                  io(n, { pending: !0, data: K, method: c.method, action: o }, null, K);
                }
              } else
                typeof o == 'function' &&
                  (C.preventDefault(),
                  (K = x ? Sm(c, x) : new FormData(c)),
                  io(n, { pending: !0, data: K, method: c.method, action: o }, o, K));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Po = 0; Po < dh.length; Po++) {
    var Jo = dh[Po],
      fv = Jo.toLowerCase(),
      dv = Jo[0].toUpperCase() + Jo.slice(1);
    tn(fv, 'on' + dv);
  }
  tn(uh, 'onAnimationEnd'),
    tn(sh, 'onAnimationIteration'),
    tn(ch, 'onAnimationStart'),
    tn('dblclick', 'onDoubleClick'),
    tn('focusin', 'onFocus'),
    tn('focusout', 'onBlur'),
    tn(M1, 'onTransitionRun'),
    tn(R1, 'onTransitionStart'),
    tn(B1, 'onTransitionCancel'),
    tn(oh, 'onTransitionEnd'),
    Ir('onMouseEnter', ['mouseout', 'mouseover']),
    Ir('onMouseLeave', ['mouseout', 'mouseover']),
    Ir('onPointerEnter', ['pointerout', 'pointerover']),
    Ir('onPointerLeave', ['pointerout', 'pointerover']),
    kr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    kr('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    kr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    kr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    kr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    kr('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var Ml =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    hv = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ml));
  function xm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        c = l.event;
      l = l.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var x = l.length - 1; 0 <= x; x--) {
            var C = l[x],
              K = C.instance,
              fe = C.currentTarget;
            if (((C = C.listener), K !== o && c.isPropagationStopped())) break e;
            (o = C), (c.currentTarget = fe);
            try {
              o(c);
            } catch (_e) {
              Ku(_e);
            }
            (c.currentTarget = null), (o = K);
          }
        else
          for (x = 0; x < l.length; x++) {
            if (
              ((C = l[x]),
              (K = C.instance),
              (fe = C.currentTarget),
              (C = C.listener),
              K !== o && c.isPropagationStopped())
            )
              break e;
            (o = C), (c.currentTarget = fe);
            try {
              o(c);
            } catch (_e) {
              Ku(_e);
            }
            (c.currentTarget = null), (o = K);
          }
      }
    }
  }
  function yt(e, t) {
    var n = t[Ya];
    n === void 0 && (n = t[Ya] = new Set());
    var l = e + '__bubble';
    n.has(l) || (wm(t, e, 2, !1), n.add(l));
  }
  function Wo(e, t, n) {
    var l = 0;
    t && (l |= 4), wm(n, e, l, t);
  }
  var cs = '_reactListening' + Math.random().toString(36).slice(2);
  function ef(e) {
    if (!e[cs]) {
      (e[cs] = !0),
        ht.forEach(function (n) {
          n !== 'selectionchange' && (hv.has(n) || Wo(n, !1, e), Wo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[cs] || ((t[cs] = !0), Wo('selectionchange', !1, t));
    }
  }
  function wm(e, t, n, l) {
    switch ($m(t)) {
      case 2:
        var c = qv;
        break;
      case 8:
        c = zv;
        break;
      default:
        c = mf;
    }
    (n = c.bind(null, t, n, e)),
      (c = void 0),
      !xc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: c })
          : e.addEventListener(t, n, !0)
        : c !== void 0
          ? e.addEventListener(t, n, { passive: c })
          : e.addEventListener(t, n, !1);
  }
  function tf(e, t, n, l, c) {
    var o = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var x = l.tag;
        if (x === 3 || x === 4) {
          var C = l.stateNode.containerInfo;
          if (C === c || (C.nodeType === 8 && C.parentNode === c)) break;
          if (x === 4)
            for (x = l.return; x !== null; ) {
              var K = x.tag;
              if (
                (K === 3 || K === 4) &&
                ((K = x.stateNode.containerInfo), K === c || (K.nodeType === 8 && K.parentNode === c))
              )
                return;
              x = x.return;
            }
          for (; C !== null; ) {
            if (((x = pt(C)), x === null)) return;
            if (((K = x.tag), K === 5 || K === 6 || K === 26 || K === 27)) {
              l = o = x;
              continue e;
            }
            C = C.parentNode;
          }
        }
        l = l.return;
      }
    Id(function () {
      var fe = o,
        _e = bc(n),
        Re = [];
      e: {
        var be = fh.get(e);
        if (be !== void 0) {
          var Ae = Nu,
            Ze = e;
          switch (e) {
            case 'keypress':
              if (Au(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              Ae = l1;
              break;
            case 'focusin':
              (Ze = 'focus'), (Ae = _c);
              break;
            case 'focusout':
              (Ze = 'blur'), (Ae = _c);
              break;
            case 'beforeblur':
            case 'afterblur':
              Ae = _c;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Ae = zd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Ae = Kg;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Ae = c1;
              break;
            case uh:
            case sh:
            case ch:
              Ae = Pg;
              break;
            case oh:
              Ae = f1;
              break;
            case 'scroll':
            case 'scrollend':
              Ae = Yg;
              break;
            case 'wheel':
              Ae = h1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Ae = Wg;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Ae = Fd;
              break;
            case 'toggle':
            case 'beforetoggle':
              Ae = p1;
          }
          var nt = (t & 4) !== 0,
            Ft = !nt && (e === 'scroll' || e === 'scrollend'),
            me = nt ? (be !== null ? be + 'Capture' : null) : be;
          nt = [];
          for (var ce = fe, pe; ce !== null; ) {
            var Te = ce;
            if (
              ((pe = Te.stateNode),
              (Te = Te.tag),
              (Te !== 5 && Te !== 26 && Te !== 27) ||
                pe === null ||
                me === null ||
                ((Te = Ka(ce, me)), Te != null && nt.push(Rl(ce, Te, pe))),
              Ft)
            )
              break;
            ce = ce.return;
          }
          0 < nt.length && ((be = new Ae(be, Ze, null, n, _e)), Re.push({ event: be, listeners: nt }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((be = e === 'mouseover' || e === 'pointerover'),
            (Ae = e === 'mouseout' || e === 'pointerout'),
            be && n !== vc && (Ze = n.relatedTarget || n.fromElement) && (pt(Ze) || Ze[Qn]))
          )
            break e;
          if (
            (Ae || be) &&
            ((be = _e.window === _e ? _e : (be = _e.ownerDocument) ? be.defaultView || be.parentWindow : window),
            Ae
              ? ((Ze = n.relatedTarget || n.toElement),
                (Ae = fe),
                (Ze = Ze ? pt(Ze) : null),
                Ze !== null &&
                  ((Ft = H(Ze)), (nt = Ze.tag), Ze !== Ft || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (Ze = null))
              : ((Ae = null), (Ze = fe)),
            Ae !== Ze)
          ) {
            if (
              ((nt = zd),
              (Te = 'onMouseLeave'),
              (me = 'onMouseEnter'),
              (ce = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((nt = Fd), (Te = 'onPointerLeave'), (me = 'onPointerEnter'), (ce = 'pointer')),
              (Ft = Ae == null ? be : Oi(Ae)),
              (pe = Ze == null ? be : Oi(Ze)),
              (be = new nt(Te, ce + 'leave', Ae, n, _e)),
              (be.target = Ft),
              (be.relatedTarget = pe),
              (Te = null),
              pt(_e) === fe &&
                ((nt = new nt(me, ce + 'enter', Ze, n, _e)), (nt.target = pe), (nt.relatedTarget = Ft), (Te = nt)),
              (Ft = Te),
              Ae && Ze)
            )
              t: {
                for (nt = Ae, me = Ze, ce = 0, pe = nt; pe; pe = ja(pe)) ce++;
                for (pe = 0, Te = me; Te; Te = ja(Te)) pe++;
                for (; 0 < ce - pe; ) (nt = ja(nt)), ce--;
                for (; 0 < pe - ce; ) (me = ja(me)), pe--;
                for (; ce--; ) {
                  if (nt === me || (me !== null && nt === me.alternate)) break t;
                  (nt = ja(nt)), (me = ja(me));
                }
                nt = null;
              }
            else nt = null;
            Ae !== null && Em(Re, be, Ae, nt, !1), Ze !== null && Ft !== null && Em(Re, Ft, Ze, nt, !0);
          }
        }
        e: {
          if (
            ((be = fe ? Oi(fe) : window),
            (Ae = be.nodeName && be.nodeName.toLowerCase()),
            Ae === 'select' || (Ae === 'input' && be.type === 'file'))
          )
            var Ke = Qd;
          else if (Kd(be))
            if (Pd) Ke = _1;
            else {
              Ke = E1;
              var ft = w1;
            }
          else
            (Ae = be.nodeName),
              !Ae || Ae.toLowerCase() !== 'input' || (be.type !== 'checkbox' && be.type !== 'radio')
                ? fe && gc(fe.elementType) && (Ke = Qd)
                : (Ke = A1);
          if (Ke && (Ke = Ke(e, fe))) {
            Zd(Re, Ke, n, _e);
            break e;
          }
          ft && ft(e, be, fe),
            e === 'focusout' &&
              fe &&
              be.type === 'number' &&
              fe.memoizedProps.value != null &&
              yc(be, 'number', be.value);
        }
        switch (((ft = fe ? Oi(fe) : window), e)) {
          case 'focusin':
            (Kd(ft) || ft.contentEditable === 'true') && ((ha = ft), (Bc = fe), (rl = null));
            break;
          case 'focusout':
            rl = Bc = ha = null;
            break;
          case 'mousedown':
            Cc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Cc = !1), ah(Re, n, _e);
            break;
          case 'selectionchange':
            if (O1) break;
          case 'keydown':
          case 'keyup':
            ah(Re, n, _e);
        }
        var Qe;
        if (Tc)
          e: {
            switch (e) {
              case 'compositionstart':
                var tt = 'onCompositionStart';
                break e;
              case 'compositionend':
                tt = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                tt = 'onCompositionUpdate';
                break e;
            }
            tt = void 0;
          }
        else
          da
            ? Yd(e, n) && (tt = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (tt = 'onCompositionStart');
        tt &&
          (Vd &&
            n.locale !== 'ko' &&
            (da || tt !== 'onCompositionStart'
              ? tt === 'onCompositionEnd' && da && (Qe = Ld())
              : ((Jn = _e), (wc = 'value' in Jn ? Jn.value : Jn.textContent), (da = !0))),
          (ft = os(fe, tt)),
          0 < ft.length &&
            ((tt = new Hd(tt, e, null, n, _e)),
            Re.push({ event: tt, listeners: ft }),
            Qe ? (tt.data = Qe) : ((Qe = Xd(n)), Qe !== null && (tt.data = Qe)))),
          (Qe = g1 ? v1(e, n) : b1(e, n)) &&
            ((tt = os(fe, 'onBeforeInput')),
            0 < tt.length &&
              ((ft = new Hd('onBeforeInput', 'beforeinput', null, n, _e)),
              Re.push({ event: ft, listeners: tt }),
              (ft.data = Qe))),
          ov(Re, e, fe, n, _e);
      }
      xm(Re, t);
    });
  }
  function Rl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function os(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var c = e,
        o = c.stateNode;
      (c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          o === null ||
          ((c = Ka(e, n)), c != null && l.unshift(Rl(e, c, o)), (c = Ka(e, t)), c != null && l.push(Rl(e, c, o))),
        (e = e.return);
    }
    return l;
  }
  function ja(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Em(e, t, n, l, c) {
    for (var o = t._reactName, x = []; n !== null && n !== l; ) {
      var C = n,
        K = C.alternate,
        fe = C.stateNode;
      if (((C = C.tag), K !== null && K === l)) break;
      (C !== 5 && C !== 26 && C !== 27) ||
        fe === null ||
        ((K = fe),
        c
          ? ((fe = Ka(n, o)), fe != null && x.unshift(Rl(n, fe, K)))
          : c || ((fe = Ka(n, o)), fe != null && x.push(Rl(n, fe, K)))),
        (n = n.return);
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var mv = /\r\n?/g,
    pv = /\u0000|\uFFFD/g;
  function Am(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        mv,
        `
`
      )
      .replace(pv, '');
  }
  function _m(e, t) {
    return (t = Am(t)), Am(e) === t;
  }
  function fs() {}
  function At(e, t, n, l, c, o) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || ca(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && ca(e, '' + l);
        break;
      case 'className':
        bu(e, 'class', l);
        break;
      case 'tabIndex':
        bu(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        bu(e, n, l);
        break;
      case 'style':
        jd(e, l, o);
        break;
      case 'data':
        if (t !== 'object') {
          bu(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || n !== 'href')) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        (l = wu('' + l)), e.setAttribute(n, l);
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && At(e, t, 'name', c.name, c, null),
                At(e, t, 'formEncType', c.formEncType, c, null),
                At(e, t, 'formMethod', c.formMethod, c, null),
                At(e, t, 'formTarget', c.formTarget, c, null))
              : (At(e, t, 'encType', c.encType, c, null),
                At(e, t, 'method', c.method, c, null),
                At(e, t, 'target', c.target, c, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        (l = wu('' + l)), e.setAttribute(n, l);
        break;
      case 'onClick':
        l != null && (e.onclick = fs);
        break;
      case 'onScroll':
        l != null && yt('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && yt('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(u(61));
          if (((n = l.__html), n != null)) {
            if (c.children != null) throw Error(u(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
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
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (n = wu('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol' ? e.setAttribute(n, '' + l) : e.removeAttribute(n);
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
        l && typeof l != 'function' && typeof l != 'symbol' ? e.setAttribute(n, '') : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(n, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case 'popover':
        yt('beforetoggle', e), yt('toggle', e), vu(e, 'popover', l);
        break;
      case 'xlinkActuate':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        An(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        An(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        vu(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Gg.get(n) || n), vu(e, n, l));
    }
  }
  function rf(e, t, n, l, c, o) {
    switch (n) {
      case 'style':
        jd(e, l, o);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(u(61));
          if (((n = l.__html), n != null)) {
            if (c.children != null) throw Error(u(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string' ? ca(e, l) : (typeof l == 'number' || typeof l == 'bigint') && ca(e, '' + l);
        break;
      case 'onScroll':
        l != null && yt('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && yt('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = fs);
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
        if (!st.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((c = n.endsWith('Capture')),
              (t = n.slice(2, c ? n.length - 7 : void 0)),
              (o = e[lr] || null),
              (o = o != null ? o[n] : null),
              typeof o == 'function' && e.removeEventListener(t, o, c),
              typeof l == 'function')
            ) {
              typeof o != 'function' &&
                o !== null &&
                (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, c);
              break e;
            }
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : vu(e, n, l);
          }
    }
  }
  function ir(e, t, n) {
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
        yt('error', e), yt('load', e);
        var l = !1,
          c = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var x = n[o];
            if (x != null)
              switch (o) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  c = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(u(137, t));
                default:
                  At(e, t, o, x, n, null);
              }
          }
        c && At(e, t, 'srcSet', n.srcSet, n, null), l && At(e, t, 'src', n.src, n, null);
        return;
      case 'input':
        yt('invalid', e);
        var C = (o = x = c = null),
          K = null,
          fe = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var _e = n[l];
            if (_e != null)
              switch (l) {
                case 'name':
                  c = _e;
                  break;
                case 'type':
                  x = _e;
                  break;
                case 'checked':
                  K = _e;
                  break;
                case 'defaultChecked':
                  fe = _e;
                  break;
                case 'value':
                  o = _e;
                  break;
                case 'defaultValue':
                  C = _e;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (_e != null) throw Error(u(137, t));
                  break;
                default:
                  At(e, t, l, _e, n, null);
              }
          }
        Bd(e, o, C, K, fe, x, c, !1), Su(e);
        return;
      case 'select':
        yt('invalid', e), (l = x = o = null);
        for (c in n)
          if (n.hasOwnProperty(c) && ((C = n[c]), C != null))
            switch (c) {
              case 'value':
                o = C;
                break;
              case 'defaultValue':
                x = C;
                break;
              case 'multiple':
                l = C;
              default:
                At(e, t, c, C, n, null);
            }
        (t = o), (n = x), (e.multiple = !!l), t != null ? sa(e, !!l, t, !1) : n != null && sa(e, !!l, n, !0);
        return;
      case 'textarea':
        yt('invalid', e), (o = c = l = null);
        for (x in n)
          if (n.hasOwnProperty(x) && ((C = n[x]), C != null))
            switch (x) {
              case 'value':
                l = C;
                break;
              case 'defaultValue':
                c = C;
                break;
              case 'children':
                o = C;
                break;
              case 'dangerouslySetInnerHTML':
                if (C != null) throw Error(u(91));
                break;
              default:
                At(e, t, x, C, n, null);
            }
        Dd(e, l, c, o), Su(e);
        return;
      case 'option':
        for (K in n)
          if (n.hasOwnProperty(K) && ((l = n[K]), l != null))
            switch (K) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                At(e, t, K, l, n, null);
            }
        return;
      case 'dialog':
        yt('cancel', e), yt('close', e);
        break;
      case 'iframe':
      case 'object':
        yt('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Ml.length; l++) yt(Ml[l], e);
        break;
      case 'image':
        yt('error', e), yt('load', e);
        break;
      case 'details':
        yt('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        yt('error', e), yt('load', e);
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
        for (fe in n)
          if (n.hasOwnProperty(fe) && ((l = n[fe]), l != null))
            switch (fe) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(u(137, t));
              default:
                At(e, t, fe, l, n, null);
            }
        return;
      default:
        if (gc(t)) {
          for (_e in n) n.hasOwnProperty(_e) && ((l = n[_e]), l !== void 0 && rf(e, t, _e, l, n, void 0));
          return;
        }
    }
    for (C in n) n.hasOwnProperty(C) && ((l = n[C]), l != null && At(e, t, C, l, n, null));
  }
  function yv(e, t, n, l) {
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
        var c = null,
          o = null,
          x = null,
          C = null,
          K = null,
          fe = null,
          _e = null;
        for (Ae in n) {
          var Re = n[Ae];
          if (n.hasOwnProperty(Ae) && Re != null)
            switch (Ae) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                K = Re;
              default:
                l.hasOwnProperty(Ae) || At(e, t, Ae, null, l, Re);
            }
        }
        for (var be in l) {
          var Ae = l[be];
          if (((Re = n[be]), l.hasOwnProperty(be) && (Ae != null || Re != null)))
            switch (be) {
              case 'type':
                o = Ae;
                break;
              case 'name':
                c = Ae;
                break;
              case 'checked':
                fe = Ae;
                break;
              case 'defaultChecked':
                _e = Ae;
                break;
              case 'value':
                x = Ae;
                break;
              case 'defaultValue':
                C = Ae;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Ae != null) throw Error(u(137, t));
                break;
              default:
                Ae !== Re && At(e, t, be, Ae, l, Re);
            }
        }
        pc(e, x, C, K, fe, _e, o, c);
        return;
      case 'select':
        Ae = x = C = be = null;
        for (o in n)
          if (((K = n[o]), n.hasOwnProperty(o) && K != null))
            switch (o) {
              case 'value':
                break;
              case 'multiple':
                Ae = K;
              default:
                l.hasOwnProperty(o) || At(e, t, o, null, l, K);
            }
        for (c in l)
          if (((o = l[c]), (K = n[c]), l.hasOwnProperty(c) && (o != null || K != null)))
            switch (c) {
              case 'value':
                be = o;
                break;
              case 'defaultValue':
                C = o;
                break;
              case 'multiple':
                x = o;
              default:
                o !== K && At(e, t, c, o, l, K);
            }
        (t = C),
          (n = x),
          (l = Ae),
          be != null ? sa(e, !!n, be, !1) : !!l != !!n && (t != null ? sa(e, !!n, t, !0) : sa(e, !!n, n ? [] : '', !1));
        return;
      case 'textarea':
        Ae = be = null;
        for (C in n)
          if (((c = n[C]), n.hasOwnProperty(C) && c != null && !l.hasOwnProperty(C)))
            switch (C) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                At(e, t, C, null, l, c);
            }
        for (x in l)
          if (((c = l[x]), (o = n[x]), l.hasOwnProperty(x) && (c != null || o != null)))
            switch (x) {
              case 'value':
                be = c;
                break;
              case 'defaultValue':
                Ae = c;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(u(91));
                break;
              default:
                c !== o && At(e, t, x, c, l, o);
            }
        Cd(e, be, Ae);
        return;
      case 'option':
        for (var Ze in n)
          if (((be = n[Ze]), n.hasOwnProperty(Ze) && be != null && !l.hasOwnProperty(Ze)))
            switch (Ze) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                At(e, t, Ze, null, l, be);
            }
        for (K in l)
          if (((be = l[K]), (Ae = n[K]), l.hasOwnProperty(K) && be !== Ae && (be != null || Ae != null)))
            switch (K) {
              case 'selected':
                e.selected = be && typeof be != 'function' && typeof be != 'symbol';
                break;
              default:
                At(e, t, K, be, l, Ae);
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
        for (var nt in n)
          (be = n[nt]), n.hasOwnProperty(nt) && be != null && !l.hasOwnProperty(nt) && At(e, t, nt, null, l, be);
        for (fe in l)
          if (((be = l[fe]), (Ae = n[fe]), l.hasOwnProperty(fe) && be !== Ae && (be != null || Ae != null)))
            switch (fe) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (be != null) throw Error(u(137, t));
                break;
              default:
                At(e, t, fe, be, l, Ae);
            }
        return;
      default:
        if (gc(t)) {
          for (var Ft in n)
            (be = n[Ft]), n.hasOwnProperty(Ft) && be !== void 0 && !l.hasOwnProperty(Ft) && rf(e, t, Ft, void 0, l, be);
          for (_e in l)
            (be = l[_e]),
              (Ae = n[_e]),
              !l.hasOwnProperty(_e) || be === Ae || (be === void 0 && Ae === void 0) || rf(e, t, _e, be, l, Ae);
          return;
        }
    }
    for (var me in n)
      (be = n[me]), n.hasOwnProperty(me) && be != null && !l.hasOwnProperty(me) && At(e, t, me, null, l, be);
    for (Re in l)
      (be = l[Re]),
        (Ae = n[Re]),
        !l.hasOwnProperty(Re) || be === Ae || (be == null && Ae == null) || At(e, t, Re, be, l, Ae);
  }
  var nf = null,
    af = null;
  function ds(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Nm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Tm(e, t) {
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
  function lf(e, t) {
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
  var uf = null;
  function gv() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === uf ? !1 : ((uf = e), !0)) : ((uf = null), !1);
  }
  var Om = typeof setTimeout == 'function' ? setTimeout : void 0,
    vv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Mm = typeof Promise == 'function' ? Promise : void 0,
    bv =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Mm < 'u'
          ? function (e) {
              return Mm.resolve(null).then(e).catch(Sv);
            }
          : Om;
  function Sv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function sf(e, t) {
    var n = t,
      l = 0;
    do {
      var c = n.nextSibling;
      if ((e.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === '/$')) {
          if (l === 0) {
            e.removeChild(c), Ll(t);
            return;
          }
          l--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || l++;
      n = c;
    } while (n);
    Ll(t);
  }
  function cf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          cf(n), Xa(n);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(n);
    }
  }
  function xv(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var c = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Ti])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (((o = e.getAttribute('rel')), o === 'stylesheet' && e.hasAttribute('data-precedence'))) break;
              if (
                o !== c.rel ||
                e.getAttribute('href') !== (c.href == null ? null : c.href) ||
                e.getAttribute('crossorigin') !== (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute('title') !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((o = e.getAttribute('src')),
                (o !== (c.src == null ? null : c.src) ||
                  e.getAttribute('type') !== (c.type == null ? null : c.type) ||
                  e.getAttribute('crossorigin') !== (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  o &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var o = c.name == null ? null : '' + c.name;
        if (c.type === 'hidden' && e.getAttribute('name') === o) return e;
      } else return e;
      if (((e = an(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function wv(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = an(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function an(e) {
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
  function Rm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Bm(e, t, n) {
    switch (((t = ds(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  var Zr = new Map(),
    Cm = new Set();
  function hs(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
  }
  var qn = O.d;
  O.d = { f: Ev, r: Av, D: _v, C: Nv, L: Tv, m: Ov, X: Rv, S: Mv, M: Bv };
  function Ev() {
    var e = qn.f(),
      t = as();
    return e || t;
  }
  function Av(e) {
    var t = Pn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? a0(t) : qn.r(e);
  }
  var ka = typeof document > 'u' ? null : document;
  function Dm(e, t, n) {
    var l = ka;
    if (l && typeof t == 'string' && t) {
      var c = qr(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof n == 'string' && (c += '[crossorigin="' + n + '"]'),
        Cm.has(c) ||
          (Cm.add(c),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(c) === null &&
            ((t = l.createElement('link')), ir(t, 'link', e), Je(t), l.head.appendChild(t)));
    }
  }
  function _v(e) {
    qn.D(e), Dm('dns-prefetch', e, null);
  }
  function Nv(e, t) {
    qn.C(e, t), Dm('preconnect', e, t);
  }
  function Tv(e, t, n) {
    qn.L(e, t, n);
    var l = ka;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + qr(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((c += '[imagesrcset="' + qr(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (c += '[imagesizes="' + qr(n.imageSizes) + '"]'))
        : (c += '[href="' + qr(e) + '"]');
      var o = c;
      switch (t) {
        case 'style':
          o = Ia(e);
          break;
        case 'script':
          o = La(e);
      }
      Zr.has(o) ||
        ((e = N({ rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
        Zr.set(o, e),
        l.querySelector(c) !== null ||
          (t === 'style' && l.querySelector(Bl(o))) ||
          (t === 'script' && l.querySelector(Cl(o))) ||
          ((t = l.createElement('link')), ir(t, 'link', e), Je(t), l.head.appendChild(t)));
    }
  }
  function Ov(e, t) {
    qn.m(e, t);
    var n = ka;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        c = 'link[rel="modulepreload"][as="' + qr(l) + '"][href="' + qr(e) + '"]',
        o = c;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          o = La(e);
      }
      if (!Zr.has(o) && ((e = N({ rel: 'modulepreload', href: e }, t)), Zr.set(o, e), n.querySelector(c) === null)) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Cl(o))) return;
        }
        (l = n.createElement('link')), ir(l, 'link', e), Je(l), n.head.appendChild(l);
      }
    }
  }
  function Mv(e, t, n) {
    qn.S(e, t, n);
    var l = ka;
    if (l && e) {
      var c = ee(l).hoistableStyles,
        o = Ia(e);
      t = t || 'default';
      var x = c.get(o);
      if (!x) {
        var C = { loading: 0, preload: null };
        if ((x = l.querySelector(Bl(o)))) C.loading = 5;
        else {
          (e = N({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = Zr.get(o)) && of(e, n);
          var K = (x = l.createElement('link'));
          Je(K),
            ir(K, 'link', e),
            (K._p = new Promise(function (fe, _e) {
              (K.onload = fe), (K.onerror = _e);
            })),
            K.addEventListener('load', function () {
              C.loading |= 1;
            }),
            K.addEventListener('error', function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            ms(x, t, l);
        }
        (x = { type: 'stylesheet', instance: x, count: 1, state: C }), c.set(o, x);
      }
    }
  }
  function Rv(e, t) {
    qn.X(e, t);
    var n = ka;
    if (n && e) {
      var l = ee(n).hoistableScripts,
        c = La(e),
        o = l.get(c);
      o ||
        ((o = n.querySelector(Cl(c))),
        o ||
          ((e = N({ src: e, async: !0 }, t)),
          (t = Zr.get(c)) && ff(e, t),
          (o = n.createElement('script')),
          Je(o),
          ir(o, 'link', e),
          n.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        l.set(c, o));
    }
  }
  function Bv(e, t) {
    qn.M(e, t);
    var n = ka;
    if (n && e) {
      var l = ee(n).hoistableScripts,
        c = La(e),
        o = l.get(c);
      o ||
        ((o = n.querySelector(Cl(c))),
        o ||
          ((e = N({ src: e, async: !0, type: 'module' }, t)),
          (t = Zr.get(c)) && ff(e, t),
          (o = n.createElement('script')),
          Je(o),
          ir(o, 'link', e),
          n.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        l.set(c, o));
    }
  }
  function Um(e, t, n, l) {
    var c = (c = se.current) ? hs(c) : null;
    if (!c) throw Error(u(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Ia(n.href)),
            (n = ee(c).hoistableStyles),
            (l = n.get(t)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), n.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (n.rel === 'stylesheet' && typeof n.href == 'string' && typeof n.precedence == 'string') {
          e = Ia(n.href);
          var o = ee(c).hoistableStyles,
            x = o.get(e);
          if (
            (x ||
              ((c = c.ownerDocument || c),
              (x = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              o.set(e, x),
              (o = c.querySelector(Bl(e))) && !o._p && ((x.instance = o), (x.state.loading = 5)),
              Zr.has(e) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy
                }),
                Zr.set(e, n),
                o || Cv(c, e, n, x.state))),
            t && l === null)
          )
            throw Error(u(528, ''));
          return x;
        }
        if (t && l !== null) throw Error(u(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = La(n)),
              (n = ee(c).hoistableScripts),
              (l = n.get(t)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function Ia(e) {
    return 'href="' + qr(e) + '"';
  }
  function Bl(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function jm(e) {
    return N({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Cv(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        ir(t, 'link', n),
        Je(t),
        e.head.appendChild(t));
  }
  function La(e) {
    return '[src="' + qr(e) + '"]';
  }
  function Cl(e) {
    return 'script[async]' + e;
  }
  function km(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + qr(n.href) + '"]');
          if (l) return (t.instance = l), Je(l), l;
          var c = N({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Je(l),
            ir(l, 'style', c),
            ms(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          c = Ia(n.href);
          var o = e.querySelector(Bl(c));
          if (o) return (t.state.loading |= 4), (t.instance = o), Je(o), o;
          (l = jm(n)), (c = Zr.get(c)) && of(l, c), (o = (e.ownerDocument || e).createElement('link')), Je(o);
          var x = o;
          return (
            (x._p = new Promise(function (C, K) {
              (x.onload = C), (x.onerror = K);
            })),
            ir(o, 'link', l),
            (t.state.loading |= 4),
            ms(o, n.precedence, e),
            (t.instance = o)
          );
        case 'script':
          return (
            (o = La(n.src)),
            (c = e.querySelector(Cl(o)))
              ? ((t.instance = c), Je(c), c)
              : ((l = n),
                (c = Zr.get(o)) && ((l = N({}, n)), ff(l, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement('script')),
                Je(c),
                ir(c, 'link', l),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case 'void':
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), ms(l, n.precedence, e));
    return t.instance;
  }
  function ms(e, t, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        c = l.length ? l[l.length - 1] : null,
        o = c,
        x = 0;
      x < l.length;
      x++
    ) {
      var C = l[x];
      if (C.dataset.precedence === t) o = C;
      else if (o !== c) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function of(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function ff(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var ps = null;
  function Im(e, t, n) {
    if (ps === null) {
      var l = new Map(),
        c = (ps = new Map());
      c.set(n, l);
    } else (c = ps), (l = c.get(n)), l || ((l = new Map()), c.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), c = 0; c < n.length; c++) {
      var o = n[c];
      if (
        !(o[Ti] || o[dt] || (e === 'link' && o.getAttribute('rel') === 'stylesheet')) &&
        o.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var x = o.getAttribute(t) || '';
        x = e + x;
        var C = l.get(x);
        C ? C.push(o) : l.set(x, [o]);
      }
    }
    return l;
  }
  function Lm(e, t, n) {
    (e = e.ownerDocument || e), e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null);
  }
  function Dv(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
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
  function qm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var Dl = null;
  function Uv() {}
  function jv(e, t, n) {
    if (Dl === null) throw Error(u(475));
    var l = Dl;
    if (
      t.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var c = Ia(n.href),
          o = e.querySelector(Bl(c));
        if (o) {
          (e = o._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = ys.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = o),
            Je(o);
          return;
        }
        (o = e.ownerDocument || e), (n = jm(n)), (c = Zr.get(c)) && of(n, c), (o = o.createElement('link')), Je(o);
        var x = o;
        (x._p = new Promise(function (C, K) {
          (x.onload = C), (x.onerror = K);
        })),
          ir(o, 'link', n),
          (t.instance = o);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++, (t = ys.bind(l)), e.addEventListener('load', t), e.addEventListener('error', t));
    }
  }
  function kv() {
    if (Dl === null) throw Error(u(475));
    var e = Dl;
    return (
      e.stylesheets && e.count === 0 && df(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && df(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function ys() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) df(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var gs = null;
  function df(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null && (e.count++, (gs = new Map()), t.forEach(Iv, e), (gs = null), ys.call(e));
  }
  function Iv(e, t) {
    if (!(t.state.loading & 4)) {
      var n = gs.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), gs.set(e, n);
        for (var c = e.querySelectorAll('link[data-precedence],style[data-precedence]'), o = 0; o < c.length; o++) {
          var x = c[o];
          (x.nodeName === 'LINK' || x.getAttribute('media') !== 'not all') && (n.set(x.dataset.precedence, x), (l = x));
        }
        l && n.set(null, l);
      }
      (c = t.instance),
        (x = c.getAttribute('data-precedence')),
        (o = n.get(x) || l),
        o === l && n.set(null, c),
        n.set(x, c),
        this.count++,
        (l = ys.bind(this)),
        c.addEventListener('load', l),
        c.addEventListener('error', l),
        o
          ? o.parentNode.insertBefore(c, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Ul = { $$typeof: E, Provider: null, Consumer: null, _currentValue: je, _currentValue2: je, _threadCount: 0 };
  function Lv(e, t, n, l, c, o, x, C) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ua(-1)),
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
      (this.entanglements = ua(0)),
      (this.hiddenUpdates = ua(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = o),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map());
  }
  function zm(e, t, n, l, c, o, x, C, K, fe, _e, Re) {
    return (
      (e = new Lv(e, t, n, x, C, K, fe, Re)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = Xr(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = Fc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Eo(o),
      e
    );
  }
  function Hm(e) {
    return e ? ((e = ya), e) : ya;
  }
  function Fm(e, t, n, l, c, o) {
    (c = Hm(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = li(t)),
      (l.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = ui(e, l, t)),
      n !== null && (mr(n, e, t), gl(n, e, t));
  }
  function Vm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function hf(e, t) {
    Vm(e, t), (e = e.alternate) && Vm(e, t);
  }
  function Gm(e) {
    if (e.tag === 13) {
      var t = Wn(e, 67108864);
      t !== null && mr(t, e, 67108864), hf(e, 67108864);
    }
  }
  var vs = !0;
  function qv(e, t, n, l) {
    var c = w.T;
    w.T = null;
    var o = O.p;
    try {
      (O.p = 2), mf(e, t, n, l);
    } finally {
      (O.p = o), (w.T = c);
    }
  }
  function zv(e, t, n, l) {
    var c = w.T;
    w.T = null;
    var o = O.p;
    try {
      (O.p = 8), mf(e, t, n, l);
    } finally {
      (O.p = o), (w.T = c);
    }
  }
  function mf(e, t, n, l) {
    if (vs) {
      var c = pf(l);
      if (c === null) tf(e, t, l, bs, n), Ym(e, l);
      else if (Fv(c, e, t, n, l)) l.stopPropagation();
      else if ((Ym(e, l), t & 4 && -1 < Hv.indexOf(e))) {
        for (; c !== null; ) {
          var o = Pn(c);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var x = $e(o.pendingLanes);
                  if (x !== 0) {
                    var C = o;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; x; ) {
                      var K = 1 << (31 - Ie(x));
                      (C.entanglements[1] |= K), (x &= ~K);
                    }
                    yn(o), (It & 6) === 0 && ((rs = Be() + 500), Ol(0));
                  }
                }
                break;
              case 13:
                (C = Wn(o, 2)), C !== null && mr(C, o, 2), as(), hf(o, 2);
            }
          if (((o = pf(l)), o === null && tf(e, t, l, bs, n), o === c)) break;
          c = o;
        }
        c !== null && l.stopPropagation();
      } else tf(e, t, l, null, n);
    }
  }
  function pf(e) {
    return (e = bc(e)), yf(e);
  }
  var bs = null;
  function yf(e) {
    if (((bs = null), (e = pt(e)), e !== null)) {
      var t = H(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = oe(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (bs = e), null;
  }
  function $m(e) {
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
          case rt:
            return 2;
          case A:
            return 8;
          case m:
          case g:
            return 32;
          case V:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1,
    mi = null,
    pi = null,
    yi = null,
    jl = new Map(),
    kl = new Map(),
    gi = [],
    Hv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Ym(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        mi = null;
        break;
      case 'dragenter':
      case 'dragleave':
        pi = null;
        break;
      case 'mouseover':
      case 'mouseout':
        yi = null;
        break;
      case 'pointerover':
      case 'pointerout':
        jl.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        kl.delete(t.pointerId);
    }
  }
  function Il(e, t, n, l, c, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: l, nativeEvent: o, targetContainers: [c] }),
        t !== null && ((t = Pn(t)), t !== null && Gm(t)),
        e)
      : ((e.eventSystemFlags |= l), (t = e.targetContainers), c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function Fv(e, t, n, l, c) {
    switch (t) {
      case 'focusin':
        return (mi = Il(mi, e, t, n, l, c)), !0;
      case 'dragenter':
        return (pi = Il(pi, e, t, n, l, c)), !0;
      case 'mouseover':
        return (yi = Il(yi, e, t, n, l, c)), !0;
      case 'pointerover':
        var o = c.pointerId;
        return jl.set(o, Il(jl.get(o) || null, e, t, n, l, c)), !0;
      case 'gotpointercapture':
        return (o = c.pointerId), kl.set(o, Il(kl.get(o) || null, e, t, n, l, c)), !0;
    }
    return !1;
  }
  function Xm(e) {
    var t = pt(e.target);
    if (t !== null) {
      var n = H(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = oe(n)), t !== null)) {
            (e.blockedOn = t),
              dc(e.priority, function () {
                if (n.tag === 13) {
                  var l = Br(),
                    c = Wn(n, l);
                  c !== null && mr(c, n, l), hf(n, l);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ss(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = pf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (vc = l), n.target.dispatchEvent(l), (vc = null);
      } else return (t = Pn(n)), t !== null && Gm(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Km(e, t, n) {
    Ss(e) && n.delete(t);
  }
  function Vv() {
    (gf = !1),
      mi !== null && Ss(mi) && (mi = null),
      pi !== null && Ss(pi) && (pi = null),
      yi !== null && Ss(yi) && (yi = null),
      jl.forEach(Km),
      kl.forEach(Km);
  }
  function xs(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), gf || ((gf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Vv)));
  }
  var ws = null;
  function Zm(e) {
    ws !== e &&
      ((ws = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        ws === e && (ws = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            c = e[t + 2];
          if (typeof l != 'function') {
            if (yf(l || n) === null) continue;
            break;
          }
          var o = Pn(n);
          o !== null && (e.splice(t, 3), (t -= 3), io(o, { pending: !0, data: c, method: n.method, action: l }, l, c));
        }
      }));
  }
  function Ll(e) {
    function t(K) {
      return xs(K, e);
    }
    mi !== null && xs(mi, e), pi !== null && xs(pi, e), yi !== null && xs(yi, e), jl.forEach(t), kl.forEach(t);
    for (var n = 0; n < gi.length; n++) {
      var l = gi[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < gi.length && ((n = gi[0]), n.blockedOn === null); ) Xm(n), n.blockedOn === null && gi.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var c = n[l],
          o = n[l + 1],
          x = c[lr] || null;
        if (typeof o == 'function') x || Zm(n);
        else if (x) {
          var C = null;
          if (o && o.hasAttribute('formAction')) {
            if (((c = o), (x = o[lr] || null))) C = x.formAction;
            else if (yf(c) !== null) continue;
          } else C = x.action;
          typeof C == 'function' ? (n[l + 1] = C) : (n.splice(l, 3), (l -= 3)), Zm(n);
        }
      }
  }
  function vf(e) {
    this._internalRoot = e;
  }
  (Es.prototype.render = vf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var n = t.current,
        l = Br();
      Fm(n, l, e, t, null, null);
    }),
    (Es.prototype.unmount = vf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Da(), Fm(e.current, 2, null, e, null, null), as(), (t[Qn] = null);
        }
      });
  function Es(e) {
    this._internalRoot = e;
  }
  Es.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < gi.length && t !== 0 && t < gi[n].priority; n++);
      gi.splice(n, 0, e), n === 0 && Xm(e);
    }
  };
  var Qm = i.version;
  if (Qm !== '19.0.0') throw Error(u(527, Qm, '19.0.0'));
  O.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ? Error(u(188)) : ((e = Object.keys(e).join(',')), Error(u(268, e)));
    return (e = ne(t)), (e = e !== null ? we(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var Gv = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: w,
    findFiberByHostInstance: pt,
    reconcilerVersion: '19.0.0'
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!As.isDisabled && As.supportsFiber)
      try {
        (L = As.inject(Gv)), (de = As);
      } catch {}
  }
  return (
    (zl.createRoot = function (e, t) {
      if (!s(e)) throw Error(u(299));
      var n = !1,
        l = '',
        c = h0,
        o = m0,
        x = p0,
        C = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (x = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (C = t.unstable_transitionCallbacks)),
        (t = zm(e, 1, !1, null, null, n, l, c, o, x, C, null)),
        (e[Qn] = t.current),
        ef(e.nodeType === 8 ? e.parentNode : e),
        new vf(t)
      );
    }),
    (zl.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(u(299));
      var l = !1,
        c = '',
        o = h0,
        x = m0,
        C = p0,
        K = null,
        fe = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (x = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 && (K = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (fe = n.formState)),
        (t = zm(e, 1, !0, t, n ?? null, l, c, o, x, C, K, fe)),
        (t.context = Hm(null)),
        (n = t.current),
        (l = Br()),
        (c = li(l)),
        (c.callback = null),
        ui(n, c, l),
        (t.current.lanes = l),
        Tt(t, l),
        yn(t),
        (e[Qn] = t.current),
        ef(e),
        new Es(t)
      );
    }),
    (zl.version = '19.0.0'),
    zl
  );
}
var up;
function rb() {
  if (up) return xf.exports;
  up = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), (xf.exports = tb()), xf.exports;
}
var nb = rb();
const ib = tu(nb);
var Hl = {},
  sp;
function ab() {
  if (sp) return Hl;
  (sp = 1), Object.defineProperty(Hl, '__esModule', { value: !0 }), (Hl.parse = d), (Hl.serialize = y);
  const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    u = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    f = (() => {
      const S = function () {};
      return (S.prototype = Object.create(null)), S;
    })();
  function d(S, E) {
    const I = new f(),
      P = S.length;
    if (P < 2) return I;
    const J = (E == null ? void 0 : E.decode) || _;
    let W = 0;
    do {
      const z = S.indexOf('=', W);
      if (z === -1) break;
      const ve = S.indexOf(';', W),
        qe = ve === -1 ? P : ve;
      if (z > qe) {
        W = S.lastIndexOf(';', z - 1) + 1;
        continue;
      }
      const xe = h(S, W, z),
        Ee = p(S, z, xe),
        De = S.slice(xe, Ee);
      if (I[De] === void 0) {
        let v = h(S, z + 1, qe),
          w = p(S, qe, v);
        const N = J(S.slice(v, w));
        I[De] = N;
      }
      W = qe + 1;
    } while (W < P);
    return I;
  }
  function h(S, E, I) {
    do {
      const P = S.charCodeAt(E);
      if (P !== 32 && P !== 9) return E;
    } while (++E < I);
    return I;
  }
  function p(S, E, I) {
    for (; E > I; ) {
      const P = S.charCodeAt(--E);
      if (P !== 32 && P !== 9) return E + 1;
    }
    return I;
  }
  function y(S, E, I) {
    const P = (I == null ? void 0 : I.encode) || encodeURIComponent;
    if (!r.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
    const J = P(E);
    if (!i.test(J)) throw new TypeError(`argument val is invalid: ${E}`);
    let W = S + '=' + J;
    if (!I) return W;
    if (I.maxAge !== void 0) {
      if (!Number.isInteger(I.maxAge)) throw new TypeError(`option maxAge is invalid: ${I.maxAge}`);
      W += '; Max-Age=' + I.maxAge;
    }
    if (I.domain) {
      if (!a.test(I.domain)) throw new TypeError(`option domain is invalid: ${I.domain}`);
      W += '; Domain=' + I.domain;
    }
    if (I.path) {
      if (!u.test(I.path)) throw new TypeError(`option path is invalid: ${I.path}`);
      W += '; Path=' + I.path;
    }
    if (I.expires) {
      if (!b(I.expires) || !Number.isFinite(I.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${I.expires}`);
      W += '; Expires=' + I.expires.toUTCString();
    }
    if (
      (I.httpOnly && (W += '; HttpOnly'),
      I.secure && (W += '; Secure'),
      I.partitioned && (W += '; Partitioned'),
      I.priority)
    )
      switch (typeof I.priority == 'string' ? I.priority.toLowerCase() : void 0) {
        case 'low':
          W += '; Priority=Low';
          break;
        case 'medium':
          W += '; Priority=Medium';
          break;
        case 'high':
          W += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${I.priority}`);
      }
    if (I.sameSite)
      switch (typeof I.sameSite == 'string' ? I.sameSite.toLowerCase() : I.sameSite) {
        case !0:
        case 'strict':
          W += '; SameSite=Strict';
          break;
        case 'lax':
          W += '; SameSite=Lax';
          break;
        case 'none':
          W += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${I.sameSite}`);
      }
    return W;
  }
  function _(S) {
    if (S.indexOf('%') === -1) return S;
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }
  function b(S) {
    return s.call(S) === '[object Date]';
  }
  return Hl;
}
ab();
/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var cp = 'popstate';
function lb(r = {}) {
  function i(u, s) {
    let { pathname: f, search: d, hash: h } = u.location;
    return Pf(
      '',
      { pathname: f, search: d, hash: h },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default'
    );
  }
  function a(u, s) {
    return typeof s == 'string' ? s : Wl(s);
  }
  return sb(i, a, null, r);
}
function qt(r, i) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(i);
}
function wn(r, i) {
  if (!r) {
    typeof console < 'u' && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function ub() {
  return Math.random().toString(36).substring(2, 10);
}
function op(r, i) {
  return { usr: r.state, key: r.key, idx: i };
}
function Pf(r, i, a = null, u) {
  return {
    pathname: typeof r == 'string' ? r : r.pathname,
    search: '',
    hash: '',
    ...(typeof i == 'string' ? Ga(i) : i),
    state: a,
    key: (i && i.key) || u || ub()
  };
}
function Wl({ pathname: r = '/', search: i = '', hash: a = '' }) {
  return (
    i && i !== '?' && (r += i.charAt(0) === '?' ? i : '?' + i),
    a && a !== '#' && (r += a.charAt(0) === '#' ? a : '#' + a),
    r
  );
}
function Ga(r) {
  let i = {};
  if (r) {
    let a = r.indexOf('#');
    a >= 0 && ((i.hash = r.substring(a)), (r = r.substring(0, a)));
    let u = r.indexOf('?');
    u >= 0 && ((i.search = r.substring(u)), (r = r.substring(0, u))), r && (i.pathname = r);
  }
  return i;
}
function sb(r, i, a, u = {}) {
  let { window: s = document.defaultView, v5Compat: f = !1 } = u,
    d = s.history,
    h = 'POP',
    p = null,
    y = _();
  y == null && ((y = 0), d.replaceState({ ...d.state, idx: y }, ''));
  function _() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    h = 'POP';
    let J = _(),
      W = J == null ? null : J - y;
    (y = J), p && p({ action: h, location: P.location, delta: W });
  }
  function S(J, W) {
    h = 'PUSH';
    let z = Pf(P.location, J, W);
    y = _() + 1;
    let ve = op(z, y),
      qe = P.createHref(z);
    try {
      d.pushState(ve, '', qe);
    } catch (xe) {
      if (xe instanceof DOMException && xe.name === 'DataCloneError') throw xe;
      s.location.assign(qe);
    }
    f && p && p({ action: h, location: P.location, delta: 1 });
  }
  function E(J, W) {
    h = 'REPLACE';
    let z = Pf(P.location, J, W);
    y = _();
    let ve = op(z, y),
      qe = P.createHref(z);
    d.replaceState(ve, '', qe), f && p && p({ action: h, location: P.location, delta: 0 });
  }
  function I(J) {
    let W = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      z = typeof J == 'string' ? J : Wl(J);
    return (
      (z = z.replace(/ $/, '%20')),
      qt(W, `No window.location.(origin|href) available to create URL for href: ${z}`),
      new URL(z, W)
    );
  }
  let P = {
    get action() {
      return h;
    },
    get location() {
      return r(s, d);
    },
    listen(J) {
      if (p) throw new Error('A history only accepts one active listener');
      return (
        s.addEventListener(cp, b),
        (p = J),
        () => {
          s.removeEventListener(cp, b), (p = null);
        }
      );
    },
    createHref(J) {
      return i(s, J);
    },
    createURL: I,
    encodeLocation(J) {
      let W = I(J);
      return { pathname: W.pathname, search: W.search, hash: W.hash };
    },
    push: S,
    replace: E,
    go(J) {
      return d.go(J);
    }
  };
  return P;
}
function xy(r, i, a = '/') {
  return cb(r, i, a, !1);
}
function cb(r, i, a, u) {
  let s = typeof i == 'string' ? Ga(i) : i,
    f = Xn(s.pathname || '/', a);
  if (f == null) return null;
  let d = wy(r);
  ob(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let y = xb(f);
    h = bb(d[p], y, u);
  }
  return h;
}
function wy(r, i = [], a = [], u = '') {
  let s = (f, d, h) => {
    let p = {
      relativePath: h === void 0 ? f.path || '' : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f
    };
    p.relativePath.startsWith('/') &&
      (qt(
        p.relativePath.startsWith(u),
        `Absolute route path "${p.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(u.length)));
    let y = $n([u, p.relativePath]),
      _ = a.concat(p);
    f.children &&
      f.children.length > 0 &&
      (qt(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      wy(f.children, i, _, y)),
      !(f.path == null && !f.index) && i.push({ path: y, score: gb(y, f.index), routesMeta: _ });
  };
  return (
    r.forEach((f, d) => {
      var h;
      if (f.path === '' || !((h = f.path) != null && h.includes('?'))) s(f, d);
      else for (let p of Ey(f.path)) s(f, d, p);
    }),
    i
  );
}
function Ey(r) {
  let i = r.split('/');
  if (i.length === 0) return [];
  let [a, ...u] = i,
    s = a.endsWith('?'),
    f = a.replace(/\?$/, '');
  if (u.length === 0) return s ? [f, ''] : [f];
  let d = Ey(u.join('/')),
    h = [];
  return (
    h.push(...d.map((p) => (p === '' ? f : [f, p].join('/')))),
    s && h.push(...d),
    h.map((p) => (r.startsWith('/') && p === '' ? '/' : p))
  );
}
function ob(r) {
  r.sort((i, a) =>
    i.score !== a.score
      ? a.score - i.score
      : vb(
          i.routesMeta.map((u) => u.childrenIndex),
          a.routesMeta.map((u) => u.childrenIndex)
        )
  );
}
var fb = /^:[\w-]+$/,
  db = 3,
  hb = 2,
  mb = 1,
  pb = 10,
  yb = -2,
  fp = (r) => r === '*';
function gb(r, i) {
  let a = r.split('/'),
    u = a.length;
  return (
    a.some(fp) && (u += yb),
    i && (u += hb),
    a.filter((s) => !fp(s)).reduce((s, f) => s + (fb.test(f) ? db : f === '' ? mb : pb), u)
  );
}
function vb(r, i) {
  return r.length === i.length && r.slice(0, -1).every((u, s) => u === i[s]) ? r[r.length - 1] - i[i.length - 1] : 0;
}
function bb(r, i, a = !1) {
  let { routesMeta: u } = r,
    s = {},
    f = '/',
    d = [];
  for (let h = 0; h < u.length; ++h) {
    let p = u[h],
      y = h === u.length - 1,
      _ = f === '/' ? i : i.slice(f.length) || '/',
      b = zs({ path: p.relativePath, caseSensitive: p.caseSensitive, end: y }, _),
      S = p.route;
    if (
      (!b &&
        y &&
        a &&
        !u[u.length - 1].route.index &&
        (b = zs({ path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 }, _)),
      !b)
    )
      return null;
    Object.assign(s, b.params),
      d.push({ params: s, pathname: $n([f, b.pathname]), pathnameBase: _b($n([f, b.pathnameBase])), route: S }),
      b.pathnameBase !== '/' && (f = $n([f, b.pathnameBase]));
  }
  return d;
}
function zs(r, i) {
  typeof r == 'string' && (r = { path: r, caseSensitive: !1, end: !0 });
  let [a, u] = Sb(r.path, r.caseSensitive, r.end),
    s = i.match(a);
  if (!s) return null;
  let f = s[0],
    d = f.replace(/(.)\/+$/, '$1'),
    h = s.slice(1);
  return {
    params: u.reduce((y, { paramName: _, isOptional: b }, S) => {
      if (_ === '*') {
        let I = h[S] || '';
        d = f.slice(0, f.length - I.length).replace(/(.)\/+$/, '$1');
      }
      const E = h[S];
      return b && !E ? (y[_] = void 0) : (y[_] = (E || '').replace(/%2F/g, '/')), y;
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: r
  };
}
function Sb(r, i = !1, a = !0) {
  wn(
    r === '*' || !r.endsWith('*') || r.endsWith('/*'),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, '/*')}".`
  );
  let u = [],
    s =
      '^' +
      r
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, p) => (u.push({ paramName: h, isOptional: p != null }), p ? '/?([^\\/]+)?' : '/([^\\/]+)')
        );
  return (
    r.endsWith('*')
      ? (u.push({ paramName: '*' }), (s += r === '*' || r === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : a
        ? (s += '\\/*$')
        : r !== '' && r !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, i ? void 0 : 'i'), u]
  );
}
function xb(r) {
  try {
    return r
      .split('/')
      .map((i) => decodeURIComponent(i).replace(/\//g, '%2F'))
      .join('/');
  } catch (i) {
    return (
      wn(
        !1,
        `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      r
    );
  }
}
function Xn(r, i) {
  if (i === '/') return r;
  if (!r.toLowerCase().startsWith(i.toLowerCase())) return null;
  let a = i.endsWith('/') ? i.length - 1 : i.length,
    u = r.charAt(a);
  return u && u !== '/' ? null : r.slice(a) || '/';
}
function wb(r, i = '/') {
  let { pathname: a, search: u = '', hash: s = '' } = typeof r == 'string' ? Ga(r) : r;
  return { pathname: a ? (a.startsWith('/') ? a : Eb(a, i)) : i, search: Nb(u), hash: Tb(s) };
}
function Eb(r, i) {
  let a = i.replace(/\/+$/, '').split('/');
  return (
    r.split('/').forEach((s) => {
      s === '..' ? a.length > 1 && a.pop() : s !== '.' && a.push(s);
    }),
    a.length > 1 ? a.join('/') : '/'
  );
}
function _f(r, i, a, u) {
  return `Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ab(r) {
  return r.filter((i, a) => a === 0 || (i.route.path && i.route.path.length > 0));
}
function Ay(r) {
  let i = Ab(r);
  return i.map((a, u) => (u === i.length - 1 ? a.pathname : a.pathnameBase));
}
function _y(r, i, a, u = !1) {
  let s;
  typeof r == 'string'
    ? (s = Ga(r))
    : ((s = { ...r }),
      qt(!s.pathname || !s.pathname.includes('?'), _f('?', 'pathname', 'search', s)),
      qt(!s.pathname || !s.pathname.includes('#'), _f('#', 'pathname', 'hash', s)),
      qt(!s.search || !s.search.includes('#'), _f('#', 'search', 'hash', s)));
  let f = r === '' || s.pathname === '',
    d = f ? '/' : s.pathname,
    h;
  if (d == null) h = a;
  else {
    let b = i.length - 1;
    if (!u && d.startsWith('..')) {
      let S = d.split('/');
      for (; S[0] === '..'; ) S.shift(), (b -= 1);
      s.pathname = S.join('/');
    }
    h = b >= 0 ? i[b] : '/';
  }
  let p = wb(s, h),
    y = d && d !== '/' && d.endsWith('/'),
    _ = (f || d === '.') && a.endsWith('/');
  return !p.pathname.endsWith('/') && (y || _) && (p.pathname += '/'), p;
}
var $n = (r) => r.join('/').replace(/\/\/+/g, '/'),
  _b = (r) => r.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Nb = (r) => (!r || r === '?' ? '' : r.startsWith('?') ? r : '?' + r),
  Tb = (r) => (!r || r === '#' ? '' : r.startsWith('#') ? r : '#' + r);
function Ob(r) {
  return (
    r != null &&
    typeof r.status == 'number' &&
    typeof r.statusText == 'string' &&
    typeof r.internal == 'boolean' &&
    'data' in r
  );
}
var Ny = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Ny);
var Mb = ['GET', ...Ny];
new Set(Mb);
var $a = le.createContext(null);
$a.displayName = 'DataRouter';
var ec = le.createContext(null);
ec.displayName = 'DataRouterState';
var Ty = le.createContext({ isTransitioning: !1 });
Ty.displayName = 'ViewTransition';
var Rb = le.createContext(new Map());
Rb.displayName = 'Fetchers';
var Bb = le.createContext(null);
Bb.displayName = 'Await';
var En = le.createContext(null);
En.displayName = 'Navigation';
var ru = le.createContext(null);
ru.displayName = 'Location';
var Zn = le.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Zn.displayName = 'Route';
var sd = le.createContext(null);
sd.displayName = 'RouteError';
function Cb(r, { relative: i } = {}) {
  qt(nu(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: a, navigator: u } = le.useContext(En),
    { hash: s, pathname: f, search: d } = iu(r, { relative: i }),
    h = f;
  return a !== '/' && (h = f === '/' ? a : $n([a, f])), u.createHref({ pathname: h, search: d, hash: s });
}
function nu() {
  return le.useContext(ru) != null;
}
function na() {
  return qt(nu(), 'useLocation() may be used only in the context of a <Router> component.'), le.useContext(ru).location;
}
var Oy = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function My(r) {
  le.useContext(En).static || le.useLayoutEffect(r);
}
function Db() {
  let { isDataRoute: r } = le.useContext(Zn);
  return r ? Yb() : Ub();
}
function Ub() {
  qt(nu(), 'useNavigate() may be used only in the context of a <Router> component.');
  let r = le.useContext($a),
    { basename: i, navigator: a } = le.useContext(En),
    { matches: u } = le.useContext(Zn),
    { pathname: s } = na(),
    f = JSON.stringify(Ay(u)),
    d = le.useRef(!1);
  return (
    My(() => {
      d.current = !0;
    }),
    le.useCallback(
      (p, y = {}) => {
        if ((wn(d.current, Oy), !d.current)) return;
        if (typeof p == 'number') {
          a.go(p);
          return;
        }
        let _ = _y(p, JSON.parse(f), s, y.relative === 'path');
        r == null && i !== '/' && (_.pathname = _.pathname === '/' ? i : $n([i, _.pathname])),
          (y.replace ? a.replace : a.push)(_, y.state, y);
      },
      [i, a, f, s, r]
    )
  );
}
le.createContext(null);
function iu(r, { relative: i } = {}) {
  let { matches: a } = le.useContext(Zn),
    { pathname: u } = na(),
    s = JSON.stringify(Ay(a));
  return le.useMemo(() => _y(r, JSON.parse(s), u, i === 'path'), [r, s, u, i]);
}
function jb(r, i) {
  return Ry(r, i);
}
function Ry(r, i, a, u) {
  var z;
  qt(nu(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: s, static: f } = le.useContext(En),
    { matches: d } = le.useContext(Zn),
    h = d[d.length - 1],
    p = h ? h.params : {},
    y = h ? h.pathname : '/',
    _ = h ? h.pathnameBase : '/',
    b = h && h.route;
  {
    let ve = (b && b.path) || '';
    By(
      y,
      !b || ve.endsWith('*') || ve.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${ve}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${ve}"> to <Route path="${ve === '/' ? '*' : `${ve}/*`}">.`
    );
  }
  let S = na(),
    E;
  if (i) {
    let ve = typeof i == 'string' ? Ga(i) : i;
    qt(
      _ === '/' || ((z = ve.pathname) == null ? void 0 : z.startsWith(_)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${ve.pathname}" was given in the \`location\` prop.`
    ),
      (E = ve);
  } else E = S;
  let I = E.pathname || '/',
    P = I;
  if (_ !== '/') {
    let ve = _.replace(/^\//, '').split('/');
    P = '/' + I.replace(/^\//, '').split('/').slice(ve.length).join('/');
  }
  let J = !f && a && a.matches && a.matches.length > 0 ? a.matches : xy(r, { pathname: P });
  wn(b || J != null, `No routes matched location "${E.pathname}${E.search}${E.hash}" `),
    wn(
      J == null ||
        J[J.length - 1].route.element !== void 0 ||
        J[J.length - 1].route.Component !== void 0 ||
        J[J.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let W = zb(
    J &&
      J.map((ve) =>
        Object.assign({}, ve, {
          params: Object.assign({}, p, ve.params),
          pathname: $n([_, s.encodeLocation ? s.encodeLocation(ve.pathname).pathname : ve.pathname]),
          pathnameBase:
            ve.pathnameBase === '/'
              ? _
              : $n([_, s.encodeLocation ? s.encodeLocation(ve.pathnameBase).pathname : ve.pathnameBase])
        })
      ),
    d,
    a,
    u
  );
  return i && W
    ? le.createElement(
        ru.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...E },
            navigationType: 'POP'
          }
        },
        W
      )
    : W;
}
function kb() {
  let r = $b(),
    i = Ob(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r),
    a = r instanceof Error ? r.stack : null,
    u = 'rgba(200,200,200, 0.5)',
    s = { padding: '0.5rem', backgroundColor: u },
    f = { padding: '2px 4px', backgroundColor: u },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', r),
    (d = le.createElement(
      le.Fragment,
      null,
      le.createElement('p', null, '💿 Hey developer 👋'),
      le.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        le.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        le.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    le.createElement(
      le.Fragment,
      null,
      le.createElement('h2', null, 'Unexpected Application Error!'),
      le.createElement('h3', { style: { fontStyle: 'italic' } }, i),
      a ? le.createElement('pre', { style: s }, a) : null,
      d
    )
  );
}
var Ib = le.createElement(kb, null),
  Lb = class extends le.Component {
    constructor(r) {
      super(r), (this.state = { location: r.location, revalidation: r.revalidation, error: r.error });
    }
    static getDerivedStateFromError(r) {
      return { error: r };
    }
    static getDerivedStateFromProps(r, i) {
      return i.location !== r.location || (i.revalidation !== 'idle' && r.revalidation === 'idle')
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : i.error,
            location: i.location,
            revalidation: r.revalidation || i.revalidation
          };
    }
    componentDidCatch(r, i) {
      console.error('React Router caught the following error during render', r, i);
    }
    render() {
      return this.state.error !== void 0
        ? le.createElement(
            Zn.Provider,
            { value: this.props.routeContext },
            le.createElement(sd.Provider, { value: this.state.error, children: this.props.component })
          )
        : this.props.children;
    }
  };
function qb({ routeContext: r, match: i, children: a }) {
  let u = le.useContext($a);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = i.route.id),
    le.createElement(Zn.Provider, { value: r }, a)
  );
}
function zb(r, i = [], a = null, u = null) {
  if (r == null) {
    if (!a) return null;
    if (a.errors) r = a.matches;
    else if (i.length === 0 && !a.initialized && a.matches.length > 0) r = a.matches;
    else return null;
  }
  let s = r,
    f = a == null ? void 0 : a.errors;
  if (f != null) {
    let p = s.findIndex((y) => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0);
    qt(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`),
      (s = s.slice(0, Math.min(s.length, p + 1)));
  }
  let d = !1,
    h = -1;
  if (a)
    for (let p = 0; p < s.length; p++) {
      let y = s[p];
      if (((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = p), y.route.id)) {
        let { loaderData: _, errors: b } = a,
          S = y.route.loader && !_.hasOwnProperty(y.route.id) && (!b || b[y.route.id] === void 0);
        if (y.route.lazy || S) {
          (d = !0), h >= 0 ? (s = s.slice(0, h + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((p, y, _) => {
    let b,
      S = !1,
      E = null,
      I = null;
    a &&
      ((b = f && y.route.id ? f[y.route.id] : void 0),
      (E = y.route.errorElement || Ib),
      d &&
        (h < 0 && _ === 0
          ? (By('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'),
            (S = !0),
            (I = null))
          : h === _ && ((S = !0), (I = y.route.hydrateFallbackElement || null))));
    let P = i.concat(s.slice(0, _ + 1)),
      J = () => {
        let W;
        return (
          b
            ? (W = E)
            : S
              ? (W = I)
              : y.route.Component
                ? (W = le.createElement(y.route.Component, null))
                : y.route.element
                  ? (W = y.route.element)
                  : (W = p),
          le.createElement(qb, {
            match: y,
            routeContext: { outlet: p, matches: P, isDataRoute: a != null },
            children: W
          })
        );
      };
    return a && (y.route.ErrorBoundary || y.route.errorElement || _ === 0)
      ? le.createElement(Lb, {
          location: a.location,
          revalidation: a.revalidation,
          component: E,
          error: b,
          children: J(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 }
        })
      : J();
  }, null);
}
function cd(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Hb(r) {
  let i = le.useContext($a);
  return qt(i, cd(r)), i;
}
function Fb(r) {
  let i = le.useContext(ec);
  return qt(i, cd(r)), i;
}
function Vb(r) {
  let i = le.useContext(Zn);
  return qt(i, cd(r)), i;
}
function od(r) {
  let i = Vb(r),
    a = i.matches[i.matches.length - 1];
  return qt(a.route.id, `${r} can only be used on routes that contain a unique "id"`), a.route.id;
}
function Gb() {
  return od('useRouteId');
}
function $b() {
  var u;
  let r = le.useContext(sd),
    i = Fb('useRouteError'),
    a = od('useRouteError');
  return r !== void 0 ? r : (u = i.errors) == null ? void 0 : u[a];
}
function Yb() {
  let { router: r } = Hb('useNavigate'),
    i = od('useNavigate'),
    a = le.useRef(!1);
  return (
    My(() => {
      a.current = !0;
    }),
    le.useCallback(
      async (s, f = {}) => {
        wn(a.current, Oy),
          a.current && (typeof s == 'number' ? r.navigate(s) : await r.navigate(s, { fromRouteId: i, ...f }));
      },
      [r, i]
    )
  );
}
var dp = {};
function By(r, i, a) {
  !i && !dp[r] && ((dp[r] = !0), wn(!1, a));
}
le.memo(Xb);
function Xb({ routes: r, future: i, state: a }) {
  return Ry(r, void 0, a, i);
}
function Jf(r) {
  qt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Kb({
  basename: r = '/',
  children: i = null,
  location: a,
  navigationType: u = 'POP',
  navigator: s,
  static: f = !1
}) {
  qt(!nu(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.');
  let d = r.replace(/^\/*/, '/'),
    h = le.useMemo(() => ({ basename: d, navigator: s, static: f, future: {} }), [d, s, f]);
  typeof a == 'string' && (a = Ga(a));
  let { pathname: p = '/', search: y = '', hash: _ = '', state: b = null, key: S = 'default' } = a,
    E = le.useMemo(() => {
      let I = Xn(p, d);
      return I == null ? null : { location: { pathname: I, search: y, hash: _, state: b, key: S }, navigationType: u };
    }, [d, p, y, _, b, S, u]);
  return (
    wn(
      E != null,
      `<Router basename="${d}"> is not able to match the URL "${p}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    E == null
      ? null
      : le.createElement(En.Provider, { value: h }, le.createElement(ru.Provider, { children: i, value: E }))
  );
}
function Zb({ children: r, location: i }) {
  return jb(Wf(r), i);
}
function Wf(r, i = []) {
  let a = [];
  return (
    le.Children.forEach(r, (u, s) => {
      if (!le.isValidElement(u)) return;
      let f = [...i, s];
      if (u.type === le.Fragment) {
        a.push.apply(a, Wf(u.props.children, f));
        return;
      }
      qt(
        u.type === Jf,
        `[${typeof u.type == 'string' ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        qt(!u.props.index || !u.props.children, 'An index route cannot have child routes.');
      let d = {
        id: u.props.id || f.join('-'),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        loader: u.props.loader,
        action: u.props.action,
        hydrateFallbackElement: u.props.hydrateFallbackElement,
        HydrateFallback: u.props.HydrateFallback,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy
      };
      u.props.children && (d.children = Wf(u.props.children, f)), a.push(d);
    }),
    a
  );
}
var Cs = 'get',
  Ds = 'application/x-www-form-urlencoded';
function tc(r) {
  return r != null && typeof r.tagName == 'string';
}
function Qb(r) {
  return tc(r) && r.tagName.toLowerCase() === 'button';
}
function Pb(r) {
  return tc(r) && r.tagName.toLowerCase() === 'form';
}
function Jb(r) {
  return tc(r) && r.tagName.toLowerCase() === 'input';
}
function Wb(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function eS(r, i) {
  return r.button === 0 && (!i || i === '_self') && !Wb(r);
}
var _s = null;
function tS() {
  if (_s === null)
    try {
      new FormData(document.createElement('form'), 0), (_s = !1);
    } catch {
      _s = !0;
    }
  return _s;
}
var rS = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Nf(r) {
  return r != null && !rS.has(r)
    ? (wn(!1, `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ds}"`), null)
    : r;
}
function nS(r, i) {
  let a, u, s, f, d;
  if (Pb(r)) {
    let h = r.getAttribute('action');
    (u = h ? Xn(h, i) : null),
      (a = r.getAttribute('method') || Cs),
      (s = Nf(r.getAttribute('enctype')) || Ds),
      (f = new FormData(r));
  } else if (Qb(r) || (Jb(r) && (r.type === 'submit' || r.type === 'image'))) {
    let h = r.form;
    if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let p = r.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((u = p ? Xn(p, i) : null),
      (a = r.getAttribute('formmethod') || h.getAttribute('method') || Cs),
      (s = Nf(r.getAttribute('formenctype')) || Nf(h.getAttribute('enctype')) || Ds),
      (f = new FormData(h, r)),
      !tS())
    ) {
      let { name: y, type: _, value: b } = r;
      if (_ === 'image') {
        let S = y ? `${y}.` : '';
        f.append(`${S}x`, '0'), f.append(`${S}y`, '0');
      } else y && f.append(y, b);
    }
  } else {
    if (tc(r)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    (a = Cs), (u = null), (s = Ds), (d = r);
  }
  return (
    f && s === 'text/plain' && ((d = f), (f = void 0)),
    { action: u, method: a.toLowerCase(), encType: s, formData: f, body: d }
  );
}
function fd(r, i) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(i);
}
async function iS(r, i) {
  if (r.id in i) return i[r.id];
  try {
    let a = await import(r.module);
    return (i[r.id] = a), a;
  } catch (a) {
    return (
      console.error(`Error loading route module \`${r.module}\`, reloading page...`),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function aS(r) {
  return r == null
    ? !1
    : r.href == null
      ? r.rel === 'preload' && typeof r.imageSrcSet == 'string' && typeof r.imageSizes == 'string'
      : typeof r.rel == 'string' && typeof r.href == 'string';
}
async function lS(r, i, a) {
  let u = await Promise.all(
    r.map(async (s) => {
      let f = i.routes[s.route.id];
      if (f) {
        let d = await iS(f, a);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return oS(
    u
      .flat(1)
      .filter(aS)
      .filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
      .map((s) => (s.rel === 'stylesheet' ? { ...s, rel: 'prefetch', as: 'style' } : { ...s, rel: 'prefetch' }))
  );
}
function hp(r, i, a, u, s, f) {
  let d = (p, y) => (a[y] ? p.route.id !== a[y].route.id : !0),
    h = (p, y) => {
      var _;
      return (
        a[y].pathname !== p.pathname ||
        (((_ = a[y].route.path) == null ? void 0 : _.endsWith('*')) && a[y].params['*'] !== p.params['*'])
      );
    };
  return f === 'assets'
    ? i.filter((p, y) => d(p, y) || h(p, y))
    : f === 'data'
      ? i.filter((p, y) => {
          var b;
          let _ = u.routes[p.route.id];
          if (!_ || !_.hasLoader) return !1;
          if (d(p, y) || h(p, y)) return !0;
          if (p.route.shouldRevalidate) {
            let S = p.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: ((b = a[0]) == null ? void 0 : b.params) || {},
              nextUrl: new URL(r, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0
            });
            if (typeof S == 'boolean') return S;
          }
          return !0;
        })
      : [];
}
function uS(r, i, { includeHydrateFallback: a } = {}) {
  return sS(
    r
      .map((u) => {
        let s = i.routes[u.route.id];
        if (!s) return [];
        let f = [s.module];
        return (
          s.clientActionModule && (f = f.concat(s.clientActionModule)),
          s.clientLoaderModule && (f = f.concat(s.clientLoaderModule)),
          a && s.hydrateFallbackModule && (f = f.concat(s.hydrateFallbackModule)),
          s.imports && (f = f.concat(s.imports)),
          f
        );
      })
      .flat(1)
  );
}
function sS(r) {
  return [...new Set(r)];
}
function cS(r) {
  let i = {},
    a = Object.keys(r).sort();
  for (let u of a) i[u] = r[u];
  return i;
}
function oS(r, i) {
  let a = new Set();
  return (
    new Set(i),
    r.reduce((u, s) => {
      let f = JSON.stringify(cS(s));
      return a.has(f) || (a.add(f), u.push({ key: f, link: s })), u;
    }, [])
  );
}
var fS = new Set([100, 101, 204, 205]);
function dS(r, i) {
  let a = typeof r == 'string' ? new URL(r, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin) : r;
  return (
    a.pathname === '/'
      ? (a.pathname = '_root.data')
      : i && Xn(a.pathname, i) === '/'
        ? (a.pathname = `${i.replace(/\/$/, '')}/_root.data`)
        : (a.pathname = `${a.pathname.replace(/\/$/, '')}.data`),
    a
  );
}
function Cy() {
  let r = le.useContext($a);
  return fd(r, 'You must render this element inside a <DataRouterContext.Provider> element'), r;
}
function hS() {
  let r = le.useContext(ec);
  return fd(r, 'You must render this element inside a <DataRouterStateContext.Provider> element'), r;
}
var dd = le.createContext(void 0);
dd.displayName = 'FrameworkContext';
function Dy() {
  let r = le.useContext(dd);
  return fd(r, 'You must render this element inside a <HydratedRouter> element'), r;
}
function mS(r, i) {
  let a = le.useContext(dd),
    [u, s] = le.useState(!1),
    [f, d] = le.useState(!1),
    { onFocus: h, onBlur: p, onMouseEnter: y, onMouseLeave: _, onTouchStart: b } = i,
    S = le.useRef(null);
  le.useEffect(() => {
    if ((r === 'render' && d(!0), r === 'viewport')) {
      let P = (W) => {
          W.forEach((z) => {
            d(z.isIntersecting);
          });
        },
        J = new IntersectionObserver(P, { threshold: 0.5 });
      return (
        S.current && J.observe(S.current),
        () => {
          J.disconnect();
        }
      );
    }
  }, [r]),
    le.useEffect(() => {
      if (u) {
        let P = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(P);
        };
      }
    }, [u]);
  let E = () => {
      s(!0);
    },
    I = () => {
      s(!1), d(!1);
    };
  return a
    ? r !== 'intent'
      ? [f, S, {}]
      : [
          f,
          S,
          {
            onFocus: Fl(h, E),
            onBlur: Fl(p, I),
            onMouseEnter: Fl(y, E),
            onMouseLeave: Fl(_, I),
            onTouchStart: Fl(b, E)
          }
        ]
    : [!1, S, {}];
}
function Fl(r, i) {
  return (a) => {
    r && r(a), a.defaultPrevented || i(a);
  };
}
function pS({ page: r, ...i }) {
  let { router: a } = Cy(),
    u = le.useMemo(() => xy(a.routes, r, a.basename), [a.routes, r, a.basename]);
  return u ? le.createElement(gS, { page: r, matches: u, ...i }) : null;
}
function yS(r) {
  let { manifest: i, routeModules: a } = Dy(),
    [u, s] = le.useState([]);
  return (
    le.useEffect(() => {
      let f = !1;
      return (
        lS(r, i, a).then((d) => {
          f || s(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [r, i, a]),
    u
  );
}
function gS({ page: r, matches: i, ...a }) {
  let u = na(),
    { manifest: s, routeModules: f } = Dy(),
    { basename: d } = Cy(),
    { loaderData: h, matches: p } = hS(),
    y = le.useMemo(() => hp(r, i, p, s, u, 'data'), [r, i, p, s, u]),
    _ = le.useMemo(() => hp(r, i, p, s, u, 'assets'), [r, i, p, s, u]),
    b = le.useMemo(() => {
      if (r === u.pathname + u.search + u.hash) return [];
      let I = new Set(),
        P = !1;
      if (
        (i.forEach((W) => {
          var ve;
          let z = s.routes[W.route.id];
          !z ||
            !z.hasLoader ||
            ((!y.some((qe) => qe.route.id === W.route.id) &&
              W.route.id in h &&
              (ve = f[W.route.id]) != null &&
              ve.shouldRevalidate) ||
            z.hasClientLoader
              ? (P = !0)
              : I.add(W.route.id));
        }),
        I.size === 0)
      )
        return [];
      let J = dS(r, d);
      return (
        P &&
          I.size > 0 &&
          J.searchParams.set(
            '_routes',
            i
              .filter((W) => I.has(W.route.id))
              .map((W) => W.route.id)
              .join(',')
          ),
        [J.pathname + J.search]
      );
    }, [d, h, u, s, y, i, r, f]),
    S = le.useMemo(() => uS(_, s), [_, s]),
    E = yS(_);
  return le.createElement(
    le.Fragment,
    null,
    b.map((I) => le.createElement('link', { key: I, rel: 'prefetch', as: 'fetch', href: I, ...a })),
    S.map((I) => le.createElement('link', { key: I, rel: 'modulepreload', href: I, ...a })),
    E.map(({ key: I, link: P }) => le.createElement('link', { key: I, ...P }))
  );
}
function vS(...r) {
  return (i) => {
    r.forEach((a) => {
      typeof a == 'function' ? a(i) : a != null && (a.current = i);
    });
  };
}
var Uy = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Uy && (window.__reactRouterVersion = '7.5.1');
} catch {}
function bS({ basename: r, children: i, window: a }) {
  let u = le.useRef();
  u.current == null && (u.current = lb({ window: a, v5Compat: !0 }));
  let s = u.current,
    [f, d] = le.useState({ action: s.action, location: s.location }),
    h = le.useCallback(
      (p) => {
        le.startTransition(() => d(p));
      },
      [d]
    );
  return (
    le.useLayoutEffect(() => s.listen(h), [s, h]),
    le.createElement(Kb, { basename: r, children: i, location: f.location, navigationType: f.action, navigator: s })
  );
}
var jy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ky = le.forwardRef(function (
    {
      onClick: i,
      discover: a = 'render',
      prefetch: u = 'none',
      relative: s,
      reloadDocument: f,
      replace: d,
      state: h,
      target: p,
      to: y,
      preventScrollReset: _,
      viewTransition: b,
      ...S
    },
    E
  ) {
    let { basename: I } = le.useContext(En),
      P = typeof y == 'string' && jy.test(y),
      J,
      W = !1;
    if (typeof y == 'string' && P && ((J = y), Uy))
      try {
        let w = new URL(window.location.href),
          N = y.startsWith('//') ? new URL(w.protocol + y) : new URL(y),
          G = Xn(N.pathname, I);
        N.origin === w.origin && G != null ? (y = G + N.search + N.hash) : (W = !0);
      } catch {
        wn(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let z = Cb(y, { relative: s }),
      [ve, qe, xe] = mS(u, S),
      Ee = wS(y, { replace: d, state: h, target: p, preventScrollReset: _, relative: s, viewTransition: b });
    function De(w) {
      i && i(w), w.defaultPrevented || Ee(w);
    }
    let v = le.createElement('a', {
      ...S,
      ...xe,
      href: J || z,
      onClick: W || f ? i : De,
      ref: vS(E, qe),
      target: p,
      'data-discover': !P && a === 'render' ? 'true' : void 0
    });
    return ve && !P ? le.createElement(le.Fragment, null, v, le.createElement(pS, { page: z })) : v;
  });
ky.displayName = 'Link';
var ed = le.forwardRef(function (
  {
    'aria-current': i = 'page',
    caseSensitive: a = !1,
    className: u = '',
    end: s = !1,
    style: f,
    to: d,
    viewTransition: h,
    children: p,
    ...y
  },
  _
) {
  let b = iu(d, { relative: y.relative }),
    S = na(),
    E = le.useContext(ec),
    { navigator: I, basename: P } = le.useContext(En),
    J = E != null && TS(b) && h === !0,
    W = I.encodeLocation ? I.encodeLocation(b).pathname : b.pathname,
    z = S.pathname,
    ve = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
  a || ((z = z.toLowerCase()), (ve = ve ? ve.toLowerCase() : null), (W = W.toLowerCase())),
    ve && P && (ve = Xn(ve, P) || ve);
  const qe = W !== '/' && W.endsWith('/') ? W.length - 1 : W.length;
  let xe = z === W || (!s && z.startsWith(W) && z.charAt(qe) === '/'),
    Ee = ve != null && (ve === W || (!s && ve.startsWith(W) && ve.charAt(W.length) === '/')),
    De = { isActive: xe, isPending: Ee, isTransitioning: J },
    v = xe ? i : void 0,
    w;
  typeof u == 'function'
    ? (w = u(De))
    : (w = [u, xe ? 'active' : null, Ee ? 'pending' : null, J ? 'transitioning' : null].filter(Boolean).join(' '));
  let N = typeof f == 'function' ? f(De) : f;
  return le.createElement(
    ky,
    { ...y, 'aria-current': v, className: w, ref: _, style: N, to: d, viewTransition: h },
    typeof p == 'function' ? p(De) : p
  );
});
ed.displayName = 'NavLink';
var SS = le.forwardRef(
  (
    {
      discover: r = 'render',
      fetcherKey: i,
      navigate: a,
      reloadDocument: u,
      replace: s,
      state: f,
      method: d = Cs,
      action: h,
      onSubmit: p,
      relative: y,
      preventScrollReset: _,
      viewTransition: b,
      ...S
    },
    E
  ) => {
    let I = _S(),
      P = NS(h, { relative: y }),
      J = d.toLowerCase() === 'get' ? 'get' : 'post',
      W = typeof h == 'string' && jy.test(h),
      z = (ve) => {
        if ((p && p(ve), ve.defaultPrevented)) return;
        ve.preventDefault();
        let qe = ve.nativeEvent.submitter,
          xe = (qe == null ? void 0 : qe.getAttribute('formmethod')) || d;
        I(qe || ve.currentTarget, {
          fetcherKey: i,
          method: xe,
          navigate: a,
          replace: s,
          state: f,
          relative: y,
          preventScrollReset: _,
          viewTransition: b
        });
      };
    return le.createElement('form', {
      ref: E,
      method: J,
      action: P,
      onSubmit: u ? p : z,
      ...S,
      'data-discover': !W && r === 'render' ? 'true' : void 0
    });
  }
);
SS.displayName = 'Form';
function xS(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Iy(r) {
  let i = le.useContext($a);
  return qt(i, xS(r)), i;
}
function wS(r, { target: i, replace: a, state: u, preventScrollReset: s, relative: f, viewTransition: d } = {}) {
  let h = Db(),
    p = na(),
    y = iu(r, { relative: f });
  return le.useCallback(
    (_) => {
      if (eS(_, i)) {
        _.preventDefault();
        let b = a !== void 0 ? a : Wl(p) === Wl(y);
        h(r, { replace: b, state: u, preventScrollReset: s, relative: f, viewTransition: d });
      }
    },
    [p, h, y, a, u, i, r, s, f, d]
  );
}
var ES = 0,
  AS = () => `__${String(++ES)}__`;
function _S() {
  let { router: r } = Iy('useSubmit'),
    { basename: i } = le.useContext(En),
    a = Gb();
  return le.useCallback(
    async (u, s = {}) => {
      let { action: f, method: d, encType: h, formData: p, body: y } = nS(u, i);
      if (s.navigate === !1) {
        let _ = s.fetcherKey || AS();
        await r.fetch(_, a, s.action || f, {
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: y,
          formMethod: s.method || d,
          formEncType: s.encType || h,
          flushSync: s.flushSync
        });
      } else
        await r.navigate(s.action || f, {
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: y,
          formMethod: s.method || d,
          formEncType: s.encType || h,
          replace: s.replace,
          state: s.state,
          fromRouteId: a,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [r, i, a]
  );
}
function NS(r, { relative: i } = {}) {
  let { basename: a } = le.useContext(En),
    u = le.useContext(Zn);
  qt(u, 'useFormAction must be used inside a RouteContext');
  let [s] = u.matches.slice(-1),
    f = { ...iu(r || '.', { relative: i }) },
    d = na();
  if (r == null) {
    f.search = d.search;
    let h = new URLSearchParams(f.search),
      p = h.getAll('index');
    if (p.some((_) => _ === '')) {
      h.delete('index'), p.filter((b) => b).forEach((b) => h.append('index', b));
      let _ = h.toString();
      f.search = _ ? `?${_}` : '';
    }
  }
  return (
    (!r || r === '.') && s.route.index && (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    a !== '/' && (f.pathname = f.pathname === '/' ? a : $n([a, f.pathname])),
    Wl(f)
  );
}
function TS(r, i = {}) {
  let a = le.useContext(Ty);
  qt(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = Iy('useViewTransitionState'),
    s = iu(r, { relative: i.relative });
  if (!a.isTransitioning) return !1;
  let f = Xn(a.currentLocation.pathname, u) || a.currentLocation.pathname,
    d = Xn(a.nextLocation.pathname, u) || a.nextLocation.pathname;
  return zs(s.pathname, d) != null || zs(s.pathname, f) != null;
}
new TextEncoder();
[...fS];
var OS = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Tf = Math.ceil,
  Pr = Math.floor,
  wr = '[BigNumber Error] ',
  mp = wr + 'Number primitive has more than 15 significant digits: ',
  ln = 1e14,
  at = 14,
  pp = 9007199254740991,
  Of = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  bi = 1e7,
  Cr = 1e9;
function Ly(r) {
  var i,
    a,
    u,
    s = (z.prototype = { constructor: z, toString: null, valueOf: null }),
    f = new z(1),
    d = 20,
    h = 4,
    p = -7,
    y = 21,
    _ = -1e7,
    b = 1e7,
    S = !1,
    E = 1,
    I = 0,
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
    J = '0123456789abcdefghijklmnopqrstuvwxyz',
    W = !0;
  function z(v, w) {
    var N,
      G,
      Y,
      X,
      Z,
      k,
      R,
      $,
      H = this;
    if (!(H instanceof z)) return new z(v, w);
    if (w == null) {
      if (v && v._isBigNumber === !0) {
        (H.s = v.s),
          !v.c || v.e > b ? (H.c = H.e = null) : v.e < _ ? (H.c = [(H.e = 0)]) : ((H.e = v.e), (H.c = v.c.slice()));
        return;
      }
      if ((k = typeof v == 'number') && v * 0 == 0) {
        if (((H.s = 1 / v < 0 ? ((v = -v), -1) : 1), v === ~~v)) {
          for (X = 0, Z = v; Z >= 10; Z /= 10, X++);
          X > b ? (H.c = H.e = null) : ((H.e = X), (H.c = [v]));
          return;
        }
        $ = String(v);
      } else {
        if (!OS.test(($ = String(v)))) return u(H, $, k);
        H.s = $.charCodeAt(0) == 45 ? (($ = $.slice(1)), -1) : 1;
      }
      (X = $.indexOf('.')) > -1 && ($ = $.replace('.', '')),
        (Z = $.search(/e/i)) > 0
          ? (X < 0 && (X = Z), (X += +$.slice(Z + 1)), ($ = $.substring(0, Z)))
          : X < 0 && (X = $.length);
    } else {
      if ((Lt(w, 2, J.length, 'Base'), w == 10 && W)) return (H = new z(v)), Ee(H, d + H.e + 1, h);
      if ((($ = String(v)), (k = typeof v == 'number'))) {
        if (v * 0 != 0) return u(H, $, k, w);
        if (((H.s = 1 / v < 0 ? (($ = $.slice(1)), -1) : 1), z.DEBUG && $.replace(/^0\.0*|\./, '').length > 15))
          throw Error(mp + v);
      } else H.s = $.charCodeAt(0) === 45 ? (($ = $.slice(1)), -1) : 1;
      for (N = J.slice(0, w), X = Z = 0, R = $.length; Z < R; Z++)
        if (N.indexOf((G = $.charAt(Z))) < 0) {
          if (G == '.') {
            if (Z > X) {
              X = R;
              continue;
            }
          } else if (
            !Y &&
            (($ == $.toUpperCase() && ($ = $.toLowerCase())) || ($ == $.toLowerCase() && ($ = $.toUpperCase())))
          ) {
            (Y = !0), (Z = -1), (X = 0);
            continue;
          }
          return u(H, String(v), k, w);
        }
      (k = !1), ($ = a($, w, 10, H.s)), (X = $.indexOf('.')) > -1 ? ($ = $.replace('.', '')) : (X = $.length);
    }
    for (Z = 0; $.charCodeAt(Z) === 48; Z++);
    for (R = $.length; $.charCodeAt(--R) === 48; );
    if (($ = $.slice(Z, ++R))) {
      if (((R -= Z), k && z.DEBUG && R > 15 && (v > pp || v !== Pr(v)))) throw Error(mp + H.s * v);
      if ((X = X - Z - 1) > b) H.c = H.e = null;
      else if (X < _) H.c = [(H.e = 0)];
      else {
        if (((H.e = X), (H.c = []), (Z = (X + 1) % at), X < 0 && (Z += at), Z < R)) {
          for (Z && H.c.push(+$.slice(0, Z)), R -= at; Z < R; ) H.c.push(+$.slice(Z, (Z += at)));
          Z = at - ($ = $.slice(Z)).length;
        } else Z -= R;
        for (; Z--; $ += '0');
        H.c.push(+$);
      }
    } else H.c = [(H.e = 0)];
  }
  (z.clone = Ly),
    (z.ROUND_UP = 0),
    (z.ROUND_DOWN = 1),
    (z.ROUND_CEIL = 2),
    (z.ROUND_FLOOR = 3),
    (z.ROUND_HALF_UP = 4),
    (z.ROUND_HALF_DOWN = 5),
    (z.ROUND_HALF_EVEN = 6),
    (z.ROUND_HALF_CEIL = 7),
    (z.ROUND_HALF_FLOOR = 8),
    (z.EUCLID = 9),
    (z.config = z.set =
      function (v) {
        var w, N;
        if (v != null)
          if (typeof v == 'object') {
            if (
              (v.hasOwnProperty((w = 'DECIMAL_PLACES')) && ((N = v[w]), Lt(N, 0, Cr, w), (d = N)),
              v.hasOwnProperty((w = 'ROUNDING_MODE')) && ((N = v[w]), Lt(N, 0, 8, w), (h = N)),
              v.hasOwnProperty((w = 'EXPONENTIAL_AT')) &&
                ((N = v[w]),
                N && N.pop
                  ? (Lt(N[0], -1e9, 0, w), Lt(N[1], 0, Cr, w), (p = N[0]), (y = N[1]))
                  : (Lt(N, -1e9, Cr, w), (p = -(y = N < 0 ? -N : N)))),
              v.hasOwnProperty((w = 'RANGE')))
            )
              if (((N = v[w]), N && N.pop)) Lt(N[0], -1e9, -1, w), Lt(N[1], 1, Cr, w), (_ = N[0]), (b = N[1]);
              else if ((Lt(N, -1e9, Cr, w), N)) _ = -(b = N < 0 ? -N : N);
              else throw Error(wr + w + ' cannot be zero: ' + N);
            if (v.hasOwnProperty((w = 'CRYPTO')))
              if (((N = v[w]), N === !!N))
                if (N)
                  if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) S = N;
                  else throw ((S = !N), Error(wr + 'crypto unavailable'));
                else S = N;
              else throw Error(wr + w + ' not true or false: ' + N);
            if (
              (v.hasOwnProperty((w = 'MODULO_MODE')) && ((N = v[w]), Lt(N, 0, 9, w), (E = N)),
              v.hasOwnProperty((w = 'POW_PRECISION')) && ((N = v[w]), Lt(N, 0, Cr, w), (I = N)),
              v.hasOwnProperty((w = 'FORMAT')))
            )
              if (((N = v[w]), typeof N == 'object')) P = N;
              else throw Error(wr + w + ' not an object: ' + N);
            if (v.hasOwnProperty((w = 'ALPHABET')))
              if (((N = v[w]), typeof N == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(N)))
                (W = N.slice(0, 10) == '0123456789'), (J = N);
              else throw Error(wr + w + ' invalid: ' + N);
          } else throw Error(wr + 'Object expected: ' + v);
        return {
          DECIMAL_PLACES: d,
          ROUNDING_MODE: h,
          EXPONENTIAL_AT: [p, y],
          RANGE: [_, b],
          CRYPTO: S,
          MODULO_MODE: E,
          POW_PRECISION: I,
          FORMAT: P,
          ALPHABET: J
        };
      }),
    (z.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== !0) return !1;
      if (!z.DEBUG) return !0;
      var w,
        N,
        G = v.c,
        Y = v.e,
        X = v.s;
      e: if ({}.toString.call(G) == '[object Array]') {
        if ((X === 1 || X === -1) && Y >= -1e9 && Y <= Cr && Y === Pr(Y)) {
          if (G[0] === 0) {
            if (Y === 0 && G.length === 1) return !0;
            break e;
          }
          if (((w = (Y + 1) % at), w < 1 && (w += at), String(G[0]).length == w)) {
            for (w = 0; w < G.length; w++) if (((N = G[w]), N < 0 || N >= ln || N !== Pr(N))) break e;
            if (N !== 0) return !0;
          }
        }
      } else if (G === null && Y === null && (X === null || X === 1 || X === -1)) return !0;
      throw Error(wr + 'Invalid BigNumber: ' + v);
    }),
    (z.maximum = z.max =
      function () {
        return qe(arguments, -1);
      }),
    (z.minimum = z.min =
      function () {
        return qe(arguments, 1);
      }),
    (z.random = (function () {
      var v = 9007199254740992,
        w =
          (Math.random() * v) & 2097151
            ? function () {
                return Pr(Math.random() * v);
              }
            : function () {
                return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
              };
      return function (N) {
        var G,
          Y,
          X,
          Z,
          k,
          R = 0,
          $ = [],
          H = new z(f);
        if ((N == null ? (N = d) : Lt(N, 0, Cr), (Z = Tf(N / at)), S))
          if (crypto.getRandomValues) {
            for (G = crypto.getRandomValues(new Uint32Array((Z *= 2))); R < Z; )
              (k = G[R] * 131072 + (G[R + 1] >>> 11)),
                k >= 9e15
                  ? ((Y = crypto.getRandomValues(new Uint32Array(2))), (G[R] = Y[0]), (G[R + 1] = Y[1]))
                  : ($.push(k % 1e14), (R += 2));
            R = Z / 2;
          } else if (crypto.randomBytes) {
            for (G = crypto.randomBytes((Z *= 7)); R < Z; )
              (k =
                (G[R] & 31) * 281474976710656 +
                G[R + 1] * 1099511627776 +
                G[R + 2] * 4294967296 +
                G[R + 3] * 16777216 +
                (G[R + 4] << 16) +
                (G[R + 5] << 8) +
                G[R + 6]),
                k >= 9e15 ? crypto.randomBytes(7).copy(G, R) : ($.push(k % 1e14), (R += 7));
            R = Z / 7;
          } else throw ((S = !1), Error(wr + 'crypto unavailable'));
        if (!S) for (; R < Z; ) (k = w()), k < 9e15 && ($[R++] = k % 1e14);
        for (Z = $[--R], N %= at, Z && N && ((k = Of[at - N]), ($[R] = Pr(Z / k) * k)); $[R] === 0; $.pop(), R--);
        if (R < 0) $ = [(X = 0)];
        else {
          for (X = -1; $[0] === 0; $.splice(0, 1), X -= at);
          for (R = 1, k = $[0]; k >= 10; k /= 10, R++);
          R < at && (X -= at - R);
        }
        return (H.e = X), (H.c = $), H;
      };
    })()),
    (z.sum = function () {
      for (var v = 1, w = arguments, N = new z(w[0]); v < w.length; ) N = N.plus(w[v++]);
      return N;
    }),
    (a = (function () {
      var v = '0123456789';
      function w(N, G, Y, X) {
        for (var Z, k = [0], R, $ = 0, H = N.length; $ < H; ) {
          for (R = k.length; R--; k[R] *= G);
          for (k[0] += X.indexOf(N.charAt($++)), Z = 0; Z < k.length; Z++)
            k[Z] > Y - 1 && (k[Z + 1] == null && (k[Z + 1] = 0), (k[Z + 1] += (k[Z] / Y) | 0), (k[Z] %= Y));
        }
        return k.reverse();
      }
      return function (N, G, Y, X, Z) {
        var k,
          R,
          $,
          H,
          oe,
          U,
          ne,
          we,
          ye = N.indexOf('.'),
          O = d,
          je = h;
        for (
          ye >= 0 &&
            ((H = I),
            (I = 0),
            (N = N.replace('.', '')),
            (we = new z(G)),
            (U = we.pow(N.length - ye)),
            (I = H),
            (we.c = w(zn(Qr(U.c), U.e, '0'), 10, Y, v)),
            (we.e = we.c.length)),
            ne = w(N, G, Y, Z ? ((k = J), v) : ((k = v), J)),
            $ = H = ne.length;
          ne[--H] == 0;
          ne.pop()
        );
        if (!ne[0]) return k.charAt(0);
        if (
          (ye < 0
            ? --$
            : ((U.c = ne), (U.e = $), (U.s = X), (U = i(U, we, O, je, Y)), (ne = U.c), (oe = U.r), ($ = U.e)),
          (R = $ + O + 1),
          (ye = ne[R]),
          (H = Y / 2),
          (oe = oe || R < 0 || ne[R + 1] != null),
          (oe =
            je < 4
              ? (ye != null || oe) && (je == 0 || je == (U.s < 0 ? 3 : 2))
              : ye > H || (ye == H && (je == 4 || oe || (je == 6 && ne[R - 1] & 1) || je == (U.s < 0 ? 8 : 7)))),
          R < 1 || !ne[0])
        )
          N = oe ? zn(k.charAt(1), -O, k.charAt(0)) : k.charAt(0);
        else {
          if (((ne.length = R), oe)) for (--Y; ++ne[--R] > Y; ) (ne[R] = 0), R || (++$, (ne = [1].concat(ne)));
          for (H = ne.length; !ne[--H]; );
          for (ye = 0, N = ''; ye <= H; N += k.charAt(ne[ye++]));
          N = zn(N, $, k.charAt(0));
        }
        return N;
      };
    })()),
    (i = (function () {
      function v(G, Y, X) {
        var Z,
          k,
          R,
          $,
          H = 0,
          oe = G.length,
          U = Y % bi,
          ne = (Y / bi) | 0;
        for (G = G.slice(); oe--; )
          (R = G[oe] % bi),
            ($ = (G[oe] / bi) | 0),
            (Z = ne * R + $ * U),
            (k = U * R + (Z % bi) * bi + H),
            (H = ((k / X) | 0) + ((Z / bi) | 0) + ne * $),
            (G[oe] = k % X);
        return H && (G = [H].concat(G)), G;
      }
      function w(G, Y, X, Z) {
        var k, R;
        if (X != Z) R = X > Z ? 1 : -1;
        else
          for (k = R = 0; k < X; k++)
            if (G[k] != Y[k]) {
              R = G[k] > Y[k] ? 1 : -1;
              break;
            }
        return R;
      }
      function N(G, Y, X, Z) {
        for (var k = 0; X--; ) (G[X] -= k), (k = G[X] < Y[X] ? 1 : 0), (G[X] = k * Z + G[X] - Y[X]);
        for (; !G[0] && G.length > 1; G.splice(0, 1));
      }
      return function (G, Y, X, Z, k) {
        var R,
          $,
          H,
          oe,
          U,
          ne,
          we,
          ye,
          O,
          je,
          Oe,
          Pe,
          Me,
          ke,
          B,
          D,
          Q,
          se = G.s == Y.s ? 1 : -1,
          re = G.c,
          ue = Y.c;
        if (!re || !re[0] || !ue || !ue[0])
          return new z(
            !G.s || !Y.s || (re ? ue && re[0] == ue[0] : !ue) ? NaN : (re && re[0] == 0) || !ue ? se * 0 : se / 0
          );
        for (
          ye = new z(se),
            O = ye.c = [],
            $ = G.e - Y.e,
            se = X + $ + 1,
            k || ((k = ln), ($ = Jr(G.e / at) - Jr(Y.e / at)), (se = (se / at) | 0)),
            H = 0;
          ue[H] == (re[H] || 0);
          H++
        );
        if ((ue[H] > (re[H] || 0) && $--, se < 0)) O.push(1), (oe = !0);
        else {
          for (
            ke = re.length,
              D = ue.length,
              H = 0,
              se += 2,
              U = Pr(k / (ue[0] + 1)),
              U > 1 && ((ue = v(ue, U, k)), (re = v(re, U, k)), (D = ue.length), (ke = re.length)),
              Me = D,
              je = re.slice(0, D),
              Oe = je.length;
            Oe < D;
            je[Oe++] = 0
          );
          (Q = ue.slice()), (Q = [0].concat(Q)), (B = ue[0]), ue[1] >= k / 2 && B++;
          do {
            if (((U = 0), (R = w(ue, je, D, Oe)), R < 0)) {
              if (((Pe = je[0]), D != Oe && (Pe = Pe * k + (je[1] || 0)), (U = Pr(Pe / B)), U > 1))
                for (U >= k && (U = k - 1), ne = v(ue, U, k), we = ne.length, Oe = je.length; w(ne, je, we, Oe) == 1; )
                  U--, N(ne, D < we ? Q : ue, we, k), (we = ne.length), (R = 1);
              else U == 0 && (R = U = 1), (ne = ue.slice()), (we = ne.length);
              if ((we < Oe && (ne = [0].concat(ne)), N(je, ne, Oe, k), (Oe = je.length), R == -1))
                for (; w(ue, je, D, Oe) < 1; ) U++, N(je, D < Oe ? Q : ue, Oe, k), (Oe = je.length);
            } else R === 0 && (U++, (je = [0]));
            (O[H++] = U), je[0] ? (je[Oe++] = re[Me] || 0) : ((je = [re[Me]]), (Oe = 1));
          } while ((Me++ < ke || je[0] != null) && se--);
          (oe = je[0] != null), O[0] || O.splice(0, 1);
        }
        if (k == ln) {
          for (H = 1, se = O[0]; se >= 10; se /= 10, H++);
          Ee(ye, X + (ye.e = H + $ * at - 1) + 1, Z, oe);
        } else (ye.e = $), (ye.r = +oe);
        return ye;
      };
    })());
  function ve(v, w, N, G) {
    var Y, X, Z, k, R;
    if ((N == null ? (N = h) : Lt(N, 0, 8), !v.c)) return v.toString();
    if (((Y = v.c[0]), (Z = v.e), w == null))
      (R = Qr(v.c)), (R = G == 1 || (G == 2 && (Z <= p || Z >= y)) ? Ts(R, Z) : zn(R, Z, '0'));
    else if (
      ((v = Ee(new z(v), w, N)), (X = v.e), (R = Qr(v.c)), (k = R.length), G == 1 || (G == 2 && (w <= X || X <= p)))
    ) {
      for (; k < w; R += '0', k++);
      R = Ts(R, X);
    } else if (((w -= Z), (R = zn(R, X, '0')), X + 1 > k)) {
      if (--w > 0) for (R += '.'; w--; R += '0');
    } else if (((w += X - k), w > 0)) for (X + 1 == k && (R += '.'); w--; R += '0');
    return v.s < 0 && Y ? '-' + R : R;
  }
  function qe(v, w) {
    for (var N, G, Y = 1, X = new z(v[0]); Y < v.length; Y++)
      (G = new z(v[Y])), (!G.s || (N = Ki(X, G)) === w || (N === 0 && X.s === w)) && (X = G);
    return X;
  }
  function xe(v, w, N) {
    for (var G = 1, Y = w.length; !w[--Y]; w.pop());
    for (Y = w[0]; Y >= 10; Y /= 10, G++);
    return (N = G + N * at - 1) > b ? (v.c = v.e = null) : N < _ ? (v.c = [(v.e = 0)]) : ((v.e = N), (v.c = w)), v;
  }
  u = (function () {
    var v = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      w = /^([^.]+)\.$/,
      N = /^\.([^.]+)$/,
      G = /^-?(Infinity|NaN)$/,
      Y = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (X, Z, k, R) {
      var $,
        H = k ? Z : Z.replace(Y, '');
      if (G.test(H)) X.s = isNaN(H) ? null : H < 0 ? -1 : 1;
      else {
        if (
          !k &&
          ((H = H.replace(v, function (oe, U, ne) {
            return ($ = (ne = ne.toLowerCase()) == 'x' ? 16 : ne == 'b' ? 2 : 8), !R || R == $ ? U : oe;
          })),
          R && (($ = R), (H = H.replace(w, '$1').replace(N, '0.$1'))),
          Z != H)
        )
          return new z(H, $);
        if (z.DEBUG) throw Error(wr + 'Not a' + (R ? ' base ' + R : '') + ' number: ' + Z);
        X.s = null;
      }
      X.c = X.e = null;
    };
  })();
  function Ee(v, w, N, G) {
    var Y,
      X,
      Z,
      k,
      R,
      $,
      H,
      oe = v.c,
      U = Of;
    if (oe) {
      e: {
        for (Y = 1, k = oe[0]; k >= 10; k /= 10, Y++);
        if (((X = w - Y), X < 0)) (X += at), (Z = w), (R = oe[($ = 0)]), (H = Pr((R / U[Y - Z - 1]) % 10));
        else if ((($ = Tf((X + 1) / at)), $ >= oe.length))
          if (G) {
            for (; oe.length <= $; oe.push(0));
            (R = H = 0), (Y = 1), (X %= at), (Z = X - at + 1);
          } else break e;
        else {
          for (R = k = oe[$], Y = 1; k >= 10; k /= 10, Y++);
          (X %= at), (Z = X - at + Y), (H = Z < 0 ? 0 : Pr((R / U[Y - Z - 1]) % 10));
        }
        if (
          ((G = G || w < 0 || oe[$ + 1] != null || (Z < 0 ? R : R % U[Y - Z - 1])),
          (G =
            N < 4
              ? (H || G) && (N == 0 || N == (v.s < 0 ? 3 : 2))
              : H > 5 ||
                (H == 5 &&
                  (N == 4 ||
                    G ||
                    (N == 6 && (X > 0 ? (Z > 0 ? R / U[Y - Z] : 0) : oe[$ - 1]) % 10 & 1) ||
                    N == (v.s < 0 ? 8 : 7)))),
          w < 1 || !oe[0])
        )
          return (
            (oe.length = 0),
            G ? ((w -= v.e + 1), (oe[0] = U[(at - (w % at)) % at]), (v.e = -w || 0)) : (oe[0] = v.e = 0),
            v
          );
        if (
          (X == 0
            ? ((oe.length = $), (k = 1), $--)
            : ((oe.length = $ + 1), (k = U[at - X]), (oe[$] = Z > 0 ? Pr((R / U[Y - Z]) % U[Z]) * k : 0)),
          G)
        )
          for (;;)
            if ($ == 0) {
              for (X = 1, Z = oe[0]; Z >= 10; Z /= 10, X++);
              for (Z = oe[0] += k, k = 1; Z >= 10; Z /= 10, k++);
              X != k && (v.e++, oe[0] == ln && (oe[0] = 1));
              break;
            } else {
              if (((oe[$] += k), oe[$] != ln)) break;
              (oe[$--] = 0), (k = 1);
            }
        for (X = oe.length; oe[--X] === 0; oe.pop());
      }
      v.e > b ? (v.c = v.e = null) : v.e < _ && (v.c = [(v.e = 0)]);
    }
    return v;
  }
  function De(v) {
    var w,
      N = v.e;
    return N === null
      ? v.toString()
      : ((w = Qr(v.c)), (w = N <= p || N >= y ? Ts(w, N) : zn(w, N, '0')), v.s < 0 ? '-' + w : w);
  }
  return (
    (s.absoluteValue = s.abs =
      function () {
        var v = new z(this);
        return v.s < 0 && (v.s = 1), v;
      }),
    (s.comparedTo = function (v, w) {
      return Ki(this, new z(v, w));
    }),
    (s.decimalPlaces = s.dp =
      function (v, w) {
        var N,
          G,
          Y,
          X = this;
        if (v != null) return Lt(v, 0, Cr), w == null ? (w = h) : Lt(w, 0, 8), Ee(new z(X), v + X.e + 1, w);
        if (!(N = X.c)) return null;
        if (((G = ((Y = N.length - 1) - Jr(this.e / at)) * at), (Y = N[Y]))) for (; Y % 10 == 0; Y /= 10, G--);
        return G < 0 && (G = 0), G;
      }),
    (s.dividedBy = s.div =
      function (v, w) {
        return i(this, new z(v, w), d, h);
      }),
    (s.dividedToIntegerBy = s.idiv =
      function (v, w) {
        return i(this, new z(v, w), 0, 1);
      }),
    (s.exponentiatedBy = s.pow =
      function (v, w) {
        var N,
          G,
          Y,
          X,
          Z,
          k,
          R,
          $,
          H,
          oe = this;
        if (((v = new z(v)), v.c && !v.isInteger())) throw Error(wr + 'Exponent not an integer: ' + De(v));
        if (
          (w != null && (w = new z(w)),
          (k = v.e > 14),
          !oe.c || !oe.c[0] || (oe.c[0] == 1 && !oe.e && oe.c.length == 1) || !v.c || !v.c[0])
        )
          return (H = new z(Math.pow(+De(oe), k ? v.s * (2 - Ns(v)) : +De(v)))), w ? H.mod(w) : H;
        if (((R = v.s < 0), w)) {
          if (w.c ? !w.c[0] : !w.s) return new z(NaN);
          (G = !R && oe.isInteger() && w.isInteger()), G && (oe = oe.mod(w));
        } else {
          if (
            v.e > 9 &&
            (oe.e > 0 ||
              oe.e < -1 ||
              (oe.e == 0 ? oe.c[0] > 1 || (k && oe.c[1] >= 24e7) : oe.c[0] < 8e13 || (k && oe.c[0] <= 9999975e7)))
          )
            return (X = oe.s < 0 && Ns(v) ? -0 : 0), oe.e > -1 && (X = 1 / X), new z(R ? 1 / X : X);
          I && (X = Tf(I / at + 2));
        }
        for (
          k ? ((N = new z(0.5)), R && (v.s = 1), ($ = Ns(v))) : ((Y = Math.abs(+De(v))), ($ = Y % 2)), H = new z(f);
          ;

        ) {
          if ($) {
            if (((H = H.times(oe)), !H.c)) break;
            X ? H.c.length > X && (H.c.length = X) : G && (H = H.mod(w));
          }
          if (Y) {
            if (((Y = Pr(Y / 2)), Y === 0)) break;
            $ = Y % 2;
          } else if (((v = v.times(N)), Ee(v, v.e + 1, 1), v.e > 14)) $ = Ns(v);
          else {
            if (((Y = +De(v)), Y === 0)) break;
            $ = Y % 2;
          }
          (oe = oe.times(oe)), X ? oe.c && oe.c.length > X && (oe.c.length = X) : G && (oe = oe.mod(w));
        }
        return G ? H : (R && (H = f.div(H)), w ? H.mod(w) : X ? Ee(H, I, h, Z) : H);
      }),
    (s.integerValue = function (v) {
      var w = new z(this);
      return v == null ? (v = h) : Lt(v, 0, 8), Ee(w, w.e + 1, v);
    }),
    (s.isEqualTo = s.eq =
      function (v, w) {
        return Ki(this, new z(v, w)) === 0;
      }),
    (s.isFinite = function () {
      return !!this.c;
    }),
    (s.isGreaterThan = s.gt =
      function (v, w) {
        return Ki(this, new z(v, w)) > 0;
      }),
    (s.isGreaterThanOrEqualTo = s.gte =
      function (v, w) {
        return (w = Ki(this, new z(v, w))) === 1 || w === 0;
      }),
    (s.isInteger = function () {
      return !!this.c && Jr(this.e / at) > this.c.length - 2;
    }),
    (s.isLessThan = s.lt =
      function (v, w) {
        return Ki(this, new z(v, w)) < 0;
      }),
    (s.isLessThanOrEqualTo = s.lte =
      function (v, w) {
        return (w = Ki(this, new z(v, w))) === -1 || w === 0;
      }),
    (s.isNaN = function () {
      return !this.s;
    }),
    (s.isNegative = function () {
      return this.s < 0;
    }),
    (s.isPositive = function () {
      return this.s > 0;
    }),
    (s.isZero = function () {
      return !!this.c && this.c[0] == 0;
    }),
    (s.minus = function (v, w) {
      var N,
        G,
        Y,
        X,
        Z = this,
        k = Z.s;
      if (((v = new z(v, w)), (w = v.s), !k || !w)) return new z(NaN);
      if (k != w) return (v.s = -w), Z.plus(v);
      var R = Z.e / at,
        $ = v.e / at,
        H = Z.c,
        oe = v.c;
      if (!R || !$) {
        if (!H || !oe) return H ? ((v.s = -w), v) : new z(oe ? Z : NaN);
        if (!H[0] || !oe[0]) return oe[0] ? ((v.s = -w), v) : new z(H[0] ? Z : h == 3 ? -0 : 0);
      }
      if (((R = Jr(R)), ($ = Jr($)), (H = H.slice()), (k = R - $))) {
        for ((X = k < 0) ? ((k = -k), (Y = H)) : (($ = R), (Y = oe)), Y.reverse(), w = k; w--; Y.push(0));
        Y.reverse();
      } else
        for (G = (X = (k = H.length) < (w = oe.length)) ? k : w, k = w = 0; w < G; w++)
          if (H[w] != oe[w]) {
            X = H[w] < oe[w];
            break;
          }
      if ((X && ((Y = H), (H = oe), (oe = Y), (v.s = -v.s)), (w = (G = oe.length) - (N = H.length)), w > 0))
        for (; w--; H[N++] = 0);
      for (w = ln - 1; G > k; ) {
        if (H[--G] < oe[G]) {
          for (N = G; N && !H[--N]; H[N] = w);
          --H[N], (H[G] += ln);
        }
        H[G] -= oe[G];
      }
      for (; H[0] == 0; H.splice(0, 1), --$);
      return H[0] ? xe(v, H, $) : ((v.s = h == 3 ? -1 : 1), (v.c = [(v.e = 0)]), v);
    }),
    (s.modulo = s.mod =
      function (v, w) {
        var N,
          G,
          Y = this;
        return (
          (v = new z(v, w)),
          !Y.c || !v.s || (v.c && !v.c[0])
            ? new z(NaN)
            : !v.c || (Y.c && !Y.c[0])
              ? new z(Y)
              : (E == 9 ? ((G = v.s), (v.s = 1), (N = i(Y, v, 0, 3)), (v.s = G), (N.s *= G)) : (N = i(Y, v, 0, E)),
                (v = Y.minus(N.times(v))),
                !v.c[0] && E == 1 && (v.s = Y.s),
                v)
        );
      }),
    (s.multipliedBy = s.times =
      function (v, w) {
        var N,
          G,
          Y,
          X,
          Z,
          k,
          R,
          $,
          H,
          oe,
          U,
          ne,
          we,
          ye,
          O,
          je = this,
          Oe = je.c,
          Pe = (v = new z(v, w)).c;
        if (!Oe || !Pe || !Oe[0] || !Pe[0])
          return (
            !je.s || !v.s || (Oe && !Oe[0] && !Pe) || (Pe && !Pe[0] && !Oe)
              ? (v.c = v.e = v.s = null)
              : ((v.s *= je.s), !Oe || !Pe ? (v.c = v.e = null) : ((v.c = [0]), (v.e = 0))),
            v
          );
        for (
          G = Jr(je.e / at) + Jr(v.e / at),
            v.s *= je.s,
            R = Oe.length,
            oe = Pe.length,
            R < oe && ((we = Oe), (Oe = Pe), (Pe = we), (Y = R), (R = oe), (oe = Y)),
            Y = R + oe,
            we = [];
          Y--;
          we.push(0)
        );
        for (ye = ln, O = bi, Y = oe; --Y >= 0; ) {
          for (N = 0, U = Pe[Y] % O, ne = (Pe[Y] / O) | 0, Z = R, X = Y + Z; X > Y; )
            ($ = Oe[--Z] % O),
              (H = (Oe[Z] / O) | 0),
              (k = ne * $ + H * U),
              ($ = U * $ + (k % O) * O + we[X] + N),
              (N = (($ / ye) | 0) + ((k / O) | 0) + ne * H),
              (we[X--] = $ % ye);
          we[X] = N;
        }
        return N ? ++G : we.splice(0, 1), xe(v, we, G);
      }),
    (s.negated = function () {
      var v = new z(this);
      return (v.s = -v.s || null), v;
    }),
    (s.plus = function (v, w) {
      var N,
        G = this,
        Y = G.s;
      if (((v = new z(v, w)), (w = v.s), !Y || !w)) return new z(NaN);
      if (Y != w) return (v.s = -w), G.minus(v);
      var X = G.e / at,
        Z = v.e / at,
        k = G.c,
        R = v.c;
      if (!X || !Z) {
        if (!k || !R) return new z(Y / 0);
        if (!k[0] || !R[0]) return R[0] ? v : new z(k[0] ? G : Y * 0);
      }
      if (((X = Jr(X)), (Z = Jr(Z)), (k = k.slice()), (Y = X - Z))) {
        for (Y > 0 ? ((Z = X), (N = R)) : ((Y = -Y), (N = k)), N.reverse(); Y--; N.push(0));
        N.reverse();
      }
      for (Y = k.length, w = R.length, Y - w < 0 && ((N = R), (R = k), (k = N), (w = Y)), Y = 0; w; )
        (Y = ((k[--w] = k[w] + R[w] + Y) / ln) | 0), (k[w] = ln === k[w] ? 0 : k[w] % ln);
      return Y && ((k = [Y].concat(k)), ++Z), xe(v, k, Z);
    }),
    (s.precision = s.sd =
      function (v, w) {
        var N,
          G,
          Y,
          X = this;
        if (v != null && v !== !!v) return Lt(v, 1, Cr), w == null ? (w = h) : Lt(w, 0, 8), Ee(new z(X), v, w);
        if (!(N = X.c)) return null;
        if (((Y = N.length - 1), (G = Y * at + 1), (Y = N[Y]))) {
          for (; Y % 10 == 0; Y /= 10, G--);
          for (Y = N[0]; Y >= 10; Y /= 10, G++);
        }
        return v && X.e + 1 > G && (G = X.e + 1), G;
      }),
    (s.shiftedBy = function (v) {
      return Lt(v, -9007199254740991, pp), this.times('1e' + v);
    }),
    (s.squareRoot = s.sqrt =
      function () {
        var v,
          w,
          N,
          G,
          Y,
          X = this,
          Z = X.c,
          k = X.s,
          R = X.e,
          $ = d + 4,
          H = new z('0.5');
        if (k !== 1 || !Z || !Z[0]) return new z(!k || (k < 0 && (!Z || Z[0])) ? NaN : Z ? X : 1 / 0);
        if (
          ((k = Math.sqrt(+De(X))),
          k == 0 || k == 1 / 0
            ? ((w = Qr(Z)),
              (w.length + R) % 2 == 0 && (w += '0'),
              (k = Math.sqrt(+w)),
              (R = Jr((R + 1) / 2) - (R < 0 || R % 2)),
              k == 1 / 0 ? (w = '5e' + R) : ((w = k.toExponential()), (w = w.slice(0, w.indexOf('e') + 1) + R)),
              (N = new z(w)))
            : (N = new z(k + '')),
          N.c[0])
        ) {
          for (R = N.e, k = R + $, k < 3 && (k = 0); ; )
            if (((Y = N), (N = H.times(Y.plus(i(X, Y, $, 1)))), Qr(Y.c).slice(0, k) === (w = Qr(N.c)).slice(0, k)))
              if ((N.e < R && --k, (w = w.slice(k - 3, k + 1)), w == '9999' || (!G && w == '4999'))) {
                if (!G && (Ee(Y, Y.e + d + 2, 0), Y.times(Y).eq(X))) {
                  N = Y;
                  break;
                }
                ($ += 4), (k += 4), (G = 1);
              } else {
                (!+w || (!+w.slice(1) && w.charAt(0) == '5')) && (Ee(N, N.e + d + 2, 1), (v = !N.times(N).eq(X)));
                break;
              }
        }
        return Ee(N, N.e + d + 1, h, v);
      }),
    (s.toExponential = function (v, w) {
      return v != null && (Lt(v, 0, Cr), v++), ve(this, v, w, 1);
    }),
    (s.toFixed = function (v, w) {
      return v != null && (Lt(v, 0, Cr), (v = v + this.e + 1)), ve(this, v, w);
    }),
    (s.toFormat = function (v, w, N) {
      var G,
        Y = this;
      if (N == null)
        v != null && w && typeof w == 'object'
          ? ((N = w), (w = null))
          : v && typeof v == 'object'
            ? ((N = v), (v = w = null))
            : (N = P);
      else if (typeof N != 'object') throw Error(wr + 'Argument not an object: ' + N);
      if (((G = Y.toFixed(v, w)), Y.c)) {
        var X,
          Z = G.split('.'),
          k = +N.groupSize,
          R = +N.secondaryGroupSize,
          $ = N.groupSeparator || '',
          H = Z[0],
          oe = Z[1],
          U = Y.s < 0,
          ne = U ? H.slice(1) : H,
          we = ne.length;
        if ((R && ((X = k), (k = R), (R = X), (we -= X)), k > 0 && we > 0)) {
          for (X = we % k || k, H = ne.substr(0, X); X < we; X += k) H += $ + ne.substr(X, k);
          R > 0 && (H += $ + ne.slice(X)), U && (H = '-' + H);
        }
        G = oe
          ? H +
            (N.decimalSeparator || '') +
            ((R = +N.fractionGroupSize)
              ? oe.replace(new RegExp('\\d{' + R + '}\\B', 'g'), '$&' + (N.fractionGroupSeparator || ''))
              : oe)
          : H;
      }
      return (N.prefix || '') + G + (N.suffix || '');
    }),
    (s.toFraction = function (v) {
      var w,
        N,
        G,
        Y,
        X,
        Z,
        k,
        R,
        $,
        H,
        oe,
        U,
        ne = this,
        we = ne.c;
      if (v != null && ((k = new z(v)), (!k.isInteger() && (k.c || k.s !== 1)) || k.lt(f)))
        throw Error(wr + 'Argument ' + (k.isInteger() ? 'out of range: ' : 'not an integer: ') + De(k));
      if (!we) return new z(ne);
      for (
        w = new z(f),
          $ = N = new z(f),
          G = R = new z(f),
          U = Qr(we),
          X = w.e = U.length - ne.e - 1,
          w.c[0] = Of[(Z = X % at) < 0 ? at + Z : Z],
          v = !v || k.comparedTo(w) > 0 ? (X > 0 ? w : $) : k,
          Z = b,
          b = 1 / 0,
          k = new z(U),
          R.c[0] = 0;
        (H = i(k, w, 0, 1)), (Y = N.plus(H.times(G))), Y.comparedTo(v) != 1;

      )
        (N = G), (G = Y), ($ = R.plus(H.times((Y = $)))), (R = Y), (w = k.minus(H.times((Y = w)))), (k = Y);
      return (
        (Y = i(v.minus(N), G, 0, 1)),
        (R = R.plus(Y.times($))),
        (N = N.plus(Y.times(G))),
        (R.s = $.s = ne.s),
        (X = X * 2),
        (oe =
          i($, G, X, h)
            .minus(ne)
            .abs()
            .comparedTo(i(R, N, X, h).minus(ne).abs()) < 1
            ? [$, G]
            : [R, N]),
        (b = Z),
        oe
      );
    }),
    (s.toNumber = function () {
      return +De(this);
    }),
    (s.toPrecision = function (v, w) {
      return v != null && Lt(v, 1, Cr), ve(this, v, w, 2);
    }),
    (s.toString = function (v) {
      var w,
        N = this,
        G = N.s,
        Y = N.e;
      return (
        Y === null
          ? G
            ? ((w = 'Infinity'), G < 0 && (w = '-' + w))
            : (w = 'NaN')
          : (v == null
              ? (w = Y <= p || Y >= y ? Ts(Qr(N.c), Y) : zn(Qr(N.c), Y, '0'))
              : v === 10 && W
                ? ((N = Ee(new z(N), d + Y + 1, h)), (w = zn(Qr(N.c), N.e, '0')))
                : (Lt(v, 2, J.length, 'Base'), (w = a(zn(Qr(N.c), Y, '0'), 10, v, G, !0))),
            G < 0 && N.c[0] && (w = '-' + w)),
        w
      );
    }),
    (s.valueOf = s.toJSON =
      function () {
        return De(this);
      }),
    (s._isBigNumber = !0),
    (s[Symbol.toStringTag] = 'BigNumber'),
    (s[Symbol.for('nodejs.util.inspect.custom')] = s.valueOf),
    r != null && z.set(r),
    z
  );
}
function Jr(r) {
  var i = r | 0;
  return r > 0 || r === i ? i : i - 1;
}
function Qr(r) {
  for (var i, a, u = 1, s = r.length, f = r[0] + ''; u < s; ) {
    for (i = r[u++] + '', a = at - i.length; a--; i = '0' + i);
    f += i;
  }
  for (s = f.length; f.charCodeAt(--s) === 48; );
  return f.slice(0, s + 1 || 1);
}
function Ki(r, i) {
  var a,
    u,
    s = r.c,
    f = i.c,
    d = r.s,
    h = i.s,
    p = r.e,
    y = i.e;
  if (!d || !h) return null;
  if (((a = s && !s[0]), (u = f && !f[0]), a || u)) return a ? (u ? 0 : -h) : d;
  if (d != h) return d;
  if (((a = d < 0), (u = p == y), !s || !f)) return u ? 0 : !s ^ a ? 1 : -1;
  if (!u) return (p > y) ^ a ? 1 : -1;
  for (h = (p = s.length) < (y = f.length) ? p : y, d = 0; d < h; d++)
    if (s[d] != f[d]) return (s[d] > f[d]) ^ a ? 1 : -1;
  return p == y ? 0 : (p > y) ^ a ? 1 : -1;
}
function Lt(r, i, a, u) {
  if (r < i || r > a || r !== Pr(r))
    throw Error(
      wr +
        (u || 'Argument') +
        (typeof r == 'number'
          ? r < i || r > a
            ? ' out of range: '
            : ' not an integer: '
          : ' not a primitive number: ') +
        String(r)
    );
}
function Ns(r) {
  var i = r.c.length - 1;
  return Jr(r.e / at) == i && r.c[i] % 2 != 0;
}
function Ts(r, i) {
  return (r.length > 1 ? r.charAt(0) + '.' + r.slice(1) : r) + (i < 0 ? 'e' : 'e+') + i;
}
function zn(r, i, a) {
  var u, s;
  if (i < 0) {
    for (s = a + '.'; ++i; s += a);
    r = s + r;
  } else if (((u = r.length), ++i > u)) {
    for (s = a, i -= u; --i; s += a);
    r += s;
  } else i < u && (r = r.slice(0, i) + '.' + r.slice(i));
  return r;
}
var en = Ly();
class Rt {
  constructor(i) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = i);
  }
  static fromString(i) {
    return i ? new Rt(BigInt(i)) : null;
  }
  toString() {
    return this.value.toString();
  }
  equals(i) {
    return i ? this.value === i.value : !1;
  }
}
Object.defineProperty(Rt, 'Bitcoin', { enumerable: !0, configurable: !0, writable: !0, value: new Rt(0n) });
Object.defineProperty(Rt, 'Ethereum', { enumerable: !0, configurable: !0, writable: !0, value: new Rt(60n) });
Object.defineProperty(Rt, 'Solana', { enumerable: !0, configurable: !0, writable: !0, value: new Rt(501n) });
Object.defineProperty(Rt, 'Dfinity', { enumerable: !0, configurable: !0, writable: !0, value: new Rt(223n) });
Object.defineProperty(Rt, 'Ton', { enumerable: !0, configurable: !0, writable: !0, value: new Rt(607n) });
Object.defineProperty(Rt, 'Tron', { enumerable: !0, configurable: !0, writable: !0, value: new Rt(195n) });
Object.defineProperty(Rt, 'Kaspa', { enumerable: !0, configurable: !0, writable: !0, value: new Rt(111111n) });
class He {
  constructor(i) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = i);
  }
  static fromString(i) {
    return i ? new He(BigInt(i)) : null;
  }
  toString() {
    return this.value.toString();
  }
  equals(i) {
    return i ? this.value === i.value : !1;
  }
}
Object.defineProperty(He, 'MainNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(1n) });
Object.defineProperty(He, 'TestNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(0n) });
Object.defineProperty(He, 'BtcMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(1n) });
Object.defineProperty(He, 'BtcTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(2n) });
Object.defineProperty(He, 'EvmMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(0x1n) });
Object.defineProperty(He, 'EvmSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(0xaa36a7n)
});
Object.defineProperty(He, 'EvmBscNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(0x38n) });
Object.defineProperty(He, 'EvmBscTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(97n) });
Object.defineProperty(He, 'EvmBaseNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(8453n) });
Object.defineProperty(He, 'EvmBaseSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(84532n)
});
Object.defineProperty(He, 'EvmAvalancheNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(43114n) });
Object.defineProperty(He, 'EvmAvalancheFujiNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(43113n)
});
Object.defineProperty(He, 'EvmScrollNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(534352n) });
Object.defineProperty(He, 'EvmScrollSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(534351n)
});
Object.defineProperty(He, 'EvmBitlayerNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(200901n) });
Object.defineProperty(He, 'EvmBitlayerTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(200810n)
});
Object.defineProperty(He, 'EvmSwanNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(254n) });
Object.defineProperty(He, 'EvmSwanTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(20241133n)
});
Object.defineProperty(He, 'EvmPantaNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(331n) });
Object.defineProperty(He, 'SolanaMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(0x3n) });
Object.defineProperty(He, 'SolanaTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(0x2n) });
Object.defineProperty(He, 'TonMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(1n) });
Object.defineProperty(He, 'TonTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(2n) });
Object.defineProperty(He, 'TronMainNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(0x2b6653dcn)
});
Object.defineProperty(He, 'TronShastaTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(0x94a9059en)
});
Object.defineProperty(He, 'TronNileTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new He(0xcd8690dcn)
});
Object.defineProperty(He, 'DfinityMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(1n) });
Object.defineProperty(He, 'KaspaMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(0n) });
Object.defineProperty(He, 'KaspaTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new He(1n) });
class ar {
  constructor(i, a) {
    Object.defineProperty(this, 'chain', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'network', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.chain = i),
      (this.network = a);
  }
  toString() {
    return `${this.chain.toString()}_${this.network.toString()}`;
  }
  static fromString(i) {
    if (!i || !i.includes('_')) throw new Error(`Invalid chainId format: ${i}. Expected format: "chain_network"`);
    const [a, u] = i.split('_'),
      s = Rt.fromString(a),
      f = He.fromString(u);
    if (!s || !f) throw new Error(`Invalid chain or network in chainId: ${i}`);
    return new ar(s, f);
  }
  equals(i) {
    return this.chain.equals(i.chain) && this.network.equals(i.network);
  }
}
function MS(r) {
  return { chainId: r.chainId, depositAddress: r.depositAddress || void 0, displayName: r.displayName || void 0 };
}
var Pi;
(function (r) {
  (r[(r.Native = 0)] = 'Native'),
    (r[(r.NativeGas = 1)] = 'NativeGas'),
    (r[(r.ERC20 = 3)] = 'ERC20'),
    (r[(r.ERC721 = 4)] = 'ERC721'),
    (r[(r.ICP = 5)] = 'ICP'),
    (r[(r.ICRC3 = 6)] = 'ICRC3'),
    (r[(r.BRC20 = 7)] = 'BRC20'),
    (r[(r.SPL = 8)] = 'SPL'),
    (r[(r.TRC20 = 9)] = 'TRC20'),
    (r[(r.Jetton = 10)] = 'Jetton'),
    (r[(r.KRC20 = 11)] = 'KRC20');
})(Pi || (Pi = {}));
function RS(r) {
  const i = Number(r);
  return Object.values(Pi).includes(i) ? i : null;
}
var Fa;
(function (r) {
  (r[(r.L1 = 1)] = 'L1'),
    (r[(r.L2 = 2)] = 'L2'),
    (r[(r.L3 = 3)] = 'L3'),
    (r[(r.L4 = 4)] = 'L4'),
    (r[(r.L5 = 5)] = 'L5'),
    (r[(r.L6 = 6)] = 'L6');
})(Fa || (Fa = {}));
var yp;
(function (r) {
  (r.EVM = 'EVM'),
    (r.Bitcoin = 'Bitcoin'),
    (r.Solana = 'Solana'),
    (r.Tron = 'Tron'),
    (r.Ton = 'Ton'),
    (r.IC = 'ICP'),
    (r.Kaspa = 'Kaspa');
})(yp || (yp = {}));
var _i;
(function (r) {
  (r[(r.Source = 0)] = 'Source'), (r[(r.Target = 1)] = 'Target');
})(_i || (_i = {}));
var Gn;
(function (r) {
  (r[(r.LimitOrder = 0)] = 'LimitOrder'), (r[(r.SwapOrder = 1)] = 'SwapOrder');
})(Gn || (Gn = {}));
var _t;
(function (r) {
  (r[(r.Ask = 1)] = 'Ask'), (r[(r.Bid = 2)] = 'Bid');
})(_t || (_t = {}));
var Va;
(function (r) {
  (r[(r.OneMinute = 1)] = 'OneMinute'),
    (r[(r.FiveMinutes = 2)] = 'FiveMinutes'),
    (r[(r.FifteenMinutes = 3)] = 'FifteenMinutes'),
    (r[(r.ThirtyMinutes = 4)] = 'ThirtyMinutes'),
    (r[(r.OneHour = 5)] = 'OneHour'),
    (r[(r.FourHours = 6)] = 'FourHours'),
    (r[(r.OneDay = 7)] = 'OneDay'),
    (r[(r.OneWeek = 8)] = 'OneWeek'),
    (r[(r.OneMonth = 9)] = 'OneMonth');
})(Va || (Va = {}));
var Ei;
(function (r) {
  (r[(r.Created = 0)] = 'Created'), (r[(r.Fulfilled = 1)] = 'Fulfilled'), (r[(r.Cancelled = 2)] = 'Cancelled');
})(Ei || (Ei = {}));
var Hs;
(function (r) {
  (r[(r.WalletRegister = 100)] = 'WalletRegister'),
    (r[(r.Deposit = 200)] = 'Deposit'),
    (r[(r.Withdraw = 201)] = 'Withdraw'),
    (r[(r.Transfer = 300)] = 'Transfer'),
    (r[(r.ResetMainSecret = 400)] = 'ResetMainSecret'),
    (r[(r.CreateApiSecret = 401)] = 'CreateApiSecret'),
    (r[(r.DestroyApiSecret = 402)] = 'DestroyApiSecret'),
    (r[(r.CreateSpotOrder = 500)] = 'CreateSpotOrder'),
    (r[(r.CancelSpotOrder = 501)] = 'CancelSpotOrder'),
    (r[(r.AddAmmV2Liquidity = 600)] = 'AddAmmV2Liquidity'),
    (r[(r.RemoveAmmV2Liquidity = 601)] = 'RemoveAmmV2Liquidity'),
    (r[(r.RegisterAsset = 700)] = 'RegisterAsset'),
    (r[(r.UpdateGlobalWithdrawalFeeTo = 701)] = 'UpdateGlobalWithdrawalFeeTo'),
    (r[(r.UpdateAssetWithdrawalFeeTo = 702)] = 'UpdateAssetWithdrawalFeeTo'),
    (r[(r.UpdateChainConfirmationTimes = 800)] = 'UpdateChainConfirmationTimes'),
    (r[(r.RegisterMarket = 900)] = 'RegisterMarket'),
    (r[(r.UpdateMarketTradingSettings = 901)] = 'UpdateMarketTradingSettings'),
    (r[(r.UpdateSpotMarketInitialFeeTo = 902)] = 'UpdateSpotMarketInitialFeeTo'),
    (r[(r.UpdateMarketFeeTo = 903)] = 'UpdateMarketFeeTo'),
    (r[(r.UpdateMarketInitialFee = 904)] = 'UpdateMarketInitialFee'),
    (r[(r.UpdateMarketFee = 905)] = 'UpdateMarketFee'),
    (r[(r.ClaimSpotMarketTradingFee = 906)] = 'ClaimSpotMarketTradingFee'),
    (r[(r.UpdateSpotMarketRoyalty = 907)] = 'UpdateSpotMarketRoyalty'),
    (r[(r.ClaimSpotMarketRoyalty = 908)] = 'ClaimSpotMarketRoyalty'),
    (r[(r.AssetAccountBinding = 1e3)] = 'AssetAccountBinding'),
    (r[(r.AssetAccountUnbinding = 1001)] = 'AssetAccountUnbinding'),
    (r[(r.SubmitMemeOrder = 1100)] = 'SubmitMemeOrder'),
    (r[(r.CancelMemeOrder = 1101)] = 'CancelMemeOrder'),
    (r[(r.RegisterMemeMarket = 1200)] = 'RegisterMemeMarket'),
    (r[(r.UpdateMemeMarketInitialTradingSettings = 1201)] = 'UpdateMemeMarketInitialTradingSettings'),
    (r[(r.UpdateMemeMarketTradingSettings = 1202)] = 'UpdateMemeMarketTradingSettings'),
    (r[(r.UpdateMemeMarketInitialFeeTo = 1203)] = 'UpdateMemeMarketInitialFeeTo'),
    (r[(r.UpdateMemeMarketFeeTo = 1204)] = 'UpdateMemeMarketFeeTo'),
    (r[(r.UpdateMemeMarketInitialTradingFee = 1205)] = 'UpdateMemeMarketInitialTradingFee'),
    (r[(r.UpdateMemeMarketTradingFee = 1206)] = 'UpdateMemeMarketTradingFee'),
    (r[(r.ClaimMemeMarketTradingFee = 1207)] = 'ClaimMemeMarketTradingFee');
})(Hs || (Hs = {}));
var cn;
(function (r) {
  (r.Mainnet = 'mainnet'), (r.Testnet = 'testnet');
})(cn || (cn = {}));
var gp;
(function (r) {
  (r[(r.BtcEcdsa = 1e3)] = 'BtcEcdsa'),
    (r[(r.EvmEcdsa = 1001)] = 'EvmEcdsa'),
    (r[(r.TronEcdsa = 1002)] = 'TronEcdsa'),
    (r[(r.TonEddsaOpenMask = 2e3)] = 'TonEddsaOpenMask'),
    (r[(r.SolanaEddsa = 2010)] = 'SolanaEddsa'),
    (r[(r.IcpEddsa = 2020)] = 'IcpEddsa'),
    (r[(r.KaspaSchnorr = 3010)] = 'KaspaSchnorr');
})(gp || (gp = {}));
var Fs;
(function (r) {
  r[(r.V0 = 0)] = 'V0';
})(Fs || (Fs = {}));
class BS {
  constructor(i) {
    Object.defineProperty(this, 'hin', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'sourceWalletPublicKey', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }),
      Object.defineProperty(this, 'sourceWalletAddress', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }),
      Object.defineProperty(this, 'txRef', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'sourceChainId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'sourceAssetType', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'sourceAsset', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'sourceVolume', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'targetChainId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'targetWalletAddress', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }),
      Object.defineProperty(this, 'targetAssetType', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'targetAsset', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'targetVolume', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'targetVolumeMin', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'signatureSchema', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'signature', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.hin = i.hin),
      (this.sourceWalletPublicKey = i.sourceWalletPublicKey),
      (this.sourceWalletAddress = i.sourceWalletAddress),
      (this.txRef = i.txRef),
      (this.sourceChainId = i.sourceChainId),
      (this.sourceAssetType = i.sourceAssetType),
      (this.sourceAsset = i.sourceAsset),
      (this.sourceVolume = i.sourceVolume),
      (this.targetChainId = i.targetChainId),
      (this.targetWalletAddress = i.targetWalletAddress),
      (this.targetAssetType = i.targetAssetType),
      (this.targetAsset = i.targetAsset),
      (this.targetVolume = i.targetVolume),
      (this.targetVolumeMin = i.targetVolumeMin);
  }
  toJson() {
    var i, a, u;
    return JSON.stringify({
      hin: this.hin.toString(),
      sourceWalletPublicKey: this.sourceWalletPublicKey,
      sourceWalletAddress: this.sourceWalletAddress,
      txRef: this.txRef,
      sourceChainId: this.sourceChainId.toString(),
      sourceAssetType: (i = this.sourceAssetType) == null ? void 0 : i.toString(),
      sourceAsset: this.sourceAsset,
      sourceVolume: this.sourceVolume.toString(),
      targetChainId: (a = this.targetChainId) == null ? void 0 : a.toString(),
      targetWalletAddress: this.targetWalletAddress,
      targetAssetType: (u = this.targetAssetType) == null ? void 0 : u.toString(),
      targetAsset: this.targetAsset,
      targetVolume: this.targetVolume.toString(),
      targetVolumeMin: this.targetVolumeMin.toString()
    });
  }
  setSignature(i, a) {
    (this.signature = i), (this.signatureSchema = a);
  }
}
var vp;
(function (r) {
  (r.Pending = 'Pending'), (r.Success = 'Success'), (r.Rejected = 'Rejected');
})(vp || (vp = {}));
function CS(r) {
  return { query: { HIN: r.hin.toString(), ChainId: r.chainId.toString() } };
}
function DS(r) {
  var i, a, u, s, f;
  return {
    query: {
      SourceChainId: (i = r.sourceChainId) == null ? void 0 : i.toString(),
      SourceAssetType: (a = r.sourceAssetType) == null ? void 0 : a.toString(),
      SourceAsset: r.sourceAsset,
      SourceVolume: (u = r.sourceVolume) == null ? void 0 : u.toString(),
      TargetChainId: (s = r.targetChainId) == null ? void 0 : s.toString(),
      TargetAssetType: (f = r.targetAssetType) == null ? void 0 : f.toString(),
      TargetAsset: r.targetAsset
    }
  };
}
function US(r) {
  return {
    targetChainId: ar.fromString(r.targetChainId),
    targetVolume: BigInt(r.targetVolume),
    receiveVolume: BigInt(r.receiveVolume),
    gasFee: BigInt(r.gasFee),
    brokerFee: BigInt(r.brokerFee),
    brokerFeeRate: r.brokerFeeRate ?? 0,
    priceImpact: r.priceImpact ?? 0,
    slippage: r.slippage ?? 0,
    targetVolumeInUsd: r.targetVolumeInUsd ?? 0
  };
}
function jS(r) {
  var i, a, u;
  return {
    body: {
      hin: r.hin.toString(),
      sourceWalletPublicKey: r.sourceWalletPublicKey,
      sourceWalletAddress: r.sourceWalletAddress,
      txRef: r.txRef,
      sourceChainId: r.sourceChainId.toString(),
      sourceAssetType: (i = r.sourceAssetType) == null ? void 0 : i.toString(),
      sourceAsset: r.sourceAsset,
      sourceVolume: r.sourceVolume.toString(),
      targetChainId: (a = r.targetChainId) == null ? void 0 : a.toString(),
      targetWalletAddress: r.targetWalletAddress,
      targetAssetType: (u = r.targetAssetType) == null ? void 0 : u.toString(),
      targetAsset: r.targetAsset,
      targetVolume: r.targetVolume.toString(),
      targetVolumeMin: r.targetVolumeMin.toString(),
      signature: r.signature
    }
  };
}
function kS(r) {
  return { query: { OrderId: r } };
}
function IS(r) {
  return { status: r.status, txHash: r.txHash };
}
function bp(r) {
  if (!Number.isSafeInteger(r) || r < 0) throw new Error('positive integer expected, got ' + r);
}
function LS(r) {
  return r instanceof Uint8Array || (ArrayBuffer.isView(r) && r.constructor.name === 'Uint8Array');
}
function hd(r, ...i) {
  if (!LS(r)) throw new Error('Uint8Array expected');
  if (i.length > 0 && !i.includes(r.length))
    throw new Error('Uint8Array expected of length ' + i + ', got length=' + r.length);
}
function qS(r) {
  if (typeof r != 'function' || typeof r.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  bp(r.outputLen), bp(r.blockLen);
}
function Vs(r, i = !0) {
  if (r.destroyed) throw new Error('Hash instance has been destroyed');
  if (i && r.finished) throw new Error('Hash#digest() has already been called');
}
function zS(r, i) {
  hd(r);
  const a = i.outputLen;
  if (r.length < a) throw new Error('digestInto() expects output buffer of length at least ' + a);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Mf(r) {
  return new DataView(r.buffer, r.byteOffset, r.byteLength);
}
function gn(r, i) {
  return (r << (32 - i)) | (r >>> i);
}
function HS(r) {
  if (typeof r != 'string') throw new Error('utf8ToBytes expected string, got ' + typeof r);
  return new Uint8Array(new TextEncoder().encode(r));
}
function md(r) {
  return typeof r == 'string' && (r = HS(r)), hd(r), r;
}
class qy {
  clone() {
    return this._cloneInto();
  }
}
function FS(r) {
  const i = (u) => r().update(md(u)).digest(),
    a = r();
  return (i.outputLen = a.outputLen), (i.blockLen = a.blockLen), (i.create = () => r()), i;
}
class zy extends qy {
  constructor(i, a) {
    super(), (this.finished = !1), (this.destroyed = !1), qS(i);
    const u = md(a);
    if (((this.iHash = i.create()), typeof this.iHash.update != 'function'))
      throw new Error('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const s = this.blockLen,
      f = new Uint8Array(s);
    f.set(u.length > s ? i.create().update(u).digest() : u);
    for (let d = 0; d < f.length; d++) f[d] ^= 54;
    this.iHash.update(f), (this.oHash = i.create());
    for (let d = 0; d < f.length; d++) f[d] ^= 106;
    this.oHash.update(f), f.fill(0);
  }
  update(i) {
    return Vs(this), this.iHash.update(i), this;
  }
  digestInto(i) {
    Vs(this),
      hd(i, this.outputLen),
      (this.finished = !0),
      this.iHash.digestInto(i),
      this.oHash.update(i),
      this.oHash.digestInto(i),
      this.destroy();
  }
  digest() {
    const i = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(i), i;
  }
  _cloneInto(i) {
    i || (i = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: a, iHash: u, finished: s, destroyed: f, blockLen: d, outputLen: h } = this;
    return (
      (i = i),
      (i.finished = s),
      (i.destroyed = f),
      (i.blockLen = d),
      (i.outputLen = h),
      (i.oHash = a._cloneInto(i.oHash)),
      (i.iHash = u._cloneInto(i.iHash)),
      i
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const Hy = (r, i, a) => new zy(r, i).update(a).digest();
Hy.create = (r, i) => new zy(r, i);
function VS(r, i, a, u) {
  if (typeof r.setBigUint64 == 'function') return r.setBigUint64(i, a, u);
  const s = BigInt(32),
    f = BigInt(4294967295),
    d = Number((a >> s) & f),
    h = Number(a & f),
    p = u ? 4 : 0,
    y = u ? 0 : 4;
  r.setUint32(i + p, d, u), r.setUint32(i + y, h, u);
}
function GS(r, i, a) {
  return (r & i) ^ (~r & a);
}
function $S(r, i, a) {
  return (r & i) ^ (r & a) ^ (i & a);
}
class YS extends qy {
  constructor(i, a, u, s) {
    super(),
      (this.blockLen = i),
      (this.outputLen = a),
      (this.padOffset = u),
      (this.isLE = s),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(i)),
      (this.view = Mf(this.buffer));
  }
  update(i) {
    Vs(this);
    const { view: a, buffer: u, blockLen: s } = this;
    i = md(i);
    const f = i.length;
    for (let d = 0; d < f; ) {
      const h = Math.min(s - this.pos, f - d);
      if (h === s) {
        const p = Mf(i);
        for (; s <= f - d; d += s) this.process(p, d);
        continue;
      }
      u.set(i.subarray(d, d + h), this.pos),
        (this.pos += h),
        (d += h),
        this.pos === s && (this.process(a, 0), (this.pos = 0));
    }
    return (this.length += i.length), this.roundClean(), this;
  }
  digestInto(i) {
    Vs(this), zS(i, this), (this.finished = !0);
    const { buffer: a, view: u, blockLen: s, isLE: f } = this;
    let { pos: d } = this;
    (a[d++] = 128), this.buffer.subarray(d).fill(0), this.padOffset > s - d && (this.process(u, 0), (d = 0));
    for (let b = d; b < s; b++) a[b] = 0;
    VS(u, s - 8, BigInt(this.length * 8), f), this.process(u, 0);
    const h = Mf(i),
      p = this.outputLen;
    if (p % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const y = p / 4,
      _ = this.get();
    if (y > _.length) throw new Error('_sha2: outputLen bigger than state');
    for (let b = 0; b < y; b++) h.setUint32(4 * b, _[b], f);
  }
  digest() {
    const { buffer: i, outputLen: a } = this;
    this.digestInto(i);
    const u = i.slice(0, a);
    return this.destroy(), u;
  }
  _cloneInto(i) {
    i || (i = new this.constructor()), i.set(...this.get());
    const { blockLen: a, buffer: u, length: s, finished: f, destroyed: d, pos: h } = this;
    return (i.length = s), (i.pos = h), (i.finished = f), (i.destroyed = d), s % a && i.buffer.set(u), i;
  }
}
const XS = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
    310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078,
    604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
    3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
    2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
    275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222,
    2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
  ]),
  Si = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
  xi = new Uint32Array(64);
class KS extends YS {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Si[0] | 0),
      (this.B = Si[1] | 0),
      (this.C = Si[2] | 0),
      (this.D = Si[3] | 0),
      (this.E = Si[4] | 0),
      (this.F = Si[5] | 0),
      (this.G = Si[6] | 0),
      (this.H = Si[7] | 0);
  }
  get() {
    const { A: i, B: a, C: u, D: s, E: f, F: d, G: h, H: p } = this;
    return [i, a, u, s, f, d, h, p];
  }
  set(i, a, u, s, f, d, h, p) {
    (this.A = i | 0),
      (this.B = a | 0),
      (this.C = u | 0),
      (this.D = s | 0),
      (this.E = f | 0),
      (this.F = d | 0),
      (this.G = h | 0),
      (this.H = p | 0);
  }
  process(i, a) {
    for (let b = 0; b < 16; b++, a += 4) xi[b] = i.getUint32(a, !1);
    for (let b = 16; b < 64; b++) {
      const S = xi[b - 15],
        E = xi[b - 2],
        I = gn(S, 7) ^ gn(S, 18) ^ (S >>> 3),
        P = gn(E, 17) ^ gn(E, 19) ^ (E >>> 10);
      xi[b] = (P + xi[b - 7] + I + xi[b - 16]) | 0;
    }
    let { A: u, B: s, C: f, D: d, E: h, F: p, G: y, H: _ } = this;
    for (let b = 0; b < 64; b++) {
      const S = gn(h, 6) ^ gn(h, 11) ^ gn(h, 25),
        E = (_ + S + GS(h, p, y) + XS[b] + xi[b]) | 0,
        P = ((gn(u, 2) ^ gn(u, 13) ^ gn(u, 22)) + $S(u, s, f)) | 0;
      (_ = y), (y = p), (p = h), (h = (d + E) | 0), (d = f), (f = s), (s = u), (u = (E + P) | 0);
    }
    (u = (u + this.A) | 0),
      (s = (s + this.B) | 0),
      (f = (f + this.C) | 0),
      (d = (d + this.D) | 0),
      (h = (h + this.E) | 0),
      (p = (p + this.F) | 0),
      (y = (y + this.G) | 0),
      (_ = (_ + this.H) | 0),
      this.set(u, s, f, d, h, p, y, _);
  }
  roundClean() {
    xi.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Fy = FS(() => new KS());
var Rf = {},
  Bf = {},
  Vl = {},
  Sp;
function ZS() {
  if (Sp) return Vl;
  (Sp = 1), (Vl.byteLength = h), (Vl.toByteArray = y), (Vl.fromByteArray = S);
  for (
    var r = [],
      i = [],
      a = typeof Uint8Array < 'u' ? Uint8Array : Array,
      u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      s = 0,
      f = u.length;
    s < f;
    ++s
  )
    (r[s] = u[s]), (i[u.charCodeAt(s)] = s);
  (i[45] = 62), (i[95] = 63);
  function d(E) {
    var I = E.length;
    if (I % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    var P = E.indexOf('=');
    P === -1 && (P = I);
    var J = P === I ? 0 : 4 - (P % 4);
    return [P, J];
  }
  function h(E) {
    var I = d(E),
      P = I[0],
      J = I[1];
    return ((P + J) * 3) / 4 - J;
  }
  function p(E, I, P) {
    return ((I + P) * 3) / 4 - P;
  }
  function y(E) {
    var I,
      P = d(E),
      J = P[0],
      W = P[1],
      z = new a(p(E, J, W)),
      ve = 0,
      qe = W > 0 ? J - 4 : J,
      xe;
    for (xe = 0; xe < qe; xe += 4)
      (I =
        (i[E.charCodeAt(xe)] << 18) |
        (i[E.charCodeAt(xe + 1)] << 12) |
        (i[E.charCodeAt(xe + 2)] << 6) |
        i[E.charCodeAt(xe + 3)]),
        (z[ve++] = (I >> 16) & 255),
        (z[ve++] = (I >> 8) & 255),
        (z[ve++] = I & 255);
    return (
      W === 2 && ((I = (i[E.charCodeAt(xe)] << 2) | (i[E.charCodeAt(xe + 1)] >> 4)), (z[ve++] = I & 255)),
      W === 1 &&
        ((I = (i[E.charCodeAt(xe)] << 10) | (i[E.charCodeAt(xe + 1)] << 4) | (i[E.charCodeAt(xe + 2)] >> 2)),
        (z[ve++] = (I >> 8) & 255),
        (z[ve++] = I & 255)),
      z
    );
  }
  function _(E) {
    return r[(E >> 18) & 63] + r[(E >> 12) & 63] + r[(E >> 6) & 63] + r[E & 63];
  }
  function b(E, I, P) {
    for (var J, W = [], z = I; z < P; z += 3)
      (J = ((E[z] << 16) & 16711680) + ((E[z + 1] << 8) & 65280) + (E[z + 2] & 255)), W.push(_(J));
    return W.join('');
  }
  function S(E) {
    for (var I, P = E.length, J = P % 3, W = [], z = 16383, ve = 0, qe = P - J; ve < qe; ve += z)
      W.push(b(E, ve, ve + z > qe ? qe : ve + z));
    return (
      J === 1
        ? ((I = E[P - 1]), W.push(r[I >> 2] + r[(I << 4) & 63] + '=='))
        : J === 2 && ((I = (E[P - 2] << 8) + E[P - 1]), W.push(r[I >> 10] + r[(I >> 4) & 63] + r[(I << 2) & 63] + '=')),
      W.join('')
    );
  }
  return Vl;
}
var Os = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var xp;
function Vy() {
  return (
    xp ||
      ((xp = 1),
      (Os.read = function (r, i, a, u, s) {
        var f,
          d,
          h = s * 8 - u - 1,
          p = (1 << h) - 1,
          y = p >> 1,
          _ = -7,
          b = a ? s - 1 : 0,
          S = a ? -1 : 1,
          E = r[i + b];
        for (b += S, f = E & ((1 << -_) - 1), E >>= -_, _ += h; _ > 0; f = f * 256 + r[i + b], b += S, _ -= 8);
        for (d = f & ((1 << -_) - 1), f >>= -_, _ += u; _ > 0; d = d * 256 + r[i + b], b += S, _ -= 8);
        if (f === 0) f = 1 - y;
        else {
          if (f === p) return d ? NaN : (E ? -1 : 1) * (1 / 0);
          (d = d + Math.pow(2, u)), (f = f - y);
        }
        return (E ? -1 : 1) * d * Math.pow(2, f - u);
      }),
      (Os.write = function (r, i, a, u, s, f) {
        var d,
          h,
          p,
          y = f * 8 - s - 1,
          _ = (1 << y) - 1,
          b = _ >> 1,
          S = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          E = u ? 0 : f - 1,
          I = u ? 1 : -1,
          P = i < 0 || (i === 0 && 1 / i < 0) ? 1 : 0;
        for (
          i = Math.abs(i),
            isNaN(i) || i === 1 / 0
              ? ((h = isNaN(i) ? 1 : 0), (d = _))
              : ((d = Math.floor(Math.log(i) / Math.LN2)),
                i * (p = Math.pow(2, -d)) < 1 && (d--, (p *= 2)),
                d + b >= 1 ? (i += S / p) : (i += S * Math.pow(2, 1 - b)),
                i * p >= 2 && (d++, (p /= 2)),
                d + b >= _
                  ? ((h = 0), (d = _))
                  : d + b >= 1
                    ? ((h = (i * p - 1) * Math.pow(2, s)), (d = d + b))
                    : ((h = i * Math.pow(2, b - 1) * Math.pow(2, s)), (d = 0)));
          s >= 8;
          r[a + E] = h & 255, E += I, h /= 256, s -= 8
        );
        for (d = (d << s) | h, y += s; y > 0; r[a + E] = d & 255, E += I, d /= 256, y -= 8);
        r[a + E - I] |= P * 128;
      })),
    Os
  );
}
var wp;
function au() {
  return (
    wp ||
      ((wp = 1),
      (function (r) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */ const i = ZS(),
          a = Vy(),
          u =
            typeof Symbol == 'function' && typeof Symbol.for == 'function'
              ? Symbol.for('nodejs.util.inspect.custom')
              : null;
        (r.Buffer = h), (r.SlowBuffer = z), (r.INSPECT_MAX_BYTES = 50);
        const s = 2147483647;
        (r.kMaxLength = s),
          (h.TYPED_ARRAY_SUPPORT = f()),
          !h.TYPED_ARRAY_SUPPORT &&
            typeof console < 'u' &&
            typeof console.error == 'function' &&
            console.error(
              'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
            );
        function f() {
          try {
            const A = new Uint8Array(1),
              m = {
                foo: function () {
                  return 42;
                }
              };
            return Object.setPrototypeOf(m, Uint8Array.prototype), Object.setPrototypeOf(A, m), A.foo() === 42;
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
        function d(A) {
          if (A > s) throw new RangeError('The value "' + A + '" is invalid for option "size"');
          const m = new Uint8Array(A);
          return Object.setPrototypeOf(m, h.prototype), m;
        }
        function h(A, m, g) {
          if (typeof A == 'number') {
            if (typeof m == 'string')
              throw new TypeError('The "string" argument must be of type string. Received type number');
            return b(A);
          }
          return p(A, m, g);
        }
        h.poolSize = 8192;
        function p(A, m, g) {
          if (typeof A == 'string') return S(A, m);
          if (ArrayBuffer.isView(A)) return I(A);
          if (A == null)
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof A
            );
          if (
            ge(A, ArrayBuffer) ||
            (A && ge(A.buffer, ArrayBuffer)) ||
            (typeof SharedArrayBuffer < 'u' && (ge(A, SharedArrayBuffer) || (A && ge(A.buffer, SharedArrayBuffer))))
          )
            return P(A, m, g);
          if (typeof A == 'number')
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          const V = A.valueOf && A.valueOf();
          if (V != null && V !== A) return h.from(V, m, g);
          const ie = J(A);
          if (ie) return ie;
          if (typeof Symbol < 'u' && Symbol.toPrimitive != null && typeof A[Symbol.toPrimitive] == 'function')
            return h.from(A[Symbol.toPrimitive]('string'), m, g);
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof A
          );
        }
        (h.from = function (A, m, g) {
          return p(A, m, g);
        }),
          Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(h, Uint8Array);
        function y(A) {
          if (typeof A != 'number') throw new TypeError('"size" argument must be of type number');
          if (A < 0) throw new RangeError('The value "' + A + '" is invalid for option "size"');
        }
        function _(A, m, g) {
          return y(A), A <= 0 ? d(A) : m !== void 0 ? (typeof g == 'string' ? d(A).fill(m, g) : d(A).fill(m)) : d(A);
        }
        h.alloc = function (A, m, g) {
          return _(A, m, g);
        };
        function b(A) {
          return y(A), d(A < 0 ? 0 : W(A) | 0);
        }
        (h.allocUnsafe = function (A) {
          return b(A);
        }),
          (h.allocUnsafeSlow = function (A) {
            return b(A);
          });
        function S(A, m) {
          if (((typeof m != 'string' || m === '') && (m = 'utf8'), !h.isEncoding(m)))
            throw new TypeError('Unknown encoding: ' + m);
          const g = ve(A, m) | 0;
          let V = d(g);
          const ie = V.write(A, m);
          return ie !== g && (V = V.slice(0, ie)), V;
        }
        function E(A) {
          const m = A.length < 0 ? 0 : W(A.length) | 0,
            g = d(m);
          for (let V = 0; V < m; V += 1) g[V] = A[V] & 255;
          return g;
        }
        function I(A) {
          if (ge(A, Uint8Array)) {
            const m = new Uint8Array(A);
            return P(m.buffer, m.byteOffset, m.byteLength);
          }
          return E(A);
        }
        function P(A, m, g) {
          if (m < 0 || A.byteLength < m) throw new RangeError('"offset" is outside of buffer bounds');
          if (A.byteLength < m + (g || 0)) throw new RangeError('"length" is outside of buffer bounds');
          let V;
          return (
            m === void 0 && g === void 0
              ? (V = new Uint8Array(A))
              : g === void 0
                ? (V = new Uint8Array(A, m))
                : (V = new Uint8Array(A, m, g)),
            Object.setPrototypeOf(V, h.prototype),
            V
          );
        }
        function J(A) {
          if (h.isBuffer(A)) {
            const m = W(A.length) | 0,
              g = d(m);
            return g.length === 0 || A.copy(g, 0, 0, m), g;
          }
          if (A.length !== void 0) return typeof A.length != 'number' || Se(A.length) ? d(0) : E(A);
          if (A.type === 'Buffer' && Array.isArray(A.data)) return E(A.data);
        }
        function W(A) {
          if (A >= s)
            throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + s.toString(16) + ' bytes');
          return A | 0;
        }
        function z(A) {
          return +A != A && (A = 0), h.alloc(+A);
        }
        (h.isBuffer = function (m) {
          return m != null && m._isBuffer === !0 && m !== h.prototype;
        }),
          (h.compare = function (m, g) {
            if (
              (ge(m, Uint8Array) && (m = h.from(m, m.offset, m.byteLength)),
              ge(g, Uint8Array) && (g = h.from(g, g.offset, g.byteLength)),
              !h.isBuffer(m) || !h.isBuffer(g))
            )
              throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (m === g) return 0;
            let V = m.length,
              ie = g.length;
            for (let j = 0, L = Math.min(V, ie); j < L; ++j)
              if (m[j] !== g[j]) {
                (V = m[j]), (ie = g[j]);
                break;
              }
            return V < ie ? -1 : ie < V ? 1 : 0;
          }),
          (h.isEncoding = function (m) {
            switch (String(m).toLowerCase()) {
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
          (h.concat = function (m, g) {
            if (!Array.isArray(m)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (m.length === 0) return h.alloc(0);
            let V;
            if (g === void 0) for (g = 0, V = 0; V < m.length; ++V) g += m[V].length;
            const ie = h.allocUnsafe(g);
            let j = 0;
            for (V = 0; V < m.length; ++V) {
              let L = m[V];
              if (ge(L, Uint8Array))
                j + L.length > ie.length
                  ? (h.isBuffer(L) || (L = h.from(L)), L.copy(ie, j))
                  : Uint8Array.prototype.set.call(ie, L, j);
              else if (h.isBuffer(L)) L.copy(ie, j);
              else throw new TypeError('"list" argument must be an Array of Buffers');
              j += L.length;
            }
            return ie;
          });
        function ve(A, m) {
          if (h.isBuffer(A)) return A.length;
          if (ArrayBuffer.isView(A) || ge(A, ArrayBuffer)) return A.byteLength;
          if (typeof A != 'string')
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof A
            );
          const g = A.length,
            V = arguments.length > 2 && arguments[2] === !0;
          if (!V && g === 0) return 0;
          let ie = !1;
          for (;;)
            switch (m) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return g;
              case 'utf8':
              case 'utf-8':
                return ae(A).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return g * 2;
              case 'hex':
                return g >>> 1;
              case 'base64':
                return F(A).length;
              default:
                if (ie) return V ? -1 : ae(A).length;
                (m = ('' + m).toLowerCase()), (ie = !0);
            }
        }
        h.byteLength = ve;
        function qe(A, m, g) {
          let V = !1;
          if (
            ((m === void 0 || m < 0) && (m = 0),
            m > this.length ||
              ((g === void 0 || g > this.length) && (g = this.length), g <= 0) ||
              ((g >>>= 0), (m >>>= 0), g <= m))
          )
            return '';
          for (A || (A = 'utf8'); ; )
            switch (A) {
              case 'hex':
                return oe(this, m, g);
              case 'utf8':
              case 'utf-8':
                return Z(this, m, g);
              case 'ascii':
                return $(this, m, g);
              case 'latin1':
              case 'binary':
                return H(this, m, g);
              case 'base64':
                return X(this, m, g);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return U(this, m, g);
              default:
                if (V) throw new TypeError('Unknown encoding: ' + A);
                (A = (A + '').toLowerCase()), (V = !0);
            }
        }
        h.prototype._isBuffer = !0;
        function xe(A, m, g) {
          const V = A[m];
          (A[m] = A[g]), (A[g] = V);
        }
        (h.prototype.swap16 = function () {
          const m = this.length;
          if (m % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (let g = 0; g < m; g += 2) xe(this, g, g + 1);
          return this;
        }),
          (h.prototype.swap32 = function () {
            const m = this.length;
            if (m % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (let g = 0; g < m; g += 4) xe(this, g, g + 3), xe(this, g + 1, g + 2);
            return this;
          }),
          (h.prototype.swap64 = function () {
            const m = this.length;
            if (m % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (let g = 0; g < m; g += 8)
              xe(this, g, g + 7), xe(this, g + 1, g + 6), xe(this, g + 2, g + 5), xe(this, g + 3, g + 4);
            return this;
          }),
          (h.prototype.toString = function () {
            const m = this.length;
            return m === 0 ? '' : arguments.length === 0 ? Z(this, 0, m) : qe.apply(this, arguments);
          }),
          (h.prototype.toLocaleString = h.prototype.toString),
          (h.prototype.equals = function (m) {
            if (!h.isBuffer(m)) throw new TypeError('Argument must be a Buffer');
            return this === m ? !0 : h.compare(this, m) === 0;
          }),
          (h.prototype.inspect = function () {
            let m = '';
            const g = r.INSPECT_MAX_BYTES;
            return (
              (m = this.toString('hex', 0, g)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
              this.length > g && (m += ' ... '),
              '<Buffer ' + m + '>'
            );
          }),
          u && (h.prototype[u] = h.prototype.inspect),
          (h.prototype.compare = function (m, g, V, ie, j) {
            if ((ge(m, Uint8Array) && (m = h.from(m, m.offset, m.byteLength)), !h.isBuffer(m)))
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof m
              );
            if (
              (g === void 0 && (g = 0),
              V === void 0 && (V = m ? m.length : 0),
              ie === void 0 && (ie = 0),
              j === void 0 && (j = this.length),
              g < 0 || V > m.length || ie < 0 || j > this.length)
            )
              throw new RangeError('out of range index');
            if (ie >= j && g >= V) return 0;
            if (ie >= j) return -1;
            if (g >= V) return 1;
            if (((g >>>= 0), (V >>>= 0), (ie >>>= 0), (j >>>= 0), this === m)) return 0;
            let L = j - ie,
              de = V - g;
            const Ne = Math.min(L, de),
              Ce = this.slice(ie, j),
              Ie = m.slice(g, V);
            for (let et = 0; et < Ne; ++et)
              if (Ce[et] !== Ie[et]) {
                (L = Ce[et]), (de = Ie[et]);
                break;
              }
            return L < de ? -1 : de < L ? 1 : 0;
          });
        function Ee(A, m, g, V, ie) {
          if (A.length === 0) return -1;
          if (
            (typeof g == 'string'
              ? ((V = g), (g = 0))
              : g > 2147483647
                ? (g = 2147483647)
                : g < -2147483648 && (g = -2147483648),
            (g = +g),
            Se(g) && (g = ie ? 0 : A.length - 1),
            g < 0 && (g = A.length + g),
            g >= A.length)
          ) {
            if (ie) return -1;
            g = A.length - 1;
          } else if (g < 0)
            if (ie) g = 0;
            else return -1;
          if ((typeof m == 'string' && (m = h.from(m, V)), h.isBuffer(m)))
            return m.length === 0 ? -1 : De(A, m, g, V, ie);
          if (typeof m == 'number')
            return (
              (m = m & 255),
              typeof Uint8Array.prototype.indexOf == 'function'
                ? ie
                  ? Uint8Array.prototype.indexOf.call(A, m, g)
                  : Uint8Array.prototype.lastIndexOf.call(A, m, g)
                : De(A, [m], g, V, ie)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function De(A, m, g, V, ie) {
          let j = 1,
            L = A.length,
            de = m.length;
          if (
            V !== void 0 &&
            ((V = String(V).toLowerCase()), V === 'ucs2' || V === 'ucs-2' || V === 'utf16le' || V === 'utf-16le')
          ) {
            if (A.length < 2 || m.length < 2) return -1;
            (j = 2), (L /= 2), (de /= 2), (g /= 2);
          }
          function Ne(Ie, et) {
            return j === 1 ? Ie[et] : Ie.readUInt16BE(et * j);
          }
          let Ce;
          if (ie) {
            let Ie = -1;
            for (Ce = g; Ce < L; Ce++)
              if (Ne(A, Ce) === Ne(m, Ie === -1 ? 0 : Ce - Ie)) {
                if ((Ie === -1 && (Ie = Ce), Ce - Ie + 1 === de)) return Ie * j;
              } else Ie !== -1 && (Ce -= Ce - Ie), (Ie = -1);
          } else
            for (g + de > L && (g = L - de), Ce = g; Ce >= 0; Ce--) {
              let Ie = !0;
              for (let et = 0; et < de; et++)
                if (Ne(A, Ce + et) !== Ne(m, et)) {
                  Ie = !1;
                  break;
                }
              if (Ie) return Ce;
            }
          return -1;
        }
        (h.prototype.includes = function (m, g, V) {
          return this.indexOf(m, g, V) !== -1;
        }),
          (h.prototype.indexOf = function (m, g, V) {
            return Ee(this, m, g, V, !0);
          }),
          (h.prototype.lastIndexOf = function (m, g, V) {
            return Ee(this, m, g, V, !1);
          });
        function v(A, m, g, V) {
          g = Number(g) || 0;
          const ie = A.length - g;
          V ? ((V = Number(V)), V > ie && (V = ie)) : (V = ie);
          const j = m.length;
          V > j / 2 && (V = j / 2);
          let L;
          for (L = 0; L < V; ++L) {
            const de = parseInt(m.substr(L * 2, 2), 16);
            if (Se(de)) return L;
            A[g + L] = de;
          }
          return L;
        }
        function w(A, m, g, V) {
          return te(ae(m, A.length - g), A, g, V);
        }
        function N(A, m, g, V) {
          return te(M(m), A, g, V);
        }
        function G(A, m, g, V) {
          return te(F(m), A, g, V);
        }
        function Y(A, m, g, V) {
          return te(q(m, A.length - g), A, g, V);
        }
        (h.prototype.write = function (m, g, V, ie) {
          if (g === void 0) (ie = 'utf8'), (V = this.length), (g = 0);
          else if (V === void 0 && typeof g == 'string') (ie = g), (V = this.length), (g = 0);
          else if (isFinite(g))
            (g = g >>> 0), isFinite(V) ? ((V = V >>> 0), ie === void 0 && (ie = 'utf8')) : ((ie = V), (V = void 0));
          else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          const j = this.length - g;
          if (((V === void 0 || V > j) && (V = j), (m.length > 0 && (V < 0 || g < 0)) || g > this.length))
            throw new RangeError('Attempt to write outside buffer bounds');
          ie || (ie = 'utf8');
          let L = !1;
          for (;;)
            switch (ie) {
              case 'hex':
                return v(this, m, g, V);
              case 'utf8':
              case 'utf-8':
                return w(this, m, g, V);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return N(this, m, g, V);
              case 'base64':
                return G(this, m, g, V);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return Y(this, m, g, V);
              default:
                if (L) throw new TypeError('Unknown encoding: ' + ie);
                (ie = ('' + ie).toLowerCase()), (L = !0);
            }
        }),
          (h.prototype.toJSON = function () {
            return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        function X(A, m, g) {
          return m === 0 && g === A.length ? i.fromByteArray(A) : i.fromByteArray(A.slice(m, g));
        }
        function Z(A, m, g) {
          g = Math.min(A.length, g);
          const V = [];
          let ie = m;
          for (; ie < g; ) {
            const j = A[ie];
            let L = null,
              de = j > 239 ? 4 : j > 223 ? 3 : j > 191 ? 2 : 1;
            if (ie + de <= g) {
              let Ne, Ce, Ie, et;
              switch (de) {
                case 1:
                  j < 128 && (L = j);
                  break;
                case 2:
                  (Ne = A[ie + 1]), (Ne & 192) === 128 && ((et = ((j & 31) << 6) | (Ne & 63)), et > 127 && (L = et));
                  break;
                case 3:
                  (Ne = A[ie + 1]),
                    (Ce = A[ie + 2]),
                    (Ne & 192) === 128 &&
                      (Ce & 192) === 128 &&
                      ((et = ((j & 15) << 12) | ((Ne & 63) << 6) | (Ce & 63)),
                      et > 2047 && (et < 55296 || et > 57343) && (L = et));
                  break;
                case 4:
                  (Ne = A[ie + 1]),
                    (Ce = A[ie + 2]),
                    (Ie = A[ie + 3]),
                    (Ne & 192) === 128 &&
                      (Ce & 192) === 128 &&
                      (Ie & 192) === 128 &&
                      ((et = ((j & 15) << 18) | ((Ne & 63) << 12) | ((Ce & 63) << 6) | (Ie & 63)),
                      et > 65535 && et < 1114112 && (L = et));
              }
            }
            L === null
              ? ((L = 65533), (de = 1))
              : L > 65535 && ((L -= 65536), V.push(((L >>> 10) & 1023) | 55296), (L = 56320 | (L & 1023))),
              V.push(L),
              (ie += de);
          }
          return R(V);
        }
        const k = 4096;
        function R(A) {
          const m = A.length;
          if (m <= k) return String.fromCharCode.apply(String, A);
          let g = '',
            V = 0;
          for (; V < m; ) g += String.fromCharCode.apply(String, A.slice(V, (V += k)));
          return g;
        }
        function $(A, m, g) {
          let V = '';
          g = Math.min(A.length, g);
          for (let ie = m; ie < g; ++ie) V += String.fromCharCode(A[ie] & 127);
          return V;
        }
        function H(A, m, g) {
          let V = '';
          g = Math.min(A.length, g);
          for (let ie = m; ie < g; ++ie) V += String.fromCharCode(A[ie]);
          return V;
        }
        function oe(A, m, g) {
          const V = A.length;
          (!m || m < 0) && (m = 0), (!g || g < 0 || g > V) && (g = V);
          let ie = '';
          for (let j = m; j < g; ++j) ie += Be[A[j]];
          return ie;
        }
        function U(A, m, g) {
          const V = A.slice(m, g);
          let ie = '';
          for (let j = 0; j < V.length - 1; j += 2) ie += String.fromCharCode(V[j] + V[j + 1] * 256);
          return ie;
        }
        h.prototype.slice = function (m, g) {
          const V = this.length;
          (m = ~~m),
            (g = g === void 0 ? V : ~~g),
            m < 0 ? ((m += V), m < 0 && (m = 0)) : m > V && (m = V),
            g < 0 ? ((g += V), g < 0 && (g = 0)) : g > V && (g = V),
            g < m && (g = m);
          const ie = this.subarray(m, g);
          return Object.setPrototypeOf(ie, h.prototype), ie;
        };
        function ne(A, m, g) {
          if (A % 1 !== 0 || A < 0) throw new RangeError('offset is not uint');
          if (A + m > g) throw new RangeError('Trying to access beyond buffer length');
        }
        (h.prototype.readUintLE = h.prototype.readUIntLE =
          function (m, g, V) {
            (m = m >>> 0), (g = g >>> 0), V || ne(m, g, this.length);
            let ie = this[m],
              j = 1,
              L = 0;
            for (; ++L < g && (j *= 256); ) ie += this[m + L] * j;
            return ie;
          }),
          (h.prototype.readUintBE = h.prototype.readUIntBE =
            function (m, g, V) {
              (m = m >>> 0), (g = g >>> 0), V || ne(m, g, this.length);
              let ie = this[m + --g],
                j = 1;
              for (; g > 0 && (j *= 256); ) ie += this[m + --g] * j;
              return ie;
            }),
          (h.prototype.readUint8 = h.prototype.readUInt8 =
            function (m, g) {
              return (m = m >>> 0), g || ne(m, 1, this.length), this[m];
            }),
          (h.prototype.readUint16LE = h.prototype.readUInt16LE =
            function (m, g) {
              return (m = m >>> 0), g || ne(m, 2, this.length), this[m] | (this[m + 1] << 8);
            }),
          (h.prototype.readUint16BE = h.prototype.readUInt16BE =
            function (m, g) {
              return (m = m >>> 0), g || ne(m, 2, this.length), (this[m] << 8) | this[m + 1];
            }),
          (h.prototype.readUint32LE = h.prototype.readUInt32LE =
            function (m, g) {
              return (
                (m = m >>> 0),
                g || ne(m, 4, this.length),
                (this[m] | (this[m + 1] << 8) | (this[m + 2] << 16)) + this[m + 3] * 16777216
              );
            }),
          (h.prototype.readUint32BE = h.prototype.readUInt32BE =
            function (m, g) {
              return (
                (m = m >>> 0),
                g || ne(m, 4, this.length),
                this[m] * 16777216 + ((this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3])
              );
            }),
          (h.prototype.readBigUInt64LE = ze(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const g = this[m],
              V = this[m + 7];
            (g === void 0 || V === void 0) && re(m, this.length - 8);
            const ie = g + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24,
              j = this[++m] + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + V * 2 ** 24;
            return BigInt(ie) + (BigInt(j) << BigInt(32));
          })),
          (h.prototype.readBigUInt64BE = ze(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const g = this[m],
              V = this[m + 7];
            (g === void 0 || V === void 0) && re(m, this.length - 8);
            const ie = g * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m],
              j = this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + V;
            return (BigInt(ie) << BigInt(32)) + BigInt(j);
          })),
          (h.prototype.readIntLE = function (m, g, V) {
            (m = m >>> 0), (g = g >>> 0), V || ne(m, g, this.length);
            let ie = this[m],
              j = 1,
              L = 0;
            for (; ++L < g && (j *= 256); ) ie += this[m + L] * j;
            return (j *= 128), ie >= j && (ie -= Math.pow(2, 8 * g)), ie;
          }),
          (h.prototype.readIntBE = function (m, g, V) {
            (m = m >>> 0), (g = g >>> 0), V || ne(m, g, this.length);
            let ie = g,
              j = 1,
              L = this[m + --ie];
            for (; ie > 0 && (j *= 256); ) L += this[m + --ie] * j;
            return (j *= 128), L >= j && (L -= Math.pow(2, 8 * g)), L;
          }),
          (h.prototype.readInt8 = function (m, g) {
            return (m = m >>> 0), g || ne(m, 1, this.length), this[m] & 128 ? (255 - this[m] + 1) * -1 : this[m];
          }),
          (h.prototype.readInt16LE = function (m, g) {
            (m = m >>> 0), g || ne(m, 2, this.length);
            const V = this[m] | (this[m + 1] << 8);
            return V & 32768 ? V | 4294901760 : V;
          }),
          (h.prototype.readInt16BE = function (m, g) {
            (m = m >>> 0), g || ne(m, 2, this.length);
            const V = this[m + 1] | (this[m] << 8);
            return V & 32768 ? V | 4294901760 : V;
          }),
          (h.prototype.readInt32LE = function (m, g) {
            return (
              (m = m >>> 0),
              g || ne(m, 4, this.length),
              this[m] | (this[m + 1] << 8) | (this[m + 2] << 16) | (this[m + 3] << 24)
            );
          }),
          (h.prototype.readInt32BE = function (m, g) {
            return (
              (m = m >>> 0),
              g || ne(m, 4, this.length),
              (this[m] << 24) | (this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3]
            );
          }),
          (h.prototype.readBigInt64LE = ze(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const g = this[m],
              V = this[m + 7];
            (g === void 0 || V === void 0) && re(m, this.length - 8);
            const ie = this[m + 4] + this[m + 5] * 2 ** 8 + this[m + 6] * 2 ** 16 + (V << 24);
            return (
              (BigInt(ie) << BigInt(32)) + BigInt(g + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24)
            );
          })),
          (h.prototype.readBigInt64BE = ze(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const g = this[m],
              V = this[m + 7];
            (g === void 0 || V === void 0) && re(m, this.length - 8);
            const ie = (g << 24) + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m];
            return (
              (BigInt(ie) << BigInt(32)) + BigInt(this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + V)
            );
          })),
          (h.prototype.readFloatLE = function (m, g) {
            return (m = m >>> 0), g || ne(m, 4, this.length), a.read(this, m, !0, 23, 4);
          }),
          (h.prototype.readFloatBE = function (m, g) {
            return (m = m >>> 0), g || ne(m, 4, this.length), a.read(this, m, !1, 23, 4);
          }),
          (h.prototype.readDoubleLE = function (m, g) {
            return (m = m >>> 0), g || ne(m, 8, this.length), a.read(this, m, !0, 52, 8);
          }),
          (h.prototype.readDoubleBE = function (m, g) {
            return (m = m >>> 0), g || ne(m, 8, this.length), a.read(this, m, !1, 52, 8);
          });
        function we(A, m, g, V, ie, j) {
          if (!h.isBuffer(A)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (m > ie || m < j) throw new RangeError('"value" argument is out of bounds');
          if (g + V > A.length) throw new RangeError('Index out of range');
        }
        (h.prototype.writeUintLE = h.prototype.writeUIntLE =
          function (m, g, V, ie) {
            if (((m = +m), (g = g >>> 0), (V = V >>> 0), !ie)) {
              const de = Math.pow(2, 8 * V) - 1;
              we(this, m, g, V, de, 0);
            }
            let j = 1,
              L = 0;
            for (this[g] = m & 255; ++L < V && (j *= 256); ) this[g + L] = (m / j) & 255;
            return g + V;
          }),
          (h.prototype.writeUintBE = h.prototype.writeUIntBE =
            function (m, g, V, ie) {
              if (((m = +m), (g = g >>> 0), (V = V >>> 0), !ie)) {
                const de = Math.pow(2, 8 * V) - 1;
                we(this, m, g, V, de, 0);
              }
              let j = V - 1,
                L = 1;
              for (this[g + j] = m & 255; --j >= 0 && (L *= 256); ) this[g + j] = (m / L) & 255;
              return g + V;
            }),
          (h.prototype.writeUint8 = h.prototype.writeUInt8 =
            function (m, g, V) {
              return (m = +m), (g = g >>> 0), V || we(this, m, g, 1, 255, 0), (this[g] = m & 255), g + 1;
            }),
          (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
            function (m, g, V) {
              return (
                (m = +m),
                (g = g >>> 0),
                V || we(this, m, g, 2, 65535, 0),
                (this[g] = m & 255),
                (this[g + 1] = m >>> 8),
                g + 2
              );
            }),
          (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
            function (m, g, V) {
              return (
                (m = +m),
                (g = g >>> 0),
                V || we(this, m, g, 2, 65535, 0),
                (this[g] = m >>> 8),
                (this[g + 1] = m & 255),
                g + 2
              );
            }),
          (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
            function (m, g, V) {
              return (
                (m = +m),
                (g = g >>> 0),
                V || we(this, m, g, 4, 4294967295, 0),
                (this[g + 3] = m >>> 24),
                (this[g + 2] = m >>> 16),
                (this[g + 1] = m >>> 8),
                (this[g] = m & 255),
                g + 4
              );
            }),
          (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
            function (m, g, V) {
              return (
                (m = +m),
                (g = g >>> 0),
                V || we(this, m, g, 4, 4294967295, 0),
                (this[g] = m >>> 24),
                (this[g + 1] = m >>> 16),
                (this[g + 2] = m >>> 8),
                (this[g + 3] = m & 255),
                g + 4
              );
            });
        function ye(A, m, g, V, ie) {
          Q(m, V, ie, A, g, 7);
          let j = Number(m & BigInt(4294967295));
          (A[g++] = j), (j = j >> 8), (A[g++] = j), (j = j >> 8), (A[g++] = j), (j = j >> 8), (A[g++] = j);
          let L = Number((m >> BigInt(32)) & BigInt(4294967295));
          return (A[g++] = L), (L = L >> 8), (A[g++] = L), (L = L >> 8), (A[g++] = L), (L = L >> 8), (A[g++] = L), g;
        }
        function O(A, m, g, V, ie) {
          Q(m, V, ie, A, g, 7);
          let j = Number(m & BigInt(4294967295));
          (A[g + 7] = j), (j = j >> 8), (A[g + 6] = j), (j = j >> 8), (A[g + 5] = j), (j = j >> 8), (A[g + 4] = j);
          let L = Number((m >> BigInt(32)) & BigInt(4294967295));
          return (
            (A[g + 3] = L), (L = L >> 8), (A[g + 2] = L), (L = L >> 8), (A[g + 1] = L), (L = L >> 8), (A[g] = L), g + 8
          );
        }
        (h.prototype.writeBigUInt64LE = ze(function (m, g = 0) {
          return ye(this, m, g, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
          (h.prototype.writeBigUInt64BE = ze(function (m, g = 0) {
            return O(this, m, g, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (h.prototype.writeIntLE = function (m, g, V, ie) {
            if (((m = +m), (g = g >>> 0), !ie)) {
              const Ne = Math.pow(2, 8 * V - 1);
              we(this, m, g, V, Ne - 1, -Ne);
            }
            let j = 0,
              L = 1,
              de = 0;
            for (this[g] = m & 255; ++j < V && (L *= 256); )
              m < 0 && de === 0 && this[g + j - 1] !== 0 && (de = 1), (this[g + j] = (((m / L) >> 0) - de) & 255);
            return g + V;
          }),
          (h.prototype.writeIntBE = function (m, g, V, ie) {
            if (((m = +m), (g = g >>> 0), !ie)) {
              const Ne = Math.pow(2, 8 * V - 1);
              we(this, m, g, V, Ne - 1, -Ne);
            }
            let j = V - 1,
              L = 1,
              de = 0;
            for (this[g + j] = m & 255; --j >= 0 && (L *= 256); )
              m < 0 && de === 0 && this[g + j + 1] !== 0 && (de = 1), (this[g + j] = (((m / L) >> 0) - de) & 255);
            return g + V;
          }),
          (h.prototype.writeInt8 = function (m, g, V) {
            return (
              (m = +m),
              (g = g >>> 0),
              V || we(this, m, g, 1, 127, -128),
              m < 0 && (m = 255 + m + 1),
              (this[g] = m & 255),
              g + 1
            );
          }),
          (h.prototype.writeInt16LE = function (m, g, V) {
            return (
              (m = +m),
              (g = g >>> 0),
              V || we(this, m, g, 2, 32767, -32768),
              (this[g] = m & 255),
              (this[g + 1] = m >>> 8),
              g + 2
            );
          }),
          (h.prototype.writeInt16BE = function (m, g, V) {
            return (
              (m = +m),
              (g = g >>> 0),
              V || we(this, m, g, 2, 32767, -32768),
              (this[g] = m >>> 8),
              (this[g + 1] = m & 255),
              g + 2
            );
          }),
          (h.prototype.writeInt32LE = function (m, g, V) {
            return (
              (m = +m),
              (g = g >>> 0),
              V || we(this, m, g, 4, 2147483647, -2147483648),
              (this[g] = m & 255),
              (this[g + 1] = m >>> 8),
              (this[g + 2] = m >>> 16),
              (this[g + 3] = m >>> 24),
              g + 4
            );
          }),
          (h.prototype.writeInt32BE = function (m, g, V) {
            return (
              (m = +m),
              (g = g >>> 0),
              V || we(this, m, g, 4, 2147483647, -2147483648),
              m < 0 && (m = 4294967295 + m + 1),
              (this[g] = m >>> 24),
              (this[g + 1] = m >>> 16),
              (this[g + 2] = m >>> 8),
              (this[g + 3] = m & 255),
              g + 4
            );
          }),
          (h.prototype.writeBigInt64LE = ze(function (m, g = 0) {
            return ye(this, m, g, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          })),
          (h.prototype.writeBigInt64BE = ze(function (m, g = 0) {
            return O(this, m, g, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          }));
        function je(A, m, g, V, ie, j) {
          if (g + V > A.length) throw new RangeError('Index out of range');
          if (g < 0) throw new RangeError('Index out of range');
        }
        function Oe(A, m, g, V, ie) {
          return (m = +m), (g = g >>> 0), ie || je(A, m, g, 4), a.write(A, m, g, V, 23, 4), g + 4;
        }
        (h.prototype.writeFloatLE = function (m, g, V) {
          return Oe(this, m, g, !0, V);
        }),
          (h.prototype.writeFloatBE = function (m, g, V) {
            return Oe(this, m, g, !1, V);
          });
        function Pe(A, m, g, V, ie) {
          return (m = +m), (g = g >>> 0), ie || je(A, m, g, 8), a.write(A, m, g, V, 52, 8), g + 8;
        }
        (h.prototype.writeDoubleLE = function (m, g, V) {
          return Pe(this, m, g, !0, V);
        }),
          (h.prototype.writeDoubleBE = function (m, g, V) {
            return Pe(this, m, g, !1, V);
          }),
          (h.prototype.copy = function (m, g, V, ie) {
            if (!h.isBuffer(m)) throw new TypeError('argument should be a Buffer');
            if (
              (V || (V = 0),
              !ie && ie !== 0 && (ie = this.length),
              g >= m.length && (g = m.length),
              g || (g = 0),
              ie > 0 && ie < V && (ie = V),
              ie === V || m.length === 0 || this.length === 0)
            )
              return 0;
            if (g < 0) throw new RangeError('targetStart out of bounds');
            if (V < 0 || V >= this.length) throw new RangeError('Index out of range');
            if (ie < 0) throw new RangeError('sourceEnd out of bounds');
            ie > this.length && (ie = this.length), m.length - g < ie - V && (ie = m.length - g + V);
            const j = ie - V;
            return (
              this === m && typeof Uint8Array.prototype.copyWithin == 'function'
                ? this.copyWithin(g, V, ie)
                : Uint8Array.prototype.set.call(m, this.subarray(V, ie), g),
              j
            );
          }),
          (h.prototype.fill = function (m, g, V, ie) {
            if (typeof m == 'string') {
              if (
                (typeof g == 'string'
                  ? ((ie = g), (g = 0), (V = this.length))
                  : typeof V == 'string' && ((ie = V), (V = this.length)),
                ie !== void 0 && typeof ie != 'string')
              )
                throw new TypeError('encoding must be a string');
              if (typeof ie == 'string' && !h.isEncoding(ie)) throw new TypeError('Unknown encoding: ' + ie);
              if (m.length === 1) {
                const L = m.charCodeAt(0);
                ((ie === 'utf8' && L < 128) || ie === 'latin1') && (m = L);
              }
            } else typeof m == 'number' ? (m = m & 255) : typeof m == 'boolean' && (m = Number(m));
            if (g < 0 || this.length < g || this.length < V) throw new RangeError('Out of range index');
            if (V <= g) return this;
            (g = g >>> 0), (V = V === void 0 ? this.length : V >>> 0), m || (m = 0);
            let j;
            if (typeof m == 'number') for (j = g; j < V; ++j) this[j] = m;
            else {
              const L = h.isBuffer(m) ? m : h.from(m, ie),
                de = L.length;
              if (de === 0) throw new TypeError('The value "' + m + '" is invalid for argument "value"');
              for (j = 0; j < V - g; ++j) this[j + g] = L[j % de];
            }
            return this;
          });
        const Me = {};
        function ke(A, m, g) {
          Me[A] = class extends g {
            constructor() {
              super(),
                Object.defineProperty(this, 'message', {
                  value: m.apply(this, arguments),
                  writable: !0,
                  configurable: !0
                }),
                (this.name = `${this.name} [${A}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return A;
            }
            set code(ie) {
              Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: ie, writable: !0 });
            }
            toString() {
              return `${this.name} [${A}]: ${this.message}`;
            }
          };
        }
        ke(
          'ERR_BUFFER_OUT_OF_BOUNDS',
          function (A) {
            return A ? `${A} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
          },
          RangeError
        ),
          ke(
            'ERR_INVALID_ARG_TYPE',
            function (A, m) {
              return `The "${A}" argument must be of type number. Received type ${typeof m}`;
            },
            TypeError
          ),
          ke(
            'ERR_OUT_OF_RANGE',
            function (A, m, g) {
              let V = `The value of "${A}" is out of range.`,
                ie = g;
              return (
                Number.isInteger(g) && Math.abs(g) > 2 ** 32
                  ? (ie = B(String(g)))
                  : typeof g == 'bigint' &&
                    ((ie = String(g)),
                    (g > BigInt(2) ** BigInt(32) || g < -(BigInt(2) ** BigInt(32))) && (ie = B(ie)),
                    (ie += 'n')),
                (V += ` It must be ${m}. Received ${ie}`),
                V
              );
            },
            RangeError
          );
        function B(A) {
          let m = '',
            g = A.length;
          const V = A[0] === '-' ? 1 : 0;
          for (; g >= V + 4; g -= 3) m = `_${A.slice(g - 3, g)}${m}`;
          return `${A.slice(0, g)}${m}`;
        }
        function D(A, m, g) {
          se(m, 'offset'), (A[m] === void 0 || A[m + g] === void 0) && re(m, A.length - (g + 1));
        }
        function Q(A, m, g, V, ie, j) {
          if (A > g || A < m) {
            const L = typeof m == 'bigint' ? 'n' : '';
            let de;
            throw (
              (m === 0 || m === BigInt(0)
                ? (de = `>= 0${L} and < 2${L} ** ${(j + 1) * 8}${L}`)
                : (de = `>= -(2${L} ** ${(j + 1) * 8 - 1}${L}) and < 2 ** ${(j + 1) * 8 - 1}${L}`),
              new Me.ERR_OUT_OF_RANGE('value', de, A))
            );
          }
          D(V, ie, j);
        }
        function se(A, m) {
          if (typeof A != 'number') throw new Me.ERR_INVALID_ARG_TYPE(m, 'number', A);
        }
        function re(A, m, g) {
          throw Math.floor(A) !== A
            ? (se(A, g), new Me.ERR_OUT_OF_RANGE('offset', 'an integer', A))
            : m < 0
              ? new Me.ERR_BUFFER_OUT_OF_BOUNDS()
              : new Me.ERR_OUT_OF_RANGE('offset', `>= 0 and <= ${m}`, A);
        }
        const ue = /[^+/0-9A-Za-z-_]/g;
        function he(A) {
          if (((A = A.split('=')[0]), (A = A.trim().replace(ue, '')), A.length < 2)) return '';
          for (; A.length % 4 !== 0; ) A = A + '=';
          return A;
        }
        function ae(A, m) {
          m = m || 1 / 0;
          let g;
          const V = A.length;
          let ie = null;
          const j = [];
          for (let L = 0; L < V; ++L) {
            if (((g = A.charCodeAt(L)), g > 55295 && g < 57344)) {
              if (!ie) {
                if (g > 56319) {
                  (m -= 3) > -1 && j.push(239, 191, 189);
                  continue;
                } else if (L + 1 === V) {
                  (m -= 3) > -1 && j.push(239, 191, 189);
                  continue;
                }
                ie = g;
                continue;
              }
              if (g < 56320) {
                (m -= 3) > -1 && j.push(239, 191, 189), (ie = g);
                continue;
              }
              g = (((ie - 55296) << 10) | (g - 56320)) + 65536;
            } else ie && (m -= 3) > -1 && j.push(239, 191, 189);
            if (((ie = null), g < 128)) {
              if ((m -= 1) < 0) break;
              j.push(g);
            } else if (g < 2048) {
              if ((m -= 2) < 0) break;
              j.push((g >> 6) | 192, (g & 63) | 128);
            } else if (g < 65536) {
              if ((m -= 3) < 0) break;
              j.push((g >> 12) | 224, ((g >> 6) & 63) | 128, (g & 63) | 128);
            } else if (g < 1114112) {
              if ((m -= 4) < 0) break;
              j.push((g >> 18) | 240, ((g >> 12) & 63) | 128, ((g >> 6) & 63) | 128, (g & 63) | 128);
            } else throw new Error('Invalid code point');
          }
          return j;
        }
        function M(A) {
          const m = [];
          for (let g = 0; g < A.length; ++g) m.push(A.charCodeAt(g) & 255);
          return m;
        }
        function q(A, m) {
          let g, V, ie;
          const j = [];
          for (let L = 0; L < A.length && !((m -= 2) < 0); ++L)
            (g = A.charCodeAt(L)), (V = g >> 8), (ie = g % 256), j.push(ie), j.push(V);
          return j;
        }
        function F(A) {
          return i.toByteArray(he(A));
        }
        function te(A, m, g, V) {
          let ie;
          for (ie = 0; ie < V && !(ie + g >= m.length || ie >= A.length); ++ie) m[ie + g] = A[ie];
          return ie;
        }
        function ge(A, m) {
          return (
            A instanceof m ||
            (A != null && A.constructor != null && A.constructor.name != null && A.constructor.name === m.name)
          );
        }
        function Se(A) {
          return A !== A;
        }
        const Be = (function () {
          const A = '0123456789abcdef',
            m = new Array(256);
          for (let g = 0; g < 16; ++g) {
            const V = g * 16;
            for (let ie = 0; ie < 16; ++ie) m[V + ie] = A[g] + A[ie];
          }
          return m;
        })();
        function ze(A) {
          return typeof BigInt > 'u' ? rt : A;
        }
        function rt() {
          throw new Error('BigInt not supported');
        }
      })(Bf)),
    Bf
  );
}
var Us = { exports: {} },
  QS = Us.exports,
  Ep;
function rc() {
  return (
    Ep ||
      ((Ep = 1),
      (function (r) {
        (function (i) {
          var a,
            u = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            s = Math.ceil,
            f = Math.floor,
            d = '[BigNumber Error] ',
            h = d + 'Number primitive has more than 15 significant digits: ',
            p = 1e14,
            y = 14,
            _ = 9007199254740991,
            b = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            S = 1e7,
            E = 1e9;
          function I(Ee) {
            var De,
              v,
              w,
              N = (O.prototype = { constructor: O, toString: null, valueOf: null }),
              G = new O(1),
              Y = 20,
              X = 4,
              Z = -7,
              k = 21,
              R = -1e7,
              $ = 1e7,
              H = !1,
              oe = 1,
              U = 0,
              ne = {
                prefix: '',
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ',',
                decimalSeparator: '.',
                fractionGroupSize: 0,
                fractionGroupSeparator: ' ',
                suffix: ''
              },
              we = '0123456789abcdefghijklmnopqrstuvwxyz',
              ye = !0;
            function O(B, D) {
              var Q,
                se,
                re,
                ue,
                he,
                ae,
                M,
                q,
                F = this;
              if (!(F instanceof O)) return new O(B, D);
              if (D == null) {
                if (B && B._isBigNumber === !0) {
                  (F.s = B.s),
                    !B.c || B.e > $
                      ? (F.c = F.e = null)
                      : B.e < R
                        ? (F.c = [(F.e = 0)])
                        : ((F.e = B.e), (F.c = B.c.slice()));
                  return;
                }
                if ((ae = typeof B == 'number') && B * 0 == 0) {
                  if (((F.s = 1 / B < 0 ? ((B = -B), -1) : 1), B === ~~B)) {
                    for (ue = 0, he = B; he >= 10; he /= 10, ue++);
                    ue > $ ? (F.c = F.e = null) : ((F.e = ue), (F.c = [B]));
                    return;
                  }
                  q = String(B);
                } else {
                  if (!u.test((q = String(B)))) return w(F, q, ae);
                  F.s = q.charCodeAt(0) == 45 ? ((q = q.slice(1)), -1) : 1;
                }
                (ue = q.indexOf('.')) > -1 && (q = q.replace('.', '')),
                  (he = q.search(/e/i)) > 0
                    ? (ue < 0 && (ue = he), (ue += +q.slice(he + 1)), (q = q.substring(0, he)))
                    : ue < 0 && (ue = q.length);
              } else {
                if ((z(D, 2, we.length, 'Base'), D == 10 && ye)) return (F = new O(B)), Me(F, Y + F.e + 1, X);
                if (((q = String(B)), (ae = typeof B == 'number'))) {
                  if (B * 0 != 0) return w(F, q, ae, D);
                  if (
                    ((F.s = 1 / B < 0 ? ((q = q.slice(1)), -1) : 1), O.DEBUG && q.replace(/^0\.0*|\./, '').length > 15)
                  )
                    throw Error(h + B);
                } else F.s = q.charCodeAt(0) === 45 ? ((q = q.slice(1)), -1) : 1;
                for (Q = we.slice(0, D), ue = he = 0, M = q.length; he < M; he++)
                  if (Q.indexOf((se = q.charAt(he))) < 0) {
                    if (se == '.') {
                      if (he > ue) {
                        ue = M;
                        continue;
                      }
                    } else if (
                      !re &&
                      ((q == q.toUpperCase() && (q = q.toLowerCase())) ||
                        (q == q.toLowerCase() && (q = q.toUpperCase())))
                    ) {
                      (re = !0), (he = -1), (ue = 0);
                      continue;
                    }
                    return w(F, String(B), ae, D);
                  }
                (ae = !1),
                  (q = v(q, D, 10, F.s)),
                  (ue = q.indexOf('.')) > -1 ? (q = q.replace('.', '')) : (ue = q.length);
              }
              for (he = 0; q.charCodeAt(he) === 48; he++);
              for (M = q.length; q.charCodeAt(--M) === 48; );
              if ((q = q.slice(he, ++M))) {
                if (((M -= he), ae && O.DEBUG && M > 15 && (B > _ || B !== f(B)))) throw Error(h + F.s * B);
                if ((ue = ue - he - 1) > $) F.c = F.e = null;
                else if (ue < R) F.c = [(F.e = 0)];
                else {
                  if (((F.e = ue), (F.c = []), (he = (ue + 1) % y), ue < 0 && (he += y), he < M)) {
                    for (he && F.c.push(+q.slice(0, he)), M -= y; he < M; ) F.c.push(+q.slice(he, (he += y)));
                    he = y - (q = q.slice(he)).length;
                  } else he -= M;
                  for (; he--; q += '0');
                  F.c.push(+q);
                }
              } else F.c = [(F.e = 0)];
            }
            (O.clone = I),
              (O.ROUND_UP = 0),
              (O.ROUND_DOWN = 1),
              (O.ROUND_CEIL = 2),
              (O.ROUND_FLOOR = 3),
              (O.ROUND_HALF_UP = 4),
              (O.ROUND_HALF_DOWN = 5),
              (O.ROUND_HALF_EVEN = 6),
              (O.ROUND_HALF_CEIL = 7),
              (O.ROUND_HALF_FLOOR = 8),
              (O.EUCLID = 9),
              (O.config = O.set =
                function (B) {
                  var D, Q;
                  if (B != null)
                    if (typeof B == 'object') {
                      if (
                        (B.hasOwnProperty((D = 'DECIMAL_PLACES')) && ((Q = B[D]), z(Q, 0, E, D), (Y = Q)),
                        B.hasOwnProperty((D = 'ROUNDING_MODE')) && ((Q = B[D]), z(Q, 0, 8, D), (X = Q)),
                        B.hasOwnProperty((D = 'EXPONENTIAL_AT')) &&
                          ((Q = B[D]),
                          Q && Q.pop
                            ? (z(Q[0], -1e9, 0, D), z(Q[1], 0, E, D), (Z = Q[0]), (k = Q[1]))
                            : (z(Q, -1e9, E, D), (Z = -(k = Q < 0 ? -Q : Q)))),
                        B.hasOwnProperty((D = 'RANGE')))
                      )
                        if (((Q = B[D]), Q && Q.pop)) z(Q[0], -1e9, -1, D), z(Q[1], 1, E, D), (R = Q[0]), ($ = Q[1]);
                        else if ((z(Q, -1e9, E, D), Q)) R = -($ = Q < 0 ? -Q : Q);
                        else throw Error(d + D + ' cannot be zero: ' + Q);
                      if (B.hasOwnProperty((D = 'CRYPTO')))
                        if (((Q = B[D]), Q === !!Q))
                          if (Q)
                            if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) H = Q;
                            else throw ((H = !Q), Error(d + 'crypto unavailable'));
                          else H = Q;
                        else throw Error(d + D + ' not true or false: ' + Q);
                      if (
                        (B.hasOwnProperty((D = 'MODULO_MODE')) && ((Q = B[D]), z(Q, 0, 9, D), (oe = Q)),
                        B.hasOwnProperty((D = 'POW_PRECISION')) && ((Q = B[D]), z(Q, 0, E, D), (U = Q)),
                        B.hasOwnProperty((D = 'FORMAT')))
                      )
                        if (((Q = B[D]), typeof Q == 'object')) ne = Q;
                        else throw Error(d + D + ' not an object: ' + Q);
                      if (B.hasOwnProperty((D = 'ALPHABET')))
                        if (((Q = B[D]), typeof Q == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(Q)))
                          (ye = Q.slice(0, 10) == '0123456789'), (we = Q);
                        else throw Error(d + D + ' invalid: ' + Q);
                    } else throw Error(d + 'Object expected: ' + B);
                  return {
                    DECIMAL_PLACES: Y,
                    ROUNDING_MODE: X,
                    EXPONENTIAL_AT: [Z, k],
                    RANGE: [R, $],
                    CRYPTO: H,
                    MODULO_MODE: oe,
                    POW_PRECISION: U,
                    FORMAT: ne,
                    ALPHABET: we
                  };
                }),
              (O.isBigNumber = function (B) {
                if (!B || B._isBigNumber !== !0) return !1;
                if (!O.DEBUG) return !0;
                var D,
                  Q,
                  se = B.c,
                  re = B.e,
                  ue = B.s;
                e: if ({}.toString.call(se) == '[object Array]') {
                  if ((ue === 1 || ue === -1) && re >= -1e9 && re <= E && re === f(re)) {
                    if (se[0] === 0) {
                      if (re === 0 && se.length === 1) return !0;
                      break e;
                    }
                    if (((D = (re + 1) % y), D < 1 && (D += y), String(se[0]).length == D)) {
                      for (D = 0; D < se.length; D++) if (((Q = se[D]), Q < 0 || Q >= p || Q !== f(Q))) break e;
                      if (Q !== 0) return !0;
                    }
                  }
                } else if (se === null && re === null && (ue === null || ue === 1 || ue === -1)) return !0;
                throw Error(d + 'Invalid BigNumber: ' + B);
              }),
              (O.maximum = O.max =
                function () {
                  return Oe(arguments, -1);
                }),
              (O.minimum = O.min =
                function () {
                  return Oe(arguments, 1);
                }),
              (O.random = (function () {
                var B = 9007199254740992,
                  D =
                    (Math.random() * B) & 2097151
                      ? function () {
                          return f(Math.random() * B);
                        }
                      : function () {
                          return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
                        };
                return function (Q) {
                  var se,
                    re,
                    ue,
                    he,
                    ae,
                    M = 0,
                    q = [],
                    F = new O(G);
                  if ((Q == null ? (Q = Y) : z(Q, 0, E), (he = s(Q / y)), H))
                    if (crypto.getRandomValues) {
                      for (se = crypto.getRandomValues(new Uint32Array((he *= 2))); M < he; )
                        (ae = se[M] * 131072 + (se[M + 1] >>> 11)),
                          ae >= 9e15
                            ? ((re = crypto.getRandomValues(new Uint32Array(2))), (se[M] = re[0]), (se[M + 1] = re[1]))
                            : (q.push(ae % 1e14), (M += 2));
                      M = he / 2;
                    } else if (crypto.randomBytes) {
                      for (se = crypto.randomBytes((he *= 7)); M < he; )
                        (ae =
                          (se[M] & 31) * 281474976710656 +
                          se[M + 1] * 1099511627776 +
                          se[M + 2] * 4294967296 +
                          se[M + 3] * 16777216 +
                          (se[M + 4] << 16) +
                          (se[M + 5] << 8) +
                          se[M + 6]),
                          ae >= 9e15 ? crypto.randomBytes(7).copy(se, M) : (q.push(ae % 1e14), (M += 7));
                      M = he / 7;
                    } else throw ((H = !1), Error(d + 'crypto unavailable'));
                  if (!H) for (; M < he; ) (ae = D()), ae < 9e15 && (q[M++] = ae % 1e14);
                  for (
                    he = q[--M], Q %= y, he && Q && ((ae = b[y - Q]), (q[M] = f(he / ae) * ae));
                    q[M] === 0;
                    q.pop(), M--
                  );
                  if (M < 0) q = [(ue = 0)];
                  else {
                    for (ue = -1; q[0] === 0; q.splice(0, 1), ue -= y);
                    for (M = 1, ae = q[0]; ae >= 10; ae /= 10, M++);
                    M < y && (ue -= y - M);
                  }
                  return (F.e = ue), (F.c = q), F;
                };
              })()),
              (O.sum = function () {
                for (var B = 1, D = arguments, Q = new O(D[0]); B < D.length; ) Q = Q.plus(D[B++]);
                return Q;
              }),
              (v = (function () {
                var B = '0123456789';
                function D(Q, se, re, ue) {
                  for (var he, ae = [0], M, q = 0, F = Q.length; q < F; ) {
                    for (M = ae.length; M--; ae[M] *= se);
                    for (ae[0] += ue.indexOf(Q.charAt(q++)), he = 0; he < ae.length; he++)
                      ae[he] > re - 1 &&
                        (ae[he + 1] == null && (ae[he + 1] = 0), (ae[he + 1] += (ae[he] / re) | 0), (ae[he] %= re));
                  }
                  return ae.reverse();
                }
                return function (Q, se, re, ue, he) {
                  var ae,
                    M,
                    q,
                    F,
                    te,
                    ge,
                    Se,
                    Be,
                    ze = Q.indexOf('.'),
                    rt = Y,
                    A = X;
                  for (
                    ze >= 0 &&
                      ((F = U),
                      (U = 0),
                      (Q = Q.replace('.', '')),
                      (Be = new O(se)),
                      (ge = Be.pow(Q.length - ze)),
                      (U = F),
                      (Be.c = D(xe(J(ge.c), ge.e, '0'), 10, re, B)),
                      (Be.e = Be.c.length)),
                      Se = D(Q, se, re, he ? ((ae = we), B) : ((ae = B), we)),
                      q = F = Se.length;
                    Se[--F] == 0;
                    Se.pop()
                  );
                  if (!Se[0]) return ae.charAt(0);
                  if (
                    (ze < 0
                      ? --q
                      : ((ge.c = Se),
                        (ge.e = q),
                        (ge.s = ue),
                        (ge = De(ge, Be, rt, A, re)),
                        (Se = ge.c),
                        (te = ge.r),
                        (q = ge.e)),
                    (M = q + rt + 1),
                    (ze = Se[M]),
                    (F = re / 2),
                    (te = te || M < 0 || Se[M + 1] != null),
                    (te =
                      A < 4
                        ? (ze != null || te) && (A == 0 || A == (ge.s < 0 ? 3 : 2))
                        : ze > F ||
                          (ze == F && (A == 4 || te || (A == 6 && Se[M - 1] & 1) || A == (ge.s < 0 ? 8 : 7)))),
                    M < 1 || !Se[0])
                  )
                    Q = te ? xe(ae.charAt(1), -rt, ae.charAt(0)) : ae.charAt(0);
                  else {
                    if (((Se.length = M), te))
                      for (--re; ++Se[--M] > re; ) (Se[M] = 0), M || (++q, (Se = [1].concat(Se)));
                    for (F = Se.length; !Se[--F]; );
                    for (ze = 0, Q = ''; ze <= F; Q += ae.charAt(Se[ze++]));
                    Q = xe(Q, q, ae.charAt(0));
                  }
                  return Q;
                };
              })()),
              (De = (function () {
                function B(se, re, ue) {
                  var he,
                    ae,
                    M,
                    q,
                    F = 0,
                    te = se.length,
                    ge = re % S,
                    Se = (re / S) | 0;
                  for (se = se.slice(); te--; )
                    (M = se[te] % S),
                      (q = (se[te] / S) | 0),
                      (he = Se * M + q * ge),
                      (ae = ge * M + (he % S) * S + F),
                      (F = ((ae / ue) | 0) + ((he / S) | 0) + Se * q),
                      (se[te] = ae % ue);
                  return F && (se = [F].concat(se)), se;
                }
                function D(se, re, ue, he) {
                  var ae, M;
                  if (ue != he) M = ue > he ? 1 : -1;
                  else
                    for (ae = M = 0; ae < ue; ae++)
                      if (se[ae] != re[ae]) {
                        M = se[ae] > re[ae] ? 1 : -1;
                        break;
                      }
                  return M;
                }
                function Q(se, re, ue, he) {
                  for (var ae = 0; ue--; )
                    (se[ue] -= ae), (ae = se[ue] < re[ue] ? 1 : 0), (se[ue] = ae * he + se[ue] - re[ue]);
                  for (; !se[0] && se.length > 1; se.splice(0, 1));
                }
                return function (se, re, ue, he, ae) {
                  var M,
                    q,
                    F,
                    te,
                    ge,
                    Se,
                    Be,
                    ze,
                    rt,
                    A,
                    m,
                    g,
                    V,
                    ie,
                    j,
                    L,
                    de,
                    Ne = se.s == re.s ? 1 : -1,
                    Ce = se.c,
                    Ie = re.c;
                  if (!Ce || !Ce[0] || !Ie || !Ie[0])
                    return new O(
                      !se.s || !re.s || (Ce ? Ie && Ce[0] == Ie[0] : !Ie)
                        ? NaN
                        : (Ce && Ce[0] == 0) || !Ie
                          ? Ne * 0
                          : Ne / 0
                    );
                  for (
                    ze = new O(Ne),
                      rt = ze.c = [],
                      q = se.e - re.e,
                      Ne = ue + q + 1,
                      ae || ((ae = p), (q = P(se.e / y) - P(re.e / y)), (Ne = (Ne / y) | 0)),
                      F = 0;
                    Ie[F] == (Ce[F] || 0);
                    F++
                  );
                  if ((Ie[F] > (Ce[F] || 0) && q--, Ne < 0)) rt.push(1), (te = !0);
                  else {
                    for (
                      ie = Ce.length,
                        L = Ie.length,
                        F = 0,
                        Ne += 2,
                        ge = f(ae / (Ie[0] + 1)),
                        ge > 1 && ((Ie = B(Ie, ge, ae)), (Ce = B(Ce, ge, ae)), (L = Ie.length), (ie = Ce.length)),
                        V = L,
                        A = Ce.slice(0, L),
                        m = A.length;
                      m < L;
                      A[m++] = 0
                    );
                    (de = Ie.slice()), (de = [0].concat(de)), (j = Ie[0]), Ie[1] >= ae / 2 && j++;
                    do {
                      if (((ge = 0), (M = D(Ie, A, L, m)), M < 0)) {
                        if (((g = A[0]), L != m && (g = g * ae + (A[1] || 0)), (ge = f(g / j)), ge > 1))
                          for (
                            ge >= ae && (ge = ae - 1), Se = B(Ie, ge, ae), Be = Se.length, m = A.length;
                            D(Se, A, Be, m) == 1;

                          )
                            ge--, Q(Se, L < Be ? de : Ie, Be, ae), (Be = Se.length), (M = 1);
                        else ge == 0 && (M = ge = 1), (Se = Ie.slice()), (Be = Se.length);
                        if ((Be < m && (Se = [0].concat(Se)), Q(A, Se, m, ae), (m = A.length), M == -1))
                          for (; D(Ie, A, L, m) < 1; ) ge++, Q(A, L < m ? de : Ie, m, ae), (m = A.length);
                      } else M === 0 && (ge++, (A = [0]));
                      (rt[F++] = ge), A[0] ? (A[m++] = Ce[V] || 0) : ((A = [Ce[V]]), (m = 1));
                    } while ((V++ < ie || A[0] != null) && Ne--);
                    (te = A[0] != null), rt[0] || rt.splice(0, 1);
                  }
                  if (ae == p) {
                    for (F = 1, Ne = rt[0]; Ne >= 10; Ne /= 10, F++);
                    Me(ze, ue + (ze.e = F + q * y - 1) + 1, he, te);
                  } else (ze.e = q), (ze.r = +te);
                  return ze;
                };
              })());
            function je(B, D, Q, se) {
              var re, ue, he, ae, M;
              if ((Q == null ? (Q = X) : z(Q, 0, 8), !B.c)) return B.toString();
              if (((re = B.c[0]), (he = B.e), D == null))
                (M = J(B.c)), (M = se == 1 || (se == 2 && (he <= Z || he >= k)) ? qe(M, he) : xe(M, he, '0'));
              else if (
                ((B = Me(new O(B), D, Q)),
                (ue = B.e),
                (M = J(B.c)),
                (ae = M.length),
                se == 1 || (se == 2 && (D <= ue || ue <= Z)))
              ) {
                for (; ae < D; M += '0', ae++);
                M = qe(M, ue);
              } else if (((D -= he), (M = xe(M, ue, '0')), ue + 1 > ae)) {
                if (--D > 0) for (M += '.'; D--; M += '0');
              } else if (((D += ue - ae), D > 0)) for (ue + 1 == ae && (M += '.'); D--; M += '0');
              return B.s < 0 && re ? '-' + M : M;
            }
            function Oe(B, D) {
              for (var Q, se, re = 1, ue = new O(B[0]); re < B.length; re++)
                (se = new O(B[re])), (!se.s || (Q = W(ue, se)) === D || (Q === 0 && ue.s === D)) && (ue = se);
              return ue;
            }
            function Pe(B, D, Q) {
              for (var se = 1, re = D.length; !D[--re]; D.pop());
              for (re = D[0]; re >= 10; re /= 10, se++);
              return (
                (Q = se + Q * y - 1) > $ ? (B.c = B.e = null) : Q < R ? (B.c = [(B.e = 0)]) : ((B.e = Q), (B.c = D)), B
              );
            }
            w = (function () {
              var B = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                D = /^([^.]+)\.$/,
                Q = /^\.([^.]+)$/,
                se = /^-?(Infinity|NaN)$/,
                re = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (ue, he, ae, M) {
                var q,
                  F = ae ? he : he.replace(re, '');
                if (se.test(F)) ue.s = isNaN(F) ? null : F < 0 ? -1 : 1;
                else {
                  if (
                    !ae &&
                    ((F = F.replace(B, function (te, ge, Se) {
                      return (q = (Se = Se.toLowerCase()) == 'x' ? 16 : Se == 'b' ? 2 : 8), !M || M == q ? ge : te;
                    })),
                    M && ((q = M), (F = F.replace(D, '$1').replace(Q, '0.$1'))),
                    he != F)
                  )
                    return new O(F, q);
                  if (O.DEBUG) throw Error(d + 'Not a' + (M ? ' base ' + M : '') + ' number: ' + he);
                  ue.s = null;
                }
                ue.c = ue.e = null;
              };
            })();
            function Me(B, D, Q, se) {
              var re,
                ue,
                he,
                ae,
                M,
                q,
                F,
                te = B.c,
                ge = b;
              if (te) {
                e: {
                  for (re = 1, ae = te[0]; ae >= 10; ae /= 10, re++);
                  if (((ue = D - re), ue < 0))
                    (ue += y), (he = D), (M = te[(q = 0)]), (F = f((M / ge[re - he - 1]) % 10));
                  else if (((q = s((ue + 1) / y)), q >= te.length))
                    if (se) {
                      for (; te.length <= q; te.push(0));
                      (M = F = 0), (re = 1), (ue %= y), (he = ue - y + 1);
                    } else break e;
                  else {
                    for (M = ae = te[q], re = 1; ae >= 10; ae /= 10, re++);
                    (ue %= y), (he = ue - y + re), (F = he < 0 ? 0 : f((M / ge[re - he - 1]) % 10));
                  }
                  if (
                    ((se = se || D < 0 || te[q + 1] != null || (he < 0 ? M : M % ge[re - he - 1])),
                    (se =
                      Q < 4
                        ? (F || se) && (Q == 0 || Q == (B.s < 0 ? 3 : 2))
                        : F > 5 ||
                          (F == 5 &&
                            (Q == 4 ||
                              se ||
                              (Q == 6 && (ue > 0 ? (he > 0 ? M / ge[re - he] : 0) : te[q - 1]) % 10 & 1) ||
                              Q == (B.s < 0 ? 8 : 7)))),
                    D < 1 || !te[0])
                  )
                    return (
                      (te.length = 0),
                      se ? ((D -= B.e + 1), (te[0] = ge[(y - (D % y)) % y]), (B.e = -D || 0)) : (te[0] = B.e = 0),
                      B
                    );
                  if (
                    (ue == 0
                      ? ((te.length = q), (ae = 1), q--)
                      : ((te.length = q + 1),
                        (ae = ge[y - ue]),
                        (te[q] = he > 0 ? f((M / ge[re - he]) % ge[he]) * ae : 0)),
                    se)
                  )
                    for (;;)
                      if (q == 0) {
                        for (ue = 1, he = te[0]; he >= 10; he /= 10, ue++);
                        for (he = te[0] += ae, ae = 1; he >= 10; he /= 10, ae++);
                        ue != ae && (B.e++, te[0] == p && (te[0] = 1));
                        break;
                      } else {
                        if (((te[q] += ae), te[q] != p)) break;
                        (te[q--] = 0), (ae = 1);
                      }
                  for (ue = te.length; te[--ue] === 0; te.pop());
                }
                B.e > $ ? (B.c = B.e = null) : B.e < R && (B.c = [(B.e = 0)]);
              }
              return B;
            }
            function ke(B) {
              var D,
                Q = B.e;
              return Q === null
                ? B.toString()
                : ((D = J(B.c)), (D = Q <= Z || Q >= k ? qe(D, Q) : xe(D, Q, '0')), B.s < 0 ? '-' + D : D);
            }
            return (
              (N.absoluteValue = N.abs =
                function () {
                  var B = new O(this);
                  return B.s < 0 && (B.s = 1), B;
                }),
              (N.comparedTo = function (B, D) {
                return W(this, new O(B, D));
              }),
              (N.decimalPlaces = N.dp =
                function (B, D) {
                  var Q,
                    se,
                    re,
                    ue = this;
                  if (B != null) return z(B, 0, E), D == null ? (D = X) : z(D, 0, 8), Me(new O(ue), B + ue.e + 1, D);
                  if (!(Q = ue.c)) return null;
                  if (((se = ((re = Q.length - 1) - P(this.e / y)) * y), (re = Q[re])))
                    for (; re % 10 == 0; re /= 10, se--);
                  return se < 0 && (se = 0), se;
                }),
              (N.dividedBy = N.div =
                function (B, D) {
                  return De(this, new O(B, D), Y, X);
                }),
              (N.dividedToIntegerBy = N.idiv =
                function (B, D) {
                  return De(this, new O(B, D), 0, 1);
                }),
              (N.exponentiatedBy = N.pow =
                function (B, D) {
                  var Q,
                    se,
                    re,
                    ue,
                    he,
                    ae,
                    M,
                    q,
                    F,
                    te = this;
                  if (((B = new O(B)), B.c && !B.isInteger())) throw Error(d + 'Exponent not an integer: ' + ke(B));
                  if (
                    (D != null && (D = new O(D)),
                    (ae = B.e > 14),
                    !te.c || !te.c[0] || (te.c[0] == 1 && !te.e && te.c.length == 1) || !B.c || !B.c[0])
                  )
                    return (F = new O(Math.pow(+ke(te), ae ? B.s * (2 - ve(B)) : +ke(B)))), D ? F.mod(D) : F;
                  if (((M = B.s < 0), D)) {
                    if (D.c ? !D.c[0] : !D.s) return new O(NaN);
                    (se = !M && te.isInteger() && D.isInteger()), se && (te = te.mod(D));
                  } else {
                    if (
                      B.e > 9 &&
                      (te.e > 0 ||
                        te.e < -1 ||
                        (te.e == 0
                          ? te.c[0] > 1 || (ae && te.c[1] >= 24e7)
                          : te.c[0] < 8e13 || (ae && te.c[0] <= 9999975e7)))
                    )
                      return (ue = te.s < 0 && ve(B) ? -0 : 0), te.e > -1 && (ue = 1 / ue), new O(M ? 1 / ue : ue);
                    U && (ue = s(U / y + 2));
                  }
                  for (
                    ae ? ((Q = new O(0.5)), M && (B.s = 1), (q = ve(B))) : ((re = Math.abs(+ke(B))), (q = re % 2)),
                      F = new O(G);
                    ;

                  ) {
                    if (q) {
                      if (((F = F.times(te)), !F.c)) break;
                      ue ? F.c.length > ue && (F.c.length = ue) : se && (F = F.mod(D));
                    }
                    if (re) {
                      if (((re = f(re / 2)), re === 0)) break;
                      q = re % 2;
                    } else if (((B = B.times(Q)), Me(B, B.e + 1, 1), B.e > 14)) q = ve(B);
                    else {
                      if (((re = +ke(B)), re === 0)) break;
                      q = re % 2;
                    }
                    (te = te.times(te)), ue ? te.c && te.c.length > ue && (te.c.length = ue) : se && (te = te.mod(D));
                  }
                  return se ? F : (M && (F = G.div(F)), D ? F.mod(D) : ue ? Me(F, U, X, he) : F);
                }),
              (N.integerValue = function (B) {
                var D = new O(this);
                return B == null ? (B = X) : z(B, 0, 8), Me(D, D.e + 1, B);
              }),
              (N.isEqualTo = N.eq =
                function (B, D) {
                  return W(this, new O(B, D)) === 0;
                }),
              (N.isFinite = function () {
                return !!this.c;
              }),
              (N.isGreaterThan = N.gt =
                function (B, D) {
                  return W(this, new O(B, D)) > 0;
                }),
              (N.isGreaterThanOrEqualTo = N.gte =
                function (B, D) {
                  return (D = W(this, new O(B, D))) === 1 || D === 0;
                }),
              (N.isInteger = function () {
                return !!this.c && P(this.e / y) > this.c.length - 2;
              }),
              (N.isLessThan = N.lt =
                function (B, D) {
                  return W(this, new O(B, D)) < 0;
                }),
              (N.isLessThanOrEqualTo = N.lte =
                function (B, D) {
                  return (D = W(this, new O(B, D))) === -1 || D === 0;
                }),
              (N.isNaN = function () {
                return !this.s;
              }),
              (N.isNegative = function () {
                return this.s < 0;
              }),
              (N.isPositive = function () {
                return this.s > 0;
              }),
              (N.isZero = function () {
                return !!this.c && this.c[0] == 0;
              }),
              (N.minus = function (B, D) {
                var Q,
                  se,
                  re,
                  ue,
                  he = this,
                  ae = he.s;
                if (((B = new O(B, D)), (D = B.s), !ae || !D)) return new O(NaN);
                if (ae != D) return (B.s = -D), he.plus(B);
                var M = he.e / y,
                  q = B.e / y,
                  F = he.c,
                  te = B.c;
                if (!M || !q) {
                  if (!F || !te) return F ? ((B.s = -D), B) : new O(te ? he : NaN);
                  if (!F[0] || !te[0]) return te[0] ? ((B.s = -D), B) : new O(F[0] ? he : X == 3 ? -0 : 0);
                }
                if (((M = P(M)), (q = P(q)), (F = F.slice()), (ae = M - q))) {
                  for (
                    (ue = ae < 0) ? ((ae = -ae), (re = F)) : ((q = M), (re = te)), re.reverse(), D = ae;
                    D--;
                    re.push(0)
                  );
                  re.reverse();
                } else
                  for (se = (ue = (ae = F.length) < (D = te.length)) ? ae : D, ae = D = 0; D < se; D++)
                    if (F[D] != te[D]) {
                      ue = F[D] < te[D];
                      break;
                    }
                if (
                  (ue && ((re = F), (F = te), (te = re), (B.s = -B.s)), (D = (se = te.length) - (Q = F.length)), D > 0)
                )
                  for (; D--; F[Q++] = 0);
                for (D = p - 1; se > ae; ) {
                  if (F[--se] < te[se]) {
                    for (Q = se; Q && !F[--Q]; F[Q] = D);
                    --F[Q], (F[se] += p);
                  }
                  F[se] -= te[se];
                }
                for (; F[0] == 0; F.splice(0, 1), --q);
                return F[0] ? Pe(B, F, q) : ((B.s = X == 3 ? -1 : 1), (B.c = [(B.e = 0)]), B);
              }),
              (N.modulo = N.mod =
                function (B, D) {
                  var Q,
                    se,
                    re = this;
                  return (
                    (B = new O(B, D)),
                    !re.c || !B.s || (B.c && !B.c[0])
                      ? new O(NaN)
                      : !B.c || (re.c && !re.c[0])
                        ? new O(re)
                        : (oe == 9
                            ? ((se = B.s), (B.s = 1), (Q = De(re, B, 0, 3)), (B.s = se), (Q.s *= se))
                            : (Q = De(re, B, 0, oe)),
                          (B = re.minus(Q.times(B))),
                          !B.c[0] && oe == 1 && (B.s = re.s),
                          B)
                  );
                }),
              (N.multipliedBy = N.times =
                function (B, D) {
                  var Q,
                    se,
                    re,
                    ue,
                    he,
                    ae,
                    M,
                    q,
                    F,
                    te,
                    ge,
                    Se,
                    Be,
                    ze,
                    rt,
                    A = this,
                    m = A.c,
                    g = (B = new O(B, D)).c;
                  if (!m || !g || !m[0] || !g[0])
                    return (
                      !A.s || !B.s || (m && !m[0] && !g) || (g && !g[0] && !m)
                        ? (B.c = B.e = B.s = null)
                        : ((B.s *= A.s), !m || !g ? (B.c = B.e = null) : ((B.c = [0]), (B.e = 0))),
                      B
                    );
                  for (
                    se = P(A.e / y) + P(B.e / y),
                      B.s *= A.s,
                      M = m.length,
                      te = g.length,
                      M < te && ((Be = m), (m = g), (g = Be), (re = M), (M = te), (te = re)),
                      re = M + te,
                      Be = [];
                    re--;
                    Be.push(0)
                  );
                  for (ze = p, rt = S, re = te; --re >= 0; ) {
                    for (Q = 0, ge = g[re] % rt, Se = (g[re] / rt) | 0, he = M, ue = re + he; ue > re; )
                      (q = m[--he] % rt),
                        (F = (m[he] / rt) | 0),
                        (ae = Se * q + F * ge),
                        (q = ge * q + (ae % rt) * rt + Be[ue] + Q),
                        (Q = ((q / ze) | 0) + ((ae / rt) | 0) + Se * F),
                        (Be[ue--] = q % ze);
                    Be[ue] = Q;
                  }
                  return Q ? ++se : Be.splice(0, 1), Pe(B, Be, se);
                }),
              (N.negated = function () {
                var B = new O(this);
                return (B.s = -B.s || null), B;
              }),
              (N.plus = function (B, D) {
                var Q,
                  se = this,
                  re = se.s;
                if (((B = new O(B, D)), (D = B.s), !re || !D)) return new O(NaN);
                if (re != D) return (B.s = -D), se.minus(B);
                var ue = se.e / y,
                  he = B.e / y,
                  ae = se.c,
                  M = B.c;
                if (!ue || !he) {
                  if (!ae || !M) return new O(re / 0);
                  if (!ae[0] || !M[0]) return M[0] ? B : new O(ae[0] ? se : re * 0);
                }
                if (((ue = P(ue)), (he = P(he)), (ae = ae.slice()), (re = ue - he))) {
                  for (re > 0 ? ((he = ue), (Q = M)) : ((re = -re), (Q = ae)), Q.reverse(); re--; Q.push(0));
                  Q.reverse();
                }
                for (re = ae.length, D = M.length, re - D < 0 && ((Q = M), (M = ae), (ae = Q), (D = re)), re = 0; D; )
                  (re = ((ae[--D] = ae[D] + M[D] + re) / p) | 0), (ae[D] = p === ae[D] ? 0 : ae[D] % p);
                return re && ((ae = [re].concat(ae)), ++he), Pe(B, ae, he);
              }),
              (N.precision = N.sd =
                function (B, D) {
                  var Q,
                    se,
                    re,
                    ue = this;
                  if (B != null && B !== !!B) return z(B, 1, E), D == null ? (D = X) : z(D, 0, 8), Me(new O(ue), B, D);
                  if (!(Q = ue.c)) return null;
                  if (((re = Q.length - 1), (se = re * y + 1), (re = Q[re]))) {
                    for (; re % 10 == 0; re /= 10, se--);
                    for (re = Q[0]; re >= 10; re /= 10, se++);
                  }
                  return B && ue.e + 1 > se && (se = ue.e + 1), se;
                }),
              (N.shiftedBy = function (B) {
                return z(B, -9007199254740991, _), this.times('1e' + B);
              }),
              (N.squareRoot = N.sqrt =
                function () {
                  var B,
                    D,
                    Q,
                    se,
                    re,
                    ue = this,
                    he = ue.c,
                    ae = ue.s,
                    M = ue.e,
                    q = Y + 4,
                    F = new O('0.5');
                  if (ae !== 1 || !he || !he[0])
                    return new O(!ae || (ae < 0 && (!he || he[0])) ? NaN : he ? ue : 1 / 0);
                  if (
                    ((ae = Math.sqrt(+ke(ue))),
                    ae == 0 || ae == 1 / 0
                      ? ((D = J(he)),
                        (D.length + M) % 2 == 0 && (D += '0'),
                        (ae = Math.sqrt(+D)),
                        (M = P((M + 1) / 2) - (M < 0 || M % 2)),
                        ae == 1 / 0
                          ? (D = '5e' + M)
                          : ((D = ae.toExponential()), (D = D.slice(0, D.indexOf('e') + 1) + M)),
                        (Q = new O(D)))
                      : (Q = new O(ae + '')),
                    Q.c[0])
                  ) {
                    for (M = Q.e, ae = M + q, ae < 3 && (ae = 0); ; )
                      if (
                        ((re = Q),
                        (Q = F.times(re.plus(De(ue, re, q, 1)))),
                        J(re.c).slice(0, ae) === (D = J(Q.c)).slice(0, ae))
                      )
                        if ((Q.e < M && --ae, (D = D.slice(ae - 3, ae + 1)), D == '9999' || (!se && D == '4999'))) {
                          if (!se && (Me(re, re.e + Y + 2, 0), re.times(re).eq(ue))) {
                            Q = re;
                            break;
                          }
                          (q += 4), (ae += 4), (se = 1);
                        } else {
                          (!+D || (!+D.slice(1) && D.charAt(0) == '5')) &&
                            (Me(Q, Q.e + Y + 2, 1), (B = !Q.times(Q).eq(ue)));
                          break;
                        }
                  }
                  return Me(Q, Q.e + Y + 1, X, B);
                }),
              (N.toExponential = function (B, D) {
                return B != null && (z(B, 0, E), B++), je(this, B, D, 1);
              }),
              (N.toFixed = function (B, D) {
                return B != null && (z(B, 0, E), (B = B + this.e + 1)), je(this, B, D);
              }),
              (N.toFormat = function (B, D, Q) {
                var se,
                  re = this;
                if (Q == null)
                  B != null && D && typeof D == 'object'
                    ? ((Q = D), (D = null))
                    : B && typeof B == 'object'
                      ? ((Q = B), (B = D = null))
                      : (Q = ne);
                else if (typeof Q != 'object') throw Error(d + 'Argument not an object: ' + Q);
                if (((se = re.toFixed(B, D)), re.c)) {
                  var ue,
                    he = se.split('.'),
                    ae = +Q.groupSize,
                    M = +Q.secondaryGroupSize,
                    q = Q.groupSeparator || '',
                    F = he[0],
                    te = he[1],
                    ge = re.s < 0,
                    Se = ge ? F.slice(1) : F,
                    Be = Se.length;
                  if ((M && ((ue = ae), (ae = M), (M = ue), (Be -= ue)), ae > 0 && Be > 0)) {
                    for (ue = Be % ae || ae, F = Se.substr(0, ue); ue < Be; ue += ae) F += q + Se.substr(ue, ae);
                    M > 0 && (F += q + Se.slice(ue)), ge && (F = '-' + F);
                  }
                  se = te
                    ? F +
                      (Q.decimalSeparator || '') +
                      ((M = +Q.fractionGroupSize)
                        ? te.replace(new RegExp('\\d{' + M + '}\\B', 'g'), '$&' + (Q.fractionGroupSeparator || ''))
                        : te)
                    : F;
                }
                return (Q.prefix || '') + se + (Q.suffix || '');
              }),
              (N.toFraction = function (B) {
                var D,
                  Q,
                  se,
                  re,
                  ue,
                  he,
                  ae,
                  M,
                  q,
                  F,
                  te,
                  ge,
                  Se = this,
                  Be = Se.c;
                if (B != null && ((ae = new O(B)), (!ae.isInteger() && (ae.c || ae.s !== 1)) || ae.lt(G)))
                  throw Error(d + 'Argument ' + (ae.isInteger() ? 'out of range: ' : 'not an integer: ') + ke(ae));
                if (!Be) return new O(Se);
                for (
                  D = new O(G),
                    q = Q = new O(G),
                    se = M = new O(G),
                    ge = J(Be),
                    ue = D.e = ge.length - Se.e - 1,
                    D.c[0] = b[(he = ue % y) < 0 ? y + he : he],
                    B = !B || ae.comparedTo(D) > 0 ? (ue > 0 ? D : q) : ae,
                    he = $,
                    $ = 1 / 0,
                    ae = new O(ge),
                    M.c[0] = 0;
                  (F = De(ae, D, 0, 1)), (re = Q.plus(F.times(se))), re.comparedTo(B) != 1;

                )
                  (Q = se),
                    (se = re),
                    (q = M.plus(F.times((re = q)))),
                    (M = re),
                    (D = ae.minus(F.times((re = D)))),
                    (ae = re);
                return (
                  (re = De(B.minus(Q), se, 0, 1)),
                  (M = M.plus(re.times(q))),
                  (Q = Q.plus(re.times(se))),
                  (M.s = q.s = Se.s),
                  (ue = ue * 2),
                  (te =
                    De(q, se, ue, X)
                      .minus(Se)
                      .abs()
                      .comparedTo(De(M, Q, ue, X).minus(Se).abs()) < 1
                      ? [q, se]
                      : [M, Q]),
                  ($ = he),
                  te
                );
              }),
              (N.toNumber = function () {
                return +ke(this);
              }),
              (N.toPrecision = function (B, D) {
                return B != null && z(B, 1, E), je(this, B, D, 2);
              }),
              (N.toString = function (B) {
                var D,
                  Q = this,
                  se = Q.s,
                  re = Q.e;
                return (
                  re === null
                    ? se
                      ? ((D = 'Infinity'), se < 0 && (D = '-' + D))
                      : (D = 'NaN')
                    : (B == null
                        ? (D = re <= Z || re >= k ? qe(J(Q.c), re) : xe(J(Q.c), re, '0'))
                        : B === 10 && ye
                          ? ((Q = Me(new O(Q), Y + re + 1, X)), (D = xe(J(Q.c), Q.e, '0')))
                          : (z(B, 2, we.length, 'Base'), (D = v(xe(J(Q.c), re, '0'), 10, B, se, !0))),
                      se < 0 && Q.c[0] && (D = '-' + D)),
                  D
                );
              }),
              (N.valueOf = N.toJSON =
                function () {
                  return ke(this);
                }),
              (N._isBigNumber = !0),
              Ee != null && O.set(Ee),
              O
            );
          }
          function P(Ee) {
            var De = Ee | 0;
            return Ee > 0 || Ee === De ? De : De - 1;
          }
          function J(Ee) {
            for (var De, v, w = 1, N = Ee.length, G = Ee[0] + ''; w < N; ) {
              for (De = Ee[w++] + '', v = y - De.length; v--; De = '0' + De);
              G += De;
            }
            for (N = G.length; G.charCodeAt(--N) === 48; );
            return G.slice(0, N + 1 || 1);
          }
          function W(Ee, De) {
            var v,
              w,
              N = Ee.c,
              G = De.c,
              Y = Ee.s,
              X = De.s,
              Z = Ee.e,
              k = De.e;
            if (!Y || !X) return null;
            if (((v = N && !N[0]), (w = G && !G[0]), v || w)) return v ? (w ? 0 : -X) : Y;
            if (Y != X) return Y;
            if (((v = Y < 0), (w = Z == k), !N || !G)) return w ? 0 : !N ^ v ? 1 : -1;
            if (!w) return (Z > k) ^ v ? 1 : -1;
            for (X = (Z = N.length) < (k = G.length) ? Z : k, Y = 0; Y < X; Y++)
              if (N[Y] != G[Y]) return (N[Y] > G[Y]) ^ v ? 1 : -1;
            return Z == k ? 0 : (Z > k) ^ v ? 1 : -1;
          }
          function z(Ee, De, v, w) {
            if (Ee < De || Ee > v || Ee !== f(Ee))
              throw Error(
                d +
                  (w || 'Argument') +
                  (typeof Ee == 'number'
                    ? Ee < De || Ee > v
                      ? ' out of range: '
                      : ' not an integer: '
                    : ' not a primitive number: ') +
                  String(Ee)
              );
          }
          function ve(Ee) {
            var De = Ee.c.length - 1;
            return P(Ee.e / y) == De && Ee.c[De] % 2 != 0;
          }
          function qe(Ee, De) {
            return (Ee.length > 1 ? Ee.charAt(0) + '.' + Ee.slice(1) : Ee) + (De < 0 ? 'e' : 'e+') + De;
          }
          function xe(Ee, De, v) {
            var w, N;
            if (De < 0) {
              for (N = v + '.'; ++De; N += v);
              Ee = N + Ee;
            } else if (((w = Ee.length), ++De > w)) {
              for (N = v, De -= w; --De; N += v);
              Ee += N;
            } else De < w && (Ee = Ee.slice(0, De) + '.' + Ee.slice(De));
            return Ee;
          }
          (a = I()),
            (a.default = a.BigNumber = a),
            r.exports
              ? (r.exports = a)
              : (i || (i = typeof globalThis < 'u' && globalThis ? globalThis : window), (i.BigNumber = a));
        })(QS);
      })(Us)),
    Us.exports
  );
}
var Cf, Ap;
function PS() {
  return (
    Ap ||
      ((Ap = 1),
      (Cf = function (i, a, u) {
        var s = new i.Uint8Array(u),
          f = a.pushInt,
          d = a.pushInt32,
          h = a.pushInt32Neg,
          p = a.pushInt64,
          y = a.pushInt64Neg,
          _ = a.pushFloat,
          b = a.pushFloatSingle,
          S = a.pushFloatDouble,
          E = a.pushTrue,
          I = a.pushFalse,
          P = a.pushUndefined,
          J = a.pushNull,
          W = a.pushInfinity,
          z = a.pushInfinityNeg,
          ve = a.pushNaN,
          qe = a.pushNaNNeg,
          xe = a.pushArrayStart,
          Ee = a.pushArrayStartFixed,
          De = a.pushArrayStartFixed32,
          v = a.pushArrayStartFixed64,
          w = a.pushObjectStart,
          N = a.pushObjectStartFixed,
          G = a.pushObjectStartFixed32,
          Y = a.pushObjectStartFixed64,
          X = a.pushByteString,
          Z = a.pushByteStringStart,
          k = a.pushUtf8String,
          R = a.pushUtf8StringStart,
          $ = a.pushSimpleUnassigned,
          H = a.pushTagStart,
          oe = a.pushTagStart4,
          U = a.pushTagStart8,
          ne = a.pushTagUnassigned,
          we = a.pushBreak,
          ye = i.Math.pow,
          O = 0,
          je = 0,
          Oe = 0;
        function Pe(ee) {
          for (
            ee = ee | 0, O = 0, je = ee;
            (O | 0) < (je | 0) && ((Oe = Oi[s[O] & 255](s[O] | 0) | 0), !((Oe | 0) > 0));

          );
          return Oe | 0;
        }
        function Me(ee) {
          return (ee = ee | 0), (((O | 0) + (ee | 0)) | 0) < (je | 0) ? 0 : 1;
        }
        function ke(ee) {
          return (ee = ee | 0), (s[ee | 0] << 8) | s[(ee + 1) | 0] | 0;
        }
        function B(ee) {
          return (
            (ee = ee | 0), (s[ee | 0] << 24) | (s[(ee + 1) | 0] << 16) | (s[(ee + 2) | 0] << 8) | s[(ee + 3) | 0] | 0
          );
        }
        function D(ee) {
          return (ee = ee | 0), f(ee | 0), (O = (O + 1) | 0), 0;
        }
        function Q(ee) {
          return (ee = ee | 0), Me(1) | 0 ? 1 : (f(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function se(ee) {
          return (ee = ee | 0), Me(2) | 0 ? 1 : (f(ke((O + 1) | 0) | 0), (O = (O + 3) | 0), 0);
        }
        function re(ee) {
          return (ee = ee | 0), Me(4) | 0 ? 1 : (d(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function ue(ee) {
          return (
            (ee = ee | 0),
            Me(8) | 0
              ? 1
              : (p(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function he(ee) {
          return (ee = ee | 0), f((-1 - ((ee - 32) | 0)) | 0), (O = (O + 1) | 0), 0;
        }
        function ae(ee) {
          return (ee = ee | 0), Me(1) | 0 ? 1 : (f((-1 - (s[(O + 1) | 0] | 0)) | 0), (O = (O + 2) | 0), 0);
        }
        function M(ee) {
          ee = ee | 0;
          var Je = 0;
          return Me(2) | 0 ? 1 : ((Je = ke((O + 1) | 0) | 0), f((-1 - (Je | 0)) | 0), (O = (O + 3) | 0), 0);
        }
        function q(ee) {
          return (ee = ee | 0), Me(4) | 0 ? 1 : (h(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function F(ee) {
          return (
            (ee = ee | 0),
            Me(8) | 0
              ? 1
              : (y(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function te(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return (
            (st = (ee - 64) | 0),
            Me(st | 0) | 0
              ? 1
              : ((Je = (O + 1) | 0), (ht = (((O + 1) | 0) + (st | 0)) | 0), X(Je | 0, ht | 0), (O = ht | 0), 0)
          );
        }
        function ge(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Me(1) | 0 ||
            ((st = s[(O + 1) | 0] | 0), (Je = (O + 2) | 0), (ht = (((O + 2) | 0) + (st | 0)) | 0), Me((st + 1) | 0) | 0)
            ? 1
            : (X(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function Se(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Me(2) | 0 ||
            ((st = ke((O + 1) | 0) | 0),
            (Je = (O + 3) | 0),
            (ht = (((O + 3) | 0) + (st | 0)) | 0),
            Me((st + 2) | 0) | 0)
            ? 1
            : (X(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function Be(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Me(4) | 0 ||
            ((st = B((O + 1) | 0) | 0), (Je = (O + 5) | 0), (ht = (((O + 5) | 0) + (st | 0)) | 0), Me((st + 4) | 0) | 0)
            ? 1
            : (X(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function ze(ee) {
          return (ee = ee | 0), 1;
        }
        function rt(ee) {
          return (ee = ee | 0), Z(), (O = (O + 1) | 0), 0;
        }
        function A(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return (
            (st = (ee - 96) | 0),
            Me(st | 0) | 0
              ? 1
              : ((Je = (O + 1) | 0), (ht = (((O + 1) | 0) + (st | 0)) | 0), k(Je | 0, ht | 0), (O = ht | 0), 0)
          );
        }
        function m(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Me(1) | 0 ||
            ((st = s[(O + 1) | 0] | 0), (Je = (O + 2) | 0), (ht = (((O + 2) | 0) + (st | 0)) | 0), Me((st + 1) | 0) | 0)
            ? 1
            : (k(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function g(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Me(2) | 0 ||
            ((st = ke((O + 1) | 0) | 0),
            (Je = (O + 3) | 0),
            (ht = (((O + 3) | 0) + (st | 0)) | 0),
            Me((st + 2) | 0) | 0)
            ? 1
            : (k(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function V(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Me(4) | 0 ||
            ((st = B((O + 1) | 0) | 0), (Je = (O + 5) | 0), (ht = (((O + 5) | 0) + (st | 0)) | 0), Me((st + 4) | 0) | 0)
            ? 1
            : (k(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function ie(ee) {
          return (ee = ee | 0), 1;
        }
        function j(ee) {
          return (ee = ee | 0), R(), (O = (O + 1) | 0), 0;
        }
        function L(ee) {
          return (ee = ee | 0), Ee((ee - 128) | 0), (O = (O + 1) | 0), 0;
        }
        function de(ee) {
          return (ee = ee | 0), Me(1) | 0 ? 1 : (Ee(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function Ne(ee) {
          return (ee = ee | 0), Me(2) | 0 ? 1 : (Ee(ke((O + 1) | 0) | 0), (O = (O + 3) | 0), 0);
        }
        function Ce(ee) {
          return (ee = ee | 0), Me(4) | 0 ? 1 : (De(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function Ie(ee) {
          return (
            (ee = ee | 0),
            Me(8) | 0
              ? 1
              : (v(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function et(ee) {
          return (ee = ee | 0), xe(), (O = (O + 1) | 0), 0;
        }
        function Xe(ee) {
          ee = ee | 0;
          var Je = 0;
          return (Je = (ee - 160) | 0), Me(Je | 0) | 0 ? 1 : (N(Je | 0), (O = (O + 1) | 0), 0);
        }
        function Fe(ee) {
          return (ee = ee | 0), Me(1) | 0 ? 1 : (N(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function Ve(ee) {
          return (ee = ee | 0), Me(2) | 0 ? 1 : (N(ke((O + 1) | 0) | 0), (O = (O + 3) | 0), 0);
        }
        function Ge(ee) {
          return (ee = ee | 0), Me(4) | 0 ? 1 : (G(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function $e(ee) {
          return (
            (ee = ee | 0),
            Me(8) | 0
              ? 1
              : (Y(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function it(ee) {
          return (ee = ee | 0), w(), (O = (O + 1) | 0), 0;
        }
        function ot(ee) {
          return (ee = ee | 0), H((ee - 192) | 0 | 0), (O = (O + 1) | 0), 0;
        }
        function Dt(ee) {
          return (ee = ee | 0), H(ee | 0), (O = (O + 1) | 0), 0;
        }
        function dr(ee) {
          return (ee = ee | 0), H(ee | 0), (O = (O + 1) | 0), 0;
        }
        function la(ee) {
          return (ee = ee | 0), H(ee | 0), (O = (O + 1) | 0), 0;
        }
        function ua(ee) {
          return (ee = ee | 0), H(ee | 0), (O = (O + 1) | 0), 0;
        }
        function Tt(ee) {
          return (ee = ee | 0), H((ee - 192) | 0 | 0), (O = (O + 1) | 0), 0;
        }
        function Nd(ee) {
          return (ee = ee | 0), H(ee | 0), (O = (O + 1) | 0), 0;
        }
        function oc(ee) {
          return (ee = ee | 0), H(ee | 0), (O = (O + 1) | 0), 0;
        }
        function fc(ee) {
          return (ee = ee | 0), H(ee | 0), (O = (O + 1) | 0), 0;
        }
        function pu(ee) {
          return (ee = ee | 0), Me(1) | 0 ? 1 : (H(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function yu(ee) {
          return (ee = ee | 0), Me(2) | 0 ? 1 : (H(ke((O + 1) | 0) | 0), (O = (O + 3) | 0), 0);
        }
        function dc(ee) {
          return (ee = ee | 0), Me(4) | 0 ? 1 : (oe(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function on(ee) {
          return (
            (ee = ee | 0),
            Me(8) | 0
              ? 1
              : (U(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function dt(ee) {
          return (ee = ee | 0), $(((ee | 0) - 224) | 0), (O = (O + 1) | 0), 0;
        }
        function lr(ee) {
          return (ee = ee | 0), I(), (O = (O + 1) | 0), 0;
        }
        function Qn(ee) {
          return (ee = ee | 0), E(), (O = (O + 1) | 0), 0;
        }
        function Ya(ee) {
          return (ee = ee | 0), J(), (O = (O + 1) | 0), 0;
        }
        function hc(ee) {
          return (ee = ee | 0), P(), (O = (O + 1) | 0), 0;
        }
        function mc(ee) {
          return (ee = ee | 0), Me(1) | 0 ? 1 : ($(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function gu(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 1,
            kr = 0,
            Ir = 0,
            fn = 0;
          return Me(2) | 0
            ? 1
            : ((Je = s[(O + 1) | 0] | 0),
              (ht = s[(O + 2) | 0] | 0),
              (Je | 0) & 128 && (st = -1),
              (kr = +(((Je | 0) & 124) >> 2)),
              (Ir = +((((Je | 0) & 3) << 8) | ht)),
              +kr == 0
                ? _(+(+st * 5960464477539063e-23 * +Ir))
                : +kr == 31
                  ? +st == 1
                    ? +Ir > 0
                      ? ve()
                      : W()
                    : +Ir > 0
                      ? qe()
                      : z()
                  : _(+(+st * ye(2, +(+kr - 25)) * +(1024 + Ir))),
              (O = (O + 3) | 0),
              0);
        }
        function Ti(ee) {
          return (
            (ee = ee | 0),
            Me(4) | 0
              ? 1
              : (b(s[(O + 1) | 0] | 0, s[(O + 2) | 0] | 0, s[(O + 3) | 0] | 0, s[(O + 4) | 0] | 0),
                (O = (O + 5) | 0),
                0)
          );
        }
        function Xa(ee) {
          return (
            (ee = ee | 0),
            Me(8) | 0
              ? 1
              : (S(
                  s[(O + 1) | 0] | 0,
                  s[(O + 2) | 0] | 0,
                  s[(O + 3) | 0] | 0,
                  s[(O + 4) | 0] | 0,
                  s[(O + 5) | 0] | 0,
                  s[(O + 6) | 0] | 0,
                  s[(O + 7) | 0] | 0,
                  s[(O + 8) | 0] | 0
                ),
                (O = (O + 9) | 0),
                0)
          );
        }
        function pt(ee) {
          return (ee = ee | 0), 1;
        }
        function Pn(ee) {
          return (ee = ee | 0), we(), (O = (O + 1) | 0), 0;
        }
        var Oi = [
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
          Q,
          se,
          re,
          ue,
          pt,
          pt,
          pt,
          pt,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          he,
          ae,
          M,
          q,
          F,
          pt,
          pt,
          pt,
          pt,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          te,
          ge,
          Se,
          Be,
          ze,
          pt,
          pt,
          pt,
          rt,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          A,
          m,
          g,
          V,
          ie,
          pt,
          pt,
          pt,
          j,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          L,
          de,
          Ne,
          Ce,
          Ie,
          pt,
          pt,
          pt,
          et,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Xe,
          Fe,
          Ve,
          Ge,
          $e,
          pt,
          pt,
          pt,
          it,
          ot,
          ot,
          ot,
          ot,
          ot,
          ot,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          Tt,
          pu,
          yu,
          dc,
          on,
          pt,
          pt,
          pt,
          pt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          dt,
          lr,
          Qn,
          Ya,
          hc,
          mc,
          gu,
          Ti,
          Xa,
          pt,
          pt,
          pt,
          Pn
        ];
        return { parse: Pe };
      })),
    Cf
  );
}
var Df = {},
  Sr = {},
  _p;
function nc() {
  if (_p) return Sr;
  _p = 1;
  const r = rc().BigNumber;
  return (
    (Sr.MT = { POS_INT: 0, NEG_INT: 1, BYTE_STRING: 2, UTF8_STRING: 3, ARRAY: 4, MAP: 5, TAG: 6, SIMPLE_FLOAT: 7 }),
    (Sr.TAG = {
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
    (Sr.NUMBYTES = { ZERO: 0, ONE: 24, TWO: 25, FOUR: 26, EIGHT: 27, INDEFINITE: 31 }),
    (Sr.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 }),
    (Sr.SYMS = {
      NULL: Symbol('null'),
      UNDEFINED: Symbol('undef'),
      PARENT: Symbol('parent'),
      BREAK: Symbol('break'),
      STREAM: Symbol('stream')
    }),
    (Sr.SHIFT32 = Math.pow(2, 32)),
    (Sr.SHIFT16 = Math.pow(2, 16)),
    (Sr.MAX_SAFE_HIGH = 2097151),
    (Sr.NEG_ONE = new r(-1)),
    (Sr.TEN = new r(10)),
    (Sr.TWO = new r(2)),
    (Sr.PARENT = { ARRAY: 0, OBJECT: 1, MAP: 2, TAG: 3, BYTE_STRING: 4, UTF8_STRING: 5 }),
    Sr
  );
}
var Np;
function pd() {
  return (
    Np ||
      ((Np = 1),
      (function (r) {
        const { Buffer: i } = au(),
          a = rc().BigNumber,
          u = nc(),
          s = u.SHIFT32,
          f = u.SHIFT16,
          d = 2097151;
        r.parseHalf = function (y) {
          const _ = y[0] & 128 ? -1 : 1,
            b = (y[0] & 124) >> 2,
            S = ((y[0] & 3) << 8) | y[1];
          return b
            ? b === 31
              ? _ * (S ? NaN : 1 / 0)
              : _ * Math.pow(2, b - 25) * (1024 + S)
            : _ * 5960464477539063e-23 * S;
        };
        function h(p) {
          return p < 16 ? '0' + p.toString(16) : p.toString(16);
        }
        (r.arrayBufferToBignumber = function (p) {
          const y = p.byteLength;
          let _ = '';
          for (let b = 0; b < y; b++) _ += h(p[b]);
          return new a(_, 16);
        }),
          (r.buildMap = (p) => {
            const y = new Map(),
              _ = Object.keys(p),
              b = _.length;
            for (let S = 0; S < b; S++) y.set(_[S], p[_[S]]);
            return y;
          }),
          (r.buildInt32 = (p, y) => p * f + y),
          (r.buildInt64 = (p, y, _, b) => {
            const S = r.buildInt32(p, y),
              E = r.buildInt32(_, b);
            return S > d ? new a(S).times(s).plus(E) : S * s + E;
          }),
          (r.writeHalf = function (y, _) {
            const b = i.allocUnsafe(4);
            b.writeFloatBE(_, 0);
            const S = b.readUInt32BE(0);
            if ((S & 8191) !== 0) return !1;
            let E = (S >> 16) & 32768;
            const I = (S >> 23) & 255,
              P = S & 8388607;
            if (I >= 113 && I <= 142) E += ((I - 112) << 10) + (P >> 13);
            else if (I >= 103 && I < 113) {
              if (P & ((1 << (126 - I)) - 1)) return !1;
              E += (P + 8388608) >> (126 - I);
            } else return !1;
            return y.writeUInt16BE(E, 0), !0;
          }),
          (r.keySorter = function (p, y) {
            const _ = p[0].byteLength,
              b = y[0].byteLength;
            return _ > b ? 1 : b > _ ? -1 : p[0].compare(y[0]);
          }),
          (r.isNegativeZero = (p) => p === 0 && 1 / p < 0),
          (r.nextPowerOf2 = (p) => {
            let y = 0;
            if (p && !(p & (p - 1))) return p;
            for (; p !== 0; ) (p >>= 1), (y += 1);
            return 1 << y;
          });
      })(Df)),
    Df
  );
}
var Uf, Tp;
function Gy() {
  if (Tp) return Uf;
  Tp = 1;
  const r = nc(),
    i = r.MT,
    a = r.SIMPLE,
    u = r.SYMS;
  class s {
    constructor(d) {
      if (typeof d != 'number') throw new Error('Invalid Simple type: ' + typeof d);
      if (d < 0 || d > 255 || (d | 0) !== d) throw new Error('value must be a small positive integer: ' + d);
      this.value = d;
    }
    toString() {
      return 'simple(' + this.value + ')';
    }
    inspect() {
      return 'simple(' + this.value + ')';
    }
    encodeCBOR(d) {
      return d._pushInt(this.value, i.SIMPLE_FLOAT);
    }
    static isSimple(d) {
      return d instanceof s;
    }
    static decode(d, h) {
      switch ((h == null && (h = !0), d)) {
        case a.FALSE:
          return !1;
        case a.TRUE:
          return !0;
        case a.NULL:
          return h ? null : u.NULL;
        case a.UNDEFINED:
          return h ? void 0 : u.UNDEFINED;
        case -1:
          if (!h) throw new Error('Invalid BREAK');
          return u.BREAK;
        default:
          return new s(d);
      }
    }
  }
  return (Uf = s), Uf;
}
var jf, Op;
function $y() {
  if (Op) return jf;
  Op = 1;
  class r {
    constructor(a, u, s) {
      if (((this.tag = a), (this.value = u), (this.err = s), typeof this.tag != 'number'))
        throw new Error('Invalid tag type (' + typeof this.tag + ')');
      if (this.tag < 0 || (this.tag | 0) !== this.tag) throw new Error('Tag must be a positive integer: ' + this.tag);
    }
    toString() {
      return `${this.tag}(${JSON.stringify(this.value)})`;
    }
    encodeCBOR(a) {
      return a._pushTag(this.tag), a.pushAny(this.value);
    }
    convert(a) {
      let u, s;
      if (
        ((s = a != null ? a[this.tag] : void 0),
        typeof s != 'function' && ((s = r['_tag' + this.tag]), typeof s != 'function'))
      )
        return this;
      try {
        return s.call(r, this.value);
      } catch (f) {
        return (u = f), (this.err = u), this;
      }
    }
  }
  return (jf = r), jf;
}
var kf, Mp;
function Yy() {
  if (Mp) return kf;
  Mp = 1;
  const r = typeof navigator < 'u' && navigator.product === 'ReactNative';
  function i() {
    return r
      ? 'http://localhost'
      : globalThis.location
        ? globalThis.location.protocol + '//' + globalThis.location.host
        : '';
  }
  const a = globalThis.URL,
    u = i();
  class s {
    constructor(h = '', p = u) {
      (this.super = new a(h, p)),
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
      return a.createObjectURL(h);
    }
    static revokeObjectURL(h) {
      a.revokeObjectURL(h);
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
  function f(d) {
    if (typeof d == 'string') return new a(d).toString();
    if (!(d instanceof a)) {
      const h = d.username && d.password ? `${d.username}:${d.password}@` : '',
        p = d.auth ? d.auth + '@' : '',
        y = d.port ? ':' + d.port : '',
        _ = d.protocol ? d.protocol + '//' : '',
        b = d.host || '',
        S = d.hostname || '',
        E = d.search || (d.query ? '?' + d.query : ''),
        I = d.hash || '',
        P = d.pathname || '',
        J = d.path || P + E;
      return `${_}${h || p}${b || S + y}${J}${I}`;
    }
  }
  return (kf = { URLWithLegacySupport: s, URLSearchParams: globalThis.URLSearchParams, defaultBase: u, format: f }), kf;
}
var If, Rp;
function JS() {
  if (Rp) return If;
  Rp = 1;
  const { URLWithLegacySupport: r, format: i } = Yy();
  return (
    (If = (a, u = {}, s = {}, f) => {
      let d = u.protocol ? u.protocol.replace(':', '') : 'http';
      d = (s[d] || f || d) + ':';
      let h;
      try {
        h = new r(a);
      } catch {
        h = {};
      }
      const p = Object.assign({}, u, { protocol: d || h.protocol, host: u.host || h.host });
      return new r(a, i(p)).toString();
    }),
    If
  );
}
var Lf, Bp;
function Xy() {
  if (Bp) return Lf;
  Bp = 1;
  const { URLWithLegacySupport: r, format: i, URLSearchParams: a, defaultBase: u } = Yy(),
    s = JS();
  return (Lf = { URL: r, URLSearchParams: a, format: i, relative: s, defaultBase: u }), Lf;
}
var qf, Cp;
function Ky() {
  if (Cp) return qf;
  Cp = 1;
  const { Buffer: r } = au(),
    i = Vy(),
    a = rc().BigNumber,
    u = PS(),
    s = pd(),
    f = nc(),
    d = Gy(),
    h = $y(),
    { URL: p } = Xy();
  class y {
    constructor(b) {
      (b = b || {}),
        !b.size || b.size < 65536 ? (b.size = 65536) : (b.size = s.nextPowerOf2(b.size)),
        (this._heap = new ArrayBuffer(b.size)),
        (this._heap8 = new Uint8Array(this._heap)),
        (this._buffer = r.from(this._heap)),
        this._reset(),
        (this._knownTags = Object.assign(
          {
            0: (S) => new Date(S),
            1: (S) => new Date(S * 1e3),
            2: (S) => s.arrayBufferToBignumber(S),
            3: (S) => f.NEG_ONE.minus(s.arrayBufferToBignumber(S)),
            4: (S) => f.TEN.pow(S[0]).times(S[1]),
            5: (S) => f.TWO.pow(S[0]).times(S[1]),
            32: (S) => new p(S),
            35: (S) => new RegExp(S)
          },
          b.tags
        )),
        (this.parser = u(
          Qf,
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
      const b = this._parents.pop();
      if (b.length > 0) throw new Error(`Missing ${b.length} elements`);
      switch (b.type) {
        case f.PARENT.TAG:
          this._push(this.createTag(b.ref[0], b.ref[1]));
          break;
        case f.PARENT.BYTE_STRING:
          this._push(this.createByteString(b.ref, b.length));
          break;
        case f.PARENT.UTF8_STRING:
          this._push(this.createUtf8String(b.ref, b.length));
          break;
        case f.PARENT.MAP:
          if (b.values % 2 > 0) throw new Error('Odd number of elements in the map');
          this._push(this.createMap(b.ref, b.length));
          break;
        case f.PARENT.OBJECT:
          if (b.values % 2 > 0) throw new Error('Odd number of elements in the map');
          this._push(this.createObject(b.ref, b.length));
          break;
        case f.PARENT.ARRAY:
          this._push(this.createArray(b.ref, b.length));
          break;
      }
      this._currentParent && this._currentParent.type === f.PARENT.TAG && this._dec();
    }
    _dec() {
      const b = this._currentParent;
      b.length < 0 || (b.length--, b.length === 0 && this._closeParent());
    }
    _push(b, S) {
      const E = this._currentParent;
      switch ((E.values++, E.type)) {
        case f.PARENT.ARRAY:
        case f.PARENT.BYTE_STRING:
        case f.PARENT.UTF8_STRING:
          E.length > -1 ? (this._ref[this._ref.length - E.length] = b) : this._ref.push(b), this._dec();
          break;
        case f.PARENT.OBJECT:
          E.tmpKey != null
            ? ((this._ref[E.tmpKey] = b), (E.tmpKey = null), this._dec())
            : ((E.tmpKey = b), typeof E.tmpKey != 'string' && ((E.type = f.PARENT.MAP), (E.ref = s.buildMap(E.ref))));
          break;
        case f.PARENT.MAP:
          E.tmpKey != null ? (this._ref.set(E.tmpKey, b), (E.tmpKey = null), this._dec()) : (E.tmpKey = b);
          break;
        case f.PARENT.TAG:
          this._ref.push(b), S || this._dec();
          break;
        default:
          throw new Error('Unknown parent type');
      }
    }
    _createParent(b, S, E) {
      this._parents[this._depth] = { type: S, length: E, ref: b, values: 0, tmpKey: null };
    }
    _reset() {
      (this._res = []),
        (this._parents = [{ type: f.PARENT.ARRAY, length: -1, ref: this._res, values: 0, tmpKey: null }]);
    }
    createTag(b, S) {
      const E = this._knownTags[b];
      return E ? E(S) : new h(b, S);
    }
    createMap(b, S) {
      return b;
    }
    createObject(b, S) {
      return b;
    }
    createArray(b, S) {
      return b;
    }
    createByteString(b, S) {
      return r.concat(b);
    }
    createByteStringFromHeap(b, S) {
      return b === S ? r.alloc(0) : r.from(this._heap.slice(b, S));
    }
    createInt(b) {
      return b;
    }
    createInt32(b, S) {
      return s.buildInt32(b, S);
    }
    createInt64(b, S, E, I) {
      return s.buildInt64(b, S, E, I);
    }
    createFloat(b) {
      return b;
    }
    createFloatSingle(b, S, E, I) {
      return i.read([b, S, E, I], 0, !1, 23, 4);
    }
    createFloatDouble(b, S, E, I, P, J, W, z) {
      return i.read([b, S, E, I, P, J, W, z], 0, !1, 52, 8);
    }
    createInt32Neg(b, S) {
      return -1 - s.buildInt32(b, S);
    }
    createInt64Neg(b, S, E, I) {
      const P = s.buildInt32(b, S),
        J = s.buildInt32(E, I);
      return P > f.MAX_SAFE_HIGH ? f.NEG_ONE.minus(new a(P).times(f.SHIFT32).plus(J)) : -1 - (P * f.SHIFT32 + J);
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
    createUtf8String(b, S) {
      return b.join('');
    }
    createUtf8StringFromHeap(b, S) {
      return b === S ? '' : this._buffer.toString('utf8', b, S);
    }
    createSimpleUnassigned(b) {
      return new d(b);
    }
    pushInt(b) {
      this._push(this.createInt(b));
    }
    pushInt32(b, S) {
      this._push(this.createInt32(b, S));
    }
    pushInt64(b, S, E, I) {
      this._push(this.createInt64(b, S, E, I));
    }
    pushFloat(b) {
      this._push(this.createFloat(b));
    }
    pushFloatSingle(b, S, E, I) {
      this._push(this.createFloatSingle(b, S, E, I));
    }
    pushFloatDouble(b, S, E, I, P, J, W, z) {
      this._push(this.createFloatDouble(b, S, E, I, P, J, W, z));
    }
    pushInt32Neg(b, S) {
      this._push(this.createInt32Neg(b, S));
    }
    pushInt64Neg(b, S, E, I) {
      this._push(this.createInt64Neg(b, S, E, I));
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
      this._createParent([], f.PARENT.ARRAY, -1);
    }
    pushArrayStartFixed(b) {
      this._createArrayStartFixed(b);
    }
    pushArrayStartFixed32(b, S) {
      const E = s.buildInt32(b, S);
      this._createArrayStartFixed(E);
    }
    pushArrayStartFixed64(b, S, E, I) {
      const P = s.buildInt64(b, S, E, I);
      this._createArrayStartFixed(P);
    }
    pushObjectStart() {
      this._createObjectStartFixed(-1);
    }
    pushObjectStartFixed(b) {
      this._createObjectStartFixed(b);
    }
    pushObjectStartFixed32(b, S) {
      const E = s.buildInt32(b, S);
      this._createObjectStartFixed(E);
    }
    pushObjectStartFixed64(b, S, E, I) {
      const P = s.buildInt64(b, S, E, I);
      this._createObjectStartFixed(P);
    }
    pushByteStringStart() {
      this._parents[this._depth] = { type: f.PARENT.BYTE_STRING, length: -1, ref: [], values: 0, tmpKey: null };
    }
    pushByteString(b, S) {
      this._push(this.createByteStringFromHeap(b, S));
    }
    pushUtf8StringStart() {
      this._parents[this._depth] = { type: f.PARENT.UTF8_STRING, length: -1, ref: [], values: 0, tmpKey: null };
    }
    pushUtf8String(b, S) {
      this._push(this.createUtf8StringFromHeap(b, S));
    }
    pushSimpleUnassigned(b) {
      this._push(this.createSimpleUnassigned(b));
    }
    pushTagStart(b) {
      this._parents[this._depth] = { type: f.PARENT.TAG, length: 1, ref: [b] };
    }
    pushTagStart4(b, S) {
      this.pushTagStart(s.buildInt32(b, S));
    }
    pushTagStart8(b, S, E, I) {
      this.pushTagStart(s.buildInt64(b, S, E, I));
    }
    pushTagUnassigned(b) {
      this._push(this.createTag(b));
    }
    pushBreak() {
      if (this._currentParent.length > -1) throw new Error('Unexpected break');
      this._closeParent();
    }
    _createObjectStartFixed(b) {
      if (b === 0) {
        this._push(this.createObject({}));
        return;
      }
      this._createParent({}, f.PARENT.OBJECT, b);
    }
    _createArrayStartFixed(b) {
      if (b === 0) {
        this._push(this.createArray([]));
        return;
      }
      this._createParent(new Array(b), f.PARENT.ARRAY, b);
    }
    _decode(b) {
      if (b.byteLength === 0) throw new Error('Input too short');
      this._reset(), this._heap8.set(b);
      const S = this.parser.parse(b.byteLength);
      if (this._depth > 1) {
        for (; this._currentParent.length === 0; ) this._closeParent();
        if (this._depth > 1) throw new Error('Undeterminated nesting');
      }
      if (S > 0) throw new Error('Failed to parse');
      if (this._res.length === 0) throw new Error('No valid result');
    }
    decodeFirst(b) {
      return this._decode(b), this._res[0];
    }
    decodeAll(b) {
      return this._decode(b), this._res;
    }
    static decode(b, S) {
      return typeof b == 'string' && (b = r.from(b, S || 'hex')), new y({ size: b.length }).decodeFirst(b);
    }
    static decodeAll(b, S) {
      return typeof b == 'string' && (b = r.from(b, S || 'hex')), new y({ size: b.length }).decodeAll(b);
    }
  }
  return (y.decodeFirst = y.decode), (qf = y), qf;
}
var zf, Dp;
function WS() {
  if (Dp) return zf;
  Dp = 1;
  const { Buffer: r } = au(),
    i = Ky(),
    a = pd();
  class u extends i {
    createTag(d, h) {
      return `${d}(${h})`;
    }
    createInt(d) {
      return super.createInt(d).toString();
    }
    createInt32(d, h) {
      return super.createInt32(d, h).toString();
    }
    createInt64(d, h, p, y) {
      return super.createInt64(d, h, p, y).toString();
    }
    createInt32Neg(d, h) {
      return super.createInt32Neg(d, h).toString();
    }
    createInt64Neg(d, h, p, y) {
      return super.createInt64Neg(d, h, p, y).toString();
    }
    createTrue() {
      return 'true';
    }
    createFalse() {
      return 'false';
    }
    createFloat(d) {
      const h = super.createFloat(d);
      return a.isNegativeZero(d) ? '-0_1' : `${h}_1`;
    }
    createFloatSingle(d, h, p, y) {
      return `${super.createFloatSingle(d, h, p, y)}_2`;
    }
    createFloatDouble(d, h, p, y, _, b, S, E) {
      return `${super.createFloatDouble(d, h, p, y, _, b, S, E)}_3`;
    }
    createByteString(d, h) {
      const p = d.join(', ');
      return h === -1 ? `(_ ${p})` : `h'${p}`;
    }
    createByteStringFromHeap(d, h) {
      return `h'${r.from(super.createByteStringFromHeap(d, h)).toString('hex')}'`;
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
    createSimpleUnassigned(d) {
      return `simple(${d})`;
    }
    createArray(d, h) {
      const p = super.createArray(d, h);
      return h === -1 ? `[_ ${p.join(', ')}]` : `[${p.join(', ')}]`;
    }
    createMap(d, h) {
      const p = super.createMap(d),
        y = Array.from(p.keys()).reduce(s(p), '');
      return h === -1 ? `{_ ${y}}` : `{${y}}`;
    }
    createObject(d, h) {
      const p = super.createObject(d),
        y = Object.keys(p).reduce(s(p), '');
      return h === -1 ? `{_ ${y}}` : `{${y}}`;
    }
    createUtf8String(d, h) {
      const p = d.join(', ');
      return h === -1 ? `(_ ${p})` : `"${p}"`;
    }
    createUtf8StringFromHeap(d, h) {
      return `"${r.from(super.createUtf8StringFromHeap(d, h)).toString('utf8')}"`;
    }
    static diagnose(d, h) {
      return typeof d == 'string' && (d = r.from(d, h || 'hex')), new u().decodeFirst(d);
    }
  }
  zf = u;
  function s(f) {
    return (d, h) => (d ? `${d}, ${h}: ${f[h]}` : `${h}: ${f[h]}`);
  }
  return zf;
}
var Hf, Up;
function ex() {
  if (Up) return Hf;
  Up = 1;
  const { Buffer: r } = au(),
    { URL: i } = Xy(),
    a = rc().BigNumber,
    u = pd(),
    s = nc(),
    f = s.MT,
    d = s.NUMBYTES,
    h = s.SHIFT32,
    p = s.SYMS,
    y = s.TAG,
    _ = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.TWO,
    b = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.FOUR,
    S = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.EIGHT,
    E = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.TRUE,
    I = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.FALSE,
    P = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.UNDEFINED,
    J = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.NULL,
    W = new a('0x20000000000000'),
    z = r.from('f97e00', 'hex'),
    ve = r.from('f9fc00', 'hex'),
    qe = r.from('f97c00', 'hex');
  function xe(De) {
    return {}.toString.call(De).slice(8, -1);
  }
  class Ee {
    constructor(v) {
      (v = v || {}),
        (this.streaming = typeof v.stream == 'function'),
        (this.onData = v.stream),
        (this.semanticTypes = [
          [i, this._pushUrl],
          [a, this._pushBigNumber]
        ]);
      const w = v.genTypes || [],
        N = w.length;
      for (let G = 0; G < N; G++) this.addSemanticType(w[G][0], w[G][1]);
      this._reset();
    }
    addSemanticType(v, w) {
      const N = this.semanticTypes.length;
      for (let G = 0; G < N; G++)
        if (this.semanticTypes[G][0] === v) {
          const X = this.semanticTypes[G][1];
          return (this.semanticTypes[G][1] = w), X;
        }
      return this.semanticTypes.push([v, w]), null;
    }
    push(v) {
      return (
        v &&
          ((this.result[this.offset] = v),
          (this.resultMethod[this.offset] = 0),
          (this.resultLength[this.offset] = v.length),
          this.offset++,
          this.streaming && this.onData(this.finalize())),
        !0
      );
    }
    pushWrite(v, w, N) {
      return (
        (this.result[this.offset] = v),
        (this.resultMethod[this.offset] = w),
        (this.resultLength[this.offset] = N),
        this.offset++,
        this.streaming && this.onData(this.finalize()),
        !0
      );
    }
    _pushUInt8(v) {
      return this.pushWrite(v, 1, 1);
    }
    _pushUInt16BE(v) {
      return this.pushWrite(v, 2, 2);
    }
    _pushUInt32BE(v) {
      return this.pushWrite(v, 3, 4);
    }
    _pushDoubleBE(v) {
      return this.pushWrite(v, 4, 8);
    }
    _pushNaN() {
      return this.push(z);
    }
    _pushInfinity(v) {
      const w = v < 0 ? ve : qe;
      return this.push(w);
    }
    _pushFloat(v) {
      const w = r.allocUnsafe(2);
      if (u.writeHalf(w, v) && u.parseHalf(w) === v) return this._pushUInt8(_) && this.push(w);
      const N = r.allocUnsafe(4);
      return (
        N.writeFloatBE(v, 0),
        N.readFloatBE(0) === v ? this._pushUInt8(b) && this.push(N) : this._pushUInt8(S) && this._pushDoubleBE(v)
      );
    }
    _pushInt(v, w, N) {
      const G = w << 5;
      return v < 24
        ? this._pushUInt8(G | v)
        : v <= 255
          ? this._pushUInt8(G | d.ONE) && this._pushUInt8(v)
          : v <= 65535
            ? this._pushUInt8(G | d.TWO) && this._pushUInt16BE(v)
            : v <= 4294967295
              ? this._pushUInt8(G | d.FOUR) && this._pushUInt32BE(v)
              : v <= Number.MAX_SAFE_INTEGER
                ? this._pushUInt8(G | d.EIGHT) && this._pushUInt32BE(Math.floor(v / h)) && this._pushUInt32BE(v % h)
                : w === f.NEG_INT
                  ? this._pushFloat(N)
                  : this._pushFloat(v);
    }
    _pushIntNum(v) {
      return v < 0 ? this._pushInt(-v - 1, f.NEG_INT, v) : this._pushInt(v, f.POS_INT);
    }
    _pushNumber(v) {
      switch (!1) {
        case v === v:
          return this._pushNaN(v);
        case isFinite(v):
          return this._pushInfinity(v);
        case v % 1 !== 0:
          return this._pushIntNum(v);
        default:
          return this._pushFloat(v);
      }
    }
    _pushString(v) {
      const w = r.byteLength(v, 'utf8');
      return this._pushInt(w, f.UTF8_STRING) && this.pushWrite(v, 5, w);
    }
    _pushBoolean(v) {
      return this._pushUInt8(v ? E : I);
    }
    _pushUndefined(v) {
      return this._pushUInt8(P);
    }
    _pushArray(v, w) {
      const N = w.length;
      if (!v._pushInt(N, f.ARRAY)) return !1;
      for (let G = 0; G < N; G++) if (!v.pushAny(w[G])) return !1;
      return !0;
    }
    _pushTag(v) {
      return this._pushInt(v, f.TAG);
    }
    _pushDate(v, w) {
      return v._pushTag(y.DATE_EPOCH) && v.pushAny(Math.round(w / 1e3));
    }
    _pushBuffer(v, w) {
      return v._pushInt(w.length, f.BYTE_STRING) && v.push(w);
    }
    _pushNoFilter(v, w) {
      return v._pushBuffer(v, w.slice());
    }
    _pushRegexp(v, w) {
      return v._pushTag(y.REGEXP) && v.pushAny(w.source);
    }
    _pushSet(v, w) {
      if (!v._pushInt(w.size, f.ARRAY)) return !1;
      for (const N of w) if (!v.pushAny(N)) return !1;
      return !0;
    }
    _pushUrl(v, w) {
      return v._pushTag(y.URI) && v.pushAny(w.format());
    }
    _pushBigint(v) {
      let w = y.POS_BIGINT;
      v.isNegative() && ((v = v.negated().minus(1)), (w = y.NEG_BIGINT));
      let N = v.toString(16);
      N.length % 2 && (N = '0' + N);
      const G = r.from(N, 'hex');
      return this._pushTag(w) && this._pushBuffer(this, G);
    }
    _pushBigNumber(v, w) {
      if (w.isNaN()) return v._pushNaN();
      if (!w.isFinite()) return v._pushInfinity(w.isNegative() ? -1 / 0 : 1 / 0);
      if (w.isInteger()) return v._pushBigint(w);
      if (!(v._pushTag(y.DECIMAL_FRAC) && v._pushInt(2, f.ARRAY))) return !1;
      const N = w.decimalPlaces(),
        G = w.multipliedBy(new a(10).pow(N));
      return v._pushIntNum(-N) ? (G.abs().isLessThan(W) ? v._pushIntNum(G.toNumber()) : v._pushBigint(G)) : !1;
    }
    _pushMap(v, w) {
      return v._pushInt(w.size, f.MAP) ? this._pushRawMap(w.size, Array.from(w)) : !1;
    }
    _pushObject(v) {
      if (!v) return this._pushUInt8(J);
      const w = this.semanticTypes.length;
      for (let X = 0; X < w; X++)
        if (v instanceof this.semanticTypes[X][0]) return this.semanticTypes[X][1].call(v, this, v);
      const N = v.encodeCBOR;
      if (typeof N == 'function') return N.call(v, this);
      const G = Object.keys(v),
        Y = G.length;
      return this._pushInt(Y, f.MAP)
        ? this._pushRawMap(
            Y,
            G.map((X) => [X, v[X]])
          )
        : !1;
    }
    _pushRawMap(v, w) {
      w = w
        .map(function (N) {
          return (N[0] = Ee.encode(N[0])), N;
        })
        .sort(u.keySorter);
      for (let N = 0; N < v; N++) if (!this.push(w[N][0]) || !this.pushAny(w[N][1])) return !1;
      return !0;
    }
    write(v) {
      return this.pushAny(v);
    }
    pushAny(v) {
      switch (xe(v)) {
        case 'Number':
          return this._pushNumber(v);
        case 'String':
          return this._pushString(v);
        case 'Boolean':
          return this._pushBoolean(v);
        case 'Object':
          return this._pushObject(v);
        case 'Array':
          return this._pushArray(this, v);
        case 'Uint8Array':
          return this._pushBuffer(this, r.isBuffer(v) ? v : r.from(v));
        case 'Null':
          return this._pushUInt8(J);
        case 'Undefined':
          return this._pushUndefined(v);
        case 'Map':
          return this._pushMap(this, v);
        case 'Set':
          return this._pushSet(this, v);
        case 'URL':
          return this._pushUrl(this, v);
        case 'BigNumber':
          return this._pushBigNumber(this, v);
        case 'Date':
          return this._pushDate(this, v);
        case 'RegExp':
          return this._pushRegexp(this, v);
        case 'Symbol':
          switch (v) {
            case p.NULL:
              return this._pushObject(null);
            case p.UNDEFINED:
              return this._pushUndefined(void 0);
            default:
              throw new Error('Unknown symbol: ' + v.toString());
          }
        default:
          throw new Error('Unknown type: ' + typeof v + ', ' + (v ? v.toString() : ''));
      }
    }
    finalize() {
      if (this.offset === 0) return null;
      const v = this.result,
        w = this.resultLength,
        N = this.resultMethod,
        G = this.offset;
      let Y = 0,
        X = 0;
      for (; X < G; X++) Y += w[X];
      const Z = r.allocUnsafe(Y);
      let k = 0,
        R = 0;
      for (X = 0; X < G; X++) {
        switch (((R = w[X]), N[X])) {
          case 0:
            v[X].copy(Z, k);
            break;
          case 1:
            Z.writeUInt8(v[X], k, !0);
            break;
          case 2:
            Z.writeUInt16BE(v[X], k, !0);
            break;
          case 3:
            Z.writeUInt32BE(v[X], k, !0);
            break;
          case 4:
            Z.writeDoubleBE(v[X], k, !0);
            break;
          case 5:
            Z.write(v[X], k, R, 'utf8');
            break;
          default:
            throw new Error('unkown method');
        }
        k += R;
      }
      const $ = Z;
      return this._reset(), $;
    }
    _reset() {
      (this.result = []), (this.resultMethod = []), (this.resultLength = []), (this.offset = 0);
    }
    static encode(v) {
      const w = new Ee();
      if (!w.pushAny(v)) throw new Error('Failed to encode input');
      return w.finalize();
    }
  }
  return (Hf = Ee), Hf;
}
var jp;
function tx() {
  return (
    jp ||
      ((jp = 1),
      (function (r) {
        (r.Diagnose = WS()),
          (r.Decoder = Ky()),
          (r.Encoder = ex()),
          (r.Simple = Gy()),
          (r.Tagged = $y()),
          (r.decodeAll = r.Decoder.decodeAll),
          (r.decodeFirst = r.Decoder.decodeFirst),
          (r.diagnose = r.Diagnose.diagnose),
          (r.encode = r.Encoder.encode),
          (r.decode = r.Decoder.decode),
          (r.leveldb = { decode: r.Decoder.decodeAll, encode: r.Encoder.encode, buffer: !0, name: 'cbor' });
      })(Rf)),
    Rf
  );
}
var rx = tx();
const Zy = tu(rx);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ const yd = 2n ** 256n,
  Ji = yd - 0x1000003d1n,
  yr = yd - 0x14551231950b75fc4402da1732fc9bebfn,
  nx = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,
  ix = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,
  Qy = { a: 0n, b: 7n },
  Ur = 32,
  kp = (r) => Ye(Ye(r * r) * r + Qy.b),
  Bt = (r = '') => {
    throw new Error(r);
  },
  ic = (r) => typeof r == 'bigint',
  Py = (r) => typeof r == 'string',
  Ff = (r) => ic(r) && 0n < r && r < Ji,
  eu = (r) => ic(r) && 0n < r && r < yr,
  ax = (r) => r instanceof Uint8Array || (ArrayBuffer.isView(r) && r.constructor.name === 'Uint8Array'),
  Gs = (r, i) => (!ax(r) || (typeof i == 'number' && i > 0 && r.length !== i) ? Bt('Uint8Array expected') : r),
  bn = (r) => new Uint8Array(r),
  ra = (r, i) => Gs(Py(r) ? lu(r) : bn(Gs(r)), i),
  Ye = (r, i = Ji) => {
    const a = r % i;
    return a >= 0n ? a : i + a;
  },
  Ip = (r) => (r instanceof Dr ? r : Bt('Point expected'));
class Dr {
  constructor(i, a, u) {
    (this.px = i), (this.py = a), (this.pz = u), Object.freeze(this);
  }
  static fromAffine(i) {
    return i.x === 0n && i.y === 0n ? Yl : new Dr(i.x, i.y, 1n);
  }
  static fromHex(i) {
    i = ra(i);
    let a;
    const u = i[0],
      s = i.subarray(1),
      f = $s(s, 0, Ur),
      d = i.length;
    if (d === 33 && [2, 3].includes(u)) {
      Ff(f) || Bt('Point hex invalid: x not FE');
      let h = lx(kp(f));
      const p = (h & 1n) === 1n;
      ((u & 1) === 1) !== p && (h = Ye(-h)), (a = new Dr(f, h, 1n));
    }
    return (
      d === 65 && u === 4 && (a = new Dr(f, $s(s, Ur, 2 * Ur), 1n)), a ? a.ok() : Bt('Point invalid: not on curve')
    );
  }
  static fromPrivateKey(i) {
    return Wi.mul(Wy(i));
  }
  get x() {
    return this.aff().x;
  }
  get y() {
    return this.aff().y;
  }
  equals(i) {
    const { px: a, py: u, pz: s } = this,
      { px: f, py: d, pz: h } = Ip(i),
      p = Ye(a * h),
      y = Ye(f * s),
      _ = Ye(u * h),
      b = Ye(d * s);
    return p === y && _ === b;
  }
  negate() {
    return new Dr(this.px, Ye(-this.py), this.pz);
  }
  double() {
    return this.add(this);
  }
  add(i) {
    const { px: a, py: u, pz: s } = this,
      { px: f, py: d, pz: h } = Ip(i),
      { a: p, b: y } = Qy;
    let _ = 0n,
      b = 0n,
      S = 0n;
    const E = Ye(y * 3n);
    let I = Ye(a * f),
      P = Ye(u * d),
      J = Ye(s * h),
      W = Ye(a + u),
      z = Ye(f + d);
    (W = Ye(W * z)), (z = Ye(I + P)), (W = Ye(W - z)), (z = Ye(a + s));
    let ve = Ye(f + h);
    return (
      (z = Ye(z * ve)),
      (ve = Ye(I + J)),
      (z = Ye(z - ve)),
      (ve = Ye(u + s)),
      (_ = Ye(d + h)),
      (ve = Ye(ve * _)),
      (_ = Ye(P + J)),
      (ve = Ye(ve - _)),
      (S = Ye(p * z)),
      (_ = Ye(E * J)),
      (S = Ye(_ + S)),
      (_ = Ye(P - S)),
      (S = Ye(P + S)),
      (b = Ye(_ * S)),
      (P = Ye(I + I)),
      (P = Ye(P + I)),
      (J = Ye(p * J)),
      (z = Ye(E * z)),
      (P = Ye(P + J)),
      (J = Ye(I - J)),
      (J = Ye(p * J)),
      (z = Ye(z + J)),
      (I = Ye(P * z)),
      (b = Ye(b + I)),
      (I = Ye(ve * z)),
      (_ = Ye(W * _)),
      (_ = Ye(_ - I)),
      (I = Ye(W * P)),
      (S = Ye(ve * S)),
      (S = Ye(S + I)),
      new Dr(_, b, S)
    );
  }
  mul(i, a = !0) {
    if (!a && i === 0n) return Yl;
    if ((eu(i) || Bt('scalar invalid'), this.equals(Wi))) return dx(i).p;
    let u = Yl,
      s = Wi;
    for (let f = this; i > 0n; f = f.double(), i >>= 1n) i & 1n ? (u = u.add(f)) : a && (s = s.add(f));
    return u;
  }
  mulAddQUns(i, a, u) {
    return this.mul(a, !1).add(i.mul(u, !1)).ok();
  }
  toAffine() {
    const { px: i, py: a, pz: u } = this;
    if (this.equals(Yl)) return { x: 0n, y: 0n };
    if (u === 1n) return { x: i, y: a };
    const s = lc(u, Ji);
    return Ye(u * s) !== 1n && Bt('inverse invalid'), { x: Ye(i * s), y: Ye(a * s) };
  }
  assertValidity() {
    const { x: i, y: a } = this.aff();
    return (
      (!Ff(i) || !Ff(a)) && Bt('Point invalid: x or y'), Ye(a * a) === kp(i) ? this : Bt('Point invalid: not on curve')
    );
  }
  multiply(i) {
    return this.mul(i);
  }
  aff() {
    return this.toAffine();
  }
  ok() {
    return this.assertValidity();
  }
  toHex(i = !0) {
    const { x: a, y: u } = this.aff();
    return (i ? ((u & 1n) === 0n ? '02' : '03') : '04') + Xl(a) + (i ? '' : Xl(u));
  }
  toRawBytes(i = !0) {
    return lu(this.toHex(i));
  }
}
Dr.BASE = new Dr(nx, ix, 1n);
Dr.ZERO = new Dr(0n, 1n, 0n);
const { BASE: Wi, ZERO: Yl } = Dr,
  Jy = (r, i) => r.toString(16).padStart(i, '0'),
  gd = (r) =>
    Array.from(Gs(r))
      .map((i) => Jy(i, 2))
      .join(''),
  Hn = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 },
  Lp = (r) => {
    if (r >= Hn._0 && r <= Hn._9) return r - Hn._0;
    if (r >= Hn.A && r <= Hn.F) return r - (Hn.A - 10);
    if (r >= Hn.a && r <= Hn.f) return r - (Hn.a - 10);
  },
  lu = (r) => {
    const i = 'hex invalid';
    if (!Py(r)) return Bt(i);
    const a = r.length,
      u = a / 2;
    if (a % 2) return Bt(i);
    const s = bn(u);
    for (let f = 0, d = 0; f < u; f++, d += 2) {
      const h = Lp(r.charCodeAt(d)),
        p = Lp(r.charCodeAt(d + 1));
      if (h === void 0 || p === void 0) return Bt(i);
      s[f] = h * 16 + p;
    }
    return s;
  },
  uu = (r) => BigInt('0x' + (gd(r) || '0')),
  $s = (r, i, a) => uu(r.slice(i, a)),
  ac = (r) => (ic(r) && r >= 0n && r < yd ? lu(Jy(r, 2 * Ur)) : Bt('bigint expected')),
  Xl = (r) => gd(ac(r)),
  td = (...r) => {
    const i = bn(r.reduce((u, s) => u + Gs(s).length, 0));
    let a = 0;
    return (
      r.forEach((u) => {
        i.set(u, a), (a += u.length);
      }),
      i
    );
  },
  lc = (r, i) => {
    (r === 0n || i <= 0n) && Bt('no inverse n=' + r + ' mod=' + i);
    let a = Ye(r, i),
      u = i,
      s = 0n,
      f = 1n;
    for (; a !== 0n; ) {
      const d = u / a,
        h = u % a,
        p = s - f * d;
      (u = a), (a = h), (s = f), (f = p);
    }
    return u === 1n ? Ye(s, i) : Bt('no inverse');
  },
  lx = (r) => {
    let i = 1n;
    for (let a = r, u = (Ji + 1n) / 4n; u > 0n; u >>= 1n) u & 1n && (i = (i * a) % Ji), (a = (a * a) % Ji);
    return Ye(i * i) === r ? i : Bt('sqrt invalid');
  },
  Wy = (r) => (ic(r) || (r = uu(ra(r, Ur))), eu(r) ? r : Bt('private key invalid 3')),
  rd = (r) => r > yr >> 1n;
class Kl {
  constructor(i, a, u) {
    (this.r = i), (this.s = a), (this.recovery = u), this.assertValidity();
  }
  static fromCompact(i) {
    return (i = ra(i, 64)), new Kl($s(i, 0, Ur), $s(i, Ur, 2 * Ur));
  }
  assertValidity() {
    return eu(this.r) && eu(this.s) ? this : Bt();
  }
  addRecoveryBit(i) {
    return new Kl(this.r, this.s, i);
  }
  hasHighS() {
    return rd(this.s);
  }
  normalizeS() {
    return rd(this.s) ? new Kl(this.r, Ye(-this.s, yr), this.recovery) : this;
  }
  recoverPublicKey(i) {
    const { r: a, s: u, recovery: s } = this;
    [0, 1, 2, 3].includes(s) || Bt('recovery id invalid');
    const f = tg(ra(i, Ur)),
      d = s === 2 || s === 3 ? a + yr : a;
    d >= Ji && Bt('q.x invalid');
    const h = (s & 1) === 0 ? '02' : '03',
      p = Dr.fromHex(h + Xl(d)),
      y = lc(d, yr),
      _ = Ye(-f * y, yr),
      b = Ye(u * y, yr);
    return Wi.mulAddQUns(p, _, b);
  }
  toCompactRawBytes() {
    return lu(this.toCompactHex());
  }
  toCompactHex() {
    return Xl(this.r) + Xl(this.s);
  }
}
const eg = (r) => {
    const i = r.length * 8 - 256;
    i > 1024 && Bt('msg invalid');
    const a = uu(r);
    return i > 0 ? a >> BigInt(i) : a;
  },
  tg = (r) => Ye(eg(r), yr),
  qp = (r) => ac(r),
  zp = () => (typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0);
let Zl;
const rg = { lowS: !0 },
  ux = (r, i, a = rg) => {
    ['der', 'recovered', 'canonical'].some((b) => b in a) && Bt('option not supported');
    let { lowS: u } = a;
    u == null && (u = !0);
    const s = tg(ra(r)),
      f = qp(s),
      d = Wy(i),
      h = [qp(d), f];
    let p = a.extraEntropy;
    p && h.push(p === !0 ? Ys.randomBytes(Ur) : ra(p));
    const y = s,
      _ = (b) => {
        const S = eg(b);
        if (!eu(S)) return;
        const E = lc(S, yr),
          I = Wi.mul(S).aff(),
          P = Ye(I.x, yr);
        if (P === 0n) return;
        const J = Ye(E * Ye(y + Ye(d * P, yr), yr), yr);
        if (J === 0n) return;
        let W = J,
          z = (I.x === P ? 0 : 2) | Number(I.y & 1n);
        return u && rd(J) && ((W = Ye(-J, yr)), (z ^= 1)), new Kl(P, W, z);
      };
    return { seed: td(...h), k2sig: _ };
  };
function sx(r) {
  let i = bn(Ur),
    a = bn(Ur),
    u = 0;
  const s = () => {
      i.fill(1), a.fill(0), (u = 0);
    },
    f = 'drbg: tried 1000 values';
  {
    const d = (...y) => {
        const _ = Zl;
        return _ || Bt('etc.hmacSha256Sync not set'), _(a, i, ...y);
      },
      h = (y = bn()) => {
        (a = d(bn([0]), y)), (i = d()), y.length !== 0 && ((a = d(bn([1]), y)), (i = d()));
      },
      p = () => (u++ >= 1e3 && Bt(f), (i = d()), i);
    return (y, _) => {
      s(), h(y);
      let b;
      for (; !(b = _(p())); ) h();
      return s(), b;
    };
  }
}
const cx = (r, i, a = rg) => {
    const { seed: u, k2sig: s } = ux(r, i, a);
    return sx()(u, s);
  },
  ox = (r) => {
    (r = ra(r)), (r.length < Ur + 8 || r.length > 1024) && Bt('expected 40-1024b');
    const i = Ye(uu(r), yr - 1n);
    return ac(i + 1n);
  },
  Ys = {
    hexToBytes: lu,
    bytesToHex: gd,
    concatBytes: td,
    bytesToNumberBE: uu,
    numberToBytesBE: ac,
    mod: Ye,
    invert: lc,
    hmacSha256Async: async (r, ...i) => {
      const a = zp(),
        u = a && a.subtle;
      if (!u) return Bt('etc.hmacSha256Async or crypto.subtle must be defined');
      const s = await u.importKey('raw', r, { name: 'HMAC', hash: { name: 'SHA-256' } }, !1, ['sign']);
      return bn(await u.sign('HMAC', s, td(...i)));
    },
    hmacSha256Sync: Zl,
    hashToPrivateKey: ox,
    randomBytes: (r = 32) => {
      const i = zp();
      return (!i || !i.getRandomValues) && Bt('crypto.getRandomValues must be defined'), i.getRandomValues(bn(r));
    }
  };
Object.defineProperties(Ys, {
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return Zl;
    },
    set(r) {
      Zl || (Zl = r);
    }
  }
});
const Zi = 8,
  fx = () => {
    const r = [],
      i = 256 / Zi + 1;
    let a = Wi,
      u = a;
    for (let s = 0; s < i; s++) {
      (u = a), r.push(u);
      for (let f = 1; f < 2 ** (Zi - 1); f++) (u = u.add(a)), r.push(u);
      a = u.double();
    }
    return r;
  };
let Hp;
const dx = (r) => {
  const i = Hp || (Hp = fx()),
    a = (_, b) => {
      let S = b.negate();
      return _ ? S : b;
    };
  let u = Yl,
    s = Wi;
  const f = 1 + 256 / Zi,
    d = 2 ** (Zi - 1),
    h = BigInt(2 ** Zi - 1),
    p = 2 ** Zi,
    y = BigInt(Zi);
  for (let _ = 0; _ < f; _++) {
    const b = _ * d;
    let S = Number(r & h);
    (r >>= y), S > d && ((S -= p), (r += 1n));
    const E = b,
      I = b + Math.abs(S) - 1,
      P = _ % 2 !== 0,
      J = S < 0;
    S === 0 ? (s = s.add(a(P, i[E]))) : (u = u.add(a(J, i[I])));
  }
  return { p: u, f: s };
};
var ea = au();
Ys.hmacSha256Sync = (r, ...i) => Hy(Fy, r, Ys.concatBytes(...i));
class hx {
  constructor(i, a, u, s, f = Fs.V0) {
    Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'type', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'from', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'nonce', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'payload', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'signature', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.version = f),
      (this.type = i),
      (this.from = a),
      (this.nonce = u),
      (this.payload = s);
  }
  toTxDataBytes() {
    const i = [this.version, en(this.type), en(this.from.toString()), en(this.nonce.toString()), this.payload];
    return Zy.encode(i);
  }
  hash() {
    return Fy(this.toTxDataBytes());
  }
  sign(i) {
    const a = cx(this.hash(), ea.Buffer.from(i, 'hex'));
    return (this.signature = ea.Buffer.concat([a.toCompactRawBytes(), ea.Buffer.from([a.recovery])])), this;
  }
  isSigned() {
    return !!this.signature;
  }
}
function Fp(r) {
  if (!r.isSigned()) throw new Error('Transaction must be signed before mapping to API request');
  const i = {};
  return (
    (i.body = {
      type: r.type.toString(),
      userId: r.from.toString(),
      nonce: r.nonce.toString(),
      message: ea.Buffer.from(r.payload).toString('hex'),
      hash: ea.Buffer.from(r.hash()).toString('hex'),
      signature: ea.Buffer.from(r.signature).toString('hex')
    }),
    i
  );
}
var mx = async (r, i) => {
    let a = typeof i == 'function' ? await i(r) : i;
    if (a) return r.scheme === 'bearer' ? `Bearer ${a}` : r.scheme === 'basic' ? `Basic ${btoa(a)}` : a;
  },
  px = { bodySerializer: (r) => JSON.stringify(r, (i, a) => (typeof a == 'bigint' ? a.toString() : a)) },
  yx = (r) => {
    switch (r) {
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
  gx = (r) => {
    switch (r) {
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
  vx = (r) => {
    switch (r) {
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
  ng = ({ allowReserved: r, explode: i, name: a, style: u, value: s }) => {
    if (!i) {
      let h = (r ? s : s.map((p) => encodeURIComponent(p))).join(gx(u));
      switch (u) {
        case 'label':
          return `.${h}`;
        case 'matrix':
          return `;${a}=${h}`;
        case 'simple':
          return h;
        default:
          return `${a}=${h}`;
      }
    }
    let f = yx(u),
      d = s
        .map((h) =>
          u === 'label' || u === 'simple'
            ? r
              ? h
              : encodeURIComponent(h)
            : uc({ allowReserved: r, name: a, value: h })
        )
        .join(f);
    return u === 'label' || u === 'matrix' ? f + d : d;
  },
  uc = ({ allowReserved: r, name: i, value: a }) => {
    if (a == null) return '';
    if (typeof a == 'object')
      throw new Error(
        'Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.'
      );
    return `${i}=${r ? a : encodeURIComponent(a)}`;
  },
  ig = ({ allowReserved: r, explode: i, name: a, style: u, value: s }) => {
    if (s instanceof Date) return `${a}=${s.toISOString()}`;
    if (u !== 'deepObject' && !i) {
      let h = [];
      Object.entries(s).forEach(([y, _]) => {
        h = [...h, y, r ? _ : encodeURIComponent(_)];
      });
      let p = h.join(',');
      switch (u) {
        case 'form':
          return `${a}=${p}`;
        case 'label':
          return `.${p}`;
        case 'matrix':
          return `;${a}=${p}`;
        default:
          return p;
      }
    }
    let f = vx(u),
      d = Object.entries(s)
        .map(([h, p]) => uc({ allowReserved: r, name: u === 'deepObject' ? `${a}[${h}]` : h, value: p }))
        .join(f);
    return u === 'label' || u === 'matrix' ? f + d : d;
  },
  bx = /\{[^{}]+\}/g,
  Sx = ({ path: r, url: i }) => {
    let a = i,
      u = i.match(bx);
    if (u)
      for (let s of u) {
        let f = !1,
          d = s.substring(1, s.length - 1),
          h = 'simple';
        d.endsWith('*') && ((f = !0), (d = d.substring(0, d.length - 1))),
          d.startsWith('.')
            ? ((d = d.substring(1)), (h = 'label'))
            : d.startsWith(';') && ((d = d.substring(1)), (h = 'matrix'));
        let p = r[d];
        if (p == null) continue;
        if (Array.isArray(p)) {
          a = a.replace(s, ng({ explode: f, name: d, style: h, value: p }));
          continue;
        }
        if (typeof p == 'object') {
          a = a.replace(s, ig({ explode: f, name: d, style: h, value: p }));
          continue;
        }
        if (h === 'matrix') {
          a = a.replace(s, `;${uc({ name: d, value: p })}`);
          continue;
        }
        let y = encodeURIComponent(h === 'label' ? `.${p}` : p);
        a = a.replace(s, y);
      }
    return a;
  },
  ag =
    ({ allowReserved: r, array: i, object: a } = {}) =>
    (u) => {
      let s = [];
      if (u && typeof u == 'object')
        for (let f in u) {
          let d = u[f];
          if (d != null) {
            if (Array.isArray(d)) {
              s = [...s, ng({ allowReserved: r, explode: !0, name: f, style: 'form', value: d, ...i })];
              continue;
            }
            if (typeof d == 'object') {
              s = [...s, ig({ allowReserved: r, explode: !0, name: f, style: 'deepObject', value: d, ...a })];
              continue;
            }
            s = [...s, uc({ allowReserved: r, name: f, value: d })];
          }
        }
      return s.join('&');
    },
  xx = (r) => {
    var a;
    if (!r) return 'stream';
    let i = (a = r.split(';')[0]) == null ? void 0 : a.trim();
    if (i) {
      if (i.startsWith('application/json') || i.endsWith('+json')) return 'json';
      if (i === 'multipart/form-data') return 'formData';
      if (['application/', 'audio/', 'image/', 'video/'].some((u) => i.startsWith(u))) return 'blob';
      if (i.startsWith('text/')) return 'text';
    }
  },
  wx = async ({ security: r, ...i }) => {
    for (let a of r) {
      let u = await mx(a, i.auth);
      if (!u) continue;
      let s = a.name ?? 'Authorization';
      switch (a.in) {
        case 'query':
          i.query || (i.query = {}), (i.query[s] = u);
          break;
        case 'header':
        default:
          i.headers.set(s, u);
          break;
      }
      return;
    }
  },
  Vp = (r) =>
    Ex({
      baseUrl: r.baseUrl,
      path: r.path,
      query: r.query,
      querySerializer: typeof r.querySerializer == 'function' ? r.querySerializer : ag(r.querySerializer),
      url: r.url
    }),
  Ex = ({ baseUrl: r, path: i, query: a, querySerializer: u, url: s }) => {
    let f = s.startsWith('/') ? s : `/${s}`,
      d = (r ?? '') + f;
    i && (d = Sx({ path: i, url: d }));
    let h = a ? u(a) : '';
    return h.startsWith('?') && (h = h.substring(1)), h && (d += `?${h}`), d;
  },
  Gp = (r, i) => {
    var u;
    let a = { ...r, ...i };
    return (
      (u = a.baseUrl) != null && u.endsWith('/') && (a.baseUrl = a.baseUrl.substring(0, a.baseUrl.length - 1)),
      (a.headers = lg(r.headers, i.headers)),
      a
    );
  },
  lg = (...r) => {
    let i = new Headers();
    for (let a of r) {
      if (!a || typeof a != 'object') continue;
      let u = a instanceof Headers ? a.entries() : Object.entries(a);
      for (let [s, f] of u)
        if (f === null) i.delete(s);
        else if (Array.isArray(f)) for (let d of f) i.append(s, d);
        else f !== void 0 && i.set(s, typeof f == 'object' ? JSON.stringify(f) : f);
    }
    return i;
  },
  Vf = class {
    constructor() {
      Pm(this, '_fns');
      this._fns = [];
    }
    clear() {
      this._fns = [];
    }
    exists(r) {
      return this._fns.indexOf(r) !== -1;
    }
    eject(r) {
      let i = this._fns.indexOf(r);
      i !== -1 && (this._fns = [...this._fns.slice(0, i), ...this._fns.slice(i + 1)]);
    }
    use(r) {
      this._fns = [...this._fns, r];
    }
  },
  Ax = () => ({ error: new Vf(), request: new Vf(), response: new Vf() }),
  _x = ag({ allowReserved: !1, array: { explode: !0, style: 'form' }, object: { explode: !0, style: 'deepObject' } }),
  Nx = { 'Content-Type': 'application/json' },
  vd = (r = {}) => ({ ...px, headers: Nx, parseAs: 'auto', querySerializer: _x, ...r }),
  ug = (r = {}) => {
    let i = Gp(vd(), r),
      a = () => ({ ...i }),
      u = (d) => ((i = Gp(i, d)), a()),
      s = Ax(),
      f = async (d) => {
        let h = { ...i, ...d, fetch: d.fetch ?? i.fetch ?? globalThis.fetch, headers: lg(i.headers, d.headers) };
        h.security && (await wx({ ...h, security: h.security })),
          h.body && h.bodySerializer && (h.body = h.bodySerializer(h.body)),
          h.body || h.headers.delete('Content-Type');
        let p = Vp(h),
          y = { redirect: 'follow', ...h },
          _ = new Request(p, y);
        for (let J of s.request._fns) _ = await J(_, h);
        let b = h.fetch,
          S = await b(_);
        for (let J of s.response._fns) S = await J(S, _, h);
        let E = { request: _, response: S };
        if (S.ok) {
          if (S.status === 204 || S.headers.get('Content-Length') === '0') return { data: {}, ...E };
          let J = (h.parseAs === 'auto' ? xx(S.headers.get('Content-Type')) : h.parseAs) ?? 'json';
          if (J === 'stream') return { data: S.body, ...E };
          let W = await S[J]();
          return (
            J === 'json' &&
              (h.responseValidator && (await h.responseValidator(W)),
              h.responseTransformer && (W = await h.responseTransformer(W))),
            { data: W, ...E }
          );
        }
        let I = await S.text();
        try {
          I = JSON.parse(I);
        } catch {}
        let P = I;
        for (let J of s.error._fns) P = await J(I, S, _, h);
        if (((P = P || {}), h.throwOnError)) throw P;
        return { error: P, ...E };
      };
    return {
      buildUrl: Vp,
      connect: (d) => f({ ...d, method: 'CONNECT' }),
      delete: (d) => f({ ...d, method: 'DELETE' }),
      get: (d) => f({ ...d, method: 'GET' }),
      getConfig: a,
      head: (d) => f({ ...d, method: 'HEAD' }),
      interceptors: s,
      options: (d) => f({ ...d, method: 'OPTIONS' }),
      patch: (d) => f({ ...d, method: 'PATCH' }),
      post: (d) => f({ ...d, method: 'POST' }),
      put: (d) => f({ ...d, method: 'PUT' }),
      request: f,
      setConfig: u,
      trace: (d) => f({ ...d, method: 'TRACE' })
    };
  };
const Yt = ug(vd({ baseUrl: 'https://testnetopenapi.hibit.app' })),
  Tx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/timestamp', ...r }),
  Ox = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/assets', ...r }),
  Mx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/asset', ...r }),
  Rx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/chains', ...r }),
  Bx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/chain-balances', ...r }),
  Cx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/market/depth', ...r }),
  Dx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/markets/swap', ...r }),
  $p = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/markets/ticker', ...r }),
  Ux = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/markets/ticker/extended', ...r }),
  jx = (r) => (r.client ?? Yt).get({ url: '/v1/market/kline', ...r }),
  kx = (r) => (r.client ?? Yt).get({ url: '/v1/market/trade', ...r }),
  Ix = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/markets', ...r }),
  Lx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/market', ...r }),
  qx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/order/trades', ...r }),
  zx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/orders', ...r }),
  Hx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/order', ...r }),
  Fx = (r) =>
    ((r == null ? void 0 : r.client) ?? Yt).post({
      url: '/v1/tx/submit-spot-order',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    }),
  Vx = (r) =>
    ((r == null ? void 0 : r.client) ?? Yt).post({
      url: '/v1/tx/cancel-spot-order',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    }),
  Gx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/wallet/nonce', ...r }),
  $x = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/wallet/balances', ...r });
function Yp(r) {
  var i;
  return {
    assetId: r.assetId,
    chainId: r.chainId ? ar.fromString(r.chainId) : void 0,
    chainAssetType: RS(r.chainAssetType),
    contractAddress: r.contractAddress,
    decimalPlaces: r.decimalPlaces,
    isBaseToken: r.isBaseToken,
    displayName: r.displayName || void 0,
    assetSymbol: r.assetSymbol,
    subAssets: ((i = r.subAssets) == null ? void 0 : i.map((a) => Yx(a))) || void 0
  };
}
function Yx(r) {
  return {
    assetId: r.assetId,
    chainId: r.chainId ? ar.fromString(r.chainId) : void 0,
    chainAssetType: r.chainAssetType,
    contractAddress: r.contractAddress,
    decimalPlaces: r.decimalPlaces
  };
}
function Xx(r) {
  var i, a;
  return {
    query: {
      ChainIds: (i = r.chainIds) == null ? void 0 : i.map((u) => u.toString()),
      ChainAssetTypes: (a = r.chainAssetTypes) == null ? void 0 : a.map((u) => u.toString()),
      Limit: r.limit,
      Offset: r.offset,
      OrderBy: r.orderBy
    }
  };
}
function Kx(r) {
  return { query: { AssetId: r.assetId, TokenAddress: r.tokenAddress } };
}
function Zx(r) {
  var i;
  return { query: { AssetId: (i = r.assetId) == null ? void 0 : i.toString() } };
}
function Qx(r) {
  var i, a;
  return {
    query: {
      ChainIds: (i = r.chainIds) == null ? void 0 : i.map((u) => u.toString()),
      ChainAssetTypes: (a = r.chainAssetTypes) == null ? void 0 : a.map((u) => u.toString()),
      BaseAssetId: r.baseAssetId ? String(r.baseAssetId) : void 0,
      QuoteAssetId: r.quoteAssetId ? String(r.quoteAssetId) : void 0,
      Limit: r.limit,
      Offset: r.offset,
      OrderBy: r.orderBy
    }
  };
}
function Px(r) {
  return { query: { MarketId: String(r) } };
}
function Xp(r) {
  return {
    marketId: BigInt(r.marketId),
    marketSymbol: r.marketSymbol,
    baseAssetId: BigInt(r.baseAssetId),
    quoteAssetId: BigInt(r.quoteAssetId),
    depthLevels: r.depthLevels
  };
}
function Jx(r) {
  return { query: { MarketId: r ? String(r) : void 0 } };
}
function Kp(r) {
  var i, a;
  return {
    query: {
      MarketId: r.marketId ? String(r.marketId) : void 0,
      ChainIds: (i = r.chainIds) == null ? void 0 : i.map((u) => u.toString()),
      ChainAssetTypes: (a = r.chainAssetTypes) == null ? void 0 : a.map((u) => u.toString())
    }
  };
}
function Zp(r) {
  return {
    id: BigInt(r.id),
    open: Number(r.o),
    high: Number(r.h),
    low: Number(r.l),
    close: Number(r.c),
    volume: Number(r.v),
    amount: Number(r.a),
    timestamp: Number(r.t)
  };
}
function Wx(r) {
  return {
    id: BigInt(r.id),
    open: Number(r.o),
    high: Number(r.h),
    low: Number(r.l),
    close: Number(r.c),
    volume: Number(r.v),
    amount: Number(r.a),
    timestamp: Number(r.t),
    lastPriceInUsd: Number(r.lpusd),
    amountInUsd: Number(r.ausd),
    baseAssetSymbol: r.bas,
    quoteAssetSymbol: r.qas
  };
}
function ew(r) {
  return {
    query: {
      MarketId: String(r.marketId),
      TickSpace: r.tickSpace,
      Limit: r.limit,
      Offset: r.offset,
      OrderBy: r.orderBy
    }
  };
}
function tw(r) {
  return {
    open: Number(r.o),
    high: Number(r.h),
    low: Number(r.l),
    close: Number(r.c),
    volume: Number(r.v),
    amount: Number(r.a),
    timestamp: Number(r.t)
  };
}
function rw(r) {
  return {
    query: {
      MarketId: String(r.marketId),
      TradedAtStart: r.tradedAtStart,
      TradedAtEnd: r.tradedAtEnd,
      Limit: r.limit,
      Offset: r.offset,
      OrderBy: r.orderBy
    }
  };
}
function nw(r) {
  return {
    maker: r.maker || null,
    taker: r.taker,
    takerSide: r.takerSide,
    price: Number(r.p),
    volume: Number(r.v),
    amount: Number(r.a),
    timestamp: Number(r.t)
  };
}
function iw(r) {
  return { query: r ? { MarketId: String(r) } : {} };
}
function aw(r) {
  return {
    marketId: BigInt(r.marketId),
    poolAmount: Number(r.poolAmount),
    poolVolume: Number(r.poolVolume),
    poolLiquidity: BigInt(r.poolLiquidity)
  };
}
function lw(r) {
  return { query: { Index: r.index, MarketId: String(r.marketId), Limit: r.limit } };
}
function uw(r) {
  return {
    asks: r.asks.map((i) => ({ price: Number(i[0]), volume: Number(i[1]) })),
    bids: r.bids.map((i) => ({ price: Number(i[0]), volume: Number(i[1]) }))
  };
}
function sw(r) {
  return [!!r.orderId, !!r.clientOrderId, !!r.txHash].filter(Boolean).length === 1;
}
function cw(r) {
  return {
    query: {
      HIN: String(r.hin),
      Status: r.status,
      MarketId: r.marketId ? String(r.marketId) : void 0,
      OrderIds: r.orderIds,
      OrderCategory: r.orderCategory,
      OrderSide: r.orderSide,
      CreatedAtStart: r.createdAtStart,
      CreatedAtEnd: r.createdAtEnd,
      Limit: r.limit,
      Offset: r.offset,
      OrderBy: r.orderBy
    }
  };
}
function ow(r) {
  return { query: { OrderId: r.orderId, ClientOrderId: r.clientOrderId, TxHash: r.txHash } };
}
function Qp(r) {
  return {
    id: r.id,
    marketId: BigInt(r.mid),
    hin: BigInt(r.hin),
    category: r.cat,
    side: r.s,
    filledVolume: Number(r.fv),
    filledAmount: Number(r.fa),
    totalVolume: Number(r.tv),
    totalAmount: Number(r.ta),
    filledPrice: Number(r.fp),
    price: Number(r.p),
    status: r.st,
    timestamp: Number(r.t)
  };
}
function fw(r) {
  return { query: { OrderId: r } };
}
function dw(r) {
  return {
    tradeId: r.tid,
    filledPrice: Number(r.fp),
    filledVolume: Number(r.fv),
    filledAmount: Number(r.fa),
    tradeSide: r.ts,
    timestamp: Number(r.t)
  };
}
var Pp = {};
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
***************************************************************************** */ var Jp;
function hw() {
  if (Jp) return Pp;
  Jp = 1;
  var r;
  return (
    (function (i) {
      (function (a) {
        var u =
            typeof globalThis == 'object'
              ? globalThis
              : typeof Qf == 'object'
                ? Qf
                : typeof globalThis == 'object'
                  ? globalThis
                  : typeof this == 'object'
                    ? this
                    : p(),
          s = f(i);
        typeof u.Reflect < 'u' && (s = f(u.Reflect, s)), a(s, u), typeof u.Reflect > 'u' && (u.Reflect = i);
        function f(y, _) {
          return function (b, S) {
            Object.defineProperty(y, b, { configurable: !0, writable: !0, value: S }), _ && _(b, S);
          };
        }
        function d() {
          try {
            return Function('return this;')();
          } catch {}
        }
        function h() {
          try {
            return (0, eval)('(function() { return this; })()');
          } catch {}
        }
        function p() {
          return d() || h();
        }
      })(function (a, u) {
        var s = Object.prototype.hasOwnProperty,
          f = typeof Symbol == 'function',
          d = f && typeof Symbol.toPrimitive < 'u' ? Symbol.toPrimitive : '@@toPrimitive',
          h = f && typeof Symbol.iterator < 'u' ? Symbol.iterator : '@@iterator',
          p = typeof Object.create == 'function',
          y = { __proto__: [] } instanceof Array,
          _ = !p && !y,
          b = {
            create: p
              ? function () {
                  return ie(Object.create(null));
                }
              : y
                ? function () {
                    return ie({ __proto__: null });
                  }
                : function () {
                    return ie({});
                  },
            has: _
              ? function (j, L) {
                  return s.call(j, L);
                }
              : function (j, L) {
                  return L in j;
                },
            get: _
              ? function (j, L) {
                  return s.call(j, L) ? j[L] : void 0;
                }
              : function (j, L) {
                  return j[L];
                }
          },
          S = Object.getPrototypeOf(Function),
          E = typeof Map == 'function' && typeof Map.prototype.entries == 'function' ? Map : m(),
          I = typeof Set == 'function' && typeof Set.prototype.entries == 'function' ? Set : g(),
          P = typeof WeakMap == 'function' ? WeakMap : V(),
          J = f ? Symbol.for('@reflect-metadata:registry') : void 0,
          W = Be(),
          z = ze(W);
        function ve(j, L, de, Ne) {
          if (ye(de)) {
            if (!Q(j)) throw new TypeError();
            if (!re(L)) throw new TypeError();
            return X(j, L);
          } else {
            if (!Q(j)) throw new TypeError();
            if (!Oe(L)) throw new TypeError();
            if (!Oe(Ne) && !ye(Ne) && !O(Ne)) throw new TypeError();
            return O(Ne) && (Ne = void 0), (de = D(de)), Z(j, L, de, Ne);
          }
        }
        a('decorate', ve);
        function qe(j, L) {
          function de(Ne, Ce) {
            if (!Oe(Ne)) throw new TypeError();
            if (!ye(Ce) && !ue(Ce)) throw new TypeError();
            oe(j, L, Ne, Ce);
          }
          return de;
        }
        a('metadata', qe);
        function xe(j, L, de, Ne) {
          if (!Oe(de)) throw new TypeError();
          return ye(Ne) || (Ne = D(Ne)), oe(j, L, de, Ne);
        }
        a('defineMetadata', xe);
        function Ee(j, L, de) {
          if (!Oe(L)) throw new TypeError();
          return ye(de) || (de = D(de)), k(j, L, de);
        }
        a('hasMetadata', Ee);
        function De(j, L, de) {
          if (!Oe(L)) throw new TypeError();
          return ye(de) || (de = D(de)), R(j, L, de);
        }
        a('hasOwnMetadata', De);
        function v(j, L, de) {
          if (!Oe(L)) throw new TypeError();
          return ye(de) || (de = D(de)), $(j, L, de);
        }
        a('getMetadata', v);
        function w(j, L, de) {
          if (!Oe(L)) throw new TypeError();
          return ye(de) || (de = D(de)), H(j, L, de);
        }
        a('getOwnMetadata', w);
        function N(j, L) {
          if (!Oe(j)) throw new TypeError();
          return ye(L) || (L = D(L)), U(j, L);
        }
        a('getMetadataKeys', N);
        function G(j, L) {
          if (!Oe(j)) throw new TypeError();
          return ye(L) || (L = D(L)), ne(j, L);
        }
        a('getOwnMetadataKeys', G);
        function Y(j, L, de) {
          if (!Oe(L)) throw new TypeError();
          if ((ye(de) || (de = D(de)), !Oe(L))) throw new TypeError();
          ye(de) || (de = D(de));
          var Ne = A(L, de, !1);
          return ye(Ne) ? !1 : Ne.OrdinaryDeleteMetadata(j, L, de);
        }
        a('deleteMetadata', Y);
        function X(j, L) {
          for (var de = j.length - 1; de >= 0; --de) {
            var Ne = j[de],
              Ce = Ne(L);
            if (!ye(Ce) && !O(Ce)) {
              if (!re(Ce)) throw new TypeError();
              L = Ce;
            }
          }
          return L;
        }
        function Z(j, L, de, Ne) {
          for (var Ce = j.length - 1; Ce >= 0; --Ce) {
            var Ie = j[Ce],
              et = Ie(L, de, Ne);
            if (!ye(et) && !O(et)) {
              if (!Oe(et)) throw new TypeError();
              Ne = et;
            }
          }
          return Ne;
        }
        function k(j, L, de) {
          var Ne = R(j, L, de);
          if (Ne) return !0;
          var Ce = ge(L);
          return O(Ce) ? !1 : k(j, Ce, de);
        }
        function R(j, L, de) {
          var Ne = A(L, de, !1);
          return ye(Ne) ? !1 : ke(Ne.OrdinaryHasOwnMetadata(j, L, de));
        }
        function $(j, L, de) {
          var Ne = R(j, L, de);
          if (Ne) return H(j, L, de);
          var Ce = ge(L);
          if (!O(Ce)) return $(j, Ce, de);
        }
        function H(j, L, de) {
          var Ne = A(L, de, !1);
          if (!ye(Ne)) return Ne.OrdinaryGetOwnMetadata(j, L, de);
        }
        function oe(j, L, de, Ne) {
          var Ce = A(de, Ne, !0);
          Ce.OrdinaryDefineOwnMetadata(j, L, de, Ne);
        }
        function U(j, L) {
          var de = ne(j, L),
            Ne = ge(j);
          if (Ne === null) return de;
          var Ce = U(Ne, L);
          if (Ce.length <= 0) return de;
          if (de.length <= 0) return Ce;
          for (var Ie = new I(), et = [], Xe = 0, Fe = de; Xe < Fe.length; Xe++) {
            var Ve = Fe[Xe],
              Ge = Ie.has(Ve);
            Ge || (Ie.add(Ve), et.push(Ve));
          }
          for (var $e = 0, it = Ce; $e < it.length; $e++) {
            var Ve = it[$e],
              Ge = Ie.has(Ve);
            Ge || (Ie.add(Ve), et.push(Ve));
          }
          return et;
        }
        function ne(j, L) {
          var de = A(j, L, !1);
          return de ? de.OrdinaryOwnMetadataKeys(j, L) : [];
        }
        function we(j) {
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
        function ye(j) {
          return j === void 0;
        }
        function O(j) {
          return j === null;
        }
        function je(j) {
          return typeof j == 'symbol';
        }
        function Oe(j) {
          return typeof j == 'object' ? j !== null : typeof j == 'function';
        }
        function Pe(j, L) {
          switch (we(j)) {
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
          var de = 'string',
            Ne = ae(j, d);
          if (Ne !== void 0) {
            var Ce = Ne.call(j, de);
            if (Oe(Ce)) throw new TypeError();
            return Ce;
          }
          return Me(j);
        }
        function Me(j, L) {
          var de, Ne, Ce;
          {
            var Ie = j.toString;
            if (se(Ie)) {
              var Ne = Ie.call(j);
              if (!Oe(Ne)) return Ne;
            }
            var de = j.valueOf;
            if (se(de)) {
              var Ne = de.call(j);
              if (!Oe(Ne)) return Ne;
            }
          }
          throw new TypeError();
        }
        function ke(j) {
          return !!j;
        }
        function B(j) {
          return '' + j;
        }
        function D(j) {
          var L = Pe(j);
          return je(L) ? L : B(L);
        }
        function Q(j) {
          return Array.isArray
            ? Array.isArray(j)
            : j instanceof Object
              ? j instanceof Array
              : Object.prototype.toString.call(j) === '[object Array]';
        }
        function se(j) {
          return typeof j == 'function';
        }
        function re(j) {
          return typeof j == 'function';
        }
        function ue(j) {
          switch (we(j)) {
            case 3:
              return !0;
            case 4:
              return !0;
            default:
              return !1;
          }
        }
        function he(j, L) {
          return j === L || (j !== j && L !== L);
        }
        function ae(j, L) {
          var de = j[L];
          if (de != null) {
            if (!se(de)) throw new TypeError();
            return de;
          }
        }
        function M(j) {
          var L = ae(j, h);
          if (!se(L)) throw new TypeError();
          var de = L.call(j);
          if (!Oe(de)) throw new TypeError();
          return de;
        }
        function q(j) {
          return j.value;
        }
        function F(j) {
          var L = j.next();
          return L.done ? !1 : L;
        }
        function te(j) {
          var L = j.return;
          L && L.call(j);
        }
        function ge(j) {
          var L = Object.getPrototypeOf(j);
          if (typeof j != 'function' || j === S || L !== S) return L;
          var de = j.prototype,
            Ne = de && Object.getPrototypeOf(de);
          if (Ne == null || Ne === Object.prototype) return L;
          var Ce = Ne.constructor;
          return typeof Ce != 'function' || Ce === j ? L : Ce;
        }
        function Se() {
          var j;
          !ye(J) &&
            typeof u.Reflect < 'u' &&
            !(J in u.Reflect) &&
            typeof u.Reflect.defineMetadata == 'function' &&
            (j = rt(u.Reflect));
          var L,
            de,
            Ne,
            Ce = new P(),
            Ie = { registerProvider: et, getProvider: Fe, setProvider: Ge };
          return Ie;
          function et($e) {
            if (!Object.isExtensible(Ie)) throw new Error('Cannot add provider to a frozen registry.');
            switch (!0) {
              case j === $e:
                break;
              case ye(L):
                L = $e;
                break;
              case L === $e:
                break;
              case ye(de):
                de = $e;
                break;
              case de === $e:
                break;
              default:
                Ne === void 0 && (Ne = new I()), Ne.add($e);
                break;
            }
          }
          function Xe($e, it) {
            if (!ye(L)) {
              if (L.isProviderFor($e, it)) return L;
              if (!ye(de)) {
                if (de.isProviderFor($e, it)) return L;
                if (!ye(Ne))
                  for (var ot = M(Ne); ; ) {
                    var Dt = F(ot);
                    if (!Dt) return;
                    var dr = q(Dt);
                    if (dr.isProviderFor($e, it)) return te(ot), dr;
                  }
              }
            }
            if (!ye(j) && j.isProviderFor($e, it)) return j;
          }
          function Fe($e, it) {
            var ot = Ce.get($e),
              Dt;
            return (
              ye(ot) || (Dt = ot.get(it)),
              ye(Dt) && ((Dt = Xe($e, it)), ye(Dt) || (ye(ot) && ((ot = new E()), Ce.set($e, ot)), ot.set(it, Dt))),
              Dt
            );
          }
          function Ve($e) {
            if (ye($e)) throw new TypeError();
            return L === $e || de === $e || (!ye(Ne) && Ne.has($e));
          }
          function Ge($e, it, ot) {
            if (!Ve(ot)) throw new Error('Metadata provider not registered.');
            var Dt = Fe($e, it);
            if (Dt !== ot) {
              if (!ye(Dt)) return !1;
              var dr = Ce.get($e);
              ye(dr) && ((dr = new E()), Ce.set($e, dr)), dr.set(it, ot);
            }
            return !0;
          }
        }
        function Be() {
          var j;
          return (
            !ye(J) && Oe(u.Reflect) && Object.isExtensible(u.Reflect) && (j = u.Reflect[J]),
            ye(j) && (j = Se()),
            !ye(J) &&
              Oe(u.Reflect) &&
              Object.isExtensible(u.Reflect) &&
              Object.defineProperty(u.Reflect, J, { enumerable: !1, configurable: !1, writable: !1, value: j }),
            j
          );
        }
        function ze(j) {
          var L = new P(),
            de = {
              isProviderFor: function (Ve, Ge) {
                var $e = L.get(Ve);
                return ye($e) ? !1 : $e.has(Ge);
              },
              OrdinaryDefineOwnMetadata: et,
              OrdinaryHasOwnMetadata: Ce,
              OrdinaryGetOwnMetadata: Ie,
              OrdinaryOwnMetadataKeys: Xe,
              OrdinaryDeleteMetadata: Fe
            };
          return W.registerProvider(de), de;
          function Ne(Ve, Ge, $e) {
            var it = L.get(Ve),
              ot = !1;
            if (ye(it)) {
              if (!$e) return;
              (it = new E()), L.set(Ve, it), (ot = !0);
            }
            var Dt = it.get(Ge);
            if (ye(Dt)) {
              if (!$e) return;
              if (((Dt = new E()), it.set(Ge, Dt), !j.setProvider(Ve, Ge, de)))
                throw (it.delete(Ge), ot && L.delete(Ve), new Error('Wrong provider for target.'));
            }
            return Dt;
          }
          function Ce(Ve, Ge, $e) {
            var it = Ne(Ge, $e, !1);
            return ye(it) ? !1 : ke(it.has(Ve));
          }
          function Ie(Ve, Ge, $e) {
            var it = Ne(Ge, $e, !1);
            if (!ye(it)) return it.get(Ve);
          }
          function et(Ve, Ge, $e, it) {
            var ot = Ne($e, it, !0);
            ot.set(Ve, Ge);
          }
          function Xe(Ve, Ge) {
            var $e = [],
              it = Ne(Ve, Ge, !1);
            if (ye(it)) return $e;
            for (var ot = it.keys(), Dt = M(ot), dr = 0; ; ) {
              var la = F(Dt);
              if (!la) return ($e.length = dr), $e;
              var ua = q(la);
              try {
                $e[dr] = ua;
              } catch (Tt) {
                try {
                  te(Dt);
                } finally {
                  throw Tt;
                }
              }
              dr++;
            }
          }
          function Fe(Ve, Ge, $e) {
            var it = Ne(Ge, $e, !1);
            if (ye(it) || !it.delete(Ve)) return !1;
            if (it.size === 0) {
              var ot = L.get(Ge);
              ye(ot) || (ot.delete($e), ot.size === 0 && L.delete(ot));
            }
            return !0;
          }
        }
        function rt(j) {
          var L = j.defineMetadata,
            de = j.hasOwnMetadata,
            Ne = j.getOwnMetadata,
            Ce = j.getOwnMetadataKeys,
            Ie = j.deleteMetadata,
            et = new P(),
            Xe = {
              isProviderFor: function (Fe, Ve) {
                var Ge = et.get(Fe);
                return !ye(Ge) && Ge.has(Ve)
                  ? !0
                  : Ce(Fe, Ve).length
                    ? (ye(Ge) && ((Ge = new I()), et.set(Fe, Ge)), Ge.add(Ve), !0)
                    : !1;
              },
              OrdinaryDefineOwnMetadata: L,
              OrdinaryHasOwnMetadata: de,
              OrdinaryGetOwnMetadata: Ne,
              OrdinaryOwnMetadataKeys: Ce,
              OrdinaryDeleteMetadata: Ie
            };
          return Xe;
        }
        function A(j, L, de) {
          var Ne = W.getProvider(j, L);
          if (!ye(Ne)) return Ne;
          if (de) {
            if (W.setProvider(j, L, z)) return z;
            throw new Error('Illegal state.');
          }
        }
        function m() {
          var j = {},
            L = [],
            de = (function () {
              function Xe(Fe, Ve, Ge) {
                (this._index = 0), (this._keys = Fe), (this._values = Ve), (this._selector = Ge);
              }
              return (
                (Xe.prototype['@@iterator'] = function () {
                  return this;
                }),
                (Xe.prototype[h] = function () {
                  return this;
                }),
                (Xe.prototype.next = function () {
                  var Fe = this._index;
                  if (Fe >= 0 && Fe < this._keys.length) {
                    var Ve = this._selector(this._keys[Fe], this._values[Fe]);
                    return (
                      Fe + 1 >= this._keys.length
                        ? ((this._index = -1), (this._keys = L), (this._values = L))
                        : this._index++,
                      { value: Ve, done: !1 }
                    );
                  }
                  return { value: void 0, done: !0 };
                }),
                (Xe.prototype.throw = function (Fe) {
                  throw (this._index >= 0 && ((this._index = -1), (this._keys = L), (this._values = L)), Fe);
                }),
                (Xe.prototype.return = function (Fe) {
                  return (
                    this._index >= 0 && ((this._index = -1), (this._keys = L), (this._values = L)),
                    { value: Fe, done: !0 }
                  );
                }),
                Xe
              );
            })(),
            Ne = (function () {
              function Xe() {
                (this._keys = []), (this._values = []), (this._cacheKey = j), (this._cacheIndex = -2);
              }
              return (
                Object.defineProperty(Xe.prototype, 'size', {
                  get: function () {
                    return this._keys.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (Xe.prototype.has = function (Fe) {
                  return this._find(Fe, !1) >= 0;
                }),
                (Xe.prototype.get = function (Fe) {
                  var Ve = this._find(Fe, !1);
                  return Ve >= 0 ? this._values[Ve] : void 0;
                }),
                (Xe.prototype.set = function (Fe, Ve) {
                  var Ge = this._find(Fe, !0);
                  return (this._values[Ge] = Ve), this;
                }),
                (Xe.prototype.delete = function (Fe) {
                  var Ve = this._find(Fe, !1);
                  if (Ve >= 0) {
                    for (var Ge = this._keys.length, $e = Ve + 1; $e < Ge; $e++)
                      (this._keys[$e - 1] = this._keys[$e]), (this._values[$e - 1] = this._values[$e]);
                    return (
                      this._keys.length--,
                      this._values.length--,
                      he(Fe, this._cacheKey) && ((this._cacheKey = j), (this._cacheIndex = -2)),
                      !0
                    );
                  }
                  return !1;
                }),
                (Xe.prototype.clear = function () {
                  (this._keys.length = 0), (this._values.length = 0), (this._cacheKey = j), (this._cacheIndex = -2);
                }),
                (Xe.prototype.keys = function () {
                  return new de(this._keys, this._values, Ce);
                }),
                (Xe.prototype.values = function () {
                  return new de(this._keys, this._values, Ie);
                }),
                (Xe.prototype.entries = function () {
                  return new de(this._keys, this._values, et);
                }),
                (Xe.prototype['@@iterator'] = function () {
                  return this.entries();
                }),
                (Xe.prototype[h] = function () {
                  return this.entries();
                }),
                (Xe.prototype._find = function (Fe, Ve) {
                  if (!he(this._cacheKey, Fe)) {
                    this._cacheIndex = -1;
                    for (var Ge = 0; Ge < this._keys.length; Ge++)
                      if (he(this._keys[Ge], Fe)) {
                        this._cacheIndex = Ge;
                        break;
                      }
                  }
                  return (
                    this._cacheIndex < 0 &&
                      Ve &&
                      ((this._cacheIndex = this._keys.length), this._keys.push(Fe), this._values.push(void 0)),
                    this._cacheIndex
                  );
                }),
                Xe
              );
            })();
          return Ne;
          function Ce(Xe, Fe) {
            return Xe;
          }
          function Ie(Xe, Fe) {
            return Fe;
          }
          function et(Xe, Fe) {
            return [Xe, Fe];
          }
        }
        function g() {
          var j = (function () {
            function L() {
              this._map = new E();
            }
            return (
              Object.defineProperty(L.prototype, 'size', {
                get: function () {
                  return this._map.size;
                },
                enumerable: !0,
                configurable: !0
              }),
              (L.prototype.has = function (de) {
                return this._map.has(de);
              }),
              (L.prototype.add = function (de) {
                return this._map.set(de, de), this;
              }),
              (L.prototype.delete = function (de) {
                return this._map.delete(de);
              }),
              (L.prototype.clear = function () {
                this._map.clear();
              }),
              (L.prototype.keys = function () {
                return this._map.keys();
              }),
              (L.prototype.values = function () {
                return this._map.keys();
              }),
              (L.prototype.entries = function () {
                return this._map.entries();
              }),
              (L.prototype['@@iterator'] = function () {
                return this.keys();
              }),
              (L.prototype[h] = function () {
                return this.keys();
              }),
              L
            );
          })();
          return j;
        }
        function V() {
          var j = 16,
            L = b.create(),
            de = Ne();
          return (function () {
            function Fe() {
              this._key = Ne();
            }
            return (
              (Fe.prototype.has = function (Ve) {
                var Ge = Ce(Ve, !1);
                return Ge !== void 0 ? b.has(Ge, this._key) : !1;
              }),
              (Fe.prototype.get = function (Ve) {
                var Ge = Ce(Ve, !1);
                return Ge !== void 0 ? b.get(Ge, this._key) : void 0;
              }),
              (Fe.prototype.set = function (Ve, Ge) {
                var $e = Ce(Ve, !0);
                return ($e[this._key] = Ge), this;
              }),
              (Fe.prototype.delete = function (Ve) {
                var Ge = Ce(Ve, !1);
                return Ge !== void 0 ? delete Ge[this._key] : !1;
              }),
              (Fe.prototype.clear = function () {
                this._key = Ne();
              }),
              Fe
            );
          })();
          function Ne() {
            var Fe;
            do Fe = '@@WeakMap@@' + Xe();
            while (b.has(L, Fe));
            return (L[Fe] = !0), Fe;
          }
          function Ce(Fe, Ve) {
            if (!s.call(Fe, de)) {
              if (!Ve) return;
              Object.defineProperty(Fe, de, { value: b.create() });
            }
            return Fe[de];
          }
          function Ie(Fe, Ve) {
            for (var Ge = 0; Ge < Ve; ++Ge) Fe[Ge] = (Math.random() * 255) | 0;
            return Fe;
          }
          function et(Fe) {
            if (typeof Uint8Array == 'function') {
              var Ve = new Uint8Array(Fe);
              return (
                typeof crypto < 'u'
                  ? crypto.getRandomValues(Ve)
                  : typeof msCrypto < 'u'
                    ? msCrypto.getRandomValues(Ve)
                    : Ie(Ve, Fe),
                Ve
              );
            }
            return Ie(new Array(Fe), Fe);
          }
          function Xe() {
            var Fe = et(j);
            (Fe[6] = (Fe[6] & 79) | 64), (Fe[8] = (Fe[8] & 191) | 128);
            for (var Ve = '', Ge = 0; Ge < j; ++Ge) {
              var $e = Fe[Ge];
              (Ge === 4 || Ge === 6 || Ge === 8) && (Ve += '-'),
                $e < 16 && (Ve += '0'),
                (Ve += $e.toString(16).toLowerCase());
            }
            return Ve;
          }
        }
        function ie(j) {
          return (j.__ = void 0), delete j.__, j;
        }
      });
    })(r || (r = {})),
    Pp
  );
}
hw();
const sg = Symbol('format'),
  cg = Symbol('cbor_biguint');
function cr(r) {
  return Reflect.metadata(sg, r);
}
function su() {
  return Reflect.metadata(cg, !0);
}
class Wp {
  static getCborIndex(i, a) {
    return Reflect.getMetadata(sg, i, a);
  }
  static isCborBigUint(i, a) {
    return Reflect.getMetadata(cg, i, a);
  }
}
class cu {
  constructor(i) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = i);
  }
  static fromString(i) {
    if (!i) throw new Error('Invalid OrderId');
    const a = i.toLowerCase().startsWith('0x') ? i.slice(2) : i;
    if (!/^[0-9a-f]+$/i.test(a)) throw new Error('Invalid OrderId: not a valid hex string');
    return new cu(new en(`0x${a}`));
  }
  toString() {
    return this.value.toString();
  }
  equals(i) {
    return i ? this.value.isEqualTo(i.value) : !1;
  }
}
class mw {
  static encode(i) {
    const a = this.createCborArray(i);
    return ea.Buffer.from(Zy.encode(a));
  }
  static createCborArray(i) {
    if (!i) return [];
    const a = Object.getOwnPropertyNames(i),
      u = [];
    for (const s of a) {
      const f = i[s],
        d = Wp.getCborIndex(i, s);
      d !== void 0 && (u[d] = this.processValue(f, i, s));
    }
    return u;
  }
  static processValue(i, a, u) {
    return i === void 0
      ? null
      : i instanceof en
        ? i
        : i instanceof Rt || i instanceof He || i instanceof cu
          ? i.value
          : i instanceof Uint8Array
            ? i
            : i instanceof Array
              ? this.processArray(i)
              : i instanceof Object
                ? this.createCborArray(i)
                : this.processPrimitive(i, a, u);
  }
  static processArray(i) {
    return i.map((a) => this.createCborArray(a));
  }
  static processPrimitive(i, a, u) {
    return Wp.isCborBigUint(a, u) || typeof i == 'bigint' || typeof i == 'number'
      ? i == null
        ? null
        : en(i.toString())
      : i;
  }
}
class Ms {
  static createTransaction(i, a, u, s, f = Fs.V0) {
    const d = mw.encode(s);
    return new hx(i, a, u, d, f);
  }
  static sign(i, a) {
    return i.sign(a);
  }
}
function pw(r) {
  return { query: { HIN: String(r) } };
}
function yw(r) {
  return { query: { HIN: String(r.hin), AssetId: r.assetId ? String(r.assetId) : void 0 } };
}
class _r extends Error {
  constructor(i) {
    super(i), (this.name = 'HibitError');
  }
  static throwBadRequestError(i, a, u) {
    throw a !== void 0 && u !== void 0
      ? new _r(`Bad request: ${i} failed with code ${a} and message ${u}`)
      : a !== void 0
        ? new _r(`Bad request: ${i} failed with code ${a}`)
        : u !== void 0
          ? new _r(`Bad request: ${i} failed with message ${u}`)
          : new _r(`Bad request: ${i}`);
  }
  static throwInvalidResponseError(i) {
    throw new _r(`Invalid response: ${i}`);
  }
  static throwRequiredHINError(i) {
    throw new _r(`HIN is required: ${i}`);
  }
  static throwRequiredPrivKeyError(i) {
    throw new _r(`Private key is required: ${i}`);
  }
}
function or(r, i, a, u) {
  var s = arguments.length,
    f = s < 3 ? i : u === null ? (u = Object.getOwnPropertyDescriptor(i, a)) : u,
    d;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') f = Reflect.decorate(r, i, a, u);
  else for (var h = r.length - 1; h >= 0; h--) (d = r[h]) && (f = (s < 3 ? d(f) : s > 3 ? d(i, a, f) : d(i, a)) || f);
  return s > 3 && f && Object.defineProperty(i, a, f), f;
}
function fr(r, i) {
  if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function') return Reflect.metadata(r, i);
}
function Ql(r, i) {
  const a = new en(r),
    u = new en(10).pow(i);
  return BigInt(a.multipliedBy(u).toFixed(0));
}
const gw = 32,
  vw = 'https://testnetopenapi.hibit.app',
  bw = 'https://openapi.hibit.app',
  Sw = 'https://brokerapi.hibit.app',
  xw = 'https://testnetbrokerapi.hibit.app';
class ou {
  constructor(i) {
    Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'price', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'volume', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.assign(this, i);
  }
}
or([cr(0), su(), fr('design:type', Number)], ou.prototype, 'orderSide', void 0);
or([cr(1), fr('design:type', BigInt)], ou.prototype, 'price', void 0);
or([cr(2), fr('design:type', BigInt)], ou.prototype, 'volume', void 0);
class ia {
  constructor(i) {
    Object.defineProperty(this, 'exactTokens', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'exactTokensType', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'minOut', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'maxIn', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.assign(this, i);
  }
}
or([cr(0), fr('design:type', BigInt)], ia.prototype, 'exactTokens', void 0);
or([cr(1), su(), fr('design:type', Number)], ia.prototype, 'exactTokensType', void 0);
or([cr(2), su(), fr('design:type', Number)], ia.prototype, 'orderSide', void 0);
or([cr(3), fr('design:type', BigInt)], ia.prototype, 'minOut', void 0);
or([cr(4), fr('design:type', BigInt)], ia.prototype, 'maxIn', void 0);
class fu {
  constructor(i) {
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
      Object.assign(this, i);
  }
}
or([cr(0), su(), fr('design:type', Number)], fu.prototype, 'orderCategory', void 0);
or([cr(1), fr('design:type', BigInt)], fu.prototype, 'marketId', void 0);
or([cr(2), fr('design:type', ou)], fu.prototype, 'limitOrderDetails', void 0);
or([cr(3), fr('design:type', ia)], fu.prototype, 'swapV2OrderDetails', void 0);
class du {
  constructor(i) {
    Object.defineProperty(this, 'marketId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'isCancelAll', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.isCancelAll = !1),
      Object.assign(this, i);
  }
}
or([cr(0), fr('design:type', BigInt)], du.prototype, 'marketId', void 0);
or([cr(1), fr('design:type', cu)], du.prototype, 'orderId', void 0);
or([cr(2), su(), fr('design:type', Number)], du.prototype, 'orderSide', void 0);
or([cr(3), fr('design:type', Boolean)], du.prototype, 'isCancelAll', void 0);
function ww(r, i) {
  let a, u, s;
  return (
    r.exactTokensType === _i.Source
      ? ((a = r.orderSide === _t.Ask ? i.baseAssetDecimals : i.quoteAssetDecimals),
        (u = r.orderSide === _t.Ask ? i.quoteAssetDecimals : i.baseAssetDecimals),
        (s = r.orderSide === _t.Ask ? i.baseAssetDecimals : i.quoteAssetDecimals))
      : ((a = r.orderSide === _t.Ask ? i.quoteAssetDecimals : i.baseAssetDecimals),
        (u = r.orderSide === _t.Ask ? i.baseAssetDecimals : i.quoteAssetDecimals),
        (s = r.orderSide === _t.Ask ? i.quoteAssetDecimals : i.baseAssetDecimals)),
    new ia({
      exactTokens: Ql(r.exactTokens, a),
      exactTokensType: r.exactTokensType,
      orderSide: r.orderSide,
      minOut: r.minOut ? Ql(r.minOut, u) : void 0,
      maxIn: r.maxIn ? Ql(r.maxIn, s) : void 0
    })
  );
}
function Ew(r, i) {
  return new ou({ orderSide: r.orderSide, price: Ql(r.price, gw), volume: Ql(r.volume, i.baseAssetDecimals) });
}
function Aw(r, i) {
  return new fu({
    orderCategory: r.orderCategory,
    marketId: r.marketId,
    limitOrderDetails: r.limitOrderDetails ? Ew(r.limitOrderDetails, i) : void 0,
    swapV2OrderDetails: r.swapV2OrderDetails ? ww(r.swapV2OrderDetails, i) : void 0
  });
}
function _w(r) {
  return new du({
    marketId: r.marketId,
    orderId: r.orderId ? cu.fromString(r.orderId) : void 0,
    orderSide: r.orderSide,
    isCancelAll: r.isCancelAll
  });
}
class Nw {
  constructor() {
    Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  getOptions() {
    return this.options;
  }
  setOptions(i) {
    (this.options = i), Yt.setConfig({ baseUrl: i.network === cn.Mainnet ? bw : vw });
  }
  async getTimestamp() {
    var u, s;
    const i = 'getTimestamp',
      a = await Tx();
    return (
      this.ensureSuccess(i, a.data),
      ((s = (u = a.data) == null ? void 0 : u.data) != null && s.timestamp) || _r.throwInvalidResponseError(i),
      a.data.data.timestamp
    );
  }
  async getChains() {
    const i = 'getChains',
      a = await Rx();
    return this.ensureSuccess(i, a.data), a.data.data.map((u) => MS(u));
  }
  async getAssets(i) {
    const a = 'getAssets',
      u = await Ox(Xx(i));
    return (
      this.ensureSuccess(a, u.data), { items: u.data.data.items.map((s) => Yp(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getAsset(i) {
    const a = 'getAsset',
      u = await Mx(Kx(i));
    return this.ensureSuccess(a, u.data), u.data.data.map((s) => Yp(s));
  }
  async getChainBalances(i) {
    const a = 'getChainBalances',
      u = await Bx(Zx(i));
    this.ensureSuccess(a, u.data);
    const s = new Map();
    for (const [f, d] of Object.entries(u.data.data)) s.set(f, en(d));
    return s;
  }
  async getMarkets(i) {
    const a = 'getMarkets',
      u = await Ix(Qx(i));
    return (
      this.ensureSuccess(a, u.data), { items: u.data.data.items.map((s) => Xp(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getMarket(i) {
    const a = 'getMarket',
      u = await Lx(Px(i));
    return this.ensureSuccess(a, u.data), Xp(u.data.data);
  }
  async getMarketsTicker(i) {
    const a = 'getMarketsTicker',
      u = await $p(Jx(i));
    return this.ensureSuccess(a, u.data), u.data.data.items.map((s) => Zp(s));
  }
  async getMarkets24HrTicker(i) {
    const a = 'getMarkets24HrTicker',
      u = await $p(Kp(i || {}));
    return this.ensureSuccess(a, u.data), u.data.data.items.map((s) => Zp(s));
  }
  async getMarkets24HrTickerExtended(i) {
    const a = 'getMarkets24HrTickerExtended',
      u = await Ux(Kp(i || {}));
    return this.ensureSuccess(a, u.data), u.data.data.items.map((s) => Wx(s));
  }
  async getMarketsSwapInfo(i) {
    const a = 'getMarketsSwapInfo',
      u = await Dx(iw(i));
    return this.ensureSuccess(a, u.data), u.data.data.items.map((s) => aw(s));
  }
  async getMarketDepth(i) {
    const a = 'getMarketDepth',
      u = await Cx(lw(i));
    return this.ensureSuccess(a, u.data), uw(u.data.data);
  }
  async getMarketKline(i) {
    const a = 'getMarketKline',
      u = await jx(ew(i));
    return (
      this.ensureSuccess(a, u.data), { items: u.data.data.items.map((s) => tw(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getMarketTrade(i) {
    const a = 'getMarketTrade',
      u = await kx(rw(i));
    return (
      this.ensureSuccess(a, u.data), { items: u.data.data.items.map((s) => nw(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getOrders(i) {
    const a = 'getOrders';
    this.ensureHIN(a);
    const u = await zx(cw(i));
    return (
      this.ensureSuccess(a, u.data), { items: u.data.data.items.map((s) => Qp(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getOrder(i) {
    const a = 'getOrder';
    sw(i) ||
      _r.throwBadRequestError(
        a,
        400,
        'Must have exactly one of the following properties set: `OrderId`, `ClientOrderId`, or `TxHash`'
      );
    const u = await Hx(ow(i));
    return this.ensureSuccess(a, u.data), Qp(u.data.data);
  }
  async getOrderTrades(i) {
    const a = 'getOrderTrades',
      u = await qx(fw(i));
    return this.ensureSuccess(a, u.data), u.data.data.map((s) => dw(s));
  }
  async submitSpotOrder(i, a, u) {
    const s = 'submitSpotOrder';
    this.ensurePrivateKey(s);
    const f = u ? BigInt(u) : await this.getNonce(this.options.hin),
      d = Aw(i, a),
      h = Ms.createTransaction(Hs.CreateSpotOrder, this.options.hin, f | 0n, d),
      p = Ms.sign(h, this.options.proxyKey),
      y = await Fx(Fp(p));
    this.ensureSuccess(s, y.data);
  }
  async cancelSpotOrder(i, a) {
    const u = 'cancelSpotOrder';
    this.ensurePrivateKey(u), (i.isCancelAll === void 0 || i.isCancelAll === null) && (i.isCancelAll = !1);
    const s = a ? BigInt(a) : await this.getNonce(this.options.hin),
      f = _w(i),
      d = Ms.createTransaction(Hs.CancelSpotOrder, this.options.hin, s | 0n, f),
      h = Ms.sign(d, this.options.proxyKey),
      p = await Vx(Fp(h));
    this.ensureSuccess(u, p.data);
  }
  async getWalletBalances(i) {
    const a = 'getWalletBalances',
      u = await $x(yw(i));
    this.ensureSuccess(a, u.data);
    const s = new Map();
    for (const [f, d] of Object.entries(u.data.data)) s.set(f, en(d));
    return s;
  }
  async getNonce(i) {
    const a = 'getNonce',
      u = await Gx(pw(i));
    return this.ensureSuccess(a, u.data), BigInt(u.data.data.nonce);
  }
  ensureSuccess(i, a) {
    (a == null ? void 0 : a.code) != 200 &&
      _r.throwBadRequestError(i, a == null ? void 0 : a.code, a == null ? void 0 : a.message);
  }
  ensurePrivateKey(i) {
    this.ensureHIN(i), this.options.proxyKey || _r.throwRequiredPrivKeyError(i);
  }
  ensureHIN(i) {
    this.options.hin || _r.throwRequiredHINError(i);
  }
}
const Ct = ({ title: r, form: i, loading: a, result: u, error: s }) =>
  T.jsxs('section', {
    children: [
      T.jsx('h2', { className: 'text-lg font-bold', children: r }),
      T.jsxs('div', {
        className: 'flex mt-2 border rounded-lg overflow-hidden',
        children: [
          T.jsx('div', { className: `${typeof u < 'u' ? 'max-w-1/2 border-r' : 'flex-1'} p-4`, children: i }),
          typeof u < 'u' &&
            T.jsxs('div', {
              className: 'p-4 flex flex-col gap-2 overflow-hidden',
              children: [
                T.jsx('p', { className: 'text-sm text-gray-600', children: 'Result' }),
                T.jsx('pre', {
                  className: 'max-w-full max-h-[500px] overflow-auto',
                  children: a
                    ? 'loading...'
                    : JSON.stringify(
                        u,
                        (f, d) => {
                          if (typeof d == 'bigint') return String(d);
                          if (d instanceof Map) {
                            const h = {};
                            return (
                              d.forEach((p, y) => {
                                h[y] = String(p);
                              }),
                              h
                            );
                          }
                          return d;
                        },
                        2
                      )
                }),
                T.jsx('pre', { className: 'text-red-500 whitespace-pre-wrap', children: s })
              ]
            })
        ]
      })
    ]
  });
function Tw({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    h = async () => {
      a(!0), s(null), d('');
      try {
        s(await r.getTimestamp());
      } catch (p) {
        d(p.message ?? JSON.stringify(p));
      } finally {
        a(!1);
      }
    };
  return T.jsx(Ct, {
    title: 'GetTimestamp',
    form: T.jsx('div', {
      children: T.jsx('button', { className: 'btn', onClick: h, disabled: i, children: i ? 'Loading...' : 'Submit' })
    }),
    loading: i,
    result: u,
    error: f
  });
}
function Ow({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    h = async () => {
      a(!0), s(null), d('');
      try {
        s(await r.getChains());
      } catch (p) {
        d(p.message ?? JSON.stringify(p));
      } finally {
        a(!1);
      }
    };
  return T.jsx(Ct, {
    title: 'GetChains',
    form: T.jsx('div', {
      children: T.jsx('button', { className: 'btn', onClick: h, disabled: i, children: i ? 'Loading...' : 'Submit' })
    }),
    loading: i,
    result: u,
    error: f
  });
}
var hu = (r) => r.type === 'checkbox',
  Qi = (r) => r instanceof Date,
  pr = (r) => r == null;
const og = (r) => typeof r == 'object';
var $t = (r) => !pr(r) && !Array.isArray(r) && og(r) && !Qi(r),
  fg = (r) => ($t(r) && r.target ? (hu(r.target) ? r.target.checked : r.target.value) : r),
  Mw = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
  dg = (r, i) => r.has(Mw(i)),
  Rw = (r) => {
    const i = r.constructor && r.constructor.prototype;
    return $t(i) && i.hasOwnProperty('isPrototypeOf');
  },
  bd = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Er(r) {
  let i;
  const a = Array.isArray(r),
    u = typeof FileList < 'u' ? r instanceof FileList : !1;
  if (r instanceof Date) i = new Date(r);
  else if (r instanceof Set) i = new Set(r);
  else if (!(bd && (r instanceof Blob || u)) && (a || $t(r)))
    if (((i = a ? [] : {}), !a && !Rw(r))) i = r;
    else for (const s in r) r.hasOwnProperty(s) && (i[s] = Er(r[s]));
  else return r;
  return i;
}
var sc = (r) => (Array.isArray(r) ? r.filter(Boolean) : []),
  Gt = (r) => r === void 0,
  Le = (r, i, a) => {
    if (!i || !$t(r)) return a;
    const u = sc(i.split(/[,[\].]+?/)).reduce((s, f) => (pr(s) ? s : s[f]), r);
    return Gt(u) || u === r ? (Gt(r[i]) ? a : r[i]) : u;
  },
  Wr = (r) => typeof r == 'boolean',
  Sd = (r) => /^\w*$/.test(r),
  hg = (r) => sc(r.replace(/["|']|\]/g, '').split(/\.|\[/)),
  xt = (r, i, a) => {
    let u = -1;
    const s = Sd(i) ? [i] : hg(i),
      f = s.length,
      d = f - 1;
    for (; ++u < f; ) {
      const h = s[u];
      let p = a;
      if (u !== d) {
        const y = r[h];
        p = $t(y) || Array.isArray(y) ? y : isNaN(+s[u + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      (r[h] = p), (r = r[h]);
    }
    return r;
  };
const Xs = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  un = { onBlur: 'onBlur', onChange: 'onChange', onSubmit: 'onSubmit', onTouched: 'onTouched', all: 'all' },
  Fn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
  },
  Bw = wt.createContext(null),
  xd = () => wt.useContext(Bw);
var mg = (r, i, a, u = !0) => {
    const s = { defaultValues: i._defaultValues };
    for (const f in r)
      Object.defineProperty(s, f, {
        get: () => {
          const d = f;
          return i._proxyFormState[d] !== un.all && (i._proxyFormState[d] = !u || un.all), a && (a[d] = !0), r[d];
        }
      });
    return s;
  },
  Ar = (r) => $t(r) && !Object.keys(r).length,
  pg = (r, i, a, u) => {
    a(r);
    const { name: s, ...f } = r;
    return (
      Ar(f) || Object.keys(f).length >= Object.keys(i).length || Object.keys(f).find((d) => i[d] === (!u || un.all))
    );
  },
  Pl = (r) => (Array.isArray(r) ? r : [r]),
  yg = (r, i, a) => !r || !i || r === i || Pl(r).some((u) => u && (a ? u === i : u.startsWith(i) || i.startsWith(u)));
function wd(r) {
  const i = wt.useRef(r);
  (i.current = r),
    wt.useEffect(() => {
      const a = !r.disabled && i.current.subject && i.current.subject.subscribe({ next: i.current.next });
      return () => {
        a && a.unsubscribe();
      };
    }, [r.disabled]);
}
function Cw(r) {
  const i = xd(),
    { control: a = i.control, disabled: u, name: s, exact: f } = r || {},
    [d, h] = wt.useState(a._formState),
    p = wt.useRef(!0),
    y = wt.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    }),
    _ = wt.useRef(s);
  return (
    (_.current = s),
    wd({
      disabled: u,
      next: (b) =>
        p.current && yg(_.current, b.name, f) && pg(b, y.current, a._updateFormState) && h({ ...a._formState, ...b }),
      subject: a._subjects.state
    }),
    wt.useEffect(
      () => (
        (p.current = !0),
        y.current.isValid && a._updateValid(!0),
        () => {
          p.current = !1;
        }
      ),
      [a]
    ),
    wt.useMemo(() => mg(d, a, y.current, !1), [d, a])
  );
}
var xn = (r) => typeof r == 'string',
  gg = (r, i, a, u, s) =>
    xn(r)
      ? (u && i.watch.add(r), Le(a, r, s))
      : Array.isArray(r)
        ? r.map((f) => (u && i.watch.add(f), Le(a, f)))
        : (u && (i.watchAll = !0), a);
function Dw(r) {
  const i = xd(),
    { control: a = i.control, name: u, defaultValue: s, disabled: f, exact: d } = r || {},
    h = wt.useRef(u);
  (h.current = u),
    wd({
      disabled: f,
      subject: a._subjects.values,
      next: (_) => {
        yg(h.current, _.name, d) && y(Er(gg(h.current, a._names, _.values || a._formValues, !1, s)));
      }
    });
  const [p, y] = wt.useState(a._getWatch(u, s));
  return wt.useEffect(() => a._removeUnmounted()), p;
}
function Uw(r) {
  const i = xd(),
    { name: a, disabled: u, control: s = i.control, shouldUnregister: f } = r,
    d = dg(s._names.array, a),
    h = Dw({
      control: s,
      name: a,
      defaultValue: Le(s._formValues, a, Le(s._defaultValues, a, r.defaultValue)),
      exact: !0
    }),
    p = Cw({ control: s, name: a, exact: !0 }),
    y = wt.useRef(s.register(a, { ...r.rules, value: h, ...(Wr(r.disabled) ? { disabled: r.disabled } : {}) })),
    _ = wt.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!Le(p.errors, a) },
            isDirty: { enumerable: !0, get: () => !!Le(p.dirtyFields, a) },
            isTouched: { enumerable: !0, get: () => !!Le(p.touchedFields, a) },
            isValidating: { enumerable: !0, get: () => !!Le(p.validatingFields, a) },
            error: { enumerable: !0, get: () => Le(p.errors, a) }
          }
        ),
      [p, a]
    ),
    b = wt.useMemo(
      () => ({
        name: a,
        value: h,
        ...(Wr(u) || p.disabled ? { disabled: p.disabled || u } : {}),
        onChange: (S) => y.current.onChange({ target: { value: fg(S), name: a }, type: Xs.CHANGE }),
        onBlur: () => y.current.onBlur({ target: { value: Le(s._formValues, a), name: a }, type: Xs.BLUR }),
        ref: (S) => {
          const E = Le(s._fields, a);
          E &&
            S &&
            (E._f.ref = {
              focus: () => S.focus(),
              select: () => S.select(),
              setCustomValidity: (I) => S.setCustomValidity(I),
              reportValidity: () => S.reportValidity()
            });
        }
      }),
      [a, s._formValues, u, p.disabled, h, s._fields]
    );
  return (
    wt.useEffect(() => {
      const S = s._options.shouldUnregister || f,
        E = (I, P) => {
          const J = Le(s._fields, I);
          J && J._f && (J._f.mount = P);
        };
      if ((E(a, !0), S)) {
        const I = Er(Le(s._options.defaultValues, a));
        xt(s._defaultValues, a, I), Gt(Le(s._formValues, a)) && xt(s._formValues, a, I);
      }
      return (
        !d && s.register(a),
        () => {
          (d ? S && !s._state.action : S) ? s.unregister(a) : E(a, !1);
        }
      );
    }, [a, s, d, f]),
    wt.useEffect(() => {
      s._updateDisabledField({ disabled: u, fields: s._fields, name: a });
    }, [u, a, s]),
    wt.useMemo(() => ({ field: b, formState: p, fieldState: _ }), [b, p, _])
  );
}
const gr = (r) => r.render(Uw(r));
var vg = (r, i, a, u, s) => (i ? { ...a[r], types: { ...(a[r] && a[r].types ? a[r].types : {}), [u]: s || !0 } } : {}),
  ey = (r) => ({
    isOnSubmit: !r || r === un.onSubmit,
    isOnBlur: r === un.onBlur,
    isOnChange: r === un.onChange,
    isOnAll: r === un.all,
    isOnTouch: r === un.onTouched
  }),
  ty = (r, i, a) =>
    !a &&
    (i.watchAll || i.watch.has(r) || [...i.watch].some((u) => r.startsWith(u) && /^\.\w+/.test(r.slice(u.length))));
const Jl = (r, i, a, u) => {
  for (const s of a || Object.keys(r)) {
    const f = Le(r, s);
    if (f) {
      const { _f: d, ...h } = f;
      if (d) {
        if (d.refs && d.refs[0] && i(d.refs[0], s) && !u) return !0;
        if (d.ref && i(d.ref, d.name) && !u) return !0;
        if (Jl(h, i)) break;
      } else if ($t(h) && Jl(h, i)) break;
    }
  }
};
var jw = (r, i, a) => {
    const u = Pl(Le(r, a));
    return xt(u, 'root', i[a]), xt(r, a, u), r;
  },
  Ed = (r) => r.type === 'file',
  Sn = (r) => typeof r == 'function',
  Ks = (r) => {
    if (!bd) return !1;
    const i = r ? r.ownerDocument : 0;
    return r instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
  },
  js = (r) => xn(r),
  Ad = (r) => r.type === 'radio',
  Zs = (r) => r instanceof RegExp;
const ry = { value: !1, isValid: !1 },
  ny = { value: !0, isValid: !0 };
var bg = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const i = r.filter((a) => a && a.checked && !a.disabled).map((a) => a.value);
      return { value: i, isValid: !!i.length };
    }
    return r[0].checked && !r[0].disabled
      ? r[0].attributes && !Gt(r[0].attributes.value)
        ? Gt(r[0].value) || r[0].value === ''
          ? ny
          : { value: r[0].value, isValid: !0 }
        : ny
      : ry;
  }
  return ry;
};
const iy = { isValid: !1, value: null };
var Sg = (r) =>
  Array.isArray(r) ? r.reduce((i, a) => (a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : i), iy) : iy;
function ay(r, i, a = 'validate') {
  if (js(r) || (Array.isArray(r) && r.every(js)) || (Wr(r) && !r)) return { type: a, message: js(r) ? r : '', ref: i };
}
var qa = (r) => ($t(r) && !Zs(r) ? r : { value: r, message: '' }),
  ly = async (r, i, a, u, s, f) => {
    const {
        ref: d,
        refs: h,
        required: p,
        maxLength: y,
        minLength: _,
        min: b,
        max: S,
        pattern: E,
        validate: I,
        name: P,
        valueAsNumber: J,
        mount: W
      } = r._f,
      z = Le(a, P);
    if (!W || i.has(P)) return {};
    const ve = h ? h[0] : d,
      qe = (Y) => {
        s && ve.reportValidity && (ve.setCustomValidity(Wr(Y) ? '' : Y || ''), ve.reportValidity());
      },
      xe = {},
      Ee = Ad(d),
      De = hu(d),
      v = Ee || De,
      w =
        ((J || Ed(d)) && Gt(d.value) && Gt(z)) ||
        (Ks(d) && d.value === '') ||
        z === '' ||
        (Array.isArray(z) && !z.length),
      N = vg.bind(null, P, u, xe),
      G = (Y, X, Z, k = Fn.maxLength, R = Fn.minLength) => {
        const $ = Y ? X : Z;
        xe[P] = { type: Y ? k : R, message: $, ref: d, ...N(Y ? k : R, $) };
      };
    if (
      f
        ? !Array.isArray(z) || !z.length
        : p && ((!v && (w || pr(z))) || (Wr(z) && !z) || (De && !bg(h).isValid) || (Ee && !Sg(h).isValid))
    ) {
      const { value: Y, message: X } = js(p) ? { value: !!p, message: p } : qa(p);
      if (Y && ((xe[P] = { type: Fn.required, message: X, ref: ve, ...N(Fn.required, X) }), !u)) return qe(X), xe;
    }
    if (!w && (!pr(b) || !pr(S))) {
      let Y, X;
      const Z = qa(S),
        k = qa(b);
      if (!pr(z) && !isNaN(z)) {
        const R = d.valueAsNumber || (z && +z);
        pr(Z.value) || (Y = R > Z.value), pr(k.value) || (X = R < k.value);
      } else {
        const R = d.valueAsDate || new Date(z),
          $ = (U) => new Date(new Date().toDateString() + ' ' + U),
          H = d.type == 'time',
          oe = d.type == 'week';
        xn(Z.value) && z && (Y = H ? $(z) > $(Z.value) : oe ? z > Z.value : R > new Date(Z.value)),
          xn(k.value) && z && (X = H ? $(z) < $(k.value) : oe ? z < k.value : R < new Date(k.value));
      }
      if ((Y || X) && (G(!!Y, Z.message, k.message, Fn.max, Fn.min), !u)) return qe(xe[P].message), xe;
    }
    if ((y || _) && !w && (xn(z) || (f && Array.isArray(z)))) {
      const Y = qa(y),
        X = qa(_),
        Z = !pr(Y.value) && z.length > +Y.value,
        k = !pr(X.value) && z.length < +X.value;
      if ((Z || k) && (G(Z, Y.message, X.message), !u)) return qe(xe[P].message), xe;
    }
    if (E && !w && xn(z)) {
      const { value: Y, message: X } = qa(E);
      if (Zs(Y) && !z.match(Y) && ((xe[P] = { type: Fn.pattern, message: X, ref: d, ...N(Fn.pattern, X) }), !u))
        return qe(X), xe;
    }
    if (I) {
      if (Sn(I)) {
        const Y = await I(z, a),
          X = ay(Y, ve);
        if (X && ((xe[P] = { ...X, ...N(Fn.validate, X.message) }), !u)) return qe(X.message), xe;
      } else if ($t(I)) {
        let Y = {};
        for (const X in I) {
          if (!Ar(Y) && !u) break;
          const Z = ay(await I[X](z, a), ve, X);
          Z && ((Y = { ...Z, ...N(X, Z.message) }), qe(Z.message), u && (xe[P] = Y));
        }
        if (!Ar(Y) && ((xe[P] = { ref: ve, ...Y }), !u)) return xe;
      }
    }
    return qe(!0), xe;
  };
function kw(r, i) {
  const a = i.slice(0, -1).length;
  let u = 0;
  for (; u < a; ) r = Gt(r) ? u++ : r[i[u++]];
  return r;
}
function Iw(r) {
  for (const i in r) if (r.hasOwnProperty(i) && !Gt(r[i])) return !1;
  return !0;
}
function Jt(r, i) {
  const a = Array.isArray(i) ? i : Sd(i) ? [i] : hg(i),
    u = a.length === 1 ? r : kw(r, a),
    s = a.length - 1,
    f = a[s];
  return u && delete u[f], s !== 0 && (($t(u) && Ar(u)) || (Array.isArray(u) && Iw(u))) && Jt(r, a.slice(0, -1)), r;
}
var Gf = () => {
    let r = [];
    return {
      get observers() {
        return r;
      },
      next: (s) => {
        for (const f of r) f.next && f.next(s);
      },
      subscribe: (s) => (
        r.push(s),
        {
          unsubscribe: () => {
            r = r.filter((f) => f !== s);
          }
        }
      ),
      unsubscribe: () => {
        r = [];
      }
    };
  },
  nd = (r) => pr(r) || !og(r);
function Ai(r, i) {
  if (nd(r) || nd(i)) return r === i;
  if (Qi(r) && Qi(i)) return r.getTime() === i.getTime();
  const a = Object.keys(r),
    u = Object.keys(i);
  if (a.length !== u.length) return !1;
  for (const s of a) {
    const f = r[s];
    if (!u.includes(s)) return !1;
    if (s !== 'ref') {
      const d = i[s];
      if ((Qi(f) && Qi(d)) || ($t(f) && $t(d)) || (Array.isArray(f) && Array.isArray(d)) ? !Ai(f, d) : f !== d)
        return !1;
    }
  }
  return !0;
}
var xg = (r) => r.type === 'select-multiple',
  Lw = (r) => Ad(r) || hu(r),
  $f = (r) => Ks(r) && r.isConnected,
  wg = (r) => {
    for (const i in r) if (Sn(r[i])) return !0;
    return !1;
  };
function Qs(r, i = {}) {
  const a = Array.isArray(r);
  if ($t(r) || a)
    for (const u in r)
      Array.isArray(r[u]) || ($t(r[u]) && !wg(r[u]))
        ? ((i[u] = Array.isArray(r[u]) ? [] : {}), Qs(r[u], i[u]))
        : pr(r[u]) || (i[u] = !0);
  return i;
}
function Eg(r, i, a) {
  const u = Array.isArray(r);
  if ($t(r) || u)
    for (const s in r)
      Array.isArray(r[s]) || ($t(r[s]) && !wg(r[s]))
        ? Gt(i) || nd(a[s])
          ? (a[s] = Array.isArray(r[s]) ? Qs(r[s], []) : { ...Qs(r[s]) })
          : Eg(r[s], pr(i) ? {} : i[s], a[s])
        : (a[s] = !Ai(r[s], i[s]));
  return a;
}
var Gl = (r, i) => Eg(r, i, Qs(i)),
  Ag = (r, { valueAsNumber: i, valueAsDate: a, setValueAs: u }) =>
    Gt(r) ? r : i ? (r === '' ? NaN : r && +r) : a && xn(r) ? new Date(r) : u ? u(r) : r;
function Yf(r) {
  const i = r.ref;
  return Ed(i)
    ? i.files
    : Ad(i)
      ? Sg(r.refs).value
      : xg(i)
        ? [...i.selectedOptions].map(({ value: a }) => a)
        : hu(i)
          ? bg(r.refs).value
          : Ag(Gt(i.value) ? r.ref.value : i.value, r);
}
var qw = (r, i, a, u) => {
    const s = {};
    for (const f of r) {
      const d = Le(i, f);
      d && xt(s, f, d._f);
    }
    return { criteriaMode: a, names: [...r], fields: s, shouldUseNativeValidation: u };
  },
  $l = (r) => (Gt(r) ? r : Zs(r) ? r.source : $t(r) ? (Zs(r.value) ? r.value.source : r.value) : r);
const uy = 'AsyncFunction';
var zw = (r) =>
    !!r &&
    !!r.validate &&
    !!(
      (Sn(r.validate) && r.validate.constructor.name === uy) ||
      ($t(r.validate) && Object.values(r.validate).find((i) => i.constructor.name === uy))
    ),
  Hw = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function sy(r, i, a) {
  const u = Le(r, a);
  if (u || Sd(a)) return { error: u, name: a };
  const s = a.split('.');
  for (; s.length; ) {
    const f = s.join('.'),
      d = Le(i, f),
      h = Le(r, f);
    if (d && !Array.isArray(d) && a !== f) return { name: a };
    if (h && h.type) return { name: f, error: h };
    s.pop();
  }
  return { name: a };
}
var Fw = (r, i, a, u, s) =>
    s.isOnAll
      ? !1
      : !a && s.isOnTouch
        ? !(i || r)
        : (a ? u.isOnBlur : s.isOnBlur)
          ? !r
          : (a ? u.isOnChange : s.isOnChange)
            ? r
            : !0,
  Vw = (r, i) => !sc(Le(r, i)).length && Jt(r, i);
const Gw = { mode: un.onSubmit, reValidateMode: un.onChange, shouldFocusError: !0 };
function $w(r = {}) {
  let i = { ...Gw, ...r },
    a = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Sn(i.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: i.errors || {},
      disabled: i.disabled || !1
    },
    u = {},
    s = $t(i.defaultValues) || $t(i.values) ? Er(i.defaultValues || i.values) || {} : {},
    f = i.shouldUnregister ? {} : Er(s),
    d = { action: !1, mount: !1, watch: !1 },
    h = { mount: new Set(), disabled: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
    p,
    y = 0;
  const _ = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    },
    b = { values: Gf(), array: Gf(), state: Gf() },
    S = ey(i.mode),
    E = ey(i.reValidateMode),
    I = i.criteriaMode === un.all,
    P = (M) => (q) => {
      clearTimeout(y), (y = setTimeout(M, q));
    },
    J = async (M) => {
      if (!i.disabled && (_.isValid || M)) {
        const q = i.resolver ? Ar((await v()).errors) : await N(u, !0);
        q !== a.isValid && b.state.next({ isValid: q });
      }
    },
    W = (M, q) => {
      !i.disabled &&
        (_.isValidating || _.validatingFields) &&
        ((M || Array.from(h.mount)).forEach((F) => {
          F && (q ? xt(a.validatingFields, F, q) : Jt(a.validatingFields, F));
        }),
        b.state.next({ validatingFields: a.validatingFields, isValidating: !Ar(a.validatingFields) }));
    },
    z = (M, q = [], F, te, ge = !0, Se = !0) => {
      if (te && F && !i.disabled) {
        if (((d.action = !0), Se && Array.isArray(Le(u, M)))) {
          const Be = F(Le(u, M), te.argA, te.argB);
          ge && xt(u, M, Be);
        }
        if (Se && Array.isArray(Le(a.errors, M))) {
          const Be = F(Le(a.errors, M), te.argA, te.argB);
          ge && xt(a.errors, M, Be), Vw(a.errors, M);
        }
        if (_.touchedFields && Se && Array.isArray(Le(a.touchedFields, M))) {
          const Be = F(Le(a.touchedFields, M), te.argA, te.argB);
          ge && xt(a.touchedFields, M, Be);
        }
        _.dirtyFields && (a.dirtyFields = Gl(s, f)),
          b.state.next({ name: M, isDirty: Y(M, q), dirtyFields: a.dirtyFields, errors: a.errors, isValid: a.isValid });
      } else xt(f, M, q);
    },
    ve = (M, q) => {
      xt(a.errors, M, q), b.state.next({ errors: a.errors });
    },
    qe = (M) => {
      (a.errors = M), b.state.next({ errors: a.errors, isValid: !1 });
    },
    xe = (M, q, F, te) => {
      const ge = Le(u, M);
      if (ge) {
        const Se = Le(f, M, Gt(F) ? Le(s, M) : F);
        Gt(Se) || (te && te.defaultChecked) || q ? xt(f, M, q ? Se : Yf(ge._f)) : k(M, Se), d.mount && J();
      }
    },
    Ee = (M, q, F, te, ge) => {
      let Se = !1,
        Be = !1;
      const ze = { name: M };
      if (!i.disabled) {
        const rt = !!(Le(u, M) && Le(u, M)._f && Le(u, M)._f.disabled);
        if (!F || te) {
          _.isDirty && ((Be = a.isDirty), (a.isDirty = ze.isDirty = Y()), (Se = Be !== ze.isDirty));
          const A = rt || Ai(Le(s, M), q);
          (Be = !!(!rt && Le(a.dirtyFields, M))),
            A || rt ? Jt(a.dirtyFields, M) : xt(a.dirtyFields, M, !0),
            (ze.dirtyFields = a.dirtyFields),
            (Se = Se || (_.dirtyFields && Be !== !A));
        }
        if (F) {
          const A = Le(a.touchedFields, M);
          A ||
            (xt(a.touchedFields, M, F),
            (ze.touchedFields = a.touchedFields),
            (Se = Se || (_.touchedFields && A !== F)));
        }
        Se && ge && b.state.next(ze);
      }
      return Se ? ze : {};
    },
    De = (M, q, F, te) => {
      const ge = Le(a.errors, M),
        Se = _.isValid && Wr(q) && a.isValid !== q;
      if (
        (i.delayError && F
          ? ((p = P(() => ve(M, F))), p(i.delayError))
          : (clearTimeout(y), (p = null), F ? xt(a.errors, M, F) : Jt(a.errors, M)),
        (F ? !Ai(ge, F) : ge) || !Ar(te) || Se)
      ) {
        const Be = { ...te, ...(Se && Wr(q) ? { isValid: q } : {}), errors: a.errors, name: M };
        (a = { ...a, ...Be }), b.state.next(Be);
      }
    },
    v = async (M) => {
      W(M, !0);
      const q = await i.resolver(f, i.context, qw(M || h.mount, u, i.criteriaMode, i.shouldUseNativeValidation));
      return W(M), q;
    },
    w = async (M) => {
      const { errors: q } = await v(M);
      if (M)
        for (const F of M) {
          const te = Le(q, F);
          te ? xt(a.errors, F, te) : Jt(a.errors, F);
        }
      else a.errors = q;
      return q;
    },
    N = async (M, q, F = { valid: !0 }) => {
      for (const te in M) {
        const ge = M[te];
        if (ge) {
          const { _f: Se, ...Be } = ge;
          if (Se) {
            const ze = h.array.has(Se.name),
              rt = ge._f && zw(ge._f);
            rt && _.validatingFields && W([te], !0);
            const A = await ly(ge, h.disabled, f, I, i.shouldUseNativeValidation && !q, ze);
            if ((rt && _.validatingFields && W([te]), A[Se.name] && ((F.valid = !1), q))) break;
            !q &&
              (Le(A, Se.name)
                ? ze
                  ? jw(a.errors, A, Se.name)
                  : xt(a.errors, Se.name, A[Se.name])
                : Jt(a.errors, Se.name));
          }
          !Ar(Be) && (await N(Be, q, F));
        }
      }
      return F.valid;
    },
    G = () => {
      for (const M of h.unMount) {
        const q = Le(u, M);
        q && (q._f.refs ? q._f.refs.every((F) => !$f(F)) : !$f(q._f.ref)) && Oe(M);
      }
      h.unMount = new Set();
    },
    Y = (M, q) => !i.disabled && (M && q && xt(f, M, q), !Ai(ne(), s)),
    X = (M, q, F) => gg(M, h, { ...(d.mount ? f : Gt(q) ? s : xn(M) ? { [M]: q } : q) }, F, q),
    Z = (M) => sc(Le(d.mount ? f : s, M, i.shouldUnregister ? Le(s, M, []) : [])),
    k = (M, q, F = {}) => {
      const te = Le(u, M);
      let ge = q;
      if (te) {
        const Se = te._f;
        Se &&
          (!Se.disabled && xt(f, M, Ag(q, Se)),
          (ge = Ks(Se.ref) && pr(q) ? '' : q),
          xg(Se.ref)
            ? [...Se.ref.options].forEach((Be) => (Be.selected = ge.includes(Be.value)))
            : Se.refs
              ? hu(Se.ref)
                ? Se.refs.length > 1
                  ? Se.refs.forEach(
                      (Be) =>
                        (!Be.defaultChecked || !Be.disabled) &&
                        (Be.checked = Array.isArray(ge) ? !!ge.find((ze) => ze === Be.value) : ge === Be.value)
                    )
                  : Se.refs[0] && (Se.refs[0].checked = !!ge)
                : Se.refs.forEach((Be) => (Be.checked = Be.value === ge))
              : Ed(Se.ref)
                ? (Se.ref.value = '')
                : ((Se.ref.value = ge), Se.ref.type || b.values.next({ name: M, values: { ...f } })));
      }
      (F.shouldDirty || F.shouldTouch) && Ee(M, ge, F.shouldTouch, F.shouldDirty, !0), F.shouldValidate && U(M);
    },
    R = (M, q, F) => {
      for (const te in q) {
        const ge = q[te],
          Se = `${M}.${te}`,
          Be = Le(u, Se);
        (h.array.has(M) || $t(ge) || (Be && !Be._f)) && !Qi(ge) ? R(Se, ge, F) : k(Se, ge, F);
      }
    },
    $ = (M, q, F = {}) => {
      const te = Le(u, M),
        ge = h.array.has(M),
        Se = Er(q);
      xt(f, M, Se),
        ge
          ? (b.array.next({ name: M, values: { ...f } }),
            (_.isDirty || _.dirtyFields) &&
              F.shouldDirty &&
              b.state.next({ name: M, dirtyFields: Gl(s, f), isDirty: Y(M, Se) }))
          : te && !te._f && !pr(Se)
            ? R(M, Se, F)
            : k(M, Se, F),
        ty(M, h) && b.state.next({ ...a }),
        b.values.next({ name: d.mount ? M : void 0, values: { ...f } });
    },
    H = async (M) => {
      d.mount = !0;
      const q = M.target;
      let F = q.name,
        te = !0;
      const ge = Le(u, F),
        Se = () => (q.type ? Yf(ge._f) : fg(M)),
        Be = (ze) => {
          te = Number.isNaN(ze) || (Qi(ze) && isNaN(ze.getTime())) || Ai(ze, Le(f, F, ze));
        };
      if (ge) {
        let ze, rt;
        const A = Se(),
          m = M.type === Xs.BLUR || M.type === Xs.FOCUS_OUT,
          g =
            (!Hw(ge._f) && !i.resolver && !Le(a.errors, F) && !ge._f.deps) ||
            Fw(m, Le(a.touchedFields, F), a.isSubmitted, E, S),
          V = ty(F, h, m);
        xt(f, F, A), m ? (ge._f.onBlur && ge._f.onBlur(M), p && p(0)) : ge._f.onChange && ge._f.onChange(M);
        const ie = Ee(F, A, m, !1),
          j = !Ar(ie) || V;
        if ((!m && b.values.next({ name: F, type: M.type, values: { ...f } }), g))
          return (
            _.isValid && (i.mode === 'onBlur' && m ? J() : m || J()), j && b.state.next({ name: F, ...(V ? {} : ie) })
          );
        if ((!m && V && b.state.next({ ...a }), i.resolver)) {
          const { errors: L } = await v([F]);
          if ((Be(A), te)) {
            const de = sy(a.errors, u, F),
              Ne = sy(L, u, de.name || F);
            (ze = Ne.error), (F = Ne.name), (rt = Ar(L));
          }
        } else
          W([F], !0),
            (ze = (await ly(ge, h.disabled, f, I, i.shouldUseNativeValidation))[F]),
            W([F]),
            Be(A),
            te && (ze ? (rt = !1) : _.isValid && (rt = await N(u, !0)));
        te && (ge._f.deps && U(ge._f.deps), De(F, rt, ze, ie));
      }
    },
    oe = (M, q) => {
      if (Le(a.errors, q) && M.focus) return M.focus(), 1;
    },
    U = async (M, q = {}) => {
      let F, te;
      const ge = Pl(M);
      if (i.resolver) {
        const Se = await w(Gt(M) ? M : ge);
        (F = Ar(Se)), (te = M ? !ge.some((Be) => Le(Se, Be)) : F);
      } else
        M
          ? ((te = (
              await Promise.all(
                ge.map(async (Se) => {
                  const Be = Le(u, Se);
                  return await N(Be && Be._f ? { [Se]: Be } : Be);
                })
              )
            ).every(Boolean)),
            !(!te && !a.isValid) && J())
          : (te = F = await N(u));
      return (
        b.state.next({
          ...(!xn(M) || (_.isValid && F !== a.isValid) ? {} : { name: M }),
          ...(i.resolver || !M ? { isValid: F } : {}),
          errors: a.errors
        }),
        q.shouldFocus && !te && Jl(u, oe, M ? ge : h.mount),
        te
      );
    },
    ne = (M) => {
      const q = { ...(d.mount ? f : s) };
      return Gt(M) ? q : xn(M) ? Le(q, M) : M.map((F) => Le(q, F));
    },
    we = (M, q) => ({
      invalid: !!Le((q || a).errors, M),
      isDirty: !!Le((q || a).dirtyFields, M),
      error: Le((q || a).errors, M),
      isValidating: !!Le(a.validatingFields, M),
      isTouched: !!Le((q || a).touchedFields, M)
    }),
    ye = (M) => {
      M && Pl(M).forEach((q) => Jt(a.errors, q)), b.state.next({ errors: M ? a.errors : {} });
    },
    O = (M, q, F) => {
      const te = (Le(u, M, { _f: {} })._f || {}).ref,
        ge = Le(a.errors, M) || {},
        { ref: Se, message: Be, type: ze, ...rt } = ge;
      xt(a.errors, M, { ...rt, ...q, ref: te }),
        b.state.next({ name: M, errors: a.errors, isValid: !1 }),
        F && F.shouldFocus && te && te.focus && te.focus();
    },
    je = (M, q) => (Sn(M) ? b.values.subscribe({ next: (F) => M(X(void 0, q), F) }) : X(M, q, !0)),
    Oe = (M, q = {}) => {
      for (const F of M ? Pl(M) : h.mount)
        h.mount.delete(F),
          h.array.delete(F),
          q.keepValue || (Jt(u, F), Jt(f, F)),
          !q.keepError && Jt(a.errors, F),
          !q.keepDirty && Jt(a.dirtyFields, F),
          !q.keepTouched && Jt(a.touchedFields, F),
          !q.keepIsValidating && Jt(a.validatingFields, F),
          !i.shouldUnregister && !q.keepDefaultValue && Jt(s, F);
      b.values.next({ values: { ...f } }),
        b.state.next({ ...a, ...(q.keepDirty ? { isDirty: Y() } : {}) }),
        !q.keepIsValid && J();
    },
    Pe = ({ disabled: M, name: q, field: F, fields: te }) => {
      ((Wr(M) && d.mount) || M || h.disabled.has(q)) &&
        (M ? h.disabled.add(q) : h.disabled.delete(q), Ee(q, Yf(F ? F._f : Le(te, q)._f), !1, !1, !0));
    },
    Me = (M, q = {}) => {
      let F = Le(u, M);
      const te = Wr(q.disabled) || Wr(i.disabled);
      return (
        xt(u, M, { ...(F || {}), _f: { ...(F && F._f ? F._f : { ref: { name: M } }), name: M, mount: !0, ...q } }),
        h.mount.add(M),
        F ? Pe({ field: F, disabled: Wr(q.disabled) ? q.disabled : i.disabled, name: M }) : xe(M, !0, q.value),
        {
          ...(te ? { disabled: q.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!q.required,
                min: $l(q.min),
                max: $l(q.max),
                minLength: $l(q.minLength),
                maxLength: $l(q.maxLength),
                pattern: $l(q.pattern)
              }
            : {}),
          name: M,
          onChange: H,
          onBlur: H,
          ref: (ge) => {
            if (ge) {
              Me(M, q), (F = Le(u, M));
              const Se = (Gt(ge.value) && ge.querySelectorAll && ge.querySelectorAll('input,select,textarea')[0]) || ge,
                Be = Lw(Se),
                ze = F._f.refs || [];
              if (Be ? ze.find((rt) => rt === Se) : Se === F._f.ref) return;
              xt(u, M, {
                _f: {
                  ...F._f,
                  ...(Be
                    ? {
                        refs: [...ze.filter($f), Se, ...(Array.isArray(Le(s, M)) ? [{}] : [])],
                        ref: { type: Se.type, name: M }
                      }
                    : { ref: Se })
                }
              }),
                xe(M, !1, void 0, Se);
            } else
              (F = Le(u, M, {})),
                F._f && (F._f.mount = !1),
                (i.shouldUnregister || q.shouldUnregister) && !(dg(h.array, M) && d.action) && h.unMount.add(M);
          }
        }
      );
    },
    ke = () => i.shouldFocusError && Jl(u, oe, h.mount),
    B = (M) => {
      Wr(M) &&
        (b.state.next({ disabled: M }),
        Jl(
          u,
          (q, F) => {
            const te = Le(u, F);
            te &&
              ((q.disabled = te._f.disabled || M),
              Array.isArray(te._f.refs) &&
                te._f.refs.forEach((ge) => {
                  ge.disabled = te._f.disabled || M;
                }));
          },
          0,
          !1
        ));
    },
    D = (M, q) => async (F) => {
      let te;
      F && (F.preventDefault && F.preventDefault(), F.persist && F.persist());
      let ge = Er(f);
      if (h.disabled.size) for (const Se of h.disabled) xt(ge, Se, void 0);
      if ((b.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: Se, values: Be } = await v();
        (a.errors = Se), (ge = Be);
      } else await N(u);
      if ((Jt(a.errors, 'root'), Ar(a.errors))) {
        b.state.next({ errors: {} });
        try {
          await M(ge, F);
        } catch (Se) {
          te = Se;
        }
      } else q && (await q({ ...a.errors }, F)), ke(), setTimeout(ke);
      if (
        (b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ar(a.errors) && !te,
          submitCount: a.submitCount + 1,
          errors: a.errors
        }),
        te)
      )
        throw te;
    },
    Q = (M, q = {}) => {
      Le(u, M) &&
        (Gt(q.defaultValue) ? $(M, Er(Le(s, M))) : ($(M, q.defaultValue), xt(s, M, Er(q.defaultValue))),
        q.keepTouched || Jt(a.touchedFields, M),
        q.keepDirty || (Jt(a.dirtyFields, M), (a.isDirty = q.defaultValue ? Y(M, Er(Le(s, M))) : Y())),
        q.keepError || (Jt(a.errors, M), _.isValid && J()),
        b.state.next({ ...a }));
    },
    se = (M, q = {}) => {
      const F = M ? Er(M) : s,
        te = Er(F),
        ge = Ar(M),
        Se = ge ? s : te;
      if ((q.keepDefaultValues || (s = F), !q.keepValues)) {
        if (q.keepDirtyValues) {
          const Be = new Set([...h.mount, ...Object.keys(Gl(s, f))]);
          for (const ze of Array.from(Be)) Le(a.dirtyFields, ze) ? xt(Se, ze, Le(f, ze)) : $(ze, Le(Se, ze));
        } else {
          if (bd && Gt(M))
            for (const Be of h.mount) {
              const ze = Le(u, Be);
              if (ze && ze._f) {
                const rt = Array.isArray(ze._f.refs) ? ze._f.refs[0] : ze._f.ref;
                if (Ks(rt)) {
                  const A = rt.closest('form');
                  if (A) {
                    A.reset();
                    break;
                  }
                }
              }
            }
          u = {};
        }
        (f = i.shouldUnregister ? (q.keepDefaultValues ? Er(s) : {}) : Er(Se)),
          b.array.next({ values: { ...Se } }),
          b.values.next({ values: { ...Se } });
      }
      (h = {
        mount: q.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: ''
      }),
        (d.mount = !_.isValid || !!q.keepIsValid || !!q.keepDirtyValues),
        (d.watch = !!i.shouldUnregister),
        b.state.next({
          submitCount: q.keepSubmitCount ? a.submitCount : 0,
          isDirty: ge ? !1 : q.keepDirty ? a.isDirty : !!(q.keepDefaultValues && !Ai(M, s)),
          isSubmitted: q.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: ge
            ? {}
            : q.keepDirtyValues
              ? q.keepDefaultValues && f
                ? Gl(s, f)
                : a.dirtyFields
              : q.keepDefaultValues && M
                ? Gl(s, M)
                : q.keepDirty
                  ? a.dirtyFields
                  : {},
          touchedFields: q.keepTouched ? a.touchedFields : {},
          errors: q.keepErrors ? a.errors : {},
          isSubmitSuccessful: q.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
          isSubmitting: !1
        });
    },
    re = (M, q) => se(Sn(M) ? M(f) : M, q);
  return {
    control: {
      register: Me,
      unregister: Oe,
      getFieldState: we,
      handleSubmit: D,
      setError: O,
      _executeSchema: v,
      _getWatch: X,
      _getDirty: Y,
      _updateValid: J,
      _removeUnmounted: G,
      _updateFieldArray: z,
      _updateDisabledField: Pe,
      _getFieldArray: Z,
      _reset: se,
      _resetDefaultValues: () =>
        Sn(i.defaultValues) &&
        i.defaultValues().then((M) => {
          re(M, i.resetOptions), b.state.next({ isLoading: !1 });
        }),
      _updateFormState: (M) => {
        a = { ...a, ...M };
      },
      _disableForm: B,
      _subjects: b,
      _proxyFormState: _,
      _setErrors: qe,
      get _fields() {
        return u;
      },
      get _formValues() {
        return f;
      },
      get _state() {
        return d;
      },
      set _state(M) {
        d = M;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return h;
      },
      set _names(M) {
        h = M;
      },
      get _formState() {
        return a;
      },
      set _formState(M) {
        a = M;
      },
      get _options() {
        return i;
      },
      set _options(M) {
        i = { ...i, ...M };
      }
    },
    trigger: U,
    register: Me,
    handleSubmit: D,
    watch: je,
    setValue: $,
    getValues: ne,
    reset: re,
    resetField: Q,
    clearErrors: ye,
    unregister: Oe,
    setError: O,
    setFocus: (M, q = {}) => {
      const F = Le(u, M),
        te = F && F._f;
      if (te) {
        const ge = te.refs ? te.refs[0] : te.ref;
        ge.focus && (ge.focus(), q.shouldSelect && Sn(ge.select) && ge.select());
      }
    },
    getFieldState: we
  };
}
function Ut(r = {}) {
  const i = wt.useRef(void 0),
    a = wt.useRef(void 0),
    [u, s] = wt.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Sn(r.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: r.errors || {},
      disabled: r.disabled || !1,
      defaultValues: Sn(r.defaultValues) ? void 0 : r.defaultValues
    });
  i.current || (i.current = { ...$w(r), formState: u });
  const f = i.current.control;
  return (
    (f._options = r),
    wd({
      subject: f._subjects.state,
      next: (d) => {
        pg(d, f._proxyFormState, f._updateFormState, !0) && s({ ...f._formState });
      }
    }),
    wt.useEffect(() => f._disableForm(r.disabled), [f, r.disabled]),
    wt.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const d = f._getDirty();
        d !== u.isDirty && f._subjects.state.next({ isDirty: d });
      }
    }, [f, u.isDirty]),
    wt.useEffect(() => {
      r.values && !Ai(r.values, a.current)
        ? (f._reset(r.values, f._options.resetOptions), (a.current = r.values), s((d) => ({ ...d })))
        : f._resetDefaultValues();
    }, [r.values, f]),
    wt.useEffect(() => {
      r.errors && f._setErrors(r.errors);
    }, [r.errors, f]),
    wt.useEffect(() => {
      f._state.mount || (f._updateValid(), (f._state.mount = !0)),
        f._state.watch && ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted();
    }),
    wt.useEffect(() => {
      r.shouldUnregister && f._subjects.values.next({ values: f._getWatch() });
    }, [r.shouldUnregister, f]),
    (i.current.formState = mg(u, f)),
    i.current
  );
}
const cy = (r, i, a) => {
    if (r && 'reportValidity' in r) {
      const u = Le(a, i);
      r.setCustomValidity((u && u.message) || ''), r.reportValidity();
    }
  },
  _g = (r, i) => {
    for (const a in i.fields) {
      const u = i.fields[a];
      u && u.ref && 'reportValidity' in u.ref ? cy(u.ref, a, r) : u && u.refs && u.refs.forEach((s) => cy(s, a, r));
    }
  },
  Yw = (r, i) => {
    i.shouldUseNativeValidation && _g(r, i);
    const a = {};
    for (const u in r) {
      const s = Le(i.fields, u),
        f = Object.assign(r[u] || {}, { ref: s && s.ref });
      if (Xw(i.names || Object.keys(r), u)) {
        const d = Object.assign({}, Le(a, u));
        xt(d, 'root', f), xt(a, u, d);
      } else xt(a, u, f);
    }
    return a;
  },
  Xw = (r, i) => r.some((a) => a.match(`^${i}\\.\\d+`));
function jt(r, i, a) {
  return (
    i === void 0 && (i = {}),
    a === void 0 && (a = {}),
    function (u, s, f) {
      try {
        return Promise.resolve(
          (function (d, h) {
            try {
              var p =
                (i.context,
                Promise.resolve(
                  r[a.mode === 'sync' ? 'validateSync' : 'validate'](
                    u,
                    Object.assign({ abortEarly: !1 }, i, { context: s })
                  )
                ).then(function (y) {
                  return (
                    f.shouldUseNativeValidation && _g({}, f), { values: a.raw ? Object.assign({}, u) : y, errors: {} }
                  );
                }));
            } catch (y) {
              return h(y);
            }
            return p && p.then ? p.then(void 0, h) : p;
          })(0, function (d) {
            if (!d.inner) throw d;
            return {
              values: {},
              errors: Yw(
                ((h = d),
                (p = !f.shouldUseNativeValidation && f.criteriaMode === 'all'),
                (h.inner || []).reduce(function (y, _) {
                  if ((y[_.path] || (y[_.path] = { message: _.message, type: _.type }), p)) {
                    var b = y[_.path].types,
                      S = b && b[_.type];
                    y[_.path] = vg(_.path, p, y, _.type, S ? [].concat(S, _.message) : _.message);
                  }
                  return y;
                }, {})),
                f
              )
            };
            var h, p;
          })
        );
      } catch (d) {
        return Promise.reject(d);
      }
    }
  );
}
var Xf, oy;
function Kw() {
  if (oy) return Xf;
  oy = 1;
  function r(W) {
    (this._maxSize = W), this.clear();
  }
  (r.prototype.clear = function () {
    (this._size = 0), (this._values = Object.create(null));
  }),
    (r.prototype.get = function (W) {
      return this._values[W];
    }),
    (r.prototype.set = function (W, z) {
      return this._size >= this._maxSize && this.clear(), W in this._values || this._size++, (this._values[W] = z);
    });
  var i = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    a = /^\d+$/,
    u = /^\d/,
    s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    f = /^\s*(['"]?)(.*?)(\1)\s*$/,
    d = 512,
    h = new r(d),
    p = new r(d),
    y = new r(d);
  Xf = {
    Cache: r,
    split: b,
    normalizePath: _,
    setter: function (W) {
      var z = _(W);
      return (
        p.get(W) ||
        p.set(W, function (qe, xe) {
          for (var Ee = 0, De = z.length, v = qe; Ee < De - 1; ) {
            var w = z[Ee];
            if (w === '__proto__' || w === 'constructor' || w === 'prototype') return qe;
            v = v[z[Ee++]];
          }
          v[z[Ee]] = xe;
        })
      );
    },
    getter: function (W, z) {
      var ve = _(W);
      return (
        y.get(W) ||
        y.set(W, function (xe) {
          for (var Ee = 0, De = ve.length; Ee < De; )
            if (xe != null || !z) xe = xe[ve[Ee++]];
            else return;
          return xe;
        })
      );
    },
    join: function (W) {
      return W.reduce(function (z, ve) {
        return z + (E(ve) || a.test(ve) ? '[' + ve + ']' : (z ? '.' : '') + ve);
      }, '');
    },
    forEach: function (W, z, ve) {
      S(Array.isArray(W) ? W : b(W), z, ve);
    }
  };
  function _(W) {
    return (
      h.get(W) ||
      h.set(
        W,
        b(W).map(function (z) {
          return z.replace(f, '$2');
        })
      )
    );
  }
  function b(W) {
    return W.match(i) || [''];
  }
  function S(W, z, ve) {
    var qe = W.length,
      xe,
      Ee,
      De,
      v;
    for (Ee = 0; Ee < qe; Ee++)
      (xe = W[Ee]),
        xe &&
          (J(xe) && (xe = '"' + xe + '"'), (v = E(xe)), (De = !v && /^\d+$/.test(xe)), z.call(ve, xe, v, De, Ee, W));
  }
  function E(W) {
    return typeof W == 'string' && W && ["'", '"'].indexOf(W.charAt(0)) !== -1;
  }
  function I(W) {
    return W.match(u) && !W.match(a);
  }
  function P(W) {
    return s.test(W);
  }
  function J(W) {
    return !E(W) && (I(W) || P(W));
  }
  return Xf;
}
var ta = Kw(),
  Kf,
  fy;
function Zw() {
  if (fy) return Kf;
  fy = 1;
  const r =
      /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    i = (_) => _.match(r) || [],
    a = (_) => _[0].toUpperCase() + _.slice(1),
    u = (_, b) => i(_).join(b).toLowerCase(),
    s = (_) => i(_).reduce((b, S) => `${b}${b ? S[0].toUpperCase() + S.slice(1).toLowerCase() : S.toLowerCase()}`, '');
  return (
    (Kf = {
      words: i,
      upperFirst: a,
      camelCase: s,
      pascalCase: (_) => a(s(_)),
      snakeCase: (_) => u(_, '_'),
      kebabCase: (_) => u(_, '-'),
      sentenceCase: (_) => a(u(_, ' ')),
      titleCase: (_) => i(_).map(a).join(' ')
    }),
    Kf
  );
}
var Zf = Zw(),
  Rs = { exports: {} },
  dy;
function Qw() {
  if (dy) return Rs.exports;
  (dy = 1),
    (Rs.exports = function (s) {
      return r(i(s), s);
    }),
    (Rs.exports.array = r);
  function r(s, f) {
    var d = s.length,
      h = new Array(d),
      p = {},
      y = d,
      _ = a(f),
      b = u(s);
    for (
      f.forEach(function (E) {
        if (!b.has(E[0]) || !b.has(E[1]))
          throw new Error('Unknown node. There is an unknown node in the supplied edges.');
      });
      y--;

    )
      p[y] || S(s[y], y, new Set());
    return h;
    function S(E, I, P) {
      if (P.has(E)) {
        var J;
        try {
          J = ', node was:' + JSON.stringify(E);
        } catch {
          J = '';
        }
        throw new Error('Cyclic dependency' + J);
      }
      if (!b.has(E))
        throw new Error(
          'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(E)
        );
      if (!p[I]) {
        p[I] = !0;
        var W = _.get(E) || new Set();
        if (((W = Array.from(W)), (I = W.length))) {
          P.add(E);
          do {
            var z = W[--I];
            S(z, b.get(z), P);
          } while (I);
          P.delete(E);
        }
        h[--d] = E;
      }
    }
  }
  function i(s) {
    for (var f = new Set(), d = 0, h = s.length; d < h; d++) {
      var p = s[d];
      f.add(p[0]), f.add(p[1]);
    }
    return Array.from(f);
  }
  function a(s) {
    for (var f = new Map(), d = 0, h = s.length; d < h; d++) {
      var p = s[d];
      f.has(p[0]) || f.set(p[0], new Set()), f.has(p[1]) || f.set(p[1], new Set()), f.get(p[0]).add(p[1]);
    }
    return f;
  }
  function u(s) {
    for (var f = new Map(), d = 0, h = s.length; d < h; d++) f.set(s[d], d);
    return f;
  }
  return Rs.exports;
}
var Pw = Qw();
const Jw = tu(Pw),
  Ww = Object.prototype.toString,
  eE = Error.prototype.toString,
  tE = RegExp.prototype.toString,
  rE = typeof Symbol < 'u' ? Symbol.prototype.toString : () => '',
  nE = /^Symbol\((.*)\)(.*)$/;
function iE(r) {
  return r != +r ? 'NaN' : r === 0 && 1 / r < 0 ? '-0' : '' + r;
}
function hy(r, i = !1) {
  if (r == null || r === !0 || r === !1) return '' + r;
  const a = typeof r;
  if (a === 'number') return iE(r);
  if (a === 'string') return i ? `"${r}"` : r;
  if (a === 'function') return '[Function ' + (r.name || 'anonymous') + ']';
  if (a === 'symbol') return rE.call(r).replace(nE, 'Symbol($1)');
  const u = Ww.call(r).slice(8, -1);
  return u === 'Date'
    ? isNaN(r.getTime())
      ? '' + r
      : r.toISOString(r)
    : u === 'Error' || r instanceof Error
      ? '[' + eE.call(r) + ']'
      : u === 'RegExp'
        ? tE.call(r)
        : null;
}
function Yn(r, i) {
  let a = hy(r, i);
  return a !== null
    ? a
    : JSON.stringify(
        r,
        function (u, s) {
          let f = hy(this[u], i);
          return f !== null ? f : s;
        },
        2
      );
}
function Ng(r) {
  return r == null ? [] : [].concat(r);
}
let Tg,
  Og,
  Mg,
  aE = /\$\{\s*(\w+)\s*\}/g;
Tg = Symbol.toStringTag;
class my {
  constructor(i, a, u, s) {
    (this.name = void 0),
      (this.message = void 0),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = void 0),
      (this.inner = void 0),
      (this[Tg] = 'Error'),
      (this.name = 'ValidationError'),
      (this.value = a),
      (this.path = u),
      (this.type = s),
      (this.errors = []),
      (this.inner = []),
      Ng(i).forEach((f) => {
        if (Nr.isError(f)) {
          this.errors.push(...f.errors);
          const d = f.inner.length ? f.inner : [f];
          this.inner.push(...d);
        } else this.errors.push(f);
      }),
      (this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]);
  }
}
Og = Symbol.hasInstance;
Mg = Symbol.toStringTag;
class Nr extends Error {
  static formatError(i, a) {
    const u = a.label || a.path || 'this';
    return (
      (a = Object.assign({}, a, { path: u, originalPath: a.path })),
      typeof i == 'string' ? i.replace(aE, (s, f) => Yn(a[f])) : typeof i == 'function' ? i(a) : i
    );
  }
  static isError(i) {
    return i && i.name === 'ValidationError';
  }
  constructor(i, a, u, s, f) {
    const d = new my(i, a, u, s);
    if (f) return d;
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = []),
      (this.inner = []),
      (this[Mg] = 'Error'),
      (this.name = d.name),
      (this.message = d.message),
      (this.type = d.type),
      (this.value = d.value),
      (this.path = d.path),
      (this.errors = d.errors),
      (this.inner = d.inner),
      Error.captureStackTrace && Error.captureStackTrace(this, Nr);
  }
  static [Og](i) {
    return my[Symbol.hasInstance](i) || super[Symbol.hasInstance](i);
  }
}
let vn = {
    default: '${path} is invalid',
    required: '${path} is a required field',
    defined: '${path} must be defined',
    notNull: '${path} cannot be null',
    oneOf: '${path} must be one of the following values: ${values}',
    notOneOf: '${path} must not be one of the following values: ${values}',
    notType: ({ path: r, type: i, value: a, originalValue: u }) => {
      const s = u != null && u !== a ? ` (cast from the value \`${Yn(u, !0)}\`).` : '.';
      return i !== 'mixed'
        ? `${r} must be a \`${i}\` type, but the final value was: \`${Yn(a, !0)}\`` + s
        : `${r} must match the configured type. The validated value was: \`${Yn(a, !0)}\`` + s;
    }
  },
  xr = {
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
  wi = {
    min: '${path} must be greater than or equal to ${min}',
    max: '${path} must be less than or equal to ${max}',
    lessThan: '${path} must be less than ${less}',
    moreThan: '${path} must be greater than ${more}',
    positive: '${path} must be a positive number',
    negative: '${path} must be a negative number',
    integer: '${path} must be an integer'
  },
  id = { min: '${path} field must be later than ${min}', max: '${path} field must be at earlier than ${max}' },
  ad = { isValue: '${path} field must be ${value}' },
  ks = {
    noUnknown: '${path} field has unspecified keys: ${unknown}',
    exact: '${path} object contains unknown properties: ${properties}'
  },
  Is = {
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items',
    length: '${path} must have ${length} items'
  },
  lE = {
    notType: (r) => {
      const { path: i, value: a, spec: u } = r,
        s = u.types.length;
      if (Array.isArray(a)) {
        if (a.length < s)
          return `${i} tuple value has too few items, expected a length of ${s} but got ${a.length} for value: \`${Yn(a, !0)}\``;
        if (a.length > s)
          return `${i} tuple value has too many items, expected a length of ${s} but got ${a.length} for value: \`${Yn(a, !0)}\``;
      }
      return Nr.formatError(vn.notType, r);
    }
  };
Object.assign(Object.create(null), {
  mixed: vn,
  string: xr,
  number: wi,
  date: id,
  object: ks,
  array: Is,
  boolean: ad,
  tuple: lE
});
const cc = (r) => r && r.__isYupSchema__;
class Ps {
  static fromOptions(i, a) {
    if (!a.then && !a.otherwise)
      throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let { is: u, then: s, otherwise: f } = a,
      d = typeof u == 'function' ? u : (...h) => h.every((p) => p === u);
    return new Ps(i, (h, p) => {
      var y;
      let _ = d(...h) ? s : f;
      return (y = _ == null ? void 0 : _(p)) != null ? y : p;
    });
  }
  constructor(i, a) {
    (this.fn = void 0), (this.refs = i), (this.refs = i), (this.fn = a);
  }
  resolve(i, a) {
    let u = this.refs.map((f) =>
        f.getValue(a == null ? void 0 : a.value, a == null ? void 0 : a.parent, a == null ? void 0 : a.context)
      ),
      s = this.fn(u, i, a);
    if (s === void 0 || s === i) return i;
    if (!cc(s)) throw new TypeError('conditions must return a schema object');
    return s.resolve(a);
  }
}
const Bs = { context: '$', value: '.' };
class aa {
  constructor(i, a = {}) {
    if (
      ((this.key = void 0),
      (this.isContext = void 0),
      (this.isValue = void 0),
      (this.isSibling = void 0),
      (this.path = void 0),
      (this.getter = void 0),
      (this.map = void 0),
      typeof i != 'string')
    )
      throw new TypeError('ref must be a string, got: ' + i);
    if (((this.key = i.trim()), i === '')) throw new TypeError('ref must be a non-empty string');
    (this.isContext = this.key[0] === Bs.context),
      (this.isValue = this.key[0] === Bs.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let u = this.isContext ? Bs.context : this.isValue ? Bs.value : '';
    (this.path = this.key.slice(u.length)), (this.getter = this.path && ta.getter(this.path, !0)), (this.map = a.map);
  }
  getValue(i, a, u) {
    let s = this.isContext ? u : this.isValue ? i : a;
    return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s;
  }
  cast(i, a) {
    return this.getValue(i, a == null ? void 0 : a.parent, a == null ? void 0 : a.context);
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
  static isRef(i) {
    return i && i.__isYupRef;
  }
}
aa.prototype.__isYupRef = !0;
const sn = (r) => r == null;
function za(r) {
  function i({ value: a, path: u = '', options: s, originalValue: f, schema: d }, h, p) {
    const { name: y, test: _, params: b, message: S, skipAbsent: E } = r;
    let {
      parent: I,
      context: P,
      abortEarly: J = d.spec.abortEarly,
      disableStackTrace: W = d.spec.disableStackTrace
    } = s;
    function z(G) {
      return aa.isRef(G) ? G.getValue(a, I, P) : G;
    }
    function ve(G = {}) {
      const Y = Object.assign(
        {
          value: a,
          originalValue: f,
          label: d.spec.label,
          path: G.path || u,
          spec: d.spec,
          disableStackTrace: G.disableStackTrace || W
        },
        b,
        G.params
      );
      for (const Z of Object.keys(Y)) Y[Z] = z(Y[Z]);
      const X = new Nr(Nr.formatError(G.message || S, Y), a, Y.path, G.type || y, Y.disableStackTrace);
      return (X.params = Y), X;
    }
    const qe = J ? h : p;
    let xe = {
      path: u,
      parent: I,
      type: y,
      from: s.from,
      createError: ve,
      resolve: z,
      options: s,
      originalValue: f,
      schema: d
    };
    const Ee = (G) => {
        Nr.isError(G) ? qe(G) : G ? p(null) : qe(ve());
      },
      De = (G) => {
        Nr.isError(G) ? qe(G) : h(G);
      };
    if (E && sn(a)) return Ee(!0);
    let w;
    try {
      var N;
      if (((w = _.call(xe, a, xe)), typeof ((N = w) == null ? void 0 : N.then) == 'function')) {
        if (s.sync)
          throw new Error(
            `Validation test of type: "${xe.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
          );
        return Promise.resolve(w).then(Ee, De);
      }
    } catch (G) {
      De(G);
      return;
    }
    Ee(w);
  }
  return (i.OPTIONS = r), i;
}
function uE(r, i, a, u = a) {
  let s, f, d;
  return i
    ? (ta.forEach(i, (h, p, y) => {
        let _ = p ? h.slice(1, h.length - 1) : h;
        r = r.resolve({ context: u, parent: s, value: a });
        let b = r.type === 'tuple',
          S = y ? parseInt(_, 10) : 0;
        if (r.innerType || b) {
          if (b && !y)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${d}" must contain an index to the tuple element, e.g. "${d}[0]"`
            );
          if (a && S >= a.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${h}, in the path: ${i}. because there is no value at that index. `
            );
          (s = a), (a = a && a[S]), (r = b ? r.spec.types[S] : r.innerType);
        }
        if (!y) {
          if (!r.fields || !r.fields[_])
            throw new Error(
              `The schema does not contain the path: ${i}. (failed at: ${d} which is a type: "${r.type}")`
            );
          (s = a), (a = a && a[_]), (r = r.fields[_]);
        }
        (f = _), (d = p ? '[' + h + ']' : '.' + h);
      }),
      { schema: r, parent: s, parentPath: f })
    : { parent: s, parentPath: i, schema: r };
}
class Js extends Set {
  describe() {
    const i = [];
    for (const a of this.values()) i.push(aa.isRef(a) ? a.describe() : a);
    return i;
  }
  resolveAll(i) {
    let a = [];
    for (const u of this.values()) a.push(i(u));
    return a;
  }
  clone() {
    return new Js(this.values());
  }
  merge(i, a) {
    const u = this.clone();
    return i.forEach((s) => u.add(s)), a.forEach((s) => u.delete(s)), u;
  }
}
function Ha(r, i = new Map()) {
  if (cc(r) || !r || typeof r != 'object') return r;
  if (i.has(r)) return i.get(r);
  let a;
  if (r instanceof Date) (a = new Date(r.getTime())), i.set(r, a);
  else if (r instanceof RegExp) (a = new RegExp(r)), i.set(r, a);
  else if (Array.isArray(r)) {
    (a = new Array(r.length)), i.set(r, a);
    for (let u = 0; u < r.length; u++) a[u] = Ha(r[u], i);
  } else if (r instanceof Map) {
    (a = new Map()), i.set(r, a);
    for (const [u, s] of r.entries()) a.set(u, Ha(s, i));
  } else if (r instanceof Set) {
    (a = new Set()), i.set(r, a);
    for (const u of r) a.add(Ha(u, i));
  } else if (r instanceof Object) {
    (a = {}), i.set(r, a);
    for (const [u, s] of Object.entries(r)) a[u] = Ha(s, i);
  } else throw Error(`Unable to clone ${r}`);
  return a;
}
class jr {
  constructor(i) {
    (this.type = void 0),
      (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this.internalTests = {}),
      (this._whitelist = new Js()),
      (this._blacklist = new Js()),
      (this.exclusiveTests = Object.create(null)),
      (this._typeCheck = void 0),
      (this.spec = void 0),
      (this.tests = []),
      (this.transforms = []),
      this.withMutation(() => {
        this.typeError(vn.notType);
      }),
      (this.type = i.type),
      (this._typeCheck = i.check),
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
        i == null ? void 0 : i.spec
      )),
      this.withMutation((a) => {
        a.nonNullable();
      });
  }
  get _type() {
    return this.type;
  }
  clone(i) {
    if (this._mutate) return i && Object.assign(this.spec, i), this;
    const a = Object.create(Object.getPrototypeOf(this));
    return (
      (a.type = this.type),
      (a._typeCheck = this._typeCheck),
      (a._whitelist = this._whitelist.clone()),
      (a._blacklist = this._blacklist.clone()),
      (a.internalTests = Object.assign({}, this.internalTests)),
      (a.exclusiveTests = Object.assign({}, this.exclusiveTests)),
      (a.deps = [...this.deps]),
      (a.conditions = [...this.conditions]),
      (a.tests = [...this.tests]),
      (a.transforms = [...this.transforms]),
      (a.spec = Ha(Object.assign({}, this.spec, i))),
      a
    );
  }
  label(i) {
    let a = this.clone();
    return (a.spec.label = i), a;
  }
  meta(...i) {
    if (i.length === 0) return this.spec.meta;
    let a = this.clone();
    return (a.spec.meta = Object.assign(a.spec.meta || {}, i[0])), a;
  }
  withMutation(i) {
    let a = this._mutate;
    this._mutate = !0;
    let u = i(this);
    return (this._mutate = a), u;
  }
  concat(i) {
    if (!i || i === this) return this;
    if (i.type !== this.type && this.type !== 'mixed')
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${i.type}`);
    let a = this,
      u = i.clone();
    const s = Object.assign({}, a.spec, u.spec);
    return (
      (u.spec = s),
      (u.internalTests = Object.assign({}, a.internalTests, u.internalTests)),
      (u._whitelist = a._whitelist.merge(i._whitelist, i._blacklist)),
      (u._blacklist = a._blacklist.merge(i._blacklist, i._whitelist)),
      (u.tests = a.tests),
      (u.exclusiveTests = a.exclusiveTests),
      u.withMutation((f) => {
        i.tests.forEach((d) => {
          f.test(d.OPTIONS);
        });
      }),
      (u.transforms = [...a.transforms, ...u.transforms]),
      u
    );
  }
  isType(i) {
    return i == null
      ? !!((this.spec.nullable && i === null) || (this.spec.optional && i === void 0))
      : this._typeCheck(i);
  }
  resolve(i) {
    let a = this;
    if (a.conditions.length) {
      let u = a.conditions;
      (a = a.clone()), (a.conditions = []), (a = u.reduce((s, f) => f.resolve(s, i), a)), (a = a.resolve(i));
    }
    return a;
  }
  resolveOptions(i) {
    var a, u, s, f;
    return Object.assign({}, i, {
      from: i.from || [],
      strict: (a = i.strict) != null ? a : this.spec.strict,
      abortEarly: (u = i.abortEarly) != null ? u : this.spec.abortEarly,
      recursive: (s = i.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (f = i.disableStackTrace) != null ? f : this.spec.disableStackTrace
    });
  }
  cast(i, a = {}) {
    let u = this.resolve(Object.assign({ value: i }, a)),
      s = a.assert === 'ignore-optionality',
      f = u._cast(i, a);
    if (a.assert !== !1 && !u.isType(f)) {
      if (s && sn(f)) return f;
      let d = Yn(i),
        h = Yn(f);
      throw new TypeError(
        `The value of ${a.path || 'field'} could not be cast to a value that satisfies the schema type: "${u.type}". 

attempted value: ${d} 
` + (h !== d ? `result of cast: ${h}` : '')
      );
    }
    return f;
  }
  _cast(i, a) {
    let u = i === void 0 ? i : this.transforms.reduce((s, f) => f.call(this, s, i, this), i);
    return u === void 0 && (u = this.getDefault(a)), u;
  }
  _validate(i, a = {}, u, s) {
    let { path: f, originalValue: d = i, strict: h = this.spec.strict } = a,
      p = i;
    h || (p = this._cast(p, Object.assign({ assert: !1 }, a)));
    let y = [];
    for (let _ of Object.values(this.internalTests)) _ && y.push(_);
    this.runTests({ path: f, value: p, originalValue: d, options: a, tests: y }, u, (_) => {
      if (_.length) return s(_, p);
      this.runTests({ path: f, value: p, originalValue: d, options: a, tests: this.tests }, u, s);
    });
  }
  runTests(i, a, u) {
    let s = !1,
      { tests: f, value: d, originalValue: h, path: p, options: y } = i,
      _ = (P) => {
        s || ((s = !0), a(P, d));
      },
      b = (P) => {
        s || ((s = !0), u(P, d));
      },
      S = f.length,
      E = [];
    if (!S) return b([]);
    let I = { value: d, originalValue: h, path: p, options: y, schema: this };
    for (let P = 0; P < f.length; P++) {
      const J = f[P];
      J(I, _, function (z) {
        z && (Array.isArray(z) ? E.push(...z) : E.push(z)), --S <= 0 && b(E);
      });
    }
  }
  asNestedTest({ key: i, index: a, parent: u, parentPath: s, originalParent: f, options: d }) {
    const h = i ?? a;
    if (h == null) throw TypeError('Must include `key` or `index` for nested validations');
    const p = typeof h == 'number';
    let y = u[h];
    const _ = Object.assign({}, d, {
      strict: !0,
      parent: u,
      value: y,
      originalValue: f[h],
      key: void 0,
      [p ? 'index' : 'key']: h,
      path: p || h.includes('.') ? `${s || ''}[${p ? h : `"${h}"`}]` : (s ? `${s}.` : '') + i
    });
    return (b, S, E) => this.resolve(_)._validate(y, _, S, E);
  }
  validate(i, a) {
    var u;
    let s = this.resolve(Object.assign({}, a, { value: i })),
      f = (u = a == null ? void 0 : a.disableStackTrace) != null ? u : s.spec.disableStackTrace;
    return new Promise((d, h) =>
      s._validate(
        i,
        a,
        (p, y) => {
          Nr.isError(p) && (p.value = y), h(p);
        },
        (p, y) => {
          p.length ? h(new Nr(p, y, void 0, void 0, f)) : d(y);
        }
      )
    );
  }
  validateSync(i, a) {
    var u;
    let s = this.resolve(Object.assign({}, a, { value: i })),
      f,
      d = (u = a == null ? void 0 : a.disableStackTrace) != null ? u : s.spec.disableStackTrace;
    return (
      s._validate(
        i,
        Object.assign({}, a, { sync: !0 }),
        (h, p) => {
          throw (Nr.isError(h) && (h.value = p), h);
        },
        (h, p) => {
          if (h.length) throw new Nr(h, i, void 0, void 0, d);
          f = p;
        }
      ),
      f
    );
  }
  isValid(i, a) {
    return this.validate(i, a).then(
      () => !0,
      (u) => {
        if (Nr.isError(u)) return !1;
        throw u;
      }
    );
  }
  isValidSync(i, a) {
    try {
      return this.validateSync(i, a), !0;
    } catch (u) {
      if (Nr.isError(u)) return !1;
      throw u;
    }
  }
  _getDefault(i) {
    let a = this.spec.default;
    return a == null ? a : typeof a == 'function' ? a.call(this, i) : Ha(a);
  }
  getDefault(i) {
    return this.resolve(i || {})._getDefault(i);
  }
  default(i) {
    return arguments.length === 0 ? this._getDefault() : this.clone({ default: i });
  }
  strict(i = !0) {
    return this.clone({ strict: i });
  }
  nullability(i, a) {
    const u = this.clone({ nullable: i });
    return (
      (u.internalTests.nullable = za({
        message: a,
        name: 'nullable',
        test(s) {
          return s === null ? this.schema.spec.nullable : !0;
        }
      })),
      u
    );
  }
  optionality(i, a) {
    const u = this.clone({ optional: i });
    return (
      (u.internalTests.optionality = za({
        message: a,
        name: 'optionality',
        test(s) {
          return s === void 0 ? this.schema.spec.optional : !0;
        }
      })),
      u
    );
  }
  optional() {
    return this.optionality(!0);
  }
  defined(i = vn.defined) {
    return this.optionality(!1, i);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(i = vn.notNull) {
    return this.nullability(!1, i);
  }
  required(i = vn.required) {
    return this.clone().withMutation((a) => a.nonNullable(i).defined(i));
  }
  notRequired() {
    return this.clone().withMutation((i) => i.nullable().optional());
  }
  transform(i) {
    let a = this.clone();
    return a.transforms.push(i), a;
  }
  test(...i) {
    let a;
    if (
      (i.length === 1
        ? typeof i[0] == 'function'
          ? (a = { test: i[0] })
          : (a = i[0])
        : i.length === 2
          ? (a = { name: i[0], test: i[1] })
          : (a = { name: i[0], message: i[1], test: i[2] }),
      a.message === void 0 && (a.message = vn.default),
      typeof a.test != 'function')
    )
      throw new TypeError('`test` is a required parameters');
    let u = this.clone(),
      s = za(a),
      f = a.exclusive || (a.name && u.exclusiveTests[a.name] === !0);
    if (a.exclusive && !a.name)
      throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
    return (
      a.name && (u.exclusiveTests[a.name] = !!a.exclusive),
      (u.tests = u.tests.filter((d) => !(d.OPTIONS.name === a.name && (f || d.OPTIONS.test === s.OPTIONS.test)))),
      u.tests.push(s),
      u
    );
  }
  when(i, a) {
    !Array.isArray(i) && typeof i != 'string' && ((a = i), (i = '.'));
    let u = this.clone(),
      s = Ng(i).map((f) => new aa(f));
    return (
      s.forEach((f) => {
        f.isSibling && u.deps.push(f.key);
      }),
      u.conditions.push(typeof a == 'function' ? new Ps(s, a) : Ps.fromOptions(s, a)),
      u
    );
  }
  typeError(i) {
    let a = this.clone();
    return (
      (a.internalTests.typeError = za({
        message: i,
        name: 'typeError',
        skipAbsent: !0,
        test(u) {
          return this.schema._typeCheck(u) ? !0 : this.createError({ params: { type: this.schema.type } });
        }
      })),
      a
    );
  }
  oneOf(i, a = vn.oneOf) {
    let u = this.clone();
    return (
      i.forEach((s) => {
        u._whitelist.add(s), u._blacklist.delete(s);
      }),
      (u.internalTests.whiteList = za({
        message: a,
        name: 'oneOf',
        skipAbsent: !0,
        test(s) {
          let f = this.schema._whitelist,
            d = f.resolveAll(this.resolve);
          return d.includes(s) ? !0 : this.createError({ params: { values: Array.from(f).join(', '), resolved: d } });
        }
      })),
      u
    );
  }
  notOneOf(i, a = vn.notOneOf) {
    let u = this.clone();
    return (
      i.forEach((s) => {
        u._blacklist.add(s), u._whitelist.delete(s);
      }),
      (u.internalTests.blacklist = za({
        message: a,
        name: 'notOneOf',
        test(s) {
          let f = this.schema._blacklist,
            d = f.resolveAll(this.resolve);
          return d.includes(s) ? this.createError({ params: { values: Array.from(f).join(', '), resolved: d } }) : !0;
        }
      })),
      u
    );
  }
  strip(i = !0) {
    let a = this.clone();
    return (a.spec.strip = i), a;
  }
  describe(i) {
    const a = (i ? this.resolve(i) : this).clone(),
      { label: u, meta: s, optional: f, nullable: d } = a.spec;
    return {
      meta: s,
      label: u,
      optional: f,
      nullable: d,
      default: a.getDefault(i),
      type: a.type,
      oneOf: a._whitelist.describe(),
      notOneOf: a._blacklist.describe(),
      tests: a.tests
        .map((p) => ({ name: p.OPTIONS.name, params: p.OPTIONS.params }))
        .filter((p, y, _) => _.findIndex((b) => b.name === p.name) === y)
    };
  }
}
jr.prototype.__isYupSchema__ = !0;
for (const r of ['validate', 'validateSync'])
  jr.prototype[`${r}At`] = function (i, a, u = {}) {
    const { parent: s, parentPath: f, schema: d } = uE(this, i, a, u.context);
    return d[r](s && s[f], Object.assign({}, u, { parent: s, path: i }));
  };
for (const r of ['equals', 'is']) jr.prototype[r] = jr.prototype.oneOf;
for (const r of ['not', 'nope']) jr.prototype[r] = jr.prototype.notOneOf;
function Rg() {
  return new Bg();
}
class Bg extends jr {
  constructor() {
    super({
      type: 'boolean',
      check(i) {
        return i instanceof Boolean && (i = i.valueOf()), typeof i == 'boolean';
      }
    }),
      this.withMutation(() => {
        this.transform((i, a, u) => {
          if (u.spec.coerce && !u.isType(i)) {
            if (/^(true|1)$/i.test(String(i))) return !0;
            if (/^(false|0)$/i.test(String(i))) return !1;
          }
          return i;
        });
      });
  }
  isTrue(i = ad.isValue) {
    return this.test({
      message: i,
      name: 'is-value',
      exclusive: !0,
      params: { value: 'true' },
      test(a) {
        return sn(a) || a === !0;
      }
    });
  }
  isFalse(i = ad.isValue) {
    return this.test({
      message: i,
      name: 'is-value',
      exclusive: !0,
      params: { value: 'false' },
      test(a) {
        return sn(a) || a === !1;
      }
    });
  }
  default(i) {
    return super.default(i);
  }
  defined(i) {
    return super.defined(i);
  }
  optional() {
    return super.optional();
  }
  required(i) {
    return super.required(i);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(i) {
    return super.nonNullable(i);
  }
  strip(i) {
    return super.strip(i);
  }
}
Rg.prototype = Bg.prototype;
const sE =
  /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function cE(r) {
  const i = ld(r);
  if (!i) return Date.parse ? Date.parse(r) : Number.NaN;
  if (i.z === void 0 && i.plusMinus === void 0)
    return new Date(i.year, i.month, i.day, i.hour, i.minute, i.second, i.millisecond).valueOf();
  let a = 0;
  return (
    i.z !== 'Z' &&
      i.plusMinus !== void 0 &&
      ((a = i.hourOffset * 60 + i.minuteOffset), i.plusMinus === '+' && (a = 0 - a)),
    Date.UTC(i.year, i.month, i.day, i.hour, i.minute + a, i.second, i.millisecond)
  );
}
function ld(r) {
  var i, a;
  const u = sE.exec(r);
  return u
    ? {
        year: Vn(u[1]),
        month: Vn(u[2], 1) - 1,
        day: Vn(u[3], 1),
        hour: Vn(u[4]),
        minute: Vn(u[5]),
        second: Vn(u[6]),
        millisecond: u[7] ? Vn(u[7].substring(0, 3)) : 0,
        precision: (i = (a = u[7]) == null ? void 0 : a.length) != null ? i : void 0,
        z: u[8] || void 0,
        plusMinus: u[9] || void 0,
        hourOffset: Vn(u[10]),
        minuteOffset: Vn(u[11])
      }
    : null;
}
function Vn(r, i = 0) {
  return Number(r) || i;
}
let oE =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  fE =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  dE =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  hE = '^\\d{4}-\\d{2}-\\d{2}',
  mE = '\\d{2}:\\d{2}:\\d{2}',
  pE = '(([+-]\\d{2}(:?\\d{2})?)|Z)',
  yE = new RegExp(`${hE}T${mE}(\\.\\d+)?${pE}$`),
  gE = (r) => sn(r) || r === r.trim(),
  vE = {}.toString();
function We() {
  return new Cg();
}
class Cg extends jr {
  constructor() {
    super({
      type: 'string',
      check(i) {
        return i instanceof String && (i = i.valueOf()), typeof i == 'string';
      }
    }),
      this.withMutation(() => {
        this.transform((i, a, u) => {
          if (!u.spec.coerce || u.isType(i) || Array.isArray(i)) return i;
          const s = i != null && i.toString ? i.toString() : i;
          return s === vE ? i : s;
        });
      });
  }
  required(i) {
    return super
      .required(i)
      .withMutation((a) =>
        a.test({ message: i || vn.required, name: 'required', skipAbsent: !0, test: (u) => !!u.length })
      );
  }
  notRequired() {
    return super
      .notRequired()
      .withMutation((i) => ((i.tests = i.tests.filter((a) => a.OPTIONS.name !== 'required')), i));
  }
  length(i, a = xr.length) {
    return this.test({
      message: a,
      name: 'length',
      exclusive: !0,
      params: { length: i },
      skipAbsent: !0,
      test(u) {
        return u.length === this.resolve(i);
      }
    });
  }
  min(i, a = xr.min) {
    return this.test({
      message: a,
      name: 'min',
      exclusive: !0,
      params: { min: i },
      skipAbsent: !0,
      test(u) {
        return u.length >= this.resolve(i);
      }
    });
  }
  max(i, a = xr.max) {
    return this.test({
      name: 'max',
      exclusive: !0,
      message: a,
      params: { max: i },
      skipAbsent: !0,
      test(u) {
        return u.length <= this.resolve(i);
      }
    });
  }
  matches(i, a) {
    let u = !1,
      s,
      f;
    return (
      a && (typeof a == 'object' ? ({ excludeEmptyString: u = !1, message: s, name: f } = a) : (s = a)),
      this.test({
        name: f || 'matches',
        message: s || xr.matches,
        params: { regex: i },
        skipAbsent: !0,
        test: (d) => (d === '' && u) || d.search(i) !== -1
      })
    );
  }
  email(i = xr.email) {
    return this.matches(oE, { name: 'email', message: i, excludeEmptyString: !0 });
  }
  url(i = xr.url) {
    return this.matches(fE, { name: 'url', message: i, excludeEmptyString: !0 });
  }
  uuid(i = xr.uuid) {
    return this.matches(dE, { name: 'uuid', message: i, excludeEmptyString: !1 });
  }
  datetime(i) {
    let a = '',
      u,
      s;
    return (
      i && (typeof i == 'object' ? ({ message: a = '', allowOffset: u = !1, precision: s = void 0 } = i) : (a = i)),
      this.matches(yE, { name: 'datetime', message: a || xr.datetime, excludeEmptyString: !0 })
        .test({
          name: 'datetime_offset',
          message: a || xr.datetime_offset,
          params: { allowOffset: u },
          skipAbsent: !0,
          test: (f) => {
            if (!f || u) return !0;
            const d = ld(f);
            return d ? !!d.z : !1;
          }
        })
        .test({
          name: 'datetime_precision',
          message: a || xr.datetime_precision,
          params: { precision: s },
          skipAbsent: !0,
          test: (f) => {
            if (!f || s == null) return !0;
            const d = ld(f);
            return d ? d.precision === s : !1;
          }
        })
    );
  }
  ensure() {
    return this.default('').transform((i) => (i === null ? '' : i));
  }
  trim(i = xr.trim) {
    return this.transform((a) => (a != null ? a.trim() : a)).test({ message: i, name: 'trim', test: gE });
  }
  lowercase(i = xr.lowercase) {
    return this.transform((a) => (sn(a) ? a : a.toLowerCase())).test({
      message: i,
      name: 'string_case',
      exclusive: !0,
      skipAbsent: !0,
      test: (a) => sn(a) || a === a.toLowerCase()
    });
  }
  uppercase(i = xr.uppercase) {
    return this.transform((a) => (sn(a) ? a : a.toUpperCase())).test({
      message: i,
      name: 'string_case',
      exclusive: !0,
      skipAbsent: !0,
      test: (a) => sn(a) || a === a.toUpperCase()
    });
  }
}
We.prototype = Cg.prototype;
let bE = (r) => r != +r;
function ut() {
  return new Dg();
}
class Dg extends jr {
  constructor() {
    super({
      type: 'number',
      check(i) {
        return i instanceof Number && (i = i.valueOf()), typeof i == 'number' && !bE(i);
      }
    }),
      this.withMutation(() => {
        this.transform((i, a, u) => {
          if (!u.spec.coerce) return i;
          let s = i;
          if (typeof s == 'string') {
            if (((s = s.replace(/\s/g, '')), s === '')) return NaN;
            s = +s;
          }
          return u.isType(s) || s === null ? s : parseFloat(s);
        });
      });
  }
  min(i, a = wi.min) {
    return this.test({
      message: a,
      name: 'min',
      exclusive: !0,
      params: { min: i },
      skipAbsent: !0,
      test(u) {
        return u >= this.resolve(i);
      }
    });
  }
  max(i, a = wi.max) {
    return this.test({
      message: a,
      name: 'max',
      exclusive: !0,
      params: { max: i },
      skipAbsent: !0,
      test(u) {
        return u <= this.resolve(i);
      }
    });
  }
  lessThan(i, a = wi.lessThan) {
    return this.test({
      message: a,
      name: 'max',
      exclusive: !0,
      params: { less: i },
      skipAbsent: !0,
      test(u) {
        return u < this.resolve(i);
      }
    });
  }
  moreThan(i, a = wi.moreThan) {
    return this.test({
      message: a,
      name: 'min',
      exclusive: !0,
      params: { more: i },
      skipAbsent: !0,
      test(u) {
        return u > this.resolve(i);
      }
    });
  }
  positive(i = wi.positive) {
    return this.moreThan(0, i);
  }
  negative(i = wi.negative) {
    return this.lessThan(0, i);
  }
  integer(i = wi.integer) {
    return this.test({ name: 'integer', message: i, skipAbsent: !0, test: (a) => Number.isInteger(a) });
  }
  truncate() {
    return this.transform((i) => (sn(i) ? i : i | 0));
  }
  round(i) {
    var a;
    let u = ['ceil', 'floor', 'round', 'trunc'];
    if (((i = ((a = i) == null ? void 0 : a.toLowerCase()) || 'round'), i === 'trunc')) return this.truncate();
    if (u.indexOf(i.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + u.join(', '));
    return this.transform((s) => (sn(s) ? s : Math[i](s)));
  }
}
ut.prototype = Dg.prototype;
let SE = new Date(''),
  xE = (r) => Object.prototype.toString.call(r) === '[object Date]';
class _d extends jr {
  constructor() {
    super({
      type: 'date',
      check(i) {
        return xE(i) && !isNaN(i.getTime());
      }
    }),
      this.withMutation(() => {
        this.transform((i, a, u) =>
          !u.spec.coerce || u.isType(i) || i === null ? i : ((i = cE(i)), isNaN(i) ? _d.INVALID_DATE : new Date(i))
        );
      });
  }
  prepareParam(i, a) {
    let u;
    if (aa.isRef(i)) u = i;
    else {
      let s = this.cast(i);
      if (!this._typeCheck(s))
        throw new TypeError(`\`${a}\` must be a Date or a value that can be \`cast()\` to a Date`);
      u = s;
    }
    return u;
  }
  min(i, a = id.min) {
    let u = this.prepareParam(i, 'min');
    return this.test({
      message: a,
      name: 'min',
      exclusive: !0,
      params: { min: i },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(u);
      }
    });
  }
  max(i, a = id.max) {
    let u = this.prepareParam(i, 'max');
    return this.test({
      message: a,
      name: 'max',
      exclusive: !0,
      params: { max: i },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(u);
      }
    });
  }
}
_d.INVALID_DATE = SE;
function wE(r, i = []) {
  let a = [],
    u = new Set(),
    s = new Set(i.map(([d, h]) => `${d}-${h}`));
  function f(d, h) {
    let p = ta.split(d)[0];
    u.add(p), s.has(`${h}-${p}`) || a.push([h, p]);
  }
  for (const d of Object.keys(r)) {
    let h = r[d];
    u.add(d), aa.isRef(h) && h.isSibling ? f(h.path, d) : cc(h) && 'deps' in h && h.deps.forEach((p) => f(p, d));
  }
  return Jw.array(Array.from(u), a).reverse();
}
function py(r, i) {
  let a = 1 / 0;
  return (
    r.some((u, s) => {
      var f;
      if ((f = i.path) != null && f.includes(u)) return (a = s), !0;
    }),
    a
  );
}
function Ug(r) {
  return (i, a) => py(r, i) - py(r, a);
}
const jg = (r, i, a) => {
  if (typeof r != 'string') return r;
  let u = r;
  try {
    u = JSON.parse(r);
  } catch {}
  return a.isType(u) ? u : r;
};
function Ls(r) {
  if ('fields' in r) {
    const i = {};
    for (const [a, u] of Object.entries(r.fields)) i[a] = Ls(u);
    return r.setFields(i);
  }
  if (r.type === 'array') {
    const i = r.optional();
    return i.innerType && (i.innerType = Ls(i.innerType)), i;
  }
  return r.type === 'tuple' ? r.optional().clone({ types: r.spec.types.map(Ls) }) : 'optional' in r ? r.optional() : r;
}
const EE = (r, i) => {
  const a = [...ta.normalizePath(i)];
  if (a.length === 1) return a[0] in r;
  let u = a.pop(),
    s = ta.getter(ta.join(a), !0)(r);
  return !!(s && u in s);
};
let yy = (r) => Object.prototype.toString.call(r) === '[object Object]';
function gy(r, i) {
  let a = Object.keys(r.fields);
  return Object.keys(i).filter((u) => a.indexOf(u) === -1);
}
const AE = Ug([]);
function vt(r) {
  return new kg(r);
}
class kg extends jr {
  constructor(i) {
    super({
      type: 'object',
      check(a) {
        return yy(a) || typeof a == 'function';
      }
    }),
      (this.fields = Object.create(null)),
      (this._sortErrors = AE),
      (this._nodes = []),
      (this._excludedEdges = []),
      this.withMutation(() => {
        i && this.shape(i);
      });
  }
  _cast(i, a = {}) {
    var u;
    let s = super._cast(i, a);
    if (s === void 0) return this.getDefault(a);
    if (!this._typeCheck(s)) return s;
    let f = this.fields,
      d = (u = a.stripUnknown) != null ? u : this.spec.noUnknown,
      h = [].concat(
        this._nodes,
        Object.keys(s).filter((b) => !this._nodes.includes(b))
      ),
      p = {},
      y = Object.assign({}, a, { parent: p, __validating: a.__validating || !1 }),
      _ = !1;
    for (const b of h) {
      let S = f[b],
        E = b in s;
      if (S) {
        let I,
          P = s[b];
        (y.path = (a.path ? `${a.path}.` : '') + b), (S = S.resolve({ value: P, context: a.context, parent: p }));
        let J = S instanceof jr ? S.spec : void 0,
          W = J == null ? void 0 : J.strict;
        if (J != null && J.strip) {
          _ = _ || b in s;
          continue;
        }
        (I = !a.__validating || !W ? S.cast(s[b], y) : s[b]), I !== void 0 && (p[b] = I);
      } else E && !d && (p[b] = s[b]);
      (E !== b in p || p[b] !== s[b]) && (_ = !0);
    }
    return _ ? p : s;
  }
  _validate(i, a = {}, u, s) {
    let { from: f = [], originalValue: d = i, recursive: h = this.spec.recursive } = a;
    (a.from = [{ schema: this, value: d }, ...f]),
      (a.__validating = !0),
      (a.originalValue = d),
      super._validate(i, a, u, (p, y) => {
        if (!h || !yy(y)) {
          s(p, y);
          return;
        }
        d = d || y;
        let _ = [];
        for (let b of this._nodes) {
          let S = this.fields[b];
          !S ||
            aa.isRef(S) ||
            _.push(S.asNestedTest({ options: a, key: b, parent: y, parentPath: a.path, originalParent: d }));
        }
        this.runTests({ tests: _, value: y, originalValue: d, options: a }, u, (b) => {
          s(b.sort(this._sortErrors).concat(p), y);
        });
      });
  }
  clone(i) {
    const a = super.clone(i);
    return (
      (a.fields = Object.assign({}, this.fields)),
      (a._nodes = this._nodes),
      (a._excludedEdges = this._excludedEdges),
      (a._sortErrors = this._sortErrors),
      a
    );
  }
  concat(i) {
    let a = super.concat(i),
      u = a.fields;
    for (let [s, f] of Object.entries(this.fields)) {
      const d = u[s];
      u[s] = d === void 0 ? f : d;
    }
    return a.withMutation((s) => s.setFields(u, [...this._excludedEdges, ...i._excludedEdges]));
  }
  _getDefault(i) {
    if ('default' in this.spec) return super._getDefault(i);
    if (!this._nodes.length) return;
    let a = {};
    return (
      this._nodes.forEach((u) => {
        var s;
        const f = this.fields[u];
        let d = i;
        (s = d) != null && s.value && (d = Object.assign({}, d, { parent: d.value, value: d.value[u] })),
          (a[u] = f && 'getDefault' in f ? f.getDefault(d) : void 0);
      }),
      a
    );
  }
  setFields(i, a) {
    let u = this.clone();
    return (u.fields = i), (u._nodes = wE(i, a)), (u._sortErrors = Ug(Object.keys(i))), a && (u._excludedEdges = a), u;
  }
  shape(i, a = []) {
    return this.clone().withMutation((u) => {
      let s = u._excludedEdges;
      return (
        a.length && (Array.isArray(a[0]) || (a = [a]), (s = [...u._excludedEdges, ...a])),
        u.setFields(Object.assign(u.fields, i), s)
      );
    });
  }
  partial() {
    const i = {};
    for (const [a, u] of Object.entries(this.fields))
      i[a] = 'optional' in u && u.optional instanceof Function ? u.optional() : u;
    return this.setFields(i);
  }
  deepPartial() {
    return Ls(this);
  }
  pick(i) {
    const a = {};
    for (const u of i) this.fields[u] && (a[u] = this.fields[u]);
    return this.setFields(
      a,
      this._excludedEdges.filter(([u, s]) => i.includes(u) && i.includes(s))
    );
  }
  omit(i) {
    const a = [];
    for (const u of Object.keys(this.fields)) i.includes(u) || a.push(u);
    return this.pick(a);
  }
  from(i, a, u) {
    let s = ta.getter(i, !0);
    return this.transform((f) => {
      if (!f) return f;
      let d = f;
      return EE(f, i) && ((d = Object.assign({}, f)), u || delete d[i], (d[a] = s(f))), d;
    });
  }
  json() {
    return this.transform(jg);
  }
  exact(i) {
    return this.test({
      name: 'exact',
      exclusive: !0,
      message: i || ks.exact,
      test(a) {
        if (a == null) return !0;
        const u = gy(this.schema, a);
        return u.length === 0 || this.createError({ params: { properties: u.join(', ') } });
      }
    });
  }
  stripUnknown() {
    return this.clone({ noUnknown: !0 });
  }
  noUnknown(i = !0, a = ks.noUnknown) {
    typeof i != 'boolean' && ((a = i), (i = !0));
    let u = this.test({
      name: 'noUnknown',
      exclusive: !0,
      message: a,
      test(s) {
        if (s == null) return !0;
        const f = gy(this.schema, s);
        return !i || f.length === 0 || this.createError({ params: { unknown: f.join(', ') } });
      }
    });
    return (u.spec.noUnknown = i), u;
  }
  unknown(i = !0, a = ks.noUnknown) {
    return this.noUnknown(!i, a);
  }
  transformKeys(i) {
    return this.transform((a) => {
      if (!a) return a;
      const u = {};
      for (const s of Object.keys(a)) u[i(s)] = a[s];
      return u;
    });
  }
  camelCase() {
    return this.transformKeys(Zf.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Zf.snakeCase);
  }
  constantCase() {
    return this.transformKeys((i) => Zf.snakeCase(i).toUpperCase());
  }
  describe(i) {
    const a = (i ? this.resolve(i) : this).clone(),
      u = super.describe(i);
    u.fields = {};
    for (const [f, d] of Object.entries(a.fields)) {
      var s;
      let h = i;
      (s = h) != null && s.value && (h = Object.assign({}, h, { parent: h.value, value: h.value[f] })),
        (u.fields[f] = d.describe(h));
    }
    return u;
  }
}
vt.prototype = kg.prototype;
function Ig(r) {
  return new Lg(r);
}
class Lg extends jr {
  constructor(i) {
    super({
      type: 'array',
      spec: { types: i },
      check(a) {
        return Array.isArray(a);
      }
    }),
      (this.innerType = void 0),
      (this.innerType = i);
  }
  _cast(i, a) {
    const u = super._cast(i, a);
    if (!this._typeCheck(u) || !this.innerType) return u;
    let s = !1;
    const f = u.map((d, h) => {
      const p = this.innerType.cast(d, Object.assign({}, a, { path: `${a.path || ''}[${h}]` }));
      return p !== d && (s = !0), p;
    });
    return s ? f : u;
  }
  _validate(i, a = {}, u, s) {
    var f;
    let d = this.innerType,
      h = (f = a.recursive) != null ? f : this.spec.recursive;
    a.originalValue != null && a.originalValue,
      super._validate(i, a, u, (p, y) => {
        var _;
        if (!h || !d || !this._typeCheck(y)) {
          s(p, y);
          return;
        }
        let b = new Array(y.length);
        for (let E = 0; E < y.length; E++) {
          var S;
          b[E] = d.asNestedTest({
            options: a,
            index: E,
            parent: y,
            parentPath: a.path,
            originalParent: (S = a.originalValue) != null ? S : i
          });
        }
        this.runTests(
          { value: y, tests: b, originalValue: (_ = a.originalValue) != null ? _ : i, options: a },
          u,
          (E) => s(E.concat(p), y)
        );
      });
  }
  clone(i) {
    const a = super.clone(i);
    return (a.innerType = this.innerType), a;
  }
  json() {
    return this.transform(jg);
  }
  concat(i) {
    let a = super.concat(i);
    return (
      (a.innerType = this.innerType),
      i.innerType && (a.innerType = a.innerType ? a.innerType.concat(i.innerType) : i.innerType),
      a
    );
  }
  of(i) {
    let a = this.clone();
    if (!cc(i)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + Yn(i));
    return (a.innerType = i), (a.spec = Object.assign({}, a.spec, { types: i })), a;
  }
  length(i, a = Is.length) {
    return this.test({
      message: a,
      name: 'length',
      exclusive: !0,
      params: { length: i },
      skipAbsent: !0,
      test(u) {
        return u.length === this.resolve(i);
      }
    });
  }
  min(i, a) {
    return (
      (a = a || Is.min),
      this.test({
        message: a,
        name: 'min',
        exclusive: !0,
        params: { min: i },
        skipAbsent: !0,
        test(u) {
          return u.length >= this.resolve(i);
        }
      })
    );
  }
  max(i, a) {
    return (
      (a = a || Is.max),
      this.test({
        message: a,
        name: 'max',
        exclusive: !0,
        params: { max: i },
        skipAbsent: !0,
        test(u) {
          return u.length <= this.resolve(i);
        }
      })
    );
  }
  ensure() {
    return this.default(() => []).transform((i, a) => (this._typeCheck(i) ? i : a == null ? [] : [].concat(a)));
  }
  compact(i) {
    let a = i ? (u, s, f) => !i(u, s, f) : (u) => !!u;
    return this.transform((u) => (u != null ? u.filter(a) : u));
  }
  describe(i) {
    const a = (i ? this.resolve(i) : this).clone(),
      u = super.describe(i);
    if (a.innerType) {
      var s;
      let f = i;
      (s = f) != null && s.value && (f = Object.assign({}, f, { parent: f.value, value: f.value[0] })),
        (u.innerType = a.innerType.describe(f));
    }
    return u;
  }
}
Ig.prototype = Lg.prototype;
const Ue = ({ label: r, labelDesc: i, children: a, error: u, required: s }) =>
    T.jsxs('label', {
      className: 'flex flex-col gap-1',
      children: [
        T.jsxs('span', {
          className: 'text-sm text-gray-500',
          children: [
            s && T.jsx('span', { className: 'text-red-500', children: '*' }),
            r,
            i && T.jsxs('span', { children: ['(', i, ')'] })
          ]
        }),
        a,
        u && T.jsx('span', { className: 'text-sm text-red-500', children: u.message })
      ]
    }),
  _E = [
    {
      chain: Rt.Bitcoin,
      name: 'Bitcoin',
      networks: [
        { network: He.BtcMainNet, name: 'MainNet' },
        { network: He.BtcTestNet, name: 'TestNet' }
      ]
    },
    {
      chain: Rt.Ethereum,
      name: 'Ethereum',
      networks: [
        { network: He.EvmMainNet, name: 'MainNet' },
        { network: He.EvmSepoliaNet, name: 'Sepolia' }
      ]
    },
    {
      chain: Rt.Solana,
      name: 'Solana',
      networks: [
        { network: He.SolanaMainNet, name: 'MainNet' },
        { network: He.SolanaTestNet, name: 'TestNet' }
      ]
    },
    { chain: Rt.Dfinity, name: 'Internet Computer', networks: [{ network: He.DfinityMainNet, name: 'MainNet' }] },
    {
      chain: Rt.Ton,
      name: 'TON',
      networks: [
        { network: He.TonMainNet, name: 'MainNet' },
        { network: He.TonTestNet, name: 'TestNet' }
      ]
    },
    {
      chain: Rt.Tron,
      name: 'TRON',
      networks: [
        { network: He.TronMainNet, name: 'MainNet' },
        { network: He.TronShastaTestNet, name: 'Shasta TestNet' },
        { network: He.TronNileTestNet, name: 'Nile TestNet' }
      ]
    },
    {
      chain: Rt.Kaspa,
      name: 'Kaspa',
      networks: [
        { network: He.KaspaMainNet, name: 'MainNet' },
        { network: He.KaspaTestNet, name: 'TestNet' }
      ]
    }
  ];
function Kn({ selectedChainIds: r, onChange: i, singleSelect: a }) {
  const u = (f, d) => r.some((h) => h.chain.equals(f) && h.network.equals(d)),
    s = (f, d) => {
      const h = new ar(f, d);
      if (a) {
        i([h]);
        return;
      }
      const p = r.some((y) => y.equals(h));
      i(p ? r.filter((y) => !y.equals(h)) : [...r, h]);
    };
  return T.jsx('div', {
    className: 'flex flex-col gap-1 max-h-80 overflow-y-auto p-2 border rounded',
    children: _E.map((f) =>
      T.jsxs(
        'div',
        {
          children: [
            T.jsx('div', { className: 'font-bold mt-1', children: f.name }),
            T.jsx('div', {
              className: 'ml-4',
              children: f.networks.map((d) =>
                T.jsxs(
                  'label',
                  {
                    className: 'flex items-center gap-2',
                    children: [
                      T.jsx('input', {
                        type: a ? 'radio' : 'checkbox',
                        checked: u(f.chain, d.network),
                        onChange: () => s(f.chain, d.network)
                      }),
                      T.jsxs('span', { children: [d.name, ' (', f.chain.toString(), '_', d.network.toString(), ')'] })
                    ]
                  },
                  d.network.toString()
                )
              )
            })
          ]
        },
        f.chain.toString()
      )
    )
  });
}
function Ni({ selectedAssetTypes: r, onChange: i, singleSelect: a }) {
  const u = (s) => {
    if (a) {
      i([s]);
      return;
    }
    r.includes(s) ? i(r.filter((f) => f !== s)) : i([...r, s]);
  };
  return T.jsx('div', {
    className: 'flex flex-col gap-1 max-h-40 overflow-y-auto p-2 border rounded',
    children: Object.entries(Pi)
      .filter(([s]) => isNaN(Number(s)))
      .map(([s, f]) =>
        T.jsxs(
          'label',
          {
            className: 'flex items-center gap-2',
            children: [
              T.jsx('input', {
                type: a ? 'radio' : 'checkbox',
                checked: r.includes(Number(f)),
                onChange: () => u(Number(f))
              }),
              T.jsxs('span', { children: [s, ' (', f, ')'] })
            ]
          },
          f
        )
      )
  });
}
const NE = vt({
  chainIds: vt().nullable(),
  chainAssetTypes: vt().nullable(),
  limit: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  offset: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  orderBy: We()
});
function TE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [y, _] = le.useState([]),
    {
      register: b,
      handleSubmit: S,
      formState: { errors: E }
    } = Ut({ resolver: jt(NE) }),
    I = S(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = {
          chainIds: y.length > 0 ? y : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0,
          limit: P.limit ?? void 0,
          offset: P.offset ?? void 0,
          orderBy: P.orderBy || void 0
        };
        s(await r.getAssets(J));
      } catch (J) {
        d(J.message ?? JSON.stringify(J));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetAssets',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: E.chainIds,
          children: T.jsx(Kn, { selectedChainIds: y, onChange: _ })
        }),
        T.jsx(Ue, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: E.chainAssetTypes,
          children: T.jsx(Ni, { selectedAssetTypes: h, onChange: p })
        }),
        T.jsx(Ue, {
          label: 'Limit',
          error: E.limit,
          children: T.jsx('input', { type: 'number', className: 'input', ...b('limit') })
        }),
        T.jsx(Ue, {
          label: 'Offset',
          error: E.offset,
          children: T.jsx('input', { type: 'number', className: 'input', ...b('offset') })
        }),
        T.jsx(Ue, {
          label: 'OrderBy',
          error: E.orderBy,
          children: T.jsx('input', { type: 'text', className: 'input', ...b('orderBy') })
        }),
        T.jsx('button', { className: 'btn', onClick: I, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const OE = vt({ assetId: We(), tokenAddress: We() });
function ME({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: y }
    } = Ut({ resolver: jt(OE) }),
    _ = p(async (b) => {
      a(!0), s(null), d('');
      try {
        const S = { assetId: b.assetId, tokenAddress: b.tokenAddress };
        s(await r.getAsset(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetAsset',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'AssetId',
          error: y.assetId,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('assetId') })
        }),
        T.jsx(Ue, {
          label: 'TokenAddress',
          error: y.tokenAddress,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('tokenAddress') })
        }),
        T.jsx('button', { className: 'btn', onClick: _, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const RE = vt({
  chainIds: vt().nullable(),
  chainAssetTypes: vt().nullable(),
  baseAssetId: We(),
  quoteAssetId: We(),
  limit: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  offset: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  orderBy: We()
});
function BE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [y, _] = le.useState([]),
    {
      register: b,
      handleSubmit: S,
      formState: { errors: E }
    } = Ut({ resolver: jt(RE) }),
    I = S(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = {
          chainIds: y.length > 0 ? y : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0,
          baseAssetId: P.baseAssetId ? BigInt(P.baseAssetId) : void 0,
          quoteAssetId: P.quoteAssetId ? BigInt(P.quoteAssetId) : void 0,
          limit: P.limit ?? void 0,
          offset: P.offset ?? void 0,
          orderBy: P.orderBy || void 0
        };
        s(await r.getMarkets(J));
      } catch (J) {
        d(J.message ?? JSON.stringify(J));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetMarkets',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: E.chainIds,
          children: T.jsx(Kn, { selectedChainIds: y, onChange: _ })
        }),
        T.jsx(Ue, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: E.chainAssetTypes,
          children: T.jsx(Ni, { selectedAssetTypes: h, onChange: p })
        }),
        T.jsx(Ue, {
          label: 'BaseAssetId',
          error: E.baseAssetId,
          children: T.jsx('input', { type: 'number', className: 'input', ...b('baseAssetId') })
        }),
        T.jsx(Ue, {
          label: 'QuoteAssetId',
          error: E.quoteAssetId,
          children: T.jsx('input', { type: 'number', className: 'input', ...b('quoteAssetId') })
        }),
        T.jsx(Ue, {
          label: 'Limit',
          error: E.limit,
          children: T.jsx('input', { type: 'number', className: 'input', ...b('limit') })
        }),
        T.jsx(Ue, {
          label: 'Offset',
          error: E.offset,
          children: T.jsx('input', { type: 'number', className: 'input', ...b('offset') })
        }),
        T.jsx(Ue, {
          label: 'OrderBy',
          error: E.orderBy,
          children: T.jsx('input', { type: 'text', className: 'input', ...b('orderBy') })
        }),
        T.jsx('button', { className: 'btn', onClick: I, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const CE = vt({ marketId: We().required() });
function DE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: y }
    } = Ut({ resolver: jt(CE) }),
    _ = p(async (b) => {
      a(!0), s(null), d('');
      try {
        const S = BigInt(b.marketId);
        s(await r.getMarket(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetMarket',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: y.marketId,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx('button', { className: 'btn', onClick: _, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const UE = vt({ marketId: We(), chainIds: vt().nullable(), chainAssetTypes: vt().nullable() });
function jE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [y, _] = le.useState([]),
    {
      register: b,
      handleSubmit: S,
      formState: { errors: E }
    } = Ut({ resolver: jt(UE) }),
    I = S(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = {
          marketId: P.marketId ? BigInt(P.marketId) : void 0,
          chainIds: y.length > 0 ? y : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0
        };
        s(await r.getMarkets24HrTicker(J));
      } catch (J) {
        d(J.message ?? JSON.stringify(J));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetMarkets24HrTicker',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: E.marketId,
          children: T.jsx('input', { type: 'number', className: 'input', ...b('marketId') })
        }),
        T.jsx(Ue, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: E.chainIds,
          children: T.jsx(Kn, { selectedChainIds: y, onChange: _ })
        }),
        T.jsx(Ue, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: E.chainAssetTypes,
          children: T.jsx(Ni, { selectedAssetTypes: h, onChange: p })
        }),
        T.jsx('button', { className: 'btn', onClick: I, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const kE = vt({ marketId: We(), chainIds: vt().nullable(), chainAssetTypes: vt().nullable() });
function IE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [y, _] = le.useState([]),
    {
      register: b,
      handleSubmit: S,
      formState: { errors: E }
    } = Ut({ resolver: jt(kE) }),
    I = S(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = {
          marketId: P.marketId ? BigInt(P.marketId) : void 0,
          chainIds: y.length > 0 ? y : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0
        };
        s(await r.getMarkets24HrTickerExtended(J));
      } catch (J) {
        d(J.message ?? JSON.stringify(J));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetMarkets24HrTickerExtended',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: E.marketId,
          children: T.jsx('input', { type: 'number', className: 'input', ...b('marketId') })
        }),
        T.jsx(Ue, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: E.chainIds,
          children: T.jsx(Kn, { selectedChainIds: y, onChange: _ })
        }),
        T.jsx(Ue, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: E.chainAssetTypes,
          children: T.jsx(Ni, { selectedAssetTypes: h, onChange: p })
        }),
        T.jsx('button', { className: 'btn', onClick: I, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const LE = vt({ marketId: We() });
function qE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: y }
    } = Ut({ resolver: jt(LE) }),
    _ = p(async (b) => {
      a(!0), s(null), d('');
      try {
        const S = b.marketId ? BigInt(b.marketId) : void 0;
        s(await r.getMarketsSwapInfo(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetMarketsSwapInfo',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: y.marketId,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx('button', { className: 'btn', onClick: _, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const zE = vt({
  marketId: We().required(),
  tickSpace: ut()
    .oneOf(
      Object.keys(Va)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  limit: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  offset: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  orderBy: We()
});
function HE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: y,
      formState: { errors: _ }
    } = Ut({ resolver: jt(zE) }),
    b = y(async (S) => {
      a(!0), s(null), d('');
      try {
        const E = {
          marketId: BigInt(S.marketId),
          tickSpace: S.tickSpace,
          limit: S.limit ?? void 0,
          offset: S.offset ?? void 0,
          orderBy: S.orderBy || void 0
        };
        s(await r.getMarketKline(E));
      } catch (E) {
        d(E.message ?? JSON.stringify(E));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetMarketKline',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: _.marketId,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx(Ue, {
          label: 'TickSpace',
          error: _.tickSpace,
          required: !0,
          children: T.jsx(gr, {
            name: 'tickSpace',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Va)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'getMarketKline-tickSpace',
                            type: 'radio',
                            checked: S.value === Number(Va[E]),
                            onChange: (I) => {
                              I.target.checked && S.onChange(Number(Va[E]));
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
        T.jsx(Ue, {
          label: 'Limit',
          error: _.limit,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        T.jsx(Ue, {
          label: 'Offset',
          error: _.offset,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        T.jsx(Ue, {
          label: 'OrderBy',
          error: _.orderBy,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        T.jsx('button', { className: 'btn', onClick: b, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const FE = vt({
  index: ut()
    .oneOf(
      Object.keys(Fa)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  marketId: We().required(),
  limit: ut().required().min(1).max(100)
});
function VE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: y,
      formState: { errors: _ }
    } = Ut({ defaultValues: { limit: 10 }, resolver: jt(FE) }),
    b = y(async (S) => {
      a(!0), s(null), d('');
      try {
        const E = { index: S.index, marketId: BigInt(S.marketId), limit: S.limit };
        s(await r.getMarketDepth(E));
      } catch (E) {
        d(E.message ?? JSON.stringify(E));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetMarketDepth',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'Index',
          error: _.index,
          required: !0,
          children: T.jsx(gr, {
            name: 'index',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Fa)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'getMarketDepth-index',
                            type: 'radio',
                            checked: S.value === Number(Fa[E]),
                            onChange: (I) => {
                              I.target.checked && S.onChange(Number(Fa[E]));
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
        T.jsx(Ue, {
          label: 'MarketId',
          error: _.marketId,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx(Ue, {
          label: 'Limit',
          error: _.limit,
          required: !0,
          children: T.jsx('input', { type: 'number', min: 1, max: 100, className: 'input', ...h('limit') })
        }),
        T.jsx('button', { className: 'btn', onClick: b, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
var qs = { exports: {} },
  GE = qs.exports,
  vy;
function $E() {
  return (
    vy ||
      ((vy = 1),
      (function (r, i) {
        (function (a, u) {
          r.exports = u();
        })(GE, function () {
          var a = 1e3,
            u = 6e4,
            s = 36e5,
            f = 'millisecond',
            d = 'second',
            h = 'minute',
            p = 'hour',
            y = 'day',
            _ = 'week',
            b = 'month',
            S = 'quarter',
            E = 'year',
            I = 'date',
            P = 'Invalid Date',
            J = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            W = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            z = {
              name: 'en',
              weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
              months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
              ordinal: function (Z) {
                var k = ['th', 'st', 'nd', 'rd'],
                  R = Z % 100;
                return '[' + Z + (k[(R - 20) % 10] || k[R] || k[0]) + ']';
              }
            },
            ve = function (Z, k, R) {
              var $ = String(Z);
              return !$ || $.length >= k ? Z : '' + Array(k + 1 - $.length).join(R) + Z;
            },
            qe = {
              s: ve,
              z: function (Z) {
                var k = -Z.utcOffset(),
                  R = Math.abs(k),
                  $ = Math.floor(R / 60),
                  H = R % 60;
                return (k <= 0 ? '+' : '-') + ve($, 2, '0') + ':' + ve(H, 2, '0');
              },
              m: function Z(k, R) {
                if (k.date() < R.date()) return -Z(R, k);
                var $ = 12 * (R.year() - k.year()) + (R.month() - k.month()),
                  H = k.clone().add($, b),
                  oe = R - H < 0,
                  U = k.clone().add($ + (oe ? -1 : 1), b);
                return +(-($ + (R - H) / (oe ? H - U : U - H)) || 0);
              },
              a: function (Z) {
                return Z < 0 ? Math.ceil(Z) || 0 : Math.floor(Z);
              },
              p: function (Z) {
                return (
                  { M: b, y: E, w: _, d: y, D: I, h: p, m: h, s: d, ms: f, Q: S }[Z] ||
                  String(Z || '')
                    .toLowerCase()
                    .replace(/s$/, '')
                );
              },
              u: function (Z) {
                return Z === void 0;
              }
            },
            xe = 'en',
            Ee = {};
          Ee[xe] = z;
          var De = '$isDayjsObject',
            v = function (Z) {
              return Z instanceof Y || !(!Z || !Z[De]);
            },
            w = function Z(k, R, $) {
              var H;
              if (!k) return xe;
              if (typeof k == 'string') {
                var oe = k.toLowerCase();
                Ee[oe] && (H = oe), R && ((Ee[oe] = R), (H = oe));
                var U = k.split('-');
                if (!H && U.length > 1) return Z(U[0]);
              } else {
                var ne = k.name;
                (Ee[ne] = k), (H = ne);
              }
              return !$ && H && (xe = H), H || (!$ && xe);
            },
            N = function (Z, k) {
              if (v(Z)) return Z.clone();
              var R = typeof k == 'object' ? k : {};
              return (R.date = Z), (R.args = arguments), new Y(R);
            },
            G = qe;
          (G.l = w),
            (G.i = v),
            (G.w = function (Z, k) {
              return N(Z, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
            });
          var Y = (function () {
              function Z(R) {
                (this.$L = w(R.locale, null, !0)), this.parse(R), (this.$x = this.$x || R.x || {}), (this[De] = !0);
              }
              var k = Z.prototype;
              return (
                (k.parse = function (R) {
                  (this.$d = (function ($) {
                    var H = $.date,
                      oe = $.utc;
                    if (H === null) return new Date(NaN);
                    if (G.u(H)) return new Date();
                    if (H instanceof Date) return new Date(H);
                    if (typeof H == 'string' && !/Z$/i.test(H)) {
                      var U = H.match(J);
                      if (U) {
                        var ne = U[2] - 1 || 0,
                          we = (U[7] || '0').substring(0, 3);
                        return oe
                          ? new Date(Date.UTC(U[1], ne, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, we))
                          : new Date(U[1], ne, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, we);
                      }
                    }
                    return new Date(H);
                  })(R)),
                    this.init();
                }),
                (k.init = function () {
                  var R = this.$d;
                  (this.$y = R.getFullYear()),
                    (this.$M = R.getMonth()),
                    (this.$D = R.getDate()),
                    (this.$W = R.getDay()),
                    (this.$H = R.getHours()),
                    (this.$m = R.getMinutes()),
                    (this.$s = R.getSeconds()),
                    (this.$ms = R.getMilliseconds());
                }),
                (k.$utils = function () {
                  return G;
                }),
                (k.isValid = function () {
                  return this.$d.toString() !== P;
                }),
                (k.isSame = function (R, $) {
                  var H = N(R);
                  return this.startOf($) <= H && H <= this.endOf($);
                }),
                (k.isAfter = function (R, $) {
                  return N(R) < this.startOf($);
                }),
                (k.isBefore = function (R, $) {
                  return this.endOf($) < N(R);
                }),
                (k.$g = function (R, $, H) {
                  return G.u(R) ? this[$] : this.set(H, R);
                }),
                (k.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (k.valueOf = function () {
                  return this.$d.getTime();
                }),
                (k.startOf = function (R, $) {
                  var H = this,
                    oe = !!G.u($) || $,
                    U = G.p(R),
                    ne = function (ke, B) {
                      var D = G.w(H.$u ? Date.UTC(H.$y, B, ke) : new Date(H.$y, B, ke), H);
                      return oe ? D : D.endOf(y);
                    },
                    we = function (ke, B) {
                      return G.w(
                        H.toDate()[ke].apply(H.toDate('s'), (oe ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(B)),
                        H
                      );
                    },
                    ye = this.$W,
                    O = this.$M,
                    je = this.$D,
                    Oe = 'set' + (this.$u ? 'UTC' : '');
                  switch (U) {
                    case E:
                      return oe ? ne(1, 0) : ne(31, 11);
                    case b:
                      return oe ? ne(1, O) : ne(0, O + 1);
                    case _:
                      var Pe = this.$locale().weekStart || 0,
                        Me = (ye < Pe ? ye + 7 : ye) - Pe;
                      return ne(oe ? je - Me : je + (6 - Me), O);
                    case y:
                    case I:
                      return we(Oe + 'Hours', 0);
                    case p:
                      return we(Oe + 'Minutes', 1);
                    case h:
                      return we(Oe + 'Seconds', 2);
                    case d:
                      return we(Oe + 'Milliseconds', 3);
                    default:
                      return this.clone();
                  }
                }),
                (k.endOf = function (R) {
                  return this.startOf(R, !1);
                }),
                (k.$set = function (R, $) {
                  var H,
                    oe = G.p(R),
                    U = 'set' + (this.$u ? 'UTC' : ''),
                    ne = ((H = {}),
                    (H[y] = U + 'Date'),
                    (H[I] = U + 'Date'),
                    (H[b] = U + 'Month'),
                    (H[E] = U + 'FullYear'),
                    (H[p] = U + 'Hours'),
                    (H[h] = U + 'Minutes'),
                    (H[d] = U + 'Seconds'),
                    (H[f] = U + 'Milliseconds'),
                    H)[oe],
                    we = oe === y ? this.$D + ($ - this.$W) : $;
                  if (oe === b || oe === E) {
                    var ye = this.clone().set(I, 1);
                    ye.$d[ne](we), ye.init(), (this.$d = ye.set(I, Math.min(this.$D, ye.daysInMonth())).$d);
                  } else ne && this.$d[ne](we);
                  return this.init(), this;
                }),
                (k.set = function (R, $) {
                  return this.clone().$set(R, $);
                }),
                (k.get = function (R) {
                  return this[G.p(R)]();
                }),
                (k.add = function (R, $) {
                  var H,
                    oe = this;
                  R = Number(R);
                  var U = G.p($),
                    ne = function (O) {
                      var je = N(oe);
                      return G.w(je.date(je.date() + Math.round(O * R)), oe);
                    };
                  if (U === b) return this.set(b, this.$M + R);
                  if (U === E) return this.set(E, this.$y + R);
                  if (U === y) return ne(1);
                  if (U === _) return ne(7);
                  var we = ((H = {}), (H[h] = u), (H[p] = s), (H[d] = a), H)[U] || 1,
                    ye = this.$d.getTime() + R * we;
                  return G.w(ye, this);
                }),
                (k.subtract = function (R, $) {
                  return this.add(-1 * R, $);
                }),
                (k.format = function (R) {
                  var $ = this,
                    H = this.$locale();
                  if (!this.isValid()) return H.invalidDate || P;
                  var oe = R || 'YYYY-MM-DDTHH:mm:ssZ',
                    U = G.z(this),
                    ne = this.$H,
                    we = this.$m,
                    ye = this.$M,
                    O = H.weekdays,
                    je = H.months,
                    Oe = H.meridiem,
                    Pe = function (B, D, Q, se) {
                      return (B && (B[D] || B($, oe))) || Q[D].slice(0, se);
                    },
                    Me = function (B) {
                      return G.s(ne % 12 || 12, B, '0');
                    },
                    ke =
                      Oe ||
                      function (B, D, Q) {
                        var se = B < 12 ? 'AM' : 'PM';
                        return Q ? se.toLowerCase() : se;
                      };
                  return oe.replace(W, function (B, D) {
                    return (
                      D ||
                      (function (Q) {
                        switch (Q) {
                          case 'YY':
                            return String($.$y).slice(-2);
                          case 'YYYY':
                            return G.s($.$y, 4, '0');
                          case 'M':
                            return ye + 1;
                          case 'MM':
                            return G.s(ye + 1, 2, '0');
                          case 'MMM':
                            return Pe(H.monthsShort, ye, je, 3);
                          case 'MMMM':
                            return Pe(je, ye);
                          case 'D':
                            return $.$D;
                          case 'DD':
                            return G.s($.$D, 2, '0');
                          case 'd':
                            return String($.$W);
                          case 'dd':
                            return Pe(H.weekdaysMin, $.$W, O, 2);
                          case 'ddd':
                            return Pe(H.weekdaysShort, $.$W, O, 3);
                          case 'dddd':
                            return O[$.$W];
                          case 'H':
                            return String(ne);
                          case 'HH':
                            return G.s(ne, 2, '0');
                          case 'h':
                            return Me(1);
                          case 'hh':
                            return Me(2);
                          case 'a':
                            return ke(ne, we, !0);
                          case 'A':
                            return ke(ne, we, !1);
                          case 'm':
                            return String(we);
                          case 'mm':
                            return G.s(we, 2, '0');
                          case 's':
                            return String($.$s);
                          case 'ss':
                            return G.s($.$s, 2, '0');
                          case 'SSS':
                            return G.s($.$ms, 3, '0');
                          case 'Z':
                            return U;
                        }
                        return null;
                      })(B) ||
                      U.replace(':', '')
                    );
                  });
                }),
                (k.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (k.diff = function (R, $, H) {
                  var oe,
                    U = this,
                    ne = G.p($),
                    we = N(R),
                    ye = (we.utcOffset() - this.utcOffset()) * u,
                    O = this - we,
                    je = function () {
                      return G.m(U, we);
                    };
                  switch (ne) {
                    case E:
                      oe = je() / 12;
                      break;
                    case b:
                      oe = je();
                      break;
                    case S:
                      oe = je() / 3;
                      break;
                    case _:
                      oe = (O - ye) / 6048e5;
                      break;
                    case y:
                      oe = (O - ye) / 864e5;
                      break;
                    case p:
                      oe = O / s;
                      break;
                    case h:
                      oe = O / u;
                      break;
                    case d:
                      oe = O / a;
                      break;
                    default:
                      oe = O;
                  }
                  return H ? oe : G.a(oe);
                }),
                (k.daysInMonth = function () {
                  return this.endOf(b).$D;
                }),
                (k.$locale = function () {
                  return Ee[this.$L];
                }),
                (k.locale = function (R, $) {
                  if (!R) return this.$L;
                  var H = this.clone(),
                    oe = w(R, $, !0);
                  return oe && (H.$L = oe), H;
                }),
                (k.clone = function () {
                  return G.w(this.$d, this);
                }),
                (k.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (k.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (k.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (k.toString = function () {
                  return this.$d.toUTCString();
                }),
                Z
              );
            })(),
            X = Y.prototype;
          return (
            (N.prototype = X),
            [
              ['$ms', f],
              ['$s', d],
              ['$m', h],
              ['$H', p],
              ['$W', y],
              ['$M', b],
              ['$y', E],
              ['$D', I]
            ].forEach(function (Z) {
              X[Z[1]] = function (k) {
                return this.$g(k, Z[0], Z[1]);
              };
            }),
            (N.extend = function (Z, k) {
              return Z.$i || (Z(k, Y, N), (Z.$i = !0)), N;
            }),
            (N.locale = w),
            (N.isDayjs = v),
            (N.unix = function (Z) {
              return N(1e3 * Z);
            }),
            (N.en = Ee[xe]),
            (N.Ls = Ee),
            (N.p = {}),
            N
          );
        });
      })(qs)),
    qs.exports
  );
}
var YE = $E();
const Ws = tu(YE),
  XE = vt({
    marketId: We().required(),
    tradedAtStart: ut()
      .nullable()
      .transform((r, i) => (i === '' ? null : r)),
    tradedAtEnd: ut()
      .nullable()
      .transform((r, i) => (i === '' ? null : r)),
    limit: ut()
      .nullable()
      .transform((r, i) => (i === '' ? null : r)),
    offset: ut()
      .nullable()
      .transform((r, i) => (i === '' ? null : r)),
    orderBy: We()
  });
function KE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: y,
      formState: { errors: _ }
    } = Ut({ resolver: jt(XE) }),
    b = y(async (S) => {
      a(!0), s(null), d('');
      try {
        const E = {
          marketId: BigInt(S.marketId),
          tradedAtStart: S.tradedAtStart ?? void 0,
          tradedAtEnd: S.tradedAtEnd ?? void 0,
          limit: S.limit ?? void 0,
          offset: S.offset ?? void 0,
          orderBy: S.orderBy || void 0
        };
        s(await r.getMarketTrade(E));
      } catch (E) {
        d(E.message ?? JSON.stringify(E));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetMarketTrade',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: _.marketId,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx(Ue, {
          label: 'TradedAtStart',
          error: _.tradedAtStart,
          children: T.jsx(gr, {
            control: p,
            name: 'tradedAtStart',
            render: ({ field: S }) =>
              T.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? Ws(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (E) => {
                  S.onChange(E.target.value ? new Date(E.target.value).getTime() : void 0);
                }
              })
          })
        }),
        T.jsx(Ue, {
          label: 'TradedAtEnd',
          error: _.tradedAtEnd,
          children: T.jsx(gr, {
            control: p,
            name: 'tradedAtEnd',
            render: ({ field: S }) =>
              T.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? Ws(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (E) => {
                  S.onChange(E.target.value ? new Date(E.target.value).getTime() : void 0);
                }
              })
          })
        }),
        T.jsx(Ue, {
          label: 'Limit',
          error: _.limit,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        T.jsx(Ue, {
          label: 'Offset',
          error: _.offset,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        T.jsx(Ue, {
          label: 'OrderBy',
          error: _.orderBy,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        T.jsx('button', { className: 'btn', onClick: b, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const ZE = vt({
  marketId: We().required(),
  orderSide: ut()
    .oneOf(
      Object.keys(_t)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  price: ut().required(),
  volume: ut().required(),
  baseAssetDecimals: ut().required(),
  quoteAssetDecimals: ut().required()
});
function QE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: y,
      formState: { errors: _ }
    } = Ut({ resolver: jt(ZE) }),
    b = y(async (S) => {
      a(!0), s(null), d('');
      try {
        const E = {
            marketId: BigInt(S.marketId),
            orderCategory: Gn.LimitOrder,
            limitOrderDetails: { orderSide: S.orderSide, price: S.price, volume: S.volume }
          },
          I = { baseAssetDecimals: S.baseAssetDecimals, quoteAssetDecimals: S.quoteAssetDecimals };
        await r.submitSpotOrder(E, I), s(!0);
      } catch (E) {
        d(E.message ?? JSON.stringify(E)), s(!1);
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'SubmitSpotOrderLimit',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: _.marketId,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx(Ue, {
          label: 'OrderSide',
          error: _.orderSide,
          required: !0,
          children: T.jsx(gr, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_t)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'SubmitSpotOrderLimit-orderSide',
                            type: 'radio',
                            value: Number(_t[E]),
                            checked: S.value === Number(_t[E]),
                            onChange: (I) => {
                              I.target.checked && S.onChange(Number(_t[E]));
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
        T.jsx(Ue, {
          label: 'Price',
          error: _.price,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('price') })
        }),
        T.jsx(Ue, {
          label: 'Volume',
          error: _.volume,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('volume') })
        }),
        T.jsx(Ue, {
          label: 'BaseAssetDecimals',
          error: _.baseAssetDecimals,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('baseAssetDecimals') })
        }),
        T.jsx(Ue, {
          label: 'QuoteAssetDecimals',
          error: _.quoteAssetDecimals,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('quoteAssetDecimals') })
        }),
        T.jsx('button', { className: 'btn', onClick: b, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const PE = vt({
  marketId: We().required(),
  orderSide: ut()
    .oneOf(
      Object.keys(_t)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  exactTokensType: ut()
    .oneOf(
      Object.keys(_i)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  exactTokens: ut().required(),
  minOut: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  maxIn: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  baseAssetDecimals: ut().required(),
  quoteAssetDecimals: ut().required()
});
function JE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: y,
      formState: { errors: _ }
    } = Ut({ resolver: jt(PE) }),
    b = y(async (S) => {
      a(!0), s(null), d('');
      try {
        const E = {
            marketId: BigInt(S.marketId),
            orderCategory: Gn.SwapOrder,
            swapV2OrderDetails: {
              orderSide: S.orderSide,
              exactTokensType: S.exactTokensType,
              exactTokens: S.exactTokens,
              minOut: S.minOut ?? void 0,
              maxIn: S.maxIn ?? void 0
            }
          },
          I = { baseAssetDecimals: S.baseAssetDecimals, quoteAssetDecimals: S.quoteAssetDecimals };
        await r.submitSpotOrder(E, I), s(!0);
      } catch (E) {
        d(E.message ?? JSON.stringify(E)), s(!1);
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'SubmitSpotOrderSwapV2',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: _.marketId,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx(Ue, {
          label: 'OrderSide',
          error: _.orderSide,
          required: !0,
          children: T.jsx(gr, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_t)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'SubmitSpotOrderSwapV2-orderSide',
                            type: 'radio',
                            value: Number(_t[E]),
                            checked: S.value === Number(_t[E]),
                            onChange: (I) => {
                              I.target.checked && S.onChange(Number(_t[E]));
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
        T.jsx(Ue, {
          label: 'ExactTokensType',
          error: _.exactTokensType,
          required: !0,
          children: T.jsx(gr, {
            name: 'exactTokensType',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_i)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'SubmitSpotOrderSwapV2-exactTokensType',
                            type: 'radio',
                            value: Number(_i[E]),
                            checked: S.value === Number(_i[E]),
                            onChange: (I) => {
                              I.target.checked && S.onChange(Number(_i[E]));
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
        T.jsx(Ue, {
          label: 'ExactTokens',
          error: _.exactTokens,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('exactTokens') })
        }),
        T.jsx(Ue, {
          label: 'MinOut',
          error: _.minOut,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('minOut') })
        }),
        T.jsx(Ue, {
          label: 'MaxIn',
          error: _.maxIn,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('maxIn') })
        }),
        T.jsx(Ue, {
          label: 'BaseAssetDecimals',
          error: _.baseAssetDecimals,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('baseAssetDecimals') })
        }),
        T.jsx(Ue, {
          label: 'QuoteAssetDecimals',
          error: _.quoteAssetDecimals,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('quoteAssetDecimals') })
        }),
        T.jsx('button', { className: 'btn', onClick: b, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const WE = vt({
  marketId: We(),
  orderId: We(),
  orderSide: ut().oneOf(
    Object.keys(_t)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  isCancelAll: Rg()
});
function eA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: y,
      formState: { errors: _ }
    } = Ut({ resolver: jt(WE) }),
    b = y(async (S) => {
      var P, J;
      a(!0), s(null), d('');
      const E = (P = S.marketId) == null ? void 0 : P.trim(),
        I = (J = S.orderId) == null ? void 0 : J.trim();
      try {
        const W = {
          marketId: E ? BigInt(E) : void 0,
          orderId: I || void 0,
          orderSide: S.orderSide ?? void 0,
          isCancelAll: S.isCancelAll ?? void 0
        };
        await r.cancelSpotOrder(W), s(!0);
      } catch (W) {
        d(W.message ?? JSON.stringify(W)), s(!1);
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'CancelSpotOrder',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'MarketId',
          error: _.marketId,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx(Ue, {
          label: 'OrderId',
          error: _.orderId,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        T.jsx(Ue, {
          label: 'OrderSide',
          error: _.orderSide,
          children: T.jsx(gr, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_t)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'CancelSpotOrder-orderSide',
                            type: 'radio',
                            value: Number(_t[E]),
                            checked: S.value === Number(_t[E]),
                            onChange: (I) => {
                              I.target.checked && S.onChange(Number(_t[E]));
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
        T.jsx(Ue, {
          label: 'isCancelAll',
          error: _.isCancelAll,
          children: T.jsxs('label', {
            className: 'flex items-center gap-1',
            children: [
              T.jsx('span', { children: 'IsCancelAll' }),
              T.jsx('input', { type: 'checkbox', className: 'input', ...h('isCancelAll') })
            ]
          })
        }),
        T.jsx('button', { className: 'btn', onClick: b, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const tA = vt({
  hin: We().required(),
  status: Ig(
    ut()
      .oneOf(
        Object.keys(Ei)
          .filter((r) => !isNaN(Number(r)))
          .map(Number)
      )
      .required()
  ),
  marketId: We(),
  orderIds: We(),
  orderCategory: ut().oneOf(
    Object.keys(Gn)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  orderSide: ut().oneOf(
    Object.keys(_t)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  createdAtStart: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  createdAtEnd: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  limit: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  offset: ut()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  orderBy: We()
});
function rA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: y,
      formState: { errors: _ }
    } = Ut({ resolver: jt(tA) }),
    b = y(async (S) => {
      var E;
      a(!0), s(null), d('');
      try {
        const I = {
          hin: BigInt(S.hin),
          status: (E = S.status) != null && E.length ? S.status : void 0,
          marketId: S.marketId ? BigInt(S.marketId) : void 0,
          orderIds: S.orderIds ? S.orderIds.split(',').map((P) => P.trim()) : void 0,
          orderCategory: S.orderCategory ?? void 0,
          orderSide: S.orderSide ?? void 0,
          createdAtStart: S.createdAtStart ?? void 0,
          createdAtEnd: S.createdAtEnd ?? void 0,
          limit: S.limit ?? void 0,
          offset: S.offset ?? void 0,
          orderBy: S.orderBy || void 0
        };
        s(await r.getOrders(I));
      } catch (I) {
        d(I.message ?? JSON.stringify(I));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetOrders',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'HIN(Hibit chain identity number)',
          error: _.hin,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('hin') })
        }),
        T.jsx(Ue, {
          label: 'Status',
          error: _.status,
          children: T.jsx(gr, {
            name: 'status',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Ei)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) => {
                    var I;
                    return T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'GetOrders-status',
                            type: 'checkbox',
                            value: Number(Ei[E]),
                            checked: ((I = S.value) == null ? void 0 : I.includes(Number(Ei[E]))) ?? !1,
                            onChange: (P) => {
                              P.target.checked
                                ? S.onChange([...(S.value ?? []), Number(Ei[E])])
                                : S.onChange((S.value ?? []).filter((J) => J !== Number(Ei[E])));
                            }
                          })
                        ]
                      },
                      E
                    );
                  })
              })
          })
        }),
        T.jsx(Ue, {
          label: 'MarketId',
          error: _.marketId,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        T.jsx(Ue, {
          label: 'OrderIds',
          error: _.orderIds,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('orderIds') })
        }),
        T.jsx(Ue, {
          label: 'OrderCategory',
          error: _.orderCategory,
          children: T.jsx(gr, {
            name: 'orderCategory',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Gn)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'GetOrders-orderCategory',
                            type: 'radio',
                            value: Number(Gn[E]),
                            checked: S.value === Number(Gn[E]),
                            onChange: (I) => {
                              I.target.checked && S.onChange(Number(Gn[E]));
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
        T.jsx(Ue, {
          label: 'OrderSide',
          error: _.orderSide,
          children: T.jsx(gr, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_t)
                  .filter((E) => isNaN(Number(E)))
                  .map((E) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: E }),
                          T.jsx('input', {
                            name: 'GetOrders-orderSide',
                            type: 'radio',
                            value: Number(_t[E]),
                            checked: S.value === Number(_t[E]),
                            onChange: (I) => {
                              I.target.checked && S.onChange(Number(_t[E]));
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
        T.jsx(Ue, {
          label: 'CreatedAtStart',
          error: _.createdAtStart,
          children: T.jsx(gr, {
            control: p,
            name: 'createdAtStart',
            render: ({ field: S }) =>
              T.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? Ws(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (E) => {
                  S.onChange(E.target.value ? new Date(E.target.value).getTime() : void 0);
                }
              })
          })
        }),
        T.jsx(Ue, {
          label: 'CreatedAtEnd',
          error: _.createdAtEnd,
          children: T.jsx(gr, {
            control: p,
            name: 'createdAtEnd',
            render: ({ field: S }) =>
              T.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? Ws(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (E) => {
                  S.onChange(E.target.value ? new Date(E.target.value).getTime() : void 0);
                }
              })
          })
        }),
        T.jsx(Ue, {
          label: 'Limit',
          error: _.limit,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        T.jsx(Ue, {
          label: 'Offset',
          error: _.offset,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        T.jsx(Ue, {
          label: 'OrderBy',
          error: _.orderBy,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        T.jsx('button', { className: 'btn', onClick: b, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const nA = vt({ orderId: We(), clientOrderId: We(), txHash: We() }).test(
  'exactly-one-identifier',
  'Exactly one of Order ID, Client Order ID, or Tx Hash must be provided',
  function (r) {
    return [!!r.orderId, !!r.clientOrderId, !!r.txHash].filter(Boolean).length === 1;
  }
);
function iA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: y }
    } = Ut({ resolver: jt(nA) }),
    _ = p(async (b) => {
      a(!0), s(null), d('');
      try {
        s(await r.getOrder(b));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetOrder',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'Order ID',
          error: y.orderId,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        T.jsx(Ue, {
          label: 'Client Order ID',
          error: y.clientOrderId,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('clientOrderId') })
        }),
        T.jsx(Ue, {
          label: 'Tx Hash',
          error: y.txHash,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('txHash') })
        }),
        T.jsx('button', { className: 'btn', onClick: _, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const aA = vt({ orderId: We().required() });
function lA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: y }
    } = Ut({ resolver: jt(aA) }),
    _ = p(async (b) => {
      a(!0), s(null), d('');
      try {
        const S = b.orderId;
        s(await r.getOrderTrades(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetOrderTrades',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'OrderId',
          error: y.orderId,
          required: !0,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        T.jsx('button', { className: 'btn', onClick: _, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const uA = vt({ hin: We().required(), assetId: We() });
function sA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: y }
    } = Ut({ resolver: jt(uA) }),
    _ = p(async (b) => {
      a(!0), s(null), d('');
      try {
        const S = { hin: BigInt(b.hin), assetId: b.assetId ? BigInt(b.assetId) : void 0 },
          E = await r.getWalletBalances(S);
        s(E);
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetWalletBalances',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'HIN(Hibit chain identity number)',
          error: y.hin,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('hin'), pattern: '[0-9]*' })
        }),
        T.jsx(Ue, {
          label: 'AssetId',
          error: y.assetId,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('assetId'), pattern: '[0-9]*' })
        }),
        T.jsx('button', { className: 'btn', onClick: _, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const cA = vt({ hin: We().required() });
function oA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: y }
    } = Ut({ resolver: jt(cA) }),
    _ = p(async (b) => {
      a(!0), s(null), d('');
      try {
        const S = BigInt(b.hin);
        s(await r.getNonce(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetNonce',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'HIN(Hibit chain identity number)',
          error: y.hin,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ...h('hin') })
        }),
        T.jsx('button', { className: 'btn', onClick: _, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const fA = vt({
  network: We().oneOf(Object.values(cn).map(String)).required(),
  hin: We().required(),
  proxyKey: We().required()
});
function dA({ client: r, defaultOptions: i }) {
  var p;
  const {
      register: a,
      control: u,
      watch: s,
      formState: { errors: f, isValid: d }
    } = Ut({
      defaultValues: {
        network: i.network,
        hin: ((p = i.hin) == null ? void 0 : p.toString()) ?? '',
        proxyKey: i.proxyKey
      },
      resolver: jt(fA),
      mode: 'onChange'
    }),
    h = s();
  return (
    le.useEffect(() => {
      d && h.hin && h.proxyKey && r.setOptions({ network: h.network, hin: BigInt(h.hin), proxyKey: h.proxyKey });
    }, [h, d, r]),
    T.jsx(Ct, {
      title: 'Hibit Client Options Config',
      form: T.jsxs('div', {
        className: 'flex flex-col gap-2',
        children: [
          T.jsx(Ue, {
            label: 'Network',
            error: f.network,
            required: !0,
            children: T.jsx(gr, {
              name: 'network',
              control: u,
              render: ({ field: y }) =>
                T.jsx('div', {
                  className: 'flex items-center gap-3 flex-wrap',
                  children: Object.values(cn).map((_) =>
                    T.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          T.jsx('span', { children: _ }),
                          T.jsx('input', {
                            name: 'network',
                            type: 'radio',
                            checked: y.value === _,
                            onChange: (b) => {
                              b.target.checked && y.onChange(_);
                            }
                          })
                        ]
                      },
                      _
                    )
                  )
                })
            })
          }),
          T.jsx(Ue, {
            label: 'HIN',
            error: f.hin,
            required: !0,
            children: T.jsx('input', { type: 'number', className: 'input', ...a('hin') })
          }),
          T.jsx(Ue, {
            label: 'Proxy Key',
            error: f.proxyKey,
            required: !0,
            children: T.jsx('input', { type: 'text', className: 'input', ...a('proxyKey') })
          }),
          T.jsx('div', {
            className: 'flex items-center gap-2',
            children: T.jsx('a', {
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
const by = {
    network: cn.Testnet,
    hin: BigInt(1e4),
    proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
  },
  hA = () => {
    const [r, i] = le.useState(null);
    return (
      le.useEffect(() => {
        const a = new Nw();
        a.setOptions(by), i(a);
      }, []),
      r
        ? T.jsxs('div', {
            className: 'flex flex-col gap-6',
            children: [
              T.jsx(dA, { client: r, defaultOptions: by }),
              T.jsx(Tw, { client: r }),
              T.jsx(Ow, { client: r }),
              T.jsx(TE, { client: r }),
              T.jsx(ME, { client: r }),
              T.jsx(BE, { client: r }),
              T.jsx(DE, { client: r }),
              T.jsx(jE, { client: r }),
              T.jsx(IE, { client: r }),
              T.jsx(qE, { client: r }),
              T.jsx(VE, { client: r }),
              T.jsx(HE, { client: r }),
              T.jsx(KE, { client: r }),
              T.jsx(QE, { client: r }),
              T.jsx(JE, { client: r }),
              T.jsx(eA, { client: r }),
              T.jsx(rA, { client: r }),
              T.jsx(iA, { client: r }),
              T.jsx(lA, { client: r }),
              T.jsx(sA, { client: r }),
              T.jsx(oA, { client: r })
            ]
          })
        : null
    );
  },
  mu = ug(vd({ baseUrl: 'https://testnetbrokerapi.hibit.app' })),
  mA = (r) => ((r == null ? void 0 : r.client) ?? mu).get({ url: '/v1/payment-address', ...r }),
  pA = (r) => ((r == null ? void 0 : r.client) ?? mu).get({ url: '/v1/quote', ...r }),
  yA = (r) => ((r == null ? void 0 : r.client) ?? mu).get({ url: '/v1/order', ...r }),
  gA = (r) =>
    ((r == null ? void 0 : r.client) ?? mu).post({
      url: '/v1/swap',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    });
class vA {
  constructor() {
    Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  getOptions() {
    return this.options;
  }
  setOptions(i) {
    (this.options = i), mu.setConfig({ baseUrl: i.network === cn.Testnet ? xw : Sw });
  }
  async getPaymentAddress(i) {
    const a = 'getPaymentAddress',
      u = await mA(CS(i));
    return this.ensureSuccess(a, u.data), u.data.data.address;
  }
  async quote(i) {
    const a = 'quote',
      u = await pA(DS(i));
    return this.ensureSuccess(a, u.data), US(u.data.data);
  }
  async swap(i) {
    const a = 'swap',
      u = await gA(jS(i));
    return this.ensureSuccess(a, u.data), u.data.data.agentOrderId;
  }
  async getAgentOrder(i) {
    const a = 'getOrder',
      u = await yA(kS(i));
    return this.ensureSuccess(a, u.data), IS(u.data.data);
  }
  ensureSuccess(i, a) {
    (a == null ? void 0 : a.code) !== 200 &&
      _r.throwBadRequestError(i, a == null ? void 0 : a.code, a == null ? void 0 : a.message);
  }
}
const bA = vt({ network: We().oneOf(Object.values(cn).map(String)).required() });
function SA({ client: r, defaultOptions: i }) {
  const {
      control: a,
      watch: u,
      formState: { errors: s, isValid: f }
    } = Ut({ defaultValues: { network: i.network }, resolver: jt(bA), mode: 'onChange' }),
    d = u();
  return (
    le.useEffect(() => {
      f && r.setOptions({ network: d.network });
    }, [d, f, r]),
    T.jsx(Ct, {
      title: 'Broker Client Options Config',
      form: T.jsx('div', {
        className: 'flex flex-col gap-2',
        children: T.jsx(Ue, {
          label: 'Network',
          error: s.network,
          required: !0,
          children: T.jsx(gr, {
            name: 'network',
            control: a,
            render: ({ field: h }) =>
              T.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.values(cn).map((p) =>
                  T.jsxs(
                    'label',
                    {
                      className: 'flex items-center gap-1',
                      children: [
                        T.jsx('span', { children: p }),
                        T.jsx('input', {
                          name: 'network',
                          type: 'radio',
                          checked: h.value === p,
                          onChange: (y) => {
                            y.target.checked && h.onChange(p);
                          }
                        })
                      ]
                    },
                    p
                  )
                )
              })
          })
        })
      }),
      error: ''
    })
  );
}
const xA = vt({ hin: We().required(), chainId: We().required() });
function wA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      setValue: h,
      trigger: p,
      watch: y,
      register: _,
      handleSubmit: b,
      formState: { errors: S }
    } = Ut({ resolver: jt(xA) }),
    E = y('chainId'),
    I = b(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = { hin: BigInt(P.hin), chainId: ar.fromString(P.chainId) };
        s(await r.getPaymentAddress(J));
      } catch (J) {
        d(J.message ?? JSON.stringify(J));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetPaymentAddress',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'HIN',
          error: S.hin,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ..._('hin') })
        }),
        T.jsx(Ue, {
          label: 'ChainId',
          error: S.chainId,
          required: !0,
          children: T.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: E ? [ar.fromString(E)] : [],
            onChange: (P) => {
              var J;
              h('chainId', ((J = P[0]) == null ? void 0 : J.toString()) ?? ''), p('chainId');
            }
          })
        }),
        T.jsx('button', { className: 'btn', onClick: I, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const EA = vt({
  sourceChainId: We().required(),
  sourceAssetType: ut().required(),
  sourceAsset: We(),
  sourceVolume: We().required(),
  targetChainId: We(),
  targetAssetType: ut().required(),
  targetAsset: We()
});
function AA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      setValue: h,
      trigger: p,
      watch: y,
      register: _,
      handleSubmit: b,
      formState: { errors: S }
    } = Ut({ resolver: jt(EA) }),
    E = y('sourceChainId'),
    I = y('sourceAssetType'),
    P = y('targetChainId'),
    J = y('targetAssetType'),
    W = b(async (z) => {
      a(!0), s(null), d('');
      try {
        const ve = {
          sourceChainId: ar.fromString(z.sourceChainId),
          sourceAssetType: z.sourceAssetType,
          sourceAsset: z.sourceAsset,
          sourceVolume: BigInt(z.sourceVolume),
          targetChainId: z.targetChainId ? ar.fromString(z.targetChainId) : void 0,
          targetAssetType: z.targetAssetType,
          targetAsset: z.targetAsset
        };
        s(await r.quote(ve));
      } catch (ve) {
        d(ve.message ?? JSON.stringify(ve));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'Quote',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'Source ChainId',
          error: S.sourceChainId,
          required: !0,
          children: T.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: E ? [ar.fromString(E)] : [],
            onChange: (z) => {
              var ve;
              h('sourceChainId', ((ve = z[0]) == null ? void 0 : ve.toString()) ?? ''), p('sourceChainId');
            }
          })
        }),
        T.jsx(Ue, {
          label: 'Source Asset Type',
          error: S.sourceAssetType,
          required: !0,
          children: T.jsx(Ni, {
            singleSelect: !0,
            selectedAssetTypes: typeof I == 'number' ? [I] : [],
            onChange: (z) => {
              h('sourceAssetType', z[0] ?? null), p('sourceAssetType');
            }
          })
        }),
        T.jsx(Ue, {
          label: 'Source Asset',
          error: S.sourceAsset,
          children: T.jsx('input', { type: 'text', className: 'input', ..._('sourceAsset') })
        }),
        T.jsx(Ue, {
          label: 'Source Volume',
          error: S.sourceVolume,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ..._('sourceVolume') })
        }),
        T.jsx(Ue, {
          label: 'Target ChainId',
          error: S.targetChainId,
          children: T.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: P ? [ar.fromString(P)] : [],
            onChange: (z) => {
              var ve;
              h('targetChainId', ((ve = z[0]) == null ? void 0 : ve.toString()) ?? ''), p('targetChainId');
            }
          })
        }),
        T.jsx(Ue, {
          label: 'Target Asset Type',
          error: S.targetAssetType,
          required: !0,
          children: T.jsx(Ni, {
            singleSelect: !0,
            selectedAssetTypes: typeof J == 'number' ? [J] : [],
            onChange: (z) => {
              h('targetAssetType', z[0] ?? null), p('targetAssetType');
            }
          })
        }),
        T.jsx(Ue, {
          label: 'Target Asset',
          error: S.targetAsset,
          children: T.jsx('input', { type: 'text', className: 'input', ..._('targetAsset') })
        }),
        T.jsx('button', { className: 'btn', onClick: W, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const _A = 8,
  NA = async (r) => {
    try {
      await window.kasware.requestAccounts(),
        (await window.kasware.getNetwork()) !== r && (await window.kasware.switchNetwork(r));
      const a = await window.kasware.getAccounts(),
        u = await window.kasware.getPublicKey();
      return { address: a[0].toLowerCase(), publicKey: u };
    } catch (i) {
      throw new Error('KasWare connect: ' + (i.message ?? JSON.stringify(i)));
    }
  },
  TA = async (r, i) => {
    try {
      if (!r || i <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const u = new en(i).shiftedBy(_A).toNumber();
      if ((await window.kasware.getBalance()).total < u) throw new Error('Not enough KAS balance');
      const f = await window.kasware.sendKaspa(r, u),
        d = JSON.parse(f);
      return console.debug(`Transfer KAS: ${d}`), d.id;
    } catch (a) {
      throw new Error('KasWare transferKaspa: ' + (a.message ?? JSON.stringify(a)));
    }
  },
  OA = async (r, i, a) => {
    try {
      if (!r || !a || i <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const f = (await window.kasware.getKRC20Balance()).find((b) => b.tick.toUpperCase() === a.toUpperCase());
      if (!f) throw new Error(`Not enough KRC20(${a}) balance`);
      const d = new en(i).shiftedBy(Number(f.dec)).toNumber();
      if (Number(f.balance) < d) throw new Error(`Not enough KRC20(${a}) balance`);
      const h = { p: 'KRC-20', op: 'transfer', tick: a.toUpperCase(), amt: d.toString(), to: r },
        y = await window.kasware.signKRC20Transaction(JSON.stringify(h), 4, r),
        _ = JSON.parse(y);
      return console.debug(`Transfer KRC20: ${_}`), _.revealId;
    } catch (u) {
      throw new Error('KasWare transferKrc20: ' + (u.message ?? JSON.stringify(u)));
    }
  },
  MA = vt({
    hin: We().required(),
    sourceWalletPublicKey: We().required(),
    sourceWalletAddress: We().required(),
    sourceChainId: We().required(),
    sourceAssetType: ut(),
    sourceAsset: We(),
    paymentAddress: We().required(),
    sourceVolume: ut().required(),
    txRef: We().required(),
    targetChainId: We(),
    targetWalletAddress: We(),
    targetAssetType: ut(),
    targetAsset: We(),
    targetVolume: ut().required(),
    targetVolumeMin: ut().required()
  });
function RA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      setValue: h,
      trigger: p,
      watch: y,
      register: _,
      handleSubmit: b,
      formState: { errors: S }
    } = Ut({ resolver: jt(MA) }),
    E = y('sourceChainId'),
    I = y('sourceAssetType'),
    P = y('sourceAsset'),
    J = y('sourceVolume'),
    W = y('paymentAddress'),
    z = y('targetChainId'),
    ve = y('targetAssetType'),
    qe = le.useMemo(() => {
      if (!E) return !1;
      const v = ar.fromString(E),
        w = I,
        N = v.chain.equals(Rt.Kaspa),
        G = !w || w === Pi.Native,
        Y = w === Pi.KRC20;
      return N && (G || Y);
    }, [E, I]),
    xe = b(async (v) => {
      a(!0), s(null), d('');
      try {
        const w = new BS({
          hin: BigInt(v.hin),
          sourceWalletPublicKey: v.sourceWalletPublicKey,
          sourceWalletAddress: v.sourceWalletAddress,
          txRef: v.txRef,
          sourceChainId: ar.fromString(v.sourceChainId),
          sourceAssetType: v.sourceAssetType,
          sourceAsset: v.sourceAsset,
          sourceVolume: BigInt(v.sourceVolume),
          targetChainId: v.targetChainId ? ar.fromString(v.targetChainId) : void 0,
          targetAssetType: v.targetAssetType,
          targetAsset: v.targetAsset,
          targetVolume: BigInt(v.targetVolume),
          targetVolumeMin: BigInt(v.targetVolumeMin)
        });
        s(await r.swap(w));
      } catch (w) {
        d(w.message ?? JSON.stringify(w));
      } finally {
        a(!1);
      }
    }),
    Ee = async () => {
      try {
        const v = r.getOptions().network,
          { address: w, publicKey: N } = await NA(v === cn.Testnet ? 'kaspa_testnet_10' : 'kaspa_mainnet');
        h('sourceWalletAddress', w),
          h('sourceWalletPublicKey', N),
          p('sourceWalletAddress'),
          p('sourceWalletPublicKey');
      } catch (v) {
        alert(v.message ?? JSON.stringify(v));
      }
    },
    De = async () => {
      try {
        let v = '';
        if (I === Pi.KRC20) {
          if (!W || !P || !J)
            throw new Error('paymentAddress, sourceAsset and sourceVolume are required for KRC20 transfer');
          v = await OA(W, J, P);
        } else {
          if (!W || !J) throw new Error('paymentAddress and sourceVolume are required for KAS transfer');
          v = await TA(W, J);
        }
        h('txRef', v), p('txRef');
      } catch (v) {
        alert(v.message ?? JSON.stringify(v));
      }
    };
  return T.jsx(Ct, {
    title: 'Swap',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'HIN',
          error: S.hin,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ..._('hin') })
        }),
        T.jsxs('div', {
          className: 'py-4 px-4 -mx-4 flex flex-col gap-2 bg-gray-100',
          children: [
            T.jsx(Ue, {
              label: 'Source Wallet Public Key',
              error: S.sourceWalletPublicKey,
              required: !0,
              children: T.jsx('input', { type: 'text', className: 'input', ..._('sourceWalletPublicKey') })
            }),
            T.jsx(Ue, {
              label: 'Source Wallet Address',
              error: S.sourceWalletAddress,
              required: !0,
              children: T.jsx('input', { type: 'text', className: 'input', ..._('sourceWalletAddress') })
            }),
            T.jsx('button', {
              className: 'btn-outline text-green-500',
              onClick: Ee,
              children: 'Connect Kasware Wallet'
            })
          ]
        }),
        T.jsx(Ue, {
          label: 'Source ChainId',
          error: S.sourceChainId,
          required: !0,
          children: T.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: E ? [ar.fromString(E)] : [],
            onChange: (v) => {
              var w;
              h('sourceChainId', ((w = v[0]) == null ? void 0 : w.toString()) ?? ''), p('sourceChainId');
            }
          })
        }),
        T.jsx(Ue, {
          label: 'Source Asset Type',
          error: S.sourceAssetType,
          children: T.jsx(Ni, {
            singleSelect: !0,
            selectedAssetTypes: typeof I == 'number' ? [I] : [],
            onChange: (v) => {
              h('sourceAssetType', v[0] ?? null), p('sourceAssetType');
            }
          })
        }),
        T.jsx(Ue, {
          label: 'Source Asset',
          error: S.sourceAsset,
          children: T.jsx('input', { type: 'text', className: 'input', ..._('sourceAsset') })
        }),
        T.jsx(Ue, {
          label: 'Payment Address',
          error: S.paymentAddress,
          required: !0,
          children: T.jsx('input', { type: 'text', className: 'input', ..._('paymentAddress') })
        }),
        T.jsx(Ue, {
          label: 'Source Volume',
          error: S.sourceVolume,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ..._('sourceVolume') })
        }),
        T.jsxs('div', {
          className: 'py-4 px-4 -mx-4 flex flex-col gap-2 bg-gray-100',
          children: [
            T.jsx(Ue, {
              label: 'Transaction Reference',
              error: S.txRef,
              required: !0,
              children: T.jsx('input', { type: 'text', className: 'input', ..._('txRef') })
            }),
            T.jsx('button', {
              className: 'btn-outline text-green-500',
              onClick: De,
              disabled: !qe,
              children: 'Transfer using Kasware Wallet'
            })
          ]
        }),
        T.jsx(Ue, {
          label: 'Target ChainId',
          error: S.targetChainId,
          children: T.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: z ? [ar.fromString(z)] : [],
            onChange: (v) => {
              var w;
              h('targetChainId', ((w = v[0]) == null ? void 0 : w.toString()) ?? ''), p('targetChainId');
            }
          })
        }),
        T.jsx(Ue, {
          label: 'Target Asset Type',
          error: S.targetAssetType,
          children: T.jsx(Ni, {
            singleSelect: !0,
            selectedAssetTypes: typeof ve == 'number' ? [ve] : [],
            onChange: (v) => {
              h('targetAssetType', v[0] ?? null), p('targetAssetType');
            }
          })
        }),
        T.jsx(Ue, {
          label: 'Target Asset',
          error: S.targetAsset,
          children: T.jsx('input', { type: 'text', className: 'input', ..._('targetAsset') })
        }),
        T.jsx(Ue, {
          label: 'Target Volume',
          error: S.targetVolume,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ..._('targetVolume') })
        }),
        T.jsx(Ue, {
          label: 'Target Volume Min',
          error: S.targetVolumeMin,
          required: !0,
          children: T.jsx('input', { type: 'number', className: 'input', ..._('targetVolumeMin') })
        }),
        T.jsx('button', { className: 'btn', onClick: xe, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const BA = vt({ agentOrderId: We().required() });
function CA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: y }
    } = Ut({ resolver: jt(BA) }),
    _ = p(async (b) => {
      a(!0), s(null), d('');
      try {
        const S = b.agentOrderId;
        s(await r.getAgentOrder(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return T.jsx(Ct, {
    title: 'GetAgentOrder',
    form: T.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        T.jsx(Ue, {
          label: 'Agent Order ID',
          error: y.agentOrderId,
          required: !0,
          children: T.jsx('input', { type: 'text', className: 'input', ...h('agentOrderId') })
        }),
        T.jsx('button', { className: 'btn', onClick: _, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const Sy = { network: cn.Testnet },
  DA = () => {
    const [r, i] = le.useState(null);
    return (
      le.useEffect(() => {
        const a = new vA();
        a.setOptions(Sy), i(a);
      }, []),
      r
        ? T.jsxs('div', {
            className: 'flex flex-col gap-6',
            children: [
              T.jsx(SA, { client: r, defaultOptions: Sy }),
              T.jsx(wA, { client: r }),
              T.jsx(AA, { client: r }),
              T.jsx(RA, { client: r }),
              T.jsx(CA, { client: r })
            ]
          })
        : null
    );
  },
  UA = () =>
    T.jsxs('main', {
      className: 'container mx-auto h-full flex flex-col gap-6',
      children: [
        T.jsxs('header', {
          className: 'p-6 pb-0 flex-none flex justify-between items-center',
          children: [
            T.jsx('h1', { className: 'text-3xl font-bold text-center', children: 'Hibit SDK Examples' }),
            T.jsx('nav', {
              children: T.jsxs('ul', {
                className: 'flex items-center gap-4',
                children: [
                  T.jsx('li', {
                    children: T.jsx(ed, {
                      to: '/',
                      className: ({ isActive: r }) => `font-bold underline ${r ? 'text-blue-500' : 'text-gray-500'}`,
                      children: 'HibitClient'
                    })
                  }),
                  T.jsx('li', {
                    children: T.jsx(ed, {
                      to: '/broker',
                      className: ({ isActive: r }) => `font-bold underline ${r ? 'text-blue-500' : 'text-gray-500'}`,
                      children: 'BrokerClient'
                    })
                  })
                ]
              })
            })
          ]
        }),
        T.jsx('div', {
          className: 'p-6 flex-1 overflow-auto',
          children: T.jsxs(Zb, {
            children: [
              T.jsx(Jf, { path: '/', element: T.jsx(hA, {}) }),
              T.jsx(Jf, { path: '/broker', element: T.jsx(DA, {}) })
            ]
          })
        })
      ]
    });
ib.createRoot(document.getElementById('root')).render(
  T.jsx(wt.StrictMode, { children: T.jsx(bS, { children: T.jsx(UA, {}) }) })
);
