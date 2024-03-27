// (home) 처럼 소괄호 폴더로 router group생성 가능. url은 생성하지 않는다

import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// server component에서의 data fetching -> network탭에서 노출이 되지않아 API KEY보안에 좋다
// useState, useEffect 등 hydration이 필요하지 않아 metadata를 사용 가능하며 간단하다

const getMovies = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
