// productItems.js

// 이미지는 더미이미지로 대체합니다.
const IMGURL = "https://via.placeholder.com/300"

export const productItems = [
    {
        item_no: 122997,
        item_name: "클래식 런치박스",
        detail_image_url: IMGURL,
        price: 75000,
        score: 200,
    },
    {
        item_no: 768848,
        item_name: "진공 텀블러/보틀 473ml",
        detail_image_url: IMGURL,
        price: 42000,
        score: 300,
    },
    {
        item_no: 552913,
        item_name: "미니 조명",
        detail_image_url: IMGURL,
        price: 240000,
        score: 350,
    },
    {
        item_no: 1045738,
        item_name: "클래식 포어 오버 커피 드리퍼 세트",
        detail_image_url: IMGURL,
        price: 65000,
        score: 120,
        availableCoupon: false,
    },
    {
        item_no: 927850,
        item_name: "핸드폰 투명케이스",
        detail_image_url: IMGURL,
        price: 23000,
        score: 640,
    },
    {
        item_no: 661347,
        item_name: "카드 포켓 에어쿠션 투명 폰 케이스(아이폰 갤럭시 핸드폰)",
        detail_image_url: IMGURL,
        price: 37600,
        score: 200,
    },
    {
        item_no: 870160,
        item_name: "3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전",
        detail_image_url: IMGURL,
        price: 39900,
        score: 190,
        availableCoupon: false,
    },
    {
        item_no: 995684,
        item_name: "FRAME CASE Air Bumper",
        detail_image_url: IMGURL,
        price: 25000,
        score: 453,
    },
    {
        item_no: 1051973,
        item_name: "탈부착 핸드폰 스마트톡 그립톡",
        detail_image_url: IMGURL,
        price: 12900,
        score: 300,
        availableCoupon: false,
    },
    {
        item_no: 132527,
        item_name: "클래식 진공 캠프머그 473미리",
        detail_image_url: IMGURL,
        price: 44000,
        score: 300,
    },
    {
        item_no: 652192,
        item_name: "실리콘 핸드폰 핑거스트랩",
        detail_image_url: IMGURL,
        price: 5900,
        score: 200,
    },
    {
        item_no: 363559,
        item_name: "WOOD GLOVES",
        detail_image_url: IMGURL,
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
