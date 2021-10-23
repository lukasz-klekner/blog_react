import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
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
        setError(error.message)
        setIsPending(false)
      })
  }, [url])

  console.log(data)
  return {
    data,
    isPending,
    error,
  }
}

export default useFetch
