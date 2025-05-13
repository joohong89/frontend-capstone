import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookingPage from "./views/BookingPage.jsx";
import HomePage from "./views/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Header></Header>
            <Main>

            </Main>
            <Footer></Footer>
        </BrowserRouter>
    </>
  )
}

export default App
