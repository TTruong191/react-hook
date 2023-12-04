import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";

const useFetch = (url, isMovie) => {
    const [data, setData] = useState([]);
    const [dataMv, setDataMv] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        // setTimeout(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get(url);
                // console.log('>>>>>>>>>>>', res.data.results);
                // Xử lý dữ liệu response ở đây
                let dataMv = res && res.data.results ? res.data.results : [];
                let data = res && res.data ? res.data : [];

                // format date to string
                if (dataMv.results && dataMv.results.length > 0 && isMovie === true) {
                    dataMv.map(item => {
                        item.release_date = moment(item.release_date).format('DD/MM/YYYY')
                        return item;
                    })
                }
                setDataMv(dataMv)
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
        setTimeout(() => {
            fetchData();
        },1000)
       
        // }, 1000)
    }, [url]);
    
    return {dataMv, data, isError, isLoading}
}

export default useFetch;