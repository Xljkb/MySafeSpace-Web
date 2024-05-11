import axios from "axios"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Header from "./components/Header"
import Body from "./components/body"


export default function Home() {
    return (
        <>
            <div className="relative">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </>
    )
}