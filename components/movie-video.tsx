import { API_URL } from "../app/(home)/page";

const getMovieVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return await response.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const movieInfo = await getMovieVideos(id);

  return <div>{JSON.stringify(movieInfo)}</div>;
}
