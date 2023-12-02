import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link } from "react-router-dom";

const Blog = () => {
    const { data: dataBlogs, isError, isLoading }
        = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 12)
        // console.log('>>>>>>>>>>check data', newData)
    }

    return (
        <div className="blogs-container">
            {isLoading === false && newData && newData.length > 0 &&
                newData.map(item => {
                    return (
                        <div className="blog" key={item.id}>
                            <div className="title" >Title: {item.title}</div>
                            <div className="content">Contet: {item.body}</div>
                            <button className="btdetail">
                                <Link to={`/blog/${item.id}`}>Detail</Link>
                            </button>
                        </div>
                    )
                })}
            {isLoading === true &&
                <p>Loading data.....</p>
            }
        </div>

    )
}

export default Blog;