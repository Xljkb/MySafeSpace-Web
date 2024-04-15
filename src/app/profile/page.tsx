import AdminFooter from "./components/adminFooter"
import AdminHeader from "./components/adminHeader"
import AdminGallery from "./components/imgsShow"

export default function AdminMain() {
    return (
        <main className="h-full w-full bg-white">
            <AdminHeader/>
            <AdminGallery/>
            <AdminFooter/>
        </main>
    )
}