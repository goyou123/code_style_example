개발자 : 고은찬

> 해당 프로젝트는 장바구니 기능이 있는 간단한 쇼핑몰 프로젝트이며, 저의 평소 코딩 스타일을 대략적으로 파악하실 수 있습니다!
> ReadMe와 코드의 주석들을 참고 부탁드립니다!

## 1. 프로젝트 실행

```
npm install
npm start
```

`npm install` : package.json에 정의된 모듈 다운 <br>
`npm start` : 로컬 환경에서 실행

<br><br>

## 2. 폴더 구조

> 페이지 수가 적은 미니 프로젝트라 코드의 양과 컴포넌트들간의 재활용성이 적어 별도의 디자인패턴은 사용하지 않았습니다.

```
├─components
│  ├─CartItemBox
│  ├─CountNotify
│  ├─Paging
│  ├─PayBox
│  ├─ProductCard
│  └─QuantityCounter
├─hooks
├─layout
│  ├─DefaultLayout
│  └─NavigationBar
├─lib
├─pages
│  ├─CartPage
│  └─ProductPage
├─routes
├─store
│  └─slices
├─styles
└─types

```

`components` : 페이지를 구성하는 컴포넌트들 , 공통으로 사용하는 컴포넌트들 모음 폴더 <br>
`hooks` : 커스텀 훅 모음 폴더 <br>
`layout` : 헤더 네비게이션 바, 공통 레이아웃 설정 폴더 <br>
`lib` : 더미데이터, 유틸함수 모음 폴더 <br>
`pages` : 페이지 컴포넌트 폴더 <br>
`routes` : 라우팅을 관리하는 폴더 <br>
`store` : zustand 상태 관리를 위한 폴더 <br>
`style` : css 관련 폴더 <br>
`types` : 공용 타입 지정 폴더 <br>

<br><br>

## 3. 기술 스택

-   빌드 : create-react-app
-   언어 : Typescript
-   CSS : Styled-Component
-   상태관리 : Zustand

<br><br>

## 4. 페이지 별 기능 설명

> 편의를 위해 API는 더미데이터로 대체하였습니다.

### [상품목록 페이지]

1. 데이터를 불러와 5개씩 페이지네이션 합니다.
2. 장바구니에 상품이 담겨있는지 여부에 따라 담기/빼기 버튼이 있습니다.
    - 장바구니에는 최대 3개의 상품만 들어갑니다.
    - 장바구니에 아이템을 추가하면 네비게이션 바에 장바구니에 들어있는 상품의 갯수가 표시됩니다.

### [장바구니 페이지]

1. 결제에 포함할 상품을 체크박스로 선택할 수 있습니다.
2. 체크한 상품들을 한번에 장바구니에서 뺄 수 있습니다.
    - 전체선택/해제 가능합니다.
3. 상품의 수량변경이 가능합니다.

    - 최소 1개의 수량이 지정됩니다.
    - 플러스,마이너스 버튼으로 수량변경 가능합니다.
    - 직접 입력값으로도 변경가능합니다.
        - 숫자만 입력 가능합니다.
    - 수량 변경에 따른 각 상품의 총합을 보여줍니다.

4. 쿠폰적용 후 총 결제금액을 확인할 수 있습니다.

    - 체크된 상품들만 볼 수 있습니다.
    - 체크된 상품들 중 쿠폰적용이 가능한 상품들만 쿠폰을 적용하여 계산합니다.

5. 상품수량이 무한정 늘어나는 것을 막기 위해 임의로 최대 입력값을 100으로 설정하였습니다. 추후에는 데이터에 물품의 재고 수량 데이터를 추가하여 각 상품마다 최대 입력값을 재고수량으로 넣을 것 같습니다.
6. 유저들이 헷갈리지 않도록 체크된 상품들이 모두 쿠폰 적용불가 상품이면 할인쿠폰선택이 초기화되고 어떤 쿠폰도 선택할 수 없도록 하였습니다.
7. 장바구니에 아무것도 없으면 결제하는 박스 자체가 보이지 않습니다.
8. 유저들의 편의를 위해 페이지에 다시 들어왔을때 이전에 변경했던 상품의 수량을 그대로 보여줍니다.

## 5. 문제 해결 전략

### 5-1) 상태관리를 zustand로 한 이유

> 기존에는 redux로 상태관리를 해왔었는데, 새로운 기술스택인 zustand를 보고 조사해본 후 결정한 이유들입니다.

1. 보일러 플레이트 코드 감소 & 가벼움
   Redux와 비교했을 때 압도적으로 적은 크기를 가지고 있고, 작은 크기에 걸맞게 간단하게 설정하여 사용할 수 있었습니다. 설정이 간단한 만큼 보일러플레이트 코드도 거의 없어 더 가독성 좋은 코드를 짤 수 있다고 판단했습니다.

2. 해당 프로젝트에는 API연동이 없음
   더미데이터로 API를 대체했기에 딱 상태관리 용도로만 zustand를 활용할 수 있었습니다.
   그래서 기본적인 부분들만 활용하면 되므로 학습 난이도도 적당하다고 판단하였습니다.

3. redux-devTool
   기존에 사용하던 익숙한 devTool을 활용할 수 있어 선택하였습니다.
   <br>

### 5-2) zustand 활용

1.  확장성을 고려한 slice 형태의 store
    처음에는 하나의 store에 장바구니 관련 모든 로직을 넣어 사용했지만, 추후 확장성을 고려하여 slice의 형태의 작은 store을 만들고 slice들을 하나의 큰 store로 묶어서 사용하는 형태로 변경하였습니다.

2.  immer를 사용하여 불변성 관리
    zustand 내부에 immer를 사용하여 손쉽게 새로운 객체를 만들고 수정하는 형태로 불변성을 유지시켰습니다.
    <br>

### 5-3) style 관리

> styled-component를 활용하여 css값들을 객체화하여 사용하였고, 추후 다크모드/라이트모드를 손쉽게 적용할 수 있도록 만들었습니다.(다크모드 적용은 X) 또한 자주 사용하는 CSS코드도 함수화하여 재활용하였습니다.

1. theme.ts에서 값들 선언
2. 자주 사용하는 CSS 묶음 예시

>     export  const  flexCenterAlign = css`
>     	display: flex;
>     	align-items:center;
>     	justify-content: center;
>
>     `

3. 컴포넌트에서 사용

>      import  styled, { css } from  "styled-components"
>
>     	import { flexCenterAlign } from  "styles/OftenStyle"
>
>     	export  const  CountNotifyDiv = styled.div`
>     	${({ theme }) => {
>     	const { colors } = theme
>     	return  css`
>     		height: 21px;
>     		width: 20px;
>     		color: ${colors.white};
>     		${flexCenterAlign}
>
>     	`
>
>     	}}
>
>     	`

---

<br>

### 5-4) 장바구니 페이지 - 아이템 선택 로직

1. 구현 방법
    1. 개별 선택 시 해당 itemID를 state 배열에 추가
    2. 전체 선택 시 장바구니에 있는 모든 아이템들의 id를 state 배열에 추가
    3. 해당 state 배열로 UI 관리
2. 확장성을 고려하여 커스텀 훅으로 변경
   처음에는 장바구니 페이지 안에 로직을 짰지만 여러개의 체크박스를 핸들링하는 기능은 추후 다른곳에서도 사용될 수 있다고 판단하여 해당 기능을 커스텀 훅으로 변경하였습니다. 변경하고 나니 관심사가 분리되어 재사용성이 높아지고 코드가 더욱 명료해졌습니다.

### 5-5) 장바구니 추가,삭제 로직

1. 장바구니에 추가될 때 데이터 타입에는 없는 quantity 속성을 추가하여 저장하였습니다. 해당 값을 이용하여 아이템별 수량을 체크하고, 페이지 이동 후에도 이전에 입력했던 수량이 남아있을 수 있도록 구현하였습니다.

2. 삭제시 파라미터로 아이템들의 ID 배열을 받아 여러개가 삭제 될 수 있도록 구현하였습니다.
   <br>

### 5-6) 장바구니 수량 변경 로직

1. 수량 변경시 입력 UI 추가
   유저의 편의를 위해 입력값으로도 수량을 변경할 수 있도록 구현하였습니다.
   이때 숫자만 입력가능하게 하고, 복붙으로 다른 텍스트를 넣어도 숫자들만 인식하도록 구현하였습니다. (최솟값 1)
2. 컴포넌트화
   추후 상품의 상세페이지가 생긴다면, 그 페이지에서 기능이 재활용될 수 있을 것이라 생각해 해당 기능을 장바구니 컴포넌트에서 분리하여 사용하였습니다.
   <br>

### 5-7) 쿠폰 적용 로직

1. 구현 방법
    1. 선택한 아이템들 중 쿠폰적용가능한 상품들의 총액을 구한뒤, 최종 할인 금액을 구해줍니다.
    2. 최종 할인금액이 변경될때마다 최종 결제금액을 계산하여 보여줍니다.
2. 유저들이 헷갈리지 않도록 쿠폰적용불가상품들만 선택했을 경우 쿠폰의 상태를 초기화하고 , 쿠폰을 선택할 수 없도록 구현하였습니다.
3. 총 금액이 10000원 이하 상품들에는 -10000원 쿠폰이 적용되지 않도록 예외처리 하였습니다.
   <br><br><br>
