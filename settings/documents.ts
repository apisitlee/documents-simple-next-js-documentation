import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "儒家",
    href: "/ru-jia",
    heading: "先秦两汉",
    items: [
      {
        title: "论语",
        href: "/lun-yu",
        items: [
          {
            title: "学而",
            href: "/xue-er"
          },
          {
            title: "为政",
            href: "/wei-zheng"
          },
          {
            title: "八佾",
            href: "/ba-yi"
          }
        ]
      }
    ]
  },
  {
    title: "汉代之后",
    href: "/post-han",
  },
]
