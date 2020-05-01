import React from 'react';

const api = {
    key: "",
    base: "https://api.spoonacular.com/recipes/search?query=cheese&number=2"
  }

  const Recipe = (props) => {
    var id = 0
    
    const getRecipe = async (id) => {
            console.log(props.id)
      const response = await fetch(`https://api.spoonacular.com/recipes/${props.id}/information?includeNutrition=false&apiKey=${api.key}`)
      const data = await response.json();
      console.log(data)
      window.open(data.sourceUrl, "_blank");
      console.log(data.readyInMinutes);
          
        }
        
    
        const updateId = e => {
            id = props.id
            getRecipe(id)
          }
  
    return (
        <div>
            <main>
                <div className="food-container">
                <div className='food-title'><h1>{props.title}</h1>
                </div>
                <div className="food-ingredients-title">
                <h2>Other Ingredients</h2>
                </div>
                <div className='missed-ingredients'>
                {props.missedIngredients.map(ingredients =>(
                <h4>{ingredients.originalString}</h4>
                ))}
                </div>
                <img src={props.image} height='80%' width='70%' data-id= {props.id} onClick={updateId} alt="food"  />
                </div>
        </main>
    </div>
    )
  }
  




/*
const Recipe = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
      <h2>Missed Ingredients</h2>
      {props.missedIngredients.map(ingredients =>(
                <h4>{ingredients.originalString}</h4>
      ))}
            <img src={props.image} alt="food"  />
            

        </div>
    )
}
*/
export default Recipe;
