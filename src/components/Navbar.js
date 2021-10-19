const Navbar = () => {
  return (
    <div className='App'>
      <div className='content'>
        <nav className='navbar'>
          <h1>The Dojo Blog</h1>
          <div className='links'>
            <a href='/'>Home</a>
            <a href='/create'>New Blog</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
