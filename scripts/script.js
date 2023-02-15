'use strict'
const button=document.getElementById("hider")
const text=document.getElementById("text")
function cleardiv()
{
    text.remove()
}
function clearButton()
{
    button.remove()
}
button.onclick=function()
{
    cleardiv()
    setTimeout(clearButton,2000)
}