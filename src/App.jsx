import React from 'react'
import Main from './layout/components/main/Main'
import Header from './layout/components/header/Header'
import Footer from './layout/components/footer/Footer'


function App() {
  return (
    <div className='wrapper'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App