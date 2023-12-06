import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link } from "react-router-dom";
import { BsAlignMiddle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let navigate = useNavigate();
    const handleAddBlog = () => {
        navigate('/add-blog');
    }
    const { data: dataBlogs, isError, isLoading }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 12)
        // console.log('>>>>>>>>>>check data', newData)
    }

    return (
        <>
            <>
                <Button variant="primary" onClick={handleShow} style={{ marginTop: 10 }}>
                Add new blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog />
                    </Modal.Body>
                </Modal>
            </>

            {/* <div className="add-blog">
                <button className="btn-add-blog" onClick={handleAddBlog}><BsAlignMiddle />Add new blog</button>
            </div> */}
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
        </>
    )
}

export default Blog;