// Build: 2023/5/28 17:05:10
(() => {
  console.time = function (o) {
    (this._times = this._times || {}), (this._times[o] = Date.now());
  };
  console.timeEnd = function (o) {
    if (this._times && this._times[o]) {
      let e = Date.now() - this._times[o];
      console.log(`${o}: ${e}ms`), delete this._times[o];
    } else console.log(`Timer with label ${o} does not exist.`);
  };
  function Tn(o) {
    "use strict";
    function e() {}
    function t() {}
    var n = String.fromCharCode,
      i = {}.toString,
      r = i.call(o.SharedArrayBuffer),
      s = i(),
      a = o.Uint8Array,
      l = a || Array,
      f = a ? ArrayBuffer : l,
      c =
        f.isView ||
        function (v) {
          return v && "length" in v;
        },
      p = i.call(f.prototype);
    f = t.prototype;
    var g = o.TextEncoder,
      m = new (a ? Uint16Array : l)(32);
    (e.prototype.decode = function (v) {
      if (!c(v)) {
        var L = i.call(v);
        if (L !== p && L !== r && L !== s)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"
          );
        v = a ? new l(v) : v || [];
      }
      for (
        var x = (L = ""),
          y = 0,
          w = v.length | 0,
          G = (w - 32) | 0,
          F,
          E,
          V = 0,
          j = 0,
          S,
          A = 0,
          D = -1;
        y < w;

      ) {
        for (
          F = y <= G ? 32 : (w - y) | 0;
          A < F;
          y = (y + 1) | 0, A = (A + 1) | 0
        ) {
          switch (((E = v[y] & 255), E >> 4)) {
            case 15:
              if (((S = v[(y = (y + 1) | 0)] & 255), S >> 6 !== 2 || 247 < E)) {
                y = (y - 1) | 0;
                break;
              }
              (V = ((E & 7) << 6) | (S & 63)), (j = 5), (E = 256);
            case 14:
              (S = v[(y = (y + 1) | 0)] & 255),
                (V <<= 6),
                (V |= ((E & 15) << 6) | (S & 63)),
                (j = S >> 6 === 2 ? (j + 4) | 0 : 24),
                (E = (E + 256) & 768);
            case 13:
            case 12:
              (S = v[(y = (y + 1) | 0)] & 255),
                (V <<= 6),
                (V |= ((E & 31) << 6) | (S & 63)),
                (j = (j + 7) | 0),
                y < w && S >> 6 === 2 && V >> j && 1114112 > V
                  ? ((E = V),
                    (V = (V - 65536) | 0),
                    0 <= V &&
                      ((D = ((V >> 10) + 55296) | 0),
                      (E = ((V & 1023) + 56320) | 0),
                      31 > A
                        ? ((m[A] = D), (A = (A + 1) | 0), (D = -1))
                        : ((S = D), (D = E), (E = S))))
                  : ((E >>= 8), (y = (y - E - 1) | 0), (E = 65533)),
                (V = j = 0),
                (F = y <= G ? 32 : (w - y) | 0);
            default:
              m[A] = E;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          m[A] = 65533;
        }
        if (
          ((x += n(
            m[0],
            m[1],
            m[2],
            m[3],
            m[4],
            m[5],
            m[6],
            m[7],
            m[8],
            m[9],
            m[10],
            m[11],
            m[12],
            m[13],
            m[14],
            m[15],
            m[16],
            m[17],
            m[18],
            m[19],
            m[20],
            m[21],
            m[22],
            m[23],
            m[24],
            m[25],
            m[26],
            m[27],
            m[28],
            m[29],
            m[30],
            m[31]
          )),
          32 > A && (x = x.slice(0, (A - 32) | 0)),
          y < w)
        ) {
          if (((m[0] = D), (A = ~D >>> 31), (D = -1), x.length < L.length))
            continue;
        } else D !== -1 && (x += n(D));
        (L += x), (x = "");
      }
      return L;
    }),
      (f.encode = function (v) {
        v = v === void 0 ? "" : "" + v;
        var L = v.length | 0,
          x = new l(((L << 1) + 8) | 0),
          y,
          w = 0,
          G = !a;
        for (y = 0; y < L; y = (y + 1) | 0, w = (w + 1) | 0) {
          var F = v.charCodeAt(y) | 0;
          if (127 >= F) x[w] = F;
          else {
            if (2047 >= F) x[w] = 192 | (F >> 6);
            else {
              e: {
                if (55296 <= F)
                  if (56319 >= F) {
                    var E = v.charCodeAt((y = (y + 1) | 0)) | 0;
                    if (56320 <= E && 57343 >= E) {
                      if (((F = ((F << 10) + E - 56613888) | 0), 65535 < F)) {
                        (x[w] = 240 | (F >> 18)),
                          (x[(w = (w + 1) | 0)] = 128 | ((F >> 12) & 63)),
                          (x[(w = (w + 1) | 0)] = 128 | ((F >> 6) & 63)),
                          (x[(w = (w + 1) | 0)] = 128 | (F & 63));
                        continue;
                      }
                      break e;
                    }
                    F = 65533;
                  } else 57343 >= F && (F = 65533);
                !G &&
                  y << 1 < w &&
                  y << 1 < ((w - 7) | 0) &&
                  ((G = !0), (E = new l(3 * L)), E.set(x), (x = E));
              }
              (x[w] = 224 | (F >> 12)),
                (x[(w = (w + 1) | 0)] = 128 | ((F >> 6) & 63));
            }
            x[(w = (w + 1) | 0)] = 128 | (F & 63);
          }
        }
        return a ? x.subarray(0, w) : x.slice(0, w);
      }),
      (o.TextDecoder = e),
      (o.TextEncoder = t);
  }
  var b = Tn(globalThis);
  var z = Uint8Array,
    ee = Uint16Array,
    Nn = Int32Array,
    St = new z([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    At = new z([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    xn = new z([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    Mt = function (o, e) {
      for (var t = new ee(31), n = 0; n < 31; ++n) t[n] = e += 1 << o[n - 1];
      for (var i = new Nn(t[30]), n = 1; n < 30; ++n)
        for (var r = t[n]; r < t[n + 1]; ++r) i[r] = ((r - t[n]) << 5) | n;
      return { b: t, r: i };
    },
    Ct = Mt(St, 2),
    zt = Ct.b,
    In = Ct.r;
  (zt[28] = 258), (In[258] = 28);
  var Wt = Mt(At, 0),
    Bn = Wt.b,
    Qn = Wt.r,
    Oe = new ee(32768);
  for (T = 0; T < 32768; ++T)
    (K = ((T & 43690) >> 1) | ((T & 21845) << 1)),
      (K = ((K & 52428) >> 2) | ((K & 13107) << 2)),
      (K = ((K & 61680) >> 4) | ((K & 3855) << 4)),
      (Oe[T] = (((K & 65280) >> 8) | ((K & 255) << 8)) >> 1);
  var K,
    T,
    oe = function (o, e, t) {
      for (var n = o.length, i = 0, r = new ee(e); i < n; ++i)
        o[i] && ++r[o[i] - 1];
      var s = new ee(e);
      for (i = 1; i < e; ++i) s[i] = (s[i - 1] + r[i - 1]) << 1;
      var a;
      if (t) {
        a = new ee(1 << e);
        var l = 15 - e;
        for (i = 0; i < n; ++i)
          if (o[i])
            for (
              var f = (i << 4) | o[i],
                c = e - o[i],
                p = s[o[i] - 1]++ << c,
                g = p | ((1 << c) - 1);
              p <= g;
              ++p
            )
              a[Oe[p] >> l] = f;
      } else
        for (a = new ee(n), i = 0; i < n; ++i)
          o[i] && (a[i] = Oe[s[o[i] - 1]++] >> (15 - o[i]));
      return a;
    },
    ae = new z(288);
  for (T = 0; T < 144; ++T) ae[T] = 8;
  var T;
  for (T = 144; T < 256; ++T) ae[T] = 9;
  var T;
  for (T = 256; T < 280; ++T) ae[T] = 7;
  var T;
  for (T = 280; T < 288; ++T) ae[T] = 8;
  var T,
    $t = new z(32);
  for (T = 0; T < 32; ++T) $t[T] = 5;
  var T;
  var Un = oe(ae, 9, 1);
  var En = oe($t, 5, 1),
    Ee = function (o) {
      for (var e = o[0], t = 1; t < o.length; ++t) o[t] > e && (e = o[t]);
      return e;
    },
    $ = function (o, e, t) {
      var n = (e / 8) | 0;
      return ((o[n] | (o[n + 1] << 8)) >> (e & 7)) & t;
    },
    Fe = function (o, e) {
      var t = (e / 8) | 0;
      return (o[t] | (o[t + 1] << 8) | (o[t + 2] << 16)) >> (e & 7);
    },
    Fn = function (o) {
      return ((o + 7) / 8) | 0;
    },
    On = function (o, e, t) {
      (e == null || e < 0) && (e = 0),
        (t == null || t > o.length) && (t = o.length);
      var n = new z(t - e);
      return n.set(o.subarray(e, t)), n;
    };
  var Rn = [
      "unexpected EOF",
      "invalid block type",
      "invalid length/literal",
      "invalid distance",
      "stream finished",
      "no stream handler",
      ,
      "no callback",
      "invalid UTF-8 data",
      "extra field too long",
      "date not in range 1980-2099",
      "filename too long",
      "stream finishing",
      "invalid zip data",
    ],
    P = function (o, e, t) {
      var n = new Error(e || Rn[o]);
      if (
        ((n.code = o),
        Error.captureStackTrace && Error.captureStackTrace(n, P),
        !t)
      )
        throw n;
      return n;
    },
    Dn = function (o, e, t, n) {
      var i = o.length,
        r = n ? n.length : 0;
      if (!i || (e.f && !e.l)) return t || new z(0);
      var s = !t || e.i != 2,
        a = e.i;
      t || (t = new z(i * 3));
      var l = function (Dt) {
          var Lt = t.length;
          if (Dt > Lt) {
            var Vt = new z(Math.max(Lt * 2, Dt));
            Vt.set(t), (t = Vt);
          }
        },
        f = e.f || 0,
        c = e.p || 0,
        p = e.b || 0,
        g = e.l,
        m = e.d,
        v = e.m,
        L = e.n,
        x = i * 8;
      do {
        if (!g) {
          f = $(o, c, 1);
          var y = $(o, c + 1, 3);
          if (((c += 3), y))
            if (y == 1) (g = Un), (m = En), (v = 9), (L = 5);
            else if (y == 2) {
              var E = $(o, c, 31) + 257,
                V = $(o, c + 10, 15) + 4,
                j = E + $(o, c + 5, 31) + 1;
              c += 14;
              for (var S = new z(j), A = new z(19), D = 0; D < V; ++D)
                A[xn[D]] = $(o, c + D * 3, 7);
              c += V * 3;
              for (
                var Ut = Ee(A), yn = (1 << Ut) - 1, wn = oe(A, Ut, 1), D = 0;
                D < j;

              ) {
                var Et = wn[$(o, c, yn)];
                c += Et & 15;
                var w = Et >> 4;
                if (w < 16) S[D++] = w;
                else {
                  var _ = 0,
                    ce = 0;
                  for (
                    w == 16
                      ? ((ce = 3 + $(o, c, 3)), (c += 2), (_ = S[D - 1]))
                      : w == 17
                      ? ((ce = 3 + $(o, c, 7)), (c += 3))
                      : w == 18 && ((ce = 11 + $(o, c, 127)), (c += 7));
                    ce--;

                  )
                    S[D++] = _;
                }
              }
              var Ft = S.subarray(0, E),
                W = S.subarray(E);
              (v = Ee(Ft)), (L = Ee(W)), (g = oe(Ft, v, 1)), (m = oe(W, L, 1));
            } else P(1);
          else {
            var w = Fn(c) + 4,
              G = o[w - 4] | (o[w - 3] << 8),
              F = w + G;
            if (F > i) {
              a && P(0);
              break;
            }
            s && l(p + G),
              t.set(o.subarray(w, F), p),
              (e.b = p += G),
              (e.p = c = F * 8),
              (e.f = f);
            continue;
          }
          if (c > x) {
            a && P(0);
            break;
          }
        }
        s && l(p + 131072);
        for (var vn = (1 << v) - 1, bn = (1 << L) - 1, xe = c; ; xe = c) {
          var _ = g[Fe(o, c) & vn],
            Q = _ >> 4;
          if (((c += _ & 15), c > x)) {
            a && P(0);
            break;
          }
          if ((_ || P(2), Q < 256)) t[p++] = Q;
          else if (Q == 256) {
            (xe = c), (g = null);
            break;
          } else {
            var Ot = Q - 254;
            if (Q > 264) {
              var D = Q - 257,
                re = St[D];
              (Ot = $(o, c, (1 << re) - 1) + zt[D]), (c += re);
            }
            var Ie = m[Fe(o, c) & bn],
              Be = Ie >> 4;
            Ie || P(3), (c += Ie & 15);
            var W = Bn[Be];
            if (Be > 3) {
              var re = At[Be];
              (W += Fe(o, c) & ((1 << re) - 1)), (c += re);
            }
            if (c > x) {
              a && P(0);
              break;
            }
            s && l(p + 131072);
            var Ue = p + Ot;
            if (p < W) {
              var Rt = r - W,
                kn = Math.min(W, Ue);
              for (Rt + p < 0 && P(3); p < kn; ++p) t[p] = n[Rt + p];
            }
            for (; p < Ue; p += 4)
              (t[p] = t[p - W]),
                (t[p + 1] = t[p + 1 - W]),
                (t[p + 2] = t[p + 2 - W]),
                (t[p + 3] = t[p + 3 - W]);
            p = Ue;
          }
        }
        (e.l = g),
          (e.p = xe),
          (e.b = p),
          (e.f = f),
          g && ((f = 1), (e.m = v), (e.d = m), (e.n = L));
      } while (!f);
      return p == t.length ? t : On(t, 0, p);
    };
  var Ln = new z(0);
  var Vn = function (o) {
      (o[0] != 31 || o[1] != 139 || o[2] != 8) && P(6, "invalid gzip data");
      var e = o[3],
        t = 10;
      e & 4 && (t += (o[10] | (o[11] << 8)) + 2);
      for (var n = ((e >> 3) & 1) + ((e >> 4) & 1); n > 0; n -= !o[t++]);
      return t + (e & 2);
    },
    Sn = function (o) {
      var e = o.length;
      return (
        (o[e - 4] | (o[e - 3] << 8) | (o[e - 2] << 16) | (o[e - 1] << 24)) >>> 0
      );
    };
  function Pt(o, e) {
    var t = Vn(o);
    return (
      t + 8 > o.length && P(6, "invalid gzip data"),
      Dn(
        o.subarray(t, -8),
        { i: 2 },
        (e && e.out) || new z(Sn(o)),
        e && e.dictionary
      )
    );
  }
  var An = typeof TextDecoder < "u" && new TextDecoder(),
    Mn = 0;
  try {
    An.decode(Ln, { stream: !0 }), (Mn = 1);
  } catch {}
  function q(o) {
    let e = typeof o;
    if (e == "object") {
      if (Array.isArray(o)) return "array";
      if (o === null) return "null";
    }
    return e;
  }
  function te(o) {
    return o !== null && typeof o == "object" && !Array.isArray(o);
  }
  var X =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        ""
      ),
    he = [];
  for (let o = 0; o < X.length; o++) he[X[o].charCodeAt(0)] = o;
  he["-".charCodeAt(0)] = X.indexOf("+");
  he["_".charCodeAt(0)] = X.indexOf("/");
  function jt(o) {
    let e = (o.length * 3) / 4;
    o[o.length - 2] == "=" ? (e -= 2) : o[o.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e),
      n = 0,
      i = 0,
      r,
      s = 0;
    for (let a = 0; a < o.length; a++) {
      if (((r = he[o.charCodeAt(a)]), r === void 0))
        switch (o[a]) {
          case "=":
            i = 0;
          case `
`:
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      switch (i) {
        case 0:
          (s = r), (i = 1);
          break;
        case 1:
          (t[n++] = (s << 2) | ((r & 48) >> 4)), (s = r), (i = 2);
          break;
        case 2:
          (t[n++] = ((s & 15) << 4) | ((r & 60) >> 2)), (s = r), (i = 3);
          break;
        case 3:
          (t[n++] = ((s & 3) << 6) | r), (i = 0);
          break;
      }
    }
    if (i == 1) throw Error("invalid base64 string.");
    return t.subarray(0, n);
  }
  function Jt(o) {
    let e = "",
      t = 0,
      n,
      i = 0;
    for (let r = 0; r < o.length; r++)
      switch (((n = o[r]), t)) {
        case 0:
          (e += X[n >> 2]), (i = (n & 3) << 4), (t = 1);
          break;
        case 1:
          (e += X[i | (n >> 4)]), (i = (n & 15) << 2), (t = 2);
          break;
        case 2:
          (e += X[i | (n >> 6)]), (e += X[n & 63]), (t = 0);
          break;
      }
    return t && ((e += X[i]), (e += "="), t == 1 && (e += "=")), e;
  }
  var d;
  (function (o) {
    (o.symbol = Symbol.for("protobuf-ts/unknown")),
      (o.onRead = (t, n, i, r, s) => {
        (e(n) ? n[o.symbol] : (n[o.symbol] = [])).push({
          no: i,
          wireType: r,
          data: s,
        });
      }),
      (o.onWrite = (t, n, i) => {
        for (let { no: r, wireType: s, data: a } of o.list(n))
          i.tag(r, s).raw(a);
      }),
      (o.list = (t, n) => {
        if (e(t)) {
          let i = t[o.symbol];
          return n ? i.filter((r) => r.no == n) : i;
        }
        return [];
      }),
      (o.last = (t, n) => o.list(t, n).slice(-1)[0]);
    let e = (t) => t && Array.isArray(t[o.symbol]);
  })(d || (d = {}));
  var h;
  (function (o) {
    (o[(o.Varint = 0)] = "Varint"),
      (o[(o.Bit64 = 1)] = "Bit64"),
      (o[(o.LengthDelimited = 2)] = "LengthDelimited"),
      (o[(o.StartGroup = 3)] = "StartGroup"),
      (o[(o.EndGroup = 4)] = "EndGroup"),
      (o[(o.Bit32 = 5)] = "Bit32");
  })(h || (h = {}));
  function Gt() {
    let o = 0,
      e = 0;
    for (let n = 0; n < 28; n += 7) {
      let i = this.buf[this.pos++];
      if (((o |= (i & 127) << n), !(i & 128)))
        return this.assertBounds(), [o, e];
    }
    let t = this.buf[this.pos++];
    if (((o |= (t & 15) << 28), (e = (t & 112) >> 4), !(t & 128)))
      return this.assertBounds(), [o, e];
    for (let n = 3; n <= 31; n += 7) {
      let i = this.buf[this.pos++];
      if (((e |= (i & 127) << n), !(i & 128)))
        return this.assertBounds(), [o, e];
    }
    throw new Error("invalid varint");
  }
  function me(o, e, t) {
    for (let r = 0; r < 28; r = r + 7) {
      let s = o >>> r,
        a = !(!(s >>> 7) && e == 0),
        l = (a ? s | 128 : s) & 255;
      if ((t.push(l), !a)) return;
    }
    let n = ((o >>> 28) & 15) | ((e & 7) << 4),
      i = !!(e >> 3);
    if ((t.push((i ? n | 128 : n) & 255), !!i)) {
      for (let r = 3; r < 31; r = r + 7) {
        let s = e >>> r,
          a = !!(s >>> 7),
          l = (a ? s | 128 : s) & 255;
        if ((t.push(l), !a)) return;
      }
      t.push((e >>> 31) & 1);
    }
  }
  var pe = 65536 * 65536;
  function Re(o) {
    let e = o[0] == "-";
    e && (o = o.slice(1));
    let t = 1e6,
      n = 0,
      i = 0;
    function r(s, a) {
      let l = Number(o.slice(s, a));
      (i *= t),
        (n = n * t + l),
        n >= pe && ((i = i + ((n / pe) | 0)), (n = n % pe));
    }
    return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, n, i];
  }
  function de(o, e) {
    if (e <= 2097151) return "" + (pe * e + (o >>> 0));
    let t = o & 16777215,
      n = (((o >>> 24) | (e << 8)) >>> 0) & 16777215,
      i = (e >> 16) & 65535,
      r = t + n * 6777216 + i * 6710656,
      s = n + i * 8147497,
      a = i * 2,
      l = 1e7;
    r >= l && ((s += Math.floor(r / l)), (r %= l)),
      s >= l && ((a += Math.floor(s / l)), (s %= l));
    function f(c, p) {
      let g = c ? String(c) : "";
      return p ? "0000000".slice(g.length) + g : g;
    }
    return f(a, 0) + f(s, a) + f(r, 1);
  }
  function De(o, e) {
    if (o >= 0) {
      for (; o > 127; ) e.push((o & 127) | 128), (o = o >>> 7);
      e.push(o);
    } else {
      for (let t = 0; t < 9; t++) e.push((o & 127) | 128), (o = o >> 7);
      e.push(1);
    }
  }
  function Kt() {
    let o = this.buf[this.pos++],
      e = o & 127;
    if (!(o & 128)) return this.assertBounds(), e;
    if (((o = this.buf[this.pos++]), (e |= (o & 127) << 7), !(o & 128)))
      return this.assertBounds(), e;
    if (((o = this.buf[this.pos++]), (e |= (o & 127) << 14), !(o & 128)))
      return this.assertBounds(), e;
    if (((o = this.buf[this.pos++]), (e |= (o & 127) << 21), !(o & 128)))
      return this.assertBounds(), e;
    (o = this.buf[this.pos++]), (e |= (o & 15) << 28);
    for (let t = 5; o & 128 && t < 10; t++) o = this.buf[this.pos++];
    if (o & 128) throw new Error("invalid varint");
    return this.assertBounds(), e >>> 0;
  }
  function Cn() {
    let o = new DataView(new ArrayBuffer(8));
    return globalThis.BigInt !== void 0 &&
      typeof o.getBigInt64 == "function" &&
      typeof o.getBigUint64 == "function" &&
      typeof o.setBigInt64 == "function" &&
      typeof o.setBigUint64 == "function"
      ? {
          MIN: BigInt("-9223372036854775808"),
          MAX: BigInt("9223372036854775807"),
          UMIN: BigInt("0"),
          UMAX: BigInt("18446744073709551615"),
          C: BigInt,
          V: o,
        }
      : void 0;
  }
  var O = Cn();
  function Xt(o) {
    if (!o)
      throw new Error(
        "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support"
      );
  }
  var Zt = /^-?[0-9]+$/,
    ge = 65536 * 65536,
    ye = class {
      constructor(e, t) {
        (this.lo = e | 0), (this.hi = t | 0);
      }
      isZero() {
        return this.lo == 0 && this.hi == 0;
      }
      toNumber() {
        let e = this.hi * ge + (this.lo >>> 0);
        if (!Number.isSafeInteger(e))
          throw new Error("cannot convert to safe number");
        return e;
      }
    },
    R = class extends ye {
      static from(e) {
        if (O)
          switch (typeof e) {
            case "string":
              if (e == "0") return this.ZERO;
              if (e == "") throw new Error("string is no integer");
              e = O.C(e);
            case "number":
              if (e === 0) return this.ZERO;
              e = O.C(e);
            case "bigint":
              if (!e) return this.ZERO;
              if (e < O.UMIN) throw new Error("signed value for ulong");
              if (e > O.UMAX) throw new Error("ulong too large");
              return (
                O.V.setBigUint64(0, e, !0),
                new R(O.V.getInt32(0, !0), O.V.getInt32(4, !0))
              );
          }
        else
          switch (typeof e) {
            case "string":
              if (e == "0") return this.ZERO;
              if (((e = e.trim()), !Zt.test(e)))
                throw new Error("string is no integer");
              let [t, n, i] = Re(e);
              if (t) throw new Error("signed value");
              return new R(n, i);
            case "number":
              if (e == 0) return this.ZERO;
              if (!Number.isSafeInteger(e))
                throw new Error("number is no integer");
              if (e < 0) throw new Error("signed value for ulong");
              return new R(e, e / ge);
          }
        throw new Error("unknown value " + typeof e);
      }
      toString() {
        return O ? this.toBigInt().toString() : de(this.lo, this.hi);
      }
      toBigInt() {
        return (
          Xt(O),
          O.V.setInt32(0, this.lo, !0),
          O.V.setInt32(4, this.hi, !0),
          O.V.getBigUint64(0, !0)
        );
      }
    };
  R.ZERO = new R(0, 0);
  var I = class extends ye {
    static from(e) {
      if (O)
        switch (typeof e) {
          case "string":
            if (e == "0") return this.ZERO;
            if (e == "") throw new Error("string is no integer");
            e = O.C(e);
          case "number":
            if (e === 0) return this.ZERO;
            e = O.C(e);
          case "bigint":
            if (!e) return this.ZERO;
            if (e < O.MIN) throw new Error("ulong too small");
            if (e > O.MAX) throw new Error("ulong too large");
            return (
              O.V.setBigInt64(0, e, !0),
              new I(O.V.getInt32(0, !0), O.V.getInt32(4, !0))
            );
        }
      else
        switch (typeof e) {
          case "string":
            if (e == "0") return this.ZERO;
            if (((e = e.trim()), !Zt.test(e)))
              throw new Error("string is no integer");
            let [t, n, i] = Re(e),
              r = new I(n, i);
            return t ? r.negate() : r;
          case "number":
            if (e == 0) return this.ZERO;
            if (!Number.isSafeInteger(e))
              throw new Error("number is no integer");
            return e > 0 ? new I(e, e / ge) : new I(-e, -e / ge).negate();
        }
      throw new Error("unknown value " + typeof e);
    }
    isNegative() {
      return (this.hi & 2147483648) !== 0;
    }
    negate() {
      let e = ~this.hi,
        t = this.lo;
      return t ? (t = ~t + 1) : (e += 1), new I(t, e);
    }
    toString() {
      if (O) return this.toBigInt().toString();
      if (this.isNegative()) {
        let e = this.negate();
        return "-" + de(e.lo, e.hi);
      }
      return de(this.lo, this.hi);
    }
    toBigInt() {
      return (
        Xt(O),
        O.V.setInt32(0, this.lo, !0),
        O.V.setInt32(4, this.hi, !0),
        O.V.getBigInt64(0, !0)
      );
    }
  };
  I.ZERO = new I(0, 0);
  var qt = { readUnknownField: !0, readerFactory: (o) => new Le(o) };
  function Yt(o) {
    return o ? Object.assign(Object.assign({}, qt), o) : qt;
  }
  var Le = class {
    constructor(e, t) {
      (this.varint64 = Gt),
        (this.uint32 = Kt),
        (this.buf = e),
        (this.len = e.length),
        (this.pos = 0),
        (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (this.textDecoder =
          t ?? new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }));
    }
    tag() {
      let e = this.uint32(),
        t = e >>> 3,
        n = e & 7;
      if (t <= 0 || n < 0 || n > 5)
        throw new Error("illegal tag: field no " + t + " wire type " + n);
      return [t, n];
    }
    skip(e) {
      let t = this.pos;
      switch (e) {
        case h.Varint:
          for (; this.buf[this.pos++] & 128; );
          break;
        case h.Bit64:
          this.pos += 4;
        case h.Bit32:
          this.pos += 4;
          break;
        case h.LengthDelimited:
          let n = this.uint32();
          this.pos += n;
          break;
        case h.StartGroup:
          let i;
          for (; (i = this.tag()[1]) !== h.EndGroup; ) this.skip(i);
          break;
        default:
          throw new Error("cant skip wire type " + e);
      }
      return this.assertBounds(), this.buf.subarray(t, this.pos);
    }
    assertBounds() {
      if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
      return this.uint32() | 0;
    }
    sint32() {
      let e = this.uint32();
      return (e >>> 1) ^ -(e & 1);
    }
    int64() {
      return new I(...this.varint64());
    }
    uint64() {
      return new R(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        n = -(e & 1);
      return (
        (e = ((e >>> 1) | ((t & 1) << 31)) ^ n),
        (t = (t >>> 1) ^ n),
        new I(e, t)
      );
    }
    bool() {
      let [e, t] = this.varint64();
      return e !== 0 || t !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return new R(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return new I(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        t = this.pos;
      return (this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e);
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  };
  function k(o, e) {
    if (!o) throw new Error(e);
  }
  var zn = 34028234663852886e22,
    Wn = -34028234663852886e22,
    $n = 4294967295,
    Pn = 2147483647,
    jn = -2147483648;
  function Z(o) {
    if (typeof o != "number") throw new Error("invalid int 32: " + typeof o);
    if (!Number.isInteger(o) || o > Pn || o < jn)
      throw new Error("invalid int 32: " + o);
  }
  function Y(o) {
    if (typeof o != "number") throw new Error("invalid uint 32: " + typeof o);
    if (!Number.isInteger(o) || o > $n || o < 0)
      throw new Error("invalid uint 32: " + o);
  }
  function ne(o) {
    if (typeof o != "number") throw new Error("invalid float 32: " + typeof o);
    if (Number.isFinite(o) && (o > zn || o < Wn))
      throw new Error("invalid float 32: " + o);
  }
  var Ht = { writeUnknownFields: !0, writerFactory: () => new Ve() };
  function _t(o) {
    return o ? Object.assign(Object.assign({}, Ht), o) : Ht;
  }
  var Ve = class {
    constructor(e) {
      (this.stack = []),
        (this.textEncoder = e ?? new TextEncoder()),
        (this.chunks = []),
        (this.buf = []);
    }
    finish() {
      this.chunks.push(new Uint8Array(this.buf));
      let e = 0;
      for (let i = 0; i < this.chunks.length; i++) e += this.chunks[i].length;
      let t = new Uint8Array(e),
        n = 0;
      for (let i = 0; i < this.chunks.length; i++)
        t.set(this.chunks[i], n), (n += this.chunks[i].length);
      return (this.chunks = []), t;
    }
    fork() {
      return (
        this.stack.push({ chunks: this.chunks, buf: this.buf }),
        (this.chunks = []),
        (this.buf = []),
        this
      );
    }
    join() {
      let e = this.finish(),
        t = this.stack.pop();
      if (!t) throw new Error("invalid state, fork stack empty");
      return (
        (this.chunks = t.chunks),
        (this.buf = t.buf),
        this.uint32(e.byteLength),
        this.raw(e)
      );
    }
    tag(e, t) {
      return this.uint32(((e << 3) | t) >>> 0);
    }
    raw(e) {
      return (
        this.buf.length &&
          (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
        this.chunks.push(e),
        this
      );
    }
    uint32(e) {
      for (Y(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
      return this.buf.push(e), this;
    }
    int32(e) {
      return Z(e), De(e, this.buf), this;
    }
    bool(e) {
      return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
      return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
      let t = this.textEncoder.encode(e);
      return this.uint32(t.byteLength), this.raw(t);
    }
    float(e) {
      ne(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
    }
    double(e) {
      let t = new Uint8Array(8);
      return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
    }
    fixed32(e) {
      Y(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
    }
    sfixed32(e) {
      Z(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
    }
    sint32(e) {
      return Z(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), De(e, this.buf), this;
    }
    sfixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        i = I.from(e);
      return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t);
    }
    fixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        i = R.from(e);
      return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t);
    }
    int64(e) {
      let t = I.from(e);
      return me(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
      let t = I.from(e),
        n = t.hi >> 31,
        i = (t.lo << 1) ^ n,
        r = ((t.hi << 1) | (t.lo >>> 31)) ^ n;
      return me(i, r, this.buf), this;
    }
    uint64(e) {
      let t = R.from(e);
      return me(t.lo, t.hi, this.buf), this;
    }
  };
  var Qt = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    },
    en = { ignoreUnknownFields: !1 };
  function Se(o) {
    return o ? Object.assign(Object.assign({}, en), o) : en;
  }
  function se(o) {
    return o ? Object.assign(Object.assign({}, Qt), o) : Qt;
  }
  var B = Symbol.for("protobuf-ts/message-type");
  function Ae(o) {
    let e = !1,
      t = [];
    for (let n = 0; n < o.length; n++) {
      let i = o.charAt(n);
      i == "_"
        ? (e = !0)
        : /\d/.test(i)
        ? (t.push(i), (e = !0))
        : e
        ? (t.push(i.toUpperCase()), (e = !1))
        : n == 0
        ? t.push(i.toLowerCase())
        : t.push(i);
    }
    return t.join("");
  }
  var u;
  (function (o) {
    (o[(o.DOUBLE = 1)] = "DOUBLE"),
      (o[(o.FLOAT = 2)] = "FLOAT"),
      (o[(o.INT64 = 3)] = "INT64"),
      (o[(o.UINT64 = 4)] = "UINT64"),
      (o[(o.INT32 = 5)] = "INT32"),
      (o[(o.FIXED64 = 6)] = "FIXED64"),
      (o[(o.FIXED32 = 7)] = "FIXED32"),
      (o[(o.BOOL = 8)] = "BOOL"),
      (o[(o.STRING = 9)] = "STRING"),
      (o[(o.BYTES = 12)] = "BYTES"),
      (o[(o.UINT32 = 13)] = "UINT32"),
      (o[(o.SFIXED32 = 15)] = "SFIXED32"),
      (o[(o.SFIXED64 = 16)] = "SFIXED64"),
      (o[(o.SINT32 = 17)] = "SINT32"),
      (o[(o.SINT64 = 18)] = "SINT64");
  })(u || (u = {}));
  var M;
  (function (o) {
    (o[(o.BIGINT = 0)] = "BIGINT"),
      (o[(o.STRING = 1)] = "STRING"),
      (o[(o.NUMBER = 2)] = "NUMBER");
  })(M || (M = {}));
  var le;
  (function (o) {
    (o[(o.NO = 0)] = "NO"),
      (o[(o.PACKED = 1)] = "PACKED"),
      (o[(o.UNPACKED = 2)] = "UNPACKED");
  })(le || (le = {}));
  function tn(o) {
    var e, t, n, i;
    return (
      (o.localName =
        (e = o.localName) !== null && e !== void 0 ? e : Ae(o.name)),
      (o.jsonName = (t = o.jsonName) !== null && t !== void 0 ? t : Ae(o.name)),
      (o.repeat = (n = o.repeat) !== null && n !== void 0 ? n : le.NO),
      (o.opt =
        (i = o.opt) !== null && i !== void 0
          ? i
          : o.repeat || o.oneof
          ? !1
          : o.kind == "message"),
      o
    );
  }
  function nn(o) {
    if (typeof o != "object" || o === null || !o.hasOwnProperty("oneofKind"))
      return !1;
    switch (typeof o.oneofKind) {
      case "string":
        return o[o.oneofKind] === void 0 ? !1 : Object.keys(o).length == 2;
      case "undefined":
        return Object.keys(o).length == 1;
      default:
        return !1;
    }
  }
  var we = class {
    constructor(e) {
      var t;
      this.fields = (t = e.fields) !== null && t !== void 0 ? t : [];
    }
    prepare() {
      if (this.data) return;
      let e = [],
        t = [],
        n = [];
      for (let i of this.fields)
        if (i.oneof)
          n.includes(i.oneof) ||
            (n.push(i.oneof), e.push(i.oneof), t.push(i.oneof));
        else
          switch ((t.push(i.localName), i.kind)) {
            case "scalar":
            case "enum":
              (!i.opt || i.repeat) && e.push(i.localName);
              break;
            case "message":
              i.repeat && e.push(i.localName);
              break;
            case "map":
              e.push(i.localName);
              break;
          }
      this.data = { req: e, known: t, oneofs: Object.values(n) };
    }
    is(e, t, n = !1) {
      if (t < 0) return !0;
      if (e == null || typeof e != "object") return !1;
      this.prepare();
      let i = Object.keys(e),
        r = this.data;
      if (
        i.length < r.req.length ||
        r.req.some((s) => !i.includes(s)) ||
        (!n && i.some((s) => !r.known.includes(s)))
      )
        return !1;
      if (t < 1) return !0;
      for (let s of r.oneofs) {
        let a = e[s];
        if (!nn(a)) return !1;
        if (a.oneofKind === void 0) continue;
        let l = this.fields.find((f) => f.localName === a.oneofKind);
        if (!l || !this.field(a[a.oneofKind], l, n, t)) return !1;
      }
      for (let s of this.fields)
        if (s.oneof === void 0 && !this.field(e[s.localName], s, n, t))
          return !1;
      return !0;
    }
    field(e, t, n, i) {
      let r = t.repeat;
      switch (t.kind) {
        case "scalar":
          return e === void 0
            ? t.opt
            : r
            ? this.scalars(e, t.T, i, t.L)
            : this.scalar(e, t.T, t.L);
        case "enum":
          return e === void 0
            ? t.opt
            : r
            ? this.scalars(e, u.INT32, i)
            : this.scalar(e, u.INT32);
        case "message":
          return e === void 0
            ? !0
            : r
            ? this.messages(e, t.T(), n, i)
            : this.message(e, t.T(), n, i);
        case "map":
          if (typeof e != "object" || e === null) return !1;
          if (i < 2) return !0;
          if (!this.mapKeys(e, t.K, i)) return !1;
          switch (t.V.kind) {
            case "scalar":
              return this.scalars(Object.values(e), t.V.T, i, t.V.L);
            case "enum":
              return this.scalars(Object.values(e), u.INT32, i);
            case "message":
              return this.messages(Object.values(e), t.V.T(), n, i);
          }
          break;
      }
      return !0;
    }
    message(e, t, n, i) {
      return n ? t.isAssignable(e, i) : t.is(e, i);
    }
    messages(e, t, n, i) {
      if (!Array.isArray(e)) return !1;
      if (i < 2) return !0;
      if (n) {
        for (let r = 0; r < e.length && r < i; r++)
          if (!t.isAssignable(e[r], i - 1)) return !1;
      } else
        for (let r = 0; r < e.length && r < i; r++)
          if (!t.is(e[r], i - 1)) return !1;
      return !0;
    }
    scalar(e, t, n) {
      let i = typeof e;
      switch (t) {
        case u.UINT64:
        case u.FIXED64:
        case u.INT64:
        case u.SFIXED64:
        case u.SINT64:
          switch (n) {
            case M.BIGINT:
              return i == "bigint";
            case M.NUMBER:
              return i == "number" && !isNaN(e);
            default:
              return i == "string";
          }
        case u.BOOL:
          return i == "boolean";
        case u.STRING:
          return i == "string";
        case u.BYTES:
          return e instanceof Uint8Array;
        case u.DOUBLE:
        case u.FLOAT:
          return i == "number" && !isNaN(e);
        default:
          return i == "number" && Number.isInteger(e);
      }
    }
    scalars(e, t, n, i) {
      if (!Array.isArray(e)) return !1;
      if (n < 2) return !0;
      if (Array.isArray(e)) {
        for (let r = 0; r < e.length && r < n; r++)
          if (!this.scalar(e[r], t, i)) return !1;
      }
      return !0;
    }
    mapKeys(e, t, n) {
      let i = Object.keys(e);
      switch (t) {
        case u.INT32:
        case u.FIXED32:
        case u.SFIXED32:
        case u.SINT32:
        case u.UINT32:
          return this.scalars(
            i.slice(0, n).map((r) => parseInt(r)),
            t,
            n
          );
        case u.BOOL:
          return this.scalars(
            i
              .slice(0, n)
              .map((r) => (r == "true" ? !0 : r == "false" ? !1 : r)),
            t,
            n
          );
        default:
          return this.scalars(i, t, n, M.STRING);
      }
    }
  };
  function C(o, e) {
    switch (e) {
      case M.BIGINT:
        return o.toBigInt();
      case M.NUMBER:
        return o.toNumber();
      default:
        return o.toString();
    }
  }
  var ve = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (this.fMap === void 0) {
        this.fMap = {};
        let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
        for (let n of t)
          (this.fMap[n.name] = n),
            (this.fMap[n.jsonName] = n),
            (this.fMap[n.localName] = n);
      }
    }
    assert(e, t, n) {
      if (!e) {
        let i = q(n);
        throw (
          ((i == "number" || i == "boolean") && (i = n.toString()),
          new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${t}`))
        );
      }
    }
    read(e, t, n) {
      this.prepare();
      let i = [];
      for (let [r, s] of Object.entries(e)) {
        let a = this.fMap[r];
        if (!a) {
          if (!n.ignoreUnknownFields)
            throw new Error(
              `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`
            );
          continue;
        }
        let l = a.localName,
          f;
        if (a.oneof) {
          if (i.includes(a.oneof))
            throw new Error(
              `Multiple members of the oneof group "${a.oneof}" of ${this.info.typeName} are present in JSON.`
            );
          i.push(a.oneof), (f = t[a.oneof] = { oneofKind: l });
        } else f = t;
        if (a.kind == "map") {
          if (s === null) continue;
          this.assert(te(s), a.name, s);
          let c = f[l];
          for (let [p, g] of Object.entries(s)) {
            this.assert(g !== null, a.name + " map value", null);
            let m;
            switch (a.V.kind) {
              case "message":
                m = a.V.T().internalJsonRead(g, n);
                break;
              case "enum":
                if (
                  ((m = this.enum(a.V.T(), g, a.name, n.ignoreUnknownFields)),
                  m === !1)
                )
                  continue;
                break;
              case "scalar":
                m = this.scalar(g, a.V.T, a.V.L, a.name);
                break;
            }
            this.assert(m !== void 0, a.name + " map value", g);
            let v = p;
            a.K == u.BOOL && (v = v == "true" ? !0 : v == "false" ? !1 : v),
              (v = this.scalar(v, a.K, M.STRING, a.name).toString()),
              (c[v] = m);
          }
        } else if (a.repeat) {
          if (s === null) continue;
          this.assert(Array.isArray(s), a.name, s);
          let c = f[l];
          for (let p of s) {
            this.assert(p !== null, a.name, null);
            let g;
            switch (a.kind) {
              case "message":
                g = a.T().internalJsonRead(p, n);
                break;
              case "enum":
                if (
                  ((g = this.enum(a.T(), p, a.name, n.ignoreUnknownFields)),
                  g === !1)
                )
                  continue;
                break;
              case "scalar":
                g = this.scalar(p, a.T, a.L, a.name);
                break;
            }
            this.assert(g !== void 0, a.name, s), c.push(g);
          }
        } else
          switch (a.kind) {
            case "message":
              if (s === null && a.T().typeName != "google.protobuf.Value") {
                this.assert(
                  a.oneof === void 0,
                  a.name + " (oneof member)",
                  null
                );
                continue;
              }
              f[l] = a.T().internalJsonRead(s, n, f[l]);
              break;
            case "enum":
              let c = this.enum(a.T(), s, a.name, n.ignoreUnknownFields);
              if (c === !1) continue;
              f[l] = c;
              break;
            case "scalar":
              f[l] = this.scalar(s, a.T, a.L, a.name);
              break;
          }
      }
    }
    enum(e, t, n, i) {
      if (
        (e[0] == "google.protobuf.NullValue" &&
          k(
            t === null,
            `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`
          ),
        t === null)
      )
        return 0;
      switch (typeof t) {
        case "number":
          return (
            k(
              Number.isInteger(t),
              `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`
            ),
            t
          );
        case "string":
          let r = t;
          e[2] &&
            t.substring(0, e[2].length) === e[2] &&
            (r = t.substring(e[2].length));
          let s = e[1][r];
          return typeof s > "u" && i
            ? !1
            : (k(
                typeof s == "number",
                `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`
              ),
              s);
      }
      k(
        !1,
        `Unable to parse field ${
          this.info.typeName
        }#${n}, cannot parse enum value from ${typeof t}".`
      );
    }
    scalar(e, t, n, i) {
      let r;
      try {
        switch (t) {
          case u.DOUBLE:
          case u.FLOAT:
            if (e === null) return 0;
            if (e === "NaN") return Number.NaN;
            if (e === "Infinity") return Number.POSITIVE_INFINITY;
            if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (e === "") {
              r = "empty string";
              break;
            }
            if (typeof e == "string" && e.trim().length !== e.length) {
              r = "extra whitespace";
              break;
            }
            if (typeof e != "string" && typeof e != "number") break;
            let s = Number(e);
            if (Number.isNaN(s)) {
              r = "not a number";
              break;
            }
            if (!Number.isFinite(s)) {
              r = "too large or small";
              break;
            }
            return t == u.FLOAT && ne(s), s;
          case u.INT32:
          case u.FIXED32:
          case u.SFIXED32:
          case u.SINT32:
          case u.UINT32:
            if (e === null) return 0;
            let a;
            if (
              (typeof e == "number"
                ? (a = e)
                : e === ""
                ? (r = "empty string")
                : typeof e == "string" &&
                  (e.trim().length !== e.length
                    ? (r = "extra whitespace")
                    : (a = Number(e))),
              a === void 0)
            )
              break;
            return t == u.UINT32 ? Y(a) : Z(a), a;
          case u.INT64:
          case u.SFIXED64:
          case u.SINT64:
            if (e === null) return C(I.ZERO, n);
            if (typeof e != "number" && typeof e != "string") break;
            return C(I.from(e), n);
          case u.FIXED64:
          case u.UINT64:
            if (e === null) return C(R.ZERO, n);
            if (typeof e != "number" && typeof e != "string") break;
            return C(R.from(e), n);
          case u.BOOL:
            if (e === null) return !1;
            if (typeof e != "boolean") break;
            return e;
          case u.STRING:
            if (e === null) return "";
            if (typeof e != "string") {
              r = "extra whitespace";
              break;
            }
            try {
              encodeURIComponent(e);
            } catch (l) {
              l = "invalid UTF8";
              break;
            }
            return e;
          case u.BYTES:
            if (e === null || e === "") return new Uint8Array(0);
            if (typeof e != "string") break;
            return jt(e);
        }
      } catch (s) {
        r = s.message;
      }
      this.assert(!1, i + (r ? " - " + r : ""), e);
    }
  };
  var be = class {
    constructor(e) {
      var t;
      this.fields = (t = e.fields) !== null && t !== void 0 ? t : [];
    }
    write(e, t) {
      let n = {},
        i = e;
      for (let r of this.fields) {
        if (!r.oneof) {
          let f = this.field(r, i[r.localName], t);
          f !== void 0 && (n[t.useProtoFieldName ? r.name : r.jsonName] = f);
          continue;
        }
        let s = i[r.oneof];
        if (s.oneofKind !== r.localName) continue;
        let a =
            r.kind == "scalar" || r.kind == "enum"
              ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 })
              : t,
          l = this.field(r, s[r.localName], a);
        k(l !== void 0), (n[t.useProtoFieldName ? r.name : r.jsonName] = l);
      }
      return n;
    }
    field(e, t, n) {
      let i;
      if (e.kind == "map") {
        k(typeof t == "object" && t !== null);
        let r = {};
        switch (e.V.kind) {
          case "scalar":
            for (let [l, f] of Object.entries(t)) {
              let c = this.scalar(e.V.T, f, e.name, !1, !0);
              k(c !== void 0), (r[l.toString()] = c);
            }
            break;
          case "message":
            let s = e.V.T();
            for (let [l, f] of Object.entries(t)) {
              let c = this.message(s, f, e.name, n);
              k(c !== void 0), (r[l.toString()] = c);
            }
            break;
          case "enum":
            let a = e.V.T();
            for (let [l, f] of Object.entries(t)) {
              k(f === void 0 || typeof f == "number");
              let c = this.enum(a, f, e.name, !1, !0, n.enumAsInteger);
              k(c !== void 0), (r[l.toString()] = c);
            }
            break;
        }
        (n.emitDefaultValues || Object.keys(r).length > 0) && (i = r);
      } else if (e.repeat) {
        k(Array.isArray(t));
        let r = [];
        switch (e.kind) {
          case "scalar":
            for (let l = 0; l < t.length; l++) {
              let f = this.scalar(e.T, t[l], e.name, e.opt, !0);
              k(f !== void 0), r.push(f);
            }
            break;
          case "enum":
            let s = e.T();
            for (let l = 0; l < t.length; l++) {
              k(t[l] === void 0 || typeof t[l] == "number");
              let f = this.enum(s, t[l], e.name, e.opt, !0, n.enumAsInteger);
              k(f !== void 0), r.push(f);
            }
            break;
          case "message":
            let a = e.T();
            for (let l = 0; l < t.length; l++) {
              let f = this.message(a, t[l], e.name, n);
              k(f !== void 0), r.push(f);
            }
            break;
        }
        (n.emitDefaultValues || r.length > 0 || n.emitDefaultValues) && (i = r);
      } else
        switch (e.kind) {
          case "scalar":
            i = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
            break;
          case "enum":
            i = this.enum(
              e.T(),
              t,
              e.name,
              e.opt,
              n.emitDefaultValues,
              n.enumAsInteger
            );
            break;
          case "message":
            i = this.message(e.T(), t, e.name, n);
            break;
        }
      return i;
    }
    enum(e, t, n, i, r, s) {
      if (e[0] == "google.protobuf.NullValue") return null;
      if (t === void 0) {
        k(i);
        return;
      }
      if (!(t === 0 && !r && !i))
        return (
          k(typeof t == "number"),
          k(Number.isInteger(t)),
          s || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        );
    }
    message(e, t, n, i) {
      return t === void 0
        ? i.emitDefaultValues
          ? null
          : void 0
        : e.internalJsonWrite(t, i);
    }
    scalar(e, t, n, i, r) {
      if (t === void 0) {
        k(i);
        return;
      }
      let s = r || i;
      switch (e) {
        case u.INT32:
        case u.SFIXED32:
        case u.SINT32:
          return t === 0 ? (s ? 0 : void 0) : (Z(t), t);
        case u.FIXED32:
        case u.UINT32:
          return t === 0 ? (s ? 0 : void 0) : (Y(t), t);
        case u.FLOAT:
          ne(t);
        case u.DOUBLE:
          return t === 0
            ? s
              ? 0
              : void 0
            : (k(typeof t == "number"),
              Number.isNaN(t)
                ? "NaN"
                : t === Number.POSITIVE_INFINITY
                ? "Infinity"
                : t === Number.NEGATIVE_INFINITY
                ? "-Infinity"
                : t);
        case u.STRING:
          return t === "" ? (s ? "" : void 0) : (k(typeof t == "string"), t);
        case u.BOOL:
          return t === !1 ? (s ? !1 : void 0) : (k(typeof t == "boolean"), t);
        case u.UINT64:
        case u.FIXED64:
          k(
            typeof t == "number" || typeof t == "string" || typeof t == "bigint"
          );
          let a = R.from(t);
          return a.isZero() && !s ? void 0 : a.toString();
        case u.INT64:
        case u.SFIXED64:
        case u.SINT64:
          k(
            typeof t == "number" || typeof t == "string" || typeof t == "bigint"
          );
          let l = I.from(t);
          return l.isZero() && !s ? void 0 : l.toString();
        case u.BYTES:
          return (
            k(t instanceof Uint8Array), t.byteLength ? Jt(t) : s ? "" : void 0
          );
      }
    }
  };
  function fe(o, e = M.STRING) {
    switch (o) {
      case u.BOOL:
        return !1;
      case u.UINT64:
      case u.FIXED64:
        return C(R.ZERO, e);
      case u.INT64:
      case u.SFIXED64:
      case u.SINT64:
        return C(I.ZERO, e);
      case u.DOUBLE:
      case u.FLOAT:
        return 0;
      case u.BYTES:
        return new Uint8Array(0);
      case u.STRING:
        return "";
      default:
        return 0;
    }
  }
  var ke = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (!this.fieldNoToField) {
        let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
        this.fieldNoToField = new Map(t.map((n) => [n.no, n]));
      }
    }
    read(e, t, n, i) {
      this.prepare();
      let r = i === void 0 ? e.len : e.pos + i;
      for (; e.pos < r; ) {
        let [s, a] = e.tag(),
          l = this.fieldNoToField.get(s);
        if (!l) {
          let g = n.readUnknownField;
          if (g == "throw")
            throw new Error(
              `Unknown field ${s} (wire type ${a}) for ${this.info.typeName}`
            );
          let m = e.skip(a);
          g !== !1 && (g === !0 ? d.onRead : g)(this.info.typeName, t, s, a, m);
          continue;
        }
        let f = t,
          c = l.repeat,
          p = l.localName;
        switch (
          (l.oneof &&
            ((f = f[l.oneof]),
            f.oneofKind !== p && (f = t[l.oneof] = { oneofKind: p })),
          l.kind)
        ) {
          case "scalar":
          case "enum":
            let g = l.kind == "enum" ? u.INT32 : l.T,
              m = l.kind == "scalar" ? l.L : void 0;
            if (c) {
              let x = f[p];
              if (a == h.LengthDelimited && g != u.STRING && g != u.BYTES) {
                let y = e.uint32() + e.pos;
                for (; e.pos < y; ) x.push(this.scalar(e, g, m));
              } else x.push(this.scalar(e, g, m));
            } else f[p] = this.scalar(e, g, m);
            break;
          case "message":
            if (c) {
              let x = f[p],
                y = l.T().internalBinaryRead(e, e.uint32(), n);
              x.push(y);
            } else f[p] = l.T().internalBinaryRead(e, e.uint32(), n, f[p]);
            break;
          case "map":
            let [v, L] = this.mapEntry(l, e, n);
            f[p][v] = L;
            break;
        }
      }
    }
    mapEntry(e, t, n) {
      let i = t.uint32(),
        r = t.pos + i,
        s,
        a;
      for (; t.pos < r; ) {
        let [l, f] = t.tag();
        switch (l) {
          case 1:
            e.K == u.BOOL
              ? (s = t.bool().toString())
              : (s = this.scalar(t, e.K, M.STRING));
            break;
          case 2:
            switch (e.V.kind) {
              case "scalar":
                a = this.scalar(t, e.V.T, e.V.L);
                break;
              case "enum":
                a = t.int32();
                break;
              case "message":
                a = e.V.T().internalBinaryRead(t, t.uint32(), n);
                break;
            }
            break;
          default:
            throw new Error(
              `Unknown field ${l} (wire type ${f}) in map entry for ${this.info.typeName}#${e.name}`
            );
        }
      }
      if (s === void 0) {
        let l = fe(e.K);
        s = e.K == u.BOOL ? l.toString() : l;
      }
      if (a === void 0)
        switch (e.V.kind) {
          case "scalar":
            a = fe(e.V.T, e.V.L);
            break;
          case "enum":
            a = 0;
            break;
          case "message":
            a = e.V.T().create();
            break;
        }
      return [s, a];
    }
    scalar(e, t, n) {
      switch (t) {
        case u.INT32:
          return e.int32();
        case u.STRING:
          return e.string();
        case u.BOOL:
          return e.bool();
        case u.DOUBLE:
          return e.double();
        case u.FLOAT:
          return e.float();
        case u.INT64:
          return C(e.int64(), n);
        case u.UINT64:
          return C(e.uint64(), n);
        case u.FIXED64:
          return C(e.fixed64(), n);
        case u.FIXED32:
          return e.fixed32();
        case u.BYTES:
          return e.bytes();
        case u.UINT32:
          return e.uint32();
        case u.SFIXED32:
          return e.sfixed32();
        case u.SFIXED64:
          return C(e.sfixed64(), n);
        case u.SINT32:
          return e.sint32();
        case u.SINT64:
          return C(e.sint64(), n);
      }
    }
  };
  var Te = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      if (!this.fields) {
        let e = this.info.fields ? this.info.fields.concat() : [];
        this.fields = e.sort((t, n) => t.no - n.no);
      }
    }
    write(e, t, n) {
      this.prepare();
      for (let r of this.fields) {
        let s,
          a,
          l = r.repeat,
          f = r.localName;
        if (r.oneof) {
          let c = e[r.oneof];
          if (c.oneofKind !== f) continue;
          (s = c[f]), (a = !0);
        } else (s = e[f]), (a = !1);
        switch (r.kind) {
          case "scalar":
          case "enum":
            let c = r.kind == "enum" ? u.INT32 : r.T;
            if (l)
              if ((k(Array.isArray(s)), l == le.PACKED))
                this.packed(t, c, r.no, s);
              else for (let p of s) this.scalar(t, c, r.no, p, !0);
            else
              s === void 0 ? k(r.opt) : this.scalar(t, c, r.no, s, a || r.opt);
            break;
          case "message":
            if (l) {
              k(Array.isArray(s));
              for (let p of s) this.message(t, n, r.T(), r.no, p);
            } else this.message(t, n, r.T(), r.no, s);
            break;
          case "map":
            k(typeof s == "object" && s !== null);
            for (let [p, g] of Object.entries(s)) this.mapEntry(t, n, r, p, g);
            break;
        }
      }
      let i = n.writeUnknownFields;
      i !== !1 && (i === !0 ? d.onWrite : i)(this.info.typeName, e, t);
    }
    mapEntry(e, t, n, i, r) {
      e.tag(n.no, h.LengthDelimited), e.fork();
      let s = i;
      switch (n.K) {
        case u.INT32:
        case u.FIXED32:
        case u.UINT32:
        case u.SFIXED32:
        case u.SINT32:
          s = Number.parseInt(i);
          break;
        case u.BOOL:
          k(i == "true" || i == "false"), (s = i == "true");
          break;
      }
      switch ((this.scalar(e, n.K, 1, s, !0), n.V.kind)) {
        case "scalar":
          this.scalar(e, n.V.T, 2, r, !0);
          break;
        case "enum":
          this.scalar(e, u.INT32, 2, r, !0);
          break;
        case "message":
          this.message(e, t, n.V.T(), 2, r);
          break;
      }
      e.join();
    }
    message(e, t, n, i, r) {
      r !== void 0 &&
        (n.internalBinaryWrite(r, e.tag(i, h.LengthDelimited).fork(), t),
        e.join());
    }
    scalar(e, t, n, i, r) {
      let [s, a, l] = this.scalarInfo(t, i);
      (!l || r) && (e.tag(n, s), e[a](i));
    }
    packed(e, t, n, i) {
      if (!i.length) return;
      k(t !== u.BYTES && t !== u.STRING), e.tag(n, h.LengthDelimited), e.fork();
      let [, r] = this.scalarInfo(t);
      for (let s = 0; s < i.length; s++) e[r](i[s]);
      e.join();
    }
    scalarInfo(e, t) {
      let n = h.Varint,
        i,
        r = t === void 0,
        s = t === 0;
      switch (e) {
        case u.INT32:
          i = "int32";
          break;
        case u.STRING:
          (s = r || !t.length), (n = h.LengthDelimited), (i = "string");
          break;
        case u.BOOL:
          (s = t === !1), (i = "bool");
          break;
        case u.UINT32:
          i = "uint32";
          break;
        case u.DOUBLE:
          (n = h.Bit64), (i = "double");
          break;
        case u.FLOAT:
          (n = h.Bit32), (i = "float");
          break;
        case u.INT64:
          (s = r || I.from(t).isZero()), (i = "int64");
          break;
        case u.UINT64:
          (s = r || R.from(t).isZero()), (i = "uint64");
          break;
        case u.FIXED64:
          (s = r || R.from(t).isZero()), (n = h.Bit64), (i = "fixed64");
          break;
        case u.BYTES:
          (s = r || !t.byteLength), (n = h.LengthDelimited), (i = "bytes");
          break;
        case u.FIXED32:
          (n = h.Bit32), (i = "fixed32");
          break;
        case u.SFIXED32:
          (n = h.Bit32), (i = "sfixed32");
          break;
        case u.SFIXED64:
          (s = r || I.from(t).isZero()), (n = h.Bit64), (i = "sfixed64");
          break;
        case u.SINT32:
          i = "sint32";
          break;
        case u.SINT64:
          (s = r || I.from(t).isZero()), (i = "sint64");
          break;
      }
      return [n, i, r || s];
    }
  };
  function rn(o) {
    let e = {};
    Object.defineProperty(e, B, { enumerable: !1, value: o });
    for (let t of o.fields) {
      let n = t.localName;
      if (!t.opt)
        if (t.oneof) e[t.oneof] = { oneofKind: void 0 };
        else if (t.repeat) e[n] = [];
        else
          switch (t.kind) {
            case "scalar":
              e[n] = fe(t.T, t.L);
              break;
            case "enum":
              e[n] = 0;
              break;
            case "map":
              e[n] = {};
              break;
          }
    }
    return e;
  }
  function N(o, e, t) {
    let n,
      i = t,
      r;
    for (let s of o.fields) {
      let a = s.localName;
      if (s.oneof) {
        let l = i[s.oneof];
        if (l?.oneofKind == null) continue;
        if (
          ((n = l[a]), (r = e[s.oneof]), (r.oneofKind = l.oneofKind), n == null)
        ) {
          delete r[a];
          continue;
        }
      } else if (((n = i[a]), (r = e), n == null)) continue;
      switch ((s.repeat && (r[a].length = n.length), s.kind)) {
        case "scalar":
        case "enum":
          if (s.repeat) for (let f = 0; f < n.length; f++) r[a][f] = n[f];
          else r[a] = n;
          break;
        case "message":
          let l = s.T();
          if (s.repeat)
            for (let f = 0; f < n.length; f++) r[a][f] = l.create(n[f]);
          else r[a] === void 0 ? (r[a] = l.create(n)) : l.mergePartial(r[a], n);
          break;
        case "map":
          switch (s.V.kind) {
            case "scalar":
            case "enum":
              Object.assign(r[a], n);
              break;
            case "message":
              let f = s.V.T();
              for (let c of Object.keys(n)) r[a][c] = f.create(n[c]);
              break;
          }
          break;
      }
    }
  }
  function sn(o, e, t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    for (let n of o.fields) {
      let i = n.localName,
        r = n.oneof ? e[n.oneof][i] : e[i],
        s = n.oneof ? t[n.oneof][i] : t[i];
      switch (n.kind) {
        case "enum":
        case "scalar":
          let a = n.kind == "enum" ? u.INT32 : n.T;
          if (!(n.repeat ? on(a, r, s) : ln(a, r, s))) return !1;
          break;
        case "map":
          if (
            !(n.V.kind == "message"
              ? an(n.V.T(), Ne(r), Ne(s))
              : on(n.V.kind == "enum" ? u.INT32 : n.V.T, Ne(r), Ne(s)))
          )
            return !1;
          break;
        case "message":
          let l = n.T();
          if (!(n.repeat ? an(l, r, s) : l.equals(r, s))) return !1;
          break;
      }
    }
    return !0;
  }
  var Ne = Object.values;
  function ln(o, e, t) {
    if (e === t) return !0;
    if (o !== u.BYTES) return !1;
    let n = e,
      i = t;
    if (n.length !== i.length) return !1;
    for (let r = 0; r < n.length; r++) if (n[r] != i[r]) return !1;
    return !0;
  }
  function on(o, e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!ln(o, e[n], t[n])) return !1;
    return !0;
  }
  function an(o, e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!o.equals(e[n], t[n])) return !1;
    return !0;
  }
  var U = class {
    constructor(e, t, n) {
      (this.defaultCheckDepth = 16),
        (this.typeName = e),
        (this.fields = t.map(tn)),
        (this.options = n ?? {}),
        (this.refTypeCheck = new we(this)),
        (this.refJsonReader = new ve(this)),
        (this.refJsonWriter = new be(this)),
        (this.refBinReader = new ke(this)),
        (this.refBinWriter = new Te(this));
    }
    create(e) {
      let t = rn(this);
      return e !== void 0 && N(this, t, e), t;
    }
    clone(e) {
      let t = this.create();
      return N(this, t, e), t;
    }
    equals(e, t) {
      return sn(this, e, t);
    }
    is(e, t = this.defaultCheckDepth) {
      return this.refTypeCheck.is(e, t, !1);
    }
    isAssignable(e, t = this.defaultCheckDepth) {
      return this.refTypeCheck.is(e, t, !0);
    }
    mergePartial(e, t) {
      N(this, e, t);
    }
    fromBinary(e, t) {
      let n = Yt(t);
      return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n);
    }
    fromJson(e, t) {
      return this.internalJsonRead(e, Se(t));
    }
    fromJsonString(e, t) {
      let n = JSON.parse(e);
      return this.fromJson(n, t);
    }
    toJson(e, t) {
      return this.internalJsonWrite(e, se(t));
    }
    toJsonString(e, t) {
      var n;
      let i = this.toJson(e, t);
      return JSON.stringify(
        i,
        null,
        (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0
      );
    }
    toBinary(e, t) {
      let n = _t(t);
      return this.internalBinaryWrite(e, n.writerFactory(), n).finish();
    }
    internalJsonRead(e, t, n) {
      if (e !== null && typeof e == "object" && !Array.isArray(e)) {
        let i = n ?? this.create();
        return this.refJsonReader.read(e, i, t), i;
      }
      throw new Error(
        `Unable to parse message ${this.typeName} from JSON ${q(e)}.`
      );
    }
    internalJsonWrite(e, t) {
      return this.refJsonWriter.write(e, t);
    }
    internalBinaryWrite(e, t, n) {
      return this.refBinWriter.write(e, t, n), t;
    }
    internalBinaryRead(e, t, n, i) {
      let r = i ?? this.create();
      return this.refBinReader.read(e, r, n, t), r;
    }
  };
  var ze = class extends U {
      constructor() {
        super("CommandDm", [
          { no: 1, name: "id", kind: "scalar", T: 3, L: 0 },
          { no: 2, name: "oid", kind: "scalar", T: 3, L: 0 },
          { no: 3, name: "mid", kind: "scalar", T: 3, L: 0 },
          { no: 4, name: "command", kind: "scalar", T: 9 },
          { no: 5, name: "content", kind: "scalar", T: 9 },
          { no: 6, name: "progress", kind: "scalar", T: 5 },
          { no: 7, name: "ctime", kind: "scalar", T: 9 },
          { no: 8, name: "mtime", kind: "scalar", T: 9 },
          { no: 9, name: "extra", kind: "scalar", T: 9 },
          { no: 10, name: "idStr", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = {
          id: 0n,
          oid: 0n,
          mid: 0n,
          command: "",
          content: "",
          progress: 0,
          ctime: "",
          mtime: "",
          extra: "",
          idStr: "",
        };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.id = e.int64().toBigInt();
              break;
            case 2:
              r.oid = e.int64().toBigInt();
              break;
            case 3:
              r.mid = e.int64().toBigInt();
              break;
            case 4:
              r.command = e.string();
              break;
            case 5:
              r.content = e.string();
              break;
            case 6:
              r.progress = e.int32();
              break;
            case 7:
              r.ctime = e.string();
              break;
            case 8:
              r.mtime = e.string();
              break;
            case 9:
              r.extra = e.string();
              break;
            case 10:
              r.idStr = e.string();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.id !== 0n && t.tag(1, h.Varint).int64(e.id),
          e.oid !== 0n && t.tag(2, h.Varint).int64(e.oid),
          e.mid !== 0n && t.tag(3, h.Varint).int64(e.mid),
          e.command !== "" && t.tag(4, h.LengthDelimited).string(e.command),
          e.content !== "" && t.tag(5, h.LengthDelimited).string(e.content),
          e.progress !== 0 && t.tag(6, h.Varint).int32(e.progress),
          e.ctime !== "" && t.tag(7, h.LengthDelimited).string(e.ctime),
          e.mtime !== "" && t.tag(8, h.LengthDelimited).string(e.mtime),
          e.extra !== "" && t.tag(9, h.LengthDelimited).string(e.extra),
          e.idStr !== "" && t.tag(10, h.LengthDelimited).string(e.idStr);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Me = new ze(),
    We = class extends U {
      constructor() {
        super("DmView", [
          {
            no: 1,
            name: "commandDms",
            kind: "message",
            repeat: 1,
            T: () => Me,
          },
        ]);
      }
      create(e) {
        let t = { commandDms: [] };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.commandDms.push(Me.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.commandDms.length; r++)
          Me.internalBinaryWrite(
            e.commandDms[r],
            t.tag(1, h.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ce = new We(),
    $e = class extends U {
      constructor() {
        super("DmViewReply", [
          { no: 22, name: "dmView", kind: "message", T: () => Ce },
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 22:
              r.dmView = Ce.internalBinaryRead(e, e.uint32(), n, r.dmView);
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.dmView &&
          Ce.internalBinaryWrite(
            e.dmView,
            t.tag(22, h.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Pe = new $e();
  var fn = /^(http|https):\/\/[^/]*/;
  function Jn(o) {
    let e = Gn(o.length),
      t = new Uint8Array(5 + o.length);
    return (t[0] = 0), t.set(e, 1), t.set(o, 5), t;
  }
  function Gn(o) {
    let e = new ArrayBuffer(4);
    return new DataView(e).setUint32(0, o, !1), new Uint8Array(e);
  }
  var je = {
    protocol: "http",
    hostname: "upos-sz-mirrorali.bilivideo.com",
    port: 80,
    active: !1,
    needWrite: !0,
  };
  function Je() {
    let { protocol: o, hostname: e, port: t, active: n, needWrite: i } = Kn(),
      r = `${o}://${e}:${t}`;
    return i && Xn(), n ? r : null;
  }
  function Kn() {
    let o = $persistentStore.read("Bilibili-CDN");
    return o ? JSON.parse(o) : je;
  }
  function Xn() {
    delete je.needWrite,
      $persistentStore.write(JSON.stringify(je), "Bilibili-CDN");
  }
  function Ge(o, e) {
    for (let t of o) {
      let n = t.base_url;
      t.base_url = n.replace(fn, e);
    }
  }
  function Ke(o, e) {
    for (let t of o) {
      let n = t.baseURL ? t : t.dashVideo;
      if (n) {
        let i = n.baseURL;
        n.baseURL = i.replace(fn, e);
      }
    }
    console.log(`CDN replace -> ${e}`);
  }
  function ie(o, e) {
    let t = o.toBinary(e);
    $done({ body: Jn(t) });
  }
  var qe = class extends U {
      constructor() {
        super("ModeStatus", [
          { no: 1, name: "modes", kind: "message", repeat: 1, T: () => Xe },
        ]);
      }
      create(e) {
        let t = { modes: [] };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.modes.push(Xe.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.modes.length; r++)
          Xe.internalBinaryWrite(
            e.modes[r],
            t.tag(1, h.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    _e = new qe(),
    Ye = class extends U {
      constructor() {
        super("Mode", [
          { no: 1, name: "id", kind: "scalar", T: 5 },
          { no: 2, name: "name", kind: "scalar", T: 9 },
          { no: 4, name: "f4", kind: "scalar", T: 5 },
          { no: 5, name: "f5", kind: "message", T: () => Ze },
        ]);
      }
      create(e) {
        let t = { id: 0, name: "", f4: 0 };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.id = e.int32();
              break;
            case 2:
              r.name = e.string();
              break;
            case 4:
              r.f4 = e.int32();
              break;
            case 5:
              r.f5 = Ze.internalBinaryRead(e, e.uint32(), n, r.f5);
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, h.Varint).int32(e.id),
          e.name !== "" && t.tag(2, h.LengthDelimited).string(e.name),
          e.f4 !== 0 && t.tag(4, h.Varint).int32(e.f4),
          e.f5 &&
            Ze.internalBinaryWrite(
              e.f5,
              t.tag(5, h.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Xe = new Ye(),
    He = class extends U {
      constructor() {
        super("F5", [{ no: 1, name: "f1", kind: "scalar", T: 5 }]);
      }
      create(e) {
        let t = { f1: 0 };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.f1 = e.int32();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.f1 !== 0 && t.tag(1, h.Varint).int32(e.f1);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ze = new He();
  var ot;
  (function (o) {
    (o[(o.NoErr = 0)] = "NoErr"),
      (o[(o.WithMultiDeviceLoginErr = 1)] = "WithMultiDeviceLoginErr");
  })(ot || (ot = {}));
  var at = class extends U {
      constructor() {
        super("PlayView", [
          { no: 1, name: "playURL", kind: "message", T: () => Qe },
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.playURL = Qe.internalBinaryRead(e, e.uint32(), n, r.playURL);
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.playURL &&
          Qe.internalBinaryWrite(
            e.playURL,
            t.tag(1, h.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    pt = new at(),
    st = class extends U {
      constructor() {
        super("PlayURLReply", [
          { no: 1, name: "quality", kind: "scalar", T: 13 },
          { no: 2, name: "format", kind: "scalar", T: 9 },
          { no: 3, name: "timelength", kind: "scalar", T: 4, L: 0 },
          { no: 4, name: "video_codecid", kind: "scalar", T: 13 },
          { no: 5, name: "videos", kind: "message", repeat: 1, T: () => tt },
          { no: 6, name: "audios", kind: "message", repeat: 1, T: () => et },
        ]);
      }
      create(e) {
        let t = {
          quality: 0,
          format: "",
          timelength: 0n,
          videoCodecid: 0,
          videos: [],
          audios: [],
        };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.quality = e.uint32();
              break;
            case 2:
              r.format = e.string();
              break;
            case 3:
              r.timelength = e.uint64().toBigInt();
              break;
            case 4:
              r.videoCodecid = e.uint32();
              break;
            case 5:
              r.videos.push(tt.internalBinaryRead(e, e.uint32(), n));
              break;
            case 6:
              r.audios.push(et.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.quality !== 0 && t.tag(1, h.Varint).uint32(e.quality),
          e.format !== "" && t.tag(2, h.LengthDelimited).string(e.format),
          e.timelength !== 0n && t.tag(3, h.Varint).uint64(e.timelength),
          e.videoCodecid !== 0 && t.tag(4, h.Varint).uint32(e.videoCodecid);
        for (let r = 0; r < e.videos.length; r++)
          tt.internalBinaryWrite(
            e.videos[r],
            t.tag(5, h.LengthDelimited).fork(),
            n
          ).join();
        for (let r = 0; r < e.audios.length; r++)
          et.internalBinaryWrite(
            e.audios[r],
            t.tag(6, h.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Qe = new st(),
    lt = class extends U {
      constructor() {
        super("DashItem", [
          { no: 1, name: "id", kind: "scalar", T: 13 },
          { no: 2, name: "baseURL", kind: "scalar", T: 9 },
          { no: 3, name: "backup_url", kind: "scalar", repeat: 2, T: 9 },
          { no: 4, name: "bandwidth", kind: "scalar", T: 13 },
          { no: 5, name: "codecid", kind: "scalar", T: 13 },
          { no: 6, name: "md5", kind: "scalar", T: 9 },
          { no: 7, name: "size", kind: "scalar", T: 4, L: 0 },
          { no: 8, name: "frame_rate", kind: "scalar", T: 9 },
          { no: 9, name: "widevine_pssh", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = {
          id: 0,
          baseURL: "",
          backupUrl: [],
          bandwidth: 0,
          codecid: 0,
          md5: "",
          size: 0n,
          frameRate: "",
          widevinePssh: "",
        };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.id = e.uint32();
              break;
            case 2:
              r.baseURL = e.string();
              break;
            case 3:
              r.backupUrl.push(e.string());
              break;
            case 4:
              r.bandwidth = e.uint32();
              break;
            case 5:
              r.codecid = e.uint32();
              break;
            case 6:
              r.md5 = e.string();
              break;
            case 7:
              r.size = e.uint64().toBigInt();
              break;
            case 8:
              r.frameRate = e.string();
              break;
            case 9:
              r.widevinePssh = e.string();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.id !== 0 && t.tag(1, h.Varint).uint32(e.id),
          e.baseURL !== "" && t.tag(2, h.LengthDelimited).string(e.baseURL);
        for (let r = 0; r < e.backupUrl.length; r++)
          t.tag(3, h.LengthDelimited).string(e.backupUrl[r]);
        e.bandwidth !== 0 && t.tag(4, h.Varint).uint32(e.bandwidth),
          e.codecid !== 0 && t.tag(5, h.Varint).uint32(e.codecid),
          e.md5 !== "" && t.tag(6, h.LengthDelimited).string(e.md5),
          e.size !== 0n && t.tag(7, h.Varint).uint64(e.size),
          e.frameRate !== "" && t.tag(8, h.LengthDelimited).string(e.frameRate),
          e.widevinePssh !== "" &&
            t.tag(9, h.LengthDelimited).string(e.widevinePssh);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    et = new lt(),
    ft = class extends U {
      constructor() {
        super("Stream", [
          { no: 1, name: "stream_info", kind: "message", T: () => nt },
          { no: 2, name: "dash_video", kind: "message", T: () => it },
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.streamInfo = nt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.streamInfo
              );
              break;
            case 2:
              r.dashVideo = it.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.dashVideo
              );
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.streamInfo &&
          nt
            .internalBinaryWrite(
              e.streamInfo,
              t.tag(1, h.LengthDelimited).fork(),
              n
            )
            .join(),
          e.dashVideo &&
            it
              .internalBinaryWrite(
                e.dashVideo,
                t.tag(2, h.LengthDelimited).fork(),
                n
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    tt = new ft(),
    ut = class extends U {
      constructor() {
        super("StreamInfo", [
          { no: 1, name: "quality", kind: "scalar", T: 13 },
          { no: 2, name: "format", kind: "scalar", T: 9 },
          { no: 3, name: "description", kind: "scalar", T: 9 },
          { no: 4, name: "err_code", kind: "enum", T: () => ["PlayErr", ot] },
          { no: 5, name: "limit", kind: "message", T: () => rt },
          { no: 6, name: "need_vip", kind: "scalar", T: 8 },
          { no: 7, name: "need_login", kind: "scalar", T: 8 },
          { no: 8, name: "intact", kind: "scalar", T: 8 },
          { no: 9, name: "no_rexcode", kind: "scalar", T: 8 },
          { no: 10, name: "attribute", kind: "scalar", T: 3, L: 0 },
          { no: 11, name: "new_description", kind: "scalar", T: 9 },
          { no: 12, name: "display_desc", kind: "scalar", T: 9 },
          { no: 13, name: "superscript", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = {
          quality: 0,
          format: "",
          description: "",
          errCode: 0,
          needVip: !1,
          needLogin: !1,
          intact: !1,
          noRexcode: !1,
          attribute: 0n,
          newDescription: "",
          displayDesc: "",
          superscript: "",
        };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.quality = e.uint32();
              break;
            case 2:
              r.format = e.string();
              break;
            case 3:
              r.description = e.string();
              break;
            case 4:
              r.errCode = e.int32();
              break;
            case 5:
              r.limit = rt.internalBinaryRead(e, e.uint32(), n, r.limit);
              break;
            case 6:
              r.needVip = e.bool();
              break;
            case 7:
              r.needLogin = e.bool();
              break;
            case 8:
              r.intact = e.bool();
              break;
            case 9:
              r.noRexcode = e.bool();
              break;
            case 10:
              r.attribute = e.int64().toBigInt();
              break;
            case 11:
              r.newDescription = e.string();
              break;
            case 12:
              r.displayDesc = e.string();
              break;
            case 13:
              r.superscript = e.string();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.quality !== 0 && t.tag(1, h.Varint).uint32(e.quality),
          e.format !== "" && t.tag(2, h.LengthDelimited).string(e.format),
          e.description !== "" &&
            t.tag(3, h.LengthDelimited).string(e.description),
          e.errCode !== 0 && t.tag(4, h.Varint).int32(e.errCode),
          e.limit &&
            rt
              .internalBinaryWrite(
                e.limit,
                t.tag(5, h.LengthDelimited).fork(),
                n
              )
              .join(),
          e.needVip !== !1 && t.tag(6, h.Varint).bool(e.needVip),
          e.needLogin !== !1 && t.tag(7, h.Varint).bool(e.needLogin),
          e.intact !== !1 && t.tag(8, h.Varint).bool(e.intact),
          e.noRexcode !== !1 && t.tag(9, h.Varint).bool(e.noRexcode),
          e.attribute !== 0n && t.tag(10, h.Varint).int64(e.attribute),
          e.newDescription !== "" &&
            t.tag(11, h.LengthDelimited).string(e.newDescription),
          e.displayDesc !== "" &&
            t.tag(12, h.LengthDelimited).string(e.displayDesc),
          e.superscript !== "" &&
            t.tag(13, h.LengthDelimited).string(e.superscript);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    nt = new ut(),
    ct = class extends U {
      constructor() {
        super("DashVideo", [
          { no: 1, name: "baseURL", kind: "scalar", T: 9 },
          { no: 2, name: "backup_url", kind: "scalar", repeat: 2, T: 9 },
          { no: 3, name: "bandwidth", kind: "scalar", T: 13 },
          { no: 4, name: "codecid", kind: "scalar", T: 13 },
          { no: 5, name: "md5", kind: "scalar", T: 9 },
          { no: 6, name: "size", kind: "scalar", T: 4, L: 0 },
          { no: 7, name: "audioId", kind: "scalar", T: 13 },
          { no: 8, name: "no_rexcode", kind: "scalar", T: 8 },
          { no: 9, name: "frame_rate", kind: "scalar", T: 9 },
          { no: 10, name: "width", kind: "scalar", T: 5 },
          { no: 11, name: "height", kind: "scalar", T: 5 },
          { no: 12, name: "widevine_pssh", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = {
          baseURL: "",
          backupUrl: [],
          bandwidth: 0,
          codecid: 0,
          md5: "",
          size: 0n,
          audioId: 0,
          noRexcode: !1,
          frameRate: "",
          width: 0,
          height: 0,
          widevinePssh: "",
        };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.baseURL = e.string();
              break;
            case 2:
              r.backupUrl.push(e.string());
              break;
            case 3:
              r.bandwidth = e.uint32();
              break;
            case 4:
              r.codecid = e.uint32();
              break;
            case 5:
              r.md5 = e.string();
              break;
            case 6:
              r.size = e.uint64().toBigInt();
              break;
            case 7:
              r.audioId = e.uint32();
              break;
            case 8:
              r.noRexcode = e.bool();
              break;
            case 9:
              r.frameRate = e.string();
              break;
            case 10:
              r.width = e.int32();
              break;
            case 11:
              r.height = e.int32();
              break;
            case 12:
              r.widevinePssh = e.string();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.baseURL !== "" && t.tag(1, h.LengthDelimited).string(e.baseURL);
        for (let r = 0; r < e.backupUrl.length; r++)
          t.tag(2, h.LengthDelimited).string(e.backupUrl[r]);
        e.bandwidth !== 0 && t.tag(3, h.Varint).uint32(e.bandwidth),
          e.codecid !== 0 && t.tag(4, h.Varint).uint32(e.codecid),
          e.md5 !== "" && t.tag(5, h.LengthDelimited).string(e.md5),
          e.size !== 0n && t.tag(6, h.Varint).uint64(e.size),
          e.audioId !== 0 && t.tag(7, h.Varint).uint32(e.audioId),
          e.noRexcode !== !1 && t.tag(8, h.Varint).bool(e.noRexcode),
          e.frameRate !== "" && t.tag(9, h.LengthDelimited).string(e.frameRate),
          e.width !== 0 && t.tag(10, h.Varint).int32(e.width),
          e.height !== 0 && t.tag(11, h.Varint).int32(e.height),
          e.widevinePssh !== "" &&
            t.tag(12, h.LengthDelimited).string(e.widevinePssh);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    it = new ct(),
    ht = class extends U {
      constructor() {
        super("StreamLimit", [
          { no: 1, name: "title", kind: "scalar", T: 9 },
          { no: 2, name: "uri", kind: "scalar", T: 9 },
          { no: 3, name: "msg", kind: "scalar", T: 9 },
        ]);
      }
      create(e) {
        let t = { title: "", uri: "", msg: "" };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.title = e.string();
              break;
            case 2:
              r.uri = e.string();
              break;
            case 3:
              r.msg = e.string();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.title !== "" && t.tag(1, h.LengthDelimited).string(e.title),
          e.uri !== "" && t.tag(2, h.LengthDelimited).string(e.uri),
          e.msg !== "" && t.tag(3, h.LengthDelimited).string(e.msg);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    rt = new ht();
  var mt = class extends U {
      constructor() {
        super("google.protobuf.Any", [
          { no: 1, name: "type_url", kind: "scalar", T: 9 },
          { no: 2, name: "value", kind: "scalar", T: 12 },
        ]);
      }
      pack(e, t) {
        return {
          typeUrl: this.typeNameToUrl(t.typeName),
          value: t.toBinary(e),
        };
      }
      unpack(e, t, n) {
        if (!this.contains(e, t))
          throw new Error(
            "Cannot unpack google.protobuf.Any with typeUrl '" +
              e.typeUrl +
              "' as " +
              t.typeName +
              "."
          );
        return t.fromBinary(e.value, n);
      }
      contains(e, t) {
        if (!e.typeUrl.length) return !1;
        let n = typeof t == "string" ? t : t.typeName,
          i = this.typeUrlToName(e.typeUrl);
        return n === i;
      }
      internalJsonWrite(e, t) {
        var n;
        if (e.typeUrl === "") return {};
        let i = this.typeUrlToName(e.typeUrl),
          r = se(t),
          s =
            (n = r.typeRegistry) === null || n === void 0
              ? void 0
              : n.find((f) => f.typeName === i);
        if (!s)
          throw new globalThis.Error(
            "Unable to convert google.protobuf.Any with typeUrl '" +
              e.typeUrl +
              "' to JSON. The specified type " +
              i +
              " is not available in the type registry."
          );
        let a = s.fromBinary(e.value, { readUnknownField: !1 }),
          l = s.internalJsonWrite(a, r);
        return (
          (i.startsWith("google.protobuf.") || !te(l)) && (l = { value: l }),
          (l["@type"] = e.typeUrl),
          l
        );
      }
      internalJsonRead(e, t, n) {
        var i;
        if (!te(e))
          throw new globalThis.Error(
            "Unable to parse google.protobuf.Any from JSON " + q(e) + "."
          );
        if (typeof e["@type"] != "string" || e["@type"] == "")
          return this.create();
        let r = this.typeUrlToName(e["@type"]),
          s =
            (i = t?.typeRegistry) === null || i === void 0
              ? void 0
              : i.find((l) => l.typeName == r);
        if (!s)
          throw new globalThis.Error(
            "Unable to parse google.protobuf.Any from JSON. The specified type " +
              r +
              " is not available in the type registry."
          );
        let a;
        if (r.startsWith("google.protobuf.") && e.hasOwnProperty("value"))
          a = s.fromJson(e.value, t);
        else {
          let l = Object.assign({}, e);
          delete l["@type"], (a = s.fromJson(l, t));
        }
        return (
          n === void 0 && (n = this.create()),
          (n.typeUrl = e["@type"]),
          (n.value = s.toBinary(a)),
          n
        );
      }
      typeNameToUrl(e) {
        if (!e.length) throw new Error("invalid type name: " + e);
        return "type.googleapis.com/" + e;
      }
      typeUrlToName(e) {
        if (!e.length) throw new Error("invalid type url: " + e);
        let t = e.lastIndexOf("/"),
          n = t > 0 ? e.substring(t + 1) : e;
        if (!n.length) throw new Error("invalid type url: " + e);
        return n;
      }
      create(e) {
        let t = { typeUrl: "", value: new Uint8Array(0) };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.typeUrl = e.string();
              break;
            case 2:
              r.value = e.bytes();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.typeUrl !== "" && t.tag(1, h.LengthDelimited).string(e.typeUrl),
          e.value.length && t.tag(2, h.LengthDelimited).bytes(e.value);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    H = new mt();
  var wt = class extends U {
      constructor() {
        super("CM", [
          { no: 1, name: "source_content", kind: "message", T: () => H },
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.sourceContent = H.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.sourceContent
              );
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.sourceContent &&
          H.internalBinaryWrite(
            e.sourceContent,
            t.tag(1, h.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    J = new wt(),
    vt = class extends U {
      constructor() {
        super("CMConfig", [
          { no: 1, name: "ads_control", kind: "message", T: () => H },
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.adsControl = H.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.adsControl
              );
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.adsControl &&
          H.internalBinaryWrite(
            e.adsControl,
            t.tag(1, h.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    dt = new vt(),
    bt = class extends U {
      constructor() {
        super("CmIpad", [
          { no: 1, name: "cm", kind: "message", T: () => J },
          { no: 4, name: "duration", kind: "scalar", T: 3, L: 0 },
          { no: 5, name: "aid", kind: "scalar", T: 3, L: 0 },
        ]);
      }
      create(e) {
        let t = { duration: 0n, aid: 0n };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 1:
              r.cm = J.internalBinaryRead(e, e.uint32(), n, r.cm);
              break;
            case 4:
              r.duration = e.int64().toBigInt();
              break;
            case 5:
              r.aid = e.int64().toBigInt();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.cm &&
          J.internalBinaryWrite(
            e.cm,
            t.tag(1, h.LengthDelimited).fork(),
            n
          ).join(),
          e.duration !== 0n && t.tag(4, h.Varint).int64(e.duration),
          e.aid !== 0n && t.tag(5, h.Varint).int64(e.aid);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    gt = new bt(),
    kt = class extends U {
      constructor() {
        super("Relate", [{ no: 9, name: "uri", kind: "scalar", T: 9 }]);
      }
      create(e) {
        let t = { uri: "" };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 9:
              r.uri = e.string();
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.uri !== "" && t.tag(9, h.LengthDelimited).string(e.uri);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    yt = new kt(),
    Tt = class extends U {
      constructor() {
        super("ViewReply", [
          { no: 10, name: "relates", kind: "message", repeat: 1, T: () => yt },
          { no: 30, name: "cms", kind: "message", repeat: 1, T: () => J },
          { no: 31, name: "cm_config", kind: "message", T: () => dt },
          { no: 41, name: "cm_ipad", kind: "message", T: () => gt },
        ]);
      }
      create(e) {
        let t = { relates: [], cms: [] };
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 10:
              r.relates.push(yt.internalBinaryRead(e, e.uint32(), n));
              break;
            case 30:
              r.cms.push(J.internalBinaryRead(e, e.uint32(), n));
              break;
            case 31:
              r.cmConfig = dt.internalBinaryRead(e, e.uint32(), n, r.cmConfig);
              break;
            case 41:
              r.cmIpad = gt.internalBinaryRead(e, e.uint32(), n, r.cmIpad);
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.relates.length; r++)
          yt.internalBinaryWrite(
            e.relates[r],
            t.tag(10, h.LengthDelimited).fork(),
            n
          ).join();
        for (let r = 0; r < e.cms.length; r++)
          J.internalBinaryWrite(
            e.cms[r],
            t.tag(30, h.LengthDelimited).fork(),
            n
          ).join();
        e.cmConfig &&
          dt
            .internalBinaryWrite(
              e.cmConfig,
              t.tag(31, h.LengthDelimited).fork(),
              n
            )
            .join(),
          e.cmIpad &&
            gt
              .internalBinaryWrite(
                e.cmIpad,
                t.tag(41, h.LengthDelimited).fork(),
                n
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Nt = new Tt();
  var Zn =
      /(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/,
    ue = class {
      constructor(e = "") {
        if (((this.name = "URL v1.0.2"), !e)) throw new Error("Empty URL");
        this.parse(e);
      }
      parse(e) {
        let {
          scheme: t,
          host: n,
          path: i = "",
          params: r,
        } = e.match(Zn)?.groups ?? {};
        (this.scheme = t),
          (this.host = n),
          (this.path = i),
          (this.params = r
            ? r.split("&").reduce((s, a) => {
                let [l, f] = a.split("=");
                return (s[l] = f), s;
              }, {})
            : {});
      }
      toString() {
        let e = this.scheme + "://" + this.host + "/" + this.path;
        return (
          this.params &&
            (e +=
              "?" +
              Object.entries(this.params).reduce(
                (t, [n, i], r) => t + (r ? "&" : "") + n + "=" + i,
                ""
              )),
          e
        );
      }
    };
  var xt = class extends U {
      constructor() {
        super("MainListReply", [
          { no: 11, name: "cm", kind: "message", T: () => J },
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, B, {
            enumerable: !1,
            value: this,
          }),
          e !== void 0 && N(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          s = e.pos + t;
        for (; e.pos < s; ) {
          let [a, l] = e.tag();
          switch (a) {
            case 11:
              r.cm = J.internalBinaryRead(e, e.uint32(), n, r.cm);
              break;
            default:
              let f = n.readUnknownField;
              if (f === "throw")
                throw new globalThis.Error(
                  `Unknown field ${a} (wire type ${l}) for ${this.typeName}`
                );
              let c = e.skip(l);
              f !== !1 && (f === !0 ? d.onRead : f)(this.typeName, r, a, l, c);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.cm &&
          J.internalBinaryWrite(
            e.cm,
            t.tag(11, h.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? d.onWrite : i)(this.typeName, e, t), t;
      }
    },
    It = new xt();
  function un(o) {
    let e = Pe.fromBinary(o);
    e.dmView?.commandDms?.length &&
      ((e.dmView.commandDms.length = 0), ie(Pe, e));
  }
  function cn(o) {
    let e = _e.fromBinary(o),
      t = e.modes.find((n) => n.name === "teenagers");
    t?.f5?.f1 && ((t.f5.f1 = 0), ie(_e, e));
  }
  function hn(o) {
    let e = Je();
    if (!e) return;
    let t = pt.fromBinary(o),
      n = t.playURL.videos,
      i = t.playURL.audios;
    Ke(n, e), Ke(i, e), ie(pt, t);
  }
  function pn(o) {
    let e = Nt.fromBinary(o),
      t = Je();
    if ((delete e.cmConfig, delete e.cmIpad, (e.cms.length = 0), t))
      for (let n of e.relates) {
        let i = new ue(n.uri),
          r = i.params.player_preload;
        if (r)
          try {
            let s = decodeURIComponent(r),
              a = JSON.parse(s);
            Ge(a.dash.video, t),
              Ge(a.dash.audio, t),
              (i.params.player_preload = encodeURIComponent(JSON.stringify(a))),
              (n.uri = i.toString()),
              console.log(`CDN replace -> ${t}`);
          } catch (s) {
            console.log(`[CDN ERROR] ${s}`);
            break;
          }
      }
    ie(Nt, e);
  }
  function mn(o) {
    let e = It.fromBinary(o);
    delete e.cm, ie(It, e);
  }
  var qn = $request.url,
    gn = $response.body,
    Yn = typeof $utils?.ungzip == "function" ? $utils.ungzip : Pt,
    Hn = gn.slice(0, 5),
    Bt = gn.slice(5);
  Hn[0] && (Bt = Yn(Bt));
  var dn = {
    "v1.DM/DmView": un,
    "Teenagers/ModeStatus": cn,
    "v1.PlayURL/PlayView": hn,
    "v1.View/View": pn,
    "v1.Reply/MainList": mn,
  };
  for (let o in dn)
    if (qn.includes(o)) {
      dn[o](Bt);
      break;
    }
  $done({});
})();
