import { v4 as uuidv4 } from "uuid";

const INITIAL_LIST_ITEMS = [
  {
    id: uuidv4(),
    text: "Buy some laktosefreie milk (3.5%)",
    checked: false,
    dateCreated: "",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: uuidv4(),
    text: "Choose sneakers for the evening",
    checked: false,
    dateCreated: "",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: uuidv4(),
    text: "Select vinyls for a party",
    checked: false,
    dateCreated: "",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: uuidv4(),
    text: "Print merch for Berliners.Media",
    checked: false,
    dateCreated: "",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: uuidv4(),
    text: "Make some photos for album cover",
    checked: false,
    dateCreated: "",
    dateLastModified: "",
    dateCompleted: ""
  }
];

const FAKE_LIST_ITEMS = [
  {
    id: "60d46e3a11c730455290fb65",
    text: "Perform on Stage",
    checked: false,
    dateCreated: "2018-08-28T09:24:19 -02:00",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: "60d46e3a60841d993a6f5c82",
    text: "Read a Poem at the Poets Night",
    checked: false,
    dateCreated: "2020-10-02T10:01:05 -02:00",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: "60d46e3a7fdaf5bee260d0f2",
    text: "Work in a Bar",
    checked: true,
    dateCreated: "2018-06-17T04:39:49 -02:00",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: "60d46e3a803a6890dba6cd83",
    text: "Own a White Kitten",
    checked: false,
    dateCreated: "2021-06-06T01:39:25 -02:00",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: "60d46e3a40bf43876a88b6d3",
    text: "Get Drunk on the Beach",
    checked: true,
    dateCreated: "2021-05-10T03:39:11 -02:00",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: "60d46e3a62aa5987d90ffe2a",
    text: "Learn How to Drive",
    checked: false,
    dateCreated: "2017-12-20T01:34:30 -01:00",
    dateLastModified: "",
    dateCompleted: ""
  },
  {
    id: "60d46e3a20cca3633b6122c0",
    text: "Hold a Baby Monkey",
    checked: false,
    dateCreated: "2015-07-23T07:39:21 -02:00",
    dateLastModified: "",
    dateCompleted: ""
  }
];

const REVERSED_LIST_ITEMS = INITIAL_LIST_ITEMS.reverse();
const RANDOM_LIST_ITEMS = FAKE_LIST_ITEMS.sort(() => Math.random() - 0.5);

export {
  INITIAL_LIST_ITEMS,
  REVERSED_LIST_ITEMS,
  FAKE_LIST_ITEMS,
  RANDOM_LIST_ITEMS
};
