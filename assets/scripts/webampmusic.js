function muzyk() {
    const app = document.getElementById("app")
    const webamp = new Webamp({
                initialTracks: [
                    {
                        metaData: {
                            artist: "",
                            title: "Caramelldansen Hardstyle"
                        },
                        url: "https://cf-media.sndcdn.com/6w1JeifOj91t.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vNncxSmVpZk9qOTF0LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjYzNjk0NjE1fX19XX0_&Signature=J95BUsZ9b4RbPVAbtYW8S-gmRTvTJfUDGLhE7ZsTjCU1IDCThfuHufjAYPsK65Ps~nBPG7A8yE6l0PF9s-h4Qs6aDUgO4KC-bD9E07eqJ8Wm7Bb--ZChXpEIb-K2ys9JH9~5czUNUPwys0qBF0zctiiz5x3AbfmcN5oPgQllPGAom~G398pGd69cdfYboMZLjxV47ax1unN-DF3oS4T3ImcvRXNkj9wXVQRhd3xyxVtnjWVnZW~BiSNEbxZqiy1k8PpXqwy76Vzn4XGMobhTHidXBJSmwK6J5xH0LCn2zCB1AVjYNZzzD9DC0Zpstikuy-YO9RoczQQca1emWxnaBA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
                        duration: 172
                    },
                    {
                        metaData: {
                            artist: "i am おたくおたくおたく",
                            title: "lunatic sex princess funny"
                        },
                        url: "https://cf-media.sndcdn.com/QgpDEa8rxaks.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUWdwREVhOHJ4YWtzLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjYzNjkxNDE0fX19XX0_&Signature=MBkzq3GoRNxT-G3~a-g2B9RcVIhlmzlW-VzZaIsAgIMBlM0CGFFfnyS1GejP3Mh2uBfnh3L9bKq8pQizgvE47VOjr06wnLbi3T3TB1fcmUbFo2W~cZl48nUsFotkTBIY8wIZY1e9gyI-CgOlDY8S8k1pWLHtswFqGIM-cLdSP55FPPXGBFI4a~4E-62cn4t4PGtPS68rPit6PLz5DGNzydnvBw2TTkadkyKGQfoU-FDztGa-q60KXNQ9xbwNVICfQjSw2zqLw7Ze9ySgDGOAWDsJSK3WZut4RD8VC9tBWD95GYs6rnfMsivJTdrPd5OGwZW3ZLjgKrAQOY8Tf9YvtA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
                        duration: 172
                    },
                    {
                        metaData: {
                            artist: "Aphex Twin",
                            title: "Cock/ver 10"
                        },
                        url: "https://debilnia.github.io/assets/music/songcock.mp3",
                        duration: 318
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "THE WORLD REVOLVING REMIX"
                        },
                        url: "https://cf-media.sndcdn.com/Zlj8z4Iv7A0V.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vWmxqOHo0SXY3QTBWLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjYzNjk2NTI1fX19XX0_&Signature=A4EqyT3JnEedT~N1WvP6-QPNLMcmm6YNle2L-Aq2ElmeQO7BvSP2oZ2PR1XkqO5X~s8SAoiol~sPD3aYv5rR9~5h55sqJHbCWIPdqbM3yBjChyZZkN3AXNbNesyAdRz-tWBE0MH7KKdpZASOyl7xLNhiKbeZ9D6DHUtyAijF~BZEx3kxjxlmZ887iBnRlsiva6tNcmqlV~3y81MnCMsPx-YCY5INYoIbEw6vCZylt1D47BONYQI2GJAqS6JVmO9kixy0RI8ucWvpMu3q7rm7cf5RHDx3F4lmam3QuW8HJBl4MCduYa6H0CmtiyJedu2Iq5c6KnMfsyGySwvVjpPqsQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
                        duration: 204
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "sieciaki asertywność"
                        },
                        url: "https://cdn.discordapp.com/attachments/889216493601054760/1021842123328340038/WDOS_-_Asertywnosc.mp3",
                        duration: 204
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "Kizuna AI Make Dance On My Dick"
                        },
                        url: "https://cf-media.sndcdn.com/zsXNdYpxdNgr.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20venNYTmRZcHhkTmdyLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjYzNjkyNTQ4fX19XX0_&Signature=K2p2LUqa4OtscWf8H4b33LCf5GdpKRODLvhDh7NOwXkqcudl6wruct5xf1~9jud1Q7jjcp~DtTxxDSNN5AbPzk8kOdcq1VdOVP73uuy6TQWZkeqibsVIkuYOfDxA~NMdP9W-dsW6Hr2Iqh0jyxEZ8hbE8~PM8Op~9LJwElhcgkWeUfyvs0SMIF8iNQ5y4f4sBNYl-7qrrh0vXVAGtG9uJfW5L2sNisX1QAZ7whVx2lILfnvm--z0BXbYL64KvXpDUQZ6sCHU3UzJq6QPONI4AV8lzHmVSRx-bbBHeFBP0G0iY2ZjrOxXA~ZthTSYtiGC3oSV-PhZI3tfKYUjlnn4nQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
                        duration: 165
                    },
                    {
                        metaData: {
                            artist: "Kuki",
                            title: "Zgon przy porodzie"
                        },
                        url: "https://debilnia.github.io/assets/music/songzgon.mp3",
                        duration: 204
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "UNICORN ON KETAMINE - KALINKA - FOOTWORXX DIGI103"
                        },
                        url: "https://cf-media.sndcdn.com/eciinRtM2Jj7.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZWNpaW5SdE0ySmo3LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjYzNjkxOTk2fX19XX0_&Signature=a59GUEvZTMOezSJCb6cIeHhCNP2YJHXy-NeAUNut7B3dSJ4sjMHvzbrvSXbyiSnztMD0SbUFilcBMom3-v9XUe3GlTJf1zdOyIMYtU7KHYUG7tpDztu4cKMNBHfd4P534bVFputGpvHgG-XHzyOwqtZzO1L2uxMgjUs~L83OcJ~YIVujTy~ruyQGnoL30qiS7Gmll1HDev8QcKWXM2L4nuX5ufzgYlc9Z3lwNCjum-jT2inKOKlcLD96pQKGhDYsh68r9c8CjdhJSotuEdelNeeKx7aoF69bamF07xsD09fdZy5vaVufqPEDB~pLMjbyqIZBIo-tdYi8ppg1yeXffw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
                        duration: 140
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "Fallout New Vegas - Lone star"
                        },
                        url: "https://cdn.discordapp.com/attachments/958633879089086474/1021828432612556960/MUS_Lone_Star.mp3",
                        duration: 150
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "Gasolina"
                        },
                        url: "https://debilnia.github.io/assets/music/songgasolina.mp3",
                        duration: 192
        }],
        __butterchurnOptions: {
            importButterchurn: () => Promise.resolve(window.butterchurn),
            getPresets: () => {
                const presets = window.butterchurnPresets.getPresets();
                return Object.keys(presets).map((name) => {
                    return {
                        name,
                        butterchurnPresetObject: presets[name]
                    };
               });
           },
           butterchurnOpen: true
        },
        __initialWindowLayout: {
            main: { position: { x: 0, y: 0 } },
            equalizer: { position: { x: 0, y: 116 } },
            playlist: { position: { x: 0, y: 232 }, size: [0, 4] },
            milkdrop: { position: { x: 275, y: 0 }, size: [7, 12] }
        }
    }).renderWhenReady(document.getElementById('app'));
}
