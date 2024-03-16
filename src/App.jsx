import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
      <header className='container max-w-[1320px] mx-auto font-lexend'>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
    </>
  )
}

export default App
