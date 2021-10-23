import { useEffect, useState } from 'react'
import BlogList from '../components/BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8000/blogss`)
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch data from server')
        }
        response.json()
      })
      .then((data) => {
        setBlogs(data)
        setIsPending(false)
        setError(null)
      })
      .catch((error) => {
        setError(error.message)
        setIsPending(false)
      })
  }, [])

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All posts' />}
    </div>
  )
}

export default Home
