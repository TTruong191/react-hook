import { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
    const [dataMovie, setDataMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
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
                setLoading(false)
            } catch (error) {
                // Xử lý lỗi ở đây
                console.log(error);
            }
        };
        fetchData();
    }, 3000)
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
                    {loading === false  && dataMovie && dataMovie.length > 0 &&
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
            {loading === true && 
                    <p >Loading......</p>
                    }
        </>
    )
}

export default Movie;