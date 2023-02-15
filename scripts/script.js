'use strict'
const title=document.getElementById("title")
const li = document.querySelectorAll(".li")
title.onclick=function()
{
    if(li[1].style.display==="block")
    {
        for(let listItem of li)
        {
            // if()
            listItem.style.display="none"
    
        }
    }
    else
    {
        for(let listItem of li)
        {
            // if()
            listItem.style.display="block"
    
        }
    }
}