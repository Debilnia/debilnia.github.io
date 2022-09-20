function muzyk() {
    const app = document.getElementById("app")
    const webamp = new Webamp({
                initialTracks: [
                    {
                        metaData: {
                            artist: "",
                            title: "Caramelldansen Hardstyle"
                        },
                        url: "https://debilnia.github.io/assets/music/1caramel.mp3",
                        duration: 172
                    },
                    {
                        metaData: {
                            artist: "i am おたくおたくおたく",
                            title: "lunatic sex princess funny"
                        },
                        url: "https://debilnia.github.io/assets/music/1sexfunny.mp3",
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
                            title: "Murder In My Mind"
                        },
                        url: "https://debilnia.github.io/assets/music/1murderinmymind.mp3",
                        duration: 204
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "sieciaki asertywność"
                        },
                        url: "https://debilnia.github.io/assets/music/1sertywnosc.mp3",
                        duration: 204
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "Kizuna AI Make Dance On My Dick"
                        },
                        url: "https://debilnia.github.io/assets/music/1kizunaai.mp3",
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
                        url: "https://debilnia.github.io/assets/music/1ketamine.mp3",
                        duration: 140
                    },
                    {
                        metaData: {
                            artist: "",
                            title: "ReTo - Bourbon"
                        },
                        url: "https://debilnia.github.io/assets/music/1bourbon.mp3",
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
