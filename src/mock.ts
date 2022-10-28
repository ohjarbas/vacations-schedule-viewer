import { IData } from "./data";

export const data: IData = {
  holidays: [
    {
      name: "Natal",
      date: new Date("2022/12/25"),
    }
  ],
  users: [
    {
      name: "James Brown",
      handler: "@jamesbrown",
      vacations: {
        approved: [
          new Date("2022/01/12"),
          new Date("2022/01/13"),
          new Date("2022/01/14"),
          new Date("2022/03/15"),
          new Date("2022/03/16"),
        ],
        requested: [],
      }
    },
    {
      name: "John Doe",
      handler: "@johndoe",
      vacations: {
        approved: [
          new Date("2022/05/12"),
          new Date("2022/05/13"),
          new Date("2022/05/14"),
          new Date("2022/07/01"),
          new Date("2022/07/02"),
        ],
        requested: [],
      }
    },
    {
      name: "Steven Spielberg",
      handler: "@sspielberg",
      vacations: {
        approved: [
          new Date("2022/09/02"),
          new Date("2022/09/03"),
          new Date("2022/09/04"),
          new Date("2022/09/05"),
          new Date("2022/09/06"),
        ],
        requested: [],
      }
    },
    {
      name: "Willson Matthew",
      handler: "@wmatthew",
      vacations: {
        approved: [
          new Date("2022/04/02"),
          new Date("2022/04/03"),
          new Date("2022/04/04"),
          new Date("2022/04/05"),
          new Date("2022/04/06"),
        ],
        requested: [],
      }
    },
    {
      name: "John Cena",
      handler: "@jcena",
      vacations: {
        approved: [
          new Date("2022/12/12"),
          new Date("2022/12/13"),
          new Date("2022/12/14"),
          new Date("2022/12/15"),
          new Date("2022/12/16"),
        ],
        requested: [],
      }
    },
    {
      name: "James Cole",
      handler: "@jcole",
      vacations: {
        approved: [
          new Date("2022/07/12"),
          new Date("2022/07/13"),
          new Date("2022/07/14"),
          new Date("2022/07/07"),
          new Date("2022/06/16"),
        ],
        requested: [
          new Date("2022/12/15"),
          new Date("2022/12/16"),
        ],
      }
    }
  ],

}