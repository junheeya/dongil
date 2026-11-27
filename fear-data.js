// ===== 돈길 공포탐욕 — 매일 이 파일만 바꿔서 업로드하세요 =====
// value: 0~100 (0 극단적 공포 ~ 100 극단적 탐욕)
window.FEAR_DATA = {
  updated: "2026-11-27 19:26",            // 업데이트 시각 (한국시간)

  us: {
    value: 18,                            // CNN 공포탐욕지수 (cnn.com/markets/fear-and-greed 에서 확인)
    prev: null,                           // 전일 값 (모르면 null)
    source: "CNN Business Fear & Greed Index",
    link: "https://edition.cnn.com/markets/fear-and-greed",
    parts: [                              // CNN 7개 세부 지표 (0~100)
      ["시장 모멘텀", 19], ["변동성 (VIX)", 52], ["풋/콜 비율", 16], ["정크본드 수요", 20],
      ["안전자산 수요", 15], ["주가 강도", 19], ["주가 폭", 17]
    ]
  },

  kr: {
    value: 76,                            // 돈길 국장 심리지수 (돈길 자체 기준)
    prev: null,
    source: "돈길 국장 심리지수 (자체 기준)",
    parts: [
      ["KOSPI 추세", 76], ["종합 심리", 69], ["변동성 (VKOSPI 34.4)", 34]
    ]
  },

  news: [                                 // 돈길 오늘의 3줄 뉴스 (직접 요약한 문장, 비어 있으면 카드 숨김)
    // { tag: "미장", text: "엔비디아 실적 발표 후 반도체주 변동성 확대" },
  ],

  quotes: [                               // 장 마감 기준 숫자 (KOSPI·KOSDAQ만, VIX는 실시간 위젯)
    { name: "KOSPI",  value: "4,915.68", chg: 4.34 },
    { name: "KOSDAQ", value: "708.99",   chg: 8.13 }
  ]
};
