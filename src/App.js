import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './pages/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
