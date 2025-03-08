import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "先秦两汉",
    href: "/pre-qin-and-han",
    items: [
      {
        title: "儒家",
        href: "/ru-jia",
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
              }
            ]
          }
        ]
      }
    ],
  },
  {
    title: "汉代之后",
    href: "/post-han",
  },
]
