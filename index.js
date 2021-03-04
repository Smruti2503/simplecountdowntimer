var getNum = document.getElementById("num");
var getBtn = document.getElementById("sub");

var rem = document.getElementById('flash');
var cut = document.getElementById('cancel');
var getCd = document.getElementById("circle");
var output = document.getElementById("ans");

getBtn.addEventListener("click", () => {
  var start = getNum.value;

  if (start == "" || start == undefined || start == null) {
    alert("Enter the time first  (in seconds)");
  } else {
    var audio = new Audio('countdown_clock.mp3');
    audio.play()
    audio.loop = true;
    var res = setInterval(() => {
      getCd.style.display = "block";

      
      

      if (start == 0) {
        clearInterval(res);
        rem.style.left = "0";
        getNum.value = " ";
        getCd.style.display = "none";
        audio.pause();
      }
      else{
       

        output.innerHTML = start;
        start--;
      }
     
    }, 1000);
  }
});


cut.addEventListener('click',()=>{
    flash.style.left = "-100%";
})
