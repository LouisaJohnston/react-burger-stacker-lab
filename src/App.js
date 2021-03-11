import { useEffect, useState } from 'react'
import BurgerStack from './components/BurgerStack'
import IngredientList from './components/IngredientList'

import './App.css';

function App() {
   const [clickedIngredients, setClickedIngredients] = useState([])

   useEffect(() => {
     console.log(clickedIngredients)
   }, [clickedIngredients] )

  const handleIngredientClick = (e) => {
    // console.log(e.target.innerText)
    setClickedIngredients([{ name: e.target.innerText }, ...clickedIngredients])
  }

  return (
    <div className="App">
      <IngredientList handleIngredientClick={handleIngredientClick}/>
      <BurgerStack clickedIngredients={clickedIngredients}/>
    </div>
  );
}

export default App;
