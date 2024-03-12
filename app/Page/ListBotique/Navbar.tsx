import React from 'react'


function Navbar() {
  return (
    <div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <span><h3 className='text1'>Nos magasins à proximité</h3></span>
   <div className="topnav">
    <div className="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="Saisissez votre adresse, code postal ou ville" name="search" />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar
