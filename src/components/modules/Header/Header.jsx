import { useState } from 'react'


function Header() {

  return (
    <>
      <div className='header'>
        <div className='header__logo'>

        </div>

        <div className='header__search'>
          <input type="text"/>
          
          <button>Carrito</button>
        </div>
      </div>

    </>
  )
}

export {Header}
