"use client";

// movies/id에서 error발생 시 보여줄 화면
import Link from "next/link";

export default function MovieErr() {
  return (
    <>
      <h2>에러가 발생했습니다.</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </>
  );
}
