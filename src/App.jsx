import './Utility/Utility.css'
import Banner from './Components/Banner/Banner'
import CookingDetails from './Components/CookingDetails/CookingDetails'
import Navbar from './Components/Navbar/Navbar'
import RecipeCards from './Components/RecipeCards/RecipeCards'
import Recipedes from './Components/Recipedes/Recipedes'

function App() {


  return (
    <>
      <header className='container max-w-[1320px] mx-auto font-lexend'>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className='container max-w-[1320px] mx-auto font-lexend'>
        <Recipedes></Recipedes>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-6 md:mt-10 lg:mt-12'>
          <RecipeCards></RecipeCards>
          <CookingDetails></CookingDetails>
        </div>
      </main>
    </>
  )
}

export default App
