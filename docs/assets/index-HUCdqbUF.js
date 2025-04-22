var Yv = Object.defineProperty;
var Xv = (r, i, a) => (i in r ? Yv(r, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (r[i] = a));
var Jm = (r, i, a) => Xv(r, typeof i != 'symbol' ? i + '' : i, a);
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
var Pf =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof globalThis < 'u'
          ? globalThis
          : {};
function ru(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r;
}
var Sf = { exports: {} },
  zl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wm;
function Kv() {
  if (Wm) return zl;
  Wm = 1;
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
  return (zl.Fragment = i), (zl.jsx = a), (zl.jsxs = a), zl;
}
var ep;
function Zv() {
  return ep || ((ep = 1), (Sf.exports = Kv())), Sf.exports;
}
var _ = Zv(),
  xf = { exports: {} },
  ut = {},
  tp;
function Qv() {
  if (tp) return ut;
  tp = 1;
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
    g = Symbol.for('react.memo'),
    N = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function S(j) {
    return j === null || typeof j != 'object'
      ? null
      : ((j = (v && j[v]) || j['@@iterator']), typeof j == 'function' ? j : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    D = Object.assign,
    P = {};
  function J(j, ne, Ee) {
    (this.props = j), (this.context = ne), (this.refs = P), (this.updater = Ee || w);
  }
  (J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (j, ne) {
      if (typeof j != 'object' && typeof j != 'function' && j != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, j, ne, 'setState');
    }),
    (J.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, 'forceUpdate');
    });
  function W() {}
  W.prototype = J.prototype;
  function H(j, ne, Ee) {
    (this.props = j), (this.context = ne), (this.refs = P), (this.updater = Ee || w);
  }
  var Se = (H.prototype = new W());
  (Se.constructor = H), D(Se, J.prototype), (Se.isPureReactComponent = !0);
  var Le = Array.isArray,
    we = { H: null, A: null, T: null, S: null },
    he = Object.prototype.hasOwnProperty;
  function Ae(j, ne, Ee, ye, O, je) {
    return (Ee = je.ref), { $$typeof: r, type: j, key: ne, ref: Ee !== void 0 ? Ee : null, props: je };
  }
  function b(j, ne) {
    return Ae(j.type, ne, void 0, void 0, void 0, j.props);
  }
  function A(j) {
    return typeof j == 'object' && j !== null && j.$$typeof === r;
  }
  function T(j) {
    var ne = { '=': '=0', ':': '=2' };
    return (
      '$' +
      j.replace(/[=:]/g, function (Ee) {
        return ne[Ee];
      })
    );
  }
  var G = /\/+/g;
  function Y(j, ne) {
    return typeof j == 'object' && j !== null && j.key != null ? T('' + j.key) : ne.toString(36);
  }
  function X() {}
  function Z(j) {
    switch (j.status) {
      case 'fulfilled':
        return j.value;
      case 'rejected':
        throw j.reason;
      default:
        switch (
          (typeof j.status == 'string'
            ? j.then(X, X)
            : ((j.status = 'pending'),
              j.then(
                function (ne) {
                  j.status === 'pending' && ((j.status = 'fulfilled'), (j.value = ne));
                },
                function (ne) {
                  j.status === 'pending' && ((j.status = 'rejected'), (j.reason = ne));
                }
              )),
          j.status)
        ) {
          case 'fulfilled':
            return j.value;
          case 'rejected':
            throw j.reason;
        }
    }
    throw j;
  }
  function I(j, ne, Ee, ye, O) {
    var je = typeof j;
    (je === 'undefined' || je === 'boolean') && (j = null);
    var Me = !1;
    if (j === null) Me = !0;
    else
      switch (je) {
        case 'bigint':
        case 'string':
        case 'number':
          Me = !0;
          break;
        case 'object':
          switch (j.$$typeof) {
            case r:
            case i:
              Me = !0;
              break;
            case N:
              return (Me = j._init), I(Me(j._payload), ne, Ee, ye, O);
          }
      }
    if (Me)
      return (
        (O = O(j)),
        (Me = ye === '' ? '.' + Y(j, 0) : ye),
        Le(O)
          ? ((Ee = ''),
            Me != null && (Ee = Me.replace(G, '$&/') + '/'),
            I(O, ne, Ee, '', function (ke) {
              return ke;
            }))
          : O != null &&
            (A(O) &&
              (O = b(
                O,
                Ee + (O.key == null || (j && j.key === O.key) ? '' : ('' + O.key).replace(G, '$&/') + '/') + Me
              )),
            ne.push(O)),
        1
      );
    Me = 0;
    var Pe = ye === '' ? '.' : ye + ':';
    if (Le(j)) for (var Re = 0; Re < j.length; Re++) (ye = j[Re]), (je = Pe + Y(ye, Re)), (Me += I(ye, ne, Ee, je, O));
    else if (((Re = S(j)), typeof Re == 'function'))
      for (j = Re.call(j), Re = 0; !(ye = j.next()).done; )
        (ye = ye.value), (je = Pe + Y(ye, Re++)), (Me += I(ye, ne, Ee, je, O));
    else if (je === 'object') {
      if (typeof j.then == 'function') return I(Z(j), ne, Ee, ye, O);
      throw (
        ((ne = String(j)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (ne === '[object Object]' ? 'object with keys {' + Object.keys(j).join(', ') + '}' : ne) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return Me;
  }
  function R(j, ne, Ee) {
    if (j == null) return j;
    var ye = [],
      O = 0;
    return (
      I(j, ye, '', '', function (je) {
        return ne.call(Ee, je, O++);
      }),
      ye
    );
  }
  function $(j) {
    if (j._status === -1) {
      var ne = j._result;
      (ne = ne()),
        ne.then(
          function (Ee) {
            (j._status === 0 || j._status === -1) && ((j._status = 1), (j._result = Ee));
          },
          function (Ee) {
            (j._status === 0 || j._status === -1) && ((j._status = 2), (j._result = Ee));
          }
        ),
        j._status === -1 && ((j._status = 0), (j._result = ne));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var z =
    typeof reportError == 'function'
      ? reportError
      : function (j) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var ne = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof j == 'object' && j !== null && typeof j.message == 'string' ? String(j.message) : String(j),
              error: j
            });
            if (!window.dispatchEvent(ne)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', j);
            return;
          }
          console.error(j);
        };
  function oe() {}
  return (
    (ut.Children = {
      map: R,
      forEach: function (j, ne, Ee) {
        R(
          j,
          function () {
            ne.apply(this, arguments);
          },
          Ee
        );
      },
      count: function (j) {
        var ne = 0;
        return (
          R(j, function () {
            ne++;
          }),
          ne
        );
      },
      toArray: function (j) {
        return (
          R(j, function (ne) {
            return ne;
          }) || []
        );
      },
      only: function (j) {
        if (!A(j)) throw Error('React.Children.only expected to receive a single React element child.');
        return j;
      }
    }),
    (ut.Component = J),
    (ut.Fragment = a),
    (ut.Profiler = s),
    (ut.PureComponent = H),
    (ut.StrictMode = u),
    (ut.Suspense = p),
    (ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = we),
    (ut.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (ut.cache = function (j) {
      return function () {
        return j.apply(null, arguments);
      };
    }),
    (ut.cloneElement = function (j, ne, Ee) {
      if (j == null) throw Error('The argument must be a React element, but you passed ' + j + '.');
      var ye = D({}, j.props),
        O = j.key,
        je = void 0;
      if (ne != null)
        for (Me in (ne.ref !== void 0 && (je = void 0), ne.key !== void 0 && (O = '' + ne.key), ne))
          !he.call(ne, Me) ||
            Me === 'key' ||
            Me === '__self' ||
            Me === '__source' ||
            (Me === 'ref' && ne.ref === void 0) ||
            (ye[Me] = ne[Me]);
      var Me = arguments.length - 2;
      if (Me === 1) ye.children = Ee;
      else if (1 < Me) {
        for (var Pe = Array(Me), Re = 0; Re < Me; Re++) Pe[Re] = arguments[Re + 2];
        ye.children = Pe;
      }
      return Ae(j.type, O, void 0, void 0, je, ye);
    }),
    (ut.createContext = function (j) {
      return (
        (j = { $$typeof: d, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null }),
        (j.Provider = j),
        (j.Consumer = { $$typeof: f, _context: j }),
        j
      );
    }),
    (ut.createElement = function (j, ne, Ee) {
      var ye,
        O = {},
        je = null;
      if (ne != null)
        for (ye in (ne.key !== void 0 && (je = '' + ne.key), ne))
          he.call(ne, ye) && ye !== 'key' && ye !== '__self' && ye !== '__source' && (O[ye] = ne[ye]);
      var Me = arguments.length - 2;
      if (Me === 1) O.children = Ee;
      else if (1 < Me) {
        for (var Pe = Array(Me), Re = 0; Re < Me; Re++) Pe[Re] = arguments[Re + 2];
        O.children = Pe;
      }
      if (j && j.defaultProps) for (ye in ((Me = j.defaultProps), Me)) O[ye] === void 0 && (O[ye] = Me[ye]);
      return Ae(j, je, void 0, void 0, null, O);
    }),
    (ut.createRef = function () {
      return { current: null };
    }),
    (ut.forwardRef = function (j) {
      return { $$typeof: h, render: j };
    }),
    (ut.isValidElement = A),
    (ut.lazy = function (j) {
      return { $$typeof: N, _payload: { _status: -1, _result: j }, _init: $ };
    }),
    (ut.memo = function (j, ne) {
      return { $$typeof: g, type: j, compare: ne === void 0 ? null : ne };
    }),
    (ut.startTransition = function (j) {
      var ne = we.T,
        Ee = {};
      we.T = Ee;
      try {
        var ye = j(),
          O = we.S;
        O !== null && O(Ee, ye), typeof ye == 'object' && ye !== null && typeof ye.then == 'function' && ye.then(oe, z);
      } catch (je) {
        z(je);
      } finally {
        we.T = ne;
      }
    }),
    (ut.unstable_useCacheRefresh = function () {
      return we.H.useCacheRefresh();
    }),
    (ut.use = function (j) {
      return we.H.use(j);
    }),
    (ut.useActionState = function (j, ne, Ee) {
      return we.H.useActionState(j, ne, Ee);
    }),
    (ut.useCallback = function (j, ne) {
      return we.H.useCallback(j, ne);
    }),
    (ut.useContext = function (j) {
      return we.H.useContext(j);
    }),
    (ut.useDebugValue = function () {}),
    (ut.useDeferredValue = function (j, ne) {
      return we.H.useDeferredValue(j, ne);
    }),
    (ut.useEffect = function (j, ne) {
      return we.H.useEffect(j, ne);
    }),
    (ut.useId = function () {
      return we.H.useId();
    }),
    (ut.useImperativeHandle = function (j, ne, Ee) {
      return we.H.useImperativeHandle(j, ne, Ee);
    }),
    (ut.useInsertionEffect = function (j, ne) {
      return we.H.useInsertionEffect(j, ne);
    }),
    (ut.useLayoutEffect = function (j, ne) {
      return we.H.useLayoutEffect(j, ne);
    }),
    (ut.useMemo = function (j, ne) {
      return we.H.useMemo(j, ne);
    }),
    (ut.useOptimistic = function (j, ne) {
      return we.H.useOptimistic(j, ne);
    }),
    (ut.useReducer = function (j, ne, Ee) {
      return we.H.useReducer(j, ne, Ee);
    }),
    (ut.useRef = function (j) {
      return we.H.useRef(j);
    }),
    (ut.useState = function (j) {
      return we.H.useState(j);
    }),
    (ut.useSyncExternalStore = function (j, ne, Ee) {
      return we.H.useSyncExternalStore(j, ne, Ee);
    }),
    (ut.useTransition = function () {
      return we.H.useTransition();
    }),
    (ut.version = '19.0.0'),
    ut
  );
}
var rp;
function sd() {
  return rp || ((rp = 1), (xf.exports = Qv())), xf.exports;
}
var le = sd();
const wt = ru(le);
var wf = { exports: {} },
  Hl = {},
  Ef = { exports: {} },
  Af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var np;
function Pv() {
  return (
    np ||
      ((np = 1),
      (function (r) {
        function i(R, $) {
          var z = R.length;
          R.push($);
          e: for (; 0 < z; ) {
            var oe = (z - 1) >>> 1,
              j = R[oe];
            if (0 < s(j, $)) (R[oe] = $), (R[z] = j), (z = oe);
            else break e;
          }
        }
        function a(R) {
          return R.length === 0 ? null : R[0];
        }
        function u(R) {
          if (R.length === 0) return null;
          var $ = R[0],
            z = R.pop();
          if (z !== $) {
            R[0] = z;
            e: for (var oe = 0, j = R.length, ne = j >>> 1; oe < ne; ) {
              var Ee = 2 * (oe + 1) - 1,
                ye = R[Ee],
                O = Ee + 1,
                je = R[O];
              if (0 > s(ye, z))
                O < j && 0 > s(je, ye) ? ((R[oe] = je), (R[O] = z), (oe = O)) : ((R[oe] = ye), (R[Ee] = z), (oe = Ee));
              else if (O < j && 0 > s(je, z)) (R[oe] = je), (R[O] = z), (oe = O);
              else break e;
            }
          }
          return $;
        }
        function s(R, $) {
          var z = R.sortIndex - $.sortIndex;
          return z !== 0 ? z : R.id - $.id;
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
          g = [],
          N = 1,
          v = null,
          S = 3,
          w = !1,
          D = !1,
          P = !1,
          J = typeof setTimeout == 'function' ? setTimeout : null,
          W = typeof clearTimeout == 'function' ? clearTimeout : null,
          H = typeof setImmediate < 'u' ? setImmediate : null;
        function Se(R) {
          for (var $ = a(g); $ !== null; ) {
            if ($.callback === null) u(g);
            else if ($.startTime <= R) u(g), ($.sortIndex = $.expirationTime), i(p, $);
            else break;
            $ = a(g);
          }
        }
        function Le(R) {
          if (((P = !1), Se(R), !D))
            if (a(p) !== null) (D = !0), Z();
            else {
              var $ = a(g);
              $ !== null && I(Le, $.startTime - R);
            }
        }
        var we = !1,
          he = -1,
          Ae = 5,
          b = -1;
        function A() {
          return !(r.unstable_now() - b < Ae);
        }
        function T() {
          if (we) {
            var R = r.unstable_now();
            b = R;
            var $ = !0;
            try {
              e: {
                (D = !1), P && ((P = !1), W(he), (he = -1)), (w = !0);
                var z = S;
                try {
                  t: {
                    for (Se(R), v = a(p); v !== null && !(v.expirationTime > R && A()); ) {
                      var oe = v.callback;
                      if (typeof oe == 'function') {
                        (v.callback = null), (S = v.priorityLevel);
                        var j = oe(v.expirationTime <= R);
                        if (((R = r.unstable_now()), typeof j == 'function')) {
                          (v.callback = j), Se(R), ($ = !0);
                          break t;
                        }
                        v === a(p) && u(p), Se(R);
                      } else u(p);
                      v = a(p);
                    }
                    if (v !== null) $ = !0;
                    else {
                      var ne = a(g);
                      ne !== null && I(Le, ne.startTime - R), ($ = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (S = z), (w = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? G() : (we = !1);
            }
          }
        }
        var G;
        if (typeof H == 'function')
          G = function () {
            H(T);
          };
        else if (typeof MessageChannel < 'u') {
          var Y = new MessageChannel(),
            X = Y.port2;
          (Y.port1.onmessage = T),
            (G = function () {
              X.postMessage(null);
            });
        } else
          G = function () {
            J(T, 0);
          };
        function Z() {
          we || ((we = !0), G());
        }
        function I(R, $) {
          he = J(function () {
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
            D || w || ((D = !0), Z());
          }),
          (r.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Ae = 0 < R ? Math.floor(1e3 / R) : 5);
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
            var z = S;
            S = $;
            try {
              return R();
            } finally {
              S = z;
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
            var z = S;
            S = R;
            try {
              return $();
            } finally {
              S = z;
            }
          }),
          (r.unstable_scheduleCallback = function (R, $, z) {
            var oe = r.unstable_now();
            switch (
              (typeof z == 'object' && z !== null
                ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? oe + z : oe))
                : (z = oe),
              R)
            ) {
              case 1:
                var j = -1;
                break;
              case 2:
                j = 250;
                break;
              case 5:
                j = 1073741823;
                break;
              case 4:
                j = 1e4;
                break;
              default:
                j = 5e3;
            }
            return (
              (j = z + j),
              (R = { id: N++, callback: $, priorityLevel: R, startTime: z, expirationTime: j, sortIndex: -1 }),
              z > oe
                ? ((R.sortIndex = z),
                  i(g, R),
                  a(p) === null && R === a(g) && (P ? (W(he), (he = -1)) : (P = !0), I(Le, z - oe)))
                : ((R.sortIndex = j), i(p, R), D || w || ((D = !0), Z())),
              R
            );
          }),
          (r.unstable_shouldYield = A),
          (r.unstable_wrapCallback = function (R) {
            var $ = S;
            return function () {
              var z = S;
              S = $;
              try {
                return R.apply(this, arguments);
              } finally {
                S = z;
              }
            };
          });
      })(Af)),
    Af
  );
}
var ip;
function Jv() {
  return ip || ((ip = 1), (Ef.exports = Pv())), Ef.exports;
}
var Nf = { exports: {} },
  sr = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function Wv() {
  if (ap) return sr;
  ap = 1;
  var r = sd();
  function i(p) {
    var g = 'https://react.dev/errors/' + p;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++) g += '&args[]=' + encodeURIComponent(arguments[N]);
    }
    return (
      'Minified React error #' +
      p +
      '; visit ' +
      g +
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
  function f(p, g, N) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: s, key: v == null ? null : '' + v, children: p, containerInfo: g, implementation: N };
  }
  var d = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, g) {
    if (p === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (sr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (sr.createPortal = function (p, g) {
      var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(i(299));
      return f(p, g, null, N);
    }),
    (sr.flushSync = function (p) {
      var g = d.T,
        N = u.p;
      try {
        if (((d.T = null), (u.p = 2), p)) return p();
      } finally {
        (d.T = g), (u.p = N), u.d.f();
      }
    }),
    (sr.preconnect = function (p, g) {
      typeof p == 'string' &&
        (g
          ? ((g = g.crossOrigin), (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        u.d.C(p, g));
    }),
    (sr.prefetchDNS = function (p) {
      typeof p == 'string' && u.d.D(p);
    }),
    (sr.preinit = function (p, g) {
      if (typeof p == 'string' && g && typeof g.as == 'string') {
        var N = g.as,
          v = h(N, g.crossOrigin),
          S = typeof g.integrity == 'string' ? g.integrity : void 0,
          w = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        N === 'style'
          ? u.d.S(p, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: w
            })
          : N === 'script' &&
            u.d.X(p, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: w,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0
            });
      }
    }),
    (sr.preinitModule = function (p, g) {
      if (typeof p == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var N = h(g.as, g.crossOrigin);
            u.d.M(p, {
              crossOrigin: N,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0
            });
          }
        } else g == null && u.d.M(p);
    }),
    (sr.preload = function (p, g) {
      if (typeof p == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var N = g.as,
          v = h(N, g.crossOrigin);
        u.d.L(p, N, {
          crossOrigin: v,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0
        });
      }
    }),
    (sr.preloadModule = function (p, g) {
      if (typeof p == 'string')
        if (g) {
          var N = h(g.as, g.crossOrigin);
          u.d.m(p, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: N,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0
          });
        } else u.d.m(p);
    }),
    (sr.requestFormReset = function (p) {
      u.d.r(p);
    }),
    (sr.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (sr.useFormState = function (p, g, N) {
      return d.H.useFormState(p, g, N);
    }),
    (sr.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (sr.version = '19.0.0'),
    sr
  );
}
var lp;
function eb() {
  if (lp) return Nf.exports;
  lp = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), (Nf.exports = Wv()), Nf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up;
function tb() {
  if (up) return Hl;
  up = 1;
  var r = Jv(),
    i = sd(),
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
    g = Symbol.for('react.strict_mode'),
    N = Symbol.for('react.profiler'),
    v = Symbol.for('react.provider'),
    S = Symbol.for('react.consumer'),
    w = Symbol.for('react.context'),
    D = Symbol.for('react.forward_ref'),
    P = Symbol.for('react.suspense'),
    J = Symbol.for('react.suspense_list'),
    W = Symbol.for('react.memo'),
    H = Symbol.for('react.lazy'),
    Se = Symbol.for('react.offscreen'),
    Le = Symbol.for('react.memo_cache_sentinel'),
    we = Symbol.iterator;
  function he(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (we && e[we]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var Ae = Symbol.for('react.client.reference');
  function b(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === Ae ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case p:
        return 'Fragment';
      case h:
        return 'Portal';
      case N:
        return 'Profiler';
      case g:
        return 'StrictMode';
      case P:
        return 'Suspense';
      case J:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case w:
          return (e.displayName || 'Context') + '.Provider';
        case S:
          return (e._context.displayName || 'Context') + '.Consumer';
        case D:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case W:
          return (t = e.displayName || null), t !== null ? t : b(e.type) || 'Memo';
        case H:
          (t = e._payload), (e = e._init);
          try {
            return b(e(t));
          } catch {}
      }
    return null;
  }
  var A = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    T = Object.assign,
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
  function I(e, t) {
    if (!e || Z) return '';
    Z = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Be = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Be.prototype, 'props', {
                  set: function () {
                    throw Error();
                  }
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Be, []);
                } catch (Ne) {
                  var be = Ne;
                }
                Reflect.construct(e, [], Be);
              } else {
                try {
                  Be.call();
                } catch (Ne) {
                  be = Ne;
                }
                e.call(Be.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Ne) {
                be = Ne;
              }
              (Be = e()) && typeof Be.catch == 'function' && Be.catch(function () {});
            }
          } catch (Ne) {
            if (Ne && be && typeof Ne.stack == 'string') return [Ne.stack, be.stack];
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
        return (e = I(e.type, !1)), e;
      case 11:
        return (e = I(e.type.render, !1)), e;
      case 1:
        return (e = I(e.type, !0)), e;
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
  function z(e) {
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
  function j(e) {
    if (z(e) !== e) throw Error(u(188));
  }
  function ne(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = z(e)), t === null)) throw Error(u(188));
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
          if (o === n) return j(c), e;
          if (o === l) return j(c), t;
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
  function Ee(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = Ee(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var ye = Array.isArray,
    O = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    je = { pending: !1, data: null, method: null, action: null },
    Me = [],
    Pe = -1;
  function Re(e) {
    return { current: e };
  }
  function ke(e) {
    0 > Pe || ((e.current = Me[Pe]), (Me[Pe] = null), Pe--);
  }
  function B(e, t) {
    Pe++, (Me[Pe] = e.current), (e.current = t);
  }
  var U = Re(null),
    Q = Re(null),
    se = Re(null),
    re = Re(null);
  function ue(e, t) {
    switch ((B(se, t), B(Q, e), B(U, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? Tm(t) : 0;
        break;
      default:
        if (((e = e === 8 ? t.parentNode : t), (t = e.tagName), (e = e.namespaceURI))) (e = Tm(e)), (t = Om(e, t));
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
    ke(U), B(U, t);
  }
  function me() {
    ke(U), ke(Q), ke(se);
  }
  function ae(e) {
    e.memoizedState !== null && B(re, e);
    var t = U.current,
      n = Om(t, e.type);
    t !== n && (B(Q, e), B(U, n));
  }
  function M(e) {
    Q.current === e && (ke(U), ke(Q)), re.current === e && (ke(re), (jl._currentValue = je));
  }
  var L = Object.prototype.hasOwnProperty,
    V = r.unstable_scheduleCallback,
    te = r.unstable_cancelCallback,
    ve = r.unstable_shouldYield,
    xe = r.unstable_requestPaint,
    De = r.unstable_now,
    ze = r.unstable_getCurrentPriorityLevel,
    rt = r.unstable_ImmediatePriority,
    E = r.unstable_UserBlockingPriority,
    m = r.unstable_NormalPriority,
    y = r.unstable_LowPriority,
    F = r.unstable_IdlePriority,
    ie = r.log,
    k = r.unstable_setDisableYieldValue,
    q = null,
    de = null;
  function Te(e) {
    if (de && typeof de.onCommitFiberRoot == 'function')
      try {
        de.onCommitFiberRoot(q, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Ue(e) {
    if ((typeof ie == 'function' && k(e), de && typeof de.setStrictMode == 'function'))
      try {
        de.setStrictMode(q, e);
      } catch {}
  }
  var Ie = Math.clz32 ? Math.clz32 : Ve,
    et = Math.log,
    Xe = Math.LN2;
  function Ve(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((et(e) / Xe) | 0)) | 0;
  }
  var Fe = 128,
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
  function hr() {
    var e = Fe;
    return (Fe <<= 1), (Fe & 4194176) === 0 && (Fe = 128), e;
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
  function Td(e, t, n, l, c, o) {
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
        Be = 1 << _e;
      (C[_e] = 0), (K[_e] = -1);
      var be = fe[_e];
      if (be !== null)
        for (fe[_e] = null, _e = 0; _e < be.length; _e++) {
          var Ne = be[_e];
          Ne !== null && (Ne.lane &= -536870913);
        }
      n &= ~Be;
    }
    l !== 0 && fc(e, l, 0), o !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(x & ~t));
  }
  function fc(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - Ie(t);
    (e.entangledLanes |= t), (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194218));
  }
  function dc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Ie(n),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (n &= ~c);
    }
  }
  function gu(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function yu() {
    var e = O.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ym(e.type));
  }
  function hc(e, t) {
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
    Xa = '__reactEvents$' + on,
    mc = '__reactListeners$' + on,
    pc = '__reactHandles$' + on,
    vu = '__reactResources$' + on,
    Ti = '__reactMarker$' + on;
  function Ka(e) {
    delete e[dt], delete e[lr], delete e[Xa], delete e[mc], delete e[pc];
  }
  function pt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Qn] || n[dt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Bm(e); e !== null; ) {
            if ((n = e[dt])) return n;
            e = Bm(e);
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
    var t = e[vu];
    return t || (t = e[vu] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
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
    Ly = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Od = {},
    Md = {};
  function zy(e) {
    return L.call(Md, e) ? !0 : L.call(Od, e) ? !1 : Ly.test(e) ? (Md[e] = !0) : ((Od[e] = !0), !1);
  }
  function bu(e, t, n) {
    if (zy(t))
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
  function Su(e, t, n) {
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
  function Rd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Hy(e) {
    var t = Rd(e) ? 'checked' : 'value',
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
  function xu(e) {
    e._valueTracker || (e._valueTracker = Hy(e));
  }
  function Bd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return e && (l = Rd(e) ? (e.checked ? 'true' : 'false') : e.value), (e = l), e !== n ? (t.setValue(e), !0) : !1;
  }
  function wu(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vy = /[\n"\\]/g;
  function Lr(e) {
    return e.replace(Vy, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function gc(e, t, n, l, c, o, x, C) {
    (e.name = ''),
      x != null && typeof x != 'function' && typeof x != 'symbol' && typeof x != 'boolean'
        ? (e.type = x)
        : e.removeAttribute('type'),
      t != null
        ? x === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + qr(t))
          : e.value !== '' + qr(t) && (e.value = '' + qr(t))
        : (x !== 'submit' && x !== 'reset') || e.removeAttribute('value'),
      t != null ? yc(e, x, qr(t)) : n != null ? yc(e, x, qr(n)) : l != null && e.removeAttribute('value'),
      c == null && o != null && (e.defaultChecked = !!o),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (e.name = '' + qr(C))
        : e.removeAttribute('name');
  }
  function Cd(e, t, n, l, c, o, x, C) {
    if (
      (o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean' && (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== 'submit' && o !== 'reset') || t != null)) return;
      (n = n != null ? '' + qr(n) : ''),
        (t = t != null ? '' + qr(t) : n),
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
    (t === 'number' && wu(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
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
      for (n = '' + qr(n), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === n) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dd(e, t, n) {
    if (t != null && ((t = '' + qr(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + qr(n) : '';
  }
  function Ud(e, t, n, l) {
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
    (n = qr(t)), (e.defaultValue = n), (l = e.textContent), l === n && l !== '' && l !== null && (e.value = l);
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
  var Fy = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function jd(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Fy.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function kd(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(u(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0 ? e.setProperty(l, '') : l === 'float' ? (e.cssFloat = '') : (e[l] = ''));
      for (var c in t) (l = t[c]), t.hasOwnProperty(c) && n[c] !== l && jd(e, c, l);
    } else for (var o in t) t.hasOwnProperty(o) && jd(e, o, t[o]);
  }
  function vc(e) {
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
  var Gy = new Map([
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
    $y =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Eu(e) {
    return $y.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var bc = null;
  function Sc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var oa = null,
    fa = null;
  function Id(e) {
    var t = Pn(e);
    if (t && (e = t.stateNode)) {
      var n = e[lr] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (gc(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Lr('' + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var c = l[lr] || null;
                if (!c) throw Error(u(90));
                gc(l, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
              }
            }
            for (t = 0; t < n.length; t++) (l = n[t]), l.form === e.form && Bd(l);
          }
          break e;
        case 'textarea':
          Dd(e, n.value, n.defaultValue);
          break e;
        case 'select':
          (t = n.value), t != null && sa(e, !!n.multiple, t, !1);
      }
    }
  }
  var xc = !1;
  function qd(e, t, n) {
    if (xc) return e(t, n);
    xc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (((xc = !1), (oa !== null || fa !== null) && (ls(), oa && ((t = oa), (e = fa), (fa = oa = null), Id(t), e))))
        for (t = 0; t < e.length; t++) Id(e[t]);
    }
  }
  function Za(e, t) {
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
  var wc = !1;
  if (fn)
    try {
      var Qa = {};
      Object.defineProperty(Qa, 'passive', {
        get: function () {
          wc = !0;
        }
      }),
        window.addEventListener('test', Qa, Qa),
        window.removeEventListener('test', Qa, Qa);
    } catch {
      wc = !1;
    }
  var Jn = null,
    Ec = null,
    Au = null;
  function Ld() {
    if (Au) return Au;
    var e,
      t = Ec,
      n = t.length,
      l,
      c = 'value' in Jn ? Jn.value : Jn.textContent,
      o = c.length;
    for (e = 0; e < n && t[e] === c[e]; e++);
    var x = n - e;
    for (l = 1; l <= x && t[n - l] === c[o - l]; l++);
    return (Au = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Nu(e) {
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
  function zd() {
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
        (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? _u : zd),
        (this.isPropagationStopped = zd),
        this
      );
    }
    return (
      T(t.prototype, {
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
    Tu = vr(Mi),
    Pa = T({}, Mi, { view: 0, detail: 0 }),
    Yy = vr(Pa),
    Ac,
    Nc,
    Ja,
    Ou = T({}, Pa, {
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
      getModifierState: Tc,
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
          : (e !== Ja &&
              (Ja && e.type === 'mousemove'
                ? ((Ac = e.screenX - Ja.screenX), (Nc = e.screenY - Ja.screenY))
                : (Nc = Ac = 0),
              (Ja = e)),
            Ac);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Nc;
      }
    }),
    Hd = vr(Ou),
    Xy = T({}, Ou, { dataTransfer: 0 }),
    Ky = vr(Xy),
    Zy = T({}, Pa, { relatedTarget: 0 }),
    _c = vr(Zy),
    Qy = T({}, Mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Py = vr(Qy),
    Jy = T({}, Mi, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      }
    }),
    Wy = vr(Jy),
    e1 = T({}, Mi, { data: 0 }),
    Vd = vr(e1),
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
  function Tc() {
    return i1;
  }
  var a1 = T({}, Pa, {
      key: function (e) {
        if (e.key) {
          var t = t1[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Nu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
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
      getModifierState: Tc,
      charCode: function (e) {
        return e.type === 'keypress' ? Nu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? Nu(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      }
    }),
    l1 = vr(a1),
    u1 = T({}, Ou, {
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
    s1 = T({}, Pa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tc
    }),
    c1 = vr(s1),
    o1 = T({}, Mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f1 = vr(o1),
    d1 = T({}, Ou, {
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
    m1 = T({}, Mi, { newState: 0, oldState: 0 }),
    p1 = vr(m1),
    g1 = [9, 13, 27, 32],
    Oc = fn && 'CompositionEvent' in window,
    Wa = null;
  fn && 'documentMode' in document && (Wa = document.documentMode);
  var y1 = fn && 'TextEvent' in window && !Wa,
    Gd = fn && (!Oc || (Wa && 8 < Wa && 11 >= Wa)),
    $d = ' ',
    Yd = !1;
  function Xd(e, t) {
    switch (e) {
      case 'keyup':
        return g1.indexOf(t.keyCode) !== -1;
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
  function Kd(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var da = !1;
  function v1(e, t) {
    switch (e) {
      case 'compositionend':
        return Kd(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Yd = !0), $d);
      case 'textInput':
        return (e = t.data), e === $d && Yd ? null : e;
      default:
        return null;
    }
  }
  function b1(e, t) {
    if (da)
      return e === 'compositionend' || (!Oc && Xd(e, t)) ? ((e = Ld()), (Au = Ec = Jn = null), (da = !1), e) : null;
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
        return Gd && t.locale !== 'ko' ? null : t.data;
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
  function Zd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!S1[e.type] : t === 'textarea';
  }
  function Qd(e, t, n, l) {
    oa ? (fa ? fa.push(l) : (fa = [l])) : (oa = l),
      (t = fs(t, 'onChange')),
      0 < t.length && ((n = new Tu('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t }));
  }
  var el = null,
    tl = null;
  function x1(e) {
    wm(e, 0);
  }
  function Mu(e) {
    var t = Oi(e);
    if (Bd(t)) return e;
  }
  function Pd(e, t) {
    if (e === 'change') return t;
  }
  var Jd = !1;
  if (fn) {
    var Mc;
    if (fn) {
      var Rc = 'oninput' in document;
      if (!Rc) {
        var Wd = document.createElement('div');
        Wd.setAttribute('oninput', 'return;'), (Rc = typeof Wd.oninput == 'function');
      }
      Mc = Rc;
    } else Mc = !1;
    Jd = Mc && (!document.documentMode || 9 < document.documentMode);
  }
  function eh() {
    el && (el.detachEvent('onpropertychange', th), (tl = el = null));
  }
  function th(e) {
    if (e.propertyName === 'value' && Mu(tl)) {
      var t = [];
      Qd(t, tl, e, Sc(e)), qd(x1, t);
    }
  }
  function w1(e, t, n) {
    e === 'focusin' ? (eh(), (el = t), (tl = n), el.attachEvent('onpropertychange', th)) : e === 'focusout' && eh();
  }
  function E1(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Mu(tl);
  }
  function A1(e, t) {
    if (e === 'click') return Mu(t);
  }
  function N1(e, t) {
    if (e === 'input' || e === 'change') return Mu(t);
  }
  function _1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Tr = typeof Object.is == 'function' ? Object.is : _1;
  function rl(e, t) {
    if (Tr(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var c = n[l];
      if (!L.call(t, c) || !Tr(e[c], t[c])) return !1;
    }
    return !0;
  }
  function rh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nh(e, t) {
    var n = rh(e);
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
      n = rh(n);
    }
  }
  function ih(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ih(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ah(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = wu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = wu(e.document);
    }
    return t;
  }
  function Bc(e) {
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
    var n = ah(t);
    t = e.focusedElem;
    var l = e.selectionRange;
    if (n !== t && t && t.ownerDocument && ih(t.ownerDocument.documentElement, t)) {
      if (l !== null && Bc(t)) {
        if (((e = l.start), (n = l.end), n === void 0 && (n = e), 'selectionStart' in t))
          (t.selectionStart = e), (t.selectionEnd = Math.min(n, t.value.length));
        else if (((n = ((e = t.ownerDocument || document) && e.defaultView) || window), n.getSelection)) {
          n = n.getSelection();
          var c = t.textContent.length,
            o = Math.min(l.start, c);
          (l = l.end === void 0 ? o : Math.min(l.end, c)),
            !n.extend && o > l && ((c = l), (l = o), (o = c)),
            (c = nh(t, o));
          var x = nh(t, l);
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
    Cc = null,
    nl = null,
    Dc = !1;
  function lh(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Dc ||
      ha == null ||
      ha !== wu(l) ||
      ((l = ha),
      'selectionStart' in l && Bc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
          })),
      (nl && rl(nl, l)) ||
        ((nl = l),
        (l = fs(Cc, 'onSelect')),
        0 < l.length &&
          ((t = new Tu('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: l }), (t.target = ha))));
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
    Uc = {},
    uh = {};
  fn &&
    ((uh = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation),
    'TransitionEvent' in window || delete ma.transitionend.transition);
  function Bi(e) {
    if (Uc[e]) return Uc[e];
    if (!ma[e]) return e;
    var t = ma[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in uh) return (Uc[e] = t[n]);
    return e;
  }
  var sh = Bi('animationend'),
    ch = Bi('animationiteration'),
    oh = Bi('animationstart'),
    M1 = Bi('transitionrun'),
    R1 = Bi('transitionstart'),
    B1 = Bi('transitioncancel'),
    fh = Bi('transitionend'),
    dh = new Map(),
    hh =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' '
      );
  function tn(e, t) {
    dh.set(e, t), kr(t, [e]);
  }
  var zr = [],
    pa = 0,
    jc = 0;
  function Ru() {
    for (var e = pa, t = (jc = pa = 0); t < e; ) {
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
      o !== 0 && mh(n, c, o);
    }
  }
  function Bu(e, t, n, l) {
    (zr[pa++] = e),
      (zr[pa++] = t),
      (zr[pa++] = n),
      (zr[pa++] = l),
      (jc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function kc(e, t, n, l) {
    return Bu(e, t, n, l), Cu(e);
  }
  function Wn(e, t) {
    return Bu(e, null, null, t), Cu(e);
  }
  function mh(e, t, n) {
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
  function Cu(e) {
    if (50 < Ol) throw ((Ol = 0), (Fo = null), Error(u(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ga = {},
    ph = new WeakMap();
  function Hr(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = ph.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: $(t) }), ph.set(e, t), t);
    }
    return { value: e, source: t, stack: $(t) };
  }
  var ya = [],
    va = 0,
    Du = null,
    Uu = 0,
    Vr = [],
    Fr = 0,
    Ci = null,
    Nn = 1,
    _n = '';
  function Di(e, t) {
    (ya[va++] = Uu), (ya[va++] = Du), (Du = e), (Uu = t);
  }
  function gh(e, t, n) {
    (Vr[Fr++] = Nn), (Vr[Fr++] = _n), (Vr[Fr++] = Ci), (Ci = e);
    var l = Nn;
    e = _n;
    var c = 32 - Ie(l) - 1;
    (l &= ~(1 << c)), (n += 1);
    var o = 32 - Ie(t) + c;
    if (30 < o) {
      var x = c - (c % 5);
      (o = (l & ((1 << x) - 1)).toString(32)),
        (l >>= x),
        (c -= x),
        (Nn = (1 << (32 - Ie(t) + c)) | (n << c) | l),
        (_n = o + e);
    } else (Nn = (1 << o) | (n << c) | l), (_n = e);
  }
  function Ic(e) {
    e.return !== null && (Di(e, 1), gh(e, 1, 0));
  }
  function qc(e) {
    for (; e === Du; ) (Du = ya[--va]), (ya[va] = null), (Uu = ya[--va]), (ya[va] = null);
    for (; e === Ci; )
      (Ci = Vr[--Fr]), (Vr[Fr] = null), (_n = Vr[--Fr]), (Vr[Fr] = null), (Nn = Vr[--Fr]), (Vr[Fr] = null);
  }
  var mr = null,
    rr = null,
    bt = !1,
    rn = null,
    dn = !1,
    Lc = Error(u(519));
  function Ui(e) {
    var t = Error(u(418, ''));
    throw (ll(Hr(t, e)), Lc);
  }
  function yh(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[dt] = e), (t[lr] = l), n)) {
      case 'dialog':
        gt('cancel', t), gt('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        gt('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Rl.length; n++) gt(Rl[n], t);
        break;
      case 'source':
        gt('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        gt('error', t), gt('load', t);
        break;
      case 'details':
        gt('toggle', t);
        break;
      case 'input':
        gt('invalid', t), Cd(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), xu(t);
        break;
      case 'select':
        gt('invalid', t);
        break;
      case 'textarea':
        gt('invalid', t), Ud(t, l.value, l.defaultValue, l.children), xu(t);
    }
    (n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      _m(t.textContent, n)
        ? (l.popover != null && (gt('beforetoggle', t), gt('toggle', t)),
          l.onScroll != null && gt('scroll', t),
          l.onScrollEnd != null && gt('scrollend', t),
          l.onClick != null && (t.onclick = ds),
          (t = !0))
        : (t = !1),
      t || Ui(e);
  }
  function vh(e) {
    for (mr = e.return; mr; )
      switch (mr.tag) {
        case 3:
        case 27:
          dn = !0;
          return;
        case 5:
        case 13:
          dn = !1;
          return;
        default:
          mr = mr.return;
      }
  }
  function il(e) {
    if (e !== mr) return !1;
    if (!bt) return vh(e), (bt = !0), !1;
    var t = !1,
      n;
    if (
      ((n = e.tag !== 3 && e.tag !== 27) &&
        ((n = e.tag === 5) && ((n = e.type), (n = !(n !== 'form' && n !== 'button') || uf(e.type, e.memoizedProps))),
        (n = !n)),
      n && (t = !0),
      t && rr && Ui(e),
      vh(e),
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
    } else rr = mr ? an(e.stateNode.nextSibling) : null;
    return !0;
  }
  function al() {
    (rr = mr = null), (bt = !1);
  }
  function ll(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  var ul = Error(u(460)),
    bh = Error(u(474)),
    zc = { then: function () {} };
  function Sh(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function ju() {}
  function xh(e, t, n) {
    switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(ju, ju), (t = n)), t.status)) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), e === ul ? Error(u(483)) : e);
      default:
        if (typeof t.status == 'string') t.then(ju, ju);
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
            throw ((e = t.reason), e === ul ? Error(u(483)) : e);
        }
        throw ((sl = t), ul);
    }
  }
  var sl = null;
  function wh() {
    if (sl === null) throw Error(u(459));
    var e = sl;
    return (sl = null), e;
  }
  var ba = null,
    cl = 0;
  function ku(e) {
    var t = cl;
    return (cl += 1), ba === null && (ba = []), xh(ba, e, t);
  }
  function ol(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Iu(e, t) {
    throw t.$$typeof === f
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(u(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
  }
  function Eh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ah(e) {
    function t(pe, ce) {
      if (e) {
        var ge = pe.deletions;
        ge === null ? ((pe.deletions = [ce]), (pe.flags |= 16)) : ge.push(ce);
      }
    }
    function n(pe, ce) {
      if (!e) return null;
      for (; ce !== null; ) t(pe, ce), (ce = ce.sibling);
      return null;
    }
    function l(pe) {
      for (var ce = new Map(); pe !== null; )
        pe.key !== null ? ce.set(pe.key, pe) : ce.set(pe.index, pe), (pe = pe.sibling);
      return ce;
    }
    function c(pe, ce) {
      return (pe = fi(pe, ce)), (pe.index = 0), (pe.sibling = null), pe;
    }
    function o(pe, ce, ge) {
      return (
        (pe.index = ge),
        e
          ? ((ge = pe.alternate),
            ge !== null ? ((ge = ge.index), ge < ce ? ((pe.flags |= 33554434), ce) : ge) : ((pe.flags |= 33554434), ce))
          : ((pe.flags |= 1048576), ce)
      );
    }
    function x(pe) {
      return e && pe.alternate === null && (pe.flags |= 33554434), pe;
    }
    function C(pe, ce, ge, Oe) {
      return ce === null || ce.tag !== 6
        ? ((ce = jo(ge, pe.mode, Oe)), (ce.return = pe), ce)
        : ((ce = c(ce, ge)), (ce.return = pe), ce);
    }
    function K(pe, ce, ge, Oe) {
      var Ke = ge.type;
      return Ke === p
        ? _e(pe, ce, ge.props.children, Oe, ge.key)
        : ce !== null &&
            (ce.elementType === Ke || (typeof Ke == 'object' && Ke !== null && Ke.$$typeof === H && Eh(Ke) === ce.type))
          ? ((ce = c(ce, ge.props)), ol(ce, ge), (ce.return = pe), ce)
          : ((ce = ts(ge.type, ge.key, ge.props, null, pe.mode, Oe)), ol(ce, ge), (ce.return = pe), ce);
    }
    function fe(pe, ce, ge, Oe) {
      return ce === null ||
        ce.tag !== 4 ||
        ce.stateNode.containerInfo !== ge.containerInfo ||
        ce.stateNode.implementation !== ge.implementation
        ? ((ce = ko(ge, pe.mode, Oe)), (ce.return = pe), ce)
        : ((ce = c(ce, ge.children || [])), (ce.return = pe), ce);
    }
    function _e(pe, ce, ge, Oe, Ke) {
      return ce === null || ce.tag !== 7
        ? ((ce = Gi(ge, pe.mode, Oe, Ke)), (ce.return = pe), ce)
        : ((ce = c(ce, ge)), (ce.return = pe), ce);
    }
    function Be(pe, ce, ge) {
      if ((typeof ce == 'string' && ce !== '') || typeof ce == 'number' || typeof ce == 'bigint')
        return (ce = jo('' + ce, pe.mode, ge)), (ce.return = pe), ce;
      if (typeof ce == 'object' && ce !== null) {
        switch (ce.$$typeof) {
          case d:
            return (ge = ts(ce.type, ce.key, ce.props, null, pe.mode, ge)), ol(ge, ce), (ge.return = pe), ge;
          case h:
            return (ce = ko(ce, pe.mode, ge)), (ce.return = pe), ce;
          case H:
            var Oe = ce._init;
            return (ce = Oe(ce._payload)), Be(pe, ce, ge);
        }
        if (ye(ce) || he(ce)) return (ce = Gi(ce, pe.mode, ge, null)), (ce.return = pe), ce;
        if (typeof ce.then == 'function') return Be(pe, ku(ce), ge);
        if (ce.$$typeof === w) return Be(pe, Ju(pe, ce), ge);
        Iu(pe, ce);
      }
      return null;
    }
    function be(pe, ce, ge, Oe) {
      var Ke = ce !== null ? ce.key : null;
      if ((typeof ge == 'string' && ge !== '') || typeof ge == 'number' || typeof ge == 'bigint')
        return Ke !== null ? null : C(pe, ce, '' + ge, Oe);
      if (typeof ge == 'object' && ge !== null) {
        switch (ge.$$typeof) {
          case d:
            return ge.key === Ke ? K(pe, ce, ge, Oe) : null;
          case h:
            return ge.key === Ke ? fe(pe, ce, ge, Oe) : null;
          case H:
            return (Ke = ge._init), (ge = Ke(ge._payload)), be(pe, ce, ge, Oe);
        }
        if (ye(ge) || he(ge)) return Ke !== null ? null : _e(pe, ce, ge, Oe, null);
        if (typeof ge.then == 'function') return be(pe, ce, ku(ge), Oe);
        if (ge.$$typeof === w) return be(pe, ce, Ju(pe, ge), Oe);
        Iu(pe, ge);
      }
      return null;
    }
    function Ne(pe, ce, ge, Oe, Ke) {
      if ((typeof Oe == 'string' && Oe !== '') || typeof Oe == 'number' || typeof Oe == 'bigint')
        return (pe = pe.get(ge) || null), C(ce, pe, '' + Oe, Ke);
      if (typeof Oe == 'object' && Oe !== null) {
        switch (Oe.$$typeof) {
          case d:
            return (pe = pe.get(Oe.key === null ? ge : Oe.key) || null), K(ce, pe, Oe, Ke);
          case h:
            return (pe = pe.get(Oe.key === null ? ge : Oe.key) || null), fe(ce, pe, Oe, Ke);
          case H:
            var ft = Oe._init;
            return (Oe = ft(Oe._payload)), Ne(pe, ce, ge, Oe, Ke);
        }
        if (ye(Oe) || he(Oe)) return (pe = pe.get(ge) || null), _e(ce, pe, Oe, Ke, null);
        if (typeof Oe.then == 'function') return Ne(pe, ce, ge, ku(Oe), Ke);
        if (Oe.$$typeof === w) return Ne(pe, ce, ge, Ju(ce, Oe), Ke);
        Iu(ce, Oe);
      }
      return null;
    }
    function Ze(pe, ce, ge, Oe) {
      for (var Ke = null, ft = null, Qe = ce, tt = (ce = 0), tr = null; Qe !== null && tt < ge.length; tt++) {
        Qe.index > tt ? ((tr = Qe), (Qe = null)) : (tr = Qe.sibling);
        var St = be(pe, Qe, ge[tt], Oe);
        if (St === null) {
          Qe === null && (Qe = tr);
          break;
        }
        e && Qe && St.alternate === null && t(pe, Qe),
          (ce = o(St, ce, tt)),
          ft === null ? (Ke = St) : (ft.sibling = St),
          (ft = St),
          (Qe = tr);
      }
      if (tt === ge.length) return n(pe, Qe), bt && Di(pe, tt), Ke;
      if (Qe === null) {
        for (; tt < ge.length; tt++)
          (Qe = Be(pe, ge[tt], Oe)),
            Qe !== null && ((ce = o(Qe, ce, tt)), ft === null ? (Ke = Qe) : (ft.sibling = Qe), (ft = Qe));
        return bt && Di(pe, tt), Ke;
      }
      for (Qe = l(Qe); tt < ge.length; tt++)
        (tr = Ne(Qe, pe, tt, ge[tt], Oe)),
          tr !== null &&
            (e && tr.alternate !== null && Qe.delete(tr.key === null ? tt : tr.key),
            (ce = o(tr, ce, tt)),
            ft === null ? (Ke = tr) : (ft.sibling = tr),
            (ft = tr));
      return (
        e &&
          Qe.forEach(function (vi) {
            return t(pe, vi);
          }),
        bt && Di(pe, tt),
        Ke
      );
    }
    function nt(pe, ce, ge, Oe) {
      if (ge == null) throw Error(u(151));
      for (
        var Ke = null, ft = null, Qe = ce, tt = (ce = 0), tr = null, St = ge.next();
        Qe !== null && !St.done;
        tt++, St = ge.next()
      ) {
        Qe.index > tt ? ((tr = Qe), (Qe = null)) : (tr = Qe.sibling);
        var vi = be(pe, Qe, St.value, Oe);
        if (vi === null) {
          Qe === null && (Qe = tr);
          break;
        }
        e && Qe && vi.alternate === null && t(pe, Qe),
          (ce = o(vi, ce, tt)),
          ft === null ? (Ke = vi) : (ft.sibling = vi),
          (ft = vi),
          (Qe = tr);
      }
      if (St.done) return n(pe, Qe), bt && Di(pe, tt), Ke;
      if (Qe === null) {
        for (; !St.done; tt++, St = ge.next())
          (St = Be(pe, St.value, Oe)),
            St !== null && ((ce = o(St, ce, tt)), ft === null ? (Ke = St) : (ft.sibling = St), (ft = St));
        return bt && Di(pe, tt), Ke;
      }
      for (Qe = l(Qe); !St.done; tt++, St = ge.next())
        (St = Ne(Qe, pe, tt, St.value, Oe)),
          St !== null &&
            (e && St.alternate !== null && Qe.delete(St.key === null ? tt : St.key),
            (ce = o(St, ce, tt)),
            ft === null ? (Ke = St) : (ft.sibling = St),
            (ft = St));
      return (
        e &&
          Qe.forEach(function ($v) {
            return t(pe, $v);
          }),
        bt && Di(pe, tt),
        Ke
      );
    }
    function Vt(pe, ce, ge, Oe) {
      if (
        (typeof ge == 'object' && ge !== null && ge.type === p && ge.key === null && (ge = ge.props.children),
        typeof ge == 'object' && ge !== null)
      ) {
        switch (ge.$$typeof) {
          case d:
            e: {
              for (var Ke = ge.key; ce !== null; ) {
                if (ce.key === Ke) {
                  if (((Ke = ge.type), Ke === p)) {
                    if (ce.tag === 7) {
                      n(pe, ce.sibling), (Oe = c(ce, ge.props.children)), (Oe.return = pe), (pe = Oe);
                      break e;
                    }
                  } else if (
                    ce.elementType === Ke ||
                    (typeof Ke == 'object' && Ke !== null && Ke.$$typeof === H && Eh(Ke) === ce.type)
                  ) {
                    n(pe, ce.sibling), (Oe = c(ce, ge.props)), ol(Oe, ge), (Oe.return = pe), (pe = Oe);
                    break e;
                  }
                  n(pe, ce);
                  break;
                } else t(pe, ce);
                ce = ce.sibling;
              }
              ge.type === p
                ? ((Oe = Gi(ge.props.children, pe.mode, Oe, ge.key)), (Oe.return = pe), (pe = Oe))
                : ((Oe = ts(ge.type, ge.key, ge.props, null, pe.mode, Oe)), ol(Oe, ge), (Oe.return = pe), (pe = Oe));
            }
            return x(pe);
          case h:
            e: {
              for (Ke = ge.key; ce !== null; ) {
                if (ce.key === Ke)
                  if (
                    ce.tag === 4 &&
                    ce.stateNode.containerInfo === ge.containerInfo &&
                    ce.stateNode.implementation === ge.implementation
                  ) {
                    n(pe, ce.sibling), (Oe = c(ce, ge.children || [])), (Oe.return = pe), (pe = Oe);
                    break e;
                  } else {
                    n(pe, ce);
                    break;
                  }
                else t(pe, ce);
                ce = ce.sibling;
              }
              (Oe = ko(ge, pe.mode, Oe)), (Oe.return = pe), (pe = Oe);
            }
            return x(pe);
          case H:
            return (Ke = ge._init), (ge = Ke(ge._payload)), Vt(pe, ce, ge, Oe);
        }
        if (ye(ge)) return Ze(pe, ce, ge, Oe);
        if (he(ge)) {
          if (((Ke = he(ge)), typeof Ke != 'function')) throw Error(u(150));
          return (ge = Ke.call(ge)), nt(pe, ce, ge, Oe);
        }
        if (typeof ge.then == 'function') return Vt(pe, ce, ku(ge), Oe);
        if (ge.$$typeof === w) return Vt(pe, ce, Ju(pe, ge), Oe);
        Iu(pe, ge);
      }
      return (typeof ge == 'string' && ge !== '') || typeof ge == 'number' || typeof ge == 'bigint'
        ? ((ge = '' + ge),
          ce !== null && ce.tag === 6
            ? (n(pe, ce.sibling), (Oe = c(ce, ge)), (Oe.return = pe), (pe = Oe))
            : (n(pe, ce), (Oe = jo(ge, pe.mode, Oe)), (Oe.return = pe), (pe = Oe)),
          x(pe))
        : n(pe, ce);
    }
    return function (pe, ce, ge, Oe) {
      try {
        cl = 0;
        var Ke = Vt(pe, ce, ge, Oe);
        return (ba = null), Ke;
      } catch (Qe) {
        if (Qe === ul) throw Qe;
        var ft = Xr(29, Qe, null, pe.mode);
        return (ft.lanes = Oe), (ft.return = pe), ft;
      } finally {
      }
    };
  }
  var ji = Ah(!0),
    Nh = Ah(!1),
    Sa = Re(null),
    qu = Re(0);
  function _h(e, t) {
    (e = In), B(qu, e), B(Sa, t), (In = e | t.baseLanes);
  }
  function Hc() {
    B(qu, In), B(Sa, Sa.current);
  }
  function Vc() {
    (In = qu.current), ke(Sa), ke(qu);
  }
  var Gr = Re(null),
    hn = null;
  function ei(e) {
    var t = e.alternate;
    B(Qt, Qt.current & 1),
      B(Gr, e),
      hn === null && (t === null || Sa.current !== null || t.memoizedState !== null) && (hn = e);
  }
  function Th(e) {
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
  var Qt = Re(0);
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
    Pt = { $$typeof: w, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Fc() {
    return { controller: new C1(), data: new Map(), refCount: 0 };
  }
  function fl(e) {
    e.refCount--,
      e.refCount === 0 &&
        D1(U1, function () {
          e.controller.abort();
        });
  }
  var dl = null,
    Gc = 0,
    xa = 0,
    wa = null;
  function j1(e, t) {
    if (dl === null) {
      var n = (dl = []);
      (Gc = 0),
        (xa = Po()),
        (wa = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          }
        });
    }
    return Gc++, t.then(Oh, Oh), t;
  }
  function Oh() {
    if (--Gc === 0 && dl !== null) {
      wa !== null && (wa.status = 'fulfilled');
      var e = dl;
      (dl = null), (xa = 0), (wa = null);
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
  var Mh = A.S;
  A.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && j1(e, t), Mh !== null && Mh(e, t);
  };
  var ki = Re(null);
  function $c() {
    var e = ki.current;
    return e !== null ? e : Ot.pooledCache;
  }
  function zu(e, t) {
    t === null ? B(ki, ki.current) : B(ki, t.pool);
  }
  function Rh() {
    var e = $c();
    return e === null ? null : { parent: Pt._currentValue, pool: e };
  }
  var ri = 0,
    ct = null,
    Et = null,
    Xt = null,
    Hu = !1,
    Ea = !1,
    Ii = !1,
    Vu = 0,
    hl = 0,
    Aa = null,
    I1 = 0;
  function Ft() {
    throw Error(u(321));
  }
  function Yc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Tr(e[n], t[n])) return !1;
    return !0;
  }
  function Xc(e, t, n, l, c, o) {
    return (
      (ri = o),
      (ct = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? qi : ni),
      (Ii = !1),
      (o = n(l, c)),
      (Ii = !1),
      Ea && (o = Ch(t, n, l, c)),
      Bh(e),
      o
    );
  }
  function Bh(e) {
    A.H = mn;
    var t = Et !== null && Et.next !== null;
    if (((ri = 0), (Xt = Et = ct = null), (Hu = !1), (hl = 0), (Aa = null), t)) throw Error(u(300));
    e === null || Wt || ((e = e.dependencies), e !== null && Pu(e) && (Wt = !0));
  }
  function Ch(e, t, n, l) {
    ct = e;
    var c = 0;
    do {
      if ((Ea && (Aa = null), (hl = 0), (Ea = !1), 25 <= c)) throw Error(u(301));
      if (((c += 1), (Xt = Et = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        (o.lastEffect = null), (o.events = null), (o.stores = null), o.memoCache != null && (o.memoCache.index = 0);
      }
      (A.H = Li), (o = t(n, l));
    } while (Ea);
    return o;
  }
  function q1() {
    var e = A.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ml(t) : t),
      (e = e.useState()[0]),
      (Et !== null ? Et.memoizedState : null) !== e && (ct.flags |= 1024),
      t
    );
  }
  function Kc() {
    var e = Vu !== 0;
    return (Vu = 0), e;
  }
  function Zc(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Qc(e) {
    if (Hu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Hu = !1;
    }
    (ri = 0), (Xt = Et = ct = null), (Ea = !1), (hl = Vu = 0), (Aa = null);
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
  function ml(e) {
    var t = hl;
    return (
      (hl += 1),
      Aa === null && (Aa = []),
      (e = xh(Aa, e, t)),
      (t = ct),
      (Xt === null ? t.memoizedState : Xt.next) === null &&
        ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? qi : ni)),
      e
    );
  }
  function Gu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ml(e);
      if (e.$$typeof === w) return ur(e);
    }
    throw Error(u(438, String(e)));
  }
  function Pc(e) {
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
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = Le;
    return t.index++, n;
  }
  function On(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function $u(e) {
    var t = Kt();
    return Jc(t, Et, e);
  }
  function Jc(e, t, n) {
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
        var Be = fe.lane & -536870913;
        if (Be !== fe.lane ? (yt & Be) === Be : (ri & Be) === Be) {
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
              Be === xa && (_e = !0);
          else if ((ri & be) === be) {
            (fe = fe.next), be === xa && (_e = !0);
            continue;
          } else
            (Be = {
              lane: 0,
              revertLane: fe.revertLane,
              action: fe.action,
              hasEagerState: fe.hasEagerState,
              eagerState: fe.eagerState,
              next: null
            }),
              K === null ? ((C = K = Be), (x = o)) : (K = K.next = Be),
              (ct.lanes |= be),
              (di |= be);
          (Be = fe.action), Ii && n(o, Be), (o = fe.hasEagerState ? fe.eagerState : n(o, Be));
        } else
          (be = {
            lane: Be,
            revertLane: fe.revertLane,
            action: fe.action,
            hasEagerState: fe.hasEagerState,
            eagerState: fe.eagerState,
            next: null
          }),
            K === null ? ((C = K = be), (x = o)) : (K = K.next = be),
            (ct.lanes |= Be),
            (di |= Be);
        fe = fe.next;
      } while (fe !== null && fe !== t);
      if ((K === null ? (x = o) : (K.next = C), !Tr(o, e.memoizedState) && ((Wt = !0), _e && ((n = wa), n !== null))))
        throw n;
      (e.memoizedState = o), (e.baseState = x), (e.baseQueue = K), (l.lastRenderedState = o);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Wc(e) {
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
  function Dh(e, t, n) {
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
      ro(kh.bind(null, l, c, e), [e]),
      c.getSnapshot !== t || x || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), Na(9, jh.bind(null, l, c, n, t), { destroy: void 0 }, null), Ot === null))
        throw Error(u(349));
      o || (ri & 60) !== 0 || Uh(l, t, n);
    }
    return n;
  }
  function Uh(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ct.updateQueue),
      t === null
        ? ((t = Fu()), (ct.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function jh(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), Ih(t) && qh(e);
  }
  function kh(e, t, n) {
    return n(function () {
      Ih(t) && qh(e);
    });
  }
  function Ih(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Tr(e, n);
    } catch {
      return !0;
    }
  }
  function qh(e) {
    var t = Wn(e, 2);
    t !== null && pr(t, e, 2);
  }
  function eo(e) {
    var t = br();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Ii)) {
        Ue(!0);
        try {
          n();
        } finally {
          Ue(!1);
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
    return (e.baseState = n), Jc(e, Et, typeof l == 'function' ? l : On);
  }
  function L1(e, t, n, l, c) {
    if (Ku(e)) throw Error(u(485));
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
      A.T !== null ? n(!0) : (o.isTransition = !1),
        l(o),
        (n = t.pending),
        n === null ? ((o.next = t.pending = o), zh(t, o)) : ((o.next = n.next), (t.pending = n.next = o));
    }
  }
  function zh(e, t) {
    var n = t.action,
      l = t.payload,
      c = e.state;
    if (t.isTransition) {
      var o = A.T,
        x = {};
      A.T = x;
      try {
        var C = n(c, l),
          K = A.S;
        K !== null && K(x, C), Hh(e, t, C);
      } catch (fe) {
        to(e, t, fe);
      } finally {
        A.T = o;
      }
    } else
      try {
        (o = n(c, l)), Hh(e, t, o);
      } catch (fe) {
        to(e, t, fe);
      }
  }
  function Hh(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            Vh(e, t, l);
          },
          function (l) {
            return to(e, t, l);
          }
        )
      : Vh(e, t, n);
  }
  function Vh(e, t, n) {
    (t.status = 'fulfilled'),
      (t.value = n),
      Fh(t),
      (e.state = n),
      (t = e.pending),
      t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), zh(e, n)));
  }
  function to(e, t, n) {
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
  function Gh(e, t) {
    return t;
  }
  function $h(e, t) {
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
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Gh, lastRenderedState: t }),
      (n.queue = l),
      (n = c0.bind(null, ct, l)),
      (l.dispatch = n),
      (l = eo(!1)),
      (o = uo.bind(null, ct, !1, l.queue)),
      (l = br()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (n = L1.bind(null, ct, c, o, n)),
      (c.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Yh(e) {
    var t = Kt();
    return Xh(t, Et, e);
  }
  function Xh(e, t, n) {
    (t = Jc(e, t, Gh)[0]),
      (e = $u(On)[0]),
      (t = typeof t == 'object' && t !== null && typeof t.then == 'function' ? ml(t) : t);
    var l = Kt(),
      c = l.queue,
      o = c.dispatch;
    return (
      n !== l.memoizedState && ((ct.flags |= 2048), Na(9, z1.bind(null, c, n), { destroy: void 0 }, null)), [t, o, e]
    );
  }
  function z1(e, t) {
    e.action = t;
  }
  function Kh(e) {
    var t = Kt(),
      n = Et;
    if (n !== null) return Xh(t, n, e);
    Kt(), (t = t.memoizedState), (n = Kt());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function Na(e, t, n, l) {
    return (
      (e = { tag: e, create: t, inst: n, deps: l, next: null }),
      (t = ct.updateQueue),
      t === null && ((t = Fu()), (ct.updateQueue = t)),
      (n = t.lastEffect),
      n === null ? (t.lastEffect = e.next = e) : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Zh() {
    return Kt().memoizedState;
  }
  function Yu(e, t, n, l) {
    var c = br();
    (ct.flags |= e), (c.memoizedState = Na(1 | t, n, { destroy: void 0 }, l === void 0 ? null : l));
  }
  function Xu(e, t, n, l) {
    var c = Kt();
    l = l === void 0 ? null : l;
    var o = c.memoizedState.inst;
    Et !== null && l !== null && Yc(l, Et.memoizedState.deps)
      ? (c.memoizedState = Na(t, n, o, l))
      : ((ct.flags |= e), (c.memoizedState = Na(1 | t, n, o, l)));
  }
  function Qh(e, t) {
    Yu(8390656, 8, e, t);
  }
  function ro(e, t) {
    Xu(2048, 8, e, t);
  }
  function Ph(e, t) {
    return Xu(4, 2, e, t);
  }
  function Jh(e, t) {
    return Xu(4, 4, e, t);
  }
  function Wh(e, t) {
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
  function e0(e, t, n) {
    (n = n != null ? n.concat([e]) : null), Xu(4, 4, Wh.bind(null, t, e), n);
  }
  function no() {}
  function t0(e, t) {
    var n = Kt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Yc(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function r0(e, t) {
    var n = Kt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Yc(t, l[1])) return l[0];
    if (((l = e()), Ii)) {
      Ue(!0);
      try {
        e();
      } finally {
        Ue(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function io(e, t, n) {
    return n === void 0 || (ri & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = im()), (ct.lanes |= e), (di |= e), n);
  }
  function n0(e, t, n, l) {
    return Tr(n, t)
      ? n
      : Sa.current !== null
        ? ((e = io(e, n, l)), Tr(e, t) || (Wt = !0), e)
        : (ri & 42) === 0
          ? ((Wt = !0), (e.memoizedState = n))
          : ((e = im()), (ct.lanes |= e), (di |= e), t);
  }
  function i0(e, t, n, l, c) {
    var o = O.p;
    O.p = o !== 0 && 8 > o ? o : 8;
    var x = A.T,
      C = {};
    (A.T = C), uo(e, !1, t, n);
    try {
      var K = c(),
        fe = A.S;
      if ((fe !== null && fe(C, K), K !== null && typeof K == 'object' && typeof K.then == 'function')) {
        var _e = k1(K, l);
        pl(e, t, _e, Br(e));
      } else pl(e, t, l, Br(e));
    } catch (Be) {
      pl(e, t, { then: function () {}, status: 'rejected', reason: Be }, Br());
    } finally {
      (O.p = o), (A.T = x);
    }
  }
  function H1() {}
  function ao(e, t, n, l) {
    if (e.tag !== 5) throw Error(u(476));
    var c = a0(e).queue;
    i0(
      e,
      c,
      t,
      je,
      n === null
        ? H1
        : function () {
            return l0(e), n(l);
          }
    );
  }
  function a0(e) {
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
  function l0(e) {
    var t = a0(e).next.queue;
    pl(e, t, {}, Br());
  }
  function lo() {
    return ur(jl);
  }
  function u0() {
    return Kt().memoizedState;
  }
  function s0() {
    return Kt().memoizedState;
  }
  function V1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Br();
          e = li(n);
          var l = ui(t, e, n);
          l !== null && (pr(l, t, n), vl(l, t, n)), (t = { cache: Fc() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function F1(e, t, n) {
    var l = Br();
    (n = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
      Ku(e) ? o0(t, n) : ((n = kc(e, t, n, l)), n !== null && (pr(n, e, l), f0(n, t, l)));
  }
  function c0(e, t, n) {
    var l = Br();
    pl(e, t, n, l);
  }
  function pl(e, t, n, l) {
    var c = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ku(e)) o0(t, c);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
        try {
          var x = t.lastRenderedState,
            C = o(x, n);
          if (((c.hasEagerState = !0), (c.eagerState = C), Tr(C, x))) return Bu(e, t, c, 0), Ot === null && Ru(), !1;
        } catch {
        } finally {
        }
      if (((n = kc(e, t, c, l)), n !== null)) return pr(n, e, l), f0(n, t, l), !0;
    }
    return !1;
  }
  function uo(e, t, n, l) {
    if (((l = { lane: 2, revertLane: Po(), action: l, hasEagerState: !1, eagerState: null, next: null }), Ku(e))) {
      if (t) throw Error(u(479));
    } else (t = kc(e, n, l, 2)), t !== null && pr(t, e, 2);
  }
  function Ku(e) {
    var t = e.alternate;
    return e === ct || (t !== null && t === ct);
  }
  function o0(e, t) {
    Ea = Hu = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function f0(e, t, n) {
    if ((n & 4194176) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), dc(e, n);
    }
  }
  var mn = {
    readContext: ur,
    use: Gu,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useLayoutEffect: Ft,
    useInsertionEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useSyncExternalStore: Ft,
    useId: Ft
  };
  (mn.useCacheRefresh = Ft),
    (mn.useMemoCache = Ft),
    (mn.useHostTransitionStatus = Ft),
    (mn.useFormState = Ft),
    (mn.useActionState = Ft),
    (mn.useOptimistic = Ft);
  var qi = {
    readContext: ur,
    use: Gu,
    useCallback: function (e, t) {
      return (br().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ur,
    useEffect: Qh,
    useImperativeHandle: function (e, t, n) {
      (n = n != null ? n.concat([e]) : null), Yu(4194308, 4, Wh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Yu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Yu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = br();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ii) {
        Ue(!0);
        try {
          e();
        } finally {
          Ue(!1);
        }
      }
      return (n.memoizedState = [l, t]), l;
    },
    useReducer: function (e, t, n) {
      var l = br();
      if (n !== void 0) {
        var c = n(t);
        if (Ii) {
          Ue(!0);
          try {
            n(t);
          } finally {
            Ue(!1);
          }
        }
      } else c = t;
      return (
        (l.memoizedState = l.baseState = c),
        (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: c }),
        (l.queue = e),
        (e = e.dispatch = F1.bind(null, ct, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = br();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = eo(e);
      var t = e.queue,
        n = c0.bind(null, ct, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: no,
    useDeferredValue: function (e, t) {
      var n = br();
      return io(n, e, t);
    },
    useTransition: function () {
      var e = eo(!1);
      return (e = i0.bind(null, ct, e.queue, !0, !1)), (br().memoizedState = e), [!1, e];
    },
    useSyncExternalStore: function (e, t, n) {
      var l = ct,
        c = br();
      if (bt) {
        if (n === void 0) throw Error(u(407));
        n = n();
      } else {
        if (((n = t()), Ot === null)) throw Error(u(349));
        (yt & 60) !== 0 || Uh(l, t, n);
      }
      c.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (c.queue = o),
        Qh(kh.bind(null, l, o, e), [e]),
        (l.flags |= 2048),
        Na(9, jh.bind(null, l, o, n, t), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var e = br(),
        t = Ot.identifierPrefix;
      if (bt) {
        var n = _n,
          l = Nn;
        (n = (l & ~(1 << (32 - Ie(l) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Vu++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = I1++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (br().memoizedState = V1.bind(null, ct));
    }
  };
  (qi.useMemoCache = Pc),
    (qi.useHostTransitionStatus = lo),
    (qi.useFormState = $h),
    (qi.useActionState = $h),
    (qi.useOptimistic = function (e) {
      var t = br();
      t.memoizedState = t.baseState = e;
      var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return (t.queue = n), (t = uo.bind(null, ct, !0, n)), (n.dispatch = t), [e, t];
    });
  var ni = {
    readContext: ur,
    use: Gu,
    useCallback: t0,
    useContext: ur,
    useEffect: ro,
    useImperativeHandle: e0,
    useInsertionEffect: Ph,
    useLayoutEffect: Jh,
    useMemo: r0,
    useReducer: $u,
    useRef: Zh,
    useState: function () {
      return $u(On);
    },
    useDebugValue: no,
    useDeferredValue: function (e, t) {
      var n = Kt();
      return n0(n, Et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = $u(On)[0],
        t = Kt().memoizedState;
      return [typeof e == 'boolean' ? e : ml(e), t];
    },
    useSyncExternalStore: Dh,
    useId: u0
  };
  (ni.useCacheRefresh = s0),
    (ni.useMemoCache = Pc),
    (ni.useHostTransitionStatus = lo),
    (ni.useFormState = Yh),
    (ni.useActionState = Yh),
    (ni.useOptimistic = function (e, t) {
      var n = Kt();
      return Lh(n, Et, e, t);
    });
  var Li = {
    readContext: ur,
    use: Gu,
    useCallback: t0,
    useContext: ur,
    useEffect: ro,
    useImperativeHandle: e0,
    useInsertionEffect: Ph,
    useLayoutEffect: Jh,
    useMemo: r0,
    useReducer: Wc,
    useRef: Zh,
    useState: function () {
      return Wc(On);
    },
    useDebugValue: no,
    useDeferredValue: function (e, t) {
      var n = Kt();
      return Et === null ? io(n, e, t) : n0(n, Et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Wc(On)[0],
        t = Kt().memoizedState;
      return [typeof e == 'boolean' ? e : ml(e), t];
    },
    useSyncExternalStore: Dh,
    useId: u0
  };
  (Li.useCacheRefresh = s0),
    (Li.useMemoCache = Pc),
    (Li.useHostTransitionStatus = lo),
    (Li.useFormState = Kh),
    (Li.useActionState = Kh),
    (Li.useOptimistic = function (e, t) {
      var n = Kt();
      return Et !== null ? Lh(n, Et, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    });
  function so(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : T({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var co = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? z(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Br(),
        c = li(l);
      (c.payload = t), n != null && (c.callback = n), (t = ui(e, c, l)), t !== null && (pr(t, e, l), vl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Br(),
        c = li(l);
      (c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = ui(e, c, l)),
        t !== null && (pr(t, e, l), vl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Br(),
        l = li(n);
      (l.tag = 2), t != null && (l.callback = t), (t = ui(e, l, n)), t !== null && (pr(t, e, n), vl(t, e, n));
    }
  };
  function d0(e, t, n, l, c, o, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, o, x)
        : t.prototype && t.prototype.isPureReactComponent
          ? !rl(n, l) || !rl(c, o)
          : !0
    );
  }
  function h0(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && co.enqueueReplaceState(t, t.state, null);
  }
  function zi(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = T({}, n));
      for (var c in e) n[c] === void 0 && (n[c] = e[c]);
    }
    return n;
  }
  var Zu =
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
  function m0(e) {
    Zu(e);
  }
  function p0(e) {
    console.error(e);
  }
  function g0(e) {
    Zu(e);
  }
  function Qu(e, t) {
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
  function oo(e, t, n) {
    return (
      (n = li(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Qu(e, t);
      }),
      n
    );
  }
  function v0(e) {
    return (e = li(e)), (e.tag = 3), e;
  }
  function b0(e, t, n, l) {
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
              hn === null ? Yo() : n.alternate === null && Ht === 0 && (Ht = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = c),
              l === zc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue), t === null ? (n.updateQueue = new Set([l])) : t.add(l), Ko(e, l, c)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === zc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Ko(e, l, c)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return Ko(e, l, c), Yo(), !1;
    }
    if (bt)
      return (
        (t = Gr.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            l !== Lc && ((e = Error(u(422), { cause: l })), ll(Hr(e, n))))
          : (l !== Lc && ((t = Error(u(423), { cause: l })), ll(Hr(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = Hr(l, n)),
            (c = oo(e.stateNode, l, c)),
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
          return (n.flags |= 65536), (e = c & -c), (n.lanes |= e), (e = oo(n.stateNode, l, e)), _o(n, e), !1;
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (o !== null && typeof o.componentDidCatch == 'function' && (hi === null || !hi.has(o)))))
          )
            return (n.flags |= 65536), (c &= -c), (n.lanes |= c), (c = v0(c)), b0(c, e, n, l), _o(n, c), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var S0 = Error(u(461)),
    Wt = !1;
  function nr(e, t, n, l) {
    t.child = e === null ? Nh(t, null, n, l) : ji(t, e.child, n, l);
  }
  function x0(e, t, n, l, c) {
    n = n.render;
    var o = t.ref;
    if ('ref' in l) {
      var x = {};
      for (var C in l) C !== 'ref' && (x[C] = l[C]);
    } else x = l;
    return (
      Vi(t),
      (l = Xc(e, t, n, x, o, c)),
      (C = Kc()),
      e !== null && !Wt ? (Zc(e, t, c), Mn(e, t, c)) : (bt && C && Ic(t), (t.flags |= 1), nr(e, t, l, c), t.child)
    );
  }
  function w0(e, t, n, l, c) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' && !Uo(o) && o.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = o), E0(e, t, o, l, c))
        : ((e = ts(n.type, null, l, t, t.mode, c)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), !So(e, c))) {
      var x = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : rl), n(x, l) && e.ref === t.ref)) return Mn(e, t, c);
    }
    return (t.flags |= 1), (e = fi(o, l)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function E0(e, t, n, l, c) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (rl(o, l) && e.ref === t.ref)
        if (((Wt = !1), (t.pendingProps = l = o), So(e, c))) (e.flags & 131072) !== 0 && (Wt = !0);
        else return (t.lanes = e.lanes), Mn(e, t, c);
    }
    return fo(e, t, n, l, c);
  }
  function A0(e, t, n) {
    var l = t.pendingProps,
      c = l.children,
      o = (t.stateNode._pendingVisibility & 2) !== 0,
      x = e !== null ? e.memoizedState : null;
    if ((gl(e, t), l.mode === 'hidden' || o)) {
      if ((t.flags & 128) !== 0) {
        if (((l = x !== null ? x.baseLanes | n : n), e !== null)) {
          for (c = t.child = e.child, o = 0; c !== null; ) (o = o | c.lanes | c.childLanes), (c = c.sibling);
          t.childLanes = o & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return N0(e, t, l, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && zu(t, x !== null ? x.cachePool : null),
          x !== null ? _h(t, x) : Hc(),
          Th(t);
      else return (t.lanes = t.childLanes = 536870912), N0(e, t, x !== null ? x.baseLanes | n : n, n);
    } else
      x !== null
        ? (zu(t, x.cachePool), _h(t, x), ti(), (t.memoizedState = null))
        : (e !== null && zu(t, null), Hc(), ti());
    return nr(e, t, c, n), t.child;
  }
  function N0(e, t, n, l) {
    var c = $c();
    return (
      (c = c === null ? null : { parent: Pt._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: n, cachePool: c }),
      e !== null && zu(t, null),
      Hc(),
      Th(t),
      e !== null && yl(e, t, l, !0),
      null
    );
  }
  function gl(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(u(284));
      (e === null || e.ref !== n) && (t.flags |= 2097664);
    }
  }
  function fo(e, t, n, l, c) {
    return (
      Vi(t),
      (n = Xc(e, t, n, l, void 0, c)),
      (l = Kc()),
      e !== null && !Wt ? (Zc(e, t, c), Mn(e, t, c)) : (bt && l && Ic(t), (t.flags |= 1), nr(e, t, n, c), t.child)
    );
  }
  function _0(e, t, n, l, c, o) {
    return (
      Vi(t),
      (t.updateQueue = null),
      (n = Ch(t, l, n, c)),
      Bh(e),
      (l = Kc()),
      e !== null && !Wt ? (Zc(e, t, o), Mn(e, t, o)) : (bt && l && Ic(t), (t.flags |= 1), nr(e, t, n, o), t.child)
    );
  }
  function T0(e, t, n, l, c) {
    if ((Vi(t), t.stateNode === null)) {
      var o = ga,
        x = n.contextType;
      typeof x == 'object' && x !== null && (o = ur(x)),
        (o = new n(l, o)),
        (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = co),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = l),
        (o.state = t.memoizedState),
        (o.refs = {}),
        Ao(t),
        (x = n.contextType),
        (o.context = typeof x == 'object' && x !== null ? ur(x) : ga),
        (o.state = t.memoizedState),
        (x = n.getDerivedStateFromProps),
        typeof x == 'function' && (so(t, n, x, l), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function' ||
          (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
          ((x = o.state),
          typeof o.componentWillMount == 'function' && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
          x !== o.state && co.enqueueReplaceState(o, o.state, null),
          Sl(t, l, o, c),
          bl(),
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
      (x = ga), typeof _e == 'object' && _e !== null && (x = ur(_e));
      var Be = n.getDerivedStateFromProps;
      (_e = typeof Be == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        _e ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((C || fe !== x) && h0(t, o, l, x)),
        (ai = !1);
      var be = t.memoizedState;
      (o.state = be),
        Sl(t, l, o, c),
        bl(),
        (fe = t.memoizedState),
        C || be !== fe || ai
          ? (typeof Be == 'function' && (so(t, n, Be, l), (fe = t.memoizedState)),
            (K = ai || d0(t, n, K, l, be, fe, x))
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
        No(e, t),
        (x = t.memoizedProps),
        (_e = zi(n, x)),
        (o.props = _e),
        (Be = t.pendingProps),
        (be = o.context),
        (fe = n.contextType),
        (K = ga),
        typeof fe == 'object' && fe !== null && (K = ur(fe)),
        (C = n.getDerivedStateFromProps),
        (fe = typeof C == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((x !== Be || be !== K) && h0(t, o, l, K)),
        (ai = !1),
        (be = t.memoizedState),
        (o.state = be),
        Sl(t, l, o, c),
        bl();
      var Ne = t.memoizedState;
      x !== Be || be !== Ne || ai || (e !== null && e.dependencies !== null && Pu(e.dependencies))
        ? (typeof C == 'function' && (so(t, n, C, l), (Ne = t.memoizedState)),
          (_e = ai || d0(t, n, _e, l, be, Ne, K) || (e !== null && e.dependencies !== null && Pu(e.dependencies)))
            ? (fe ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(l, Ne, K),
                typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(l, Ne, K)),
              typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (x === e.memoizedProps && be === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (x === e.memoizedProps && be === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = Ne)),
          (o.props = l),
          (o.state = Ne),
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
      gl(e, t),
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
  function O0(e, t, n, l) {
    return al(), (t.flags |= 256), nr(e, t, n, l), t.child;
  }
  var ho = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mo(e) {
    return { baseLanes: e, cachePool: Rh() };
  }
  function po(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Kr), e;
  }
  function M0(e, t, n) {
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
                  treeContext: Ci !== null ? { id: Nn, overflow: _n } : null,
                  retryLane: 536870912
                }),
                (K = Xr(18, null, null, 0)),
                (K.stateNode = C),
                (K.return = t),
                (t.child = K),
                (mr = t),
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
            (c.memoizedState = mo(n)),
            (c.childLanes = po(e, x, n)),
            (t.memoizedState = ho),
            l)
          : (ei(t), go(t, C))
      );
    }
    if (((K = e.memoizedState), K !== null && ((C = K.dehydrated), C !== null))) {
      if (o)
        t.flags & 256
          ? (ei(t), (t.flags &= -257), (t = vo(e, t, n)))
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
              (l.memoizedState = mo(n)),
              (l.childLanes = po(e, x, n)),
              (t.memoizedState = ho),
              (t = c));
      else if ((ei(t), C.data === '$!')) {
        if (((x = C.nextSibling && C.nextSibling.dataset), x)) var fe = x.dgst;
        (x = fe),
          (l = Error(u(419))),
          (l.stack = ''),
          (l.digest = x),
          ll({ value: l, source: null, stack: null }),
          (t = vo(e, t, n));
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
            throw ((K.retryLane = l), Wn(e, l), pr(x, e, l), S0);
        }
        C.data === '$?' || Yo(), (t = vo(e, t, n));
      } else
        C.data === '$?'
          ? ((t.flags |= 128), (t.child = e.child), (t = av.bind(null, e)), (C._reactRetry = t), (t = null))
          : ((e = K.treeContext),
            (rr = an(C.nextSibling)),
            (mr = t),
            (bt = !0),
            (rn = null),
            (dn = !1),
            e !== null && ((Vr[Fr++] = Nn), (Vr[Fr++] = _n), (Vr[Fr++] = Ci), (Nn = e.id), (_n = e.overflow), (Ci = t)),
            (t = go(t, l.children)),
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
          ? (C = mo(n))
          : ((K = C.cachePool),
            K !== null ? ((fe = Pt._currentValue), (K = K.parent !== fe ? { parent: fe, pool: fe } : K)) : (K = Rh()),
            (C = { baseLanes: C.baseLanes | n, cachePool: K })),
        (c.memoizedState = C),
        (c.childLanes = po(e, x, n)),
        (t.memoizedState = ho),
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
  function go(e, t) {
    return (t = yo({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function yo(e, t) {
    return tm(e, t, 0, null);
  }
  function vo(e, t, n) {
    return ji(t, e.child, null, n), (e = go(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
  }
  function R0(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), wo(e.return, t, n);
  }
  function bo(e, t, n, l, c) {
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
  function B0(e, t, n) {
    var l = t.pendingProps,
      c = l.revealOrder,
      o = l.tail;
    if ((nr(e, t, l.children, n), (l = Qt.current), (l & 2) !== 0)) (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && R0(e, n, t);
          else if (e.tag === 19) R0(e, n, t);
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
          bo(t, !1, c, n, o);
        break;
      case 'backwards':
        for (n = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Lu(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = n), (n = c), (c = e);
        }
        bo(t, !0, n, null, o);
        break;
      case 'together':
        bo(t, !1, null, null, void 0);
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
  function So(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Pu(e)));
  }
  function $1(e, t, n) {
    switch (t.tag) {
      case 3:
        ue(t, t.stateNode.containerInfo), ii(t, Pt, e.memoizedState.cache), al();
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
              ? M0(e, t, n)
              : (ei(t), (e = Mn(e, t, n)), e !== null ? e.sibling : null);
        ei(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (((l = (n & t.childLanes) !== 0), l || (yl(e, t, n, !1), (l = (n & t.childLanes) !== 0)), c)) {
          if (l) return B0(e, t, n);
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
        return (t.lanes = 0), A0(e, t, n);
      case 24:
        ii(t, Pt, e.memoizedState.cache);
    }
    return Mn(e, t, n);
  }
  function C0(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Wt = !0;
      else {
        if (!So(e, n) && (t.flags & 128) === 0) return (Wt = !1), $1(e, t, n);
        Wt = (e.flags & 131072) !== 0;
      }
    else (Wt = !1), bt && (t.flags & 1048576) !== 0 && gh(t, Uu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            c = l._init;
          if (((l = c(l._payload)), (t.type = l), typeof l == 'function'))
            Uo(l)
              ? ((e = zi(l, e)), (t.tag = 1), (t = T0(null, t, l, e, n)))
              : ((t.tag = 0), (t = fo(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === D)) {
                (t.tag = 11), (t = x0(null, t, l, e, n));
                break e;
              } else if (c === W) {
                (t.tag = 14), (t = w0(null, t, l, e, n));
                break e;
              }
            }
            throw ((t = b(l) || l), Error(u(306, t, '')));
          }
        }
        return t;
      case 0:
        return fo(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (c = zi(l, t.pendingProps)), T0(e, t, l, c, n);
      case 3:
        e: {
          if ((ue(t, t.stateNode.containerInfo), e === null)) throw Error(u(387));
          var o = t.pendingProps;
          (c = t.memoizedState), (l = c.element), No(e, t), Sl(t, o, null, n);
          var x = t.memoizedState;
          if (((o = x.cache), ii(t, Pt, o), o !== c.cache && Eo(t, [Pt], n, !0), bl(), (o = x.element), c.isDehydrated))
            if (
              ((c = { element: o, isDehydrated: !1, cache: x.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = O0(e, t, o, n);
              break e;
            } else if (o !== l) {
              (l = Hr(Error(u(424)), t)), ll(l), (t = O0(e, t, o, n));
              break e;
            } else
              for (
                rr = an(t.stateNode.containerInfo.firstChild),
                  mr = t,
                  bt = !0,
                  rn = null,
                  dn = !0,
                  n = Nh(t, null, o, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((al(), o === l)) {
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
          gl(e, t),
          e === null
            ? (n = jm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : bt ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = hs(se.current).createElement(n)),
                (l[dt] = t),
                (l[lr] = e),
                ir(l, n, e),
                Je(l),
                (t.stateNode = l))
            : (t.memoizedState = jm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          ae(t),
          e === null &&
            bt &&
            ((l = t.stateNode = Cm(t.type, t.pendingProps, se.current)), (mr = t), (dn = !0), (rr = an(l.firstChild))),
          (l = t.pendingProps.children),
          e !== null || bt ? nr(e, t, l, n) : (t.child = ji(t, null, l, n)),
          gl(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            bt &&
            ((c = l = rr) &&
              ((l = xv(l, t.type, t.pendingProps, dn)),
              l !== null ? ((t.stateNode = l), (mr = t), (rr = an(l.firstChild)), (dn = !1), (c = !0)) : (c = !1)),
            c || Ui(t)),
          ae(t),
          (c = t.type),
          (o = t.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (l = o.children),
          uf(c, o) ? (l = null) : x !== null && uf(c, x) && (t.flags |= 32),
          t.memoizedState !== null && ((c = Xc(e, t, q1, null, null, n)), (jl._currentValue = c)),
          gl(e, t),
          nr(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            bt &&
            ((e = n = rr) &&
              ((n = wv(n, t.pendingProps, dn)),
              n !== null ? ((t.stateNode = n), (mr = t), (rr = null), (e = !0)) : (e = !1)),
            e || Ui(t)),
          null
        );
      case 13:
        return M0(e, t, n);
      case 4:
        return (
          ue(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = ji(t, null, l, n)) : nr(e, t, l, n),
          t.child
        );
      case 11:
        return x0(e, t, t.type, t.pendingProps, n);
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
          Vi(t),
          (c = ur(c)),
          (l = l(c)),
          (t.flags |= 1),
          nr(e, t, l, n),
          t.child
        );
      case 14:
        return w0(e, t, t.type, t.pendingProps, n);
      case 15:
        return E0(e, t, t.type, t.pendingProps, n);
      case 19:
        return B0(e, t, n);
      case 22:
        return A0(e, t, n);
      case 24:
        return (
          Vi(t),
          (l = ur(Pt)),
          e === null
            ? ((c = $c()),
              c === null &&
                ((c = Ot),
                (o = Fc()),
                (c.pooledCache = o),
                o.refCount++,
                o !== null && (c.pooledCacheLanes |= n),
                (c = o)),
              (t.memoizedState = { parent: l, cache: c }),
              Ao(t),
              ii(t, Pt, c))
            : ((e.lanes & n) !== 0 && (No(e, t), Sl(t, null, null, n), bl()),
              (c = e.memoizedState),
              (o = t.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (t.memoizedState = c),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c),
                  ii(t, Pt, l))
                : ((l = o.cache), ii(t, Pt, l), l !== c.cache && Eo(t, [Pt], n, !0))),
          nr(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  var xo = Re(null),
    Hi = null,
    Rn = null;
  function ii(e, t, n) {
    B(xo, t._currentValue), (t._currentValue = n);
  }
  function Bn(e) {
    (e._currentValue = xo.current), ke(xo);
  }
  function wo(e, t, n) {
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
  function Eo(e, t, n, l) {
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
              (o.lanes |= n), (C = o.alternate), C !== null && (C.lanes |= n), wo(o.return, n, e), l || (x = null);
              break e;
            }
          o = C.next;
        }
      } else if (c.tag === 18) {
        if (((x = c.return), x === null)) throw Error(u(341));
        (x.lanes |= n), (o = x.alternate), o !== null && (o.lanes |= n), wo(x, n, e), (x = null);
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
        x.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(jl) : (e = [jl]));
      }
      c = c.return;
    }
    e !== null && Eo(t, e, n, l), (t.flags |= 262144);
  }
  function Pu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Tr(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Vi(e) {
    (Hi = e), (Rn = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function ur(e) {
    return D0(Hi, e);
  }
  function Ju(e, t) {
    return Hi === null && Vi(e), D0(e, t);
  }
  function D0(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Rn === null)) {
      if (e === null) throw Error(u(308));
      (Rn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else Rn = Rn.next = t;
    return n;
  }
  var ai = !1;
  function Ao(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function No(e, t) {
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
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)), (l.pending = t), (t = Cu(e)), mh(e, null, n), t
      );
    }
    return Bu(e, l, t, n), Cu(e);
  }
  function vl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), dc(e, n);
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
  var To = !1;
  function bl() {
    if (To) {
      var e = wa;
      if (e !== null) throw e;
    }
  }
  function Sl(e, t, n, l) {
    To = !1;
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
      var Be = c.baseState;
      (x = 0), (_e = fe = K = null), (C = o);
      do {
        var be = C.lane & -536870913,
          Ne = be !== C.lane;
        if (Ne ? (yt & be) === be : (l & be) === be) {
          be !== 0 && be === xa && (To = !0),
            _e !== null && (_e = _e.next = { lane: 0, tag: C.tag, payload: C.payload, callback: null, next: null });
          e: {
            var Ze = e,
              nt = C;
            be = t;
            var Vt = n;
            switch (nt.tag) {
              case 1:
                if (((Ze = nt.payload), typeof Ze == 'function')) {
                  Be = Ze.call(Vt, Be, be);
                  break e;
                }
                Be = Ze;
                break e;
              case 3:
                Ze.flags = (Ze.flags & -65537) | 128;
              case 0:
                if (((Ze = nt.payload), (be = typeof Ze == 'function' ? Ze.call(Vt, Be, be) : Ze), be == null)) break e;
                Be = T({}, Be, be);
                break e;
              case 2:
                ai = !0;
            }
          }
          (be = C.callback),
            be !== null &&
              ((e.flags |= 64),
              Ne && (e.flags |= 8192),
              (Ne = c.callbacks),
              Ne === null ? (c.callbacks = [be]) : Ne.push(be));
        } else
          (Ne = { lane: be, tag: C.tag, payload: C.payload, callback: C.callback, next: null }),
            _e === null ? ((fe = _e = Ne), (K = Be)) : (_e = _e.next = Ne),
            (x |= be);
        if (((C = C.next), C === null)) {
          if (((C = c.shared.pending), C === null)) break;
          (Ne = C), (C = Ne.next), (Ne.next = null), (c.lastBaseUpdate = Ne), (c.shared.pending = null);
        }
      } while (!0);
      _e === null && (K = Be),
        (c.baseState = K),
        (c.firstBaseUpdate = fe),
        (c.lastBaseUpdate = _e),
        o === null && (c.shared.lanes = 0),
        (di |= x),
        (e.lanes = x),
        (e.memoizedState = Be);
    }
  }
  function U0(e, t) {
    if (typeof e != 'function') throw Error(u(191, e));
    e.call(t);
  }
  function j0(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) U0(n[e], t);
  }
  function xl(e, t) {
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
      _t(t, t.return, C);
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
                _t(c, K, fe);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (fe) {
      _t(t, t.return, fe);
    }
  }
  function k0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        j0(t, n);
      } catch (l) {
        _t(e, e.return, l);
      }
    }
  }
  function I0(e, t, n) {
    (n.props = zi(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      _t(e, t, l);
    }
  }
  function Fi(e, t) {
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
      _t(e, t, o);
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
          _t(e, t, c);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (c) {
          _t(e, t, c);
        }
      else n.current = null;
  }
  function q0(e) {
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
      _t(e, e.return, c);
    }
  }
  function L0(e, t, n) {
    try {
      var l = e.stateNode;
      gv(l, e.type, n, t), (l[lr] = t);
    } catch (c) {
      _t(e, e.return, c);
    }
  }
  function z0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
  }
  function Oo(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || z0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Mo(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ds));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Mo(e, t, n), e = e.sibling; e !== null; ) Mo(e, t, n), (e = e.sibling);
  }
  function Wu(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Wu(e, t, n), e = e.sibling; e !== null; ) Wu(e, t, n), (e = e.sibling);
  }
  var Cn = !1,
    zt = !1,
    Ro = !1,
    H0 = typeof WeakSet == 'function' ? WeakSet : Set,
    er = null,
    V0 = !1;
  function Y1(e, t) {
    if (((e = e.containerInfo), (af = bs), (e = ah(e)), Bc(e))) {
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
              Be = e,
              be = null;
            t: for (;;) {
              for (
                var Ne;
                Be !== n || (c !== 0 && Be.nodeType !== 3) || (C = x + c),
                  Be !== o || (l !== 0 && Be.nodeType !== 3) || (K = x + l),
                  Be.nodeType === 3 && (x += Be.nodeValue.length),
                  (Ne = Be.firstChild) !== null;

              )
                (be = Be), (Be = Ne);
              for (;;) {
                if (Be === e) break t;
                if (
                  (be === n && ++fe === c && (C = x), be === o && ++_e === l && (K = x), (Ne = Be.nextSibling) !== null)
                )
                  break;
                (Be = be), (be = Be.parentNode);
              }
              Be = Ne;
            }
            n = C === -1 || K === -1 ? null : { start: C, end: K };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (lf = { focusedElem: e, selectionRange: n }, bs = !1, er = t; er !== null; )
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
                  _t(n, n.return, nt);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) of(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      of(e);
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
    return (Ze = V0), (V0 = !1), Ze;
  }
  function F0(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Un(e, n), l & 4 && xl(5, n);
        break;
      case 1:
        if ((Un(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (C) {
              _t(n, n.return, C);
            }
          else {
            var c = zi(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (C) {
              _t(n, n.return, C);
            }
          }
        l & 64 && k0(n), l & 512 && Fi(n, n.return);
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
            j0(l, e);
          } catch (C) {
            _t(n, n.return, C);
          }
        }
        break;
      case 26:
        Un(e, n), l & 512 && Fi(n, n.return);
        break;
      case 27:
      case 5:
        Un(e, n), t === null && l & 4 && q0(n), l & 512 && Fi(n, n.return);
        break;
      case 12:
        Un(e, n);
        break;
      case 13:
        Un(e, n), l & 4 && Y0(e, n);
        break;
      case 22:
        if (((c = n.memoizedState !== null || Cn), !c)) {
          t = (t !== null && t.memoizedState !== null) || zt;
          var o = Cn,
            x = zt;
          (Cn = c), (zt = t) && !x ? ci(e, n, (n.subtreeFlags & 8772) !== 0) : Un(e, n), (Cn = o), (zt = x);
        }
        l & 512 && (n.memoizedProps.mode === 'manual' ? Fi(n, n.return) : Or(n, n.return));
        break;
      default:
        Un(e, n);
    }
  }
  function G0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), G0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ka(t)),
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
    for (n = n.child; n !== null; ) $0(e, t, n), (n = n.sibling);
  }
  function $0(e, t, n) {
    if (de && typeof de.onCommitFiberUnmount == 'function')
      try {
        de.onCommitFiberUnmount(q, n);
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
        Ka(n), (Zt = l), (Mr = c);
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
              _t(n, t, x);
            }
          else
            try {
              Zt.removeChild(n.stateNode);
            } catch (x) {
              _t(n, t, x);
            }
        break;
      case 18:
        Zt !== null &&
          (Mr
            ? ((t = Zt),
              (n = n.stateNode),
              t.nodeType === 8 ? cf(t.parentNode, n) : t.nodeType === 1 && cf(t, n),
              Ll(t))
            : cf(Zt, n.stateNode));
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
        zt || (Or(n, t), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && I0(n, t, l)), Dn(e, t, n);
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
  function Y0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ll(e);
      } catch (n) {
        _t(t, t.return, n);
      }
  }
  function X1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new H0()), t;
      case 22:
        return (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new H0()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Bo(e, t) {
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
        $0(o, x, c), (Zt = null), (Mr = !1), (o = c.alternate), o !== null && (o.return = null), (c.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) X0(t, e), (t = t.sibling);
  }
  var nn = null;
  function X0(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $r(t, e), Yr(e), l & 4 && (si(3, e, e.return), xl(3, e), si(5, e, e.return));
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
                      var x = qm('link', 'href', c).get(l + (n.href || ''));
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
                      if ((x = qm('meta', 'content', c).get(l + (n.content || '')))) {
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
            else e.stateNode = Im(c, l, e.memoizedProps);
          else
            o !== l
              ? (o === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : o.count--,
                l === null ? Lm(c, e.type, e.stateNode) : Im(c, l, e.memoizedProps))
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
            for (var Be = e.type, be = c.attributes; be.length; ) c.removeAttributeNode(be[0]);
            ir(c, Be, o), (c[dt] = e), (c[lr] = o);
          } catch (Ze) {
            _t(e, e.return, Ze);
          }
        }
      case 5:
        if (($r(t, e), Yr(e), l & 512 && (zt || n === null || Or(n, n.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            ca(c, '');
          } catch (Ze) {
            _t(e, e.return, Ze);
          }
        }
        l & 4 && e.stateNode != null && ((c = e.memoizedProps), L0(e, c, n !== null ? n.memoizedProps : c)),
          l & 1024 && (Ro = !0);
        break;
      case 6:
        if (($r(t, e), Yr(e), l & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (Ze) {
            _t(e, e.return, Ze);
          }
        }
        break;
      case 3:
        if (
          ((gs = null),
          (c = nn),
          (nn = ms(t.containerInfo)),
          $r(t, e),
          (nn = c),
          Yr(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ll(t.containerInfo);
          } catch (Ze) {
            _t(e, e.return, Ze);
          }
        Ro && ((Ro = !1), K0(e));
        break;
      case 4:
        (l = nn), (nn = ms(e.stateNode.containerInfo)), $r(t, e), Yr(e), (nn = l);
        break;
      case 12:
        $r(t, e), Yr(e);
        break;
      case 13:
        $r(t, e),
          Yr(e),
          e.child.flags & 8192 && (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (zo = De()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Bo(e, l)));
        break;
      case 22:
        if (
          (l & 512 && (zt || n === null || Or(n, n.return)),
          (K = e.memoizedState !== null),
          (fe = n !== null && n.memoizedState !== null),
          (_e = Cn),
          (Be = zt),
          (Cn = _e || K),
          (zt = Be || fe),
          $r(t, e),
          (zt = Be),
          (Cn = _e),
          Yr(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          l & 8192 &&
            ((t._visibility = K ? t._visibility & -2 : t._visibility | 1),
            K && ((t = Cn || zt), n === null || fe || t || _a(e)),
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
                    var Ne = C != null && C.hasOwnProperty('display') ? C.display : null;
                    x.style.display = Ne == null || typeof Ne == 'boolean' ? '' : ('' + Ne).trim();
                  }
                } catch (Ze) {
                  _t(fe, fe.return, Ze);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                fe = t;
                try {
                  fe.stateNode.nodeValue = K ? '' : fe.memoizedProps;
                } catch (Ze) {
                  _t(fe, fe.return, Ze);
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
          ((l = e.updateQueue), l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Bo(e, n))));
        break;
      case 19:
        $r(t, e), Yr(e), l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Bo(e, l)));
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
              if (z0(n)) {
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
                o = Oo(e);
              Wu(e, o, c);
              break;
            case 5:
              var x = l.stateNode;
              l.flags & 32 && (ca(x, ''), (l.flags &= -33));
              var C = Oo(e);
              Wu(e, C, x);
              break;
            case 3:
            case 4:
              var K = l.stateNode.containerInfo,
                fe = Oo(e);
              Mo(e, fe, K);
              break;
            default:
              throw Error(u(161));
          }
        }
      } catch (_e) {
        _t(e, e.return, _e);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function K0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        K0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function Un(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) F0(e, t.alternate, t), (t = t.sibling);
  }
  function _a(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          si(4, t, t.return), _a(t);
          break;
        case 1:
          Or(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == 'function' && I0(t, t.return, n), _a(t);
          break;
        case 26:
        case 27:
        case 5:
          Or(t, t.return), _a(t);
          break;
        case 22:
          Or(t, t.return), t.memoizedState === null && _a(t);
          break;
        default:
          _a(t);
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
          ci(c, o, n), xl(4, o);
          break;
        case 1:
          if ((ci(c, o, n), (l = o), (c = l.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (fe) {
              _t(l, l.return, fe);
            }
          if (((l = o), (c = l.updateQueue), c !== null)) {
            var C = l.stateNode;
            try {
              var K = c.shared.hiddenCallbacks;
              if (K !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < K.length; c++) U0(K[c], C);
            } catch (fe) {
              _t(l, l.return, fe);
            }
          }
          n && x & 64 && k0(o), Fi(o, o.return);
          break;
        case 26:
        case 27:
        case 5:
          ci(c, o, n), n && l === null && x & 4 && q0(o), Fi(o, o.return);
          break;
        case 12:
          ci(c, o, n);
          break;
        case 13:
          ci(c, o, n), n && x & 4 && Y0(c, o);
          break;
        case 22:
          o.memoizedState === null && ci(c, o, n), Fi(o, o.return);
          break;
        default:
          ci(c, o, n);
      }
      t = t.sibling;
    }
  }
  function Co(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && fl(n));
  }
  function Do(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && fl(e));
  }
  function oi(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Z0(e, t, n, l), (t = t.sibling);
  }
  function Z0(e, t, n, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        oi(e, t, n, l), c & 2048 && xl(9, t);
        break;
      case 3:
        oi(e, t, n, l),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && fl(e)));
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
            _t(t, t.return, K);
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
              : wl(e, t)
            : o._visibility & 4
              ? oi(e, t, n, l)
              : ((o._visibility |= 4), Ta(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          c & 2048 && Co(t.alternate, t);
        break;
      case 24:
        oi(e, t, n, l), c & 2048 && Do(t.alternate, t);
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
          Ta(o, x, C, K, c), xl(8, x);
          break;
        case 23:
          break;
        case 22:
          var _e = x.stateNode;
          x.memoizedState !== null
            ? _e._visibility & 4
              ? Ta(o, x, C, K, c)
              : wl(o, x)
            : ((_e._visibility |= 4), Ta(o, x, C, K, c)),
            c && fe & 2048 && Co(x.alternate, x);
          break;
        case 24:
          Ta(o, x, C, K, c), c && fe & 2048 && Do(x.alternate, x);
          break;
        default:
          Ta(o, x, C, K, c);
      }
      t = t.sibling;
    }
  }
  function wl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          c = l.flags;
        switch (l.tag) {
          case 22:
            wl(n, l), c & 2048 && Co(l.alternate, l);
            break;
          case 24:
            wl(n, l), c & 2048 && Do(l.alternate, l);
            break;
          default:
            wl(n, l);
        }
        t = t.sibling;
      }
  }
  var El = 8192;
  function Oa(e) {
    if (e.subtreeFlags & El) for (e = e.child; e !== null; ) Q0(e), (e = e.sibling);
  }
  function Q0(e) {
    switch (e.tag) {
      case 26:
        Oa(e), e.flags & El && e.memoizedState !== null && jv(nn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Oa(e);
        break;
      case 3:
      case 4:
        var t = nn;
        (nn = ms(e.stateNode.containerInfo)), Oa(e), (nn = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null ? ((t = El), (El = 16777216), Oa(e), (El = t)) : Oa(e));
        break;
      default:
        Oa(e);
    }
  }
  function P0(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Al(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (er = l), W0(l, e);
        }
      P0(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) J0(e), (e = e.sibling);
  }
  function J0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Al(e), e.flags & 2048 && si(9, e, e.return);
        break;
      case 3:
        Al(e);
        break;
      case 12:
        Al(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), es(e))
          : Al(e);
        break;
      default:
        Al(e);
    }
  }
  function es(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (er = l), W0(l, e);
        }
      P0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          si(8, t, t.return), es(t);
          break;
        case 22:
          (n = t.stateNode), n._visibility & 4 && ((n._visibility &= -5), es(t));
          break;
        default:
          es(t);
      }
      e = e.sibling;
    }
  }
  function W0(e, t) {
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
          fl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (er = l);
      else
        e: for (n = e; er !== null; ) {
          l = er;
          var c = l.sibling,
            o = l.return;
          if ((G0(l), l === n)) {
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
  function Uo(e) {
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
  function em(e, t) {
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
  function ts(e, t, n, l, c, o) {
    var x = 0;
    if (((l = e), typeof e == 'function')) Uo(e) && (x = 1);
    else if (typeof e == 'string') x = Dv(e, n, U.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case p:
          return Gi(n.children, c, o, t);
        case g:
          (x = 8), (c |= 24);
          break;
        case N:
          return (e = Xr(12, n, t, c | 2)), (e.elementType = N), (e.lanes = o), e;
        case P:
          return (e = Xr(13, n, t, c)), (e.elementType = P), (e.lanes = o), e;
        case J:
          return (e = Xr(19, n, t, c)), (e.elementType = J), (e.lanes = o), e;
        case Se:
          return tm(n, c, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case v:
              case w:
                x = 10;
                break e;
              case S:
                x = 9;
                break e;
              case D:
                x = 11;
                break e;
              case W:
                x = 14;
                break e;
              case H:
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
  function tm(e, t, n, l) {
    (e = Xr(22, e, l, t)), (e.elementType = Se), (e.lanes = n);
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
          x !== null && ((c._pendingVisibility |= 2), pr(x, o, 2));
        }
      },
      attach: function () {
        var o = c._current;
        if (o === null) throw Error(u(456));
        if ((c._pendingVisibility & 2) !== 0) {
          var x = Wn(o, 2);
          x !== null && ((c._pendingVisibility &= -3), pr(x, o, 2));
        }
      }
    };
    return (e.stateNode = c), e;
  }
  function jo(e, t, n) {
    return (e = Xr(6, e, null, t)), (e.lanes = n), e;
  }
  function ko(e, t, n) {
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
  function rm(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !zm(t))) {
      if (
        ((t = Gr.current),
        t !== null &&
          ((yt & 4194176) === yt ? hn !== null : ((yt & 62914560) !== yt && (yt & 536870912) === 0) || t !== hn))
      )
        throw ((sl = zc), bh);
      e.flags |= 8192;
    }
  }
  function rs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? la() : 536870912), (e.lanes |= t), (Ra |= t));
  }
  function Nl(e, t) {
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
    switch ((qc(t), t.tag)) {
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
          me(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (il(t)
              ? jn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rn !== null && (Go(rn), (rn = null)))),
          kt(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (jn(t), n !== null ? (kt(t), rm(t, n)) : (kt(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (jn(t), kt(t), rm(t, n))
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
          (e = U.current), il(t) ? yh(t) : ((e = Cm(c, l, n)), (t.stateNode = e), jn(t));
        }
        return kt(t), null;
      case 5:
        if ((M(t), (n = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== l && jn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return kt(t), null;
          }
          if (((e = U.current), il(t))) yh(t);
          else {
            switch (((c = hs(se.current)), e)) {
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
          if (((e = se.current), il(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (c = mr), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[dt] = t),
              (e = !!(e.nodeValue === n || (l !== null && l.suppressHydrationWarning === !0) || _m(e.nodeValue, n))),
              e || Ui(t);
          } else (e = hs(e).createTextNode(l)), (e[dt] = t), (t.stateNode = e);
        }
        return kt(t), null;
      case 13:
        if (((l = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((c = il(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(u(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c)) throw Error(u(317));
              c[dt] = t;
            } else al(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            kt(t), (c = !1);
          } else rn !== null && (Go(rn), (rn = null)), (c = !0);
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
        return n !== e && n && (t.child.flags |= 8192), rs(t, t.updateQueue), kt(t), null;
      case 4:
        return me(), e === null && tf(t.stateNode.containerInfo), kt(t), null;
      case 10:
        return Bn(t.type), kt(t), null;
      case 19:
        if ((ke(Qt), (c = t.memoizedState), c === null)) return kt(t), null;
        if (((l = (t.flags & 128) !== 0), (o = c.rendering), o === null))
          if (l) Nl(c, !1);
          else {
            if (Ht !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Lu(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Nl(c, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      rs(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    em(n, e), (n = n.sibling);
                  return B(Qt, (Qt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null && De() > ns && ((t.flags |= 128), (l = !0), Nl(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Lu(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                rs(t, e),
                Nl(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !o.alternate && !bt)
              )
                return kt(t), null;
            } else
              2 * De() - c.renderingStartTime > ns &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), Nl(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = c.last), e !== null ? (e.sibling = o) : (t.child = o), (c.last = o));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = De()),
            (t.sibling = null),
            (e = Qt.current),
            B(Qt, l ? (e & 1) | 2 : e & 1),
            t)
          : (kt(t), null);
      case 22:
      case 23:
        return (
          Tn(t),
          Vc(),
          (l = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== l && (t.flags |= 8192) : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (kt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : kt(t),
          (n = t.updateQueue),
          n !== null && rs(t, n.retryQueue),
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
    switch ((qc(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          Bn(Pt), me(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return M(t), null;
      case 13:
        if ((Tn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(u(340));
          al();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ke(Qt), null;
      case 4:
        return me(), null;
      case 10:
        return Bn(t.type), null;
      case 22:
      case 23:
        return Tn(t), Vc(), e !== null && ke(ki), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 24:
        return Bn(Pt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function nm(e, t) {
    switch ((qc(t), t.tag)) {
      case 3:
        Bn(Pt), me();
        break;
      case 26:
      case 27:
      case 5:
        M(t);
        break;
      case 4:
        me();
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
        Tn(t), Vc(), e !== null && ke(ki);
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
    yt = 0,
    Mt = 0,
    Rr = null,
    kn = !1,
    Ma = !1,
    Io = !1,
    In = 0,
    Ht = 0,
    di = 0,
    $i = 0,
    qo = 0,
    Kr = 0,
    Ra = 0,
    _l = null,
    pn = null,
    Lo = !1,
    zo = 0,
    ns = 1 / 0,
    is = null,
    hi = null,
    as = !1,
    Yi = null,
    Tl = 0,
    Ho = 0,
    Vo = null,
    Ol = 0,
    Fo = null;
  function Br() {
    if ((It & 2) !== 0 && yt !== 0) return yt & -yt;
    if (A.T !== null) {
      var e = xa;
      return e !== 0 ? e : Po();
    }
    return yu();
  }
  function im() {
    Kr === 0 && (Kr = (yt & 536870912) === 0 || bt ? hr() : 536870912);
    var e = Gr.current;
    return e !== null && (e.flags |= 32), Kr;
  }
  function pr(e, t, n) {
    ((e === Ot && Mt === 2) || e.cancelPendingCommit !== null) && (Ba(e, 0), qn(e, yt, Kr, !1)),
      Tt(e, n),
      ((It & 2) === 0 || e !== Ot) && (e === Ot && ((It & 2) === 0 && ($i |= n), Ht === 4 && qn(e, yt, Kr, !1)), gn(e));
  }
  function am(e, t, n) {
    if ((It & 6) !== 0) throw Error(u(327));
    var l = (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || ot(e, t),
      c = l ? tv(e, t) : Xo(e, t, !0),
      o = l;
    do {
      if (c === 0) {
        Ma && !l && qn(e, t, 0, !1);
        break;
      } else if (c === 6) qn(e, t, 0, !kn);
      else {
        if (((n = e.current.alternate), o && !W1(n))) {
          (c = Xo(e, t, !1)), (o = !1);
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
              if ((K && (Ba(C, x).flags |= 256), (x = Xo(C, x, !1)), x !== 2)) {
                if (Io && !K) {
                  (C.errorRecoveryDisabledLanes |= o), ($i |= o), (c = 4);
                  break e;
                }
                (o = pn), (pn = c), o !== null && Go(o);
              }
              c = x;
            }
            if (((o = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Ba(e, 0), qn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), c)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194176) === t) {
                qn(l, t, Kr, !kn);
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
          if (((l.finishedWork = n), (l.finishedLanes = t), (t & 62914560) === t && ((o = zo + 300 - De()), 10 < o))) {
            if ((qn(l, t, Kr, !kn), it(l, 0) !== 0)) break e;
            l.timeoutHandle = Mm(lm.bind(null, l, n, pn, is, Lo, t, Kr, $i, Ra, kn, 2, -0, 0), o);
            break e;
          }
          lm(l, n, pn, is, Lo, t, Kr, $i, Ra, kn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    gn(e);
  }
  function Go(e) {
    pn === null ? (pn = e) : pn.push.apply(pn, e);
  }
  function lm(e, t, n, l, c, o, x, C, K, fe, _e, Be, be) {
    var Ne = t.subtreeFlags;
    if (
      (Ne & 8192 || (Ne & 16785408) === 16785408) &&
      ((Ul = { stylesheets: null, count: 0, unsuspend: Uv }), Q0(t), (t = kv()), t !== null)
    ) {
      (e.cancelPendingCommit = t(hm.bind(null, e, n, l, c, x, C, K, 1, Be, be))), qn(e, o, x, !fe);
      return;
    }
    hm(e, n, l, c, x, C, K, _e, Be, be);
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
  function qn(e, t, n, l) {
    (t &= ~qo),
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
    n !== 0 && fc(e, n, t);
  }
  function ls() {
    return (It & 6) === 0 ? (Ml(0), !1) : !0;
  }
  function $o() {
    if (mt !== null) {
      if (Mt === 0) var e = mt.return;
      else (e = mt), (Rn = Hi = null), Qc(e), (ba = null), (cl = 0), (e = mt);
      for (; e !== null; ) nm(e.alternate, e), (e = e.return);
      mt = null;
    }
  }
  function Ba(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), vv(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      $o(),
      (Ot = e),
      (mt = n = fi(e.current, null)),
      (yt = t),
      (Mt = 0),
      (Rr = null),
      (kn = !1),
      (Ma = ot(e, t)),
      (Io = !1),
      (Ra = Kr = qo = $i = di = Ht = 0),
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
    return (In = t), Ru(), n;
  }
  function um(e, t) {
    (ct = null),
      (A.H = mn),
      t === ul
        ? ((t = wh()), (Mt = 3))
        : t === bh
          ? ((t = wh()), (Mt = 4))
          : (Mt = t === S0 ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
      (Rr = t),
      mt === null && ((Ht = 1), Qu(e, Hr(t, e.current)));
  }
  function sm() {
    var e = A.H;
    return (A.H = mn), e === null ? mn : e;
  }
  function cm() {
    var e = A.A;
    return (A.A = P1), e;
  }
  function Yo() {
    (Ht = 4),
      kn || ((yt & 4194176) !== yt && Gr.current !== null) || (Ma = !0),
      ((di & 134217727) === 0 && ($i & 134217727) === 0) || Ot === null || qn(Ot, yt, Kr, !1);
  }
  function Xo(e, t, n) {
    var l = It;
    It |= 2;
    var c = sm(),
      o = cm();
    (Ot !== e || yt !== t) && ((is = null), Ba(e, t)), (t = !1);
    var x = Ht;
    e: do
      try {
        if (Mt !== 0 && mt !== null) {
          var C = mt,
            K = Rr;
          switch (Mt) {
            case 8:
              $o(), (x = 6);
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
        um(e, _e);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Rn = Hi = null),
      (It = l),
      (A.H = c),
      (A.A = o),
      mt === null && ((Ot = null), (yt = 0), Ru()),
      x
    );
  }
  function ev() {
    for (; mt !== null; ) om(mt);
  }
  function tv(e, t) {
    var n = It;
    It |= 2;
    var l = sm(),
      c = cm();
    Ot !== e || yt !== t ? ((is = null), (ns = De() + 500), Ba(e, t)) : (Ma = ot(e, t));
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
              if (Sh(o)) {
                (Mt = 0), (Rr = null), fm(t);
                break;
              }
              (t = function () {
                Mt === 2 && Ot === e && (Mt = 7), gn(e);
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
              Sh(o) ? ((Mt = 0), (Rr = null), fm(t)) : ((Mt = 0), (Rr = null), Ca(e, t, o, 7));
              break;
            case 5:
              var x = null;
              switch (mt.tag) {
                case 26:
                  x = mt.memoizedState;
                case 5:
                case 27:
                  var C = mt;
                  if (!x || zm(x)) {
                    (Mt = 0), (Rr = null);
                    var K = C.sibling;
                    if (K !== null) mt = K;
                    else {
                      var fe = C.return;
                      fe !== null ? ((mt = fe), us(fe)) : (mt = null);
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
              $o(), (Ht = 6);
              break e;
            default:
              throw Error(u(462));
          }
        }
        rv();
        break;
      } catch (_e) {
        um(e, _e);
      }
    while (!0);
    return (Rn = Hi = null), (A.H = l), (A.A = c), (It = n), mt !== null ? 0 : ((Ot = null), (yt = 0), Ru(), Ht);
  }
  function rv() {
    for (; mt !== null && !ve(); ) om(mt);
  }
  function om(e) {
    var t = C0(e.alternate, e, In);
    (e.memoizedProps = e.pendingProps), t === null ? us(e) : (mt = t);
  }
  function fm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _0(n, t, t.pendingProps, t.type, void 0, yt);
        break;
      case 11:
        t = _0(n, t, t.pendingProps, t.type.render, t.ref, yt);
        break;
      case 5:
        Qc(t);
      default:
        nm(n, t), (t = mt = em(t, In)), (t = C0(n, t, In));
    }
    (e.memoizedProps = e.pendingProps), t === null ? us(e) : (mt = t);
  }
  function Ca(e, t, n, l) {
    (Rn = Hi = null), Qc(t), (ba = null), (cl = 0);
    var c = t.return;
    try {
      if (G1(e, c, t, n, yt)) {
        (Ht = 1), Qu(e, Hr(n, e.current)), (mt = null);
        return;
      }
    } catch (o) {
      if (c !== null) throw ((mt = c), o);
      (Ht = 1), Qu(e, Hr(n, e.current)), (mt = null);
      return;
    }
    t.flags & 32768
      ? (bt || l === 1
          ? (e = !0)
          : Ma || (yt & 536870912) !== 0
            ? (e = !1)
            : ((kn = e = !0),
              (l === 2 || l === 3 || l === 6) && ((l = Gr.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        dm(t, e))
      : us(t);
  }
  function us(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        dm(t, kn);
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
  function dm(e, t) {
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
  function hm(e, t, n, l, c, o, x, C, K, fe) {
    var _e = A.T,
      Be = O.p;
    try {
      (O.p = 2), (A.T = null), nv(e, t, n, l, Be, c, o, x, C, K, fe);
    } finally {
      (A.T = _e), (O.p = Be);
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
      ((fe |= jc),
      Td(e, l, fe, o, x, C),
      e === Ot && ((mt = Ot = null), (yt = 0)),
      ((K.subtreeFlags & 10256) === 0 && (K.flags & 10256) === 0) ||
        as ||
        ((as = !0),
        (Ho = fe),
        (Vo = n),
        uv(m, function () {
          return Da(), null;
        })),
      (n = (K.flags & 15990) !== 0),
      (K.subtreeFlags & 15990) !== 0 || n
        ? ((n = A.T),
          (A.T = null),
          (o = O.p),
          (O.p = 2),
          (x = It),
          (It |= 4),
          Y1(e, K),
          X0(K, e),
          T1(lf, e.containerInfo),
          (bs = !!af),
          (lf = af = null),
          (e.current = K),
          F0(e, K.alternate, K),
          xe(),
          (It = x),
          (O.p = o),
          (A.T = n))
        : (e.current = K),
      as ? ((as = !1), (Yi = e), (Tl = l)) : mm(e, fe),
      (fe = e.pendingLanes),
      fe === 0 && (hi = null),
      Te(K.stateNode),
      gn(e),
      t !== null)
    )
      for (c = e.onRecoverableError, K = 0; K < t.length; K++) (fe = t[K]), c(fe.value, { componentStack: fe.stack });
    return (
      (Tl & 3) !== 0 && Da(),
      (fe = e.pendingLanes),
      (l & 4194218) !== 0 && (fe & 42) !== 0 ? (e === Fo ? Ol++ : ((Ol = 0), (Fo = e))) : (Ol = 0),
      Ml(0),
      null
    );
  }
  function mm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), fl(t)));
  }
  function Da() {
    if (Yi !== null) {
      var e = Yi,
        t = Ho;
      Ho = 0;
      var n = gu(Tl),
        l = A.T,
        c = O.p;
      try {
        if (((O.p = 32 > n ? 32 : n), (A.T = null), Yi === null)) var o = !1;
        else {
          (n = Vo), (Vo = null);
          var x = Yi,
            C = Tl;
          if (((Yi = null), (Tl = 0), (It & 6) !== 0)) throw Error(u(331));
          var K = It;
          if (
            ((It |= 4),
            J0(x.current),
            Z0(x, x.current, C, n),
            (It = K),
            Ml(0, !1),
            de && typeof de.onPostCommitFiberRoot == 'function')
          )
            try {
              de.onPostCommitFiberRoot(q, x);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (O.p = c), (A.T = l), mm(e, t);
      }
    }
    return !1;
  }
  function pm(e, t, n) {
    (t = Hr(n, t)), (t = oo(e.stateNode, t, 2)), (e = ui(e, t, 2)), e !== null && (Tt(e, 2), gn(e));
  }
  function _t(e, t, n) {
    if (e.tag === 3) pm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          pm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (hi === null || !hi.has(l)))
          ) {
            (e = Hr(n, e)), (n = v0(2)), (l = ui(t, n, 2)), l !== null && (b0(n, l, t, e), Tt(l, 2), gn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ko(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new J1();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(n) || ((Io = !0), c.add(n), (e = iv.bind(null, e, t, n)), t.then(e, e));
  }
  function iv(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ot === e &&
        (yt & n) === n &&
        (Ht === 4 || (Ht === 3 && (yt & 62914560) === yt && 300 > De() - zo) ? (It & 2) === 0 && Ba(e, 0) : (qo |= n),
        Ra === yt && (Ra = 0)),
      gn(e);
  }
  function gm(e, t) {
    t === 0 && (t = la()), (e = Wn(e, t)), e !== null && (Tt(e, t), gn(e));
  }
  function av(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), gm(e, n);
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
    l !== null && l.delete(t), gm(e, n);
  }
  function uv(e, t) {
    return V(e, t);
  }
  var ss = null,
    Ua = null,
    Zo = !1,
    cs = !1,
    Qo = !1,
    Xi = 0;
  function gn(e) {
    e !== Ua && e.next === null && (Ua === null ? (ss = Ua = e) : (Ua = Ua.next = e)),
      (cs = !0),
      Zo || ((Zo = !0), cv(sv));
  }
  function Ml(e, t) {
    if (!Qo && cs) {
      Qo = !0;
      do
        for (var n = !1, l = ss; l !== null; ) {
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
            o !== 0 && ((n = !0), bm(l, o));
          } else (o = yt), (o = it(l, l === Ot ? o : 0)), (o & 3) === 0 || ot(l, o) || ((n = !0), bm(l, o));
          l = l.next;
        }
      while (n);
      Qo = !1;
    }
  }
  function sv() {
    cs = Zo = !1;
    var e = 0;
    Xi !== 0 && (yv() && (e = Xi), (Xi = 0));
    for (var t = De(), n = null, l = ss; l !== null; ) {
      var c = l.next,
        o = ym(l, t);
      o === 0
        ? ((l.next = null), n === null ? (ss = c) : (n.next = c), c === null && (Ua = n))
        : ((n = l), (e !== 0 || (o & 3) !== 0) && (cs = !0)),
        (l = c);
    }
    Ml(e);
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
      (n = yt),
      (n = it(e, e === t ? n : 0)),
      (l = e.callbackNode),
      n === 0 || (e === t && Mt === 2) || e.cancelPendingCommit !== null)
    )
      return l !== null && l !== null && te(l), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((n & 3) === 0 || ot(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && te(l), gu(n))) {
        case 2:
        case 8:
          n = E;
          break;
        case 32:
          n = m;
          break;
        case 268435456:
          n = F;
          break;
        default:
          n = m;
      }
      return (l = vm.bind(null, e)), (n = V(n, l)), (e.callbackPriority = t), (e.callbackNode = n), t;
    }
    return l !== null && l !== null && te(l), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function vm(e, t) {
    var n = e.callbackNode;
    if (Da() && e.callbackNode !== n) return null;
    var l = yt;
    return (
      (l = it(e, e === Ot ? l : 0)),
      l === 0
        ? null
        : (am(e, l, t), ym(e, De()), e.callbackNode != null && e.callbackNode === n ? vm.bind(null, e) : null)
    );
  }
  function bm(e, t) {
    if (Da()) return null;
    am(e, t, !0);
  }
  function cv(e) {
    bv(function () {
      (It & 6) !== 0 ? V(rt, e) : e();
    });
  }
  function Po() {
    return Xi === 0 && (Xi = hr()), Xi;
  }
  function Sm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : Eu('' + e);
  }
  function xm(e, t) {
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
      var o = Sm((c[lr] || null).action),
        x = l.submitter;
      x &&
        ((t = (t = x[lr] || null) ? Sm(t.formAction) : x.getAttribute('formAction')),
        t !== null && ((o = t), (x = null)));
      var C = new Tu('action', 'action', null, l, c);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Xi !== 0) {
                  var K = x ? xm(c, x) : new FormData(c);
                  ao(n, { pending: !0, data: K, method: c.method, action: o }, null, K);
                }
              } else
                typeof o == 'function' &&
                  (C.preventDefault(),
                  (K = x ? xm(c, x) : new FormData(c)),
                  ao(n, { pending: !0, data: K, method: c.method, action: o }, o, K));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Jo = 0; Jo < hh.length; Jo++) {
    var Wo = hh[Jo],
      fv = Wo.toLowerCase(),
      dv = Wo[0].toUpperCase() + Wo.slice(1);
    tn(fv, 'on' + dv);
  }
  tn(sh, 'onAnimationEnd'),
    tn(ch, 'onAnimationIteration'),
    tn(oh, 'onAnimationStart'),
    tn('dblclick', 'onDoubleClick'),
    tn('focusin', 'onFocus'),
    tn('focusout', 'onBlur'),
    tn(M1, 'onTransitionRun'),
    tn(R1, 'onTransitionStart'),
    tn(B1, 'onTransitionCancel'),
    tn(fh, 'onTransitionEnd'),
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
  var Rl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    hv = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Rl));
  function wm(e, t) {
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
              Zu(_e);
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
              Zu(_e);
            }
            (c.currentTarget = null), (o = K);
          }
      }
    }
  }
  function gt(e, t) {
    var n = t[Xa];
    n === void 0 && (n = t[Xa] = new Set());
    var l = e + '__bubble';
    n.has(l) || (Em(t, e, 2, !1), n.add(l));
  }
  function ef(e, t, n) {
    var l = 0;
    t && (l |= 4), Em(n, e, l, t);
  }
  var os = '_reactListening' + Math.random().toString(36).slice(2);
  function tf(e) {
    if (!e[os]) {
      (e[os] = !0),
        ht.forEach(function (n) {
          n !== 'selectionchange' && (hv.has(n) || ef(n, !1, e), ef(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[os] || ((t[os] = !0), ef('selectionchange', !1, t));
    }
  }
  function Em(e, t, n, l) {
    switch (Ym(t)) {
      case 2:
        var c = Lv;
        break;
      case 8:
        c = zv;
        break;
      default:
        c = pf;
    }
    (n = c.bind(null, t, n, e)),
      (c = void 0),
      !wc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: c })
          : e.addEventListener(t, n, !0)
        : c !== void 0
          ? e.addEventListener(t, n, { passive: c })
          : e.addEventListener(t, n, !1);
  }
  function rf(e, t, n, l, c) {
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
    qd(function () {
      var fe = o,
        _e = Sc(n),
        Be = [];
      e: {
        var be = dh.get(e);
        if (be !== void 0) {
          var Ne = Tu,
            Ze = e;
          switch (e) {
            case 'keypress':
              if (Nu(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              Ne = l1;
              break;
            case 'focusin':
              (Ze = 'focus'), (Ne = _c);
              break;
            case 'focusout':
              (Ze = 'blur'), (Ne = _c);
              break;
            case 'beforeblur':
            case 'afterblur':
              Ne = _c;
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
              Ne = Hd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Ne = Ky;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Ne = c1;
              break;
            case sh:
            case ch:
            case oh:
              Ne = Py;
              break;
            case fh:
              Ne = f1;
              break;
            case 'scroll':
            case 'scrollend':
              Ne = Yy;
              break;
            case 'wheel':
              Ne = h1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Ne = Wy;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Ne = Fd;
              break;
            case 'toggle':
            case 'beforetoggle':
              Ne = p1;
          }
          var nt = (t & 4) !== 0,
            Vt = !nt && (e === 'scroll' || e === 'scrollend'),
            pe = nt ? (be !== null ? be + 'Capture' : null) : be;
          nt = [];
          for (var ce = fe, ge; ce !== null; ) {
            var Oe = ce;
            if (
              ((ge = Oe.stateNode),
              (Oe = Oe.tag),
              (Oe !== 5 && Oe !== 26 && Oe !== 27) ||
                ge === null ||
                pe === null ||
                ((Oe = Za(ce, pe)), Oe != null && nt.push(Bl(ce, Oe, ge))),
              Vt)
            )
              break;
            ce = ce.return;
          }
          0 < nt.length && ((be = new Ne(be, Ze, null, n, _e)), Be.push({ event: be, listeners: nt }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((be = e === 'mouseover' || e === 'pointerover'),
            (Ne = e === 'mouseout' || e === 'pointerout'),
            be && n !== bc && (Ze = n.relatedTarget || n.fromElement) && (pt(Ze) || Ze[Qn]))
          )
            break e;
          if (
            (Ne || be) &&
            ((be = _e.window === _e ? _e : (be = _e.ownerDocument) ? be.defaultView || be.parentWindow : window),
            Ne
              ? ((Ze = n.relatedTarget || n.toElement),
                (Ne = fe),
                (Ze = Ze ? pt(Ze) : null),
                Ze !== null &&
                  ((Vt = z(Ze)), (nt = Ze.tag), Ze !== Vt || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (Ze = null))
              : ((Ne = null), (Ze = fe)),
            Ne !== Ze)
          ) {
            if (
              ((nt = Hd),
              (Oe = 'onMouseLeave'),
              (pe = 'onMouseEnter'),
              (ce = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((nt = Fd), (Oe = 'onPointerLeave'), (pe = 'onPointerEnter'), (ce = 'pointer')),
              (Vt = Ne == null ? be : Oi(Ne)),
              (ge = Ze == null ? be : Oi(Ze)),
              (be = new nt(Oe, ce + 'leave', Ne, n, _e)),
              (be.target = Vt),
              (be.relatedTarget = ge),
              (Oe = null),
              pt(_e) === fe &&
                ((nt = new nt(pe, ce + 'enter', Ze, n, _e)), (nt.target = ge), (nt.relatedTarget = Vt), (Oe = nt)),
              (Vt = Oe),
              Ne && Ze)
            )
              t: {
                for (nt = Ne, pe = Ze, ce = 0, ge = nt; ge; ge = ja(ge)) ce++;
                for (ge = 0, Oe = pe; Oe; Oe = ja(Oe)) ge++;
                for (; 0 < ce - ge; ) (nt = ja(nt)), ce--;
                for (; 0 < ge - ce; ) (pe = ja(pe)), ge--;
                for (; ce--; ) {
                  if (nt === pe || (pe !== null && nt === pe.alternate)) break t;
                  (nt = ja(nt)), (pe = ja(pe));
                }
                nt = null;
              }
            else nt = null;
            Ne !== null && Am(Be, be, Ne, nt, !1), Ze !== null && Vt !== null && Am(Be, Vt, Ze, nt, !0);
          }
        }
        e: {
          if (
            ((be = fe ? Oi(fe) : window),
            (Ne = be.nodeName && be.nodeName.toLowerCase()),
            Ne === 'select' || (Ne === 'input' && be.type === 'file'))
          )
            var Ke = Pd;
          else if (Zd(be))
            if (Jd) Ke = N1;
            else {
              Ke = E1;
              var ft = w1;
            }
          else
            (Ne = be.nodeName),
              !Ne || Ne.toLowerCase() !== 'input' || (be.type !== 'checkbox' && be.type !== 'radio')
                ? fe && vc(fe.elementType) && (Ke = Pd)
                : (Ke = A1);
          if (Ke && (Ke = Ke(e, fe))) {
            Qd(Be, Ke, n, _e);
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
            (Zd(ft) || ft.contentEditable === 'true') && ((ha = ft), (Cc = fe), (nl = null));
            break;
          case 'focusout':
            nl = Cc = ha = null;
            break;
          case 'mousedown':
            Dc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Dc = !1), lh(Be, n, _e);
            break;
          case 'selectionchange':
            if (O1) break;
          case 'keydown':
          case 'keyup':
            lh(Be, n, _e);
        }
        var Qe;
        if (Oc)
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
            ? Xd(e, n) && (tt = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (tt = 'onCompositionStart');
        tt &&
          (Gd &&
            n.locale !== 'ko' &&
            (da || tt !== 'onCompositionStart'
              ? tt === 'onCompositionEnd' && da && (Qe = Ld())
              : ((Jn = _e), (Ec = 'value' in Jn ? Jn.value : Jn.textContent), (da = !0))),
          (ft = fs(fe, tt)),
          0 < ft.length &&
            ((tt = new Vd(tt, e, null, n, _e)),
            Be.push({ event: tt, listeners: ft }),
            Qe ? (tt.data = Qe) : ((Qe = Kd(n)), Qe !== null && (tt.data = Qe)))),
          (Qe = y1 ? v1(e, n) : b1(e, n)) &&
            ((tt = fs(fe, 'onBeforeInput')),
            0 < tt.length &&
              ((ft = new Vd('onBeforeInput', 'beforeinput', null, n, _e)),
              Be.push({ event: ft, listeners: tt }),
              (ft.data = Qe))),
          ov(Be, e, fe, n, _e);
      }
      wm(Be, t);
    });
  }
  function Bl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function fs(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var c = e,
        o = c.stateNode;
      (c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          o === null ||
          ((c = Za(e, n)), c != null && l.unshift(Bl(e, c, o)), (c = Za(e, t)), c != null && l.push(Bl(e, c, o))),
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
  function Am(e, t, n, l, c) {
    for (var o = t._reactName, x = []; n !== null && n !== l; ) {
      var C = n,
        K = C.alternate,
        fe = C.stateNode;
      if (((C = C.tag), K !== null && K === l)) break;
      (C !== 5 && C !== 26 && C !== 27) ||
        fe === null ||
        ((K = fe),
        c
          ? ((fe = Za(n, o)), fe != null && x.unshift(Bl(n, fe, K)))
          : c || ((fe = Za(n, o)), fe != null && x.push(Bl(n, fe, K)))),
        (n = n.return);
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var mv = /\r\n?/g,
    pv = /\u0000|\uFFFD/g;
  function Nm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        mv,
        `
`
      )
      .replace(pv, '');
  }
  function _m(e, t) {
    return (t = Nm(t)), Nm(e) === t;
  }
  function ds() {}
  function At(e, t, n, l, c, o) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || ca(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && ca(e, '' + l);
        break;
      case 'className':
        Su(e, 'class', l);
        break;
      case 'tabIndex':
        Su(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Su(e, n, l);
        break;
      case 'style':
        kd(e, l, o);
        break;
      case 'data':
        if (t !== 'object') {
          Su(e, 'data', l);
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
        (l = Eu('' + l)), e.setAttribute(n, l);
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
        (l = Eu('' + l)), e.setAttribute(n, l);
        break;
      case 'onClick':
        l != null && (e.onclick = ds);
        break;
      case 'onScroll':
        l != null && gt('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && gt('scrollend', e);
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
        (n = Eu('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n);
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
        gt('beforetoggle', e), gt('toggle', e), bu(e, 'popover', l);
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
        bu(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Gy.get(n) || n), bu(e, n, l));
    }
  }
  function nf(e, t, n, l, c, o) {
    switch (n) {
      case 'style':
        kd(e, l, o);
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
        l != null && gt('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && gt('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = ds);
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
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : bu(e, n, l);
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
        gt('error', e), gt('load', e);
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
        gt('invalid', e);
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
        Cd(e, o, C, K, fe, x, c, !1), xu(e);
        return;
      case 'select':
        gt('invalid', e), (l = x = o = null);
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
        gt('invalid', e), (o = c = l = null);
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
        Ud(e, l, c, o), xu(e);
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
        gt('cancel', e), gt('close', e);
        break;
      case 'iframe':
      case 'object':
        gt('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Rl.length; l++) gt(Rl[l], e);
        break;
      case 'image':
        gt('error', e), gt('load', e);
        break;
      case 'details':
        gt('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        gt('error', e), gt('load', e);
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
        if (vc(t)) {
          for (_e in n) n.hasOwnProperty(_e) && ((l = n[_e]), l !== void 0 && nf(e, t, _e, l, n, void 0));
          return;
        }
    }
    for (C in n) n.hasOwnProperty(C) && ((l = n[C]), l != null && At(e, t, C, l, n, null));
  }
  function gv(e, t, n, l) {
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
        for (Ne in n) {
          var Be = n[Ne];
          if (n.hasOwnProperty(Ne) && Be != null)
            switch (Ne) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                K = Be;
              default:
                l.hasOwnProperty(Ne) || At(e, t, Ne, null, l, Be);
            }
        }
        for (var be in l) {
          var Ne = l[be];
          if (((Be = n[be]), l.hasOwnProperty(be) && (Ne != null || Be != null)))
            switch (be) {
              case 'type':
                o = Ne;
                break;
              case 'name':
                c = Ne;
                break;
              case 'checked':
                fe = Ne;
                break;
              case 'defaultChecked':
                _e = Ne;
                break;
              case 'value':
                x = Ne;
                break;
              case 'defaultValue':
                C = Ne;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Ne != null) throw Error(u(137, t));
                break;
              default:
                Ne !== Be && At(e, t, be, Ne, l, Be);
            }
        }
        gc(e, x, C, K, fe, _e, o, c);
        return;
      case 'select':
        Ne = x = C = be = null;
        for (o in n)
          if (((K = n[o]), n.hasOwnProperty(o) && K != null))
            switch (o) {
              case 'value':
                break;
              case 'multiple':
                Ne = K;
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
          (l = Ne),
          be != null ? sa(e, !!n, be, !1) : !!l != !!n && (t != null ? sa(e, !!n, t, !0) : sa(e, !!n, n ? [] : '', !1));
        return;
      case 'textarea':
        Ne = be = null;
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
                Ne = c;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(u(91));
                break;
              default:
                c !== o && At(e, t, x, c, l, o);
            }
        Dd(e, be, Ne);
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
          if (((be = l[K]), (Ne = n[K]), l.hasOwnProperty(K) && be !== Ne && (be != null || Ne != null)))
            switch (K) {
              case 'selected':
                e.selected = be && typeof be != 'function' && typeof be != 'symbol';
                break;
              default:
                At(e, t, K, be, l, Ne);
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
          if (((be = l[fe]), (Ne = n[fe]), l.hasOwnProperty(fe) && be !== Ne && (be != null || Ne != null)))
            switch (fe) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (be != null) throw Error(u(137, t));
                break;
              default:
                At(e, t, fe, be, l, Ne);
            }
        return;
      default:
        if (vc(t)) {
          for (var Vt in n)
            (be = n[Vt]), n.hasOwnProperty(Vt) && be !== void 0 && !l.hasOwnProperty(Vt) && nf(e, t, Vt, void 0, l, be);
          for (_e in l)
            (be = l[_e]),
              (Ne = n[_e]),
              !l.hasOwnProperty(_e) || be === Ne || (be === void 0 && Ne === void 0) || nf(e, t, _e, be, l, Ne);
          return;
        }
    }
    for (var pe in n)
      (be = n[pe]), n.hasOwnProperty(pe) && be != null && !l.hasOwnProperty(pe) && At(e, t, pe, null, l, be);
    for (Be in l)
      (be = l[Be]),
        (Ne = n[Be]),
        !l.hasOwnProperty(Be) || be === Ne || (be == null && Ne == null) || At(e, t, Be, be, l, Ne);
  }
  var af = null,
    lf = null;
  function hs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Tm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Om(e, t) {
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
  function uf(e, t) {
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
  var sf = null;
  function yv() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === sf ? !1 : ((sf = e), !0)) : ((sf = null), !1);
  }
  var Mm = typeof setTimeout == 'function' ? setTimeout : void 0,
    vv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Rm = typeof Promise == 'function' ? Promise : void 0,
    bv =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Rm < 'u'
          ? function (e) {
              return Rm.resolve(null).then(e).catch(Sv);
            }
          : Mm;
  function Sv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function cf(e, t) {
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
  function of(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          of(n), Ka(n);
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
  function Bm(e) {
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
  function Cm(e, t, n) {
    switch (((t = hs(n)), e)) {
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
    Dm = new Set();
  function ms(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
  }
  var Ln = O.d;
  O.d = { f: Ev, r: Av, D: Nv, C: _v, L: Tv, m: Ov, X: Rv, S: Mv, M: Bv };
  function Ev() {
    var e = Ln.f(),
      t = ls();
    return e || t;
  }
  function Av(e) {
    var t = Pn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? l0(t) : Ln.r(e);
  }
  var ka = typeof document > 'u' ? null : document;
  function Um(e, t, n) {
    var l = ka;
    if (l && typeof t == 'string' && t) {
      var c = Lr(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof n == 'string' && (c += '[crossorigin="' + n + '"]'),
        Dm.has(c) ||
          (Dm.add(c),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(c) === null &&
            ((t = l.createElement('link')), ir(t, 'link', e), Je(t), l.head.appendChild(t)));
    }
  }
  function Nv(e) {
    Ln.D(e), Um('dns-prefetch', e, null);
  }
  function _v(e, t) {
    Ln.C(e, t), Um('preconnect', e, t);
  }
  function Tv(e, t, n) {
    Ln.L(e, t, n);
    var l = ka;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + Lr(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((c += '[imagesrcset="' + Lr(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (c += '[imagesizes="' + Lr(n.imageSizes) + '"]'))
        : (c += '[href="' + Lr(e) + '"]');
      var o = c;
      switch (t) {
        case 'style':
          o = Ia(e);
          break;
        case 'script':
          o = qa(e);
      }
      Zr.has(o) ||
        ((e = T({ rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
        Zr.set(o, e),
        l.querySelector(c) !== null ||
          (t === 'style' && l.querySelector(Cl(o))) ||
          (t === 'script' && l.querySelector(Dl(o))) ||
          ((t = l.createElement('link')), ir(t, 'link', e), Je(t), l.head.appendChild(t)));
    }
  }
  function Ov(e, t) {
    Ln.m(e, t);
    var n = ka;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        c = 'link[rel="modulepreload"][as="' + Lr(l) + '"][href="' + Lr(e) + '"]',
        o = c;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          o = qa(e);
      }
      if (!Zr.has(o) && ((e = T({ rel: 'modulepreload', href: e }, t)), Zr.set(o, e), n.querySelector(c) === null)) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Dl(o))) return;
        }
        (l = n.createElement('link')), ir(l, 'link', e), Je(l), n.head.appendChild(l);
      }
    }
  }
  function Mv(e, t, n) {
    Ln.S(e, t, n);
    var l = ka;
    if (l && e) {
      var c = ee(l).hoistableStyles,
        o = Ia(e);
      t = t || 'default';
      var x = c.get(o);
      if (!x) {
        var C = { loading: 0, preload: null };
        if ((x = l.querySelector(Cl(o)))) C.loading = 5;
        else {
          (e = T({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = Zr.get(o)) && ff(e, n);
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
            ps(x, t, l);
        }
        (x = { type: 'stylesheet', instance: x, count: 1, state: C }), c.set(o, x);
      }
    }
  }
  function Rv(e, t) {
    Ln.X(e, t);
    var n = ka;
    if (n && e) {
      var l = ee(n).hoistableScripts,
        c = qa(e),
        o = l.get(c);
      o ||
        ((o = n.querySelector(Dl(c))),
        o ||
          ((e = T({ src: e, async: !0 }, t)),
          (t = Zr.get(c)) && df(e, t),
          (o = n.createElement('script')),
          Je(o),
          ir(o, 'link', e),
          n.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        l.set(c, o));
    }
  }
  function Bv(e, t) {
    Ln.M(e, t);
    var n = ka;
    if (n && e) {
      var l = ee(n).hoistableScripts,
        c = qa(e),
        o = l.get(c);
      o ||
        ((o = n.querySelector(Dl(c))),
        o ||
          ((e = T({ src: e, async: !0, type: 'module' }, t)),
          (t = Zr.get(c)) && df(e, t),
          (o = n.createElement('script')),
          Je(o),
          ir(o, 'link', e),
          n.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        l.set(c, o));
    }
  }
  function jm(e, t, n, l) {
    var c = (c = se.current) ? ms(c) : null;
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
              (o = c.querySelector(Cl(e))) && !o._p && ((x.instance = o), (x.state.loading = 5)),
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
            ? ((t = qa(n)),
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
    return 'href="' + Lr(e) + '"';
  }
  function Cl(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function km(e) {
    return T({}, e, { 'data-precedence': e.precedence, precedence: null });
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
  function qa(e) {
    return '[src="' + Lr(e) + '"]';
  }
  function Dl(e) {
    return 'script[async]' + e;
  }
  function Im(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Lr(n.href) + '"]');
          if (l) return (t.instance = l), Je(l), l;
          var c = T({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Je(l),
            ir(l, 'style', c),
            ps(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          c = Ia(n.href);
          var o = e.querySelector(Cl(c));
          if (o) return (t.state.loading |= 4), (t.instance = o), Je(o), o;
          (l = km(n)), (c = Zr.get(c)) && ff(l, c), (o = (e.ownerDocument || e).createElement('link')), Je(o);
          var x = o;
          return (
            (x._p = new Promise(function (C, K) {
              (x.onload = C), (x.onerror = K);
            })),
            ir(o, 'link', l),
            (t.state.loading |= 4),
            ps(o, n.precedence, e),
            (t.instance = o)
          );
        case 'script':
          return (
            (o = qa(n.src)),
            (c = e.querySelector(Dl(o)))
              ? ((t.instance = c), Je(c), c)
              : ((l = n),
                (c = Zr.get(o)) && ((l = T({}, n)), df(l, c)),
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
        ((l = t.instance), (t.state.loading |= 4), ps(l, n.precedence, e));
    return t.instance;
  }
  function ps(e, t, n) {
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
  function ff(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function df(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var gs = null;
  function qm(e, t, n) {
    if (gs === null) {
      var l = new Map(),
        c = (gs = new Map());
      c.set(n, l);
    } else (c = gs), (l = c.get(n)), l || ((l = new Map()), c.set(n, l));
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
  function zm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var Ul = null;
  function Uv() {}
  function jv(e, t, n) {
    if (Ul === null) throw Error(u(475));
    var l = Ul;
    if (
      t.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var c = Ia(n.href),
          o = e.querySelector(Cl(c));
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
        (o = e.ownerDocument || e), (n = km(n)), (c = Zr.get(c)) && ff(n, c), (o = o.createElement('link')), Je(o);
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
    if (Ul === null) throw Error(u(475));
    var e = Ul;
    return (
      e.stylesheets && e.count === 0 && hf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && hf(e, e.stylesheets), e.unsuspend)) {
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
      if (this.stylesheets) hf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var vs = null;
  function hf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null && (e.count++, (vs = new Map()), t.forEach(Iv, e), (vs = null), ys.call(e));
  }
  function Iv(e, t) {
    if (!(t.state.loading & 4)) {
      var n = vs.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), vs.set(e, n);
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
  var jl = { $$typeof: w, Provider: null, Consumer: null, _currentValue: je, _currentValue2: je, _threadCount: 0 };
  function qv(e, t, n, l, c, o, x, C) {
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
  function Hm(e, t, n, l, c, o, x, C, K, fe, _e, Be) {
    return (
      (e = new qv(e, t, n, x, C, K, fe, Be)),
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
      Ao(o),
      e
    );
  }
  function Vm(e) {
    return e ? ((e = ga), e) : ga;
  }
  function Fm(e, t, n, l, c, o) {
    (c = Vm(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = li(t)),
      (l.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = ui(e, l, t)),
      n !== null && (pr(n, e, t), vl(n, e, t));
  }
  function Gm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function mf(e, t) {
    Gm(e, t), (e = e.alternate) && Gm(e, t);
  }
  function $m(e) {
    if (e.tag === 13) {
      var t = Wn(e, 67108864);
      t !== null && pr(t, e, 67108864), mf(e, 67108864);
    }
  }
  var bs = !0;
  function Lv(e, t, n, l) {
    var c = A.T;
    A.T = null;
    var o = O.p;
    try {
      (O.p = 2), pf(e, t, n, l);
    } finally {
      (O.p = o), (A.T = c);
    }
  }
  function zv(e, t, n, l) {
    var c = A.T;
    A.T = null;
    var o = O.p;
    try {
      (O.p = 8), pf(e, t, n, l);
    } finally {
      (O.p = o), (A.T = c);
    }
  }
  function pf(e, t, n, l) {
    if (bs) {
      var c = gf(l);
      if (c === null) rf(e, t, l, Ss, n), Xm(e, l);
      else if (Vv(c, e, t, n, l)) l.stopPropagation();
      else if ((Xm(e, l), t & 4 && -1 < Hv.indexOf(e))) {
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
                    gn(o), (It & 6) === 0 && ((ns = De() + 500), Ml(0));
                  }
                }
                break;
              case 13:
                (C = Wn(o, 2)), C !== null && pr(C, o, 2), ls(), mf(o, 2);
            }
          if (((o = gf(l)), o === null && rf(e, t, l, Ss, n), o === c)) break;
          c = o;
        }
        c !== null && l.stopPropagation();
      } else rf(e, t, l, null, n);
    }
  }
  function gf(e) {
    return (e = Sc(e)), yf(e);
  }
  var Ss = null;
  function yf(e) {
    if (((Ss = null), (e = pt(e)), e !== null)) {
      var t = z(e);
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
    return (Ss = e), null;
  }
  function Ym(e) {
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
          case E:
            return 8;
          case m:
          case y:
            return 32;
          case F:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vf = !1,
    mi = null,
    pi = null,
    gi = null,
    kl = new Map(),
    Il = new Map(),
    yi = [],
    Hv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Xm(e, t) {
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
        gi = null;
        break;
      case 'pointerover':
      case 'pointerout':
        kl.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Il.delete(t.pointerId);
    }
  }
  function ql(e, t, n, l, c, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: l, nativeEvent: o, targetContainers: [c] }),
        t !== null && ((t = Pn(t)), t !== null && $m(t)),
        e)
      : ((e.eventSystemFlags |= l), (t = e.targetContainers), c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function Vv(e, t, n, l, c) {
    switch (t) {
      case 'focusin':
        return (mi = ql(mi, e, t, n, l, c)), !0;
      case 'dragenter':
        return (pi = ql(pi, e, t, n, l, c)), !0;
      case 'mouseover':
        return (gi = ql(gi, e, t, n, l, c)), !0;
      case 'pointerover':
        var o = c.pointerId;
        return kl.set(o, ql(kl.get(o) || null, e, t, n, l, c)), !0;
      case 'gotpointercapture':
        return (o = c.pointerId), Il.set(o, ql(Il.get(o) || null, e, t, n, l, c)), !0;
    }
    return !1;
  }
  function Km(e) {
    var t = pt(e.target);
    if (t !== null) {
      var n = z(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = oe(n)), t !== null)) {
            (e.blockedOn = t),
              hc(e.priority, function () {
                if (n.tag === 13) {
                  var l = Br(),
                    c = Wn(n, l);
                  c !== null && pr(c, n, l), mf(n, l);
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
  function xs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = gf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (bc = l), n.target.dispatchEvent(l), (bc = null);
      } else return (t = Pn(n)), t !== null && $m(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Zm(e, t, n) {
    xs(e) && n.delete(t);
  }
  function Fv() {
    (vf = !1),
      mi !== null && xs(mi) && (mi = null),
      pi !== null && xs(pi) && (pi = null),
      gi !== null && xs(gi) && (gi = null),
      kl.forEach(Zm),
      Il.forEach(Zm);
  }
  function ws(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), vf || ((vf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Fv)));
  }
  var Es = null;
  function Qm(e) {
    Es !== e &&
      ((Es = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        Es === e && (Es = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            c = e[t + 2];
          if (typeof l != 'function') {
            if (yf(l || n) === null) continue;
            break;
          }
          var o = Pn(n);
          o !== null && (e.splice(t, 3), (t -= 3), ao(o, { pending: !0, data: c, method: n.method, action: l }, l, c));
        }
      }));
  }
  function Ll(e) {
    function t(K) {
      return ws(K, e);
    }
    mi !== null && ws(mi, e), pi !== null && ws(pi, e), gi !== null && ws(gi, e), kl.forEach(t), Il.forEach(t);
    for (var n = 0; n < yi.length; n++) {
      var l = yi[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < yi.length && ((n = yi[0]), n.blockedOn === null); ) Km(n), n.blockedOn === null && yi.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var c = n[l],
          o = n[l + 1],
          x = c[lr] || null;
        if (typeof o == 'function') x || Qm(n);
        else if (x) {
          var C = null;
          if (o && o.hasAttribute('formAction')) {
            if (((c = o), (x = o[lr] || null))) C = x.formAction;
            else if (yf(c) !== null) continue;
          } else C = x.action;
          typeof C == 'function' ? (n[l + 1] = C) : (n.splice(l, 3), (l -= 3)), Qm(n);
        }
      }
  }
  function bf(e) {
    this._internalRoot = e;
  }
  (As.prototype.render = bf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var n = t.current,
        l = Br();
      Fm(n, l, e, t, null, null);
    }),
    (As.prototype.unmount = bf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Da(), Fm(e.current, 2, null, e, null, null), ls(), (t[Qn] = null);
        }
      });
  function As(e) {
    this._internalRoot = e;
  }
  As.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < yi.length && t !== 0 && t < yi[n].priority; n++);
      yi.splice(n, 0, e), n === 0 && Km(e);
    }
  };
  var Pm = i.version;
  if (Pm !== '19.0.0') throw Error(u(527, Pm, '19.0.0'));
  O.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ? Error(u(188)) : ((e = Object.keys(e).join(',')), Error(u(268, e)));
    return (e = ne(t)), (e = e !== null ? Ee(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var Gv = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    findFiberByHostInstance: pt,
    reconcilerVersion: '19.0.0'
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ns.isDisabled && Ns.supportsFiber)
      try {
        (q = Ns.inject(Gv)), (de = Ns);
      } catch {}
  }
  return (
    (Hl.createRoot = function (e, t) {
      if (!s(e)) throw Error(u(299));
      var n = !1,
        l = '',
        c = m0,
        o = p0,
        x = g0,
        C = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (x = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (C = t.unstable_transitionCallbacks)),
        (t = Hm(e, 1, !1, null, null, n, l, c, o, x, C, null)),
        (e[Qn] = t.current),
        tf(e.nodeType === 8 ? e.parentNode : e),
        new bf(t)
      );
    }),
    (Hl.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(u(299));
      var l = !1,
        c = '',
        o = m0,
        x = p0,
        C = g0,
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
        (t = Hm(e, 1, !0, t, n ?? null, l, c, o, x, C, K, fe)),
        (t.context = Vm(null)),
        (n = t.current),
        (l = Br()),
        (c = li(l)),
        (c.callback = null),
        ui(n, c, l),
        (t.current.lanes = l),
        Tt(t, l),
        gn(t),
        (e[Qn] = t.current),
        tf(e),
        new As(t)
      );
    }),
    (Hl.version = '19.0.0'),
    Hl
  );
}
var sp;
function rb() {
  if (sp) return wf.exports;
  sp = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), (wf.exports = tb()), wf.exports;
}
var nb = rb();
const ib = ru(nb);
var Vl = {},
  cp;
function ab() {
  if (cp) return Vl;
  (cp = 1), Object.defineProperty(Vl, '__esModule', { value: !0 }), (Vl.parse = d), (Vl.serialize = g);
  const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    u = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    f = (() => {
      const S = function () {};
      return (S.prototype = Object.create(null)), S;
    })();
  function d(S, w) {
    const D = new f(),
      P = S.length;
    if (P < 2) return D;
    const J = (w == null ? void 0 : w.decode) || N;
    let W = 0;
    do {
      const H = S.indexOf('=', W);
      if (H === -1) break;
      const Se = S.indexOf(';', W),
        Le = Se === -1 ? P : Se;
      if (H > Le) {
        W = S.lastIndexOf(';', H - 1) + 1;
        continue;
      }
      const we = h(S, W, H),
        he = p(S, H, we),
        Ae = S.slice(we, he);
      if (D[Ae] === void 0) {
        let b = h(S, H + 1, Le),
          A = p(S, Le, b);
        const T = J(S.slice(b, A));
        D[Ae] = T;
      }
      W = Le + 1;
    } while (W < P);
    return D;
  }
  function h(S, w, D) {
    do {
      const P = S.charCodeAt(w);
      if (P !== 32 && P !== 9) return w;
    } while (++w < D);
    return D;
  }
  function p(S, w, D) {
    for (; w > D; ) {
      const P = S.charCodeAt(--w);
      if (P !== 32 && P !== 9) return w + 1;
    }
    return D;
  }
  function g(S, w, D) {
    const P = (D == null ? void 0 : D.encode) || encodeURIComponent;
    if (!r.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
    const J = P(w);
    if (!i.test(J)) throw new TypeError(`argument val is invalid: ${w}`);
    let W = S + '=' + J;
    if (!D) return W;
    if (D.maxAge !== void 0) {
      if (!Number.isInteger(D.maxAge)) throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);
      W += '; Max-Age=' + D.maxAge;
    }
    if (D.domain) {
      if (!a.test(D.domain)) throw new TypeError(`option domain is invalid: ${D.domain}`);
      W += '; Domain=' + D.domain;
    }
    if (D.path) {
      if (!u.test(D.path)) throw new TypeError(`option path is invalid: ${D.path}`);
      W += '; Path=' + D.path;
    }
    if (D.expires) {
      if (!v(D.expires) || !Number.isFinite(D.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${D.expires}`);
      W += '; Expires=' + D.expires.toUTCString();
    }
    if (
      (D.httpOnly && (W += '; HttpOnly'),
      D.secure && (W += '; Secure'),
      D.partitioned && (W += '; Partitioned'),
      D.priority)
    )
      switch (typeof D.priority == 'string' ? D.priority.toLowerCase() : void 0) {
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
          throw new TypeError(`option priority is invalid: ${D.priority}`);
      }
    if (D.sameSite)
      switch (typeof D.sameSite == 'string' ? D.sameSite.toLowerCase() : D.sameSite) {
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
          throw new TypeError(`option sameSite is invalid: ${D.sameSite}`);
      }
    return W;
  }
  function N(S) {
    if (S.indexOf('%') === -1) return S;
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }
  function v(S) {
    return s.call(S) === '[object Date]';
  }
  return Vl;
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
 */ var op = 'popstate';
function lb(r = {}) {
  function i(u, s) {
    let { pathname: f, search: d, hash: h } = u.location;
    return Jf(
      '',
      { pathname: f, search: d, hash: h },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default'
    );
  }
  function a(u, s) {
    return typeof s == 'string' ? s : eu(s);
  }
  return sb(i, a, null, r);
}
function Lt(r, i) {
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
function fp(r, i) {
  return { usr: r.state, key: r.key, idx: i };
}
function Jf(r, i, a = null, u) {
  return {
    pathname: typeof r == 'string' ? r : r.pathname,
    search: '',
    hash: '',
    ...(typeof i == 'string' ? $a(i) : i),
    state: a,
    key: (i && i.key) || u || ub()
  };
}
function eu({ pathname: r = '/', search: i = '', hash: a = '' }) {
  return (
    i && i !== '?' && (r += i.charAt(0) === '?' ? i : '?' + i),
    a && a !== '#' && (r += a.charAt(0) === '#' ? a : '#' + a),
    r
  );
}
function $a(r) {
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
    g = N();
  g == null && ((g = 0), d.replaceState({ ...d.state, idx: g }, ''));
  function N() {
    return (d.state || { idx: null }).idx;
  }
  function v() {
    h = 'POP';
    let J = N(),
      W = J == null ? null : J - g;
    (g = J), p && p({ action: h, location: P.location, delta: W });
  }
  function S(J, W) {
    h = 'PUSH';
    let H = Jf(P.location, J, W);
    g = N() + 1;
    let Se = fp(H, g),
      Le = P.createHref(H);
    try {
      d.pushState(Se, '', Le);
    } catch (we) {
      if (we instanceof DOMException && we.name === 'DataCloneError') throw we;
      s.location.assign(Le);
    }
    f && p && p({ action: h, location: P.location, delta: 1 });
  }
  function w(J, W) {
    h = 'REPLACE';
    let H = Jf(P.location, J, W);
    g = N();
    let Se = fp(H, g),
      Le = P.createHref(H);
    d.replaceState(Se, '', Le), f && p && p({ action: h, location: P.location, delta: 0 });
  }
  function D(J) {
    let W = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      H = typeof J == 'string' ? J : eu(J);
    return (
      (H = H.replace(/ $/, '%20')),
      Lt(W, `No window.location.(origin|href) available to create URL for href: ${H}`),
      new URL(H, W)
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
        s.addEventListener(op, v),
        (p = J),
        () => {
          s.removeEventListener(op, v), (p = null);
        }
      );
    },
    createHref(J) {
      return i(s, J);
    },
    createURL: D,
    encodeLocation(J) {
      let W = D(J);
      return { pathname: W.pathname, search: W.search, hash: W.hash };
    },
    push: S,
    replace: w,
    go(J) {
      return d.go(J);
    }
  };
  return P;
}
function xg(r, i, a = '/') {
  return cb(r, i, a, !1);
}
function cb(r, i, a, u) {
  let s = typeof i == 'string' ? $a(i) : i,
    f = Xn(s.pathname || '/', a);
  if (f == null) return null;
  let d = wg(r);
  ob(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let g = xb(f);
    h = bb(d[p], g, u);
  }
  return h;
}
function wg(r, i = [], a = [], u = '') {
  let s = (f, d, h) => {
    let p = {
      relativePath: h === void 0 ? f.path || '' : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f
    };
    p.relativePath.startsWith('/') &&
      (Lt(
        p.relativePath.startsWith(u),
        `Absolute route path "${p.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(u.length)));
    let g = $n([u, p.relativePath]),
      N = a.concat(p);
    f.children &&
      f.children.length > 0 &&
      (Lt(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      wg(f.children, i, N, g)),
      !(f.path == null && !f.index) && i.push({ path: g, score: yb(g, f.index), routesMeta: N });
  };
  return (
    r.forEach((f, d) => {
      var h;
      if (f.path === '' || !((h = f.path) != null && h.includes('?'))) s(f, d);
      else for (let p of Eg(f.path)) s(f, d, p);
    }),
    i
  );
}
function Eg(r) {
  let i = r.split('/');
  if (i.length === 0) return [];
  let [a, ...u] = i,
    s = a.endsWith('?'),
    f = a.replace(/\?$/, '');
  if (u.length === 0) return s ? [f, ''] : [f];
  let d = Eg(u.join('/')),
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
  gb = -2,
  dp = (r) => r === '*';
function yb(r, i) {
  let a = r.split('/'),
    u = a.length;
  return (
    a.some(dp) && (u += gb),
    i && (u += hb),
    a.filter((s) => !dp(s)).reduce((s, f) => s + (fb.test(f) ? db : f === '' ? mb : pb), u)
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
      g = h === u.length - 1,
      N = f === '/' ? i : i.slice(f.length) || '/',
      v = Hs({ path: p.relativePath, caseSensitive: p.caseSensitive, end: g }, N),
      S = p.route;
    if (
      (!v &&
        g &&
        a &&
        !u[u.length - 1].route.index &&
        (v = Hs({ path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 }, N)),
      !v)
    )
      return null;
    Object.assign(s, v.params),
      d.push({ params: s, pathname: $n([f, v.pathname]), pathnameBase: Nb($n([f, v.pathnameBase])), route: S }),
      v.pathnameBase !== '/' && (f = $n([f, v.pathnameBase]));
  }
  return d;
}
function Hs(r, i) {
  typeof r == 'string' && (r = { path: r, caseSensitive: !1, end: !0 });
  let [a, u] = Sb(r.path, r.caseSensitive, r.end),
    s = i.match(a);
  if (!s) return null;
  let f = s[0],
    d = f.replace(/(.)\/+$/, '$1'),
    h = s.slice(1);
  return {
    params: u.reduce((g, { paramName: N, isOptional: v }, S) => {
      if (N === '*') {
        let D = h[S] || '';
        d = f.slice(0, f.length - D.length).replace(/(.)\/+$/, '$1');
      }
      const w = h[S];
      return v && !w ? (g[N] = void 0) : (g[N] = (w || '').replace(/%2F/g, '/')), g;
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
  let { pathname: a, search: u = '', hash: s = '' } = typeof r == 'string' ? $a(r) : r;
  return { pathname: a ? (a.startsWith('/') ? a : Eb(a, i)) : i, search: _b(u), hash: Tb(s) };
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
function Ag(r) {
  let i = Ab(r);
  return i.map((a, u) => (u === i.length - 1 ? a.pathname : a.pathnameBase));
}
function Ng(r, i, a, u = !1) {
  let s;
  typeof r == 'string'
    ? (s = $a(r))
    : ((s = { ...r }),
      Lt(!s.pathname || !s.pathname.includes('?'), _f('?', 'pathname', 'search', s)),
      Lt(!s.pathname || !s.pathname.includes('#'), _f('#', 'pathname', 'hash', s)),
      Lt(!s.search || !s.search.includes('#'), _f('#', 'search', 'hash', s)));
  let f = r === '' || s.pathname === '',
    d = f ? '/' : s.pathname,
    h;
  if (d == null) h = a;
  else {
    let v = i.length - 1;
    if (!u && d.startsWith('..')) {
      let S = d.split('/');
      for (; S[0] === '..'; ) S.shift(), (v -= 1);
      s.pathname = S.join('/');
    }
    h = v >= 0 ? i[v] : '/';
  }
  let p = wb(s, h),
    g = d && d !== '/' && d.endsWith('/'),
    N = (f || d === '.') && a.endsWith('/');
  return !p.pathname.endsWith('/') && (g || N) && (p.pathname += '/'), p;
}
var $n = (r) => r.join('/').replace(/\/\/+/g, '/'),
  Nb = (r) => r.replace(/\/+$/, '').replace(/^\/*/, '/'),
  _b = (r) => (!r || r === '?' ? '' : r.startsWith('?') ? r : '?' + r),
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
var _g = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(_g);
var Mb = ['GET', ..._g];
new Set(Mb);
var Ya = le.createContext(null);
Ya.displayName = 'DataRouter';
var tc = le.createContext(null);
tc.displayName = 'DataRouterState';
var Tg = le.createContext({ isTransitioning: !1 });
Tg.displayName = 'ViewTransition';
var Rb = le.createContext(new Map());
Rb.displayName = 'Fetchers';
var Bb = le.createContext(null);
Bb.displayName = 'Await';
var En = le.createContext(null);
En.displayName = 'Navigation';
var nu = le.createContext(null);
nu.displayName = 'Location';
var Zn = le.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Zn.displayName = 'Route';
var cd = le.createContext(null);
cd.displayName = 'RouteError';
function Cb(r, { relative: i } = {}) {
  Lt(iu(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: a, navigator: u } = le.useContext(En),
    { hash: s, pathname: f, search: d } = au(r, { relative: i }),
    h = f;
  return a !== '/' && (h = f === '/' ? a : $n([a, f])), u.createHref({ pathname: h, search: d, hash: s });
}
function iu() {
  return le.useContext(nu) != null;
}
function na() {
  return Lt(iu(), 'useLocation() may be used only in the context of a <Router> component.'), le.useContext(nu).location;
}
var Og = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Mg(r) {
  le.useContext(En).static || le.useLayoutEffect(r);
}
function Db() {
  let { isDataRoute: r } = le.useContext(Zn);
  return r ? Yb() : Ub();
}
function Ub() {
  Lt(iu(), 'useNavigate() may be used only in the context of a <Router> component.');
  let r = le.useContext(Ya),
    { basename: i, navigator: a } = le.useContext(En),
    { matches: u } = le.useContext(Zn),
    { pathname: s } = na(),
    f = JSON.stringify(Ag(u)),
    d = le.useRef(!1);
  return (
    Mg(() => {
      d.current = !0;
    }),
    le.useCallback(
      (p, g = {}) => {
        if ((wn(d.current, Og), !d.current)) return;
        if (typeof p == 'number') {
          a.go(p);
          return;
        }
        let N = Ng(p, JSON.parse(f), s, g.relative === 'path');
        r == null && i !== '/' && (N.pathname = N.pathname === '/' ? i : $n([i, N.pathname])),
          (g.replace ? a.replace : a.push)(N, g.state, g);
      },
      [i, a, f, s, r]
    )
  );
}
le.createContext(null);
function au(r, { relative: i } = {}) {
  let { matches: a } = le.useContext(Zn),
    { pathname: u } = na(),
    s = JSON.stringify(Ag(a));
  return le.useMemo(() => Ng(r, JSON.parse(s), u, i === 'path'), [r, s, u, i]);
}
function jb(r, i) {
  return Rg(r, i);
}
function Rg(r, i, a, u) {
  var H;
  Lt(iu(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: s, static: f } = le.useContext(En),
    { matches: d } = le.useContext(Zn),
    h = d[d.length - 1],
    p = h ? h.params : {},
    g = h ? h.pathname : '/',
    N = h ? h.pathnameBase : '/',
    v = h && h.route;
  {
    let Se = (v && v.path) || '';
    Bg(
      g,
      !v || Se.endsWith('*') || Se.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Se}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Se}"> to <Route path="${Se === '/' ? '*' : `${Se}/*`}">.`
    );
  }
  let S = na(),
    w;
  if (i) {
    let Se = typeof i == 'string' ? $a(i) : i;
    Lt(
      N === '/' || ((H = Se.pathname) == null ? void 0 : H.startsWith(N)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${Se.pathname}" was given in the \`location\` prop.`
    ),
      (w = Se);
  } else w = S;
  let D = w.pathname || '/',
    P = D;
  if (N !== '/') {
    let Se = N.replace(/^\//, '').split('/');
    P = '/' + D.replace(/^\//, '').split('/').slice(Se.length).join('/');
  }
  let J = !f && a && a.matches && a.matches.length > 0 ? a.matches : xg(r, { pathname: P });
  wn(v || J != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `),
    wn(
      J == null ||
        J[J.length - 1].route.element !== void 0 ||
        J[J.length - 1].route.Component !== void 0 ||
        J[J.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let W = zb(
    J &&
      J.map((Se) =>
        Object.assign({}, Se, {
          params: Object.assign({}, p, Se.params),
          pathname: $n([N, s.encodeLocation ? s.encodeLocation(Se.pathname).pathname : Se.pathname]),
          pathnameBase:
            Se.pathnameBase === '/'
              ? N
              : $n([N, s.encodeLocation ? s.encodeLocation(Se.pathnameBase).pathname : Se.pathnameBase])
        })
      ),
    d,
    a,
    u
  );
  return i && W
    ? le.createElement(
        nu.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...w },
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
  qb = class extends le.Component {
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
            le.createElement(cd.Provider, { value: this.state.error, children: this.props.component })
          )
        : this.props.children;
    }
  };
function Lb({ routeContext: r, match: i, children: a }) {
  let u = le.useContext(Ya);
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
    let p = s.findIndex((g) => g.route.id && (f == null ? void 0 : f[g.route.id]) !== void 0);
    Lt(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`),
      (s = s.slice(0, Math.min(s.length, p + 1)));
  }
  let d = !1,
    h = -1;
  if (a)
    for (let p = 0; p < s.length; p++) {
      let g = s[p];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = p), g.route.id)) {
        let { loaderData: N, errors: v } = a,
          S = g.route.loader && !N.hasOwnProperty(g.route.id) && (!v || v[g.route.id] === void 0);
        if (g.route.lazy || S) {
          (d = !0), h >= 0 ? (s = s.slice(0, h + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((p, g, N) => {
    let v,
      S = !1,
      w = null,
      D = null;
    a &&
      ((v = f && g.route.id ? f[g.route.id] : void 0),
      (w = g.route.errorElement || Ib),
      d &&
        (h < 0 && N === 0
          ? (Bg('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'),
            (S = !0),
            (D = null))
          : h === N && ((S = !0), (D = g.route.hydrateFallbackElement || null))));
    let P = i.concat(s.slice(0, N + 1)),
      J = () => {
        let W;
        return (
          v
            ? (W = w)
            : S
              ? (W = D)
              : g.route.Component
                ? (W = le.createElement(g.route.Component, null))
                : g.route.element
                  ? (W = g.route.element)
                  : (W = p),
          le.createElement(Lb, {
            match: g,
            routeContext: { outlet: p, matches: P, isDataRoute: a != null },
            children: W
          })
        );
      };
    return a && (g.route.ErrorBoundary || g.route.errorElement || N === 0)
      ? le.createElement(qb, {
          location: a.location,
          revalidation: a.revalidation,
          component: w,
          error: v,
          children: J(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 }
        })
      : J();
  }, null);
}
function od(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Hb(r) {
  let i = le.useContext(Ya);
  return Lt(i, od(r)), i;
}
function Vb(r) {
  let i = le.useContext(tc);
  return Lt(i, od(r)), i;
}
function Fb(r) {
  let i = le.useContext(Zn);
  return Lt(i, od(r)), i;
}
function fd(r) {
  let i = Fb(r),
    a = i.matches[i.matches.length - 1];
  return Lt(a.route.id, `${r} can only be used on routes that contain a unique "id"`), a.route.id;
}
function Gb() {
  return fd('useRouteId');
}
function $b() {
  var u;
  let r = le.useContext(cd),
    i = Vb('useRouteError'),
    a = fd('useRouteError');
  return r !== void 0 ? r : (u = i.errors) == null ? void 0 : u[a];
}
function Yb() {
  let { router: r } = Hb('useNavigate'),
    i = fd('useNavigate'),
    a = le.useRef(!1);
  return (
    Mg(() => {
      a.current = !0;
    }),
    le.useCallback(
      async (s, f = {}) => {
        wn(a.current, Og),
          a.current && (typeof s == 'number' ? r.navigate(s) : await r.navigate(s, { fromRouteId: i, ...f }));
      },
      [r, i]
    )
  );
}
var hp = {};
function Bg(r, i, a) {
  !i && !hp[r] && ((hp[r] = !0), wn(!1, a));
}
le.memo(Xb);
function Xb({ routes: r, future: i, state: a }) {
  return Rg(r, void 0, a, i);
}
function Wf(r) {
  Lt(
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
  Lt(!iu(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.');
  let d = r.replace(/^\/*/, '/'),
    h = le.useMemo(() => ({ basename: d, navigator: s, static: f, future: {} }), [d, s, f]);
  typeof a == 'string' && (a = $a(a));
  let { pathname: p = '/', search: g = '', hash: N = '', state: v = null, key: S = 'default' } = a,
    w = le.useMemo(() => {
      let D = Xn(p, d);
      return D == null ? null : { location: { pathname: D, search: g, hash: N, state: v, key: S }, navigationType: u };
    }, [d, p, g, N, v, S, u]);
  return (
    wn(
      w != null,
      `<Router basename="${d}"> is not able to match the URL "${p}${g}${N}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : le.createElement(En.Provider, { value: h }, le.createElement(nu.Provider, { children: i, value: w }))
  );
}
function Zb({ children: r, location: i }) {
  return jb(ed(r), i);
}
function ed(r, i = []) {
  let a = [];
  return (
    le.Children.forEach(r, (u, s) => {
      if (!le.isValidElement(u)) return;
      let f = [...i, s];
      if (u.type === le.Fragment) {
        a.push.apply(a, ed(u.props.children, f));
        return;
      }
      Lt(
        u.type === Wf,
        `[${typeof u.type == 'string' ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Lt(!u.props.index || !u.props.children, 'An index route cannot have child routes.');
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
      u.props.children && (d.children = ed(u.props.children, f)), a.push(d);
    }),
    a
  );
}
var Ds = 'get',
  Us = 'application/x-www-form-urlencoded';
function rc(r) {
  return r != null && typeof r.tagName == 'string';
}
function Qb(r) {
  return rc(r) && r.tagName.toLowerCase() === 'button';
}
function Pb(r) {
  return rc(r) && r.tagName.toLowerCase() === 'form';
}
function Jb(r) {
  return rc(r) && r.tagName.toLowerCase() === 'input';
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
function Tf(r) {
  return r != null && !rS.has(r)
    ? (wn(!1, `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Us}"`), null)
    : r;
}
function nS(r, i) {
  let a, u, s, f, d;
  if (Pb(r)) {
    let h = r.getAttribute('action');
    (u = h ? Xn(h, i) : null),
      (a = r.getAttribute('method') || Ds),
      (s = Tf(r.getAttribute('enctype')) || Us),
      (f = new FormData(r));
  } else if (Qb(r) || (Jb(r) && (r.type === 'submit' || r.type === 'image'))) {
    let h = r.form;
    if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let p = r.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((u = p ? Xn(p, i) : null),
      (a = r.getAttribute('formmethod') || h.getAttribute('method') || Ds),
      (s = Tf(r.getAttribute('formenctype')) || Tf(h.getAttribute('enctype')) || Us),
      (f = new FormData(h, r)),
      !tS())
    ) {
      let { name: g, type: N, value: v } = r;
      if (N === 'image') {
        let S = g ? `${g}.` : '';
        f.append(`${S}x`, '0'), f.append(`${S}y`, '0');
      } else g && f.append(g, v);
    }
  } else {
    if (rc(r)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    (a = Ds), (u = null), (s = Us), (d = r);
  }
  return (
    f && s === 'text/plain' && ((d = f), (f = void 0)),
    { action: u, method: a.toLowerCase(), encType: s, formData: f, body: d }
  );
}
function dd(r, i) {
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
function mp(r, i, a, u, s, f) {
  let d = (p, g) => (a[g] ? p.route.id !== a[g].route.id : !0),
    h = (p, g) => {
      var N;
      return (
        a[g].pathname !== p.pathname ||
        (((N = a[g].route.path) == null ? void 0 : N.endsWith('*')) && a[g].params['*'] !== p.params['*'])
      );
    };
  return f === 'assets'
    ? i.filter((p, g) => d(p, g) || h(p, g))
    : f === 'data'
      ? i.filter((p, g) => {
          var v;
          let N = u.routes[p.route.id];
          if (!N || !N.hasLoader) return !1;
          if (d(p, g) || h(p, g)) return !0;
          if (p.route.shouldRevalidate) {
            let S = p.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: ((v = a[0]) == null ? void 0 : v.params) || {},
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
function Cg() {
  let r = le.useContext(Ya);
  return dd(r, 'You must render this element inside a <DataRouterContext.Provider> element'), r;
}
function hS() {
  let r = le.useContext(tc);
  return dd(r, 'You must render this element inside a <DataRouterStateContext.Provider> element'), r;
}
var hd = le.createContext(void 0);
hd.displayName = 'FrameworkContext';
function Dg() {
  let r = le.useContext(hd);
  return dd(r, 'You must render this element inside a <HydratedRouter> element'), r;
}
function mS(r, i) {
  let a = le.useContext(hd),
    [u, s] = le.useState(!1),
    [f, d] = le.useState(!1),
    { onFocus: h, onBlur: p, onMouseEnter: g, onMouseLeave: N, onTouchStart: v } = i,
    S = le.useRef(null);
  le.useEffect(() => {
    if ((r === 'render' && d(!0), r === 'viewport')) {
      let P = (W) => {
          W.forEach((H) => {
            d(H.isIntersecting);
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
  let w = () => {
      s(!0);
    },
    D = () => {
      s(!1), d(!1);
    };
  return a
    ? r !== 'intent'
      ? [f, S, {}]
      : [
          f,
          S,
          {
            onFocus: Fl(h, w),
            onBlur: Fl(p, D),
            onMouseEnter: Fl(g, w),
            onMouseLeave: Fl(N, D),
            onTouchStart: Fl(v, w)
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
  let { router: a } = Cg(),
    u = le.useMemo(() => xg(a.routes, r, a.basename), [a.routes, r, a.basename]);
  return u ? le.createElement(yS, { page: r, matches: u, ...i }) : null;
}
function gS(r) {
  let { manifest: i, routeModules: a } = Dg(),
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
function yS({ page: r, matches: i, ...a }) {
  let u = na(),
    { manifest: s, routeModules: f } = Dg(),
    { basename: d } = Cg(),
    { loaderData: h, matches: p } = hS(),
    g = le.useMemo(() => mp(r, i, p, s, u, 'data'), [r, i, p, s, u]),
    N = le.useMemo(() => mp(r, i, p, s, u, 'assets'), [r, i, p, s, u]),
    v = le.useMemo(() => {
      if (r === u.pathname + u.search + u.hash) return [];
      let D = new Set(),
        P = !1;
      if (
        (i.forEach((W) => {
          var Se;
          let H = s.routes[W.route.id];
          !H ||
            !H.hasLoader ||
            ((!g.some((Le) => Le.route.id === W.route.id) &&
              W.route.id in h &&
              (Se = f[W.route.id]) != null &&
              Se.shouldRevalidate) ||
            H.hasClientLoader
              ? (P = !0)
              : D.add(W.route.id));
        }),
        D.size === 0)
      )
        return [];
      let J = dS(r, d);
      return (
        P &&
          D.size > 0 &&
          J.searchParams.set(
            '_routes',
            i
              .filter((W) => D.has(W.route.id))
              .map((W) => W.route.id)
              .join(',')
          ),
        [J.pathname + J.search]
      );
    }, [d, h, u, s, g, i, r, f]),
    S = le.useMemo(() => uS(N, s), [N, s]),
    w = gS(N);
  return le.createElement(
    le.Fragment,
    null,
    v.map((D) => le.createElement('link', { key: D, rel: 'prefetch', as: 'fetch', href: D, ...a })),
    S.map((D) => le.createElement('link', { key: D, rel: 'modulepreload', href: D, ...a })),
    w.map(({ key: D, link: P }) => le.createElement('link', { key: D, ...P }))
  );
}
function vS(...r) {
  return (i) => {
    r.forEach((a) => {
      typeof a == 'function' ? a(i) : a != null && (a.current = i);
    });
  };
}
var Ug = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Ug && (window.__reactRouterVersion = '7.5.1');
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
var jg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kg = le.forwardRef(function (
    {
      onClick: i,
      discover: a = 'render',
      prefetch: u = 'none',
      relative: s,
      reloadDocument: f,
      replace: d,
      state: h,
      target: p,
      to: g,
      preventScrollReset: N,
      viewTransition: v,
      ...S
    },
    w
  ) {
    let { basename: D } = le.useContext(En),
      P = typeof g == 'string' && jg.test(g),
      J,
      W = !1;
    if (typeof g == 'string' && P && ((J = g), Ug))
      try {
        let A = new URL(window.location.href),
          T = g.startsWith('//') ? new URL(A.protocol + g) : new URL(g),
          G = Xn(T.pathname, D);
        T.origin === A.origin && G != null ? (g = G + T.search + T.hash) : (W = !0);
      } catch {
        wn(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let H = Cb(g, { relative: s }),
      [Se, Le, we] = mS(u, S),
      he = wS(g, { replace: d, state: h, target: p, preventScrollReset: N, relative: s, viewTransition: v });
    function Ae(A) {
      i && i(A), A.defaultPrevented || he(A);
    }
    let b = le.createElement('a', {
      ...S,
      ...we,
      href: J || H,
      onClick: W || f ? i : Ae,
      ref: vS(w, Le),
      target: p,
      'data-discover': !P && a === 'render' ? 'true' : void 0
    });
    return Se && !P ? le.createElement(le.Fragment, null, b, le.createElement(pS, { page: H })) : b;
  });
kg.displayName = 'Link';
var td = le.forwardRef(function (
  {
    'aria-current': i = 'page',
    caseSensitive: a = !1,
    className: u = '',
    end: s = !1,
    style: f,
    to: d,
    viewTransition: h,
    children: p,
    ...g
  },
  N
) {
  let v = au(d, { relative: g.relative }),
    S = na(),
    w = le.useContext(tc),
    { navigator: D, basename: P } = le.useContext(En),
    J = w != null && TS(v) && h === !0,
    W = D.encodeLocation ? D.encodeLocation(v).pathname : v.pathname,
    H = S.pathname,
    Se = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  a || ((H = H.toLowerCase()), (Se = Se ? Se.toLowerCase() : null), (W = W.toLowerCase())),
    Se && P && (Se = Xn(Se, P) || Se);
  const Le = W !== '/' && W.endsWith('/') ? W.length - 1 : W.length;
  let we = H === W || (!s && H.startsWith(W) && H.charAt(Le) === '/'),
    he = Se != null && (Se === W || (!s && Se.startsWith(W) && Se.charAt(W.length) === '/')),
    Ae = { isActive: we, isPending: he, isTransitioning: J },
    b = we ? i : void 0,
    A;
  typeof u == 'function'
    ? (A = u(Ae))
    : (A = [u, we ? 'active' : null, he ? 'pending' : null, J ? 'transitioning' : null].filter(Boolean).join(' '));
  let T = typeof f == 'function' ? f(Ae) : f;
  return le.createElement(
    kg,
    { ...g, 'aria-current': b, className: A, ref: N, style: T, to: d, viewTransition: h },
    typeof p == 'function' ? p(Ae) : p
  );
});
td.displayName = 'NavLink';
var SS = le.forwardRef(
  (
    {
      discover: r = 'render',
      fetcherKey: i,
      navigate: a,
      reloadDocument: u,
      replace: s,
      state: f,
      method: d = Ds,
      action: h,
      onSubmit: p,
      relative: g,
      preventScrollReset: N,
      viewTransition: v,
      ...S
    },
    w
  ) => {
    let D = NS(),
      P = _S(h, { relative: g }),
      J = d.toLowerCase() === 'get' ? 'get' : 'post',
      W = typeof h == 'string' && jg.test(h),
      H = (Se) => {
        if ((p && p(Se), Se.defaultPrevented)) return;
        Se.preventDefault();
        let Le = Se.nativeEvent.submitter,
          we = (Le == null ? void 0 : Le.getAttribute('formmethod')) || d;
        D(Le || Se.currentTarget, {
          fetcherKey: i,
          method: we,
          navigate: a,
          replace: s,
          state: f,
          relative: g,
          preventScrollReset: N,
          viewTransition: v
        });
      };
    return le.createElement('form', {
      ref: w,
      method: J,
      action: P,
      onSubmit: u ? p : H,
      ...S,
      'data-discover': !W && r === 'render' ? 'true' : void 0
    });
  }
);
SS.displayName = 'Form';
function xS(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ig(r) {
  let i = le.useContext(Ya);
  return Lt(i, xS(r)), i;
}
function wS(r, { target: i, replace: a, state: u, preventScrollReset: s, relative: f, viewTransition: d } = {}) {
  let h = Db(),
    p = na(),
    g = au(r, { relative: f });
  return le.useCallback(
    (N) => {
      if (eS(N, i)) {
        N.preventDefault();
        let v = a !== void 0 ? a : eu(p) === eu(g);
        h(r, { replace: v, state: u, preventScrollReset: s, relative: f, viewTransition: d });
      }
    },
    [p, h, g, a, u, i, r, s, f, d]
  );
}
var ES = 0,
  AS = () => `__${String(++ES)}__`;
function NS() {
  let { router: r } = Ig('useSubmit'),
    { basename: i } = le.useContext(En),
    a = Gb();
  return le.useCallback(
    async (u, s = {}) => {
      let { action: f, method: d, encType: h, formData: p, body: g } = nS(u, i);
      if (s.navigate === !1) {
        let N = s.fetcherKey || AS();
        await r.fetch(N, a, s.action || f, {
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: g,
          formMethod: s.method || d,
          formEncType: s.encType || h,
          flushSync: s.flushSync
        });
      } else
        await r.navigate(s.action || f, {
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: g,
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
function _S(r, { relative: i } = {}) {
  let { basename: a } = le.useContext(En),
    u = le.useContext(Zn);
  Lt(u, 'useFormAction must be used inside a RouteContext');
  let [s] = u.matches.slice(-1),
    f = { ...au(r || '.', { relative: i }) },
    d = na();
  if (r == null) {
    f.search = d.search;
    let h = new URLSearchParams(f.search),
      p = h.getAll('index');
    if (p.some((N) => N === '')) {
      h.delete('index'), p.filter((v) => v).forEach((v) => h.append('index', v));
      let N = h.toString();
      f.search = N ? `?${N}` : '';
    }
  }
  return (
    (!r || r === '.') && s.route.index && (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    a !== '/' && (f.pathname = f.pathname === '/' ? a : $n([a, f.pathname])),
    eu(f)
  );
}
function TS(r, i = {}) {
  let a = le.useContext(Tg);
  Lt(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = Ig('useViewTransitionState'),
    s = au(r, { relative: i.relative });
  if (!a.isTransitioning) return !1;
  let f = Xn(a.currentLocation.pathname, u) || a.currentLocation.pathname,
    d = Xn(a.nextLocation.pathname, u) || a.nextLocation.pathname;
  return Hs(s.pathname, d) != null || Hs(s.pathname, f) != null;
}
new TextEncoder();
[...fS];
var OS = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Of = Math.ceil,
  Pr = Math.floor,
  wr = '[BigNumber Error] ',
  pp = wr + 'Number primitive has more than 15 significant digits: ',
  ln = 1e14,
  at = 14,
  gp = 9007199254740991,
  Mf = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  bi = 1e7,
  Cr = 1e9;
function qg(r) {
  var i,
    a,
    u,
    s = (H.prototype = { constructor: H, toString: null, valueOf: null }),
    f = new H(1),
    d = 20,
    h = 4,
    p = -7,
    g = 21,
    N = -1e7,
    v = 1e7,
    S = !1,
    w = 1,
    D = 0,
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
  function H(b, A) {
    var T,
      G,
      Y,
      X,
      Z,
      I,
      R,
      $,
      z = this;
    if (!(z instanceof H)) return new H(b, A);
    if (A == null) {
      if (b && b._isBigNumber === !0) {
        (z.s = b.s),
          !b.c || b.e > v ? (z.c = z.e = null) : b.e < N ? (z.c = [(z.e = 0)]) : ((z.e = b.e), (z.c = b.c.slice()));
        return;
      }
      if ((I = typeof b == 'number') && b * 0 == 0) {
        if (((z.s = 1 / b < 0 ? ((b = -b), -1) : 1), b === ~~b)) {
          for (X = 0, Z = b; Z >= 10; Z /= 10, X++);
          X > v ? (z.c = z.e = null) : ((z.e = X), (z.c = [b]));
          return;
        }
        $ = String(b);
      } else {
        if (!OS.test(($ = String(b)))) return u(z, $, I);
        z.s = $.charCodeAt(0) == 45 ? (($ = $.slice(1)), -1) : 1;
      }
      (X = $.indexOf('.')) > -1 && ($ = $.replace('.', '')),
        (Z = $.search(/e/i)) > 0
          ? (X < 0 && (X = Z), (X += +$.slice(Z + 1)), ($ = $.substring(0, Z)))
          : X < 0 && (X = $.length);
    } else {
      if ((qt(A, 2, J.length, 'Base'), A == 10 && W)) return (z = new H(b)), he(z, d + z.e + 1, h);
      if ((($ = String(b)), (I = typeof b == 'number'))) {
        if (b * 0 != 0) return u(z, $, I, A);
        if (((z.s = 1 / b < 0 ? (($ = $.slice(1)), -1) : 1), H.DEBUG && $.replace(/^0\.0*|\./, '').length > 15))
          throw Error(pp + b);
      } else z.s = $.charCodeAt(0) === 45 ? (($ = $.slice(1)), -1) : 1;
      for (T = J.slice(0, A), X = Z = 0, R = $.length; Z < R; Z++)
        if (T.indexOf((G = $.charAt(Z))) < 0) {
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
          return u(z, String(b), I, A);
        }
      (I = !1), ($ = a($, A, 10, z.s)), (X = $.indexOf('.')) > -1 ? ($ = $.replace('.', '')) : (X = $.length);
    }
    for (Z = 0; $.charCodeAt(Z) === 48; Z++);
    for (R = $.length; $.charCodeAt(--R) === 48; );
    if (($ = $.slice(Z, ++R))) {
      if (((R -= Z), I && H.DEBUG && R > 15 && (b > gp || b !== Pr(b)))) throw Error(pp + z.s * b);
      if ((X = X - Z - 1) > v) z.c = z.e = null;
      else if (X < N) z.c = [(z.e = 0)];
      else {
        if (((z.e = X), (z.c = []), (Z = (X + 1) % at), X < 0 && (Z += at), Z < R)) {
          for (Z && z.c.push(+$.slice(0, Z)), R -= at; Z < R; ) z.c.push(+$.slice(Z, (Z += at)));
          Z = at - ($ = $.slice(Z)).length;
        } else Z -= R;
        for (; Z--; $ += '0');
        z.c.push(+$);
      }
    } else z.c = [(z.e = 0)];
  }
  (H.clone = qg),
    (H.ROUND_UP = 0),
    (H.ROUND_DOWN = 1),
    (H.ROUND_CEIL = 2),
    (H.ROUND_FLOOR = 3),
    (H.ROUND_HALF_UP = 4),
    (H.ROUND_HALF_DOWN = 5),
    (H.ROUND_HALF_EVEN = 6),
    (H.ROUND_HALF_CEIL = 7),
    (H.ROUND_HALF_FLOOR = 8),
    (H.EUCLID = 9),
    (H.config = H.set =
      function (b) {
        var A, T;
        if (b != null)
          if (typeof b == 'object') {
            if (
              (b.hasOwnProperty((A = 'DECIMAL_PLACES')) && ((T = b[A]), qt(T, 0, Cr, A), (d = T)),
              b.hasOwnProperty((A = 'ROUNDING_MODE')) && ((T = b[A]), qt(T, 0, 8, A), (h = T)),
              b.hasOwnProperty((A = 'EXPONENTIAL_AT')) &&
                ((T = b[A]),
                T && T.pop
                  ? (qt(T[0], -1e9, 0, A), qt(T[1], 0, Cr, A), (p = T[0]), (g = T[1]))
                  : (qt(T, -1e9, Cr, A), (p = -(g = T < 0 ? -T : T)))),
              b.hasOwnProperty((A = 'RANGE')))
            )
              if (((T = b[A]), T && T.pop)) qt(T[0], -1e9, -1, A), qt(T[1], 1, Cr, A), (N = T[0]), (v = T[1]);
              else if ((qt(T, -1e9, Cr, A), T)) N = -(v = T < 0 ? -T : T);
              else throw Error(wr + A + ' cannot be zero: ' + T);
            if (b.hasOwnProperty((A = 'CRYPTO')))
              if (((T = b[A]), T === !!T))
                if (T)
                  if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) S = T;
                  else throw ((S = !T), Error(wr + 'crypto unavailable'));
                else S = T;
              else throw Error(wr + A + ' not true or false: ' + T);
            if (
              (b.hasOwnProperty((A = 'MODULO_MODE')) && ((T = b[A]), qt(T, 0, 9, A), (w = T)),
              b.hasOwnProperty((A = 'POW_PRECISION')) && ((T = b[A]), qt(T, 0, Cr, A), (D = T)),
              b.hasOwnProperty((A = 'FORMAT')))
            )
              if (((T = b[A]), typeof T == 'object')) P = T;
              else throw Error(wr + A + ' not an object: ' + T);
            if (b.hasOwnProperty((A = 'ALPHABET')))
              if (((T = b[A]), typeof T == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(T)))
                (W = T.slice(0, 10) == '0123456789'), (J = T);
              else throw Error(wr + A + ' invalid: ' + T);
          } else throw Error(wr + 'Object expected: ' + b);
        return {
          DECIMAL_PLACES: d,
          ROUNDING_MODE: h,
          EXPONENTIAL_AT: [p, g],
          RANGE: [N, v],
          CRYPTO: S,
          MODULO_MODE: w,
          POW_PRECISION: D,
          FORMAT: P,
          ALPHABET: J
        };
      }),
    (H.isBigNumber = function (b) {
      if (!b || b._isBigNumber !== !0) return !1;
      if (!H.DEBUG) return !0;
      var A,
        T,
        G = b.c,
        Y = b.e,
        X = b.s;
      e: if ({}.toString.call(G) == '[object Array]') {
        if ((X === 1 || X === -1) && Y >= -1e9 && Y <= Cr && Y === Pr(Y)) {
          if (G[0] === 0) {
            if (Y === 0 && G.length === 1) return !0;
            break e;
          }
          if (((A = (Y + 1) % at), A < 1 && (A += at), String(G[0]).length == A)) {
            for (A = 0; A < G.length; A++) if (((T = G[A]), T < 0 || T >= ln || T !== Pr(T))) break e;
            if (T !== 0) return !0;
          }
        }
      } else if (G === null && Y === null && (X === null || X === 1 || X === -1)) return !0;
      throw Error(wr + 'Invalid BigNumber: ' + b);
    }),
    (H.maximum = H.max =
      function () {
        return Le(arguments, -1);
      }),
    (H.minimum = H.min =
      function () {
        return Le(arguments, 1);
      }),
    (H.random = (function () {
      var b = 9007199254740992,
        A =
          (Math.random() * b) & 2097151
            ? function () {
                return Pr(Math.random() * b);
              }
            : function () {
                return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
              };
      return function (T) {
        var G,
          Y,
          X,
          Z,
          I,
          R = 0,
          $ = [],
          z = new H(f);
        if ((T == null ? (T = d) : qt(T, 0, Cr), (Z = Of(T / at)), S))
          if (crypto.getRandomValues) {
            for (G = crypto.getRandomValues(new Uint32Array((Z *= 2))); R < Z; )
              (I = G[R] * 131072 + (G[R + 1] >>> 11)),
                I >= 9e15
                  ? ((Y = crypto.getRandomValues(new Uint32Array(2))), (G[R] = Y[0]), (G[R + 1] = Y[1]))
                  : ($.push(I % 1e14), (R += 2));
            R = Z / 2;
          } else if (crypto.randomBytes) {
            for (G = crypto.randomBytes((Z *= 7)); R < Z; )
              (I =
                (G[R] & 31) * 281474976710656 +
                G[R + 1] * 1099511627776 +
                G[R + 2] * 4294967296 +
                G[R + 3] * 16777216 +
                (G[R + 4] << 16) +
                (G[R + 5] << 8) +
                G[R + 6]),
                I >= 9e15 ? crypto.randomBytes(7).copy(G, R) : ($.push(I % 1e14), (R += 7));
            R = Z / 7;
          } else throw ((S = !1), Error(wr + 'crypto unavailable'));
        if (!S) for (; R < Z; ) (I = A()), I < 9e15 && ($[R++] = I % 1e14);
        for (Z = $[--R], T %= at, Z && T && ((I = Mf[at - T]), ($[R] = Pr(Z / I) * I)); $[R] === 0; $.pop(), R--);
        if (R < 0) $ = [(X = 0)];
        else {
          for (X = -1; $[0] === 0; $.splice(0, 1), X -= at);
          for (R = 1, I = $[0]; I >= 10; I /= 10, R++);
          R < at && (X -= at - R);
        }
        return (z.e = X), (z.c = $), z;
      };
    })()),
    (H.sum = function () {
      for (var b = 1, A = arguments, T = new H(A[0]); b < A.length; ) T = T.plus(A[b++]);
      return T;
    }),
    (a = (function () {
      var b = '0123456789';
      function A(T, G, Y, X) {
        for (var Z, I = [0], R, $ = 0, z = T.length; $ < z; ) {
          for (R = I.length; R--; I[R] *= G);
          for (I[0] += X.indexOf(T.charAt($++)), Z = 0; Z < I.length; Z++)
            I[Z] > Y - 1 && (I[Z + 1] == null && (I[Z + 1] = 0), (I[Z + 1] += (I[Z] / Y) | 0), (I[Z] %= Y));
        }
        return I.reverse();
      }
      return function (T, G, Y, X, Z) {
        var I,
          R,
          $,
          z,
          oe,
          j,
          ne,
          Ee,
          ye = T.indexOf('.'),
          O = d,
          je = h;
        for (
          ye >= 0 &&
            ((z = D),
            (D = 0),
            (T = T.replace('.', '')),
            (Ee = new H(G)),
            (j = Ee.pow(T.length - ye)),
            (D = z),
            (Ee.c = A(zn(Qr(j.c), j.e, '0'), 10, Y, b)),
            (Ee.e = Ee.c.length)),
            ne = A(T, G, Y, Z ? ((I = J), b) : ((I = b), J)),
            $ = z = ne.length;
          ne[--z] == 0;
          ne.pop()
        );
        if (!ne[0]) return I.charAt(0);
        if (
          (ye < 0
            ? --$
            : ((j.c = ne), (j.e = $), (j.s = X), (j = i(j, Ee, O, je, Y)), (ne = j.c), (oe = j.r), ($ = j.e)),
          (R = $ + O + 1),
          (ye = ne[R]),
          (z = Y / 2),
          (oe = oe || R < 0 || ne[R + 1] != null),
          (oe =
            je < 4
              ? (ye != null || oe) && (je == 0 || je == (j.s < 0 ? 3 : 2))
              : ye > z || (ye == z && (je == 4 || oe || (je == 6 && ne[R - 1] & 1) || je == (j.s < 0 ? 8 : 7)))),
          R < 1 || !ne[0])
        )
          T = oe ? zn(I.charAt(1), -O, I.charAt(0)) : I.charAt(0);
        else {
          if (((ne.length = R), oe)) for (--Y; ++ne[--R] > Y; ) (ne[R] = 0), R || (++$, (ne = [1].concat(ne)));
          for (z = ne.length; !ne[--z]; );
          for (ye = 0, T = ''; ye <= z; T += I.charAt(ne[ye++]));
          T = zn(T, $, I.charAt(0));
        }
        return T;
      };
    })()),
    (i = (function () {
      function b(G, Y, X) {
        var Z,
          I,
          R,
          $,
          z = 0,
          oe = G.length,
          j = Y % bi,
          ne = (Y / bi) | 0;
        for (G = G.slice(); oe--; )
          (R = G[oe] % bi),
            ($ = (G[oe] / bi) | 0),
            (Z = ne * R + $ * j),
            (I = j * R + (Z % bi) * bi + z),
            (z = ((I / X) | 0) + ((Z / bi) | 0) + ne * $),
            (G[oe] = I % X);
        return z && (G = [z].concat(G)), G;
      }
      function A(G, Y, X, Z) {
        var I, R;
        if (X != Z) R = X > Z ? 1 : -1;
        else
          for (I = R = 0; I < X; I++)
            if (G[I] != Y[I]) {
              R = G[I] > Y[I] ? 1 : -1;
              break;
            }
        return R;
      }
      function T(G, Y, X, Z) {
        for (var I = 0; X--; ) (G[X] -= I), (I = G[X] < Y[X] ? 1 : 0), (G[X] = I * Z + G[X] - Y[X]);
        for (; !G[0] && G.length > 1; G.splice(0, 1));
      }
      return function (G, Y, X, Z, I) {
        var R,
          $,
          z,
          oe,
          j,
          ne,
          Ee,
          ye,
          O,
          je,
          Me,
          Pe,
          Re,
          ke,
          B,
          U,
          Q,
          se = G.s == Y.s ? 1 : -1,
          re = G.c,
          ue = Y.c;
        if (!re || !re[0] || !ue || !ue[0])
          return new H(
            !G.s || !Y.s || (re ? ue && re[0] == ue[0] : !ue) ? NaN : (re && re[0] == 0) || !ue ? se * 0 : se / 0
          );
        for (
          ye = new H(se),
            O = ye.c = [],
            $ = G.e - Y.e,
            se = X + $ + 1,
            I || ((I = ln), ($ = Jr(G.e / at) - Jr(Y.e / at)), (se = (se / at) | 0)),
            z = 0;
          ue[z] == (re[z] || 0);
          z++
        );
        if ((ue[z] > (re[z] || 0) && $--, se < 0)) O.push(1), (oe = !0);
        else {
          for (
            ke = re.length,
              U = ue.length,
              z = 0,
              se += 2,
              j = Pr(I / (ue[0] + 1)),
              j > 1 && ((ue = b(ue, j, I)), (re = b(re, j, I)), (U = ue.length), (ke = re.length)),
              Re = U,
              je = re.slice(0, U),
              Me = je.length;
            Me < U;
            je[Me++] = 0
          );
          (Q = ue.slice()), (Q = [0].concat(Q)), (B = ue[0]), ue[1] >= I / 2 && B++;
          do {
            if (((j = 0), (R = A(ue, je, U, Me)), R < 0)) {
              if (((Pe = je[0]), U != Me && (Pe = Pe * I + (je[1] || 0)), (j = Pr(Pe / B)), j > 1))
                for (j >= I && (j = I - 1), ne = b(ue, j, I), Ee = ne.length, Me = je.length; A(ne, je, Ee, Me) == 1; )
                  j--, T(ne, U < Ee ? Q : ue, Ee, I), (Ee = ne.length), (R = 1);
              else j == 0 && (R = j = 1), (ne = ue.slice()), (Ee = ne.length);
              if ((Ee < Me && (ne = [0].concat(ne)), T(je, ne, Me, I), (Me = je.length), R == -1))
                for (; A(ue, je, U, Me) < 1; ) j++, T(je, U < Me ? Q : ue, Me, I), (Me = je.length);
            } else R === 0 && (j++, (je = [0]));
            (O[z++] = j), je[0] ? (je[Me++] = re[Re] || 0) : ((je = [re[Re]]), (Me = 1));
          } while ((Re++ < ke || je[0] != null) && se--);
          (oe = je[0] != null), O[0] || O.splice(0, 1);
        }
        if (I == ln) {
          for (z = 1, se = O[0]; se >= 10; se /= 10, z++);
          he(ye, X + (ye.e = z + $ * at - 1) + 1, Z, oe);
        } else (ye.e = $), (ye.r = +oe);
        return ye;
      };
    })());
  function Se(b, A, T, G) {
    var Y, X, Z, I, R;
    if ((T == null ? (T = h) : qt(T, 0, 8), !b.c)) return b.toString();
    if (((Y = b.c[0]), (Z = b.e), A == null))
      (R = Qr(b.c)), (R = G == 1 || (G == 2 && (Z <= p || Z >= g)) ? Os(R, Z) : zn(R, Z, '0'));
    else if (
      ((b = he(new H(b), A, T)), (X = b.e), (R = Qr(b.c)), (I = R.length), G == 1 || (G == 2 && (A <= X || X <= p)))
    ) {
      for (; I < A; R += '0', I++);
      R = Os(R, X);
    } else if (((A -= Z), (R = zn(R, X, '0')), X + 1 > I)) {
      if (--A > 0) for (R += '.'; A--; R += '0');
    } else if (((A += X - I), A > 0)) for (X + 1 == I && (R += '.'); A--; R += '0');
    return b.s < 0 && Y ? '-' + R : R;
  }
  function Le(b, A) {
    for (var T, G, Y = 1, X = new H(b[0]); Y < b.length; Y++)
      (G = new H(b[Y])), (!G.s || (T = Ki(X, G)) === A || (T === 0 && X.s === A)) && (X = G);
    return X;
  }
  function we(b, A, T) {
    for (var G = 1, Y = A.length; !A[--Y]; A.pop());
    for (Y = A[0]; Y >= 10; Y /= 10, G++);
    return (T = G + T * at - 1) > v ? (b.c = b.e = null) : T < N ? (b.c = [(b.e = 0)]) : ((b.e = T), (b.c = A)), b;
  }
  u = (function () {
    var b = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      A = /^([^.]+)\.$/,
      T = /^\.([^.]+)$/,
      G = /^-?(Infinity|NaN)$/,
      Y = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (X, Z, I, R) {
      var $,
        z = I ? Z : Z.replace(Y, '');
      if (G.test(z)) X.s = isNaN(z) ? null : z < 0 ? -1 : 1;
      else {
        if (
          !I &&
          ((z = z.replace(b, function (oe, j, ne) {
            return ($ = (ne = ne.toLowerCase()) == 'x' ? 16 : ne == 'b' ? 2 : 8), !R || R == $ ? j : oe;
          })),
          R && (($ = R), (z = z.replace(A, '$1').replace(T, '0.$1'))),
          Z != z)
        )
          return new H(z, $);
        if (H.DEBUG) throw Error(wr + 'Not a' + (R ? ' base ' + R : '') + ' number: ' + Z);
        X.s = null;
      }
      X.c = X.e = null;
    };
  })();
  function he(b, A, T, G) {
    var Y,
      X,
      Z,
      I,
      R,
      $,
      z,
      oe = b.c,
      j = Mf;
    if (oe) {
      e: {
        for (Y = 1, I = oe[0]; I >= 10; I /= 10, Y++);
        if (((X = A - Y), X < 0)) (X += at), (Z = A), (R = oe[($ = 0)]), (z = Pr((R / j[Y - Z - 1]) % 10));
        else if ((($ = Of((X + 1) / at)), $ >= oe.length))
          if (G) {
            for (; oe.length <= $; oe.push(0));
            (R = z = 0), (Y = 1), (X %= at), (Z = X - at + 1);
          } else break e;
        else {
          for (R = I = oe[$], Y = 1; I >= 10; I /= 10, Y++);
          (X %= at), (Z = X - at + Y), (z = Z < 0 ? 0 : Pr((R / j[Y - Z - 1]) % 10));
        }
        if (
          ((G = G || A < 0 || oe[$ + 1] != null || (Z < 0 ? R : R % j[Y - Z - 1])),
          (G =
            T < 4
              ? (z || G) && (T == 0 || T == (b.s < 0 ? 3 : 2))
              : z > 5 ||
                (z == 5 &&
                  (T == 4 ||
                    G ||
                    (T == 6 && (X > 0 ? (Z > 0 ? R / j[Y - Z] : 0) : oe[$ - 1]) % 10 & 1) ||
                    T == (b.s < 0 ? 8 : 7)))),
          A < 1 || !oe[0])
        )
          return (
            (oe.length = 0),
            G ? ((A -= b.e + 1), (oe[0] = j[(at - (A % at)) % at]), (b.e = -A || 0)) : (oe[0] = b.e = 0),
            b
          );
        if (
          (X == 0
            ? ((oe.length = $), (I = 1), $--)
            : ((oe.length = $ + 1), (I = j[at - X]), (oe[$] = Z > 0 ? Pr((R / j[Y - Z]) % j[Z]) * I : 0)),
          G)
        )
          for (;;)
            if ($ == 0) {
              for (X = 1, Z = oe[0]; Z >= 10; Z /= 10, X++);
              for (Z = oe[0] += I, I = 1; Z >= 10; Z /= 10, I++);
              X != I && (b.e++, oe[0] == ln && (oe[0] = 1));
              break;
            } else {
              if (((oe[$] += I), oe[$] != ln)) break;
              (oe[$--] = 0), (I = 1);
            }
        for (X = oe.length; oe[--X] === 0; oe.pop());
      }
      b.e > v ? (b.c = b.e = null) : b.e < N && (b.c = [(b.e = 0)]);
    }
    return b;
  }
  function Ae(b) {
    var A,
      T = b.e;
    return T === null
      ? b.toString()
      : ((A = Qr(b.c)), (A = T <= p || T >= g ? Os(A, T) : zn(A, T, '0')), b.s < 0 ? '-' + A : A);
  }
  return (
    (s.absoluteValue = s.abs =
      function () {
        var b = new H(this);
        return b.s < 0 && (b.s = 1), b;
      }),
    (s.comparedTo = function (b, A) {
      return Ki(this, new H(b, A));
    }),
    (s.decimalPlaces = s.dp =
      function (b, A) {
        var T,
          G,
          Y,
          X = this;
        if (b != null) return qt(b, 0, Cr), A == null ? (A = h) : qt(A, 0, 8), he(new H(X), b + X.e + 1, A);
        if (!(T = X.c)) return null;
        if (((G = ((Y = T.length - 1) - Jr(this.e / at)) * at), (Y = T[Y]))) for (; Y % 10 == 0; Y /= 10, G--);
        return G < 0 && (G = 0), G;
      }),
    (s.dividedBy = s.div =
      function (b, A) {
        return i(this, new H(b, A), d, h);
      }),
    (s.dividedToIntegerBy = s.idiv =
      function (b, A) {
        return i(this, new H(b, A), 0, 1);
      }),
    (s.exponentiatedBy = s.pow =
      function (b, A) {
        var T,
          G,
          Y,
          X,
          Z,
          I,
          R,
          $,
          z,
          oe = this;
        if (((b = new H(b)), b.c && !b.isInteger())) throw Error(wr + 'Exponent not an integer: ' + Ae(b));
        if (
          (A != null && (A = new H(A)),
          (I = b.e > 14),
          !oe.c || !oe.c[0] || (oe.c[0] == 1 && !oe.e && oe.c.length == 1) || !b.c || !b.c[0])
        )
          return (z = new H(Math.pow(+Ae(oe), I ? b.s * (2 - Ts(b)) : +Ae(b)))), A ? z.mod(A) : z;
        if (((R = b.s < 0), A)) {
          if (A.c ? !A.c[0] : !A.s) return new H(NaN);
          (G = !R && oe.isInteger() && A.isInteger()), G && (oe = oe.mod(A));
        } else {
          if (
            b.e > 9 &&
            (oe.e > 0 ||
              oe.e < -1 ||
              (oe.e == 0 ? oe.c[0] > 1 || (I && oe.c[1] >= 24e7) : oe.c[0] < 8e13 || (I && oe.c[0] <= 9999975e7)))
          )
            return (X = oe.s < 0 && Ts(b) ? -0 : 0), oe.e > -1 && (X = 1 / X), new H(R ? 1 / X : X);
          D && (X = Of(D / at + 2));
        }
        for (
          I ? ((T = new H(0.5)), R && (b.s = 1), ($ = Ts(b))) : ((Y = Math.abs(+Ae(b))), ($ = Y % 2)), z = new H(f);
          ;

        ) {
          if ($) {
            if (((z = z.times(oe)), !z.c)) break;
            X ? z.c.length > X && (z.c.length = X) : G && (z = z.mod(A));
          }
          if (Y) {
            if (((Y = Pr(Y / 2)), Y === 0)) break;
            $ = Y % 2;
          } else if (((b = b.times(T)), he(b, b.e + 1, 1), b.e > 14)) $ = Ts(b);
          else {
            if (((Y = +Ae(b)), Y === 0)) break;
            $ = Y % 2;
          }
          (oe = oe.times(oe)), X ? oe.c && oe.c.length > X && (oe.c.length = X) : G && (oe = oe.mod(A));
        }
        return G ? z : (R && (z = f.div(z)), A ? z.mod(A) : X ? he(z, D, h, Z) : z);
      }),
    (s.integerValue = function (b) {
      var A = new H(this);
      return b == null ? (b = h) : qt(b, 0, 8), he(A, A.e + 1, b);
    }),
    (s.isEqualTo = s.eq =
      function (b, A) {
        return Ki(this, new H(b, A)) === 0;
      }),
    (s.isFinite = function () {
      return !!this.c;
    }),
    (s.isGreaterThan = s.gt =
      function (b, A) {
        return Ki(this, new H(b, A)) > 0;
      }),
    (s.isGreaterThanOrEqualTo = s.gte =
      function (b, A) {
        return (A = Ki(this, new H(b, A))) === 1 || A === 0;
      }),
    (s.isInteger = function () {
      return !!this.c && Jr(this.e / at) > this.c.length - 2;
    }),
    (s.isLessThan = s.lt =
      function (b, A) {
        return Ki(this, new H(b, A)) < 0;
      }),
    (s.isLessThanOrEqualTo = s.lte =
      function (b, A) {
        return (A = Ki(this, new H(b, A))) === -1 || A === 0;
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
    (s.minus = function (b, A) {
      var T,
        G,
        Y,
        X,
        Z = this,
        I = Z.s;
      if (((b = new H(b, A)), (A = b.s), !I || !A)) return new H(NaN);
      if (I != A) return (b.s = -A), Z.plus(b);
      var R = Z.e / at,
        $ = b.e / at,
        z = Z.c,
        oe = b.c;
      if (!R || !$) {
        if (!z || !oe) return z ? ((b.s = -A), b) : new H(oe ? Z : NaN);
        if (!z[0] || !oe[0]) return oe[0] ? ((b.s = -A), b) : new H(z[0] ? Z : h == 3 ? -0 : 0);
      }
      if (((R = Jr(R)), ($ = Jr($)), (z = z.slice()), (I = R - $))) {
        for ((X = I < 0) ? ((I = -I), (Y = z)) : (($ = R), (Y = oe)), Y.reverse(), A = I; A--; Y.push(0));
        Y.reverse();
      } else
        for (G = (X = (I = z.length) < (A = oe.length)) ? I : A, I = A = 0; A < G; A++)
          if (z[A] != oe[A]) {
            X = z[A] < oe[A];
            break;
          }
      if ((X && ((Y = z), (z = oe), (oe = Y), (b.s = -b.s)), (A = (G = oe.length) - (T = z.length)), A > 0))
        for (; A--; z[T++] = 0);
      for (A = ln - 1; G > I; ) {
        if (z[--G] < oe[G]) {
          for (T = G; T && !z[--T]; z[T] = A);
          --z[T], (z[G] += ln);
        }
        z[G] -= oe[G];
      }
      for (; z[0] == 0; z.splice(0, 1), --$);
      return z[0] ? we(b, z, $) : ((b.s = h == 3 ? -1 : 1), (b.c = [(b.e = 0)]), b);
    }),
    (s.modulo = s.mod =
      function (b, A) {
        var T,
          G,
          Y = this;
        return (
          (b = new H(b, A)),
          !Y.c || !b.s || (b.c && !b.c[0])
            ? new H(NaN)
            : !b.c || (Y.c && !Y.c[0])
              ? new H(Y)
              : (w == 9 ? ((G = b.s), (b.s = 1), (T = i(Y, b, 0, 3)), (b.s = G), (T.s *= G)) : (T = i(Y, b, 0, w)),
                (b = Y.minus(T.times(b))),
                !b.c[0] && w == 1 && (b.s = Y.s),
                b)
        );
      }),
    (s.multipliedBy = s.times =
      function (b, A) {
        var T,
          G,
          Y,
          X,
          Z,
          I,
          R,
          $,
          z,
          oe,
          j,
          ne,
          Ee,
          ye,
          O,
          je = this,
          Me = je.c,
          Pe = (b = new H(b, A)).c;
        if (!Me || !Pe || !Me[0] || !Pe[0])
          return (
            !je.s || !b.s || (Me && !Me[0] && !Pe) || (Pe && !Pe[0] && !Me)
              ? (b.c = b.e = b.s = null)
              : ((b.s *= je.s), !Me || !Pe ? (b.c = b.e = null) : ((b.c = [0]), (b.e = 0))),
            b
          );
        for (
          G = Jr(je.e / at) + Jr(b.e / at),
            b.s *= je.s,
            R = Me.length,
            oe = Pe.length,
            R < oe && ((Ee = Me), (Me = Pe), (Pe = Ee), (Y = R), (R = oe), (oe = Y)),
            Y = R + oe,
            Ee = [];
          Y--;
          Ee.push(0)
        );
        for (ye = ln, O = bi, Y = oe; --Y >= 0; ) {
          for (T = 0, j = Pe[Y] % O, ne = (Pe[Y] / O) | 0, Z = R, X = Y + Z; X > Y; )
            ($ = Me[--Z] % O),
              (z = (Me[Z] / O) | 0),
              (I = ne * $ + z * j),
              ($ = j * $ + (I % O) * O + Ee[X] + T),
              (T = (($ / ye) | 0) + ((I / O) | 0) + ne * z),
              (Ee[X--] = $ % ye);
          Ee[X] = T;
        }
        return T ? ++G : Ee.splice(0, 1), we(b, Ee, G);
      }),
    (s.negated = function () {
      var b = new H(this);
      return (b.s = -b.s || null), b;
    }),
    (s.plus = function (b, A) {
      var T,
        G = this,
        Y = G.s;
      if (((b = new H(b, A)), (A = b.s), !Y || !A)) return new H(NaN);
      if (Y != A) return (b.s = -A), G.minus(b);
      var X = G.e / at,
        Z = b.e / at,
        I = G.c,
        R = b.c;
      if (!X || !Z) {
        if (!I || !R) return new H(Y / 0);
        if (!I[0] || !R[0]) return R[0] ? b : new H(I[0] ? G : Y * 0);
      }
      if (((X = Jr(X)), (Z = Jr(Z)), (I = I.slice()), (Y = X - Z))) {
        for (Y > 0 ? ((Z = X), (T = R)) : ((Y = -Y), (T = I)), T.reverse(); Y--; T.push(0));
        T.reverse();
      }
      for (Y = I.length, A = R.length, Y - A < 0 && ((T = R), (R = I), (I = T), (A = Y)), Y = 0; A; )
        (Y = ((I[--A] = I[A] + R[A] + Y) / ln) | 0), (I[A] = ln === I[A] ? 0 : I[A] % ln);
      return Y && ((I = [Y].concat(I)), ++Z), we(b, I, Z);
    }),
    (s.precision = s.sd =
      function (b, A) {
        var T,
          G,
          Y,
          X = this;
        if (b != null && b !== !!b) return qt(b, 1, Cr), A == null ? (A = h) : qt(A, 0, 8), he(new H(X), b, A);
        if (!(T = X.c)) return null;
        if (((Y = T.length - 1), (G = Y * at + 1), (Y = T[Y]))) {
          for (; Y % 10 == 0; Y /= 10, G--);
          for (Y = T[0]; Y >= 10; Y /= 10, G++);
        }
        return b && X.e + 1 > G && (G = X.e + 1), G;
      }),
    (s.shiftedBy = function (b) {
      return qt(b, -9007199254740991, gp), this.times('1e' + b);
    }),
    (s.squareRoot = s.sqrt =
      function () {
        var b,
          A,
          T,
          G,
          Y,
          X = this,
          Z = X.c,
          I = X.s,
          R = X.e,
          $ = d + 4,
          z = new H('0.5');
        if (I !== 1 || !Z || !Z[0]) return new H(!I || (I < 0 && (!Z || Z[0])) ? NaN : Z ? X : 1 / 0);
        if (
          ((I = Math.sqrt(+Ae(X))),
          I == 0 || I == 1 / 0
            ? ((A = Qr(Z)),
              (A.length + R) % 2 == 0 && (A += '0'),
              (I = Math.sqrt(+A)),
              (R = Jr((R + 1) / 2) - (R < 0 || R % 2)),
              I == 1 / 0 ? (A = '5e' + R) : ((A = I.toExponential()), (A = A.slice(0, A.indexOf('e') + 1) + R)),
              (T = new H(A)))
            : (T = new H(I + '')),
          T.c[0])
        ) {
          for (R = T.e, I = R + $, I < 3 && (I = 0); ; )
            if (((Y = T), (T = z.times(Y.plus(i(X, Y, $, 1)))), Qr(Y.c).slice(0, I) === (A = Qr(T.c)).slice(0, I)))
              if ((T.e < R && --I, (A = A.slice(I - 3, I + 1)), A == '9999' || (!G && A == '4999'))) {
                if (!G && (he(Y, Y.e + d + 2, 0), Y.times(Y).eq(X))) {
                  T = Y;
                  break;
                }
                ($ += 4), (I += 4), (G = 1);
              } else {
                (!+A || (!+A.slice(1) && A.charAt(0) == '5')) && (he(T, T.e + d + 2, 1), (b = !T.times(T).eq(X)));
                break;
              }
        }
        return he(T, T.e + d + 1, h, b);
      }),
    (s.toExponential = function (b, A) {
      return b != null && (qt(b, 0, Cr), b++), Se(this, b, A, 1);
    }),
    (s.toFixed = function (b, A) {
      return b != null && (qt(b, 0, Cr), (b = b + this.e + 1)), Se(this, b, A);
    }),
    (s.toFormat = function (b, A, T) {
      var G,
        Y = this;
      if (T == null)
        b != null && A && typeof A == 'object'
          ? ((T = A), (A = null))
          : b && typeof b == 'object'
            ? ((T = b), (b = A = null))
            : (T = P);
      else if (typeof T != 'object') throw Error(wr + 'Argument not an object: ' + T);
      if (((G = Y.toFixed(b, A)), Y.c)) {
        var X,
          Z = G.split('.'),
          I = +T.groupSize,
          R = +T.secondaryGroupSize,
          $ = T.groupSeparator || '',
          z = Z[0],
          oe = Z[1],
          j = Y.s < 0,
          ne = j ? z.slice(1) : z,
          Ee = ne.length;
        if ((R && ((X = I), (I = R), (R = X), (Ee -= X)), I > 0 && Ee > 0)) {
          for (X = Ee % I || I, z = ne.substr(0, X); X < Ee; X += I) z += $ + ne.substr(X, I);
          R > 0 && (z += $ + ne.slice(X)), j && (z = '-' + z);
        }
        G = oe
          ? z +
            (T.decimalSeparator || '') +
            ((R = +T.fractionGroupSize)
              ? oe.replace(new RegExp('\\d{' + R + '}\\B', 'g'), '$&' + (T.fractionGroupSeparator || ''))
              : oe)
          : z;
      }
      return (T.prefix || '') + G + (T.suffix || '');
    }),
    (s.toFraction = function (b) {
      var A,
        T,
        G,
        Y,
        X,
        Z,
        I,
        R,
        $,
        z,
        oe,
        j,
        ne = this,
        Ee = ne.c;
      if (b != null && ((I = new H(b)), (!I.isInteger() && (I.c || I.s !== 1)) || I.lt(f)))
        throw Error(wr + 'Argument ' + (I.isInteger() ? 'out of range: ' : 'not an integer: ') + Ae(I));
      if (!Ee) return new H(ne);
      for (
        A = new H(f),
          $ = T = new H(f),
          G = R = new H(f),
          j = Qr(Ee),
          X = A.e = j.length - ne.e - 1,
          A.c[0] = Mf[(Z = X % at) < 0 ? at + Z : Z],
          b = !b || I.comparedTo(A) > 0 ? (X > 0 ? A : $) : I,
          Z = v,
          v = 1 / 0,
          I = new H(j),
          R.c[0] = 0;
        (z = i(I, A, 0, 1)), (Y = T.plus(z.times(G))), Y.comparedTo(b) != 1;

      )
        (T = G), (G = Y), ($ = R.plus(z.times((Y = $)))), (R = Y), (A = I.minus(z.times((Y = A)))), (I = Y);
      return (
        (Y = i(b.minus(T), G, 0, 1)),
        (R = R.plus(Y.times($))),
        (T = T.plus(Y.times(G))),
        (R.s = $.s = ne.s),
        (X = X * 2),
        (oe =
          i($, G, X, h)
            .minus(ne)
            .abs()
            .comparedTo(i(R, T, X, h).minus(ne).abs()) < 1
            ? [$, G]
            : [R, T]),
        (v = Z),
        oe
      );
    }),
    (s.toNumber = function () {
      return +Ae(this);
    }),
    (s.toPrecision = function (b, A) {
      return b != null && qt(b, 1, Cr), Se(this, b, A, 2);
    }),
    (s.toString = function (b) {
      var A,
        T = this,
        G = T.s,
        Y = T.e;
      return (
        Y === null
          ? G
            ? ((A = 'Infinity'), G < 0 && (A = '-' + A))
            : (A = 'NaN')
          : (b == null
              ? (A = Y <= p || Y >= g ? Os(Qr(T.c), Y) : zn(Qr(T.c), Y, '0'))
              : b === 10 && W
                ? ((T = he(new H(T), d + Y + 1, h)), (A = zn(Qr(T.c), T.e, '0')))
                : (qt(b, 2, J.length, 'Base'), (A = a(zn(Qr(T.c), Y, '0'), 10, b, G, !0))),
            G < 0 && T.c[0] && (A = '-' + A)),
        A
      );
    }),
    (s.valueOf = s.toJSON =
      function () {
        return Ae(this);
      }),
    (s._isBigNumber = !0),
    (s[Symbol.toStringTag] = 'BigNumber'),
    (s[Symbol.for('nodejs.util.inspect.custom')] = s.valueOf),
    r != null && H.set(r),
    H
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
    g = i.e;
  if (!d || !h) return null;
  if (((a = s && !s[0]), (u = f && !f[0]), a || u)) return a ? (u ? 0 : -h) : d;
  if (d != h) return d;
  if (((a = d < 0), (u = p == g), !s || !f)) return u ? 0 : !s ^ a ? 1 : -1;
  if (!u) return (p > g) ^ a ? 1 : -1;
  for (h = (p = s.length) < (g = f.length) ? p : g, d = 0; d < h; d++)
    if (s[d] != f[d]) return (s[d] > f[d]) ^ a ? 1 : -1;
  return p == g ? 0 : (p > g) ^ a ? 1 : -1;
}
function qt(r, i, a, u) {
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
function Ts(r) {
  var i = r.c.length - 1;
  return Jr(r.e / at) == i && r.c[i] % 2 != 0;
}
function Os(r, i) {
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
var en = qg();
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
var Ni;
(function (r) {
  (r[(r.Source = 0)] = 'Source'), (r[(r.Target = 1)] = 'Target');
})(Ni || (Ni = {}));
var Gn;
(function (r) {
  (r[(r.LimitOrder = 0)] = 'LimitOrder'), (r[(r.SwapOrder = 1)] = 'SwapOrder');
})(Gn || (Gn = {}));
var Nt;
(function (r) {
  (r[(r.Ask = 1)] = 'Ask'), (r[(r.Bid = 2)] = 'Bid');
})(Nt || (Nt = {}));
var Ga;
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
})(Ga || (Ga = {}));
var Ei;
(function (r) {
  (r[(r.Created = 0)] = 'Created'), (r[(r.Fulfilled = 1)] = 'Fulfilled'), (r[(r.Cancelled = 2)] = 'Cancelled');
})(Ei || (Ei = {}));
var Vs;
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
})(Vs || (Vs = {}));
var cn;
(function (r) {
  (r.Mainnet = 'mainnet'), (r.Testnet = 'testnet');
})(cn || (cn = {}));
var Ha;
(function (r) {
  (r[(r.BtcEcdsa = 1e3)] = 'BtcEcdsa'),
    (r[(r.EvmEcdsa = 1001)] = 'EvmEcdsa'),
    (r[(r.TronEcdsa = 1002)] = 'TronEcdsa'),
    (r[(r.TonEddsaOpenMask = 2e3)] = 'TonEddsaOpenMask'),
    (r[(r.SolanaEddsa = 2010)] = 'SolanaEddsa'),
    (r[(r.IcpEddsa = 2020)] = 'IcpEddsa'),
    (r[(r.KaspaSchnorr = 3010)] = 'KaspaSchnorr');
})(Ha || (Ha = {}));
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
    const i = {};
    return (
      this.hin !== void 0 && (i.hin = this.hin.toString()),
      this.sourceWalletPublicKey && (i.sourceWalletPublicKey = this.sourceWalletPublicKey),
      this.sourceWalletAddress && (i.sourceWalletAddress = this.sourceWalletAddress),
      this.txRef && (i.txRef = this.txRef),
      this.sourceChainId && (i.sourceChainId = this.sourceChainId.toString()),
      this.sourceAssetType !== void 0 && (i.sourceAssetType = this.sourceAssetType.toString()),
      this.sourceAsset && (i.sourceAsset = this.sourceAsset),
      this.sourceVolume !== void 0 && (i.sourceVolume = this.sourceVolume.toString()),
      this.targetChainId && (i.targetChainId = this.targetChainId.toString()),
      this.targetWalletAddress && (i.targetWalletAddress = this.targetWalletAddress),
      this.targetAssetType !== void 0 && (i.targetAssetType = this.targetAssetType.toString()),
      this.targetAsset && (i.targetAsset = this.targetAsset),
      this.targetVolume !== void 0 && (i.targetVolume = this.targetVolume.toString()),
      this.targetVolumeMin !== void 0 && (i.targetVolumeMin = this.targetVolumeMin.toString()),
      JSON.stringify(i)
    );
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
      signatureSchema: r.signatureSchema,
      signature: r.signature
    }
  };
}
function kS(r) {
  return { query: { AgentOrderId: r } };
}
function IS(r) {
  return { status: r.status, txHash: r.txHash || void 0 };
}
function bp(r) {
  if (!Number.isSafeInteger(r) || r < 0) throw new Error('positive integer expected, got ' + r);
}
function qS(r) {
  return r instanceof Uint8Array || (ArrayBuffer.isView(r) && r.constructor.name === 'Uint8Array');
}
function md(r, ...i) {
  if (!qS(r)) throw new Error('Uint8Array expected');
  if (i.length > 0 && !i.includes(r.length))
    throw new Error('Uint8Array expected of length ' + i + ', got length=' + r.length);
}
function LS(r) {
  if (typeof r != 'function' || typeof r.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  bp(r.outputLen), bp(r.blockLen);
}
function Gs(r, i = !0) {
  if (r.destroyed) throw new Error('Hash instance has been destroyed');
  if (i && r.finished) throw new Error('Hash#digest() has already been called');
}
function zS(r, i) {
  md(r);
  const a = i.outputLen;
  if (r.length < a) throw new Error('digestInto() expects output buffer of length at least ' + a);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Rf(r) {
  return new DataView(r.buffer, r.byteOffset, r.byteLength);
}
function yn(r, i) {
  return (r << (32 - i)) | (r >>> i);
}
function HS(r) {
  if (typeof r != 'string') throw new Error('utf8ToBytes expected string, got ' + typeof r);
  return new Uint8Array(new TextEncoder().encode(r));
}
function pd(r) {
  return typeof r == 'string' && (r = HS(r)), md(r), r;
}
class Lg {
  clone() {
    return this._cloneInto();
  }
}
function VS(r) {
  const i = (u) => r().update(pd(u)).digest(),
    a = r();
  return (i.outputLen = a.outputLen), (i.blockLen = a.blockLen), (i.create = () => r()), i;
}
class zg extends Lg {
  constructor(i, a) {
    super(), (this.finished = !1), (this.destroyed = !1), LS(i);
    const u = pd(a);
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
    return Gs(this), this.iHash.update(i), this;
  }
  digestInto(i) {
    Gs(this),
      md(i, this.outputLen),
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
const Hg = (r, i, a) => new zg(r, i).update(a).digest();
Hg.create = (r, i) => new zg(r, i);
function FS(r, i, a, u) {
  if (typeof r.setBigUint64 == 'function') return r.setBigUint64(i, a, u);
  const s = BigInt(32),
    f = BigInt(4294967295),
    d = Number((a >> s) & f),
    h = Number(a & f),
    p = u ? 4 : 0,
    g = u ? 0 : 4;
  r.setUint32(i + p, d, u), r.setUint32(i + g, h, u);
}
function GS(r, i, a) {
  return (r & i) ^ (~r & a);
}
function $S(r, i, a) {
  return (r & i) ^ (r & a) ^ (i & a);
}
class YS extends Lg {
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
      (this.view = Rf(this.buffer));
  }
  update(i) {
    Gs(this);
    const { view: a, buffer: u, blockLen: s } = this;
    i = pd(i);
    const f = i.length;
    for (let d = 0; d < f; ) {
      const h = Math.min(s - this.pos, f - d);
      if (h === s) {
        const p = Rf(i);
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
    Gs(this), zS(i, this), (this.finished = !0);
    const { buffer: a, view: u, blockLen: s, isLE: f } = this;
    let { pos: d } = this;
    (a[d++] = 128), this.buffer.subarray(d).fill(0), this.padOffset > s - d && (this.process(u, 0), (d = 0));
    for (let v = d; v < s; v++) a[v] = 0;
    FS(u, s - 8, BigInt(this.length * 8), f), this.process(u, 0);
    const h = Rf(i),
      p = this.outputLen;
    if (p % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const g = p / 4,
      N = this.get();
    if (g > N.length) throw new Error('_sha2: outputLen bigger than state');
    for (let v = 0; v < g; v++) h.setUint32(4 * v, N[v], f);
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
    for (let v = 0; v < 16; v++, a += 4) xi[v] = i.getUint32(a, !1);
    for (let v = 16; v < 64; v++) {
      const S = xi[v - 15],
        w = xi[v - 2],
        D = yn(S, 7) ^ yn(S, 18) ^ (S >>> 3),
        P = yn(w, 17) ^ yn(w, 19) ^ (w >>> 10);
      xi[v] = (P + xi[v - 7] + D + xi[v - 16]) | 0;
    }
    let { A: u, B: s, C: f, D: d, E: h, F: p, G: g, H: N } = this;
    for (let v = 0; v < 64; v++) {
      const S = yn(h, 6) ^ yn(h, 11) ^ yn(h, 25),
        w = (N + S + GS(h, p, g) + XS[v] + xi[v]) | 0,
        P = ((yn(u, 2) ^ yn(u, 13) ^ yn(u, 22)) + $S(u, s, f)) | 0;
      (N = g), (g = p), (p = h), (h = (d + w) | 0), (d = f), (f = s), (s = u), (u = (w + P) | 0);
    }
    (u = (u + this.A) | 0),
      (s = (s + this.B) | 0),
      (f = (f + this.C) | 0),
      (d = (d + this.D) | 0),
      (h = (h + this.E) | 0),
      (p = (p + this.F) | 0),
      (g = (g + this.G) | 0),
      (N = (N + this.H) | 0),
      this.set(u, s, f, d, h, p, g, N);
  }
  roundClean() {
    xi.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Vg = VS(() => new KS());
var Bf = {},
  Cf = {},
  Gl = {},
  Sp;
function ZS() {
  if (Sp) return Gl;
  (Sp = 1), (Gl.byteLength = h), (Gl.toByteArray = g), (Gl.fromByteArray = S);
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
  function d(w) {
    var D = w.length;
    if (D % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    var P = w.indexOf('=');
    P === -1 && (P = D);
    var J = P === D ? 0 : 4 - (P % 4);
    return [P, J];
  }
  function h(w) {
    var D = d(w),
      P = D[0],
      J = D[1];
    return ((P + J) * 3) / 4 - J;
  }
  function p(w, D, P) {
    return ((D + P) * 3) / 4 - P;
  }
  function g(w) {
    var D,
      P = d(w),
      J = P[0],
      W = P[1],
      H = new a(p(w, J, W)),
      Se = 0,
      Le = W > 0 ? J - 4 : J,
      we;
    for (we = 0; we < Le; we += 4)
      (D =
        (i[w.charCodeAt(we)] << 18) |
        (i[w.charCodeAt(we + 1)] << 12) |
        (i[w.charCodeAt(we + 2)] << 6) |
        i[w.charCodeAt(we + 3)]),
        (H[Se++] = (D >> 16) & 255),
        (H[Se++] = (D >> 8) & 255),
        (H[Se++] = D & 255);
    return (
      W === 2 && ((D = (i[w.charCodeAt(we)] << 2) | (i[w.charCodeAt(we + 1)] >> 4)), (H[Se++] = D & 255)),
      W === 1 &&
        ((D = (i[w.charCodeAt(we)] << 10) | (i[w.charCodeAt(we + 1)] << 4) | (i[w.charCodeAt(we + 2)] >> 2)),
        (H[Se++] = (D >> 8) & 255),
        (H[Se++] = D & 255)),
      H
    );
  }
  function N(w) {
    return r[(w >> 18) & 63] + r[(w >> 12) & 63] + r[(w >> 6) & 63] + r[w & 63];
  }
  function v(w, D, P) {
    for (var J, W = [], H = D; H < P; H += 3)
      (J = ((w[H] << 16) & 16711680) + ((w[H + 1] << 8) & 65280) + (w[H + 2] & 255)), W.push(N(J));
    return W.join('');
  }
  function S(w) {
    for (var D, P = w.length, J = P % 3, W = [], H = 16383, Se = 0, Le = P - J; Se < Le; Se += H)
      W.push(v(w, Se, Se + H > Le ? Le : Se + H));
    return (
      J === 1
        ? ((D = w[P - 1]), W.push(r[D >> 2] + r[(D << 4) & 63] + '=='))
        : J === 2 && ((D = (w[P - 2] << 8) + w[P - 1]), W.push(r[D >> 10] + r[(D >> 4) & 63] + r[(D << 2) & 63] + '=')),
      W.join('')
    );
  }
  return Gl;
}
var Ms = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var xp;
function Fg() {
  return (
    xp ||
      ((xp = 1),
      (Ms.read = function (r, i, a, u, s) {
        var f,
          d,
          h = s * 8 - u - 1,
          p = (1 << h) - 1,
          g = p >> 1,
          N = -7,
          v = a ? s - 1 : 0,
          S = a ? -1 : 1,
          w = r[i + v];
        for (v += S, f = w & ((1 << -N) - 1), w >>= -N, N += h; N > 0; f = f * 256 + r[i + v], v += S, N -= 8);
        for (d = f & ((1 << -N) - 1), f >>= -N, N += u; N > 0; d = d * 256 + r[i + v], v += S, N -= 8);
        if (f === 0) f = 1 - g;
        else {
          if (f === p) return d ? NaN : (w ? -1 : 1) * (1 / 0);
          (d = d + Math.pow(2, u)), (f = f - g);
        }
        return (w ? -1 : 1) * d * Math.pow(2, f - u);
      }),
      (Ms.write = function (r, i, a, u, s, f) {
        var d,
          h,
          p,
          g = f * 8 - s - 1,
          N = (1 << g) - 1,
          v = N >> 1,
          S = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          w = u ? 0 : f - 1,
          D = u ? 1 : -1,
          P = i < 0 || (i === 0 && 1 / i < 0) ? 1 : 0;
        for (
          i = Math.abs(i),
            isNaN(i) || i === 1 / 0
              ? ((h = isNaN(i) ? 1 : 0), (d = N))
              : ((d = Math.floor(Math.log(i) / Math.LN2)),
                i * (p = Math.pow(2, -d)) < 1 && (d--, (p *= 2)),
                d + v >= 1 ? (i += S / p) : (i += S * Math.pow(2, 1 - v)),
                i * p >= 2 && (d++, (p /= 2)),
                d + v >= N
                  ? ((h = 0), (d = N))
                  : d + v >= 1
                    ? ((h = (i * p - 1) * Math.pow(2, s)), (d = d + v))
                    : ((h = i * Math.pow(2, v - 1) * Math.pow(2, s)), (d = 0)));
          s >= 8;
          r[a + w] = h & 255, w += D, h /= 256, s -= 8
        );
        for (d = (d << s) | h, g += s; g > 0; r[a + w] = d & 255, w += D, d /= 256, g -= 8);
        r[a + w - D] |= P * 128;
      })),
    Ms
  );
}
var wp;
function lu() {
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
          a = Fg(),
          u =
            typeof Symbol == 'function' && typeof Symbol.for == 'function'
              ? Symbol.for('nodejs.util.inspect.custom')
              : null;
        (r.Buffer = h), (r.SlowBuffer = H), (r.INSPECT_MAX_BYTES = 50);
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
            const E = new Uint8Array(1),
              m = {
                foo: function () {
                  return 42;
                }
              };
            return Object.setPrototypeOf(m, Uint8Array.prototype), Object.setPrototypeOf(E, m), E.foo() === 42;
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
        function d(E) {
          if (E > s) throw new RangeError('The value "' + E + '" is invalid for option "size"');
          const m = new Uint8Array(E);
          return Object.setPrototypeOf(m, h.prototype), m;
        }
        function h(E, m, y) {
          if (typeof E == 'number') {
            if (typeof m == 'string')
              throw new TypeError('The "string" argument must be of type string. Received type number');
            return v(E);
          }
          return p(E, m, y);
        }
        h.poolSize = 8192;
        function p(E, m, y) {
          if (typeof E == 'string') return S(E, m);
          if (ArrayBuffer.isView(E)) return D(E);
          if (E == null)
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof E
            );
          if (
            ve(E, ArrayBuffer) ||
            (E && ve(E.buffer, ArrayBuffer)) ||
            (typeof SharedArrayBuffer < 'u' && (ve(E, SharedArrayBuffer) || (E && ve(E.buffer, SharedArrayBuffer))))
          )
            return P(E, m, y);
          if (typeof E == 'number')
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          const F = E.valueOf && E.valueOf();
          if (F != null && F !== E) return h.from(F, m, y);
          const ie = J(E);
          if (ie) return ie;
          if (typeof Symbol < 'u' && Symbol.toPrimitive != null && typeof E[Symbol.toPrimitive] == 'function')
            return h.from(E[Symbol.toPrimitive]('string'), m, y);
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof E
          );
        }
        (h.from = function (E, m, y) {
          return p(E, m, y);
        }),
          Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(h, Uint8Array);
        function g(E) {
          if (typeof E != 'number') throw new TypeError('"size" argument must be of type number');
          if (E < 0) throw new RangeError('The value "' + E + '" is invalid for option "size"');
        }
        function N(E, m, y) {
          return g(E), E <= 0 ? d(E) : m !== void 0 ? (typeof y == 'string' ? d(E).fill(m, y) : d(E).fill(m)) : d(E);
        }
        h.alloc = function (E, m, y) {
          return N(E, m, y);
        };
        function v(E) {
          return g(E), d(E < 0 ? 0 : W(E) | 0);
        }
        (h.allocUnsafe = function (E) {
          return v(E);
        }),
          (h.allocUnsafeSlow = function (E) {
            return v(E);
          });
        function S(E, m) {
          if (((typeof m != 'string' || m === '') && (m = 'utf8'), !h.isEncoding(m)))
            throw new TypeError('Unknown encoding: ' + m);
          const y = Se(E, m) | 0;
          let F = d(y);
          const ie = F.write(E, m);
          return ie !== y && (F = F.slice(0, ie)), F;
        }
        function w(E) {
          const m = E.length < 0 ? 0 : W(E.length) | 0,
            y = d(m);
          for (let F = 0; F < m; F += 1) y[F] = E[F] & 255;
          return y;
        }
        function D(E) {
          if (ve(E, Uint8Array)) {
            const m = new Uint8Array(E);
            return P(m.buffer, m.byteOffset, m.byteLength);
          }
          return w(E);
        }
        function P(E, m, y) {
          if (m < 0 || E.byteLength < m) throw new RangeError('"offset" is outside of buffer bounds');
          if (E.byteLength < m + (y || 0)) throw new RangeError('"length" is outside of buffer bounds');
          let F;
          return (
            m === void 0 && y === void 0
              ? (F = new Uint8Array(E))
              : y === void 0
                ? (F = new Uint8Array(E, m))
                : (F = new Uint8Array(E, m, y)),
            Object.setPrototypeOf(F, h.prototype),
            F
          );
        }
        function J(E) {
          if (h.isBuffer(E)) {
            const m = W(E.length) | 0,
              y = d(m);
            return y.length === 0 || E.copy(y, 0, 0, m), y;
          }
          if (E.length !== void 0) return typeof E.length != 'number' || xe(E.length) ? d(0) : w(E);
          if (E.type === 'Buffer' && Array.isArray(E.data)) return w(E.data);
        }
        function W(E) {
          if (E >= s)
            throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + s.toString(16) + ' bytes');
          return E | 0;
        }
        function H(E) {
          return +E != E && (E = 0), h.alloc(+E);
        }
        (h.isBuffer = function (m) {
          return m != null && m._isBuffer === !0 && m !== h.prototype;
        }),
          (h.compare = function (m, y) {
            if (
              (ve(m, Uint8Array) && (m = h.from(m, m.offset, m.byteLength)),
              ve(y, Uint8Array) && (y = h.from(y, y.offset, y.byteLength)),
              !h.isBuffer(m) || !h.isBuffer(y))
            )
              throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (m === y) return 0;
            let F = m.length,
              ie = y.length;
            for (let k = 0, q = Math.min(F, ie); k < q; ++k)
              if (m[k] !== y[k]) {
                (F = m[k]), (ie = y[k]);
                break;
              }
            return F < ie ? -1 : ie < F ? 1 : 0;
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
          (h.concat = function (m, y) {
            if (!Array.isArray(m)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (m.length === 0) return h.alloc(0);
            let F;
            if (y === void 0) for (y = 0, F = 0; F < m.length; ++F) y += m[F].length;
            const ie = h.allocUnsafe(y);
            let k = 0;
            for (F = 0; F < m.length; ++F) {
              let q = m[F];
              if (ve(q, Uint8Array))
                k + q.length > ie.length
                  ? (h.isBuffer(q) || (q = h.from(q)), q.copy(ie, k))
                  : Uint8Array.prototype.set.call(ie, q, k);
              else if (h.isBuffer(q)) q.copy(ie, k);
              else throw new TypeError('"list" argument must be an Array of Buffers');
              k += q.length;
            }
            return ie;
          });
        function Se(E, m) {
          if (h.isBuffer(E)) return E.length;
          if (ArrayBuffer.isView(E) || ve(E, ArrayBuffer)) return E.byteLength;
          if (typeof E != 'string')
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof E
            );
          const y = E.length,
            F = arguments.length > 2 && arguments[2] === !0;
          if (!F && y === 0) return 0;
          let ie = !1;
          for (;;)
            switch (m) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return y;
              case 'utf8':
              case 'utf-8':
                return ae(E).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return y * 2;
              case 'hex':
                return y >>> 1;
              case 'base64':
                return V(E).length;
              default:
                if (ie) return F ? -1 : ae(E).length;
                (m = ('' + m).toLowerCase()), (ie = !0);
            }
        }
        h.byteLength = Se;
        function Le(E, m, y) {
          let F = !1;
          if (
            ((m === void 0 || m < 0) && (m = 0),
            m > this.length ||
              ((y === void 0 || y > this.length) && (y = this.length), y <= 0) ||
              ((y >>>= 0), (m >>>= 0), y <= m))
          )
            return '';
          for (E || (E = 'utf8'); ; )
            switch (E) {
              case 'hex':
                return oe(this, m, y);
              case 'utf8':
              case 'utf-8':
                return Z(this, m, y);
              case 'ascii':
                return $(this, m, y);
              case 'latin1':
              case 'binary':
                return z(this, m, y);
              case 'base64':
                return X(this, m, y);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return j(this, m, y);
              default:
                if (F) throw new TypeError('Unknown encoding: ' + E);
                (E = (E + '').toLowerCase()), (F = !0);
            }
        }
        h.prototype._isBuffer = !0;
        function we(E, m, y) {
          const F = E[m];
          (E[m] = E[y]), (E[y] = F);
        }
        (h.prototype.swap16 = function () {
          const m = this.length;
          if (m % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (let y = 0; y < m; y += 2) we(this, y, y + 1);
          return this;
        }),
          (h.prototype.swap32 = function () {
            const m = this.length;
            if (m % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (let y = 0; y < m; y += 4) we(this, y, y + 3), we(this, y + 1, y + 2);
            return this;
          }),
          (h.prototype.swap64 = function () {
            const m = this.length;
            if (m % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (let y = 0; y < m; y += 8)
              we(this, y, y + 7), we(this, y + 1, y + 6), we(this, y + 2, y + 5), we(this, y + 3, y + 4);
            return this;
          }),
          (h.prototype.toString = function () {
            const m = this.length;
            return m === 0 ? '' : arguments.length === 0 ? Z(this, 0, m) : Le.apply(this, arguments);
          }),
          (h.prototype.toLocaleString = h.prototype.toString),
          (h.prototype.equals = function (m) {
            if (!h.isBuffer(m)) throw new TypeError('Argument must be a Buffer');
            return this === m ? !0 : h.compare(this, m) === 0;
          }),
          (h.prototype.inspect = function () {
            let m = '';
            const y = r.INSPECT_MAX_BYTES;
            return (
              (m = this.toString('hex', 0, y)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
              this.length > y && (m += ' ... '),
              '<Buffer ' + m + '>'
            );
          }),
          u && (h.prototype[u] = h.prototype.inspect),
          (h.prototype.compare = function (m, y, F, ie, k) {
            if ((ve(m, Uint8Array) && (m = h.from(m, m.offset, m.byteLength)), !h.isBuffer(m)))
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof m
              );
            if (
              (y === void 0 && (y = 0),
              F === void 0 && (F = m ? m.length : 0),
              ie === void 0 && (ie = 0),
              k === void 0 && (k = this.length),
              y < 0 || F > m.length || ie < 0 || k > this.length)
            )
              throw new RangeError('out of range index');
            if (ie >= k && y >= F) return 0;
            if (ie >= k) return -1;
            if (y >= F) return 1;
            if (((y >>>= 0), (F >>>= 0), (ie >>>= 0), (k >>>= 0), this === m)) return 0;
            let q = k - ie,
              de = F - y;
            const Te = Math.min(q, de),
              Ue = this.slice(ie, k),
              Ie = m.slice(y, F);
            for (let et = 0; et < Te; ++et)
              if (Ue[et] !== Ie[et]) {
                (q = Ue[et]), (de = Ie[et]);
                break;
              }
            return q < de ? -1 : de < q ? 1 : 0;
          });
        function he(E, m, y, F, ie) {
          if (E.length === 0) return -1;
          if (
            (typeof y == 'string'
              ? ((F = y), (y = 0))
              : y > 2147483647
                ? (y = 2147483647)
                : y < -2147483648 && (y = -2147483648),
            (y = +y),
            xe(y) && (y = ie ? 0 : E.length - 1),
            y < 0 && (y = E.length + y),
            y >= E.length)
          ) {
            if (ie) return -1;
            y = E.length - 1;
          } else if (y < 0)
            if (ie) y = 0;
            else return -1;
          if ((typeof m == 'string' && (m = h.from(m, F)), h.isBuffer(m)))
            return m.length === 0 ? -1 : Ae(E, m, y, F, ie);
          if (typeof m == 'number')
            return (
              (m = m & 255),
              typeof Uint8Array.prototype.indexOf == 'function'
                ? ie
                  ? Uint8Array.prototype.indexOf.call(E, m, y)
                  : Uint8Array.prototype.lastIndexOf.call(E, m, y)
                : Ae(E, [m], y, F, ie)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function Ae(E, m, y, F, ie) {
          let k = 1,
            q = E.length,
            de = m.length;
          if (
            F !== void 0 &&
            ((F = String(F).toLowerCase()), F === 'ucs2' || F === 'ucs-2' || F === 'utf16le' || F === 'utf-16le')
          ) {
            if (E.length < 2 || m.length < 2) return -1;
            (k = 2), (q /= 2), (de /= 2), (y /= 2);
          }
          function Te(Ie, et) {
            return k === 1 ? Ie[et] : Ie.readUInt16BE(et * k);
          }
          let Ue;
          if (ie) {
            let Ie = -1;
            for (Ue = y; Ue < q; Ue++)
              if (Te(E, Ue) === Te(m, Ie === -1 ? 0 : Ue - Ie)) {
                if ((Ie === -1 && (Ie = Ue), Ue - Ie + 1 === de)) return Ie * k;
              } else Ie !== -1 && (Ue -= Ue - Ie), (Ie = -1);
          } else
            for (y + de > q && (y = q - de), Ue = y; Ue >= 0; Ue--) {
              let Ie = !0;
              for (let et = 0; et < de; et++)
                if (Te(E, Ue + et) !== Te(m, et)) {
                  Ie = !1;
                  break;
                }
              if (Ie) return Ue;
            }
          return -1;
        }
        (h.prototype.includes = function (m, y, F) {
          return this.indexOf(m, y, F) !== -1;
        }),
          (h.prototype.indexOf = function (m, y, F) {
            return he(this, m, y, F, !0);
          }),
          (h.prototype.lastIndexOf = function (m, y, F) {
            return he(this, m, y, F, !1);
          });
        function b(E, m, y, F) {
          y = Number(y) || 0;
          const ie = E.length - y;
          F ? ((F = Number(F)), F > ie && (F = ie)) : (F = ie);
          const k = m.length;
          F > k / 2 && (F = k / 2);
          let q;
          for (q = 0; q < F; ++q) {
            const de = parseInt(m.substr(q * 2, 2), 16);
            if (xe(de)) return q;
            E[y + q] = de;
          }
          return q;
        }
        function A(E, m, y, F) {
          return te(ae(m, E.length - y), E, y, F);
        }
        function T(E, m, y, F) {
          return te(M(m), E, y, F);
        }
        function G(E, m, y, F) {
          return te(V(m), E, y, F);
        }
        function Y(E, m, y, F) {
          return te(L(m, E.length - y), E, y, F);
        }
        (h.prototype.write = function (m, y, F, ie) {
          if (y === void 0) (ie = 'utf8'), (F = this.length), (y = 0);
          else if (F === void 0 && typeof y == 'string') (ie = y), (F = this.length), (y = 0);
          else if (isFinite(y))
            (y = y >>> 0), isFinite(F) ? ((F = F >>> 0), ie === void 0 && (ie = 'utf8')) : ((ie = F), (F = void 0));
          else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          const k = this.length - y;
          if (((F === void 0 || F > k) && (F = k), (m.length > 0 && (F < 0 || y < 0)) || y > this.length))
            throw new RangeError('Attempt to write outside buffer bounds');
          ie || (ie = 'utf8');
          let q = !1;
          for (;;)
            switch (ie) {
              case 'hex':
                return b(this, m, y, F);
              case 'utf8':
              case 'utf-8':
                return A(this, m, y, F);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return T(this, m, y, F);
              case 'base64':
                return G(this, m, y, F);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return Y(this, m, y, F);
              default:
                if (q) throw new TypeError('Unknown encoding: ' + ie);
                (ie = ('' + ie).toLowerCase()), (q = !0);
            }
        }),
          (h.prototype.toJSON = function () {
            return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        function X(E, m, y) {
          return m === 0 && y === E.length ? i.fromByteArray(E) : i.fromByteArray(E.slice(m, y));
        }
        function Z(E, m, y) {
          y = Math.min(E.length, y);
          const F = [];
          let ie = m;
          for (; ie < y; ) {
            const k = E[ie];
            let q = null,
              de = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
            if (ie + de <= y) {
              let Te, Ue, Ie, et;
              switch (de) {
                case 1:
                  k < 128 && (q = k);
                  break;
                case 2:
                  (Te = E[ie + 1]), (Te & 192) === 128 && ((et = ((k & 31) << 6) | (Te & 63)), et > 127 && (q = et));
                  break;
                case 3:
                  (Te = E[ie + 1]),
                    (Ue = E[ie + 2]),
                    (Te & 192) === 128 &&
                      (Ue & 192) === 128 &&
                      ((et = ((k & 15) << 12) | ((Te & 63) << 6) | (Ue & 63)),
                      et > 2047 && (et < 55296 || et > 57343) && (q = et));
                  break;
                case 4:
                  (Te = E[ie + 1]),
                    (Ue = E[ie + 2]),
                    (Ie = E[ie + 3]),
                    (Te & 192) === 128 &&
                      (Ue & 192) === 128 &&
                      (Ie & 192) === 128 &&
                      ((et = ((k & 15) << 18) | ((Te & 63) << 12) | ((Ue & 63) << 6) | (Ie & 63)),
                      et > 65535 && et < 1114112 && (q = et));
              }
            }
            q === null
              ? ((q = 65533), (de = 1))
              : q > 65535 && ((q -= 65536), F.push(((q >>> 10) & 1023) | 55296), (q = 56320 | (q & 1023))),
              F.push(q),
              (ie += de);
          }
          return R(F);
        }
        const I = 4096;
        function R(E) {
          const m = E.length;
          if (m <= I) return String.fromCharCode.apply(String, E);
          let y = '',
            F = 0;
          for (; F < m; ) y += String.fromCharCode.apply(String, E.slice(F, (F += I)));
          return y;
        }
        function $(E, m, y) {
          let F = '';
          y = Math.min(E.length, y);
          for (let ie = m; ie < y; ++ie) F += String.fromCharCode(E[ie] & 127);
          return F;
        }
        function z(E, m, y) {
          let F = '';
          y = Math.min(E.length, y);
          for (let ie = m; ie < y; ++ie) F += String.fromCharCode(E[ie]);
          return F;
        }
        function oe(E, m, y) {
          const F = E.length;
          (!m || m < 0) && (m = 0), (!y || y < 0 || y > F) && (y = F);
          let ie = '';
          for (let k = m; k < y; ++k) ie += De[E[k]];
          return ie;
        }
        function j(E, m, y) {
          const F = E.slice(m, y);
          let ie = '';
          for (let k = 0; k < F.length - 1; k += 2) ie += String.fromCharCode(F[k] + F[k + 1] * 256);
          return ie;
        }
        h.prototype.slice = function (m, y) {
          const F = this.length;
          (m = ~~m),
            (y = y === void 0 ? F : ~~y),
            m < 0 ? ((m += F), m < 0 && (m = 0)) : m > F && (m = F),
            y < 0 ? ((y += F), y < 0 && (y = 0)) : y > F && (y = F),
            y < m && (y = m);
          const ie = this.subarray(m, y);
          return Object.setPrototypeOf(ie, h.prototype), ie;
        };
        function ne(E, m, y) {
          if (E % 1 !== 0 || E < 0) throw new RangeError('offset is not uint');
          if (E + m > y) throw new RangeError('Trying to access beyond buffer length');
        }
        (h.prototype.readUintLE = h.prototype.readUIntLE =
          function (m, y, F) {
            (m = m >>> 0), (y = y >>> 0), F || ne(m, y, this.length);
            let ie = this[m],
              k = 1,
              q = 0;
            for (; ++q < y && (k *= 256); ) ie += this[m + q] * k;
            return ie;
          }),
          (h.prototype.readUintBE = h.prototype.readUIntBE =
            function (m, y, F) {
              (m = m >>> 0), (y = y >>> 0), F || ne(m, y, this.length);
              let ie = this[m + --y],
                k = 1;
              for (; y > 0 && (k *= 256); ) ie += this[m + --y] * k;
              return ie;
            }),
          (h.prototype.readUint8 = h.prototype.readUInt8 =
            function (m, y) {
              return (m = m >>> 0), y || ne(m, 1, this.length), this[m];
            }),
          (h.prototype.readUint16LE = h.prototype.readUInt16LE =
            function (m, y) {
              return (m = m >>> 0), y || ne(m, 2, this.length), this[m] | (this[m + 1] << 8);
            }),
          (h.prototype.readUint16BE = h.prototype.readUInt16BE =
            function (m, y) {
              return (m = m >>> 0), y || ne(m, 2, this.length), (this[m] << 8) | this[m + 1];
            }),
          (h.prototype.readUint32LE = h.prototype.readUInt32LE =
            function (m, y) {
              return (
                (m = m >>> 0),
                y || ne(m, 4, this.length),
                (this[m] | (this[m + 1] << 8) | (this[m + 2] << 16)) + this[m + 3] * 16777216
              );
            }),
          (h.prototype.readUint32BE = h.prototype.readUInt32BE =
            function (m, y) {
              return (
                (m = m >>> 0),
                y || ne(m, 4, this.length),
                this[m] * 16777216 + ((this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3])
              );
            }),
          (h.prototype.readBigUInt64LE = ze(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const y = this[m],
              F = this[m + 7];
            (y === void 0 || F === void 0) && re(m, this.length - 8);
            const ie = y + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24,
              k = this[++m] + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + F * 2 ** 24;
            return BigInt(ie) + (BigInt(k) << BigInt(32));
          })),
          (h.prototype.readBigUInt64BE = ze(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const y = this[m],
              F = this[m + 7];
            (y === void 0 || F === void 0) && re(m, this.length - 8);
            const ie = y * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m],
              k = this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + F;
            return (BigInt(ie) << BigInt(32)) + BigInt(k);
          })),
          (h.prototype.readIntLE = function (m, y, F) {
            (m = m >>> 0), (y = y >>> 0), F || ne(m, y, this.length);
            let ie = this[m],
              k = 1,
              q = 0;
            for (; ++q < y && (k *= 256); ) ie += this[m + q] * k;
            return (k *= 128), ie >= k && (ie -= Math.pow(2, 8 * y)), ie;
          }),
          (h.prototype.readIntBE = function (m, y, F) {
            (m = m >>> 0), (y = y >>> 0), F || ne(m, y, this.length);
            let ie = y,
              k = 1,
              q = this[m + --ie];
            for (; ie > 0 && (k *= 256); ) q += this[m + --ie] * k;
            return (k *= 128), q >= k && (q -= Math.pow(2, 8 * y)), q;
          }),
          (h.prototype.readInt8 = function (m, y) {
            return (m = m >>> 0), y || ne(m, 1, this.length), this[m] & 128 ? (255 - this[m] + 1) * -1 : this[m];
          }),
          (h.prototype.readInt16LE = function (m, y) {
            (m = m >>> 0), y || ne(m, 2, this.length);
            const F = this[m] | (this[m + 1] << 8);
            return F & 32768 ? F | 4294901760 : F;
          }),
          (h.prototype.readInt16BE = function (m, y) {
            (m = m >>> 0), y || ne(m, 2, this.length);
            const F = this[m + 1] | (this[m] << 8);
            return F & 32768 ? F | 4294901760 : F;
          }),
          (h.prototype.readInt32LE = function (m, y) {
            return (
              (m = m >>> 0),
              y || ne(m, 4, this.length),
              this[m] | (this[m + 1] << 8) | (this[m + 2] << 16) | (this[m + 3] << 24)
            );
          }),
          (h.prototype.readInt32BE = function (m, y) {
            return (
              (m = m >>> 0),
              y || ne(m, 4, this.length),
              (this[m] << 24) | (this[m + 1] << 16) | (this[m + 2] << 8) | this[m + 3]
            );
          }),
          (h.prototype.readBigInt64LE = ze(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const y = this[m],
              F = this[m + 7];
            (y === void 0 || F === void 0) && re(m, this.length - 8);
            const ie = this[m + 4] + this[m + 5] * 2 ** 8 + this[m + 6] * 2 ** 16 + (F << 24);
            return (
              (BigInt(ie) << BigInt(32)) + BigInt(y + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24)
            );
          })),
          (h.prototype.readBigInt64BE = ze(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const y = this[m],
              F = this[m + 7];
            (y === void 0 || F === void 0) && re(m, this.length - 8);
            const ie = (y << 24) + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m];
            return (
              (BigInt(ie) << BigInt(32)) + BigInt(this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + F)
            );
          })),
          (h.prototype.readFloatLE = function (m, y) {
            return (m = m >>> 0), y || ne(m, 4, this.length), a.read(this, m, !0, 23, 4);
          }),
          (h.prototype.readFloatBE = function (m, y) {
            return (m = m >>> 0), y || ne(m, 4, this.length), a.read(this, m, !1, 23, 4);
          }),
          (h.prototype.readDoubleLE = function (m, y) {
            return (m = m >>> 0), y || ne(m, 8, this.length), a.read(this, m, !0, 52, 8);
          }),
          (h.prototype.readDoubleBE = function (m, y) {
            return (m = m >>> 0), y || ne(m, 8, this.length), a.read(this, m, !1, 52, 8);
          });
        function Ee(E, m, y, F, ie, k) {
          if (!h.isBuffer(E)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (m > ie || m < k) throw new RangeError('"value" argument is out of bounds');
          if (y + F > E.length) throw new RangeError('Index out of range');
        }
        (h.prototype.writeUintLE = h.prototype.writeUIntLE =
          function (m, y, F, ie) {
            if (((m = +m), (y = y >>> 0), (F = F >>> 0), !ie)) {
              const de = Math.pow(2, 8 * F) - 1;
              Ee(this, m, y, F, de, 0);
            }
            let k = 1,
              q = 0;
            for (this[y] = m & 255; ++q < F && (k *= 256); ) this[y + q] = (m / k) & 255;
            return y + F;
          }),
          (h.prototype.writeUintBE = h.prototype.writeUIntBE =
            function (m, y, F, ie) {
              if (((m = +m), (y = y >>> 0), (F = F >>> 0), !ie)) {
                const de = Math.pow(2, 8 * F) - 1;
                Ee(this, m, y, F, de, 0);
              }
              let k = F - 1,
                q = 1;
              for (this[y + k] = m & 255; --k >= 0 && (q *= 256); ) this[y + k] = (m / q) & 255;
              return y + F;
            }),
          (h.prototype.writeUint8 = h.prototype.writeUInt8 =
            function (m, y, F) {
              return (m = +m), (y = y >>> 0), F || Ee(this, m, y, 1, 255, 0), (this[y] = m & 255), y + 1;
            }),
          (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
            function (m, y, F) {
              return (
                (m = +m),
                (y = y >>> 0),
                F || Ee(this, m, y, 2, 65535, 0),
                (this[y] = m & 255),
                (this[y + 1] = m >>> 8),
                y + 2
              );
            }),
          (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
            function (m, y, F) {
              return (
                (m = +m),
                (y = y >>> 0),
                F || Ee(this, m, y, 2, 65535, 0),
                (this[y] = m >>> 8),
                (this[y + 1] = m & 255),
                y + 2
              );
            }),
          (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
            function (m, y, F) {
              return (
                (m = +m),
                (y = y >>> 0),
                F || Ee(this, m, y, 4, 4294967295, 0),
                (this[y + 3] = m >>> 24),
                (this[y + 2] = m >>> 16),
                (this[y + 1] = m >>> 8),
                (this[y] = m & 255),
                y + 4
              );
            }),
          (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
            function (m, y, F) {
              return (
                (m = +m),
                (y = y >>> 0),
                F || Ee(this, m, y, 4, 4294967295, 0),
                (this[y] = m >>> 24),
                (this[y + 1] = m >>> 16),
                (this[y + 2] = m >>> 8),
                (this[y + 3] = m & 255),
                y + 4
              );
            });
        function ye(E, m, y, F, ie) {
          Q(m, F, ie, E, y, 7);
          let k = Number(m & BigInt(4294967295));
          (E[y++] = k), (k = k >> 8), (E[y++] = k), (k = k >> 8), (E[y++] = k), (k = k >> 8), (E[y++] = k);
          let q = Number((m >> BigInt(32)) & BigInt(4294967295));
          return (E[y++] = q), (q = q >> 8), (E[y++] = q), (q = q >> 8), (E[y++] = q), (q = q >> 8), (E[y++] = q), y;
        }
        function O(E, m, y, F, ie) {
          Q(m, F, ie, E, y, 7);
          let k = Number(m & BigInt(4294967295));
          (E[y + 7] = k), (k = k >> 8), (E[y + 6] = k), (k = k >> 8), (E[y + 5] = k), (k = k >> 8), (E[y + 4] = k);
          let q = Number((m >> BigInt(32)) & BigInt(4294967295));
          return (
            (E[y + 3] = q), (q = q >> 8), (E[y + 2] = q), (q = q >> 8), (E[y + 1] = q), (q = q >> 8), (E[y] = q), y + 8
          );
        }
        (h.prototype.writeBigUInt64LE = ze(function (m, y = 0) {
          return ye(this, m, y, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
          (h.prototype.writeBigUInt64BE = ze(function (m, y = 0) {
            return O(this, m, y, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (h.prototype.writeIntLE = function (m, y, F, ie) {
            if (((m = +m), (y = y >>> 0), !ie)) {
              const Te = Math.pow(2, 8 * F - 1);
              Ee(this, m, y, F, Te - 1, -Te);
            }
            let k = 0,
              q = 1,
              de = 0;
            for (this[y] = m & 255; ++k < F && (q *= 256); )
              m < 0 && de === 0 && this[y + k - 1] !== 0 && (de = 1), (this[y + k] = (((m / q) >> 0) - de) & 255);
            return y + F;
          }),
          (h.prototype.writeIntBE = function (m, y, F, ie) {
            if (((m = +m), (y = y >>> 0), !ie)) {
              const Te = Math.pow(2, 8 * F - 1);
              Ee(this, m, y, F, Te - 1, -Te);
            }
            let k = F - 1,
              q = 1,
              de = 0;
            for (this[y + k] = m & 255; --k >= 0 && (q *= 256); )
              m < 0 && de === 0 && this[y + k + 1] !== 0 && (de = 1), (this[y + k] = (((m / q) >> 0) - de) & 255);
            return y + F;
          }),
          (h.prototype.writeInt8 = function (m, y, F) {
            return (
              (m = +m),
              (y = y >>> 0),
              F || Ee(this, m, y, 1, 127, -128),
              m < 0 && (m = 255 + m + 1),
              (this[y] = m & 255),
              y + 1
            );
          }),
          (h.prototype.writeInt16LE = function (m, y, F) {
            return (
              (m = +m),
              (y = y >>> 0),
              F || Ee(this, m, y, 2, 32767, -32768),
              (this[y] = m & 255),
              (this[y + 1] = m >>> 8),
              y + 2
            );
          }),
          (h.prototype.writeInt16BE = function (m, y, F) {
            return (
              (m = +m),
              (y = y >>> 0),
              F || Ee(this, m, y, 2, 32767, -32768),
              (this[y] = m >>> 8),
              (this[y + 1] = m & 255),
              y + 2
            );
          }),
          (h.prototype.writeInt32LE = function (m, y, F) {
            return (
              (m = +m),
              (y = y >>> 0),
              F || Ee(this, m, y, 4, 2147483647, -2147483648),
              (this[y] = m & 255),
              (this[y + 1] = m >>> 8),
              (this[y + 2] = m >>> 16),
              (this[y + 3] = m >>> 24),
              y + 4
            );
          }),
          (h.prototype.writeInt32BE = function (m, y, F) {
            return (
              (m = +m),
              (y = y >>> 0),
              F || Ee(this, m, y, 4, 2147483647, -2147483648),
              m < 0 && (m = 4294967295 + m + 1),
              (this[y] = m >>> 24),
              (this[y + 1] = m >>> 16),
              (this[y + 2] = m >>> 8),
              (this[y + 3] = m & 255),
              y + 4
            );
          }),
          (h.prototype.writeBigInt64LE = ze(function (m, y = 0) {
            return ye(this, m, y, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          })),
          (h.prototype.writeBigInt64BE = ze(function (m, y = 0) {
            return O(this, m, y, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          }));
        function je(E, m, y, F, ie, k) {
          if (y + F > E.length) throw new RangeError('Index out of range');
          if (y < 0) throw new RangeError('Index out of range');
        }
        function Me(E, m, y, F, ie) {
          return (m = +m), (y = y >>> 0), ie || je(E, m, y, 4), a.write(E, m, y, F, 23, 4), y + 4;
        }
        (h.prototype.writeFloatLE = function (m, y, F) {
          return Me(this, m, y, !0, F);
        }),
          (h.prototype.writeFloatBE = function (m, y, F) {
            return Me(this, m, y, !1, F);
          });
        function Pe(E, m, y, F, ie) {
          return (m = +m), (y = y >>> 0), ie || je(E, m, y, 8), a.write(E, m, y, F, 52, 8), y + 8;
        }
        (h.prototype.writeDoubleLE = function (m, y, F) {
          return Pe(this, m, y, !0, F);
        }),
          (h.prototype.writeDoubleBE = function (m, y, F) {
            return Pe(this, m, y, !1, F);
          }),
          (h.prototype.copy = function (m, y, F, ie) {
            if (!h.isBuffer(m)) throw new TypeError('argument should be a Buffer');
            if (
              (F || (F = 0),
              !ie && ie !== 0 && (ie = this.length),
              y >= m.length && (y = m.length),
              y || (y = 0),
              ie > 0 && ie < F && (ie = F),
              ie === F || m.length === 0 || this.length === 0)
            )
              return 0;
            if (y < 0) throw new RangeError('targetStart out of bounds');
            if (F < 0 || F >= this.length) throw new RangeError('Index out of range');
            if (ie < 0) throw new RangeError('sourceEnd out of bounds');
            ie > this.length && (ie = this.length), m.length - y < ie - F && (ie = m.length - y + F);
            const k = ie - F;
            return (
              this === m && typeof Uint8Array.prototype.copyWithin == 'function'
                ? this.copyWithin(y, F, ie)
                : Uint8Array.prototype.set.call(m, this.subarray(F, ie), y),
              k
            );
          }),
          (h.prototype.fill = function (m, y, F, ie) {
            if (typeof m == 'string') {
              if (
                (typeof y == 'string'
                  ? ((ie = y), (y = 0), (F = this.length))
                  : typeof F == 'string' && ((ie = F), (F = this.length)),
                ie !== void 0 && typeof ie != 'string')
              )
                throw new TypeError('encoding must be a string');
              if (typeof ie == 'string' && !h.isEncoding(ie)) throw new TypeError('Unknown encoding: ' + ie);
              if (m.length === 1) {
                const q = m.charCodeAt(0);
                ((ie === 'utf8' && q < 128) || ie === 'latin1') && (m = q);
              }
            } else typeof m == 'number' ? (m = m & 255) : typeof m == 'boolean' && (m = Number(m));
            if (y < 0 || this.length < y || this.length < F) throw new RangeError('Out of range index');
            if (F <= y) return this;
            (y = y >>> 0), (F = F === void 0 ? this.length : F >>> 0), m || (m = 0);
            let k;
            if (typeof m == 'number') for (k = y; k < F; ++k) this[k] = m;
            else {
              const q = h.isBuffer(m) ? m : h.from(m, ie),
                de = q.length;
              if (de === 0) throw new TypeError('The value "' + m + '" is invalid for argument "value"');
              for (k = 0; k < F - y; ++k) this[k + y] = q[k % de];
            }
            return this;
          });
        const Re = {};
        function ke(E, m, y) {
          Re[E] = class extends y {
            constructor() {
              super(),
                Object.defineProperty(this, 'message', {
                  value: m.apply(this, arguments),
                  writable: !0,
                  configurable: !0
                }),
                (this.name = `${this.name} [${E}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return E;
            }
            set code(ie) {
              Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: ie, writable: !0 });
            }
            toString() {
              return `${this.name} [${E}]: ${this.message}`;
            }
          };
        }
        ke(
          'ERR_BUFFER_OUT_OF_BOUNDS',
          function (E) {
            return E ? `${E} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
          },
          RangeError
        ),
          ke(
            'ERR_INVALID_ARG_TYPE',
            function (E, m) {
              return `The "${E}" argument must be of type number. Received type ${typeof m}`;
            },
            TypeError
          ),
          ke(
            'ERR_OUT_OF_RANGE',
            function (E, m, y) {
              let F = `The value of "${E}" is out of range.`,
                ie = y;
              return (
                Number.isInteger(y) && Math.abs(y) > 2 ** 32
                  ? (ie = B(String(y)))
                  : typeof y == 'bigint' &&
                    ((ie = String(y)),
                    (y > BigInt(2) ** BigInt(32) || y < -(BigInt(2) ** BigInt(32))) && (ie = B(ie)),
                    (ie += 'n')),
                (F += ` It must be ${m}. Received ${ie}`),
                F
              );
            },
            RangeError
          );
        function B(E) {
          let m = '',
            y = E.length;
          const F = E[0] === '-' ? 1 : 0;
          for (; y >= F + 4; y -= 3) m = `_${E.slice(y - 3, y)}${m}`;
          return `${E.slice(0, y)}${m}`;
        }
        function U(E, m, y) {
          se(m, 'offset'), (E[m] === void 0 || E[m + y] === void 0) && re(m, E.length - (y + 1));
        }
        function Q(E, m, y, F, ie, k) {
          if (E > y || E < m) {
            const q = typeof m == 'bigint' ? 'n' : '';
            let de;
            throw (
              (m === 0 || m === BigInt(0)
                ? (de = `>= 0${q} and < 2${q} ** ${(k + 1) * 8}${q}`)
                : (de = `>= -(2${q} ** ${(k + 1) * 8 - 1}${q}) and < 2 ** ${(k + 1) * 8 - 1}${q}`),
              new Re.ERR_OUT_OF_RANGE('value', de, E))
            );
          }
          U(F, ie, k);
        }
        function se(E, m) {
          if (typeof E != 'number') throw new Re.ERR_INVALID_ARG_TYPE(m, 'number', E);
        }
        function re(E, m, y) {
          throw Math.floor(E) !== E
            ? (se(E, y), new Re.ERR_OUT_OF_RANGE('offset', 'an integer', E))
            : m < 0
              ? new Re.ERR_BUFFER_OUT_OF_BOUNDS()
              : new Re.ERR_OUT_OF_RANGE('offset', `>= 0 and <= ${m}`, E);
        }
        const ue = /[^+/0-9A-Za-z-_]/g;
        function me(E) {
          if (((E = E.split('=')[0]), (E = E.trim().replace(ue, '')), E.length < 2)) return '';
          for (; E.length % 4 !== 0; ) E = E + '=';
          return E;
        }
        function ae(E, m) {
          m = m || 1 / 0;
          let y;
          const F = E.length;
          let ie = null;
          const k = [];
          for (let q = 0; q < F; ++q) {
            if (((y = E.charCodeAt(q)), y > 55295 && y < 57344)) {
              if (!ie) {
                if (y > 56319) {
                  (m -= 3) > -1 && k.push(239, 191, 189);
                  continue;
                } else if (q + 1 === F) {
                  (m -= 3) > -1 && k.push(239, 191, 189);
                  continue;
                }
                ie = y;
                continue;
              }
              if (y < 56320) {
                (m -= 3) > -1 && k.push(239, 191, 189), (ie = y);
                continue;
              }
              y = (((ie - 55296) << 10) | (y - 56320)) + 65536;
            } else ie && (m -= 3) > -1 && k.push(239, 191, 189);
            if (((ie = null), y < 128)) {
              if ((m -= 1) < 0) break;
              k.push(y);
            } else if (y < 2048) {
              if ((m -= 2) < 0) break;
              k.push((y >> 6) | 192, (y & 63) | 128);
            } else if (y < 65536) {
              if ((m -= 3) < 0) break;
              k.push((y >> 12) | 224, ((y >> 6) & 63) | 128, (y & 63) | 128);
            } else if (y < 1114112) {
              if ((m -= 4) < 0) break;
              k.push((y >> 18) | 240, ((y >> 12) & 63) | 128, ((y >> 6) & 63) | 128, (y & 63) | 128);
            } else throw new Error('Invalid code point');
          }
          return k;
        }
        function M(E) {
          const m = [];
          for (let y = 0; y < E.length; ++y) m.push(E.charCodeAt(y) & 255);
          return m;
        }
        function L(E, m) {
          let y, F, ie;
          const k = [];
          for (let q = 0; q < E.length && !((m -= 2) < 0); ++q)
            (y = E.charCodeAt(q)), (F = y >> 8), (ie = y % 256), k.push(ie), k.push(F);
          return k;
        }
        function V(E) {
          return i.toByteArray(me(E));
        }
        function te(E, m, y, F) {
          let ie;
          for (ie = 0; ie < F && !(ie + y >= m.length || ie >= E.length); ++ie) m[ie + y] = E[ie];
          return ie;
        }
        function ve(E, m) {
          return (
            E instanceof m ||
            (E != null && E.constructor != null && E.constructor.name != null && E.constructor.name === m.name)
          );
        }
        function xe(E) {
          return E !== E;
        }
        const De = (function () {
          const E = '0123456789abcdef',
            m = new Array(256);
          for (let y = 0; y < 16; ++y) {
            const F = y * 16;
            for (let ie = 0; ie < 16; ++ie) m[F + ie] = E[y] + E[ie];
          }
          return m;
        })();
        function ze(E) {
          return typeof BigInt > 'u' ? rt : E;
        }
        function rt() {
          throw new Error('BigInt not supported');
        }
      })(Cf)),
    Cf
  );
}
var js = { exports: {} },
  QS = js.exports,
  Ep;
function nc() {
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
            g = 14,
            N = 9007199254740991,
            v = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            S = 1e7,
            w = 1e9;
          function D(he) {
            var Ae,
              b,
              A,
              T = (O.prototype = { constructor: O, toString: null, valueOf: null }),
              G = new O(1),
              Y = 20,
              X = 4,
              Z = -7,
              I = 21,
              R = -1e7,
              $ = 1e7,
              z = !1,
              oe = 1,
              j = 0,
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
              Ee = '0123456789abcdefghijklmnopqrstuvwxyz',
              ye = !0;
            function O(B, U) {
              var Q,
                se,
                re,
                ue,
                me,
                ae,
                M,
                L,
                V = this;
              if (!(V instanceof O)) return new O(B, U);
              if (U == null) {
                if (B && B._isBigNumber === !0) {
                  (V.s = B.s),
                    !B.c || B.e > $
                      ? (V.c = V.e = null)
                      : B.e < R
                        ? (V.c = [(V.e = 0)])
                        : ((V.e = B.e), (V.c = B.c.slice()));
                  return;
                }
                if ((ae = typeof B == 'number') && B * 0 == 0) {
                  if (((V.s = 1 / B < 0 ? ((B = -B), -1) : 1), B === ~~B)) {
                    for (ue = 0, me = B; me >= 10; me /= 10, ue++);
                    ue > $ ? (V.c = V.e = null) : ((V.e = ue), (V.c = [B]));
                    return;
                  }
                  L = String(B);
                } else {
                  if (!u.test((L = String(B)))) return A(V, L, ae);
                  V.s = L.charCodeAt(0) == 45 ? ((L = L.slice(1)), -1) : 1;
                }
                (ue = L.indexOf('.')) > -1 && (L = L.replace('.', '')),
                  (me = L.search(/e/i)) > 0
                    ? (ue < 0 && (ue = me), (ue += +L.slice(me + 1)), (L = L.substring(0, me)))
                    : ue < 0 && (ue = L.length);
              } else {
                if ((H(U, 2, Ee.length, 'Base'), U == 10 && ye)) return (V = new O(B)), Re(V, Y + V.e + 1, X);
                if (((L = String(B)), (ae = typeof B == 'number'))) {
                  if (B * 0 != 0) return A(V, L, ae, U);
                  if (
                    ((V.s = 1 / B < 0 ? ((L = L.slice(1)), -1) : 1), O.DEBUG && L.replace(/^0\.0*|\./, '').length > 15)
                  )
                    throw Error(h + B);
                } else V.s = L.charCodeAt(0) === 45 ? ((L = L.slice(1)), -1) : 1;
                for (Q = Ee.slice(0, U), ue = me = 0, M = L.length; me < M; me++)
                  if (Q.indexOf((se = L.charAt(me))) < 0) {
                    if (se == '.') {
                      if (me > ue) {
                        ue = M;
                        continue;
                      }
                    } else if (
                      !re &&
                      ((L == L.toUpperCase() && (L = L.toLowerCase())) ||
                        (L == L.toLowerCase() && (L = L.toUpperCase())))
                    ) {
                      (re = !0), (me = -1), (ue = 0);
                      continue;
                    }
                    return A(V, String(B), ae, U);
                  }
                (ae = !1),
                  (L = b(L, U, 10, V.s)),
                  (ue = L.indexOf('.')) > -1 ? (L = L.replace('.', '')) : (ue = L.length);
              }
              for (me = 0; L.charCodeAt(me) === 48; me++);
              for (M = L.length; L.charCodeAt(--M) === 48; );
              if ((L = L.slice(me, ++M))) {
                if (((M -= me), ae && O.DEBUG && M > 15 && (B > N || B !== f(B)))) throw Error(h + V.s * B);
                if ((ue = ue - me - 1) > $) V.c = V.e = null;
                else if (ue < R) V.c = [(V.e = 0)];
                else {
                  if (((V.e = ue), (V.c = []), (me = (ue + 1) % g), ue < 0 && (me += g), me < M)) {
                    for (me && V.c.push(+L.slice(0, me)), M -= g; me < M; ) V.c.push(+L.slice(me, (me += g)));
                    me = g - (L = L.slice(me)).length;
                  } else me -= M;
                  for (; me--; L += '0');
                  V.c.push(+L);
                }
              } else V.c = [(V.e = 0)];
            }
            (O.clone = D),
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
                  var U, Q;
                  if (B != null)
                    if (typeof B == 'object') {
                      if (
                        (B.hasOwnProperty((U = 'DECIMAL_PLACES')) && ((Q = B[U]), H(Q, 0, w, U), (Y = Q)),
                        B.hasOwnProperty((U = 'ROUNDING_MODE')) && ((Q = B[U]), H(Q, 0, 8, U), (X = Q)),
                        B.hasOwnProperty((U = 'EXPONENTIAL_AT')) &&
                          ((Q = B[U]),
                          Q && Q.pop
                            ? (H(Q[0], -1e9, 0, U), H(Q[1], 0, w, U), (Z = Q[0]), (I = Q[1]))
                            : (H(Q, -1e9, w, U), (Z = -(I = Q < 0 ? -Q : Q)))),
                        B.hasOwnProperty((U = 'RANGE')))
                      )
                        if (((Q = B[U]), Q && Q.pop)) H(Q[0], -1e9, -1, U), H(Q[1], 1, w, U), (R = Q[0]), ($ = Q[1]);
                        else if ((H(Q, -1e9, w, U), Q)) R = -($ = Q < 0 ? -Q : Q);
                        else throw Error(d + U + ' cannot be zero: ' + Q);
                      if (B.hasOwnProperty((U = 'CRYPTO')))
                        if (((Q = B[U]), Q === !!Q))
                          if (Q)
                            if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) z = Q;
                            else throw ((z = !Q), Error(d + 'crypto unavailable'));
                          else z = Q;
                        else throw Error(d + U + ' not true or false: ' + Q);
                      if (
                        (B.hasOwnProperty((U = 'MODULO_MODE')) && ((Q = B[U]), H(Q, 0, 9, U), (oe = Q)),
                        B.hasOwnProperty((U = 'POW_PRECISION')) && ((Q = B[U]), H(Q, 0, w, U), (j = Q)),
                        B.hasOwnProperty((U = 'FORMAT')))
                      )
                        if (((Q = B[U]), typeof Q == 'object')) ne = Q;
                        else throw Error(d + U + ' not an object: ' + Q);
                      if (B.hasOwnProperty((U = 'ALPHABET')))
                        if (((Q = B[U]), typeof Q == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(Q)))
                          (ye = Q.slice(0, 10) == '0123456789'), (Ee = Q);
                        else throw Error(d + U + ' invalid: ' + Q);
                    } else throw Error(d + 'Object expected: ' + B);
                  return {
                    DECIMAL_PLACES: Y,
                    ROUNDING_MODE: X,
                    EXPONENTIAL_AT: [Z, I],
                    RANGE: [R, $],
                    CRYPTO: z,
                    MODULO_MODE: oe,
                    POW_PRECISION: j,
                    FORMAT: ne,
                    ALPHABET: Ee
                  };
                }),
              (O.isBigNumber = function (B) {
                if (!B || B._isBigNumber !== !0) return !1;
                if (!O.DEBUG) return !0;
                var U,
                  Q,
                  se = B.c,
                  re = B.e,
                  ue = B.s;
                e: if ({}.toString.call(se) == '[object Array]') {
                  if ((ue === 1 || ue === -1) && re >= -1e9 && re <= w && re === f(re)) {
                    if (se[0] === 0) {
                      if (re === 0 && se.length === 1) return !0;
                      break e;
                    }
                    if (((U = (re + 1) % g), U < 1 && (U += g), String(se[0]).length == U)) {
                      for (U = 0; U < se.length; U++) if (((Q = se[U]), Q < 0 || Q >= p || Q !== f(Q))) break e;
                      if (Q !== 0) return !0;
                    }
                  }
                } else if (se === null && re === null && (ue === null || ue === 1 || ue === -1)) return !0;
                throw Error(d + 'Invalid BigNumber: ' + B);
              }),
              (O.maximum = O.max =
                function () {
                  return Me(arguments, -1);
                }),
              (O.minimum = O.min =
                function () {
                  return Me(arguments, 1);
                }),
              (O.random = (function () {
                var B = 9007199254740992,
                  U =
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
                    me,
                    ae,
                    M = 0,
                    L = [],
                    V = new O(G);
                  if ((Q == null ? (Q = Y) : H(Q, 0, w), (me = s(Q / g)), z))
                    if (crypto.getRandomValues) {
                      for (se = crypto.getRandomValues(new Uint32Array((me *= 2))); M < me; )
                        (ae = se[M] * 131072 + (se[M + 1] >>> 11)),
                          ae >= 9e15
                            ? ((re = crypto.getRandomValues(new Uint32Array(2))), (se[M] = re[0]), (se[M + 1] = re[1]))
                            : (L.push(ae % 1e14), (M += 2));
                      M = me / 2;
                    } else if (crypto.randomBytes) {
                      for (se = crypto.randomBytes((me *= 7)); M < me; )
                        (ae =
                          (se[M] & 31) * 281474976710656 +
                          se[M + 1] * 1099511627776 +
                          se[M + 2] * 4294967296 +
                          se[M + 3] * 16777216 +
                          (se[M + 4] << 16) +
                          (se[M + 5] << 8) +
                          se[M + 6]),
                          ae >= 9e15 ? crypto.randomBytes(7).copy(se, M) : (L.push(ae % 1e14), (M += 7));
                      M = me / 7;
                    } else throw ((z = !1), Error(d + 'crypto unavailable'));
                  if (!z) for (; M < me; ) (ae = U()), ae < 9e15 && (L[M++] = ae % 1e14);
                  for (
                    me = L[--M], Q %= g, me && Q && ((ae = v[g - Q]), (L[M] = f(me / ae) * ae));
                    L[M] === 0;
                    L.pop(), M--
                  );
                  if (M < 0) L = [(ue = 0)];
                  else {
                    for (ue = -1; L[0] === 0; L.splice(0, 1), ue -= g);
                    for (M = 1, ae = L[0]; ae >= 10; ae /= 10, M++);
                    M < g && (ue -= g - M);
                  }
                  return (V.e = ue), (V.c = L), V;
                };
              })()),
              (O.sum = function () {
                for (var B = 1, U = arguments, Q = new O(U[0]); B < U.length; ) Q = Q.plus(U[B++]);
                return Q;
              }),
              (b = (function () {
                var B = '0123456789';
                function U(Q, se, re, ue) {
                  for (var me, ae = [0], M, L = 0, V = Q.length; L < V; ) {
                    for (M = ae.length; M--; ae[M] *= se);
                    for (ae[0] += ue.indexOf(Q.charAt(L++)), me = 0; me < ae.length; me++)
                      ae[me] > re - 1 &&
                        (ae[me + 1] == null && (ae[me + 1] = 0), (ae[me + 1] += (ae[me] / re) | 0), (ae[me] %= re));
                  }
                  return ae.reverse();
                }
                return function (Q, se, re, ue, me) {
                  var ae,
                    M,
                    L,
                    V,
                    te,
                    ve,
                    xe,
                    De,
                    ze = Q.indexOf('.'),
                    rt = Y,
                    E = X;
                  for (
                    ze >= 0 &&
                      ((V = j),
                      (j = 0),
                      (Q = Q.replace('.', '')),
                      (De = new O(se)),
                      (ve = De.pow(Q.length - ze)),
                      (j = V),
                      (De.c = U(we(J(ve.c), ve.e, '0'), 10, re, B)),
                      (De.e = De.c.length)),
                      xe = U(Q, se, re, me ? ((ae = Ee), B) : ((ae = B), Ee)),
                      L = V = xe.length;
                    xe[--V] == 0;
                    xe.pop()
                  );
                  if (!xe[0]) return ae.charAt(0);
                  if (
                    (ze < 0
                      ? --L
                      : ((ve.c = xe),
                        (ve.e = L),
                        (ve.s = ue),
                        (ve = Ae(ve, De, rt, E, re)),
                        (xe = ve.c),
                        (te = ve.r),
                        (L = ve.e)),
                    (M = L + rt + 1),
                    (ze = xe[M]),
                    (V = re / 2),
                    (te = te || M < 0 || xe[M + 1] != null),
                    (te =
                      E < 4
                        ? (ze != null || te) && (E == 0 || E == (ve.s < 0 ? 3 : 2))
                        : ze > V ||
                          (ze == V && (E == 4 || te || (E == 6 && xe[M - 1] & 1) || E == (ve.s < 0 ? 8 : 7)))),
                    M < 1 || !xe[0])
                  )
                    Q = te ? we(ae.charAt(1), -rt, ae.charAt(0)) : ae.charAt(0);
                  else {
                    if (((xe.length = M), te))
                      for (--re; ++xe[--M] > re; ) (xe[M] = 0), M || (++L, (xe = [1].concat(xe)));
                    for (V = xe.length; !xe[--V]; );
                    for (ze = 0, Q = ''; ze <= V; Q += ae.charAt(xe[ze++]));
                    Q = we(Q, L, ae.charAt(0));
                  }
                  return Q;
                };
              })()),
              (Ae = (function () {
                function B(se, re, ue) {
                  var me,
                    ae,
                    M,
                    L,
                    V = 0,
                    te = se.length,
                    ve = re % S,
                    xe = (re / S) | 0;
                  for (se = se.slice(); te--; )
                    (M = se[te] % S),
                      (L = (se[te] / S) | 0),
                      (me = xe * M + L * ve),
                      (ae = ve * M + (me % S) * S + V),
                      (V = ((ae / ue) | 0) + ((me / S) | 0) + xe * L),
                      (se[te] = ae % ue);
                  return V && (se = [V].concat(se)), se;
                }
                function U(se, re, ue, me) {
                  var ae, M;
                  if (ue != me) M = ue > me ? 1 : -1;
                  else
                    for (ae = M = 0; ae < ue; ae++)
                      if (se[ae] != re[ae]) {
                        M = se[ae] > re[ae] ? 1 : -1;
                        break;
                      }
                  return M;
                }
                function Q(se, re, ue, me) {
                  for (var ae = 0; ue--; )
                    (se[ue] -= ae), (ae = se[ue] < re[ue] ? 1 : 0), (se[ue] = ae * me + se[ue] - re[ue]);
                  for (; !se[0] && se.length > 1; se.splice(0, 1));
                }
                return function (se, re, ue, me, ae) {
                  var M,
                    L,
                    V,
                    te,
                    ve,
                    xe,
                    De,
                    ze,
                    rt,
                    E,
                    m,
                    y,
                    F,
                    ie,
                    k,
                    q,
                    de,
                    Te = se.s == re.s ? 1 : -1,
                    Ue = se.c,
                    Ie = re.c;
                  if (!Ue || !Ue[0] || !Ie || !Ie[0])
                    return new O(
                      !se.s || !re.s || (Ue ? Ie && Ue[0] == Ie[0] : !Ie)
                        ? NaN
                        : (Ue && Ue[0] == 0) || !Ie
                          ? Te * 0
                          : Te / 0
                    );
                  for (
                    ze = new O(Te),
                      rt = ze.c = [],
                      L = se.e - re.e,
                      Te = ue + L + 1,
                      ae || ((ae = p), (L = P(se.e / g) - P(re.e / g)), (Te = (Te / g) | 0)),
                      V = 0;
                    Ie[V] == (Ue[V] || 0);
                    V++
                  );
                  if ((Ie[V] > (Ue[V] || 0) && L--, Te < 0)) rt.push(1), (te = !0);
                  else {
                    for (
                      ie = Ue.length,
                        q = Ie.length,
                        V = 0,
                        Te += 2,
                        ve = f(ae / (Ie[0] + 1)),
                        ve > 1 && ((Ie = B(Ie, ve, ae)), (Ue = B(Ue, ve, ae)), (q = Ie.length), (ie = Ue.length)),
                        F = q,
                        E = Ue.slice(0, q),
                        m = E.length;
                      m < q;
                      E[m++] = 0
                    );
                    (de = Ie.slice()), (de = [0].concat(de)), (k = Ie[0]), Ie[1] >= ae / 2 && k++;
                    do {
                      if (((ve = 0), (M = U(Ie, E, q, m)), M < 0)) {
                        if (((y = E[0]), q != m && (y = y * ae + (E[1] || 0)), (ve = f(y / k)), ve > 1))
                          for (
                            ve >= ae && (ve = ae - 1), xe = B(Ie, ve, ae), De = xe.length, m = E.length;
                            U(xe, E, De, m) == 1;

                          )
                            ve--, Q(xe, q < De ? de : Ie, De, ae), (De = xe.length), (M = 1);
                        else ve == 0 && (M = ve = 1), (xe = Ie.slice()), (De = xe.length);
                        if ((De < m && (xe = [0].concat(xe)), Q(E, xe, m, ae), (m = E.length), M == -1))
                          for (; U(Ie, E, q, m) < 1; ) ve++, Q(E, q < m ? de : Ie, m, ae), (m = E.length);
                      } else M === 0 && (ve++, (E = [0]));
                      (rt[V++] = ve), E[0] ? (E[m++] = Ue[F] || 0) : ((E = [Ue[F]]), (m = 1));
                    } while ((F++ < ie || E[0] != null) && Te--);
                    (te = E[0] != null), rt[0] || rt.splice(0, 1);
                  }
                  if (ae == p) {
                    for (V = 1, Te = rt[0]; Te >= 10; Te /= 10, V++);
                    Re(ze, ue + (ze.e = V + L * g - 1) + 1, me, te);
                  } else (ze.e = L), (ze.r = +te);
                  return ze;
                };
              })());
            function je(B, U, Q, se) {
              var re, ue, me, ae, M;
              if ((Q == null ? (Q = X) : H(Q, 0, 8), !B.c)) return B.toString();
              if (((re = B.c[0]), (me = B.e), U == null))
                (M = J(B.c)), (M = se == 1 || (se == 2 && (me <= Z || me >= I)) ? Le(M, me) : we(M, me, '0'));
              else if (
                ((B = Re(new O(B), U, Q)),
                (ue = B.e),
                (M = J(B.c)),
                (ae = M.length),
                se == 1 || (se == 2 && (U <= ue || ue <= Z)))
              ) {
                for (; ae < U; M += '0', ae++);
                M = Le(M, ue);
              } else if (((U -= me), (M = we(M, ue, '0')), ue + 1 > ae)) {
                if (--U > 0) for (M += '.'; U--; M += '0');
              } else if (((U += ue - ae), U > 0)) for (ue + 1 == ae && (M += '.'); U--; M += '0');
              return B.s < 0 && re ? '-' + M : M;
            }
            function Me(B, U) {
              for (var Q, se, re = 1, ue = new O(B[0]); re < B.length; re++)
                (se = new O(B[re])), (!se.s || (Q = W(ue, se)) === U || (Q === 0 && ue.s === U)) && (ue = se);
              return ue;
            }
            function Pe(B, U, Q) {
              for (var se = 1, re = U.length; !U[--re]; U.pop());
              for (re = U[0]; re >= 10; re /= 10, se++);
              return (
                (Q = se + Q * g - 1) > $ ? (B.c = B.e = null) : Q < R ? (B.c = [(B.e = 0)]) : ((B.e = Q), (B.c = U)), B
              );
            }
            A = (function () {
              var B = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                U = /^([^.]+)\.$/,
                Q = /^\.([^.]+)$/,
                se = /^-?(Infinity|NaN)$/,
                re = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (ue, me, ae, M) {
                var L,
                  V = ae ? me : me.replace(re, '');
                if (se.test(V)) ue.s = isNaN(V) ? null : V < 0 ? -1 : 1;
                else {
                  if (
                    !ae &&
                    ((V = V.replace(B, function (te, ve, xe) {
                      return (L = (xe = xe.toLowerCase()) == 'x' ? 16 : xe == 'b' ? 2 : 8), !M || M == L ? ve : te;
                    })),
                    M && ((L = M), (V = V.replace(U, '$1').replace(Q, '0.$1'))),
                    me != V)
                  )
                    return new O(V, L);
                  if (O.DEBUG) throw Error(d + 'Not a' + (M ? ' base ' + M : '') + ' number: ' + me);
                  ue.s = null;
                }
                ue.c = ue.e = null;
              };
            })();
            function Re(B, U, Q, se) {
              var re,
                ue,
                me,
                ae,
                M,
                L,
                V,
                te = B.c,
                ve = v;
              if (te) {
                e: {
                  for (re = 1, ae = te[0]; ae >= 10; ae /= 10, re++);
                  if (((ue = U - re), ue < 0))
                    (ue += g), (me = U), (M = te[(L = 0)]), (V = f((M / ve[re - me - 1]) % 10));
                  else if (((L = s((ue + 1) / g)), L >= te.length))
                    if (se) {
                      for (; te.length <= L; te.push(0));
                      (M = V = 0), (re = 1), (ue %= g), (me = ue - g + 1);
                    } else break e;
                  else {
                    for (M = ae = te[L], re = 1; ae >= 10; ae /= 10, re++);
                    (ue %= g), (me = ue - g + re), (V = me < 0 ? 0 : f((M / ve[re - me - 1]) % 10));
                  }
                  if (
                    ((se = se || U < 0 || te[L + 1] != null || (me < 0 ? M : M % ve[re - me - 1])),
                    (se =
                      Q < 4
                        ? (V || se) && (Q == 0 || Q == (B.s < 0 ? 3 : 2))
                        : V > 5 ||
                          (V == 5 &&
                            (Q == 4 ||
                              se ||
                              (Q == 6 && (ue > 0 ? (me > 0 ? M / ve[re - me] : 0) : te[L - 1]) % 10 & 1) ||
                              Q == (B.s < 0 ? 8 : 7)))),
                    U < 1 || !te[0])
                  )
                    return (
                      (te.length = 0),
                      se ? ((U -= B.e + 1), (te[0] = ve[(g - (U % g)) % g]), (B.e = -U || 0)) : (te[0] = B.e = 0),
                      B
                    );
                  if (
                    (ue == 0
                      ? ((te.length = L), (ae = 1), L--)
                      : ((te.length = L + 1),
                        (ae = ve[g - ue]),
                        (te[L] = me > 0 ? f((M / ve[re - me]) % ve[me]) * ae : 0)),
                    se)
                  )
                    for (;;)
                      if (L == 0) {
                        for (ue = 1, me = te[0]; me >= 10; me /= 10, ue++);
                        for (me = te[0] += ae, ae = 1; me >= 10; me /= 10, ae++);
                        ue != ae && (B.e++, te[0] == p && (te[0] = 1));
                        break;
                      } else {
                        if (((te[L] += ae), te[L] != p)) break;
                        (te[L--] = 0), (ae = 1);
                      }
                  for (ue = te.length; te[--ue] === 0; te.pop());
                }
                B.e > $ ? (B.c = B.e = null) : B.e < R && (B.c = [(B.e = 0)]);
              }
              return B;
            }
            function ke(B) {
              var U,
                Q = B.e;
              return Q === null
                ? B.toString()
                : ((U = J(B.c)), (U = Q <= Z || Q >= I ? Le(U, Q) : we(U, Q, '0')), B.s < 0 ? '-' + U : U);
            }
            return (
              (T.absoluteValue = T.abs =
                function () {
                  var B = new O(this);
                  return B.s < 0 && (B.s = 1), B;
                }),
              (T.comparedTo = function (B, U) {
                return W(this, new O(B, U));
              }),
              (T.decimalPlaces = T.dp =
                function (B, U) {
                  var Q,
                    se,
                    re,
                    ue = this;
                  if (B != null) return H(B, 0, w), U == null ? (U = X) : H(U, 0, 8), Re(new O(ue), B + ue.e + 1, U);
                  if (!(Q = ue.c)) return null;
                  if (((se = ((re = Q.length - 1) - P(this.e / g)) * g), (re = Q[re])))
                    for (; re % 10 == 0; re /= 10, se--);
                  return se < 0 && (se = 0), se;
                }),
              (T.dividedBy = T.div =
                function (B, U) {
                  return Ae(this, new O(B, U), Y, X);
                }),
              (T.dividedToIntegerBy = T.idiv =
                function (B, U) {
                  return Ae(this, new O(B, U), 0, 1);
                }),
              (T.exponentiatedBy = T.pow =
                function (B, U) {
                  var Q,
                    se,
                    re,
                    ue,
                    me,
                    ae,
                    M,
                    L,
                    V,
                    te = this;
                  if (((B = new O(B)), B.c && !B.isInteger())) throw Error(d + 'Exponent not an integer: ' + ke(B));
                  if (
                    (U != null && (U = new O(U)),
                    (ae = B.e > 14),
                    !te.c || !te.c[0] || (te.c[0] == 1 && !te.e && te.c.length == 1) || !B.c || !B.c[0])
                  )
                    return (V = new O(Math.pow(+ke(te), ae ? B.s * (2 - Se(B)) : +ke(B)))), U ? V.mod(U) : V;
                  if (((M = B.s < 0), U)) {
                    if (U.c ? !U.c[0] : !U.s) return new O(NaN);
                    (se = !M && te.isInteger() && U.isInteger()), se && (te = te.mod(U));
                  } else {
                    if (
                      B.e > 9 &&
                      (te.e > 0 ||
                        te.e < -1 ||
                        (te.e == 0
                          ? te.c[0] > 1 || (ae && te.c[1] >= 24e7)
                          : te.c[0] < 8e13 || (ae && te.c[0] <= 9999975e7)))
                    )
                      return (ue = te.s < 0 && Se(B) ? -0 : 0), te.e > -1 && (ue = 1 / ue), new O(M ? 1 / ue : ue);
                    j && (ue = s(j / g + 2));
                  }
                  for (
                    ae ? ((Q = new O(0.5)), M && (B.s = 1), (L = Se(B))) : ((re = Math.abs(+ke(B))), (L = re % 2)),
                      V = new O(G);
                    ;

                  ) {
                    if (L) {
                      if (((V = V.times(te)), !V.c)) break;
                      ue ? V.c.length > ue && (V.c.length = ue) : se && (V = V.mod(U));
                    }
                    if (re) {
                      if (((re = f(re / 2)), re === 0)) break;
                      L = re % 2;
                    } else if (((B = B.times(Q)), Re(B, B.e + 1, 1), B.e > 14)) L = Se(B);
                    else {
                      if (((re = +ke(B)), re === 0)) break;
                      L = re % 2;
                    }
                    (te = te.times(te)), ue ? te.c && te.c.length > ue && (te.c.length = ue) : se && (te = te.mod(U));
                  }
                  return se ? V : (M && (V = G.div(V)), U ? V.mod(U) : ue ? Re(V, j, X, me) : V);
                }),
              (T.integerValue = function (B) {
                var U = new O(this);
                return B == null ? (B = X) : H(B, 0, 8), Re(U, U.e + 1, B);
              }),
              (T.isEqualTo = T.eq =
                function (B, U) {
                  return W(this, new O(B, U)) === 0;
                }),
              (T.isFinite = function () {
                return !!this.c;
              }),
              (T.isGreaterThan = T.gt =
                function (B, U) {
                  return W(this, new O(B, U)) > 0;
                }),
              (T.isGreaterThanOrEqualTo = T.gte =
                function (B, U) {
                  return (U = W(this, new O(B, U))) === 1 || U === 0;
                }),
              (T.isInteger = function () {
                return !!this.c && P(this.e / g) > this.c.length - 2;
              }),
              (T.isLessThan = T.lt =
                function (B, U) {
                  return W(this, new O(B, U)) < 0;
                }),
              (T.isLessThanOrEqualTo = T.lte =
                function (B, U) {
                  return (U = W(this, new O(B, U))) === -1 || U === 0;
                }),
              (T.isNaN = function () {
                return !this.s;
              }),
              (T.isNegative = function () {
                return this.s < 0;
              }),
              (T.isPositive = function () {
                return this.s > 0;
              }),
              (T.isZero = function () {
                return !!this.c && this.c[0] == 0;
              }),
              (T.minus = function (B, U) {
                var Q,
                  se,
                  re,
                  ue,
                  me = this,
                  ae = me.s;
                if (((B = new O(B, U)), (U = B.s), !ae || !U)) return new O(NaN);
                if (ae != U) return (B.s = -U), me.plus(B);
                var M = me.e / g,
                  L = B.e / g,
                  V = me.c,
                  te = B.c;
                if (!M || !L) {
                  if (!V || !te) return V ? ((B.s = -U), B) : new O(te ? me : NaN);
                  if (!V[0] || !te[0]) return te[0] ? ((B.s = -U), B) : new O(V[0] ? me : X == 3 ? -0 : 0);
                }
                if (((M = P(M)), (L = P(L)), (V = V.slice()), (ae = M - L))) {
                  for (
                    (ue = ae < 0) ? ((ae = -ae), (re = V)) : ((L = M), (re = te)), re.reverse(), U = ae;
                    U--;
                    re.push(0)
                  );
                  re.reverse();
                } else
                  for (se = (ue = (ae = V.length) < (U = te.length)) ? ae : U, ae = U = 0; U < se; U++)
                    if (V[U] != te[U]) {
                      ue = V[U] < te[U];
                      break;
                    }
                if (
                  (ue && ((re = V), (V = te), (te = re), (B.s = -B.s)), (U = (se = te.length) - (Q = V.length)), U > 0)
                )
                  for (; U--; V[Q++] = 0);
                for (U = p - 1; se > ae; ) {
                  if (V[--se] < te[se]) {
                    for (Q = se; Q && !V[--Q]; V[Q] = U);
                    --V[Q], (V[se] += p);
                  }
                  V[se] -= te[se];
                }
                for (; V[0] == 0; V.splice(0, 1), --L);
                return V[0] ? Pe(B, V, L) : ((B.s = X == 3 ? -1 : 1), (B.c = [(B.e = 0)]), B);
              }),
              (T.modulo = T.mod =
                function (B, U) {
                  var Q,
                    se,
                    re = this;
                  return (
                    (B = new O(B, U)),
                    !re.c || !B.s || (B.c && !B.c[0])
                      ? new O(NaN)
                      : !B.c || (re.c && !re.c[0])
                        ? new O(re)
                        : (oe == 9
                            ? ((se = B.s), (B.s = 1), (Q = Ae(re, B, 0, 3)), (B.s = se), (Q.s *= se))
                            : (Q = Ae(re, B, 0, oe)),
                          (B = re.minus(Q.times(B))),
                          !B.c[0] && oe == 1 && (B.s = re.s),
                          B)
                  );
                }),
              (T.multipliedBy = T.times =
                function (B, U) {
                  var Q,
                    se,
                    re,
                    ue,
                    me,
                    ae,
                    M,
                    L,
                    V,
                    te,
                    ve,
                    xe,
                    De,
                    ze,
                    rt,
                    E = this,
                    m = E.c,
                    y = (B = new O(B, U)).c;
                  if (!m || !y || !m[0] || !y[0])
                    return (
                      !E.s || !B.s || (m && !m[0] && !y) || (y && !y[0] && !m)
                        ? (B.c = B.e = B.s = null)
                        : ((B.s *= E.s), !m || !y ? (B.c = B.e = null) : ((B.c = [0]), (B.e = 0))),
                      B
                    );
                  for (
                    se = P(E.e / g) + P(B.e / g),
                      B.s *= E.s,
                      M = m.length,
                      te = y.length,
                      M < te && ((De = m), (m = y), (y = De), (re = M), (M = te), (te = re)),
                      re = M + te,
                      De = [];
                    re--;
                    De.push(0)
                  );
                  for (ze = p, rt = S, re = te; --re >= 0; ) {
                    for (Q = 0, ve = y[re] % rt, xe = (y[re] / rt) | 0, me = M, ue = re + me; ue > re; )
                      (L = m[--me] % rt),
                        (V = (m[me] / rt) | 0),
                        (ae = xe * L + V * ve),
                        (L = ve * L + (ae % rt) * rt + De[ue] + Q),
                        (Q = ((L / ze) | 0) + ((ae / rt) | 0) + xe * V),
                        (De[ue--] = L % ze);
                    De[ue] = Q;
                  }
                  return Q ? ++se : De.splice(0, 1), Pe(B, De, se);
                }),
              (T.negated = function () {
                var B = new O(this);
                return (B.s = -B.s || null), B;
              }),
              (T.plus = function (B, U) {
                var Q,
                  se = this,
                  re = se.s;
                if (((B = new O(B, U)), (U = B.s), !re || !U)) return new O(NaN);
                if (re != U) return (B.s = -U), se.minus(B);
                var ue = se.e / g,
                  me = B.e / g,
                  ae = se.c,
                  M = B.c;
                if (!ue || !me) {
                  if (!ae || !M) return new O(re / 0);
                  if (!ae[0] || !M[0]) return M[0] ? B : new O(ae[0] ? se : re * 0);
                }
                if (((ue = P(ue)), (me = P(me)), (ae = ae.slice()), (re = ue - me))) {
                  for (re > 0 ? ((me = ue), (Q = M)) : ((re = -re), (Q = ae)), Q.reverse(); re--; Q.push(0));
                  Q.reverse();
                }
                for (re = ae.length, U = M.length, re - U < 0 && ((Q = M), (M = ae), (ae = Q), (U = re)), re = 0; U; )
                  (re = ((ae[--U] = ae[U] + M[U] + re) / p) | 0), (ae[U] = p === ae[U] ? 0 : ae[U] % p);
                return re && ((ae = [re].concat(ae)), ++me), Pe(B, ae, me);
              }),
              (T.precision = T.sd =
                function (B, U) {
                  var Q,
                    se,
                    re,
                    ue = this;
                  if (B != null && B !== !!B) return H(B, 1, w), U == null ? (U = X) : H(U, 0, 8), Re(new O(ue), B, U);
                  if (!(Q = ue.c)) return null;
                  if (((re = Q.length - 1), (se = re * g + 1), (re = Q[re]))) {
                    for (; re % 10 == 0; re /= 10, se--);
                    for (re = Q[0]; re >= 10; re /= 10, se++);
                  }
                  return B && ue.e + 1 > se && (se = ue.e + 1), se;
                }),
              (T.shiftedBy = function (B) {
                return H(B, -9007199254740991, N), this.times('1e' + B);
              }),
              (T.squareRoot = T.sqrt =
                function () {
                  var B,
                    U,
                    Q,
                    se,
                    re,
                    ue = this,
                    me = ue.c,
                    ae = ue.s,
                    M = ue.e,
                    L = Y + 4,
                    V = new O('0.5');
                  if (ae !== 1 || !me || !me[0])
                    return new O(!ae || (ae < 0 && (!me || me[0])) ? NaN : me ? ue : 1 / 0);
                  if (
                    ((ae = Math.sqrt(+ke(ue))),
                    ae == 0 || ae == 1 / 0
                      ? ((U = J(me)),
                        (U.length + M) % 2 == 0 && (U += '0'),
                        (ae = Math.sqrt(+U)),
                        (M = P((M + 1) / 2) - (M < 0 || M % 2)),
                        ae == 1 / 0
                          ? (U = '5e' + M)
                          : ((U = ae.toExponential()), (U = U.slice(0, U.indexOf('e') + 1) + M)),
                        (Q = new O(U)))
                      : (Q = new O(ae + '')),
                    Q.c[0])
                  ) {
                    for (M = Q.e, ae = M + L, ae < 3 && (ae = 0); ; )
                      if (
                        ((re = Q),
                        (Q = V.times(re.plus(Ae(ue, re, L, 1)))),
                        J(re.c).slice(0, ae) === (U = J(Q.c)).slice(0, ae))
                      )
                        if ((Q.e < M && --ae, (U = U.slice(ae - 3, ae + 1)), U == '9999' || (!se && U == '4999'))) {
                          if (!se && (Re(re, re.e + Y + 2, 0), re.times(re).eq(ue))) {
                            Q = re;
                            break;
                          }
                          (L += 4), (ae += 4), (se = 1);
                        } else {
                          (!+U || (!+U.slice(1) && U.charAt(0) == '5')) &&
                            (Re(Q, Q.e + Y + 2, 1), (B = !Q.times(Q).eq(ue)));
                          break;
                        }
                  }
                  return Re(Q, Q.e + Y + 1, X, B);
                }),
              (T.toExponential = function (B, U) {
                return B != null && (H(B, 0, w), B++), je(this, B, U, 1);
              }),
              (T.toFixed = function (B, U) {
                return B != null && (H(B, 0, w), (B = B + this.e + 1)), je(this, B, U);
              }),
              (T.toFormat = function (B, U, Q) {
                var se,
                  re = this;
                if (Q == null)
                  B != null && U && typeof U == 'object'
                    ? ((Q = U), (U = null))
                    : B && typeof B == 'object'
                      ? ((Q = B), (B = U = null))
                      : (Q = ne);
                else if (typeof Q != 'object') throw Error(d + 'Argument not an object: ' + Q);
                if (((se = re.toFixed(B, U)), re.c)) {
                  var ue,
                    me = se.split('.'),
                    ae = +Q.groupSize,
                    M = +Q.secondaryGroupSize,
                    L = Q.groupSeparator || '',
                    V = me[0],
                    te = me[1],
                    ve = re.s < 0,
                    xe = ve ? V.slice(1) : V,
                    De = xe.length;
                  if ((M && ((ue = ae), (ae = M), (M = ue), (De -= ue)), ae > 0 && De > 0)) {
                    for (ue = De % ae || ae, V = xe.substr(0, ue); ue < De; ue += ae) V += L + xe.substr(ue, ae);
                    M > 0 && (V += L + xe.slice(ue)), ve && (V = '-' + V);
                  }
                  se = te
                    ? V +
                      (Q.decimalSeparator || '') +
                      ((M = +Q.fractionGroupSize)
                        ? te.replace(new RegExp('\\d{' + M + '}\\B', 'g'), '$&' + (Q.fractionGroupSeparator || ''))
                        : te)
                    : V;
                }
                return (Q.prefix || '') + se + (Q.suffix || '');
              }),
              (T.toFraction = function (B) {
                var U,
                  Q,
                  se,
                  re,
                  ue,
                  me,
                  ae,
                  M,
                  L,
                  V,
                  te,
                  ve,
                  xe = this,
                  De = xe.c;
                if (B != null && ((ae = new O(B)), (!ae.isInteger() && (ae.c || ae.s !== 1)) || ae.lt(G)))
                  throw Error(d + 'Argument ' + (ae.isInteger() ? 'out of range: ' : 'not an integer: ') + ke(ae));
                if (!De) return new O(xe);
                for (
                  U = new O(G),
                    L = Q = new O(G),
                    se = M = new O(G),
                    ve = J(De),
                    ue = U.e = ve.length - xe.e - 1,
                    U.c[0] = v[(me = ue % g) < 0 ? g + me : me],
                    B = !B || ae.comparedTo(U) > 0 ? (ue > 0 ? U : L) : ae,
                    me = $,
                    $ = 1 / 0,
                    ae = new O(ve),
                    M.c[0] = 0;
                  (V = Ae(ae, U, 0, 1)), (re = Q.plus(V.times(se))), re.comparedTo(B) != 1;

                )
                  (Q = se),
                    (se = re),
                    (L = M.plus(V.times((re = L)))),
                    (M = re),
                    (U = ae.minus(V.times((re = U)))),
                    (ae = re);
                return (
                  (re = Ae(B.minus(Q), se, 0, 1)),
                  (M = M.plus(re.times(L))),
                  (Q = Q.plus(re.times(se))),
                  (M.s = L.s = xe.s),
                  (ue = ue * 2),
                  (te =
                    Ae(L, se, ue, X)
                      .minus(xe)
                      .abs()
                      .comparedTo(Ae(M, Q, ue, X).minus(xe).abs()) < 1
                      ? [L, se]
                      : [M, Q]),
                  ($ = me),
                  te
                );
              }),
              (T.toNumber = function () {
                return +ke(this);
              }),
              (T.toPrecision = function (B, U) {
                return B != null && H(B, 1, w), je(this, B, U, 2);
              }),
              (T.toString = function (B) {
                var U,
                  Q = this,
                  se = Q.s,
                  re = Q.e;
                return (
                  re === null
                    ? se
                      ? ((U = 'Infinity'), se < 0 && (U = '-' + U))
                      : (U = 'NaN')
                    : (B == null
                        ? (U = re <= Z || re >= I ? Le(J(Q.c), re) : we(J(Q.c), re, '0'))
                        : B === 10 && ye
                          ? ((Q = Re(new O(Q), Y + re + 1, X)), (U = we(J(Q.c), Q.e, '0')))
                          : (H(B, 2, Ee.length, 'Base'), (U = b(we(J(Q.c), re, '0'), 10, B, se, !0))),
                      se < 0 && Q.c[0] && (U = '-' + U)),
                  U
                );
              }),
              (T.valueOf = T.toJSON =
                function () {
                  return ke(this);
                }),
              (T._isBigNumber = !0),
              he != null && O.set(he),
              O
            );
          }
          function P(he) {
            var Ae = he | 0;
            return he > 0 || he === Ae ? Ae : Ae - 1;
          }
          function J(he) {
            for (var Ae, b, A = 1, T = he.length, G = he[0] + ''; A < T; ) {
              for (Ae = he[A++] + '', b = g - Ae.length; b--; Ae = '0' + Ae);
              G += Ae;
            }
            for (T = G.length; G.charCodeAt(--T) === 48; );
            return G.slice(0, T + 1 || 1);
          }
          function W(he, Ae) {
            var b,
              A,
              T = he.c,
              G = Ae.c,
              Y = he.s,
              X = Ae.s,
              Z = he.e,
              I = Ae.e;
            if (!Y || !X) return null;
            if (((b = T && !T[0]), (A = G && !G[0]), b || A)) return b ? (A ? 0 : -X) : Y;
            if (Y != X) return Y;
            if (((b = Y < 0), (A = Z == I), !T || !G)) return A ? 0 : !T ^ b ? 1 : -1;
            if (!A) return (Z > I) ^ b ? 1 : -1;
            for (X = (Z = T.length) < (I = G.length) ? Z : I, Y = 0; Y < X; Y++)
              if (T[Y] != G[Y]) return (T[Y] > G[Y]) ^ b ? 1 : -1;
            return Z == I ? 0 : (Z > I) ^ b ? 1 : -1;
          }
          function H(he, Ae, b, A) {
            if (he < Ae || he > b || he !== f(he))
              throw Error(
                d +
                  (A || 'Argument') +
                  (typeof he == 'number'
                    ? he < Ae || he > b
                      ? ' out of range: '
                      : ' not an integer: '
                    : ' not a primitive number: ') +
                  String(he)
              );
          }
          function Se(he) {
            var Ae = he.c.length - 1;
            return P(he.e / g) == Ae && he.c[Ae] % 2 != 0;
          }
          function Le(he, Ae) {
            return (he.length > 1 ? he.charAt(0) + '.' + he.slice(1) : he) + (Ae < 0 ? 'e' : 'e+') + Ae;
          }
          function we(he, Ae, b) {
            var A, T;
            if (Ae < 0) {
              for (T = b + '.'; ++Ae; T += b);
              he = T + he;
            } else if (((A = he.length), ++Ae > A)) {
              for (T = b, Ae -= A; --Ae; T += b);
              he += T;
            } else Ae < A && (he = he.slice(0, Ae) + '.' + he.slice(Ae));
            return he;
          }
          (a = D()),
            (a.default = a.BigNumber = a),
            r.exports
              ? (r.exports = a)
              : (i || (i = typeof globalThis < 'u' && globalThis ? globalThis : window), (i.BigNumber = a));
        })(QS);
      })(js)),
    js.exports
  );
}
var Df, Ap;
function PS() {
  return (
    Ap ||
      ((Ap = 1),
      (Df = function (i, a, u) {
        var s = new i.Uint8Array(u),
          f = a.pushInt,
          d = a.pushInt32,
          h = a.pushInt32Neg,
          p = a.pushInt64,
          g = a.pushInt64Neg,
          N = a.pushFloat,
          v = a.pushFloatSingle,
          S = a.pushFloatDouble,
          w = a.pushTrue,
          D = a.pushFalse,
          P = a.pushUndefined,
          J = a.pushNull,
          W = a.pushInfinity,
          H = a.pushInfinityNeg,
          Se = a.pushNaN,
          Le = a.pushNaNNeg,
          we = a.pushArrayStart,
          he = a.pushArrayStartFixed,
          Ae = a.pushArrayStartFixed32,
          b = a.pushArrayStartFixed64,
          A = a.pushObjectStart,
          T = a.pushObjectStartFixed,
          G = a.pushObjectStartFixed32,
          Y = a.pushObjectStartFixed64,
          X = a.pushByteString,
          Z = a.pushByteStringStart,
          I = a.pushUtf8String,
          R = a.pushUtf8StringStart,
          $ = a.pushSimpleUnassigned,
          z = a.pushTagStart,
          oe = a.pushTagStart4,
          j = a.pushTagStart8,
          ne = a.pushTagUnassigned,
          Ee = a.pushBreak,
          ye = i.Math.pow,
          O = 0,
          je = 0,
          Me = 0;
        function Pe(ee) {
          for (
            ee = ee | 0, O = 0, je = ee;
            (O | 0) < (je | 0) && ((Me = Oi[s[O] & 255](s[O] | 0) | 0), !((Me | 0) > 0));

          );
          return Me | 0;
        }
        function Re(ee) {
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
        function U(ee) {
          return (ee = ee | 0), f(ee | 0), (O = (O + 1) | 0), 0;
        }
        function Q(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (f(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function se(ee) {
          return (ee = ee | 0), Re(2) | 0 ? 1 : (f(ke((O + 1) | 0) | 0), (O = (O + 3) | 0), 0);
        }
        function re(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (d(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function ue(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (p(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function me(ee) {
          return (ee = ee | 0), f((-1 - ((ee - 32) | 0)) | 0), (O = (O + 1) | 0), 0;
        }
        function ae(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (f((-1 - (s[(O + 1) | 0] | 0)) | 0), (O = (O + 2) | 0), 0);
        }
        function M(ee) {
          ee = ee | 0;
          var Je = 0;
          return Re(2) | 0 ? 1 : ((Je = ke((O + 1) | 0) | 0), f((-1 - (Je | 0)) | 0), (O = (O + 3) | 0), 0);
        }
        function L(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (h(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function V(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (g(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
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
            Re(st | 0) | 0
              ? 1
              : ((Je = (O + 1) | 0), (ht = (((O + 1) | 0) + (st | 0)) | 0), X(Je | 0, ht | 0), (O = ht | 0), 0)
          );
        }
        function ve(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(1) | 0 ||
            ((st = s[(O + 1) | 0] | 0), (Je = (O + 2) | 0), (ht = (((O + 2) | 0) + (st | 0)) | 0), Re((st + 1) | 0) | 0)
            ? 1
            : (X(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function xe(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(2) | 0 ||
            ((st = ke((O + 1) | 0) | 0),
            (Je = (O + 3) | 0),
            (ht = (((O + 3) | 0) + (st | 0)) | 0),
            Re((st + 2) | 0) | 0)
            ? 1
            : (X(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function De(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(4) | 0 ||
            ((st = B((O + 1) | 0) | 0), (Je = (O + 5) | 0), (ht = (((O + 5) | 0) + (st | 0)) | 0), Re((st + 4) | 0) | 0)
            ? 1
            : (X(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function ze(ee) {
          return (ee = ee | 0), 1;
        }
        function rt(ee) {
          return (ee = ee | 0), Z(), (O = (O + 1) | 0), 0;
        }
        function E(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return (
            (st = (ee - 96) | 0),
            Re(st | 0) | 0
              ? 1
              : ((Je = (O + 1) | 0), (ht = (((O + 1) | 0) + (st | 0)) | 0), I(Je | 0, ht | 0), (O = ht | 0), 0)
          );
        }
        function m(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(1) | 0 ||
            ((st = s[(O + 1) | 0] | 0), (Je = (O + 2) | 0), (ht = (((O + 2) | 0) + (st | 0)) | 0), Re((st + 1) | 0) | 0)
            ? 1
            : (I(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function y(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(2) | 0 ||
            ((st = ke((O + 1) | 0) | 0),
            (Je = (O + 3) | 0),
            (ht = (((O + 3) | 0) + (st | 0)) | 0),
            Re((st + 2) | 0) | 0)
            ? 1
            : (I(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function F(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(4) | 0 ||
            ((st = B((O + 1) | 0) | 0), (Je = (O + 5) | 0), (ht = (((O + 5) | 0) + (st | 0)) | 0), Re((st + 4) | 0) | 0)
            ? 1
            : (I(Je | 0, ht | 0), (O = ht | 0), 0);
        }
        function ie(ee) {
          return (ee = ee | 0), 1;
        }
        function k(ee) {
          return (ee = ee | 0), R(), (O = (O + 1) | 0), 0;
        }
        function q(ee) {
          return (ee = ee | 0), he((ee - 128) | 0), (O = (O + 1) | 0), 0;
        }
        function de(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (he(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function Te(ee) {
          return (ee = ee | 0), Re(2) | 0 ? 1 : (he(ke((O + 1) | 0) | 0), (O = (O + 3) | 0), 0);
        }
        function Ue(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (Ae(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function Ie(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (b(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function et(ee) {
          return (ee = ee | 0), we(), (O = (O + 1) | 0), 0;
        }
        function Xe(ee) {
          ee = ee | 0;
          var Je = 0;
          return (Je = (ee - 160) | 0), Re(Je | 0) | 0 ? 1 : (T(Je | 0), (O = (O + 1) | 0), 0);
        }
        function Ve(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (T(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function Fe(ee) {
          return (ee = ee | 0), Re(2) | 0 ? 1 : (T(ke((O + 1) | 0) | 0), (O = (O + 3) | 0), 0);
        }
        function Ge(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (G(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function $e(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (Y(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function it(ee) {
          return (ee = ee | 0), A(), (O = (O + 1) | 0), 0;
        }
        function ot(ee) {
          return (ee = ee | 0), z((ee - 192) | 0 | 0), (O = (O + 1) | 0), 0;
        }
        function Dt(ee) {
          return (ee = ee | 0), z(ee | 0), (O = (O + 1) | 0), 0;
        }
        function hr(ee) {
          return (ee = ee | 0), z(ee | 0), (O = (O + 1) | 0), 0;
        }
        function la(ee) {
          return (ee = ee | 0), z(ee | 0), (O = (O + 1) | 0), 0;
        }
        function ua(ee) {
          return (ee = ee | 0), z(ee | 0), (O = (O + 1) | 0), 0;
        }
        function Tt(ee) {
          return (ee = ee | 0), z((ee - 192) | 0 | 0), (O = (O + 1) | 0), 0;
        }
        function Td(ee) {
          return (ee = ee | 0), z(ee | 0), (O = (O + 1) | 0), 0;
        }
        function fc(ee) {
          return (ee = ee | 0), z(ee | 0), (O = (O + 1) | 0), 0;
        }
        function dc(ee) {
          return (ee = ee | 0), z(ee | 0), (O = (O + 1) | 0), 0;
        }
        function gu(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (z(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function yu(ee) {
          return (ee = ee | 0), Re(2) | 0 ? 1 : (z(ke((O + 1) | 0) | 0), (O = (O + 3) | 0), 0);
        }
        function hc(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (oe(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0), (O = (O + 5) | 0), 0);
        }
        function on(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (j(ke((O + 1) | 0) | 0, ke((O + 3) | 0) | 0, ke((O + 5) | 0) | 0, ke((O + 7) | 0) | 0),
                (O = (O + 9) | 0),
                0)
          );
        }
        function dt(ee) {
          return (ee = ee | 0), $(((ee | 0) - 224) | 0), (O = (O + 1) | 0), 0;
        }
        function lr(ee) {
          return (ee = ee | 0), D(), (O = (O + 1) | 0), 0;
        }
        function Qn(ee) {
          return (ee = ee | 0), w(), (O = (O + 1) | 0), 0;
        }
        function Xa(ee) {
          return (ee = ee | 0), J(), (O = (O + 1) | 0), 0;
        }
        function mc(ee) {
          return (ee = ee | 0), P(), (O = (O + 1) | 0), 0;
        }
        function pc(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : ($(s[(O + 1) | 0] | 0), (O = (O + 2) | 0), 0);
        }
        function vu(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 1,
            kr = 0,
            Ir = 0,
            fn = 0;
          return Re(2) | 0
            ? 1
            : ((Je = s[(O + 1) | 0] | 0),
              (ht = s[(O + 2) | 0] | 0),
              (Je | 0) & 128 && (st = -1),
              (kr = +(((Je | 0) & 124) >> 2)),
              (Ir = +((((Je | 0) & 3) << 8) | ht)),
              +kr == 0
                ? N(+(+st * 5960464477539063e-23 * +Ir))
                : +kr == 31
                  ? +st == 1
                    ? +Ir > 0
                      ? Se()
                      : W()
                    : +Ir > 0
                      ? Le()
                      : H()
                  : N(+(+st * ye(2, +(+kr - 25)) * +(1024 + Ir))),
              (O = (O + 3) | 0),
              0);
        }
        function Ti(ee) {
          return (
            (ee = ee | 0),
            Re(4) | 0
              ? 1
              : (v(s[(O + 1) | 0] | 0, s[(O + 2) | 0] | 0, s[(O + 3) | 0] | 0, s[(O + 4) | 0] | 0),
                (O = (O + 5) | 0),
                0)
          );
        }
        function Ka(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
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
          return (ee = ee | 0), Ee(), (O = (O + 1) | 0), 0;
        }
        var Oi = [
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          U,
          Q,
          se,
          re,
          ue,
          pt,
          pt,
          pt,
          pt,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          me,
          ae,
          M,
          L,
          V,
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
          ve,
          xe,
          De,
          ze,
          pt,
          pt,
          pt,
          rt,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          E,
          m,
          y,
          F,
          ie,
          pt,
          pt,
          pt,
          k,
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
          de,
          Te,
          Ue,
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
          Ve,
          Fe,
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
          gu,
          yu,
          hc,
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
          Xa,
          mc,
          pc,
          vu,
          Ti,
          Ka,
          pt,
          pt,
          pt,
          Pn
        ];
        return { parse: Pe };
      })),
    Df
  );
}
var Uf = {},
  Sr = {},
  Np;
function ic() {
  if (Np) return Sr;
  Np = 1;
  const r = nc().BigNumber;
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
var _p;
function gd() {
  return (
    _p ||
      ((_p = 1),
      (function (r) {
        const { Buffer: i } = lu(),
          a = nc().BigNumber,
          u = ic(),
          s = u.SHIFT32,
          f = u.SHIFT16,
          d = 2097151;
        r.parseHalf = function (g) {
          const N = g[0] & 128 ? -1 : 1,
            v = (g[0] & 124) >> 2,
            S = ((g[0] & 3) << 8) | g[1];
          return v
            ? v === 31
              ? N * (S ? NaN : 1 / 0)
              : N * Math.pow(2, v - 25) * (1024 + S)
            : N * 5960464477539063e-23 * S;
        };
        function h(p) {
          return p < 16 ? '0' + p.toString(16) : p.toString(16);
        }
        (r.arrayBufferToBignumber = function (p) {
          const g = p.byteLength;
          let N = '';
          for (let v = 0; v < g; v++) N += h(p[v]);
          return new a(N, 16);
        }),
          (r.buildMap = (p) => {
            const g = new Map(),
              N = Object.keys(p),
              v = N.length;
            for (let S = 0; S < v; S++) g.set(N[S], p[N[S]]);
            return g;
          }),
          (r.buildInt32 = (p, g) => p * f + g),
          (r.buildInt64 = (p, g, N, v) => {
            const S = r.buildInt32(p, g),
              w = r.buildInt32(N, v);
            return S > d ? new a(S).times(s).plus(w) : S * s + w;
          }),
          (r.writeHalf = function (g, N) {
            const v = i.allocUnsafe(4);
            v.writeFloatBE(N, 0);
            const S = v.readUInt32BE(0);
            if ((S & 8191) !== 0) return !1;
            let w = (S >> 16) & 32768;
            const D = (S >> 23) & 255,
              P = S & 8388607;
            if (D >= 113 && D <= 142) w += ((D - 112) << 10) + (P >> 13);
            else if (D >= 103 && D < 113) {
              if (P & ((1 << (126 - D)) - 1)) return !1;
              w += (P + 8388608) >> (126 - D);
            } else return !1;
            return g.writeUInt16BE(w, 0), !0;
          }),
          (r.keySorter = function (p, g) {
            const N = p[0].byteLength,
              v = g[0].byteLength;
            return N > v ? 1 : v > N ? -1 : p[0].compare(g[0]);
          }),
          (r.isNegativeZero = (p) => p === 0 && 1 / p < 0),
          (r.nextPowerOf2 = (p) => {
            let g = 0;
            if (p && !(p & (p - 1))) return p;
            for (; p !== 0; ) (p >>= 1), (g += 1);
            return 1 << g;
          });
      })(Uf)),
    Uf
  );
}
var jf, Tp;
function Gg() {
  if (Tp) return jf;
  Tp = 1;
  const r = ic(),
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
  return (jf = s), jf;
}
var kf, Op;
function $g() {
  if (Op) return kf;
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
  return (kf = r), kf;
}
var If, Mp;
function Yg() {
  if (Mp) return If;
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
        g = d.port ? ':' + d.port : '',
        N = d.protocol ? d.protocol + '//' : '',
        v = d.host || '',
        S = d.hostname || '',
        w = d.search || (d.query ? '?' + d.query : ''),
        D = d.hash || '',
        P = d.pathname || '',
        J = d.path || P + w;
      return `${N}${h || p}${v || S + g}${J}${D}`;
    }
  }
  return (If = { URLWithLegacySupport: s, URLSearchParams: globalThis.URLSearchParams, defaultBase: u, format: f }), If;
}
var qf, Rp;
function JS() {
  if (Rp) return qf;
  Rp = 1;
  const { URLWithLegacySupport: r, format: i } = Yg();
  return (
    (qf = (a, u = {}, s = {}, f) => {
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
    qf
  );
}
var Lf, Bp;
function Xg() {
  if (Bp) return Lf;
  Bp = 1;
  const { URLWithLegacySupport: r, format: i, URLSearchParams: a, defaultBase: u } = Yg(),
    s = JS();
  return (Lf = { URL: r, URLSearchParams: a, format: i, relative: s, defaultBase: u }), Lf;
}
var zf, Cp;
function Kg() {
  if (Cp) return zf;
  Cp = 1;
  const { Buffer: r } = lu(),
    i = Fg(),
    a = nc().BigNumber,
    u = PS(),
    s = gd(),
    f = ic(),
    d = Gg(),
    h = $g(),
    { URL: p } = Xg();
  class g {
    constructor(v) {
      (v = v || {}),
        !v.size || v.size < 65536 ? (v.size = 65536) : (v.size = s.nextPowerOf2(v.size)),
        (this._heap = new ArrayBuffer(v.size)),
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
          v.tags
        )),
        (this.parser = u(
          Pf,
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
        case f.PARENT.TAG:
          this._push(this.createTag(v.ref[0], v.ref[1]));
          break;
        case f.PARENT.BYTE_STRING:
          this._push(this.createByteString(v.ref, v.length));
          break;
        case f.PARENT.UTF8_STRING:
          this._push(this.createUtf8String(v.ref, v.length));
          break;
        case f.PARENT.MAP:
          if (v.values % 2 > 0) throw new Error('Odd number of elements in the map');
          this._push(this.createMap(v.ref, v.length));
          break;
        case f.PARENT.OBJECT:
          if (v.values % 2 > 0) throw new Error('Odd number of elements in the map');
          this._push(this.createObject(v.ref, v.length));
          break;
        case f.PARENT.ARRAY:
          this._push(this.createArray(v.ref, v.length));
          break;
      }
      this._currentParent && this._currentParent.type === f.PARENT.TAG && this._dec();
    }
    _dec() {
      const v = this._currentParent;
      v.length < 0 || (v.length--, v.length === 0 && this._closeParent());
    }
    _push(v, S) {
      const w = this._currentParent;
      switch ((w.values++, w.type)) {
        case f.PARENT.ARRAY:
        case f.PARENT.BYTE_STRING:
        case f.PARENT.UTF8_STRING:
          w.length > -1 ? (this._ref[this._ref.length - w.length] = v) : this._ref.push(v), this._dec();
          break;
        case f.PARENT.OBJECT:
          w.tmpKey != null
            ? ((this._ref[w.tmpKey] = v), (w.tmpKey = null), this._dec())
            : ((w.tmpKey = v), typeof w.tmpKey != 'string' && ((w.type = f.PARENT.MAP), (w.ref = s.buildMap(w.ref))));
          break;
        case f.PARENT.MAP:
          w.tmpKey != null ? (this._ref.set(w.tmpKey, v), (w.tmpKey = null), this._dec()) : (w.tmpKey = v);
          break;
        case f.PARENT.TAG:
          this._ref.push(v), S || this._dec();
          break;
        default:
          throw new Error('Unknown parent type');
      }
    }
    _createParent(v, S, w) {
      this._parents[this._depth] = { type: S, length: w, ref: v, values: 0, tmpKey: null };
    }
    _reset() {
      (this._res = []),
        (this._parents = [{ type: f.PARENT.ARRAY, length: -1, ref: this._res, values: 0, tmpKey: null }]);
    }
    createTag(v, S) {
      const w = this._knownTags[v];
      return w ? w(S) : new h(v, S);
    }
    createMap(v, S) {
      return v;
    }
    createObject(v, S) {
      return v;
    }
    createArray(v, S) {
      return v;
    }
    createByteString(v, S) {
      return r.concat(v);
    }
    createByteStringFromHeap(v, S) {
      return v === S ? r.alloc(0) : r.from(this._heap.slice(v, S));
    }
    createInt(v) {
      return v;
    }
    createInt32(v, S) {
      return s.buildInt32(v, S);
    }
    createInt64(v, S, w, D) {
      return s.buildInt64(v, S, w, D);
    }
    createFloat(v) {
      return v;
    }
    createFloatSingle(v, S, w, D) {
      return i.read([v, S, w, D], 0, !1, 23, 4);
    }
    createFloatDouble(v, S, w, D, P, J, W, H) {
      return i.read([v, S, w, D, P, J, W, H], 0, !1, 52, 8);
    }
    createInt32Neg(v, S) {
      return -1 - s.buildInt32(v, S);
    }
    createInt64Neg(v, S, w, D) {
      const P = s.buildInt32(v, S),
        J = s.buildInt32(w, D);
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
    createUtf8String(v, S) {
      return v.join('');
    }
    createUtf8StringFromHeap(v, S) {
      return v === S ? '' : this._buffer.toString('utf8', v, S);
    }
    createSimpleUnassigned(v) {
      return new d(v);
    }
    pushInt(v) {
      this._push(this.createInt(v));
    }
    pushInt32(v, S) {
      this._push(this.createInt32(v, S));
    }
    pushInt64(v, S, w, D) {
      this._push(this.createInt64(v, S, w, D));
    }
    pushFloat(v) {
      this._push(this.createFloat(v));
    }
    pushFloatSingle(v, S, w, D) {
      this._push(this.createFloatSingle(v, S, w, D));
    }
    pushFloatDouble(v, S, w, D, P, J, W, H) {
      this._push(this.createFloatDouble(v, S, w, D, P, J, W, H));
    }
    pushInt32Neg(v, S) {
      this._push(this.createInt32Neg(v, S));
    }
    pushInt64Neg(v, S, w, D) {
      this._push(this.createInt64Neg(v, S, w, D));
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
    pushArrayStartFixed(v) {
      this._createArrayStartFixed(v);
    }
    pushArrayStartFixed32(v, S) {
      const w = s.buildInt32(v, S);
      this._createArrayStartFixed(w);
    }
    pushArrayStartFixed64(v, S, w, D) {
      const P = s.buildInt64(v, S, w, D);
      this._createArrayStartFixed(P);
    }
    pushObjectStart() {
      this._createObjectStartFixed(-1);
    }
    pushObjectStartFixed(v) {
      this._createObjectStartFixed(v);
    }
    pushObjectStartFixed32(v, S) {
      const w = s.buildInt32(v, S);
      this._createObjectStartFixed(w);
    }
    pushObjectStartFixed64(v, S, w, D) {
      const P = s.buildInt64(v, S, w, D);
      this._createObjectStartFixed(P);
    }
    pushByteStringStart() {
      this._parents[this._depth] = { type: f.PARENT.BYTE_STRING, length: -1, ref: [], values: 0, tmpKey: null };
    }
    pushByteString(v, S) {
      this._push(this.createByteStringFromHeap(v, S));
    }
    pushUtf8StringStart() {
      this._parents[this._depth] = { type: f.PARENT.UTF8_STRING, length: -1, ref: [], values: 0, tmpKey: null };
    }
    pushUtf8String(v, S) {
      this._push(this.createUtf8StringFromHeap(v, S));
    }
    pushSimpleUnassigned(v) {
      this._push(this.createSimpleUnassigned(v));
    }
    pushTagStart(v) {
      this._parents[this._depth] = { type: f.PARENT.TAG, length: 1, ref: [v] };
    }
    pushTagStart4(v, S) {
      this.pushTagStart(s.buildInt32(v, S));
    }
    pushTagStart8(v, S, w, D) {
      this.pushTagStart(s.buildInt64(v, S, w, D));
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
      this._createParent({}, f.PARENT.OBJECT, v);
    }
    _createArrayStartFixed(v) {
      if (v === 0) {
        this._push(this.createArray([]));
        return;
      }
      this._createParent(new Array(v), f.PARENT.ARRAY, v);
    }
    _decode(v) {
      if (v.byteLength === 0) throw new Error('Input too short');
      this._reset(), this._heap8.set(v);
      const S = this.parser.parse(v.byteLength);
      if (this._depth > 1) {
        for (; this._currentParent.length === 0; ) this._closeParent();
        if (this._depth > 1) throw new Error('Undeterminated nesting');
      }
      if (S > 0) throw new Error('Failed to parse');
      if (this._res.length === 0) throw new Error('No valid result');
    }
    decodeFirst(v) {
      return this._decode(v), this._res[0];
    }
    decodeAll(v) {
      return this._decode(v), this._res;
    }
    static decode(v, S) {
      return typeof v == 'string' && (v = r.from(v, S || 'hex')), new g({ size: v.length }).decodeFirst(v);
    }
    static decodeAll(v, S) {
      return typeof v == 'string' && (v = r.from(v, S || 'hex')), new g({ size: v.length }).decodeAll(v);
    }
  }
  return (g.decodeFirst = g.decode), (zf = g), zf;
}
var Hf, Dp;
function WS() {
  if (Dp) return Hf;
  Dp = 1;
  const { Buffer: r } = lu(),
    i = Kg(),
    a = gd();
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
    createInt64(d, h, p, g) {
      return super.createInt64(d, h, p, g).toString();
    }
    createInt32Neg(d, h) {
      return super.createInt32Neg(d, h).toString();
    }
    createInt64Neg(d, h, p, g) {
      return super.createInt64Neg(d, h, p, g).toString();
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
    createFloatSingle(d, h, p, g) {
      return `${super.createFloatSingle(d, h, p, g)}_2`;
    }
    createFloatDouble(d, h, p, g, N, v, S, w) {
      return `${super.createFloatDouble(d, h, p, g, N, v, S, w)}_3`;
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
        g = Array.from(p.keys()).reduce(s(p), '');
      return h === -1 ? `{_ ${g}}` : `{${g}}`;
    }
    createObject(d, h) {
      const p = super.createObject(d),
        g = Object.keys(p).reduce(s(p), '');
      return h === -1 ? `{_ ${g}}` : `{${g}}`;
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
  Hf = u;
  function s(f) {
    return (d, h) => (d ? `${d}, ${h}: ${f[h]}` : `${h}: ${f[h]}`);
  }
  return Hf;
}
var Vf, Up;
function ex() {
  if (Up) return Vf;
  Up = 1;
  const { Buffer: r } = lu(),
    { URL: i } = Xg(),
    a = nc().BigNumber,
    u = gd(),
    s = ic(),
    f = s.MT,
    d = s.NUMBYTES,
    h = s.SHIFT32,
    p = s.SYMS,
    g = s.TAG,
    N = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.TWO,
    v = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.FOUR,
    S = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.EIGHT,
    w = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.TRUE,
    D = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.FALSE,
    P = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.UNDEFINED,
    J = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.NULL,
    W = new a('0x20000000000000'),
    H = r.from('f97e00', 'hex'),
    Se = r.from('f9fc00', 'hex'),
    Le = r.from('f97c00', 'hex');
  function we(Ae) {
    return {}.toString.call(Ae).slice(8, -1);
  }
  class he {
    constructor(b) {
      (b = b || {}),
        (this.streaming = typeof b.stream == 'function'),
        (this.onData = b.stream),
        (this.semanticTypes = [
          [i, this._pushUrl],
          [a, this._pushBigNumber]
        ]);
      const A = b.genTypes || [],
        T = A.length;
      for (let G = 0; G < T; G++) this.addSemanticType(A[G][0], A[G][1]);
      this._reset();
    }
    addSemanticType(b, A) {
      const T = this.semanticTypes.length;
      for (let G = 0; G < T; G++)
        if (this.semanticTypes[G][0] === b) {
          const X = this.semanticTypes[G][1];
          return (this.semanticTypes[G][1] = A), X;
        }
      return this.semanticTypes.push([b, A]), null;
    }
    push(b) {
      return (
        b &&
          ((this.result[this.offset] = b),
          (this.resultMethod[this.offset] = 0),
          (this.resultLength[this.offset] = b.length),
          this.offset++,
          this.streaming && this.onData(this.finalize())),
        !0
      );
    }
    pushWrite(b, A, T) {
      return (
        (this.result[this.offset] = b),
        (this.resultMethod[this.offset] = A),
        (this.resultLength[this.offset] = T),
        this.offset++,
        this.streaming && this.onData(this.finalize()),
        !0
      );
    }
    _pushUInt8(b) {
      return this.pushWrite(b, 1, 1);
    }
    _pushUInt16BE(b) {
      return this.pushWrite(b, 2, 2);
    }
    _pushUInt32BE(b) {
      return this.pushWrite(b, 3, 4);
    }
    _pushDoubleBE(b) {
      return this.pushWrite(b, 4, 8);
    }
    _pushNaN() {
      return this.push(H);
    }
    _pushInfinity(b) {
      const A = b < 0 ? Se : Le;
      return this.push(A);
    }
    _pushFloat(b) {
      const A = r.allocUnsafe(2);
      if (u.writeHalf(A, b) && u.parseHalf(A) === b) return this._pushUInt8(N) && this.push(A);
      const T = r.allocUnsafe(4);
      return (
        T.writeFloatBE(b, 0),
        T.readFloatBE(0) === b ? this._pushUInt8(v) && this.push(T) : this._pushUInt8(S) && this._pushDoubleBE(b)
      );
    }
    _pushInt(b, A, T) {
      const G = A << 5;
      return b < 24
        ? this._pushUInt8(G | b)
        : b <= 255
          ? this._pushUInt8(G | d.ONE) && this._pushUInt8(b)
          : b <= 65535
            ? this._pushUInt8(G | d.TWO) && this._pushUInt16BE(b)
            : b <= 4294967295
              ? this._pushUInt8(G | d.FOUR) && this._pushUInt32BE(b)
              : b <= Number.MAX_SAFE_INTEGER
                ? this._pushUInt8(G | d.EIGHT) && this._pushUInt32BE(Math.floor(b / h)) && this._pushUInt32BE(b % h)
                : A === f.NEG_INT
                  ? this._pushFloat(T)
                  : this._pushFloat(b);
    }
    _pushIntNum(b) {
      return b < 0 ? this._pushInt(-b - 1, f.NEG_INT, b) : this._pushInt(b, f.POS_INT);
    }
    _pushNumber(b) {
      switch (!1) {
        case b === b:
          return this._pushNaN(b);
        case isFinite(b):
          return this._pushInfinity(b);
        case b % 1 !== 0:
          return this._pushIntNum(b);
        default:
          return this._pushFloat(b);
      }
    }
    _pushString(b) {
      const A = r.byteLength(b, 'utf8');
      return this._pushInt(A, f.UTF8_STRING) && this.pushWrite(b, 5, A);
    }
    _pushBoolean(b) {
      return this._pushUInt8(b ? w : D);
    }
    _pushUndefined(b) {
      return this._pushUInt8(P);
    }
    _pushArray(b, A) {
      const T = A.length;
      if (!b._pushInt(T, f.ARRAY)) return !1;
      for (let G = 0; G < T; G++) if (!b.pushAny(A[G])) return !1;
      return !0;
    }
    _pushTag(b) {
      return this._pushInt(b, f.TAG);
    }
    _pushDate(b, A) {
      return b._pushTag(g.DATE_EPOCH) && b.pushAny(Math.round(A / 1e3));
    }
    _pushBuffer(b, A) {
      return b._pushInt(A.length, f.BYTE_STRING) && b.push(A);
    }
    _pushNoFilter(b, A) {
      return b._pushBuffer(b, A.slice());
    }
    _pushRegexp(b, A) {
      return b._pushTag(g.REGEXP) && b.pushAny(A.source);
    }
    _pushSet(b, A) {
      if (!b._pushInt(A.size, f.ARRAY)) return !1;
      for (const T of A) if (!b.pushAny(T)) return !1;
      return !0;
    }
    _pushUrl(b, A) {
      return b._pushTag(g.URI) && b.pushAny(A.format());
    }
    _pushBigint(b) {
      let A = g.POS_BIGINT;
      b.isNegative() && ((b = b.negated().minus(1)), (A = g.NEG_BIGINT));
      let T = b.toString(16);
      T.length % 2 && (T = '0' + T);
      const G = r.from(T, 'hex');
      return this._pushTag(A) && this._pushBuffer(this, G);
    }
    _pushBigNumber(b, A) {
      if (A.isNaN()) return b._pushNaN();
      if (!A.isFinite()) return b._pushInfinity(A.isNegative() ? -1 / 0 : 1 / 0);
      if (A.isInteger()) return b._pushBigint(A);
      if (!(b._pushTag(g.DECIMAL_FRAC) && b._pushInt(2, f.ARRAY))) return !1;
      const T = A.decimalPlaces(),
        G = A.multipliedBy(new a(10).pow(T));
      return b._pushIntNum(-T) ? (G.abs().isLessThan(W) ? b._pushIntNum(G.toNumber()) : b._pushBigint(G)) : !1;
    }
    _pushMap(b, A) {
      return b._pushInt(A.size, f.MAP) ? this._pushRawMap(A.size, Array.from(A)) : !1;
    }
    _pushObject(b) {
      if (!b) return this._pushUInt8(J);
      const A = this.semanticTypes.length;
      for (let X = 0; X < A; X++)
        if (b instanceof this.semanticTypes[X][0]) return this.semanticTypes[X][1].call(b, this, b);
      const T = b.encodeCBOR;
      if (typeof T == 'function') return T.call(b, this);
      const G = Object.keys(b),
        Y = G.length;
      return this._pushInt(Y, f.MAP)
        ? this._pushRawMap(
            Y,
            G.map((X) => [X, b[X]])
          )
        : !1;
    }
    _pushRawMap(b, A) {
      A = A.map(function (T) {
        return (T[0] = he.encode(T[0])), T;
      }).sort(u.keySorter);
      for (let T = 0; T < b; T++) if (!this.push(A[T][0]) || !this.pushAny(A[T][1])) return !1;
      return !0;
    }
    write(b) {
      return this.pushAny(b);
    }
    pushAny(b) {
      switch (we(b)) {
        case 'Number':
          return this._pushNumber(b);
        case 'String':
          return this._pushString(b);
        case 'Boolean':
          return this._pushBoolean(b);
        case 'Object':
          return this._pushObject(b);
        case 'Array':
          return this._pushArray(this, b);
        case 'Uint8Array':
          return this._pushBuffer(this, r.isBuffer(b) ? b : r.from(b));
        case 'Null':
          return this._pushUInt8(J);
        case 'Undefined':
          return this._pushUndefined(b);
        case 'Map':
          return this._pushMap(this, b);
        case 'Set':
          return this._pushSet(this, b);
        case 'URL':
          return this._pushUrl(this, b);
        case 'BigNumber':
          return this._pushBigNumber(this, b);
        case 'Date':
          return this._pushDate(this, b);
        case 'RegExp':
          return this._pushRegexp(this, b);
        case 'Symbol':
          switch (b) {
            case p.NULL:
              return this._pushObject(null);
            case p.UNDEFINED:
              return this._pushUndefined(void 0);
            default:
              throw new Error('Unknown symbol: ' + b.toString());
          }
        default:
          throw new Error('Unknown type: ' + typeof b + ', ' + (b ? b.toString() : ''));
      }
    }
    finalize() {
      if (this.offset === 0) return null;
      const b = this.result,
        A = this.resultLength,
        T = this.resultMethod,
        G = this.offset;
      let Y = 0,
        X = 0;
      for (; X < G; X++) Y += A[X];
      const Z = r.allocUnsafe(Y);
      let I = 0,
        R = 0;
      for (X = 0; X < G; X++) {
        switch (((R = A[X]), T[X])) {
          case 0:
            b[X].copy(Z, I);
            break;
          case 1:
            Z.writeUInt8(b[X], I, !0);
            break;
          case 2:
            Z.writeUInt16BE(b[X], I, !0);
            break;
          case 3:
            Z.writeUInt32BE(b[X], I, !0);
            break;
          case 4:
            Z.writeDoubleBE(b[X], I, !0);
            break;
          case 5:
            Z.write(b[X], I, R, 'utf8');
            break;
          default:
            throw new Error('unkown method');
        }
        I += R;
      }
      const $ = Z;
      return this._reset(), $;
    }
    _reset() {
      (this.result = []), (this.resultMethod = []), (this.resultLength = []), (this.offset = 0);
    }
    static encode(b) {
      const A = new he();
      if (!A.pushAny(b)) throw new Error('Failed to encode input');
      return A.finalize();
    }
  }
  return (Vf = he), Vf;
}
var jp;
function tx() {
  return (
    jp ||
      ((jp = 1),
      (function (r) {
        (r.Diagnose = WS()),
          (r.Decoder = Kg()),
          (r.Encoder = ex()),
          (r.Simple = Gg()),
          (r.Tagged = $g()),
          (r.decodeAll = r.Decoder.decodeAll),
          (r.decodeFirst = r.Decoder.decodeFirst),
          (r.diagnose = r.Diagnose.diagnose),
          (r.encode = r.Encoder.encode),
          (r.decode = r.Decoder.decode),
          (r.leveldb = { decode: r.Decoder.decodeAll, encode: r.Encoder.encode, buffer: !0, name: 'cbor' });
      })(Bf)),
    Bf
  );
}
var rx = tx();
const Zg = ru(rx);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ const yd = 2n ** 256n,
  Ji = yd - 0x1000003d1n,
  yr = yd - 0x14551231950b75fc4402da1732fc9bebfn,
  nx = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,
  ix = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,
  Qg = { a: 0n, b: 7n },
  Ur = 32,
  kp = (r) => Ye(Ye(r * r) * r + Qg.b),
  Bt = (r = '') => {
    throw new Error(r);
  },
  ac = (r) => typeof r == 'bigint',
  Pg = (r) => typeof r == 'string',
  Ff = (r) => ac(r) && 0n < r && r < Ji,
  tu = (r) => ac(r) && 0n < r && r < yr,
  ax = (r) => r instanceof Uint8Array || (ArrayBuffer.isView(r) && r.constructor.name === 'Uint8Array'),
  $s = (r, i) => (!ax(r) || (typeof i == 'number' && i > 0 && r.length !== i) ? Bt('Uint8Array expected') : r),
  bn = (r) => new Uint8Array(r),
  ra = (r, i) => $s(Pg(r) ? uu(r) : bn($s(r)), i),
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
    return i.x === 0n && i.y === 0n ? Xl : new Dr(i.x, i.y, 1n);
  }
  static fromHex(i) {
    i = ra(i);
    let a;
    const u = i[0],
      s = i.subarray(1),
      f = Ys(s, 0, Ur),
      d = i.length;
    if (d === 33 && [2, 3].includes(u)) {
      Ff(f) || Bt('Point hex invalid: x not FE');
      let h = lx(kp(f));
      const p = (h & 1n) === 1n;
      ((u & 1) === 1) !== p && (h = Ye(-h)), (a = new Dr(f, h, 1n));
    }
    return (
      d === 65 && u === 4 && (a = new Dr(f, Ys(s, Ur, 2 * Ur), 1n)), a ? a.ok() : Bt('Point invalid: not on curve')
    );
  }
  static fromPrivateKey(i) {
    return Wi.mul(Wg(i));
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
      g = Ye(f * s),
      N = Ye(u * h),
      v = Ye(d * s);
    return p === g && N === v;
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
      { a: p, b: g } = Qg;
    let N = 0n,
      v = 0n,
      S = 0n;
    const w = Ye(g * 3n);
    let D = Ye(a * f),
      P = Ye(u * d),
      J = Ye(s * h),
      W = Ye(a + u),
      H = Ye(f + d);
    (W = Ye(W * H)), (H = Ye(D + P)), (W = Ye(W - H)), (H = Ye(a + s));
    let Se = Ye(f + h);
    return (
      (H = Ye(H * Se)),
      (Se = Ye(D + J)),
      (H = Ye(H - Se)),
      (Se = Ye(u + s)),
      (N = Ye(d + h)),
      (Se = Ye(Se * N)),
      (N = Ye(P + J)),
      (Se = Ye(Se - N)),
      (S = Ye(p * H)),
      (N = Ye(w * J)),
      (S = Ye(N + S)),
      (N = Ye(P - S)),
      (S = Ye(P + S)),
      (v = Ye(N * S)),
      (P = Ye(D + D)),
      (P = Ye(P + D)),
      (J = Ye(p * J)),
      (H = Ye(w * H)),
      (P = Ye(P + J)),
      (J = Ye(D - J)),
      (J = Ye(p * J)),
      (H = Ye(H + J)),
      (D = Ye(P * H)),
      (v = Ye(v + D)),
      (D = Ye(Se * H)),
      (N = Ye(W * N)),
      (N = Ye(N - D)),
      (D = Ye(W * P)),
      (S = Ye(Se * S)),
      (S = Ye(S + D)),
      new Dr(N, v, S)
    );
  }
  mul(i, a = !0) {
    if (!a && i === 0n) return Xl;
    if ((tu(i) || Bt('scalar invalid'), this.equals(Wi))) return dx(i).p;
    let u = Xl,
      s = Wi;
    for (let f = this; i > 0n; f = f.double(), i >>= 1n) i & 1n ? (u = u.add(f)) : a && (s = s.add(f));
    return u;
  }
  mulAddQUns(i, a, u) {
    return this.mul(a, !1).add(i.mul(u, !1)).ok();
  }
  toAffine() {
    const { px: i, py: a, pz: u } = this;
    if (this.equals(Xl)) return { x: 0n, y: 0n };
    if (u === 1n) return { x: i, y: a };
    const s = uc(u, Ji);
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
    return (i ? ((u & 1n) === 0n ? '02' : '03') : '04') + Kl(a) + (i ? '' : Kl(u));
  }
  toRawBytes(i = !0) {
    return uu(this.toHex(i));
  }
}
Dr.BASE = new Dr(nx, ix, 1n);
Dr.ZERO = new Dr(0n, 1n, 0n);
const { BASE: Wi, ZERO: Xl } = Dr,
  Jg = (r, i) => r.toString(16).padStart(i, '0'),
  vd = (r) =>
    Array.from($s(r))
      .map((i) => Jg(i, 2))
      .join(''),
  Hn = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 },
  qp = (r) => {
    if (r >= Hn._0 && r <= Hn._9) return r - Hn._0;
    if (r >= Hn.A && r <= Hn.F) return r - (Hn.A - 10);
    if (r >= Hn.a && r <= Hn.f) return r - (Hn.a - 10);
  },
  uu = (r) => {
    const i = 'hex invalid';
    if (!Pg(r)) return Bt(i);
    const a = r.length,
      u = a / 2;
    if (a % 2) return Bt(i);
    const s = bn(u);
    for (let f = 0, d = 0; f < u; f++, d += 2) {
      const h = qp(r.charCodeAt(d)),
        p = qp(r.charCodeAt(d + 1));
      if (h === void 0 || p === void 0) return Bt(i);
      s[f] = h * 16 + p;
    }
    return s;
  },
  su = (r) => BigInt('0x' + (vd(r) || '0')),
  Ys = (r, i, a) => su(r.slice(i, a)),
  lc = (r) => (ac(r) && r >= 0n && r < yd ? uu(Jg(r, 2 * Ur)) : Bt('bigint expected')),
  Kl = (r) => vd(lc(r)),
  rd = (...r) => {
    const i = bn(r.reduce((u, s) => u + $s(s).length, 0));
    let a = 0;
    return (
      r.forEach((u) => {
        i.set(u, a), (a += u.length);
      }),
      i
    );
  },
  uc = (r, i) => {
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
  Wg = (r) => (ac(r) || (r = su(ra(r, Ur))), tu(r) ? r : Bt('private key invalid 3')),
  nd = (r) => r > yr >> 1n;
class Zl {
  constructor(i, a, u) {
    (this.r = i), (this.s = a), (this.recovery = u), this.assertValidity();
  }
  static fromCompact(i) {
    return (i = ra(i, 64)), new Zl(Ys(i, 0, Ur), Ys(i, Ur, 2 * Ur));
  }
  assertValidity() {
    return tu(this.r) && tu(this.s) ? this : Bt();
  }
  addRecoveryBit(i) {
    return new Zl(this.r, this.s, i);
  }
  hasHighS() {
    return nd(this.s);
  }
  normalizeS() {
    return nd(this.s) ? new Zl(this.r, Ye(-this.s, yr), this.recovery) : this;
  }
  recoverPublicKey(i) {
    const { r: a, s: u, recovery: s } = this;
    [0, 1, 2, 3].includes(s) || Bt('recovery id invalid');
    const f = ty(ra(i, Ur)),
      d = s === 2 || s === 3 ? a + yr : a;
    d >= Ji && Bt('q.x invalid');
    const h = (s & 1) === 0 ? '02' : '03',
      p = Dr.fromHex(h + Kl(d)),
      g = uc(d, yr),
      N = Ye(-f * g, yr),
      v = Ye(u * g, yr);
    return Wi.mulAddQUns(p, N, v);
  }
  toCompactRawBytes() {
    return uu(this.toCompactHex());
  }
  toCompactHex() {
    return Kl(this.r) + Kl(this.s);
  }
}
const ey = (r) => {
    const i = r.length * 8 - 256;
    i > 1024 && Bt('msg invalid');
    const a = su(r);
    return i > 0 ? a >> BigInt(i) : a;
  },
  ty = (r) => Ye(ey(r), yr),
  Lp = (r) => lc(r),
  zp = () => (typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0);
let Ql;
const ry = { lowS: !0 },
  ux = (r, i, a = ry) => {
    ['der', 'recovered', 'canonical'].some((v) => v in a) && Bt('option not supported');
    let { lowS: u } = a;
    u == null && (u = !0);
    const s = ty(ra(r)),
      f = Lp(s),
      d = Wg(i),
      h = [Lp(d), f];
    let p = a.extraEntropy;
    p && h.push(p === !0 ? Xs.randomBytes(Ur) : ra(p));
    const g = s,
      N = (v) => {
        const S = ey(v);
        if (!tu(S)) return;
        const w = uc(S, yr),
          D = Wi.mul(S).aff(),
          P = Ye(D.x, yr);
        if (P === 0n) return;
        const J = Ye(w * Ye(g + Ye(d * P, yr), yr), yr);
        if (J === 0n) return;
        let W = J,
          H = (D.x === P ? 0 : 2) | Number(D.y & 1n);
        return u && nd(J) && ((W = Ye(-J, yr)), (H ^= 1)), new Zl(P, W, H);
      };
    return { seed: rd(...h), k2sig: N };
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
    const d = (...g) => {
        const N = Ql;
        return N || Bt('etc.hmacSha256Sync not set'), N(a, i, ...g);
      },
      h = (g = bn()) => {
        (a = d(bn([0]), g)), (i = d()), g.length !== 0 && ((a = d(bn([1]), g)), (i = d()));
      },
      p = () => (u++ >= 1e3 && Bt(f), (i = d()), i);
    return (g, N) => {
      s(), h(g);
      let v;
      for (; !(v = N(p())); ) h();
      return s(), v;
    };
  }
}
const cx = (r, i, a = ry) => {
    const { seed: u, k2sig: s } = ux(r, i, a);
    return sx()(u, s);
  },
  ox = (r) => {
    (r = ra(r)), (r.length < Ur + 8 || r.length > 1024) && Bt('expected 40-1024b');
    const i = Ye(su(r), yr - 1n);
    return lc(i + 1n);
  },
  Xs = {
    hexToBytes: uu,
    bytesToHex: vd,
    concatBytes: rd,
    bytesToNumberBE: su,
    numberToBytesBE: lc,
    mod: Ye,
    invert: uc,
    hmacSha256Async: async (r, ...i) => {
      const a = zp(),
        u = a && a.subtle;
      if (!u) return Bt('etc.hmacSha256Async or crypto.subtle must be defined');
      const s = await u.importKey('raw', r, { name: 'HMAC', hash: { name: 'SHA-256' } }, !1, ['sign']);
      return bn(await u.sign('HMAC', s, rd(...i)));
    },
    hmacSha256Sync: Ql,
    hashToPrivateKey: ox,
    randomBytes: (r = 32) => {
      const i = zp();
      return (!i || !i.getRandomValues) && Bt('crypto.getRandomValues must be defined'), i.getRandomValues(bn(r));
    }
  };
Object.defineProperties(Xs, {
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return Ql;
    },
    set(r) {
      Ql || (Ql = r);
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
    a = (N, v) => {
      let S = v.negate();
      return N ? S : v;
    };
  let u = Xl,
    s = Wi;
  const f = 1 + 256 / Zi,
    d = 2 ** (Zi - 1),
    h = BigInt(2 ** Zi - 1),
    p = 2 ** Zi,
    g = BigInt(Zi);
  for (let N = 0; N < f; N++) {
    const v = N * d;
    let S = Number(r & h);
    (r >>= g), S > d && ((S -= p), (r += 1n));
    const w = v,
      D = v + Math.abs(S) - 1,
      P = N % 2 !== 0,
      J = S < 0;
    S === 0 ? (s = s.add(a(P, i[w]))) : (u = u.add(a(J, i[D])));
  }
  return { p: u, f: s };
};
var ea = lu();
Xs.hmacSha256Sync = (r, ...i) => Hg(Vg, r, Xs.concatBytes(...i));
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
    return Zg.encode(i);
  }
  hash() {
    return Vg(this.toTxDataBytes());
  }
  sign(i) {
    const a = cx(this.hash(), ea.Buffer.from(i, 'hex'));
    return (this.signature = ea.Buffer.concat([a.toCompactRawBytes(), ea.Buffer.from([a.recovery])])), this;
  }
  isSigned() {
    return !!this.signature;
  }
}
function Vp(r) {
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
  gx = (r) => {
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
  yx = (r) => {
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
  ny = ({ allowReserved: r, explode: i, name: a, style: u, value: s }) => {
    if (!i) {
      let h = (r ? s : s.map((p) => encodeURIComponent(p))).join(yx(u));
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
    let f = gx(u),
      d = s
        .map((h) =>
          u === 'label' || u === 'simple'
            ? r
              ? h
              : encodeURIComponent(h)
            : sc({ allowReserved: r, name: a, value: h })
        )
        .join(f);
    return u === 'label' || u === 'matrix' ? f + d : d;
  },
  sc = ({ allowReserved: r, name: i, value: a }) => {
    if (a == null) return '';
    if (typeof a == 'object')
      throw new Error(
        'Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.'
      );
    return `${i}=${r ? a : encodeURIComponent(a)}`;
  },
  iy = ({ allowReserved: r, explode: i, name: a, style: u, value: s }) => {
    if (s instanceof Date) return `${a}=${s.toISOString()}`;
    if (u !== 'deepObject' && !i) {
      let h = [];
      Object.entries(s).forEach(([g, N]) => {
        h = [...h, g, r ? N : encodeURIComponent(N)];
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
        .map(([h, p]) => sc({ allowReserved: r, name: u === 'deepObject' ? `${a}[${h}]` : h, value: p }))
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
          a = a.replace(s, ny({ explode: f, name: d, style: h, value: p }));
          continue;
        }
        if (typeof p == 'object') {
          a = a.replace(s, iy({ explode: f, name: d, style: h, value: p }));
          continue;
        }
        if (h === 'matrix') {
          a = a.replace(s, `;${sc({ name: d, value: p })}`);
          continue;
        }
        let g = encodeURIComponent(h === 'label' ? `.${p}` : p);
        a = a.replace(s, g);
      }
    return a;
  },
  ay =
    ({ allowReserved: r, array: i, object: a } = {}) =>
    (u) => {
      let s = [];
      if (u && typeof u == 'object')
        for (let f in u) {
          let d = u[f];
          if (d != null) {
            if (Array.isArray(d)) {
              s = [...s, ny({ allowReserved: r, explode: !0, name: f, style: 'form', value: d, ...i })];
              continue;
            }
            if (typeof d == 'object') {
              s = [...s, iy({ allowReserved: r, explode: !0, name: f, style: 'deepObject', value: d, ...a })];
              continue;
            }
            s = [...s, sc({ allowReserved: r, name: f, value: d })];
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
  Fp = (r) =>
    Ex({
      baseUrl: r.baseUrl,
      path: r.path,
      query: r.query,
      querySerializer: typeof r.querySerializer == 'function' ? r.querySerializer : ay(r.querySerializer),
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
      (a.headers = ly(r.headers, i.headers)),
      a
    );
  },
  ly = (...r) => {
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
  Gf = class {
    constructor() {
      Jm(this, '_fns');
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
  Ax = () => ({ error: new Gf(), request: new Gf(), response: new Gf() }),
  Nx = ay({ allowReserved: !1, array: { explode: !0, style: 'form' }, object: { explode: !0, style: 'deepObject' } }),
  _x = { 'Content-Type': 'application/json' },
  bd = (r = {}) => ({ ...px, headers: _x, parseAs: 'auto', querySerializer: Nx, ...r }),
  uy = (r = {}) => {
    let i = Gp(bd(), r),
      a = () => ({ ...i }),
      u = (d) => ((i = Gp(i, d)), a()),
      s = Ax(),
      f = async (d) => {
        let h = { ...i, ...d, fetch: d.fetch ?? i.fetch ?? globalThis.fetch, headers: ly(i.headers, d.headers) };
        h.security && (await wx({ ...h, security: h.security })),
          h.body && h.bodySerializer && (h.body = h.bodySerializer(h.body)),
          h.body || h.headers.delete('Content-Type');
        let p = Fp(h),
          g = { redirect: 'follow', ...h },
          N = new Request(p, g);
        for (let J of s.request._fns) N = await J(N, h);
        let v = h.fetch,
          S = await v(N);
        for (let J of s.response._fns) S = await J(S, N, h);
        let w = { request: N, response: S };
        if (S.ok) {
          if (S.status === 204 || S.headers.get('Content-Length') === '0') return { data: {}, ...w };
          let J = (h.parseAs === 'auto' ? xx(S.headers.get('Content-Type')) : h.parseAs) ?? 'json';
          if (J === 'stream') return { data: S.body, ...w };
          let W = await S[J]();
          return (
            J === 'json' &&
              (h.responseValidator && (await h.responseValidator(W)),
              h.responseTransformer && (W = await h.responseTransformer(W))),
            { data: W, ...w }
          );
        }
        let D = await S.text();
        try {
          D = JSON.parse(D);
        } catch {}
        let P = D;
        for (let J of s.error._fns) P = await J(D, S, N, h);
        if (((P = P || {}), h.throwOnError)) throw P;
        return { error: P, ...w };
      };
    return {
      buildUrl: Fp,
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
const Yt = uy(bd({ baseUrl: 'https://testnetopenapi.hibit.app' })),
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
  qx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/market', ...r }),
  Lx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/order/trades', ...r }),
  zx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/orders', ...r }),
  Hx = (r) => ((r == null ? void 0 : r.client) ?? Yt).get({ url: '/v1/order', ...r }),
  Vx = (r) =>
    ((r == null ? void 0 : r.client) ?? Yt).post({
      url: '/v1/tx/submit-spot-order',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    }),
  Fx = (r) =>
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
              : typeof Pf == 'object'
                ? Pf
                : typeof globalThis == 'object'
                  ? globalThis
                  : typeof this == 'object'
                    ? this
                    : p(),
          s = f(i);
        typeof u.Reflect < 'u' && (s = f(u.Reflect, s)), a(s, u), typeof u.Reflect > 'u' && (u.Reflect = i);
        function f(g, N) {
          return function (v, S) {
            Object.defineProperty(g, v, { configurable: !0, writable: !0, value: S }), N && N(v, S);
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
          g = { __proto__: [] } instanceof Array,
          N = !p && !g,
          v = {
            create: p
              ? function () {
                  return ie(Object.create(null));
                }
              : g
                ? function () {
                    return ie({ __proto__: null });
                  }
                : function () {
                    return ie({});
                  },
            has: N
              ? function (k, q) {
                  return s.call(k, q);
                }
              : function (k, q) {
                  return q in k;
                },
            get: N
              ? function (k, q) {
                  return s.call(k, q) ? k[q] : void 0;
                }
              : function (k, q) {
                  return k[q];
                }
          },
          S = Object.getPrototypeOf(Function),
          w = typeof Map == 'function' && typeof Map.prototype.entries == 'function' ? Map : m(),
          D = typeof Set == 'function' && typeof Set.prototype.entries == 'function' ? Set : y(),
          P = typeof WeakMap == 'function' ? WeakMap : F(),
          J = f ? Symbol.for('@reflect-metadata:registry') : void 0,
          W = De(),
          H = ze(W);
        function Se(k, q, de, Te) {
          if (ye(de)) {
            if (!Q(k)) throw new TypeError();
            if (!re(q)) throw new TypeError();
            return X(k, q);
          } else {
            if (!Q(k)) throw new TypeError();
            if (!Me(q)) throw new TypeError();
            if (!Me(Te) && !ye(Te) && !O(Te)) throw new TypeError();
            return O(Te) && (Te = void 0), (de = U(de)), Z(k, q, de, Te);
          }
        }
        a('decorate', Se);
        function Le(k, q) {
          function de(Te, Ue) {
            if (!Me(Te)) throw new TypeError();
            if (!ye(Ue) && !ue(Ue)) throw new TypeError();
            oe(k, q, Te, Ue);
          }
          return de;
        }
        a('metadata', Le);
        function we(k, q, de, Te) {
          if (!Me(de)) throw new TypeError();
          return ye(Te) || (Te = U(Te)), oe(k, q, de, Te);
        }
        a('defineMetadata', we);
        function he(k, q, de) {
          if (!Me(q)) throw new TypeError();
          return ye(de) || (de = U(de)), I(k, q, de);
        }
        a('hasMetadata', he);
        function Ae(k, q, de) {
          if (!Me(q)) throw new TypeError();
          return ye(de) || (de = U(de)), R(k, q, de);
        }
        a('hasOwnMetadata', Ae);
        function b(k, q, de) {
          if (!Me(q)) throw new TypeError();
          return ye(de) || (de = U(de)), $(k, q, de);
        }
        a('getMetadata', b);
        function A(k, q, de) {
          if (!Me(q)) throw new TypeError();
          return ye(de) || (de = U(de)), z(k, q, de);
        }
        a('getOwnMetadata', A);
        function T(k, q) {
          if (!Me(k)) throw new TypeError();
          return ye(q) || (q = U(q)), j(k, q);
        }
        a('getMetadataKeys', T);
        function G(k, q) {
          if (!Me(k)) throw new TypeError();
          return ye(q) || (q = U(q)), ne(k, q);
        }
        a('getOwnMetadataKeys', G);
        function Y(k, q, de) {
          if (!Me(q)) throw new TypeError();
          if ((ye(de) || (de = U(de)), !Me(q))) throw new TypeError();
          ye(de) || (de = U(de));
          var Te = E(q, de, !1);
          return ye(Te) ? !1 : Te.OrdinaryDeleteMetadata(k, q, de);
        }
        a('deleteMetadata', Y);
        function X(k, q) {
          for (var de = k.length - 1; de >= 0; --de) {
            var Te = k[de],
              Ue = Te(q);
            if (!ye(Ue) && !O(Ue)) {
              if (!re(Ue)) throw new TypeError();
              q = Ue;
            }
          }
          return q;
        }
        function Z(k, q, de, Te) {
          for (var Ue = k.length - 1; Ue >= 0; --Ue) {
            var Ie = k[Ue],
              et = Ie(q, de, Te);
            if (!ye(et) && !O(et)) {
              if (!Me(et)) throw new TypeError();
              Te = et;
            }
          }
          return Te;
        }
        function I(k, q, de) {
          var Te = R(k, q, de);
          if (Te) return !0;
          var Ue = ve(q);
          return O(Ue) ? !1 : I(k, Ue, de);
        }
        function R(k, q, de) {
          var Te = E(q, de, !1);
          return ye(Te) ? !1 : ke(Te.OrdinaryHasOwnMetadata(k, q, de));
        }
        function $(k, q, de) {
          var Te = R(k, q, de);
          if (Te) return z(k, q, de);
          var Ue = ve(q);
          if (!O(Ue)) return $(k, Ue, de);
        }
        function z(k, q, de) {
          var Te = E(q, de, !1);
          if (!ye(Te)) return Te.OrdinaryGetOwnMetadata(k, q, de);
        }
        function oe(k, q, de, Te) {
          var Ue = E(de, Te, !0);
          Ue.OrdinaryDefineOwnMetadata(k, q, de, Te);
        }
        function j(k, q) {
          var de = ne(k, q),
            Te = ve(k);
          if (Te === null) return de;
          var Ue = j(Te, q);
          if (Ue.length <= 0) return de;
          if (de.length <= 0) return Ue;
          for (var Ie = new D(), et = [], Xe = 0, Ve = de; Xe < Ve.length; Xe++) {
            var Fe = Ve[Xe],
              Ge = Ie.has(Fe);
            Ge || (Ie.add(Fe), et.push(Fe));
          }
          for (var $e = 0, it = Ue; $e < it.length; $e++) {
            var Fe = it[$e],
              Ge = Ie.has(Fe);
            Ge || (Ie.add(Fe), et.push(Fe));
          }
          return et;
        }
        function ne(k, q) {
          var de = E(k, q, !1);
          return de ? de.OrdinaryOwnMetadataKeys(k, q) : [];
        }
        function Ee(k) {
          if (k === null) return 1;
          switch (typeof k) {
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
              return k === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function ye(k) {
          return k === void 0;
        }
        function O(k) {
          return k === null;
        }
        function je(k) {
          return typeof k == 'symbol';
        }
        function Me(k) {
          return typeof k == 'object' ? k !== null : typeof k == 'function';
        }
        function Pe(k, q) {
          switch (Ee(k)) {
            case 0:
              return k;
            case 1:
              return k;
            case 2:
              return k;
            case 3:
              return k;
            case 4:
              return k;
            case 5:
              return k;
          }
          var de = 'string',
            Te = ae(k, d);
          if (Te !== void 0) {
            var Ue = Te.call(k, de);
            if (Me(Ue)) throw new TypeError();
            return Ue;
          }
          return Re(k);
        }
        function Re(k, q) {
          var de, Te, Ue;
          {
            var Ie = k.toString;
            if (se(Ie)) {
              var Te = Ie.call(k);
              if (!Me(Te)) return Te;
            }
            var de = k.valueOf;
            if (se(de)) {
              var Te = de.call(k);
              if (!Me(Te)) return Te;
            }
          }
          throw new TypeError();
        }
        function ke(k) {
          return !!k;
        }
        function B(k) {
          return '' + k;
        }
        function U(k) {
          var q = Pe(k);
          return je(q) ? q : B(q);
        }
        function Q(k) {
          return Array.isArray
            ? Array.isArray(k)
            : k instanceof Object
              ? k instanceof Array
              : Object.prototype.toString.call(k) === '[object Array]';
        }
        function se(k) {
          return typeof k == 'function';
        }
        function re(k) {
          return typeof k == 'function';
        }
        function ue(k) {
          switch (Ee(k)) {
            case 3:
              return !0;
            case 4:
              return !0;
            default:
              return !1;
          }
        }
        function me(k, q) {
          return k === q || (k !== k && q !== q);
        }
        function ae(k, q) {
          var de = k[q];
          if (de != null) {
            if (!se(de)) throw new TypeError();
            return de;
          }
        }
        function M(k) {
          var q = ae(k, h);
          if (!se(q)) throw new TypeError();
          var de = q.call(k);
          if (!Me(de)) throw new TypeError();
          return de;
        }
        function L(k) {
          return k.value;
        }
        function V(k) {
          var q = k.next();
          return q.done ? !1 : q;
        }
        function te(k) {
          var q = k.return;
          q && q.call(k);
        }
        function ve(k) {
          var q = Object.getPrototypeOf(k);
          if (typeof k != 'function' || k === S || q !== S) return q;
          var de = k.prototype,
            Te = de && Object.getPrototypeOf(de);
          if (Te == null || Te === Object.prototype) return q;
          var Ue = Te.constructor;
          return typeof Ue != 'function' || Ue === k ? q : Ue;
        }
        function xe() {
          var k;
          !ye(J) &&
            typeof u.Reflect < 'u' &&
            !(J in u.Reflect) &&
            typeof u.Reflect.defineMetadata == 'function' &&
            (k = rt(u.Reflect));
          var q,
            de,
            Te,
            Ue = new P(),
            Ie = { registerProvider: et, getProvider: Ve, setProvider: Ge };
          return Ie;
          function et($e) {
            if (!Object.isExtensible(Ie)) throw new Error('Cannot add provider to a frozen registry.');
            switch (!0) {
              case k === $e:
                break;
              case ye(q):
                q = $e;
                break;
              case q === $e:
                break;
              case ye(de):
                de = $e;
                break;
              case de === $e:
                break;
              default:
                Te === void 0 && (Te = new D()), Te.add($e);
                break;
            }
          }
          function Xe($e, it) {
            if (!ye(q)) {
              if (q.isProviderFor($e, it)) return q;
              if (!ye(de)) {
                if (de.isProviderFor($e, it)) return q;
                if (!ye(Te))
                  for (var ot = M(Te); ; ) {
                    var Dt = V(ot);
                    if (!Dt) return;
                    var hr = L(Dt);
                    if (hr.isProviderFor($e, it)) return te(ot), hr;
                  }
              }
            }
            if (!ye(k) && k.isProviderFor($e, it)) return k;
          }
          function Ve($e, it) {
            var ot = Ue.get($e),
              Dt;
            return (
              ye(ot) || (Dt = ot.get(it)),
              ye(Dt) && ((Dt = Xe($e, it)), ye(Dt) || (ye(ot) && ((ot = new w()), Ue.set($e, ot)), ot.set(it, Dt))),
              Dt
            );
          }
          function Fe($e) {
            if (ye($e)) throw new TypeError();
            return q === $e || de === $e || (!ye(Te) && Te.has($e));
          }
          function Ge($e, it, ot) {
            if (!Fe(ot)) throw new Error('Metadata provider not registered.');
            var Dt = Ve($e, it);
            if (Dt !== ot) {
              if (!ye(Dt)) return !1;
              var hr = Ue.get($e);
              ye(hr) && ((hr = new w()), Ue.set($e, hr)), hr.set(it, ot);
            }
            return !0;
          }
        }
        function De() {
          var k;
          return (
            !ye(J) && Me(u.Reflect) && Object.isExtensible(u.Reflect) && (k = u.Reflect[J]),
            ye(k) && (k = xe()),
            !ye(J) &&
              Me(u.Reflect) &&
              Object.isExtensible(u.Reflect) &&
              Object.defineProperty(u.Reflect, J, { enumerable: !1, configurable: !1, writable: !1, value: k }),
            k
          );
        }
        function ze(k) {
          var q = new P(),
            de = {
              isProviderFor: function (Fe, Ge) {
                var $e = q.get(Fe);
                return ye($e) ? !1 : $e.has(Ge);
              },
              OrdinaryDefineOwnMetadata: et,
              OrdinaryHasOwnMetadata: Ue,
              OrdinaryGetOwnMetadata: Ie,
              OrdinaryOwnMetadataKeys: Xe,
              OrdinaryDeleteMetadata: Ve
            };
          return W.registerProvider(de), de;
          function Te(Fe, Ge, $e) {
            var it = q.get(Fe),
              ot = !1;
            if (ye(it)) {
              if (!$e) return;
              (it = new w()), q.set(Fe, it), (ot = !0);
            }
            var Dt = it.get(Ge);
            if (ye(Dt)) {
              if (!$e) return;
              if (((Dt = new w()), it.set(Ge, Dt), !k.setProvider(Fe, Ge, de)))
                throw (it.delete(Ge), ot && q.delete(Fe), new Error('Wrong provider for target.'));
            }
            return Dt;
          }
          function Ue(Fe, Ge, $e) {
            var it = Te(Ge, $e, !1);
            return ye(it) ? !1 : ke(it.has(Fe));
          }
          function Ie(Fe, Ge, $e) {
            var it = Te(Ge, $e, !1);
            if (!ye(it)) return it.get(Fe);
          }
          function et(Fe, Ge, $e, it) {
            var ot = Te($e, it, !0);
            ot.set(Fe, Ge);
          }
          function Xe(Fe, Ge) {
            var $e = [],
              it = Te(Fe, Ge, !1);
            if (ye(it)) return $e;
            for (var ot = it.keys(), Dt = M(ot), hr = 0; ; ) {
              var la = V(Dt);
              if (!la) return ($e.length = hr), $e;
              var ua = L(la);
              try {
                $e[hr] = ua;
              } catch (Tt) {
                try {
                  te(Dt);
                } finally {
                  throw Tt;
                }
              }
              hr++;
            }
          }
          function Ve(Fe, Ge, $e) {
            var it = Te(Ge, $e, !1);
            if (ye(it) || !it.delete(Fe)) return !1;
            if (it.size === 0) {
              var ot = q.get(Ge);
              ye(ot) || (ot.delete($e), ot.size === 0 && q.delete(ot));
            }
            return !0;
          }
        }
        function rt(k) {
          var q = k.defineMetadata,
            de = k.hasOwnMetadata,
            Te = k.getOwnMetadata,
            Ue = k.getOwnMetadataKeys,
            Ie = k.deleteMetadata,
            et = new P(),
            Xe = {
              isProviderFor: function (Ve, Fe) {
                var Ge = et.get(Ve);
                return !ye(Ge) && Ge.has(Fe)
                  ? !0
                  : Ue(Ve, Fe).length
                    ? (ye(Ge) && ((Ge = new D()), et.set(Ve, Ge)), Ge.add(Fe), !0)
                    : !1;
              },
              OrdinaryDefineOwnMetadata: q,
              OrdinaryHasOwnMetadata: de,
              OrdinaryGetOwnMetadata: Te,
              OrdinaryOwnMetadataKeys: Ue,
              OrdinaryDeleteMetadata: Ie
            };
          return Xe;
        }
        function E(k, q, de) {
          var Te = W.getProvider(k, q);
          if (!ye(Te)) return Te;
          if (de) {
            if (W.setProvider(k, q, H)) return H;
            throw new Error('Illegal state.');
          }
        }
        function m() {
          var k = {},
            q = [],
            de = (function () {
              function Xe(Ve, Fe, Ge) {
                (this._index = 0), (this._keys = Ve), (this._values = Fe), (this._selector = Ge);
              }
              return (
                (Xe.prototype['@@iterator'] = function () {
                  return this;
                }),
                (Xe.prototype[h] = function () {
                  return this;
                }),
                (Xe.prototype.next = function () {
                  var Ve = this._index;
                  if (Ve >= 0 && Ve < this._keys.length) {
                    var Fe = this._selector(this._keys[Ve], this._values[Ve]);
                    return (
                      Ve + 1 >= this._keys.length
                        ? ((this._index = -1), (this._keys = q), (this._values = q))
                        : this._index++,
                      { value: Fe, done: !1 }
                    );
                  }
                  return { value: void 0, done: !0 };
                }),
                (Xe.prototype.throw = function (Ve) {
                  throw (this._index >= 0 && ((this._index = -1), (this._keys = q), (this._values = q)), Ve);
                }),
                (Xe.prototype.return = function (Ve) {
                  return (
                    this._index >= 0 && ((this._index = -1), (this._keys = q), (this._values = q)),
                    { value: Ve, done: !0 }
                  );
                }),
                Xe
              );
            })(),
            Te = (function () {
              function Xe() {
                (this._keys = []), (this._values = []), (this._cacheKey = k), (this._cacheIndex = -2);
              }
              return (
                Object.defineProperty(Xe.prototype, 'size', {
                  get: function () {
                    return this._keys.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (Xe.prototype.has = function (Ve) {
                  return this._find(Ve, !1) >= 0;
                }),
                (Xe.prototype.get = function (Ve) {
                  var Fe = this._find(Ve, !1);
                  return Fe >= 0 ? this._values[Fe] : void 0;
                }),
                (Xe.prototype.set = function (Ve, Fe) {
                  var Ge = this._find(Ve, !0);
                  return (this._values[Ge] = Fe), this;
                }),
                (Xe.prototype.delete = function (Ve) {
                  var Fe = this._find(Ve, !1);
                  if (Fe >= 0) {
                    for (var Ge = this._keys.length, $e = Fe + 1; $e < Ge; $e++)
                      (this._keys[$e - 1] = this._keys[$e]), (this._values[$e - 1] = this._values[$e]);
                    return (
                      this._keys.length--,
                      this._values.length--,
                      me(Ve, this._cacheKey) && ((this._cacheKey = k), (this._cacheIndex = -2)),
                      !0
                    );
                  }
                  return !1;
                }),
                (Xe.prototype.clear = function () {
                  (this._keys.length = 0), (this._values.length = 0), (this._cacheKey = k), (this._cacheIndex = -2);
                }),
                (Xe.prototype.keys = function () {
                  return new de(this._keys, this._values, Ue);
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
                (Xe.prototype._find = function (Ve, Fe) {
                  if (!me(this._cacheKey, Ve)) {
                    this._cacheIndex = -1;
                    for (var Ge = 0; Ge < this._keys.length; Ge++)
                      if (me(this._keys[Ge], Ve)) {
                        this._cacheIndex = Ge;
                        break;
                      }
                  }
                  return (
                    this._cacheIndex < 0 &&
                      Fe &&
                      ((this._cacheIndex = this._keys.length), this._keys.push(Ve), this._values.push(void 0)),
                    this._cacheIndex
                  );
                }),
                Xe
              );
            })();
          return Te;
          function Ue(Xe, Ve) {
            return Xe;
          }
          function Ie(Xe, Ve) {
            return Ve;
          }
          function et(Xe, Ve) {
            return [Xe, Ve];
          }
        }
        function y() {
          var k = (function () {
            function q() {
              this._map = new w();
            }
            return (
              Object.defineProperty(q.prototype, 'size', {
                get: function () {
                  return this._map.size;
                },
                enumerable: !0,
                configurable: !0
              }),
              (q.prototype.has = function (de) {
                return this._map.has(de);
              }),
              (q.prototype.add = function (de) {
                return this._map.set(de, de), this;
              }),
              (q.prototype.delete = function (de) {
                return this._map.delete(de);
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
              (q.prototype[h] = function () {
                return this.keys();
              }),
              q
            );
          })();
          return k;
        }
        function F() {
          var k = 16,
            q = v.create(),
            de = Te();
          return (function () {
            function Ve() {
              this._key = Te();
            }
            return (
              (Ve.prototype.has = function (Fe) {
                var Ge = Ue(Fe, !1);
                return Ge !== void 0 ? v.has(Ge, this._key) : !1;
              }),
              (Ve.prototype.get = function (Fe) {
                var Ge = Ue(Fe, !1);
                return Ge !== void 0 ? v.get(Ge, this._key) : void 0;
              }),
              (Ve.prototype.set = function (Fe, Ge) {
                var $e = Ue(Fe, !0);
                return ($e[this._key] = Ge), this;
              }),
              (Ve.prototype.delete = function (Fe) {
                var Ge = Ue(Fe, !1);
                return Ge !== void 0 ? delete Ge[this._key] : !1;
              }),
              (Ve.prototype.clear = function () {
                this._key = Te();
              }),
              Ve
            );
          })();
          function Te() {
            var Ve;
            do Ve = '@@WeakMap@@' + Xe();
            while (v.has(q, Ve));
            return (q[Ve] = !0), Ve;
          }
          function Ue(Ve, Fe) {
            if (!s.call(Ve, de)) {
              if (!Fe) return;
              Object.defineProperty(Ve, de, { value: v.create() });
            }
            return Ve[de];
          }
          function Ie(Ve, Fe) {
            for (var Ge = 0; Ge < Fe; ++Ge) Ve[Ge] = (Math.random() * 255) | 0;
            return Ve;
          }
          function et(Ve) {
            if (typeof Uint8Array == 'function') {
              var Fe = new Uint8Array(Ve);
              return (
                typeof crypto < 'u'
                  ? crypto.getRandomValues(Fe)
                  : typeof msCrypto < 'u'
                    ? msCrypto.getRandomValues(Fe)
                    : Ie(Fe, Ve),
                Fe
              );
            }
            return Ie(new Array(Ve), Ve);
          }
          function Xe() {
            var Ve = et(k);
            (Ve[6] = (Ve[6] & 79) | 64), (Ve[8] = (Ve[8] & 191) | 128);
            for (var Fe = '', Ge = 0; Ge < k; ++Ge) {
              var $e = Ve[Ge];
              (Ge === 4 || Ge === 6 || Ge === 8) && (Fe += '-'),
                $e < 16 && (Fe += '0'),
                (Fe += $e.toString(16).toLowerCase());
            }
            return Fe;
          }
        }
        function ie(k) {
          return (k.__ = void 0), delete k.__, k;
        }
      });
    })(r || (r = {})),
    Pp
  );
}
hw();
const sy = Symbol('format'),
  cy = Symbol('cbor_biguint');
function or(r) {
  return Reflect.metadata(sy, r);
}
function cu() {
  return Reflect.metadata(cy, !0);
}
class Wp {
  static getCborIndex(i, a) {
    return Reflect.getMetadata(sy, i, a);
  }
  static isCborBigUint(i, a) {
    return Reflect.getMetadata(cy, i, a);
  }
}
class ou {
  constructor(i) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = i);
  }
  static fromString(i) {
    if (!i) throw new Error('Invalid OrderId');
    const a = i.toLowerCase().startsWith('0x') ? i.slice(2) : i;
    if (!/^[0-9a-f]+$/i.test(a)) throw new Error('Invalid OrderId: not a valid hex string');
    return new ou(new en(`0x${a}`));
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
    return ea.Buffer.from(Zg.encode(a));
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
        : i instanceof Rt || i instanceof He || i instanceof ou
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
class Rs {
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
function gw(r) {
  return { query: { HIN: String(r.hin), AssetId: r.assetId ? String(r.assetId) : void 0 } };
}
class Nr extends Error {
  constructor(i) {
    super(i), (this.name = 'HibitError');
  }
  static throwBadRequestError(i, a, u) {
    throw a !== void 0 && u !== void 0
      ? new Nr(`Bad request: ${i} failed with code ${a} and message ${u}`)
      : a !== void 0
        ? new Nr(`Bad request: ${i} failed with code ${a}`)
        : u !== void 0
          ? new Nr(`Bad request: ${i} failed with message ${u}`)
          : new Nr(`Bad request: ${i}`);
  }
  static throwInvalidResponseError(i) {
    throw new Nr(`Invalid response: ${i}`);
  }
  static throwRequiredHINError(i) {
    throw new Nr(`HIN is required: ${i}`);
  }
  static throwRequiredPrivKeyError(i) {
    throw new Nr(`Private key is required: ${i}`);
  }
}
function fr(r, i, a, u) {
  var s = arguments.length,
    f = s < 3 ? i : u === null ? (u = Object.getOwnPropertyDescriptor(i, a)) : u,
    d;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') f = Reflect.decorate(r, i, a, u);
  else for (var h = r.length - 1; h >= 0; h--) (d = r[h]) && (f = (s < 3 ? d(f) : s > 3 ? d(i, a, f) : d(i, a)) || f);
  return s > 3 && f && Object.defineProperty(i, a, f), f;
}
function dr(r, i) {
  if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function') return Reflect.metadata(r, i);
}
function Pl(r, i) {
  const a = new en(r),
    u = new en(10).pow(i);
  return BigInt(a.multipliedBy(u).toFixed(0));
}
const yw = 32,
  vw = 'https://testnetopenapi.hibit.app',
  bw = 'https://openapi.hibit.app',
  Sw = 'https://brokerapi.hibit.app',
  xw = 'https://testnetbrokerapi.hibit.app';
class fu {
  constructor(i) {
    Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'price', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'volume', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.assign(this, i);
  }
}
fr([or(0), cu(), dr('design:type', Number)], fu.prototype, 'orderSide', void 0);
fr([or(1), dr('design:type', BigInt)], fu.prototype, 'price', void 0);
fr([or(2), dr('design:type', BigInt)], fu.prototype, 'volume', void 0);
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
fr([or(0), dr('design:type', BigInt)], ia.prototype, 'exactTokens', void 0);
fr([or(1), cu(), dr('design:type', Number)], ia.prototype, 'exactTokensType', void 0);
fr([or(2), cu(), dr('design:type', Number)], ia.prototype, 'orderSide', void 0);
fr([or(3), dr('design:type', BigInt)], ia.prototype, 'minOut', void 0);
fr([or(4), dr('design:type', BigInt)], ia.prototype, 'maxIn', void 0);
class du {
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
fr([or(0), cu(), dr('design:type', Number)], du.prototype, 'orderCategory', void 0);
fr([or(1), dr('design:type', BigInt)], du.prototype, 'marketId', void 0);
fr([or(2), dr('design:type', fu)], du.prototype, 'limitOrderDetails', void 0);
fr([or(3), dr('design:type', ia)], du.prototype, 'swapV2OrderDetails', void 0);
class hu {
  constructor(i) {
    Object.defineProperty(this, 'marketId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'isCancelAll', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.isCancelAll = !1),
      Object.assign(this, i);
  }
}
fr([or(0), dr('design:type', BigInt)], hu.prototype, 'marketId', void 0);
fr([or(1), dr('design:type', ou)], hu.prototype, 'orderId', void 0);
fr([or(2), cu(), dr('design:type', Number)], hu.prototype, 'orderSide', void 0);
fr([or(3), dr('design:type', Boolean)], hu.prototype, 'isCancelAll', void 0);
function ww(r, i) {
  let a, u, s;
  return (
    r.exactTokensType === Ni.Source
      ? ((a = r.orderSide === Nt.Ask ? i.baseAssetDecimals : i.quoteAssetDecimals),
        (u = r.orderSide === Nt.Ask ? i.quoteAssetDecimals : i.baseAssetDecimals),
        (s = r.orderSide === Nt.Ask ? i.baseAssetDecimals : i.quoteAssetDecimals))
      : ((a = r.orderSide === Nt.Ask ? i.quoteAssetDecimals : i.baseAssetDecimals),
        (u = r.orderSide === Nt.Ask ? i.baseAssetDecimals : i.quoteAssetDecimals),
        (s = r.orderSide === Nt.Ask ? i.quoteAssetDecimals : i.baseAssetDecimals)),
    new ia({
      exactTokens: Pl(r.exactTokens, a),
      exactTokensType: r.exactTokensType,
      orderSide: r.orderSide,
      minOut: r.minOut ? Pl(r.minOut, u) : void 0,
      maxIn: r.maxIn ? Pl(r.maxIn, s) : void 0
    })
  );
}
function Ew(r, i) {
  return new fu({ orderSide: r.orderSide, price: Pl(r.price, yw), volume: Pl(r.volume, i.baseAssetDecimals) });
}
function Aw(r, i) {
  return new du({
    orderCategory: r.orderCategory,
    marketId: r.marketId,
    limitOrderDetails: r.limitOrderDetails ? Ew(r.limitOrderDetails, i) : void 0,
    swapV2OrderDetails: r.swapV2OrderDetails ? ww(r.swapV2OrderDetails, i) : void 0
  });
}
function Nw(r) {
  return new hu({
    marketId: r.marketId,
    orderId: r.orderId ? ou.fromString(r.orderId) : void 0,
    orderSide: r.orderSide,
    isCancelAll: r.isCancelAll
  });
}
class _w {
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
      ((s = (u = a.data) == null ? void 0 : u.data) != null && s.timestamp) || Nr.throwInvalidResponseError(i),
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
      u = await qx(Px(i));
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
      Nr.throwBadRequestError(
        a,
        400,
        'Must have exactly one of the following properties set: `OrderId`, `ClientOrderId`, or `TxHash`'
      );
    const u = await Hx(ow(i));
    return this.ensureSuccess(a, u.data), Qp(u.data.data);
  }
  async getOrderTrades(i) {
    const a = 'getOrderTrades',
      u = await Lx(fw(i));
    return this.ensureSuccess(a, u.data), u.data.data.map((s) => dw(s));
  }
  async submitSpotOrder(i, a, u) {
    const s = 'submitSpotOrder';
    this.ensurePrivateKey(s);
    const f = u ? BigInt(u) : await this.getNonce(this.options.hin),
      d = Aw(i, a),
      h = Rs.createTransaction(Vs.CreateSpotOrder, this.options.hin, f | 0n, d),
      p = Rs.sign(h, this.options.proxyKey),
      g = await Vx(Vp(p));
    this.ensureSuccess(s, g.data);
  }
  async cancelSpotOrder(i, a) {
    const u = 'cancelSpotOrder';
    this.ensurePrivateKey(u), (i.isCancelAll === void 0 || i.isCancelAll === null) && (i.isCancelAll = !1);
    const s = a ? BigInt(a) : await this.getNonce(this.options.hin),
      f = Nw(i),
      d = Rs.createTransaction(Vs.CancelSpotOrder, this.options.hin, s | 0n, f),
      h = Rs.sign(d, this.options.proxyKey),
      p = await Fx(Vp(h));
    this.ensureSuccess(u, p.data);
  }
  async getWalletBalances(i) {
    const a = 'getWalletBalances',
      u = await $x(gw(i));
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
      Nr.throwBadRequestError(i, a == null ? void 0 : a.code, a == null ? void 0 : a.message);
  }
  ensurePrivateKey(i) {
    this.ensureHIN(i), this.options.proxyKey || Nr.throwRequiredPrivKeyError(i);
  }
  ensureHIN(i) {
    this.options.hin || Nr.throwRequiredHINError(i);
  }
}
const Ct = ({ title: r, form: i, loading: a, result: u, error: s }) =>
  _.jsxs('section', {
    children: [
      _.jsx('h2', { className: 'text-lg font-bold', children: r }),
      _.jsxs('div', {
        className: 'flex mt-2 border rounded-lg overflow-hidden',
        children: [
          _.jsx('div', { className: `${typeof u < 'u' ? 'max-w-1/2 border-r' : 'flex-1'} p-4`, children: i }),
          typeof u < 'u' &&
            _.jsxs('div', {
              className: 'p-4 flex flex-col gap-2 overflow-hidden',
              children: [
                _.jsx('p', { className: 'text-sm text-gray-600', children: 'Result' }),
                _.jsx('pre', {
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
                              d.forEach((p, g) => {
                                h[g] = String(p);
                              }),
                              h
                            );
                          }
                          return d;
                        },
                        2
                      )
                }),
                _.jsx('pre', { className: 'text-red-500 whitespace-pre-wrap', children: s })
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
  return _.jsx(Ct, {
    title: 'GetTimestamp',
    form: _.jsx('div', {
      children: _.jsx('button', { className: 'btn', onClick: h, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
  return _.jsx(Ct, {
    title: 'GetChains',
    form: _.jsx('div', {
      children: _.jsx('button', { className: 'btn', onClick: h, disabled: i, children: i ? 'Loading...' : 'Submit' })
    }),
    loading: i,
    result: u,
    error: f
  });
}
var mu = (r) => r.type === 'checkbox',
  Qi = (r) => r instanceof Date,
  gr = (r) => r == null;
const oy = (r) => typeof r == 'object';
var $t = (r) => !gr(r) && !Array.isArray(r) && oy(r) && !Qi(r),
  fy = (r) => ($t(r) && r.target ? (mu(r.target) ? r.target.checked : r.target.value) : r),
  Mw = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
  dy = (r, i) => r.has(Mw(i)),
  Rw = (r) => {
    const i = r.constructor && r.constructor.prototype;
    return $t(i) && i.hasOwnProperty('isPrototypeOf');
  },
  Sd = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Er(r) {
  let i;
  const a = Array.isArray(r),
    u = typeof FileList < 'u' ? r instanceof FileList : !1;
  if (r instanceof Date) i = new Date(r);
  else if (r instanceof Set) i = new Set(r);
  else if (!(Sd && (r instanceof Blob || u)) && (a || $t(r)))
    if (((i = a ? [] : {}), !a && !Rw(r))) i = r;
    else for (const s in r) r.hasOwnProperty(s) && (i[s] = Er(r[s]));
  else return r;
  return i;
}
var cc = (r) => (Array.isArray(r) ? r.filter(Boolean) : []),
  Gt = (r) => r === void 0,
  qe = (r, i, a) => {
    if (!i || !$t(r)) return a;
    const u = cc(i.split(/[,[\].]+?/)).reduce((s, f) => (gr(s) ? s : s[f]), r);
    return Gt(u) || u === r ? (Gt(r[i]) ? a : r[i]) : u;
  },
  Wr = (r) => typeof r == 'boolean',
  xd = (r) => /^\w*$/.test(r),
  hy = (r) => cc(r.replace(/["|']|\]/g, '').split(/\.|\[/)),
  xt = (r, i, a) => {
    let u = -1;
    const s = xd(i) ? [i] : hy(i),
      f = s.length,
      d = f - 1;
    for (; ++u < f; ) {
      const h = s[u];
      let p = a;
      if (u !== d) {
        const g = r[h];
        p = $t(g) || Array.isArray(g) ? g : isNaN(+s[u + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      (r[h] = p), (r = r[h]);
    }
    return r;
  };
const Ks = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  un = { onBlur: 'onBlur', onChange: 'onChange', onSubmit: 'onSubmit', onTouched: 'onTouched', all: 'all' },
  Vn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
  },
  Bw = wt.createContext(null),
  wd = () => wt.useContext(Bw);
var my = (r, i, a, u = !0) => {
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
  py = (r, i, a, u) => {
    a(r);
    const { name: s, ...f } = r;
    return (
      Ar(f) || Object.keys(f).length >= Object.keys(i).length || Object.keys(f).find((d) => i[d] === (!u || un.all))
    );
  },
  Jl = (r) => (Array.isArray(r) ? r : [r]),
  gy = (r, i, a) => !r || !i || r === i || Jl(r).some((u) => u && (a ? u === i : u.startsWith(i) || i.startsWith(u)));
function Ed(r) {
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
  const i = wd(),
    { control: a = i.control, disabled: u, name: s, exact: f } = r || {},
    [d, h] = wt.useState(a._formState),
    p = wt.useRef(!0),
    g = wt.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    }),
    N = wt.useRef(s);
  return (
    (N.current = s),
    Ed({
      disabled: u,
      next: (v) =>
        p.current && gy(N.current, v.name, f) && py(v, g.current, a._updateFormState) && h({ ...a._formState, ...v }),
      subject: a._subjects.state
    }),
    wt.useEffect(
      () => (
        (p.current = !0),
        g.current.isValid && a._updateValid(!0),
        () => {
          p.current = !1;
        }
      ),
      [a]
    ),
    wt.useMemo(() => my(d, a, g.current, !1), [d, a])
  );
}
var xn = (r) => typeof r == 'string',
  yy = (r, i, a, u, s) =>
    xn(r)
      ? (u && i.watch.add(r), qe(a, r, s))
      : Array.isArray(r)
        ? r.map((f) => (u && i.watch.add(f), qe(a, f)))
        : (u && (i.watchAll = !0), a);
function Dw(r) {
  const i = wd(),
    { control: a = i.control, name: u, defaultValue: s, disabled: f, exact: d } = r || {},
    h = wt.useRef(u);
  (h.current = u),
    Ed({
      disabled: f,
      subject: a._subjects.values,
      next: (N) => {
        gy(h.current, N.name, d) && g(Er(yy(h.current, a._names, N.values || a._formValues, !1, s)));
      }
    });
  const [p, g] = wt.useState(a._getWatch(u, s));
  return wt.useEffect(() => a._removeUnmounted()), p;
}
function Uw(r) {
  const i = wd(),
    { name: a, disabled: u, control: s = i.control, shouldUnregister: f } = r,
    d = dy(s._names.array, a),
    h = Dw({
      control: s,
      name: a,
      defaultValue: qe(s._formValues, a, qe(s._defaultValues, a, r.defaultValue)),
      exact: !0
    }),
    p = Cw({ control: s, name: a, exact: !0 }),
    g = wt.useRef(s.register(a, { ...r.rules, value: h, ...(Wr(r.disabled) ? { disabled: r.disabled } : {}) })),
    N = wt.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!qe(p.errors, a) },
            isDirty: { enumerable: !0, get: () => !!qe(p.dirtyFields, a) },
            isTouched: { enumerable: !0, get: () => !!qe(p.touchedFields, a) },
            isValidating: { enumerable: !0, get: () => !!qe(p.validatingFields, a) },
            error: { enumerable: !0, get: () => qe(p.errors, a) }
          }
        ),
      [p, a]
    ),
    v = wt.useMemo(
      () => ({
        name: a,
        value: h,
        ...(Wr(u) || p.disabled ? { disabled: p.disabled || u } : {}),
        onChange: (S) => g.current.onChange({ target: { value: fy(S), name: a }, type: Ks.CHANGE }),
        onBlur: () => g.current.onBlur({ target: { value: qe(s._formValues, a), name: a }, type: Ks.BLUR }),
        ref: (S) => {
          const w = qe(s._fields, a);
          w &&
            S &&
            (w._f.ref = {
              focus: () => S.focus(),
              select: () => S.select(),
              setCustomValidity: (D) => S.setCustomValidity(D),
              reportValidity: () => S.reportValidity()
            });
        }
      }),
      [a, s._formValues, u, p.disabled, h, s._fields]
    );
  return (
    wt.useEffect(() => {
      const S = s._options.shouldUnregister || f,
        w = (D, P) => {
          const J = qe(s._fields, D);
          J && J._f && (J._f.mount = P);
        };
      if ((w(a, !0), S)) {
        const D = Er(qe(s._options.defaultValues, a));
        xt(s._defaultValues, a, D), Gt(qe(s._formValues, a)) && xt(s._formValues, a, D);
      }
      return (
        !d && s.register(a),
        () => {
          (d ? S && !s._state.action : S) ? s.unregister(a) : w(a, !1);
        }
      );
    }, [a, s, d, f]),
    wt.useEffect(() => {
      s._updateDisabledField({ disabled: u, fields: s._fields, name: a });
    }, [u, a, s]),
    wt.useMemo(() => ({ field: v, formState: p, fieldState: N }), [v, p, N])
  );
}
const cr = (r) => r.render(Uw(r));
var vy = (r, i, a, u, s) => (i ? { ...a[r], types: { ...(a[r] && a[r].types ? a[r].types : {}), [u]: s || !0 } } : {}),
  eg = (r) => ({
    isOnSubmit: !r || r === un.onSubmit,
    isOnBlur: r === un.onBlur,
    isOnChange: r === un.onChange,
    isOnAll: r === un.all,
    isOnTouch: r === un.onTouched
  }),
  tg = (r, i, a) =>
    !a &&
    (i.watchAll || i.watch.has(r) || [...i.watch].some((u) => r.startsWith(u) && /^\.\w+/.test(r.slice(u.length))));
const Wl = (r, i, a, u) => {
  for (const s of a || Object.keys(r)) {
    const f = qe(r, s);
    if (f) {
      const { _f: d, ...h } = f;
      if (d) {
        if (d.refs && d.refs[0] && i(d.refs[0], s) && !u) return !0;
        if (d.ref && i(d.ref, d.name) && !u) return !0;
        if (Wl(h, i)) break;
      } else if ($t(h) && Wl(h, i)) break;
    }
  }
};
var jw = (r, i, a) => {
    const u = Jl(qe(r, a));
    return xt(u, 'root', i[a]), xt(r, a, u), r;
  },
  Ad = (r) => r.type === 'file',
  Sn = (r) => typeof r == 'function',
  Zs = (r) => {
    if (!Sd) return !1;
    const i = r ? r.ownerDocument : 0;
    return r instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
  },
  ks = (r) => xn(r),
  Nd = (r) => r.type === 'radio',
  Qs = (r) => r instanceof RegExp;
const rg = { value: !1, isValid: !1 },
  ng = { value: !0, isValid: !0 };
var by = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const i = r.filter((a) => a && a.checked && !a.disabled).map((a) => a.value);
      return { value: i, isValid: !!i.length };
    }
    return r[0].checked && !r[0].disabled
      ? r[0].attributes && !Gt(r[0].attributes.value)
        ? Gt(r[0].value) || r[0].value === ''
          ? ng
          : { value: r[0].value, isValid: !0 }
        : ng
      : rg;
  }
  return rg;
};
const ig = { isValid: !1, value: null };
var Sy = (r) =>
  Array.isArray(r) ? r.reduce((i, a) => (a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : i), ig) : ig;
function ag(r, i, a = 'validate') {
  if (ks(r) || (Array.isArray(r) && r.every(ks)) || (Wr(r) && !r)) return { type: a, message: ks(r) ? r : '', ref: i };
}
var La = (r) => ($t(r) && !Qs(r) ? r : { value: r, message: '' }),
  lg = async (r, i, a, u, s, f) => {
    const {
        ref: d,
        refs: h,
        required: p,
        maxLength: g,
        minLength: N,
        min: v,
        max: S,
        pattern: w,
        validate: D,
        name: P,
        valueAsNumber: J,
        mount: W
      } = r._f,
      H = qe(a, P);
    if (!W || i.has(P)) return {};
    const Se = h ? h[0] : d,
      Le = (Y) => {
        s && Se.reportValidity && (Se.setCustomValidity(Wr(Y) ? '' : Y || ''), Se.reportValidity());
      },
      we = {},
      he = Nd(d),
      Ae = mu(d),
      b = he || Ae,
      A =
        ((J || Ad(d)) && Gt(d.value) && Gt(H)) ||
        (Zs(d) && d.value === '') ||
        H === '' ||
        (Array.isArray(H) && !H.length),
      T = vy.bind(null, P, u, we),
      G = (Y, X, Z, I = Vn.maxLength, R = Vn.minLength) => {
        const $ = Y ? X : Z;
        we[P] = { type: Y ? I : R, message: $, ref: d, ...T(Y ? I : R, $) };
      };
    if (
      f
        ? !Array.isArray(H) || !H.length
        : p && ((!b && (A || gr(H))) || (Wr(H) && !H) || (Ae && !by(h).isValid) || (he && !Sy(h).isValid))
    ) {
      const { value: Y, message: X } = ks(p) ? { value: !!p, message: p } : La(p);
      if (Y && ((we[P] = { type: Vn.required, message: X, ref: Se, ...T(Vn.required, X) }), !u)) return Le(X), we;
    }
    if (!A && (!gr(v) || !gr(S))) {
      let Y, X;
      const Z = La(S),
        I = La(v);
      if (!gr(H) && !isNaN(H)) {
        const R = d.valueAsNumber || (H && +H);
        gr(Z.value) || (Y = R > Z.value), gr(I.value) || (X = R < I.value);
      } else {
        const R = d.valueAsDate || new Date(H),
          $ = (j) => new Date(new Date().toDateString() + ' ' + j),
          z = d.type == 'time',
          oe = d.type == 'week';
        xn(Z.value) && H && (Y = z ? $(H) > $(Z.value) : oe ? H > Z.value : R > new Date(Z.value)),
          xn(I.value) && H && (X = z ? $(H) < $(I.value) : oe ? H < I.value : R < new Date(I.value));
      }
      if ((Y || X) && (G(!!Y, Z.message, I.message, Vn.max, Vn.min), !u)) return Le(we[P].message), we;
    }
    if ((g || N) && !A && (xn(H) || (f && Array.isArray(H)))) {
      const Y = La(g),
        X = La(N),
        Z = !gr(Y.value) && H.length > +Y.value,
        I = !gr(X.value) && H.length < +X.value;
      if ((Z || I) && (G(Z, Y.message, X.message), !u)) return Le(we[P].message), we;
    }
    if (w && !A && xn(H)) {
      const { value: Y, message: X } = La(w);
      if (Qs(Y) && !H.match(Y) && ((we[P] = { type: Vn.pattern, message: X, ref: d, ...T(Vn.pattern, X) }), !u))
        return Le(X), we;
    }
    if (D) {
      if (Sn(D)) {
        const Y = await D(H, a),
          X = ag(Y, Se);
        if (X && ((we[P] = { ...X, ...T(Vn.validate, X.message) }), !u)) return Le(X.message), we;
      } else if ($t(D)) {
        let Y = {};
        for (const X in D) {
          if (!Ar(Y) && !u) break;
          const Z = ag(await D[X](H, a), Se, X);
          Z && ((Y = { ...Z, ...T(X, Z.message) }), Le(Z.message), u && (we[P] = Y));
        }
        if (!Ar(Y) && ((we[P] = { ref: Se, ...Y }), !u)) return we;
      }
    }
    return Le(!0), we;
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
  const a = Array.isArray(i) ? i : xd(i) ? [i] : hy(i),
    u = a.length === 1 ? r : kw(r, a),
    s = a.length - 1,
    f = a[s];
  return u && delete u[f], s !== 0 && (($t(u) && Ar(u)) || (Array.isArray(u) && Iw(u))) && Jt(r, a.slice(0, -1)), r;
}
var $f = () => {
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
  id = (r) => gr(r) || !oy(r);
function Ai(r, i) {
  if (id(r) || id(i)) return r === i;
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
var xy = (r) => r.type === 'select-multiple',
  qw = (r) => Nd(r) || mu(r),
  Yf = (r) => Zs(r) && r.isConnected,
  wy = (r) => {
    for (const i in r) if (Sn(r[i])) return !0;
    return !1;
  };
function Ps(r, i = {}) {
  const a = Array.isArray(r);
  if ($t(r) || a)
    for (const u in r)
      Array.isArray(r[u]) || ($t(r[u]) && !wy(r[u]))
        ? ((i[u] = Array.isArray(r[u]) ? [] : {}), Ps(r[u], i[u]))
        : gr(r[u]) || (i[u] = !0);
  return i;
}
function Ey(r, i, a) {
  const u = Array.isArray(r);
  if ($t(r) || u)
    for (const s in r)
      Array.isArray(r[s]) || ($t(r[s]) && !wy(r[s]))
        ? Gt(i) || id(a[s])
          ? (a[s] = Array.isArray(r[s]) ? Ps(r[s], []) : { ...Ps(r[s]) })
          : Ey(r[s], gr(i) ? {} : i[s], a[s])
        : (a[s] = !Ai(r[s], i[s]));
  return a;
}
var $l = (r, i) => Ey(r, i, Ps(i)),
  Ay = (r, { valueAsNumber: i, valueAsDate: a, setValueAs: u }) =>
    Gt(r) ? r : i ? (r === '' ? NaN : r && +r) : a && xn(r) ? new Date(r) : u ? u(r) : r;
function Xf(r) {
  const i = r.ref;
  return Ad(i)
    ? i.files
    : Nd(i)
      ? Sy(r.refs).value
      : xy(i)
        ? [...i.selectedOptions].map(({ value: a }) => a)
        : mu(i)
          ? by(r.refs).value
          : Ay(Gt(i.value) ? r.ref.value : i.value, r);
}
var Lw = (r, i, a, u) => {
    const s = {};
    for (const f of r) {
      const d = qe(i, f);
      d && xt(s, f, d._f);
    }
    return { criteriaMode: a, names: [...r], fields: s, shouldUseNativeValidation: u };
  },
  Yl = (r) => (Gt(r) ? r : Qs(r) ? r.source : $t(r) ? (Qs(r.value) ? r.value.source : r.value) : r);
const ug = 'AsyncFunction';
var zw = (r) =>
    !!r &&
    !!r.validate &&
    !!(
      (Sn(r.validate) && r.validate.constructor.name === ug) ||
      ($t(r.validate) && Object.values(r.validate).find((i) => i.constructor.name === ug))
    ),
  Hw = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function sg(r, i, a) {
  const u = qe(r, a);
  if (u || xd(a)) return { error: u, name: a };
  const s = a.split('.');
  for (; s.length; ) {
    const f = s.join('.'),
      d = qe(i, f),
      h = qe(r, f);
    if (d && !Array.isArray(d) && a !== f) return { name: a };
    if (h && h.type) return { name: f, error: h };
    s.pop();
  }
  return { name: a };
}
var Vw = (r, i, a, u, s) =>
    s.isOnAll
      ? !1
      : !a && s.isOnTouch
        ? !(i || r)
        : (a ? u.isOnBlur : s.isOnBlur)
          ? !r
          : (a ? u.isOnChange : s.isOnChange)
            ? r
            : !0,
  Fw = (r, i) => !cc(qe(r, i)).length && Jt(r, i);
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
    g = 0;
  const N = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    },
    v = { values: $f(), array: $f(), state: $f() },
    S = eg(i.mode),
    w = eg(i.reValidateMode),
    D = i.criteriaMode === un.all,
    P = (M) => (L) => {
      clearTimeout(g), (g = setTimeout(M, L));
    },
    J = async (M) => {
      if (!i.disabled && (N.isValid || M)) {
        const L = i.resolver ? Ar((await b()).errors) : await T(u, !0);
        L !== a.isValid && v.state.next({ isValid: L });
      }
    },
    W = (M, L) => {
      !i.disabled &&
        (N.isValidating || N.validatingFields) &&
        ((M || Array.from(h.mount)).forEach((V) => {
          V && (L ? xt(a.validatingFields, V, L) : Jt(a.validatingFields, V));
        }),
        v.state.next({ validatingFields: a.validatingFields, isValidating: !Ar(a.validatingFields) }));
    },
    H = (M, L = [], V, te, ve = !0, xe = !0) => {
      if (te && V && !i.disabled) {
        if (((d.action = !0), xe && Array.isArray(qe(u, M)))) {
          const De = V(qe(u, M), te.argA, te.argB);
          ve && xt(u, M, De);
        }
        if (xe && Array.isArray(qe(a.errors, M))) {
          const De = V(qe(a.errors, M), te.argA, te.argB);
          ve && xt(a.errors, M, De), Fw(a.errors, M);
        }
        if (N.touchedFields && xe && Array.isArray(qe(a.touchedFields, M))) {
          const De = V(qe(a.touchedFields, M), te.argA, te.argB);
          ve && xt(a.touchedFields, M, De);
        }
        N.dirtyFields && (a.dirtyFields = $l(s, f)),
          v.state.next({ name: M, isDirty: Y(M, L), dirtyFields: a.dirtyFields, errors: a.errors, isValid: a.isValid });
      } else xt(f, M, L);
    },
    Se = (M, L) => {
      xt(a.errors, M, L), v.state.next({ errors: a.errors });
    },
    Le = (M) => {
      (a.errors = M), v.state.next({ errors: a.errors, isValid: !1 });
    },
    we = (M, L, V, te) => {
      const ve = qe(u, M);
      if (ve) {
        const xe = qe(f, M, Gt(V) ? qe(s, M) : V);
        Gt(xe) || (te && te.defaultChecked) || L ? xt(f, M, L ? xe : Xf(ve._f)) : I(M, xe), d.mount && J();
      }
    },
    he = (M, L, V, te, ve) => {
      let xe = !1,
        De = !1;
      const ze = { name: M };
      if (!i.disabled) {
        const rt = !!(qe(u, M) && qe(u, M)._f && qe(u, M)._f.disabled);
        if (!V || te) {
          N.isDirty && ((De = a.isDirty), (a.isDirty = ze.isDirty = Y()), (xe = De !== ze.isDirty));
          const E = rt || Ai(qe(s, M), L);
          (De = !!(!rt && qe(a.dirtyFields, M))),
            E || rt ? Jt(a.dirtyFields, M) : xt(a.dirtyFields, M, !0),
            (ze.dirtyFields = a.dirtyFields),
            (xe = xe || (N.dirtyFields && De !== !E));
        }
        if (V) {
          const E = qe(a.touchedFields, M);
          E ||
            (xt(a.touchedFields, M, V),
            (ze.touchedFields = a.touchedFields),
            (xe = xe || (N.touchedFields && E !== V)));
        }
        xe && ve && v.state.next(ze);
      }
      return xe ? ze : {};
    },
    Ae = (M, L, V, te) => {
      const ve = qe(a.errors, M),
        xe = N.isValid && Wr(L) && a.isValid !== L;
      if (
        (i.delayError && V
          ? ((p = P(() => Se(M, V))), p(i.delayError))
          : (clearTimeout(g), (p = null), V ? xt(a.errors, M, V) : Jt(a.errors, M)),
        (V ? !Ai(ve, V) : ve) || !Ar(te) || xe)
      ) {
        const De = { ...te, ...(xe && Wr(L) ? { isValid: L } : {}), errors: a.errors, name: M };
        (a = { ...a, ...De }), v.state.next(De);
      }
    },
    b = async (M) => {
      W(M, !0);
      const L = await i.resolver(f, i.context, Lw(M || h.mount, u, i.criteriaMode, i.shouldUseNativeValidation));
      return W(M), L;
    },
    A = async (M) => {
      const { errors: L } = await b(M);
      if (M)
        for (const V of M) {
          const te = qe(L, V);
          te ? xt(a.errors, V, te) : Jt(a.errors, V);
        }
      else a.errors = L;
      return L;
    },
    T = async (M, L, V = { valid: !0 }) => {
      for (const te in M) {
        const ve = M[te];
        if (ve) {
          const { _f: xe, ...De } = ve;
          if (xe) {
            const ze = h.array.has(xe.name),
              rt = ve._f && zw(ve._f);
            rt && N.validatingFields && W([te], !0);
            const E = await lg(ve, h.disabled, f, D, i.shouldUseNativeValidation && !L, ze);
            if ((rt && N.validatingFields && W([te]), E[xe.name] && ((V.valid = !1), L))) break;
            !L &&
              (qe(E, xe.name)
                ? ze
                  ? jw(a.errors, E, xe.name)
                  : xt(a.errors, xe.name, E[xe.name])
                : Jt(a.errors, xe.name));
          }
          !Ar(De) && (await T(De, L, V));
        }
      }
      return V.valid;
    },
    G = () => {
      for (const M of h.unMount) {
        const L = qe(u, M);
        L && (L._f.refs ? L._f.refs.every((V) => !Yf(V)) : !Yf(L._f.ref)) && Me(M);
      }
      h.unMount = new Set();
    },
    Y = (M, L) => !i.disabled && (M && L && xt(f, M, L), !Ai(ne(), s)),
    X = (M, L, V) => yy(M, h, { ...(d.mount ? f : Gt(L) ? s : xn(M) ? { [M]: L } : L) }, V, L),
    Z = (M) => cc(qe(d.mount ? f : s, M, i.shouldUnregister ? qe(s, M, []) : [])),
    I = (M, L, V = {}) => {
      const te = qe(u, M);
      let ve = L;
      if (te) {
        const xe = te._f;
        xe &&
          (!xe.disabled && xt(f, M, Ay(L, xe)),
          (ve = Zs(xe.ref) && gr(L) ? '' : L),
          xy(xe.ref)
            ? [...xe.ref.options].forEach((De) => (De.selected = ve.includes(De.value)))
            : xe.refs
              ? mu(xe.ref)
                ? xe.refs.length > 1
                  ? xe.refs.forEach(
                      (De) =>
                        (!De.defaultChecked || !De.disabled) &&
                        (De.checked = Array.isArray(ve) ? !!ve.find((ze) => ze === De.value) : ve === De.value)
                    )
                  : xe.refs[0] && (xe.refs[0].checked = !!ve)
                : xe.refs.forEach((De) => (De.checked = De.value === ve))
              : Ad(xe.ref)
                ? (xe.ref.value = '')
                : ((xe.ref.value = ve), xe.ref.type || v.values.next({ name: M, values: { ...f } })));
      }
      (V.shouldDirty || V.shouldTouch) && he(M, ve, V.shouldTouch, V.shouldDirty, !0), V.shouldValidate && j(M);
    },
    R = (M, L, V) => {
      for (const te in L) {
        const ve = L[te],
          xe = `${M}.${te}`,
          De = qe(u, xe);
        (h.array.has(M) || $t(ve) || (De && !De._f)) && !Qi(ve) ? R(xe, ve, V) : I(xe, ve, V);
      }
    },
    $ = (M, L, V = {}) => {
      const te = qe(u, M),
        ve = h.array.has(M),
        xe = Er(L);
      xt(f, M, xe),
        ve
          ? (v.array.next({ name: M, values: { ...f } }),
            (N.isDirty || N.dirtyFields) &&
              V.shouldDirty &&
              v.state.next({ name: M, dirtyFields: $l(s, f), isDirty: Y(M, xe) }))
          : te && !te._f && !gr(xe)
            ? R(M, xe, V)
            : I(M, xe, V),
        tg(M, h) && v.state.next({ ...a }),
        v.values.next({ name: d.mount ? M : void 0, values: { ...f } });
    },
    z = async (M) => {
      d.mount = !0;
      const L = M.target;
      let V = L.name,
        te = !0;
      const ve = qe(u, V),
        xe = () => (L.type ? Xf(ve._f) : fy(M)),
        De = (ze) => {
          te = Number.isNaN(ze) || (Qi(ze) && isNaN(ze.getTime())) || Ai(ze, qe(f, V, ze));
        };
      if (ve) {
        let ze, rt;
        const E = xe(),
          m = M.type === Ks.BLUR || M.type === Ks.FOCUS_OUT,
          y =
            (!Hw(ve._f) && !i.resolver && !qe(a.errors, V) && !ve._f.deps) ||
            Vw(m, qe(a.touchedFields, V), a.isSubmitted, w, S),
          F = tg(V, h, m);
        xt(f, V, E), m ? (ve._f.onBlur && ve._f.onBlur(M), p && p(0)) : ve._f.onChange && ve._f.onChange(M);
        const ie = he(V, E, m, !1),
          k = !Ar(ie) || F;
        if ((!m && v.values.next({ name: V, type: M.type, values: { ...f } }), y))
          return (
            N.isValid && (i.mode === 'onBlur' && m ? J() : m || J()), k && v.state.next({ name: V, ...(F ? {} : ie) })
          );
        if ((!m && F && v.state.next({ ...a }), i.resolver)) {
          const { errors: q } = await b([V]);
          if ((De(E), te)) {
            const de = sg(a.errors, u, V),
              Te = sg(q, u, de.name || V);
            (ze = Te.error), (V = Te.name), (rt = Ar(q));
          }
        } else
          W([V], !0),
            (ze = (await lg(ve, h.disabled, f, D, i.shouldUseNativeValidation))[V]),
            W([V]),
            De(E),
            te && (ze ? (rt = !1) : N.isValid && (rt = await T(u, !0)));
        te && (ve._f.deps && j(ve._f.deps), Ae(V, rt, ze, ie));
      }
    },
    oe = (M, L) => {
      if (qe(a.errors, L) && M.focus) return M.focus(), 1;
    },
    j = async (M, L = {}) => {
      let V, te;
      const ve = Jl(M);
      if (i.resolver) {
        const xe = await A(Gt(M) ? M : ve);
        (V = Ar(xe)), (te = M ? !ve.some((De) => qe(xe, De)) : V);
      } else
        M
          ? ((te = (
              await Promise.all(
                ve.map(async (xe) => {
                  const De = qe(u, xe);
                  return await T(De && De._f ? { [xe]: De } : De);
                })
              )
            ).every(Boolean)),
            !(!te && !a.isValid) && J())
          : (te = V = await T(u));
      return (
        v.state.next({
          ...(!xn(M) || (N.isValid && V !== a.isValid) ? {} : { name: M }),
          ...(i.resolver || !M ? { isValid: V } : {}),
          errors: a.errors
        }),
        L.shouldFocus && !te && Wl(u, oe, M ? ve : h.mount),
        te
      );
    },
    ne = (M) => {
      const L = { ...(d.mount ? f : s) };
      return Gt(M) ? L : xn(M) ? qe(L, M) : M.map((V) => qe(L, V));
    },
    Ee = (M, L) => ({
      invalid: !!qe((L || a).errors, M),
      isDirty: !!qe((L || a).dirtyFields, M),
      error: qe((L || a).errors, M),
      isValidating: !!qe(a.validatingFields, M),
      isTouched: !!qe((L || a).touchedFields, M)
    }),
    ye = (M) => {
      M && Jl(M).forEach((L) => Jt(a.errors, L)), v.state.next({ errors: M ? a.errors : {} });
    },
    O = (M, L, V) => {
      const te = (qe(u, M, { _f: {} })._f || {}).ref,
        ve = qe(a.errors, M) || {},
        { ref: xe, message: De, type: ze, ...rt } = ve;
      xt(a.errors, M, { ...rt, ...L, ref: te }),
        v.state.next({ name: M, errors: a.errors, isValid: !1 }),
        V && V.shouldFocus && te && te.focus && te.focus();
    },
    je = (M, L) => (Sn(M) ? v.values.subscribe({ next: (V) => M(X(void 0, L), V) }) : X(M, L, !0)),
    Me = (M, L = {}) => {
      for (const V of M ? Jl(M) : h.mount)
        h.mount.delete(V),
          h.array.delete(V),
          L.keepValue || (Jt(u, V), Jt(f, V)),
          !L.keepError && Jt(a.errors, V),
          !L.keepDirty && Jt(a.dirtyFields, V),
          !L.keepTouched && Jt(a.touchedFields, V),
          !L.keepIsValidating && Jt(a.validatingFields, V),
          !i.shouldUnregister && !L.keepDefaultValue && Jt(s, V);
      v.values.next({ values: { ...f } }),
        v.state.next({ ...a, ...(L.keepDirty ? { isDirty: Y() } : {}) }),
        !L.keepIsValid && J();
    },
    Pe = ({ disabled: M, name: L, field: V, fields: te }) => {
      ((Wr(M) && d.mount) || M || h.disabled.has(L)) &&
        (M ? h.disabled.add(L) : h.disabled.delete(L), he(L, Xf(V ? V._f : qe(te, L)._f), !1, !1, !0));
    },
    Re = (M, L = {}) => {
      let V = qe(u, M);
      const te = Wr(L.disabled) || Wr(i.disabled);
      return (
        xt(u, M, { ...(V || {}), _f: { ...(V && V._f ? V._f : { ref: { name: M } }), name: M, mount: !0, ...L } }),
        h.mount.add(M),
        V ? Pe({ field: V, disabled: Wr(L.disabled) ? L.disabled : i.disabled, name: M }) : we(M, !0, L.value),
        {
          ...(te ? { disabled: L.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!L.required,
                min: Yl(L.min),
                max: Yl(L.max),
                minLength: Yl(L.minLength),
                maxLength: Yl(L.maxLength),
                pattern: Yl(L.pattern)
              }
            : {}),
          name: M,
          onChange: z,
          onBlur: z,
          ref: (ve) => {
            if (ve) {
              Re(M, L), (V = qe(u, M));
              const xe = (Gt(ve.value) && ve.querySelectorAll && ve.querySelectorAll('input,select,textarea')[0]) || ve,
                De = qw(xe),
                ze = V._f.refs || [];
              if (De ? ze.find((rt) => rt === xe) : xe === V._f.ref) return;
              xt(u, M, {
                _f: {
                  ...V._f,
                  ...(De
                    ? {
                        refs: [...ze.filter(Yf), xe, ...(Array.isArray(qe(s, M)) ? [{}] : [])],
                        ref: { type: xe.type, name: M }
                      }
                    : { ref: xe })
                }
              }),
                we(M, !1, void 0, xe);
            } else
              (V = qe(u, M, {})),
                V._f && (V._f.mount = !1),
                (i.shouldUnregister || L.shouldUnregister) && !(dy(h.array, M) && d.action) && h.unMount.add(M);
          }
        }
      );
    },
    ke = () => i.shouldFocusError && Wl(u, oe, h.mount),
    B = (M) => {
      Wr(M) &&
        (v.state.next({ disabled: M }),
        Wl(
          u,
          (L, V) => {
            const te = qe(u, V);
            te &&
              ((L.disabled = te._f.disabled || M),
              Array.isArray(te._f.refs) &&
                te._f.refs.forEach((ve) => {
                  ve.disabled = te._f.disabled || M;
                }));
          },
          0,
          !1
        ));
    },
    U = (M, L) => async (V) => {
      let te;
      V && (V.preventDefault && V.preventDefault(), V.persist && V.persist());
      let ve = Er(f);
      if (h.disabled.size) for (const xe of h.disabled) xt(ve, xe, void 0);
      if ((v.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: xe, values: De } = await b();
        (a.errors = xe), (ve = De);
      } else await T(u);
      if ((Jt(a.errors, 'root'), Ar(a.errors))) {
        v.state.next({ errors: {} });
        try {
          await M(ve, V);
        } catch (xe) {
          te = xe;
        }
      } else L && (await L({ ...a.errors }, V)), ke(), setTimeout(ke);
      if (
        (v.state.next({
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
    Q = (M, L = {}) => {
      qe(u, M) &&
        (Gt(L.defaultValue) ? $(M, Er(qe(s, M))) : ($(M, L.defaultValue), xt(s, M, Er(L.defaultValue))),
        L.keepTouched || Jt(a.touchedFields, M),
        L.keepDirty || (Jt(a.dirtyFields, M), (a.isDirty = L.defaultValue ? Y(M, Er(qe(s, M))) : Y())),
        L.keepError || (Jt(a.errors, M), N.isValid && J()),
        v.state.next({ ...a }));
    },
    se = (M, L = {}) => {
      const V = M ? Er(M) : s,
        te = Er(V),
        ve = Ar(M),
        xe = ve ? s : te;
      if ((L.keepDefaultValues || (s = V), !L.keepValues)) {
        if (L.keepDirtyValues) {
          const De = new Set([...h.mount, ...Object.keys($l(s, f))]);
          for (const ze of Array.from(De)) qe(a.dirtyFields, ze) ? xt(xe, ze, qe(f, ze)) : $(ze, qe(xe, ze));
        } else {
          if (Sd && Gt(M))
            for (const De of h.mount) {
              const ze = qe(u, De);
              if (ze && ze._f) {
                const rt = Array.isArray(ze._f.refs) ? ze._f.refs[0] : ze._f.ref;
                if (Zs(rt)) {
                  const E = rt.closest('form');
                  if (E) {
                    E.reset();
                    break;
                  }
                }
              }
            }
          u = {};
        }
        (f = i.shouldUnregister ? (L.keepDefaultValues ? Er(s) : {}) : Er(xe)),
          v.array.next({ values: { ...xe } }),
          v.values.next({ values: { ...xe } });
      }
      (h = {
        mount: L.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: ''
      }),
        (d.mount = !N.isValid || !!L.keepIsValid || !!L.keepDirtyValues),
        (d.watch = !!i.shouldUnregister),
        v.state.next({
          submitCount: L.keepSubmitCount ? a.submitCount : 0,
          isDirty: ve ? !1 : L.keepDirty ? a.isDirty : !!(L.keepDefaultValues && !Ai(M, s)),
          isSubmitted: L.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: ve
            ? {}
            : L.keepDirtyValues
              ? L.keepDefaultValues && f
                ? $l(s, f)
                : a.dirtyFields
              : L.keepDefaultValues && M
                ? $l(s, M)
                : L.keepDirty
                  ? a.dirtyFields
                  : {},
          touchedFields: L.keepTouched ? a.touchedFields : {},
          errors: L.keepErrors ? a.errors : {},
          isSubmitSuccessful: L.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
          isSubmitting: !1
        });
    },
    re = (M, L) => se(Sn(M) ? M(f) : M, L);
  return {
    control: {
      register: Re,
      unregister: Me,
      getFieldState: Ee,
      handleSubmit: U,
      setError: O,
      _executeSchema: b,
      _getWatch: X,
      _getDirty: Y,
      _updateValid: J,
      _removeUnmounted: G,
      _updateFieldArray: H,
      _updateDisabledField: Pe,
      _getFieldArray: Z,
      _reset: se,
      _resetDefaultValues: () =>
        Sn(i.defaultValues) &&
        i.defaultValues().then((M) => {
          re(M, i.resetOptions), v.state.next({ isLoading: !1 });
        }),
      _updateFormState: (M) => {
        a = { ...a, ...M };
      },
      _disableForm: B,
      _subjects: v,
      _proxyFormState: N,
      _setErrors: Le,
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
    trigger: j,
    register: Re,
    handleSubmit: U,
    watch: je,
    setValue: $,
    getValues: ne,
    reset: re,
    resetField: Q,
    clearErrors: ye,
    unregister: Me,
    setError: O,
    setFocus: (M, L = {}) => {
      const V = qe(u, M),
        te = V && V._f;
      if (te) {
        const ve = te.refs ? te.refs[0] : te.ref;
        ve.focus && (ve.focus(), L.shouldSelect && Sn(ve.select) && ve.select());
      }
    },
    getFieldState: Ee
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
    Ed({
      subject: f._subjects.state,
      next: (d) => {
        py(d, f._proxyFormState, f._updateFormState, !0) && s({ ...f._formState });
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
    (i.current.formState = my(u, f)),
    i.current
  );
}
const cg = (r, i, a) => {
    if (r && 'reportValidity' in r) {
      const u = qe(a, i);
      r.setCustomValidity((u && u.message) || ''), r.reportValidity();
    }
  },
  Ny = (r, i) => {
    for (const a in i.fields) {
      const u = i.fields[a];
      u && u.ref && 'reportValidity' in u.ref ? cg(u.ref, a, r) : u && u.refs && u.refs.forEach((s) => cg(s, a, r));
    }
  },
  Yw = (r, i) => {
    i.shouldUseNativeValidation && Ny(r, i);
    const a = {};
    for (const u in r) {
      const s = qe(i.fields, u),
        f = Object.assign(r[u] || {}, { ref: s && s.ref });
      if (Xw(i.names || Object.keys(r), u)) {
        const d = Object.assign({}, qe(a, u));
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
                ).then(function (g) {
                  return (
                    f.shouldUseNativeValidation && Ny({}, f), { values: a.raw ? Object.assign({}, u) : g, errors: {} }
                  );
                }));
            } catch (g) {
              return h(g);
            }
            return p && p.then ? p.then(void 0, h) : p;
          })(0, function (d) {
            if (!d.inner) throw d;
            return {
              values: {},
              errors: Yw(
                ((h = d),
                (p = !f.shouldUseNativeValidation && f.criteriaMode === 'all'),
                (h.inner || []).reduce(function (g, N) {
                  if ((g[N.path] || (g[N.path] = { message: N.message, type: N.type }), p)) {
                    var v = g[N.path].types,
                      S = v && v[N.type];
                    g[N.path] = vy(N.path, p, g, N.type, S ? [].concat(S, N.message) : N.message);
                  }
                  return g;
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
var Kf, og;
function Kw() {
  if (og) return Kf;
  og = 1;
  function r(W) {
    (this._maxSize = W), this.clear();
  }
  (r.prototype.clear = function () {
    (this._size = 0), (this._values = Object.create(null));
  }),
    (r.prototype.get = function (W) {
      return this._values[W];
    }),
    (r.prototype.set = function (W, H) {
      return this._size >= this._maxSize && this.clear(), W in this._values || this._size++, (this._values[W] = H);
    });
  var i = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    a = /^\d+$/,
    u = /^\d/,
    s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    f = /^\s*(['"]?)(.*?)(\1)\s*$/,
    d = 512,
    h = new r(d),
    p = new r(d),
    g = new r(d);
  Kf = {
    Cache: r,
    split: v,
    normalizePath: N,
    setter: function (W) {
      var H = N(W);
      return (
        p.get(W) ||
        p.set(W, function (Le, we) {
          for (var he = 0, Ae = H.length, b = Le; he < Ae - 1; ) {
            var A = H[he];
            if (A === '__proto__' || A === 'constructor' || A === 'prototype') return Le;
            b = b[H[he++]];
          }
          b[H[he]] = we;
        })
      );
    },
    getter: function (W, H) {
      var Se = N(W);
      return (
        g.get(W) ||
        g.set(W, function (we) {
          for (var he = 0, Ae = Se.length; he < Ae; )
            if (we != null || !H) we = we[Se[he++]];
            else return;
          return we;
        })
      );
    },
    join: function (W) {
      return W.reduce(function (H, Se) {
        return H + (w(Se) || a.test(Se) ? '[' + Se + ']' : (H ? '.' : '') + Se);
      }, '');
    },
    forEach: function (W, H, Se) {
      S(Array.isArray(W) ? W : v(W), H, Se);
    }
  };
  function N(W) {
    return (
      h.get(W) ||
      h.set(
        W,
        v(W).map(function (H) {
          return H.replace(f, '$2');
        })
      )
    );
  }
  function v(W) {
    return W.match(i) || [''];
  }
  function S(W, H, Se) {
    var Le = W.length,
      we,
      he,
      Ae,
      b;
    for (he = 0; he < Le; he++)
      (we = W[he]),
        we &&
          (J(we) && (we = '"' + we + '"'), (b = w(we)), (Ae = !b && /^\d+$/.test(we)), H.call(Se, we, b, Ae, he, W));
  }
  function w(W) {
    return typeof W == 'string' && W && ["'", '"'].indexOf(W.charAt(0)) !== -1;
  }
  function D(W) {
    return W.match(u) && !W.match(a);
  }
  function P(W) {
    return s.test(W);
  }
  function J(W) {
    return !w(W) && (D(W) || P(W));
  }
  return Kf;
}
var ta = Kw(),
  Zf,
  fg;
function Zw() {
  if (fg) return Zf;
  fg = 1;
  const r =
      /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    i = (N) => N.match(r) || [],
    a = (N) => N[0].toUpperCase() + N.slice(1),
    u = (N, v) => i(N).join(v).toLowerCase(),
    s = (N) => i(N).reduce((v, S) => `${v}${v ? S[0].toUpperCase() + S.slice(1).toLowerCase() : S.toLowerCase()}`, '');
  return (
    (Zf = {
      words: i,
      upperFirst: a,
      camelCase: s,
      pascalCase: (N) => a(s(N)),
      snakeCase: (N) => u(N, '_'),
      kebabCase: (N) => u(N, '-'),
      sentenceCase: (N) => a(u(N, ' ')),
      titleCase: (N) => i(N).map(a).join(' ')
    }),
    Zf
  );
}
var Qf = Zw(),
  Bs = { exports: {} },
  dg;
function Qw() {
  if (dg) return Bs.exports;
  (dg = 1),
    (Bs.exports = function (s) {
      return r(i(s), s);
    }),
    (Bs.exports.array = r);
  function r(s, f) {
    var d = s.length,
      h = new Array(d),
      p = {},
      g = d,
      N = a(f),
      v = u(s);
    for (
      f.forEach(function (w) {
        if (!v.has(w[0]) || !v.has(w[1]))
          throw new Error('Unknown node. There is an unknown node in the supplied edges.');
      });
      g--;

    )
      p[g] || S(s[g], g, new Set());
    return h;
    function S(w, D, P) {
      if (P.has(w)) {
        var J;
        try {
          J = ', node was:' + JSON.stringify(w);
        } catch {
          J = '';
        }
        throw new Error('Cyclic dependency' + J);
      }
      if (!v.has(w))
        throw new Error(
          'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(w)
        );
      if (!p[D]) {
        p[D] = !0;
        var W = N.get(w) || new Set();
        if (((W = Array.from(W)), (D = W.length))) {
          P.add(w);
          do {
            var H = W[--D];
            S(H, v.get(H), P);
          } while (D);
          P.delete(w);
        }
        h[--d] = w;
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
  return Bs.exports;
}
var Pw = Qw();
const Jw = ru(Pw),
  Ww = Object.prototype.toString,
  eE = Error.prototype.toString,
  tE = RegExp.prototype.toString,
  rE = typeof Symbol < 'u' ? Symbol.prototype.toString : () => '',
  nE = /^Symbol\((.*)\)(.*)$/;
function iE(r) {
  return r != +r ? 'NaN' : r === 0 && 1 / r < 0 ? '-0' : '' + r;
}
function hg(r, i = !1) {
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
  let a = hg(r, i);
  return a !== null
    ? a
    : JSON.stringify(
        r,
        function (u, s) {
          let f = hg(this[u], i);
          return f !== null ? f : s;
        },
        2
      );
}
function _y(r) {
  return r == null ? [] : [].concat(r);
}
let Ty,
  Oy,
  My,
  aE = /\$\{\s*(\w+)\s*\}/g;
Ty = Symbol.toStringTag;
class mg {
  constructor(i, a, u, s) {
    (this.name = void 0),
      (this.message = void 0),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = void 0),
      (this.inner = void 0),
      (this[Ty] = 'Error'),
      (this.name = 'ValidationError'),
      (this.value = a),
      (this.path = u),
      (this.type = s),
      (this.errors = []),
      (this.inner = []),
      _y(i).forEach((f) => {
        if (_r.isError(f)) {
          this.errors.push(...f.errors);
          const d = f.inner.length ? f.inner : [f];
          this.inner.push(...d);
        } else this.errors.push(f);
      }),
      (this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]);
  }
}
Oy = Symbol.hasInstance;
My = Symbol.toStringTag;
class _r extends Error {
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
    const d = new mg(i, a, u, s);
    if (f) return d;
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = []),
      (this.inner = []),
      (this[My] = 'Error'),
      (this.name = d.name),
      (this.message = d.message),
      (this.type = d.type),
      (this.value = d.value),
      (this.path = d.path),
      (this.errors = d.errors),
      (this.inner = d.inner),
      Error.captureStackTrace && Error.captureStackTrace(this, _r);
  }
  static [Oy](i) {
    return mg[Symbol.hasInstance](i) || super[Symbol.hasInstance](i);
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
  ad = { min: '${path} field must be later than ${min}', max: '${path} field must be at earlier than ${max}' },
  ld = { isValue: '${path} field must be ${value}' },
  Is = {
    noUnknown: '${path} field has unspecified keys: ${unknown}',
    exact: '${path} object contains unknown properties: ${properties}'
  },
  qs = {
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
      return _r.formatError(vn.notType, r);
    }
  };
Object.assign(Object.create(null), {
  mixed: vn,
  string: xr,
  number: wi,
  date: ad,
  object: Is,
  array: qs,
  boolean: ld,
  tuple: lE
});
const oc = (r) => r && r.__isYupSchema__;
class Js {
  static fromOptions(i, a) {
    if (!a.then && !a.otherwise)
      throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let { is: u, then: s, otherwise: f } = a,
      d = typeof u == 'function' ? u : (...h) => h.every((p) => p === u);
    return new Js(i, (h, p) => {
      var g;
      let N = d(...h) ? s : f;
      return (g = N == null ? void 0 : N(p)) != null ? g : p;
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
    if (!oc(s)) throw new TypeError('conditions must return a schema object');
    return s.resolve(a);
  }
}
const Cs = { context: '$', value: '.' };
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
    (this.isContext = this.key[0] === Cs.context),
      (this.isValue = this.key[0] === Cs.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let u = this.isContext ? Cs.context : this.isValue ? Cs.value : '';
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
    const { name: g, test: N, params: v, message: S, skipAbsent: w } = r;
    let {
      parent: D,
      context: P,
      abortEarly: J = d.spec.abortEarly,
      disableStackTrace: W = d.spec.disableStackTrace
    } = s;
    function H(G) {
      return aa.isRef(G) ? G.getValue(a, D, P) : G;
    }
    function Se(G = {}) {
      const Y = Object.assign(
        {
          value: a,
          originalValue: f,
          label: d.spec.label,
          path: G.path || u,
          spec: d.spec,
          disableStackTrace: G.disableStackTrace || W
        },
        v,
        G.params
      );
      for (const Z of Object.keys(Y)) Y[Z] = H(Y[Z]);
      const X = new _r(_r.formatError(G.message || S, Y), a, Y.path, G.type || g, Y.disableStackTrace);
      return (X.params = Y), X;
    }
    const Le = J ? h : p;
    let we = {
      path: u,
      parent: D,
      type: g,
      from: s.from,
      createError: Se,
      resolve: H,
      options: s,
      originalValue: f,
      schema: d
    };
    const he = (G) => {
        _r.isError(G) ? Le(G) : G ? p(null) : Le(Se());
      },
      Ae = (G) => {
        _r.isError(G) ? Le(G) : h(G);
      };
    if (w && sn(a)) return he(!0);
    let A;
    try {
      var T;
      if (((A = N.call(we, a, we)), typeof ((T = A) == null ? void 0 : T.then) == 'function')) {
        if (s.sync)
          throw new Error(
            `Validation test of type: "${we.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
          );
        return Promise.resolve(A).then(he, Ae);
      }
    } catch (G) {
      Ae(G);
      return;
    }
    he(A);
  }
  return (i.OPTIONS = r), i;
}
function uE(r, i, a, u = a) {
  let s, f, d;
  return i
    ? (ta.forEach(i, (h, p, g) => {
        let N = p ? h.slice(1, h.length - 1) : h;
        r = r.resolve({ context: u, parent: s, value: a });
        let v = r.type === 'tuple',
          S = g ? parseInt(N, 10) : 0;
        if (r.innerType || v) {
          if (v && !g)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${d}" must contain an index to the tuple element, e.g. "${d}[0]"`
            );
          if (a && S >= a.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${h}, in the path: ${i}. because there is no value at that index. `
            );
          (s = a), (a = a && a[S]), (r = v ? r.spec.types[S] : r.innerType);
        }
        if (!g) {
          if (!r.fields || !r.fields[N])
            throw new Error(
              `The schema does not contain the path: ${i}. (failed at: ${d} which is a type: "${r.type}")`
            );
          (s = a), (a = a && a[N]), (r = r.fields[N]);
        }
        (f = N), (d = p ? '[' + h + ']' : '.' + h);
      }),
      { schema: r, parent: s, parentPath: f })
    : { parent: s, parentPath: i, schema: r };
}
class Ws extends Set {
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
    return new Ws(this.values());
  }
  merge(i, a) {
    const u = this.clone();
    return i.forEach((s) => u.add(s)), a.forEach((s) => u.delete(s)), u;
  }
}
function Va(r, i = new Map()) {
  if (oc(r) || !r || typeof r != 'object') return r;
  if (i.has(r)) return i.get(r);
  let a;
  if (r instanceof Date) (a = new Date(r.getTime())), i.set(r, a);
  else if (r instanceof RegExp) (a = new RegExp(r)), i.set(r, a);
  else if (Array.isArray(r)) {
    (a = new Array(r.length)), i.set(r, a);
    for (let u = 0; u < r.length; u++) a[u] = Va(r[u], i);
  } else if (r instanceof Map) {
    (a = new Map()), i.set(r, a);
    for (const [u, s] of r.entries()) a.set(u, Va(s, i));
  } else if (r instanceof Set) {
    (a = new Set()), i.set(r, a);
    for (const u of r) a.add(Va(u, i));
  } else if (r instanceof Object) {
    (a = {}), i.set(r, a);
    for (const [u, s] of Object.entries(r)) a[u] = Va(s, i);
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
      (this._whitelist = new Ws()),
      (this._blacklist = new Ws()),
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
      (a.spec = Va(Object.assign({}, this.spec, i))),
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
    let g = [];
    for (let N of Object.values(this.internalTests)) N && g.push(N);
    this.runTests({ path: f, value: p, originalValue: d, options: a, tests: g }, u, (N) => {
      if (N.length) return s(N, p);
      this.runTests({ path: f, value: p, originalValue: d, options: a, tests: this.tests }, u, s);
    });
  }
  runTests(i, a, u) {
    let s = !1,
      { tests: f, value: d, originalValue: h, path: p, options: g } = i,
      N = (P) => {
        s || ((s = !0), a(P, d));
      },
      v = (P) => {
        s || ((s = !0), u(P, d));
      },
      S = f.length,
      w = [];
    if (!S) return v([]);
    let D = { value: d, originalValue: h, path: p, options: g, schema: this };
    for (let P = 0; P < f.length; P++) {
      const J = f[P];
      J(D, N, function (H) {
        H && (Array.isArray(H) ? w.push(...H) : w.push(H)), --S <= 0 && v(w);
      });
    }
  }
  asNestedTest({ key: i, index: a, parent: u, parentPath: s, originalParent: f, options: d }) {
    const h = i ?? a;
    if (h == null) throw TypeError('Must include `key` or `index` for nested validations');
    const p = typeof h == 'number';
    let g = u[h];
    const N = Object.assign({}, d, {
      strict: !0,
      parent: u,
      value: g,
      originalValue: f[h],
      key: void 0,
      [p ? 'index' : 'key']: h,
      path: p || h.includes('.') ? `${s || ''}[${p ? h : `"${h}"`}]` : (s ? `${s}.` : '') + i
    });
    return (v, S, w) => this.resolve(N)._validate(g, N, S, w);
  }
  validate(i, a) {
    var u;
    let s = this.resolve(Object.assign({}, a, { value: i })),
      f = (u = a == null ? void 0 : a.disableStackTrace) != null ? u : s.spec.disableStackTrace;
    return new Promise((d, h) =>
      s._validate(
        i,
        a,
        (p, g) => {
          _r.isError(p) && (p.value = g), h(p);
        },
        (p, g) => {
          p.length ? h(new _r(p, g, void 0, void 0, f)) : d(g);
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
          throw (_r.isError(h) && (h.value = p), h);
        },
        (h, p) => {
          if (h.length) throw new _r(h, i, void 0, void 0, d);
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
        if (_r.isError(u)) return !1;
        throw u;
      }
    );
  }
  isValidSync(i, a) {
    try {
      return this.validateSync(i, a), !0;
    } catch (u) {
      if (_r.isError(u)) return !1;
      throw u;
    }
  }
  _getDefault(i) {
    let a = this.spec.default;
    return a == null ? a : typeof a == 'function' ? a.call(this, i) : Va(a);
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
      s = _y(i).map((f) => new aa(f));
    return (
      s.forEach((f) => {
        f.isSibling && u.deps.push(f.key);
      }),
      u.conditions.push(typeof a == 'function' ? new Js(s, a) : Js.fromOptions(s, a)),
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
        .filter((p, g, N) => N.findIndex((v) => v.name === p.name) === g)
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
function Ry() {
  return new By();
}
class By extends jr {
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
  isTrue(i = ld.isValue) {
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
  isFalse(i = ld.isValue) {
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
Ry.prototype = By.prototype;
const sE =
  /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function cE(r) {
  const i = ud(r);
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
function ud(r) {
  var i, a;
  const u = sE.exec(r);
  return u
    ? {
        year: Fn(u[1]),
        month: Fn(u[2], 1) - 1,
        day: Fn(u[3], 1),
        hour: Fn(u[4]),
        minute: Fn(u[5]),
        second: Fn(u[6]),
        millisecond: u[7] ? Fn(u[7].substring(0, 3)) : 0,
        precision: (i = (a = u[7]) == null ? void 0 : a.length) != null ? i : void 0,
        z: u[8] || void 0,
        plusMinus: u[9] || void 0,
        hourOffset: Fn(u[10]),
        minuteOffset: Fn(u[11])
      }
    : null;
}
function Fn(r, i = 0) {
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
  gE = new RegExp(`${hE}T${mE}(\\.\\d+)?${pE}$`),
  yE = (r) => sn(r) || r === r.trim(),
  vE = {}.toString();
function We() {
  return new Cy();
}
class Cy extends jr {
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
      this.matches(gE, { name: 'datetime', message: a || xr.datetime, excludeEmptyString: !0 })
        .test({
          name: 'datetime_offset',
          message: a || xr.datetime_offset,
          params: { allowOffset: u },
          skipAbsent: !0,
          test: (f) => {
            if (!f || u) return !0;
            const d = ud(f);
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
            const d = ud(f);
            return d ? d.precision === s : !1;
          }
        })
    );
  }
  ensure() {
    return this.default('').transform((i) => (i === null ? '' : i));
  }
  trim(i = xr.trim) {
    return this.transform((a) => (a != null ? a.trim() : a)).test({ message: i, name: 'trim', test: yE });
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
We.prototype = Cy.prototype;
let bE = (r) => r != +r;
function lt() {
  return new Dy();
}
class Dy extends jr {
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
lt.prototype = Dy.prototype;
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
  min(i, a = ad.min) {
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
  max(i, a = ad.max) {
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
    u.add(d), aa.isRef(h) && h.isSibling ? f(h.path, d) : oc(h) && 'deps' in h && h.deps.forEach((p) => f(p, d));
  }
  return Jw.array(Array.from(u), a).reverse();
}
function pg(r, i) {
  let a = 1 / 0;
  return (
    r.some((u, s) => {
      var f;
      if ((f = i.path) != null && f.includes(u)) return (a = s), !0;
    }),
    a
  );
}
function Uy(r) {
  return (i, a) => pg(r, i) - pg(r, a);
}
const jy = (r, i, a) => {
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
let gg = (r) => Object.prototype.toString.call(r) === '[object Object]';
function yg(r, i) {
  let a = Object.keys(r.fields);
  return Object.keys(i).filter((u) => a.indexOf(u) === -1);
}
const AE = Uy([]);
function vt(r) {
  return new ky(r);
}
class ky extends jr {
  constructor(i) {
    super({
      type: 'object',
      check(a) {
        return gg(a) || typeof a == 'function';
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
        Object.keys(s).filter((v) => !this._nodes.includes(v))
      ),
      p = {},
      g = Object.assign({}, a, { parent: p, __validating: a.__validating || !1 }),
      N = !1;
    for (const v of h) {
      let S = f[v],
        w = v in s;
      if (S) {
        let D,
          P = s[v];
        (g.path = (a.path ? `${a.path}.` : '') + v), (S = S.resolve({ value: P, context: a.context, parent: p }));
        let J = S instanceof jr ? S.spec : void 0,
          W = J == null ? void 0 : J.strict;
        if (J != null && J.strip) {
          N = N || v in s;
          continue;
        }
        (D = !a.__validating || !W ? S.cast(s[v], g) : s[v]), D !== void 0 && (p[v] = D);
      } else w && !d && (p[v] = s[v]);
      (w !== v in p || p[v] !== s[v]) && (N = !0);
    }
    return N ? p : s;
  }
  _validate(i, a = {}, u, s) {
    let { from: f = [], originalValue: d = i, recursive: h = this.spec.recursive } = a;
    (a.from = [{ schema: this, value: d }, ...f]),
      (a.__validating = !0),
      (a.originalValue = d),
      super._validate(i, a, u, (p, g) => {
        if (!h || !gg(g)) {
          s(p, g);
          return;
        }
        d = d || g;
        let N = [];
        for (let v of this._nodes) {
          let S = this.fields[v];
          !S ||
            aa.isRef(S) ||
            N.push(S.asNestedTest({ options: a, key: v, parent: g, parentPath: a.path, originalParent: d }));
        }
        this.runTests({ tests: N, value: g, originalValue: d, options: a }, u, (v) => {
          s(v.sort(this._sortErrors).concat(p), g);
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
    return (u.fields = i), (u._nodes = wE(i, a)), (u._sortErrors = Uy(Object.keys(i))), a && (u._excludedEdges = a), u;
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
    return this.transform(jy);
  }
  exact(i) {
    return this.test({
      name: 'exact',
      exclusive: !0,
      message: i || Is.exact,
      test(a) {
        if (a == null) return !0;
        const u = yg(this.schema, a);
        return u.length === 0 || this.createError({ params: { properties: u.join(', ') } });
      }
    });
  }
  stripUnknown() {
    return this.clone({ noUnknown: !0 });
  }
  noUnknown(i = !0, a = Is.noUnknown) {
    typeof i != 'boolean' && ((a = i), (i = !0));
    let u = this.test({
      name: 'noUnknown',
      exclusive: !0,
      message: a,
      test(s) {
        if (s == null) return !0;
        const f = yg(this.schema, s);
        return !i || f.length === 0 || this.createError({ params: { unknown: f.join(', ') } });
      }
    });
    return (u.spec.noUnknown = i), u;
  }
  unknown(i = !0, a = Is.noUnknown) {
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
    return this.transformKeys(Qf.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Qf.snakeCase);
  }
  constantCase() {
    return this.transformKeys((i) => Qf.snakeCase(i).toUpperCase());
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
vt.prototype = ky.prototype;
function Iy(r) {
  return new qy(r);
}
class qy extends jr {
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
      super._validate(i, a, u, (p, g) => {
        var N;
        if (!h || !d || !this._typeCheck(g)) {
          s(p, g);
          return;
        }
        let v = new Array(g.length);
        for (let w = 0; w < g.length; w++) {
          var S;
          v[w] = d.asNestedTest({
            options: a,
            index: w,
            parent: g,
            parentPath: a.path,
            originalParent: (S = a.originalValue) != null ? S : i
          });
        }
        this.runTests(
          { value: g, tests: v, originalValue: (N = a.originalValue) != null ? N : i, options: a },
          u,
          (w) => s(w.concat(p), g)
        );
      });
  }
  clone(i) {
    const a = super.clone(i);
    return (a.innerType = this.innerType), a;
  }
  json() {
    return this.transform(jy);
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
    if (!oc(i)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + Yn(i));
    return (a.innerType = i), (a.spec = Object.assign({}, a.spec, { types: i })), a;
  }
  length(i, a = qs.length) {
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
      (a = a || qs.min),
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
      (a = a || qs.max),
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
Iy.prototype = qy.prototype;
const Ce = ({ label: r, labelDesc: i, children: a, error: u, required: s }) =>
    _.jsxs('label', {
      className: 'flex flex-col gap-1',
      children: [
        _.jsxs('span', {
          className: 'text-sm text-gray-500',
          children: [
            s && _.jsx('span', { className: 'text-red-500', children: '*' }),
            r,
            i && _.jsxs('span', { children: ['(', i, ')'] })
          ]
        }),
        a,
        u && _.jsx('span', { className: 'text-sm text-red-500', children: u.message })
      ]
    }),
  NE = [
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
      const p = r.some((g) => g.equals(h));
      i(p ? r.filter((g) => !g.equals(h)) : [...r, h]);
    };
  return _.jsx('div', {
    className: 'flex flex-col gap-1 max-h-80 overflow-y-auto p-2 border rounded',
    children: NE.map((f) =>
      _.jsxs(
        'div',
        {
          children: [
            _.jsx('div', { className: 'font-bold mt-1', children: f.name }),
            _.jsx('div', {
              className: 'ml-4',
              children: f.networks.map((d) =>
                _.jsxs(
                  'label',
                  {
                    className: 'flex items-center gap-2',
                    children: [
                      _.jsx('input', {
                        type: a ? 'radio' : 'checkbox',
                        checked: u(f.chain, d.network),
                        onChange: () => s(f.chain, d.network)
                      }),
                      _.jsxs('span', { children: [d.name, ' (', f.chain.toString(), '_', d.network.toString(), ')'] })
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
function _i({ selectedAssetTypes: r, onChange: i, singleSelect: a }) {
  const u = (s) => {
    if (a) {
      i([s]);
      return;
    }
    r.includes(s) ? i(r.filter((f) => f !== s)) : i([...r, s]);
  };
  return _.jsx('div', {
    className: 'flex flex-col gap-1 max-h-40 overflow-y-auto p-2 border rounded',
    children: Object.entries(Pi)
      .filter(([s]) => isNaN(Number(s)))
      .map(([s, f]) =>
        _.jsxs(
          'label',
          {
            className: 'flex items-center gap-2',
            children: [
              _.jsx('input', {
                type: a ? 'radio' : 'checkbox',
                checked: r.includes(Number(f)),
                onChange: () => u(Number(f))
              }),
              _.jsxs('span', { children: [s, ' (', f, ')'] })
            ]
          },
          f
        )
      )
  });
}
const _E = vt({
  chainIds: vt().nullable(),
  chainAssetTypes: vt().nullable(),
  limit: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  offset: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  orderBy: We()
});
function TE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [g, N] = le.useState([]),
    {
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = Ut({ resolver: jt(_E) }),
    D = S(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = {
          chainIds: g.length > 0 ? g : void 0,
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
  return _.jsx(Ct, {
    title: 'GetAssets',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: w.chainIds,
          children: _.jsx(Kn, { selectedChainIds: g, onChange: N })
        }),
        _.jsx(Ce, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: w.chainAssetTypes,
          children: _.jsx(_i, { selectedAssetTypes: h, onChange: p })
        }),
        _.jsx(Ce, {
          label: 'Limit',
          error: w.limit,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('limit') })
        }),
        _.jsx(Ce, {
          label: 'Offset',
          error: w.offset,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('offset') })
        }),
        _.jsx(Ce, {
          label: 'OrderBy',
          error: w.orderBy,
          children: _.jsx('input', { type: 'text', className: 'input', ...v('orderBy') })
        }),
        _.jsx('button', { className: 'btn', onClick: D, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
      formState: { errors: g }
    } = Ut({ resolver: jt(OE) }),
    N = p(async (v) => {
      a(!0), s(null), d('');
      try {
        const S = { assetId: v.assetId, tokenAddress: v.tokenAddress };
        s(await r.getAsset(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetAsset',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'AssetId',
          error: g.assetId,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('assetId') })
        }),
        _.jsx(Ce, {
          label: 'TokenAddress',
          error: g.tokenAddress,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('tokenAddress') })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
  limit: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  offset: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  orderBy: We()
});
function BE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [g, N] = le.useState([]),
    {
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = Ut({ resolver: jt(RE) }),
    D = S(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = {
          chainIds: g.length > 0 ? g : void 0,
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
  return _.jsx(Ct, {
    title: 'GetMarkets',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: w.chainIds,
          children: _.jsx(Kn, { selectedChainIds: g, onChange: N })
        }),
        _.jsx(Ce, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: w.chainAssetTypes,
          children: _.jsx(_i, { selectedAssetTypes: h, onChange: p })
        }),
        _.jsx(Ce, {
          label: 'BaseAssetId',
          error: w.baseAssetId,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('baseAssetId') })
        }),
        _.jsx(Ce, {
          label: 'QuoteAssetId',
          error: w.quoteAssetId,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('quoteAssetId') })
        }),
        _.jsx(Ce, {
          label: 'Limit',
          error: w.limit,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('limit') })
        }),
        _.jsx(Ce, {
          label: 'Offset',
          error: w.offset,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('offset') })
        }),
        _.jsx(Ce, {
          label: 'OrderBy',
          error: w.orderBy,
          children: _.jsx('input', { type: 'text', className: 'input', ...v('orderBy') })
        }),
        _.jsx('button', { className: 'btn', onClick: D, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
      formState: { errors: g }
    } = Ut({ resolver: jt(CE) }),
    N = p(async (v) => {
      a(!0), s(null), d('');
      try {
        const S = BigInt(v.marketId);
        s(await r.getMarket(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetMarket',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: g.marketId,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
    [g, N] = le.useState([]),
    {
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = Ut({ resolver: jt(UE) }),
    D = S(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = {
          marketId: P.marketId ? BigInt(P.marketId) : void 0,
          chainIds: g.length > 0 ? g : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0
        };
        s(await r.getMarkets24HrTicker(J));
      } catch (J) {
        d(J.message ?? JSON.stringify(J));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetMarkets24HrTicker',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: w.marketId,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('marketId') })
        }),
        _.jsx(Ce, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: w.chainIds,
          children: _.jsx(Kn, { selectedChainIds: g, onChange: N })
        }),
        _.jsx(Ce, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: w.chainAssetTypes,
          children: _.jsx(_i, { selectedAssetTypes: h, onChange: p })
        }),
        _.jsx('button', { className: 'btn', onClick: D, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
    [g, N] = le.useState([]),
    {
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = Ut({ resolver: jt(kE) }),
    D = S(async (P) => {
      a(!0), s(null), d('');
      try {
        const J = {
          marketId: P.marketId ? BigInt(P.marketId) : void 0,
          chainIds: g.length > 0 ? g : void 0,
          chainAssetTypes: h.length > 0 ? h : void 0
        };
        s(await r.getMarkets24HrTickerExtended(J));
      } catch (J) {
        d(J.message ?? JSON.stringify(J));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetMarkets24HrTickerExtended',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: w.marketId,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('marketId') })
        }),
        _.jsx(Ce, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: w.chainIds,
          children: _.jsx(Kn, { selectedChainIds: g, onChange: N })
        }),
        _.jsx(Ce, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: w.chainAssetTypes,
          children: _.jsx(_i, { selectedAssetTypes: h, onChange: p })
        }),
        _.jsx('button', { className: 'btn', onClick: D, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const qE = vt({ marketId: We() });
function LE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = Ut({ resolver: jt(qE) }),
    N = p(async (v) => {
      a(!0), s(null), d('');
      try {
        const S = v.marketId ? BigInt(v.marketId) : void 0;
        s(await r.getMarketsSwapInfo(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetMarketsSwapInfo',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: g.marketId,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const zE = vt({
  marketId: We().required(),
  tickSpace: lt()
    .oneOf(
      Object.keys(Ga)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  limit: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  offset: lt()
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
      handleSubmit: g,
      formState: { errors: N }
    } = Ut({ resolver: jt(zE) }),
    v = g(async (S) => {
      a(!0), s(null), d('');
      try {
        const w = {
          marketId: BigInt(S.marketId),
          tickSpace: S.tickSpace,
          limit: S.limit ?? void 0,
          offset: S.offset ?? void 0,
          orderBy: S.orderBy || void 0
        };
        s(await r.getMarketKline(w));
      } catch (w) {
        d(w.message ?? JSON.stringify(w));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetMarketKline',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: N.marketId,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx(Ce, {
          label: 'TickSpace',
          error: N.tickSpace,
          required: !0,
          children: _.jsx(cr, {
            name: 'tickSpace',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Ga)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'getMarketKline-tickSpace',
                            type: 'radio',
                            checked: S.value === Number(Ga[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Ga[w]));
                            }
                          })
                        ]
                      },
                      w
                    )
                  )
              })
          })
        }),
        _.jsx(Ce, {
          label: 'Limit',
          error: N.limit,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        _.jsx(Ce, {
          label: 'Offset',
          error: N.offset,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        _.jsx(Ce, {
          label: 'OrderBy',
          error: N.orderBy,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        _.jsx('button', { className: 'btn', onClick: v, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const VE = vt({
  index: lt()
    .oneOf(
      Object.keys(Fa)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  marketId: We().required(),
  limit: lt().required().min(1).max(100)
});
function FE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = Ut({ defaultValues: { limit: 10 }, resolver: jt(VE) }),
    v = g(async (S) => {
      a(!0), s(null), d('');
      try {
        const w = { index: S.index, marketId: BigInt(S.marketId), limit: S.limit };
        s(await r.getMarketDepth(w));
      } catch (w) {
        d(w.message ?? JSON.stringify(w));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetMarketDepth',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'Index',
          error: N.index,
          required: !0,
          children: _.jsx(cr, {
            name: 'index',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Fa)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'getMarketDepth-index',
                            type: 'radio',
                            checked: S.value === Number(Fa[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Fa[w]));
                            }
                          })
                        ]
                      },
                      w
                    )
                  )
              })
          })
        }),
        _.jsx(Ce, {
          label: 'MarketId',
          error: N.marketId,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx(Ce, {
          label: 'Limit',
          error: N.limit,
          required: !0,
          children: _.jsx('input', { type: 'number', min: 1, max: 100, className: 'input', ...h('limit') })
        }),
        _.jsx('button', { className: 'btn', onClick: v, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
var zs = { exports: {} },
  GE = zs.exports,
  vg;
function $E() {
  return (
    vg ||
      ((vg = 1),
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
            g = 'day',
            N = 'week',
            v = 'month',
            S = 'quarter',
            w = 'year',
            D = 'date',
            P = 'Invalid Date',
            J = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            W = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            H = {
              name: 'en',
              weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
              months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
              ordinal: function (Z) {
                var I = ['th', 'st', 'nd', 'rd'],
                  R = Z % 100;
                return '[' + Z + (I[(R - 20) % 10] || I[R] || I[0]) + ']';
              }
            },
            Se = function (Z, I, R) {
              var $ = String(Z);
              return !$ || $.length >= I ? Z : '' + Array(I + 1 - $.length).join(R) + Z;
            },
            Le = {
              s: Se,
              z: function (Z) {
                var I = -Z.utcOffset(),
                  R = Math.abs(I),
                  $ = Math.floor(R / 60),
                  z = R % 60;
                return (I <= 0 ? '+' : '-') + Se($, 2, '0') + ':' + Se(z, 2, '0');
              },
              m: function Z(I, R) {
                if (I.date() < R.date()) return -Z(R, I);
                var $ = 12 * (R.year() - I.year()) + (R.month() - I.month()),
                  z = I.clone().add($, v),
                  oe = R - z < 0,
                  j = I.clone().add($ + (oe ? -1 : 1), v);
                return +(-($ + (R - z) / (oe ? z - j : j - z)) || 0);
              },
              a: function (Z) {
                return Z < 0 ? Math.ceil(Z) || 0 : Math.floor(Z);
              },
              p: function (Z) {
                return (
                  { M: v, y: w, w: N, d: g, D, h: p, m: h, s: d, ms: f, Q: S }[Z] ||
                  String(Z || '')
                    .toLowerCase()
                    .replace(/s$/, '')
                );
              },
              u: function (Z) {
                return Z === void 0;
              }
            },
            we = 'en',
            he = {};
          he[we] = H;
          var Ae = '$isDayjsObject',
            b = function (Z) {
              return Z instanceof Y || !(!Z || !Z[Ae]);
            },
            A = function Z(I, R, $) {
              var z;
              if (!I) return we;
              if (typeof I == 'string') {
                var oe = I.toLowerCase();
                he[oe] && (z = oe), R && ((he[oe] = R), (z = oe));
                var j = I.split('-');
                if (!z && j.length > 1) return Z(j[0]);
              } else {
                var ne = I.name;
                (he[ne] = I), (z = ne);
              }
              return !$ && z && (we = z), z || (!$ && we);
            },
            T = function (Z, I) {
              if (b(Z)) return Z.clone();
              var R = typeof I == 'object' ? I : {};
              return (R.date = Z), (R.args = arguments), new Y(R);
            },
            G = Le;
          (G.l = A),
            (G.i = b),
            (G.w = function (Z, I) {
              return T(Z, { locale: I.$L, utc: I.$u, x: I.$x, $offset: I.$offset });
            });
          var Y = (function () {
              function Z(R) {
                (this.$L = A(R.locale, null, !0)), this.parse(R), (this.$x = this.$x || R.x || {}), (this[Ae] = !0);
              }
              var I = Z.prototype;
              return (
                (I.parse = function (R) {
                  (this.$d = (function ($) {
                    var z = $.date,
                      oe = $.utc;
                    if (z === null) return new Date(NaN);
                    if (G.u(z)) return new Date();
                    if (z instanceof Date) return new Date(z);
                    if (typeof z == 'string' && !/Z$/i.test(z)) {
                      var j = z.match(J);
                      if (j) {
                        var ne = j[2] - 1 || 0,
                          Ee = (j[7] || '0').substring(0, 3);
                        return oe
                          ? new Date(Date.UTC(j[1], ne, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, Ee))
                          : new Date(j[1], ne, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, Ee);
                      }
                    }
                    return new Date(z);
                  })(R)),
                    this.init();
                }),
                (I.init = function () {
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
                (I.$utils = function () {
                  return G;
                }),
                (I.isValid = function () {
                  return this.$d.toString() !== P;
                }),
                (I.isSame = function (R, $) {
                  var z = T(R);
                  return this.startOf($) <= z && z <= this.endOf($);
                }),
                (I.isAfter = function (R, $) {
                  return T(R) < this.startOf($);
                }),
                (I.isBefore = function (R, $) {
                  return this.endOf($) < T(R);
                }),
                (I.$g = function (R, $, z) {
                  return G.u(R) ? this[$] : this.set(z, R);
                }),
                (I.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (I.valueOf = function () {
                  return this.$d.getTime();
                }),
                (I.startOf = function (R, $) {
                  var z = this,
                    oe = !!G.u($) || $,
                    j = G.p(R),
                    ne = function (ke, B) {
                      var U = G.w(z.$u ? Date.UTC(z.$y, B, ke) : new Date(z.$y, B, ke), z);
                      return oe ? U : U.endOf(g);
                    },
                    Ee = function (ke, B) {
                      return G.w(
                        z.toDate()[ke].apply(z.toDate('s'), (oe ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(B)),
                        z
                      );
                    },
                    ye = this.$W,
                    O = this.$M,
                    je = this.$D,
                    Me = 'set' + (this.$u ? 'UTC' : '');
                  switch (j) {
                    case w:
                      return oe ? ne(1, 0) : ne(31, 11);
                    case v:
                      return oe ? ne(1, O) : ne(0, O + 1);
                    case N:
                      var Pe = this.$locale().weekStart || 0,
                        Re = (ye < Pe ? ye + 7 : ye) - Pe;
                      return ne(oe ? je - Re : je + (6 - Re), O);
                    case g:
                    case D:
                      return Ee(Me + 'Hours', 0);
                    case p:
                      return Ee(Me + 'Minutes', 1);
                    case h:
                      return Ee(Me + 'Seconds', 2);
                    case d:
                      return Ee(Me + 'Milliseconds', 3);
                    default:
                      return this.clone();
                  }
                }),
                (I.endOf = function (R) {
                  return this.startOf(R, !1);
                }),
                (I.$set = function (R, $) {
                  var z,
                    oe = G.p(R),
                    j = 'set' + (this.$u ? 'UTC' : ''),
                    ne = ((z = {}),
                    (z[g] = j + 'Date'),
                    (z[D] = j + 'Date'),
                    (z[v] = j + 'Month'),
                    (z[w] = j + 'FullYear'),
                    (z[p] = j + 'Hours'),
                    (z[h] = j + 'Minutes'),
                    (z[d] = j + 'Seconds'),
                    (z[f] = j + 'Milliseconds'),
                    z)[oe],
                    Ee = oe === g ? this.$D + ($ - this.$W) : $;
                  if (oe === v || oe === w) {
                    var ye = this.clone().set(D, 1);
                    ye.$d[ne](Ee), ye.init(), (this.$d = ye.set(D, Math.min(this.$D, ye.daysInMonth())).$d);
                  } else ne && this.$d[ne](Ee);
                  return this.init(), this;
                }),
                (I.set = function (R, $) {
                  return this.clone().$set(R, $);
                }),
                (I.get = function (R) {
                  return this[G.p(R)]();
                }),
                (I.add = function (R, $) {
                  var z,
                    oe = this;
                  R = Number(R);
                  var j = G.p($),
                    ne = function (O) {
                      var je = T(oe);
                      return G.w(je.date(je.date() + Math.round(O * R)), oe);
                    };
                  if (j === v) return this.set(v, this.$M + R);
                  if (j === w) return this.set(w, this.$y + R);
                  if (j === g) return ne(1);
                  if (j === N) return ne(7);
                  var Ee = ((z = {}), (z[h] = u), (z[p] = s), (z[d] = a), z)[j] || 1,
                    ye = this.$d.getTime() + R * Ee;
                  return G.w(ye, this);
                }),
                (I.subtract = function (R, $) {
                  return this.add(-1 * R, $);
                }),
                (I.format = function (R) {
                  var $ = this,
                    z = this.$locale();
                  if (!this.isValid()) return z.invalidDate || P;
                  var oe = R || 'YYYY-MM-DDTHH:mm:ssZ',
                    j = G.z(this),
                    ne = this.$H,
                    Ee = this.$m,
                    ye = this.$M,
                    O = z.weekdays,
                    je = z.months,
                    Me = z.meridiem,
                    Pe = function (B, U, Q, se) {
                      return (B && (B[U] || B($, oe))) || Q[U].slice(0, se);
                    },
                    Re = function (B) {
                      return G.s(ne % 12 || 12, B, '0');
                    },
                    ke =
                      Me ||
                      function (B, U, Q) {
                        var se = B < 12 ? 'AM' : 'PM';
                        return Q ? se.toLowerCase() : se;
                      };
                  return oe.replace(W, function (B, U) {
                    return (
                      U ||
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
                            return Pe(z.monthsShort, ye, je, 3);
                          case 'MMMM':
                            return Pe(je, ye);
                          case 'D':
                            return $.$D;
                          case 'DD':
                            return G.s($.$D, 2, '0');
                          case 'd':
                            return String($.$W);
                          case 'dd':
                            return Pe(z.weekdaysMin, $.$W, O, 2);
                          case 'ddd':
                            return Pe(z.weekdaysShort, $.$W, O, 3);
                          case 'dddd':
                            return O[$.$W];
                          case 'H':
                            return String(ne);
                          case 'HH':
                            return G.s(ne, 2, '0');
                          case 'h':
                            return Re(1);
                          case 'hh':
                            return Re(2);
                          case 'a':
                            return ke(ne, Ee, !0);
                          case 'A':
                            return ke(ne, Ee, !1);
                          case 'm':
                            return String(Ee);
                          case 'mm':
                            return G.s(Ee, 2, '0');
                          case 's':
                            return String($.$s);
                          case 'ss':
                            return G.s($.$s, 2, '0');
                          case 'SSS':
                            return G.s($.$ms, 3, '0');
                          case 'Z':
                            return j;
                        }
                        return null;
                      })(B) ||
                      j.replace(':', '')
                    );
                  });
                }),
                (I.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (I.diff = function (R, $, z) {
                  var oe,
                    j = this,
                    ne = G.p($),
                    Ee = T(R),
                    ye = (Ee.utcOffset() - this.utcOffset()) * u,
                    O = this - Ee,
                    je = function () {
                      return G.m(j, Ee);
                    };
                  switch (ne) {
                    case w:
                      oe = je() / 12;
                      break;
                    case v:
                      oe = je();
                      break;
                    case S:
                      oe = je() / 3;
                      break;
                    case N:
                      oe = (O - ye) / 6048e5;
                      break;
                    case g:
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
                  return z ? oe : G.a(oe);
                }),
                (I.daysInMonth = function () {
                  return this.endOf(v).$D;
                }),
                (I.$locale = function () {
                  return he[this.$L];
                }),
                (I.locale = function (R, $) {
                  if (!R) return this.$L;
                  var z = this.clone(),
                    oe = A(R, $, !0);
                  return oe && (z.$L = oe), z;
                }),
                (I.clone = function () {
                  return G.w(this.$d, this);
                }),
                (I.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (I.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (I.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (I.toString = function () {
                  return this.$d.toUTCString();
                }),
                Z
              );
            })(),
            X = Y.prototype;
          return (
            (T.prototype = X),
            [
              ['$ms', f],
              ['$s', d],
              ['$m', h],
              ['$H', p],
              ['$W', g],
              ['$M', v],
              ['$y', w],
              ['$D', D]
            ].forEach(function (Z) {
              X[Z[1]] = function (I) {
                return this.$g(I, Z[0], Z[1]);
              };
            }),
            (T.extend = function (Z, I) {
              return Z.$i || (Z(I, Y, T), (Z.$i = !0)), T;
            }),
            (T.locale = A),
            (T.isDayjs = b),
            (T.unix = function (Z) {
              return T(1e3 * Z);
            }),
            (T.en = he[we]),
            (T.Ls = he),
            (T.p = {}),
            T
          );
        });
      })(zs)),
    zs.exports
  );
}
var YE = $E();
const ec = ru(YE),
  XE = vt({
    marketId: We().required(),
    tradedAtStart: lt()
      .nullable()
      .transform((r, i) => (i === '' ? null : r)),
    tradedAtEnd: lt()
      .nullable()
      .transform((r, i) => (i === '' ? null : r)),
    limit: lt()
      .nullable()
      .transform((r, i) => (i === '' ? null : r)),
    offset: lt()
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
      handleSubmit: g,
      formState: { errors: N }
    } = Ut({ resolver: jt(XE) }),
    v = g(async (S) => {
      a(!0), s(null), d('');
      try {
        const w = {
          marketId: BigInt(S.marketId),
          tradedAtStart: S.tradedAtStart ?? void 0,
          tradedAtEnd: S.tradedAtEnd ?? void 0,
          limit: S.limit ?? void 0,
          offset: S.offset ?? void 0,
          orderBy: S.orderBy || void 0
        };
        s(await r.getMarketTrade(w));
      } catch (w) {
        d(w.message ?? JSON.stringify(w));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetMarketTrade',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: N.marketId,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx(Ce, {
          label: 'TradedAtStart',
          error: N.tradedAtStart,
          children: _.jsx(cr, {
            control: p,
            name: 'tradedAtStart',
            render: ({ field: S }) =>
              _.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? ec(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (w) => {
                  S.onChange(w.target.value ? new Date(w.target.value).getTime() : void 0);
                }
              })
          })
        }),
        _.jsx(Ce, {
          label: 'TradedAtEnd',
          error: N.tradedAtEnd,
          children: _.jsx(cr, {
            control: p,
            name: 'tradedAtEnd',
            render: ({ field: S }) =>
              _.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? ec(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (w) => {
                  S.onChange(w.target.value ? new Date(w.target.value).getTime() : void 0);
                }
              })
          })
        }),
        _.jsx(Ce, {
          label: 'Limit',
          error: N.limit,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        _.jsx(Ce, {
          label: 'Offset',
          error: N.offset,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        _.jsx(Ce, {
          label: 'OrderBy',
          error: N.orderBy,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        _.jsx('button', { className: 'btn', onClick: v, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const ZE = vt({
  marketId: We().required(),
  orderSide: lt()
    .oneOf(
      Object.keys(Nt)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  price: lt().required(),
  volume: lt().required(),
  baseAssetDecimals: lt().required(),
  quoteAssetDecimals: lt().required()
});
function QE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = Ut({ resolver: jt(ZE) }),
    v = g(async (S) => {
      a(!0), s(null), d('');
      try {
        const w = {
            marketId: BigInt(S.marketId),
            orderCategory: Gn.LimitOrder,
            limitOrderDetails: { orderSide: S.orderSide, price: S.price, volume: S.volume }
          },
          D = { baseAssetDecimals: S.baseAssetDecimals, quoteAssetDecimals: S.quoteAssetDecimals };
        await r.submitSpotOrder(w, D), s(!0);
      } catch (w) {
        d(w.message ?? JSON.stringify(w)), s(!1);
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'SubmitSpotOrderLimit',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: N.marketId,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx(Ce, {
          label: 'OrderSide',
          error: N.orderSide,
          required: !0,
          children: _.jsx(cr, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Nt)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'SubmitSpotOrderLimit-orderSide',
                            type: 'radio',
                            value: Number(Nt[w]),
                            checked: S.value === Number(Nt[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Nt[w]));
                            }
                          })
                        ]
                      },
                      w
                    )
                  )
              })
          })
        }),
        _.jsx(Ce, {
          label: 'Price',
          error: N.price,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('price') })
        }),
        _.jsx(Ce, {
          label: 'Volume',
          error: N.volume,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('volume') })
        }),
        _.jsx(Ce, {
          label: 'BaseAssetDecimals',
          error: N.baseAssetDecimals,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('baseAssetDecimals') })
        }),
        _.jsx(Ce, {
          label: 'QuoteAssetDecimals',
          error: N.quoteAssetDecimals,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('quoteAssetDecimals') })
        }),
        _.jsx('button', { className: 'btn', onClick: v, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const PE = vt({
  marketId: We().required(),
  orderSide: lt()
    .oneOf(
      Object.keys(Nt)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  exactTokensType: lt()
    .oneOf(
      Object.keys(Ni)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  exactTokens: lt().required(),
  minOut: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  maxIn: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  baseAssetDecimals: lt().required(),
  quoteAssetDecimals: lt().required()
});
function JE({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = Ut({ resolver: jt(PE) }),
    v = g(async (S) => {
      a(!0), s(null), d('');
      try {
        const w = {
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
          D = { baseAssetDecimals: S.baseAssetDecimals, quoteAssetDecimals: S.quoteAssetDecimals };
        await r.submitSpotOrder(w, D), s(!0);
      } catch (w) {
        d(w.message ?? JSON.stringify(w)), s(!1);
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'SubmitSpotOrderSwapV2',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: N.marketId,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx(Ce, {
          label: 'OrderSide',
          error: N.orderSide,
          required: !0,
          children: _.jsx(cr, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Nt)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'SubmitSpotOrderSwapV2-orderSide',
                            type: 'radio',
                            value: Number(Nt[w]),
                            checked: S.value === Number(Nt[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Nt[w]));
                            }
                          })
                        ]
                      },
                      w
                    )
                  )
              })
          })
        }),
        _.jsx(Ce, {
          label: 'ExactTokensType',
          error: N.exactTokensType,
          required: !0,
          children: _.jsx(cr, {
            name: 'exactTokensType',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Ni)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'SubmitSpotOrderSwapV2-exactTokensType',
                            type: 'radio',
                            value: Number(Ni[w]),
                            checked: S.value === Number(Ni[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Ni[w]));
                            }
                          })
                        ]
                      },
                      w
                    )
                  )
              })
          })
        }),
        _.jsx(Ce, {
          label: 'ExactTokens',
          error: N.exactTokens,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('exactTokens') })
        }),
        _.jsx(Ce, {
          label: 'MinOut',
          error: N.minOut,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('minOut') })
        }),
        _.jsx(Ce, {
          label: 'MaxIn',
          error: N.maxIn,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('maxIn') })
        }),
        _.jsx(Ce, {
          label: 'BaseAssetDecimals',
          error: N.baseAssetDecimals,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('baseAssetDecimals') })
        }),
        _.jsx(Ce, {
          label: 'QuoteAssetDecimals',
          error: N.quoteAssetDecimals,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('quoteAssetDecimals') })
        }),
        _.jsx('button', { className: 'btn', onClick: v, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
  orderSide: lt().oneOf(
    Object.keys(Nt)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  isCancelAll: Ry()
});
function eA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = Ut({ resolver: jt(WE) }),
    v = g(async (S) => {
      var P, J;
      a(!0), s(null), d('');
      const w = (P = S.marketId) == null ? void 0 : P.trim(),
        D = (J = S.orderId) == null ? void 0 : J.trim();
      try {
        const W = {
          marketId: w ? BigInt(w) : void 0,
          orderId: D || void 0,
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
  return _.jsx(Ct, {
    title: 'CancelSpotOrder',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: N.marketId,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx(Ce, {
          label: 'OrderId',
          error: N.orderId,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        _.jsx(Ce, {
          label: 'OrderSide',
          error: N.orderSide,
          children: _.jsx(cr, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Nt)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'CancelSpotOrder-orderSide',
                            type: 'radio',
                            value: Number(Nt[w]),
                            checked: S.value === Number(Nt[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Nt[w]));
                            }
                          })
                        ]
                      },
                      w
                    )
                  )
              })
          })
        }),
        _.jsx(Ce, {
          label: 'isCancelAll',
          error: N.isCancelAll,
          children: _.jsxs('label', {
            className: 'flex items-center gap-1',
            children: [
              _.jsx('span', { children: 'IsCancelAll' }),
              _.jsx('input', { type: 'checkbox', className: 'input', ...h('isCancelAll') })
            ]
          })
        }),
        _.jsx('button', { className: 'btn', onClick: v, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const tA = vt({
  hin: We().required(),
  status: Iy(
    lt()
      .oneOf(
        Object.keys(Ei)
          .filter((r) => !isNaN(Number(r)))
          .map(Number)
      )
      .required()
  ),
  marketId: We(),
  orderIds: We(),
  orderCategory: lt().oneOf(
    Object.keys(Gn)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  orderSide: lt().oneOf(
    Object.keys(Nt)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  createdAtStart: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  createdAtEnd: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  limit: lt()
    .nullable()
    .transform((r, i) => (i === '' ? null : r)),
  offset: lt()
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
      handleSubmit: g,
      formState: { errors: N }
    } = Ut({ resolver: jt(tA) }),
    v = g(async (S) => {
      var w;
      a(!0), s(null), d('');
      try {
        const D = {
          hin: BigInt(S.hin),
          status: (w = S.status) != null && w.length ? S.status : void 0,
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
        s(await r.getOrders(D));
      } catch (D) {
        d(D.message ?? JSON.stringify(D));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetOrders',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'HIN(Hibit chain identity number)',
          error: N.hin,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('hin') })
        }),
        _.jsx(Ce, {
          label: 'Status',
          error: N.status,
          children: _.jsx(cr, {
            name: 'status',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Ei)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) => {
                    var D;
                    return _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'GetOrders-status',
                            type: 'checkbox',
                            value: Number(Ei[w]),
                            checked: ((D = S.value) == null ? void 0 : D.includes(Number(Ei[w]))) ?? !1,
                            onChange: (P) => {
                              P.target.checked
                                ? S.onChange([...(S.value ?? []), Number(Ei[w])])
                                : S.onChange((S.value ?? []).filter((J) => J !== Number(Ei[w])));
                            }
                          })
                        ]
                      },
                      w
                    );
                  })
              })
          })
        }),
        _.jsx(Ce, {
          label: 'MarketId',
          error: N.marketId,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx(Ce, {
          label: 'OrderIds',
          error: N.orderIds,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('orderIds') })
        }),
        _.jsx(Ce, {
          label: 'OrderCategory',
          error: N.orderCategory,
          children: _.jsx(cr, {
            name: 'orderCategory',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Gn)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'GetOrders-orderCategory',
                            type: 'radio',
                            value: Number(Gn[w]),
                            checked: S.value === Number(Gn[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Gn[w]));
                            }
                          })
                        ]
                      },
                      w
                    )
                  )
              })
          })
        }),
        _.jsx(Ce, {
          label: 'OrderSide',
          error: N.orderSide,
          children: _.jsx(cr, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Nt)
                  .filter((w) => isNaN(Number(w)))
                  .map((w) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: w }),
                          _.jsx('input', {
                            name: 'GetOrders-orderSide',
                            type: 'radio',
                            value: Number(Nt[w]),
                            checked: S.value === Number(Nt[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Nt[w]));
                            }
                          })
                        ]
                      },
                      w
                    )
                  )
              })
          })
        }),
        _.jsx(Ce, {
          label: 'CreatedAtStart',
          error: N.createdAtStart,
          children: _.jsx(cr, {
            control: p,
            name: 'createdAtStart',
            render: ({ field: S }) =>
              _.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? ec(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (w) => {
                  S.onChange(w.target.value ? new Date(w.target.value).getTime() : void 0);
                }
              })
          })
        }),
        _.jsx(Ce, {
          label: 'CreatedAtEnd',
          error: N.createdAtEnd,
          children: _.jsx(cr, {
            control: p,
            name: 'createdAtEnd',
            render: ({ field: S }) =>
              _.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? ec(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (w) => {
                  S.onChange(w.target.value ? new Date(w.target.value).getTime() : void 0);
                }
              })
          })
        }),
        _.jsx(Ce, {
          label: 'Limit',
          error: N.limit,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('limit') })
        }),
        _.jsx(Ce, {
          label: 'Offset',
          error: N.offset,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('offset') })
        }),
        _.jsx(Ce, {
          label: 'OrderBy',
          error: N.orderBy,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('orderBy') })
        }),
        _.jsx('button', { className: 'btn', onClick: v, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
      formState: { errors: g }
    } = Ut({ resolver: jt(nA) }),
    N = p(async (v) => {
      a(!0), s(null), d('');
      try {
        s(await r.getOrder(v));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetOrder',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'Order ID',
          error: g.orderId,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        _.jsx(Ce, {
          label: 'Client Order ID',
          error: g.clientOrderId,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('clientOrderId') })
        }),
        _.jsx(Ce, {
          label: 'Tx Hash',
          error: g.txHash,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('txHash') })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
      formState: { errors: g }
    } = Ut({ resolver: jt(aA) }),
    N = p(async (v) => {
      a(!0), s(null), d('');
      try {
        const S = v.orderId;
        s(await r.getOrderTrades(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetOrderTrades',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'OrderId',
          error: g.orderId,
          required: !0,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('orderId') })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
      formState: { errors: g }
    } = Ut({ resolver: jt(uA) }),
    N = p(async (v) => {
      a(!0), s(null), d('');
      try {
        const S = { hin: BigInt(v.hin), assetId: v.assetId ? BigInt(v.assetId) : void 0 },
          w = await r.getWalletBalances(S);
        s(w);
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetWalletBalances',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'HIN(Hibit chain identity number)',
          error: g.hin,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('hin'), pattern: '[0-9]*' })
        }),
        _.jsx(Ce, {
          label: 'AssetId',
          error: g.assetId,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('assetId'), pattern: '[0-9]*' })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
      formState: { errors: g }
    } = Ut({ resolver: jt(cA) }),
    N = p(async (v) => {
      a(!0), s(null), d('');
      try {
        const S = BigInt(v.hin);
        s(await r.getNonce(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetNonce',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'HIN(Hibit chain identity number)',
          error: g.hin,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('hin') })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
    _.jsx(Ct, {
      title: 'Hibit Client Options Config',
      form: _.jsxs('div', {
        className: 'flex flex-col gap-2',
        children: [
          _.jsx(Ce, {
            label: 'Network',
            error: f.network,
            required: !0,
            children: _.jsx(cr, {
              name: 'network',
              control: u,
              render: ({ field: g }) =>
                _.jsx('div', {
                  className: 'flex items-center gap-3 flex-wrap',
                  children: Object.values(cn).map((N) =>
                    _.jsxs(
                      'label',
                      {
                        className: 'flex items-center gap-1',
                        children: [
                          _.jsx('span', { children: N }),
                          _.jsx('input', {
                            name: 'network',
                            type: 'radio',
                            checked: g.value === N,
                            onChange: (v) => {
                              v.target.checked && g.onChange(N);
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
          _.jsx(Ce, {
            label: 'HIN',
            error: f.hin,
            required: !0,
            children: _.jsx('input', { type: 'number', className: 'input', ...a('hin') })
          }),
          _.jsx(Ce, {
            label: 'Proxy Key',
            error: f.proxyKey,
            required: !0,
            children: _.jsx('input', { type: 'text', className: 'input', ...a('proxyKey') })
          }),
          _.jsx('div', {
            className: 'flex items-center gap-2',
            children: _.jsx('a', {
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
const bg = {
    network: cn.Testnet,
    hin: BigInt(1e4),
    proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
  },
  hA = () => {
    const [r, i] = le.useState(null);
    return (
      le.useEffect(() => {
        const a = new _w();
        a.setOptions(bg), i(a);
      }, []),
      r
        ? _.jsxs('div', {
            className: 'flex flex-col gap-6',
            children: [
              _.jsx(dA, { client: r, defaultOptions: bg }),
              _.jsx(Tw, { client: r }),
              _.jsx(Ow, { client: r }),
              _.jsx(TE, { client: r }),
              _.jsx(ME, { client: r }),
              _.jsx(BE, { client: r }),
              _.jsx(DE, { client: r }),
              _.jsx(jE, { client: r }),
              _.jsx(IE, { client: r }),
              _.jsx(LE, { client: r }),
              _.jsx(FE, { client: r }),
              _.jsx(HE, { client: r }),
              _.jsx(KE, { client: r }),
              _.jsx(QE, { client: r }),
              _.jsx(JE, { client: r }),
              _.jsx(eA, { client: r }),
              _.jsx(rA, { client: r }),
              _.jsx(iA, { client: r }),
              _.jsx(lA, { client: r }),
              _.jsx(sA, { client: r }),
              _.jsx(oA, { client: r })
            ]
          })
        : null
    );
  },
  pu = uy(bd({ baseUrl: 'https://testnetbrokerapi.hibit.app' })),
  mA = (r) => ((r == null ? void 0 : r.client) ?? pu).get({ url: '/v1/payment-address', ...r }),
  pA = (r) => ((r == null ? void 0 : r.client) ?? pu).get({ url: '/v1/quote', ...r }),
  gA = (r) => ((r == null ? void 0 : r.client) ?? pu).get({ url: '/v1/order', ...r }),
  yA = (r) =>
    ((r == null ? void 0 : r.client) ?? pu).post({
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
    (this.options = i), pu.setConfig({ baseUrl: i.network === cn.Testnet ? xw : Sw });
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
      u = await yA(jS(i));
    return this.ensureSuccess(a, u.data), u.data.data.agentOrderId;
  }
  async getAgentOrder(i) {
    const a = 'getOrder',
      u = await gA(kS(i));
    return this.ensureSuccess(a, u.data), IS(u.data.data);
  }
  ensureSuccess(i, a) {
    (a == null ? void 0 : a.code) !== 200 &&
      Nr.throwBadRequestError(i, a == null ? void 0 : a.code, a == null ? void 0 : a.message);
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
    _.jsx(Ct, {
      title: 'Broker Client Options Config',
      form: _.jsx('div', {
        className: 'flex flex-col gap-2',
        children: _.jsx(Ce, {
          label: 'Network',
          error: s.network,
          required: !0,
          children: _.jsx(cr, {
            name: 'network',
            control: a,
            render: ({ field: h }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.values(cn).map((p) =>
                  _.jsxs(
                    'label',
                    {
                      className: 'flex items-center gap-1',
                      children: [
                        _.jsx('span', { children: p }),
                        _.jsx('input', {
                          name: 'network',
                          type: 'radio',
                          checked: h.value === p,
                          onChange: (g) => {
                            g.target.checked && h.onChange(p);
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
      watch: g,
      register: N,
      handleSubmit: v,
      formState: { errors: S }
    } = Ut({ resolver: jt(xA) }),
    w = g('chainId'),
    D = v(async (P) => {
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
  return _.jsx(Ct, {
    title: 'GetPaymentAddress',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'HIN',
          error: S.hin,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...N('hin') })
        }),
        _.jsx(Ce, {
          label: 'ChainId',
          error: S.chainId,
          required: !0,
          children: _.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: w ? [ar.fromString(w)] : [],
            onChange: (P) => {
              var J;
              h('chainId', ((J = P[0]) == null ? void 0 : J.toString()) ?? ''), p('chainId');
            }
          })
        }),
        _.jsx('button', { className: 'btn', onClick: D, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const EA = vt({
  sourceChainId: We().required(),
  sourceAssetType: lt().required(),
  sourceAsset: We(),
  sourceVolume: We().required(),
  targetChainId: We(),
  targetAssetType: lt().required(),
  targetAsset: We()
});
function AA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      setValue: h,
      trigger: p,
      watch: g,
      register: N,
      handleSubmit: v,
      formState: { errors: S }
    } = Ut({ resolver: jt(EA) }),
    w = g('sourceChainId'),
    D = g('sourceAssetType'),
    P = g('targetChainId'),
    J = g('targetAssetType'),
    W = v(async (H) => {
      a(!0), s(null), d('');
      try {
        const Se = {
          sourceChainId: ar.fromString(H.sourceChainId),
          sourceAssetType: H.sourceAssetType,
          sourceAsset: H.sourceAsset,
          sourceVolume: BigInt(H.sourceVolume),
          targetChainId: H.targetChainId ? ar.fromString(H.targetChainId) : void 0,
          targetAssetType: H.targetAssetType,
          targetAsset: H.targetAsset
        };
        s(await r.quote(Se));
      } catch (Se) {
        d(Se.message ?? JSON.stringify(Se));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'Quote',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'Source ChainId',
          error: S.sourceChainId,
          required: !0,
          children: _.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: w ? [ar.fromString(w)] : [],
            onChange: (H) => {
              var Se;
              h('sourceChainId', ((Se = H[0]) == null ? void 0 : Se.toString()) ?? ''), p('sourceChainId');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Source Asset Type',
          error: S.sourceAssetType,
          required: !0,
          children: _.jsx(_i, {
            singleSelect: !0,
            selectedAssetTypes: typeof D == 'number' ? [D] : [],
            onChange: (H) => {
              h('sourceAssetType', H[0] ?? null), p('sourceAssetType');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Source Asset',
          error: S.sourceAsset,
          children: _.jsx('input', { type: 'text', className: 'input', ...N('sourceAsset') })
        }),
        _.jsx(Ce, {
          label: 'Source Volume',
          error: S.sourceVolume,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...N('sourceVolume') })
        }),
        _.jsx(Ce, {
          label: 'Target ChainId',
          error: S.targetChainId,
          children: _.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: P ? [ar.fromString(P)] : [],
            onChange: (H) => {
              var Se;
              h('targetChainId', ((Se = H[0]) == null ? void 0 : Se.toString()) ?? ''), p('targetChainId');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Target Asset Type',
          error: S.targetAssetType,
          required: !0,
          children: _.jsx(_i, {
            singleSelect: !0,
            selectedAssetTypes: typeof J == 'number' ? [J] : [],
            onChange: (H) => {
              h('targetAssetType', H[0] ?? null), p('targetAssetType');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Target Asset',
          error: S.targetAsset,
          children: _.jsx('input', { type: 'text', className: 'input', ...N('targetAsset') })
        }),
        _.jsx('button', { className: 'btn', onClick: W, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const NA = async (r) => {
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
  _A = async (r) => {
    try {
      return `0x${await window.kasware.signMessage(r)}`;
    } catch (i) {
      throw new Error('KasWare sign: ' + (i.message ?? JSON.stringify(i)));
    }
  },
  TA = async (r, i) => {
    try {
      if (!r || i <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const u = new en(i).toNumber();
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
      const f = (await window.kasware.getKRC20Balance()).find((v) => v.tick.toUpperCase() === a.toUpperCase());
      if (!f) throw new Error(`Not enough KRC20(${a}) balance`);
      const d = new en(i).shiftedBy(Number(f.dec)).toNumber();
      if (Number(f.balance) < d) throw new Error(`Not enough KRC20(${a}) balance`);
      const h = { p: 'KRC-20', op: 'transfer', tick: a.toUpperCase(), amt: d.toString(), to: r },
        g = await window.kasware.signKRC20Transaction(JSON.stringify(h), 4, r),
        N = JSON.parse(g);
      return console.debug(`Transfer KRC20: ${N}`), N.revealId;
    } catch (u) {
      throw new Error('KasWare transferKrc20: ' + (u.message ?? JSON.stringify(u)));
    }
  },
  MA = vt({
    hin: We().required(),
    sourceWalletPublicKey: We().required(),
    sourceWalletAddress: We().required(),
    sourceChainId: We().required(),
    sourceAssetType: lt(),
    sourceAsset: We(),
    paymentAddress: We().required(),
    sourceVolume: lt().required(),
    txRef: We().required(),
    targetChainId: We(),
    targetWalletAddress: We(),
    targetAssetType: lt(),
    targetAsset: We(),
    targetVolume: lt().required(),
    targetVolumeMin: lt().required(),
    signatureSchema: lt().required(),
    signature: We().required()
  });
function RA({ client: r }) {
  const [i, a] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      control: h,
      setValue: p,
      trigger: g,
      watch: N,
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = Ut({ resolver: jt(MA) }),
    D = N(),
    P = le.useMemo(() => {
      if (!D.sourceChainId) return !1;
      const he = ar.fromString(D.sourceChainId),
        Ae = D.sourceAssetType,
        b = he.chain.equals(Rt.Kaspa),
        A = !Ae || Ae === Pi.Native,
        T = Ae === Pi.KRC20;
      return b && (A || T);
    }, [D.sourceChainId, D.sourceAssetType]),
    J = (he) =>
      new BS({
        hin: BigInt(he.hin),
        sourceWalletPublicKey: he.sourceWalletPublicKey,
        sourceWalletAddress: he.sourceWalletAddress,
        txRef: he.txRef,
        sourceChainId: ar.fromString(he.sourceChainId),
        sourceAssetType: he.sourceAssetType,
        sourceAsset: he.sourceAsset,
        sourceVolume: BigInt(he.sourceVolume),
        targetChainId: he.targetChainId ? ar.fromString(he.targetChainId) : void 0,
        targetAssetType: he.targetAssetType,
        targetAsset: he.targetAsset,
        targetVolume: BigInt(he.targetVolume),
        targetVolumeMin: BigInt(he.targetVolumeMin)
      }),
    W = () => {
      try {
        const Ae = J(D).toJson();
        navigator.clipboard.writeText(Ae), alert('Signature message copied to clipboard');
      } catch (he) {
        alert(he.message ?? JSON.stringify(he));
      }
    },
    H = S(async (he) => {
      a(!0), s(null), d('');
      try {
        const Ae = J(he);
        Ae.setSignature(he.signature, he.signatureSchema), s(await r.swap(Ae));
      } catch (Ae) {
        d(Ae.message ?? JSON.stringify(Ae));
      } finally {
        a(!1);
      }
    }),
    Se = async () => {
      try {
        const he = r.getOptions().network,
          { address: Ae, publicKey: b } = await NA(he === cn.Testnet ? 'kaspa_testnet_10' : 'kaspa_mainnet');
        p('sourceWalletAddress', Ae),
          p('sourceWalletPublicKey', b),
          g('sourceWalletAddress'),
          g('sourceWalletPublicKey');
      } catch (he) {
        alert(he.message ?? JSON.stringify(he));
      }
    },
    Le = async () => {
      try {
        let he = '';
        if (D.sourceAssetType === Pi.KRC20) {
          if (!D.paymentAddress || !D.sourceAsset || !D.sourceVolume)
            throw new Error('paymentAddress, sourceAsset and sourceVolume are required for KRC20 transfer');
          he = await OA(D.paymentAddress, D.sourceVolume, D.sourceAsset);
        } else {
          if (!D.paymentAddress || !D.sourceVolume)
            throw new Error('paymentAddress and sourceVolume are required for KAS transfer');
          he = await TA(D.paymentAddress, D.sourceVolume);
        }
        p('txRef', he), g('txRef');
      } catch (he) {
        alert(he.message ?? JSON.stringify(he));
      }
    },
    we = async () => {
      try {
        const Ae = J(D).toJson(),
          b = await _A(Ae);
        p('signature', b), p('signatureSchema', Ha.KaspaSchnorr), g('signature'), g('signatureSchema');
      } catch (he) {
        alert(he.message ?? JSON.stringify(he));
      }
    };
  return _.jsx(Ct, {
    title: 'Swap',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'HIN',
          error: w.hin,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('hin') })
        }),
        _.jsxs('div', {
          className: 'py-4 px-4 -mx-4 flex flex-col gap-2 bg-gray-100',
          children: [
            _.jsx(Ce, {
              label: 'Source Wallet Public Key',
              error: w.sourceWalletPublicKey,
              required: !0,
              children: _.jsx('input', { type: 'text', className: 'input', ...v('sourceWalletPublicKey') })
            }),
            _.jsx(Ce, {
              label: 'Source Wallet Address',
              error: w.sourceWalletAddress,
              required: !0,
              children: _.jsx('input', { type: 'text', className: 'input', ...v('sourceWalletAddress') })
            }),
            _.jsx('button', {
              className: 'btn-outline text-green-500',
              onClick: Se,
              children: 'Connect Kasware Wallet'
            })
          ]
        }),
        _.jsx(Ce, {
          label: 'Source ChainId',
          error: w.sourceChainId,
          required: !0,
          children: _.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: D.sourceChainId ? [ar.fromString(D.sourceChainId)] : [],
            onChange: (he) => {
              var Ae;
              p('sourceChainId', ((Ae = he[0]) == null ? void 0 : Ae.toString()) ?? ''), g('sourceChainId');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Source Asset Type',
          error: w.sourceAssetType,
          children: _.jsx(_i, {
            singleSelect: !0,
            selectedAssetTypes: typeof D.sourceAssetType == 'number' ? [D.sourceAssetType] : [],
            onChange: (he) => {
              p('sourceAssetType', he[0] ?? null), g('sourceAssetType');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Source Asset',
          error: w.sourceAsset,
          children: _.jsx('input', { type: 'text', className: 'input', ...v('sourceAsset') })
        }),
        _.jsx(Ce, {
          label: 'Payment Address',
          error: w.paymentAddress,
          required: !0,
          children: _.jsx('input', { type: 'text', className: 'input', ...v('paymentAddress') })
        }),
        _.jsx(Ce, {
          label: 'Source Volume',
          error: w.sourceVolume,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('sourceVolume') })
        }),
        _.jsxs('div', {
          className: 'py-4 px-4 -mx-4 flex flex-col gap-2 bg-gray-100',
          children: [
            _.jsx(Ce, {
              label: 'Transaction Reference',
              error: w.txRef,
              required: !0,
              children: _.jsx('input', { type: 'text', className: 'input', ...v('txRef') })
            }),
            _.jsx('button', {
              className: 'btn-outline text-green-500',
              onClick: Le,
              disabled: !P,
              children: 'Transfer using Kasware Wallet'
            })
          ]
        }),
        _.jsx(Ce, {
          label: 'Target ChainId',
          error: w.targetChainId,
          children: _.jsx(Kn, {
            singleSelect: !0,
            selectedChainIds: D.targetChainId ? [ar.fromString(D.targetChainId)] : [],
            onChange: (he) => {
              var Ae;
              p('targetChainId', ((Ae = he[0]) == null ? void 0 : Ae.toString()) ?? ''), g('targetChainId');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Target Asset Type',
          error: w.targetAssetType,
          children: _.jsx(_i, {
            singleSelect: !0,
            selectedAssetTypes: typeof D.targetAssetType == 'number' ? [D.targetAssetType] : [],
            onChange: (he) => {
              p('targetAssetType', he[0] ?? null), g('targetAssetType');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Target Asset',
          error: w.targetAsset,
          children: _.jsx('input', { type: 'text', className: 'input', ...v('targetAsset') })
        }),
        _.jsx(Ce, {
          label: 'Target Volume',
          error: w.targetVolume,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('targetVolume') })
        }),
        _.jsx(Ce, {
          label: 'Target Volume Min',
          error: w.targetVolumeMin,
          required: !0,
          children: _.jsx('input', { type: 'number', className: 'input', ...v('targetVolumeMin') })
        }),
        _.jsxs('div', {
          className: 'py-4 px-4 -mx-4 flex flex-col gap-2 bg-gray-100',
          children: [
            _.jsx(Ce, {
              label: 'Signature Schema',
              error: w.signatureSchema,
              required: !0,
              children: _.jsx(cr, {
                name: 'signatureSchema',
                control: h,
                render: ({ field: he }) =>
                  _.jsx('div', {
                    className: 'flex items-center gap-3 flex-wrap',
                    children: Object.keys(Ha)
                      .filter((Ae) => isNaN(Number(Ae)))
                      .map((Ae) =>
                        _.jsxs(
                          'label',
                          {
                            className: 'flex items-center gap-1',
                            children: [
                              _.jsx('span', { children: Ae }),
                              _.jsx('input', {
                                name: 'swap-signatureSchema',
                                type: 'radio',
                                checked: he.value === Number(Ha[Ae]),
                                onChange: (b) => {
                                  b.target.checked && he.onChange(Number(Ha[Ae]));
                                }
                              })
                            ]
                          },
                          Ae
                        )
                      )
                  })
              })
            }),
            _.jsx(Ce, {
              label: 'Signature',
              error: w.signature,
              required: !0,
              children: _.jsx('input', { type: 'text', className: 'input', ...v('signature') })
            }),
            _.jsxs('div', {
              className: 'flex items-center gap-4',
              children: [
                _.jsx('button', {
                  className: 'flex-1 btn-outline text-gray-500',
                  onClick: W,
                  children: 'Copy message to sign'
                }),
                _.jsx('button', {
                  className: 'flex-1 btn-outline text-green-500',
                  onClick: we,
                  children: 'Sign using Kasware Wallet'
                })
              ]
            })
          ]
        }),
        _.jsx('button', { className: 'btn', onClick: H, disabled: i, children: i ? 'Loading...' : 'Submit' })
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
      formState: { errors: g }
    } = Ut({ resolver: jt(BA) }),
    N = p(async (v) => {
      a(!0), s(null), d('');
      try {
        const S = v.agentOrderId;
        s(await r.getAgentOrder(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        a(!1);
      }
    });
  return _.jsx(Ct, {
    title: 'GetAgentOrder',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'Agent Order ID',
          error: g.agentOrderId,
          required: !0,
          children: _.jsx('input', { type: 'text', className: 'input', ...h('agentOrderId') })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: i, children: i ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: i,
    result: u,
    error: f
  });
}
const Sg = { network: cn.Testnet },
  DA = () => {
    const [r, i] = le.useState(null);
    return (
      le.useEffect(() => {
        const a = new vA();
        a.setOptions(Sg), i(a);
      }, []),
      r
        ? _.jsxs('div', {
            className: 'flex flex-col gap-6',
            children: [
              _.jsx(SA, { client: r, defaultOptions: Sg }),
              _.jsx(wA, { client: r }),
              _.jsx(AA, { client: r }),
              _.jsx(RA, { client: r }),
              _.jsx(CA, { client: r })
            ]
          })
        : null
    );
  },
  UA = () =>
    _.jsxs('main', {
      className: 'container mx-auto h-full flex flex-col gap-6',
      children: [
        _.jsxs('header', {
          className: 'p-6 pb-0 flex-none flex justify-between items-center',
          children: [
            _.jsx('h1', { className: 'text-3xl font-bold text-center', children: 'Hibit SDK Examples' }),
            _.jsx('nav', {
              children: _.jsxs('ul', {
                className: 'flex items-center gap-4',
                children: [
                  _.jsx('li', {
                    children: _.jsx(td, {
                      to: '/',
                      className: ({ isActive: r }) => `font-bold underline ${r ? 'text-blue-500' : 'text-gray-500'}`,
                      children: 'HibitClient'
                    })
                  }),
                  _.jsx('li', {
                    children: _.jsx(td, {
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
        _.jsx('div', {
          className: 'p-6 flex-1 overflow-auto',
          children: _.jsxs(Zb, {
            children: [
              _.jsx(Wf, { path: '/', element: _.jsx(hA, {}) }),
              _.jsx(Wf, { path: '/broker', element: _.jsx(DA, {}) })
            ]
          })
        })
      ]
    });
ib.createRoot(document.getElementById('root')).render(
  _.jsx(wt.StrictMode, { children: _.jsx(bS, { children: _.jsx(UA, {}) }) })
);
