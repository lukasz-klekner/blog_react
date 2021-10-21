import { useState } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ])

  return (
    <div className='home'>
      {blogs.map(({ id, title, author }) => (
        <div className='blog-preview' key={id}>
          <h2>{title}</h2>
          <p>Written by: {author}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
