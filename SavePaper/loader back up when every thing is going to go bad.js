import createWaflashModule from "https://www.gameslol.net/data/waflash/js/waflash.min.js?2022050806";
const WAFLASH_BASE_URL = "https://www.gameslol.net/data/waflash/js/",
    createWaflash = (t, e) => {
        if (t || (t = ""), (e = e || {}).flashVars && (t += (t.includes("?") ? "&" : "?") + e.flashVars)) return;
        let a = {
            arguments: [t, "0", e.gpu ? "webgl" : "default", !0 === e.enableFilters ? "0" : "1"],
            options: e,
            preRun: [],
            postRun: [],
            locateFile: (t, e) => WAFLASH_BASE_URL + t + "?2022050801",
            print(t) {
                console.dir(t)
            },
            printErr(t) {
                console.error(t)
            },
            canvas: function() {
                const t = document.getElementById("canvas");
                return t.addEventListener("webglcontextlost", (function(t) {
                    alert("WebGL context lost. You will need to reload the page."), t.preventDefault()
                }), !1), t
            }(),
            statusElement: document.getElementById("waflashStatus"),
            setStatus: t => {
                if (!t) return;
                t = t.replace(/Downloading data\.\.\. \((\d+)\/(\d+)\)/, ((t, e, a) => "Downloading player... " + Math.floor(parseInt(e) / parseInt(a) * 100) + "%")), console.dir("WAFLASH> " + t);
                const e = '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="48px" height="20px" viewBox="0 0 64 16" xml:space="preserve"><path fill="#beb5f9" fill-opacity="0.42" d="M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z"/><g><path fill="#654ff0" fill-opacity="1" d="M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z"/><animateTransform attributeName="transform" type="translate" values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0" calcMode="discrete" dur="1170ms" repeatCount="indefinite"/></g></svg>';
                0 == t.indexOf("Downloading player...") && (t = "Downloading player " + e), 0 == t.indexOf("Loading SWF...") && (t = "Loading SWF " + e), a.statusElement.innerHTML = t, a.showStatus()
            },
            showStatus() {
                a.statusElement.style.display = "block"
            },
            hideStatus() {
                a.statusElement.style.display = "none"
            },
            unload() {},
            WAFLASH: {
                hal: {
                    url_transformRequestUrl(t) {
                        const a = "owner" == window.T?.config?.ROLE;
                        const n = function(t) {
                            let n = e.resourceMap;
                            if (Array.isArray(n))
                                for (let [e, a] of n) {
                                    if ("string" != typeof e && !e instanceof RegExp) continue;
                                    const n = e instanceof RegExp || "~" == e.charAt(0);
                                    if (!n && "=" == e.charAt(0)) {
                                        if (e = e.substr(1), e == t) return a
                                    } else if (n) {
                                        let n = e instanceof RegExp ? e : new RegExp(e = e.substr(1));
                                        if (n.test(t)) {
                                            return null === a ? null : t.replace(n, a)
                                        }
                                    } else {
                                        let n = t.indexOf("?"),
                                            s = "",
                                            o = t;
                                        if (n >= 0 && (o = t.substring(0, n), s = "&" + t.substr(n + 1)), e == o) return null === a ? null : a + s
                                    }
                                } else if (a && console.dir("old-style resourceMap mode!!!!!!!!!!!!!!!"), n = window.wafResourceMap || e.resourceMap, n && "object" == typeof n)
                                    for (let [e, a] of Object.entries(n)) {
                                        const n = "=" == e.charAt(0),
                                            s = "~" == e.charAt(0);
                                        if (n) {
                                            if (e = e.substr(1), e == t) return a
                                        } else if (s) {
                                            e = e.substr(1);
                                            let n = new RegExp(e);
                                            if (n.test(t)) {
                                                return null === a ? null : t.replace(n, a)
                                            }
                                        } else {
                                            let n = t.indexOf("?"),
                                                s = "",
                                                o = t;
                                            if (n >= 0 && (o = t.substring(0, n), s = "&" + t.substr(n + 1)), e == o) return null === a ? null : a + s
                                        }
                                    }
                            var s = t.lastIndexOf("/");
                            if (s >= 0) {
                                let e, a = t.substr(0, s + 1),
                                    n = t.substr(s + 1),
                                    o = n.substr(n.lastIndexOf("."));
                                if (".swf" == o) {
                                    if ("http://images.hangame.co.kr/static/flash/flashgame/game/lang/" == a) return "https://swfs.waflash.io/uploads/hangame/" + n;
                                    if ("http://img.ibravo.com/game/source/" == a) return "https://darkviky.github.io/assets/ibravo/" + n;
                                    if ("http://www.ibravo.com/web/game/popup/signed.aspx" == t) return "https://darkviky.github.io/assets/ibravo/web/game/popup/signed.aspx";
                                    if (t.lastIndexOf("/ads/default/loading.swf") >= 0) return "https://darkviky.github.io/assets/dearyou/loading.swf"
                                }
                                if (t.lastIndexOf("/loading/loading640x480.swf") > 0) return "https://blog.kakaocdn.net/dn/Ek0nH/btq3lUD7jcQ/gEYgOPz64grAZsrYbmX0Dk/loading640x480.swf?attach=1&knm=tfile.swf";
                                if (t.lastIndexOf("/loading/loading.swf") > 0) return "https://blog.kakaocdn.net/dn/Vv9ag/btq3mYTdq8w/hHts2k7y4VYKN9y5f9eT5K/loading.swf?attach=1&knm=tfile.swf";
                                if (t.lastIndexOf("/loading/result2_v3_2.swf") > 0) return "https://blog.kakaocdn.net/dn/eqSlVE/btqSX7mihN2/zlCy2XV43iQX4GahzZDkIk/result2_v3_2.swf?attach=1&knm=tfile.swf";
                                if (t.startsWith("http://www.kiniwini.com/games/common/user_info.php")) return "https://blog.kakaocdn.net/dn/RhEMp/btq17btItmP/cJHm5tYvKfKe1ztq8XOzw1/user_info.php.txt?attach=1&knm=tfile.txt";
                                if (t.indexOf("//panyroom.jr.naver.com/game/gameset.php") > 0) return "https://xwvy1u8cxc.execute-api.ap-northeast-2.amazonaws.com/prod/panyroom_game_gameset";
                                if (e = "http://zuzunza.joins.com/all/check_id.php", t.startsWith(e)) return "https://ieazco9902.execute-api.ap-northeast-2.amazonaws.com/zuzunza/all/check_id" + t.substr(e.length);
                                if (e = "http://www.zuzunza.com/all/check_id.php", t.startsWith(e)) return "https://ieazco9902.execute-api.ap-northeast-2.amazonaws.com/zuzunza/all/check_id" + t.substr(e.length);
                                if (e = "http://kidsdaum.zuzunza.com/all/check_id.php", t.startsWith(e)) return "https://ieazco9902.execute-api.ap-northeast-2.amazonaws.com/zuzunza/all/check_id" + t.substr(e.length);
                                if (0 == t.lastIndexOf("https://blog.kakaocdn.net/swf/loading_default.swf")) return "https://blog.kakaocdn.net/dn/ccsyy7/btqU4Zs74KE/CLNg8AqGHfOkobsqhoKWok/loading_default.swf?attach=1&knm=tfile.swf";
                                if (t.match(/^http\:\/\/file\.barunson\.com\/upfile\/object\/Loading\/loading[0-9a-z]+\.swf$/)) return "https://blog.kakaocdn.net/dn/bq8LCx/btq6W2p55q8/U7FtlDnJwgORqSF3zE7WuK/barunson-loading.waf?attach=1&knm=tfile.waf";
                                if (t.startsWith("http://file.barunson.com/upfile/object/Loading/www.swf")) return "https://blog.kakaocdn.net/dn/ytl0f/btq6AtDeWRF/utoYw63znPZzuBDKeIOFd1/barunson-logo.waf?attach=1&knm=tfile.waf";
                                if (t.endsWith("/loading/loading_lg.swf")) return "https://blog.kakaocdn.net/dn/uyECc/btq6BEraq42/M2P9hB84fAZFDsJSJgLCA0/loading_lg.swf?attach=1&knm=tfile.swf";
                                if (".mp3" == o && "http://juter01.tistory.com/attachment/" == a) return "https://darkviky.github.io/assets/gog/" + n;
                                if ("https://swfs.waflash.io/uploads/pororo/waf/swf/sound/soundManager.swf" == t) return "https://blog.kakaocdn.net/dn/pwvBx/btrx3Zf52Kn/bKCd8q9teBK92nR6lwCAkk/soundManager.swf?attach=1&knm=tfile.swf";
                                if ("https://swfs.waflash.io/uploads/pororo/waf/swf/Pororo.swf" == t) return "https://blog.kakaocdn.net/dn/buE2dV/btrx06HiFvJ/1ZzukkU6pqtjX7FeZeyCK1/Pororo.swf?attach=1&knm=tfile.swf";
                                if (t.startsWith("https://pororo.jr.naver.com/")) return "https://swfs.waflash.io/uploads/pororo/waf/" + n;
                                if (t.endsWith("123bee.com/esc_loader_ad.swf")) return "https://blog.kakaocdn.net/dn/dkLpGV/btrwTwtsHut/5bo0THZGSfPNSyHKA75e30/esc_loader_ad.swf?attach=1&knm=tfile.swf";
                                if (t.endsWith("123bee.com/esc_front_ad.swf")) return "https://blog.kakaocdn.net/dn/oEzp4/btrwWfYYlyo/dtbc5YEw2xZsdSiEwo9fDk/esc_front_ad.swf?attach=1&knm=tfile.swf"
                            }
                            return [".kakaocdn.net", ".github.io", ".waflash.io", "waflash.cdn.ntruss.com", ".gameslol.net"].some((e => t.indexOf(e) > 0)) ? t.replace("http://", "https://") : null
                        }(t);
                        return a && t != n && (n ? console.dir(`redirect ${t} => ${n}`) : console.error(`redirect ${t} => ${n}`)), n
                    }
                }
            }
        };
        window.waflash = a, window.onerror = (t, e, n, s, o) => {
            "string" != typeof t && (o = t.error, t.filename || t.fileName, t.lineno || t.lineNumber, t.colno || t.columnNumber, t = t.message || t.name || o.message || o.name);
            let r = "";
            o && o.stack && (r = o.stack);
            let l = document.location + "|" + t;
            a.ga && a.ga("event", document.location.origin, {
                event_category: "error",
                event_label: l,
                non_interaction: !0,
                send_to: a.gid
            })
        }, a.setStatus("Prepairing..."), createWaflashModule(a).then((t => {
            console.dir("WAFLASH> Waflash module created!")
        }))
    },
    destroyWaflash = () => {
        console.dir("WAFLASH> Waflash component will unmount!"), waflash.unload(), waflash = null, window.waflash = null
    };
export {
    createWaflash,
    destroyWaflash
};