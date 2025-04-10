import { useQuery } from "@apollo/client/react/hooks";
import { gql } from "graphql-tag";

const movies = gql`
query MovieById($id: ID!) {
  movieById(_id: $id) {
    title
    plot
    fullplot
    genres
    countries
  }
}
`;

function renderCard(movie) {
    return (<div key={movie._id} style={{margin: '1rem 0.25rem'}}>
        <div>Id: {movie._id}</div>
        <div>Title: {movie.title}</div>
        <div>Plot: {movie.plot}</div>
        <div>Full Plot: {movie.fullplot}</div>
        <div>Genres: {movie.genres?.join(',')}</div>
        <div>Countries: {movie.countries?.join(',')}</div>
    </div>);
}

export default function MovieList () {
    const {loading, data, error} = useQuery(movies, {
        variables: {
            id: "573a1390f29313caabcd4135"
        }
    });
    return (
        <div>
            { error && <>{JSON.stringify(error)}</>}
            {loading ? <>Loading movies...</> : data?.movies?.map(renderCard)}
            { data?.movieById && <>{renderCard(data.movieById)}</> }
        </div>
    );
}