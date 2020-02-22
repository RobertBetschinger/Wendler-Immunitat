replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    } else if(element.nodeType === Node.TEXT_NODE){
      //console.log("Text Found! textContent: ",element.textContent)
    }
    else if(element.nodeName = "IMG"){
      console.log("Image Found! Alt: ",element.alt)
      let re = /Wendler/gi
      if(element.alt.match(re) || element.src.match(re) || element.title.match(re)){
        element.remove()
      }
    }
}