import React from "react";
import HomePage from "./components/HomePage";
import './App.css';
import { Routes, Route } from "react-router-dom";
import SongDetailPage from "./components/SongDetailPage";

const App = () => {
  return(
    <div>
      <nav>
       <h1 className="navBar">Social Media App</h1>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detail" element={<SongDetailPage/>}/>
      </Routes>
    </div>
  )
}
export default App;