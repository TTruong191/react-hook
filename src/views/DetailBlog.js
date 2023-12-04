import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Blog.scss';

const DetailBlog = () => {
    let nagigate = useNavigate();
    let { id } = useParams();
    const handleBackData = () => {
        nagigate('/blog');
    }

    const { data: dataBlogDetail, isError, isLoading }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

    
    return (
        <>
          
            <div><span onClick={handleBackData} style={{ color: "green" }}>&lt;-- Back</span></div>
            <div className="blogdetail">
                {dataBlogDetail &&
                    <>
                        <div className="title">Bog ID: {id} {isLoading === true ? 'loading data...' :dataBlogDetail.title}</div>
                        <div className="content">{dataBlogDetail.body}</div>
                    </>
                }
            </div>
        </>
    )
}

export default DetailBlog;