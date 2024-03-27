import { API_URL } from "../app/(home)/page";

const getMovieInfo = async (id: string) => {
  // throw '에러 발생';
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovieInfo(id);

  return <div>{JSON.stringify(movieInfo)}</div>;
}
