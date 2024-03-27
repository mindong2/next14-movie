// dynamic routing
// 기본적으로 props로 params와 searchParams를 받는다.

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <h1>dynamic routing id: {id}</h1>
      <Suspense fallback={<h2>loading... info</h2>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h2>loading... videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
