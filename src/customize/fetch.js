import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        // setTimeout(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get(url);
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
                setData(data)
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
    return {data, isError, isLoading}
}

export default useFetch;