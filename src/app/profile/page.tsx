import Footer from "./components/profileFooter"
import Header from "./components/profileHeader"

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