import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="not-found container text-center   ">
            <h2 className='my-color fs-1  '>404⚠️</h2>
            <p className="lead fs-2 ">We're sorry😥, we couldn't find the page you requested.</p>
            <Link className='fs-3' to='/'>🏠Home Page</Link>
        </div>
    );
}

export default NotFound;