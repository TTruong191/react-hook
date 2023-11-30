
import moment from "moment";
import useFetch from "../customize/fetch";


const Movie = () => {

    // lấy ngày hiện tại
    // const today = new Date(new Date().setHours(0, 0, 0, 0));
    // const priorDate = moment().subtract(30, 'days');


    const { data: dataMovie, isError, isLoading }
    // = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb58f7104aedff7b352a18678d149c30&page=1?from=${priorDate.toISOString()}&to=${today.toISOString()}`)
        = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=eb58f7104aedff7b352a18678d149c30&page=1')


    return (
        <>
            <p>List Movies</p>
            <table>
                <thead>
                    <tr>
                        <th>Original_title</th>
                        <th>Overview</th>
                        <th>Vote_average</th>
                        <th>Release_date</th>
                    </tr>
                </thead>

                <tbody>

                    {isLoading === false && dataMovie && dataMovie.length > 0 &&
                        dataMovie.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.original_title}</td>
                                    <td>{item.overview}</td>
                                    <td>{item.vote_average}</td>
                                    <td>{item.release_date}</td>

                                </tr>
                            )
                        })
                    }


                </tbody>

            </table>
            {isLoading === true &&
                <p >Loading......</p>
            }

            {isError === true &&
                <p >Something wrong......</p>
            }
        </>
    )
}

export default Movie;