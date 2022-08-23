import React from "react"

function useLocalStorage(itemName, initialValue) {
    const [dataStatus, setdataStatus] = React.useState({loading:true, error:false})
    const [item, setItem] = React.useState(initialValue)


    React.useEffect( () => {
        setTimeout( () => {
        try {
            if (!localStorage.getItem(itemName)) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            } 
            
            const localStorageItem = localStorage.getItem(itemName)
            const parsedItem = JSON.parse(localStorageItem)

            setItem(parsedItem)
            setdataStatus({...dataStatus, loading:false})
        } catch (error) {
            console.error(error)
            setdataStatus({...dataStatus, error:true})
        } 
        }, 1000)
    }, [])


    const saveItem = (newItem) => {
        const stringifiedItems = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItems)
        setItem(newItem)
    }

    return {
        item,
        saveItem,
        dataStatus
    }
}  

export { useLocalStorage }