
import { getMeals ,displayMeals, array } from "./home.js";
getMeals()
// displayMeals(array)
$(document).ready(() => {
    displayMeals(array).then(()=>{
    $("#loading").fadeOut(500)
    $("body").css("overflow", "visible")
    })
})


// //!===========================================================
import { displaySearch } from "./search.js"
$('#search').click(function () { 
    close()
    displaySearch()
  });

// //!==========================================================
import { getCategories , displayCategories ,categoryArray} from "./category.js";

$('#category').click(function () { 
    close()
    searchInputs.innerHTML=''
    displayCategories(categoryArray)
});
getCategories()

// //!==========================================================
  let barsIcon = document.querySelector('.bars')
  let isFirstClick = true;
  $('#close').click(function () { 
    if($(".links").css("left") == "-290px"){
        open()
    }else{
        close()
    }
});
export function open() {
    $('.links').animate({left:0},500);
    barsIcon.classList.replace('fa-bars','fa-close');
    
    if (isFirstClick) {
        for (let i = 0; i < 5; i++) {
            $('.link li').eq(i).css({top:600}); // Set initial position
        }
    }
    
    for (let i = 0; i < 5; i++) {
        $('.link li').eq(i).animate({top:0},(i+5)*90);
    }
    
    isFirstClick = false;
}
export function close() {
        $('.links').animate({left:-290},500)
        barsIcon.classList.replace('fa-close','fa-bars')
        for (let i = 0; i < 5; i++) {
            $('.link li').eq(i).animate({top:600},(i+5)*150)    
        }
 }
     
// //!=========================================================
import { getArea , areaArray, displayArea } from "./area.js";
$('#area').click(function () { 
    close()
    searchInputs.innerHTML=''
    displayArea(areaArray)
});
getArea()

// //!==========================================================
import { getIngredients , ingredientsArray, displayIngredients } from "./ingredients.js";
$('#ingredients').click(function () { 
    close()
    searchInputs.innerHTML=''
    displayIngredients(ingredientsArray.slice(0,20))
});
getIngredients()

//!========================================================
import { displayContact } from "./contact.js";
$('#contact').click(function () { 
   close()
   searchInputs.innerHTML=''
   displayContact()
    
});