// 'use client' 기본적으로 server components는 hydrate (기본 HTML에 React를 init하는 과정 -> event등 더 interactive하게 됨)를 하지 않지만 이 키워드가 있다면 hydration을 하게 된다.
// 선택적으로 js를 불러올 수 있기 때문에 모든 페이지에서 js를 사용자가 불러오지 않아도 되기 때문에 효과적이다

export default function AboutUs() {
  return (
    <>
      <h1>About us</h1>
    </>
  );
}
