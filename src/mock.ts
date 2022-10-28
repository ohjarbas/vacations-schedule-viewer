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
      name: "José Moreira",
      handler: "@cusspvz",
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
      name: "Diogo Rego",
      handler: "@drego",
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
      name: "Diana Rita",
      handler: "@dianarita",
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
      name: "Nelson Novais",
      handler: "@nnovais",
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
      name: "Francisco Sales",
      handler: "@fsales",
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
      name: "André Makrilou",
      handler: "@makrilou",
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