import { ButtonT } from "../interface/ButtonType";


const Button = ({ type,isdisbaled, children, onClick,styles }: ButtonT) => {
    
    return (
        <div>
            <button
            disabled={!isdisbaled}
            onClick={(e) => onClick}
            type={type}
            className={[styles , isdisbaled ? " bg-violet-700 cursor-pointer" : " bg-violet-100 cursor-not-allowed  "].join(" ")}>
                {children}
        </button>
            </div>
    );
};


export default Button;