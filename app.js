function momentum() {
    const Mass = document.getElementById('value1').value;
    const velocity = document.getElementById('value2').value;
    const velocityx = parseInt(velocity)
    const Massx = parseInt(Mass)
 
    const finalanswer = Massx * velocityx;

    if(Mass == "", velocity == ""){
        document.getElementById('error').style.display="block";
        document.getElementById('message').style.display="none";
   document.getElementById('thanks').style.display="none";
    }

 

    else{
    document.getElementById('answer').innerHTML = finalanswer + ("Kgm/s");
   document.getElementById('message').style.display="block";
   document.getElementById('thanks').style.display="block";
   document.getElementById('error').style.display="none";
    }
  
}