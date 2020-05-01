import React, { useState,useEffect} from 'react';
import Recipe from "./Recipe";
import './App.css';
import './index.css';
const api = {
  key: "",
  base: "https://api.spoonacular.com/recipes/search?query=cheese&number=2"
}

const App = () => {
  const [query, setQuery] = useState('Cheese');
  const [search,setSearch] = useState("");
  const [recipes,setRecipes]= useState([]);

  useEffect( () => {
    getRecipes();
  },[query]);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${api.key}`)
    const data = await response.json();
    setRecipes(data);
    console.log(data);
        }

    const updateSearch = e => {
      setSearch(e.target.value)
    }
    
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);

      setSearch('');
    }
  return (
    <div className="App">
      <center>
      <form onSubmit={getSearch} className="search-box">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <br /><button className='search-button' type='submit'>
          Submit
        </button>
      </form>
      <ul>
    
      {recipes.map(recipe =>(
        <li>
          <a href="#">
        <Recipe title={recipe.title} 
        id={recipe.id}
        readyInMinutes={recipe.readyInMinutes} 
        image={recipe.image}
        missedIngredients={recipe.missedIngredients}
        usedIngredients={recipe.usedIngredients}
         />
         </a>
         </li>
      ))}
      </ul>
      </center>
    </div>
  )
}

export default App;
