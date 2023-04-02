
interface CardT{
    manuItems: string[]
    onReduce:()=>void
}


export const Card = ({ manuItems,onReduce }: CardT) => {
    
    return (
        <div>
            <ul>
            {manuItems.map(item => <li key={item}>{ item }</li>)}
            </ul>
            <button onClick={onReduce} className="bg-blue-300">Add</button>
        </div>
    );
};