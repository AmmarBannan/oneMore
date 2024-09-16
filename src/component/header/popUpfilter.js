import React from 'react'
import './popUpfilter.css'

export const PopUpfilter=({slectedTerm})=>{
    let slectedTermList=slectedTerm.get;
    const popDownClick=(searchKeys,term)=>{
        slectedTerm.set(
            {...slectedTermList, [searchKeys]:[term]}
        )
    }
   return (
     <div className='filterList'>
       {Object.keys(slectedTermList).map((searchKeys,index1)=>(
         <div className='categoryList' key={index1}>
         {/* <h3>{searchKeys}</h3> */}
         <ul className="popup" >
           {slectedTermList[searchKeys].map((term,Index2)=>(
            <div className={`popup-content key${index1}`} key={Index2}>
            <p
                onClick={()=>setFilterListFun(slectedTerm.get,slectedTerm.set,searchKeys,term)}
            >{term}</p>
            
            </div>
           ))}
           
         </ul>
         </div>
       ))}
 
     
         
       </div>
   )
 }

 export const setFilterListFun = (filterList,setFilterList,cat, val) => {
  
    setFilterList(filterList => {
      const currentList = filterList[cat] || []; // Get the current category list or default to an empty array
      const isAlreadyIncluded = currentList.includes(val); // Check if the value is already in the list
  
      // If the value is already included, remove it. If not, add it to the list
      const updatedList = isAlreadyIncluded 
        ? currentList.filter(item => item !== val) // Remove the value
        : [...currentList, val]; // Add the value
  
      return {
        ...filterList,           // Keep the previous state unchanged
        [cat]: updatedList       // Update only the specific category with the new or filtered list
      };
    });
  }