!function(n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.docsifyEcharts = e()
}(this, function() {
    "use strict";
    function n(n, e) {
        var t = "docsify-echarts-container"
          , i = window.Docsify.dom
          , r = [];
        n.beforeEach(function(n) {
            r.length = 0,
            window.docsifyEchartsEvents = {};
            var e = /(^```chart\s+([\s\S]+?)\s*```$)|(^```js[\s\S]*?\/\/ --echarts--([\s\S]+?)chart\.setOption\(option,\s*true\)[\s\S]*?```$)/gim
              , o = n.match(e);
            return n = n.replace(e, function(n, o, s, c, a) {
                var d = "";
                try {
                    if (o) {
                        d = new Function("return " + s)()
                    } else if (a) {
                        var h = a.match(/const option = ([\s\S]*?);/);
                        h && (d = new Function("return " + h[1])())
                    }
                } catch (n) {
                    console.warn("Chart parse error")
                }
                return d && r.push(Object.assign({}, d, {
                    __id: r.length
                })),
                "<div class=\"" + t + "\"></div>"
            }),
            o && o.map(function(n, e) {
                try {
                    var o = n.replace(/```.*?```/gs, "")
                      , c = new Function("return " + o)();
                    c && r[e] && (r[e] = Object.assign(r[e], c))
                } catch (n) {}
            }),
            n
        }),
        n.doneEach(function(n, e) {
            var o = document.createElement("script");
            o.textContent = r.map(function(n) {
                var e = n.__id || 0
                  , o = n.settings || {}
                  , s = o.width || "100%"
                  , c = o.height || "400px"
                  , a = o.border || "1px solid #ccc"
                  , d = o.theme || {}
                  , h = o.initOptions || {};
                return "(function(){var t=document.querySelectorAll('." + t + "')[" + e + "];t.style.width='" + s + "',t.style.height='" + c + "',t.style.border='" + a + "';var i=echarts.init(t," + JSON.stringify(d) + "," + JSON.stringify(h) + ");i.setOption(" + JSON.stringify(n) + ",true),window.addEventListener('resize',i.resize)})();"
            }).join(""),
            i.appendTo(i.body, o),
            e(n)
        })
    }
    return window.$docsify && (window.$docsify.plugins = [].concat(n, $docsify.plugins)),
    n
});
