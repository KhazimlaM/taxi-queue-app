// write your DOM code here.
// DOM element references
const count = document.querySelector(".count");
const joinElement = document.querySelector(".join_queue");
const leaveElement = document.querySelector(".leave_queue");

const joinTaxiElement = document.querySelector(".join_taxi_queue");
const counterElement = document.querySelector(".taxi_queue_count");

const departElement = document.querySelector(".departing")

// create Factory Function instance
const taxiQueue = TaxiQueue();

// DOM events
var myCounter = 0;

joinElement.addEventListener('click',function (){
 
   myCounter += 1;
   count.innerHTML = myCounter;
    
});

leaveElement.addEventListener('click',function (){
 
    myCounter -= 1;
    count.innerHTML = myCounter;
     
 });

 joinTaxiElement.addEventListener('click',function (){
 
    myCounter += 1;
    counterElement.innerHTML = myCounter;
     
 });




 


