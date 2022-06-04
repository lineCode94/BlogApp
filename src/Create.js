import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Create = () => {
    const [title, setTitle] = useState(' ')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    let handelSubmit = (e) => {
        setLoading(true);
        e.preventDefault()
        const blog = { title, body, author }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            setLoading(false);
            history.push('/')
        }

        )
    }
    return (
        <div className="  blog-create">
            <form onSubmit={handelSubmit} className="container">
                <h2 className=" text-center title">Add New Blog</h2>
                <div className="mb-3 me-auto ms-auto col-sm-6">
                    <label className="form-label"><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-online-document-with-title-on-header-template-wireframe-shadow-tal-revivo.png" alt="img" width="18" /> Blog title:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={title} required onChange={(e) => setTitle(e.target.value)} />

                    <label className="form-label mt-3">✍️ Blog body:</label>
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        required rows="3"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label className="form-label">🧔 Author:</label>
                    <input className="form-control" list="datalistOptions" required
                        id="exampleDataList"
                        placeholder="Type to search..."
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <datalist id="datalistOptions">
                        <option value="zeko" />
                        <option value="Ahmed" />
                    </datalist>
                    <div className="col-12 mt-5 text-center">
                        {!loading && <button className="btn my-bg text-light submit-btn"  > Create Blog <img width="25px" src="https://img.icons8.com/dusk/64/000000/create-new.png" alt="img" />

                        </button>}
                        {loading && <button className="btn my-bg text-light  ">  <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/000000/loading-sign.png" alt="loading" />  </button>}

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;