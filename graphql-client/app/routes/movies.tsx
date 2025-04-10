import type { Route } from "./+types/home";
import MovieList from "~/components/movieList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Movies Page" },
    { name: "description", content: "Welcome to mFlix!" },
  ];
}

export default function Home() {
  return <div>
      <h1>Hello World!</h1>
      <MovieList />
    </div>;
}
