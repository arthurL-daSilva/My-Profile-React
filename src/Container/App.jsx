import { } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './History/Footer'
import Languages from './Languages/Languages.jsx'
import { Bg_colorGradient, Bg_BlackToWhite } from './style.jsx'

function App() {

  return (
    <>
      <Bg_colorGradient>
        <Header/>
        <Main/>
      </Bg_colorGradient>
        <Footer/>
      <Bg_BlackToWhite>
        <Languages/>
      </Bg_BlackToWhite>
    </>
  )
}

export default App
