(function () {
  var DEPS_GRAPH = {
    'enablermodule': [],
    'configurablemodule': ['enablermodule'],
    'gdnmodule': ['enablermodule'],
    'layoutsmodule': ['enablermodule'],
    'videomodule': ['enablermodule'],
    'configurablefillermodule': ['configurablemodule'],
    'layoutsfillermodule': ['layoutsmodule'],
    'rad_ui_videomodule': ['videomodule'],
    '$weak$': ['configurablefillermodule', 'configurablemodule', 'enablermodule', 'gdnmodule', 'layoutsfillermodule', 'layoutsmodule', 'rad_ui_videomodule', 'videomodule']
  };
  window.STUDIO_SDK_START = +new Date();
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var g, ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        }
      }
    },
    ca = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
        next: ba(a)
      }
    },
    da = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b
    },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = {
          od: !0
        },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.od;
        break a
      } catch (a) {}
      fa = !1
    }
    ea = fa ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var ja = ea,
    ka = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c];
      a.w = b.prototype
    },
    la = function (a) {
      a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
      }
      return globalThis
    },
    ma = la(this),
    na = "function" == typeof Object.defineProperties ?
    Object.defineProperty : function (a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    oa = function (a, b) {
      if (b) {
        var c = ma;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          e in c || (c[e] = {});
          c = c[e]
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && na(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        })
      }
    };
  oa("Promise", function (a) {
    function b() {
      this.a = null
    }

    function c(k) {
      return k instanceof e ? k : new e(function (l) {
        l(k)
      })
    }
    if (a) return a;
    b.prototype.b = function (k) {
      if (null == this.a) {
        this.a = [];
        var l = this;
        this.f(function () {
          l.s()
        })
      }
      this.a.push(k)
    };
    var d = ma.setTimeout;
    b.prototype.f = function (k) {
      d(k, 0)
    };
    b.prototype.s = function () {
      for (; this.a && this.a.length;) {
        var k = this.a;
        this.a = [];
        for (var l = 0; l < k.length; ++l) {
          var m = k[l];
          k[l] = null;
          try {
            m()
          } catch (p) {
            this.g(p)
          }
        }
      }
      this.a = null
    };
    b.prototype.g = function (k) {
      this.f(function () {
        throw k;
      })
    };
    var e = function (k) {
      this.D = 0;
      this.ha = void 0;
      this.a = [];
      var l = this.b();
      try {
        k(l.resolve, l.reject)
      } catch (m) {
        l.reject(m)
      }
    };
    e.prototype.b = function () {
      function k(p) {
        return function (q) {
          m || (m = !0, p.call(l, q))
        }
      }
      var l = this,
        m = !1;
      return {
        resolve: k(this.l),
        reject: k(this.f)
      }
    };
    e.prototype.l = function (k) {
      if (k === this) this.f(new TypeError("A Promise cannot resolve to itself"));
      else if (k instanceof e) this.o(k);
      else {
        a: switch (typeof k) {
          case "object":
            var l = null != k;
            break a;
          case "function":
            l = !0;
            break a;
          default:
            l = !1
        }
        l ? this.j(k) : this.g(k)
      }
    };
    e.prototype.j = function (k) {
      var l = void 0;
      try {
        l = k.then
      } catch (m) {
        this.f(m);
        return
      }
      "function" == typeof l ? this.A(l, k) : this.g(k)
    };
    e.prototype.f = function (k) {
      this.s(2, k)
    };
    e.prototype.g = function (k) {
      this.s(1, k)
    };
    e.prototype.s = function (k, l) {
      if (0 != this.D) throw Error("Cannot settle(" + k + ", " + l + "): Promise already settled in state" + this.D);
      this.D = k;
      this.ha = l;
      this.h()
    };
    e.prototype.h = function () {
      if (null != this.a) {
        for (var k = 0; k < this.a.length; ++k) f.b(this.a[k]);
        this.a = null
      }
    };
    var f = new b;
    e.prototype.o = function (k) {
      var l =
        this.b();
      k.ib(l.resolve, l.reject)
    };
    e.prototype.A = function (k, l) {
      var m = this.b();
      try {
        k.call(l, m.resolve, m.reject)
      } catch (p) {
        m.reject(p)
      }
    };
    e.prototype.then = function (k, l) {
      function m(O, aa) {
        return "function" == typeof O ? function (ib) {
          try {
            p(O(ib))
          } catch (Ha) {
            q(Ha)
          }
        } : aa
      }
      var p, q, F = new e(function (O, aa) {
        p = O;
        q = aa
      });
      this.ib(m(k, p), m(l, q));
      return F
    };
    e.prototype.catch = function (k) {
      return this.then(void 0, k)
    };
    e.prototype.ib = function (k, l) {
      function m() {
        switch (p.D) {
          case 1:
            k(p.ha);
            break;
          case 2:
            l(p.ha);
            break;
          default:
            throw Error("Unexpected state: " +
              p.D);
        }
      }
      var p = this;
      null == this.a ? f.b(m) : this.a.push(m)
    };
    e.resolve = c;
    e.reject = function (k) {
      return new e(function (l, m) {
        m(k)
      })
    };
    e.race = function (k) {
      return new e(function (l, m) {
        for (var p = ca(k), q = p.next(); !q.done; q = p.next()) c(q.value).ib(l, m)
      })
    };
    e.all = function (k) {
      var l = ca(k),
        m = l.next();
      return m.done ? c([]) : new e(function (p, q) {
        function F(ib) {
          return function (Ha) {
            O[ib] = Ha;
            aa--;
            0 == aa && p(O)
          }
        }
        var O = [],
          aa = 0;
        do O.push(void 0), aa++, c(m.value).ib(F(O.length - 1), q), m = l.next(); while (!m.done)
      })
    };
    return e
  });
  var pa = function () {
      pa = function () {};
      ma.Symbol || (ma.Symbol = qa)
    },
    ra = function (a, b) {
      this.a = a;
      na(this, "description", {
        configurable: !0,
        writable: !0,
        value: b
      })
    };
  ra.prototype.toString = function () {
    return this.a
  };
  var qa = function () {
      function a(c) {
        if (this instanceof a) throw new TypeError("Symbol is not a constructor");
        return new ra("jscomp_symbol_" + (c || "") + "_" + b++, c)
      }
      var b = 0;
      return a
    }(),
    ta = function () {
      pa();
      var a = ma.Symbol.iterator;
      a || (a = ma.Symbol.iterator = ma.Symbol("Symbol.iterator"));
      "function" != typeof Array.prototype[a] && na(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return sa(ba(this))
        }
      });
      ta = function () {}
    },
    sa = function (a) {
      ta();
      a = {
        next: a
      };
      a[ma.Symbol.iterator] = function () {
        return this
      };
      return a
    };
  oa("globalThis", function (a) {
    return a || ma
  });
  var ua = function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
  };
  oa("String.prototype.endsWith", function (a) {
    return a ? a : function (b, c) {
      var d = ua(this, b, "endsWith");
      b += "";
      void 0 === c && (c = d.length);
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var e = b.length; 0 < e && 0 < c;)
        if (d[--c] != b[--e]) return !1;
      return 0 >= e
    }
  });
  oa("String.prototype.startsWith", function (a) {
    return a ? a : function (b, c) {
      var d = ua(this, b, "startsWith");
      b += "";
      var e = d.length,
        f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var k = 0; k < f && c < e;)
        if (d[c++] != b[k++]) return !1;
      return k >= f
    }
  });
  var va = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  oa("WeakMap", function (a) {
    function b() {}

    function c(m) {
      var p = typeof m;
      return "object" === p && null !== m || "function" === p
    }

    function d(m) {
      if (!va(m, f)) {
        var p = new b;
        na(m, f, {
          value: p
        })
      }
    }

    function e(m) {
      var p = Object[m];
      p && (Object[m] = function (q) {
        if (q instanceof b) return q;
        d(q);
        return p(q)
      })
    }
    if (function () {
        if (!a || !Object.seal) return !1;
        try {
          var m = Object.seal({}),
            p = Object.seal({}),
            q = new a([
              [m, 2],
              [p, 3]
            ]);
          if (2 != q.get(m) || 3 != q.get(p)) return !1;
          q.delete(m);
          q.set(p, 4);
          return !q.has(m) && 4 == q.get(p)
        } catch (F) {
          return !1
        }
      }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var k = 0,
      l = function (m) {
        this.a = (k += Math.random() + 1).toString();
        if (m) {
          m = ca(m);
          for (var p; !(p = m.next()).done;) p = p.value, this.set(p[0], p[1])
        }
      };
    l.prototype.set = function (m, p) {
      if (!c(m)) throw Error("Invalid WeakMap key");
      d(m);
      if (!va(m, f)) throw Error("WeakMap key fail: " + m);
      m[f][this.a] = p;
      return this
    };
    l.prototype.get = function (m) {
      return c(m) && va(m, f) ? m[f][this.a] : void 0
    };
    l.prototype.has = function (m) {
      return c(m) && va(m, f) && va(m[f],
        this.a)
    };
    l.prototype.delete = function (m) {
      return c(m) && va(m, f) && va(m[f], this.a) ? delete m[f][this.a] : !1
    };
    return l
  });
  oa("Map", function (a) {
    if (function () {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var l = Object.seal({
              x: 4
            }),
            m = new a(ca([
              [l, "s"]
            ]));
          if ("s" != m.get(l) || 1 != m.size || m.get({
              x: 4
            }) || m.set({
              x: 4
            }, "t") != m || 2 != m.size) return !1;
          var p = m.entries(),
            q = p.next();
          if (q.done || q.value[0] != l || "s" != q.value[1]) return !1;
          q = p.next();
          return q.done || 4 != q.value[0].x || "t" != q.value[1] || !p.next().done ? !1 : !0
        } catch (F) {
          return !1
        }
      }()) return a;
    ta();
    var b = new WeakMap,
      c = function (l) {
        this.b = {};
        this.a =
          f();
        this.size = 0;
        if (l) {
          l = ca(l);
          for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
        }
      };
    c.prototype.set = function (l, m) {
      l = 0 === l ? 0 : l;
      var p = d(this, l);
      p.list || (p.list = this.b[p.id] = []);
      p.Z ? p.Z.value = m : (p.Z = {
        next: this.a,
        wa: this.a.wa,
        head: this.a,
        key: l,
        value: m
      }, p.list.push(p.Z), this.a.wa.next = p.Z, this.a.wa = p.Z, this.size++);
      return this
    };
    c.prototype.delete = function (l) {
      l = d(this, l);
      return l.Z && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.b[l.id], l.Z.wa.next = l.Z.next, l.Z.next.wa = l.Z.wa, l.Z.head =
        null, this.size--, !0) : !1
    };
    c.prototype.clear = function () {
      this.b = {};
      this.a = this.a.wa = f();
      this.size = 0
    };
    c.prototype.has = function (l) {
      return !!d(this, l).Z
    };
    c.prototype.get = function (l) {
      return (l = d(this, l).Z) && l.value
    };
    c.prototype.entries = function () {
      return e(this, function (l) {
        return [l.key, l.value]
      })
    };
    c.prototype.keys = function () {
      return e(this, function (l) {
        return l.key
      })
    };
    c.prototype.values = function () {
      return e(this, function (l) {
        return l.value
      })
    };
    c.prototype.forEach = function (l, m) {
      for (var p = this.entries(), q; !(q = p.next()).done;) q =
        q.value, l.call(m, q[1], q[0], this)
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (l, m) {
        var p = m && typeof m;
        "object" == p || "function" == p ? b.has(m) ? p = b.get(m) : (p = "" + ++k, b.set(m, p)) : p = "p_" + m;
        var q = l.b[p];
        if (q && va(l.b, p))
          for (l = 0; l < q.length; l++) {
            var F = q[l];
            if (m !== m && F.key !== F.key || m === F.key) return {
              id: p,
              list: q,
              index: l,
              Z: F
            }
          }
        return {
          id: p,
          list: q,
          index: -1,
          Z: void 0
        }
      },
      e = function (l, m) {
        var p = l.a;
        return sa(function () {
          if (p) {
            for (; p.head != l.a;) p = p.wa;
            for (; p.next != p.head;) return p = p.next, {
              done: !1,
              value: m(p)
            };
            p = null
          }
          return {
            done: !0,
            value: void 0
          }
        })
      },
      f = function () {
        var l = {};
        return l.wa = l.next = l.head = l
      },
      k = 0;
    return c
  });
  oa("Object.is", function (a) {
    return a ? a : function (b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
  });
  oa("Array.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      var d = this;
      d instanceof String && (d = String(d));
      var e = d.length;
      c = c || 0;
      for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
        var f = d[c];
        if (f === b || Object.is(f, b)) return !0
      }
      return !1
    }
  });
  var h = this || self,
    n = function (a, b, c) {
      a = a.split(".");
      c = c || h;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    },
    wa = /^[\w+/_-]+[=]{0,2}$/,
    xa = null,
    ya = function (a, b) {
      a = a.split(".");
      b = b || h;
      for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
      return b
    },
    za = function () {},
    Aa = function () {
      throw Error("unimplemented abstract method");
    },
    Ba = function (a) {
      a.Lb = void 0;
      a.La = function () {
        return a.Lb ?
          a.Lb : a.Lb = new a
      }
    },
    Ca = function (a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b
    },
    r = function (a) {
      return "array" == Ca(a)
    },
    Da = function (a) {
      var b = Ca(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    },
    t = function (a) {
      return "function" == Ca(a)
    },
    u = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    },
    Ga = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Ea) && a[Ea] || (a[Ea] = ++Fa)
    },
    Ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Fa = 0,
    Ia = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    Ja =
    function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    },
    v = function (a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v = Ia : v = Ja;
      return v.apply(null, arguments)
    },
    Ka = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d =
          c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
      }
    },
    La = Date.now || function () {
      return +new Date
    },
    w = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.w = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a
    };
  var Ma = function (a, b) {
    this.h = Math.random() < a;
    this.j = b;
    this.g = null;
    this.s = ""
  };
  Ma.prototype.b = function () {
    return this.h && null !== this.g ? (this.j + "//pagead2.googlesyndication.com/pagead/gen_204/?id=" + this.g + this.s).substring(0, 2E3) : ""
  };
  var Na = function () {};
  n("studio.common.Environment", Na, void 0);
  Na.Type = {
    LIVE: 1,
    LOCAL: 2,
    BROWSER: 4,
    IN_APP: 8,
    LAYOUTS_PREVIEW: 16,
    CREATIVE_TOOLSET: 32,
    RENDERING_STUDIO: 64,
    RENDERING_TEST: 128,
    PREVIEW: 256
  };
  var Oa = 6;
  Na.addType = function (a) {
    Oa |= a;
    Pa(a)
  };
  var Qa = function (a) {
    Oa = a | 6;
    Pa(Oa)
  };
  Na.setType = Qa;
  var x = function (a) {
    return (Oa & a) == a
  };
  Na.hasType = x;
  Na.getValue = function () {
    return Oa
  };
  var Pa = function (a) {
      Ra(a, 2, 1);
      Ra(a, 1, 2);
      Ra(a, 4, 8);
      Ra(a, 8, 4);
      Ra(a, 128, 64);
      Ra(a, 64, 128);
      Ra(a, 256, 2)
    },
    Ra = function (a, b, c) {
      (a & b) == b && (Oa |= b, Oa &= ~c)
    };
  var Sa = function (a, b) {
    Ma.call(this, a, b);
    this.f = this.a = null;
    this.g = "rmad_mod"
  };
  w(Sa, Ma);
  Sa.prototype.b = function () {
    return null !== this.a && null !== this.f ? (this.s = "&status=" + this.a + "&type=" + this.f, Sa.w.b.call(this)) : ""
  };
  var Ta;
  var Ua = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
    else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  w(Ua, Error);
  Ua.prototype.name = "CustomError";
  var Va = function (a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    Ua.call(this, c + a[d])
  };
  w(Va, Ua);
  Va.prototype.name = "AssertionError";
  var Wa = function (a, b, c, d) {
      var e = "Assertion failed";
      if (c) {
        e += ": " + c;
        var f = d
      } else a && (e += ": " + a, f = b);
      throw new Va("" + e, f || []);
    },
    y = function (a, b, c) {
      a || Wa("", null, b, Array.prototype.slice.call(arguments, 2));
      return a
    },
    Xa = function (a, b) {
      throw new Va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    Ya = function (a, b, c) {
      "number" !== typeof a && Wa("Expected number but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    },
    Za = function (a, b, c) {
      "string" !== typeof a && Wa("Expected string but got %s: %s.",
        [Ca(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    $a = function (a, b, c) {
      t(a) || Wa("Expected function but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    ab = function (a, b, c) {
      r(a) || Wa("Expected array but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    cb = function (a, b, c, d) {
      a instanceof b || Wa("Expected instanceof %s but got %s.", [bb(b), bb(a)], c, Array.prototype.slice.call(arguments, 3))
    },
    bb = function (a) {
      return a instanceof Function ? a.displayName || a.name || "unknown type name" :
        a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
  var db = Array.prototype.indexOf ? function (a, b) {
      y(null != a.length);
      return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    },
    z = Array.prototype.forEach ? function (a, b, c) {
      y(null != a.length);
      Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    eb = Array.prototype.filter ?
    function (a, b, c) {
      y(null != a.length);
      return Array.prototype.filter.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = [], f = 0, k = "string" === typeof a ? a.split("") : a, l = 0; l < d; l++)
        if (l in k) {
          var m = k[l];
          b.call(c, m, l, a) && (e[f++] = m)
        } return e
    },
    fb = Array.prototype.map ? function (a, b) {
      y(null != a.length);
      return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
      for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d
    },
    gb = Array.prototype.some ? function (a,
      b, c) {
      y(null != a.length);
      return Array.prototype.some.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a)) return !0;
      return !1
    },
    hb = Array.prototype.every ? function (a, b, c) {
      y(null != a.length);
      return Array.prototype.every.call(a, b, c)
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && !b.call(c, e[f], f, a)) return !1;
      return !0
    },
    kb = function (a) {
      var b = h.performance.getEntriesByType("resource");
      a = jb(b,
        a, void 0);
      return 0 > a ? null : "string" === typeof b ? b.charAt(a) : b[a]
    },
    jb = function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a)) return f;
      return -1
    },
    mb = function (a, b) {
      b = db(a, b);
      var c;
      (c = 0 <= b) && lb(a, b);
      return c
    },
    lb = function (a, b) {
      y(null != a.length);
      Array.prototype.splice.call(a, b, 1)
    },
    nb = function (a) {
      return Array.prototype.concat.apply([], arguments)
    },
    ob = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
      }
      return []
    },
    pb = function (a,
      b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (Da(d)) {
          var e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for (var k = 0; k < f; k++) a[e + k] = d[k]
        } else a.push(d)
      }
    },
    rb = function (a, b, c, d) {
      y(null != a.length);
      Array.prototype.splice.apply(a, qb(arguments, 1))
    },
    qb = function (a, b, c) {
      y(null != a.length);
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    },
    tb = function (a, b) {
      a.sort(b || sb)
    },
    ub = function (a, b) {
      for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
        index: d,
        value: a[d]
      };
      var e = b || sb;
      tb(c, function (f, k) {
        return e(f.value, k.value) || f.index - k.index
      });
      for (d = 0; d < a.length; d++) a[d] = c[d].value
    },
    sb = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0
    };
  var vb = function (a, b) {
      return 0 == a.lastIndexOf(b, 0)
    },
    wb = function (a) {
      return /^[\s\xa0]*$/.test(a)
    },
    xb = String.prototype.trim ? function (a) {
      return a.trim()
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    yb = /&/g,
    zb = /</g,
    Ab = />/g,
    Bb = /"/g,
    Cb = /'/g,
    Db = /\x00/g,
    Eb = /[\x00&<>"']/,
    Fb = function (a, b) {
      return -1 != a.indexOf(b)
    },
    Hb = function (a, b) {
      var c = 0;
      a = xb(String(a)).split(".");
      b = xb(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          k = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
          if (0 == f[0].length && 0 == k[0].length) break;
          c = Gb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Gb(0 == f[2].length, 0 == k[2].length) || Gb(f[2], k[2]);
          f = f[3];
          k = k[3]
        } while (0 == c)
      }
      return c
    },
    Gb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    };
  var Ib;
  a: {
    var Jb = h.navigator;
    if (Jb) {
      var Kb = Jb.userAgent;
      if (Kb) {
        Ib = Kb;
        break a
      }
    }
    Ib = ""
  }
  var A = function (a) {
    return Fb(Ib, a)
  };
  var Lb = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a)
    },
    Mb = function (a, b) {
      var c = {},
        d;
      for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
      return c
    },
    Nb = function (a, b) {
      for (var c in a)
        if (b.call(void 0, a[c], c, a)) return !0;
      return !1
    },
    Ob = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b
    },
    Pb = function (a, b) {
      var c = Da(b),
        d = c ? b : arguments;
      for (c = c ? 0 : 1; c < d.length; c++) {
        if (null == a) return;
        a = a[d[c]]
      }
      return a
    },
    Qb = function (a, b) {
      return null !== a && b in a
    },
    Rb = function (a, b) {
      for (var c in a)
        if (a[c] == b) return !0;
      return !1
    },
    Sb =
    function (a, b) {
      return null !== a && b in a ? a[b] : void 0
    },
    Tb = function (a, b, c) {
      b in a || (a[b] = c)
    },
    Ub = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b
    },
    Vb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    Wb = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Vb.length; f++) c = Vb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    };
  var Xb = function () {
      return A("Firefox") || A("FxiOS")
    },
    Yb = function () {
      return (A("Chrome") || A("CriOS")) && !A("Edge")
    };
  var Zb = function (a, b) {
    a: {
      try {
        var c = a && a.ownerDocument,
          d = c && (c.defaultView || c.parentWindow);
        d = d || h;
        if (d.Element && d.Location) {
          var e = d;
          break a
        }
      } catch (k) {}
      e = null
    }
    if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
      if (u(a)) try {
        var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
      } catch (k) {
        f = "<object could not be stringified>"
      } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
      Xa("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
        b, f)
    }
  };
  var $b = function () {
    return null
  };
  var cc = function (a, b) {
    this.a = a === ac && b || "";
    this.b = bc
  };
  cc.prototype.ya = !0;
  cc.prototype.va = function () {
    return this.a
  };
  cc.prototype.toString = function () {
    return "Const{" + this.a + "}"
  };
  var dc = function (a) {
      if (a instanceof cc && a.constructor === cc && a.b === bc) return a.a;
      Xa("expected object of type Const, got '" + a + "'");
      return "type_error:Const"
    },
    bc = {},
    ac = {},
    ec = new cc(ac, "");
  var hc = function (a, b) {
    this.a = a === fc && b || "";
    this.b = gc
  };
  hc.prototype.ya = !0;
  hc.prototype.va = function () {
    return this.a.toString()
  };
  hc.prototype.toString = function () {
    return "TrustedResourceUrl{" + this.a + "}"
  };
  var ic = function (a) {
      if (a instanceof hc && a.constructor === hc && a.b === gc) return a.a;
      Xa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Ca(a));
      return "type_error:TrustedResourceUrl"
    },
    lc = function (a) {
      var b = dc(new cc(ac, "//tpc.googlesyndication.com/sodar/%{basename}.js"));
      if (!jc.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
      var c = b.replace(kc, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' +
          JSON.stringify(a));
        d = a[e];
        return d instanceof cc ? dc(d) : encodeURIComponent(String(d))
      });
      return new hc(fc, c)
    },
    kc = /%{(\w+)}/g,
    jc = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
    gc = {},
    fc = {};
  var oc = function (a, b) {
    this.a = a === mc && b || "";
    this.b = nc
  };
  oc.prototype.ya = !0;
  oc.prototype.va = function () {
    return this.a.toString()
  };
  oc.prototype.toString = function () {
    return "SafeUrl{" + this.a + "}"
  };
  var pc = function (a) {
      if (a instanceof oc && a.constructor === oc && a.b === nc) return a.a;
      Xa("expected object of type SafeUrl, got '" + a + "' of type " + Ca(a));
      return "type_error:SafeUrl"
    },
    qc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    rc = function (a) {
      if (a instanceof oc) return a;
      a = "object" == typeof a && a.ya ? a.va() : String(a);
      qc.test(a) || (a = "about:invalid#zClosurez");
      return new oc(mc, a)
    },
    nc = {},
    mc = {};
  var tc = function () {
    this.a = "";
    this.b = sc
  };
  tc.prototype.ya = !0;
  var sc = {};
  tc.prototype.va = function () {
    return this.a
  };
  tc.prototype.toString = function () {
    return "SafeStyle{" + this.a + "}"
  };
  var uc = function (a) {
      var b = new tc;
      b.a = a;
      return b
    },
    vc = uc(""),
    xc = function (a) {
      if (a instanceof oc) return 'url("' + pc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
      a = a instanceof cc ? dc(a) : wc(String(a));
      if (/[{;}]/.test(a)) throw new Va("Value does not allow [{;}], got: %s.", [a]);
      return a
    },
    wc = function (a) {
      var b = a.replace(yc, "$1").replace(yc, "$1").replace(zc, "url");
      if (Ac.test(b)) {
        if (Bc.test(a)) return Xa("String value disallows comments, got: " + a), "zClosurez";
        for (var c = b = !0, d = 0; d < a.length; d++) {
          var e = a.charAt(d);
          "'" == e && c ? b = !b : '"' == e && b && (c = !c)
        }
        if (!b || !c) return Xa("String value requires balanced quotes, got: " + a), "zClosurez";
        if (!Cc(a)) return Xa("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), "zClosurez"
      } else return Xa("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
      return Dc(a)
    },
    Cc = function (a) {
      for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
          if (b) return !1;
          b = !0
        } else if ("[" ==
          e) {
          if (!b) return !1;
          b = !1
        } else if (!b && !c.test(e)) return !1
      }
      return b
    },
    Ac = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    zc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    yc = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    Bc = /\/\*/,
    Dc = function (a) {
      return a.replace(zc, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (k, l, m) {
          f = l;
          return m
        });
        b = rc(d).va();
        return c + f + b + f +
          e
      })
    };
  var Fc = function () {
    this.a = "";
    this.b = Ec
  };
  Fc.prototype.ya = !0;
  var Ec = {},
    Hc = function (a, b) {
      if (Fb(a, "<")) throw Error("Selector does not allow '<', got: " + a);
      var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
      a: {
        for (var d = {
            "(": ")",
            "[": "]"
          }, e = [], f = 0; f < c.length; f++) {
          var k = c[f];
          if (d[k]) e.push(d[k]);
          else if (Rb(d, k) && e.pop() != k) {
            c = !1;
            break a
          }
        }
        c = 0 == e.length
      }
      if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
      if (!(b instanceof tc)) {
        c = "";
        for (var l in b) {
          if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
          d = b[l];
          null != d && (d = r(d) ? fb(d, xc).join(" ") : xc(d), c += l + ":" + d + ";")
        }
        b = c ? uc(c) : vc
      }
      b instanceof tc && b.constructor === tc && b.b === sc ? l = b.a : (Xa("expected object of type SafeStyle, got '" + b + "' of type " + Ca(b)), l = "type_error:SafeStyle");
      a = a + "{" + l.replace(/</g, "\\3C ") + "}";
      return Gc(a)
    };
  Fc.prototype.va = function () {
    return this.a
  };
  Fc.prototype.toString = function () {
    return "SafeStyleSheet{" + this.a + "}"
  };
  var Gc = function (a) {
    var b = new Fc;
    b.a = a;
    return b
  };
  Gc("");
  var Jc = function () {
    this.a = "";
    this.b = Ic
  };
  Jc.prototype.ya = !0;
  Jc.prototype.va = function () {
    return this.a.toString()
  };
  Jc.prototype.toString = function () {
    return "SafeHtml{" + this.a + "}"
  };
  var Kc = function (a) {
      if (a instanceof Jc && a.constructor === Jc && a.b === Ic) return a.a;
      Xa("expected object of type SafeHtml, got '" + a + "' of type " + Ca(a));
      return "type_error:SafeHtml"
    },
    Ic = {},
    Lc = function (a) {
      var b = new Jc;
      b.a = a;
      return b
    };
  Lc("<!DOCTYPE html>");
  var Mc = Lc("");
  Lc("<br>");
  var Nc = function (a) {
      var b = new hc(fc, dc(ec));
      Zb(a, "HTMLIFrameElement");
      a.src = ic(b).toString()
    },
    Oc = function (a, b) {
      Zb(a, "HTMLScriptElement");
      a.src = ic(b);
      if (null === xa) b: {
        b = h.document;
        if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && wa.test(b)) {
          xa = b;
          break b
        }
        xa = ""
      }
      b = xa;
      b && a.setAttribute("nonce", b)
    };
  var Pc = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "))
    },
    Qc = function (a) {
      Eb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(yb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(zb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Ab, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Bb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Cb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Db, "&#0;")));
      return a
    },
    Rc = function (a, b) {
      var c = a;
      0 < a.length && 0 < b && (c = a.substr(0, 0) + a.substr(0 + b, a.length - 0 - b));
      return c
    },
    Sc = function (a) {
      return null ==
        a ? "" : String(a)
    },
    Tc = function (a) {
      return Array.prototype.join.call(arguments, "")
    },
    Uc = function (a) {
      for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
      return b
    },
    Vc = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase()
      })
    },
    Wc = function (a) {
      return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
        return c + d.toUpperCase()
      })
    };
  var Xc = function () {
      return A("iPhone") && !A("iPod") && !A("iPad")
    },
    Yc = function () {
      return Xc() || A("iPad") || A("iPod")
    };
  var Zc = function (a) {
    Zc[" "](a);
    return a
  };
  Zc[" "] = za;
  var ad = function (a, b) {
    var c = $c;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
  };
  var bd = A("Opera"),
    cd = A("Trident") || A("MSIE"),
    dd = A("Edge"),
    ed = dd || cd,
    fd = A("Gecko") && !(Fb(Ib.toLowerCase(), "webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
    gd = Fb(Ib.toLowerCase(), "webkit") && !A("Edge"),
    hd = function () {
      var a = h.document;
      return a ? a.documentMode : void 0
    },
    id;
  a: {
    var jd = "",
      kd = function () {
        var a = Ib;
        if (fd) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (dd) return /Edge\/([\d\.]+)/.exec(a);
        if (cd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (gd) return /WebKit\/(\S+)/.exec(a);
        if (bd) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();kd && (jd = kd ? kd[1] : "");
    if (cd) {
      var ld = hd();
      if (null != ld && ld > parseFloat(jd)) {
        id = String(ld);
        break a
      }
    }
    id = jd
  }
  var md = id,
    $c = {},
    nd = function (a) {
      return ad(a, function () {
        return 0 <= Hb(md, a)
      })
    },
    od;
  od = h.document && cd ? hd() : void 0;
  var pd = !cd || 9 <= Number(od);
  var qd = function (a, b) {
    this.width = a;
    this.height = b
  };
  g = qd.prototype;
  g.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
  };
  g.aspectRatio = function () {
    return this.width / this.height
  };
  g.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  g.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  g.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  var td = function (a) {
      return a ? new rd(sd(a)) : Ta || (Ta = new rd)
    },
    vd = function (a, b) {
      Lb(b, function (c, d) {
        c && "object" == typeof c && c.ya && (c = c.va());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ud.hasOwnProperty(d) ? a.setAttribute(ud[d], c) : vb(d, "aria-") || vb(d, "data-") ? a.setAttribute(d, c) : a[d] = c
      })
    },
    ud = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    },
    wd = function () {
      var a = window.document;
      a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
      return new qd(a.clientWidth, a.clientHeight)
    },
    xd = function (a) {
      return a.parentWindow || a.defaultView
    },
    B = function (a, b, c) {
      return yd(document, arguments)
    },
    yd = function (a, b) {
      var c = String(b[0]),
        d = b[1];
      if (!pd && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', Qc(d.name), '"');
        if (d.type) {
          c.push(' type="', Qc(d.type), '"');
          var e = {};
          Wb(e, d);
          delete e.type;
          d = e
        }
        c.push(">");
        c = c.join("")
      }
      c =
        zd(a, c);
      d && ("string" === typeof d ? c.className = d : r(d) ? c.className = d.join(" ") : vd(c, d));
      2 < b.length && Ad(a, c, b, 2);
      return c
    },
    Ad = function (a, b, c, d) {
      function e(k) {
        k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
      }
      for (; d < c.length; d++) {
        var f = c[d];
        !Da(f) || u(f) && 0 < f.nodeType ? e(f) : z(Bd(f) ? ob(f) : f, e)
      }
    },
    zd = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b)
    },
    Cd = function (a, b) {
      y(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
      a.appendChild(b)
    },
    Dd = function (a, b) {
      Ad(sd(a), a, arguments, 1)
    },
    Ed = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    },
    sd = function (a) {
      y(a, "Node cannot be null or undefined.");
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    },
    Bd = function (a) {
      if (a && "number" == typeof a.length) {
        if (u(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (t(a)) return "function" == typeof a.item
      }
      return !1
    },
    Fd = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a;) {
        y("parentNode" != a.name);
        if (b(a)) return a;
        a = a.parentNode;
        c++
      }
      return null
    },
    rd = function (a) {
      this.a = a || h.document || document
    };
  rd.prototype.getElement = function (a) {
    return "string" === typeof a ? this.a.getElementById(a) : a
  };
  var Gd = function (a, b) {
    a = a.a;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b + "") : b = a.getElementsByTagName(b || "*");
    return b
  };
  rd.prototype.b = function (a, b, c) {
    return yd(this.a, arguments)
  };
  var Hd = function (a, b) {
    return zd(a.a, b)
  };
  rd.prototype.f = Cd;
  rd.prototype.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
  };
  var Id = {
    If: "dcm",
    ig: "studio"
  };
  var Jd = Object.freeze || function (a) {
    return a
  };
  var Kd = function (a, b, c) {
    this.reset(a, b, c, void 0, void 0)
  };
  Kd.prototype.a = null;
  var Ld = 0;
  Kd.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || Ld++;
    this.f = d || La();
    this.g = a;
    this.s = b;
    this.b = c;
    delete this.a
  };
  var Md = function (a) {
      this.s = a;
      this.a = this.f = this.g = this.G = null
    },
    Nd = function (a, b) {
      this.name = a;
      this.value = b
    };
  Nd.prototype.toString = function () {
    return this.name
  };
  var Od = new Nd("OFF", Infinity),
    Pd = new Nd("SHOUT", 1200),
    Qd = new Nd("SEVERE", 1E3),
    Rd = new Nd("WARNING", 900),
    Sd = new Nd("INFO", 800),
    Td = new Nd("CONFIG", 700),
    Ud = new Nd("FINE", 500),
    Vd = new Nd("FINER", 400),
    Wd = new Nd("FINEST", 300),
    Xd = new Nd("ALL", 0),
    Yd = [Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd],
    Zd = null;
  Md.prototype.b = function (a) {
    this.g = a
  };
  var $d = function (a) {
    if (a.g) return a.g;
    if (a.G) return $d(a.G);
    Xa("Root logger has no level set.");
    return null
  };
  g = Md.prototype;
  g.log = function (a, b, c) {
    if (a.value >= $d(this).value)
      for (t(b) && (b = b()), a = new Kd(a, String(b), this.s), c && (a.a = c), c = this; c;) {
        var d = c,
          e = a;
        if (d.a)
          for (var f = 0; b = d.a[f]; f++) b(e);
        c = c.G
      }
  };
  g.ff = function (a, b) {
    this.log(Pd, a, b)
  };
  g.ad = function (a, b) {
    this.log(Qd, a, b)
  };
  g.ub = function (a, b) {
    this.log(Rd, a, b)
  };
  g.C = function (a, b) {
    this.log(Sd, a, b)
  };
  g.vd = function (a, b) {
    this.log(Td, a, b)
  };
  g.Hb = function (a, b) {
    this.log(Ud, a, b)
  };
  g.Ed = function (a, b) {
    this.log(Vd, a, b)
  };
  g.Fd = function (a, b) {
    this.log(Wd, a, b)
  };
  var ae = {},
    be = null,
    ce = function () {
      be || (be = new Md(""), ae[""] = be, be.b(Td))
    },
    de = function () {
      ce();
      return be
    },
    C = function (a) {
      ce();
      var b;
      if (!(b = ae[a])) {
        b = new Md(a);
        var c = a.lastIndexOf("."),
          d = a.substr(c + 1);
        c = C(a.substr(0, c));
        c.f || (c.f = {});
        c.f[d] = b;
        b.G = c;
        ae[a] = b
      }
      return b
    };
  var ee = function (a, b) {
      a && a.ad(b, void 0)
    },
    D = function (a, b, c) {
      a && a.ub(b, c)
    },
    E = function (a, b) {
      a && a.C(b, void 0)
    },
    fe = function (a, b) {
      a && a.Hb(b, void 0)
    };
  var G = C("studio.sdk");
  n("studio.sdk.logger", G, void 0);
  n("studio.sdk.logger.setLevel", G.b, void 0);
  n("studio.sdk.logger.Level.OFF", Od, void 0);
  n("studio.sdk.logger.Level.SHOUT", Pd, void 0);
  n("studio.sdk.logger.Level.SEVERE", Qd, void 0);
  n("studio.sdk.logger.Level.WARNING", Rd, void 0);
  n("studio.sdk.logger.Level.INFO", Sd, void 0);
  n("studio.sdk.logger.Level.CONFIG", Td, void 0);
  n("studio.sdk.logger.Level.FINE", Ud, void 0);
  n("studio.sdk.logger.Level.FINER", Vd, void 0);
  n("studio.sdk.logger.Level.FINEST", Wd, void 0);
  n("studio.sdk.logger.Level.ALL", Xd, void 0);
  n("studio.sdk.logger.shout", G.ff, void 0);
  n("studio.sdk.logger.severe", G.ad, void 0);
  n("studio.sdk.logger.warning", G.ub, void 0);
  n("studio.sdk.logger.info", G.C, void 0);
  n("studio.sdk.logger.config", G.vd, void 0);
  n("studio.sdk.logger.fine", G.Hb, void 0);
  n("studio.sdk.logger.finer", G.Ed, void 0);
  n("studio.sdk.logger.finest", G.Fd, void 0);
  var ge = {
    ENABLER: "enabler",
    DCM_ENABLER: "dcmenabler",
    SSR_ENABLER: "ssrenabler",
    VIDEO: "video",
    CONFIGURABLE: "configurable",
    CONFIGURABLE_FILLER: "configurablefiller",
    LAYOUTS: "layouts",
    FILLER: "layoutsfiller",
    RAD_VIDEO: "rad_ui_video",
    GDN: "gdn"
  };
  n("studio.module.ModuleId", ge, void 0);
  var he = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  };
  var ie = function (a, b) {
    this.f = a;
    this.g = b;
    this.b = 0;
    this.a = null
  };
  ie.prototype.get = function () {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null
    } else a = this.f();
    return a
  };
  var je = function (a, b) {
    a.g(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b)
  };
  var ke = function (a) {
      h.setTimeout(function () {
        throw a;
      }, 0)
    },
    le, me = function () {
      var a = h.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function () {
        var e = zd(document, "IFRAME");
        e.style.display = "none";
        Nc(e);
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.write(Kc(Mc));
        e.close();
        var k = "callImmediate" + Math.random(),
          l = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        e = v(function (m) {
          if (("*" == l || m.origin == l) && m.data == k) this.port1.onmessage()
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(k, l)
          }
        }
      });
      if ("undefined" !== typeof a && !A("Trident") && !A("MSIE")) {
        var b = new a,
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.fc;
            c.fc = null;
            e()
          }
        };
        return function (e) {
          d.next = {
            fc: e
          };
          d = d.next;
          b.port2.postMessage(0)
        }
      }
      return "undefined" !== typeof document && "onreadystatechange" in zd(document, "SCRIPT") ? function (e) {
        var f =
          zd(document, "SCRIPT");
        f.onreadystatechange = function () {
          f.onreadystatechange = null;
          f.parentNode.removeChild(f);
          f = null;
          e();
          e = null
        };
        document.documentElement.appendChild(f)
      } : function (e) {
        h.setTimeout(e, 0)
      }
    };
  var ne = function () {
      this.b = this.a = null
    },
    pe = new ie(function () {
      return new oe
    }, function (a) {
      a.reset()
    });
  ne.prototype.add = function (a, b) {
    var c = pe.get();
    c.set(a, b);
    this.b ? this.b.next = c : (y(!this.a), this.a = c);
    this.b = c
  };
  var re = function () {
      var a = qe,
        b = null;
      a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
      return b
    },
    oe = function () {
      this.next = this.scope = this.a = null
    };
  oe.prototype.set = function (a, b) {
    this.a = a;
    this.scope = b;
    this.next = null
  };
  oe.prototype.reset = function () {
    this.next = this.scope = this.a = null
  };
  var ve = function (a, b) {
      se || te();
      ue || (se(), ue = !0);
      qe.add(a, b)
    },
    se, te = function () {
      if (h.Promise && h.Promise.resolve) {
        var a = h.Promise.resolve(void 0);
        se = function () {
          a.then(we)
        }
      } else se = function () {
        var b = we;
        !t(h.setImmediate) || h.Window && h.Window.prototype && !A("Edge") && h.Window.prototype.setImmediate == h.setImmediate ? (le || (le = me()), le(b)) : h.setImmediate(b)
      }
    },
    ue = !1,
    qe = new ne,
    we = function () {
      for (var a; a = re();) {
        try {
          a.a.call(a.scope)
        } catch (b) {
          ke(b)
        }
        je(pe, a)
      }
      ue = !1
    };
  var ze = function (a) {
      this.D = 0;
      this.ha = void 0;
      this.Ka = this.ta = this.G = null;
      this.mb = this.Eb = !1;
      if (a != za) try {
        var b = this;
        a.call(void 0, function (c) {
          xe(b, 2, c)
        }, function (c) {
          if (!(c instanceof ye)) try {
            if (c instanceof Error) throw c;
            throw Error("Promise rejected.");
          } catch (d) {}
          xe(b, 3, c)
        })
      } catch (c) {
        xe(this, 3, c)
      }
    },
    Ae = function () {
      this.next = this.context = this.f = this.b = this.a = null;
      this.g = !1
    };
  Ae.prototype.reset = function () {
    this.context = this.f = this.b = this.a = null;
    this.g = !1
  };
  var Be = new ie(function () {
      return new Ae
    }, function (a) {
      a.reset()
    }),
    Ce = function (a, b, c) {
      var d = Be.get();
      d.b = a;
      d.f = b;
      d.context = c;
      return d
    },
    De = function (a) {
      if (a instanceof ze) return a;
      var b = new ze(za);
      xe(b, 2, a);
      return b
    },
    Ee = function (a) {
      return new ze(function (b, c) {
        c(a)
      })
    },
    Ge = function (a, b, c) {
      Fe(a, b, c, null) || ve(Ka(b, a))
    },
    He = function (a) {
      return new ze(function (b, c) {
        var d = a.length,
          e = [];
        if (d)
          for (var f = function (p, q) {
              d--;
              e[p] = q;
              0 == d && b(e)
            }, k = function (p) {
              c(p)
            }, l = 0, m; l < a.length; l++) m = a[l], Ge(m, Ka(f, l), k);
        else b(e)
      })
    };
  ze.prototype.then = function (a, b, c) {
    null != a && $a(a, "opt_onFulfilled should be a function.");
    null != b && $a(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return Ie(this, t(a) ? a : null, t(b) ? b : null, c)
  };
  ze.prototype.$goog_Thenable = !0;
  var Je = function (a, b) {
    return Ie(a, null, b, void 0)
  };
  ze.prototype.cancel = function (a) {
    if (0 == this.D) {
      var b = new ye(a);
      ve(function () {
        Ke(this, b)
      }, this)
    }
  };
  var Ke = function (a, b) {
      if (0 == a.D)
        if (a.G) {
          var c = a.G;
          if (c.ta) {
            for (var d = 0, e = null, f = null, k = c.ta; k && (k.g || (d++, k.a == a && (e = k), !(e && 1 < d))); k = k.next) e || (f = k);
            e && (0 == c.D && 1 == d ? Ke(c, b) : (f ? (d = f, y(c.ta), y(null != d), d.next == c.Ka && (c.Ka = d), d.next = d.next.next) : Le(c), Me(c, e, 3, b)))
          }
          a.G = null
        } else xe(a, 3, b)
    },
    Oe = function (a, b) {
      a.ta || 2 != a.D && 3 != a.D || Ne(a);
      y(null != b.b);
      a.Ka ? a.Ka.next = b : a.ta = b;
      a.Ka = b
    },
    Ie = function (a, b, c, d) {
      var e = Ce(null, null, null);
      e.a = new ze(function (f, k) {
        e.b = b ? function (l) {
            try {
              var m = b.call(d, l);
              f(m)
            } catch (p) {
              k(p)
            }
          } :
          f;
        e.f = c ? function (l) {
          try {
            var m = c.call(d, l);
            void 0 === m && l instanceof ye ? k(l) : f(m)
          } catch (p) {
            k(p)
          }
        } : k
      });
      e.a.G = a;
      Oe(a, e);
      return e.a
    };
  ze.prototype.uf = function (a) {
    y(1 == this.D);
    this.D = 0;
    xe(this, 2, a)
  };
  ze.prototype.vf = function (a) {
    y(1 == this.D);
    this.D = 0;
    xe(this, 3, a)
  };
  var xe = function (a, b, c) {
      0 == a.D && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.D = 1, Fe(c, a.uf, a.vf, a) || (a.ha = c, a.D = b, a.G = null, Ne(a), 3 != b || c instanceof ye || Pe(a, c)))
    },
    Fe = function (a, b, c, d) {
      if (a instanceof ze) return null != b && $a(b, "opt_onFulfilled should be a function."), null != c && $a(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Oe(a, Ce(b || za, c || null, d)), !0;
      if (he(a)) return a.then(b, c, d), !0;
      if (u(a)) try {
        var e = a.then;
        if (t(e)) return Qe(a,
          e, b, c, d), !0
      } catch (f) {
        return c.call(d, f), !0
      }
      return !1
    },
    Qe = function (a, b, c, d, e) {
      var f = !1,
        k = function (m) {
          f || (f = !0, c.call(e, m))
        },
        l = function (m) {
          f || (f = !0, d.call(e, m))
        };
      try {
        b.call(a, k, l)
      } catch (m) {
        l(m)
      }
    },
    Ne = function (a) {
      a.Eb || (a.Eb = !0, ve(a.Dd, a))
    },
    Le = function (a) {
      var b = null;
      a.ta && (b = a.ta, a.ta = b.next, b.next = null);
      a.ta || (a.Ka = null);
      null != b && y(null != b.b);
      return b
    };
  ze.prototype.Dd = function () {
    for (var a; a = Le(this);) Me(this, a, this.D, this.ha);
    this.Eb = !1
  };
  var Me = function (a, b, c, d) {
      if (3 == c && b.f && !b.g)
        for (; a && a.mb; a = a.G) a.mb = !1;
      if (b.a) b.a.G = null, Re(b, c, d);
      else try {
        b.g ? b.b.call(b.context) : Re(b, c, d)
      } catch (e) {
        Se.call(null, e)
      }
      je(Be, b)
    },
    Re = function (a, b, c) {
      2 == b ? a.b.call(a.context, c) : a.f && a.f.call(a.context, c)
    },
    Pe = function (a, b) {
      a.mb = !0;
      ve(function () {
        a.mb && Se.call(null, b)
      })
    },
    Se = ke,
    ye = function (a) {
      Ua.call(this, a)
    };
  w(ye, Ua);
  ye.prototype.name = "cancel";
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  var H = function (a, b) {
    this.s = [];
    this.B = a;
    this.ia = b || null;
    this.b = this.a = !1;
    this.ha = void 0;
    this.l = this.o = this.j = !1;
    this.h = 0;
    this.G = null;
    this.f = 0
  };
  H.prototype.cancel = function (a) {
    if (this.a) this.ha instanceof H && this.ha.cancel();
    else {
      if (this.G) {
        var b = this.G;
        delete this.G;
        a ? b.cancel(a) : (b.f--, 0 >= b.f && b.cancel())
      }
      this.B ? this.B.call(this.ia, this) : this.l = !0;
      this.a || this.g(new Te(this))
    }
  };
  H.prototype.A = function (a, b) {
    this.j = !1;
    Ue(this, a, b)
  };
  var Ue = function (a, b, c) {
      a.a = !0;
      a.ha = c;
      a.b = !b;
      Ve(a)
    },
    Xe = function (a) {
      if (a.a) {
        if (!a.l) throw new We(a);
        a.l = !1
      }
    };
  H.prototype.K = function (a) {
    Xe(this);
    Ye(a);
    Ue(this, !0, a)
  };
  H.prototype.g = function (a) {
    Xe(this);
    Ye(a);
    Ue(this, !1, a)
  };
  var Ye = function (a) {
      y(!(a instanceof H), "An execution sequence may not be initiated with a blocking Deferred.")
    },
    $e = function (a, b, c) {
      Ze(a, b, null, c)
    },
    Ze = function (a, b, c, d) {
      y(!a.o, "Blocking Deferreds can not be re-used");
      a.s.push([b, c, d]);
      a.a && Ve(a)
    };
  H.prototype.then = function (a, b, c) {
    var d, e, f = new ze(function (k, l) {
      d = k;
      e = l
    });
    Ze(this, d, function (k) {
      k instanceof Te ? f.cancel() : e(k)
    });
    return f.then(a, b, c)
  };
  H.prototype.$goog_Thenable = !0;
  var af = function (a, b) {
    b instanceof H ? $e(a, v(b.F, b)) : $e(a, function () {
      return b
    })
  };
  H.prototype.F = function (a) {
    var b = new H;
    Ze(this, b.K, b.g, b);
    a && (b.G = this, this.f++);
    return b
  };
  var bf = function (a) {
      return gb(a.s, function (b) {
        return t(b[1])
      })
    },
    Ve = function (a) {
      if (a.h && a.a && bf(a)) {
        var b = a.h,
          c = cf[b];
        c && (h.clearTimeout(c.a), delete cf[b]);
        a.h = 0
      }
      a.G && (a.G.f--, delete a.G);
      b = a.ha;
      for (var d = c = !1; a.s.length && !a.j;) {
        var e = a.s.shift(),
          f = e[0],
          k = e[1];
        e = e[2];
        if (f = a.b ? k : f) try {
          var l = f.call(e || a.ia, b);
          void 0 !== l && (a.b = a.b && (l == b || l instanceof Error), a.ha = b = l);
          if (he(b) || "function" === typeof h.Promise && b instanceof h.Promise) d = !0, a.j = !0
        } catch (m) {
          b = m, a.b = !0, bf(a) || (c = !0)
        }
      }
      a.ha = b;
      d && (l = v(a.A, a, !0),
        d = v(a.A, a, !1), b instanceof H ? (Ze(b, l, d), b.o = !0) : b.then(l, d));
      c && (b = new df(b), cf[b.a] = b, a.h = b.a)
    },
    We = function () {
      Ua.call(this)
    };
  w(We, Ua);
  We.prototype.message = "Deferred has already fired";
  We.prototype.name = "AlreadyCalledError";
  var Te = function () {
    Ua.call(this)
  };
  w(Te, Ua);
  Te.prototype.message = "Deferred was canceled";
  Te.prototype.name = "CanceledError";
  var df = function (a) {
    this.a = h.setTimeout(v(this.f, this), 0);
    this.b = a
  };
  df.prototype.f = function () {
    y(cf[this.a], "Cannot throw an error that is not scheduled.");
    delete cf[this.a];
    throw this.b;
  };
  var cf = {};
  var jf = function (a) {
      var b = {},
        c = b.document || document,
        d = ic(a).toString(),
        e = zd(document, "SCRIPT"),
        f = {
          Xc: e,
          jd: void 0
        },
        k = new H(ef, f),
        l = null,
        m = null != b.timeout ? b.timeout : 5E3;
      0 < m && (l = window.setTimeout(function () {
        ff(e, !0);
        k.g(new gf(1, "Timeout reached for loading script " + d))
      }, m), f.jd = l);
      e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (ff(e, b.lg || !1, l), k.K(null))
      };
      e.onerror = function () {
        ff(e, !0, l);
        k.g(new gf(0, "Error while loading script " + d))
      };
      f = b.attributes || {};
      Wb(f, {
        type: "text/javascript",
        charset: "UTF-8"
      });
      vd(e, f);
      Oc(e, a);
      hf(c).appendChild(e);
      return k
    },
    hf = function (a) {
      var b;
      return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
    },
    ef = function () {
      if (this && this.Xc) {
        var a = this.Xc;
        a && "SCRIPT" == a.tagName && ff(a, !0, this.jd)
      }
    },
    ff = function (a, b, c) {
      null != c && h.clearTimeout(c);
      a.onload = za;
      a.onerror = za;
      a.onreadystatechange = za;
      b && window.setTimeout(function () {
        Ed(a)
      }, 0)
    },
    gf = function (a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " +
        b);
      Ua.call(this, c);
      this.code = a
    };
  w(gf, Ua);
  var lf = function (a) {
      kf();
      return new hc(fc, a)
    },
    kf = za;
  var I = function (a, b) {
    this.b = {};
    this.a = [];
    this.f = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a)
      if (a instanceof I)
        for (c = a.S(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else
        for (d in a) this.set(d, a[d])
  };
  g = I.prototype;
  g.ba = function () {
    return this.f
  };
  g.O = function () {
    mf(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a
  };
  g.S = function () {
    mf(this);
    return this.a.concat()
  };
  g.V = function (a) {
    return nf(this.b, a)
  };
  g.Sa = function (a) {
    for (var b = 0; b < this.a.length; b++) {
      var c = this.a[b];
      if (nf(this.b, c) && this.b[c] == a) return !0
    }
    return !1
  };
  var of = function (a) {
    a.b = {};
    a.a.length = 0;
    a.f = 0
  }, pf = function (a, b) {
    nf(a.b, b) && (delete a.b[b], a.f--, a.a.length > 2 * a.f && mf(a))
  }, mf = function (a) {
    if (a.f != a.a.length) {
      for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        nf(a.b, d) && (a.a[c++] = d);
        b++
      }
      a.a.length = c
    }
    if (a.f != a.a.length) {
      var e = {};
      for (c = b = 0; b < a.a.length;) d = a.a[b], nf(e, d) || (a.a[c++] = d, e[d] = 1), b++;
      a.a.length = c
    }
  };
  I.prototype.get = function (a, b) {
    return nf(this.b, a) ? this.b[a] : b
  };
  I.prototype.set = function (a, b) {
    nf(this.b, a) || (this.f++, this.a.push(a));
    this.b[a] = b
  };
  I.prototype.forEach = function (a, b) {
    for (var c = this.S(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  var nf = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var J = function () {
    this.s = this.s;
    this.ia = this.ia
  };
  J.prototype.s = !1;
  J.prototype.dispose = function () {
    this.s || (this.s = !0, this.v())
  };
  var rf = function (a, b) {
    b = Ka(qf, b);
    a.s ? b() : (a.ia || (a.ia = []), a.ia.push(b))
  };
  J.prototype.v = function () {
    if (this.ia)
      for (; this.ia.length;) this.ia.shift()()
  };
  var qf = function (a) {
      a && "function" == typeof a.dispose && a.dispose()
    },
    sf = function (a) {
      for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        Da(d) ? sf.apply(null, d) : qf(d)
      }
    };
  var tf = function (a, b) {
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = this.b = !1
  };
  tf.prototype.stopPropagation = function () {
    this.b = !0
  };
  tf.prototype.f = function () {
    this.defaultPrevented = !0
  };
  var uf = function (a) {
    a.f()
  };
  var vf = !cd || 9 <= Number(od),
    wf = cd && !nd("9"),
    xf = function () {
      if (!h.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0
          }
        });
      try {
        h.addEventListener("test", za, b), h.removeEventListener("test", za, b)
      } catch (c) {}
      return a
    }();
  var zf = function (a, b) {
    tf.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.aa = null;
    if (a) {
      var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.a = b;
      if (b = a.relatedTarget) {
        if (fd) {
          a: {
            try {
              Zc(b.nodeName);
              var e = !0;
              break a
            } catch (f) {}
            e = !1
          }
          e ||
          (b = null)
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey =
        a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : yf[a.pointerType] || "";
      this.aa = a;
      a.defaultPrevented && this.f()
    }
  };
  w(zf, tf);
  var yf = Jd({
    2: "touch",
    3: "pen",
    4: "mouse"
  });
  zf.prototype.stopPropagation = function () {
    zf.w.stopPropagation.call(this);
    this.aa.stopPropagation ? this.aa.stopPropagation() : this.aa.cancelBubble = !0
  };
  zf.prototype.f = function () {
    zf.w.f.call(this);
    var a = this.aa;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, wf) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  zf.prototype.Jd = function () {
    return this.aa
  };
  var Af = "closure_listenable_" + (1E6 * Math.random() | 0),
    Bf = function (a) {
      return !(!a || !a[Af])
    },
    Cf = 0;
  var Df = function (a, b, c, d, e) {
      this.listener = a;
      this.a = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Oa = e;
      this.key = ++Cf;
      this.Pa = this.hb = !1
    },
    Ef = function (a) {
      a.Pa = !0;
      a.listener = null;
      a.a = null;
      a.src = null;
      a.Oa = null
    };
  var Ff = function (a) {
    this.src = a;
    this.a = {};
    this.b = 0
  };
  Ff.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var k = Gf(a, b, d, e); - 1 < k ? (b = a[k], c || (b.hb = !1)) : (b = new Df(b, this.src, f, !!d, e), b.hb = c, a.push(b));
    return b
  };
  var Hf = function (a, b) {
      var c = b.type;
      if (!(c in a.a)) return !1;
      var d = mb(a.a[c], b);
      d && (Ef(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
      return d
    },
    If = function (a, b) {
      b = b && b.toString();
      var c = 0,
        d;
      for (d in a.a)
        if (!b || d == b) {
          for (var e = a.a[d], f = 0; f < e.length; f++) ++c, Ef(e[f]);
          delete a.a[d];
          a.b--
        }
    },
    Jf = function (a, b, c, d, e) {
      a = a.a[b.toString()];
      b = -1;
      a && (b = Gf(a, c, d, e));
      return -1 < b ? a[b] : null
    },
    Kf = function (a, b) {
      var c = void 0 !== b,
        d = c ? b.toString() : "";
      return Nb(a.a, function (e) {
        for (var f = 0; f < e.length; ++f)
          if (!c || e[f].type == d) return !0;
        return !1
      })
    },
    Gf = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Pa && f.listener == b && f.capture == !!c && f.Oa == d) return e
      }
      return -1
    };
  var Lf = "closure_lm_" + (1E6 * Math.random() | 0),
    Mf = {},
    Nf = 0,
    Pf = function (a, b, c, d, e) {
      if (d && d.once) return Of(a, b, c, d, e);
      if (r(b)) {
        for (var f = 0; f < b.length; f++) Pf(a, b[f], c, d, e);
        return null
      }
      c = Qf(c);
      return Bf(a) ? a.Na(b, c, u(d) ? !!d.capture : !!d, e) : Rf(a, b, c, !1, d, e)
    },
    Rf = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var k = u(e) ? !!e.capture : !!e,
        l = Sf(a);
      l || (a[Lf] = l = new Ff(a));
      c = l.add(b, c, d, k, f);
      if (c.a) return c;
      d = Tf();
      c.a = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) xf || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(),
        d, e);
      else if (a.attachEvent) a.attachEvent(Uf(b.toString()), d);
      else if (a.addListener && a.removeListener) y("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Nf++;
      return c
    },
    Tf = function () {
      var a = Vf,
        b = vf ? function (c) {
          return a.call(b.src, b.listener, c)
        } : function (c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c
        };
      return b
    },
    Of = function (a, b, c, d, e) {
      if (r(b)) {
        for (var f = 0; f < b.length; f++) Of(a, b[f], c, d, e);
        return null
      }
      c = Qf(c);
      return Bf(a) ?
        a.g.add(String(b), c, !0, u(d) ? !!d.capture : !!d, e) : Rf(a, b, c, !0, d, e)
    },
    Wf = function (a, b, c, d, e) {
      if (r(b))
        for (var f = 0; f < b.length; f++) Wf(a, b[f], c, d, e);
      else d = u(d) ? !!d.capture : !!d, c = Qf(c), Bf(a) ? a.Va(b, c, d, e) : a && (a = Sf(a)) && (b = Jf(a, b, c, d, e)) && Xf(b)
    },
    Xf = function (a) {
      if ("number" === typeof a || !a || a.Pa) return !1;
      var b = a.src;
      if (Bf(b)) return Hf(b.g, a);
      var c = a.type,
        d = a.a;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Uf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      Nf--;
      (c = Sf(b)) ? (Hf(c, a), 0 == c.b && (c.src = null, b[Lf] = null)) : Ef(a);
      return !0
    },
    Yf = function (a, b, c, d, e) {
      c = Qf(c);
      d = !!d;
      return Bf(a) ? Jf(a.g, String(b), c, d, e) : a ? (a = Sf(a)) ? Jf(a, b, c, d, e) : null : null
    },
    Zf = function (a, b) {
      if (Bf(a)) return Kf(a.g, void 0 !== b ? String(b) : void 0);
      a = Sf(a);
      return !!a && Kf(a, b)
    },
    Uf = function (a) {
      return a in Mf ? Mf[a] : Mf[a] = "on" + a
    },
    ag = function (a, b, c, d) {
      var e = !0;
      if (a = Sf(a))
        if (b = a.a[b.toString()])
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.Pa && (f = $f(f, d), e = e && !1 !== f)
          }
      return e
    },
    $f = function (a,
      b) {
      var c = a.listener,
        d = a.Oa || a.src;
      a.hb && Xf(a);
      return c.call(d, b)
    },
    Vf = function (a, b) {
      if (a.Pa) return !0;
      if (!vf) {
        var c = b || ya("window.event");
        b = new zf(c, this);
        var d = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
          a: {
            var e = !1;
            if (0 == c.keyCode) try {
              c.keyCode = -1;
              break a
            } catch (k) {
              e = !0
            }
            if (e || void 0 == c.returnValue) c.returnValue = !0
          }
          c = [];
          for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
          for (e = c.length - 1; !b.b && 0 <= e; e--) {
            b.a = c[e];
            var f = ag(c[e], a, !0, b);
            d = d && f
          }
          for (e = 0; !b.b && e < c.length; e++) b.a = c[e],
          f = ag(c[e], a, !1, b),
          d = d && f
        }
        return d
      }
      return $f(a,
        new zf(b, this))
    },
    Sf = function (a) {
      a = a[Lf];
      return a instanceof Ff ? a : null
    },
    bg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    Qf = function (a) {
      y(a, "Listener can not be null.");
      if (t(a)) return a;
      y(a.handleEvent, "An object listener must have handleEvent method.");
      a[bg] || (a[bg] = function (b) {
        return a.handleEvent(b)
      });
      return a[bg]
    };
  var K = function () {
    J.call(this);
    this.g = new Ff(this);
    this.xe = this;
    this.eb = null
  };
  w(K, J);
  K.prototype[Af] = !0;
  g = K.prototype;
  g.Qb = function (a) {
    this.eb = a
  };
  g.addEventListener = function (a, b, c, d) {
    Pf(this, a, b, c, d)
  };
  g.removeEventListener = function (a, b, c, d) {
    Wf(this, a, b, c, d)
  };
  g.dispatchEvent = function (a) {
    cg(this);
    var b = this.eb;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.eb) c.push(b), y(1E3 > ++d, "infinite loop")
    }
    b = this.xe;
    d = a.type || a;
    if ("string" === typeof a) a = new tf(a, b);
    else if (a instanceof tf) a.target = a.target || b;
    else {
      var e = a;
      a = new tf(d, b);
      Wb(a, e)
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.b && 0 <= f; f--) {
        var k = a.a = c[f];
        e = dg(k, d, !0, a) && e
      }
    a.b || (k = a.a = b, e = dg(k, d, !0, a) && e, a.b || (e = dg(k, d, !1, a) && e));
    if (c)
      for (f = 0; !a.b && f < c.length; f++) k = a.a = c[f], e = dg(k, d, !1, a) && e;
    return e
  };
  g.v = function () {
    K.w.v.call(this);
    this.g && If(this.g, void 0);
    this.eb = null
  };
  g.Na = function (a, b, c, d) {
    cg(this);
    return this.g.add(String(a), b, !1, c, d)
  };
  g.Va = function (a, b, c, d) {
    var e = this.g;
    a = String(a).toString();
    if (a in e.a) {
      var f = e.a[a];
      b = Gf(f, b, c, d); - 1 < b ? (Ef(f[b]), lb(f, b), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
    } else e = !1;
    return e
  };
  var dg = function (a, b, c, d) {
      b = a.g.a[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var k = b[f];
        if (k && !k.Pa && k.capture == c) {
          var l = k.listener,
            m = k.Oa || k.src;
          k.hb && Hf(a.g, k);
          e = !1 !== l.call(m, d) && e
        }
      }
      return e && !d.defaultPrevented
    },
    cg = function (a) {
      y(a.g, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
  var eg = function (a, b) {
    K.call(this);
    this.b = a || 1;
    this.a = b || h;
    this.f = v(this.qf, this);
    this.h = La()
  };
  w(eg, K);
  g = eg.prototype;
  g.Ma = !1;
  g.ma = null;
  g.setInterval = function (a) {
    this.b = a;
    this.ma && this.Ma ? (this.stop(), this.start()) : this.ma && this.stop()
  };
  g.qf = function () {
    if (this.Ma) {
      var a = La() - this.h;
      0 < a && a < .8 * this.b ? this.ma = this.a.setTimeout(this.f, this.b - a) : (this.ma && (this.a.clearTimeout(this.ma), this.ma = null), this.dispatchEvent("tick"), this.Ma && (this.stop(), this.start()))
    }
  };
  g.start = function () {
    this.Ma = !0;
    this.ma || (this.ma = this.a.setTimeout(this.f, this.b), this.h = La())
  };
  g.stop = function () {
    this.Ma = !1;
    this.ma && (this.a.clearTimeout(this.ma), this.ma = null)
  };
  g.v = function () {
    eg.w.v.call(this);
    this.stop();
    delete this.a
  };
  var fg = function (a, b, c) {
    if (t(a)) c && (a = v(a, c));
    else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : h.setTimeout(a, b || 0)
  };
  var gg = {},
    hg = {},
    ig = new Sa(.001, "");
  ig.a = "load";
  var jg = new Sa(.1, "");
  jg.a = "fail";
  var kg = new I;
  kg.set("enabler", "enabler");
  kg.set("dcmenabler", "dcm");
  kg.set("video", "vid");
  kg.set("configurable", "cfg");
  kg.set("configurablefiller", "cfg_fill");
  kg.set("layouts", "lay");
  kg.set("layoutsfiller", "lay_fill");
  kg.set("gdn", "gdn");
  kg.set("rad_ui_video", "rad");
  var lg = function () {
      for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.src || c.getAttribute("src"))
          if (c = c.src || c.getAttribute("src"), /Enabler/.test(c)) return c.substring(0, c.lastIndexOf("/") + 1)
      }
      return ""
    },
    mg = function (a) {
      a = gg[a];
      return void 0 !== a && 1 <= a
    },
    ng = function (a) {
      return [lg(), "dev_studio_01_243_", [a, "module"].join(""), ".js"].join("")
    };
  n("goog.exportSymbol", function (a, b, c) {
    n(a, b, c)
  }, this);
  var og = function (a) {
      a += "goog.exportSymbol('studioLoader.context.evalInContext', " + og.toString() + ");";
      eval(a)
    },
    pg = function (a, b) {
      b = kg.get(b) || "unknown";
      a.f = b;
      a = a.b();
      !wb(a) && x(1) && (zd(document, "IMG").src = a)
    },
    qg = function (a, b) {
      gg[a] = 2;
      pg(ig, a);
      b = "number" === typeof b ? b : 2;
      for (var c = ng(a), d = jf(lf(c)), e = 0; e < b; ++e) d = d.then(void 0, function () {
        return jf(lf(c))
      });
      return d.then(function () {
        gg[a] = 3
      }, function () {
        pg(jg, a);
        return Ee()
      })
    },
    rg = function (a) {
      if (mg(a)) return hg[a];
      gg[a] = 1;
      for (var b = [], c = DEPS_GRAPH ? DEPS_GRAPH[[a,
          "module"
        ].join("")] : [], d = c.length - 1; 0 <= d; d--) {
        var e = c[d].replace(/module$/, "");
        if (e == a) break;
        mg(e) ? b.push(hg[e]) : b.push(rg(e))
      }
      b = He(b).then(Ka(qg, a, 2));
      return hg[a] = b
    },
    sg = function (a, b) {
      a = rg(a);
      t(b) && (a = a.then(b));
      Je(a, za)
    };
  n("studioLoader.context.evalInContext", og, void 0);
  var tg = function (a, b) {
    a.addEventListener && a.addEventListener("load", b, !1)
  };

  function ug(a) {
    var b = window,
      c = !0;
    c = void 0 === c ? !1 : c;
    new ze(function (d, e) {
      function f() {
        k.onload = null;
        k.onerror = null;
        b.document.body.removeChild(k)
      }
      var k = b.document.createElement("script");
      k.onload = function () {
        f();
        d()
      };
      k.onerror = function () {
        f();
        e(void 0)
      };
      k.type = "text/javascript";
      Oc(k, a);
      c && "complete" !== b.document.readyState ? tg(b, function () {
        b.document.body.appendChild(k)
      }) : b.document.body.appendChild(k)
    })
  };

  function vg() {
    var a = wg(),
      b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.a + ("&tv=" + a.b + "&st=") + a.Ea,
      c = De(void 0);
    try {
      c = xg(b)
    } catch (d) {}
    return c.then(function (d) {
      if (d) {
        var e = a.ob || d.sodar_query_id;
        if (e && d.bg_hash_basename && d.bg_binary) return {
          context: a.f,
          rd: d.bg_hash_basename,
          qd: d.bg_binary,
          Be: a.a + "_" + a.b,
          ob: e,
          Ea: a.Ea
        }
      }
    })
  }
  var xg = function (a) {
    return new ze(function (b, c) {
      var d = new XMLHttpRequest;
      d.onreadystatechange = function () {
        d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
      };
      d.open("GET", a, !0);
      d.send()
    })
  };

  function yg() {
    vg().then(function (a) {
      if (a) {
        var b = "sodar2";
        b = void 0 === b ? "sodar2" : b;
        var c = window,
          d = c.GoogleGcLKhOms;
        d && "function" === typeof d.push || (d = c.GoogleGcLKhOms = []);
        var e = {};
        d.push((e._ctx_ = a.context, e._bgv_ = a.rd, e._bgp_ = a.qd, e._li_ = a.Be, e._jk_ = a.ob, e._st_ = a.Ea, e));
        if (d = c.GoogleDX5YKUSk) c.GoogleDX5YKUSk = void 0, d[1]();
        b = lc({
          basename: b
        });
        ug(b)
      }
      return a
    })
  };
  var zg = function (a) {
      this.a = a.a;
      this.b = a.b;
      this.f = a.f;
      this.ob = a.ob;
      this.Ea = a.Ea
    },
    Ag = function () {
      this.a = "xfad";
      this.b = "01_243";
      this.f = "cr";
      this.Ea = "env"
    },
    wg = function () {
      var a = new Ag;
      a.Ea = "int";
      return new zg(a)
    };
  var Bg = Xb(),
    Cg = Xc() || A("iPod"),
    Dg = A("iPad"),
    Eg = A("Android") && !(Yb() || Xb() || A("Opera") || A("Silk")),
    Fg = Yb(),
    Gg = A("Safari") && !(Yb() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || Xb() || A("Silk") || A("Android")) && !Yc();
  var Hg = function () {},
    Ig = "function" == typeof Uint8Array,
    Jg = function (a, b) {
      a.b = null;
      b || (b = []);
      a.j = void 0;
      a.g = -1;
      a.a = b;
      a: {
        if (b = a.a.length) {
          --b;
          var c = a.a[b];
          if (!(null === c || "object" != typeof c || r(c) || Ig && c instanceof Uint8Array)) {
            a.s = b - a.g;
            a.f = c;
            break a
          }
        }
        a.s = Number.MAX_VALUE
      }
      a.h = {}
    },
    Kg = Object.freeze ? Object.freeze([]) : [],
    Lg = function (a, b) {
      if (b < a.s) {
        b += a.g;
        var c = a.a[b];
        return c === Kg ? a.a[b] = [] : c
      }
      if (a.f) return c = a.f[b], c === Kg ? a.f[b] = [] : c
    },
    Mg = function (a, b) {
      a.b || (a.b = {});
      if (!a.b[1]) {
        var c = Lg(a, 1);
        c && (a.b[1] = new b(c))
      }
      return a.b[1]
    },
    Og = function (a) {
      if (a.b)
        for (var b in a.b) {
          var c = a.b[b];
          if (r(c))
            for (var d = 0; d < c.length; d++) c[d] && Ng(c[d]);
          else c && Ng(c)
        }
    },
    Ng = function (a) {
      Og(a);
      return a.a
    };
  Hg.prototype.toString = function () {
    Og(this);
    return this.a.toString()
  };
  var Pg = function (a) {
    Jg(this, a)
  };
  w(Pg, Hg);
  var Qg = function (a) {
    Jg(this, a)
  };
  w(Qg, Hg);
  var Rg = function (a) {
      if (a.O && "function" == typeof a.O) return a.O();
      if ("string" === typeof a) return a.split("");
      if (Da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
      }
      return Ob(a)
    },
    Sg = function (a, b) {
      return a.contains && "function" == typeof a.contains ? a.contains(b) : a.Sa && "function" == typeof a.Sa ? a.Sa(b) : Da(a) || "string" === typeof a ? 0 <= db(a, b) : Rb(a, b)
    };
  var Tg = function () {
      this.a = new I
    },
    Ug = function (a) {
      var b = typeof a;
      return "object" == b && a || "function" == b ? "o" + Ga(a) : b.substr(0, 1) + a
    };
  Tg.prototype.ba = function () {
    return this.a.ba()
  };
  Tg.prototype.add = function (a) {
    this.a.set(Ug(a), a)
  };
  var Wg = function (a) {
    var b = Vg;
    a = Rg(a);
    for (var c = a.length, d = 0; d < c; d++) b.add(a[d])
  };
  Tg.prototype.contains = function (a) {
    return this.a.V(Ug(a))
  };
  Tg.prototype.O = function () {
    return this.a.O()
  };
  n("studio.common.Feature.Type", {
    cg: 1,
    SDK_EVENT_FORWARDER: 2,
    RL_EVENT_FORWARDER: 3
  }, void 0);
  var Vg = new Tg;
  n("studio.common.Feature.hasFeature", function (a) {
    return Vg.contains(a)
  }, void 0);
  n("studio.common.Feature.hasFeatures", function (a) {
    var b = Vg;
    a: {
      var c = b.contains;
      if ("function" == typeof a.every) a = a.every(c, b);
      else if (Da(a) || "string" === typeof a) a = hb(a, c, b);
      else {
        if (a.S && "function" == typeof a.S) var d = a.S();
        else if (a.O && "function" == typeof a.O) d = void 0;
        else if (Da(a) || "string" === typeof a) {
          d = [];
          for (var e = a.length, f = 0; f < e; f++) d.push(f)
        } else
          for (f in d = [], e = 0, a) d[e++] = f;
        e = Rg(a);
        f = e.length;
        for (var k = 0; k < f; k++)
          if (!c.call(b, e[k], d && d[k], a)) {
            a = !1;
            break a
          } a = !0
      }
    }
    return a
  }, void 0);
  var Xg = function (a, b) {
    this.b = a;
    this.a = null != b ? b : 0
  };
  n("studio.common.Orientation", Xg, void 0);
  var Yg = function () {
      var a = window;
      return a.innerWidth > a.innerHeight ? "landscape" : "portrait"
    },
    Zg = function () {
      return "onorientationchange" in window
    };
  Xg.Mode = {
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape"
  };
  Xg.prototype.Rd = function () {
    return this.b
  };
  Xg.prototype.getMode = Xg.prototype.Rd;
  Xg.prototype.Qd = function () {
    return this.a
  };
  Xg.prototype.getDegrees = Xg.prototype.Qd;
  Xg.prototype.toString = function () {
    return this.b
  };
  var $g = function (a, b, c, d, e, f, k) {
      var l = "";
      a && (l += a + ":");
      c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
      e && (l += e);
      f && (l += "?" + f);
      k && (l += "#" + k);
      return l
    },
    ah = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    bh = function (a) {
      var b = a.indexOf("#");
      return 0 > b ? null : a.substr(b + 1)
    },
    ch = function (a) {
      a = a.match(ah);
      return $g(a[1], a[2], a[3], a[4])
    },
    dh = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <=
            d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1)
          } else f = a[c];
          b(f, e ? Pc(e) : "")
        }
      }
    },
    eh = function (a, b) {
      if (!b) return a;
      var c = a.indexOf("#");
      0 > c && (c = a.length);
      var d = a.indexOf("?");
      if (0 > d || d > c) {
        d = c;
        var e = ""
      } else e = a.substring(d + 1, c);
      a = [a.substr(0, d), e, a.substr(c)];
      c = a[1];
      a[1] = b ? c ? c + "&" + b : b : c;
      return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    },
    fh = function (a, b, c) {
      Za(a);
      if (r(b)) {
        ab(b);
        for (var d = 0; d < b.length; d++) fh(a, String(b[d]), c)
      } else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    },
    gh = /#|$/,
    hh = function (a,
      b) {
      var c = a.search(gh);
      a: {
        var d = 0;
        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
          var f = a.charCodeAt(d - 1);
          if (38 == f || 63 == f)
            if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
          d += e + 1
        }
        d = -1
      }
      if (0 > d) return null;
      e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return Pc(a.substr(d, e - d))
    };
  var ih = function (a, b) {
      return b ? a.replace("[rm_exit_id]", b) : a
    },
    jh = function (a) {
      wb(Sc(a)) || "market" != (a.match(ah)[1] || null) || (a = a.match(ah), a = "https://play.google.com/store/apps/details" + $g(null, null, null, null, a[5], a[6], a[7]));
      return a
    };
  var kh = {
    CREATIVETOOLSET_CONFIG: "creativeToolsetConfig",
    CREATIVETOOLSET_INTERNALS: "creativeToolsetInternals",
    CREATIVETOOLSET_INTERNALS_GEN204: "creativeToolsetInternalsGen204",
    CREATIVE_REPORTER: "creativeReporter",
    CREATIVE_INNOVATION: "gcreativeinnovation",
    GOOGLE_AFMA_SUPPORT: "googleAfmaSupport"
  };
  n("studio.common.WhitelistedExternalObject", kh, void 0);
  var lh = {};
  var L = function (a) {
    J.call(this);
    this.l = a;
    this.f = {}
  };
  w(L, J);
  var mh = [],
    M = function (a, b, c, d, e, f) {
      r(c) || (c && (mh[0] = c.toString()), c = mh);
      for (var k = 0; k < c.length; k++) {
        var l = Pf(b, c[k], d || a.handleEvent, e || !1, f || a.l || a);
        if (!l) break;
        a.f[l.key] = l
      }
    },
    nh = function (a, b, c, d, e, f) {
      if (r(c))
        for (var k = 0; k < c.length; k++) nh(a, b, c[k], d, e, f);
      else(b = Of(b, c, d || a.handleEvent, e, f || a.l || a)) && (a.f[b.key] = b)
    },
    oh = function (a, b, c, d, e, f) {
      if (r(c))
        for (var k = 0; k < c.length; k++) oh(a, b, c[k], d, e, f);
      else if (b = Yf(b, c, d || a.handleEvent, u(e) ? !!e.capture : !!e, f || a.l || a)) Xf(b), delete a.f[b.key]
    },
    ph = function (a) {
      Lb(a.f,
        function (b, c) {
          this.f.hasOwnProperty(c) && Xf(b)
        }, a);
      a.f = {}
    };
  L.prototype.v = function () {
    L.w.v.call(this);
    ph(this)
  };
  L.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var qh = {
      1: "NativeMessagingTransport",
      2: "IframePollingTransport",
      3: "DirectTransport"
    },
    rh = ["pu", "lru", "pru", "lpu", "ppu"],
    sh = {},
    uh = function () {
      for (var a = 10, b = th, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
      return d
    },
    th = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    N = C("goog.net.xpc");
  var vh = function (a) {
    J.call(this);
    this.W = a || td()
  };
  w(vh, J);
  vh.prototype.Ra = 0;
  var wh = function (a) {
    return xd(a.W.a)
  };
  var xh = function (a, b) {
    vh.call(this, b);
    this.a = a;
    this.A = new L(this);
    rf(this, this.A);
    this.j = new eg(100, wh(this));
    rf(this, this.j);
    this.g = new H;
    this.h = new H;
    this.b = new H;
    this.o = uh();
    this.l = null;
    this.f = {};
    this.F = this.a.name;
    this.a.Ga(this.a.name + "_" + this.a.Y());
    this.B = !1;
    af(this.b, this.g);
    af(this.b, this.h);
    $e(this.b, this.hf, this);
    this.b.K(!0);
    M(this.A, this.j, "tick", this.gd, void 0);
    E(N, "DirectTransport created. role=" + this.a.Y())
  };
  w(xh, vh);
  var yh = {},
    Bh = function (a) {
      var b = new zh(a.channelName, a.service, a.payload);
      a = b.a;
      var c = b.f;
      b = b.b;
      fe(N, "messageReceived: channel=" + a + ", service=" + c + ", payload=" + b);
      var d = lh[a];
      if (d) return d.na(c, b), !0;
      d = Ah(b)[0];
      for (var e in lh) {
        var f = lh[e];
        if (1 == f.Y() && !f.isConnected() && "tp" == c && "SETUP" == d) return f.Ga(a), f.na(c, b), !0
      }
      E(N, "channel name mismatch; message ignored.");
      return !1
    };
  g = xh.prototype;
  g.Ra = 3;
  g.ab = function (a) {
    a = Ah(a);
    var b = a[1];
    switch (a[0]) {
      case "SETUP_ACK":
        this.g.a || this.g.K(!0);
        break;
      case "SETUP":
        this.R("tp", "SETUP_ACK"), this.h.a || this.h.K(!0), null != this.l && this.l != b && (E(N, "Sending SETUP and changing peer ID to: " + b), this.R("tp", "SETUP," + this.o)), this.l = b
    }
  };
  g.connect = function () {
    var a = wh(this);
    if (a) {
      var b = Ga(a);
      0 == (yh[b] || 0) && null == ya("crosswindowmessaging.channel", a) && n("crosswindowmessaging.channel", Bh, a);
      yh[b]++;
      this.B = !0;
      this.gd()
    } else fe(N, "connect(): no window to initialize.")
  };
  g.gd = function () {
    this.a.isConnected() ? this.j.stop() : (this.j.start(), this.R("tp", "SETUP," + this.o))
  };
  g.R = function (a, b) {
    this.a.da ? (a = new zh(this.F + "_" + (0 == this.a.Y() ? 1 : 0), a, b), this.a.a.directSyncMode ? this.fd(a) : this.f[Ga(a)] = fg(v(this.fd, this, a), 0)) : fe(N, "send(): window not ready")
  };
  g.fd = function (a) {
    var b = Ga(a);
    this.f[b] && delete this.f[b];
    try {
      var c = ya("crosswindowmessaging.channel", this.a.da)
    } catch (d) {
      D(N, "Can't access other window, ignoring.", d);
      return
    }
    if (null === c) D(N, "Peer window had no global function.");
    else try {
      c({
        channelName: a.a,
        service: a.f,
        payload: a.b
      }), E(N, "send(): channelName=" + a.a + " service=" + a.f + " payload=" + a.b)
    } catch (d) {
      D(N, "Error performing call, ignoring.", d)
    }
  };
  g.hf = function () {
    Ch(this.a, 0)
  };
  g.v = function () {
    if (this.B) {
      var a = wh(this),
        b = Ga(a);
      1 == --yh[b] && n("crosswindowmessaging.channel", null, a)
    }
    this.f && (Lb(this.f, function (c) {
      h.clearTimeout(c)
    }), this.f = null);
    this.g && (this.g.cancel(), delete this.g);
    this.h && (this.h.cancel(), delete this.h);
    this.b && (this.b.cancel(), delete this.b);
    xh.w.v.call(this)
  };
  var Ah = function (a) {
      a = a.split(",");
      a[1] = a[1] || null;
      return a
    },
    zh = function (a, b, c) {
      this.a = a;
      this.f = b;
      this.b = c
    };
  var Dh = function (a, b, c, d, e) {
    vh.call(this, c);
    this.f = a;
    this.b = e || 2;
    y(1 <= this.b);
    y(2 >= this.b);
    this.H = b || "*";
    this.F = new L(this);
    this.l = new eg(100, wh(this));
    this.A = !!d;
    this.h = new H;
    this.j = new H;
    this.g = new H;
    this.oa = uh();
    this.B = null;
    this.A ? 1 == this.f.Y() ? af(this.g, this.h) : af(this.g, this.j) : (af(this.g, this.h), 2 == this.b && af(this.g, this.j));
    $e(this.g, this.Ia, this);
    this.g.K(!0);
    this.ja = cd && !nd("11");
    M(this.F, this.l, "tick", this.U, void 0);
    E(N, "NativeMessagingTransport created.  protocolVersion=" + this.b + ", oneSidedHandshake=" +
      this.A + ", role=" + this.f.Y())
  };
  w(Dh, vh);
  Dh.prototype.a = null;
  Dh.prototype.J = !1;
  Dh.prototype.Ra = 1;
  var Eh = {};
  Dh.prototype.o = 0;
  var Gh = function (a) {
    var b = a.aa.data;
    if ("string" !== typeof b) return !1;
    var c = b.indexOf("|"),
      d = b.indexOf(":");
    if (-1 == c || -1 == d) return !1;
    var e = b.substring(0, c);
    c = b.substring(c + 1, d);
    b = b.substring(d + 1);
    fe(N, "messageReceived: channel=" + e + ", service=" + c + ", payload=" + b);
    if (d = lh[e]) return d.na(c, b, a.aa.origin), !0;
    d = Fh(b)[0];
    for (var f in lh) {
      var k = lh[f];
      if (1 == k.Y() && !k.isConnected() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d) && k.Ya(a.aa.origin)) return k.Ga(e), k.na(c, b), !0
    }
    E(N, 'channel name mismatch; message ignored"');
    return !1
  };
  Dh.prototype.ab = function (a) {
    var b = Fh(a);
    a = b[1];
    switch (b[0]) {
      case "SETUP_ACK":
        Hh(this, 1);
        this.h.a || this.h.K(!0);
        break;
      case "SETUP_ACK_NTPV2":
        2 == this.b && (Hh(this, 2), this.h.a || this.h.K(!0));
        break;
      case "SETUP":
        Hh(this, 1);
        Ih(this, 1);
        break;
      case "SETUP_NTPV2":
        2 == this.b && (b = this.a, Hh(this, 2), Ih(this, 2), 1 != b && null == this.B || this.B == a || (E(N, "Sending SETUP and changing peer ID to: " + a), Jh(this)), this.B = a)
    }
  };
  var Jh = function (a) {
      y(!(1 == a.b && 2 == a.a));
      2 != a.b || null != a.a && 2 != a.a || a.R("tp", "SETUP_NTPV2," + a.oa);
      null != a.a && 1 != a.a || a.R("tp", "SETUP")
    },
    Ih = function (a, b) {
      y(1 != a.b || 2 != b, "Shouldn't try to send a v2 setup ack in v1 mode.");
      if (2 != a.b || null != a.a && 2 != a.a || 2 != b) {
        if (null != a.a && 1 != a.a || 1 != b) return;
        a.R("tp", "SETUP_ACK")
      } else a.R("tp", "SETUP_ACK_NTPV2");
      a.j.a || a.j.K(!0)
    },
    Hh = function (a, b) {
      b > a.a && (a.a = b);
      1 == a.a && (a.j.a || a.A || a.j.K(!0), a.B = null)
    };
  Dh.prototype.connect = function () {
    var a = wh(this),
      b = Ga(a),
      c = Eh[b];
    "number" !== typeof c && (c = 0);
    0 == c && Pf(a.postMessage ? a : a.document, "message", Gh, !1, Dh);
    Eh[b] = c + 1;
    this.J = !0;
    this.U()
  };
  Dh.prototype.U = function () {
    var a = 0 == this.f.Y();
    this.A && a || this.f.isConnected() || this.s ? this.l.stop() : (this.l.start(), Jh(this))
  };
  var Kh = function (a, b, c) {
    var d = a.f.da,
      e = a.f.name;
    a.o = 0;
    try {
      var f = d.postMessage ? d : d.document;
      f.postMessage ? (f.postMessage(e + "|" + b + ":" + c, a.H), fe(N, "send(): service=" + b + " payload=" + c + " to hostname=" + a.H)) : D(N, "Peer window had no postMessage function.")
    } catch (k) {
      D(N, "Error performing postMessage, ignoring.", k)
    }
  };
  Dh.prototype.R = function (a, b) {
    var c = this;
    this.f.da ? this.ja ? this.o = fg(function () {
      return void Kh(c, a, b)
    }, 0) : Kh(this, a, b) : fe(N, "send(): window not ready")
  };
  Dh.prototype.Ia = function () {
    Ch(this.f, 1 == this.b || 1 == this.a ? 200 : void 0)
  };
  Dh.prototype.v = function () {
    if (this.J) {
      var a = wh(this),
        b = Ga(a),
        c = Eh[b];
      Eh[b] = c - 1;
      1 == c && Wf(a.postMessage ? a : a.document, "message", Gh, !1, Dh)
    }
    this.o && (h.clearTimeout(this.o), this.o = 0);
    qf(this.F);
    delete this.F;
    qf(this.l);
    delete this.l;
    this.h.cancel();
    delete this.h;
    this.j.cancel();
    delete this.j;
    this.g.cancel();
    delete this.g;
    delete this.R;
    Dh.w.v.call(this)
  };
  var Fh = function (a) {
    a = a.split(",");
    a[1] = a[1] || null;
    return a
  };
  var Nh = function (a) {
      var b = [];
      Lh(new Mh, a, b);
      return b.join("")
    },
    Mh = function () {},
    Lh = function (a, b, c) {
      if (null == b) c.push("null");
      else {
        if ("object" == typeof b) {
          if (r(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++) c.push(e), Lh(a, d[f], c), e = ",";
            c.push("]");
            return
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
          else {
            c.push("{");
            e = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Oh(d, c), c.push(":"), Lh(a, f, c), e = ","));
            c.push("}");
            return
          }
        }
        switch (typeof b) {
          case "string":
            Oh(b, c);
            break;
          case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
          case "boolean":
            c.push(String(b));
            break;
          case "function":
            c.push("null");
            break;
          default:
            throw Error("Unknown type: " + typeof b);
        }
      }
    },
    Ph = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    Qh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    Oh = function (a, b) {
      b.push('"', a.replace(Qh, function (c) {
        var d = Ph[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Ph[c] = d);
        return d
      }), '"')
    };
  var Rh = function () {
    J.call(this);
    this.l = {}
  };
  w(Rh, J);
  g = Rh.prototype;
  g.yc = C("goog.messaging.AbstractChannel");
  g.connect = function (a) {
    a && a()
  };
  g.isConnected = function () {
    return !0
  };
  g.Wa = function (a, b, c) {
    this.l[a] = {
      K: b,
      Mc: !!c
    }
  };
  g.Tc = function (a) {
    this.h = a
  };
  var Sh = function (a, b, c) {
    var d = a.l[b];
    d || (a.h ? d = {
      K: Ka(a.h, b),
      Mc: u(c)
    } : (D(a.yc, 'Unknown service name "' + b + '"'), d = null));
    if (d) {
      a: {
        var e = d.Mc;
        if (e && "string" === typeof c) try {
          var f = JSON.parse(c);
          break a
        } catch (k) {
          D(a.yc, "Expected JSON payload for " + b + ', was "' + c + '"');
          f = null;
          break a
        } else if (!e && "string" !== typeof c) {
          f = Nh(c);
          break a
        } f = c
      }
      null != f && d.K(f)
    }
  };
  Rh.prototype.v = function () {
    Rh.w.v.call(this);
    delete this.l;
    delete this.h
  };
  var Th = function (a, b, c) {
    J.call(this);
    this.a = a;
    this.g = b || 0;
    this.b = c;
    this.f = v(this.Bd, this)
  };
  w(Th, J);
  g = Th.prototype;
  g.Ca = 0;
  g.v = function () {
    Th.w.v.call(this);
    this.stop();
    delete this.a;
    delete this.b
  };
  g.start = function (a) {
    this.stop();
    this.Ca = fg(this.f, void 0 !== a ? a : this.g)
  };
  g.stop = function () {
    0 != this.Ca && h.clearTimeout(this.Ca);
    this.Ca = 0
  };
  g.Bd = function () {
    this.Ca = 0;
    this.a && this.a.call(this.b)
  };
  var Uh = function (a) {
    this.b = this.j = this.g = "";
    this.l = null;
    this.s = this.a = "";
    this.h = !1;
    var b;
    a instanceof Uh ? (this.h = a.h, Vh(this, a.g), this.j = a.j, this.b = a.b, Wh(this, a.l), this.a = a.a, Xh(this, Yh(a.f)), this.s = a.s) : a && (b = String(a).match(ah)) ? (this.h = !1, Vh(this, b[1] || "", !0), this.j = Zh(b[2] || ""), this.b = Zh(b[3] || "", !0), Wh(this, b[4]), this.a = Zh(b[5] || "", !0), Xh(this, b[6] || "", !0), this.s = Zh(b[7] || "")) : (this.h = !1, this.f = new $h(null, this.h))
  };
  Uh.prototype.toString = function () {
    var a = [],
      b = this.g;
    b && a.push(ai(b, bi, !0), ":");
    var c = this.b;
    if (c || "file" == b) a.push("//"), (b = this.j) && a.push(ai(b, bi, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
    if (c = this.a) this.b && "/" != c.charAt(0) && a.push("/"), a.push(ai(c, "/" == c.charAt(0) ? ci : di, !0));
    (c = this.f.toString()) && a.push("?", c);
    (c = this.s) && a.push("#", ai(c, ei));
    return a.join("")
  };
  Uh.prototype.resolve = function (a) {
    var b = new Uh(this),
      c = !!a.g;
    c ? Vh(b, a.g) : c = !!a.j;
    c ? b.j = a.j : c = !!a.b;
    c ? b.b = a.b : c = null != a.l;
    var d = a.a;
    if (c) Wh(b, a.l);
    else if (c = !!a.a) {
      if ("/" != d.charAt(0))
        if (this.b && !this.a) d = "/" + d;
        else {
          var e = b.a.lastIndexOf("/"); - 1 != e && (d = b.a.substr(0, e + 1) + d)
        } e = d;
      if (".." == e || "." == e) d = "";
      else if (Fb(e, "./") || Fb(e, "/.")) {
        d = vb(e, "/");
        e = e.split("/");
        for (var f = [], k = 0; k < e.length;) {
          var l = e[k++];
          "." == l ? d && k == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && k == e.length &&
            f.push("")) : (f.push(l), d = !0)
        }
        d = f.join("/")
      } else d = e
    }
    c ? b.a = d : c = "" !== a.f.toString();
    c ? Xh(b, Yh(a.f)) : c = !!a.s;
    c && (b.s = a.s);
    return b
  };
  var Vh = function (a, b, c) {
      a.g = c ? Zh(b, !0) : b;
      a.g && (a.g = a.g.replace(/:$/, ""))
    },
    Wh = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.l = b
      } else a.l = null
    },
    Xh = function (a, b, c) {
      b instanceof $h ? (a.f = b, fi(a.f, a.h)) : (c || (b = ai(b, gi)), a.f = new $h(b, a.h))
    },
    Zh = function (a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    },
    ai = function (a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, hi), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    },
    hi = function (a) {
      a =
        a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    bi = /[#\/\?@]/g,
    di = /[#\?:]/g,
    ci = /[#\?]/g,
    gi = /[#\?@]/g,
    ei = /#/g,
    $h = function (a, b) {
      this.b = this.a = null;
      this.f = a || null;
      this.g = !!b
    },
    ii = function (a) {
      a.a || (a.a = new I, a.b = 0, a.f && dh(a.f, function (b, c) {
        a.add(Pc(b), c)
      }))
    };
  $h.prototype.ba = function () {
    ii(this);
    return this.b
  };
  $h.prototype.add = function (a, b) {
    ii(this);
    this.f = null;
    a = ji(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b = Ya(this.b) + 1;
    return this
  };
  var ki = function (a, b) {
    ii(a);
    b = ji(a, b);
    a.a.V(b) && (a.f = null, a.b = Ya(a.b) - a.a.get(b).length, pf(a.a, b))
  };
  g = $h.prototype;
  g.V = function (a) {
    ii(this);
    a = ji(this, a);
    return this.a.V(a)
  };
  g.Sa = function (a) {
    var b = this.O();
    return 0 <= db(b, a)
  };
  g.forEach = function (a, b) {
    ii(this);
    this.a.forEach(function (c, d) {
      z(c, function (e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  };
  g.S = function () {
    ii(this);
    for (var a = this.a.O(), b = this.a.S(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
  };
  g.O = function (a) {
    ii(this);
    var b = [];
    if ("string" === typeof a) this.V(a) && (b = nb(b, this.a.get(ji(this, a))));
    else {
      a = this.a.O();
      for (var c = 0; c < a.length; c++) b = nb(b, a[c])
    }
    return b
  };
  g.set = function (a, b) {
    ii(this);
    this.f = null;
    a = ji(this, a);
    this.V(a) && (this.b = Ya(this.b) - this.a.get(a).length);
    this.a.set(a, [b]);
    this.b = Ya(this.b) + 1;
    return this
  };
  g.get = function (a, b) {
    if (!a) return b;
    a = this.O(a);
    return 0 < a.length ? String(a[0]) : b
  };
  g.toString = function () {
    if (this.f) return this.f;
    if (!this.a) return "";
    for (var a = [], b = this.a.S(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.O(d);
      for (var f = 0; f < d.length; f++) {
        var k = e;
        "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
        a.push(k)
      }
    }
    return this.f = a.join("&")
  };
  var Yh = function (a) {
      var b = new $h;
      b.f = a.f;
      a.a && (b.a = new I(a.a), b.b = a.b);
      return b
    },
    ji = function (a, b) {
      b = String(b);
      a.g && (b = b.toLowerCase());
      return b
    },
    fi = function (a, b) {
      b && !a.g && (ii(a), a.f = null, a.a.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (ki(this, d), ki(this, e), 0 < c.length && (this.f = null, this.a.set(ji(this, e), ob(c)), this.b = Ya(this.b) + c.length))
      }, a));
      a.g = b
    };
  var mi = function (a, b) {
    Rh.call(this);
    for (var c = 0, d; d = rh[c]; c++)
      if (d in a && !/^https?:\/\//.test(a[d])) throw Error("URI " + a[d] + " is invalid for field " + d);
    this.a = a;
    this.name = this.a.cn || uh();
    this.f = b || td();
    this.g = [];
    this.j = new L(this);
    a.lpu = a.lpu || ch(xd(this.f.a).location.href) + "/robots.txt";
    a.ppu = a.ppu || ch(a.pu || "") + "/robots.txt";
    lh[this.name] = this;
    Yf(window, "unload", li) || Of(window, "unload", li);
    E(N, "CrossPageChannel created: " + this.name)
  };
  w(mi, Rh);
  var ni = /^%*tp$/,
    oi = /^%+tp$/;
  g = mi.prototype;
  g.Aa = null;
  g.Fa = null;
  g.la = null;
  g.D = 1;
  g.isConnected = function () {
    return 2 == this.D
  };
  g.da = null;
  g.tb = null;
  g.connect = function (a) {
    this.b = a || za;
    3 == this.D && (this.D = 1);
    this.Fa ? $e(this.Fa, this.ed) : this.ed()
  };
  g.ed = function () {
    E(N, "continueConnection_()");
    this.Fa = null;
    this.a.ifrid && (this.tb = this.f.getElement(this.a.ifrid));
    if (this.tb) {
      var a = this.tb.contentWindow;
      a || (a = window.frames[this.a.ifrid]);
      this.da = a
    }
    if (!this.da) {
      if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
      this.da = window.parent
    }
    if (!this.la) {
      this.a.tp || (this.a.tp = t(document.postMessage) || t(window.postMessage) || cd && window.postMessage ? 1 : 0);
      if (t(this.a.tp)) this.la = new this.a.tp(this, this.f);
      else switch (this.a.tp) {
        case 1:
          this.la =
            new Dh(this, this.a.ph, this.f, !!this.a.osh, this.a.nativeProtocolVersion || 2);
          break;
        case 3:
          if (a = this.da) try {
            a = window.document.domain == this.da.document.domain
          } catch (b) {
            a = !1
          }
          a ? this.la = new xh(this, this.f) : E(N, "DirectTransport not supported for this window, peer window in different security context or not set yet.")
      }
      if (this.la) E(N, "Transport created: " + (qh[String(this.la.Ra)] || ""));
      else throw Error("CrossPageChannel: No suitable transport found! You may try injecting a Transport constructor directly via the channel config object.");
    }
    for (this.la.connect(); 0 < this.g.length;) this.g.shift()()
  };
  g.close = function () {
    this.Fa && (this.Fa.cancel(), this.Fa = null);
    this.g.length = 0;
    ph(this.j);
    this.D = 3;
    qf(this.la);
    this.b = this.la = null;
    qf(this.Aa);
    this.Aa = null;
    E(N, 'Channel "' + this.name + '" closed')
  };
  var Ch = function (a, b) {
    a.isConnected() || a.Aa && 0 != a.Aa.Ca || (a.D = 2, E(N, 'Channel "' + a.name + '" connected'), qf(a.Aa), void 0 !== b ? (a.Aa = new Th(a.b, b), a.Aa.start()) : (a.Aa = null, a.b()))
  };
  mi.prototype.Xa = function (a, b) {
    if (this.isConnected()) {
      try {
        var c = !!this.da && !this.da.closed
      } catch (d) {
        c = !1
      }
      c ? (u(b) && (b = Nh(b)), this.la.R(pi(a), b)) : (ee(N, "Peer has disappeared."), this.close())
    } else ee(N, "Can't send. Channel not connected.")
  };
  mi.prototype.na = function (a, b, c) {
    this.Fa ? this.g.push(v(this.na, this, a, b, c)) : this.Ya(c) ? this.s || 3 == this.D ? D(N, "CrossPageChannel::xpcDeliver(): Channel closed.") : a && "tp" != a ? this.isConnected() ? (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = oi.test(a) ? a.substring(1) : a, Sh(this, a, b)) : E(N, "CrossPageChannel::xpcDeliver(): Not connected.") : this.la.ab(b) : D(N, 'Message received from unapproved origin "' + c + '" - rejected.')
  };
  var pi = function (a) {
    ni.test(a) && (a = "%" + a);
    return a.replace(/[%:|]/g, encodeURIComponent)
  };
  mi.prototype.Y = function () {
    var a = this.a.role;
    return "number" === typeof a ? a : window.parent == this.da ? 1 : 0
  };
  mi.prototype.Ga = function (a) {
    fe(N, "changing channel name to " + a);
    delete lh[this.name];
    this.name = a;
    lh[a] = this
  };
  mi.prototype.Ya = function (a) {
    var b = this.a.ph;
    return wb(Sc(a)) || wb(Sc(b)) || a == this.a.ph
  };
  mi.prototype.v = function () {
    this.close();
    this.tb = this.da = null;
    delete lh[this.name];
    qf(this.j);
    delete this.j;
    mi.w.v.call(this)
  };
  var li = function () {
    for (var a in lh) qf(lh[a])
  };
  var qi = {
      Jf: "devicemotion",
      Kf: "deviceorientation",
      Zf: "hostpageScroll",
      Of: "enterViewport",
      Pf: "exitViewport",
      Df: "adLocation"
    },
    ri = {},
    si;
  for (si in qi) ri[qi[si]] = !0;
  var P = function (a) {
    tf.call(this, a)
  };
  w(P, tf);
  n("studio.events.StudioEvent", P, void 0);
  P.INIT = "init";
  P.VISIBLE = "visible";
  P.HIDDEN = "hidden";
  P.VISIBILITY_CHANGE = "visibilityChange";
  P.VISIBILITY_CHANGE_WITH_INFO = "visibilityChangeWithInfo";
  P.EXIT = "exit";
  P.INTERACTION = "interaction";
  P.PAGE_LOADED = "pageLoaded";
  P.ORIENTATION = "orientation";
  P.ABOUT_TO_EXPAND = "aboutToExpand";
  P.EXPAND_START = "expandStart";
  P.EXPAND_FAILED = "expandFailed";
  P.EXPAND_FINISH = "expandFinish";
  P.COLLAPSE_START = "collapseStart";
  P.COLLAPSE_FINISH = "collapseFinish";
  P.COLLAPSE = "collapse";
  P.FULLSCREEN_SUPPORT = "fullscreenSupport";
  P.HOSTPAGE_FEATURES_LOADED = "hostpageFeaturesLoaded";
  P.FULLSCREEN_DIMENSIONS = "fullscreenDimensions";
  P.FULLSCREEN_EXPAND_START = "fullscreenExpandStart";
  P.FULLSCREEN_EXPAND_FINISH = "fullscreenExpandFinish";
  P.FULLSCREEN_COLLAPSE_START = "fullscreenCollapseStart";
  P.FULLSCREEN_COLLAPSE_FINISH = "fullscreenCollapseFinish";
  P.HOSTPAGE_SCROLL = "hostpageScroll";
  P.OPTIONAL_HOSTPAGE_SCROLL = "optHostpageScroll";
  P.SCROLL_INTERACTION = "scrollInteraction";
  P.ENTER_VIEWPORT = "enterViewport";
  P.OPTIONAL_ENTER_VIEWPORT = "optEnterViewport";
  P.EXIT_VIEWPORT = "exitViewport";
  P.OPTIONAL_EXIT_VIEWPORT = "optExitViewport";
  P.VIDEO_START = "videoStart";
  P.prototype.ea = function (a, b) {
    this[a] = b;
    return this
  };
  P.prototype.addProperty = P.prototype.ea;
  var ti = {},
    ui = (ti.optHostpageScroll = "hostpageScroll", ti.optEnterViewport = "enterViewport", ti.optExitViewport = "exitViewport", ti);
  var vi = function (a) {
    this.a = a
  };
  n("studio.common.mde.Direction", vi, void 0);
  vi.Corner = {
    jg: 0,
    kg: 1,
    Ef: 2,
    Ff: 3
  };
  vi.prototype.toString = function () {
    return (this.a & 2 ? "b" : "t") + (this.a & 1 ? "r" : "l")
  };
  var wi = {
      TL: new vi(0),
      TR: new vi(1),
      BL: new vi(2),
      BR: new vi(3)
    },
    xi = Ob(wi);
  var yi = {
      hg: "startExpandInternal",
      gg: "startCollapseInternal",
      Rf: "finishCollapseInternal",
      Cf: "aboutToExpandInternal",
      dg: "setAdVisibleInternal",
      eg: "setAdParameters",
      Lf: "dispatchEvent",
      fg: "setParameter",
      Yf: "getParameter",
      Xf: "fullscreenSupportInternal",
      Uf: "fullscreenDimensionsInternal",
      Wf: "fullscreenExpandStartInternal",
      Vf: "fullscreenExpandFinishInternal",
      Tf: "fullscreenCollapseStartInternal",
      Sf: "fullscreenCollapseFinishInternal",
      $f: "invokeOnAllVideos",
      ag: "livePreviewChannel",
      Mf: "dispatchPageLoaded"
    },
    zi = {},
    Ai;
  for (Ai in yi) zi[yi[Ai]] = !0;
  var Bi = [/s0(qa)?\.2mdn\.net/, /^.*\.(prod|corp)\.google\.com/, /localhost/, /tpc\.googlesyndication\.com/, /secureframe\.doubleclick\.net/, /imasdk\.googleapis\.com/, /^.*dot-expandable-ad-tool\.appspot\.com/],
    Ci = function () {
      var a = location.hostname;
      return x(2) && !x(16) ? !1 : gb(Bi, function (b) {
        return b.test(a)
      })
    };
  var Di = function (a) {
    J.call(this);
    this.b = a;
    this.a = {};
    this.b.Tc(v(this.g, this))
  };
  w(Di, J);
  Di.prototype.f = C("goog.messaging.MultiChannel");
  var Fi = function (a, b) {
    if (-1 != b.indexOf(":")) throw Error('Virtual channel name "' + b + '" should not contain colons');
    if (b in a.a) throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
    var c = new Ei(a, b);
    return a.a[b] = c
  };
  Di.prototype.g = function (a, b) {
    var c = a.match(/^([^:]*):(.*)/);
    if (c) {
      var d = c[1];
      a = c[2];
      d in this.a ? (c = this.a[d]) ? c.b ? c.b(a, b) : D(this.f, 'Service "' + a + '" is not registered on virtual channel "' + d + '"') : D(this.f, 'Virtual channel "' + d + ' has been disposed, but a message was received for it: "' + a + '"') : D(this.f, 'Virtual channel "' + d + ' does not exist, but a message was received for it: "' + a + '"')
    } else D(this.f, 'Invalid service name "' + a + '": no virtual channel specified')
  };
  Di.prototype.v = function () {
    Lb(this.a, function (a) {
      qf(a)
    });
    qf(this.b);
    delete this.a;
    delete this.b
  };
  var Ei = function (a, b) {
    J.call(this);
    this.G = a;
    this.a = b
  };
  w(Ei, J);
  g = Ei.prototype;
  g.$d = C("goog.messaging.MultiChannel.VirtualChannel");
  g.connect = function (a) {
    a && a()
  };
  g.isConnected = function () {
    return !0
  };
  g.Wa = function (a, b, c) {
    this.G.b.Wa(this.a + ":" + a, v(this.lc, this, b), c)
  };
  g.Tc = function (a) {
    this.b = v(this.lc, this, a)
  };
  g.Xa = function (a, b) {
    if (this.s) throw Error("#send called for disposed VirtualChannel.");
    this.G.b.Xa(this.a + ":" + a, b)
  };
  g.lc = function (a, b) {
    this.s ? D(this.$d, 'Virtual channel "' + this.a + '" received  a message after being disposed.') : a.apply({}, Array.prototype.slice.call(arguments, 1))
  };
  g.v = function () {
    this.G = this.G.a[this.a] = null
  };
  var Gi = function (a) {
    J.call(this);
    this.b = new Di(a);
    this.h = {};
    this.f = Fi(this.b, "private");
    this.g = Fi(this.b, "public");
    this.f.Wa("mics", v(this.F, this), !0)
  };
  w(Gi, J);
  Gi.prototype.U = 0;
  Gi.prototype.H = C("goog.messaging.RespondingChannel");
  Gi.prototype.v = function () {
    qf(this.b);
    delete this.b;
    delete this.g;
    delete this.f
  };
  var Hi = function (a, b, c, d) {
    var e = a.U++;
    a.h[e] = d;
    d = {};
    d.signature = e;
    d.data = c;
    a.g.Xa(b, d)
  };
  Gi.prototype.F = function (a) {
    var b = a.signature;
    a = a.data;
    b in this.h ? ((0, this.h[b])(a), delete this.h[b]) : D(this.H, "Received signature is invalid")
  };
  Gi.prototype.o = function (a, b) {
    a = a(b.data);
    var c = b.signature;
    De(a).then(v(function (d) {
      var e = {};
      e.data = d;
      e.signature = c;
      this.f && this.f.Xa("mics", e)
    }, this))
  };
  var Ii = function (a, b) {
    this.a = this.j = this.A = null;
    this.B = !1;
    var c = {},
      d = 1,
      e = window.parent;
    if (null != b) switch (b) {
      case 3:
        e = window;
      case 2:
        d = 3;
        c.directSyncMode = !0;
        break;
      case 4:
        e = window.parent.frames["goog-messaging-iframe"]
    }
    c.tp = d;
    c.role = 1;
    c.nativeProtocolVersion = 2;
    a && (c.cn = a);
    C("goog.net.xpc").b(Od);
    this.l = new mi(c);
    this.l.da = e;
    Gi.call(this, this.l);
    a = v(this.J, this);
    this.g.Wa("general", v(this.o, this, a), !0)
  };
  w(Ii, Gi);
  Ii.prototype.connect = function (a) {
    this.B || Ci() ? this.j ? (this.A = La(), this.l.connect(v(this.W, this, a))) : ee(G, "You must call setAssetUrl before connecting.") : fe(G, "This class should only listen to messages when served by the rendering libraries.")
  };
  Ii.prototype.W = function (a) {
    Q(this, "conduitInitialized", [this.j, Vg.O()]);
    var b = {
      version: "01_243"
    };
    b.x = window.STUDIO_SDK_START || null;
    b.c = this.A;
    b.t = La();
    Q(this, "recordTimings", [b]);
    a && a()
  };
  Ii.prototype.J = function (a) {
    a: {
      var b = a.methodName;a = a.args;
      if (b in zi) {
        if (this.a) {
          fe(G, ["Invoking method: ", b, " with args: ", a.join(", ")].join(""));
          var c = this.a[b];
          t(c) || (c = this.a.defaultMessageHandler, a = [b, a]);
          if (t(c)) {
            b = c.apply(this.a, a);
            break a
          }
        }
        b = null
      } else b = void 0
    }
    return b
  };
  var Q = function (a, b, c, d) {
    var e = {};
    e.methodName = b;
    e.args = c && r(c) ? c : [];
    Hi(a, "general", e, d || za)
  };
  n("studio.sdk.ContainerState", {
    COLLAPSING: "collapsing",
    COLLAPSED: "collapsed",
    EXPANDING: "expanding",
    EXPANDED: "expanded",
    FS_COLLAPSING: "fs_collapsing",
    FS_EXPANDING: "fs_expanding",
    FS_EXPANDED: "fs_expanded"
  }, void 0);
  var Ji = function () {
    L.call(this);
    this.a = new Map;
    this.g = this.j = !1;
    this.b = this.h = null;
    this.a.set("nx", null);
    this.a.set("ny", null);
    this.a.set("dim", null)
  };
  ka(Ji, L);
  Ji.prototype.o = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return 2040 > b.reduce(function (d, e) {
      return d + e.length
    }, 0)
  };
  Ji.prototype.A = function (a) {
    var b = a.clientX,
      c = a.clientY;
    a.changedTouches && a.changedTouches[0] && (b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY);
    this.a.set("nx", Math.round(b));
    this.a.set("ny", Math.round(c));
    this.g && (this.b || (this.b = window.GoogleA13IjpGc), this.h = this.b && t(this.b.snapshotSync) ? this.b.snapshotSync() : null)
  };
  Ji.prototype.v = function () {
    this.j = !1;
    L.prototype.v.call(this)
  };
  var Ki = {
    NONE: 0,
    LOG_ONLY: 1
  };
  n("studio.sdk.ExitFlag", Ki, void 0);
  Ki.NONE = 0;
  Ki.LOG_ONLY = 1;
  var Li = {
    GET_CURRENT_POSITION: "getCurrentPosition",
    GET_DEFAULT_POSITION: "getDefaultPosition",
    GET_SCREEN_SIZE: "getScreenSize",
    CREATE_CALENDAR_EVENT: "createCalendarEvent",
    GET_MAX_SIZE: "getMaxSize",
    PLAY_VIDEO: "playVideo",
    STORE_PICTURE: "storePicture",
    SUPPORTS: "supports",
    USE_CUSTOM_CLOSE: "useCustomClose"
  };
  n("studio.sdk.MraidMethod", Li, void 0);
  var Mi = function () {};
  n("studio.sdk.IEnabler", Mi, void 0);
  g = Mi.prototype;
  g.Yc = function () {};
  g.reportManualClose = function () {};
  g.Uc = function () {};
  g.$c = function () {};
  g.Zc = function () {};
  g.isVisible = function () {};
  g.sa = function () {};
  g.isPageLoaded = function () {};
  g.isInitialized = function () {};
  g.ec = function () {};
  g.getParameter = function () {};
  g.exit = function () {};
  g.Fb = function () {};
  g.qc = function () {};
  g.Ta = function () {};
  g.startTimer = function () {};
  g.stopTimer = function () {};
  g.sc = function () {};
  g.vc = function () {};
  g.rb = function () {};
  g.Jb = function () {};
  g.Qa = function () {};
  g.Ib = function () {};
  g.close = function () {};
  g.Ua = function () {};
  g.Za = function () {};
  g.addEventListener = function () {};
  g.removeEventListener = function () {};
  g.Sc = function () {};
  g.Rc = function () {};
  g.Vc = function () {};
  g.pc = function () {};
  g.Ob = function () {};
  g.oc = function () {};
  g.xc = function () {};
  g.Jc = function () {};
  var Ni = function (a, b) {
      return "The " + (a + (" method has been deprecated. As an alternative please use: " + (b + ".")))
    },
    Oi = function (a, b) {
      return 'Video "' + (a + ('" dispatching "' + (b + '" event.')))
    },
    Pi = function (a, b) {
      return 'Custom event "' + (a + ('" of type "' + (b + '" invoked.')))
    };
  var Qi = function (a) {
      this.a = a;
      this.b = ""
    },
    Ri = /:/,
    Si = /%(.+)!/,
    Ti = function (a, b, c) {
      for (var d = c.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (1 < f.length && f[0].length && f[1].length) {
          var k = decodeURIComponent(f[0]);
          f = decodeURIComponent(f[1]);
          a.a.set(k, f)
        }
      }
      if (null != a.a && a.a.V("exitEvents")) {
        d = {};
        e = a.a.get("exitEvents").toString();
        k = e.split("{DELIM}");
        for (f = 0; f < k.length; f++) {
          var l = k[f];
          Fb(e, "%2C") && (l = unescape(l));
          var m = {};
          l = l.split(",");
          for (var p = 0; p < l.length; p++)
            if (Ri.test(l[p])) {
              l[p].replace(Si, "%25$1!");
              var q = l[p].split(":"),
                F = q.shift();
              m[F] = unescape(q.join(":"))
            } d[m.name] = m
        }
        b.exitEvents = d
      }
      a.b = c
    };
  Qi.prototype.get = function (a, b) {
    return this.a.get(a, b)
  };
  Qi.prototype.set = function (a, b) {
    return this.a.set(a, b)
  };
  Qi.prototype.V = function (a) {
    return this.a.V(a)
  };
  var Ui = function (a) {
      this.a = {};
      this.b = new Qi(a)
    },
    Vi = function (a, b, c, d) {
      var e = c;
      "Number" == d ? e = parseInt(c, 10) : "Boolean" == d && (e = "true" == c.toLowerCase() || "1" == c);
      a.a[b] = e
    },
    Wi = function (a, b) {
      try {
        var c = JSON.parse(b);
        null != c && Wb(a.a, c);
        var d = {};
        Lb(a.a, function (e, f) {
          e && !u(e) && (f = decodeURIComponent(f), e = decodeURIComponent(e));
          f && e && (d[f] = e)
        }, a);
        a.a = d
      } catch (e) {
        Ti(a.b, a.a, b)
      }
    };
  Ui.prototype.getParameter = function (a, b) {
    return Qb(this.a, a) ? Sb(this.a, a) : this.b.get(a, b)
  };
  Ui.prototype.T = function (a) {
    a = parseInt(this.getParameter(a), 10);
    return isNaN(a) ? null : a
  };
  Ui.prototype.fa = function (a) {
    a = this.getParameter(a);
    return wb(Sc(a)) ? null : a.toString()
  };
  var Xi = function () {
      this.b = !1;
      this.a = []
    },
    Yi = function (a, b, c) {
      a.f ? Q(a.f, b, c) : a.a.push({
        type: b,
        pd: c
      })
    },
    Zi = function (a, b, c, d, e, f) {
      Yi(a, f ? "logEventFlushCounters" : "logEvent", [b, c, a.g, !!d, !!e])
    },
    aj = function (a) {
      a.b || (Zi(a, "Count", "INTERACTIVE_IMPRESSION"), a.b = !0, $i(a))
    },
    $i = function (a) {
      Yi(a, "flushCounters", [a.g])
    },
    bj = function (a, b, c, d) {
      Yi(a, "logVideoEvent", [b, escape(c), d])
    };
  var cj = function (a) {
    L.call(this);
    this.A = a;
    this.a = this.g = null;
    this.F = !1;
    this.b = null;
    this.h = !1;
    this.j = -1;
    this.o = 0
  };
  ka(cj, L);
  cj.prototype.Kb = function () {
    return this.F
  };
  cj.prototype.J = function () {
    this.o = 1;
    this.a && (this.a.stop(), this.a.start())
  };
  cj.prototype.H = function () {
    this.o = 0;
    this.a && this.a.stop()
  };
  cj.prototype.B = function () {
    "1" == this.A.getParameter("isMouseOver") || 1 == this.o ? this.h || (this.F = !0, 1 > this.j ? this.j = La() : 1E3 < La() - this.j && (this.h = !0, this.A.dispatchEvent(new P("interaction")), dj(this.A, "setTimerAdjustment", ["INTERACTION_TIMER", -1E3, 0]), this.g && (Zi(this.g, "Start", "INTERACTION_TIMER"), aj(this.g)))) : (this.h && ej(this), this.j = -1)
  };
  var ej = function (a) {
    a.h = !1;
    a.g && Zi(a.g, "Stop", "INTERACTION_TIMER")
  };
  cj.prototype.v = function () {
    this.h && ej(this);
    sf(this.b, this.a);
    L.prototype.v.call(this)
  };
  var fj = function () {
      return new Uh((window.STUDIO_ORIGINAL_ASSET_URL ? window.STUDIO_ORIGINAL_ASSET_URL : window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g, "%25"))
    },
    gj = function (a) {
      a && Qa(parseInt(a, 10) || 0)
    };
  var hj = function (a) {
    this.a = a
  };
  hj.prototype.f = function (a) {
    return (null === this.a || this.a.canPlayType) && vb(a, "video/")
  };
  hj.prototype.b = function (a) {
    return this.a ? "probably" == this.a.canPlayType(a.toLowerCase()) : !1
  };
  var ij = function (a) {
    this.a = a
  };
  ij.prototype.f = function (a) {
    return "image/webp" == a.toLowerCase()
  };
  ij.prototype.b = function (a) {
    if (!this.a) return !1;
    a = a.toLowerCase();
    return vb(this.a.toDataURL(a), "data:" + a)
  };
  var kj = function (a, b, c) {
      if ("string" === typeof b)(b = jj(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d],
            f = jj(c, d);
          f && (c.style[f] = e)
        }
    },
    lj = {},
    jj = function (a, b) {
      var c = lj[b];
      if (!c) {
        var d = Vc(b);
        c = d;
        void 0 === a.style[d] && (d = (gd ? "Webkit" : fd ? "Moz" : cd ? "ms" : bd ? "O" : null) + Wc(d), void 0 !== a.style[d] && (c = d));
        lj[b] = c
      }
      return c
    },
    mj = function (a) {
      "number" == typeof a && (a = Math.round(a) + "px");
      return a
    },
    nj = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = gd && !b && !c;
      if ((void 0 === b || d) && a.getBoundingClientRect) {
        a: {
          try {
            var e =
              a.getBoundingClientRect()
          } catch (f) {
            e = {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            };
            break a
          }
          cd && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop)
        }
        return new qd(e.right - e.left, e.bottom - e.top)
      }
      return new qd(b, c)
    },
    pj = function (a) {
      var b = td(void 0),
        c = b.a;
      if (cd && c.createStyleSheet) return b = c.createStyleSheet(), oj(b, a), b;
      c = Gd(b, "HEAD")[0];
      if (!c) {
        var d = Gd(b, "BODY")[0];
        c = b.b("HEAD");
        d.parentNode.insertBefore(c, d)
      }
      d = b.b("STYLE");
      oj(d, a);
      b.f(c, d);
      return d
    },
    qj = function (a) {
      Ed(a.ownerNode || a.owningElement || a)
    },
    oj = function (a, b) {
      b instanceof Fc && b.constructor === Fc && b.b === Ec ? b = b.a : (Xa("expected object of type SafeStyleSheet, got '" + b + "' of type " + Ca(b)), b = "type_error:SafeStyleSheet");
      cd && void 0 !== a.cssText ? a.cssText = b : a.innerHTML = b
    },
    rj = function (a) {
      a = a.style;
      a.position = "relative";
      cd && !nd("8") ? (a.zoom = "1", a.display = "inline") : a.display = "inline-block"
    };
  var sj = function (a) {
    Jg(this, a)
  };
  w(sj, Hg);
  var tj = function () {
      this.a = La()
    },
    uj = null;
  tj.prototype.set = function (a) {
    this.a = a
  };
  tj.prototype.reset = function () {
    this.set(La())
  };
  tj.prototype.get = function () {
    return this.a
  };
  var vj = function (a) {
    this.g = a || "";
    uj || (uj = new tj);
    this.s = uj
  };
  vj.prototype.a = !0;
  vj.prototype.b = !0;
  vj.prototype.f = !1;
  var wj = function (a) {
      return 10 > a ? "0" + a : String(a)
    },
    xj = function (a, b) {
      a = (a.f - b) / 1E3;
      b = a.toFixed(3);
      var c = 0;
      if (1 > a) c = 2;
      else
        for (; 100 > a;) c++, a *= 10;
      for (; 0 < c--;) b = " " + b;
      return b
    },
    yj = function (a) {
      vj.call(this, a)
    };
  w(yj, vj);
  var zj = function (a, b) {
    var c = [];
    c.push(a.g, " ");
    if (a.b) {
      var d = new Date(b.f);
      c.push("[", wj(d.getFullYear() - 2E3) + wj(d.getMonth() + 1) + wj(d.getDate()) + " " + wj(d.getHours()) + ":" + wj(d.getMinutes()) + ":" + wj(d.getSeconds()) + "." + wj(Math.floor(d.getMilliseconds() / 10)), "] ")
    }
    c.push("[", xj(b, a.s.get()), "s] ");
    c.push("[", b.b, "] ");
    c.push(b.s);
    a.f && (b = b.a) && c.push("\n", b instanceof Error ? b.message : b.toString());
    a.a && c.push("\n");
    return c.join("")
  };
  var Aj = function () {
      this.s = v(this.f, this);
      this.a = new yj;
      this.a.b = !1;
      this.a.f = !1;
      this.b = this.a.a = !1;
      this.g = {}
    },
    Cj = function () {
      var a = Bj;
      if (1 != a.b) {
        var b = de(),
          c = a.s;
        b.a || (b.a = []);
        b.a.push(c);
        a.b = !0
      }
    };
  Aj.prototype.f = function (a) {
    function b(f) {
      if (f) {
        if (f.value >= Qd.value) return "error";
        if (f.value >= Rd.value) return "warn";
        if (f.value >= Td.value) return "log"
      }
      return "debug"
    }
    if (!this.g[a.b]) {
      var c = zj(this.a, a),
        d = Dj;
      if (d) {
        var e = b(a.g);
        Ej(d, e, c, a.a)
      }
    }
  };
  var Bj = null,
    Dj = h.console,
    Fj = function () {
      Bj || (Bj = new Aj);
      h.location && -1 != h.location.href.indexOf("Debug=true") && Cj()
    },
    Ej = function (a, b, c, d) {
      if (a[b]) a[b](c, d || "");
      else a.log(c, d || "")
    };
  var R = function (a) {
    window.AdobeEdge = window.AdobeEdge || {};
    window.AdobeEdge.bootstrapLoading = !0;
    h.console && (Fj(), Cj());
    E(G, "");
    if (a != Gj) return ee(G, "You must access the enabler instance using studio.Enabler.getInstance(); or Enabler and not create a duplicate instance."), !1;
    K.call(this);
    this.A = {};
    this.j = {};
    this.H = new Xg(Yg(), Zg() ? window.orientation : 0);
    this.W = new L(this);
    this.fb = !1;
    this.B = null;
    this.f = "collapsed";
    this.xb = !1;
    this.oa = null;
    this.He = 0;
    this.cb = {};
    this.ja = null;
    this.wb = !1;
    this.J = new H;
    this.h =
      null;
    this.vb = [];
    this.bb = {};
    this.zb = [];
    this.b = new Xi;
    this.U = new cj(this);
    a = B("CANVAS");
    a.getContext && a.getContext("2d") || (a = null);
    this.Af = new ij(a);
    (a = B("VIDEO")) || (a = null);
    this.Ec = new hj(a);
    this.a = new Ui(Hj(this));
    a = this.Ia = new Ji;
    a.j = !0;
    M(a, document.body || window, "mousedown", a.A, {
      capture: !0,
      passive: !0
    });
    M(a, document.body || window, "touchstart", a.A, {
      capture: !0,
      passive: !0
    });
    this.Yb = {}
  };
  w(R, K);
  n("studio.Enabler", R, void 0);
  var Ij = ["c"],
    Gj = Math.random(),
    Jj = !1,
    Kj = null,
    S = function () {
      Kj || (Kj = new R(Gj));
      return Kj
    };
  R.getInstance = S;
  g = R.prototype;
  g.Qc = -1;
  g.Bb = null;
  g.cd = null;
  g.Vb = null;
  g.bd = !0;
  g.Rb = !1;
  g.Ja = !1;
  g.Oc = !1;
  g.dd = !1;
  g.Ba = null;
  g.Sb = null;
  g.pa = null;
  g.I = null;
  var Lj = function (a) {
      a.Vb || (a.Vb = fj());
      return a.Vb
    },
    Hj = function (a) {
      var b = Lj(a).f;
      (a = bh(Lj(a).toString())) && dh(a, function (c, d) {
        -1 < Ij.indexOf(c) && b.set(c, d)
      });
      return b
    },
    dj = function (a, b, c) {
      Q(a.I, b, c, void 0)
    },
    Pj = function (a) {
      a.Rb = !0;
      a.Sb = a.uc();
      a.pa = a.tc();
      if (a.I) {
        var b = a.b,
          c = a.Sb;
        b.f = a.I;
        b.g = c;
        for (c = ob(b.a); c.length;) {
          var d = c.shift();
          Yi(b, d.type, d.pd)
        }
      }
      null == a.a.getParameter("clickN") && Vi(a.a, "clickN", 1);
      a.bd = "true" != a.a.getParameter("ise");
      b = a.a.getParameter("e", null);
      null != b && gj(b);
      b = a.T("leftOffset") ||
        0;
      c = a.T("topOffset") || 0;
      0 == b && 0 == c || Mj(a, b, c);
      a.j = a.a.getParameter("exitEvents", {});
      b = a.a;
      if (Qb(b.a, "assets") || b.b.V("assets")) b = a.a.getParameter("assets").toString(), Nj(a, b);
      Wg(a.a.getParameter("features", []));
      a.U.g = a.b;
      b = a.U;
      x(2) && (M(b, document.body || window, "mouseover", b.J, void 0), M(b, document.body || window, "mouseout", b.H, void 0));
      void 0 !== window.ontouchstart && (b.a = new eg(1E3), M(b, b.a, "tick", b.H, void 0), M(b, document, ["touchstart", "touchmove"], b.J, void 0));
      b.b && (oh(b, b.b, "tick", b.B), b.b.dispose());
      b.b = new eg(80);
      M(b, b.b, "tick", b.B, void 0);
      b.b.start();
      Oj(a);
      if (b = a.getParameter("layoutsConfig")) a.cd = JSON.parse(String(b));
      if (b = a.getParameter("experiments")) a.Yb = JSON.parse(String(b));
      if (b = a.getParameter("rum_config")) try {
        var e = JSON.parse(String(b));
        b = window;
        if (!b.google_rum_config && e) {
          var f = new sj(e),
            k, l = Lg(f, 2);
          if (k = null == l ? "" : l) {
            var m = Mg(f, Qg);
            if (m) {
              var p = Mg(m, Pg);
              if (p) {
                b.google_timing_url = k;
                cb(p, Hg);
                cb(p, Hg);
                if (2 < p.s) p.a[2 + p.g] = 3;
                else {
                  var q = p.s + p.g;
                  p.a[q] || (p.f = p.a[q] = {});
                  p.f[2] = 3
                }
                b.google_rum_config =
                  Ng(m);
                var F = Lg(f, 3);
                var O = null == F ? F : !!F;
                b.google_measure_js_timing = null == O ? !1 : O;
                var aa = b.document,
                  ib = aa.createElement("script");
                Oc(ib, lf(k));
                var Ha = aa.getElementsByTagName("script")[0];
                if (Ha && Ha.parentNode) {
                  Ha.parentNode.insertBefore(ib, Ha);
                  var bm = ib
                } else bm = null;
                bm || (b.google_timing_url = void 0, b.google_rum_config = void 0, b.google_measure_js_timing = void 0)
              }
            }
          }
        }
      } catch (qq) {}
      a.dispatchEvent(new P("init"));
      a.J.a || a.J.K();
      e = a.Ia;
      e.g = !!a.Yb.append_sodar_interaction_signals;
      if (e.g) try {
        yg()
      } catch (qq) {}
    };
  R.prototype.bf = function (a) {
    "number" === typeof a ? (this.Qc = a, E(G, "enabler.setProfileId set to: " + a)) : E(G, "enabler.setProfileId invalid profile id value: " + a)
  };
  R.prototype.setProfileId = R.prototype.bf;
  R.prototype.Td = function () {
    return this.Qc
  };
  R.prototype.getProfileId = R.prototype.Td;
  R.prototype.Ze = function (a) {
    u(a) ? (this.Bb = a, this.isInitialized() && Oj(this)) : E(G, "enabler.setDevDynamicContent invalid dcData value: " + a)
  };
  R.prototype.setDevDynamicContent = R.prototype.Ze;
  var Oj = function (a) {
    if (null != a.fa("dcData") || a.Bb) window.dynamicContent = null != a.fa("dcData") ? a.kb() : a.Bb
  };
  R.prototype.kb = function () {
    var a = this.getParameter("dcData");
    return a ? JSON.parse(String(a)) : null
  };
  R.prototype.getDynamicDataPayload = R.prototype.kb;
  R.prototype.ua = function () {
    return this.cd
  };
  R.prototype.getLayoutsConfig = R.prototype.ua;
  R.prototype.Oe = function () {
    return this.a.b.b || Nh(this.a)
  };
  R.prototype.getAdParameters = R.prototype.Oe;
  R.prototype.sf = function (a) {
    Wi(this.a, a);
    this.Ba && Xf(this.Ba);
    Pj(this);
    E(G, "Asset properties have been set by host.")
  };
  R.prototype.setAdParameters = R.prototype.sf;
  R.prototype.De = function () {
    this.Ba && Xf(this.Ba);
    E(G, "Using default ad parameters in test environment. Simulating local events.");
    Pj(this)
  };
  R.setRushSimulatedLocalEvents = function (a) {
    Jj = !!a;
    if (a && Kj) {
      a = Kj;
      for (var b = 0; b < a.vb.length; ++b) a.dispatchEvent(a.vb[b])
    }
  };
  var Qj = function (a, b, c) {
    var d = T;
    c = null != c ? c : 0;
    d.vb.push(b);
    fg(function () {
      this.dispatchEvent(b)
    }, c, d);
    return Of(d, b, a, !1, d)
  };
  R.prototype.hc = function () {
    var a = Yg(),
      b = this.H.a;
    if (this.H.b != a || Zg() && this.H.a != window.orientation) {
      Zg() && (b = window.orientation);
      var c = new P("orientation");
      c.ea("mode", a);
      c.ea("degrees", b);
      this.dispatchEvent(c)
    }
  };
  R.prototype.l = function (a, b, c) {
    if (!this.sa()) {
      var d = v.apply(this, [a, this].concat(Array.prototype.slice.call(arguments, 2)));
      fg(d, b)
    }
  };
  var Nj = function (a, b) {
    0 < b.length && -1 == b.indexOf("=") && (b = decodeURIComponent(b));
    b = b.split("&");
    if (!(2 >= b.length && "" == b[0]))
      for (var c = 0; c < b.length; c++) {
        var d = b[c].split("=");
        a.A[d[0].toLowerCase()] = unescape(d[1])
      }
  };
  R.prototype.o = function () {
    $i(this.b)
  };
  R.prototype.reportActivitiesImmediately = R.prototype.o;
  var Rj = function (a) {
      a.b && aj(a.b)
    },
    Sj = function (a, b) {
      var c = a.a.getParameter("click", ""),
        d = parseInt(a.a.getParameter("clickN"), 10);
      a = a.a.getParameter("thirdPartyClickRedirect", "");
      a: {
        var e = c;c = b;
        if (!wb(Sc(e))) {
          e = ih(e, null);
          if (!vb(b, e)) break a;
          c = Rc(c, e.length)
        }
        a && (c = decodeURIComponent(c), vb(c, a) && (c = Rc(c, a.length)));
        if (!wb(Sc(e)) && -1 < e.indexOf("?"))
          for (b = "number" === typeof d ? d : 1, d = 0; d < b; d++) c = unescape(c);b = c
      }
      return b
    },
    Tj = function (a, b, c, d) {
      var e = {};
      e.target = c;
      Eg && (e.fullscreen = !0);
      (c = e) || (c = {});
      e = window;
      var f = b instanceof oc ? b : rc("undefined" != typeof b.href ? b.href : String(b));
      b = c.target || b.target;
      var k = [];
      for (l in c) switch (l) {
        case "width":
        case "height":
        case "top":
        case "left":
          k.push(l + "=" + c[l]);
          break;
        case "target":
        case "noopener":
        case "noreferrer":
          break;
        default:
          k.push(l + "=" + (c[l] ? 1 : 0))
      }
      var l = k.join(",");
      if (Yc() && e.navigator && e.navigator.standalone && b && "_self" != b) l = zd(document, "A"), Zb(l, "HTMLAnchorElement"), f instanceof oc || f instanceof oc || (f = "object" == typeof f && f.ya ? f.va() : String(f), y(qc.test(f), "%s does not match the safe URL pattern",
        f) || (f = "about:invalid#zClosurez"), f = new oc(mc, f)), l.href = pc(f), l.setAttribute("target", b), c.noreferrer && l.setAttribute("rel", "noreferrer"), c = document.createEvent("MouseEvent"), c.initMouseEvent("click", !0, !0, e, 1), l.dispatchEvent(c);
      else if (c.noreferrer) {
        if (e = e.open("", b, l), f = pc(f), e && (ed && Fb(f, ";") && (f = "'" + f.replace(/'/g, "%27") + "'"), e.opener = null, c = new cc(ac, "b/12014412, meta tag with sanitized URL"), f = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Qc(f) +
            '">', Za(dc(c), "must provide justification"), y(!wb(dc(c)), "must provide non-empty justification"), c = Lc(f), e = e.document)) e.write(Kc(c)), e.close()
      } else(e = e.open(pc(f), b, l)) && c.noopener && (e.opener = null);
      d && a.o()
    },
    Uj = function (a, b, c, d, e) {
      Q(a.I, e ? "logExitFlushEventsOpenPopup" : "launchExit", ["Count", b, a.Sb, !1, c, null, d])
    },
    Wj = function (a, b, c, d, e) {
      if (wb(Sc(b))) E(G, "There was a problem with the exit call.");
      else if (a.isInitialized()) {
        var f = void 0 !== d ? d : 0;
        d = a.j[b] && a.j[b].target || "_blank";
        var k;
        if (k = !x(8)) k = !(Fb(a.a.getParameter("click",
          ""), "[rm_exit_id]") && null != a.j[b] && null != a.j[b].reportingId && !wb(a.j[b].reportingId));
        f = !(f & 1);
        var l = a.a.getParameter("click", ""),
          m = a.Ia;
        if (m.j) {
          var p = l;
          var q = wd();
          m.a.set("dim", q.width + "x" + q.height);
          q = "";
          for (var F = ca(m.a), O = F.next(); !O.done; O = F.next()) {
            var aa = ca(O.value);
            O = aa.next().value;
            aa = aa.next().value;
            q = null == aa ? q + "&" + O + "=" : q + "&" + O + "=" + aa
          }
          m.g && (F = "bg=", "string" === typeof m.h && m.o(p, q, F, m.h) && (F = "" + F + m.h), q = q + "&" + F);
          p = q;
          q = l.toLowerCase().indexOf("&adurl="); - 1 < q && m.o(l, p) && (l = l.substr(0, q) + p +
            l.substr(q))
        }
        if (e && e.pIndex) {
          m = l;
          if (e = e.pIndex) l = m.toLowerCase().indexOf("&adurl="), -1 < l && (m = m.substr(0, l) + "&gpa_pos=" + e + m.substr(l));
          l = m
        }
        f && (a.j[b] ? x(8) ? Uj(a, b, c, l, !0) : (e = jh(c), e = Vj(a, e, l, b), Tj(a, e, d, !k)) : c && (a.sa() && x(8) ? Uj(a, b, c, l, !1) : (e = jh(c), e = Vj(a, e, l, null), Tj(a, e, d, !0), k = !1)));
        k && Zi(a.b, "Count", b, !0, !0, !0);
        Q(a.I, "AD_CLICKED");
        d = new P("exit");
        d.ea("id", b);
        d.ea("url", c);
        a.dispatchEvent(d);
        E(G, 'Exit "' + (b + '" invoked.'))
      }
    },
    Xj = function (a, b, c, d, e) {
      a = a.j[b];
      c = !d && a && a.url ? a.url : c;
      var f;
      null == e || wb(Sc(e)) ?
        f = c : f = eh(c, e + "");
      return f
    },
    Vj = function (a, b, c, d) {
      var e = null;
      d && (e = a.j[d], e = null != e.reportingId ? e.reportingId : null);
      b = b || "";
      d = a.a.getParameter("thirdPartyClickRedirect", "");
      a = parseInt(a.a.getParameter("clickN"), 10);
      if (!wb(Sc(c)) && -1 < c.indexOf("?")) {
        a = "number" === typeof a ? a : 1;
        for (var f = 0; f < a; f++) b = encodeURIComponent(b)
      }
      e && (c = ih(c, e), b = d ? encodeURIComponent(d + b) : b);
      return c + b
    };
  R.prototype.reportManualClose = function () {
    E(G, "Ad was closed by user action.");
    Zi(this.b, "Count", "EVENT_MANUAL_CLOSE", void 0, void 0, void 0)
  };
  R.prototype.reportManualClose = R.prototype.reportManualClose;
  R.prototype.Uc = function () {
    Zi(this.b, "Count", "ENGAGEMENT", !1, !1, !1);
    this.o()
  };
  R.prototype.reportEngagement = R.prototype.Uc;
  var Yj = function (a, b, c) {
      var d = b;
      100 < d.length && (d = d.substr(0, 100));
      Q(a.I, "reportCustomVariable", [escape(d), c]);
      E(G, 'Custom string "' + (b + '" recorded.'))
    },
    Mj = function (a, b, c) {
      a.sa() && !x(8) && (a.ja && qj(a.ja), a.ja = pj(Hc("body", {
        position: "relative",
        "margin-left": -b + "px !important",
        "margin-top": -c + "px !important"
      })))
    };
  R.prototype.xf = function (a, b, c) {
    Vi(this.a, a, b, c)
  };
  R.prototype.setParameter = R.prototype.xf;
  R.prototype.Xb = function () {
    this.dispatchEvent(new P("pageLoaded"))
  };
  R.prototype.dispatchPageLoaded = R.prototype.Xb;
  R.prototype.dispatchEvent = function (a) {
    this.bb[a.type] = (this.bb[a.type] || 0) + 1;
    switch (a.type) {
      case "pageLoaded":
        null != window.AdobeEdge && t(window.AdobeEdge.loadResources) && window.AdobeEdge.loadResources();
        this.Oc = !0;
        break;
      case "orientation":
        this.H.b = a.mode, this.H.a = a.degrees
    }
    return R.w.dispatchEvent.call(this, a)
  };
  R.prototype.dispatchEvent = R.prototype.dispatchEvent;
  R.prototype.yb = function (a) {
    (this.dd = a) && !this.bb.visible ? (null != window.AdobeEdge && t(window.AdobeEdge.playWhenReady) && window.AdobeEdge.playWhenReady(), this.bd && Zi(this.b, "Start", "DISPLAY_TIMER", void 0, void 0, void 0), this.dispatchEvent(new P("visible"))) : this.bb.hidden || this.dispatchEvent(new P("hidden"));
    this.dispatchEvent(new P("visibilityChange"))
  };
  R.prototype.setAdVisibleInternal = R.prototype.yb;
  R.prototype.Me = function () {
    this.yb(!0)
  };
  R.prototype.dispatchAdVisible = R.prototype.Me;
  R.prototype.Yc = function (a, b, c, d, e, f) {
    if (c || d) this.B || (this.B = {}), this.B.width = c, this.B.height = d;
    null != e && (this.fb = !!e);
    null != f && Vi(this.a, "isMultiDirectional", f ? "true" : "false")
  };
  R.prototype.setExpandingPixelOffsets = R.prototype.Yc;
  R.prototype.$c = function (a) {
    this.fb = !!a
  };
  R.prototype.setStartExpanded = R.prototype.$c;
  R.prototype.Zc = function (a) {
    Vi(this.a, "isMultiDirectional", a ? "true" : "false")
  };
  R.prototype.setIsMultiDirectional = R.prototype.Zc;
  R.prototype.ef = function (a) {
    Q(this.I, "invokeMraidMethod", ["useCustomClose", [a]]);
    this.wb = 0 == a
  };
  R.prototype.setUseCustomClose = R.prototype.ef;
  R.prototype.$e = function () {};
  R.prototype.setFloatingPixelDimensions = R.prototype.$e;
  R.prototype.isVisible = function () {
    return this.dd
  };
  R.prototype.isVisible = R.prototype.isVisible;
  R.prototype.sa = function () {
    return x(1)
  };
  R.prototype.isServingInLiveEnvironment = R.prototype.sa;
  R.prototype.isPageLoaded = function () {
    return this.Oc
  };
  R.prototype.isPageLoaded = R.prototype.isPageLoaded;
  R.prototype.isInitialized = function () {
    return this.Rb
  };
  R.prototype.isInitialized = R.prototype.isInitialized;
  R.prototype.ec = function (a) {
    t(a) && $e(this.J, a)
  };
  R.prototype.callAfterInitialized = R.prototype.ec;
  R.prototype.getParameter = function (a) {
    return this.a.getParameter(a, null)
  };
  R.prototype.getParameter = R.prototype.getParameter;
  R.prototype.getParameter = R.prototype.getParameter;
  R.prototype.T = function (a) {
    return this.a.T(a)
  };
  R.prototype.getParameterAsInteger = R.prototype.T;
  R.prototype.wc = function (a) {
    a = this.a.fa(a);
    return void 0 != a && ("true" == a.toLowerCase() || "1" == a)
  };
  R.prototype.getParameterAsBoolean = R.prototype.wc;
  R.prototype.fa = function (a) {
    return this.a.fa(a)
  };
  R.prototype.getParameterAsNullableString = R.prototype.fa;
  R.prototype.exit = function (a, b, c) {
    void 0 !== b && (b = Sj(this, b));
    Rj(this);
    Wj(this, a, Xj(this, a, b, !1), c)
  };
  R.prototype.exit = R.prototype.exit;
  R.prototype.Fb = function (a, b, c) {
    b = Sj(this, b);
    Rj(this);
    Wj(this, a, Xj(this, a, b, !0), c)
  };
  R.prototype.exitOverride = R.prototype.Fb;
  R.prototype.Cd = function (a, b, c, d, e) {
    e && !e.pIndex ? e.pIndex = c : e || (e = {
      pIndex: c
    });
    b = Sj(this, b);
    Rj(this);
    Wj(this, a, Xj(this, a, b, !0), d, e)
  };
  R.prototype.dynamicExit = R.prototype.Cd;
  R.prototype.Gb = function (a, b) {
    Wj(this, a, Xj(this, a, void 0, void 0, b || ""))
  };
  R.prototype.exitQueryString = R.prototype.Gb;
  R.prototype.qc = function (a) {
    return Vj(this, a, this.a.getParameter("click", ""), null)
  };
  R.prototype.formExitUrlFromOverride = R.prototype.qc;
  R.prototype.Ta = function (a, b) {
    E(G, 'Counter "' + (a + '" invoked.'));
    Zi(this.b, "Count", a, b, !0, void 0);
    fe(G, Pi(a, "Count"))
  };
  R.prototype.counter = R.prototype.Ta;
  R.prototype.startTimer = function (a) {
    E(G, 'Timer "' + (a + '" started.'));
    Zi(this.b, "Start", a, void 0, !0, void 0);
    fe(G, Pi(a, "Start"))
  };
  R.prototype.startTimer = R.prototype.startTimer;
  R.prototype.stopTimer = function (a) {
    E(G, 'Timer "' + (a + '" stopped.'));
    Zi(this.b, "Stop", a, void 0, !0, void 0);
    fe(G, Pi(a, "Stop"))
  };
  R.prototype.stopTimer = R.prototype.stopTimer;
  R.prototype.Ue = function (a) {
    D(G, Ni("Enabler.reportCustomImpressionVariable(postString)", "Enabler.reportCustomVariableCount1(customString)"));
    Yj(this, a, 1)
  };
  R.prototype.reportCustomImpressionVariable = R.prototype.Ue;
  R.prototype.Ve = function (a) {
    Yj(this, a, 1)
  };
  R.prototype.reportCustomVariableCount1 = R.prototype.Ve;
  R.prototype.Te = function (a) {
    D(G, Ni("Enabler.reportCustomClickVariable(postString)", "Enabler.reportCustomVariableCount1(customString)"));
    Yj(this, a, 2)
  };
  R.prototype.reportCustomClickVariable = R.prototype.Te;
  R.prototype.We = function (a) {
    Yj(this, a, 2)
  };
  R.prototype.reportCustomVariableCount2 = R.prototype.We;
  R.prototype.sc = function () {
    return this.f
  };
  R.prototype.getContainerState = R.prototype.sc;
  R.prototype.vc = function () {
    return this.oa
  };
  R.prototype.getExpandDirection = R.prototype.vc;
  R.prototype.cf = function (a) {
    this.xb || dj(this, "setResponsiveBehavior", [a ? 2 : 0, 2])
  };
  R.prototype.setResponsiveExpanding = R.prototype.cf;
  R.prototype.df = function (a, b) {
    dj(this, "responsiveResize", [a, b])
  };
  R.prototype.setResponsiveSize = R.prototype.df;
  R.prototype.rb = function () {
    if ("collapsed" != this.f) D(G, "Enabler.requestExpand() should not be invoked unless the creative is in the collapsed state.");
    else {
      Zf(this, "expandStart") || D(G, "Please implement the expansion via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.EXPAND_START,\n    function() {/* expand action */});");
      this.xb = !0;
      var a = [this.pa];
      this.B && a.push(this.B);
      Q(this.I, "expandRequested", a);
      Zj(this, this.Qa);
      this.l(this.rc, 0)
    }
  };
  R.prototype.requestExpand = R.prototype.rb;
  var Zj = function (a, b) {
      if (!a.sa() && a.wb) {
        var c = document.getElementsByTagName("body")[0],
          d = B("IMG", {
            width: "15",
            height: "15",
            border: "0",
            src: "http://s0.2mdn.net/ads/studio/close.png"
          });
        a.h = {
          K: b,
          element: B("DIV", {
            style: "position: absolute;right: 5px;top: 5px;width: 15px;height: 15px;cursor: pointer;"
          }, d)
        };
        M(a.W, a.h.element, "click", b, void 0);
        Dd(c, a.h.element)
      }
    },
    ak = function (a) {
      a.h && (Ed(a.h.element), oh(a.W, a.h.element, "click", a.h.K), a.h.element = null, a.h.K = null, a.h = null)
    };
  R.prototype.we = function () {
    this.dispatchEvent(new P("aboutToExpand"))
  };
  R.prototype.aboutToExpandInternal = R.prototype.we;
  R.prototype.rc = function (a) {
    a && (a = wi[a.toString().toUpperCase()]);
    var b = 0,
      c = 0;
    "true" == this.getParameter("isMultiDirectional") && a && (a.a & 2 && (c = this.T("topOffset")), a.a & 1 && (b = this.T("leftOffset")));
    Mj(this, null === b ? 0 : b, null === c ? 0 : c);
    a ? this.oa = a : this.oa = this.sa() || "true" != this.getParameter("isMultiDirectional") ? null : xi[this.He++ % xi.length];
    this.fb || (Zi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Rj(this), this.Ja || (this.o(), this.Ja = !0));
    this.fb = !1;
    this.f = "expanding";
    a = new P("expandStart");
    a.ea("direction",
      this.oa);
    this.dispatchEvent(a)
  };
  R.prototype.startExpandInternal = R.prototype.rc;
  R.prototype.Jb = function () {
    "expanding" != this.f ? D(G, "You must first call Enabler.requestExpand() to initiate the expansion and then call Enabler.finishExpand() when the expand animation has  finished. Cancelling expansion...") : (Q(this.I, "expandFinished", [this.pa]), this.f = "expanded", E(G, "The creative has expanded."), this.dispatchEvent(new P("expandFinish")))
  };
  R.prototype.finishExpand = R.prototype.Jb;
  R.prototype.expand = function (a, b) {
    D(G, "The Enabler.expand() method has been deprecated. As an alternative please use: Enabler.requestExpand().");
    Mj(this, 0, 0);
    var c = [this.pa];
    b && c.push(b);
    this.wb = !!b && 0 == b.useCustomClose;
    Q(this.I, "expandAsset", c);
    a || (Zi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Rj(this));
    this.Ja || (this.o(), this.Ja = !0);
    E(G, "The creative has expanded.")
  };
  R.prototype.expand = R.prototype.expand;
  R.prototype.Qa = function () {
    "expanded" != this.f && D(G, "Enabler.requestCollapse() should not be invoked unless the creative is in the expanded state.");
    ak(this);
    Zf(this, "collapseStart") || D(G, "Please implement collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.COLLAPSE_START,\n    function() {/* Begin collapse animation */});");
    Q(this.I, "collapseRequested", [this.pa]);
    this.l(this.nc, 0)
  };
  R.prototype.requestCollapse = R.prototype.Qa;
  R.prototype.nc = function () {
    this.f = "collapsing";
    this.dispatchEvent(new P("collapseStart"))
  };
  R.prototype.startCollapseInternal = R.prototype.nc;
  R.prototype.Ib = function () {
    "collapsing" != this.f ? D(G, "You must first call Enabler.requestCollapse() to initiate the collapse and then call Enabler.finishCollapse() when the collapse animation has  finished. Cancelling collapse...") : (Q(this.I, "collapseFinished", [this.pa]), this.l(this.Zb, 0))
  };
  R.prototype.finishCollapse = R.prototype.Ib;
  R.prototype.Zb = function () {
    var a = this.T("leftOffset") || 0,
      b = this.T("topOffset") || 0;
    Mj(this, a, b);
    Zi(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
    this.f = "collapsed";
    E(G, "The creative has collapsed.");
    this.dispatchEvent(new P("collapseFinish"))
  };
  R.prototype.finishCollapseInternal = R.prototype.Zb;
  R.prototype.collapse = function () {
    D(G, "The Enabler.collapse() method has been deprecated. As an alternative please use: Enabler.requestCollapse().");
    Zf(this, "collapse") || D(G, "Please implement collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.COLLAPSE_START,\n    function() {/* Begin collapse animation */});");
    var a = this.T("leftOffset") || 0,
      b = this.T("topOffset") || 0;
    Mj(this, a, b);
    Q(this.I, "collapseAsset", [this.pa]);
    this.dispatchEvent(new P("collapse"));
    Zi(this.b, "Stop",
      "EXPAND_TIMER", void 0, void 0, void 0)
  };
  R.prototype.collapse = R.prototype.collapse;
  R.prototype.close = function () {
    this.U.dispose();
    Q(this.I, "tellAssetHide", [this.pa]);
    E(G, "Closing ad. If this was invoked by a user action, call Enabler.reportManualClose() as well.")
  };
  R.prototype.close = R.prototype.close;
  R.prototype.sd = function () {
    Q(this.I, "tellCompanionAssetHide", [this.pa])
  };
  R.prototype.closeCompanion = R.prototype.sd;
  R.prototype.Ad = function () {
    Q(this.I, "tellCompanionAssetShow", [this.pa])
  };
  R.prototype.displayCompanion = R.prototype.Ad;
  R.prototype.Pd = function () {
    return this.fa("sn")
  };
  R.prototype.getDartSiteName = R.prototype.Pd;
  R.prototype.Od = function () {
    return this.T("sid")
  };
  R.prototype.getDartSiteId = R.prototype.Od;
  R.prototype.Ld = function () {
    return this.T("aid")
  };
  R.prototype.getDartAdId = R.prototype.Ld;
  R.prototype.Nd = function () {
    return this.T("pid")
  };
  R.prototype.getDartPageId = R.prototype.Nd;
  R.prototype.uc = function () {
    return this.fa("rid")
  };
  R.prototype.getDartRenderingId = R.prototype.uc;
  R.prototype.Md = function () {
    return this.T("cid")
  };
  R.prototype.getDartCreativeId = R.prototype.Md;
  R.prototype.tc = function () {
    return this.fa("varName")
  };
  R.prototype.getDartAssetId = R.prototype.tc;
  R.prototype.Wd = function () {
    return this.fa("ct")
  };
  R.prototype.getUserCountry = R.prototype.Wd;
  R.prototype.Yd = function () {
    return this.fa("st")
  };
  R.prototype.getUserState = R.prototype.Yd;
  R.prototype.Zd = function () {
    return this.fa("zp")
  };
  R.prototype.getUserZipCode = R.prototype.Zd;
  R.prototype.Vd = function () {
    var a = this.T("bw");
    return null != a ? a : 0
  };
  R.prototype.getUserBandwidth = R.prototype.Vd;
  R.prototype.Ud = function () {
    return this.fa("ac")
  };
  R.prototype.getUserAreaCode = R.prototype.Ud;
  R.prototype.Xd = function () {
    return this.T("dma")
  };
  R.prototype.getUserDMACode = R.prototype.Xd;
  R.prototype.getFilename = function (a) {
    D(G, "The method: Enabler.getFilename(filename) has been deprecated. As an alternative please use: Enabler.getUrl(filename).");
    return this.Ua(a)
  };
  R.prototype.getFilename = R.prototype.getFilename;
  R.prototype.Ua = function (a) {
    var b = a.toLowerCase(),
      c = b.slice(b.lastIndexOf("/") + 1),
      d = encodeURIComponent(c),
      e = this.A[c];
    e = (e = (e = (e = (e = e || this.A["pro_" + c]) || this.A[b]) || this.A["pro_" + b]) || this.A[d]) || this.A["pro_" + d];
    return null != e ? e : a
  };
  R.prototype.getUrl = R.prototype.Ua;
  R.prototype.Sd = function () {
    return this.H
  };
  R.prototype.getOrientation = R.prototype.Sd;
  R.prototype.Ye = function (a, b) {
    if (a)
      for (var c = 0; c < this.zb.length; ++c) {
        var d = this.zb[c];
        if (null != d) switch (a) {
          case "changevolume":
            null != b && (0 < b && (d.muted = !1), d.volume = b);
            break;
          case "pause":
            d.pause();
            break;
          case "resume":
            d.play()
        }
      }
  };
  R.prototype.invokeOnAllVideos = R.prototype.Ye;
  R.prototype.mc = function (a) {
    null != a && this.zb.push(a)
  };
  R.prototype.registerVideoElements = R.prototype.mc;
  R.prototype.Ae = function (a, b) {
    a = jf(lf(a));
    null != b && $e(a, b)
  };
  R.prototype.loadScript = R.prototype.Ae;
  R.prototype.Za = function (a, b) {
    Sg(ge, a) ? $e(this.J, Ka(sg, a, b)) : ee(G, "There is no module called " + (a + "."))
  };
  R.prototype.loadModule = R.prototype.Za;
  R.prototype.ze = function (a, b) {
    for (var c = a.length, d = 0; d < a.length; ++d) this.Za(a[d], function () {
      0 == --c && b()
    })
  };
  R.prototype.loadModules = R.prototype.ze;
  R.prototype.Ic = function (a) {
    E(G, 'Dispatching function invocation "' + a + '" on parent.');
    Q(this.I, "invokeExternalJSFunction", [escape(a)])
  };
  R.prototype.invokeExternalJsFunction = R.prototype.Ic;
  R.prototype.Jc = function (a, b, c) {
    a in Li || D(G, 'The mraid method "' + (a + "\" isn't allowed to be invoked, please use one of the corresponding Enabler methods."));
    var d = 'Method "' + (a + '" invoked');
    b && (d += 'with arguments "' + (b.join(",") + '"'));
    E(G, d + ".");
    Q(this.I, "invokeMraidMethod", [a, b], c)
  };
  R.prototype.invokeMraidMethod = R.prototype.Jc;
  R.prototype.Pe = function () {
    D(G, "The method: Enabler.invokeAdMobMethod has been deprecated.")
  };
  R.prototype.invokeAdMobMethod = R.prototype.Pe;
  R.prototype.F = function (a, b, c, d) {
    Sg(kh, a) ? Q(this.I, "invokeExternalJSFunctionWithReturn", [a, b, c], d) : ee(G, 'The whitelist global object "' + (a + "\" isn't whitelisted, please only call methods on one of the existing whitelisted objects."))
  };
  R.prototype.invokeExternalJsFunctionWithReturn = R.prototype.F;
  R.prototype.nf = function (a, b) {
    E(G, "Dispatching function invocation openUrl on parent.");
    Q(this.I, "invokeUrlOpen", [a], b)
  };
  R.prototype.invokeUrlOpen = R.prototype.nf;
  R.prototype.v = function () {
    this.ja && qj(this.ja);
    this.Ba && Xf(this.Ba);
    sf(this.U, this.b, this.W, this.J, this.Ia);
    delete this.cb;
    R.w.v.call(this)
  };
  R.prototype.addEventListener = function (a, b, c, d, e) {
    a = ui[a.toString()] || a;
    if (a.toString() in ri) {
      if (!this.sa()) {
        e = b;
        t(b) && (e = function (f) {
          f.Jd ? b(f.aa) : b(f)
        });
        M(this.W, window, a, e, c, d);
        return
      }
      Q(this.I, "registerEventTypeListenerForType", [a, e])
    }
    "hostpageFeaturesLoaded" == a && Q(this.I, "getHostpageFeatures", [a]);
    Pf(this, a, b, c, d)
  };
  R.prototype.addEventListener = R.prototype.addEventListener;
  R.prototype.removeEventListener = function (a, b, c, d) {
    Wf(this, a, b, c, d)
  };
  R.prototype.removeEventListener = R.prototype.removeEventListener;
  R.prototype.Ab = function (a, b) {
    this.cb[a] = b
  };
  R.prototype.addMessageHandler = R.prototype.Ab;
  R.prototype.Re = function (a) {
    delete this.cb[a]
  };
  R.prototype.removeMessageHandler = R.prototype.Re;
  R.prototype.Ge = function (a, b) {
    a = this.cb[a];
    t(a) && a.apply(null, b)
  };
  R.prototype.defaultMessageHandler = R.prototype.Ge;
  R.prototype.Sc = function () {
    Zf(this, "fullscreenSupport") || D(G, "Please implement an event handler in order to receive support status:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_SUPPORT,\n    function() {/* query event for fullscreen status */});");
    Q(this.I, "isFullscreenSupported");
    this.l(this.dc, 0, !0)
  };
  R.prototype.queryFullscreenSupport = R.prototype.Sc;
  R.prototype.Rc = function () {
    Zf(this, "fullscreenDimensions") || D(G, "Please implement an event handler in order to receive dimensions:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,\n    function() {/* query event for fullscreen dimensions */});");
    Q(this.I, "queryFullscreenDimensions");
    if (!this.sa()) {
      var a = wd();
      this.l(this.Wb, 0, a.width, a.height)
    }
  };
  R.prototype.queryFullscreenDimensions = R.prototype.Rc;
  R.prototype.Vc = function (a, b) {
    if ("collapsed" != this.f) D(G, "Enabler.requestFullscreenExpand() should not be invoked unless the  creative is in the collapsed state.");
    else {
      Zf(this, "fullscreenExpandStart") || D(G, "Please implement the fullscreen expansion via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_EXPAND_START,\n    function() {/* expand action */});");
      this.xb = !0;
      var c = [];
      a && b && (c = [a, b]);
      Q(this.I, "fullscreenExpandRequested", c);
      Zj(this, this.Ob);
      this.l(this.cc,
        0, a, b)
    }
  };
  R.prototype.requestFullscreenExpand = R.prototype.Vc;
  R.prototype.pc = function () {
    "fs_expanding" != this.f ? D(G, "You must first call Enabler.requestFullscreenExpand() to initiate the expansion and then call Enabler.finishFullscreenExpand() when the expand animation has finished. Cancelling expansion...") : (Q(this.I, "fullscreenExpandFinished"), E(G, "The creative has expanded."), this.l(this.bc, 0))
  };
  R.prototype.finishFullscreenExpand = R.prototype.pc;
  R.prototype.Ob = function () {
    "fs_expanded" != this.f ? D(G, "Enabler.requestFullscreenCollapse() should not be invoked unless the  creative is in the fullscreen state.") : (Zf(this, "fullscreenCollapseStart") || D(G, "Please implement fullscreen collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,\n    function() {/* Begin collapse animation */});"), ak(this), Q(this.I, "fullscreenCollapseRequested"), this.l(this.ac, 0))
  };
  R.prototype.requestFullscreenCollapse = R.prototype.Ob;
  R.prototype.oc = function () {
    "fs_collapsing" != this.f ? D(G, "You must first call Enabler.requestFullscreenCollapse() to initiate the collapse and then call Enabler.finishFullscreenCollapse() when the collapse animation has finished. Cancelling collapse...") : (Q(this.I, "fullscreenCollapseFinished"), this.l(this.$b, 0))
  };
  R.prototype.finishFullscreenCollapse = R.prototype.oc;
  R.prototype.Qe = function (a) {
    Q(this.I, "registerChargeableEventName", [a])
  };
  R.prototype.registerChargeableEventName = R.prototype.Qe;
  R.prototype.Kb = function () {
    return this.U.Kb()
  };
  R.prototype.hasUserInteracted = R.prototype.Kb;
  R.prototype.dc = function (a) {
    var b = new P("fullscreenSupport");
    b.ea("supported", a);
    this.dispatchEvent(b)
  };
  R.prototype.fullscreenSupportInternal = R.prototype.dc;
  R.prototype.Wb = function (a, b) {
    var c = new P("fullscreenDimensions");
    void 0 != a && void 0 != b && (c.ea("width", a), c.ea("height", b));
    this.dispatchEvent(c)
  };
  R.prototype.fullscreenDimensionsInternal = R.prototype.Wb;
  R.prototype.cc = function (a, b, c, d) {
    Zi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0);
    Rj(this);
    this.Ja || (this.o(), this.Ja = !0);
    this.f = "fs_expanding";
    var e = new P("fullscreenExpandStart");
    e.ea("width", a);
    e.ea("height", b);
    e.ea("left", c);
    e.ea("top", d);
    this.dispatchEvent(e)
  };
  R.prototype.fullscreenExpandStartInternal = R.prototype.cc;
  R.prototype.bc = function () {
    this.f = "fs_expanded";
    this.dispatchEvent(new P("fullscreenExpandFinish"))
  };
  R.prototype.fullscreenExpandFinishInternal = R.prototype.bc;
  R.prototype.ac = function () {
    this.f = "fs_collapsing";
    this.dispatchEvent(new P("fullscreenCollapseStart"))
  };
  R.prototype.fullscreenCollapseStartInternal = R.prototype.ac;
  R.prototype.$b = function () {
    Zi(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
    this.f = "collapsed";
    this.dispatchEvent(new P("fullscreenCollapseFinish"))
  };
  R.prototype.fullscreenCollapseFinishInternal = R.prototype.$b;
  R.prototype.ye = function () {
    return this.Af.b("image/webp")
  };
  R.prototype.canRenderWebpImages = R.prototype.ye;
  R.prototype.Dc = function (a) {
    return this.Ec.f(a) ? this.Ec.b(a) : !1
  };
  R.prototype.supportsVideoFormat = R.prototype.Dc;
  R.prototype.af = function () {
    return this
  };
  R.prototype.setHint = R.prototype.af;
  R.prototype.xc = function () {
    a: {
      for (a in Id)
        if ("studio" == Id[a]) {
          var a = "studio";
          break a
        } a = null
    }
    return a || "studio"
  };
  R.prototype.getSdk = R.prototype.xc;
  var bk = S();
  n("Enabler", bk, void 0);
  var T = S();
  if (!T.Rb) {
    var ck = T.a.getParameter("e", null);
    gj(ck);
    var dk = T.T("leftOffset") || 0,
      ek = T.T("topOffset") || 0;
    0 == dk && 0 == ek || Mj(T, dk, ek);
    var fk = T.wc("ssr"),
      gk;
    gk = Lj(T).g;
    var hk;
    hk = Lj(T).b;
    var ik;
    ik = Lj(T).a;
    var jk = [gk, "://", hk, ik].join(""); of (Vg.a);
    Wg([1, 2]);
    var kk;
    kk = T.a.getParameter("c", void 0);
    var lk;
    lk = T.a.T("t");
    T.I = new Ii(kk, lk);
    rf(T, T.I);
    T.I.a = T;
    T.I.j = jk.split("?")[0];
    T.I.B = fk;
    if (!T.sa()) {
      var mk = 1E3;
      Jj && (mk = 0);
      T.Ba = Qj(T.De, "a", mk);
      var nk = 2E3,
        ok = 2500;
      Jj && (ok = nk = 0);
      Qj(T.Xb, "b", nk);
      Qj(Ka(T.yb, !0), "c", ok);
      M(T.W, window, ["resize", "orientationchange"], T.hc, void 0);
      T.hc()
    }
    T.I.connect()
  }
  gg.enabler = 3;
  var U = function () {
    K.call(this);
    this.D = "loading";
    this.a = ya("Enabler");
    this.a.isInitialized() ? this.b() : Pf(this.a, "init", this.b, !1, this)
  };
  w(U, K);
  Ba(U);
  U.prototype.l = function () {
    return this.D
  };
  U.prototype.getState = U.prototype.l;
  U.prototype.h = function () {
    return "1.0"
  };
  U.prototype.getVersion = U.prototype.h;
  U.prototype.open = function () {
    this.a.exit("MRAID default exit")
  };
  U.prototype.open = U.prototype.open;
  U.prototype.close = function () {
    "expanded" == this.D ? (this.a.Qa(), this.D = "default", this.dispatchEvent("stateChange")) : "default" == this.D && (this.D = "hidden", this.a.close(), this.dispatchEvent("stateChange"))
  };
  U.prototype.close = U.prototype.close;
  U.prototype.j = function () {
    return this.a.isVisible()
  };
  U.prototype.isViewable = U.prototype.j;
  U.prototype.expand = function () {
    "default" == this.D && (this.a.rb(), this.D = "expanded", this.dispatchEvent("stateChange"))
  };
  U.prototype.expand = U.prototype.expand;
  U.prototype.b = function () {
    this.D = "default";
    Pf(this.a, "collapseStart", this.f, !1, this);
    this.dispatchEvent("ready")
  };
  U.prototype.f = function () {
    "expanded" == this.D && (this.D = "default", this.dispatchEvent("stateChange"))
  };
  if (!window.mraid) {
    var pk = U.La();
    n("mraid", pk, void 0)
  };
  n("studio.sdk.hint.ExpansionMode", {
    NORMAL: "normal",
    LIGHTBOX: "lightbox"
  }, void 0);
  n("studio.sdk.hint.ExpansionTrigger", {
    ON_CLICK: "onClick",
    ON_HOVER: "onHover"
  }, void 0);
  n("studio.sdk.hint.Hint", {
    EXPANSION_MODE: "expansionMode",
    EXPANSION_TRIGGER: "expansionTrigger"
  }, void 0);
  var qk, rk, sk, tk, uk, vk, wk = function () {
      return h.navigator ? h.navigator.userAgent : ""
    },
    xk = function (a) {
      return Fb(wk(), a)
    },
    yk = xk("(iPad") || xk("(Macintosh") || xk("(iPod") || xk("(iPhone"),
    zk = xk("Android"),
    Ak = xk("MSIE") || xk("IEMobile") || xk("Windows Phone"),
    Bk = function () {
      void 0 === tk && (tk = xk("afma-sdk-a") ? !0 : !1);
      return tk
    },
    Ck = function () {
      if (void 0 === uk) {
        a: {
          if (void 0 === sk) {
            if (yk) {
              var a = xk("Safari");
              var b = (new Uh(window.location.href)).f.O("js");
              b: {
                if ((b = b.length ? b[0] : "") && vb(b, "afma-")) {
                  var c = b.lastIndexOf("v");
                  if (-1 <
                    c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                    b = b[1];
                    break b
                  }
                }
                b = "0.0.0"
              }
              if (!a || "0.0.0" !== b) {
                a = sk = !0;
                break a
              }
            }
            sk = !1
          }
          a = sk
        }
        uk = a || Bk()
      }
      return uk
    };
  var Dk = function (a) {
      return "Config type " + (a + " does not exist")
    },
    Ek = function (a) {
      return "Unable to parse a type for value with JavaScript type " + (Ca(a) + (': "' + (a + '"')))
    },
    Fk = function (a, b) {
      return "Cannot handle description for property " + (b + (" on type " + (a + ".")))
    },
    Gk = function (a, b) {
      return "Array property " + (b + (" on type " + (a + " must have at least one element.")))
    },
    Hk = function (a, b) {
      return "Invalid type for value of property " + (b + (" on type " + (a + ".")))
    },
    Ik = function (a, b) {
      return "No value specified for non-optional property " +
        (b + (" on type " + (a + ".")))
    },
    Jk = function (a, b) {
      return "Property " + (b + (" does not exist on type " + (a + ".")))
    },
    Kk = function (a, b) {
      return "Property " + (b + (" is not an array on type " + (a + ".")))
    },
    Lk = function (a, b, c, d) {
      return "Property " + (b + (" on type " + (a + (" has length " + (c + (", but invalid index " + (d + " was requested.")))))))
    },
    Mk = function (a, b) {
      return "Unknown event with type " + (a + (" and name " + b))
    },
    Nk = function (a) {
      return "The optional property " + (a + " must be a reference")
    };
  var Ok = function () {};
  n("studio.utils.EnablerAccessor", Ok, void 0);
  var Pk = function (a) {
    var b = S();
    b.isInitialized() ? a(b) : b.g.add("init", Ka(a, b), !0, void 0, void 0)
  };
  Ok.getInitializedEnablerByCallback = Pk;
  var Qk = function () {
    return new ze(function (a) {
      var b = S();
      b.isInitialized() ? a(b) : b.g.add("init", Ka(a, b), !0, void 0, void 0)
    })
  };
  Ok.getInitializedEnabler = Qk;
  Ok.loadModuleWhenReady = function (a, b) {
    Pk(function (c) {
      c.Za(a, b)
    })
  };
  var Rk = function () {};
  Ba(Rk);
  Rk.prototype.a = 0;
  var V = function (a) {
    K.call(this);
    this.U = a || td();
    this.B = null;
    this.ra = !1;
    this.a = null;
    this.j = void 0;
    this.h = this.b = this.G = null
  };
  w(V, K);
  V.prototype.ja = Rk.La();
  var Sk = function (a) {
    return a.B || (a.B = ":" + (a.ja.a++).toString(36))
  };
  V.prototype.getElement = function () {
    return this.a
  };
  var Tk = function (a) {
      a.j || (a.j = new L(a));
      return y(a.j)
    },
    Uk = function (a, b) {
      if (a == b) throw Error("Unable to set parent component");
      var c;
      if (c = b && a.G && a.B) {
        c = a.G;
        var d = a.B;
        c = c.h && d ? Sb(c.h, d) || null : null
      }
      if (c && a.G != b) throw Error("Unable to set parent component");
      a.G = b;
      V.w.Qb.call(a, b)
    };
  V.prototype.Qb = function (a) {
    if (this.G && this.G != a) throw Error("Method not supported");
    V.w.Qb.call(this, a)
  };
  V.prototype.ca = function () {
    this.a = Hd(this.U, "DIV")
  };
  var Vk = function (a, b, c) {
    if (a.ra) throw Error("Component already rendered");
    a.a || a.ca();
    b ? b.insertBefore(a.a, c || null) : a.U.a.body.appendChild(a.a);
    a.G && !a.G.ra || a.$()
  };
  V.prototype.$ = function () {
    this.ra = !0;
    Wk(this, function (a) {
      !a.ra && a.getElement() && a.$()
    })
  };
  var Xk = function (a) {
    Wk(a, function (b) {
      b.ra && Xk(b)
    });
    a.j && ph(a.j);
    a.ra = !1
  };
  V.prototype.v = function () {
    this.ra && Xk(this);
    this.j && (this.j.dispose(), delete this.j);
    Wk(this, function (a) {
      a.dispose()
    });
    this.a && Ed(this.a);
    this.G = this.a = this.h = this.b = null;
    V.w.v.call(this)
  };
  var Yk = function (a, b) {
    var c = a.b ? a.b.length : 0;
    y(!!b, "Provided element must not be null.");
    if (b.ra) throw Error("Component already rendered");
    if (0 > c || c > (a.b ? a.b.length : 0)) throw Error("Child component index out of bounds");
    a.h && a.b || (a.h = {}, a.b = []);
    if (b.G == a) {
      var d = Sk(b);
      a.h[d] = b;
      mb(a.b, b)
    } else {
      d = a.h;
      var e = Sk(b);
      if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
      d[e] = b
    }
    Uk(b, a);
    rb(a.b, c, 0, b);
    b.ra && a.ra && b.G == a ? (a = a.qa(), c = a.childNodes[c] || null, c != b.getElement() && a.insertBefore(b.getElement(),
      c)) : (a.a || a.ca(), c = a.b ? a.b[c + 1] || null : null, Vk(b, a.qa(), c ? c.a : null))
  };
  V.prototype.qa = function () {
    return this.a
  };
  var Wk = function (a, b) {
    a.b && z(a.b, b, void 0)
  };
  V.prototype.removeChild = function (a, b) {
    if (a) {
      var c = "string" === typeof a ? a : Sk(a);
      a = this.h && c ? Sb(this.h, c) || null : null;
      if (c && a) {
        var d = this.h;
        c in d && delete d[c];
        mb(this.b, a);
        b && (Xk(a), a.a && Ed(a.a));
        Uk(a, null)
      }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
  };
  var Zk = function (a) {
    for (var b = []; a.b && 0 != a.b.length;) b.push(a.removeChild(a.b ? a.b[0] || null : null, !0))
  };
})();