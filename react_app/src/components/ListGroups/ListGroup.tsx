import { useState } from 'react';
import {  ListT }  from '../interface/listType';
// import styles from "./coll.module.css"
import styled from 'styled-components';
import {spaceStyle} from "./style"

const HeadingOne = styled.h1`${spaceStyle.backgroundColor}`
const ListGroups = ({renderError ,dataList,heading,onSelectFromList }: ListT) => {
    const [selected, setIsSelected] = useState<number>(-1)


    return (
        <>
            {dataList.length === 0 && <p>{renderError}</p>}
            <HeadingOne>{heading}</HeadingOne>
            <ul className="flex flex-col rounded-md p-6 ">
                {dataList.map((item, id) =>
                    <li
                        onClick={() => {
                                setIsSelected(id)
                                onSelectFromList(item)
                            }}
                        key={id}
                        className={ selected === id ? "list-item cursor-pointer bg-yellow-300 text-white " : "list-item cursor-pointer"}>
                        {item}
                    </li>
                    )}

            </ul>

        </>
 
    );
};

export default ListGroups