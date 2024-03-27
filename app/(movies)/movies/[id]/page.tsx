// dynamic routing
// 기본적으로 props로 params와 searchParams를 받는다.
import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

interface IParams {
  params: { id: string };
}

// generateMetadata는 dynamic router 페이지에서 사용 가능한 함수입니다. 동일하게 props로 params와 searchParams를 받습니다
export async function generateMetadata({ params: { id } }: IParams) {
  // next14에서는 요청 후 캐싱되기 때문에 MovieInfo에서 나쁘게 볼 수는 없습니다.
  const movie = await getMovieInfo(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
