import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light  text-capitalize mb-5 fixed-top  ">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                        <Link className="navbar-brand fw-bolder fs-1 my-font  my-color" to="/" >Zeko Blog</Link>
                        <ul className="navbar-nav ms-auto   mb-2 mb-lg-0 me-5 fs-4 ">
                            <li className="nav-item">
                                <Link className="nav-link active text-light  " aria-current="page" to="/">🏠Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-Link active" to="/Friends">Friends</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-Link active" to="/Posts">Posts</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/create" style={{
                                    color: '#fff',
                                    backgroundColor: '#f1356d', borderRadius: '8px'
                                }} > new blog ➕</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>

    );
}

export default Navbar;