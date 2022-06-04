import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
const useDelete = (url) => {
    const [Delete, setDelete] = useState(false)
    useEffect(() => {
        fetch(url, {
            method: 'DELETE',
        }).then(setDelete(true))
    }, [url])
    return { Delete }

}

export default useDelete;