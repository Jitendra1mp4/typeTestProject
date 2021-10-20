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
function numberOfWord(sentence) {
   if (sentence == null) return 0;
   let arr = sentence.trim().split(" ");
   console.log(arr)
   return arr.length;
}
function visible() {
   let text_type = document.getElementById('text_type').value;
   let chars = document.getElementById('chars');
   let btn_analyze = document.getElementById('btn_analyze');
   let result = document.getElementById('result');
   let speed = document.getElementById('speed');
   let rightWords = document.getElementById('rightWords');
   let wrongWords = document.getElementById('wrongWords');
   console.log("odd");
   result.style.visibility = "visible";
   btn_analyze.value = "Retry";
   speed.value = numberOfWord(text_type);
   rightWords.value = 0;
   wrongWords.value = speed.value - rightWords.value;
   chars.value = text_type.length;

}
function invisibel() {
   let text_type = document.getElementById('text_type');
   let btn_analyze = document.getElementById('btn_analyze');
   let result = document.getElementById('result');
   console.log("Even");
   result.style.visibility = "collapse";
   text_type.value = null;
   btn_analyze.value = "Analyze my skill";
}