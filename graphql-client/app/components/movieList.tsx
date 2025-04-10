import { useQuery, useMutation } from "@apollo/client/react/hooks";
import { gql } from "graphql-tag";
import { useEffect, useState } from "react";

const movies = gql`
query MovieById($id: ID!) {
  movieById(_id: $id) {
    _id
    title
    plot
    fullplot
    genres
    countries
    favorite
  }
}
`;

const toggleFavorite = gql`
mutation Mutation($id: ID) {
  toggleFavoriteMovie(id: $id) {
    title
    favorite
    fullplot
    plot
    countries
    genres
    _id
  }
}
`;

function renderCard(movie, toggle) {
    return (<div key={movie._id} style={{margin: '1rem 0.25rem'}}>
        <div>Id: {movie._id}</div>
        <div>Title: {movie.title}</div>
        <div>Plot: {movie.plot}</div>
        <div>Full Plot: {movie.fullplot}</div>
        <div>Favorite: {!!movie.favorite ? 'Yes' : 'No'}</div>
        <div>Genres: {movie.genres?.join(',')}</div>
        <div>Countries: {movie.countries?.join(',')}</div>
        <div><button onClick={() => toggle(movie._id)}>Toggle Favorite</button></div>
    </div>);
}

export default function MovieList () {
    const updateMovies = (cache, { data }) => {
        cache.modify({
            id: data._id,
            fields: {
                movieById(existingMovie = {}) {
                    const updatedMovie = data.toggleFavoriteMovie;
                    console.log('updated movie', updatedMovie);
                    return {...existingMovie, ...updatedMovie};
                }
            }
        });
    };

    const {loading, data, error} = useQuery(movies, {
        variables: {
            id: "573a1390f29313caabcd4135"
        }
    });

    const [doToggle, { data: updated, called, error: mutationError }] = useMutation(toggleFavorite, {
        update: updateMovies
    });

    const [res, setRes] = useState();

    useEffect(() => {
        setRes(data);
    }, [data]);

    useEffect(() => {
        setRes(updated);
    }, [updated]);

    const toggle = (id) => {
        doToggle({
            variables: {
                id
            }
        })
    };

    return (
        <div>
            { error && <>{JSON.stringify(error)}</>}
            { mutationError && <>{JSON.stringify(mutationError)}</>}
            { loading ? <>Loading movies...</> : res?.movies?.map((m) => renderCard(m,toggle))}
            { res?.movieById && <>{renderCard(res.movieById, toggle)}</> }
            { res?.toggleFavoriteMovie && <>{renderCard(res.toggleFavoriteMovie, toggle)}</> }
            { called && <>Updated the movie!</> }
        </div>
    );
}