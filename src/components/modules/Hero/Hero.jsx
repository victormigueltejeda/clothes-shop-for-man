import { useState } from 'react'


function Hero() {

  return (
    <>
      <div className='hero'>
        <div className='hero__title'>
          <h1>Ropa Para Hombre</h1>
          <p>
            ¿Manteniendo abiertas sus opciones? Descubra 
            todo en un solo lugar. Compre nuestra ropa masculina
            favorita con chaquetas, 365 esenciales, accesorios y más.
            Hay muchos estilos que se adaptan a todos sus deseos y
            necesidades.
          </p>
        </div>

        <div className='hero__filter'>
          <ul>
            <li>Todo</li>
            <li>Sudaderas</li>
            <li>Pantalones</li>
            <li>Vermudas</li>
          </ul>

          <button>Filtro</button> {268}
          <p>En stock</p>
          <button>Swich</button>
        </div>

    
      </div>

    </>
  )
}

export {Hero}
