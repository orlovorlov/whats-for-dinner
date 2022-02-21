var buttonLetsCook = document.querySelector('.button-lets-cook')
var buttonRadios = document.querySelectorAll('.radio-button')
var buttonAddRecipe = document.querySelector('.button-add-recipe');
var imagePot = document.querySelector('.pot');
var contentBox = document.querySelector('.content-box')
var boxShowDish = document.querySelector('.box-show-dish')


buttonLetsCook.addEventListener('click', renderDish)


// Need to link each radio button to its respective array
// When the radio button is selected it iterates through its array
// and returns a random value.


// function randomizeDish() {

// }

function insertDish(dishToRender) {
  boxShowDish.innerHTML = ''
boxShowDish.insertAdjacentHTML('afterbegin', 
`<div>
  <h5 class='should-make'>You Should Make:</h5>
  <h2>${dishToRender}!</h2>
</div>
`
)
}


function renderEntireMeal(mainToRender, sideToRender, dessertToRender) {
boxShowDish.innerHTML = ''
boxShowDish.insertAdjacentHTML('afterbegin',
`<div>
  <h5 class='should-make'>You Should Make:</h5>
  <h2>${mainToRender} with a side of</h2>
  <h2>${sideToRender} and </h2>
  <h2>${dessertToRender} for dessert!</h2>
</div>
`
)
}

function findDish(dishToSearch) {
  var dish;
  if (dishToSearch === 'side') {
   dish = getRandomDish(sides)
   insertDish(dish)
  } else if (dishToSearch === 'main dish') {
   dish = getRandomDish(mains)    
   insertDish(dish)
  } else if (dishToSearch === 'dessert') {
   dish = getRandomDish(desserts)     
   insertDish(dish)
  } else {
    var main = getRandomDish(mains)
    var side = getRandomDish(sides)
    var dessert = getRandomDish(desserts)
    renderEntireMeal(main, side, dessert)
  }
}

function renderDish(event) {
  event.preventDefault()
  console.log('should be an array of all the inputs',buttonRadios)
  hide(imagePot);
  // getRandomIndex()
  var selected;
for (var i = 0; i < buttonRadios.length; i++) {
 
  // console.log(buttonRadios[i].checked)
  if (buttonRadios[i].checked === true) {
    // if name of the radio is checked the var selected
    //gets gets assigned the value(name) of that button.
    selected = buttonRadios[i].value 
    console.log(selected);
    findDish(selected)

  }
  
}

}


function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}


function getRandomDish(array) {
  var index = Math.floor(Math.random() * array.length)
  console.log(array[index])
  return array[index]
  
}

