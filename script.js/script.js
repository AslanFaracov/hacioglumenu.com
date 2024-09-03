const options = {
            includeScore: true,
            threshold: 0.4,
            keys: ['title', 'description']
        };

        const categories = Array.from(document.querySelectorAll('.category'));
        const items = Array.from(document.querySelectorAll('.item')).map(item => ({
            title: item.querySelector('h3').textContent.toLowerCase(),
            description: item.querySelector('p').textContent.toLowerCase(),
            element: item
        }));

        let fuse = new Fuse(items, options);

        function updateDisplay(query) {
            if (query) {
                const results = fuse.search(query);
                items.forEach(item => {
                    item.element.style.display = 'none';
                });
                results.forEach(result => {
                    result.item.element.style.display = 'flex';
                });
            } else {
                items.forEach(item => {
                    item.element.style.display = 'flex';
                });
            }

            categories.forEach(category => {
                const categoryItems = Array.from(category.querySelectorAll('.item'));
                const shouldShowCategory = categoryItems.some(item => item.style.display === 'flex');
                category.style.display = shouldShowCategory ? 'block' : 'none';
            });
        }

        document.getElementById('search').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            updateDisplay(query);
        });

        function handleDelete(event) {
            const item = event.target.closest('.item');
            if (item) {
                item.remove();
                updateItems();
                updateDisplay(document.getElementById('search').value.toLowerCase());
            }
        }

        function updateItems() {
            items.length = 0;
            categories.forEach(category => {
                const categoryItems = Array.from(category.querySelectorAll('.item'));
                categoryItems.forEach(item => {
                    items.push({
                        title: item.querySelector('h3').textContent.toLowerCase(),
                        description: item.querySelector('p').textContent.toLowerCase(),
                        element: item
                    });
                });
            });
            fuse = new Fuse(items, options);
        }

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', handleDelete);
        });

        const backToTopBtn = document.getElementById('backToTopBtn');
        window.onscroll = function() {
            backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        };
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        function openModal(element) {
    const itemId = element.getAttribute('data-item-id');
    const itemData = {
        1: {
            title: "Soyutma Yumurta",
            description: "",
            price: "",
            image: "yumurta1.jpeg"
        },
        2: {
            title: "Soyutma Kənd Yumurtası",
            description: "",
            price: "",
            image: "yumurta1.jpeg"
        },
        3: {
            title: 'Sosiska',
            description: "",
            price: "",
            image: "sosiska.jpeg"
        },
        4: {
            title: "Kənd şoru",
            description: "",
            price: "",
            image: "sor.jpeg"
        },
        5: {
            title: "Zeytun",
            description: "",
            price: "",
            image: "zeytun.jpeg"
        },
        6: {
            title: 'Qaymaq',
            description: "",
            price: "",
            image: "qaymaq.jpeg"
        },
        7: {
            title: "Kənd pendiri",
            description: "",
            price: "",
            image: "kendpendiri.jpeg"
        },
        8: {
            title: "Kərə yağı",
            description: "",
            price: "",
            image: "kereyagi.jpeg"
        },
        9: {
            title: 'Nehrə yağı',
            description: "",
            price: "",
            image: "sosiskag.jpeg"
        },
        10: {
            title: "Bal",
            description: "",
            price: "",
            image: "bal.jpeg"
        },
        11: {
            title: "Qayğanaq",
            description: "",
            price: "",
            image: "qayganaq.jpeg"
        },
        12: {
            title: 'Yağ-pendir',
            description: "",
            price: "",
            image: "sosishka.jpeg"
        },
        13: {
            title: "Kolbasa",
            description: "",
            price: "",
            image: "yumurdta.jpeg"
        },
        14: {
            title: "Südlü aş",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        15: {
            title: 'Motal pendiri',
            description: "",
            price: "",
            image: "sosilska.jpeg"
        },
        16: {
            title: "Pomidor-yumurta",
            description: "",
            price: "",
            image: "pomidoryumurta.jpeg"
        },
        17: {
            title: "Sosiska(kolbasa) yumurta",
            description: "",
            price: "",
            image: "sosiskayumurta.jpeg"
        },
        18: {
            title: 'Kükü',
            description: "",
            price: "",
            image: "kuku.jpeg"
        },
        19: {
            title: "Sucuklu yumurta",
            description: "",
            price: "",
            image: "sucukluyumurta.jpeg"
        },
        20: {
            title: "Süzmə",
            description: "Qatıq  ,  şüyüd  ,  sarımsaq  ,  duz .",
            price: "",
            image: "suzme.jpeg"
        },
        21: {
            title: 'Acika',
            description: "Pomidor pastası  ,  göyərti  ,  soğan  ,  duz  ,  istiot .",
            price: "",
            image: "acika.jpeg"
        },
        22: {
            title: "Göyərti",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        23: {
            title: "Xiyar-pomidor",
            description: "",
            price: "",
            image: "sveji.jpeg"
        },
        24: {
            title: 'Çoban salatı',
            description: "Pomidor  ,  xiyar  ,  mövsümi göyərti  ,  duz .",
            price: "",
            image: "coban.jpeg"
        },
        25: {
            title: "Paytaxt salatı",
            description: "Toyuq əti  ,  kartof   ,  kök  ,  yaşıl noxud   ,  yumurta   ,  şüyüd  ,  mayonez   ,  duz   ,  istiot.",
            price: "",
            image: "paytaxt.jpeg"
        },
        26: {
            title: "Mimoza salatı",
            description: "Toyuq  ,  kartof  ,  yerkökü  ,  mayonez  ,  yumurta  ,  qoz ləpəsi   ,  holland pendiri  ,  duz  ,  istiot.",
            price: "",
            image: "mimoza.jpeg"
        },
        27: {
            title: 'Vineqred salatı',
            description: "Cuğundur  ,  kök  ,  kartof  ,  qırmızı lobiya   ,  zeytun yağı   ,  göyərti  ,  duz , istiot.",
            price: "",
            image: "sfosiska.jpeg"
        },
        28: {
            title: "Manqal salatı",
            description: "Pomidor  ,  badımcan  ,  yaşıl bibər   ,  acı bibər   ,  soğan  , sarımsaq   ,  zeytun yağı  ,  göyərti  ,  duz  ,  istiot.",
            price: "",
            image: "mangal.jpeg"
        },
        29: {
            title: "Şuba salatı",
            description: "Cuğundur  , toyuq əti  ,  yerkökü  ,  mayonez   ,  duz   ,  istiot.",
            price: "",
            image: "suba.jpeg"
        },
        30: {
            title: 'Lavaş salatı',
            description: "",
            price: "",
            image: "yuxa.jpeg"
        },
        31: {
            title: "Meyvə",
            description: "",
            price: "",
            image: "yumurnta.jpeg"
        },
        32: {
            title: "Toyuq kotleti",
            description: "Toyuq əti , soğan , duz , istiot , yağ",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        33: {
            title: 'Ət kotleti',
            description: "Dana əti , soğan , duz , istiot , yağ.",
            price: "",
            image: "sosfgiska.jpeg"
        },
        34: {
            title: "Kievski kotlet",
            description: "Toyuq əti , üyüdülmüş suxarik , holland pendiri , kərə yağı , duz , istiot.",
            price: "",
            image: "yumucrta.jpeg"
        },
        35: {
            title: "Toyuq langet",
            description: " Toyuq əti , duz istiot , yağ",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        36: {
            title: 'Ətli börək',
            description: "",
            price: "",
            image: "sosopiska.jpeg"
        },
        37: {
            title: "Xəngəl",
            description: "Dana əti , un , kərə yağı , soğan , duz , istiot ",
            price: "",
            image: "yumurdta.jpeg"
        },
        38: {
            title: "Toyuq yeməkləri",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        39: {
            title: ' Toyuq qulyaş',
            description: "Toyuq əti , soğan , bibər , pomidor , dəfnə yarpağı , duz , tomat , yağ.",
            price: "",
            image: "soskiska.jpeg"
        },
        40: {
            title: "Ət qulyaş",
            description: "Dana əti , soğan , bibər , pomidor , dəfnə yarpağı , duz , tomat , yağ",
            price: "",
            image: "yumucrta.jpeg"
        },
        41: {
            title: "Qazan kotleti",
            description: "Dana əti , soğan , kartof , bibər , pomidor , göyərti , duz , istiyot , yağ.",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        42: {
            title: 'Toyuq Souzu',
            description: "Toyuq əti , kartof  , soğan  , tomat  ,  duz  , istiot  , yağ.",
            price: "",
            image: "sosdfiska.jpeg"
        },
        43: {
            title: " Ət souzu",
            description: "Dana əti , kartof , soğan  , pomidor , yumurta  , yağ  , duz  , istiot.",
            price: "",
            image: "yumurnta.jpeg"
        },
        44: {
            title: "Ət musaqqa",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        45: {
            title: 'Tərəvəz qızartma',
            description: "",
            price: "",
            image: "sosishgka.jpeg"
        },
        46: {
            title: "Dolmalar",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        47: {
            title: "Kənd cücəsi çığırtması",
            description: " Kənd cücəsi ,  soğan  , pomidor  ,  yumurta  , yağ  ,  duz ,  istiot.",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        48: {
            title: 'Ət yeməkləri',
            description: "",
            price: "",
            image: "sohsiska.jpeg"
        },
        49: {
            title: "Toyuq qovurma",
            description: "Toyuq əti , kartof ,  bibər ,  pomidor ,  göyərti  , duz ,  istiot ,  yağ.",
            price: "",
            image: "yumurtaf.jpeg"
        },
        50: {
            title: "Kalafur/Buğlama",
            description: "Quzu əti , pomidor  , bibər  , kəkotu  , sarımsaq ,  göyərti  , duz , istiot , yağ.",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        51: {
            title: 'Piti',
            description: "Quzu əti  , quyruq  ,  noxud  ,  şabalıd  , soğan ,  duz , istiot .",
            price: "",
            image: "sosiskha.jpeg"
        },
        52: {
            title: "Julyen",
            description: "Toyuq flesi , göbələk  , qaymaq , holland pendiri  , soğan  , duz  ,  istiot .",
            price: "",
            image: "yumucrta.jpeg"
        },
        53: {
            title: "Ətli nar qovurma",
            description: "Quzu əti  ,  soğan  ,  nar  ,  şabalıd  ,  duz  ,  istiot  ,  yağ.",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        54: {
            title: 'Qaymaqlı toyuq',
            description: "Toyuq flesi  , soğan  ,  göbələk  ,  qaymaq  ,  duz  ,  istiot  .",
            price: "",
            image: "sosiska.jpeg"
        },
        55: {
            title: "Hasanpaşa köftə",
            description: "",
            price: "",
            image: "yumurnta.jpeg"
        },
        56: {
            title: "İzmir köftəsi",
            description: "Dana əti ,  yerkökü  ,  bibər ,  pomidor , kartof , duz , istiot  ,  yağ.",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        57: {
            title:'Şahplov(pors)',
            description: "Düyü ,  quzu əti  ,  soğan  ,  şabalıd  ,  ərik qurusu  ,  alça turşusu  , lavaş  ,  kərə yağı  ,  kişmiş  ,  duz  , istiot.",
            price: "",
            image: "soska.jpeg"
        },
        58: {
            title: "Quzu təndir(pors)",
            description: "Quzu əti  ,  pomidor , soğan  ,  bibər  ,  kəkotu  , sarımsaq  , duz  ,  istiot , yağ.",
            price: "",
            image: "yumucrta.jpeg"
        },
        59: {
            title: "Kənd cücəsi(soyutma)",
            description: "Kənd cücüsi  ,  yerkökü  ,  kartof  , soğan  ,  duz , istiot.",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        60: {
            title: 'Toyuq ləvəngisi',
            description: "",
            price: "",
            image: "sosika.jpeg"
        },
        61: {
            title: "Kənd cücəsi çığırtması( bütöv)",
            description:"",
            price: "",
            image: "yumurdta.jpeg"
        },
        62: {
            title: "Toyuq sacı",
            description: "Toyuq əti ,  soğan  ,  bibər  ,  göbələk  ,  kartof  ,  badımcan  ,  pul bibər  ,  acı bibər  ,  yaşıl bibər  ,  duz  ,  istiot  ,  yağ .",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        63: {
            title: 'Balıq ləvəngisi',
            description: "Balıq (kütüm)  ,  qoz  ,  soğan  , turşu (alça)  ,  duz  , istiot .",
            price: "",
            image: "sosika.jpeg"
        },
        64: {
            title: "Quzu sacı ",
            description: "Quzu əti  ,  soğan  ,  bibər  ,  göbələk  ,  kartof  ,  badımcan  ,  pul bibər  ,  acı bibər  ,  yaşıl bibər  ,  duz  ,  istiot  ,  yağ .",
            price: "",
            image: "yumucrta.jpeg"
        },
        65: {
            title: "Çəki(sazan)",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        66: {
            title: 'Xaşam',
            description: "",
            price: "",
            image: "sosska.jpeg"
        },
        67: {
            title: "Kütüm",
            description: "",
            price: "",
            image: "yumurnta.jpeg"
        },
        68: {
            title: "Balıq (setkada)",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        69: {
            title: 'Belamur',
            description: "",
            price: "",
            image: "ssiska.jpeg"
        },
        70: {
            title: "Asatrin",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        71: {
            title: "Dovğa stəkanda",
            description: "Qatıq  ,  noxud  ,  qarışıq göyərti  ,  yumru düyü  ,  duz .",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        72: {
            title: 'Dovğa bakalda',
            description: "Qatıq  ,  noxud  ,  qarışıq göyərti  ,  yumru düyü  ,  duz.",
            price: "",
            image: "sosika.jpeg"
        },
        73: {
            title: "Dovğa kasada",
            description: "Qatıq  ,  noxud  ,  qarışıq göyərti  ,  yumru düyü  ,  duz.",
            price: "",
            image: "yumurtam.jpeg"
        },
        74: {
            title: "Mərci",
            description: "Qırmızı mərcimək  , soğan  , tomat(bibər)  ,  nanə qurusu  ,  duz  ,  qara istiot",
            price: "",
            image: "merci.jpeg"
        },
        75: {
            title: 'Yayla supu',
            description: "Qatıq  ,  yumru düyü  ,  nanə qurusu  ,  kərə yağı  ,  duz  .",
            price: "",
            image: "yayla.jpeg"
        },
        76: {
            title: "Toyuq supu",
            description: "Toyuq əti  ,  soğan  ,  yerkökü  ,  kartof  ,  vərməşil  ,  şüyüd   ,  duz  ,  istiot  ,  yağ.",
            price: "",
            image: "yumucrta.jpeg"
        },
        77: {
            title: "Borş",
            description: "Sümüklü dana əti  ,  kələm  ,  kök   ,  soğan   ,  kartof   ,  cuğundur  ,  göyərti   ,  duz  ,  istiot  ,  yağ.",
            price: "",
            image: "bors.jpeg"
        },
        78: {
            title: 'Quru fasulyə (lobya)',
            description: "Quru fasulyə  ,  dana əti  ,  soğan  ,   tomat pastası  ,  duz  ,  istiot  ,  yağ.",
            price: "",
            image: "fasulye.jpeg"
        },
        79: {
            title: "Hinduşka supu",
            description: " Hinduşka əti   ,  yumru düyü   ,  yerkökü  ,  kartof   ,  soğan   ,   duz   ,  istiot  ,  yağ.",
            price: "",
            image: "yumurnta.jpeg"
        },
        80: {
            title: "Düşbərə",
            description: "Dana əti  , un  ,  soğan  ,  quru nanə  ,  duz  ,  istiot  ,  yağ ",
            price: "",
            image: "dusbere.jpeg"
        },
        81: {
            title: 'Kənd cücə supu',
            description: "Kənd cücə əti  ,  soğan  ,  yerkökü  ,  kartof  ,  vərməşil  , düyü   ,  şüyüd   ,  duz  ,  istiot  ,  yağ .",
            price: "",
            image: "ssiska.jpeg"
        },
        82: {
            title: "Göbələkli şorba",
            description: "Göbələk  ,  soğan  ,  qaymaq  ,  duz  ,  istiot .",
            price: "",
            image: "yumucrta.jpeg"
        },
        83: {
            title: "Düyü",
            description: " ",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        84: {
            title: 'Qreçka',
            description: "",
            price: "",
            image: "sosika.jpeg"
        },
        85: {
            title: "Makaron",
            description: "",
            price: "",
            image: "yumurdta.jpeg"
        },
        86: {
            title: "Püre",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        87: {
            title: ' Spagetti',
            description: "",
            price: "",
            image: "sosika.jpeg"
        },
        88: {
            title: "Verməşil",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        89: {
            title: "Bulgur",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        90: {
            title: 'Fri',
            description: "",
            price: "",
            image: "sosika.jpeg"
        },
        91: {
            title: "Kartof kababı",
            description: "",
            price: "",
            image: "kartofkababi.jpeg"
        },
        92: {
            title: "Kartof lüləsi ",
            description: "",
            price: "",
            image: "kartoflulesi.jpeg"
        },
        93: {
            title: 'Kartof kababı (quyruqla)',
            description: "",
            price: "",
            image: "kartofquyruq.jpeg"
        },
        94: {
            title: "Toyuq kababı",
            description: "",
            price: "",
            image: "toyuqkababi.jpeg"
        },
        95: {
            title: "Ciyər içalat",
            description: "",
            price: "",
            image: "ciyericalat.jpeg"
        },
        96: {
            title: 'Xan kababı',
            description: "",
            price: "",
            image: "xankababi.jpeg"
        },
        97: {
            title: "Lülə",
            description: "",
            price: "",
            image: "lule.jpeg"
        },
        98: {
            title: "Tikə",
            description: "",
            price: "",
            image: "tike.jpeg"
        },
        99: {
            title: 'Dana basdırma',
            description: "",
            price: "",
            image: "danabasdirma.jpeg"
        },
        100: {
            title: "Antrikot",
            description: "",
            price: "",
            image: "antrikot.jpeg"
        },
        101: {
            title: "Hinduşka kababı",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        102: {
            title: 'Qarışıq kabab',
            description: "",
            price: "",
            image: "sosisa.jpeg"
        },
        103: {
            title: "Kənd çolpası(setkada)",
            description: "",
            price: "",
            image: "yumurnta.jpeg"
        },
        104: {
            title: "Sadə lahmacun",
            description: "Dana əti  ,  soğan  ,  bibər  ,  pomidor  ,  cəfəri  ,  duz  ,  istiot  ,  un.",
            price: "",
            image: "sadelahmacun.jpeg"
        },
        105: {
            title: 'Acılı lahmacun',
            description: " Dana əti  ,  soğan  ,  bibər  ,  pomidor  ,  cəfəri  ,  duz  ,  istiot  , pul bibər  ,  un.",
            price: "",
            image: "acililahmacun.jpeg"
        },
        106: {
            title: "Pendirli lahmacun",
            description: "Dana əti  ,  soğan  ,  pendir  ,  bibər  ,  pomidor  ,  cəfəri  ,  duz  ,  istiot  ,  un.",
            price: "",
            image: "pendirlilahmacun.jpeg"
        },
        107: {
            title: "Hacıoglu qarışıq lahmacun",
            description: "Dana əti  ,  soğan  ,  bibər  ,  pomidor  ,  cəfəri  ,  qoz  ,  duz  ,  istiot  ,  un..",
            price: "",
            image: "qarisiqlahmacun.jpeg"
        },
        108: {
            title: 'Sadə pizza (böyük)',
            description: "Un  ,  maya  ,  süd  ,  pendir(mozarella)  ,  duz .",
            price: "",
            image: "sadepizza.jpeg"
        },
        109: {
            title: "Sadə pizza (kiçik)",
            description: "Un  ,  maya  ,  süd  ,  pendir(mozarella)  ,  duz .",
            price: "",
            image: "sadepizza.jpeg"
        },
        110: {
            title: "Toyuqlu pizza (böyük)",
            description: "Un  ,  maya  ,  süd  ,  pendir(mozarella)  ,  toyuq əti  ,  pomidor   ,  bibər  ,  göbələk  ,  duz.",
            price: "",
            image: "toyuqlupizza.jpeg"
        },
        111: {
            title: 'Toyuqlu pizza (kiçik)',
            description: "Un  ,  maya  ,  süd  ,  pendir(mozarella  ,  toyuq əti  ,  pomidor   ,  bibər  ,  göbələk  ,  duz.",
            price: "",
            image: "toyuqlupizza.jpeg"
        },
        112: {
            title: "Qıymalı pidə",
            description: "Un  ,  maya  ,  süd  ,  yağ  ,  dana əti  ,  bibər  ,  pomidor   ,  duz  ,  istiot.",
            price: "",
            image: "qiymalipide.jpeg"
        },
        113: {
            title: "Quşbaşı pidə",
            description: "Un  ,  maya  ,  süd  ,  pendir  ,  yağ  ,  dana əti  ,  bibər  ,  pomidor   ,  duz  ,  istiot..",
            price: "",
            image: "qusbasipide.jpeg"
        },
        114: {
            title: 'Sosisli pizza(böyük)',
            description: ".",
            price: "",
            image: "sosiskal.jpeg"
        },
        115: {
            title: "Sosisli pizza (kiçik)",
            description: "Un    maya    süd    duz    sosis    bibər    pomidor     göbələk .",
            price: "",
            image: "yumurnta.jpeg"
        },
        116: {
            title: "Qarışıq pidə",
            description: "Dana əti  ,  mozarella pendiri  ,  pomidor  ,  biber  ,  duz  ,  istiot.",
            price: "",
            image: "qarisiqpide.jpeg"
        },
        117: {
            title: 'Pendirli pidə',
            description: "Un  ,  maya  ,  yağ   ,  süd  ,  pendir(mozarella)  ,  duz .",
            price: "",
            image: "pendirlipide.jpeg"
        },
        118: {
            title: "Ətli pizza(böyük)",
            description: "Dana əti  ,  mozarella pendiri   ,  un  ,  maya  ,  duz  ,  şüyüd   ,  bibər  ,  pomidor   ,   göbələk .",
            price: "",
            image: "yumucrta.jpeg"
        },
        119: {
            title: "Ətli pizza (kiçik)",
            description: "Dana əti  ,  mozarella pendiri   ,  un  ,  maya  ,  duz  ,  şüyüd   ,  bibər  ,  pomidor   ,   göbələk ..",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        120: {
            title: 'Hacıoğlu qarışıq pizza',
            description: "Toyuq əti  ,  sosis   ,  kolbasa   ,  bibər  ,   pomidor   ,  göbələk  ,  mozarella pendiri   ,  un  ,  maya  ,  süd   ,  duz.",
            price: "",
            image: "qarisiqpizza.jpeg"
        },
        121: {
            title: "Keks",
            description: "Un  ,  şəkər tozu  ,  yumurta  ,  yağ  ,  kişmiş  ,   süd  ,  qabartma   ,  vanil .",
            price: "",
            image: "yumurtam.jpeg"
        },
        122: {
            title: "Şəkərçörəyi",
            description: "Un  , yumurta  ,  yağ  ,  şəkər tozu  ,  vanil  ,  qabartma.",
            price: "",
            image: "sekercoreyi.jpeg"
        },
        123: {
            title: 'Qoğal',
            description: "Un   şit yağ    pesok    yumurta .",
            price: "",
            image: "qogal.jpeg"
        },
        124: {
            title: "Bulka",
            description: "Un    yumurta    şəkər tozu    vanil    yağ.",
            price: "",
            image: "bulka.jpeg"
        },
        125: {
            title: "Turbuçka",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        126: {
            title: 'Simit',
            description: "Un  ,  yumurta  ,  şəkər tozu  , yağ  ,  yaş maya  ,  küncüt.",
            price: "",
            image: "simit.jpeg"
        },
        127: {
            title: "Ekler",
            description: "Su  ,  yağ  ,  yumurta   ,  qatılaşdırılmış süd .",
            price: "",
            image: "ekler.jpeg"
        },
        128: {
            title: "Kətə",
            description: "Un  ,  şəkər tozu  ,  yumurta  ,  yağ  ,  maya  ,  qoz ləpəsi",
            price: "",
            image: "kete.jpeg"
        },
        129: {
            title: 'Milli paxlava',
            description: "Un , yumurta  ,  şəkər tozu  ,  şit yağ  ,  maya  ,  vanil  ,  hil  ,  qoz  ,  şərbət .",
            price: "",
            image: "paxlava.jpeg"
        },
        130: {
            title: "Pirojna cemli ",
            description: "Toyuq əti , üyüdülmüş suxarik , holland pendiri , kərə yağı , duz , istiot.",
            price: "",
            image: "yumucrta.jpeg"
        },
        131: {
            title: "Pirojna",
            description: " Un  ,  yumurta  ,  şəkər tozu  ,  qatıq  ,  yağ  ,  qabartma   ,  vanil  ,   limon   ,  qatılaşdırılmış süd",
            price: "",
            image: "pirojna.jpeg"
        },
        132: {
            title: 'Snikers',
            description: "",
            price: "",
            image: "sosisa.jpeg"
        },
        133: {
            title: "Sütlac",
            description: " ",
            price: "",
            image: "sutlac.jpeg"
        },
        134: {
            title: "Mürəbbə",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        135: {
            title:'Künəfə',
            description: "",
            price: "",
            image: "kunefe.jpeg"
        },
        136: {
            title: "Tortlar(1kq)",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        137: {
            title: "Kələm",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        138: {
            title: 'Xiyar',
            description: "",
            price: "",
            image: "sosiska.jpeg"
        },
        139: {
            title: "Bibər",
            description: "",
            price: "",
            image: "yumurnta.jpeg"
        },
        140: {
            title: "Alça",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        141: {
            title: 'Badımcan',
            description: "",
            price: "",
            image: "sosisk.jpeg"
        },
        142: {
            title: "Sarımsaq",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        143: {
            title: "Assorti",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        144: {
            title: 'Çay (stakanda)',
            description: "",
            price: "",
            image: "cayfincan.jpeg"
        },
        145: {
            title: "Çay ",
            description: "",
            price: "",
            image: "cay.jpeg"
        },
        146: {
            title: "Süd",
            description: "",
            price: "",
            image: "sud.jpeg"
        },
        147: {
            title: 'Kofe',
            description: "",
            price: "",
            image: "cofe.jpeg"
        },
        148: {
            title: "İsti şokalad",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        149: {
            title: "Chapuchino",
            description: "",
            price: "",
            image: "kapucino.jpeg"
        },
        150: {
            title: 'Americano',
            description: "",
            price: "",
            image: "americano.jpeg"
        },
        151: {
            title: "Espresso",
            description: "",
            price: "",
            image: "expresso.jpeg"
        },
        152: {
            title: "Cofe extra",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        153: {
            title: 'Cofe latte',
            description: "",
            price: "",
            image: "latte.jpeg"
        },
        154: {
            title: "Çay destgahı çaynik",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        155: {
            title: "Çay destgahı Somavar",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        156: {
            title: 'Ayran',
            description: "",
            price: "",
            image: "ayran.jpeg"
        },
        157: {
            title: "Qatıq",
            description: "",
            price: "",
            image: "yumurdta.jpeg"
        },
        158: {
            title: "Su (qazlı/qazsız) 0.5lt",
            description: "",
            price: "",
            image: "cola5.jpeg"
        },
        159: {
            title: 'Su (qazlı/qazsız) 1.0lt',
            description: "",
            price: "",
            image: "cola.jpeg"
        },
        160: {
            title: "Cola Fanta Sprite  ",
            description: "",
            price: "",
            image: "Cola05.jpeg"
        },
        161: {
            title: "Cola Fanta Sprite",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        162: {
            title: 'Duşes tərxun ',
            description: "",
            price: "",
            image: "sosiska.jpeg"
        },
        163: {
            title: "Sirab Badamlı (şüşə)",
            description: "",
            price: "",
            image: "sirab.jpeg"
        },
        164: {
            title: "Cola fanta sprite ",
            description: "",
            price: "",
            image: "glass.jpeg"
        },
        165: {
            title: 'Cappy',
            description: "",
            price: "",
            image: "cappy.jpeg"
        },
        166: {
            title: "Soyuq Çaylar",
            description: "",
            price: "",
            image: "yumucrta.jpeg"
        },
        167: {
            title: "Soyuq Çaylar",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        168: {
            title: 'Kampot',
            description: "",
            price: "",
            image: "sosiska.jpeg"
        },
        169: {
            title: "Cappy",
            description: "",
            price: "",
            image: "cappy.jpeg"
        },
        170: {
            title: "Fresh",
            description: "",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        171: {
            title: 'RedBull',
            description: "",
            price: "",
            image: "Redbull.jpeg"
        },
        172: {
            title: "Hell Energy",
            description: "",
            price: "",
            image: "Hell.jpeg"
        },
        173: {
            title: "Aquavita",
            description: "",
            price: "",
            image: "Aquavita.jpeg"
        },
        174: {
            title: 'Gülüstan',
            description: "",
            price: "",
            image: "gulustan.jpeg"
        },
        175: {
            title: "Gülüstan",
            description: "",
            price: "",
            image: "gulustan.jpeg"
        },
        176: {
            title: "Milla ayran ",
            description: "",
            price: "",
            image: "milla.jpeg"
        },
        177: {
            title: 'Coolmix',
            description: "",
            price: "",
            image: "coolmix.jpeg"
        },
        178: {
            title: "Zadezani  ",
            description: "",
            price: "",
            image: "zadezani.jpeg"
        },
        179: {
            title: "Maccofe",
            description: " ",
            price: "",
            image: "maccofe.jpeg"
        },
        180: {
            title: 'Mia limonad',
            description: "",
            price: "",
            image: "mia05.jpeg"
        },
        181: {
            title: "Mia limonad",
            description: " ",
            price: "",
            image: "mia05.jpeg"
        },
        182: {
            title: "Mia Limonad ",
            description: "",
            price: "",
            image: "miaglass.jpeg"
        },
        183: {
            title: ' Qızıl quyu ',
            description: "",
            price: "",
            image: "qq05.jpeg"
        },
        184: {
            title: "Tərəvəz kababı",
            description: "",
            price: "",
            image: "terevez.jpeg"
        },
        185: {
            title: "Ballı tort",
            description: "Un , yumurta  ,  şəkər tozu  ,  ball  ,  soda  ,  süd  ,  sirkə  ,  yağ  ,  duz(az miqdarda) .",
            price: "",
            image: "balli.jpeg"
        },
        186: {
            title: 'Spartak tortu',
            description: "Un , yumurta  ,  şəkər tozu  ,  ball  ,  soda  ,  süd  ,  sirkə  ,  yağ  ,  duz(az miqdarda)  ,  kakao .",
            price: "",
            image: "spartak.jpeg"
        },
        187: {
            title: "Napoleon tortu",
            description: "",
            price: "",
            image: "napoleon.jpeg"
        },
        188: {
            title: "Şirali dana ",
            description:"",
            price: "",
            image: "kend_yumurtasi.jpeg"
        },
        189: {
            title: 'Quzu xaşdama',
            description: "",
            price: "",
            image: "sosiskam.jpeg"
        },
        190: {
            title: "Ət dönər",
            description: "",
            price: "",
            image: "etdoner.jpeg"
        },
        191: {
            title: "Toyuq doner",
            description: "",
            price: "",
            image: "toyuqdoner.jpeg"
        },
        192: {
            title: 'Isgəndər dönər',
            description: "Bu, sosiska hakkında açıklama metnidir.",
            price: "",
            image: ""
        },
        193: {
            title: 'Pulovüstü dönər',
            description: "",
            price: "",
            image: ""
        },
        194: {
            title: 'Porsion dönər',
            description: "",
            price: "",
            image: ""
        }
    };

    const data = itemData[itemId];
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-description').textContent = data.description;
    document.getElementById('modal-price').textContent = "Fiyat: " + data.price;

    const modalImage = document.getElementById('modal-image');
    modalImage.src = data.image;
    modalImage.alt = data.title;

    document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Modal dışına tıklamayı dinleyen kod
document.getElementById('myModal').addEventListener('click', function(event) {
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent.contains(event.target)) {
        closeModal();
    }
});



   