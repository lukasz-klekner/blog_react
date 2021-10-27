import { useParams, useHistory } from 'react-router'
import useFetch from '../hooks/useFetch'

const BASE_URL = `http://localhost:8000/blogs`

const BlogDetails = () => {
  const { id } = useParams()
  const { push } = useHistory()
  const { data: blog, error, isPending } = useFetch(`${BASE_URL}/${id}`)

  const handleClick = () => {
    fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => push('/'))
  }

  return (
    <div className='blog-details'>
      {isPending && <div>Loading</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete this article</button>
        </article>
      )}
    </div>
  )
}
export default BlogDetails
