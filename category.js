
import { mealsRow } from "./home.js";
import { displayMeals } from "./home.js";

export async function getCategories(){
    let response =await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let finalResponse = await response.json()
    let categoriesArray = finalResponse.categories
    // console.log(categoriesArray);
    return categoriesArray;
}



export let categoryArray = await getCategories()
export async function displayCategories(arr){
    mealsRow.innerHTML = ''
    let cartoonaCategory = ''
    for (let i = 0; i < arr.length; i++) {
        cartoonaCategory += `<div class="col-md-3">
        <div class="item position-relative overflow-hidden layer rounded-2">
          <img class="w-100" src="${arr[i].strCategoryThumb}" alt="">
          <div class="meal position-absolute d-flex flex-column justify-content-center text-center p-3 align-items-center">
            <h3>${arr[i].strCategory}</h3>
          </div>
        </div>
      </div>`
    }

    mealsRow.innerHTML = cartoonaCategory
  $('.meal').click(async function (e) { 
    let mealName = e.currentTarget.firstElementChild.innerHTML
    // console.log(e.currentTarget.firstElementChild.innerHTML);
    let specificCategory = await displaySpecificCategory(mealName)
    // console.log(specificCategory);
    displayMeals(specificCategory.slice(0,20))
    
  });
}

async function displaySpecificCategory(category){
    let response =await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let finalResponse =await response.json()
    let specificCategoryArray = finalResponse.meals
    // console.log(specificCategoryArray);
    return specificCategoryArray
}



