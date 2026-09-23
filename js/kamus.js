(function () {
  'use strict';

  const KAMUS_DATA = [
  {
    "id": "Ada",
    "ngoko": "Ana",
    "krama": "Wonten"
  },
  {
    "id": "Adik",
    "ngoko": "Adhi",
    "krama": "Rayi"
  },
  {
    "id": "Agak",
    "ngoko": "Rada",
    "krama": "Radi"
  },
  {
    "id": "Agama",
    "ngoko": "Agama",
    "krama": "Agami"
  },
  {
    "id": "Air",
    "ngoko": "Banyu",
    "krama": "Toya"
  },
  {
    "id": "Air mata",
    "ngoko": "Luh",
    "krama": "Waspa"
  },
  {
    "id": "Airmata",
    "ngoko": "Êluh",
    "krama": "Waspa"
  },
  {
    "id": "Akan",
    "ngoko": "Bakal",
    "krama": "Badhe"
  },
  {
    "id": "Alat",
    "ngoko": "Piranti",
    "krama": "Pirantos"
  },
  {
    "id": "Alis",
    "ngoko": "Alis",
    "krama": "Imba"
  },
  {
    "id": "Amal",
    "ngoko": "Dêrma",
    "krama": "Drêma"
  },
  {
    "id": "Ambil",
    "ngoko": "Amek",
    "krama": "Mêndhêt"
  },
  {
    "id": "Ambil",
    "ngoko": "Jupuk",
    "krama": "Pendhet"
  },
  {
    "id": "Ambil",
    "ngoko": "Pek",
    "krama": "Pêndhêt"
  },
  {
    "id": "Ambil",
    "ngoko": "Êpêk",
    "krama": "Pêndhêt"
  },
  {
    "id": "Ampun, Maaf",
    "ngoko": "Aksama",
    "krama": "Aksami"
  },
  {
    "id": "Anak",
    "ngoko": "Anak",
    "krama": "Anak, Lare"
  },
  {
    "id": "Anak",
    "ngoko": "Bocah",
    "krama": "Lare"
  },
  {
    "id": "Ani-ani (Alat penuai padi)",
    "ngoko": "Ani-ani",
    "krama": "Pugut"
  },
  {
    "id": "Anjing",
    "ngoko": "Asu",
    "krama": "Sêgawon"
  },
  {
    "id": "Antara",
    "ngoko": "Antara",
    "krama": "Antawis"
  },
  {
    "id": "Antara, Kira-kira",
    "ngoko": "Watara",
    "krama": "Watawis"
  },
  {
    "id": "Apa",
    "ngoko": "Apa",
    "krama": "Punapa"
  },
  {
    "id": "Apa yang ditanyakan",
    "ngoko": "Pitakon",
    "krama": "Pitakên"
  },
  {
    "id": "Api",
    "ngoko": "Gêni",
    "krama": "Latu"
  },
  {
    "id": "Arah",
    "ngoko": "Êner",
    "krama": "Lêrês"
  },
  {
    "id": "Arti, Maksud",
    "ngoko": "Surasa",
    "krama": "Suraos"
  },
  {
    "id": "Artinya",
    "ngoko": "Jarwa",
    "krama": "Jarwi"
  },
  {
    "id": "Asal usul keturunan",
    "ngoko": "Turunan",
    "krama": "Têdhakan"
  },
  {
    "id": "Asalkan",
    "ngoko": "Anggêr",
    "krama": "Saugêr"
  },
  {
    "id": "Asalnya",
    "ngoko": "Saka",
    "krama": "Saking"
  },
  {
    "id": "Atau",
    "ngoko": "Utawa",
    "krama": "Utawi"
  },
  {
    "id": "Ayam",
    "ngoko": "Pitik",
    "krama": "Ayam"
  },
  {
    "id": "Babi hutan",
    "ngoko": "Celeng",
    "krama": "Andhapan"
  },
  {
    "id": "Baca",
    "ngoko": "Waca",
    "krama": "Waos"
  },
  {
    "id": "Bacaan",
    "ngoko": "Wacan",
    "krama": "Waosan"
  },
  {
    "id": "Badan, Tubuh",
    "ngoko": "Awak",
    "krama": "Badan"
  },
  {
    "id": "Bagaimana",
    "ngoko": "Kêpriye",
    "krama": "Kados pundi"
  },
  {
    "id": "Bagian / sisi belakang",
    "ngoko": "Pungkur",
    "krama": "Pêngkêr"
  },
  {
    "id": "Bahaya",
    "ngoko": "Mutawatir",
    "krama": "Mutawantos"
  },
  {
    "id": "Baik",
    "ngoko": "Bêcik",
    "krama": "Sae"
  },
  {
    "id": "Baik, Bagus",
    "ngoko": "Apik",
    "krama": "Sae"
  },
  {
    "id": "Baja",
    "ngoko": "Waja",
    "krama": "Waos"
  },
  {
    "id": "Bajak",
    "ngoko": "Luku",
    "krama": "Lujêng"
  },
  {
    "id": "Baju",
    "ngoko": "Klambi",
    "krama": "Rasukan"
  },
  {
    "id": "Bakar",
    "ngoko": "Obong",
    "krama": "Bêsmi"
  },
  {
    "id": "Bambu",
    "ngoko": "Pring",
    "krama": "Dêling, Bambu"
  },
  {
    "id": "Bangsawan",
    "ngoko": "Priyayi",
    "krama": "Priyantun"
  },
  {
    "id": "Bangun",
    "ngoko": "Gugah",
    "krama": "Gigah"
  },
  {
    "id": "Bangun",
    "ngoko": "Tangi",
    "krama": "Wungu"
  },
  {
    "id": "Banjir",
    "ngoko": "Banjir",
    "krama": "Bêna"
  },
  {
    "id": "Bantal",
    "ngoko": "Bantal",
    "krama": "Kajang"
  },
  {
    "id": "Banyak",
    "ngoko": "Akeh",
    "krama": "Kathah"
  },
  {
    "id": "Bapak",
    "ngoko": "Bapa, Bapak",
    "krama": "Rama"
  },
  {
    "id": "Bara api",
    "ngoko": "Mawa",
    "krama": "Mawi"
  },
  {
    "id": "Barangkali",
    "ngoko": "Ayake",
    "krama": "Mbok mênawi"
  },
  {
    "id": "Barat",
    "ngoko": "Kulon",
    "krama": "Kilen"
  },
  {
    "id": "Baru",
    "ngoko": "Anyar",
    "krama": "Enggal"
  },
  {
    "id": "Baru saja",
    "ngoko": "Agek",
    "krama": "Sawêg"
  },
  {
    "id": "Baru Saja",
    "ngoko": "Lagi",
    "krama": "Saweg"
  },
  {
    "id": "Baru saja",
    "ngoko": "Mêntas",
    "krama": "Nêmbe"
  },
  {
    "id": "Baru saja",
    "ngoko": "Êntas",
    "krama": "Nêmbe"
  },
  {
    "id": "Batang pohon",
    "ngoko": "Kayu",
    "krama": "Kajêng"
  },
  {
    "id": "Batik",
    "ngoko": "Bathik",
    "krama": "Sêrat"
  },
  {
    "id": "Batin",
    "ngoko": "Batin",
    "krama": "Batos"
  },
  {
    "id": "Batu",
    "ngoko": "Watu",
    "krama": "Sela"
  },
  {
    "id": "Batu bata",
    "ngoko": "Bata",
    "krama": "Banon"
  },
  {
    "id": "Batuk",
    "ngoko": "Watuk",
    "krama": "Cêkoh"
  },
  {
    "id": "Bau",
    "ngoko": "Ambu",
    "krama": "Ambêt"
  },
  {
    "id": "Bawa",
    "ngoko": "Gawa",
    "krama": "Bekta"
  },
  {
    "id": "Bawah",
    "ngoko": "Isor",
    "krama": "Andhap"
  },
  {
    "id": "Beda",
    "ngoko": "Beda",
    "krama": "Bêntên"
  },
  {
    "id": "Beda, Selisih",
    "ngoko": "Kacek",
    "krama": "Kaot"
  },
  {
    "id": "Bedak",
    "ngoko": "Boreh",
    "krama": "Konyoh"
  },
  {
    "id": "Bedak",
    "ngoko": "Pupur",
    "krama": "Tasik"
  },
  {
    "id": "Bedak perut",
    "ngoko": "Tapêl",
    "krama": "Rakêtan"
  },
  {
    "id": "Bekas",
    "ngoko": "Lorodan",
    "krama": "Lorodan"
  },
  {
    "id": "Bekerja",
    "ngoko": "Nyambut gawe",
    "krama": "Nyambut damêl"
  },
  {
    "id": "Belakang",
    "ngoko": "Buri",
    "krama": "Wingking"
  },
  {
    "id": "Belakang",
    "ngoko": "Ungkur",
    "krama": "Pêngkêr"
  },
  {
    "id": "Belanda",
    "ngoko": "Landa",
    "krama": "Landi"
  },
  {
    "id": "Belanda",
    "ngoko": "Walanda",
    "krama": "Walandi"
  },
  {
    "id": "Beli",
    "ngoko": "Tuku",
    "krama": "Tumbas"
  },
  {
    "id": "Belum",
    "ngoko": "Durung",
    "krama": "Dereng"
  },
  {
    "id": "Benang",
    "ngoko": "Bolah",
    "krama": "Bênang"
  },
  {
    "id": "Benar, Betul",
    "ngoko": "Bênêr",
    "krama": "Lêrês"
  },
  {
    "id": "Berangkat",
    "ngoko": "Budhal",
    "krama": "Bidhal"
  },
  {
    "id": "Berani",
    "ngoko": "Kêndêl",
    "krama": "Purun"
  },
  {
    "id": "Berani",
    "ngoko": "Wani",
    "krama": "Wantun"
  },
  {
    "id": "Berapa",
    "ngoko": "Pira",
    "krama": "Pintên"
  },
  {
    "id": "Beras",
    "ngoko": "Bêras",
    "krama": "Wos"
  },
  {
    "id": "Berat",
    "ngoko": "Abot",
    "krama": "Awrat"
  },
  {
    "id": "Beratnya",
    "ngoko": "Bobot",
    "krama": "Wawratipun"
  },
  {
    "id": "Berbeda",
    "ngoko": "Seje",
    "krama": "Sanes"
  },
  {
    "id": "Berbicara",
    "ngoko": "Calathu",
    "krama": "Wicantên"
  },
  {
    "id": "Berbicara",
    "ngoko": "Gunêm",
    "krama": "Ginêm"
  },
  {
    "id": "Bercebok",
    "ngoko": "Cewok",
    "krama": "Cawik"
  },
  {
    "id": "Bercelana",
    "ngoko": "Kathokan",
    "krama": "Sruwalan"
  },
  {
    "id": "Bercukur",
    "ngoko": "Cukur",
    "krama": "Pangkas"
  },
  {
    "id": "Berdiri",
    "ngoko": "Adêg",
    "krama": "Jumênêng"
  },
  {
    "id": "Berdiri",
    "ngoko": "Ngadêk",
    "krama": "Jumênêng"
  },
  {
    "id": "Bergerak",
    "ngoko": "Obah",
    "krama": "Ebah"
  },
  {
    "id": "Berhenti",
    "ngoko": "Mandhêg",
    "krama": "Kendêl"
  },
  {
    "id": "Berhias",
    "ngoko": "Dandan",
    "krama": "Dandos"
  },
  {
    "id": "Beri",
    "ngoko": "Atur",
    "krama": "Unjuk"
  },
  {
    "id": "Beri",
    "ngoko": "Aweh",
    "krama": "Nyukani"
  },
  {
    "id": "Berita, Kabar",
    "ngoko": "Wêrta",
    "krama": "Wêrtos, Wartos"
  },
  {
    "id": "Berjalan",
    "ngoko": "Mlaku",
    "krama": "Mlampah"
  },
  {
    "id": "Berjasa untuk",
    "ngoko": "Labuh",
    "krama": "Labêt"
  },
  {
    "id": "Berkata",
    "ngoko": "Kandha",
    "krama": "Sanjang"
  },
  {
    "id": "Berkata",
    "ngoko": "Tutur",
    "krama": "Sanjang, Criyos"
  },
  {
    "id": "Berkeliling",
    "ngoko": "Idêr",
    "krama": "Pêpara"
  },
  {
    "id": "Berkenalan",
    "ngoko": "Têtêpungan",
    "krama": "Têtêpangan"
  },
  {
    "id": "Berkumur",
    "ngoko": "Kêkêmon",
    "krama": "Kêkêmbêngan"
  },
  {
    "id": "Berkunjung, Menjenguk",
    "ngoko": "Tilik",
    "krama": "Tuwi"
  },
  {
    "id": "Bersama",
    "ngoko": "Barêng",
    "krama": "Sarêng"
  },
  {
    "id": "Bersin",
    "ngoko": "Wahing",
    "krama": "Sigra"
  },
  {
    "id": "Bersuara",
    "ngoko": "Muni",
    "krama": "Mungel"
  },
  {
    "id": "Bertambah",
    "ngoko": "Wuwuh",
    "krama": "Wêtah"
  },
  {
    "id": "Bertanya",
    "ngoko": "Takon",
    "krama": "Taken"
  },
  {
    "id": "Bertelur",
    "ngoko": "Ngendhog",
    "krama": "Nigan"
  },
  {
    "id": "Bertemu",
    "ngoko": "Kêtêmu",
    "krama": "Kêpanggih"
  },
  {
    "id": "Bertengkar",
    "ngoko": "Madu",
    "krama": "Mabên"
  },
  {
    "id": "Bertengkar",
    "ngoko": "Padu",
    "krama": "Pabên"
  },
  {
    "id": "Berubah",
    "ngoko": "Owah",
    "krama": "Ewah"
  },
  {
    "id": "Besar",
    "ngoko": "Gêdhe",
    "krama": "Agêng"
  },
  {
    "id": "Besi",
    "ngoko": "Wêsi",
    "krama": "Tosan"
  },
  {
    "id": "Besuk",
    "ngoko": "Besuk",
    "krama": "Benjing"
  },
  {
    "id": "Besuk",
    "ngoko": "Sesuk",
    "krama": "Benjing"
  },
  {
    "id": "Betah",
    "ngoko": "Krasan",
    "krama": "Kraosan"
  },
  {
    "id": "Betis",
    "ngoko": "Kempol",
    "krama": "Wengkelan"
  },
  {
    "id": "Betul",
    "ngoko": "Yêkti",
    "krama": "Yêktos"
  },
  {
    "id": "Biar saja, Supaya",
    "ngoko": "Karêben",
    "krama": "Kajengipun"
  },
  {
    "id": "Biarlah",
    "ngoko": "Ben, Karêben",
    "krama": "Kajêngipun"
  },
  {
    "id": "Biasa",
    "ngoko": "Lumrah",
    "krama": "Limrah"
  },
  {
    "id": "Bibir",
    "ngoko": "Lambe",
    "krama": "Lathi"
  },
  {
    "id": "Bicara",
    "ngoko": "Omong",
    "krama": "Ginêm"
  },
  {
    "id": "Bicara",
    "ngoko": "Wicara",
    "krama": "Wicantên"
  },
  {
    "id": "Bisa",
    "ngoko": "Isa",
    "krama": "Saged"
  },
  {
    "id": "Bisul",
    "ngoko": "Wudun",
    "krama": "Untar"
  },
  {
    "id": "Bohong",
    "ngoko": "Guroh",
    "krama": "Dora"
  },
  {
    "id": "Bokong",
    "ngoko": "Bokong",
    "krama": "Pocong"
  },
  {
    "id": "Boleh",
    "ngoko": "Kêna",
    "krama": "Kenging"
  },
  {
    "id": "Buang",
    "ngoko": "Buwang",
    "krama": "Bucal"
  },
  {
    "id": "Buang air besar",
    "ngoko": "Bêbuwang",
    "krama": "Bêbucal"
  },
  {
    "id": "Buang air besar",
    "ngoko": "Ising",
    "krama": "Bêbucal"
  },
  {
    "id": "Buat",
    "ngoko": "Kanggo",
    "krama": "Kangge"
  },
  {
    "id": "Budi, Pikiran, Akal",
    "ngoko": "Budi",
    "krama": "Manah"
  },
  {
    "id": "Buka",
    "ngoko": "Bukak",
    "krama": "Bikak"
  },
  {
    "id": "Bukan",
    "ngoko": "Dudu",
    "krama": "Sanes"
  },
  {
    "id": "Bulan",
    "ngoko": "Rêmbulan",
    "krama": "Candra"
  },
  {
    "id": "Bulan",
    "ngoko": "Sasi",
    "krama": "Wulan"
  },
  {
    "id": "Bulanan",
    "ngoko": "Sukêr",
    "krama": "Tarab"
  },
  {
    "id": "Bulu mata",
    "ngoko": "Idêp",
    "krama": "Ibing"
  },
  {
    "id": "Buluh, Bambu",
    "ngoko": "Wuluh",
    "krama": "Wêlah"
  },
  {
    "id": "Bunga",
    "ngoko": "Kêmbang",
    "krama": "Sêkar"
  },
  {
    "id": "Bunga-bungaan",
    "ngoko": "Kêkêmbangan",
    "krama": "Sêsêkaran"
  },
  {
    "id": "Bungsu",
    "ngoko": "Wuragil",
    "krama": "Waruju"
  },
  {
    "id": "Bunyi, Suara",
    "ngoko": "Uni",
    "krama": "Ungêl"
  },
  {
    "id": "Buru",
    "ngoko": "Buru",
    "krama": "Bujêng"
  },
  {
    "id": "Buruh, Pekerja",
    "ngoko": "Buruh",
    "krama": "Bêrah"
  },
  {
    "id": "Buruk, Jelek",
    "ngoko": "Ala",
    "krama": "Awon"
  },
  {
    "id": "Burung",
    "ngoko": "Manuk",
    "krama": "Pêksi"
  },
  {
    "id": "Burung puyuh",
    "ngoko": "Gêmak",
    "krama": "Puyuh"
  },
  {
    "id": "Butuh",
    "ngoko": "Butuh",
    "krama": "Bêtah"
  },
  {
    "id": "Cambang",
    "ngoko": "Godheg",
    "krama": "Gumbala"
  },
  {
    "id": "Cangkir",
    "ngoko": "Cangkir",
    "krama": "Tuwung"
  },
  {
    "id": "Cari",
    "ngoko": "Golek",
    "krama": "Pados"
  },
  {
    "id": "Cat emas",
    "ngoko": "Prada",
    "krama": "Praos"
  },
  {
    "id": "Cat kain",
    "ngoko": "Wêdêl",
    "krama": "Cêlêp"
  },
  {
    "id": "Celana",
    "ngoko": "Kathok",
    "krama": "Sruwal"
  },
  {
    "id": "Cepat",
    "ngoko": "Age",
    "krama": "Enggal"
  },
  {
    "id": "Cepat",
    "ngoko": "Cêpêt",
    "krama": "Enggal"
  },
  {
    "id": "Cerita",
    "ngoko": "Carita",
    "krama": "Cariyos"
  },
  {
    "id": "Cerita",
    "ngoko": "Crita",
    "krama": "Criyos"
  },
  {
    "id": "Cermin",
    "ngoko": "Ilo",
    "krama": "Paningalan"
  },
  {
    "id": "Cermin",
    "ngoko": "Pangilon",
    "krama": "Paningalan"
  },
  {
    "id": "Cici muka",
    "ngoko": "Raup",
    "krama": "Suryan"
  },
  {
    "id": "Cincin",
    "ngoko": "Ali-ali",
    "krama": "Sêsupe"
  },
  {
    "id": "Cium",
    "ngoko": "Ambung",
    "krama": "Aras"
  },
  {
    "id": "Coba",
    "ngoko": "Coba",
    "krama": "Cobi"
  },
  {
    "id": "Cuci",
    "ngoko": "Kumbah",
    "krama": "Girah"
  },
  {
    "id": "Cucu",
    "ngoko": "Putu",
    "krama": "Wayah"
  },
  {
    "id": "Cukup",
    "ngoko": "Cukup",
    "krama": "Cêkap"
  },
  {
    "id": "Cukup",
    "ngoko": "Sêdhêng",
    "krama": "Cêkap"
  },
  {
    "id": "Dada",
    "ngoko": "Dhadha",
    "krama": "Jaja"
  },
  {
    "id": "Dagang",
    "ngoko": "Dagang",
    "krama": "Gramen"
  },
  {
    "id": "Dagu",
    "ngoko": "Janggut",
    "krama": "Kêthêkan"
  },
  {
    "id": "Dahi",
    "ngoko": "Bathuk",
    "krama": "Palarapan"
  },
  {
    "id": "Dahulu",
    "ngoko": "Dhisik",
    "krama": "Rumiyin"
  },
  {
    "id": "Dalam",
    "ngoko": "Jero",
    "krama": "Lêbêt"
  },
  {
    "id": "Dalam",
    "ngoko": "Lêbu",
    "krama": "Lêbêt"
  },
  {
    "id": "Dan",
    "ngoko": "Lan",
    "krama": "Kaliyan"
  },
  {
    "id": "Dan juga",
    "ngoko": "Muwah",
    "krama": "Miwah"
  },
  {
    "id": "Dapat dilihat",
    "ngoko": "Katon",
    "krama": "Katingal"
  },
  {
    "id": "Dapat, Bisa",
    "ngoko": "Bisa",
    "krama": "Sagêd"
  },
  {
    "id": "Darah",
    "ngoko": "Gêtih",
    "krama": "Rah"
  },
  {
    "id": "Dari",
    "ngoko": "Sêka",
    "krama": "Saking"
  },
  {
    "id": "Datang",
    "ngoko": "Mara",
    "krama": "Dhatêng"
  },
  {
    "id": "Datang",
    "ngoko": "Têka",
    "krama": "Dhatêng"
  },
  {
    "id": "Daun",
    "ngoko": "Godhong",
    "krama": "Ron"
  },
  {
    "id": "Dekat",
    "ngoko": "Cêdhak",
    "krama": "Cêlak"
  },
  {
    "id": "Demikian",
    "ngoko": "Mangkana",
    "krama": "Makatên"
  },
  {
    "id": "Demikian",
    "ngoko": "Mono",
    "krama": "Mantên"
  },
  {
    "id": "Dengan",
    "ngoko": "Karo",
    "krama": "Kaliyan"
  },
  {
    "id": "Dengar",
    "ngoko": "Rungu",
    "krama": "Pirêng"
  },
  {
    "id": "Desa",
    "ngoko": "Desa",
    "krama": "Dhusun"
  },
  {
    "id": "Di depan",
    "ngoko": "Ngarêp",
    "krama": "Ngajêng"
  },
  {
    "id": "Di luar",
    "ngoko": "Njaba",
    "krama": "Njawi"
  },
  {
    "id": "Diam",
    "ngoko": "Enêng",
    "krama": "Mendêl"
  },
  {
    "id": "Dibelenggu",
    "ngoko": "Banda",
    "krama": "Dipunbêsta"
  },
  {
    "id": "Diberi",
    "ngoko": "Weneh",
    "krama": "Dipunsukani"
  },
  {
    "id": "Diberikan saja",
    "ngoko": "Saji",
    "krama": "Dipunsaosaken"
  },
  {
    "id": "Dicicip",
    "ngoko": "Icip",
    "krama": "Dipunincip"
  },
  {
    "id": "Didatangi",
    "ngoko": "Kêtêkan",
    "krama": "Kêdhatêngan"
  },
  {
    "id": "Diiringkan",
    "ngoko": "Iring",
    "krama": "Dherekaken"
  },
  {
    "id": "Dikalikan",
    "ngoko": "Ping",
    "krama": "Ping, Kaping"
  },
  {
    "id": "Dikelilingi",
    "ngoko": "Kêpung",
    "krama": "Kêpang"
  },
  {
    "id": "Diketahui",
    "ngoko": "Kangêrten",
    "krama": "Kangêrtosan"
  },
  {
    "id": "Dilisankan",
    "ngoko": "Maca",
    "krama": "Maos"
  },
  {
    "id": "Dimandulkan",
    "ngoko": "Kêbiri",
    "krama": "Dipunkêbiri"
  },
  {
    "id": "Dimarahi",
    "ngoko": "Srêngên",
    "krama": "Dipunsrêngêni"
  },
  {
    "id": "Dingin",
    "ngoko": "Adhêm",
    "krama": "Asrêp"
  },
  {
    "id": "Dipegang",
    "ngoko": "Cêkêl",
    "krama": "Cêpêng"
  },
  {
    "id": "Dipikul",
    "ngoko": "Pikul",
    "krama": "Dipunrêmbat"
  },
  {
    "id": "Disakiti",
    "ngoko": "Pilara",
    "krama": "Dipunpisakiti"
  },
  {
    "id": "Disapih, Disarak",
    "ngoko": "Sapih",
    "krama": "Dipunpêgêng"
  },
  {
    "id": "Disiapkan",
    "ngoko": "Cawis",
    "krama": "Cawisaken"
  },
  {
    "id": "Disuguh",
    "ngoko": "Suguh",
    "krama": "Dipunsêgah"
  },
  {
    "id": "Ditanya mau atau tidak",
    "ngoko": "Tari, Ditari",
    "krama": "Dipuntantun"
  },
  {
    "id": "Ditaruh, Diletakkan",
    "ngoko": "Seleh",
    "krama": "Sukakakên"
  },
  {
    "id": "Ditopang, Ditanggung",
    "ngoko": "Sangga",
    "krama": "Sanggi"
  },
  {
    "id": "Ditumbuk",
    "ngoko": "Tutu",
    "krama": "Dipungêntang"
  },
  {
    "id": "Diundang",
    "ngoko": "Suruh",
    "krama": "Dipunsêdhahi"
  },
  {
    "id": "Dodot",
    "ngoko": "Dodod",
    "krama": "Kampuh"
  },
  {
    "id": "Dua",
    "ngoko": "Loro",
    "krama": "Kalih"
  },
  {
    "id": "Dua puluh lima",
    "ngoko": "Lawe",
    "krama": "Sêlangkung"
  },
  {
    "id": "Dua puluh lima",
    "ngoko": "Sêlawe",
    "krama": "Sêlangkung"
  },
  {
    "id": "Dua puluh sen",
    "ngoko": "Sêtali",
    "krama": "Sêtangsul"
  },
  {
    "id": "Duduk",
    "ngoko": "Linggih",
    "krama": "Lênggah"
  },
  {
    "id": "Duduk",
    "ngoko": "Lungguh",
    "krama": "Lênggah"
  },
  {
    "id": "Duga",
    "ngoko": "Duga",
    "krama": "Dugi"
  },
  {
    "id": "Dulu",
    "ngoko": "Biyen",
    "krama": "Riyin"
  },
  {
    "id": "Emas",
    "ngoko": "Êmas",
    "krama": "Jene"
  },
  {
    "id": "Empat",
    "ngoko": "Papat",
    "krama": "Sêkawan"
  },
  {
    "id": "Enak",
    "ngoko": "Enak",
    "krama": "Eca"
  },
  {
    "id": "Gajah",
    "ngoko": "Gajah",
    "krama": "Liman"
  },
  {
    "id": "Gamelan",
    "ngoko": "Gamêlan",
    "krama": "Gangsa"
  },
  {
    "id": "Ganti",
    "ngoko": "Ganti",
    "krama": "Gantos"
  },
  {
    "id": "Ganti",
    "ngoko": "Gênti",
    "krama": "Gêntos"
  },
  {
    "id": "Ganti gigi, Ompong",
    "ngoko": "Pupak",
    "krama": "Dhaut"
  },
  {
    "id": "Ganti pakaian",
    "ngoko": "Salin",
    "krama": "Santun, Gantos"
  },
  {
    "id": "Garam",
    "ngoko": "Uyah",
    "krama": "Sarêm"
  },
  {
    "id": "Gelang",
    "ngoko": "Gêlang",
    "krama": "Binggêl"
  },
  {
    "id": "Gelung",
    "ngoko": "Gêlung",
    "krama": "Ukêl"
  },
  {
    "id": "Gembira",
    "ngoko": "Bungah",
    "krama": "Bingah"
  },
  {
    "id": "Gigi",
    "ngoko": "Untu",
    "krama": "Waos"
  },
  {
    "id": "Gila",
    "ngoko": "Edan",
    "krama": "Ewah"
  },
  {
    "id": "Gugat",
    "ngoko": "Gugat",
    "krama": "Gigat"
  },
  {
    "id": "Gula",
    "ngoko": "Gula",
    "krama": "Gêndhis"
  },
  {
    "id": "Guna",
    "ngoko": "Guna",
    "krama": "Gina"
  },
  {
    "id": "Gunung",
    "ngoko": "Gunung",
    "krama": "Rêdi"
  },
  {
    "id": "Gusi",
    "ngoko": "Gusi",
    "krama": "Wingkisan"
  },
  {
    "id": "Habis",
    "ngoko": "Êntek",
    "krama": "Telas"
  },
  {
    "id": "Hadap",
    "ngoko": "Adhêp",
    "krama": "Ajêng"
  },
  {
    "id": "Halaman",
    "ngoko": "Pakarangan",
    "krama": "Pêkawisan"
  },
  {
    "id": "Halangan",
    "ngoko": "Alangan",
    "krama": "Pambêngan"
  },
  {
    "id": "Halangan",
    "ngoko": "Kara-kara",
    "krama": "Kawis-kawis"
  },
  {
    "id": "Hamba, Pembantu",
    "ngoko": "Batur",
    "krama": "Rencang"
  },
  {
    "id": "Hamil",
    "ngoko": "Mêtêng",
    "krama": "Wawrat, Mbobot"
  },
  {
    "id": "Hanya",
    "ngoko": "Bae",
    "krama": "Kemawon"
  },
  {
    "id": "Hanya",
    "ngoko": "Mung",
    "krama": "Namung, Naming"
  },
  {
    "id": "Harga",
    "ngoko": "Rêga",
    "krama": "Rêgi"
  },
  {
    "id": "Hari",
    "ngoko": "Dina",
    "krama": "Dintên"
  },
  {
    "id": "Hari kelahiran",
    "ngoko": "Wêton",
    "krama": "Wêdalan"
  },
  {
    "id": "Hari raya",
    "ngoko": "Riyaya",
    "krama": "Riyadi"
  },
  {
    "id": "Harus",
    "ngoko": "Kudu",
    "krama": "Kêdah"
  },
  {
    "id": "Hati",
    "ngoko": "Ati",
    "krama": "Manah"
  },
  {
    "id": "Haus",
    "ngoko": "Ngêlak",
    "krama": "Salit"
  },
  {
    "id": "Henti",
    "ngoko": "Êndhêg",
    "krama": "Kendêl"
  },
  {
    "id": "Hewan yang dikebiri",
    "ngoko": "Kêbiren",
    "krama": "Kêbincihan"
  },
  {
    "id": "Hidung",
    "ngoko": "Irung",
    "krama": "Grana"
  },
  {
    "id": "Hidup",
    "ngoko": "Urip",
    "krama": "Gesang"
  },
  {
    "id": "Hijau",
    "ngoko": "Ijo",
    "krama": "Ijêm"
  },
  {
    "id": "Hilang",
    "ngoko": "Ilang",
    "krama": "Ical"
  },
  {
    "id": "Hilang",
    "ngoko": "Ngilang",
    "krama": "Ngical"
  },
  {
    "id": "Hingga, Sampai",
    "ngoko": "Kanti",
    "krama": "Kantos"
  },
  {
    "id": "Hitam",
    "ngoko": "Irêng",
    "krama": "Cêmêng"
  },
  {
    "id": "Hitung",
    "ngoko": "Etung",
    "krama": "Etang"
  },
  {
    "id": "Hitung",
    "ngoko": "Wilang",
    "krama": "Wical"
  },
  {
    "id": "Hitungan, Bilangan",
    "ngoko": "Wilangan",
    "krama": "Wicalan"
  },
  {
    "id": "Hujan",
    "ngoko": "Udan",
    "krama": "Jawah"
  },
  {
    "id": "Hutan",
    "ngoko": "Alas",
    "krama": "Wana"
  },
  {
    "id": "Ibu",
    "ngoko": "Biyung",
    "krama": "Ibu"
  },
  {
    "id": "Ibu",
    "ngoko": "Êmbok",
    "krama": "Ibu"
  },
  {
    "id": "Ikan",
    "ngoko": "Iwak",
    "krama": "Ulam"
  },
  {
    "id": "Ikat kepala",
    "ngoko": "Ikêt",
    "krama": "Dhêstar"
  },
  {
    "id": "Ikut",
    "ngoko": "Anut",
    "krama": "Tumut"
  },
  {
    "id": "Ikut",
    "ngoko": "Elu",
    "krama": "Tumut"
  },
  {
    "id": "Ikut",
    "ngoko": "Ilu",
    "krama": "Tumut"
  },
  {
    "id": "Ikut",
    "ngoko": "Melu",
    "krama": "Tumut"
  },
  {
    "id": "Ilmu",
    "ngoko": "Elmu",
    "krama": "Elmi"
  },
  {
    "id": "Ilmu",
    "ngoko": "Ilmu",
    "krama": "Elmu"
  },
  {
    "id": "Impi",
    "ngoko": "Impi",
    "krama": "Supêna"
  },
  {
    "id": "Inap",
    "ngoko": "Inêp",
    "krama": "Sipêng"
  },
  {
    "id": "Ingat",
    "ngoko": "Eling",
    "krama": "Emut"
  },
  {
    "id": "Ingus",
    "ngoko": "Umbêl",
    "krama": "Gadhing"
  },
  {
    "id": "Ini",
    "ngoko": "Iki",
    "krama": "Niki"
  },
  {
    "id": "Ini",
    "ngoko": "Kiyi",
    "krama": "Mênika"
  },
  {
    "id": "Intan",
    "ngoko": "Intên",
    "krama": "Sela"
  },
  {
    "id": "Istimewa",
    "ngoko": "Kinacek",
    "krama": "Kinaot"
  },
  {
    "id": "Istirahat",
    "ngoko": "Leren",
    "krama": "Kendêl"
  },
  {
    "id": "Itik",
    "ngoko": "Bebek",
    "krama": "Kambangan"
  },
  {
    "id": "Itu",
    "ngoko": "Ika",
    "krama": "Mênika"
  },
  {
    "id": "Itu",
    "ngoko": "Iku",
    "krama": "Mênika"
  },
  {
    "id": "Itu",
    "ngoko": "Kae",
    "krama": "Punika"
  },
  {
    "id": "Itu",
    "ngoko": "Kuwi",
    "krama": "Niku"
  },
  {
    "id": "Itulah",
    "ngoko": "Galo",
    "krama": "Mênika lo"
  },
  {
    "id": "Jadi",
    "ngoko": "Dadi",
    "krama": "Dados"
  },
  {
    "id": "Jadi",
    "ngoko": "Sida",
    "krama": "Siyos"
  },
  {
    "id": "Jaga",
    "ngoko": "Jaga",
    "krama": "Jagi"
  },
  {
    "id": "Jago, Calon",
    "ngoko": "Jago",
    "krama": "Sawung"
  },
  {
    "id": "Jala, Jaring",
    "ngoko": "Jala",
    "krama": "Jambêt"
  },
  {
    "id": "Jalan",
    "ngoko": "Dalan",
    "krama": "Radinan"
  },
  {
    "id": "Jalan",
    "ngoko": "Laku",
    "krama": "Lampah"
  },
  {
    "id": "Jam",
    "ngoko": "Jam",
    "krama": "Jam, Pukul"
  },
  {
    "id": "Jambu",
    "ngoko": "Jambu",
    "krama": "Jambêt"
  },
  {
    "id": "Jamu",
    "ngoko": "Jamu",
    "krama": "Jampi"
  },
  {
    "id": "Jangan",
    "ngoko": "Aja",
    "krama": "Sampun"
  },
  {
    "id": "Janggut",
    "ngoko": "Jênggot",
    "krama": "Gumbala"
  },
  {
    "id": "Janji, Sumpah",
    "ngoko": "Ujar",
    "krama": "Punagi"
  },
  {
    "id": "Jari",
    "ngoko": "Driji",
    "krama": "Racikan"
  },
  {
    "id": "Jarik (untuk pria)",
    "ngoko": "Bêbêd",
    "krama": "Nyamping"
  },
  {
    "id": "Jarum",
    "ngoko": "Dom",
    "krama": "Jarum"
  },
  {
    "id": "Jati, Nyata, Betul",
    "ngoko": "Jati",
    "krama": "Jatos"
  },
  {
    "id": "Jatuh",
    "ngoko": "Tilik",
    "krama": "Dhawah"
  },
  {
    "id": "Jauh",
    "ngoko": "Adoh",
    "krama": "Têbih"
  },
  {
    "id": "Jawa",
    "ngoko": "Jawa",
    "krama": "Jawi"
  },
  {
    "id": "Jelek",
    "ngoko": "Elek",
    "krama": "Awon"
  },
  {
    "id": "Jenazah",
    "ngoko": "Mayit",
    "krama": "Jisim"
  },
  {
    "id": "Jeruk",
    "ngoko": "Jêruk",
    "krama": "Jêram"
  },
  {
    "id": "Jika kalau",
    "ngoko": "Mênawa",
    "krama": "Mênawi"
  },
  {
    "id": "Jikalau",
    "ngoko": "Yen",
    "krama": "Bilih"
  },
  {
    "id": "Jrang",
    "ngoko": "Arang",
    "krama": "Awis"
  },
  {
    "id": "Jual",
    "ngoko": "Adol",
    "krama": "Sade"
  },
  {
    "id": "Jual",
    "ngoko": "Dol",
    "krama": "Sade"
  },
  {
    "id": "Juga",
    "ngoko": "Uga",
    "krama": "Ugi"
  },
  {
    "id": "Kacamata",
    "ngoko": "Kacamata",
    "krama": "Kacamripat"
  },
  {
    "id": "Kafan",
    "ngoko": "Mori",
    "krama": "Montên"
  },
  {
    "id": "Kain batik",
    "ngoko": "Jarit",
    "krama": "Sinjang"
  },
  {
    "id": "Kain batik (perempuan)",
    "ngoko": "Tapih",
    "krama": "Sinjang"
  },
  {
    "id": "Kakak laki-laki",
    "ngoko": "Kakang",
    "krama": "Kangmas, Raka"
  },
  {
    "id": "Kakek",
    "ngoko": "Êmbah",
    "krama": "Simbah"
  },
  {
    "id": "Kaki",
    "ngoko": "Sikil",
    "krama": "Suku"
  },
  {
    "id": "Kaku",
    "ngoko": "Kaku",
    "krama": "Kaken"
  },
  {
    "id": "Kalah",
    "ngoko": "Kalah",
    "krama": "Kawon"
  },
  {
    "id": "Kalah",
    "ngoko": "Kasoran",
    "krama": "Kawonan"
  },
  {
    "id": "Kalung",
    "ngoko": "Kalung",
    "krama": "Sangsangan"
  },
  {
    "id": "Kambing",
    "ngoko": "Wêdhus",
    "krama": "Menda"
  },
  {
    "id": "Kambuh",
    "ngoko": "Kumat",
    "krama": "Kimat"
  },
  {
    "id": "Kamu",
    "ngoko": "Kowe",
    "krama": "Sampeyan"
  },
  {
    "id": "Kapan",
    "ngoko": "Kapan",
    "krama": "Mbenjing menapa"
  },
  {
    "id": "Karena",
    "ngoko": "Amarga",
    "krama": "Amargi"
  },
  {
    "id": "Karena",
    "ngoko": "Amêrga",
    "krama": "Amêrgi"
  },
  {
    "id": "Karena",
    "ngoko": "Mêrga",
    "krama": "Margi"
  },
  {
    "id": "Kartu",
    "ngoko": "Kartu",
    "krama": "Kêrtos"
  },
  {
    "id": "Katanya",
    "ngoko": "Jare",
    "krama": "Cariyosipun"
  },
  {
    "id": "Kau",
    "ngoko": "Kok",
    "krama": "Sampeyan"
  },
  {
    "id": "Ke",
    "ngoko": "Mênyang",
    "krama": "Dhatêng"
  },
  {
    "id": "Ke sana",
    "ngoko": "Rana",
    "krama": "Mrika, Mriku"
  },
  {
    "id": "Ke sini",
    "ngoko": "Rene",
    "krama": "Mriki"
  },
  {
    "id": "Ke utara",
    "ngoko": "Ngalor",
    "krama": "Ngaler"
  },
  {
    "id": "Kebaikan",
    "ngoko": "Kabêcikan",
    "krama": "Kêsaenan"
  },
  {
    "id": "Kebakar",
    "ngoko": "Kobong",
    "krama": "Kabêsmi"
  },
  {
    "id": "Kebanyakan",
    "ngoko": "Kakehan",
    "krama": "Kêkathahên"
  },
  {
    "id": "Kebati",
    "ngoko": "Kêbatinan",
    "krama": "Kêbatosan"
  },
  {
    "id": "Kebatinan",
    "ngoko": "kê",
    "krama": "Kaping"
  },
  {
    "id": "Kebetulan",
    "ngoko": "Kêbênêr",
    "krama": "Kêlêrês"
  },
  {
    "id": "Kebiasaan",
    "ngoko": "Kalumrahan",
    "krama": "Kalimrahan"
  },
  {
    "id": "Kebutuhan",
    "ngoko": "Kêbutuhan",
    "krama": "Kabêtahan"
  },
  {
    "id": "Kecil",
    "ngoko": "Cilik",
    "krama": "Alit"
  },
  {
    "id": "Kecuali",
    "ngoko": "Kajaba",
    "krama": "Kêjawi"
  },
  {
    "id": "Kecuali",
    "ngoko": "Kêjaba",
    "krama": "Kêjawi"
  },
  {
    "id": "Kecukupan",
    "ngoko": "Sêdhêngan",
    "krama": "Cêkapan"
  },
  {
    "id": "Kecurian",
    "ngoko": "Kêmalingan",
    "krama": "Kêpandungan"
  },
  {
    "id": "Kedai, Warung",
    "ngoko": "Warung",
    "krama": "Wande"
  },
  {
    "id": "Kedinginan",
    "ngoko": "Kadhêmên",
    "krama": "Kasrêpên"
  },
  {
    "id": "Kedua",
    "ngoko": "Karo",
    "krama": "Kalih"
  },
  {
    "id": "Keguguran",
    "ngoko": "Kêluron",
    "krama": "Têrag"
  },
  {
    "id": "Kehabisan",
    "ngoko": "Kêntekan",
    "krama": "Kêtêlasan"
  },
  {
    "id": "Kehendak",
    "ngoko": "Kêkarêpane",
    "krama": "Kêkajênganipun"
  },
  {
    "id": "Kehidupan",
    "ngoko": "Panguripan",
    "krama": "Pagesangan"
  },
  {
    "id": "Kehilangan",
    "ngoko": "Kelangan",
    "krama": "Kecalan"
  },
  {
    "id": "Kejadian",
    "ngoko": "Kêdadeyan",
    "krama": "Kêdadosan"
  },
  {
    "id": "Kejap",
    "ngoko": "Kêdhep",
    "krama": "Kejep"
  },
  {
    "id": "Kejawahan",
    "ngoko": "Kodanan",
    "krama": "Kêjawahan"
  },
  {
    "id": "Kekanak-kanakan",
    "ngoko": "Kêbocahên",
    "krama": "Kêlaren"
  },
  {
    "id": "Kelahiran",
    "ngoko": "Kêlairan",
    "krama": "Wêdalan"
  },
  {
    "id": "Kelapa",
    "ngoko": "Kambil",
    "krama": "Klapa"
  },
  {
    "id": "Kelihatan",
    "ngoko": "Ketok",
    "krama": "Asring"
  },
  {
    "id": "Keliru",
    "ngoko": "Kleru",
    "krama": "Klintu"
  },
  {
    "id": "Keluar",
    "ngoko": "Mêtu",
    "krama": "Mêdal"
  },
  {
    "id": "Kemalaman",
    "ngoko": "Kêwêngen",
    "krama": "Kêdalon"
  },
  {
    "id": "Kemasukan",
    "ngoko": "Klbon",
    "krama": "Klêbêtan"
  },
  {
    "id": "Kematian",
    "ngoko": "Kêpaten",
    "krama": "Kêpêjahan"
  },
  {
    "id": "Kematian",
    "ngoko": "Pati",
    "krama": "Pêjah"
  },
  {
    "id": "Kembali",
    "ngoko": "Bali",
    "krama": "Wangsul"
  },
  {
    "id": "Kemenyan",
    "ngoko": "Kêmênyan",
    "krama": "Sela"
  },
  {
    "id": "Kemudian, Lantas",
    "ngoko": "Bacut",
    "krama": "Lajêng"
  },
  {
    "id": "Kenal, Bertemu",
    "ngoko": "Têpung",
    "krama": "Têpang"
  },
  {
    "id": "Kencing",
    "ngoko": "Uyuh",
    "krama": "Toyan"
  },
  {
    "id": "Kendaraan",
    "ngoko": "Tunggangan",
    "krama": "Tumpakan"
  },
  {
    "id": "Kentara",
    "ngoko": "Kêtara",
    "krama": "Kêtawis"
  },
  {
    "id": "Kentut",
    "ngoko": "Kêpêntut",
    "krama": "Kêsarib"
  },
  {
    "id": "Kentut",
    "ngoko": "Êntut",
    "krama": "Sarib"
  },
  {
    "id": "Kenyang",
    "ngoko": "Warêg",
    "krama": "Tuwuk"
  },
  {
    "id": "Kepala",
    "ngoko": "Êndhas",
    "krama": "Sirah"
  },
  {
    "id": "Kepercayaan",
    "ngoko": "Piandel",
    "krama": "Kapitadosan"
  },
  {
    "id": "Kera",
    "ngoko": "Kêthek",
    "krama": "Rewanda"
  },
  {
    "id": "Keramas",
    "ngoko": "Kramas",
    "krama": "Jamas"
  },
  {
    "id": "Keras (suara)",
    "ngoko": "Sêru",
    "krama": "Sora"
  },
  {
    "id": "Kerbau",
    "ngoko": "Kêbo",
    "krama": "Maesa"
  },
  {
    "id": "Keris",
    "ngoko": "Kêris",
    "krama": "Dhuwung"
  },
  {
    "id": "Kertas",
    "ngoko": "Dluwang",
    "krama": "Dlancang"
  },
  {
    "id": "Kesakitan",
    "ngoko": "Kêlaran",
    "krama": "Kêsakitan"
  },
  {
    "id": "Kesalahan",
    "ngoko": "Kaluputan",
    "krama": "Kalêpatan"
  },
  {
    "id": "Kesiangan",
    "ngoko": "Kawanên",
    "krama": "Kêsiangan"
  },
  {
    "id": "Keterlaluan",
    "ngoko": "Kêbangêtên",
    "krama": "Kêsangêtên"
  },
  {
    "id": "Ketika",
    "ngoko": "Dhek",
    "krama": "Kala"
  },
  {
    "id": "Keturunan",
    "ngoko": "Turun",
    "krama": "Têdhak"
  },
  {
    "id": "Khawatir",
    "ngoko": "Kuwatir",
    "krama": "Kuwatos"
  },
  {
    "id": "Khitan",
    "ngoko": "Sunat",
    "krama": "Têtês"
  },
  {
    "id": "Khitan",
    "ngoko": "Têtak",
    "krama": "Supit"
  },
  {
    "id": "Kingang",
    "ngoko": "Kinang",
    "krama": "Ganten"
  },
  {
    "id": "Kira",
    "ngoko": "Kira",
    "krama": "Kintên"
  },
  {
    "id": "Kira-kira",
    "ngoko": "Udakara",
    "krama": "Udakawis"
  },
  {
    "id": "Kirim",
    "ngoko": "Kirim",
    "krama": "Kintun"
  },
  {
    "id": "Kokoh",
    "ngoko": "Kukuh",
    "krama": "Kêkah"
  },
  {
    "id": "Kosong",
    "ngoko": "Suwung",
    "krama": "Suwêng (rumah)"
  },
  {
    "id": "Kota",
    "ngoko": "Kutha",
    "krama": "Kitha"
  },
  {
    "id": "Kuasa",
    "ngoko": "Kuwasa",
    "krama": "Kuwaos"
  },
  {
    "id": "Kuat",
    "ngoko": "Kuwat/Kêlar",
    "krama": "Kiyat/Kuwawi"
  },
  {
    "id": "Kuat",
    "ngoko": "Kêlar, Kuwat",
    "krama": "Kuwawi"
  },
  {
    "id": "Kubur",
    "ngoko": "Kubur",
    "krama": "Petak"
  },
  {
    "id": "Kuda",
    "ngoko": "Jaran",
    "krama": "Kapal"
  },
  {
    "id": "Kuku",
    "ngoko": "Kuku",
    "krama": "Kênaka"
  },
  {
    "id": "Kulit",
    "ngoko": "Lulang",
    "krama": "Cucal"
  },
  {
    "id": "Kumis",
    "ngoko": "Brengos",
    "krama": "Rawis"
  },
  {
    "id": "Kumpul",
    "ngoko": "Klumpuk",
    "krama": "Klêmpak"
  },
  {
    "id": "Kumpul",
    "ngoko": "Kumpul",
    "krama": "Kêmpal"
  },
  {
    "id": "Kumpul",
    "ngoko": "Mor",
    "krama": "Kêmpal"
  },
  {
    "id": "Kumur",
    "ngoko": "Kêmu",
    "krama": "Kembeng"
  },
  {
    "id": "Kuna",
    "ngoko": "Kuna",
    "krama": "Kina"
  },
  {
    "id": "Kuning",
    "ngoko": "Kuning",
    "krama": "Jêne"
  },
  {
    "id": "Kurang",
    "ngoko": "Kurang",
    "krama": "Kirang"
  },
  {
    "id": "Kurung",
    "ngoko": "Kurung",
    "krama": "Sêngkêr"
  },
  {
    "id": "Kurus",
    "ngoko": "Gêring",
    "krama": "Kêra"
  },
  {
    "id": "Kurus",
    "ngoko": "Kuru",
    "krama": "Kêra"
  },
  {
    "id": "Kutu",
    "ngoko": "Tuma",
    "krama": "Itik"
  },
  {
    "id": "Kêmalaman",
    "ngoko": "Kawêngên",
    "krama": "Kêdalon"
  },
  {
    "id": "Ladang",
    "ngoko": "Têgal",
    "krama": "Têgil"
  },
  {
    "id": "Lagi",
    "ngoko": "Maneh",
    "krama": "Malih"
  },
  {
    "id": "Lagu, Nyanyian",
    "ngoko": "Têmbang",
    "krama": "Sêkar"
  },
  {
    "id": "Lahir",
    "ngoko": "Lair",
    "krama": "Miyos"
  },
  {
    "id": "Laki-laki",
    "ngoko": "Lanang",
    "krama": "Jalêr"
  },
  {
    "id": "Laku",
    "ngoko": "Payu",
    "krama": "Pajêng"
  },
  {
    "id": "Lalu, Cepat",
    "ngoko": "Nuli",
    "krama": "Nuntên, Lajêng"
  },
  {
    "id": "Lalu, Setelah itu",
    "ngoko": "Banjur",
    "krama": "Lajêng"
  },
  {
    "id": "Lama",
    "ngoko": "Lama",
    "krama": "Lami, Dangu"
  },
  {
    "id": "Lama",
    "ngoko": "Lawas",
    "krama": "Lami, Dangu"
  },
  {
    "id": "Lama",
    "ngoko": "Suwe",
    "krama": "Dangu"
  },
  {
    "id": "Lampu",
    "ngoko": "Diyan",
    "krama": "Dilah"
  },
  {
    "id": "Lapisan emas pada keris",
    "ngoko": "Pêndhok",
    "krama": "Kandhêlan"
  },
  {
    "id": "Laut",
    "ngoko": "Sêgara",
    "krama": "Sêgantên"
  },
  {
    "id": "Layan",
    "ngoko": "Ladi",
    "krama": "Lados"
  },
  {
    "id": "Lebar",
    "ngoko": "Amba",
    "krama": "Wiyar"
  },
  {
    "id": "Lebih",
    "ngoko": "Luwih",
    "krama": "Langkung"
  },
  {
    "id": "Lebih",
    "ngoko": "Ngêboti",
    "krama": "Ngawrati"
  },
  {
    "id": "Lebih",
    "ngoko": "Turah",
    "krama": "Tirah"
  },
  {
    "id": "Lebih, Luar biasa",
    "ngoko": "Linuwih",
    "krama": "Linangkung"
  },
  {
    "id": "Leher",
    "ngoko": "Gulu",
    "krama": "Jangga"
  },
  {
    "id": "Lelah",
    "ngoko": "Kêsêl",
    "krama": "Sayah"
  },
  {
    "id": "Lembu",
    "ngoko": "Sapi",
    "krama": "Lêmbu"
  },
  {
    "id": "Lendir, Dahak",
    "ngoko": "Riyak",
    "krama": "Jagra"
  },
  {
    "id": "Lengan",
    "ngoko": "Lêngên",
    "krama": "Pamênthangan"
  },
  {
    "id": "Lengkap",
    "ngoko": "Ganêp",
    "krama": "Jangkêp"
  },
  {
    "id": "Lengkap",
    "ngoko": "Gênêp",
    "krama": "Jangkêp"
  },
  {
    "id": "Lepas baju",
    "ngoko": "Cucul",
    "krama": "Lukar"
  },
  {
    "id": "Lepas kain batik",
    "ngoko": "Udhar",
    "krama": "Lukar"
  },
  {
    "id": "Lepas pakaian",
    "ngoko": "Wuda",
    "krama": "Lukar"
  },
  {
    "id": "Lestari, Abadi",
    "ngoko": "Lêstari",
    "krama": "Lêstantun"
  },
  {
    "id": "Lewat",
    "ngoko": "Liwat",
    "krama": "Langkung"
  },
  {
    "id": "Lidah",
    "ngoko": "Ilat",
    "krama": "Lidah"
  },
  {
    "id": "Lihat",
    "ngoko": "Dêlêng",
    "krama": "Tingal"
  },
  {
    "id": "Lihat",
    "ngoko": "Tonton",
    "krama": "Tingal"
  },
  {
    "id": "Lilin",
    "ngoko": "Malam",
    "krama": "Lilin"
  },
  {
    "id": "Lima",
    "ngoko": "Lima",
    "krama": "Gangsal"
  },
  {
    "id": "Luar",
    "ngoko": "Jaba",
    "krama": "Jawi"
  },
  {
    "id": "Luas",
    "ngoko": "Jêmbar",
    "krama": "Wiyar"
  },
  {
    "id": "Luas",
    "ngoko": "Ombo",
    "krama": "Wiyar"
  },
  {
    "id": "Lucu",
    "ngoko": "Lucu",
    "krama": "Cucud"
  },
  {
    "id": "Ludah",
    "ngoko": "Idu",
    "krama": "Kêcoh"
  },
  {
    "id": "Luka",
    "ngoko": "Tatu",
    "krama": "Labêt"
  },
  {
    "id": "Lupa",
    "ngoko": "Lali",
    "krama": "Supe"
  },
  {
    "id": "Lutut",
    "ngoko": "Dhêngkul",
    "krama": "Jêngku"
  },
  {
    "id": "Lêmbut, Halus",
    "ngoko": "Lêmu",
    "krama": "Lêma"
  },
  {
    "id": "Maaf",
    "ngoko": "Apura",
    "krama": "Apuntên"
  },
  {
    "id": "Mabuk",
    "ngoko": "Êndêm",
    "krama": "Wuru"
  },
  {
    "id": "Macan",
    "ngoko": "Macan",
    "krama": "Sima"
  },
  {
    "id": "Mahal",
    "ngoko": "Larang",
    "krama": "Awis"
  },
  {
    "id": "Mahkota",
    "ngoko": "Kuluk",
    "krama": "Makutha"
  },
  {
    "id": "Main-main",
    "ngoko": "Dolan",
    "krama": "Amêng-amêng"
  },
  {
    "id": "Maju",
    "ngoko": "Aju",
    "krama": "Ajêng"
  },
  {
    "id": "Maju",
    "ngoko": "Maju",
    "krama": "Majeng"
  },
  {
    "id": "Makam",
    "ngoko": "Kuburan",
    "krama": "Pasareyan"
  },
  {
    "id": "Makan",
    "ngoko": "Mangan",
    "krama": "Nedha"
  },
  {
    "id": "Makanan",
    "ngoko": "Pangan",
    "krama": "Têdha"
  },
  {
    "id": "Makna",
    "ngoko": "Arti",
    "krama": "Artos"
  },
  {
    "id": "Maksud, Tujuan",
    "ngoko": "Arah",
    "krama": "Angkah"
  },
  {
    "id": "Maksudnya",
    "ngoko": "Karêpe",
    "krama": "Kajêngipun"
  },
  {
    "id": "Malam",
    "ngoko": "Bêngi",
    "krama": "Dalu"
  },
  {
    "id": "Malam",
    "ngoko": "Wêngi",
    "krama": "Dalu"
  },
  {
    "id": "Malu",
    "ngoko": "Isin",
    "krama": "Lingsem"
  },
  {
    "id": "Malu",
    "ngoko": "Wirang",
    "krama": "Isin"
  },
  {
    "id": "Mana",
    "ngoko": "Êndi",
    "krama": "Pundi"
  },
  {
    "id": "Mandi",
    "ngoko": "Adus",
    "krama": "Siram"
  },
  {
    "id": "Mandi jamas",
    "ngoko": "Kringêt",
    "krama": "Riwe"
  },
  {
    "id": "Marah",
    "ngoko": "Muring",
    "krama": "Duka"
  },
  {
    "id": "Marah",
    "ngoko": "Nêsu",
    "krama": "Srêngên"
  },
  {
    "id": "Marilah",
    "ngoko": "Ayo",
    "krama": "Mangga"
  },
  {
    "id": "Masih",
    "ngoko": "Isih",
    "krama": "Taksih"
  },
  {
    "id": "Masih menyusu",
    "ngoko": "Suson",
    "krama": "Sêsêpan"
  },
  {
    "id": "Mata",
    "ngoko": "Mata",
    "krama": "Mripat"
  },
  {
    "id": "Matahari",
    "ngoko": "Srêngenge",
    "krama": "Surya"
  },
  {
    "id": "Mau",
    "ngoko": "Arep",
    "krama": "Ajêng"
  },
  {
    "id": "Mau",
    "ngoko": "Doyan",
    "krama": "Purun"
  },
  {
    "id": "Mau",
    "ngoko": "Gêlêm",
    "krama": "Purun"
  },
  {
    "id": "Mayat",
    "ngoko": "Jisim",
    "krama": "Layon"
  },
  {
    "id": "Melahirkan",
    "ngoko": "Nglairake",
    "krama": "Nglairakên"
  },
  {
    "id": "Melakukan sendiri",
    "ngoko": "Ngawaki",
    "krama": "Nyêlirani"
  },
  {
    "id": "Melarikan diri",
    "ngoko": "Minggat",
    "krama": "Kesah"
  },
  {
    "id": "Melengkapi",
    "ngoko": "Nggênêpi",
    "krama": "Njangkêpi"
  },
  {
    "id": "Meletakkan",
    "ngoko": "Ndelehake",
    "krama": "Nyukakake"
  },
  {
    "id": "Meletakkan",
    "ngoko": "Ndokokake",
    "krama": "Ndekekakên"
  },
  {
    "id": "Melihat",
    "ngoko": "Ndêleng",
    "krama": "Ningali"
  },
  {
    "id": "Meluaskan",
    "ngoko": "Ngambakake",
    "krama": "Miyarakên"
  },
  {
    "id": "Memaafkan",
    "ngoko": "Ngapura",
    "krama": "Ngapuntên"
  },
  {
    "id": "Memajukan",
    "ngoko": "Ngajokakên",
    "krama": "Ngajêngakên"
  },
  {
    "id": "Memang",
    "ngoko": "Mula",
    "krama": "Mila"
  },
  {
    "id": "Memarahi",
    "ngoko": "Nyrêngêni",
    "krama": "Ndukani"
  },
  {
    "id": "Membangunkan",
    "ngoko": "Nggugah",
    "krama": "Nggigah"
  },
  {
    "id": "Membatin",
    "ngoko": "Ngudarasa",
    "krama": "Ngudaraos"
  },
  {
    "id": "Membau",
    "ngoko": "Ngambu",
    "krama": "Ngambêt"
  },
  {
    "id": "Membawa",
    "ngoko": "Nggawa",
    "krama": "Bêkta"
  },
  {
    "id": "Membeli untuk dijual",
    "ngoko": "Kulak",
    "krama": "Kilak"
  },
  {
    "id": "Memberi",
    "ngoko": "Menehi",
    "krama": "Ngaturi, Nyukani"
  },
  {
    "id": "Memberitahukan",
    "ngoko": "Tuduh",
    "krama": "Têdah"
  },
  {
    "id": "Membetulkan",
    "ngoko": "Ndandani",
    "krama": "Ndandosi"
  },
  {
    "id": "Membuang ingus",
    "ngoko": "Sisi",
    "krama": "Sêmprit"
  },
  {
    "id": "Membuat",
    "ngoko": "Gawe",
    "krama": "Damel"
  },
  {
    "id": "Memegang",
    "ngoko": "Gocek",
    "krama": "Cêpêng"
  },
  {
    "id": "Memegang",
    "ngoko": "Nyêkêl",
    "krama": "Nyêpêng"
  },
  {
    "id": "Memelihara",
    "ngoko": "Ngingu",
    "krama": "Ngingah"
  },
  {
    "id": "Memiliki",
    "ngoko": "Nduweni",
    "krama": "Nggadahi"
  },
  {
    "id": "Memindah",
    "ngoko": "Êlih",
    "krama": "Mindah"
  },
  {
    "id": "Meminjam",
    "ngoko": "Gadhuh",
    "krama": "Ngampil"
  },
  {
    "id": "Meminjami",
    "ngoko": "Nggadhuhi",
    "krama": "Ngampili"
  },
  {
    "id": "Memperoleh",
    "ngoko": "Tampa",
    "krama": "Tampi"
  },
  {
    "id": "Memperpanjang",
    "ngoko": "Ndêdawa",
    "krama": "Memanjang"
  },
  {
    "id": "Memuat",
    "ngoko": "Êmot",
    "krama": "Ngêwrat"
  },
  {
    "id": "Menanak nasi",
    "ngoko": "Adang",
    "krama": "Bêthak"
  },
  {
    "id": "Menanak nasi",
    "ngoko": "Liwêt",
    "krama": "Mbênthak"
  },
  {
    "id": "Menanak nasi",
    "ngoko": "Ngliwêt",
    "krama": "Mbêthak"
  },
  {
    "id": "Menang",
    "ngoko": "Mênang",
    "krama": "Mimpang"
  },
  {
    "id": "Menangguhkan",
    "ngoko": "Sêmaya",
    "krama": "Sêmagos"
  },
  {
    "id": "Menawar",
    "ngoko": "Nganyang",
    "krama": "Ngawis"
  },
  {
    "id": "Menawari dagangan",
    "ngoko": "Tawa",
    "krama": "Tawi"
  },
  {
    "id": "Mencalonkan",
    "ngoko": "Njagokake",
    "krama": "Nyawungakên"
  },
  {
    "id": "Mencari",
    "ngoko": "Nggoleki",
    "krama": "Madosi"
  },
  {
    "id": "Mencari kutu rambut",
    "ngoko": "Petan",
    "krama": "Ulik"
  },
  {
    "id": "Menceritakan",
    "ngoko": "Nyritani",
    "krama": "Nyriyosi"
  },
  {
    "id": "Mencium",
    "ngoko": "Ngambung",
    "krama": "Ngaras"
  },
  {
    "id": "Mencuci tangan/kaki",
    "ngoko": "Wisuh",
    "krama": "Wijik"
  },
  {
    "id": "Mendapatkan",
    "ngoko": "Oleh",
    "krama": "Angsal"
  },
  {
    "id": "Menertawakan",
    "ngoko": "Nggêmuyu",
    "krama": "Nggêgujêng"
  },
  {
    "id": "Mengabdi",
    "ngoko": "Ngenger",
    "krama": "Ngabdi"
  },
  {
    "id": "Mengadu",
    "ngoko": "Du, Ngedu",
    "krama": "Ngaben"
  },
  {
    "id": "Mengajar",
    "ngoko": "Mulang",
    "krama": "Mucal"
  },
  {
    "id": "Mengaji",
    "ngoko": "Kaji",
    "krama": "Ngaos"
  },
  {
    "id": "Mengaji",
    "ngoko": "Ngaji",
    "krama": "Ngaos"
  },
  {
    "id": "Mengaku",
    "ngoko": "Ngaku",
    "krama": "Aken"
  },
  {
    "id": "Mengaku",
    "ngoko": "Ngaku",
    "krama": "Ngakên"
  },
  {
    "id": "Mengakui",
    "ngoko": "Ngakoni",
    "krama": "Ngakêni"
  },
  {
    "id": "Mengalah",
    "ngoko": "Ngasor",
    "krama": "Ngawon"
  },
  {
    "id": "Mengambilkan",
    "ngoko": "Ngêpekake",
    "krama": "Mêndhêtake"
  },
  {
    "id": "Mengapa",
    "ngoko": "Geneya",
    "krama": "Kenging"
  },
  {
    "id": "Mengatakan, Sebut",
    "ngoko": "Sêbut",
    "krama": "Sêbat"
  },
  {
    "id": "Mengenai",
    "ngoko": "Mungguh",
    "krama": "Mênggah"
  },
  {
    "id": "Mengerti, Melihat",
    "ngoko": "Sumurup",
    "krama": "Sumêrêp"
  },
  {
    "id": "Mengetahui",
    "ngoko": "Mêruhi",
    "krama": "Nyêmêrêpi"
  },
  {
    "id": "Menggadaikan",
    "ngoko": "Gadhe",
    "krama": "Nggantos"
  },
  {
    "id": "Mengganti",
    "ngoko": "Ngganti",
    "krama": "Nggantos"
  },
  {
    "id": "Menggembala",
    "ngoko": "Angon",
    "krama": "Angen"
  },
  {
    "id": "Menggugat",
    "ngoko": "Nggugat",
    "krama": "Nggigat"
  },
  {
    "id": "Menggunakan",
    "ngoko": "Nggunakake",
    "krama": "Ngginakakên"
  },
  {
    "id": "Menghadap",
    "ngoko": "Ngadhêp",
    "krama": "Sowan"
  },
  {
    "id": "Menghadap",
    "ngoko": "Seba",
    "krama": "Sowan"
  },
  {
    "id": "Menghalangi",
    "ngoko": "Ngalangi",
    "krama": "Mambêngi"
  },
  {
    "id": "Menghargai",
    "ngoko": "Ngajeni",
    "krama": "Ngaosi"
  },
  {
    "id": "Menghentikan",
    "ngoko": "Ngêndhêgake",
    "krama": "Ngêndêlake"
  },
  {
    "id": "Menghitung",
    "ngoko": "Milang",
    "krama": "Mical"
  },
  {
    "id": "Menginang",
    "ngoko": "Nginang",
    "krama": "Ngganten"
  },
  {
    "id": "Menginap",
    "ngoko": "Nginêp",
    "krama": "Nyipêng"
  },
  {
    "id": "Mengingat",
    "ngoko": "Ngelingi",
    "krama": "Ngemuti"
  },
  {
    "id": "Mengunyah",
    "ngoko": "Mamah",
    "krama": "Nggilut"
  },
  {
    "id": "Meninggal",
    "ngoko": "Mati",
    "krama": "Pejah"
  },
  {
    "id": "Meninggalkan",
    "ngoko": "Tinggal",
    "krama": "Tilar"
  },
  {
    "id": "Meningkat",
    "ngoko": "Undhak",
    "krama": "Mindhak"
  },
  {
    "id": "Menjaga",
    "ngoko": "Njaga",
    "krama": "Njagi"
  },
  {
    "id": "Menjauh",
    "ngoko": "Êdoh",
    "krama": "Nêbih"
  },
  {
    "id": "Menurut",
    "ngoko": "Gugu",
    "krama": "Gêga"
  },
  {
    "id": "Menyabung",
    "ngoko": "Adu",
    "krama": "Abên"
  },
  {
    "id": "Menyakiti",
    "ngoko": "Nglarani",
    "krama": "Nyakiti"
  },
  {
    "id": "Menyebut",
    "ngoko": "Ngarani",
    "krama": "Mastani"
  },
  {
    "id": "Menyembelih",
    "ngoko": "Sêmbêlih",
    "krama": "Pragat"
  },
  {
    "id": "Menyuapi",
    "ngoko": "Dulang",
    "krama": "Ndulang"
  },
  {
    "id": "Menyunting",
    "ngoko": "Nyundhuki",
    "krama": "Nyangsangi"
  },
  {
    "id": "Menyuruh",
    "ngoko": "Kongkon",
    "krama": "Kengken"
  },
  {
    "id": "Merah",
    "ngoko": "Abang",
    "krama": "Abrit"
  },
  {
    "id": "Merawat dengan baik",
    "ngoko": "Gumati",
    "krama": "Gumatos"
  },
  {
    "id": "Merawat dengan baik",
    "ngoko": "Gêmati",
    "krama": "Gêmatos"
  },
  {
    "id": "Minta",
    "ngoko": "Jaluk",
    "krama": "Nedi"
  },
  {
    "id": "Minta",
    "ngoko": "Njaluk",
    "krama": "Nyuwun"
  },
  {
    "id": "Minta maaf",
    "ngoko": "Amit",
    "krama": "Nuwun sewu"
  },
  {
    "id": "Minum",
    "ngoko": "Ombe",
    "krama": "Unjuk"
  },
  {
    "id": "Minuman",
    "ngoko": "Wedang",
    "krama": "Bênteran"
  },
  {
    "id": "Minyak",
    "ngoko": "Lênga",
    "krama": "Lisah"
  },
  {
    "id": "Muat",
    "ngoko": "Kamot",
    "krama": "Kawrat"
  },
  {
    "id": "Muat",
    "ngoko": "Mot",
    "krama": "Wrat"
  },
  {
    "id": "Muda",
    "ngoko": "Anom",
    "krama": "Ênem"
  },
  {
    "id": "Muda",
    "ngoko": "Nom",
    "krama": "Nem"
  },
  {
    "id": "Muda",
    "ngoko": "Ênom",
    "krama": "Ênem"
  },
  {
    "id": "Mudah",
    "ngoko": "Gampang",
    "krama": "Gampil"
  },
  {
    "id": "Mudah terkejut",
    "ngoko": "Kagetan",
    "krama": "Kêjotan"
  },
  {
    "id": "Mudah-mudahan",
    "ngoko": "Muga-muga",
    "krama": "Mugi-mugi"
  },
  {
    "id": "Muka, wajah",
    "ngoko": "Rai",
    "krama": "Pasuryan"
  },
  {
    "id": "Mulut",
    "ngoko": "Cangkêm",
    "krama": "Lesan"
  },
  {
    "id": "Muntah",
    "ngoko": "Mutah",
    "krama": "Luntak"
  },
  {
    "id": "Murah",
    "ngoko": "Murah",
    "krama": "Mirah"
  },
  {
    "id": "Musuh, Lawan",
    "ngoko": "Mungsuh",
    "krama": "Mêngsah"
  },
  {
    "id": "Mêngadakan",
    "ngoko": "Nganakake",
    "krama": "Ngawontênakên"
  },
  {
    "id": "Naik",
    "ngoko": "Munggah",
    "krama": "Inggah"
  },
  {
    "id": "Naik",
    "ngoko": "Unggah",
    "krama": "Inggah"
  },
  {
    "id": "Naik (kendaraan)",
    "ngoko": "Tunggang",
    "krama": "Tumpak"
  },
  {
    "id": "Nama",
    "ngoko": "Aran",
    "krama": "Nama"
  },
  {
    "id": "Nama",
    "ngoko": "Jênêng",
    "krama": "Nama"
  },
  {
    "id": "Nama",
    "ngoko": "Sêbut",
    "krama": "Sêbatan"
  },
  {
    "id": "Nampan",
    "ngoko": "Baki",
    "krama": "Panadhahan"
  },
  {
    "id": "Nanti",
    "ngoko": "Mêngko",
    "krama": "Mangke"
  },
  {
    "id": "Nasehat keras",
    "ngoko": "Wanti-wanti",
    "krama": "Wantos-wantos"
  },
  {
    "id": "Nasi",
    "ngoko": "Sêga",
    "krama": "Sêkul"
  },
  {
    "id": "Nasihat, Petunjuk",
    "ngoko": "Pituduh",
    "krama": "Pitêdah"
  },
  {
    "id": "Negara",
    "ngoko": "Nagara",
    "krama": "Nagari"
  },
  {
    "id": "Nempuh",
    "ngoko": "Nêmpuh",
    "krama": "Nêmpah"
  },
  {
    "id": "Niat, Maksud",
    "ngoko": "Karêp",
    "krama": "Kajêng"
  },
  {
    "id": "Nikah, Kawin",
    "ngoko": "Rabi",
    "krama": "Krama, Pikrama"
  },
  {
    "id": "Nilai, Harga, Martabat",
    "ngoko": "Aji",
    "krama": "Aos"
  },
  {
    "id": "Nisan",
    "ngoko": "Kijing",
    "krama": "Sêkaran"
  },
  {
    "id": "Obat",
    "ngoko": "Obat",
    "krama": "Jampi"
  },
  {
    "id": "Obat",
    "ngoko": "Tamba",
    "krama": "Jampi"
  },
  {
    "id": "Omongan",
    "ngoko": "Caturan",
    "krama": "Wicantên"
  },
  {
    "id": "Ompong",
    "ngoko": "Ompong",
    "krama": "Dhaut"
  },
  {
    "id": "Orang",
    "ngoko": "Wong",
    "krama": "Tiyang"
  },
  {
    "id": "Orang yang sudah mati",
    "ngoko": "Jênat",
    "krama": "Suwargi"
  },
  {
    "id": "Pada waktu",
    "ngoko": "Dhêk",
    "krama": "Kala"
  },
  {
    "id": "Padi",
    "ngoko": "Pari",
    "krama": "Pantun"
  },
  {
    "id": "Pagi",
    "ngoko": "Esuk",
    "krama": "Enjing"
  },
  {
    "id": "Paha",
    "ngoko": "Pupu",
    "krama": "Wêntis"
  },
  {
    "id": "Pajak",
    "ngoko": "Pajêng",
    "krama": "Paos"
  },
  {
    "id": "Pakai",
    "ngoko": "Anggo",
    "krama": "Anggê"
  },
  {
    "id": "Pakai",
    "ngoko": "Ênggo",
    "krama": "Êngge"
  },
  {
    "id": "Panah",
    "ngoko": "Panah",
    "krama": "Jêmparing"
  },
  {
    "id": "Panas",
    "ngoko": "Panas",
    "krama": "Bênter"
  },
  {
    "id": "Panggil",
    "ngoko": "Undang",
    "krama": "Timbal"
  },
  {
    "id": "Pangkat, Kedudukan",
    "ngoko": "Kalungguhan",
    "krama": "Kalênggahan"
  },
  {
    "id": "Panjang",
    "ngoko": "Dawa",
    "krama": "Panjang"
  },
  {
    "id": "Panting",
    "ngoko": "Gati",
    "krama": "Gatos"
  },
  {
    "id": "Pasar",
    "ngoko": "Pasar",
    "krama": "Pêkên"
  },
  {
    "id": "Patut, Layak",
    "ngoko": "Prayoga",
    "krama": "Prayogi"
  },
  {
    "id": "Payung",
    "ngoko": "Payung",
    "krama": "Songsong"
  },
  {
    "id": "Pedang",
    "ngoko": "Pêdhang",
    "krama": "Sabêt"
  },
  {
    "id": "Pelajaran",
    "ngoko": "Wulangan",
    "krama": "Wucalan"
  },
  {
    "id": "Pelaksanaan tugas",
    "ngoko": "Darma",
    "krama": "Darmi"
  },
  {
    "id": "Pelana",
    "ngoko": "Abah-abah",
    "krama": "Kambil"
  },
  {
    "id": "Pelihara",
    "ngoko": "Upakara",
    "krama": "Upakawis"
  },
  {
    "id": "Pembantu",
    "ngoko": "Rewang",
    "krama": "Rencang"
  },
  {
    "id": "Pencuri",
    "ngoko": "Maling",
    "krama": "Padung"
  },
  {
    "id": "Pendapa",
    "ngoko": "Pêndhapa",
    "krama": "Pêndhapi"
  },
  {
    "id": "Pendek, Rendah",
    "ngoko": "Cêndhek",
    "krama": "Andhap"
  },
  {
    "id": "Pengetahuan",
    "ngoko": "Kawruh",
    "krama": "Sêsêrêpan"
  },
  {
    "id": "Penyabar",
    "ngoko": "Kantên",
    "krama": "Kantosan"
  },
  {
    "id": "Penyakit",
    "ngoko": "Lêlara",
    "krama": "Sêsakit"
  },
  {
    "id": "Perahu",
    "ngoko": "Prau",
    "krama": "Baita"
  },
  {
    "id": "Peram, Memeram",
    "ngoko": "Imbuh",
    "krama": "Imbet, Ngimbet"
  },
  {
    "id": "Peraman",
    "ngoko": "Imbon",
    "krama": "Imbêtan"
  },
  {
    "id": "Perasaan hati",
    "ngoko": "Pangudarasa",
    "krama": "Pangudaraos"
  },
  {
    "id": "Percaya",
    "ngoko": "Andêl",
    "krama": "Pitados"
  },
  {
    "id": "Percaya",
    "ngoko": "Pitaya",
    "krama": "Pitados"
  },
  {
    "id": "Percaya",
    "ngoko": "Pracaya",
    "krama": "Pitados"
  },
  {
    "id": "Pergelangan tangan",
    "ngoko": "Ugêl-ugêl",
    "krama": "Pagêlangan"
  },
  {
    "id": "Pergi",
    "ngoko": "Angkat",
    "krama": "Bidhal"
  },
  {
    "id": "Pergi",
    "ngoko": "Lunga",
    "krama": "Kesah"
  },
  {
    "id": "Pergi tanpa pamit",
    "ngoko": "Inggat",
    "krama": "Lolos"
  },
  {
    "id": "Perhatian",
    "ngoko": "Kawigaten",
    "krama": "Kawigatosan"
  },
  {
    "id": "Perintah",
    "ngoko": "Aba",
    "krama": "Dhawuh"
  },
  {
    "id": "Perkara",
    "ngoko": "Prakara",
    "krama": "Prêkawis"
  },
  {
    "id": "Perkiraan",
    "ngoko": "Pangudakara",
    "krama": "Pangudakawis"
  },
  {
    "id": "Perlu sekali, Penting",
    "ngoko": "Wigati",
    "krama": "Wigatos"
  },
  {
    "id": "Pernah",
    "ngoko": "Tau",
    "krama": "Nate"
  },
  {
    "id": "Pertemuan",
    "ngoko": "Têmon",
    "krama": "Pêpanggihan"
  },
  {
    "id": "Pertunjukan",
    "ngoko": "Tontonan",
    "krama": "Têtingalan"
  },
  {
    "id": "Perut",
    "ngoko": "Wêteng",
    "krama": "Padharan"
  },
  {
    "id": "Petang",
    "ngoko": "Surup",
    "krama": "Sêrap"
  },
  {
    "id": "Piara, Pelihara",
    "ngoko": "Ingu",
    "krama": "Ingah"
  },
  {
    "id": "Pijit",
    "ngoko": "Dadah",
    "krama": "Ginda"
  },
  {
    "id": "Pijit",
    "ngoko": "Pijêt",
    "krama": "Pêtêk"
  },
  {
    "id": "Pikiran",
    "ngoko": "Pikir",
    "krama": "Manah"
  },
  {
    "id": "Pilis",
    "ngoko": "Pilis",
    "krama": "Larik, Sigit"
  },
  {
    "id": "Pimpinan desa",
    "ngoko": "Kamitua",
    "krama": "Kamisepuh"
  },
  {
    "id": "Pinang",
    "ngoko": "Jambe",
    "krama": "Wohan"
  },
  {
    "id": "Pindah",
    "ngoko": "Alih",
    "krama": "Pindhah"
  },
  {
    "id": "Pinggang",
    "ngoko": "Bangkekan",
    "krama": "Wangkingan"
  },
  {
    "id": "Pingsan",
    "ngoko": "Klêngêr",
    "krama": "Kantu"
  },
  {
    "id": "Pinjam",
    "ngoko": "Nyilih",
    "krama": "Nyambut"
  },
  {
    "id": "Pinjam",
    "ngoko": "Silih",
    "krama": "Sambut"
  },
  {
    "id": "Pinjam",
    "ngoko": "Utang",
    "krama": "Sambut"
  },
  {
    "id": "Pinjaman",
    "ngoko": "Silihan",
    "krama": "Sambutan"
  },
  {
    "id": "Pintu",
    "ngoko": "Lawang",
    "krama": "Kontên, Kori"
  },
  {
    "id": "Pipa rokok",
    "ngoko": "Bêdudan",
    "krama": "Watangan"
  },
  {
    "id": "Pipi",
    "ngoko": "Pipi",
    "krama": "Pêngarasan"
  },
  {
    "id": "Piring",
    "ngoko": "Piring",
    "krama": "Lancaran"
  },
  {
    "id": "Pisang",
    "ngoko": "Gêdhang",
    "krama": "Pisang"
  },
  {
    "id": "Pohon kelapa",
    "ngoko": "Glugu",
    "krama": "Glêga"
  },
  {
    "id": "Pokok",
    "ngoko": "Baku",
    "krama": "Bakên"
  },
  {
    "id": "Prihatin, Berprihatin",
    "ngoko": "Prihatin",
    "krama": "Prihatos"
  },
  {
    "id": "Puasa",
    "ngoko": "Pasa",
    "krama": "Siyam"
  },
  {
    "id": "Pukul",
    "ngoko": "Gêbug",
    "krama": "Gêbag"
  },
  {
    "id": "Pulang",
    "ngoko": "Mulih",
    "krama": "Mantuk"
  },
  {
    "id": "Pulang",
    "ngoko": "Ulih",
    "krama": "Mantuk"
  },
  {
    "id": "Puluh",
    "ngoko": "Puluh",
    "krama": "Dasa"
  },
  {
    "id": "Pundak, Bahu",
    "ngoko": "Pundhak",
    "krama": "Pamidangan"
  },
  {
    "id": "Punggung",
    "ngoko": "Gêgêr",
    "krama": "Pêngkêran"
  },
  {
    "id": "Punya",
    "ngoko": "Duwe",
    "krama": "Gadhah"
  },
  {
    "id": "Pusar",
    "ngoko": "Pusêr",
    "krama": "Pusêr"
  },
  {
    "id": "Pusar",
    "ngoko": "Wudêl",
    "krama": "Nabi"
  },
  {
    "id": "Pusing",
    "ngoko": "Mumêt",
    "krama": "Puyêng"
  },
  {
    "id": "Pusing",
    "ngoko": "Ngêlu",
    "krama": "Puyêng"
  },
  {
    "id": "Putih",
    "ngoko": "Putih",
    "krama": "Pêthak"
  },
  {
    "id": "Putri",
    "ngoko": "Gêndhuk",
    "krama": "Nini"
  },
  {
    "id": "Putri, Perempuan",
    "ngoko": "Wadon",
    "krama": "Êstri"
  },
  {
    "id": "Putting susu",
    "ngoko": "Pênthil",
    "krama": "Mundri"
  },
  {
    "id": "Putus tali pusar",
    "ngoko": "Puput",
    "krama": "Dhautan"
  },
  {
    "id": "Rahasia",
    "ngoko": "Wadi",
    "krama": "Wados"
  },
  {
    "id": "Raksasa",
    "ngoko": "Buta",
    "krama": "Danawa"
  },
  {
    "id": "Rambut",
    "ngoko": "Rambut",
    "krama": "Rikma"
  },
  {
    "id": "Rantau",
    "ngoko": "Paran",
    "krama": "Purug"
  },
  {
    "id": "Rasa, Perasaan",
    "ngoko": "Rasa",
    "krama": "Raos"
  },
  {
    "id": "Rata, Merata",
    "ngoko": "Rata",
    "krama": "Radin"
  },
  {
    "id": "Raut muka",
    "ngoko": "Ulat",
    "krama": "Pasuryan"
  },
  {
    "id": "Rebut, Rampas",
    "ngoko": "Rêbut",
    "krama": "Rêbat"
  },
  {
    "id": "Rendah",
    "ngoko": "Asor",
    "krama": "Awon"
  },
  {
    "id": "Repot",
    "ngoko": "Ewuh",
    "krama": "Êwêd"
  },
  {
    "id": "Repot",
    "ngoko": "Ribut",
    "krama": "Ribêt"
  },
  {
    "id": "Repot",
    "ngoko": "Rubêd",
    "krama": "Ribêd"
  },
  {
    "id": "Rindu",
    "ngoko": "Kangên",
    "krama": "Kapang, Oneng"
  },
  {
    "id": "Roboh",
    "ngoko": "Rubuh",
    "krama": "Rêbah"
  },
  {
    "id": "Rokok",
    "ngoko": "Rokok",
    "krama": "Sês"
  },
  {
    "id": "Rombak",
    "ngoko": "Rombak",
    "krama": "Rêbah, Rombak"
  },
  {
    "id": "Rugi, Tidak sampai",
    "ngoko": "Tuna",
    "krama": "Tuni"
  },
  {
    "id": "Rumah",
    "ngoko": "Omah",
    "krama": "Griya"
  },
  {
    "id": "Rumput",
    "ngoko": "Sukêt",
    "krama": "Rumput"
  },
  {
    "id": "Runding",
    "ngoko": "Rêmbug",
    "krama": "Rêmbag"
  },
  {
    "id": "Runtuh",
    "ngoko": "Runtuh",
    "krama": "Rêntah"
  },
  {
    "id": "Rupa",
    "ngoko": "Rupa",
    "krama": "Rupi"
  },
  {
    "id": "Rusak",
    "ngoko": "Bubrah",
    "krama": "Bibrah"
  },
  {
    "id": "Rusak",
    "ngoko": "Rusak",
    "krama": "Risak"
  },
  {
    "id": "Rusuh",
    "ngoko": "Rusuh",
    "krama": "Rêsah"
  },
  {
    "id": "Sabar menanti",
    "ngoko": "Sranta",
    "krama": "Srantos"
  },
  {
    "id": "Sabuk",
    "ngoko": "Sabuk",
    "krama": "Paningsêt"
  },
  {
    "id": "Sabung",
    "ngoko": "Adon",
    "krama": "Abên"
  },
  {
    "id": "Saja",
    "ngoko": "Wae",
    "krama": "Kemawon"
  },
  {
    "id": "Sajian",
    "ngoko": "Sajen",
    "krama": "Caosan"
  },
  {
    "id": "Sakit",
    "ngoko": "Lara",
    "krama": "Sakit"
  },
  {
    "id": "Salah",
    "ngoko": "Salah",
    "krama": "Lêpat"
  },
  {
    "id": "Salah, Keliru",
    "ngoko": "Luput",
    "krama": "Lepat"
  },
  {
    "id": "Sama",
    "ngoko": "Padha",
    "krama": "Sami"
  },
  {
    "id": "Sambung",
    "ngoko": "Sambung",
    "krama": "Sambêt"
  },
  {
    "id": "Sampai",
    "ngoko": "Nganti",
    "krama": "Ngantos"
  },
  {
    "id": "Sampai sekarang",
    "ngoko": "Sêprene",
    "krama": "Sêpriki"
  },
  {
    "id": "Sana",
    "ngoko": "Kana",
    "krama": "Ngrika"
  },
  {
    "id": "Sangat",
    "ngoko": "Bangêt",
    "krama": "Sangêt"
  },
  {
    "id": "Sangat pendek",
    "ngoko": "Kêndhekên",
    "krama": "Kandhapan"
  },
  {
    "id": "Sangat segan",
    "ngoko": "Kewuhan",
    "krama": "Kewêdan"
  },
  {
    "id": "Sanggup",
    "ngoko": "Saguh",
    "krama": "Sagah"
  },
  {
    "id": "Sapu tangan",
    "ngoko": "Kacu",
    "krama": "Usap asta"
  },
  {
    "id": "Sarung keris",
    "ngoko": "Warangka",
    "krama": "Sarungan"
  },
  {
    "id": "Satu",
    "ngoko": "Siji",
    "krama": "Sêtunggal"
  },
  {
    "id": "Satu",
    "ngoko": "Sê-",
    "krama": "Satunggal"
  },
  {
    "id": "Satu, Tunggal",
    "ngoko": "Tunggal",
    "krama": "Tungil"
  },
  {
    "id": "Saudara",
    "ngoko": "Dulur",
    "krama": "Dherek"
  },
  {
    "id": "Sawah",
    "ngoko": "Sawah",
    "krama": "Sabin"
  },
  {
    "id": "Aku, Saya",
    "ngoko": "Aku",
    "krama": "Kula"
  },
  {
    "id": "Saya",
    "ngoko": "Tak-",
    "krama": "Kula-"
  },
  {
    "id": "Sebar (benih)",
    "ngoko": "Sêbar",
    "krama": "Dhawah"
  },
  {
    "id": "Sebentar",
    "ngoko": "Sêdhela",
    "krama": "Sakedhap"
  },
  {
    "id": "Sebesar itu",
    "ngoko": "Sêmono",
    "krama": "Sêmantên"
  },
  {
    "id": "Sedih, Susah",
    "ngoko": "Rêdatin",
    "krama": "Rêdatos"
  },
  {
    "id": "Sedikit",
    "ngoko": "Sêthithik",
    "krama": "Sêkêdhik"
  },
  {
    "id": "Segala sesuatu",
    "ngoko": "Samubarang",
    "krama": "Samukawis"
  },
  {
    "id": "Sejak dulu",
    "ngoko": "Sêprana",
    "krama": "Sêprika"
  },
  {
    "id": "Sejenis rusa",
    "ngoko": "Mênjangan",
    "krama": "Sangsam"
  },
  {
    "id": "Sekali",
    "ngoko": "Pisan",
    "krama": "Pindhah"
  },
  {
    "id": "Sekarang",
    "ngoko": "Saiki",
    "krama": "Sakmênika"
  },
  {
    "id": "Sekian",
    "ngoko": "Mana",
    "krama": "Mantên"
  },
  {
    "id": "Sekian itu",
    "ngoko": "Sêmana",
    "krama": "Sêmantên"
  },
  {
    "id": "Selamat",
    "ngoko": "Rahayu",
    "krama": "Rahajêng"
  },
  {
    "id": "Selamat",
    "ngoko": "Slamet",
    "krama": "Wilujeng"
  },
  {
    "id": "Selamatan",
    "ngoko": "Slametan",
    "krama": "Wilujengan"
  },
  {
    "id": "Selesai",
    "ngoko": "Bubar",
    "krama": "Bibar"
  },
  {
    "id": "Selesai",
    "ngoko": "Buyar",
    "krama": "Rampung"
  },
  {
    "id": "Selimut",
    "ngoko": "Kêmul",
    "krama": "Singêb"
  },
  {
    "id": "Sembuh",
    "ngoko": "Mari",
    "krama": "Mantun"
  },
  {
    "id": "Sembuh",
    "ngoko": "Waras",
    "krama": "Saras"
  },
  {
    "id": "Sempit pandangannya",
    "ngoko": "Rupak",
    "krama": "Ripak"
  },
  {
    "id": "Semua",
    "ngoko": "Kabeh",
    "krama": "Sedaya"
  },
  {
    "id": "Senang",
    "ngoko": "Dhêmên",
    "krama": "Rêmên"
  },
  {
    "id": "Senang, Suka",
    "ngoko": "Sênêng",
    "krama": "Rêmen"
  },
  {
    "id": "Sendiri",
    "ngoko": "Dhewe",
    "krama": "Piyambak"
  },
  {
    "id": "Sendok",
    "ngoko": "Sendok",
    "krama": "Lantaran"
  },
  {
    "id": "Senjata",
    "ngoko": "Bêdhil",
    "krama": "Sênjata"
  },
  {
    "id": "Senjata tajam",
    "ngoko": "Gaman",
    "krama": "Dêdamêl"
  },
  {
    "id": "Senyatanya",
    "ngoko": "Tênan",
    "krama": "Estu, Yêktos"
  },
  {
    "id": "Sepanjang pagi",
    "ngoko": "Kesuk",
    "krama": "Sakenjing"
  },
  {
    "id": "Separo",
    "ngoko": "Sêparo",
    "krama": "Sêpalih"
  },
  {
    "id": "Seperti",
    "ngoko": "Kaya",
    "krama": "Kados"
  },
  {
    "id": "Sepuluh",
    "ngoko": "Sêpuluh",
    "krama": "Sêdasa"
  },
  {
    "id": "Serba",
    "ngoko": "Sarwa",
    "krama": "Sarwi"
  },
  {
    "id": "Serba banyak",
    "ngoko": "Gêdhen",
    "krama": "Agengan"
  },
  {
    "id": "Sering",
    "ngoko": "Kêrêp",
    "krama": "Asring"
  },
  {
    "id": "Sering",
    "ngoko": "Sok",
    "krama": "Asring"
  },
  {
    "id": "Sesepuh, Tetua",
    "ngoko": "Têtuwa",
    "krama": "Sêsêpuh"
  },
  {
    "id": "Setubuh",
    "ngoko": "Cumbana",
    "krama": "Saresmi"
  },
  {
    "id": "Si",
    "ngoko": "Si",
    "krama": "Pun"
  },
  {
    "id": "Siang",
    "ngoko": "Awan",
    "krama": "Siyang"
  },
  {
    "id": "Siang",
    "ngoko": "Rina",
    "krama": "Rintên"
  },
  {
    "id": "Siapa",
    "ngoko": "Sapa",
    "krama": "Sintên"
  },
  {
    "id": "Siku",
    "ngoko": "Sikut",
    "krama": "Siku"
  },
  {
    "id": "Simpan, Pelihara",
    "ngoko": "Rumat",
    "krama": "Rimat"
  },
  {
    "id": "Singgah",
    "ngoko": "Ampir",
    "krama": "Pinarak"
  },
  {
    "id": "Sini",
    "ngoko": "Kene",
    "krama": "Riki"
  },
  {
    "id": "Sisa",
    "ngoko": "Keren",
    "krama": "Kantunan"
  },
  {
    "id": "Sisir",
    "ngoko": "Jungkat",
    "krama": "Serat"
  },
  {
    "id": "Situ",
    "ngoko": "Kono",
    "krama": "Riku"
  },
  {
    "id": "Sore",
    "ngoko": "Sore",
    "krama": "Sontên"
  },
  {
    "id": "Suami",
    "ngoko": "Laki",
    "krama": "Semah"
  },
  {
    "id": "Suami/Istri",
    "ngoko": "Bojo",
    "krama": "Semah"
  },
  {
    "id": "Suara",
    "ngoko": "Suwara",
    "krama": "Suwanten"
  },
  {
    "id": "Sudah",
    "ngoko": "Wis",
    "krama": "Sampun"
  },
  {
    "id": "Sugi, Susur",
    "ngoko": "Susur",
    "krama": "Susur"
  },
  {
    "id": "Sulit",
    "ngoko": "Angel",
    "krama": "Awrat"
  },
  {
    "id": "Sulit, Parah",
    "ngoko": "Rêkasa",
    "krama": "Rêkaos"
  },
  {
    "id": "Sulung",
    "ngoko": "Barêp",
    "krama": "Pambajêng"
  },
  {
    "id": "Sunbang",
    "ngoko": "Suwêng",
    "krama": "Sêngkang"
  },
  {
    "id": "Sungai",
    "ngoko": "Kali",
    "krama": "Lepen"
  },
  {
    "id": "Sungguh, Benar",
    "ngoko": "Têmên",
    "krama": "Estu, Yêktos"
  },
  {
    "id": "Sunting",
    "ngoko": "Cundhuk",
    "krama": "Sangsangan"
  },
  {
    "id": "Sunyi, Sepi",
    "ngoko": "Sêpi",
    "krama": "Sêpên"
  },
  {
    "id": "Supaya",
    "ngoko": "Supaya",
    "krama": "Supados"
  },
  {
    "id": "Surga, Almarhum",
    "ngoko": "Suwarga",
    "krama": "Suwargi"
  },
  {
    "id": "Suruh",
    "ngoko": "Akon",
    "krama": "Akên"
  },
  {
    "id": "Susah",
    "ngoko": "Susah",
    "krama": "Sisah"
  },
  {
    "id": "Susu, Payudara",
    "ngoko": "Susu",
    "krama": "Pêmbayun"
  },
  {
    "id": "Tadi",
    "ngoko": "Mau",
    "krama": "Wau"
  },
  {
    "id": "Tahi, Tinja",
    "ngoko": "Tai",
    "krama": "Tinja"
  },
  {
    "id": "Tahu",
    "ngoko": "Ngêrti",
    "krama": "Ngêrtos"
  },
  {
    "id": "Tahu, Melihat",
    "ngoko": "Wêruh",
    "krama": "Sumêrêp"
  },
  {
    "id": "Tahu, Mengerti",
    "ngoko": "Dhêngêr",
    "krama": "Sumêrêp"
  },
  {
    "id": "Taji",
    "ngoko": "Jalu",
    "krama": "Jalu, Panja"
  },
  {
    "id": "Tali",
    "ngoko": "Tali",
    "krama": "Tangsul"
  },
  {
    "id": "Tambah",
    "ngoko": "Imbuh",
    "krama": "Imbêt"
  },
  {
    "id": "Tambah",
    "ngoko": "Mundhak",
    "krama": "Mindhak"
  },
  {
    "id": "Tambahan",
    "ngoko": "Wuwuhan",
    "krama": "Wêwahan"
  },
  {
    "id": "Tamu",
    "ngoko": "Dhayoh",
    "krama": "Tamu"
  },
  {
    "id": "Tanah",
    "ngoko": "Lêmah",
    "krama": "Siti"
  },
  {
    "id": "Tanam",
    "ngoko": "Tandur",
    "krama": "Tanêm"
  },
  {
    "id": "Tanda tangan",
    "ngoko": "Tanda Tangan",
    "krama": "Tapak Asta"
  },
  {
    "id": "Tandut",
    "ngoko": "Sungu",
    "krama": "Singat"
  },
  {
    "id": "Tangan",
    "ngoko": "Tangan",
    "krama": "Asta"
  },
  {
    "id": "Tangguh",
    "ngoko": "Tanggon",
    "krama": "Tanggên"
  },
  {
    "id": "Tanggung-tanggung",
    "ngoko": "Tanggung",
    "krama": "Tangêl"
  },
  {
    "id": "Tangis",
    "ngoko": "Tangis",
    "krama": "Pamuwun"
  },
  {
    "id": "Tangkai tombak",
    "ngoko": "Landheyan",
    "krama": "Jêjêran"
  },
  {
    "id": "Tari",
    "ngoko": "Joged",
    "krama": "Beksa"
  },
  {
    "id": "Taruh",
    "ngoko": "Deleh",
    "krama": "Suka"
  },
  {
    "id": "Taruh",
    "ngoko": "Dokok",
    "krama": "Dekek"
  },
  {
    "id": "Tawa",
    "ngoko": "Guyu",
    "krama": "Gujeng"
  },
  {
    "id": "Tawar",
    "ngoko": "Ênyang",
    "krama": "Awis"
  },
  {
    "id": "Tebu",
    "ngoko": "Têbu",
    "krama": "Rosan"
  },
  {
    "id": "Tekun",
    "ngoko": "Tlaten",
    "krama": "Tlatos"
  },
  {
    "id": "Telapak kaki",
    "ngoko": "Dlamakan",
    "krama": "Samparan"
  },
  {
    "id": "Telapak tangan",
    "ngoko": "Epek-epek",
    "krama": "Tapak asta"
  },
  {
    "id": "Telinga",
    "ngoko": "Kuping",
    "krama": "Talingan"
  },
  {
    "id": "Telur",
    "ngoko": "Êndhog",
    "krama": "Tigan"
  },
  {
    "id": "Teman",
    "ngoko": "Kanca",
    "krama": "Rencang"
  },
  {
    "id": "Tembaga",
    "ngoko": "Têmbaga",
    "krama": "Têmbagi"
  },
  {
    "id": "Tembakau",
    "ngoko": "Bako",
    "krama": "Sata"
  },
  {
    "id": "Tempat",
    "ngoko": "Panggonan",
    "krama": "Panggenan"
  },
  {
    "id": "Tempat",
    "ngoko": "Ênggon",
    "krama": "Ênggen"
  },
  {
    "id": "Tempat nasi",
    "ngoko": "Ajang",
    "krama": "Ajang"
  },
  {
    "id": "Temu",
    "ngoko": "Têmu",
    "krama": "Panggih"
  },
  {
    "id": "Tengkuk",
    "ngoko": "Cêngêl",
    "krama": "Griwa"
  },
  {
    "id": "Tengkuk",
    "ngoko": "Githok",
    "krama": "Griwa"
  },
  {
    "id": "Tentu, Jelas",
    "ngoko": "Karuhan",
    "krama": "Kantênan"
  },
  {
    "id": "Tepat",
    "ngoko": "Pênêr",
    "krama": "Lêrês"
  },
  {
    "id": "Terairi (sawah)",
    "ngoko": "Kêbanyon",
    "krama": "Kêtoyan"
  },
  {
    "id": "Terang",
    "ngoko": "Padhang",
    "krama": "Pajar"
  },
  {
    "id": "Terasa",
    "ngoko": "Krasa",
    "krama": "Kraos"
  },
  {
    "id": "Terasi",
    "ngoko": "Trasi",
    "krama": "Traos"
  },
  {
    "id": "Tercium baunya",
    "ngoko": "Kambu",
    "krama": "Kambet"
  },
  {
    "id": "Tergesa-gesa",
    "ngoko": "Kêsusu",
    "krama": "Kêsêsa"
  },
  {
    "id": "Teringat",
    "ngoko": "Kelingan",
    "krama": "Kemutan"
  },
  {
    "id": "Terjaga",
    "ngoko": "Lek",
    "krama": "Wungu"
  },
  {
    "id": "Terjaga",
    "ngoko": "Mêlek",
    "krama": "Wungu"
  },
  {
    "id": "Terkejut",
    "ngoko": "Kaget",
    "krama": "Kejot"
  },
  {
    "id": "Terlaksana",
    "ngoko": "Kêlakon",
    "krama": "Kêlampahan"
  },
  {
    "id": "Terlalu berani",
    "ngoko": "Kumawani",
    "krama": "Kumawantun"
  },
  {
    "id": "Terlalu jarang",
    "ngoko": "Karangên",
    "krama": "Kawisên"
  },
  {
    "id": "Terlalu jauh",
    "ngoko": "Kadohan",
    "krama": "Kêtêbihên"
  },
  {
    "id": "Terlalu kecil",
    "ngoko": "Kêcilikên",
    "krama": "Kalitên"
  },
  {
    "id": "Terlalu lama",
    "ngoko": "Kêsuwen",
    "krama": "Kvdangon"
  },
  {
    "id": "Terlanjur",
    "ngoko": "Kêbacut",
    "krama": "Kelajeng"
  },
  {
    "id": "Terlupa",
    "ngoko": "Kêlalen",
    "krama": "Kêsupen"
  },
  {
    "id": "Terlupa",
    "ngoko": "Kêlalen",
    "krama": "Kêsupen"
  },
  {
    "id": "Termasuk",
    "ngoko": "Klêbu",
    "krama": "Klêbêt"
  },
  {
    "id": "Tersendawa",
    "ngoko": "Atop",
    "krama": "Sêgu"
  },
  {
    "id": "Tertinggal",
    "ngoko": "Kari",
    "krama": "Kantun"
  },
  {
    "id": "Tertinggal",
    "ngoko": "Keri",
    "krama": "Kantun"
  },
  {
    "id": "Terungkap",
    "ngoko": "Wêtu",
    "krama": "Kêwêdal"
  },
  {
    "id": "Terus",
    "ngoko": "Têrus",
    "krama": "Lajêng"
  },
  {
    "id": "Tetangga",
    "ngoko": "Tangga",
    "krama": "Tanggi"
  },
  {
    "id": "Tiba, Sampai",
    "ngoko": "Têkan",
    "krama": "Dumugi"
  },
  {
    "id": "Tidak",
    "ngoko": "Ora",
    "krama": "Botên"
  },
  {
    "id": "Tidak jadi",
    "ngoko": "Wurung",
    "krama": "Sande"
  },
  {
    "id": "Tidak mau",
    "ngoko": "Êmoh",
    "krama": "Botên purun"
  },
  {
    "id": "Tidak Menurut",
    "ngoko": "Bangga",
    "krama": "Banggi"
  },
  {
    "id": "Tidak percaya",
    "ngoko": "Paido",
    "krama": "Paibên"
  },
  {
    "id": "Tidak Tahu",
    "ngoko": "Êmbuh",
    "krama": "Kilap"
  },
  {
    "id": "Tidak terawat",
    "ngoko": "Kapiran",
    "krama": "Kapinten"
  },
  {
    "id": "Tidur",
    "ngoko": "Turu",
    "krama": "Tilem"
  },
  {
    "id": "Tiduran",
    "ngoko": "Turon",
    "krama": "Tilêman"
  },
  {
    "id": "Tiga",
    "ngoko": "Têlu",
    "krama": "Tiga"
  },
  {
    "id": "Tikar",
    "ngoko": "Klasa",
    "krama": "Gêlaran"
  },
  {
    "id": "Tinggi",
    "ngoko": "Dhuwur",
    "krama": "Inggil"
  },
  {
    "id": "Tombak",
    "ngoko": "Tumbak",
    "krama": "Waos"
  },
  {
    "id": "Tongkat",
    "ngoko": "Têkên",
    "krama": "Lantaran"
  },
  {
    "id": "Tua",
    "ngoko": "Tuwa",
    "krama": "Sêpuh"
  },
  {
    "id": "Tukar",
    "ngoko": "Ijol",
    "krama": "Lintu"
  },
  {
    "id": "Tukar, Ganti",
    "ngoko": "Liru",
    "krama": "Lintu"
  },
  {
    "id": "Tulang",
    "ngoko": "Balung",
    "krama": "Tosan"
  },
  {
    "id": "Tulang rusuk",
    "ngoko": "Iga",
    "krama": "Unusan"
  },
  {
    "id": "Tulis",
    "ngoko": "Tulis",
    "krama": "Sêrat"
  },
  {
    "id": "Tulisan",
    "ngoko": "Tulisan",
    "krama": "Sêratan"
  },
  {
    "id": "Tumbuh",
    "ngoko": "Tuwuh",
    "krama": "Tewah"
  },
  {
    "id": "Tunggu",
    "ngoko": "Tunggu",
    "krama": "Têngga"
  },
  {
    "id": "Tunggu",
    "ngoko": "Ênteni",
    "krama": "Entosi"
  },
  {
    "id": "Turun",
    "ngoko": "Dhun",
    "krama": "Mandhap"
  },
  {
    "id": "Turun",
    "ngoko": "Mudhun",
    "krama": "Mandhap"
  },
  {
    "id": "Turun",
    "ngoko": "Udhun",
    "krama": "Mandhap"
  },
  {
    "id": "Uang",
    "ngoko": "Dhuwit",
    "krama": "Yatra"
  },
  {
    "id": "Ubah, Berubah",
    "ngoko": "Robah",
    "krama": "Rêbah"
  },
  {
    "id": "Ubun-ubun",
    "ngoko": "Êmbunêmbun",
    "krama": "Sundhulan"
  },
  {
    "id": "Ular",
    "ngoko": "Ula",
    "krama": "Sawêr"
  },
  {
    "id": "Umur",
    "ngoko": "Umur",
    "krama": "Yuswa"
  },
  {
    "id": "Undangan",
    "ngoko": "Ulêm",
    "krama": "Atur"
  },
  {
    "id": "Upah",
    "ngoko": "Opah",
    "krama": "Epah"
  },
  {
    "id": "Upama",
    "ngoko": "Upama",
    "krama": "Upami"
  },
  {
    "id": "Usus",
    "ngoko": "Usus",
    "krama": "Jaringan"
  },
  {
    "id": "Utama",
    "ngoko": "Utama",
    "krama": "Utami"
  },
  {
    "id": "Utara",
    "ngoko": "Lor",
    "krama": "Ler"
  },
  {
    "id": "Utuh",
    "ngoko": "Wutuh",
    "krama": "Wêtah"
  },
  {
    "id": "Waktu",
    "ngoko": "Wayah",
    "krama": "Wanci"
  },
  {
    "id": "Waktu",
    "ngoko": "Wêktu",
    "krama": "Wêkdal"
  },
  {
    "id": "Warisan",
    "ngoko": "Warisan",
    "krama": "Tilaran"
  },
  {
    "id": "Warna/Jenis",
    "ngoko": "Warna",
    "krama": "Warni"
  },
  {
    "id": "Wasapada",
    "ngoko": "Waspada",
    "krama": "Wasapaos"
  },
  {
    "id": "Wayang",
    "ngoko": "Wayang",
    "krama": "Ringgit"
  },
  {
    "id": "Wilayahnya orang jawa",
    "ngoko": "Kajawan",
    "krama": "Kajawen"
  },
  {
    "id": "Ya",
    "ngoko": "Ya, Iya",
    "krama": "Inggih"
  },
  {
    "id": "Yang",
    "ngoko": "Sing",
    "krama": "Ingkang"
  }
];

  function normalize(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[êèé]/g, 'e')
      .trim();
  }

  const lookupIndex = [];
  KAMUS_DATA.forEach(function (entry) {
    const idVariants = entry.id.split(/[,/]/).map(function (s) { return normalize(s); }).filter(Boolean);
    const ngokoVariants = entry.ngoko.split(/[,/]/).map(function (s) { return normalize(s); }).filter(Boolean);
    const kramaVariants = entry.krama.split(/[,/]/).map(function (s) { return normalize(s); }).filter(Boolean);

    lookupIndex.push({
      entry: entry,
      idNorm: normalize(entry.id),
      ngokoNorm: normalize(entry.ngoko),
      kramaNorm: normalize(entry.krama),
      idVariants: idVariants,
      ngokoVariants: ngokoVariants,
      kramaVariants: kramaVariants
    });
  });

  function findEntryForWord(word, langMode) {
    const normWord = normalize(word);
    if (!normWord) return null;

    for (let i = 0; i < lookupIndex.length; i++) {
      const item = lookupIndex[i];
      if (langMode === 'id' || langMode === 'auto') {
        if (item.idNorm === normWord || item.idVariants.includes(normWord)) {
          return { entry: item.entry, detected: 'id' };
        }
      }
      if (langMode === 'ngoko' || langMode === 'auto') {
        if (item.ngokoNorm === normWord || item.ngokoVariants.includes(normWord)) {
          return { entry: item.entry, detected: 'ngoko' };
        }
      }
      if (langMode === 'krama' || langMode === 'auto') {
        if (item.kramaNorm === normWord || item.kramaVariants.includes(normWord)) {
          return { entry: item.entry, detected: 'krama' };
        }
      }
    }
    return null;
  }

  function translateText(text, sourceLang) {
    const trimmed = text.trim();
    if (!trimmed) {
      return { id: '', ngoko: '', krama: '', foundCount: 0, totalWords: 0 };
    }

    const normTrimmed = normalize(trimmed);
    if (normTrimmed === 'aku') {
      const isCap = trimmed[0] === trimmed[0].toUpperCase();
      const word = isCap ? 'Aku' : 'aku';
      const kramaWord = isCap ? 'Kula' : 'kula';
      return {
        id: word,
        ngoko: word,
        krama: kramaWord,
        foundCount: 1,
        totalWords: 1
      };
    }
    if (normTrimmed === 'saya') {
      const isCap = trimmed[0] === trimmed[0].toUpperCase();
      const word = isCap ? 'Saya' : 'saya';
      const ngokoWord = isCap ? 'Aku' : 'aku';
      const kramaWord = isCap ? 'Kula' : 'kula';
      return {
        id: word,
        ngoko: ngokoWord,
        krama: kramaWord,
        foundCount: 1,
        totalWords: 1
      };
    }

    const fullMatch = findEntryForWord(trimmed, sourceLang);
    if (fullMatch) {
      let transId = fullMatch.entry.id.split(/[,/]/)[0].trim();
      return {
        id: transId,
        ngoko: fullMatch.entry.ngoko.split(/[,/]/)[0].trim(),
        krama: fullMatch.entry.krama.split(/[,/]/)[0].trim(),
        foundCount: 1,
        totalWords: 1
      };
    }

    const tokens = trimmed.split(/(\s+|[,.!?]+)/);
    const resId = [];
    const resNgoko = [];
    const resKrama = [];
    let foundCount = 0;
    let wordCount = 0;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!token) continue;
      if (/^(\s+|[,.!?]+)$/.test(token)) {
        resId.push(token);
        resNgoko.push(token);
        resKrama.push(token);
        continue;
      }

      wordCount++;
      const normTok = normalize(token);
      const isCap = token[0] === token[0].toUpperCase();
      function cap(s) {
        if (!s) return '';
        return isCap ? s.charAt(0).toUpperCase() + s.slice(1) : s;
      }

      if (normTok === 'aku') {
        foundCount++;
        resId.push(cap('aku'));
        resNgoko.push(cap('aku'));
        resKrama.push(cap('kula'));
        continue;
      }
      if (normTok === 'saya') {
        foundCount++;
        resId.push(cap('saya'));
        resNgoko.push(cap('aku'));
        resKrama.push(cap('kula'));
        continue;
      }

      const match = findEntryForWord(token, sourceLang);
      if (match) {
        foundCount++;
        resId.push(cap(match.entry.id.split(/[,/]/)[0].trim()));
        resNgoko.push(cap(match.entry.ngoko.split(/[,/]/)[0].trim()));
        resKrama.push(cap(match.entry.krama.split(/[,/]/)[0].trim()));
      } else {
        resId.push(token);
        resNgoko.push(token);
        resKrama.push(token);
      }
    }

    return {
      id: resId.join(''),
      ngoko: resNgoko.join(''),
      krama: resKrama.join(''),
      foundCount: foundCount,
      totalWords: wordCount
    };
  }

  function initTranslator() {
    const inputEl = document.getElementById('translatorInput');
    const sourceSelect = document.getElementById('translatorSourceLang');
    const btnTranslate = document.getElementById('btnTranslate');
    const btnClear = document.getElementById('btnTranslateClear');
    const resIdEl = document.getElementById('resIdText');
    const resNgokoEl = document.getElementById('resNgokoText');
    const resKramaEl = document.getElementById('resKramaText');
    const noteEl = document.getElementById('transNotFoundNote');

    if (!inputEl || !btnTranslate) return;

    function doTranslate() {
      const rawText = inputEl.value.trim();
      const sourceLang = sourceSelect ? sourceSelect.value : 'auto';

      if (!rawText) {
        if (window.showToast) window.showToast('Ketik kata atau kalimat yang ingin diterjemahkan ✍️');
        if (resIdEl) resIdEl.textContent = '-';
        if (resNgokoEl) resNgokoEl.textContent = '-';
        if (resKramaEl) resKramaEl.textContent = '-';
        if (noteEl) noteEl.style.display = 'none';
        return;
      }

      const result = translateText(rawText, sourceLang);

      if (resIdEl) resIdEl.textContent = result.id || rawText;
      if (resNgokoEl) resNgokoEl.textContent = result.ngoko || rawText;
      if (resKramaEl) resKramaEl.textContent = result.krama || rawText;

      if (noteEl) {
        if (result.foundCount === 0) {
          noteEl.innerHTML = '<span>⚠️ Kata tidak ditemukan dalam daftar kosakata dasar. Coba ketik bentuk dasar kata atau periksa ejaanmu.</span>';
          noteEl.style.display = 'block';
        } else if (result.foundCount < result.totalWords) {
          noteEl.innerHTML = '<span>ℹ️ Berhasil menerjemahkan ' + result.foundCount + ' dari ' + result.totalWords + ' kata berdasarkan kamus dasar SIKIPLI.</span>';
          noteEl.style.display = 'block';
        } else {
          noteEl.style.display = 'none';
        }
      }

      if (window.showToast) {
        window.showToast('Berhasil diterjemahkan! ✨');
      }
    }

    btnTranslate.addEventListener('click', doTranslate);

    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        doTranslate();
      }
    });

    if (btnClear) {
      btnClear.addEventListener('click', function () {
        inputEl.value = '';
        if (resIdEl) resIdEl.textContent = '-';
        if (resNgokoEl) resNgokoEl.textContent = '-';
        if (resKramaEl) resKramaEl.textContent = '-';
        if (noteEl) noteEl.style.display = 'none';
        inputEl.focus();
      });
    }

    document.querySelectorAll('.trans-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        inputEl.value = chip.dataset.text || chip.textContent;
        doTranslate();
      });
    });

    document.querySelectorAll('.trans-copy-btn-simple, .trans-copy-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (targetEl && targetEl.textContent && targetEl.textContent !== '-') {
          navigator.clipboard.writeText(targetEl.textContent).then(function () {
            if (window.showToast) window.showToast('Teks berhasil disalin ke clipboard! 📋');
          }).catch(function () {
            if (window.showToast) window.showToast('Salin manual: ' + targetEl.textContent);
          });
        }
      });
    });
  }

  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;
  let currentSearch = '';
  let filteredData = KAMUS_DATA.slice();

  function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, function (tag) {
      return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      })[tag] || tag;
    });
  }

  function highlightText(text, query) {
    if (!query) return escapeHTML(text);
    const escaped = escapeHTML(text);
    const q = query.trim();
    if (!q) return escaped;
    try {
      const regex = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      return escaped.replace(regex, '<mark style="background: #F8E29B; color: #35281A; padding: 1px 4px; border-radius: 2px;">$1</mark>');
    } catch (e) {
      return escaped;
    }
  }

  function renderTable() {
    const tbody = document.getElementById('kamusTableBody');
    const paginationEl = document.getElementById('kamusPagination');
    const countEl = document.getElementById('kamusCountNumber');

    if (!tbody) return;

    if (countEl) {
      countEl.textContent = filteredData.length;
    }

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    const pageItems = filteredData.slice(startIdx, endIdx);

    if (pageItems.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 36px 14px; color: var(--text-muted);">' +
        '🔍 Kosakata tidak ditemukan untuk kata kunci <strong>"' + escapeHTML(currentSearch) + '"</strong>.<br>' +
        '<span style="font-size: 0.85rem; margin-top: 6px; display: inline-block;">Coba kata lain atau periksa kembali ejaanmu.</span>' +
        '</td></tr>';
      if (paginationEl) paginationEl.innerHTML = '';
      return;
    }

    let rowsHtml = '';
    for (let i = 0; i < pageItems.length; i++) {
      const item = pageItems[i];
      const rowNum = startIdx + i + 1;
      rowsHtml += '<tr>' +
        '<td style="text-align: center; color: var(--text-muted); font-size: 0.85rem; font-weight: 600;">' + rowNum + '</td>' +
        '<td style="font-weight: 600; color: var(--text-heading);">' + highlightText(item.id, currentSearch) + '</td>' +
        '<td><span style="color: var(--green-mid); font-weight: 500;">' + highlightText(item.ngoko, currentSearch) + '</span></td>' +
        '<td><span style="color: var(--brown-primary); font-weight: 500;">' + highlightText(item.krama, currentSearch) + '</span></td>' +
        '</tr>';
    }
    tbody.innerHTML = rowsHtml;

    if (!paginationEl) return;

    let pagHtml = '';

    if (currentPage > 1) {
      pagHtml += '<button type="button" class="kamus-pag-btn" data-page="' + (currentPage - 1) + '" aria-label="Halaman Sebelumnya">‹</button>';
    } else {
      pagHtml += '<button type="button" class="kamus-pag-btn disabled" disabled aria-label="Halaman Sebelumnya">‹</button>';
    }

    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      pagHtml += '<button type="button" class="kamus-pag-btn" data-page="1">1</button>';
      if (startPage > 2) {
        pagHtml += '<span style="padding: 0 4px; color: var(--text-muted);">…</span>';
      }
    }

    for (let p = startPage; p <= endPage; p++) {
      if (p === currentPage) {
        pagHtml += '<button type="button" class="kamus-pag-btn active" data-page="' + p + '">' + p + '</button>';
      } else {
        pagHtml += '<button type="button" class="kamus-pag-btn" data-page="' + p + '">' + p + '</button>';
      }
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pagHtml += '<span style="padding: 0 4px; color: var(--text-muted);">…</span>';
      }
      pagHtml += '<button type="button" class="kamus-pag-btn" data-page="' + totalPages + '">' + totalPages + '</button>';
    }

    if (currentPage < totalPages) {
      pagHtml += '<button type="button" class="kamus-pag-btn" data-page="' + (currentPage + 1) + '" aria-label="Halaman Berikutnya">›</button>';
    } else {
      pagHtml += '<button type="button" class="kamus-pag-btn disabled" disabled aria-label="Halaman Berikutnya">›</button>';
    }

    paginationEl.innerHTML = pagHtml;

    paginationEl.querySelectorAll('.kamus-pag-btn[data-page]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetPage = parseInt(btn.dataset.page, 10);
        if (targetPage && targetPage !== currentPage) {
          currentPage = targetPage;
          renderTable();
          const kamusBox = document.getElementById('kamus-section');
          if (kamusBox) {
            kamusBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  function handleSearch(query) {
    currentSearch = query.trim();
    currentPage = 1;

    if (!currentSearch) {
      filteredData = KAMUS_DATA.slice();
    } else {
      const qNorm = normalize(currentSearch);
      filteredData = KAMUS_DATA.filter(function (item) {
        return normalize(item.id).includes(qNorm) ||
          normalize(item.ngoko).includes(qNorm) ||
          normalize(item.krama).includes(qNorm);
      });
    }
    renderTable();
  }

  function initKamus() {
    const searchInput = document.getElementById('kamusSearch');
    const searchBtn = document.getElementById('btnSearchKamus');

    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        handleSearch(e.target.value);
      });
    }

    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', function () {
        handleSearch(searchInput.value);
      });
    }

    renderTable();
    initTranslator();
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initKamus);
    } else {
      initKamus();
    }
  }

  const rootObj = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this);
  if (rootObj) {
    rootObj.KamusEngine = {
      data: KAMUS_DATA,
      translate: translateText
    };
  }
})();
