import BlogList from '../components/BlogList'
import useFetch from '../hooks/useFetch'

const BASE_URL = `http://localhost:8000/blogs`

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(BASE_URL)
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All posts' />}
    </div>
  )
}

export default Home
