var count = 0;
result.style.visibility = "collapse";

function countWord() {
   let a = 20, b = 20;
   count++;
   console.log("I called cout : " + count);
   if (count % 2) {
      visible();
   }
   else {
      invisibel()
   }
}

function visible() {
   let btn_analyze = document.getElementById('btn_analyze');
   let result = document.getElementById('result');
   let speed = document.getElementById('speed') ;
   let rightWords = document.getElementById('rightWords') ;
   let wrongWords = document.getElementById('wrongWords') ;
   console.log("odd");
   result.style.visibility = "visible";
   btn_analyze.value = "Retry";
   speed.value = 10 ;
   rightWords.value = 8 ;
   wrongWords.value = speed.value - rightWords.value ;

}
function invisibel() {
   let btn_analyze = document.getElementById('btn_analyze');
   let result = document.getElementById('result');
   console.log("Even");
   result.style.visibility = "collapse";
   btn_analyze.value = "Analyze my skill";
}