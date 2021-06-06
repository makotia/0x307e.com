export const jobTypes = {
  fullTime: "フルタイム",
  freelance: "フリーランス"
}

export type JobType = keyof typeof jobTypes

export type Job = {
  name: string
  type: JobType
  content: string
  start: string
  end?: string
}

export const jobs: Job[] = [
  {
    name: "高専ベンチャー株式会社",
    type: "freelance",
    content:
      "高等専門学校生時代にフリーランスとして参画し、新規事業立ち上げを行いました。\n海外向け SNS の開発・ローンチから運営、家庭教師マッチングサービスの開発を担当しました。",
    start: "2017/12",
    end: "2019/08"
  },
  {
    name: "合同会社Milkamo",
    type: "freelance",
    content:
      "高等専門学校生時代から現在までフリーランスとして参画し、受託案件の開発を行いました。\n障害者支援施設向け社内管理システム、宴会場予約システム、地方にフォーカスした観光・飲食予約サイト等の要件定義・開発・運用を担当しました。",
    start: "2019/08"
  },
  {
    name: "株式会社V Chuu",
    type: "freelance",
    content:
      "高等専門学校退学後、フリーランスとして参画し、新規事業・受託案件の開発を行いました。\nTwitter ハックをするような全く新しい投げ銭サービスと、小学生向け大規模オンライン授業システムの開発を担当しました。",
    start: "2021/02",
    end: "2021/04"
  },
  {
    name: "株式会社Handii",
    type: "fullTime",
    content: "paild という法人カードのクラウド発行・管理サービスの開発を担当しています。\n現職です。",
    start: "2021/05",
  },
]
