export const routes = [
  {
    name: "Home",
    link: "/",
    subMenu: false,
  },
  {
    name: "Vocabulary",
    // link: "",
    subMenu: true,
    subRoutes: [
      {
        name: "Translate sentences",
        link: "/translate",
      },
      {
        name: "Describe the pictures",
        link: "/describe",
      },
    ],
  },
  {
    name: "Flashcard",
    link: "/flashcards",
    subMenu: false,
    // subRoutes: [
    //   {
    //     name: "Image",
    //     link: "/ngu-phap/N1",
    //   },
    //   {
    //     name: "N2",
    //     link: "/ngu-phap/N2",
    //   },
    //   {
    //     name: "N3",
    //     link: "/ngu-phap/N3",
    //   },
    //   {
    //     name: "N4",
    //     link: "/ngu-phap/N4",
    //   },
    //   {
    //     name: "N5",
    //     link: "/ngu-phap/N5",
    //   },
    //   {
    //     name: "JLPTにない文型",
    //     link: "/ngu-phap/mau-cau-ngoai-JLPT",
    //   },
    // ],
  },
  {
    name: "Grammar",
    link: "/grammar",
    subMenu: false,
    subRoutes: [
      {
        name: "N1",
        link: "/de-thi/de-thi-n1",
      },
      {
        name: "N2",
        link: "/de-thi/de-thi-n2",
      },
      {
        name: "N3",
        link: "/de-thi/de-thi-n3",
      },
      {
        name: "N4",
        link: "/de-thi/de-thi-n4",
      },
      {
        name: "N5",
        link: "/de-thi/de-thi-n5",
      },
      {
        name: "Tổng hợp",
        link: "/de-thi/de-thi-tong-hop",
      },
    ],
  },
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
