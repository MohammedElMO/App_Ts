import { ReactNode } from "react"

export interface ButtonT {
    children: ReactNode
    type: "button" | "submit" | "reset"
    styles: string
    isdisbaled:boolean
    onClick?:(e:MouseEvent) => void
}