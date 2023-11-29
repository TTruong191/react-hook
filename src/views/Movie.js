import { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
    const [dataMovie, setDataMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        // setTimeout(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1');
                // console.log('>>>>>>>>>>>', res.data.items);
                // Xử lý dữ liệu response ở đây
                let data = res && res.data.items ? res.data.items : [];
                //// format date to string
                // if (data && data.length > 0) {
                //     data.map(item => {
                //         item.date = moment(item.date).format('DD/MM/YYYY')
                //         return item;
                //     })
                // }
                setDataMovie(data)
                setIsLoading(false)
                setIsError(false)
            } catch (error) {               
                setIsError(true)
                setIsLoading(false)
                // Xử lý lỗi ở đây
                // console.log(error);
                // alert(error.message);
            }
        };
        fetchData();
        // }, 1000)
    }, []);


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