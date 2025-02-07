import { } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer_Further/Footer'
import { Bg_colorGradient } from './style.jsx'

function App() {

  return (
    <>
      <Bg_colorGradient>
        <Header/>
        <Main/>
      </Bg_colorGradient>
        <Footer/>
    </>
  )
}

export default App
