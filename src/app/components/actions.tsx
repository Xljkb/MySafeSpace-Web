"use server"

export async function onDismiss() {
    console.log("Dialog dismissed!")
}

export async function onAction() {
    console.log("Action performed!")
}

export async function logValue(value : any | any[]) {
    await(1000)
    console.log(value)
}