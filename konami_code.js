const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
const key = [38,38,40,40,37,37,39,39,66,65]
function init() {
  let index = 0;
  body.document.addEventListener('keydown', function(e){
    if (e.which === key[index]){
      index ++;
    if (index === 9){
      alert("Please Help!");
      index = 0;
    }
  } else {
    index =0;
  }
})
}