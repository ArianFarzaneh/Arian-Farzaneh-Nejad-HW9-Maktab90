'use strict'
const closeOne=document.getElementById("closeOne")
const closeTwo=document.getElementById("closeTwo")
const closeThree=document.getElementById("closeThree")

closeOne.onclick=function()
{
    closeOne.closest("div").remove()
}

closeTwo.onclick=function()
{
    closeTwo.closest("div").remove()
}

closeThree.onclick=function()
{
    closeThree.closest("div").remove()
}