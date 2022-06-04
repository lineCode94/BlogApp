import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';



//we create this component for user when need to get details about the blog with specific id
const BlogDetails = () => {
    const { id } = useParams()
    const his = useHistory();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id)

    let deleteHandler = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            his.push('/')
        })
    }
    return (
        <div className="container blog-details">
            <h2 className="title"><img src="https://img.icons8.com/ios/50/000000/book-reading.png" alt="zeko" /> Blog Details:</h2>
            {error && <div className="fs-1 text-center bg-danger container text-light mt-5 font-monospace">{error}</div>}
            {isLoading && <div className="fs-1 text-center  ">Loading🔃 <span className="text-danger">...</span></div>}
            {blog && (
                <article>
                    <h3 className="mt-5"> {blog.title}</h3>
                    <p className="my-color mt-5 fw-bold">written by {blog.author}</p>
                    <p className="lead mt-5">{blog.body}</p>
                    <button onClick={deleteHandler} className="btn btn-danger w-auto ">🗑️</button>
                </article>)
            }


        </div>



    );
}

export default BlogDetails;