'use strict'
const elem=document.getElementById("elem")
function clear() {
    elem.innerHTML=""
}
setTimeout(clear,3000)
function showElem()
{
    console.log(elem);
}
setTimeout(showElem,3001)//neshan dadan node bad az pak kardan mohtaviat an