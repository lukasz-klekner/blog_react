const Home = () => {
  const handleClick = (name, e) => {
    console.log(`Hello ${name}`, e.target)
  }
  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={(e) => handleClick('Lukas', e)}>Click me!</button>
    </div>
  )
}

export default Home
