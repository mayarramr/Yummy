import { displayMeals, mealsRow } from "./home.js";
export async function getIngredients(){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let finalResponse = await response.json()
    let ingredientsArray = finalResponse.meals
    // console.log(ingredientsArray);
    return ingredientsArray
}
export let ingredientsArray = await getIngredients()

export function displayIngredients(arr){
    let cartoona = '';
    for (let i = 0; i < arr.length; i++) {
      cartoona += `
      <div class="ingredient col-md-3 text-white text-center">
      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
      <div class="mt-2">
      <h3>${arr[i].strIngredient.slice(0,20)}</h3>
        <p>${arr[i].strDescription?arr[i].strDescription.split(" ").slice(0,20).join(" ") : ""}</p>
      </div>
    </div>
      `
    }
  mealsRow.innerHTML = cartoona;

    $('.ingredient').click(async function (e) { 
      let ingredient = e.currentTarget.children[1].firstElementChild.innerHTML
      let specificIngredient =await displaySpecificIngredients(ingredient)
      displayMeals(specificIngredient)
      
    });
}


async function displaySpecificIngredients(ingredient){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  let finalResponse =await response.json()
  let specificIngredientArray = finalResponse.meals
  // console.log(specificCategoryArray);
  return specificIngredientArray
}