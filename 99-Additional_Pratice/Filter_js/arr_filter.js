// array that needs to be filtered
//
//
var unfilteredArr = 
  [ 'Monday', 2020, '2020', false, { 'name': 'Kim' }, true, "This is a Fact", { 'month' : 'January' } ];

function filterString(item, index, arr) {
  return ((typeof item) == "string") 
}

function filterBoolean(item, index, arr) {
  return ((typeof item) == "boolean") 
}

function filterType(item, index, arr) {
   arr[index]  =  (typeof item);
}

// Insert the contents of the unsorted array into the #start div
document.querySelector("#start").innerText = unfilteredArr.join(", ");

// Get a reference to the go button in the DOM, add a click event listener to it
var typeBtn = document.querySelector("#go-type");

typeBtn.addEventListener("click", function() {
  // Filter the array, insert its result into the #result div
  var filteredArr = [...unfilteredArr];
  filteredArr.filter(filterType);
  document.querySelector("#result").innerText = filteredArr.join(" ---- ");
});

// Get a reference to the go button in the DOM, add a click event listener to it
var strBtn = document.querySelector("#go-string");

strBtn.addEventListener("click", function() {
  // Filter the array, insert its result into the #result div
  var filteredArr = unfilteredArr.filter(filterString);
  document.querySelector("#result").innerText = filteredArr.join(" ---- ");
});

// Get a reference to the go button in the DOM, add a click event listener to it
var boolBtn = document.querySelector("#go-boolean");

boolBtn.addEventListener("click", function() {
  // Filter the array, insert its result into the #result div
  var filteredArr = unfilteredArr.filter(filterBoolean);
  document.querySelector("#result").innerText = filteredArr.join(" ---- ");
});
