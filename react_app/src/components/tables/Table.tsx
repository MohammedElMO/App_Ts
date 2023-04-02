interface expense {
    id: number;
    category:string
    description:string
    amount:number
}

interface Props {
    expenses: expense[]
    onDelete:(id:number) => void
}


const Table = ({ expenses,onDelete }:Props) => {
   
    if (expenses.length === 0)
            return null
    return (
        <table className="flex flex-col p-4 ">
            <thead className="flex border p-3 border-b-0  justify-between  items-center">
                <tr>
                    <th>Description</th>
                </tr>
                <tr>

                    <th>Category</th>
                </tr>
                <tr>
                    <th>Amount</th>
                </tr>
                <tr>
                    <th />
                </tr>
            </thead>
            <tbody className="flex border justify-between flex-col">
                {
                    expenses.map(expense => 
                        <tr key={expense.id} className="border flex items-center font-semibold  justify-between p-4 text-center ">
                            <td>{expense.description }</td>
                            <td>{expense.category }</td>
                            <td>{expense.amount }</td>
                            <td>
                                <button type="button" className="bg-violet-700 text-white px-2 py-3 rounded cursor-pointer hover:bg-violet-500 transition-all " onClick={() =>onDelete(expense.id)} >Delete Item</button>
                            </td>
                        </tr>
                        )
                }
        </tbody>    

                <tfoot className="flex border border-t-0 justify-between">
                    <tr className="flex p-4 items-center ">
                        <th>Total</th>
                        <th>${expenses.reduce((acc,expense) => expense.amount +acc,0).toFixed(2) }</th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>

            
        </table>            
    );
};

export default Table