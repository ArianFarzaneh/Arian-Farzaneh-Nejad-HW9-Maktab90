'use strict'


let userInput
let li
function liCreator()
{
    const ul=document.createElement("ul")
    document.body.appendChild(ul)
    while(1)
    {
        userInput=prompt()
        if(userInput==="" || userInput===null) //(for empty srtings and Esc btn)
        break
        else
        {
            li= document.createElement("li")
            li.innerText=userInput
            ul.appendChild(li)

        }
    }
}
liCreator()