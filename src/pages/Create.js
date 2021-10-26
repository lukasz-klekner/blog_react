import { useState } from 'react'

const BASE_URL = `http://localhost:8000/blogs`

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    setIsPending(true)
    const newBlog = { title, body, author }

    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    }).then(() => setIsPending(false))
  }

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor=''>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>Mario</option>
          <option value='luigi'>Luigi</option>
        </select>
        {!isPending && <button>Add a blog</button>}
        {isPending && <button disabled>Adding a blog</button>}
      </form>
    </div>
  )
}

export default Create
