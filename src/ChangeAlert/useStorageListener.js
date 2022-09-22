import React from "react";

function useStorageListener(syncronize) {
    const [storageChange, setStorageChange] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(false)

    const onChange = (ev) => {
        if (ev.key === "TODOS_V1") {
            setStorageChange(true)
        }
    }
    const onVisibilityChange = () => {
        if (document.visibilityState === "visible" && storageChange) {
            setIsVisible(true)
            setStorageChange(false)
            syncronize()
            setTimeout( () => {
                setIsVisible(false)
            }, 4000 )
        }
    }

    React.useEffect( () => {

        window.addEventListener("storage", onChange)
        window.addEventListener("visibilitychange", onVisibilityChange)

        return () => {
            window.removeEventListener("storage", onChange)
            window.removeEventListener("visibilitychange", onVisibilityChange)
    }

    }, [storageChange])


    return {
        show: isVisible,
    }
}

export { useStorageListener }