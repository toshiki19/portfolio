import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Login from "./Login";
import Skills from "./Skills"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login/>} />
        <Route path={`/blog/`} element={<Blog/>} />
        <Route path={`/home/`} element={<Home />} />
        <Route path={`/skills/`} element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;