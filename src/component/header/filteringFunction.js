
export const setFilterListFun = (filterList,setFilterList,cat, val) => {
    console.log("Current filterList for", cat, ":", filterList.get);
  
    setFilterList(filterList => {
      const currentList = filterList.get[cat] || []; // Get the current category list or default to an empty array
      const isAlreadyIncluded = currentList.includes(val); // Check if the value is already in the list
  
      // If the value is already included, remove it. If not, add it to the list
      const updatedList = isAlreadyIncluded 
        ? currentList.filter(item => item !== val) // Remove the value
        : [...currentList, val]; // Add the value
  
      return {
        ...filterList.get,           // Keep the previous state unchanged
        [cat]: updatedList       // Update only the specific category with the new or filtered list
      };
    });
  }