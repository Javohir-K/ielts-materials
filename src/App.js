import "./App.css";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  // const [names, setName] = useState([]);

  // useEffect(() => {
  //   db.collection("hello").onSnapshot((snapshot) => {
  //     setName(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  //   });
  // }, []);

  return (
    <Router>
      <div className="app">
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="about" element=""/>
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
