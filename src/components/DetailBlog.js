import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Blog.scss';

const DetailBlog = () => {
    let navgigate = useNavigate();
    let { id } = useParams();
    const handleBackData = () => {
        navgigate('/blog');
    }

    const { data: dataBlogDetail, isError, isLoading }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

    
    return (
        <>
          
            <div><span onClick={handleBackData} style={{ color: "rgb(0, 181, 18)" }}>&lt;-- Back</span></div>
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