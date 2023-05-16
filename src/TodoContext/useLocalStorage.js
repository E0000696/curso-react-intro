import React, { useState } from 'react'

function useLocalStorage(itemName, initialValue){
    const [item,setItem] = React.useState(initialValue);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);

    React.useEffect(()=>{
        try{
            setTimeout(()=>{
        const localStorageItem = localStorage
        .getItem(itemName);
      
        let parsedItem;
        if(!localStorage){
            localStorage.setItem(itemName, JSON
            .stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }     
          setLoading(false);
        },2000);
        }catch(error){
            setLoading(false);
            setError(true);
        }
    },[]);
    
    
  
    const saveItem = (newItem)=> {
      localStorage.setItem(itemName, JSON
      .stringify(newItem));
        setItem(newItem);
      };
  
      return {
        item,
        saveItem,
        loading,
        error};
  };

  export {useLocalStorage};