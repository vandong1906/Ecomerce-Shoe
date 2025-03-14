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
var Ol = { exports: {} },
  Ci = {},
  Ll = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zf;
function Eg() {
  if (zf) return ie;
  zf = 1;
  var r = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    _ = Symbol.iterator;
  function E(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (_ && N[_]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    R = {};
  function b(N, D, re) {
    (this.props = N),
      (this.context = D),
      (this.refs = R),
      (this.updater = re || O);
  }
  (b.prototype.isReactComponent = {}),
    (b.prototype.setState = function (N, D) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, N, D, "setState");
    }),
    (b.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    });
  function A() {}
  A.prototype = b.prototype;
  function F(N, D, re) {
    (this.props = N),
      (this.context = D),
      (this.refs = R),
      (this.updater = re || O);
  }
  var $ = (F.prototype = new A());
  ($.constructor = F), k($, b.prototype), ($.isPureReactComponent = !0);
  var Q = Array.isArray,
    B = Object.prototype.hasOwnProperty,
    se = { current: null },
    ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fe(N, D, re) {
    var oe,
      ue = {},
      ce = null,
      ye = null;
    if (D != null)
      for (oe in (D.ref !== void 0 && (ye = D.ref),
      D.key !== void 0 && (ce = "" + D.key),
      D))
        B.call(D, oe) && !ae.hasOwnProperty(oe) && (ue[oe] = D[oe]);
    var pe = arguments.length - 2;
    if (pe === 1) ue.children = re;
    else if (1 < pe) {
      for (var ke = Array(pe), it = 0; it < pe; it++)
        ke[it] = arguments[it + 2];
      ue.children = ke;
    }
    if (N && N.defaultProps)
      for (oe in ((pe = N.defaultProps), pe))
        ue[oe] === void 0 && (ue[oe] = pe[oe]);
    return {
      $$typeof: r,
      type: N,
      key: ce,
      ref: ye,
      props: ue,
      _owner: se.current,
    };
  }
  function he(N, D) {
    return {
      $$typeof: r,
      type: N.type,
      key: D,
      ref: N.ref,
      props: N.props,
      _owner: N._owner,
    };
  }
  function Pe(N) {
    return typeof N == "object" && N !== null && N.$$typeof === r;
  }
  function Pt(N) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (re) {
        return D[re];
      })
    );
  }
  var jt = /\/+/g;
  function rt(N, D) {
    return typeof N == "object" && N !== null && N.key != null
      ? Pt("" + N.key)
      : D.toString(36);
  }
  function gt(N, D, re, oe, ue) {
    var ce = typeof N;
    (ce === "undefined" || ce === "boolean") && (N = null);
    var ye = !1;
    if (N === null) ye = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case r:
            case n:
              ye = !0;
          }
      }
    if (ye)
      return (
        (ye = N),
        (ue = ue(ye)),
        (N = oe === "" ? "." + rt(ye, 0) : oe),
        Q(ue)
          ? ((re = ""),
            N != null && (re = N.replace(jt, "$&/") + "/"),
            gt(ue, D, re, "", function (it) {
              return it;
            }))
          : ue != null &&
            (Pe(ue) &&
              (ue = he(
                ue,
                re +
                  (!ue.key || (ye && ye.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(jt, "$&/") + "/") +
                  N
              )),
            D.push(ue)),
        1
      );
    if (((ye = 0), (oe = oe === "" ? "." : oe + ":"), Q(N)))
      for (var pe = 0; pe < N.length; pe++) {
        ce = N[pe];
        var ke = oe + rt(ce, pe);
        ye += gt(ce, D, re, ke, ue);
      }
    else if (((ke = E(N)), typeof ke == "function"))
      for (N = ke.call(N), pe = 0; !(ce = N.next()).done; )
        (ce = ce.value),
          (ke = oe + rt(ce, pe++)),
          (ye += gt(ce, D, re, ke, ue));
    else if (ce === "object")
      throw (
        ((D = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : D) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ye;
  }
  function At(N, D, re) {
    if (N == null) return N;
    var oe = [],
      ue = 0;
    return (
      gt(N, oe, "", "", function (ce) {
        return D.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Je(N) {
    if (N._status === -1) {
      var D = N._result;
      (D = D()),
        D.then(
          function (re) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = re));
          },
          function (re) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = re));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = D));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var Ne = { current: null },
    H = { transition: null },
    Z = {
      ReactCurrentDispatcher: Ne,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: se,
    };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ie.Children = {
      map: At,
      forEach: function (N, D, re) {
        At(
          N,
          function () {
            D.apply(this, arguments);
          },
          re
        );
      },
      count: function (N) {
        var D = 0;
        return (
          At(N, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (N) {
        return (
          At(N, function (D) {
            return D;
          }) || []
        );
      },
      only: function (N) {
        if (!Pe(N))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return N;
      },
    }),
    (ie.Component = b),
    (ie.Fragment = i),
    (ie.Profiler = l),
    (ie.PureComponent = F),
    (ie.StrictMode = o),
    (ie.Suspense = m),
    (ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (ie.act = q),
    (ie.cloneElement = function (N, D, re) {
      if (N == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            N +
            "."
        );
      var oe = k({}, N.props),
        ue = N.key,
        ce = N.ref,
        ye = N._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((ce = D.ref), (ye = se.current)),
          D.key !== void 0 && (ue = "" + D.key),
          N.type && N.type.defaultProps)
        )
          var pe = N.type.defaultProps;
        for (ke in D)
          B.call(D, ke) &&
            !ae.hasOwnProperty(ke) &&
            (oe[ke] = D[ke] === void 0 && pe !== void 0 ? pe[ke] : D[ke]);
      }
      var ke = arguments.length - 2;
      if (ke === 1) oe.children = re;
      else if (1 < ke) {
        pe = Array(ke);
        for (var it = 0; it < ke; it++) pe[it] = arguments[it + 2];
        oe.children = pe;
      }
      return {
        $$typeof: r,
        type: N.type,
        key: ue,
        ref: ce,
        props: oe,
        _owner: ye,
      };
    }),
    (ie.createContext = function (N) {
      return (
        (N = {
          $$typeof: f,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (N.Provider = { $$typeof: c, _context: N }),
        (N.Consumer = N)
      );
    }),
    (ie.createElement = fe),
    (ie.createFactory = function (N) {
      var D = fe.bind(null, N);
      return (D.type = N), D;
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (N) {
      return { $$typeof: g, render: N };
    }),
    (ie.isValidElement = Pe),
    (ie.lazy = function (N) {
      return { $$typeof: w, _payload: { _status: -1, _result: N }, _init: Je };
    }),
    (ie.memo = function (N, D) {
      return { $$typeof: y, type: N, compare: D === void 0 ? null : D };
    }),
    (ie.startTransition = function (N) {
      var D = H.transition;
      H.transition = {};
      try {
        N();
      } finally {
        H.transition = D;
      }
    }),
    (ie.unstable_act = q),
    (ie.useCallback = function (N, D) {
      return Ne.current.useCallback(N, D);
    }),
    (ie.useContext = function (N) {
      return Ne.current.useContext(N);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (N) {
      return Ne.current.useDeferredValue(N);
    }),
    (ie.useEffect = function (N, D) {
      return Ne.current.useEffect(N, D);
    }),
    (ie.useId = function () {
      return Ne.current.useId();
    }),
    (ie.useImperativeHandle = function (N, D, re) {
      return Ne.current.useImperativeHandle(N, D, re);
    }),
    (ie.useInsertionEffect = function (N, D) {
      return Ne.current.useInsertionEffect(N, D);
    }),
    (ie.useLayoutEffect = function (N, D) {
      return Ne.current.useLayoutEffect(N, D);
    }),
    (ie.useMemo = function (N, D) {
      return Ne.current.useMemo(N, D);
    }),
    (ie.useReducer = function (N, D, re) {
      return Ne.current.useReducer(N, D, re);
    }),
    (ie.useRef = function (N) {
      return Ne.current.useRef(N);
    }),
    (ie.useState = function (N) {
      return Ne.current.useState(N);
    }),
    (ie.useSyncExternalStore = function (N, D, re) {
      return Ne.current.useSyncExternalStore(N, D, re);
    }),
    (ie.useTransition = function () {
      return Ne.current.useTransition();
    }),
    (ie.version = "18.3.1"),
    ie
  );
}
var Bf;
function xu() {
  return Bf || ((Bf = 1), (Ll.exports = Eg())), Ll.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf;
function _g() {
  if (Hf) return Ci;
  Hf = 1;
  var r = xu(),
    n = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(g, m, y) {
    var w,
      _ = {},
      E = null,
      O = null;
    y !== void 0 && (E = "" + y),
      m.key !== void 0 && (E = "" + m.key),
      m.ref !== void 0 && (O = m.ref);
    for (w in m) o.call(m, w) && !c.hasOwnProperty(w) && (_[w] = m[w]);
    if (g && g.defaultProps)
      for (w in ((m = g.defaultProps), m)) _[w] === void 0 && (_[w] = m[w]);
    return {
      $$typeof: n,
      type: g,
      key: E,
      ref: O,
      props: _,
      _owner: l.current,
    };
  }
  return (Ci.Fragment = i), (Ci.jsx = f), (Ci.jsxs = f), Ci;
}
var $f;
function Cg() {
  return $f || (($f = 1), (Ol.exports = _g())), Ol.exports;
}
var h = Cg(),
  C = xu(),
  no = {},
  Dl = { exports: {} },
  tt = {},
  Ml = { exports: {} },
  Fl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf;
function Ng() {
  return (
    Vf ||
      ((Vf = 1),
      (function (r) {
        function n(H, Z) {
          var q = H.length;
          H.push(Z);
          e: for (; 0 < q; ) {
            var N = (q - 1) >>> 1,
              D = H[N];
            if (0 < l(D, Z)) (H[N] = Z), (H[q] = D), (q = N);
            else break e;
          }
        }
        function i(H) {
          return H.length === 0 ? null : H[0];
        }
        function o(H) {
          if (H.length === 0) return null;
          var Z = H[0],
            q = H.pop();
          if (q !== Z) {
            H[0] = q;
            e: for (var N = 0, D = H.length, re = D >>> 1; N < re; ) {
              var oe = 2 * (N + 1) - 1,
                ue = H[oe],
                ce = oe + 1,
                ye = H[ce];
              if (0 > l(ue, q))
                ce < D && 0 > l(ye, ue)
                  ? ((H[N] = ye), (H[ce] = q), (N = ce))
                  : ((H[N] = ue), (H[oe] = q), (N = oe));
              else if (ce < D && 0 > l(ye, q))
                (H[N] = ye), (H[ce] = q), (N = ce);
              else break e;
            }
          }
          return Z;
        }
        function l(H, Z) {
          var q = H.sortIndex - Z.sortIndex;
          return q !== 0 ? q : H.id - Z.id;
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
        var m = [],
          y = [],
          w = 1,
          _ = null,
          E = 3,
          O = !1,
          k = !1,
          R = !1,
          b = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          F = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function $(H) {
          for (var Z = i(y); Z !== null; ) {
            if (Z.callback === null) o(y);
            else if (Z.startTime <= H)
              o(y), (Z.sortIndex = Z.expirationTime), n(m, Z);
            else break;
            Z = i(y);
          }
        }
        function Q(H) {
          if (((R = !1), $(H), !k))
            if (i(m) !== null) (k = !0), Je(B);
            else {
              var Z = i(y);
              Z !== null && Ne(Q, Z.startTime - H);
            }
        }
        function B(H, Z) {
          (k = !1), R && ((R = !1), A(fe), (fe = -1)), (O = !0);
          var q = E;
          try {
            for (
              $(Z), _ = i(m);
              _ !== null && (!(_.expirationTime > Z) || (H && !Pt()));

            ) {
              var N = _.callback;
              if (typeof N == "function") {
                (_.callback = null), (E = _.priorityLevel);
                var D = N(_.expirationTime <= Z);
                (Z = r.unstable_now()),
                  typeof D == "function"
                    ? (_.callback = D)
                    : _ === i(m) && o(m),
                  $(Z);
              } else o(m);
              _ = i(m);
            }
            if (_ !== null) var re = !0;
            else {
              var oe = i(y);
              oe !== null && Ne(Q, oe.startTime - Z), (re = !1);
            }
            return re;
          } finally {
            (_ = null), (E = q), (O = !1);
          }
        }
        var se = !1,
          ae = null,
          fe = -1,
          he = 5,
          Pe = -1;
        function Pt() {
          return !(r.unstable_now() - Pe < he);
        }
        function jt() {
          if (ae !== null) {
            var H = r.unstable_now();
            Pe = H;
            var Z = !0;
            try {
              Z = ae(!0, H);
            } finally {
              Z ? rt() : ((se = !1), (ae = null));
            }
          } else se = !1;
        }
        var rt;
        if (typeof F == "function")
          rt = function () {
            F(jt);
          };
        else if (typeof MessageChannel < "u") {
          var gt = new MessageChannel(),
            At = gt.port2;
          (gt.port1.onmessage = jt),
            (rt = function () {
              At.postMessage(null);
            });
        } else
          rt = function () {
            b(jt, 0);
          };
        function Je(H) {
          (ae = H), se || ((se = !0), rt());
        }
        function Ne(H, Z) {
          fe = b(function () {
            H(r.unstable_now());
          }, Z);
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
            k || O || ((k = !0), Je(B));
          }),
          (r.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (he = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return i(m);
          }),
          (r.unstable_next = function (H) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = E;
            }
            var q = E;
            E = Z;
            try {
              return H();
            } finally {
              E = q;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (H, Z) {
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
            var q = E;
            E = H;
            try {
              return Z();
            } finally {
              E = q;
            }
          }),
          (r.unstable_scheduleCallback = function (H, Z, q) {
            var N = r.unstable_now();
            switch (
              (typeof q == "object" && q !== null
                ? ((q = q.delay),
                  (q = typeof q == "number" && 0 < q ? N + q : N))
                : (q = N),
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
              (D = q + D),
              (H = {
                id: w++,
                callback: Z,
                priorityLevel: H,
                startTime: q,
                expirationTime: D,
                sortIndex: -1,
              }),
              q > N
                ? ((H.sortIndex = q),
                  n(y, H),
                  i(m) === null &&
                    H === i(y) &&
                    (R ? (A(fe), (fe = -1)) : (R = !0), Ne(Q, q - N)))
                : ((H.sortIndex = D), n(m, H), k || O || ((k = !0), Je(B))),
              H
            );
          }),
          (r.unstable_shouldYield = Pt),
          (r.unstable_wrapCallback = function (H) {
            var Z = E;
            return function () {
              var q = E;
              E = Z;
              try {
                return H.apply(this, arguments);
              } finally {
                E = q;
              }
            };
          });
      })(Fl)),
    Fl
  );
}
var Wf;
function bg() {
  return Wf || ((Wf = 1), (Ml.exports = Ng())), Ml.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qf;
function Ig() {
  if (qf) return tt;
  qf = 1;
  var r = xu(),
    n = bg();
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
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    _ = {};
  function E(e) {
    return m.call(_, e)
      ? !0
      : m.call(w, e)
      ? !1
      : y.test(e)
      ? (_[e] = !0)
      : ((w[e] = !0), !1);
  }
  function O(e, t, s, a) {
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
    if (t === null || typeof t > "u" || O(e, t, s, a)) return !0;
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
  function R(e, t, s, a, u, d, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = a),
      (this.attributeNamespace = u),
      (this.mustUseProperty = s),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = p);
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      b[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      b[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      b[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      b[e] = new R(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        b[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      b[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      b[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      b[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      b[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var A = /[\-:]([a-z])/g;
  function F(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(A, F);
      b[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(A, F);
        b[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(A, F);
      b[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      b[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (b.xlinkHref = new R(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      b[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function $(e, t, s, a) {
    var u = b.hasOwnProperty(t) ? b[t] : null;
    (u !== null
      ? u.type !== 0
      : a ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (k(t, s, u, a) && (s = null),
      a || u === null
        ? E(t) &&
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
  var Q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    B = Symbol.for("react.element"),
    se = Symbol.for("react.portal"),
    ae = Symbol.for("react.fragment"),
    fe = Symbol.for("react.strict_mode"),
    he = Symbol.for("react.profiler"),
    Pe = Symbol.for("react.provider"),
    Pt = Symbol.for("react.context"),
    jt = Symbol.for("react.forward_ref"),
    rt = Symbol.for("react.suspense"),
    gt = Symbol.for("react.suspense_list"),
    At = Symbol.for("react.memo"),
    Je = Symbol.for("react.lazy"),
    Ne = Symbol.for("react.offscreen"),
    H = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (H && e[H]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var q = Object.assign,
    N;
  function D(e) {
    if (N === void 0)
      try {
        throw Error();
      } catch (s) {
        var t = s.stack.trim().match(/\n( *(at )?)/);
        N = (t && t[1]) || "";
      }
    return (
      `
` +
      N +
      e
    );
  }
  var re = !1;
  function oe(e, t) {
    if (!e || re) return "";
    re = !0;
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
          } catch (P) {
            var a = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            a = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          a = P;
        }
        e();
      }
    } catch (P) {
      if (P && a && typeof P.stack == "string") {
        for (
          var u = P.stack.split(`
`),
            d = a.stack.split(`
`),
            p = u.length - 1,
            v = d.length - 1;
          1 <= p && 0 <= v && u[p] !== d[v];

        )
          v--;
        for (; 1 <= p && 0 <= v; p--, v--)
          if (u[p] !== d[v]) {
            if (p !== 1 || v !== 1)
              do
                if ((p--, v--, 0 > v || u[p] !== d[v])) {
                  var x =
                    `
` + u[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", e.displayName)),
                    x
                  );
                }
              while (1 <= p && 0 <= v);
            break;
          }
      }
    } finally {
      (re = !1), (Error.prepareStackTrace = s);
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function ue(e) {
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
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ae:
        return "Fragment";
      case se:
        return "Portal";
      case he:
        return "Profiler";
      case fe:
        return "StrictMode";
      case rt:
        return "Suspense";
      case gt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Pt:
          return (e.displayName || "Context") + ".Consumer";
        case Pe:
          return (e._context.displayName || "Context") + ".Provider";
        case jt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case At:
          return (
            (t = e.displayName || null), t !== null ? t : ce(e.type) || "Memo"
          );
        case Je:
          (t = e._payload), (e = e._init);
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function ye(e) {
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
        return ce(t);
      case 8:
        return t === fe ? "StrictMode" : "Mode";
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
  function pe(e) {
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
  function ke(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function it(e) {
    var t = ke(e) ? "checked" : "value",
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
          set: function (p) {
            (a = "" + p), d.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (p) {
            a = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function qi(e) {
    e._valueTracker || (e._valueTracker = it(e));
  }
  function Wu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var s = t.getValue(),
      a = "";
    return (
      e && (a = ke(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== s ? (t.setValue(e), !0) : !1
    );
  }
  function Ki(e) {
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
  function Bo(e, t) {
    var s = t.checked;
    return q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: s ?? e._wrapperState.initialChecked,
    });
  }
  function qu(e, t) {
    var s = t.defaultValue == null ? "" : t.defaultValue,
      a = t.checked != null ? t.checked : t.defaultChecked;
    (s = pe(t.value != null ? t.value : s)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: s,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Ku(e, t) {
    (t = t.checked), t != null && $(e, "checked", t, !1);
  }
  function Ho(e, t) {
    Ku(e, t);
    var s = pe(t.value),
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
      ? $o(e, t.type, s)
      : t.hasOwnProperty("defaultValue") && $o(e, t.type, pe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Gu(e, t, s) {
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
  function $o(e, t, s) {
    (t !== "number" || Ki(e.ownerDocument) !== e) &&
      (s == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var zr = Array.isArray;
  function nr(e, t, s, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < s.length; u++) t["$" + s[u]] = !0;
      for (s = 0; s < e.length; s++)
        (u = t.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== u && (e[s].selected = u),
          u && a && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + pe(s), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === s) {
          (e[u].selected = !0), a && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ju(e, t) {
    var s = t.value;
    if (s == null) {
      if (((s = t.children), (t = t.defaultValue), s != null)) {
        if (t != null) throw Error(i(92));
        if (zr(s)) {
          if (1 < s.length) throw Error(i(93));
          s = s[0];
        }
        t = s;
      }
      t == null && (t = ""), (s = t);
    }
    e._wrapperState = { initialValue: pe(s) };
  }
  function Qu(e, t) {
    var s = pe(t.value),
      a = pe(t.defaultValue);
    s != null &&
      ((s = "" + s),
      s !== e.value && (e.value = s),
      t.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
      a != null && (e.defaultValue = "" + a);
  }
  function Yu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Xu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Wo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Xu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Gi,
    Zu = (function (e) {
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
          Gi = Gi || document.createElement("div"),
            Gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Gi.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Br(e, t) {
    if (t) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hr = {
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
    bm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Hr).forEach(function (e) {
    bm.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hr[t] = Hr[e]);
    });
  });
  function ec(e, t, s) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : s || typeof t != "number" || t === 0 || (Hr.hasOwnProperty(e) && Hr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function tc(e, t) {
    e = e.style;
    for (var s in t)
      if (t.hasOwnProperty(s)) {
        var a = s.indexOf("--") === 0,
          u = ec(s, t[s], a);
        s === "float" && (s = "cssFloat"), a ? e.setProperty(s, u) : (e[s] = u);
      }
  }
  var Im = q(
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
  function qo(e, t) {
    if (t) {
      if (Im[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Ko(e, t) {
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
  var Go = null;
  function Jo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Qo = null,
    rr = null,
    ir = null;
  function nc(e) {
    if ((e = ci(e))) {
      if (typeof Qo != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = ys(t)), Qo(e.stateNode, e.type, t));
    }
  }
  function rc(e) {
    rr ? (ir ? ir.push(e) : (ir = [e])) : (rr = e);
  }
  function ic() {
    if (rr) {
      var e = rr,
        t = ir;
      if (((ir = rr = null), nc(e), t)) for (e = 0; e < t.length; e++) nc(t[e]);
    }
  }
  function sc(e, t) {
    return e(t);
  }
  function oc() {}
  var Yo = !1;
  function ac(e, t, s) {
    if (Yo) return e(t, s);
    Yo = !0;
    try {
      return sc(e, t, s);
    } finally {
      (Yo = !1), (rr !== null || ir !== null) && (oc(), ic());
    }
  }
  function $r(e, t) {
    var s = e.stateNode;
    if (s === null) return null;
    var a = ys(s);
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
  var Xo = !1;
  if (g)
    try {
      var Vr = {};
      Object.defineProperty(Vr, "passive", {
        get: function () {
          Xo = !0;
        },
      }),
        window.addEventListener("test", Vr, Vr),
        window.removeEventListener("test", Vr, Vr);
    } catch {
      Xo = !1;
    }
  function Rm(e, t, s, a, u, d, p, v, x) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(s, P);
    } catch (M) {
      this.onError(M);
    }
  }
  var Wr = !1,
    Ji = null,
    Qi = !1,
    Zo = null,
    Tm = {
      onError: function (e) {
        (Wr = !0), (Ji = e);
      },
    };
  function Pm(e, t, s, a, u, d, p, v, x) {
    (Wr = !1), (Ji = null), Rm.apply(Tm, arguments);
  }
  function jm(e, t, s, a, u, d, p, v, x) {
    if ((Pm.apply(this, arguments), Wr)) {
      if (Wr) {
        var P = Ji;
        (Wr = !1), (Ji = null);
      } else throw Error(i(198));
      Qi || ((Qi = !0), (Zo = P));
    }
  }
  function Dn(e) {
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
  function lc(e) {
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
  function uc(e) {
    if (Dn(e) !== e) throw Error(i(188));
  }
  function Am(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Dn(e)), t === null)) throw Error(i(188));
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
          if (d === s) return uc(u), e;
          if (d === a) return uc(u), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== a.return) (s = u), (a = d);
      else {
        for (var p = !1, v = u.child; v; ) {
          if (v === s) {
            (p = !0), (s = u), (a = d);
            break;
          }
          if (v === a) {
            (p = !0), (a = u), (s = d);
            break;
          }
          v = v.sibling;
        }
        if (!p) {
          for (v = d.child; v; ) {
            if (v === s) {
              (p = !0), (s = d), (a = u);
              break;
            }
            if (v === a) {
              (p = !0), (a = d), (s = u);
              break;
            }
            v = v.sibling;
          }
          if (!p) throw Error(i(189));
        }
      }
      if (s.alternate !== a) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? e : t;
  }
  function cc(e) {
    return (e = Am(e)), e !== null ? dc(e) : null;
  }
  function dc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = dc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var fc = n.unstable_scheduleCallback,
    hc = n.unstable_cancelCallback,
    Om = n.unstable_shouldYield,
    Lm = n.unstable_requestPaint,
    Re = n.unstable_now,
    Dm = n.unstable_getCurrentPriorityLevel,
    ea = n.unstable_ImmediatePriority,
    pc = n.unstable_UserBlockingPriority,
    Yi = n.unstable_NormalPriority,
    Mm = n.unstable_LowPriority,
    mc = n.unstable_IdlePriority,
    Xi = null,
    Ot = null;
  function Fm(e) {
    if (Ot && typeof Ot.onCommitFiberRoot == "function")
      try {
        Ot.onCommitFiberRoot(Xi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : Bm,
    Um = Math.log,
    zm = Math.LN2;
  function Bm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Um(e) / zm) | 0)) | 0;
  }
  var Zi = 64,
    es = 4194304;
  function qr(e) {
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
  function ts(e, t) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      d = e.pingedLanes,
      p = s & 268435455;
    if (p !== 0) {
      var v = p & ~u;
      v !== 0 ? (a = qr(v)) : ((d &= p), d !== 0 && (a = qr(d)));
    } else (p = s & ~u), p !== 0 ? (a = qr(p)) : d !== 0 && (a = qr(d));
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
        (s = 31 - yt(t)), (u = 1 << s), (a |= e[s]), (t &= ~u);
    return a;
  }
  function Hm(e, t) {
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
  function $m(e, t) {
    for (
      var s = e.suspendedLanes,
        a = e.pingedLanes,
        u = e.expirationTimes,
        d = e.pendingLanes;
      0 < d;

    ) {
      var p = 31 - yt(d),
        v = 1 << p,
        x = u[p];
      x === -1
        ? (!(v & s) || v & a) && (u[p] = Hm(v, t))
        : x <= t && (e.expiredLanes |= v),
        (d &= ~v);
    }
  }
  function ta(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function gc() {
    var e = Zi;
    return (Zi <<= 1), !(Zi & 4194240) && (Zi = 64), e;
  }
  function na(e) {
    for (var t = [], s = 0; 31 > s; s++) t.push(e);
    return t;
  }
  function Kr(e, t, s) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - yt(t)),
      (e[t] = s);
  }
  function Vm(e, t) {
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
      var u = 31 - yt(s),
        d = 1 << u;
      (t[u] = 0), (a[u] = -1), (e[u] = -1), (s &= ~d);
    }
  }
  function ra(e, t) {
    var s = (e.entangledLanes |= t);
    for (e = e.entanglements; s; ) {
      var a = 31 - yt(s),
        u = 1 << a;
      (u & t) | (e[a] & t) && (e[a] |= t), (s &= ~u);
    }
  }
  var me = 0;
  function yc(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var vc,
    ia,
    wc,
    xc,
    kc,
    sa = !1,
    ns = [],
    cn = null,
    dn = null,
    fn = null,
    Gr = new Map(),
    Jr = new Map(),
    hn = [],
    Wm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Sc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        cn = null;
        break;
      case "dragenter":
      case "dragleave":
        dn = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        Gr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jr.delete(t.pointerId);
    }
  }
  function Qr(e, t, s, a, u, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: s,
          eventSystemFlags: a,
          nativeEvent: d,
          targetContainers: [u],
        }),
        t !== null && ((t = ci(t)), t !== null && ia(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function qm(e, t, s, a, u) {
    switch (t) {
      case "focusin":
        return (cn = Qr(cn, e, t, s, a, u)), !0;
      case "dragenter":
        return (dn = Qr(dn, e, t, s, a, u)), !0;
      case "mouseover":
        return (fn = Qr(fn, e, t, s, a, u)), !0;
      case "pointerover":
        var d = u.pointerId;
        return Gr.set(d, Qr(Gr.get(d) || null, e, t, s, a, u)), !0;
      case "gotpointercapture":
        return (
          (d = u.pointerId), Jr.set(d, Qr(Jr.get(d) || null, e, t, s, a, u)), !0
        );
    }
    return !1;
  }
  function Ec(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var s = Dn(t);
      if (s !== null) {
        if (((t = s.tag), t === 13)) {
          if (((t = lc(s)), t !== null)) {
            (e.blockedOn = t),
              kc(e.priority, function () {
                wc(s);
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
  function rs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var s = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var a = new s.constructor(s.type, s);
        (Go = a), s.target.dispatchEvent(a), (Go = null);
      } else return (t = ci(s)), t !== null && ia(t), (e.blockedOn = s), !1;
      t.shift();
    }
    return !0;
  }
  function _c(e, t, s) {
    rs(e) && s.delete(t);
  }
  function Km() {
    (sa = !1),
      cn !== null && rs(cn) && (cn = null),
      dn !== null && rs(dn) && (dn = null),
      fn !== null && rs(fn) && (fn = null),
      Gr.forEach(_c),
      Jr.forEach(_c);
  }
  function Yr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      sa ||
        ((sa = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Km)));
  }
  function Xr(e) {
    function t(u) {
      return Yr(u, e);
    }
    if (0 < ns.length) {
      Yr(ns[0], e);
      for (var s = 1; s < ns.length; s++) {
        var a = ns[s];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      cn !== null && Yr(cn, e),
        dn !== null && Yr(dn, e),
        fn !== null && Yr(fn, e),
        Gr.forEach(t),
        Jr.forEach(t),
        s = 0;
      s < hn.length;
      s++
    )
      (a = hn[s]), a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < hn.length && ((s = hn[0]), s.blockedOn === null); )
      Ec(s), s.blockedOn === null && hn.shift();
  }
  var sr = Q.ReactCurrentBatchConfig,
    is = !0;
  function Gm(e, t, s, a) {
    var u = me,
      d = sr.transition;
    sr.transition = null;
    try {
      (me = 1), oa(e, t, s, a);
    } finally {
      (me = u), (sr.transition = d);
    }
  }
  function Jm(e, t, s, a) {
    var u = me,
      d = sr.transition;
    sr.transition = null;
    try {
      (me = 4), oa(e, t, s, a);
    } finally {
      (me = u), (sr.transition = d);
    }
  }
  function oa(e, t, s, a) {
    if (is) {
      var u = aa(e, t, s, a);
      if (u === null) _a(e, t, a, ss, s), Sc(e, a);
      else if (qm(u, e, t, s, a)) a.stopPropagation();
      else if ((Sc(e, a), t & 4 && -1 < Wm.indexOf(e))) {
        for (; u !== null; ) {
          var d = ci(u);
          if (
            (d !== null && vc(d),
            (d = aa(e, t, s, a)),
            d === null && _a(e, t, a, ss, s),
            d === u)
          )
            break;
          u = d;
        }
        u !== null && a.stopPropagation();
      } else _a(e, t, a, null, s);
    }
  }
  var ss = null;
  function aa(e, t, s, a) {
    if (((ss = null), (e = Jo(a)), (e = Mn(e)), e !== null))
      if (((t = Dn(e)), t === null)) e = null;
      else if (((s = t.tag), s === 13)) {
        if (((e = lc(t)), e !== null)) return e;
        e = null;
      } else if (s === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ss = e), null;
  }
  function Cc(e) {
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
        switch (Dm()) {
          case ea:
            return 1;
          case pc:
            return 4;
          case Yi:
          case Mm:
            return 16;
          case mc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null,
    la = null,
    os = null;
  function Nc() {
    if (os) return os;
    var e,
      t = la,
      s = t.length,
      a,
      u = "value" in pn ? pn.value : pn.textContent,
      d = u.length;
    for (e = 0; e < s && t[e] === u[e]; e++);
    var p = s - e;
    for (a = 1; a <= p && t[s - a] === u[d - a]; a++);
    return (os = u.slice(e, 1 < a ? 1 - a : void 0));
  }
  function as(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ls() {
    return !0;
  }
  function bc() {
    return !1;
  }
  function st(e) {
    function t(s, a, u, d, p) {
      (this._reactName = s),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = d),
        (this.target = p),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((s = e[v]), (this[v] = s ? s(d) : d[v]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? ls
          : bc),
        (this.isPropagationStopped = bc),
        this
      );
    }
    return (
      q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = ls));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = ls));
        },
        persist: function () {},
        isPersistent: ls,
      }),
      t
    );
  }
  var or = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ua = st(or),
    Zr = q({}, or, { view: 0, detail: 0 }),
    Qm = st(Zr),
    ca,
    da,
    ei,
    us = q({}, Zr, {
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
      getModifierState: ha,
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
          : (e !== ei &&
              (ei && e.type === "mousemove"
                ? ((ca = e.screenX - ei.screenX), (da = e.screenY - ei.screenY))
                : (da = ca = 0),
              (ei = e)),
            ca);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : da;
      },
    }),
    Ic = st(us),
    Ym = q({}, us, { dataTransfer: 0 }),
    Xm = st(Ym),
    Zm = q({}, Zr, { relatedTarget: 0 }),
    fa = st(Zm),
    e0 = q({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    t0 = st(e0),
    n0 = q({}, or, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    r0 = st(n0),
    i0 = q({}, or, { data: 0 }),
    Rc = st(i0),
    s0 = {
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
    o0 = {
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
    a0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function l0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = a0[e])
      ? !!t[e]
      : !1;
  }
  function ha() {
    return l0;
  }
  var u0 = q({}, Zr, {
      key: function (e) {
        if (e.key) {
          var t = s0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = as(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? o0[e.keyCode] || "Unidentified"
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
      getModifierState: ha,
      charCode: function (e) {
        return e.type === "keypress" ? as(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? as(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    c0 = st(u0),
    d0 = q({}, us, {
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
    Tc = st(d0),
    f0 = q({}, Zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ha,
    }),
    h0 = st(f0),
    p0 = q({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    m0 = st(p0),
    g0 = q({}, us, {
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
    y0 = st(g0),
    v0 = [9, 13, 27, 32],
    pa = g && "CompositionEvent" in window,
    ti = null;
  g && "documentMode" in document && (ti = document.documentMode);
  var w0 = g && "TextEvent" in window && !ti,
    Pc = g && (!pa || (ti && 8 < ti && 11 >= ti)),
    jc = " ",
    Ac = !1;
  function Oc(e, t) {
    switch (e) {
      case "keyup":
        return v0.indexOf(t.keyCode) !== -1;
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
  function Lc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ar = !1;
  function x0(e, t) {
    switch (e) {
      case "compositionend":
        return Lc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ac = !0), jc);
      case "textInput":
        return (e = t.data), e === jc && Ac ? null : e;
      default:
        return null;
    }
  }
  function k0(e, t) {
    if (ar)
      return e === "compositionend" || (!pa && Oc(e, t))
        ? ((e = Nc()), (os = la = pn = null), (ar = !1), e)
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
        return Pc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var S0 = {
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
  function Dc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!S0[e.type] : t === "textarea";
  }
  function Mc(e, t, s, a) {
    rc(a),
      (t = ps(t, "onChange")),
      0 < t.length &&
        ((s = new ua("onChange", "change", null, s, a)),
        e.push({ event: s, listeners: t }));
  }
  var ni = null,
    ri = null;
  function E0(e) {
    td(e, 0);
  }
  function cs(e) {
    var t = fr(e);
    if (Wu(t)) return e;
  }
  function _0(e, t) {
    if (e === "change") return t;
  }
  var Fc = !1;
  if (g) {
    var ma;
    if (g) {
      var ga = "oninput" in document;
      if (!ga) {
        var Uc = document.createElement("div");
        Uc.setAttribute("oninput", "return;"),
          (ga = typeof Uc.oninput == "function");
      }
      ma = ga;
    } else ma = !1;
    Fc = ma && (!document.documentMode || 9 < document.documentMode);
  }
  function zc() {
    ni && (ni.detachEvent("onpropertychange", Bc), (ri = ni = null));
  }
  function Bc(e) {
    if (e.propertyName === "value" && cs(ri)) {
      var t = [];
      Mc(t, ri, e, Jo(e)), ac(E0, t);
    }
  }
  function C0(e, t, s) {
    e === "focusin"
      ? (zc(), (ni = t), (ri = s), ni.attachEvent("onpropertychange", Bc))
      : e === "focusout" && zc();
  }
  function N0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return cs(ri);
  }
  function b0(e, t) {
    if (e === "click") return cs(t);
  }
  function I0(e, t) {
    if (e === "input" || e === "change") return cs(t);
  }
  function R0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var vt = typeof Object.is == "function" ? Object.is : R0;
  function ii(e, t) {
    if (vt(e, t)) return !0;
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
      if (!m.call(t, u) || !vt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Hc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $c(e, t) {
    var s = Hc(e);
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
      s = Hc(s);
    }
  }
  function Vc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Vc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Wc() {
    for (var e = window, t = Ki(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof t.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = t.contentWindow;
      else break;
      t = Ki(e.document);
    }
    return t;
  }
  function ya(e) {
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
  function T0(e) {
    var t = Wc(),
      s = e.focusedElem,
      a = e.selectionRange;
    if (
      t !== s &&
      s &&
      s.ownerDocument &&
      Vc(s.ownerDocument.documentElement, s)
    ) {
      if (a !== null && ya(s)) {
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
            (u = $c(s, d));
          var p = $c(s, a);
          u &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            d > a
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
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
  var P0 = g && "documentMode" in document && 11 >= document.documentMode,
    lr = null,
    va = null,
    si = null,
    wa = !1;
  function qc(e, t, s) {
    var a =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    wa ||
      lr == null ||
      lr !== Ki(a) ||
      ((a = lr),
      "selectionStart" in a && ya(a)
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
      (si && ii(si, a)) ||
        ((si = a),
        (a = ps(va, "onSelect")),
        0 < a.length &&
          ((t = new ua("onSelect", "select", null, t, s)),
          e.push({ event: t, listeners: a }),
          (t.target = lr))));
  }
  function ds(e, t) {
    var s = {};
    return (
      (s[e.toLowerCase()] = t.toLowerCase()),
      (s["Webkit" + e] = "webkit" + t),
      (s["Moz" + e] = "moz" + t),
      s
    );
  }
  var ur = {
      animationend: ds("Animation", "AnimationEnd"),
      animationiteration: ds("Animation", "AnimationIteration"),
      animationstart: ds("Animation", "AnimationStart"),
      transitionend: ds("Transition", "TransitionEnd"),
    },
    xa = {},
    Kc = {};
  g &&
    ((Kc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ur.animationend.animation,
      delete ur.animationiteration.animation,
      delete ur.animationstart.animation),
    "TransitionEvent" in window || delete ur.transitionend.transition);
  function fs(e) {
    if (xa[e]) return xa[e];
    if (!ur[e]) return e;
    var t = ur[e],
      s;
    for (s in t) if (t.hasOwnProperty(s) && s in Kc) return (xa[e] = t[s]);
    return e;
  }
  var Gc = fs("animationend"),
    Jc = fs("animationiteration"),
    Qc = fs("animationstart"),
    Yc = fs("transitionend"),
    Xc = new Map(),
    Zc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function mn(e, t) {
    Xc.set(e, t), c(t, [e]);
  }
  for (var ka = 0; ka < Zc.length; ka++) {
    var Sa = Zc[ka],
      j0 = Sa.toLowerCase(),
      A0 = Sa[0].toUpperCase() + Sa.slice(1);
    mn(j0, "on" + A0);
  }
  mn(Gc, "onAnimationEnd"),
    mn(Jc, "onAnimationIteration"),
    mn(Qc, "onAnimationStart"),
    mn("dblclick", "onDoubleClick"),
    mn("focusin", "onFocus"),
    mn("focusout", "onBlur"),
    mn(Yc, "onTransitionEnd"),
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
  var oi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    O0 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(oi)
    );
  function ed(e, t, s) {
    var a = e.type || "unknown-event";
    (e.currentTarget = s), jm(a, t, void 0, e), (e.currentTarget = null);
  }
  function td(e, t) {
    t = (t & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var a = e[s],
        u = a.event;
      a = a.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var p = a.length - 1; 0 <= p; p--) {
            var v = a[p],
              x = v.instance,
              P = v.currentTarget;
            if (((v = v.listener), x !== d && u.isPropagationStopped()))
              break e;
            ed(u, v, P), (d = x);
          }
        else
          for (p = 0; p < a.length; p++) {
            if (
              ((v = a[p]),
              (x = v.instance),
              (P = v.currentTarget),
              (v = v.listener),
              x !== d && u.isPropagationStopped())
            )
              break e;
            ed(u, v, P), (d = x);
          }
      }
    }
    if (Qi) throw ((e = Zo), (Qi = !1), (Zo = null), e);
  }
  function we(e, t) {
    var s = t[Ta];
    s === void 0 && (s = t[Ta] = new Set());
    var a = e + "__bubble";
    s.has(a) || (nd(t, e, 2, !1), s.add(a));
  }
  function Ea(e, t, s) {
    var a = 0;
    t && (a |= 4), nd(s, e, a, t);
  }
  var hs = "_reactListening" + Math.random().toString(36).slice(2);
  function ai(e) {
    if (!e[hs]) {
      (e[hs] = !0),
        o.forEach(function (s) {
          s !== "selectionchange" && (O0.has(s) || Ea(s, !1, e), Ea(s, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hs] || ((t[hs] = !0), Ea("selectionchange", !1, t));
    }
  }
  function nd(e, t, s, a) {
    switch (Cc(t)) {
      case 1:
        var u = Gm;
        break;
      case 4:
        u = Jm;
        break;
      default:
        u = oa;
    }
    (s = u.bind(null, t, s, e)),
      (u = void 0),
      !Xo ||
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
  function _a(e, t, s, a, u) {
    var d = a;
    if (!(t & 1) && !(t & 2) && a !== null)
      e: for (;;) {
        if (a === null) return;
        var p = a.tag;
        if (p === 3 || p === 4) {
          var v = a.stateNode.containerInfo;
          if (v === u || (v.nodeType === 8 && v.parentNode === u)) break;
          if (p === 4)
            for (p = a.return; p !== null; ) {
              var x = p.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = p.stateNode.containerInfo),
                x === u || (x.nodeType === 8 && x.parentNode === u))
              )
                return;
              p = p.return;
            }
          for (; v !== null; ) {
            if (((p = Mn(v)), p === null)) return;
            if (((x = p.tag), x === 5 || x === 6)) {
              a = d = p;
              continue e;
            }
            v = v.parentNode;
          }
        }
        a = a.return;
      }
    ac(function () {
      var P = d,
        M = Jo(s),
        U = [];
      e: {
        var L = Xc.get(e);
        if (L !== void 0) {
          var V = ua,
            K = e;
          switch (e) {
            case "keypress":
              if (as(s) === 0) break e;
            case "keydown":
            case "keyup":
              V = c0;
              break;
            case "focusin":
              (K = "focus"), (V = fa);
              break;
            case "focusout":
              (K = "blur"), (V = fa);
              break;
            case "beforeblur":
            case "afterblur":
              V = fa;
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
              V = Ic;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Xm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = h0;
              break;
            case Gc:
            case Jc:
            case Qc:
              V = t0;
              break;
            case Yc:
              V = m0;
              break;
            case "scroll":
              V = Qm;
              break;
            case "wheel":
              V = y0;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = r0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Tc;
          }
          var G = (t & 4) !== 0,
            Te = !G && e === "scroll",
            I = G ? (L !== null ? L + "Capture" : null) : L;
          G = [];
          for (var S = P, T; S !== null; ) {
            T = S;
            var z = T.stateNode;
            if (
              (T.tag === 5 &&
                z !== null &&
                ((T = z),
                I !== null &&
                  ((z = $r(S, I)), z != null && G.push(li(S, z, T)))),
              Te)
            )
              break;
            S = S.return;
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
              s !== Go &&
              (K = s.relatedTarget || s.fromElement) &&
              (Mn(K) || K[Wt]))
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
                (V = P),
                (K = K ? Mn(K) : null),
                K !== null &&
                  ((Te = Dn(K)), K !== Te || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((V = null), (K = P)),
            V !== K)
          ) {
            if (
              ((G = Ic),
              (z = "onMouseLeave"),
              (I = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((G = Tc),
                (z = "onPointerLeave"),
                (I = "onPointerEnter"),
                (S = "pointer")),
              (Te = V == null ? L : fr(V)),
              (T = K == null ? L : fr(K)),
              (L = new G(z, S + "leave", V, s, M)),
              (L.target = Te),
              (L.relatedTarget = T),
              (z = null),
              Mn(M) === P &&
                ((G = new G(I, S + "enter", K, s, M)),
                (G.target = T),
                (G.relatedTarget = Te),
                (z = G)),
              (Te = z),
              V && K)
            )
              t: {
                for (G = V, I = K, S = 0, T = G; T; T = cr(T)) S++;
                for (T = 0, z = I; z; z = cr(z)) T++;
                for (; 0 < S - T; ) (G = cr(G)), S--;
                for (; 0 < T - S; ) (I = cr(I)), T--;
                for (; S--; ) {
                  if (G === I || (I !== null && G === I.alternate)) break t;
                  (G = cr(G)), (I = cr(I));
                }
                G = null;
              }
            else G = null;
            V !== null && rd(U, L, V, G, !1),
              K !== null && Te !== null && rd(U, Te, K, G, !0);
          }
        }
        e: {
          if (
            ((L = P ? fr(P) : window),
            (V = L.nodeName && L.nodeName.toLowerCase()),
            V === "select" || (V === "input" && L.type === "file"))
          )
            var J = _0;
          else if (Dc(L))
            if (Fc) J = I0;
            else {
              J = N0;
              var Y = C0;
            }
          else
            (V = L.nodeName) &&
              V.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (J = b0);
          if (J && (J = J(e, P))) {
            Mc(U, J, s, M);
            break e;
          }
          Y && Y(e, L, P),
            e === "focusout" &&
              (Y = L._wrapperState) &&
              Y.controlled &&
              L.type === "number" &&
              $o(L, "number", L.value);
        }
        switch (((Y = P ? fr(P) : window), e)) {
          case "focusin":
            (Dc(Y) || Y.contentEditable === "true") &&
              ((lr = Y), (va = P), (si = null));
            break;
          case "focusout":
            si = va = lr = null;
            break;
          case "mousedown":
            wa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (wa = !1), qc(U, s, M);
            break;
          case "selectionchange":
            if (P0) break;
          case "keydown":
          case "keyup":
            qc(U, s, M);
        }
        var X;
        if (pa)
          e: {
            switch (e) {
              case "compositionstart":
                var te = "onCompositionStart";
                break e;
              case "compositionend":
                te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                te = "onCompositionUpdate";
                break e;
            }
            te = void 0;
          }
        else
          ar
            ? Oc(e, s) && (te = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (te = "onCompositionStart");
        te &&
          (Pc &&
            s.locale !== "ko" &&
            (ar || te !== "onCompositionStart"
              ? te === "onCompositionEnd" && ar && (X = Nc())
              : ((pn = M),
                (la = "value" in pn ? pn.value : pn.textContent),
                (ar = !0))),
          (Y = ps(P, te)),
          0 < Y.length &&
            ((te = new Rc(te, e, null, s, M)),
            U.push({ event: te, listeners: Y }),
            X ? (te.data = X) : ((X = Lc(s)), X !== null && (te.data = X)))),
          (X = w0 ? x0(e, s) : k0(e, s)) &&
            ((P = ps(P, "onBeforeInput")),
            0 < P.length &&
              ((M = new Rc("onBeforeInput", "beforeinput", null, s, M)),
              U.push({ event: M, listeners: P }),
              (M.data = X)));
      }
      td(U, t);
    });
  }
  function li(e, t, s) {
    return { instance: e, listener: t, currentTarget: s };
  }
  function ps(e, t) {
    for (var s = t + "Capture", a = []; e !== null; ) {
      var u = e,
        d = u.stateNode;
      u.tag === 5 &&
        d !== null &&
        ((u = d),
        (d = $r(e, s)),
        d != null && a.unshift(li(e, d, u)),
        (d = $r(e, t)),
        d != null && a.push(li(e, d, u))),
        (e = e.return);
    }
    return a;
  }
  function cr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function rd(e, t, s, a, u) {
    for (var d = t._reactName, p = []; s !== null && s !== a; ) {
      var v = s,
        x = v.alternate,
        P = v.stateNode;
      if (x !== null && x === a) break;
      v.tag === 5 &&
        P !== null &&
        ((v = P),
        u
          ? ((x = $r(s, d)), x != null && p.unshift(li(s, x, v)))
          : u || ((x = $r(s, d)), x != null && p.push(li(s, x, v)))),
        (s = s.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var L0 = /\r\n?/g,
    D0 = /\u0000|\uFFFD/g;
  function id(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        L0,
        `
`
      )
      .replace(D0, "");
  }
  function ms(e, t, s) {
    if (((t = id(t)), id(e) !== t && s)) throw Error(i(425));
  }
  function gs() {}
  var Ca = null,
    Na = null;
  function ba(e, t) {
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
  var Ia = typeof setTimeout == "function" ? setTimeout : void 0,
    M0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    sd = typeof Promise == "function" ? Promise : void 0,
    F0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof sd < "u"
        ? function (e) {
            return sd.resolve(null).then(e).catch(U0);
          }
        : Ia;
  function U0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ra(e, t) {
    var s = t,
      a = 0;
    do {
      var u = s.nextSibling;
      if ((e.removeChild(s), u && u.nodeType === 8))
        if (((s = u.data), s === "/$")) {
          if (a === 0) {
            e.removeChild(u), Xr(t);
            return;
          }
          a--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || a++;
      s = u;
    } while (s);
    Xr(t);
  }
  function gn(e) {
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
  function od(e) {
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
  var dr = Math.random().toString(36).slice(2),
    Lt = "__reactFiber$" + dr,
    ui = "__reactProps$" + dr,
    Wt = "__reactContainer$" + dr,
    Ta = "__reactEvents$" + dr,
    z0 = "__reactListeners$" + dr,
    B0 = "__reactHandles$" + dr;
  function Mn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var s = e.parentNode; s; ) {
      if ((t = s[Wt] || s[Lt])) {
        if (
          ((s = t.alternate),
          t.child !== null || (s !== null && s.child !== null))
        )
          for (e = od(e); e !== null; ) {
            if ((s = e[Lt])) return s;
            e = od(e);
          }
        return t;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function ci(e) {
    return (
      (e = e[Lt] || e[Wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ys(e) {
    return e[ui] || null;
  }
  var Pa = [],
    hr = -1;
  function yn(e) {
    return { current: e };
  }
  function xe(e) {
    0 > hr || ((e.current = Pa[hr]), (Pa[hr] = null), hr--);
  }
  function ve(e, t) {
    hr++, (Pa[hr] = e.current), (e.current = t);
  }
  var vn = {},
    Be = yn(vn),
    Qe = yn(!1),
    Fn = vn;
  function pr(e, t) {
    var s = e.type.contextTypes;
    if (!s) return vn;
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
  function Ye(e) {
    return (e = e.childContextTypes), e != null;
  }
  function vs() {
    xe(Qe), xe(Be);
  }
  function ad(e, t, s) {
    if (Be.current !== vn) throw Error(i(168));
    ve(Be, t), ve(Qe, s);
  }
  function ld(e, t, s) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), typeof a.getChildContext != "function"))
      return s;
    a = a.getChildContext();
    for (var u in a) if (!(u in t)) throw Error(i(108, ye(e) || "Unknown", u));
    return q({}, s, a);
  }
  function ws(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        vn),
      (Fn = Be.current),
      ve(Be, e),
      ve(Qe, Qe.current),
      !0
    );
  }
  function ud(e, t, s) {
    var a = e.stateNode;
    if (!a) throw Error(i(169));
    s
      ? ((e = ld(e, t, Fn)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        xe(Qe),
        xe(Be),
        ve(Be, e))
      : xe(Qe),
      ve(Qe, s);
  }
  var qt = null,
    xs = !1,
    ja = !1;
  function cd(e) {
    qt === null ? (qt = [e]) : qt.push(e);
  }
  function H0(e) {
    (xs = !0), cd(e);
  }
  function wn() {
    if (!ja && qt !== null) {
      ja = !0;
      var e = 0,
        t = me;
      try {
        var s = qt;
        for (me = 1; e < s.length; e++) {
          var a = s[e];
          do a = a(!0);
          while (a !== null);
        }
        (qt = null), (xs = !1);
      } catch (u) {
        throw (qt !== null && (qt = qt.slice(e + 1)), fc(ea, wn), u);
      } finally {
        (me = t), (ja = !1);
      }
    }
    return null;
  }
  var mr = [],
    gr = 0,
    ks = null,
    Ss = 0,
    ct = [],
    dt = 0,
    Un = null,
    Kt = 1,
    Gt = "";
  function zn(e, t) {
    (mr[gr++] = Ss), (mr[gr++] = ks), (ks = e), (Ss = t);
  }
  function dd(e, t, s) {
    (ct[dt++] = Kt), (ct[dt++] = Gt), (ct[dt++] = Un), (Un = e);
    var a = Kt;
    e = Gt;
    var u = 32 - yt(a) - 1;
    (a &= ~(1 << u)), (s += 1);
    var d = 32 - yt(t) + u;
    if (30 < d) {
      var p = u - (u % 5);
      (d = (a & ((1 << p) - 1)).toString(32)),
        (a >>= p),
        (u -= p),
        (Kt = (1 << (32 - yt(t) + u)) | (s << u) | a),
        (Gt = d + e);
    } else (Kt = (1 << d) | (s << u) | a), (Gt = e);
  }
  function Aa(e) {
    e.return !== null && (zn(e, 1), dd(e, 1, 0));
  }
  function Oa(e) {
    for (; e === ks; )
      (ks = mr[--gr]), (mr[gr] = null), (Ss = mr[--gr]), (mr[gr] = null);
    for (; e === Un; )
      (Un = ct[--dt]),
        (ct[dt] = null),
        (Gt = ct[--dt]),
        (ct[dt] = null),
        (Kt = ct[--dt]),
        (ct[dt] = null);
  }
  var ot = null,
    at = null,
    Se = !1,
    wt = null;
  function fd(e, t) {
    var s = mt(5, null, null, 0);
    (s.elementType = "DELETED"),
      (s.stateNode = t),
      (s.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [s]), (e.flags |= 16)) : t.push(s);
  }
  function hd(e, t) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return (
          (t =
            t.nodeType !== 1 || s.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ot = e), (at = gn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ot = e), (at = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((s = Un !== null ? { id: Kt, overflow: Gt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: s,
                retryLane: 1073741824,
              }),
              (s = mt(18, null, null, 0)),
              (s.stateNode = t),
              (s.return = e),
              (e.child = s),
              (ot = e),
              (at = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function La(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Da(e) {
    if (Se) {
      var t = at;
      if (t) {
        var s = t;
        if (!hd(e, t)) {
          if (La(e)) throw Error(i(418));
          t = gn(s.nextSibling);
          var a = ot;
          t && hd(e, t)
            ? fd(a, s)
            : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (ot = e));
        }
      } else {
        if (La(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (Se = !1), (ot = e);
      }
    }
  }
  function pd(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ot = e;
  }
  function Es(e) {
    if (e !== ot) return !1;
    if (!Se) return pd(e), (Se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ba(e.type, e.memoizedProps))),
      t && (t = at))
    ) {
      if (La(e)) throw (md(), Error(i(418)));
      for (; t; ) fd(e, t), (t = gn(t.nextSibling));
    }
    if ((pd(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (t === 0) {
                at = gn(e.nextSibling);
                break e;
              }
              t--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        at = null;
      }
    } else at = ot ? gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function md() {
    for (var e = at; e; ) e = gn(e.nextSibling);
  }
  function yr() {
    (at = ot = null), (Se = !1);
  }
  function Ma(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  var $0 = Q.ReactCurrentBatchConfig;
  function di(e, t, s) {
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
          : ((t = function (p) {
              var v = u.refs;
              p === null ? delete v[d] : (v[d] = p);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!s._owner) throw Error(i(290, e));
    }
    return e;
  }
  function _s(e, t) {
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
  function gd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function yd(e) {
    function t(I, S) {
      if (e) {
        var T = I.deletions;
        T === null ? ((I.deletions = [S]), (I.flags |= 16)) : T.push(S);
      }
    }
    function s(I, S) {
      if (!e) return null;
      for (; S !== null; ) t(I, S), (S = S.sibling);
      return null;
    }
    function a(I, S) {
      for (I = new Map(); S !== null; )
        S.key !== null ? I.set(S.key, S) : I.set(S.index, S), (S = S.sibling);
      return I;
    }
    function u(I, S) {
      return (I = bn(I, S)), (I.index = 0), (I.sibling = null), I;
    }
    function d(I, S, T) {
      return (
        (I.index = T),
        e
          ? ((T = I.alternate),
            T !== null
              ? ((T = T.index), T < S ? ((I.flags |= 2), S) : T)
              : ((I.flags |= 2), S))
          : ((I.flags |= 1048576), S)
      );
    }
    function p(I) {
      return e && I.alternate === null && (I.flags |= 2), I;
    }
    function v(I, S, T, z) {
      return S === null || S.tag !== 6
        ? ((S = Il(T, I.mode, z)), (S.return = I), S)
        : ((S = u(S, T)), (S.return = I), S);
    }
    function x(I, S, T, z) {
      var J = T.type;
      return J === ae
        ? M(I, S, T.props.children, z, T.key)
        : S !== null &&
          (S.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === Je &&
              gd(J) === S.type))
        ? ((z = u(S, T.props)), (z.ref = di(I, S, T)), (z.return = I), z)
        : ((z = Gs(T.type, T.key, T.props, null, I.mode, z)),
          (z.ref = di(I, S, T)),
          (z.return = I),
          z);
    }
    function P(I, S, T, z) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== T.containerInfo ||
        S.stateNode.implementation !== T.implementation
        ? ((S = Rl(T, I.mode, z)), (S.return = I), S)
        : ((S = u(S, T.children || [])), (S.return = I), S);
    }
    function M(I, S, T, z, J) {
      return S === null || S.tag !== 7
        ? ((S = Gn(T, I.mode, z, J)), (S.return = I), S)
        : ((S = u(S, T)), (S.return = I), S);
    }
    function U(I, S, T) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = Il("" + S, I.mode, T)), (S.return = I), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case B:
            return (
              (T = Gs(S.type, S.key, S.props, null, I.mode, T)),
              (T.ref = di(I, null, S)),
              (T.return = I),
              T
            );
          case se:
            return (S = Rl(S, I.mode, T)), (S.return = I), S;
          case Je:
            var z = S._init;
            return U(I, z(S._payload), T);
        }
        if (zr(S) || Z(S))
          return (S = Gn(S, I.mode, T, null)), (S.return = I), S;
        _s(I, S);
      }
      return null;
    }
    function L(I, S, T, z) {
      var J = S !== null ? S.key : null;
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return J !== null ? null : v(I, S, "" + T, z);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case B:
            return T.key === J ? x(I, S, T, z) : null;
          case se:
            return T.key === J ? P(I, S, T, z) : null;
          case Je:
            return (J = T._init), L(I, S, J(T._payload), z);
        }
        if (zr(T) || Z(T)) return J !== null ? null : M(I, S, T, z, null);
        _s(I, T);
      }
      return null;
    }
    function V(I, S, T, z, J) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return (I = I.get(T) || null), v(S, I, "" + z, J);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case B:
            return (
              (I = I.get(z.key === null ? T : z.key) || null), x(S, I, z, J)
            );
          case se:
            return (
              (I = I.get(z.key === null ? T : z.key) || null), P(S, I, z, J)
            );
          case Je:
            var Y = z._init;
            return V(I, S, T, Y(z._payload), J);
        }
        if (zr(z) || Z(z)) return (I = I.get(T) || null), M(S, I, z, J, null);
        _s(S, z);
      }
      return null;
    }
    function K(I, S, T, z) {
      for (
        var J = null, Y = null, X = S, te = (S = 0), Fe = null;
        X !== null && te < T.length;
        te++
      ) {
        X.index > te ? ((Fe = X), (X = null)) : (Fe = X.sibling);
        var de = L(I, X, T[te], z);
        if (de === null) {
          X === null && (X = Fe);
          break;
        }
        e && X && de.alternate === null && t(I, X),
          (S = d(de, S, te)),
          Y === null ? (J = de) : (Y.sibling = de),
          (Y = de),
          (X = Fe);
      }
      if (te === T.length) return s(I, X), Se && zn(I, te), J;
      if (X === null) {
        for (; te < T.length; te++)
          (X = U(I, T[te], z)),
            X !== null &&
              ((S = d(X, S, te)),
              Y === null ? (J = X) : (Y.sibling = X),
              (Y = X));
        return Se && zn(I, te), J;
      }
      for (X = a(I, X); te < T.length; te++)
        (Fe = V(X, I, te, T[te], z)),
          Fe !== null &&
            (e &&
              Fe.alternate !== null &&
              X.delete(Fe.key === null ? te : Fe.key),
            (S = d(Fe, S, te)),
            Y === null ? (J = Fe) : (Y.sibling = Fe),
            (Y = Fe));
      return (
        e &&
          X.forEach(function (In) {
            return t(I, In);
          }),
        Se && zn(I, te),
        J
      );
    }
    function G(I, S, T, z) {
      var J = Z(T);
      if (typeof J != "function") throw Error(i(150));
      if (((T = J.call(T)), T == null)) throw Error(i(151));
      for (
        var Y = (J = null), X = S, te = (S = 0), Fe = null, de = T.next();
        X !== null && !de.done;
        te++, de = T.next()
      ) {
        X.index > te ? ((Fe = X), (X = null)) : (Fe = X.sibling);
        var In = L(I, X, de.value, z);
        if (In === null) {
          X === null && (X = Fe);
          break;
        }
        e && X && In.alternate === null && t(I, X),
          (S = d(In, S, te)),
          Y === null ? (J = In) : (Y.sibling = In),
          (Y = In),
          (X = Fe);
      }
      if (de.done) return s(I, X), Se && zn(I, te), J;
      if (X === null) {
        for (; !de.done; te++, de = T.next())
          (de = U(I, de.value, z)),
            de !== null &&
              ((S = d(de, S, te)),
              Y === null ? (J = de) : (Y.sibling = de),
              (Y = de));
        return Se && zn(I, te), J;
      }
      for (X = a(I, X); !de.done; te++, de = T.next())
        (de = V(X, I, te, de.value, z)),
          de !== null &&
            (e &&
              de.alternate !== null &&
              X.delete(de.key === null ? te : de.key),
            (S = d(de, S, te)),
            Y === null ? (J = de) : (Y.sibling = de),
            (Y = de));
      return (
        e &&
          X.forEach(function (Sg) {
            return t(I, Sg);
          }),
        Se && zn(I, te),
        J
      );
    }
    function Te(I, S, T, z) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === ae &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case B:
            e: {
              for (var J = T.key, Y = S; Y !== null; ) {
                if (Y.key === J) {
                  if (((J = T.type), J === ae)) {
                    if (Y.tag === 7) {
                      s(I, Y.sibling),
                        (S = u(Y, T.props.children)),
                        (S.return = I),
                        (I = S);
                      break e;
                    }
                  } else if (
                    Y.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === Je &&
                      gd(J) === Y.type)
                  ) {
                    s(I, Y.sibling),
                      (S = u(Y, T.props)),
                      (S.ref = di(I, Y, T)),
                      (S.return = I),
                      (I = S);
                    break e;
                  }
                  s(I, Y);
                  break;
                } else t(I, Y);
                Y = Y.sibling;
              }
              T.type === ae
                ? ((S = Gn(T.props.children, I.mode, z, T.key)),
                  (S.return = I),
                  (I = S))
                : ((z = Gs(T.type, T.key, T.props, null, I.mode, z)),
                  (z.ref = di(I, S, T)),
                  (z.return = I),
                  (I = z));
            }
            return p(I);
          case se:
            e: {
              for (Y = T.key; S !== null; ) {
                if (S.key === Y)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === T.containerInfo &&
                    S.stateNode.implementation === T.implementation
                  ) {
                    s(I, S.sibling),
                      (S = u(S, T.children || [])),
                      (S.return = I),
                      (I = S);
                    break e;
                  } else {
                    s(I, S);
                    break;
                  }
                else t(I, S);
                S = S.sibling;
              }
              (S = Rl(T, I.mode, z)), (S.return = I), (I = S);
            }
            return p(I);
          case Je:
            return (Y = T._init), Te(I, S, Y(T._payload), z);
        }
        if (zr(T)) return K(I, S, T, z);
        if (Z(T)) return G(I, S, T, z);
        _s(I, T);
      }
      return (typeof T == "string" && T !== "") || typeof T == "number"
        ? ((T = "" + T),
          S !== null && S.tag === 6
            ? (s(I, S.sibling), (S = u(S, T)), (S.return = I), (I = S))
            : (s(I, S), (S = Il(T, I.mode, z)), (S.return = I), (I = S)),
          p(I))
        : s(I, S);
    }
    return Te;
  }
  var vr = yd(!0),
    vd = yd(!1),
    Cs = yn(null),
    Ns = null,
    wr = null,
    Fa = null;
  function Ua() {
    Fa = wr = Ns = null;
  }
  function za(e) {
    var t = Cs.current;
    xe(Cs), (e._currentValue = t);
  }
  function Ba(e, t, s) {
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
  function xr(e, t) {
    (Ns = e),
      (Fa = wr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Xe = !0), (e.firstContext = null));
  }
  function ft(e) {
    var t = e._currentValue;
    if (Fa !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
        if (Ns === null) throw Error(i(308));
        (wr = e), (Ns.dependencies = { lanes: 0, firstContext: e });
      } else wr = wr.next = e;
    return t;
  }
  var Bn = null;
  function Ha(e) {
    Bn === null ? (Bn = [e]) : Bn.push(e);
  }
  function wd(e, t, s, a) {
    var u = t.interleaved;
    return (
      u === null ? ((s.next = s), Ha(t)) : ((s.next = u.next), (u.next = s)),
      (t.interleaved = s),
      Jt(e, a)
    );
  }
  function Jt(e, t) {
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
  var xn = !1;
  function $a(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function xd(e, t) {
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
  function Qt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function kn(e, t, s) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), le & 2)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        Jt(e, s)
      );
    }
    return (
      (u = a.interleaved),
      u === null ? ((t.next = t), Ha(a)) : ((t.next = u.next), (u.next = t)),
      (a.interleaved = t),
      Jt(e, s)
    );
  }
  function bs(e, t, s) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (s & 4194240) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (s |= a), (t.lanes = s), ra(e, s);
    }
  }
  function kd(e, t) {
    var s = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), s === a)) {
      var u = null,
        d = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var p = {
            eventTime: s.eventTime,
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          };
          d === null ? (u = d = p) : (d = d.next = p), (s = s.next);
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
  function Is(e, t, s, a) {
    var u = e.updateQueue;
    xn = !1;
    var d = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var x = v,
        P = x.next;
      (x.next = null), p === null ? (d = P) : (p.next = P), (p = x);
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (v = M.lastBaseUpdate),
        v !== p &&
          (v === null ? (M.firstBaseUpdate = P) : (v.next = P),
          (M.lastBaseUpdate = x)));
    }
    if (d !== null) {
      var U = u.baseState;
      (p = 0), (M = P = x = null), (v = d);
      do {
        var L = v.lane,
          V = v.eventTime;
        if ((a & L) === L) {
          M !== null &&
            (M = M.next =
              {
                eventTime: V,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var K = e,
              G = v;
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
                U = q({}, U, L);
                break e;
              case 2:
                xn = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64),
            (L = u.effects),
            L === null ? (u.effects = [v]) : L.push(v));
        } else
          (V = {
            eventTime: V,
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            M === null ? ((P = M = V), (x = U)) : (M = M.next = V),
            (p |= L);
        if (((v = v.next), v === null)) {
          if (((v = u.shared.pending), v === null)) break;
          (L = v),
            (v = L.next),
            (L.next = null),
            (u.lastBaseUpdate = L),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (M === null && (x = U),
        (u.baseState = x),
        (u.firstBaseUpdate = P),
        (u.lastBaseUpdate = M),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (p |= u.lane), (u = u.next);
        while (u !== t);
      } else d === null && (u.shared.lanes = 0);
      (Vn |= p), (e.lanes = p), (e.memoizedState = U);
    }
  }
  function Sd(e, t, s) {
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
  var fi = {},
    Dt = yn(fi),
    hi = yn(fi),
    pi = yn(fi);
  function Hn(e) {
    if (e === fi) throw Error(i(174));
    return e;
  }
  function Va(e, t) {
    switch ((ve(pi, t), ve(hi, e), ve(Dt, fi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Wo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Wo(t, e));
    }
    xe(Dt), ve(Dt, t);
  }
  function kr() {
    xe(Dt), xe(hi), xe(pi);
  }
  function Ed(e) {
    Hn(pi.current);
    var t = Hn(Dt.current),
      s = Wo(t, e.type);
    t !== s && (ve(hi, e), ve(Dt, s));
  }
  function Wa(e) {
    hi.current === e && (xe(Dt), xe(hi));
  }
  var _e = yn(0);
  function Rs(e) {
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
  var qa = [];
  function Ka() {
    for (var e = 0; e < qa.length; e++)
      qa[e]._workInProgressVersionPrimary = null;
    qa.length = 0;
  }
  var Ts = Q.ReactCurrentDispatcher,
    Ga = Q.ReactCurrentBatchConfig,
    $n = 0,
    Ce = null,
    Ae = null,
    De = null,
    Ps = !1,
    mi = !1,
    gi = 0,
    V0 = 0;
  function He() {
    throw Error(i(321));
  }
  function Ja(e, t) {
    if (t === null) return !1;
    for (var s = 0; s < t.length && s < e.length; s++)
      if (!vt(e[s], t[s])) return !1;
    return !0;
  }
  function Qa(e, t, s, a, u, d) {
    if (
      (($n = d),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ts.current = e === null || e.memoizedState === null ? G0 : J0),
      (e = s(a, u)),
      mi)
    ) {
      d = 0;
      do {
        if (((mi = !1), (gi = 0), 25 <= d)) throw Error(i(301));
        (d += 1),
          (De = Ae = null),
          (t.updateQueue = null),
          (Ts.current = Q0),
          (e = s(a, u));
      } while (mi);
    }
    if (
      ((Ts.current = Os),
      (t = Ae !== null && Ae.next !== null),
      ($n = 0),
      (De = Ae = Ce = null),
      (Ps = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Ya() {
    var e = gi !== 0;
    return (gi = 0), e;
  }
  function Mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return De === null ? (Ce.memoizedState = De = e) : (De = De.next = e), De;
  }
  function ht() {
    if (Ae === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ae.next;
    var t = De === null ? Ce.memoizedState : De.next;
    if (t !== null) (De = t), (Ae = e);
    else {
      if (e === null) throw Error(i(310));
      (Ae = e),
        (e = {
          memoizedState: Ae.memoizedState,
          baseState: Ae.baseState,
          baseQueue: Ae.baseQueue,
          queue: Ae.queue,
          next: null,
        }),
        De === null ? (Ce.memoizedState = De = e) : (De = De.next = e);
    }
    return De;
  }
  function yi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xa(e) {
    var t = ht(),
      s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var a = Ae,
      u = a.baseQueue,
      d = s.pending;
    if (d !== null) {
      if (u !== null) {
        var p = u.next;
        (u.next = d.next), (d.next = p);
      }
      (a.baseQueue = u = d), (s.pending = null);
    }
    if (u !== null) {
      (d = u.next), (a = a.baseState);
      var v = (p = null),
        x = null,
        P = d;
      do {
        var M = P.lane;
        if (($n & M) === M)
          x !== null &&
            (x = x.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (a = P.hasEagerState ? P.eagerState : e(a, P.action));
        else {
          var U = {
            lane: M,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          x === null ? ((v = x = U), (p = a)) : (x = x.next = U),
            (Ce.lanes |= M),
            (Vn |= M);
        }
        P = P.next;
      } while (P !== null && P !== d);
      x === null ? (p = a) : (x.next = v),
        vt(a, t.memoizedState) || (Xe = !0),
        (t.memoizedState = a),
        (t.baseState = p),
        (t.baseQueue = x),
        (s.lastRenderedState = a);
    }
    if (((e = s.interleaved), e !== null)) {
      u = e;
      do (d = u.lane), (Ce.lanes |= d), (Vn |= d), (u = u.next);
      while (u !== e);
    } else u === null && (s.lanes = 0);
    return [t.memoizedState, s.dispatch];
  }
  function Za(e) {
    var t = ht(),
      s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var a = s.dispatch,
      u = s.pending,
      d = t.memoizedState;
    if (u !== null) {
      s.pending = null;
      var p = (u = u.next);
      do (d = e(d, p.action)), (p = p.next);
      while (p !== u);
      vt(d, t.memoizedState) || (Xe = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (s.lastRenderedState = d);
    }
    return [d, a];
  }
  function _d() {}
  function Cd(e, t) {
    var s = Ce,
      a = ht(),
      u = t(),
      d = !vt(a.memoizedState, u);
    if (
      (d && ((a.memoizedState = u), (Xe = !0)),
      (a = a.queue),
      el(Id.bind(null, s, a, e), [e]),
      a.getSnapshot !== t || d || (De !== null && De.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        vi(9, bd.bind(null, s, a, u, t), void 0, null),
        Me === null)
      )
        throw Error(i(349));
      $n & 30 || Nd(s, t, u);
    }
    return u;
  }
  function Nd(e, t, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: s }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.stores = [e]))
        : ((s = t.stores), s === null ? (t.stores = [e]) : s.push(e));
  }
  function bd(e, t, s, a) {
    (t.value = s), (t.getSnapshot = a), Rd(t) && Td(e);
  }
  function Id(e, t, s) {
    return s(function () {
      Rd(t) && Td(e);
    });
  }
  function Rd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var s = t();
      return !vt(e, s);
    } catch {
      return !0;
    }
  }
  function Td(e) {
    var t = Jt(e, 1);
    t !== null && Et(t, e, 1, -1);
  }
  function Pd(e) {
    var t = Mt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = K0.bind(null, Ce, e)),
      [t.memoizedState, e]
    );
  }
  function vi(e, t, s, a) {
    return (
      (e = { tag: e, create: t, destroy: s, deps: a, next: null }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((s = t.lastEffect),
          s === null
            ? (t.lastEffect = e.next = e)
            : ((a = s.next), (s.next = e), (e.next = a), (t.lastEffect = e))),
      e
    );
  }
  function jd() {
    return ht().memoizedState;
  }
  function js(e, t, s, a) {
    var u = Mt();
    (Ce.flags |= e),
      (u.memoizedState = vi(1 | t, s, void 0, a === void 0 ? null : a));
  }
  function As(e, t, s, a) {
    var u = ht();
    a = a === void 0 ? null : a;
    var d = void 0;
    if (Ae !== null) {
      var p = Ae.memoizedState;
      if (((d = p.destroy), a !== null && Ja(a, p.deps))) {
        u.memoizedState = vi(t, s, d, a);
        return;
      }
    }
    (Ce.flags |= e), (u.memoizedState = vi(1 | t, s, d, a));
  }
  function Ad(e, t) {
    return js(8390656, 8, e, t);
  }
  function el(e, t) {
    return As(2048, 8, e, t);
  }
  function Od(e, t) {
    return As(4, 2, e, t);
  }
  function Ld(e, t) {
    return As(4, 4, e, t);
  }
  function Dd(e, t) {
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
  function Md(e, t, s) {
    return (
      (s = s != null ? s.concat([e]) : null), As(4, 4, Dd.bind(null, t, e), s)
    );
  }
  function tl() {}
  function Fd(e, t) {
    var s = ht();
    t = t === void 0 ? null : t;
    var a = s.memoizedState;
    return a !== null && t !== null && Ja(t, a[1])
      ? a[0]
      : ((s.memoizedState = [e, t]), e);
  }
  function Ud(e, t) {
    var s = ht();
    t = t === void 0 ? null : t;
    var a = s.memoizedState;
    return a !== null && t !== null && Ja(t, a[1])
      ? a[0]
      : ((e = e()), (s.memoizedState = [e, t]), e);
  }
  function zd(e, t, s) {
    return $n & 21
      ? (vt(s, t) ||
          ((s = gc()), (Ce.lanes |= s), (Vn |= s), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = s));
  }
  function W0(e, t) {
    var s = me;
    (me = s !== 0 && 4 > s ? s : 4), e(!0);
    var a = Ga.transition;
    Ga.transition = {};
    try {
      e(!1), t();
    } finally {
      (me = s), (Ga.transition = a);
    }
  }
  function Bd() {
    return ht().memoizedState;
  }
  function q0(e, t, s) {
    var a = Cn(e);
    if (
      ((s = {
        lane: a,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Hd(e))
    )
      $d(t, s);
    else if (((s = wd(e, t, s, a)), s !== null)) {
      var u = Ke();
      Et(s, e, a, u), Vd(s, t, a);
    }
  }
  function K0(e, t, s) {
    var a = Cn(e),
      u = {
        lane: a,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Hd(e)) $d(t, u);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var p = t.lastRenderedState,
            v = d(p, s);
          if (((u.hasEagerState = !0), (u.eagerState = v), vt(v, p))) {
            var x = t.interleaved;
            x === null
              ? ((u.next = u), Ha(t))
              : ((u.next = x.next), (x.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (s = wd(e, t, u, a)),
        s !== null && ((u = Ke()), Et(s, e, a, u), Vd(s, t, a));
    }
  }
  function Hd(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function $d(e, t) {
    mi = Ps = !0;
    var s = e.pending;
    s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (e.pending = t);
  }
  function Vd(e, t, s) {
    if (s & 4194240) {
      var a = t.lanes;
      (a &= e.pendingLanes), (s |= a), (t.lanes = s), ra(e, s);
    }
  }
  var Os = {
      readContext: ft,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
      unstable_isNewReconciler: !1,
    },
    G0 = {
      readContext: ft,
      useCallback: function (e, t) {
        return (Mt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ft,
      useEffect: Ad,
      useImperativeHandle: function (e, t, s) {
        return (
          (s = s != null ? s.concat([e]) : null),
          js(4194308, 4, Dd.bind(null, t, e), s)
        );
      },
      useLayoutEffect: function (e, t) {
        return js(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return js(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var s = Mt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (s.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, s) {
        var a = Mt();
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
          (e = e.dispatch = q0.bind(null, Ce, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Mt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Pd,
      useDebugValue: tl,
      useDeferredValue: function (e) {
        return (Mt().memoizedState = e);
      },
      useTransition: function () {
        var e = Pd(!1),
          t = e[0];
        return (e = W0.bind(null, e[1])), (Mt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, s) {
        var a = Ce,
          u = Mt();
        if (Se) {
          if (s === void 0) throw Error(i(407));
          s = s();
        } else {
          if (((s = t()), Me === null)) throw Error(i(349));
          $n & 30 || Nd(a, t, s);
        }
        u.memoizedState = s;
        var d = { value: s, getSnapshot: t };
        return (
          (u.queue = d),
          Ad(Id.bind(null, a, d, e), [e]),
          (a.flags |= 2048),
          vi(9, bd.bind(null, a, d, s, t), void 0, null),
          s
        );
      },
      useId: function () {
        var e = Mt(),
          t = Me.identifierPrefix;
        if (Se) {
          var s = Gt,
            a = Kt;
          (s = (a & ~(1 << (32 - yt(a) - 1))).toString(32) + s),
            (t = ":" + t + "R" + s),
            (s = gi++),
            0 < s && (t += "H" + s.toString(32)),
            (t += ":");
        } else (s = V0++), (t = ":" + t + "r" + s.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    J0 = {
      readContext: ft,
      useCallback: Fd,
      useContext: ft,
      useEffect: el,
      useImperativeHandle: Md,
      useInsertionEffect: Od,
      useLayoutEffect: Ld,
      useMemo: Ud,
      useReducer: Xa,
      useRef: jd,
      useState: function () {
        return Xa(yi);
      },
      useDebugValue: tl,
      useDeferredValue: function (e) {
        var t = ht();
        return zd(t, Ae.memoizedState, e);
      },
      useTransition: function () {
        var e = Xa(yi)[0],
          t = ht().memoizedState;
        return [e, t];
      },
      useMutableSource: _d,
      useSyncExternalStore: Cd,
      useId: Bd,
      unstable_isNewReconciler: !1,
    },
    Q0 = {
      readContext: ft,
      useCallback: Fd,
      useContext: ft,
      useEffect: el,
      useImperativeHandle: Md,
      useInsertionEffect: Od,
      useLayoutEffect: Ld,
      useMemo: Ud,
      useReducer: Za,
      useRef: jd,
      useState: function () {
        return Za(yi);
      },
      useDebugValue: tl,
      useDeferredValue: function (e) {
        var t = ht();
        return Ae === null ? (t.memoizedState = e) : zd(t, Ae.memoizedState, e);
      },
      useTransition: function () {
        var e = Za(yi)[0],
          t = ht().memoizedState;
        return [e, t];
      },
      useMutableSource: _d,
      useSyncExternalStore: Cd,
      useId: Bd,
      unstable_isNewReconciler: !1,
    };
  function xt(e, t) {
    if (e && e.defaultProps) {
      (t = q({}, t)), (e = e.defaultProps);
      for (var s in e) t[s] === void 0 && (t[s] = e[s]);
      return t;
    }
    return t;
  }
  function nl(e, t, s, a) {
    (t = e.memoizedState),
      (s = s(a, t)),
      (s = s == null ? t : q({}, t, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Ls = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Dn(e) === e : !1;
    },
    enqueueSetState: function (e, t, s) {
      e = e._reactInternals;
      var a = Ke(),
        u = Cn(e),
        d = Qt(a, u);
      (d.payload = t),
        s != null && (d.callback = s),
        (t = kn(e, d, u)),
        t !== null && (Et(t, e, u, a), bs(t, e, u));
    },
    enqueueReplaceState: function (e, t, s) {
      e = e._reactInternals;
      var a = Ke(),
        u = Cn(e),
        d = Qt(a, u);
      (d.tag = 1),
        (d.payload = t),
        s != null && (d.callback = s),
        (t = kn(e, d, u)),
        t !== null && (Et(t, e, u, a), bs(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var s = Ke(),
        a = Cn(e),
        u = Qt(s, a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = kn(e, u, a)),
        t !== null && (Et(t, e, a, s), bs(t, e, a));
    },
  };
  function Wd(e, t, s, a, u, d, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, d, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ii(s, a) || !ii(u, d)
        : !0
    );
  }
  function qd(e, t, s) {
    var a = !1,
      u = vn,
      d = t.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = ft(d))
        : ((u = Ye(t) ? Fn : Be.current),
          (a = t.contextTypes),
          (d = (a = a != null) ? pr(e, u) : vn)),
      (t = new t(s, d)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ls),
      (e.stateNode = t),
      (t._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function Kd(e, t, s, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(s, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(s, a),
      t.state !== e && Ls.enqueueReplaceState(t, t.state, null);
  }
  function rl(e, t, s, a) {
    var u = e.stateNode;
    (u.props = s), (u.state = e.memoizedState), (u.refs = {}), $a(e);
    var d = t.contextType;
    typeof d == "object" && d !== null
      ? (u.context = ft(d))
      : ((d = Ye(t) ? Fn : Be.current), (u.context = pr(e, d))),
      (u.state = e.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == "function" && (nl(e, t, d, s), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && Ls.enqueueReplaceState(u, u.state, null),
        Is(e, s, u, a),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Sr(e, t) {
    try {
      var s = "",
        a = t;
      do (s += ue(a)), (a = a.return);
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
  function il(e, t, s) {
    return { value: e, source: null, stack: s ?? null, digest: t ?? null };
  }
  function sl(e, t) {
    try {
      console.error(t.value);
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  var Y0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Gd(e, t, s) {
    (s = Qt(-1, s)), (s.tag = 3), (s.payload = { element: null });
    var a = t.value;
    return (
      (s.callback = function () {
        Hs || ((Hs = !0), (xl = a)), sl(e, t);
      }),
      s
    );
  }
  function Jd(e, t, s) {
    (s = Qt(-1, s)), (s.tag = 3);
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = t.value;
      (s.payload = function () {
        return a(u);
      }),
        (s.callback = function () {
          sl(e, t);
        });
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (s.callback = function () {
          sl(e, t),
            typeof a != "function" &&
              (En === null ? (En = new Set([this])) : En.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : "",
          });
        }),
      s
    );
  }
  function Qd(e, t, s) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Y0();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(s) || (u.add(s), (e = dg.bind(null, e, t, s)), t.then(e, e));
  }
  function Yd(e) {
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
  function Xd(e, t, s, a, u) {
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
                : ((t = Qt(-1, 1)), (t.tag = 2), kn(s, t, 1))),
            (s.lanes |= 1)),
        e);
  }
  var X0 = Q.ReactCurrentOwner,
    Xe = !1;
  function qe(e, t, s, a) {
    t.child = e === null ? vd(t, null, s, a) : vr(t, e.child, s, a);
  }
  function Zd(e, t, s, a, u) {
    s = s.render;
    var d = t.ref;
    return (
      xr(t, u),
      (a = Qa(e, t, s, a, d, u)),
      (s = Ya()),
      e !== null && !Xe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          Yt(e, t, u))
        : (Se && s && Aa(t), (t.flags |= 1), qe(e, t, a, u), t.child)
    );
  }
  function ef(e, t, s, a, u) {
    if (e === null) {
      var d = s.type;
      return typeof d == "function" &&
        !bl(d) &&
        d.defaultProps === void 0 &&
        s.compare === null &&
        s.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), tf(e, t, d, a, u))
        : ((e = Gs(s.type, null, a, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), !(e.lanes & u))) {
      var p = d.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : ii), s(p, a) && e.ref === t.ref)
      )
        return Yt(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = bn(d, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function tf(e, t, s, a, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ii(d, a) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = a = d), (e.lanes & u) !== 0))
          e.flags & 131072 && (Xe = !0);
        else return (t.lanes = e.lanes), Yt(e, t, u);
    }
    return ol(e, t, s, a, u);
  }
  function nf(e, t, s) {
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
          ve(_r, lt),
          (lt |= s);
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
            ve(_r, lt),
            (lt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = d !== null ? d.baseLanes : s),
          ve(_r, lt),
          (lt |= a);
      }
    else
      d !== null ? ((a = d.baseLanes | s), (t.memoizedState = null)) : (a = s),
        ve(_r, lt),
        (lt |= a);
    return qe(e, t, u, s), t.child;
  }
  function rf(e, t) {
    var s = t.ref;
    ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ol(e, t, s, a, u) {
    var d = Ye(s) ? Fn : Be.current;
    return (
      (d = pr(t, d)),
      xr(t, u),
      (s = Qa(e, t, s, a, d, u)),
      (a = Ya()),
      e !== null && !Xe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          Yt(e, t, u))
        : (Se && a && Aa(t), (t.flags |= 1), qe(e, t, s, u), t.child)
    );
  }
  function sf(e, t, s, a, u) {
    if (Ye(s)) {
      var d = !0;
      ws(t);
    } else d = !1;
    if ((xr(t, u), t.stateNode === null))
      Ms(e, t), qd(t, s, a), rl(t, s, a, u), (a = !0);
    else if (e === null) {
      var p = t.stateNode,
        v = t.memoizedProps;
      p.props = v;
      var x = p.context,
        P = s.contextType;
      typeof P == "object" && P !== null
        ? (P = ft(P))
        : ((P = Ye(s) ? Fn : Be.current), (P = pr(t, P)));
      var M = s.getDerivedStateFromProps,
        U =
          typeof M == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      U ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((v !== a || x !== P) && Kd(t, p, a, P)),
        (xn = !1);
      var L = t.memoizedState;
      (p.state = L),
        Is(t, a, p, u),
        (x = t.memoizedState),
        v !== a || L !== x || Qe.current || xn
          ? (typeof M == "function" && (nl(t, s, M, a), (x = t.memoizedState)),
            (v = xn || Wd(t, s, v, a, L, x, P))
              ? (U ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = x)),
            (p.props = a),
            (p.state = x),
            (p.context = P),
            (a = v))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (p = t.stateNode),
        xd(e, t),
        (v = t.memoizedProps),
        (P = t.type === t.elementType ? v : xt(t.type, v)),
        (p.props = P),
        (U = t.pendingProps),
        (L = p.context),
        (x = s.contextType),
        typeof x == "object" && x !== null
          ? (x = ft(x))
          : ((x = Ye(s) ? Fn : Be.current), (x = pr(t, x)));
      var V = s.getDerivedStateFromProps;
      (M =
        typeof V == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((v !== U || L !== x) && Kd(t, p, a, x)),
        (xn = !1),
        (L = t.memoizedState),
        (p.state = L),
        Is(t, a, p, u);
      var K = t.memoizedState;
      v !== U || L !== K || Qe.current || xn
        ? (typeof V == "function" && (nl(t, s, V, a), (K = t.memoizedState)),
          (P = xn || Wd(t, s, P, a, L, K, x) || !1)
            ? (M ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(a, K, x),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(a, K, x)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = K)),
          (p.props = a),
          (p.state = K),
          (p.context = x),
          (a = P))
        : (typeof p.componentDidUpdate != "function" ||
            (v === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return al(e, t, s, a, d, u);
  }
  function al(e, t, s, a, u, d) {
    rf(e, t);
    var p = (t.flags & 128) !== 0;
    if (!a && !p) return u && ud(t, s, !1), Yt(e, t, d);
    (a = t.stateNode), (X0.current = t);
    var v =
      p && typeof s.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = vr(t, e.child, null, d)), (t.child = vr(t, null, v, d)))
        : qe(e, t, v, d),
      (t.memoizedState = a.state),
      u && ud(t, s, !0),
      t.child
    );
  }
  function of(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ad(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ad(e, t.context, !1),
      Va(e, t.containerInfo);
  }
  function af(e, t, s, a, u) {
    return yr(), Ma(u), (t.flags |= 256), qe(e, t, s, a), t.child;
  }
  var ll = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ul(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function lf(e, t, s) {
    var a = t.pendingProps,
      u = _e.current,
      d = !1,
      p = (t.flags & 128) !== 0,
      v;
    if (
      ((v = p) ||
        (v = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      v
        ? ((d = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      ve(_e, u & 1),
      e === null)
    )
      return (
        Da(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((p = a.children),
            (e = a.fallback),
            d
              ? ((a = t.mode),
                (d = t.child),
                (p = { mode: "hidden", children: p }),
                !(a & 1) && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = p))
                  : (d = Js(p, a, 0, null)),
                (e = Gn(e, a, s, null)),
                (d.return = t),
                (e.return = t),
                (d.sibling = e),
                (t.child = d),
                (t.child.memoizedState = ul(s)),
                (t.memoizedState = ll),
                e)
              : cl(t, p))
      );
    if (((u = e.memoizedState), u !== null && ((v = u.dehydrated), v !== null)))
      return Z0(e, t, p, a, v, u, s);
    if (d) {
      (d = a.fallback), (p = t.mode), (u = e.child), (v = u.sibling);
      var x = { mode: "hidden", children: a.children };
      return (
        !(p & 1) && t.child !== u
          ? ((a = t.child),
            (a.childLanes = 0),
            (a.pendingProps = x),
            (t.deletions = null))
          : ((a = bn(u, x)), (a.subtreeFlags = u.subtreeFlags & 14680064)),
        v !== null ? (d = bn(v, d)) : ((d = Gn(d, p, s, null)), (d.flags |= 2)),
        (d.return = t),
        (a.return = t),
        (a.sibling = d),
        (t.child = a),
        (a = d),
        (d = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? ul(s)
            : {
                baseLanes: p.baseLanes | s,
                cachePool: null,
                transitions: p.transitions,
              }),
        (d.memoizedState = p),
        (d.childLanes = e.childLanes & ~s),
        (t.memoizedState = ll),
        a
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (a = bn(d, { mode: "visible", children: a.children })),
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
  function cl(e, t) {
    return (
      (t = Js({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ds(e, t, s, a) {
    return (
      a !== null && Ma(a),
      vr(t, e.child, null, s),
      (e = cl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Z0(e, t, s, a, u, d, p) {
    if (s)
      return t.flags & 256
        ? ((t.flags &= -257), (a = il(Error(i(422)))), Ds(e, t, p, a))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((d = a.fallback),
          (u = t.mode),
          (a = Js({ mode: "visible", children: a.children }, u, 0, null)),
          (d = Gn(d, u, p, null)),
          (d.flags |= 2),
          (a.return = t),
          (d.return = t),
          (a.sibling = d),
          (t.child = a),
          t.mode & 1 && vr(t, e.child, null, p),
          (t.child.memoizedState = ul(p)),
          (t.memoizedState = ll),
          d);
    if (!(t.mode & 1)) return Ds(e, t, p, null);
    if (u.data === "$!") {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var v = a.dgst;
      return (
        (a = v), (d = Error(i(419))), (a = il(d, a, void 0)), Ds(e, t, p, a)
      );
    }
    if (((v = (p & e.childLanes) !== 0), Xe || v)) {
      if (((a = Me), a !== null)) {
        switch (p & -p) {
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
        (u = u & (a.suspendedLanes | p) ? 0 : u),
          u !== 0 &&
            u !== d.retryLane &&
            ((d.retryLane = u), Jt(e, u), Et(a, e, u, -1));
      }
      return Nl(), (a = il(Error(i(421)))), Ds(e, t, p, a);
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = fg.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = d.treeContext),
        (at = gn(u.nextSibling)),
        (ot = t),
        (Se = !0),
        (wt = null),
        e !== null &&
          ((ct[dt++] = Kt),
          (ct[dt++] = Gt),
          (ct[dt++] = Un),
          (Kt = e.id),
          (Gt = e.overflow),
          (Un = t)),
        (t = cl(t, a.children)),
        (t.flags |= 4096),
        t);
  }
  function uf(e, t, s) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Ba(e.return, t, s);
  }
  function dl(e, t, s, a, u) {
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
  function cf(e, t, s) {
    var a = t.pendingProps,
      u = a.revealOrder,
      d = a.tail;
    if ((qe(e, t, a.children, s), (a = _e.current), a & 2))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && uf(e, s, t);
          else if (e.tag === 19) uf(e, s, t);
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
    if ((ve(_e, a), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (s = t.child, u = null; s !== null; )
            (e = s.alternate),
              e !== null && Rs(e) === null && (u = s),
              (s = s.sibling);
          (s = u),
            s === null
              ? ((u = t.child), (t.child = null))
              : ((u = s.sibling), (s.sibling = null)),
            dl(t, !1, u, s, d);
          break;
        case "backwards":
          for (s = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && Rs(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = s), (s = u), (u = e);
          }
          dl(t, !0, s, null, d);
          break;
        case "together":
          dl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ms(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Yt(e, t, s) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Vn |= t.lanes),
      !(s & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, s = bn(e, e.pendingProps), t.child = s, s.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = bn(e, e.pendingProps)),
          (s.return = t);
      s.sibling = null;
    }
    return t.child;
  }
  function eg(e, t, s) {
    switch (t.tag) {
      case 3:
        of(t), yr();
        break;
      case 5:
        Ed(t);
        break;
      case 1:
        Ye(t.type) && ws(t);
        break;
      case 4:
        Va(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context,
          u = t.memoizedProps.value;
        ve(Cs, a._currentValue), (a._currentValue = u);
        break;
      case 13:
        if (((a = t.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (ve(_e, _e.current & 1), (t.flags |= 128), null)
            : s & t.child.childLanes
            ? lf(e, t, s)
            : (ve(_e, _e.current & 1),
              (e = Yt(e, t, s)),
              e !== null ? e.sibling : null);
        ve(_e, _e.current & 1);
        break;
      case 19:
        if (((a = (s & t.childLanes) !== 0), e.flags & 128)) {
          if (a) return cf(e, t, s);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          ve(_e, _e.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), nf(e, t, s);
    }
    return Yt(e, t, s);
  }
  var df, fl, ff, hf;
  (df = function (e, t) {
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
    (fl = function () {}),
    (ff = function (e, t, s, a) {
      var u = e.memoizedProps;
      if (u !== a) {
        (e = t.stateNode), Hn(Dt.current);
        var d = null;
        switch (s) {
          case "input":
            (u = Bo(e, u)), (a = Bo(e, a)), (d = []);
            break;
          case "select":
            (u = q({}, u, { value: void 0 })),
              (a = q({}, a, { value: void 0 })),
              (d = []);
            break;
          case "textarea":
            (u = Vo(e, u)), (a = Vo(e, a)), (d = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof a.onClick == "function" &&
              (e.onclick = gs);
        }
        qo(s, a);
        var p;
        s = null;
        for (P in u)
          if (!a.hasOwnProperty(P) && u.hasOwnProperty(P) && u[P] != null)
            if (P === "style") {
              var v = u[P];
              for (p in v) v.hasOwnProperty(p) && (s || (s = {}), (s[p] = ""));
            } else
              P !== "dangerouslySetInnerHTML" &&
                P !== "children" &&
                P !== "suppressContentEditableWarning" &&
                P !== "suppressHydrationWarning" &&
                P !== "autoFocus" &&
                (l.hasOwnProperty(P)
                  ? d || (d = [])
                  : (d = d || []).push(P, null));
        for (P in a) {
          var x = a[P];
          if (
            ((v = u != null ? u[P] : void 0),
            a.hasOwnProperty(P) && x !== v && (x != null || v != null))
          )
            if (P === "style")
              if (v) {
                for (p in v)
                  !v.hasOwnProperty(p) ||
                    (x && x.hasOwnProperty(p)) ||
                    (s || (s = {}), (s[p] = ""));
                for (p in x)
                  x.hasOwnProperty(p) &&
                    v[p] !== x[p] &&
                    (s || (s = {}), (s[p] = x[p]));
              } else s || (d || (d = []), d.push(P, s)), (s = x);
            else
              P === "dangerouslySetInnerHTML"
                ? ((x = x ? x.__html : void 0),
                  (v = v ? v.__html : void 0),
                  x != null && v !== x && (d = d || []).push(P, x))
                : P === "children"
                ? (typeof x != "string" && typeof x != "number") ||
                  (d = d || []).push(P, "" + x)
                : P !== "suppressContentEditableWarning" &&
                  P !== "suppressHydrationWarning" &&
                  (l.hasOwnProperty(P)
                    ? (x != null && P === "onScroll" && we("scroll", e),
                      d || v === x || (d = []))
                    : (d = d || []).push(P, x));
        }
        s && (d = d || []).push("style", s);
        var P = d;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (hf = function (e, t, s, a) {
      s !== a && (t.flags |= 4);
    });
  function wi(e, t) {
    if (!Se)
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
  function $e(e) {
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
  function tg(e, t, s) {
    var a = t.pendingProps;
    switch ((Oa(t), t.tag)) {
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
        return $e(t), null;
      case 1:
        return Ye(t.type) && vs(), $e(t), null;
      case 3:
        return (
          (a = t.stateNode),
          kr(),
          xe(Qe),
          xe(Be),
          Ka(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Es(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), wt !== null && (El(wt), (wt = null)))),
          fl(e, t),
          $e(t),
          null
        );
      case 5:
        Wa(t);
        var u = Hn(pi.current);
        if (((s = t.type), e !== null && t.stateNode != null))
          ff(e, t, s, a, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return $e(t), null;
          }
          if (((e = Hn(Dt.current)), Es(t))) {
            (a = t.stateNode), (s = t.type);
            var d = t.memoizedProps;
            switch (((a[Lt] = t), (a[ui] = d), (e = (t.mode & 1) !== 0), s)) {
              case "dialog":
                we("cancel", a), we("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", a);
                break;
              case "video":
              case "audio":
                for (u = 0; u < oi.length; u++) we(oi[u], a);
                break;
              case "source":
                we("error", a);
                break;
              case "img":
              case "image":
              case "link":
                we("error", a), we("load", a);
                break;
              case "details":
                we("toggle", a);
                break;
              case "input":
                qu(a, d), we("invalid", a);
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!d.multiple }),
                  we("invalid", a);
                break;
              case "textarea":
                Ju(a, d), we("invalid", a);
            }
            qo(s, d), (u = null);
            for (var p in d)
              if (d.hasOwnProperty(p)) {
                var v = d[p];
                p === "children"
                  ? typeof v == "string"
                    ? a.textContent !== v &&
                      (d.suppressHydrationWarning !== !0 &&
                        ms(a.textContent, v, e),
                      (u = ["children", v]))
                    : typeof v == "number" &&
                      a.textContent !== "" + v &&
                      (d.suppressHydrationWarning !== !0 &&
                        ms(a.textContent, v, e),
                      (u = ["children", "" + v]))
                  : l.hasOwnProperty(p) &&
                    v != null &&
                    p === "onScroll" &&
                    we("scroll", a);
              }
            switch (s) {
              case "input":
                qi(a), Gu(a, d, !0);
                break;
              case "textarea":
                qi(a), Yu(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (a.onclick = gs);
            }
            (a = u), (t.updateQueue = a), a !== null && (t.flags |= 4);
          } else {
            (p = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Xu(s)),
              e === "http://www.w3.org/1999/xhtml"
                ? s === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == "string"
                  ? (e = p.createElement(s, { is: a.is }))
                  : ((e = p.createElement(s)),
                    s === "select" &&
                      ((p = e),
                      a.multiple
                        ? (p.multiple = !0)
                        : a.size && (p.size = a.size)))
                : (e = p.createElementNS(e, s)),
              (e[Lt] = t),
              (e[ui] = a),
              df(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = Ko(s, a)), s)) {
                case "dialog":
                  we("cancel", e), we("close", e), (u = a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  we("load", e), (u = a);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < oi.length; u++) we(oi[u], e);
                  u = a;
                  break;
                case "source":
                  we("error", e), (u = a);
                  break;
                case "img":
                case "image":
                case "link":
                  we("error", e), we("load", e), (u = a);
                  break;
                case "details":
                  we("toggle", e), (u = a);
                  break;
                case "input":
                  qu(e, a), (u = Bo(e, a)), we("invalid", e);
                  break;
                case "option":
                  u = a;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!a.multiple }),
                    (u = q({}, a, { value: void 0 })),
                    we("invalid", e);
                  break;
                case "textarea":
                  Ju(e, a), (u = Vo(e, a)), we("invalid", e);
                  break;
                default:
                  u = a;
              }
              qo(s, u), (v = u);
              for (d in v)
                if (v.hasOwnProperty(d)) {
                  var x = v[d];
                  d === "style"
                    ? tc(e, x)
                    : d === "dangerouslySetInnerHTML"
                    ? ((x = x ? x.__html : void 0), x != null && Zu(e, x))
                    : d === "children"
                    ? typeof x == "string"
                      ? (s !== "textarea" || x !== "") && Br(e, x)
                      : typeof x == "number" && Br(e, "" + x)
                    : d !== "suppressContentEditableWarning" &&
                      d !== "suppressHydrationWarning" &&
                      d !== "autoFocus" &&
                      (l.hasOwnProperty(d)
                        ? x != null && d === "onScroll" && we("scroll", e)
                        : x != null && $(e, d, x, p));
                }
              switch (s) {
                case "input":
                  qi(e), Gu(e, a, !1);
                  break;
                case "textarea":
                  qi(e), Yu(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + pe(a.value));
                  break;
                case "select":
                  (e.multiple = !!a.multiple),
                    (d = a.value),
                    d != null
                      ? nr(e, !!a.multiple, d, !1)
                      : a.defaultValue != null &&
                        nr(e, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = gs);
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
        return $e(t), null;
      case 6:
        if (e && t.stateNode != null) hf(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (((s = Hn(pi.current)), Hn(Dt.current), Es(t))) {
            if (
              ((a = t.stateNode),
              (s = t.memoizedProps),
              (a[Lt] = t),
              (d = a.nodeValue !== s) && ((e = ot), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ms(a.nodeValue, s, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ms(a.nodeValue, s, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            (a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a)),
              (a[Lt] = t),
              (t.stateNode = a);
        }
        return $e(t), null;
      case 13:
        if (
          (xe(_e),
          (a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && at !== null && t.mode & 1 && !(t.flags & 128))
            md(), yr(), (t.flags |= 98560), (d = !1);
          else if (((d = Es(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (
                ((d = t.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(i(317));
              d[Lt] = t;
            } else
              yr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            $e(t), (d = !1);
          } else wt !== null && (El(wt), (wt = null)), (d = !0);
          if (!d) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = s), t)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || _e.current & 1 ? Oe === 0 && (Oe = 3) : Nl())),
            t.updateQueue !== null && (t.flags |= 4),
            $e(t),
            null);
      case 4:
        return (
          kr(),
          fl(e, t),
          e === null && ai(t.stateNode.containerInfo),
          $e(t),
          null
        );
      case 10:
        return za(t.type._context), $e(t), null;
      case 17:
        return Ye(t.type) && vs(), $e(t), null;
      case 19:
        if ((xe(_e), (d = t.memoizedState), d === null)) return $e(t), null;
        if (((a = (t.flags & 128) !== 0), (p = d.rendering), p === null))
          if (a) wi(d, !1);
          else {
            if (Oe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((p = Rs(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      wi(d, !1),
                      a = p.updateQueue,
                      a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      a = s,
                      s = t.child;
                    s !== null;

                  )
                    (d = s),
                      (e = a),
                      (d.flags &= 14680066),
                      (p = d.alternate),
                      p === null
                        ? ((d.childLanes = 0),
                          (d.lanes = e),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = p.childLanes),
                          (d.lanes = p.lanes),
                          (d.child = p.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = p.memoizedProps),
                          (d.memoizedState = p.memoizedState),
                          (d.updateQueue = p.updateQueue),
                          (d.type = p.type),
                          (e = p.dependencies),
                          (d.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (s = s.sibling);
                  return ve(_e, (_e.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null &&
              Re() > Cr &&
              ((t.flags |= 128), (a = !0), wi(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Rs(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (s = e.updateQueue),
                s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                wi(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !p.alternate &&
                  !Se)
              )
                return $e(t), null;
            } else
              2 * Re() - d.renderingStartTime > Cr &&
                s !== 1073741824 &&
                ((t.flags |= 128), (a = !0), wi(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((s = d.last),
              s !== null ? (s.sibling = p) : (t.child = p),
              (d.last = p));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = Re()),
            (t.sibling = null),
            (s = _e.current),
            ve(_e, a ? (s & 1) | 2 : s & 1),
            t)
          : ($e(t), null);
      case 22:
      case 23:
        return (
          Cl(),
          (a = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
          a && t.mode & 1
            ? lt & 1073741824 &&
              ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : $e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function ng(e, t) {
    switch ((Oa(t), t.tag)) {
      case 1:
        return (
          Ye(t.type) && vs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kr(),
          xe(Qe),
          xe(Be),
          Ka(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Wa(t), null;
      case 13:
        if (
          (xe(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          yr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return xe(_e), null;
      case 4:
        return kr(), null;
      case 10:
        return za(t.type._context), null;
      case 22:
      case 23:
        return Cl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fs = !1,
    Ve = !1,
    rg = typeof WeakSet == "function" ? WeakSet : Set,
    W = null;
  function Er(e, t) {
    var s = e.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (a) {
          be(e, t, a);
        }
      else s.current = null;
  }
  function hl(e, t, s) {
    try {
      s();
    } catch (a) {
      be(e, t, a);
    }
  }
  var pf = !1;
  function ig(e, t) {
    if (((Ca = is), (e = Wc()), ya(e))) {
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
            var p = 0,
              v = -1,
              x = -1,
              P = 0,
              M = 0,
              U = e,
              L = null;
            t: for (;;) {
              for (
                var V;
                U !== s || (u !== 0 && U.nodeType !== 3) || (v = p + u),
                  U !== d || (a !== 0 && U.nodeType !== 3) || (x = p + a),
                  U.nodeType === 3 && (p += U.nodeValue.length),
                  (V = U.firstChild) !== null;

              )
                (L = U), (U = V);
              for (;;) {
                if (U === e) break t;
                if (
                  (L === s && ++P === u && (v = p),
                  L === d && ++M === a && (x = p),
                  (V = U.nextSibling) !== null)
                )
                  break;
                (U = L), (L = U.parentNode);
              }
              U = V;
            }
            s = v === -1 || x === -1 ? null : { start: v, end: x };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Na = { focusedElem: e, selectionRange: s }, is = !1, W = t;
      W !== null;

    )
      if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (W = e);
      else
        for (; W !== null; ) {
          t = W;
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
                      Te = K.memoizedState,
                      I = t.stateNode,
                      S = I.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? G : xt(t.type, G),
                        Te
                      );
                    I.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var T = t.stateNode.containerInfo;
                  T.nodeType === 1
                    ? (T.textContent = "")
                    : T.nodeType === 9 &&
                      T.documentElement &&
                      T.removeChild(T.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (z) {
            be(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (W = e);
            break;
          }
          W = t.return;
        }
    return (K = pf), (pf = !1), K;
  }
  function xi(e, t, s) {
    var a = t.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var u = (a = a.next);
      do {
        if ((u.tag & e) === e) {
          var d = u.destroy;
          (u.destroy = void 0), d !== void 0 && hl(t, s, d);
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function Us(e, t) {
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
  function pl(e) {
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
  function mf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), mf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Lt],
          delete t[ui],
          delete t[Ta],
          delete t[z0],
          delete t[B0])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function gf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function yf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || gf(e.return)) return null;
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
  function ml(e, t, s) {
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
            s != null || t.onclick !== null || (t.onclick = gs));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (ml(e, t, s), e = e.sibling; e !== null; )
        ml(e, t, s), (e = e.sibling);
  }
  function gl(e, t, s) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? s.insertBefore(e, t) : s.appendChild(e);
    else if (a !== 4 && ((e = e.child), e !== null))
      for (gl(e, t, s), e = e.sibling; e !== null; )
        gl(e, t, s), (e = e.sibling);
  }
  var Ue = null,
    kt = !1;
  function Sn(e, t, s) {
    for (s = s.child; s !== null; ) vf(e, t, s), (s = s.sibling);
  }
  function vf(e, t, s) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function")
      try {
        Ot.onCommitFiberUnmount(Xi, s);
      } catch {}
    switch (s.tag) {
      case 5:
        Ve || Er(s, t);
      case 6:
        var a = Ue,
          u = kt;
        (Ue = null),
          Sn(e, t, s),
          (Ue = a),
          (kt = u),
          Ue !== null &&
            (kt
              ? ((e = Ue),
                (s = s.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(s)
                  : e.removeChild(s))
              : Ue.removeChild(s.stateNode));
        break;
      case 18:
        Ue !== null &&
          (kt
            ? ((e = Ue),
              (s = s.stateNode),
              e.nodeType === 8
                ? Ra(e.parentNode, s)
                : e.nodeType === 1 && Ra(e, s),
              Xr(e))
            : Ra(Ue, s.stateNode));
        break;
      case 4:
        (a = Ue),
          (u = kt),
          (Ue = s.stateNode.containerInfo),
          (kt = !0),
          Sn(e, t, s),
          (Ue = a),
          (kt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ve &&
          ((a = s.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          u = a = a.next;
          do {
            var d = u,
              p = d.destroy;
            (d = d.tag),
              p !== void 0 && (d & 2 || d & 4) && hl(s, t, p),
              (u = u.next);
          } while (u !== a);
        }
        Sn(e, t, s);
        break;
      case 1:
        if (
          !Ve &&
          (Er(s, t),
          (a = s.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            (a.props = s.memoizedProps),
              (a.state = s.memoizedState),
              a.componentWillUnmount();
          } catch (v) {
            be(s, t, v);
          }
        Sn(e, t, s);
        break;
      case 21:
        Sn(e, t, s);
        break;
      case 22:
        s.mode & 1
          ? ((Ve = (a = Ve) || s.memoizedState !== null), Sn(e, t, s), (Ve = a))
          : Sn(e, t, s);
        break;
      default:
        Sn(e, t, s);
    }
  }
  function wf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new rg()),
        t.forEach(function (a) {
          var u = hg.bind(null, e, a);
          s.has(a) || (s.add(a), a.then(u, u));
        });
    }
  }
  function St(e, t) {
    var s = t.deletions;
    if (s !== null)
      for (var a = 0; a < s.length; a++) {
        var u = s[a];
        try {
          var d = e,
            p = t,
            v = p;
          e: for (; v !== null; ) {
            switch (v.tag) {
              case 5:
                (Ue = v.stateNode), (kt = !1);
                break e;
              case 3:
                (Ue = v.stateNode.containerInfo), (kt = !0);
                break e;
              case 4:
                (Ue = v.stateNode.containerInfo), (kt = !0);
                break e;
            }
            v = v.return;
          }
          if (Ue === null) throw Error(i(160));
          vf(d, p, u), (Ue = null), (kt = !1);
          var x = u.alternate;
          x !== null && (x.return = null), (u.return = null);
        } catch (P) {
          be(u, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) xf(t, e), (t = t.sibling);
  }
  function xf(e, t) {
    var s = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((St(t, e), Ft(e), a & 4)) {
          try {
            xi(3, e, e.return), Us(3, e);
          } catch (G) {
            be(e, e.return, G);
          }
          try {
            xi(5, e, e.return);
          } catch (G) {
            be(e, e.return, G);
          }
        }
        break;
      case 1:
        St(t, e), Ft(e), a & 512 && s !== null && Er(s, s.return);
        break;
      case 5:
        if (
          (St(t, e),
          Ft(e),
          a & 512 && s !== null && Er(s, s.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            Br(u, "");
          } catch (G) {
            be(e, e.return, G);
          }
        }
        if (a & 4 && ((u = e.stateNode), u != null)) {
          var d = e.memoizedProps,
            p = s !== null ? s.memoizedProps : d,
            v = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              v === "input" && d.type === "radio" && d.name != null && Ku(u, d),
                Ko(v, p);
              var P = Ko(v, d);
              for (p = 0; p < x.length; p += 2) {
                var M = x[p],
                  U = x[p + 1];
                M === "style"
                  ? tc(u, U)
                  : M === "dangerouslySetInnerHTML"
                  ? Zu(u, U)
                  : M === "children"
                  ? Br(u, U)
                  : $(u, M, U, P);
              }
              switch (v) {
                case "input":
                  Ho(u, d);
                  break;
                case "textarea":
                  Qu(u, d);
                  break;
                case "select":
                  var L = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!d.multiple;
                  var V = d.value;
                  V != null
                    ? nr(u, !!d.multiple, V, !1)
                    : L !== !!d.multiple &&
                      (d.defaultValue != null
                        ? nr(u, !!d.multiple, d.defaultValue, !0)
                        : nr(u, !!d.multiple, d.multiple ? [] : "", !1));
              }
              u[ui] = d;
            } catch (G) {
              be(e, e.return, G);
            }
        }
        break;
      case 6:
        if ((St(t, e), Ft(e), a & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (u = e.stateNode), (d = e.memoizedProps);
          try {
            u.nodeValue = d;
          } catch (G) {
            be(e, e.return, G);
          }
        }
        break;
      case 3:
        if (
          (St(t, e), Ft(e), a & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Xr(t.containerInfo);
          } catch (G) {
            be(e, e.return, G);
          }
        break;
      case 4:
        St(t, e), Ft(e);
        break;
      case 13:
        St(t, e),
          Ft(e),
          (u = e.child),
          u.flags & 8192 &&
            ((d = u.memoizedState !== null),
            (u.stateNode.isHidden = d),
            !d ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (wl = Re())),
          a & 4 && wf(e);
        break;
      case 22:
        if (
          ((M = s !== null && s.memoizedState !== null),
          e.mode & 1 ? ((Ve = (P = Ve) || M), St(t, e), (Ve = P)) : St(t, e),
          Ft(e),
          a & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null),
            (e.stateNode.isHidden = P) && !M && e.mode & 1)
          )
            for (W = e, M = e.child; M !== null; ) {
              for (U = W = M; W !== null; ) {
                switch (((L = W), (V = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    xi(4, L, L.return);
                    break;
                  case 1:
                    Er(L, L.return);
                    var K = L.stateNode;
                    if (typeof K.componentWillUnmount == "function") {
                      (a = L), (s = L.return);
                      try {
                        (t = a),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount();
                      } catch (G) {
                        be(a, s, G);
                      }
                    }
                    break;
                  case 5:
                    Er(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Ef(U);
                      continue;
                    }
                }
                V !== null ? ((V.return = L), (W = V)) : Ef(U);
              }
              M = M.sibling;
            }
          e: for (M = null, U = e; ; ) {
            if (U.tag === 5) {
              if (M === null) {
                M = U;
                try {
                  (u = U.stateNode),
                    P
                      ? ((d = u.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : ((v = U.stateNode),
                        (x = U.memoizedProps.style),
                        (p =
                          x != null && x.hasOwnProperty("display")
                            ? x.display
                            : null),
                        (v.style.display = ec("display", p)));
                } catch (G) {
                  be(e, e.return, G);
                }
              }
            } else if (U.tag === 6) {
              if (M === null)
                try {
                  U.stateNode.nodeValue = P ? "" : U.memoizedProps;
                } catch (G) {
                  be(e, e.return, G);
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
        St(t, e), Ft(e), a & 4 && wf(e);
        break;
      case 21:
        break;
      default:
        St(t, e), Ft(e);
    }
  }
  function Ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (gf(s)) {
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
            a.flags & 32 && (Br(u, ""), (a.flags &= -33));
            var d = yf(e);
            gl(e, d, u);
            break;
          case 3:
          case 4:
            var p = a.stateNode.containerInfo,
              v = yf(e);
            ml(e, v, p);
            break;
          default:
            throw Error(i(161));
        }
      } catch (x) {
        be(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sg(e, t, s) {
    (W = e), kf(e);
  }
  function kf(e, t, s) {
    for (var a = (e.mode & 1) !== 0; W !== null; ) {
      var u = W,
        d = u.child;
      if (u.tag === 22 && a) {
        var p = u.memoizedState !== null || Fs;
        if (!p) {
          var v = u.alternate,
            x = (v !== null && v.memoizedState !== null) || Ve;
          v = Fs;
          var P = Ve;
          if (((Fs = p), (Ve = x) && !P))
            for (W = u; W !== null; )
              (p = W),
                (x = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? _f(u)
                  : x !== null
                  ? ((x.return = p), (W = x))
                  : _f(u);
          for (; d !== null; ) (W = d), kf(d), (d = d.sibling);
          (W = u), (Fs = v), (Ve = P);
        }
        Sf(e);
      } else
        u.subtreeFlags & 8772 && d !== null ? ((d.return = u), (W = d)) : Sf(e);
    }
  }
  function Sf(e) {
    for (; W !== null; ) {
      var t = W;
      if (t.flags & 8772) {
        var s = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ve || Us(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (t.flags & 4 && !Ve)
                  if (s === null) a.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? s.memoizedProps
                        : xt(t.type, s.memoizedProps);
                    a.componentDidUpdate(
                      u,
                      s.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var d = t.updateQueue;
                d !== null && Sd(t, d, a);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((s = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        s = t.child.stateNode;
                        break;
                      case 1:
                        s = t.child.stateNode;
                    }
                  Sd(t, p, s);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (s === null && t.flags & 4) {
                  s = v;
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
                  var P = t.alternate;
                  if (P !== null) {
                    var M = P.memoizedState;
                    if (M !== null) {
                      var U = M.dehydrated;
                      U !== null && Xr(U);
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
          Ve || (t.flags & 512 && pl(t));
        } catch (L) {
          be(t, t.return, L);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (((s = t.sibling), s !== null)) {
        (s.return = t.return), (W = s);
        break;
      }
      W = t.return;
    }
  }
  function Ef(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (W = s);
        break;
      }
      W = t.return;
    }
  }
  function _f(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var s = t.return;
            try {
              Us(4, t);
            } catch (x) {
              be(t, s, x);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var u = t.return;
              try {
                a.componentDidMount();
              } catch (x) {
                be(t, u, x);
              }
            }
            var d = t.return;
            try {
              pl(t);
            } catch (x) {
              be(t, d, x);
            }
            break;
          case 5:
            var p = t.return;
            try {
              pl(t);
            } catch (x) {
              be(t, p, x);
            }
        }
      } catch (x) {
        be(t, t.return, x);
      }
      if (t === e) {
        W = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        (v.return = t.return), (W = v);
        break;
      }
      W = t.return;
    }
  }
  var og = Math.ceil,
    zs = Q.ReactCurrentDispatcher,
    yl = Q.ReactCurrentOwner,
    pt = Q.ReactCurrentBatchConfig,
    le = 0,
    Me = null,
    je = null,
    ze = 0,
    lt = 0,
    _r = yn(0),
    Oe = 0,
    ki = null,
    Vn = 0,
    Bs = 0,
    vl = 0,
    Si = null,
    Ze = null,
    wl = 0,
    Cr = 1 / 0,
    Xt = null,
    Hs = !1,
    xl = null,
    En = null,
    $s = !1,
    _n = null,
    Vs = 0,
    Ei = 0,
    kl = null,
    Ws = -1,
    qs = 0;
  function Ke() {
    return le & 6 ? Re() : Ws !== -1 ? Ws : (Ws = Re());
  }
  function Cn(e) {
    return e.mode & 1
      ? le & 2 && ze !== 0
        ? ze & -ze
        : $0.transition !== null
        ? (qs === 0 && (qs = gc()), qs)
        : ((e = me),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cc(e.type))),
          e)
      : 1;
  }
  function Et(e, t, s, a) {
    if (50 < Ei) throw ((Ei = 0), (kl = null), Error(i(185)));
    Kr(e, s, a),
      (!(le & 2) || e !== Me) &&
        (e === Me && (!(le & 2) && (Bs |= s), Oe === 4 && Nn(e, ze)),
        et(e, a),
        s === 1 &&
          le === 0 &&
          !(t.mode & 1) &&
          ((Cr = Re() + 500), xs && wn()));
  }
  function et(e, t) {
    var s = e.callbackNode;
    $m(e, t);
    var a = ts(e, e === Me ? ze : 0);
    if (a === 0)
      s !== null && hc(s), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = a & -a), e.callbackPriority !== t)) {
      if ((s != null && hc(s), t === 1))
        e.tag === 0 ? H0(Nf.bind(null, e)) : cd(Nf.bind(null, e)),
          F0(function () {
            !(le & 6) && wn();
          }),
          (s = null);
      else {
        switch (yc(a)) {
          case 1:
            s = ea;
            break;
          case 4:
            s = pc;
            break;
          case 16:
            s = Yi;
            break;
          case 536870912:
            s = mc;
            break;
          default:
            s = Yi;
        }
        s = Of(s, Cf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = s);
    }
  }
  function Cf(e, t) {
    if (((Ws = -1), (qs = 0), le & 6)) throw Error(i(327));
    var s = e.callbackNode;
    if (Nr() && e.callbackNode !== s) return null;
    var a = ts(e, e === Me ? ze : 0);
    if (a === 0) return null;
    if (a & 30 || a & e.expiredLanes || t) t = Ks(e, a);
    else {
      t = a;
      var u = le;
      le |= 2;
      var d = If();
      (Me !== e || ze !== t) && ((Xt = null), (Cr = Re() + 500), qn(e, t));
      do
        try {
          ug();
          break;
        } catch (v) {
          bf(e, v);
        }
      while (!0);
      Ua(),
        (zs.current = d),
        (le = u),
        je !== null ? (t = 0) : ((Me = null), (ze = 0), (t = Oe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = ta(e)), u !== 0 && ((a = u), (t = Sl(e, u)))),
        t === 1)
      )
        throw ((s = ki), qn(e, 0), Nn(e, a), et(e, Re()), s);
      if (t === 6) Nn(e, a);
      else {
        if (
          ((u = e.current.alternate),
          !(a & 30) &&
            !ag(u) &&
            ((t = Ks(e, a)),
            t === 2 && ((d = ta(e)), d !== 0 && ((a = d), (t = Sl(e, d)))),
            t === 1))
        )
          throw ((s = ki), qn(e, 0), Nn(e, a), et(e, Re()), s);
        switch (((e.finishedWork = u), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Kn(e, Ze, Xt);
            break;
          case 3:
            if (
              (Nn(e, a),
              (a & 130023424) === a && ((t = wl + 500 - Re()), 10 < t))
            ) {
              if (ts(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & a) !== a)) {
                Ke(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = Ia(Kn.bind(null, e, Ze, Xt), t);
              break;
            }
            Kn(e, Ze, Xt);
            break;
          case 4:
            if ((Nn(e, a), (a & 4194240) === a)) break;
            for (t = e.eventTimes, u = -1; 0 < a; ) {
              var p = 31 - yt(a);
              (d = 1 << p), (p = t[p]), p > u && (u = p), (a &= ~d);
            }
            if (
              ((a = u),
              (a = Re() - a),
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
                  : 1960 * og(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = Ia(Kn.bind(null, e, Ze, Xt), a);
              break;
            }
            Kn(e, Ze, Xt);
            break;
          case 5:
            Kn(e, Ze, Xt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return et(e, Re()), e.callbackNode === s ? Cf.bind(null, e) : null;
  }
  function Sl(e, t) {
    var s = Si;
    return (
      e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
      (e = Ks(e, t)),
      e !== 2 && ((t = Ze), (Ze = s), t !== null && El(t)),
      e
    );
  }
  function El(e) {
    Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
  }
  function ag(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var s = t.updateQueue;
        if (s !== null && ((s = s.stores), s !== null))
          for (var a = 0; a < s.length; a++) {
            var u = s[a],
              d = u.getSnapshot;
            u = u.value;
            try {
              if (!vt(d(), u)) return !1;
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
      t &= ~vl,
        t &= ~Bs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var s = 31 - yt(t),
        a = 1 << s;
      (e[s] = -1), (t &= ~a);
    }
  }
  function Nf(e) {
    if (le & 6) throw Error(i(327));
    Nr();
    var t = ts(e, 0);
    if (!(t & 1)) return et(e, Re()), null;
    var s = Ks(e, t);
    if (e.tag !== 0 && s === 2) {
      var a = ta(e);
      a !== 0 && ((t = a), (s = Sl(e, a)));
    }
    if (s === 1) throw ((s = ki), qn(e, 0), Nn(e, t), et(e, Re()), s);
    if (s === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Kn(e, Ze, Xt),
      et(e, Re()),
      null
    );
  }
  function _l(e, t) {
    var s = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      (le = s), le === 0 && ((Cr = Re() + 500), xs && wn());
    }
  }
  function Wn(e) {
    _n !== null && _n.tag === 0 && !(le & 6) && Nr();
    var t = le;
    le |= 1;
    var s = pt.transition,
      a = me;
    try {
      if (((pt.transition = null), (me = 1), e)) return e();
    } finally {
      (me = a), (pt.transition = s), (le = t), !(le & 6) && wn();
    }
  }
  function Cl() {
    (lt = _r.current), xe(_r);
  }
  function qn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var s = e.timeoutHandle;
    if ((s !== -1 && ((e.timeoutHandle = -1), M0(s)), je !== null))
      for (s = je.return; s !== null; ) {
        var a = s;
        switch ((Oa(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && vs();
            break;
          case 3:
            kr(), xe(Qe), xe(Be), Ka();
            break;
          case 5:
            Wa(a);
            break;
          case 4:
            kr();
            break;
          case 13:
            xe(_e);
            break;
          case 19:
            xe(_e);
            break;
          case 10:
            za(a.type._context);
            break;
          case 22:
          case 23:
            Cl();
        }
        s = s.return;
      }
    if (
      ((Me = e),
      (je = e = bn(e.current, null)),
      (ze = lt = t),
      (Oe = 0),
      (ki = null),
      (vl = Bs = Vn = 0),
      (Ze = Si = null),
      Bn !== null)
    ) {
      for (t = 0; t < Bn.length; t++)
        if (((s = Bn[t]), (a = s.interleaved), a !== null)) {
          s.interleaved = null;
          var u = a.next,
            d = s.pending;
          if (d !== null) {
            var p = d.next;
            (d.next = u), (a.next = p);
          }
          s.pending = a;
        }
      Bn = null;
    }
    return e;
  }
  function bf(e, t) {
    do {
      var s = je;
      try {
        if ((Ua(), (Ts.current = Os), Ps)) {
          for (var a = Ce.memoizedState; a !== null; ) {
            var u = a.queue;
            u !== null && (u.pending = null), (a = a.next);
          }
          Ps = !1;
        }
        if (
          (($n = 0),
          (De = Ae = Ce = null),
          (mi = !1),
          (gi = 0),
          (yl.current = null),
          s === null || s.return === null)
        ) {
          (Oe = 1), (ki = t), (je = null);
          break;
        }
        e: {
          var d = e,
            p = s.return,
            v = s,
            x = t;
          if (
            ((t = ze),
            (v.flags |= 32768),
            x !== null && typeof x == "object" && typeof x.then == "function")
          ) {
            var P = x,
              M = v,
              U = M.tag;
            if (!(M.mode & 1) && (U === 0 || U === 11 || U === 15)) {
              var L = M.alternate;
              L
                ? ((M.updateQueue = L.updateQueue),
                  (M.memoizedState = L.memoizedState),
                  (M.lanes = L.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var V = Yd(p);
            if (V !== null) {
              (V.flags &= -257),
                Xd(V, p, v, d, t),
                V.mode & 1 && Qd(d, P, t),
                (t = V),
                (x = P);
              var K = t.updateQueue;
              if (K === null) {
                var G = new Set();
                G.add(x), (t.updateQueue = G);
              } else K.add(x);
              break e;
            } else {
              if (!(t & 1)) {
                Qd(d, P, t), Nl();
                break e;
              }
              x = Error(i(426));
            }
          } else if (Se && v.mode & 1) {
            var Te = Yd(p);
            if (Te !== null) {
              !(Te.flags & 65536) && (Te.flags |= 256),
                Xd(Te, p, v, d, t),
                Ma(Sr(x, v));
              break e;
            }
          }
          (d = x = Sr(x, v)),
            Oe !== 4 && (Oe = 2),
            Si === null ? (Si = [d]) : Si.push(d),
            (d = p);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                var I = Gd(d, x, t);
                kd(d, I);
                break e;
              case 1:
                v = x;
                var S = d.type,
                  T = d.stateNode;
                if (
                  !(d.flags & 128) &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (T !== null &&
                      typeof T.componentDidCatch == "function" &&
                      (En === null || !En.has(T))))
                ) {
                  (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                  var z = Jd(d, v, t);
                  kd(d, z);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Tf(s);
      } catch (J) {
        (t = J), je === s && s !== null && (je = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function If() {
    var e = zs.current;
    return (zs.current = Os), e === null ? Os : e;
  }
  function Nl() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      Me === null || (!(Vn & 268435455) && !(Bs & 268435455)) || Nn(Me, ze);
  }
  function Ks(e, t) {
    var s = le;
    le |= 2;
    var a = If();
    (Me !== e || ze !== t) && ((Xt = null), qn(e, t));
    do
      try {
        lg();
        break;
      } catch (u) {
        bf(e, u);
      }
    while (!0);
    if ((Ua(), (le = s), (zs.current = a), je !== null)) throw Error(i(261));
    return (Me = null), (ze = 0), Oe;
  }
  function lg() {
    for (; je !== null; ) Rf(je);
  }
  function ug() {
    for (; je !== null && !Om(); ) Rf(je);
  }
  function Rf(e) {
    var t = Af(e.alternate, e, lt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Tf(e) : (je = t),
      (yl.current = null);
  }
  function Tf(e) {
    var t = e;
    do {
      var s = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((s = ng(s, t)), s !== null)) {
          (s.flags &= 32767), (je = s);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Oe = 6), (je = null);
          return;
        }
      } else if (((s = tg(s, t, lt)), s !== null)) {
        je = s;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function Kn(e, t, s) {
    var a = me,
      u = pt.transition;
    try {
      (pt.transition = null), (me = 1), cg(e, t, s, a);
    } finally {
      (pt.transition = u), (me = a);
    }
    return null;
  }
  function cg(e, t, s, a) {
    do Nr();
    while (_n !== null);
    if (le & 6) throw Error(i(327));
    s = e.finishedWork;
    var u = e.finishedLanes;
    if (s === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var d = s.lanes | s.childLanes;
    if (
      (Vm(e, d),
      e === Me && ((je = Me = null), (ze = 0)),
      (!(s.subtreeFlags & 2064) && !(s.flags & 2064)) ||
        $s ||
        (($s = !0),
        Of(Yi, function () {
          return Nr(), null;
        })),
      (d = (s.flags & 15990) !== 0),
      s.subtreeFlags & 15990 || d)
    ) {
      (d = pt.transition), (pt.transition = null);
      var p = me;
      me = 1;
      var v = le;
      (le |= 4),
        (yl.current = null),
        ig(e, s),
        xf(s, e),
        T0(Na),
        (is = !!Ca),
        (Na = Ca = null),
        (e.current = s),
        sg(s),
        Lm(),
        (le = v),
        (me = p),
        (pt.transition = d);
    } else e.current = s;
    if (
      ($s && (($s = !1), (_n = e), (Vs = u)),
      (d = e.pendingLanes),
      d === 0 && (En = null),
      Fm(s.stateNode),
      et(e, Re()),
      t !== null)
    )
      for (a = e.onRecoverableError, s = 0; s < t.length; s++)
        (u = t[s]), a(u.value, { componentStack: u.stack, digest: u.digest });
    if (Hs) throw ((Hs = !1), (e = xl), (xl = null), e);
    return (
      Vs & 1 && e.tag !== 0 && Nr(),
      (d = e.pendingLanes),
      d & 1 ? (e === kl ? Ei++ : ((Ei = 0), (kl = e))) : (Ei = 0),
      wn(),
      null
    );
  }
  function Nr() {
    if (_n !== null) {
      var e = yc(Vs),
        t = pt.transition,
        s = me;
      try {
        if (((pt.transition = null), (me = 16 > e ? 16 : e), _n === null))
          var a = !1;
        else {
          if (((e = _n), (_n = null), (Vs = 0), le & 6)) throw Error(i(331));
          var u = le;
          for (le |= 4, W = e.current; W !== null; ) {
            var d = W,
              p = d.child;
            if (W.flags & 16) {
              var v = d.deletions;
              if (v !== null) {
                for (var x = 0; x < v.length; x++) {
                  var P = v[x];
                  for (W = P; W !== null; ) {
                    var M = W;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xi(8, M, d);
                    }
                    var U = M.child;
                    if (U !== null) (U.return = M), (W = U);
                    else
                      for (; W !== null; ) {
                        M = W;
                        var L = M.sibling,
                          V = M.return;
                        if ((mf(M), M === P)) {
                          W = null;
                          break;
                        }
                        if (L !== null) {
                          (L.return = V), (W = L);
                          break;
                        }
                        W = V;
                      }
                  }
                }
                var K = d.alternate;
                if (K !== null) {
                  var G = K.child;
                  if (G !== null) {
                    K.child = null;
                    do {
                      var Te = G.sibling;
                      (G.sibling = null), (G = Te);
                    } while (G !== null);
                  }
                }
                W = d;
              }
            }
            if (d.subtreeFlags & 2064 && p !== null) (p.return = d), (W = p);
            else
              e: for (; W !== null; ) {
                if (((d = W), d.flags & 2048))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xi(9, d, d.return);
                  }
                var I = d.sibling;
                if (I !== null) {
                  (I.return = d.return), (W = I);
                  break e;
                }
                W = d.return;
              }
          }
          var S = e.current;
          for (W = S; W !== null; ) {
            p = W;
            var T = p.child;
            if (p.subtreeFlags & 2064 && T !== null) (T.return = p), (W = T);
            else
              e: for (p = S; W !== null; ) {
                if (((v = W), v.flags & 2048))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(9, v);
                    }
                  } catch (J) {
                    be(v, v.return, J);
                  }
                if (v === p) {
                  W = null;
                  break e;
                }
                var z = v.sibling;
                if (z !== null) {
                  (z.return = v.return), (W = z);
                  break e;
                }
                W = v.return;
              }
          }
          if (
            ((le = u),
            wn(),
            Ot && typeof Ot.onPostCommitFiberRoot == "function")
          )
            try {
              Ot.onPostCommitFiberRoot(Xi, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (me = s), (pt.transition = t);
      }
    }
    return !1;
  }
  function Pf(e, t, s) {
    (t = Sr(s, t)),
      (t = Gd(e, t, 1)),
      (e = kn(e, t, 1)),
      (t = Ke()),
      e !== null && (Kr(e, 1, t), et(e, t));
  }
  function be(e, t, s) {
    if (e.tag === 3) Pf(e, e, s);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pf(t, e, s);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (En === null || !En.has(a)))
          ) {
            (e = Sr(s, e)),
              (e = Jd(t, e, 1)),
              (t = kn(t, e, 1)),
              (e = Ke()),
              t !== null && (Kr(t, 1, e), et(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function dg(e, t, s) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (t = Ke()),
      (e.pingedLanes |= e.suspendedLanes & s),
      Me === e &&
        (ze & s) === s &&
        (Oe === 4 || (Oe === 3 && (ze & 130023424) === ze && 500 > Re() - wl)
          ? qn(e, 0)
          : (vl |= s)),
      et(e, t);
  }
  function jf(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = es), (es <<= 1), !(es & 130023424) && (es = 4194304))
        : (t = 1));
    var s = Ke();
    (e = Jt(e, t)), e !== null && (Kr(e, t, s), et(e, s));
  }
  function fg(e) {
    var t = e.memoizedState,
      s = 0;
    t !== null && (s = t.retryLane), jf(e, s);
  }
  function hg(e, t) {
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
    a !== null && a.delete(t), jf(e, s);
  }
  var Af;
  Af = function (e, t, s) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Qe.current) Xe = !0;
      else {
        if (!(e.lanes & s) && !(t.flags & 128)) return (Xe = !1), eg(e, t, s);
        Xe = !!(e.flags & 131072);
      }
    else (Xe = !1), Se && t.flags & 1048576 && dd(t, Ss, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        Ms(e, t), (e = t.pendingProps);
        var u = pr(t, Be.current);
        xr(t, s), (u = Qa(null, t, a, e, u, s));
        var d = Ya();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ye(a) ? ((d = !0), ws(t)) : (d = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              $a(t),
              (u.updater = Ls),
              (t.stateNode = u),
              (u._reactInternals = t),
              rl(t, a, e, s),
              (t = al(null, t, a, !0, d, s)))
            : ((t.tag = 0), Se && d && Aa(t), qe(null, t, u, s), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (Ms(e, t),
            (e = t.pendingProps),
            (u = a._init),
            (a = u(a._payload)),
            (t.type = a),
            (u = t.tag = mg(a)),
            (e = xt(a, e)),
            u)
          ) {
            case 0:
              t = ol(null, t, a, e, s);
              break e;
            case 1:
              t = sf(null, t, a, e, s);
              break e;
            case 11:
              t = Zd(null, t, a, e, s);
              break e;
            case 14:
              t = ef(null, t, a, xt(a.type, e), s);
              break e;
          }
          throw Error(i(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : xt(a, u)),
          ol(e, t, a, u, s)
        );
      case 1:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : xt(a, u)),
          sf(e, t, a, u, s)
        );
      case 3:
        e: {
          if ((of(t), e === null)) throw Error(i(387));
          (a = t.pendingProps),
            (d = t.memoizedState),
            (u = d.element),
            xd(e, t),
            Is(t, a, null, s);
          var p = t.memoizedState;
          if (((a = p.element), d.isDehydrated))
            if (
              ((d = {
                element: a,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              (u = Sr(Error(i(423)), t)), (t = af(e, t, a, s, u));
              break e;
            } else if (a !== u) {
              (u = Sr(Error(i(424)), t)), (t = af(e, t, a, s, u));
              break e;
            } else
              for (
                at = gn(t.stateNode.containerInfo.firstChild),
                  ot = t,
                  Se = !0,
                  wt = null,
                  s = vd(t, null, a, s),
                  t.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((yr(), a === u)) {
              t = Yt(e, t, s);
              break e;
            }
            qe(e, t, a, s);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ed(t),
          e === null && Da(t),
          (a = t.type),
          (u = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (p = u.children),
          ba(a, u) ? (p = null) : d !== null && ba(a, d) && (t.flags |= 32),
          rf(e, t),
          qe(e, t, p, s),
          t.child
        );
      case 6:
        return e === null && Da(t), null;
      case 13:
        return lf(e, t, s);
      case 4:
        return (
          Va(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = vr(t, null, a, s)) : qe(e, t, a, s),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : xt(a, u)),
          Zd(e, t, a, u, s)
        );
      case 7:
        return qe(e, t, t.pendingProps, s), t.child;
      case 8:
        return qe(e, t, t.pendingProps.children, s), t.child;
      case 12:
        return qe(e, t, t.pendingProps.children, s), t.child;
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (u = t.pendingProps),
            (d = t.memoizedProps),
            (p = u.value),
            ve(Cs, a._currentValue),
            (a._currentValue = p),
            d !== null)
          )
            if (vt(d.value, p)) {
              if (d.children === u.children && !Qe.current) {
                t = Yt(e, t, s);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var v = d.dependencies;
                if (v !== null) {
                  p = d.child;
                  for (var x = v.firstContext; x !== null; ) {
                    if (x.context === a) {
                      if (d.tag === 1) {
                        (x = Qt(-1, s & -s)), (x.tag = 2);
                        var P = d.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var M = P.pending;
                          M === null
                            ? (x.next = x)
                            : ((x.next = M.next), (M.next = x)),
                            (P.pending = x);
                        }
                      }
                      (d.lanes |= s),
                        (x = d.alternate),
                        x !== null && (x.lanes |= s),
                        Ba(d.return, s, t),
                        (v.lanes |= s);
                      break;
                    }
                    x = x.next;
                  }
                } else if (d.tag === 10) p = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((p = d.return), p === null)) throw Error(i(341));
                  (p.lanes |= s),
                    (v = p.alternate),
                    v !== null && (v.lanes |= s),
                    Ba(p, s, t),
                    (p = d.sibling);
                } else p = d.child;
                if (p !== null) p.return = d;
                else
                  for (p = d; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((d = p.sibling), d !== null)) {
                      (d.return = p.return), (p = d);
                      break;
                    }
                    p = p.return;
                  }
                d = p;
              }
          qe(e, t, u.children, s), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (a = t.pendingProps.children),
          xr(t, s),
          (u = ft(u)),
          (a = a(u)),
          (t.flags |= 1),
          qe(e, t, a, s),
          t.child
        );
      case 14:
        return (
          (a = t.type),
          (u = xt(a, t.pendingProps)),
          (u = xt(a.type, u)),
          ef(e, t, a, u, s)
        );
      case 15:
        return tf(e, t, t.type, t.pendingProps, s);
      case 17:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : xt(a, u)),
          Ms(e, t),
          (t.tag = 1),
          Ye(a) ? ((e = !0), ws(t)) : (e = !1),
          xr(t, s),
          qd(t, a, u),
          rl(t, a, u, s),
          al(null, t, a, !0, e, s)
        );
      case 19:
        return cf(e, t, s);
      case 22:
        return nf(e, t, s);
    }
    throw Error(i(156, t.tag));
  };
  function Of(e, t) {
    return fc(e, t);
  }
  function pg(e, t, s, a) {
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
  function mt(e, t, s, a) {
    return new pg(e, t, s, a);
  }
  function bl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function mg(e) {
    if (typeof e == "function") return bl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === jt)) return 11;
      if (e === At) return 14;
    }
    return 2;
  }
  function bn(e, t) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = mt(e.tag, t, e.key, e.mode)),
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
  function Gs(e, t, s, a, u, d) {
    var p = 2;
    if (((a = e), typeof e == "function")) bl(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case ae:
          return Gn(s.children, u, d, t);
        case fe:
          (p = 8), (u |= 8);
          break;
        case he:
          return (
            (e = mt(12, s, t, u | 2)), (e.elementType = he), (e.lanes = d), e
          );
        case rt:
          return (e = mt(13, s, t, u)), (e.elementType = rt), (e.lanes = d), e;
        case gt:
          return (e = mt(19, s, t, u)), (e.elementType = gt), (e.lanes = d), e;
        case Ne:
          return Js(s, u, d, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Pe:
                p = 10;
                break e;
              case Pt:
                p = 9;
                break e;
              case jt:
                p = 11;
                break e;
              case At:
                p = 14;
                break e;
              case Je:
                (p = 16), (a = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = mt(p, s, t, u)), (t.elementType = e), (t.type = a), (t.lanes = d), t
    );
  }
  function Gn(e, t, s, a) {
    return (e = mt(7, e, a, t)), (e.lanes = s), e;
  }
  function Js(e, t, s, a) {
    return (
      (e = mt(22, e, a, t)),
      (e.elementType = Ne),
      (e.lanes = s),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Il(e, t, s) {
    return (e = mt(6, e, null, t)), (e.lanes = s), e;
  }
  function Rl(e, t, s) {
    return (
      (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = s),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function gg(e, t, s, a, u) {
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
      (this.eventTimes = na(0)),
      (this.expirationTimes = na(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = na(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Tl(e, t, s, a, u, d, p, v, x) {
    return (
      (e = new gg(e, t, s, v, x)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = mt(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: a,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      $a(d),
      e
    );
  }
  function yg(e, t, s) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: se,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: s,
    };
  }
  function Lf(e) {
    if (!e) return vn;
    e = e._reactInternals;
    e: {
      if (Dn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ye(t.type)) {
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
      if (Ye(s)) return ld(e, s, t);
    }
    return t;
  }
  function Df(e, t, s, a, u, d, p, v, x) {
    return (
      (e = Tl(s, a, !0, e, u, d, p, v, x)),
      (e.context = Lf(null)),
      (s = e.current),
      (a = Ke()),
      (u = Cn(s)),
      (d = Qt(a, u)),
      (d.callback = t ?? null),
      kn(s, d, u),
      (e.current.lanes = u),
      Kr(e, u, a),
      et(e, a),
      e
    );
  }
  function Qs(e, t, s, a) {
    var u = t.current,
      d = Ke(),
      p = Cn(u);
    return (
      (s = Lf(s)),
      t.context === null ? (t.context = s) : (t.pendingContext = s),
      (t = Qt(d, p)),
      (t.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (t.callback = a),
      (e = kn(u, t, p)),
      e !== null && (Et(e, u, p, d), bs(e, u, p)),
      p
    );
  }
  function Ys(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Mf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < t ? s : t;
    }
  }
  function Pl(e, t) {
    Mf(e, t), (e = e.alternate) && Mf(e, t);
  }
  function vg() {
    return null;
  }
  var Ff =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function jl(e) {
    this._internalRoot = e;
  }
  (Xs.prototype.render = jl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Qs(e, t, null, null);
    }),
    (Xs.prototype.unmount = jl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Wn(function () {
            Qs(null, e, null, null);
          }),
            (t[Wt] = null);
        }
      });
  function Xs(e) {
    this._internalRoot = e;
  }
  Xs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = xc();
      e = { blockedOn: null, target: e, priority: t };
      for (var s = 0; s < hn.length && t !== 0 && t < hn[s].priority; s++);
      hn.splice(s, 0, e), s === 0 && Ec(e);
    }
  };
  function Al(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Zs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Uf() {}
  function wg(e, t, s, a, u) {
    if (u) {
      if (typeof a == "function") {
        var d = a;
        a = function () {
          var P = Ys(p);
          d.call(P);
        };
      }
      var p = Df(t, a, e, 0, null, !1, !1, "", Uf);
      return (
        (e._reactRootContainer = p),
        (e[Wt] = p.current),
        ai(e.nodeType === 8 ? e.parentNode : e),
        Wn(),
        p
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof a == "function") {
      var v = a;
      a = function () {
        var P = Ys(x);
        v.call(P);
      };
    }
    var x = Tl(e, 0, !1, null, null, !1, !1, "", Uf);
    return (
      (e._reactRootContainer = x),
      (e[Wt] = x.current),
      ai(e.nodeType === 8 ? e.parentNode : e),
      Wn(function () {
        Qs(t, x, s, a);
      }),
      x
    );
  }
  function eo(e, t, s, a, u) {
    var d = s._reactRootContainer;
    if (d) {
      var p = d;
      if (typeof u == "function") {
        var v = u;
        u = function () {
          var x = Ys(p);
          v.call(x);
        };
      }
      Qs(t, p, e, u);
    } else p = wg(s, t, e, u, a);
    return Ys(p);
  }
  (vc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var s = qr(t.pendingLanes);
          s !== 0 &&
            (ra(t, s | 1), et(t, Re()), !(le & 6) && ((Cr = Re() + 500), wn()));
        }
        break;
      case 13:
        Wn(function () {
          var a = Jt(e, 1);
          if (a !== null) {
            var u = Ke();
            Et(a, e, 1, u);
          }
        }),
          Pl(e, 1);
    }
  }),
    (ia = function (e) {
      if (e.tag === 13) {
        var t = Jt(e, 134217728);
        if (t !== null) {
          var s = Ke();
          Et(t, e, 134217728, s);
        }
        Pl(e, 134217728);
      }
    }),
    (wc = function (e) {
      if (e.tag === 13) {
        var t = Cn(e),
          s = Jt(e, t);
        if (s !== null) {
          var a = Ke();
          Et(s, e, t, a);
        }
        Pl(e, t);
      }
    }),
    (xc = function () {
      return me;
    }),
    (kc = function (e, t) {
      var s = me;
      try {
        return (me = e), t();
      } finally {
        me = s;
      }
    }),
    (Qo = function (e, t, s) {
      switch (t) {
        case "input":
          if ((Ho(e, s), (t = s.name), s.type === "radio" && t != null)) {
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
                var u = ys(a);
                if (!u) throw Error(i(90));
                Wu(a), Ho(a, u);
              }
            }
          }
          break;
        case "textarea":
          Qu(e, s);
          break;
        case "select":
          (t = s.value), t != null && nr(e, !!s.multiple, t, !1);
      }
    }),
    (sc = _l),
    (oc = Wn);
  var xg = { usingClientEntryPoint: !1, Events: [ci, fr, ys, rc, ic, _l] },
    _i = {
      findFiberByHostInstance: Mn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    kg = {
      bundleType: _i.bundleType,
      version: _i.version,
      rendererPackageName: _i.rendererPackageName,
      rendererConfig: _i.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = cc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: _i.findFiberByHostInstance || vg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var to = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!to.isDisabled && to.supportsFiber)
      try {
        (Xi = to.inject(kg)), (Ot = to);
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xg),
    (tt.createPortal = function (e, t) {
      var s =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Al(t)) throw Error(i(200));
      return yg(e, t, null, s);
    }),
    (tt.createRoot = function (e, t) {
      if (!Al(e)) throw Error(i(299));
      var s = !1,
        a = "",
        u = Ff;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (s = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = Tl(e, 1, !1, null, null, s, !1, a, u)),
        (e[Wt] = t.current),
        ai(e.nodeType === 8 ? e.parentNode : e),
        new jl(t)
      );
    }),
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = cc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (tt.flushSync = function (e) {
      return Wn(e);
    }),
    (tt.hydrate = function (e, t, s) {
      if (!Zs(t)) throw Error(i(200));
      return eo(null, e, t, !0, s);
    }),
    (tt.hydrateRoot = function (e, t, s) {
      if (!Al(e)) throw Error(i(405));
      var a = (s != null && s.hydratedSources) || null,
        u = !1,
        d = "",
        p = Ff;
      if (
        (s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (d = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (p = s.onRecoverableError)),
        (t = Df(t, null, e, 1, s ?? null, u, !1, d, p)),
        (e[Wt] = t.current),
        ai(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          (s = a[e]),
            (u = s._getVersion),
            (u = u(s._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [s, u])
              : t.mutableSourceEagerHydrationData.push(s, u);
      return new Xs(t);
    }),
    (tt.render = function (e, t, s) {
      if (!Zs(t)) throw Error(i(200));
      return eo(null, e, t, !1, s);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!Zs(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Wn(function () {
            eo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Wt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = _l),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, s, a) {
      if (!Zs(s)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return eo(e, t, s, !1, a);
    }),
    (tt.version = "18.3.1-next-f1338f8080-20240426"),
    tt
  );
}
var Kf;
function Rg() {
  if (Kf) return Dl.exports;
  Kf = 1;
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
  return r(), (Dl.exports = Ig()), Dl.exports;
}
var Gf;
function Tg() {
  if (Gf) return no;
  Gf = 1;
  var r = Rg();
  return (no.createRoot = r.createRoot), (no.hydrateRoot = r.hydrateRoot), no;
}
var Pg = Tg(),
  Ni = {},
  Jf;
function jg() {
  if (Jf) return Ni;
  (Jf = 1),
    Object.defineProperty(Ni, "__esModule", { value: !0 }),
    (Ni.parse = f),
    (Ni.serialize = y);
  const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    n = /^[\u0021-\u003A\u003C-\u007E]*$/,
    i =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    o = /^[\u0020-\u003A\u003D-\u007E]*$/,
    l = Object.prototype.toString,
    c = (() => {
      const E = function () {};
      return (E.prototype = Object.create(null)), E;
    })();
  function f(E, O) {
    const k = new c(),
      R = E.length;
    if (R < 2) return k;
    const b = (O == null ? void 0 : O.decode) || w;
    let A = 0;
    do {
      const F = E.indexOf("=", A);
      if (F === -1) break;
      const $ = E.indexOf(";", A),
        Q = $ === -1 ? R : $;
      if (F > Q) {
        A = E.lastIndexOf(";", F - 1) + 1;
        continue;
      }
      const B = g(E, A, F),
        se = m(E, F, B),
        ae = E.slice(B, se);
      if (k[ae] === void 0) {
        let fe = g(E, F + 1, Q),
          he = m(E, Q, fe);
        const Pe = b(E.slice(fe, he));
        k[ae] = Pe;
      }
      A = Q + 1;
    } while (A < R);
    return k;
  }
  function g(E, O, k) {
    do {
      const R = E.charCodeAt(O);
      if (R !== 32 && R !== 9) return O;
    } while (++O < k);
    return k;
  }
  function m(E, O, k) {
    for (; O > k; ) {
      const R = E.charCodeAt(--O);
      if (R !== 32 && R !== 9) return O + 1;
    }
    return k;
  }
  function y(E, O, k) {
    const R = (k == null ? void 0 : k.encode) || encodeURIComponent;
    if (!r.test(E)) throw new TypeError(`argument name is invalid: ${E}`);
    const b = R(O);
    if (!n.test(b)) throw new TypeError(`argument val is invalid: ${O}`);
    let A = E + "=" + b;
    if (!k) return A;
    if (k.maxAge !== void 0) {
      if (!Number.isInteger(k.maxAge))
        throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);
      A += "; Max-Age=" + k.maxAge;
    }
    if (k.domain) {
      if (!i.test(k.domain))
        throw new TypeError(`option domain is invalid: ${k.domain}`);
      A += "; Domain=" + k.domain;
    }
    if (k.path) {
      if (!o.test(k.path))
        throw new TypeError(`option path is invalid: ${k.path}`);
      A += "; Path=" + k.path;
    }
    if (k.expires) {
      if (!_(k.expires) || !Number.isFinite(k.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${k.expires}`);
      A += "; Expires=" + k.expires.toUTCString();
    }
    if (
      (k.httpOnly && (A += "; HttpOnly"),
      k.secure && (A += "; Secure"),
      k.partitioned && (A += "; Partitioned"),
      k.priority)
    )
      switch (
        typeof k.priority == "string" ? k.priority.toLowerCase() : void 0
      ) {
        case "low":
          A += "; Priority=Low";
          break;
        case "medium":
          A += "; Priority=Medium";
          break;
        case "high":
          A += "; Priority=High";
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
          A += "; SameSite=Strict";
          break;
        case "lax":
          A += "; SameSite=Lax";
          break;
        case "none":
          A += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${k.sameSite}`);
      }
    return A;
  }
  function w(E) {
    if (E.indexOf("%") === -1) return E;
    try {
      return decodeURIComponent(E);
    } catch {
      return E;
    }
  }
  function _(E) {
    return l.call(E) === "[object Date]";
  }
  return Ni;
}
jg();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Qf = "popstate";
function Ag(r = {}) {
  function n(o, l) {
    let { pathname: c, search: f, hash: g } = o.location;
    return tu(
      "",
      { pathname: c, search: f, hash: g },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function i(o, l) {
    return typeof l == "string" ? l : Ti(l);
  }
  return Lg(n, i, null, r);
}
function Ee(r, n) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(n);
}
function It(r, n) {
  if (!r) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function Og() {
  return Math.random().toString(36).substring(2, 10);
}
function Yf(r, n) {
  return { usr: r.state, key: r.key, idx: n };
}
function tu(r, n, i = null, o) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? Or(n) : n),
    state: i,
    key: (n && n.key) || o || Og(),
  };
}
function Ti({ pathname: r = "/", search: n = "", hash: i = "" }) {
  return (
    n && n !== "?" && (r += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i),
    r
  );
}
function Or(r) {
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
function Lg(r, n, i, o = {}) {
  let { window: l = document.defaultView, v5Compat: c = !1 } = o,
    f = l.history,
    g = "POP",
    m = null,
    y = w();
  y == null && ((y = 0), f.replaceState({ ...f.state, idx: y }, ""));
  function w() {
    return (f.state || { idx: null }).idx;
  }
  function _() {
    g = "POP";
    let b = w(),
      A = b == null ? null : b - y;
    (y = b), m && m({ action: g, location: R.location, delta: A });
  }
  function E(b, A) {
    g = "PUSH";
    let F = tu(R.location, b, A);
    y = w() + 1;
    let $ = Yf(F, y),
      Q = R.createHref(F);
    try {
      f.pushState($, "", Q);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError") throw B;
      l.location.assign(Q);
    }
    c && m && m({ action: g, location: R.location, delta: 1 });
  }
  function O(b, A) {
    g = "REPLACE";
    let F = tu(R.location, b, A);
    y = w();
    let $ = Yf(F, y),
      Q = R.createHref(F);
    f.replaceState($, "", Q),
      c && m && m({ action: g, location: R.location, delta: 0 });
  }
  function k(b) {
    let A = l.location.origin !== "null" ? l.location.origin : l.location.href,
      F = typeof b == "string" ? b : Ti(b);
    return (
      (F = F.replace(/ $/, "%20")),
      Ee(
        A,
        `No window.location.(origin|href) available to create URL for href: ${F}`
      ),
      new URL(F, A)
    );
  }
  let R = {
    get action() {
      return g;
    },
    get location() {
      return r(l, f);
    },
    listen(b) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Qf, _),
        (m = b),
        () => {
          l.removeEventListener(Qf, _), (m = null);
        }
      );
    },
    createHref(b) {
      return n(l, b);
    },
    createURL: k,
    encodeLocation(b) {
      let A = k(b);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: E,
    replace: O,
    go(b) {
      return f.go(b);
    },
  };
  return R;
}
function Vh(r, n, i = "/") {
  return Dg(r, n, i, !1);
}
function Dg(r, n, i, o) {
  let l = typeof n == "string" ? Or(n) : n,
    c = On(l.pathname || "/", i);
  if (c == null) return null;
  let f = Wh(r);
  Mg(f);
  let g = null;
  for (let m = 0; g == null && m < f.length; ++m) {
    let y = Gg(c);
    g = qg(f[m], y, o);
  }
  return g;
}
function Wh(r, n = [], i = [], o = "") {
  let l = (c, f, g) => {
    let m = {
      relativePath: g === void 0 ? c.path || "" : g,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    m.relativePath.startsWith("/") &&
      (Ee(
        m.relativePath.startsWith(o),
        `Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(o.length)));
    let y = rn([o, m.relativePath]),
      w = i.concat(m);
    c.children &&
      c.children.length > 0 &&
      (Ee(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      Wh(c.children, n, w, y)),
      !(c.path == null && !c.index) &&
        n.push({ path: y, score: Vg(y, c.index), routesMeta: w });
  };
  return (
    r.forEach((c, f) => {
      var g;
      if (c.path === "" || !((g = c.path) != null && g.includes("?"))) l(c, f);
      else for (let m of qh(c.path)) l(c, f, m);
    }),
    n
  );
}
function qh(r) {
  let n = r.split("/");
  if (n.length === 0) return [];
  let [i, ...o] = n,
    l = i.endsWith("?"),
    c = i.replace(/\?$/, "");
  if (o.length === 0) return l ? [c, ""] : [c];
  let f = qh(o.join("/")),
    g = [];
  return (
    g.push(...f.map((m) => (m === "" ? c : [c, m].join("/")))),
    l && g.push(...f),
    g.map((m) => (r.startsWith("/") && m === "" ? "/" : m))
  );
}
function Mg(r) {
  r.sort((n, i) =>
    n.score !== i.score
      ? i.score - n.score
      : Wg(
          n.routesMeta.map((o) => o.childrenIndex),
          i.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
var Fg = /^:[\w-]+$/,
  Ug = 3,
  zg = 2,
  Bg = 1,
  Hg = 10,
  $g = -2,
  Xf = (r) => r === "*";
function Vg(r, n) {
  let i = r.split("/"),
    o = i.length;
  return (
    i.some(Xf) && (o += $g),
    n && (o += zg),
    i
      .filter((l) => !Xf(l))
      .reduce((l, c) => l + (Fg.test(c) ? Ug : c === "" ? Bg : Hg), o)
  );
}
function Wg(r, n) {
  return r.length === n.length && r.slice(0, -1).every((o, l) => o === n[l])
    ? r[r.length - 1] - n[n.length - 1]
    : 0;
}
function qg(r, n, i = !1) {
  let { routesMeta: o } = r,
    l = {},
    c = "/",
    f = [];
  for (let g = 0; g < o.length; ++g) {
    let m = o[g],
      y = g === o.length - 1,
      w = c === "/" ? n : n.slice(c.length) || "/",
      _ = yo(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: y },
        w
      ),
      E = m.route;
    if (
      (!_ &&
        y &&
        i &&
        !o[o.length - 1].route.index &&
        (_ = yo(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          w
        )),
      !_)
    )
      return null;
    Object.assign(l, _.params),
      f.push({
        params: l,
        pathname: rn([c, _.pathname]),
        pathnameBase: Xg(rn([c, _.pathnameBase])),
        route: E,
      }),
      _.pathnameBase !== "/" && (c = rn([c, _.pathnameBase]));
  }
  return f;
}
function yo(r, n) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, o] = Kg(r.path, r.caseSensitive, r.end),
    l = n.match(i);
  if (!l) return null;
  let c = l[0],
    f = c.replace(/(.)\/+$/, "$1"),
    g = l.slice(1);
  return {
    params: o.reduce((y, { paramName: w, isOptional: _ }, E) => {
      if (w === "*") {
        let k = g[E] || "";
        f = c.slice(0, c.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const O = g[E];
      return (
        _ && !O ? (y[w] = void 0) : (y[w] = (O || "").replace(/%2F/g, "/")), y
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: r,
  };
}
function Kg(r, n = !1, i = !0) {
  It(
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
          (f, g, m) => (
            o.push({ paramName: g, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
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
function Gg(r) {
  try {
    return r
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      It(
        !1,
        `The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
      ),
      r
    );
  }
}
function On(r, n) {
  if (n === "/") return r;
  if (!r.toLowerCase().startsWith(n.toLowerCase())) return null;
  let i = n.endsWith("/") ? n.length - 1 : n.length,
    o = r.charAt(i);
  return o && o !== "/" ? null : r.slice(i) || "/";
}
function Jg(r, n = "/") {
  let {
    pathname: i,
    search: o = "",
    hash: l = "",
  } = typeof r == "string" ? Or(r) : r;
  return {
    pathname: i ? (i.startsWith("/") ? i : Qg(i, n)) : n,
    search: Zg(o),
    hash: ey(l),
  };
}
function Qg(r, n) {
  let i = n.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((l) => {
      l === ".." ? i.length > 1 && i.pop() : l !== "." && i.push(l);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function Ul(r, n, i, o) {
  return `Cannot include a '${r}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Yg(r) {
  return r.filter(
    (n, i) => i === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function ku(r) {
  let n = Yg(r);
  return n.map((i, o) => (o === n.length - 1 ? i.pathname : i.pathnameBase));
}
function Su(r, n, i, o = !1) {
  let l;
  typeof r == "string"
    ? (l = Or(r))
    : ((l = { ...r }),
      Ee(
        !l.pathname || !l.pathname.includes("?"),
        Ul("?", "pathname", "search", l)
      ),
      Ee(
        !l.pathname || !l.pathname.includes("#"),
        Ul("#", "pathname", "hash", l)
      ),
      Ee(!l.search || !l.search.includes("#"), Ul("#", "search", "hash", l)));
  let c = r === "" || l.pathname === "",
    f = c ? "/" : l.pathname,
    g;
  if (f == null) g = i;
  else {
    let _ = n.length - 1;
    if (!o && f.startsWith("..")) {
      let E = f.split("/");
      for (; E[0] === ".."; ) E.shift(), (_ -= 1);
      l.pathname = E.join("/");
    }
    g = _ >= 0 ? n[_] : "/";
  }
  let m = Jg(l, g),
    y = f && f !== "/" && f.endsWith("/"),
    w = (c || f === ".") && i.endsWith("/");
  return !m.pathname.endsWith("/") && (y || w) && (m.pathname += "/"), m;
}
var rn = (r) => r.join("/").replace(/\/\/+/g, "/"),
  Xg = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Zg = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  ey = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r);
function ty(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
var Kh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Kh);
var ny = ["GET", ...Kh];
new Set(ny);
var Lr = C.createContext(null);
Lr.displayName = "DataRouter";
var bo = C.createContext(null);
bo.displayName = "DataRouterState";
var Gh = C.createContext({ isTransitioning: !1 });
Gh.displayName = "ViewTransition";
var ry = C.createContext(new Map());
ry.displayName = "Fetchers";
var iy = C.createContext(null);
iy.displayName = "Await";
var Rt = C.createContext(null);
Rt.displayName = "Navigation";
var Mi = C.createContext(null);
Mi.displayName = "Location";
var Vt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Vt.displayName = "Route";
var Eu = C.createContext(null);
Eu.displayName = "RouteError";
function sy(r, { relative: n } = {}) {
  Ee(
    Dr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: o } = C.useContext(Rt),
    { hash: l, pathname: c, search: f } = Fi(r, { relative: n }),
    g = c;
  return (
    i !== "/" && (g = c === "/" ? i : rn([i, c])),
    o.createHref({ pathname: g, search: f, hash: l })
  );
}
function Dr() {
  return C.useContext(Mi) != null;
}
function ln() {
  return (
    Ee(
      Dr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    C.useContext(Mi).location
  );
}
var Jh =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Qh(r) {
  C.useContext(Rt).static || C.useLayoutEffect(r);
}
function Io() {
  let { isDataRoute: r } = C.useContext(Vt);
  return r ? vy() : oy();
}
function oy() {
  Ee(
    Dr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = C.useContext(Lr),
    { basename: n, navigator: i } = C.useContext(Rt),
    { matches: o } = C.useContext(Vt),
    { pathname: l } = ln(),
    c = JSON.stringify(ku(o)),
    f = C.useRef(!1);
  return (
    Qh(() => {
      f.current = !0;
    }),
    C.useCallback(
      (m, y = {}) => {
        if ((It(f.current, Jh), !f.current)) return;
        if (typeof m == "number") {
          i.go(m);
          return;
        }
        let w = Su(m, JSON.parse(c), l, y.relative === "path");
        r == null &&
          n !== "/" &&
          (w.pathname = w.pathname === "/" ? n : rn([n, w.pathname])),
          (y.replace ? i.replace : i.push)(w, y.state, y);
      },
      [n, i, c, l, r]
    )
  );
}
C.createContext(null);
function Fi(r, { relative: n } = {}) {
  let { matches: i } = C.useContext(Vt),
    { pathname: o } = ln(),
    l = JSON.stringify(ku(i));
  return C.useMemo(() => Su(r, JSON.parse(l), o, n === "path"), [r, l, o, n]);
}
function ay(r, n) {
  return Yh(r, n);
}
function Yh(r, n, i, o) {
  var A;
  Ee(
    Dr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = C.useContext(Rt),
    { matches: c } = C.useContext(Vt),
    f = c[c.length - 1],
    g = f ? f.params : {},
    m = f ? f.pathname : "/",
    y = f ? f.pathnameBase : "/",
    w = f && f.route;
  {
    let F = (w && w.path) || "";
    Xh(
      m,
      !w || F.endsWith("*") || F.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${
        F === "/" ? "*" : `${F}/*`
      }">.`
    );
  }
  let _ = ln(),
    E;
  if (n) {
    let F = typeof n == "string" ? Or(n) : n;
    Ee(
      y === "/" || ((A = F.pathname) == null ? void 0 : A.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${F.pathname}" was given in the \`location\` prop.`
    ),
      (E = F);
  } else E = _;
  let O = E.pathname || "/",
    k = O;
  if (y !== "/") {
    let F = y.replace(/^\//, "").split("/");
    k = "/" + O.replace(/^\//, "").split("/").slice(F.length).join("/");
  }
  let R = Vh(r, { pathname: k });
  It(
    w || R != null,
    `No routes matched location "${E.pathname}${E.search}${E.hash}" `
  ),
    It(
      R == null ||
        R[R.length - 1].route.element !== void 0 ||
        R[R.length - 1].route.Component !== void 0 ||
        R[R.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let b = fy(
    R &&
      R.map((F) =>
        Object.assign({}, F, {
          params: Object.assign({}, g, F.params),
          pathname: rn([
            y,
            l.encodeLocation
              ? l.encodeLocation(F.pathname).pathname
              : F.pathname,
          ]),
          pathnameBase:
            F.pathnameBase === "/"
              ? y
              : rn([
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
  return n && b
    ? C.createElement(
        Mi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...E,
            },
            navigationType: "POP",
          },
        },
        b
      )
    : b;
}
function ly() {
  let r = yy(),
    n = ty(r)
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
    (f = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, n),
      i ? C.createElement("pre", { style: l }, i) : null,
      f
    )
  );
}
var uy = C.createElement(ly, null),
  cy = class extends C.Component {
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
        ? C.createElement(
            Vt.Provider,
            { value: this.props.routeContext },
            C.createElement(Eu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function dy({ routeContext: r, match: n, children: i }) {
  let o = C.useContext(Lr);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Vt.Provider, { value: r }, i)
  );
}
function fy(r, n = [], i = null, o = null) {
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
    let m = l.findIndex(
      (y) => y.route.id && (c == null ? void 0 : c[y.route.id]) !== void 0
    );
    Ee(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, m + 1)));
  }
  let f = !1,
    g = -1;
  if (i)
    for (let m = 0; m < l.length; m++) {
      let y = l[m];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (g = m),
        y.route.id)
      ) {
        let { loaderData: w, errors: _ } = i,
          E =
            y.route.loader &&
            !w.hasOwnProperty(y.route.id) &&
            (!_ || _[y.route.id] === void 0);
        if (y.route.lazy || E) {
          (f = !0), g >= 0 ? (l = l.slice(0, g + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((m, y, w) => {
    let _,
      E = !1,
      O = null,
      k = null;
    i &&
      ((_ = c && y.route.id ? c[y.route.id] : void 0),
      (O = y.route.errorElement || uy),
      f &&
        (g < 0 && w === 0
          ? (Xh(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (E = !0),
            (k = null))
          : g === w &&
            ((E = !0), (k = y.route.hydrateFallbackElement || null))));
    let R = n.concat(l.slice(0, w + 1)),
      b = () => {
        let A;
        return (
          _
            ? (A = O)
            : E
            ? (A = k)
            : y.route.Component
            ? (A = C.createElement(y.route.Component, null))
            : y.route.element
            ? (A = y.route.element)
            : (A = m),
          C.createElement(dy, {
            match: y,
            routeContext: { outlet: m, matches: R, isDataRoute: i != null },
            children: A,
          })
        );
      };
    return i && (y.route.ErrorBoundary || y.route.errorElement || w === 0)
      ? C.createElement(cy, {
          location: i.location,
          revalidation: i.revalidation,
          component: O,
          error: _,
          children: b(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
        })
      : b();
  }, null);
}
function _u(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hy(r) {
  let n = C.useContext(Lr);
  return Ee(n, _u(r)), n;
}
function py(r) {
  let n = C.useContext(bo);
  return Ee(n, _u(r)), n;
}
function my(r) {
  let n = C.useContext(Vt);
  return Ee(n, _u(r)), n;
}
function Cu(r) {
  let n = my(r),
    i = n.matches[n.matches.length - 1];
  return (
    Ee(
      i.route.id,
      `${r} can only be used on routes that contain a unique "id"`
    ),
    i.route.id
  );
}
function gy() {
  return Cu("useRouteId");
}
function yy() {
  var o;
  let r = C.useContext(Eu),
    n = py("useRouteError"),
    i = Cu("useRouteError");
  return r !== void 0 ? r : (o = n.errors) == null ? void 0 : o[i];
}
function vy() {
  let { router: r } = hy("useNavigate"),
    n = Cu("useNavigate"),
    i = C.useRef(!1);
  return (
    Qh(() => {
      i.current = !0;
    }),
    C.useCallback(
      async (l, c = {}) => {
        It(i.current, Jh),
          i.current &&
            (typeof l == "number"
              ? r.navigate(l)
              : await r.navigate(l, { fromRouteId: n, ...c }));
      },
      [r, n]
    )
  );
}
var Zf = {};
function Xh(r, n, i) {
  !n && !Zf[r] && ((Zf[r] = !0), It(!1, i));
}
C.memo(wy);
function wy({ routes: r, future: n, state: i }) {
  return Yh(r, void 0, i, n);
}
function zl({ to: r, replace: n, state: i, relative: o }) {
  Ee(
    Dr(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: l } = C.useContext(Rt);
  It(
    !l,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: c } = C.useContext(Vt),
    { pathname: f } = ln(),
    g = Io(),
    m = Su(r, ku(c), f, o === "path"),
    y = JSON.stringify(m);
  return (
    C.useEffect(() => {
      g(JSON.parse(y), { replace: n, state: i, relative: o });
    }, [g, y, o, n, i]),
    null
  );
}
function nu(r) {
  Ee(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function xy({
  basename: r = "/",
  children: n = null,
  location: i,
  navigationType: o = "POP",
  navigator: l,
  static: c = !1,
}) {
  Ee(
    !Dr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = r.replace(/^\/*/, "/"),
    g = C.useMemo(
      () => ({ basename: f, navigator: l, static: c, future: {} }),
      [f, l, c]
    );
  typeof i == "string" && (i = Or(i));
  let {
      pathname: m = "/",
      search: y = "",
      hash: w = "",
      state: _ = null,
      key: E = "default",
    } = i,
    O = C.useMemo(() => {
      let k = On(m, f);
      return k == null
        ? null
        : {
            location: { pathname: k, search: y, hash: w, state: _, key: E },
            navigationType: o,
          };
    }, [f, m, y, w, _, E, o]);
  return (
    It(
      O != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    O == null
      ? null
      : C.createElement(
          Rt.Provider,
          { value: g },
          C.createElement(Mi.Provider, { children: n, value: O })
        )
  );
}
function ky({ children: r, location: n }) {
  return ay(ru(r), n);
}
function ru(r, n = []) {
  let i = [];
  return (
    C.Children.forEach(r, (o, l) => {
      if (!C.isValidElement(o)) return;
      let c = [...n, l];
      if (o.type === C.Fragment) {
        i.push.apply(i, ru(o.props.children, c));
        return;
      }
      Ee(
        o.type === nu,
        `[${
          typeof o.type == "string" ? o.type : o.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ee(
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
      o.props.children && (f.children = ru(o.props.children, c)), i.push(f);
    }),
    i
  );
}
var oo = "get",
  ao = "application/x-www-form-urlencoded";
function Ro(r) {
  return r != null && typeof r.tagName == "string";
}
function Sy(r) {
  return Ro(r) && r.tagName.toLowerCase() === "button";
}
function Ey(r) {
  return Ro(r) && r.tagName.toLowerCase() === "form";
}
function _y(r) {
  return Ro(r) && r.tagName.toLowerCase() === "input";
}
function Cy(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Ny(r, n) {
  return r.button === 0 && (!n || n === "_self") && !Cy(r);
}
var ro = null;
function by() {
  if (ro === null)
    try {
      new FormData(document.createElement("form"), 0), (ro = !1);
    } catch {
      ro = !0;
    }
  return ro;
}
var Iy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Bl(r) {
  return r != null && !Iy.has(r)
    ? (It(
        !1,
        `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ao}"`
      ),
      null)
    : r;
}
function Ry(r, n) {
  let i, o, l, c, f;
  if (Ey(r)) {
    let g = r.getAttribute("action");
    (o = g ? On(g, n) : null),
      (i = r.getAttribute("method") || oo),
      (l = Bl(r.getAttribute("enctype")) || ao),
      (c = new FormData(r));
  } else if (Sy(r) || (_y(r) && (r.type === "submit" || r.type === "image"))) {
    let g = r.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = r.getAttribute("formaction") || g.getAttribute("action");
    if (
      ((o = m ? On(m, n) : null),
      (i = r.getAttribute("formmethod") || g.getAttribute("method") || oo),
      (l =
        Bl(r.getAttribute("formenctype")) ||
        Bl(g.getAttribute("enctype")) ||
        ao),
      (c = new FormData(g, r)),
      !by())
    ) {
      let { name: y, type: w, value: _ } = r;
      if (w === "image") {
        let E = y ? `${y}.` : "";
        c.append(`${E}x`, "0"), c.append(`${E}y`, "0");
      } else y && c.append(y, _);
    }
  } else {
    if (Ro(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (i = oo), (o = null), (l = ao), (f = r);
  }
  return (
    c && l === "text/plain" && ((f = c), (c = void 0)),
    { action: o, method: i.toLowerCase(), encType: l, formData: c, body: f }
  );
}
function Nu(r, n) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(n);
}
async function Ty(r, n) {
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
function Py(r) {
  return r == null
    ? !1
    : r.href == null
    ? r.rel === "preload" &&
      typeof r.imageSrcSet == "string" &&
      typeof r.imageSizes == "string"
    : typeof r.rel == "string" && typeof r.href == "string";
}
async function jy(r, n, i) {
  let o = await Promise.all(
    r.map(async (l) => {
      let c = n.routes[l.route.id];
      if (c) {
        let f = await Ty(c, i);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return Dy(
    o
      .flat(1)
      .filter(Py)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function eh(r, n, i, o, l, c) {
  let f = (m, y) => (i[y] ? m.route.id !== i[y].route.id : !0),
    g = (m, y) => {
      var w;
      return (
        i[y].pathname !== m.pathname ||
        (((w = i[y].route.path) == null ? void 0 : w.endsWith("*")) &&
          i[y].params["*"] !== m.params["*"])
      );
    };
  return c === "assets"
    ? n.filter((m, y) => f(m, y) || g(m, y))
    : c === "data"
    ? n.filter((m, y) => {
        var _;
        let w = o.routes[m.route.id];
        if (!w || !w.hasLoader) return !1;
        if (f(m, y) || g(m, y)) return !0;
        if (m.route.shouldRevalidate) {
          let E = m.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((_ = i[0]) == null ? void 0 : _.params) || {},
            nextUrl: new URL(r, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof E == "boolean") return E;
        }
        return !0;
      })
    : [];
}
function Ay(r, n) {
  return Oy(
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
function Oy(r) {
  return [...new Set(r)];
}
function Ly(r) {
  let n = {},
    i = Object.keys(r).sort();
  for (let o of i) n[o] = r[o];
  return n;
}
function Dy(r, n) {
  let i = new Set();
  return (
    new Set(n),
    r.reduce((o, l) => {
      let c = JSON.stringify(Ly(l));
      return i.has(c) || (i.add(c), o.push({ key: c, link: l })), o;
    }, [])
  );
}
function My(r) {
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
function Fy() {
  let r = C.useContext(Lr);
  return (
    Nu(
      r,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    r
  );
}
function Uy() {
  let r = C.useContext(bo);
  return (
    Nu(
      r,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    r
  );
}
var bu = C.createContext(void 0);
bu.displayName = "FrameworkContext";
function Zh() {
  let r = C.useContext(bu);
  return (
    Nu(r, "You must render this element inside a <HydratedRouter> element"), r
  );
}
function zy(r, n) {
  let i = C.useContext(bu),
    [o, l] = C.useState(!1),
    [c, f] = C.useState(!1),
    {
      onFocus: g,
      onBlur: m,
      onMouseEnter: y,
      onMouseLeave: w,
      onTouchStart: _,
    } = n,
    E = C.useRef(null);
  C.useEffect(() => {
    if ((r === "render" && f(!0), r === "viewport")) {
      let R = (A) => {
          A.forEach((F) => {
            f(F.isIntersecting);
          });
        },
        b = new IntersectionObserver(R, { threshold: 0.5 });
      return (
        E.current && b.observe(E.current),
        () => {
          b.disconnect();
        }
      );
    }
  }, [r]),
    C.useEffect(() => {
      if (o) {
        let R = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(R);
        };
      }
    }, [o]);
  let O = () => {
      l(!0);
    },
    k = () => {
      l(!1), f(!1);
    };
  return i
    ? r !== "intent"
      ? [c, E, {}]
      : [
          c,
          E,
          {
            onFocus: bi(g, O),
            onBlur: bi(m, k),
            onMouseEnter: bi(y, O),
            onMouseLeave: bi(w, k),
            onTouchStart: bi(_, O),
          },
        ]
    : [!1, E, {}];
}
function bi(r, n) {
  return (i) => {
    r && r(i), i.defaultPrevented || n(i);
  };
}
function By({ page: r, ...n }) {
  let { router: i } = Fy(),
    o = C.useMemo(() => Vh(i.routes, r, i.basename), [i.routes, r, i.basename]);
  return o
    ? C.createElement($y, { page: r, matches: o, ...n })
    : (console.warn(`Tried to prefetch ${r} but no routes matched.`), null);
}
function Hy(r) {
  let { manifest: n, routeModules: i } = Zh(),
    [o, l] = C.useState([]);
  return (
    C.useEffect(() => {
      let c = !1;
      return (
        jy(r, n, i).then((f) => {
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
function $y({ page: r, matches: n, ...i }) {
  let o = ln(),
    { manifest: l, routeModules: c } = Zh(),
    { loaderData: f, matches: g } = Uy(),
    m = C.useMemo(() => eh(r, n, g, l, o, "data"), [r, n, g, l, o]),
    y = C.useMemo(() => eh(r, n, g, l, o, "assets"), [r, n, g, l, o]),
    w = C.useMemo(() => {
      if (r === o.pathname + o.search + o.hash) return [];
      let O = new Set(),
        k = !1;
      if (
        (n.forEach((b) => {
          var F;
          let A = l.routes[b.route.id];
          !A ||
            !A.hasLoader ||
            ((!m.some(($) => $.route.id === b.route.id) &&
              b.route.id in f &&
              (F = c[b.route.id]) != null &&
              F.shouldRevalidate) ||
            A.hasClientLoader
              ? (k = !0)
              : O.add(b.route.id));
        }),
        O.size === 0)
      )
        return [];
      let R = My(r);
      return (
        k &&
          O.size > 0 &&
          R.searchParams.set(
            "_routes",
            n
              .filter((b) => O.has(b.route.id))
              .map((b) => b.route.id)
              .join(",")
          ),
        [R.pathname + R.search]
      );
    }, [f, o, l, m, n, r, c]),
    _ = C.useMemo(() => Ay(y, l), [y, l]),
    E = Hy(y);
  return C.createElement(
    C.Fragment,
    null,
    w.map((O) =>
      C.createElement("link", {
        key: O,
        rel: "prefetch",
        as: "fetch",
        href: O,
        ...i,
      })
    ),
    _.map((O) =>
      C.createElement("link", { key: O, rel: "modulepreload", href: O, ...i })
    ),
    E.map(({ key: O, link: k }) => C.createElement("link", { key: O, ...k }))
  );
}
function Vy(...r) {
  return (n) => {
    r.forEach((i) => {
      typeof i == "function" ? i(n) : i != null && (i.current = n);
    });
  };
}
var ep =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ep && (window.__reactRouterVersion = "7.0.2");
} catch {}
function Wy({ basename: r, children: n, window: i }) {
  let o = C.useRef();
  o.current == null && (o.current = Ag({ window: i, v5Compat: !0 }));
  let l = o.current,
    [c, f] = C.useState({ action: l.action, location: l.location }),
    g = C.useCallback(
      (m) => {
        C.startTransition(() => f(m));
      },
      [f]
    );
  return (
    C.useLayoutEffect(() => l.listen(g), [l, g]),
    C.createElement(xy, {
      basename: r,
      children: n,
      location: c.location,
      navigationType: c.action,
      navigator: l,
    })
  );
}
var tp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ht = C.forwardRef(function (
    {
      onClick: n,
      discover: i = "render",
      prefetch: o = "none",
      relative: l,
      reloadDocument: c,
      replace: f,
      state: g,
      target: m,
      to: y,
      preventScrollReset: w,
      viewTransition: _,
      ...E
    },
    O
  ) {
    let { basename: k } = C.useContext(Rt),
      R = typeof y == "string" && tp.test(y),
      b,
      A = !1;
    if (typeof y == "string" && R && ((b = y), ep))
      try {
        let he = new URL(window.location.href),
          Pe = y.startsWith("//") ? new URL(he.protocol + y) : new URL(y),
          Pt = On(Pe.pathname, k);
        Pe.origin === he.origin && Pt != null
          ? (y = Pt + Pe.search + Pe.hash)
          : (A = !0);
      } catch {
        It(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let F = sy(y, { relative: l }),
      [$, Q, B] = zy(o, E),
      se = Jy(y, {
        replace: f,
        state: g,
        target: m,
        preventScrollReset: w,
        relative: l,
        viewTransition: _,
      });
    function ae(he) {
      n && n(he), he.defaultPrevented || se(he);
    }
    let fe = C.createElement("a", {
      ...E,
      ...B,
      href: b || F,
      onClick: A || c ? n : ae,
      ref: Vy(O, Q),
      target: m,
      "data-discover": !R && i === "render" ? "true" : void 0,
    });
    return $ && !R
      ? C.createElement(C.Fragment, null, fe, C.createElement(By, { page: F }))
      : fe;
  });
Ht.displayName = "Link";
var qy = C.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: i = !1,
    className: o = "",
    end: l = !1,
    style: c,
    to: f,
    viewTransition: g,
    children: m,
    ...y
  },
  w
) {
  let _ = Fi(f, { relative: y.relative }),
    E = ln(),
    O = C.useContext(bo),
    { navigator: k, basename: R } = C.useContext(Rt),
    b = O != null && ev(_) && g === !0,
    A = k.encodeLocation ? k.encodeLocation(_).pathname : _.pathname,
    F = E.pathname,
    $ =
      O && O.navigation && O.navigation.location
        ? O.navigation.location.pathname
        : null;
  i ||
    ((F = F.toLowerCase()),
    ($ = $ ? $.toLowerCase() : null),
    (A = A.toLowerCase())),
    $ && R && ($ = On($, R) || $);
  const Q = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let B = F === A || (!l && F.startsWith(A) && F.charAt(Q) === "/"),
    se =
      $ != null &&
      ($ === A || (!l && $.startsWith(A) && $.charAt(A.length) === "/")),
    ae = { isActive: B, isPending: se, isTransitioning: b },
    fe = B ? n : void 0,
    he;
  typeof o == "function"
    ? (he = o(ae))
    : (he = [
        o,
        B ? "active" : null,
        se ? "pending" : null,
        b ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Pe = typeof c == "function" ? c(ae) : c;
  return C.createElement(
    Ht,
    {
      ...y,
      "aria-current": fe,
      className: he,
      ref: w,
      style: Pe,
      to: f,
      viewTransition: g,
    },
    typeof m == "function" ? m(ae) : m
  );
});
qy.displayName = "NavLink";
var Ky = C.forwardRef(
  (
    {
      discover: r = "render",
      fetcherKey: n,
      navigate: i,
      reloadDocument: o,
      replace: l,
      state: c,
      method: f = oo,
      action: g,
      onSubmit: m,
      relative: y,
      preventScrollReset: w,
      viewTransition: _,
      ...E
    },
    O
  ) => {
    let k = Xy(),
      R = Zy(g, { relative: y }),
      b = f.toLowerCase() === "get" ? "get" : "post",
      A = typeof g == "string" && tp.test(g),
      F = ($) => {
        if ((m && m($), $.defaultPrevented)) return;
        $.preventDefault();
        let Q = $.nativeEvent.submitter,
          B = (Q == null ? void 0 : Q.getAttribute("formmethod")) || f;
        k(Q || $.currentTarget, {
          fetcherKey: n,
          method: B,
          navigate: i,
          replace: l,
          state: c,
          relative: y,
          preventScrollReset: w,
          viewTransition: _,
        });
      };
    return C.createElement("form", {
      ref: O,
      method: b,
      action: R,
      onSubmit: o ? m : F,
      ...E,
      "data-discover": !A && r === "render" ? "true" : void 0,
    });
  }
);
Ky.displayName = "Form";
function Gy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function np(r) {
  let n = C.useContext(Lr);
  return Ee(n, Gy(r)), n;
}
function Jy(
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
  let g = Io(),
    m = ln(),
    y = Fi(r, { relative: c });
  return C.useCallback(
    (w) => {
      if (Ny(w, n)) {
        w.preventDefault();
        let _ = i !== void 0 ? i : Ti(m) === Ti(y);
        g(r, {
          replace: _,
          state: o,
          preventScrollReset: l,
          relative: c,
          viewTransition: f,
        });
      }
    },
    [m, g, y, i, o, n, r, l, c, f]
  );
}
var Qy = 0,
  Yy = () => `__${String(++Qy)}__`;
function Xy() {
  let { router: r } = np("useSubmit"),
    { basename: n } = C.useContext(Rt),
    i = gy();
  return C.useCallback(
    async (o, l = {}) => {
      let { action: c, method: f, encType: g, formData: m, body: y } = Ry(o, n);
      if (l.navigate === !1) {
        let w = l.fetcherKey || Yy();
        await r.fetch(w, i, l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: y,
          formMethod: l.method || f,
          formEncType: l.encType || g,
          flushSync: l.flushSync,
        });
      } else
        await r.navigate(l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
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
function Zy(r, { relative: n } = {}) {
  let { basename: i } = C.useContext(Rt),
    o = C.useContext(Vt);
  Ee(o, "useFormAction must be used inside a RouteContext");
  let [l] = o.matches.slice(-1),
    c = { ...Fi(r || ".", { relative: n }) },
    f = ln();
  if (r == null) {
    c.search = f.search;
    let g = new URLSearchParams(c.search),
      m = g.getAll("index");
    if (m.some((w) => w === "")) {
      g.delete("index"),
        m.filter((_) => _).forEach((_) => g.append("index", _));
      let w = g.toString();
      c.search = w ? `?${w}` : "";
    }
  }
  return (
    (!r || r === ".") &&
      l.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (c.pathname = c.pathname === "/" ? i : rn([i, c.pathname])),
    Ti(c)
  );
}
function ev(r, n = {}) {
  let i = C.useContext(Gh);
  Ee(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = np("useViewTransitionState"),
    l = Fi(r, { relative: n.relative });
  if (!i.isTransitioning) return !1;
  let c = On(i.currentLocation.pathname, o) || i.currentLocation.pathname,
    f = On(i.nextLocation.pathname, o) || i.nextLocation.pathname;
  return yo(l.pathname, f) != null || yo(l.pathname, c) != null;
}
new TextEncoder();
const tv = [
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
  nv = () =>
    h.jsx(h.Fragment, {
      children: h.jsxs("section", {
        className:
          "h-[900px] bg-hero max-md:h-[700px] max-md:pl-7 flex bg-center py-20 gap-2 mr-4 p-7 ",
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
                h.jsx(Ht, {
                  to: "/",
                  className:
                    "self-start uppercase font-semibold border-b-2 border-primary",
                  children: "Discover More",
                }),
              ],
            }),
          }),
          tv.map((r, n) =>
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
  rv = () =>
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
function rp(r, n) {
  return function () {
    return r.apply(n, arguments);
  };
}
const { toString: iv } = Object.prototype,
  { getPrototypeOf: Iu } = Object,
  To = ((r) => (n) => {
    const i = iv.call(n);
    return r[i] || (r[i] = i.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Tt = (r) => ((r = r.toLowerCase()), (n) => To(n) === r),
  Po = (r) => (n) => typeof n === r,
  { isArray: Mr } = Array,
  Pi = Po("undefined");
function sv(r) {
  return (
    r !== null &&
    !Pi(r) &&
    r.constructor !== null &&
    !Pi(r.constructor) &&
    ut(r.constructor.isBuffer) &&
    r.constructor.isBuffer(r)
  );
}
const ip = Tt("ArrayBuffer");
function ov(r) {
  let n;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(r))
      : (n = r && r.buffer && ip(r.buffer)),
    n
  );
}
const av = Po("string"),
  ut = Po("function"),
  sp = Po("number"),
  jo = (r) => r !== null && typeof r == "object",
  lv = (r) => r === !0 || r === !1,
  lo = (r) => {
    if (To(r) !== "object") return !1;
    const n = Iu(r);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(Symbol.toStringTag in r) &&
      !(Symbol.iterator in r)
    );
  },
  uv = Tt("Date"),
  cv = Tt("File"),
  dv = Tt("Blob"),
  fv = Tt("FileList"),
  hv = (r) => jo(r) && ut(r.pipe),
  pv = (r) => {
    let n;
    return (
      r &&
      ((typeof FormData == "function" && r instanceof FormData) ||
        (ut(r.append) &&
          ((n = To(r)) === "formdata" ||
            (n === "object" &&
              ut(r.toString) &&
              r.toString() === "[object FormData]"))))
    );
  },
  mv = Tt("URLSearchParams"),
  [gv, yv, vv, wv] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Tt
  ),
  xv = (r) =>
    r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ui(r, n, { allOwnKeys: i = !1 } = {}) {
  if (r === null || typeof r > "u") return;
  let o, l;
  if ((typeof r != "object" && (r = [r]), Mr(r)))
    for (o = 0, l = r.length; o < l; o++) n.call(null, r[o], o, r);
  else {
    const c = i ? Object.getOwnPropertyNames(r) : Object.keys(r),
      f = c.length;
    let g;
    for (o = 0; o < f; o++) (g = c[o]), n.call(null, r[g], g, r);
  }
}
function op(r, n) {
  n = n.toLowerCase();
  const i = Object.keys(r);
  let o = i.length,
    l;
  for (; o-- > 0; ) if (((l = i[o]), n === l.toLowerCase())) return l;
  return null;
}
const Qn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  ap = (r) => !Pi(r) && r !== Qn;
function iu() {
  const { caseless: r } = (ap(this) && this) || {},
    n = {},
    i = (o, l) => {
      const c = (r && op(n, l)) || l;
      lo(n[c]) && lo(o)
        ? (n[c] = iu(n[c], o))
        : lo(o)
        ? (n[c] = iu({}, o))
        : Mr(o)
        ? (n[c] = o.slice())
        : (n[c] = o);
    };
  for (let o = 0, l = arguments.length; o < l; o++)
    arguments[o] && Ui(arguments[o], i);
  return n;
}
const kv = (r, n, i, { allOwnKeys: o } = {}) => (
    Ui(
      n,
      (l, c) => {
        i && ut(l) ? (r[c] = rp(l, i)) : (r[c] = l);
      },
      { allOwnKeys: o }
    ),
    r
  ),
  Sv = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
  Ev = (r, n, i, o) => {
    (r.prototype = Object.create(n.prototype, o)),
      (r.prototype.constructor = r),
      Object.defineProperty(r, "super", { value: n.prototype }),
      i && Object.assign(r.prototype, i);
  },
  _v = (r, n, i, o) => {
    let l, c, f;
    const g = {};
    if (((n = n || {}), r == null)) return n;
    do {
      for (l = Object.getOwnPropertyNames(r), c = l.length; c-- > 0; )
        (f = l[c]), (!o || o(f, r, n)) && !g[f] && ((n[f] = r[f]), (g[f] = !0));
      r = i !== !1 && Iu(r);
    } while (r && (!i || i(r, n)) && r !== Object.prototype);
    return n;
  },
  Cv = (r, n, i) => {
    (r = String(r)),
      (i === void 0 || i > r.length) && (i = r.length),
      (i -= n.length);
    const o = r.indexOf(n, i);
    return o !== -1 && o === i;
  },
  Nv = (r) => {
    if (!r) return null;
    if (Mr(r)) return r;
    let n = r.length;
    if (!sp(n)) return null;
    const i = new Array(n);
    for (; n-- > 0; ) i[n] = r[n];
    return i;
  },
  bv = (
    (r) => (n) =>
      r && n instanceof r
  )(typeof Uint8Array < "u" && Iu(Uint8Array)),
  Iv = (r, n) => {
    const o = (r && r[Symbol.iterator]).call(r);
    let l;
    for (; (l = o.next()) && !l.done; ) {
      const c = l.value;
      n.call(r, c[0], c[1]);
    }
  },
  Rv = (r, n) => {
    let i;
    const o = [];
    for (; (i = r.exec(n)) !== null; ) o.push(i);
    return o;
  },
  Tv = Tt("HTMLFormElement"),
  Pv = (r) =>
    r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, o, l) {
      return o.toUpperCase() + l;
    }),
  th = (
    ({ hasOwnProperty: r }) =>
    (n, i) =>
      r.call(n, i)
  )(Object.prototype),
  jv = Tt("RegExp"),
  lp = (r, n) => {
    const i = Object.getOwnPropertyDescriptors(r),
      o = {};
    Ui(i, (l, c) => {
      let f;
      (f = n(l, c, r)) !== !1 && (o[c] = f || l);
    }),
      Object.defineProperties(r, o);
  },
  Av = (r) => {
    lp(r, (n, i) => {
      if (ut(r) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
        return !1;
      const o = r[i];
      if (ut(o)) {
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
  Ov = (r, n) => {
    const i = {},
      o = (l) => {
        l.forEach((c) => {
          i[c] = !0;
        });
      };
    return Mr(r) ? o(r) : o(String(r).split(n)), i;
  },
  Lv = () => {},
  Dv = (r, n) => (r != null && Number.isFinite((r = +r)) ? r : n),
  Hl = "abcdefghijklmnopqrstuvwxyz",
  nh = "0123456789",
  up = { DIGIT: nh, ALPHA: Hl, ALPHA_DIGIT: Hl + Hl.toUpperCase() + nh },
  Mv = (r = 16, n = up.ALPHA_DIGIT) => {
    let i = "";
    const { length: o } = n;
    for (; r--; ) i += n[(Math.random() * o) | 0];
    return i;
  };
function Fv(r) {
  return !!(
    r &&
    ut(r.append) &&
    r[Symbol.toStringTag] === "FormData" &&
    r[Symbol.iterator]
  );
}
const Uv = (r) => {
    const n = new Array(10),
      i = (o, l) => {
        if (jo(o)) {
          if (n.indexOf(o) >= 0) return;
          if (!("toJSON" in o)) {
            n[l] = o;
            const c = Mr(o) ? [] : {};
            return (
              Ui(o, (f, g) => {
                const m = i(f, l + 1);
                !Pi(m) && (c[g] = m);
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
  zv = Tt("AsyncFunction"),
  Bv = (r) => r && (jo(r) || ut(r)) && ut(r.then) && ut(r.catch),
  cp = ((r, n) =>
    r
      ? setImmediate
      : n
      ? ((i, o) => (
          Qn.addEventListener(
            "message",
            ({ source: l, data: c }) => {
              l === Qn && c === i && o.length && o.shift()();
            },
            !1
          ),
          (l) => {
            o.push(l), Qn.postMessage(i, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (i) => setTimeout(i))(
    typeof setImmediate == "function",
    ut(Qn.postMessage)
  ),
  Hv =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Qn)
      : (typeof process < "u" && process.nextTick) || cp,
  j = {
    isArray: Mr,
    isArrayBuffer: ip,
    isBuffer: sv,
    isFormData: pv,
    isArrayBufferView: ov,
    isString: av,
    isNumber: sp,
    isBoolean: lv,
    isObject: jo,
    isPlainObject: lo,
    isReadableStream: gv,
    isRequest: yv,
    isResponse: vv,
    isHeaders: wv,
    isUndefined: Pi,
    isDate: uv,
    isFile: cv,
    isBlob: dv,
    isRegExp: jv,
    isFunction: ut,
    isStream: hv,
    isURLSearchParams: mv,
    isTypedArray: bv,
    isFileList: fv,
    forEach: Ui,
    merge: iu,
    extend: kv,
    trim: xv,
    stripBOM: Sv,
    inherits: Ev,
    toFlatObject: _v,
    kindOf: To,
    kindOfTest: Tt,
    endsWith: Cv,
    toArray: Nv,
    forEachEntry: Iv,
    matchAll: Rv,
    isHTMLForm: Tv,
    hasOwnProperty: th,
    hasOwnProp: th,
    reduceDescriptors: lp,
    freezeMethods: Av,
    toObjectSet: Ov,
    toCamelCase: Pv,
    noop: Lv,
    toFiniteNumber: Dv,
    findKey: op,
    global: Qn,
    isContextDefined: ap,
    ALPHABET: up,
    generateString: Mv,
    isSpecCompliantForm: Fv,
    toJSONObject: Uv,
    isAsyncFn: zv,
    isThenable: Bv,
    setImmediate: cp,
    asap: Hv,
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
j.inherits(ne, Error, {
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
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const dp = ne.prototype,
  fp = {};
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
  fp[r] = { value: r };
});
Object.defineProperties(ne, fp);
Object.defineProperty(dp, "isAxiosError", { value: !0 });
ne.from = (r, n, i, o, l, c) => {
  const f = Object.create(dp);
  return (
    j.toFlatObject(
      r,
      f,
      function (m) {
        return m !== Error.prototype;
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
const $v = null;
function su(r) {
  return j.isPlainObject(r) || j.isArray(r);
}
function hp(r) {
  return j.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function rh(r, n, i) {
  return r
    ? r
        .concat(n)
        .map(function (l, c) {
          return (l = hp(l)), !i && c ? "[" + l + "]" : l;
        })
        .join(i ? "." : "")
    : n;
}
function Vv(r) {
  return j.isArray(r) && !r.some(su);
}
const Wv = j.toFlatObject(j, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function Ao(r, n, i) {
  if (!j.isObject(r)) throw new TypeError("target must be an object");
  (n = n || new FormData()),
    (i = j.toFlatObject(
      i,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (R, b) {
        return !j.isUndefined(b[R]);
      }
    ));
  const o = i.metaTokens,
    l = i.visitor || w,
    c = i.dots,
    f = i.indexes,
    m = (i.Blob || (typeof Blob < "u" && Blob)) && j.isSpecCompliantForm(n);
  if (!j.isFunction(l)) throw new TypeError("visitor must be a function");
  function y(k) {
    if (k === null) return "";
    if (j.isDate(k)) return k.toISOString();
    if (!m && j.isBlob(k))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(k) || j.isTypedArray(k)
      ? m && typeof Blob == "function"
        ? new Blob([k])
        : Buffer.from(k)
      : k;
  }
  function w(k, R, b) {
    let A = k;
    if (k && !b && typeof k == "object") {
      if (j.endsWith(R, "{}"))
        (R = o ? R : R.slice(0, -2)), (k = JSON.stringify(k));
      else if (
        (j.isArray(k) && Vv(k)) ||
        ((j.isFileList(k) || j.endsWith(R, "[]")) && (A = j.toArray(k)))
      )
        return (
          (R = hp(R)),
          A.forEach(function ($, Q) {
            !(j.isUndefined($) || $ === null) &&
              n.append(
                f === !0 ? rh([R], Q, c) : f === null ? R : R + "[]",
                y($)
              );
          }),
          !1
        );
    }
    return su(k) ? !0 : (n.append(rh(b, R, c), y(k)), !1);
  }
  const _ = [],
    E = Object.assign(Wv, {
      defaultVisitor: w,
      convertValue: y,
      isVisitable: su,
    });
  function O(k, R) {
    if (!j.isUndefined(k)) {
      if (_.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      _.push(k),
        j.forEach(k, function (A, F) {
          (!(j.isUndefined(A) || A === null) &&
            l.call(n, A, j.isString(F) ? F.trim() : F, R, E)) === !0 &&
            O(A, R ? R.concat(F) : [F]);
        }),
        _.pop();
    }
  }
  if (!j.isObject(r)) throw new TypeError("data must be an object");
  return O(r), n;
}
function ih(r) {
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
function Ru(r, n) {
  (this._pairs = []), r && Ao(r, this, n);
}
const pp = Ru.prototype;
pp.append = function (n, i) {
  this._pairs.push([n, i]);
};
pp.toString = function (n) {
  const i = n
    ? function (o) {
        return n.call(this, o, ih);
      }
    : ih;
  return this._pairs
    .map(function (l) {
      return i(l[0]) + "=" + i(l[1]);
    }, "")
    .join("&");
};
function qv(r) {
  return encodeURIComponent(r)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function mp(r, n, i) {
  if (!n) return r;
  const o = (i && i.encode) || qv;
  j.isFunction(i) && (i = { serialize: i });
  const l = i && i.serialize;
  let c;
  if (
    (l
      ? (c = l(n, i))
      : (c = j.isURLSearchParams(n) ? n.toString() : new Ru(n, i).toString(o)),
    c)
  ) {
    const f = r.indexOf("#");
    f !== -1 && (r = r.slice(0, f)),
      (r += (r.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return r;
}
class sh {
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
    j.forEach(this.handlers, function (o) {
      o !== null && n(o);
    });
  }
}
const gp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Kv = typeof URLSearchParams < "u" ? URLSearchParams : Ru,
  Gv = typeof FormData < "u" ? FormData : null,
  Jv = typeof Blob < "u" ? Blob : null,
  Qv = {
    isBrowser: !0,
    classes: { URLSearchParams: Kv, FormData: Gv, Blob: Jv },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Tu = typeof window < "u" && typeof document < "u",
  ou = (typeof navigator == "object" && navigator) || void 0,
  Yv =
    Tu &&
    (!ou || ["ReactNative", "NativeScript", "NS"].indexOf(ou.product) < 0),
  Xv =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Zv = (Tu && window.location.href) || "http://localhost",
  e1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Tu,
        hasStandardBrowserEnv: Yv,
        hasStandardBrowserWebWorkerEnv: Xv,
        navigator: ou,
        origin: Zv,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  We = { ...e1, ...Qv };
function t1(r, n) {
  return Ao(
    r,
    new We.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (i, o, l, c) {
          return We.isNode && j.isBuffer(i)
            ? (this.append(o, i.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      n
    )
  );
}
function n1(r) {
  return j
    .matchAll(/\w+|\[(\w*)]/g, r)
    .map((n) => (n[0] === "[]" ? "" : n[1] || n[0]));
}
function r1(r) {
  const n = {},
    i = Object.keys(r);
  let o;
  const l = i.length;
  let c;
  for (o = 0; o < l; o++) (c = i[o]), (n[c] = r[c]);
  return n;
}
function yp(r) {
  function n(i, o, l, c) {
    let f = i[c++];
    if (f === "__proto__") return !0;
    const g = Number.isFinite(+f),
      m = c >= i.length;
    return (
      (f = !f && j.isArray(l) ? l.length : f),
      m
        ? (j.hasOwnProp(l, f) ? (l[f] = [l[f], o]) : (l[f] = o), !g)
        : ((!l[f] || !j.isObject(l[f])) && (l[f] = []),
          n(i, o, l[f], c) && j.isArray(l[f]) && (l[f] = r1(l[f])),
          !g)
    );
  }
  if (j.isFormData(r) && j.isFunction(r.entries)) {
    const i = {};
    return (
      j.forEachEntry(r, (o, l) => {
        n(n1(o), l, i, 0);
      }),
      i
    );
  }
  return null;
}
function i1(r, n, i) {
  if (j.isString(r))
    try {
      return (n || JSON.parse)(r), j.trim(r);
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
  return (0, JSON.stringify)(r);
}
const zi = {
  transitional: gp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (n, i) {
      const o = i.getContentType() || "",
        l = o.indexOf("application/json") > -1,
        c = j.isObject(n);
      if ((c && j.isHTMLForm(n) && (n = new FormData(n)), j.isFormData(n)))
        return l ? JSON.stringify(yp(n)) : n;
      if (
        j.isArrayBuffer(n) ||
        j.isBuffer(n) ||
        j.isStream(n) ||
        j.isFile(n) ||
        j.isBlob(n) ||
        j.isReadableStream(n)
      )
        return n;
      if (j.isArrayBufferView(n)) return n.buffer;
      if (j.isURLSearchParams(n))
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
          return t1(n, this.formSerializer).toString();
        if ((g = j.isFileList(n)) || o.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return Ao(
            g ? { "files[]": n } : n,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return c || l ? (i.setContentType("application/json", !1), i1(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const i = this.transitional || zi.transitional,
        o = i && i.forcedJSONParsing,
        l = this.responseType === "json";
      if (j.isResponse(n) || j.isReadableStream(n)) return n;
      if (n && j.isString(n) && ((o && !this.responseType) || l)) {
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
  env: { FormData: We.classes.FormData, Blob: We.classes.Blob },
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
j.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  zi.headers[r] = {};
});
const s1 = j.toObjectSet([
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
  o1 = (r) => {
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
              !(!i || (n[i] && s1[i])) &&
                (i === "set-cookie"
                  ? n[i]
                    ? n[i].push(o)
                    : (n[i] = [o])
                  : (n[i] = n[i] ? n[i] + ", " + o : o));
          }),
      n
    );
  },
  oh = Symbol("internals");
function Ii(r) {
  return r && String(r).trim().toLowerCase();
}
function uo(r) {
  return r === !1 || r == null ? r : j.isArray(r) ? r.map(uo) : String(r);
}
function a1(r) {
  const n = Object.create(null),
    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; (o = i.exec(r)); ) n[o[1]] = o[2];
  return n;
}
const l1 = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function $l(r, n, i, o, l) {
  if (j.isFunction(o)) return o.call(this, n, i);
  if ((l && (n = i), !!j.isString(n))) {
    if (j.isString(o)) return n.indexOf(o) !== -1;
    if (j.isRegExp(o)) return o.test(n);
  }
}
function u1(r) {
  return r
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, i, o) => i.toUpperCase() + o);
}
function c1(r, n) {
  const i = j.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(r, o + i, {
      value: function (l, c, f) {
        return this[o].call(this, n, l, c, f);
      },
      configurable: !0,
    });
  });
}
class nt {
  constructor(n) {
    n && this.set(n);
  }
  set(n, i, o) {
    const l = this;
    function c(g, m, y) {
      const w = Ii(m);
      if (!w) throw new Error("header name must be a non-empty string");
      const _ = j.findKey(l, w);
      (!_ || l[_] === void 0 || y === !0 || (y === void 0 && l[_] !== !1)) &&
        (l[_ || m] = uo(g));
    }
    const f = (g, m) => j.forEach(g, (y, w) => c(y, w, m));
    if (j.isPlainObject(n) || n instanceof this.constructor) f(n, i);
    else if (j.isString(n) && (n = n.trim()) && !l1(n)) f(o1(n), i);
    else if (j.isHeaders(n)) for (const [g, m] of n.entries()) c(m, g, o);
    else n != null && c(i, n, o);
    return this;
  }
  get(n, i) {
    if (((n = Ii(n)), n)) {
      const o = j.findKey(this, n);
      if (o) {
        const l = this[o];
        if (!i) return l;
        if (i === !0) return a1(l);
        if (j.isFunction(i)) return i.call(this, l, o);
        if (j.isRegExp(i)) return i.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, i) {
    if (((n = Ii(n)), n)) {
      const o = j.findKey(this, n);
      return !!(o && this[o] !== void 0 && (!i || $l(this, this[o], o, i)));
    }
    return !1;
  }
  delete(n, i) {
    const o = this;
    let l = !1;
    function c(f) {
      if (((f = Ii(f)), f)) {
        const g = j.findKey(o, f);
        g && (!i || $l(o, o[g], g, i)) && (delete o[g], (l = !0));
      }
    }
    return j.isArray(n) ? n.forEach(c) : c(n), l;
  }
  clear(n) {
    const i = Object.keys(this);
    let o = i.length,
      l = !1;
    for (; o--; ) {
      const c = i[o];
      (!n || $l(this, this[c], c, n, !0)) && (delete this[c], (l = !0));
    }
    return l;
  }
  normalize(n) {
    const i = this,
      o = {};
    return (
      j.forEach(this, (l, c) => {
        const f = j.findKey(o, c);
        if (f) {
          (i[f] = uo(l)), delete i[c];
          return;
        }
        const g = n ? u1(c) : String(c).trim();
        g !== c && delete i[c], (i[g] = uo(l)), (o[g] = !0);
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
      j.forEach(this, (o, l) => {
        o != null && o !== !1 && (i[l] = n && j.isArray(o) ? o.join(", ") : o);
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
    const o = (this[oh] = this[oh] = { accessors: {} }).accessors,
      l = this.prototype;
    function c(f) {
      const g = Ii(f);
      o[g] || (c1(l, f), (o[g] = !0));
    }
    return j.isArray(n) ? n.forEach(c) : c(n), this;
  }
}
nt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
j.reduceDescriptors(nt.prototype, ({ value: r }, n) => {
  let i = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => r,
    set(o) {
      this[i] = o;
    },
  };
});
j.freezeMethods(nt);
function Vl(r, n) {
  const i = this || zi,
    o = n || i,
    l = nt.from(o.headers);
  let c = o.data;
  return (
    j.forEach(r, function (g) {
      c = g.call(i, c, l.normalize(), n ? n.status : void 0);
    }),
    l.normalize(),
    c
  );
}
function vp(r) {
  return !!(r && r.__CANCEL__);
}
function Fr(r, n, i) {
  ne.call(this, r ?? "canceled", ne.ERR_CANCELED, n, i),
    (this.name = "CanceledError");
}
j.inherits(Fr, ne, { __CANCEL__: !0 });
function wp(r, n, i) {
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
function d1(r) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return (n && n[1]) || "";
}
function f1(r, n) {
  r = r || 10;
  const i = new Array(r),
    o = new Array(r);
  let l = 0,
    c = 0,
    f;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (m) {
      const y = Date.now(),
        w = o[c];
      f || (f = y), (i[l] = m), (o[l] = y);
      let _ = c,
        E = 0;
      for (; _ !== l; ) (E += i[_++]), (_ = _ % r);
      if (((l = (l + 1) % r), l === c && (c = (c + 1) % r), y - f < n)) return;
      const O = w && y - w;
      return O ? Math.round((E * 1e3) / O) : void 0;
    }
  );
}
function h1(r, n) {
  let i = 0,
    o = 1e3 / n,
    l,
    c;
  const f = (y, w = Date.now()) => {
    (i = w), (l = null), c && (clearTimeout(c), (c = null)), r.apply(null, y);
  };
  return [
    (...y) => {
      const w = Date.now(),
        _ = w - i;
      _ >= o
        ? f(y, w)
        : ((l = y),
          c ||
            (c = setTimeout(() => {
              (c = null), f(l);
            }, o - _)));
    },
    () => l && f(l),
  ];
}
const vo = (r, n, i = 3) => {
    let o = 0;
    const l = f1(50, 250);
    return h1((c) => {
      const f = c.loaded,
        g = c.lengthComputable ? c.total : void 0,
        m = f - o,
        y = l(m),
        w = f <= g;
      o = f;
      const _ = {
        loaded: f,
        total: g,
        progress: g ? f / g : void 0,
        bytes: m,
        rate: y || void 0,
        estimated: y && g && w ? (g - f) / y : void 0,
        event: c,
        lengthComputable: g != null,
        [n ? "download" : "upload"]: !0,
      };
      r(_);
    }, i);
  },
  ah = (r, n) => {
    const i = r != null;
    return [(o) => n[0]({ lengthComputable: i, total: r, loaded: o }), n[1]];
  },
  lh =
    (r) =>
    (...n) =>
      j.asap(() => r(...n)),
  p1 = We.hasStandardBrowserEnv
    ? ((r, n) => (i) => (
        (i = new URL(i, We.origin)),
        r.protocol === i.protocol &&
          r.host === i.host &&
          (n || r.port === i.port)
      ))(
        new URL(We.origin),
        We.navigator && /(msie|trident)/i.test(We.navigator.userAgent)
      )
    : () => !0,
  m1 = We.hasStandardBrowserEnv
    ? {
        write(r, n, i, o, l, c) {
          const f = [r + "=" + encodeURIComponent(n)];
          j.isNumber(i) && f.push("expires=" + new Date(i).toGMTString()),
            j.isString(o) && f.push("path=" + o),
            j.isString(l) && f.push("domain=" + l),
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
function g1(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function y1(r, n) {
  return n ? r.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : r;
}
function xp(r, n) {
  return r && !g1(n) ? y1(r, n) : n;
}
const uh = (r) => (r instanceof nt ? { ...r } : r);
function er(r, n) {
  n = n || {};
  const i = {};
  function o(y, w, _, E) {
    return j.isPlainObject(y) && j.isPlainObject(w)
      ? j.merge.call({ caseless: E }, y, w)
      : j.isPlainObject(w)
      ? j.merge({}, w)
      : j.isArray(w)
      ? w.slice()
      : w;
  }
  function l(y, w, _, E) {
    if (j.isUndefined(w)) {
      if (!j.isUndefined(y)) return o(void 0, y, _, E);
    } else return o(y, w, _, E);
  }
  function c(y, w) {
    if (!j.isUndefined(w)) return o(void 0, w);
  }
  function f(y, w) {
    if (j.isUndefined(w)) {
      if (!j.isUndefined(y)) return o(void 0, y);
    } else return o(void 0, w);
  }
  function g(y, w, _) {
    if (_ in n) return o(y, w);
    if (_ in r) return o(void 0, y);
  }
  const m = {
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
    headers: (y, w, _) => l(uh(y), uh(w), _, !0),
  };
  return (
    j.forEach(Object.keys(Object.assign({}, r, n)), function (w) {
      const _ = m[w] || l,
        E = _(r[w], n[w], w);
      (j.isUndefined(E) && _ !== g) || (i[w] = E);
    }),
    i
  );
}
const kp = (r) => {
    const n = er({}, r);
    let {
      data: i,
      withXSRFToken: o,
      xsrfHeaderName: l,
      xsrfCookieName: c,
      headers: f,
      auth: g,
    } = n;
    (n.headers = f = nt.from(f)),
      (n.url = mp(xp(n.baseURL, n.url), r.params, r.paramsSerializer)),
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
    let m;
    if (j.isFormData(i)) {
      if (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if ((m = f.getContentType()) !== !1) {
        const [y, ...w] = m
          ? m
              .split(";")
              .map((_) => _.trim())
              .filter(Boolean)
          : [];
        f.setContentType([y || "multipart/form-data", ...w].join("; "));
      }
    }
    if (
      We.hasStandardBrowserEnv &&
      (o && j.isFunction(o) && (o = o(n)), o || (o !== !1 && p1(n.url)))
    ) {
      const y = l && c && m1.read(c);
      y && f.set(l, y);
    }
    return n;
  },
  v1 = typeof XMLHttpRequest < "u",
  w1 =
    v1 &&
    function (r) {
      return new Promise(function (i, o) {
        const l = kp(r);
        let c = l.data;
        const f = nt.from(l.headers).normalize();
        let { responseType: g, onUploadProgress: m, onDownloadProgress: y } = l,
          w,
          _,
          E,
          O,
          k;
        function R() {
          O && O(),
            k && k(),
            l.cancelToken && l.cancelToken.unsubscribe(w),
            l.signal && l.signal.removeEventListener("abort", w);
        }
        let b = new XMLHttpRequest();
        b.open(l.method.toUpperCase(), l.url, !0), (b.timeout = l.timeout);
        function A() {
          if (!b) return;
          const $ = nt.from(
              "getAllResponseHeaders" in b && b.getAllResponseHeaders()
            ),
            B = {
              data:
                !g || g === "text" || g === "json"
                  ? b.responseText
                  : b.response,
              status: b.status,
              statusText: b.statusText,
              headers: $,
              config: r,
              request: b,
            };
          wp(
            function (ae) {
              i(ae), R();
            },
            function (ae) {
              o(ae), R();
            },
            B
          ),
            (b = null);
        }
        "onloadend" in b
          ? (b.onloadend = A)
          : (b.onreadystatechange = function () {
              !b ||
                b.readyState !== 4 ||
                (b.status === 0 &&
                  !(b.responseURL && b.responseURL.indexOf("file:") === 0)) ||
                setTimeout(A);
            }),
          (b.onabort = function () {
            b &&
              (o(new ne("Request aborted", ne.ECONNABORTED, r, b)), (b = null));
          }),
          (b.onerror = function () {
            o(new ne("Network Error", ne.ERR_NETWORK, r, b)), (b = null);
          }),
          (b.ontimeout = function () {
            let Q = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const B = l.transitional || gp;
            l.timeoutErrorMessage && (Q = l.timeoutErrorMessage),
              o(
                new ne(
                  Q,
                  B.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
                  r,
                  b
                )
              ),
              (b = null);
          }),
          c === void 0 && f.setContentType(null),
          "setRequestHeader" in b &&
            j.forEach(f.toJSON(), function (Q, B) {
              b.setRequestHeader(B, Q);
            }),
          j.isUndefined(l.withCredentials) ||
            (b.withCredentials = !!l.withCredentials),
          g && g !== "json" && (b.responseType = l.responseType),
          y && (([E, k] = vo(y, !0)), b.addEventListener("progress", E)),
          m &&
            b.upload &&
            (([_, O] = vo(m)),
            b.upload.addEventListener("progress", _),
            b.upload.addEventListener("loadend", O)),
          (l.cancelToken || l.signal) &&
            ((w = ($) => {
              b &&
                (o(!$ || $.type ? new Fr(null, r, b) : $),
                b.abort(),
                (b = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(w),
            l.signal &&
              (l.signal.aborted ? w() : l.signal.addEventListener("abort", w)));
        const F = d1(l.url);
        if (F && We.protocols.indexOf(F) === -1) {
          o(new ne("Unsupported protocol " + F + ":", ne.ERR_BAD_REQUEST, r));
          return;
        }
        b.send(c || null);
      });
    },
  x1 = (r, n) => {
    const { length: i } = (r = r ? r.filter(Boolean) : []);
    if (n || i) {
      let o = new AbortController(),
        l;
      const c = function (y) {
        if (!l) {
          (l = !0), g();
          const w = y instanceof Error ? y : this.reason;
          o.abort(
            w instanceof ne ? w : new Fr(w instanceof Error ? w.message : w)
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
      const { signal: m } = o;
      return (m.unsubscribe = () => j.asap(g)), m;
    }
  },
  k1 = function* (r, n) {
    let i = r.byteLength;
    if (i < n) {
      yield r;
      return;
    }
    let o = 0,
      l;
    for (; o < i; ) (l = o + n), yield r.slice(o, l), (o = l);
  },
  S1 = async function* (r, n) {
    for await (const i of E1(r)) yield* k1(i, n);
  },
  E1 = async function* (r) {
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
  ch = (r, n, i, o) => {
    const l = S1(r, n);
    let c = 0,
      f,
      g = (m) => {
        f || ((f = !0), o && o(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: y, value: w } = await l.next();
            if (y) {
              g(), m.close();
              return;
            }
            let _ = w.byteLength;
            if (i) {
              let E = (c += _);
              i(E);
            }
            m.enqueue(new Uint8Array(w));
          } catch (y) {
            throw (g(y), y);
          }
        },
        cancel(m) {
          return g(m), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Oo =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Sp = Oo && typeof ReadableStream == "function",
  _1 =
    Oo &&
    (typeof TextEncoder == "function"
      ? (
          (r) => (n) =>
            r.encode(n)
        )(new TextEncoder())
      : async (r) => new Uint8Array(await new Response(r).arrayBuffer())),
  Ep = (r, ...n) => {
    try {
      return !!r(...n);
    } catch {
      return !1;
    }
  },
  C1 =
    Sp &&
    Ep(() => {
      let r = !1;
      const n = new Request(We.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (r = !0), "half";
        },
      }).headers.has("Content-Type");
      return r && !n;
    }),
  dh = 64 * 1024,
  au = Sp && Ep(() => j.isReadableStream(new Response("").body)),
  wo = { stream: au && ((r) => r.body) };
Oo &&
  ((r) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
      !wo[n] &&
        (wo[n] = j.isFunction(r[n])
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
const N1 = async (r) => {
    if (r == null) return 0;
    if (j.isBlob(r)) return r.size;
    if (j.isSpecCompliantForm(r))
      return (
        await new Request(We.origin, { method: "POST", body: r }).arrayBuffer()
      ).byteLength;
    if (j.isArrayBufferView(r) || j.isArrayBuffer(r)) return r.byteLength;
    if ((j.isURLSearchParams(r) && (r = r + ""), j.isString(r)))
      return (await _1(r)).byteLength;
  },
  b1 = async (r, n) => {
    const i = j.toFiniteNumber(r.getContentLength());
    return i ?? N1(n);
  },
  I1 =
    Oo &&
    (async (r) => {
      let {
        url: n,
        method: i,
        data: o,
        signal: l,
        cancelToken: c,
        timeout: f,
        onDownloadProgress: g,
        onUploadProgress: m,
        responseType: y,
        headers: w,
        withCredentials: _ = "same-origin",
        fetchOptions: E,
      } = kp(r);
      y = y ? (y + "").toLowerCase() : "text";
      let O = x1([l, c && c.toAbortSignal()], f),
        k;
      const R =
        O &&
        O.unsubscribe &&
        (() => {
          O.unsubscribe();
        });
      let b;
      try {
        if (
          m &&
          C1 &&
          i !== "get" &&
          i !== "head" &&
          (b = await b1(w, o)) !== 0
        ) {
          let B = new Request(n, { method: "POST", body: o, duplex: "half" }),
            se;
          if (
            (j.isFormData(o) &&
              (se = B.headers.get("content-type")) &&
              w.setContentType(se),
            B.body)
          ) {
            const [ae, fe] = ah(b, vo(lh(m)));
            o = ch(B.body, dh, ae, fe);
          }
        }
        j.isString(_) || (_ = _ ? "include" : "omit");
        const A = "credentials" in Request.prototype;
        k = new Request(n, {
          ...E,
          signal: O,
          method: i.toUpperCase(),
          headers: w.normalize().toJSON(),
          body: o,
          duplex: "half",
          credentials: A ? _ : void 0,
        });
        let F = await fetch(k);
        const $ = au && (y === "stream" || y === "response");
        if (au && (g || ($ && R))) {
          const B = {};
          ["status", "statusText", "headers"].forEach((he) => {
            B[he] = F[he];
          });
          const se = j.toFiniteNumber(F.headers.get("content-length")),
            [ae, fe] = (g && ah(se, vo(lh(g), !0))) || [];
          F = new Response(
            ch(F.body, dh, ae, () => {
              fe && fe(), R && R();
            }),
            B
          );
        }
        y = y || "text";
        let Q = await wo[j.findKey(wo, y) || "text"](F, r);
        return (
          !$ && R && R(),
          await new Promise((B, se) => {
            wp(B, se, {
              data: Q,
              headers: nt.from(F.headers),
              status: F.status,
              statusText: F.statusText,
              config: r,
              request: k,
            });
          })
        );
      } catch (A) {
        throw (
          (R && R(),
          A && A.name === "TypeError" && /fetch/i.test(A.message)
            ? Object.assign(new ne("Network Error", ne.ERR_NETWORK, r, k), {
                cause: A.cause || A,
              })
            : ne.from(A, A && A.code, r, k))
        );
      }
    }),
  lu = { http: $v, xhr: w1, fetch: I1 };
j.forEach(lu, (r, n) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: n });
    } catch {}
    Object.defineProperty(r, "adapterName", { value: n });
  }
});
const fh = (r) => `- ${r}`,
  R1 = (r) => j.isFunction(r) || r === null || r === !1,
  _p = {
    getAdapter: (r) => {
      r = j.isArray(r) ? r : [r];
      const { length: n } = r;
      let i, o;
      const l = {};
      for (let c = 0; c < n; c++) {
        i = r[c];
        let f;
        if (
          ((o = i),
          !R1(i) && ((o = lu[(f = String(i)).toLowerCase()]), o === void 0))
        )
          throw new ne(`Unknown adapter '${f}'`);
        if (o) break;
        l[f || "#" + c] = o;
      }
      if (!o) {
        const c = Object.entries(l).map(
          ([g, m]) =>
            `adapter ${g} ` +
            (m === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let f = n
          ? c.length > 1
            ? `since :
` +
              c.map(fh).join(`
`)
            : " " + fh(c[0])
          : "as no adapter specified";
        throw new ne(
          "There is no suitable adapter to dispatch the request " + f,
          "ERR_NOT_SUPPORT"
        );
      }
      return o;
    },
    adapters: lu,
  };
function Wl(r) {
  if (
    (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
  )
    throw new Fr(null, r);
}
function hh(r) {
  return (
    Wl(r),
    (r.headers = nt.from(r.headers)),
    (r.data = Vl.call(r, r.transformRequest)),
    ["post", "put", "patch"].indexOf(r.method) !== -1 &&
      r.headers.setContentType("application/x-www-form-urlencoded", !1),
    _p
      .getAdapter(r.adapter || zi.adapter)(r)
      .then(
        function (o) {
          return (
            Wl(r),
            (o.data = Vl.call(r, r.transformResponse, o)),
            (o.headers = nt.from(o.headers)),
            o
          );
        },
        function (o) {
          return (
            vp(o) ||
              (Wl(r),
              o &&
                o.response &&
                ((o.response.data = Vl.call(
                  r,
                  r.transformResponse,
                  o.response
                )),
                (o.response.headers = nt.from(o.response.headers)))),
            Promise.reject(o)
          );
        }
      )
  );
}
const Cp = "1.7.9",
  Lo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (r, n) => {
    Lo[r] = function (o) {
      return typeof o === r || "a" + (n < 1 ? "n " : " ") + r;
    };
  }
);
const ph = {};
Lo.transitional = function (n, i, o) {
  function l(c, f) {
    return (
      "[Axios v" +
      Cp +
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
        !ph[f] &&
        ((ph[f] = !0),
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
Lo.spelling = function (n) {
  return (i, o) => (console.warn(`${o} is likely a misspelling of ${n}`), !0);
};
function T1(r, n, i) {
  if (typeof r != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(r);
  let l = o.length;
  for (; l-- > 0; ) {
    const c = o[l],
      f = n[c];
    if (f) {
      const g = r[c],
        m = g === void 0 || f(g, c, r);
      if (m !== !0)
        throw new ne("option " + c + " must be " + m, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new ne("Unknown option " + c, ne.ERR_BAD_OPTION);
  }
}
const co = { assertOptions: T1, validators: Lo },
  Ut = co.validators;
class Xn {
  constructor(n) {
    (this.defaults = n),
      (this.interceptors = { request: new sh(), response: new sh() });
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
      (i = er(this.defaults, i));
    const { transitional: o, paramsSerializer: l, headers: c } = i;
    o !== void 0 &&
      co.assertOptions(
        o,
        {
          silentJSONParsing: Ut.transitional(Ut.boolean),
          forcedJSONParsing: Ut.transitional(Ut.boolean),
          clarifyTimeoutError: Ut.transitional(Ut.boolean),
        },
        !1
      ),
      l != null &&
        (j.isFunction(l)
          ? (i.paramsSerializer = { serialize: l })
          : co.assertOptions(
              l,
              { encode: Ut.function, serialize: Ut.function },
              !0
            )),
      co.assertOptions(
        i,
        {
          baseUrl: Ut.spelling("baseURL"),
          withXsrfToken: Ut.spelling("withXSRFToken"),
        },
        !0
      ),
      (i.method = (i.method || this.defaults.method || "get").toLowerCase());
    let f = c && j.merge(c.common, c[i.method]);
    c &&
      j.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (k) => {
          delete c[k];
        }
      ),
      (i.headers = nt.concat(f, c));
    const g = [];
    let m = !0;
    this.interceptors.request.forEach(function (R) {
      (typeof R.runWhen == "function" && R.runWhen(i) === !1) ||
        ((m = m && R.synchronous), g.unshift(R.fulfilled, R.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function (R) {
      y.push(R.fulfilled, R.rejected);
    });
    let w,
      _ = 0,
      E;
    if (!m) {
      const k = [hh.bind(this), void 0];
      for (
        k.unshift.apply(k, g),
          k.push.apply(k, y),
          E = k.length,
          w = Promise.resolve(i);
        _ < E;

      )
        w = w.then(k[_++], k[_++]);
      return w;
    }
    E = g.length;
    let O = i;
    for (_ = 0; _ < E; ) {
      const k = g[_++],
        R = g[_++];
      try {
        O = k(O);
      } catch (b) {
        R.call(this, b);
        break;
      }
    }
    try {
      w = hh.call(this, O);
    } catch (k) {
      return Promise.reject(k);
    }
    for (_ = 0, E = y.length; _ < E; ) w = w.then(y[_++], y[_++]);
    return w;
  }
  getUri(n) {
    n = er(this.defaults, n);
    const i = xp(n.baseURL, n.url);
    return mp(i, n.params, n.paramsSerializer);
  }
}
j.forEach(["delete", "get", "head", "options"], function (n) {
  Xn.prototype[n] = function (i, o) {
    return this.request(
      er(o || {}, { method: n, url: i, data: (o || {}).data })
    );
  };
});
j.forEach(["post", "put", "patch"], function (n) {
  function i(o) {
    return function (c, f, g) {
      return this.request(
        er(g || {}, {
          method: n,
          headers: o ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: f,
        })
      );
    };
  }
  (Xn.prototype[n] = i()), (Xn.prototype[n + "Form"] = i(!0));
});
class Pu {
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
        o.reason || ((o.reason = new Fr(c, f, g)), i(o.reason));
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
      token: new Pu(function (l) {
        n = l;
      }),
      cancel: n,
    };
  }
}
function P1(r) {
  return function (i) {
    return r.apply(null, i);
  };
}
function j1(r) {
  return j.isObject(r) && r.isAxiosError === !0;
}
const uu = {
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
Object.entries(uu).forEach(([r, n]) => {
  uu[n] = r;
});
function Np(r) {
  const n = new Xn(r),
    i = rp(Xn.prototype.request, n);
  return (
    j.extend(i, Xn.prototype, n, { allOwnKeys: !0 }),
    j.extend(i, n, null, { allOwnKeys: !0 }),
    (i.create = function (l) {
      return Np(er(r, l));
    }),
    i
  );
}
const Ie = Np(zi);
Ie.Axios = Xn;
Ie.CanceledError = Fr;
Ie.CancelToken = Pu;
Ie.isCancel = vp;
Ie.VERSION = Cp;
Ie.toFormData = Ao;
Ie.AxiosError = ne;
Ie.Cancel = Ie.CanceledError;
Ie.all = function (n) {
  return Promise.all(n);
};
Ie.spread = P1;
Ie.isAxiosError = j1;
Ie.mergeConfig = er;
Ie.AxiosHeaders = nt;
Ie.formToJSON = (r) => yp(j.isHTMLForm(r) ? new FormData(r) : r);
Ie.getAdapter = _p.getAdapter;
Ie.HttpStatusCode = uu;
Ie.default = Ie;
const Nt = Ie.create({
  baseURL: "http://localhost:3000",
  timeout: 1e4,
  headers: { "Content-Type": "application/json" },
  withCredentials: !0,
});
Nt.interceptors.response.use(
  (r) => r,
  (r) => Promise.reject(r)
);
function Do() {
  return {
    createProduct: async (c) => {
      try {
        console.log("Form data being sent:", c);
        const f = await Ie.post("/api/products", c);
        return console.log("Response from server:", f), f;
      } catch (f) {
        throw (console.error("Error creating product:", f), f);
      }
    },
    getProduct: async () => (await Nt.get("/api/products")).data,
    getProductById: async (c) => await Nt.get("/api/products/" + c),
    getPagnigationProduct: async (c, f) =>
      (
        await Nt.get(
          "/api/products/getPaginatedProducts?page=" + c + "&size=" + f
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
        (await Nt.get("http://localhost:3000/api/products?" + f)).data
      );
    },
  };
}
const mh = ({ element: r, title: n }) =>
  h.jsxs("button", {
    className: r,
    children: [" ", h.jsx("span", { children: n })],
  });
function bp(r) {
  var n,
    i,
    o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var l = r.length;
      for (n = 0; n < l; n++)
        r[n] && (i = bp(r[n])) && (o && (o += " "), (o += i));
    } else for (i in r) r[i] && (o && (o += " "), (o += i));
  return o;
}
function Le() {
  for (var r, n, i = 0, o = "", l = arguments.length; i < l; i++)
    (r = arguments[i]) && (n = bp(r)) && (o && (o += " "), (o += n));
  return o;
}
const A1 = ({}) => {
    const [r, n] = C.useState(1),
      [i, o] = C.useState(1);
    C.useState(!1);
    const [l, c] = C.useState(),
      f = 8;
    C.useEffect(() => {
      (async () => {
        const y = await Do().getPagnigationProduct(r, f);
        c(y == null ? void 0 : y.products), o(y == null ? void 0 : y.pages);
      })();
    }, [r]);
    const g = (m) => {
      n(m);
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
                  : l.map((m, y) => {
                      var w;
                      return h.jsxs(
                        Ht,
                        {
                          to: Le("/product?product=" + m.id),
                          className:
                            "transition-all m-2 cursor-pointer rounded-sm border text-center duration-200  hover:shadow-md",
                          children: [
                            h.jsx("img", {
                              className:
                                "mx-auto h-52 rounded-sm p-2 max-md:w-full",
                              src:
                                (w =
                                  m == null ? void 0 : m.ProductVariants[0]) ==
                                null
                                  ? void 0
                                  : w.image_url,
                              alt: "",
                            }),
                            h.jsxs("div", {
                              className: "py-5",
                              children: [
                                h.jsx("h1", { children: m.description }),
                                h.jsx("p", { children: m.base_price }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "flex justify-center gap-4 m-4",
                              children: [
                                h.jsx(mh, {
                                  element: "custom-btn btn-3 hover:text-black",
                                  title: "Add to Cart",
                                }),
                                h.jsx(mh, {
                                  element: "custom-btn btn-3 hover:text-black ",
                                  title: "Add to Cart",
                                }),
                              ],
                            }),
                          ],
                        },
                        y
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
              children: h.jsx(Ht, {
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
  O1 = [
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
  L1 = () => (
    C.useState(!1),
    h.jsxs(h.Fragment, {
      children: [
        h.jsx(nv, {}),
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
              children: O1.map((r, n) =>
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
        h.jsx(A1, {}),
        h.jsx(rv, {}),
      ],
    })
  );
/*! js-cookie v3.0.5 | MIT */ function io(r) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n];
    for (var o in i) r[o] = i[o];
  }
  return r;
}
var D1 = {
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
function cu(r, n) {
  function i(l, c, f) {
    if (!(typeof document > "u")) {
      (f = io({}, n, f)),
        typeof f.expires == "number" &&
          (f.expires = new Date(Date.now() + f.expires * 864e5)),
        f.expires && (f.expires = f.expires.toUTCString()),
        (l = encodeURIComponent(l)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var g = "";
      for (var m in f)
        f[m] &&
          ((g += "; " + m), f[m] !== !0 && (g += "=" + f[m].split(";")[0]));
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
        var m = c[g].split("="),
          y = m.slice(1).join("=");
        try {
          var w = decodeURIComponent(m[0]);
          if (((f[w] = r.read(y, w)), l === w)) break;
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
        i(l, "", io({}, c, { expires: -1 }));
      },
      withAttributes: function (l) {
        return cu(this.converter, io({}, this.attributes, l));
      },
      withConverter: function (l) {
        return cu(io({}, this.converter, l), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(r) },
    }
  );
}
var _t = cu(D1, { path: "/" }),
  gh = {};
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
 */ const Ip = function (r) {
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
  M1 = function (r) {
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
          m =
            (((l & 7) << 18) | ((c & 63) << 12) | ((f & 63) << 6) | (g & 63)) -
            65536;
        (n[o++] = String.fromCharCode(55296 + (m >> 10))),
          (n[o++] = String.fromCharCode(56320 + (m & 1023)));
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
  Rp = {
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
          m = l + 2 < r.length,
          y = m ? r[l + 2] : 0,
          w = c >> 2,
          _ = ((c & 3) << 4) | (g >> 4);
        let E = ((g & 15) << 2) | (y >> 6),
          O = y & 63;
        m || ((O = 64), f || (E = 64)), o.push(i[w], i[_], i[E], i[O]);
      }
      return o.join("");
    },
    encodeString(r, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? btoa(r)
        : this.encodeByteArray(Ip(r), n);
    },
    decodeString(r, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? atob(r)
        : M1(this.decodeStringToByteArray(r, n));
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
        const _ = l < r.length ? i[r.charAt(l)] : 64;
        if ((++l, c == null || g == null || y == null || _ == null))
          throw new F1();
        const E = (c << 2) | (g >> 4);
        if ((o.push(E), y !== 64)) {
          const O = ((g << 4) & 240) | (y >> 2);
          if ((o.push(O), _ !== 64)) {
            const k = ((y << 6) & 192) | _;
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
class F1 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const U1 = function (r) {
    const n = Ip(r);
    return Rp.encodeByteArray(n, !0);
  },
  Tp = function (r) {
    return U1(r).replace(/\./g, "");
  },
  Pp = function (r) {
    try {
      return Rp.decodeString(r, !0);
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
 */ function z1() {
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
 */ const B1 = () => z1().__FIREBASE_DEFAULTS__,
  H1 = () => {
    if (typeof process > "u" || typeof gh > "u") return;
    const r = gh.__FIREBASE_DEFAULTS__;
    if (r) return JSON.parse(r);
  },
  $1 = () => {
    if (typeof document > "u") return;
    let r;
    try {
      r = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const n = r && Pp(r[1]);
    return n && JSON.parse(n);
  },
  ju = () => {
    try {
      return B1() || H1() || $1();
    } catch (r) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);
      return;
    }
  },
  V1 = (r) => {
    var n, i;
    return (i =
      (n = ju()) === null || n === void 0 ? void 0 : n.emulatorHosts) ===
      null || i === void 0
      ? void 0
      : i[r];
  },
  jp = () => {
    var r;
    return (r = ju()) === null || r === void 0 ? void 0 : r.config;
  },
  Ap = (r) => {
    var n;
    return (n = ju()) === null || n === void 0 ? void 0 : n[`_${r}`];
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
 */ class W1 {
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
 */ function Ge() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function q1() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())
  );
}
function K1() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function G1() {
  const r =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof r == "object" && r.id !== void 0;
}
function J1() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Q1() {
  const r = Ge();
  return r.indexOf("MSIE ") >= 0 || r.indexOf("Trident/") >= 0;
}
function Y1() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function X1() {
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
 */ const Z1 = "FirebaseError";
class Ln extends Error {
  constructor(n, i, o) {
    super(i),
      (this.code = n),
      (this.customData = o),
      (this.name = Z1),
      Object.setPrototypeOf(this, Ln.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Bi.prototype.create);
  }
}
class Bi {
  constructor(n, i, o) {
    (this.service = n), (this.serviceName = i), (this.errors = o);
  }
  create(n, ...i) {
    const o = i[0] || {},
      l = `${this.service}/${n}`,
      c = this.errors[n],
      f = c ? ew(c, o) : "Error",
      g = `${this.serviceName}: ${f} (${l}).`;
    return new Ln(l, g, o);
  }
}
function ew(r, n) {
  return r.replace(tw, (i, o) => {
    const l = n[o];
    return l != null ? String(l) : `<${o}?>`;
  });
}
const tw = /\{\$([^}]+)}/g;
function nw(r) {
  for (const n in r) if (Object.prototype.hasOwnProperty.call(r, n)) return !1;
  return !0;
}
function xo(r, n) {
  if (r === n) return !0;
  const i = Object.keys(r),
    o = Object.keys(n);
  for (const l of i) {
    if (!o.includes(l)) return !1;
    const c = r[l],
      f = n[l];
    if (yh(c) && yh(f)) {
      if (!xo(c, f)) return !1;
    } else if (c !== f) return !1;
  }
  for (const l of o) if (!i.includes(l)) return !1;
  return !0;
}
function yh(r) {
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
 */ function Hi(r) {
  const n = [];
  for (const [i, o] of Object.entries(r))
    Array.isArray(o)
      ? o.forEach((l) => {
          n.push(encodeURIComponent(i) + "=" + encodeURIComponent(l));
        })
      : n.push(encodeURIComponent(i) + "=" + encodeURIComponent(o));
  return n.length ? "&" + n.join("&") : "";
}
function rw(r, n) {
  const i = new iw(r, n);
  return i.subscribe.bind(i);
}
class iw {
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
    sw(n, ["next", "error", "complete"])
      ? (l = n)
      : (l = { next: n, error: i, complete: o }),
      l.next === void 0 && (l.next = ql),
      l.error === void 0 && (l.error = ql),
      l.complete === void 0 && (l.complete = ql);
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
function sw(r, n) {
  if (typeof r != "object" || r === null) return !1;
  for (const i of n) if (i in r && typeof r[i] == "function") return !0;
  return !1;
}
function ql() {}
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
 */ function un(r) {
  return r && r._delegate ? r._delegate : r;
}
class jr {
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
 */ const Jn = "[DEFAULT]";
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
 */ class ow {
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
      const o = new W1();
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
      if (lw(n))
        try {
          this.getOrInitializeService({ instanceIdentifier: Jn });
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
  clearInstance(n = Jn) {
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
  isInitialized(n = Jn) {
    return this.instances.has(n);
  }
  getOptions(n = Jn) {
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
        instanceIdentifier: aw(n),
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
  normalizeInstanceIdentifier(n = Jn) {
    return this.component ? (this.component.multipleInstances ? n : Jn) : n;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function aw(r) {
  return r === Jn ? void 0 : r;
}
function lw(r) {
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
 */ class uw {
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
    const i = new ow(n, this);
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
 */ var ge;
(function (r) {
  (r[(r.DEBUG = 0)] = "DEBUG"),
    (r[(r.VERBOSE = 1)] = "VERBOSE"),
    (r[(r.INFO = 2)] = "INFO"),
    (r[(r.WARN = 3)] = "WARN"),
    (r[(r.ERROR = 4)] = "ERROR"),
    (r[(r.SILENT = 5)] = "SILENT");
})(ge || (ge = {}));
const cw = {
    debug: ge.DEBUG,
    verbose: ge.VERBOSE,
    info: ge.INFO,
    warn: ge.WARN,
    error: ge.ERROR,
    silent: ge.SILENT,
  },
  dw = ge.INFO,
  fw = {
    [ge.DEBUG]: "log",
    [ge.VERBOSE]: "log",
    [ge.INFO]: "info",
    [ge.WARN]: "warn",
    [ge.ERROR]: "error",
  },
  hw = (r, n, ...i) => {
    if (n < r.logLevel) return;
    const o = new Date().toISOString(),
      l = fw[n];
    if (l) console[l](`[${o}]  ${r.name}:`, ...i);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${n})`
      );
  };
class Op {
  constructor(n) {
    (this.name = n),
      (this._logLevel = dw),
      (this._logHandler = hw),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(n) {
    if (!(n in ge))
      throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);
    this._logLevel = n;
  }
  setLogLevel(n) {
    this._logLevel = typeof n == "string" ? cw[n] : n;
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
    this._userLogHandler && this._userLogHandler(this, ge.DEBUG, ...n),
      this._logHandler(this, ge.DEBUG, ...n);
  }
  log(...n) {
    this._userLogHandler && this._userLogHandler(this, ge.VERBOSE, ...n),
      this._logHandler(this, ge.VERBOSE, ...n);
  }
  info(...n) {
    this._userLogHandler && this._userLogHandler(this, ge.INFO, ...n),
      this._logHandler(this, ge.INFO, ...n);
  }
  warn(...n) {
    this._userLogHandler && this._userLogHandler(this, ge.WARN, ...n),
      this._logHandler(this, ge.WARN, ...n);
  }
  error(...n) {
    this._userLogHandler && this._userLogHandler(this, ge.ERROR, ...n),
      this._logHandler(this, ge.ERROR, ...n);
  }
}
const pw = (r, n) => n.some((i) => r instanceof i);
let vh, wh;
function mw() {
  return (
    vh ||
    (vh = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function gw() {
  return (
    wh ||
    (wh = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Lp = new WeakMap(),
  du = new WeakMap(),
  Dp = new WeakMap(),
  Kl = new WeakMap(),
  Au = new WeakMap();
function yw(r) {
  const n = new Promise((i, o) => {
    const l = () => {
        r.removeEventListener("success", c), r.removeEventListener("error", f);
      },
      c = () => {
        i(jn(r.result)), l();
      },
      f = () => {
        o(r.error), l();
      };
    r.addEventListener("success", c), r.addEventListener("error", f);
  });
  return (
    n
      .then((i) => {
        i instanceof IDBCursor && Lp.set(i, r);
      })
      .catch(() => {}),
    Au.set(n, r),
    n
  );
}
function vw(r) {
  if (du.has(r)) return;
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
  du.set(r, n);
}
let fu = {
  get(r, n, i) {
    if (r instanceof IDBTransaction) {
      if (n === "done") return du.get(r);
      if (n === "objectStoreNames") return r.objectStoreNames || Dp.get(r);
      if (n === "store")
        return i.objectStoreNames[1]
          ? void 0
          : i.objectStore(i.objectStoreNames[0]);
    }
    return jn(r[n]);
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
function ww(r) {
  fu = r(fu);
}
function xw(r) {
  return r === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (n, ...i) {
        const o = r.call(Gl(this), n, ...i);
        return Dp.set(o, n.sort ? n.sort() : [n]), jn(o);
      }
    : gw().includes(r)
    ? function (...n) {
        return r.apply(Gl(this), n), jn(Lp.get(this));
      }
    : function (...n) {
        return jn(r.apply(Gl(this), n));
      };
}
function kw(r) {
  return typeof r == "function"
    ? xw(r)
    : (r instanceof IDBTransaction && vw(r),
      pw(r, mw()) ? new Proxy(r, fu) : r);
}
function jn(r) {
  if (r instanceof IDBRequest) return yw(r);
  if (Kl.has(r)) return Kl.get(r);
  const n = kw(r);
  return n !== r && (Kl.set(r, n), Au.set(n, r)), n;
}
const Gl = (r) => Au.get(r);
function Sw(r, n, { blocked: i, upgrade: o, blocking: l, terminated: c } = {}) {
  const f = indexedDB.open(r, n),
    g = jn(f);
  return (
    o &&
      f.addEventListener("upgradeneeded", (m) => {
        o(jn(f.result), m.oldVersion, m.newVersion, jn(f.transaction), m);
      }),
    i && f.addEventListener("blocked", (m) => i(m.oldVersion, m.newVersion, m)),
    g
      .then((m) => {
        c && m.addEventListener("close", () => c()),
          l &&
            m.addEventListener("versionchange", (y) =>
              l(y.oldVersion, y.newVersion, y)
            );
      })
      .catch(() => {}),
    g
  );
}
const Ew = ["get", "getKey", "getAll", "getAllKeys", "count"],
  _w = ["put", "add", "delete", "clear"],
  Jl = new Map();
function xh(r, n) {
  if (!(r instanceof IDBDatabase && !(n in r) && typeof n == "string")) return;
  if (Jl.get(n)) return Jl.get(n);
  const i = n.replace(/FromIndex$/, ""),
    o = n !== i,
    l = _w.includes(i);
  if (
    !(i in (o ? IDBIndex : IDBObjectStore).prototype) ||
    !(l || Ew.includes(i))
  )
    return;
  const c = async function (f, ...g) {
    const m = this.transaction(f, l ? "readwrite" : "readonly");
    let y = m.store;
    return (
      o && (y = y.index(g.shift())),
      (await Promise.all([y[i](...g), l && m.done]))[0]
    );
  };
  return Jl.set(n, c), c;
}
ww((r) => ({
  ...r,
  get: (n, i, o) => xh(n, i) || r.get(n, i, o),
  has: (n, i) => !!xh(n, i) || r.has(n, i),
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
 */ class Cw {
  constructor(n) {
    this.container = n;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((i) => {
        if (Nw(i)) {
          const o = i.getImmediate();
          return `${o.library}/${o.version}`;
        } else return null;
      })
      .filter((i) => i)
      .join(" ");
  }
}
function Nw(r) {
  const n = r.getComponent();
  return (n == null ? void 0 : n.type) === "VERSION";
}
const hu = "@firebase/app",
  kh = "0.11.1";
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
 */ const sn = new Op("@firebase/app"),
  bw = "@firebase/app-compat",
  Iw = "@firebase/analytics-compat",
  Rw = "@firebase/analytics",
  Tw = "@firebase/app-check-compat",
  Pw = "@firebase/app-check",
  jw = "@firebase/auth",
  Aw = "@firebase/auth-compat",
  Ow = "@firebase/database",
  Lw = "@firebase/data-connect",
  Dw = "@firebase/database-compat",
  Mw = "@firebase/functions",
  Fw = "@firebase/functions-compat",
  Uw = "@firebase/installations",
  zw = "@firebase/installations-compat",
  Bw = "@firebase/messaging",
  Hw = "@firebase/messaging-compat",
  $w = "@firebase/performance",
  Vw = "@firebase/performance-compat",
  Ww = "@firebase/remote-config",
  qw = "@firebase/remote-config-compat",
  Kw = "@firebase/storage",
  Gw = "@firebase/storage-compat",
  Jw = "@firebase/firestore",
  Qw = "@firebase/vertexai",
  Yw = "@firebase/firestore-compat",
  Xw = "firebase",
  Zw = "11.3.1";
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
 */ const pu = "[DEFAULT]",
  ex = {
    [hu]: "fire-core",
    [bw]: "fire-core-compat",
    [Rw]: "fire-analytics",
    [Iw]: "fire-analytics-compat",
    [Pw]: "fire-app-check",
    [Tw]: "fire-app-check-compat",
    [jw]: "fire-auth",
    [Aw]: "fire-auth-compat",
    [Ow]: "fire-rtdb",
    [Lw]: "fire-data-connect",
    [Dw]: "fire-rtdb-compat",
    [Mw]: "fire-fn",
    [Fw]: "fire-fn-compat",
    [Uw]: "fire-iid",
    [zw]: "fire-iid-compat",
    [Bw]: "fire-fcm",
    [Hw]: "fire-fcm-compat",
    [$w]: "fire-perf",
    [Vw]: "fire-perf-compat",
    [Ww]: "fire-rc",
    [qw]: "fire-rc-compat",
    [Kw]: "fire-gcs",
    [Gw]: "fire-gcs-compat",
    [Jw]: "fire-fst",
    [Yw]: "fire-fst-compat",
    [Qw]: "fire-vertex",
    "fire-js": "fire-js",
    [Xw]: "fire-js-all",
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
 */ const ko = new Map(),
  tx = new Map(),
  mu = new Map();
function Sh(r, n) {
  try {
    r.container.addComponent(n);
  } catch (i) {
    sn.debug(
      `Component ${n.name} failed to register with FirebaseApp ${r.name}`,
      i
    );
  }
}
function ji(r) {
  const n = r.name;
  if (mu.has(n))
    return (
      sn.debug(`There were multiple attempts to register component ${n}.`), !1
    );
  mu.set(n, r);
  for (const i of ko.values()) Sh(i, r);
  for (const i of tx.values()) Sh(i, r);
  return !0;
}
function Mp(r, n) {
  const i = r.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return i && i.triggerHeartbeat(), r.container.getProvider(n);
}
function zt(r) {
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
 */ const nx = {
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
  An = new Bi("app", "Firebase", nx);
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
 */ class rx {
  constructor(n, i, o) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, n)),
      (this._config = Object.assign({}, i)),
      (this._name = i.name),
      (this._automaticDataCollectionEnabled = i.automaticDataCollectionEnabled),
      (this._container = o),
      this.container.addComponent(new jr("app", () => this, "PUBLIC"));
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
    if (this.isDeleted) throw An.create("app-deleted", { appName: this._name });
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
 */ const $i = Zw;
function Ou(r, n = {}) {
  let i = r;
  typeof n != "object" && (n = { name: n });
  const o = Object.assign({ name: pu, automaticDataCollectionEnabled: !1 }, n),
    l = o.name;
  if (typeof l != "string" || !l)
    throw An.create("bad-app-name", { appName: String(l) });
  if ((i || (i = jp()), !i)) throw An.create("no-options");
  const c = ko.get(l);
  if (c) {
    if (xo(i, c.options) && xo(o, c.config)) return c;
    throw An.create("duplicate-app", { appName: l });
  }
  const f = new uw(l);
  for (const m of mu.values()) f.addComponent(m);
  const g = new rx(i, o, f);
  return ko.set(l, g), g;
}
function ix(r = pu) {
  const n = ko.get(r);
  if (!n && r === pu && jp()) return Ou();
  if (!n) throw An.create("no-app", { appName: r });
  return n;
}
function br(r, n, i) {
  var o;
  let l = (o = ex[r]) !== null && o !== void 0 ? o : r;
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
      sn.warn(g.join(" "));
    return;
  }
  ji(new jr(`${l}-version`, () => ({ library: l, version: n }), "VERSION"));
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
 */ const sx = "firebase-heartbeat-database",
  ox = 1,
  Ai = "firebase-heartbeat-store";
let Ql = null;
function Fp() {
  return (
    Ql ||
      (Ql = Sw(sx, ox, {
        upgrade: (r, n) => {
          switch (n) {
            case 0:
              try {
                r.createObjectStore(Ai);
              } catch (i) {
                console.warn(i);
              }
          }
        },
      }).catch((r) => {
        throw An.create("idb-open", { originalErrorMessage: r.message });
      })),
    Ql
  );
}
async function ax(r) {
  try {
    const i = (await Fp()).transaction(Ai),
      o = await i.objectStore(Ai).get(Up(r));
    return await i.done, o;
  } catch (n) {
    if (n instanceof Ln) sn.warn(n.message);
    else {
      const i = An.create("idb-get", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      sn.warn(i.message);
    }
  }
}
async function Eh(r, n) {
  try {
    const o = (await Fp()).transaction(Ai, "readwrite");
    await o.objectStore(Ai).put(n, Up(r)), await o.done;
  } catch (i) {
    if (i instanceof Ln) sn.warn(i.message);
    else {
      const o = An.create("idb-set", {
        originalErrorMessage: i == null ? void 0 : i.message,
      });
      sn.warn(o.message);
    }
  }
}
function Up(r) {
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
 */ const lx = 1024,
  ux = 30;
class cx {
  constructor(n) {
    (this.container = n), (this._heartbeatsCache = null);
    const i = this.container.getProvider("app").getImmediate();
    (this._storage = new fx(i)),
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
        c = _h();
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
        this._heartbeatsCache.heartbeats.length > ux)
      ) {
        const f = hx(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(f, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (o) {
      sn.warn(o);
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
      const i = _h(),
        { heartbeatsToSend: o, unsentEntries: l } = dx(
          this._heartbeatsCache.heartbeats
        ),
        c = Tp(JSON.stringify({ version: 2, heartbeats: o }));
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
      return sn.warn(i), "";
    }
  }
}
function _h() {
  return new Date().toISOString().substring(0, 10);
}
function dx(r, n = lx) {
  const i = [];
  let o = r.slice();
  for (const l of r) {
    const c = i.find((f) => f.agent === l.agent);
    if (c) {
      if ((c.dates.push(l.date), Ch(i) > n)) {
        c.dates.pop();
        break;
      }
    } else if ((i.push({ agent: l.agent, dates: [l.date] }), Ch(i) > n)) {
      i.pop();
      break;
    }
    o = o.slice(1);
  }
  return { heartbeatsToSend: i, unsentEntries: o };
}
class fx {
  constructor(n) {
    (this.app = n),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Y1()
      ? X1()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const i = await ax(this.app);
      return i != null && i.heartbeats ? i : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(n) {
    var i;
    if (await this._canUseIndexedDBPromise) {
      const l = await this.read();
      return Eh(this.app, {
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
      return Eh(this.app, {
        lastSentHeartbeatDate:
          (i = n.lastSentHeartbeatDate) !== null && i !== void 0
            ? i
            : l.lastSentHeartbeatDate,
        heartbeats: [...l.heartbeats, ...n.heartbeats],
      });
    } else return;
  }
}
function Ch(r) {
  return Tp(JSON.stringify({ version: 2, heartbeats: r })).length;
}
function hx(r) {
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
 */ function px(r) {
  ji(new jr("platform-logger", (n) => new Cw(n), "PRIVATE")),
    ji(new jr("heartbeat", (n) => new cx(n), "PRIVATE")),
    br(hu, kh, r),
    br(hu, kh, "esm2017"),
    br("fire-js", "");
}
px("");
var mx = "firebase",
  gx = "11.3.1";
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
 */ br(mx, gx, "app");
function Lu(r, n) {
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
function zp() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const yx = zp,
  Bp = new Bi("auth", "Firebase", zp());
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
 */ const So = new Op("@firebase/auth");
function vx(r, ...n) {
  So.logLevel <= ge.WARN && So.warn(`Auth (${$i}): ${r}`, ...n);
}
function fo(r, ...n) {
  So.logLevel <= ge.ERROR && So.error(`Auth (${$i}): ${r}`, ...n);
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
 */ function $t(r, ...n) {
  throw Mu(r, ...n);
}
function bt(r, ...n) {
  return Mu(r, ...n);
}
function Du(r, n, i) {
  const o = Object.assign(Object.assign({}, yx()), { [n]: i });
  return new Bi("auth", "Firebase", o).create(n, { appName: r.name });
}
function Zn(r) {
  return Du(
    r,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function wx(r, n, i) {
  const o = i;
  if (!(n instanceof o))
    throw (
      (o.name !== n.constructor.name && $t(r, "argument-error"),
      Du(
        r,
        "argument-error",
        `Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function Mu(r, ...n) {
  if (typeof r != "string") {
    const i = n[0],
      o = [...n.slice(1)];
    return o[0] && (o[0].appName = r.name), r._errorFactory.create(i, ...o);
  }
  return Bp.create(r, ...n);
}
function ee(r, n, ...i) {
  if (!r) throw Mu(n, ...i);
}
function en(r) {
  const n = "INTERNAL ASSERTION FAILED: " + r;
  throw (fo(n), new Error(n));
}
function on(r, n) {
  r || en(n);
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
 */ function Eo() {
  var r;
  return (
    (typeof self < "u" &&
      ((r = self.location) === null || r === void 0 ? void 0 : r.href)) ||
    ""
  );
}
function Hp() {
  return Nh() === "http:" || Nh() === "https:";
}
function Nh() {
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
 */ function xx() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (Hp() || G1() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function kx() {
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
 */ class Vi {
  constructor(n, i) {
    (this.shortDelay = n),
      (this.longDelay = i),
      on(i > n, "Short delay should be less than long delay!"),
      (this.isMobile = q1() || J1());
  }
  get() {
    return xx()
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
 */ function Fu(r, n) {
  on(r.emulator, "Emulator should always be set here");
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
 */ class $p {
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
    en(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    en(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    en(
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
 */ const Sx = {
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
 */ const Ex = new Vi(3e4, 6e4);
function Mo(r, n) {
  return r.tenantId && !n.tenantId
    ? Object.assign(Object.assign({}, n), { tenantId: r.tenantId })
    : n;
}
async function tr(r, n, i, o, l = {}) {
  return Vp(r, l, async () => {
    let c = {},
      f = {};
    o && (n === "GET" ? (f = o) : (c = { body: JSON.stringify(o) }));
    const g = Hi(Object.assign({ key: r.config.apiKey }, f)).slice(1),
      m = await r._getAdditionalHeaders();
    (m["Content-Type"] = "application/json"),
      r.languageCode && (m["X-Firebase-Locale"] = r.languageCode);
    const y = Object.assign({ method: n, headers: m }, c);
    return (
      K1() || (y.referrerPolicy = "no-referrer"),
      $p.fetch()(Wp(r, r.config.apiHost, i, g), y)
    );
  });
}
async function Vp(r, n, i) {
  r._canInitEmulator = !1;
  const o = Object.assign(Object.assign({}, Sx), n);
  try {
    const l = new Cx(r),
      c = await Promise.race([i(), l.promise]);
    l.clearNetworkTimeout();
    const f = await c.json();
    if ("needConfirmation" in f)
      throw so(r, "account-exists-with-different-credential", f);
    if (c.ok && !("errorMessage" in f)) return f;
    {
      const g = c.ok ? f.errorMessage : f.error.message,
        [m, y] = g.split(" : ");
      if (m === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw so(r, "credential-already-in-use", f);
      if (m === "EMAIL_EXISTS") throw so(r, "email-already-in-use", f);
      if (m === "USER_DISABLED") throw so(r, "user-disabled", f);
      const w = o[m] || m.toLowerCase().replace(/[_\s]+/g, "-");
      if (y) throw Du(r, w, y);
      $t(r, w);
    }
  } catch (l) {
    if (l instanceof Ln) throw l;
    $t(r, "network-request-failed", { message: String(l) });
  }
}
async function _x(r, n, i, o, l = {}) {
  const c = await tr(r, n, i, o, l);
  return (
    "mfaPendingCredential" in c &&
      $t(r, "multi-factor-auth-required", { _serverResponse: c }),
    c
  );
}
function Wp(r, n, i, o) {
  const l = `${n}${i}?${o}`;
  return r.config.emulator ? Fu(r.config, l) : `${r.config.apiScheme}://${l}`;
}
class Cx {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(n) {
    (this.auth = n),
      (this.timer = null),
      (this.promise = new Promise((i, o) => {
        this.timer = setTimeout(
          () => o(bt(this.auth, "network-request-failed")),
          Ex.get()
        );
      }));
  }
}
function so(r, n, i) {
  const o = { appName: r.name };
  i.email && (o.email = i.email),
    i.phoneNumber && (o.phoneNumber = i.phoneNumber);
  const l = bt(r, n, o);
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
 */ async function Nx(r, n) {
  return tr(r, "POST", "/v1/accounts:delete", n);
}
async function qp(r, n) {
  return tr(r, "POST", "/v1/accounts:lookup", n);
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
 */ function Ri(r) {
  if (r)
    try {
      const n = new Date(Number(r));
      if (!isNaN(n.getTime())) return n.toUTCString();
    } catch {}
}
async function bx(r, n = !1) {
  const i = un(r),
    o = await i.getIdToken(n),
    l = Uu(o);
  ee(l && l.exp && l.auth_time && l.iat, i.auth, "internal-error");
  const c = typeof l.firebase == "object" ? l.firebase : void 0,
    f = c == null ? void 0 : c.sign_in_provider;
  return {
    claims: l,
    token: o,
    authTime: Ri(Yl(l.auth_time)),
    issuedAtTime: Ri(Yl(l.iat)),
    expirationTime: Ri(Yl(l.exp)),
    signInProvider: f || null,
    signInSecondFactor: (c == null ? void 0 : c.sign_in_second_factor) || null,
  };
}
function Yl(r) {
  return Number(r) * 1e3;
}
function Uu(r) {
  const [n, i, o] = r.split(".");
  if (n === void 0 || i === void 0 || o === void 0)
    return fo("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const l = Pp(i);
    return l
      ? JSON.parse(l)
      : (fo("Failed to decode base64 JWT payload"), null);
  } catch (l) {
    return (
      fo(
        "Caught error parsing JWT payload as JSON",
        l == null ? void 0 : l.toString()
      ),
      null
    );
  }
}
function bh(r) {
  const n = Uu(r);
  return (
    ee(n, "internal-error"),
    ee(typeof n.exp < "u", "internal-error"),
    ee(typeof n.iat < "u", "internal-error"),
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
 */ async function Oi(r, n, i = !1) {
  if (i) return n;
  try {
    return await n;
  } catch (o) {
    throw (
      (o instanceof Ln &&
        Ix(o) &&
        r.auth.currentUser === r &&
        (await r.auth.signOut()),
      o)
    );
  }
}
function Ix({ code: r }) {
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
 */ class Rx {
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
 */ class gu {
  constructor(n, i) {
    (this.createdAt = n), (this.lastLoginAt = i), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Ri(this.lastLoginAt)),
      (this.creationTime = Ri(this.createdAt));
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
 */ async function Li(r) {
  var n;
  const i = r.auth,
    o = await r.getIdToken(),
    l = await Oi(r, qp(i, { idToken: o }));
  ee(l == null ? void 0 : l.users.length, i, "internal-error");
  const c = l.users[0];
  r._notifyReloadListener(c);
  const f =
      !((n = c.providerUserInfo) === null || n === void 0) && n.length
        ? Kp(c.providerUserInfo)
        : [],
    g = Px(r.providerData, f),
    m = r.isAnonymous,
    y = !(r.email && c.passwordHash) && !(g != null && g.length),
    w = m ? y : !1,
    _ = {
      uid: c.localId,
      displayName: c.displayName || null,
      photoURL: c.photoUrl || null,
      email: c.email || null,
      emailVerified: c.emailVerified || !1,
      phoneNumber: c.phoneNumber || null,
      tenantId: c.tenantId || null,
      providerData: g,
      metadata: new gu(c.createdAt, c.lastLoginAt),
      isAnonymous: w,
    };
  Object.assign(r, _);
}
async function Tx(r) {
  const n = un(r);
  await Li(n),
    await n.auth._persistUserIfCurrent(n),
    n.auth._notifyListenersIfCurrent(n);
}
function Px(r, n) {
  return [
    ...r.filter((o) => !n.some((l) => l.providerId === o.providerId)),
    ...n,
  ];
}
function Kp(r) {
  return r.map((n) => {
    var { providerId: i } = n,
      o = Lu(n, ["providerId"]);
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
 */ async function jx(r, n) {
  const i = await Vp(r, {}, async () => {
    const o = Hi({ grant_type: "refresh_token", refresh_token: n }).slice(1),
      { tokenApiHost: l, apiKey: c } = r.config,
      f = Wp(r, l, "/v1/token", `key=${c}`),
      g = await r._getAdditionalHeaders();
    return (
      (g["Content-Type"] = "application/x-www-form-urlencoded"),
      $p.fetch()(f, { method: "POST", headers: g, body: o })
    );
  });
  return {
    accessToken: i.access_token,
    expiresIn: i.expires_in,
    refreshToken: i.refresh_token,
  };
}
async function Ax(r, n) {
  return tr(r, "POST", "/v2/accounts:revokeToken", Mo(r, n));
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
 */ class Ir {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(n) {
    ee(n.idToken, "internal-error"),
      ee(typeof n.idToken < "u", "internal-error"),
      ee(typeof n.refreshToken < "u", "internal-error");
    const i =
      "expiresIn" in n && typeof n.expiresIn < "u"
        ? Number(n.expiresIn)
        : bh(n.idToken);
    this.updateTokensAndExpiration(n.idToken, n.refreshToken, i);
  }
  updateFromIdToken(n) {
    ee(n.length !== 0, "internal-error");
    const i = bh(n);
    this.updateTokensAndExpiration(n, null, i);
  }
  async getToken(n, i = !1) {
    return !i && this.accessToken && !this.isExpired
      ? this.accessToken
      : (ee(this.refreshToken, n, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(n, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(n, i) {
    const { accessToken: o, refreshToken: l, expiresIn: c } = await jx(n, i);
    this.updateTokensAndExpiration(o, l, Number(c));
  }
  updateTokensAndExpiration(n, i, o) {
    (this.refreshToken = i || null),
      (this.accessToken = n || null),
      (this.expirationTime = Date.now() + o * 1e3);
  }
  static fromJSON(n, i) {
    const { refreshToken: o, accessToken: l, expirationTime: c } = i,
      f = new Ir();
    return (
      o &&
        (ee(typeof o == "string", "internal-error", { appName: n }),
        (f.refreshToken = o)),
      l &&
        (ee(typeof l == "string", "internal-error", { appName: n }),
        (f.accessToken = l)),
      c &&
        (ee(typeof c == "number", "internal-error", { appName: n }),
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
    return Object.assign(new Ir(), this.toJSON());
  }
  _performRefresh() {
    return en("not implemented");
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
 */ function Rn(r, n) {
  ee(typeof r == "string" || typeof r > "u", "internal-error", { appName: n });
}
class tn {
  constructor(n) {
    var { uid: i, auth: o, stsTokenManager: l } = n,
      c = Lu(n, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new Rx(this)),
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
      (this.metadata = new gu(c.createdAt || void 0, c.lastLoginAt || void 0));
  }
  async getIdToken(n) {
    const i = await Oi(this, this.stsTokenManager.getToken(this.auth, n));
    return (
      ee(i, this.auth, "internal-error"),
      this.accessToken !== i &&
        ((this.accessToken = i),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      i
    );
  }
  getIdTokenResult(n) {
    return bx(this, n);
  }
  reload() {
    return Tx(this);
  }
  _assign(n) {
    this !== n &&
      (ee(this.uid === n.uid, this.auth, "internal-error"),
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
    const i = new tn(
      Object.assign(Object.assign({}, this), {
        auth: n,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return i.metadata._copy(this.metadata), i;
  }
  _onReload(n) {
    ee(!this.reloadListener, this.auth, "internal-error"),
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
      i && (await Li(this)),
      await this.auth._persistUserIfCurrent(this),
      o && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (zt(this.auth.app)) return Promise.reject(Zn(this.auth));
    const n = await this.getIdToken();
    return (
      await Oi(this, Nx(this.auth, { idToken: n })),
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
    var o, l, c, f, g, m, y, w;
    const _ = (o = i.displayName) !== null && o !== void 0 ? o : void 0,
      E = (l = i.email) !== null && l !== void 0 ? l : void 0,
      O = (c = i.phoneNumber) !== null && c !== void 0 ? c : void 0,
      k = (f = i.photoURL) !== null && f !== void 0 ? f : void 0,
      R = (g = i.tenantId) !== null && g !== void 0 ? g : void 0,
      b = (m = i._redirectEventId) !== null && m !== void 0 ? m : void 0,
      A = (y = i.createdAt) !== null && y !== void 0 ? y : void 0,
      F = (w = i.lastLoginAt) !== null && w !== void 0 ? w : void 0,
      {
        uid: $,
        emailVerified: Q,
        isAnonymous: B,
        providerData: se,
        stsTokenManager: ae,
      } = i;
    ee($ && ae, n, "internal-error");
    const fe = Ir.fromJSON(this.name, ae);
    ee(typeof $ == "string", n, "internal-error"),
      Rn(_, n.name),
      Rn(E, n.name),
      ee(typeof Q == "boolean", n, "internal-error"),
      ee(typeof B == "boolean", n, "internal-error"),
      Rn(O, n.name),
      Rn(k, n.name),
      Rn(R, n.name),
      Rn(b, n.name),
      Rn(A, n.name),
      Rn(F, n.name);
    const he = new tn({
      uid: $,
      auth: n,
      email: E,
      emailVerified: Q,
      displayName: _,
      isAnonymous: B,
      photoURL: k,
      phoneNumber: O,
      tenantId: R,
      stsTokenManager: fe,
      createdAt: A,
      lastLoginAt: F,
    });
    return (
      se &&
        Array.isArray(se) &&
        (he.providerData = se.map((Pe) => Object.assign({}, Pe))),
      b && (he._redirectEventId = b),
      he
    );
  }
  static async _fromIdTokenResponse(n, i, o = !1) {
    const l = new Ir();
    l.updateFromServerResponse(i);
    const c = new tn({
      uid: i.localId,
      auth: n,
      stsTokenManager: l,
      isAnonymous: o,
    });
    return await Li(c), c;
  }
  static async _fromGetAccountInfoResponse(n, i, o) {
    const l = i.users[0];
    ee(l.localId !== void 0, "internal-error");
    const c = l.providerUserInfo !== void 0 ? Kp(l.providerUserInfo) : [],
      f = !(l.email && l.passwordHash) && !(c != null && c.length),
      g = new Ir();
    g.updateFromIdToken(o);
    const m = new tn({
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
        metadata: new gu(l.createdAt, l.lastLoginAt),
        isAnonymous: !(l.email && l.passwordHash) && !(c != null && c.length),
      };
    return Object.assign(m, y), m;
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
 */ const Ih = new Map();
function nn(r) {
  on(r instanceof Function, "Expected a class definition");
  let n = Ih.get(r);
  return n
    ? (on(n instanceof r, "Instance stored in cache mismatched with class"), n)
    : ((n = new r()), Ih.set(r, n), n);
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
 */ class Gp {
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
Gp.type = "NONE";
const Rh = Gp;
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
 */ function ho(r, n, i) {
  return `firebase:${r}:${n}:${i}`;
}
class Rr {
  constructor(n, i, o) {
    (this.persistence = n), (this.auth = i), (this.userKey = o);
    const { config: l, name: c } = this.auth;
    (this.fullUserKey = ho(this.userKey, l.apiKey, c)),
      (this.fullPersistenceKey = ho("persistence", l.apiKey, c)),
      (this.boundEventHandler = i._onStorageEvent.bind(i)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(n) {
    return this.persistence._set(this.fullUserKey, n.toJSON());
  }
  async getCurrentUser() {
    const n = await this.persistence._get(this.fullUserKey);
    return n ? tn._fromJSON(this.auth, n) : null;
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
    if (!i.length) return new Rr(nn(Rh), n, o);
    const l = (
      await Promise.all(
        i.map(async (y) => {
          if (await y._isAvailable()) return y;
        })
      )
    ).filter((y) => y);
    let c = l[0] || nn(Rh);
    const f = ho(o, n.config.apiKey, n.name);
    let g = null;
    for (const y of i)
      try {
        const w = await y._get(f);
        if (w) {
          const _ = tn._fromJSON(n, w);
          y !== c && (g = _), (c = y);
          break;
        }
      } catch {}
    const m = l.filter((y) => y._shouldAllowMigration);
    return !c._shouldAllowMigration || !m.length
      ? new Rr(c, n, o)
      : ((c = m[0]),
        g && (await c._set(f, g.toJSON())),
        await Promise.all(
          i.map(async (y) => {
            if (y !== c)
              try {
                await y._remove(f);
              } catch {}
          })
        ),
        new Rr(c, n, o));
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
 */ function Th(r) {
  const n = r.toLowerCase();
  if (n.includes("opera/") || n.includes("opr/") || n.includes("opios/"))
    return "Opera";
  if (Xp(n)) return "IEMobile";
  if (n.includes("msie") || n.includes("trident/")) return "IE";
  if (n.includes("edge/")) return "Edge";
  if (Jp(n)) return "Firefox";
  if (n.includes("silk/")) return "Silk";
  if (em(n)) return "Blackberry";
  if (tm(n)) return "Webos";
  if (Qp(n)) return "Safari";
  if ((n.includes("chrome/") || Yp(n)) && !n.includes("edge/")) return "Chrome";
  if (Zp(n)) return "Android";
  {
    const i = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      o = r.match(i);
    if ((o == null ? void 0 : o.length) === 2) return o[1];
  }
  return "Other";
}
function Jp(r = Ge()) {
  return /firefox\//i.test(r);
}
function Qp(r = Ge()) {
  const n = r.toLowerCase();
  return (
    n.includes("safari/") &&
    !n.includes("chrome/") &&
    !n.includes("crios/") &&
    !n.includes("android")
  );
}
function Yp(r = Ge()) {
  return /crios\//i.test(r);
}
function Xp(r = Ge()) {
  return /iemobile/i.test(r);
}
function Zp(r = Ge()) {
  return /android/i.test(r);
}
function em(r = Ge()) {
  return /blackberry/i.test(r);
}
function tm(r = Ge()) {
  return /webos/i.test(r);
}
function zu(r = Ge()) {
  return (
    /iphone|ipad|ipod/i.test(r) || (/macintosh/i.test(r) && /mobile/i.test(r))
  );
}
function Ox(r = Ge()) {
  var n;
  return (
    zu(r) &&
    !!(!((n = window.navigator) === null || n === void 0) && n.standalone)
  );
}
function Lx() {
  return Q1() && document.documentMode === 10;
}
function nm(r = Ge()) {
  return zu(r) || Zp(r) || tm(r) || em(r) || /windows phone/i.test(r) || Xp(r);
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
 */ function rm(r, n = []) {
  let i;
  switch (r) {
    case "Browser":
      i = Th(Ge());
      break;
    case "Worker":
      i = `${Th(Ge())}-${r}`;
      break;
    default:
      i = r;
  }
  const o = n.length ? n.join(",") : "FirebaseCore-web";
  return `${i}/JsCore/${$i}/${o}`;
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
 */ class Dx {
  constructor(n) {
    (this.auth = n), (this.queue = []);
  }
  pushCallback(n, i) {
    const o = (c) =>
      new Promise((f, g) => {
        try {
          const m = n(c);
          f(m);
        } catch (m) {
          g(m);
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
 */ async function Mx(r, n = {}) {
  return tr(r, "GET", "/v2/passwordPolicy", Mo(r, n));
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
 */ const Fx = 6;
class Ux {
  constructor(n) {
    var i, o, l, c;
    const f = n.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (i = f.minPasswordLength) !== null && i !== void 0 ? i : Fx),
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
    const m = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(n, m),
      this.validatePasswordCharacterOptions(n, m),
      m.isValid &&
        (m.isValid =
          (i = m.meetsMinPasswordLength) !== null && i !== void 0 ? i : !0),
      m.isValid &&
        (m.isValid =
          (o = m.meetsMaxPasswordLength) !== null && o !== void 0 ? o : !0),
      m.isValid &&
        (m.isValid =
          (l = m.containsLowercaseLetter) !== null && l !== void 0 ? l : !0),
      m.isValid &&
        (m.isValid =
          (c = m.containsUppercaseLetter) !== null && c !== void 0 ? c : !0),
      m.isValid &&
        (m.isValid =
          (f = m.containsNumericCharacter) !== null && f !== void 0 ? f : !0),
      m.isValid &&
        (m.isValid =
          (g = m.containsNonAlphanumericCharacter) !== null && g !== void 0
            ? g
            : !0),
      m
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
 */ class zx {
  constructor(n, i, o, l) {
    (this.app = n),
      (this.heartbeatServiceProvider = i),
      (this.appCheckServiceProvider = o),
      (this.config = l),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Ph(this)),
      (this.idTokenSubscription = new Ph(this)),
      (this.beforeStateQueue = new Dx(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Bp),
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
      i && (this._popupRedirectResolver = nn(i)),
      (this._initializationPromise = this.queue(async () => {
        var o, l;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Rr.create(this, n)), !this._deleted)
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
      const i = await qp(this, { idToken: n }),
        o = await tn._fromGetAccountInfoResponse(this, i, n);
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
    if (zt(this.app)) {
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
        m = await this.tryRedirectSignIn(n);
      (!f || f === g) && m != null && m.user && ((l = m.user), (c = !0));
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
      ee(this._popupRedirectResolver, this, "argument-error"),
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
      await Li(n);
    } catch (i) {
      if ((i == null ? void 0 : i.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(n);
  }
  useDeviceLanguage() {
    this.languageCode = kx();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(n) {
    if (zt(this.app)) return Promise.reject(Zn(this));
    const i = n ? un(n) : null;
    return (
      i &&
        ee(
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
        n && ee(this.tenantId === n.tenantId, this, "tenant-id-mismatch"),
        i || (await this.beforeStateQueue.runMiddleware(n)),
        this.queue(async () => {
          await this.directlySetCurrentUser(n), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return zt(this.app)
      ? Promise.reject(Zn(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(n) {
    return zt(this.app)
      ? Promise.reject(Zn(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(nn(n));
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
    const n = await Mx(this),
      i = new Ux(n);
    this.tenantId === null
      ? (this._projectPasswordPolicy = i)
      : (this._tenantPasswordPolicies[this.tenantId] = i);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(n) {
    this._errorFactory = new Bi("auth", "Firebase", n());
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
      this.tenantId != null && (o.tenantId = this.tenantId), await Ax(this, o);
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
      const i = (n && nn(n)) || this._popupRedirectResolver;
      ee(i, this, "argument-error"),
        (this.redirectPersistenceManager = await Rr.create(
          this,
          [nn(i._redirectPersistence)],
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
      (ee(g, this, "internal-error"),
      g.then(() => {
        f || c(this.currentUser);
      }),
      typeof i == "function")
    ) {
      const m = n.addObserver(i, o, l);
      return () => {
        (f = !0), m();
      };
    } else {
      const m = n.addObserver(i);
      return () => {
        (f = !0), m();
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
      ee(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(n) {
    !n ||
      this.frameworks.includes(n) ||
      (this.frameworks.push(n),
      this.frameworks.sort(),
      (this.clientVersion = rm(
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
    if (zt(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const i = await ((n = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || n === void 0
      ? void 0
      : n.getToken());
    return (
      i != null &&
        i.error &&
        vx(`Error while retrieving App Check token: ${i.error}`),
      i == null ? void 0 : i.token
    );
  }
}
function Fo(r) {
  return un(r);
}
class Ph {
  constructor(n) {
    (this.auth = n),
      (this.observer = null),
      (this.addObserver = rw((i) => (this.observer = i)));
  }
  get next() {
    return (
      ee(this.observer, this.auth, "internal-error"),
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
 */ let Bu = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function Bx(r) {
  Bu = r;
}
function Hx(r) {
  return Bu.loadJS(r);
}
function $x() {
  return Bu.gapiScript;
}
function Vx(r) {
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
 */ function Wx(r, n) {
  const i = Mp(r, "auth");
  if (i.isInitialized()) {
    const l = i.getImmediate(),
      c = i.getOptions();
    if (xo(c, n ?? {})) return l;
    $t(l, "already-initialized");
  }
  return i.initialize({ options: n });
}
function qx(r, n) {
  const i = (n == null ? void 0 : n.persistence) || [],
    o = (Array.isArray(i) ? i : [i]).map(nn);
  n != null && n.errorMap && r._updateErrorMap(n.errorMap),
    r._initializeWithPersistence(
      o,
      n == null ? void 0 : n.popupRedirectResolver
    );
}
function Kx(r, n, i) {
  const o = Fo(r);
  ee(o._canInitEmulator, o, "emulator-config-failed"),
    ee(/^https?:\/\//.test(n), o, "invalid-emulator-scheme");
  const l = !1,
    c = im(n),
    { host: f, port: g } = Gx(n),
    m = g === null ? "" : `:${g}`;
  (o.config.emulator = { url: `${c}//${f}${m}/` }),
    (o.settings.appVerificationDisabledForTesting = !0),
    (o.emulatorConfig = Object.freeze({
      host: f,
      port: g,
      protocol: c.replace(":", ""),
      options: Object.freeze({ disableWarnings: l }),
    })),
    Jx();
}
function im(r) {
  const n = r.indexOf(":");
  return n < 0 ? "" : r.substr(0, n + 1);
}
function Gx(r) {
  const n = im(r),
    i = /(\/\/)?([^?#/]+)/.exec(r.substr(n.length));
  if (!i) return { host: "", port: null };
  const o = i[2].split("@").pop() || "",
    l = /^(\[[^\]]+\])(:|$)/.exec(o);
  if (l) {
    const c = l[1];
    return { host: c, port: jh(o.substr(c.length + 1)) };
  } else {
    const [c, f] = o.split(":");
    return { host: c, port: jh(f) };
  }
}
function jh(r) {
  if (!r) return null;
  const n = Number(r);
  return isNaN(n) ? null : n;
}
function Jx() {
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
 */ class sm {
  constructor(n, i) {
    (this.providerId = n), (this.signInMethod = i);
  }
  toJSON() {
    return en("not implemented");
  }
  _getIdTokenResponse(n) {
    return en("not implemented");
  }
  _linkToIdToken(n, i) {
    return en("not implemented");
  }
  _getReauthenticationResolver(n) {
    return en("not implemented");
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
 */ async function Tr(r, n) {
  return _x(r, "POST", "/v1/accounts:signInWithIdp", Mo(r, n));
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
 */ const Qx = "http://localhost";
class an extends sm {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(n) {
    const i = new an(n.providerId, n.signInMethod);
    return (
      n.idToken || n.accessToken
        ? (n.idToken && (i.idToken = n.idToken),
          n.accessToken && (i.accessToken = n.accessToken),
          n.nonce && !n.pendingToken && (i.nonce = n.nonce),
          n.pendingToken && (i.pendingToken = n.pendingToken))
        : n.oauthToken && n.oauthTokenSecret
        ? ((i.accessToken = n.oauthToken), (i.secret = n.oauthTokenSecret))
        : $t("argument-error"),
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
      c = Lu(i, ["providerId", "signInMethod"]);
    if (!o || !l) return null;
    const f = new an(o, l);
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
    return Tr(n, i);
  }
  _linkToIdToken(n, i) {
    const o = this.buildRequest();
    return (o.idToken = i), Tr(n, o);
  }
  _getReauthenticationResolver(n) {
    const i = this.buildRequest();
    return (i.autoCreate = !1), Tr(n, i);
  }
  buildRequest() {
    const n = { requestUri: Qx, returnSecureToken: !0 };
    if (this.pendingToken) n.pendingToken = this.pendingToken;
    else {
      const i = {};
      this.idToken && (i.id_token = this.idToken),
        this.accessToken && (i.access_token = this.accessToken),
        this.secret && (i.oauth_token_secret = this.secret),
        (i.providerId = this.providerId),
        this.nonce && !this.pendingToken && (i.nonce = this.nonce),
        (n.postBody = Hi(i));
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
 */ class Hu {
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
 */ class Ur extends Hu {
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
class Pr extends Ur {
  static credentialFromJSON(n) {
    const i = typeof n == "string" ? JSON.parse(n) : n;
    return (
      ee("providerId" in i && "signInMethod" in i, "argument-error"),
      an._fromParams(i)
    );
  }
  credential(n) {
    return this._credential(
      Object.assign(Object.assign({}, n), { nonce: n.rawNonce })
    );
  }
  _credential(n) {
    return (
      ee(n.idToken || n.accessToken, "argument-error"),
      an._fromParams(
        Object.assign(Object.assign({}, n), {
          providerId: this.providerId,
          signInMethod: this.providerId,
        })
      )
    );
  }
  static credentialFromResult(n) {
    return Pr.oauthCredentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Pr.oauthCredentialFromTaggedObject(n.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const {
      oauthIdToken: i,
      oauthAccessToken: o,
      oauthTokenSecret: l,
      pendingToken: c,
      nonce: f,
      providerId: g,
    } = n;
    if ((!o && !l && !i && !c) || !g) return null;
    try {
      return new Pr(g)._credential({
        idToken: i,
        accessToken: o,
        nonce: f,
        pendingToken: c,
      });
    } catch {
      return null;
    }
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
 */ class Tn extends Ur {
  constructor() {
    super("facebook.com");
  }
  static credential(n) {
    return an._fromParams({
      providerId: Tn.PROVIDER_ID,
      signInMethod: Tn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: n,
    });
  }
  static credentialFromResult(n) {
    return Tn.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Tn.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n || !("oauthAccessToken" in n) || !n.oauthAccessToken) return null;
    try {
      return Tn.credential(n.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Tn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Tn.PROVIDER_ID = "facebook.com";
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
 */ class Ct extends Ur {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(n, i) {
    return an._fromParams({
      providerId: Ct.PROVIDER_ID,
      signInMethod: Ct.GOOGLE_SIGN_IN_METHOD,
      idToken: n,
      accessToken: i,
    });
  }
  static credentialFromResult(n) {
    return Ct.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Ct.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const { oauthIdToken: i, oauthAccessToken: o } = n;
    if (!i && !o) return null;
    try {
      return Ct.credential(i, o);
    } catch {
      return null;
    }
  }
}
Ct.GOOGLE_SIGN_IN_METHOD = "google.com";
Ct.PROVIDER_ID = "google.com";
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
 */ class Zt extends Ur {
  constructor() {
    super("github.com");
  }
  static credential(n) {
    return an._fromParams({
      providerId: Zt.PROVIDER_ID,
      signInMethod: Zt.GITHUB_SIGN_IN_METHOD,
      accessToken: n,
    });
  }
  static credentialFromResult(n) {
    return Zt.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Zt.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n || !("oauthAccessToken" in n) || !n.oauthAccessToken) return null;
    try {
      return Zt.credential(n.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Zt.GITHUB_SIGN_IN_METHOD = "github.com";
Zt.PROVIDER_ID = "github.com";
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
 */ class Pn extends Ur {
  constructor() {
    super("twitter.com");
  }
  static credential(n, i) {
    return an._fromParams({
      providerId: Pn.PROVIDER_ID,
      signInMethod: Pn.TWITTER_SIGN_IN_METHOD,
      oauthToken: n,
      oauthTokenSecret: i,
    });
  }
  static credentialFromResult(n) {
    return Pn.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Pn.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const { oauthAccessToken: i, oauthTokenSecret: o } = n;
    if (!i || !o) return null;
    try {
      return Pn.credential(i, o);
    } catch {
      return null;
    }
  }
}
Pn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Pn.PROVIDER_ID = "twitter.com";
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
 */ class Ar {
  constructor(n) {
    (this.user = n.user),
      (this.providerId = n.providerId),
      (this._tokenResponse = n._tokenResponse),
      (this.operationType = n.operationType);
  }
  static async _fromIdTokenResponse(n, i, o, l = !1) {
    const c = await tn._fromIdTokenResponse(n, o, l),
      f = Ah(o);
    return new Ar({
      user: c,
      providerId: f,
      _tokenResponse: o,
      operationType: i,
    });
  }
  static async _forOperation(n, i, o) {
    await n._updateTokensIfNecessary(o, !0);
    const l = Ah(o);
    return new Ar({
      user: n,
      providerId: l,
      _tokenResponse: o,
      operationType: i,
    });
  }
}
function Ah(r) {
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
 */ class _o extends Ln {
  constructor(n, i, o, l) {
    var c;
    super(i.code, i.message),
      (this.operationType = o),
      (this.user = l),
      Object.setPrototypeOf(this, _o.prototype),
      (this.customData = {
        appName: n.name,
        tenantId: (c = n.tenantId) !== null && c !== void 0 ? c : void 0,
        _serverResponse: i.customData._serverResponse,
        operationType: o,
      });
  }
  static _fromErrorAndOperation(n, i, o, l) {
    return new _o(n, i, o, l);
  }
}
function om(r, n, i, o) {
  return (
    n === "reauthenticate"
      ? i._getReauthenticationResolver(r)
      : i._getIdTokenResponse(r)
  ).catch((c) => {
    throw c.code === "auth/multi-factor-auth-required"
      ? _o._fromErrorAndOperation(r, c, n, o)
      : c;
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
 */ function Yx(r) {
  return new Set(r.map(({ providerId: n }) => n).filter((n) => !!n));
}
async function am(r, n, i = !1) {
  const o = await Oi(r, n._linkToIdToken(r.auth, await r.getIdToken()), i);
  return Ar._forOperation(r, "link", o);
}
async function Xx(r, n, i) {
  await Li(n);
  const o = Yx(n.providerData);
  ee(o.has(i) === r, n.auth, "provider-already-linked");
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
 */ async function Zx(r, n, i = !1) {
  const { auth: o } = r;
  if (zt(o.app)) return Promise.reject(Zn(o));
  const l = "reauthenticate";
  try {
    const c = await Oi(r, om(o, l, n, r), i);
    ee(c.idToken, o, "internal-error");
    const f = Uu(c.idToken);
    ee(f, o, "internal-error");
    const { sub: g } = f;
    return ee(r.uid === g, o, "user-mismatch"), Ar._forOperation(r, l, c);
  } catch (c) {
    throw (
      ((c == null ? void 0 : c.code) === "auth/user-not-found" &&
        $t(o, "user-mismatch"),
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
 */ async function ek(r, n, i = !1) {
  if (zt(r.app)) return Promise.reject(Zn(r));
  const o = "signIn",
    l = await om(r, o, n),
    c = await Ar._fromIdTokenResponse(r, o, l);
  return i || (await r._updateCurrentUser(c.user)), c;
}
async function tk(r, n) {
  const i = un(r);
  return await Xx(!1, i, n.providerId), am(i, n);
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
 */ async function nk(r, n) {
  return tr(r, "POST", "/v1/accounts:createAuthUri", Mo(r, n));
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
  const i = Hp() ? Eo() : "http://localhost",
    o = { identifier: n, continueUri: i },
    { signinMethods: l } = await nk(un(r), o);
  return l || [];
}
function ik(r, n, i, o) {
  return un(r).onIdTokenChanged(n, i, o);
}
function sk(r, n, i) {
  return un(r).beforeAuthStateChanged(n, i);
}
function lm(r) {
  return un(r).signOut();
}
const Co = "__sak";
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
 */ class um {
  constructor(n, i) {
    (this.storageRetriever = n), (this.type = i);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Co, "1"),
          this.storage.removeItem(Co),
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
 */ const ok = 1e3,
  ak = 10;
class cm extends um {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (n, i) => this.onStorageEvent(n, i)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = nm()),
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
      this.forAllChangedKeys((f, g, m) => {
        this.notifyListeners(f, m);
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
    Lx() && c !== n.newValue && n.newValue !== n.oldValue
      ? setTimeout(l, ak)
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
      }, ok));
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
cm.type = "LOCAL";
const lk = cm;
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
 */ class dm extends um {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(n, i) {}
  _removeListener(n, i) {}
}
dm.type = "SESSION";
const fm = dm;
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
 */ function uk(r) {
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
 */ class Uo {
  constructor(n) {
    (this.eventTarget = n),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(n) {
    const i = this.receivers.find((l) => l.isListeningto(n));
    if (i) return i;
    const o = new Uo(n);
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
      m = await uk(g);
    i.ports[0].postMessage({
      status: "done",
      eventId: o,
      eventType: l,
      response: m,
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
Uo.receivers = [];
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
 */ function $u(r = "", n = 10) {
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
 */ class ck {
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
    return new Promise((g, m) => {
      const y = $u("", 20);
      l.port1.start();
      const w = setTimeout(() => {
        m(new Error("unsupported_event"));
      }, o);
      (f = {
        messageChannel: l,
        onMessage(_) {
          const E = _;
          if (E.data.eventId === y)
            switch (E.data.status) {
              case "ack":
                clearTimeout(w),
                  (c = setTimeout(() => {
                    m(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(c), g(E.data.response);
                break;
              default:
                clearTimeout(w),
                  clearTimeout(c),
                  m(new Error("invalid_response"));
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
 */ function Bt() {
  return window;
}
function dk(r) {
  Bt().location.href = r;
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
 */ function hm() {
  return (
    typeof Bt().WorkerGlobalScope < "u" &&
    typeof Bt().importScripts == "function"
  );
}
async function fk() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function hk() {
  var r;
  return (
    ((r = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    r === void 0
      ? void 0
      : r.controller) || null
  );
}
function pk() {
  return hm() ? self : null;
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
 */ const pm = "firebaseLocalStorageDb",
  mk = 1,
  No = "firebaseLocalStorage",
  mm = "fbase_key";
class Wi {
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
function zo(r, n) {
  return r.transaction([No], n ? "readwrite" : "readonly").objectStore(No);
}
function gk() {
  const r = indexedDB.deleteDatabase(pm);
  return new Wi(r).toPromise();
}
function yu() {
  const r = indexedDB.open(pm, mk);
  return new Promise((n, i) => {
    r.addEventListener("error", () => {
      i(r.error);
    }),
      r.addEventListener("upgradeneeded", () => {
        const o = r.result;
        try {
          o.createObjectStore(No, { keyPath: mm });
        } catch (l) {
          i(l);
        }
      }),
      r.addEventListener("success", async () => {
        const o = r.result;
        o.objectStoreNames.contains(No)
          ? n(o)
          : (o.close(), await gk(), n(await yu()));
      });
  });
}
async function Oh(r, n, i) {
  const o = zo(r, !0).put({ [mm]: n, value: i });
  return new Wi(o).toPromise();
}
async function yk(r, n) {
  const i = zo(r, !1).get(n),
    o = await new Wi(i).toPromise();
  return o === void 0 ? null : o.value;
}
function Lh(r, n) {
  const i = zo(r, !0).delete(n);
  return new Wi(i).toPromise();
}
const vk = 800,
  wk = 3;
class gm {
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
    return this.db ? this.db : ((this.db = await yu()), this.db);
  }
  async _withRetries(n) {
    let i = 0;
    for (;;)
      try {
        const o = await this._openDb();
        return await n(o);
      } catch (o) {
        if (i++ > wk) throw o;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return hm() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Uo._getInstance(pk())),
      this.receiver._subscribe("keyChanged", async (n, i) => ({
        keyProcessed: (await this._poll()).includes(i.key),
      })),
      this.receiver._subscribe("ping", async (n, i) => ["keyChanged"]);
  }
  async initializeSender() {
    var n, i;
    if (((this.activeServiceWorker = await fk()), !this.activeServiceWorker))
      return;
    this.sender = new ck(this.activeServiceWorker);
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
        hk() !== this.activeServiceWorker
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
      const n = await yu();
      return await Oh(n, Co, "1"), await Lh(n, Co), !0;
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
        await this._withRetries((o) => Oh(o, n, i)),
        (this.localCache[n] = i),
        this.notifyServiceWorker(n)
      )
    );
  }
  async _get(n) {
    const i = await this._withRetries((o) => yk(o, n));
    return (this.localCache[n] = i), i;
  }
  async _remove(n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((i) => Lh(i, n)),
        delete this.localCache[n],
        this.notifyServiceWorker(n)
      )
    );
  }
  async _poll() {
    const n = await this._withRetries((l) => {
      const c = zo(l, !1).getAll();
      return new Wi(c).toPromise();
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
      (this.pollTimer = setInterval(async () => this._poll(), vk));
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
gm.type = "LOCAL";
const xk = gm;
new Vi(3e4, 6e4);
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
 */ function ym(r, n) {
  return n
    ? nn(n)
    : (ee(r._popupRedirectResolver, r, "argument-error"),
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
 */ class Vu extends sm {
  constructor(n) {
    super("custom", "custom"), (this.params = n);
  }
  _getIdTokenResponse(n) {
    return Tr(n, this._buildIdpRequest());
  }
  _linkToIdToken(n, i) {
    return Tr(n, this._buildIdpRequest(i));
  }
  _getReauthenticationResolver(n) {
    return Tr(n, this._buildIdpRequest());
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
function kk(r) {
  return ek(r.auth, new Vu(r), r.bypassAuthState);
}
function Sk(r) {
  const { auth: n, user: i } = r;
  return ee(i, n, "internal-error"), Zx(i, new Vu(r), r.bypassAuthState);
}
async function Ek(r) {
  const { auth: n, user: i } = r;
  return ee(i, n, "internal-error"), am(i, new Vu(r), r.bypassAuthState);
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
 */ class vm {
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
    const m = {
      auth: this.auth,
      requestUri: i,
      sessionId: o,
      tenantId: c || void 0,
      postBody: l || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(g)(m));
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
        return kk;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Ek;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Sk;
      default:
        $t(this.auth, "internal-error");
    }
  }
  resolve(n) {
    on(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(n),
      this.unregisterAndCleanUp();
  }
  reject(n) {
    on(this.pendingPromise, "Pending promise was never set"),
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
 */ const _k = new Vi(2e3, 1e4);
async function vu(r, n, i) {
  if (zt(r.app))
    return Promise.reject(bt(r, "operation-not-supported-in-this-environment"));
  const o = Fo(r);
  wx(r, n, Hu);
  const l = ym(o, i);
  return new Yn(o, "signInViaPopup", n, l).executeNotNull();
}
class Yn extends vm {
  constructor(n, i, o, l, c) {
    super(n, i, l, c),
      (this.provider = o),
      (this.authWindow = null),
      (this.pollId = null),
      Yn.currentPopupAction && Yn.currentPopupAction.cancel(),
      (Yn.currentPopupAction = this);
  }
  async executeNotNull() {
    const n = await this.execute();
    return ee(n, this.auth, "internal-error"), n;
  }
  async onExecution() {
    on(this.filter.length === 1, "Popup operations only handle one event");
    const n = $u();
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
        i || this.reject(bt(this.auth, "web-storage-unsupported"));
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
    this.reject(bt(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Yn.currentPopupAction = null);
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
            this.reject(bt(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(n, _k.get());
    };
    n();
  }
}
Yn.currentPopupAction = null;
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
 */ const Ck = "pendingRedirect",
  po = new Map();
class Nk extends vm {
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
    let n = po.get(this.auth._key());
    if (!n) {
      try {
        const o = (await bk(this.resolver, this.auth))
          ? await super.execute()
          : null;
        n = () => Promise.resolve(o);
      } catch (i) {
        n = () => Promise.reject(i);
      }
      po.set(this.auth._key(), n);
    }
    return (
      this.bypassAuthState ||
        po.set(this.auth._key(), () => Promise.resolve(null)),
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
async function bk(r, n) {
  const i = Tk(n),
    o = Rk(r);
  if (!(await o._isAvailable())) return !1;
  const l = (await o._get(i)) === "true";
  return await o._remove(i), l;
}
function Ik(r, n) {
  po.set(r._key(), n);
}
function Rk(r) {
  return nn(r._redirectPersistence);
}
function Tk(r) {
  return ho(Ck, r.config.apiKey, r.name);
}
async function Pk(r, n, i = !1) {
  if (zt(r.app)) return Promise.reject(Zn(r));
  const o = Fo(r),
    l = ym(o, n),
    f = await new Nk(o, l, i).execute();
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
 */ const jk = 10 * 60 * 1e3;
class Ak {
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
        !Ok(n) ||
        ((this.hasHandledPotentialRedirect = !0),
        i || ((this.queuedRedirectEvent = n), (i = !0))),
      i
    );
  }
  sendToConsumer(n, i) {
    var o;
    if (n.error && !wm(n)) {
      const l =
        ((o = n.error.code) === null || o === void 0
          ? void 0
          : o.split("auth/")[1]) || "internal-error";
      i.onError(bt(this.auth, l));
    } else i.onAuthEvent(n);
  }
  isEventForConsumer(n, i) {
    const o = i.eventId === null || (!!n.eventId && n.eventId === i.eventId);
    return i.filter.includes(n.type) && o;
  }
  hasEventBeenHandled(n) {
    return (
      Date.now() - this.lastProcessedEventTime >= jk &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Dh(n))
    );
  }
  saveEventToCache(n) {
    this.cachedEventUids.add(Dh(n)), (this.lastProcessedEventTime = Date.now());
  }
}
function Dh(r) {
  return [r.type, r.eventId, r.sessionId, r.tenantId]
    .filter((n) => n)
    .join("-");
}
function wm({ type: r, error: n }) {
  return (
    r === "unknown" && (n == null ? void 0 : n.code) === "auth/no-auth-event"
  );
}
function Ok(r) {
  switch (r.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return wm(r);
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
 */ async function Lk(r, n = {}) {
  return tr(r, "GET", "/v1/projects", n);
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
 */ const Dk = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Mk = /^https?/;
async function Fk(r) {
  if (r.config.emulator) return;
  const { authorizedDomains: n } = await Lk(r);
  for (const i of n)
    try {
      if (Uk(i)) return;
    } catch {}
  $t(r, "unauthorized-domain");
}
function Uk(r) {
  const n = Eo(),
    { protocol: i, hostname: o } = new URL(n);
  if (r.startsWith("chrome-extension://")) {
    const f = new URL(r);
    return f.hostname === "" && o === ""
      ? i === "chrome-extension:" &&
          r.replace("chrome-extension://", "") ===
            n.replace("chrome-extension://", "")
      : i === "chrome-extension:" && f.hostname === o;
  }
  if (!Mk.test(i)) return !1;
  if (Dk.test(r)) return o === r;
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
 */ const zk = new Vi(3e4, 6e4);
function Mh() {
  const r = Bt().___jsl;
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
function Bk(r) {
  return new Promise((n, i) => {
    var o, l, c;
    function f() {
      Mh(),
        gapi.load("gapi.iframes", {
          callback: () => {
            n(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Mh(), i(bt(r, "network-request-failed"));
          },
          timeout: zk.get(),
        });
    }
    if (
      !(
        (l = (o = Bt().gapi) === null || o === void 0 ? void 0 : o.iframes) ===
          null || l === void 0
      ) &&
      l.Iframe
    )
      n(gapi.iframes.getContext());
    else if (!((c = Bt().gapi) === null || c === void 0) && c.load) f();
    else {
      const g = Vx("iframefcb");
      return (
        (Bt()[g] = () => {
          gapi.load ? f() : i(bt(r, "network-request-failed"));
        }),
        Hx(`${$x()}?onload=${g}`).catch((m) => i(m))
      );
    }
  }).catch((n) => {
    throw ((mo = null), n);
  });
}
let mo = null;
function Hk(r) {
  return (mo = mo || Bk(r)), mo;
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
 */ const $k = new Vi(5e3, 15e3),
  Vk = "__/auth/iframe",
  Wk = "emulator/auth/iframe",
  qk = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  Kk = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function Gk(r) {
  const n = r.config;
  ee(n.authDomain, r, "auth-domain-config-required");
  const i = n.emulator ? Fu(n, Wk) : `https://${r.config.authDomain}/${Vk}`,
    o = { apiKey: n.apiKey, appName: r.name, v: $i },
    l = Kk.get(r.config.apiHost);
  l && (o.eid = l);
  const c = r._getFrameworks();
  return c.length && (o.fw = c.join(",")), `${i}?${Hi(o).slice(1)}`;
}
async function Jk(r) {
  const n = await Hk(r),
    i = Bt().gapi;
  return (
    ee(i, r, "internal-error"),
    n.open(
      {
        where: document.body,
        url: Gk(r),
        messageHandlersFilter: i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: qk,
        dontclear: !0,
      },
      (o) =>
        new Promise(async (l, c) => {
          await o.restyle({ setHideOnLeave: !1 });
          const f = bt(r, "network-request-failed"),
            g = Bt().setTimeout(() => {
              c(f);
            }, $k.get());
          function m() {
            Bt().clearTimeout(g), l(o);
          }
          o.ping(m).then(m, () => {
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
 */ const Qk = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  Yk = 500,
  Xk = 600,
  Zk = "_blank",
  eS = "http://localhost";
class Fh {
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
function tS(r, n, i, o = Yk, l = Xk) {
  const c = Math.max((window.screen.availHeight - l) / 2, 0).toString(),
    f = Math.max((window.screen.availWidth - o) / 2, 0).toString();
  let g = "";
  const m = Object.assign(Object.assign({}, Qk), {
      width: o.toString(),
      height: l.toString(),
      top: c,
      left: f,
    }),
    y = Ge().toLowerCase();
  i && (g = Yp(y) ? Zk : i), Jp(y) && ((n = n || eS), (m.scrollbars = "yes"));
  const w = Object.entries(m).reduce((E, [O, k]) => `${E}${O}=${k},`, "");
  if (Ox(y) && g !== "_self") return nS(n || "", g), new Fh(null);
  const _ = window.open(n || "", g, w);
  ee(_, r, "popup-blocked");
  try {
    _.focus();
  } catch {}
  return new Fh(_);
}
function nS(r, n) {
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
 */ const rS = "__/auth/handler",
  iS = "emulator/auth/handler",
  sS = encodeURIComponent("fac");
async function Uh(r, n, i, o, l, c) {
  ee(r.config.authDomain, r, "auth-domain-config-required"),
    ee(r.config.apiKey, r, "invalid-api-key");
  const f = {
    apiKey: r.config.apiKey,
    appName: r.name,
    authType: i,
    redirectUrl: o,
    v: $i,
    eventId: l,
  };
  if (n instanceof Hu) {
    n.setDefaultLanguage(r.languageCode),
      (f.providerId = n.providerId || ""),
      nw(n.getCustomParameters()) ||
        (f.customParameters = JSON.stringify(n.getCustomParameters()));
    for (const [w, _] of Object.entries({})) f[w] = _;
  }
  if (n instanceof Ur) {
    const w = n.getScopes().filter((_) => _ !== "");
    w.length > 0 && (f.scopes = w.join(","));
  }
  r.tenantId && (f.tid = r.tenantId);
  const g = f;
  for (const w of Object.keys(g)) g[w] === void 0 && delete g[w];
  const m = await r._getAppCheckToken(),
    y = m ? `#${sS}=${encodeURIComponent(m)}` : "";
  return `${oS(r)}?${Hi(g).slice(1)}${y}`;
}
function oS({ config: r }) {
  return r.emulator ? Fu(r, iS) : `https://${r.authDomain}/${rS}`;
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
 */ const Xl = "webStorageSupport";
class aS {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = fm),
      (this._completeRedirectFn = Pk),
      (this._overrideRedirectResult = Ik);
  }
  async _openPopup(n, i, o, l) {
    var c;
    on(
      (c = this.eventManagers[n._key()]) === null || c === void 0
        ? void 0
        : c.manager,
      "_initialize() not called before _openPopup()"
    );
    const f = await Uh(n, i, o, Eo(), l);
    return tS(n, f, $u());
  }
  async _openRedirect(n, i, o, l) {
    await this._originValidation(n);
    const c = await Uh(n, i, o, Eo(), l);
    return dk(c), new Promise(() => {});
  }
  _initialize(n) {
    const i = n._key();
    if (this.eventManagers[i]) {
      const { manager: l, promise: c } = this.eventManagers[i];
      return l
        ? Promise.resolve(l)
        : (on(c, "If manager is not set, promise should be"), c);
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
    const i = await Jk(n),
      o = new Ak(n);
    return (
      i.register(
        "authEvent",
        (l) => (
          ee(l == null ? void 0 : l.authEvent, n, "invalid-auth-event"),
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
      Xl,
      { type: Xl },
      (l) => {
        var c;
        const f =
          (c = l == null ? void 0 : l[0]) === null || c === void 0
            ? void 0
            : c[Xl];
        f !== void 0 && i(!!f), $t(n, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(n) {
    const i = n._key();
    return (
      this.originValidationPromises[i] ||
        (this.originValidationPromises[i] = Fk(n)),
      this.originValidationPromises[i]
    );
  }
  get _shouldInitProactively() {
    return nm() || Qp() || zu();
  }
}
const lS = aS;
var zh = "@firebase/auth",
  Bh = "1.9.0";
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
 */ class uS {
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
    ee(
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
 */ function cS(r) {
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
function dS(r) {
  ji(
    new jr(
      "auth",
      (n, { options: i }) => {
        const o = n.getProvider("app").getImmediate(),
          l = n.getProvider("heartbeat"),
          c = n.getProvider("app-check-internal"),
          { apiKey: f, authDomain: g } = o.options;
        ee(f && !f.includes(":"), "invalid-api-key", { appName: o.name });
        const m = {
            apiKey: f,
            authDomain: g,
            clientPlatform: r,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: rm(r),
          },
          y = new zx(o, l, c, m);
        return qx(y, i), y;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((n, i, o) => {
        n.getProvider("auth-internal").initialize();
      })
  ),
    ji(
      new jr(
        "auth-internal",
        (n) => {
          const i = Fo(n.getProvider("auth").getImmediate());
          return ((o) => new uS(o))(i);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    br(zh, Bh, cS(r)),
    br(zh, Bh, "esm2017");
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
 */ const fS = 5 * 60,
  hS = Ap("authIdTokenMaxAge") || fS;
let Hh = null;
const pS = (r) => async (n) => {
  const i = n && (await n.getIdTokenResult()),
    o = i && (new Date().getTime() - Date.parse(i.issuedAtTime)) / 1e3;
  if (o && o > hS) return;
  const l = i == null ? void 0 : i.token;
  Hh !== l &&
    ((Hh = l),
    await fetch(r, {
      method: l ? "POST" : "DELETE",
      headers: l ? { Authorization: `Bearer ${l}` } : {},
    }));
};
function xm(r = ix()) {
  const n = Mp(r, "auth");
  if (n.isInitialized()) return n.getImmediate();
  const i = Wx(r, { popupRedirectResolver: lS, persistence: [xk, lk, fm] }),
    o = Ap("authTokenSyncURL");
  if (o && typeof isSecureContext == "boolean" && isSecureContext) {
    const c = new URL(o, location.origin);
    if (location.origin === c.origin) {
      const f = pS(c.toString());
      sk(i, f, () => f(i.currentUser)), ik(i, (g) => f(g));
    }
  }
  const l = V1("auth");
  return l && Kx(i, `http://${l}`), i;
}
function mS() {
  var r, n;
  return (n =
    (r = document.getElementsByTagName("head")) === null || r === void 0
      ? void 0
      : r[0]) !== null && n !== void 0
    ? n
    : document;
}
Bx({
  loadJS(r) {
    return new Promise((n, i) => {
      const o = document.createElement("script");
      o.setAttribute("src", r),
        (o.onload = n),
        (o.onerror = (l) => {
          const c = bt("internal-error");
          (c.customData = l), i(c);
        }),
        (o.type = "text/javascript"),
        (o.charset = "UTF-8"),
        mS().appendChild(o);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
dS("Browser");
const gS = {
    apiKey: "AIzaSyAPY9NiUPjBIAkLFHeGRkMY1G7SPnbbqMw",
    authDomain: "shoe-ecommerce-9018b.firebaseapp.com",
    databaseURL: "https://shoe-ecommerce-9018b-default-rtdb.firebaseio.com",
    projectId: "shoe-ecommerce-9018b",
    storageBucket: "shoe-ecommerce-9018b.firebasestorage.app",
    messagingSenderId: "638139902566",
    appId: "1:638139902566:web:214c3a953085d039b65ba7",
    measurementId: "G-M6HE2JV3QS",
  },
  yS = Ou(gS),
  vS = new Ct(),
  km = xm(yS),
  wS = async () => {
    try {
      const r = await vu(km, vS),
        n = Ct.credentialFromResult(r),
        i = n == null ? void 0 : n.accessToken;
      return { user: r.user.displayName, type: "google" };
    } catch (r) {
      throw (console.error(r), r);
    }
  },
  xS = async () => {
    try {
      await lm(km);
    } catch (r) {
      throw (console.error(r), r);
    }
  },
  Sm = C.createContext(void 0),
  kS = ({ children: r }) => {
    const [n, i] = C.useState(!1),
      [o, l] = C.useState(null);
    C.useEffect(() => {
      const f = _t.get("user");
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
          _t.set("user", JSON.stringify(f), { expires: 7 }),
          i(!0);
      },
      handleLogout: () => {
        (o == null ? void 0 : o.type) === "google" && xS(),
          i(!1),
          _t.remove("user"),
          l(null);
      },
    };
    return h.jsx(Sm.Provider, { value: c, children: r });
  },
  Di = () => {
    const r = C.useContext(Sm);
    if (!r)
      throw new Error(
        "useAuthentication must be used within an AuthenticationProvider"
      );
    return r;
  },
  SS = () => {
    var n, i;
    const r = Di();
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
function ES() {
  const [r, n] = C.useState(new Array(4).fill("")),
    i = C.useRef([]),
    o = Io();
  C.useState({
    message: "Your changes have been saved!",
    color: "green",
    detail: "You can continue with your work.",
  });
  const [l, c] = C.useState(!1),
    f = () => {
      (async () => {
        const y = r.join(""),
          w = await Nt.post(
            "/v1/user/register/verify",
            JSON.stringify({ code: y })
          );
        console.log(w),
          console.log("Entered OTP:", y),
          w.status == 200 &&
            (c(!0),
            setTimeout(() => {
              o("/");
            }, 5e3));
      })();
    },
    g = (m, y) => {
      const w = m.target.value,
        _ = [...r];
      (_[y] = w),
        n(_),
        w && y < r.length - 1 && i.current[y + 1] && i.current[y + 1].focus();
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
            children: r.map((m, y) =>
              h.jsx(
                "input",
                {
                  type: "text",
                  value: m,
                  onChange: (w) => g(w, y),
                  maxLength: 1,
                  ref: (w) => (i.current[y] = w),
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
            onClick: (m) => {
              m.preventDefault(), f();
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
function _S() {
  const [r, n] = C.useState({ category: "", priceMin: "", priceMax: "" }),
    [i, o] = C.useState(!1),
    [l, c] = C.useState(!1),
    f = (w) => {
      const { name: _, value: E } = w.target;
      n({ ...r, [_]: E });
    },
    g = (w) => {
      w.preventDefault(), c(!l);
    },
    [m, y] = C.useState();
  return (
    C.useEffect(() => {
      (async () => {
        const _ = await Do().getProductWithFilter(r);
        y(_);
      })();
    }, [l]),
    h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className: "flex h-full w-full",
        children: [
          h.jsx("div", {
            className: Le("sider-bar w-1/3", i ? "block" : "hidden"),
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
                  onSubmit: (w) => g(w),
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
            className: Le(
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
              m == null
                ? void 0
                : m.map((w, _) =>
                    h.jsxs(
                      Ht,
                      {
                        to: Le("/product?product=" + w.id),
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
                      _
                    )
                  ),
          }),
        ],
      }),
    })
  );
}
const Em = C.createContext(void 0),
  CS = ({ children: r }) => {
    const [n, i] = C.useState(),
      [o, l] = C.useState(0),
      [c, f] = C.useState(0);
    C.useEffect(() => {
      if (_t.get("item")) {
        const k = _t.get("item");
        k != null && i(JSON.parse(k));
      }
    }, []),
      C.useEffect(() => {
        if (n) {
          const k = n.reduce((R, b) => R + b.base_price * b.stock, 0);
          f(k);
        }
      }),
      C.useEffect(() => {
        if (n) {
          const k = n.reduce((R, b) => R + b.stock, 0);
          l(k);
        }
      }, [n]);
    const g = (k) => {
        Array.isArray(k)
          ? (i(k), _t.set("item", JSON.stringify(k), { expires: 7 }))
          : i((R) => {
              if (R) {
                const b = R.findIndex((A) => A.id === k.id);
                if (b !== -1) {
                  const A = [...R];
                  return (
                    (A[b].stock += 1),
                    _t.set("item", JSON.stringify(A), { expires: 7 }),
                    A
                  );
                }
                return (
                  console.log(k),
                  _t.set("item", JSON.stringify([...R, { ...k, number: 1 }]), {
                    expires: 7,
                  }),
                  [...R, { ...k, number: 1 }]
                );
              }
              return _t.set("item", JSON.stringify([k]), { expires: 7 }), [k];
            });
      },
      m = (k) => {
        i((R) => {
          if (R != null)
            return (
              _t.set("item", JSON.stringify(R.filter((b) => b.id !== k)), {
                expires: 7,
              }),
              R.filter((b) => b.id !== k)
            );
        });
      },
      y = () => {
        _t.remove("item");
      },
      w = () => n,
      _ = () => c,
      E = (k) => {
        if (n) {
          const R = n.find((b) => b.id === k);
          R && g(R);
        }
      },
      O = (k) => {
        if (n) {
          const R = n.find((b) => b.id === k);
          if (R) {
            const b = n.map((A) =>
              A.id === k ? { ...A, stock: R.stock - 1 } : A
            );
            g(b);
          }
          R && (R == null ? void 0 : R.stock) < 2 && m(k);
        }
      };
    return h.jsx(Em.Provider, {
      value: {
        getItem: w,
        setItemCart: g,
        removeFromCart: m,
        deleteAllCart: y,
        increaseAmount: E,
        decreaseAmount: O,
        totalPrice: _,
      },
      children: r,
    });
  },
  _m = () => {
    const r = C.useContext(Em);
    if (!r)
      throw new Error("useCartContext must be used within an CartProvider");
    return r;
  },
  NS = () => {
    var g;
    const r = ln(),
      n = new URLSearchParams(r.search),
      [i, o] = C.useState(),
      [l, c] = C.useState(!1);
    C.useState(!1), console.log(n.get("product"));
    const f = _m();
    return (
      C.useEffect(() => {
        (async () => {
          try {
            const y = await Do().getProductById(Number(n.get("product")));
            o(y.data), c(!0);
          } catch (y) {
            console.error("Error fetching data:", y);
          }
        })();
      }, []),
      h.jsx(h.Fragment, {
        children: h.jsxs("div", {
          className: " p-4 md:p-8 my-11 mx-auto flex justify-center",
          children: [
            h.jsxs("div", {
              className: "  md:w-[640px]",
              children: [
                h.jsxs("nav", {
                  className: "text-sm text-gray-500 mb-4 w-full",
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
                l &&
                  h.jsx("img", {
                    src:
                      (g = i == null ? void 0 : i.ProductVariants[0]) == null
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
              className: " md:w-[640px] md:pl-8",
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
                          : i.ProductVariants.map((m, y) =>
                              h.jsx(
                                "button",
                                {
                                  className:
                                    "mb-2 rounded-full border border-gray-300 px-4 py-2 hover:scale-105 hover:bg-blue-500/25",
                                  children: m.size,
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
                      children: "Tổng đài hoạt động từ 10h00 - 22h00 mỗi ngày",
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
                  className: "grid grid-cols-2 space-y-2 text-sm text-gray-500",
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
      })
    );
  },
  bS = [
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
  IS = ({ iconPath: r, label: n }) =>
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
  RS = () =>
    h.jsx(h.Fragment, {
      children: h.jsxs("div", {
        className: "group fixed bottom-6 end-6 z-50",
        children: [
          h.jsx("div", {
            className:
              "mb-4 hidden flex-col items-center space-y-2 group-hover:flex",
            children: bS.map((r, n) =>
              h.jsx(IS, { iconPath: r.iconPath, label: r.label }, n)
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
    }),
  TS = () =>
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
                      fillRule: "evenodd",
                      d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
                      clipRule: "evenodd",
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
function PS() {
  return {
    createBrand: async (i) => await Nt.post("/api/brands", i),
    getBrand: async () => (await Nt.get("/api/brands")).data,
  };
}
function Cm() {
  C.useState(!1),
    C.useState({
      message: "Your changes have been saved!",
      color: "green",
      detail: "You can continue with your work.",
    });
  const [r, n] = C.useState(),
    [i, o] = C.useState(),
    [l, c] = C.useState({
      name: "",
      base_price: 0,
      brand_id: 1,
      description: "",
    }),
    [f, g] = C.useState([]);
  C.useEffect(() => {
    (async () => {
      const O = await PS().getBrand(),
        k = await Do().getProduct();
      n(k), o(O);
    })();
  }, []);
  const m = (E) => {
      const { name: O, value: k } = E.target;
      c((R) => ({ ...R, [O]: k }));
    },
    y = (E) => {
      const { name: O, value: k } = E.target;
      c((R) => ({ ...R, [O]: k }));
    },
    w = (E) => {
      const O = parseInt(E.target.value, 10);
      c((k) => ({ ...k, Brand_id: O }));
    };
  function _(E) {
    E.preventDefault();
  }
  return h.jsx(h.Fragment, {
    children: h.jsxs("div", {
      className: "flex justify-center my-14 ",
      children: [
        h.jsxs("form", {
          className: "lg:w-[640px]  ",
          onSubmit: (E) => _(E),
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
                  onChange: m,
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
                    onChange: (E) => {
                      const O = E.target.files ? E.target.files : null;
                      if (O && O.length > 0)
                        for (let k = 0; k < O.length; k++) {
                          const R = O[k];
                          g((b) => (b ? [...b, R] : [R]));
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
                  : f.map((E, O) =>
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
                                g((k) => (k ? (k.splice(O, 1), [...k]) : []));
                              },
                              children: h.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "size-6",
                                children: h.jsx("path", {
                                  fillRule: "evenodd",
                                  d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
                                  clipRule: "evenodd",
                                }),
                              }),
                            }),
                            h.jsx("img", {
                              src: URL.createObjectURL(E),
                              alt: "#",
                              className: "w-24",
                            }),
                          ],
                        },
                        O
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
              onChange: m,
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
              onChange: w,
              children:
                i == null
                  ? void 0
                  : i.map(
                      (E) => (
                        console.log(E),
                        h.jsx("option", { value: E.id, children: E.name }, E.id)
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
          className: " shadow-md sm:rounded-lg  mx-5",
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
              className: "",
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
                        : r.map((E, O) =>
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
                                    children: E.name,
                                  }),
                                  h.jsx("td", {
                                    className: "px-6 py-4",
                                    children: h.jsx("img", {
                                      src: "http://localhost:3000/uploads/",
                                    }),
                                  }),
                                  h.jsx("td", {
                                    className: "px-6 py-4",
                                    children: E.description,
                                  }),
                                  h.jsx("td", {
                                    className: "px-6 py-4",
                                    children: E.stock,
                                  }),
                                  h.jsx("td", {
                                    className: "px-6 py-4",
                                    children: h.jsx(Ht, {
                                      to: Le("/product?product=" + E.id),
                                      className:
                                        "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                                      children: "Edit",
                                    }),
                                  }),
                                ],
                              },
                              O
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
                            children: h.jsx(Ht, {
                              to: "#",
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
var wu;
(function (r) {
  (r.Pending = "pending"),
    (r.Paid = "paid"),
    (r.Shipped = "shipped"),
    (r.Delivered = "delivered"),
    (r.Cancelled = "cancelled");
})(wu || (wu = {}));
const jS = [
  { className: "px-16 py-3", title: "Image" },
  { className: "px-6 py-3", title: "MaSP" },
  { className: "px-6 py-3", title: "Total QTY" },
  { className: "px-6 py-3", title: "Total" },
  { className: "px-6 py-3", title: "Action" },
  { className: "px-6 py-3", title: "status" },
];
let Zl = "Detail";
const Nm = () => {
    const [r, n] = C.useState(-1),
      i = (o) => {
        r === o ? (n(-1), (Zl = "Detail")) : (n(o), (Zl = "Hidden"));
      };
    return h.jsx(h.Fragment, {
      children: h.jsx("div", {
        className:
          "shadow-md sm:rounded-lg mx-auto md:h-[640px] md:w-[1280px] md:my-32  border-2 ",
        children: h.jsxs("table", {
          className:
            "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
          children: [
            h.jsx("thead", {
              className:
                "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
              children: h.jsx("tr", {
                children: jS.map((o, l) =>
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
                        children: Zl,
                      }),
                    }),
                    h.jsx("td", {
                      className: "px-6 py-4",
                      children: wu.Pending,
                    }),
                  ],
                }),
                r === 0 &&
                  h.jsxs("tr", {
                    className:
                      " bg-white border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full",
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
                        children: h.jsx("div", {
                          className: "flex items-center",
                          children: h.jsx("div", {
                            children: h.jsx("input", {
                              type: "number",
                              id: "first_product",
                              className:
                                "bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              placeholder: "1",
                              disabled: !0,
                              required: !0,
                            }),
                          }),
                        }),
                      }),
                      h.jsx("td", {
                        className:
                          "px-6 py-4 font-semibold text-gray-900 dark:text-white",
                        children: "$599",
                      }),
                      h.jsx("td", { className: "px-6 py-4" }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  AS = [
    {
      title: "Home",
      link: "/",
      icon: "home",
      className: "text-gray-900 dark:text-white",
    },
    {
      title: "Shopping-Cart",
      icon: "cart",
      submenu: [
        { title: "Cart", link: "/user-management", icon: "" },
        { title: "Billing", link: "/user-billing", icon: "" },
        { title: "Invoice", link: "#", icon: "" },
      ],
      className: "text-gray-900 dark:text-white",
    },
    {
      title: "ManagingProduct",
      icon: "Product",
      submenu: [
        { title: "ManagingProduct", link: "/ManagingProduct", icon: "" },
        { title: "Stock", link: "#", icon: "" },
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
              fillRule: "evenodd",
              d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
              clipRule: "evenodd",
            }),
          }),
        },
        { title: "Billing", link: "#", icon: "" },
        { title: "Invoice", link: "#", icon: "" },
      ],
      className: "text-gray-900 dark:text-white",
    },
  ];
function $h() {
  return {
    create: async (o) => {
      const l = await Nt.post("/v1/user/register", o);
      return console.log(l), l;
    },
    login: async (o) => (
      console.log("http://localhost:3000/v1/user"),
      (await Nt.post("/v1/user", o)).data
    ),
    update: async (o) => {
      await Nt.post("/v1/user/update", o);
    },
  };
}
const OS = {
    apiKey: "AIzaSyAPY9NiUPjBIAkLFHeGRkMY1G7SPnbbqMw",
    authDomain: "shoe-ecommerce-9018b.firebaseapp.com",
    databaseURL: "https://shoe-ecommerce-9018b-default-rtdb.firebaseio.com",
    projectId: "shoe-ecommerce-9018b",
    storageBucket: "shoe-ecommerce-9018b.firebasestorage.app",
    messagingSenderId: "638139902566",
    appId: "1:638139902566:web:214c3a953085d039b65ba7",
    measurementId: "G-M6HE2JV3QS",
  },
  LS = Ou(OS),
  go = xm(LS),
  DS = new Zt(),
  MS = {
    "google.com": "Google",
    "facebook.com": "Facebook",
    "twitter.com": "Twitter",
    password: "Email/Password",
  },
  FS = async () => {
    try {
      await lm(go), console.log("User logged out successfully!");
    } catch (r) {
      throw (console.error("Logout error:", r), r);
    }
  },
  US = async () => {
    var r;
    try {
      const n = await vu(go, DS);
      return console.log("✅ GitHub sign-in successful:", n.user), n;
    } catch (n) {
      if (n.code === "auth/account-exists-with-different-credential") {
        const i = (r = n.customData) == null ? void 0 : r.email,
          o = n.credential;
        if (!i || !o)
          throw (
            (console.error("Error data:", { email: i, pendingCredential: o }),
            new Error("Missing email or credential in error data."))
          );
        try {
          const l = await rk(go, i);
          if (l.length === 0)
            throw new Error("No sign-in methods found for this email.");
          const c = l[0],
            f = MS[c] || c;
          if (
            !window.confirm(
              `This email (${i}) is already registered with ${f}. Please sign in with ${f} to link your GitHub account. Proceed?`
            )
          )
            throw new Error("User canceled the linking process.");
          let m;
          switch (c) {
            case "google.com":
              m = new Ct();
              break;
            case "facebook.com":
              m = new Pr("facebook.com");
              break;
            case "twitter.com":
              m = new Pr("twitter.com");
              break;
            case "password":
              throw new Error(
                "Email/Password linking requires a different flow."
              );
            default:
              throw new Error(`Provider '${c}' is not supported for linking.`);
          }
          const y = await vu(go, m);
          return (
            await tk(y.user, o),
            console.log("🎉 GitHub account linked successfully to", f),
            y
          );
        } catch (l) {
          throw (console.error("❌ Error during account linking:", l), l);
        }
      } else throw (console.error("❌ Sign-in error:", n.code, n.message), n);
    }
  },
  zS = ({ open: r, onClose: n }) => {
    const [i, o] = C.useState(!1),
      [l, c] = C.useState(""),
      [f, g] = C.useState(""),
      m = Io(),
      [y, w] = C.useState(!1),
      [_, E] = C.useState({ User_Name: "", password: "", mail: "" });
    C.useEffect(() => {
      r && w(!1);
    }, [r]);
    const O = () => {
        c(""), g(""), E({ User_Name: "", password: "", mail: "" });
      },
      k = Di();
    async function R() {
      const B = await $h().login({ User_Name: l, password: f });
      console.log(B), B && k.setUser(B);
    }
    const b = (B) =>
        B.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      A = (B) => {
        const { name: se, value: ae } = B.target;
        E((fe) => ({ ...fe, [se]: ae }));
      };
    async function F() {
      try {
        if ((console.log("User data:", _), b(_ == null ? void 0 : _.mail))) {
          console.log("http://localhost:3000/v1/user/register");
          const B = await $h().create(_);
          console.log("Response status:", B.status),
            B.status == 200 && m("/register/verify");
        }
        console.log("loi email");
      } catch (B) {
        console.error("Error:", B);
      }
    }
    const $ = async () => {
        const B = await wS();
        console.log(B), k.setUser(B), n();
      },
      Q = async () => {
        const B = await US();
        console.log(B), n(), FS();
      };
    return h.jsx(h.Fragment, {
      children: h.jsx("div", {
        className: Le(
          " items-center justify-center min-h-screen inset-0 fixed bg-black opacity-85 z-50",
          r ? "flex" : "hidden"
        ),
        children: h.jsxs("form", {
          className: Le(
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
                  fillRule: "evenodd",
                  d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
                  clipRule: "evenodd",
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
                  className: Le(
                    "py-2 px-4 rounded-l-full border-2",
                    i
                      ? "bg-white text-black"
                      : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                  ),
                  onClick: (B) => {
                    B.preventDefault(), O(), o(!i);
                  },
                  children: "Login",
                }),
                h.jsx("button", {
                  className: Le(
                    " py-2 px-4 rounded-r-full border-2",
                    i
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                      : "bg-white text-black"
                  ),
                  onClick: (B) => {
                    B.preventDefault(), O(), o(!i);
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
                onChange: (B) => {
                  c(B.target.value);
                },
              }),
            }),
            h.jsx("div", {
              className: "mb-4",
              children: h.jsx("input", {
                type: "password",
                placeholder: "Password",
                className: "w-full p-3 border border-gray-300 rounded-lg",
                onChange: (B) => {
                  g(B.target.value);
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
                    onChange: (B) => A(B),
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
                  onClick: Q,
                  children: "login github",
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
                    onClick: (B) => R(),
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
  eu = {
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
    Product: h.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "size-6",
      children: h.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z",
      }),
    }),
  };
function BS() {
  Di();
  const [r, n] = C.useState(null),
    [i, o] = C.useState(0),
    [l, c] = C.useState(!1),
    [f, g] = C.useState(!1),
    [m, y] = C.useState(!1),
    [w, _] = C.useState(!1);
  C.useEffect(() => {
    y(!0), c(!0);
  }, []);
  const E = Di(),
    O = (A) => {
      n(r === A ? null : A);
    },
    k = (A) => {
      o(i === A ? 0 : A);
    },
    R = () => {
      _(!w);
    },
    b = () => {
      g(!f);
    };
  switch (i) {
    case 3:
      h.jsx(Cm, {});
      break;
    case 4:
      h.jsx(Nm, {});
      break;
    default:
      h.jsx("div", {});
  }
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx("div", {
        className: Le(
          " left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 shadow-2xl transition-transform duration-500 fixed z-50",
          l
            ? f
              ? "w-16 translate-x-0"
              : "w-64 translate-x-0"
            : "-translate-x-full",
          m ? "transform translate-x-0" : "-translate-x-full"
        ),
        children: h.jsxs("div", {
          className: "h-full px-3 py-4",
          children: [
            h.jsx("button", {
              onClick: () => {
                b();
              },
              className: Le(
                "w-full mb-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200",
                f ? "flex justify-center" : ""
              ),
              children: f
                ? h.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    className: "size-6",
                    children: h.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
                    }),
                  })
                : "SiderBar",
            }),
            h.jsxs("ul", {
              className: "space-y-2 font-medium",
              children: [
                AS.map((A, F) =>
                  h.jsx(
                    "li",
                    {
                      children: A.submenu
                        ? h.jsxs(h.Fragment, {
                            children: [
                              h.jsxs("button", {
                                type: "button",
                                onClick: () => O(F),
                                className: Le(
                                  "flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                                  f ? "justify-center" : ""
                                ),
                                children: [
                                  eu[A.icon],
                                  !f &&
                                    h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx("span", {
                                          className: "ms-3 flex-1 text-left",
                                          children: A.title,
                                        }),
                                        h.jsx("svg", {
                                          className: Le(
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
                                  className: Le(
                                    "py-2 space-y-2",
                                    r === F ? "block" : "hidden"
                                  ),
                                  children: A.submenu.map(($, Q) =>
                                    h.jsx(
                                      "li",
                                      {
                                        children: h.jsxs(Ht, {
                                          to: $.link,
                                          className:
                                            "flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                                          children: [$.icon, $.title],
                                        }),
                                      },
                                      Q
                                    )
                                  ),
                                }),
                            ],
                          })
                        : A.link
                        ? h.jsxs(Ht, {
                            to: A.link,
                            className: Le(
                              "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                              f ? "justify-center" : ""
                            ),
                            children: [
                              eu[A.icon],
                              !f &&
                                h.jsx("span", {
                                  className: "ms-3 flex-1 text-left",
                                  children: A.title,
                                }),
                            ],
                          })
                        : h.jsxs("button", {
                            type: "button",
                            onClick: () => k(F),
                            className: Le(
                              "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                              f ? "justify-center" : ""
                            ),
                            children: [
                              eu[A.icon],
                              !f &&
                                h.jsx("span", {
                                  className: "ms-3 flex-1 text-left",
                                  children: A.title,
                                }),
                            ],
                          }),
                    },
                    F
                  )
                ),
                h.jsx("li", {
                  children: E.login
                    ? h.jsx("button", {
                        type: "button",
                        onClick: () => {
                          f || E.handleLogout();
                        },
                        className: Le(
                          "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                          f ? "justify-center" : ""
                        ),
                        children: f
                          ? h.jsx("span", {
                              className: "",
                              children: h.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                className: "size-6",
                                children: h.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75",
                                }),
                              }),
                            })
                          : h.jsxs("div", {
                              className: "flex justify-around",
                              children: [
                                h.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  "stroke-width": "1.5",
                                  stroke: "currentColor",
                                  className: "size-6",
                                  children: h.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75",
                                  }),
                                }),
                                h.jsx("span", {
                                  className: "ms-3 flex ",
                                  children: "logout",
                                }),
                              ],
                            }),
                      })
                    : h.jsx("button", {
                        type: "button",
                        onClick: R,
                        className: Le(
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
              className: Le("mt-auto p-2", f ? "flex justify-center" : ""),
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
                onClick: b,
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
      w && h.jsx(zS, { open: w, onClose: R }),
    ],
  });
}
const HS = "";
function $S() {
  var m;
  const [r, n] = C.useState(0),
    [i, o] = C.useState(!1),
    [l, c] = C.useState(""),
    f = _m();
  console.log(f.totalPrice());
  const g = async (y) => {
    if ((y.preventDefault(), i && r === 1))
      try {
        const _ = (
          await Ie.post("http://localhost:3000/api/payments/create-payment", {
            amount: 1e4,
            orderInfo: "Payment for order",
            orderId: 6,
          })
        ).data;
        console.log(_.paymentUrl),
          _.paymentUrl && (window.location.href = _.paymentUrl);
      } catch (w) {
        console.error("Error fetching VNPAY URL:", w);
      }
  };
  return (
    console.log(l),
    h.jsxs("div", {
      className:
        "w-full h-full mx-auto my-10 flex border-2 p-6 md:h-[640px] md:w-[1280px] shadow-md sm:rounded-lg justify-center",
      children: [
        h.jsxs("div", {
          className: "w-full",
          children: [
            h.jsx("h1", {
              className: "title text-center font-semibold",
              children: "Order Item",
            }),
            h.jsx("table", {
              className:
                "w-full rounded-lg text-sm text-left text-gray-500 border-1 border-spacing-6",
              children: h.jsxs("tbody", {
                children: [
                  (m = f.getItem()) == null
                    ? void 0
                    : m.map((y) =>
                        h.jsxs(
                          "tr",
                          {
                            className: "bg-white border-b hover:bg-gray-50",
                            children: [
                              h.jsx("td", {
                                className: "p-4",
                                children: h.jsx("img", {
                                  src: y.description,
                                  className:
                                    "w-16 md:w-32 max-w-full max-h-full",
                                  alt: y.name,
                                }),
                              }),
                              h.jsx("td", {
                                className:
                                  "px-6 py-4 font-semibold text-gray-900",
                                children: y.name,
                              }),
                              h.jsx("td", {
                                className:
                                  "px-6 py-4 font-semibold text-gray-900",
                                children: y.base_price || 0,
                              }),
                              h.jsx("td", {
                                className: "px-6 py-4",
                                children: h.jsx("button", {
                                  className:
                                    "font-medium border-2 p-4 rounded-xl hover:bg-red-400",
                                  onClick: () => f.removeFromCart(y.id),
                                  children: "Remove",
                                }),
                              }),
                            ],
                          },
                          y.id
                        )
                      ),
                  h.jsxs("tr", {
                    className:
                      "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full",
                    children: [
                      h.jsx("td", {
                        className: "p-4",
                        children: h.jsx("img", {
                          src: HS,
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
                            f.removeFromCart(1);
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
        h.jsxs("div", {
          className: "h-full w-full m-5",
          children: [
            h.jsxs("form", {
              className: "w-full",
              onSubmit: g,
              children: [
                h.jsxs("div", {
                  className: "mb-5",
                  children: [
                    h.jsx("label", {
                      className: "mb-2 block text-sm font-medium",
                      children: "Your email",
                    }),
                    h.jsx("input", {
                      type: "email",
                      className: "block w-full p-2.5 text-sm border rounded-lg",
                      required: !0,
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "mb-5",
                  children: [
                    h.jsx("label", {
                      className: "mb-2 block text-sm font-medium",
                      children: "Select Payment Method",
                    }),
                    h.jsxs("select", {
                      onChange: (y) => n(Number(y.target.value)),
                      value: r,
                      className: "block w-full p-2.5 text-sm border rounded-lg",
                      children: [
                        h.jsx("option", { value: 1, children: "Card (VNPAY)" }),
                        h.jsx("option", { value: 0, children: "QR Code" }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "mb-5 flex items-start",
                  children: [
                    h.jsx("input", {
                      type: "checkbox",
                      onChange: (y) => o(y.target.checked),
                      className: "h-4 w-4 border border-gray-300 rounded",
                      required: !0,
                    }),
                    h.jsx("label", {
                      className: "ml-2 text-sm",
                      children: "I agree with the terms and conditions",
                    }),
                  ],
                }),
                h.jsx("button", {
                  type: "submit",
                  className:
                    "rounded-lg bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800",
                  children: "Submit for Payment",
                }),
              ],
            }),
            l &&
              h.jsx("iframe", {
                src: l,
                className: "w-full h-[500px] border mt-5",
                title: "VNPAY Payment",
              }),
          ],
        }),
      ],
    })
  );
}
function VS() {
  const r = Di(),
    [n, i] = C.useState(!0),
    o = [
      { path: "/", component: h.jsx(L1, {}), isPrivate: !1 },
      { path: "/register/verify", component: h.jsx(ES, {}), isPrivate: !1 },
      { path: "/product", component: h.jsx(NS, {}), isPrivate: !1 },
      { path: "/ManagingProduct", component: h.jsx(Cm, {}), isPrivate: !1 },
      { path: "/Fillter-Product", component: h.jsx(_S, {}), isPrivate: !1 },
      { path: "/user-billing", component: h.jsx(Nm, {}), isPrivate: !1 },
      { path: "/user-management", component: h.jsx($S, {}), isPrivate: !1 },
      {
        path: "/user-profile",
        component: h.jsx(SS, {}),
        isPrivate: !0,
        allowedRoles: ["admin", "user"],
      },
      {
        path: "/dashboard",
        component: h.jsx(TS, {}),
        isPrivate: !0,
        allowedRoles: ["admin"],
      },
    ];
  if (
    (C.useEffect(() => {
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
          ? h.jsx(zl, { to: "/", replace: !0 })
          : c.component
        : h.jsx(zl, { to: "/", replace: !0 })
      : c.component;
  };
  return h.jsxs(Wy, {
    children: [
      h.jsx(BS, {}),
      h.jsxs(ky, {
        children: [
          o.map((c, f) => h.jsx(nu, { path: c.path, element: l(c) }, f)),
          h.jsx(nu, {
            path: "*",
            element: h.jsx(zl, { to: "/", replace: !0 }),
          }),
        ],
      }),
      h.jsx(RS, {}),
      " ",
    ],
  });
}
Pg.createRoot(document.getElementById("root")).render(
  h.jsx(C.StrictMode, {
    children: h.jsx(kS, { children: h.jsx(CS, { children: h.jsx(VS, {}) }) }),
  })
);
