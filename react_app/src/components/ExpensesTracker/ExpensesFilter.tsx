import categories from "./filterData"

type Props = {
    onSelectCategory:(category:string) => void
};

export const ExpensesFilter = ({ onSelectCategory }: Props) => {
    return (
        <select className='rounded p-4 border' onChange={(category)=> onSelectCategory(category.target.value)}>
            <option value="">All categories</option>
            {categories.map(category => 
                <option value={category} key={category}>{ category}</option>
                )}
        </select>            
    );
};