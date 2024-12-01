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
