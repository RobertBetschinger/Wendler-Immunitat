replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    } else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/Wendler/gi)){
          element.parentElement.remove()
        }
        else if(element.textContent.match(/Laura Müller/gi)){
            element.parentElement.remove()
          }
        else  if(element.textContent.match(/Heidi Klum/gi)){
            element.parentElement.remove()
          }
        else  if(element.textContent.match(/Bachelor/gi)){
            element.parentElement.remove()
          }
        
    }
    else if(element.nodeType === "IMG"){
        if(element.src.match(/Wendler/gi)){
            element.remove()
        }
        if(element.alt.match(/Wendler/gi)){
            element.remove()
        }
        if(element.title.match(/Wendler/gi)){
            element.remove()
        }

    }
    
}