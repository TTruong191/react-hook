import { useParams } from "react-router-dom";

const DetailBlog = () => {
    const {id} = useParams();
    return (
        <h2>Detail Blog ID = {id}</h2>
    )
}

export default DetailBlog;