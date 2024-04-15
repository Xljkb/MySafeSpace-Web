import Drafts from "./components/draftsComponent"
import SelectionFooter from "./components/selectionFooter"

export default function AdminMain() {
    return (
        <main className="h-full w-full bg-white">
            <Drafts/>
            <SelectionFooter/>
        </main>
    )
}