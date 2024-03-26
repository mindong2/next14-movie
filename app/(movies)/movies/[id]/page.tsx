// dynamic routing
// 기본적으로 props로 params와 searchParams를 받는다.
export default function Page({ params: { id } }: { params: { id: string } }) {
  return <h1>dynamic routing id: {id}</h1>;
}
