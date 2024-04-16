import Footer from "./components/diaryFooter"
import Header from "./components/diaryHeader"
import Gallery from "./components/imgsShow"
import Body from "./components/diaryBody" 

export default function AdminMain() {
    return (
        <main className="h-full w-full bg-white">
            <Header/>
            <Body/>
            <Footer/>
        </main>
    )
}