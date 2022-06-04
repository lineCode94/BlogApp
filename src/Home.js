// import { error } from "jquery";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
import BlogList from "./BlogList";
import useFetch from './useFetch';




const Home = () => {



    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')





    // const [handleDelete,setHandleDelete]= useState(false)

    // const [name, setName] = useState('zeko')
    //delete handle



    let handelDelete = (id) => {

        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('deleted')
        })
    }


    return (
        <div className="home container">
            {error && <div className="fs-1 text-center bg-danger container text-light mt-5  ">{error}</div>}
            {isLoading && <div className="fs-1 text-center  ">Loading🔃 <span className="text-danger">...</span></div>}

            {blogs && <BlogList homeBlogs={blogs} deleteHandler={handelDelete} />}


        </div>

    );

}
export default Home;

