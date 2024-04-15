import { useSearchParams } from "next/navigation"
import { useRef, useEffect } from "react"

type Props = {
    title : string,
    onDismiss: () => void,
    onAction: () => void,
    children: React.ReactNode
}

export default function Dialog( {title, onDismiss, onAction, children} : Props ) {
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')

    useEffect(() => {
        if (showDialog === 'y') {
            dialogRef.current?.showModal()
        } else { dialogRef.current?.close() }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onDismiss()
    }

    const onDialogAction = () => {
        onAction()
        closeDialog()
    }

    const dialog: JSX.Element | null = showDialog === 'y'
        ? (
            <dialog ref={dialogRef} className="fixed w-screen h-screen  rounded-xl backdrop:bg-gray-800/50">
                <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
                        <h1 className="text-2xl">{title}</h1>
                        <button
                            onClick={closeDialog}
                            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                        >x</button>
                    </div>
                    <div className="px-5 pb-6">
                        {children}
                        <div className="flex flex-row justify-end mt-2">
                            <button onClick={onDialogAction} className="bg-green-500 py-1 px-2 rounded border-none">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        ) : null

    return dialog
}