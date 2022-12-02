import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import PageNotFound from "./components/pageNotFound/PageNotFound.js";
import MovieDetail from "./components/movieDetail/MovieDetail.js";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
