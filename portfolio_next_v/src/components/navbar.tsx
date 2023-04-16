import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './home';

const navbar = () => {
  return (
    <header
      className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
      <nav>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
            {/*<Link to="/">Home</Link>

            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/articles">Articles</Link>
  */}
          </Routes>
        </BrowserRouter>
      </nav>
      <h2>Logo</h2>
      <nav>
        {/*<BrowserRouter>
        <Routes>
        <Link to="/" target={"_blank"}>T</Link>
        <Link to="/" target={"_blank"}>T</Link>
        <Link to="/" target={"_blank"}>T</Link>
        <Link to="/" target={"_blank"}>T</Link>
        <Link to="/" target={"_blank"}>T</Link>
        </Routes>
        </BrowserRouter>
*/}
      </nav>
    </header>
  )
}

export default navbar