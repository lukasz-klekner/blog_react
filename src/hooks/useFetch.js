import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortedCont = new AbortController()

    fetch(url, { signal: abortedCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch data from server')
        }

        return response.json()
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((error) => {
        if ((error.name = 'AbortError')) {
          return
        } else {
          setError(error.message)
          setIsPending(false)
        }
      })

    return () => abortedCont.abort()
  }, [url])

  console.log(data)
  return {
    data,
    isPending,
    error,
  }
}

export default useFetch
