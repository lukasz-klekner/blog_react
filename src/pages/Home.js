import { useEffect, useState } from 'react'
import BlogList from '../components/BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8000/blogs`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
  }, [])

  return (
    <div className='home'>
      {blogs && <BlogList blogs={blogs} title='All posts' />}
    </div>
  )
}

export default Home