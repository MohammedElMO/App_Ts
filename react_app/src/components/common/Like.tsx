import { useState } from "react";
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"


type Props = {
    onLike:()=>void
};
export const Like = ({ onLike }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
    
    return (
        <div>
            {isLiked ?
                <AiOutlineHeart onClick={() => {
                    onLike()
                    setIsLiked(!isLiked)
                    }
                } className="scale-150 m-7 cursor-pointer   " />
            :    
                <AiFillHeart onClick={() => {
                    onLike()
                    setIsLiked(!isLiked)
                }}
                    className="scale-150 m-7 cursor-pointer text-red-500" />
            
            } 
        </div>
    );
};