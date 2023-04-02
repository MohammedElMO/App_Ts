
import { Head } from "./Table";

type HeadProps<T> = {
    data:T
};
export const Thead = ({data} :HeadProps<Head[]>) => {
    return (

        <thead className="font-POP flex border ">
            {data.map(row => 
                <tr className="p-3 font-semibold" key={row.id}>
                    <th>{row.label }</th>
                </tr>
                )}
        </thead>


    );
};
