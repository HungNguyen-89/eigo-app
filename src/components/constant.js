export const routes = [
  {
    name: "Home",
    link: "/",
    subMenu: false,
  },
  // {
  //   name: "Grammar",
  //   link: "/ngu-phap",
  //   subMenu: false,
  // },
  {
    name: "Vocabulary",
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
        name: "Adjective",
        link: "/vocabulary-translate-sentences/adj",
      },
      {
        name: "Phrasal verb",
        link: "/vocabulary-translate-sentences/phrasal",
      },
      ,
      {
        name: "Business",
        link: "/vocabulary-translate-sentences/business",
      },
      // {
      //   name: "Kanji",
      //   link: "/vocabulary-translate-sentences/kanji",
      // },
    ],
  },
  {
    name: "Grammar",
    link: "/grammar/grammar",
    subMenu: false,
  },
  {
    name: "Kanji",
    link: "/kanji/kanji",
    subMenu: false,
  },
  // {
  //   name: "Flashcard",
  //   link: "/flashcards",
  //   subMenu: true,
  //   subRoutes: [
  //     {
  //       name: "Verb",
  //       link: "/flashcards/verb",
  //     },

  //     {
  //       name: "Adverb",
  //       link: "/flashcards/adv",
  //     },
  //     {
  //       name: "Phrasal verb",
  //       link: "/flashcards/phrasal",
  //     },
  //   ],
  // },
];
