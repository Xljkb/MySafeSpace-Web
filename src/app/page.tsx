import axios from "axios"
import Body from "./components/body"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Header from "./components/Header"
import Bodymss from "./components/Bodymss"

// export const loginRes = await axios.post("http://127.0.0.1:8000/admins/login", {
//     username : "string",
//     password : "string"
// })

export default function RusspassHome() {
    return (
        <>
            <div className="relative">
                <Header/>
                <Bodymss/>
                <Footer/>
            </div>
            {/* <div className="relative bg-[#1D1D1D]">
                <Navbar/>
                <Hero/>
                <Body/>
                <Footer/>
            </div> */}
        </>
    )
}