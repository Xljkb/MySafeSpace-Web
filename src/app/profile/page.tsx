import Footer from "../components/footer"
import Header from "../components/Header"

import Body from "./components/profileBody" 

export default function AdminMain() {
    return (
        <main className="h-full w-full bg-white">
            <Header/>
            <Body/>
            <Footer/>
        </main>
    )
}