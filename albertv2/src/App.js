import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Academics from './pages/Acadmics';
import Finances from './pages/Finances';
import Resources from './pages/Resources';

import Layout from './layout/Layout';
import { useEffect, useState } from "react";


function App() {
  const [BackendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api/semesters")
      .then(res => res.json())
      .then(
        data => {
          setBackendData(data);
        }
      )
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/academics" element={<Academics />}></Route>
        <Route path="/finances" element={<Finances />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
