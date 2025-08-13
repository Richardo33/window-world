// src/data/dummyBooks.js
import CoverRaumanen from "../../assets/dumImages/raumanen.jpg";
import CoverKhudr from "../../assets/dumImages/khudr.jpg";
import CoverSukreni from "../../assets/dumImages/sukreni.jpg";

export const dummyBooks = [
  {
    id: 1,
    title: "Raumanen",
    author: "Marianne Katoppo",
    publisher: "Lontar Foundation",
    publicationDate: "2018",
    pages: 104,
    isbn: "9786029144468",
    description: "Novel pemenang penghargaan ini menceritakan kisah cinta antara Monang, pria Batak yang tampan namun jalan hidupnya tak menentu, dan Raumanen, perempuan Minahasa yang cerdas namun mudah terluka dalam urusan cinta. Latar konfliknya menyentuh isu hubungan antar etnis dan agama di Indonesia modern.",
    cover: CoverRaumanen,
    readUrl: "https://books.google.com/books?vid=ISBN9786029144468"
  },
  {
    id: 2,
    title: "Khudr",
    author: "Azri Zakkiyah",
    publisher: "Interlude",
    publicationDate: "2021",
    pages: 488,
    isbn: "9786237676997",
    description: "Khudr adalah novel fiksi Indonesia dengan 488 halaman, diterbitkan pada tahun 2021 oleh Interlude. Meskipun sinopsis lengkap sulit ditemukan, novel ini mendapatkan rating luar biasa di Goodreads (4.6/5), menunjukkan penerimaan positif dari pembaca.",
    cover: CoverKhudr,
    readUrl: "https://books.google.com/books?vid=ISBN9786237676997"
  },
  {
    id: 3,
    title: "The Rape of Sukreni",
    author: "Anak Agung Pandji Tisna",
    publisher: "Lontar Foundation",
    publicationDate: "2012",
    pages: 108,
    isbn: "9786029144055",
    description: "Ditranslasikan oleh George Quinn, novel ini merupakan karya klasik kontemporer Indonesia yang menggambarkan tema Balinese-Hindu tentang karma serta dampak modernisasi dan perdagangan terhadap masyarakat Bali. Ceritanya dipenuhi konflik, tragedi, dan kritik sosial yang kuat.",
    cover: CoverSukreni,
    readUrl: "https://books.google.com/books?vid=ISBN9786029144055"
  }
];
