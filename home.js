
export let mealsRow = document.getElementById("meals-row")

 export async function getMeals(){
    let response =await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=`)
    let finalResponse = await response.json()
    let mealsArray = finalResponse.meals
    // console.log(mealsArray)
    return mealsArray;
}

export let array;
array = await getMeals()


 export async function displayMeals(arr) {
  let cartoona = '';
    for (let i = 0; i < arr.length; i++) {
      cartoona += `
        <div class="col-md-3">
          <div class="detail position-relative overflow-hidden layer rounded-2">
          <p class = "d-none">${arr[i].idMeal}</p>
            <img class="w-100" src="${arr[i].strMealThumb}" alt="">
            <div class="meal position-absolute d-flex align-items-center">
              <h3>${arr[i].strMeal}</h3>
            </div>
          </div>
        </div>
      `;
    }
  mealsRow.innerHTML = cartoona;
  
  $('.detail').click(function (e) { 
    searchInputs.innerHTML=''
    let mealId = e.currentTarget.firstElementChild.innerHTML;
    console.log(mealId);
    getDetails(mealId).then(details => displayDetails(details));
  });
  
  async function getDetails(id){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let finalResponse = await response.json();
    let details = finalResponse.meals;
    console.log(details);
    return details;
  }
  
function displayDetails(details) {
  let meal = details[0];
  console.log(meal);
  let ingredients = ``
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
        ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
    }
}
  mealsRow.innerHTML = `<div class="row text-white details">
  <div class="col-md-4 mealImg">
      <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="">
      <h2 class="">${meal.strMeal}</h2 class="text-white">
  </div>
  <div class="col-md-8">
      <h2>Instructions</h2>
      <p>${meal.strInstructions}</p>
      <h3><span>Area : </span> <span>${meal.strArea}</span></h3>
      <h3><span>Category : </span> <span>${meal.strCategory}</span></h3>
      <h3>Recipes : </h3>
      <ul class ="d-flex flex-wrap list-unstyled g-3">${ingredients}</ul>
      <div class="clearfix"></div>
      <div class="mb-5">
      <h3 class="mt-2">Tags : </h3>
            <button class="btn btn-success"><a href="${meal.strSource}" class="text-decoration-none text-white" target="_blank">Source</a></button>
            <button class="btn btn-danger"><a href="${meal.strYoutube}" class="text-decoration-none text-white" target="_blank">Youtube</a></button>
          </div> 
  </div>
</div>`
}
 }












