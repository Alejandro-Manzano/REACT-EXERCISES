import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Subtitle from './components/Subtitle/Subtitle'
import Image from './components/Image/Image'
import Paragraph from './components/Paragraph/Paragraph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Title text="Recibido por props"></Title>
     <Subtitle text="SubTitle por props"></Subtitle>
     <Image></Image>
     <Paragraph text="Hola"></Paragraph>
    </>
  )
}

export default App
