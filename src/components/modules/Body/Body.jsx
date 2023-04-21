import { useState } from 'react'


function Body() {

  const listElement = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <div className='body'>
        <div className='body__card'>
          {
            listElement.map(element => {
              return(
                <div key={element} className='body__card'>
                  <img src={`/src/assets/365SignatureHoodie.png`} width="328px" height="496px" />
                  <p>Azul Marino</p>
                  <div>
                    <span>
                    </span>
                  </div>
                  <div>
                    <p>356 Signature sudadera con capucha</p>
                    <p>$ 175 USA</p>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </>
  )
}

export {Body}
