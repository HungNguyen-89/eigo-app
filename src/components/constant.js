export const routes = [
  {
    name: "Home",
    link: "/",
    subMenu: false,
  },
  {
    name: "Grammar",
    link: "/ngu-phap",
    subMenu: false,
    // subRoutes: [
    //   {
    //     name: "Verb",
    //     link: "/vocabulary-translate-sentences/verb",
    //   },
    //   {
    //     name: "Adverb",
    //     link: "/vocabulary-translate-sentences/adv",
    //   },
    //   {
    //     name: "Phrasal verb",
    //     link: "/vocabulary-translate-sentences/phrasal",
    //   },
    // ],
  },
  {
    name: "Vocabulary (Translate sentences)",
    link: "/",
    subMenu: true,
    subRoutes: [
      {
        name: "Verb",
        link: "/vocabulary-translate-sentences/verb",
      },
      {
        name: "Adverb",
        link: "/vocabulary-translate-sentences/adv",
      },
      {
        name: "Phrasal verb",
        link: "/vocabulary-translate-sentences/phrasal",
      },
    ],
  },
  {
    name: "Flashcard",
    link: "/flashcards",
    subMenu: true,
    subRoutes: [
      {
        name: "Verb",
        link: "/flashcards/verb",
      },
      // {
      //   name: "Adjective",
      //   link: "/flashcards/adj",
      // },
      {
        name: "Adverb",
        link: "/flashcards/adv",
      },
      {
        name: "Phrasal verb",
        link: "/flashcards/phrasal",
      },
      // {
      //   name: "Phrasal verbs",
      //   link: "/flashcards/phrasal-verbs",
      // },
      // {
      //   name: "Conjunction",
      //   link: "/flashcards/conjunction",
      // },
      // {
      //   name: "Prepositions",
      //   link: "/flashcards/prepositions",
      // },
      // {
      //   name: "Determiners",
      //   link: "/flashcards/determiners",
      // },
      // {
      //   name: "Noun",
      //   link: "/flashcards/noun",
      // },
      // {
      //   name: "Subject",
      //   link: "/flashcards/subject",
      // },
    ],
  },
  // {
  //   name: "Grammar",
  //   link: "/grammar",
  //   subMenu: false,
  //   subRoutes: [
  //     {
  //       name: "N1",
  //       link: "/de-thi/de-thi-n1",
  //     },
  //     {
  //       name: "N2",
  //       link: "/de-thi/de-thi-n2",
  //     },
  //     {
  //       name: "N3",
  //       link: "/de-thi/de-thi-n3",
  //     },
  //     {
  //       name: "N4",
  //       link: "/de-thi/de-thi-n4",
  //     },
  //     {
  //       name: "N5",
  //       link: "/de-thi/de-thi-n5",
  //     },
  //     {
  //       name: "Tổng hợp",
  //       link: "/de-thi/de-thi-tong-hop",
  //     },
  //   ],
  // },
  // ,
  // {
  //   name: "Media",
  //   link: "/media",
  //   subMenu: false,
  //   // subRoutes: [
  //   //   {
  //   //     name: "Video",
  //   //     link: "/media/video",
  //   //   },
  //   //   {
  //   //     name: "Audio",
  //   //     link: "/media/audio",
  //   //   },
  //   // ],
  // },
  // {
  //   name: "Games",
  //   link: "/games",
  //   subMenu: false,
  //   // subRoutes: [
  //   //   {
  //   //     name: "Nhìn Kanji đoán chữ",
  //   //     link: "/games/nhin-kanji-doan-chu",
  //   //   },
  //   //   {
  //   //     name: "Nhìn hình đoán chữ",
  //   //     link: "/games/nhin-hinh-doan-chu",
  //   //   },
  //   // ],
  // },
  // {
  //   name: "Blog",
  //   link: "/blog",
  //   subMenu: false,
  // },
];
