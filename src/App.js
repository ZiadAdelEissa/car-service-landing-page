import { Route, Routes } from "react-router-dom";
import "./App.css";
import Head from "./Components/Heder/Head";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Service from "./Components/Servic/Service";
import Footer from "./Components/Footer/Footer";
function App() {
  return(
    <>
    <Navbar />
    <Head/>
    <Routes>
      <Route path="/" element={
        <>
      <About/>
      <Service/>
      </>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App;
