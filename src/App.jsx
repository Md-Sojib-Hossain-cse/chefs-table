import './Utility/Utility.css'
import Banner from './Components/Banner/Banner'
import CookingDetails from './Components/CookingDetails/CookingDetails'
import Navbar from './Components/Navbar/Navbar'
import RecipeCards from './Components/RecipeCards/RecipeCards'
import Recipedes from './Components/Recipedes/Recipedes'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCook , setCurrentlyCook] = useState([]);
  const [totalCookTime , setTotalCookTime] = useState(0);
  const [totalCalories , setTotalCalories] = useState(0);

  const handleWantToCook = item => {
    const isExist = wantToCook.find(wtcItem => item.recipe_id === wtcItem.recipe_id);
    const isExistCC = currentlyCook.find(wtcItem => item.recipe_id === wtcItem.recipe_id)
    if (!isExist && !isExistCC) {
      const newItems = [...wantToCook, item];
      setWantToCook(newItems);
    }
    else {
      toast("Can't add a item twice!");
    }
  };


  const handleCurrentlyCook = (cookItem) => {
    // remove cookItem from cook Item table 
    const remainingItems = wantToCook.filter( wtcItems =>wtcItems.recipe_id !== cookItem.recipe_id)
    setWantToCook(remainingItems);
    //added item to currently cook
    const newItems = [...currentlyCook , cookItem];
    setCurrentlyCook(newItems);
    //calculate total Time and calories
    const totalTime = totalCookTime + cookItem.preparing_time;
    setTotalCookTime(totalTime);
    const totalCal = totalCalories + cookItem.calories;
    setTotalCalories(totalCal); 
  }


  return (
    <>
      <header className='container max-w-[1320px] mx-auto font-lexend'>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className='container max-w-[1320px] mx-auto font-lexend'>
        <Recipedes></Recipedes>
        <ToastContainer></ToastContainer>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-6 md:mt-10 lg:mt-12 gap-6'>
          <RecipeCards handleWantToCook={handleWantToCook}></RecipeCards>
          <CookingDetails 
          wantToCook={wantToCook} 
          ToastContainer={ToastContainer}
          handleCurrentlyCook={handleCurrentlyCook}
          currentlyCook={currentlyCook}
          totalCookTime={totalCookTime}
          totalCalories={totalCalories}
          ></CookingDetails>
        </div>
      </main>
    </>
  )
}

export default App
