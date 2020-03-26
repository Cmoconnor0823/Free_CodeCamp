// array that needs to be reduced
//
//
var unreducedArr = 
  [  2020, 12, 100, 18 ];

function reduceSum(accum, item, itemIdx) {
   return accum+item;
}

function reduceMin(accum, item, itemIdx) {
   return (accum < item ? accum : item );
}

// Insert the contents of the unsorted array into the #start div
document.querySelector("#start").innerText = unreducedArr.join(", ");

// Get a reference to the go button in the DOM, add a click event listener to it
var sumBtn = document.querySelector("#go-sum");

sumBtn.addEventListener("click", function() {
  // Reduce the array, insert its result into the #result div
  var reducedArr = [...unreducedArr];
  document.querySelector("#result").innerText = 
  reducedArr.reduce(reduceSum);
});


// Get a reference to the go button in the DOM, add a click event listener to it
var minBtn = document.querySelector("#go-min");

minBtn.addEventListener("click", function() {
  // Reduce the array, insert its result into the #result div
  var reducedArr = [...unreducedArr];
  document.querySelector("#result").innerText = 
  reducedArr.reduce(reduceMin);
});

