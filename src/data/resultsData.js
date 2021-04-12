const test_data = {
  case1: {
    page0: [0],
    page1: [1, 5],
    page2: [4],
    page3: [1],
    page4: [3, 4],
    page5: [2],
    page6: [1, 3, 4],
    page7: [2],
    page8: [3],
  },
  case2: {
    page0: [0],
    page1: [2],
    page2: [2],
    page3: [1],
    page4: [1, 3],
    page5: [4],
    page6: [1, 2, 3],
    page7: [2],
    page8: [3],
  },
  case3: {
    page0: [0],
    page1: [4, 5, 6],
    page2: [2],
    page3: [1, 2],
    page4: [1, 2, 3],
    page5: [2],
    page6: [4],
    page7: [1, 3, 4],
    page8: [2],
  },
  case4: {
    page0: [0],
    page1: [3, 5],
    page2: [5, 6],
    page3: [1, 2],
    page4: [2],
    page5: [2, 4],
    page6: [4],
    page7: [3, 4],
    page8: [2],
  },
  case5: {
    page0: [0],
    page1: [1, 5],
    page2: [3],
    page3: [1],
    page4: [2],
    page5: [3],
    page6: [2],
    page7: [1, 2],
    page8: [3],
  },
  case6: {
    page0: [0],
    page1: [4, 5],
    page2: [3],
    page3: [1],
    page4: [1],
    page5: [3],
    page6: [2],
    page7: [1, 2],
    page8: [3],
  },
  case7: {
    page0: [0],
    page1: [4],
    page2: [1, 2],
    page3: [1],
    page4: [1, 2],
    page5: [3],
    page6: [3],
    page7: [12],
    page8: [1],
  },
  case8: {
    page0: [0],
    page1: [3],
    page2: [4],
    page3: [2],
    page4: [3, 4],
    page5: [2],
    page6: [2, 3, 4],
    page7: [3, 4],
    page8: [1],
  },
  case9: {
    page0: [0],
    page1: [1, 2],
    page2: [1, 2],
    page3: [2],
    page4: [1],
    page5: [2],
    page6: [1, 2, 3],
    page7: [2, 3],
    page8: [1],
  },
  case10: {
    page0: [0],
    page1: [4, 6],
    page2: [4, 6],
    page3: [2],
    page4: [3, 4],
    page5: [1],
    page6: [1, 2, 3, 4],
    page7: [2],
    page8: [1],
  },
  case11: {
    page0: [0],
    page1: [1, 4],
    page2: [1],
    page3: [1],
    page4: [1, 2, 3, 4],
    page5: [1],
    page6: [1, 2, 3],
    page7: [1, 3],
    page8: [2, 4],
  },
  case12: {
    page0: [0],

    page1: [3],
    page2: [2],
    page3: [2],
    page4: [1, 3, 4],
    page5: [4],
    page6: [1, 4],
    page7: [3, 4],
    page8: [2],
  },
  case13: {
    page0: [0],
    page1: [2],
    page2: [5],
    page3: [2],
    page4: [1, 3, 4],
    page5: [2, 4],
    page6: [1, 4],
    page7: [1, 3],
    page8: [2, 4],
  },
  case14: {
    page0: [0],
    page1: [1],
    page2: [1, 2],
    page3: [2],
    page4: [1, 2, 3, 4],
    page5: [3],
    page6: [1, 4],
    page7: [1, 2],
    page8: [1, 3],
  },
  case15: {
    page0: [0],
    page1: [4],
    page2: [1, 2],
    page3: [1],
    page4: [1, 3, 4],
    page5: [3],
    page6: [1, 2, 3],
    page7: [2],
    page8: [4],
  },
  case16: {
    page0: [0],
    page1: [4],
    page2: [1, 2],
    page3: [2],
    page4: [1, 2],
    page5: [3],
    page6: [1, 2, 3],
    page7: [2],
    page8: [3],
  },
  case17: {
    page0: [0],
    page1: [4],
    page2: [1],
    page3: [2],
    page4: [1, 2],
    page5: [3],
    page6: [1, 2],
    page7: [1, 2],
    page8: [3],
  },
  case18: {
    page0: [0],
    page1: [1],
    page2: [5],
    page3: [1],
    page4: [1, 2, 3, 4],
    page5: [1],
    page6: [2],
    page7: [1],
    page8: [1],
  },
  case19: {
    page0: [0],
    page1: [2, 3],
    page2: [4, 6],
    page3: [1],
    page4: [3, 4],
    page5: [2, 4],
    page6: [2, 4],
    page7: [1, 3, 4],
    page8: [2],
  },
  case20: {
    page0: [0],
    page1: [2, 3],
    page2: [4, 5, 6],
    page3: [1, 2],
    page4: [3, 4],
    page5: [2, 4],
    page6: [1, 2, 4],
    page7: [1, 4],
    page8: [2, 4],
  },
};

const perfume_data = {
  1: {
    NUM: "case1",
    TYPE: "오드퍼퓸",
    BRAND: "샤넬",
    NAME: "블루드샤넬오드빠르펭",
    TOP: "머스크",
    MIDDLE: "머스크,아로마틱",
    BASE: "우디",
    ETC: "3040남성",
  },
  2: {
    NUM: "case2",
    TYPE: "오드퍼퓸",
    BRAND: "끌로에",
    NAME: "오드퍼퓸",
    TOP: "플로랄(깨끗한 장미향)",
    MIDDLE: "플로랄,비누",
    BASE: "머스크",
    ETC: "2030여성,달달함",
  },
  3: {
    NUM: "case3",
    TYPE: "오드뚜왈렛",
    BRAND: "딥디크",
    NAME: "오 로즈 오 드 뚜왈렛",
    TOP: "베르가모,블랙커런트,리치",
    MIDDLE: "센티폴리아 장미\n터키장미, 제라늄, 헤디온",
    BASE: "머스크,세더",
    ETC: "3040여성, 매혹적, 플로럴, 은은함,장미향",
  },
  4: {
    NUM: "case4",
    TYPE: "오드뚜왈렛",
    BRAND: "알뤼르",
    NAME: "옴므스포츠 오드 뚜왈렛 스프레이",
    TOP: "알데히드\n(맑고 투명,활기찬 녹색바다의 향기)",
    MIDDLE: "따뜻,부드러움\n(화이트머스크,앰버)",
    BASE: "우디향, 블랙페퍼",
    ETC: "후레쉬함,센슈얼함,우디,스파이시 -> 독특한 우아함,고급스러운 남성상",
  },
  5: {
    NUM: "case5",
    TYPE: "오드뚜왈렛",
    BRAND: "안나수이",
    NAME: "럭키위시 오드 뚜왈렛",
    TOP: "프로즌레몬,쥬시 탠저린, 레드포멜로",
    MIDDLE: "프리지아,오렌지플라워\n썬라이즈 오키드",
    BASE: "프레시 머스크, 크리미 샌달우드,\n앰버",
    ETC: "즐거움,사랑,행운,시원한 여름 바다 느낌,시트러스",
  },
  6: {
    NUM: "case6",
    TYPE: "오드뚜왈렛",
    BRAND: "페라리",
    NAME: "라이트에센스오드뚜왈렛",
    TOP: "캘리포니아 레몬, 그린애플,리치",
    MIDDLE: "프리지아,오렌지플라워,오렌지블러썸",
    BASE: "티크 우드, 앰버,베티버, 시더우드",
    ETC: "깨끗한 후레시함, 밝은 싱그러움,남성,여름,대중적",
  },
  7: {
    NUM: "case7",
    TYPE: "오드퍼퓸",
    BRAND: "랑방",
    NAME: "에끌라 드 아르페쥬 오드 퍼퓸",
    TOP: "플로럴(복숭아),파우더리,상큼함",
    MIDDLE: "",
    BASE: "포근한 느낌",
    ETC: "10대 후반, 20대 극초반, 매우 대중적",
  },
  8: {
    NUM: "case8",
    TYPE: "오드코롱",
    BRAND: "조말론",
    NAME: "블랙베리 앤 베이 코롱",
    TOP: "블랙베리",
    MIDDLE: "",
    BASE: "우디",
    ETC: "가을겨울, 중성적",
  },
  9: {
    NUM: "case9",
    TYPE: "오드퍼퓸",
    BRAND: "바이레도",
    NAME: "라튤립",
    TOP: "후리지아",
    MIDDLE: "튤립",
    BASE: "우디",
    ETC: "봄, 활기넘치고 매력적인 플로럴 계열,아카시아껌냄새",
  },
  10: {
    NUM: "case10",
    TYPE: "오드뚜왈렛",
    BRAND: "cK",
    NAME: "비 오드뚜왈렛",
    TOP: "베르가모,만다린,라벤더",
    MIDDLE: "스파이시,복숭아",
    BASE: "샌달우드",
    ETC: "프레시 오리엔탈 우디계열, 유니섹스",
  },
  11: {
    NUM: "case11",
    TYPE: "오드코롱",
    BRAND: "조말론",
    NAME: "잉글리시 페어 앤 프리지아 코롱",
    TOP: "킹 윌리엄 페어",
    MIDDLE: "프리지아",
    BASE: "파츌리",
    ETC: "은은,신선,감미로운, 유니섹스,배향",
  },
  12: {
    NUM: "case12",
    TYPE: "오드퍼퓸",
    BRAND: "딥디크",
    NAME: "롬브르 단 로 오드퍼퓸",
    TOP: "불가리안 장미",
    MIDDLE: "블랙커런트",
    BASE: "엠버",
    ETC: "야생장미향, 유니섹스",
  },
  13: {
    NUM: "case13",
    TYPE: "오드코롱",
    BRAND: "산타마리아노밸리",
    NAME: "아쿠아 디 콜로니아[프리지아]",
    TOP: "",
    MIDDLE: "",
    BASE: "",
    ETC: "유니섹스+여성, 신비,미지의 매력, 비누향, 머스크+플로럴",
  },
  14: {
    NUM: "case14",
    TYPE: "오드퍼퓸",
    BRAND: "랑방",
    NAME: "모던 프리세스 오드 퍼퓸",
    TOP: "핑크 레이디 애플, 레드 커런트",
    MIDDLE: "자스민, 프리지마",
    BASE: "바닐라 오키드, 머스크",
    ETC: "청초, 수수, 러블리, 은은함",
  },
  15: {
    NUM: "case15",
    TYPE: "오드뚜왈렛",
    BRAND: "구찌",
    NAME: "플로라 바이 구찌 아름다운 가르데니아 오드뚜왈렛",
    TOP: "레드베리,페어",
    MIDDLE: "가르데니아,프렌지파니",
    BASE: "파출리",
    ETC:
      "2030여성 매우 대중적, 매그놀리아-봄 가을 겨울(부드럽고 풍부한 향) / 만다린 : 봄,여름,가을 (상큼한 과일,꽃) ",
  },
  16: {
    NUM: "case16",
    TYPE: "오드뚜왈렛",
    BRAND: "마크제이콥스",
    NAME: "데이지드림EDT",
    TOP: "블랙베리,자몽,배즙",
    MIDDLE: "",
    BASE: "",
    ETC: "20대 여성, 상큼달달시원,여름",
  },
  17: {
    NUM: "case17",
    TYPE: "오드퍼퓸",
    BRAND: "프레쉬",
    NAME: "헤르페르데스",
    TOP: "",
    MIDDLE: "",
    BASE: "",
    ETC: "자몽향, 봄여름용,상큼",
  },
  18: {
    NUM: "case18",
    TYPE: "오드퍼퓸",
    BRAND: "러비더비",
    NAME: "섬유향수 코튼플라워",
    TOP: "",
    MIDDLE: "",
    BASE: "",
    ETC: "비누향",
  },
  19: {
    NUM: "case19",
    TYPE: "뚜왈렛",
    BRAND: "러쉬",
    NAME: "KARMA",
    TOP: "",
    MIDDLE: "",
    BASE: "",
    ETC: "",
  },
  20: {
    NUM: "case20",
    TYPE: "오드뚜왈렛",
    BRAND: "",
    NAME: "조르지오 아르마니 코드 오 드 뚜왈렛 뿌르 옴므",
    TOP: "",
    MIDDLE: "",
    BASE: "",
    ETC: "",
  },
};

export { test_data, perfume_data };