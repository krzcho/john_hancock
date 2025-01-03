//= require signature_pad

document.addEventListener('DOMContentLoaded', function(){
  const elements = document.getElementsByClassName("jh-signature-canvas");
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      const canvas = elements[i];
      const hidden_field = document.getElementById(canvas.id + '-hidden');
    
      if (canvas && hidden_field) {
        const parent_form = canvas.closest("form");
        const signaturePad = new SignaturePad(canvas);
    
        parent_form.onsubmit = function() {
          hidden_field.value = signaturePad.toDataURL()
        }
    
        function resizeCanvas() {
          var ratio =  Math.max(window.devicePixelRatio || 1, 1);
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext("2d").scale(ratio, ratio);
          signaturePad.clear();
        }
    
        window.addEventListener("resize", resizeCanvas, true);
        resizeCanvas();
      }
    }
  }
}, false)
