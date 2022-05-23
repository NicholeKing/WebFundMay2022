// Where we write our javascript logic
var count = 1;

function counter(element) {
    count++;
    // We are going to tell html to update itself with whatever js tells it to update with
    // console.log(count);
    // console.log(element);
    // element.innerText = count;
    element.innerText++; 
}

function specialCounter() {
    document.querySelector("#number").innerText++;
}