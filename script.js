
 let password = document.getElementById("password")
  
 function genPassword() {
  let char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   let passwordLength = 15
   let password = ""
   
  for (let i = 0; i <= passwordLength; i++){
    var randomNum = Math.floor(Math.random() * char.length)
    password += char.substring(randomNum, randomNum +1)
    
    
  }
   document.getElementById("password").value = password
   
 }
 
 
 function copyPassword() {
   let copyText = document.getElementById("password");
   copyText.select();
   document.execCommand("copy");  
 }
