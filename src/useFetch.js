import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const Abort = new AbortController();
        fetch(url, { signal: Abort.signal })
            .then(res => {

                if (!res.ok) {
                    throw Error('could not fetch the data from this resource🐞 ')
                }
                return res.json()
            }).then(data => {
                setData(data)
                setLoading(false)
                setError(null)

            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted!')
                } else {
                    setLoading(false)
                    setData(null)
                    setError(err.message)
                }

            })
        return () => { Abort.abort() }
    }, [url])
    return { data, isLoading, error }
}

export default useFetch;