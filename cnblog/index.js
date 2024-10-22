!function() {
    "use strict";
    function n(n) {
        var t, i;
        t = "https://cdn.jsdelivr.net/gh/Navyum/file@main/cnblog/" + n + ".js",
        void 0 === i && (i = function() {}
        ),
        $.ajax({
            type: "GET",
            dataType: "script",
            cache: !0,
            url: t,
            success: function() {
                i()
            }
        })
    }
    $.extend({
        awesCnb: function(t) {
            void 0 === t && (t = {}),
            window.opts = t,
            n(function(n) {
                var t = n && n || "reacg"
                  , i = {
                    acg: function() {
                        return "reacg"
                    },
                    bili: function() {
                        return "bilibili"
                    },
                    gshang: function() {
                        return "bilibili"
                    },
                    default: function() {
                        return t
                    }
                };
                return (i[t] || i.default)()
            }(t.theme && t.theme.name))
        }
    })
}();
