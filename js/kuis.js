/* ==========================================================================
   JAVANESIA — kuis.js
   Static Quiz Engine with Multi-level Question Bank (4 Levels from folder soal/),
   Interactive Feedback, Dynamic Progress Indicator, Score Calculation,
   and LocalStorage Sync.
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Question Bank (Statis 4 Level adhedhasar folder soal/)
     -------------------------------------------------------------------------- */
  const QUIZ_DATABASE = {
    1: {
      levelId: 1,
      title: 'Kuis Level 1',
      subtitle: 'Tingkat Dasar (Kelas 1) - Pemahaman tembung, basa sedina-dina, sesorah prasaja, lan wayang.',
      badgeName: 'Pemula Hebat 🏅',
      badgeIcon: 'assets/icons/badge-pemula.svg',
      rewardPoin: 50,
      questions: [
        {
          category: 'Tegese Tembung',
          prompt: 'Tegese tembung “kabersihan” ing teks sesorah utawa pidhato yaiku …',
          quote: '“Njaga kabersihan lingkungan sekolah”',
          options: ['Reged lan rusuh', 'Resik lan sehat', 'Rusak kahanane', 'Kotor ora karu-ruwan'],
          correctIndex: 1,
          explanation: 'Tembung “kabersihan” asale saka lingga “resik”, tegese kahanan sing resik, rapi, sarta adoh saka reregedan.'
        },
        {
          category: 'Unggah-Ungguh Basa',
          prompt: 'Basa krama sing bener saka ukara “Aku arep lunga” yaiku …',
          quote: '“Aku arep lunga menyang Solo”',
          options: ['Kula badhe kesah', 'Kula arep tindak', 'Aku tindak dhisik', 'Kula badhe mlaku'],
          correctIndex: 0,
          explanation: 'Kanggo awake dhewe nggunakake tembung “kula” lan “kesah” (krama lugu/andhap). Tembung “tindak” minangka krama inggil kagem wong liya.'
        },
        {
          category: 'Crita Wayang',
          prompt: 'Ing jagad pewayangan Jawa, Raden Werkudara (Bima) kalebu sedulur …',
          quote: '“Satriya gagah ing Jodhipati”',
          options: ['Kurawa', 'Pandhawa', 'Punakawan', 'Para Dewa'],
          correctIndex: 1,
          explanation: 'Raden Werkudara (Bima) yaiku satriya panenggak Pandhawa lima, putrane Prabu Pandu Dewanata lan Dewi Kunthi.'
        },
        {
          category: 'Watak Tokoh Wayang',
          prompt: 'Watak utama saka satriya panenggak Pandhawa, yaiku Raden Bima, yaiku …',
          quote: '“Watak satriya sejati”',
          options: [
            'Penakut lan gampang bingung',
            'Licik lan seneng cidra',
            'Gagah perkasa, jujur, lan setya marang bebener',
            'Males lan seneng turu'
          ],
          correctIndex: 2,
          explanation: 'Raden Bima misuwur minangka satriya gagah perkasa, jujur, ora nate ngapusi, sarta tansah mbelani bebener.'
        },
        {
          category: 'Tegese Tembung',
          prompt: 'Tegese tembung “gagah” ing ukara “Satriya iku awake gagah prakosa” yaiku …',
          quote: '“Pawakan gagah prakosa”',
          options: ['Kuwat, sentosa, lan wani', 'Lemah lan ringkih', 'Susah lan prihatin', 'Wedi marang musuh'],
          correctIndex: 0,
          explanation: 'Gagah tegese pawakan kang kuwat, sentosa, dhuwur gedhe, sarta ngemu watak kang kendel (wani).'
        },
        {
          category: 'Sastra Sesorah',
          prompt: 'Perangan pambuka (purwaka) sajrone sesorah/pidhato lumrahe ngemot …',
          quote: '“Purwaka sesorah”',
          options: [
            'Isi baku lan wigatining sesorah',
            'Salam pambuka, puji syukur, lan pakurmatan',
            'Nyuwun pangapura lan pamitan',
            'Donga lan pungkasaning atur'
          ],
          correctIndex: 1,
          explanation: 'Purwaka sesorah ngemot atur salam (kados sugeng enjang/sonten), puji syukur marang Gusti, sarta pakurmatan marang para rawuh.'
        },
        {
          category: 'Kabudayan Wayang',
          prompt: 'Wayang kulit tradhisional Jawa lumrahe kagawe saka bahan …',
          quote: '“Kagunan seni wayang kulit”',
          options: [
            'Kayu jati utawa trembesi',
            'Lulang / kulit kewan (sapi utawa kebo)',
            'Kertas karton kandel',
            'Plastik lan mika sintetis'
          ],
          correctIndex: 1,
          explanation: 'Wayang kulit kagawe saka lulang (kulit) kebo utawa sapi kang ditatah kanthi alus banjur disungging (diwernani) nganggo cet mirunggan.'
        },
        {
          category: 'Tokoh Wayang',
          prompt: 'Abdi dalem ing pewayangan kang asipat guyon, lucu, nanging kebak kawicaksanan diarani …',
          quote: '“Pamomong para satriya”',
          options: [
            'Para Kurawa',
            'Para Raseksa',
            'Punakawan (Semar, Gareng, Petruk, Bagong)',
            'Prajurit Alengka'
          ],
          correctIndex: 2,
          explanation: 'Punakawan cacahe ana 4 (Kyai Semar, Nala Gareng, Petruk, lan Bagong) minangka pamomong para satriya sing tansah menehi pitedhah becik kanthi rasa bungah.'
        },
        {
          category: 'Tata Krama Sesorah',
          prompt: 'Sikap lan tata krama sing becik nalika maju maca sesorah (pidhato) yaiku …',
          quote: '“Subasita maca sesorah”',
          options: [
            'Swara lirih banget lan ngadeg sembarangan',
            'Sopan, swara cetha, lan mantep pitaya diri',
            'Guyon terus tanpa mandheg',
            'Mripate ora mandeng para tamu'
          ],
          correctIndex: 1,
          explanation: 'Nalika sesorah kudu ngugemi subasita (sopan), adeg-adeg tegak, swara cetha (artikulasi gamblang), lan pitaya diri (percaya diri).'
        },
        {
          category: 'Piwulang Budi Pekerti',
          prompt: 'Piwulang luhur sing kakandhut sajrone pagelaran seni wayang yaiku …',
          quote: '“Tontonan lan tuntunan”',
          options: [
            'Mung kanggo dolanan ngisi wektu lodhang',
            'Ngemot nilai moral, piwulang luhur, lan tuntunan urip',
            'Tontonan sing ora ana gunane babar pisan',
            'Mung nampilake perang tanpa makna'
          ],
          correctIndex: 1,
          explanation: 'Pagelaran wayang iku tontonan sarta tuntunan, amarga ngemot piwulang luhur babagan budi pekerti lan bebener nglawan angkara murka.'
        }
      ]
    },
    2: {
      levelId: 2,
      title: 'Kuis Level 2',
      subtitle: 'Tingkat Menengah (Kelas 4) - Crita rakyat Timun Mas, jinis dongeng, lan paugeran tembang Gambuh.',
      badgeName: 'Pangripta Cerita 📜',
      badgeIcon: 'assets/icons/badge-kata.svg',
      rewardPoin: 100,
      questions: [
        {
          category: 'Crita Rakyat',
          prompt: 'Adhedhasar crita rakyat “Timun Mas”, apa sebabe buta ijo/raksasa ngoyak Timun Mas?',
          quote: '“Janji lawas ing desa”',
          options: [
            'Amarga Timun Mas nyolong panganan raksasa',
            'Amarga raksasa kepengin dadi kancane Timun Mas',
            'Amarga anane janji lawas antarane raksasa lan Mbok Srini (ibune)',
            'Amarga raksasa arep melu sinau bebarengan'
          ],
          correctIndex: 2,
          explanation: 'Mbok Srini nate nyuwun anak marang Buta Ijo kanthi prajanjian yen bocah wis gedhe kudu dipasrahake marang raksasa.'
        },
        {
          category: 'Crita Rakyat',
          prompt: 'Benda-benda pusaka paringane pertapa sing digunakake Timun Mas kanggo nglawan raksasa yaiku …',
          quote: '“Pusaka pitulungan pertapa”',
          options: [
            'Wiji timun, jarum, uyah, lan terasi',
            'Emas, inten, watu kali, lan keris',
            'Beras, jagung, pari, lan ketan',
            'Geni, banyu, angin, lan bumi'
          ],
          correctIndex: 0,
          explanation: 'Papat pusaka kasebut malih dadi alas timun, wit pring eri, segara amba, lan lendhut segara blethok kang nylepake Buta Ijo.'
        },
        {
          category: 'Penokohan Crita',
          prompt: 'Saka crita Timun Mas, watak lan sipat utama sing paling katon saka tokoh Timun Mas yaiku …',
          quote: '“Watak tokoh Timun Mas”',
          options: [
            'Kesed, gumendhe, lan manja',
            'Pemberani, cerdas, lan ora gampang pasrah',
            'Serakah, sombong, lan meri marang liyan',
            'Penakut lan gampang nangis'
          ],
          correctIndex: 1,
          explanation: 'Timun Mas nduweni kekendelan (keberanian) lan kapinteran mikir nalika ngadhepi bebaya raksasa tanpa rasa wedi.'
        },
        {
          category: 'Unsur Intrinsik',
          prompt: 'Unsur intrinsik sajrone crita rakyat sing nuduhake papan panggonan lan wektu dumadine crita diarani …',
          quote: '“Papan lan wektu kedadeyan”',
          options: ['Alur / plot', 'Latar / setting', 'Amanat / pesen moral', 'Tema crita'],
          correctIndex: 1,
          explanation: 'Latar utawa setting nyakup latar panggonan (desa/alas), latar wektu (jaman biyen/esuk), lan latar kahanan/swasana.'
        },
        {
          category: 'Jinis Crita Rakyat',
          prompt: 'Crita rakyat sing nyritakake babagan asal-usul dumadine sawijining panggonan diarani …',
          quote: '“Tuladha: Rawa Pening, Banyuwangi”',
          options: [
            'Mite (babagan para dewa utawa roh alus)',
            'Legenda (asal-usul papan panggonan)',
            'Fabel (crita paragane kewan)',
            'Sage (crita kepahlawanan kuna)'
          ],
          correctIndex: 1,
          explanation: 'Legenda yaiku crita rakyat ngenani dumadine sawijining panggonan utawa papan (tuladha: Asal-usul Rawa Pening, Selo Gilang).'
        },
        {
          category: 'Tembang Macapat',
          prompt: 'Ing kasusastran tradisi Jawa, tembang Gambuh kalebu golongane …',
          quote: '“Sekar Gambuh Ping Catur”',
          options: ['Geguritan modhern', 'Parikan bebas', 'Tembang Macapat', 'Tembang Dolanan bocah'],
          correctIndex: 2,
          explanation: 'Gambuh iku salah siji saka 11 jinis tembang macapat Jawa (Maskumambang, Mijil, Sinom, Kinanthi, Asmaradana, Gambuh, Dhandhanggula, Durma, Pangkur, Megatruh, Pocung).'
        },
        {
          category: 'Watak Tembang',
          prompt: 'Watak saka tembang Gambuh lumrahe ngemot swasana …',
          quote: '“Watak Sekar Gambuh”',
          options: [
            'Susah, nelangsa, lan sedhih banget',
            'Pitutur luhur, mulang, lan aweh nasihat babagan urip',
            'Gandrung kasmaran marang wong liya',
            'Nesu lan ajakan perang'
          ],
          correctIndex: 1,
          explanation: 'Watake tembang Gambuh yaiku grapyak, sumanak, mulang, cocok kanggo medharake pitutur lan nasihat kang becik.'
        },
        {
          category: 'Paugeran Macapat',
          prompt: 'Guru gatra (cacahe larik utawa baris saben sabait/pada) saka tembang Gambuh ana …',
          quote: '“Cacahe larik tembang Gambuh”',
          options: ['4 larik', '5 larik', '6 larik', '7 larik'],
          correctIndex: 1,
          explanation: 'Tembang Gambuh nduweni guru gatra 5 larik saben sakpada (sabait).'
        },
        {
          category: 'Guru Wilangan & Lagu',
          prompt: 'Paugeran guru wilangan lan guru lagu tembang Gambuh yaiku …',
          quote: '“Guru wilangan & guru lagu Gambuh”',
          options: [
            '7u, 10u, 12i, 8u, 8o',
            '8a, 11i, 8u, 7a, 12u',
            '12u, 6a, 8i, 12a, 8o',
            '10i, 6o, 10e, 10i, 6u'
          ],
          correctIndex: 0,
          explanation: 'Larik 1: 7u, Larik 2: 10u, Larik 3: 12i, Larik 4: 8u, Larik 5: 8o. Tuladha: “Sekar gambuh ping catur (7u)...”'
        },
        {
          category: 'Tegese Tembung',
          prompt: 'Nalika maca tembang Gambuh ana tembung “pitutur” lan “luhur”. Tegese tembung kasebut yaiku …',
          quote: '“Pitutur luhur marang sapadha”',
          options: [
            'Dolanan lan bungah',
            'Nasihat lan mulia',
            'Perjuangan lan kangelan',
            'Duka lan nesu'
          ],
          correctIndex: 1,
          explanation: 'Pitutur tegese nasihat utawa piwulang becik; dene luhur tegese mulia, utama, sarta dhuwur derajate budi pekertine.'
        }
      ]
    },
    3: {
      levelId: 3,
      title: 'Kuis Level 3',
      subtitle: 'Tingkat Lanjutan (Kelas 5) - Teks sesorah, basa krama, piranti pewayangan, lan Pandhawa lima.',
      badgeName: 'Wayang Expert 🎭',
      badgeIcon: 'assets/icons/badge-wayang.svg',
      rewardPoin: 150,
      questions: [
        {
          category: 'Teks Sesorah',
          prompt: 'Gatekna ukara sesorah: “Para rawuh, dinten menika kula badhe nyariosaken wigatosipun njaga kebersihan”. Tembung “wigatosipun” tegese …',
          quote: '“Wigatosipun njaga karesikan”',
          options: ['Kaendahane', 'Pentingipun / pentinge', 'Karesikane', 'Kepenake'],
          correctIndex: 1,
          explanation: 'Tembung “wigatos” iku basa krama saka tembung “penting” utawa bab kang kudu diutamakake.'
        },
        {
          category: 'Unggah-Ungguh Basa',
          prompt: 'Ukara “Aku arep mangan” yen diowahi menyang basa krama lugu/andhap kagem awake dhewe yaiku …',
          quote: '“Basa krama mangan”',
          options: ['Kula badhe nedha', 'Kula badhe dahar', 'Aku badhe nedha', 'Kula mangan sekul'],
          correctIndex: 0,
          explanation: 'Kanggo nyritakake awake dhewe mangan nggunakake “nedha”. Tembung “dahar” minangka krama inggil kagem tiyang sanes ingkang dipunurmati.'
        },
        {
          category: 'Nulis Sesorah',
          prompt: 'Langkah sepisanan sing kudu ditindakake sadurunge nulis teks sesorah yaiku …',
          quote: '“Langkah nggawe sesorah”',
          options: [
            'Nulis perangan panutup dhisik',
            'Nemtokake tema sesorah',
            'Maca sesorah kanthi banter ing ngarep kelas',
            'Nyiapake dekorasi papan panggonan'
          ],
          correctIndex: 1,
          explanation: 'Sadurunge nulis teks sesorah, awake dhewe kudu nemtokake tema dhisik supaya isine runtut lan cetha tujuane.'
        },
        {
          category: 'Piranti Wayang',
          prompt: 'Layar kain putih sing dibentangake kanggo papan wewayangan sajrone pagelaran wayang kulit diarani …',
          quote: '“Layar putih pagelaran wayang”',
          options: ['Blencong', 'Kelir', 'Kothak wayang', 'Cempala'],
          correctIndex: 1,
          explanation: 'Kelir yaiku mori putih sing dibentangake minangka layar kanggo nampani wewayangan wayang sajrone pagelaran wayang kulit.'
        },
        {
          category: 'Piranti Wayang',
          prompt: 'Lampu colok mirunggan (tradhisional lenga klentik) sing dadi sumber pepadhang wewayanganing wayang diarani …',
          quote: '“Pepadhang sajrone kelir”',
          options: ['Blencong', 'Kelir', 'Cempala', 'Kepyak'],
          correctIndex: 0,
          explanation: 'Blencong yaiku lampu mirunggan kanggo madhangi kelir, saengga bisa ngasilake wewayangan wayang sing cetha lan urip.'
        },
        {
          category: 'Falsafah Wayang',
          prompt: 'Kayon utawa Gunungan sajrone pagelaran wayang kulit nduweni pralambang minangka …',
          quote: '“Kayon / Gunungan Wayang”',
          options: [
            'Omah gedhe darbeke para raja',
            'Gumelaring alam semesta (wit kalpataru/jagad raya)',
            'Gaman pusaka kanggo perang',
            'Tumpeng sesaji ing kraton'
          ],
          correctIndex: 1,
          explanation: 'Gunungan/Kayon nggambarake jagad raya, wit panguripan (kalpataru), sarta dadi tetenger owahing babak jejer lakon wayang.'
        },
        {
          category: 'Pandhawa Lima',
          prompt: 'Sebutna urutan Pandhawa lima saka sing pambarep (paling sepuh) tumekaning waruju (ragil)!',
          quote: '“Urutan Pandhawa Lima”',
          options: [
            'Yudhistira, Bima, Arjuna, Nakula, Sadewa',
            'Bima, Arjuna, Yudhistira, Nakula, Sadewa',
            'Arjuna, Yudhistira, Bima, Sadewa, Nakula',
            'Yudhistira, Arjuna, Bima, Nakula, Sadewa'
          ],
          correctIndex: 0,
          explanation: 'Pambarep yaiku Prabu Puntadewa (Yudhistira), panenggak Werkudara (Bima), panengah Janaka (Arjuna), dene sumendhi lan waruju yaiku kembar Nakula lan Sadewa.'
        },
        {
          category: 'Tokoh Seni Pagelaran',
          prompt: 'Pawongan sing nduweni tugas ngatur lakon, ngobahake wayang, sarta nyritakake lakon sajrone pagelaran wayang diarani …',
          quote: '“Pemimpin pagelaran wayang”',
          options: ['Sinden / Waranggana', 'Niyaga / Pengrawit', 'Dhalang', 'Wiyaga'],
          correctIndex: 2,
          explanation: 'Dhalang asale saka tembung “ngudhal piwulang”, yaiku sutradara sarta pamicara tunggal sing nyritakake lan ngobahake wayang.'
        },
        {
          category: 'Paugeran Macapat',
          prompt: 'Sajrone paugeran tembang macapat, cacahe wanda (suku kata) ing saben sapada/sabaris diarani …',
          quote: '“Cacahe suku kata saben baris”',
          options: ['Guru lagu', 'Guru wilangan', 'Guru gatra', 'Guru swara'],
          correctIndex: 1,
          explanation: 'Guru wilangan yaiku cacahe wanda (suku kata) saben sabaris/sagatra. Tuladha: “Sekar gambuh ping catur” = 7 wanda.'
        },
        {
          category: 'Paugeran Macapat',
          prompt: 'Dhawahing swara vokal (a, i, u, e, o) ing pungkasaning gatra sajrone tembang macapat diarani …',
          quote: '“Tibaning swara pungkasaning gatra”',
          options: ['Guru gatra', 'Guru wilangan', 'Guru lagu', 'Guru sastra'],
          correctIndex: 2,
          explanation: 'Guru lagu yaiku tibaning swara vokal ing saben pungkasane gatra/larik tembang macapat.'
        }
      ]
    },
    4: {
      levelId: 4,
      title: 'Kuis Level 4',
      subtitle: 'Tingkat Mahir (Kelas 6) - Geguritan modern, analisis sesorah resmi, makna konotatif, lan basa alus.',
      badgeName: 'Master Sastra Jawa 👑',
      badgeIcon: 'assets/icons/gunungan.svg',
      rewardPoin: 200,
      questions: [
        {
          category: 'Karya Sastra Geguritan',
          prompt: 'Puisi Jawa modhern kang sipate bebas tanpa kaiket dening paugeran guru gatra, guru wilangan, lan guru lagu diarani …',
          quote: '“Rumpakan sastra gagrag anyar”',
          options: ['Tembang Macapat', 'Geguritan', 'Parikan', 'Wangsalan'],
          correctIndex: 1,
          explanation: 'Geguritan yaiku puisi gagrag anyar (modern) ing basa Jawa kang ora kaiket paugeran kaya dene macapat, nanging ngugemi kaendahan basa lan makna.'
        },
        {
          category: 'Makna Tembung Sesorah',
          prompt: 'Gatekna pethikan sesorah: “Para siswa ingkang kula tresnani…”. Tembung “tresnani” nduweni teges …',
          quote: '“Para siswa ingkang kula tresnani”',
          options: [
            'Sengit lan mangkel',
            'Tresna, asih, lan disenengi kanthi tulus',
            'Nesu marang tingkah polah',
            'Kaget lan gumun'
          ],
          correctIndex: 1,
          explanation: 'Tresnani asale saka lingga “tresna”, tegese nresnani kanthi tulusing ati, asih, sarta ngajeni para siswa.'
        },
        {
          category: 'Ukara Pambuka Sesorah',
          prompt: 'Ukara pambuka sesorah resmi ing ngisor iki sing paling trep lan nuduhake subasita pakurmatan marang para rawuh yaiku …',
          quote: '“Purwaka atur sesorah resmi”',
          options: [
            'Ayo kanca-kanca enggal padha mangan bareng!',
            'Para rawuh kakung miwah putri ingkang dahat kinurmatan…',
            'Aku arep crita bab dolanku wingi sore.',
            'Kanca-kanca kabeh, rungokna aku arep ngomong.'
          ],
          correctIndex: 1,
          explanation: 'Ukara pakurmatan resmi Jawa migunakake tembung krama alus kados “Para rawuh ingkang dahat kinurmatan” minangka rasa ngurmati para tamu.'
        },
        {
          category: 'Struktur Teks Sesorah',
          prompt: 'Struktur teks sesorah (pidhato) kanthi urutan kang runtut lan trep yaiku …',
          quote: '“Urutan struktur sesorah”',
          options: [
            'Isi (surasa basa) – Pambuka (purwaka) – Panutup (wasana basa)',
            'Pambuka (purwaka) – Isi (surasa basa) – Panutup (wasana basa)',
            'Panutup (wasana basa) – Isi (surasa basa) – Pambuka (purwaka)',
            'Pambuka (purwaka) – Panutup (wasana basa) – Isi (surasa basa)'
          ],
          correctIndex: 1,
          explanation: 'Sesorah kudu runtut diwiwiti saka Purwaka (pambuka), diterusake Surasa basa (isi inti), lan dipungkasi Wasana basa (panutup lan salam).'
        },
        {
          category: 'Apresiasi Geguritan',
          prompt: 'Gatekna pethikan geguritan: “Sekolahku resik lan asri, panggonan sinau saben dina”. Tembung “asri” nduweni teges …',
          quote: '“Sekolahku resik lan asri”',
          options: [
            'Reged, rusuh, lan peteng kahanane',
            'Apik, endah, lan nengsemake disawang',
            'Panas lan gersang',
            'Rame tanpa aturan'
          ],
          correctIndex: 1,
          explanation: 'Asri tegese apik, nengsemake ati, endah, sarta resik dinulu amarga akeh tanduran lan dirawat kanthi becik.'
        },
        {
          category: 'Makna Geguritan',
          prompt: 'Gatekna geguritan: “Tanduran ijo royo-royo, nggawé ati tentrem lan ayem”. Makna lan rasa sing diwedharake yaiku …',
          quote: '“Nggawé ati tentrem lan ayem”',
          options: [
            'Lingkungan sing ijo lan asri nuwuhake katentreman lan kanyamanan ing ati',
            'Tanduran gawe regeting plataran sekolah',
            'Tanduran kudu ditebangi amarga ngalangi dalan',
            'Godhong ijo mbebayani kanggone manungsa'
          ],
          correctIndex: 0,
          explanation: 'Geguritan kasebut nggambarake alam ijo royo-royo kang ngasilake hawa seger lan swasana ayem tentrem tumrap sapa wae sing nyawang.'
        },
        {
          category: 'Unggah-Ungguh Krama Alus',
          prompt: 'Ukara ing ngisor iki sing nggunakake tataran basa Krama Alus kanthi bener lan trep yaiku …',
          quote: '“Tataran Krama Alus”',
          options: [
            'Kula badhe tindak sekolah sakmenika',
            'Bapak nembe sare wonten ing kamar',
            'Aku arep lunga menyang pasar',
            'Ibu nembe nedha sekul goreng'
          ],
          correctIndex: 1,
          explanation: 'Kanggo wong tuwa (Bapak) nggunakake krama inggil “sare” (turu). Kanggo awake dhewe ora kena nggunakake tembung “tindak” (krama inggil).'
        },
        {
          category: 'Unsur Geguritan',
          prompt: 'Babagan paling baku lan wigati sing kakandhut sajrone teks geguritan yaiku …',
          quote: '“Wos surasa geguritan”',
          options: [
            'Cacahe kaca lan wernane kertas',
            'Makna, surasa, lan pesen amanat kang diwedharake pangripta',
            'Gedhe cilike huruf tulisan',
            'Bisa utawa orane digambar'
          ],
          correctIndex: 1,
          explanation: 'Wos surasa (makna) lan amanat (pesen moral) minangka jiwane geguritan supaya pamaos oleh piwulang luhur.'
        },
        {
          category: 'Panutup Sesorah',
          prompt: 'Ukara panutup sesorah resmi ing ngisor iki sing paling sopan lan trep yaiku …',
          quote: '“Wasana basa sesorah”',
          options: [
            'Cukup semene wae sesorahku, aku kesel.',
            'Mugi-mugi sesorah punika saged migunani tumrap kita sedaya, nyuwun agunging pangaksami, matur nuwun.',
            'Ayo padha bubar dhewe-dhewe saiki.',
            'Yen ana salah ya wis ben lumrah.'
          ],
          correctIndex: 1,
          explanation: 'Panutup sesorah ngemot panyuwunan pangapura (nyuwun agunging pangaksama) menawa ana kaluputan tembung, pangarep-arep paedah, lan ucapan panuwun.'
        },
        {
          category: 'Kabudayan & Basa Jawa',
          prompt: 'Basa Jawa alus sing nengenake subasita lan tata krama pakurmatan marang wong liya diarani basa …',
          quote: '“Subasita Basa Jawa”',
          options: [
            'Ngoko lugu',
            'Ngoko alus',
            'Krama (Krama Lugu & Krama Alus)',
            'Basa walikan'
          ],
          correctIndex: 2,
          explanation: 'Basa krama minangka tataran unggah-ungguh basa Jawa kang digunakake kanggo ngajeni lan ngurmati tiyang sanes kanthi budi pakerti luhur.'
        }
      ]
    }
  };

  /* --------------------------------------------------------------------------
     2. State Management & Storage
     -------------------------------------------------------------------------- */
  const STORAGE_KEY = 'javanesia_quiz_state';
  const AUTH_KEY = 'javanesia_user_name';

  function getUserStats() {
    const authName = (window.JavanesiaAuth && window.JavanesiaAuth.getUserName())
      || (localStorage.getItem(AUTH_KEY) || '').trim();

    const defaultStats = {
      name: authName || 'Tamu Budaya',
      role: 'Pelajar Budaya Jawa',
      poin: 120,
      rank: 120,
      unlockedLevels: [1],
      completedLevels: {},
      badges: ['Pemula Hebat 🏅']
    };

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = Object.assign({}, defaultStats, parsed);
        if (authName) {
          merged.name = authName;
        } else if (!merged.name || merged.name === 'Saka Ardian') {
          merged.name = 'Tamu Budaya';
        }
        return merged;
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    return defaultStats;
  }

  function saveUserStats(stats) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      console.warn('localStorage save error:', e);
    }
  }

  // Parse level parameter from URL (e.g. kuis.html?level=2)
  const urlParams = new URLSearchParams(window.location.search);
  let activeLevelId = parseInt(urlParams.get('level'), 10);
  if (!activeLevelId || !QUIZ_DATABASE[activeLevelId]) {
    activeLevelId = 1;
  }

  const currentLevelData = QUIZ_DATABASE[activeLevelId];
  const questions = currentLevelData.questions;

  let currentQuestionIndex = 0;
  let isSubmitted = false;
  // userAnswers: array of { selectedIndex: number, isCorrect: boolean }
  const userAnswers = new Array(questions.length).fill(null);

  /* --------------------------------------------------------------------------
     3. Audio Effects (Web Audio API Synthesizer - No External Audio Files)
     -------------------------------------------------------------------------- */
  function playSound(type) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      if (type === 'select') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(580, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'correct') {
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc1.frequency.exponentialRampToValueAtTime(1046.5, ctx.currentTime + 0.12);
        gain1.gain.setValueAtTime(0.15, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start();
        osc1.stop(ctx.currentTime + 0.35);
      } else if (type === 'wrong') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(140, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'complete') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          const start = ctx.currentTime + (idx * 0.1);
          gain.gain.setValueAtTime(0.15, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.35);
        });
      }
    } catch (e) {
      // Audio context might be restricted before first interaction
    }
  }

  /* --------------------------------------------------------------------------
     4. DOM Elements Cache
     -------------------------------------------------------------------------- */
  const dom = {
    quizProgressText: document.getElementById('quizProgressText'),
    quizDotsContainer: document.getElementById('quizDotsContainer'),
    quizCardContainer: document.getElementById('quizCardContainer'),
    quizPrompt: document.getElementById('quizPrompt'),
    quizQuote: document.getElementById('quizQuote'),
    quizOptionsContainer: document.getElementById('quizOptionsContainer'),
    btnQuizPrev: document.getElementById('btnQuizPrev'),
    btnQuizNext: document.getElementById('btnQuizNext'),
    // Result modal
    quizResultModal: document.getElementById('quizResultModal'),
    resultScoreBadge: document.getElementById('resultScoreBadge'),
    resultSummaryText: document.getElementById('resultSummaryText'),
    // Profile displays on quiz page
    evalUserPoin: document.querySelector('.eval-stat-round-box:first-of-type div:last-child')
  };

  /* --------------------------------------------------------------------------
     5. Render Methods
     -------------------------------------------------------------------------- */
  function renderHeaderAndBreadcrumbs() {
    // Breadcrumbs
    const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
    const breadcrumbLink = document.querySelectorAll('.breadcrumbs .breadcrumb-link');
    if (breadcrumbLink && breadcrumbLink[1]) {
      breadcrumbLink[1].textContent = `Level ${activeLevelId} - ${currentLevelData.title.replace('Kuis ', '')}`;
    }
    if (breadcrumbCurrent) {
      breadcrumbCurrent.textContent = `Kuis Level ${activeLevelId}`;
    }

    // Page title
    const mainTitle = document.querySelector('.subpage-title');
    if (mainTitle) mainTitle.textContent = currentLevelData.title;

    // Subtitle
    const subDesc = document.querySelector('.subpage-subtitle');
    if (subDesc) subDesc.textContent = currentLevelData.subtitle;

    // Section title
    const secTitle = document.querySelector('h2');
    if (secTitle && secTitle.textContent.includes('Kuis')) {
      secTitle.textContent = currentLevelData.title;
    }
  }

  function renderUserProfile() {
    const stats = getUserStats();
    if (dom.evalUserPoin) {
      dom.evalUserPoin.textContent = stats.poin;
    }
    const roleEl = document.getElementById('evalUserRole');
    if (roleEl) {
      const maxUnlocked = (stats.unlockedLevels && stats.unlockedLevels.length > 0) ? Math.max(...stats.unlockedLevels) : 1;
      const names = ['Tingkat Dasar (Kelas 1)', 'Tingkat Menengah (Kelas 4)', 'Tingkat Lanjutan (Kelas 5)', 'Tingkat Mahir (Kelas 6)'];
      roleEl.textContent = `Level ${maxUnlocked} - ${names[maxUnlocked - 1] || 'Tingkat Dasar'}`;
    }

    const userHeadings = document.querySelectorAll('.eval-user-heading');
    userHeadings.forEach(h => {
      h.textContent = stats.name;
    });
  }

  function renderDots() {
    if (!dom.quizDotsContainer) return;
    dom.quizDotsContainer.innerHTML = '';

    for (let i = 0; i < questions.length; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'quiz-dot';
      dot.setAttribute('aria-label', `Pindah ke Soal ${i + 1}`);

      if (i === currentQuestionIndex) {
        dot.classList.add('active');
      }

      if (userAnswers[i] !== null) {
        dot.classList.add('answered');
        if (isSubmitted) {
          if (userAnswers[i].isCorrect) {
            dot.classList.add('correct');
          } else {
            dot.classList.add('wrong');
          }
        }
      }

      dot.addEventListener('click', () => {
        jumpToQuestion(i);
      });

      dom.quizDotsContainer.appendChild(dot);
    }
  }

  function renderQuestion() {
    const q = questions[currentQuestionIndex];
    if (!q) return;

    // 1. Progress Text
    if (dom.quizProgressText) {
      dom.quizProgressText.textContent = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
    }

    // 2. Dots
    renderDots();

    // 3. Category Pill
    let pill = dom.quizCardContainer.querySelector('.quiz-soal-pill');
    if (!pill) {
      pill = document.createElement('span');
      pill.className = 'quiz-soal-pill';
      dom.quizCardContainer.prepend(pill);
    }
    pill.textContent = q.category || `SOAL ${currentQuestionIndex + 1}`;

    // 4. Prompt
    if (dom.quizPrompt) {
      dom.quizPrompt.textContent = q.prompt;
    }

    // 5. Quote
    if (dom.quizQuote) {
      if (q.quote) {
        dom.quizQuote.style.display = 'block';
        dom.quizQuote.textContent = q.quote;
      } else {
        dom.quizQuote.style.display = 'none';
      }
    }

    // 6. Options
    if (dom.quizOptionsContainer) {
      dom.quizOptionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      const currentAns = userAnswers[currentQuestionIndex];

      q.options.forEach((optText, idx) => {
        const item = document.createElement('div');
        item.className = 'quiz-option-item';
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');

        if (isSubmitted) {
          item.classList.add('disabled');
          if (idx === q.correctIndex) {
            item.classList.add('correct');
          } else if (currentAns && idx === currentAns.selectedIndex) {
            item.classList.add('wrong');
          }
        } else {
          if (currentAns && idx === currentAns.selectedIndex) {
            item.classList.add('selected');
          }
        }

        const letterSpan = document.createElement('span');
        letterSpan.className = 'quiz-opt-letter';
        letterSpan.textContent = letters[idx];

        const textSpan = document.createElement('span');
        textSpan.className = 'quiz-opt-text';
        textSpan.textContent = optText;

        item.appendChild(letterSpan);
        item.appendChild(textSpan);

        item.addEventListener('click', () => {
          if (!isSubmitted) {
            handleAnswer(idx);
          }
        });

        dom.quizOptionsContainer.appendChild(item);
      });
    }

    // 7. Feedback Box (hanya muncul setelah kuis selesai disubmit)
    let feedbackBox = document.getElementById('quizFeedbackBox');
    if (!feedbackBox) {
      feedbackBox = document.createElement('div');
      feedbackBox.id = 'quizFeedbackBox';
      dom.quizCardContainer.appendChild(feedbackBox);
    }

    const currentAns = userAnswers[currentQuestionIndex];
    if (isSubmitted && currentAns !== null) {
      feedbackBox.style.display = 'block';
      feedbackBox.className = 'quiz-feedback-box ' + (currentAns.isCorrect ? 'correct' : 'wrong');
      const icon = currentAns.isCorrect ? '✅ Bener Banget!' : '❌ Kurang Trep!';
      feedbackBox.innerHTML = `
        <div class="quiz-feedback-title">${icon}</div>
        <div style="font-size: 0.85rem; color: var(--text-dark);">${q.explanation}</div>
      `;
    } else {
      feedbackBox.style.display = 'none';
      feedbackBox.innerHTML = '';
    }

    // 8. Navigation Buttons State
    if (dom.btnQuizPrev) {
      dom.btnQuizPrev.disabled = (currentQuestionIndex === 0);
      dom.btnQuizPrev.style.opacity = (currentQuestionIndex === 0) ? '0.45' : '1';
      dom.btnQuizPrev.style.pointerEvents = (currentQuestionIndex === 0) ? 'none' : 'auto';
    }

    if (dom.btnQuizNext) {
      const isLast = (currentQuestionIndex === questions.length - 1);
      if (isLast) {
        dom.btnQuizNext.innerHTML = isSubmitted
          ? '<span>Lihat Nilai</span><span>📊</span>'
          : '<span>Selesai &amp; Lihat Nilai</span><span>🎉</span>';
      } else {
        dom.btnQuizNext.innerHTML = '<span>Lanjut</span><span>→</span>';
      }
    }
  }

  /* --------------------------------------------------------------------------
     6. User Interaction Handlers
     -------------------------------------------------------------------------- */
  function handleAnswer(selectedIndex) {
    if (isSubmitted) return;

    const q = questions[currentQuestionIndex];
    const isCorrect = (selectedIndex === q.correctIndex);

    userAnswers[currentQuestionIndex] = {
      selectedIndex: selectedIndex,
      isCorrect: isCorrect
    };

    playSound('select');
    renderQuestion();
  }

  function jumpToQuestion(targetIndex) {
    if (targetIndex >= 0 && targetIndex < questions.length) {
      currentQuestionIndex = targetIndex;
      renderQuestion();
      if (dom.quizCardContainer) {
        dom.quizCardContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function nextQuestion() {
    if (!isSubmitted && userAnswers[currentQuestionIndex] === null) {
      if (window.showToast) {
        window.showToast('Mangga pilih salah siji wangsulan dhisik ya! ✨');
      }
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      if (isSubmitted) {
        dom.quizResultModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
      }
      const unanswered = userAnswers.filter(a => a === null).length;
      if (unanswered > 0) {
        if (confirm(`Ana ${unanswered} soal sing durung diwangsuli. Apa kowe tetep arep mungkasi kuis iki?`)) {
          finishQuiz();
        }
      } else {
        finishQuiz();
      }
    }
  }

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  }

  /* --------------------------------------------------------------------------
     7. Finish & Results Calculation
     -------------------------------------------------------------------------- */
  function finishQuiz() {
    isSubmitted = true;
    playSound('complete');

    let correctCount = 0;
    userAnswers.forEach(ans => {
      if (ans && ans.isCorrect) correctCount++;
    });

    const score = Math.round((correctCount / questions.length) * 100);
    const passed = score >= 60;

    // Update LocalStorage Stats
    const stats = getUserStats();

    const poinEarned = Math.round((score / 100) * currentLevelData.rewardPoin);
    stats.poin = (stats.poin || 0) + poinEarned;

    if (!stats.completedLevels) stats.completedLevels = {};
    const prevBest = stats.completedLevels[activeLevelId] || 0;
    if (score > prevBest) {
      stats.completedLevels[activeLevelId] = score;
    }

    // Unlock next level if passed (Total 4 Levels)
    if (passed && activeLevelId < 4) {
      const nextLevel = activeLevelId + 1;
      if (!stats.unlockedLevels.includes(nextLevel)) {
        stats.unlockedLevels.push(nextLevel);
      }
    }

    // Award Badge
    if (passed && currentLevelData.badgeName && !stats.badges.includes(currentLevelData.badgeName)) {
      stats.badges.push(currentLevelData.badgeName);
    }

    saveUserStats(stats);
    renderUserProfile();
    renderQuestion();

    // Show Result in Modal
    showResultModal(score, correctCount, poinEarned, passed);
  }

  function showResultModal(score, correctCount, poinEarned, passed) {
    if (!dom.quizResultModal) return;

    if (dom.resultScoreBadge) {
      dom.resultScoreBadge.textContent = `${score}`;
    }

    const gradeStatus = document.getElementById('resultGradeStatus');
    if (gradeStatus) {
      if (score === 100) {
        gradeStatus.textContent = 'Sempurna ✨';
        gradeStatus.style.color = '#27ae60';
      } else if (passed) {
        gradeStatus.textContent = 'Lulus 👍';
        gradeStatus.style.color = '#27ae60';
      } else {
        gradeStatus.textContent = 'Perlu Belajar 💪';
        gradeStatus.style.color = '#c0392b';
      }
    }

    const accuracyEl = document.getElementById('resultAccuracy');
    if (accuracyEl) {
      accuracyEl.textContent = `${correctCount} / ${questions.length}`;
    }

    const accuracySubEl = document.getElementById('resultAccuracySub');
    if (accuracySubEl) {
      accuracySubEl.textContent = `${Math.round((correctCount / questions.length) * 100)}% Benar`;
    }

    const badgeNameEl = document.getElementById('resultBadgeName');
    if (badgeNameEl) {
      badgeNameEl.textContent = passed ? currentLevelData.badgeName : 'Coba Meneh 💪';
    }

    const badgeStatusEl = document.getElementById('resultBadgeStatus');
    if (badgeStatusEl) {
      badgeStatusEl.textContent = passed ? 'Tercapai ✨' : 'Belum Terbuka';
      badgeStatusEl.style.color = passed ? '#1e7e34' : '#c0392b';
    }

    const badgeIconEl = document.getElementById('resultBadgeIcon');
    if (badgeIconEl && currentLevelData.badgeIcon) {
      badgeIconEl.src = currentLevelData.badgeIcon;
    }

    const currentName = getUserStats().name;
    const isNamed = currentName && currentName !== 'Tamu Budaya';
    const greeting = isNamed ? `Sugeng, ${currentName}! ` : '';

    const modalTitle = document.getElementById('resultModalTitle');
    if (modalTitle) {
      if (score === 100) {
        modalTitle.textContent = isNamed ? `Sampurna, ${currentName}! 🎉` : 'Sampurna! Luar Biasa! 🎉';
      } else if (passed) {
        modalTitle.textContent = isNamed ? `Sugeng, ${currentName}! Kuis Selesai! 🎉` : 'Sugeng! Kuis Selesai! 🎉';
      } else {
        modalTitle.textContent = isNamed ? `Tetep Semangat, ${currentName}! 💪` : 'Tetep Semangat Nyinaoni! 💪';
      }
    }

    if (dom.resultSummaryText) {
      if (score === 100) {
        dom.resultSummaryText.textContent = `${greeting}Kowe kasil mangsuli kabeh ${questions.length} pitakonan kanthi bener tanpa cacat (+${poinEarned} Poin)! Kawruhmu babagan kabudayan Jawa wis jero banget.`;
      } else if (passed) {
        dom.resultSummaryText.textContent = `${greeting}Kowe kasil mangsuli ${correctCount} saka ${questions.length} pitakonan kanthi bener (+${poinEarned} Poin).`;
      } else {
        dom.resultSummaryText.textContent = `${greeting}Kowe mangsuli ${correctCount} saka ${questions.length} pitakonan kanthi bener (${score} poin). Aja patah semangat, ayo disinaoni maneh!`;
      }
    }

    const reviewBadge = document.getElementById('reviewCountBadge');
    if (reviewBadge) {
      reviewBadge.textContent = `(${correctCount}/${questions.length} Benar)`;
    }

    // Populate Review Cards
    const reviewContainer = document.getElementById('quizReviewListContainer');
    if (reviewContainer) {
      reviewContainer.innerHTML = '';
      questions.forEach((q, idx) => {
        const uAns = userAnswers[idx];
        const isRight = uAns && uAns.isCorrect;
        const userChoice = (uAns !== null && uAns.selectedIndex !== undefined) ? q.options[uAns.selectedIndex] : '(Ora diwangsuli)';
        const rightChoice = q.options[q.correctIndex];

        const card = document.createElement('div');
        card.className = `quiz-review-card ${isRight ? 'is-correct' : 'is-wrong'}`;
        card.innerHTML = `
          <div class="quiz-review-card-header">
            <span class="quiz-review-num">Soal ${idx + 1} &bull; ${q.category || 'Materi'}</span>
            <span class="quiz-review-pill ${isRight ? 'correct' : 'wrong'}">
              ${isRight ? 'Benar ✓' : 'Salah ✗'}
            </span>
          </div>
          <div class="quiz-review-question">${q.prompt}</div>
          <div class="quiz-review-answers-box">
            <div class="quiz-ans-line user">
              <strong>Jawabanmu:</strong> ${userChoice}
            </div>
            ${!isRight ? `<div class="quiz-ans-line correct-key"><strong>Kunci Jawaban:</strong> ${rightChoice}</div>` : ''}
          </div>
          <div class="quiz-review-explanation">
            <strong>Piwulang:</strong> ${q.explanation}
          </div>
        `;
        reviewContainer.appendChild(card);
      });
    }

    dom.quizResultModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.toggleReviewList = function () {
    const list = document.getElementById('quizReviewListContainer');
    const arrow = document.getElementById('reviewToggleArrow');
    if (!list) return;
    if (list.style.display === 'none') {
      list.style.display = 'flex';
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    } else {
      list.style.display = 'none';
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    }
  };

  window.restartQuiz = function () {
    isSubmitted = false;
    for (let i = 0; i < userAnswers.length; i++) {
      userAnswers[i] = null;
    }
    currentQuestionIndex = 0;
    if (dom.quizResultModal) {
      dom.quizResultModal.classList.remove('open');
      document.body.style.overflow = '';
    }
    renderQuestion();
  };

  window.reviewOnPage = function () {
    if (dom.quizResultModal) {
      dom.quizResultModal.classList.remove('open');
      document.body.style.overflow = '';
    }
    jumpToQuestion(0);
  };

  /* --------------------------------------------------------------------------
     8. Initialization
     -------------------------------------------------------------------------- */
  function init() {
    renderHeaderAndBreadcrumbs();
    renderUserProfile();
    renderQuestion();

    if (dom.btnQuizNext) {
      dom.btnQuizNext.addEventListener('click', nextQuestion);
    }
    if (dom.btnQuizPrev) {
      dom.btnQuizPrev.addEventListener('click', prevQuestion);
    }

    // Support keyboard arrows
    document.addEventListener('keydown', function (e) {
      if (dom.quizResultModal && dom.quizResultModal.classList.contains('open')) {
        return;
      }
      if (e.key === 'ArrowRight') {
        nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        prevQuestion();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optIdx = parseInt(e.key, 10) - 1;
        if (!isSubmitted) {
          handleAnswer(optIdx);
        }
      }
    });
  }

  window.addEventListener('javanesia:auth-changed', renderUserProfile);

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
