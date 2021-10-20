import { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('Mario')
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName('Lukasz')
    setAge(27)
  }
  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={(e) => handleClick('Lukas', e)}>Click me!</button>
    </div>
  )
}

export default Home
