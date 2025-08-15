// src/data/dummyBooks.js
import CoverRaumanen from "../../assets/dumImages/raumanen.jpg"; 
import CoverKhudr from "../../assets/dumImages/khudr.jpg"; 
import CoverSukreni from "../../assets/dumImages/sukreni.jpg";
import CoverLaskarPelangi from "../../assets/dumImages/laskarpelangi.jpg";
import CoverPulang from "../../assets/dumImages/pulang.jpeg";
import CoverBumi from "../../assets/dumImages/bumi.jpeg";
import CoverNegeri5Menara from "../../assets/dumImages/negeri5menara.jpeg";
import CoverAmba from "../../assets/dumImages/amba.jpeg";
import CoverCantikItuLuka from "../../assets/dumImages/cantikituluka.jpg";


export const dummyBooks = [
  {
    id: 1,
    title: "Raumanen",
    author: "Marianne Katoppo",
    publisher: "Lontar Foundation",
    publicationDate: "2018",
    pages: 104,
    isbn: "9786029144468",
    description:
      "Novel pemenang penghargaan ini menceritakan kisah cinta antara Monang, pria Batak yang tampan namun hidupnya tak menentu, dan Raumanen, perempuan Minahasa yang cerdas namun mudah terluka dalam urusan cinta.",
    cover: CoverRaumanen, 
    readUrl: "https://books.google.com/books?vid=ISBN9786029144468",
  },
  {
    id: 2,
    title: "Khudr",
    author: "Azri Zakkiyah",
    publisher: "Interlude",
    publicationDate: "2021",
    pages: 488,
    isbn: "9786237676997",
    description:
      "Novel fiksi Indonesia dengan rating luar biasa di Goodreads (4.6/5) yang menunjukkan penerimaan positif dari pembaca.",
    cover: CoverKhudr,
    readUrl: "https://books.google.com/books?vid=ISBN9786237676997",
  },
  {
    id: 3,
    title: "The Rape of Sukreni",
    author: "Anak Agung Pandji Tisna",
    publisher: "Lontar Foundation",
    publicationDate: "2012",
    pages: 108,
    isbn: "9786029144055",
    description:
      "Karya klasik kontemporer Indonesia yang menggambarkan tema Balinese-Hindu tentang karma dan dampak modernisasi.",
    cover: CoverSukreni,
    readUrl: "https://books.google.com/books?vid=ISBN9786029144055",
  },
  {
    id: 4,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    publisher: "Bentang Pustaka",
    publicationDate: "2005",
    pages: 529,
    isbn: "9789793062792",
    description:
      "Kisah inspiratif tentang perjuangan anak-anak Belitong meraih pendidikan di tengah keterbatasan.",
    cover: CoverLaskarPelangi,
    readUrl: "https://books.google.com/books?vid=ISBN9789793062792",
  },
  {
    id: 5,
    title: "Bumi",
    author: "Tere Liye",
    publisher: "Gramedia Pustaka Utama",
    publicationDate: "2014",
    pages: 440,
    isbn: "9786020301125",
    description:
      "Petualangan fantasi Raib, Seli, dan Ali menjelajahi dunia paralel penuh misteri.",
    cover: CoverBumi,
    readUrl: "https://books.google.com/books?vid=ISBN9786020301125",
  },
  {
    id: 6,
    title: "Pulang",
    author: "Tere Liye",
    publisher: "Republika",
    publicationDate: "2015",
    pages: 400,
    isbn: "9786020822125",
    description:
      "Kisah epik keluarga penguasa bayangan di dunia mafia Indonesia.",
    cover: CoverPulang,
    readUrl: "https://books.google.com/books?vid=ISBN9786020822125",
  },
  {
    id: 7,
    title: "Cantik Itu Luka",
    author: "Eka Kurniawan",
    publisher: "Gramedia Pustaka Utama",
    publicationDate: "2002",
    pages: 536,
    isbn: "9789792209495",
    description:
      "Novel magis-realistik tentang Dewi Ayu dan keluarganya yang penuh tragedi dan humor gelap.",
    cover: CoverCantikItuLuka,
    readUrl: "https://books.google.com/books?vid=ISBN9789792209495",
  },
  {
    id: 8,
    title: "Amba",
    author: "Laksmi Pamuntjak",
    publisher: "Gramedia Pustaka Utama",
    publicationDate: "2012",
    pages: 480,
    isbn: "9789792285505",
    description:
      "Cinta terlarang di tengah gejolak politik Indonesia, terinspirasi dari kisah Mahabharata.",
    cover: CoverAmba,
    readUrl: "https://books.google.com/books?vid=ISBN9789792285505",
  },
  {
    id: 9,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    publisher: "Gramedia Pustaka Utama",
    publicationDate: "2009",
    pages: 424,
    isbn: "9789792248616",
    description:
      "Perjalanan enam santri dengan mimpi besar, di bawah semboyan 'Man Jadda Wajada'.",
    cover: CoverNegeri5Menara,
    readUrl: "https://books.google.com/books?vid=ISBN9789792248616",
  },
];
