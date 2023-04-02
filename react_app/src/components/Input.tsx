import { ChangeEvent, FormEvent, forwardRef, RefObject } from "react"

interface InputT {
    label: string
    type: "password" | "text" | "email"
    name: string
    id: string
    onTrack?: (e: FormEvent<HTMLInputElement>) => void
    Currentvalue?: string | number
    reference?: any
};
const Input =({ id, label, name, type, onTrack, Currentvalue , reference,...rest}: InputT) => {
    
    return (
        <div className="flex flex-col gap-3 justify-start mx-2 w-full ">
            <label htmlFor={id} className="my-3">{label}</label>
            <input {...rest}
                onChange={onTrack} value={Currentvalue} className="border outline-none p-2 rounded" type={type} name={name} id={id} />
        </div>
    )
}

export default Input