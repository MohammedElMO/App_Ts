import { ReactNode, useState } from "react";

interface ExpentionT{
    maxChar?:number
    status: string
    children: string
}


export const Expandable = ({children,maxChar=100,status="More"}: ExpentionT) => {
    const [statue, setStatus] = useState<boolean>(false)
    const onChrink = () => {
    }
    const isHidden = "overflow-hidden text-ellipsis whitespace-nowrap"
    if (children.length <= maxChar) return <p>{ children }</p>
    const newText = statue ? children : children.substring(0,maxChar)
    return (
        <div className="flex ">
        <p className="p-6 ">
        {newText}...    
                <button onClick={() => setStatus(!statue    )}
                    className="border  rounded text-black bg-red-300 px-3 py-2">
                    {statue ? "More" : "Less"}
                </button>
        </p>
        </div>
    );
};