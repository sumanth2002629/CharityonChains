import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Connect from "./components/pages/Connect";
import Footer from "./components/Footer";
import Donor from "./components/users/Donor";
import NGO from "./components/users/NGO";
import Store from "./components/users/Store";
import {fetchData} from "./utils/ipfs/ipfs_fetch";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
          <Route path="*" element={<h1>Error 404,Page not found</h1>}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/ngo" element={<NGO />}></Route>
          <Route path="/store" element={<Store />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
