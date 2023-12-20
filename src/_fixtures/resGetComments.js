export const resGetComments = {
  result: {
    items: [
      {
        _id: "6581bc0c18a1c83f1605bb12",
        text: "Первый коммент!",
        dateCreate: "2023-12-19T15:51:40.795Z",
        author: {
          profile: { name: "User №1" },
          _id: "65817be05c295a2ff2fcc582",
        },
        parent: { _id: "65817bed5c295a2ff2fcd189", _type: "article" },
        isDeleted: false,
      },
      {
        _id: "6581bc8e18a1c83f1605bb29",
        text: "Второй коммент to User №1 !",
        dateCreate: "2023-12-19T15:53:50.391Z",
        author: {
          profile: { name: "User №2" },
          _id: "65817be05c295a2ff2fcc582",
        },
        parent: { _id: "6581bc0c18a1c83f1605bb12", _type: "article" },
        isDeleted: false,
      },
      {
        _id: "6581bd9f8031fa40017a5c9b",
        text: "Третий коммент!",
        dateCreate: "2023-12-19T15:58:23.925Z",
        author: {
          profile: { name: "User №3" },
          _id: "65817be05c295a2ff2fcc582",
        },
        parent: { _id: "65817bed5c295a2ff2fcd189", _type: "article" },
        isDeleted: false,
      },
      {
        _id: "6581bd9f8031fa40017a5c9c",
        text: "4 коммент to User №5!",
        dateCreate: "2023-12-19T15:59:53.925Z",
        author: {
          profile: { name: "User №4" },
          _id: "65817be05c295a2ff2fcc582",
        },
        parent: { _id: "6581bd9f8031fa40017a5c9d", _type: "article" },
        isDeleted: false,
      },
      {
        _id: "6581bd9f8031fa40017a5c9d",
        text: "5 коммент to User №1!",
        dateCreate: "2023-12-19T15:58:23.925Z",
        author: {
          profile: { name: "User №5" },
          _id: "65817be05c295a2ff2fcc582",
        },
        parent: { _id: "6581bc0c18a1c83f1605bb12", _type: "article" },
        isDeleted: false,
      },
    ],
    count: 5,
  },
};
