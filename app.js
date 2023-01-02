window.onload = function () {
    let elem = document.getElementById('elem');
    function modifyText() {
        elem.style.background = 'red';
        window.document.title="haha"
      }
    elem.addEventListener("click", modifyText, false);
 
  
  }


  