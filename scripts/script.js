'use strict'

//1:
const table=document.getElementById("age-table")
console.log(table);

//2:
let labels = document.querySelectorAll('td > label')
for(let label of labels)
{
    console.log(label);
}


//3:
const firstTd = document.querySelector("td:first-child")
console.log(firstTd);

//4:
const searchForm=document.getElementsByName("search")[0]//return the first node with name search
console.log(searchForm);

//5:
const fisrtInputInSearchForm=document.querySelector("input")//return the first input
console.log(fisrtInputInSearchForm);

//6:
const lastInputInSearchForm=document.querySelector("form > input:last-child")
console.log(lastInputInSearchForm);
