import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { About } from "./components/About";

function NavBar() {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <h3>
          <u>Welcome To Daniel & Tony's Youtube App!</u>
        </h3>
        <Link to="/about">
          <>About Us</>
        </Link>
      </header>
    </div>
  );
}

export default NavBar;
