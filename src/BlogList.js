
// import { useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
const BlogList = ({ homeBlogs, deleteHandler }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props)
    // useEffect(deleteHandler)

    return (

        <div className="blog-list container">

            {homeBlogs.length > 0 && <h2 className="title ms-5"><img src="https://img.icons8.com/officexs/32/000000/show-all-views.png" alt='ff' /> All blogs  </h2>}
            {homeBlogs.length === 0 && <Link className="nav-link fs-1 title" to="/create"   > ➕Create Blog </Link>}
            {homeBlogs.map(blog => (
                <div className="card blog  m-5" key={blog.id}>
                    <h2 className="my-color text-capitalize">Title: {blog.title}</h2>
                    <p>by: {blog.author}</p>
                    <div className="row">
                        <div className="col-6">
                            {/* <button onClick={() => deleteHandler(blog.id)} className="btn btn-danger w-auto ">🗑️</button> */}
                            {blog && <Link to={`/blogs/${blog.id}`}>
                                <button className="btn btn-info text-light w-auto ms-2">
                                    <img src="https://img.icons8.com/flat-round/64/000000/info.png" width="20px" alt='icon' /></button>
                            </Link>}
                            {/* {blog && <button onClick={() => deleteHandler(blog.id)} className="btn btn-danger w-auto ">🗑️</button>} */}
                        </div>
                        <div className="col-6">

                        </div>

                    </div>

                </div>
            ))}
        </div>



    );
}

export default BlogList;
