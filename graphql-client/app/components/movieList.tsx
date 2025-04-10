import { useQuery } from "@apollo/client/react/hooks";
import { gql } from "graphql-tag";

const movies = gql`
query Movies {
  movies {
    _id
    fullplot
    genres
    countries
    plot
    title
  }
}
`;


export default function MovieList () {
    const {loading, data} = useQuery(movies);
    return (
        <div>
            {loading ? <>Loading movies...</> : data.movies.map((movie) => (
                <div key={movie._id} style={{margin: '1rem 0.25rem'}}>
                    <div>Title: {movie.title}</div>
                    <div>Plot: {movie.plot}</div>
                    <div>Full Plot: {movie.fullplot}</div>
                    <div>Genres: {movie.genres?.join(',')}</div>
                    <div>Countries: {movie.countries?.join(',')}</div>
                </div>
                ))}
        </div>
    );
}