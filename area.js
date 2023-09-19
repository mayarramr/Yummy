
import { displayMeals, mealsRow } from "./home.js";
export async function getArea(){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let finalResponse = await response.json()
    let areaArray = finalResponse.meals
    // console.log(areaArray);
    return areaArray
}
export let areaArray = await getArea()

export function displayArea(arr){
    let cartoona = '';
    for (let i = 0; i < arr.length; i++) {
      cartoona += `
      <div class="area col-md-3 text-white text-center">
      <i class="fa-solid fa-house-laptop fa-4x"></i>
      <h3 class="mt-2">${arr[i].strArea}</h3>
    </div>
      `;
    }
  mealsRow.innerHTML = cartoona;

  $('.area').click(async function (e) { 
    let area = e.currentTarget.lastElementChild.innerHTML
    let displayNeededArea = await displaySpecificAreas(area)
    displayMeals(displayNeededArea)
    
  });
}

async function displaySpecificAreas(area){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
   let finalResponse = await response.json()
   let specificAreaArray = finalResponse.meals
   return specificAreaArray;
}