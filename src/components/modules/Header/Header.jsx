import { useState } from 'react'
import "../../../css/Header.css";
import { FaShoppingCart} from 'react-icons/fa';
import {MdSearch} from "react-icons/md"

function Header() {

  return (
    <>
      <div className='header'>
        <div className='header__logo'>

        </div>

        <div className='header__search'>
          <input 
          placeholder='Buscar '
          type="text"/>
          <button><FaShoppingCart /></button>
        </div>
      </div>

    </>
  )
}

export {Header}
