// productItems.js
const IMGURL = {
    img_122997: process.env.REACT_APP_IMG_122997,
    img_768848: process.env.REACT_APP_IMG_768848,
    img_552913: process.env.REACT_APP_IMG_552913,
    img_1045738: process.env.REACT_APP_IMG_1045738,
    img_927850: process.env.REACT_APP_IMG_927850,
    img_661347: process.env.REACT_APP_IMG_661347,
    img_870160: process.env.REACT_APP_IMG_870160,
    img_995684: process.env.REACT_APP_IMG_995684,
    img_1051973: process.env.REACT_APP_IMG_1051973,
    img_132527: process.env.REACT_APP_IMG_132527,
    img_652192: process.env.REACT_APP_IMG_652192,
    img_363559: process.env.REACT_APP_IMG_363559,
}

export const productItems = [
    {
        item_no: 122997,
        item_name: "클래식 런치박스",
        detail_image_url: IMGURL.img_122997,
        price: 75000,
        score: 200,
    },
    {
        item_no: 768848,
        item_name: "진공 텀블러/보틀 473ml",
        detail_image_url: IMGURL.img_768848,
        price: 42000,
        score: 300,
    },
    {
        item_no: 552913,
        item_name: "미니 조명",
        detail_image_url: IMGURL.img_552913,
        price: 240000,
        score: 350,
    },
    {
        item_no: 1045738,
        item_name: "클래식 포어 오버 커피 드리퍼 세트",
        detail_image_url: IMGURL.img_1045738,
        price: 65000,
        score: 120,
        availableCoupon: false,
    },
    {
        item_no: 927850,
        item_name: "핸드폰 투명케이스",
        detail_image_url: IMGURL.img_927850,
        price: 23000,
        score: 640,
    },
    {
        item_no: 661347,
        item_name: "카드 포켓 에어쿠션 투명 폰 케이스(아이폰 갤럭시 핸드폰)",
        detail_image_url: IMGURL.img_661347,
        price: 37600,
        score: 200,
    },
    {
        item_no: 870160,
        item_name: "3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전",
        detail_image_url: IMGURL.img_870160,
        price: 39900,
        score: 190,
        availableCoupon: false,
    },
    {
        item_no: 995684,
        item_name: "FRAME CASE Air Bumper",
        detail_image_url: IMGURL.img_995684,
        price: 25000,
        score: 453,
    },
    {
        item_no: 1051973,
        item_name: "탈부착 핸드폰 스마트톡 그립톡",
        detail_image_url: IMGURL.img_1051973,
        price: 12900,
        score: 300,
        availableCoupon: false,
    },
    {
        item_no: 132527,
        item_name: "클래식 진공 캠프머그 473미리",
        detail_image_url: IMGURL.img_132527,
        price: 44000,
        score: 300,
    },
    {
        item_no: 652192,
        item_name: "실리콘 핸드폰 핑거스트랩",
        detail_image_url: IMGURL.img_652192,
        price: 5900,
        score: 200,
    },
    {
        item_no: 363559,
        item_name: "WOOD GLOVES",
        detail_image_url: IMGURL.img_363559,
        price: 3000,
        score: 220,
    },
]

// coupons.js
export const coupons = [
    {
        type: "rate",
        title: "10% 할인 쿠폰",
        discountRate: 10,
    },
    {
        type: "amount",
        title: "10,000원 할인 쿠폰",
        discountAmount: 10000,
    },
]
