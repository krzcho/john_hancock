//= require signature_pad

document.addEventListener('DOMContentLoaded', function(){
  const elements = document.getElementsByClassName("jh-signature-canvas");
  var signatures = [];
  if (elements) {
    signatures = new Array(elements.length);
    for (let i = 0; i < elements.length; i++) {
      const canvas = elements[i];
      const hidden_field = document.getElementById(canvas.id + '-hidden');
    
      if (canvas && hidden_field) {
        const parent_form = canvas.closest("form");
        signatures[i] = [hidden_field, new SignaturePad(canvas)];
    
        parent_form.onsubmit = function() {
          for (let j = 0; j < signatures.length; j++) {
            if (signatures[j][1].isEmpty()) {
              elements[j].parentElement.style.border = '1px solid red';
              elements[j].scrollIntoView();
              return false;
            }
            elements[j].parentElement.style.border = '';
            signatures[j][0].value = signatures[j][1].toDataURL();
          }
        }
    
        // function resizeCanvas() {
        //   var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        //   canvas.width = canvas.offsetWidth * ratio;
        //   canvas.height = canvas.offsetHeight * ratio;
        //   canvas.getContext("2d").scale(ratio, ratio);
        //   signaturePad.clear();
        // }
    
        // window.addEventListener("resize", resizeCanvas, true);
        // resizeCanvas();
      }
    }
  }
}, false)
