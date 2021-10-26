import { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newBlog = { title, body, author }

    console.log(newBlog)
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
        <button>Add button</button>
      </form>
    </div>
  )
}

export default Create
