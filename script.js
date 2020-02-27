replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    } else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/Wendler/gi)){
          //element.parentElement.parentElement.remove()
          element.parentElement.remove()
        }        
    }
    else if(element.nodeName = "IMG"){
      console.log("Image Found! Alt: ",element.alt)
      let re = /Wendler/gi
      if((element.alt != undefined &&element.alt.match(re)) || (element.src != undefined &&element.src.match(re)) || (element.alt != undefined &&element.title.match(re)))
      {
        element.title =""; 
        element.alt = "";
        element.remove()
        
      }
    }
}



