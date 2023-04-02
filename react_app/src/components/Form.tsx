import Button from "./common/Button";
import { useForm } from "react-hook-form"
import { z  } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { useState } from "react";
import categories from "./ExpensesTracker/filterData";

const Formschema = z.object({
    description: z.string().min(5,{message:"description should be more than 5 characters"}).max(100),
    amount: z.number({invalid_type_error:"the product Amount is required"}).positive().min(0.01).max(100_000),
    category: z.enum(categories, {
        errorMap:()=> ({message:"select Category To append to list"})
    })
    
})
 export type DataForm = z.infer<typeof Formschema>

type Props = {
    SendToDataBase : (data:DataForm) =>void
}


function Form({SendToDataBase}:Props) {
    const { register , handleSubmit, formState:{errors,isValid},reset} = useForm<DataForm>({
        resolver:zodResolver(Formschema)
    })
   
        
 
    
    return (
        <>
            <form onSubmit={handleSubmit((data) => {
                SendToDataBase(data)
                reset()
            })} className=" p-5 flex flex-col overflow-hidden rounded-md  w-[50%] font-POP border border-violet-600  justify-self-center m-8 md:w-[75%] justify-start  ">

        <div className="flex flex-col gap-3 justify-start mx-2 w-full  ">
            <label htmlFor="Description" className="my-3"> Description </label>
            <input {...register("description")}  className="border outline-none p-2 rounded" type="text"  id="Description" />
                    {errors.description && <p className="text-red-400  my font-semibold">{errors.description.message }</p>}
        </div>
        <div className="flex flex-col gap-3 justify-start mx-2 w-full ">
            <label htmlFor="Amount" className="my-3">Amount</label>
            <input {...register("amount",{valueAsNumber:true})}
                    className="border outline-none p-2 rounded" type="text" id="Amount" />
            {errors.amount && <p className="text-red-400  my font-semibold">{errors.amount.message }</p>}
                
        </div>
        <div className="flex flex-col gap-3 justify-start mx-2 w-full ">
            <label htmlFor="Category" className="my-3"> Category </label>
                    <select
                        {...register("category")}
                        id=" Category " className="border text-lg outline-none  p-2 font-POP rounded">
                    <option value=""></option>
                    {categories.map(category => 
                <option value={category} key={category}>{ category}</option>
                )}
                </select>
            {errors.category && <p className="text-red-400 my font-semibold">{errors.category.message }</p>}
                
            </div>

            <Button type="submit" isdisbaled={true} styles="text-white text-md  font-POP font-semibold p-3 my-3 rounded  " >Send Prooduct</Button>

           
        </form>
        </>
    );
}


export default Form;