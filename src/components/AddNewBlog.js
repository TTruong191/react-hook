import './Blog.scss';
import { useState } from 'react';
import axios from 'axios';

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleAddBlog = async (e) => {
        e.preventDefault();
        if (!title) {
            alert('empty title ')
            return;
        }
        if (!content) {
            alert('empty content ')
            return;
        }
        let data = {
            title: title,
            body: content,
            userId: 1
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddBlog(newBlog);
        }

    }
    return (
        <div className="add-new-blog">
            <div className="add-text">Add New Blog</div>
            <form className="form-add-blog" onSubmit={handleAddBlog}>

                <div className="inputs-data">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="inputs-data">
                    <label>Content:</label>
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />

                </div>
                {/* <button className='btn-submit'onClick={handleAddBlog}>Sunmit</button> */}
                <button className='btn-submit' type='submit'>Sunmit</button>
            </form>
        </div>
    )
}

export default AddNewBlog;