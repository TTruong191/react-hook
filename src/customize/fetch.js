import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        // setTimeout(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get(url);
                // console.log('>>>>>>>>>>>', res.data.results);
                // Xử lý dữ liệu response ở đây
                let data = res && res.data.results ? res.data.results : [];
                // format date to string
                if (data && data.length > 0) {
                    data.map(item => {
                        item.release_date = moment(item.release_date).format('DD/MM/YYYY')
                        return item;
                    })
                }
                setData(data)
                setIsLoading(false)
                setIsError(false)
                
            } 
            catch (error) {               
                setIsError(true)
                setIsLoading(false)
                // Xử lý lỗi ở đây
                // console.log(error);
                // alert(error.message);
            }
        }
        fetchData();
        // }, 1000)
    }, [url]);
    
    return {data, isError, isLoading}
}

export default useFetch;