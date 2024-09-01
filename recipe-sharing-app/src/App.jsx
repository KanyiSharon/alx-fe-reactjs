import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddRecipeForm } from "recipe-sharing-appsrccomponentsAddRecipeForm.jsx";
import { RecipeList } from "recipe-sharing-appsrccomponentsRecipeList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddRecipeForm/>
    <RecipeList/>
      
      
      
    </>
  )
}

export default App
