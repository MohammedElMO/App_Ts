// @flow 
import { ReactNode } from 'react';
import {AiFillCloseCircle} from "react-icons/ai"
interface AlertT{
    children: ReactNode
    close:()=>void
};
export const Alert = ({children,close}:AlertT) => {
    return (
        <div className='p-5 text-left w-[50%] border border-emerald-500-200 bg-emerald-300 text-emerald-900 rounded-md m-5 overflow-hidden flex justify-between items-center  '>
            <p className='w-full'>{children}</p>
            <AiFillCloseCircle onClick={close} className='scale-100 cursor-pointer'/>
        </div>
    );
};
export default Alert;