import { useState } from 'react'
import {Header} from "../components/modules/Header/Header"
import { Body } from './modules/Body/Body'
import { Hero } from './modules/Hero/Hero'

function Home() {

  return (
    <>
     <Header/>
     <Hero/>
     <Body/>
   
    </>
  )
}

export {Home}
