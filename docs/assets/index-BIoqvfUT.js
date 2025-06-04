var Jv = Object.defineProperty;
var Wv = (r, a, i) => (a in r ? Jv(r, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (r[a] = i));
var np = (r, a, i) => Wv(r, typeof a != 'symbol' ? a + '' : a, i);
(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) u(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === 'childList')
        for (const d of f.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && u(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
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
    const f = i(s);
    fetch(s.href, f);
  }
})();
var ed =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof globalThis < 'u'
          ? globalThis
          : {};
function au(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r;
}
var Ef = { exports: {} },
  Hl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function eb() {
  if (ap) return Hl;
  ap = 1;
  var r = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
  function i(u, s, f) {
    var d = null;
    if ((f !== void 0 && (d = '' + f), s.key !== void 0 && (d = '' + s.key), 'key' in s)) {
      f = {};
      for (var h in s) h !== 'key' && (f[h] = s[h]);
    } else f = s;
    return (s = f.ref), { $$typeof: r, type: u, key: d, ref: s !== void 0 ? s : null, props: f };
  }
  return (Hl.Fragment = a), (Hl.jsx = i), (Hl.jsxs = i), Hl;
}
var ip;
function tb() {
  return ip || ((ip = 1), (Ef.exports = eb())), Ef.exports;
}
var _ = tb(),
  Af = { exports: {} },
  ut = {},
  lp;
function rb() {
  if (lp) return ut;
  lp = 1;
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var r = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
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
  function z(j, ne, Ee) {
    (this.props = j), (this.context = ne), (this.refs = P), (this.updater = Ee || w);
  }
  var Se = (z.prototype = new W());
  (Se.constructor = z), D(Se, J.prototype), (Se.isPureReactComponent = !0);
  var ze = Array.isArray,
    we = { H: null, A: null, T: null, S: null },
    he = Object.prototype.hasOwnProperty;
  function Ae(j, ne, Ee, ye, T, je) {
    return (Ee = je.ref), { $$typeof: r, type: j, key: ne, ref: Ee !== void 0 ? Ee : null, props: je };
  }
  function b(j, ne) {
    return Ae(j.type, ne, void 0, void 0, void 0, j.props);
  }
  function A(j) {
    return typeof j == 'object' && j !== null && j.$$typeof === r;
  }
  function O(j) {
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
    return typeof j == 'object' && j !== null && j.key != null ? O('' + j.key) : ne.toString(36);
  }
  function K() {}
  function Z(j) {
    switch (j.status) {
      case 'fulfilled':
        return j.value;
      case 'rejected':
        throw j.reason;
      default:
        switch (
          (typeof j.status == 'string'
            ? j.then(K, K)
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
  function I(j, ne, Ee, ye, T) {
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
            case a:
              Me = !0;
              break;
            case N:
              return (Me = j._init), I(Me(j._payload), ne, Ee, ye, T);
          }
      }
    if (Me)
      return (
        (T = T(j)),
        (Me = ye === '' ? '.' + Y(j, 0) : ye),
        ze(T)
          ? ((Ee = ''),
            Me != null && (Ee = Me.replace(G, '$&/') + '/'),
            I(T, ne, Ee, '', function (ke) {
              return ke;
            }))
          : T != null &&
            (A(T) &&
              (T = b(
                T,
                Ee + (T.key == null || (j && j.key === T.key) ? '' : ('' + T.key).replace(G, '$&/') + '/') + Me
              )),
            ne.push(T)),
        1
      );
    Me = 0;
    var Pe = ye === '' ? '.' : ye + ':';
    if (ze(j)) for (var Re = 0; Re < j.length; Re++) (ye = j[Re]), (je = Pe + Y(ye, Re)), (Me += I(ye, ne, Ee, je, T));
    else if (((Re = S(j)), typeof Re == 'function'))
      for (j = Re.call(j), Re = 0; !(ye = j.next()).done; )
        (ye = ye.value), (je = Pe + Y(ye, Re++)), (Me += I(ye, ne, Ee, je, T));
    else if (je === 'object') {
      if (typeof j.then == 'function') return I(Z(j), ne, Ee, ye, T);
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
      T = 0;
    return (
      I(j, ye, '', '', function (je) {
        return ne.call(Ee, je, T++);
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
  var H =
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
    (ut.Fragment = i),
    (ut.Profiler = s),
    (ut.PureComponent = z),
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
        T = j.key,
        je = void 0;
      if (ne != null)
        for (Me in (ne.ref !== void 0 && (je = void 0), ne.key !== void 0 && (T = '' + ne.key), ne))
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
      return Ae(j.type, T, void 0, void 0, je, ye);
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
        T = {},
        je = null;
      if (ne != null)
        for (ye in (ne.key !== void 0 && (je = '' + ne.key), ne))
          he.call(ne, ye) && ye !== 'key' && ye !== '__self' && ye !== '__source' && (T[ye] = ne[ye]);
      var Me = arguments.length - 2;
      if (Me === 1) T.children = Ee;
      else if (1 < Me) {
        for (var Pe = Array(Me), Re = 0; Re < Me; Re++) Pe[Re] = arguments[Re + 2];
        T.children = Pe;
      }
      if (j && j.defaultProps) for (ye in ((Me = j.defaultProps), Me)) T[ye] === void 0 && (T[ye] = Me[ye]);
      return Ae(j, je, void 0, void 0, null, T);
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
          T = we.S;
        T !== null && T(Ee, ye), typeof ye == 'object' && ye !== null && typeof ye.then == 'function' && ye.then(oe, H);
      } catch (je) {
        H(je);
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
var up;
function fd() {
  return up || ((up = 1), (Af.exports = rb())), Af.exports;
}
var le = fd();
const wt = au(le);
var Nf = { exports: {} },
  Fl = {},
  _f = { exports: {} },
  Of = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp;
function nb() {
  return (
    sp ||
      ((sp = 1),
      (function (r) {
        function a(R, $) {
          var H = R.length;
          R.push($);
          e: for (; 0 < H; ) {
            var oe = (H - 1) >>> 1,
              j = R[oe];
            if (0 < s(j, $)) (R[oe] = $), (R[H] = j), (H = oe);
            else break e;
          }
        }
        function i(R) {
          return R.length === 0 ? null : R[0];
        }
        function u(R) {
          if (R.length === 0) return null;
          var $ = R[0],
            H = R.pop();
          if (H !== $) {
            R[0] = H;
            e: for (var oe = 0, j = R.length, ne = j >>> 1; oe < ne; ) {
              var Ee = 2 * (oe + 1) - 1,
                ye = R[Ee],
                T = Ee + 1,
                je = R[T];
              if (0 > s(ye, H))
                T < j && 0 > s(je, ye) ? ((R[oe] = je), (R[T] = H), (oe = T)) : ((R[oe] = ye), (R[Ee] = H), (oe = Ee));
              else if (T < j && 0 > s(je, H)) (R[oe] = je), (R[T] = H), (oe = T);
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
          g = [],
          N = 1,
          v = null,
          S = 3,
          w = !1,
          D = !1,
          P = !1,
          J = typeof setTimeout == 'function' ? setTimeout : null,
          W = typeof clearTimeout == 'function' ? clearTimeout : null,
          z = typeof setImmediate < 'u' ? setImmediate : null;
        function Se(R) {
          for (var $ = i(g); $ !== null; ) {
            if ($.callback === null) u(g);
            else if ($.startTime <= R) u(g), ($.sortIndex = $.expirationTime), a(p, $);
            else break;
            $ = i(g);
          }
        }
        function ze(R) {
          if (((P = !1), Se(R), !D))
            if (i(p) !== null) (D = !0), Z();
            else {
              var $ = i(g);
              $ !== null && I(ze, $.startTime - R);
            }
        }
        var we = !1,
          he = -1,
          Ae = 5,
          b = -1;
        function A() {
          return !(r.unstable_now() - b < Ae);
        }
        function O() {
          if (we) {
            var R = r.unstable_now();
            b = R;
            var $ = !0;
            try {
              e: {
                (D = !1), P && ((P = !1), W(he), (he = -1)), (w = !0);
                var H = S;
                try {
                  t: {
                    for (Se(R), v = i(p); v !== null && !(v.expirationTime > R && A()); ) {
                      var oe = v.callback;
                      if (typeof oe == 'function') {
                        (v.callback = null), (S = v.priorityLevel);
                        var j = oe(v.expirationTime <= R);
                        if (((R = r.unstable_now()), typeof j == 'function')) {
                          (v.callback = j), Se(R), ($ = !0);
                          break t;
                        }
                        v === i(p) && u(p), Se(R);
                      } else u(p);
                      v = i(p);
                    }
                    if (v !== null) $ = !0;
                    else {
                      var ne = i(g);
                      ne !== null && I(ze, ne.startTime - R), ($ = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (S = H), (w = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? G() : (we = !1);
            }
          }
        }
        var G;
        if (typeof z == 'function')
          G = function () {
            z(O);
          };
        else if (typeof MessageChannel < 'u') {
          var Y = new MessageChannel(),
            K = Y.port2;
          (Y.port1.onmessage = O),
            (G = function () {
              K.postMessage(null);
            });
        } else
          G = function () {
            J(O, 0);
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
            return i(p);
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
              (j = H + j),
              (R = { id: N++, callback: $, priorityLevel: R, startTime: H, expirationTime: j, sortIndex: -1 }),
              H > oe
                ? ((R.sortIndex = H),
                  a(g, R),
                  i(p) === null && R === i(g) && (P ? (W(he), (he = -1)) : (P = !0), I(ze, H - oe)))
                : ((R.sortIndex = j), a(p, R), D || w || ((D = !0), Z())),
              R
            );
          }),
          (r.unstable_shouldYield = A),
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
      })(Of)),
    Of
  );
}
var cp;
function ab() {
  return cp || ((cp = 1), (_f.exports = nb())), _f.exports;
}
var Tf = { exports: {} },
  sr = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var op;
function ib() {
  if (op) return sr;
  op = 1;
  var r = fd();
  function a(p) {
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
  function i() {}
  var u = {
      d: {
        f: i,
        r: function () {
          throw Error(a(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i
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
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(a(299));
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
var fp;
function lb() {
  if (fp) return Tf.exports;
  fp = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), (Tf.exports = ib()), Tf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dp;
function ub() {
  if (dp) return Fl;
  dp = 1;
  var r = ab(),
    a = fd(),
    i = lb();
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
    z = Symbol.for('react.lazy'),
    Se = Symbol.for('react.offscreen'),
    ze = Symbol.for('react.memo_cache_sentinel'),
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
        case z:
          (t = e._payload), (e = e._init);
          try {
            return b(e(t));
          } catch {}
      }
    return null;
  }
  var A = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = Object.assign,
    G,
    Y;
  function K(e) {
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
        var X = x.split(`
`),
          fe = C.split(`
`);
        for (c = l = 0; l < X.length && !X[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; c < fe.length && !fe[c].includes('DetermineComponentFrameRoot'); ) c++;
        if (l === X.length || c === fe.length)
          for (l = X.length - 1, c = fe.length - 1; 1 <= l && 0 <= c && X[l] !== fe[c]; ) c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (X[l] !== fe[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || X[l] !== fe[c])) {
                  var _e =
                    `
` + X[l].replace(' at new ', ' at ');
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
    return (n = e ? e.displayName || e.name : '') ? K(n) : '';
  }
  function R(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return K(e.type);
      case 16:
        return K('Lazy');
      case 13:
        return K('Suspense');
      case 19:
        return K('SuspenseList');
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
  function j(e) {
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
    T = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
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
        t = (t = t.documentElement) && (t = t.namespaceURI) ? Cm(t) : 0;
        break;
      default:
        if (((e = e === 8 ? t.parentNode : t), (t = e.tagName), (e = e.namespaceURI))) (e = Cm(e)), (t = Dm(e, t));
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
  function ie(e) {
    e.memoizedState !== null && B(re, e);
    var t = U.current,
      n = Dm(t, e.type);
    t !== n && (B(Q, e), B(U, n));
  }
  function M(e) {
    Q.current === e && (ke(U), ke(Q)), re.current === e && (ke(re), (kl._currentValue = je));
  }
  var L = Object.prototype.hasOwnProperty,
    F = r.unstable_scheduleCallback,
    te = r.unstable_cancelCallback,
    ve = r.unstable_shouldYield,
    xe = r.unstable_requestPaint,
    De = r.unstable_now,
    He = r.unstable_getCurrentPriorityLevel,
    rt = r.unstable_ImmediatePriority,
    E = r.unstable_UserBlockingPriority,
    m = r.unstable_NormalPriority,
    y = r.unstable_LowPriority,
    V = r.unstable_IdlePriority,
    ae = r.log,
    k = r.unstable_setDisableYieldValue,
    q = null,
    de = null;
  function Oe(e) {
    if (de && typeof de.onCommitFiberRoot == 'function')
      try {
        de.onCommitFiberRoot(q, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Ue(e) {
    if ((typeof ae == 'function' && k(e), de && typeof de.setStrictMode == 'function'))
      try {
        de.setStrictMode(q, e);
      } catch {}
  }
  var qe = Math.clz32 ? Math.clz32 : Fe,
    et = Math.log,
    Ke = Math.LN2;
  function Fe(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((et(e) / Ke) | 0)) | 0;
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
  function at(e, t) {
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
  function Ut(e, t) {
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
  function mr() {
    var e = Ve;
    return (Ve <<= 1), (Ve & 4194176) === 0 && (Ve = 128), e;
  }
  function si() {
    var e = Ge;
    return (Ge <<= 1), (Ge & 62914560) === 0 && (Ge = 4194304), e;
  }
  function ci(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Tt(e, t) {
    (e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Cd(e, t, n, l, c, o) {
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
      X = e.expirationTimes,
      fe = e.hiddenUpdates;
    for (n = x & ~n; 0 < n; ) {
      var _e = 31 - qe(n),
        Be = 1 << _e;
      (C[_e] = 0), (X[_e] = -1);
      var be = fe[_e];
      if (be !== null)
        for (fe[_e] = null, _e = 0; _e < be.length; _e++) {
          var Ne = be[_e];
          Ne !== null && (Ne.lane &= -536870913);
        }
      n &= ~Be;
    }
    l !== 0 && mc(e, l, 0), o !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(x & ~t));
  }
  function mc(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - qe(t);
    (e.entangledLanes |= t), (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194218));
  }
  function pc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - qe(n),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (n &= ~c);
    }
  }
  function vu(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function bu() {
    var e = T.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Pm(e.type));
  }
  function gc(e, t) {
    var n = T.p;
    try {
      return (T.p = e), t();
    } finally {
      T.p = n;
    }
  }
  var fn = Math.random().toString(36).slice(2),
    dt = '__reactFiber$' + fn,
    lr = '__reactProps$' + fn,
    Pn = '__reactContainer$' + fn,
    Xi = '__reactEvents$' + fn,
    yc = '__reactListeners$' + fn,
    vc = '__reactHandles$' + fn,
    Su = '__reactResources$' + fn,
    Ma = '__reactMarker$' + fn;
  function Zi(e) {
    delete e[dt], delete e[lr], delete e[Xi], delete e[yc], delete e[vc];
  }
  function pt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pn] || n[dt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = km(e); e !== null; ) {
            if ((n = e[dt])) return n;
            e = km(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Jn(e) {
    if ((e = e[dt] || e[Pn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ra(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function ee(e) {
    var t = e[Su];
    return t || (t = e[Su] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function Je(e) {
    e[Ma] = !0;
  }
  var ht = new Set(),
    st = {};
  function kr(e, t) {
    Ir(e, t), Ir(e + 'Capture', t);
  }
  function Ir(e, t) {
    for (st[e] = t, e = 0; e < t.length; e++) ht.add(t[e]);
  }
  var dn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    $y = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Dd = {},
    Ud = {};
  function Yy(e) {
    return L.call(Ud, e) ? !0 : L.call(Dd, e) ? !1 : $y.test(e) ? (Ud[e] = !0) : ((Dd[e] = !0), !1);
  }
  function xu(e, t, n) {
    if (Yy(t))
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
  function wu(e, t, n) {
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
  function jd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Ky(e) {
    var t = jd(e) ? 'checked' : 'value',
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
  function Eu(e) {
    e._valueTracker || (e._valueTracker = Ky(e));
  }
  function kd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return e && (l = jd(e) ? (e.checked ? 'true' : 'false') : e.value), (e = l), e !== n ? (t.setValue(e), !0) : !1;
  }
  function Au(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Xy = /[\n"\\]/g;
  function Lr(e) {
    return e.replace(Xy, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function bc(e, t, n, l, c, o, x, C) {
    (e.name = ''),
      x != null && typeof x != 'function' && typeof x != 'symbol' && typeof x != 'boolean'
        ? (e.type = x)
        : e.removeAttribute('type'),
      t != null
        ? x === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + qr(t))
          : e.value !== '' + qr(t) && (e.value = '' + qr(t))
        : (x !== 'submit' && x !== 'reset') || e.removeAttribute('value'),
      t != null ? Sc(e, x, qr(t)) : n != null ? Sc(e, x, qr(n)) : l != null && e.removeAttribute('value'),
      c == null && o != null && (e.defaultChecked = !!o),
      c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (e.name = '' + qr(C))
        : e.removeAttribute('name');
  }
  function Id(e, t, n, l, c, o, x, C) {
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
  function Sc(e, t, n) {
    (t === 'number' && Au(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
  }
  function oi(e, t, n, l) {
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
  function qd(e, t, n) {
    if (t != null && ((t = '' + qr(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + qr(n) : '';
  }
  function Ld(e, t, n, l) {
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
  function fi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zy = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function zd(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Zy.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Hd(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(u(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0 ? e.setProperty(l, '') : l === 'float' ? (e.cssFloat = '') : (e[l] = ''));
      for (var c in t) (l = t[c]), t.hasOwnProperty(c) && n[c] !== l && zd(e, c, l);
    } else for (var o in t) t.hasOwnProperty(o) && zd(e, o, t[o]);
  }
  function xc(e) {
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
  var Qy = new Map([
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
    Py =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nu(e) {
    return Py.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var wc = null;
  function Ec(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var di = null,
    hi = null;
  function Fd(e) {
    var t = Jn(e);
    if (t && (e = t.stateNode)) {
      var n = e[lr] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (bc(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Lr('' + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var c = l[lr] || null;
                if (!c) throw Error(u(90));
                bc(l, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
              }
            }
            for (t = 0; t < n.length; t++) (l = n[t]), l.form === e.form && kd(l);
          }
          break e;
        case 'textarea':
          qd(e, n.value, n.defaultValue);
          break e;
        case 'select':
          (t = n.value), t != null && oi(e, !!n.multiple, t, !1);
      }
    }
  }
  var Ac = !1;
  function Vd(e, t, n) {
    if (Ac) return e(t, n);
    Ac = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (((Ac = !1), (di !== null || hi !== null) && (ss(), di && ((t = di), (e = hi), (hi = di = null), Fd(t), e))))
        for (t = 0; t < e.length; t++) Fd(e[t]);
    }
  }
  function Qi(e, t) {
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
  var Nc = !1;
  if (dn)
    try {
      var Pi = {};
      Object.defineProperty(Pi, 'passive', {
        get: function () {
          Nc = !0;
        }
      }),
        window.addEventListener('test', Pi, Pi),
        window.removeEventListener('test', Pi, Pi);
    } catch {
      Nc = !1;
    }
  var Wn = null,
    _c = null,
    _u = null;
  function Gd() {
    if (_u) return _u;
    var e,
      t = _c,
      n = t.length,
      l,
      c = 'value' in Wn ? Wn.value : Wn.textContent,
      o = c.length;
    for (e = 0; e < n && t[e] === c[e]; e++);
    var x = n - e;
    for (l = 1; l <= x && t[n - l] === c[o - l]; l++);
    return (_u = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Ou(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Tu() {
    return !0;
  }
  function $d() {
    return !1;
  }
  function br(e) {
    function t(n, l, c, o, x) {
      (this._reactName = n),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = x),
        (this.currentTarget = null);
      for (var C in e) e.hasOwnProperty(C) && ((n = e[C]), (this[C] = n ? n(o) : o[C]));
      return (
        (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Tu : $d),
        (this.isPropagationStopped = $d),
        this
      );
    }
    return (
      O(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Tu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Tu));
        },
        persist: function () {},
        isPersistent: Tu
      }),
      t
    );
  }
  var Ba = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Mu = br(Ba),
    Ji = O({}, Ba, { view: 0, detail: 0 }),
    Jy = br(Ji),
    Oc,
    Tc,
    Wi,
    Ru = O({}, Ji, {
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
      getModifierState: Rc,
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
          : (e !== Wi &&
              (Wi && e.type === 'mousemove'
                ? ((Oc = e.screenX - Wi.screenX), (Tc = e.screenY - Wi.screenY))
                : (Tc = Oc = 0),
              (Wi = e)),
            Oc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Tc;
      }
    }),
    Yd = br(Ru),
    Wy = O({}, Ru, { dataTransfer: 0 }),
    e1 = br(Wy),
    t1 = O({}, Ji, { relatedTarget: 0 }),
    Mc = br(t1),
    r1 = O({}, Ba, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n1 = br(r1),
    a1 = O({}, Ba, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      }
    }),
    i1 = br(a1),
    l1 = O({}, Ba, { data: 0 }),
    Kd = br(l1),
    u1 = {
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
    s1 = {
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
    c1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function o1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = c1[e]) ? !!t[e] : !1;
  }
  function Rc() {
    return o1;
  }
  var f1 = O({}, Ji, {
      key: function (e) {
        if (e.key) {
          var t = u1[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Ou(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? s1[e.keyCode] || 'Unidentified'
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
      getModifierState: Rc,
      charCode: function (e) {
        return e.type === 'keypress' ? Ou(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? Ou(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      }
    }),
    d1 = br(f1),
    h1 = O({}, Ru, {
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
    Xd = br(h1),
    m1 = O({}, Ji, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Rc
    }),
    p1 = br(m1),
    g1 = O({}, Ba, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y1 = br(g1),
    v1 = O({}, Ru, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    b1 = br(v1),
    S1 = O({}, Ba, { newState: 0, oldState: 0 }),
    x1 = br(S1),
    w1 = [9, 13, 27, 32],
    Bc = dn && 'CompositionEvent' in window,
    el = null;
  dn && 'documentMode' in document && (el = document.documentMode);
  var E1 = dn && 'TextEvent' in window && !el,
    Zd = dn && (!Bc || (el && 8 < el && 11 >= el)),
    Qd = ' ',
    Pd = !1;
  function Jd(e, t) {
    switch (e) {
      case 'keyup':
        return w1.indexOf(t.keyCode) !== -1;
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
  function Wd(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var mi = !1;
  function A1(e, t) {
    switch (e) {
      case 'compositionend':
        return Wd(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Pd = !0), Qd);
      case 'textInput':
        return (e = t.data), e === Qd && Pd ? null : e;
      default:
        return null;
    }
  }
  function N1(e, t) {
    if (mi)
      return e === 'compositionend' || (!Bc && Jd(e, t)) ? ((e = Gd()), (_u = _c = Wn = null), (mi = !1), e) : null;
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
        return Zd && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var _1 = {
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
  function eh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!_1[e.type] : t === 'textarea';
  }
  function th(e, t, n, l) {
    di ? (hi ? hi.push(l) : (hi = [l])) : (di = l),
      (t = hs(t, 'onChange')),
      0 < t.length && ((n = new Mu('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t }));
  }
  var tl = null,
    rl = null;
  function O1(e) {
    Om(e, 0);
  }
  function Bu(e) {
    var t = Ra(e);
    if (kd(t)) return e;
  }
  function rh(e, t) {
    if (e === 'change') return t;
  }
  var nh = !1;
  if (dn) {
    var Cc;
    if (dn) {
      var Dc = 'oninput' in document;
      if (!Dc) {
        var ah = document.createElement('div');
        ah.setAttribute('oninput', 'return;'), (Dc = typeof ah.oninput == 'function');
      }
      Cc = Dc;
    } else Cc = !1;
    nh = Cc && (!document.documentMode || 9 < document.documentMode);
  }
  function ih() {
    tl && (tl.detachEvent('onpropertychange', lh), (rl = tl = null));
  }
  function lh(e) {
    if (e.propertyName === 'value' && Bu(rl)) {
      var t = [];
      th(t, rl, e, Ec(e)), Vd(O1, t);
    }
  }
  function T1(e, t, n) {
    e === 'focusin' ? (ih(), (tl = t), (rl = n), tl.attachEvent('onpropertychange', lh)) : e === 'focusout' && ih();
  }
  function M1(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Bu(rl);
  }
  function R1(e, t) {
    if (e === 'click') return Bu(t);
  }
  function B1(e, t) {
    if (e === 'input' || e === 'change') return Bu(t);
  }
  function C1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Mr = typeof Object.is == 'function' ? Object.is : C1;
  function nl(e, t) {
    if (Mr(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var c = n[l];
      if (!L.call(t, c) || !Mr(e[c], t[c])) return !1;
    }
    return !0;
  }
  function uh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sh(e, t) {
    var n = uh(e);
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
      n = uh(n);
    }
  }
  function ch(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ch(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function oh(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Au(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Au(e.document);
    }
    return t;
  }
  function Uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function D1(e, t) {
    var n = oh(t);
    t = e.focusedElem;
    var l = e.selectionRange;
    if (n !== t && t && t.ownerDocument && ch(t.ownerDocument.documentElement, t)) {
      if (l !== null && Uc(t)) {
        if (((e = l.start), (n = l.end), n === void 0 && (n = e), 'selectionStart' in t))
          (t.selectionStart = e), (t.selectionEnd = Math.min(n, t.value.length));
        else if (((n = ((e = t.ownerDocument || document) && e.defaultView) || window), n.getSelection)) {
          n = n.getSelection();
          var c = t.textContent.length,
            o = Math.min(l.start, c);
          (l = l.end === void 0 ? o : Math.min(l.end, c)),
            !n.extend && o > l && ((c = l), (l = o), (o = c)),
            (c = sh(t, o));
          var x = sh(t, l);
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
  var U1 = dn && 'documentMode' in document && 11 >= document.documentMode,
    pi = null,
    jc = null,
    al = null,
    kc = !1;
  function fh(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    kc ||
      pi == null ||
      pi !== Au(l) ||
      ((l = pi),
      'selectionStart' in l && Uc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
          })),
      (al && nl(al, l)) ||
        ((al = l),
        (l = hs(jc, 'onSelect')),
        0 < l.length &&
          ((t = new Mu('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: l }), (t.target = pi))));
  }
  function Ca(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
  }
  var gi = {
      animationend: Ca('Animation', 'AnimationEnd'),
      animationiteration: Ca('Animation', 'AnimationIteration'),
      animationstart: Ca('Animation', 'AnimationStart'),
      transitionrun: Ca('Transition', 'TransitionRun'),
      transitionstart: Ca('Transition', 'TransitionStart'),
      transitioncancel: Ca('Transition', 'TransitionCancel'),
      transitionend: Ca('Transition', 'TransitionEnd')
    },
    Ic = {},
    dh = {};
  dn &&
    ((dh = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete gi.animationend.animation, delete gi.animationiteration.animation, delete gi.animationstart.animation),
    'TransitionEvent' in window || delete gi.transitionend.transition);
  function Da(e) {
    if (Ic[e]) return Ic[e];
    if (!gi[e]) return e;
    var t = gi[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in dh) return (Ic[e] = t[n]);
    return e;
  }
  var hh = Da('animationend'),
    mh = Da('animationiteration'),
    ph = Da('animationstart'),
    j1 = Da('transitionrun'),
    k1 = Da('transitionstart'),
    I1 = Da('transitioncancel'),
    gh = Da('transitionend'),
    yh = new Map(),
    vh =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' '
      );
  function tn(e, t) {
    yh.set(e, t), kr(t, [e]);
  }
  var zr = [],
    yi = 0,
    qc = 0;
  function Cu() {
    for (var e = yi, t = (qc = yi = 0); t < e; ) {
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
      o !== 0 && bh(n, c, o);
    }
  }
  function Du(e, t, n, l) {
    (zr[yi++] = e),
      (zr[yi++] = t),
      (zr[yi++] = n),
      (zr[yi++] = l),
      (qc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Lc(e, t, n, l) {
    return Du(e, t, n, l), Uu(e);
  }
  function ea(e, t) {
    return Du(e, null, null, t), Uu(e);
  }
  function bh(e, t, n) {
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
      (c = 31 - qe(n)),
      (o = o.hiddenUpdates),
      (e = o[c]),
      e === null ? (o[c] = [t]) : e.push(t),
      (t.lane = n | 536870912));
  }
  function Uu(e) {
    if (50 < Ml) throw ((Ml = 0), (Yo = null), Error(u(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var vi = {},
    Sh = new WeakMap();
  function Hr(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = Sh.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: $(t) }), Sh.set(e, t), t);
    }
    return { value: e, source: t, stack: $(t) };
  }
  var bi = [],
    Si = 0,
    ju = null,
    ku = 0,
    Fr = [],
    Vr = 0,
    Ua = null,
    Nn = 1,
    _n = '';
  function ja(e, t) {
    (bi[Si++] = ku), (bi[Si++] = ju), (ju = e), (ku = t);
  }
  function xh(e, t, n) {
    (Fr[Vr++] = Nn), (Fr[Vr++] = _n), (Fr[Vr++] = Ua), (Ua = e);
    var l = Nn;
    e = _n;
    var c = 32 - qe(l) - 1;
    (l &= ~(1 << c)), (n += 1);
    var o = 32 - qe(t) + c;
    if (30 < o) {
      var x = c - (c % 5);
      (o = (l & ((1 << x) - 1)).toString(32)),
        (l >>= x),
        (c -= x),
        (Nn = (1 << (32 - qe(t) + c)) | (n << c) | l),
        (_n = o + e);
    } else (Nn = (1 << o) | (n << c) | l), (_n = e);
  }
  function zc(e) {
    e.return !== null && (ja(e, 1), xh(e, 1, 0));
  }
  function Hc(e) {
    for (; e === ju; ) (ju = bi[--Si]), (bi[Si] = null), (ku = bi[--Si]), (bi[Si] = null);
    for (; e === Ua; )
      (Ua = Fr[--Vr]), (Fr[Vr] = null), (_n = Fr[--Vr]), (Fr[Vr] = null), (Nn = Fr[--Vr]), (Fr[Vr] = null);
  }
  var pr = null,
    rr = null,
    bt = !1,
    rn = null,
    hn = !1,
    Fc = Error(u(519));
  function ka(e) {
    var t = Error(u(418, ''));
    throw (ul(Hr(t, e)), Fc);
  }
  function wh(e) {
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
        for (n = 0; n < Bl.length; n++) gt(Bl[n], t);
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
        gt('invalid', t), Id(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), Eu(t);
        break;
      case 'select':
        gt('invalid', t);
        break;
      case 'textarea':
        gt('invalid', t), Ld(t, l.value, l.defaultValue, l.children), Eu(t);
    }
    (n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      Bm(t.textContent, n)
        ? (l.popover != null && (gt('beforetoggle', t), gt('toggle', t)),
          l.onScroll != null && gt('scroll', t),
          l.onScrollEnd != null && gt('scrollend', t),
          l.onClick != null && (t.onclick = ms),
          (t = !0))
        : (t = !1),
      t || ka(e);
  }
  function Eh(e) {
    for (pr = e.return; pr; )
      switch (pr.tag) {
        case 3:
        case 27:
          hn = !0;
          return;
        case 5:
        case 13:
          hn = !1;
          return;
        default:
          pr = pr.return;
      }
  }
  function il(e) {
    if (e !== pr) return !1;
    if (!bt) return Eh(e), (bt = !0), !1;
    var t = !1,
      n;
    if (
      ((n = e.tag !== 3 && e.tag !== 27) &&
        ((n = e.tag === 5) && ((n = e.type), (n = !(n !== 'form' && n !== 'button') || of(e.type, e.memoizedProps))),
        (n = !n)),
      n && (t = !0),
      t && rr && ka(e),
      Eh(e),
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
    } else rr = pr ? an(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ll() {
    (rr = pr = null), (bt = !1);
  }
  function ul(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  var sl = Error(u(460)),
    Ah = Error(u(474)),
    Vc = { then: function () {} };
  function Nh(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Iu() {}
  function _h(e, t, n) {
    switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Iu, Iu), (t = n)), t.status)) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), e === sl ? Error(u(483)) : e);
      default:
        if (typeof t.status == 'string') t.then(Iu, Iu);
        else {
          if (((e = Mt), e !== null && 100 < e.shellSuspendCounter)) throw Error(u(482));
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
            throw ((e = t.reason), e === sl ? Error(u(483)) : e);
        }
        throw ((cl = t), sl);
    }
  }
  var cl = null;
  function Oh() {
    if (cl === null) throw Error(u(459));
    var e = cl;
    return (cl = null), e;
  }
  var xi = null,
    ol = 0;
  function qu(e) {
    var t = ol;
    return (ol += 1), xi === null && (xi = []), _h(xi, e, t);
  }
  function fl(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Lu(e, t) {
    throw t.$$typeof === f
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(u(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
  }
  function Th(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Mh(e) {
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
      return (pe = da(pe, ce)), (pe.index = 0), (pe.sibling = null), pe;
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
    function C(pe, ce, ge, Te) {
      return ce === null || ce.tag !== 6
        ? ((ce = qo(ge, pe.mode, Te)), (ce.return = pe), ce)
        : ((ce = c(ce, ge)), (ce.return = pe), ce);
    }
    function X(pe, ce, ge, Te) {
      var Xe = ge.type;
      return Xe === p
        ? _e(pe, ce, ge.props.children, Te, ge.key)
        : ce !== null &&
            (ce.elementType === Xe || (typeof Xe == 'object' && Xe !== null && Xe.$$typeof === z && Th(Xe) === ce.type))
          ? ((ce = c(ce, ge.props)), fl(ce, ge), (ce.return = pe), ce)
          : ((ce = ns(ge.type, ge.key, ge.props, null, pe.mode, Te)), fl(ce, ge), (ce.return = pe), ce);
    }
    function fe(pe, ce, ge, Te) {
      return ce === null ||
        ce.tag !== 4 ||
        ce.stateNode.containerInfo !== ge.containerInfo ||
        ce.stateNode.implementation !== ge.implementation
        ? ((ce = Lo(ge, pe.mode, Te)), (ce.return = pe), ce)
        : ((ce = c(ce, ge.children || [])), (ce.return = pe), ce);
    }
    function _e(pe, ce, ge, Te, Xe) {
      return ce === null || ce.tag !== 7
        ? ((ce = Ya(ge, pe.mode, Te, Xe)), (ce.return = pe), ce)
        : ((ce = c(ce, ge)), (ce.return = pe), ce);
    }
    function Be(pe, ce, ge) {
      if ((typeof ce == 'string' && ce !== '') || typeof ce == 'number' || typeof ce == 'bigint')
        return (ce = qo('' + ce, pe.mode, ge)), (ce.return = pe), ce;
      if (typeof ce == 'object' && ce !== null) {
        switch (ce.$$typeof) {
          case d:
            return (ge = ns(ce.type, ce.key, ce.props, null, pe.mode, ge)), fl(ge, ce), (ge.return = pe), ge;
          case h:
            return (ce = Lo(ce, pe.mode, ge)), (ce.return = pe), ce;
          case z:
            var Te = ce._init;
            return (ce = Te(ce._payload)), Be(pe, ce, ge);
        }
        if (ye(ce) || he(ce)) return (ce = Ya(ce, pe.mode, ge, null)), (ce.return = pe), ce;
        if (typeof ce.then == 'function') return Be(pe, qu(ce), ge);
        if (ce.$$typeof === w) return Be(pe, es(pe, ce), ge);
        Lu(pe, ce);
      }
      return null;
    }
    function be(pe, ce, ge, Te) {
      var Xe = ce !== null ? ce.key : null;
      if ((typeof ge == 'string' && ge !== '') || typeof ge == 'number' || typeof ge == 'bigint')
        return Xe !== null ? null : C(pe, ce, '' + ge, Te);
      if (typeof ge == 'object' && ge !== null) {
        switch (ge.$$typeof) {
          case d:
            return ge.key === Xe ? X(pe, ce, ge, Te) : null;
          case h:
            return ge.key === Xe ? fe(pe, ce, ge, Te) : null;
          case z:
            return (Xe = ge._init), (ge = Xe(ge._payload)), be(pe, ce, ge, Te);
        }
        if (ye(ge) || he(ge)) return Xe !== null ? null : _e(pe, ce, ge, Te, null);
        if (typeof ge.then == 'function') return be(pe, ce, qu(ge), Te);
        if (ge.$$typeof === w) return be(pe, ce, es(pe, ge), Te);
        Lu(pe, ge);
      }
      return null;
    }
    function Ne(pe, ce, ge, Te, Xe) {
      if ((typeof Te == 'string' && Te !== '') || typeof Te == 'number' || typeof Te == 'bigint')
        return (pe = pe.get(ge) || null), C(ce, pe, '' + Te, Xe);
      if (typeof Te == 'object' && Te !== null) {
        switch (Te.$$typeof) {
          case d:
            return (pe = pe.get(Te.key === null ? ge : Te.key) || null), X(ce, pe, Te, Xe);
          case h:
            return (pe = pe.get(Te.key === null ? ge : Te.key) || null), fe(ce, pe, Te, Xe);
          case z:
            var ft = Te._init;
            return (Te = ft(Te._payload)), Ne(pe, ce, ge, Te, Xe);
        }
        if (ye(Te) || he(Te)) return (pe = pe.get(ge) || null), _e(ce, pe, Te, Xe, null);
        if (typeof Te.then == 'function') return Ne(pe, ce, ge, qu(Te), Xe);
        if (Te.$$typeof === w) return Ne(pe, ce, ge, es(ce, Te), Xe);
        Lu(ce, Te);
      }
      return null;
    }
    function Ze(pe, ce, ge, Te) {
      for (var Xe = null, ft = null, Qe = ce, tt = (ce = 0), tr = null; Qe !== null && tt < ge.length; tt++) {
        Qe.index > tt ? ((tr = Qe), (Qe = null)) : (tr = Qe.sibling);
        var St = be(pe, Qe, ge[tt], Te);
        if (St === null) {
          Qe === null && (Qe = tr);
          break;
        }
        e && Qe && St.alternate === null && t(pe, Qe),
          (ce = o(St, ce, tt)),
          ft === null ? (Xe = St) : (ft.sibling = St),
          (ft = St),
          (Qe = tr);
      }
      if (tt === ge.length) return n(pe, Qe), bt && ja(pe, tt), Xe;
      if (Qe === null) {
        for (; tt < ge.length; tt++)
          (Qe = Be(pe, ge[tt], Te)),
            Qe !== null && ((ce = o(Qe, ce, tt)), ft === null ? (Xe = Qe) : (ft.sibling = Qe), (ft = Qe));
        return bt && ja(pe, tt), Xe;
      }
      for (Qe = l(Qe); tt < ge.length; tt++)
        (tr = Ne(Qe, pe, tt, ge[tt], Te)),
          tr !== null &&
            (e && tr.alternate !== null && Qe.delete(tr.key === null ? tt : tr.key),
            (ce = o(tr, ce, tt)),
            ft === null ? (Xe = tr) : (ft.sibling = tr),
            (ft = tr));
      return (
        e &&
          Qe.forEach(function (ba) {
            return t(pe, ba);
          }),
        bt && ja(pe, tt),
        Xe
      );
    }
    function nt(pe, ce, ge, Te) {
      if (ge == null) throw Error(u(151));
      for (
        var Xe = null, ft = null, Qe = ce, tt = (ce = 0), tr = null, St = ge.next();
        Qe !== null && !St.done;
        tt++, St = ge.next()
      ) {
        Qe.index > tt ? ((tr = Qe), (Qe = null)) : (tr = Qe.sibling);
        var ba = be(pe, Qe, St.value, Te);
        if (ba === null) {
          Qe === null && (Qe = tr);
          break;
        }
        e && Qe && ba.alternate === null && t(pe, Qe),
          (ce = o(ba, ce, tt)),
          ft === null ? (Xe = ba) : (ft.sibling = ba),
          (ft = ba),
          (Qe = tr);
      }
      if (St.done) return n(pe, Qe), bt && ja(pe, tt), Xe;
      if (Qe === null) {
        for (; !St.done; tt++, St = ge.next())
          (St = Be(pe, St.value, Te)),
            St !== null && ((ce = o(St, ce, tt)), ft === null ? (Xe = St) : (ft.sibling = St), (ft = St));
        return bt && ja(pe, tt), Xe;
      }
      for (Qe = l(Qe); !St.done; tt++, St = ge.next())
        (St = Ne(Qe, pe, tt, St.value, Te)),
          St !== null &&
            (e && St.alternate !== null && Qe.delete(St.key === null ? tt : St.key),
            (ce = o(St, ce, tt)),
            ft === null ? (Xe = St) : (ft.sibling = St),
            (ft = St));
      return (
        e &&
          Qe.forEach(function (Pv) {
            return t(pe, Pv);
          }),
        bt && ja(pe, tt),
        Xe
      );
    }
    function Vt(pe, ce, ge, Te) {
      if (
        (typeof ge == 'object' && ge !== null && ge.type === p && ge.key === null && (ge = ge.props.children),
        typeof ge == 'object' && ge !== null)
      ) {
        switch (ge.$$typeof) {
          case d:
            e: {
              for (var Xe = ge.key; ce !== null; ) {
                if (ce.key === Xe) {
                  if (((Xe = ge.type), Xe === p)) {
                    if (ce.tag === 7) {
                      n(pe, ce.sibling), (Te = c(ce, ge.props.children)), (Te.return = pe), (pe = Te);
                      break e;
                    }
                  } else if (
                    ce.elementType === Xe ||
                    (typeof Xe == 'object' && Xe !== null && Xe.$$typeof === z && Th(Xe) === ce.type)
                  ) {
                    n(pe, ce.sibling), (Te = c(ce, ge.props)), fl(Te, ge), (Te.return = pe), (pe = Te);
                    break e;
                  }
                  n(pe, ce);
                  break;
                } else t(pe, ce);
                ce = ce.sibling;
              }
              ge.type === p
                ? ((Te = Ya(ge.props.children, pe.mode, Te, ge.key)), (Te.return = pe), (pe = Te))
                : ((Te = ns(ge.type, ge.key, ge.props, null, pe.mode, Te)), fl(Te, ge), (Te.return = pe), (pe = Te));
            }
            return x(pe);
          case h:
            e: {
              for (Xe = ge.key; ce !== null; ) {
                if (ce.key === Xe)
                  if (
                    ce.tag === 4 &&
                    ce.stateNode.containerInfo === ge.containerInfo &&
                    ce.stateNode.implementation === ge.implementation
                  ) {
                    n(pe, ce.sibling), (Te = c(ce, ge.children || [])), (Te.return = pe), (pe = Te);
                    break e;
                  } else {
                    n(pe, ce);
                    break;
                  }
                else t(pe, ce);
                ce = ce.sibling;
              }
              (Te = Lo(ge, pe.mode, Te)), (Te.return = pe), (pe = Te);
            }
            return x(pe);
          case z:
            return (Xe = ge._init), (ge = Xe(ge._payload)), Vt(pe, ce, ge, Te);
        }
        if (ye(ge)) return Ze(pe, ce, ge, Te);
        if (he(ge)) {
          if (((Xe = he(ge)), typeof Xe != 'function')) throw Error(u(150));
          return (ge = Xe.call(ge)), nt(pe, ce, ge, Te);
        }
        if (typeof ge.then == 'function') return Vt(pe, ce, qu(ge), Te);
        if (ge.$$typeof === w) return Vt(pe, ce, es(pe, ge), Te);
        Lu(pe, ge);
      }
      return (typeof ge == 'string' && ge !== '') || typeof ge == 'number' || typeof ge == 'bigint'
        ? ((ge = '' + ge),
          ce !== null && ce.tag === 6
            ? (n(pe, ce.sibling), (Te = c(ce, ge)), (Te.return = pe), (pe = Te))
            : (n(pe, ce), (Te = qo(ge, pe.mode, Te)), (Te.return = pe), (pe = Te)),
          x(pe))
        : n(pe, ce);
    }
    return function (pe, ce, ge, Te) {
      try {
        ol = 0;
        var Xe = Vt(pe, ce, ge, Te);
        return (xi = null), Xe;
      } catch (Qe) {
        if (Qe === sl) throw Qe;
        var ft = Kr(29, Qe, null, pe.mode);
        return (ft.lanes = Te), (ft.return = pe), ft;
      } finally {
      }
    };
  }
  var Ia = Mh(!0),
    Rh = Mh(!1),
    wi = Re(null),
    zu = Re(0);
  function Bh(e, t) {
    (e = In), B(zu, e), B(wi, t), (In = e | t.baseLanes);
  }
  function Gc() {
    B(zu, In), B(wi, wi.current);
  }
  function $c() {
    (In = zu.current), ke(wi), ke(zu);
  }
  var Gr = Re(null),
    mn = null;
  function ta(e) {
    var t = e.alternate;
    B(Qt, Qt.current & 1),
      B(Gr, e),
      mn === null && (t === null || wi.current !== null || t.memoizedState !== null) && (mn = e);
  }
  function Ch(e) {
    if (e.tag === 22) {
      if ((B(Qt, Qt.current), B(Gr, e), mn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (mn = e);
      }
    } else ra();
  }
  function ra() {
    B(Qt, Qt.current), B(Gr, Gr.current);
  }
  function On(e) {
    ke(Gr), mn === e && (mn = null), ke(Qt);
  }
  var Qt = Re(0);
  function Hu(e) {
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
  var q1 =
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
    L1 = r.unstable_scheduleCallback,
    z1 = r.unstable_NormalPriority,
    Pt = { $$typeof: w, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Yc() {
    return { controller: new q1(), data: new Map(), refCount: 0 };
  }
  function dl(e) {
    e.refCount--,
      e.refCount === 0 &&
        L1(z1, function () {
          e.controller.abort();
        });
  }
  var hl = null,
    Kc = 0,
    Ei = 0,
    Ai = null;
  function H1(e, t) {
    if (hl === null) {
      var n = (hl = []);
      (Kc = 0),
        (Ei = ef()),
        (Ai = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          }
        });
    }
    return Kc++, t.then(Dh, Dh), t;
  }
  function Dh() {
    if (--Kc === 0 && hl !== null) {
      Ai !== null && (Ai.status = 'fulfilled');
      var e = hl;
      (hl = null), (Ei = 0), (Ai = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function F1(e, t) {
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
  var Uh = A.S;
  A.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && H1(e, t), Uh !== null && Uh(e, t);
  };
  var qa = Re(null);
  function Xc() {
    var e = qa.current;
    return e !== null ? e : Mt.pooledCache;
  }
  function Fu(e, t) {
    t === null ? B(qa, qa.current) : B(qa, t.pool);
  }
  function jh() {
    var e = Xc();
    return e === null ? null : { parent: Pt._currentValue, pool: e };
  }
  var na = 0,
    ct = null,
    Et = null,
    Kt = null,
    Vu = !1,
    Ni = !1,
    La = !1,
    Gu = 0,
    ml = 0,
    _i = null,
    V1 = 0;
  function Gt() {
    throw Error(u(321));
  }
  function Zc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Mr(e[n], t[n])) return !1;
    return !0;
  }
  function Qc(e, t, n, l, c, o) {
    return (
      (na = o),
      (ct = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? za : aa),
      (La = !1),
      (o = n(l, c)),
      (La = !1),
      Ni && (o = Ih(t, n, l, c)),
      kh(e),
      o
    );
  }
  function kh(e) {
    A.H = pn;
    var t = Et !== null && Et.next !== null;
    if (((na = 0), (Kt = Et = ct = null), (Vu = !1), (ml = 0), (_i = null), t)) throw Error(u(300));
    e === null || Wt || ((e = e.dependencies), e !== null && Wu(e) && (Wt = !0));
  }
  function Ih(e, t, n, l) {
    ct = e;
    var c = 0;
    do {
      if ((Ni && (_i = null), (ml = 0), (Ni = !1), 25 <= c)) throw Error(u(301));
      if (((c += 1), (Kt = Et = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        (o.lastEffect = null), (o.events = null), (o.stores = null), o.memoCache != null && (o.memoCache.index = 0);
      }
      (A.H = Ha), (o = t(n, l));
    } while (Ni);
    return o;
  }
  function G1() {
    var e = A.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? pl(t) : t),
      (e = e.useState()[0]),
      (Et !== null ? Et.memoizedState : null) !== e && (ct.flags |= 1024),
      t
    );
  }
  function Pc() {
    var e = Gu !== 0;
    return (Gu = 0), e;
  }
  function Jc(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Wc(e) {
    if (Vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Vu = !1;
    }
    (na = 0), (Kt = Et = ct = null), (Ni = !1), (ml = Gu = 0), (_i = null);
  }
  function Sr() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Kt === null ? (ct.memoizedState = Kt = e) : (Kt = Kt.next = e), Kt;
  }
  function Xt() {
    if (Et === null) {
      var e = ct.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Et.next;
    var t = Kt === null ? ct.memoizedState : Kt.next;
    if (t !== null) (Kt = t), (Et = e);
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
        Kt === null ? (ct.memoizedState = Kt = e) : (Kt = Kt.next = e);
    }
    return Kt;
  }
  var $u;
  $u = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function pl(e) {
    var t = ml;
    return (
      (ml += 1),
      _i === null && (_i = []),
      (e = _h(_i, e, t)),
      (t = ct),
      (Kt === null ? t.memoizedState : Kt.next) === null &&
        ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? za : aa)),
      e
    );
  }
  function Yu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return pl(e);
      if (e.$$typeof === w) return ur(e);
    }
    throw Error(u(438, String(e)));
  }
  function eo(e) {
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
      n === null && ((n = $u()), (ct.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = ze;
    return t.index++, n;
  }
  function Tn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ku(e) {
    var t = Xt();
    return to(t, Et, e);
  }
  function to(e, t, n) {
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
        X = null,
        fe = t,
        _e = !1;
      do {
        var Be = fe.lane & -536870913;
        if (Be !== fe.lane ? (yt & Be) === Be : (na & Be) === Be) {
          var be = fe.revertLane;
          if (be === 0)
            X !== null &&
              (X = X.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: fe.action,
                  hasEagerState: fe.hasEagerState,
                  eagerState: fe.eagerState,
                  next: null
                }),
              Be === Ei && (_e = !0);
          else if ((na & be) === be) {
            (fe = fe.next), be === Ei && (_e = !0);
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
              X === null ? ((C = X = Be), (x = o)) : (X = X.next = Be),
              (ct.lanes |= be),
              (ha |= be);
          (Be = fe.action), La && n(o, Be), (o = fe.hasEagerState ? fe.eagerState : n(o, Be));
        } else
          (be = {
            lane: Be,
            revertLane: fe.revertLane,
            action: fe.action,
            hasEagerState: fe.hasEagerState,
            eagerState: fe.eagerState,
            next: null
          }),
            X === null ? ((C = X = be), (x = o)) : (X = X.next = be),
            (ct.lanes |= Be),
            (ha |= Be);
        fe = fe.next;
      } while (fe !== null && fe !== t);
      if ((X === null ? (x = o) : (X.next = C), !Mr(o, e.memoizedState) && ((Wt = !0), _e && ((n = Ai), n !== null))))
        throw n;
      (e.memoizedState = o), (e.baseState = x), (e.baseQueue = X), (l.lastRenderedState = o);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function ro(e) {
    var t = Xt(),
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
      Mr(o, t.memoizedState) || (Wt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, l];
  }
  function qh(e, t, n) {
    var l = ct,
      c = Xt(),
      o = bt;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = t();
    var x = !Mr((Et || c).memoizedState, n);
    if (
      (x && ((c.memoizedState = n), (Wt = !0)),
      (c = c.queue),
      io(Hh.bind(null, l, c, e), [e]),
      c.getSnapshot !== t || x || (Kt !== null && Kt.memoizedState.tag & 1))
    ) {
      if (((l.flags |= 2048), Oi(9, zh.bind(null, l, c, n, t), { destroy: void 0 }, null), Mt === null))
        throw Error(u(349));
      o || (na & 60) !== 0 || Lh(l, t, n);
    }
    return n;
  }
  function Lh(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ct.updateQueue),
      t === null
        ? ((t = $u()), (ct.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function zh(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), Fh(t) && Vh(e);
  }
  function Hh(e, t, n) {
    return n(function () {
      Fh(t) && Vh(e);
    });
  }
  function Fh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mr(e, n);
    } catch {
      return !0;
    }
  }
  function Vh(e) {
    var t = ea(e, 2);
    t !== null && gr(t, e, 2);
  }
  function no(e) {
    var t = Sr();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), La)) {
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
      (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Tn, lastRenderedState: e }),
      t
    );
  }
  function Gh(e, t, n, l) {
    return (e.baseState = n), to(e, Et, typeof l == 'function' ? l : Tn);
  }
  function $1(e, t, n, l, c) {
    if (Qu(e)) throw Error(u(485));
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
        n === null ? ((o.next = t.pending = o), $h(t, o)) : ((o.next = n.next), (t.pending = n.next = o));
    }
  }
  function $h(e, t) {
    var n = t.action,
      l = t.payload,
      c = e.state;
    if (t.isTransition) {
      var o = A.T,
        x = {};
      A.T = x;
      try {
        var C = n(c, l),
          X = A.S;
        X !== null && X(x, C), Yh(e, t, C);
      } catch (fe) {
        ao(e, t, fe);
      } finally {
        A.T = o;
      }
    } else
      try {
        (o = n(c, l)), Yh(e, t, o);
      } catch (fe) {
        ao(e, t, fe);
      }
  }
  function Yh(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            Kh(e, t, l);
          },
          function (l) {
            return ao(e, t, l);
          }
        )
      : Kh(e, t, n);
  }
  function Kh(e, t, n) {
    (t.status = 'fulfilled'),
      (t.value = n),
      Xh(t),
      (e.state = n),
      (t = e.pending),
      t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), $h(e, n)));
  }
  function ao(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = 'rejected'), (t.reason = n), Xh(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function Xh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Zh(e, t) {
    return t;
  }
  function Qh(e, t) {
    if (bt) {
      var n = Mt.formState;
      if (n !== null) {
        e: {
          var l = ct;
          if (bt) {
            if (rr) {
              t: {
                for (var c = rr, o = hn; c.nodeType !== 8; ) {
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
            ka(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = Sr()),
      (n.memoizedState = n.baseState = t),
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zh, lastRenderedState: t }),
      (n.queue = l),
      (n = m0.bind(null, ct, l)),
      (l.dispatch = n),
      (l = no(!1)),
      (o = oo.bind(null, ct, !1, l.queue)),
      (l = Sr()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (n = $1.bind(null, ct, c, o, n)),
      (c.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Ph(e) {
    var t = Xt();
    return Jh(t, Et, e);
  }
  function Jh(e, t, n) {
    (t = to(e, t, Zh)[0]),
      (e = Ku(Tn)[0]),
      (t = typeof t == 'object' && t !== null && typeof t.then == 'function' ? pl(t) : t);
    var l = Xt(),
      c = l.queue,
      o = c.dispatch;
    return (
      n !== l.memoizedState && ((ct.flags |= 2048), Oi(9, Y1.bind(null, c, n), { destroy: void 0 }, null)), [t, o, e]
    );
  }
  function Y1(e, t) {
    e.action = t;
  }
  function Wh(e) {
    var t = Xt(),
      n = Et;
    if (n !== null) return Jh(t, n, e);
    Xt(), (t = t.memoizedState), (n = Xt());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function Oi(e, t, n, l) {
    return (
      (e = { tag: e, create: t, inst: n, deps: l, next: null }),
      (t = ct.updateQueue),
      t === null && ((t = $u()), (ct.updateQueue = t)),
      (n = t.lastEffect),
      n === null ? (t.lastEffect = e.next = e) : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function e0() {
    return Xt().memoizedState;
  }
  function Xu(e, t, n, l) {
    var c = Sr();
    (ct.flags |= e), (c.memoizedState = Oi(1 | t, n, { destroy: void 0 }, l === void 0 ? null : l));
  }
  function Zu(e, t, n, l) {
    var c = Xt();
    l = l === void 0 ? null : l;
    var o = c.memoizedState.inst;
    Et !== null && l !== null && Zc(l, Et.memoizedState.deps)
      ? (c.memoizedState = Oi(t, n, o, l))
      : ((ct.flags |= e), (c.memoizedState = Oi(1 | t, n, o, l)));
  }
  function t0(e, t) {
    Xu(8390656, 8, e, t);
  }
  function io(e, t) {
    Zu(2048, 8, e, t);
  }
  function r0(e, t) {
    return Zu(4, 2, e, t);
  }
  function n0(e, t) {
    return Zu(4, 4, e, t);
  }
  function a0(e, t) {
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
  function i0(e, t, n) {
    (n = n != null ? n.concat([e]) : null), Zu(4, 4, a0.bind(null, t, e), n);
  }
  function lo() {}
  function l0(e, t) {
    var n = Xt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Zc(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function u0(e, t) {
    var n = Xt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Zc(t, l[1])) return l[0];
    if (((l = e()), La)) {
      Ue(!0);
      try {
        e();
      } finally {
        Ue(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function uo(e, t, n) {
    return n === void 0 || (na & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = cm()), (ct.lanes |= e), (ha |= e), n);
  }
  function s0(e, t, n, l) {
    return Mr(n, t)
      ? n
      : wi.current !== null
        ? ((e = uo(e, n, l)), Mr(e, t) || (Wt = !0), e)
        : (na & 42) === 0
          ? ((Wt = !0), (e.memoizedState = n))
          : ((e = cm()), (ct.lanes |= e), (ha |= e), t);
  }
  function c0(e, t, n, l, c) {
    var o = T.p;
    T.p = o !== 0 && 8 > o ? o : 8;
    var x = A.T,
      C = {};
    (A.T = C), oo(e, !1, t, n);
    try {
      var X = c(),
        fe = A.S;
      if ((fe !== null && fe(C, X), X !== null && typeof X == 'object' && typeof X.then == 'function')) {
        var _e = F1(X, l);
        gl(e, t, _e, Dr(e));
      } else gl(e, t, l, Dr(e));
    } catch (Be) {
      gl(e, t, { then: function () {}, status: 'rejected', reason: Be }, Dr());
    } finally {
      (T.p = o), (A.T = x);
    }
  }
  function K1() {}
  function so(e, t, n, l) {
    if (e.tag !== 5) throw Error(u(476));
    var c = o0(e).queue;
    c0(
      e,
      c,
      t,
      je,
      n === null
        ? K1
        : function () {
            return f0(e), n(l);
          }
    );
  }
  function o0(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: je,
      baseState: je,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Tn, lastRenderedState: je },
      next: null
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Tn, lastRenderedState: n },
        next: null
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function f0(e) {
    var t = o0(e).next.queue;
    gl(e, t, {}, Dr());
  }
  function co() {
    return ur(kl);
  }
  function d0() {
    return Xt().memoizedState;
  }
  function h0() {
    return Xt().memoizedState;
  }
  function X1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Dr();
          e = ua(n);
          var l = sa(t, e, n);
          l !== null && (gr(l, t, n), bl(l, t, n)), (t = { cache: Yc() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Z1(e, t, n) {
    var l = Dr();
    (n = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
      Qu(e) ? p0(t, n) : ((n = Lc(e, t, n, l)), n !== null && (gr(n, e, l), g0(n, t, l)));
  }
  function m0(e, t, n) {
    var l = Dr();
    gl(e, t, n, l);
  }
  function gl(e, t, n, l) {
    var c = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Qu(e)) p0(t, c);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
        try {
          var x = t.lastRenderedState,
            C = o(x, n);
          if (((c.hasEagerState = !0), (c.eagerState = C), Mr(C, x))) return Du(e, t, c, 0), Mt === null && Cu(), !1;
        } catch {
        } finally {
        }
      if (((n = Lc(e, t, c, l)), n !== null)) return gr(n, e, l), g0(n, t, l), !0;
    }
    return !1;
  }
  function oo(e, t, n, l) {
    if (((l = { lane: 2, revertLane: ef(), action: l, hasEagerState: !1, eagerState: null, next: null }), Qu(e))) {
      if (t) throw Error(u(479));
    } else (t = Lc(e, n, l, 2)), t !== null && gr(t, e, 2);
  }
  function Qu(e) {
    var t = e.alternate;
    return e === ct || (t !== null && t === ct);
  }
  function p0(e, t) {
    Ni = Vu = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function g0(e, t, n) {
    if ((n & 4194176) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), pc(e, n);
    }
  }
  var pn = {
    readContext: ur,
    use: Yu,
    useCallback: Gt,
    useContext: Gt,
    useEffect: Gt,
    useImperativeHandle: Gt,
    useLayoutEffect: Gt,
    useInsertionEffect: Gt,
    useMemo: Gt,
    useReducer: Gt,
    useRef: Gt,
    useState: Gt,
    useDebugValue: Gt,
    useDeferredValue: Gt,
    useTransition: Gt,
    useSyncExternalStore: Gt,
    useId: Gt
  };
  (pn.useCacheRefresh = Gt),
    (pn.useMemoCache = Gt),
    (pn.useHostTransitionStatus = Gt),
    (pn.useFormState = Gt),
    (pn.useActionState = Gt),
    (pn.useOptimistic = Gt);
  var za = {
    readContext: ur,
    use: Yu,
    useCallback: function (e, t) {
      return (Sr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ur,
    useEffect: t0,
    useImperativeHandle: function (e, t, n) {
      (n = n != null ? n.concat([e]) : null), Xu(4194308, 4, a0.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Xu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Xu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Sr();
      t = t === void 0 ? null : t;
      var l = e();
      if (La) {
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
      var l = Sr();
      if (n !== void 0) {
        var c = n(t);
        if (La) {
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
        (e = e.dispatch = Z1.bind(null, ct, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Sr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = no(e);
      var t = e.queue,
        n = m0.bind(null, ct, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: lo,
    useDeferredValue: function (e, t) {
      var n = Sr();
      return uo(n, e, t);
    },
    useTransition: function () {
      var e = no(!1);
      return (e = c0.bind(null, ct, e.queue, !0, !1)), (Sr().memoizedState = e), [!1, e];
    },
    useSyncExternalStore: function (e, t, n) {
      var l = ct,
        c = Sr();
      if (bt) {
        if (n === void 0) throw Error(u(407));
        n = n();
      } else {
        if (((n = t()), Mt === null)) throw Error(u(349));
        (yt & 60) !== 0 || Lh(l, t, n);
      }
      c.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (c.queue = o),
        t0(Hh.bind(null, l, o, e), [e]),
        (l.flags |= 2048),
        Oi(9, zh.bind(null, l, o, n, t), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var e = Sr(),
        t = Mt.identifierPrefix;
      if (bt) {
        var n = _n,
          l = Nn;
        (n = (l & ~(1 << (32 - qe(l) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Gu++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = V1++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Sr().memoizedState = X1.bind(null, ct));
    }
  };
  (za.useMemoCache = eo),
    (za.useHostTransitionStatus = co),
    (za.useFormState = Qh),
    (za.useActionState = Qh),
    (za.useOptimistic = function (e) {
      var t = Sr();
      t.memoizedState = t.baseState = e;
      var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return (t.queue = n), (t = oo.bind(null, ct, !0, n)), (n.dispatch = t), [e, t];
    });
  var aa = {
    readContext: ur,
    use: Yu,
    useCallback: l0,
    useContext: ur,
    useEffect: io,
    useImperativeHandle: i0,
    useInsertionEffect: r0,
    useLayoutEffect: n0,
    useMemo: u0,
    useReducer: Ku,
    useRef: e0,
    useState: function () {
      return Ku(Tn);
    },
    useDebugValue: lo,
    useDeferredValue: function (e, t) {
      var n = Xt();
      return s0(n, Et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Ku(Tn)[0],
        t = Xt().memoizedState;
      return [typeof e == 'boolean' ? e : pl(e), t];
    },
    useSyncExternalStore: qh,
    useId: d0
  };
  (aa.useCacheRefresh = h0),
    (aa.useMemoCache = eo),
    (aa.useHostTransitionStatus = co),
    (aa.useFormState = Ph),
    (aa.useActionState = Ph),
    (aa.useOptimistic = function (e, t) {
      var n = Xt();
      return Gh(n, Et, e, t);
    });
  var Ha = {
    readContext: ur,
    use: Yu,
    useCallback: l0,
    useContext: ur,
    useEffect: io,
    useImperativeHandle: i0,
    useInsertionEffect: r0,
    useLayoutEffect: n0,
    useMemo: u0,
    useReducer: ro,
    useRef: e0,
    useState: function () {
      return ro(Tn);
    },
    useDebugValue: lo,
    useDeferredValue: function (e, t) {
      var n = Xt();
      return Et === null ? uo(n, e, t) : s0(n, Et.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ro(Tn)[0],
        t = Xt().memoizedState;
      return [typeof e == 'boolean' ? e : pl(e), t];
    },
    useSyncExternalStore: qh,
    useId: d0
  };
  (Ha.useCacheRefresh = h0),
    (Ha.useMemoCache = eo),
    (Ha.useHostTransitionStatus = co),
    (Ha.useFormState = Wh),
    (Ha.useActionState = Wh),
    (Ha.useOptimistic = function (e, t) {
      var n = Xt();
      return Et !== null ? Gh(n, Et, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    });
  function fo(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : O({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ho = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? H(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Dr(),
        c = ua(l);
      (c.payload = t), n != null && (c.callback = n), (t = sa(e, c, l)), t !== null && (gr(t, e, l), bl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Dr(),
        c = ua(l);
      (c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = sa(e, c, l)),
        t !== null && (gr(t, e, l), bl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Dr(),
        l = ua(n);
      (l.tag = 2), t != null && (l.callback = t), (t = sa(e, l, n)), t !== null && (gr(t, e, n), bl(t, e, n));
    }
  };
  function y0(e, t, n, l, c, o, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, o, x)
        : t.prototype && t.prototype.isPureReactComponent
          ? !nl(n, l) || !nl(c, o)
          : !0
    );
  }
  function v0(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && ho.enqueueReplaceState(t, t.state, null);
  }
  function Fa(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = O({}, n));
      for (var c in e) n[c] === void 0 && (n[c] = e[c]);
    }
    return n;
  }
  var Pu =
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
  function b0(e) {
    Pu(e);
  }
  function S0(e) {
    console.error(e);
  }
  function x0(e) {
    Pu(e);
  }
  function Ju(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function w0(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function mo(e, t, n) {
    return (
      (n = ua(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Ju(e, t);
      }),
      n
    );
  }
  function E0(e) {
    return (e = ua(e)), (e.tag = 3), e;
  }
  function A0(e, t, n, l) {
    var c = n.type.getDerivedStateFromError;
    if (typeof c == 'function') {
      var o = l.value;
      (e.payload = function () {
        return c(o);
      }),
        (e.callback = function () {
          w0(t, n, l);
        });
    }
    var x = n.stateNode;
    x !== null &&
      typeof x.componentDidCatch == 'function' &&
      (e.callback = function () {
        w0(t, n, l), typeof c != 'function' && (ma === null ? (ma = new Set([this])) : ma.add(this));
        var C = l.stack;
        this.componentDidCatch(l.value, { componentStack: C !== null ? C : '' });
      });
  }
  function Q1(e, t, n, l, c) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = n.alternate), t !== null && vl(t, n, c, !0), (n = Gr.current), n !== null)) {
        switch (n.tag) {
          case 13:
            return (
              mn === null ? Zo() : n.alternate === null && Ft === 0 && (Ft = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = c),
              l === Vc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue), t === null ? (n.updateQueue = new Set([l])) : t.add(l), Po(e, l, c)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Vc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Po(e, l, c)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return Po(e, l, c), Zo(), !1;
    }
    if (bt)
      return (
        (t = Gr.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            l !== Fc && ((e = Error(u(422), { cause: l })), ul(Hr(e, n))))
          : (l !== Fc && ((t = Error(u(423), { cause: l })), ul(Hr(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = Hr(l, n)),
            (c = mo(e.stateNode, l, c)),
            Mo(e, c),
            Ft !== 4 && (Ft = 2)),
        !1
      );
    var o = Error(u(520), { cause: l });
    if (((o = Hr(o, n)), Ol === null ? (Ol = [o]) : Ol.push(o), Ft !== 4 && (Ft = 2), t === null)) return !0;
    (l = Hr(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (n.flags |= 65536), (e = c & -c), (n.lanes |= e), (e = mo(n.stateNode, l, e)), Mo(n, e), !1;
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (o !== null && typeof o.componentDidCatch == 'function' && (ma === null || !ma.has(o)))))
          )
            return (n.flags |= 65536), (c &= -c), (n.lanes |= c), (c = E0(c)), A0(c, e, n, l), Mo(n, c), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var N0 = Error(u(461)),
    Wt = !1;
  function nr(e, t, n, l) {
    t.child = e === null ? Rh(t, null, n, l) : Ia(t, e.child, n, l);
  }
  function _0(e, t, n, l, c) {
    n = n.render;
    var o = t.ref;
    if ('ref' in l) {
      var x = {};
      for (var C in l) C !== 'ref' && (x[C] = l[C]);
    } else x = l;
    return (
      Ga(t),
      (l = Qc(e, t, n, x, o, c)),
      (C = Pc()),
      e !== null && !Wt ? (Jc(e, t, c), Mn(e, t, c)) : (bt && C && zc(t), (t.flags |= 1), nr(e, t, l, c), t.child)
    );
  }
  function O0(e, t, n, l, c) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' && !Io(o) && o.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = o), T0(e, t, o, l, c))
        : ((e = ns(n.type, null, l, t, t.mode, c)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), !Eo(e, c))) {
      var x = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : nl), n(x, l) && e.ref === t.ref)) return Mn(e, t, c);
    }
    return (t.flags |= 1), (e = da(o, l)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function T0(e, t, n, l, c) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (nl(o, l) && e.ref === t.ref)
        if (((Wt = !1), (t.pendingProps = l = o), Eo(e, c))) (e.flags & 131072) !== 0 && (Wt = !0);
        else return (t.lanes = e.lanes), Mn(e, t, c);
    }
    return po(e, t, n, l, c);
  }
  function M0(e, t, n) {
    var l = t.pendingProps,
      c = l.children,
      o = (t.stateNode._pendingVisibility & 2) !== 0,
      x = e !== null ? e.memoizedState : null;
    if ((yl(e, t), l.mode === 'hidden' || o)) {
      if ((t.flags & 128) !== 0) {
        if (((l = x !== null ? x.baseLanes | n : n), e !== null)) {
          for (c = t.child = e.child, o = 0; c !== null; ) (o = o | c.lanes | c.childLanes), (c = c.sibling);
          t.childLanes = o & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return R0(e, t, l, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Fu(t, x !== null ? x.cachePool : null),
          x !== null ? Bh(t, x) : Gc(),
          Ch(t);
      else return (t.lanes = t.childLanes = 536870912), R0(e, t, x !== null ? x.baseLanes | n : n, n);
    } else
      x !== null
        ? (Fu(t, x.cachePool), Bh(t, x), ra(), (t.memoizedState = null))
        : (e !== null && Fu(t, null), Gc(), ra());
    return nr(e, t, c, n), t.child;
  }
  function R0(e, t, n, l) {
    var c = Xc();
    return (
      (c = c === null ? null : { parent: Pt._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: n, cachePool: c }),
      e !== null && Fu(t, null),
      Gc(),
      Ch(t),
      e !== null && vl(e, t, l, !0),
      null
    );
  }
  function yl(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(u(284));
      (e === null || e.ref !== n) && (t.flags |= 2097664);
    }
  }
  function po(e, t, n, l, c) {
    return (
      Ga(t),
      (n = Qc(e, t, n, l, void 0, c)),
      (l = Pc()),
      e !== null && !Wt ? (Jc(e, t, c), Mn(e, t, c)) : (bt && l && zc(t), (t.flags |= 1), nr(e, t, n, c), t.child)
    );
  }
  function B0(e, t, n, l, c, o) {
    return (
      Ga(t),
      (t.updateQueue = null),
      (n = Ih(t, l, n, c)),
      kh(e),
      (l = Pc()),
      e !== null && !Wt ? (Jc(e, t, o), Mn(e, t, o)) : (bt && l && zc(t), (t.flags |= 1), nr(e, t, n, o), t.child)
    );
  }
  function C0(e, t, n, l, c) {
    if ((Ga(t), t.stateNode === null)) {
      var o = vi,
        x = n.contextType;
      typeof x == 'object' && x !== null && (o = ur(x)),
        (o = new n(l, o)),
        (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = ho),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = l),
        (o.state = t.memoizedState),
        (o.refs = {}),
        Oo(t),
        (x = n.contextType),
        (o.context = typeof x == 'object' && x !== null ? ur(x) : vi),
        (o.state = t.memoizedState),
        (x = n.getDerivedStateFromProps),
        typeof x == 'function' && (fo(t, n, x, l), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function' ||
          (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
          ((x = o.state),
          typeof o.componentWillMount == 'function' && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
          x !== o.state && ho.enqueueReplaceState(o, o.state, null),
          xl(t, l, o, c),
          Sl(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      o = t.stateNode;
      var C = t.memoizedProps,
        X = Fa(n, C);
      o.props = X;
      var fe = o.context,
        _e = n.contextType;
      (x = vi), typeof _e == 'object' && _e !== null && (x = ur(_e));
      var Be = n.getDerivedStateFromProps;
      (_e = typeof Be == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        _e ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((C || fe !== x) && v0(t, o, l, x)),
        (la = !1);
      var be = t.memoizedState;
      (o.state = be),
        xl(t, l, o, c),
        Sl(),
        (fe = t.memoizedState),
        C || be !== fe || la
          ? (typeof Be == 'function' && (fo(t, n, Be, l), (fe = t.memoizedState)),
            (X = la || y0(t, n, X, l, be, fe, x))
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
            (l = X))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1));
    } else {
      (o = t.stateNode),
        To(e, t),
        (x = t.memoizedProps),
        (_e = Fa(n, x)),
        (o.props = _e),
        (Be = t.pendingProps),
        (be = o.context),
        (fe = n.contextType),
        (X = vi),
        typeof fe == 'object' && fe !== null && (X = ur(fe)),
        (C = n.getDerivedStateFromProps),
        (fe = typeof C == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((x !== Be || be !== X) && v0(t, o, l, X)),
        (la = !1),
        (be = t.memoizedState),
        (o.state = be),
        xl(t, l, o, c),
        Sl();
      var Ne = t.memoizedState;
      x !== Be || be !== Ne || la || (e !== null && e.dependencies !== null && Wu(e.dependencies))
        ? (typeof C == 'function' && (fo(t, n, C, l), (Ne = t.memoizedState)),
          (_e = la || y0(t, n, _e, l, be, Ne, X) || (e !== null && e.dependencies !== null && Wu(e.dependencies)))
            ? (fe ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(l, Ne, X),
                typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(l, Ne, X)),
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
          (o.context = X),
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
      yl(e, t),
      (l = (t.flags & 128) !== 0),
      o || l
        ? ((o = t.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : o.render()),
          (t.flags |= 1),
          e !== null && l ? ((t.child = Ia(t, e.child, null, c)), (t.child = Ia(t, null, n, c))) : nr(e, t, n, c),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = Mn(e, t, c)),
      e
    );
  }
  function D0(e, t, n, l) {
    return ll(), (t.flags |= 256), nr(e, t, n, l), t.child;
  }
  var go = { dehydrated: null, treeContext: null, retryLane: 0 };
  function yo(e) {
    return { baseLanes: e, cachePool: jh() };
  }
  function vo(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Xr), e;
  }
  function U0(e, t, n) {
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
        if ((c ? ta(t) : ra(), bt)) {
          var C = rr,
            X;
          if ((X = C)) {
            e: {
              for (X = C, C = hn; X.nodeType !== 8; ) {
                if (!C) {
                  C = null;
                  break e;
                }
                if (((X = an(X.nextSibling)), X === null)) {
                  C = null;
                  break e;
                }
              }
              C = X;
            }
            C !== null
              ? ((t.memoizedState = {
                  dehydrated: C,
                  treeContext: Ua !== null ? { id: Nn, overflow: _n } : null,
                  retryLane: 536870912
                }),
                (X = Kr(18, null, null, 0)),
                (X.stateNode = C),
                (X.return = t),
                (t.child = X),
                (pr = t),
                (rr = null),
                (X = !0))
              : (X = !1);
          }
          X || ka(t);
        }
        if (((C = t.memoizedState), C !== null && ((C = C.dehydrated), C !== null)))
          return C.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
        On(t);
      }
      return (
        (C = l.children),
        (l = l.fallback),
        c
          ? (ra(),
            (c = t.mode),
            (C = So({ mode: 'hidden', children: C }, c)),
            (l = Ya(l, c, n, null)),
            (C.return = t),
            (l.return = t),
            (C.sibling = l),
            (t.child = C),
            (c = t.child),
            (c.memoizedState = yo(n)),
            (c.childLanes = vo(e, x, n)),
            (t.memoizedState = go),
            l)
          : (ta(t), bo(t, C))
      );
    }
    if (((X = e.memoizedState), X !== null && ((C = X.dehydrated), C !== null))) {
      if (o)
        t.flags & 256
          ? (ta(t), (t.flags &= -257), (t = xo(e, t, n)))
          : t.memoizedState !== null
            ? (ra(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ra(),
              (c = l.fallback),
              (C = t.mode),
              (l = So({ mode: 'visible', children: l.children }, C)),
              (c = Ya(c, C, n, null)),
              (c.flags |= 2),
              (l.return = t),
              (c.return = t),
              (l.sibling = c),
              (t.child = l),
              Ia(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = yo(n)),
              (l.childLanes = vo(e, x, n)),
              (t.memoizedState = go),
              (t = c));
      else if ((ta(t), C.data === '$!')) {
        if (((x = C.nextSibling && C.nextSibling.dataset), x)) var fe = x.dgst;
        (x = fe),
          (l = Error(u(419))),
          (l.stack = ''),
          (l.digest = x),
          ul({ value: l, source: null, stack: null }),
          (t = xo(e, t, n));
      } else if ((Wt || vl(e, t, n, !1), (x = (n & e.childLanes) !== 0), Wt || x)) {
        if (((x = Mt), x !== null)) {
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
          if (((l = (l & (x.suspendedLanes | n)) !== 0 ? 0 : l), l !== 0 && l !== X.retryLane))
            throw ((X.retryLane = l), ea(e, l), gr(x, e, l), N0);
        }
        C.data === '$?' || Zo(), (t = xo(e, t, n));
      } else
        C.data === '$?'
          ? ((t.flags |= 128), (t.child = e.child), (t = fv.bind(null, e)), (C._reactRetry = t), (t = null))
          : ((e = X.treeContext),
            (rr = an(C.nextSibling)),
            (pr = t),
            (bt = !0),
            (rn = null),
            (hn = !1),
            e !== null && ((Fr[Vr++] = Nn), (Fr[Vr++] = _n), (Fr[Vr++] = Ua), (Nn = e.id), (_n = e.overflow), (Ua = t)),
            (t = bo(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (ra(),
        (c = l.fallback),
        (C = t.mode),
        (X = e.child),
        (fe = X.sibling),
        (l = da(X, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = X.subtreeFlags & 31457280),
        fe !== null ? (c = da(fe, c)) : ((c = Ya(c, C, n, null)), (c.flags |= 2)),
        (c.return = t),
        (l.return = t),
        (l.sibling = c),
        (t.child = l),
        (l = c),
        (c = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = yo(n))
          : ((X = C.cachePool),
            X !== null ? ((fe = Pt._currentValue), (X = X.parent !== fe ? { parent: fe, pool: fe } : X)) : (X = jh()),
            (C = { baseLanes: C.baseLanes | n, cachePool: X })),
        (c.memoizedState = C),
        (c.childLanes = vo(e, x, n)),
        (t.memoizedState = go),
        l)
      : (ta(t),
        (n = e.child),
        (e = n.sibling),
        (n = da(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null && ((x = t.deletions), x === null ? ((t.deletions = [e]), (t.flags |= 16)) : x.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function bo(e, t) {
    return (t = So({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function So(e, t) {
    return lm(e, t, 0, null);
  }
  function xo(e, t, n) {
    return Ia(t, e.child, null, n), (e = bo(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
  }
  function j0(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), No(e.return, t, n);
  }
  function wo(e, t, n, l, c) {
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
  function k0(e, t, n) {
    var l = t.pendingProps,
      c = l.revealOrder,
      o = l.tail;
    if ((nr(e, t, l.children, n), (l = Qt.current), (l & 2) !== 0)) (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && j0(e, n, t);
          else if (e.tag === 19) j0(e, n, t);
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
          (e = n.alternate), e !== null && Hu(e) === null && (c = n), (n = n.sibling);
        (n = c),
          n === null ? ((c = t.child), (t.child = null)) : ((c = n.sibling), (n.sibling = null)),
          wo(t, !1, c, n, o);
        break;
      case 'backwards':
        for (n = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Hu(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = n), (n = c), (c = e);
        }
        wo(t, !0, n, null, o);
        break;
      case 'together':
        wo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Mn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (ha |= t.lanes), (n & t.childLanes) === 0))
      if (e !== null) {
        if ((vl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = da(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = da(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Eo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Wu(e)));
  }
  function P1(e, t, n) {
    switch (t.tag) {
      case 3:
        ue(t, t.stateNode.containerInfo), ia(t, Pt, e.memoizedState.cache), ll();
        break;
      case 27:
      case 5:
        ie(t);
        break;
      case 4:
        ue(t, t.stateNode.containerInfo);
        break;
      case 10:
        ia(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ta(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? U0(e, t, n)
              : (ta(t), (e = Mn(e, t, n)), e !== null ? e.sibling : null);
        ta(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (((l = (n & t.childLanes) !== 0), l || (vl(e, t, n, !1), (l = (n & t.childLanes) !== 0)), c)) {
          if (l) return k0(e, t, n);
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
        return (t.lanes = 0), M0(e, t, n);
      case 24:
        ia(t, Pt, e.memoizedState.cache);
    }
    return Mn(e, t, n);
  }
  function I0(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Wt = !0;
      else {
        if (!Eo(e, n) && (t.flags & 128) === 0) return (Wt = !1), P1(e, t, n);
        Wt = (e.flags & 131072) !== 0;
      }
    else (Wt = !1), bt && (t.flags & 1048576) !== 0 && xh(t, ku, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            c = l._init;
          if (((l = c(l._payload)), (t.type = l), typeof l == 'function'))
            Io(l)
              ? ((e = Fa(l, e)), (t.tag = 1), (t = C0(null, t, l, e, n)))
              : ((t.tag = 0), (t = po(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === D)) {
                (t.tag = 11), (t = _0(null, t, l, e, n));
                break e;
              } else if (c === W) {
                (t.tag = 14), (t = O0(null, t, l, e, n));
                break e;
              }
            }
            throw ((t = b(l) || l), Error(u(306, t, '')));
          }
        }
        return t;
      case 0:
        return po(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (c = Fa(l, t.pendingProps)), C0(e, t, l, c, n);
      case 3:
        e: {
          if ((ue(t, t.stateNode.containerInfo), e === null)) throw Error(u(387));
          var o = t.pendingProps;
          (c = t.memoizedState), (l = c.element), To(e, t), xl(t, o, null, n);
          var x = t.memoizedState;
          if (((o = x.cache), ia(t, Pt, o), o !== c.cache && _o(t, [Pt], n, !0), Sl(), (o = x.element), c.isDehydrated))
            if (
              ((c = { element: o, isDehydrated: !1, cache: x.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = D0(e, t, o, n);
              break e;
            } else if (o !== l) {
              (l = Hr(Error(u(424)), t)), ul(l), (t = D0(e, t, o, n));
              break e;
            } else
              for (
                rr = an(t.stateNode.containerInfo.firstChild),
                  pr = t,
                  bt = !0,
                  rn = null,
                  hn = !0,
                  n = Rh(t, null, o, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((ll(), o === l)) {
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
          yl(e, t),
          e === null
            ? (n = zm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : bt ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = ps(se.current).createElement(n)),
                (l[dt] = t),
                (l[lr] = e),
                ar(l, n, e),
                Je(l),
                (t.stateNode = l))
            : (t.memoizedState = zm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          ie(t),
          e === null &&
            bt &&
            ((l = t.stateNode = Im(t.type, t.pendingProps, se.current)), (pr = t), (hn = !0), (rr = an(l.firstChild))),
          (l = t.pendingProps.children),
          e !== null || bt ? nr(e, t, l, n) : (t.child = Ia(t, null, l, n)),
          yl(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            bt &&
            ((c = l = rr) &&
              ((l = Ov(l, t.type, t.pendingProps, hn)),
              l !== null ? ((t.stateNode = l), (pr = t), (rr = an(l.firstChild)), (hn = !1), (c = !0)) : (c = !1)),
            c || ka(t)),
          ie(t),
          (c = t.type),
          (o = t.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (l = o.children),
          of(c, o) ? (l = null) : x !== null && of(c, x) && (t.flags |= 32),
          t.memoizedState !== null && ((c = Qc(e, t, G1, null, null, n)), (kl._currentValue = c)),
          yl(e, t),
          nr(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            bt &&
            ((e = n = rr) &&
              ((n = Tv(n, t.pendingProps, hn)),
              n !== null ? ((t.stateNode = n), (pr = t), (rr = null), (e = !0)) : (e = !1)),
            e || ka(t)),
          null
        );
      case 13:
        return U0(e, t, n);
      case 4:
        return (
          ue(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Ia(t, null, l, n)) : nr(e, t, l, n),
          t.child
        );
      case 11:
        return _0(e, t, t.type, t.pendingProps, n);
      case 7:
        return nr(e, t, t.pendingProps, n), t.child;
      case 8:
        return nr(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return nr(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (l = t.pendingProps), ia(t, t.type, l.value), nr(e, t, l.children, n), t.child;
      case 9:
        return (
          (c = t.type._context),
          (l = t.pendingProps.children),
          Ga(t),
          (c = ur(c)),
          (l = l(c)),
          (t.flags |= 1),
          nr(e, t, l, n),
          t.child
        );
      case 14:
        return O0(e, t, t.type, t.pendingProps, n);
      case 15:
        return T0(e, t, t.type, t.pendingProps, n);
      case 19:
        return k0(e, t, n);
      case 22:
        return M0(e, t, n);
      case 24:
        return (
          Ga(t),
          (l = ur(Pt)),
          e === null
            ? ((c = Xc()),
              c === null &&
                ((c = Mt),
                (o = Yc()),
                (c.pooledCache = o),
                o.refCount++,
                o !== null && (c.pooledCacheLanes |= n),
                (c = o)),
              (t.memoizedState = { parent: l, cache: c }),
              Oo(t),
              ia(t, Pt, c))
            : ((e.lanes & n) !== 0 && (To(e, t), xl(t, null, null, n), Sl()),
              (c = e.memoizedState),
              (o = t.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (t.memoizedState = c),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c),
                  ia(t, Pt, l))
                : ((l = o.cache), ia(t, Pt, l), l !== c.cache && _o(t, [Pt], n, !0))),
          nr(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  var Ao = Re(null),
    Va = null,
    Rn = null;
  function ia(e, t, n) {
    B(Ao, t._currentValue), (t._currentValue = n);
  }
  function Bn(e) {
    (e._currentValue = Ao.current), ke(Ao);
  }
  function No(e, t, n) {
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
  function _o(e, t, n, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var o = c.dependencies;
      if (o !== null) {
        var x = c.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var C = o;
          o = c;
          for (var X = 0; X < t.length; X++)
            if (C.context === t[X]) {
              (o.lanes |= n), (C = o.alternate), C !== null && (C.lanes |= n), No(o.return, n, e), l || (x = null);
              break e;
            }
          o = C.next;
        }
      } else if (c.tag === 18) {
        if (((x = c.return), x === null)) throw Error(u(341));
        (x.lanes |= n), (o = x.alternate), o !== null && (o.lanes |= n), No(x, n, e), (x = null);
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
  function vl(e, t, n, l) {
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
          Mr(c.pendingProps.value, x.value) || (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (c === re.current) {
        if (((x = c.alternate), x === null)) throw Error(u(387));
        x.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(kl) : (e = [kl]));
      }
      c = c.return;
    }
    e !== null && _o(t, e, n, l), (t.flags |= 262144);
  }
  function Wu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Mr(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ga(e) {
    (Va = e), (Rn = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function ur(e) {
    return q0(Va, e);
  }
  function es(e, t) {
    return Va === null && Ga(e), q0(e, t);
  }
  function q0(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Rn === null)) {
      if (e === null) throw Error(u(308));
      (Rn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else Rn = Rn.next = t;
    return n;
  }
  var la = !1;
  function Oo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function To(e, t) {
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
  function ua(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sa(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (qt & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)), (l.pending = t), (t = Uu(e)), bh(e, null, n), t
      );
    }
    return Du(e, l, t, n), Uu(e);
  }
  function bl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), pc(e, n);
    }
  }
  function Mo(e, t) {
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
  var Ro = !1;
  function Sl() {
    if (Ro) {
      var e = Ai;
      if (e !== null) throw e;
    }
  }
  function xl(e, t, n, l) {
    Ro = !1;
    var c = e.updateQueue;
    la = !1;
    var o = c.firstBaseUpdate,
      x = c.lastBaseUpdate,
      C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var X = C,
        fe = X.next;
      (X.next = null), x === null ? (o = fe) : (x.next = fe), (x = X);
      var _e = e.alternate;
      _e !== null &&
        ((_e = _e.updateQueue),
        (C = _e.lastBaseUpdate),
        C !== x && (C === null ? (_e.firstBaseUpdate = fe) : (C.next = fe), (_e.lastBaseUpdate = X)));
    }
    if (o !== null) {
      var Be = c.baseState;
      (x = 0), (_e = fe = X = null), (C = o);
      do {
        var be = C.lane & -536870913,
          Ne = be !== C.lane;
        if (Ne ? (yt & be) === be : (l & be) === be) {
          be !== 0 && be === Ei && (Ro = !0),
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
                Be = O({}, Be, be);
                break e;
              case 2:
                la = !0;
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
            _e === null ? ((fe = _e = Ne), (X = Be)) : (_e = _e.next = Ne),
            (x |= be);
        if (((C = C.next), C === null)) {
          if (((C = c.shared.pending), C === null)) break;
          (Ne = C), (C = Ne.next), (Ne.next = null), (c.lastBaseUpdate = Ne), (c.shared.pending = null);
        }
      } while (!0);
      _e === null && (X = Be),
        (c.baseState = X),
        (c.firstBaseUpdate = fe),
        (c.lastBaseUpdate = _e),
        o === null && (c.shared.lanes = 0),
        (ha |= x),
        (e.lanes = x),
        (e.memoizedState = Be);
    }
  }
  function L0(e, t) {
    if (typeof e != 'function') throw Error(u(191, e));
    e.call(t);
  }
  function z0(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) L0(n[e], t);
  }
  function wl(e, t) {
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
      Ot(t, t.return, C);
    }
  }
  function ca(e, t, n) {
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
              var X = n;
              try {
                C();
              } catch (fe) {
                Ot(c, X, fe);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (fe) {
      Ot(t, t.return, fe);
    }
  }
  function H0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        z0(t, n);
      } catch (l) {
        Ot(e, e.return, l);
      }
    }
  }
  function F0(e, t, n) {
    (n.props = Fa(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ot(e, t, l);
    }
  }
  function $a(e, t) {
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
      Ot(e, t, o);
    }
  }
  function Rr(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (c) {
          Ot(e, t, c);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (c) {
          Ot(e, t, c);
        }
      else n.current = null;
  }
  function V0(e) {
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
      Ot(e, e.return, c);
    }
  }
  function G0(e, t, n) {
    try {
      var l = e.stateNode;
      wv(l, e.type, n, t), (l[lr] = t);
    } catch (c) {
      Ot(e, e.return, c);
    }
  }
  function $0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
  }
  function Bo(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || $0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Co(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ms));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Co(e, t, n), e = e.sibling; e !== null; ) Co(e, t, n), (e = e.sibling);
  }
  function ts(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), (e = e.sibling);
  }
  var Cn = !1,
    Ht = !1,
    Do = !1,
    Y0 = typeof WeakSet == 'function' ? WeakSet : Set,
    er = null,
    K0 = !1;
  function J1(e, t) {
    if (((e = e.containerInfo), (sf = xs), (e = oh(e)), Uc(e))) {
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
              X = -1,
              fe = 0,
              _e = 0,
              Be = e,
              be = null;
            t: for (;;) {
              for (
                var Ne;
                Be !== n || (c !== 0 && Be.nodeType !== 3) || (C = x + c),
                  Be !== o || (l !== 0 && Be.nodeType !== 3) || (X = x + l),
                  Be.nodeType === 3 && (x += Be.nodeValue.length),
                  (Ne = Be.firstChild) !== null;

              )
                (be = Be), (Be = Ne);
              for (;;) {
                if (Be === e) break t;
                if (
                  (be === n && ++fe === c && (C = x), be === o && ++_e === l && (X = x), (Ne = Be.nextSibling) !== null)
                )
                  break;
                (Be = be), (be = Be.parentNode);
              }
              Be = Ne;
            }
            n = C === -1 || X === -1 ? null : { start: C, end: X };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (cf = { focusedElem: e, selectionRange: n }, xs = !1, er = t; er !== null; )
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
                  var Ze = Fa(n.type, c, n.elementType === n.type);
                  (e = l.getSnapshotBeforeUpdate(Ze, o)), (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (nt) {
                  Ot(n, n.return, nt);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) hf(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      hf(e);
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
    return (Ze = K0), (K0 = !1), Ze;
  }
  function X0(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Un(e, n), l & 4 && wl(5, n);
        break;
      case 1:
        if ((Un(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (C) {
              Ot(n, n.return, C);
            }
          else {
            var c = Fa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (C) {
              Ot(n, n.return, C);
            }
          }
        l & 64 && H0(n), l & 512 && $a(n, n.return);
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
            z0(l, e);
          } catch (C) {
            Ot(n, n.return, C);
          }
        }
        break;
      case 26:
        Un(e, n), l & 512 && $a(n, n.return);
        break;
      case 27:
      case 5:
        Un(e, n), t === null && l & 4 && V0(n), l & 512 && $a(n, n.return);
        break;
      case 12:
        Un(e, n);
        break;
      case 13:
        Un(e, n), l & 4 && P0(e, n);
        break;
      case 22:
        if (((c = n.memoizedState !== null || Cn), !c)) {
          t = (t !== null && t.memoizedState !== null) || Ht;
          var o = Cn,
            x = Ht;
          (Cn = c), (Ht = t) && !x ? oa(e, n, (n.subtreeFlags & 8772) !== 0) : Un(e, n), (Cn = o), (Ht = x);
        }
        l & 512 && (n.memoizedProps.mode === 'manual' ? $a(n, n.return) : Rr(n, n.return));
        break;
      default:
        Un(e, n);
    }
  }
  function Z0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Z0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Zi(t)),
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
    Br = !1;
  function Dn(e, t, n) {
    for (n = n.child; n !== null; ) Q0(e, t, n), (n = n.sibling);
  }
  function Q0(e, t, n) {
    if (de && typeof de.onCommitFiberUnmount == 'function')
      try {
        de.onCommitFiberUnmount(q, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Ht || Rr(n, t),
          Dn(e, t, n),
          n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Ht || Rr(n, t);
        var l = Zt,
          c = Br;
        for (Zt = n.stateNode, Dn(e, t, n), n = n.stateNode, t = n.attributes; t.length; ) n.removeAttributeNode(t[0]);
        Zi(n), (Zt = l), (Br = c);
        break;
      case 5:
        Ht || Rr(n, t);
      case 6:
        c = Zt;
        var o = Br;
        if (((Zt = null), Dn(e, t, n), (Zt = c), (Br = o), Zt !== null))
          if (Br)
            try {
              (e = Zt), (l = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(l) : e.removeChild(l);
            } catch (x) {
              Ot(n, t, x);
            }
          else
            try {
              Zt.removeChild(n.stateNode);
            } catch (x) {
              Ot(n, t, x);
            }
        break;
      case 18:
        Zt !== null &&
          (Br
            ? ((t = Zt),
              (n = n.stateNode),
              t.nodeType === 8 ? df(t.parentNode, n) : t.nodeType === 1 && df(t, n),
              zl(t))
            : df(Zt, n.stateNode));
        break;
      case 4:
        (l = Zt), (c = Br), (Zt = n.stateNode.containerInfo), (Br = !0), Dn(e, t, n), (Zt = l), (Br = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ht || ca(2, n, t), Ht || ca(4, n, t), Dn(e, t, n);
        break;
      case 1:
        Ht || (Rr(n, t), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && F0(n, t, l)), Dn(e, t, n);
        break;
      case 21:
        Dn(e, t, n);
        break;
      case 22:
        Ht || Rr(n, t), (Ht = (l = Ht) || n.memoizedState !== null), Dn(e, t, n), (Ht = l);
        break;
      default:
        Dn(e, t, n);
    }
  }
  function P0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        zl(e);
      } catch (n) {
        Ot(t, t.return, n);
      }
  }
  function W1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Y0()), t;
      case 22:
        return (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Y0()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Uo(e, t) {
    var n = W1(e);
    t.forEach(function (l) {
      var c = dv.bind(null, e, l);
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
              (Zt = C.stateNode), (Br = !1);
              break e;
            case 3:
              (Zt = C.stateNode.containerInfo), (Br = !0);
              break e;
            case 4:
              (Zt = C.stateNode.containerInfo), (Br = !0);
              break e;
          }
          C = C.return;
        }
        if (Zt === null) throw Error(u(160));
        Q0(o, x, c), (Zt = null), (Br = !1), (o = c.alternate), o !== null && (o.return = null), (c.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) J0(t, e), (t = t.sibling);
  }
  var nn = null;
  function J0(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $r(t, e), Yr(e), l & 4 && (ca(3, e, e.return), wl(3, e), ca(5, e, e.return));
        break;
      case 1:
        $r(t, e),
          Yr(e),
          l & 512 && (Ht || n === null || Rr(n, n.return)),
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
        if (($r(t, e), Yr(e), l & 512 && (Ht || n === null || Rr(n, n.return)), l & 4)) {
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
                          o[Ma] ||
                          o[dt] ||
                          o.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          o.hasAttribute('itemprop')) &&
                          ((o = c.createElement(l)), c.head.insertBefore(o, c.querySelector('head > title'))),
                        ar(o, l, n),
                        (o[dt] = e),
                        Je(o),
                        (l = o);
                      break e;
                    case 'link':
                      var x = Vm('link', 'href', c).get(l + (n.href || ''));
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
                      (o = c.createElement(l)), ar(o, l, n), c.head.appendChild(o);
                      break;
                    case 'meta':
                      if ((x = Vm('meta', 'content', c).get(l + (n.content || '')))) {
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
                      (o = c.createElement(l)), ar(o, l, n), c.head.appendChild(o);
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  (o[dt] = e), Je(o), (l = o);
                }
                e.stateNode = l;
              } else Gm(c, e.type, e.stateNode);
            else e.stateNode = Fm(c, l, e.memoizedProps);
          else
            o !== l
              ? (o === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : o.count--,
                l === null ? Gm(c, e.type, e.stateNode) : Fm(c, l, e.memoizedProps))
              : l === null && e.stateNode !== null && G0(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && e.alternate === null) {
          (c = e.stateNode), (o = e.memoizedProps);
          try {
            for (var X = c.firstChild; X; ) {
              var fe = X.nextSibling,
                _e = X.nodeName;
              X[Ma] ||
                _e === 'HEAD' ||
                _e === 'BODY' ||
                _e === 'SCRIPT' ||
                _e === 'STYLE' ||
                (_e === 'LINK' && X.rel.toLowerCase() === 'stylesheet') ||
                c.removeChild(X),
                (X = fe);
            }
            for (var Be = e.type, be = c.attributes; be.length; ) c.removeAttributeNode(be[0]);
            ar(c, Be, o), (c[dt] = e), (c[lr] = o);
          } catch (Ze) {
            Ot(e, e.return, Ze);
          }
        }
      case 5:
        if (($r(t, e), Yr(e), l & 512 && (Ht || n === null || Rr(n, n.return)), e.flags & 32)) {
          c = e.stateNode;
          try {
            fi(c, '');
          } catch (Ze) {
            Ot(e, e.return, Ze);
          }
        }
        l & 4 && e.stateNode != null && ((c = e.memoizedProps), G0(e, c, n !== null ? n.memoizedProps : c)),
          l & 1024 && (Do = !0);
        break;
      case 6:
        if (($r(t, e), Yr(e), l & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (Ze) {
            Ot(e, e.return, Ze);
          }
        }
        break;
      case 3:
        if (
          ((vs = null),
          (c = nn),
          (nn = gs(t.containerInfo)),
          $r(t, e),
          (nn = c),
          Yr(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            zl(t.containerInfo);
          } catch (Ze) {
            Ot(e, e.return, Ze);
          }
        Do && ((Do = !1), W0(e));
        break;
      case 4:
        (l = nn), (nn = gs(e.stateNode.containerInfo)), $r(t, e), Yr(e), (nn = l);
        break;
      case 12:
        $r(t, e), Yr(e);
        break;
      case 13:
        $r(t, e),
          Yr(e),
          e.child.flags & 8192 && (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (Vo = De()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Uo(e, l)));
        break;
      case 22:
        if (
          (l & 512 && (Ht || n === null || Rr(n, n.return)),
          (X = e.memoizedState !== null),
          (fe = n !== null && n.memoizedState !== null),
          (_e = Cn),
          (Be = Ht),
          (Cn = _e || X),
          (Ht = Be || fe),
          $r(t, e),
          (Ht = Be),
          (Cn = _e),
          Yr(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          l & 8192 &&
            ((t._visibility = X ? t._visibility & -2 : t._visibility | 1),
            X && ((t = Cn || Ht), n === null || fe || t || Ti(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== 'manual'))
        )
          e: for (n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (n === null) {
                fe = n = t;
                try {
                  if (((c = fe.stateNode), X))
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
                  Ot(fe, fe.return, Ze);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                fe = t;
                try {
                  fe.stateNode.nodeValue = X ? '' : fe.memoizedProps;
                } catch (Ze) {
                  Ot(fe, fe.return, Ze);
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
          ((l = e.updateQueue), l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Uo(e, n))));
        break;
      case 19:
        $r(t, e), Yr(e), l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Uo(e, l)));
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
              if ($0(n)) {
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
                o = Bo(e);
              ts(e, o, c);
              break;
            case 5:
              var x = l.stateNode;
              l.flags & 32 && (fi(x, ''), (l.flags &= -33));
              var C = Bo(e);
              ts(e, C, x);
              break;
            case 3:
            case 4:
              var X = l.stateNode.containerInfo,
                fe = Bo(e);
              Co(e, fe, X);
              break;
            default:
              throw Error(u(161));
          }
        }
      } catch (_e) {
        Ot(e, e.return, _e);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function W0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        W0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function Un(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) X0(e, t.alternate, t), (t = t.sibling);
  }
  function Ti(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, t, t.return), Ti(t);
          break;
        case 1:
          Rr(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == 'function' && F0(t, t.return, n), Ti(t);
          break;
        case 26:
        case 27:
        case 5:
          Rr(t, t.return), Ti(t);
          break;
        case 22:
          Rr(t, t.return), t.memoizedState === null && Ti(t);
          break;
        default:
          Ti(t);
      }
      e = e.sibling;
    }
  }
  function oa(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        c = e,
        o = t,
        x = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          oa(c, o, n), wl(4, o);
          break;
        case 1:
          if ((oa(c, o, n), (l = o), (c = l.stateNode), typeof c.componentDidMount == 'function'))
            try {
              c.componentDidMount();
            } catch (fe) {
              Ot(l, l.return, fe);
            }
          if (((l = o), (c = l.updateQueue), c !== null)) {
            var C = l.stateNode;
            try {
              var X = c.shared.hiddenCallbacks;
              if (X !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < X.length; c++) L0(X[c], C);
            } catch (fe) {
              Ot(l, l.return, fe);
            }
          }
          n && x & 64 && H0(o), $a(o, o.return);
          break;
        case 26:
        case 27:
        case 5:
          oa(c, o, n), n && l === null && x & 4 && V0(o), $a(o, o.return);
          break;
        case 12:
          oa(c, o, n);
          break;
        case 13:
          oa(c, o, n), n && x & 4 && P0(c, o);
          break;
        case 22:
          o.memoizedState === null && oa(c, o, n), $a(o, o.return);
          break;
        default:
          oa(c, o, n);
      }
      t = t.sibling;
    }
  }
  function jo(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && dl(n));
  }
  function ko(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && dl(e));
  }
  function fa(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) em(e, t, n, l), (t = t.sibling);
  }
  function em(e, t, n, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        fa(e, t, n, l), c & 2048 && wl(9, t);
        break;
      case 3:
        fa(e, t, n, l),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && dl(e)));
        break;
      case 12:
        if (c & 2048) {
          fa(e, t, n, l), (e = t.stateNode);
          try {
            var o = t.memoizedProps,
              x = o.id,
              C = o.onPostCommit;
            typeof C == 'function' && C(x, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (X) {
            Ot(t, t.return, X);
          }
        } else fa(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (o = t.stateNode),
          t.memoizedState !== null
            ? o._visibility & 4
              ? fa(e, t, n, l)
              : El(e, t)
            : o._visibility & 4
              ? fa(e, t, n, l)
              : ((o._visibility |= 4), Mi(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          c & 2048 && jo(t.alternate, t);
        break;
      case 24:
        fa(e, t, n, l), c & 2048 && ko(t.alternate, t);
        break;
      default:
        fa(e, t, n, l);
    }
  }
  function Mi(e, t, n, l, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var o = e,
        x = t,
        C = n,
        X = l,
        fe = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          Mi(o, x, C, X, c), wl(8, x);
          break;
        case 23:
          break;
        case 22:
          var _e = x.stateNode;
          x.memoizedState !== null
            ? _e._visibility & 4
              ? Mi(o, x, C, X, c)
              : El(o, x)
            : ((_e._visibility |= 4), Mi(o, x, C, X, c)),
            c && fe & 2048 && jo(x.alternate, x);
          break;
        case 24:
          Mi(o, x, C, X, c), c && fe & 2048 && ko(x.alternate, x);
          break;
        default:
          Mi(o, x, C, X, c);
      }
      t = t.sibling;
    }
  }
  function El(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          c = l.flags;
        switch (l.tag) {
          case 22:
            El(n, l), c & 2048 && jo(l.alternate, l);
            break;
          case 24:
            El(n, l), c & 2048 && ko(l.alternate, l);
            break;
          default:
            El(n, l);
        }
        t = t.sibling;
      }
  }
  var Al = 8192;
  function Ri(e) {
    if (e.subtreeFlags & Al) for (e = e.child; e !== null; ) tm(e), (e = e.sibling);
  }
  function tm(e) {
    switch (e.tag) {
      case 26:
        Ri(e), e.flags & Al && e.memoizedState !== null && Hv(nn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Ri(e);
        break;
      case 3:
      case 4:
        var t = nn;
        (nn = gs(e.stateNode.containerInfo)), Ri(e), (nn = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null ? ((t = Al), (Al = 16777216), Ri(e), (Al = t)) : Ri(e));
        break;
      default:
        Ri(e);
    }
  }
  function rm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Nl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (er = l), am(l, e);
        }
      rm(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) nm(e), (e = e.sibling);
  }
  function nm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Nl(e), e.flags & 2048 && ca(9, e, e.return);
        break;
      case 3:
        Nl(e);
        break;
      case 12:
        Nl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), rs(e))
          : Nl(e);
        break;
      default:
        Nl(e);
    }
  }
  function rs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (er = l), am(l, e);
        }
      rm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ca(8, t, t.return), rs(t);
          break;
        case 22:
          (n = t.stateNode), n._visibility & 4 && ((n._visibility &= -5), rs(t));
          break;
        default:
          rs(t);
      }
      e = e.sibling;
    }
  }
  function am(e, t) {
    for (; er !== null; ) {
      var n = er;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          dl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (er = l);
      else
        e: for (n = e; er !== null; ) {
          l = er;
          var c = l.sibling,
            o = l.return;
          if ((Z0(l), l === n)) {
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
  function ev(e, t, n, l) {
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
  function Kr(e, t, n, l) {
    return new ev(e, t, n, l);
  }
  function Io(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function da(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Kr(e.tag, t, e.key, e.mode)),
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
  function im(e, t) {
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
  function ns(e, t, n, l, c, o) {
    var x = 0;
    if (((l = e), typeof e == 'function')) Io(e) && (x = 1);
    else if (typeof e == 'string') x = Lv(e, n, U.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case p:
          return Ya(n.children, c, o, t);
        case g:
          (x = 8), (c |= 24);
          break;
        case N:
          return (e = Kr(12, n, t, c | 2)), (e.elementType = N), (e.lanes = o), e;
        case P:
          return (e = Kr(13, n, t, c)), (e.elementType = P), (e.lanes = o), e;
        case J:
          return (e = Kr(19, n, t, c)), (e.elementType = J), (e.lanes = o), e;
        case Se:
          return lm(n, c, o, t);
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
              case z:
                (x = 16), (l = null);
                break e;
            }
          (x = 29), (n = Error(u(130, e === null ? 'null' : typeof e, ''))), (l = null);
      }
    return (t = Kr(x, n, t, c)), (t.elementType = e), (t.type = l), (t.lanes = o), t;
  }
  function Ya(e, t, n, l) {
    return (e = Kr(7, e, l, t)), (e.lanes = n), e;
  }
  function lm(e, t, n, l) {
    (e = Kr(22, e, l, t)), (e.elementType = Se), (e.lanes = n);
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
          var x = ea(o, 2);
          x !== null && ((c._pendingVisibility |= 2), gr(x, o, 2));
        }
      },
      attach: function () {
        var o = c._current;
        if (o === null) throw Error(u(456));
        if ((c._pendingVisibility & 2) !== 0) {
          var x = ea(o, 2);
          x !== null && ((c._pendingVisibility &= -3), gr(x, o, 2));
        }
      }
    };
    return (e.stateNode = c), e;
  }
  function qo(e, t, n) {
    return (e = Kr(6, e, null, t)), (e.lanes = n), e;
  }
  function Lo(e, t, n) {
    return (
      (t = Kr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function jn(e) {
    e.flags |= 4;
  }
  function um(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !$m(t))) {
      if (
        ((t = Gr.current),
        t !== null &&
          ((yt & 4194176) === yt ? mn !== null : ((yt & 62914560) !== yt && (yt & 536870912) === 0) || t !== mn))
      )
        throw ((cl = Vc), Ah);
      e.flags |= 8192;
    }
  }
  function as(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? si() : 536870912), (e.lanes |= t), (Ci |= t));
  }
  function _l(e, t) {
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
  function It(e) {
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
  function tv(e, t, n) {
    var l = t.pendingProps;
    switch ((Hc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return It(t), null;
      case 1:
        return It(t), null;
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
                ((t.flags |= 1024), rn !== null && (Ko(rn), (rn = null)))),
          It(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (jn(t), n !== null ? (It(t), um(t, n)) : (It(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (jn(t), It(t), um(t, n))
                : (It(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && jn(t), It(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        M(t), (n = se.current);
        var c = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && jn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return It(t), null;
          }
          (e = U.current), il(t) ? wh(t) : ((e = Im(c, l, n)), (t.stateNode = e), jn(t));
        }
        return It(t), null;
      case 5:
        if ((M(t), (n = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== l && jn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return It(t), null;
          }
          if (((e = U.current), il(t))) wh(t);
          else {
            switch (((c = ps(se.current)), e)) {
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
            e: switch ((ar(e, n, l), n)) {
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
        return It(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && jn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(u(166));
          if (((e = se.current), il(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (c = pr), c !== null))
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[dt] = t),
              (e = !!(e.nodeValue === n || (l !== null && l.suppressHydrationWarning === !0) || Bm(e.nodeValue, n))),
              e || ka(t);
          } else (e = ps(e).createTextNode(l)), (e[dt] = t), (t.stateNode = e);
        }
        return It(t), null;
      case 13:
        if (((l = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((c = il(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(u(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c)) throw Error(u(317));
              c[dt] = t;
            } else ll(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            It(t), (c = !1);
          } else rn !== null && (Ko(rn), (rn = null)), (c = !0);
          if (!c) return t.flags & 256 ? (On(t), t) : (On(t), null);
        }
        if ((On(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
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
        return n !== e && n && (t.child.flags |= 8192), as(t, t.updateQueue), It(t), null;
      case 4:
        return me(), e === null && af(t.stateNode.containerInfo), It(t), null;
      case 10:
        return Bn(t.type), It(t), null;
      case 19:
        if ((ke(Qt), (c = t.memoizedState), c === null)) return It(t), null;
        if (((l = (t.flags & 128) !== 0), (o = c.rendering), o === null))
          if (l) _l(c, !1);
          else {
            if (Ft !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Hu(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      _l(c, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      as(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    im(n, e), (n = n.sibling);
                  return B(Qt, (Qt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null && De() > is && ((t.flags |= 128), (l = !0), _l(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Hu(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                as(t, e),
                _l(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !o.alternate && !bt)
              )
                return It(t), null;
            } else
              2 * De() - c.renderingStartTime > is &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), _l(c, !1), (t.lanes = 4194304));
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
          : (It(t), null);
      case 22:
      case 23:
        return (
          On(t),
          $c(),
          (l = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== l && (t.flags |= 8192) : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (It(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : It(t),
          (n = t.updateQueue),
          n !== null && as(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && ke(qa),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Bn(Pt),
          It(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function rv(e, t) {
    switch ((Hc(t), t.tag)) {
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
        if ((On(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(u(340));
          ll();
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
        return On(t), $c(), e !== null && ke(qa), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 24:
        return Bn(Pt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sm(e, t) {
    switch ((Hc(t), t.tag)) {
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
        On(t);
        break;
      case 19:
        ke(Qt);
        break;
      case 10:
        Bn(t.type);
        break;
      case 22:
      case 23:
        On(t), $c(), e !== null && ke(qa);
        break;
      case 24:
        Bn(Pt);
    }
  }
  var nv = {
      getCacheForType: function (e) {
        var t = ur(Pt),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      }
    },
    av = typeof WeakMap == 'function' ? WeakMap : Map,
    qt = 0,
    Mt = null,
    mt = null,
    yt = 0,
    Rt = 0,
    Cr = null,
    kn = !1,
    Bi = !1,
    zo = !1,
    In = 0,
    Ft = 0,
    ha = 0,
    Ka = 0,
    Ho = 0,
    Xr = 0,
    Ci = 0,
    Ol = null,
    gn = null,
    Fo = !1,
    Vo = 0,
    is = 1 / 0,
    ls = null,
    ma = null,
    us = !1,
    Xa = null,
    Tl = 0,
    Go = 0,
    $o = null,
    Ml = 0,
    Yo = null;
  function Dr() {
    if ((qt & 2) !== 0 && yt !== 0) return yt & -yt;
    if (A.T !== null) {
      var e = Ei;
      return e !== 0 ? e : ef();
    }
    return bu();
  }
  function cm() {
    Xr === 0 && (Xr = (yt & 536870912) === 0 || bt ? mr() : 536870912);
    var e = Gr.current;
    return e !== null && (e.flags |= 32), Xr;
  }
  function gr(e, t, n) {
    ((e === Mt && Rt === 2) || e.cancelPendingCommit !== null) && (Di(e, 0), qn(e, yt, Xr, !1)),
      Tt(e, n),
      ((qt & 2) === 0 || e !== Mt) && (e === Mt && ((qt & 2) === 0 && (Ka |= n), Ft === 4 && qn(e, yt, Xr, !1)), yn(e));
  }
  function om(e, t, n) {
    if ((qt & 6) !== 0) throw Error(u(327));
    var l = (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || ot(e, t),
      c = l ? uv(e, t) : Qo(e, t, !0),
      o = l;
    do {
      if (c === 0) {
        Bi && !l && qn(e, t, 0, !1);
        break;
      } else if (c === 6) qn(e, t, 0, !kn);
      else {
        if (((n = e.current.alternate), o && !iv(n))) {
          (c = Qo(e, t, !1)), (o = !1);
          continue;
        }
        if (c === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var x = 0;
          else (x = e.pendingLanes & -536870913), (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0);
          if (x !== 0) {
            t = x;
            e: {
              var C = e;
              c = Ol;
              var X = C.current.memoizedState.isDehydrated;
              if ((X && (Di(C, x).flags |= 256), (x = Qo(C, x, !1)), x !== 2)) {
                if (zo && !X) {
                  (C.errorRecoveryDisabledLanes |= o), (Ka |= o), (c = 4);
                  break e;
                }
                (o = gn), (gn = c), o !== null && Ko(o);
              }
              c = x;
            }
            if (((o = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Di(e, 0), qn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), c)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194176) === t) {
                qn(l, t, Xr, !kn);
                break e;
              }
              break;
            case 2:
              gn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if (((l.finishedWork = n), (l.finishedLanes = t), (t & 62914560) === t && ((o = Vo + 300 - De()), 10 < o))) {
            if ((qn(l, t, Xr, !kn), at(l, 0) !== 0)) break e;
            l.timeoutHandle = Um(fm.bind(null, l, n, gn, ls, Fo, t, Xr, Ka, Ci, kn, 2, -0, 0), o);
            break e;
          }
          fm(l, n, gn, ls, Fo, t, Xr, Ka, Ci, kn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    yn(e);
  }
  function Ko(e) {
    gn === null ? (gn = e) : gn.push.apply(gn, e);
  }
  function fm(e, t, n, l, c, o, x, C, X, fe, _e, Be, be) {
    var Ne = t.subtreeFlags;
    if (
      (Ne & 8192 || (Ne & 16785408) === 16785408) &&
      ((jl = { stylesheets: null, count: 0, unsuspend: zv }), tm(t), (t = Fv()), t !== null)
    ) {
      (e.cancelPendingCommit = t(vm.bind(null, e, n, l, c, x, C, X, 1, Be, be))), qn(e, o, x, !fe);
      return;
    }
    vm(e, n, l, c, x, C, X, _e, Be, be);
  }
  function iv(e) {
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
            if (!Mr(o(), c)) return !1;
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
    (t &= ~Ho),
      (t &= ~Ka),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var c = t; 0 < c; ) {
      var o = 31 - qe(c),
        x = 1 << o;
      (l[o] = -1), (c &= ~x);
    }
    n !== 0 && mc(e, n, t);
  }
  function ss() {
    return (qt & 6) === 0 ? (Rl(0), !1) : !0;
  }
  function Xo() {
    if (mt !== null) {
      if (Rt === 0) var e = mt.return;
      else (e = mt), (Rn = Va = null), Wc(e), (xi = null), (ol = 0), (e = mt);
      for (; e !== null; ) sm(e.alternate, e), (e = e.return);
      mt = null;
    }
  }
  function Di(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Av(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      Xo(),
      (Mt = e),
      (mt = n = da(e.current, null)),
      (yt = t),
      (Rt = 0),
      (Cr = null),
      (kn = !1),
      (Bi = ot(e, t)),
      (zo = !1),
      (Ci = Xr = Ho = Ka = ha = Ft = 0),
      (gn = Ol = null),
      (Fo = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var c = 31 - qe(l),
          o = 1 << c;
        (t |= e[c]), (l &= ~o);
      }
    return (In = t), Cu(), n;
  }
  function dm(e, t) {
    (ct = null),
      (A.H = pn),
      t === sl
        ? ((t = Oh()), (Rt = 3))
        : t === Ah
          ? ((t = Oh()), (Rt = 4))
          : (Rt = t === N0 ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
      (Cr = t),
      mt === null && ((Ft = 1), Ju(e, Hr(t, e.current)));
  }
  function hm() {
    var e = A.H;
    return (A.H = pn), e === null ? pn : e;
  }
  function mm() {
    var e = A.A;
    return (A.A = nv), e;
  }
  function Zo() {
    (Ft = 4),
      kn || ((yt & 4194176) !== yt && Gr.current !== null) || (Bi = !0),
      ((ha & 134217727) === 0 && (Ka & 134217727) === 0) || Mt === null || qn(Mt, yt, Xr, !1);
  }
  function Qo(e, t, n) {
    var l = qt;
    qt |= 2;
    var c = hm(),
      o = mm();
    (Mt !== e || yt !== t) && ((ls = null), Di(e, t)), (t = !1);
    var x = Ft;
    e: do
      try {
        if (Rt !== 0 && mt !== null) {
          var C = mt,
            X = Cr;
          switch (Rt) {
            case 8:
              Xo(), (x = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Gr.current === null && (t = !0);
              var fe = Rt;
              if (((Rt = 0), (Cr = null), Ui(e, C, X, fe), n && Bi)) {
                x = 0;
                break e;
              }
              break;
            default:
              (fe = Rt), (Rt = 0), (Cr = null), Ui(e, C, X, fe);
          }
        }
        lv(), (x = Ft);
        break;
      } catch (_e) {
        dm(e, _e);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Rn = Va = null),
      (qt = l),
      (A.H = c),
      (A.A = o),
      mt === null && ((Mt = null), (yt = 0), Cu()),
      x
    );
  }
  function lv() {
    for (; mt !== null; ) pm(mt);
  }
  function uv(e, t) {
    var n = qt;
    qt |= 2;
    var l = hm(),
      c = mm();
    Mt !== e || yt !== t ? ((ls = null), (is = De() + 500), Di(e, t)) : (Bi = ot(e, t));
    e: do
      try {
        if (Rt !== 0 && mt !== null) {
          t = mt;
          var o = Cr;
          t: switch (Rt) {
            case 1:
              (Rt = 0), (Cr = null), Ui(e, t, o, 1);
              break;
            case 2:
              if (Nh(o)) {
                (Rt = 0), (Cr = null), gm(t);
                break;
              }
              (t = function () {
                Rt === 2 && Mt === e && (Rt = 7), yn(e);
              }),
                o.then(t, t);
              break e;
            case 3:
              Rt = 7;
              break e;
            case 4:
              Rt = 5;
              break e;
            case 7:
              Nh(o) ? ((Rt = 0), (Cr = null), gm(t)) : ((Rt = 0), (Cr = null), Ui(e, t, o, 7));
              break;
            case 5:
              var x = null;
              switch (mt.tag) {
                case 26:
                  x = mt.memoizedState;
                case 5:
                case 27:
                  var C = mt;
                  if (!x || $m(x)) {
                    (Rt = 0), (Cr = null);
                    var X = C.sibling;
                    if (X !== null) mt = X;
                    else {
                      var fe = C.return;
                      fe !== null ? ((mt = fe), cs(fe)) : (mt = null);
                    }
                    break t;
                  }
              }
              (Rt = 0), (Cr = null), Ui(e, t, o, 5);
              break;
            case 6:
              (Rt = 0), (Cr = null), Ui(e, t, o, 6);
              break;
            case 8:
              Xo(), (Ft = 6);
              break e;
            default:
              throw Error(u(462));
          }
        }
        sv();
        break;
      } catch (_e) {
        dm(e, _e);
      }
    while (!0);
    return (Rn = Va = null), (A.H = l), (A.A = c), (qt = n), mt !== null ? 0 : ((Mt = null), (yt = 0), Cu(), Ft);
  }
  function sv() {
    for (; mt !== null && !ve(); ) pm(mt);
  }
  function pm(e) {
    var t = I0(e.alternate, e, In);
    (e.memoizedProps = e.pendingProps), t === null ? cs(e) : (mt = t);
  }
  function gm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = B0(n, t, t.pendingProps, t.type, void 0, yt);
        break;
      case 11:
        t = B0(n, t, t.pendingProps, t.type.render, t.ref, yt);
        break;
      case 5:
        Wc(t);
      default:
        sm(n, t), (t = mt = im(t, In)), (t = I0(n, t, In));
    }
    (e.memoizedProps = e.pendingProps), t === null ? cs(e) : (mt = t);
  }
  function Ui(e, t, n, l) {
    (Rn = Va = null), Wc(t), (xi = null), (ol = 0);
    var c = t.return;
    try {
      if (Q1(e, c, t, n, yt)) {
        (Ft = 1), Ju(e, Hr(n, e.current)), (mt = null);
        return;
      }
    } catch (o) {
      if (c !== null) throw ((mt = c), o);
      (Ft = 1), Ju(e, Hr(n, e.current)), (mt = null);
      return;
    }
    t.flags & 32768
      ? (bt || l === 1
          ? (e = !0)
          : Bi || (yt & 536870912) !== 0
            ? (e = !1)
            : ((kn = e = !0),
              (l === 2 || l === 3 || l === 6) && ((l = Gr.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        ym(t, e))
      : cs(t);
  }
  function cs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ym(t, kn);
        return;
      }
      e = t.return;
      var n = tv(t.alternate, t, In);
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
    Ft === 0 && (Ft = 5);
  }
  function ym(e, t) {
    do {
      var n = rv(e.alternate, e);
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
    (Ft = 6), (mt = null);
  }
  function vm(e, t, n, l, c, o, x, C, X, fe) {
    var _e = A.T,
      Be = T.p;
    try {
      (T.p = 2), (A.T = null), cv(e, t, n, l, Be, c, o, x, C, X, fe);
    } finally {
      (A.T = _e), (T.p = Be);
    }
  }
  function cv(e, t, n, l, c, o, x, C) {
    do ji();
    while (Xa !== null);
    if ((qt & 6) !== 0) throw Error(u(327));
    var X = e.finishedWork;
    if (((l = e.finishedLanes), X === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), X === e.current)) throw Error(u(177));
    (e.callbackNode = null), (e.callbackPriority = 0), (e.cancelPendingCommit = null);
    var fe = X.lanes | X.childLanes;
    if (
      ((fe |= qc),
      Cd(e, l, fe, o, x, C),
      e === Mt && ((mt = Mt = null), (yt = 0)),
      ((X.subtreeFlags & 10256) === 0 && (X.flags & 10256) === 0) ||
        us ||
        ((us = !0),
        (Go = fe),
        ($o = n),
        hv(m, function () {
          return ji(), null;
        })),
      (n = (X.flags & 15990) !== 0),
      (X.subtreeFlags & 15990) !== 0 || n
        ? ((n = A.T),
          (A.T = null),
          (o = T.p),
          (T.p = 2),
          (x = qt),
          (qt |= 4),
          J1(e, X),
          J0(X, e),
          D1(cf, e.containerInfo),
          (xs = !!sf),
          (cf = sf = null),
          (e.current = X),
          X0(e, X.alternate, X),
          xe(),
          (qt = x),
          (T.p = o),
          (A.T = n))
        : (e.current = X),
      us ? ((us = !1), (Xa = e), (Tl = l)) : bm(e, fe),
      (fe = e.pendingLanes),
      fe === 0 && (ma = null),
      Oe(X.stateNode),
      yn(e),
      t !== null)
    )
      for (c = e.onRecoverableError, X = 0; X < t.length; X++) (fe = t[X]), c(fe.value, { componentStack: fe.stack });
    return (
      (Tl & 3) !== 0 && ji(),
      (fe = e.pendingLanes),
      (l & 4194218) !== 0 && (fe & 42) !== 0 ? (e === Yo ? Ml++ : ((Ml = 0), (Yo = e))) : (Ml = 0),
      Rl(0),
      null
    );
  }
  function bm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), dl(t)));
  }
  function ji() {
    if (Xa !== null) {
      var e = Xa,
        t = Go;
      Go = 0;
      var n = vu(Tl),
        l = A.T,
        c = T.p;
      try {
        if (((T.p = 32 > n ? 32 : n), (A.T = null), Xa === null)) var o = !1;
        else {
          (n = $o), ($o = null);
          var x = Xa,
            C = Tl;
          if (((Xa = null), (Tl = 0), (qt & 6) !== 0)) throw Error(u(331));
          var X = qt;
          if (
            ((qt |= 4),
            nm(x.current),
            em(x, x.current, C, n),
            (qt = X),
            Rl(0, !1),
            de && typeof de.onPostCommitFiberRoot == 'function')
          )
            try {
              de.onPostCommitFiberRoot(q, x);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (T.p = c), (A.T = l), bm(e, t);
      }
    }
    return !1;
  }
  function Sm(e, t, n) {
    (t = Hr(n, t)), (t = mo(e.stateNode, t, 2)), (e = sa(e, t, 2)), e !== null && (Tt(e, 2), yn(e));
  }
  function Ot(e, t, n) {
    if (e.tag === 3) Sm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (ma === null || !ma.has(l)))
          ) {
            (e = Hr(n, e)), (n = E0(2)), (l = sa(t, n, 2)), l !== null && (A0(n, l, t, e), Tt(l, 2), yn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Po(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new av();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(n) || ((zo = !0), c.add(n), (e = ov.bind(null, e, t, n)), t.then(e, e));
  }
  function ov(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Mt === e &&
        (yt & n) === n &&
        (Ft === 4 || (Ft === 3 && (yt & 62914560) === yt && 300 > De() - Vo) ? (qt & 2) === 0 && Di(e, 0) : (Ho |= n),
        Ci === yt && (Ci = 0)),
      yn(e);
  }
  function xm(e, t) {
    t === 0 && (t = si()), (e = ea(e, t)), e !== null && (Tt(e, t), yn(e));
  }
  function fv(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), xm(e, n);
  }
  function dv(e, t) {
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
    l !== null && l.delete(t), xm(e, n);
  }
  function hv(e, t) {
    return F(e, t);
  }
  var os = null,
    ki = null,
    Jo = !1,
    fs = !1,
    Wo = !1,
    Za = 0;
  function yn(e) {
    e !== ki && e.next === null && (ki === null ? (os = ki = e) : (ki = ki.next = e)),
      (fs = !0),
      Jo || ((Jo = !0), pv(mv));
  }
  function Rl(e, t) {
    if (!Wo && fs) {
      Wo = !0;
      do
        for (var n = !1, l = os; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var o = 0;
            else {
              var x = l.suspendedLanes,
                C = l.pingedLanes;
              (o = (1 << (31 - qe(42 | e) + 1)) - 1),
                (o &= c & ~(x & ~C)),
                (o = o & 201326677 ? (o & 201326677) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), Am(l, o));
          } else (o = yt), (o = at(l, l === Mt ? o : 0)), (o & 3) === 0 || ot(l, o) || ((n = !0), Am(l, o));
          l = l.next;
        }
      while (n);
      Wo = !1;
    }
  }
  function mv() {
    fs = Jo = !1;
    var e = 0;
    Za !== 0 && (Ev() && (e = Za), (Za = 0));
    for (var t = De(), n = null, l = os; l !== null; ) {
      var c = l.next,
        o = wm(l, t);
      o === 0
        ? ((l.next = null), n === null ? (os = c) : (n.next = c), c === null && (ki = n))
        : ((n = l), (e !== 0 || (o & 3) !== 0) && (fs = !0)),
        (l = c);
    }
    Rl(e);
  }
  function wm(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o; ) {
      var x = 31 - qe(o),
        C = 1 << x,
        X = c[x];
      X === -1 ? ((C & n) === 0 || (C & l) !== 0) && (c[x] = Ut(C, t)) : X <= t && (e.expiredLanes |= C), (o &= ~C);
    }
    if (
      ((t = Mt),
      (n = yt),
      (n = at(e, e === t ? n : 0)),
      (l = e.callbackNode),
      n === 0 || (e === t && Rt === 2) || e.cancelPendingCommit !== null)
    )
      return l !== null && l !== null && te(l), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((n & 3) === 0 || ot(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && te(l), vu(n))) {
        case 2:
        case 8:
          n = E;
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
      return (l = Em.bind(null, e)), (n = F(n, l)), (e.callbackPriority = t), (e.callbackNode = n), t;
    }
    return l !== null && l !== null && te(l), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function Em(e, t) {
    var n = e.callbackNode;
    if (ji() && e.callbackNode !== n) return null;
    var l = yt;
    return (
      (l = at(e, e === Mt ? l : 0)),
      l === 0
        ? null
        : (om(e, l, t), wm(e, De()), e.callbackNode != null && e.callbackNode === n ? Em.bind(null, e) : null)
    );
  }
  function Am(e, t) {
    if (ji()) return null;
    om(e, t, !0);
  }
  function pv(e) {
    Nv(function () {
      (qt & 6) !== 0 ? F(rt, e) : e();
    });
  }
  function ef() {
    return Za === 0 && (Za = mr()), Za;
  }
  function Nm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : Nu('' + e);
  }
  function _m(e, t) {
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
  function gv(e, t, n, l, c) {
    if (t === 'submit' && n && n.stateNode === c) {
      var o = Nm((c[lr] || null).action),
        x = l.submitter;
      x &&
        ((t = (t = x[lr] || null) ? Nm(t.formAction) : x.getAttribute('formAction')),
        t !== null && ((o = t), (x = null)));
      var C = new Mu('action', 'action', null, l, c);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Za !== 0) {
                  var X = x ? _m(c, x) : new FormData(c);
                  so(n, { pending: !0, data: X, method: c.method, action: o }, null, X);
                }
              } else
                typeof o == 'function' &&
                  (C.preventDefault(),
                  (X = x ? _m(c, x) : new FormData(c)),
                  so(n, { pending: !0, data: X, method: c.method, action: o }, o, X));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var tf = 0; tf < vh.length; tf++) {
    var rf = vh[tf],
      yv = rf.toLowerCase(),
      vv = rf[0].toUpperCase() + rf.slice(1);
    tn(yv, 'on' + vv);
  }
  tn(hh, 'onAnimationEnd'),
    tn(mh, 'onAnimationIteration'),
    tn(ph, 'onAnimationStart'),
    tn('dblclick', 'onDoubleClick'),
    tn('focusin', 'onFocus'),
    tn('focusout', 'onBlur'),
    tn(j1, 'onTransitionRun'),
    tn(k1, 'onTransitionStart'),
    tn(I1, 'onTransitionCancel'),
    tn(gh, 'onTransitionEnd'),
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
  var Bl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    bv = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Bl));
  function Om(e, t) {
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
              X = C.instance,
              fe = C.currentTarget;
            if (((C = C.listener), X !== o && c.isPropagationStopped())) break e;
            (o = C), (c.currentTarget = fe);
            try {
              o(c);
            } catch (_e) {
              Pu(_e);
            }
            (c.currentTarget = null), (o = X);
          }
        else
          for (x = 0; x < l.length; x++) {
            if (
              ((C = l[x]),
              (X = C.instance),
              (fe = C.currentTarget),
              (C = C.listener),
              X !== o && c.isPropagationStopped())
            )
              break e;
            (o = C), (c.currentTarget = fe);
            try {
              o(c);
            } catch (_e) {
              Pu(_e);
            }
            (c.currentTarget = null), (o = X);
          }
      }
    }
  }
  function gt(e, t) {
    var n = t[Xi];
    n === void 0 && (n = t[Xi] = new Set());
    var l = e + '__bubble';
    n.has(l) || (Tm(t, e, 2, !1), n.add(l));
  }
  function nf(e, t, n) {
    var l = 0;
    t && (l |= 4), Tm(n, e, l, t);
  }
  var ds = '_reactListening' + Math.random().toString(36).slice(2);
  function af(e) {
    if (!e[ds]) {
      (e[ds] = !0),
        ht.forEach(function (n) {
          n !== 'selectionchange' && (bv.has(n) || nf(n, !1, e), nf(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ds] || ((t[ds] = !0), nf('selectionchange', !1, t));
    }
  }
  function Tm(e, t, n, l) {
    switch (Pm(t)) {
      case 2:
        var c = $v;
        break;
      case 8:
        c = Yv;
        break;
      default:
        c = vf;
    }
    (n = c.bind(null, t, n, e)),
      (c = void 0),
      !Nc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: c })
          : e.addEventListener(t, n, !0)
        : c !== void 0
          ? e.addEventListener(t, n, { passive: c })
          : e.addEventListener(t, n, !1);
  }
  function lf(e, t, n, l, c) {
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
              var X = x.tag;
              if (
                (X === 3 || X === 4) &&
                ((X = x.stateNode.containerInfo), X === c || (X.nodeType === 8 && X.parentNode === c))
              )
                return;
              x = x.return;
            }
          for (; C !== null; ) {
            if (((x = pt(C)), x === null)) return;
            if (((X = x.tag), X === 5 || X === 6 || X === 26 || X === 27)) {
              l = o = x;
              continue e;
            }
            C = C.parentNode;
          }
        }
        l = l.return;
      }
    Vd(function () {
      var fe = o,
        _e = Ec(n),
        Be = [];
      e: {
        var be = yh.get(e);
        if (be !== void 0) {
          var Ne = Mu,
            Ze = e;
          switch (e) {
            case 'keypress':
              if (Ou(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              Ne = d1;
              break;
            case 'focusin':
              (Ze = 'focus'), (Ne = Mc);
              break;
            case 'focusout':
              (Ze = 'blur'), (Ne = Mc);
              break;
            case 'beforeblur':
            case 'afterblur':
              Ne = Mc;
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
              Ne = Yd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Ne = e1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Ne = p1;
              break;
            case hh:
            case mh:
            case ph:
              Ne = n1;
              break;
            case gh:
              Ne = y1;
              break;
            case 'scroll':
            case 'scrollend':
              Ne = Jy;
              break;
            case 'wheel':
              Ne = b1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Ne = i1;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Ne = Xd;
              break;
            case 'toggle':
            case 'beforetoggle':
              Ne = x1;
          }
          var nt = (t & 4) !== 0,
            Vt = !nt && (e === 'scroll' || e === 'scrollend'),
            pe = nt ? (be !== null ? be + 'Capture' : null) : be;
          nt = [];
          for (var ce = fe, ge; ce !== null; ) {
            var Te = ce;
            if (
              ((ge = Te.stateNode),
              (Te = Te.tag),
              (Te !== 5 && Te !== 26 && Te !== 27) ||
                ge === null ||
                pe === null ||
                ((Te = Qi(ce, pe)), Te != null && nt.push(Cl(ce, Te, ge))),
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
            be && n !== wc && (Ze = n.relatedTarget || n.fromElement) && (pt(Ze) || Ze[Pn]))
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
                  ((Vt = H(Ze)), (nt = Ze.tag), Ze !== Vt || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (Ze = null))
              : ((Ne = null), (Ze = fe)),
            Ne !== Ze)
          ) {
            if (
              ((nt = Yd),
              (Te = 'onMouseLeave'),
              (pe = 'onMouseEnter'),
              (ce = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((nt = Xd), (Te = 'onPointerLeave'), (pe = 'onPointerEnter'), (ce = 'pointer')),
              (Vt = Ne == null ? be : Ra(Ne)),
              (ge = Ze == null ? be : Ra(Ze)),
              (be = new nt(Te, ce + 'leave', Ne, n, _e)),
              (be.target = Vt),
              (be.relatedTarget = ge),
              (Te = null),
              pt(_e) === fe &&
                ((nt = new nt(pe, ce + 'enter', Ze, n, _e)), (nt.target = ge), (nt.relatedTarget = Vt), (Te = nt)),
              (Vt = Te),
              Ne && Ze)
            )
              t: {
                for (nt = Ne, pe = Ze, ce = 0, ge = nt; ge; ge = Ii(ge)) ce++;
                for (ge = 0, Te = pe; Te; Te = Ii(Te)) ge++;
                for (; 0 < ce - ge; ) (nt = Ii(nt)), ce--;
                for (; 0 < ge - ce; ) (pe = Ii(pe)), ge--;
                for (; ce--; ) {
                  if (nt === pe || (pe !== null && nt === pe.alternate)) break t;
                  (nt = Ii(nt)), (pe = Ii(pe));
                }
                nt = null;
              }
            else nt = null;
            Ne !== null && Mm(Be, be, Ne, nt, !1), Ze !== null && Vt !== null && Mm(Be, Vt, Ze, nt, !0);
          }
        }
        e: {
          if (
            ((be = fe ? Ra(fe) : window),
            (Ne = be.nodeName && be.nodeName.toLowerCase()),
            Ne === 'select' || (Ne === 'input' && be.type === 'file'))
          )
            var Xe = rh;
          else if (eh(be))
            if (nh) Xe = B1;
            else {
              Xe = M1;
              var ft = T1;
            }
          else
            (Ne = be.nodeName),
              !Ne || Ne.toLowerCase() !== 'input' || (be.type !== 'checkbox' && be.type !== 'radio')
                ? fe && xc(fe.elementType) && (Xe = rh)
                : (Xe = R1);
          if (Xe && (Xe = Xe(e, fe))) {
            th(Be, Xe, n, _e);
            break e;
          }
          ft && ft(e, be, fe),
            e === 'focusout' &&
              fe &&
              be.type === 'number' &&
              fe.memoizedProps.value != null &&
              Sc(be, 'number', be.value);
        }
        switch (((ft = fe ? Ra(fe) : window), e)) {
          case 'focusin':
            (eh(ft) || ft.contentEditable === 'true') && ((pi = ft), (jc = fe), (al = null));
            break;
          case 'focusout':
            al = jc = pi = null;
            break;
          case 'mousedown':
            kc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (kc = !1), fh(Be, n, _e);
            break;
          case 'selectionchange':
            if (U1) break;
          case 'keydown':
          case 'keyup':
            fh(Be, n, _e);
        }
        var Qe;
        if (Bc)
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
          mi
            ? Jd(e, n) && (tt = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (tt = 'onCompositionStart');
        tt &&
          (Zd &&
            n.locale !== 'ko' &&
            (mi || tt !== 'onCompositionStart'
              ? tt === 'onCompositionEnd' && mi && (Qe = Gd())
              : ((Wn = _e), (_c = 'value' in Wn ? Wn.value : Wn.textContent), (mi = !0))),
          (ft = hs(fe, tt)),
          0 < ft.length &&
            ((tt = new Kd(tt, e, null, n, _e)),
            Be.push({ event: tt, listeners: ft }),
            Qe ? (tt.data = Qe) : ((Qe = Wd(n)), Qe !== null && (tt.data = Qe)))),
          (Qe = E1 ? A1(e, n) : N1(e, n)) &&
            ((tt = hs(fe, 'onBeforeInput')),
            0 < tt.length &&
              ((ft = new Kd('onBeforeInput', 'beforeinput', null, n, _e)),
              Be.push({ event: ft, listeners: tt }),
              (ft.data = Qe))),
          gv(Be, e, fe, n, _e);
      }
      Om(Be, t);
    });
  }
  function Cl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function hs(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var c = e,
        o = c.stateNode;
      (c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          o === null ||
          ((c = Qi(e, n)), c != null && l.unshift(Cl(e, c, o)), (c = Qi(e, t)), c != null && l.push(Cl(e, c, o))),
        (e = e.return);
    }
    return l;
  }
  function Ii(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Mm(e, t, n, l, c) {
    for (var o = t._reactName, x = []; n !== null && n !== l; ) {
      var C = n,
        X = C.alternate,
        fe = C.stateNode;
      if (((C = C.tag), X !== null && X === l)) break;
      (C !== 5 && C !== 26 && C !== 27) ||
        fe === null ||
        ((X = fe),
        c
          ? ((fe = Qi(n, o)), fe != null && x.unshift(Cl(n, fe, X)))
          : c || ((fe = Qi(n, o)), fe != null && x.push(Cl(n, fe, X)))),
        (n = n.return);
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var Sv = /\r\n?/g,
    xv = /\u0000|\uFFFD/g;
  function Rm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Sv,
        `
`
      )
      .replace(xv, '');
  }
  function Bm(e, t) {
    return (t = Rm(t)), Rm(e) === t;
  }
  function ms() {}
  function At(e, t, n, l, c, o) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || fi(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && fi(e, '' + l);
        break;
      case 'className':
        wu(e, 'class', l);
        break;
      case 'tabIndex':
        wu(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        wu(e, n, l);
        break;
      case 'style':
        Hd(e, l, o);
        break;
      case 'data':
        if (t !== 'object') {
          wu(e, 'data', l);
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
        (l = Nu('' + l)), e.setAttribute(n, l);
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
        (l = Nu('' + l)), e.setAttribute(n, l);
        break;
      case 'onClick':
        l != null && (e.onclick = ms);
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
        (n = Nu('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n);
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
        gt('beforetoggle', e), gt('toggle', e), xu(e, 'popover', l);
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
        xu(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Qy.get(n) || n), xu(e, n, l));
    }
  }
  function uf(e, t, n, l, c, o) {
    switch (n) {
      case 'style':
        Hd(e, l, o);
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
        typeof l == 'string' ? fi(e, l) : (typeof l == 'number' || typeof l == 'bigint') && fi(e, '' + l);
        break;
      case 'onScroll':
        l != null && gt('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && gt('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = ms);
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
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : xu(e, n, l);
          }
    }
  }
  function ar(e, t, n) {
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
          X = null,
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
                  X = _e;
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
        Id(e, o, C, X, fe, x, c, !1), Eu(e);
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
        (t = o), (n = x), (e.multiple = !!l), t != null ? oi(e, !!l, t, !1) : n != null && oi(e, !!l, n, !0);
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
        Ld(e, l, c, o), Eu(e);
        return;
      case 'option':
        for (X in n)
          if (n.hasOwnProperty(X) && ((l = n[X]), l != null))
            switch (X) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                At(e, t, X, l, n, null);
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
        for (l = 0; l < Bl.length; l++) gt(Bl[l], e);
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
        if (xc(t)) {
          for (_e in n) n.hasOwnProperty(_e) && ((l = n[_e]), l !== void 0 && uf(e, t, _e, l, n, void 0));
          return;
        }
    }
    for (C in n) n.hasOwnProperty(C) && ((l = n[C]), l != null && At(e, t, C, l, n, null));
  }
  function wv(e, t, n, l) {
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
          X = null,
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
                X = Be;
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
        bc(e, x, C, X, fe, _e, o, c);
        return;
      case 'select':
        Ne = x = C = be = null;
        for (o in n)
          if (((X = n[o]), n.hasOwnProperty(o) && X != null))
            switch (o) {
              case 'value':
                break;
              case 'multiple':
                Ne = X;
              default:
                l.hasOwnProperty(o) || At(e, t, o, null, l, X);
            }
        for (c in l)
          if (((o = l[c]), (X = n[c]), l.hasOwnProperty(c) && (o != null || X != null)))
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
                o !== X && At(e, t, c, o, l, X);
            }
        (t = C),
          (n = x),
          (l = Ne),
          be != null ? oi(e, !!n, be, !1) : !!l != !!n && (t != null ? oi(e, !!n, t, !0) : oi(e, !!n, n ? [] : '', !1));
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
        qd(e, be, Ne);
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
        for (X in l)
          if (((be = l[X]), (Ne = n[X]), l.hasOwnProperty(X) && be !== Ne && (be != null || Ne != null)))
            switch (X) {
              case 'selected':
                e.selected = be && typeof be != 'function' && typeof be != 'symbol';
                break;
              default:
                At(e, t, X, be, l, Ne);
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
        if (xc(t)) {
          for (var Vt in n)
            (be = n[Vt]), n.hasOwnProperty(Vt) && be !== void 0 && !l.hasOwnProperty(Vt) && uf(e, t, Vt, void 0, l, be);
          for (_e in l)
            (be = l[_e]),
              (Ne = n[_e]),
              !l.hasOwnProperty(_e) || be === Ne || (be === void 0 && Ne === void 0) || uf(e, t, _e, be, l, Ne);
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
  var sf = null,
    cf = null;
  function ps(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Cm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Dm(e, t) {
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
  function of(e, t) {
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
  var ff = null;
  function Ev() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === ff ? !1 : ((ff = e), !0)) : ((ff = null), !1);
  }
  var Um = typeof setTimeout == 'function' ? setTimeout : void 0,
    Av = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    jm = typeof Promise == 'function' ? Promise : void 0,
    Nv =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof jm < 'u'
          ? function (e) {
              return jm.resolve(null).then(e).catch(_v);
            }
          : Um;
  function _v(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function df(e, t) {
    var n = t,
      l = 0;
    do {
      var c = n.nextSibling;
      if ((e.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === '/$')) {
          if (l === 0) {
            e.removeChild(c), zl(t);
            return;
          }
          l--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || l++;
      n = c;
    } while (n);
    zl(t);
  }
  function hf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          hf(n), Zi(n);
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
  function Ov(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var c = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Ma])
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
  function Tv(e, t, n) {
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
  function km(e) {
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
  function Im(e, t, n) {
    switch (((t = ps(n)), e)) {
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
    qm = new Set();
  function gs(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.ownerDocument;
  }
  var Ln = T.d;
  T.d = { f: Mv, r: Rv, D: Bv, C: Cv, L: Dv, m: Uv, X: kv, S: jv, M: Iv };
  function Mv() {
    var e = Ln.f(),
      t = ss();
    return e || t;
  }
  function Rv(e) {
    var t = Jn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? f0(t) : Ln.r(e);
  }
  var qi = typeof document > 'u' ? null : document;
  function Lm(e, t, n) {
    var l = qi;
    if (l && typeof t == 'string' && t) {
      var c = Lr(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof n == 'string' && (c += '[crossorigin="' + n + '"]'),
        qm.has(c) ||
          (qm.add(c),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(c) === null &&
            ((t = l.createElement('link')), ar(t, 'link', e), Je(t), l.head.appendChild(t)));
    }
  }
  function Bv(e) {
    Ln.D(e), Lm('dns-prefetch', e, null);
  }
  function Cv(e, t) {
    Ln.C(e, t), Lm('preconnect', e, t);
  }
  function Dv(e, t, n) {
    Ln.L(e, t, n);
    var l = qi;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + Lr(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((c += '[imagesrcset="' + Lr(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (c += '[imagesizes="' + Lr(n.imageSizes) + '"]'))
        : (c += '[href="' + Lr(e) + '"]');
      var o = c;
      switch (t) {
        case 'style':
          o = Li(e);
          break;
        case 'script':
          o = zi(e);
      }
      Zr.has(o) ||
        ((e = O({ rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
        Zr.set(o, e),
        l.querySelector(c) !== null ||
          (t === 'style' && l.querySelector(Dl(o))) ||
          (t === 'script' && l.querySelector(Ul(o))) ||
          ((t = l.createElement('link')), ar(t, 'link', e), Je(t), l.head.appendChild(t)));
    }
  }
  function Uv(e, t) {
    Ln.m(e, t);
    var n = qi;
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
          o = zi(e);
      }
      if (!Zr.has(o) && ((e = O({ rel: 'modulepreload', href: e }, t)), Zr.set(o, e), n.querySelector(c) === null)) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Ul(o))) return;
        }
        (l = n.createElement('link')), ar(l, 'link', e), Je(l), n.head.appendChild(l);
      }
    }
  }
  function jv(e, t, n) {
    Ln.S(e, t, n);
    var l = qi;
    if (l && e) {
      var c = ee(l).hoistableStyles,
        o = Li(e);
      t = t || 'default';
      var x = c.get(o);
      if (!x) {
        var C = { loading: 0, preload: null };
        if ((x = l.querySelector(Dl(o)))) C.loading = 5;
        else {
          (e = O({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = Zr.get(o)) && mf(e, n);
          var X = (x = l.createElement('link'));
          Je(X),
            ar(X, 'link', e),
            (X._p = new Promise(function (fe, _e) {
              (X.onload = fe), (X.onerror = _e);
            })),
            X.addEventListener('load', function () {
              C.loading |= 1;
            }),
            X.addEventListener('error', function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            ys(x, t, l);
        }
        (x = { type: 'stylesheet', instance: x, count: 1, state: C }), c.set(o, x);
      }
    }
  }
  function kv(e, t) {
    Ln.X(e, t);
    var n = qi;
    if (n && e) {
      var l = ee(n).hoistableScripts,
        c = zi(e),
        o = l.get(c);
      o ||
        ((o = n.querySelector(Ul(c))),
        o ||
          ((e = O({ src: e, async: !0 }, t)),
          (t = Zr.get(c)) && pf(e, t),
          (o = n.createElement('script')),
          Je(o),
          ar(o, 'link', e),
          n.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        l.set(c, o));
    }
  }
  function Iv(e, t) {
    Ln.M(e, t);
    var n = qi;
    if (n && e) {
      var l = ee(n).hoistableScripts,
        c = zi(e),
        o = l.get(c);
      o ||
        ((o = n.querySelector(Ul(c))),
        o ||
          ((e = O({ src: e, async: !0, type: 'module' }, t)),
          (t = Zr.get(c)) && pf(e, t),
          (o = n.createElement('script')),
          Je(o),
          ar(o, 'link', e),
          n.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        l.set(c, o));
    }
  }
  function zm(e, t, n, l) {
    var c = (c = se.current) ? gs(c) : null;
    if (!c) throw Error(u(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Li(n.href)),
            (n = ee(c).hoistableStyles),
            (l = n.get(t)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), n.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (n.rel === 'stylesheet' && typeof n.href == 'string' && typeof n.precedence == 'string') {
          e = Li(n.href);
          var o = ee(c).hoistableStyles,
            x = o.get(e);
          if (
            (x ||
              ((c = c.ownerDocument || c),
              (x = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
              o.set(e, x),
              (o = c.querySelector(Dl(e))) && !o._p && ((x.instance = o), (x.state.loading = 5)),
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
                o || qv(c, e, n, x.state))),
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
            ? ((t = zi(n)),
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
  function Li(e) {
    return 'href="' + Lr(e) + '"';
  }
  function Dl(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Hm(e) {
    return O({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function qv(e, t, n, l) {
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
        ar(t, 'link', n),
        Je(t),
        e.head.appendChild(t));
  }
  function zi(e) {
    return '[src="' + Lr(e) + '"]';
  }
  function Ul(e) {
    return 'script[async]' + e;
  }
  function Fm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Lr(n.href) + '"]');
          if (l) return (t.instance = l), Je(l), l;
          var c = O({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Je(l),
            ar(l, 'style', c),
            ys(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          c = Li(n.href);
          var o = e.querySelector(Dl(c));
          if (o) return (t.state.loading |= 4), (t.instance = o), Je(o), o;
          (l = Hm(n)), (c = Zr.get(c)) && mf(l, c), (o = (e.ownerDocument || e).createElement('link')), Je(o);
          var x = o;
          return (
            (x._p = new Promise(function (C, X) {
              (x.onload = C), (x.onerror = X);
            })),
            ar(o, 'link', l),
            (t.state.loading |= 4),
            ys(o, n.precedence, e),
            (t.instance = o)
          );
        case 'script':
          return (
            (o = zi(n.src)),
            (c = e.querySelector(Ul(o)))
              ? ((t.instance = c), Je(c), c)
              : ((l = n),
                (c = Zr.get(o)) && ((l = O({}, n)), pf(l, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement('script')),
                Je(c),
                ar(c, 'link', l),
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
        ((l = t.instance), (t.state.loading |= 4), ys(l, n.precedence, e));
    return t.instance;
  }
  function ys(e, t, n) {
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
  function mf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function pf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var vs = null;
  function Vm(e, t, n) {
    if (vs === null) {
      var l = new Map(),
        c = (vs = new Map());
      c.set(n, l);
    } else (c = vs), (l = c.get(n)), l || ((l = new Map()), c.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), c = 0; c < n.length; c++) {
      var o = n[c];
      if (
        !(o[Ma] || o[dt] || (e === 'link' && o.getAttribute('rel') === 'stylesheet')) &&
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
  function Gm(e, t, n) {
    (e = e.ownerDocument || e), e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null);
  }
  function Lv(e, t, n) {
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
  function $m(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var jl = null;
  function zv() {}
  function Hv(e, t, n) {
    if (jl === null) throw Error(u(475));
    var l = jl;
    if (
      t.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var c = Li(n.href),
          o = e.querySelector(Dl(c));
        if (o) {
          (e = o._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = bs.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = o),
            Je(o);
          return;
        }
        (o = e.ownerDocument || e), (n = Hm(n)), (c = Zr.get(c)) && mf(n, c), (o = o.createElement('link')), Je(o);
        var x = o;
        (x._p = new Promise(function (C, X) {
          (x.onload = C), (x.onerror = X);
        })),
          ar(o, 'link', n),
          (t.instance = o);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++, (t = bs.bind(l)), e.addEventListener('load', t), e.addEventListener('error', t));
    }
  }
  function Fv() {
    if (jl === null) throw Error(u(475));
    var e = jl;
    return (
      e.stylesheets && e.count === 0 && gf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && gf(e, e.stylesheets), e.unsuspend)) {
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
  function bs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) gf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Ss = null;
  function gf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null && (e.count++, (Ss = new Map()), t.forEach(Vv, e), (Ss = null), bs.call(e));
  }
  function Vv(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ss.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Ss.set(e, n);
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
        (l = bs.bind(this)),
        c.addEventListener('load', l),
        c.addEventListener('error', l),
        o
          ? o.parentNode.insertBefore(c, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var kl = { $$typeof: w, Provider: null, Consumer: null, _currentValue: je, _currentValue2: je, _threadCount: 0 };
  function Gv(e, t, n, l, c, o, x, C) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ci(-1)),
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
      (this.entanglements = ci(0)),
      (this.hiddenUpdates = ci(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = o),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map());
  }
  function Ym(e, t, n, l, c, o, x, C, X, fe, _e, Be) {
    return (
      (e = new Gv(e, t, n, x, C, X, fe, Be)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = Kr(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = Yc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Oo(o),
      e
    );
  }
  function Km(e) {
    return e ? ((e = vi), e) : vi;
  }
  function Xm(e, t, n, l, c, o) {
    (c = Km(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = ua(t)),
      (l.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = sa(e, l, t)),
      n !== null && (gr(n, e, t), bl(n, e, t));
  }
  function Zm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function yf(e, t) {
    Zm(e, t), (e = e.alternate) && Zm(e, t);
  }
  function Qm(e) {
    if (e.tag === 13) {
      var t = ea(e, 67108864);
      t !== null && gr(t, e, 67108864), yf(e, 67108864);
    }
  }
  var xs = !0;
  function $v(e, t, n, l) {
    var c = A.T;
    A.T = null;
    var o = T.p;
    try {
      (T.p = 2), vf(e, t, n, l);
    } finally {
      (T.p = o), (A.T = c);
    }
  }
  function Yv(e, t, n, l) {
    var c = A.T;
    A.T = null;
    var o = T.p;
    try {
      (T.p = 8), vf(e, t, n, l);
    } finally {
      (T.p = o), (A.T = c);
    }
  }
  function vf(e, t, n, l) {
    if (xs) {
      var c = bf(l);
      if (c === null) lf(e, t, l, ws, n), Jm(e, l);
      else if (Xv(c, e, t, n, l)) l.stopPropagation();
      else if ((Jm(e, l), t & 4 && -1 < Kv.indexOf(e))) {
        for (; c !== null; ) {
          var o = Jn(c);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var x = $e(o.pendingLanes);
                  if (x !== 0) {
                    var C = o;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; x; ) {
                      var X = 1 << (31 - qe(x));
                      (C.entanglements[1] |= X), (x &= ~X);
                    }
                    yn(o), (qt & 6) === 0 && ((is = De() + 500), Rl(0));
                  }
                }
                break;
              case 13:
                (C = ea(o, 2)), C !== null && gr(C, o, 2), ss(), yf(o, 2);
            }
          if (((o = bf(l)), o === null && lf(e, t, l, ws, n), o === c)) break;
          c = o;
        }
        c !== null && l.stopPropagation();
      } else lf(e, t, l, null, n);
    }
  }
  function bf(e) {
    return (e = Ec(e)), Sf(e);
  }
  var ws = null;
  function Sf(e) {
    if (((ws = null), (e = pt(e)), e !== null)) {
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
    return (ws = e), null;
  }
  function Pm(e) {
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
        switch (He()) {
          case rt:
            return 2;
          case E:
            return 8;
          case m:
          case y:
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
  var xf = !1,
    pa = null,
    ga = null,
    ya = null,
    Il = new Map(),
    ql = new Map(),
    va = [],
    Kv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Jm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        pa = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ga = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ya = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Il.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        ql.delete(t.pointerId);
    }
  }
  function Ll(e, t, n, l, c, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: l, nativeEvent: o, targetContainers: [c] }),
        t !== null && ((t = Jn(t)), t !== null && Qm(t)),
        e)
      : ((e.eventSystemFlags |= l), (t = e.targetContainers), c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function Xv(e, t, n, l, c) {
    switch (t) {
      case 'focusin':
        return (pa = Ll(pa, e, t, n, l, c)), !0;
      case 'dragenter':
        return (ga = Ll(ga, e, t, n, l, c)), !0;
      case 'mouseover':
        return (ya = Ll(ya, e, t, n, l, c)), !0;
      case 'pointerover':
        var o = c.pointerId;
        return Il.set(o, Ll(Il.get(o) || null, e, t, n, l, c)), !0;
      case 'gotpointercapture':
        return (o = c.pointerId), ql.set(o, Ll(ql.get(o) || null, e, t, n, l, c)), !0;
    }
    return !1;
  }
  function Wm(e) {
    var t = pt(e.target);
    if (t !== null) {
      var n = H(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = oe(n)), t !== null)) {
            (e.blockedOn = t),
              gc(e.priority, function () {
                if (n.tag === 13) {
                  var l = Dr(),
                    c = ea(n, l);
                  c !== null && gr(c, n, l), yf(n, l);
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
  function Es(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (wc = l), n.target.dispatchEvent(l), (wc = null);
      } else return (t = Jn(n)), t !== null && Qm(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ep(e, t, n) {
    Es(e) && n.delete(t);
  }
  function Zv() {
    (xf = !1),
      pa !== null && Es(pa) && (pa = null),
      ga !== null && Es(ga) && (ga = null),
      ya !== null && Es(ya) && (ya = null),
      Il.forEach(ep),
      ql.forEach(ep);
  }
  function As(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), xf || ((xf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Zv)));
  }
  var Ns = null;
  function tp(e) {
    Ns !== e &&
      ((Ns = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        Ns === e && (Ns = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            c = e[t + 2];
          if (typeof l != 'function') {
            if (Sf(l || n) === null) continue;
            break;
          }
          var o = Jn(n);
          o !== null && (e.splice(t, 3), (t -= 3), so(o, { pending: !0, data: c, method: n.method, action: l }, l, c));
        }
      }));
  }
  function zl(e) {
    function t(X) {
      return As(X, e);
    }
    pa !== null && As(pa, e), ga !== null && As(ga, e), ya !== null && As(ya, e), Il.forEach(t), ql.forEach(t);
    for (var n = 0; n < va.length; n++) {
      var l = va[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < va.length && ((n = va[0]), n.blockedOn === null); ) Wm(n), n.blockedOn === null && va.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var c = n[l],
          o = n[l + 1],
          x = c[lr] || null;
        if (typeof o == 'function') x || tp(n);
        else if (x) {
          var C = null;
          if (o && o.hasAttribute('formAction')) {
            if (((c = o), (x = o[lr] || null))) C = x.formAction;
            else if (Sf(c) !== null) continue;
          } else C = x.action;
          typeof C == 'function' ? (n[l + 1] = C) : (n.splice(l, 3), (l -= 3)), tp(n);
        }
      }
  }
  function wf(e) {
    this._internalRoot = e;
  }
  (_s.prototype.render = wf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var n = t.current,
        l = Dr();
      Xm(n, l, e, t, null, null);
    }),
    (_s.prototype.unmount = wf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && ji(), Xm(e.current, 2, null, e, null, null), ss(), (t[Pn] = null);
        }
      });
  function _s(e) {
    this._internalRoot = e;
  }
  _s.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = bu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < va.length && t !== 0 && t < va[n].priority; n++);
      va.splice(n, 0, e), n === 0 && Wm(e);
    }
  };
  var rp = a.version;
  if (rp !== '19.0.0') throw Error(u(527, rp, '19.0.0'));
  T.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function' ? Error(u(188)) : ((e = Object.keys(e).join(',')), Error(u(268, e)));
    return (e = ne(t)), (e = e !== null ? Ee(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var Qv = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    findFiberByHostInstance: pt,
    reconcilerVersion: '19.0.0'
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Os.isDisabled && Os.supportsFiber)
      try {
        (q = Os.inject(Qv)), (de = Os);
      } catch {}
  }
  return (
    (Fl.createRoot = function (e, t) {
      if (!s(e)) throw Error(u(299));
      var n = !1,
        l = '',
        c = b0,
        o = S0,
        x = x0,
        C = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (x = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (C = t.unstable_transitionCallbacks)),
        (t = Ym(e, 1, !1, null, null, n, l, c, o, x, C, null)),
        (e[Pn] = t.current),
        af(e.nodeType === 8 ? e.parentNode : e),
        new wf(t)
      );
    }),
    (Fl.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(u(299));
      var l = !1,
        c = '',
        o = b0,
        x = S0,
        C = x0,
        X = null,
        fe = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (x = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 && (X = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (fe = n.formState)),
        (t = Ym(e, 1, !0, t, n ?? null, l, c, o, x, C, X, fe)),
        (t.context = Km(null)),
        (n = t.current),
        (l = Dr()),
        (c = ua(l)),
        (c.callback = null),
        sa(n, c, l),
        (t.current.lanes = l),
        Tt(t, l),
        yn(t),
        (e[Pn] = t.current),
        af(e),
        new _s(t)
      );
    }),
    (Fl.version = '19.0.0'),
    Fl
  );
}
var hp;
function sb() {
  if (hp) return Nf.exports;
  hp = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), (Nf.exports = ub()), Nf.exports;
}
var cb = sb();
const ob = au(cb);
var Vl = {},
  mp;
function fb() {
  if (mp) return Vl;
  (mp = 1), Object.defineProperty(Vl, '__esModule', { value: !0 }), (Vl.parse = d), (Vl.serialize = g);
  const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    a = /^[\u0021-\u003A\u003C-\u007E]*$/,
    i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
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
      const z = S.indexOf('=', W);
      if (z === -1) break;
      const Se = S.indexOf(';', W),
        ze = Se === -1 ? P : Se;
      if (z > ze) {
        W = S.lastIndexOf(';', z - 1) + 1;
        continue;
      }
      const we = h(S, W, z),
        he = p(S, z, we),
        Ae = S.slice(we, he);
      if (D[Ae] === void 0) {
        let b = h(S, z + 1, ze),
          A = p(S, ze, b);
        const O = J(S.slice(b, A));
        D[Ae] = O;
      }
      W = ze + 1;
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
    if (!a.test(J)) throw new TypeError(`argument val is invalid: ${w}`);
    let W = S + '=' + J;
    if (!D) return W;
    if (D.maxAge !== void 0) {
      if (!Number.isInteger(D.maxAge)) throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);
      W += '; Max-Age=' + D.maxAge;
    }
    if (D.domain) {
      if (!i.test(D.domain)) throw new TypeError(`option domain is invalid: ${D.domain}`);
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
fb();
/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var pp = 'popstate';
function db(r = {}) {
  function a(s, f) {
    let { pathname: d = '/', search: h = '', hash: p = '' } = ai(s.location.hash.substring(1));
    return (
      !d.startsWith('/') && !d.startsWith('.') && (d = '/' + d),
      td(
        '',
        { pathname: d, search: h, hash: p },
        (f.state && f.state.usr) || null,
        (f.state && f.state.key) || 'default'
      )
    );
  }
  function i(s, f) {
    let d = s.document.querySelector('base'),
      h = '';
    if (d && d.getAttribute('href')) {
      let p = s.location.href,
        g = p.indexOf('#');
      h = g === -1 ? p : p.slice(0, g);
    }
    return h + '#' + (typeof f == 'string' ? f : ru(f));
  }
  function u(s, f) {
    cn(s.pathname.charAt(0) === '/', `relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`);
  }
  return mb(a, i, u, r);
}
function zt(r, a) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(a);
}
function cn(r, a) {
  if (!r) {
    typeof console < 'u' && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function hb() {
  return Math.random().toString(36).substring(2, 10);
}
function gp(r, a) {
  return { usr: r.state, key: r.key, idx: a };
}
function td(r, a, i = null, u) {
  return {
    pathname: typeof r == 'string' ? r : r.pathname,
    search: '',
    hash: '',
    ...(typeof a == 'string' ? ai(a) : a),
    state: i,
    key: (a && a.key) || u || hb()
  };
}
function ru({ pathname: r = '/', search: a = '', hash: i = '' }) {
  return (
    a && a !== '?' && (r += a.charAt(0) === '?' ? a : '?' + a),
    i && i !== '#' && (r += i.charAt(0) === '#' ? i : '#' + i),
    r
  );
}
function ai(r) {
  let a = {};
  if (r) {
    let i = r.indexOf('#');
    i >= 0 && ((a.hash = r.substring(i)), (r = r.substring(0, i)));
    let u = r.indexOf('?');
    u >= 0 && ((a.search = r.substring(u)), (r = r.substring(0, u))), r && (a.pathname = r);
  }
  return a;
}
function mb(r, a, i, u = {}) {
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
    let z = td(P.location, J, W);
    i && i(z, J), (g = N() + 1);
    let Se = gp(z, g),
      ze = P.createHref(z);
    try {
      d.pushState(Se, '', ze);
    } catch (we) {
      if (we instanceof DOMException && we.name === 'DataCloneError') throw we;
      s.location.assign(ze);
    }
    f && p && p({ action: h, location: P.location, delta: 1 });
  }
  function w(J, W) {
    h = 'REPLACE';
    let z = td(P.location, J, W);
    i && i(z, J), (g = N());
    let Se = gp(z, g),
      ze = P.createHref(z);
    d.replaceState(Se, '', ze), f && p && p({ action: h, location: P.location, delta: 0 });
  }
  function D(J) {
    let W = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      z = typeof J == 'string' ? J : ru(J);
    return (
      (z = z.replace(/ $/, '%20')),
      zt(W, `No window.location.(origin|href) available to create URL for href: ${z}`),
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
        s.addEventListener(pp, v),
        (p = J),
        () => {
          s.removeEventListener(pp, v), (p = null);
        }
      );
    },
    createHref(J) {
      return a(s, J);
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
function Mg(r, a, i = '/') {
  return pb(r, a, i, !1);
}
function pb(r, a, i, u) {
  let s = typeof a == 'string' ? ai(a) : a,
    f = Xn(s.pathname || '/', i);
  if (f == null) return null;
  let d = Rg(r);
  gb(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let g = Ob(f);
    h = Nb(d[p], g, u);
  }
  return h;
}
function Rg(r, a = [], i = [], u = '') {
  let s = (f, d, h) => {
    let p = {
      relativePath: h === void 0 ? f.path || '' : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f
    };
    p.relativePath.startsWith('/') &&
      (zt(
        p.relativePath.startsWith(u),
        `Absolute route path "${p.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(u.length)));
    let g = Yn([u, p.relativePath]),
      N = i.concat(p);
    f.children &&
      f.children.length > 0 &&
      (zt(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      Rg(f.children, a, N, g)),
      !(f.path == null && !f.index) && a.push({ path: g, score: Eb(g, f.index), routesMeta: N });
  };
  return (
    r.forEach((f, d) => {
      var h;
      if (f.path === '' || !((h = f.path) != null && h.includes('?'))) s(f, d);
      else for (let p of Bg(f.path)) s(f, d, p);
    }),
    a
  );
}
function Bg(r) {
  let a = r.split('/');
  if (a.length === 0) return [];
  let [i, ...u] = a,
    s = i.endsWith('?'),
    f = i.replace(/\?$/, '');
  if (u.length === 0) return s ? [f, ''] : [f];
  let d = Bg(u.join('/')),
    h = [];
  return (
    h.push(...d.map((p) => (p === '' ? f : [f, p].join('/')))),
    s && h.push(...d),
    h.map((p) => (r.startsWith('/') && p === '' ? '/' : p))
  );
}
function gb(r) {
  r.sort((a, i) =>
    a.score !== i.score
      ? i.score - a.score
      : Ab(
          a.routesMeta.map((u) => u.childrenIndex),
          i.routesMeta.map((u) => u.childrenIndex)
        )
  );
}
var yb = /^:[\w-]+$/,
  vb = 3,
  bb = 2,
  Sb = 1,
  xb = 10,
  wb = -2,
  yp = (r) => r === '*';
function Eb(r, a) {
  let i = r.split('/'),
    u = i.length;
  return (
    i.some(yp) && (u += wb),
    a && (u += bb),
    i.filter((s) => !yp(s)).reduce((s, f) => s + (yb.test(f) ? vb : f === '' ? Sb : xb), u)
  );
}
function Ab(r, a) {
  return r.length === a.length && r.slice(0, -1).every((u, s) => u === a[s]) ? r[r.length - 1] - a[a.length - 1] : 0;
}
function Nb(r, a, i = !1) {
  let { routesMeta: u } = r,
    s = {},
    f = '/',
    d = [];
  for (let h = 0; h < u.length; ++h) {
    let p = u[h],
      g = h === u.length - 1,
      N = f === '/' ? a : a.slice(f.length) || '/',
      v = Gs({ path: p.relativePath, caseSensitive: p.caseSensitive, end: g }, N),
      S = p.route;
    if (
      (!v &&
        g &&
        i &&
        !u[u.length - 1].route.index &&
        (v = Gs({ path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 }, N)),
      !v)
    )
      return null;
    Object.assign(s, v.params),
      d.push({ params: s, pathname: Yn([f, v.pathname]), pathnameBase: Bb(Yn([f, v.pathnameBase])), route: S }),
      v.pathnameBase !== '/' && (f = Yn([f, v.pathnameBase]));
  }
  return d;
}
function Gs(r, a) {
  typeof r == 'string' && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, u] = _b(r.path, r.caseSensitive, r.end),
    s = a.match(i);
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
function _b(r, a = !1, i = !0) {
  cn(
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
      : i
        ? (s += '\\/*$')
        : r !== '' && r !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, a ? void 0 : 'i'), u]
  );
}
function Ob(r) {
  try {
    return r
      .split('/')
      .map((a) => decodeURIComponent(a).replace(/\//g, '%2F'))
      .join('/');
  } catch (a) {
    return (
      cn(
        !1,
        `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
      ),
      r
    );
  }
}
function Xn(r, a) {
  if (a === '/') return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase())) return null;
  let i = a.endsWith('/') ? a.length - 1 : a.length,
    u = r.charAt(i);
  return u && u !== '/' ? null : r.slice(i) || '/';
}
function Tb(r, a = '/') {
  let { pathname: i, search: u = '', hash: s = '' } = typeof r == 'string' ? ai(r) : r;
  return { pathname: i ? (i.startsWith('/') ? i : Mb(i, a)) : a, search: Cb(u), hash: Db(s) };
}
function Mb(r, a) {
  let i = a.replace(/\/+$/, '').split('/');
  return (
    r.split('/').forEach((s) => {
      s === '..' ? i.length > 1 && i.pop() : s !== '.' && i.push(s);
    }),
    i.length > 1 ? i.join('/') : '/'
  );
}
function Mf(r, a, i, u) {
  return `Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Rb(r) {
  return r.filter((a, i) => i === 0 || (a.route.path && a.route.path.length > 0));
}
function Cg(r) {
  let a = Rb(r);
  return a.map((i, u) => (u === a.length - 1 ? i.pathname : i.pathnameBase));
}
function Dg(r, a, i, u = !1) {
  let s;
  typeof r == 'string'
    ? (s = ai(r))
    : ((s = { ...r }),
      zt(!s.pathname || !s.pathname.includes('?'), Mf('?', 'pathname', 'search', s)),
      zt(!s.pathname || !s.pathname.includes('#'), Mf('#', 'pathname', 'hash', s)),
      zt(!s.search || !s.search.includes('#'), Mf('#', 'search', 'hash', s)));
  let f = r === '' || s.pathname === '',
    d = f ? '/' : s.pathname,
    h;
  if (d == null) h = i;
  else {
    let v = a.length - 1;
    if (!u && d.startsWith('..')) {
      let S = d.split('/');
      for (; S[0] === '..'; ) S.shift(), (v -= 1);
      s.pathname = S.join('/');
    }
    h = v >= 0 ? a[v] : '/';
  }
  let p = Tb(s, h),
    g = d && d !== '/' && d.endsWith('/'),
    N = (f || d === '.') && i.endsWith('/');
  return !p.pathname.endsWith('/') && (g || N) && (p.pathname += '/'), p;
}
var Yn = (r) => r.join('/').replace(/\/\/+/g, '/'),
  Bb = (r) => r.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Cb = (r) => (!r || r === '?' ? '' : r.startsWith('?') ? r : '?' + r),
  Db = (r) => (!r || r === '#' ? '' : r.startsWith('#') ? r : '#' + r);
function Ub(r) {
  return (
    r != null &&
    typeof r.status == 'number' &&
    typeof r.statusText == 'string' &&
    typeof r.internal == 'boolean' &&
    'data' in r
  );
}
var Ug = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Ug);
var jb = ['GET', ...Ug];
new Set(jb);
var Ki = le.createContext(null);
Ki.displayName = 'DataRouter';
var ac = le.createContext(null);
ac.displayName = 'DataRouterState';
var jg = le.createContext({ isTransitioning: !1 });
jg.displayName = 'ViewTransition';
var kb = le.createContext(new Map());
kb.displayName = 'Fetchers';
var Ib = le.createContext(null);
Ib.displayName = 'Await';
var En = le.createContext(null);
En.displayName = 'Navigation';
var iu = le.createContext(null);
iu.displayName = 'Location';
var Qn = le.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Qn.displayName = 'Route';
var dd = le.createContext(null);
dd.displayName = 'RouteError';
function qb(r, { relative: a } = {}) {
  zt(lu(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: i, navigator: u } = le.useContext(En),
    { hash: s, pathname: f, search: d } = uu(r, { relative: a }),
    h = f;
  return i !== '/' && (h = f === '/' ? i : Yn([i, f])), u.createHref({ pathname: h, search: d, hash: s });
}
function lu() {
  return le.useContext(iu) != null;
}
function ii() {
  return zt(lu(), 'useLocation() may be used only in the context of a <Router> component.'), le.useContext(iu).location;
}
var kg = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ig(r) {
  le.useContext(En).static || le.useLayoutEffect(r);
}
function Lb() {
  let { isDataRoute: r } = le.useContext(Qn);
  return r ? Jb() : zb();
}
function zb() {
  zt(lu(), 'useNavigate() may be used only in the context of a <Router> component.');
  let r = le.useContext(Ki),
    { basename: a, navigator: i } = le.useContext(En),
    { matches: u } = le.useContext(Qn),
    { pathname: s } = ii(),
    f = JSON.stringify(Cg(u)),
    d = le.useRef(!1);
  return (
    Ig(() => {
      d.current = !0;
    }),
    le.useCallback(
      (p, g = {}) => {
        if ((cn(d.current, kg), !d.current)) return;
        if (typeof p == 'number') {
          i.go(p);
          return;
        }
        let N = Dg(p, JSON.parse(f), s, g.relative === 'path');
        r == null && a !== '/' && (N.pathname = N.pathname === '/' ? a : Yn([a, N.pathname])),
          (g.replace ? i.replace : i.push)(N, g.state, g);
      },
      [a, i, f, s, r]
    )
  );
}
le.createContext(null);
function uu(r, { relative: a } = {}) {
  let { matches: i } = le.useContext(Qn),
    { pathname: u } = ii(),
    s = JSON.stringify(Cg(i));
  return le.useMemo(() => Dg(r, JSON.parse(s), u, a === 'path'), [r, s, u, a]);
}
function Hb(r, a) {
  return qg(r, a);
}
function qg(r, a, i, u) {
  var z;
  zt(lu(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: s, static: f } = le.useContext(En),
    { matches: d } = le.useContext(Qn),
    h = d[d.length - 1],
    p = h ? h.params : {},
    g = h ? h.pathname : '/',
    N = h ? h.pathnameBase : '/',
    v = h && h.route;
  {
    let Se = (v && v.path) || '';
    Lg(
      g,
      !v || Se.endsWith('*') || Se.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Se}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Se}"> to <Route path="${Se === '/' ? '*' : `${Se}/*`}">.`
    );
  }
  let S = ii(),
    w;
  if (a) {
    let Se = typeof a == 'string' ? ai(a) : a;
    zt(
      N === '/' || ((z = Se.pathname) == null ? void 0 : z.startsWith(N)),
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
  let J = !f && i && i.matches && i.matches.length > 0 ? i.matches : Mg(r, { pathname: P });
  cn(v || J != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `),
    cn(
      J == null ||
        J[J.length - 1].route.element !== void 0 ||
        J[J.length - 1].route.Component !== void 0 ||
        J[J.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let W = Yb(
    J &&
      J.map((Se) =>
        Object.assign({}, Se, {
          params: Object.assign({}, p, Se.params),
          pathname: Yn([N, s.encodeLocation ? s.encodeLocation(Se.pathname).pathname : Se.pathname]),
          pathnameBase:
            Se.pathnameBase === '/'
              ? N
              : Yn([N, s.encodeLocation ? s.encodeLocation(Se.pathnameBase).pathname : Se.pathnameBase])
        })
      ),
    d,
    i,
    u
  );
  return a && W
    ? le.createElement(
        iu.Provider,
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
function Fb() {
  let r = Pb(),
    a = Ub(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r),
    i = r instanceof Error ? r.stack : null,
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
      le.createElement('h3', { style: { fontStyle: 'italic' } }, a),
      i ? le.createElement('pre', { style: s }, i) : null,
      d
    )
  );
}
var Vb = le.createElement(Fb, null),
  Gb = class extends le.Component {
    constructor(r) {
      super(r), (this.state = { location: r.location, revalidation: r.revalidation, error: r.error });
    }
    static getDerivedStateFromError(r) {
      return { error: r };
    }
    static getDerivedStateFromProps(r, a) {
      return a.location !== r.location || (a.revalidation !== 'idle' && r.revalidation === 'idle')
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : a.error,
            location: a.location,
            revalidation: r.revalidation || a.revalidation
          };
    }
    componentDidCatch(r, a) {
      console.error('React Router caught the following error during render', r, a);
    }
    render() {
      return this.state.error !== void 0
        ? le.createElement(
            Qn.Provider,
            { value: this.props.routeContext },
            le.createElement(dd.Provider, { value: this.state.error, children: this.props.component })
          )
        : this.props.children;
    }
  };
function $b({ routeContext: r, match: a, children: i }) {
  let u = le.useContext(Ki);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = a.route.id),
    le.createElement(Qn.Provider, { value: r }, i)
  );
}
function Yb(r, a = [], i = null, u = null) {
  if (r == null) {
    if (!i) return null;
    if (i.errors) r = i.matches;
    else if (a.length === 0 && !i.initialized && i.matches.length > 0) r = i.matches;
    else return null;
  }
  let s = r,
    f = i == null ? void 0 : i.errors;
  if (f != null) {
    let p = s.findIndex((g) => g.route.id && (f == null ? void 0 : f[g.route.id]) !== void 0);
    zt(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`),
      (s = s.slice(0, Math.min(s.length, p + 1)));
  }
  let d = !1,
    h = -1;
  if (i)
    for (let p = 0; p < s.length; p++) {
      let g = s[p];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = p), g.route.id)) {
        let { loaderData: N, errors: v } = i,
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
    i &&
      ((v = f && g.route.id ? f[g.route.id] : void 0),
      (w = g.route.errorElement || Vb),
      d &&
        (h < 0 && N === 0
          ? (Lg('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'),
            (S = !0),
            (D = null))
          : h === N && ((S = !0), (D = g.route.hydrateFallbackElement || null))));
    let P = a.concat(s.slice(0, N + 1)),
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
          le.createElement($b, {
            match: g,
            routeContext: { outlet: p, matches: P, isDataRoute: i != null },
            children: W
          })
        );
      };
    return i && (g.route.ErrorBoundary || g.route.errorElement || N === 0)
      ? le.createElement(Gb, {
          location: i.location,
          revalidation: i.revalidation,
          component: w,
          error: v,
          children: J(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 }
        })
      : J();
  }, null);
}
function hd(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Kb(r) {
  let a = le.useContext(Ki);
  return zt(a, hd(r)), a;
}
function Xb(r) {
  let a = le.useContext(ac);
  return zt(a, hd(r)), a;
}
function Zb(r) {
  let a = le.useContext(Qn);
  return zt(a, hd(r)), a;
}
function md(r) {
  let a = Zb(r),
    i = a.matches[a.matches.length - 1];
  return zt(i.route.id, `${r} can only be used on routes that contain a unique "id"`), i.route.id;
}
function Qb() {
  return md('useRouteId');
}
function Pb() {
  var u;
  let r = le.useContext(dd),
    a = Xb('useRouteError'),
    i = md('useRouteError');
  return r !== void 0 ? r : (u = a.errors) == null ? void 0 : u[i];
}
function Jb() {
  let { router: r } = Kb('useNavigate'),
    a = md('useNavigate'),
    i = le.useRef(!1);
  return (
    Ig(() => {
      i.current = !0;
    }),
    le.useCallback(
      async (s, f = {}) => {
        cn(i.current, kg),
          i.current && (typeof s == 'number' ? r.navigate(s) : await r.navigate(s, { fromRouteId: a, ...f }));
      },
      [r, a]
    )
  );
}
var vp = {};
function Lg(r, a, i) {
  !a && !vp[r] && ((vp[r] = !0), cn(!1, i));
}
le.memo(Wb);
function Wb({ routes: r, future: a, state: i }) {
  return qg(r, void 0, i, a);
}
function rd(r) {
  zt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function eS({
  basename: r = '/',
  children: a = null,
  location: i,
  navigationType: u = 'POP',
  navigator: s,
  static: f = !1
}) {
  zt(!lu(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.');
  let d = r.replace(/^\/*/, '/'),
    h = le.useMemo(() => ({ basename: d, navigator: s, static: f, future: {} }), [d, s, f]);
  typeof i == 'string' && (i = ai(i));
  let { pathname: p = '/', search: g = '', hash: N = '', state: v = null, key: S = 'default' } = i,
    w = le.useMemo(() => {
      let D = Xn(p, d);
      return D == null ? null : { location: { pathname: D, search: g, hash: N, state: v, key: S }, navigationType: u };
    }, [d, p, g, N, v, S, u]);
  return (
    cn(
      w != null,
      `<Router basename="${d}"> is not able to match the URL "${p}${g}${N}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : le.createElement(En.Provider, { value: h }, le.createElement(iu.Provider, { children: a, value: w }))
  );
}
function tS({ children: r, location: a }) {
  return Hb(nd(r), a);
}
function nd(r, a = []) {
  let i = [];
  return (
    le.Children.forEach(r, (u, s) => {
      if (!le.isValidElement(u)) return;
      let f = [...a, s];
      if (u.type === le.Fragment) {
        i.push.apply(i, nd(u.props.children, f));
        return;
      }
      zt(
        u.type === rd,
        `[${typeof u.type == 'string' ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        zt(!u.props.index || !u.props.children, 'An index route cannot have child routes.');
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
      u.props.children && (d.children = nd(u.props.children, f)), i.push(d);
    }),
    i
  );
}
var ks = 'get',
  Is = 'application/x-www-form-urlencoded';
function ic(r) {
  return r != null && typeof r.tagName == 'string';
}
function rS(r) {
  return ic(r) && r.tagName.toLowerCase() === 'button';
}
function nS(r) {
  return ic(r) && r.tagName.toLowerCase() === 'form';
}
function aS(r) {
  return ic(r) && r.tagName.toLowerCase() === 'input';
}
function iS(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function lS(r, a) {
  return r.button === 0 && (!a || a === '_self') && !iS(r);
}
var Ts = null;
function uS() {
  if (Ts === null)
    try {
      new FormData(document.createElement('form'), 0), (Ts = !1);
    } catch {
      Ts = !0;
    }
  return Ts;
}
var sS = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Rf(r) {
  return r != null && !sS.has(r)
    ? (cn(!1, `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Is}"`), null)
    : r;
}
function cS(r, a) {
  let i, u, s, f, d;
  if (nS(r)) {
    let h = r.getAttribute('action');
    (u = h ? Xn(h, a) : null),
      (i = r.getAttribute('method') || ks),
      (s = Rf(r.getAttribute('enctype')) || Is),
      (f = new FormData(r));
  } else if (rS(r) || (aS(r) && (r.type === 'submit' || r.type === 'image'))) {
    let h = r.form;
    if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let p = r.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((u = p ? Xn(p, a) : null),
      (i = r.getAttribute('formmethod') || h.getAttribute('method') || ks),
      (s = Rf(r.getAttribute('formenctype')) || Rf(h.getAttribute('enctype')) || Is),
      (f = new FormData(h, r)),
      !uS())
    ) {
      let { name: g, type: N, value: v } = r;
      if (N === 'image') {
        let S = g ? `${g}.` : '';
        f.append(`${S}x`, '0'), f.append(`${S}y`, '0');
      } else g && f.append(g, v);
    }
  } else {
    if (ic(r)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    (i = ks), (u = null), (s = Is), (d = r);
  }
  return (
    f && s === 'text/plain' && ((d = f), (f = void 0)),
    { action: u, method: i.toLowerCase(), encType: s, formData: f, body: d }
  );
}
function pd(r, a) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(a);
}
async function oS(r, a) {
  if (r.id in a) return a[r.id];
  try {
    let i = await import(r.module);
    return (a[r.id] = i), i;
  } catch (i) {
    return (
      console.error(`Error loading route module \`${r.module}\`, reloading page...`),
      console.error(i),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function fS(r) {
  return r == null
    ? !1
    : r.href == null
      ? r.rel === 'preload' && typeof r.imageSrcSet == 'string' && typeof r.imageSizes == 'string'
      : typeof r.rel == 'string' && typeof r.href == 'string';
}
async function dS(r, a, i) {
  let u = await Promise.all(
    r.map(async (s) => {
      let f = a.routes[s.route.id];
      if (f) {
        let d = await oS(f, i);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return gS(
    u
      .flat(1)
      .filter(fS)
      .filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
      .map((s) => (s.rel === 'stylesheet' ? { ...s, rel: 'prefetch', as: 'style' } : { ...s, rel: 'prefetch' }))
  );
}
function bp(r, a, i, u, s, f) {
  let d = (p, g) => (i[g] ? p.route.id !== i[g].route.id : !0),
    h = (p, g) => {
      var N;
      return (
        i[g].pathname !== p.pathname ||
        (((N = i[g].route.path) == null ? void 0 : N.endsWith('*')) && i[g].params['*'] !== p.params['*'])
      );
    };
  return f === 'assets'
    ? a.filter((p, g) => d(p, g) || h(p, g))
    : f === 'data'
      ? a.filter((p, g) => {
          var v;
          let N = u.routes[p.route.id];
          if (!N || !N.hasLoader) return !1;
          if (d(p, g) || h(p, g)) return !0;
          if (p.route.shouldRevalidate) {
            let S = p.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: ((v = i[0]) == null ? void 0 : v.params) || {},
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
function hS(r, a, { includeHydrateFallback: i } = {}) {
  return mS(
    r
      .map((u) => {
        let s = a.routes[u.route.id];
        if (!s) return [];
        let f = [s.module];
        return (
          s.clientActionModule && (f = f.concat(s.clientActionModule)),
          s.clientLoaderModule && (f = f.concat(s.clientLoaderModule)),
          i && s.hydrateFallbackModule && (f = f.concat(s.hydrateFallbackModule)),
          s.imports && (f = f.concat(s.imports)),
          f
        );
      })
      .flat(1)
  );
}
function mS(r) {
  return [...new Set(r)];
}
function pS(r) {
  let a = {},
    i = Object.keys(r).sort();
  for (let u of i) a[u] = r[u];
  return a;
}
function gS(r, a) {
  let i = new Set();
  return (
    new Set(a),
    r.reduce((u, s) => {
      let f = JSON.stringify(pS(s));
      return i.has(f) || (i.add(f), u.push({ key: f, link: s })), u;
    }, [])
  );
}
var yS = new Set([100, 101, 204, 205]);
function vS(r, a) {
  let i = typeof r == 'string' ? new URL(r, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin) : r;
  return (
    i.pathname === '/'
      ? (i.pathname = '_root.data')
      : a && Xn(i.pathname, a) === '/'
        ? (i.pathname = `${a.replace(/\/$/, '')}/_root.data`)
        : (i.pathname = `${i.pathname.replace(/\/$/, '')}.data`),
    i
  );
}
function zg() {
  let r = le.useContext(Ki);
  return pd(r, 'You must render this element inside a <DataRouterContext.Provider> element'), r;
}
function bS() {
  let r = le.useContext(ac);
  return pd(r, 'You must render this element inside a <DataRouterStateContext.Provider> element'), r;
}
var gd = le.createContext(void 0);
gd.displayName = 'FrameworkContext';
function Hg() {
  let r = le.useContext(gd);
  return pd(r, 'You must render this element inside a <HydratedRouter> element'), r;
}
function SS(r, a) {
  let i = le.useContext(gd),
    [u, s] = le.useState(!1),
    [f, d] = le.useState(!1),
    { onFocus: h, onBlur: p, onMouseEnter: g, onMouseLeave: N, onTouchStart: v } = a,
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
  let w = () => {
      s(!0);
    },
    D = () => {
      s(!1), d(!1);
    };
  return i
    ? r !== 'intent'
      ? [f, S, {}]
      : [
          f,
          S,
          {
            onFocus: Gl(h, w),
            onBlur: Gl(p, D),
            onMouseEnter: Gl(g, w),
            onMouseLeave: Gl(N, D),
            onTouchStart: Gl(v, w)
          }
        ]
    : [!1, S, {}];
}
function Gl(r, a) {
  return (i) => {
    r && r(i), i.defaultPrevented || a(i);
  };
}
function xS({ page: r, ...a }) {
  let { router: i } = zg(),
    u = le.useMemo(() => Mg(i.routes, r, i.basename), [i.routes, r, i.basename]);
  return u ? le.createElement(ES, { page: r, matches: u, ...a }) : null;
}
function wS(r) {
  let { manifest: a, routeModules: i } = Hg(),
    [u, s] = le.useState([]);
  return (
    le.useEffect(() => {
      let f = !1;
      return (
        dS(r, a, i).then((d) => {
          f || s(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [r, a, i]),
    u
  );
}
function ES({ page: r, matches: a, ...i }) {
  let u = ii(),
    { manifest: s, routeModules: f } = Hg(),
    { basename: d } = zg(),
    { loaderData: h, matches: p } = bS(),
    g = le.useMemo(() => bp(r, a, p, s, u, 'data'), [r, a, p, s, u]),
    N = le.useMemo(() => bp(r, a, p, s, u, 'assets'), [r, a, p, s, u]),
    v = le.useMemo(() => {
      if (r === u.pathname + u.search + u.hash) return [];
      let D = new Set(),
        P = !1;
      if (
        (a.forEach((W) => {
          var Se;
          let z = s.routes[W.route.id];
          !z ||
            !z.hasLoader ||
            ((!g.some((ze) => ze.route.id === W.route.id) &&
              W.route.id in h &&
              (Se = f[W.route.id]) != null &&
              Se.shouldRevalidate) ||
            z.hasClientLoader
              ? (P = !0)
              : D.add(W.route.id));
        }),
        D.size === 0)
      )
        return [];
      let J = vS(r, d);
      return (
        P &&
          D.size > 0 &&
          J.searchParams.set(
            '_routes',
            a
              .filter((W) => D.has(W.route.id))
              .map((W) => W.route.id)
              .join(',')
          ),
        [J.pathname + J.search]
      );
    }, [d, h, u, s, g, a, r, f]),
    S = le.useMemo(() => hS(N, s), [N, s]),
    w = wS(N);
  return le.createElement(
    le.Fragment,
    null,
    v.map((D) => le.createElement('link', { key: D, rel: 'prefetch', as: 'fetch', href: D, ...i })),
    S.map((D) => le.createElement('link', { key: D, rel: 'modulepreload', href: D, ...i })),
    w.map(({ key: D, link: P }) => le.createElement('link', { key: D, ...P }))
  );
}
function AS(...r) {
  return (a) => {
    r.forEach((i) => {
      typeof i == 'function' ? i(a) : i != null && (i.current = a);
    });
  };
}
var Fg = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Fg && (window.__reactRouterVersion = '7.5.1');
} catch {}
function NS({ basename: r, children: a, window: i }) {
  let u = le.useRef();
  u.current == null && (u.current = db({ window: i, v5Compat: !0 }));
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
    le.createElement(eS, { basename: r, children: a, location: f.location, navigationType: f.action, navigator: s })
  );
}
var Vg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Gg = le.forwardRef(function (
    {
      onClick: a,
      discover: i = 'render',
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
      P = typeof g == 'string' && Vg.test(g),
      J,
      W = !1;
    if (typeof g == 'string' && P && ((J = g), Fg))
      try {
        let A = new URL(window.location.href),
          O = g.startsWith('//') ? new URL(A.protocol + g) : new URL(g),
          G = Xn(O.pathname, D);
        O.origin === A.origin && G != null ? (g = G + O.search + O.hash) : (W = !0);
      } catch {
        cn(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let z = qb(g, { relative: s }),
      [Se, ze, we] = SS(u, S),
      he = TS(g, { replace: d, state: h, target: p, preventScrollReset: N, relative: s, viewTransition: v });
    function Ae(A) {
      a && a(A), A.defaultPrevented || he(A);
    }
    let b = le.createElement('a', {
      ...S,
      ...we,
      href: J || z,
      onClick: W || f ? a : Ae,
      ref: AS(w, ze),
      target: p,
      'data-discover': !P && i === 'render' ? 'true' : void 0
    });
    return Se && !P ? le.createElement(le.Fragment, null, b, le.createElement(xS, { page: z })) : b;
  });
Gg.displayName = 'Link';
var ad = le.forwardRef(function (
  {
    'aria-current': a = 'page',
    caseSensitive: i = !1,
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
  let v = uu(d, { relative: g.relative }),
    S = ii(),
    w = le.useContext(ac),
    { navigator: D, basename: P } = le.useContext(En),
    J = w != null && DS(v) && h === !0,
    W = D.encodeLocation ? D.encodeLocation(v).pathname : v.pathname,
    z = S.pathname,
    Se = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  i || ((z = z.toLowerCase()), (Se = Se ? Se.toLowerCase() : null), (W = W.toLowerCase())),
    Se && P && (Se = Xn(Se, P) || Se);
  const ze = W !== '/' && W.endsWith('/') ? W.length - 1 : W.length;
  let we = z === W || (!s && z.startsWith(W) && z.charAt(ze) === '/'),
    he = Se != null && (Se === W || (!s && Se.startsWith(W) && Se.charAt(W.length) === '/')),
    Ae = { isActive: we, isPending: he, isTransitioning: J },
    b = we ? a : void 0,
    A;
  typeof u == 'function'
    ? (A = u(Ae))
    : (A = [u, we ? 'active' : null, he ? 'pending' : null, J ? 'transitioning' : null].filter(Boolean).join(' '));
  let O = typeof f == 'function' ? f(Ae) : f;
  return le.createElement(
    Gg,
    { ...g, 'aria-current': b, className: A, ref: N, style: O, to: d, viewTransition: h },
    typeof p == 'function' ? p(Ae) : p
  );
});
ad.displayName = 'NavLink';
var _S = le.forwardRef(
  (
    {
      discover: r = 'render',
      fetcherKey: a,
      navigate: i,
      reloadDocument: u,
      replace: s,
      state: f,
      method: d = ks,
      action: h,
      onSubmit: p,
      relative: g,
      preventScrollReset: N,
      viewTransition: v,
      ...S
    },
    w
  ) => {
    let D = BS(),
      P = CS(h, { relative: g }),
      J = d.toLowerCase() === 'get' ? 'get' : 'post',
      W = typeof h == 'string' && Vg.test(h),
      z = (Se) => {
        if ((p && p(Se), Se.defaultPrevented)) return;
        Se.preventDefault();
        let ze = Se.nativeEvent.submitter,
          we = (ze == null ? void 0 : ze.getAttribute('formmethod')) || d;
        D(ze || Se.currentTarget, {
          fetcherKey: a,
          method: we,
          navigate: i,
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
      onSubmit: u ? p : z,
      ...S,
      'data-discover': !W && r === 'render' ? 'true' : void 0
    });
  }
);
_S.displayName = 'Form';
function OS(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $g(r) {
  let a = le.useContext(Ki);
  return zt(a, OS(r)), a;
}
function TS(r, { target: a, replace: i, state: u, preventScrollReset: s, relative: f, viewTransition: d } = {}) {
  let h = Lb(),
    p = ii(),
    g = uu(r, { relative: f });
  return le.useCallback(
    (N) => {
      if (lS(N, a)) {
        N.preventDefault();
        let v = i !== void 0 ? i : ru(p) === ru(g);
        h(r, { replace: v, state: u, preventScrollReset: s, relative: f, viewTransition: d });
      }
    },
    [p, h, g, i, u, a, r, s, f, d]
  );
}
var MS = 0,
  RS = () => `__${String(++MS)}__`;
function BS() {
  let { router: r } = $g('useSubmit'),
    { basename: a } = le.useContext(En),
    i = Qb();
  return le.useCallback(
    async (u, s = {}) => {
      let { action: f, method: d, encType: h, formData: p, body: g } = cS(u, a);
      if (s.navigate === !1) {
        let N = s.fetcherKey || RS();
        await r.fetch(N, i, s.action || f, {
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
          fromRouteId: i,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [r, a, i]
  );
}
function CS(r, { relative: a } = {}) {
  let { basename: i } = le.useContext(En),
    u = le.useContext(Qn);
  zt(u, 'useFormAction must be used inside a RouteContext');
  let [s] = u.matches.slice(-1),
    f = { ...uu(r || '.', { relative: a }) },
    d = ii();
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
    i !== '/' && (f.pathname = f.pathname === '/' ? i : Yn([i, f.pathname])),
    ru(f)
  );
}
function DS(r, a = {}) {
  let i = le.useContext(jg);
  zt(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = $g('useViewTransitionState'),
    s = uu(r, { relative: a.relative });
  if (!i.isTransitioning) return !1;
  let f = Xn(i.currentLocation.pathname, u) || i.currentLocation.pathname,
    d = Xn(i.nextLocation.pathname, u) || i.nextLocation.pathname;
  return Gs(s.pathname, d) != null || Gs(s.pathname, f) != null;
}
new TextEncoder();
[...yS];
var US = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Bf = Math.ceil,
  Pr = Math.floor,
  Er = '[BigNumber Error] ',
  Sp = Er + 'Number primitive has more than 15 significant digits: ',
  ln = 1e14,
  it = 14,
  xp = 9007199254740991,
  Cf = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  Sa = 1e7,
  Ur = 1e9;
function Yg(r) {
  var a,
    i,
    u,
    s = (z.prototype = { constructor: z, toString: null, valueOf: null }),
    f = new z(1),
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
  function z(b, A) {
    var O,
      G,
      Y,
      K,
      Z,
      I,
      R,
      $,
      H = this;
    if (!(H instanceof z)) return new z(b, A);
    if (A == null) {
      if (b && b._isBigNumber === !0) {
        (H.s = b.s),
          !b.c || b.e > v ? (H.c = H.e = null) : b.e < N ? (H.c = [(H.e = 0)]) : ((H.e = b.e), (H.c = b.c.slice()));
        return;
      }
      if ((I = typeof b == 'number') && b * 0 == 0) {
        if (((H.s = 1 / b < 0 ? ((b = -b), -1) : 1), b === ~~b)) {
          for (K = 0, Z = b; Z >= 10; Z /= 10, K++);
          K > v ? (H.c = H.e = null) : ((H.e = K), (H.c = [b]));
          return;
        }
        $ = String(b);
      } else {
        if (!US.test(($ = String(b)))) return u(H, $, I);
        H.s = $.charCodeAt(0) == 45 ? (($ = $.slice(1)), -1) : 1;
      }
      (K = $.indexOf('.')) > -1 && ($ = $.replace('.', '')),
        (Z = $.search(/e/i)) > 0
          ? (K < 0 && (K = Z), (K += +$.slice(Z + 1)), ($ = $.substring(0, Z)))
          : K < 0 && (K = $.length);
    } else {
      if ((Lt(A, 2, J.length, 'Base'), A == 10 && W)) return (H = new z(b)), he(H, d + H.e + 1, h);
      if ((($ = String(b)), (I = typeof b == 'number'))) {
        if (b * 0 != 0) return u(H, $, I, A);
        if (((H.s = 1 / b < 0 ? (($ = $.slice(1)), -1) : 1), z.DEBUG && $.replace(/^0\.0*|\./, '').length > 15))
          throw Error(Sp + b);
      } else H.s = $.charCodeAt(0) === 45 ? (($ = $.slice(1)), -1) : 1;
      for (O = J.slice(0, A), K = Z = 0, R = $.length; Z < R; Z++)
        if (O.indexOf((G = $.charAt(Z))) < 0) {
          if (G == '.') {
            if (Z > K) {
              K = R;
              continue;
            }
          } else if (
            !Y &&
            (($ == $.toUpperCase() && ($ = $.toLowerCase())) || ($ == $.toLowerCase() && ($ = $.toUpperCase())))
          ) {
            (Y = !0), (Z = -1), (K = 0);
            continue;
          }
          return u(H, String(b), I, A);
        }
      (I = !1), ($ = i($, A, 10, H.s)), (K = $.indexOf('.')) > -1 ? ($ = $.replace('.', '')) : (K = $.length);
    }
    for (Z = 0; $.charCodeAt(Z) === 48; Z++);
    for (R = $.length; $.charCodeAt(--R) === 48; );
    if (($ = $.slice(Z, ++R))) {
      if (((R -= Z), I && z.DEBUG && R > 15 && (b > xp || b !== Pr(b)))) throw Error(Sp + H.s * b);
      if ((K = K - Z - 1) > v) H.c = H.e = null;
      else if (K < N) H.c = [(H.e = 0)];
      else {
        if (((H.e = K), (H.c = []), (Z = (K + 1) % it), K < 0 && (Z += it), Z < R)) {
          for (Z && H.c.push(+$.slice(0, Z)), R -= it; Z < R; ) H.c.push(+$.slice(Z, (Z += it)));
          Z = it - ($ = $.slice(Z)).length;
        } else Z -= R;
        for (; Z--; $ += '0');
        H.c.push(+$);
      }
    } else H.c = [(H.e = 0)];
  }
  (z.clone = Yg),
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
      function (b) {
        var A, O;
        if (b != null)
          if (typeof b == 'object') {
            if (
              (b.hasOwnProperty((A = 'DECIMAL_PLACES')) && ((O = b[A]), Lt(O, 0, Ur, A), (d = O)),
              b.hasOwnProperty((A = 'ROUNDING_MODE')) && ((O = b[A]), Lt(O, 0, 8, A), (h = O)),
              b.hasOwnProperty((A = 'EXPONENTIAL_AT')) &&
                ((O = b[A]),
                O && O.pop
                  ? (Lt(O[0], -1e9, 0, A), Lt(O[1], 0, Ur, A), (p = O[0]), (g = O[1]))
                  : (Lt(O, -1e9, Ur, A), (p = -(g = O < 0 ? -O : O)))),
              b.hasOwnProperty((A = 'RANGE')))
            )
              if (((O = b[A]), O && O.pop)) Lt(O[0], -1e9, -1, A), Lt(O[1], 1, Ur, A), (N = O[0]), (v = O[1]);
              else if ((Lt(O, -1e9, Ur, A), O)) N = -(v = O < 0 ? -O : O);
              else throw Error(Er + A + ' cannot be zero: ' + O);
            if (b.hasOwnProperty((A = 'CRYPTO')))
              if (((O = b[A]), O === !!O))
                if (O)
                  if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) S = O;
                  else throw ((S = !O), Error(Er + 'crypto unavailable'));
                else S = O;
              else throw Error(Er + A + ' not true or false: ' + O);
            if (
              (b.hasOwnProperty((A = 'MODULO_MODE')) && ((O = b[A]), Lt(O, 0, 9, A), (w = O)),
              b.hasOwnProperty((A = 'POW_PRECISION')) && ((O = b[A]), Lt(O, 0, Ur, A), (D = O)),
              b.hasOwnProperty((A = 'FORMAT')))
            )
              if (((O = b[A]), typeof O == 'object')) P = O;
              else throw Error(Er + A + ' not an object: ' + O);
            if (b.hasOwnProperty((A = 'ALPHABET')))
              if (((O = b[A]), typeof O == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(O)))
                (W = O.slice(0, 10) == '0123456789'), (J = O);
              else throw Error(Er + A + ' invalid: ' + O);
          } else throw Error(Er + 'Object expected: ' + b);
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
    (z.isBigNumber = function (b) {
      if (!b || b._isBigNumber !== !0) return !1;
      if (!z.DEBUG) return !0;
      var A,
        O,
        G = b.c,
        Y = b.e,
        K = b.s;
      e: if ({}.toString.call(G) == '[object Array]') {
        if ((K === 1 || K === -1) && Y >= -1e9 && Y <= Ur && Y === Pr(Y)) {
          if (G[0] === 0) {
            if (Y === 0 && G.length === 1) return !0;
            break e;
          }
          if (((A = (Y + 1) % it), A < 1 && (A += it), String(G[0]).length == A)) {
            for (A = 0; A < G.length; A++) if (((O = G[A]), O < 0 || O >= ln || O !== Pr(O))) break e;
            if (O !== 0) return !0;
          }
        }
      } else if (G === null && Y === null && (K === null || K === 1 || K === -1)) return !0;
      throw Error(Er + 'Invalid BigNumber: ' + b);
    }),
    (z.maximum = z.max =
      function () {
        return ze(arguments, -1);
      }),
    (z.minimum = z.min =
      function () {
        return ze(arguments, 1);
      }),
    (z.random = (function () {
      var b = 9007199254740992,
        A =
          (Math.random() * b) & 2097151
            ? function () {
                return Pr(Math.random() * b);
              }
            : function () {
                return ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0);
              };
      return function (O) {
        var G,
          Y,
          K,
          Z,
          I,
          R = 0,
          $ = [],
          H = new z(f);
        if ((O == null ? (O = d) : Lt(O, 0, Ur), (Z = Bf(O / it)), S))
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
          } else throw ((S = !1), Error(Er + 'crypto unavailable'));
        if (!S) for (; R < Z; ) (I = A()), I < 9e15 && ($[R++] = I % 1e14);
        for (Z = $[--R], O %= it, Z && O && ((I = Cf[it - O]), ($[R] = Pr(Z / I) * I)); $[R] === 0; $.pop(), R--);
        if (R < 0) $ = [(K = 0)];
        else {
          for (K = -1; $[0] === 0; $.splice(0, 1), K -= it);
          for (R = 1, I = $[0]; I >= 10; I /= 10, R++);
          R < it && (K -= it - R);
        }
        return (H.e = K), (H.c = $), H;
      };
    })()),
    (z.sum = function () {
      for (var b = 1, A = arguments, O = new z(A[0]); b < A.length; ) O = O.plus(A[b++]);
      return O;
    }),
    (i = (function () {
      var b = '0123456789';
      function A(O, G, Y, K) {
        for (var Z, I = [0], R, $ = 0, H = O.length; $ < H; ) {
          for (R = I.length; R--; I[R] *= G);
          for (I[0] += K.indexOf(O.charAt($++)), Z = 0; Z < I.length; Z++)
            I[Z] > Y - 1 && (I[Z + 1] == null && (I[Z + 1] = 0), (I[Z + 1] += (I[Z] / Y) | 0), (I[Z] %= Y));
        }
        return I.reverse();
      }
      return function (O, G, Y, K, Z) {
        var I,
          R,
          $,
          H,
          oe,
          j,
          ne,
          Ee,
          ye = O.indexOf('.'),
          T = d,
          je = h;
        for (
          ye >= 0 &&
            ((H = D),
            (D = 0),
            (O = O.replace('.', '')),
            (Ee = new z(G)),
            (j = Ee.pow(O.length - ye)),
            (D = H),
            (Ee.c = A(zn(Qr(j.c), j.e, '0'), 10, Y, b)),
            (Ee.e = Ee.c.length)),
            ne = A(O, G, Y, Z ? ((I = J), b) : ((I = b), J)),
            $ = H = ne.length;
          ne[--H] == 0;
          ne.pop()
        );
        if (!ne[0]) return I.charAt(0);
        if (
          (ye < 0
            ? --$
            : ((j.c = ne), (j.e = $), (j.s = K), (j = a(j, Ee, T, je, Y)), (ne = j.c), (oe = j.r), ($ = j.e)),
          (R = $ + T + 1),
          (ye = ne[R]),
          (H = Y / 2),
          (oe = oe || R < 0 || ne[R + 1] != null),
          (oe =
            je < 4
              ? (ye != null || oe) && (je == 0 || je == (j.s < 0 ? 3 : 2))
              : ye > H || (ye == H && (je == 4 || oe || (je == 6 && ne[R - 1] & 1) || je == (j.s < 0 ? 8 : 7)))),
          R < 1 || !ne[0])
        )
          O = oe ? zn(I.charAt(1), -T, I.charAt(0)) : I.charAt(0);
        else {
          if (((ne.length = R), oe)) for (--Y; ++ne[--R] > Y; ) (ne[R] = 0), R || (++$, (ne = [1].concat(ne)));
          for (H = ne.length; !ne[--H]; );
          for (ye = 0, O = ''; ye <= H; O += I.charAt(ne[ye++]));
          O = zn(O, $, I.charAt(0));
        }
        return O;
      };
    })()),
    (a = (function () {
      function b(G, Y, K) {
        var Z,
          I,
          R,
          $,
          H = 0,
          oe = G.length,
          j = Y % Sa,
          ne = (Y / Sa) | 0;
        for (G = G.slice(); oe--; )
          (R = G[oe] % Sa),
            ($ = (G[oe] / Sa) | 0),
            (Z = ne * R + $ * j),
            (I = j * R + (Z % Sa) * Sa + H),
            (H = ((I / K) | 0) + ((Z / Sa) | 0) + ne * $),
            (G[oe] = I % K);
        return H && (G = [H].concat(G)), G;
      }
      function A(G, Y, K, Z) {
        var I, R;
        if (K != Z) R = K > Z ? 1 : -1;
        else
          for (I = R = 0; I < K; I++)
            if (G[I] != Y[I]) {
              R = G[I] > Y[I] ? 1 : -1;
              break;
            }
        return R;
      }
      function O(G, Y, K, Z) {
        for (var I = 0; K--; ) (G[K] -= I), (I = G[K] < Y[K] ? 1 : 0), (G[K] = I * Z + G[K] - Y[K]);
        for (; !G[0] && G.length > 1; G.splice(0, 1));
      }
      return function (G, Y, K, Z, I) {
        var R,
          $,
          H,
          oe,
          j,
          ne,
          Ee,
          ye,
          T,
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
          return new z(
            !G.s || !Y.s || (re ? ue && re[0] == ue[0] : !ue) ? NaN : (re && re[0] == 0) || !ue ? se * 0 : se / 0
          );
        for (
          ye = new z(se),
            T = ye.c = [],
            $ = G.e - Y.e,
            se = K + $ + 1,
            I || ((I = ln), ($ = Jr(G.e / it) - Jr(Y.e / it)), (se = (se / it) | 0)),
            H = 0;
          ue[H] == (re[H] || 0);
          H++
        );
        if ((ue[H] > (re[H] || 0) && $--, se < 0)) T.push(1), (oe = !0);
        else {
          for (
            ke = re.length,
              U = ue.length,
              H = 0,
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
                  j--, O(ne, U < Ee ? Q : ue, Ee, I), (Ee = ne.length), (R = 1);
              else j == 0 && (R = j = 1), (ne = ue.slice()), (Ee = ne.length);
              if ((Ee < Me && (ne = [0].concat(ne)), O(je, ne, Me, I), (Me = je.length), R == -1))
                for (; A(ue, je, U, Me) < 1; ) j++, O(je, U < Me ? Q : ue, Me, I), (Me = je.length);
            } else R === 0 && (j++, (je = [0]));
            (T[H++] = j), je[0] ? (je[Me++] = re[Re] || 0) : ((je = [re[Re]]), (Me = 1));
          } while ((Re++ < ke || je[0] != null) && se--);
          (oe = je[0] != null), T[0] || T.splice(0, 1);
        }
        if (I == ln) {
          for (H = 1, se = T[0]; se >= 10; se /= 10, H++);
          he(ye, K + (ye.e = H + $ * it - 1) + 1, Z, oe);
        } else (ye.e = $), (ye.r = +oe);
        return ye;
      };
    })());
  function Se(b, A, O, G) {
    var Y, K, Z, I, R;
    if ((O == null ? (O = h) : Lt(O, 0, 8), !b.c)) return b.toString();
    if (((Y = b.c[0]), (Z = b.e), A == null))
      (R = Qr(b.c)), (R = G == 1 || (G == 2 && (Z <= p || Z >= g)) ? Rs(R, Z) : zn(R, Z, '0'));
    else if (
      ((b = he(new z(b), A, O)), (K = b.e), (R = Qr(b.c)), (I = R.length), G == 1 || (G == 2 && (A <= K || K <= p)))
    ) {
      for (; I < A; R += '0', I++);
      R = Rs(R, K);
    } else if (((A -= Z), (R = zn(R, K, '0')), K + 1 > I)) {
      if (--A > 0) for (R += '.'; A--; R += '0');
    } else if (((A += K - I), A > 0)) for (K + 1 == I && (R += '.'); A--; R += '0');
    return b.s < 0 && Y ? '-' + R : R;
  }
  function ze(b, A) {
    for (var O, G, Y = 1, K = new z(b[0]); Y < b.length; Y++)
      (G = new z(b[Y])), (!G.s || (O = Qa(K, G)) === A || (O === 0 && K.s === A)) && (K = G);
    return K;
  }
  function we(b, A, O) {
    for (var G = 1, Y = A.length; !A[--Y]; A.pop());
    for (Y = A[0]; Y >= 10; Y /= 10, G++);
    return (O = G + O * it - 1) > v ? (b.c = b.e = null) : O < N ? (b.c = [(b.e = 0)]) : ((b.e = O), (b.c = A)), b;
  }
  u = (function () {
    var b = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      A = /^([^.]+)\.$/,
      O = /^\.([^.]+)$/,
      G = /^-?(Infinity|NaN)$/,
      Y = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (K, Z, I, R) {
      var $,
        H = I ? Z : Z.replace(Y, '');
      if (G.test(H)) K.s = isNaN(H) ? null : H < 0 ? -1 : 1;
      else {
        if (
          !I &&
          ((H = H.replace(b, function (oe, j, ne) {
            return ($ = (ne = ne.toLowerCase()) == 'x' ? 16 : ne == 'b' ? 2 : 8), !R || R == $ ? j : oe;
          })),
          R && (($ = R), (H = H.replace(A, '$1').replace(O, '0.$1'))),
          Z != H)
        )
          return new z(H, $);
        if (z.DEBUG) throw Error(Er + 'Not a' + (R ? ' base ' + R : '') + ' number: ' + Z);
        K.s = null;
      }
      K.c = K.e = null;
    };
  })();
  function he(b, A, O, G) {
    var Y,
      K,
      Z,
      I,
      R,
      $,
      H,
      oe = b.c,
      j = Cf;
    if (oe) {
      e: {
        for (Y = 1, I = oe[0]; I >= 10; I /= 10, Y++);
        if (((K = A - Y), K < 0)) (K += it), (Z = A), (R = oe[($ = 0)]), (H = Pr((R / j[Y - Z - 1]) % 10));
        else if ((($ = Bf((K + 1) / it)), $ >= oe.length))
          if (G) {
            for (; oe.length <= $; oe.push(0));
            (R = H = 0), (Y = 1), (K %= it), (Z = K - it + 1);
          } else break e;
        else {
          for (R = I = oe[$], Y = 1; I >= 10; I /= 10, Y++);
          (K %= it), (Z = K - it + Y), (H = Z < 0 ? 0 : Pr((R / j[Y - Z - 1]) % 10));
        }
        if (
          ((G = G || A < 0 || oe[$ + 1] != null || (Z < 0 ? R : R % j[Y - Z - 1])),
          (G =
            O < 4
              ? (H || G) && (O == 0 || O == (b.s < 0 ? 3 : 2))
              : H > 5 ||
                (H == 5 &&
                  (O == 4 ||
                    G ||
                    (O == 6 && (K > 0 ? (Z > 0 ? R / j[Y - Z] : 0) : oe[$ - 1]) % 10 & 1) ||
                    O == (b.s < 0 ? 8 : 7)))),
          A < 1 || !oe[0])
        )
          return (
            (oe.length = 0),
            G ? ((A -= b.e + 1), (oe[0] = j[(it - (A % it)) % it]), (b.e = -A || 0)) : (oe[0] = b.e = 0),
            b
          );
        if (
          (K == 0
            ? ((oe.length = $), (I = 1), $--)
            : ((oe.length = $ + 1), (I = j[it - K]), (oe[$] = Z > 0 ? Pr((R / j[Y - Z]) % j[Z]) * I : 0)),
          G)
        )
          for (;;)
            if ($ == 0) {
              for (K = 1, Z = oe[0]; Z >= 10; Z /= 10, K++);
              for (Z = oe[0] += I, I = 1; Z >= 10; Z /= 10, I++);
              K != I && (b.e++, oe[0] == ln && (oe[0] = 1));
              break;
            } else {
              if (((oe[$] += I), oe[$] != ln)) break;
              (oe[$--] = 0), (I = 1);
            }
        for (K = oe.length; oe[--K] === 0; oe.pop());
      }
      b.e > v ? (b.c = b.e = null) : b.e < N && (b.c = [(b.e = 0)]);
    }
    return b;
  }
  function Ae(b) {
    var A,
      O = b.e;
    return O === null
      ? b.toString()
      : ((A = Qr(b.c)), (A = O <= p || O >= g ? Rs(A, O) : zn(A, O, '0')), b.s < 0 ? '-' + A : A);
  }
  return (
    (s.absoluteValue = s.abs =
      function () {
        var b = new z(this);
        return b.s < 0 && (b.s = 1), b;
      }),
    (s.comparedTo = function (b, A) {
      return Qa(this, new z(b, A));
    }),
    (s.decimalPlaces = s.dp =
      function (b, A) {
        var O,
          G,
          Y,
          K = this;
        if (b != null) return Lt(b, 0, Ur), A == null ? (A = h) : Lt(A, 0, 8), he(new z(K), b + K.e + 1, A);
        if (!(O = K.c)) return null;
        if (((G = ((Y = O.length - 1) - Jr(this.e / it)) * it), (Y = O[Y]))) for (; Y % 10 == 0; Y /= 10, G--);
        return G < 0 && (G = 0), G;
      }),
    (s.dividedBy = s.div =
      function (b, A) {
        return a(this, new z(b, A), d, h);
      }),
    (s.dividedToIntegerBy = s.idiv =
      function (b, A) {
        return a(this, new z(b, A), 0, 1);
      }),
    (s.exponentiatedBy = s.pow =
      function (b, A) {
        var O,
          G,
          Y,
          K,
          Z,
          I,
          R,
          $,
          H,
          oe = this;
        if (((b = new z(b)), b.c && !b.isInteger())) throw Error(Er + 'Exponent not an integer: ' + Ae(b));
        if (
          (A != null && (A = new z(A)),
          (I = b.e > 14),
          !oe.c || !oe.c[0] || (oe.c[0] == 1 && !oe.e && oe.c.length == 1) || !b.c || !b.c[0])
        )
          return (H = new z(Math.pow(+Ae(oe), I ? b.s * (2 - Ms(b)) : +Ae(b)))), A ? H.mod(A) : H;
        if (((R = b.s < 0), A)) {
          if (A.c ? !A.c[0] : !A.s) return new z(NaN);
          (G = !R && oe.isInteger() && A.isInteger()), G && (oe = oe.mod(A));
        } else {
          if (
            b.e > 9 &&
            (oe.e > 0 ||
              oe.e < -1 ||
              (oe.e == 0 ? oe.c[0] > 1 || (I && oe.c[1] >= 24e7) : oe.c[0] < 8e13 || (I && oe.c[0] <= 9999975e7)))
          )
            return (K = oe.s < 0 && Ms(b) ? -0 : 0), oe.e > -1 && (K = 1 / K), new z(R ? 1 / K : K);
          D && (K = Bf(D / it + 2));
        }
        for (
          I ? ((O = new z(0.5)), R && (b.s = 1), ($ = Ms(b))) : ((Y = Math.abs(+Ae(b))), ($ = Y % 2)), H = new z(f);
          ;

        ) {
          if ($) {
            if (((H = H.times(oe)), !H.c)) break;
            K ? H.c.length > K && (H.c.length = K) : G && (H = H.mod(A));
          }
          if (Y) {
            if (((Y = Pr(Y / 2)), Y === 0)) break;
            $ = Y % 2;
          } else if (((b = b.times(O)), he(b, b.e + 1, 1), b.e > 14)) $ = Ms(b);
          else {
            if (((Y = +Ae(b)), Y === 0)) break;
            $ = Y % 2;
          }
          (oe = oe.times(oe)), K ? oe.c && oe.c.length > K && (oe.c.length = K) : G && (oe = oe.mod(A));
        }
        return G ? H : (R && (H = f.div(H)), A ? H.mod(A) : K ? he(H, D, h, Z) : H);
      }),
    (s.integerValue = function (b) {
      var A = new z(this);
      return b == null ? (b = h) : Lt(b, 0, 8), he(A, A.e + 1, b);
    }),
    (s.isEqualTo = s.eq =
      function (b, A) {
        return Qa(this, new z(b, A)) === 0;
      }),
    (s.isFinite = function () {
      return !!this.c;
    }),
    (s.isGreaterThan = s.gt =
      function (b, A) {
        return Qa(this, new z(b, A)) > 0;
      }),
    (s.isGreaterThanOrEqualTo = s.gte =
      function (b, A) {
        return (A = Qa(this, new z(b, A))) === 1 || A === 0;
      }),
    (s.isInteger = function () {
      return !!this.c && Jr(this.e / it) > this.c.length - 2;
    }),
    (s.isLessThan = s.lt =
      function (b, A) {
        return Qa(this, new z(b, A)) < 0;
      }),
    (s.isLessThanOrEqualTo = s.lte =
      function (b, A) {
        return (A = Qa(this, new z(b, A))) === -1 || A === 0;
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
      var O,
        G,
        Y,
        K,
        Z = this,
        I = Z.s;
      if (((b = new z(b, A)), (A = b.s), !I || !A)) return new z(NaN);
      if (I != A) return (b.s = -A), Z.plus(b);
      var R = Z.e / it,
        $ = b.e / it,
        H = Z.c,
        oe = b.c;
      if (!R || !$) {
        if (!H || !oe) return H ? ((b.s = -A), b) : new z(oe ? Z : NaN);
        if (!H[0] || !oe[0]) return oe[0] ? ((b.s = -A), b) : new z(H[0] ? Z : h == 3 ? -0 : 0);
      }
      if (((R = Jr(R)), ($ = Jr($)), (H = H.slice()), (I = R - $))) {
        for ((K = I < 0) ? ((I = -I), (Y = H)) : (($ = R), (Y = oe)), Y.reverse(), A = I; A--; Y.push(0));
        Y.reverse();
      } else
        for (G = (K = (I = H.length) < (A = oe.length)) ? I : A, I = A = 0; A < G; A++)
          if (H[A] != oe[A]) {
            K = H[A] < oe[A];
            break;
          }
      if ((K && ((Y = H), (H = oe), (oe = Y), (b.s = -b.s)), (A = (G = oe.length) - (O = H.length)), A > 0))
        for (; A--; H[O++] = 0);
      for (A = ln - 1; G > I; ) {
        if (H[--G] < oe[G]) {
          for (O = G; O && !H[--O]; H[O] = A);
          --H[O], (H[G] += ln);
        }
        H[G] -= oe[G];
      }
      for (; H[0] == 0; H.splice(0, 1), --$);
      return H[0] ? we(b, H, $) : ((b.s = h == 3 ? -1 : 1), (b.c = [(b.e = 0)]), b);
    }),
    (s.modulo = s.mod =
      function (b, A) {
        var O,
          G,
          Y = this;
        return (
          (b = new z(b, A)),
          !Y.c || !b.s || (b.c && !b.c[0])
            ? new z(NaN)
            : !b.c || (Y.c && !Y.c[0])
              ? new z(Y)
              : (w == 9 ? ((G = b.s), (b.s = 1), (O = a(Y, b, 0, 3)), (b.s = G), (O.s *= G)) : (O = a(Y, b, 0, w)),
                (b = Y.minus(O.times(b))),
                !b.c[0] && w == 1 && (b.s = Y.s),
                b)
        );
      }),
    (s.multipliedBy = s.times =
      function (b, A) {
        var O,
          G,
          Y,
          K,
          Z,
          I,
          R,
          $,
          H,
          oe,
          j,
          ne,
          Ee,
          ye,
          T,
          je = this,
          Me = je.c,
          Pe = (b = new z(b, A)).c;
        if (!Me || !Pe || !Me[0] || !Pe[0])
          return (
            !je.s || !b.s || (Me && !Me[0] && !Pe) || (Pe && !Pe[0] && !Me)
              ? (b.c = b.e = b.s = null)
              : ((b.s *= je.s), !Me || !Pe ? (b.c = b.e = null) : ((b.c = [0]), (b.e = 0))),
            b
          );
        for (
          G = Jr(je.e / it) + Jr(b.e / it),
            b.s *= je.s,
            R = Me.length,
            oe = Pe.length,
            R < oe && ((Ee = Me), (Me = Pe), (Pe = Ee), (Y = R), (R = oe), (oe = Y)),
            Y = R + oe,
            Ee = [];
          Y--;
          Ee.push(0)
        );
        for (ye = ln, T = Sa, Y = oe; --Y >= 0; ) {
          for (O = 0, j = Pe[Y] % T, ne = (Pe[Y] / T) | 0, Z = R, K = Y + Z; K > Y; )
            ($ = Me[--Z] % T),
              (H = (Me[Z] / T) | 0),
              (I = ne * $ + H * j),
              ($ = j * $ + (I % T) * T + Ee[K] + O),
              (O = (($ / ye) | 0) + ((I / T) | 0) + ne * H),
              (Ee[K--] = $ % ye);
          Ee[K] = O;
        }
        return O ? ++G : Ee.splice(0, 1), we(b, Ee, G);
      }),
    (s.negated = function () {
      var b = new z(this);
      return (b.s = -b.s || null), b;
    }),
    (s.plus = function (b, A) {
      var O,
        G = this,
        Y = G.s;
      if (((b = new z(b, A)), (A = b.s), !Y || !A)) return new z(NaN);
      if (Y != A) return (b.s = -A), G.minus(b);
      var K = G.e / it,
        Z = b.e / it,
        I = G.c,
        R = b.c;
      if (!K || !Z) {
        if (!I || !R) return new z(Y / 0);
        if (!I[0] || !R[0]) return R[0] ? b : new z(I[0] ? G : Y * 0);
      }
      if (((K = Jr(K)), (Z = Jr(Z)), (I = I.slice()), (Y = K - Z))) {
        for (Y > 0 ? ((Z = K), (O = R)) : ((Y = -Y), (O = I)), O.reverse(); Y--; O.push(0));
        O.reverse();
      }
      for (Y = I.length, A = R.length, Y - A < 0 && ((O = R), (R = I), (I = O), (A = Y)), Y = 0; A; )
        (Y = ((I[--A] = I[A] + R[A] + Y) / ln) | 0), (I[A] = ln === I[A] ? 0 : I[A] % ln);
      return Y && ((I = [Y].concat(I)), ++Z), we(b, I, Z);
    }),
    (s.precision = s.sd =
      function (b, A) {
        var O,
          G,
          Y,
          K = this;
        if (b != null && b !== !!b) return Lt(b, 1, Ur), A == null ? (A = h) : Lt(A, 0, 8), he(new z(K), b, A);
        if (!(O = K.c)) return null;
        if (((Y = O.length - 1), (G = Y * it + 1), (Y = O[Y]))) {
          for (; Y % 10 == 0; Y /= 10, G--);
          for (Y = O[0]; Y >= 10; Y /= 10, G++);
        }
        return b && K.e + 1 > G && (G = K.e + 1), G;
      }),
    (s.shiftedBy = function (b) {
      return Lt(b, -9007199254740991, xp), this.times('1e' + b);
    }),
    (s.squareRoot = s.sqrt =
      function () {
        var b,
          A,
          O,
          G,
          Y,
          K = this,
          Z = K.c,
          I = K.s,
          R = K.e,
          $ = d + 4,
          H = new z('0.5');
        if (I !== 1 || !Z || !Z[0]) return new z(!I || (I < 0 && (!Z || Z[0])) ? NaN : Z ? K : 1 / 0);
        if (
          ((I = Math.sqrt(+Ae(K))),
          I == 0 || I == 1 / 0
            ? ((A = Qr(Z)),
              (A.length + R) % 2 == 0 && (A += '0'),
              (I = Math.sqrt(+A)),
              (R = Jr((R + 1) / 2) - (R < 0 || R % 2)),
              I == 1 / 0 ? (A = '5e' + R) : ((A = I.toExponential()), (A = A.slice(0, A.indexOf('e') + 1) + R)),
              (O = new z(A)))
            : (O = new z(I + '')),
          O.c[0])
        ) {
          for (R = O.e, I = R + $, I < 3 && (I = 0); ; )
            if (((Y = O), (O = H.times(Y.plus(a(K, Y, $, 1)))), Qr(Y.c).slice(0, I) === (A = Qr(O.c)).slice(0, I)))
              if ((O.e < R && --I, (A = A.slice(I - 3, I + 1)), A == '9999' || (!G && A == '4999'))) {
                if (!G && (he(Y, Y.e + d + 2, 0), Y.times(Y).eq(K))) {
                  O = Y;
                  break;
                }
                ($ += 4), (I += 4), (G = 1);
              } else {
                (!+A || (!+A.slice(1) && A.charAt(0) == '5')) && (he(O, O.e + d + 2, 1), (b = !O.times(O).eq(K)));
                break;
              }
        }
        return he(O, O.e + d + 1, h, b);
      }),
    (s.toExponential = function (b, A) {
      return b != null && (Lt(b, 0, Ur), b++), Se(this, b, A, 1);
    }),
    (s.toFixed = function (b, A) {
      return b != null && (Lt(b, 0, Ur), (b = b + this.e + 1)), Se(this, b, A);
    }),
    (s.toFormat = function (b, A, O) {
      var G,
        Y = this;
      if (O == null)
        b != null && A && typeof A == 'object'
          ? ((O = A), (A = null))
          : b && typeof b == 'object'
            ? ((O = b), (b = A = null))
            : (O = P);
      else if (typeof O != 'object') throw Error(Er + 'Argument not an object: ' + O);
      if (((G = Y.toFixed(b, A)), Y.c)) {
        var K,
          Z = G.split('.'),
          I = +O.groupSize,
          R = +O.secondaryGroupSize,
          $ = O.groupSeparator || '',
          H = Z[0],
          oe = Z[1],
          j = Y.s < 0,
          ne = j ? H.slice(1) : H,
          Ee = ne.length;
        if ((R && ((K = I), (I = R), (R = K), (Ee -= K)), I > 0 && Ee > 0)) {
          for (K = Ee % I || I, H = ne.substr(0, K); K < Ee; K += I) H += $ + ne.substr(K, I);
          R > 0 && (H += $ + ne.slice(K)), j && (H = '-' + H);
        }
        G = oe
          ? H +
            (O.decimalSeparator || '') +
            ((R = +O.fractionGroupSize)
              ? oe.replace(new RegExp('\\d{' + R + '}\\B', 'g'), '$&' + (O.fractionGroupSeparator || ''))
              : oe)
          : H;
      }
      return (O.prefix || '') + G + (O.suffix || '');
    }),
    (s.toFraction = function (b) {
      var A,
        O,
        G,
        Y,
        K,
        Z,
        I,
        R,
        $,
        H,
        oe,
        j,
        ne = this,
        Ee = ne.c;
      if (b != null && ((I = new z(b)), (!I.isInteger() && (I.c || I.s !== 1)) || I.lt(f)))
        throw Error(Er + 'Argument ' + (I.isInteger() ? 'out of range: ' : 'not an integer: ') + Ae(I));
      if (!Ee) return new z(ne);
      for (
        A = new z(f),
          $ = O = new z(f),
          G = R = new z(f),
          j = Qr(Ee),
          K = A.e = j.length - ne.e - 1,
          A.c[0] = Cf[(Z = K % it) < 0 ? it + Z : Z],
          b = !b || I.comparedTo(A) > 0 ? (K > 0 ? A : $) : I,
          Z = v,
          v = 1 / 0,
          I = new z(j),
          R.c[0] = 0;
        (H = a(I, A, 0, 1)), (Y = O.plus(H.times(G))), Y.comparedTo(b) != 1;

      )
        (O = G), (G = Y), ($ = R.plus(H.times((Y = $)))), (R = Y), (A = I.minus(H.times((Y = A)))), (I = Y);
      return (
        (Y = a(b.minus(O), G, 0, 1)),
        (R = R.plus(Y.times($))),
        (O = O.plus(Y.times(G))),
        (R.s = $.s = ne.s),
        (K = K * 2),
        (oe =
          a($, G, K, h)
            .minus(ne)
            .abs()
            .comparedTo(a(R, O, K, h).minus(ne).abs()) < 1
            ? [$, G]
            : [R, O]),
        (v = Z),
        oe
      );
    }),
    (s.toNumber = function () {
      return +Ae(this);
    }),
    (s.toPrecision = function (b, A) {
      return b != null && Lt(b, 1, Ur), Se(this, b, A, 2);
    }),
    (s.toString = function (b) {
      var A,
        O = this,
        G = O.s,
        Y = O.e;
      return (
        Y === null
          ? G
            ? ((A = 'Infinity'), G < 0 && (A = '-' + A))
            : (A = 'NaN')
          : (b == null
              ? (A = Y <= p || Y >= g ? Rs(Qr(O.c), Y) : zn(Qr(O.c), Y, '0'))
              : b === 10 && W
                ? ((O = he(new z(O), d + Y + 1, h)), (A = zn(Qr(O.c), O.e, '0')))
                : (Lt(b, 2, J.length, 'Base'), (A = i(zn(Qr(O.c), Y, '0'), 10, b, G, !0))),
            G < 0 && O.c[0] && (A = '-' + A)),
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
    r != null && z.set(r),
    z
  );
}
function Jr(r) {
  var a = r | 0;
  return r > 0 || r === a ? a : a - 1;
}
function Qr(r) {
  for (var a, i, u = 1, s = r.length, f = r[0] + ''; u < s; ) {
    for (a = r[u++] + '', i = it - a.length; i--; a = '0' + a);
    f += a;
  }
  for (s = f.length; f.charCodeAt(--s) === 48; );
  return f.slice(0, s + 1 || 1);
}
function Qa(r, a) {
  var i,
    u,
    s = r.c,
    f = a.c,
    d = r.s,
    h = a.s,
    p = r.e,
    g = a.e;
  if (!d || !h) return null;
  if (((i = s && !s[0]), (u = f && !f[0]), i || u)) return i ? (u ? 0 : -h) : d;
  if (d != h) return d;
  if (((i = d < 0), (u = p == g), !s || !f)) return u ? 0 : !s ^ i ? 1 : -1;
  if (!u) return (p > g) ^ i ? 1 : -1;
  for (h = (p = s.length) < (g = f.length) ? p : g, d = 0; d < h; d++)
    if (s[d] != f[d]) return (s[d] > f[d]) ^ i ? 1 : -1;
  return p == g ? 0 : (p > g) ^ i ? 1 : -1;
}
function Lt(r, a, i, u) {
  if (r < a || r > i || r !== Pr(r))
    throw Error(
      Er +
        (u || 'Argument') +
        (typeof r == 'number'
          ? r < a || r > i
            ? ' out of range: '
            : ' not an integer: '
          : ' not a primitive number: ') +
        String(r)
    );
}
function Ms(r) {
  var a = r.c.length - 1;
  return Jr(r.e / it) == a && r.c[a] % 2 != 0;
}
function Rs(r, a) {
  return (r.length > 1 ? r.charAt(0) + '.' + r.slice(1) : r) + (a < 0 ? 'e' : 'e+') + a;
}
function zn(r, a, i) {
  var u, s;
  if (a < 0) {
    for (s = i + '.'; ++a; s += i);
    r = s + r;
  } else if (((u = r.length), ++a > u)) {
    for (s = i, a -= u; --a; s += i);
    r += s;
  } else a < u && (r = r.slice(0, a) + '.' + r.slice(a));
  return r;
}
var en = Yg();
class Nt {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    return a ? new Nt(BigInt(a)) : null;
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value === a.value : !1;
  }
}
Object.defineProperty(Nt, 'Bitcoin', { enumerable: !0, configurable: !0, writable: !0, value: new Nt(0n) });
Object.defineProperty(Nt, 'Ethereum', { enumerable: !0, configurable: !0, writable: !0, value: new Nt(60n) });
Object.defineProperty(Nt, 'Solana', { enumerable: !0, configurable: !0, writable: !0, value: new Nt(501n) });
Object.defineProperty(Nt, 'Dfinity', { enumerable: !0, configurable: !0, writable: !0, value: new Nt(223n) });
Object.defineProperty(Nt, 'Ton', { enumerable: !0, configurable: !0, writable: !0, value: new Nt(607n) });
Object.defineProperty(Nt, 'Tron', { enumerable: !0, configurable: !0, writable: !0, value: new Nt(195n) });
Object.defineProperty(Nt, 'Kaspa', { enumerable: !0, configurable: !0, writable: !0, value: new Nt(111111n) });
class Ie {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    return a ? new Ie(BigInt(a)) : null;
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value === a.value : !1;
  }
}
Object.defineProperty(Ie, 'AnyNetwork', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(-1n) });
Object.defineProperty(Ie, 'MainNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(1n) });
Object.defineProperty(Ie, 'TestNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0n) });
Object.defineProperty(Ie, 'BtcMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(1n) });
Object.defineProperty(Ie, 'BtcTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(2n) });
Object.defineProperty(Ie, 'BtcRegTest', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(3n) });
Object.defineProperty(Ie, 'EvmMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x1n) });
Object.defineProperty(Ie, 'EvmSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0xaa36a7n)
});
Object.defineProperty(Ie, 'EvmBscNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x38n) });
Object.defineProperty(Ie, 'EvmBscTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x61n) });
Object.defineProperty(Ie, 'EvmBaseNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x2105n) });
Object.defineProperty(Ie, 'EvmBaseSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0x14a34n)
});
Object.defineProperty(Ie, 'EvmAvalancheNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0xa86an)
});
Object.defineProperty(Ie, 'EvmAvalancheFujiNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0xa869n)
});
Object.defineProperty(Ie, 'EvmScrollNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x82750n) });
Object.defineProperty(Ie, 'EvmScrollSepoliaNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0x8274fn)
});
Object.defineProperty(Ie, 'EvmBitlayerNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0x310c5n)
});
Object.defineProperty(Ie, 'EvmBitlayerTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0x3106an)
});
Object.defineProperty(Ie, 'EvmSwanNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0xfen) });
Object.defineProperty(Ie, 'EvmSwanTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0x134daedn)
});
Object.defineProperty(Ie, 'EvmPantaNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x14bn) });
Object.defineProperty(Ie, 'EvmNeoXNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0xba93n) });
Object.defineProperty(Ie, 'EvmNeoXTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0xba9304n)
});
Object.defineProperty(Ie, 'SolanaDevNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x1n) });
Object.defineProperty(Ie, 'SolanaTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x2n) });
Object.defineProperty(Ie, 'SolanaMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x3n) });
Object.defineProperty(Ie, 'TonMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x1n) });
Object.defineProperty(Ie, 'TonTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x2n) });
Object.defineProperty(Ie, 'TronMainNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0x2b6653dcn)
});
Object.defineProperty(Ie, 'TronShastaTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0x94a9059en)
});
Object.defineProperty(Ie, 'TronNileTestNet', {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Ie(0xcd8690dcn)
});
Object.defineProperty(Ie, 'DfinityMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x1n) });
Object.defineProperty(Ie, 'KaspaMainNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x0n) });
Object.defineProperty(Ie, 'KaspaTestNet', { enumerable: !0, configurable: !0, writable: !0, value: new Ie(0x1n) });
class ir {
  constructor(a, i) {
    Object.defineProperty(this, 'chain', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'network', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.chain = a),
      (this.network = i);
  }
  toString() {
    return `${this.chain.toString()}_${this.network.toString()}`;
  }
  static fromString(a) {
    if (!a || !a.includes('_')) throw new Error(`Invalid chainId format: ${a}. Expected format: "chain_network"`);
    const [i, u] = a.split('_'),
      s = Nt.fromString(i),
      f = Ie.fromString(u);
    if (!s || !f) throw new Error(`Invalid chain or network in chainId: ${a}`);
    return new ir(s, f);
  }
  equals(a) {
    return this.chain.equals(a.chain) && this.network.equals(a.network);
  }
}
function jS(r) {
  return { chainId: r.chainId, depositAddress: r.depositAddress || void 0, displayName: r.displayName || void 0 };
}
var Wa;
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
})(Wa || (Wa = {}));
function kS(r) {
  const a = Number(r);
  return Object.values(Wa).includes(a) ? a : null;
}
var $i;
(function (r) {
  (r[(r.L1 = 1)] = 'L1'),
    (r[(r.L2 = 2)] = 'L2'),
    (r[(r.L3 = 3)] = 'L3'),
    (r[(r.L4 = 4)] = 'L4'),
    (r[(r.L5 = 5)] = 'L5'),
    (r[(r.L6 = 6)] = 'L6');
})($i || ($i = {}));
var wp;
(function (r) {
  (r.EVM = 'EVM'),
    (r.Bitcoin = 'Bitcoin'),
    (r.Solana = 'Solana'),
    (r.Tron = 'Tron'),
    (r.Ton = 'Ton'),
    (r.IC = 'ICP'),
    (r.Kaspa = 'Kaspa');
})(wp || (wp = {}));
var _a;
(function (r) {
  (r[(r.Source = 0)] = 'Source'), (r[(r.Target = 1)] = 'Target');
})(_a || (_a = {}));
var $n;
(function (r) {
  (r[(r.LimitOrder = 0)] = 'LimitOrder'), (r[(r.SwapOrder = 1)] = 'SwapOrder');
})($n || ($n = {}));
var _t;
(function (r) {
  (r[(r.Ask = 1)] = 'Ask'), (r[(r.Bid = 2)] = 'Bid');
})(_t || (_t = {}));
var Yi;
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
})(Yi || (Yi = {}));
var Aa;
(function (r) {
  (r[(r.Created = 0)] = 'Created'), (r[(r.Fulfilled = 1)] = 'Fulfilled'), (r[(r.Cancelled = 2)] = 'Cancelled');
})(Aa || (Aa = {}));
var $s;
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
})($s || ($s = {}));
var on;
(function (r) {
  (r.Mainnet = 'mainnet'), (r.Testnet = 'testnet');
})(on || (on = {}));
var Vi;
(function (r) {
  (r[(r.BtcEcdsa = 1e3)] = 'BtcEcdsa'),
    (r[(r.EvmEcdsa = 1001)] = 'EvmEcdsa'),
    (r[(r.TronEcdsa = 1002)] = 'TronEcdsa'),
    (r[(r.TonEddsaOpenMask = 2e3)] = 'TonEddsaOpenMask'),
    (r[(r.SolanaEddsa = 2010)] = 'SolanaEddsa'),
    (r[(r.IcpEddsa = 2020)] = 'IcpEddsa'),
    (r[(r.KaspaSchnorr = 3010)] = 'KaspaSchnorr');
})(Vi || (Vi = {}));
var Ys;
(function (r) {
  r[(r.V0 = 0)] = 'V0';
})(Ys || (Ys = {}));
class IS {
  constructor(a) {
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
      (this.hin = a.hin),
      (this.sourceWalletPublicKey = a.sourceWalletPublicKey),
      (this.sourceWalletAddress = a.sourceWalletAddress),
      (this.txRef = a.txRef),
      (this.sourceChainId = a.sourceChainId),
      (this.sourceAssetType = a.sourceAssetType),
      (this.sourceAsset = a.sourceAsset),
      (this.sourceVolume = a.sourceVolume),
      (this.targetChainId = a.targetChainId),
      (this.targetWalletAddress = a.targetWalletAddress),
      (this.targetAssetType = a.targetAssetType),
      (this.targetAsset = a.targetAsset),
      (this.targetVolume = a.targetVolume),
      (this.targetVolumeMin = a.targetVolumeMin);
  }
  toJson() {
    const a = {};
    return (
      this.hin !== void 0 && (a.hin = this.hin.toString()),
      this.sourceWalletPublicKey && (a.sourceWalletPublicKey = this.sourceWalletPublicKey),
      this.sourceWalletAddress && (a.sourceWalletAddress = this.sourceWalletAddress),
      this.txRef && (a.txRef = this.txRef),
      this.sourceChainId && (a.sourceChainId = this.sourceChainId.toString()),
      this.sourceAssetType !== void 0 && (a.sourceAssetType = this.sourceAssetType.toString()),
      this.sourceAsset && (a.sourceAsset = this.sourceAsset),
      this.sourceVolume !== void 0 && (a.sourceVolume = this.sourceVolume.toString()),
      this.targetChainId && (a.targetChainId = this.targetChainId.toString()),
      this.targetWalletAddress && (a.targetWalletAddress = this.targetWalletAddress),
      this.targetAssetType !== void 0 && (a.targetAssetType = this.targetAssetType.toString()),
      this.targetAsset && (a.targetAsset = this.targetAsset),
      this.targetVolume !== void 0 && (a.targetVolume = this.targetVolume.toString()),
      this.targetVolumeMin !== void 0 && (a.targetVolumeMin = this.targetVolumeMin.toString()),
      JSON.stringify(a)
    );
  }
  setSignature(a, i) {
    (this.signature = a), (this.signatureSchema = i);
  }
}
var Ep;
(function (r) {
  (r.Pending = 'Pending'), (r.Success = 'Success'), (r.Rejected = 'Rejected');
})(Ep || (Ep = {}));
function qS(r) {
  return { query: { HIN: r.hin.toString(), ChainId: r.chainId.toString() } };
}
function LS(r) {
  var a, i, u, s, f;
  return {
    query: {
      SourceChainId: (a = r.sourceChainId) == null ? void 0 : a.toString(),
      SourceAssetType: (i = r.sourceAssetType) == null ? void 0 : i.toString(),
      SourceAsset: r.sourceAsset,
      SourceVolume: (u = r.sourceVolume) == null ? void 0 : u.toString(),
      TargetChainId: (s = r.targetChainId) == null ? void 0 : s.toString(),
      TargetAssetType: (f = r.targetAssetType) == null ? void 0 : f.toString(),
      TargetAsset: r.targetAsset
    }
  };
}
function zS(r) {
  return {
    targetChainId: ir.fromString(r.targetChainId),
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
function HS(r) {
  var a, i, u;
  return {
    body: {
      hin: r.hin.toString(),
      sourceWalletPublicKey: r.sourceWalletPublicKey,
      sourceWalletAddress: r.sourceWalletAddress,
      txRef: r.txRef,
      sourceChainId: r.sourceChainId.toString(),
      sourceAssetType: (a = r.sourceAssetType) == null ? void 0 : a.toString(),
      sourceAsset: r.sourceAsset,
      sourceVolume: r.sourceVolume.toString(),
      targetChainId: (i = r.targetChainId) == null ? void 0 : i.toString(),
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
function FS(r) {
  return { query: { AgentOrderId: r } };
}
function VS(r) {
  return { status: r.status, txHash: r.txHash || void 0 };
}
function Ap(r) {
  if (!Number.isSafeInteger(r) || r < 0) throw new Error('positive integer expected, got ' + r);
}
function GS(r) {
  return r instanceof Uint8Array || (ArrayBuffer.isView(r) && r.constructor.name === 'Uint8Array');
}
function yd(r, ...a) {
  if (!GS(r)) throw new Error('Uint8Array expected');
  if (a.length > 0 && !a.includes(r.length))
    throw new Error('Uint8Array expected of length ' + a + ', got length=' + r.length);
}
function $S(r) {
  if (typeof r != 'function' || typeof r.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  Ap(r.outputLen), Ap(r.blockLen);
}
function Ks(r, a = !0) {
  if (r.destroyed) throw new Error('Hash instance has been destroyed');
  if (a && r.finished) throw new Error('Hash#digest() has already been called');
}
function YS(r, a) {
  yd(r);
  const i = a.outputLen;
  if (r.length < i) throw new Error('digestInto() expects output buffer of length at least ' + i);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function Df(r) {
  return new DataView(r.buffer, r.byteOffset, r.byteLength);
}
function vn(r, a) {
  return (r << (32 - a)) | (r >>> a);
}
function KS(r) {
  if (typeof r != 'string') throw new Error('utf8ToBytes expected string, got ' + typeof r);
  return new Uint8Array(new TextEncoder().encode(r));
}
function vd(r) {
  return typeof r == 'string' && (r = KS(r)), yd(r), r;
}
class Kg {
  clone() {
    return this._cloneInto();
  }
}
function XS(r) {
  const a = (u) => r().update(vd(u)).digest(),
    i = r();
  return (a.outputLen = i.outputLen), (a.blockLen = i.blockLen), (a.create = () => r()), a;
}
class Xg extends Kg {
  constructor(a, i) {
    super(), (this.finished = !1), (this.destroyed = !1), $S(a);
    const u = vd(i);
    if (((this.iHash = a.create()), typeof this.iHash.update != 'function'))
      throw new Error('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const s = this.blockLen,
      f = new Uint8Array(s);
    f.set(u.length > s ? a.create().update(u).digest() : u);
    for (let d = 0; d < f.length; d++) f[d] ^= 54;
    this.iHash.update(f), (this.oHash = a.create());
    for (let d = 0; d < f.length; d++) f[d] ^= 106;
    this.oHash.update(f), f.fill(0);
  }
  update(a) {
    return Ks(this), this.iHash.update(a), this;
  }
  digestInto(a) {
    Ks(this),
      yd(a, this.outputLen),
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
    const { oHash: i, iHash: u, finished: s, destroyed: f, blockLen: d, outputLen: h } = this;
    return (
      (a = a),
      (a.finished = s),
      (a.destroyed = f),
      (a.blockLen = d),
      (a.outputLen = h),
      (a.oHash = i._cloneInto(a.oHash)),
      (a.iHash = u._cloneInto(a.iHash)),
      a
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const bd = (r, a, i) => new Xg(r, a).update(i).digest();
bd.create = (r, a) => new Xg(r, a);
function ZS(r, a, i, u) {
  if (typeof r.setBigUint64 == 'function') return r.setBigUint64(a, i, u);
  const s = BigInt(32),
    f = BigInt(4294967295),
    d = Number((i >> s) & f),
    h = Number(i & f),
    p = u ? 4 : 0,
    g = u ? 0 : 4;
  r.setUint32(a + p, d, u), r.setUint32(a + g, h, u);
}
function QS(r, a, i) {
  return (r & a) ^ (~r & i);
}
function PS(r, a, i) {
  return (r & a) ^ (r & i) ^ (a & i);
}
class JS extends Kg {
  constructor(a, i, u, s) {
    super(),
      (this.blockLen = a),
      (this.outputLen = i),
      (this.padOffset = u),
      (this.isLE = s),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(a)),
      (this.view = Df(this.buffer));
  }
  update(a) {
    Ks(this);
    const { view: i, buffer: u, blockLen: s } = this;
    a = vd(a);
    const f = a.length;
    for (let d = 0; d < f; ) {
      const h = Math.min(s - this.pos, f - d);
      if (h === s) {
        const p = Df(a);
        for (; s <= f - d; d += s) this.process(p, d);
        continue;
      }
      u.set(a.subarray(d, d + h), this.pos),
        (this.pos += h),
        (d += h),
        this.pos === s && (this.process(i, 0), (this.pos = 0));
    }
    return (this.length += a.length), this.roundClean(), this;
  }
  digestInto(a) {
    Ks(this), YS(a, this), (this.finished = !0);
    const { buffer: i, view: u, blockLen: s, isLE: f } = this;
    let { pos: d } = this;
    (i[d++] = 128), this.buffer.subarray(d).fill(0), this.padOffset > s - d && (this.process(u, 0), (d = 0));
    for (let v = d; v < s; v++) i[v] = 0;
    ZS(u, s - 8, BigInt(this.length * 8), f), this.process(u, 0);
    const h = Df(a),
      p = this.outputLen;
    if (p % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const g = p / 4,
      N = this.get();
    if (g > N.length) throw new Error('_sha2: outputLen bigger than state');
    for (let v = 0; v < g; v++) h.setUint32(4 * v, N[v], f);
  }
  digest() {
    const { buffer: a, outputLen: i } = this;
    this.digestInto(a);
    const u = a.slice(0, i);
    return this.destroy(), u;
  }
  _cloneInto(a) {
    a || (a = new this.constructor()), a.set(...this.get());
    const { blockLen: i, buffer: u, length: s, finished: f, destroyed: d, pos: h } = this;
    return (a.length = s), (a.pos = h), (a.finished = f), (a.destroyed = d), s % i && a.buffer.set(u), a;
  }
}
const WS = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
    310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078,
    604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
    3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051,
    2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
    275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222,
    2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
  ]),
  xa = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
  wa = new Uint32Array(64);
class ex extends JS {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = xa[0] | 0),
      (this.B = xa[1] | 0),
      (this.C = xa[2] | 0),
      (this.D = xa[3] | 0),
      (this.E = xa[4] | 0),
      (this.F = xa[5] | 0),
      (this.G = xa[6] | 0),
      (this.H = xa[7] | 0);
  }
  get() {
    const { A: a, B: i, C: u, D: s, E: f, F: d, G: h, H: p } = this;
    return [a, i, u, s, f, d, h, p];
  }
  set(a, i, u, s, f, d, h, p) {
    (this.A = a | 0),
      (this.B = i | 0),
      (this.C = u | 0),
      (this.D = s | 0),
      (this.E = f | 0),
      (this.F = d | 0),
      (this.G = h | 0),
      (this.H = p | 0);
  }
  process(a, i) {
    for (let v = 0; v < 16; v++, i += 4) wa[v] = a.getUint32(i, !1);
    for (let v = 16; v < 64; v++) {
      const S = wa[v - 15],
        w = wa[v - 2],
        D = vn(S, 7) ^ vn(S, 18) ^ (S >>> 3),
        P = vn(w, 17) ^ vn(w, 19) ^ (w >>> 10);
      wa[v] = (P + wa[v - 7] + D + wa[v - 16]) | 0;
    }
    let { A: u, B: s, C: f, D: d, E: h, F: p, G: g, H: N } = this;
    for (let v = 0; v < 64; v++) {
      const S = vn(h, 6) ^ vn(h, 11) ^ vn(h, 25),
        w = (N + S + QS(h, p, g) + WS[v] + wa[v]) | 0,
        P = ((vn(u, 2) ^ vn(u, 13) ^ vn(u, 22)) + PS(u, s, f)) | 0;
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
    wa.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Sd = XS(() => new ex());
var Uf = {},
  jf = {},
  $l = {},
  Np;
function tx() {
  if (Np) return $l;
  (Np = 1), ($l.byteLength = h), ($l.toByteArray = g), ($l.fromByteArray = S);
  for (
    var r = [],
      a = [],
      i = typeof Uint8Array < 'u' ? Uint8Array : Array,
      u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      s = 0,
      f = u.length;
    s < f;
    ++s
  )
    (r[s] = u[s]), (a[u.charCodeAt(s)] = s);
  (a[45] = 62), (a[95] = 63);
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
      z = new i(p(w, J, W)),
      Se = 0,
      ze = W > 0 ? J - 4 : J,
      we;
    for (we = 0; we < ze; we += 4)
      (D =
        (a[w.charCodeAt(we)] << 18) |
        (a[w.charCodeAt(we + 1)] << 12) |
        (a[w.charCodeAt(we + 2)] << 6) |
        a[w.charCodeAt(we + 3)]),
        (z[Se++] = (D >> 16) & 255),
        (z[Se++] = (D >> 8) & 255),
        (z[Se++] = D & 255);
    return (
      W === 2 && ((D = (a[w.charCodeAt(we)] << 2) | (a[w.charCodeAt(we + 1)] >> 4)), (z[Se++] = D & 255)),
      W === 1 &&
        ((D = (a[w.charCodeAt(we)] << 10) | (a[w.charCodeAt(we + 1)] << 4) | (a[w.charCodeAt(we + 2)] >> 2)),
        (z[Se++] = (D >> 8) & 255),
        (z[Se++] = D & 255)),
      z
    );
  }
  function N(w) {
    return r[(w >> 18) & 63] + r[(w >> 12) & 63] + r[(w >> 6) & 63] + r[w & 63];
  }
  function v(w, D, P) {
    for (var J, W = [], z = D; z < P; z += 3)
      (J = ((w[z] << 16) & 16711680) + ((w[z + 1] << 8) & 65280) + (w[z + 2] & 255)), W.push(N(J));
    return W.join('');
  }
  function S(w) {
    for (var D, P = w.length, J = P % 3, W = [], z = 16383, Se = 0, ze = P - J; Se < ze; Se += z)
      W.push(v(w, Se, Se + z > ze ? ze : Se + z));
    return (
      J === 1
        ? ((D = w[P - 1]), W.push(r[D >> 2] + r[(D << 4) & 63] + '=='))
        : J === 2 && ((D = (w[P - 2] << 8) + w[P - 1]), W.push(r[D >> 10] + r[(D >> 4) & 63] + r[(D << 2) & 63] + '=')),
      W.join('')
    );
  }
  return $l;
}
var Bs = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var _p;
function Zg() {
  return (
    _p ||
      ((_p = 1),
      (Bs.read = function (r, a, i, u, s) {
        var f,
          d,
          h = s * 8 - u - 1,
          p = (1 << h) - 1,
          g = p >> 1,
          N = -7,
          v = i ? s - 1 : 0,
          S = i ? -1 : 1,
          w = r[a + v];
        for (v += S, f = w & ((1 << -N) - 1), w >>= -N, N += h; N > 0; f = f * 256 + r[a + v], v += S, N -= 8);
        for (d = f & ((1 << -N) - 1), f >>= -N, N += u; N > 0; d = d * 256 + r[a + v], v += S, N -= 8);
        if (f === 0) f = 1 - g;
        else {
          if (f === p) return d ? NaN : (w ? -1 : 1) * (1 / 0);
          (d = d + Math.pow(2, u)), (f = f - g);
        }
        return (w ? -1 : 1) * d * Math.pow(2, f - u);
      }),
      (Bs.write = function (r, a, i, u, s, f) {
        var d,
          h,
          p,
          g = f * 8 - s - 1,
          N = (1 << g) - 1,
          v = N >> 1,
          S = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          w = u ? 0 : f - 1,
          D = u ? 1 : -1,
          P = a < 0 || (a === 0 && 1 / a < 0) ? 1 : 0;
        for (
          a = Math.abs(a),
            isNaN(a) || a === 1 / 0
              ? ((h = isNaN(a) ? 1 : 0), (d = N))
              : ((d = Math.floor(Math.log(a) / Math.LN2)),
                a * (p = Math.pow(2, -d)) < 1 && (d--, (p *= 2)),
                d + v >= 1 ? (a += S / p) : (a += S * Math.pow(2, 1 - v)),
                a * p >= 2 && (d++, (p /= 2)),
                d + v >= N
                  ? ((h = 0), (d = N))
                  : d + v >= 1
                    ? ((h = (a * p - 1) * Math.pow(2, s)), (d = d + v))
                    : ((h = a * Math.pow(2, v - 1) * Math.pow(2, s)), (d = 0)));
          s >= 8;
          r[i + w] = h & 255, w += D, h /= 256, s -= 8
        );
        for (d = (d << s) | h, g += s; g > 0; r[i + w] = d & 255, w += D, d /= 256, g -= 8);
        r[i + w - D] |= P * 128;
      })),
    Bs
  );
}
var Op;
function su() {
  return (
    Op ||
      ((Op = 1),
      (function (r) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */ const a = tx(),
          i = Zg(),
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
          const V = E.valueOf && E.valueOf();
          if (V != null && V !== E) return h.from(V, m, y);
          const ae = J(E);
          if (ae) return ae;
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
          let V = d(y);
          const ae = V.write(E, m);
          return ae !== y && (V = V.slice(0, ae)), V;
        }
        function w(E) {
          const m = E.length < 0 ? 0 : W(E.length) | 0,
            y = d(m);
          for (let V = 0; V < m; V += 1) y[V] = E[V] & 255;
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
          let V;
          return (
            m === void 0 && y === void 0
              ? (V = new Uint8Array(E))
              : y === void 0
                ? (V = new Uint8Array(E, m))
                : (V = new Uint8Array(E, m, y)),
            Object.setPrototypeOf(V, h.prototype),
            V
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
        function z(E) {
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
            let V = m.length,
              ae = y.length;
            for (let k = 0, q = Math.min(V, ae); k < q; ++k)
              if (m[k] !== y[k]) {
                (V = m[k]), (ae = y[k]);
                break;
              }
            return V < ae ? -1 : ae < V ? 1 : 0;
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
            let V;
            if (y === void 0) for (y = 0, V = 0; V < m.length; ++V) y += m[V].length;
            const ae = h.allocUnsafe(y);
            let k = 0;
            for (V = 0; V < m.length; ++V) {
              let q = m[V];
              if (ve(q, Uint8Array))
                k + q.length > ae.length
                  ? (h.isBuffer(q) || (q = h.from(q)), q.copy(ae, k))
                  : Uint8Array.prototype.set.call(ae, q, k);
              else if (h.isBuffer(q)) q.copy(ae, k);
              else throw new TypeError('"list" argument must be an Array of Buffers');
              k += q.length;
            }
            return ae;
          });
        function Se(E, m) {
          if (h.isBuffer(E)) return E.length;
          if (ArrayBuffer.isView(E) || ve(E, ArrayBuffer)) return E.byteLength;
          if (typeof E != 'string')
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof E
            );
          const y = E.length,
            V = arguments.length > 2 && arguments[2] === !0;
          if (!V && y === 0) return 0;
          let ae = !1;
          for (;;)
            switch (m) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return y;
              case 'utf8':
              case 'utf-8':
                return ie(E).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return y * 2;
              case 'hex':
                return y >>> 1;
              case 'base64':
                return F(E).length;
              default:
                if (ae) return V ? -1 : ie(E).length;
                (m = ('' + m).toLowerCase()), (ae = !0);
            }
        }
        h.byteLength = Se;
        function ze(E, m, y) {
          let V = !1;
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
                return H(this, m, y);
              case 'base64':
                return K(this, m, y);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return j(this, m, y);
              default:
                if (V) throw new TypeError('Unknown encoding: ' + E);
                (E = (E + '').toLowerCase()), (V = !0);
            }
        }
        h.prototype._isBuffer = !0;
        function we(E, m, y) {
          const V = E[m];
          (E[m] = E[y]), (E[y] = V);
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
            return m === 0 ? '' : arguments.length === 0 ? Z(this, 0, m) : ze.apply(this, arguments);
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
          (h.prototype.compare = function (m, y, V, ae, k) {
            if ((ve(m, Uint8Array) && (m = h.from(m, m.offset, m.byteLength)), !h.isBuffer(m)))
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof m
              );
            if (
              (y === void 0 && (y = 0),
              V === void 0 && (V = m ? m.length : 0),
              ae === void 0 && (ae = 0),
              k === void 0 && (k = this.length),
              y < 0 || V > m.length || ae < 0 || k > this.length)
            )
              throw new RangeError('out of range index');
            if (ae >= k && y >= V) return 0;
            if (ae >= k) return -1;
            if (y >= V) return 1;
            if (((y >>>= 0), (V >>>= 0), (ae >>>= 0), (k >>>= 0), this === m)) return 0;
            let q = k - ae,
              de = V - y;
            const Oe = Math.min(q, de),
              Ue = this.slice(ae, k),
              qe = m.slice(y, V);
            for (let et = 0; et < Oe; ++et)
              if (Ue[et] !== qe[et]) {
                (q = Ue[et]), (de = qe[et]);
                break;
              }
            return q < de ? -1 : de < q ? 1 : 0;
          });
        function he(E, m, y, V, ae) {
          if (E.length === 0) return -1;
          if (
            (typeof y == 'string'
              ? ((V = y), (y = 0))
              : y > 2147483647
                ? (y = 2147483647)
                : y < -2147483648 && (y = -2147483648),
            (y = +y),
            xe(y) && (y = ae ? 0 : E.length - 1),
            y < 0 && (y = E.length + y),
            y >= E.length)
          ) {
            if (ae) return -1;
            y = E.length - 1;
          } else if (y < 0)
            if (ae) y = 0;
            else return -1;
          if ((typeof m == 'string' && (m = h.from(m, V)), h.isBuffer(m)))
            return m.length === 0 ? -1 : Ae(E, m, y, V, ae);
          if (typeof m == 'number')
            return (
              (m = m & 255),
              typeof Uint8Array.prototype.indexOf == 'function'
                ? ae
                  ? Uint8Array.prototype.indexOf.call(E, m, y)
                  : Uint8Array.prototype.lastIndexOf.call(E, m, y)
                : Ae(E, [m], y, V, ae)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function Ae(E, m, y, V, ae) {
          let k = 1,
            q = E.length,
            de = m.length;
          if (
            V !== void 0 &&
            ((V = String(V).toLowerCase()), V === 'ucs2' || V === 'ucs-2' || V === 'utf16le' || V === 'utf-16le')
          ) {
            if (E.length < 2 || m.length < 2) return -1;
            (k = 2), (q /= 2), (de /= 2), (y /= 2);
          }
          function Oe(qe, et) {
            return k === 1 ? qe[et] : qe.readUInt16BE(et * k);
          }
          let Ue;
          if (ae) {
            let qe = -1;
            for (Ue = y; Ue < q; Ue++)
              if (Oe(E, Ue) === Oe(m, qe === -1 ? 0 : Ue - qe)) {
                if ((qe === -1 && (qe = Ue), Ue - qe + 1 === de)) return qe * k;
              } else qe !== -1 && (Ue -= Ue - qe), (qe = -1);
          } else
            for (y + de > q && (y = q - de), Ue = y; Ue >= 0; Ue--) {
              let qe = !0;
              for (let et = 0; et < de; et++)
                if (Oe(E, Ue + et) !== Oe(m, et)) {
                  qe = !1;
                  break;
                }
              if (qe) return Ue;
            }
          return -1;
        }
        (h.prototype.includes = function (m, y, V) {
          return this.indexOf(m, y, V) !== -1;
        }),
          (h.prototype.indexOf = function (m, y, V) {
            return he(this, m, y, V, !0);
          }),
          (h.prototype.lastIndexOf = function (m, y, V) {
            return he(this, m, y, V, !1);
          });
        function b(E, m, y, V) {
          y = Number(y) || 0;
          const ae = E.length - y;
          V ? ((V = Number(V)), V > ae && (V = ae)) : (V = ae);
          const k = m.length;
          V > k / 2 && (V = k / 2);
          let q;
          for (q = 0; q < V; ++q) {
            const de = parseInt(m.substr(q * 2, 2), 16);
            if (xe(de)) return q;
            E[y + q] = de;
          }
          return q;
        }
        function A(E, m, y, V) {
          return te(ie(m, E.length - y), E, y, V);
        }
        function O(E, m, y, V) {
          return te(M(m), E, y, V);
        }
        function G(E, m, y, V) {
          return te(F(m), E, y, V);
        }
        function Y(E, m, y, V) {
          return te(L(m, E.length - y), E, y, V);
        }
        (h.prototype.write = function (m, y, V, ae) {
          if (y === void 0) (ae = 'utf8'), (V = this.length), (y = 0);
          else if (V === void 0 && typeof y == 'string') (ae = y), (V = this.length), (y = 0);
          else if (isFinite(y))
            (y = y >>> 0), isFinite(V) ? ((V = V >>> 0), ae === void 0 && (ae = 'utf8')) : ((ae = V), (V = void 0));
          else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          const k = this.length - y;
          if (((V === void 0 || V > k) && (V = k), (m.length > 0 && (V < 0 || y < 0)) || y > this.length))
            throw new RangeError('Attempt to write outside buffer bounds');
          ae || (ae = 'utf8');
          let q = !1;
          for (;;)
            switch (ae) {
              case 'hex':
                return b(this, m, y, V);
              case 'utf8':
              case 'utf-8':
                return A(this, m, y, V);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return O(this, m, y, V);
              case 'base64':
                return G(this, m, y, V);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return Y(this, m, y, V);
              default:
                if (q) throw new TypeError('Unknown encoding: ' + ae);
                (ae = ('' + ae).toLowerCase()), (q = !0);
            }
        }),
          (h.prototype.toJSON = function () {
            return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        function K(E, m, y) {
          return m === 0 && y === E.length ? a.fromByteArray(E) : a.fromByteArray(E.slice(m, y));
        }
        function Z(E, m, y) {
          y = Math.min(E.length, y);
          const V = [];
          let ae = m;
          for (; ae < y; ) {
            const k = E[ae];
            let q = null,
              de = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
            if (ae + de <= y) {
              let Oe, Ue, qe, et;
              switch (de) {
                case 1:
                  k < 128 && (q = k);
                  break;
                case 2:
                  (Oe = E[ae + 1]), (Oe & 192) === 128 && ((et = ((k & 31) << 6) | (Oe & 63)), et > 127 && (q = et));
                  break;
                case 3:
                  (Oe = E[ae + 1]),
                    (Ue = E[ae + 2]),
                    (Oe & 192) === 128 &&
                      (Ue & 192) === 128 &&
                      ((et = ((k & 15) << 12) | ((Oe & 63) << 6) | (Ue & 63)),
                      et > 2047 && (et < 55296 || et > 57343) && (q = et));
                  break;
                case 4:
                  (Oe = E[ae + 1]),
                    (Ue = E[ae + 2]),
                    (qe = E[ae + 3]),
                    (Oe & 192) === 128 &&
                      (Ue & 192) === 128 &&
                      (qe & 192) === 128 &&
                      ((et = ((k & 15) << 18) | ((Oe & 63) << 12) | ((Ue & 63) << 6) | (qe & 63)),
                      et > 65535 && et < 1114112 && (q = et));
              }
            }
            q === null
              ? ((q = 65533), (de = 1))
              : q > 65535 && ((q -= 65536), V.push(((q >>> 10) & 1023) | 55296), (q = 56320 | (q & 1023))),
              V.push(q),
              (ae += de);
          }
          return R(V);
        }
        const I = 4096;
        function R(E) {
          const m = E.length;
          if (m <= I) return String.fromCharCode.apply(String, E);
          let y = '',
            V = 0;
          for (; V < m; ) y += String.fromCharCode.apply(String, E.slice(V, (V += I)));
          return y;
        }
        function $(E, m, y) {
          let V = '';
          y = Math.min(E.length, y);
          for (let ae = m; ae < y; ++ae) V += String.fromCharCode(E[ae] & 127);
          return V;
        }
        function H(E, m, y) {
          let V = '';
          y = Math.min(E.length, y);
          for (let ae = m; ae < y; ++ae) V += String.fromCharCode(E[ae]);
          return V;
        }
        function oe(E, m, y) {
          const V = E.length;
          (!m || m < 0) && (m = 0), (!y || y < 0 || y > V) && (y = V);
          let ae = '';
          for (let k = m; k < y; ++k) ae += De[E[k]];
          return ae;
        }
        function j(E, m, y) {
          const V = E.slice(m, y);
          let ae = '';
          for (let k = 0; k < V.length - 1; k += 2) ae += String.fromCharCode(V[k] + V[k + 1] * 256);
          return ae;
        }
        h.prototype.slice = function (m, y) {
          const V = this.length;
          (m = ~~m),
            (y = y === void 0 ? V : ~~y),
            m < 0 ? ((m += V), m < 0 && (m = 0)) : m > V && (m = V),
            y < 0 ? ((y += V), y < 0 && (y = 0)) : y > V && (y = V),
            y < m && (y = m);
          const ae = this.subarray(m, y);
          return Object.setPrototypeOf(ae, h.prototype), ae;
        };
        function ne(E, m, y) {
          if (E % 1 !== 0 || E < 0) throw new RangeError('offset is not uint');
          if (E + m > y) throw new RangeError('Trying to access beyond buffer length');
        }
        (h.prototype.readUintLE = h.prototype.readUIntLE =
          function (m, y, V) {
            (m = m >>> 0), (y = y >>> 0), V || ne(m, y, this.length);
            let ae = this[m],
              k = 1,
              q = 0;
            for (; ++q < y && (k *= 256); ) ae += this[m + q] * k;
            return ae;
          }),
          (h.prototype.readUintBE = h.prototype.readUIntBE =
            function (m, y, V) {
              (m = m >>> 0), (y = y >>> 0), V || ne(m, y, this.length);
              let ae = this[m + --y],
                k = 1;
              for (; y > 0 && (k *= 256); ) ae += this[m + --y] * k;
              return ae;
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
          (h.prototype.readBigUInt64LE = He(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const y = this[m],
              V = this[m + 7];
            (y === void 0 || V === void 0) && re(m, this.length - 8);
            const ae = y + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24,
              k = this[++m] + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + V * 2 ** 24;
            return BigInt(ae) + (BigInt(k) << BigInt(32));
          })),
          (h.prototype.readBigUInt64BE = He(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const y = this[m],
              V = this[m + 7];
            (y === void 0 || V === void 0) && re(m, this.length - 8);
            const ae = y * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m],
              k = this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + V;
            return (BigInt(ae) << BigInt(32)) + BigInt(k);
          })),
          (h.prototype.readIntLE = function (m, y, V) {
            (m = m >>> 0), (y = y >>> 0), V || ne(m, y, this.length);
            let ae = this[m],
              k = 1,
              q = 0;
            for (; ++q < y && (k *= 256); ) ae += this[m + q] * k;
            return (k *= 128), ae >= k && (ae -= Math.pow(2, 8 * y)), ae;
          }),
          (h.prototype.readIntBE = function (m, y, V) {
            (m = m >>> 0), (y = y >>> 0), V || ne(m, y, this.length);
            let ae = y,
              k = 1,
              q = this[m + --ae];
            for (; ae > 0 && (k *= 256); ) q += this[m + --ae] * k;
            return (k *= 128), q >= k && (q -= Math.pow(2, 8 * y)), q;
          }),
          (h.prototype.readInt8 = function (m, y) {
            return (m = m >>> 0), y || ne(m, 1, this.length), this[m] & 128 ? (255 - this[m] + 1) * -1 : this[m];
          }),
          (h.prototype.readInt16LE = function (m, y) {
            (m = m >>> 0), y || ne(m, 2, this.length);
            const V = this[m] | (this[m + 1] << 8);
            return V & 32768 ? V | 4294901760 : V;
          }),
          (h.prototype.readInt16BE = function (m, y) {
            (m = m >>> 0), y || ne(m, 2, this.length);
            const V = this[m + 1] | (this[m] << 8);
            return V & 32768 ? V | 4294901760 : V;
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
          (h.prototype.readBigInt64LE = He(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const y = this[m],
              V = this[m + 7];
            (y === void 0 || V === void 0) && re(m, this.length - 8);
            const ae = this[m + 4] + this[m + 5] * 2 ** 8 + this[m + 6] * 2 ** 16 + (V << 24);
            return (
              (BigInt(ae) << BigInt(32)) + BigInt(y + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24)
            );
          })),
          (h.prototype.readBigInt64BE = He(function (m) {
            (m = m >>> 0), se(m, 'offset');
            const y = this[m],
              V = this[m + 7];
            (y === void 0 || V === void 0) && re(m, this.length - 8);
            const ae = (y << 24) + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m];
            return (
              (BigInt(ae) << BigInt(32)) + BigInt(this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + V)
            );
          })),
          (h.prototype.readFloatLE = function (m, y) {
            return (m = m >>> 0), y || ne(m, 4, this.length), i.read(this, m, !0, 23, 4);
          }),
          (h.prototype.readFloatBE = function (m, y) {
            return (m = m >>> 0), y || ne(m, 4, this.length), i.read(this, m, !1, 23, 4);
          }),
          (h.prototype.readDoubleLE = function (m, y) {
            return (m = m >>> 0), y || ne(m, 8, this.length), i.read(this, m, !0, 52, 8);
          }),
          (h.prototype.readDoubleBE = function (m, y) {
            return (m = m >>> 0), y || ne(m, 8, this.length), i.read(this, m, !1, 52, 8);
          });
        function Ee(E, m, y, V, ae, k) {
          if (!h.isBuffer(E)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (m > ae || m < k) throw new RangeError('"value" argument is out of bounds');
          if (y + V > E.length) throw new RangeError('Index out of range');
        }
        (h.prototype.writeUintLE = h.prototype.writeUIntLE =
          function (m, y, V, ae) {
            if (((m = +m), (y = y >>> 0), (V = V >>> 0), !ae)) {
              const de = Math.pow(2, 8 * V) - 1;
              Ee(this, m, y, V, de, 0);
            }
            let k = 1,
              q = 0;
            for (this[y] = m & 255; ++q < V && (k *= 256); ) this[y + q] = (m / k) & 255;
            return y + V;
          }),
          (h.prototype.writeUintBE = h.prototype.writeUIntBE =
            function (m, y, V, ae) {
              if (((m = +m), (y = y >>> 0), (V = V >>> 0), !ae)) {
                const de = Math.pow(2, 8 * V) - 1;
                Ee(this, m, y, V, de, 0);
              }
              let k = V - 1,
                q = 1;
              for (this[y + k] = m & 255; --k >= 0 && (q *= 256); ) this[y + k] = (m / q) & 255;
              return y + V;
            }),
          (h.prototype.writeUint8 = h.prototype.writeUInt8 =
            function (m, y, V) {
              return (m = +m), (y = y >>> 0), V || Ee(this, m, y, 1, 255, 0), (this[y] = m & 255), y + 1;
            }),
          (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
            function (m, y, V) {
              return (
                (m = +m),
                (y = y >>> 0),
                V || Ee(this, m, y, 2, 65535, 0),
                (this[y] = m & 255),
                (this[y + 1] = m >>> 8),
                y + 2
              );
            }),
          (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
            function (m, y, V) {
              return (
                (m = +m),
                (y = y >>> 0),
                V || Ee(this, m, y, 2, 65535, 0),
                (this[y] = m >>> 8),
                (this[y + 1] = m & 255),
                y + 2
              );
            }),
          (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
            function (m, y, V) {
              return (
                (m = +m),
                (y = y >>> 0),
                V || Ee(this, m, y, 4, 4294967295, 0),
                (this[y + 3] = m >>> 24),
                (this[y + 2] = m >>> 16),
                (this[y + 1] = m >>> 8),
                (this[y] = m & 255),
                y + 4
              );
            }),
          (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
            function (m, y, V) {
              return (
                (m = +m),
                (y = y >>> 0),
                V || Ee(this, m, y, 4, 4294967295, 0),
                (this[y] = m >>> 24),
                (this[y + 1] = m >>> 16),
                (this[y + 2] = m >>> 8),
                (this[y + 3] = m & 255),
                y + 4
              );
            });
        function ye(E, m, y, V, ae) {
          Q(m, V, ae, E, y, 7);
          let k = Number(m & BigInt(4294967295));
          (E[y++] = k), (k = k >> 8), (E[y++] = k), (k = k >> 8), (E[y++] = k), (k = k >> 8), (E[y++] = k);
          let q = Number((m >> BigInt(32)) & BigInt(4294967295));
          return (E[y++] = q), (q = q >> 8), (E[y++] = q), (q = q >> 8), (E[y++] = q), (q = q >> 8), (E[y++] = q), y;
        }
        function T(E, m, y, V, ae) {
          Q(m, V, ae, E, y, 7);
          let k = Number(m & BigInt(4294967295));
          (E[y + 7] = k), (k = k >> 8), (E[y + 6] = k), (k = k >> 8), (E[y + 5] = k), (k = k >> 8), (E[y + 4] = k);
          let q = Number((m >> BigInt(32)) & BigInt(4294967295));
          return (
            (E[y + 3] = q), (q = q >> 8), (E[y + 2] = q), (q = q >> 8), (E[y + 1] = q), (q = q >> 8), (E[y] = q), y + 8
          );
        }
        (h.prototype.writeBigUInt64LE = He(function (m, y = 0) {
          return ye(this, m, y, BigInt(0), BigInt('0xffffffffffffffff'));
        })),
          (h.prototype.writeBigUInt64BE = He(function (m, y = 0) {
            return T(this, m, y, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (h.prototype.writeIntLE = function (m, y, V, ae) {
            if (((m = +m), (y = y >>> 0), !ae)) {
              const Oe = Math.pow(2, 8 * V - 1);
              Ee(this, m, y, V, Oe - 1, -Oe);
            }
            let k = 0,
              q = 1,
              de = 0;
            for (this[y] = m & 255; ++k < V && (q *= 256); )
              m < 0 && de === 0 && this[y + k - 1] !== 0 && (de = 1), (this[y + k] = (((m / q) >> 0) - de) & 255);
            return y + V;
          }),
          (h.prototype.writeIntBE = function (m, y, V, ae) {
            if (((m = +m), (y = y >>> 0), !ae)) {
              const Oe = Math.pow(2, 8 * V - 1);
              Ee(this, m, y, V, Oe - 1, -Oe);
            }
            let k = V - 1,
              q = 1,
              de = 0;
            for (this[y + k] = m & 255; --k >= 0 && (q *= 256); )
              m < 0 && de === 0 && this[y + k + 1] !== 0 && (de = 1), (this[y + k] = (((m / q) >> 0) - de) & 255);
            return y + V;
          }),
          (h.prototype.writeInt8 = function (m, y, V) {
            return (
              (m = +m),
              (y = y >>> 0),
              V || Ee(this, m, y, 1, 127, -128),
              m < 0 && (m = 255 + m + 1),
              (this[y] = m & 255),
              y + 1
            );
          }),
          (h.prototype.writeInt16LE = function (m, y, V) {
            return (
              (m = +m),
              (y = y >>> 0),
              V || Ee(this, m, y, 2, 32767, -32768),
              (this[y] = m & 255),
              (this[y + 1] = m >>> 8),
              y + 2
            );
          }),
          (h.prototype.writeInt16BE = function (m, y, V) {
            return (
              (m = +m),
              (y = y >>> 0),
              V || Ee(this, m, y, 2, 32767, -32768),
              (this[y] = m >>> 8),
              (this[y + 1] = m & 255),
              y + 2
            );
          }),
          (h.prototype.writeInt32LE = function (m, y, V) {
            return (
              (m = +m),
              (y = y >>> 0),
              V || Ee(this, m, y, 4, 2147483647, -2147483648),
              (this[y] = m & 255),
              (this[y + 1] = m >>> 8),
              (this[y + 2] = m >>> 16),
              (this[y + 3] = m >>> 24),
              y + 4
            );
          }),
          (h.prototype.writeInt32BE = function (m, y, V) {
            return (
              (m = +m),
              (y = y >>> 0),
              V || Ee(this, m, y, 4, 2147483647, -2147483648),
              m < 0 && (m = 4294967295 + m + 1),
              (this[y] = m >>> 24),
              (this[y + 1] = m >>> 16),
              (this[y + 2] = m >>> 8),
              (this[y + 3] = m & 255),
              y + 4
            );
          }),
          (h.prototype.writeBigInt64LE = He(function (m, y = 0) {
            return ye(this, m, y, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          })),
          (h.prototype.writeBigInt64BE = He(function (m, y = 0) {
            return T(this, m, y, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          }));
        function je(E, m, y, V, ae, k) {
          if (y + V > E.length) throw new RangeError('Index out of range');
          if (y < 0) throw new RangeError('Index out of range');
        }
        function Me(E, m, y, V, ae) {
          return (m = +m), (y = y >>> 0), ae || je(E, m, y, 4), i.write(E, m, y, V, 23, 4), y + 4;
        }
        (h.prototype.writeFloatLE = function (m, y, V) {
          return Me(this, m, y, !0, V);
        }),
          (h.prototype.writeFloatBE = function (m, y, V) {
            return Me(this, m, y, !1, V);
          });
        function Pe(E, m, y, V, ae) {
          return (m = +m), (y = y >>> 0), ae || je(E, m, y, 8), i.write(E, m, y, V, 52, 8), y + 8;
        }
        (h.prototype.writeDoubleLE = function (m, y, V) {
          return Pe(this, m, y, !0, V);
        }),
          (h.prototype.writeDoubleBE = function (m, y, V) {
            return Pe(this, m, y, !1, V);
          }),
          (h.prototype.copy = function (m, y, V, ae) {
            if (!h.isBuffer(m)) throw new TypeError('argument should be a Buffer');
            if (
              (V || (V = 0),
              !ae && ae !== 0 && (ae = this.length),
              y >= m.length && (y = m.length),
              y || (y = 0),
              ae > 0 && ae < V && (ae = V),
              ae === V || m.length === 0 || this.length === 0)
            )
              return 0;
            if (y < 0) throw new RangeError('targetStart out of bounds');
            if (V < 0 || V >= this.length) throw new RangeError('Index out of range');
            if (ae < 0) throw new RangeError('sourceEnd out of bounds');
            ae > this.length && (ae = this.length), m.length - y < ae - V && (ae = m.length - y + V);
            const k = ae - V;
            return (
              this === m && typeof Uint8Array.prototype.copyWithin == 'function'
                ? this.copyWithin(y, V, ae)
                : Uint8Array.prototype.set.call(m, this.subarray(V, ae), y),
              k
            );
          }),
          (h.prototype.fill = function (m, y, V, ae) {
            if (typeof m == 'string') {
              if (
                (typeof y == 'string'
                  ? ((ae = y), (y = 0), (V = this.length))
                  : typeof V == 'string' && ((ae = V), (V = this.length)),
                ae !== void 0 && typeof ae != 'string')
              )
                throw new TypeError('encoding must be a string');
              if (typeof ae == 'string' && !h.isEncoding(ae)) throw new TypeError('Unknown encoding: ' + ae);
              if (m.length === 1) {
                const q = m.charCodeAt(0);
                ((ae === 'utf8' && q < 128) || ae === 'latin1') && (m = q);
              }
            } else typeof m == 'number' ? (m = m & 255) : typeof m == 'boolean' && (m = Number(m));
            if (y < 0 || this.length < y || this.length < V) throw new RangeError('Out of range index');
            if (V <= y) return this;
            (y = y >>> 0), (V = V === void 0 ? this.length : V >>> 0), m || (m = 0);
            let k;
            if (typeof m == 'number') for (k = y; k < V; ++k) this[k] = m;
            else {
              const q = h.isBuffer(m) ? m : h.from(m, ae),
                de = q.length;
              if (de === 0) throw new TypeError('The value "' + m + '" is invalid for argument "value"');
              for (k = 0; k < V - y; ++k) this[k + y] = q[k % de];
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
            set code(ae) {
              Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: ae, writable: !0 });
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
              let V = `The value of "${E}" is out of range.`,
                ae = y;
              return (
                Number.isInteger(y) && Math.abs(y) > 2 ** 32
                  ? (ae = B(String(y)))
                  : typeof y == 'bigint' &&
                    ((ae = String(y)),
                    (y > BigInt(2) ** BigInt(32) || y < -(BigInt(2) ** BigInt(32))) && (ae = B(ae)),
                    (ae += 'n')),
                (V += ` It must be ${m}. Received ${ae}`),
                V
              );
            },
            RangeError
          );
        function B(E) {
          let m = '',
            y = E.length;
          const V = E[0] === '-' ? 1 : 0;
          for (; y >= V + 4; y -= 3) m = `_${E.slice(y - 3, y)}${m}`;
          return `${E.slice(0, y)}${m}`;
        }
        function U(E, m, y) {
          se(m, 'offset'), (E[m] === void 0 || E[m + y] === void 0) && re(m, E.length - (y + 1));
        }
        function Q(E, m, y, V, ae, k) {
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
          U(V, ae, k);
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
        function ie(E, m) {
          m = m || 1 / 0;
          let y;
          const V = E.length;
          let ae = null;
          const k = [];
          for (let q = 0; q < V; ++q) {
            if (((y = E.charCodeAt(q)), y > 55295 && y < 57344)) {
              if (!ae) {
                if (y > 56319) {
                  (m -= 3) > -1 && k.push(239, 191, 189);
                  continue;
                } else if (q + 1 === V) {
                  (m -= 3) > -1 && k.push(239, 191, 189);
                  continue;
                }
                ae = y;
                continue;
              }
              if (y < 56320) {
                (m -= 3) > -1 && k.push(239, 191, 189), (ae = y);
                continue;
              }
              y = (((ae - 55296) << 10) | (y - 56320)) + 65536;
            } else ae && (m -= 3) > -1 && k.push(239, 191, 189);
            if (((ae = null), y < 128)) {
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
          let y, V, ae;
          const k = [];
          for (let q = 0; q < E.length && !((m -= 2) < 0); ++q)
            (y = E.charCodeAt(q)), (V = y >> 8), (ae = y % 256), k.push(ae), k.push(V);
          return k;
        }
        function F(E) {
          return a.toByteArray(me(E));
        }
        function te(E, m, y, V) {
          let ae;
          for (ae = 0; ae < V && !(ae + y >= m.length || ae >= E.length); ++ae) m[ae + y] = E[ae];
          return ae;
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
            const V = y * 16;
            for (let ae = 0; ae < 16; ++ae) m[V + ae] = E[y] + E[ae];
          }
          return m;
        })();
        function He(E) {
          return typeof BigInt > 'u' ? rt : E;
        }
        function rt() {
          throw new Error('BigInt not supported');
        }
      })(jf)),
    jf
  );
}
var qs = { exports: {} },
  rx = qs.exports,
  Tp;
function lc() {
  return (
    Tp ||
      ((Tp = 1),
      (function (r) {
        (function (a) {
          var i,
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
              O = (T.prototype = { constructor: T, toString: null, valueOf: null }),
              G = new T(1),
              Y = 20,
              K = 4,
              Z = -7,
              I = 21,
              R = -1e7,
              $ = 1e7,
              H = !1,
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
            function T(B, U) {
              var Q,
                se,
                re,
                ue,
                me,
                ie,
                M,
                L,
                F = this;
              if (!(F instanceof T)) return new T(B, U);
              if (U == null) {
                if (B && B._isBigNumber === !0) {
                  (F.s = B.s),
                    !B.c || B.e > $
                      ? (F.c = F.e = null)
                      : B.e < R
                        ? (F.c = [(F.e = 0)])
                        : ((F.e = B.e), (F.c = B.c.slice()));
                  return;
                }
                if ((ie = typeof B == 'number') && B * 0 == 0) {
                  if (((F.s = 1 / B < 0 ? ((B = -B), -1) : 1), B === ~~B)) {
                    for (ue = 0, me = B; me >= 10; me /= 10, ue++);
                    ue > $ ? (F.c = F.e = null) : ((F.e = ue), (F.c = [B]));
                    return;
                  }
                  L = String(B);
                } else {
                  if (!u.test((L = String(B)))) return A(F, L, ie);
                  F.s = L.charCodeAt(0) == 45 ? ((L = L.slice(1)), -1) : 1;
                }
                (ue = L.indexOf('.')) > -1 && (L = L.replace('.', '')),
                  (me = L.search(/e/i)) > 0
                    ? (ue < 0 && (ue = me), (ue += +L.slice(me + 1)), (L = L.substring(0, me)))
                    : ue < 0 && (ue = L.length);
              } else {
                if ((z(U, 2, Ee.length, 'Base'), U == 10 && ye)) return (F = new T(B)), Re(F, Y + F.e + 1, K);
                if (((L = String(B)), (ie = typeof B == 'number'))) {
                  if (B * 0 != 0) return A(F, L, ie, U);
                  if (
                    ((F.s = 1 / B < 0 ? ((L = L.slice(1)), -1) : 1), T.DEBUG && L.replace(/^0\.0*|\./, '').length > 15)
                  )
                    throw Error(h + B);
                } else F.s = L.charCodeAt(0) === 45 ? ((L = L.slice(1)), -1) : 1;
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
                    return A(F, String(B), ie, U);
                  }
                (ie = !1),
                  (L = b(L, U, 10, F.s)),
                  (ue = L.indexOf('.')) > -1 ? (L = L.replace('.', '')) : (ue = L.length);
              }
              for (me = 0; L.charCodeAt(me) === 48; me++);
              for (M = L.length; L.charCodeAt(--M) === 48; );
              if ((L = L.slice(me, ++M))) {
                if (((M -= me), ie && T.DEBUG && M > 15 && (B > N || B !== f(B)))) throw Error(h + F.s * B);
                if ((ue = ue - me - 1) > $) F.c = F.e = null;
                else if (ue < R) F.c = [(F.e = 0)];
                else {
                  if (((F.e = ue), (F.c = []), (me = (ue + 1) % g), ue < 0 && (me += g), me < M)) {
                    for (me && F.c.push(+L.slice(0, me)), M -= g; me < M; ) F.c.push(+L.slice(me, (me += g)));
                    me = g - (L = L.slice(me)).length;
                  } else me -= M;
                  for (; me--; L += '0');
                  F.c.push(+L);
                }
              } else F.c = [(F.e = 0)];
            }
            (T.clone = D),
              (T.ROUND_UP = 0),
              (T.ROUND_DOWN = 1),
              (T.ROUND_CEIL = 2),
              (T.ROUND_FLOOR = 3),
              (T.ROUND_HALF_UP = 4),
              (T.ROUND_HALF_DOWN = 5),
              (T.ROUND_HALF_EVEN = 6),
              (T.ROUND_HALF_CEIL = 7),
              (T.ROUND_HALF_FLOOR = 8),
              (T.EUCLID = 9),
              (T.config = T.set =
                function (B) {
                  var U, Q;
                  if (B != null)
                    if (typeof B == 'object') {
                      if (
                        (B.hasOwnProperty((U = 'DECIMAL_PLACES')) && ((Q = B[U]), z(Q, 0, w, U), (Y = Q)),
                        B.hasOwnProperty((U = 'ROUNDING_MODE')) && ((Q = B[U]), z(Q, 0, 8, U), (K = Q)),
                        B.hasOwnProperty((U = 'EXPONENTIAL_AT')) &&
                          ((Q = B[U]),
                          Q && Q.pop
                            ? (z(Q[0], -1e9, 0, U), z(Q[1], 0, w, U), (Z = Q[0]), (I = Q[1]))
                            : (z(Q, -1e9, w, U), (Z = -(I = Q < 0 ? -Q : Q)))),
                        B.hasOwnProperty((U = 'RANGE')))
                      )
                        if (((Q = B[U]), Q && Q.pop)) z(Q[0], -1e9, -1, U), z(Q[1], 1, w, U), (R = Q[0]), ($ = Q[1]);
                        else if ((z(Q, -1e9, w, U), Q)) R = -($ = Q < 0 ? -Q : Q);
                        else throw Error(d + U + ' cannot be zero: ' + Q);
                      if (B.hasOwnProperty((U = 'CRYPTO')))
                        if (((Q = B[U]), Q === !!Q))
                          if (Q)
                            if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes)) H = Q;
                            else throw ((H = !Q), Error(d + 'crypto unavailable'));
                          else H = Q;
                        else throw Error(d + U + ' not true or false: ' + Q);
                      if (
                        (B.hasOwnProperty((U = 'MODULO_MODE')) && ((Q = B[U]), z(Q, 0, 9, U), (oe = Q)),
                        B.hasOwnProperty((U = 'POW_PRECISION')) && ((Q = B[U]), z(Q, 0, w, U), (j = Q)),
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
                    ROUNDING_MODE: K,
                    EXPONENTIAL_AT: [Z, I],
                    RANGE: [R, $],
                    CRYPTO: H,
                    MODULO_MODE: oe,
                    POW_PRECISION: j,
                    FORMAT: ne,
                    ALPHABET: Ee
                  };
                }),
              (T.isBigNumber = function (B) {
                if (!B || B._isBigNumber !== !0) return !1;
                if (!T.DEBUG) return !0;
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
              (T.maximum = T.max =
                function () {
                  return Me(arguments, -1);
                }),
              (T.minimum = T.min =
                function () {
                  return Me(arguments, 1);
                }),
              (T.random = (function () {
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
                    ie,
                    M = 0,
                    L = [],
                    F = new T(G);
                  if ((Q == null ? (Q = Y) : z(Q, 0, w), (me = s(Q / g)), H))
                    if (crypto.getRandomValues) {
                      for (se = crypto.getRandomValues(new Uint32Array((me *= 2))); M < me; )
                        (ie = se[M] * 131072 + (se[M + 1] >>> 11)),
                          ie >= 9e15
                            ? ((re = crypto.getRandomValues(new Uint32Array(2))), (se[M] = re[0]), (se[M + 1] = re[1]))
                            : (L.push(ie % 1e14), (M += 2));
                      M = me / 2;
                    } else if (crypto.randomBytes) {
                      for (se = crypto.randomBytes((me *= 7)); M < me; )
                        (ie =
                          (se[M] & 31) * 281474976710656 +
                          se[M + 1] * 1099511627776 +
                          se[M + 2] * 4294967296 +
                          se[M + 3] * 16777216 +
                          (se[M + 4] << 16) +
                          (se[M + 5] << 8) +
                          se[M + 6]),
                          ie >= 9e15 ? crypto.randomBytes(7).copy(se, M) : (L.push(ie % 1e14), (M += 7));
                      M = me / 7;
                    } else throw ((H = !1), Error(d + 'crypto unavailable'));
                  if (!H) for (; M < me; ) (ie = U()), ie < 9e15 && (L[M++] = ie % 1e14);
                  for (
                    me = L[--M], Q %= g, me && Q && ((ie = v[g - Q]), (L[M] = f(me / ie) * ie));
                    L[M] === 0;
                    L.pop(), M--
                  );
                  if (M < 0) L = [(ue = 0)];
                  else {
                    for (ue = -1; L[0] === 0; L.splice(0, 1), ue -= g);
                    for (M = 1, ie = L[0]; ie >= 10; ie /= 10, M++);
                    M < g && (ue -= g - M);
                  }
                  return (F.e = ue), (F.c = L), F;
                };
              })()),
              (T.sum = function () {
                for (var B = 1, U = arguments, Q = new T(U[0]); B < U.length; ) Q = Q.plus(U[B++]);
                return Q;
              }),
              (b = (function () {
                var B = '0123456789';
                function U(Q, se, re, ue) {
                  for (var me, ie = [0], M, L = 0, F = Q.length; L < F; ) {
                    for (M = ie.length; M--; ie[M] *= se);
                    for (ie[0] += ue.indexOf(Q.charAt(L++)), me = 0; me < ie.length; me++)
                      ie[me] > re - 1 &&
                        (ie[me + 1] == null && (ie[me + 1] = 0), (ie[me + 1] += (ie[me] / re) | 0), (ie[me] %= re));
                  }
                  return ie.reverse();
                }
                return function (Q, se, re, ue, me) {
                  var ie,
                    M,
                    L,
                    F,
                    te,
                    ve,
                    xe,
                    De,
                    He = Q.indexOf('.'),
                    rt = Y,
                    E = K;
                  for (
                    He >= 0 &&
                      ((F = j),
                      (j = 0),
                      (Q = Q.replace('.', '')),
                      (De = new T(se)),
                      (ve = De.pow(Q.length - He)),
                      (j = F),
                      (De.c = U(we(J(ve.c), ve.e, '0'), 10, re, B)),
                      (De.e = De.c.length)),
                      xe = U(Q, se, re, me ? ((ie = Ee), B) : ((ie = B), Ee)),
                      L = F = xe.length;
                    xe[--F] == 0;
                    xe.pop()
                  );
                  if (!xe[0]) return ie.charAt(0);
                  if (
                    (He < 0
                      ? --L
                      : ((ve.c = xe),
                        (ve.e = L),
                        (ve.s = ue),
                        (ve = Ae(ve, De, rt, E, re)),
                        (xe = ve.c),
                        (te = ve.r),
                        (L = ve.e)),
                    (M = L + rt + 1),
                    (He = xe[M]),
                    (F = re / 2),
                    (te = te || M < 0 || xe[M + 1] != null),
                    (te =
                      E < 4
                        ? (He != null || te) && (E == 0 || E == (ve.s < 0 ? 3 : 2))
                        : He > F ||
                          (He == F && (E == 4 || te || (E == 6 && xe[M - 1] & 1) || E == (ve.s < 0 ? 8 : 7)))),
                    M < 1 || !xe[0])
                  )
                    Q = te ? we(ie.charAt(1), -rt, ie.charAt(0)) : ie.charAt(0);
                  else {
                    if (((xe.length = M), te))
                      for (--re; ++xe[--M] > re; ) (xe[M] = 0), M || (++L, (xe = [1].concat(xe)));
                    for (F = xe.length; !xe[--F]; );
                    for (He = 0, Q = ''; He <= F; Q += ie.charAt(xe[He++]));
                    Q = we(Q, L, ie.charAt(0));
                  }
                  return Q;
                };
              })()),
              (Ae = (function () {
                function B(se, re, ue) {
                  var me,
                    ie,
                    M,
                    L,
                    F = 0,
                    te = se.length,
                    ve = re % S,
                    xe = (re / S) | 0;
                  for (se = se.slice(); te--; )
                    (M = se[te] % S),
                      (L = (se[te] / S) | 0),
                      (me = xe * M + L * ve),
                      (ie = ve * M + (me % S) * S + F),
                      (F = ((ie / ue) | 0) + ((me / S) | 0) + xe * L),
                      (se[te] = ie % ue);
                  return F && (se = [F].concat(se)), se;
                }
                function U(se, re, ue, me) {
                  var ie, M;
                  if (ue != me) M = ue > me ? 1 : -1;
                  else
                    for (ie = M = 0; ie < ue; ie++)
                      if (se[ie] != re[ie]) {
                        M = se[ie] > re[ie] ? 1 : -1;
                        break;
                      }
                  return M;
                }
                function Q(se, re, ue, me) {
                  for (var ie = 0; ue--; )
                    (se[ue] -= ie), (ie = se[ue] < re[ue] ? 1 : 0), (se[ue] = ie * me + se[ue] - re[ue]);
                  for (; !se[0] && se.length > 1; se.splice(0, 1));
                }
                return function (se, re, ue, me, ie) {
                  var M,
                    L,
                    F,
                    te,
                    ve,
                    xe,
                    De,
                    He,
                    rt,
                    E,
                    m,
                    y,
                    V,
                    ae,
                    k,
                    q,
                    de,
                    Oe = se.s == re.s ? 1 : -1,
                    Ue = se.c,
                    qe = re.c;
                  if (!Ue || !Ue[0] || !qe || !qe[0])
                    return new T(
                      !se.s || !re.s || (Ue ? qe && Ue[0] == qe[0] : !qe)
                        ? NaN
                        : (Ue && Ue[0] == 0) || !qe
                          ? Oe * 0
                          : Oe / 0
                    );
                  for (
                    He = new T(Oe),
                      rt = He.c = [],
                      L = se.e - re.e,
                      Oe = ue + L + 1,
                      ie || ((ie = p), (L = P(se.e / g) - P(re.e / g)), (Oe = (Oe / g) | 0)),
                      F = 0;
                    qe[F] == (Ue[F] || 0);
                    F++
                  );
                  if ((qe[F] > (Ue[F] || 0) && L--, Oe < 0)) rt.push(1), (te = !0);
                  else {
                    for (
                      ae = Ue.length,
                        q = qe.length,
                        F = 0,
                        Oe += 2,
                        ve = f(ie / (qe[0] + 1)),
                        ve > 1 && ((qe = B(qe, ve, ie)), (Ue = B(Ue, ve, ie)), (q = qe.length), (ae = Ue.length)),
                        V = q,
                        E = Ue.slice(0, q),
                        m = E.length;
                      m < q;
                      E[m++] = 0
                    );
                    (de = qe.slice()), (de = [0].concat(de)), (k = qe[0]), qe[1] >= ie / 2 && k++;
                    do {
                      if (((ve = 0), (M = U(qe, E, q, m)), M < 0)) {
                        if (((y = E[0]), q != m && (y = y * ie + (E[1] || 0)), (ve = f(y / k)), ve > 1))
                          for (
                            ve >= ie && (ve = ie - 1), xe = B(qe, ve, ie), De = xe.length, m = E.length;
                            U(xe, E, De, m) == 1;

                          )
                            ve--, Q(xe, q < De ? de : qe, De, ie), (De = xe.length), (M = 1);
                        else ve == 0 && (M = ve = 1), (xe = qe.slice()), (De = xe.length);
                        if ((De < m && (xe = [0].concat(xe)), Q(E, xe, m, ie), (m = E.length), M == -1))
                          for (; U(qe, E, q, m) < 1; ) ve++, Q(E, q < m ? de : qe, m, ie), (m = E.length);
                      } else M === 0 && (ve++, (E = [0]));
                      (rt[F++] = ve), E[0] ? (E[m++] = Ue[V] || 0) : ((E = [Ue[V]]), (m = 1));
                    } while ((V++ < ae || E[0] != null) && Oe--);
                    (te = E[0] != null), rt[0] || rt.splice(0, 1);
                  }
                  if (ie == p) {
                    for (F = 1, Oe = rt[0]; Oe >= 10; Oe /= 10, F++);
                    Re(He, ue + (He.e = F + L * g - 1) + 1, me, te);
                  } else (He.e = L), (He.r = +te);
                  return He;
                };
              })());
            function je(B, U, Q, se) {
              var re, ue, me, ie, M;
              if ((Q == null ? (Q = K) : z(Q, 0, 8), !B.c)) return B.toString();
              if (((re = B.c[0]), (me = B.e), U == null))
                (M = J(B.c)), (M = se == 1 || (se == 2 && (me <= Z || me >= I)) ? ze(M, me) : we(M, me, '0'));
              else if (
                ((B = Re(new T(B), U, Q)),
                (ue = B.e),
                (M = J(B.c)),
                (ie = M.length),
                se == 1 || (se == 2 && (U <= ue || ue <= Z)))
              ) {
                for (; ie < U; M += '0', ie++);
                M = ze(M, ue);
              } else if (((U -= me), (M = we(M, ue, '0')), ue + 1 > ie)) {
                if (--U > 0) for (M += '.'; U--; M += '0');
              } else if (((U += ue - ie), U > 0)) for (ue + 1 == ie && (M += '.'); U--; M += '0');
              return B.s < 0 && re ? '-' + M : M;
            }
            function Me(B, U) {
              for (var Q, se, re = 1, ue = new T(B[0]); re < B.length; re++)
                (se = new T(B[re])), (!se.s || (Q = W(ue, se)) === U || (Q === 0 && ue.s === U)) && (ue = se);
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
              return function (ue, me, ie, M) {
                var L,
                  F = ie ? me : me.replace(re, '');
                if (se.test(F)) ue.s = isNaN(F) ? null : F < 0 ? -1 : 1;
                else {
                  if (
                    !ie &&
                    ((F = F.replace(B, function (te, ve, xe) {
                      return (L = (xe = xe.toLowerCase()) == 'x' ? 16 : xe == 'b' ? 2 : 8), !M || M == L ? ve : te;
                    })),
                    M && ((L = M), (F = F.replace(U, '$1').replace(Q, '0.$1'))),
                    me != F)
                  )
                    return new T(F, L);
                  if (T.DEBUG) throw Error(d + 'Not a' + (M ? ' base ' + M : '') + ' number: ' + me);
                  ue.s = null;
                }
                ue.c = ue.e = null;
              };
            })();
            function Re(B, U, Q, se) {
              var re,
                ue,
                me,
                ie,
                M,
                L,
                F,
                te = B.c,
                ve = v;
              if (te) {
                e: {
                  for (re = 1, ie = te[0]; ie >= 10; ie /= 10, re++);
                  if (((ue = U - re), ue < 0))
                    (ue += g), (me = U), (M = te[(L = 0)]), (F = f((M / ve[re - me - 1]) % 10));
                  else if (((L = s((ue + 1) / g)), L >= te.length))
                    if (se) {
                      for (; te.length <= L; te.push(0));
                      (M = F = 0), (re = 1), (ue %= g), (me = ue - g + 1);
                    } else break e;
                  else {
                    for (M = ie = te[L], re = 1; ie >= 10; ie /= 10, re++);
                    (ue %= g), (me = ue - g + re), (F = me < 0 ? 0 : f((M / ve[re - me - 1]) % 10));
                  }
                  if (
                    ((se = se || U < 0 || te[L + 1] != null || (me < 0 ? M : M % ve[re - me - 1])),
                    (se =
                      Q < 4
                        ? (F || se) && (Q == 0 || Q == (B.s < 0 ? 3 : 2))
                        : F > 5 ||
                          (F == 5 &&
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
                      ? ((te.length = L), (ie = 1), L--)
                      : ((te.length = L + 1),
                        (ie = ve[g - ue]),
                        (te[L] = me > 0 ? f((M / ve[re - me]) % ve[me]) * ie : 0)),
                    se)
                  )
                    for (;;)
                      if (L == 0) {
                        for (ue = 1, me = te[0]; me >= 10; me /= 10, ue++);
                        for (me = te[0] += ie, ie = 1; me >= 10; me /= 10, ie++);
                        ue != ie && (B.e++, te[0] == p && (te[0] = 1));
                        break;
                      } else {
                        if (((te[L] += ie), te[L] != p)) break;
                        (te[L--] = 0), (ie = 1);
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
                : ((U = J(B.c)), (U = Q <= Z || Q >= I ? ze(U, Q) : we(U, Q, '0')), B.s < 0 ? '-' + U : U);
            }
            return (
              (O.absoluteValue = O.abs =
                function () {
                  var B = new T(this);
                  return B.s < 0 && (B.s = 1), B;
                }),
              (O.comparedTo = function (B, U) {
                return W(this, new T(B, U));
              }),
              (O.decimalPlaces = O.dp =
                function (B, U) {
                  var Q,
                    se,
                    re,
                    ue = this;
                  if (B != null) return z(B, 0, w), U == null ? (U = K) : z(U, 0, 8), Re(new T(ue), B + ue.e + 1, U);
                  if (!(Q = ue.c)) return null;
                  if (((se = ((re = Q.length - 1) - P(this.e / g)) * g), (re = Q[re])))
                    for (; re % 10 == 0; re /= 10, se--);
                  return se < 0 && (se = 0), se;
                }),
              (O.dividedBy = O.div =
                function (B, U) {
                  return Ae(this, new T(B, U), Y, K);
                }),
              (O.dividedToIntegerBy = O.idiv =
                function (B, U) {
                  return Ae(this, new T(B, U), 0, 1);
                }),
              (O.exponentiatedBy = O.pow =
                function (B, U) {
                  var Q,
                    se,
                    re,
                    ue,
                    me,
                    ie,
                    M,
                    L,
                    F,
                    te = this;
                  if (((B = new T(B)), B.c && !B.isInteger())) throw Error(d + 'Exponent not an integer: ' + ke(B));
                  if (
                    (U != null && (U = new T(U)),
                    (ie = B.e > 14),
                    !te.c || !te.c[0] || (te.c[0] == 1 && !te.e && te.c.length == 1) || !B.c || !B.c[0])
                  )
                    return (F = new T(Math.pow(+ke(te), ie ? B.s * (2 - Se(B)) : +ke(B)))), U ? F.mod(U) : F;
                  if (((M = B.s < 0), U)) {
                    if (U.c ? !U.c[0] : !U.s) return new T(NaN);
                    (se = !M && te.isInteger() && U.isInteger()), se && (te = te.mod(U));
                  } else {
                    if (
                      B.e > 9 &&
                      (te.e > 0 ||
                        te.e < -1 ||
                        (te.e == 0
                          ? te.c[0] > 1 || (ie && te.c[1] >= 24e7)
                          : te.c[0] < 8e13 || (ie && te.c[0] <= 9999975e7)))
                    )
                      return (ue = te.s < 0 && Se(B) ? -0 : 0), te.e > -1 && (ue = 1 / ue), new T(M ? 1 / ue : ue);
                    j && (ue = s(j / g + 2));
                  }
                  for (
                    ie ? ((Q = new T(0.5)), M && (B.s = 1), (L = Se(B))) : ((re = Math.abs(+ke(B))), (L = re % 2)),
                      F = new T(G);
                    ;

                  ) {
                    if (L) {
                      if (((F = F.times(te)), !F.c)) break;
                      ue ? F.c.length > ue && (F.c.length = ue) : se && (F = F.mod(U));
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
                  return se ? F : (M && (F = G.div(F)), U ? F.mod(U) : ue ? Re(F, j, K, me) : F);
                }),
              (O.integerValue = function (B) {
                var U = new T(this);
                return B == null ? (B = K) : z(B, 0, 8), Re(U, U.e + 1, B);
              }),
              (O.isEqualTo = O.eq =
                function (B, U) {
                  return W(this, new T(B, U)) === 0;
                }),
              (O.isFinite = function () {
                return !!this.c;
              }),
              (O.isGreaterThan = O.gt =
                function (B, U) {
                  return W(this, new T(B, U)) > 0;
                }),
              (O.isGreaterThanOrEqualTo = O.gte =
                function (B, U) {
                  return (U = W(this, new T(B, U))) === 1 || U === 0;
                }),
              (O.isInteger = function () {
                return !!this.c && P(this.e / g) > this.c.length - 2;
              }),
              (O.isLessThan = O.lt =
                function (B, U) {
                  return W(this, new T(B, U)) < 0;
                }),
              (O.isLessThanOrEqualTo = O.lte =
                function (B, U) {
                  return (U = W(this, new T(B, U))) === -1 || U === 0;
                }),
              (O.isNaN = function () {
                return !this.s;
              }),
              (O.isNegative = function () {
                return this.s < 0;
              }),
              (O.isPositive = function () {
                return this.s > 0;
              }),
              (O.isZero = function () {
                return !!this.c && this.c[0] == 0;
              }),
              (O.minus = function (B, U) {
                var Q,
                  se,
                  re,
                  ue,
                  me = this,
                  ie = me.s;
                if (((B = new T(B, U)), (U = B.s), !ie || !U)) return new T(NaN);
                if (ie != U) return (B.s = -U), me.plus(B);
                var M = me.e / g,
                  L = B.e / g,
                  F = me.c,
                  te = B.c;
                if (!M || !L) {
                  if (!F || !te) return F ? ((B.s = -U), B) : new T(te ? me : NaN);
                  if (!F[0] || !te[0]) return te[0] ? ((B.s = -U), B) : new T(F[0] ? me : K == 3 ? -0 : 0);
                }
                if (((M = P(M)), (L = P(L)), (F = F.slice()), (ie = M - L))) {
                  for (
                    (ue = ie < 0) ? ((ie = -ie), (re = F)) : ((L = M), (re = te)), re.reverse(), U = ie;
                    U--;
                    re.push(0)
                  );
                  re.reverse();
                } else
                  for (se = (ue = (ie = F.length) < (U = te.length)) ? ie : U, ie = U = 0; U < se; U++)
                    if (F[U] != te[U]) {
                      ue = F[U] < te[U];
                      break;
                    }
                if (
                  (ue && ((re = F), (F = te), (te = re), (B.s = -B.s)), (U = (se = te.length) - (Q = F.length)), U > 0)
                )
                  for (; U--; F[Q++] = 0);
                for (U = p - 1; se > ie; ) {
                  if (F[--se] < te[se]) {
                    for (Q = se; Q && !F[--Q]; F[Q] = U);
                    --F[Q], (F[se] += p);
                  }
                  F[se] -= te[se];
                }
                for (; F[0] == 0; F.splice(0, 1), --L);
                return F[0] ? Pe(B, F, L) : ((B.s = K == 3 ? -1 : 1), (B.c = [(B.e = 0)]), B);
              }),
              (O.modulo = O.mod =
                function (B, U) {
                  var Q,
                    se,
                    re = this;
                  return (
                    (B = new T(B, U)),
                    !re.c || !B.s || (B.c && !B.c[0])
                      ? new T(NaN)
                      : !B.c || (re.c && !re.c[0])
                        ? new T(re)
                        : (oe == 9
                            ? ((se = B.s), (B.s = 1), (Q = Ae(re, B, 0, 3)), (B.s = se), (Q.s *= se))
                            : (Q = Ae(re, B, 0, oe)),
                          (B = re.minus(Q.times(B))),
                          !B.c[0] && oe == 1 && (B.s = re.s),
                          B)
                  );
                }),
              (O.multipliedBy = O.times =
                function (B, U) {
                  var Q,
                    se,
                    re,
                    ue,
                    me,
                    ie,
                    M,
                    L,
                    F,
                    te,
                    ve,
                    xe,
                    De,
                    He,
                    rt,
                    E = this,
                    m = E.c,
                    y = (B = new T(B, U)).c;
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
                  for (He = p, rt = S, re = te; --re >= 0; ) {
                    for (Q = 0, ve = y[re] % rt, xe = (y[re] / rt) | 0, me = M, ue = re + me; ue > re; )
                      (L = m[--me] % rt),
                        (F = (m[me] / rt) | 0),
                        (ie = xe * L + F * ve),
                        (L = ve * L + (ie % rt) * rt + De[ue] + Q),
                        (Q = ((L / He) | 0) + ((ie / rt) | 0) + xe * F),
                        (De[ue--] = L % He);
                    De[ue] = Q;
                  }
                  return Q ? ++se : De.splice(0, 1), Pe(B, De, se);
                }),
              (O.negated = function () {
                var B = new T(this);
                return (B.s = -B.s || null), B;
              }),
              (O.plus = function (B, U) {
                var Q,
                  se = this,
                  re = se.s;
                if (((B = new T(B, U)), (U = B.s), !re || !U)) return new T(NaN);
                if (re != U) return (B.s = -U), se.minus(B);
                var ue = se.e / g,
                  me = B.e / g,
                  ie = se.c,
                  M = B.c;
                if (!ue || !me) {
                  if (!ie || !M) return new T(re / 0);
                  if (!ie[0] || !M[0]) return M[0] ? B : new T(ie[0] ? se : re * 0);
                }
                if (((ue = P(ue)), (me = P(me)), (ie = ie.slice()), (re = ue - me))) {
                  for (re > 0 ? ((me = ue), (Q = M)) : ((re = -re), (Q = ie)), Q.reverse(); re--; Q.push(0));
                  Q.reverse();
                }
                for (re = ie.length, U = M.length, re - U < 0 && ((Q = M), (M = ie), (ie = Q), (U = re)), re = 0; U; )
                  (re = ((ie[--U] = ie[U] + M[U] + re) / p) | 0), (ie[U] = p === ie[U] ? 0 : ie[U] % p);
                return re && ((ie = [re].concat(ie)), ++me), Pe(B, ie, me);
              }),
              (O.precision = O.sd =
                function (B, U) {
                  var Q,
                    se,
                    re,
                    ue = this;
                  if (B != null && B !== !!B) return z(B, 1, w), U == null ? (U = K) : z(U, 0, 8), Re(new T(ue), B, U);
                  if (!(Q = ue.c)) return null;
                  if (((re = Q.length - 1), (se = re * g + 1), (re = Q[re]))) {
                    for (; re % 10 == 0; re /= 10, se--);
                    for (re = Q[0]; re >= 10; re /= 10, se++);
                  }
                  return B && ue.e + 1 > se && (se = ue.e + 1), se;
                }),
              (O.shiftedBy = function (B) {
                return z(B, -9007199254740991, N), this.times('1e' + B);
              }),
              (O.squareRoot = O.sqrt =
                function () {
                  var B,
                    U,
                    Q,
                    se,
                    re,
                    ue = this,
                    me = ue.c,
                    ie = ue.s,
                    M = ue.e,
                    L = Y + 4,
                    F = new T('0.5');
                  if (ie !== 1 || !me || !me[0])
                    return new T(!ie || (ie < 0 && (!me || me[0])) ? NaN : me ? ue : 1 / 0);
                  if (
                    ((ie = Math.sqrt(+ke(ue))),
                    ie == 0 || ie == 1 / 0
                      ? ((U = J(me)),
                        (U.length + M) % 2 == 0 && (U += '0'),
                        (ie = Math.sqrt(+U)),
                        (M = P((M + 1) / 2) - (M < 0 || M % 2)),
                        ie == 1 / 0
                          ? (U = '5e' + M)
                          : ((U = ie.toExponential()), (U = U.slice(0, U.indexOf('e') + 1) + M)),
                        (Q = new T(U)))
                      : (Q = new T(ie + '')),
                    Q.c[0])
                  ) {
                    for (M = Q.e, ie = M + L, ie < 3 && (ie = 0); ; )
                      if (
                        ((re = Q),
                        (Q = F.times(re.plus(Ae(ue, re, L, 1)))),
                        J(re.c).slice(0, ie) === (U = J(Q.c)).slice(0, ie))
                      )
                        if ((Q.e < M && --ie, (U = U.slice(ie - 3, ie + 1)), U == '9999' || (!se && U == '4999'))) {
                          if (!se && (Re(re, re.e + Y + 2, 0), re.times(re).eq(ue))) {
                            Q = re;
                            break;
                          }
                          (L += 4), (ie += 4), (se = 1);
                        } else {
                          (!+U || (!+U.slice(1) && U.charAt(0) == '5')) &&
                            (Re(Q, Q.e + Y + 2, 1), (B = !Q.times(Q).eq(ue)));
                          break;
                        }
                  }
                  return Re(Q, Q.e + Y + 1, K, B);
                }),
              (O.toExponential = function (B, U) {
                return B != null && (z(B, 0, w), B++), je(this, B, U, 1);
              }),
              (O.toFixed = function (B, U) {
                return B != null && (z(B, 0, w), (B = B + this.e + 1)), je(this, B, U);
              }),
              (O.toFormat = function (B, U, Q) {
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
                    ie = +Q.groupSize,
                    M = +Q.secondaryGroupSize,
                    L = Q.groupSeparator || '',
                    F = me[0],
                    te = me[1],
                    ve = re.s < 0,
                    xe = ve ? F.slice(1) : F,
                    De = xe.length;
                  if ((M && ((ue = ie), (ie = M), (M = ue), (De -= ue)), ie > 0 && De > 0)) {
                    for (ue = De % ie || ie, F = xe.substr(0, ue); ue < De; ue += ie) F += L + xe.substr(ue, ie);
                    M > 0 && (F += L + xe.slice(ue)), ve && (F = '-' + F);
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
              (O.toFraction = function (B) {
                var U,
                  Q,
                  se,
                  re,
                  ue,
                  me,
                  ie,
                  M,
                  L,
                  F,
                  te,
                  ve,
                  xe = this,
                  De = xe.c;
                if (B != null && ((ie = new T(B)), (!ie.isInteger() && (ie.c || ie.s !== 1)) || ie.lt(G)))
                  throw Error(d + 'Argument ' + (ie.isInteger() ? 'out of range: ' : 'not an integer: ') + ke(ie));
                if (!De) return new T(xe);
                for (
                  U = new T(G),
                    L = Q = new T(G),
                    se = M = new T(G),
                    ve = J(De),
                    ue = U.e = ve.length - xe.e - 1,
                    U.c[0] = v[(me = ue % g) < 0 ? g + me : me],
                    B = !B || ie.comparedTo(U) > 0 ? (ue > 0 ? U : L) : ie,
                    me = $,
                    $ = 1 / 0,
                    ie = new T(ve),
                    M.c[0] = 0;
                  (F = Ae(ie, U, 0, 1)), (re = Q.plus(F.times(se))), re.comparedTo(B) != 1;

                )
                  (Q = se),
                    (se = re),
                    (L = M.plus(F.times((re = L)))),
                    (M = re),
                    (U = ie.minus(F.times((re = U)))),
                    (ie = re);
                return (
                  (re = Ae(B.minus(Q), se, 0, 1)),
                  (M = M.plus(re.times(L))),
                  (Q = Q.plus(re.times(se))),
                  (M.s = L.s = xe.s),
                  (ue = ue * 2),
                  (te =
                    Ae(L, se, ue, K)
                      .minus(xe)
                      .abs()
                      .comparedTo(Ae(M, Q, ue, K).minus(xe).abs()) < 1
                      ? [L, se]
                      : [M, Q]),
                  ($ = me),
                  te
                );
              }),
              (O.toNumber = function () {
                return +ke(this);
              }),
              (O.toPrecision = function (B, U) {
                return B != null && z(B, 1, w), je(this, B, U, 2);
              }),
              (O.toString = function (B) {
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
                        ? (U = re <= Z || re >= I ? ze(J(Q.c), re) : we(J(Q.c), re, '0'))
                        : B === 10 && ye
                          ? ((Q = Re(new T(Q), Y + re + 1, K)), (U = we(J(Q.c), Q.e, '0')))
                          : (z(B, 2, Ee.length, 'Base'), (U = b(we(J(Q.c), re, '0'), 10, B, se, !0))),
                      se < 0 && Q.c[0] && (U = '-' + U)),
                  U
                );
              }),
              (O.valueOf = O.toJSON =
                function () {
                  return ke(this);
                }),
              (O._isBigNumber = !0),
              he != null && T.set(he),
              T
            );
          }
          function P(he) {
            var Ae = he | 0;
            return he > 0 || he === Ae ? Ae : Ae - 1;
          }
          function J(he) {
            for (var Ae, b, A = 1, O = he.length, G = he[0] + ''; A < O; ) {
              for (Ae = he[A++] + '', b = g - Ae.length; b--; Ae = '0' + Ae);
              G += Ae;
            }
            for (O = G.length; G.charCodeAt(--O) === 48; );
            return G.slice(0, O + 1 || 1);
          }
          function W(he, Ae) {
            var b,
              A,
              O = he.c,
              G = Ae.c,
              Y = he.s,
              K = Ae.s,
              Z = he.e,
              I = Ae.e;
            if (!Y || !K) return null;
            if (((b = O && !O[0]), (A = G && !G[0]), b || A)) return b ? (A ? 0 : -K) : Y;
            if (Y != K) return Y;
            if (((b = Y < 0), (A = Z == I), !O || !G)) return A ? 0 : !O ^ b ? 1 : -1;
            if (!A) return (Z > I) ^ b ? 1 : -1;
            for (K = (Z = O.length) < (I = G.length) ? Z : I, Y = 0; Y < K; Y++)
              if (O[Y] != G[Y]) return (O[Y] > G[Y]) ^ b ? 1 : -1;
            return Z == I ? 0 : (Z > I) ^ b ? 1 : -1;
          }
          function z(he, Ae, b, A) {
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
          function ze(he, Ae) {
            return (he.length > 1 ? he.charAt(0) + '.' + he.slice(1) : he) + (Ae < 0 ? 'e' : 'e+') + Ae;
          }
          function we(he, Ae, b) {
            var A, O;
            if (Ae < 0) {
              for (O = b + '.'; ++Ae; O += b);
              he = O + he;
            } else if (((A = he.length), ++Ae > A)) {
              for (O = b, Ae -= A; --Ae; O += b);
              he += O;
            } else Ae < A && (he = he.slice(0, Ae) + '.' + he.slice(Ae));
            return he;
          }
          (i = D()),
            (i.default = i.BigNumber = i),
            r.exports
              ? (r.exports = i)
              : (a || (a = typeof globalThis < 'u' && globalThis ? globalThis : window), (a.BigNumber = i));
        })(rx);
      })(qs)),
    qs.exports
  );
}
var kf, Mp;
function nx() {
  return (
    Mp ||
      ((Mp = 1),
      (kf = function (a, i, u) {
        var s = new a.Uint8Array(u),
          f = i.pushInt,
          d = i.pushInt32,
          h = i.pushInt32Neg,
          p = i.pushInt64,
          g = i.pushInt64Neg,
          N = i.pushFloat,
          v = i.pushFloatSingle,
          S = i.pushFloatDouble,
          w = i.pushTrue,
          D = i.pushFalse,
          P = i.pushUndefined,
          J = i.pushNull,
          W = i.pushInfinity,
          z = i.pushInfinityNeg,
          Se = i.pushNaN,
          ze = i.pushNaNNeg,
          we = i.pushArrayStart,
          he = i.pushArrayStartFixed,
          Ae = i.pushArrayStartFixed32,
          b = i.pushArrayStartFixed64,
          A = i.pushObjectStart,
          O = i.pushObjectStartFixed,
          G = i.pushObjectStartFixed32,
          Y = i.pushObjectStartFixed64,
          K = i.pushByteString,
          Z = i.pushByteStringStart,
          I = i.pushUtf8String,
          R = i.pushUtf8StringStart,
          $ = i.pushSimpleUnassigned,
          H = i.pushTagStart,
          oe = i.pushTagStart4,
          j = i.pushTagStart8,
          ne = i.pushTagUnassigned,
          Ee = i.pushBreak,
          ye = a.Math.pow,
          T = 0,
          je = 0,
          Me = 0;
        function Pe(ee) {
          for (
            ee = ee | 0, T = 0, je = ee;
            (T | 0) < (je | 0) && ((Me = Ra[s[T] & 255](s[T] | 0) | 0), !((Me | 0) > 0));

          );
          return Me | 0;
        }
        function Re(ee) {
          return (ee = ee | 0), (((T | 0) + (ee | 0)) | 0) < (je | 0) ? 0 : 1;
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
          return (ee = ee | 0), f(ee | 0), (T = (T + 1) | 0), 0;
        }
        function Q(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (f(s[(T + 1) | 0] | 0), (T = (T + 2) | 0), 0);
        }
        function se(ee) {
          return (ee = ee | 0), Re(2) | 0 ? 1 : (f(ke((T + 1) | 0) | 0), (T = (T + 3) | 0), 0);
        }
        function re(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (d(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0), (T = (T + 5) | 0), 0);
        }
        function ue(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (p(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0, ke((T + 5) | 0) | 0, ke((T + 7) | 0) | 0),
                (T = (T + 9) | 0),
                0)
          );
        }
        function me(ee) {
          return (ee = ee | 0), f((-1 - ((ee - 32) | 0)) | 0), (T = (T + 1) | 0), 0;
        }
        function ie(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (f((-1 - (s[(T + 1) | 0] | 0)) | 0), (T = (T + 2) | 0), 0);
        }
        function M(ee) {
          ee = ee | 0;
          var Je = 0;
          return Re(2) | 0 ? 1 : ((Je = ke((T + 1) | 0) | 0), f((-1 - (Je | 0)) | 0), (T = (T + 3) | 0), 0);
        }
        function L(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (h(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0), (T = (T + 5) | 0), 0);
        }
        function F(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (g(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0, ke((T + 5) | 0) | 0, ke((T + 7) | 0) | 0),
                (T = (T + 9) | 0),
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
              : ((Je = (T + 1) | 0), (ht = (((T + 1) | 0) + (st | 0)) | 0), K(Je | 0, ht | 0), (T = ht | 0), 0)
          );
        }
        function ve(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(1) | 0 ||
            ((st = s[(T + 1) | 0] | 0), (Je = (T + 2) | 0), (ht = (((T + 2) | 0) + (st | 0)) | 0), Re((st + 1) | 0) | 0)
            ? 1
            : (K(Je | 0, ht | 0), (T = ht | 0), 0);
        }
        function xe(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(2) | 0 ||
            ((st = ke((T + 1) | 0) | 0),
            (Je = (T + 3) | 0),
            (ht = (((T + 3) | 0) + (st | 0)) | 0),
            Re((st + 2) | 0) | 0)
            ? 1
            : (K(Je | 0, ht | 0), (T = ht | 0), 0);
        }
        function De(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(4) | 0 ||
            ((st = B((T + 1) | 0) | 0), (Je = (T + 5) | 0), (ht = (((T + 5) | 0) + (st | 0)) | 0), Re((st + 4) | 0) | 0)
            ? 1
            : (K(Je | 0, ht | 0), (T = ht | 0), 0);
        }
        function He(ee) {
          return (ee = ee | 0), 1;
        }
        function rt(ee) {
          return (ee = ee | 0), Z(), (T = (T + 1) | 0), 0;
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
              : ((Je = (T + 1) | 0), (ht = (((T + 1) | 0) + (st | 0)) | 0), I(Je | 0, ht | 0), (T = ht | 0), 0)
          );
        }
        function m(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(1) | 0 ||
            ((st = s[(T + 1) | 0] | 0), (Je = (T + 2) | 0), (ht = (((T + 2) | 0) + (st | 0)) | 0), Re((st + 1) | 0) | 0)
            ? 1
            : (I(Je | 0, ht | 0), (T = ht | 0), 0);
        }
        function y(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(2) | 0 ||
            ((st = ke((T + 1) | 0) | 0),
            (Je = (T + 3) | 0),
            (ht = (((T + 3) | 0) + (st | 0)) | 0),
            Re((st + 2) | 0) | 0)
            ? 1
            : (I(Je | 0, ht | 0), (T = ht | 0), 0);
        }
        function V(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 0;
          return Re(4) | 0 ||
            ((st = B((T + 1) | 0) | 0), (Je = (T + 5) | 0), (ht = (((T + 5) | 0) + (st | 0)) | 0), Re((st + 4) | 0) | 0)
            ? 1
            : (I(Je | 0, ht | 0), (T = ht | 0), 0);
        }
        function ae(ee) {
          return (ee = ee | 0), 1;
        }
        function k(ee) {
          return (ee = ee | 0), R(), (T = (T + 1) | 0), 0;
        }
        function q(ee) {
          return (ee = ee | 0), he((ee - 128) | 0), (T = (T + 1) | 0), 0;
        }
        function de(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (he(s[(T + 1) | 0] | 0), (T = (T + 2) | 0), 0);
        }
        function Oe(ee) {
          return (ee = ee | 0), Re(2) | 0 ? 1 : (he(ke((T + 1) | 0) | 0), (T = (T + 3) | 0), 0);
        }
        function Ue(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (Ae(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0), (T = (T + 5) | 0), 0);
        }
        function qe(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (b(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0, ke((T + 5) | 0) | 0, ke((T + 7) | 0) | 0),
                (T = (T + 9) | 0),
                0)
          );
        }
        function et(ee) {
          return (ee = ee | 0), we(), (T = (T + 1) | 0), 0;
        }
        function Ke(ee) {
          ee = ee | 0;
          var Je = 0;
          return (Je = (ee - 160) | 0), Re(Je | 0) | 0 ? 1 : (O(Je | 0), (T = (T + 1) | 0), 0);
        }
        function Fe(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (O(s[(T + 1) | 0] | 0), (T = (T + 2) | 0), 0);
        }
        function Ve(ee) {
          return (ee = ee | 0), Re(2) | 0 ? 1 : (O(ke((T + 1) | 0) | 0), (T = (T + 3) | 0), 0);
        }
        function Ge(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (G(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0), (T = (T + 5) | 0), 0);
        }
        function $e(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (Y(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0, ke((T + 5) | 0) | 0, ke((T + 7) | 0) | 0),
                (T = (T + 9) | 0),
                0)
          );
        }
        function at(ee) {
          return (ee = ee | 0), A(), (T = (T + 1) | 0), 0;
        }
        function ot(ee) {
          return (ee = ee | 0), H((ee - 192) | 0 | 0), (T = (T + 1) | 0), 0;
        }
        function Ut(ee) {
          return (ee = ee | 0), H(ee | 0), (T = (T + 1) | 0), 0;
        }
        function mr(ee) {
          return (ee = ee | 0), H(ee | 0), (T = (T + 1) | 0), 0;
        }
        function si(ee) {
          return (ee = ee | 0), H(ee | 0), (T = (T + 1) | 0), 0;
        }
        function ci(ee) {
          return (ee = ee | 0), H(ee | 0), (T = (T + 1) | 0), 0;
        }
        function Tt(ee) {
          return (ee = ee | 0), H((ee - 192) | 0 | 0), (T = (T + 1) | 0), 0;
        }
        function Cd(ee) {
          return (ee = ee | 0), H(ee | 0), (T = (T + 1) | 0), 0;
        }
        function mc(ee) {
          return (ee = ee | 0), H(ee | 0), (T = (T + 1) | 0), 0;
        }
        function pc(ee) {
          return (ee = ee | 0), H(ee | 0), (T = (T + 1) | 0), 0;
        }
        function vu(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : (H(s[(T + 1) | 0] | 0), (T = (T + 2) | 0), 0);
        }
        function bu(ee) {
          return (ee = ee | 0), Re(2) | 0 ? 1 : (H(ke((T + 1) | 0) | 0), (T = (T + 3) | 0), 0);
        }
        function gc(ee) {
          return (ee = ee | 0), Re(4) | 0 ? 1 : (oe(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0), (T = (T + 5) | 0), 0);
        }
        function fn(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (j(ke((T + 1) | 0) | 0, ke((T + 3) | 0) | 0, ke((T + 5) | 0) | 0, ke((T + 7) | 0) | 0),
                (T = (T + 9) | 0),
                0)
          );
        }
        function dt(ee) {
          return (ee = ee | 0), $(((ee | 0) - 224) | 0), (T = (T + 1) | 0), 0;
        }
        function lr(ee) {
          return (ee = ee | 0), D(), (T = (T + 1) | 0), 0;
        }
        function Pn(ee) {
          return (ee = ee | 0), w(), (T = (T + 1) | 0), 0;
        }
        function Xi(ee) {
          return (ee = ee | 0), J(), (T = (T + 1) | 0), 0;
        }
        function yc(ee) {
          return (ee = ee | 0), P(), (T = (T + 1) | 0), 0;
        }
        function vc(ee) {
          return (ee = ee | 0), Re(1) | 0 ? 1 : ($(s[(T + 1) | 0] | 0), (T = (T + 2) | 0), 0);
        }
        function Su(ee) {
          ee = ee | 0;
          var Je = 0,
            ht = 0,
            st = 1,
            kr = 0,
            Ir = 0,
            dn = 0;
          return Re(2) | 0
            ? 1
            : ((Je = s[(T + 1) | 0] | 0),
              (ht = s[(T + 2) | 0] | 0),
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
                      ? ze()
                      : z()
                  : N(+(+st * ye(2, +(+kr - 25)) * +(1024 + Ir))),
              (T = (T + 3) | 0),
              0);
        }
        function Ma(ee) {
          return (
            (ee = ee | 0),
            Re(4) | 0
              ? 1
              : (v(s[(T + 1) | 0] | 0, s[(T + 2) | 0] | 0, s[(T + 3) | 0] | 0, s[(T + 4) | 0] | 0),
                (T = (T + 5) | 0),
                0)
          );
        }
        function Zi(ee) {
          return (
            (ee = ee | 0),
            Re(8) | 0
              ? 1
              : (S(
                  s[(T + 1) | 0] | 0,
                  s[(T + 2) | 0] | 0,
                  s[(T + 3) | 0] | 0,
                  s[(T + 4) | 0] | 0,
                  s[(T + 5) | 0] | 0,
                  s[(T + 6) | 0] | 0,
                  s[(T + 7) | 0] | 0,
                  s[(T + 8) | 0] | 0
                ),
                (T = (T + 9) | 0),
                0)
          );
        }
        function pt(ee) {
          return (ee = ee | 0), 1;
        }
        function Jn(ee) {
          return (ee = ee | 0), Ee(), (T = (T + 1) | 0), 0;
        }
        var Ra = [
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
          ie,
          M,
          L,
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
          ve,
          xe,
          De,
          He,
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
          V,
          ae,
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
          Oe,
          Ue,
          qe,
          pt,
          pt,
          pt,
          et,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Ke,
          Fe,
          Ve,
          Ge,
          $e,
          pt,
          pt,
          pt,
          at,
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
          vu,
          bu,
          gc,
          fn,
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
          Pn,
          Xi,
          yc,
          vc,
          Su,
          Ma,
          Zi,
          pt,
          pt,
          pt,
          Jn
        ];
        return { parse: Pe };
      })),
    kf
  );
}
var If = {},
  xr = {},
  Rp;
function uc() {
  if (Rp) return xr;
  Rp = 1;
  const r = lc().BigNumber;
  return (
    (xr.MT = { POS_INT: 0, NEG_INT: 1, BYTE_STRING: 2, UTF8_STRING: 3, ARRAY: 4, MAP: 5, TAG: 6, SIMPLE_FLOAT: 7 }),
    (xr.TAG = {
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
    (xr.NUMBYTES = { ZERO: 0, ONE: 24, TWO: 25, FOUR: 26, EIGHT: 27, INDEFINITE: 31 }),
    (xr.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 }),
    (xr.SYMS = {
      NULL: Symbol('null'),
      UNDEFINED: Symbol('undef'),
      PARENT: Symbol('parent'),
      BREAK: Symbol('break'),
      STREAM: Symbol('stream')
    }),
    (xr.SHIFT32 = Math.pow(2, 32)),
    (xr.SHIFT16 = Math.pow(2, 16)),
    (xr.MAX_SAFE_HIGH = 2097151),
    (xr.NEG_ONE = new r(-1)),
    (xr.TEN = new r(10)),
    (xr.TWO = new r(2)),
    (xr.PARENT = { ARRAY: 0, OBJECT: 1, MAP: 2, TAG: 3, BYTE_STRING: 4, UTF8_STRING: 5 }),
    xr
  );
}
var Bp;
function xd() {
  return (
    Bp ||
      ((Bp = 1),
      (function (r) {
        const { Buffer: a } = su(),
          i = lc().BigNumber,
          u = uc(),
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
          return new i(N, 16);
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
            return S > d ? new i(S).times(s).plus(w) : S * s + w;
          }),
          (r.writeHalf = function (g, N) {
            const v = a.allocUnsafe(4);
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
      })(If)),
    If
  );
}
var qf, Cp;
function Qg() {
  if (Cp) return qf;
  Cp = 1;
  const r = uc(),
    a = r.MT,
    i = r.SIMPLE,
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
      return d._pushInt(this.value, a.SIMPLE_FLOAT);
    }
    static isSimple(d) {
      return d instanceof s;
    }
    static decode(d, h) {
      switch ((h == null && (h = !0), d)) {
        case i.FALSE:
          return !1;
        case i.TRUE:
          return !0;
        case i.NULL:
          return h ? null : u.NULL;
        case i.UNDEFINED:
          return h ? void 0 : u.UNDEFINED;
        case -1:
          if (!h) throw new Error('Invalid BREAK');
          return u.BREAK;
        default:
          return new s(d);
      }
    }
  }
  return (qf = s), qf;
}
var Lf, Dp;
function Pg() {
  if (Dp) return Lf;
  Dp = 1;
  class r {
    constructor(i, u, s) {
      if (((this.tag = i), (this.value = u), (this.err = s), typeof this.tag != 'number'))
        throw new Error('Invalid tag type (' + typeof this.tag + ')');
      if (this.tag < 0 || (this.tag | 0) !== this.tag) throw new Error('Tag must be a positive integer: ' + this.tag);
    }
    toString() {
      return `${this.tag}(${JSON.stringify(this.value)})`;
    }
    encodeCBOR(i) {
      return i._pushTag(this.tag), i.pushAny(this.value);
    }
    convert(i) {
      let u, s;
      if (
        ((s = i != null ? i[this.tag] : void 0),
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
  return (Lf = r), Lf;
}
var zf, Up;
function Jg() {
  if (Up) return zf;
  Up = 1;
  const r = typeof navigator < 'u' && navigator.product === 'ReactNative';
  function a() {
    return r
      ? 'http://localhost'
      : globalThis.location
        ? globalThis.location.protocol + '//' + globalThis.location.host
        : '';
  }
  const i = globalThis.URL,
    u = a();
  class s {
    constructor(h = '', p = u) {
      (this.super = new i(h, p)),
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
      return i.createObjectURL(h);
    }
    static revokeObjectURL(h) {
      i.revokeObjectURL(h);
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
    if (typeof d == 'string') return new i(d).toString();
    if (!(d instanceof i)) {
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
  return (zf = { URLWithLegacySupport: s, URLSearchParams: globalThis.URLSearchParams, defaultBase: u, format: f }), zf;
}
var Hf, jp;
function ax() {
  if (jp) return Hf;
  jp = 1;
  const { URLWithLegacySupport: r, format: a } = Jg();
  return (
    (Hf = (i, u = {}, s = {}, f) => {
      let d = u.protocol ? u.protocol.replace(':', '') : 'http';
      d = (s[d] || f || d) + ':';
      let h;
      try {
        h = new r(i);
      } catch {
        h = {};
      }
      const p = Object.assign({}, u, { protocol: d || h.protocol, host: u.host || h.host });
      return new r(i, a(p)).toString();
    }),
    Hf
  );
}
var Ff, kp;
function Wg() {
  if (kp) return Ff;
  kp = 1;
  const { URLWithLegacySupport: r, format: a, URLSearchParams: i, defaultBase: u } = Jg(),
    s = ax();
  return (Ff = { URL: r, URLSearchParams: i, format: a, relative: s, defaultBase: u }), Ff;
}
var Vf, Ip;
function ey() {
  if (Ip) return Vf;
  Ip = 1;
  const { Buffer: r } = su(),
    a = Zg(),
    i = lc().BigNumber,
    u = nx(),
    s = xd(),
    f = uc(),
    d = Qg(),
    h = Pg(),
    { URL: p } = Wg();
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
          ed,
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
      return a.read([v, S, w, D], 0, !1, 23, 4);
    }
    createFloatDouble(v, S, w, D, P, J, W, z) {
      return a.read([v, S, w, D, P, J, W, z], 0, !1, 52, 8);
    }
    createInt32Neg(v, S) {
      return -1 - s.buildInt32(v, S);
    }
    createInt64Neg(v, S, w, D) {
      const P = s.buildInt32(v, S),
        J = s.buildInt32(w, D);
      return P > f.MAX_SAFE_HIGH ? f.NEG_ONE.minus(new i(P).times(f.SHIFT32).plus(J)) : -1 - (P * f.SHIFT32 + J);
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
    pushFloatDouble(v, S, w, D, P, J, W, z) {
      this._push(this.createFloatDouble(v, S, w, D, P, J, W, z));
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
  return (g.decodeFirst = g.decode), (Vf = g), Vf;
}
var Gf, qp;
function ix() {
  if (qp) return Gf;
  qp = 1;
  const { Buffer: r } = su(),
    a = ey(),
    i = xd();
  class u extends a {
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
      return i.isNegativeZero(d) ? '-0_1' : `${h}_1`;
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
  Gf = u;
  function s(f) {
    return (d, h) => (d ? `${d}, ${h}: ${f[h]}` : `${h}: ${f[h]}`);
  }
  return Gf;
}
var $f, Lp;
function lx() {
  if (Lp) return $f;
  Lp = 1;
  const { Buffer: r } = su(),
    { URL: a } = Wg(),
    i = lc().BigNumber,
    u = xd(),
    s = uc(),
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
    W = new i('0x20000000000000'),
    z = r.from('f97e00', 'hex'),
    Se = r.from('f9fc00', 'hex'),
    ze = r.from('f97c00', 'hex');
  function we(Ae) {
    return {}.toString.call(Ae).slice(8, -1);
  }
  class he {
    constructor(b) {
      (b = b || {}),
        (this.streaming = typeof b.stream == 'function'),
        (this.onData = b.stream),
        (this.semanticTypes = [
          [a, this._pushUrl],
          [i, this._pushBigNumber]
        ]);
      const A = b.genTypes || [],
        O = A.length;
      for (let G = 0; G < O; G++) this.addSemanticType(A[G][0], A[G][1]);
      this._reset();
    }
    addSemanticType(b, A) {
      const O = this.semanticTypes.length;
      for (let G = 0; G < O; G++)
        if (this.semanticTypes[G][0] === b) {
          const K = this.semanticTypes[G][1];
          return (this.semanticTypes[G][1] = A), K;
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
    pushWrite(b, A, O) {
      return (
        (this.result[this.offset] = b),
        (this.resultMethod[this.offset] = A),
        (this.resultLength[this.offset] = O),
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
      return this.push(z);
    }
    _pushInfinity(b) {
      const A = b < 0 ? Se : ze;
      return this.push(A);
    }
    _pushFloat(b) {
      const A = r.allocUnsafe(2);
      if (u.writeHalf(A, b) && u.parseHalf(A) === b) return this._pushUInt8(N) && this.push(A);
      const O = r.allocUnsafe(4);
      return (
        O.writeFloatBE(b, 0),
        O.readFloatBE(0) === b ? this._pushUInt8(v) && this.push(O) : this._pushUInt8(S) && this._pushDoubleBE(b)
      );
    }
    _pushInt(b, A, O) {
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
                  ? this._pushFloat(O)
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
      const O = A.length;
      if (!b._pushInt(O, f.ARRAY)) return !1;
      for (let G = 0; G < O; G++) if (!b.pushAny(A[G])) return !1;
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
      for (const O of A) if (!b.pushAny(O)) return !1;
      return !0;
    }
    _pushUrl(b, A) {
      return b._pushTag(g.URI) && b.pushAny(A.format());
    }
    _pushBigint(b) {
      let A = g.POS_BIGINT;
      b.isNegative() && ((b = b.negated().minus(1)), (A = g.NEG_BIGINT));
      let O = b.toString(16);
      O.length % 2 && (O = '0' + O);
      const G = r.from(O, 'hex');
      return this._pushTag(A) && this._pushBuffer(this, G);
    }
    _pushBigNumber(b, A) {
      if (A.isNaN()) return b._pushNaN();
      if (!A.isFinite()) return b._pushInfinity(A.isNegative() ? -1 / 0 : 1 / 0);
      if (A.isInteger()) return b._pushBigint(A);
      if (!(b._pushTag(g.DECIMAL_FRAC) && b._pushInt(2, f.ARRAY))) return !1;
      const O = A.decimalPlaces(),
        G = A.multipliedBy(new i(10).pow(O));
      return b._pushIntNum(-O) ? (G.abs().isLessThan(W) ? b._pushIntNum(G.toNumber()) : b._pushBigint(G)) : !1;
    }
    _pushMap(b, A) {
      return b._pushInt(A.size, f.MAP) ? this._pushRawMap(A.size, Array.from(A)) : !1;
    }
    _pushObject(b) {
      if (!b) return this._pushUInt8(J);
      const A = this.semanticTypes.length;
      for (let K = 0; K < A; K++)
        if (b instanceof this.semanticTypes[K][0]) return this.semanticTypes[K][1].call(b, this, b);
      const O = b.encodeCBOR;
      if (typeof O == 'function') return O.call(b, this);
      const G = Object.keys(b),
        Y = G.length;
      return this._pushInt(Y, f.MAP)
        ? this._pushRawMap(
            Y,
            G.map((K) => [K, b[K]])
          )
        : !1;
    }
    _pushRawMap(b, A) {
      A = A.map(function (O) {
        return (O[0] = he.encode(O[0])), O;
      }).sort(u.keySorter);
      for (let O = 0; O < b; O++) if (!this.push(A[O][0]) || !this.pushAny(A[O][1])) return !1;
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
        O = this.resultMethod,
        G = this.offset;
      let Y = 0,
        K = 0;
      for (; K < G; K++) Y += A[K];
      const Z = r.allocUnsafe(Y);
      let I = 0,
        R = 0;
      for (K = 0; K < G; K++) {
        switch (((R = A[K]), O[K])) {
          case 0:
            b[K].copy(Z, I);
            break;
          case 1:
            Z.writeUInt8(b[K], I, !0);
            break;
          case 2:
            Z.writeUInt16BE(b[K], I, !0);
            break;
          case 3:
            Z.writeUInt32BE(b[K], I, !0);
            break;
          case 4:
            Z.writeDoubleBE(b[K], I, !0);
            break;
          case 5:
            Z.write(b[K], I, R, 'utf8');
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
  return ($f = he), $f;
}
var zp;
function ux() {
  return (
    zp ||
      ((zp = 1),
      (function (r) {
        (r.Diagnose = ix()),
          (r.Decoder = ey()),
          (r.Encoder = lx()),
          (r.Simple = Qg()),
          (r.Tagged = Pg()),
          (r.decodeAll = r.Decoder.decodeAll),
          (r.decodeFirst = r.Decoder.decodeFirst),
          (r.diagnose = r.Diagnose.diagnose),
          (r.encode = r.Encoder.encode),
          (r.decode = r.Decoder.decode),
          (r.leveldb = { decode: r.Decoder.decodeAll, encode: r.Encoder.encode, buffer: !0, name: 'cbor' });
      })(Uf)),
    Uf
  );
}
var sx = ux();
const ty = au(sx);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ const wd = 2n ** 256n,
  ei = wd - 0x1000003d1n,
  vr = wd - 0x14551231950b75fc4402da1732fc9bebfn,
  cx = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,
  ox = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,
  ry = { a: 0n, b: 7n },
  Tr = 32,
  Hp = (r) => Ye(Ye(r * r) * r + ry.b),
  Bt = (r = '') => {
    throw new Error(r);
  },
  sc = (r) => typeof r == 'bigint',
  ny = (r) => typeof r == 'string',
  Yf = (r) => sc(r) && 0n < r && r < ei,
  nu = (r) => sc(r) && 0n < r && r < vr,
  fx = (r) => r instanceof Uint8Array || (ArrayBuffer.isView(r) && r.constructor.name === 'Uint8Array'),
  Xs = (r, a) => (!fx(r) || (typeof a == 'number' && a > 0 && r.length !== a) ? Bt('Uint8Array expected') : r),
  Sn = (r) => new Uint8Array(r),
  ri = (r, a) => Xs(ny(r) ? cu(r) : Sn(Xs(r)), a),
  Ye = (r, a = ei) => {
    const i = r % a;
    return i >= 0n ? i : a + i;
  },
  Fp = (r) => (r instanceof Or ? r : Bt('Point expected'));
class Or {
  constructor(a, i, u) {
    (this.px = a), (this.py = i), (this.pz = u), Object.freeze(this);
  }
  static fromAffine(a) {
    return a.x === 0n && a.y === 0n ? Xl : new Or(a.x, a.y, 1n);
  }
  static fromHex(a) {
    a = ri(a);
    let i;
    const u = a[0],
      s = a.subarray(1),
      f = Zs(s, 0, Tr),
      d = a.length;
    if (d === 33 && [2, 3].includes(u)) {
      Yf(f) || Bt('Point hex invalid: x not FE');
      let h = dx(Hp(f));
      const p = (h & 1n) === 1n;
      ((u & 1) === 1) !== p && (h = Ye(-h)), (i = new Or(f, h, 1n));
    }
    return (
      d === 65 && u === 4 && (i = new Or(f, Zs(s, Tr, 2 * Tr), 1n)), i ? i.ok() : Bt('Point invalid: not on curve')
    );
  }
  static fromPrivateKey(a) {
    return Oa.mul(Qs(a));
  }
  get x() {
    return this.aff().x;
  }
  get y() {
    return this.aff().y;
  }
  equals(a) {
    const { px: i, py: u, pz: s } = this,
      { px: f, py: d, pz: h } = Fp(a),
      p = Ye(i * h),
      g = Ye(f * s),
      N = Ye(u * h),
      v = Ye(d * s);
    return p === g && N === v;
  }
  negate() {
    return new Or(this.px, Ye(-this.py), this.pz);
  }
  double() {
    return this.add(this);
  }
  add(a) {
    const { px: i, py: u, pz: s } = this,
      { px: f, py: d, pz: h } = Fp(a),
      { a: p, b: g } = ry;
    let N = 0n,
      v = 0n,
      S = 0n;
    const w = Ye(g * 3n);
    let D = Ye(i * f),
      P = Ye(u * d),
      J = Ye(s * h),
      W = Ye(i + u),
      z = Ye(f + d);
    (W = Ye(W * z)), (z = Ye(D + P)), (W = Ye(W - z)), (z = Ye(i + s));
    let Se = Ye(f + h);
    return (
      (z = Ye(z * Se)),
      (Se = Ye(D + J)),
      (z = Ye(z - Se)),
      (Se = Ye(u + s)),
      (N = Ye(d + h)),
      (Se = Ye(Se * N)),
      (N = Ye(P + J)),
      (Se = Ye(Se - N)),
      (S = Ye(p * z)),
      (N = Ye(w * J)),
      (S = Ye(N + S)),
      (N = Ye(P - S)),
      (S = Ye(P + S)),
      (v = Ye(N * S)),
      (P = Ye(D + D)),
      (P = Ye(P + D)),
      (J = Ye(p * J)),
      (z = Ye(w * z)),
      (P = Ye(P + J)),
      (J = Ye(D - J)),
      (J = Ye(p * J)),
      (z = Ye(z + J)),
      (D = Ye(P * z)),
      (v = Ye(v + D)),
      (D = Ye(Se * z)),
      (N = Ye(W * N)),
      (N = Ye(N - D)),
      (D = Ye(W * P)),
      (S = Ye(Se * S)),
      (S = Ye(S + D)),
      new Or(N, v, S)
    );
  }
  mul(a, i = !0) {
    if (!i && a === 0n) return Xl;
    if ((nu(a) || Bt('scalar invalid'), this.equals(Oa))) return bx(a).p;
    let u = Xl,
      s = Oa;
    for (let f = this; a > 0n; f = f.double(), a >>= 1n) a & 1n ? (u = u.add(f)) : i && (s = s.add(f));
    return u;
  }
  mulAddQUns(a, i, u) {
    return this.mul(i, !1).add(a.mul(u, !1)).ok();
  }
  toAffine() {
    const { px: a, py: i, pz: u } = this;
    if (this.equals(Xl)) return { x: 0n, y: 0n };
    if (u === 1n) return { x: a, y: i };
    const s = oc(u, ei);
    return Ye(u * s) !== 1n && Bt('inverse invalid'), { x: Ye(a * s), y: Ye(i * s) };
  }
  assertValidity() {
    const { x: a, y: i } = this.aff();
    return (
      (!Yf(a) || !Yf(i)) && Bt('Point invalid: x or y'), Ye(i * i) === Hp(a) ? this : Bt('Point invalid: not on curve')
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
    const { x: i, y: u } = this.aff();
    return (a ? ((u & 1n) === 0n ? '02' : '03') : '04') + Zl(i) + (a ? '' : Zl(u));
  }
  toRawBytes(a = !0) {
    return cu(this.toHex(a));
  }
}
Or.BASE = new Or(cx, ox, 1n);
Or.ZERO = new Or(0n, 1n, 0n);
const { BASE: Oa, ZERO: Xl } = Or,
  ay = (r, a) => r.toString(16).padStart(a, '0'),
  Ed = (r) =>
    Array.from(Xs(r))
      .map((a) => ay(a, 2))
      .join(''),
  Hn = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 },
  Vp = (r) => {
    if (r >= Hn._0 && r <= Hn._9) return r - Hn._0;
    if (r >= Hn.A && r <= Hn.F) return r - (Hn.A - 10);
    if (r >= Hn.a && r <= Hn.f) return r - (Hn.a - 10);
  },
  cu = (r) => {
    const a = 'hex invalid';
    if (!ny(r)) return Bt(a);
    const i = r.length,
      u = i / 2;
    if (i % 2) return Bt(a);
    const s = Sn(u);
    for (let f = 0, d = 0; f < u; f++, d += 2) {
      const h = Vp(r.charCodeAt(d)),
        p = Vp(r.charCodeAt(d + 1));
      if (h === void 0 || p === void 0) return Bt(a);
      s[f] = h * 16 + p;
    }
    return s;
  },
  ou = (r) => BigInt('0x' + (Ed(r) || '0')),
  Zs = (r, a, i) => ou(r.slice(a, i)),
  cc = (r) => (sc(r) && r >= 0n && r < wd ? cu(ay(r, 2 * Tr)) : Bt('bigint expected')),
  Zl = (r) => Ed(cc(r)),
  id = (...r) => {
    const a = Sn(r.reduce((u, s) => u + Xs(s).length, 0));
    let i = 0;
    return (
      r.forEach((u) => {
        a.set(u, i), (i += u.length);
      }),
      a
    );
  },
  oc = (r, a) => {
    (r === 0n || a <= 0n) && Bt('no inverse n=' + r + ' mod=' + a);
    let i = Ye(r, a),
      u = a,
      s = 0n,
      f = 1n;
    for (; i !== 0n; ) {
      const d = u / i,
        h = u % i,
        p = s - f * d;
      (u = i), (i = h), (s = f), (f = p);
    }
    return u === 1n ? Ye(s, a) : Bt('no inverse');
  },
  dx = (r) => {
    let a = 1n;
    for (let i = r, u = (ei + 1n) / 4n; u > 0n; u >>= 1n) u & 1n && (a = (a * i) % ei), (i = (i * i) % ei);
    return Ye(a * a) === r ? a : Bt('sqrt invalid');
  },
  Qs = (r) => (sc(r) || (r = ou(ri(r, Tr))), nu(r) ? r : Bt('private key invalid 3')),
  ld = (r) => r > vr >> 1n,
  hx = (r, a = !0) => Or.fromPrivateKey(r).toRawBytes(a);
class Ql {
  constructor(a, i, u) {
    (this.r = a), (this.s = i), (this.recovery = u), this.assertValidity();
  }
  static fromCompact(a) {
    return (a = ri(a, 64)), new Ql(Zs(a, 0, Tr), Zs(a, Tr, 2 * Tr));
  }
  assertValidity() {
    return nu(this.r) && nu(this.s) ? this : Bt();
  }
  addRecoveryBit(a) {
    return new Ql(this.r, this.s, a);
  }
  hasHighS() {
    return ld(this.s);
  }
  normalizeS() {
    return ld(this.s) ? new Ql(this.r, Ye(-this.s, vr), this.recovery) : this;
  }
  recoverPublicKey(a) {
    const { r: i, s: u, recovery: s } = this;
    [0, 1, 2, 3].includes(s) || Bt('recovery id invalid');
    const f = ly(ri(a, Tr)),
      d = s === 2 || s === 3 ? i + vr : i;
    d >= ei && Bt('q.x invalid');
    const h = (s & 1) === 0 ? '02' : '03',
      p = Or.fromHex(h + Zl(d)),
      g = oc(d, vr),
      N = Ye(-f * g, vr),
      v = Ye(u * g, vr);
    return Oa.mulAddQUns(p, N, v);
  }
  toCompactRawBytes() {
    return cu(this.toCompactHex());
  }
  toCompactHex() {
    return Zl(this.r) + Zl(this.s);
  }
}
const iy = (r) => {
    const a = r.length * 8 - 256;
    a > 1024 && Bt('msg invalid');
    const i = ou(r);
    return a > 0 ? i >> BigInt(a) : i;
  },
  ly = (r) => Ye(iy(r), vr),
  Gp = (r) => cc(r),
  $p = () => (typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0);
let Pl;
const uy = { lowS: !0 },
  mx = (r, a, i = uy) => {
    ['der', 'recovered', 'canonical'].some((v) => v in i) && Bt('option not supported');
    let { lowS: u } = i;
    u == null && (u = !0);
    const s = ly(ri(r)),
      f = Gp(s),
      d = Qs(a),
      h = [Gp(d), f];
    let p = i.extraEntropy;
    p && h.push(p === !0 ? ni.randomBytes(Tr) : ri(p));
    const g = s,
      N = (v) => {
        const S = iy(v);
        if (!nu(S)) return;
        const w = oc(S, vr),
          D = Oa.mul(S).aff(),
          P = Ye(D.x, vr);
        if (P === 0n) return;
        const J = Ye(w * Ye(g + Ye(d * P, vr), vr), vr);
        if (J === 0n) return;
        let W = J,
          z = (D.x === P ? 0 : 2) | Number(D.y & 1n);
        return u && ld(J) && ((W = Ye(-J, vr)), (z ^= 1)), new Ql(P, W, z);
      };
    return { seed: id(...h), k2sig: N };
  };
function px(r) {
  let a = Sn(Tr),
    i = Sn(Tr),
    u = 0;
  const s = () => {
      a.fill(1), i.fill(0), (u = 0);
    },
    f = 'drbg: tried 1000 values';
  {
    const d = (...g) => {
        const N = Pl;
        return N || Bt('etc.hmacSha256Sync not set'), N(i, a, ...g);
      },
      h = (g = Sn()) => {
        (i = d(Sn([0]), g)), (a = d()), g.length !== 0 && ((i = d(Sn([1]), g)), (a = d()));
      },
      p = () => (u++ >= 1e3 && Bt(f), (a = d()), a);
    return (g, N) => {
      s(), h(g);
      let v;
      for (; !(v = N(p())); ) h();
      return s(), v;
    };
  }
}
const gx = (r, a, i = uy) => {
    const { seed: u, k2sig: s } = mx(r, a, i);
    return px()(u, s);
  },
  sy = (r) => {
    (r = ri(r)), (r.length < Tr + 8 || r.length > 1024) && Bt('expected 40-1024b');
    const a = Ye(ou(r), vr - 1n);
    return cc(a + 1n);
  },
  ni = {
    hexToBytes: cu,
    bytesToHex: Ed,
    concatBytes: id,
    bytesToNumberBE: ou,
    numberToBytesBE: cc,
    mod: Ye,
    invert: oc,
    hmacSha256Async: async (r, ...a) => {
      const i = $p(),
        u = i && i.subtle;
      if (!u) return Bt('etc.hmacSha256Async or crypto.subtle must be defined');
      const s = await u.importKey('raw', r, { name: 'HMAC', hash: { name: 'SHA-256' } }, !1, ['sign']);
      return Sn(await u.sign('HMAC', s, id(...a)));
    },
    hmacSha256Sync: Pl,
    hashToPrivateKey: sy,
    randomBytes: (r = 32) => {
      const a = $p();
      return (!a || !a.getRandomValues) && Bt('crypto.getRandomValues must be defined'), a.getRandomValues(Sn(r));
    }
  },
  yx = {
    normPrivateKeyToScalar: Qs,
    isValidPrivateKey: (r) => {
      try {
        return !!Qs(r);
      } catch {
        return !1;
      }
    },
    randomPrivateKey: () => sy(ni.randomBytes(Tr + 16)),
    precompute: (r = 8, a = Oa) => (a.multiply(3n), a)
  };
Object.defineProperties(ni, {
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return Pl;
    },
    set(r) {
      Pl || (Pl = r);
    }
  }
});
const Pa = 8,
  vx = () => {
    const r = [],
      a = 256 / Pa + 1;
    let i = Oa,
      u = i;
    for (let s = 0; s < a; s++) {
      (u = i), r.push(u);
      for (let f = 1; f < 2 ** (Pa - 1); f++) (u = u.add(i)), r.push(u);
      i = u.double();
    }
    return r;
  };
let Yp;
const bx = (r) => {
  const a = Yp || (Yp = vx()),
    i = (N, v) => {
      let S = v.negate();
      return N ? S : v;
    };
  let u = Xl,
    s = Oa;
  const f = 1 + 256 / Pa,
    d = 2 ** (Pa - 1),
    h = BigInt(2 ** Pa - 1),
    p = 2 ** Pa,
    g = BigInt(Pa);
  for (let N = 0; N < f; N++) {
    const v = N * d;
    let S = Number(r & h);
    (r >>= g), S > d && ((S -= p), (r += 1n));
    const w = v,
      D = v + Math.abs(S) - 1,
      P = N % 2 !== 0,
      J = S < 0;
    S === 0 ? (s = s.add(i(P, a[w]))) : (u = u.add(i(J, a[D])));
  }
  return { p: u, f: s };
};
var Gn = su();
ni.hmacSha256Sync = (r, ...a) => bd(Sd, r, ni.concatBytes(...a));
class Jl {
  constructor(a, i) {
    if (
      (Object.defineProperty(this, 'privateKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'publicKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      i)
    )
      try {
        this.privateKey = Jl.decryptPrivateKey(a, i);
      } catch {
        throw new Error('Failed to decrypt private key: Invalid password');
      }
    else this.privateKey = a;
    this.publicKey = Jl.getPublicKey(this.privateKey);
  }
  static encryptPrivateKey(a, i) {
    return CryptoJS.AES.encrypt(a, i).toString();
  }
  static decryptPrivateKey(a, i) {
    const s = CryptoJS.AES.decrypt(a, i).toString(CryptoJS.enc.Utf8);
    if (!s) throw new Error('Failed to decrypt private key');
    return s;
  }
  static generate() {
    const a = yx.randomPrivateKey(),
      i = Gn.Buffer.from(a).toString('hex');
    return new Jl(i);
  }
  static getPublicKey(a) {
    const i = hx(a, !0);
    return Gn.Buffer.from(i).toString('hex');
  }
  sign(a) {
    const i = gx(a, Gn.Buffer.from(this.privateKey, 'hex'));
    return Gn.Buffer.concat([i.toCompactRawBytes(), Gn.Buffer.from([i.recovery])]);
  }
  getPrivateKey() {
    return this.privateKey;
  }
}
class Cs {
  constructor(a, i, u, s) {
    Object.defineProperty(this, 'chain', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'chainNetwork', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'message', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'signature', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.chain = a),
      (this.chainNetwork = i),
      (this.message = u),
      (this.signature = s || '');
  }
}
ni.hmacSha256Sync = (r, ...a) => bd(Sd, r, ni.concatBytes(...a));
class Sx {
  constructor(a, i, u, s, f = Ys.V0) {
    Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'type', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'from', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'nonce', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'payload', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'signature', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.version = f),
      (this.type = a),
      (this.from = i),
      (this.nonce = u),
      (this.payload = s);
  }
  toTxDataBytes() {
    const a = [this.version, en(this.type), en(this.from.toString()), en(this.nonce.toString()), this.payload];
    return ty.encode(a);
  }
  hash() {
    return Sd(this.toTxDataBytes());
  }
  sign(a) {
    const i = new Jl(a);
    return (this.signature = i.sign(this.hash())), this;
  }
  isSigned() {
    return !!this.signature;
  }
}
function Kp(r) {
  if (!r.isSigned()) throw new Error('Transaction must be signed before mapping to API request');
  const a = {};
  return (
    (a.body = {
      type: r.type.toString(),
      userId: r.from.toString(),
      nonce: r.nonce.toString(),
      message: Gn.Buffer.from(r.payload).toString('hex'),
      hash: Gn.Buffer.from(r.hash()).toString('hex'),
      signature: Gn.Buffer.from(r.signature).toString('hex')
    }),
    a
  );
}
var xx = async (r, a) => {
    let i = typeof a == 'function' ? await a(r) : a;
    if (i) return r.scheme === 'bearer' ? `Bearer ${i}` : r.scheme === 'basic' ? `Basic ${btoa(i)}` : i;
  },
  wx = { bodySerializer: (r) => JSON.stringify(r, (a, i) => (typeof i == 'bigint' ? i.toString() : i)) },
  Ex = (r) => {
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
  Ax = (r) => {
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
  Nx = (r) => {
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
  cy = ({ allowReserved: r, explode: a, name: i, style: u, value: s }) => {
    if (!a) {
      let h = (r ? s : s.map((p) => encodeURIComponent(p))).join(Ax(u));
      switch (u) {
        case 'label':
          return `.${h}`;
        case 'matrix':
          return `;${i}=${h}`;
        case 'simple':
          return h;
        default:
          return `${i}=${h}`;
      }
    }
    let f = Ex(u),
      d = s
        .map((h) =>
          u === 'label' || u === 'simple'
            ? r
              ? h
              : encodeURIComponent(h)
            : fc({ allowReserved: r, name: i, value: h })
        )
        .join(f);
    return u === 'label' || u === 'matrix' ? f + d : d;
  },
  fc = ({ allowReserved: r, name: a, value: i }) => {
    if (i == null) return '';
    if (typeof i == 'object')
      throw new Error(
        'Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.'
      );
    return `${a}=${r ? i : encodeURIComponent(i)}`;
  },
  oy = ({ allowReserved: r, explode: a, name: i, style: u, value: s }) => {
    if (s instanceof Date) return `${i}=${s.toISOString()}`;
    if (u !== 'deepObject' && !a) {
      let h = [];
      Object.entries(s).forEach(([g, N]) => {
        h = [...h, g, r ? N : encodeURIComponent(N)];
      });
      let p = h.join(',');
      switch (u) {
        case 'form':
          return `${i}=${p}`;
        case 'label':
          return `.${p}`;
        case 'matrix':
          return `;${i}=${p}`;
        default:
          return p;
      }
    }
    let f = Nx(u),
      d = Object.entries(s)
        .map(([h, p]) => fc({ allowReserved: r, name: u === 'deepObject' ? `${i}[${h}]` : h, value: p }))
        .join(f);
    return u === 'label' || u === 'matrix' ? f + d : d;
  },
  _x = /\{[^{}]+\}/g,
  Ox = ({ path: r, url: a }) => {
    let i = a,
      u = a.match(_x);
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
          i = i.replace(s, cy({ explode: f, name: d, style: h, value: p }));
          continue;
        }
        if (typeof p == 'object') {
          i = i.replace(s, oy({ explode: f, name: d, style: h, value: p }));
          continue;
        }
        if (h === 'matrix') {
          i = i.replace(s, `;${fc({ name: d, value: p })}`);
          continue;
        }
        let g = encodeURIComponent(h === 'label' ? `.${p}` : p);
        i = i.replace(s, g);
      }
    return i;
  },
  fy =
    ({ allowReserved: r, array: a, object: i } = {}) =>
    (u) => {
      let s = [];
      if (u && typeof u == 'object')
        for (let f in u) {
          let d = u[f];
          if (d != null) {
            if (Array.isArray(d)) {
              s = [...s, cy({ allowReserved: r, explode: !0, name: f, style: 'form', value: d, ...a })];
              continue;
            }
            if (typeof d == 'object') {
              s = [...s, oy({ allowReserved: r, explode: !0, name: f, style: 'deepObject', value: d, ...i })];
              continue;
            }
            s = [...s, fc({ allowReserved: r, name: f, value: d })];
          }
        }
      return s.join('&');
    },
  Tx = (r) => {
    var i;
    if (!r) return 'stream';
    let a = (i = r.split(';')[0]) == null ? void 0 : i.trim();
    if (a) {
      if (a.startsWith('application/json') || a.endsWith('+json')) return 'json';
      if (a === 'multipart/form-data') return 'formData';
      if (['application/', 'audio/', 'image/', 'video/'].some((u) => a.startsWith(u))) return 'blob';
      if (a.startsWith('text/')) return 'text';
    }
  },
  Mx = async ({ security: r, ...a }) => {
    for (let i of r) {
      let u = await xx(i, a.auth);
      if (!u) continue;
      let s = i.name ?? 'Authorization';
      switch (i.in) {
        case 'query':
          a.query || (a.query = {}), (a.query[s] = u);
          break;
        case 'header':
        default:
          a.headers.set(s, u);
          break;
      }
      return;
    }
  },
  Xp = (r) =>
    Rx({
      baseUrl: r.baseUrl,
      path: r.path,
      query: r.query,
      querySerializer: typeof r.querySerializer == 'function' ? r.querySerializer : fy(r.querySerializer),
      url: r.url
    }),
  Rx = ({ baseUrl: r, path: a, query: i, querySerializer: u, url: s }) => {
    let f = s.startsWith('/') ? s : `/${s}`,
      d = (r ?? '') + f;
    a && (d = Ox({ path: a, url: d }));
    let h = i ? u(i) : '';
    return h.startsWith('?') && (h = h.substring(1)), h && (d += `?${h}`), d;
  },
  Zp = (r, a) => {
    var u;
    let i = { ...r, ...a };
    return (
      (u = i.baseUrl) != null && u.endsWith('/') && (i.baseUrl = i.baseUrl.substring(0, i.baseUrl.length - 1)),
      (i.headers = dy(r.headers, a.headers)),
      i
    );
  },
  dy = (...r) => {
    let a = new Headers();
    for (let i of r) {
      if (!i || typeof i != 'object') continue;
      let u = i instanceof Headers ? i.entries() : Object.entries(i);
      for (let [s, f] of u)
        if (f === null) a.delete(s);
        else if (Array.isArray(f)) for (let d of f) a.append(s, d);
        else f !== void 0 && a.set(s, typeof f == 'object' ? JSON.stringify(f) : f);
    }
    return a;
  },
  Kf = class {
    constructor() {
      np(this, '_fns');
      this._fns = [];
    }
    clear() {
      this._fns = [];
    }
    exists(r) {
      return this._fns.indexOf(r) !== -1;
    }
    eject(r) {
      let a = this._fns.indexOf(r);
      a !== -1 && (this._fns = [...this._fns.slice(0, a), ...this._fns.slice(a + 1)]);
    }
    use(r) {
      this._fns = [...this._fns, r];
    }
  },
  Bx = () => ({ error: new Kf(), request: new Kf(), response: new Kf() }),
  Cx = fy({ allowReserved: !1, array: { explode: !0, style: 'form' }, object: { explode: !0, style: 'deepObject' } }),
  Dx = { 'Content-Type': 'application/json' },
  Ad = (r = {}) => ({ ...wx, headers: Dx, parseAs: 'auto', querySerializer: Cx, ...r }),
  hy = (r = {}) => {
    let a = Zp(Ad(), r),
      i = () => ({ ...a }),
      u = (d) => ((a = Zp(a, d)), i()),
      s = Bx(),
      f = async (d) => {
        let h = { ...a, ...d, fetch: d.fetch ?? a.fetch ?? globalThis.fetch, headers: dy(a.headers, d.headers) };
        h.security && (await Mx({ ...h, security: h.security })),
          h.body && h.bodySerializer && (h.body = h.bodySerializer(h.body)),
          h.body || h.headers.delete('Content-Type');
        let p = Xp(h),
          g = { redirect: 'follow', ...h },
          N = new Request(p, g);
        for (let J of s.request._fns) N = await J(N, h);
        let v = h.fetch,
          S = await v(N);
        for (let J of s.response._fns) S = await J(S, N, h);
        let w = { request: N, response: S };
        if (S.ok) {
          if (S.status === 204 || S.headers.get('Content-Length') === '0') return { data: {}, ...w };
          let J = (h.parseAs === 'auto' ? Tx(S.headers.get('Content-Type')) : h.parseAs) ?? 'json';
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
      buildUrl: Xp,
      connect: (d) => f({ ...d, method: 'CONNECT' }),
      delete: (d) => f({ ...d, method: 'DELETE' }),
      get: (d) => f({ ...d, method: 'GET' }),
      getConfig: i,
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
const Ct = hy(Ad({ baseUrl: 'https://testnetopenapi.hibit.app' })),
  Ux = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/timestamp', ...r }),
  jx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/assets', ...r }),
  kx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/asset', ...r }),
  Ix = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/asset/withdrawal-fee', ...r }),
  qx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/chains', ...r }),
  Lx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/chain-balances', ...r }),
  Qp = (r) =>
    ((r == null ? void 0 : r.client) ?? Ct).post({
      url: '/v1/proxy-key',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    }),
  zx = (r) =>
    ((r == null ? void 0 : r.client) ?? Ct).post({
      url: '/v1/proxy-key/reset',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    }),
  Hx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/market/depth', ...r }),
  Fx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/markets/swap', ...r }),
  Pp = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/markets/ticker', ...r }),
  Vx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/markets/ticker/extended', ...r }),
  Gx = (r) => (r.client ?? Ct).get({ url: '/v1/market/kline', ...r }),
  $x = (r) => (r.client ?? Ct).get({ url: '/v1/market/trade', ...r }),
  Yx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/markets', ...r }),
  Kx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/market', ...r }),
  Xx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/order/trades', ...r }),
  Zx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/orders', ...r }),
  Qx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/order', ...r }),
  Px = (r) =>
    ((r == null ? void 0 : r.client) ?? Ct).post({
      url: '/v1/tx/submit-spot-order',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    }),
  Jx = (r) =>
    ((r == null ? void 0 : r.client) ?? Ct).post({
      url: '/v1/tx/cancel-spot-order',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    }),
  Wx = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/wallet/nonce', ...r }),
  ew = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/wallet/balances', ...r }),
  tw = (r) =>
    ((r == null ? void 0 : r.client) ?? Ct).post({
      url: '/v1/wallet/register',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    }),
  rw = (r) => ((r == null ? void 0 : r.client) ?? Ct).get({ url: '/v1/wallet/info', ...r });
function Jp(r) {
  var a;
  return {
    assetId: r.assetId,
    chainId: r.chainId ? ir.fromString(r.chainId) : void 0,
    chainAssetType: kS(r.chainAssetType),
    contractAddress: r.contractAddress,
    decimalPlaces: r.decimalPlaces,
    isBaseToken: r.isBaseToken,
    displayName: r.displayName || void 0,
    assetSymbol: r.assetSymbol,
    subAssets: ((a = r.subAssets) == null ? void 0 : a.map((i) => nw(i))) || void 0
  };
}
function nw(r) {
  return {
    assetId: r.assetId,
    chainId: r.chainId ? ir.fromString(r.chainId) : void 0,
    chainAssetType: r.chainAssetType,
    contractAddress: r.contractAddress,
    decimalPlaces: r.decimalPlaces
  };
}
function aw(r) {
  var a, i;
  return {
    query: {
      ChainIds: (a = r.chainIds) == null ? void 0 : a.map((u) => u.toString()),
      ChainAssetTypes: (i = r.chainAssetTypes) == null ? void 0 : i.map((u) => u.toString()),
      Limit: r.limit,
      Offset: r.offset,
      OrderBy: r.orderBy
    }
  };
}
function iw(r) {
  return { query: { AssetId: r.assetId, TokenAddress: r.tokenAddress } };
}
function lw(r) {
  var a;
  return { query: { AssetId: (a = r.assetId) == null ? void 0 : a.toString() } };
}
function uw(r) {
  return {
    query: {
      RootAssetId: r.rootAssetId.toString(),
      TargetChain: r.targetChain.toString(),
      TargetChainNetwork: r.targetNetwork.toString()
    }
  };
}
function sw(r) {
  return {
    rootAssetId: BigInt(r.rootAssetId),
    targetAssetId: BigInt(r.targetAssetId),
    feeRate: BigInt(r.feeRate),
    rateDecimal: Number(r.rateDecimal),
    minFee: BigInt(r.minFee)
  };
}
function cw(r) {
  var a, i;
  return {
    query: {
      ChainIds: (a = r.chainIds) == null ? void 0 : a.map((u) => u.toString()),
      ChainAssetTypes: (i = r.chainAssetTypes) == null ? void 0 : i.map((u) => u.toString()),
      BaseAssetId: r.baseAssetId ? String(r.baseAssetId) : void 0,
      QuoteAssetId: r.quoteAssetId ? String(r.quoteAssetId) : void 0,
      Limit: r.limit,
      Offset: r.offset,
      OrderBy: r.orderBy
    }
  };
}
function ow(r) {
  return { query: { MarketId: String(r) } };
}
function Wp(r) {
  return {
    marketId: BigInt(r.marketId),
    marketSymbol: r.marketSymbol,
    baseAssetId: BigInt(r.baseAssetId),
    quoteAssetId: BigInt(r.quoteAssetId),
    depthLevels: r.depthLevels
  };
}
function fw(r) {
  return { query: { MarketId: r ? String(r) : void 0 } };
}
function eg(r) {
  var a, i;
  return {
    query: {
      MarketId: r.marketId ? String(r.marketId) : void 0,
      ChainIds: (a = r.chainIds) == null ? void 0 : a.map((u) => u.toString()),
      ChainAssetTypes: (i = r.chainAssetTypes) == null ? void 0 : i.map((u) => u.toString())
    }
  };
}
function tg(r) {
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
function dw(r) {
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
function hw(r) {
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
function mw(r) {
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
function pw(r) {
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
function gw(r) {
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
function yw(r) {
  return { query: r ? { MarketId: String(r) } : {} };
}
function vw(r) {
  return {
    marketId: BigInt(r.marketId),
    poolAmount: Number(r.poolAmount),
    poolVolume: Number(r.poolVolume),
    poolLiquidity: BigInt(r.poolLiquidity)
  };
}
function bw(r) {
  return { query: { Index: r.index, MarketId: String(r.marketId), Limit: r.limit } };
}
function Sw(r) {
  return {
    asks: r.asks.map((a) => ({ price: Number(a[0]), volume: Number(a[1]) })),
    bids: r.bids.map((a) => ({ price: Number(a[0]), volume: Number(a[1]) }))
  };
}
function xw(r) {
  return [!!r.orderId, !!r.clientOrderId, !!r.txHash].filter(Boolean).length === 1;
}
function ww(r) {
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
function Ew(r) {
  return { query: { OrderId: r.orderId, ClientOrderId: r.clientOrderId, TxHash: r.txHash } };
}
function rg(r) {
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
function Aw(r) {
  return { query: { OrderId: r } };
}
function Nw(r) {
  return {
    tradeId: r.tid,
    filledPrice: Number(r.fp),
    filledVolume: Number(r.fv),
    filledAmount: Number(r.fa),
    tradeSide: r.ts,
    timestamp: Number(r.t)
  };
}
var ng = {};
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
***************************************************************************** */ var ag;
function _w() {
  if (ag) return ng;
  ag = 1;
  var r;
  return (
    (function (a) {
      (function (i) {
        var u =
            typeof globalThis == 'object'
              ? globalThis
              : typeof ed == 'object'
                ? ed
                : typeof globalThis == 'object'
                  ? globalThis
                  : typeof this == 'object'
                    ? this
                    : p(),
          s = f(a);
        typeof u.Reflect < 'u' && (s = f(u.Reflect, s)), i(s, u), typeof u.Reflect > 'u' && (u.Reflect = a);
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
      })(function (i, u) {
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
                  return ae(Object.create(null));
                }
              : g
                ? function () {
                    return ae({ __proto__: null });
                  }
                : function () {
                    return ae({});
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
          P = typeof WeakMap == 'function' ? WeakMap : V(),
          J = f ? Symbol.for('@reflect-metadata:registry') : void 0,
          W = De(),
          z = He(W);
        function Se(k, q, de, Oe) {
          if (ye(de)) {
            if (!Q(k)) throw new TypeError();
            if (!re(q)) throw new TypeError();
            return K(k, q);
          } else {
            if (!Q(k)) throw new TypeError();
            if (!Me(q)) throw new TypeError();
            if (!Me(Oe) && !ye(Oe) && !T(Oe)) throw new TypeError();
            return T(Oe) && (Oe = void 0), (de = U(de)), Z(k, q, de, Oe);
          }
        }
        i('decorate', Se);
        function ze(k, q) {
          function de(Oe, Ue) {
            if (!Me(Oe)) throw new TypeError();
            if (!ye(Ue) && !ue(Ue)) throw new TypeError();
            oe(k, q, Oe, Ue);
          }
          return de;
        }
        i('metadata', ze);
        function we(k, q, de, Oe) {
          if (!Me(de)) throw new TypeError();
          return ye(Oe) || (Oe = U(Oe)), oe(k, q, de, Oe);
        }
        i('defineMetadata', we);
        function he(k, q, de) {
          if (!Me(q)) throw new TypeError();
          return ye(de) || (de = U(de)), I(k, q, de);
        }
        i('hasMetadata', he);
        function Ae(k, q, de) {
          if (!Me(q)) throw new TypeError();
          return ye(de) || (de = U(de)), R(k, q, de);
        }
        i('hasOwnMetadata', Ae);
        function b(k, q, de) {
          if (!Me(q)) throw new TypeError();
          return ye(de) || (de = U(de)), $(k, q, de);
        }
        i('getMetadata', b);
        function A(k, q, de) {
          if (!Me(q)) throw new TypeError();
          return ye(de) || (de = U(de)), H(k, q, de);
        }
        i('getOwnMetadata', A);
        function O(k, q) {
          if (!Me(k)) throw new TypeError();
          return ye(q) || (q = U(q)), j(k, q);
        }
        i('getMetadataKeys', O);
        function G(k, q) {
          if (!Me(k)) throw new TypeError();
          return ye(q) || (q = U(q)), ne(k, q);
        }
        i('getOwnMetadataKeys', G);
        function Y(k, q, de) {
          if (!Me(q)) throw new TypeError();
          if ((ye(de) || (de = U(de)), !Me(q))) throw new TypeError();
          ye(de) || (de = U(de));
          var Oe = E(q, de, !1);
          return ye(Oe) ? !1 : Oe.OrdinaryDeleteMetadata(k, q, de);
        }
        i('deleteMetadata', Y);
        function K(k, q) {
          for (var de = k.length - 1; de >= 0; --de) {
            var Oe = k[de],
              Ue = Oe(q);
            if (!ye(Ue) && !T(Ue)) {
              if (!re(Ue)) throw new TypeError();
              q = Ue;
            }
          }
          return q;
        }
        function Z(k, q, de, Oe) {
          for (var Ue = k.length - 1; Ue >= 0; --Ue) {
            var qe = k[Ue],
              et = qe(q, de, Oe);
            if (!ye(et) && !T(et)) {
              if (!Me(et)) throw new TypeError();
              Oe = et;
            }
          }
          return Oe;
        }
        function I(k, q, de) {
          var Oe = R(k, q, de);
          if (Oe) return !0;
          var Ue = ve(q);
          return T(Ue) ? !1 : I(k, Ue, de);
        }
        function R(k, q, de) {
          var Oe = E(q, de, !1);
          return ye(Oe) ? !1 : ke(Oe.OrdinaryHasOwnMetadata(k, q, de));
        }
        function $(k, q, de) {
          var Oe = R(k, q, de);
          if (Oe) return H(k, q, de);
          var Ue = ve(q);
          if (!T(Ue)) return $(k, Ue, de);
        }
        function H(k, q, de) {
          var Oe = E(q, de, !1);
          if (!ye(Oe)) return Oe.OrdinaryGetOwnMetadata(k, q, de);
        }
        function oe(k, q, de, Oe) {
          var Ue = E(de, Oe, !0);
          Ue.OrdinaryDefineOwnMetadata(k, q, de, Oe);
        }
        function j(k, q) {
          var de = ne(k, q),
            Oe = ve(k);
          if (Oe === null) return de;
          var Ue = j(Oe, q);
          if (Ue.length <= 0) return de;
          if (de.length <= 0) return Ue;
          for (var qe = new D(), et = [], Ke = 0, Fe = de; Ke < Fe.length; Ke++) {
            var Ve = Fe[Ke],
              Ge = qe.has(Ve);
            Ge || (qe.add(Ve), et.push(Ve));
          }
          for (var $e = 0, at = Ue; $e < at.length; $e++) {
            var Ve = at[$e],
              Ge = qe.has(Ve);
            Ge || (qe.add(Ve), et.push(Ve));
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
        function T(k) {
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
            Oe = ie(k, d);
          if (Oe !== void 0) {
            var Ue = Oe.call(k, de);
            if (Me(Ue)) throw new TypeError();
            return Ue;
          }
          return Re(k);
        }
        function Re(k, q) {
          var de, Oe, Ue;
          {
            var qe = k.toString;
            if (se(qe)) {
              var Oe = qe.call(k);
              if (!Me(Oe)) return Oe;
            }
            var de = k.valueOf;
            if (se(de)) {
              var Oe = de.call(k);
              if (!Me(Oe)) return Oe;
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
        function ie(k, q) {
          var de = k[q];
          if (de != null) {
            if (!se(de)) throw new TypeError();
            return de;
          }
        }
        function M(k) {
          var q = ie(k, h);
          if (!se(q)) throw new TypeError();
          var de = q.call(k);
          if (!Me(de)) throw new TypeError();
          return de;
        }
        function L(k) {
          return k.value;
        }
        function F(k) {
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
            Oe = de && Object.getPrototypeOf(de);
          if (Oe == null || Oe === Object.prototype) return q;
          var Ue = Oe.constructor;
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
            Oe,
            Ue = new P(),
            qe = { registerProvider: et, getProvider: Fe, setProvider: Ge };
          return qe;
          function et($e) {
            if (!Object.isExtensible(qe)) throw new Error('Cannot add provider to a frozen registry.');
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
                Oe === void 0 && (Oe = new D()), Oe.add($e);
                break;
            }
          }
          function Ke($e, at) {
            if (!ye(q)) {
              if (q.isProviderFor($e, at)) return q;
              if (!ye(de)) {
                if (de.isProviderFor($e, at)) return q;
                if (!ye(Oe))
                  for (var ot = M(Oe); ; ) {
                    var Ut = F(ot);
                    if (!Ut) return;
                    var mr = L(Ut);
                    if (mr.isProviderFor($e, at)) return te(ot), mr;
                  }
              }
            }
            if (!ye(k) && k.isProviderFor($e, at)) return k;
          }
          function Fe($e, at) {
            var ot = Ue.get($e),
              Ut;
            return (
              ye(ot) || (Ut = ot.get(at)),
              ye(Ut) && ((Ut = Ke($e, at)), ye(Ut) || (ye(ot) && ((ot = new w()), Ue.set($e, ot)), ot.set(at, Ut))),
              Ut
            );
          }
          function Ve($e) {
            if (ye($e)) throw new TypeError();
            return q === $e || de === $e || (!ye(Oe) && Oe.has($e));
          }
          function Ge($e, at, ot) {
            if (!Ve(ot)) throw new Error('Metadata provider not registered.');
            var Ut = Fe($e, at);
            if (Ut !== ot) {
              if (!ye(Ut)) return !1;
              var mr = Ue.get($e);
              ye(mr) && ((mr = new w()), Ue.set($e, mr)), mr.set(at, ot);
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
        function He(k) {
          var q = new P(),
            de = {
              isProviderFor: function (Ve, Ge) {
                var $e = q.get(Ve);
                return ye($e) ? !1 : $e.has(Ge);
              },
              OrdinaryDefineOwnMetadata: et,
              OrdinaryHasOwnMetadata: Ue,
              OrdinaryGetOwnMetadata: qe,
              OrdinaryOwnMetadataKeys: Ke,
              OrdinaryDeleteMetadata: Fe
            };
          return W.registerProvider(de), de;
          function Oe(Ve, Ge, $e) {
            var at = q.get(Ve),
              ot = !1;
            if (ye(at)) {
              if (!$e) return;
              (at = new w()), q.set(Ve, at), (ot = !0);
            }
            var Ut = at.get(Ge);
            if (ye(Ut)) {
              if (!$e) return;
              if (((Ut = new w()), at.set(Ge, Ut), !k.setProvider(Ve, Ge, de)))
                throw (at.delete(Ge), ot && q.delete(Ve), new Error('Wrong provider for target.'));
            }
            return Ut;
          }
          function Ue(Ve, Ge, $e) {
            var at = Oe(Ge, $e, !1);
            return ye(at) ? !1 : ke(at.has(Ve));
          }
          function qe(Ve, Ge, $e) {
            var at = Oe(Ge, $e, !1);
            if (!ye(at)) return at.get(Ve);
          }
          function et(Ve, Ge, $e, at) {
            var ot = Oe($e, at, !0);
            ot.set(Ve, Ge);
          }
          function Ke(Ve, Ge) {
            var $e = [],
              at = Oe(Ve, Ge, !1);
            if (ye(at)) return $e;
            for (var ot = at.keys(), Ut = M(ot), mr = 0; ; ) {
              var si = F(Ut);
              if (!si) return ($e.length = mr), $e;
              var ci = L(si);
              try {
                $e[mr] = ci;
              } catch (Tt) {
                try {
                  te(Ut);
                } finally {
                  throw Tt;
                }
              }
              mr++;
            }
          }
          function Fe(Ve, Ge, $e) {
            var at = Oe(Ge, $e, !1);
            if (ye(at) || !at.delete(Ve)) return !1;
            if (at.size === 0) {
              var ot = q.get(Ge);
              ye(ot) || (ot.delete($e), ot.size === 0 && q.delete(ot));
            }
            return !0;
          }
        }
        function rt(k) {
          var q = k.defineMetadata,
            de = k.hasOwnMetadata,
            Oe = k.getOwnMetadata,
            Ue = k.getOwnMetadataKeys,
            qe = k.deleteMetadata,
            et = new P(),
            Ke = {
              isProviderFor: function (Fe, Ve) {
                var Ge = et.get(Fe);
                return !ye(Ge) && Ge.has(Ve)
                  ? !0
                  : Ue(Fe, Ve).length
                    ? (ye(Ge) && ((Ge = new D()), et.set(Fe, Ge)), Ge.add(Ve), !0)
                    : !1;
              },
              OrdinaryDefineOwnMetadata: q,
              OrdinaryHasOwnMetadata: de,
              OrdinaryGetOwnMetadata: Oe,
              OrdinaryOwnMetadataKeys: Ue,
              OrdinaryDeleteMetadata: qe
            };
          return Ke;
        }
        function E(k, q, de) {
          var Oe = W.getProvider(k, q);
          if (!ye(Oe)) return Oe;
          if (de) {
            if (W.setProvider(k, q, z)) return z;
            throw new Error('Illegal state.');
          }
        }
        function m() {
          var k = {},
            q = [],
            de = (function () {
              function Ke(Fe, Ve, Ge) {
                (this._index = 0), (this._keys = Fe), (this._values = Ve), (this._selector = Ge);
              }
              return (
                (Ke.prototype['@@iterator'] = function () {
                  return this;
                }),
                (Ke.prototype[h] = function () {
                  return this;
                }),
                (Ke.prototype.next = function () {
                  var Fe = this._index;
                  if (Fe >= 0 && Fe < this._keys.length) {
                    var Ve = this._selector(this._keys[Fe], this._values[Fe]);
                    return (
                      Fe + 1 >= this._keys.length
                        ? ((this._index = -1), (this._keys = q), (this._values = q))
                        : this._index++,
                      { value: Ve, done: !1 }
                    );
                  }
                  return { value: void 0, done: !0 };
                }),
                (Ke.prototype.throw = function (Fe) {
                  throw (this._index >= 0 && ((this._index = -1), (this._keys = q), (this._values = q)), Fe);
                }),
                (Ke.prototype.return = function (Fe) {
                  return (
                    this._index >= 0 && ((this._index = -1), (this._keys = q), (this._values = q)),
                    { value: Fe, done: !0 }
                  );
                }),
                Ke
              );
            })(),
            Oe = (function () {
              function Ke() {
                (this._keys = []), (this._values = []), (this._cacheKey = k), (this._cacheIndex = -2);
              }
              return (
                Object.defineProperty(Ke.prototype, 'size', {
                  get: function () {
                    return this._keys.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (Ke.prototype.has = function (Fe) {
                  return this._find(Fe, !1) >= 0;
                }),
                (Ke.prototype.get = function (Fe) {
                  var Ve = this._find(Fe, !1);
                  return Ve >= 0 ? this._values[Ve] : void 0;
                }),
                (Ke.prototype.set = function (Fe, Ve) {
                  var Ge = this._find(Fe, !0);
                  return (this._values[Ge] = Ve), this;
                }),
                (Ke.prototype.delete = function (Fe) {
                  var Ve = this._find(Fe, !1);
                  if (Ve >= 0) {
                    for (var Ge = this._keys.length, $e = Ve + 1; $e < Ge; $e++)
                      (this._keys[$e - 1] = this._keys[$e]), (this._values[$e - 1] = this._values[$e]);
                    return (
                      this._keys.length--,
                      this._values.length--,
                      me(Fe, this._cacheKey) && ((this._cacheKey = k), (this._cacheIndex = -2)),
                      !0
                    );
                  }
                  return !1;
                }),
                (Ke.prototype.clear = function () {
                  (this._keys.length = 0), (this._values.length = 0), (this._cacheKey = k), (this._cacheIndex = -2);
                }),
                (Ke.prototype.keys = function () {
                  return new de(this._keys, this._values, Ue);
                }),
                (Ke.prototype.values = function () {
                  return new de(this._keys, this._values, qe);
                }),
                (Ke.prototype.entries = function () {
                  return new de(this._keys, this._values, et);
                }),
                (Ke.prototype['@@iterator'] = function () {
                  return this.entries();
                }),
                (Ke.prototype[h] = function () {
                  return this.entries();
                }),
                (Ke.prototype._find = function (Fe, Ve) {
                  if (!me(this._cacheKey, Fe)) {
                    this._cacheIndex = -1;
                    for (var Ge = 0; Ge < this._keys.length; Ge++)
                      if (me(this._keys[Ge], Fe)) {
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
                Ke
              );
            })();
          return Oe;
          function Ue(Ke, Fe) {
            return Ke;
          }
          function qe(Ke, Fe) {
            return Fe;
          }
          function et(Ke, Fe) {
            return [Ke, Fe];
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
        function V() {
          var k = 16,
            q = v.create(),
            de = Oe();
          return (function () {
            function Fe() {
              this._key = Oe();
            }
            return (
              (Fe.prototype.has = function (Ve) {
                var Ge = Ue(Ve, !1);
                return Ge !== void 0 ? v.has(Ge, this._key) : !1;
              }),
              (Fe.prototype.get = function (Ve) {
                var Ge = Ue(Ve, !1);
                return Ge !== void 0 ? v.get(Ge, this._key) : void 0;
              }),
              (Fe.prototype.set = function (Ve, Ge) {
                var $e = Ue(Ve, !0);
                return ($e[this._key] = Ge), this;
              }),
              (Fe.prototype.delete = function (Ve) {
                var Ge = Ue(Ve, !1);
                return Ge !== void 0 ? delete Ge[this._key] : !1;
              }),
              (Fe.prototype.clear = function () {
                this._key = Oe();
              }),
              Fe
            );
          })();
          function Oe() {
            var Fe;
            do Fe = '@@WeakMap@@' + Ke();
            while (v.has(q, Fe));
            return (q[Fe] = !0), Fe;
          }
          function Ue(Fe, Ve) {
            if (!s.call(Fe, de)) {
              if (!Ve) return;
              Object.defineProperty(Fe, de, { value: v.create() });
            }
            return Fe[de];
          }
          function qe(Fe, Ve) {
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
                    : qe(Ve, Fe),
                Ve
              );
            }
            return qe(new Array(Fe), Fe);
          }
          function Ke() {
            var Fe = et(k);
            (Fe[6] = (Fe[6] & 79) | 64), (Fe[8] = (Fe[8] & 191) | 128);
            for (var Ve = '', Ge = 0; Ge < k; ++Ge) {
              var $e = Fe[Ge];
              (Ge === 4 || Ge === 6 || Ge === 8) && (Ve += '-'),
                $e < 16 && (Ve += '0'),
                (Ve += $e.toString(16).toLowerCase());
            }
            return Ve;
          }
        }
        function ae(k) {
          return (k.__ = void 0), delete k.__, k;
        }
      });
    })(r || (r = {})),
    ng
  );
}
_w();
const my = Symbol('format'),
  py = Symbol('cbor_biguint');
function fr(r) {
  return Reflect.metadata(my, r);
}
function fu() {
  return Reflect.metadata(py, !0);
}
class ig {
  static getCborIndex(a, i) {
    return Reflect.getMetadata(my, a, i);
  }
  static isCborBigUint(a, i) {
    return Reflect.getMetadata(py, a, i);
  }
}
class du {
  constructor(a) {
    Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.value = a);
  }
  static fromString(a) {
    if (!a) throw new Error('Invalid OrderId');
    const i = a.toLowerCase().startsWith('0x') ? a.slice(2) : a;
    if (!/^[0-9a-f]+$/i.test(i)) throw new Error('Invalid OrderId: not a valid hex string');
    return new du(new en(`0x${i}`));
  }
  toString() {
    return this.value.toString();
  }
  equals(a) {
    return a ? this.value.isEqualTo(a.value) : !1;
  }
}
class Ow {
  static encode(a) {
    const i = this.createCborArray(a);
    return Gn.Buffer.from(ty.encode(i));
  }
  static createCborArray(a) {
    if (!a) return [];
    const i = Object.getOwnPropertyNames(a),
      u = [];
    for (const s of i) {
      const f = a[s],
        d = ig.getCborIndex(a, s);
      d !== void 0 && (u[d] = this.processValue(f, a, s));
    }
    return u;
  }
  static processValue(a, i, u) {
    return a === void 0
      ? null
      : a instanceof en
        ? a
        : a instanceof Nt || a instanceof Ie || a instanceof du
          ? a.value
          : a instanceof Uint8Array
            ? a
            : a instanceof Array
              ? this.processArray(a)
              : a instanceof Object
                ? this.createCborArray(a)
                : this.processPrimitive(a, i, u);
  }
  static processArray(a) {
    return a.map((i) => this.createCborArray(i));
  }
  static processPrimitive(a, i, u) {
    return ig.isCborBigUint(i, u) || typeof a == 'bigint' || typeof a == 'number'
      ? a == null
        ? null
        : en(a.toString())
      : a;
  }
}
class Ds {
  static createL2Transaction(a, i, u, s, f = Ys.V0) {
    const d = Ow.encode(s);
    return new Sx(a, i, u, d, f);
  }
  static sign(a, i) {
    return a.sign(i);
  }
}
function lg(r) {
  return {
    body: {
      chain: r.chain.toString(),
      chainNetwork: r.chainNetwork.toString(),
      message: r.message,
      signature: r.signature
    }
  };
}
function ug(r) {
  return {
    body: {
      chain: r.chain.toString(),
      chainNetwork: r.chainNetwork.toString(),
      message: r.message,
      signature: r.signature
    }
  };
}
function Tw(r) {
  var a, i;
  return {
    privateKey: ((a = r.ex3KeyPair) == null ? void 0 : a.privateKeyHex) ?? '',
    publicKey: ((i = r.ex3KeyPair) == null ? void 0 : i.publicKeyHex) ?? ''
  };
}
function Mw(r) {
  return { query: { Chain: r.chain.toString(), PublicKey: r.publicKey, Address: r.address } };
}
function Rw(r) {
  return { hin: BigInt(r.hin) };
}
function Bw(r) {
  return { query: { HIN: String(r) } };
}
function Cw(r) {
  return { query: { HIN: String(r.hin), AssetId: r.assetId ? String(r.assetId) : void 0 } };
}
class cr extends Error {
  constructor(a) {
    super(a), (this.name = 'HibitError');
  }
  static throwBadRequestError(a, i, u) {
    throw i !== void 0 && u !== void 0
      ? new cr(`Bad request: ${a} failed with code ${i} and message ${u}`)
      : i !== void 0
        ? new cr(`Bad request: ${a} failed with code ${i}`)
        : u !== void 0
          ? new cr(`Bad request: ${a} failed with message ${u}`)
          : new cr(`Bad request: ${a}`);
  }
  static throwInvalidResponseError(a) {
    throw new cr(`Invalid response: ${a}`);
  }
  static throwRequiredHINError(a) {
    throw new cr(`HIN is required: ${a}`);
  }
  static throwRequiredPrivKeyError(a) {
    throw new cr(`Private key is required: ${a}`);
  }
  static throwRequiredWalletApiError(a) {
    throw new cr(`Wallet API is required: ${a}`);
  }
}
function dr(r, a, i, u) {
  var s = arguments.length,
    f = s < 3 ? a : u === null ? (u = Object.getOwnPropertyDescriptor(a, i)) : u,
    d;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') f = Reflect.decorate(r, a, i, u);
  else for (var h = r.length - 1; h >= 0; h--) (d = r[h]) && (f = (s < 3 ? d(f) : s > 3 ? d(a, i, f) : d(a, i)) || f);
  return s > 3 && f && Object.defineProperty(a, i, f), f;
}
function hr(r, a) {
  if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function') return Reflect.metadata(r, a);
}
function Wl(r, a) {
  const i = new en(r),
    u = new en(10).pow(a);
  return BigInt(i.multipliedBy(u).toFixed(0));
}
const Dw = 32,
  Uw = 'https://testnetopenapi.hibit.app',
  jw = 'https://openapi.hibit.app',
  kw = 'https://brokerapi.hibit.app',
  Iw = 'https://testnetbrokerapi.hibit.app';
class hu {
  constructor(a) {
    Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'price', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'volume', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.assign(this, a);
  }
}
dr([fr(0), fu(), hr('design:type', Number)], hu.prototype, 'orderSide', void 0);
dr([fr(1), hr('design:type', BigInt)], hu.prototype, 'price', void 0);
dr([fr(2), hr('design:type', BigInt)], hu.prototype, 'volume', void 0);
class li {
  constructor(a) {
    Object.defineProperty(this, 'exactTokens', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'exactTokensType', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'minOut', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'maxIn', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.assign(this, a);
  }
}
dr([fr(0), hr('design:type', BigInt)], li.prototype, 'exactTokens', void 0);
dr([fr(1), fu(), hr('design:type', Number)], li.prototype, 'exactTokensType', void 0);
dr([fr(2), fu(), hr('design:type', Number)], li.prototype, 'orderSide', void 0);
dr([fr(3), hr('design:type', BigInt)], li.prototype, 'minOut', void 0);
dr([fr(4), hr('design:type', BigInt)], li.prototype, 'maxIn', void 0);
class mu {
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
dr([fr(0), fu(), hr('design:type', Number)], mu.prototype, 'orderCategory', void 0);
dr([fr(1), hr('design:type', BigInt)], mu.prototype, 'marketId', void 0);
dr([fr(2), hr('design:type', hu)], mu.prototype, 'limitOrderDetails', void 0);
dr([fr(3), hr('design:type', li)], mu.prototype, 'swapV2OrderDetails', void 0);
class pu {
  constructor(a) {
    Object.defineProperty(this, 'marketId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderId', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'orderSide', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'isCancelAll', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.isCancelAll = !1),
      Object.assign(this, a);
  }
}
dr([fr(0), hr('design:type', BigInt)], pu.prototype, 'marketId', void 0);
dr([fr(1), hr('design:type', du)], pu.prototype, 'orderId', void 0);
dr([fr(2), fu(), hr('design:type', Number)], pu.prototype, 'orderSide', void 0);
dr([fr(3), hr('design:type', Boolean)], pu.prototype, 'isCancelAll', void 0);
function qw(r, a) {
  let i, u, s;
  return (
    r.exactTokensType === _a.Source
      ? ((i = r.orderSide === _t.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals),
        (u = r.orderSide === _t.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals),
        (s = r.orderSide === _t.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals))
      : ((i = r.orderSide === _t.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals),
        (u = r.orderSide === _t.Ask ? a.baseAssetDecimals : a.quoteAssetDecimals),
        (s = r.orderSide === _t.Ask ? a.quoteAssetDecimals : a.baseAssetDecimals)),
    new li({
      exactTokens: Wl(r.exactTokens, i),
      exactTokensType: r.exactTokensType,
      orderSide: r.orderSide,
      minOut: r.minOut ? Wl(r.minOut, u) : void 0,
      maxIn: r.maxIn ? Wl(r.maxIn, s) : void 0
    })
  );
}
function Lw(r, a) {
  return new hu({ orderSide: r.orderSide, price: Wl(r.price, Dw), volume: Wl(r.volume, a.baseAssetDecimals) });
}
function zw(r, a) {
  return new mu({
    orderCategory: r.orderCategory,
    marketId: r.marketId,
    limitOrderDetails: r.limitOrderDetails ? Lw(r.limitOrderDetails, a) : void 0,
    swapV2OrderDetails: r.swapV2OrderDetails ? qw(r.swapV2OrderDetails, a) : void 0
  });
}
function Hw(r) {
  return new pu({
    marketId: r.marketId,
    orderId: r.orderId ? du.fromString(r.orderId) : void 0,
    orderSide: r.orderSide,
    isCancelAll: r.isCancelAll
  });
}
class Fw {
  constructor() {
    Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, 'walletApi', { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  getOptions() {
    return this.options;
  }
  setOptions(a) {
    (this.options = a), Ct.setConfig({ baseUrl: a.network === on.Mainnet ? jw : Uw });
  }
  setWalletApi(a) {
    this.walletApi = a;
  }
  async getTimestamp() {
    var u, s;
    const a = 'getTimestamp',
      i = await Ux();
    return (
      this.ensureSuccess(a, i.data),
      ((s = (u = i.data) == null ? void 0 : u.data) != null && s.timestamp) || cr.throwInvalidResponseError(a),
      i.data.data.timestamp
    );
  }
  async getChains() {
    const a = 'getChains',
      i = await qx();
    return this.ensureSuccess(a, i.data), i.data.data.map((u) => jS(u));
  }
  async getAssets(a) {
    const i = 'getAssets',
      u = await jx(aw(a));
    return (
      this.ensureSuccess(i, u.data), { items: u.data.data.items.map((s) => Jp(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getAsset(a) {
    const i = 'getAsset',
      u = await kx(iw(a));
    return this.ensureSuccess(i, u.data), u.data.data.map((s) => Jp(s));
  }
  async getChainBalances(a) {
    const i = 'getChainBalances',
      u = await Lx(lw(a));
    this.ensureSuccess(i, u.data);
    const s = new Map();
    for (const [f, d] of Object.entries(u.data.data)) s.set(f, en(d));
    return s;
  }
  async getWithdrawFee(a) {
    const i = 'getWithdrawFee',
      u = await Ix(uw(a));
    return this.ensureSuccess(i, u.data), sw(u.data.data);
  }
  async getMarkets(a) {
    const i = 'getMarkets',
      u = await Yx(cw(a));
    return (
      this.ensureSuccess(i, u.data), { items: u.data.data.items.map((s) => Wp(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getMarket(a) {
    const i = 'getMarket',
      u = await Kx(ow(a));
    return this.ensureSuccess(i, u.data), Wp(u.data.data);
  }
  async getMarketsTicker(a) {
    const i = 'getMarketsTicker',
      u = await Pp(fw(a));
    return this.ensureSuccess(i, u.data), u.data.data.items.map((s) => tg(s));
  }
  async getMarkets24HrTicker(a) {
    const i = 'getMarkets24HrTicker',
      u = await Pp(eg(a || {}));
    return this.ensureSuccess(i, u.data), u.data.data.items.map((s) => tg(s));
  }
  async getMarkets24HrTickerExtended(a) {
    const i = 'getMarkets24HrTickerExtended',
      u = await Vx(eg(a || {}));
    return this.ensureSuccess(i, u.data), u.data.data.items.map((s) => dw(s));
  }
  async getMarketsSwapInfo(a) {
    const i = 'getMarketsSwapInfo',
      u = await Fx(yw(a));
    return this.ensureSuccess(i, u.data), u.data.data.items.map((s) => vw(s));
  }
  async getMarketDepth(a) {
    const i = 'getMarketDepth',
      u = await Hx(bw(a));
    return this.ensureSuccess(i, u.data), Sw(u.data.data);
  }
  async getMarketKline(a) {
    const i = 'getMarketKline',
      u = await Gx(hw(a));
    return (
      this.ensureSuccess(i, u.data), { items: u.data.data.items.map((s) => mw(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getMarketTrade(a) {
    const i = 'getMarketTrade',
      u = await $x(pw(a));
    return (
      this.ensureSuccess(i, u.data), { items: u.data.data.items.map((s) => gw(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getOrders(a) {
    const i = 'getOrders';
    this.ensureHIN(i);
    const u = await Zx(ww(a));
    return (
      this.ensureSuccess(i, u.data), { items: u.data.data.items.map((s) => rg(s)), totalCount: u.data.data.totalCount }
    );
  }
  async getOrder(a) {
    const i = 'getOrder';
    xw(a) ||
      cr.throwBadRequestError(
        i,
        400,
        'Must have exactly one of the following properties set: `OrderId`, `ClientOrderId`, or `TxHash`'
      );
    const u = await Qx(Ew(a));
    return this.ensureSuccess(i, u.data), rg(u.data.data);
  }
  async getOrderTrades(a) {
    const i = 'getOrderTrades',
      u = await Xx(Aw(a));
    return this.ensureSuccess(i, u.data), u.data.data.map((s) => Nw(s));
  }
  async submitSpotOrder(a, i, u) {
    const s = 'submitSpotOrder';
    this.ensurePrivateKey(s);
    const f = u ? BigInt(u) : await this.getNonce(this.options.hin),
      d = zw(a, i),
      h = Ds.createL2Transaction($s.CreateSpotOrder, this.options.hin, f | 0n, d),
      p = Ds.sign(h, this.options.proxyKey),
      g = await Px(Kp(p));
    this.ensureSuccess(s, g.data);
  }
  async cancelSpotOrder(a, i) {
    const u = 'cancelSpotOrder';
    this.ensurePrivateKey(u), (a.isCancelAll === void 0 || a.isCancelAll === null) && (a.isCancelAll = !1);
    const s = i ? BigInt(i) : await this.getNonce(this.options.hin),
      f = Hw(a),
      d = Ds.createL2Transaction($s.CancelSpotOrder, this.options.hin, s | 0n, f),
      h = Ds.sign(d, this.options.proxyKey),
      p = await Jx(Kp(h));
    this.ensureSuccess(u, p.data);
  }
  async walletRegister(a) {
    const i = 'walletRegister';
    this.ensureWalletApi(i);
    const u = this.walletApi.generateWalletRegistrationMessage(a),
      s = await this.walletApi.signMessage(u),
      f = new Cs(a.chain, Ie.AnyNetwork, u, s),
      d = await tw(lg(f));
    this.ensureSuccess(i, d.data);
  }
  async getRegisteredWalletInfo(a) {
    const i = 'getRegisteredWalletInfo';
    this.ensureWalletApi(i);
    const u = await rw(Mw(a));
    return this.ensureSuccess(i, u.data), Rw(u.data.data);
  }
  async resetProxyKey(a) {
    const i = 'resetProxyKey';
    this.ensureWalletApi(i);
    const u = this.walletApi.generateWalletResetProxyKeyMessage(a),
      s = await this.walletApi.signMessage(u),
      f = Nt.Ethereum,
      d = new Cs(f, Ie.AnyNetwork, u, s),
      h = await zx(lg(d));
    this.ensureSuccess(i, h.data);
  }
  async getProxyKeypair(a) {
    const i = 'getProxyKeypair';
    this.ensureWalletApi(i);
    const u = this.walletApi.generateGetProxyKeyMessage(a),
      s = await this.walletApi.signMessage(u),
      f = Nt.Ethereum,
      d = new Cs(f, Ie.AnyNetwork, u, s),
      h = await Qp(ug(d));
    return this.ensureSuccess(i, h.data), Tw(h.data.data);
  }
  async getWalletBalances(a) {
    const i = 'getWalletBalances',
      u = await ew(Cw(a));
    this.ensureSuccess(i, u.data);
    const s = new Map();
    for (const [f, d] of Object.entries(u.data.data)) s.set(f, en(d));
    return s;
  }
  async withdraw(a) {
    const i = 'withdraw';
    this.ensureHIN(i), this.ensureWalletApi(i);
    const u = this.walletApi.generateWithdrawMessage(a, this.options.hin),
      s = await this.walletApi.signMessage(u),
      f = new Cs(a.targetChain, a.targetChainNetwork, u, s),
      d = await Qp(ug(f));
    this.ensureSuccess(i, d.data);
  }
  async getNonce(a) {
    const i = 'getNonce',
      u = await Wx(Bw(a));
    return this.ensureSuccess(i, u.data), BigInt(u.data.data.nonce);
  }
  ensureSuccess(a, i) {
    (i == null ? void 0 : i.code) != 200 &&
      cr.throwBadRequestError(a, i == null ? void 0 : i.code, i == null ? void 0 : i.message);
  }
  ensurePrivateKey(a) {
    this.ensureHIN(a), this.options.proxyKey || cr.throwRequiredPrivKeyError(a);
  }
  ensureHIN(a) {
    this.options.hin || cr.throwRequiredHINError(a);
  }
  ensureWalletApi(a) {
    this.walletApi || cr.throwRequiredWalletApiError(a);
  }
}
const Dt = ({ title: r, form: a, loading: i, result: u, error: s }) =>
  _.jsxs('section', {
    children: [
      _.jsx('h2', { className: 'text-lg font-bold', children: r }),
      _.jsxs('div', {
        className: 'flex mt-2 border rounded-lg overflow-hidden',
        children: [
          _.jsx('div', { className: `${typeof u < 'u' ? 'max-w-1/2 border-r' : 'flex-1'} p-4`, children: a }),
          typeof u < 'u' &&
            _.jsxs('div', {
              className: 'p-4 flex flex-col gap-2 overflow-hidden',
              children: [
                _.jsx('p', { className: 'text-sm text-gray-600', children: 'Result' }),
                _.jsx('pre', {
                  className: 'max-w-full max-h-[500px] overflow-auto',
                  children: i
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
function Vw({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    h = async () => {
      i(!0), s(null), d('');
      try {
        s(await r.getTimestamp());
      } catch (p) {
        d(p.message ?? JSON.stringify(p));
      } finally {
        i(!1);
      }
    };
  return _.jsx(Dt, {
    title: 'GetTimestamp',
    form: _.jsx('div', {
      children: _.jsx('button', { className: 'btn', onClick: h, disabled: a, children: a ? 'Loading...' : 'Submit' })
    }),
    loading: a,
    result: u,
    error: f
  });
}
function Gw({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    h = async () => {
      i(!0), s(null), d('');
      try {
        s(await r.getChains());
      } catch (p) {
        d(p.message ?? JSON.stringify(p));
      } finally {
        i(!1);
      }
    };
  return _.jsx(Dt, {
    title: 'GetChains',
    form: _.jsx('div', {
      children: _.jsx('button', { className: 'btn', onClick: h, disabled: a, children: a ? 'Loading...' : 'Submit' })
    }),
    loading: a,
    result: u,
    error: f
  });
}
var gu = (r) => r.type === 'checkbox',
  Ja = (r) => r instanceof Date,
  yr = (r) => r == null;
const gy = (r) => typeof r == 'object';
var Yt = (r) => !yr(r) && !Array.isArray(r) && gy(r) && !Ja(r),
  yy = (r) => (Yt(r) && r.target ? (gu(r.target) ? r.target.checked : r.target.value) : r),
  $w = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
  vy = (r, a) => r.has($w(a)),
  Yw = (r) => {
    const a = r.constructor && r.constructor.prototype;
    return Yt(a) && a.hasOwnProperty('isPrototypeOf');
  },
  Nd = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Ar(r) {
  let a;
  const i = Array.isArray(r),
    u = typeof FileList < 'u' ? r instanceof FileList : !1;
  if (r instanceof Date) a = new Date(r);
  else if (r instanceof Set) a = new Set(r);
  else if (!(Nd && (r instanceof Blob || u)) && (i || Yt(r)))
    if (((a = i ? [] : {}), !i && !Yw(r))) a = r;
    else for (const s in r) r.hasOwnProperty(s) && (a[s] = Ar(r[s]));
  else return r;
  return a;
}
var dc = (r) => (Array.isArray(r) ? r.filter(Boolean) : []),
  $t = (r) => r === void 0,
  Le = (r, a, i) => {
    if (!a || !Yt(r)) return i;
    const u = dc(a.split(/[,[\].]+?/)).reduce((s, f) => (yr(s) ? s : s[f]), r);
    return $t(u) || u === r ? ($t(r[a]) ? i : r[a]) : u;
  },
  Wr = (r) => typeof r == 'boolean',
  _d = (r) => /^\w*$/.test(r),
  by = (r) => dc(r.replace(/["|']|\]/g, '').split(/\.|\[/)),
  xt = (r, a, i) => {
    let u = -1;
    const s = _d(a) ? [a] : by(a),
      f = s.length,
      d = f - 1;
    for (; ++u < f; ) {
      const h = s[u];
      let p = i;
      if (u !== d) {
        const g = r[h];
        p = Yt(g) || Array.isArray(g) ? g : isNaN(+s[u + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      (r[h] = p), (r = r[h]);
    }
    return r;
  };
const Ps = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
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
  Kw = wt.createContext(null),
  Od = () => wt.useContext(Kw);
var Sy = (r, a, i, u = !0) => {
    const s = { defaultValues: a._defaultValues };
    for (const f in r)
      Object.defineProperty(s, f, {
        get: () => {
          const d = f;
          return a._proxyFormState[d] !== un.all && (a._proxyFormState[d] = !u || un.all), i && (i[d] = !0), r[d];
        }
      });
    return s;
  },
  Nr = (r) => Yt(r) && !Object.keys(r).length,
  xy = (r, a, i, u) => {
    i(r);
    const { name: s, ...f } = r;
    return (
      Nr(f) || Object.keys(f).length >= Object.keys(a).length || Object.keys(f).find((d) => a[d] === (!u || un.all))
    );
  },
  eu = (r) => (Array.isArray(r) ? r : [r]),
  wy = (r, a, i) => !r || !a || r === a || eu(r).some((u) => u && (i ? u === a : u.startsWith(a) || a.startsWith(u)));
function Td(r) {
  const a = wt.useRef(r);
  (a.current = r),
    wt.useEffect(() => {
      const i = !r.disabled && a.current.subject && a.current.subject.subscribe({ next: a.current.next });
      return () => {
        i && i.unsubscribe();
      };
    }, [r.disabled]);
}
function Xw(r) {
  const a = Od(),
    { control: i = a.control, disabled: u, name: s, exact: f } = r || {},
    [d, h] = wt.useState(i._formState),
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
    Td({
      disabled: u,
      next: (v) =>
        p.current && wy(N.current, v.name, f) && xy(v, g.current, i._updateFormState) && h({ ...i._formState, ...v }),
      subject: i._subjects.state
    }),
    wt.useEffect(
      () => (
        (p.current = !0),
        g.current.isValid && i._updateValid(!0),
        () => {
          p.current = !1;
        }
      ),
      [i]
    ),
    wt.useMemo(() => Sy(d, i, g.current, !1), [d, i])
  );
}
var wn = (r) => typeof r == 'string',
  Ey = (r, a, i, u, s) =>
    wn(r)
      ? (u && a.watch.add(r), Le(i, r, s))
      : Array.isArray(r)
        ? r.map((f) => (u && a.watch.add(f), Le(i, f)))
        : (u && (a.watchAll = !0), i);
function Zw(r) {
  const a = Od(),
    { control: i = a.control, name: u, defaultValue: s, disabled: f, exact: d } = r || {},
    h = wt.useRef(u);
  (h.current = u),
    Td({
      disabled: f,
      subject: i._subjects.values,
      next: (N) => {
        wy(h.current, N.name, d) && g(Ar(Ey(h.current, i._names, N.values || i._formValues, !1, s)));
      }
    });
  const [p, g] = wt.useState(i._getWatch(u, s));
  return wt.useEffect(() => i._removeUnmounted()), p;
}
function Qw(r) {
  const a = Od(),
    { name: i, disabled: u, control: s = a.control, shouldUnregister: f } = r,
    d = vy(s._names.array, i),
    h = Zw({
      control: s,
      name: i,
      defaultValue: Le(s._formValues, i, Le(s._defaultValues, i, r.defaultValue)),
      exact: !0
    }),
    p = Xw({ control: s, name: i, exact: !0 }),
    g = wt.useRef(s.register(i, { ...r.rules, value: h, ...(Wr(r.disabled) ? { disabled: r.disabled } : {}) })),
    N = wt.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!Le(p.errors, i) },
            isDirty: { enumerable: !0, get: () => !!Le(p.dirtyFields, i) },
            isTouched: { enumerable: !0, get: () => !!Le(p.touchedFields, i) },
            isValidating: { enumerable: !0, get: () => !!Le(p.validatingFields, i) },
            error: { enumerable: !0, get: () => Le(p.errors, i) }
          }
        ),
      [p, i]
    ),
    v = wt.useMemo(
      () => ({
        name: i,
        value: h,
        ...(Wr(u) || p.disabled ? { disabled: p.disabled || u } : {}),
        onChange: (S) => g.current.onChange({ target: { value: yy(S), name: i }, type: Ps.CHANGE }),
        onBlur: () => g.current.onBlur({ target: { value: Le(s._formValues, i), name: i }, type: Ps.BLUR }),
        ref: (S) => {
          const w = Le(s._fields, i);
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
      [i, s._formValues, u, p.disabled, h, s._fields]
    );
  return (
    wt.useEffect(() => {
      const S = s._options.shouldUnregister || f,
        w = (D, P) => {
          const J = Le(s._fields, D);
          J && J._f && (J._f.mount = P);
        };
      if ((w(i, !0), S)) {
        const D = Ar(Le(s._options.defaultValues, i));
        xt(s._defaultValues, i, D), $t(Le(s._formValues, i)) && xt(s._formValues, i, D);
      }
      return (
        !d && s.register(i),
        () => {
          (d ? S && !s._state.action : S) ? s.unregister(i) : w(i, !1);
        }
      );
    }, [i, s, d, f]),
    wt.useEffect(() => {
      s._updateDisabledField({ disabled: u, fields: s._fields, name: i });
    }, [u, i, s]),
    wt.useMemo(() => ({ field: v, formState: p, fieldState: N }), [v, p, N])
  );
}
const or = (r) => r.render(Qw(r));
var Ay = (r, a, i, u, s) => (a ? { ...i[r], types: { ...(i[r] && i[r].types ? i[r].types : {}), [u]: s || !0 } } : {}),
  sg = (r) => ({
    isOnSubmit: !r || r === un.onSubmit,
    isOnBlur: r === un.onBlur,
    isOnChange: r === un.onChange,
    isOnAll: r === un.all,
    isOnTouch: r === un.onTouched
  }),
  cg = (r, a, i) =>
    !i &&
    (a.watchAll || a.watch.has(r) || [...a.watch].some((u) => r.startsWith(u) && /^\.\w+/.test(r.slice(u.length))));
const tu = (r, a, i, u) => {
  for (const s of i || Object.keys(r)) {
    const f = Le(r, s);
    if (f) {
      const { _f: d, ...h } = f;
      if (d) {
        if (d.refs && d.refs[0] && a(d.refs[0], s) && !u) return !0;
        if (d.ref && a(d.ref, d.name) && !u) return !0;
        if (tu(h, a)) break;
      } else if (Yt(h) && tu(h, a)) break;
    }
  }
};
var Pw = (r, a, i) => {
    const u = eu(Le(r, i));
    return xt(u, 'root', a[i]), xt(r, i, u), r;
  },
  Md = (r) => r.type === 'file',
  xn = (r) => typeof r == 'function',
  Js = (r) => {
    if (!Nd) return !1;
    const a = r ? r.ownerDocument : 0;
    return r instanceof (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement);
  },
  Ls = (r) => wn(r),
  Rd = (r) => r.type === 'radio',
  Ws = (r) => r instanceof RegExp;
const og = { value: !1, isValid: !1 },
  fg = { value: !0, isValid: !0 };
var Ny = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const a = r.filter((i) => i && i.checked && !i.disabled).map((i) => i.value);
      return { value: a, isValid: !!a.length };
    }
    return r[0].checked && !r[0].disabled
      ? r[0].attributes && !$t(r[0].attributes.value)
        ? $t(r[0].value) || r[0].value === ''
          ? fg
          : { value: r[0].value, isValid: !0 }
        : fg
      : og;
  }
  return og;
};
const dg = { isValid: !1, value: null };
var _y = (r) =>
  Array.isArray(r) ? r.reduce((a, i) => (i && i.checked && !i.disabled ? { isValid: !0, value: i.value } : a), dg) : dg;
function hg(r, a, i = 'validate') {
  if (Ls(r) || (Array.isArray(r) && r.every(Ls)) || (Wr(r) && !r)) return { type: i, message: Ls(r) ? r : '', ref: a };
}
var Hi = (r) => (Yt(r) && !Ws(r) ? r : { value: r, message: '' }),
  mg = async (r, a, i, u, s, f) => {
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
      z = Le(i, P);
    if (!W || a.has(P)) return {};
    const Se = h ? h[0] : d,
      ze = (Y) => {
        s && Se.reportValidity && (Se.setCustomValidity(Wr(Y) ? '' : Y || ''), Se.reportValidity());
      },
      we = {},
      he = Rd(d),
      Ae = gu(d),
      b = he || Ae,
      A =
        ((J || Md(d)) && $t(d.value) && $t(z)) ||
        (Js(d) && d.value === '') ||
        z === '' ||
        (Array.isArray(z) && !z.length),
      O = Ay.bind(null, P, u, we),
      G = (Y, K, Z, I = Fn.maxLength, R = Fn.minLength) => {
        const $ = Y ? K : Z;
        we[P] = { type: Y ? I : R, message: $, ref: d, ...O(Y ? I : R, $) };
      };
    if (
      f
        ? !Array.isArray(z) || !z.length
        : p && ((!b && (A || yr(z))) || (Wr(z) && !z) || (Ae && !Ny(h).isValid) || (he && !_y(h).isValid))
    ) {
      const { value: Y, message: K } = Ls(p) ? { value: !!p, message: p } : Hi(p);
      if (Y && ((we[P] = { type: Fn.required, message: K, ref: Se, ...O(Fn.required, K) }), !u)) return ze(K), we;
    }
    if (!A && (!yr(v) || !yr(S))) {
      let Y, K;
      const Z = Hi(S),
        I = Hi(v);
      if (!yr(z) && !isNaN(z)) {
        const R = d.valueAsNumber || (z && +z);
        yr(Z.value) || (Y = R > Z.value), yr(I.value) || (K = R < I.value);
      } else {
        const R = d.valueAsDate || new Date(z),
          $ = (j) => new Date(new Date().toDateString() + ' ' + j),
          H = d.type == 'time',
          oe = d.type == 'week';
        wn(Z.value) && z && (Y = H ? $(z) > $(Z.value) : oe ? z > Z.value : R > new Date(Z.value)),
          wn(I.value) && z && (K = H ? $(z) < $(I.value) : oe ? z < I.value : R < new Date(I.value));
      }
      if ((Y || K) && (G(!!Y, Z.message, I.message, Fn.max, Fn.min), !u)) return ze(we[P].message), we;
    }
    if ((g || N) && !A && (wn(z) || (f && Array.isArray(z)))) {
      const Y = Hi(g),
        K = Hi(N),
        Z = !yr(Y.value) && z.length > +Y.value,
        I = !yr(K.value) && z.length < +K.value;
      if ((Z || I) && (G(Z, Y.message, K.message), !u)) return ze(we[P].message), we;
    }
    if (w && !A && wn(z)) {
      const { value: Y, message: K } = Hi(w);
      if (Ws(Y) && !z.match(Y) && ((we[P] = { type: Fn.pattern, message: K, ref: d, ...O(Fn.pattern, K) }), !u))
        return ze(K), we;
    }
    if (D) {
      if (xn(D)) {
        const Y = await D(z, i),
          K = hg(Y, Se);
        if (K && ((we[P] = { ...K, ...O(Fn.validate, K.message) }), !u)) return ze(K.message), we;
      } else if (Yt(D)) {
        let Y = {};
        for (const K in D) {
          if (!Nr(Y) && !u) break;
          const Z = hg(await D[K](z, i), Se, K);
          Z && ((Y = { ...Z, ...O(K, Z.message) }), ze(Z.message), u && (we[P] = Y));
        }
        if (!Nr(Y) && ((we[P] = { ref: Se, ...Y }), !u)) return we;
      }
    }
    return ze(!0), we;
  };
function Jw(r, a) {
  const i = a.slice(0, -1).length;
  let u = 0;
  for (; u < i; ) r = $t(r) ? u++ : r[a[u++]];
  return r;
}
function Ww(r) {
  for (const a in r) if (r.hasOwnProperty(a) && !$t(r[a])) return !1;
  return !0;
}
function Jt(r, a) {
  const i = Array.isArray(a) ? a : _d(a) ? [a] : by(a),
    u = i.length === 1 ? r : Jw(r, i),
    s = i.length - 1,
    f = i[s];
  return u && delete u[f], s !== 0 && ((Yt(u) && Nr(u)) || (Array.isArray(u) && Ww(u))) && Jt(r, i.slice(0, -1)), r;
}
var Xf = () => {
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
  ud = (r) => yr(r) || !gy(r);
function Na(r, a) {
  if (ud(r) || ud(a)) return r === a;
  if (Ja(r) && Ja(a)) return r.getTime() === a.getTime();
  const i = Object.keys(r),
    u = Object.keys(a);
  if (i.length !== u.length) return !1;
  for (const s of i) {
    const f = r[s];
    if (!u.includes(s)) return !1;
    if (s !== 'ref') {
      const d = a[s];
      if ((Ja(f) && Ja(d)) || (Yt(f) && Yt(d)) || (Array.isArray(f) && Array.isArray(d)) ? !Na(f, d) : f !== d)
        return !1;
    }
  }
  return !0;
}
var Oy = (r) => r.type === 'select-multiple',
  eE = (r) => Rd(r) || gu(r),
  Zf = (r) => Js(r) && r.isConnected,
  Ty = (r) => {
    for (const a in r) if (xn(r[a])) return !0;
    return !1;
  };
function ec(r, a = {}) {
  const i = Array.isArray(r);
  if (Yt(r) || i)
    for (const u in r)
      Array.isArray(r[u]) || (Yt(r[u]) && !Ty(r[u]))
        ? ((a[u] = Array.isArray(r[u]) ? [] : {}), ec(r[u], a[u]))
        : yr(r[u]) || (a[u] = !0);
  return a;
}
function My(r, a, i) {
  const u = Array.isArray(r);
  if (Yt(r) || u)
    for (const s in r)
      Array.isArray(r[s]) || (Yt(r[s]) && !Ty(r[s]))
        ? $t(a) || ud(i[s])
          ? (i[s] = Array.isArray(r[s]) ? ec(r[s], []) : { ...ec(r[s]) })
          : My(r[s], yr(a) ? {} : a[s], i[s])
        : (i[s] = !Na(r[s], a[s]));
  return i;
}
var Yl = (r, a) => My(r, a, ec(a)),
  Ry = (r, { valueAsNumber: a, valueAsDate: i, setValueAs: u }) =>
    $t(r) ? r : a ? (r === '' ? NaN : r && +r) : i && wn(r) ? new Date(r) : u ? u(r) : r;
function Qf(r) {
  const a = r.ref;
  return Md(a)
    ? a.files
    : Rd(a)
      ? _y(r.refs).value
      : Oy(a)
        ? [...a.selectedOptions].map(({ value: i }) => i)
        : gu(a)
          ? Ny(r.refs).value
          : Ry($t(a.value) ? r.ref.value : a.value, r);
}
var tE = (r, a, i, u) => {
    const s = {};
    for (const f of r) {
      const d = Le(a, f);
      d && xt(s, f, d._f);
    }
    return { criteriaMode: i, names: [...r], fields: s, shouldUseNativeValidation: u };
  },
  Kl = (r) => ($t(r) ? r : Ws(r) ? r.source : Yt(r) ? (Ws(r.value) ? r.value.source : r.value) : r);
const pg = 'AsyncFunction';
var rE = (r) =>
    !!r &&
    !!r.validate &&
    !!(
      (xn(r.validate) && r.validate.constructor.name === pg) ||
      (Yt(r.validate) && Object.values(r.validate).find((a) => a.constructor.name === pg))
    ),
  nE = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);
function gg(r, a, i) {
  const u = Le(r, i);
  if (u || _d(i)) return { error: u, name: i };
  const s = i.split('.');
  for (; s.length; ) {
    const f = s.join('.'),
      d = Le(a, f),
      h = Le(r, f);
    if (d && !Array.isArray(d) && i !== f) return { name: i };
    if (h && h.type) return { name: f, error: h };
    s.pop();
  }
  return { name: i };
}
var aE = (r, a, i, u, s) =>
    s.isOnAll
      ? !1
      : !i && s.isOnTouch
        ? !(a || r)
        : (i ? u.isOnBlur : s.isOnBlur)
          ? !r
          : (i ? u.isOnChange : s.isOnChange)
            ? r
            : !0,
  iE = (r, a) => !dc(Le(r, a)).length && Jt(r, a);
const lE = { mode: un.onSubmit, reValidateMode: un.onChange, shouldFocusError: !0 };
function uE(r = {}) {
  let a = { ...lE, ...r },
    i = {
      submitCount: 0,
      isDirty: !1,
      isLoading: xn(a.defaultValues),
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
    u = {},
    s = Yt(a.defaultValues) || Yt(a.values) ? Ar(a.defaultValues || a.values) || {} : {},
    f = a.shouldUnregister ? {} : Ar(s),
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
    v = { values: Xf(), array: Xf(), state: Xf() },
    S = sg(a.mode),
    w = sg(a.reValidateMode),
    D = a.criteriaMode === un.all,
    P = (M) => (L) => {
      clearTimeout(g), (g = setTimeout(M, L));
    },
    J = async (M) => {
      if (!a.disabled && (N.isValid || M)) {
        const L = a.resolver ? Nr((await b()).errors) : await O(u, !0);
        L !== i.isValid && v.state.next({ isValid: L });
      }
    },
    W = (M, L) => {
      !a.disabled &&
        (N.isValidating || N.validatingFields) &&
        ((M || Array.from(h.mount)).forEach((F) => {
          F && (L ? xt(i.validatingFields, F, L) : Jt(i.validatingFields, F));
        }),
        v.state.next({ validatingFields: i.validatingFields, isValidating: !Nr(i.validatingFields) }));
    },
    z = (M, L = [], F, te, ve = !0, xe = !0) => {
      if (te && F && !a.disabled) {
        if (((d.action = !0), xe && Array.isArray(Le(u, M)))) {
          const De = F(Le(u, M), te.argA, te.argB);
          ve && xt(u, M, De);
        }
        if (xe && Array.isArray(Le(i.errors, M))) {
          const De = F(Le(i.errors, M), te.argA, te.argB);
          ve && xt(i.errors, M, De), iE(i.errors, M);
        }
        if (N.touchedFields && xe && Array.isArray(Le(i.touchedFields, M))) {
          const De = F(Le(i.touchedFields, M), te.argA, te.argB);
          ve && xt(i.touchedFields, M, De);
        }
        N.dirtyFields && (i.dirtyFields = Yl(s, f)),
          v.state.next({ name: M, isDirty: Y(M, L), dirtyFields: i.dirtyFields, errors: i.errors, isValid: i.isValid });
      } else xt(f, M, L);
    },
    Se = (M, L) => {
      xt(i.errors, M, L), v.state.next({ errors: i.errors });
    },
    ze = (M) => {
      (i.errors = M), v.state.next({ errors: i.errors, isValid: !1 });
    },
    we = (M, L, F, te) => {
      const ve = Le(u, M);
      if (ve) {
        const xe = Le(f, M, $t(F) ? Le(s, M) : F);
        $t(xe) || (te && te.defaultChecked) || L ? xt(f, M, L ? xe : Qf(ve._f)) : I(M, xe), d.mount && J();
      }
    },
    he = (M, L, F, te, ve) => {
      let xe = !1,
        De = !1;
      const He = { name: M };
      if (!a.disabled) {
        const rt = !!(Le(u, M) && Le(u, M)._f && Le(u, M)._f.disabled);
        if (!F || te) {
          N.isDirty && ((De = i.isDirty), (i.isDirty = He.isDirty = Y()), (xe = De !== He.isDirty));
          const E = rt || Na(Le(s, M), L);
          (De = !!(!rt && Le(i.dirtyFields, M))),
            E || rt ? Jt(i.dirtyFields, M) : xt(i.dirtyFields, M, !0),
            (He.dirtyFields = i.dirtyFields),
            (xe = xe || (N.dirtyFields && De !== !E));
        }
        if (F) {
          const E = Le(i.touchedFields, M);
          E ||
            (xt(i.touchedFields, M, F),
            (He.touchedFields = i.touchedFields),
            (xe = xe || (N.touchedFields && E !== F)));
        }
        xe && ve && v.state.next(He);
      }
      return xe ? He : {};
    },
    Ae = (M, L, F, te) => {
      const ve = Le(i.errors, M),
        xe = N.isValid && Wr(L) && i.isValid !== L;
      if (
        (a.delayError && F
          ? ((p = P(() => Se(M, F))), p(a.delayError))
          : (clearTimeout(g), (p = null), F ? xt(i.errors, M, F) : Jt(i.errors, M)),
        (F ? !Na(ve, F) : ve) || !Nr(te) || xe)
      ) {
        const De = { ...te, ...(xe && Wr(L) ? { isValid: L } : {}), errors: i.errors, name: M };
        (i = { ...i, ...De }), v.state.next(De);
      }
    },
    b = async (M) => {
      W(M, !0);
      const L = await a.resolver(f, a.context, tE(M || h.mount, u, a.criteriaMode, a.shouldUseNativeValidation));
      return W(M), L;
    },
    A = async (M) => {
      const { errors: L } = await b(M);
      if (M)
        for (const F of M) {
          const te = Le(L, F);
          te ? xt(i.errors, F, te) : Jt(i.errors, F);
        }
      else i.errors = L;
      return L;
    },
    O = async (M, L, F = { valid: !0 }) => {
      for (const te in M) {
        const ve = M[te];
        if (ve) {
          const { _f: xe, ...De } = ve;
          if (xe) {
            const He = h.array.has(xe.name),
              rt = ve._f && rE(ve._f);
            rt && N.validatingFields && W([te], !0);
            const E = await mg(ve, h.disabled, f, D, a.shouldUseNativeValidation && !L, He);
            if ((rt && N.validatingFields && W([te]), E[xe.name] && ((F.valid = !1), L))) break;
            !L &&
              (Le(E, xe.name)
                ? He
                  ? Pw(i.errors, E, xe.name)
                  : xt(i.errors, xe.name, E[xe.name])
                : Jt(i.errors, xe.name));
          }
          !Nr(De) && (await O(De, L, F));
        }
      }
      return F.valid;
    },
    G = () => {
      for (const M of h.unMount) {
        const L = Le(u, M);
        L && (L._f.refs ? L._f.refs.every((F) => !Zf(F)) : !Zf(L._f.ref)) && Me(M);
      }
      h.unMount = new Set();
    },
    Y = (M, L) => !a.disabled && (M && L && xt(f, M, L), !Na(ne(), s)),
    K = (M, L, F) => Ey(M, h, { ...(d.mount ? f : $t(L) ? s : wn(M) ? { [M]: L } : L) }, F, L),
    Z = (M) => dc(Le(d.mount ? f : s, M, a.shouldUnregister ? Le(s, M, []) : [])),
    I = (M, L, F = {}) => {
      const te = Le(u, M);
      let ve = L;
      if (te) {
        const xe = te._f;
        xe &&
          (!xe.disabled && xt(f, M, Ry(L, xe)),
          (ve = Js(xe.ref) && yr(L) ? '' : L),
          Oy(xe.ref)
            ? [...xe.ref.options].forEach((De) => (De.selected = ve.includes(De.value)))
            : xe.refs
              ? gu(xe.ref)
                ? xe.refs.length > 1
                  ? xe.refs.forEach(
                      (De) =>
                        (!De.defaultChecked || !De.disabled) &&
                        (De.checked = Array.isArray(ve) ? !!ve.find((He) => He === De.value) : ve === De.value)
                    )
                  : xe.refs[0] && (xe.refs[0].checked = !!ve)
                : xe.refs.forEach((De) => (De.checked = De.value === ve))
              : Md(xe.ref)
                ? (xe.ref.value = '')
                : ((xe.ref.value = ve), xe.ref.type || v.values.next({ name: M, values: { ...f } })));
      }
      (F.shouldDirty || F.shouldTouch) && he(M, ve, F.shouldTouch, F.shouldDirty, !0), F.shouldValidate && j(M);
    },
    R = (M, L, F) => {
      for (const te in L) {
        const ve = L[te],
          xe = `${M}.${te}`,
          De = Le(u, xe);
        (h.array.has(M) || Yt(ve) || (De && !De._f)) && !Ja(ve) ? R(xe, ve, F) : I(xe, ve, F);
      }
    },
    $ = (M, L, F = {}) => {
      const te = Le(u, M),
        ve = h.array.has(M),
        xe = Ar(L);
      xt(f, M, xe),
        ve
          ? (v.array.next({ name: M, values: { ...f } }),
            (N.isDirty || N.dirtyFields) &&
              F.shouldDirty &&
              v.state.next({ name: M, dirtyFields: Yl(s, f), isDirty: Y(M, xe) }))
          : te && !te._f && !yr(xe)
            ? R(M, xe, F)
            : I(M, xe, F),
        cg(M, h) && v.state.next({ ...i }),
        v.values.next({ name: d.mount ? M : void 0, values: { ...f } });
    },
    H = async (M) => {
      d.mount = !0;
      const L = M.target;
      let F = L.name,
        te = !0;
      const ve = Le(u, F),
        xe = () => (L.type ? Qf(ve._f) : yy(M)),
        De = (He) => {
          te = Number.isNaN(He) || (Ja(He) && isNaN(He.getTime())) || Na(He, Le(f, F, He));
        };
      if (ve) {
        let He, rt;
        const E = xe(),
          m = M.type === Ps.BLUR || M.type === Ps.FOCUS_OUT,
          y =
            (!nE(ve._f) && !a.resolver && !Le(i.errors, F) && !ve._f.deps) ||
            aE(m, Le(i.touchedFields, F), i.isSubmitted, w, S),
          V = cg(F, h, m);
        xt(f, F, E), m ? (ve._f.onBlur && ve._f.onBlur(M), p && p(0)) : ve._f.onChange && ve._f.onChange(M);
        const ae = he(F, E, m, !1),
          k = !Nr(ae) || V;
        if ((!m && v.values.next({ name: F, type: M.type, values: { ...f } }), y))
          return (
            N.isValid && (a.mode === 'onBlur' && m ? J() : m || J()), k && v.state.next({ name: F, ...(V ? {} : ae) })
          );
        if ((!m && V && v.state.next({ ...i }), a.resolver)) {
          const { errors: q } = await b([F]);
          if ((De(E), te)) {
            const de = gg(i.errors, u, F),
              Oe = gg(q, u, de.name || F);
            (He = Oe.error), (F = Oe.name), (rt = Nr(q));
          }
        } else
          W([F], !0),
            (He = (await mg(ve, h.disabled, f, D, a.shouldUseNativeValidation))[F]),
            W([F]),
            De(E),
            te && (He ? (rt = !1) : N.isValid && (rt = await O(u, !0)));
        te && (ve._f.deps && j(ve._f.deps), Ae(F, rt, He, ae));
      }
    },
    oe = (M, L) => {
      if (Le(i.errors, L) && M.focus) return M.focus(), 1;
    },
    j = async (M, L = {}) => {
      let F, te;
      const ve = eu(M);
      if (a.resolver) {
        const xe = await A($t(M) ? M : ve);
        (F = Nr(xe)), (te = M ? !ve.some((De) => Le(xe, De)) : F);
      } else
        M
          ? ((te = (
              await Promise.all(
                ve.map(async (xe) => {
                  const De = Le(u, xe);
                  return await O(De && De._f ? { [xe]: De } : De);
                })
              )
            ).every(Boolean)),
            !(!te && !i.isValid) && J())
          : (te = F = await O(u));
      return (
        v.state.next({
          ...(!wn(M) || (N.isValid && F !== i.isValid) ? {} : { name: M }),
          ...(a.resolver || !M ? { isValid: F } : {}),
          errors: i.errors
        }),
        L.shouldFocus && !te && tu(u, oe, M ? ve : h.mount),
        te
      );
    },
    ne = (M) => {
      const L = { ...(d.mount ? f : s) };
      return $t(M) ? L : wn(M) ? Le(L, M) : M.map((F) => Le(L, F));
    },
    Ee = (M, L) => ({
      invalid: !!Le((L || i).errors, M),
      isDirty: !!Le((L || i).dirtyFields, M),
      error: Le((L || i).errors, M),
      isValidating: !!Le(i.validatingFields, M),
      isTouched: !!Le((L || i).touchedFields, M)
    }),
    ye = (M) => {
      M && eu(M).forEach((L) => Jt(i.errors, L)), v.state.next({ errors: M ? i.errors : {} });
    },
    T = (M, L, F) => {
      const te = (Le(u, M, { _f: {} })._f || {}).ref,
        ve = Le(i.errors, M) || {},
        { ref: xe, message: De, type: He, ...rt } = ve;
      xt(i.errors, M, { ...rt, ...L, ref: te }),
        v.state.next({ name: M, errors: i.errors, isValid: !1 }),
        F && F.shouldFocus && te && te.focus && te.focus();
    },
    je = (M, L) => (xn(M) ? v.values.subscribe({ next: (F) => M(K(void 0, L), F) }) : K(M, L, !0)),
    Me = (M, L = {}) => {
      for (const F of M ? eu(M) : h.mount)
        h.mount.delete(F),
          h.array.delete(F),
          L.keepValue || (Jt(u, F), Jt(f, F)),
          !L.keepError && Jt(i.errors, F),
          !L.keepDirty && Jt(i.dirtyFields, F),
          !L.keepTouched && Jt(i.touchedFields, F),
          !L.keepIsValidating && Jt(i.validatingFields, F),
          !a.shouldUnregister && !L.keepDefaultValue && Jt(s, F);
      v.values.next({ values: { ...f } }),
        v.state.next({ ...i, ...(L.keepDirty ? { isDirty: Y() } : {}) }),
        !L.keepIsValid && J();
    },
    Pe = ({ disabled: M, name: L, field: F, fields: te }) => {
      ((Wr(M) && d.mount) || M || h.disabled.has(L)) &&
        (M ? h.disabled.add(L) : h.disabled.delete(L), he(L, Qf(F ? F._f : Le(te, L)._f), !1, !1, !0));
    },
    Re = (M, L = {}) => {
      let F = Le(u, M);
      const te = Wr(L.disabled) || Wr(a.disabled);
      return (
        xt(u, M, { ...(F || {}), _f: { ...(F && F._f ? F._f : { ref: { name: M } }), name: M, mount: !0, ...L } }),
        h.mount.add(M),
        F ? Pe({ field: F, disabled: Wr(L.disabled) ? L.disabled : a.disabled, name: M }) : we(M, !0, L.value),
        {
          ...(te ? { disabled: L.disabled || a.disabled } : {}),
          ...(a.progressive
            ? {
                required: !!L.required,
                min: Kl(L.min),
                max: Kl(L.max),
                minLength: Kl(L.minLength),
                maxLength: Kl(L.maxLength),
                pattern: Kl(L.pattern)
              }
            : {}),
          name: M,
          onChange: H,
          onBlur: H,
          ref: (ve) => {
            if (ve) {
              Re(M, L), (F = Le(u, M));
              const xe = ($t(ve.value) && ve.querySelectorAll && ve.querySelectorAll('input,select,textarea')[0]) || ve,
                De = eE(xe),
                He = F._f.refs || [];
              if (De ? He.find((rt) => rt === xe) : xe === F._f.ref) return;
              xt(u, M, {
                _f: {
                  ...F._f,
                  ...(De
                    ? {
                        refs: [...He.filter(Zf), xe, ...(Array.isArray(Le(s, M)) ? [{}] : [])],
                        ref: { type: xe.type, name: M }
                      }
                    : { ref: xe })
                }
              }),
                we(M, !1, void 0, xe);
            } else
              (F = Le(u, M, {})),
                F._f && (F._f.mount = !1),
                (a.shouldUnregister || L.shouldUnregister) && !(vy(h.array, M) && d.action) && h.unMount.add(M);
          }
        }
      );
    },
    ke = () => a.shouldFocusError && tu(u, oe, h.mount),
    B = (M) => {
      Wr(M) &&
        (v.state.next({ disabled: M }),
        tu(
          u,
          (L, F) => {
            const te = Le(u, F);
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
    U = (M, L) => async (F) => {
      let te;
      F && (F.preventDefault && F.preventDefault(), F.persist && F.persist());
      let ve = Ar(f);
      if (h.disabled.size) for (const xe of h.disabled) xt(ve, xe, void 0);
      if ((v.state.next({ isSubmitting: !0 }), a.resolver)) {
        const { errors: xe, values: De } = await b();
        (i.errors = xe), (ve = De);
      } else await O(u);
      if ((Jt(i.errors, 'root'), Nr(i.errors))) {
        v.state.next({ errors: {} });
        try {
          await M(ve, F);
        } catch (xe) {
          te = xe;
        }
      } else L && (await L({ ...i.errors }, F)), ke(), setTimeout(ke);
      if (
        (v.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Nr(i.errors) && !te,
          submitCount: i.submitCount + 1,
          errors: i.errors
        }),
        te)
      )
        throw te;
    },
    Q = (M, L = {}) => {
      Le(u, M) &&
        ($t(L.defaultValue) ? $(M, Ar(Le(s, M))) : ($(M, L.defaultValue), xt(s, M, Ar(L.defaultValue))),
        L.keepTouched || Jt(i.touchedFields, M),
        L.keepDirty || (Jt(i.dirtyFields, M), (i.isDirty = L.defaultValue ? Y(M, Ar(Le(s, M))) : Y())),
        L.keepError || (Jt(i.errors, M), N.isValid && J()),
        v.state.next({ ...i }));
    },
    se = (M, L = {}) => {
      const F = M ? Ar(M) : s,
        te = Ar(F),
        ve = Nr(M),
        xe = ve ? s : te;
      if ((L.keepDefaultValues || (s = F), !L.keepValues)) {
        if (L.keepDirtyValues) {
          const De = new Set([...h.mount, ...Object.keys(Yl(s, f))]);
          for (const He of Array.from(De)) Le(i.dirtyFields, He) ? xt(xe, He, Le(f, He)) : $(He, Le(xe, He));
        } else {
          if (Nd && $t(M))
            for (const De of h.mount) {
              const He = Le(u, De);
              if (He && He._f) {
                const rt = Array.isArray(He._f.refs) ? He._f.refs[0] : He._f.ref;
                if (Js(rt)) {
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
        (f = a.shouldUnregister ? (L.keepDefaultValues ? Ar(s) : {}) : Ar(xe)),
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
        (d.watch = !!a.shouldUnregister),
        v.state.next({
          submitCount: L.keepSubmitCount ? i.submitCount : 0,
          isDirty: ve ? !1 : L.keepDirty ? i.isDirty : !!(L.keepDefaultValues && !Na(M, s)),
          isSubmitted: L.keepIsSubmitted ? i.isSubmitted : !1,
          dirtyFields: ve
            ? {}
            : L.keepDirtyValues
              ? L.keepDefaultValues && f
                ? Yl(s, f)
                : i.dirtyFields
              : L.keepDefaultValues && M
                ? Yl(s, M)
                : L.keepDirty
                  ? i.dirtyFields
                  : {},
          touchedFields: L.keepTouched ? i.touchedFields : {},
          errors: L.keepErrors ? i.errors : {},
          isSubmitSuccessful: L.keepIsSubmitSuccessful ? i.isSubmitSuccessful : !1,
          isSubmitting: !1
        });
    },
    re = (M, L) => se(xn(M) ? M(f) : M, L);
  return {
    control: {
      register: Re,
      unregister: Me,
      getFieldState: Ee,
      handleSubmit: U,
      setError: T,
      _executeSchema: b,
      _getWatch: K,
      _getDirty: Y,
      _updateValid: J,
      _removeUnmounted: G,
      _updateFieldArray: z,
      _updateDisabledField: Pe,
      _getFieldArray: Z,
      _reset: se,
      _resetDefaultValues: () =>
        xn(a.defaultValues) &&
        a.defaultValues().then((M) => {
          re(M, a.resetOptions), v.state.next({ isLoading: !1 });
        }),
      _updateFormState: (M) => {
        i = { ...i, ...M };
      },
      _disableForm: B,
      _subjects: v,
      _proxyFormState: N,
      _setErrors: ze,
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
        return i;
      },
      set _formState(M) {
        i = M;
      },
      get _options() {
        return a;
      },
      set _options(M) {
        a = { ...a, ...M };
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
    setError: T,
    setFocus: (M, L = {}) => {
      const F = Le(u, M),
        te = F && F._f;
      if (te) {
        const ve = te.refs ? te.refs[0] : te.ref;
        ve.focus && (ve.focus(), L.shouldSelect && xn(ve.select) && ve.select());
      }
    },
    getFieldState: Ee
  };
}
function jt(r = {}) {
  const a = wt.useRef(void 0),
    i = wt.useRef(void 0),
    [u, s] = wt.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: xn(r.defaultValues),
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
      defaultValues: xn(r.defaultValues) ? void 0 : r.defaultValues
    });
  a.current || (a.current = { ...uE(r), formState: u });
  const f = a.current.control;
  return (
    (f._options = r),
    Td({
      subject: f._subjects.state,
      next: (d) => {
        xy(d, f._proxyFormState, f._updateFormState, !0) && s({ ...f._formState });
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
      r.values && !Na(r.values, i.current)
        ? (f._reset(r.values, f._options.resetOptions), (i.current = r.values), s((d) => ({ ...d })))
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
    (a.current.formState = Sy(u, f)),
    a.current
  );
}
const yg = (r, a, i) => {
    if (r && 'reportValidity' in r) {
      const u = Le(i, a);
      r.setCustomValidity((u && u.message) || ''), r.reportValidity();
    }
  },
  By = (r, a) => {
    for (const i in a.fields) {
      const u = a.fields[i];
      u && u.ref && 'reportValidity' in u.ref ? yg(u.ref, i, r) : u && u.refs && u.refs.forEach((s) => yg(s, i, r));
    }
  },
  sE = (r, a) => {
    a.shouldUseNativeValidation && By(r, a);
    const i = {};
    for (const u in r) {
      const s = Le(a.fields, u),
        f = Object.assign(r[u] || {}, { ref: s && s.ref });
      if (cE(a.names || Object.keys(r), u)) {
        const d = Object.assign({}, Le(i, u));
        xt(d, 'root', f), xt(i, u, d);
      } else xt(i, u, f);
    }
    return i;
  },
  cE = (r, a) => r.some((i) => i.match(`^${a}\\.\\d+`));
function kt(r, a, i) {
  return (
    a === void 0 && (a = {}),
    i === void 0 && (i = {}),
    function (u, s, f) {
      try {
        return Promise.resolve(
          (function (d, h) {
            try {
              var p =
                (a.context,
                Promise.resolve(
                  r[i.mode === 'sync' ? 'validateSync' : 'validate'](
                    u,
                    Object.assign({ abortEarly: !1 }, a, { context: s })
                  )
                ).then(function (g) {
                  return (
                    f.shouldUseNativeValidation && By({}, f), { values: i.raw ? Object.assign({}, u) : g, errors: {} }
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
              errors: sE(
                ((h = d),
                (p = !f.shouldUseNativeValidation && f.criteriaMode === 'all'),
                (h.inner || []).reduce(function (g, N) {
                  if ((g[N.path] || (g[N.path] = { message: N.message, type: N.type }), p)) {
                    var v = g[N.path].types,
                      S = v && v[N.type];
                    g[N.path] = Ay(N.path, p, g, N.type, S ? [].concat(S, N.message) : N.message);
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
var Pf, vg;
function oE() {
  if (vg) return Pf;
  vg = 1;
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
  var a = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    i = /^\d+$/,
    u = /^\d/,
    s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    f = /^\s*(['"]?)(.*?)(\1)\s*$/,
    d = 512,
    h = new r(d),
    p = new r(d),
    g = new r(d);
  Pf = {
    Cache: r,
    split: v,
    normalizePath: N,
    setter: function (W) {
      var z = N(W);
      return (
        p.get(W) ||
        p.set(W, function (ze, we) {
          for (var he = 0, Ae = z.length, b = ze; he < Ae - 1; ) {
            var A = z[he];
            if (A === '__proto__' || A === 'constructor' || A === 'prototype') return ze;
            b = b[z[he++]];
          }
          b[z[he]] = we;
        })
      );
    },
    getter: function (W, z) {
      var Se = N(W);
      return (
        g.get(W) ||
        g.set(W, function (we) {
          for (var he = 0, Ae = Se.length; he < Ae; )
            if (we != null || !z) we = we[Se[he++]];
            else return;
          return we;
        })
      );
    },
    join: function (W) {
      return W.reduce(function (z, Se) {
        return z + (w(Se) || i.test(Se) ? '[' + Se + ']' : (z ? '.' : '') + Se);
      }, '');
    },
    forEach: function (W, z, Se) {
      S(Array.isArray(W) ? W : v(W), z, Se);
    }
  };
  function N(W) {
    return (
      h.get(W) ||
      h.set(
        W,
        v(W).map(function (z) {
          return z.replace(f, '$2');
        })
      )
    );
  }
  function v(W) {
    return W.match(a) || [''];
  }
  function S(W, z, Se) {
    var ze = W.length,
      we,
      he,
      Ae,
      b;
    for (he = 0; he < ze; he++)
      (we = W[he]),
        we &&
          (J(we) && (we = '"' + we + '"'), (b = w(we)), (Ae = !b && /^\d+$/.test(we)), z.call(Se, we, b, Ae, he, W));
  }
  function w(W) {
    return typeof W == 'string' && W && ["'", '"'].indexOf(W.charAt(0)) !== -1;
  }
  function D(W) {
    return W.match(u) && !W.match(i);
  }
  function P(W) {
    return s.test(W);
  }
  function J(W) {
    return !w(W) && (D(W) || P(W));
  }
  return Pf;
}
var ti = oE(),
  Jf,
  bg;
function fE() {
  if (bg) return Jf;
  bg = 1;
  const r =
      /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    a = (N) => N.match(r) || [],
    i = (N) => N[0].toUpperCase() + N.slice(1),
    u = (N, v) => a(N).join(v).toLowerCase(),
    s = (N) => a(N).reduce((v, S) => `${v}${v ? S[0].toUpperCase() + S.slice(1).toLowerCase() : S.toLowerCase()}`, '');
  return (
    (Jf = {
      words: a,
      upperFirst: i,
      camelCase: s,
      pascalCase: (N) => i(s(N)),
      snakeCase: (N) => u(N, '_'),
      kebabCase: (N) => u(N, '-'),
      sentenceCase: (N) => i(u(N, ' ')),
      titleCase: (N) => a(N).map(i).join(' ')
    }),
    Jf
  );
}
var Wf = fE(),
  Us = { exports: {} },
  Sg;
function dE() {
  if (Sg) return Us.exports;
  (Sg = 1),
    (Us.exports = function (s) {
      return r(a(s), s);
    }),
    (Us.exports.array = r);
  function r(s, f) {
    var d = s.length,
      h = new Array(d),
      p = {},
      g = d,
      N = i(f),
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
            var z = W[--D];
            S(z, v.get(z), P);
          } while (D);
          P.delete(w);
        }
        h[--d] = w;
      }
    }
  }
  function a(s) {
    for (var f = new Set(), d = 0, h = s.length; d < h; d++) {
      var p = s[d];
      f.add(p[0]), f.add(p[1]);
    }
    return Array.from(f);
  }
  function i(s) {
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
  return Us.exports;
}
var hE = dE();
const mE = au(hE),
  pE = Object.prototype.toString,
  gE = Error.prototype.toString,
  yE = RegExp.prototype.toString,
  vE = typeof Symbol < 'u' ? Symbol.prototype.toString : () => '',
  bE = /^Symbol\((.*)\)(.*)$/;
function SE(r) {
  return r != +r ? 'NaN' : r === 0 && 1 / r < 0 ? '-0' : '' + r;
}
function xg(r, a = !1) {
  if (r == null || r === !0 || r === !1) return '' + r;
  const i = typeof r;
  if (i === 'number') return SE(r);
  if (i === 'string') return a ? `"${r}"` : r;
  if (i === 'function') return '[Function ' + (r.name || 'anonymous') + ']';
  if (i === 'symbol') return vE.call(r).replace(bE, 'Symbol($1)');
  const u = pE.call(r).slice(8, -1);
  return u === 'Date'
    ? isNaN(r.getTime())
      ? '' + r
      : r.toISOString(r)
    : u === 'Error' || r instanceof Error
      ? '[' + gE.call(r) + ']'
      : u === 'RegExp'
        ? yE.call(r)
        : null;
}
function Kn(r, a) {
  let i = xg(r, a);
  return i !== null
    ? i
    : JSON.stringify(
        r,
        function (u, s) {
          let f = xg(this[u], a);
          return f !== null ? f : s;
        },
        2
      );
}
function Cy(r) {
  return r == null ? [] : [].concat(r);
}
let Dy,
  Uy,
  jy,
  xE = /\$\{\s*(\w+)\s*\}/g;
Dy = Symbol.toStringTag;
class wg {
  constructor(a, i, u, s) {
    (this.name = void 0),
      (this.message = void 0),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = void 0),
      (this.inner = void 0),
      (this[Dy] = 'Error'),
      (this.name = 'ValidationError'),
      (this.value = i),
      (this.path = u),
      (this.type = s),
      (this.errors = []),
      (this.inner = []),
      Cy(a).forEach((f) => {
        if (_r.isError(f)) {
          this.errors.push(...f.errors);
          const d = f.inner.length ? f.inner : [f];
          this.inner.push(...d);
        } else this.errors.push(f);
      }),
      (this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]);
  }
}
Uy = Symbol.hasInstance;
jy = Symbol.toStringTag;
class _r extends Error {
  static formatError(a, i) {
    const u = i.label || i.path || 'this';
    return (
      (i = Object.assign({}, i, { path: u, originalPath: i.path })),
      typeof a == 'string' ? a.replace(xE, (s, f) => Kn(i[f])) : typeof a == 'function' ? a(i) : a
    );
  }
  static isError(a) {
    return a && a.name === 'ValidationError';
  }
  constructor(a, i, u, s, f) {
    const d = new wg(a, i, u, s);
    if (f) return d;
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = []),
      (this.inner = []),
      (this[jy] = 'Error'),
      (this.name = d.name),
      (this.message = d.message),
      (this.type = d.type),
      (this.value = d.value),
      (this.path = d.path),
      (this.errors = d.errors),
      (this.inner = d.inner),
      Error.captureStackTrace && Error.captureStackTrace(this, _r);
  }
  static [Uy](a) {
    return wg[Symbol.hasInstance](a) || super[Symbol.hasInstance](a);
  }
}
let bn = {
    default: '${path} is invalid',
    required: '${path} is a required field',
    defined: '${path} must be defined',
    notNull: '${path} cannot be null',
    oneOf: '${path} must be one of the following values: ${values}',
    notOneOf: '${path} must not be one of the following values: ${values}',
    notType: ({ path: r, type: a, value: i, originalValue: u }) => {
      const s = u != null && u !== i ? ` (cast from the value \`${Kn(u, !0)}\`).` : '.';
      return a !== 'mixed'
        ? `${r} must be a \`${a}\` type, but the final value was: \`${Kn(i, !0)}\`` + s
        : `${r} must match the configured type. The validated value was: \`${Kn(i, !0)}\`` + s;
    }
  },
  wr = {
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
  Ea = {
    min: '${path} must be greater than or equal to ${min}',
    max: '${path} must be less than or equal to ${max}',
    lessThan: '${path} must be less than ${less}',
    moreThan: '${path} must be greater than ${more}',
    positive: '${path} must be a positive number',
    negative: '${path} must be a negative number',
    integer: '${path} must be an integer'
  },
  sd = { min: '${path} field must be later than ${min}', max: '${path} field must be at earlier than ${max}' },
  cd = { isValue: '${path} field must be ${value}' },
  zs = {
    noUnknown: '${path} field has unspecified keys: ${unknown}',
    exact: '${path} object contains unknown properties: ${properties}'
  },
  Hs = {
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items',
    length: '${path} must have ${length} items'
  },
  wE = {
    notType: (r) => {
      const { path: a, value: i, spec: u } = r,
        s = u.types.length;
      if (Array.isArray(i)) {
        if (i.length < s)
          return `${a} tuple value has too few items, expected a length of ${s} but got ${i.length} for value: \`${Kn(i, !0)}\``;
        if (i.length > s)
          return `${a} tuple value has too many items, expected a length of ${s} but got ${i.length} for value: \`${Kn(i, !0)}\``;
      }
      return _r.formatError(bn.notType, r);
    }
  };
Object.assign(Object.create(null), {
  mixed: bn,
  string: wr,
  number: Ea,
  date: sd,
  object: zs,
  array: Hs,
  boolean: cd,
  tuple: wE
});
const hc = (r) => r && r.__isYupSchema__;
class tc {
  static fromOptions(a, i) {
    if (!i.then && !i.otherwise)
      throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let { is: u, then: s, otherwise: f } = i,
      d = typeof u == 'function' ? u : (...h) => h.every((p) => p === u);
    return new tc(a, (h, p) => {
      var g;
      let N = d(...h) ? s : f;
      return (g = N == null ? void 0 : N(p)) != null ? g : p;
    });
  }
  constructor(a, i) {
    (this.fn = void 0), (this.refs = a), (this.refs = a), (this.fn = i);
  }
  resolve(a, i) {
    let u = this.refs.map((f) =>
        f.getValue(i == null ? void 0 : i.value, i == null ? void 0 : i.parent, i == null ? void 0 : i.context)
      ),
      s = this.fn(u, a, i);
    if (s === void 0 || s === a) return a;
    if (!hc(s)) throw new TypeError('conditions must return a schema object');
    return s.resolve(i);
  }
}
const js = { context: '$', value: '.' };
class ui {
  constructor(a, i = {}) {
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
    (this.isContext = this.key[0] === js.context),
      (this.isValue = this.key[0] === js.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let u = this.isContext ? js.context : this.isValue ? js.value : '';
    (this.path = this.key.slice(u.length)), (this.getter = this.path && ti.getter(this.path, !0)), (this.map = i.map);
  }
  getValue(a, i, u) {
    let s = this.isContext ? u : this.isValue ? a : i;
    return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s;
  }
  cast(a, i) {
    return this.getValue(a, i == null ? void 0 : i.parent, i == null ? void 0 : i.context);
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
ui.prototype.__isYupRef = !0;
const sn = (r) => r == null;
function Fi(r) {
  function a({ value: i, path: u = '', options: s, originalValue: f, schema: d }, h, p) {
    const { name: g, test: N, params: v, message: S, skipAbsent: w } = r;
    let {
      parent: D,
      context: P,
      abortEarly: J = d.spec.abortEarly,
      disableStackTrace: W = d.spec.disableStackTrace
    } = s;
    function z(G) {
      return ui.isRef(G) ? G.getValue(i, D, P) : G;
    }
    function Se(G = {}) {
      const Y = Object.assign(
        {
          value: i,
          originalValue: f,
          label: d.spec.label,
          path: G.path || u,
          spec: d.spec,
          disableStackTrace: G.disableStackTrace || W
        },
        v,
        G.params
      );
      for (const Z of Object.keys(Y)) Y[Z] = z(Y[Z]);
      const K = new _r(_r.formatError(G.message || S, Y), i, Y.path, G.type || g, Y.disableStackTrace);
      return (K.params = Y), K;
    }
    const ze = J ? h : p;
    let we = {
      path: u,
      parent: D,
      type: g,
      from: s.from,
      createError: Se,
      resolve: z,
      options: s,
      originalValue: f,
      schema: d
    };
    const he = (G) => {
        _r.isError(G) ? ze(G) : G ? p(null) : ze(Se());
      },
      Ae = (G) => {
        _r.isError(G) ? ze(G) : h(G);
      };
    if (w && sn(i)) return he(!0);
    let A;
    try {
      var O;
      if (((A = N.call(we, i, we)), typeof ((O = A) == null ? void 0 : O.then) == 'function')) {
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
  return (a.OPTIONS = r), a;
}
function EE(r, a, i, u = i) {
  let s, f, d;
  return a
    ? (ti.forEach(a, (h, p, g) => {
        let N = p ? h.slice(1, h.length - 1) : h;
        r = r.resolve({ context: u, parent: s, value: i });
        let v = r.type === 'tuple',
          S = g ? parseInt(N, 10) : 0;
        if (r.innerType || v) {
          if (v && !g)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${d}" must contain an index to the tuple element, e.g. "${d}[0]"`
            );
          if (i && S >= i.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${h}, in the path: ${a}. because there is no value at that index. `
            );
          (s = i), (i = i && i[S]), (r = v ? r.spec.types[S] : r.innerType);
        }
        if (!g) {
          if (!r.fields || !r.fields[N])
            throw new Error(
              `The schema does not contain the path: ${a}. (failed at: ${d} which is a type: "${r.type}")`
            );
          (s = i), (i = i && i[N]), (r = r.fields[N]);
        }
        (f = N), (d = p ? '[' + h + ']' : '.' + h);
      }),
      { schema: r, parent: s, parentPath: f })
    : { parent: s, parentPath: a, schema: r };
}
class rc extends Set {
  describe() {
    const a = [];
    for (const i of this.values()) a.push(ui.isRef(i) ? i.describe() : i);
    return a;
  }
  resolveAll(a) {
    let i = [];
    for (const u of this.values()) i.push(a(u));
    return i;
  }
  clone() {
    return new rc(this.values());
  }
  merge(a, i) {
    const u = this.clone();
    return a.forEach((s) => u.add(s)), i.forEach((s) => u.delete(s)), u;
  }
}
function Gi(r, a = new Map()) {
  if (hc(r) || !r || typeof r != 'object') return r;
  if (a.has(r)) return a.get(r);
  let i;
  if (r instanceof Date) (i = new Date(r.getTime())), a.set(r, i);
  else if (r instanceof RegExp) (i = new RegExp(r)), a.set(r, i);
  else if (Array.isArray(r)) {
    (i = new Array(r.length)), a.set(r, i);
    for (let u = 0; u < r.length; u++) i[u] = Gi(r[u], a);
  } else if (r instanceof Map) {
    (i = new Map()), a.set(r, i);
    for (const [u, s] of r.entries()) i.set(u, Gi(s, a));
  } else if (r instanceof Set) {
    (i = new Set()), a.set(r, i);
    for (const u of r) i.add(Gi(u, a));
  } else if (r instanceof Object) {
    (i = {}), a.set(r, i);
    for (const [u, s] of Object.entries(r)) i[u] = Gi(s, a);
  } else throw Error(`Unable to clone ${r}`);
  return i;
}
class jr {
  constructor(a) {
    (this.type = void 0),
      (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this.internalTests = {}),
      (this._whitelist = new rc()),
      (this._blacklist = new rc()),
      (this.exclusiveTests = Object.create(null)),
      (this._typeCheck = void 0),
      (this.spec = void 0),
      (this.tests = []),
      (this.transforms = []),
      this.withMutation(() => {
        this.typeError(bn.notType);
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
      this.withMutation((i) => {
        i.nonNullable();
      });
  }
  get _type() {
    return this.type;
  }
  clone(a) {
    if (this._mutate) return a && Object.assign(this.spec, a), this;
    const i = Object.create(Object.getPrototypeOf(this));
    return (
      (i.type = this.type),
      (i._typeCheck = this._typeCheck),
      (i._whitelist = this._whitelist.clone()),
      (i._blacklist = this._blacklist.clone()),
      (i.internalTests = Object.assign({}, this.internalTests)),
      (i.exclusiveTests = Object.assign({}, this.exclusiveTests)),
      (i.deps = [...this.deps]),
      (i.conditions = [...this.conditions]),
      (i.tests = [...this.tests]),
      (i.transforms = [...this.transforms]),
      (i.spec = Gi(Object.assign({}, this.spec, a))),
      i
    );
  }
  label(a) {
    let i = this.clone();
    return (i.spec.label = a), i;
  }
  meta(...a) {
    if (a.length === 0) return this.spec.meta;
    let i = this.clone();
    return (i.spec.meta = Object.assign(i.spec.meta || {}, a[0])), i;
  }
  withMutation(a) {
    let i = this._mutate;
    this._mutate = !0;
    let u = a(this);
    return (this._mutate = i), u;
  }
  concat(a) {
    if (!a || a === this) return this;
    if (a.type !== this.type && this.type !== 'mixed')
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${a.type}`);
    let i = this,
      u = a.clone();
    const s = Object.assign({}, i.spec, u.spec);
    return (
      (u.spec = s),
      (u.internalTests = Object.assign({}, i.internalTests, u.internalTests)),
      (u._whitelist = i._whitelist.merge(a._whitelist, a._blacklist)),
      (u._blacklist = i._blacklist.merge(a._blacklist, a._whitelist)),
      (u.tests = i.tests),
      (u.exclusiveTests = i.exclusiveTests),
      u.withMutation((f) => {
        a.tests.forEach((d) => {
          f.test(d.OPTIONS);
        });
      }),
      (u.transforms = [...i.transforms, ...u.transforms]),
      u
    );
  }
  isType(a) {
    return a == null
      ? !!((this.spec.nullable && a === null) || (this.spec.optional && a === void 0))
      : this._typeCheck(a);
  }
  resolve(a) {
    let i = this;
    if (i.conditions.length) {
      let u = i.conditions;
      (i = i.clone()), (i.conditions = []), (i = u.reduce((s, f) => f.resolve(s, a), i)), (i = i.resolve(a));
    }
    return i;
  }
  resolveOptions(a) {
    var i, u, s, f;
    return Object.assign({}, a, {
      from: a.from || [],
      strict: (i = a.strict) != null ? i : this.spec.strict,
      abortEarly: (u = a.abortEarly) != null ? u : this.spec.abortEarly,
      recursive: (s = a.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (f = a.disableStackTrace) != null ? f : this.spec.disableStackTrace
    });
  }
  cast(a, i = {}) {
    let u = this.resolve(Object.assign({ value: a }, i)),
      s = i.assert === 'ignore-optionality',
      f = u._cast(a, i);
    if (i.assert !== !1 && !u.isType(f)) {
      if (s && sn(f)) return f;
      let d = Kn(a),
        h = Kn(f);
      throw new TypeError(
        `The value of ${i.path || 'field'} could not be cast to a value that satisfies the schema type: "${u.type}". 

attempted value: ${d} 
` + (h !== d ? `result of cast: ${h}` : '')
      );
    }
    return f;
  }
  _cast(a, i) {
    let u = a === void 0 ? a : this.transforms.reduce((s, f) => f.call(this, s, a, this), a);
    return u === void 0 && (u = this.getDefault(i)), u;
  }
  _validate(a, i = {}, u, s) {
    let { path: f, originalValue: d = a, strict: h = this.spec.strict } = i,
      p = a;
    h || (p = this._cast(p, Object.assign({ assert: !1 }, i)));
    let g = [];
    for (let N of Object.values(this.internalTests)) N && g.push(N);
    this.runTests({ path: f, value: p, originalValue: d, options: i, tests: g }, u, (N) => {
      if (N.length) return s(N, p);
      this.runTests({ path: f, value: p, originalValue: d, options: i, tests: this.tests }, u, s);
    });
  }
  runTests(a, i, u) {
    let s = !1,
      { tests: f, value: d, originalValue: h, path: p, options: g } = a,
      N = (P) => {
        s || ((s = !0), i(P, d));
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
      J(D, N, function (z) {
        z && (Array.isArray(z) ? w.push(...z) : w.push(z)), --S <= 0 && v(w);
      });
    }
  }
  asNestedTest({ key: a, index: i, parent: u, parentPath: s, originalParent: f, options: d }) {
    const h = a ?? i;
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
      path: p || h.includes('.') ? `${s || ''}[${p ? h : `"${h}"`}]` : (s ? `${s}.` : '') + a
    });
    return (v, S, w) => this.resolve(N)._validate(g, N, S, w);
  }
  validate(a, i) {
    var u;
    let s = this.resolve(Object.assign({}, i, { value: a })),
      f = (u = i == null ? void 0 : i.disableStackTrace) != null ? u : s.spec.disableStackTrace;
    return new Promise((d, h) =>
      s._validate(
        a,
        i,
        (p, g) => {
          _r.isError(p) && (p.value = g), h(p);
        },
        (p, g) => {
          p.length ? h(new _r(p, g, void 0, void 0, f)) : d(g);
        }
      )
    );
  }
  validateSync(a, i) {
    var u;
    let s = this.resolve(Object.assign({}, i, { value: a })),
      f,
      d = (u = i == null ? void 0 : i.disableStackTrace) != null ? u : s.spec.disableStackTrace;
    return (
      s._validate(
        a,
        Object.assign({}, i, { sync: !0 }),
        (h, p) => {
          throw (_r.isError(h) && (h.value = p), h);
        },
        (h, p) => {
          if (h.length) throw new _r(h, a, void 0, void 0, d);
          f = p;
        }
      ),
      f
    );
  }
  isValid(a, i) {
    return this.validate(a, i).then(
      () => !0,
      (u) => {
        if (_r.isError(u)) return !1;
        throw u;
      }
    );
  }
  isValidSync(a, i) {
    try {
      return this.validateSync(a, i), !0;
    } catch (u) {
      if (_r.isError(u)) return !1;
      throw u;
    }
  }
  _getDefault(a) {
    let i = this.spec.default;
    return i == null ? i : typeof i == 'function' ? i.call(this, a) : Gi(i);
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
  nullability(a, i) {
    const u = this.clone({ nullable: a });
    return (
      (u.internalTests.nullable = Fi({
        message: i,
        name: 'nullable',
        test(s) {
          return s === null ? this.schema.spec.nullable : !0;
        }
      })),
      u
    );
  }
  optionality(a, i) {
    const u = this.clone({ optional: a });
    return (
      (u.internalTests.optionality = Fi({
        message: i,
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
  defined(a = bn.defined) {
    return this.optionality(!1, a);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(a = bn.notNull) {
    return this.nullability(!1, a);
  }
  required(a = bn.required) {
    return this.clone().withMutation((i) => i.nonNullable(a).defined(a));
  }
  notRequired() {
    return this.clone().withMutation((a) => a.nullable().optional());
  }
  transform(a) {
    let i = this.clone();
    return i.transforms.push(a), i;
  }
  test(...a) {
    let i;
    if (
      (a.length === 1
        ? typeof a[0] == 'function'
          ? (i = { test: a[0] })
          : (i = a[0])
        : a.length === 2
          ? (i = { name: a[0], test: a[1] })
          : (i = { name: a[0], message: a[1], test: a[2] }),
      i.message === void 0 && (i.message = bn.default),
      typeof i.test != 'function')
    )
      throw new TypeError('`test` is a required parameters');
    let u = this.clone(),
      s = Fi(i),
      f = i.exclusive || (i.name && u.exclusiveTests[i.name] === !0);
    if (i.exclusive && !i.name)
      throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
    return (
      i.name && (u.exclusiveTests[i.name] = !!i.exclusive),
      (u.tests = u.tests.filter((d) => !(d.OPTIONS.name === i.name && (f || d.OPTIONS.test === s.OPTIONS.test)))),
      u.tests.push(s),
      u
    );
  }
  when(a, i) {
    !Array.isArray(a) && typeof a != 'string' && ((i = a), (a = '.'));
    let u = this.clone(),
      s = Cy(a).map((f) => new ui(f));
    return (
      s.forEach((f) => {
        f.isSibling && u.deps.push(f.key);
      }),
      u.conditions.push(typeof i == 'function' ? new tc(s, i) : tc.fromOptions(s, i)),
      u
    );
  }
  typeError(a) {
    let i = this.clone();
    return (
      (i.internalTests.typeError = Fi({
        message: a,
        name: 'typeError',
        skipAbsent: !0,
        test(u) {
          return this.schema._typeCheck(u) ? !0 : this.createError({ params: { type: this.schema.type } });
        }
      })),
      i
    );
  }
  oneOf(a, i = bn.oneOf) {
    let u = this.clone();
    return (
      a.forEach((s) => {
        u._whitelist.add(s), u._blacklist.delete(s);
      }),
      (u.internalTests.whiteList = Fi({
        message: i,
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
  notOneOf(a, i = bn.notOneOf) {
    let u = this.clone();
    return (
      a.forEach((s) => {
        u._blacklist.add(s), u._whitelist.delete(s);
      }),
      (u.internalTests.blacklist = Fi({
        message: i,
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
  strip(a = !0) {
    let i = this.clone();
    return (i.spec.strip = a), i;
  }
  describe(a) {
    const i = (a ? this.resolve(a) : this).clone(),
      { label: u, meta: s, optional: f, nullable: d } = i.spec;
    return {
      meta: s,
      label: u,
      optional: f,
      nullable: d,
      default: i.getDefault(a),
      type: i.type,
      oneOf: i._whitelist.describe(),
      notOneOf: i._blacklist.describe(),
      tests: i.tests
        .map((p) => ({ name: p.OPTIONS.name, params: p.OPTIONS.params }))
        .filter((p, g, N) => N.findIndex((v) => v.name === p.name) === g)
    };
  }
}
jr.prototype.__isYupSchema__ = !0;
for (const r of ['validate', 'validateSync'])
  jr.prototype[`${r}At`] = function (a, i, u = {}) {
    const { parent: s, parentPath: f, schema: d } = EE(this, a, i, u.context);
    return d[r](s && s[f], Object.assign({}, u, { parent: s, path: a }));
  };
for (const r of ['equals', 'is']) jr.prototype[r] = jr.prototype.oneOf;
for (const r of ['not', 'nope']) jr.prototype[r] = jr.prototype.notOneOf;
function ky() {
  return new Iy();
}
class Iy extends jr {
  constructor() {
    super({
      type: 'boolean',
      check(a) {
        return a instanceof Boolean && (a = a.valueOf()), typeof a == 'boolean';
      }
    }),
      this.withMutation(() => {
        this.transform((a, i, u) => {
          if (u.spec.coerce && !u.isType(a)) {
            if (/^(true|1)$/i.test(String(a))) return !0;
            if (/^(false|0)$/i.test(String(a))) return !1;
          }
          return a;
        });
      });
  }
  isTrue(a = cd.isValue) {
    return this.test({
      message: a,
      name: 'is-value',
      exclusive: !0,
      params: { value: 'true' },
      test(i) {
        return sn(i) || i === !0;
      }
    });
  }
  isFalse(a = cd.isValue) {
    return this.test({
      message: a,
      name: 'is-value',
      exclusive: !0,
      params: { value: 'false' },
      test(i) {
        return sn(i) || i === !1;
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
ky.prototype = Iy.prototype;
const AE =
  /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function NE(r) {
  const a = od(r);
  if (!a) return Date.parse ? Date.parse(r) : Number.NaN;
  if (a.z === void 0 && a.plusMinus === void 0)
    return new Date(a.year, a.month, a.day, a.hour, a.minute, a.second, a.millisecond).valueOf();
  let i = 0;
  return (
    a.z !== 'Z' &&
      a.plusMinus !== void 0 &&
      ((i = a.hourOffset * 60 + a.minuteOffset), a.plusMinus === '+' && (i = 0 - i)),
    Date.UTC(a.year, a.month, a.day, a.hour, a.minute + i, a.second, a.millisecond)
  );
}
function od(r) {
  var a, i;
  const u = AE.exec(r);
  return u
    ? {
        year: Vn(u[1]),
        month: Vn(u[2], 1) - 1,
        day: Vn(u[3], 1),
        hour: Vn(u[4]),
        minute: Vn(u[5]),
        second: Vn(u[6]),
        millisecond: u[7] ? Vn(u[7].substring(0, 3)) : 0,
        precision: (a = (i = u[7]) == null ? void 0 : i.length) != null ? a : void 0,
        z: u[8] || void 0,
        plusMinus: u[9] || void 0,
        hourOffset: Vn(u[10]),
        minuteOffset: Vn(u[11])
      }
    : null;
}
function Vn(r, a = 0) {
  return Number(r) || a;
}
let _E =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  OE =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  TE =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  ME = '^\\d{4}-\\d{2}-\\d{2}',
  RE = '\\d{2}:\\d{2}:\\d{2}',
  BE = '(([+-]\\d{2}(:?\\d{2})?)|Z)',
  CE = new RegExp(`${ME}T${RE}(\\.\\d+)?${BE}$`),
  DE = (r) => sn(r) || r === r.trim(),
  UE = {}.toString();
function We() {
  return new qy();
}
class qy extends jr {
  constructor() {
    super({
      type: 'string',
      check(a) {
        return a instanceof String && (a = a.valueOf()), typeof a == 'string';
      }
    }),
      this.withMutation(() => {
        this.transform((a, i, u) => {
          if (!u.spec.coerce || u.isType(a) || Array.isArray(a)) return a;
          const s = a != null && a.toString ? a.toString() : a;
          return s === UE ? a : s;
        });
      });
  }
  required(a) {
    return super
      .required(a)
      .withMutation((i) =>
        i.test({ message: a || bn.required, name: 'required', skipAbsent: !0, test: (u) => !!u.length })
      );
  }
  notRequired() {
    return super
      .notRequired()
      .withMutation((a) => ((a.tests = a.tests.filter((i) => i.OPTIONS.name !== 'required')), a));
  }
  length(a, i = wr.length) {
    return this.test({
      message: i,
      name: 'length',
      exclusive: !0,
      params: { length: a },
      skipAbsent: !0,
      test(u) {
        return u.length === this.resolve(a);
      }
    });
  }
  min(a, i = wr.min) {
    return this.test({
      message: i,
      name: 'min',
      exclusive: !0,
      params: { min: a },
      skipAbsent: !0,
      test(u) {
        return u.length >= this.resolve(a);
      }
    });
  }
  max(a, i = wr.max) {
    return this.test({
      name: 'max',
      exclusive: !0,
      message: i,
      params: { max: a },
      skipAbsent: !0,
      test(u) {
        return u.length <= this.resolve(a);
      }
    });
  }
  matches(a, i) {
    let u = !1,
      s,
      f;
    return (
      i && (typeof i == 'object' ? ({ excludeEmptyString: u = !1, message: s, name: f } = i) : (s = i)),
      this.test({
        name: f || 'matches',
        message: s || wr.matches,
        params: { regex: a },
        skipAbsent: !0,
        test: (d) => (d === '' && u) || d.search(a) !== -1
      })
    );
  }
  email(a = wr.email) {
    return this.matches(_E, { name: 'email', message: a, excludeEmptyString: !0 });
  }
  url(a = wr.url) {
    return this.matches(OE, { name: 'url', message: a, excludeEmptyString: !0 });
  }
  uuid(a = wr.uuid) {
    return this.matches(TE, { name: 'uuid', message: a, excludeEmptyString: !1 });
  }
  datetime(a) {
    let i = '',
      u,
      s;
    return (
      a && (typeof a == 'object' ? ({ message: i = '', allowOffset: u = !1, precision: s = void 0 } = a) : (i = a)),
      this.matches(CE, { name: 'datetime', message: i || wr.datetime, excludeEmptyString: !0 })
        .test({
          name: 'datetime_offset',
          message: i || wr.datetime_offset,
          params: { allowOffset: u },
          skipAbsent: !0,
          test: (f) => {
            if (!f || u) return !0;
            const d = od(f);
            return d ? !!d.z : !1;
          }
        })
        .test({
          name: 'datetime_precision',
          message: i || wr.datetime_precision,
          params: { precision: s },
          skipAbsent: !0,
          test: (f) => {
            if (!f || s == null) return !0;
            const d = od(f);
            return d ? d.precision === s : !1;
          }
        })
    );
  }
  ensure() {
    return this.default('').transform((a) => (a === null ? '' : a));
  }
  trim(a = wr.trim) {
    return this.transform((i) => (i != null ? i.trim() : i)).test({ message: a, name: 'trim', test: DE });
  }
  lowercase(a = wr.lowercase) {
    return this.transform((i) => (sn(i) ? i : i.toLowerCase())).test({
      message: a,
      name: 'string_case',
      exclusive: !0,
      skipAbsent: !0,
      test: (i) => sn(i) || i === i.toLowerCase()
    });
  }
  uppercase(a = wr.uppercase) {
    return this.transform((i) => (sn(i) ? i : i.toUpperCase())).test({
      message: a,
      name: 'string_case',
      exclusive: !0,
      skipAbsent: !0,
      test: (i) => sn(i) || i === i.toUpperCase()
    });
  }
}
We.prototype = qy.prototype;
let jE = (r) => r != +r;
function lt() {
  return new Ly();
}
class Ly extends jr {
  constructor() {
    super({
      type: 'number',
      check(a) {
        return a instanceof Number && (a = a.valueOf()), typeof a == 'number' && !jE(a);
      }
    }),
      this.withMutation(() => {
        this.transform((a, i, u) => {
          if (!u.spec.coerce) return a;
          let s = a;
          if (typeof s == 'string') {
            if (((s = s.replace(/\s/g, '')), s === '')) return NaN;
            s = +s;
          }
          return u.isType(s) || s === null ? s : parseFloat(s);
        });
      });
  }
  min(a, i = Ea.min) {
    return this.test({
      message: i,
      name: 'min',
      exclusive: !0,
      params: { min: a },
      skipAbsent: !0,
      test(u) {
        return u >= this.resolve(a);
      }
    });
  }
  max(a, i = Ea.max) {
    return this.test({
      message: i,
      name: 'max',
      exclusive: !0,
      params: { max: a },
      skipAbsent: !0,
      test(u) {
        return u <= this.resolve(a);
      }
    });
  }
  lessThan(a, i = Ea.lessThan) {
    return this.test({
      message: i,
      name: 'max',
      exclusive: !0,
      params: { less: a },
      skipAbsent: !0,
      test(u) {
        return u < this.resolve(a);
      }
    });
  }
  moreThan(a, i = Ea.moreThan) {
    return this.test({
      message: i,
      name: 'min',
      exclusive: !0,
      params: { more: a },
      skipAbsent: !0,
      test(u) {
        return u > this.resolve(a);
      }
    });
  }
  positive(a = Ea.positive) {
    return this.moreThan(0, a);
  }
  negative(a = Ea.negative) {
    return this.lessThan(0, a);
  }
  integer(a = Ea.integer) {
    return this.test({ name: 'integer', message: a, skipAbsent: !0, test: (i) => Number.isInteger(i) });
  }
  truncate() {
    return this.transform((a) => (sn(a) ? a : a | 0));
  }
  round(a) {
    var i;
    let u = ['ceil', 'floor', 'round', 'trunc'];
    if (((a = ((i = a) == null ? void 0 : i.toLowerCase()) || 'round'), a === 'trunc')) return this.truncate();
    if (u.indexOf(a.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + u.join(', '));
    return this.transform((s) => (sn(s) ? s : Math[a](s)));
  }
}
lt.prototype = Ly.prototype;
let kE = new Date(''),
  IE = (r) => Object.prototype.toString.call(r) === '[object Date]';
class Bd extends jr {
  constructor() {
    super({
      type: 'date',
      check(a) {
        return IE(a) && !isNaN(a.getTime());
      }
    }),
      this.withMutation(() => {
        this.transform((a, i, u) =>
          !u.spec.coerce || u.isType(a) || a === null ? a : ((a = NE(a)), isNaN(a) ? Bd.INVALID_DATE : new Date(a))
        );
      });
  }
  prepareParam(a, i) {
    let u;
    if (ui.isRef(a)) u = a;
    else {
      let s = this.cast(a);
      if (!this._typeCheck(s))
        throw new TypeError(`\`${i}\` must be a Date or a value that can be \`cast()\` to a Date`);
      u = s;
    }
    return u;
  }
  min(a, i = sd.min) {
    let u = this.prepareParam(a, 'min');
    return this.test({
      message: i,
      name: 'min',
      exclusive: !0,
      params: { min: a },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(u);
      }
    });
  }
  max(a, i = sd.max) {
    let u = this.prepareParam(a, 'max');
    return this.test({
      message: i,
      name: 'max',
      exclusive: !0,
      params: { max: a },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(u);
      }
    });
  }
}
Bd.INVALID_DATE = kE;
function qE(r, a = []) {
  let i = [],
    u = new Set(),
    s = new Set(a.map(([d, h]) => `${d}-${h}`));
  function f(d, h) {
    let p = ti.split(d)[0];
    u.add(p), s.has(`${h}-${p}`) || i.push([h, p]);
  }
  for (const d of Object.keys(r)) {
    let h = r[d];
    u.add(d), ui.isRef(h) && h.isSibling ? f(h.path, d) : hc(h) && 'deps' in h && h.deps.forEach((p) => f(p, d));
  }
  return mE.array(Array.from(u), i).reverse();
}
function Eg(r, a) {
  let i = 1 / 0;
  return (
    r.some((u, s) => {
      var f;
      if ((f = a.path) != null && f.includes(u)) return (i = s), !0;
    }),
    i
  );
}
function zy(r) {
  return (a, i) => Eg(r, a) - Eg(r, i);
}
const Hy = (r, a, i) => {
  if (typeof r != 'string') return r;
  let u = r;
  try {
    u = JSON.parse(r);
  } catch {}
  return i.isType(u) ? u : r;
};
function Fs(r) {
  if ('fields' in r) {
    const a = {};
    for (const [i, u] of Object.entries(r.fields)) a[i] = Fs(u);
    return r.setFields(a);
  }
  if (r.type === 'array') {
    const a = r.optional();
    return a.innerType && (a.innerType = Fs(a.innerType)), a;
  }
  return r.type === 'tuple' ? r.optional().clone({ types: r.spec.types.map(Fs) }) : 'optional' in r ? r.optional() : r;
}
const LE = (r, a) => {
  const i = [...ti.normalizePath(a)];
  if (i.length === 1) return i[0] in r;
  let u = i.pop(),
    s = ti.getter(ti.join(i), !0)(r);
  return !!(s && u in s);
};
let Ag = (r) => Object.prototype.toString.call(r) === '[object Object]';
function Ng(r, a) {
  let i = Object.keys(r.fields);
  return Object.keys(a).filter((u) => i.indexOf(u) === -1);
}
const zE = zy([]);
function vt(r) {
  return new Fy(r);
}
class Fy extends jr {
  constructor(a) {
    super({
      type: 'object',
      check(i) {
        return Ag(i) || typeof i == 'function';
      }
    }),
      (this.fields = Object.create(null)),
      (this._sortErrors = zE),
      (this._nodes = []),
      (this._excludedEdges = []),
      this.withMutation(() => {
        a && this.shape(a);
      });
  }
  _cast(a, i = {}) {
    var u;
    let s = super._cast(a, i);
    if (s === void 0) return this.getDefault(i);
    if (!this._typeCheck(s)) return s;
    let f = this.fields,
      d = (u = i.stripUnknown) != null ? u : this.spec.noUnknown,
      h = [].concat(
        this._nodes,
        Object.keys(s).filter((v) => !this._nodes.includes(v))
      ),
      p = {},
      g = Object.assign({}, i, { parent: p, __validating: i.__validating || !1 }),
      N = !1;
    for (const v of h) {
      let S = f[v],
        w = v in s;
      if (S) {
        let D,
          P = s[v];
        (g.path = (i.path ? `${i.path}.` : '') + v), (S = S.resolve({ value: P, context: i.context, parent: p }));
        let J = S instanceof jr ? S.spec : void 0,
          W = J == null ? void 0 : J.strict;
        if (J != null && J.strip) {
          N = N || v in s;
          continue;
        }
        (D = !i.__validating || !W ? S.cast(s[v], g) : s[v]), D !== void 0 && (p[v] = D);
      } else w && !d && (p[v] = s[v]);
      (w !== v in p || p[v] !== s[v]) && (N = !0);
    }
    return N ? p : s;
  }
  _validate(a, i = {}, u, s) {
    let { from: f = [], originalValue: d = a, recursive: h = this.spec.recursive } = i;
    (i.from = [{ schema: this, value: d }, ...f]),
      (i.__validating = !0),
      (i.originalValue = d),
      super._validate(a, i, u, (p, g) => {
        if (!h || !Ag(g)) {
          s(p, g);
          return;
        }
        d = d || g;
        let N = [];
        for (let v of this._nodes) {
          let S = this.fields[v];
          !S ||
            ui.isRef(S) ||
            N.push(S.asNestedTest({ options: i, key: v, parent: g, parentPath: i.path, originalParent: d }));
        }
        this.runTests({ tests: N, value: g, originalValue: d, options: i }, u, (v) => {
          s(v.sort(this._sortErrors).concat(p), g);
        });
      });
  }
  clone(a) {
    const i = super.clone(a);
    return (
      (i.fields = Object.assign({}, this.fields)),
      (i._nodes = this._nodes),
      (i._excludedEdges = this._excludedEdges),
      (i._sortErrors = this._sortErrors),
      i
    );
  }
  concat(a) {
    let i = super.concat(a),
      u = i.fields;
    for (let [s, f] of Object.entries(this.fields)) {
      const d = u[s];
      u[s] = d === void 0 ? f : d;
    }
    return i.withMutation((s) => s.setFields(u, [...this._excludedEdges, ...a._excludedEdges]));
  }
  _getDefault(a) {
    if ('default' in this.spec) return super._getDefault(a);
    if (!this._nodes.length) return;
    let i = {};
    return (
      this._nodes.forEach((u) => {
        var s;
        const f = this.fields[u];
        let d = a;
        (s = d) != null && s.value && (d = Object.assign({}, d, { parent: d.value, value: d.value[u] })),
          (i[u] = f && 'getDefault' in f ? f.getDefault(d) : void 0);
      }),
      i
    );
  }
  setFields(a, i) {
    let u = this.clone();
    return (u.fields = a), (u._nodes = qE(a, i)), (u._sortErrors = zy(Object.keys(a))), i && (u._excludedEdges = i), u;
  }
  shape(a, i = []) {
    return this.clone().withMutation((u) => {
      let s = u._excludedEdges;
      return (
        i.length && (Array.isArray(i[0]) || (i = [i]), (s = [...u._excludedEdges, ...i])),
        u.setFields(Object.assign(u.fields, a), s)
      );
    });
  }
  partial() {
    const a = {};
    for (const [i, u] of Object.entries(this.fields))
      a[i] = 'optional' in u && u.optional instanceof Function ? u.optional() : u;
    return this.setFields(a);
  }
  deepPartial() {
    return Fs(this);
  }
  pick(a) {
    const i = {};
    for (const u of a) this.fields[u] && (i[u] = this.fields[u]);
    return this.setFields(
      i,
      this._excludedEdges.filter(([u, s]) => a.includes(u) && a.includes(s))
    );
  }
  omit(a) {
    const i = [];
    for (const u of Object.keys(this.fields)) a.includes(u) || i.push(u);
    return this.pick(i);
  }
  from(a, i, u) {
    let s = ti.getter(a, !0);
    return this.transform((f) => {
      if (!f) return f;
      let d = f;
      return LE(f, a) && ((d = Object.assign({}, f)), u || delete d[a], (d[i] = s(f))), d;
    });
  }
  json() {
    return this.transform(Hy);
  }
  exact(a) {
    return this.test({
      name: 'exact',
      exclusive: !0,
      message: a || zs.exact,
      test(i) {
        if (i == null) return !0;
        const u = Ng(this.schema, i);
        return u.length === 0 || this.createError({ params: { properties: u.join(', ') } });
      }
    });
  }
  stripUnknown() {
    return this.clone({ noUnknown: !0 });
  }
  noUnknown(a = !0, i = zs.noUnknown) {
    typeof a != 'boolean' && ((i = a), (a = !0));
    let u = this.test({
      name: 'noUnknown',
      exclusive: !0,
      message: i,
      test(s) {
        if (s == null) return !0;
        const f = Ng(this.schema, s);
        return !a || f.length === 0 || this.createError({ params: { unknown: f.join(', ') } });
      }
    });
    return (u.spec.noUnknown = a), u;
  }
  unknown(a = !0, i = zs.noUnknown) {
    return this.noUnknown(!a, i);
  }
  transformKeys(a) {
    return this.transform((i) => {
      if (!i) return i;
      const u = {};
      for (const s of Object.keys(i)) u[a(s)] = i[s];
      return u;
    });
  }
  camelCase() {
    return this.transformKeys(Wf.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Wf.snakeCase);
  }
  constantCase() {
    return this.transformKeys((a) => Wf.snakeCase(a).toUpperCase());
  }
  describe(a) {
    const i = (a ? this.resolve(a) : this).clone(),
      u = super.describe(a);
    u.fields = {};
    for (const [f, d] of Object.entries(i.fields)) {
      var s;
      let h = a;
      (s = h) != null && s.value && (h = Object.assign({}, h, { parent: h.value, value: h.value[f] })),
        (u.fields[f] = d.describe(h));
    }
    return u;
  }
}
vt.prototype = Fy.prototype;
function Vy(r) {
  return new Gy(r);
}
class Gy extends jr {
  constructor(a) {
    super({
      type: 'array',
      spec: { types: a },
      check(i) {
        return Array.isArray(i);
      }
    }),
      (this.innerType = void 0),
      (this.innerType = a);
  }
  _cast(a, i) {
    const u = super._cast(a, i);
    if (!this._typeCheck(u) || !this.innerType) return u;
    let s = !1;
    const f = u.map((d, h) => {
      const p = this.innerType.cast(d, Object.assign({}, i, { path: `${i.path || ''}[${h}]` }));
      return p !== d && (s = !0), p;
    });
    return s ? f : u;
  }
  _validate(a, i = {}, u, s) {
    var f;
    let d = this.innerType,
      h = (f = i.recursive) != null ? f : this.spec.recursive;
    i.originalValue != null && i.originalValue,
      super._validate(a, i, u, (p, g) => {
        var N;
        if (!h || !d || !this._typeCheck(g)) {
          s(p, g);
          return;
        }
        let v = new Array(g.length);
        for (let w = 0; w < g.length; w++) {
          var S;
          v[w] = d.asNestedTest({
            options: i,
            index: w,
            parent: g,
            parentPath: i.path,
            originalParent: (S = i.originalValue) != null ? S : a
          });
        }
        this.runTests(
          { value: g, tests: v, originalValue: (N = i.originalValue) != null ? N : a, options: i },
          u,
          (w) => s(w.concat(p), g)
        );
      });
  }
  clone(a) {
    const i = super.clone(a);
    return (i.innerType = this.innerType), i;
  }
  json() {
    return this.transform(Hy);
  }
  concat(a) {
    let i = super.concat(a);
    return (
      (i.innerType = this.innerType),
      a.innerType && (i.innerType = i.innerType ? i.innerType.concat(a.innerType) : a.innerType),
      i
    );
  }
  of(a) {
    let i = this.clone();
    if (!hc(a)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + Kn(a));
    return (i.innerType = a), (i.spec = Object.assign({}, i.spec, { types: a })), i;
  }
  length(a, i = Hs.length) {
    return this.test({
      message: i,
      name: 'length',
      exclusive: !0,
      params: { length: a },
      skipAbsent: !0,
      test(u) {
        return u.length === this.resolve(a);
      }
    });
  }
  min(a, i) {
    return (
      (i = i || Hs.min),
      this.test({
        message: i,
        name: 'min',
        exclusive: !0,
        params: { min: a },
        skipAbsent: !0,
        test(u) {
          return u.length >= this.resolve(a);
        }
      })
    );
  }
  max(a, i) {
    return (
      (i = i || Hs.max),
      this.test({
        message: i,
        name: 'max',
        exclusive: !0,
        params: { max: a },
        skipAbsent: !0,
        test(u) {
          return u.length <= this.resolve(a);
        }
      })
    );
  }
  ensure() {
    return this.default(() => []).transform((a, i) => (this._typeCheck(a) ? a : i == null ? [] : [].concat(i)));
  }
  compact(a) {
    let i = a ? (u, s, f) => !a(u, s, f) : (u) => !!u;
    return this.transform((u) => (u != null ? u.filter(i) : u));
  }
  describe(a) {
    const i = (a ? this.resolve(a) : this).clone(),
      u = super.describe(a);
    if (i.innerType) {
      var s;
      let f = a;
      (s = f) != null && s.value && (f = Object.assign({}, f, { parent: f.value, value: f.value[0] })),
        (u.innerType = i.innerType.describe(f));
    }
    return u;
  }
}
Vy.prototype = Gy.prototype;
const Ce = ({ label: r, labelDesc: a, children: i, error: u, required: s }) =>
    _.jsxs('label', {
      className: 'flex flex-col gap-1',
      children: [
        _.jsxs('span', {
          className: 'text-sm text-gray-500',
          children: [
            s && _.jsx('span', { className: 'text-red-500', children: '*' }),
            r,
            a && _.jsxs('span', { children: ['(', a, ')'] })
          ]
        }),
        i,
        u && _.jsx('span', { className: 'text-sm text-red-500', children: u.message })
      ]
    }),
  HE = [
    {
      chain: Nt.Bitcoin,
      name: 'Bitcoin',
      networks: [
        { network: Ie.BtcMainNet, name: 'MainNet' },
        { network: Ie.BtcTestNet, name: 'TestNet' }
      ]
    },
    {
      chain: Nt.Ethereum,
      name: 'Ethereum',
      networks: [
        { network: Ie.EvmMainNet, name: 'MainNet' },
        { network: Ie.EvmSepoliaNet, name: 'Sepolia' }
      ]
    },
    {
      chain: Nt.Solana,
      name: 'Solana',
      networks: [
        { network: Ie.SolanaMainNet, name: 'MainNet' },
        { network: Ie.SolanaTestNet, name: 'TestNet' }
      ]
    },
    { chain: Nt.Dfinity, name: 'Internet Computer', networks: [{ network: Ie.DfinityMainNet, name: 'MainNet' }] },
    {
      chain: Nt.Ton,
      name: 'TON',
      networks: [
        { network: Ie.TonMainNet, name: 'MainNet' },
        { network: Ie.TonTestNet, name: 'TestNet' }
      ]
    },
    {
      chain: Nt.Tron,
      name: 'TRON',
      networks: [
        { network: Ie.TronMainNet, name: 'MainNet' },
        { network: Ie.TronShastaTestNet, name: 'Shasta TestNet' },
        { network: Ie.TronNileTestNet, name: 'Nile TestNet' }
      ]
    },
    {
      chain: Nt.Kaspa,
      name: 'Kaspa',
      networks: [
        { network: Ie.KaspaMainNet, name: 'MainNet' },
        { network: Ie.KaspaTestNet, name: 'TestNet' }
      ]
    }
  ];
function Zn({ selectedChainIds: r, onChange: a, singleSelect: i }) {
  const u = (f, d) => r.some((h) => h.chain.equals(f) && h.network.equals(d)),
    s = (f, d) => {
      const h = new ir(f, d);
      if (i) {
        a([h]);
        return;
      }
      const p = r.some((g) => g.equals(h));
      a(p ? r.filter((g) => !g.equals(h)) : [...r, h]);
    };
  return _.jsx('div', {
    className: 'flex flex-col gap-1 max-h-80 overflow-y-auto p-2 border rounded',
    children: HE.map((f) =>
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
                        type: i ? 'radio' : 'checkbox',
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
function Ta({ selectedAssetTypes: r, onChange: a, singleSelect: i }) {
  const u = (s) => {
    if (i) {
      a([s]);
      return;
    }
    r.includes(s) ? a(r.filter((f) => f !== s)) : a([...r, s]);
  };
  return _.jsx('div', {
    className: 'flex flex-col gap-1 max-h-40 overflow-y-auto p-2 border rounded',
    children: Object.entries(Wa)
      .filter(([s]) => isNaN(Number(s)))
      .map(([s, f]) =>
        _.jsxs(
          'label',
          {
            className: 'flex items-center gap-2',
            children: [
              _.jsx('input', {
                type: i ? 'radio' : 'checkbox',
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
const FE = vt({
  chainIds: vt().nullable(),
  chainAssetTypes: vt().nullable(),
  limit: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  offset: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  orderBy: We()
});
function VE({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [g, N] = le.useState([]),
    {
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = jt({ resolver: kt(FE) }),
    D = S(async (P) => {
      i(!0), s(null), d('');
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
    title: 'GetAssets',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: w.chainIds,
          children: _.jsx(Zn, { selectedChainIds: g, onChange: N })
        }),
        _.jsx(Ce, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: w.chainAssetTypes,
          children: _.jsx(Ta, { selectedAssetTypes: h, onChange: p })
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
        _.jsx('button', { className: 'btn', onClick: D, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const GE = vt({ assetId: We(), tokenAddress: We() });
function $E({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = jt({ resolver: kt(GE) }),
    N = p(async (v) => {
      i(!0), s(null), d('');
      try {
        const S = { assetId: v.assetId, tokenAddress: v.tokenAddress };
        s(await r.getAsset(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
        _.jsx('button', { className: 'btn', onClick: N, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const YE = vt({
  chainIds: vt().nullable(),
  chainAssetTypes: vt().nullable(),
  baseAssetId: We(),
  quoteAssetId: We(),
  limit: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  offset: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  orderBy: We()
});
function KE({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [g, N] = le.useState([]),
    {
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = jt({ resolver: kt(YE) }),
    D = S(async (P) => {
      i(!0), s(null), d('');
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
    title: 'GetMarkets',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'ChainIds',
          labelDesc: 'select multiple chains',
          error: w.chainIds,
          children: _.jsx(Zn, { selectedChainIds: g, onChange: N })
        }),
        _.jsx(Ce, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: w.chainAssetTypes,
          children: _.jsx(Ta, { selectedAssetTypes: h, onChange: p })
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
        _.jsx('button', { className: 'btn', onClick: D, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const XE = vt({ marketId: We().required() });
function ZE({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = jt({ resolver: kt(XE) }),
    N = p(async (v) => {
      i(!0), s(null), d('');
      try {
        const S = BigInt(v.marketId);
        s(await r.getMarket(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
        _.jsx('button', { className: 'btn', onClick: N, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const QE = vt({ marketId: We(), chainIds: vt().nullable(), chainAssetTypes: vt().nullable() });
function PE({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [g, N] = le.useState([]),
    {
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = jt({ resolver: kt(QE) }),
    D = S(async (P) => {
      i(!0), s(null), d('');
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(Zn, { selectedChainIds: g, onChange: N })
        }),
        _.jsx(Ce, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: w.chainAssetTypes,
          children: _.jsx(Ta, { selectedAssetTypes: h, onChange: p })
        }),
        _.jsx('button', { className: 'btn', onClick: D, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const JE = vt({ marketId: We(), chainIds: vt().nullable(), chainAssetTypes: vt().nullable() });
function WE({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    [h, p] = le.useState([]),
    [g, N] = le.useState([]),
    {
      register: v,
      handleSubmit: S,
      formState: { errors: w }
    } = jt({ resolver: kt(JE) }),
    D = S(async (P) => {
      i(!0), s(null), d('');
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(Zn, { selectedChainIds: g, onChange: N })
        }),
        _.jsx(Ce, {
          label: 'ChainAssetTypes',
          labelDesc: 'select multiple types',
          error: w.chainAssetTypes,
          children: _.jsx(Ta, { selectedAssetTypes: h, onChange: p })
        }),
        _.jsx('button', { className: 'btn', onClick: D, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const eA = vt({ marketId: We() });
function tA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = jt({ resolver: kt(eA) }),
    N = p(async (v) => {
      i(!0), s(null), d('');
      try {
        const S = v.marketId ? BigInt(v.marketId) : void 0;
        s(await r.getMarketsSwapInfo(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
    title: 'GetMarketsSwapInfo',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'MarketId',
          error: g.marketId,
          children: _.jsx('input', { type: 'number', className: 'input', ...h('marketId') })
        }),
        _.jsx('button', { className: 'btn', onClick: N, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const rA = vt({
  marketId: We().required(),
  tickSpace: lt()
    .oneOf(
      Object.keys(Yi)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  limit: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  offset: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  orderBy: We()
});
function nA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = jt({ resolver: kt(rA) }),
    v = g(async (S) => {
      i(!0), s(null), d('');
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(or, {
            name: 'tickSpace',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Yi)
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
                            checked: S.value === Number(Yi[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(Yi[w]));
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
        _.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const aA = vt({
  index: lt()
    .oneOf(
      Object.keys($i)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  marketId: We().required(),
  limit: lt().required().min(1).max(100)
});
function iA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = jt({ defaultValues: { limit: 10 }, resolver: kt(aA) }),
    v = g(async (S) => {
      i(!0), s(null), d('');
      try {
        const w = { index: S.index, marketId: BigInt(S.marketId), limit: S.limit };
        s(await r.getMarketDepth(w));
      } catch (w) {
        d(w.message ?? JSON.stringify(w));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
    title: 'GetMarketDepth',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'Index',
          error: N.index,
          required: !0,
          children: _.jsx(or, {
            name: 'index',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys($i)
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
                            checked: S.value === Number($i[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number($i[w]));
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
        _.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
var Vs = { exports: {} },
  lA = Vs.exports,
  _g;
function uA() {
  return (
    _g ||
      ((_g = 1),
      (function (r, a) {
        (function (i, u) {
          r.exports = u();
        })(lA, function () {
          var i = 1e3,
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
            z = {
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
            ze = {
              s: Se,
              z: function (Z) {
                var I = -Z.utcOffset(),
                  R = Math.abs(I),
                  $ = Math.floor(R / 60),
                  H = R % 60;
                return (I <= 0 ? '+' : '-') + Se($, 2, '0') + ':' + Se(H, 2, '0');
              },
              m: function Z(I, R) {
                if (I.date() < R.date()) return -Z(R, I);
                var $ = 12 * (R.year() - I.year()) + (R.month() - I.month()),
                  H = I.clone().add($, v),
                  oe = R - H < 0,
                  j = I.clone().add($ + (oe ? -1 : 1), v);
                return +(-($ + (R - H) / (oe ? H - j : j - H)) || 0);
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
          he[we] = z;
          var Ae = '$isDayjsObject',
            b = function (Z) {
              return Z instanceof Y || !(!Z || !Z[Ae]);
            },
            A = function Z(I, R, $) {
              var H;
              if (!I) return we;
              if (typeof I == 'string') {
                var oe = I.toLowerCase();
                he[oe] && (H = oe), R && ((he[oe] = R), (H = oe));
                var j = I.split('-');
                if (!H && j.length > 1) return Z(j[0]);
              } else {
                var ne = I.name;
                (he[ne] = I), (H = ne);
              }
              return !$ && H && (we = H), H || (!$ && we);
            },
            O = function (Z, I) {
              if (b(Z)) return Z.clone();
              var R = typeof I == 'object' ? I : {};
              return (R.date = Z), (R.args = arguments), new Y(R);
            },
            G = ze;
          (G.l = A),
            (G.i = b),
            (G.w = function (Z, I) {
              return O(Z, { locale: I.$L, utc: I.$u, x: I.$x, $offset: I.$offset });
            });
          var Y = (function () {
              function Z(R) {
                (this.$L = A(R.locale, null, !0)), this.parse(R), (this.$x = this.$x || R.x || {}), (this[Ae] = !0);
              }
              var I = Z.prototype;
              return (
                (I.parse = function (R) {
                  (this.$d = (function ($) {
                    var H = $.date,
                      oe = $.utc;
                    if (H === null) return new Date(NaN);
                    if (G.u(H)) return new Date();
                    if (H instanceof Date) return new Date(H);
                    if (typeof H == 'string' && !/Z$/i.test(H)) {
                      var j = H.match(J);
                      if (j) {
                        var ne = j[2] - 1 || 0,
                          Ee = (j[7] || '0').substring(0, 3);
                        return oe
                          ? new Date(Date.UTC(j[1], ne, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, Ee))
                          : new Date(j[1], ne, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, Ee);
                      }
                    }
                    return new Date(H);
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
                  var H = O(R);
                  return this.startOf($) <= H && H <= this.endOf($);
                }),
                (I.isAfter = function (R, $) {
                  return O(R) < this.startOf($);
                }),
                (I.isBefore = function (R, $) {
                  return this.endOf($) < O(R);
                }),
                (I.$g = function (R, $, H) {
                  return G.u(R) ? this[$] : this.set(H, R);
                }),
                (I.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (I.valueOf = function () {
                  return this.$d.getTime();
                }),
                (I.startOf = function (R, $) {
                  var H = this,
                    oe = !!G.u($) || $,
                    j = G.p(R),
                    ne = function (ke, B) {
                      var U = G.w(H.$u ? Date.UTC(H.$y, B, ke) : new Date(H.$y, B, ke), H);
                      return oe ? U : U.endOf(g);
                    },
                    Ee = function (ke, B) {
                      return G.w(
                        H.toDate()[ke].apply(H.toDate('s'), (oe ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(B)),
                        H
                      );
                    },
                    ye = this.$W,
                    T = this.$M,
                    je = this.$D,
                    Me = 'set' + (this.$u ? 'UTC' : '');
                  switch (j) {
                    case w:
                      return oe ? ne(1, 0) : ne(31, 11);
                    case v:
                      return oe ? ne(1, T) : ne(0, T + 1);
                    case N:
                      var Pe = this.$locale().weekStart || 0,
                        Re = (ye < Pe ? ye + 7 : ye) - Pe;
                      return ne(oe ? je - Re : je + (6 - Re), T);
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
                  var H,
                    oe = G.p(R),
                    j = 'set' + (this.$u ? 'UTC' : ''),
                    ne = ((H = {}),
                    (H[g] = j + 'Date'),
                    (H[D] = j + 'Date'),
                    (H[v] = j + 'Month'),
                    (H[w] = j + 'FullYear'),
                    (H[p] = j + 'Hours'),
                    (H[h] = j + 'Minutes'),
                    (H[d] = j + 'Seconds'),
                    (H[f] = j + 'Milliseconds'),
                    H)[oe],
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
                  var H,
                    oe = this;
                  R = Number(R);
                  var j = G.p($),
                    ne = function (T) {
                      var je = O(oe);
                      return G.w(je.date(je.date() + Math.round(T * R)), oe);
                    };
                  if (j === v) return this.set(v, this.$M + R);
                  if (j === w) return this.set(w, this.$y + R);
                  if (j === g) return ne(1);
                  if (j === N) return ne(7);
                  var Ee = ((H = {}), (H[h] = u), (H[p] = s), (H[d] = i), H)[j] || 1,
                    ye = this.$d.getTime() + R * Ee;
                  return G.w(ye, this);
                }),
                (I.subtract = function (R, $) {
                  return this.add(-1 * R, $);
                }),
                (I.format = function (R) {
                  var $ = this,
                    H = this.$locale();
                  if (!this.isValid()) return H.invalidDate || P;
                  var oe = R || 'YYYY-MM-DDTHH:mm:ssZ',
                    j = G.z(this),
                    ne = this.$H,
                    Ee = this.$m,
                    ye = this.$M,
                    T = H.weekdays,
                    je = H.months,
                    Me = H.meridiem,
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
                            return Pe(H.weekdaysMin, $.$W, T, 2);
                          case 'ddd':
                            return Pe(H.weekdaysShort, $.$W, T, 3);
                          case 'dddd':
                            return T[$.$W];
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
                (I.diff = function (R, $, H) {
                  var oe,
                    j = this,
                    ne = G.p($),
                    Ee = O(R),
                    ye = (Ee.utcOffset() - this.utcOffset()) * u,
                    T = this - Ee,
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
                      oe = (T - ye) / 6048e5;
                      break;
                    case g:
                      oe = (T - ye) / 864e5;
                      break;
                    case p:
                      oe = T / s;
                      break;
                    case h:
                      oe = T / u;
                      break;
                    case d:
                      oe = T / i;
                      break;
                    default:
                      oe = T;
                  }
                  return H ? oe : G.a(oe);
                }),
                (I.daysInMonth = function () {
                  return this.endOf(v).$D;
                }),
                (I.$locale = function () {
                  return he[this.$L];
                }),
                (I.locale = function (R, $) {
                  if (!R) return this.$L;
                  var H = this.clone(),
                    oe = A(R, $, !0);
                  return oe && (H.$L = oe), H;
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
            K = Y.prototype;
          return (
            (O.prototype = K),
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
              K[Z[1]] = function (I) {
                return this.$g(I, Z[0], Z[1]);
              };
            }),
            (O.extend = function (Z, I) {
              return Z.$i || (Z(I, Y, O), (Z.$i = !0)), O;
            }),
            (O.locale = A),
            (O.isDayjs = b),
            (O.unix = function (Z) {
              return O(1e3 * Z);
            }),
            (O.en = he[we]),
            (O.Ls = he),
            (O.p = {}),
            O
          );
        });
      })(Vs)),
    Vs.exports
  );
}
var sA = uA();
const nc = au(sA),
  cA = vt({
    marketId: We().required(),
    tradedAtStart: lt()
      .nullable()
      .transform((r, a) => (a === '' ? null : r)),
    tradedAtEnd: lt()
      .nullable()
      .transform((r, a) => (a === '' ? null : r)),
    limit: lt()
      .nullable()
      .transform((r, a) => (a === '' ? null : r)),
    offset: lt()
      .nullable()
      .transform((r, a) => (a === '' ? null : r)),
    orderBy: We()
  });
function oA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = jt({ resolver: kt(cA) }),
    v = g(async (S) => {
      i(!0), s(null), d('');
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(or, {
            control: p,
            name: 'tradedAtStart',
            render: ({ field: S }) =>
              _.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? nc(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (w) => {
                  S.onChange(w.target.value ? new Date(w.target.value).getTime() : void 0);
                }
              })
          })
        }),
        _.jsx(Ce, {
          label: 'TradedAtEnd',
          error: N.tradedAtEnd,
          children: _.jsx(or, {
            control: p,
            name: 'tradedAtEnd',
            render: ({ field: S }) =>
              _.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? nc(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
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
        _.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const fA = vt({
  marketId: We().required(),
  orderSide: lt()
    .oneOf(
      Object.keys(_t)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  price: lt().required(),
  volume: lt().required(),
  baseAssetDecimals: lt().required(),
  quoteAssetDecimals: lt().required()
});
function dA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = jt({ resolver: kt(fA) }),
    v = g(async (S) => {
      i(!0), s(null), d('');
      try {
        const w = {
            marketId: BigInt(S.marketId),
            orderCategory: $n.LimitOrder,
            limitOrderDetails: { orderSide: S.orderSide, price: S.price, volume: S.volume }
          },
          D = { baseAssetDecimals: S.baseAssetDecimals, quoteAssetDecimals: S.quoteAssetDecimals };
        await r.submitSpotOrder(w, D), s(!0);
      } catch (w) {
        d(w.message ?? JSON.stringify(w)), s(!1);
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(or, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_t)
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
                            value: Number(_t[w]),
                            checked: S.value === Number(_t[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(_t[w]));
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
        _.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const hA = vt({
  marketId: We().required(),
  orderSide: lt()
    .oneOf(
      Object.keys(_t)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  exactTokensType: lt()
    .oneOf(
      Object.keys(_a)
        .filter((r) => !isNaN(Number(r)))
        .map(Number)
    )
    .required(),
  exactTokens: lt().required(),
  minOut: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  maxIn: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  baseAssetDecimals: lt().required(),
  quoteAssetDecimals: lt().required()
});
function mA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = jt({ resolver: kt(hA) }),
    v = g(async (S) => {
      i(!0), s(null), d('');
      try {
        const w = {
            marketId: BigInt(S.marketId),
            orderCategory: $n.SwapOrder,
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(or, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_t)
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
                            value: Number(_t[w]),
                            checked: S.value === Number(_t[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(_t[w]));
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
          children: _.jsx(or, {
            name: 'exactTokensType',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_a)
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
                            value: Number(_a[w]),
                            checked: S.value === Number(_a[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(_a[w]));
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
        _.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const pA = vt({
  marketId: We(),
  orderId: We(),
  orderSide: lt().oneOf(
    Object.keys(_t)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  isCancelAll: ky()
});
function gA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = jt({ resolver: kt(pA) }),
    v = g(async (S) => {
      var P, J;
      i(!0), s(null), d('');
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(or, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_t)
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
                            value: Number(_t[w]),
                            checked: S.value === Number(_t[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(_t[w]));
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
        _.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const yA = vt({
  hin: We().required(),
  status: Vy(
    lt()
      .oneOf(
        Object.keys(Aa)
          .filter((r) => !isNaN(Number(r)))
          .map(Number)
      )
      .required()
  ),
  marketId: We(),
  orderIds: We(),
  orderCategory: lt().oneOf(
    Object.keys($n)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  orderSide: lt().oneOf(
    Object.keys(_t)
      .filter((r) => !isNaN(Number(r)))
      .map(Number)
  ),
  createdAtStart: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  createdAtEnd: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  limit: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  offset: lt()
    .nullable()
    .transform((r, a) => (a === '' ? null : r)),
  orderBy: We()
});
function vA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      control: p,
      handleSubmit: g,
      formState: { errors: N }
    } = jt({ resolver: kt(yA) }),
    v = g(async (S) => {
      var w;
      i(!0), s(null), d('');
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
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(or, {
            name: 'status',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(Aa)
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
                            value: Number(Aa[w]),
                            checked: ((D = S.value) == null ? void 0 : D.includes(Number(Aa[w]))) ?? !1,
                            onChange: (P) => {
                              P.target.checked
                                ? S.onChange([...(S.value ?? []), Number(Aa[w])])
                                : S.onChange((S.value ?? []).filter((J) => J !== Number(Aa[w])));
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
          children: _.jsx(or, {
            name: 'orderCategory',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys($n)
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
                            value: Number($n[w]),
                            checked: S.value === Number($n[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number($n[w]));
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
          children: _.jsx(or, {
            name: 'orderSide',
            control: p,
            render: ({ field: S }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.keys(_t)
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
                            value: Number(_t[w]),
                            checked: S.value === Number(_t[w]),
                            onChange: (D) => {
                              D.target.checked && S.onChange(Number(_t[w]));
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
          children: _.jsx(or, {
            control: p,
            name: 'createdAtStart',
            render: ({ field: S }) =>
              _.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? nc(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
                onChange: (w) => {
                  S.onChange(w.target.value ? new Date(w.target.value).getTime() : void 0);
                }
              })
          })
        }),
        _.jsx(Ce, {
          label: 'CreatedAtEnd',
          error: N.createdAtEnd,
          children: _.jsx(or, {
            control: p,
            name: 'createdAtEnd',
            render: ({ field: S }) =>
              _.jsx('input', {
                type: 'datetime-local',
                className: 'input',
                ...S,
                value: S.value ? nc(S.value).format('YYYY-MM-DDTHH:mm:ss') : void 0,
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
        _.jsx('button', { className: 'btn', onClick: v, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const bA = vt({ orderId: We(), clientOrderId: We(), txHash: We() }).test(
  'exactly-one-identifier',
  'Exactly one of Order ID, Client Order ID, or Tx Hash must be provided',
  function (r) {
    return [!!r.orderId, !!r.clientOrderId, !!r.txHash].filter(Boolean).length === 1;
  }
);
function SA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = jt({ resolver: kt(bA) }),
    N = p(async (v) => {
      i(!0), s(null), d('');
      try {
        s(await r.getOrder(v));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
        _.jsx('button', { className: 'btn', onClick: N, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const xA = vt({ orderId: We().required() });
function wA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = jt({ resolver: kt(xA) }),
    N = p(async (v) => {
      i(!0), s(null), d('');
      try {
        const S = v.orderId;
        s(await r.getOrderTrades(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
        _.jsx('button', { className: 'btn', onClick: N, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const EA = vt({ hin: We().required(), assetId: We() });
function AA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = jt({ resolver: kt(EA) }),
    N = p(async (v) => {
      i(!0), s(null), d('');
      try {
        const S = { hin: BigInt(v.hin), assetId: v.assetId ? BigInt(v.assetId) : void 0 },
          w = await r.getWalletBalances(S);
        s(w);
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
        _.jsx('button', { className: 'btn', onClick: N, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const NA = vt({ hin: We().required() });
function _A({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = jt({ resolver: kt(NA) }),
    N = p(async (v) => {
      i(!0), s(null), d('');
      try {
        const S = BigInt(v.hin);
        s(await r.getNonce(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
        _.jsx('button', { className: 'btn', onClick: N, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const OA = vt({
  network: We().oneOf(Object.values(on).map(String)).required(),
  hin: We().required(),
  proxyKey: We().required()
});
function TA({ client: r, defaultOptions: a }) {
  var p;
  const {
      register: i,
      control: u,
      watch: s,
      formState: { errors: f, isValid: d }
    } = jt({
      defaultValues: {
        network: a.network,
        hin: ((p = a.hin) == null ? void 0 : p.toString()) ?? '',
        proxyKey: a.proxyKey
      },
      resolver: kt(OA),
      mode: 'onChange'
    }),
    h = s();
  return (
    le.useEffect(() => {
      d && h.hin && h.proxyKey && r.setOptions({ network: h.network, hin: BigInt(h.hin), proxyKey: h.proxyKey });
    }, [h, d, r]),
    _.jsx(Dt, {
      title: 'Hibit Client Options Config',
      form: _.jsxs('div', {
        className: 'flex flex-col gap-2',
        children: [
          _.jsx(Ce, {
            label: 'Network',
            error: f.network,
            required: !0,
            children: _.jsx(or, {
              name: 'network',
              control: u,
              render: ({ field: g }) =>
                _.jsx('div', {
                  className: 'flex items-center gap-3 flex-wrap',
                  children: Object.values(on).map((N) =>
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
            children: _.jsx('input', { type: 'number', className: 'input', ...i('hin') })
          }),
          _.jsx(Ce, {
            label: 'Proxy Key',
            error: f.proxyKey,
            required: !0,
            children: _.jsx('input', { type: 'text', className: 'input', ...i('proxyKey') })
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
const Og = {
    network: on.Testnet,
    hin: BigInt(1e4),
    proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
  },
  MA = () => {
    const [r, a] = le.useState(null);
    return (
      le.useEffect(() => {
        const i = new Fw();
        i.setOptions(Og), a(i);
      }, []),
      r
        ? _.jsxs('div', {
            className: 'flex flex-col gap-6',
            children: [
              _.jsx(TA, { client: r, defaultOptions: Og }),
              _.jsx(Vw, { client: r }),
              _.jsx(Gw, { client: r }),
              _.jsx(VE, { client: r }),
              _.jsx($E, { client: r }),
              _.jsx(KE, { client: r }),
              _.jsx(ZE, { client: r }),
              _.jsx(PE, { client: r }),
              _.jsx(WE, { client: r }),
              _.jsx(tA, { client: r }),
              _.jsx(iA, { client: r }),
              _.jsx(nA, { client: r }),
              _.jsx(oA, { client: r }),
              _.jsx(dA, { client: r }),
              _.jsx(mA, { client: r }),
              _.jsx(gA, { client: r }),
              _.jsx(vA, { client: r }),
              _.jsx(SA, { client: r }),
              _.jsx(wA, { client: r }),
              _.jsx(AA, { client: r }),
              _.jsx(_A, { client: r })
            ]
          })
        : null
    );
  },
  yu = hy(Ad({ baseUrl: 'https://testnetbrokerapi.hibit.app' })),
  RA = (r) => ((r == null ? void 0 : r.client) ?? yu).get({ url: '/v1/payment-address', ...r }),
  BA = (r) => ((r == null ? void 0 : r.client) ?? yu).get({ url: '/v1/quote', ...r }),
  CA = (r) => ((r == null ? void 0 : r.client) ?? yu).get({ url: '/v1/order', ...r }),
  DA = (r) =>
    ((r == null ? void 0 : r.client) ?? yu).post({
      url: '/v1/swap',
      ...r,
      headers: { 'Content-Type': 'application/json', ...(r == null ? void 0 : r.headers) }
    });
class UA {
  constructor() {
    Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  getOptions() {
    return this.options;
  }
  setOptions(a) {
    (this.options = a), yu.setConfig({ baseUrl: a.network === on.Testnet ? Iw : kw });
  }
  async getPaymentAddress(a) {
    const i = 'getPaymentAddress',
      u = await RA(qS(a));
    return this.ensureSuccess(i, u.data), u.data.data.address;
  }
  async quote(a) {
    const i = 'quote',
      u = await BA(LS(a));
    return this.ensureSuccess(i, u.data), zS(u.data.data);
  }
  async swap(a) {
    const i = 'swap',
      u = await DA(HS(a));
    return this.ensureSuccess(i, u.data), u.data.data.agentOrderId;
  }
  async getAgentOrder(a) {
    const i = 'getOrder',
      u = await CA(FS(a));
    return this.ensureSuccess(i, u.data), VS(u.data.data);
  }
  ensureSuccess(a, i) {
    (i == null ? void 0 : i.code) !== 200 &&
      cr.throwBadRequestError(a, i == null ? void 0 : i.code, i == null ? void 0 : i.message);
  }
}
const jA = vt({ network: We().oneOf(Object.values(on).map(String)).required() });
function kA({ client: r, defaultOptions: a }) {
  const {
      control: i,
      watch: u,
      formState: { errors: s, isValid: f }
    } = jt({ defaultValues: { network: a.network }, resolver: kt(jA), mode: 'onChange' }),
    d = u();
  return (
    le.useEffect(() => {
      f && r.setOptions({ network: d.network });
    }, [d, f, r]),
    _.jsx(Dt, {
      title: 'Broker Client Options Config',
      form: _.jsx('div', {
        className: 'flex flex-col gap-2',
        children: _.jsx(Ce, {
          label: 'Network',
          error: s.network,
          required: !0,
          children: _.jsx(or, {
            name: 'network',
            control: i,
            render: ({ field: h }) =>
              _.jsx('div', {
                className: 'flex items-center gap-3 flex-wrap',
                children: Object.values(on).map((p) =>
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
const IA = vt({ hin: We().required(), chainId: We().required() });
function qA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      setValue: h,
      trigger: p,
      watch: g,
      register: N,
      handleSubmit: v,
      formState: { errors: S }
    } = jt({ resolver: kt(IA) }),
    w = g('chainId'),
    D = v(async (P) => {
      i(!0), s(null), d('');
      try {
        const J = { hin: BigInt(P.hin), chainId: ir.fromString(P.chainId) };
        s(await r.getPaymentAddress(J));
      } catch (J) {
        d(J.message ?? JSON.stringify(J));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
          children: _.jsx(Zn, {
            singleSelect: !0,
            selectedChainIds: w ? [ir.fromString(w)] : [],
            onChange: (P) => {
              var J;
              h('chainId', ((J = P[0]) == null ? void 0 : J.toString()) ?? ''), p('chainId');
            }
          })
        }),
        _.jsx('button', { className: 'btn', onClick: D, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const LA = vt({
  sourceChainId: We().required(),
  sourceAssetType: lt().required(),
  sourceAsset: We(),
  sourceVolume: We().required(),
  targetChainId: We(),
  targetAssetType: lt().required(),
  targetAsset: We()
});
function zA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      setValue: h,
      trigger: p,
      watch: g,
      register: N,
      handleSubmit: v,
      formState: { errors: S }
    } = jt({ resolver: kt(LA) }),
    w = g('sourceChainId'),
    D = g('sourceAssetType'),
    P = g('targetChainId'),
    J = g('targetAssetType'),
    W = v(async (z) => {
      i(!0), s(null), d('');
      try {
        const Se = {
          sourceChainId: ir.fromString(z.sourceChainId),
          sourceAssetType: z.sourceAssetType,
          sourceAsset: z.sourceAsset,
          sourceVolume: BigInt(z.sourceVolume),
          targetChainId: z.targetChainId ? ir.fromString(z.targetChainId) : void 0,
          targetAssetType: z.targetAssetType,
          targetAsset: z.targetAsset
        };
        s(await r.quote(Se));
      } catch (Se) {
        d(Se.message ?? JSON.stringify(Se));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
    title: 'Quote',
    form: _.jsxs('div', {
      className: 'flex flex-col gap-2',
      children: [
        _.jsx(Ce, {
          label: 'Source ChainId',
          error: S.sourceChainId,
          required: !0,
          children: _.jsx(Zn, {
            singleSelect: !0,
            selectedChainIds: w ? [ir.fromString(w)] : [],
            onChange: (z) => {
              var Se;
              h('sourceChainId', ((Se = z[0]) == null ? void 0 : Se.toString()) ?? ''), p('sourceChainId');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Source Asset Type',
          error: S.sourceAssetType,
          required: !0,
          children: _.jsx(Ta, {
            singleSelect: !0,
            selectedAssetTypes: typeof D == 'number' ? [D] : [],
            onChange: (z) => {
              h('sourceAssetType', z[0] ?? null), p('sourceAssetType');
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
          children: _.jsx(Zn, {
            singleSelect: !0,
            selectedChainIds: P ? [ir.fromString(P)] : [],
            onChange: (z) => {
              var Se;
              h('targetChainId', ((Se = z[0]) == null ? void 0 : Se.toString()) ?? ''), p('targetChainId');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Target Asset Type',
          error: S.targetAssetType,
          required: !0,
          children: _.jsx(Ta, {
            singleSelect: !0,
            selectedAssetTypes: typeof J == 'number' ? [J] : [],
            onChange: (z) => {
              h('targetAssetType', z[0] ?? null), p('targetAssetType');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Target Asset',
          error: S.targetAsset,
          children: _.jsx('input', { type: 'text', className: 'input', ...N('targetAsset') })
        }),
        _.jsx('button', { className: 'btn', onClick: W, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const HA = async (r) => {
    try {
      await window.kasware.requestAccounts(),
        (await window.kasware.getNetwork()) !== r && (await window.kasware.switchNetwork(r));
      const i = await window.kasware.getAccounts(),
        u = await window.kasware.getPublicKey();
      return { address: i[0].toLowerCase(), publicKey: u };
    } catch (a) {
      throw new Error('KasWare connect: ' + (a.message ?? JSON.stringify(a)));
    }
  },
  FA = async (r) => {
    try {
      return `0x${await window.kasware.signMessage(r)}`;
    } catch (a) {
      throw new Error('KasWare sign: ' + (a.message ?? JSON.stringify(a)));
    }
  },
  VA = async (r, a) => {
    try {
      if (!r || a <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const u = new en(a).toNumber();
      if ((await window.kasware.getBalance()).total < u) throw new Error('Not enough KAS balance');
      const f = await window.kasware.sendKaspa(r, u),
        d = JSON.parse(f);
      return console.debug(`Transfer KAS: ${d}`), d.id;
    } catch (i) {
      throw new Error('KasWare transferKaspa: ' + (i.message ?? JSON.stringify(i)));
    }
  },
  GA = async (r, a, i) => {
    try {
      if (!r || !i || a <= 0) throw new Error('Invalid parameters');
      if (!(await window.kasware.getAccounts()).length) throw new Error('Wallet not connected.');
      const f = (await window.kasware.getKRC20Balance()).find((v) => v.tick.toUpperCase() === i.toUpperCase());
      if (!f) throw new Error(`Not enough KRC20(${i}) balance`);
      const d = new en(a).shiftedBy(Number(f.dec)).toNumber();
      if (Number(f.balance) < d) throw new Error(`Not enough KRC20(${i}) balance`);
      const h = { p: 'KRC-20', op: 'transfer', tick: i.toUpperCase(), amt: d.toString(), to: r },
        g = await window.kasware.signKRC20Transaction(JSON.stringify(h), 4, r),
        N = JSON.parse(g);
      return console.debug(`Transfer KRC20: ${N}`), N.revealId;
    } catch (u) {
      throw new Error('KasWare transferKrc20: ' + (u.message ?? JSON.stringify(u)));
    }
  },
  $A = vt({
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
function YA({ client: r }) {
  const [a, i] = le.useState(!1),
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
    } = jt({ resolver: kt($A) }),
    D = N(),
    P = le.useMemo(() => {
      if (!D.sourceChainId) return !1;
      const he = ir.fromString(D.sourceChainId),
        Ae = D.sourceAssetType,
        b = he.chain.equals(Nt.Kaspa),
        A = !Ae || Ae === Wa.Native,
        O = Ae === Wa.KRC20;
      return b && (A || O);
    }, [D.sourceChainId, D.sourceAssetType]),
    J = (he) =>
      new IS({
        hin: BigInt(he.hin),
        sourceWalletPublicKey: he.sourceWalletPublicKey,
        sourceWalletAddress: he.sourceWalletAddress,
        txRef: he.txRef,
        sourceChainId: ir.fromString(he.sourceChainId),
        sourceAssetType: he.sourceAssetType,
        sourceAsset: he.sourceAsset,
        sourceVolume: BigInt(he.sourceVolume),
        targetChainId: he.targetChainId ? ir.fromString(he.targetChainId) : void 0,
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
    z = S(async (he) => {
      i(!0), s(null), d('');
      try {
        const Ae = J(he);
        Ae.setSignature(he.signature, he.signatureSchema), s(await r.swap(Ae));
      } catch (Ae) {
        d(Ae.message ?? JSON.stringify(Ae));
      } finally {
        i(!1);
      }
    }),
    Se = async () => {
      try {
        const he = r.getOptions().network,
          { address: Ae, publicKey: b } = await HA(he === on.Testnet ? 'kaspa_testnet_10' : 'kaspa_mainnet');
        p('sourceWalletAddress', Ae),
          p('sourceWalletPublicKey', b),
          g('sourceWalletAddress'),
          g('sourceWalletPublicKey');
      } catch (he) {
        alert(he.message ?? JSON.stringify(he));
      }
    },
    ze = async () => {
      try {
        let he = '';
        if (D.sourceAssetType === Wa.KRC20) {
          if (!D.paymentAddress || !D.sourceAsset || !D.sourceVolume)
            throw new Error('paymentAddress, sourceAsset and sourceVolume are required for KRC20 transfer');
          he = await GA(D.paymentAddress, D.sourceVolume, D.sourceAsset);
        } else {
          if (!D.paymentAddress || !D.sourceVolume)
            throw new Error('paymentAddress and sourceVolume are required for KAS transfer');
          he = await VA(D.paymentAddress, D.sourceVolume);
        }
        p('txRef', he), g('txRef');
      } catch (he) {
        alert(he.message ?? JSON.stringify(he));
      }
    },
    we = async () => {
      try {
        const Ae = J(D).toJson(),
          b = await FA(Ae);
        p('signature', b), p('signatureSchema', Vi.KaspaSchnorr), g('signature'), g('signatureSchema');
      } catch (he) {
        alert(he.message ?? JSON.stringify(he));
      }
    };
  return _.jsx(Dt, {
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
          children: _.jsx(Zn, {
            singleSelect: !0,
            selectedChainIds: D.sourceChainId ? [ir.fromString(D.sourceChainId)] : [],
            onChange: (he) => {
              var Ae;
              p('sourceChainId', ((Ae = he[0]) == null ? void 0 : Ae.toString()) ?? ''), g('sourceChainId');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Source Asset Type',
          error: w.sourceAssetType,
          children: _.jsx(Ta, {
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
              onClick: ze,
              disabled: !P,
              children: 'Transfer using Kasware Wallet'
            })
          ]
        }),
        _.jsx(Ce, {
          label: 'Target ChainId',
          error: w.targetChainId,
          children: _.jsx(Zn, {
            singleSelect: !0,
            selectedChainIds: D.targetChainId ? [ir.fromString(D.targetChainId)] : [],
            onChange: (he) => {
              var Ae;
              p('targetChainId', ((Ae = he[0]) == null ? void 0 : Ae.toString()) ?? ''), g('targetChainId');
            }
          })
        }),
        _.jsx(Ce, {
          label: 'Target Asset Type',
          error: w.targetAssetType,
          children: _.jsx(Ta, {
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
              children: _.jsx(or, {
                name: 'signatureSchema',
                control: h,
                render: ({ field: he }) =>
                  _.jsx('div', {
                    className: 'flex items-center gap-3 flex-wrap',
                    children: Object.keys(Vi)
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
                                checked: he.value === Number(Vi[Ae]),
                                onChange: (b) => {
                                  b.target.checked && he.onChange(Number(Vi[Ae]));
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
        _.jsx('button', { className: 'btn', onClick: z, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const KA = vt({ agentOrderId: We().required() });
function XA({ client: r }) {
  const [a, i] = le.useState(!1),
    [u, s] = le.useState(null),
    [f, d] = le.useState(''),
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g }
    } = jt({ resolver: kt(KA) }),
    N = p(async (v) => {
      i(!0), s(null), d('');
      try {
        const S = v.agentOrderId;
        s(await r.getAgentOrder(S));
      } catch (S) {
        d(S.message ?? JSON.stringify(S));
      } finally {
        i(!1);
      }
    });
  return _.jsx(Dt, {
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
        _.jsx('button', { className: 'btn', onClick: N, disabled: a, children: a ? 'Loading...' : 'Submit' })
      ]
    }),
    loading: a,
    result: u,
    error: f
  });
}
const Tg = { network: on.Testnet },
  ZA = () => {
    const [r, a] = le.useState(null);
    return (
      le.useEffect(() => {
        const i = new UA();
        i.setOptions(Tg), a(i);
      }, []),
      r
        ? _.jsxs('div', {
            className: 'flex flex-col gap-6',
            children: [
              _.jsx(kA, { client: r, defaultOptions: Tg }),
              _.jsx(qA, { client: r }),
              _.jsx(zA, { client: r }),
              _.jsx(YA, { client: r }),
              _.jsx(XA, { client: r })
            ]
          })
        : null
    );
  },
  QA = () =>
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
                    children: _.jsx(ad, {
                      to: '/',
                      className: ({ isActive: r }) => `font-bold underline ${r ? 'text-blue-500' : 'text-gray-500'}`,
                      children: 'HibitClient'
                    })
                  }),
                  _.jsx('li', {
                    children: _.jsx(ad, {
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
          children: _.jsxs(tS, {
            children: [
              _.jsx(rd, { path: '/', element: _.jsx(MA, {}) }),
              _.jsx(rd, { path: '/broker', element: _.jsx(ZA, {}) })
            ]
          })
        })
      ]
    });
ob.createRoot(document.getElementById('root')).render(
  _.jsx(wt.StrictMode, { children: _.jsx(NS, { children: _.jsx(QA, {}) }) })
);
