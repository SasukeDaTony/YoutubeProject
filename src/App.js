import "./App.css";
import NavBar from "./components/NavBar";
import SearchBarForm from "./components/SearchBarForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const baseUrl = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`;
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchBarForm />}></Route>
          <Route path="/about" element={<About />}>
      
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
