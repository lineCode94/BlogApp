import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
  return (
    // all app wraped in router 
    <Router>
      <div className="App">
        <Navbar />
        {/* all routes will wraped in switch  */}
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/create' >
            <Create />
          </Route>
          {/* customized route the user will go to it when click link with specific id */}
          <Route path='/blogs/:id' >
            <BlogDetails />
          </Route>

          <Route path='/*' >
            <NotFound />
          </Route>

        </Switch>
        <Route   >
          <Footer />
        </Route>
      </div>
    </Router>

  );
}

export default App;
