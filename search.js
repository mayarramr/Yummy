// $(document).ready(() => {
//     $("#loading").fadeOut(500)
//     $("body").css("overflow", "visible")
// })
import { displayMeals, mealsRow } from "./home.js"
let searchInputs = document.getElementById('searchInputs')

export function displaySearch(){
    searchInputs.innerHTML=`<div class="search black-bg position-absolute top-0 start-0 end-0">
    <div class="container">
        <div class="row pt-4 px-5">
                <div class="col-md-6 searchForm">
                    <input id="nameInput" class=" form-control bg-transparent text-white" type="text" placeholder="Search By Name">
                </div>
                <div class="col-md-6 searchForm">
                    <input id="letterInput" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
                </div>                                                                                       
    </div>
  </div>
    </div>`

    mealsRow.innerHTML=''
    searchByMealName()
    searchByFirstLetter()
}
async function searchByName(meal) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    let finalResponse = await response.json()
    let searchArray = finalResponse.meals
    // console.log(searchArray);
    return searchArray
    }

function searchByMealName() {
    let nameInput = document.getElementById('nameInput')
    nameInput.addEventListener('input', async function () {
        let nameValue = nameInput.value;
        let filteredArray = await searchByName(nameValue);
        console.log(filteredArray);
        displayMeals(filteredArray);
      });
}


async function searchByLetter(letter) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let finalResponse = await response.json()
    let searchArray = finalResponse.meals
    // console.log(searchArray);
    return searchArray
    }


function searchByFirstLetter(){
    let letterInput = document.getElementById('letterInput')
    letterInput.addEventListener('input', async function(event) {
        let firstLetter = event.target.value
        if (firstLetter.length >= 1) {
          event.preventDefault();
          console.log(firstLetter);
            let meal = await searchByLetter(firstLetter)
            console.log(meal);
            displayMeals(meal)
        }
        else if (firstLetter.length == 0){
            let defaultMeals = await searchByLetter('a')
            displayMeals(defaultMeals)
        }
    })

}

   
      
 



  



