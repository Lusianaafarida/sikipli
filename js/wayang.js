(function () {
  "use strict";

  const WAYANG_DATA = [
  {
    "num": 1,
    "file": "01_Abilawa.png",
    "name": "Abilawa"
  },
  {
    "num": 2,
    "file": "02_Adimanggala.png",
    "name": "Adimanggala"
  },
  {
    "num": 3,
    "file": "03_Ambalika.png",
    "name": "Ambalika"
  },
  {
    "num": 4,
    "file": "04_Abimanyu.png",
    "name": "Abimanyu"
  },
  {
    "num": 5,
    "file": "05_Adirata.png",
    "name": "Adirata"
  },
  {
    "num": 6,
    "file": "06_Ambika.png",
    "name": "Ambika"
  },
  {
    "num": 7,
    "file": "07_Abiyasa_Raja.png",
    "name": "Abiyasa Raja"
  },
  {
    "num": 8,
    "file": "08_Agnyawati.png",
    "name": "Agnyawati"
  },
  {
    "num": 9,
    "file": "09_Amongdenta.png",
    "name": "Amongdenta"
  },
  {
    "num": 10,
    "file": "10_Abiyasa.png",
    "name": "Abiyasa"
  },
  {
    "num": 11,
    "file": "11_Amba.png",
    "name": "Amba"
  },
  {
    "num": 12,
    "file": "12_Amongmurka.png",
    "name": "Amongmurka"
  },
  {
    "num": 13,
    "file": "13_Andrika.png",
    "name": "Andrika"
  },
  {
    "num": 14,
    "file": "14_Anggraini.png",
    "name": "Anggraini"
  },
  {
    "num": 15,
    "file": "15_Anjani.png",
    "name": "Anjani"
  },
  {
    "num": 16,
    "file": "16_Anggada.png",
    "name": "Anggada"
  },
  {
    "num": 17,
    "file": "17_Angkawijaya.png",
    "name": "Angkawijaya"
  },
  {
    "num": 18,
    "file": "18_Anoman.png",
    "name": "Anoman"
  },
  {
    "num": 19,
    "file": "19_Anggawangsa.png",
    "name": "Anggawangsa"
  },
  {
    "num": 20,
    "file": "20_Anila.png",
    "name": "Anila"
  },
  {
    "num": 21,
    "file": "21_Antaboga.png",
    "name": "Antaboga"
  },
  {
    "num": 22,
    "file": "22_Anggira.png",
    "name": "Anggira"
  },
  {
    "num": 23,
    "file": "23_Animandaya.png",
    "name": "Animandaya"
  },
  {
    "num": 24,
    "file": "24_Antagopa.png",
    "name": "Antagopa"
  },
  {
    "num": 25,
    "file": "25_Anggisrana.png",
    "name": "Anggisrana"
  },
  {
    "num": 26,
    "file": "26_Anjani_Kera.png",
    "name": "Anjani Kera"
  },
  {
    "num": 27,
    "file": "27_Antareja.png",
    "name": "Antareja"
  },
  {
    "num": 28,
    "file": "28_Antasena.png",
    "name": "Antasena"
  },
  {
    "num": 29,
    "file": "29_Arimuka.png",
    "name": "Arimuka"
  },
  {
    "num": 30,
    "file": "30_Asmara.png",
    "name": "Asmara"
  },
  {
    "num": 31,
    "file": "31_Antawirya.png",
    "name": "Antawirya"
  },
  {
    "num": 32,
    "file": "32_Arjunasasrabahu.png",
    "name": "Arjunasasrabahu"
  },
  {
    "num": 33,
    "file": "33_Aswan.png",
    "name": "Aswan"
  },
  {
    "num": 34,
    "file": "34_Arimba.png",
    "name": "Arimba"
  },
  {
    "num": 35,
    "file": "35_Arjuna.png",
    "name": "Arjuna"
  },
  {
    "num": 36,
    "file": "36_Aswanikumba.png",
    "name": "Aswanikumba"
  },
  {
    "num": 37,
    "file": "37_Arimbi_Raseksi.png",
    "name": "Arimbi Raseksi"
  },
  {
    "num": 38,
    "file": "38_Arjunapati.png",
    "name": "Arjunapati"
  },
  {
    "num": 39,
    "file": "39_Bambang_Aswatama.png",
    "name": "Bambang Aswatama"
  },
  {
    "num": 40,
    "file": "40_Arimbi.png",
    "name": "Arimbi"
  },
  {
    "num": 41,
    "file": "41_Arjunawijaya.png",
    "name": "Arjunawijaya"
  },
  {
    "num": 42,
    "file": "42_Badawangala.png",
    "name": "Badawangala"
  },
  {
    "num": 43,
    "file": "43_Badraini.png",
    "name": "Badraini"
  },
  {
    "num": 44,
    "file": "44_Bagong_Wanita.png",
    "name": "Bagong Wanita"
  },
  {
    "num": 45,
    "file": "45_Banaputra.png",
    "name": "Banaputra"
  },
  {
    "num": 46,
    "file": "46_Bagalbuntung.png",
    "name": "Bagalbuntung"
  },
  {
    "num": 47,
    "file": "47_Baka.png",
    "name": "Baka"
  },
  {
    "num": 48,
    "file": "48_BandonDani.png",
    "name": "BandonDani"
  },
  {
    "num": 49,
    "file": "49_Bagaspati.png",
    "name": "Bagaspati"
  },
  {
    "num": 50,
    "file": "50_Baladewa.png",
    "name": "Baladewa"
  },
  {
    "num": 51,
    "file": "51_Banjaranjali.png",
    "name": "Banjaranjali"
  },
  {
    "num": 52,
    "file": "52_Bagong_Gembor.png",
    "name": "Bagong Gembor"
  },
  {
    "num": 53,
    "file": "53_Balaupata.png",
    "name": "Balaupata"
  },
  {
    "num": 54,
    "file": "54_Dewi_Banowati.png",
    "name": "Dewi Banowati"
  },
  {
    "num": 55,
    "file": "55_Bagong_Ratu.png",
    "name": "Bagong Ratu"
  },
  {
    "num": 56,
    "file": "56_Bambang_Wijanarko.png",
    "name": "Bambang Wijanarko"
  },
  {
    "num": 57,
    "file": "57_Barata_Branta.png",
    "name": "Barata Branta"
  },
  {
    "num": 58,
    "file": "58_Baratawaja.png",
    "name": "Baratawaja"
  },
  {
    "num": 59,
    "file": "59_Basupati.png",
    "name": "Basupati"
  },
  {
    "num": 60,
    "file": "60_Bisma.png",
    "name": "Bisma"
  },
  {
    "num": 61,
    "file": "61_Baruna.png",
    "name": "Baruna"
  },
  {
    "num": 62,
    "file": "62_Bayu.png",
    "name": "Bayu"
  },
  {
    "num": 63,
    "file": "63_Bogadenta.png",
    "name": "Bogadenta"
  },
  {
    "num": 64,
    "file": "64_Basudewa.png",
    "name": "Basudewa"
  },
  {
    "num": 65,
    "file": "65_Bilung_Kyai_Inten.png",
    "name": "Bilung Kyai Inten"
  },
  {
    "num": 66,
    "file": "66_Bomanarakasura.png",
    "name": "Bomanarakasura"
  },
  {
    "num": 67,
    "file": "67_Basukesti.png",
    "name": "Basukesti"
  },
  {
    "num": 68,
    "file": "68_Bima_Yogya.png",
    "name": "Bima Yogya"
  },
  {
    "num": 69,
    "file": "69_Bomantara.png",
    "name": "Bomantara"
  },
  {
    "num": 70,
    "file": "70_Basukunti.png",
    "name": "Basukunti"
  },
  {
    "num": 71,
    "file": "71_Bisawarna.png",
    "name": "Bisawarna"
  },
  {
    "num": 72,
    "file": "72_Bragalba.png",
    "name": "Bragalba"
  },
  {
    "num": 73,
    "file": "73_Brahala.png",
    "name": "Brahala"
  },
  {
    "num": 74,
    "file": "74_Bremani.png",
    "name": "Bremani"
  },
  {
    "num": 75,
    "file": "75_Cakil.png",
    "name": "Cakil"
  },
  {
    "num": 76,
    "file": "76_Brahma.png",
    "name": "Brahma"
  },
  {
    "num": 77,
    "file": "77_Bukbis.png",
    "name": "Bukbis"
  },
  {
    "num": 78,
    "file": "78_Cakra.png",
    "name": "Cakra"
  },
  {
    "num": 79,
    "file": "79_Brajadenta.png",
    "name": "Brajadenta"
  },
  {
    "num": 80,
    "file": "80_Bumiloka.png",
    "name": "Bumiloka"
  },
  {
    "num": 81,
    "file": "81_Candra.png",
    "name": "Candra"
  },
  {
    "num": 82,
    "file": "82_Bratasena.png",
    "name": "Bratasena"
  },
  {
    "num": 83,
    "file": "83_Buriswara.png",
    "name": "Buriswara"
  },
  {
    "num": 84,
    "file": "84_Cangik.png",
    "name": "Cangik"
  },
  {
    "num": 85,
    "file": "85_Bremana.png",
    "name": "Bremana"
  },
  {
    "num": 86,
    "file": "86_Buta_Terong.png",
    "name": "Buta Terong"
  },
  {
    "num": 87,
    "file": "87_Caranggana.png",
    "name": "Caranggana"
  },
  {
    "num": 88,
    "file": "88_Cingkrabala.png",
    "name": "Cingkrabala"
  },
  {
    "num": 89,
    "file": "89_Citralanggeni.png",
    "name": "Citralanggeni"
  },
  {
    "num": 90,
    "file": "90_Dadun_Wacana.png",
    "name": "Dadun Wacana"
  },
  {
    "num": 91,
    "file": "91_Citragada.png",
    "name": "Citragada"
  },
  {
    "num": 92,
    "file": "92_Citranggada.png",
    "name": "Citranggada"
  },
  {
    "num": 93,
    "file": "93_Damagosa.png",
    "name": "Damagosa"
  },
  {
    "num": 94,
    "file": "94_Citrahoyi.png",
    "name": "Citrahoyi"
  },
  {
    "num": 95,
    "file": "95_Citratara.png",
    "name": "Citratara"
  },
  {
    "num": 96,
    "file": "96_Danapati.png",
    "name": "Danapati"
  },
  {
    "num": 97,
    "file": "97_Citraksa.png",
    "name": "Citraksa"
  },
  {
    "num": 98,
    "file": "98_Citrawati.png",
    "name": "Citrawati"
  },
  {
    "num": 99,
    "file": "99_Danaraja.png",
    "name": "Danaraja"
  },
  {
    "num": 100,
    "file": "100_Citraksi.png",
    "name": "Citraksi"
  },
  {
    "num": 101,
    "file": "101_Dadung_Awuk.png",
    "name": "Dadung Awuk"
  },
  {
    "num": 102,
    "file": "102_Dandang_Minangsi.png",
    "name": "Dandang Minangsi"
  },
  {
    "num": 103,
    "file": "103_Darini.png",
    "name": "Darini"
  },
  {
    "num": 104,
    "file": "104_Dewabrata.png",
    "name": "Dewabrata"
  },
  {
    "num": 105,
    "file": "105_Drupadi.png",
    "name": "Drupadi"
  },
  {
    "num": 106,
    "file": "106_Darma.png",
    "name": "Darma"
  },
  {
    "num": 107,
    "file": "107_Dewaruci.png",
    "name": "Dewaruci"
  },
  {
    "num": 108,
    "file": "108_Druwasta.png",
    "name": "Druwasta"
  },
  {
    "num": 109,
    "file": "109_Dasamuka.png",
    "name": "Dasamuka"
  },
  {
    "num": 110,
    "file": "110_Dewi_Tari.png",
    "name": "Dewi Tari"
  },
  {
    "num": 111,
    "file": "111_Durga.png",
    "name": "Durga"
  },
  {
    "num": 112,
    "file": "112_Dasarata.png",
    "name": "Dasarata"
  },
  {
    "num": 113,
    "file": "113_Drestajumena.png",
    "name": "Drestajumena"
  },
  {
    "num": 114,
    "file": "114_Durmagati.png",
    "name": "Durmagati"
  },
  {
    "num": 115,
    "file": "115_Destarasta.png",
    "name": "Destarasta"
  },
  {
    "num": 116,
    "file": "116_Drupada.png",
    "name": "Drupada"
  },
  {
    "num": 117,
    "file": "117_Durna.png",
    "name": "Durna"
  },
  {
    "num": 118,
    "file": "118_Dursala.png",
    "name": "Dursala"
  },
  {
    "num": 119,
    "file": "119_Dwapara.png",
    "name": "Dwapara"
  },
  {
    "num": 120,
    "file": "120_Erawati.png",
    "name": "Erawati"
  },
  {
    "num": 121,
    "file": "121_Dursasana.png",
    "name": "Dursasana"
  },
  {
    "num": 122,
    "file": "122_Dwarapatih.png",
    "name": "Dwarapatih"
  },
  {
    "num": 123,
    "file": "123_Gagak_Baka.png",
    "name": "Gagak Baka"
  },
  {
    "num": 124,
    "file": "124_Dursilawati.png",
    "name": "Dursilawati"
  },
  {
    "num": 125,
    "file": "125_Ekalaya.png",
    "name": "Ekalaya"
  },
  {
    "num": 126,
    "file": "126_Gana.png",
    "name": "Gana"
  },
  {
    "num": 127,
    "file": "127_Duryudana_Bokongan.png",
    "name": "Duryudana Bokongan"
  },
  {
    "num": 128,
    "file": "128_Endra.png",
    "name": "Endra"
  },
  {
    "num": 129,
    "file": "129_Ganda_Bayu.png",
    "name": "Ganda Bayu"
  },
  {
    "num": 130,
    "file": "130_Duryudana.png",
    "name": "Duryudana"
  },
  {
    "num": 131,
    "file": "131_Emban.png",
    "name": "Emban"
  },
  {
    "num": 132,
    "file": "132_Gardapati.png",
    "name": "Gardapati"
  },
  {
    "num": 133,
    "file": "133_Gandamana.png",
    "name": "Gandamana"
  },
  {
    "num": 134,
    "file": "134_Gorawangsa.png",
    "name": "Gorawangsa"
  },
  {
    "num": 135,
    "file": "135_Guwarsi.png",
    "name": "Guwarsi"
  },
  {
    "num": 136,
    "file": "136_Gareng_Wregul.png",
    "name": "Gareng Wregul"
  },
  {
    "num": 137,
    "file": "137_Gotama.png",
    "name": "Gotama"
  },
  {
    "num": 138,
    "file": "138_Gandawati.png",
    "name": "Gandawati"
  },
  {
    "num": 139,
    "file": "139_Garudha.png",
    "name": "Garudha"
  },
  {
    "num": 140,
    "file": "140_Gunadewa.png",
    "name": "Gunadewa"
  },
  {
    "num": 141,
    "file": "141_Gangga.png",
    "name": "Gangga"
  },
  {
    "num": 142,
    "file": "142_Gathutkaca_Thantit.png",
    "name": "Gathutkaca Thantit"
  },
  {
    "num": 143,
    "file": "143_Guru_Yogya.png",
    "name": "Guru Yogya"
  },
  {
    "num": 144,
    "file": "144_Gendari.png",
    "name": "Gendari"
  },
  {
    "num": 145,
    "file": "145_Gathutkaca.png",
    "name": "Gathutkaca"
  },
  {
    "num": 146,
    "file": "146_Guwarsa.png",
    "name": "Guwarsa"
  },
  {
    "num": 147,
    "file": "147_Hamso.png",
    "name": "Hamso"
  },
  {
    "num": 148,
    "file": "148_Hartadriya.png",
    "name": "Hartadriya"
  },
  {
    "num": 149,
    "file": "149_Jamadagni.png",
    "name": "Jamadagni"
  },
  {
    "num": 150,
    "file": "150_Jarasanda.png",
    "name": "Jarasanda"
  },
  {
    "num": 151,
    "file": "151_Hiranyakasipu.png",
    "name": "Hiranyakasipu"
  },
  {
    "num": 152,
    "file": "152_Jaka_Puning.png",
    "name": "Jaka Puning"
  },
  {
    "num": 153,
    "file": "153_Jatagimbal.png",
    "name": "Jatagimbal"
  },
  {
    "num": 154,
    "file": "154_Indrajit.png",
    "name": "Indrajit"
  },
  {
    "num": 155,
    "file": "155_Jambumangli.png",
    "name": "Jambumangli"
  },
  {
    "num": 156,
    "file": "156_Jatasura.png",
    "name": "Jatasura"
  },
  {
    "num": 157,
    "file": "157_Irawan.png",
    "name": "Irawan"
  },
  {
    "num": 158,
    "file": "158_Janaka.png",
    "name": "Janaka"
  },
  {
    "num": 159,
    "file": "159_Jatayu.png",
    "name": "Jatayu"
  },
  {
    "num": 160,
    "file": "160_Jaka_Pengalasan.png",
    "name": "Jaka Pengalasan"
  },
  {
    "num": 161,
    "file": "161_Janget_Kinatelon.png",
    "name": "Janget Kinatelon"
  },
  {
    "num": 162,
    "file": "162_Jayadrata.png",
    "name": "Jayadrata"
  },
  {
    "num": 163,
    "file": "163_Jayasemedi.png",
    "name": "Jayasemedi"
  },
  {
    "num": 164,
    "file": "164_Jembawati.png",
    "name": "Jembawati"
  },
  {
    "num": 165,
    "file": "165_Kala_Rahu.png",
    "name": "Kala Rahu"
  },
  {
    "num": 166,
    "file": "166_Jayawilapa.png",
    "name": "Jayawilapa"
  },
  {
    "num": 167,
    "file": "167_Kakrasana.png",
    "name": "Kakrasana"
  },
  {
    "num": 168,
    "file": "168_Kalasrenggi.png",
    "name": "Kalasrenggi"
  },
  {
    "num": 169,
    "file": "169_Jembawan.png",
    "name": "Jembawan"
  },
  {
    "num": 170,
    "file": "170_Kala_Pracona.png",
    "name": "Kala Pracona"
  },
  {
    "num": 171,
    "file": "171_Kalayuwana.png",
    "name": "Kalayuwana"
  },
  {
    "num": 172,
    "file": "172_Jungkung_Mardeya.png",
    "name": "Jungkung Mardeya"
  },
  {
    "num": 173,
    "file": "173_Kala.png",
    "name": "Kala"
  },
  {
    "num": 174,
    "file": "174_Kalimantara.png",
    "name": "Kalimantara"
  },
  {
    "num": 175,
    "file": "175_Jatagini.png",
    "name": "Jatagini"
  },
  {
    "num": 176,
    "file": "176_Kala_Bendana.png",
    "name": "Kala Bendana"
  },
  {
    "num": 177,
    "file": "177_Kalmasapada.png",
    "name": "Kalmasapada"
  },
  {
    "num": 178,
    "file": "178_Kandihawa.png",
    "name": "Kandihawa"
  },
  {
    "num": 179,
    "file": "179_Kertapiyogo.png",
    "name": "Kertapiyogo"
  },
  {
    "num": 180,
    "file": "180_Krepa_Mudha.png",
    "name": "Krepa Mudha"
  },
  {
    "num": 181,
    "file": "181_Kangsadewa.png",
    "name": "Kangsadewa"
  },
  {
    "num": 182,
    "file": "182_Kencakurupa.png",
    "name": "Kencakurupa"
  },
  {
    "num": 183,
    "file": "183_Krepa_Resi.png",
    "name": "Krepa Resi"
  },
  {
    "num": 184,
    "file": "184_Karna.png",
    "name": "Karna"
  },
  {
    "num": 185,
    "file": "185_Kesawasidi.png",
    "name": "Kesawasidi"
  },
  {
    "num": 186,
    "file": "186_Kresna_Rondon.png",
    "name": "Kresna Rondon"
  },
  {
    "num": 187,
    "file": "187_Kartamarma.png",
    "name": "Kartamarma"
  },
  {
    "num": 188,
    "file": "188_Kimindama.png",
    "name": "Kimindama"
  },
  {
    "num": 189,
    "file": "189_Kresna_Yogya.png",
    "name": "Kresna Yogya"
  },
  {
    "num": 190,
    "file": "190_Kartanadi.png",
    "name": "Kartanadi"
  },
  {
    "num": 191,
    "file": "191_Kirata.png",
    "name": "Kirata"
  },
  {
    "num": 192,
    "file": "192_Kumba_Kumba.png",
    "name": "Kumba Kumba"
  },
  {
    "num": 193,
    "file": "193_Kumbakarna.png",
    "name": "Kumbakarna"
  },
  {
    "num": 194,
    "file": "194_Kaniraras.png",
    "name": "Kaniraras"
  },
  {
    "num": 195,
    "file": "195_Kamaratih.png",
    "name": "Kamaratih"
  },
  {
    "num": 196,
    "file": "196_Kumbayana.png",
    "name": "Kumbayana"
  },
  {
    "num": 197,
    "file": "197_Kekayi.png",
    "name": "Kekayi"
  },
  {
    "num": 198,
    "file": "198_P_Kunti_Boja.png",
    "name": "P. Kunti Boja"
  },
  {
    "num": 199,
    "file": "199_Kusya_Ramakusya.png",
    "name": "Kusya Ramakusya"
  },
  {
    "num": 200,
    "file": "200_Kenyawandu.png",
    "name": "Kenyawandu"
  },
  {
    "num": 201,
    "file": "201_R_Harya_Kurupati.png",
    "name": "R. Harya Kurupati"
  },
  {
    "num": 202,
    "file": "202_Kuwera.png",
    "name": "Kuwera"
  },
  {
    "num": 203,
    "file": "203_Krepi.png",
    "name": "Krepi"
  },
  {
    "num": 204,
    "file": "204_Kresna_Duta.png",
    "name": "Kresna Duta"
  },
  {
    "num": 205,
    "file": "205_Kanastren.png",
    "name": "Kanastren"
  },
  {
    "num": 206,
    "file": "206_Kunti.png",
    "name": "Kunti"
  },
  {
    "num": 207,
    "file": "207_Laksamana_Widagdo.png",
    "name": "Laksamana Widagdo"
  },
  {
    "num": 208,
    "file": "208_Lawa.png",
    "name": "Lawa"
  },
  {
    "num": 209,
    "file": "209_Madrim.png",
    "name": "Madrim"
  },
  {
    "num": 210,
    "file": "210_Naga_Tatmala.png",
    "name": "Naga Tatmala"
  },
  {
    "num": 211,
    "file": "211_Lesmana_Mandrakumara.png",
    "name": "Lesmana Mandrakumara"
  },
  {
    "num": 212,
    "file": "212_Mustakaweni.png",
    "name": "Mustakaweni"
  },
  {
    "num": 213,
    "file": "213_Nakula.png",
    "name": "Nakula"
  },
  {
    "num": 214,
    "file": "214_Mahadewa.png",
    "name": "Mahadewa"
  },
  {
    "num": 215,
    "file": "215_Resi_Manumayasa.png",
    "name": "Resi Manumayasa"
  },
  {
    "num": 216,
    "file": "216_Narada.png",
    "name": "Narada"
  },
  {
    "num": 217,
    "file": "217_Matswapati.png",
    "name": "Matswapati"
  },
  {
    "num": 218,
    "file": "218_Prabu_Mandala.png",
    "name": "Prabu Mandala"
  },
  {
    "num": 219,
    "file": "219_Narasoma.png",
    "name": "Narasoma"
  },
  {
    "num": 220,
    "file": "220_Mintaraga.png",
    "name": "Mintaraga"
  },
  {
    "num": 221,
    "file": "221_Naga_Percona.png",
    "name": "Naga Percona"
  },
  {
    "num": 222,
    "file": "222_Nayarana_Jangkah.png",
    "name": "Nayarana Jangkah"
  },
  {
    "num": 223,
    "file": "223_Narayana.png",
    "name": "Narayana"
  },
  {
    "num": 224,
    "file": "224_Pancawala.png",
    "name": "Pancawala"
  },
  {
    "num": 225,
    "file": "225_Parikesit.png",
    "name": "Parikesit"
  },
  {
    "num": 226,
    "file": "226_Niwatakawaca.png",
    "name": "Niwatakawaca"
  },
  {
    "num": 227,
    "file": "227_Pandhu.png",
    "name": "Pandhu"
  },
  {
    "num": 228,
    "file": "228_Petruk.png",
    "name": "Petruk"
  },
  {
    "num": 229,
    "file": "229_Nagagini.png",
    "name": "Nagagini"
  },
  {
    "num": 230,
    "file": "230_Panyarikan.png",
    "name": "Panyarikan"
  },
  {
    "num": 231,
    "file": "231_Prabakesa.png",
    "name": "Prabakesa"
  },
  {
    "num": 232,
    "file": "232_Padmanaba.png",
    "name": "Padmanaba"
  },
  {
    "num": 233,
    "file": "233_Parikenan.png",
    "name": "Parikenan"
  },
  {
    "num": 234,
    "file": "234_Prabakusuma.png",
    "name": "Prabakusuma"
  },
  {
    "num": 235,
    "file": "235_Palasara.png",
    "name": "Palasara"
  },
  {
    "num": 236,
    "file": "236_Parikesit_Ratu.png",
    "name": "Parikesit Ratu"
  },
  {
    "num": 237,
    "file": "237_Prabowo.png",
    "name": "Prabowo"
  },
  {
    "num": 238,
    "file": "238_Pragalba.png",
    "name": "Pragalba"
  },
  {
    "num": 239,
    "file": "239_Priambada.png",
    "name": "Priambada"
  },
  {
    "num": 240,
    "file": "240_Pergiwa.png",
    "name": "Pergiwa"
  },
  {
    "num": 241,
    "file": "241_Pragoto.png",
    "name": "Pragoto"
  },
  {
    "num": 242,
    "file": "242_Puntadewa.png",
    "name": "Puntadewa"
  },
  {
    "num": 243,
    "file": "243_Pergiwati.png",
    "name": "Pergiwati"
  },
  {
    "num": 244,
    "file": "244_Prahasta.png",
    "name": "Prahasta"
  },
  {
    "num": 245,
    "file": "245_Purwaganti.png",
    "name": "Purwaganti"
  },
  {
    "num": 246,
    "file": "246_Pertiwi.png",
    "name": "Pertiwi"
  },
  {
    "num": 247,
    "file": "247_Pratipa.png",
    "name": "Pratipa"
  },
  {
    "num": 248,
    "file": "248_Palupi.png",
    "name": "Palupi"
  },
  {
    "num": 249,
    "file": "249_Prasbini.png",
    "name": "Prasbini"
  },
  {
    "num": 250,
    "file": "250_Premadi.png",
    "name": "Premadi"
  },
  {
    "num": 251,
    "file": "251_Putut_Supawala.png",
    "name": "Putut Supawala"
  },
  {
    "num": 252,
    "file": "252_Purwati.png",
    "name": "Purwati"
  },
  {
    "num": 253,
    "file": "253_R_Harya_Prabu.png",
    "name": "R. Harya Prabu"
  },
  {
    "num": 254,
    "file": "254_Rama.png",
    "name": "Rama"
  },
  {
    "num": 255,
    "file": "255_Ragu.png",
    "name": "Ragu"
  },
  {
    "num": 256,
    "file": "256_Pujawati.png",
    "name": "Pujawati"
  },
  {
    "num": 257,
    "file": "257_Ramawijaya.png",
    "name": "Ramawijaya"
  },
  {
    "num": 258,
    "file": "258_Rasawulan.png",
    "name": "Rasawulan"
  },
  {
    "num": 259,
    "file": "259_Putut_Jantaka.png",
    "name": "Putut Jantaka"
  },
  {
    "num": 260,
    "file": "260_Rekatatama.png",
    "name": "Rekatatama"
  },
  {
    "num": 261,
    "file": "261_Rukmini.png",
    "name": "Rukmini"
  },
  {
    "num": 262,
    "file": "262_Rajamala.png",
    "name": "Rajamala"
  },
  {
    "num": 263,
    "file": "263_Resi_Anggira.png",
    "name": "Resi Anggira"
  },
  {
    "num": 264,
    "file": "264_Rupakenca.png",
    "name": "Rupakenca"
  },
  {
    "num": 265,
    "file": "265_Ramabargawa.png",
    "name": "Ramabargawa"
  },
  {
    "num": 266,
    "file": "266_Rukmakala.png",
    "name": "Rukmakala"
  },
  {
    "num": 267,
    "file": "267_Rarasati.png",
    "name": "Rarasati"
  },
  {
    "num": 268,
    "file": "268_Ramaprawa.png",
    "name": "Ramaprawa"
  },
  {
    "num": 269,
    "file": "269_Sakutrem.png",
    "name": "Sakutrem"
  },
  {
    "num": 270,
    "file": "270_Sasikirana.png",
    "name": "Sasikirana"
  },
  {
    "num": 271,
    "file": "271_Sadana.png",
    "name": "Sadana"
  },
  {
    "num": 272,
    "file": "272_Sambu.png",
    "name": "Sambu"
  },
  {
    "num": 273,
    "file": "273_Sasra_Hadimurti.png",
    "name": "Sasra Hadimurti"
  },
  {
    "num": 274,
    "file": "274_Samba.png",
    "name": "Samba"
  },
  {
    "num": 275,
    "file": "275_Sanga_Sanga.png",
    "name": "Sanga Sanga"
  },
  {
    "num": 276,
    "file": "276_Sasrawindu.png",
    "name": "Sasrawindu"
  },
  {
    "num": 277,
    "file": "277_Sadewa.png",
    "name": "Sadewa"
  },
  {
    "num": 278,
    "file": "278_Sangkan_Turunan.png",
    "name": "Sangkan Turunan"
  },
  {
    "num": 279,
    "file": "279_Sekipu.png",
    "name": "Sekipu"
  },
  {
    "num": 280,
    "file": "280_Sakri.png",
    "name": "Sakri"
  },
  {
    "num": 281,
    "file": "281_Sarpakenaka.png",
    "name": "Sarpakenaka"
  },
  {
    "num": 282,
    "file": "282_Semar_Kyai_Inten.png",
    "name": "Semar Kyai Inten"
  },
  {
    "num": 283,
    "file": "283_Sengkuni.png",
    "name": "Sengkuni"
  },
  {
    "num": 284,
    "file": "284_Setyaka.png",
    "name": "Setyaka"
  },
  {
    "num": 285,
    "file": "285_Sri_Mahapunggung.png",
    "name": "Sri Mahapunggung"
  },
  {
    "num": 286,
    "file": "286_Sentanu.png",
    "name": "Sentanu"
  },
  {
    "num": 287,
    "file": "287_Setyaki.png",
    "name": "Setyaki"
  },
  {
    "num": 288,
    "file": "288_Subali_Resi.png",
    "name": "Subali Resi"
  },
  {
    "num": 289,
    "file": "289_Seta.png",
    "name": "Seta"
  },
  {
    "num": 290,
    "file": "290_Singa_Singa.png",
    "name": "Singa Singa"
  },
  {
    "num": 291,
    "file": "291_Sucitra.png",
    "name": "Sucitra"
  },
  {
    "num": 292,
    "file": "292_Setiajit.png",
    "name": "Setiajit"
  },
  {
    "num": 293,
    "file": "293_Sisupala.png",
    "name": "Sisupala"
  },
  {
    "num": 294,
    "file": "294_Sugriwa.png",
    "name": "Sugriwa"
  },
  {
    "num": 295,
    "file": "295_Setiawan.png",
    "name": "Setiawan"
  },
  {
    "num": 296,
    "file": "296_Sitija.png",
    "name": "Sitija"
  },
  {
    "num": 297,
    "file": "297_Sumali.png",
    "name": "Sumali"
  },
  {
    "num": 298,
    "file": "298_Sumantri.png",
    "name": "Sumantri"
  },
  {
    "num": 299,
    "file": "299_Sembodro.png",
    "name": "Sembodro"
  },
  {
    "num": 300,
    "file": "300_Dewi_Sri.png",
    "name": "Dewi Sri"
  },
  {
    "num": 301,
    "file": "301_Sumitra.png",
    "name": "Sumitra"
  },
  {
    "num": 302,
    "file": "302_Sinta.png",
    "name": "Sinta"
  },
  {
    "num": 303,
    "file": "303_Bambang_Srigati.png",
    "name": "Bambang Srigati"
  },
  {
    "num": 304,
    "file": "304_Suratimatra.png",
    "name": "Suratimatra"
  },
  {
    "num": 305,
    "file": "305_Siti_Sundari.png",
    "name": "Siti Sundari"
  },
  {
    "num": 306,
    "file": "306_Begawan_Sukanda.png",
    "name": "Begawan Sukanda"
  },
  {
    "num": 307,
    "file": "307_Surya.png",
    "name": "Surya"
  },
  {
    "num": 308,
    "file": "308_Srikandhi.png",
    "name": "Srikandhi"
  },
  {
    "num": 309,
    "file": "309_Sarawita.png",
    "name": "Sarawita"
  },
  {
    "num": 310,
    "file": "310_Suryatmaja.png",
    "name": "Suryatmaja"
  },
  {
    "num": 311,
    "file": "311_Setyaboma.png",
    "name": "Setyaboma"
  },
  {
    "num": 312,
    "file": "312_Tambak_Ganggeng.png",
    "name": "Tambak Ganggeng"
  },
  {
    "num": 313,
    "file": "313_Tangsen.png",
    "name": "Tangsen"
  },
  {
    "num": 314,
    "file": "314_Trikaya.png",
    "name": "Trikaya"
  },
  {
    "num": 315,
    "file": "315_Udawa.png",
    "name": "Udawa"
  },
  {
    "num": 316,
    "file": "316_Tembara.png",
    "name": "Tembara"
  },
  {
    "num": 317,
    "file": "317_Trinetra.png",
    "name": "Trinetra"
  },
  {
    "num": 318,
    "file": "318_Ugrasena.png",
    "name": "Ugrasena"
  },
  {
    "num": 319,
    "file": "319_Togog.png",
    "name": "Togog"
  },
  {
    "num": 320,
    "file": "320_Trisirah.png",
    "name": "Trisirah"
  },
  {
    "num": 321,
    "file": "321_Utara.png",
    "name": "Utara"
  },
  {
    "num": 322,
    "file": "322_Trembaka.png",
    "name": "Trembaka"
  },
  {
    "num": 323,
    "file": "323_Tuhuyata.png",
    "name": "Tuhuyata"
  },
  {
    "num": 324,
    "file": "324_Uma.png",
    "name": "Uma"
  },
  {
    "num": 325,
    "file": "325_Trigangga.png",
    "name": "Trigangga"
  },
  {
    "num": 326,
    "file": "326_Trijata.png",
    "name": "Trijata"
  },
  {
    "num": 327,
    "file": "327_Utari.png",
    "name": "Utari"
  },
  {
    "num": 328,
    "file": "328_Wasista.png",
    "name": "Wasista"
  },
  {
    "num": 329,
    "file": "329_Wisnu.png",
    "name": "Wisnu"
  },
  {
    "num": 330,
    "file": "330_Wahmuka.png",
    "name": "Wahmuka"
  },
  {
    "num": 331,
    "file": "331_Watu_Gunung.png",
    "name": "Watu Gunung"
  },
  {
    "num": 332,
    "file": "332_Wisrawa.png",
    "name": "Wisrawa"
  },
  {
    "num": 333,
    "file": "333_R_Wrekodara.png",
    "name": "R. Wrekodara"
  },
  {
    "num": 334,
    "file": "334_Wibisana.png",
    "name": "Wibisana"
  },
  {
    "num": 335,
    "file": "335_Wratsangka.png",
    "name": "Wratsangka"
  },
  {
    "num": 336,
    "file": "336_Yamadipati.png",
    "name": "Yamadipati"
  },
  {
    "num": 337,
    "file": "337_Wisanggeni.png",
    "name": "Wisanggeni"
  },
  {
    "num": 338,
    "file": "338_Wilutama.png",
    "name": "Wilutama"
  },
  {
    "num": 339,
    "file": "339_Yamawidura.png",
    "name": "Yamawidura"
  },
  {
    "num": 340,
    "file": "340_Wisata.png",
    "name": "Wisata"
  },
  {
    "num": 341,
    "file": "341_Yudhistira.png",
    "name": "Yudhistira"
  }
];

  const PAGE_SIZE = 16;
  let currentPage = 1;
  let currentQuery = "";
  let filteredList = WAYANG_DATA.slice();

  const gridContainer = document.getElementById("wayangGridContainer");
  const paginationEl = document.getElementById("wayangPagination");
  const pageStatusEl = document.getElementById("wayangPageStatus");
  const searchInput = document.getElementById("wayangSearchInput");
  const masterFrame = document.getElementById("wayangMasterFrame");

  function escapeHTML(str) {
    if (!str) return "";
    return String(str).replace(/[&<>"']/g, function (m) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "\x27": "&#39;"
      }[m] || m;
    });
  }

  function renderGrid() {
    if (!gridContainer) return;

    const totalItems = filteredList.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, totalItems);
    const pageItems = filteredList.slice(startIndex, endIndex);

    if (pageStatusEl) {
      if (totalItems === 0) {
        pageStatusEl.textContent = "Tokoh wayang tidak ditemukan";
      } else {
        pageStatusEl.textContent = `Menampilkan ${startIndex + 1}–${endIndex} dari ${totalItems} Tokoh (Halaman ${currentPage} / ${totalPages})`;
      }
    }

    if (pageItems.length === 0) {
      gridContainer.innerHTML = `
        <div class="wayang-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 48px 16px;">
          <div style="font-size: 2.8rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--text-heading); margin-bottom: 6px;">Tokoh Tidak Ditemukan</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Tidak ada tokoh wayang yang cocok dengan kata kunci "<strong>${escapeHTML(currentQuery)}</strong>".</p>
        </div>
      `;
    } else {
      let cardsHtml = "";
      pageItems.forEach(function (item) {
        cardsHtml += `
          <div class="wayang-item-card" id="wayang-char-${item.num}">
            <div class="wayang-item-stage">
              <img src="assets/wayang/${encodeURIComponent(item.file)}" alt="${escapeHTML(item.name)} (Katalog Dias Oktri Raka Setiadi)" title="${escapeHTML(item.name)} - Sumber: Katalog Dias Oktri Raka Setiadi" class="wayang-item-img" loading="lazy">
            </div>
            <h4 class="wayang-item-name">${escapeHTML(item.name)}</h4>
          </div>
        `;
      });
      gridContainer.innerHTML = cardsHtml;
    }

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!paginationEl) return;
    if (totalPages <= 1) {
      paginationEl.innerHTML = "";
      return;
    }

    let html = "";

    html += `
      <button class="wayang-page-btn wayang-page-prev" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""} aria-label="Halaman Sebelumnya">
        ◀ Sebelumnya
      </button>
    `;

    const maxVisiblePages = 7;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      if (currentPage <= 4) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage >= totalPages - 3) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    if (startPage > 1) {
      html += `<button class="wayang-page-btn" data-page="1">1</button>`;
      if (startPage > 2) {
        html += `<span class="wayang-page-ellipsis">…</span>`;
      }
    }

    for (let p = startPage; p <= endPage; p++) {
      html += `
        <button class="wayang-page-btn ${p === currentPage ? "active" : ""}" data-page="${p}" aria-label="Halaman ${p}" ${p === currentPage ? "aria-current=\"page\"" : ""}>
          ${p}
        </button>
      `;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        html += `<span class="wayang-page-ellipsis">…</span>`;
      }
      html += `<button class="wayang-page-btn" data-page="${totalPages}">${totalPages}</button>`;
    }

    html += `
      <button class="wayang-page-btn wayang-page-next" data-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""} aria-label="Halaman Selanjutnya">
        Berikutnya ▶
      </button>
    `;

    paginationEl.innerHTML = html;
  }

  function goToPage(page, smoothScroll = true) {
    const totalPages = Math.max(1, Math.ceil(filteredList.length / PAGE_SIZE));
    const targetPage = Math.max(1, Math.min(page, totalPages));
    if (targetPage !== currentPage) {
      currentPage = targetPage;
      renderGrid();
      if (smoothScroll && masterFrame) {
        masterFrame.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function handleSearch(query) {
    currentQuery = (query || "").trim().toLowerCase();
    if (!currentQuery) {
      filteredList = WAYANG_DATA.slice();
    } else {
      filteredList = WAYANG_DATA.filter(function (item) {
        return item.name.toLowerCase().includes(currentQuery);
      });
    }
    currentPage = 1;
    renderGrid();
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      handleSearch(e.target.value);
    });
  }

  if (paginationEl) {
    paginationEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".wayang-page-btn");
      if (btn && !btn.disabled) {
        const page = parseInt(btn.dataset.page, 10);
        if (!isNaN(page)) {
          goToPage(page);
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderGrid);
  } else {
    renderGrid();
  }
})();
