import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import axios from "axios";

const Movie = () => {
    const {data: dataMovie, isError, isLoading} = useFetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')


    return (
        <>
            <h3>List Movies</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Origin_name</th>
                        <th>Year</th>
                    </tr>
                </thead>

                <tbody>
                    {isLoading === false && dataMovie && dataMovie.length > 0 &&
                        dataMovie.map(item => {
                            return (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.origin_name}</td>
                                    <td>{item.year}</td>

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