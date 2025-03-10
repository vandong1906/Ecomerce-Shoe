(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function o(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = i(l);
    fetch(l.href, c);
  }
})();
function fp(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var Hl = { exports: {} },
  Ti = {},
  $l = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yf;
function Xg() {
  if (Yf) return oe;
  Yf = 1;
  var r = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function S(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (E && C[E]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var P = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    T = {};
  function R(C, D, ie) {
    (this.props = C),
      (this.context = D),
      (this.refs = T),
      (this.updater = ie || P);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (C, D) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, C, D, "setState");
    }),
    (R.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function O() {}
  O.prototype = R.prototype;
  function F(C, D, ie) {
    (this.props = C),
      (this.context = D),
      (this.refs = T),
      (this.updater = ie || P);
  }
  var $ = (F.prototype = new O());
  ($.constructor = F), k($, R.prototype), ($.isPureReactComponent = !0);
  var z = Array.isArray,
    X = Object.prototype.hasOwnProperty,
    re = { current: null },
    se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(C, D, ie) {
    var ae,
      ce = {},
      de = null,
      we = null;
    if (D != null)
      for (ae in (D.ref !== void 0 && (we = D.ref),
      D.key !== void 0 && (de = "" + D.key),
      D))
        X.call(D, ae) && !se.hasOwnProperty(ae) && (ce[ae] = D[ae]);
    var me = arguments.length - 2;
    if (me === 1) ce.children = ie;
    else if (1 < me) {
      for (var Ce = Array(me), ft = 0; ft < me; ft++)
        Ce[ft] = arguments[ft + 2];
      ce.children = Ce;
    }
    if (C && C.defaultProps)
      for (ae in ((me = C.defaultProps), me))
        ce[ae] === void 0 && (ce[ae] = me[ae]);
    return {
      $$typeof: r,
      type: C,
      key: de,
      ref: we,
      props: ce,
      _owner: re.current,
    };
  }
  function he(C, D) {
    return {
      $$typeof: r,
      type: C.type,
      key: D,
      ref: C.ref,
      props: C.props,
      _owner: C._owner,
    };
  }
  function ke(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }
  function Ze(C) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (ie) {
        return D[ie];
      })
    );
  }
  var Xe = /\/+/g;
  function et(C, D) {
    return typeof C == "object" && C !== null && C.key != null
      ? Ze("" + C.key)
      : D.toString(36);
  }
  function it(C, D, ie, ae, ce) {
    var de = typeof C;
    (de === "undefined" || de === "boolean") && (C = null);
    var we = !1;
    if (C === null) we = !0;
    else
      switch (de) {
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case r:
            case n:
              we = !0;
          }
      }
    if (we)
      return (
        (we = C),
        (ce = ce(we)),
        (C = ae === "" ? "." + et(we, 0) : ae),
        z(ce)
          ? ((ie = ""),
            C != null && (ie = C.replace(Xe, "$&/") + "/"),
            it(ce, D, ie, "", function (ft) {
              return ft;
            }))
          : ce != null &&
            (ke(ce) &&
              (ce = he(
                ce,
                ie +
                  (!ce.key || (we && we.key === ce.key)
                    ? ""
                    : ("" + ce.key).replace(Xe, "$&/") + "/") +
                  C
              )),
            D.push(ce)),
        1
      );
    if (((we = 0), (ae = ae === "" ? "." : ae + ":"), z(C)))
      for (var me = 0; me < C.length; me++) {
        de = C[me];
        var Ce = ae + et(de, me);
        we += it(de, D, ie, Ce, ce);
      }
    else if (((Ce = S(C)), typeof Ce == "function"))
      for (C = Ce.call(C), me = 0; !(de = C.next()).done; )
        (de = de.value),
          (Ce = ae + et(de, me++)),
          (we += it(de, D, ie, Ce, ce));
    else if (de === "object")
      throw (
        ((D = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : D) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return we;
  }
  function Se(C, D, ie) {
    if (C == null) return C;
    var ae = [],
      ce = 0;
    return (
      it(C, ae, "", "", function (de) {
        return D.call(ie, de, ce++);
      }),
      ae
    );
  }
  function qe(C) {
    if (C._status === -1) {
      var D = C._result;
      (D = D()),
        D.then(
          function (ie) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = ie));
          },
          function (ie) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = ie));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = D));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var ue = { current: null },
    H = { transition: null },
    Q = {
      ReactCurrentDispatcher: ue,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: re,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (oe.Children = {
      map: Se,
      forEach: function (C, D, ie) {
        Se(
          C,
          function () {
            D.apply(this, arguments);
          },
          ie
        );
      },
      count: function (C) {
        var D = 0;
        return (
          Se(C, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (C) {
        return (
          Se(C, function (D) {
            return D;
          }) || []
        );
      },
      only: function (C) {
        if (!ke(C))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return C;
      },
    }),
    (oe.Component = R),
    (oe.Fragment = i),
    (oe.Profiler = l),
    (oe.PureComponent = F),
    (oe.StrictMode = o),
    (oe.Suspense = p),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q),
    (oe.act = W),
    (oe.cloneElement = function (C, D, ie) {
      if (C == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            C +
            "."
        );
      var ae = k({}, C.props),
        ce = C.key,
        de = C.ref,
        we = C._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((de = D.ref), (we = re.current)),
          D.key !== void 0 && (ce = "" + D.key),
          C.type && C.type.defaultProps)
        )
          var me = C.type.defaultProps;
        for (Ce in D)
          X.call(D, Ce) &&
            !se.hasOwnProperty(Ce) &&
            (ae[Ce] = D[Ce] === void 0 && me !== void 0 ? me[Ce] : D[Ce]);
      }
      var Ce = arguments.length - 2;
      if (Ce === 1) ae.children = ie;
      else if (1 < Ce) {
        me = Array(Ce);
        for (var ft = 0; ft < Ce; ft++) me[ft] = arguments[ft + 2];
        ae.children = me;
      }
      return {
        $$typeof: r,
        type: C.type,
        key: ce,
        ref: de,
        props: ae,
        _owner: we,
      };
    }),
    (oe.createContext = function (C) {
      return (
        (C = {
          $$typeof: f,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (C.Provider = { $$typeof: c, _context: C }),
        (C.Consumer = C)
      );
    }),
    (oe.createElement = pe),
    (oe.createFactory = function (C) {
      var D = pe.bind(null, C);
      return (D.type = C), D;
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (C) {
      return { $$typeof: g, render: C };
    }),
    (oe.isValidElement = ke),
    (oe.lazy = function (C) {
      return { $$typeof: v, _payload: { _status: -1, _result: C }, _init: qe };
    }),
    (oe.memo = function (C, D) {
      return { $$typeof: y, type: C, compare: D === void 0 ? null : D };
    }),
    (oe.startTransition = function (C) {
      var D = H.transition;
      H.transition = {};
      try {
        C();
      } finally {
        H.transition = D;
      }
    }),
    (oe.unstable_act = W),
    (oe.useCallback = function (C, D) {
      return ue.current.useCallback(C, D);
    }),
    (oe.useContext = function (C) {
      return ue.current.useContext(C);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (C) {
      return ue.current.useDeferredValue(C);
    }),
    (oe.useEffect = function (C, D) {
      return ue.current.useEffect(C, D);
    }),
    (oe.useId = function () {
      return ue.current.useId();
    }),
    (oe.useImperativeHandle = function (C, D, ie) {
      return ue.current.useImperativeHandle(C, D, ie);
    }),
    (oe.useInsertionEffect = function (C, D) {
      return ue.current.useInsertionEffect(C, D);
    }),
    (oe.useLayoutEffect = function (C, D) {
      return ue.current.useLayoutEffect(C, D);
    }),
    (oe.useMemo = function (C, D) {
      return ue.current.useMemo(C, D);
    }),
    (oe.useReducer = function (C, D, ie) {
      return ue.current.useReducer(C, D, ie);
    }),
    (oe.useRef = function (C) {
      return ue.current.useRef(C);
    }),
    (oe.useState = function (C) {
      return ue.current.useState(C);
    }),
    (oe.useSyncExternalStore = function (C, D, ie) {
      return ue.current.useSyncExternalStore(C, D, ie);
    }),
    (oe.useTransition = function () {
      return ue.current.useTransition();
    }),
    (oe.version = "18.3.1"),
    oe
  );
}
var Zf;
function Iu() {
  return Zf || ((Zf = 1), ($l.exports = Xg())), $l.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf;
function ey() {
  if (Xf) return Ti;
  Xf = 1;
  var r = Iu(),
    n = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(g, p, y) {
    var v,
      E = {},
      S = null,
      P = null;
    y !== void 0 && (S = "" + y),
      p.key !== void 0 && (S = "" + p.key),
      p.ref !== void 0 && (P = p.ref);
    for (v in p) o.call(p, v) && !c.hasOwnProperty(v) && (E[v] = p[v]);
    if (g && g.defaultProps)
      for (v in ((p = g.defaultProps), p)) E[v] === void 0 && (E[v] = p[v]);
    return {
      $$typeof: n,
      type: g,
      key: S,
      ref: P,
      props: E,
      _owner: l.current,
    };
  }
  return (Ti.Fragment = i), (Ti.jsx = f), (Ti.jsxs = f), Ti;
}
var eh;
function ty() {
  return eh || ((eh = 1), (Hl.exports = ey())), Hl.exports;
}
var h = ty(),
  b = Iu();
const ve = fp(b);
var uo = {},
  Vl = { exports: {} },
  ct = {},
  Wl = { exports: {} },
  ql = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var th;
function ny() {
  return (
    th ||
      ((th = 1),
      (function (r) {
        function n(H, Q) {
          var W = H.length;
          H.push(Q);
          e: for (; 0 < W; ) {
            var C = (W - 1) >>> 1,
              D = H[C];
            if (0 < l(D, Q)) (H[C] = Q), (H[W] = D), (W = C);
            else break e;
          }
        }
        function i(H) {
          return H.length === 0 ? null : H[0];
        }
        function o(H) {
          if (H.length === 0) return null;
          var Q = H[0],
            W = H.pop();
          if (W !== Q) {
            H[0] = W;
            e: for (var C = 0, D = H.length, ie = D >>> 1; C < ie; ) {
              var ae = 2 * (C + 1) - 1,
                ce = H[ae],
                de = ae + 1,
                we = H[de];
              if (0 > l(ce, W))
                de < D && 0 > l(we, ce)
                  ? ((H[C] = we), (H[de] = W), (C = de))
                  : ((H[C] = ce), (H[ae] = W), (C = ae));
              else if (de < D && 0 > l(we, W))
                (H[C] = we), (H[de] = W), (C = de);
              else break e;
            }
          }
          return Q;
        }
        function l(H, Q) {
          var W = H.sortIndex - Q.sortIndex;
          return W !== 0 ? W : H.id - Q.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          r.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            g = f.now();
          r.unstable_now = function () {
            return f.now() - g;
          };
        }
        var p = [],
          y = [],
          v = 1,
          E = null,
          S = 3,
          P = !1,
          k = !1,
          T = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          F = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function $(H) {
          for (var Q = i(y); Q !== null; ) {
            if (Q.callback === null) o(y);
            else if (Q.startTime <= H)
              o(y), (Q.sortIndex = Q.expirationTime), n(p, Q);
            else break;
            Q = i(y);
          }
        }
        function z(H) {
          if (((T = !1), $(H), !k))
            if (i(p) !== null) (k = !0), qe(X);
            else {
              var Q = i(y);
              Q !== null && ue(z, Q.startTime - H);
            }
        }
        function X(H, Q) {
          (k = !1), T && ((T = !1), O(pe), (pe = -1)), (P = !0);
          var W = S;
          try {
            for (
              $(Q), E = i(p);
              E !== null && (!(E.expirationTime > Q) || (H && !Ze()));

            ) {
              var C = E.callback;
              if (typeof C == "function") {
                (E.callback = null), (S = E.priorityLevel);
                var D = C(E.expirationTime <= Q);
                (Q = r.unstable_now()),
                  typeof D == "function"
                    ? (E.callback = D)
                    : E === i(p) && o(p),
                  $(Q);
              } else o(p);
              E = i(p);
            }
            if (E !== null) var ie = !0;
            else {
              var ae = i(y);
              ae !== null && ue(z, ae.startTime - Q), (ie = !1);
            }
            return ie;
          } finally {
            (E = null), (S = W), (P = !1);
          }
        }
        var re = !1,
          se = null,
          pe = -1,
          he = 5,
          ke = -1;
        function Ze() {
          return !(r.unstable_now() - ke < he);
        }
        function Xe() {
          if (se !== null) {
            var H = r.unstable_now();
            ke = H;
            var Q = !0;
            try {
              Q = se(!0, H);
            } finally {
              Q ? et() : ((re = !1), (se = null));
            }
          } else re = !1;
        }
        var et;
        if (typeof F == "function")
          et = function () {
            F(Xe);
          };
        else if (typeof MessageChannel < "u") {
          var it = new MessageChannel(),
            Se = it.port2;
          (it.port1.onmessage = Xe),
            (et = function () {
              Se.postMessage(null);
            });
        } else
          et = function () {
            R(Xe, 0);
          };
        function qe(H) {
          (se = H), re || ((re = !0), et());
        }
        function ue(H, Q) {
          pe = R(function () {
            H(r.unstable_now());
          }, Q);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            k || P || ((k = !0), qe(X));
          }),
          (r.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (he = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return i(p);
          }),
          (r.unstable_next = function (H) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = S;
            }
            var W = S;
            S = Q;
            try {
              return H();
            } finally {
              S = W;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (H, Q) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var W = S;
            S = H;
            try {
              return Q();
            } finally {
              S = W;
            }
          }),
          (r.unstable_scheduleCallback = function (H, Q, W) {
            var C = r.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? C + W : C))
                : (W = C),
              H)
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
              (D = W + D),
              (H = {
                id: v++,
                callback: Q,
                priorityLevel: H,
                startTime: W,
                expirationTime: D,
                sortIndex: -1,
              }),
              W > C
                ? ((H.sortIndex = W),
                  n(y, H),
                  i(p) === null &&
                    H === i(y) &&
                    (T ? (O(pe), (pe = -1)) : (T = !0), ue(z, W - C)))
                : ((H.sortIndex = D), n(p, H), k || P || ((k = !0), qe(X))),
              H
            );
          }),
          (r.unstable_shouldYield = Ze),
          (r.unstable_wrapCallback = function (H) {
            var Q = S;
            return function () {
              var W = S;
              S = Q;
              try {
                return H.apply(this, arguments);
              } finally {
                S = W;
              }
            };
          });
      })(ql)),
    ql
  );
}
var nh;
function ry() {
  return nh || ((nh = 1), (Wl.exports = ny())), Wl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rh;
function iy() {
  if (rh) return ct;
  rh = 1;
  var r = Iu(),
    n = ry();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        s = 1;
      s < arguments.length;
      s++
    )
      t += "&args[]=" + encodeURIComponent(arguments[s]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var o = new Set(),
    l = {};
  function c(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var g = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    p = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    E = {};
  function S(e) {
    return p.call(E, e)
      ? !0
      : p.call(v, e)
      ? !1
      : y.test(e)
      ? (E[e] = !0)
      : ((v[e] = !0), !1);
  }
  function P(e, t, s, a) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : s !== null
          ? !s.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function k(e, t, s, a) {
    if (t === null || typeof t > "u" || P(e, t, s, a)) return !0;
    if (a) return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function T(e, t, s, a, u, d, m) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = a),
      (this.attributeNamespace = u),
      (this.mustUseProperty = s),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = m);
  }
  var R = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      R[e] = new T(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new T(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      R[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      R[e] = new T(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        R[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      R[e] = new T(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      R[e] = new T(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      R[e] = new T(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      R[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var O = /[\-:]([a-z])/g;
  function F(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, F);
      R[t] = new T(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, F);
        R[t] = new T(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, F);
      R[t] = new T(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      R[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new T(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      R[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function $(e, t, s, a) {
    var u = R.hasOwnProperty(t) ? R[t] : null;
    (u !== null
      ? u.type !== 0
      : a ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (k(t, s, u, a) && (s = null),
      a || u === null
        ? S(t) &&
          (s === null ? e.removeAttribute(t) : e.setAttribute(t, "" + s))
        : u.mustUseProperty
        ? (e[u.propertyName] = s === null ? (u.type === 3 ? !1 : "") : s)
        : ((t = u.attributeName),
          (a = u.attributeNamespace),
          s === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (s = u === 3 || (u === 4 && s === !0) ? "" : "" + s),
              a ? e.setAttributeNS(a, t, s) : e.setAttribute(t, s))));
  }
  var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    X = Symbol.for("react.element"),
    re = Symbol.for("react.portal"),
    se = Symbol.for("react.fragment"),
    pe = Symbol.for("react.strict_mode"),
    he = Symbol.for("react.profiler"),
    ke = Symbol.for("react.provider"),
    Ze = Symbol.for("react.context"),
    Xe = Symbol.for("react.forward_ref"),
    et = Symbol.for("react.suspense"),
    it = Symbol.for("react.suspense_list"),
    Se = Symbol.for("react.memo"),
    qe = Symbol.for("react.lazy"),
    ue = Symbol.for("react.offscreen"),
    H = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (H && e[H]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    C;
  function D(e) {
    if (C === void 0)
      try {
        throw Error();
      } catch (s) {
        var t = s.stack.trim().match(/\n( *(at )?)/);
        C = (t && t[1]) || "";
      }
    return (
      `
` +
      C +
      e
    );
  }
  var ie = !1;
  function ae(e, t) {
    if (!e || ie) return "";
    ie = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (j) {
            var a = j;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (j) {
            a = j;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          a = j;
        }
        e();
      }
    } catch (j) {
      if (j && a && typeof j.stack == "string") {
        for (
          var u = j.stack.split(`
`),
            d = a.stack.split(`
`),
            m = u.length - 1,
            w = d.length - 1;
          1 <= m && 0 <= w && u[m] !== d[w];

        )
          w--;
        for (; 1 <= m && 0 <= w; m--, w--)
          if (u[m] !== d[w]) {
            if (m !== 1 || w !== 1)
              do
                if ((m--, w--, 0 > w || u[m] !== d[w])) {
                  var x =
                    `
` + u[m].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", e.displayName)),
                    x
                  );
                }
              while (1 <= m && 0 <= w);
            break;
          }
      }
    } finally {
      (ie = !1), (Error.prepareStackTrace = s);
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function ce(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ae(e.type, !1)), e;
      case 11:
        return (e = ae(e.type.render, !1)), e;
      case 1:
        return (e = ae(e.type, !0)), e;
      default:
        return "";
    }
  }
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case se:
        return "Fragment";
      case re:
        return "Portal";
      case he:
        return "Profiler";
      case pe:
        return "StrictMode";
      case et:
        return "Suspense";
      case it:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ze:
          return (e.displayName || "Context") + ".Consumer";
        case ke:
          return (e._context.displayName || "Context") + ".Provider";
        case Xe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Se:
          return (
            (t = e.displayName || null), t !== null ? t : de(e.type) || "Memo"
          );
        case qe:
          (t = e._payload), (e = e._init);
          try {
            return de(e(t));
          } catch {}
      }
    return null;
  }
  function we(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return de(t);
      case 8:
        return t === pe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function me(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ce(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ft(e) {
    var t = Ce(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var u = s.get,
        d = s.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (m) {
            (a = "" + m), d.call(this, m);
          },
        }),
        Object.defineProperty(e, t, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (m) {
            a = "" + m;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Xi(e) {
    e._valueTracker || (e._valueTracker = ft(e));
  }
  function nc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var s = t.getValue(),
      a = "";
    return (
      e && (a = Ce(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== s ? (t.setValue(e), !0) : !1
    );
  }
  function es(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Jo(e, t) {
    var s = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: s ?? e._wrapperState.initialChecked,
    });
  }
  function rc(e, t) {
    var s = t.defaultValue == null ? "" : t.defaultValue,
      a = t.checked != null ? t.checked : t.defaultChecked;
    (s = me(t.value != null ? t.value : s)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: s,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function ic(e, t) {
    (t = t.checked), t != null && $(e, "checked", t, !1);
  }
  function Qo(e, t) {
    ic(e, t);
    var s = me(t.value),
      a = t.type;
    if (s != null)
      a === "number"
        ? ((s === 0 && e.value === "") || e.value != s) && (e.value = "" + s)
        : e.value !== "" + s && (e.value = "" + s);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Yo(e, t.type, s)
      : t.hasOwnProperty("defaultValue") && Yo(e, t.type, me(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function sc(e, t, s) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (
        !(
          (a !== "submit" && a !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (s = e.name),
      s !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      s !== "" && (e.name = s);
  }
  function Yo(e, t, s) {
    (t !== "number" || es(e.ownerDocument) !== e) &&
      (s == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var Vr = Array.isArray;
  function or(e, t, s, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < s.length; u++) t["$" + s[u]] = !0;
      for (s = 0; s < e.length; s++)
        (u = t.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== u && (e[s].selected = u),
          u && a && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + me(s), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === s) {
          (e[u].selected = !0), a && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function oc(e, t) {
    var s = t.value;
    if (s == null) {
      if (((s = t.children), (t = t.defaultValue), s != null)) {
        if (t != null) throw Error(i(92));
        if (Vr(s)) {
          if (1 < s.length) throw Error(i(93));
          s = s[0];
        }
        t = s;
      }
      t == null && (t = ""), (s = t);
    }
    e._wrapperState = { initialValue: me(s) };
  }
  function ac(e, t) {
    var s = me(t.value),
      a = me(t.defaultValue);
    s != null &&
      ((s = "" + s),
      s !== e.value && (e.value = s),
      t.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
      a != null && (e.defaultValue = "" + a);
  }
  function lc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function uc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Xo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? uc(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ts,
    cc = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, s, a, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, s, a, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          ts = ts || document.createElement("div"),
            ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ts.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Wr(e, t) {
    if (t) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var qr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    r0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qr).forEach(function (e) {
    r0.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qr[t] = qr[e]);
    });
  });
  function dc(e, t, s) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : s || typeof t != "number" || t === 0 || (qr.hasOwnProperty(e) && qr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function fc(e, t) {
    e = e.style;
    for (var s in t)
      if (t.hasOwnProperty(s)) {
        var a = s.indexOf("--") === 0,
          u = dc(s, t[s], a);
        s === "float" && (s = "cssFloat"), a ? e.setProperty(s, u) : (e[s] = u);
      }
  }
  var i0 = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function ea(e, t) {
    if (t) {
      if (i0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function ta(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var na = null;
  function ra(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ia = null,
    ar = null,
    lr = null;
  function hc(e) {
    if ((e = pi(e))) {
      if (typeof ia != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = _s(t)), ia(e.stateNode, e.type, t));
    }
  }
  function pc(e) {
    ar ? (lr ? lr.push(e) : (lr = [e])) : (ar = e);
  }
  function mc() {
    if (ar) {
      var e = ar,
        t = lr;
      if (((lr = ar = null), hc(e), t)) for (e = 0; e < t.length; e++) hc(t[e]);
    }
  }
  function gc(e, t) {
    return e(t);
  }
  function yc() {}
  var sa = !1;
  function vc(e, t, s) {
    if (sa) return e(t, s);
    sa = !0;
    try {
      return gc(e, t, s);
    } finally {
      (sa = !1), (ar !== null || lr !== null) && (yc(), mc());
    }
  }
  function Kr(e, t) {
    var s = e.stateNode;
    if (s === null) return null;
    var a = _s(s);
    if (a === null) return null;
    s = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(i(231, t, typeof s));
    return s;
  }
  var oa = !1;
  if (g)
    try {
      var Gr = {};
      Object.defineProperty(Gr, "passive", {
        get: function () {
          oa = !0;
        },
      }),
        window.addEventListener("test", Gr, Gr),
        window.removeEventListener("test", Gr, Gr);
    } catch {
      oa = !1;
    }
  function s0(e, t, s, a, u, d, m, w, x) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(s, j);
    } catch (M) {
      this.onError(M);
    }
  }
  var Jr = !1,
    ns = null,
    rs = !1,
    aa = null,
    o0 = {
      onError: function (e) {
        (Jr = !0), (ns = e);
      },
    };
  function a0(e, t, s, a, u, d, m, w, x) {
    (Jr = !1), (ns = null), s0.apply(o0, arguments);
  }
  function l0(e, t, s, a, u, d, m, w, x) {
    if ((a0.apply(this, arguments), Jr)) {
      if (Jr) {
        var j = ns;
        (Jr = !1), (ns = null);
      } else throw Error(i(198));
      rs || ((rs = !0), (aa = j));
    }
  }
  function Un(e) {
    var t = e,
      s = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (s = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? s : null;
  }
  function wc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function xc(e) {
    if (Un(e) !== e) throw Error(i(188));
  }
  function u0(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Un(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var s = e, a = t; ; ) {
      var u = s.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((a = u.return), a !== null)) {
          s = a;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === s) return xc(u), e;
          if (d === a) return xc(u), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== a.return) (s = u), (a = d);
      else {
        for (var m = !1, w = u.child; w; ) {
          if (w === s) {
            (m = !0), (s = u), (a = d);
            break;
          }
          if (w === a) {
            (m = !0), (a = u), (s = d);
            break;
          }
          w = w.sibling;
        }
        if (!m) {
          for (w = d.child; w; ) {
            if (w === s) {
              (m = !0), (s = d), (a = u);
              break;
            }
            if (w === a) {
              (m = !0), (a = d), (s = u);
              break;
            }
            w = w.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (s.alternate !== a) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? e : t;
  }
  function kc(e) {
    return (e = u0(e)), e !== null ? Sc(e) : null;
  }
  function Sc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Sc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ec = n.unstable_scheduleCallback,
    _c = n.unstable_cancelCallback,
    c0 = n.unstable_shouldYield,
    d0 = n.unstable_requestPaint,
    Ae = n.unstable_now,
    f0 = n.unstable_getCurrentPriorityLevel,
    la = n.unstable_ImmediatePriority,
    Cc = n.unstable_UserBlockingPriority,
    is = n.unstable_NormalPriority,
    h0 = n.unstable_LowPriority,
    bc = n.unstable_IdlePriority,
    ss = null,
    Ft = null;
  function p0(e) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function")
      try {
        Ft.onCommitFiberRoot(ss, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ct = Math.clz32 ? Math.clz32 : y0,
    m0 = Math.log,
    g0 = Math.LN2;
  function y0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((m0(e) / g0) | 0)) | 0;
  }
  var os = 64,
    as = 4194304;
  function Qr(e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ls(e, t) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      d = e.pingedLanes,
      m = s & 268435455;
    if (m !== 0) {
      var w = m & ~u;
      w !== 0 ? (a = Qr(w)) : ((d &= m), d !== 0 && (a = Qr(d)));
    } else (m = s & ~u), m !== 0 ? (a = Qr(m)) : d !== 0 && (a = Qr(d));
    if (a === 0) return 0;
    if (
      t !== 0 &&
      t !== a &&
      !(t & u) &&
      ((u = a & -a), (d = t & -t), u >= d || (u === 16 && (d & 4194240) !== 0))
    )
      return t;
    if ((a & 4 && (a |= s & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= a; 0 < t; )
        (s = 31 - Ct(t)), (u = 1 << s), (a |= e[s]), (t &= ~u);
    return a;
  }
  function v0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
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
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function w0(e, t) {
    for (
      var s = e.suspendedLanes,
        a = e.pingedLanes,
        u = e.expirationTimes,
        d = e.pendingLanes;
      0 < d;

    ) {
      var m = 31 - Ct(d),
        w = 1 << m,
        x = u[m];
      x === -1
        ? (!(w & s) || w & a) && (u[m] = v0(w, t))
        : x <= t && (e.expiredLanes |= w),
        (d &= ~w);
    }
  }
  function ua(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Nc() {
    var e = os;
    return (os <<= 1), !(os & 4194240) && (os = 64), e;
  }
  function ca(e) {
    for (var t = [], s = 0; 31 > s; s++) t.push(e);
    return t;
  }
  function Yr(e, t, s) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ct(t)),
      (e[t] = s);
  }
  function x0(e, t) {
    var s = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var u = 31 - Ct(s),
        d = 1 << u;
      (t[u] = 0), (a[u] = -1), (e[u] = -1), (s &= ~d);
    }
  }
  function da(e, t) {
    var s = (e.entangledLanes |= t);
    for (e = e.entanglements; s; ) {
      var a = 31 - Ct(s),
        u = 1 << a;
      (u & t) | (e[a] & t) && (e[a] |= t), (s &= ~u);
    }
  }
  var ge = 0;
  function Rc(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Tc,
    fa,
    Pc,
    Ic,
    jc,
    ha = !1,
    us = [],
    dn = null,
    fn = null,
    hn = null,
    Zr = new Map(),
    Xr = new Map(),
    pn = [],
    k0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Ac(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        Zr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xr.delete(t.pointerId);
    }
  }
  function ei(e, t, s, a, u, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: s,
          eventSystemFlags: a,
          nativeEvent: d,
          targetContainers: [u],
        }),
        t !== null && ((t = pi(t)), t !== null && fa(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function S0(e, t, s, a, u) {
    switch (t) {
      case "focusin":
        return (dn = ei(dn, e, t, s, a, u)), !0;
      case "dragenter":
        return (fn = ei(fn, e, t, s, a, u)), !0;
      case "mouseover":
        return (hn = ei(hn, e, t, s, a, u)), !0;
      case "pointerover":
        var d = u.pointerId;
        return Zr.set(d, ei(Zr.get(d) || null, e, t, s, a, u)), !0;
      case "gotpointercapture":
        return (
          (d = u.pointerId), Xr.set(d, ei(Xr.get(d) || null, e, t, s, a, u)), !0
        );
    }
    return !1;
  }
  function Oc(e) {
    var t = Bn(e.target);
    if (t !== null) {
      var s = Un(t);
      if (s !== null) {
        if (((t = s.tag), t === 13)) {
          if (((t = wc(s)), t !== null)) {
            (e.blockedOn = t),
              jc(e.priority, function () {
                Pc(s);
              });
            return;
          }
        } else if (t === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function cs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var s = ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var a = new s.constructor(s.type, s);
        (na = a), s.target.dispatchEvent(a), (na = null);
      } else return (t = pi(s)), t !== null && fa(t), (e.blockedOn = s), !1;
      t.shift();
    }
    return !0;
  }
  function Lc(e, t, s) {
    cs(e) && s.delete(t);
  }
  function E0() {
    (ha = !1),
      dn !== null && cs(dn) && (dn = null),
      fn !== null && cs(fn) && (fn = null),
      hn !== null && cs(hn) && (hn = null),
      Zr.forEach(Lc),
      Xr.forEach(Lc);
  }
  function ti(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ha ||
        ((ha = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, E0)));
  }
  function ni(e) {
    function t(u) {
      return ti(u, e);
    }
    if (0 < us.length) {
      ti(us[0], e);
      for (var s = 1; s < us.length; s++) {
        var a = us[s];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      dn !== null && ti(dn, e),
        fn !== null && ti(fn, e),
        hn !== null && ti(hn, e),
        Zr.forEach(t),
        Xr.forEach(t),
        s = 0;
      s < pn.length;
      s++
    )
      (a = pn[s]), a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < pn.length && ((s = pn[0]), s.blockedOn === null); )
      Oc(s), s.blockedOn === null && pn.shift();
  }
  var ur = z.ReactCurrentBatchConfig,
    ds = !0;
  function _0(e, t, s, a) {
    var u = ge,
      d = ur.transition;
    ur.transition = null;
    try {
      (ge = 1), pa(e, t, s, a);
    } finally {
      (ge = u), (ur.transition = d);
    }
  }
  function C0(e, t, s, a) {
    var u = ge,
      d = ur.transition;
    ur.transition = null;
    try {
      (ge = 4), pa(e, t, s, a);
    } finally {
      (ge = u), (ur.transition = d);
    }
  }
  function pa(e, t, s, a) {
    if (ds) {
      var u = ma(e, t, s, a);
      if (u === null) ja(e, t, a, fs, s), Ac(e, a);
      else if (S0(u, e, t, s, a)) a.stopPropagation();
      else if ((Ac(e, a), t & 4 && -1 < k0.indexOf(e))) {
        for (; u !== null; ) {
          var d = pi(u);
          if (
            (d !== null && Tc(d),
            (d = ma(e, t, s, a)),
            d === null && ja(e, t, a, fs, s),
            d === u)
          )
            break;
          u = d;
        }
        u !== null && a.stopPropagation();
      } else ja(e, t, a, null, s);
    }
  }
  var fs = null;
  function ma(e, t, s, a) {
    if (((fs = null), (e = ra(a)), (e = Bn(e)), e !== null))
      if (((t = Un(e)), t === null)) e = null;
      else if (((s = t.tag), s === 13)) {
        if (((e = wc(t)), e !== null)) return e;
        e = null;
      } else if (s === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (fs = e), null;
  }
  function Dc(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (f0()) {
          case la:
            return 1;
          case Cc:
            return 4;
          case is:
          case h0:
            return 16;
          case bc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mn = null,
    ga = null,
    hs = null;
  function Mc() {
    if (hs) return hs;
    var e,
      t = ga,
      s = t.length,
      a,
      u = "value" in mn ? mn.value : mn.textContent,
      d = u.length;
    for (e = 0; e < s && t[e] === u[e]; e++);
    var m = s - e;
    for (a = 1; a <= m && t[s - a] === u[d - a]; a++);
    return (hs = u.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ps(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ms() {
    return !0;
  }
  function Fc() {
    return !1;
  }
  function ht(e) {
    function t(s, a, u, d, m) {
      (this._reactName = s),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = d),
        (this.target = m),
        (this.currentTarget = null);
      for (var w in e)
        e.hasOwnProperty(w) && ((s = e[w]), (this[w] = s ? s(d) : d[w]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? ms
          : Fc),
        (this.isPropagationStopped = Fc),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = ms));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = ms));
        },
        persist: function () {},
        isPersistent: ms,
      }),
      t
    );
  }
  var cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ya = ht(cr),
    ri = W({}, cr, { view: 0, detail: 0 }),
    b0 = ht(ri),
    va,
    wa,
    ii,
    gs = W({}, ri, {
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
      getModifierState: ka,
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
        return "movementX" in e
          ? e.movementX
          : (e !== ii &&
              (ii && e.type === "mousemove"
                ? ((va = e.screenX - ii.screenX), (wa = e.screenY - ii.screenY))
                : (wa = va = 0),
              (ii = e)),
            va);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : wa;
      },
    }),
    Uc = ht(gs),
    N0 = W({}, gs, { dataTransfer: 0 }),
    R0 = ht(N0),
    T0 = W({}, ri, { relatedTarget: 0 }),
    xa = ht(T0),
    P0 = W({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    I0 = ht(P0),
    j0 = W({}, cr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    A0 = ht(j0),
    O0 = W({}, cr, { data: 0 }),
    Bc = ht(O0),
    L0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    D0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    M0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function F0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = M0[e])
      ? !!t[e]
      : !1;
  }
  function ka() {
    return F0;
  }
  var U0 = W({}, ri, {
      key: function (e) {
        if (e.key) {
          var t = L0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ps(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? D0[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ka,
      charCode: function (e) {
        return e.type === "keypress" ? ps(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ps(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    B0 = ht(U0),
    z0 = W({}, gs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    zc = ht(z0),
    H0 = W({}, ri, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ka,
    }),
    $0 = ht(H0),
    V0 = W({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    W0 = ht(V0),
    q0 = W({}, gs, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    K0 = ht(q0),
    G0 = [9, 13, 27, 32],
    Sa = g && "CompositionEvent" in window,
    si = null;
  g && "documentMode" in document && (si = document.documentMode);
  var J0 = g && "TextEvent" in window && !si,
    Hc = g && (!Sa || (si && 8 < si && 11 >= si)),
    $c = " ",
    Vc = !1;
  function Wc(e, t) {
    switch (e) {
      case "keyup":
        return G0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var dr = !1;
  function Q0(e, t) {
    switch (e) {
      case "compositionend":
        return qc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Vc = !0), $c);
      case "textInput":
        return (e = t.data), e === $c && Vc ? null : e;
      default:
        return null;
    }
  }
  function Y0(e, t) {
    if (dr)
      return e === "compositionend" || (!Sa && Wc(e, t))
        ? ((e = Mc()), (hs = ga = mn = null), (dr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Z0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
    week: !0,
  };
  function Kc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Z0[e.type] : t === "textarea";
  }
  function Gc(e, t, s, a) {
    pc(a),
      (t = ks(t, "onChange")),
      0 < t.length &&
        ((s = new ya("onChange", "change", null, s, a)),
        e.push({ event: s, listeners: t }));
  }
  var oi = null,
    ai = null;
  function X0(e) {
    fd(e, 0);
  }
  function ys(e) {
    var t = gr(e);
    if (nc(t)) return e;
  }
  function eg(e, t) {
    if (e === "change") return t;
  }
  var Jc = !1;
  if (g) {
    var Ea;
    if (g) {
      var _a = "oninput" in document;
      if (!_a) {
        var Qc = document.createElement("div");
        Qc.setAttribute("oninput", "return;"),
          (_a = typeof Qc.oninput == "function");
      }
      Ea = _a;
    } else Ea = !1;
    Jc = Ea && (!document.documentMode || 9 < document.documentMode);
  }
  function Yc() {
    oi && (oi.detachEvent("onpropertychange", Zc), (ai = oi = null));
  }
  function Zc(e) {
    if (e.propertyName === "value" && ys(ai)) {
      var t = [];
      Gc(t, ai, e, ra(e)), vc(X0, t);
    }
  }
  function tg(e, t, s) {
    e === "focusin"
      ? (Yc(), (oi = t), (ai = s), oi.attachEvent("onpropertychange", Zc))
      : e === "focusout" && Yc();
  }
  function ng(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ys(ai);
  }
  function rg(e, t) {
    if (e === "click") return ys(t);
  }
  function ig(e, t) {
    if (e === "input" || e === "change") return ys(t);
  }
  function sg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var bt = typeof Object.is == "function" ? Object.is : sg;
  function li(e, t) {
    if (bt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var s = Object.keys(e),
      a = Object.keys(t);
    if (s.length !== a.length) return !1;
    for (a = 0; a < s.length; a++) {
      var u = s[a];
      if (!p.call(t, u) || !bt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Xc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ed(e, t) {
    var s = Xc(e);
    e = 0;
    for (var a; s; ) {
      if (s.nodeType === 3) {
        if (((a = e + s.textContent.length), e <= t && a >= t))
          return { node: s, offset: t - e };
        e = a;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Xc(s);
    }
  }
  function td(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? td(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function nd() {
    for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof t.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = t.contentWindow;
      else break;
      t = es(e.document);
    }
    return t;
  }
  function Ca(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function og(e) {
    var t = nd(),
      s = e.focusedElem,
      a = e.selectionRange;
    if (
      t !== s &&
      s &&
      s.ownerDocument &&
      td(s.ownerDocument.documentElement, s)
    ) {
      if (a !== null && Ca(s)) {
        if (
          ((t = a.start),
          (e = a.end),
          e === void 0 && (e = t),
          "selectionStart" in s)
        )
          (s.selectionStart = t),
            (s.selectionEnd = Math.min(e, s.value.length));
        else if (
          ((e = ((t = s.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = s.textContent.length,
            d = Math.min(a.start, u);
          (a = a.end === void 0 ? d : Math.min(a.end, u)),
            !e.extend && d > a && ((u = a), (a = d), (d = u)),
            (u = ed(s, d));
          var m = ed(s, a);
          u &&
            m &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== m.node ||
              e.focusOffset !== m.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            d > a
              ? (e.addRange(t), e.extend(m.node, m.offset))
              : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = s; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < t.length; s++)
        (e = t[s]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var ag = g && "documentMode" in document && 11 >= document.documentMode,
    fr = null,
    ba = null,
    ui = null,
    Na = !1;
  function rd(e, t, s) {
    var a =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Na ||
      fr == null ||
      fr !== es(a) ||
      ((a = fr),
      "selectionStart" in a && Ca(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ui && li(ui, a)) ||
        ((ui = a),
        (a = ks(ba, "onSelect")),
        0 < a.length &&
          ((t = new ya("onSelect", "select", null, t, s)),
          e.push({ event: t, listeners: a }),
          (t.target = fr))));
  }
  function vs(e, t) {
    var s = {};
    return (
      (s[e.toLowerCase()] = t.toLowerCase()),
      (s["Webkit" + e] = "webkit" + t),
      (s["Moz" + e] = "moz" + t),
      s
    );
  }
  var hr = {
      animationend: vs("Animation", "AnimationEnd"),
      animationiteration: vs("Animation", "AnimationIteration"),
      animationstart: vs("Animation", "AnimationStart"),
      transitionend: vs("Transition", "TransitionEnd"),
    },
    Ra = {},
    id = {};
  g &&
    ((id = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hr.animationend.animation,
      delete hr.animationiteration.animation,
      delete hr.animationstart.animation),
    "TransitionEvent" in window || delete hr.transitionend.transition);
  function ws(e) {
    if (Ra[e]) return Ra[e];
    if (!hr[e]) return e;
    var t = hr[e],
      s;
    for (s in t) if (t.hasOwnProperty(s) && s in id) return (Ra[e] = t[s]);
    return e;
  }
  var sd = ws("animationend"),
    od = ws("animationiteration"),
    ad = ws("animationstart"),
    ld = ws("transitionend"),
    ud = new Map(),
    cd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function gn(e, t) {
    ud.set(e, t), c(t, [e]);
  }
  for (var Ta = 0; Ta < cd.length; Ta++) {
    var Pa = cd[Ta],
      lg = Pa.toLowerCase(),
      ug = Pa[0].toUpperCase() + Pa.slice(1);
    gn(lg, "on" + ug);
  }
  gn(sd, "onAnimationEnd"),
    gn(od, "onAnimationIteration"),
    gn(ad, "onAnimationStart"),
    gn("dblclick", "onDoubleClick"),
    gn("focusin", "onFocus"),
    gn("focusout", "onBlur"),
    gn(ld, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ci =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    cg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ci)
    );
  function dd(e, t, s) {
    var a = e.type || "unknown-event";
    (e.currentTarget = s), l0(a, t, void 0, e), (e.currentTarget = null);
  }
  function fd(e, t) {
    t = (t & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var a = e[s],
        u = a.event;
      a = a.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var m = a.length - 1; 0 <= m; m--) {
            var w = a[m],
              x = w.instance,
              j = w.currentTarget;
            if (((w = w.listener), x !== d && u.isPropagationStopped()))
              break e;
            dd(u, w, j), (d = x);
          }
        else
          for (m = 0; m < a.length; m++) {
            if (
              ((w = a[m]),
              (x = w.instance),
              (j = w.currentTarget),
              (w = w.listener),
              x !== d && u.isPropagationStopped())
            )
              break e;
            dd(u, w, j), (d = x);
          }
      }
    }
    if (rs) throw ((e = aa), (rs = !1), (aa = null), e);
  }
  function Ee(e, t) {
    var s = t[Fa];
    s === void 0 && (s = t[Fa] = new Set());
    var a = e + "__bubble";
    s.has(a) || (hd(t, e, 2, !1), s.add(a));
  }
  function Ia(e, t, s) {
    var a = 0;
    t && (a |= 4), hd(s, e, a, t);
  }
  var xs = "_reactListening" + Math.random().toString(36).slice(2);
  function di(e) {
    if (!e[xs]) {
      (e[xs] = !0),
        o.forEach(function (s) {
          s !== "selectionchange" && (cg.has(s) || Ia(s, !1, e), Ia(s, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xs] || ((t[xs] = !0), Ia("selectionchange", !1, t));
    }
  }
  function hd(e, t, s, a) {
    switch (Dc(t)) {
      case 1:
        var u = _0;
        break;
      case 4:
        u = C0;
        break;
      default:
        u = pa;
    }
    (s = u.bind(null, t, s, e)),
      (u = void 0),
      !oa ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? e.addEventListener(t, s, { capture: !0, passive: u })
          : e.addEventListener(t, s, !0)
        : u !== void 0
        ? e.addEventListener(t, s, { passive: u })
        : e.addEventListener(t, s, !1);
  }
  function ja(e, t, s, a, u) {
    var d = a;
    if (!(t & 1) && !(t & 2) && a !== null)
      e: for (;;) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var w = a.stateNode.containerInfo;
          if (w === u || (w.nodeType === 8 && w.parentNode === u)) break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var x = m.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = m.stateNode.containerInfo),
                x === u || (x.nodeType === 8 && x.parentNode === u))
              )
                return;
              m = m.return;
            }
          for (; w !== null; ) {
            if (((m = Bn(w)), m === null)) return;
            if (((x = m.tag), x === 5 || x === 6)) {
              a = d = m;
              continue e;
            }
            w = w.parentNode;
          }
        }
        a = a.return;
      }
    vc(function () {
      var j = d,
        M = ra(s),
        U = [];
      e: {
        var L = ud.get(e);
        if (L !== void 0) {
          var V = ya,
            K = e;
          switch (e) {
            case "keypress":
              if (ps(s) === 0) break e;
            case "keydown":
            case "keyup":
              V = B0;
              break;
            case "focusin":
              (K = "focus"), (V = xa);
              break;
            case "focusout":
              (K = "blur"), (V = xa);
              break;
            case "beforeblur":
            case "afterblur":
              V = xa;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Uc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = R0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = $0;
              break;
            case sd:
            case od:
            case ad:
              V = I0;
              break;
            case ld:
              V = W0;
              break;
            case "scroll":
              V = b0;
              break;
            case "wheel":
              V = K0;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = A0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = zc;
          }
          var G = (t & 4) !== 0,
            Oe = !G && e === "scroll",
            N = G ? (L !== null ? L + "Capture" : null) : L;
          G = [];
          for (var _ = j, I; _ !== null; ) {
            I = _;
            var B = I.stateNode;
            if (
              (I.tag === 5 &&
                B !== null &&
                ((I = B),
                N !== null &&
                  ((B = Kr(_, N)), B != null && G.push(fi(_, B, I)))),
              Oe)
            )
              break;
            _ = _.return;
          }
          0 < G.length &&
            ((L = new V(L, K, null, s, M)), U.push({ event: L, listeners: G }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (V = e === "mouseout" || e === "pointerout"),
            L &&
              s !== na &&
              (K = s.relatedTarget || s.fromElement) &&
              (Bn(K) || K[Qt]))
          )
            break e;
          if (
            (V || L) &&
            ((L =
              M.window === M
                ? M
                : (L = M.ownerDocument)
                ? L.defaultView || L.parentWindow
                : window),
            V
              ? ((K = s.relatedTarget || s.toElement),
                (V = j),
                (K = K ? Bn(K) : null),
                K !== null &&
                  ((Oe = Un(K)), K !== Oe || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((V = null), (K = j)),
            V !== K)
          ) {
            if (
              ((G = Uc),
              (B = "onMouseLeave"),
              (N = "onMouseEnter"),
              (_ = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((G = zc),
                (B = "onPointerLeave"),
                (N = "onPointerEnter"),
                (_ = "pointer")),
              (Oe = V == null ? L : gr(V)),
              (I = K == null ? L : gr(K)),
              (L = new G(B, _ + "leave", V, s, M)),
              (L.target = Oe),
              (L.relatedTarget = I),
              (B = null),
              Bn(M) === j &&
                ((G = new G(N, _ + "enter", K, s, M)),
                (G.target = I),
                (G.relatedTarget = Oe),
                (B = G)),
              (Oe = B),
              V && K)
            )
              t: {
                for (G = V, N = K, _ = 0, I = G; I; I = pr(I)) _++;
                for (I = 0, B = N; B; B = pr(B)) I++;
                for (; 0 < _ - I; ) (G = pr(G)), _--;
                for (; 0 < I - _; ) (N = pr(N)), I--;
                for (; _--; ) {
                  if (G === N || (N !== null && G === N.alternate)) break t;
                  (G = pr(G)), (N = pr(N));
                }
                G = null;
              }
            else G = null;
            V !== null && pd(U, L, V, G, !1),
              K !== null && Oe !== null && pd(U, Oe, K, G, !0);
          }
        }
        e: {
          if (
            ((L = j ? gr(j) : window),
            (V = L.nodeName && L.nodeName.toLowerCase()),
            V === "select" || (V === "input" && L.type === "file"))
          )
            var J = eg;
          else if (Kc(L))
            if (Jc) J = ig;
            else {
              J = ng;
              var Y = tg;
            }
          else
            (V = L.nodeName) &&
              V.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (J = rg);
          if (J && (J = J(e, j))) {
            Gc(U, J, s, M);
            break e;
          }
          Y && Y(e, L, j),
            e === "focusout" &&
              (Y = L._wrapperState) &&
              Y.controlled &&
              L.type === "number" &&
              Yo(L, "number", L.value);
        }
        switch (((Y = j ? gr(j) : window), e)) {
          case "focusin":
            (Kc(Y) || Y.contentEditable === "true") &&
              ((fr = Y), (ba = j), (ui = null));
            break;
          case "focusout":
            ui = ba = fr = null;
            break;
          case "mousedown":
            Na = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Na = !1), rd(U, s, M);
            break;
          case "selectionchange":
            if (ag) break;
          case "keydown":
          case "keyup":
            rd(U, s, M);
        }
        var Z;
        if (Sa)
          e: {
            switch (e) {
              case "compositionstart":
                var ee = "onCompositionStart";
                break e;
              case "compositionend":
                ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ee = "onCompositionUpdate";
                break e;
            }
            ee = void 0;
          }
        else
          dr
            ? Wc(e, s) && (ee = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (ee = "onCompositionStart");
        ee &&
          (Hc &&
            s.locale !== "ko" &&
            (dr || ee !== "onCompositionStart"
              ? ee === "onCompositionEnd" && dr && (Z = Mc())
              : ((mn = M),
                (ga = "value" in mn ? mn.value : mn.textContent),
                (dr = !0))),
          (Y = ks(j, ee)),
          0 < Y.length &&
            ((ee = new Bc(ee, e, null, s, M)),
            U.push({ event: ee, listeners: Y }),
            Z ? (ee.data = Z) : ((Z = qc(s)), Z !== null && (ee.data = Z)))),
          (Z = J0 ? Q0(e, s) : Y0(e, s)) &&
            ((j = ks(j, "onBeforeInput")),
            0 < j.length &&
              ((M = new Bc("onBeforeInput", "beforeinput", null, s, M)),
              U.push({ event: M, listeners: j }),
              (M.data = Z)));
      }
      fd(U, t);
    });
  }
  function fi(e, t, s) {
    return { instance: e, listener: t, currentTarget: s };
  }
  function ks(e, t) {
    for (var s = t + "Capture", a = []; e !== null; ) {
      var u = e,
        d = u.stateNode;
      u.tag === 5 &&
        d !== null &&
        ((u = d),
        (d = Kr(e, s)),
        d != null && a.unshift(fi(e, d, u)),
        (d = Kr(e, t)),
        d != null && a.push(fi(e, d, u))),
        (e = e.return);
    }
    return a;
  }
  function pr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function pd(e, t, s, a, u) {
    for (var d = t._reactName, m = []; s !== null && s !== a; ) {
      var w = s,
        x = w.alternate,
        j = w.stateNode;
      if (x !== null && x === a) break;
      w.tag === 5 &&
        j !== null &&
        ((w = j),
        u
          ? ((x = Kr(s, d)), x != null && m.unshift(fi(s, x, w)))
          : u || ((x = Kr(s, d)), x != null && m.push(fi(s, x, w)))),
        (s = s.return);
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var dg = /\r\n?/g,
    fg = /\u0000|\uFFFD/g;
  function md(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        dg,
        `
`
      )
      .replace(fg, "");
  }
  function Ss(e, t, s) {
    if (((t = md(t)), md(e) !== t && s)) throw Error(i(425));
  }
  function Es() {}
  var Aa = null,
    Oa = null;
  function La(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Da = typeof setTimeout == "function" ? setTimeout : void 0,
    hg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    gd = typeof Promise == "function" ? Promise : void 0,
    pg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof gd < "u"
        ? function (e) {
            return gd.resolve(null).then(e).catch(mg);
          }
        : Da;
  function mg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ma(e, t) {
    var s = t,
      a = 0;
    do {
      var u = s.nextSibling;
      if ((e.removeChild(s), u && u.nodeType === 8))
        if (((s = u.data), s === "/$")) {
          if (a === 0) {
            e.removeChild(u), ni(t);
            return;
          }
          a--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || a++;
      s = u;
    } while (s);
    ni(t);
  }
  function yn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function yd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (t === 0) return e;
          t--;
        } else s === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var mr = Math.random().toString(36).slice(2),
    Ut = "__reactFiber$" + mr,
    hi = "__reactProps$" + mr,
    Qt = "__reactContainer$" + mr,
    Fa = "__reactEvents$" + mr,
    gg = "__reactListeners$" + mr,
    yg = "__reactHandles$" + mr;
  function Bn(e) {
    var t = e[Ut];
    if (t) return t;
    for (var s = e.parentNode; s; ) {
      if ((t = s[Qt] || s[Ut])) {
        if (
          ((s = t.alternate),
          t.child !== null || (s !== null && s.child !== null))
        )
          for (e = yd(e); e !== null; ) {
            if ((s = e[Ut])) return s;
            e = yd(e);
          }
        return t;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function pi(e) {
    return (
      (e = e[Ut] || e[Qt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function gr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function _s(e) {
    return e[hi] || null;
  }
  var Ua = [],
    yr = -1;
  function vn(e) {
    return { current: e };
  }
  function _e(e) {
    0 > yr || ((e.current = Ua[yr]), (Ua[yr] = null), yr--);
  }
  function xe(e, t) {
    yr++, (Ua[yr] = e.current), (e.current = t);
  }
  var wn = {},
    Ke = vn(wn),
    st = vn(!1),
    zn = wn;
  function vr(e, t) {
    var s = e.type.contextTypes;
    if (!s) return wn;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
      return a.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      d;
    for (d in s) u[d] = t[d];
    return (
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function ot(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Cs() {
    _e(st), _e(Ke);
  }
  function vd(e, t, s) {
    if (Ke.current !== wn) throw Error(i(168));
    xe(Ke, t), xe(st, s);
  }
  function wd(e, t, s) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), typeof a.getChildContext != "function"))
      return s;
    a = a.getChildContext();
    for (var u in a) if (!(u in t)) throw Error(i(108, we(e) || "Unknown", u));
    return W({}, s, a);
  }
  function bs(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        wn),
      (zn = Ke.current),
      xe(Ke, e),
      xe(st, st.current),
      !0
    );
  }
  function xd(e, t, s) {
    var a = e.stateNode;
    if (!a) throw Error(i(169));
    s
      ? ((e = wd(e, t, zn)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        _e(st),
        _e(Ke),
        xe(Ke, e))
      : _e(st),
      xe(st, s);
  }
  var Yt = null,
    Ns = !1,
    Ba = !1;
  function kd(e) {
    Yt === null ? (Yt = [e]) : Yt.push(e);
  }
  function vg(e) {
    (Ns = !0), kd(e);
  }
  function xn() {
    if (!Ba && Yt !== null) {
      Ba = !0;
      var e = 0,
        t = ge;
      try {
        var s = Yt;
        for (ge = 1; e < s.length; e++) {
          var a = s[e];
          do a = a(!0);
          while (a !== null);
        }
        (Yt = null), (Ns = !1);
      } catch (u) {
        throw (Yt !== null && (Yt = Yt.slice(e + 1)), Ec(la, xn), u);
      } finally {
        (ge = t), (Ba = !1);
      }
    }
    return null;
  }
  var wr = [],
    xr = 0,
    Rs = null,
    Ts = 0,
    wt = [],
    xt = 0,
    Hn = null,
    Zt = 1,
    Xt = "";
  function $n(e, t) {
    (wr[xr++] = Ts), (wr[xr++] = Rs), (Rs = e), (Ts = t);
  }
  function Sd(e, t, s) {
    (wt[xt++] = Zt), (wt[xt++] = Xt), (wt[xt++] = Hn), (Hn = e);
    var a = Zt;
    e = Xt;
    var u = 32 - Ct(a) - 1;
    (a &= ~(1 << u)), (s += 1);
    var d = 32 - Ct(t) + u;
    if (30 < d) {
      var m = u - (u % 5);
      (d = (a & ((1 << m) - 1)).toString(32)),
        (a >>= m),
        (u -= m),
        (Zt = (1 << (32 - Ct(t) + u)) | (s << u) | a),
        (Xt = d + e);
    } else (Zt = (1 << d) | (s << u) | a), (Xt = e);
  }
  function za(e) {
    e.return !== null && ($n(e, 1), Sd(e, 1, 0));
  }
  function Ha(e) {
    for (; e === Rs; )
      (Rs = wr[--xr]), (wr[xr] = null), (Ts = wr[--xr]), (wr[xr] = null);
    for (; e === Hn; )
      (Hn = wt[--xt]),
        (wt[xt] = null),
        (Xt = wt[--xt]),
        (wt[xt] = null),
        (Zt = wt[--xt]),
        (wt[xt] = null);
  }
  var pt = null,
    mt = null,
    be = !1,
    Nt = null;
  function Ed(e, t) {
    var s = _t(5, null, null, 0);
    (s.elementType = "DELETED"),
      (s.stateNode = t),
      (s.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [s]), (e.flags |= 16)) : t.push(s);
  }
  function _d(e, t) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return (
          (t =
            t.nodeType !== 1 || s.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (pt = e), (mt = yn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (mt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((s = Hn !== null ? { id: Zt, overflow: Xt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: s,
                retryLane: 1073741824,
              }),
              (s = _t(18, null, null, 0)),
              (s.stateNode = t),
              (s.return = e),
              (e.child = s),
              (pt = e),
              (mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function $a(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Va(e) {
    if (be) {
      var t = mt;
      if (t) {
        var s = t;
        if (!_d(e, t)) {
          if ($a(e)) throw Error(i(418));
          t = yn(s.nextSibling);
          var a = pt;
          t && _d(e, t)
            ? Ed(a, s)
            : ((e.flags = (e.flags & -4097) | 2), (be = !1), (pt = e));
        }
      } else {
        if ($a(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (be = !1), (pt = e);
      }
    }
  }
  function Cd(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    pt = e;
  }
  function Ps(e) {
    if (e !== pt) return !1;
    if (!be) return Cd(e), (be = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !La(e.type, e.memoizedProps))),
      t && (t = mt))
    ) {
      if ($a(e)) throw (bd(), Error(i(418)));
      for (; t; ) Ed(e, t), (t = yn(t.nextSibling));
    }
    if ((Cd(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (t === 0) {
                mt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        mt = null;
      }
    } else mt = pt ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function bd() {
    for (var e = mt; e; ) e = yn(e.nextSibling);
  }
  function kr() {
    (mt = pt = null), (be = !1);
  }
  function Wa(e) {
    Nt === null ? (Nt = [e]) : Nt.push(e);
  }
  var wg = z.ReactCurrentBatchConfig;
  function mi(e, t, s) {
    if (
      ((e = s.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (s._owner) {
        if (((s = s._owner), s)) {
          if (s.tag !== 1) throw Error(i(309));
          var a = s.stateNode;
        }
        if (!a) throw Error(i(147, e));
        var u = a,
          d = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === d
          ? t.ref
          : ((t = function (m) {
              var w = u.refs;
              m === null ? delete w[d] : (w[d] = m);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!s._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Is(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Nd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Rd(e) {
    function t(N, _) {
      if (e) {
        var I = N.deletions;
        I === null ? ((N.deletions = [_]), (N.flags |= 16)) : I.push(_);
      }
    }
    function s(N, _) {
      if (!e) return null;
      for (; _ !== null; ) t(N, _), (_ = _.sibling);
      return null;
    }
    function a(N, _) {
      for (N = new Map(); _ !== null; )
        _.key !== null ? N.set(_.key, _) : N.set(_.index, _), (_ = _.sibling);
      return N;
    }
    function u(N, _) {
      return (N = Rn(N, _)), (N.index = 0), (N.sibling = null), N;
    }
    function d(N, _, I) {
      return (
        (N.index = I),
        e
          ? ((I = N.alternate),
            I !== null
              ? ((I = I.index), I < _ ? ((N.flags |= 2), _) : I)
              : ((N.flags |= 2), _))
          : ((N.flags |= 1048576), _)
      );
    }
    function m(N) {
      return e && N.alternate === null && (N.flags |= 2), N;
    }
    function w(N, _, I, B) {
      return _ === null || _.tag !== 6
        ? ((_ = Dl(I, N.mode, B)), (_.return = N), _)
        : ((_ = u(_, I)), (_.return = N), _);
    }
    function x(N, _, I, B) {
      var J = I.type;
      return J === se
        ? M(N, _, I.props.children, B, I.key)
        : _ !== null &&
          (_.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === qe &&
              Nd(J) === _.type))
        ? ((B = u(_, I.props)), (B.ref = mi(N, _, I)), (B.return = N), B)
        : ((B = to(I.type, I.key, I.props, null, N.mode, B)),
          (B.ref = mi(N, _, I)),
          (B.return = N),
          B);
    }
    function j(N, _, I, B) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== I.containerInfo ||
        _.stateNode.implementation !== I.implementation
        ? ((_ = Ml(I, N.mode, B)), (_.return = N), _)
        : ((_ = u(_, I.children || [])), (_.return = N), _);
    }
    function M(N, _, I, B, J) {
      return _ === null || _.tag !== 7
        ? ((_ = Yn(I, N.mode, B, J)), (_.return = N), _)
        : ((_ = u(_, I)), (_.return = N), _);
    }
    function U(N, _, I) {
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return (_ = Dl("" + _, N.mode, I)), (_.return = N), _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case X:
            return (
              (I = to(_.type, _.key, _.props, null, N.mode, I)),
              (I.ref = mi(N, null, _)),
              (I.return = N),
              I
            );
          case re:
            return (_ = Ml(_, N.mode, I)), (_.return = N), _;
          case qe:
            var B = _._init;
            return U(N, B(_._payload), I);
        }
        if (Vr(_) || Q(_))
          return (_ = Yn(_, N.mode, I, null)), (_.return = N), _;
        Is(N, _);
      }
      return null;
    }
    function L(N, _, I, B) {
      var J = _ !== null ? _.key : null;
      if ((typeof I == "string" && I !== "") || typeof I == "number")
        return J !== null ? null : w(N, _, "" + I, B);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case X:
            return I.key === J ? x(N, _, I, B) : null;
          case re:
            return I.key === J ? j(N, _, I, B) : null;
          case qe:
            return (J = I._init), L(N, _, J(I._payload), B);
        }
        if (Vr(I) || Q(I)) return J !== null ? null : M(N, _, I, B, null);
        Is(N, I);
      }
      return null;
    }
    function V(N, _, I, B, J) {
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return (N = N.get(I) || null), w(_, N, "" + B, J);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case X:
            return (
              (N = N.get(B.key === null ? I : B.key) || null), x(_, N, B, J)
            );
          case re:
            return (
              (N = N.get(B.key === null ? I : B.key) || null), j(_, N, B, J)
            );
          case qe:
            var Y = B._init;
            return V(N, _, I, Y(B._payload), J);
        }
        if (Vr(B) || Q(B)) return (N = N.get(I) || null), M(_, N, B, J, null);
        Is(_, B);
      }
      return null;
    }
    function K(N, _, I, B) {
      for (
        var J = null, Y = null, Z = _, ee = (_ = 0), He = null;
        Z !== null && ee < I.length;
        ee++
      ) {
        Z.index > ee ? ((He = Z), (Z = null)) : (He = Z.sibling);
        var fe = L(N, Z, I[ee], B);
        if (fe === null) {
          Z === null && (Z = He);
          break;
        }
        e && Z && fe.alternate === null && t(N, Z),
          (_ = d(fe, _, ee)),
          Y === null ? (J = fe) : (Y.sibling = fe),
          (Y = fe),
          (Z = He);
      }
      if (ee === I.length) return s(N, Z), be && $n(N, ee), J;
      if (Z === null) {
        for (; ee < I.length; ee++)
          (Z = U(N, I[ee], B)),
            Z !== null &&
              ((_ = d(Z, _, ee)),
              Y === null ? (J = Z) : (Y.sibling = Z),
              (Y = Z));
        return be && $n(N, ee), J;
      }
      for (Z = a(N, Z); ee < I.length; ee++)
        (He = V(Z, N, ee, I[ee], B)),
          He !== null &&
            (e &&
              He.alternate !== null &&
              Z.delete(He.key === null ? ee : He.key),
            (_ = d(He, _, ee)),
            Y === null ? (J = He) : (Y.sibling = He),
            (Y = He));
      return (
        e &&
          Z.forEach(function (Tn) {
            return t(N, Tn);
          }),
        be && $n(N, ee),
        J
      );
    }
    function G(N, _, I, B) {
      var J = Q(I);
      if (typeof J != "function") throw Error(i(150));
      if (((I = J.call(I)), I == null)) throw Error(i(151));
      for (
        var Y = (J = null), Z = _, ee = (_ = 0), He = null, fe = I.next();
        Z !== null && !fe.done;
        ee++, fe = I.next()
      ) {
        Z.index > ee ? ((He = Z), (Z = null)) : (He = Z.sibling);
        var Tn = L(N, Z, fe.value, B);
        if (Tn === null) {
          Z === null && (Z = He);
          break;
        }
        e && Z && Tn.alternate === null && t(N, Z),
          (_ = d(Tn, _, ee)),
          Y === null ? (J = Tn) : (Y.sibling = Tn),
          (Y = Tn),
          (Z = He);
      }
      if (fe.done) return s(N, Z), be && $n(N, ee), J;
      if (Z === null) {
        for (; !fe.done; ee++, fe = I.next())
          (fe = U(N, fe.value, B)),
            fe !== null &&
              ((_ = d(fe, _, ee)),
              Y === null ? (J = fe) : (Y.sibling = fe),
              (Y = fe));
        return be && $n(N, ee), J;
      }
      for (Z = a(N, Z); !fe.done; ee++, fe = I.next())
        (fe = V(Z, N, ee, fe.value, B)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              Z.delete(fe.key === null ? ee : fe.key),
            (_ = d(fe, _, ee)),
            Y === null ? (J = fe) : (Y.sibling = fe),
            (Y = fe));
      return (
        e &&
          Z.forEach(function (Zg) {
            return t(N, Zg);
          }),
        be && $n(N, ee),
        J
      );
    }
    function Oe(N, _, I, B) {
      if (
        (typeof I == "object" &&
          I !== null &&
          I.type === se &&
          I.key === null &&
          (I = I.props.children),
        typeof I == "object" && I !== null)
      ) {
        switch (I.$$typeof) {
          case X:
            e: {
              for (var J = I.key, Y = _; Y !== null; ) {
                if (Y.key === J) {
                  if (((J = I.type), J === se)) {
                    if (Y.tag === 7) {
                      s(N, Y.sibling),
                        (_ = u(Y, I.props.children)),
                        (_.return = N),
                        (N = _);
                      break e;
                    }
                  } else if (
                    Y.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === qe &&
                      Nd(J) === Y.type)
                  ) {
                    s(N, Y.sibling),
                      (_ = u(Y, I.props)),
                      (_.ref = mi(N, Y, I)),
                      (_.return = N),
                      (N = _);
                    break e;
                  }
                  s(N, Y);
                  break;
                } else t(N, Y);
                Y = Y.sibling;
              }
              I.type === se
                ? ((_ = Yn(I.props.children, N.mode, B, I.key)),
                  (_.return = N),
                  (N = _))
                : ((B = to(I.type, I.key, I.props, null, N.mode, B)),
                  (B.ref = mi(N, _, I)),
                  (B.return = N),
                  (N = B));
            }
            return m(N);
          case re:
            e: {
              for (Y = I.key; _ !== null; ) {
                if (_.key === Y)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === I.containerInfo &&
                    _.stateNode.implementation === I.implementation
                  ) {
                    s(N, _.sibling),
                      (_ = u(_, I.children || [])),
                      (_.return = N),
                      (N = _);
                    break e;
                  } else {
                    s(N, _);
                    break;
                  }
                else t(N, _);
                _ = _.sibling;
              }
              (_ = Ml(I, N.mode, B)), (_.return = N), (N = _);
            }
            return m(N);
          case qe:
            return (Y = I._init), Oe(N, _, Y(I._payload), B);
        }
        if (Vr(I)) return K(N, _, I, B);
        if (Q(I)) return G(N, _, I, B);
        Is(N, I);
      }
      return (typeof I == "string" && I !== "") || typeof I == "number"
        ? ((I = "" + I),
          _ !== null && _.tag === 6
            ? (s(N, _.sibling), (_ = u(_, I)), (_.return = N), (N = _))
            : (s(N, _), (_ = Dl(I, N.mode, B)), (_.return = N), (N = _)),
          m(N))
        : s(N, _);
    }
    return Oe;
  }
  var Sr = Rd(!0),
    Td = Rd(!1),
    js = vn(null),
    As = null,
    Er = null,
    qa = null;
  function Ka() {
    qa = Er = As = null;
  }
  function Ga(e) {
    var t = js.current;
    _e(js), (e._currentValue = t);
  }
  function Ja(e, t, s) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function _r(e, t) {
    (As = e),
      (qa = Er = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (at = !0), (e.firstContext = null));
  }
  function kt(e) {
    var t = e._currentValue;
    if (qa !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Er === null)) {
        if (As === null) throw Error(i(308));
        (Er = e), (As.dependencies = { lanes: 0, firstContext: e });
      } else Er = Er.next = e;
    return t;
  }
  var Vn = null;
  function Qa(e) {
    Vn === null ? (Vn = [e]) : Vn.push(e);
  }
  function Pd(e, t, s, a) {
    var u = t.interleaved;
    return (
      u === null ? ((s.next = s), Qa(t)) : ((s.next = u.next), (u.next = s)),
      (t.interleaved = s),
      en(e, a)
    );
  }
  function en(e, t) {
    e.lanes |= t;
    var s = e.alternate;
    for (s !== null && (s.lanes |= t), s = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (s = e.alternate),
        s !== null && (s.childLanes |= t),
        (s = e),
        (e = e.return);
    return s.tag === 3 ? s.stateNode : null;
  }
  var kn = !1;
  function Ya(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Id(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function tn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Sn(e, t, s) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), le & 2)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        en(e, s)
      );
    }
    return (
      (u = a.interleaved),
      u === null ? ((t.next = t), Qa(a)) : ((t.next = u.next), (u.next = t)),
      (a.interleaved = t),
      en(e, s)
    );
  }
  function Os(e, t, s) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (s & 4194240) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (s |= a), (t.lanes = s), da(e, s);
    }
  }
  function jd(e, t) {
    var s = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), s === a)) {
      var u = null,
        d = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var m = {
            eventTime: s.eventTime,
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          };
          d === null ? (u = d = m) : (d = d.next = m), (s = s.next);
        } while (s !== null);
        d === null ? (u = d = t) : (d = d.next = t);
      } else u = d = t;
      (s = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: a.shared,
        effects: a.effects,
      }),
        (e.updateQueue = s);
      return;
    }
    (e = s.lastBaseUpdate),
      e === null ? (s.firstBaseUpdate = t) : (e.next = t),
      (s.lastBaseUpdate = t);
  }
  function Ls(e, t, s, a) {
    var u = e.updateQueue;
    kn = !1;
    var d = u.firstBaseUpdate,
      m = u.lastBaseUpdate,
      w = u.shared.pending;
    if (w !== null) {
      u.shared.pending = null;
      var x = w,
        j = x.next;
      (x.next = null), m === null ? (d = j) : (m.next = j), (m = x);
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (w = M.lastBaseUpdate),
        w !== m &&
          (w === null ? (M.firstBaseUpdate = j) : (w.next = j),
          (M.lastBaseUpdate = x)));
    }
    if (d !== null) {
      var U = u.baseState;
      (m = 0), (M = j = x = null), (w = d);
      do {
        var L = w.lane,
          V = w.eventTime;
        if ((a & L) === L) {
          M !== null &&
            (M = M.next =
              {
                eventTime: V,
                lane: 0,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null,
              });
          e: {
            var K = e,
              G = w;
            switch (((L = t), (V = s), G.tag)) {
              case 1:
                if (((K = G.payload), typeof K == "function")) {
                  U = K.call(V, U, L);
                  break e;
                }
                U = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = G.payload),
                  (L = typeof K == "function" ? K.call(V, U, L) : K),
                  L == null)
                )
                  break e;
                U = W({}, U, L);
                break e;
              case 2:
                kn = !0;
            }
          }
          w.callback !== null &&
            w.lane !== 0 &&
            ((e.flags |= 64),
            (L = u.effects),
            L === null ? (u.effects = [w]) : L.push(w));
        } else
          (V = {
            eventTime: V,
            lane: L,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            M === null ? ((j = M = V), (x = U)) : (M = M.next = V),
            (m |= L);
        if (((w = w.next), w === null)) {
          if (((w = u.shared.pending), w === null)) break;
          (L = w),
            (w = L.next),
            (L.next = null),
            (u.lastBaseUpdate = L),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (M === null && (x = U),
        (u.baseState = x),
        (u.firstBaseUpdate = j),
        (u.lastBaseUpdate = M),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (m |= u.lane), (u = u.next);
        while (u !== t);
      } else d === null && (u.shared.lanes = 0);
      (Kn |= m), (e.lanes = m), (e.memoizedState = U);
    }
  }
  function Ad(e, t, s) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var a = e[t],
          u = a.callback;
        if (u !== null) {
          if (((a.callback = null), (a = s), typeof u != "function"))
            throw Error(i(191, u));
          u.call(a);
        }
      }
  }
  var gi = {},
    Bt = vn(gi),
    yi = vn(gi),
    vi = vn(gi);
  function Wn(e) {
    if (e === gi) throw Error(i(174));
    return e;
  }
  function Za(e, t) {
    switch ((xe(vi, t), xe(yi, e), xe(Bt, gi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Xo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Xo(t, e));
    }
    _e(Bt), xe(Bt, t);
  }
  function Cr() {
    _e(Bt), _e(yi), _e(vi);
  }
  function Od(e) {
    Wn(vi.current);
    var t = Wn(Bt.current),
      s = Xo(t, e.type);
    t !== s && (xe(yi, e), xe(Bt, s));
  }
  function Xa(e) {
    yi.current === e && (_e(Bt), _e(yi));
  }
  var Re = vn(0);
  function Ds(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var s = t.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
        )
          return t;
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
  var el = [];
  function tl() {
    for (var e = 0; e < el.length; e++)
      el[e]._workInProgressVersionPrimary = null;
    el.length = 0;
  }
  var Ms = z.ReactCurrentDispatcher,
    nl = z.ReactCurrentBatchConfig,
    qn = 0,
    Te = null,
    Fe = null,
    Be = null,
    Fs = !1,
    wi = !1,
    xi = 0,
    xg = 0;
  function Ge() {
    throw Error(i(321));
  }
  function rl(e, t) {
    if (t === null) return !1;
    for (var s = 0; s < t.length && s < e.length; s++)
      if (!bt(e[s], t[s])) return !1;
    return !0;
  }
  function il(e, t, s, a, u, d) {
    if (
      ((qn = d),
      (Te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ms.current = e === null || e.memoizedState === null ? _g : Cg),
      (e = s(a, u)),
      wi)
    ) {
      d = 0;
      do {
        if (((wi = !1), (xi = 0), 25 <= d)) throw Error(i(301));
        (d += 1),
          (Be = Fe = null),
          (t.updateQueue = null),
          (Ms.current = bg),
          (e = s(a, u));
      } while (wi);
    }
    if (
      ((Ms.current = zs),
      (t = Fe !== null && Fe.next !== null),
      (qn = 0),
      (Be = Fe = Te = null),
      (Fs = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function sl() {
    var e = xi !== 0;
    return (xi = 0), e;
  }
  function zt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Be === null ? (Te.memoizedState = Be = e) : (Be = Be.next = e), Be;
  }
  function St() {
    if (Fe === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = Be === null ? Te.memoizedState : Be.next;
    if (t !== null) (Be = t), (Fe = e);
    else {
      if (e === null) throw Error(i(310));
      (Fe = e),
        (e = {
          memoizedState: Fe.memoizedState,
          baseState: Fe.baseState,
          baseQueue: Fe.baseQueue,
          queue: Fe.queue,
          next: null,
        }),
        Be === null ? (Te.memoizedState = Be = e) : (Be = Be.next = e);
    }
    return Be;
  }
  function ki(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ol(e) {
    var t = St(),
      s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var a = Fe,
      u = a.baseQueue,
      d = s.pending;
    if (d !== null) {
      if (u !== null) {
        var m = u.next;
        (u.next = d.next), (d.next = m);
      }
      (a.baseQueue = u = d), (s.pending = null);
    }
    if (u !== null) {
      (d = u.next), (a = a.baseState);
      var w = (m = null),
        x = null,
        j = d;
      do {
        var M = j.lane;
        if ((qn & M) === M)
          x !== null &&
            (x = x.next =
              {
                lane: 0,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null,
              }),
            (a = j.hasEagerState ? j.eagerState : e(a, j.action));
        else {
          var U = {
            lane: M,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          x === null ? ((w = x = U), (m = a)) : (x = x.next = U),
            (Te.lanes |= M),
            (Kn |= M);
        }
        j = j.next;
      } while (j !== null && j !== d);
      x === null ? (m = a) : (x.next = w),
        bt(a, t.memoizedState) || (at = !0),
        (t.memoizedState = a),
        (t.baseState = m),
        (t.baseQueue = x),
        (s.lastRenderedState = a);
    }
    if (((e = s.interleaved), e !== null)) {
      u = e;
      do (d = u.lane), (Te.lanes |= d), (Kn |= d), (u = u.next);
      while (u !== e);
    } else u === null && (s.lanes = 0);
    return [t.memoizedState, s.dispatch];
  }
  function al(e) {
    var t = St(),
      s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var a = s.dispatch,
      u = s.pending,
      d = t.memoizedState;
    if (u !== null) {
      s.pending = null;
      var m = (u = u.next);
      do (d = e(d, m.action)), (m = m.next);
      while (m !== u);
      bt(d, t.memoizedState) || (at = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (s.lastRenderedState = d);
    }
    return [d, a];
  }
  function Ld() {}
  function Dd(e, t) {
    var s = Te,
      a = St(),
      u = t(),
      d = !bt(a.memoizedState, u);
    if (
      (d && ((a.memoizedState = u), (at = !0)),
      (a = a.queue),
      ll(Ud.bind(null, s, a, e), [e]),
      a.getSnapshot !== t || d || (Be !== null && Be.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Si(9, Fd.bind(null, s, a, u, t), void 0, null),
        ze === null)
      )
        throw Error(i(349));
      qn & 30 || Md(s, t, u);
    }
    return u;
  }
  function Md(e, t, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: s }),
      (t = Te.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Te.updateQueue = t),
          (t.stores = [e]))
        : ((s = t.stores), s === null ? (t.stores = [e]) : s.push(e));
  }
  function Fd(e, t, s, a) {
    (t.value = s), (t.getSnapshot = a), Bd(t) && zd(e);
  }
  function Ud(e, t, s) {
    return s(function () {
      Bd(t) && zd(e);
    });
  }
  function Bd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var s = t();
      return !bt(e, s);
    } catch {
      return !0;
    }
  }
  function zd(e) {
    var t = en(e, 1);
    t !== null && It(t, e, 1, -1);
  }
  function Hd(e) {
    var t = zt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ki,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Eg.bind(null, Te, e)),
      [t.memoizedState, e]
    );
  }
  function Si(e, t, s, a) {
    return (
      (e = { tag: e, create: t, destroy: s, deps: a, next: null }),
      (t = Te.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Te.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((s = t.lastEffect),
          s === null
            ? (t.lastEffect = e.next = e)
            : ((a = s.next), (s.next = e), (e.next = a), (t.lastEffect = e))),
      e
    );
  }
  function $d() {
    return St().memoizedState;
  }
  function Us(e, t, s, a) {
    var u = zt();
    (Te.flags |= e),
      (u.memoizedState = Si(1 | t, s, void 0, a === void 0 ? null : a));
  }
  function Bs(e, t, s, a) {
    var u = St();
    a = a === void 0 ? null : a;
    var d = void 0;
    if (Fe !== null) {
      var m = Fe.memoizedState;
      if (((d = m.destroy), a !== null && rl(a, m.deps))) {
        u.memoizedState = Si(t, s, d, a);
        return;
      }
    }
    (Te.flags |= e), (u.memoizedState = Si(1 | t, s, d, a));
  }
  function Vd(e, t) {
    return Us(8390656, 8, e, t);
  }
  function ll(e, t) {
    return Bs(2048, 8, e, t);
  }
  function Wd(e, t) {
    return Bs(4, 2, e, t);
  }
  function qd(e, t) {
    return Bs(4, 4, e, t);
  }
  function Kd(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Gd(e, t, s) {
    return (
      (s = s != null ? s.concat([e]) : null), Bs(4, 4, Kd.bind(null, t, e), s)
    );
  }
  function ul() {}
  function Jd(e, t) {
    var s = St();
    t = t === void 0 ? null : t;
    var a = s.memoizedState;
    return a !== null && t !== null && rl(t, a[1])
      ? a[0]
      : ((s.memoizedState = [e, t]), e);
  }
  function Qd(e, t) {
    var s = St();
    t = t === void 0 ? null : t;
    var a = s.memoizedState;
    return a !== null && t !== null && rl(t, a[1])
      ? a[0]
      : ((e = e()), (s.memoizedState = [e, t]), e);
  }
  function Yd(e, t, s) {
    return qn & 21
      ? (bt(s, t) ||
          ((s = Nc()), (Te.lanes |= s), (Kn |= s), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = s));
  }
  function kg(e, t) {
    var s = ge;
    (ge = s !== 0 && 4 > s ? s : 4), e(!0);
    var a = nl.transition;
    nl.transition = {};
    try {
      e(!1), t();
    } finally {
      (ge = s), (nl.transition = a);
    }
  }
  function Zd() {
    return St().memoizedState;
  }
  function Sg(e, t, s) {
    var a = bn(e);
    if (
      ((s = {
        lane: a,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Xd(e))
    )
      ef(t, s);
    else if (((s = Pd(e, t, s, a)), s !== null)) {
      var u = nt();
      It(s, e, a, u), tf(s, t, a);
    }
  }
  function Eg(e, t, s) {
    var a = bn(e),
      u = {
        lane: a,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Xd(e)) ef(t, u);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var m = t.lastRenderedState,
            w = d(m, s);
          if (((u.hasEagerState = !0), (u.eagerState = w), bt(w, m))) {
            var x = t.interleaved;
            x === null
              ? ((u.next = u), Qa(t))
              : ((u.next = x.next), (x.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (s = Pd(e, t, u, a)),
        s !== null && ((u = nt()), It(s, e, a, u), tf(s, t, a));
    }
  }
  function Xd(e) {
    var t = e.alternate;
    return e === Te || (t !== null && t === Te);
  }
  function ef(e, t) {
    wi = Fs = !0;
    var s = e.pending;
    s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (e.pending = t);
  }
  function tf(e, t, s) {
    if (s & 4194240) {
      var a = t.lanes;
      (a &= e.pendingLanes), (s |= a), (t.lanes = s), da(e, s);
    }
  }
  var zs = {
      readContext: kt,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useInsertionEffect: Ge,
      useLayoutEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useMutableSource: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      unstable_isNewReconciler: !1,
    },
    _g = {
      readContext: kt,
      useCallback: function (e, t) {
        return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: kt,
      useEffect: Vd,
      useImperativeHandle: function (e, t, s) {
        return (
          (s = s != null ? s.concat([e]) : null),
          Us(4194308, 4, Kd.bind(null, t, e), s)
        );
      },
      useLayoutEffect: function (e, t) {
        return Us(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Us(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var s = zt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (s.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, s) {
        var a = zt();
        return (
          (t = s !== void 0 ? s(t) : t),
          (a.memoizedState = a.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (a.queue = e),
          (e = e.dispatch = Sg.bind(null, Te, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = zt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Hd,
      useDebugValue: ul,
      useDeferredValue: function (e) {
        return (zt().memoizedState = e);
      },
      useTransition: function () {
        var e = Hd(!1),
          t = e[0];
        return (e = kg.bind(null, e[1])), (zt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, s) {
        var a = Te,
          u = zt();
        if (be) {
          if (s === void 0) throw Error(i(407));
          s = s();
        } else {
          if (((s = t()), ze === null)) throw Error(i(349));
          qn & 30 || Md(a, t, s);
        }
        u.memoizedState = s;
        var d = { value: s, getSnapshot: t };
        return (
          (u.queue = d),
          Vd(Ud.bind(null, a, d, e), [e]),
          (a.flags |= 2048),
          Si(9, Fd.bind(null, a, d, s, t), void 0, null),
          s
        );
      },
      useId: function () {
        var e = zt(),
          t = ze.identifierPrefix;
        if (be) {
          var s = Xt,
            a = Zt;
          (s = (a & ~(1 << (32 - Ct(a) - 1))).toString(32) + s),
            (t = ":" + t + "R" + s),
            (s = xi++),
            0 < s && (t += "H" + s.toString(32)),
            (t += ":");
        } else (s = xg++), (t = ":" + t + "r" + s.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Cg = {
      readContext: kt,
      useCallback: Jd,
      useContext: kt,
      useEffect: ll,
      useImperativeHandle: Gd,
      useInsertionEffect: Wd,
      useLayoutEffect: qd,
      useMemo: Qd,
      useReducer: ol,
      useRef: $d,
      useState: function () {
        return ol(ki);
      },
      useDebugValue: ul,
      useDeferredValue: function (e) {
        var t = St();
        return Yd(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = ol(ki)[0],
          t = St().memoizedState;
        return [e, t];
      },
      useMutableSource: Ld,
      useSyncExternalStore: Dd,
      useId: Zd,
      unstable_isNewReconciler: !1,
    },
    bg = {
      readContext: kt,
      useCallback: Jd,
      useContext: kt,
      useEffect: ll,
      useImperativeHandle: Gd,
      useInsertionEffect: Wd,
      useLayoutEffect: qd,
      useMemo: Qd,
      useReducer: al,
      useRef: $d,
      useState: function () {
        return al(ki);
      },
      useDebugValue: ul,
      useDeferredValue: function (e) {
        var t = St();
        return Fe === null ? (t.memoizedState = e) : Yd(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = al(ki)[0],
          t = St().memoizedState;
        return [e, t];
      },
      useMutableSource: Ld,
      useSyncExternalStore: Dd,
      useId: Zd,
      unstable_isNewReconciler: !1,
    };
  function Rt(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var s in e) t[s] === void 0 && (t[s] = e[s]);
      return t;
    }
    return t;
  }
  function cl(e, t, s, a) {
    (t = e.memoizedState),
      (s = s(a, t)),
      (s = s == null ? t : W({}, t, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Hs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Un(e) === e : !1;
    },
    enqueueSetState: function (e, t, s) {
      e = e._reactInternals;
      var a = nt(),
        u = bn(e),
        d = tn(a, u);
      (d.payload = t),
        s != null && (d.callback = s),
        (t = Sn(e, d, u)),
        t !== null && (It(t, e, u, a), Os(t, e, u));
    },
    enqueueReplaceState: function (e, t, s) {
      e = e._reactInternals;
      var a = nt(),
        u = bn(e),
        d = tn(a, u);
      (d.tag = 1),
        (d.payload = t),
        s != null && (d.callback = s),
        (t = Sn(e, d, u)),
        t !== null && (It(t, e, u, a), Os(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var s = nt(),
        a = bn(e),
        u = tn(s, a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Sn(e, u, a)),
        t !== null && (It(t, e, a, s), Os(t, e, a));
    },
  };
  function nf(e, t, s, a, u, d, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, d, m)
        : t.prototype && t.prototype.isPureReactComponent
        ? !li(s, a) || !li(u, d)
        : !0
    );
  }
  function rf(e, t, s) {
    var a = !1,
      u = wn,
      d = t.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = kt(d))
        : ((u = ot(t) ? zn : Ke.current),
          (a = t.contextTypes),
          (d = (a = a != null) ? vr(e, u) : wn)),
      (t = new t(s, d)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Hs),
      (e.stateNode = t),
      (t._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function sf(e, t, s, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(s, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(s, a),
      t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
  }
  function dl(e, t, s, a) {
    var u = e.stateNode;
    (u.props = s), (u.state = e.memoizedState), (u.refs = {}), Ya(e);
    var d = t.contextType;
    typeof d == "object" && d !== null
      ? (u.context = kt(d))
      : ((d = ot(t) ? zn : Ke.current), (u.context = vr(e, d))),
      (u.state = e.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == "function" && (cl(e, t, d, s), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && Hs.enqueueReplaceState(u, u.state, null),
        Ls(e, s, u, a),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function br(e, t) {
    try {
      var s = "",
        a = t;
      do (s += ce(a)), (a = a.return);
      while (a);
      var u = s;
    } catch (d) {
      u =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function fl(e, t, s) {
    return { value: e, source: null, stack: s ?? null, digest: t ?? null };
  }
  function hl(e, t) {
    try {
      console.error(t.value);
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  var Ng = typeof WeakMap == "function" ? WeakMap : Map;
  function of(e, t, s) {
    (s = tn(-1, s)), (s.tag = 3), (s.payload = { element: null });
    var a = t.value;
    return (
      (s.callback = function () {
        Js || ((Js = !0), (Rl = a)), hl(e, t);
      }),
      s
    );
  }
  function af(e, t, s) {
    (s = tn(-1, s)), (s.tag = 3);
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = t.value;
      (s.payload = function () {
        return a(u);
      }),
        (s.callback = function () {
          hl(e, t);
        });
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (s.callback = function () {
          hl(e, t),
            typeof a != "function" &&
              (_n === null ? (_n = new Set([this])) : _n.add(this));
          var m = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: m !== null ? m : "",
          });
        }),
      s
    );
  }
  function lf(e, t, s) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Ng();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(s) || (u.add(s), (e = zg.bind(null, e, t, s)), t.then(e, e));
  }
  function uf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function cf(e, t, s, a, u) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = u), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (s.flags |= 131072),
            (s.flags &= -52805),
            s.tag === 1 &&
              (s.alternate === null
                ? (s.tag = 17)
                : ((t = tn(-1, 1)), (t.tag = 2), Sn(s, t, 1))),
            (s.lanes |= 1)),
        e);
  }
  var Rg = z.ReactCurrentOwner,
    at = !1;
  function tt(e, t, s, a) {
    t.child = e === null ? Td(t, null, s, a) : Sr(t, e.child, s, a);
  }
  function df(e, t, s, a, u) {
    s = s.render;
    var d = t.ref;
    return (
      _r(t, u),
      (a = il(e, t, s, a, d, u)),
      (s = sl()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          nn(e, t, u))
        : (be && s && za(t), (t.flags |= 1), tt(e, t, a, u), t.child)
    );
  }
  function ff(e, t, s, a, u) {
    if (e === null) {
      var d = s.type;
      return typeof d == "function" &&
        !Ll(d) &&
        d.defaultProps === void 0 &&
        s.compare === null &&
        s.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), hf(e, t, d, a, u))
        : ((e = to(s.type, null, a, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), !(e.lanes & u))) {
      var m = d.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : li), s(m, a) && e.ref === t.ref)
      )
        return nn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Rn(d, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function hf(e, t, s, a, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (li(d, a) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = a = d), (e.lanes & u) !== 0))
          e.flags & 131072 && (at = !0);
        else return (t.lanes = e.lanes), nn(e, t, u);
    }
    return pl(e, t, s, a, u);
  }
  function pf(e, t, s) {
    var a = t.pendingProps,
      u = a.children,
      d = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          xe(Rr, gt),
          (gt |= s);
      else {
        if (!(s & 1073741824))
          return (
            (e = d !== null ? d.baseLanes | s : s),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            xe(Rr, gt),
            (gt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = d !== null ? d.baseLanes : s),
          xe(Rr, gt),
          (gt |= a);
      }
    else
      d !== null ? ((a = d.baseLanes | s), (t.memoizedState = null)) : (a = s),
        xe(Rr, gt),
        (gt |= a);
    return tt(e, t, u, s), t.child;
  }
  function mf(e, t) {
    var s = t.ref;
    ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function pl(e, t, s, a, u) {
    var d = ot(s) ? zn : Ke.current;
    return (
      (d = vr(t, d)),
      _r(t, u),
      (s = il(e, t, s, a, d, u)),
      (a = sl()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          nn(e, t, u))
        : (be && a && za(t), (t.flags |= 1), tt(e, t, s, u), t.child)
    );
  }
  function gf(e, t, s, a, u) {
    if (ot(s)) {
      var d = !0;
      bs(t);
    } else d = !1;
    if ((_r(t, u), t.stateNode === null))
      Vs(e, t), rf(t, s, a), dl(t, s, a, u), (a = !0);
    else if (e === null) {
      var m = t.stateNode,
        w = t.memoizedProps;
      m.props = w;
      var x = m.context,
        j = s.contextType;
      typeof j == "object" && j !== null
        ? (j = kt(j))
        : ((j = ot(s) ? zn : Ke.current), (j = vr(t, j)));
      var M = s.getDerivedStateFromProps,
        U =
          typeof M == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function";
      U ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((w !== a || x !== j) && sf(t, m, a, j)),
        (kn = !1);
      var L = t.memoizedState;
      (m.state = L),
        Ls(t, a, m, u),
        (x = t.memoizedState),
        w !== a || L !== x || st.current || kn
          ? (typeof M == "function" && (cl(t, s, M, a), (x = t.memoizedState)),
            (w = kn || nf(t, s, w, a, L, x, j))
              ? (U ||
                  (typeof m.UNSAFE_componentWillMount != "function" &&
                    typeof m.componentWillMount != "function") ||
                  (typeof m.componentWillMount == "function" &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == "function" &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof m.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = x)),
            (m.props = a),
            (m.state = x),
            (m.context = j),
            (a = w))
          : (typeof m.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (m = t.stateNode),
        Id(e, t),
        (w = t.memoizedProps),
        (j = t.type === t.elementType ? w : Rt(t.type, w)),
        (m.props = j),
        (U = t.pendingProps),
        (L = m.context),
        (x = s.contextType),
        typeof x == "object" && x !== null
          ? (x = kt(x))
          : ((x = ot(s) ? zn : Ke.current), (x = vr(t, x)));
      var V = s.getDerivedStateFromProps;
      (M =
        typeof V == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function") ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((w !== U || L !== x) && sf(t, m, a, x)),
        (kn = !1),
        (L = t.memoizedState),
        (m.state = L),
        Ls(t, a, m, u);
      var K = t.memoizedState;
      w !== U || L !== K || st.current || kn
        ? (typeof V == "function" && (cl(t, s, V, a), (K = t.memoizedState)),
          (j = kn || nf(t, s, j, a, L, K, x) || !1)
            ? (M ||
                (typeof m.UNSAFE_componentWillUpdate != "function" &&
                  typeof m.componentWillUpdate != "function") ||
                (typeof m.componentWillUpdate == "function" &&
                  m.componentWillUpdate(a, K, x),
                typeof m.UNSAFE_componentWillUpdate == "function" &&
                  m.UNSAFE_componentWillUpdate(a, K, x)),
              typeof m.componentDidUpdate == "function" && (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof m.componentDidUpdate != "function" ||
                (w === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != "function" ||
                (w === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = K)),
          (m.props = a),
          (m.state = K),
          (m.context = x),
          (a = j))
        : (typeof m.componentDidUpdate != "function" ||
            (w === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != "function" ||
            (w === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return ml(e, t, s, a, d, u);
  }
  function ml(e, t, s, a, u, d) {
    mf(e, t);
    var m = (t.flags & 128) !== 0;
    if (!a && !m) return u && xd(t, s, !1), nn(e, t, d);
    (a = t.stateNode), (Rg.current = t);
    var w =
      m && typeof s.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (t.flags |= 1),
      e !== null && m
        ? ((t.child = Sr(t, e.child, null, d)), (t.child = Sr(t, null, w, d)))
        : tt(e, t, w, d),
      (t.memoizedState = a.state),
      u && xd(t, s, !0),
      t.child
    );
  }
  function yf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? vd(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && vd(e, t.context, !1),
      Za(e, t.containerInfo);
  }
  function vf(e, t, s, a, u) {
    return kr(), Wa(u), (t.flags |= 256), tt(e, t, s, a), t.child;
  }
  var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function yl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wf(e, t, s) {
    var a = t.pendingProps,
      u = Re.current,
      d = !1,
      m = (t.flags & 128) !== 0,
      w;
    if (
      ((w = m) ||
        (w = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      w
        ? ((d = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      xe(Re, u & 1),
      e === null)
    )
      return (
        Va(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((m = a.children),
            (e = a.fallback),
            d
              ? ((a = t.mode),
                (d = t.child),
                (m = { mode: "hidden", children: m }),
                !(a & 1) && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = m))
                  : (d = no(m, a, 0, null)),
                (e = Yn(e, a, s, null)),
                (d.return = t),
                (e.return = t),
                (d.sibling = e),
                (t.child = d),
                (t.child.memoizedState = yl(s)),
                (t.memoizedState = gl),
                e)
              : vl(t, m))
      );
    if (((u = e.memoizedState), u !== null && ((w = u.dehydrated), w !== null)))
      return Tg(e, t, m, a, w, u, s);
    if (d) {
      (d = a.fallback), (m = t.mode), (u = e.child), (w = u.sibling);
      var x = { mode: "hidden", children: a.children };
      return (
        !(m & 1) && t.child !== u
          ? ((a = t.child),
            (a.childLanes = 0),
            (a.pendingProps = x),
            (t.deletions = null))
          : ((a = Rn(u, x)), (a.subtreeFlags = u.subtreeFlags & 14680064)),
        w !== null ? (d = Rn(w, d)) : ((d = Yn(d, m, s, null)), (d.flags |= 2)),
        (d.return = t),
        (a.return = t),
        (a.sibling = d),
        (t.child = a),
        (a = d),
        (d = t.child),
        (m = e.child.memoizedState),
        (m =
          m === null
            ? yl(s)
            : {
                baseLanes: m.baseLanes | s,
                cachePool: null,
                transitions: m.transitions,
              }),
        (d.memoizedState = m),
        (d.childLanes = e.childLanes & ~s),
        (t.memoizedState = gl),
        a
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (a = Rn(d, { mode: "visible", children: a.children })),
      !(t.mode & 1) && (a.lanes = s),
      (a.return = t),
      (a.sibling = null),
      e !== null &&
        ((s = t.deletions),
        s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
      (t.child = a),
      (t.memoizedState = null),
      a
    );
  }
  function vl(e, t) {
    return (
      (t = no({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function $s(e, t, s, a) {
    return (
      a !== null && Wa(a),
      Sr(t, e.child, null, s),
      (e = vl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Tg(e, t, s, a, u, d, m) {
    if (s)
      return t.flags & 256
        ? ((t.flags &= -257), (a = fl(Error(i(422)))), $s(e, t, m, a))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((d = a.fallback),
          (u = t.mode),
          (a = no({ mode: "visible", children: a.children }, u, 0, null)),
          (d = Yn(d, u, m, null)),
          (d.flags |= 2),
          (a.return = t),
          (d.return = t),
          (a.sibling = d),
          (t.child = a),
          t.mode & 1 && Sr(t, e.child, null, m),
          (t.child.memoizedState = yl(m)),
          (t.memoizedState = gl),
          d);
    if (!(t.mode & 1)) return $s(e, t, m, null);
    if (u.data === "$!") {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var w = a.dgst;
      return (
        (a = w), (d = Error(i(419))), (a = fl(d, a, void 0)), $s(e, t, m, a)
      );
    }
    if (((w = (m & e.childLanes) !== 0), at || w)) {
      if (((a = ze), a !== null)) {
        switch (m & -m) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = u & (a.suspendedLanes | m) ? 0 : u),
          u !== 0 &&
            u !== d.retryLane &&
            ((d.retryLane = u), en(e, u), It(a, e, u, -1));
      }
      return Ol(), (a = fl(Error(i(421)))), $s(e, t, m, a);
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Hg.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = d.treeContext),
        (mt = yn(u.nextSibling)),
        (pt = t),
        (be = !0),
        (Nt = null),
        e !== null &&
          ((wt[xt++] = Zt),
          (wt[xt++] = Xt),
          (wt[xt++] = Hn),
          (Zt = e.id),
          (Xt = e.overflow),
          (Hn = t)),
        (t = vl(t, a.children)),
        (t.flags |= 4096),
        t);
  }
  function xf(e, t, s) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Ja(e.return, t, s);
  }
  function wl(e, t, s, a, u) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: s,
          tailMode: u,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = a),
        (d.tail = s),
        (d.tailMode = u));
  }
  function kf(e, t, s) {
    var a = t.pendingProps,
      u = a.revealOrder,
      d = a.tail;
    if ((tt(e, t, a.children, s), (a = Re.current), a & 2))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && xf(e, s, t);
          else if (e.tag === 19) xf(e, s, t);
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
      a &= 1;
    }
    if ((xe(Re, a), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (s = t.child, u = null; s !== null; )
            (e = s.alternate),
              e !== null && Ds(e) === null && (u = s),
              (s = s.sibling);
          (s = u),
            s === null
              ? ((u = t.child), (t.child = null))
              : ((u = s.sibling), (s.sibling = null)),
            wl(t, !1, u, s, d);
          break;
        case "backwards":
          for (s = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && Ds(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = s), (s = u), (u = e);
          }
          wl(t, !0, s, null, d);
          break;
        case "together":
          wl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Vs(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function nn(e, t, s) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Kn |= t.lanes),
      !(s & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, s = Rn(e, e.pendingProps), t.child = s, s.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = Rn(e, e.pendingProps)),
          (s.return = t);
      s.sibling = null;
    }
    return t.child;
  }
  function Pg(e, t, s) {
    switch (t.tag) {
      case 3:
        yf(t), kr();
        break;
      case 5:
        Od(t);
        break;
      case 1:
        ot(t.type) && bs(t);
        break;
      case 4:
        Za(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context,
          u = t.memoizedProps.value;
        xe(js, a._currentValue), (a._currentValue = u);
        break;
      case 13:
        if (((a = t.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (xe(Re, Re.current & 1), (t.flags |= 128), null)
            : s & t.child.childLanes
            ? wf(e, t, s)
            : (xe(Re, Re.current & 1),
              (e = nn(e, t, s)),
              e !== null ? e.sibling : null);
        xe(Re, Re.current & 1);
        break;
      case 19:
        if (((a = (s & t.childLanes) !== 0), e.flags & 128)) {
          if (a) return kf(e, t, s);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          xe(Re, Re.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), pf(e, t, s);
    }
    return nn(e, t, s);
  }
  var Sf, xl, Ef, _f;
  (Sf = function (e, t) {
    for (var s = t.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === t) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === t) return;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
  }),
    (xl = function () {}),
    (Ef = function (e, t, s, a) {
      var u = e.memoizedProps;
      if (u !== a) {
        (e = t.stateNode), Wn(Bt.current);
        var d = null;
        switch (s) {
          case "input":
            (u = Jo(e, u)), (a = Jo(e, a)), (d = []);
            break;
          case "select":
            (u = W({}, u, { value: void 0 })),
              (a = W({}, a, { value: void 0 })),
              (d = []);
            break;
          case "textarea":
            (u = Zo(e, u)), (a = Zo(e, a)), (d = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof a.onClick == "function" &&
              (e.onclick = Es);
        }
        ea(s, a);
        var m;
        s = null;
        for (j in u)
          if (!a.hasOwnProperty(j) && u.hasOwnProperty(j) && u[j] != null)
            if (j === "style") {
              var w = u[j];
              for (m in w) w.hasOwnProperty(m) && (s || (s = {}), (s[m] = ""));
            } else
              j !== "dangerouslySetInnerHTML" &&
                j !== "children" &&
                j !== "suppressContentEditableWarning" &&
                j !== "suppressHydrationWarning" &&
                j !== "autoFocus" &&
                (l.hasOwnProperty(j)
                  ? d || (d = [])
                  : (d = d || []).push(j, null));
        for (j in a) {
          var x = a[j];
          if (
            ((w = u != null ? u[j] : void 0),
            a.hasOwnProperty(j) && x !== w && (x != null || w != null))
          )
            if (j === "style")
              if (w) {
                for (m in w)
                  !w.hasOwnProperty(m) ||
                    (x && x.hasOwnProperty(m)) ||
                    (s || (s = {}), (s[m] = ""));
                for (m in x)
                  x.hasOwnProperty(m) &&
                    w[m] !== x[m] &&
                    (s || (s = {}), (s[m] = x[m]));
              } else s || (d || (d = []), d.push(j, s)), (s = x);
            else
              j === "dangerouslySetInnerHTML"
                ? ((x = x ? x.__html : void 0),
                  (w = w ? w.__html : void 0),
                  x != null && w !== x && (d = d || []).push(j, x))
                : j === "children"
                ? (typeof x != "string" && typeof x != "number") ||
                  (d = d || []).push(j, "" + x)
                : j !== "suppressContentEditableWarning" &&
                  j !== "suppressHydrationWarning" &&
                  (l.hasOwnProperty(j)
                    ? (x != null && j === "onScroll" && Ee("scroll", e),
                      d || w === x || (d = []))
                    : (d = d || []).push(j, x));
        }
        s && (d = d || []).push("style", s);
        var j = d;
        (t.updateQueue = j) && (t.flags |= 4);
      }
    }),
    (_f = function (e, t, s, a) {
      s !== a && (t.flags |= 4);
    });
  function Ei(e, t) {
    if (!be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var s = null; t !== null; )
            t.alternate !== null && (s = t), (t = t.sibling);
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = e.tail;
          for (var a = null; s !== null; )
            s.alternate !== null && (a = s), (s = s.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      a = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (s |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 14680064),
          (a |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (s |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = s), t;
  }
  function Ig(e, t, s) {
    var a = t.pendingProps;
    switch ((Ha(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(t), null;
      case 1:
        return ot(t.type) && Cs(), Je(t), null;
      case 3:
        return (
          (a = t.stateNode),
          Cr(),
          _e(st),
          _e(Ke),
          tl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ps(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Nt !== null && (Il(Nt), (Nt = null)))),
          xl(e, t),
          Je(t),
          null
        );
      case 5:
        Xa(t);
        var u = Wn(vi.current);
        if (((s = t.type), e !== null && t.stateNode != null))
          Ef(e, t, s, a, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return Je(t), null;
          }
          if (((e = Wn(Bt.current)), Ps(t))) {
            (a = t.stateNode), (s = t.type);
            var d = t.memoizedProps;
            switch (((a[Ut] = t), (a[hi] = d), (e = (t.mode & 1) !== 0), s)) {
              case "dialog":
                Ee("cancel", a), Ee("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", a);
                break;
              case "video":
              case "audio":
                for (u = 0; u < ci.length; u++) Ee(ci[u], a);
                break;
              case "source":
                Ee("error", a);
                break;
              case "img":
              case "image":
              case "link":
                Ee("error", a), Ee("load", a);
                break;
              case "details":
                Ee("toggle", a);
                break;
              case "input":
                rc(a, d), Ee("invalid", a);
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!d.multiple }),
                  Ee("invalid", a);
                break;
              case "textarea":
                oc(a, d), Ee("invalid", a);
            }
            ea(s, d), (u = null);
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var w = d[m];
                m === "children"
                  ? typeof w == "string"
                    ? a.textContent !== w &&
                      (d.suppressHydrationWarning !== !0 &&
                        Ss(a.textContent, w, e),
                      (u = ["children", w]))
                    : typeof w == "number" &&
                      a.textContent !== "" + w &&
                      (d.suppressHydrationWarning !== !0 &&
                        Ss(a.textContent, w, e),
                      (u = ["children", "" + w]))
                  : l.hasOwnProperty(m) &&
                    w != null &&
                    m === "onScroll" &&
                    Ee("scroll", a);
              }
            switch (s) {
              case "input":
                Xi(a), sc(a, d, !0);
                break;
              case "textarea":
                Xi(a), lc(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (a.onclick = Es);
            }
            (a = u), (t.updateQueue = a), a !== null && (t.flags |= 4);
          } else {
            (m = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = uc(s)),
              e === "http://www.w3.org/1999/xhtml"
                ? s === "script"
                  ? ((e = m.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == "string"
                  ? (e = m.createElement(s, { is: a.is }))
                  : ((e = m.createElement(s)),
                    s === "select" &&
                      ((m = e),
                      a.multiple
                        ? (m.multiple = !0)
                        : a.size && (m.size = a.size)))
                : (e = m.createElementNS(e, s)),
              (e[Ut] = t),
              (e[hi] = a),
              Sf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((m = ta(s, a)), s)) {
                case "dialog":
                  Ee("cancel", e), Ee("close", e), (u = a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ee("load", e), (u = a);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < ci.length; u++) Ee(ci[u], e);
                  u = a;
                  break;
                case "source":
                  Ee("error", e), (u = a);
                  break;
                case "img":
                case "image":
                case "link":
                  Ee("error", e), Ee("load", e), (u = a);
                  break;
                case "details":
                  Ee("toggle", e), (u = a);
                  break;
                case "input":
                  rc(e, a), (u = Jo(e, a)), Ee("invalid", e);
                  break;
                case "option":
                  u = a;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!a.multiple }),
                    (u = W({}, a, { value: void 0 })),
                    Ee("invalid", e);
                  break;
                case "textarea":
                  oc(e, a), (u = Zo(e, a)), Ee("invalid", e);
                  break;
                default:
                  u = a;
              }
              ea(s, u), (w = u);
              for (d in w)
                if (w.hasOwnProperty(d)) {
                  var x = w[d];
                  d === "style"
                    ? fc(e, x)
                    : d === "dangerouslySetInnerHTML"
                    ? ((x = x ? x.__html : void 0), x != null && cc(e, x))
                    : d === "children"
                    ? typeof x == "string"
                      ? (s !== "textarea" || x !== "") && Wr(e, x)
                      : typeof x == "number" && Wr(e, "" + x)
                    : d !== "suppressContentEditableWarning" &&
                      d !== "suppressHydrationWarning" &&
                      d !== "autoFocus" &&
                      (l.hasOwnProperty(d)
                        ? x != null && d === "onScroll" && Ee("scroll", e)
                        : x != null && $(e, d, x, m));
                }
              switch (s) {
                case "input":
                  Xi(e), sc(e, a, !1);
                  break;
                case "textarea":
                  Xi(e), lc(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + me(a.value));
                  break;
                case "select":
                  (e.multiple = !!a.multiple),
                    (d = a.value),
                    d != null
                      ? or(e, !!a.multiple, d, !1)
                      : a.defaultValue != null &&
                        or(e, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = Es);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Je(t), null;
      case 6:
        if (e && t.stateNode != null) _f(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (((s = Wn(vi.current)), Wn(Bt.current), Ps(t))) {
            if (
              ((a = t.stateNode),
              (s = t.memoizedProps),
              (a[Ut] = t),
              (d = a.nodeValue !== s) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ss(a.nodeValue, s, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ss(a.nodeValue, s, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            (a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a)),
              (a[Ut] = t),
              (t.stateNode = a);
        }
        return Je(t), null;
      case 13:
        if (
          (_e(Re),
          (a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (be && mt !== null && t.mode & 1 && !(t.flags & 128))
            bd(), kr(), (t.flags |= 98560), (d = !1);
          else if (((d = Ps(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (
                ((d = t.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(i(317));
              d[Ut] = t;
            } else
              kr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Je(t), (d = !1);
          } else Nt !== null && (Il(Nt), (Nt = null)), (d = !0);
          if (!d) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = s), t)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Re.current & 1 ? Ue === 0 && (Ue = 3) : Ol())),
            t.updateQueue !== null && (t.flags |= 4),
            Je(t),
            null);
      case 4:
        return (
          Cr(),
          xl(e, t),
          e === null && di(t.stateNode.containerInfo),
          Je(t),
          null
        );
      case 10:
        return Ga(t.type._context), Je(t), null;
      case 17:
        return ot(t.type) && Cs(), Je(t), null;
      case 19:
        if ((_e(Re), (d = t.memoizedState), d === null)) return Je(t), null;
        if (((a = (t.flags & 128) !== 0), (m = d.rendering), m === null))
          if (a) Ei(d, !1);
          else {
            if (Ue !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((m = Ds(e)), m !== null)) {
                  for (
                    t.flags |= 128,
                      Ei(d, !1),
                      a = m.updateQueue,
                      a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      a = s,
                      s = t.child;
                    s !== null;

                  )
                    (d = s),
                      (e = a),
                      (d.flags &= 14680066),
                      (m = d.alternate),
                      m === null
                        ? ((d.childLanes = 0),
                          (d.lanes = e),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = m.childLanes),
                          (d.lanes = m.lanes),
                          (d.child = m.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = m.memoizedProps),
                          (d.memoizedState = m.memoizedState),
                          (d.updateQueue = m.updateQueue),
                          (d.type = m.type),
                          (e = m.dependencies),
                          (d.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (s = s.sibling);
                  return xe(Re, (Re.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null &&
              Ae() > Tr &&
              ((t.flags |= 128), (a = !0), Ei(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Ds(m)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (s = e.updateQueue),
                s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                Ei(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !m.alternate &&
                  !be)
              )
                return Je(t), null;
            } else
              2 * Ae() - d.renderingStartTime > Tr &&
                s !== 1073741824 &&
                ((t.flags |= 128), (a = !0), Ei(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((m.sibling = t.child), (t.child = m))
            : ((s = d.last),
              s !== null ? (s.sibling = m) : (t.child = m),
              (d.last = m));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = Ae()),
            (t.sibling = null),
            (s = Re.current),
            xe(Re, a ? (s & 1) | 2 : s & 1),
            t)
          : (Je(t), null);
      case 22:
      case 23:
        return (
          Al(),
          (a = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
          a && t.mode & 1
            ? gt & 1073741824 &&
              (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Je(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function jg(e, t) {
    switch ((Ha(t), t.tag)) {
      case 1:
        return (
          ot(t.type) && Cs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Cr(),
          _e(st),
          _e(Ke),
          tl(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Xa(t), null;
      case 13:
        if (
          (_e(Re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          kr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return _e(Re), null;
      case 4:
        return Cr(), null;
      case 10:
        return Ga(t.type._context), null;
      case 22:
      case 23:
        return Al(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ws = !1,
    Qe = !1,
    Ag = typeof WeakSet == "function" ? WeakSet : Set,
    q = null;
  function Nr(e, t) {
    var s = e.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (a) {
          Ie(e, t, a);
        }
      else s.current = null;
  }
  function kl(e, t, s) {
    try {
      s();
    } catch (a) {
      Ie(e, t, a);
    }
  }
  var Cf = !1;
  function Og(e, t) {
    if (((Aa = ds), (e = nd()), Ca(e))) {
      if ("selectionStart" in e)
        var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var a = s.getSelection && s.getSelection();
          if (a && a.rangeCount !== 0) {
            s = a.anchorNode;
            var u = a.anchorOffset,
              d = a.focusNode;
            a = a.focusOffset;
            try {
              s.nodeType, d.nodeType;
            } catch {
              s = null;
              break e;
            }
            var m = 0,
              w = -1,
              x = -1,
              j = 0,
              M = 0,
              U = e,
              L = null;
            t: for (;;) {
              for (
                var V;
                U !== s || (u !== 0 && U.nodeType !== 3) || (w = m + u),
                  U !== d || (a !== 0 && U.nodeType !== 3) || (x = m + a),
                  U.nodeType === 3 && (m += U.nodeValue.length),
                  (V = U.firstChild) !== null;

              )
                (L = U), (U = V);
              for (;;) {
                if (U === e) break t;
                if (
                  (L === s && ++j === u && (w = m),
                  L === d && ++M === a && (x = m),
                  (V = U.nextSibling) !== null)
                )
                  break;
                (U = L), (L = U.parentNode);
              }
              U = V;
            }
            s = w === -1 || x === -1 ? null : { start: w, end: x };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Oa = { focusedElem: e, selectionRange: s }, ds = !1, q = t;
      q !== null;

    )
      if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (q = e);
      else
        for (; q !== null; ) {
          t = q;
          try {
            var K = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var G = K.memoizedProps,
                      Oe = K.memoizedState,
                      N = t.stateNode,
                      _ = N.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? G : Rt(t.type, G),
                        Oe
                      );
                    N.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var I = t.stateNode.containerInfo;
                  I.nodeType === 1
                    ? (I.textContent = "")
                    : I.nodeType === 9 &&
                      I.documentElement &&
                      I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (B) {
            Ie(t, t.return, B);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (q = e);
            break;
          }
          q = t.return;
        }
    return (K = Cf), (Cf = !1), K;
  }
  function _i(e, t, s) {
    var a = t.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var u = (a = a.next);
      do {
        if ((u.tag & e) === e) {
          var d = u.destroy;
          (u.destroy = void 0), d !== void 0 && kl(t, s, d);
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function qs(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var s = (t = t.next);
      do {
        if ((s.tag & e) === e) {
          var a = s.create;
          s.destroy = a();
        }
        s = s.next;
      } while (s !== t);
    }
  }
  function Sl(e) {
    var t = e.ref;
    if (t !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function bf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), bf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ut],
          delete t[hi],
          delete t[Fa],
          delete t[gg],
          delete t[yg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Nf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Rf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function El(e, t, s) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? s.nodeType === 8
            ? s.parentNode.insertBefore(e, t)
            : s.insertBefore(e, t)
          : (s.nodeType === 8
              ? ((t = s.parentNode), t.insertBefore(e, s))
              : ((t = s), t.appendChild(e)),
            (s = s._reactRootContainer),
            s != null || t.onclick !== null || (t.onclick = Es));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (El(e, t, s), e = e.sibling; e !== null; )
        El(e, t, s), (e = e.sibling);
  }
  function _l(e, t, s) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? s.insertBefore(e, t) : s.appendChild(e);
    else if (a !== 4 && ((e = e.child), e !== null))
      for (_l(e, t, s), e = e.sibling; e !== null; )
        _l(e, t, s), (e = e.sibling);
  }
  var Ve = null,
    Tt = !1;
  function En(e, t, s) {
    for (s = s.child; s !== null; ) Tf(e, t, s), (s = s.sibling);
  }
  function Tf(e, t, s) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function")
      try {
        Ft.onCommitFiberUnmount(ss, s);
      } catch {}
    switch (s.tag) {
      case 5:
        Qe || Nr(s, t);
      case 6:
        var a = Ve,
          u = Tt;
        (Ve = null),
          En(e, t, s),
          (Ve = a),
          (Tt = u),
          Ve !== null &&
            (Tt
              ? ((e = Ve),
                (s = s.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(s)
                  : e.removeChild(s))
              : Ve.removeChild(s.stateNode));
        break;
      case 18:
        Ve !== null &&
          (Tt
            ? ((e = Ve),
              (s = s.stateNode),
              e.nodeType === 8
                ? Ma(e.parentNode, s)
                : e.nodeType === 1 && Ma(e, s),
              ni(e))
            : Ma(Ve, s.stateNode));
        break;
      case 4:
        (a = Ve),
          (u = Tt),
          (Ve = s.stateNode.containerInfo),
          (Tt = !0),
          En(e, t, s),
          (Ve = a),
          (Tt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Qe &&
          ((a = s.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          u = a = a.next;
          do {
            var d = u,
              m = d.destroy;
            (d = d.tag),
              m !== void 0 && (d & 2 || d & 4) && kl(s, t, m),
              (u = u.next);
          } while (u !== a);
        }
        En(e, t, s);
        break;
      case 1:
        if (
          !Qe &&
          (Nr(s, t),
          (a = s.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            (a.props = s.memoizedProps),
              (a.state = s.memoizedState),
              a.componentWillUnmount();
          } catch (w) {
            Ie(s, t, w);
          }
        En(e, t, s);
        break;
      case 21:
        En(e, t, s);
        break;
      case 22:
        s.mode & 1
          ? ((Qe = (a = Qe) || s.memoizedState !== null), En(e, t, s), (Qe = a))
          : En(e, t, s);
        break;
      default:
        En(e, t, s);
    }
  }
  function Pf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new Ag()),
        t.forEach(function (a) {
          var u = $g.bind(null, e, a);
          s.has(a) || (s.add(a), a.then(u, u));
        });
    }
  }
  function Pt(e, t) {
    var s = t.deletions;
    if (s !== null)
      for (var a = 0; a < s.length; a++) {
        var u = s[a];
        try {
          var d = e,
            m = t,
            w = m;
          e: for (; w !== null; ) {
            switch (w.tag) {
              case 5:
                (Ve = w.stateNode), (Tt = !1);
                break e;
              case 3:
                (Ve = w.stateNode.containerInfo), (Tt = !0);
                break e;
              case 4:
                (Ve = w.stateNode.containerInfo), (Tt = !0);
                break e;
            }
            w = w.return;
          }
          if (Ve === null) throw Error(i(160));
          Tf(d, m, u), (Ve = null), (Tt = !1);
          var x = u.alternate;
          x !== null && (x.return = null), (u.return = null);
        } catch (j) {
          Ie(u, t, j);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) If(t, e), (t = t.sibling);
  }
  function If(e, t) {
    var s = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Pt(t, e), Ht(e), a & 4)) {
          try {
            _i(3, e, e.return), qs(3, e);
          } catch (G) {
            Ie(e, e.return, G);
          }
          try {
            _i(5, e, e.return);
          } catch (G) {
            Ie(e, e.return, G);
          }
        }
        break;
      case 1:
        Pt(t, e), Ht(e), a & 512 && s !== null && Nr(s, s.return);
        break;
      case 5:
        if (
          (Pt(t, e),
          Ht(e),
          a & 512 && s !== null && Nr(s, s.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            Wr(u, "");
          } catch (G) {
            Ie(e, e.return, G);
          }
        }
        if (a & 4 && ((u = e.stateNode), u != null)) {
          var d = e.memoizedProps,
            m = s !== null ? s.memoizedProps : d,
            w = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              w === "input" && d.type === "radio" && d.name != null && ic(u, d),
                ta(w, m);
              var j = ta(w, d);
              for (m = 0; m < x.length; m += 2) {
                var M = x[m],
                  U = x[m + 1];
                M === "style"
                  ? fc(u, U)
                  : M === "dangerouslySetInnerHTML"
                  ? cc(u, U)
                  : M === "children"
                  ? Wr(u, U)
                  : $(u, M, U, j);
              }
              switch (w) {
                case "input":
                  Qo(u, d);
                  break;
                case "textarea":
                  ac(u, d);
                  break;
                case "select":
                  var L = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!d.multiple;
                  var V = d.value;
                  V != null
                    ? or(u, !!d.multiple, V, !1)
                    : L !== !!d.multiple &&
                      (d.defaultValue != null
                        ? or(u, !!d.multiple, d.defaultValue, !0)
                        : or(u, !!d.multiple, d.multiple ? [] : "", !1));
              }
              u[hi] = d;
            } catch (G) {
              Ie(e, e.return, G);
            }
        }
        break;
      case 6:
        if ((Pt(t, e), Ht(e), a & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (u = e.stateNode), (d = e.memoizedProps);
          try {
            u.nodeValue = d;
          } catch (G) {
            Ie(e, e.return, G);
          }
        }
        break;
      case 3:
        if (
          (Pt(t, e), Ht(e), a & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            ni(t.containerInfo);
          } catch (G) {
            Ie(e, e.return, G);
          }
        break;
      case 4:
        Pt(t, e), Ht(e);
        break;
      case 13:
        Pt(t, e),
          Ht(e),
          (u = e.child),
          u.flags & 8192 &&
            ((d = u.memoizedState !== null),
            (u.stateNode.isHidden = d),
            !d ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (Nl = Ae())),
          a & 4 && Pf(e);
        break;
      case 22:
        if (
          ((M = s !== null && s.memoizedState !== null),
          e.mode & 1 ? ((Qe = (j = Qe) || M), Pt(t, e), (Qe = j)) : Pt(t, e),
          Ht(e),
          a & 8192)
        ) {
          if (
            ((j = e.memoizedState !== null),
            (e.stateNode.isHidden = j) && !M && e.mode & 1)
          )
            for (q = e, M = e.child; M !== null; ) {
              for (U = q = M; q !== null; ) {
                switch (((L = q), (V = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _i(4, L, L.return);
                    break;
                  case 1:
                    Nr(L, L.return);
                    var K = L.stateNode;
                    if (typeof K.componentWillUnmount == "function") {
                      (a = L), (s = L.return);
                      try {
                        (t = a),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount();
                      } catch (G) {
                        Ie(a, s, G);
                      }
                    }
                    break;
                  case 5:
                    Nr(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Of(U);
                      continue;
                    }
                }
                V !== null ? ((V.return = L), (q = V)) : Of(U);
              }
              M = M.sibling;
            }
          e: for (M = null, U = e; ; ) {
            if (U.tag === 5) {
              if (M === null) {
                M = U;
                try {
                  (u = U.stateNode),
                    j
                      ? ((d = u.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : ((w = U.stateNode),
                        (x = U.memoizedProps.style),
                        (m =
                          x != null && x.hasOwnProperty("display")
                            ? x.display
                            : null),
                        (w.style.display = dc("display", m)));
                } catch (G) {
                  Ie(e, e.return, G);
                }
              }
            } else if (U.tag === 6) {
              if (M === null)
                try {
                  U.stateNode.nodeValue = j ? "" : U.memoizedProps;
                } catch (G) {
                  Ie(e, e.return, G);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === e) &&
              U.child !== null
            ) {
              (U.child.return = U), (U = U.child);
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              M === U && (M = null), (U = U.return);
            }
            M === U && (M = null),
              (U.sibling.return = U.return),
              (U = U.sibling);
          }
        }
        break;
      case 19:
        Pt(t, e), Ht(e), a & 4 && Pf(e);
        break;
      case 21:
        break;
      default:
        Pt(t, e), Ht(e);
    }
  }
  function Ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (Nf(s)) {
              var a = s;
              break e;
            }
            s = s.return;
          }
          throw Error(i(160));
        }
        switch (a.tag) {
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (Wr(u, ""), (a.flags &= -33));
            var d = Rf(e);
            _l(e, d, u);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo,
              w = Rf(e);
            El(e, w, m);
            break;
          default:
            throw Error(i(161));
        }
      } catch (x) {
        Ie(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lg(e, t, s) {
    (q = e), jf(e);
  }
  function jf(e, t, s) {
    for (var a = (e.mode & 1) !== 0; q !== null; ) {
      var u = q,
        d = u.child;
      if (u.tag === 22 && a) {
        var m = u.memoizedState !== null || Ws;
        if (!m) {
          var w = u.alternate,
            x = (w !== null && w.memoizedState !== null) || Qe;
          w = Ws;
          var j = Qe;
          if (((Ws = m), (Qe = x) && !j))
            for (q = u; q !== null; )
              (m = q),
                (x = m.child),
                m.tag === 22 && m.memoizedState !== null
                  ? Lf(u)
                  : x !== null
                  ? ((x.return = m), (q = x))
                  : Lf(u);
          for (; d !== null; ) (q = d), jf(d), (d = d.sibling);
          (q = u), (Ws = w), (Qe = j);
        }
        Af(e);
      } else
        u.subtreeFlags & 8772 && d !== null ? ((d.return = u), (q = d)) : Af(e);
    }
  }
  function Af(e) {
    for (; q !== null; ) {
      var t = q;
      if (t.flags & 8772) {
        var s = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Qe || qs(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (t.flags & 4 && !Qe)
                  if (s === null) a.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? s.memoizedProps
                        : Rt(t.type, s.memoizedProps);
                    a.componentDidUpdate(
                      u,
                      s.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var d = t.updateQueue;
                d !== null && Ad(t, d, a);
                break;
              case 3:
                var m = t.updateQueue;
                if (m !== null) {
                  if (((s = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        s = t.child.stateNode;
                        break;
                      case 1:
                        s = t.child.stateNode;
                    }
                  Ad(t, m, s);
                }
                break;
              case 5:
                var w = t.stateNode;
                if (s === null && t.flags & 4) {
                  s = w;
                  var x = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && s.focus();
                      break;
                    case "img":
                      x.src && (s.src = x.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var j = t.alternate;
                  if (j !== null) {
                    var M = j.memoizedState;
                    if (M !== null) {
                      var U = M.dehydrated;
                      U !== null && ni(U);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          Qe || (t.flags & 512 && Sl(t));
        } catch (L) {
          Ie(t, t.return, L);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (((s = t.sibling), s !== null)) {
        (s.return = t.return), (q = s);
        break;
      }
      q = t.return;
    }
  }
  function Of(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (q = s);
        break;
      }
      q = t.return;
    }
  }
  function Lf(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var s = t.return;
            try {
              qs(4, t);
            } catch (x) {
              Ie(t, s, x);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var u = t.return;
              try {
                a.componentDidMount();
              } catch (x) {
                Ie(t, u, x);
              }
            }
            var d = t.return;
            try {
              Sl(t);
            } catch (x) {
              Ie(t, d, x);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Sl(t);
            } catch (x) {
              Ie(t, m, x);
            }
        }
      } catch (x) {
        Ie(t, t.return, x);
      }
      if (t === e) {
        q = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        (w.return = t.return), (q = w);
        break;
      }
      q = t.return;
    }
  }
  var Dg = Math.ceil,
    Ks = z.ReactCurrentDispatcher,
    Cl = z.ReactCurrentOwner,
    Et = z.ReactCurrentBatchConfig,
    le = 0,
    ze = null,
    Le = null,
    We = 0,
    gt = 0,
    Rr = vn(0),
    Ue = 0,
    Ci = null,
    Kn = 0,
    Gs = 0,
    bl = 0,
    bi = null,
    lt = null,
    Nl = 0,
    Tr = 1 / 0,
    rn = null,
    Js = !1,
    Rl = null,
    _n = null,
    Qs = !1,
    Cn = null,
    Ys = 0,
    Ni = 0,
    Tl = null,
    Zs = -1,
    Xs = 0;
  function nt() {
    return le & 6 ? Ae() : Zs !== -1 ? Zs : (Zs = Ae());
  }
  function bn(e) {
    return e.mode & 1
      ? le & 2 && We !== 0
        ? We & -We
        : wg.transition !== null
        ? (Xs === 0 && (Xs = Nc()), Xs)
        : ((e = ge),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Dc(e.type))),
          e)
      : 1;
  }
  function It(e, t, s, a) {
    if (50 < Ni) throw ((Ni = 0), (Tl = null), Error(i(185)));
    Yr(e, s, a),
      (!(le & 2) || e !== ze) &&
        (e === ze && (!(le & 2) && (Gs |= s), Ue === 4 && Nn(e, We)),
        ut(e, a),
        s === 1 &&
          le === 0 &&
          !(t.mode & 1) &&
          ((Tr = Ae() + 500), Ns && xn()));
  }
  function ut(e, t) {
    var s = e.callbackNode;
    w0(e, t);
    var a = ls(e, e === ze ? We : 0);
    if (a === 0)
      s !== null && _c(s), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = a & -a), e.callbackPriority !== t)) {
      if ((s != null && _c(s), t === 1))
        e.tag === 0 ? vg(Mf.bind(null, e)) : kd(Mf.bind(null, e)),
          pg(function () {
            !(le & 6) && xn();
          }),
          (s = null);
      else {
        switch (Rc(a)) {
          case 1:
            s = la;
            break;
          case 4:
            s = Cc;
            break;
          case 16:
            s = is;
            break;
          case 536870912:
            s = bc;
            break;
          default:
            s = is;
        }
        s = Wf(s, Df.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = s);
    }
  }
  function Df(e, t) {
    if (((Zs = -1), (Xs = 0), le & 6)) throw Error(i(327));
    var s = e.callbackNode;
    if (Pr() && e.callbackNode !== s) return null;
    var a = ls(e, e === ze ? We : 0);
    if (a === 0) return null;
    if (a & 30 || a & e.expiredLanes || t) t = eo(e, a);
    else {
      t = a;
      var u = le;
      le |= 2;
      var d = Uf();
      (ze !== e || We !== t) && ((rn = null), (Tr = Ae() + 500), Jn(e, t));
      do
        try {
          Ug();
          break;
        } catch (w) {
          Ff(e, w);
        }
      while (!0);
      Ka(),
        (Ks.current = d),
        (le = u),
        Le !== null ? (t = 0) : ((ze = null), (We = 0), (t = Ue));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = ua(e)), u !== 0 && ((a = u), (t = Pl(e, u)))),
        t === 1)
      )
        throw ((s = Ci), Jn(e, 0), Nn(e, a), ut(e, Ae()), s);
      if (t === 6) Nn(e, a);
      else {
        if (
          ((u = e.current.alternate),
          !(a & 30) &&
            !Mg(u) &&
            ((t = eo(e, a)),
            t === 2 && ((d = ua(e)), d !== 0 && ((a = d), (t = Pl(e, d)))),
            t === 1))
        )
          throw ((s = Ci), Jn(e, 0), Nn(e, a), ut(e, Ae()), s);
        switch (((e.finishedWork = u), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Qn(e, lt, rn);
            break;
          case 3:
            if (
              (Nn(e, a),
              (a & 130023424) === a && ((t = Nl + 500 - Ae()), 10 < t))
            ) {
              if (ls(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & a) !== a)) {
                nt(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = Da(Qn.bind(null, e, lt, rn), t);
              break;
            }
            Qn(e, lt, rn);
            break;
          case 4:
            if ((Nn(e, a), (a & 4194240) === a)) break;
            for (t = e.eventTimes, u = -1; 0 < a; ) {
              var m = 31 - Ct(a);
              (d = 1 << m), (m = t[m]), m > u && (u = m), (a &= ~d);
            }
            if (
              ((a = u),
              (a = Ae() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                  ? 480
                  : 1080 > a
                  ? 1080
                  : 1920 > a
                  ? 1920
                  : 3e3 > a
                  ? 3e3
                  : 4320 > a
                  ? 4320
                  : 1960 * Dg(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = Da(Qn.bind(null, e, lt, rn), a);
              break;
            }
            Qn(e, lt, rn);
            break;
          case 5:
            Qn(e, lt, rn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return ut(e, Ae()), e.callbackNode === s ? Df.bind(null, e) : null;
  }
  function Pl(e, t) {
    var s = bi;
    return (
      e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
      (e = eo(e, t)),
      e !== 2 && ((t = lt), (lt = s), t !== null && Il(t)),
      e
    );
  }
  function Il(e) {
    lt === null ? (lt = e) : lt.push.apply(lt, e);
  }
  function Mg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var s = t.updateQueue;
        if (s !== null && ((s = s.stores), s !== null))
          for (var a = 0; a < s.length; a++) {
            var u = s[a],
              d = u.getSnapshot;
            u = u.value;
            try {
              if (!bt(d(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((s = t.child), t.subtreeFlags & 16384 && s !== null))
        (s.return = t), (t = s);
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
  function Nn(e, t) {
    for (
      t &= ~bl,
        t &= ~Gs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var s = 31 - Ct(t),
        a = 1 << s;
      (e[s] = -1), (t &= ~a);
    }
  }
  function Mf(e) {
    if (le & 6) throw Error(i(327));
    Pr();
    var t = ls(e, 0);
    if (!(t & 1)) return ut(e, Ae()), null;
    var s = eo(e, t);
    if (e.tag !== 0 && s === 2) {
      var a = ua(e);
      a !== 0 && ((t = a), (s = Pl(e, a)));
    }
    if (s === 1) throw ((s = Ci), Jn(e, 0), Nn(e, t), ut(e, Ae()), s);
    if (s === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Qn(e, lt, rn),
      ut(e, Ae()),
      null
    );
  }
  function jl(e, t) {
    var s = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      (le = s), le === 0 && ((Tr = Ae() + 500), Ns && xn());
    }
  }
  function Gn(e) {
    Cn !== null && Cn.tag === 0 && !(le & 6) && Pr();
    var t = le;
    le |= 1;
    var s = Et.transition,
      a = ge;
    try {
      if (((Et.transition = null), (ge = 1), e)) return e();
    } finally {
      (ge = a), (Et.transition = s), (le = t), !(le & 6) && xn();
    }
  }
  function Al() {
    (gt = Rr.current), _e(Rr);
  }
  function Jn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var s = e.timeoutHandle;
    if ((s !== -1 && ((e.timeoutHandle = -1), hg(s)), Le !== null))
      for (s = Le.return; s !== null; ) {
        var a = s;
        switch ((Ha(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && Cs();
            break;
          case 3:
            Cr(), _e(st), _e(Ke), tl();
            break;
          case 5:
            Xa(a);
            break;
          case 4:
            Cr();
            break;
          case 13:
            _e(Re);
            break;
          case 19:
            _e(Re);
            break;
          case 10:
            Ga(a.type._context);
            break;
          case 22:
          case 23:
            Al();
        }
        s = s.return;
      }
    if (
      ((ze = e),
      (Le = e = Rn(e.current, null)),
      (We = gt = t),
      (Ue = 0),
      (Ci = null),
      (bl = Gs = Kn = 0),
      (lt = bi = null),
      Vn !== null)
    ) {
      for (t = 0; t < Vn.length; t++)
        if (((s = Vn[t]), (a = s.interleaved), a !== null)) {
          s.interleaved = null;
          var u = a.next,
            d = s.pending;
          if (d !== null) {
            var m = d.next;
            (d.next = u), (a.next = m);
          }
          s.pending = a;
        }
      Vn = null;
    }
    return e;
  }
  function Ff(e, t) {
    do {
      var s = Le;
      try {
        if ((Ka(), (Ms.current = zs), Fs)) {
          for (var a = Te.memoizedState; a !== null; ) {
            var u = a.queue;
            u !== null && (u.pending = null), (a = a.next);
          }
          Fs = !1;
        }
        if (
          ((qn = 0),
          (Be = Fe = Te = null),
          (wi = !1),
          (xi = 0),
          (Cl.current = null),
          s === null || s.return === null)
        ) {
          (Ue = 1), (Ci = t), (Le = null);
          break;
        }
        e: {
          var d = e,
            m = s.return,
            w = s,
            x = t;
          if (
            ((t = We),
            (w.flags |= 32768),
            x !== null && typeof x == "object" && typeof x.then == "function")
          ) {
            var j = x,
              M = w,
              U = M.tag;
            if (!(M.mode & 1) && (U === 0 || U === 11 || U === 15)) {
              var L = M.alternate;
              L
                ? ((M.updateQueue = L.updateQueue),
                  (M.memoizedState = L.memoizedState),
                  (M.lanes = L.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var V = uf(m);
            if (V !== null) {
              (V.flags &= -257),
                cf(V, m, w, d, t),
                V.mode & 1 && lf(d, j, t),
                (t = V),
                (x = j);
              var K = t.updateQueue;
              if (K === null) {
                var G = new Set();
                G.add(x), (t.updateQueue = G);
              } else K.add(x);
              break e;
            } else {
              if (!(t & 1)) {
                lf(d, j, t), Ol();
                break e;
              }
              x = Error(i(426));
            }
          } else if (be && w.mode & 1) {
            var Oe = uf(m);
            if (Oe !== null) {
              !(Oe.flags & 65536) && (Oe.flags |= 256),
                cf(Oe, m, w, d, t),
                Wa(br(x, w));
              break e;
            }
          }
          (d = x = br(x, w)),
            Ue !== 4 && (Ue = 2),
            bi === null ? (bi = [d]) : bi.push(d),
            (d = m);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                var N = of(d, x, t);
                jd(d, N);
                break e;
              case 1:
                w = x;
                var _ = d.type,
                  I = d.stateNode;
                if (
                  !(d.flags & 128) &&
                  (typeof _.getDerivedStateFromError == "function" ||
                    (I !== null &&
                      typeof I.componentDidCatch == "function" &&
                      (_n === null || !_n.has(I))))
                ) {
                  (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                  var B = af(d, w, t);
                  jd(d, B);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        zf(s);
      } catch (J) {
        (t = J), Le === s && s !== null && (Le = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Uf() {
    var e = Ks.current;
    return (Ks.current = zs), e === null ? zs : e;
  }
  function Ol() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
      ze === null || (!(Kn & 268435455) && !(Gs & 268435455)) || Nn(ze, We);
  }
  function eo(e, t) {
    var s = le;
    le |= 2;
    var a = Uf();
    (ze !== e || We !== t) && ((rn = null), Jn(e, t));
    do
      try {
        Fg();
        break;
      } catch (u) {
        Ff(e, u);
      }
    while (!0);
    if ((Ka(), (le = s), (Ks.current = a), Le !== null)) throw Error(i(261));
    return (ze = null), (We = 0), Ue;
  }
  function Fg() {
    for (; Le !== null; ) Bf(Le);
  }
  function Ug() {
    for (; Le !== null && !c0(); ) Bf(Le);
  }
  function Bf(e) {
    var t = Vf(e.alternate, e, gt);
    (e.memoizedProps = e.pendingProps),
      t === null ? zf(e) : (Le = t),
      (Cl.current = null);
  }
  function zf(e) {
    var t = e;
    do {
      var s = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((s = jg(s, t)), s !== null)) {
          (s.flags &= 32767), (Le = s);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ue = 6), (Le = null);
          return;
        }
      } else if (((s = Ig(s, t, gt)), s !== null)) {
        Le = s;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function Qn(e, t, s) {
    var a = ge,
      u = Et.transition;
    try {
      (Et.transition = null), (ge = 1), Bg(e, t, s, a);
    } finally {
      (Et.transition = u), (ge = a);
    }
    return null;
  }
  function Bg(e, t, s, a) {
    do Pr();
    while (Cn !== null);
    if (le & 6) throw Error(i(327));
    s = e.finishedWork;
    var u = e.finishedLanes;
    if (s === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var d = s.lanes | s.childLanes;
    if (
      (x0(e, d),
      e === ze && ((Le = ze = null), (We = 0)),
      (!(s.subtreeFlags & 2064) && !(s.flags & 2064)) ||
        Qs ||
        ((Qs = !0),
        Wf(is, function () {
          return Pr(), null;
        })),
      (d = (s.flags & 15990) !== 0),
      s.subtreeFlags & 15990 || d)
    ) {
      (d = Et.transition), (Et.transition = null);
      var m = ge;
      ge = 1;
      var w = le;
      (le |= 4),
        (Cl.current = null),
        Og(e, s),
        If(s, e),
        og(Oa),
        (ds = !!Aa),
        (Oa = Aa = null),
        (e.current = s),
        Lg(s),
        d0(),
        (le = w),
        (ge = m),
        (Et.transition = d);
    } else e.current = s;
    if (
      (Qs && ((Qs = !1), (Cn = e), (Ys = u)),
      (d = e.pendingLanes),
      d === 0 && (_n = null),
      p0(s.stateNode),
      ut(e, Ae()),
      t !== null)
    )
      for (a = e.onRecoverableError, s = 0; s < t.length; s++)
        (u = t[s]), a(u.value, { componentStack: u.stack, digest: u.digest });
    if (Js) throw ((Js = !1), (e = Rl), (Rl = null), e);
    return (
      Ys & 1 && e.tag !== 0 && Pr(),
      (d = e.pendingLanes),
      d & 1 ? (e === Tl ? Ni++ : ((Ni = 0), (Tl = e))) : (Ni = 0),
      xn(),
      null
    );
  }
  function Pr() {
    if (Cn !== null) {
      var e = Rc(Ys),
        t = Et.transition,
        s = ge;
      try {
        if (((Et.transition = null), (ge = 16 > e ? 16 : e), Cn === null))
          var a = !1;
        else {
          if (((e = Cn), (Cn = null), (Ys = 0), le & 6)) throw Error(i(331));
          var u = le;
          for (le |= 4, q = e.current; q !== null; ) {
            var d = q,
              m = d.child;
            if (q.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var x = 0; x < w.length; x++) {
                  var j = w[x];
                  for (q = j; q !== null; ) {
                    var M = q;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _i(8, M, d);
                    }
                    var U = M.child;
                    if (U !== null) (U.return = M), (q = U);
                    else
                      for (; q !== null; ) {
                        M = q;
                        var L = M.sibling,
                          V = M.return;
                        if ((bf(M), M === j)) {
                          q = null;
                          break;
                        }
                        if (L !== null) {
                          (L.return = V), (q = L);
                          break;
                        }
                        q = V;
                      }
                  }
                }
                var K = d.alternate;
                if (K !== null) {
                  var G = K.child;
                  if (G !== null) {
                    K.child = null;
                    do {
                      var Oe = G.sibling;
                      (G.sibling = null), (G = Oe);
                    } while (G !== null);
                  }
                }
                q = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) (m.return = d), (q = m);
            else
              e: for (; q !== null; ) {
                if (((d = q), d.flags & 2048))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _i(9, d, d.return);
                  }
                var N = d.sibling;
                if (N !== null) {
                  (N.return = d.return), (q = N);
                  break e;
                }
                q = d.return;
              }
          }
          var _ = e.current;
          for (q = _; q !== null; ) {
            m = q;
            var I = m.child;
            if (m.subtreeFlags & 2064 && I !== null) (I.return = m), (q = I);
            else
              e: for (m = _; q !== null; ) {
                if (((w = q), w.flags & 2048))
                  try {
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qs(9, w);
                    }
                  } catch (J) {
                    Ie(w, w.return, J);
                  }
                if (w === m) {
                  q = null;
                  break e;
                }
                var B = w.sibling;
                if (B !== null) {
                  (B.return = w.return), (q = B);
                  break e;
                }
                q = w.return;
              }
          }
          if (
            ((le = u),
            xn(),
            Ft && typeof Ft.onPostCommitFiberRoot == "function")
          )
            try {
              Ft.onPostCommitFiberRoot(ss, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (ge = s), (Et.transition = t);
      }
    }
    return !1;
  }
  function Hf(e, t, s) {
    (t = br(s, t)),
      (t = of(e, t, 1)),
      (e = Sn(e, t, 1)),
      (t = nt()),
      e !== null && (Yr(e, 1, t), ut(e, t));
  }
  function Ie(e, t, s) {
    if (e.tag === 3) Hf(e, e, s);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hf(t, e, s);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (_n === null || !_n.has(a)))
          ) {
            (e = br(s, e)),
              (e = af(t, e, 1)),
              (t = Sn(t, e, 1)),
              (e = nt()),
              t !== null && (Yr(t, 1, e), ut(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function zg(e, t, s) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (t = nt()),
      (e.pingedLanes |= e.suspendedLanes & s),
      ze === e &&
        (We & s) === s &&
        (Ue === 4 || (Ue === 3 && (We & 130023424) === We && 500 > Ae() - Nl)
          ? Jn(e, 0)
          : (bl |= s)),
      ut(e, t);
  }
  function $f(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = as), (as <<= 1), !(as & 130023424) && (as = 4194304))
        : (t = 1));
    var s = nt();
    (e = en(e, t)), e !== null && (Yr(e, t, s), ut(e, s));
  }
  function Hg(e) {
    var t = e.memoizedState,
      s = 0;
    t !== null && (s = t.retryLane), $f(e, s);
  }
  function $g(e, t) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          u = e.memoizedState;
        u !== null && (s = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    a !== null && a.delete(t), $f(e, s);
  }
  var Vf;
  Vf = function (e, t, s) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || st.current) at = !0;
      else {
        if (!(e.lanes & s) && !(t.flags & 128)) return (at = !1), Pg(e, t, s);
        at = !!(e.flags & 131072);
      }
    else (at = !1), be && t.flags & 1048576 && Sd(t, Ts, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        Vs(e, t), (e = t.pendingProps);
        var u = vr(t, Ke.current);
        _r(t, s), (u = il(null, t, a, e, u, s));
        var d = sl();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ot(a) ? ((d = !0), bs(t)) : (d = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Ya(t),
              (u.updater = Hs),
              (t.stateNode = u),
              (u._reactInternals = t),
              dl(t, a, e, s),
              (t = ml(null, t, a, !0, d, s)))
            : ((t.tag = 0), be && d && za(t), tt(null, t, u, s), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (Vs(e, t),
            (e = t.pendingProps),
            (u = a._init),
            (a = u(a._payload)),
            (t.type = a),
            (u = t.tag = Wg(a)),
            (e = Rt(a, e)),
            u)
          ) {
            case 0:
              t = pl(null, t, a, e, s);
              break e;
            case 1:
              t = gf(null, t, a, e, s);
              break e;
            case 11:
              t = df(null, t, a, e, s);
              break e;
            case 14:
              t = ff(null, t, a, Rt(a.type, e), s);
              break e;
          }
          throw Error(i(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Rt(a, u)),
          pl(e, t, a, u, s)
        );
      case 1:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Rt(a, u)),
          gf(e, t, a, u, s)
        );
      case 3:
        e: {
          if ((yf(t), e === null)) throw Error(i(387));
          (a = t.pendingProps),
            (d = t.memoizedState),
            (u = d.element),
            Id(e, t),
            Ls(t, a, null, s);
          var m = t.memoizedState;
          if (((a = m.element), d.isDehydrated))
            if (
              ((d = {
                element: a,
                isDehydrated: !1,
                cache: m.cache,
                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                transitions: m.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              (u = br(Error(i(423)), t)), (t = vf(e, t, a, s, u));
              break e;
            } else if (a !== u) {
              (u = br(Error(i(424)), t)), (t = vf(e, t, a, s, u));
              break e;
            } else
              for (
                mt = yn(t.stateNode.containerInfo.firstChild),
                  pt = t,
                  be = !0,
                  Nt = null,
                  s = Td(t, null, a, s),
                  t.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((kr(), a === u)) {
              t = nn(e, t, s);
              break e;
            }
            tt(e, t, a, s);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Od(t),
          e === null && Va(t),
          (a = t.type),
          (u = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (m = u.children),
          La(a, u) ? (m = null) : d !== null && La(a, d) && (t.flags |= 32),
          mf(e, t),
          tt(e, t, m, s),
          t.child
        );
      case 6:
        return e === null && Va(t), null;
      case 13:
        return wf(e, t, s);
      case 4:
        return (
          Za(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Sr(t, null, a, s)) : tt(e, t, a, s),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Rt(a, u)),
          df(e, t, a, u, s)
        );
      case 7:
        return tt(e, t, t.pendingProps, s), t.child;
      case 8:
        return tt(e, t, t.pendingProps.children, s), t.child;
      case 12:
        return tt(e, t, t.pendingProps.children, s), t.child;
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (u = t.pendingProps),
            (d = t.memoizedProps),
            (m = u.value),
            xe(js, a._currentValue),
            (a._currentValue = m),
            d !== null)
          )
            if (bt(d.value, m)) {
              if (d.children === u.children && !st.current) {
                t = nn(e, t, s);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  m = d.child;
                  for (var x = w.firstContext; x !== null; ) {
                    if (x.context === a) {
                      if (d.tag === 1) {
                        (x = tn(-1, s & -s)), (x.tag = 2);
                        var j = d.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var M = j.pending;
                          M === null
                            ? (x.next = x)
                            : ((x.next = M.next), (M.next = x)),
                            (j.pending = x);
                        }
                      }
                      (d.lanes |= s),
                        (x = d.alternate),
                        x !== null && (x.lanes |= s),
                        Ja(d.return, s, t),
                        (w.lanes |= s);
                      break;
                    }
                    x = x.next;
                  }
                } else if (d.tag === 10) m = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((m = d.return), m === null)) throw Error(i(341));
                  (m.lanes |= s),
                    (w = m.alternate),
                    w !== null && (w.lanes |= s),
                    Ja(m, s, t),
                    (m = d.sibling);
                } else m = d.child;
                if (m !== null) m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === t) {
                      m = null;
                      break;
                    }
                    if (((d = m.sibling), d !== null)) {
                      (d.return = m.return), (m = d);
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          tt(e, t, u.children, s), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (a = t.pendingProps.children),
          _r(t, s),
          (u = kt(u)),
          (a = a(u)),
          (t.flags |= 1),
          tt(e, t, a, s),
          t.child
        );
      case 14:
        return (
          (a = t.type),
          (u = Rt(a, t.pendingProps)),
          (u = Rt(a.type, u)),
          ff(e, t, a, u, s)
        );
      case 15:
        return hf(e, t, t.type, t.pendingProps, s);
      case 17:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Rt(a, u)),
          Vs(e, t),
          (t.tag = 1),
          ot(a) ? ((e = !0), bs(t)) : (e = !1),
          _r(t, s),
          rf(t, a, u),
          dl(t, a, u, s),
          ml(null, t, a, !0, e, s)
        );
      case 19:
        return kf(e, t, s);
      case 22:
        return pf(e, t, s);
    }
    throw Error(i(156, t.tag));
  };
  function Wf(e, t) {
    return Ec(e, t);
  }
  function Vg(e, t, s, a) {
    (this.tag = e),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function _t(e, t, s, a) {
    return new Vg(e, t, s, a);
  }
  function Ll(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Wg(e) {
    if (typeof e == "function") return Ll(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Xe)) return 11;
      if (e === Se) return 14;
    }
    return 2;
  }
  function Rn(e, t) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = _t(e.tag, t, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = t),
          (s.type = e.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = e.flags & 14680064),
      (s.childLanes = e.childLanes),
      (s.lanes = e.lanes),
      (s.child = e.child),
      (s.memoizedProps = e.memoizedProps),
      (s.memoizedState = e.memoizedState),
      (s.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (s.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      s
    );
  }
  function to(e, t, s, a, u, d) {
    var m = 2;
    if (((a = e), typeof e == "function")) Ll(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else
      e: switch (e) {
        case se:
          return Yn(s.children, u, d, t);
        case pe:
          (m = 8), (u |= 8);
          break;
        case he:
          return (
            (e = _t(12, s, t, u | 2)), (e.elementType = he), (e.lanes = d), e
          );
        case et:
          return (e = _t(13, s, t, u)), (e.elementType = et), (e.lanes = d), e;
        case it:
          return (e = _t(19, s, t, u)), (e.elementType = it), (e.lanes = d), e;
        case ue:
          return no(s, u, d, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ke:
                m = 10;
                break e;
              case Ze:
                m = 9;
                break e;
              case Xe:
                m = 11;
                break e;
              case Se:
                m = 14;
                break e;
              case qe:
                (m = 16), (a = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = _t(m, s, t, u)), (t.elementType = e), (t.type = a), (t.lanes = d), t
    );
  }
  function Yn(e, t, s, a) {
    return (e = _t(7, e, a, t)), (e.lanes = s), e;
  }
  function no(e, t, s, a) {
    return (
      (e = _t(22, e, a, t)),
      (e.elementType = ue),
      (e.lanes = s),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Dl(e, t, s) {
    return (e = _t(6, e, null, t)), (e.lanes = s), e;
  }
  function Ml(e, t, s) {
    return (
      (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = s),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function qg(e, t, s, a, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ca(0)),
      (this.expirationTimes = ca(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ca(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Fl(e, t, s, a, u, d, m, w, x) {
    return (
      (e = new qg(e, t, s, w, x)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = _t(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: a,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ya(d),
      e
    );
  }
  function Kg(e, t, s) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: re,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: s,
    };
  }
  function qf(e) {
    if (!e) return wn;
    e = e._reactInternals;
    e: {
      if (Un(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ot(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (ot(s)) return wd(e, s, t);
    }
    return t;
  }
  function Kf(e, t, s, a, u, d, m, w, x) {
    return (
      (e = Fl(s, a, !0, e, u, d, m, w, x)),
      (e.context = qf(null)),
      (s = e.current),
      (a = nt()),
      (u = bn(s)),
      (d = tn(a, u)),
      (d.callback = t ?? null),
      Sn(s, d, u),
      (e.current.lanes = u),
      Yr(e, u, a),
      ut(e, a),
      e
    );
  }
  function ro(e, t, s, a) {
    var u = t.current,
      d = nt(),
      m = bn(u);
    return (
      (s = qf(s)),
      t.context === null ? (t.context = s) : (t.pendingContext = s),
      (t = tn(d, m)),
      (t.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (t.callback = a),
      (e = Sn(u, t, m)),
      e !== null && (It(e, u, m, d), Os(e, u, m)),
      m
    );
  }
  function io(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < t ? s : t;
    }
  }
  function Ul(e, t) {
    Gf(e, t), (e = e.alternate) && Gf(e, t);
  }
  function Gg() {
    return null;
  }
  var Jf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Bl(e) {
    this._internalRoot = e;
  }
  (so.prototype.render = Bl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      ro(e, t, null, null);
    }),
    (so.prototype.unmount = Bl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Gn(function () {
            ro(null, e, null, null);
          }),
            (t[Qt] = null);
        }
      });
  function so(e) {
    this._internalRoot = e;
  }
  so.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ic();
      e = { blockedOn: null, target: e, priority: t };
      for (var s = 0; s < pn.length && t !== 0 && t < pn[s].priority; s++);
      pn.splice(s, 0, e), s === 0 && Oc(e);
    }
  };
  function zl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function oo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Qf() {}
  function Jg(e, t, s, a, u) {
    if (u) {
      if (typeof a == "function") {
        var d = a;
        a = function () {
          var j = io(m);
          d.call(j);
        };
      }
      var m = Kf(t, a, e, 0, null, !1, !1, "", Qf);
      return (
        (e._reactRootContainer = m),
        (e[Qt] = m.current),
        di(e.nodeType === 8 ? e.parentNode : e),
        Gn(),
        m
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof a == "function") {
      var w = a;
      a = function () {
        var j = io(x);
        w.call(j);
      };
    }
    var x = Fl(e, 0, !1, null, null, !1, !1, "", Qf);
    return (
      (e._reactRootContainer = x),
      (e[Qt] = x.current),
      di(e.nodeType === 8 ? e.parentNode : e),
      Gn(function () {
        ro(t, x, s, a);
      }),
      x
    );
  }
  function ao(e, t, s, a, u) {
    var d = s._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof u == "function") {
        var w = u;
        u = function () {
          var x = io(m);
          w.call(x);
        };
      }
      ro(t, m, e, u);
    } else m = Jg(s, t, e, u, a);
    return io(m);
  }
  (Tc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var s = Qr(t.pendingLanes);
          s !== 0 &&
            (da(t, s | 1), ut(t, Ae()), !(le & 6) && ((Tr = Ae() + 500), xn()));
        }
        break;
      case 13:
        Gn(function () {
          var a = en(e, 1);
          if (a !== null) {
            var u = nt();
            It(a, e, 1, u);
          }
        }),
          Ul(e, 1);
    }
  }),
    (fa = function (e) {
      if (e.tag === 13) {
        var t = en(e, 134217728);
        if (t !== null) {
          var s = nt();
          It(t, e, 134217728, s);
        }
        Ul(e, 134217728);
      }
    }),
    (Pc = function (e) {
      if (e.tag === 13) {
        var t = bn(e),
          s = en(e, t);
        if (s !== null) {
          var a = nt();
          It(s, e, t, a);
        }
        Ul(e, t);
      }
    }),
    (Ic = function () {
      return ge;
    }),
    (jc = function (e, t) {
      var s = ge;
      try {
        return (ge = e), t();
      } finally {
        ge = s;
      }
    }),
    (ia = function (e, t, s) {
      switch (t) {
        case "input":
          if ((Qo(e, s), (t = s.name), s.type === "radio" && t != null)) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < s.length;
              t++
            ) {
              var a = s[t];
              if (a !== e && a.form === e.form) {
                var u = _s(a);
                if (!u) throw Error(i(90));
                nc(a), Qo(a, u);
              }
            }
          }
          break;
        case "textarea":
          ac(e, s);
          break;
        case "select":
          (t = s.value), t != null && or(e, !!s.multiple, t, !1);
      }
    }),
    (gc = jl),
    (yc = Gn);
  var Qg = { usingClientEntryPoint: !1, Events: [pi, gr, _s, pc, mc, jl] },
    Ri = {
      findFiberByHostInstance: Bn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Yg = {
      bundleType: Ri.bundleType,
      version: Ri.version,
      rendererPackageName: Ri.rendererPackageName,
      rendererConfig: Ri.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = kc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ri.findFiberByHostInstance || Gg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lo.isDisabled && lo.supportsFiber)
      try {
        (ss = lo.inject(Yg)), (Ft = lo);
      } catch {}
  }
  return (
    (ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qg),
    (ct.createPortal = function (e, t) {
      var s =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zl(t)) throw Error(i(200));
      return Kg(e, t, null, s);
    }),
    (ct.createRoot = function (e, t) {
      if (!zl(e)) throw Error(i(299));
      var s = !1,
        a = "",
        u = Jf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (s = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = Fl(e, 1, !1, null, null, s, !1, a, u)),
        (e[Qt] = t.current),
        di(e.nodeType === 8 ? e.parentNode : e),
        new Bl(t)
      );
    }),
    (ct.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = kc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (ct.flushSync = function (e) {
      return Gn(e);
    }),
    (ct.hydrate = function (e, t, s) {
      if (!oo(t)) throw Error(i(200));
      return ao(null, e, t, !0, s);
    }),
    (ct.hydrateRoot = function (e, t, s) {
      if (!zl(e)) throw Error(i(405));
      var a = (s != null && s.hydratedSources) || null,
        u = !1,
        d = "",
        m = Jf;
      if (
        (s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (d = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (m = s.onRecoverableError)),
        (t = Kf(t, null, e, 1, s ?? null, u, !1, d, m)),
        (e[Qt] = t.current),
        di(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          (s = a[e]),
            (u = s._getVersion),
            (u = u(s._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [s, u])
              : t.mutableSourceEagerHydrationData.push(s, u);
      return new so(t);
    }),
    (ct.render = function (e, t, s) {
      if (!oo(t)) throw Error(i(200));
      return ao(null, e, t, !1, s);
    }),
    (ct.unmountComponentAtNode = function (e) {
      if (!oo(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Gn(function () {
            ao(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Qt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ct.unstable_batchedUpdates = jl),
    (ct.unstable_renderSubtreeIntoContainer = function (e, t, s, a) {
      if (!oo(s)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return ao(e, t, s, !1, a);
    }),
    (ct.version = "18.3.1-next-f1338f8080-20240426"),
    ct
  );
}
var ih;
function sy() {
  if (ih) return Vl.exports;
  ih = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (n) {
        console.error(n);
      }
  }
  return r(), (Vl.exports = iy()), Vl.exports;
}
var sh;
function oy() {
  if (sh) return uo;
  sh = 1;
  var r = sy();
  return (uo.createRoot = r.createRoot), (uo.hydrateRoot = r.hydrateRoot), uo;
}
var ay = oy(),
  Pi = {},
  oh;
function ly() {
  if (oh) return Pi;
  (oh = 1),
    Object.defineProperty(Pi, "__esModule", { value: !0 }),
    (Pi.parse = f),
    (Pi.serialize = y);
  const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    n = /^[\u0021-\u003A\u003C-\u007E]*$/,
    i =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    o = /^[\u0020-\u003A\u003D-\u007E]*$/,
    l = Object.prototype.toString,
    c = (() => {
      const S = function () {};
      return (S.prototype = Object.create(null)), S;
    })();
  function f(S, P) {
    const k = new c(),
      T = S.length;
    if (T < 2) return k;
    const R = (P == null ? void 0 : P.decode) || v;
    let O = 0;
    do {
      const F = S.indexOf("=", O);
      if (F === -1) break;
      const $ = S.indexOf(";", O),
        z = $ === -1 ? T : $;
      if (F > z) {
        O = S.lastIndexOf(";", F - 1) + 1;
        continue;
      }
      const X = g(S, O, F),
        re = p(S, F, X),
        se = S.slice(X, re);
      if (k[se] === void 0) {
        let pe = g(S, F + 1, z),
          he = p(S, z, pe);
        const ke = R(S.slice(pe, he));
        k[se] = ke;
      }
      O = z + 1;
    } while (O < T);
    return k;
  }
  function g(S, P, k) {
    do {
      const T = S.charCodeAt(P);
      if (T !== 32 && T !== 9) return P;
    } while (++P < k);
    return k;
  }
  function p(S, P, k) {
    for (; P > k; ) {
      const T = S.charCodeAt(--P);
      if (T !== 32 && T !== 9) return P + 1;
    }
    return k;
  }
  function y(S, P, k) {
    const T = (k == null ? void 0 : k.encode) || encodeURIComponent;
    if (!r.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
    const R = T(P);
    if (!n.test(R)) throw new TypeError(`argument val is invalid: ${P}`);
    let O = S + "=" + R;
    if (!k) return O;
    if (k.maxAge !== void 0) {
      if (!Number.isInteger(k.maxAge))
        throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);
      O += "; Max-Age=" + k.maxAge;
    }
    if (k.domain) {
      if (!i.test(k.domain))
        throw new TypeError(`option domain is invalid: ${k.domain}`);
      O += "; Domain=" + k.domain;
    }
    if (k.path) {
      if (!o.test(k.path))
        throw new TypeError(`option path is invalid: ${k.path}`);
      O += "; Path=" + k.path;
    }
    if (k.expires) {
      if (!E(k.expires) || !Number.isFinite(k.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${k.expires}`);
      O += "; Expires=" + k.expires.toUTCString();
    }
    if (
      (k.httpOnly && (O += "; HttpOnly"),
      k.secure && (O += "; Secure"),
      k.partitioned && (O += "; Partitioned"),
      k.priority)
    )
      switch (
        typeof k.priority == "string" ? k.priority.toLowerCase() : void 0
      ) {
        case "low":
          O += "; Priority=Low";
          break;
        case "medium":
          O += "; Priority=Medium";
          break;
        case "high":
          O += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${k.priority}`);
      }
    if (k.sameSite)
      switch (
        typeof k.sameSite == "string" ? k.sameSite.toLowerCase() : k.sameSite
      ) {
        case !0:
        case "strict":
          O += "; SameSite=Strict";
          break;
        case "lax":
          O += "; SameSite=Lax";
          break;
        case "none":
          O += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${k.sameSite}`);
      }
    return O;
  }
  function v(S) {
    if (S.indexOf("%") === -1) return S;
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }
  function E(S) {
    return l.call(S) === "[object Date]";
  }
  return Pi;
}
ly();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ah = "popstate";
function uy(r = {}) {
  function n(o, l) {
    let { pathname: c, search: f, hash: g } = o.location;
    return du(
      "",
      { pathname: c, search: f, hash: g },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function i(o, l) {
    return typeof l == "string" ? l : Di(l);
  }
  return dy(n, i, null, r);
}
function Ne(r, n) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(n);
}
function Lt(r, n) {
  if (!r) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function cy() {
  return Math.random().toString(36).substring(2, 10);
}
function lh(r, n) {
  return { usr: r.state, key: r.key, idx: n };
}
function du(r, n, i = null, o) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? Fr(n) : n),
    state: i,
    key: (n && n.key) || o || cy(),
  };
}
function Di({ pathname: r = "/", search: n = "", hash: i = "" }) {
  return (
    n && n !== "?" && (r += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i),
    r
  );
}
function Fr(r) {
  let n = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && ((n.hash = r.substring(i)), (r = r.substring(0, i)));
    let o = r.indexOf("?");
    o >= 0 && ((n.search = r.substring(o)), (r = r.substring(0, o))),
      r && (n.pathname = r);
  }
  return n;
}
function dy(r, n, i, o = {}) {
  let { window: l = document.defaultView, v5Compat: c = !1 } = o,
    f = l.history,
    g = "POP",
    p = null,
    y = v();
  y == null && ((y = 0), f.replaceState({ ...f.state, idx: y }, ""));
  function v() {
    return (f.state || { idx: null }).idx;
  }
  function E() {
    g = "POP";
    let R = v(),
      O = R == null ? null : R - y;
    (y = R), p && p({ action: g, location: T.location, delta: O });
  }
  function S(R, O) {
    g = "PUSH";
    let F = du(T.location, R, O);
    y = v() + 1;
    let $ = lh(F, y),
      z = T.createHref(F);
    try {
      f.pushState($, "", z);
    } catch (X) {
      if (X instanceof DOMException && X.name === "DataCloneError") throw X;
      l.location.assign(z);
    }
    c && p && p({ action: g, location: T.location, delta: 1 });
  }
  function P(R, O) {
    g = "REPLACE";
    let F = du(T.location, R, O);
    y = v();
    let $ = lh(F, y),
      z = T.createHref(F);
    f.replaceState($, "", z),
      c && p && p({ action: g, location: T.location, delta: 0 });
  }
  function k(R) {
    let O = l.location.origin !== "null" ? l.location.origin : l.location.href,
      F = typeof R == "string" ? R : Di(R);
    return (
      (F = F.replace(/ $/, "%20")),
      Ne(
        O,
        `No window.location.(origin|href) available to create URL for href: ${F}`
      ),
      new URL(F, O)
    );
  }
  let T = {
    get action() {
      return g;
    },
    get location() {
      return r(l, f);
    },
    listen(R) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ah, E),
        (p = R),
        () => {
          l.removeEventListener(ah, E), (p = null);
        }
      );
    },
    createHref(R) {
      return n(l, R);
    },
    createURL: k,
    encodeLocation(R) {
      let O = k(R);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: S,
    replace: P,
    go(R) {
      return f.go(R);
    },
  };
  return T;
}
function hp(r, n, i = "/") {
  return fy(r, n, i, !1);
}
function fy(r, n, i, o) {
  let l = typeof n == "string" ? Fr(n) : n,
    c = Dn(l.pathname || "/", i);
  if (c == null) return null;
  let f = pp(r);
  hy(f);
  let g = null;
  for (let p = 0; g == null && p < f.length; ++p) {
    let y = _y(c);
    g = Sy(f[p], y, o);
  }
  return g;
}
function pp(r, n = [], i = [], o = "") {
  let l = (c, f, g) => {
    let p = {
      relativePath: g === void 0 ? c.path || "" : g,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    p.relativePath.startsWith("/") &&
      (Ne(
        p.relativePath.startsWith(o),
        `Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(o.length)));
    let y = ln([o, p.relativePath]),
      v = i.concat(p);
    c.children &&
      c.children.length > 0 &&
      (Ne(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      pp(c.children, n, v, y)),
      !(c.path == null && !c.index) &&
        n.push({ path: y, score: xy(y, c.index), routesMeta: v });
  };
  return (
    r.forEach((c, f) => {
      var g;
      if (c.path === "" || !((g = c.path) != null && g.includes("?"))) l(c, f);
      else for (let p of mp(c.path)) l(c, f, p);
    }),
    n
  );
}
function mp(r) {
  let n = r.split("/");
  if (n.length === 0) return [];
  let [i, ...o] = n,
    l = i.endsWith("?"),
    c = i.replace(/\?$/, "");
  if (o.length === 0) return l ? [c, ""] : [c];
  let f = mp(o.join("/")),
    g = [];
  return (
    g.push(...f.map((p) => (p === "" ? c : [c, p].join("/")))),
    l && g.push(...f),
    g.map((p) => (r.startsWith("/") && p === "" ? "/" : p))
  );
}
function hy(r) {
  r.sort((n, i) =>
    n.score !== i.score
      ? i.score - n.score
      : ky(
          n.routesMeta.map((o) => o.childrenIndex),
          i.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
var py = /^:[\w-]+$/,
  my = 3,
  gy = 2,
  yy = 1,
  vy = 10,
  wy = -2,
  uh = (r) => r === "*";
function xy(r, n) {
  let i = r.split("/"),
    o = i.length;
  return (
    i.some(uh) && (o += wy),
    n && (o += gy),
    i
      .filter((l) => !uh(l))
      .reduce((l, c) => l + (py.test(c) ? my : c === "" ? yy : vy), o)
  );
}
function ky(r, n) {
  return r.length === n.length && r.slice(0, -1).every((o, l) => o === n[l])
    ? r[r.length - 1] - n[n.length - 1]
    : 0;
}
function Sy(r, n, i = !1) {
  let { routesMeta: o } = r,
    l = {},
    c = "/",
    f = [];
  for (let g = 0; g < o.length; ++g) {
    let p = o[g],
      y = g === o.length - 1,
      v = c === "/" ? n : n.slice(c.length) || "/",
      E = bo(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
        v
      ),
      S = p.route;
    if (
      (!E &&
        y &&
        i &&
        !o[o.length - 1].route.index &&
        (E = bo(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          v
        )),
      !E)
    )
      return null;
    Object.assign(l, E.params),
      f.push({
        params: l,
        pathname: ln([c, E.pathname]),
        pathnameBase: Ry(ln([c, E.pathnameBase])),
        route: S,
      }),
      E.pathnameBase !== "/" && (c = ln([c, E.pathnameBase]));
  }
  return f;
}
function bo(r, n) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, o] = Ey(r.path, r.caseSensitive, r.end),
    l = n.match(i);
  if (!l) return null;
  let c = l[0],
    f = c.replace(/(.)\/+$/, "$1"),
    g = l.slice(1);
  return {
    params: o.reduce((y, { paramName: v, isOptional: E }, S) => {
      if (v === "*") {
        let k = g[S] || "";
        f = c.slice(0, c.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const P = g[S];
      return (
        E && !P ? (y[v] = void 0) : (y[v] = (P || "").replace(/%2F/g, "/")), y
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: r,
  };
}
function Ey(r, n = !1, i = !0) {
  Lt(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let o = [],
    l =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, g, p) => (
            o.push({ paramName: g, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    r.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (l += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (l += "\\/*$")
      : r !== "" && r !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, n ? void 0 : "i"), o]
  );
}
function _y(r) {
  try {
    return r
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      Lt(
        !1,
        `The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
      ),
      r
    );
  }
}
function Dn(r, n) {
  if (n === "/") return r;
  if (!r.toLowerCase().startsWith(n.toLowerCase())) return null;
  let i = n.endsWith("/") ? n.length - 1 : n.length,
    o = r.charAt(i);
  return o && o !== "/" ? null : r.slice(i) || "/";
}
function Cy(r, n = "/") {
  let {
    pathname: i,
    search: o = "",
    hash: l = "",
  } = typeof r == "string" ? Fr(r) : r;
  return {
    pathname: i ? (i.startsWith("/") ? i : by(i, n)) : n,
    search: Ty(o),
    hash: Py(l),
  };
}
function by(r, n) {
  let i = n.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((l) => {
      l === ".." ? i.length > 1 && i.pop() : l !== "." && i.push(l);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function Kl(r, n, i, o) {
  return `Cannot include a '${r}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ny(r) {
  return r.filter(
    (n, i) => i === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function ju(r) {
  let n = Ny(r);
  return n.map((i, o) => (o === n.length - 1 ? i.pathname : i.pathnameBase));
}
function Au(r, n, i, o = !1) {
  let l;
  typeof r == "string"
    ? (l = Fr(r))
    : ((l = { ...r }),
      Ne(
        !l.pathname || !l.pathname.includes("?"),
        Kl("?", "pathname", "search", l)
      ),
      Ne(
        !l.pathname || !l.pathname.includes("#"),
        Kl("#", "pathname", "hash", l)
      ),
      Ne(!l.search || !l.search.includes("#"), Kl("#", "search", "hash", l)));
  let c = r === "" || l.pathname === "",
    f = c ? "/" : l.pathname,
    g;
  if (f == null) g = i;
  else {
    let E = n.length - 1;
    if (!o && f.startsWith("..")) {
      let S = f.split("/");
      for (; S[0] === ".."; ) S.shift(), (E -= 1);
      l.pathname = S.join("/");
    }
    g = E >= 0 ? n[E] : "/";
  }
  let p = Cy(l, g),
    y = f && f !== "/" && f.endsWith("/"),
    v = (c || f === ".") && i.endsWith("/");
  return !p.pathname.endsWith("/") && (y || v) && (p.pathname += "/"), p;
}
var ln = (r) => r.join("/").replace(/\/\/+/g, "/"),
  Ry = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ty = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  Py = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r);
function Iy(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
var gp = ["POST", "PUT", "PATCH", "DELETE"];
new Set(gp);
var jy = ["GET", ...gp];
new Set(jy);
var Ur = b.createContext(null);
Ur.displayName = "DataRouter";
var Do = b.createContext(null);
Do.displayName = "DataRouterState";
var yp = b.createContext({ isTransitioning: !1 });
yp.displayName = "ViewTransition";
var Ay = b.createContext(new Map());
Ay.displayName = "Fetchers";
var Oy = b.createContext(null);
Oy.displayName = "Await";
var Dt = b.createContext(null);
Dt.displayName = "Navigation";
var Hi = b.createContext(null);
Hi.displayName = "Location";
var Gt = b.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Gt.displayName = "Route";
var Ou = b.createContext(null);
Ou.displayName = "RouteError";
function Ly(r, { relative: n } = {}) {
  Ne(
    Br(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: o } = b.useContext(Dt),
    { hash: l, pathname: c, search: f } = Vi(r, { relative: n }),
    g = c;
  return (
    i !== "/" && (g = c === "/" ? i : ln([i, c])),
    o.createHref({ pathname: g, search: f, hash: l })
  );
}
function Br() {
  return b.useContext(Hi) != null;
}
function Jt() {
  return (
    Ne(
      Br(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    b.useContext(Hi).location
  );
}
var vp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function wp(r) {
  b.useContext(Dt).static || b.useLayoutEffect(r);
}
function $i() {
  let { isDataRoute: r } = b.useContext(Gt);
  return r ? Gy() : Dy();
}
function Dy() {
  Ne(
    Br(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = b.useContext(Ur),
    { basename: n, navigator: i } = b.useContext(Dt),
    { matches: o } = b.useContext(Gt),
    { pathname: l } = Jt(),
    c = JSON.stringify(ju(o)),
    f = b.useRef(!1);
  return (
    wp(() => {
      f.current = !0;
    }),
    b.useCallback(
      (p, y = {}) => {
        if ((Lt(f.current, vp), !f.current)) return;
        if (typeof p == "number") {
          i.go(p);
          return;
        }
        let v = Au(p, JSON.parse(c), l, y.relative === "path");
        r == null &&
          n !== "/" &&
          (v.pathname = v.pathname === "/" ? n : ln([n, v.pathname])),
          (y.replace ? i.replace : i.push)(v, y.state, y);
      },
      [n, i, c, l, r]
    )
  );
}
b.createContext(null);
function Vi(r, { relative: n } = {}) {
  let { matches: i } = b.useContext(Gt),
    { pathname: o } = Jt(),
    l = JSON.stringify(ju(i));
  return b.useMemo(() => Au(r, JSON.parse(l), o, n === "path"), [r, l, o, n]);
}
function My(r, n) {
  return xp(r, n);
}
function xp(r, n, i, o) {
  var O;
  Ne(
    Br(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = b.useContext(Dt),
    { matches: c } = b.useContext(Gt),
    f = c[c.length - 1],
    g = f ? f.params : {},
    p = f ? f.pathname : "/",
    y = f ? f.pathnameBase : "/",
    v = f && f.route;
  {
    let F = (v && v.path) || "";
    kp(
      p,
      !v || F.endsWith("*") || F.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${
        F === "/" ? "*" : `${F}/*`
      }">.`
    );
  }
  let E = Jt(),
    S;
  if (n) {
    let F = typeof n == "string" ? Fr(n) : n;
    Ne(
      y === "/" || ((O = F.pathname) == null ? void 0 : O.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${F.pathname}" was given in the \`location\` prop.`
    ),
      (S = F);
  } else S = E;
  let P = S.pathname || "/",
    k = P;
  if (y !== "/") {
    let F = y.replace(/^\//, "").split("/");
    k = "/" + P.replace(/^\//, "").split("/").slice(F.length).join("/");
  }
  let T = hp(r, { pathname: k });
  Lt(
    v || T != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `
  ),
    Lt(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let R = Hy(
    T &&
      T.map((F) =>
        Object.assign({}, F, {
          params: Object.assign({}, g, F.params),
          pathname: ln([
            y,
            l.encodeLocation
              ? l.encodeLocation(F.pathname).pathname
              : F.pathname,
          ]),
          pathnameBase:
            F.pathnameBase === "/"
              ? y
              : ln([
                  y,
                  l.encodeLocation
                    ? l.encodeLocation(F.pathnameBase).pathname
                    : F.pathnameBase,
                ]),
        })
      ),
    c,
    i,
    o
  );
  return n && R
    ? b.createElement(
        Hi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...S,
            },
            navigationType: "POP",
          },
        },
        R
      )
    : R;
}
function Fy() {
  let r = Ky(),
    n = Iy(r)
      ? `${r.status} ${r.statusText}`
      : r instanceof Error
      ? r.message
      : JSON.stringify(r),
    i = r instanceof Error ? r.stack : null,
    o = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: o },
    c = { padding: "2px 4px", backgroundColor: o },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", r),
    (f = b.createElement(
      b.Fragment,
      null,
      b.createElement("p", null, "💿 Hey developer 👋"),
      b.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        b.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        b.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    b.createElement(
      b.Fragment,
      null,
      b.createElement("h2", null, "Unexpected Application Error!"),
      b.createElement("h3", { style: { fontStyle: "italic" } }, n),
      i ? b.createElement("pre", { style: l }, i) : null,
      f
    )
  );
}
var Uy = b.createElement(Fy, null),
  By = class extends b.Component {
    constructor(r) {
      super(r),
        (this.state = {
          location: r.location,
          revalidation: r.revalidation,
          error: r.error,
        });
    }
    static getDerivedStateFromError(r) {
      return { error: r };
    }
    static getDerivedStateFromProps(r, n) {
      return n.location !== r.location ||
        (n.revalidation !== "idle" && r.revalidation === "idle")
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : n.error,
            location: n.location,
            revalidation: r.revalidation || n.revalidation,
          };
    }
    componentDidCatch(r, n) {
      console.error(
        "React Router caught the following error during render",
        r,
        n
      );
    }
    render() {
      return this.state.error !== void 0
        ? b.createElement(
            Gt.Provider,
            { value: this.props.routeContext },
            b.createElement(Ou.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function zy({ routeContext: r, match: n, children: i }) {
  let o = b.useContext(Ur);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(Gt.Provider, { value: r }, i)
  );
}
function Hy(r, n = [], i = null, o = null) {
  if (r == null) {
    if (!i) return null;
    if (i.errors) r = i.matches;
    else if (n.length === 0 && !i.initialized && i.matches.length > 0)
      r = i.matches;
    else return null;
  }
  let l = r,
    c = i == null ? void 0 : i.errors;
  if (c != null) {
    let p = l.findIndex(
      (y) => y.route.id && (c == null ? void 0 : c[y.route.id]) !== void 0
    );
    Ne(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, p + 1)));
  }
  let f = !1,
    g = -1;
  if (i)
    for (let p = 0; p < l.length; p++) {
      let y = l[p];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (g = p),
        y.route.id)
      ) {
        let { loaderData: v, errors: E } = i,
          S =
            y.route.loader &&
            !v.hasOwnProperty(y.route.id) &&
            (!E || E[y.route.id] === void 0);
        if (y.route.lazy || S) {
          (f = !0), g >= 0 ? (l = l.slice(0, g + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((p, y, v) => {
    let E,
      S = !1,
      P = null,
      k = null;
    i &&
      ((E = c && y.route.id ? c[y.route.id] : void 0),
      (P = y.route.errorElement || Uy),
      f &&
        (g < 0 && v === 0
          ? (kp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (S = !0),
            (k = null))
          : g === v &&
            ((S = !0), (k = y.route.hydrateFallbackElement || null))));
    let T = n.concat(l.slice(0, v + 1)),
      R = () => {
        let O;
        return (
          E
            ? (O = P)
            : S
            ? (O = k)
            : y.route.Component
            ? (O = b.createElement(y.route.Component, null))
            : y.route.element
            ? (O = y.route.element)
            : (O = p),
          b.createElement(zy, {
            match: y,
            routeContext: { outlet: p, matches: T, isDataRoute: i != null },
            children: O,
          })
        );
      };
    return i && (y.route.ErrorBoundary || y.route.errorElement || v === 0)
      ? b.createElement(By, {
          location: i.location,
          revalidation: i.revalidation,
          component: P,
          error: E,
          children: R(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : R();
  }, null);
}
function Lu(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $y(r) {
  let n = b.useContext(Ur);
  return Ne(n, Lu(r)), n;
}
function Vy(r) {
  let n = b.useContext(Do);
  return Ne(n, Lu(r)), n;
}
function Wy(r) {
  let n = b.useContext(Gt);
  return Ne(n, Lu(r)), n;
}
function Du(r) {
  let n = Wy(r),
    i = n.matches[n.matches.length - 1];
  return (
    Ne(
      i.route.id,
      `${r} can only be used on routes that contain a unique "id"`
    ),
    i.route.id
  );
}
function qy() {
  return Du("useRouteId");
}
function Ky() {
  var o;
  let r = b.useContext(Ou),
    n = Vy("useRouteError"),
    i = Du("useRouteError");
  return r !== void 0 ? r : (o = n.errors) == null ? void 0 : o[i];
}
function Gy() {
  let { router: r } = $y("useNavigate"),
    n = Du("useNavigate"),
    i = b.useRef(!1);
  return (
    wp(() => {
      i.current = !0;
    }),
    b.useCallback(
      async (l, c = {}) => {
        Lt(i.current, vp),
          i.current &&
            (typeof l == "number"
              ? r.navigate(l)
              : await r.navigate(l, { fromRouteId: n, ...c }));
      },
      [r, n]
    )
  );
}
var ch = {};
function kp(r, n, i) {
  !n && !ch[r] && ((ch[r] = !0), Lt(!1, i));
}
b.memo(Jy);
function Jy({ routes: r, future: n, state: i }) {
  return xp(r, void 0, i, n);
}
function Gl({ to: r, replace: n, state: i, relative: o }) {
  Ne(
    Br(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: l } = b.useContext(Dt);
  Lt(
    !l,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: c } = b.useContext(Gt),
    { pathname: f } = Jt(),
    g = $i(),
    p = Au(r, ju(c), f, o === "path"),
    y = JSON.stringify(p);
  return (
    b.useEffect(() => {
      g(JSON.parse(y), { replace: n, state: i, relative: o });
    }, [g, y, o, n, i]),
    null
  );
}
function fu(r) {
  Ne(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Qy({
  basename: r = "/",
  children: n = null,
  location: i,
  navigationType: o = "POP",
  navigator: l,
  static: c = !1,
}) {
  Ne(
    !Br(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = r.replace(/^\/*/, "/"),
    g = b.useMemo(
      () => ({ basename: f, navigator: l, static: c, future: {} }),
      [f, l, c]
    );
  typeof i == "string" && (i = Fr(i));
  let {
      pathname: p = "/",
      search: y = "",
      hash: v = "",
      state: E = null,
      key: S = "default",
    } = i,
    P = b.useMemo(() => {
      let k = Dn(p, f);
      return k == null
        ? null
        : {
            location: { pathname: k, search: y, hash: v, state: E, key: S },
            navigationType: o,
          };
    }, [f, p, y, v, E, S, o]);
  return (
    Lt(
      P != null,
      `<Router basename="${f}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    P == null
      ? null
      : b.createElement(
          Dt.Provider,
          { value: g },
          b.createElement(Hi.Provider, { children: n, value: P })
        )
  );
}
function Yy({ children: r, location: n }) {
  return My(hu(r), n);
}
function hu(r, n = []) {
  let i = [];
  return (
    b.Children.forEach(r, (o, l) => {
      if (!b.isValidElement(o)) return;
      let c = [...n, l];
      if (o.type === b.Fragment) {
        i.push.apply(i, hu(o.props.children, c));
        return;
      }
      Ne(
        o.type === fu,
        `[${
          typeof o.type == "string" ? o.type : o.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ne(
          !o.props.index || !o.props.children,
          "An index route cannot have child routes."
        );
      let f = {
        id: o.props.id || c.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (f.children = hu(o.props.children, c)), i.push(f);
    }),
    i
  );
}
var go = "get",
  yo = "application/x-www-form-urlencoded";
function Mo(r) {
  return r != null && typeof r.tagName == "string";
}
function Zy(r) {
  return Mo(r) && r.tagName.toLowerCase() === "button";
}
function Xy(r) {
  return Mo(r) && r.tagName.toLowerCase() === "form";
}
function ev(r) {
  return Mo(r) && r.tagName.toLowerCase() === "input";
}
function tv(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function nv(r, n) {
  return r.button === 0 && (!n || n === "_self") && !tv(r);
}
var co = null;
function rv() {
  if (co === null)
    try {
      new FormData(document.createElement("form"), 0), (co = !1);
    } catch {
      co = !0;
    }
  return co;
}
var iv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Jl(r) {
  return r != null && !iv.has(r)
    ? (Lt(
        !1,
        `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yo}"`
      ),
      null)
    : r;
}
function sv(r, n) {
  let i, o, l, c, f;
  if (Xy(r)) {
    let g = r.getAttribute("action");
    (o = g ? Dn(g, n) : null),
      (i = r.getAttribute("method") || go),
      (l = Jl(r.getAttribute("enctype")) || yo),
      (c = new FormData(r));
  } else if (Zy(r) || (ev(r) && (r.type === "submit" || r.type === "image"))) {
    let g = r.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = r.getAttribute("formaction") || g.getAttribute("action");
    if (
      ((o = p ? Dn(p, n) : null),
      (i = r.getAttribute("formmethod") || g.getAttribute("method") || go),
      (l =
        Jl(r.getAttribute("formenctype")) ||
        Jl(g.getAttribute("enctype")) ||
        yo),
      (c = new FormData(g, r)),
      !rv())
    ) {
      let { name: y, type: v, value: E } = r;
      if (v === "image") {
        let S = y ? `${y}.` : "";
        c.append(`${S}x`, "0"), c.append(`${S}y`, "0");
      } else y && c.append(y, E);
    }
  } else {
    if (Mo(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (i = go), (o = null), (l = yo), (f = r);
  }
  return (
    c && l === "text/plain" && ((f = c), (c = void 0)),
    { action: o, method: i.toLowerCase(), encType: l, formData: c, body: f }
  );
}
function Mu(r, n) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(n);
}
async function ov(r, n) {
  if (r.id in n) return n[r.id];
  try {
    let i = await import(r.module);
    return (n[r.id] = i), i;
  } catch (i) {
    return (
      console.error(
        `Error loading route module \`${r.module}\`, reloading page...`
      ),
      console.error(i),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function av(r) {
  return r == null
    ? !1
    : r.href == null
    ? r.rel === "preload" &&
      typeof r.imageSrcSet == "string" &&
      typeof r.imageSizes == "string"
    : typeof r.rel == "string" && typeof r.href == "string";
}
async function lv(r, n, i) {
  let o = await Promise.all(
    r.map(async (l) => {
      let c = n.routes[l.route.id];
      if (c) {
        let f = await ov(c, i);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return fv(
    o
      .flat(1)
      .filter(av)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function dh(r, n, i, o, l, c) {
  let f = (p, y) => (i[y] ? p.route.id !== i[y].route.id : !0),
    g = (p, y) => {
      var v;
      return (
        i[y].pathname !== p.pathname ||
        (((v = i[y].route.path) == null ? void 0 : v.endsWith("*")) &&
          i[y].params["*"] !== p.params["*"])
      );
    };
  return c === "assets"
    ? n.filter((p, y) => f(p, y) || g(p, y))
    : c === "data"
    ? n.filter((p, y) => {
        var E;
        let v = o.routes[p.route.id];
        if (!v || !v.hasLoader) return !1;
        if (f(p, y) || g(p, y)) return !0;
        if (p.route.shouldRevalidate) {
          let S = p.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((E = i[0]) == null ? void 0 : E.params) || {},
            nextUrl: new URL(r, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof S == "boolean") return S;
        }
        return !0;
      })
    : [];
}
function uv(r, n) {
  return cv(
    r
      .map((i) => {
        let o = n.routes[i.route.id];
        if (!o) return [];
        let l = [o.module];
        return o.imports && (l = l.concat(o.imports)), l;
      })
      .flat(1)
  );
}
function cv(r) {
  return [...new Set(r)];
}
function dv(r) {
  let n = {},
    i = Object.keys(r).sort();
  for (let o of i) n[o] = r[o];
  return n;
}
function fv(r, n) {
  let i = new Set();
  return (
    new Set(n),
    r.reduce((o, l) => {
      let c = JSON.stringify(dv(l));
      return i.has(c) || (i.add(c), o.push({ key: c, link: l })), o;
    }, [])
  );
}
function hv(r) {
  let n =
    typeof r == "string"
      ? new URL(
          r,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : r;
  return (
    n.pathname === "/"
      ? (n.pathname = "_root.data")
      : (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
    n
  );
}
function pv() {
  let r = b.useContext(Ur);
  return (
    Mu(
      r,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    r
  );
}
function mv() {
  let r = b.useContext(Do);
  return (
    Mu(
      r,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    r
  );
}
var Fu = b.createContext(void 0);
Fu.displayName = "FrameworkContext";
function Sp() {
  let r = b.useContext(Fu);
  return (
    Mu(r, "You must render this element inside a <HydratedRouter> element"), r
  );
}
function gv(r, n) {
  let i = b.useContext(Fu),
    [o, l] = b.useState(!1),
    [c, f] = b.useState(!1),
    {
      onFocus: g,
      onBlur: p,
      onMouseEnter: y,
      onMouseLeave: v,
      onTouchStart: E,
    } = n,
    S = b.useRef(null);
  b.useEffect(() => {
    if ((r === "render" && f(!0), r === "viewport")) {
      let T = (O) => {
          O.forEach((F) => {
            f(F.isIntersecting);
          });
        },
        R = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        S.current && R.observe(S.current),
        () => {
          R.disconnect();
        }
      );
    }
  }, [r]),
    b.useEffect(() => {
      if (o) {
        let T = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [o]);
  let P = () => {
      l(!0);
    },
    k = () => {
      l(!1), f(!1);
    };
  return i
    ? r !== "intent"
      ? [c, S, {}]
      : [
          c,
          S,
          {
            onFocus: Ii(g, P),
            onBlur: Ii(p, k),
            onMouseEnter: Ii(y, P),
            onMouseLeave: Ii(v, k),
            onTouchStart: Ii(E, P),
          },
        ]
    : [!1, S, {}];
}
function Ii(r, n) {
  return (i) => {
    r && r(i), i.defaultPrevented || n(i);
  };
}
function yv({ page: r, ...n }) {
  let { router: i } = pv(),
    o = b.useMemo(() => hp(i.routes, r, i.basename), [i.routes, r, i.basename]);
  return o
    ? b.createElement(wv, { page: r, matches: o, ...n })
    : (console.warn(`Tried to prefetch ${r} but no routes matched.`), null);
}
function vv(r) {
  let { manifest: n, routeModules: i } = Sp(),
    [o, l] = b.useState([]);
  return (
    b.useEffect(() => {
      let c = !1;
      return (
        lv(r, n, i).then((f) => {
          c || l(f);
        }),
        () => {
          c = !0;
        }
      );
    }, [r, n, i]),
    o
  );
}
function wv({ page: r, matches: n, ...i }) {
  let o = Jt(),
    { manifest: l, routeModules: c } = Sp(),
    { loaderData: f, matches: g } = mv(),
    p = b.useMemo(() => dh(r, n, g, l, o, "data"), [r, n, g, l, o]),
    y = b.useMemo(() => dh(r, n, g, l, o, "assets"), [r, n, g, l, o]),
    v = b.useMemo(() => {
      if (r === o.pathname + o.search + o.hash) return [];
      let P = new Set(),
        k = !1;
      if (
        (n.forEach((R) => {
          var F;
          let O = l.routes[R.route.id];
          !O ||
            !O.hasLoader ||
            ((!p.some(($) => $.route.id === R.route.id) &&
              R.route.id in f &&
              (F = c[R.route.id]) != null &&
              F.shouldRevalidate) ||
            O.hasClientLoader
              ? (k = !0)
              : P.add(R.route.id));
        }),
        P.size === 0)
      )
        return [];
      let T = hv(r);
      return (
        k &&
          P.size > 0 &&
          T.searchParams.set(
            "_routes",
            n
              .filter((R) => P.has(R.route.id))
              .map((R) => R.route.id)
              .join(",")
          ),
        [T.pathname + T.search]
      );
    }, [f, o, l, p, n, r, c]),
    E = b.useMemo(() => uv(y, l), [y, l]),
    S = vv(y);
  return b.createElement(
    b.Fragment,
    null,
    v.map((P) =>
      b.createElement("link", {
        key: P,
        rel: "prefetch",
        as: "fetch",
        href: P,
        ...i,
      })
    ),
    E.map((P) =>
      b.createElement("link", { key: P, rel: "modulepreload", href: P, ...i })
    ),
    S.map(({ key: P, link: k }) => b.createElement("link", { key: P, ...k }))
  );
}
function xv(...r) {
  return (n) => {
    r.forEach((i) => {
      typeof i == "function" ? i(n) : i != null && (i.current = n);
    });
  };
}
var Ep =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Ep && (window.__reactRouterVersion = "7.0.2");
} catch {}
function kv({ basename: r, children: n, window: i }) {
  let o = b.useRef();
  o.current == null && (o.current = uy({ window: i, v5Compat: !0 }));
  let l = o.current,
    [c, f] = b.useState({ action: l.action, location: l.location }),
    g = b.useCallback(
      (p) => {
        b.startTransition(() => f(p));
      },
      [f]
    );
  return (
    b.useLayoutEffect(() => l.listen(g), [l, g]),
    b.createElement(Qy, {
      basename: r,
      children: n,
      location: c.location,
      navigationType: c.action,
      navigator: l,
    })
  );
}
var _p = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Mn = b.forwardRef(function (
    {
      onClick: n,
      discover: i = "render",
      prefetch: o = "none",
      relative: l,
      reloadDocument: c,
      replace: f,
      state: g,
      target: p,
      to: y,
      preventScrollReset: v,
      viewTransition: E,
      ...S
    },
    P
  ) {
    let { basename: k } = b.useContext(Dt),
      T = typeof y == "string" && _p.test(y),
      R,
      O = !1;
    if (typeof y == "string" && T && ((R = y), Ep))
      try {
        let he = new URL(window.location.href),
          ke = y.startsWith("//") ? new URL(he.protocol + y) : new URL(y),
          Ze = Dn(ke.pathname, k);
        ke.origin === he.origin && Ze != null
          ? (y = Ze + ke.search + ke.hash)
          : (O = !0);
      } catch {
        Lt(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let F = Ly(y, { relative: l }),
      [$, z, X] = gv(o, S),
      re = Cv(y, {
        replace: f,
        state: g,
        target: p,
        preventScrollReset: v,
        relative: l,
        viewTransition: E,
      });
    function se(he) {
      n && n(he), he.defaultPrevented || re(he);
    }
    let pe = b.createElement("a", {
      ...S,
      ...X,
      href: R || F,
      onClick: O || c ? n : se,
      ref: xv(P, z),
      target: p,
      "data-discover": !T && i === "render" ? "true" : void 0,
    });
    return $ && !T
      ? b.createElement(b.Fragment, null, pe, b.createElement(yv, { page: F }))
      : pe;
  });
Mn.displayName = "Link";
var Sv = b.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: i = !1,
    className: o = "",
    end: l = !1,
    style: c,
    to: f,
    viewTransition: g,
    children: p,
    ...y
  },
  v
) {
  let E = Vi(f, { relative: y.relative }),
    S = Jt(),
    P = b.useContext(Do),
    { navigator: k, basename: T } = b.useContext(Dt),
    R = P != null && Pv(E) && g === !0,
    O = k.encodeLocation ? k.encodeLocation(E).pathname : E.pathname,
    F = S.pathname,
    $ =
      P && P.navigation && P.navigation.location
        ? P.navigation.location.pathname
        : null;
  i ||
    ((F = F.toLowerCase()),
    ($ = $ ? $.toLowerCase() : null),
    (O = O.toLowerCase())),
    $ && T && ($ = Dn($, T) || $);
  const z = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
  let X = F === O || (!l && F.startsWith(O) && F.charAt(z) === "/"),
    re =
      $ != null &&
      ($ === O || (!l && $.startsWith(O) && $.charAt(O.length) === "/")),
    se = { isActive: X, isPending: re, isTransitioning: R },
    pe = X ? n : void 0,
    he;
  typeof o == "function"
    ? (he = o(se))
    : (he = [
        o,
        X ? "active" : null,
        re ? "pending" : null,
        R ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ke = typeof c == "function" ? c(se) : c;
  return b.createElement(
    Mn,
    {
      ...y,
      "aria-current": pe,
      className: he,
      ref: v,
      style: ke,
      to: f,
      viewTransition: g,
    },
    typeof p == "function" ? p(se) : p
  );
});
Sv.displayName = "NavLink";
var Ev = b.forwardRef(
  (
    {
      discover: r = "render",
      fetcherKey: n,
      navigate: i,
      reloadDocument: o,
      replace: l,
      state: c,
      method: f = go,
      action: g,
      onSubmit: p,
      relative: y,
      preventScrollReset: v,
      viewTransition: E,
      ...S
    },
    P
  ) => {
    let k = Rv(),
      T = Tv(g, { relative: y }),
      R = f.toLowerCase() === "get" ? "get" : "post",
      O = typeof g == "string" && _p.test(g),
      F = ($) => {
        if ((p && p($), $.defaultPrevented)) return;
        $.preventDefault();
        let z = $.nativeEvent.submitter,
          X = (z == null ? void 0 : z.getAttribute("formmethod")) || f;
        k(z || $.currentTarget, {
          fetcherKey: n,
          method: X,
          navigate: i,
          replace: l,
          state: c,
          relative: y,
          preventScrollReset: v,
          viewTransition: E,
        });
      };
    return b.createElement("form", {
      ref: P,
      method: R,
      action: T,
      onSubmit: o ? p : F,
      ...S,
      "data-discover": !O && r === "render" ? "true" : void 0,
    });
  }
);
Ev.displayName = "Form";
function _v(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cp(r) {
  let n = b.useContext(Ur);
  return Ne(n, _v(r)), n;
}
function Cv(
  r,
  {
    target: n,
    replace: i,
    state: o,
    preventScrollReset: l,
    relative: c,
    viewTransition: f,
  } = {}
) {
  let g = $i(),
    p = Jt(),
    y = Vi(r, { relative: c });
  return b.useCallback(
    (v) => {
      if (nv(v, n)) {
        v.preventDefault();
        let E = i !== void 0 ? i : Di(p) === Di(y);
        g(r, {
          replace: E,
          state: o,
          preventScrollReset: l,
          relative: c,
          viewTransition: f,
        });
      }
    },
    [p, g, y, i, o, n, r, l, c, f]
  );
}
var bv = 0,
  Nv = () => `__${String(++bv)}__`;
function Rv() {
  let { router: r } = Cp("useSubmit"),
    { basename: n } = b.useContext(Dt),
    i = qy();
  return b.useCallback(
    async (o, l = {}) => {
      let { action: c, method: f, encType: g, formData: p, body: y } = sv(o, n);
      if (l.navigate === !1) {
        let v = l.fetcherKey || Nv();
        await r.fetch(v, i, l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: p,
          body: y,
          formMethod: l.method || f,
          formEncType: l.encType || g,
          flushSync: l.flushSync,
        });
      } else
        await r.navigate(l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: p,
          body: y,
          formMethod: l.method || f,
          formEncType: l.encType || g,
          replace: l.replace,
          state: l.state,
          fromRouteId: i,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [r, n, i]
  );
}
function Tv(r, { relative: n } = {}) {
  let { basename: i } = b.useContext(Dt),
    o = b.useContext(Gt);
  Ne(o, "useFormAction must be used inside a RouteContext");
  let [l] = o.matches.slice(-1),
    c = { ...Vi(r || ".", { relative: n }) },
    f = Jt();
  if (r == null) {
    c.search = f.search;
    let g = new URLSearchParams(c.search),
      p = g.getAll("index");
    if (p.some((v) => v === "")) {
      g.delete("index"),
        p.filter((E) => E).forEach((E) => g.append("index", E));
      let v = g.toString();
      c.search = v ? `?${v}` : "";
    }
  }
  return (
    (!r || r === ".") &&
      l.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (c.pathname = c.pathname === "/" ? i : ln([i, c.pathname])),
    Di(c)
  );
}
function Pv(r, n = {}) {
  let i = b.useContext(yp);
  Ne(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Cp("useViewTransitionState"),
    l = Vi(r, { relative: n.relative });
  if (!i.isTransitioning) return !1;
  let c = Dn(i.currentLocation.pathname, o) || i.currentLocation.pathname,
    f = Dn(i.nextLocation.pathname, o) || i.nextLocation.pathname;
  return bo(l.pathname, f) != null || bo(l.pathname, c) != null;
}
new TextEncoder();
const Iv = [
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      class: "list-item1 ",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      class: "list-item2 ",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      class: "list-item1 ",
    },
  ],
  jv = () =>
    h.jsx(h.Fragment, {
      children: h.jsxs("section", {
        className:
          "h-[900px] bg-hero max-md:h-[700px] max-md:pl-7 bg-no-repeat bg-cover  flex bg-center py-20 gap-2 mr-4 p-7 ",
        children: [
          h.jsx("div", {
            className: "container mx-auto flex justify-around h-full",
            children: h.jsxs("div", {
              className: "flex flex-col justify-center",
              children: [
                h.jsxs("div", {
                  className: "font-semibold flex items-center uppercase",
                  children: [
                    h.jsx("div", {
                      className: "w-10 h-[2px] mr-3 bg-cyan-700",
                    }),
                    "Hot Trend",
                  ],
                }),
                h.jsxs("h1", {
                  className:
                    "uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4",
                  children: [
                    "Fresh Shoes Finds",
                    h.jsx("br", {}),
                    h.jsx("span", {
                      className: "font-light",
                      children: "new collection",
                    }),
                  ],
                }),
                h.jsx(Mn, {
                  to: "/",
                  className:
                    "self-start uppercase font-semibold border-b-2 border-primary",
                  children: "Discover More",
                }),
              ],
            }),
          }),
          Iv.map((r, n) =>
            h.jsx(
              "div",
              {
                className: `${r.class} w-1/3 p-4 border-0 rounded-2xl text-center `,
                children: h.jsx("img", {
                  src: r.img,
                  alt: `Image ${n}`,
                  className: "w-full h-full object-cover rounded-2xl",
                }),
              },
              n
            )
          ),
        ],
      }),
    }),
  Av = () =>
    h.jsx("footer", {
      className: "footer",
      children: h.jsx("div", {
        className: "footer-content flex justify-center items-center",
        children: h.jsxs("p", {
          children: [
            "© ",
            new Date().getFullYear(),
            " ShopJoe. All rights reserved.",
          ],
        }),
      }),
    });
function bp(r, n) {
  return function () {
    return r.apply(n, arguments);
  };
}
const { toString: Ov } = Object.prototype,
  { getPrototypeOf: Uu } = Object,
  Fo = ((r) => (n) => {
    const i = Ov.call(n);
    return r[i] || (r[i] = i.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Mt = (r) => ((r = r.toLowerCase()), (n) => Fo(n) === r),
  Uo = (r) => (n) => typeof n === r,
  { isArray: zr } = Array,
  Mi = Uo("undefined");
function Lv(r) {
  return (
    r !== null &&
    !Mi(r) &&
    r.constructor !== null &&
    !Mi(r.constructor) &&
    vt(r.constructor.isBuffer) &&
    r.constructor.isBuffer(r)
  );
}
const Np = Mt("ArrayBuffer");
function Dv(r) {
  let n;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(r))
      : (n = r && r.buffer && Np(r.buffer)),
    n
  );
}
const Mv = Uo("string"),
  vt = Uo("function"),
  Rp = Uo("number"),
  Bo = (r) => r !== null && typeof r == "object",
  Fv = (r) => r === !0 || r === !1,
  vo = (r) => {
    if (Fo(r) !== "object") return !1;
    const n = Uu(r);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(Symbol.toStringTag in r) &&
      !(Symbol.iterator in r)
    );
  },
  Uv = Mt("Date"),
  Bv = Mt("File"),
  zv = Mt("Blob"),
  Hv = Mt("FileList"),
  $v = (r) => Bo(r) && vt(r.pipe),
  Vv = (r) => {
    let n;
    return (
      r &&
      ((typeof FormData == "function" && r instanceof FormData) ||
        (vt(r.append) &&
          ((n = Fo(r)) === "formdata" ||
            (n === "object" &&
              vt(r.toString) &&
              r.toString() === "[object FormData]"))))
    );
  },
  Wv = Mt("URLSearchParams"),
  [qv, Kv, Gv, Jv] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Mt
  ),
  Qv = (r) =>
    r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wi(r, n, { allOwnKeys: i = !1 } = {}) {
  if (r === null || typeof r > "u") return;
  let o, l;
  if ((typeof r != "object" && (r = [r]), zr(r)))
    for (o = 0, l = r.length; o < l; o++) n.call(null, r[o], o, r);
  else {
    const c = i ? Object.getOwnPropertyNames(r) : Object.keys(r),
      f = c.length;
    let g;
    for (o = 0; o < f; o++) (g = c[o]), n.call(null, r[g], g, r);
  }
}
function Tp(r, n) {
  n = n.toLowerCase();
  const i = Object.keys(r);
  let o = i.length,
    l;
  for (; o-- > 0; ) if (((l = i[o]), n === l.toLowerCase())) return l;
  return null;
}
const Xn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Pp = (r) => !Mi(r) && r !== Xn;
function pu() {
  const { caseless: r } = (Pp(this) && this) || {},
    n = {},
    i = (o, l) => {
      const c = (r && Tp(n, l)) || l;
      vo(n[c]) && vo(o)
        ? (n[c] = pu(n[c], o))
        : vo(o)
        ? (n[c] = pu({}, o))
        : zr(o)
        ? (n[c] = o.slice())
        : (n[c] = o);
    };
  for (let o = 0, l = arguments.length; o < l; o++)
    arguments[o] && Wi(arguments[o], i);
  return n;
}
const Yv = (r, n, i, { allOwnKeys: o } = {}) => (
    Wi(
      n,
      (l, c) => {
        i && vt(l) ? (r[c] = bp(l, i)) : (r[c] = l);
      },
      { allOwnKeys: o }
    ),
    r
  ),
  Zv = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
  Xv = (r, n, i, o) => {
    (r.prototype = Object.create(n.prototype, o)),
      (r.prototype.constructor = r),
      Object.defineProperty(r, "super", { value: n.prototype }),
      i && Object.assign(r.prototype, i);
  },
  e1 = (r, n, i, o) => {
    let l, c, f;
    const g = {};
    if (((n = n || {}), r == null)) return n;
    do {
      for (l = Object.getOwnPropertyNames(r), c = l.length; c-- > 0; )
        (f = l[c]), (!o || o(f, r, n)) && !g[f] && ((n[f] = r[f]), (g[f] = !0));
      r = i !== !1 && Uu(r);
    } while (r && (!i || i(r, n)) && r !== Object.prototype);
    return n;
  },
  t1 = (r, n, i) => {
    (r = String(r)),
      (i === void 0 || i > r.length) && (i = r.length),
      (i -= n.length);
    const o = r.indexOf(n, i);
    return o !== -1 && o === i;
  },
  n1 = (r) => {
    if (!r) return null;
    if (zr(r)) return r;
    let n = r.length;
    if (!Rp(n)) return null;
    const i = new Array(n);
    for (; n-- > 0; ) i[n] = r[n];
    return i;
  },
  r1 = (
    (r) => (n) =>
      r && n instanceof r
  )(typeof Uint8Array < "u" && Uu(Uint8Array)),
  i1 = (r, n) => {
    const o = (r && r[Symbol.iterator]).call(r);
    let l;
    for (; (l = o.next()) && !l.done; ) {
      const c = l.value;
      n.call(r, c[0], c[1]);
    }
  },
  s1 = (r, n) => {
    let i;
    const o = [];
    for (; (i = r.exec(n)) !== null; ) o.push(i);
    return o;
  },
  o1 = Mt("HTMLFormElement"),
  a1 = (r) =>
    r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, o, l) {
      return o.toUpperCase() + l;
    }),
  fh = (
    ({ hasOwnProperty: r }) =>
    (n, i) =>
      r.call(n, i)
  )(Object.prototype),
  l1 = Mt("RegExp"),
  Ip = (r, n) => {
    const i = Object.getOwnPropertyDescriptors(r),
      o = {};
    Wi(i, (l, c) => {
      let f;
      (f = n(l, c, r)) !== !1 && (o[c] = f || l);
    }),
      Object.defineProperties(r, o);
  },
  u1 = (r) => {
    Ip(r, (n, i) => {
      if (vt(r) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
        return !1;
      const o = r[i];
      if (vt(o)) {
        if (((n.enumerable = !1), "writable" in n)) {
          n.writable = !1;
          return;
        }
        n.set ||
          (n.set = () => {
            throw Error("Can not rewrite read-only method '" + i + "'");
          });
      }
    });
  },
  c1 = (r, n) => {
    const i = {},
      o = (l) => {
        l.forEach((c) => {
          i[c] = !0;
        });
      };
    return zr(r) ? o(r) : o(String(r).split(n)), i;
  },
  d1 = () => {},
  f1 = (r, n) => (r != null && Number.isFinite((r = +r)) ? r : n),
  Ql = "abcdefghijklmnopqrstuvwxyz",
  hh = "0123456789",
  jp = { DIGIT: hh, ALPHA: Ql, ALPHA_DIGIT: Ql + Ql.toUpperCase() + hh },
  h1 = (r = 16, n = jp.ALPHA_DIGIT) => {
    let i = "";
    const { length: o } = n;
    for (; r--; ) i += n[(Math.random() * o) | 0];
    return i;
  };
function p1(r) {
  return !!(
    r &&
    vt(r.append) &&
    r[Symbol.toStringTag] === "FormData" &&
    r[Symbol.iterator]
  );
}
const m1 = (r) => {
    const n = new Array(10),
      i = (o, l) => {
        if (Bo(o)) {
          if (n.indexOf(o) >= 0) return;
          if (!("toJSON" in o)) {
            n[l] = o;
            const c = zr(o) ? [] : {};
            return (
              Wi(o, (f, g) => {
                const p = i(f, l + 1);
                !Mi(p) && (c[g] = p);
              }),
              (n[l] = void 0),
              c
            );
          }
        }
        return o;
      };
    return i(r, 0);
  },
  g1 = Mt("AsyncFunction"),
  y1 = (r) => r && (Bo(r) || vt(r)) && vt(r.then) && vt(r.catch),
  Ap = ((r, n) =>
    r
      ? setImmediate
      : n
      ? ((i, o) => (
          Xn.addEventListener(
            "message",
            ({ source: l, data: c }) => {
              l === Xn && c === i && o.length && o.shift()();
            },
            !1
          ),
          (l) => {
            o.push(l), Xn.postMessage(i, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (i) => setTimeout(i))(
    typeof setImmediate == "function",
    vt(Xn.postMessage)
  ),
  v1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Xn)
      : (typeof process < "u" && process.nextTick) || Ap,
  A = {
    isArray: zr,
    isArrayBuffer: Np,
    isBuffer: Lv,
    isFormData: Vv,
    isArrayBufferView: Dv,
    isString: Mv,
    isNumber: Rp,
    isBoolean: Fv,
    isObject: Bo,
    isPlainObject: vo,
    isReadableStream: qv,
    isRequest: Kv,
    isResponse: Gv,
    isHeaders: Jv,
    isUndefined: Mi,
    isDate: Uv,
    isFile: Bv,
    isBlob: zv,
    isRegExp: l1,
    isFunction: vt,
    isStream: $v,
    isURLSearchParams: Wv,
    isTypedArray: r1,
    isFileList: Hv,
    forEach: Wi,
    merge: pu,
    extend: Yv,
    trim: Qv,
    stripBOM: Zv,
    inherits: Xv,
    toFlatObject: e1,
    kindOf: Fo,
    kindOfTest: Mt,
    endsWith: t1,
    toArray: n1,
    forEachEntry: i1,
    matchAll: s1,
    isHTMLForm: o1,
    hasOwnProperty: fh,
    hasOwnProp: fh,
    reduceDescriptors: Ip,
    freezeMethods: u1,
    toObjectSet: c1,
    toCamelCase: a1,
    noop: d1,
    toFiniteNumber: f1,
    findKey: Tp,
    global: Xn,
    isContextDefined: Pp,
    ALPHABET: jp,
    generateString: h1,
    isSpecCompliantForm: p1,
    toJSONObject: m1,
    isAsyncFn: g1,
    isThenable: y1,
    setImmediate: Ap,
    asap: v1,
  };
function ne(r, n, i, o, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = r),
    (this.name = "AxiosError"),
    n && (this.code = n),
    i && (this.config = i),
    o && (this.request = o),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
A.inherits(ne, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Op = ne.prototype,
  Lp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((r) => {
  Lp[r] = { value: r };
});
Object.defineProperties(ne, Lp);
Object.defineProperty(Op, "isAxiosError", { value: !0 });
ne.from = (r, n, i, o, l, c) => {
  const f = Object.create(Op);
  return (
    A.toFlatObject(
      r,
      f,
      function (p) {
        return p !== Error.prototype;
      },
      (g) => g !== "isAxiosError"
    ),
    ne.call(f, r.message, n, i, o, l),
    (f.cause = r),
    (f.name = r.name),
    c && Object.assign(f, c),
    f
  );
};
const w1 = null;
function mu(r) {
  return A.isPlainObject(r) || A.isArray(r);
}
function Dp(r) {
  return A.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function ph(r, n, i) {
  return r
    ? r
        .concat(n)
        .map(function (l, c) {
          return (l = Dp(l)), !i && c ? "[" + l + "]" : l;
        })
        .join(i ? "." : "")
    : n;
}
function x1(r) {
  return A.isArray(r) && !r.some(mu);
}
const k1 = A.toFlatObject(A, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function zo(r, n, i) {
  if (!A.isObject(r)) throw new TypeError("target must be an object");
  (n = n || new FormData()),
    (i = A.toFlatObject(
      i,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (T, R) {
        return !A.isUndefined(R[T]);
      }
    ));
  const o = i.metaTokens,
    l = i.visitor || v,
    c = i.dots,
    f = i.indexes,
    p = (i.Blob || (typeof Blob < "u" && Blob)) && A.isSpecCompliantForm(n);
  if (!A.isFunction(l)) throw new TypeError("visitor must be a function");
  function y(k) {
    if (k === null) return "";
    if (A.isDate(k)) return k.toISOString();
    if (!p && A.isBlob(k))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(k) || A.isTypedArray(k)
      ? p && typeof Blob == "function"
        ? new Blob([k])
        : Buffer.from(k)
      : k;
  }
  function v(k, T, R) {
    let O = k;
    if (k && !R && typeof k == "object") {
      if (A.endsWith(T, "{}"))
        (T = o ? T : T.slice(0, -2)), (k = JSON.stringify(k));
      else if (
        (A.isArray(k) && x1(k)) ||
        ((A.isFileList(k) || A.endsWith(T, "[]")) && (O = A.toArray(k)))
      )
        return (
          (T = Dp(T)),
          O.forEach(function ($, z) {
            !(A.isUndefined($) || $ === null) &&
              n.append(
                f === !0 ? ph([T], z, c) : f === null ? T : T + "[]",
                y($)
              );
          }),
          !1
        );
    }
    return mu(k) ? !0 : (n.append(ph(R, T, c), y(k)), !1);
  }
  const E = [],
    S = Object.assign(k1, {
      defaultVisitor: v,
      convertValue: y,
      isVisitable: mu,
    });
  function P(k, T) {
    if (!A.isUndefined(k)) {
      if (E.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      E.push(k),
        A.forEach(k, function (O, F) {
          (!(A.isUndefined(O) || O === null) &&
            l.call(n, O, A.isString(F) ? F.trim() : F, T, S)) === !0 &&
            P(O, T ? T.concat(F) : [F]);
        }),
        E.pop();
    }
  }
  if (!A.isObject(r)) throw new TypeError("data must be an object");
  return P(r), n;
}
function mh(r) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function (o) {
    return n[o];
  });
}
function Bu(r, n) {
  (this._pairs = []), r && zo(r, this, n);
}
const Mp = Bu.prototype;
Mp.append = function (n, i) {
  this._pairs.push([n, i]);
};
Mp.toString = function (n) {
  const i = n
    ? function (o) {
        return n.call(this, o, mh);
      }
    : mh;
  return this._pairs
    .map(function (l) {
      return i(l[0]) + "=" + i(l[1]);
    }, "")
    .join("&");
};
function S1(r) {
  return encodeURIComponent(r)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Fp(r, n, i) {
  if (!n) return r;
  const o = (i && i.encode) || S1;
  A.isFunction(i) && (i = { serialize: i });
  const l = i && i.serialize;
  let c;
  if (
    (l
      ? (c = l(n, i))
      : (c = A.isURLSearchParams(n) ? n.toString() : new Bu(n, i).toString(o)),
    c)
  ) {
    const f = r.indexOf("#");
    f !== -1 && (r = r.slice(0, f)),
      (r += (r.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return r;
}
class gh {
  constructor() {
    this.handlers = [];
  }
  use(n, i, o) {
    return (
      this.handlers.push({
        fulfilled: n,
        rejected: i,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(n) {
    A.forEach(this.handlers, function (o) {
      o !== null && n(o);
    });
  }
}
const Up = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  E1 = typeof URLSearchParams < "u" ? URLSearchParams : Bu,
  _1 = typeof FormData < "u" ? FormData : null,
  C1 = typeof Blob < "u" ? Blob : null,
  b1 = {
    isBrowser: !0,
    classes: { URLSearchParams: E1, FormData: _1, Blob: C1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  zu = typeof window < "u" && typeof document < "u",
  gu = (typeof navigator == "object" && navigator) || void 0,
  N1 =
    zu &&
    (!gu || ["ReactNative", "NativeScript", "NS"].indexOf(gu.product) < 0),
  R1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  T1 = (zu && window.location.href) || "http://localhost",
  P1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: zu,
        hasStandardBrowserEnv: N1,
        hasStandardBrowserWebWorkerEnv: R1,
        navigator: gu,
        origin: T1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ye = { ...P1, ...b1 };
function I1(r, n) {
  return zo(
    r,
    new Ye.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (i, o, l, c) {
          return Ye.isNode && A.isBuffer(i)
            ? (this.append(o, i.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      n
    )
  );
}
function j1(r) {
  return A.matchAll(/\w+|\[(\w*)]/g, r).map((n) =>
    n[0] === "[]" ? "" : n[1] || n[0]
  );
}
function A1(r) {
  const n = {},
    i = Object.keys(r);
  let o;
  const l = i.length;
  let c;
  for (o = 0; o < l; o++) (c = i[o]), (n[c] = r[c]);
  return n;
}
function Bp(r) {
  function n(i, o, l, c) {
    let f = i[c++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f),
      p = c >= i.length;
    return (
      (f = !f && A.isArray(l) ? l.length : f),
      p
        ? (A.hasOwnProp(l, f) ? (l[f] = [l[f], o]) : (l[f] = o), !g)
        : ((!l[f] || !A.isObject(l[f])) && (l[f] = []),
          n(i, o, l[f], c) && A.isArray(l[f]) && (l[f] = A1(l[f])),
          !g)
    );
  }
  if (A.isFormData(r) && A.isFunction(r.entries)) {
    const i = {};
    return (
      A.forEachEntry(r, (o, l) => {
        n(j1(o), l, i, 0);
      }),
      i
    );
  }
  return null;
}
function O1(r, n, i) {
  if (A.isString(r))
    try {
      return (n || JSON.parse)(r), A.trim(r);
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
  return (0, JSON.stringify)(r);
}
const qi = {
  transitional: Up,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (n, i) {
      const o = i.getContentType() || "",
        l = o.indexOf("application/json") > -1,
        c = A.isObject(n);
      if ((c && A.isHTMLForm(n) && (n = new FormData(n)), A.isFormData(n)))
        return l ? JSON.stringify(Bp(n)) : n;
      if (
        A.isArrayBuffer(n) ||
        A.isBuffer(n) ||
        A.isStream(n) ||
        A.isFile(n) ||
        A.isBlob(n) ||
        A.isReadableStream(n)
      )
        return n;
      if (A.isArrayBufferView(n)) return n.buffer;
      if (A.isURLSearchParams(n))
        return (
          i.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          n.toString()
        );
      let g;
      if (c) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return I1(n, this.formSerializer).toString();
        if ((g = A.isFileList(n)) || o.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return zo(
            g ? { "files[]": n } : n,
            p && new p(),
            this.formSerializer
          );
        }
      }
      return c || l ? (i.setContentType("application/json", !1), O1(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const i = this.transitional || qi.transitional,
        o = i && i.forcedJSONParsing,
        l = this.responseType === "json";
      if (A.isResponse(n) || A.isReadableStream(n)) return n;
      if (n && A.isString(n) && ((o && !this.responseType) || l)) {
        const f = !(i && i.silentJSONParsing) && l;
        try {
          return JSON.parse(n);
        } catch (g) {
          if (f)
            throw g.name === "SyntaxError"
              ? ne.from(g, ne.ERR_BAD_RESPONSE, this, null, this.response)
              : g;
        }
      }
      return n;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ye.classes.FormData, Blob: Ye.classes.Blob },
  validateStatus: function (n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  qi.headers[r] = {};
});
const L1 = A.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  D1 = (r) => {
    const n = {};
    let i, o, l;
    return (
      r &&
        r
          .split(
            `
`
          )
          .forEach(function (f) {
            (l = f.indexOf(":")),
              (i = f.substring(0, l).trim().toLowerCase()),
              (o = f.substring(l + 1).trim()),
              !(!i || (n[i] && L1[i])) &&
                (i === "set-cookie"
                  ? n[i]
                    ? n[i].push(o)
                    : (n[i] = [o])
                  : (n[i] = n[i] ? n[i] + ", " + o : o));
          }),
      n
    );
  },
  yh = Symbol("internals");
function ji(r) {
  return r && String(r).trim().toLowerCase();
}
function wo(r) {
  return r === !1 || r == null ? r : A.isArray(r) ? r.map(wo) : String(r);
}
function M1(r) {
  const n = Object.create(null),
    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; (o = i.exec(r)); ) n[o[1]] = o[2];
  return n;
}
const F1 = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Yl(r, n, i, o, l) {
  if (A.isFunction(o)) return o.call(this, n, i);
  if ((l && (n = i), !!A.isString(n))) {
    if (A.isString(o)) return n.indexOf(o) !== -1;
    if (A.isRegExp(o)) return o.test(n);
  }
}
function U1(r) {
  return r
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, i, o) => i.toUpperCase() + o);
}
function B1(r, n) {
  const i = A.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(r, o + i, {
      value: function (l, c, f) {
        return this[o].call(this, n, l, c, f);
      },
      configurable: !0,
    });
  });
}
class dt {
  constructor(n) {
    n && this.set(n);
  }
  set(n, i, o) {
    const l = this;
    function c(g, p, y) {
      const v = ji(p);
      if (!v) throw new Error("header name must be a non-empty string");
      const E = A.findKey(l, v);
      (!E || l[E] === void 0 || y === !0 || (y === void 0 && l[E] !== !1)) &&
        (l[E || p] = wo(g));
    }
    const f = (g, p) => A.forEach(g, (y, v) => c(y, v, p));
    if (A.isPlainObject(n) || n instanceof this.constructor) f(n, i);
    else if (A.isString(n) && (n = n.trim()) && !F1(n)) f(D1(n), i);
    else if (A.isHeaders(n)) for (const [g, p] of n.entries()) c(p, g, o);
    else n != null && c(i, n, o);
    return this;
  }
  get(n, i) {
    if (((n = ji(n)), n)) {
      const o = A.findKey(this, n);
      if (o) {
        const l = this[o];
        if (!i) return l;
        if (i === !0) return M1(l);
        if (A.isFunction(i)) return i.call(this, l, o);
        if (A.isRegExp(i)) return i.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, i) {
    if (((n = ji(n)), n)) {
      const o = A.findKey(this, n);
      return !!(o && this[o] !== void 0 && (!i || Yl(this, this[o], o, i)));
    }
    return !1;
  }
  delete(n, i) {
    const o = this;
    let l = !1;
    function c(f) {
      if (((f = ji(f)), f)) {
        const g = A.findKey(o, f);
        g && (!i || Yl(o, o[g], g, i)) && (delete o[g], (l = !0));
      }
    }
    return A.isArray(n) ? n.forEach(c) : c(n), l;
  }
  clear(n) {
    const i = Object.keys(this);
    let o = i.length,
      l = !1;
    for (; o--; ) {
      const c = i[o];
      (!n || Yl(this, this[c], c, n, !0)) && (delete this[c], (l = !0));
    }
    return l;
  }
  normalize(n) {
    const i = this,
      o = {};
    return (
      A.forEach(this, (l, c) => {
        const f = A.findKey(o, c);
        if (f) {
          (i[f] = wo(l)), delete i[c];
          return;
        }
        const g = n ? U1(c) : String(c).trim();
        g !== c && delete i[c], (i[g] = wo(l)), (o[g] = !0);
      }),
      this
    );
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const i = Object.create(null);
    return (
      A.forEach(this, (o, l) => {
        o != null && o !== !1 && (i[l] = n && A.isArray(o) ? o.join(", ") : o);
      }),
      i
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, i]) => n + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...i) {
    const o = new this(n);
    return i.forEach((l) => o.set(l)), o;
  }
  static accessor(n) {
    const o = (this[yh] = this[yh] = { accessors: {} }).accessors,
      l = this.prototype;
    function c(f) {
      const g = ji(f);
      o[g] || (B1(l, f), (o[g] = !0));
    }
    return A.isArray(n) ? n.forEach(c) : c(n), this;
  }
}
dt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
A.reduceDescriptors(dt.prototype, ({ value: r }, n) => {
  let i = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => r,
    set(o) {
      this[i] = o;
    },
  };
});
A.freezeMethods(dt);
function Zl(r, n) {
  const i = this || qi,
    o = n || i,
    l = dt.from(o.headers);
  let c = o.data;
  return (
    A.forEach(r, function (g) {
      c = g.call(i, c, l.normalize(), n ? n.status : void 0);
    }),
    l.normalize(),
    c
  );
}
function zp(r) {
  return !!(r && r.__CANCEL__);
}
function Hr(r, n, i) {
  ne.call(this, r ?? "canceled", ne.ERR_CANCELED, n, i),
    (this.name = "CanceledError");
}
A.inherits(Hr, ne, { __CANCEL__: !0 });
function Hp(r, n, i) {
  const o = i.config.validateStatus;
  !i.status || !o || o(i.status)
    ? r(i)
    : n(
        new ne(
          "Request failed with status code " + i.status,
          [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][
            Math.floor(i.status / 100) - 4
          ],
          i.config,
          i.request,
          i
        )
      );
}
function z1(r) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return (n && n[1]) || "";
}
function H1(r, n) {
  r = r || 10;
  const i = new Array(r),
    o = new Array(r);
  let l = 0,
    c = 0,
    f;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (p) {
      const y = Date.now(),
        v = o[c];
      f || (f = y), (i[l] = p), (o[l] = y);
      let E = c,
        S = 0;
      for (; E !== l; ) (S += i[E++]), (E = E % r);
      if (((l = (l + 1) % r), l === c && (c = (c + 1) % r), y - f < n)) return;
      const P = v && y - v;
      return P ? Math.round((S * 1e3) / P) : void 0;
    }
  );
}
function $1(r, n) {
  let i = 0,
    o = 1e3 / n,
    l,
    c;
  const f = (y, v = Date.now()) => {
    (i = v), (l = null), c && (clearTimeout(c), (c = null)), r.apply(null, y);
  };
  return [
    (...y) => {
      const v = Date.now(),
        E = v - i;
      E >= o
        ? f(y, v)
        : ((l = y),
          c ||
            (c = setTimeout(() => {
              (c = null), f(l);
            }, o - E)));
    },
    () => l && f(l),
  ];
}
const No = (r, n, i = 3) => {
    let o = 0;
    const l = H1(50, 250);
    return $1((c) => {
      const f = c.loaded,
        g = c.lengthComputable ? c.total : void 0,
        p = f - o,
        y = l(p),
        v = f <= g;
      o = f;
      const E = {
        loaded: f,
        total: g,
        progress: g ? f / g : void 0,
        bytes: p,
        rate: y || void 0,
        estimated: y && g && v ? (g - f) / y : void 0,
        event: c,
        lengthComputable: g != null,
        [n ? "download" : "upload"]: !0,
      };
      r(E);
    }, i);
  },
  vh = (r, n) => {
    const i = r != null;
    return [(o) => n[0]({ lengthComputable: i, total: r, loaded: o }), n[1]];
  },
  wh =
    (r) =>
    (...n) =>
      A.asap(() => r(...n)),
  V1 = Ye.hasStandardBrowserEnv
    ? ((r, n) => (i) => (
        (i = new URL(i, Ye.origin)),
        r.protocol === i.protocol &&
          r.host === i.host &&
          (n || r.port === i.port)
      ))(
        new URL(Ye.origin),
        Ye.navigator && /(msie|trident)/i.test(Ye.navigator.userAgent)
      )
    : () => !0,
  W1 = Ye.hasStandardBrowserEnv
    ? {
        write(r, n, i, o, l, c) {
          const f = [r + "=" + encodeURIComponent(n)];
          A.isNumber(i) && f.push("expires=" + new Date(i).toGMTString()),
            A.isString(o) && f.push("path=" + o),
            A.isString(l) && f.push("domain=" + l),
            c === !0 && f.push("secure"),
            (document.cookie = f.join("; "));
        },
        read(r) {
          const n = document.cookie.match(
            new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
          );
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove(r) {
          this.write(r, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function q1(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function K1(r, n) {
  return n ? r.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : r;
}
function $p(r, n) {
  return r && !q1(n) ? K1(r, n) : n;
}
const xh = (r) => (r instanceof dt ? { ...r } : r);
function rr(r, n) {
  n = n || {};
  const i = {};
  function o(y, v, E, S) {
    return A.isPlainObject(y) && A.isPlainObject(v)
      ? A.merge.call({ caseless: S }, y, v)
      : A.isPlainObject(v)
      ? A.merge({}, v)
      : A.isArray(v)
      ? v.slice()
      : v;
  }
  function l(y, v, E, S) {
    if (A.isUndefined(v)) {
      if (!A.isUndefined(y)) return o(void 0, y, E, S);
    } else return o(y, v, E, S);
  }
  function c(y, v) {
    if (!A.isUndefined(v)) return o(void 0, v);
  }
  function f(y, v) {
    if (A.isUndefined(v)) {
      if (!A.isUndefined(y)) return o(void 0, y);
    } else return o(void 0, v);
  }
  function g(y, v, E) {
    if (E in n) return o(y, v);
    if (E in r) return o(void 0, y);
  }
  const p = {
    url: c,
    method: c,
    data: c,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: g,
    headers: (y, v, E) => l(xh(y), xh(v), E, !0),
  };
  return (
    A.forEach(Object.keys(Object.assign({}, r, n)), function (v) {
      const E = p[v] || l,
        S = E(r[v], n[v], v);
      (A.isUndefined(S) && E !== g) || (i[v] = S);
    }),
    i
  );
}
const Vp = (r) => {
    const n = rr({}, r);
    let {
      data: i,
      withXSRFToken: o,
      xsrfHeaderName: l,
      xsrfCookieName: c,
      headers: f,
      auth: g,
    } = n;
    (n.headers = f = dt.from(f)),
      (n.url = Fp($p(n.baseURL, n.url), r.params, r.paramsSerializer)),
      g &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (g.username || "") +
                ":" +
                (g.password ? unescape(encodeURIComponent(g.password)) : "")
            )
        );
    let p;
    if (A.isFormData(i)) {
      if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if ((p = f.getContentType()) !== !1) {
        const [y, ...v] = p
          ? p
              .split(";")
              .map((E) => E.trim())
              .filter(Boolean)
          : [];
        f.setContentType([y || "multipart/form-data", ...v].join("; "));
      }
    }
    if (
      Ye.hasStandardBrowserEnv &&
      (o && A.isFunction(o) && (o = o(n)), o || (o !== !1 && V1(n.url)))
    ) {
      const y = l && c && W1.read(c);
      y && f.set(l, y);
    }
    return n;
  },
  G1 = typeof XMLHttpRequest < "u",
  J1 =
    G1 &&
    function (r) {
      return new Promise(function (i, o) {
        const l = Vp(r);
        let c = l.data;
        const f = dt.from(l.headers).normalize();
        let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = l,
          v,
          E,
          S,
          P,
          k;
        function T() {
          P && P(),
            k && k(),
            l.cancelToken && l.cancelToken.unsubscribe(v),
            l.signal && l.signal.removeEventListener("abort", v);
        }
        let R = new XMLHttpRequest();
        R.open(l.method.toUpperCase(), l.url, !0), (R.timeout = l.timeout);
        function O() {
          if (!R) return;
          const $ = dt.from(
              "getAllResponseHeaders" in R && R.getAllResponseHeaders()
            ),
            X = {
              data:
                !g || g === "text" || g === "json"
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: $,
              config: r,
              request: R,
            };
          Hp(
            function (se) {
              i(se), T();
            },
            function (se) {
              o(se), T();
            },
            X
          ),
            (R = null);
        }
        "onloadend" in R
          ? (R.onloadend = O)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf("file:") === 0)) ||
                setTimeout(O);
            }),
          (R.onabort = function () {
            R &&
              (o(new ne("Request aborted", ne.ECONNABORTED, r, R)), (R = null));
          }),
          (R.onerror = function () {
            o(new ne("Network Error", ne.ERR_NETWORK, r, R)), (R = null);
          }),
          (R.ontimeout = function () {
            let z = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const X = l.transitional || Up;
            l.timeoutErrorMessage && (z = l.timeoutErrorMessage),
              o(
                new ne(
                  z,
                  X.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
                  r,
                  R
                )
              ),
              (R = null);
          }),
          c === void 0 && f.setContentType(null),
          "setRequestHeader" in R &&
            A.forEach(f.toJSON(), function (z, X) {
              R.setRequestHeader(X, z);
            }),
          A.isUndefined(l.withCredentials) ||
            (R.withCredentials = !!l.withCredentials),
          g && g !== "json" && (R.responseType = l.responseType),
          y && (([S, k] = No(y, !0)), R.addEventListener("progress", S)),
          p &&
            R.upload &&
            (([E, P] = No(p)),
            R.upload.addEventListener("progress", E),
            R.upload.addEventListener("loadend", P)),
          (l.cancelToken || l.signal) &&
            ((v = ($) => {
              R &&
                (o(!$ || $.type ? new Hr(null, r, R) : $),
                R.abort(),
                (R = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(v),
            l.signal &&
              (l.signal.aborted ? v() : l.signal.addEventListener("abort", v)));
        const F = z1(l.url);
        if (F && Ye.protocols.indexOf(F) === -1) {
          o(new ne("Unsupported protocol " + F + ":", ne.ERR_BAD_REQUEST, r));
          return;
        }
        R.send(c || null);
      });
    },
  Q1 = (r, n) => {
    const { length: i } = (r = r ? r.filter(Boolean) : []);
    if (n || i) {
      let o = new AbortController(),
        l;
      const c = function (y) {
        if (!l) {
          (l = !0), g();
          const v = y instanceof Error ? y : this.reason;
          o.abort(
            v instanceof ne ? v : new Hr(v instanceof Error ? v.message : v)
          );
        }
      };
      let f =
        n &&
        setTimeout(() => {
          (f = null), c(new ne(`timeout ${n} of ms exceeded`, ne.ETIMEDOUT));
        }, n);
      const g = () => {
        r &&
          (f && clearTimeout(f),
          (f = null),
          r.forEach((y) => {
            y.unsubscribe
              ? y.unsubscribe(c)
              : y.removeEventListener("abort", c);
          }),
          (r = null));
      };
      r.forEach((y) => y.addEventListener("abort", c));
      const { signal: p } = o;
      return (p.unsubscribe = () => A.asap(g)), p;
    }
  },
  Y1 = function* (r, n) {
    let i = r.byteLength;
    if (i < n) {
      yield r;
      return;
    }
    let o = 0,
      l;
    for (; o < i; ) (l = o + n), yield r.slice(o, l), (o = l);
  },
  Z1 = async function* (r, n) {
    for await (const i of X1(r)) yield* Y1(i, n);
  },
  X1 = async function* (r) {
    if (r[Symbol.asyncIterator]) {
      yield* r;
      return;
    }
    const n = r.getReader();
    try {
      for (;;) {
        const { done: i, value: o } = await n.read();
        if (i) break;
        yield o;
      }
    } finally {
      await n.cancel();
    }
  },
  kh = (r, n, i, o) => {
    const l = Z1(r, n);
    let c = 0,
      f,
      g = (p) => {
        f || ((f = !0), o && o(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: y, value: v } = await l.next();
            if (y) {
              g(), p.close();
              return;
            }
            let E = v.byteLength;
            if (i) {
              let S = (c += E);
              i(S);
            }
            p.enqueue(new Uint8Array(v));
          } catch (y) {
            throw (g(y), y);
          }
        },
        cancel(p) {
          return g(p), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ho =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Wp = Ho && typeof ReadableStream == "function",
  ew =
    Ho &&
    (typeof TextEncoder == "function"
      ? (
          (r) => (n) =>
            r.encode(n)
        )(new TextEncoder())
      : async (r) => new Uint8Array(await new Response(r).arrayBuffer())),
  qp = (r, ...n) => {
    try {
      return !!r(...n);
    } catch {
      return !1;
    }
  },
  tw =
    Wp &&
    qp(() => {
      let r = !1;
      const n = new Request(Ye.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (r = !0), "half";
        },
      }).headers.has("Content-Type");
      return r && !n;
    }),
  Sh = 64 * 1024,
  yu = Wp && qp(() => A.isReadableStream(new Response("").body)),
  Ro = { stream: yu && ((r) => r.body) };
Ho &&
  ((r) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
      !Ro[n] &&
        (Ro[n] = A.isFunction(r[n])
          ? (i) => i[n]()
          : (i, o) => {
              throw new ne(
                `Response type '${n}' is not supported`,
                ne.ERR_NOT_SUPPORT,
                o
              );
            });
    });
  })(new Response());
const nw = async (r) => {
    if (r == null) return 0;
    if (A.isBlob(r)) return r.size;
    if (A.isSpecCompliantForm(r))
      return (
        await new Request(Ye.origin, { method: "POST", body: r }).arrayBuffer()
      ).byteLength;
    if (A.isArrayBufferView(r) || A.isArrayBuffer(r)) return r.byteLength;
    if ((A.isURLSearchParams(r) && (r = r + ""), A.isString(r)))
      return (await ew(r)).byteLength;
  },
  rw = async (r, n) => {
    const i = A.toFiniteNumber(r.getContentLength());
    return i ?? nw(n);
  },
  iw =
    Ho &&
    (async (r) => {
      let {
        url: n,
        method: i,
        data: o,
        signal: l,
        cancelToken: c,
        timeout: f,
        onDownloadProgress: g,
        onUploadProgress: p,
        responseType: y,
        headers: v,
        withCredentials: E = "same-origin",
        fetchOptions: S,
      } = Vp(r);
      y = y ? (y + "").toLowerCase() : "text";
      let P = Q1([l, c && c.toAbortSignal()], f),
        k;
      const T =
        P &&
        P.unsubscribe &&
        (() => {
          P.unsubscribe();
        });
      let R;
      try {
        if (
          p &&
          tw &&
          i !== "get" &&
          i !== "head" &&
          (R = await rw(v, o)) !== 0
        ) {
          let X = new Request(n, { method: "POST", body: o, duplex: "half" }),
            re;
          if (
            (A.isFormData(o) &&
              (re = X.headers.get("content-type")) &&
              v.setContentType(re),
            X.body)
          ) {
            const [se, pe] = vh(R, No(wh(p)));
            o = kh(X.body, Sh, se, pe);
          }
        }
        A.isString(E) || (E = E ? "include" : "omit");
        const O = "credentials" in Request.prototype;
        k = new Request(n, {
          ...S,
          signal: P,
          method: i.toUpperCase(),
          headers: v.normalize().toJSON(),
          body: o,
          duplex: "half",
          credentials: O ? E : void 0,
        });
        let F = await fetch(k);
        const $ = yu && (y === "stream" || y === "response");
        if (yu && (g || ($ && T))) {
          const X = {};
          ["status", "statusText", "headers"].forEach((he) => {
            X[he] = F[he];
          });
          const re = A.toFiniteNumber(F.headers.get("content-length")),
            [se, pe] = (g && vh(re, No(wh(g), !0))) || [];
          F = new Response(
            kh(F.body, Sh, se, () => {
              pe && pe(), T && T();
            }),
            X
          );
        }
        y = y || "text";
        let z = await Ro[A.findKey(Ro, y) || "text"](F, r);
        return (
          !$ && T && T(),
          await new Promise((X, re) => {
            Hp(X, re, {
              data: z,
              headers: dt.from(F.headers),
              status: F.status,
              statusText: F.statusText,
              config: r,
              request: k,
            });
          })
        );
      } catch (O) {
        throw (
          (T && T(),
          O && O.name === "TypeError" && /fetch/i.test(O.message)
            ? Object.assign(new ne("Network Error", ne.ERR_NETWORK, r, k), {
                cause: O.cause || O,
              })
            : ne.from(O, O && O.code, r, k))
        );
      }
    }),
  vu = { http: w1, xhr: J1, fetch: iw };
A.forEach(vu, (r, n) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: n });
    } catch {}
    Object.defineProperty(r, "adapterName", { value: n });
  }
});
const Eh = (r) => `- ${r}`,
  sw = (r) => A.isFunction(r) || r === null || r === !1,
  Kp = {
    getAdapter: (r) => {
      r = A.isArray(r) ? r : [r];
      const { length: n } = r;
      let i, o;
      const l = {};
      for (let c = 0; c < n; c++) {
        i = r[c];
        let f;
        if (
          ((o = i),
          !sw(i) && ((o = vu[(f = String(i)).toLowerCase()]), o === void 0))
        )
          throw new ne(`Unknown adapter '${f}'`);
        if (o) break;
        l[f || "#" + c] = o;
      }
      if (!o) {
        const c = Object.entries(l).map(
          ([g, p]) =>
            `adapter ${g} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let f = n
          ? c.length > 1
            ? `since :
` +
              c.map(Eh).join(`
`)
            : " " + Eh(c[0])
          : "as no adapter specified";
        throw new ne(
          "There is no suitable adapter to dispatch the request " + f,
          "ERR_NOT_SUPPORT"
        );
      }
      return o;
    },
    adapters: vu,
  };
function Xl(r) {
  if (
    (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
  )
    throw new Hr(null, r);
}
function _h(r) {
  return (
    Xl(r),
    (r.headers = dt.from(r.headers)),
    (r.data = Zl.call(r, r.transformRequest)),
    ["post", "put", "patch"].indexOf(r.method) !== -1 &&
      r.headers.setContentType("application/x-www-form-urlencoded", !1),
    Kp.getAdapter(r.adapter || qi.adapter)(r).then(
      function (o) {
        return (
          Xl(r),
          (o.data = Zl.call(r, r.transformResponse, o)),
          (o.headers = dt.from(o.headers)),
          o
        );
      },
      function (o) {
        return (
          zp(o) ||
            (Xl(r),
            o &&
              o.response &&
              ((o.response.data = Zl.call(r, r.transformResponse, o.response)),
              (o.response.headers = dt.from(o.response.headers)))),
          Promise.reject(o)
        );
      }
    )
  );
}
const Gp = "1.7.9",
  $o = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (r, n) => {
    $o[r] = function (o) {
      return typeof o === r || "a" + (n < 1 ? "n " : " ") + r;
    };
  }
);
const Ch = {};
$o.transitional = function (n, i, o) {
  function l(c, f) {
    return (
      "[Axios v" +
      Gp +
      "] Transitional option '" +
      c +
      "'" +
      f +
      (o ? ". " + o : "")
    );
  }
  return (c, f, g) => {
    if (n === !1)
      throw new ne(
        l(f, " has been removed" + (i ? " in " + i : "")),
        ne.ERR_DEPRECATED
      );
    return (
      i &&
        !Ch[f] &&
        ((Ch[f] = !0),
        console.warn(
          l(
            f,
            " has been deprecated since v" +
              i +
              " and will be removed in the near future"
          )
        )),
      n ? n(c, f, g) : !0
    );
  };
};
$o.spelling = function (n) {
  return (i, o) => (console.warn(`${o} is likely a misspelling of ${n}`), !0);
};
function ow(r, n, i) {
  if (typeof r != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(r);
  let l = o.length;
  for (; l-- > 0; ) {
    const c = o[l],
      f = n[c];
    if (f) {
      const g = r[c],
        p = g === void 0 || f(g, c, r);
      if (p !== !0)
        throw new ne("option " + c + " must be " + p, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new ne("Unknown option " + c, ne.ERR_BAD_OPTION);
  }
}
const xo = { assertOptions: ow, validators: $o },
  $t = xo.validators;
class tr {
  constructor(n) {
    (this.defaults = n),
      (this.interceptors = { request: new gh(), response: new gh() });
  }
  async request(n, i) {
    try {
      return await this._request(n, i);
    } catch (o) {
      if (o instanceof Error) {
        let l = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(l)
          : (l = new Error());
        const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack
            ? c &&
              !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (o.stack +=
                `
` + c)
            : (o.stack = c);
        } catch {}
      }
      throw o;
    }
  }
  _request(n, i) {
    typeof n == "string" ? ((i = i || {}), (i.url = n)) : (i = n || {}),
      (i = rr(this.defaults, i));
    const { transitional: o, paramsSerializer: l, headers: c } = i;
    o !== void 0 &&
      xo.assertOptions(
        o,
        {
          silentJSONParsing: $t.transitional($t.boolean),
          forcedJSONParsing: $t.transitional($t.boolean),
          clarifyTimeoutError: $t.transitional($t.boolean),
        },
        !1
      ),
      l != null &&
        (A.isFunction(l)
          ? (i.paramsSerializer = { serialize: l })
          : xo.assertOptions(
              l,
              { encode: $t.function, serialize: $t.function },
              !0
            )),
      xo.assertOptions(
        i,
        {
          baseUrl: $t.spelling("baseURL"),
          withXsrfToken: $t.spelling("withXSRFToken"),
        },
        !0
      ),
      (i.method = (i.method || this.defaults.method || "get").toLowerCase());
    let f = c && A.merge(c.common, c[i.method]);
    c &&
      A.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (k) => {
          delete c[k];
        }
      ),
      (i.headers = dt.concat(f, c));
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function (T) {
      (typeof T.runWhen == "function" && T.runWhen(i) === !1) ||
        ((p = p && T.synchronous), g.unshift(T.fulfilled, T.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function (T) {
      y.push(T.fulfilled, T.rejected);
    });
    let v,
      E = 0,
      S;
    if (!p) {
      const k = [_h.bind(this), void 0];
      for (
        k.unshift.apply(k, g),
          k.push.apply(k, y),
          S = k.length,
          v = Promise.resolve(i);
        E < S;

      )
        v = v.then(k[E++], k[E++]);
      return v;
    }
    S = g.length;
    let P = i;
    for (E = 0; E < S; ) {
      const k = g[E++],
        T = g[E++];
      try {
        P = k(P);
      } catch (R) {
        T.call(this, R);
        break;
      }
    }
    try {
      v = _h.call(this, P);
    } catch (k) {
      return Promise.reject(k);
    }
    for (E = 0, S = y.length; E < S; ) v = v.then(y[E++], y[E++]);
    return v;
  }
  getUri(n) {
    n = rr(this.defaults, n);
    const i = $p(n.baseURL, n.url);
    return Fp(i, n.params, n.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function (n) {
  tr.prototype[n] = function (i, o) {
    return this.request(
      rr(o || {}, { method: n, url: i, data: (o || {}).data })
    );
  };
});
A.forEach(["post", "put", "patch"], function (n) {
  function i(o) {
    return function (c, f, g) {
      return this.request(
        rr(g || {}, {
          method: n,
          headers: o ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: f,
        })
      );
    };
  }
  (tr.prototype[n] = i()), (tr.prototype[n + "Form"] = i(!0));
});
class Hu {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function (c) {
      i = c;
    });
    const o = this;
    this.promise.then((l) => {
      if (!o._listeners) return;
      let c = o._listeners.length;
      for (; c-- > 0; ) o._listeners[c](l);
      o._listeners = null;
    }),
      (this.promise.then = (l) => {
        let c;
        const f = new Promise((g) => {
          o.subscribe(g), (c = g);
        }).then(l);
        return (
          (f.cancel = function () {
            o.unsubscribe(c);
          }),
          f
        );
      }),
      n(function (c, f, g) {
        o.reason || ((o.reason = new Hr(c, f, g)), i(o.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
  }
  unsubscribe(n) {
    if (!this._listeners) return;
    const i = this._listeners.indexOf(n);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const n = new AbortController(),
      i = (o) => {
        n.abort(o);
      };
    return (
      this.subscribe(i),
      (n.signal.unsubscribe = () => this.unsubscribe(i)),
      n.signal
    );
  }
  static source() {
    let n;
    return {
      token: new Hu(function (l) {
        n = l;
      }),
      cancel: n,
    };
  }
}
function aw(r) {
  return function (i) {
    return r.apply(null, i);
  };
}
function lw(r) {
  return A.isObject(r) && r.isAxiosError === !0;
}
const wu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(wu).forEach(([r, n]) => {
  wu[n] = r;
});
function Jp(r) {
  const n = new tr(r),
    i = bp(tr.prototype.request, n);
  return (
    A.extend(i, tr.prototype, n, { allOwnKeys: !0 }),
    A.extend(i, n, null, { allOwnKeys: !0 }),
    (i.create = function (l) {
      return Jp(rr(r, l));
    }),
    i
  );
}
const je = Jp(qi);
je.Axios = tr;
je.CanceledError = Hr;
je.CancelToken = Hu;
je.isCancel = zp;
je.VERSION = Gp;
je.toFormData = zo;
je.AxiosError = ne;
je.Cancel = je.CanceledError;
je.all = function (n) {
  return Promise.all(n);
};
je.spread = aw;
je.isAxiosError = lw;
je.mergeConfig = rr;
je.AxiosHeaders = dt;
je.formToJSON = (r) => Bp(A.isHTMLForm(r) ? new FormData(r) : r);
je.getAdapter = Kp.getAdapter;
je.HttpStatusCode = wu;
je.default = je;
const At = je.create({
  baseURL: "http://localhost:3000",
  timeout: 1e4,
  headers: { "Content-Type": "application/json" },
  withCredentials: !0,
});
At.interceptors.response.use(
  (r) => r,
  (r) => Promise.reject(r)
);
function Vo() {
  return {
    createProduct: async (c) => {
      try {
        console.log("Form data being sent:", c);
        const f = await je.post("/api/products", c);
        return console.log("Response from server:", f), f;
      } catch (f) {
        throw (console.error("Error creating product:", f), f);
      }
    },
    getProduct: async () => {
      const c = await At.post("/api/products");
      return console.log(c), c.data;
    },
    getProductById: async (c) =>
      await At.get("http://localhost:3000/api/products/" + c),
    getPagnigationProduct: async (c, f) =>
      (
        await At.get(
          "http://localhost:3000/api/products/getPaginatedProducts?page=" +
            c +
            "&size=" +
            f
        )
      ).data,
    getProductWithFilter: async (c) => {
      let f = "";
      return (
        c.category && (f += `category=${c.category}&`),
        c.priceMin && (f += `priceMin=${c.priceMin}&`),
        c.priceMax && (f += `priceMax=${c.priceMax}&`),
        (f = f.endsWith("&") ? f.slice(0, -1) : f),
        console.log("Query:", f),
        (await At.get("http://localhost:3000/api/products?" + f)).data
      );
    },
  };
}
const bh = ({ element: r, title: n }) =>
  h.jsxs("button", {
    className: r,
    children: [" ", h.jsx("span", { children: n })],
  });
function Qp(r) {
  var n,
    i,
    o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var l = r.length;
      for (n = 0; n < l; n++)
        r[n] && (i = Qp(r[n])) && (o && (o += " "), (o += i));
    } else for (i in r) r[i] && (o && (o += " "), (o += i));
  return o;
}
function $e() {
  for (var r, n, i = 0, o = "", l = arguments.length; i < l; i++)
    (r = arguments[i]) && (n = Qp(r)) && (o && (o += " "), (o += n));
  return o;
}
const uw = ({}) => {
    const [r, n] = b.useState(1),
      [i, o] = b.useState(1);
    b.useState(!1);
    const [l, c] = b.useState(),
      f = 8;
    b.useEffect(() => {
      (async () => {
        const y = await Vo().getPagnigationProduct(r, f);
        c(y == null ? void 0 : y.products), o(y == null ? void 0 : y.pages);
      })();
    }, [r]);
    const g = (p) => {
      n(p);
    };
    return h.jsx(h.Fragment, {
      children: h.jsx("div", {
        className: "Items  p-7 m-7",
        children: h.jsxs("div", {
          className: "Products",
          children: [
            h.jsx("div", {
              className: "flex justify-center ",
              children: h.jsx("h1", {
                className: "header-3 custom-h p-5 text-center  ",
                children: h.jsx("span", {
                  className: `w-[240px] bg-gradient-to-r uppercase rounded-lg  from-slate-400 to-slate-800  hover:from-gray-100 \r
               `,
                  children: "oustanding products ",
                }),
              }),
            }),
            h.jsx("div", {
              className: "m-4 grid grid-cols-4 gap-4 p-4 max-md:grid-cols-2",
              children:
                l == null
                  ? void 0
                  : l.map((p, y) => {
                      var v, E;
                      return (
                        console.log(
                          (v = p == null ? void 0 : p.ProductVariants[0]) ==
                            null
                            ? void 0
                            : v.image_url
                        ),
                        h.jsxs(
                          Mn,
                          {
                            to: $e("/product?product=" + p.id),
                            className:
                              "transition-all m-2 cursor-pointer rounded-sm border text-center duration-200  hover:shadow-md",
                            children: [
                              h.jsx("img", {
                                className:
                                  "mx-auto h-52 rounded-sm p-2 max-md:w-full",
                                src:
                                  (E =
                                    p == null
                                      ? void 0
                                      : p.ProductVariants[0]) == null
                                    ? void 0
                                    : E.image_url,
                                alt: "",
                              }),
                              h.jsxs("div", {
                                className: "py-5",
                                children: [
                                  h.jsx("h1", { children: "Product name" }),
                                  h.jsx("p", { children: "introduce" }),
                                ],
                              }),
                              h.jsxs("div", {
                                className: "flex justify-center gap-4 m-4",
                                children: [
                                  h.jsx(bh, {
                                    element:
                                      "custom-btn btn-3 hover:text-black",
                                    title: "Add to Cart",
                                  }),
                                  h.jsx(bh, {
                                    element:
                                      "custom-btn btn-3 hover:text-black ",
                                    title: "Add to Cart",
                                  }),
                                ],
                              }),
                            ],
                          },
                          y
                        )
                      );
                    }),
            }),
            h.jsxs("div", {
              className: "flex justify-center p-4",
              children: [
                h.jsx("button", {
                  className: "px-4 cursor-pointer",
                  onClick: () => g(r - 1),
                  disabled: r === 1,
                  children: "Previous",
                }),
                h.jsxs("span", { children: ["Page ", r, " of ", i] }),
                h.jsx("button", {
                  className: "px-4 cursor-pointer",
                  onClick: () => g(r + 1),
                  disabled: r === i,
                  children: "Next",
                }),
              ],
            }),
            h.jsx("div", {
              className: "flex justify-center",
              children: h.jsx(Mn, {
                to: "/totalProduct",
                className: "uppercase",
                children: "xem them",
              }),
            }),
          ],
        }),
      }),
    });
  },
  cw = [
    { img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    },
  ],
  dw = () => (
    b.useState(!1),
    h.jsx(h.Fragment, {
      children: h.jsx("div", {
        className: "flex",
        children: h.jsxs("div", {
          className: "flex flex-col min-h-screen",
          children: [
            h.jsxs("div", {
              className: "flex-1 relative",
              children: [
                h.jsx(jv, {}),
                h.jsxs("div", {
                  className: "gallery py-4",
                  children: [
                    h.jsx("div", {
                      className: "tite-gallery flex justify-center",
                      children: h.jsx("h1", {
                        className:
                          "rounded-md uppercase bg-gradient-to-r to-blue-700 from-blue-900 p-2 w-64 text-center text-white  ",
                        children: "Our Gallery",
                      }),
                    }),
                    h.jsx("div", {
                      className: "grid grid-cols-2 gap-4 py-4 md:grid-cols-3",
                      children: cw.map((r, n) =>
                        h.jsx(
                          "div",
                          {
                            children: h.jsx("img", {
                              className: "h-auto max-w-full rounded-lg",
                              src: r.img,
                              alt: "",
                            }),
                          },
                          n
                        )
                      ),
                    }),
                  ],
                }),
                h.jsx(uw, {}),
              ],
            }),
            h.jsx(Av, {}),
          ],
        }),
      }),
    })
  );
/*! js-cookie v3.0.5 | MIT */ function fo(r) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n];
    for (var o in i) r[o] = i[o];
  }
  return r;
}
var fw = {
  read: function (r) {
    return (
      r[0] === '"' && (r = r.slice(1, -1)),
      r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (r) {
    return encodeURIComponent(r).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function xu(r, n) {
  function i(l, c, f) {
    if (!(typeof document > "u")) {
      (f = fo({}, n, f)),
        typeof f.expires == "number" &&
          (f.expires = new Date(Date.now() + f.expires * 864e5)),
        f.expires && (f.expires = f.expires.toUTCString()),
        (l = encodeURIComponent(l)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var g = "";
      for (var p in f)
        f[p] &&
          ((g += "; " + p), f[p] !== !0 && (g += "=" + f[p].split(";")[0]));
      return (document.cookie = l + "=" + r.write(c, l) + g);
    }
  }
  function o(l) {
    if (!(typeof document > "u" || (arguments.length && !l))) {
      for (
        var c = document.cookie ? document.cookie.split("; ") : [],
          f = {},
          g = 0;
        g < c.length;
        g++
      ) {
        var p = c[g].split("="),
          y = p.slice(1).join("=");
        try {
          var v = decodeURIComponent(p[0]);
          if (((f[v] = r.read(y, v)), l === v)) break;
        } catch {}
      }
      return l ? f[l] : f;
    }
  }
  return Object.create(
    {
      set: i,
      get: o,
      remove: function (l, c) {
        i(l, "", fo({}, c, { expires: -1 }));
      },
      withAttributes: function (l) {
        return xu(this.converter, fo({}, this.attributes, l));
      },
      withConverter: function (l) {
        return xu(fo({}, this.converter, l), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(r) },
    }
  );
}
var jt = xu(fw, { path: "/" }),
  Nh = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yp = function (r) {
    const n = [];
    let i = 0;
    for (let o = 0; o < r.length; o++) {
      let l = r.charCodeAt(o);
      l < 128
        ? (n[i++] = l)
        : l < 2048
        ? ((n[i++] = (l >> 6) | 192), (n[i++] = (l & 63) | 128))
        : (l & 64512) === 55296 &&
          o + 1 < r.length &&
          (r.charCodeAt(o + 1) & 64512) === 56320
        ? ((l = 65536 + ((l & 1023) << 10) + (r.charCodeAt(++o) & 1023)),
          (n[i++] = (l >> 18) | 240),
          (n[i++] = ((l >> 12) & 63) | 128),
          (n[i++] = ((l >> 6) & 63) | 128),
          (n[i++] = (l & 63) | 128))
        : ((n[i++] = (l >> 12) | 224),
          (n[i++] = ((l >> 6) & 63) | 128),
          (n[i++] = (l & 63) | 128));
    }
    return n;
  },
  hw = function (r) {
    const n = [];
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      const l = r[i++];
      if (l < 128) n[o++] = String.fromCharCode(l);
      else if (l > 191 && l < 224) {
        const c = r[i++];
        n[o++] = String.fromCharCode(((l & 31) << 6) | (c & 63));
      } else if (l > 239 && l < 365) {
        const c = r[i++],
          f = r[i++],
          g = r[i++],
          p =
            (((l & 7) << 18) | ((c & 63) << 12) | ((f & 63) << 6) | (g & 63)) -
            65536;
        (n[o++] = String.fromCharCode(55296 + (p >> 10))),
          (n[o++] = String.fromCharCode(56320 + (p & 1023)));
      } else {
        const c = r[i++],
          f = r[i++];
        n[o++] = String.fromCharCode(
          ((l & 15) << 12) | ((c & 63) << 6) | (f & 63)
        );
      }
    }
    return n.join("");
  },
  Zp = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(r, n) {
      if (!Array.isArray(r))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const i = n ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        o = [];
      for (let l = 0; l < r.length; l += 3) {
        const c = r[l],
          f = l + 1 < r.length,
          g = f ? r[l + 1] : 0,
          p = l + 2 < r.length,
          y = p ? r[l + 2] : 0,
          v = c >> 2,
          E = ((c & 3) << 4) | (g >> 4);
        let S = ((g & 15) << 2) | (y >> 6),
          P = y & 63;
        p || ((P = 64), f || (S = 64)), o.push(i[v], i[E], i[S], i[P]);
      }
      return o.join("");
    },
    encodeString(r, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? btoa(r)
        : this.encodeByteArray(Yp(r), n);
    },
    decodeString(r, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? atob(r)
        : hw(this.decodeStringToByteArray(r, n));
    },
    decodeStringToByteArray(r, n) {
      this.init_();
      const i = n ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        o = [];
      for (let l = 0; l < r.length; ) {
        const c = i[r.charAt(l++)],
          g = l < r.length ? i[r.charAt(l)] : 0;
        ++l;
        const y = l < r.length ? i[r.charAt(l)] : 64;
        ++l;
        const E = l < r.length ? i[r.charAt(l)] : 64;
        if ((++l, c == null || g == null || y == null || E == null))
          throw new pw();
        const S = (c << 2) | (g >> 4);
        if ((o.push(S), y !== 64)) {
          const P = ((g << 4) & 240) | (y >> 2);
          if ((o.push(P), E !== 64)) {
            const k = ((y << 6) & 192) | E;
            o.push(k);
          }
        }
      }
      return o;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let r = 0; r < this.ENCODED_VALS.length; r++)
          (this.byteToCharMap_[r] = this.ENCODED_VALS.charAt(r)),
            (this.charToByteMap_[this.byteToCharMap_[r]] = r),
            (this.byteToCharMapWebSafe_[r] =
              this.ENCODED_VALS_WEBSAFE.charAt(r)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]] = r),
            r >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)] = r),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)] = r));
      }
    },
  };
class pw extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const mw = function (r) {
    const n = Yp(r);
    return Zp.encodeByteArray(n, !0);
  },
  Xp = function (r) {
    return mw(r).replace(/\./g, "");
  },
  em = function (r) {
    try {
      return Zp.decodeString(r, !0);
    } catch (n) {
      console.error("base64Decode failed: ", n);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gw() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yw = () => gw().__FIREBASE_DEFAULTS__,
  vw = () => {
    if (typeof process > "u" || typeof Nh > "u") return;
    const r = Nh.__FIREBASE_DEFAULTS__;
    if (r) return JSON.parse(r);
  },
  ww = () => {
    if (typeof document > "u") return;
    let r;
    try {
      r = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const n = r && em(r[1]);
    return n && JSON.parse(n);
  },
  $u = () => {
    try {
      return yw() || vw() || ww();
    } catch (r) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);
      return;
    }
  },
  xw = (r) => {
    var n, i;
    return (i =
      (n = $u()) === null || n === void 0 ? void 0 : n.emulatorHosts) ===
      null || i === void 0
      ? void 0
      : i[r];
  },
  tm = () => {
    var r;
    return (r = $u()) === null || r === void 0 ? void 0 : r.config;
  },
  nm = (r) => {
    var n;
    return (n = $u()) === null || n === void 0 ? void 0 : n[`_${r}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kw {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((n, i) => {
        (this.resolve = n), (this.reject = i);
      }));
  }
  wrapCallback(n) {
    return (i, o) => {
      i ? this.reject(i) : this.resolve(o),
        typeof n == "function" &&
          (this.promise.catch(() => {}), n.length === 1 ? n(i) : n(i, o));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Sw() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())
  );
}
function Ew() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function _w() {
  const r =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof r == "object" && r.id !== void 0;
}
function Cw() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function bw() {
  const r = rt();
  return r.indexOf("MSIE ") >= 0 || r.indexOf("Trident/") >= 0;
}
function Nw() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Rw() {
  return new Promise((r, n) => {
    try {
      let i = !0;
      const o = "validate-browser-context-for-indexeddb-analytics-module",
        l = self.indexedDB.open(o);
      (l.onsuccess = () => {
        l.result.close(), i || self.indexedDB.deleteDatabase(o), r(!0);
      }),
        (l.onupgradeneeded = () => {
          i = !1;
        }),
        (l.onerror = () => {
          var c;
          n(
            ((c = l.error) === null || c === void 0 ? void 0 : c.message) || ""
          );
        });
    } catch (i) {
      n(i);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tw = "FirebaseError";
class Fn extends Error {
  constructor(n, i, o) {
    super(i),
      (this.code = n),
      (this.customData = o),
      (this.name = Tw),
      Object.setPrototypeOf(this, Fn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Ki.prototype.create);
  }
}
class Ki {
  constructor(n, i, o) {
    (this.service = n), (this.serviceName = i), (this.errors = o);
  }
  create(n, ...i) {
    const o = i[0] || {},
      l = `${this.service}/${n}`,
      c = this.errors[n],
      f = c ? Pw(c, o) : "Error",
      g = `${this.serviceName}: ${f} (${l}).`;
    return new Fn(l, g, o);
  }
}
function Pw(r, n) {
  return r.replace(Iw, (i, o) => {
    const l = n[o];
    return l != null ? String(l) : `<${o}?>`;
  });
}
const Iw = /\{\$([^}]+)}/g;
function jw(r) {
  for (const n in r) if (Object.prototype.hasOwnProperty.call(r, n)) return !1;
  return !0;
}
function To(r, n) {
  if (r === n) return !0;
  const i = Object.keys(r),
    o = Object.keys(n);
  for (const l of i) {
    if (!o.includes(l)) return !1;
    const c = r[l],
      f = n[l];
    if (Rh(c) && Rh(f)) {
      if (!To(c, f)) return !1;
    } else if (c !== f) return !1;
  }
  for (const l of o) if (!i.includes(l)) return !1;
  return !0;
}
function Rh(r) {
  return r !== null && typeof r == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gi(r) {
  const n = [];
  for (const [i, o] of Object.entries(r))
    Array.isArray(o)
      ? o.forEach((l) => {
          n.push(encodeURIComponent(i) + "=" + encodeURIComponent(l));
        })
      : n.push(encodeURIComponent(i) + "=" + encodeURIComponent(o));
  return n.length ? "&" + n.join("&") : "";
}
function Aw(r, n) {
  const i = new Ow(r, n);
  return i.subscribe.bind(i);
}
class Ow {
  constructor(n, i) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = i),
      this.task
        .then(() => {
          n(this);
        })
        .catch((o) => {
          this.error(o);
        });
  }
  next(n) {
    this.forEachObserver((i) => {
      i.next(n);
    });
  }
  error(n) {
    this.forEachObserver((i) => {
      i.error(n);
    }),
      this.close(n);
  }
  complete() {
    this.forEachObserver((n) => {
      n.complete();
    }),
      this.close();
  }
  subscribe(n, i, o) {
    let l;
    if (n === void 0 && i === void 0 && o === void 0)
      throw new Error("Missing Observer.");
    Lw(n, ["next", "error", "complete"])
      ? (l = n)
      : (l = { next: n, error: i, complete: o }),
      l.next === void 0 && (l.next = eu),
      l.error === void 0 && (l.error = eu),
      l.complete === void 0 && (l.complete = eu);
    const c = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? l.error(this.finalError) : l.complete();
          } catch {}
        }),
      this.observers.push(l),
      c
    );
  }
  unsubscribeOne(n) {
    this.observers === void 0 ||
      this.observers[n] === void 0 ||
      (delete this.observers[n],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(n) {
    if (!this.finalized)
      for (let i = 0; i < this.observers.length; i++) this.sendOne(i, n);
  }
  sendOne(n, i) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[n] !== void 0)
        try {
          i(this.observers[n]);
        } catch (o) {
          typeof console < "u" && console.error && console.error(o);
        }
    });
  }
  close(n) {
    this.finalized ||
      ((this.finalized = !0),
      n !== void 0 && (this.finalError = n),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function Lw(r, n) {
  if (typeof r != "object" || r === null) return !1;
  for (const i of n) if (i in r && typeof r[i] == "function") return !0;
  return !1;
}
function eu() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sr(r) {
  return r && r._delegate ? r._delegate : r;
}
class Lr {
  constructor(n, i, o) {
    (this.name = n),
      (this.instanceFactory = i),
      (this.type = o),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(n) {
    return (this.instantiationMode = n), this;
  }
  setMultipleInstances(n) {
    return (this.multipleInstances = n), this;
  }
  setServiceProps(n) {
    return (this.serviceProps = n), this;
  }
  setInstanceCreatedCallback(n) {
    return (this.onInstanceCreated = n), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dw {
  constructor(n, i) {
    (this.name = n),
      (this.container = i),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(n) {
    const i = this.normalizeInstanceIdentifier(n);
    if (!this.instancesDeferred.has(i)) {
      const o = new kw();
      if (
        (this.instancesDeferred.set(i, o),
        this.isInitialized(i) || this.shouldAutoInitialize())
      )
        try {
          const l = this.getOrInitializeService({ instanceIdentifier: i });
          l && o.resolve(l);
        } catch {}
    }
    return this.instancesDeferred.get(i).promise;
  }
  getImmediate(n) {
    var i;
    const o = this.normalizeInstanceIdentifier(
        n == null ? void 0 : n.identifier
      ),
      l =
        (i = n == null ? void 0 : n.optional) !== null && i !== void 0 ? i : !1;
    if (this.isInitialized(o) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: o });
      } catch (c) {
        if (l) return null;
        throw c;
      }
    else {
      if (l) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(n) {
    if (n.name !== this.name)
      throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = n), !!this.shouldAutoInitialize())) {
      if (Fw(n))
        try {
          this.getOrInitializeService({ instanceIdentifier: Zn });
        } catch {}
      for (const [i, o] of this.instancesDeferred.entries()) {
        const l = this.normalizeInstanceIdentifier(i);
        try {
          const c = this.getOrInitializeService({ instanceIdentifier: l });
          o.resolve(c);
        } catch {}
      }
    }
  }
  clearInstance(n = Zn) {
    this.instancesDeferred.delete(n),
      this.instancesOptions.delete(n),
      this.instances.delete(n);
  }
  async delete() {
    const n = Array.from(this.instances.values());
    await Promise.all([
      ...n.filter((i) => "INTERNAL" in i).map((i) => i.INTERNAL.delete()),
      ...n.filter((i) => "_delete" in i).map((i) => i._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(n = Zn) {
    return this.instances.has(n);
  }
  getOptions(n = Zn) {
    return this.instancesOptions.get(n) || {};
  }
  initialize(n = {}) {
    const { options: i = {} } = n,
      o = this.normalizeInstanceIdentifier(n.instanceIdentifier);
    if (this.isInitialized(o))
      throw Error(`${this.name}(${o}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const l = this.getOrInitializeService({
      instanceIdentifier: o,
      options: i,
    });
    for (const [c, f] of this.instancesDeferred.entries()) {
      const g = this.normalizeInstanceIdentifier(c);
      o === g && f.resolve(l);
    }
    return l;
  }
  onInit(n, i) {
    var o;
    const l = this.normalizeInstanceIdentifier(i),
      c =
        (o = this.onInitCallbacks.get(l)) !== null && o !== void 0
          ? o
          : new Set();
    c.add(n), this.onInitCallbacks.set(l, c);
    const f = this.instances.get(l);
    return (
      f && n(f, l),
      () => {
        c.delete(n);
      }
    );
  }
  invokeOnInitCallbacks(n, i) {
    const o = this.onInitCallbacks.get(i);
    if (o)
      for (const l of o)
        try {
          l(n, i);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: n, options: i = {} }) {
    let o = this.instances.get(n);
    if (
      !o &&
      this.component &&
      ((o = this.component.instanceFactory(this.container, {
        instanceIdentifier: Mw(n),
        options: i,
      })),
      this.instances.set(n, o),
      this.instancesOptions.set(n, i),
      this.invokeOnInitCallbacks(o, n),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, n, o);
      } catch {}
    return o || null;
  }
  normalizeInstanceIdentifier(n = Zn) {
    return this.component ? (this.component.multipleInstances ? n : Zn) : n;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Mw(r) {
  return r === Zn ? void 0 : r;
}
function Fw(r) {
  return r.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Uw {
  constructor(n) {
    (this.name = n), (this.providers = new Map());
  }
  addComponent(n) {
    const i = this.getProvider(n.name);
    if (i.isComponentSet())
      throw new Error(
        `Component ${n.name} has already been registered with ${this.name}`
      );
    i.setComponent(n);
  }
  addOrOverwriteComponent(n) {
    this.getProvider(n.name).isComponentSet() && this.providers.delete(n.name),
      this.addComponent(n);
  }
  getProvider(n) {
    if (this.providers.has(n)) return this.providers.get(n);
    const i = new Dw(n, this);
    return this.providers.set(n, i), i;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ye;
(function (r) {
  (r[(r.DEBUG = 0)] = "DEBUG"),
    (r[(r.VERBOSE = 1)] = "VERBOSE"),
    (r[(r.INFO = 2)] = "INFO"),
    (r[(r.WARN = 3)] = "WARN"),
    (r[(r.ERROR = 4)] = "ERROR"),
    (r[(r.SILENT = 5)] = "SILENT");
})(ye || (ye = {}));
const Bw = {
    debug: ye.DEBUG,
    verbose: ye.VERBOSE,
    info: ye.INFO,
    warn: ye.WARN,
    error: ye.ERROR,
    silent: ye.SILENT,
  },
  zw = ye.INFO,
  Hw = {
    [ye.DEBUG]: "log",
    [ye.VERBOSE]: "log",
    [ye.INFO]: "info",
    [ye.WARN]: "warn",
    [ye.ERROR]: "error",
  },
  $w = (r, n, ...i) => {
    if (n < r.logLevel) return;
    const o = new Date().toISOString(),
      l = Hw[n];
    if (l) console[l](`[${o}]  ${r.name}:`, ...i);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${n})`
      );
  };
class rm {
  constructor(n) {
    (this.name = n),
      (this._logLevel = zw),
      (this._logHandler = $w),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(n) {
    if (!(n in ye))
      throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);
    this._logLevel = n;
  }
  setLogLevel(n) {
    this._logLevel = typeof n == "string" ? Bw[n] : n;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(n) {
    if (typeof n != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = n;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(n) {
    this._userLogHandler = n;
  }
  debug(...n) {
    this._userLogHandler && this._userLogHandler(this, ye.DEBUG, ...n),
      this._logHandler(this, ye.DEBUG, ...n);
  }
  log(...n) {
    this._userLogHandler && this._userLogHandler(this, ye.VERBOSE, ...n),
      this._logHandler(this, ye.VERBOSE, ...n);
  }
  info(...n) {
    this._userLogHandler && this._userLogHandler(this, ye.INFO, ...n),
      this._logHandler(this, ye.INFO, ...n);
  }
  warn(...n) {
    this._userLogHandler && this._userLogHandler(this, ye.WARN, ...n),
      this._logHandler(this, ye.WARN, ...n);
  }
  error(...n) {
    this._userLogHandler && this._userLogHandler(this, ye.ERROR, ...n),
      this._logHandler(this, ye.ERROR, ...n);
  }
}
const Vw = (r, n) => n.some((i) => r instanceof i);
let Th, Ph;
function Ww() {
  return (
    Th ||
    (Th = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function qw() {
  return (
    Ph ||
    (Ph = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const im = new WeakMap(),
  ku = new WeakMap(),
  sm = new WeakMap(),
  tu = new WeakMap(),
  Vu = new WeakMap();
function Kw(r) {
  const n = new Promise((i, o) => {
    const l = () => {
        r.removeEventListener("success", c), r.removeEventListener("error", f);
      },
      c = () => {
        i(On(r.result)), l();
      },
      f = () => {
        o(r.error), l();
      };
    r.addEventListener("success", c), r.addEventListener("error", f);
  });
  return (
    n
      .then((i) => {
        i instanceof IDBCursor && im.set(i, r);
      })
      .catch(() => {}),
    Vu.set(n, r),
    n
  );
}
function Gw(r) {
  if (ku.has(r)) return;
  const n = new Promise((i, o) => {
    const l = () => {
        r.removeEventListener("complete", c),
          r.removeEventListener("error", f),
          r.removeEventListener("abort", f);
      },
      c = () => {
        i(), l();
      },
      f = () => {
        o(r.error || new DOMException("AbortError", "AbortError")), l();
      };
    r.addEventListener("complete", c),
      r.addEventListener("error", f),
      r.addEventListener("abort", f);
  });
  ku.set(r, n);
}
let Su = {
  get(r, n, i) {
    if (r instanceof IDBTransaction) {
      if (n === "done") return ku.get(r);
      if (n === "objectStoreNames") return r.objectStoreNames || sm.get(r);
      if (n === "store")
        return i.objectStoreNames[1]
          ? void 0
          : i.objectStore(i.objectStoreNames[0]);
    }
    return On(r[n]);
  },
  set(r, n, i) {
    return (r[n] = i), !0;
  },
  has(r, n) {
    return r instanceof IDBTransaction && (n === "done" || n === "store")
      ? !0
      : n in r;
  },
};
function Jw(r) {
  Su = r(Su);
}
function Qw(r) {
  return r === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (n, ...i) {
        const o = r.call(nu(this), n, ...i);
        return sm.set(o, n.sort ? n.sort() : [n]), On(o);
      }
    : qw().includes(r)
    ? function (...n) {
        return r.apply(nu(this), n), On(im.get(this));
      }
    : function (...n) {
        return On(r.apply(nu(this), n));
      };
}
function Yw(r) {
  return typeof r == "function"
    ? Qw(r)
    : (r instanceof IDBTransaction && Gw(r),
      Vw(r, Ww()) ? new Proxy(r, Su) : r);
}
function On(r) {
  if (r instanceof IDBRequest) return Kw(r);
  if (tu.has(r)) return tu.get(r);
  const n = Yw(r);
  return n !== r && (tu.set(r, n), Vu.set(n, r)), n;
}
const nu = (r) => Vu.get(r);
function Zw(r, n, { blocked: i, upgrade: o, blocking: l, terminated: c } = {}) {
  const f = indexedDB.open(r, n),
    g = On(f);
  return (
    o &&
      f.addEventListener("upgradeneeded", (p) => {
        o(On(f.result), p.oldVersion, p.newVersion, On(f.transaction), p);
      }),
    i && f.addEventListener("blocked", (p) => i(p.oldVersion, p.newVersion, p)),
    g
      .then((p) => {
        c && p.addEventListener("close", () => c()),
          l &&
            p.addEventListener("versionchange", (y) =>
              l(y.oldVersion, y.newVersion, y)
            );
      })
      .catch(() => {}),
    g
  );
}
const Xw = ["get", "getKey", "getAll", "getAllKeys", "count"],
  ex = ["put", "add", "delete", "clear"],
  ru = new Map();
function Ih(r, n) {
  if (!(r instanceof IDBDatabase && !(n in r) && typeof n == "string")) return;
  if (ru.get(n)) return ru.get(n);
  const i = n.replace(/FromIndex$/, ""),
    o = n !== i,
    l = ex.includes(i);
  if (
    !(i in (o ? IDBIndex : IDBObjectStore).prototype) ||
    !(l || Xw.includes(i))
  )
    return;
  const c = async function (f, ...g) {
    const p = this.transaction(f, l ? "readwrite" : "readonly");
    let y = p.store;
    return (
      o && (y = y.index(g.shift())),
      (await Promise.all([y[i](...g), l && p.done]))[0]
    );
  };
  return ru.set(n, c), c;
}
Jw((r) => ({
  ...r,
  get: (n, i, o) => Ih(n, i) || r.get(n, i, o),
  has: (n, i) => !!Ih(n, i) || r.has(n, i),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tx {
  constructor(n) {
    this.container = n;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((i) => {
        if (nx(i)) {
          const o = i.getImmediate();
          return `${o.library}/${o.version}`;
        } else return null;
      })
      .filter((i) => i)
      .join(" ");
  }
}
function nx(r) {
  const n = r.getComponent();
  return (n == null ? void 0 : n.type) === "VERSION";
}
const Eu = "@firebase/app",
  jh = "0.11.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const un = new rm("@firebase/app"),
  rx = "@firebase/app-compat",
  ix = "@firebase/analytics-compat",
  sx = "@firebase/analytics",
  ox = "@firebase/app-check-compat",
  ax = "@firebase/app-check",
  lx = "@firebase/auth",
  ux = "@firebase/auth-compat",
  cx = "@firebase/database",
  dx = "@firebase/data-connect",
  fx = "@firebase/database-compat",
  hx = "@firebase/functions",
  px = "@firebase/functions-compat",
  mx = "@firebase/installations",
  gx = "@firebase/installations-compat",
  yx = "@firebase/messaging",
  vx = "@firebase/messaging-compat",
  wx = "@firebase/performance",
  xx = "@firebase/performance-compat",
  kx = "@firebase/remote-config",
  Sx = "@firebase/remote-config-compat",
  Ex = "@firebase/storage",
  _x = "@firebase/storage-compat",
  Cx = "@firebase/firestore",
  bx = "@firebase/vertexai",
  Nx = "@firebase/firestore-compat",
  Rx = "firebase",
  Tx = "11.3.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _u = "[DEFAULT]",
  Px = {
    [Eu]: "fire-core",
    [rx]: "fire-core-compat",
    [sx]: "fire-analytics",
    [ix]: "fire-analytics-compat",
    [ax]: "fire-app-check",
    [ox]: "fire-app-check-compat",
    [lx]: "fire-auth",
    [ux]: "fire-auth-compat",
    [cx]: "fire-rtdb",
    [dx]: "fire-data-connect",
    [fx]: "fire-rtdb-compat",
    [hx]: "fire-fn",
    [px]: "fire-fn-compat",
    [mx]: "fire-iid",
    [gx]: "fire-iid-compat",
    [yx]: "fire-fcm",
    [vx]: "fire-fcm-compat",
    [wx]: "fire-perf",
    [xx]: "fire-perf-compat",
    [kx]: "fire-rc",
    [Sx]: "fire-rc-compat",
    [Ex]: "fire-gcs",
    [_x]: "fire-gcs-compat",
    [Cx]: "fire-fst",
    [Nx]: "fire-fst-compat",
    [bx]: "fire-vertex",
    "fire-js": "fire-js",
    [Rx]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Po = new Map(),
  Ix = new Map(),
  Cu = new Map();
function Ah(r, n) {
  try {
    r.container.addComponent(n);
  } catch (i) {
    un.debug(
      `Component ${n.name} failed to register with FirebaseApp ${r.name}`,
      i
    );
  }
}
function Fi(r) {
  const n = r.name;
  if (Cu.has(n))
    return (
      un.debug(`There were multiple attempts to register component ${n}.`), !1
    );
  Cu.set(n, r);
  for (const i of Po.values()) Ah(i, r);
  for (const i of Ix.values()) Ah(i, r);
  return !0;
}
function om(r, n) {
  const i = r.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return i && i.triggerHeartbeat(), r.container.getProvider(n);
}
function Vt(r) {
  return r == null ? !1 : r.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jx = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Ln = new Ki("app", "Firebase", jx);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ax {
  constructor(n, i, o) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, n)),
      (this._config = Object.assign({}, i)),
      (this._name = i.name),
      (this._automaticDataCollectionEnabled = i.automaticDataCollectionEnabled),
      (this._container = o),
      this.container.addComponent(new Lr("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(n) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = n);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(n) {
    this._isDeleted = n;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Ln.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ji = Tx;
function am(r, n = {}) {
  let i = r;
  typeof n != "object" && (n = { name: n });
  const o = Object.assign({ name: _u, automaticDataCollectionEnabled: !1 }, n),
    l = o.name;
  if (typeof l != "string" || !l)
    throw Ln.create("bad-app-name", { appName: String(l) });
  if ((i || (i = tm()), !i)) throw Ln.create("no-options");
  const c = Po.get(l);
  if (c) {
    if (To(i, c.options) && To(o, c.config)) return c;
    throw Ln.create("duplicate-app", { appName: l });
  }
  const f = new Uw(l);
  for (const p of Cu.values()) f.addComponent(p);
  const g = new Ax(i, o, f);
  return Po.set(l, g), g;
}
function Ox(r = _u) {
  const n = Po.get(r);
  if (!n && r === _u && tm()) return am();
  if (!n) throw Ln.create("no-app", { appName: r });
  return n;
}
function Ir(r, n, i) {
  var o;
  let l = (o = Px[r]) !== null && o !== void 0 ? o : r;
  i && (l += `-${i}`);
  const c = l.match(/\s|\//),
    f = n.match(/\s|\//);
  if (c || f) {
    const g = [`Unable to register library "${l}" with version "${n}":`];
    c &&
      g.push(
        `library name "${l}" contains illegal characters (whitespace or "/")`
      ),
      c && f && g.push("and"),
      f &&
        g.push(
          `version name "${n}" contains illegal characters (whitespace or "/")`
        ),
      un.warn(g.join(" "));
    return;
  }
  Fi(new Lr(`${l}-version`, () => ({ library: l, version: n }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Lx = "firebase-heartbeat-database",
  Dx = 1,
  Ui = "firebase-heartbeat-store";
let iu = null;
function lm() {
  return (
    iu ||
      (iu = Zw(Lx, Dx, {
        upgrade: (r, n) => {
          switch (n) {
            case 0:
              try {
                r.createObjectStore(Ui);
              } catch (i) {
                console.warn(i);
              }
          }
        },
      }).catch((r) => {
        throw Ln.create("idb-open", { originalErrorMessage: r.message });
      })),
    iu
  );
}
async function Mx(r) {
  try {
    const i = (await lm()).transaction(Ui),
      o = await i.objectStore(Ui).get(um(r));
    return await i.done, o;
  } catch (n) {
    if (n instanceof Fn) un.warn(n.message);
    else {
      const i = Ln.create("idb-get", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      un.warn(i.message);
    }
  }
}
async function Oh(r, n) {
  try {
    const o = (await lm()).transaction(Ui, "readwrite");
    await o.objectStore(Ui).put(n, um(r)), await o.done;
  } catch (i) {
    if (i instanceof Fn) un.warn(i.message);
    else {
      const o = Ln.create("idb-set", {
        originalErrorMessage: i == null ? void 0 : i.message,
      });
      un.warn(o.message);
    }
  }
}
function um(r) {
  return `${r.name}!${r.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fx = 1024,
  Ux = 30;
class Bx {
  constructor(n) {
    (this.container = n), (this._heartbeatsCache = null);
    const i = this.container.getProvider("app").getImmediate();
    (this._storage = new Hx(i)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((o) => ((this._heartbeatsCache = o), o)));
  }
  async triggerHeartbeat() {
    var n, i;
    try {
      const l = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        c = Lh();
      if (
        (((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((i = this._heartbeatsCache) === null || i === void 0
            ? void 0
            : i.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === c ||
        this._heartbeatsCache.heartbeats.some((f) => f.date === c)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: c, agent: l }),
        this._heartbeatsCache.heartbeats.length > Ux)
      ) {
        const f = $x(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(f, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (o) {
      un.warn(o);
    }
  }
  async getHeartbeatsHeader() {
    var n;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const i = Lh(),
        { heartbeatsToSend: o, unsentEntries: l } = zx(
          this._heartbeatsCache.heartbeats
        ),
        c = Xp(JSON.stringify({ version: 2, heartbeats: o }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = i),
        l.length > 0
          ? ((this._heartbeatsCache.heartbeats = l),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        c
      );
    } catch (i) {
      return un.warn(i), "";
    }
  }
}
function Lh() {
  return new Date().toISOString().substring(0, 10);
}
function zx(r, n = Fx) {
  const i = [];
  let o = r.slice();
  for (const l of r) {
    const c = i.find((f) => f.agent === l.agent);
    if (c) {
      if ((c.dates.push(l.date), Dh(i) > n)) {
        c.dates.pop();
        break;
      }
    } else if ((i.push({ agent: l.agent, dates: [l.date] }), Dh(i) > n)) {
      i.pop();
      break;
    }
    o = o.slice(1);
  }
  return { heartbeatsToSend: i, unsentEntries: o };
}
class Hx {
  constructor(n) {
    (this.app = n),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Nw()
      ? Rw()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const i = await Mx(this.app);
      return i != null && i.heartbeats ? i : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(n) {
    var i;
    if (await this._canUseIndexedDBPromise) {
      const l = await this.read();
      return Oh(this.app, {
        lastSentHeartbeatDate:
          (i = n.lastSentHeartbeatDate) !== null && i !== void 0
            ? i
            : l.lastSentHeartbeatDate,
        heartbeats: n.heartbeats,
      });
    } else return;
  }
  async add(n) {
    var i;
    if (await this._canUseIndexedDBPromise) {
      const l = await this.read();
      return Oh(this.app, {
        lastSentHeartbeatDate:
          (i = n.lastSentHeartbeatDate) !== null && i !== void 0
            ? i
            : l.lastSentHeartbeatDate,
        heartbeats: [...l.heartbeats, ...n.heartbeats],
      });
    } else return;
  }
}
function Dh(r) {
  return Xp(JSON.stringify({ version: 2, heartbeats: r })).length;
}
function $x(r) {
  if (r.length === 0) return -1;
  let n = 0,
    i = r[0].date;
  for (let o = 1; o < r.length; o++)
    r[o].date < i && ((i = r[o].date), (n = o));
  return n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vx(r) {
  Fi(new Lr("platform-logger", (n) => new tx(n), "PRIVATE")),
    Fi(new Lr("heartbeat", (n) => new Bx(n), "PRIVATE")),
    Ir(Eu, jh, r),
    Ir(Eu, jh, "esm2017"),
    Ir("fire-js", "");
}
Vx("");
var Wx = "firebase",
  qx = "11.3.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ir(Wx, qx, "app");
function Wu(r, n) {
  var i = {};
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) &&
      n.indexOf(o) < 0 &&
      (i[o] = r[o]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(r); l < o.length; l++)
      n.indexOf(o[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, o[l]) &&
        (i[o[l]] = r[o[l]]);
  return i;
}
function cm() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const Kx = cm,
  dm = new Ki("auth", "Firebase", cm());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Io = new rm("@firebase/auth");
function Gx(r, ...n) {
  Io.logLevel <= ye.WARN && Io.warn(`Auth (${Ji}): ${r}`, ...n);
}
function ko(r, ...n) {
  Io.logLevel <= ye.ERROR && Io.error(`Auth (${Ji}): ${r}`, ...n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Kt(r, ...n) {
  throw Ku(r, ...n);
}
function Ot(r, ...n) {
  return Ku(r, ...n);
}
function qu(r, n, i) {
  const o = Object.assign(Object.assign({}, Kx()), { [n]: i });
  return new Ki("auth", "Firebase", o).create(n, { appName: r.name });
}
function nr(r) {
  return qu(
    r,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function Jx(r, n, i) {
  const o = i;
  if (!(n instanceof o))
    throw (
      (o.name !== n.constructor.name && Kt(r, "argument-error"),
      qu(
        r,
        "argument-error",
        `Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function Ku(r, ...n) {
  if (typeof r != "string") {
    const i = n[0],
      o = [...n.slice(1)];
    return o[0] && (o[0].appName = r.name), r._errorFactory.create(i, ...o);
  }
  return dm.create(r, ...n);
}
function te(r, n, ...i) {
  if (!r) throw Ku(n, ...i);
}
function sn(r) {
  const n = "INTERNAL ASSERTION FAILED: " + r;
  throw (ko(n), new Error(n));
}
function cn(r, n) {
  r || sn(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bu() {
  var r;
  return (
    (typeof self < "u" &&
      ((r = self.location) === null || r === void 0 ? void 0 : r.href)) ||
    ""
  );
}
function Qx() {
  return Mh() === "http:" || Mh() === "https:";
}
function Mh() {
  var r;
  return (
    (typeof self < "u" &&
      ((r = self.location) === null || r === void 0 ? void 0 : r.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yx() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (Qx() || _w() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function Zx() {
  if (typeof navigator > "u") return null;
  const r = navigator;
  return (r.languages && r.languages[0]) || r.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qi {
  constructor(n, i) {
    (this.shortDelay = n),
      (this.longDelay = i),
      cn(i > n, "Short delay should be less than long delay!"),
      (this.isMobile = Sw() || Cw());
  }
  get() {
    return Yx()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gu(r, n) {
  cn(r.emulator, "Emulator should always be set here");
  const { url: i } = r.emulator;
  return n ? `${i}${n.startsWith("/") ? n.slice(1) : n}` : i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fm {
  static initialize(n, i, o) {
    (this.fetchImpl = n),
      i && (this.headersImpl = i),
      o && (this.responseImpl = o);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    sn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    sn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    sn(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xx = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ek = new Qi(3e4, 6e4);
function Ju(r, n) {
  return r.tenantId && !n.tenantId
    ? Object.assign(Object.assign({}, n), { tenantId: r.tenantId })
    : n;
}
async function $r(r, n, i, o, l = {}) {
  return hm(r, l, async () => {
    let c = {},
      f = {};
    o && (n === "GET" ? (f = o) : (c = { body: JSON.stringify(o) }));
    const g = Gi(Object.assign({ key: r.config.apiKey }, f)).slice(1),
      p = await r._getAdditionalHeaders();
    (p["Content-Type"] = "application/json"),
      r.languageCode && (p["X-Firebase-Locale"] = r.languageCode);
    const y = Object.assign({ method: n, headers: p }, c);
    return (
      Ew() || (y.referrerPolicy = "no-referrer"),
      fm.fetch()(pm(r, r.config.apiHost, i, g), y)
    );
  });
}
async function hm(r, n, i) {
  r._canInitEmulator = !1;
  const o = Object.assign(Object.assign({}, Xx), n);
  try {
    const l = new nk(r),
      c = await Promise.race([i(), l.promise]);
    l.clearNetworkTimeout();
    const f = await c.json();
    if ("needConfirmation" in f)
      throw ho(r, "account-exists-with-different-credential", f);
    if (c.ok && !("errorMessage" in f)) return f;
    {
      const g = c.ok ? f.errorMessage : f.error.message,
        [p, y] = g.split(" : ");
      if (p === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw ho(r, "credential-already-in-use", f);
      if (p === "EMAIL_EXISTS") throw ho(r, "email-already-in-use", f);
      if (p === "USER_DISABLED") throw ho(r, "user-disabled", f);
      const v = o[p] || p.toLowerCase().replace(/[_\s]+/g, "-");
      if (y) throw qu(r, v, y);
      Kt(r, v);
    }
  } catch (l) {
    if (l instanceof Fn) throw l;
    Kt(r, "network-request-failed", { message: String(l) });
  }
}
async function tk(r, n, i, o, l = {}) {
  const c = await $r(r, n, i, o, l);
  return (
    "mfaPendingCredential" in c &&
      Kt(r, "multi-factor-auth-required", { _serverResponse: c }),
    c
  );
}
function pm(r, n, i, o) {
  const l = `${n}${i}?${o}`;
  return r.config.emulator ? Gu(r.config, l) : `${r.config.apiScheme}://${l}`;
}
class nk {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(n) {
    (this.auth = n),
      (this.timer = null),
      (this.promise = new Promise((i, o) => {
        this.timer = setTimeout(
          () => o(Ot(this.auth, "network-request-failed")),
          ek.get()
        );
      }));
  }
}
function ho(r, n, i) {
  const o = { appName: r.name };
  i.email && (o.email = i.email),
    i.phoneNumber && (o.phoneNumber = i.phoneNumber);
  const l = Ot(r, n, o);
  return (l.customData._tokenResponse = i), l;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rk(r, n) {
  return $r(r, "POST", "/v1/accounts:delete", n);
}
async function mm(r, n) {
  return $r(r, "POST", "/v1/accounts:lookup", n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Li(r) {
  if (r)
    try {
      const n = new Date(Number(r));
      if (!isNaN(n.getTime())) return n.toUTCString();
    } catch {}
}
async function ik(r, n = !1) {
  const i = sr(r),
    o = await i.getIdToken(n),
    l = Qu(o);
  te(l && l.exp && l.auth_time && l.iat, i.auth, "internal-error");
  const c = typeof l.firebase == "object" ? l.firebase : void 0,
    f = c == null ? void 0 : c.sign_in_provider;
  return {
    claims: l,
    token: o,
    authTime: Li(su(l.auth_time)),
    issuedAtTime: Li(su(l.iat)),
    expirationTime: Li(su(l.exp)),
    signInProvider: f || null,
    signInSecondFactor: (c == null ? void 0 : c.sign_in_second_factor) || null,
  };
}
function su(r) {
  return Number(r) * 1e3;
}
function Qu(r) {
  const [n, i, o] = r.split(".");
  if (n === void 0 || i === void 0 || o === void 0)
    return ko("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const l = em(i);
    return l
      ? JSON.parse(l)
      : (ko("Failed to decode base64 JWT payload"), null);
  } catch (l) {
    return (
      ko(
        "Caught error parsing JWT payload as JSON",
        l == null ? void 0 : l.toString()
      ),
      null
    );
  }
}
function Fh(r) {
  const n = Qu(r);
  return (
    te(n, "internal-error"),
    te(typeof n.exp < "u", "internal-error"),
    te(typeof n.iat < "u", "internal-error"),
    Number(n.exp) - Number(n.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Bi(r, n, i = !1) {
  if (i) return n;
  try {
    return await n;
  } catch (o) {
    throw (
      (o instanceof Fn &&
        sk(o) &&
        r.auth.currentUser === r &&
        (await r.auth.signOut()),
      o)
    );
  }
}
function sk({ code: r }) {
  return r === "auth/user-disabled" || r === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ok {
  constructor(n) {
    (this.user = n),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(n) {
    var i;
    if (n) {
      const o = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), o;
    } else {
      this.errorBackoff = 3e4;
      const l =
        ((i = this.user.stsTokenManager.expirationTime) !== null && i !== void 0
          ? i
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, l);
    }
  }
  schedule(n = !1) {
    if (!this.isRunning) return;
    const i = this.getInterval(n);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, i);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (n) {
      (n == null ? void 0 : n.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nu {
  constructor(n, i) {
    (this.createdAt = n), (this.lastLoginAt = i), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Li(this.lastLoginAt)),
      (this.creationTime = Li(this.createdAt));
  }
  _copy(n) {
    (this.createdAt = n.createdAt),
      (this.lastLoginAt = n.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function jo(r) {
  var n;
  const i = r.auth,
    o = await r.getIdToken(),
    l = await Bi(r, mm(i, { idToken: o }));
  te(l == null ? void 0 : l.users.length, i, "internal-error");
  const c = l.users[0];
  r._notifyReloadListener(c);
  const f =
      !((n = c.providerUserInfo) === null || n === void 0) && n.length
        ? gm(c.providerUserInfo)
        : [],
    g = lk(r.providerData, f),
    p = r.isAnonymous,
    y = !(r.email && c.passwordHash) && !(g != null && g.length),
    v = p ? y : !1,
    E = {
      uid: c.localId,
      displayName: c.displayName || null,
      photoURL: c.photoUrl || null,
      email: c.email || null,
      emailVerified: c.emailVerified || !1,
      phoneNumber: c.phoneNumber || null,
      tenantId: c.tenantId || null,
      providerData: g,
      metadata: new Nu(c.createdAt, c.lastLoginAt),
      isAnonymous: v,
    };
  Object.assign(r, E);
}
async function ak(r) {
  const n = sr(r);
  await jo(n),
    await n.auth._persistUserIfCurrent(n),
    n.auth._notifyListenersIfCurrent(n);
}
function lk(r, n) {
  return [
    ...r.filter((o) => !n.some((l) => l.providerId === o.providerId)),
    ...n,
  ];
}
function gm(r) {
  return r.map((n) => {
    var { providerId: i } = n,
      o = Wu(n, ["providerId"]);
    return {
      providerId: i,
      uid: o.rawId || "",
      displayName: o.displayName || null,
      email: o.email || null,
      phoneNumber: o.phoneNumber || null,
      photoURL: o.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function uk(r, n) {
  const i = await hm(r, {}, async () => {
    const o = Gi({ grant_type: "refresh_token", refresh_token: n }).slice(1),
      { tokenApiHost: l, apiKey: c } = r.config,
      f = pm(r, l, "/v1/token", `key=${c}`),
      g = await r._getAdditionalHeaders();
    return (
      (g["Content-Type"] = "application/x-www-form-urlencoded"),
      fm.fetch()(f, { method: "POST", headers: g, body: o })
    );
  });
  return {
    accessToken: i.access_token,
    expiresIn: i.expires_in,
    refreshToken: i.refresh_token,
  };
}
async function ck(r, n) {
  return $r(r, "POST", "/v2/accounts:revokeToken", Ju(r, n));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jr {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(n) {
    te(n.idToken, "internal-error"),
      te(typeof n.idToken < "u", "internal-error"),
      te(typeof n.refreshToken < "u", "internal-error");
    const i =
      "expiresIn" in n && typeof n.expiresIn < "u"
        ? Number(n.expiresIn)
        : Fh(n.idToken);
    this.updateTokensAndExpiration(n.idToken, n.refreshToken, i);
  }
  updateFromIdToken(n) {
    te(n.length !== 0, "internal-error");
    const i = Fh(n);
    this.updateTokensAndExpiration(n, null, i);
  }
  async getToken(n, i = !1) {
    return !i && this.accessToken && !this.isExpired
      ? this.accessToken
      : (te(this.refreshToken, n, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(n, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(n, i) {
    const { accessToken: o, refreshToken: l, expiresIn: c } = await uk(n, i);
    this.updateTokensAndExpiration(o, l, Number(c));
  }
  updateTokensAndExpiration(n, i, o) {
    (this.refreshToken = i || null),
      (this.accessToken = n || null),
      (this.expirationTime = Date.now() + o * 1e3);
  }
  static fromJSON(n, i) {
    const { refreshToken: o, accessToken: l, expirationTime: c } = i,
      f = new jr();
    return (
      o &&
        (te(typeof o == "string", "internal-error", { appName: n }),
        (f.refreshToken = o)),
      l &&
        (te(typeof l == "string", "internal-error", { appName: n }),
        (f.accessToken = l)),
      c &&
        (te(typeof c == "number", "internal-error", { appName: n }),
        (f.expirationTime = c)),
      f
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(n) {
    (this.accessToken = n.accessToken),
      (this.refreshToken = n.refreshToken),
      (this.expirationTime = n.expirationTime);
  }
  _clone() {
    return Object.assign(new jr(), this.toJSON());
  }
  _performRefresh() {
    return sn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pn(r, n) {
  te(typeof r == "string" || typeof r > "u", "internal-error", { appName: n });
}
class on {
  constructor(n) {
    var { uid: i, auth: o, stsTokenManager: l } = n,
      c = Wu(n, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new ok(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = i),
      (this.auth = o),
      (this.stsTokenManager = l),
      (this.accessToken = l.accessToken),
      (this.displayName = c.displayName || null),
      (this.email = c.email || null),
      (this.emailVerified = c.emailVerified || !1),
      (this.phoneNumber = c.phoneNumber || null),
      (this.photoURL = c.photoURL || null),
      (this.isAnonymous = c.isAnonymous || !1),
      (this.tenantId = c.tenantId || null),
      (this.providerData = c.providerData ? [...c.providerData] : []),
      (this.metadata = new Nu(c.createdAt || void 0, c.lastLoginAt || void 0));
  }
  async getIdToken(n) {
    const i = await Bi(this, this.stsTokenManager.getToken(this.auth, n));
    return (
      te(i, this.auth, "internal-error"),
      this.accessToken !== i &&
        ((this.accessToken = i),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      i
    );
  }
  getIdTokenResult(n) {
    return ik(this, n);
  }
  reload() {
    return ak(this);
  }
  _assign(n) {
    this !== n &&
      (te(this.uid === n.uid, this.auth, "internal-error"),
      (this.displayName = n.displayName),
      (this.photoURL = n.photoURL),
      (this.email = n.email),
      (this.emailVerified = n.emailVerified),
      (this.phoneNumber = n.phoneNumber),
      (this.isAnonymous = n.isAnonymous),
      (this.tenantId = n.tenantId),
      (this.providerData = n.providerData.map((i) => Object.assign({}, i))),
      this.metadata._copy(n.metadata),
      this.stsTokenManager._assign(n.stsTokenManager));
  }
  _clone(n) {
    const i = new on(
      Object.assign(Object.assign({}, this), {
        auth: n,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return i.metadata._copy(this.metadata), i;
  }
  _onReload(n) {
    te(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = n),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(n) {
    this.reloadListener ? this.reloadListener(n) : (this.reloadUserInfo = n);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(n, i = !1) {
    let o = !1;
    n.idToken &&
      n.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(n), (o = !0)),
      i && (await jo(this)),
      await this.auth._persistUserIfCurrent(this),
      o && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Vt(this.auth.app)) return Promise.reject(nr(this.auth));
    const n = await this.getIdToken();
    return (
      await Bi(this, rk(this.auth, { idToken: n })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((n) => Object.assign({}, n)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(n, i) {
    var o, l, c, f, g, p, y, v;
    const E = (o = i.displayName) !== null && o !== void 0 ? o : void 0,
      S = (l = i.email) !== null && l !== void 0 ? l : void 0,
      P = (c = i.phoneNumber) !== null && c !== void 0 ? c : void 0,
      k = (f = i.photoURL) !== null && f !== void 0 ? f : void 0,
      T = (g = i.tenantId) !== null && g !== void 0 ? g : void 0,
      R = (p = i._redirectEventId) !== null && p !== void 0 ? p : void 0,
      O = (y = i.createdAt) !== null && y !== void 0 ? y : void 0,
      F = (v = i.lastLoginAt) !== null && v !== void 0 ? v : void 0,
      {
        uid: $,
        emailVerified: z,
        isAnonymous: X,
        providerData: re,
        stsTokenManager: se,
      } = i;
    te($ && se, n, "internal-error");
    const pe = jr.fromJSON(this.name, se);
    te(typeof $ == "string", n, "internal-error"),
      Pn(E, n.name),
      Pn(S, n.name),
      te(typeof z == "boolean", n, "internal-error"),
      te(typeof X == "boolean", n, "internal-error"),
      Pn(P, n.name),
      Pn(k, n.name),
      Pn(T, n.name),
      Pn(R, n.name),
      Pn(O, n.name),
      Pn(F, n.name);
    const he = new on({
      uid: $,
      auth: n,
      email: S,
      emailVerified: z,
      displayName: E,
      isAnonymous: X,
      photoURL: k,
      phoneNumber: P,
      tenantId: T,
      stsTokenManager: pe,
      createdAt: O,
      lastLoginAt: F,
    });
    return (
      re &&
        Array.isArray(re) &&
        (he.providerData = re.map((ke) => Object.assign({}, ke))),
      R && (he._redirectEventId = R),
      he
    );
  }
  static async _fromIdTokenResponse(n, i, o = !1) {
    const l = new jr();
    l.updateFromServerResponse(i);
    const c = new on({
      uid: i.localId,
      auth: n,
      stsTokenManager: l,
      isAnonymous: o,
    });
    return await jo(c), c;
  }
  static async _fromGetAccountInfoResponse(n, i, o) {
    const l = i.users[0];
    te(l.localId !== void 0, "internal-error");
    const c = l.providerUserInfo !== void 0 ? gm(l.providerUserInfo) : [],
      f = !(l.email && l.passwordHash) && !(c != null && c.length),
      g = new jr();
    g.updateFromIdToken(o);
    const p = new on({
        uid: l.localId,
        auth: n,
        stsTokenManager: g,
        isAnonymous: f,
      }),
      y = {
        uid: l.localId,
        displayName: l.displayName || null,
        photoURL: l.photoUrl || null,
        email: l.email || null,
        emailVerified: l.emailVerified || !1,
        phoneNumber: l.phoneNumber || null,
        tenantId: l.tenantId || null,
        providerData: c,
        metadata: new Nu(l.createdAt, l.lastLoginAt),
        isAnonymous: !(l.email && l.passwordHash) && !(c != null && c.length),
      };
    return Object.assign(p, y), p;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Uh = new Map();
function an(r) {
  cn(r instanceof Function, "Expected a class definition");
  let n = Uh.get(r);
  return n
    ? (cn(n instanceof r, "Instance stored in cache mismatched with class"), n)
    : ((n = new r()), Uh.set(r, n), n);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ym {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(n, i) {
    this.storage[n] = i;
  }
  async _get(n) {
    const i = this.storage[n];
    return i === void 0 ? null : i;
  }
  async _remove(n) {
    delete this.storage[n];
  }
  _addListener(n, i) {}
  _removeListener(n, i) {}
}
ym.type = "NONE";
const Bh = ym;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function So(r, n, i) {
  return `firebase:${r}:${n}:${i}`;
}
class Ar {
  constructor(n, i, o) {
    (this.persistence = n), (this.auth = i), (this.userKey = o);
    const { config: l, name: c } = this.auth;
    (this.fullUserKey = So(this.userKey, l.apiKey, c)),
      (this.fullPersistenceKey = So("persistence", l.apiKey, c)),
      (this.boundEventHandler = i._onStorageEvent.bind(i)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(n) {
    return this.persistence._set(this.fullUserKey, n.toJSON());
  }
  async getCurrentUser() {
    const n = await this.persistence._get(this.fullUserKey);
    return n ? on._fromJSON(this.auth, n) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(n) {
    if (this.persistence === n) return;
    const i = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = n), i))
      return this.setCurrentUser(i);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(n, i, o = "authUser") {
    if (!i.length) return new Ar(an(Bh), n, o);
    const l = (
      await Promise.all(
        i.map(async (y) => {
          if (await y._isAvailable()) return y;
        })
      )
    ).filter((y) => y);
    let c = l[0] || an(Bh);
    const f = So(o, n.config.apiKey, n.name);
    let g = null;
    for (const y of i)
      try {
        const v = await y._get(f);
        if (v) {
          const E = on._fromJSON(n, v);
          y !== c && (g = E), (c = y);
          break;
        }
      } catch {}
    const p = l.filter((y) => y._shouldAllowMigration);
    return !c._shouldAllowMigration || !p.length
      ? new Ar(c, n, o)
      : ((c = p[0]),
        g && (await c._set(f, g.toJSON())),
        await Promise.all(
          i.map(async (y) => {
            if (y !== c)
              try {
                await y._remove(f);
              } catch {}
          })
        ),
        new Ar(c, n, o));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zh(r) {
  const n = r.toLowerCase();
  if (n.includes("opera/") || n.includes("opr/") || n.includes("opios/"))
    return "Opera";
  if (km(n)) return "IEMobile";
  if (n.includes("msie") || n.includes("trident/")) return "IE";
  if (n.includes("edge/")) return "Edge";
  if (vm(n)) return "Firefox";
  if (n.includes("silk/")) return "Silk";
  if (Em(n)) return "Blackberry";
  if (_m(n)) return "Webos";
  if (wm(n)) return "Safari";
  if ((n.includes("chrome/") || xm(n)) && !n.includes("edge/")) return "Chrome";
  if (Sm(n)) return "Android";
  {
    const i = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      o = r.match(i);
    if ((o == null ? void 0 : o.length) === 2) return o[1];
  }
  return "Other";
}
function vm(r = rt()) {
  return /firefox\//i.test(r);
}
function wm(r = rt()) {
  const n = r.toLowerCase();
  return (
    n.includes("safari/") &&
    !n.includes("chrome/") &&
    !n.includes("crios/") &&
    !n.includes("android")
  );
}
function xm(r = rt()) {
  return /crios\//i.test(r);
}
function km(r = rt()) {
  return /iemobile/i.test(r);
}
function Sm(r = rt()) {
  return /android/i.test(r);
}
function Em(r = rt()) {
  return /blackberry/i.test(r);
}
function _m(r = rt()) {
  return /webos/i.test(r);
}
function Yu(r = rt()) {
  return (
    /iphone|ipad|ipod/i.test(r) || (/macintosh/i.test(r) && /mobile/i.test(r))
  );
}
function dk(r = rt()) {
  var n;
  return (
    Yu(r) &&
    !!(!((n = window.navigator) === null || n === void 0) && n.standalone)
  );
}
function fk() {
  return bw() && document.documentMode === 10;
}
function Cm(r = rt()) {
  return Yu(r) || Sm(r) || _m(r) || Em(r) || /windows phone/i.test(r) || km(r);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bm(r, n = []) {
  let i;
  switch (r) {
    case "Browser":
      i = zh(rt());
      break;
    case "Worker":
      i = `${zh(rt())}-${r}`;
      break;
    default:
      i = r;
  }
  const o = n.length ? n.join(",") : "FirebaseCore-web";
  return `${i}/JsCore/${Ji}/${o}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hk {
  constructor(n) {
    (this.auth = n), (this.queue = []);
  }
  pushCallback(n, i) {
    const o = (c) =>
      new Promise((f, g) => {
        try {
          const p = n(c);
          f(p);
        } catch (p) {
          g(p);
        }
      });
    (o.onAbort = i), this.queue.push(o);
    const l = this.queue.length - 1;
    return () => {
      this.queue[l] = () => Promise.resolve();
    };
  }
  async runMiddleware(n) {
    if (this.auth.currentUser === n) return;
    const i = [];
    try {
      for (const o of this.queue) await o(n), o.onAbort && i.push(o.onAbort);
    } catch (o) {
      i.reverse();
      for (const l of i)
        try {
          l();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: o == null ? void 0 : o.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function pk(r, n = {}) {
  return $r(r, "GET", "/v2/passwordPolicy", Ju(r, n));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mk = 6;
class gk {
  constructor(n) {
    var i, o, l, c;
    const f = n.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (i = f.minPasswordLength) !== null && i !== void 0 ? i : mk),
      f.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = f.maxPasswordLength),
      f.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          f.containsLowercaseCharacter),
      f.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          f.containsUppercaseCharacter),
      f.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          f.containsNumericCharacter),
      f.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          f.containsNonAlphanumericCharacter),
      (this.enforcementState = n.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (l =
          (o = n.allowedNonAlphanumericCharacters) === null || o === void 0
            ? void 0
            : o.join("")) !== null && l !== void 0
          ? l
          : ""),
      (this.forceUpgradeOnSignin =
        (c = n.forceUpgradeOnSignin) !== null && c !== void 0 ? c : !1),
      (this.schemaVersion = n.schemaVersion);
  }
  validatePassword(n) {
    var i, o, l, c, f, g;
    const p = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(n, p),
      this.validatePasswordCharacterOptions(n, p),
      p.isValid &&
        (p.isValid =
          (i = p.meetsMinPasswordLength) !== null && i !== void 0 ? i : !0),
      p.isValid &&
        (p.isValid =
          (o = p.meetsMaxPasswordLength) !== null && o !== void 0 ? o : !0),
      p.isValid &&
        (p.isValid =
          (l = p.containsLowercaseLetter) !== null && l !== void 0 ? l : !0),
      p.isValid &&
        (p.isValid =
          (c = p.containsUppercaseLetter) !== null && c !== void 0 ? c : !0),
      p.isValid &&
        (p.isValid =
          (f = p.containsNumericCharacter) !== null && f !== void 0 ? f : !0),
      p.isValid &&
        (p.isValid =
          (g = p.containsNonAlphanumericCharacter) !== null && g !== void 0
            ? g
            : !0),
      p
    );
  }
  validatePasswordLengthOptions(n, i) {
    const o = this.customStrengthOptions.minPasswordLength,
      l = this.customStrengthOptions.maxPasswordLength;
    o && (i.meetsMinPasswordLength = n.length >= o),
      l && (i.meetsMaxPasswordLength = n.length <= l);
  }
  validatePasswordCharacterOptions(n, i) {
    this.updatePasswordCharacterOptionsStatuses(i, !1, !1, !1, !1);
    let o;
    for (let l = 0; l < n.length; l++)
      (o = n.charAt(l)),
        this.updatePasswordCharacterOptionsStatuses(
          i,
          o >= "a" && o <= "z",
          o >= "A" && o <= "Z",
          o >= "0" && o <= "9",
          this.allowedNonAlphanumericCharacters.includes(o)
        );
  }
  updatePasswordCharacterOptionsStatuses(n, i, o, l, c) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (n.containsLowercaseLetter || (n.containsLowercaseLetter = i)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (n.containsUppercaseLetter || (n.containsUppercaseLetter = o)),
      this.customStrengthOptions.containsNumericCharacter &&
        (n.containsNumericCharacter || (n.containsNumericCharacter = l)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (n.containsNonAlphanumericCharacter ||
          (n.containsNonAlphanumericCharacter = c));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yk {
  constructor(n, i, o, l) {
    (this.app = n),
      (this.heartbeatServiceProvider = i),
      (this.appCheckServiceProvider = o),
      (this.config = l),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Hh(this)),
      (this.idTokenSubscription = new Hh(this)),
      (this.beforeStateQueue = new hk(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = dm),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = n.name),
      (this.clientVersion = l.sdkClientVersion);
  }
  _initializeWithPersistence(n, i) {
    return (
      i && (this._popupRedirectResolver = an(i)),
      (this._initializationPromise = this.queue(async () => {
        var o, l;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Ar.create(this, n)), !this._deleted)
        ) {
          if (
            !((o = this._popupRedirectResolver) === null || o === void 0) &&
            o._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(i),
            (this.lastNotifiedUid =
              ((l = this.currentUser) === null || l === void 0
                ? void 0
                : l.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const n = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !n)) {
      if (this.currentUser && n && this.currentUser.uid === n.uid) {
        this._currentUser._assign(n), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(n, !0);
    }
  }
  async initializeCurrentUserFromIdToken(n) {
    try {
      const i = await mm(this, { idToken: n }),
        o = await on._fromGetAccountInfoResponse(this, i, n);
      await this.directlySetCurrentUser(o);
    } catch (i) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        i
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(n) {
    var i;
    if (Vt(this.app)) {
      const f = this.app.settings.authIdToken;
      return f
        ? new Promise((g) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(f).then(g, g)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const o = await this.assertedPersistence.getCurrentUser();
    let l = o,
      c = !1;
    if (n && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const f =
          (i = this.redirectUser) === null || i === void 0
            ? void 0
            : i._redirectEventId,
        g = l == null ? void 0 : l._redirectEventId,
        p = await this.tryRedirectSignIn(n);
      (!f || f === g) && p != null && p.user && ((l = p.user), (c = !0));
    }
    if (!l) return this.directlySetCurrentUser(null);
    if (!l._redirectEventId) {
      if (c)
        try {
          await this.beforeStateQueue.runMiddleware(l);
        } catch (f) {
          (l = o),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(f)
            );
        }
      return l
        ? this.reloadAndSetCurrentUserOrClear(l)
        : this.directlySetCurrentUser(null);
    }
    return (
      te(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === l._redirectEventId
        ? this.directlySetCurrentUser(l)
        : this.reloadAndSetCurrentUserOrClear(l)
    );
  }
  async tryRedirectSignIn(n) {
    let i = null;
    try {
      i = await this._popupRedirectResolver._completeRedirectFn(this, n, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return i;
  }
  async reloadAndSetCurrentUserOrClear(n) {
    try {
      await jo(n);
    } catch (i) {
      if ((i == null ? void 0 : i.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(n);
  }
  useDeviceLanguage() {
    this.languageCode = Zx();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(n) {
    if (Vt(this.app)) return Promise.reject(nr(this));
    const i = n ? sr(n) : null;
    return (
      i &&
        te(
          i.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(i && i._clone(this))
    );
  }
  async _updateCurrentUser(n, i = !1) {
    if (!this._deleted)
      return (
        n && te(this.tenantId === n.tenantId, this, "tenant-id-mismatch"),
        i || (await this.beforeStateQueue.runMiddleware(n)),
        this.queue(async () => {
          await this.directlySetCurrentUser(n), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return Vt(this.app)
      ? Promise.reject(nr(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(n) {
    return Vt(this.app)
      ? Promise.reject(nr(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(an(n));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(n) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const i = this._getPasswordPolicyInternal();
    return i.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : i.validatePassword(n);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const n = await pk(this),
      i = new gk(n);
    this.tenantId === null
      ? (this._projectPasswordPolicy = i)
      : (this._tenantPasswordPolicies[this.tenantId] = i);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(n) {
    this._errorFactory = new Ki("auth", "Firebase", n());
  }
  onAuthStateChanged(n, i, o) {
    return this.registerStateListener(this.authStateSubscription, n, i, o);
  }
  beforeAuthStateChanged(n, i) {
    return this.beforeStateQueue.pushCallback(n, i);
  }
  onIdTokenChanged(n, i, o) {
    return this.registerStateListener(this.idTokenSubscription, n, i, o);
  }
  authStateReady() {
    return new Promise((n, i) => {
      if (this.currentUser) n();
      else {
        const o = this.onAuthStateChanged(() => {
          o(), n();
        }, i);
      }
    });
  }
  async revokeAccessToken(n) {
    if (this.currentUser) {
      const i = await this.currentUser.getIdToken(),
        o = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: n,
          idToken: i,
        };
      this.tenantId != null && (o.tenantId = this.tenantId), await ck(this, o);
    }
  }
  toJSON() {
    var n;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (n = this._currentUser) === null || n === void 0 ? void 0 : n.toJSON(),
    };
  }
  async _setRedirectUser(n, i) {
    const o = await this.getOrInitRedirectPersistenceManager(i);
    return n === null ? o.removeCurrentUser() : o.setCurrentUser(n);
  }
  async getOrInitRedirectPersistenceManager(n) {
    if (!this.redirectPersistenceManager) {
      const i = (n && an(n)) || this._popupRedirectResolver;
      te(i, this, "argument-error"),
        (this.redirectPersistenceManager = await Ar.create(
          this,
          [an(i._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(n) {
    var i, o;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((i = this._currentUser) === null || i === void 0
        ? void 0
        : i._redirectEventId) === n
        ? this._currentUser
        : ((o = this.redirectUser) === null || o === void 0
            ? void 0
            : o._redirectEventId) === n
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(n) {
    if (n === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(n));
  }
  _notifyListenersIfCurrent(n) {
    n === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var n, i;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const o =
      (i = (n = this.currentUser) === null || n === void 0 ? void 0 : n.uid) !==
        null && i !== void 0
        ? i
        : null;
    this.lastNotifiedUid !== o &&
      ((this.lastNotifiedUid = o),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(n, i, o, l) {
    if (this._deleted) return () => {};
    const c = typeof i == "function" ? i : i.next.bind(i);
    let f = !1;
    const g = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (te(g, this, "internal-error"),
      g.then(() => {
        f || c(this.currentUser);
      }),
      typeof i == "function")
    ) {
      const p = n.addObserver(i, o, l);
      return () => {
        (f = !0), p();
      };
    } else {
      const p = n.addObserver(i);
      return () => {
        (f = !0), p();
      };
    }
  }
  async directlySetCurrentUser(n) {
    this.currentUser &&
      this.currentUser !== n &&
      this._currentUser._stopProactiveRefresh(),
      n && this.isProactiveRefreshEnabled && n._startProactiveRefresh(),
      (this.currentUser = n),
      n
        ? await this.assertedPersistence.setCurrentUser(n)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(n) {
    return (this.operations = this.operations.then(n, n)), this.operations;
  }
  get assertedPersistence() {
    return (
      te(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(n) {
    !n ||
      this.frameworks.includes(n) ||
      (this.frameworks.push(n),
      this.frameworks.sort(),
      (this.clientVersion = bm(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var n;
    const i = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (i["X-Firebase-gmpid"] = this.app.options.appId);
    const o = await ((n = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || n === void 0
      ? void 0
      : n.getHeartbeatsHeader());
    o && (i["X-Firebase-Client"] = o);
    const l = await this._getAppCheckToken();
    return l && (i["X-Firebase-AppCheck"] = l), i;
  }
  async _getAppCheckToken() {
    var n;
    if (Vt(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const i = await ((n = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || n === void 0
      ? void 0
      : n.getToken());
    return (
      i != null &&
        i.error &&
        Gx(`Error while retrieving App Check token: ${i.error}`),
      i == null ? void 0 : i.token
    );
  }
}
function Wo(r) {
  return sr(r);
}
class Hh {
  constructor(n) {
    (this.auth = n),
      (this.observer = null),
      (this.addObserver = Aw((i) => (this.observer = i)));
  }
  get next() {
    return (
      te(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Zu = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function vk(r) {
  Zu = r;
}
function wk(r) {
  return Zu.loadJS(r);
}
function xk() {
  return Zu.gapiScript;
}
function kk(r) {
  return `__${r}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sk(r, n) {
  const i = om(r, "auth");
  if (i.isInitialized()) {
    const l = i.getImmediate(),
      c = i.getOptions();
    if (To(c, n ?? {})) return l;
    Kt(l, "already-initialized");
  }
  return i.initialize({ options: n });
}
function Ek(r, n) {
  const i = (n == null ? void 0 : n.persistence) || [],
    o = (Array.isArray(i) ? i : [i]).map(an);
  n != null && n.errorMap && r._updateErrorMap(n.errorMap),
    r._initializeWithPersistence(
      o,
      n == null ? void 0 : n.popupRedirectResolver
    );
}
function _k(r, n, i) {
  const o = Wo(r);
  te(o._canInitEmulator, o, "emulator-config-failed"),
    te(/^https?:\/\//.test(n), o, "invalid-emulator-scheme");
  const l = !1,
    c = Nm(n),
    { host: f, port: g } = Ck(n),
    p = g === null ? "" : `:${g}`;
  (o.config.emulator = { url: `${c}//${f}${p}/` }),
    (o.settings.appVerificationDisabledForTesting = !0),
    (o.emulatorConfig = Object.freeze({
      host: f,
      port: g,
      protocol: c.replace(":", ""),
      options: Object.freeze({ disableWarnings: l }),
    })),
    bk();
}
function Nm(r) {
  const n = r.indexOf(":");
  return n < 0 ? "" : r.substr(0, n + 1);
}
function Ck(r) {
  const n = Nm(r),
    i = /(\/\/)?([^?#/]+)/.exec(r.substr(n.length));
  if (!i) return { host: "", port: null };
  const o = i[2].split("@").pop() || "",
    l = /^(\[[^\]]+\])(:|$)/.exec(o);
  if (l) {
    const c = l[1];
    return { host: c, port: $h(o.substr(c.length + 1)) };
  } else {
    const [c, f] = o.split(":");
    return { host: c, port: $h(f) };
  }
}
function $h(r) {
  if (!r) return null;
  const n = Number(r);
  return isNaN(n) ? null : n;
}
function bk() {
  function r() {
    const n = document.createElement("p"),
      i = n.style;
    (n.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (i.position = "fixed"),
      (i.width = "100%"),
      (i.backgroundColor = "#ffffff"),
      (i.border = ".1em solid #000000"),
      (i.color = "#b50000"),
      (i.bottom = "0px"),
      (i.left = "0px"),
      (i.margin = "0px"),
      (i.zIndex = "10000"),
      (i.textAlign = "center"),
      n.classList.add("firebase-emulator-warning"),
      document.body.appendChild(n);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", r)
        : r());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rm {
  constructor(n, i) {
    (this.providerId = n), (this.signInMethod = i);
  }
  toJSON() {
    return sn("not implemented");
  }
  _getIdTokenResponse(n) {
    return sn("not implemented");
  }
  _linkToIdToken(n, i) {
    return sn("not implemented");
  }
  _getReauthenticationResolver(n) {
    return sn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Or(r, n) {
  return tk(r, "POST", "/v1/accounts:signInWithIdp", Ju(r, n));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nk = "http://localhost";
class ir extends Rm {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(n) {
    const i = new ir(n.providerId, n.signInMethod);
    return (
      n.idToken || n.accessToken
        ? (n.idToken && (i.idToken = n.idToken),
          n.accessToken && (i.accessToken = n.accessToken),
          n.nonce && !n.pendingToken && (i.nonce = n.nonce),
          n.pendingToken && (i.pendingToken = n.pendingToken))
        : n.oauthToken && n.oauthTokenSecret
        ? ((i.accessToken = n.oauthToken), (i.secret = n.oauthTokenSecret))
        : Kt("argument-error"),
      i
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(n) {
    const i = typeof n == "string" ? JSON.parse(n) : n,
      { providerId: o, signInMethod: l } = i,
      c = Wu(i, ["providerId", "signInMethod"]);
    if (!o || !l) return null;
    const f = new ir(o, l);
    return (
      (f.idToken = c.idToken || void 0),
      (f.accessToken = c.accessToken || void 0),
      (f.secret = c.secret),
      (f.nonce = c.nonce),
      (f.pendingToken = c.pendingToken || null),
      f
    );
  }
  _getIdTokenResponse(n) {
    const i = this.buildRequest();
    return Or(n, i);
  }
  _linkToIdToken(n, i) {
    const o = this.buildRequest();
    return (o.idToken = i), Or(n, o);
  }
  _getReauthenticationResolver(n) {
    const i = this.buildRequest();
    return (i.autoCreate = !1), Or(n, i);
  }
  buildRequest() {
    const n = { requestUri: Nk, returnSecureToken: !0 };
    if (this.pendingToken) n.pendingToken = this.pendingToken;
    else {
      const i = {};
      this.idToken && (i.id_token = this.idToken),
        this.accessToken && (i.access_token = this.accessToken),
        this.secret && (i.oauth_token_secret = this.secret),
        (i.providerId = this.providerId),
        this.nonce && !this.pendingToken && (i.nonce = this.nonce),
        (n.postBody = Gi(i));
    }
    return n;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xu {
  constructor(n) {
    (this.providerId = n),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(n) {
    this.defaultLanguageCode = n;
  }
  setCustomParameters(n) {
    return (this.customParameters = n), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yi extends Xu {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(n) {
    return this.scopes.includes(n) || this.scopes.push(n), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class In extends Yi {
  constructor() {
    super("facebook.com");
  }
  static credential(n) {
    return ir._fromParams({
      providerId: In.PROVIDER_ID,
      signInMethod: In.FACEBOOK_SIGN_IN_METHOD,
      accessToken: n,
    });
  }
  static credentialFromResult(n) {
    return In.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return In.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n || !("oauthAccessToken" in n) || !n.oauthAccessToken) return null;
    try {
      return In.credential(n.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
In.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
In.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wt extends Yi {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(n, i) {
    return ir._fromParams({
      providerId: Wt.PROVIDER_ID,
      signInMethod: Wt.GOOGLE_SIGN_IN_METHOD,
      idToken: n,
      accessToken: i,
    });
  }
  static credentialFromResult(n) {
    return Wt.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Wt.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const { oauthIdToken: i, oauthAccessToken: o } = n;
    if (!i && !o) return null;
    try {
      return Wt.credential(i, o);
    } catch {
      return null;
    }
  }
}
Wt.GOOGLE_SIGN_IN_METHOD = "google.com";
Wt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jn extends Yi {
  constructor() {
    super("github.com");
  }
  static credential(n) {
    return ir._fromParams({
      providerId: jn.PROVIDER_ID,
      signInMethod: jn.GITHUB_SIGN_IN_METHOD,
      accessToken: n,
    });
  }
  static credentialFromResult(n) {
    return jn.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return jn.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n || !("oauthAccessToken" in n) || !n.oauthAccessToken) return null;
    try {
      return jn.credential(n.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
jn.GITHUB_SIGN_IN_METHOD = "github.com";
jn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class An extends Yi {
  constructor() {
    super("twitter.com");
  }
  static credential(n, i) {
    return ir._fromParams({
      providerId: An.PROVIDER_ID,
      signInMethod: An.TWITTER_SIGN_IN_METHOD,
      oauthToken: n,
      oauthTokenSecret: i,
    });
  }
  static credentialFromResult(n) {
    return An.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return An.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const { oauthAccessToken: i, oauthTokenSecret: o } = n;
    if (!i || !o) return null;
    try {
      return An.credential(i, o);
    } catch {
      return null;
    }
  }
}
An.TWITTER_SIGN_IN_METHOD = "twitter.com";
An.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dr {
  constructor(n) {
    (this.user = n.user),
      (this.providerId = n.providerId),
      (this._tokenResponse = n._tokenResponse),
      (this.operationType = n.operationType);
  }
  static async _fromIdTokenResponse(n, i, o, l = !1) {
    const c = await on._fromIdTokenResponse(n, o, l),
      f = Vh(o);
    return new Dr({
      user: c,
      providerId: f,
      _tokenResponse: o,
      operationType: i,
    });
  }
  static async _forOperation(n, i, o) {
    await n._updateTokensIfNecessary(o, !0);
    const l = Vh(o);
    return new Dr({
      user: n,
      providerId: l,
      _tokenResponse: o,
      operationType: i,
    });
  }
}
function Vh(r) {
  return r.providerId ? r.providerId : "phoneNumber" in r ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ao extends Fn {
  constructor(n, i, o, l) {
    var c;
    super(i.code, i.message),
      (this.operationType = o),
      (this.user = l),
      Object.setPrototypeOf(this, Ao.prototype),
      (this.customData = {
        appName: n.name,
        tenantId: (c = n.tenantId) !== null && c !== void 0 ? c : void 0,
        _serverResponse: i.customData._serverResponse,
        operationType: o,
      });
  }
  static _fromErrorAndOperation(n, i, o, l) {
    return new Ao(n, i, o, l);
  }
}
function Tm(r, n, i, o) {
  return (
    n === "reauthenticate"
      ? i._getReauthenticationResolver(r)
      : i._getIdTokenResponse(r)
  ).catch((c) => {
    throw c.code === "auth/multi-factor-auth-required"
      ? Ao._fromErrorAndOperation(r, c, n, o)
      : c;
  });
}
async function Rk(r, n, i = !1) {
  const o = await Bi(r, n._linkToIdToken(r.auth, await r.getIdToken()), i);
  return Dr._forOperation(r, "link", o);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Tk(r, n, i = !1) {
  const { auth: o } = r;
  if (Vt(o.app)) return Promise.reject(nr(o));
  const l = "reauthenticate";
  try {
    const c = await Bi(r, Tm(o, l, n, r), i);
    te(c.idToken, o, "internal-error");
    const f = Qu(c.idToken);
    te(f, o, "internal-error");
    const { sub: g } = f;
    return te(r.uid === g, o, "user-mismatch"), Dr._forOperation(r, l, c);
  } catch (c) {
    throw (
      ((c == null ? void 0 : c.code) === "auth/user-not-found" &&
        Kt(o, "user-mismatch"),
      c)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Pk(r, n, i = !1) {
  if (Vt(r.app)) return Promise.reject(nr(r));
  const o = "signIn",
    l = await Tm(r, o, n),
    c = await Dr._fromIdTokenResponse(r, o, l);
  return i || (await r._updateCurrentUser(c.user)), c;
}
function Ik(r, n, i, o) {
  return sr(r).onIdTokenChanged(n, i, o);
}
function jk(r, n, i) {
  return sr(r).beforeAuthStateChanged(n, i);
}
function Ak(r) {
  return sr(r).signOut();
}
const Oo = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pm {
  constructor(n, i) {
    (this.storageRetriever = n), (this.type = i);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Oo, "1"),
          this.storage.removeItem(Oo),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(n, i) {
    return this.storage.setItem(n, JSON.stringify(i)), Promise.resolve();
  }
  _get(n) {
    const i = this.storage.getItem(n);
    return Promise.resolve(i ? JSON.parse(i) : null);
  }
  _remove(n) {
    return this.storage.removeItem(n), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ok = 1e3,
  Lk = 10;
class Im extends Pm {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (n, i) => this.onStorageEvent(n, i)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = Cm()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(n) {
    for (const i of Object.keys(this.listeners)) {
      const o = this.storage.getItem(i),
        l = this.localCache[i];
      o !== l && n(i, l, o);
    }
  }
  onStorageEvent(n, i = !1) {
    if (!n.key) {
      this.forAllChangedKeys((f, g, p) => {
        this.notifyListeners(f, p);
      });
      return;
    }
    const o = n.key;
    i ? this.detachListener() : this.stopPolling();
    const l = () => {
        const f = this.storage.getItem(o);
        (!i && this.localCache[o] === f) || this.notifyListeners(o, f);
      },
      c = this.storage.getItem(o);
    fk() && c !== n.newValue && n.newValue !== n.oldValue
      ? setTimeout(l, Lk)
      : l();
  }
  notifyListeners(n, i) {
    this.localCache[n] = i;
    const o = this.listeners[n];
    if (o) for (const l of Array.from(o)) l(i && JSON.parse(i));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((n, i, o) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: n, oldValue: i, newValue: o }),
            !0
          );
        });
      }, Ok));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(n, i) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[n] ||
        ((this.listeners[n] = new Set()),
        (this.localCache[n] = this.storage.getItem(n))),
      this.listeners[n].add(i);
  }
  _removeListener(n, i) {
    this.listeners[n] &&
      (this.listeners[n].delete(i),
      this.listeners[n].size === 0 && delete this.listeners[n]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(n, i) {
    await super._set(n, i), (this.localCache[n] = JSON.stringify(i));
  }
  async _get(n) {
    const i = await super._get(n);
    return (this.localCache[n] = JSON.stringify(i)), i;
  }
  async _remove(n) {
    await super._remove(n), delete this.localCache[n];
  }
}
Im.type = "LOCAL";
const Dk = Im;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jm extends Pm {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(n, i) {}
  _removeListener(n, i) {}
}
jm.type = "SESSION";
const Am = jm;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mk(r) {
  return Promise.all(
    r.map(async (n) => {
      try {
        return { fulfilled: !0, value: await n };
      } catch (i) {
        return { fulfilled: !1, reason: i };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qo {
  constructor(n) {
    (this.eventTarget = n),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(n) {
    const i = this.receivers.find((l) => l.isListeningto(n));
    if (i) return i;
    const o = new qo(n);
    return this.receivers.push(o), o;
  }
  isListeningto(n) {
    return this.eventTarget === n;
  }
  async handleEvent(n) {
    const i = n,
      { eventId: o, eventType: l, data: c } = i.data,
      f = this.handlersMap[l];
    if (!(f != null && f.size)) return;
    i.ports[0].postMessage({ status: "ack", eventId: o, eventType: l });
    const g = Array.from(f).map(async (y) => y(i.origin, c)),
      p = await Mk(g);
    i.ports[0].postMessage({
      status: "done",
      eventId: o,
      eventType: l,
      response: p,
    });
  }
  _subscribe(n, i) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[n] || (this.handlersMap[n] = new Set()),
      this.handlersMap[n].add(i);
  }
  _unsubscribe(n, i) {
    this.handlersMap[n] && i && this.handlersMap[n].delete(i),
      (!i || this.handlersMap[n].size === 0) && delete this.handlersMap[n],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
qo.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ec(r = "", n = 10) {
  let i = "";
  for (let o = 0; o < n; o++) i += Math.floor(Math.random() * 10);
  return r + i;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fk {
  constructor(n) {
    (this.target = n), (this.handlers = new Set());
  }
  removeMessageHandler(n) {
    n.messageChannel &&
      (n.messageChannel.port1.removeEventListener("message", n.onMessage),
      n.messageChannel.port1.close()),
      this.handlers.delete(n);
  }
  async _send(n, i, o = 50) {
    const l = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!l) throw new Error("connection_unavailable");
    let c, f;
    return new Promise((g, p) => {
      const y = ec("", 20);
      l.port1.start();
      const v = setTimeout(() => {
        p(new Error("unsupported_event"));
      }, o);
      (f = {
        messageChannel: l,
        onMessage(E) {
          const S = E;
          if (S.data.eventId === y)
            switch (S.data.status) {
              case "ack":
                clearTimeout(v),
                  (c = setTimeout(() => {
                    p(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(c), g(S.data.response);
                break;
              default:
                clearTimeout(v),
                  clearTimeout(c),
                  p(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(f),
        l.port1.addEventListener("message", f.onMessage),
        this.target.postMessage({ eventType: n, eventId: y, data: i }, [
          l.port2,
        ]);
    }).finally(() => {
      f && this.removeMessageHandler(f);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qt() {
  return window;
}
function Uk(r) {
  qt().location.href = r;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Om() {
  return (
    typeof qt().WorkerGlobalScope < "u" &&
    typeof qt().importScripts == "function"
  );
}
async function Bk() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function zk() {
  var r;
  return (
    ((r = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    r === void 0
      ? void 0
      : r.controller) || null
  );
}
function Hk() {
  return Om() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Lm = "firebaseLocalStorageDb",
  $k = 1,
  Lo = "firebaseLocalStorage",
  Dm = "fbase_key";
class Zi {
  constructor(n) {
    this.request = n;
  }
  toPromise() {
    return new Promise((n, i) => {
      this.request.addEventListener("success", () => {
        n(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          i(this.request.error);
        });
    });
  }
}
function Ko(r, n) {
  return r.transaction([Lo], n ? "readwrite" : "readonly").objectStore(Lo);
}
function Vk() {
  const r = indexedDB.deleteDatabase(Lm);
  return new Zi(r).toPromise();
}
function Ru() {
  const r = indexedDB.open(Lm, $k);
  return new Promise((n, i) => {
    r.addEventListener("error", () => {
      i(r.error);
    }),
      r.addEventListener("upgradeneeded", () => {
        const o = r.result;
        try {
          o.createObjectStore(Lo, { keyPath: Dm });
        } catch (l) {
          i(l);
        }
      }),
      r.addEventListener("success", async () => {
        const o = r.result;
        o.objectStoreNames.contains(Lo)
          ? n(o)
          : (o.close(), await Vk(), n(await Ru()));
      });
  });
}
async function Wh(r, n, i) {
  const o = Ko(r, !0).put({ [Dm]: n, value: i });
  return new Zi(o).toPromise();
}
async function Wk(r, n) {
  const i = Ko(r, !1).get(n),
    o = await new Zi(i).toPromise();
  return o === void 0 ? null : o.value;
}
function qh(r, n) {
  const i = Ko(r, !0).delete(n);
  return new Zi(i).toPromise();
}
const qk = 800,
  Kk = 3;
class Mm {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Ru()), this.db);
  }
  async _withRetries(n) {
    let i = 0;
    for (;;)
      try {
        const o = await this._openDb();
        return await n(o);
      } catch (o) {
        if (i++ > Kk) throw o;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Om() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = qo._getInstance(Hk())),
      this.receiver._subscribe("keyChanged", async (n, i) => ({
        keyProcessed: (await this._poll()).includes(i.key),
      })),
      this.receiver._subscribe("ping", async (n, i) => ["keyChanged"]);
  }
  async initializeSender() {
    var n, i;
    if (((this.activeServiceWorker = await Bk()), !this.activeServiceWorker))
      return;
    this.sender = new Fk(this.activeServiceWorker);
    const o = await this.sender._send("ping", {}, 800);
    o &&
      !((n = o[0]) === null || n === void 0) &&
      n.fulfilled &&
      !((i = o[0]) === null || i === void 0) &&
      i.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(n) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        zk() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: n },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const n = await Ru();
      return await Wh(n, Oo, "1"), await qh(n, Oo), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(n) {
    this.pendingWrites++;
    try {
      await n();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(n, i) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((o) => Wh(o, n, i)),
        (this.localCache[n] = i),
        this.notifyServiceWorker(n)
      )
    );
  }
  async _get(n) {
    const i = await this._withRetries((o) => Wk(o, n));
    return (this.localCache[n] = i), i;
  }
  async _remove(n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((i) => qh(i, n)),
        delete this.localCache[n],
        this.notifyServiceWorker(n)
      )
    );
  }
  async _poll() {
    const n = await this._withRetries((l) => {
      const c = Ko(l, !1).getAll();
      return new Zi(c).toPromise();
    });
    if (!n) return [];
    if (this.pendingWrites !== 0) return [];
    const i = [],
      o = new Set();
    if (n.length !== 0)
      for (const { fbase_key: l, value: c } of n)
        o.add(l),
          JSON.stringify(this.localCache[l]) !== JSON.stringify(c) &&
            (this.notifyListeners(l, c), i.push(l));
    for (const l of Object.keys(this.localCache))
      this.localCache[l] &&
        !o.has(l) &&
        (this.notifyListeners(l, null), i.push(l));
    return i;
  }
  notifyListeners(n, i) {
    this.localCache[n] = i;
    const o = this.listeners[n];
    if (o) for (const l of Array.from(o)) l(i);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), qk));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(n, i) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[n] || ((this.listeners[n] = new Set()), this._get(n)),
      this.listeners[n].add(i);
  }
  _removeListener(n, i) {
    this.listeners[n] &&
      (this.listeners[n].delete(i),
      this.listeners[n].size === 0 && delete this.listeners[n]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Mm.type = "LOCAL";
const Gk = Mm;
new Qi(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fm(r, n) {
  return n
    ? an(n)
    : (te(r._popupRedirectResolver, r, "argument-error"),
      r._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tc extends Rm {
  constructor(n) {
    super("custom", "custom"), (this.params = n);
  }
  _getIdTokenResponse(n) {
    return Or(n, this._buildIdpRequest());
  }
  _linkToIdToken(n, i) {
    return Or(n, this._buildIdpRequest(i));
  }
  _getReauthenticationResolver(n) {
    return Or(n, this._buildIdpRequest());
  }
  _buildIdpRequest(n) {
    const i = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return n && (i.idToken = n), i;
  }
}
function Jk(r) {
  return Pk(r.auth, new tc(r), r.bypassAuthState);
}
function Qk(r) {
  const { auth: n, user: i } = r;
  return te(i, n, "internal-error"), Tk(i, new tc(r), r.bypassAuthState);
}
async function Yk(r) {
  const { auth: n, user: i } = r;
  return te(i, n, "internal-error"), Rk(i, new tc(r), r.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Um {
  constructor(n, i, o, l, c = !1) {
    (this.auth = n),
      (this.resolver = o),
      (this.user = l),
      (this.bypassAuthState = c),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(i) ? i : [i]);
  }
  execute() {
    return new Promise(async (n, i) => {
      this.pendingPromise = { resolve: n, reject: i };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (o) {
        this.reject(o);
      }
    });
  }
  async onAuthEvent(n) {
    const {
      urlResponse: i,
      sessionId: o,
      postBody: l,
      tenantId: c,
      error: f,
      type: g,
    } = n;
    if (f) {
      this.reject(f);
      return;
    }
    const p = {
      auth: this.auth,
      requestUri: i,
      sessionId: o,
      tenantId: c || void 0,
      postBody: l || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(g)(p));
    } catch (y) {
      this.reject(y);
    }
  }
  onError(n) {
    this.reject(n);
  }
  getIdpTask(n) {
    switch (n) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Jk;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Yk;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Qk;
      default:
        Kt(this.auth, "internal-error");
    }
  }
  resolve(n) {
    cn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(n),
      this.unregisterAndCleanUp();
  }
  reject(n) {
    cn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(n),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zk = new Qi(2e3, 1e4);
async function Xk(r, n, i) {
  if (Vt(r.app))
    return Promise.reject(Ot(r, "operation-not-supported-in-this-environment"));
  const o = Wo(r);
  Jx(r, n, Xu);
  const l = Fm(o, i);
  return new er(o, "signInViaPopup", n, l).executeNotNull();
}
class er extends Um {
  constructor(n, i, o, l, c) {
    super(n, i, l, c),
      (this.provider = o),
      (this.authWindow = null),
      (this.pollId = null),
      er.currentPopupAction && er.currentPopupAction.cancel(),
      (er.currentPopupAction = this);
  }
  async executeNotNull() {
    const n = await this.execute();
    return te(n, this.auth, "internal-error"), n;
  }
  async onExecution() {
    cn(this.filter.length === 1, "Popup operations only handle one event");
    const n = ec();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      n
    )),
      (this.authWindow.associatedEvent = n),
      this.resolver._originValidation(this.auth).catch((i) => {
        this.reject(i);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (i) => {
        i || this.reject(Ot(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var n;
    return (
      ((n = this.authWindow) === null || n === void 0
        ? void 0
        : n.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(Ot(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (er.currentPopupAction = null);
  }
  pollUserCancellation() {
    const n = () => {
      var i, o;
      if (
        !(
          (o =
            (i = this.authWindow) === null || i === void 0
              ? void 0
              : i.window) === null || o === void 0
        ) &&
        o.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(Ot(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(n, Zk.get());
    };
    n();
  }
}
er.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eS = "pendingRedirect",
  Eo = new Map();
class tS extends Um {
  constructor(n, i, o = !1) {
    super(
      n,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      i,
      void 0,
      o
    ),
      (this.eventId = null);
  }
  async execute() {
    let n = Eo.get(this.auth._key());
    if (!n) {
      try {
        const o = (await nS(this.resolver, this.auth))
          ? await super.execute()
          : null;
        n = () => Promise.resolve(o);
      } catch (i) {
        n = () => Promise.reject(i);
      }
      Eo.set(this.auth._key(), n);
    }
    return (
      this.bypassAuthState ||
        Eo.set(this.auth._key(), () => Promise.resolve(null)),
      n()
    );
  }
  async onAuthEvent(n) {
    if (n.type === "signInViaRedirect") return super.onAuthEvent(n);
    if (n.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (n.eventId) {
      const i = await this.auth._redirectUserForId(n.eventId);
      if (i) return (this.user = i), super.onAuthEvent(n);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function nS(r, n) {
  const i = sS(n),
    o = iS(r);
  if (!(await o._isAvailable())) return !1;
  const l = (await o._get(i)) === "true";
  return await o._remove(i), l;
}
function rS(r, n) {
  Eo.set(r._key(), n);
}
function iS(r) {
  return an(r._redirectPersistence);
}
function sS(r) {
  return So(eS, r.config.apiKey, r.name);
}
async function oS(r, n, i = !1) {
  if (Vt(r.app)) return Promise.reject(nr(r));
  const o = Wo(r),
    l = Fm(o, n),
    f = await new tS(o, l, i).execute();
  return (
    f &&
      !i &&
      (delete f.user._redirectEventId,
      await o._persistUserIfCurrent(f.user),
      await o._setRedirectUser(null, n)),
    f
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aS = 10 * 60 * 1e3;
class lS {
  constructor(n) {
    (this.auth = n),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(n) {
    this.consumers.add(n),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, n) &&
        (this.sendToConsumer(this.queuedRedirectEvent, n),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(n) {
    this.consumers.delete(n);
  }
  onEvent(n) {
    if (this.hasEventBeenHandled(n)) return !1;
    let i = !1;
    return (
      this.consumers.forEach((o) => {
        this.isEventForConsumer(n, o) &&
          ((i = !0), this.sendToConsumer(n, o), this.saveEventToCache(n));
      }),
      this.hasHandledPotentialRedirect ||
        !uS(n) ||
        ((this.hasHandledPotentialRedirect = !0),
        i || ((this.queuedRedirectEvent = n), (i = !0))),
      i
    );
  }
  sendToConsumer(n, i) {
    var o;
    if (n.error && !Bm(n)) {
      const l =
        ((o = n.error.code) === null || o === void 0
          ? void 0
          : o.split("auth/")[1]) || "internal-error";
      i.onError(Ot(this.auth, l));
    } else i.onAuthEvent(n);
  }
  isEventForConsumer(n, i) {
    const o = i.eventId === null || (!!n.eventId && n.eventId === i.eventId);
    return i.filter.includes(n.type) && o;
  }
  hasEventBeenHandled(n) {
    return (
      Date.now() - this.lastProcessedEventTime >= aS &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Kh(n))
    );
  }
  saveEventToCache(n) {
    this.cachedEventUids.add(Kh(n)), (this.lastProcessedEventTime = Date.now());
  }
}
function Kh(r) {
  return [r.type, r.eventId, r.sessionId, r.tenantId]
    .filter((n) => n)
    .join("-");
}
function Bm({ type: r, error: n }) {
  return (
    r === "unknown" && (n == null ? void 0 : n.code) === "auth/no-auth-event"
  );
}
function uS(r) {
  switch (r.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Bm(r);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function cS(r, n = {}) {
  return $r(r, "GET", "/v1/projects", n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  fS = /^https?/;
async function hS(r) {
  if (r.config.emulator) return;
  const { authorizedDomains: n } = await cS(r);
  for (const i of n)
    try {
      if (pS(i)) return;
    } catch {}
  Kt(r, "unauthorized-domain");
}
function pS(r) {
  const n = bu(),
    { protocol: i, hostname: o } = new URL(n);
  if (r.startsWith("chrome-extension://")) {
    const f = new URL(r);
    return f.hostname === "" && o === ""
      ? i === "chrome-extension:" &&
          r.replace("chrome-extension://", "") ===
            n.replace("chrome-extension://", "")
      : i === "chrome-extension:" && f.hostname === o;
  }
  if (!fS.test(i)) return !1;
  if (dS.test(r)) return o === r;
  const l = r.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + l + "|" + l + ")$", "i").test(o);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mS = new Qi(3e4, 6e4);
function Gh() {
  const r = qt().___jsl;
  if (r != null && r.H) {
    for (const n of Object.keys(r.H))
      if (
        ((r.H[n].r = r.H[n].r || []),
        (r.H[n].L = r.H[n].L || []),
        (r.H[n].r = [...r.H[n].L]),
        r.CP)
      )
        for (let i = 0; i < r.CP.length; i++) r.CP[i] = null;
  }
}
function gS(r) {
  return new Promise((n, i) => {
    var o, l, c;
    function f() {
      Gh(),
        gapi.load("gapi.iframes", {
          callback: () => {
            n(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Gh(), i(Ot(r, "network-request-failed"));
          },
          timeout: mS.get(),
        });
    }
    if (
      !(
        (l = (o = qt().gapi) === null || o === void 0 ? void 0 : o.iframes) ===
          null || l === void 0
      ) &&
      l.Iframe
    )
      n(gapi.iframes.getContext());
    else if (!((c = qt().gapi) === null || c === void 0) && c.load) f();
    else {
      const g = kk("iframefcb");
      return (
        (qt()[g] = () => {
          gapi.load ? f() : i(Ot(r, "network-request-failed"));
        }),
        wk(`${xk()}?onload=${g}`).catch((p) => i(p))
      );
    }
  }).catch((n) => {
    throw ((_o = null), n);
  });
}
let _o = null;
function yS(r) {
  return (_o = _o || gS(r)), _o;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vS = new Qi(5e3, 15e3),
  wS = "__/auth/iframe",
  xS = "emulator/auth/iframe",
  kS = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  SS = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function ES(r) {
  const n = r.config;
  te(n.authDomain, r, "auth-domain-config-required");
  const i = n.emulator ? Gu(n, xS) : `https://${r.config.authDomain}/${wS}`,
    o = { apiKey: n.apiKey, appName: r.name, v: Ji },
    l = SS.get(r.config.apiHost);
  l && (o.eid = l);
  const c = r._getFrameworks();
  return c.length && (o.fw = c.join(",")), `${i}?${Gi(o).slice(1)}`;
}
async function _S(r) {
  const n = await yS(r),
    i = qt().gapi;
  return (
    te(i, r, "internal-error"),
    n.open(
      {
        where: document.body,
        url: ES(r),
        messageHandlersFilter: i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: kS,
        dontclear: !0,
      },
      (o) =>
        new Promise(async (l, c) => {
          await o.restyle({ setHideOnLeave: !1 });
          const f = Ot(r, "network-request-failed"),
            g = qt().setTimeout(() => {
              c(f);
            }, vS.get());
          function p() {
            qt().clearTimeout(g), l(o);
          }
          o.ping(p).then(p, () => {
            c(f);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const CS = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  bS = 500,
  NS = 600,
  RS = "_blank",
  TS = "http://localhost";
class Jh {
  constructor(n) {
    (this.window = n), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function PS(r, n, i, o = bS, l = NS) {
  const c = Math.max((window.screen.availHeight - l) / 2, 0).toString(),
    f = Math.max((window.screen.availWidth - o) / 2, 0).toString();
  let g = "";
  const p = Object.assign(Object.assign({}, CS), {
      width: o.toString(),
      height: l.toString(),
      top: c,
      left: f,
    }),
    y = rt().toLowerCase();
  i && (g = xm(y) ? RS : i), vm(y) && ((n = n || TS), (p.scrollbars = "yes"));
  const v = Object.entries(p).reduce((S, [P, k]) => `${S}${P}=${k},`, "");
  if (dk(y) && g !== "_self") return IS(n || "", g), new Jh(null);
  const E = window.open(n || "", g, v);
  te(E, r, "popup-blocked");
  try {
    E.focus();
  } catch {}
  return new Jh(E);
}
function IS(r, n) {
  const i = document.createElement("a");
  (i.href = r), (i.target = n);
  const o = document.createEvent("MouseEvent");
  o.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    i.dispatchEvent(o);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jS = "__/auth/handler",
  AS = "emulator/auth/handler",
  OS = encodeURIComponent("fac");
async function Qh(r, n, i, o, l, c) {
  te(r.config.authDomain, r, "auth-domain-config-required"),
    te(r.config.apiKey, r, "invalid-api-key");
  const f = {
    apiKey: r.config.apiKey,
    appName: r.name,
    authType: i,
    redirectUrl: o,
    v: Ji,
    eventId: l,
  };
  if (n instanceof Xu) {
    n.setDefaultLanguage(r.languageCode),
      (f.providerId = n.providerId || ""),
      jw(n.getCustomParameters()) ||
        (f.customParameters = JSON.stringify(n.getCustomParameters()));
    for (const [v, E] of Object.entries({})) f[v] = E;
  }
  if (n instanceof Yi) {
    const v = n.getScopes().filter((E) => E !== "");
    v.length > 0 && (f.scopes = v.join(","));
  }
  r.tenantId && (f.tid = r.tenantId);
  const g = f;
  for (const v of Object.keys(g)) g[v] === void 0 && delete g[v];
  const p = await r._getAppCheckToken(),
    y = p ? `#${OS}=${encodeURIComponent(p)}` : "";
  return `${LS(r)}?${Gi(g).slice(1)}${y}`;
}
function LS({ config: r }) {
  return r.emulator ? Gu(r, AS) : `https://${r.authDomain}/${jS}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ou = "webStorageSupport";
class DS {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Am),
      (this._completeRedirectFn = oS),
      (this._overrideRedirectResult = rS);
  }
  async _openPopup(n, i, o, l) {
    var c;
    cn(
      (c = this.eventManagers[n._key()]) === null || c === void 0
        ? void 0
        : c.manager,
      "_initialize() not called before _openPopup()"
    );
    const f = await Qh(n, i, o, bu(), l);
    return PS(n, f, ec());
  }
  async _openRedirect(n, i, o, l) {
    await this._originValidation(n);
    const c = await Qh(n, i, o, bu(), l);
    return Uk(c), new Promise(() => {});
  }
  _initialize(n) {
    const i = n._key();
    if (this.eventManagers[i]) {
      const { manager: l, promise: c } = this.eventManagers[i];
      return l
        ? Promise.resolve(l)
        : (cn(c, "If manager is not set, promise should be"), c);
    }
    const o = this.initAndGetManager(n);
    return (
      (this.eventManagers[i] = { promise: o }),
      o.catch(() => {
        delete this.eventManagers[i];
      }),
      o
    );
  }
  async initAndGetManager(n) {
    const i = await _S(n),
      o = new lS(n);
    return (
      i.register(
        "authEvent",
        (l) => (
          te(l == null ? void 0 : l.authEvent, n, "invalid-auth-event"),
          { status: o.onEvent(l.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[n._key()] = { manager: o }),
      (this.iframes[n._key()] = i),
      o
    );
  }
  _isIframeWebStorageSupported(n, i) {
    this.iframes[n._key()].send(
      ou,
      { type: ou },
      (l) => {
        var c;
        const f =
          (c = l == null ? void 0 : l[0]) === null || c === void 0
            ? void 0
            : c[ou];
        f !== void 0 && i(!!f), Kt(n, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(n) {
    const i = n._key();
    return (
      this.originValidationPromises[i] ||
        (this.originValidationPromises[i] = hS(n)),
      this.originValidationPromises[i]
    );
  }
  get _shouldInitProactively() {
    return Cm() || wm() || Yu();
  }
}
const MS = DS;
var Yh = "@firebase/auth",
  Zh = "1.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FS {
  constructor(n) {
    (this.auth = n), (this.internalListeners = new Map());
  }
  getUid() {
    var n;
    return (
      this.assertAuthConfigured(),
      ((n = this.auth.currentUser) === null || n === void 0 ? void 0 : n.uid) ||
        null
    );
  }
  async getToken(n) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(n) }
        : null
    );
  }
  addAuthTokenListener(n) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(n))) return;
    const i = this.auth.onIdTokenChanged((o) => {
      n((o == null ? void 0 : o.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(n, i), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(n) {
    this.assertAuthConfigured();
    const i = this.internalListeners.get(n);
    i && (this.internalListeners.delete(n), i(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    te(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function US(r) {
  switch (r) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function BS(r) {
  Fi(
    new Lr(
      "auth",
      (n, { options: i }) => {
        const o = n.getProvider("app").getImmediate(),
          l = n.getProvider("heartbeat"),
          c = n.getProvider("app-check-internal"),
          { apiKey: f, authDomain: g } = o.options;
        te(f && !f.includes(":"), "invalid-api-key", { appName: o.name });
        const p = {
            apiKey: f,
            authDomain: g,
            clientPlatform: r,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: bm(r),
          },
          y = new yk(o, l, c, p);
        return Ek(y, i), y;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((n, i, o) => {
        n.getProvider("auth-internal").initialize();
      })
  ),
    Fi(
      new Lr(
        "auth-internal",
        (n) => {
          const i = Wo(n.getProvider("auth").getImmediate());
          return ((o) => new FS(o))(i);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Ir(Yh, Zh, US(r)),
    Ir(Yh, Zh, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zS = 5 * 60,
  HS = nm("authIdTokenMaxAge") || zS;
let Xh = null;
const $S = (r) => async (n) => {
  const i = n && (await n.getIdTokenResult()),
    o = i && (new Date().getTime() - Date.parse(i.issuedAtTime)) / 1e3;
  if (o && o > HS) return;
  const l = i == null ? void 0 : i.token;
  Xh !== l &&
    ((Xh = l),
    await fetch(r, {
      method: l ? "POST" : "DELETE",
      headers: l ? { Authorization: `Bearer ${l}` } : {},
    }));
};
function VS(r = Ox()) {
  const n = om(r, "auth");
  if (n.isInitialized()) return n.getImmediate();
  const i = Sk(r, { popupRedirectResolver: MS, persistence: [Gk, Dk, Am] }),
    o = nm("authTokenSyncURL");
  if (o && typeof isSecureContext == "boolean" && isSecureContext) {
    const c = new URL(o, location.origin);
    if (location.origin === c.origin) {
      const f = $S(c.toString());
      jk(i, f, () => f(i.currentUser)), Ik(i, (g) => f(g));
    }
  }
  const l = xw("auth");
  return l && _k(i, `http://${l}`), i;
}
function WS() {
  var r, n;
  return (n =
    (r = document.getElementsByTagName("head")) === null || r === void 0
      ? void 0
      : r[0]) !== null && n !== void 0
    ? n
    : document;
}
vk({
  loadJS(r) {
    return new Promise((n, i) => {
      const o = document.createElement("script");
      o.setAttribute("src", r),
        (o.onload = n),
        (o.onerror = (l) => {
          const c = Ot("internal-error");
          (c.customData = l), i(c);
        }),
        (o.type = "text/javascript"),
        (o.charset = "UTF-8"),
        WS().appendChild(o);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
BS("Browser");
const qS = {
    apiKey: "AIzaSyAPY9NiUPjBIAkLFHeGRkMY1G7SPnbbqMw",
    authDomain: "shoe-ecommerce-9018b.firebaseapp.com",
    databaseURL: "https://shoe-ecommerce-9018b-default-rtdb.firebaseio.com",
    projectId: "shoe-ecommerce-9018b",
    storageBucket: "shoe-ecommerce-9018b.firebasestorage.app",
    messagingSenderId: "638139902566",
    appId: "1:638139902566:web:214c3a953085d039b65ba7",
    measurementId: "G-M6HE2JV3QS",
  },
  KS = am(qS),
  GS = new Wt(),
  zm = VS(KS),
  JS = async () => {
    try {
      const r = await Xk(zm, GS),
        n = Wt.credentialFromResult(r),
        i = n == null ? void 0 : n.accessToken;
      return { user: r.user.displayName, type: "google" };
    } catch (r) {
      throw (console.error(r), r);
    }
  },
  QS = async () => {
    try {
      await Ak(zm);
    } catch (r) {
      throw (console.error(r), r);
    }
  },
  Hm = b.createContext(void 0),
  YS = ({ children: r }) => {
    const [n, i] = b.useState(!1),
      [o, l] = b.useState(null);
    b.useEffect(() => {
      const f = jt.get("user");
      l(f ? JSON.parse(f) : null), f && i(!0);
    }, []);
    const c = {
      login: n,
      user: o,
      setUser: (f) => {
        (f == null ? void 0 : f.type) === "google"
          ? (f.role = "admin")
          : (f.role = "user"),
          l(f),
          jt.set("user", JSON.stringify(f), { expires: 7 }),
          i(!0);
      },
      handleLogout: () => {
        (o == null ? void 0 : o.type) === "google" && QS(),
          i(!1),
          jt.remove("user"),
          l(null);
      },
    };
    return h.jsx(Hm.Provider, { value: c, children: r });
  },
  zi = () => {
    const r = b.useContext(Hm);
    if (!r)
      throw new Error(
        "useAuthentication must be used within an AuthenticationProvider"
      );
    return r;
  },
  ZS = [
    { className: "px-16 py-3", title: "Image" },
    { className: "px-6 py-3", title: "MaSP" },
    { className: "px-6 py-3", title: "Total QTY" },
    { className: "px-6 py-3", title: "Total" },
    { className: "px-6 py-3", title: "Action" },
  ],
  $m = () => {
    const [r, n] = b.useState(-1),
      i = (o) => {
        n(r === o ? -1 : o);
      };
    return h.jsx(h.Fragment, {
      children: h.jsx("div", {
        className: "relative overflow-x-auto shadow-md sm:rounded-lg",
        children: h.jsxs("table", {
          className:
            "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
          children: [
            h.jsx("thead", {
              className:
                "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
              children: h.jsx("tr", {
                children: ZS.map((o, l) =>
                  h.jsx("th", { className: o.className, children: o.title }, l)
                ),
              }),
            }),
            h.jsxs("tbody", {
              children: [
                h.jsxs("tr", {
                  className:
                    "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                  children: [
                    h.jsx("td", {
                      className: "p-4",
                      children: h.jsx("img", {
                        src: "/docs/images/products/apple-watch.png",
                        className: "w-16 md:w-32 max-w-full max-h-full",
                        alt: "Apple Watch",
                      }),
                    }),
                    h.jsx("td", {
                      className:
                        "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                      children: "DHMS01",
                    }),
                    h.jsx("td", {
                      className: "px-6 py-4",
                      children: h.jsx("input", {
                        type: "text",
                        placeholder: "2",
                        readOnly: !0,
                        disabled: !0,
                      }),
                    }),
                    h.jsx("td", {
                      className:
                        "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                      children: "$599",
                    }),
                    h.jsx("td", {
                      className: "px-6 py-4",
                      children: h.jsx("button", {
                        onClick: () => i(0),
                        className: "font-medium text-blue-600 hover:underline",
                        children: "Details",
                      }),
                    }),
                  ],
                }),
                r === 0 &&
                  h.jsxs("tr", {
                    className:
                      "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full",
                    children: [
                      h.jsx("td", {
                        className: "p-4",
                        children: h.jsx("img", {
                          src: "/docs/images/products/apple-watch.png",
                          className: "w-16 md:w-32 max-w-full max-h-full",
                          alt: "Apple Watch",
                        }),
                      }),
                      h.jsx("td", {
                        className:
                          "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                        children: "Apple Watch",
                      }),
                      h.jsx("td", {
                        className: "px-6 py-4",
                        children: h.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            h.jsxs("button", {
                              className:
                                "inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
                              type: "button",
                              children: [
                                h.jsx("span", {
                                  className: "sr-only",
                                  children: "Quantity button",
                                }),
                                h.jsx("svg", {
                                  className: "w-3 h-3",
                                  "aria-hidden": "true",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 18 2",
                                  children: h.jsx("path", {
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M1 1h16",
                                  }),
                                }),
                              ],
                            }),
                            h.jsx("div", {
                              children: h.jsx("input", {
                                type: "number",
                                id: "first_product",
                                className:
                                  "bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                placeholder: "1",
                                required: !0,
                              }),
                            }),
                            h.jsxs("button", {
                              className:
                                "inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
                              type: "button",
                              children: [
                                h.jsx("span", {
                                  className: "sr-only",
                                  children: "Quantity button",
                                }),
                                h.jsx("svg", {
                                  className: "w-3 h-3",
                                  "aria-hidden": "true",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 18 18",
                                  children: h.jsx("path", {
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M9 1v16M1 9h16",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      h.jsx("td", {
                        className:
                          "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                        children: "$599",
                      }),
                      h.jsx("td", {
                        className: "px-6 py-4",
                        children: h.jsx("a", {
                          href: "#",
                          className:
                            "font-medium text-red-600 dark:text-red-500 hover:underline",
                          children: "Remove",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  XS = () => {
    var n, i;
    const r = zi();
    return h.jsx(h.Fragment, {
      children: h.jsx("div", {
        className: "flex justify-center items-center min-h-screen bg-gray-100",
        children: h.jsxs("div", {
          className: "profile-card",
          children: [
            h.jsxs("div", {
              className: "flex items-center space-x-6",
              children: [
                h.jsx("img", {
                  src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
                  alt: "User Avatar",
                  className: "profile-avatar",
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("h2", {
                      className: "text-3xl font-bold text-gray-800",
                      children: (n = r.user) == null ? void 0 : n.user,
                    }),
                    h.jsxs("p", {
                      className: "text-gray-500",
                      children: ["@", (i = r.user) == null ? void 0 : i.user],
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              className: "mt-6",
              children: [
                h.jsx("h3", {
                  className: "text-lg font-semibold text-gray-700",
                  children: "About Me",
                }),
                h.jsx("p", {
                  className: "mt-2 text-gray-600",
                  children:
                    "A passionate explorer of technology and creativity. Lover of coffee, code, and good design.",
                }),
              ],
            }),
            h.jsxs("div", {
              className: "mt-6 grid grid-cols-2 gap-4",
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-gray-500",
                      children: "Email:",
                    }),
                    h.jsx("p", {
                      className: "font-medium text-gray-800",
                      children: "johndoe@example.com",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-gray-500",
                      children: "Joined:",
                    }),
                    h.jsx("p", {
                      className: "font-medium text-gray-800",
                      children: "March 06, 2025",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-gray-500",
                      children: "Location:",
                    }),
                    h.jsx("p", {
                      className: "font-medium text-gray-800",
                      children: "New York, USA",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-gray-500",
                      children: "Occupation:",
                    }),
                    h.jsx("p", {
                      className: "font-medium text-gray-800",
                      children: "Software Engineer",
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs("div", {
              className: "mt-6 flex space-x-4",
              children: [
                h.jsx("button", {
                  className: "edit-btn",
                  children: "Edit Profile",
                }),
                h.jsx("button", {
                  className: "edit-btn bg-gray-600 hover:bg-gray-700",
                  children: "Change Password",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
function eE() {
  const [r, n] = b.useState(new Array(4).fill("")),
    i = b.useRef([]),
    o = $i();
  b.useState({
    message: "Your changes have been saved!",
    color: "green",
    detail: "You can continue with your work.",
  });
  const [l, c] = b.useState(!1),
    f = () => {
      (async () => {
        const y = r.join(""),
          v = await At.post(
            "/v1/user/register/verify",
            JSON.stringify({ code: y })
          );
        console.log(v),
          console.log("Entered OTP:", y),
          v.status == 200 &&
            (c(!0),
            setTimeout(() => {
              o("/");
            }, 5e3));
      })();
    },
    g = (p, y) => {
      const v = p.target.value,
        E = [...r];
      (E[y] = v),
        n(E),
        v && y < r.length - 1 && i.current[y + 1] && i.current[y + 1].focus();
    };
  return h.jsx(h.Fragment, {
    children: h.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-gray-100",
      children: h.jsxs("div", {
        className: "bg-white p-8 rounded shadow-md w-96 text-center",
        children: [
          h.jsx("h1", {
            className: "text-gray-800 text-xl font-semibold mb-2",
            children: "VERIFY YOUR EMAIL ADDRESS",
          }),
          h.jsx("hr", { className: "my-4" }),
          h.jsx("p", {
            className: "text-gray-600 mb-4",
            children: "A verification code has been sent to",
          }),
          h.jsx("p", {
            className: "text-gray-800 font-semibold mb-4",
            children: "******@peatix.com",
          }),
          h.jsx("p", {
            className: "text-gray-600 mb-4",
            children:
              "Please check your inbox and enter the verification code below to verify your email address. The code will expire in 12:33",
          }),
          h.jsx("div", {
            className: "flex justify-center mb-4 space-x-2",
            children: r.map((p, y) =>
              h.jsx(
                "input",
                {
                  type: "text",
                  value: p,
                  onChange: (v) => g(v, y),
                  maxLength: 1,
                  ref: (v) => (i.current[y] = v),
                  className:
                    "w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                  autoFocus: y === 0,
                },
                y
              )
            ),
          }),
          h.jsx("button", {
            className: "bg-green-500 text-white py-2 px-4 rounded w-full mb-4",
            onClick: (p) => {
              p.preventDefault(), f();
            },
            children: "Verify",
          }),
          h.jsx("div", {
            className: "flex justify-between text-green-500",
            children: h.jsx("a", {
              href: "#",
              className: "hover:underline",
              children: "Resend code",
            }),
          }),
        ],
      }),
    }),
  });
}
const Vm = b.createContext(void 0),
  tE = ({ children: r }) => {
    const [n, i] = b.useState(),
      [o, l] = b.useState(0),
      [c, f] = b.useState(0);
    b.useEffect(() => {
      if (jt.get("item")) {
        const P = jt.get("item");
        P != null && i(JSON.parse(P));
      }
    }, []),
      b.useEffect(() => {
        if (n) {
          const P = n.reduce((k, T) => k + T.base_price * T.stock, 0);
          f(P);
        }
      }),
      b.useEffect(() => {
        if (n) {
          const P = n.reduce((k, T) => k + T.stock, 0);
          l(P);
        }
      }, [n]);
    const g = (P) => {
        Array.isArray(P)
          ? (i(P), jt.set("item", JSON.stringify(P), { expires: 7 }))
          : i((k) => {
              if (k) {
                const T = k.findIndex((R) => R.id === P.id);
                if (T !== -1) {
                  const R = [...k];
                  return (
                    (R[T].stock += 1),
                    jt.set("item", JSON.stringify(R), { expires: 7 }),
                    R
                  );
                }
                return (
                  console.log(P),
                  jt.set("item", JSON.stringify([...k, { ...P, number: 1 }]), {
                    expires: 7,
                  }),
                  [...k, { ...P, number: 1 }]
                );
              }
              return jt.set("item", JSON.stringify([P]), { expires: 7 }), [P];
            });
      },
      p = (P) => {
        i((k) => {
          if (k != null)
            return (
              jt.set("item", JSON.stringify(k.filter((T) => T.id !== P)), {
                expires: 7,
              }),
              k.filter((T) => T.id !== P)
            );
        });
      },
      y = () => {
        jt.remove("item");
      },
      v = () => n,
      E = (P) => {
        if (n) {
          const k = n.find((T) => T.id === P);
          k && g(k);
        }
      },
      S = (P) => {
        if (n) {
          const k = n.find((T) => T.id === P);
          if (k) {
            const T = n.map((R) =>
              R.id === P ? { ...R, stock: k.stock - 1 } : R
            );
            g(T);
          }
          k && (k == null ? void 0 : k.stock) < 2 && p(P);
        }
      };
    return h.jsx(Vm.Provider, {
      value: {
        getItem: v,
        setItemCart: g,
        removeFromCart: p,
        deleteAllCart: y,
        increaseAmount: E,
        decreaseAmount: S,
      },
      children: r,
    });
  },
  Wm = () => {
    const r = b.useContext(Vm);
    if (!r)
      throw new Error("useCartContext must be used within an CartProvider");
    return r;
  };
var qm = "https://js.stripe.com/v3",
  nE = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
  ep =
    "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
  rE = function () {
    for (
      var n = document.querySelectorAll('script[src^="'.concat(qm, '"]')),
        i = 0;
      i < n.length;
      i++
    ) {
      var o = n[i];
      if (nE.test(o.src)) return o;
    }
    return null;
  },
  tp = function (n) {
    var i = "",
      o = document.createElement("script");
    o.src = "".concat(qm).concat(i);
    var l = document.head || document.body;
    if (!l)
      throw new Error(
        "Expected document.body not to be null. Stripe.js requires a <body> element."
      );
    return l.appendChild(o), o;
  },
  iE = function (n, i) {
    !n ||
      !n._registerWrapper ||
      n._registerWrapper({ name: "stripe-js", version: "5.6.0", startTime: i });
  },
  Ai = null,
  po = null,
  mo = null,
  sE = function (n) {
    return function () {
      n(new Error("Failed to load Stripe.js"));
    };
  },
  oE = function (n, i) {
    return function () {
      window.Stripe
        ? n(window.Stripe)
        : i(new Error("Stripe.js not available"));
    };
  },
  aE = function (n) {
    return Ai !== null
      ? Ai
      : ((Ai = new Promise(function (i, o) {
          if (typeof window > "u" || typeof document > "u") {
            i(null);
            return;
          }
          if ((window.Stripe && n && console.warn(ep), window.Stripe)) {
            i(window.Stripe);
            return;
          }
          try {
            var l = rE();
            if (l && n) console.warn(ep);
            else if (!l) l = tp(n);
            else if (l && mo !== null && po !== null) {
              var c;
              l.removeEventListener("load", mo),
                l.removeEventListener("error", po),
                (c = l.parentNode) === null || c === void 0 || c.removeChild(l),
                (l = tp(n));
            }
            (mo = oE(i, o)),
              (po = sE(o)),
              l.addEventListener("load", mo),
              l.addEventListener("error", po);
          } catch (f) {
            o(f);
            return;
          }
        })),
        Ai.catch(function (i) {
          return (Ai = null), Promise.reject(i);
        }));
  },
  lE = function (n, i, o) {
    if (n === null) return null;
    var l = n.apply(void 0, i);
    return iE(l, o), l;
  },
  Oi,
  Km = !1,
  Gm = function () {
    return (
      Oi ||
      ((Oi = aE(null).catch(function (n) {
        return (Oi = null), Promise.reject(n);
      })),
      Oi)
    );
  };
Promise.resolve()
  .then(function () {
    return Gm();
  })
  .catch(function (r) {
    Km || console.warn(r);
  });
var uE = function () {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    Km = !0;
    var l = Date.now();
    return Gm().then(function (c) {
      return lE(c, i, l);
    });
  },
  au = { exports: {} },
  lu,
  np;
function cE() {
  if (np) return lu;
  np = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (lu = r), lu;
}
var uu, rp;
function dE() {
  if (rp) return uu;
  rp = 1;
  var r = cE();
  function n() {}
  function i() {}
  return (
    (i.resetWarningCache = n),
    (uu = function () {
      function o(f, g, p, y, v, E) {
        if (E !== r) {
          var S = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((S.name = "Invariant Violation"), S);
        }
      }
      o.isRequired = o;
      function l() {
        return o;
      }
      var c = {
        array: o,
        bigint: o,
        bool: o,
        func: o,
        number: o,
        object: o,
        string: o,
        symbol: o,
        any: o,
        arrayOf: l,
        element: o,
        elementType: o,
        instanceOf: l,
        node: o,
        objectOf: l,
        oneOf: l,
        oneOfType: l,
        shape: l,
        exact: l,
        checkPropTypes: i,
        resetWarningCache: n,
      };
      return (c.PropTypes = c), c;
    }),
    uu
  );
}
var ip;
function fE() {
  return ip || ((ip = 1), (au.exports = dE()())), au.exports;
}
var hE = fE();
const Pe = fp(hE);
function sp(r, n) {
  var i = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    n &&
      (o = o.filter(function (l) {
        return Object.getOwnPropertyDescriptor(r, l).enumerable;
      })),
      i.push.apply(i, o);
  }
  return i;
}
function op(r) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? sp(Object(i), !0).forEach(function (o) {
          Jm(r, o, i[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
      : sp(Object(i)).forEach(function (o) {
          Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(i, o));
        });
  }
  return r;
}
function Co(r) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Co = function (n) {
          return typeof n;
        })
      : (Co = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Co(r)
  );
}
function Jm(r, n, i) {
  return (
    n in r
      ? Object.defineProperty(r, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[n] = i),
    r
  );
}
function Qm(r, n) {
  return pE(r) || mE(r, n) || gE(r, n) || yE();
}
function pE(r) {
  if (Array.isArray(r)) return r;
}
function mE(r, n) {
  var i = r && ((typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"]);
  if (i != null) {
    var o = [],
      l = !0,
      c = !1,
      f,
      g;
    try {
      for (
        i = i.call(r);
        !(l = (f = i.next()).done) && (o.push(f.value), !(n && o.length === n));
        l = !0
      );
    } catch (p) {
      (c = !0), (g = p);
    } finally {
      try {
        !l && i.return != null && i.return();
      } finally {
        if (c) throw g;
      }
    }
    return o;
  }
}
function gE(r, n) {
  if (r) {
    if (typeof r == "string") return ap(r, n);
    var i = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (i === "Object" && r.constructor && (i = r.constructor.name),
      i === "Map" || i === "Set")
    )
      return Array.from(r);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return ap(r, n);
  }
}
function ap(r, n) {
  (n == null || n > r.length) && (n = r.length);
  for (var i = 0, o = new Array(n); i < n; i++) o[i] = r[i];
  return o;
}
function yE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var yt = function (n, i, o) {
    var l = !!o,
      c = ve.useRef(o);
    ve.useEffect(
      function () {
        c.current = o;
      },
      [o]
    ),
      ve.useEffect(
        function () {
          if (!l || !n) return function () {};
          var f = function () {
            c.current && c.current.apply(c, arguments);
          };
          return (
            n.on(i, f),
            function () {
              n.off(i, f);
            }
          );
        },
        [l, i, n, c]
      );
  },
  Tu = function (n) {
    var i = ve.useRef(n);
    return (
      ve.useEffect(
        function () {
          i.current = n;
        },
        [n]
      ),
      i.current
    );
  },
  Mr = function (n) {
    return n !== null && Co(n) === "object";
  },
  vE = function (n) {
    return Mr(n) && typeof n.then == "function";
  },
  wE = function (n) {
    return (
      Mr(n) &&
      typeof n.elements == "function" &&
      typeof n.createToken == "function" &&
      typeof n.createPaymentMethod == "function" &&
      typeof n.confirmCardPayment == "function"
    );
  },
  lp = "[object Object]",
  xE = function r(n, i) {
    if (!Mr(n) || !Mr(i)) return n === i;
    var o = Array.isArray(n),
      l = Array.isArray(i);
    if (o !== l) return !1;
    var c = Object.prototype.toString.call(n) === lp,
      f = Object.prototype.toString.call(i) === lp;
    if (c !== f) return !1;
    if (!c && !o) return n === i;
    var g = Object.keys(n),
      p = Object.keys(i);
    if (g.length !== p.length) return !1;
    for (var y = {}, v = 0; v < g.length; v += 1) y[g[v]] = !0;
    for (var E = 0; E < p.length; E += 1) y[p[E]] = !0;
    var S = Object.keys(y);
    if (S.length !== g.length) return !1;
    var P = n,
      k = i,
      T = function (O) {
        return r(P[O], k[O]);
      };
    return S.every(T);
  },
  Ym = function (n, i, o) {
    return Mr(n)
      ? Object.keys(n).reduce(function (l, c) {
          var f = !Mr(i) || !xE(n[c], i[c]);
          return o.includes(c)
            ? (f &&
                console.warn(
                  "Unsupported prop change: options.".concat(
                    c,
                    " is not a mutable property."
                  )
                ),
              l)
            : f
            ? op(op({}, l || {}), {}, Jm({}, c, n[c]))
            : l;
        }, null)
      : null;
  },
  Zm =
    "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
  up = function (n) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zm;
    if (n === null || wE(n)) return n;
    throw new Error(i);
  },
  kE = function (n) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zm;
    if (vE(n))
      return {
        tag: "async",
        stripePromise: Promise.resolve(n).then(function (l) {
          return up(l, i);
        }),
      };
    var o = up(n, i);
    return o === null ? { tag: "empty" } : { tag: "sync", stripe: o };
  },
  SE = function (n) {
    !n ||
      !n._registerWrapper ||
      !n.registerAppInfo ||
      (n._registerWrapper({ name: "react-stripe-js", version: "3.1.0" }),
      n.registerAppInfo({
        name: "react-stripe-js",
        version: "3.1.0",
        url: "https://stripe.com/docs/stripe-js/react",
      }));
  },
  Go = ve.createContext(null);
Go.displayName = "ElementsContext";
var Xm = function (n, i) {
    if (!n)
      throw new Error(
        "Could not find Elements context; You need to wrap the part of your app that ".concat(
          i,
          " in an <Elements> provider."
        )
      );
    return n;
  },
  e0 = function (n) {
    var i = n.stripe,
      o = n.options,
      l = n.children,
      c = ve.useMemo(
        function () {
          return kE(i);
        },
        [i]
      ),
      f = ve.useState(function () {
        return {
          stripe: c.tag === "sync" ? c.stripe : null,
          elements: c.tag === "sync" ? c.stripe.elements(o) : null,
        };
      }),
      g = Qm(f, 2),
      p = g[0],
      y = g[1];
    ve.useEffect(
      function () {
        var S = !0,
          P = function (T) {
            y(function (R) {
              return R.stripe ? R : { stripe: T, elements: T.elements(o) };
            });
          };
        return (
          c.tag === "async" && !p.stripe
            ? c.stripePromise.then(function (k) {
                k && S && P(k);
              })
            : c.tag === "sync" && !p.stripe && P(c.stripe),
          function () {
            S = !1;
          }
        );
      },
      [c, p, o]
    );
    var v = Tu(i);
    ve.useEffect(
      function () {
        v !== null &&
          v !== i &&
          console.warn(
            "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."
          );
      },
      [v, i]
    );
    var E = Tu(o);
    return (
      ve.useEffect(
        function () {
          if (p.elements) {
            var S = Ym(o, E, ["clientSecret", "fonts"]);
            S && p.elements.update(S);
          }
        },
        [o, E, p.elements]
      ),
      ve.useEffect(
        function () {
          SE(p.stripe);
        },
        [p.stripe]
      ),
      ve.createElement(Go.Provider, { value: p }, l)
    );
  };
e0.propTypes = { stripe: Pe.any, options: Pe.object };
var EE = function (n) {
    var i = ve.useContext(Go);
    return Xm(i, n);
  },
  _E = function () {
    var n = EE("calls useElements()"),
      i = n.elements;
    return i;
  };
Pe.func.isRequired;
var t0 = ve.createContext(null);
t0.displayName = "CheckoutSdkContext";
var CE = function (n, i) {
    if (!n)
      throw new Error(
        "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
          i,
          " in an <CheckoutProvider> provider."
        )
      );
    return n;
  },
  bE = ve.createContext(null);
bE.displayName = "CheckoutContext";
Pe.any,
  Pe.shape({ clientSecret: Pe.string.isRequired, elementsOptions: Pe.object })
    .isRequired;
var Pu = function (n) {
    var i = ve.useContext(t0),
      o = ve.useContext(Go);
    if (i && o)
      throw new Error(
        "You cannot wrap the part of your app that ".concat(
          n,
          " in both <CheckoutProvider> and <Elements> providers."
        )
      );
    return i ? CE(i, n) : Xm(o, n);
  },
  NE = function (n) {
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  De = function (n, i) {
    var o = "".concat(NE(n), "Element"),
      l = function (p) {
        var y = p.id,
          v = p.className,
          E = p.options,
          S = E === void 0 ? {} : E,
          P = p.onBlur,
          k = p.onFocus,
          T = p.onReady,
          R = p.onChange,
          O = p.onEscape,
          F = p.onClick,
          $ = p.onLoadError,
          z = p.onLoaderStart,
          X = p.onNetworksChange,
          re = p.onConfirm,
          se = p.onCancel,
          pe = p.onShippingAddressChange,
          he = p.onShippingRateChange,
          ke = Pu("mounts <".concat(o, ">")),
          Ze = "elements" in ke ? ke.elements : null,
          Xe = "checkoutSdk" in ke ? ke.checkoutSdk : null,
          et = ve.useState(null),
          it = Qm(et, 2),
          Se = it[0],
          qe = it[1],
          ue = ve.useRef(null),
          H = ve.useRef(null);
        yt(Se, "blur", P),
          yt(Se, "focus", k),
          yt(Se, "escape", O),
          yt(Se, "click", F),
          yt(Se, "loaderror", $),
          yt(Se, "loaderstart", z),
          yt(Se, "networkschange", X),
          yt(Se, "confirm", re),
          yt(Se, "cancel", se),
          yt(Se, "shippingaddresschange", pe),
          yt(Se, "shippingratechange", he),
          yt(Se, "change", R);
        var Q;
        T &&
          (n === "expressCheckout"
            ? (Q = T)
            : (Q = function () {
                T(Se);
              })),
          yt(Se, "ready", Q),
          ve.useLayoutEffect(
            function () {
              if (ue.current === null && H.current !== null && (Ze || Xe)) {
                var C = null;
                Xe ? (C = Xe.createElement(n, S)) : Ze && (C = Ze.create(n, S)),
                  (ue.current = C),
                  qe(C),
                  C && C.mount(H.current);
              }
            },
            [Ze, Xe, S]
          );
        var W = Tu(S);
        return (
          ve.useEffect(
            function () {
              if (ue.current) {
                var C = Ym(S, W, ["paymentRequest"]);
                C && "update" in ue.current && ue.current.update(C);
              }
            },
            [S, W]
          ),
          ve.useLayoutEffect(function () {
            return function () {
              if (ue.current && typeof ue.current.destroy == "function")
                try {
                  ue.current.destroy(), (ue.current = null);
                } catch {}
            };
          }, []),
          ve.createElement("div", { id: y, className: v, ref: H })
        );
      },
      c = function (p) {
        Pu("mounts <".concat(o, ">"));
        var y = p.id,
          v = p.className;
        return ve.createElement("div", { id: y, className: v });
      },
      f = i ? c : l;
    return (
      (f.propTypes = {
        id: Pe.string,
        className: Pe.string,
        onChange: Pe.func,
        onBlur: Pe.func,
        onFocus: Pe.func,
        onReady: Pe.func,
        onEscape: Pe.func,
        onClick: Pe.func,
        onLoadError: Pe.func,
        onLoaderStart: Pe.func,
        onNetworksChange: Pe.func,
        onConfirm: Pe.func,
        onCancel: Pe.func,
        onShippingAddressChange: Pe.func,
        onShippingRateChange: Pe.func,
        options: Pe.object,
      }),
      (f.displayName = o),
      (f.__elementType = n),
      f
    );
  },
  Me = typeof window > "u",
  RE = ve.createContext(null);
RE.displayName = "EmbeddedCheckoutProviderContext";
var TE = function () {
  var n = Pu("calls useStripe()"),
    i = n.stripe;
  return i;
};
De("auBankAccount", Me);
var cp = De("card", Me);
De("cardNumber", Me);
De("cardExpiry", Me);
De("cardCvc", Me);
De("fpxBank", Me);
De("iban", Me);
De("idealBank", Me);
De("p24Bank", Me);
De("epsBank", Me);
De("payment", Me);
De("expressCheckout", Me);
De("currencySelector", Me);
De("paymentRequestButton", Me);
De("linkAuthentication", Me);
De("address", Me);
De("shippingAddress", Me);
De("paymentMethodMessaging", Me);
De("affirmMessage", Me);
De("afterpayClearpayMessage", Me);
const PE = uE(
    "pk_test_51QNmcJL8y9JZYcvb3spJrsQX0HgaW8ZV3QAnlrnDzexAsbzQTD2juu9V3XDSkN25IpdJe5WjjyZ7sadEOxkmMDOj00FNC5AgFA"
  ),
  IE = "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  jE = () => {
    const r = TE(),
      n = _E(),
      [i, o] = b.useState(null),
      [l, c] = b.useState(!1),
      f = async (g) => {
        if ((g.preventDefault(), !r || !n)) return;
        c(!0), o(null);
        const p = n.getElement(cp);
        if (p) {
          try {
            const { error: y, paymentMethod: v } = await r.createPaymentMethod({
              type: "card",
              card: p,
            });
            y
              ? o(y.message || "Có lỗi xảy ra khi xử lý thanh toán.")
              : (
                  await je.post("http://localhost:4242/pay", {
                    paymentMethodId: v.id,
                  })
                ).data.success
              ? o("Thanh toán thành công!")
              : o("Thanh toán thất bại, vui lòng thử lại.");
          } catch {
            o("Lỗi hệ thống, vui lòng thử lại.");
          }
          c(!1);
        }
      };
    return h.jsxs("div", {
      className: "bg-white p-6 rounded-lg shadow-lg w-96 text-center",
      children: [
        h.jsx("img", {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Stripe_Logo%2C_revised_2016.svg",
          alt: "Stripe Logo",
          className: "h-10 mx-auto mb-4",
        }),
        h.jsx("img", {
          src: IE,
          alt: "Sản phẩm",
          className: "w-full h-40 object-cover rounded-lg mb-4 shadow-md",
        }),
        h.jsx("h2", {
          className: "text-xl font-bold mb-4",
          children: "Thanh toán với Stripe",
        }),
        h.jsx(cp, { className: "p-3 border border-gray-300 rounded-lg" }),
        h.jsx("button", {
          type: "submit",
          onClick: f,
          className: `mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg w-full transition ${
            l ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`,
          disabled: !r || l,
          children: l ? "Đang xử lý..." : "Thanh toán",
        }),
        i && h.jsx("p", { className: "mt-4 text-red-500", children: i }),
      ],
    });
  },
  AE = () =>
    h.jsx("div", {
      className:
        "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50",
      children: h.jsx(e0, { stripe: PE, children: h.jsx(jE, {}) }),
    });
function OE() {
  var y;
  const [r, n] = b.useState(0);
  b.useState(0);
  const [i, o] = b.useState(!1),
    [l, c] = b.useState(!1),
    f =
      "https://product.hstatic.net/1000312752/product/09a661c8a5a5aec10a8fc85c77d6416b069f4b1091662927387f7bb38624078f777ed3_acafc873ad214e18af6e481d53ada1e8.jpg",
    g = Wm(),
    p = (v) => {
      v.preventDefault, o(!0);
    };
  return h.jsx(h.Fragment, {
    children: h.jsxs("div", {
      className: "flex justify-around m-9",
      children: [
        h.jsxs("div", {
          className: "relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 ",
          children: [
            h.jsx("h1", {
              className: "title text-center font-semibold",
              children: "Order Item",
            }),
            h.jsx("table", {
              className:
                "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-1",
              children: h.jsxs("tbody", {
                children: [
                  (y = g.getItem()) == null
                    ? void 0
                    : y.map(
                        (v) => (
                          console.log(v),
                          h.jsxs("tr", {
                            className:
                              "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full",
                            children: [
                              h.jsx("td", {
                                className: "p-4",
                                children: h.jsx("img", {
                                  src: "http://localhost:3000/uploads/",
                                  className:
                                    "w-16 md:w-32 max-w-full max-h-full",
                                  alt: "Apple Watch",
                                }),
                              }),
                              h.jsx("td", {
                                className:
                                  "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                                children: v.name,
                              }),
                              h.jsx("td", {
                                className: "px-6 py-4",
                                children: h.jsx("div", {
                                  className: "flex items-center",
                                  children: h.jsx("div", {
                                    children: h.jsx("input", {
                                      type: "number",
                                      id: "first_product",
                                      className:
                                        "bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                      placeholder: "1",
                                      readOnly: !0,
                                    }),
                                  }),
                                }),
                              }),
                              h.jsx("td", {
                                className:
                                  "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                                children: v.base_price ? v.base_price : 0,
                              }),
                              h.jsx("td", {
                                className: "px-6 py-4",
                                children: h.jsx("button", {
                                  type: "submit",
                                  className:
                                    "font-medium  dark:text-red-500 border-2 p-4 rounded-xl hover:bg-red-400",
                                  onClick: () => {
                                    g.removeFromCart(v.id);
                                  },
                                  children: "Remove",
                                }),
                              }),
                            ],
                          })
                        )
                      ),
                  h.jsxs("tr", {
                    className:
                      "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full",
                    children: [
                      h.jsx("td", {
                        className: "p-4",
                        children: h.jsx("img", {
                          src: f,
                          className: "w-16 md:w-32 max-w-full max-h-full",
                          alt: "Apple Watch",
                        }),
                      }),
                      h.jsx("td", {
                        className:
                          "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                        children: "Apple Watch",
                      }),
                      h.jsx("td", {
                        className: "px-6 py-4",
                        children: h.jsx("div", {
                          className: "flex items-center",
                          children: h.jsx("div", {
                            children: h.jsx("input", {
                              type: "number",
                              id: "first_product",
                              className:
                                "bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              placeholder: "1",
                              readOnly: !0,
                            }),
                          }),
                        }),
                      }),
                      h.jsx("td", {
                        className:
                          "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                        children: "$599",
                      }),
                      h.jsx("td", {
                        className: "px-6 py-4",
                        children: h.jsx("button", {
                          type: "submit",
                          className:
                            "font-medium  dark:text-red-500 border-2 p-4 rounded-xl hover:bg-red-400",
                          onClick: () => {
                            g.removeFromCart(1);
                          },
                          children: "Remove",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        h.jsx("div", {
          className: "FormPayMent w-1/3",
          children: h.jsxs("form", {
            className: "mx-auto max-w-sm",
            onSubmit: (v) => p(v),
            children: [
              h.jsxs("div", {
                className: "mb-5",
                children: [
                  h.jsx("label", {
                    htmlFor: "email",
                    className:
                      "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
                    children: "Your email",
                  }),
                  h.jsx("input", {
                    type: "email",
                    id: "email",
                    className:
                      "dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                    placeholder: "example@gmail.com",
                    required: !0,
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "mb-5",
                children: [
                  h.jsx("label", {
                    htmlFor: "password",
                    className:
                      "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
                    children: "Total Price",
                  }),
                  h.jsx("input", {
                    type: "text",
                    id: "password",
                    className:
                      "dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                    value: "$5990",
                    disabled: !0,
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "mb-5",
                children: [
                  h.jsx("label", {
                    htmlFor: "method",
                    className:
                      "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
                    children: "Select Payment Method",
                  }),
                  h.jsxs("select", {
                    id: "method",
                    name: "method",
                    onChange: (v) => n(Number(v.target.value)),
                    value: r,
                    className:
                      "dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                    children: [
                      h.jsx("option", {
                        value: 1,
                        className: "rounded-lg",
                        children: "Card",
                      }),
                      h.jsx("option", {
                        value: 0,
                        className: "rounded-lg",
                        children: "QRcode",
                      }),
                    ],
                  }),
                ],
              }),
              r == 1
                ? h.jsx(h.Fragment, { children: h.jsx(AE, {}) })
                : h.jsx(h.Fragment, {}),
              h.jsxs("div", {
                className: "mb-5 flex items-start",
                children: [
                  h.jsx("div", {
                    className: "flex h-5 items-center",
                    children: h.jsx("input", {
                      id: "terms",
                      type: "checkbox",
                      value: "",
                      onChange: (v) => {
                        o(v.target.checked);
                      },
                      className:
                        "focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800",
                      required: !0,
                    }),
                  }),
                  h.jsxs("label", {
                    htmlFor: "terms",
                    className:
                      "ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                    children: [
                      "I agree with the",
                      " ",
                      h.jsx("a", {
                        href: "#",
                        className:
                          "text-blue-600 hover:underline dark:text-blue-500",
                        children: "terms and conditions",
                      }),
                    ],
                  }),
                ],
              }),
              h.jsx("button", {
                type: "submit",
                onClick: () => c(!0),
                className:
                  "rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                children: "Submit for Payment",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const LE = [
    {
      label: "Default",
      svg: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z",
    },
    {
      label: "Setting",
      svg: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z",
    },
    {
      label: "History",
      svg: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z",
    },
    {
      label: "Logout",
      svg: "M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z",
    },
  ],
  DE = () => {
    const [r, n] = b.useState(0);
    let i;
    switch (r) {
      case 1:
        break;
      case 2:
        break;
      default:
        i = h.jsx(OE, {});
        break;
    }
    return h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className: "flex justify-center",
        children: [
          h.jsx("div", {
            className:
              "left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden",
            children: h.jsx("div", {
              className:
                "h-full px-3 py-4 overflow-y-auto bg-gray-400 dark:bg-gray-800",
              children: h.jsxs("ul", {
                className: "space-y-2 font-medium",
                children: [
                  h.jsx("li", {
                    children: h.jsxs("button", {
                      type: "button",
                      className:
                        "flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 peer dark:text-white dark:hover:bg-gray-700",
                      children: [
                        h.jsx("svg", {
                          className:
                            "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          viewBox: "0 0 18 21",
                          children: h.jsx("path", {
                            d: "M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z",
                          }),
                        }),
                        h.jsx("span", {
                          className:
                            "flex-1 ms-3 text-left rtl:text-right whitespace-nowrap",
                          children: "E-commerce",
                        }),
                        h.jsx("svg", {
                          className: "w-3 h-3",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 10 6",
                          children: h.jsx("path", {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "m1 1 4 4 4-4",
                          }),
                        }),
                      ],
                    }),
                  }),
                  LE.map((o, l) =>
                    h.jsx(
                      "li",
                      {
                        children: h.jsxs("a", {
                          href: "#",
                          className:
                            "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                          children: [
                            h.jsx("svg", {
                              className:
                                "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "currentColor",
                              viewBox: "0 0 20 18",
                              children: h.jsx("path", { d: o.svg }),
                            }),
                            h.jsx("span", {
                              className: "flex-1 ms-3 whitespace-nowrap",
                              children: o.label,
                            }),
                          ],
                        }),
                      },
                      l
                    )
                  ),
                ],
              }),
            }),
          }),
          h.jsx("div", { className: "w-5/6", children: i }),
        ],
      }),
    });
  };
function ME() {
  const [r, n] = b.useState({ category: "", priceMin: "", priceMax: "" }),
    [i, o] = b.useState(!1),
    [l, c] = b.useState(!1),
    f = (v) => {
      const { name: E, value: S } = v.target;
      n({ ...r, [E]: S });
    },
    g = (v) => {
      v.preventDefault(), c(!l);
    },
    [p, y] = b.useState();
  return (
    b.useEffect(() => {
      (async () => {
        const E = await Vo().getProductWithFilter(r);
        y(E);
      })();
    }, [l]),
    h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className: "flex h-full w-full",
        children: [
          h.jsx("div", {
            className: $e("sider-bar w-1/3", i ? "block" : "hidden"),
            children: h.jsxs("div", {
              className: "p-4",
              children: [
                h.jsxs("div", {
                  className:
                    "flex justify-between items-center border-b pb-2 mb-4",
                  children: [
                    h.jsx("h1", {
                      className: "text-xl font-bold",
                      children: "BỘ LỌC",
                    }),
                    h.jsx("button", {
                      className:
                        "text-xl font-bold text-red-500 hover:text-red-700",
                      onClick: () => o(!i),
                      children: "×",
                    }),
                  ],
                }),
                h.jsxs("form", {
                  className: "space-y-4",
                  onSubmit: (v) => g(v),
                  children: [
                    h.jsxs("div", {
                      className: "flex flex-col space-y-2",
                      children: [
                        h.jsx("label", {
                          className: "text-lg font-medium",
                          children: "Category:",
                        }),
                        h.jsxs("select", {
                          name: "category",
                          value: r.category,
                          onChange: f,
                          className:
                            "border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                          children: [
                            h.jsx("option", { value: "", children: "All" }),
                            h.jsx("option", {
                              value: "electronics",
                              children: "Electronics",
                            }),
                            h.jsx("option", {
                              value: "clothing",
                              children: "Clothing",
                            }),
                            h.jsx("option", {
                              value: "home-appliances",
                              children: "Home Appliances",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex flex-col space-y-2",
                      children: [
                        h.jsx("label", {
                          className: "text-lg font-medium",
                          children: "Price Range:",
                        }),
                        h.jsxs("div", {
                          className: "flex space-x-4",
                          children: [
                            h.jsx("input", {
                              type: "number",
                              name: "priceMin",
                              placeholder: "Min Price",
                              value: r.priceMin,
                              onChange: f,
                              className:
                                "border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full",
                            }),
                            h.jsx("input", {
                              type: "number",
                              name: "priceMax",
                              placeholder: "Max Price",
                              value: r.priceMax,
                              onChange: f,
                              className:
                                "border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsx("div", {
                      className: "mt-4",
                      children: h.jsx("button", {
                        className:
                          "w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
                        children: "Apply Filters",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: $e(
              "w-1/3 h-full items-center flex bottom-0 sticky ",
              i ? "hidden" : "block"
            ),
            children: h.jsx("button", {
              type: "submit",
              className: "text-xl font-bold text-red-500 hover:text-red-700",
              onClick: () => o(!i),
              children: "Filter",
            }),
          }),
          h.jsx("div", {
            className: "ListProduct grid grid-cols-4 gap-4",
            children:
              p == null
                ? void 0
                : p.map((v, E) =>
                    h.jsxs(
                      Mn,
                      {
                        to: $e("/product?product=" + v.id),
                        className:
                          "text-center transition duration-0 hover:shadow-2xl hover:duration-700",
                        children: [
                          h.jsx("img", {
                            className:
                              "rounded-t-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 h-52 w-full",
                            src: "http://localhost:3000/uploads/",
                            alt: "",
                          }),
                          h.jsxs("div", {
                            children: [
                              h.jsx("h1", { children: "Product name" }),
                              h.jsx("p", { children: "introduce" }),
                            ],
                          }),
                        ],
                      },
                      E
                    )
                  ),
          }),
        ],
      }),
    })
  );
}
const FE = () => {
    var g;
    const r = Jt(),
      n = new URLSearchParams(r.search),
      [i, o] = b.useState(),
      [l, c] = b.useState(!1);
    b.useState(!1), console.log(n.get("product"));
    const f = Wm();
    return (
      b.useEffect(() => {
        (async () => {
          try {
            const y = await Vo().getProductById(Number(n.get("product")));
            o(y.data), c(!0);
          } catch (y) {
            console.error("Error fetching data:", y);
          }
        })();
      }, []),
      h.jsx(h.Fragment, {
        children: h.jsxs("div", {
          className: "p-4 md:p-8",
          children: [
            h.jsxs("nav", {
              className: "text-sm text-gray-500 mb-4",
              children: [
                h.jsx("a", {
                  href: "#",
                  className: "hover:underline",
                  children: "Nike Court",
                }),
                " ",
                ">",
                h.jsxs("a", {
                  href: "#",
                  className: "hover:underline",
                  children: [" ", "Nike Tennis"],
                }),
                " ",
                ">",
                h.jsxs("a", {
                  href: "#",
                  className: "hover:underline",
                  children: [" ", "Nike Zoom Vapor"],
                }),
              ],
            }),
            h.jsxs("div", {
              className: "md:flex",
              children: [
                h.jsxs("div", {
                  className: "md:w-1/2",
                  children: [
                    l &&
                      h.jsx("img", {
                        src:
                          (g = i == null ? void 0 : i.ProductVariants[0]) ==
                          null
                            ? void 0
                            : g.image_url,
                        alt: "Nike Zoom Vapor Pro 2 HC ‘White’ DR6191-101",
                        className: "w-3/4 h-1/2 mb-4",
                      }),
                    h.jsxs("div", {
                      className: "flex space-x-2",
                      children: [
                        h.jsx("img", {
                          src: "https://placehold.co/100x100",
                          alt: "Side view of Nike Zoom Vapor Pro 2 HC ‘White’",
                          className: "w-1/5",
                        }),
                        h.jsx("img", {
                          src: "https://placehold.co/100x100",
                          alt: "Person wearing Nike Zoom Vapor Pro 2 HC ‘White’ on a tennis court",
                          className: "w-1/5",
                        }),
                        h.jsx("img", {
                          src: "https://placehold.co/100x100",
                          alt: "Person sitting on a tennis court wearing Nike Zoom Vapor Pro 2 HC ‘White’",
                          className: "w-1/5",
                        }),
                        h.jsx("img", {
                          src: "https://placehold.co/100x100",
                          alt: "Person playing tennis wearing Nike Zoom Vapor Pro 2 HC ‘White’",
                          className: "w-1/5",
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "md:w-1/2 md:pl-8",
                  children: [
                    h.jsx("h1", {
                      className: "text-xl md:text-2xl font-bold mb-2",
                      children: i == null ? void 0 : i.name,
                    }),
                    h.jsx("p", {
                      className: "text-lg md:text-xl text-red-500 mb-4",
                      children: "3,100,000 ₫ – 3,500,000 ₫",
                    }),
                    h.jsxs("div", {
                      className: "mb-4",
                      children: [
                        h.jsx("span", {
                          className: "text-sm text-gray-500",
                          children: "Kích thước",
                        }),
                        h.jsx("div", {
                          className: "mt-2 flex flex-wrap space-x-2",
                          children:
                            i == null
                              ? void 0
                              : i.ProductVariants.map((p, y) =>
                                  h.jsx(
                                    "button",
                                    {
                                      className:
                                        "mb-2 rounded-full border border-gray-300 px-4 py-2 hover:scale-105 hover:bg-blue-500/25",
                                      children: p.size,
                                    },
                                    y
                                  )
                                ),
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "border border-gray-300 p-4 mb-4",
                      children: [
                        h.jsx("div", {
                          className: "flex items-center mb-2",
                          children: h.jsx("span", {
                            className: "text-sm",
                            children: "Gọi ngay để có giá tốt",
                          }),
                        }),
                        h.jsx("p", {
                          className: "text-sm mb-1",
                          children:
                            "Hotline HN : 0984918486 - 0785499555 - 72 Tây Sơn Đống Đa",
                        }),
                        h.jsx("p", {
                          className: "text-sm",
                          children:
                            "Hotline HCM : 0786665444 - 561 Nguyễn Đình Chiểu Q.3",
                        }),
                        h.jsx("p", {
                          className: "text-sm text-gray-500",
                          children:
                            "Tổng đài hoạt động từ 10h00 - 22h00 mỗi ngày",
                        }),
                      ],
                    }),
                    h.jsx("button", {
                      className:
                        "w-full bg-pink-200 text-white py-3 rounded mb-4 hover:bg-pink-500",
                      onClick: () => {
                        i != null && f.setItemCart(i);
                      },
                      children: "THÊM VÀO GIỎ HÀNG",
                    }),
                    h.jsxs("div", {
                      className:
                        "mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0",
                      children: [
                        h.jsxs("button", {
                          className:
                            "w-full rounded bg-red-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3",
                          children: [
                            "MUA NGAY",
                            h.jsx("br", {}),
                            "Giao Tận Nơi Hoặc Nhận Tại Cửa Hàng",
                          ],
                        }),
                        h.jsxs("button", {
                          className:
                            "w-full rounded bg-blue-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3",
                          children: [
                            "TRẢ GÓP QUA THẺ",
                            h.jsx("br", {}),
                            "Visa, Master, JCB",
                          ],
                        }),
                        h.jsxs("button", {
                          className:
                            "w-full rounded bg-yellow-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3",
                          children: [
                            "MUA NGAY - TRẢ SAU",
                            h.jsx("br", {}),
                            "HOME PayLater",
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("ul", {
                      className:
                        "grid grid-cols-2 space-y-2 text-sm text-gray-500",
                      children: [
                        h.jsx("li", {
                          children: h.jsx("button", {
                            className: "hover:text-blue-700/75",
                            children: "Hệ Thống Cửa Hàng",
                          }),
                        }),
                        h.jsx("li", {
                          children: h.jsx("button", {
                            className: "hover:text-blue-700/75",
                            children: "Cam Kết Khách Hàng",
                          }),
                        }),
                        h.jsx("li", {
                          children: h.jsx("button", {
                            className: "hover:text-blue-700/75",
                            children: "Chính Sách Đổi Trả, Bảo Hành",
                          }),
                        }),
                        h.jsx("li", {
                          children: h.jsx("button", {
                            className: "hover:text-blue-700/75",
                            children: "Chính Sách Vận Chuyển",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  UE = [
    {
      label: "Share",
      iconPath:
        "M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z",
    },
    {
      label: "Print",
      iconPath:
        "M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1ZM18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z",
    },
    {
      label: "Download",
      iconPath:
        "M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414ZM18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    },
    {
      label: "Copy",
      iconPath:
        "M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2ZM11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z",
    },
  ],
  BE = ({ iconPath: r, label: n }) =>
    h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className: "relative",
        children: [
          h.jsxs("button", {
            type: "button",
            className:
              "flex h-[52px] w-[52px] items-center justify-center rounded-lg border peer/hover border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400",
            children: [
              h.jsx("svg", {
                className: "h-5 w-5",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: h.jsx("path", { d: r }),
              }),
              h.jsx("span", { className: "sr-only", children: n }),
            ],
          }),
          h.jsx("div", {
            className:
              "tooltip invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700 group-hover:visible peer-hover/hover:opacity-100",
            children: n,
          }),
        ],
      }),
    }),
  zE = () =>
    h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className: "group fixed bottom-6 end-6 z-50",
        children: [
          h.jsx("div", {
            className:
              "mb-4 hidden flex-col items-center space-y-2 group-hover:flex",
            children: UE.map((r, n) =>
              h.jsx(BE, { iconPath: r.iconPath, label: r.label }, n)
            ),
          }),
          h.jsxs("button", {
            type: "button",
            className:
              "flex h-14 w-14 items-center justify-center rounded-lg bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: [
              h.jsx("svg", {
                className: "h-5 w-5 transition-transform group-hover:rotate-45",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 18 18",
                children: h.jsx("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M9 1v16M1 9h16",
                }),
              }),
              h.jsx("span", {
                className: "sr-only",
                children: "Open actions menu",
              }),
            ],
          }),
        ],
      }),
    });
function HE() {
  const { pathname: r } = Jt();
  return (
    b.useEffect(() => {
      window.scrollTo(0, 0);
    }, [r]),
    null
  );
}
const $E = () =>
  h.jsxs("div", {
    className: "flex",
    children: [
      h.jsxs("div", {
        className:
          "top-0 sticky left-0 z-20 h-screen w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:w-[40vw] lg:px-[35px] xl:max-w-[30vw]",
        children: [
          h.jsxs("div", {
            className: "flex items-center justify-between border-b-2 py-6",
            children: [
              h.jsx("div", {
                className:
                  "cursor-pointer text-sm font-semibold uppercase hover:underline",
                children: "Shopping Bag",
              }),
              h.jsx("button", {
                type: "submit",
                className: "cursor-pointer px-6 hover:opacity-50",
                children: h.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "size-6",
                  children: h.jsx("path", {
                    "fill-rule": "evenodd",
                    d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
                    "clip-rule": "evenodd",
                  }),
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className: "mt-3 flex flex-col gap-2",
            children: [
              h.jsx("a", {
                href: "",
                className:
                  "text-primary flex w-full items-center justify-center bg-gray-200 p-3 font-medium hover:bg-gray-500",
                children: "View Cart",
              }),
              h.jsx("a", {
                href: "",
                className:
                  "text-primary flex w-full items-center justify-center bg-gray-200 p-3 font-medium hover:bg-gray-500",
                children: "View Cart",
              }),
            ],
          }),
        ],
      }),
      h.jsx("div", {
        className: "p-4 w-full",
        children: h.jsxs("div", {
          className:
            "p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700",
          children: [
            h.jsxs("div", {
              className: "grid grid-cols-3 gap-4 mb-4",
              children: [
                h.jsx("div", {
                  className:
                    "flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
                h.jsx("div", {
                  className:
                    "flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
                h.jsx("div", {
                  className:
                    "flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
              ],
            }),
            h.jsx("div", {
              className:
                "flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800",
              children: h.jsx("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: h.jsx("svg", {
                  className: "w-3.5 h-3.5",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 18 18",
                  children: h.jsx("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "stroke-width": "2",
                    d: "M9 1v16M1 9h16",
                  }),
                }),
              }),
            }),
            h.jsxs("div", {
              className: "grid grid-cols-2 gap-4 mb-4",
              children: [
                h.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
                h.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
                h.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
                h.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
              ],
            }),
            h.jsx("div", {
              className:
                "flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800",
              children: h.jsx("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: h.jsx("svg", {
                  className: "w-3.5 h-3.5",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 18 18",
                  children: h.jsx("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "stroke-width": "2",
                    d: "M9 1v16M1 9h16",
                  }),
                }),
              }),
            }),
            h.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                h.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
                h.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
                h.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
                h.jsx("div", {
                  className:
                    "flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800",
                  children: h.jsx("p", {
                    className: "text-2xl text-gray-400 dark:text-gray-500",
                    children: h.jsx("svg", {
                      className: "w-3.5 h-3.5",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 18 18",
                      children: h.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "stroke-width": "2",
                        d: "M9 1v16M1 9h16",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
function VE() {
  return {
    createBrand: async (i) => await At.post("/api/brands", i),
    getBrand: async () => (await At.get("/api/brands")).data,
  };
}
function n0() {
  b.useState(!1),
    b.useState({
      message: "Your changes have been saved!",
      color: "green",
      detail: "You can continue with your work.",
    });
  const [r, n] = b.useState(),
    [i, o] = b.useState(),
    [l, c] = b.useState({
      name: "",
      base_price: 0,
      brand_id: 1,
      description: "",
    }),
    [f, g] = b.useState([]);
  b.useEffect(() => {
    (async () => {
      const P = await VE().getBrand(),
        k = await Vo().getProduct();
      n(k), o(P);
    })();
  }, []);
  const p = (S) => {
      const { name: P, value: k } = S.target;
      c((T) => ({ ...T, [P]: k }));
    },
    y = (S) => {
      const { name: P, value: k } = S.target;
      c((T) => ({ ...T, [P]: k }));
    },
    v = (S) => {
      const P = parseInt(S.target.value, 10);
      c((k) => ({ ...k, Brand_id: P }));
    };
  function E(S) {
    S.preventDefault();
  }
  return h.jsx(h.Fragment, {
    children: h.jsxs("div", {
      className: "flex mt-16",
      children: [
        h.jsxs("form", {
          className: "w-1/3 mx-auto",
          onSubmit: (S) => E(S),
          encType: "multipart/form-data",
          children: [
            h.jsx("div", {
              className: "text-center",
              children: "Form add Product",
            }),
            h.jsxs("div", {
              className: "relative",
              children: [
                h.jsx("input", {
                  type: "text",
                  id: "floating_outlined",
                  className:
                    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                  placeholder: " ",
                  name: "Product_name",
                  value: l == null ? void 0 : l.name,
                  onChange: p,
                }),
                h.jsx("label", {
                  htmlFor: "floating_outlined",
                  className:
                    "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
                  children: "Name Product",
                }),
              ],
            }),
            h.jsx("div", {
              className: "flex items-center justify-center w-full py-6",
              children: h.jsxs("label", {
                htmlFor: "dropzone-file",
                className:
                  "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
                children: [
                  h.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center pt-5 pb-6",
                    children: [
                      h.jsx("svg", {
                        className:
                          "w-8 h-8 mb-4 text-gray-500 dark:text-gray-400",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 20 16",
                        children: h.jsx("path", {
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2",
                        }),
                      }),
                      h.jsxs("p", {
                        className:
                          "mb-2 text-sm text-gray-500 dark:text-gray-400",
                        children: [
                          h.jsx("span", {
                            className: "font-semibold",
                            children: "Click to upload",
                          }),
                          " or drag and drop",
                        ],
                      }),
                      h.jsx("p", {
                        className: "text-xs text-gray-500 dark:text-gray-400",
                        children: "SVG, PNG, JPG or GIF (MAX. 800x400px)",
                      }),
                    ],
                  }),
                  h.jsx("input", {
                    id: "dropzone-file",
                    type: "file",
                    className: "hidden",
                    name: "file[]",
                    multiple: !0,
                    onChange: (S) => {
                      const P = S.target.files ? S.target.files : null;
                      if (P && P.length > 0)
                        for (let k = 0; k < P.length; k++) {
                          const T = P[k];
                          g((R) => (R ? [...R, T] : [T]));
                        }
                    },
                  }),
                ],
              }),
            }),
            h.jsx("div", {
              className: "flex items-center justify-center w-full py-6 gap-5",
              children:
                f &&
                (f == null
                  ? void 0
                  : f.map((S, P) =>
                      h.jsxs(
                        "div",
                        {
                          className: "relative",
                          children: [
                            h.jsx("button", {
                              type: "submit",
                              className:
                                "right-0 float-right hover:bg-red-500 hover:text-white rounded-lg p-1",
                              onClick: () => {
                                g((k) => (k ? (k.splice(P, 1), [...k]) : []));
                              },
                              children: h.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "size-6",
                                children: h.jsx("path", {
                                  "fill-rule": "evenodd",
                                  d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
                                  "clip-rule": "evenodd",
                                }),
                              }),
                            }),
                            h.jsx("img", {
                              src: URL.createObjectURL(S),
                              alt: "#",
                              className: "w-24",
                            }),
                          ],
                        },
                        P
                      )
                    )),
            }),
            h.jsx("label", {
              htmlFor: "number-input",
              className:
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Select a number:",
            }),
            h.jsx("input", {
              type: "number",
              id: "number-input",
              "aria-describedby": "helper-text-explanation",
              className:
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "90210",
              required: !0,
              value: 1,
              name: "number",
              min: 1,
              onChange: p,
            }),
            h.jsx("label", {
              htmlFor: "countries",
              className:
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Select an option",
            }),
            h.jsx("select", {
              id: "countries",
              className:
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              value: l == null ? void 0 : l.brand_id,
              name: "Brand_id",
              onChange: v,
              children:
                i == null
                  ? void 0
                  : i.map((S) =>
                      h.jsx(
                        "option",
                        { value: S.Brand_id, children: S.Brand_Name },
                        S.Brand_id
                      )
                    ),
            }),
            h.jsx("label", {
              htmlFor: "message",
              className:
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Description",
            }),
            h.jsx("textarea", {
              id: "message",
              "aria-rowindex": 4,
              className:
                "block p-2.5 mb-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "Write your thoughts here...",
              name: "description",
              value: l == null ? void 0 : l.description,
              onChange: y,
            }),
            h.jsx("input", {
              type: "submit",
              value: "add to product",
              className:
                "border-2 rounded-lg hover:shadow-2xl  transition-all active:duration-700 duration-0 hover:scale-105 hover:duration-500 text-center w-full p-3 hover:bg-blue-600 cursor-pointer",
            }),
          ],
        }),
        h.jsxs("div", {
          className:
            "relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-5",
          children: [
            h.jsxs("div", {
              className: "pb-6 bg-white dark:bg-gray-900",
              children: [
                h.jsx("label", {
                  htmlFor: "table-search",
                  className: "sr-only",
                  children: "Search",
                }),
                h.jsxs("div", {
                  className: "relative mt-1",
                  children: [
                    h.jsx("div", {
                      className:
                        "absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none",
                      children: h.jsx("svg", {
                        className: "w-4 h-4 text-gray-500 dark:text-gray-400",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 20 20",
                        children: h.jsx("path", {
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z",
                        }),
                      }),
                    }),
                    h.jsx("input", {
                      type: "text",
                      id: "table-search",
                      className:
                        "block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      placeholder: "Search for items",
                    }),
                  ],
                }),
              ],
            }),
            h.jsx("div", {
              className: "overflow-auto h-full",
              children: h.jsxs("table", {
                className:
                  "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
                children: [
                  h.jsx("thead", {
                    className:
                      "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0",
                    children: h.jsxs("tr", {
                      children: [
                        h.jsx("th", {
                          scope: "col",
                          className: "px-6 py-3",
                          children: "Product name",
                        }),
                        h.jsx("th", {
                          scope: "col",
                          className: "px-6 py-3",
                          children: "Image",
                        }),
                        h.jsx("th", {
                          scope: "col",
                          className: "px-6 py-3",
                          children: "Category",
                        }),
                        h.jsx("th", {
                          scope: "col",
                          className: "px-6 py-3",
                          children: "Number",
                        }),
                        h.jsx("th", {
                          scope: "col",
                          className: "px-6 py-3",
                          children: "Action",
                        }),
                      ],
                    }),
                  }),
                  h.jsxs("tbody", {
                    children: [
                      r == null
                        ? void 0
                        : r.map((S, P) =>
                            h.jsxs(
                              "tr",
                              {
                                className:
                                  "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-500/55",
                                children: [
                                  h.jsx("th", {
                                    scope: "row",
                                    className:
                                      "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                    children: S.name,
                                  }),
                                  h.jsx("td", {
                                    className: "px-6 py-4",
                                    children: h.jsx("img", {
                                      src: "http://localhost:3000/uploads/",
                                    }),
                                  }),
                                  h.jsx("td", {
                                    className: "px-6 py-4",
                                    children: S.description,
                                  }),
                                  h.jsx("td", { className: "px-6 py-4" }),
                                  h.jsx("td", {
                                    className: "px-6 py-4",
                                    children: h.jsx("a", {
                                      href: "#",
                                      className:
                                        "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                                      children: "Edit",
                                    }),
                                  }),
                                ],
                              },
                              P
                            )
                          ),
                      h.jsxs("tr", {
                        className:
                          "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700",
                        children: [
                          h.jsx("th", {
                            scope: "row",
                            className:
                              "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                            children: 'Apple MacBook Pro 17"',
                          }),
                          h.jsx("td", {
                            className: "px-6 py-4",
                            children: "Silver",
                          }),
                          h.jsx("td", {
                            className: "px-6 py-4",
                            children: "Laptop",
                          }),
                          h.jsx("td", {
                            className: "px-6 py-4",
                            children: "$2999",
                          }),
                          h.jsx("td", {
                            className: "px-6 py-4",
                            children: h.jsx("a", {
                              href: "#",
                              className:
                                "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                              children: "Edit",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const WE = [
  {
    title: "Home",
    link: "/",
    icon: "home",
    className: "text-gray-900 dark:text-white",
  },
  {
    title: "E-commerce",
    icon: "cart",
    submenu: [
      { title: "Products", link: "#", icon: "" },
      { title: "Billing", link: "#", icon: "" },
      { title: "Invoice", link: "#", icon: "" },
    ],
    className: "text-gray-900 dark:text-white",
  },
  {
    title: "Users",
    link: "/users",
    icon: "users",
    submenu: [
      {
        title: "Setting",
        link: "/user-profile",
        icon: h.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "size-6",
          children: h.jsx("path", {
            "fill-rule": "evenodd",
            d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
            "clip-rule": "evenodd",
          }),
        }),
      },
      { title: "Billing", link: "#", icon: "" },
      { title: "Invoice", link: "#", icon: "" },
    ],
    className: "text-gray-900 dark:text-white",
  },
  {
    title: "Products",
    link: "/products",
    icon: "box",
    className: "text-gray-900 dark:text-white",
  },
];
function dp() {
  return {
    create: async (o) => {
      const l = await At.post("/v1/user/register", o);
      return console.log(l), l;
    },
    login: async (o) => (
      console.log("http://localhost:3000/v1/user"),
      (await At.post("/v1/user", o)).data
    ),
    update: async (o) => {
      await At.post("/v1/user/update", o);
    },
  };
}
const qE = ({ open: r, onClose: n }) => {
    const [i, o] = b.useState(!1),
      [l, c] = b.useState(""),
      [f, g] = b.useState(""),
      p = $i(),
      [y, v] = b.useState(!1),
      [E, S] = b.useState({ User_Name: "", password: "", mail: "" });
    b.useEffect(() => {
      r && v(!1);
    }, [r]);
    const P = () => {
        c(""), g(""), S({ User_Name: "", password: "", mail: "" });
      },
      k = zi();
    async function T() {
      const z = await dp().login({ User_Name: l, password: f });
      console.log(z), z && k.setUser(z);
    }
    const R = (z) =>
        z.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      O = (z) => {
        const { name: X, value: re } = z.target;
        S((se) => ({ ...se, [X]: re }));
      };
    async function F() {
      try {
        if ((console.log("User data:", E), R(E == null ? void 0 : E.mail))) {
          console.log("http://localhost:3000/v1/user/register");
          const z = await dp().create(E);
          console.log("Response status:", z.status),
            z.status == 200 && p("/register/verify");
        }
        console.log("loi email");
      } catch (z) {
        console.error("Error:", z);
      }
    }
    const $ = async () => {
      const z = await JS();
      k.setUser(z), n();
    };
    return h.jsx(h.Fragment, {
      children: h.jsx("div", {
        className: $e(
          " items-center justify-center min-h-screen inset-0 fixed bg-black opacity-85 z-50",
          r ? "flex" : "hidden"
        ),
        children: h.jsxs("form", {
          className: $e(
            "bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-lg"
          ),
          children: [
            h.jsx("button", {
              type: "submit",
              className: "right-0",
              onClick: n,
              children: h.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "size-6",
                children: h.jsx("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
                  "clip-rule": "evenodd",
                }),
              }),
            }),
            h.jsx("h2", {
              className: "text-2xl font-bold text-center mb-6",
              children: "Login Form",
            }),
            h.jsxs("div", {
              className: "flex justify-center mb-6",
              children: [
                h.jsx("button", {
                  className: $e(
                    "py-2 px-4 rounded-l-full border-2",
                    i
                      ? "bg-white text-black"
                      : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                  ),
                  onClick: (z) => {
                    z.preventDefault(), P(), o(!i);
                  },
                  children: "Login",
                }),
                h.jsx("button", {
                  className: $e(
                    " py-2 px-4 rounded-r-full border-2",
                    i
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                      : "bg-white text-black"
                  ),
                  onClick: (z) => {
                    z.preventDefault(), P(), o(!i);
                  },
                  children: "Register",
                }),
              ],
            }),
            h.jsx("div", {
              className: "mb-4",
              children: h.jsx("input", {
                type: "text",
                placeholder: "Email Address",
                className: "w-full p-3 border border-gray-300 rounded-lg",
                onChange: (z) => {
                  c(z.target.value);
                },
              }),
            }),
            h.jsx("div", {
              className: "mb-4",
              children: h.jsx("input", {
                type: "password",
                placeholder: "Password",
                className: "w-full p-3 border border-gray-300 rounded-lg",
                onChange: (z) => {
                  g(z.target.value);
                },
              }),
            }),
            i &&
              h.jsx(h.Fragment, {
                children: h.jsx("div", {
                  className: "mb-4",
                  children: h.jsx("input", {
                    type: "password",
                    placeholder: "Password",
                    name: "password",
                    onChange: (z) => O(z),
                    className: "w-full p-3 border border-gray-300 rounded-lg",
                  }),
                }),
              }),
            h.jsxs("div", {
              className:
                "mb-4 text-right flex bg-gradient-to-r bg-white border-2  w-full py-3 rounded-lg justify-center button-hover ",
              children: [
                h.jsxs("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0px",
                  y: "0px",
                  className: "h-8 w-8 inline-block mr-2",
                  viewBox: "0 0 48 48",
                  children: [
                    h.jsx("path", {
                      fill: "#FFC107",
                      d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z",
                    }),
                    h.jsx("path", {
                      fill: "#FF3D00",
                      d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z",
                    }),
                    h.jsx("path", {
                      fill: "#4CAF50",
                      d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z",
                    }),
                    h.jsx("path", {
                      fill: "#1976D2",
                      d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z",
                    }),
                  ],
                }),
                h.jsx("button", {
                  className: "",
                  type: "button",
                  onClick: $,
                  children: "login google",
                }),
              ],
            }),
            h.jsx("div", {
              className: "mb-4",
              children: i
                ? h.jsx("button", {
                    onClick: F,
                    className:
                      "bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg",
                    children: "Register",
                  })
                : h.jsx("button", {
                    onClick: (z) => T(),
                    className:
                      "bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg",
                    children: "Login",
                  }),
            }),
            h.jsx("div", {
              className: "mb-4 text-right",
              children: h.jsx("a", {
                href: "#",
                className: "text-blue-500",
                children: "Forgot password?",
              }),
            }),
          ],
        }),
      }),
    });
  },
  cu = {
    home: h.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: "size-6",
      children: [
        h.jsx("path", {
          d: "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z",
        }),
        h.jsx("path", {
          d: "m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z",
        }),
      ],
    }),
    users: h.jsx("svg", {
      className:
        "flex-shrink-0 size-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 20 18",
      children: h.jsx("path", {
        d: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z",
      }),
    }),
    cart: h.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: "size-5",
      children: h.jsx("path", {
        fillRule: "evenodd",
        d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z",
        clipRule: "evenodd",
      }),
    }),
    package: h.jsx("svg", {
      className: "size-5",
      fill: "currentColor",
      viewBox: "0 0 18 20",
      children: h.jsx("path", {
        d: "M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 0 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923Z",
      }),
    }),
    "log-out": h.jsx("svg", {
      className: "size-5",
      fill: "none",
      viewBox: "0 0 18 16",
      children: h.jsx("path", {
        stroke: "currentColor",
        d: "M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3",
      }),
    }),
  };
function KE() {
  zi(), $i();
  const [r, n] = b.useState(null),
    [i, o] = b.useState(0),
    [l, c] = b.useState(!1),
    [f, g] = b.useState(!1),
    [p, y] = b.useState(!1),
    [v, E] = b.useState(!1);
  b.useEffect(() => {
    y(!0), c(!0);
  }, []);
  const S = zi(),
    P = (O) => {
      n(r === O ? null : O);
    },
    k = (O) => {
      o(i === O ? 0 : O);
    },
    T = () => {
      E(!v);
    },
    R = () => {
      g(!f);
    };
  switch (i) {
    case 3:
      h.jsx(n0, {});
      break;
    case 4:
      h.jsx($m, {});
      break;
    default:
      h.jsx("div", {});
  }
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx("div", {
        className: $e(
          " left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 shadow-2xl transition-transform duration-500 fixed z-50",
          l
            ? f
              ? "w-16 translate-x-0"
              : "w-64 translate-x-0"
            : "-translate-x-full",
          p ? "transform translate-x-0" : "-translate-x-full"
        ),
        children: h.jsxs("div", {
          className: "h-full px-3 py-4",
          children: [
            h.jsx("button", {
              onClick: () => {
                R();
              },
              className: $e(
                "w-full mb-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200",
                f ? "flex justify-center" : ""
              ),
              children: f
                ? h.jsxs("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: "size-5",
                    children: [
                      h.jsx("path", {
                        d: "M12 4.5c-4.79 0-8.68 3.89-8.68 8.68 0 4.79 3.89 8.68 8.68 8.68s8.68-3.89 8.68-8.68c0-4.79-3.89-8.68-8.68-8.68Z",
                      }),
                      h.jsx("path", {
                        fillRule: "evenodd",
                        d: "M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-4.5 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z",
                        clipRule: "evenodd",
                      }),
                    ],
                  })
                : "Create Bot",
            }),
            h.jsxs("ul", {
              className: "space-y-2 font-medium",
              children: [
                WE.map((O, F) =>
                  h.jsx(
                    "li",
                    {
                      children: O.submenu
                        ? h.jsxs(h.Fragment, {
                            children: [
                              h.jsxs("button", {
                                type: "button",
                                onClick: () => P(F),
                                className: $e(
                                  "flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                                  f ? "justify-center" : ""
                                ),
                                children: [
                                  cu[O.icon],
                                  !f &&
                                    h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx("span", {
                                          className: "ms-3 flex-1 text-left",
                                          children: O.title,
                                        }),
                                        h.jsx("svg", {
                                          className: $e(
                                            "w-3 h-3 ml-2 transition-transform duration-200",
                                            r === F ? "rotate-180" : ""
                                          ),
                                          fill: "none",
                                          viewBox: "0 0 10 6",
                                          children: h.jsx("path", {
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            d: "m1 1 4 4 4-4",
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              !f &&
                                h.jsx("ul", {
                                  className: $e(
                                    "py-2 space-y-2",
                                    r === F ? "block" : "hidden"
                                  ),
                                  children: O.submenu.map(($, z) =>
                                    h.jsx(
                                      "li",
                                      {
                                        children: h.jsxs(Mn, {
                                          to: $.link,
                                          className:
                                            "flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                                          children: [$.icon, $.title],
                                        }),
                                      },
                                      z
                                    )
                                  ),
                                }),
                            ],
                          })
                        : O.link
                        ? h.jsxs(Mn, {
                            to: O.link,
                            className: $e(
                              "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                              f ? "justify-center" : ""
                            ),
                            children: [
                              cu[O.icon],
                              !f &&
                                h.jsx("span", {
                                  className: "ms-3 flex-1 text-left",
                                  children: O.title,
                                }),
                            ],
                          })
                        : h.jsxs("button", {
                            type: "button",
                            onClick: () => k(F),
                            className: $e(
                              "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                              f ? "justify-center" : ""
                            ),
                            children: [
                              cu[O.icon],
                              !f &&
                                h.jsx("span", {
                                  className: "ms-3 flex-1 text-left",
                                  children: O.title,
                                }),
                            ],
                          }),
                    },
                    F
                  )
                ),
                h.jsx("li", {
                  children: S.login
                    ? h.jsx("button", {
                        type: "button",
                        onClick: () => {
                          f || S.handleLogout();
                        },
                        className: $e(
                          "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                          f ? "justify-center" : ""
                        ),
                        children: f
                          ? h.jsx("span", {
                              className: "",
                              children: h.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "size-6",
                                children: h.jsx("path", {
                                  "fill-rule": "evenodd",
                                  d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
                                  "clip-rule": "evenodd",
                                }),
                              }),
                            })
                          : h.jsx("span", {
                              className: "ms-3 flex-1 text-left",
                              children: "logout",
                            }),
                      })
                    : h.jsx("button", {
                        type: "button",
                        onClick: T,
                        className: $e(
                          "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                          f ? "justify-center" : ""
                        ),
                        children: h.jsx("span", {
                          className: "ms-3 flex-1 text-left",
                          children: "login",
                        }),
                      }),
                }),
              ],
            }),
            h.jsx("div", {
              className: $e("mt-auto p-2", f ? "flex justify-center" : ""),
              children: h.jsxs("label", {
                className: "inline-flex items-center cursor-pointer",
                children: [
                  h.jsx("input", {
                    type: "checkbox",
                    value: "",
                    className: "sr-only peer",
                    defaultChecked: !0,
                  }),
                  h.jsx("div", {
                    className:
                      "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
                  }),
                  !f &&
                    h.jsx("span", {
                      className:
                        "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300",
                      children: "Go Online",
                    }),
                ],
              }),
            }),
            l &&
              !f &&
              h.jsx("button", {
                onClick: R,
                className:
                  "float-right right-2 top-4 z-50 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300",
                children: h.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "size-6",
                  children: h.jsx("path", {
                    fillRule: "evenodd",
                    d: "M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",
                    clipRule: "evenodd",
                  }),
                }),
              }),
          ],
        }),
      }),
      v && h.jsx(qE, { open: v, onClose: T }),
    ],
  });
}
function GE() {
  const r = zi(),
    [n, i] = b.useState(!0),
    o = [
      { path: "/", component: h.jsx(dw, {}), isPrivate: !1 },
      { path: "/register/verify", component: h.jsx(eE, {}), isPrivate: !1 },
      { path: "/product", component: h.jsx(FE, {}), isPrivate: !1 },
      { path: "/ManagingProduct", component: h.jsx(n0, {}), isPrivate: !1 },
      { path: "/total-product", component: h.jsx(ME, {}), isPrivate: !1 },
      { path: "/user-products", component: h.jsx($m, {}), isPrivate: !1 },
      { path: "/user-management", component: h.jsx(DE, {}), isPrivate: !1 },
      {
        path: "/user-profile",
        component: h.jsx(XS, {}),
        isPrivate: !0,
        allowedRoles: ["admin", "user"],
      },
      {
        path: "/dashboard",
        component: h.jsx($E, {}),
        isPrivate: !0,
        allowedRoles: ["admin"],
      },
    ];
  if (
    (b.useEffect(() => {
      r.login !== void 0 && i(!1);
    }, [r.login]),
    n)
  )
    return h.jsx("div", { children: "is loading ..... " });
  const l = (c) => {
    var f;
    return c.isPrivate
      ? r.login
        ? c.allowedRoles &&
          !c.allowedRoles.includes(
            ((f = r.user) == null ? void 0 : f.role) || ""
          )
          ? h.jsx(Gl, { to: "/", replace: !0 })
          : c.component
        : h.jsx(Gl, { to: "/", replace: !0 })
      : c.component;
  };
  return h.jsxs(kv, {
    children: [
      h.jsx(HE, {}),
      h.jsx(KE, {}),
      h.jsxs(Yy, {
        children: [
          o.map((c, f) => h.jsx(fu, { path: c.path, element: l(c) }, f)),
          h.jsx(fu, {
            path: "*",
            element: h.jsx(Gl, { to: "/", replace: !0 }),
          }),
        ],
      }),
      h.jsx(zE, {}),
      " ",
    ],
  });
}
ay.createRoot(document.getElementById("root")).render(
  h.jsx(b.StrictMode, {
    children: h.jsx(YS, { children: h.jsx(tE, { children: h.jsx(GE, {}) }) }),
  })
);
