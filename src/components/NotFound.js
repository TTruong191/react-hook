import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate = useNavigate();
    const handleHomePage = () => {
        navigate('/')
    }
    return (
        <>
        <h4>You are currently unable to view this content</h4>
        <h5>This error is often caused by the owner only sharing the content with a small group, changing who can see it, or deleting the content.</h5>
        <button className="btn btn-primary my-2" onClick={handleHomePage}>Go to HomePage</button>
        </>
    )
}

export default NotFound;