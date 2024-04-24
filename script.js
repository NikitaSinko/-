function randomString() {  
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*()"; 
  const passwordInput = document.querySelector("#password-input");
  var string_length = 10;  
  var randomstring = '';  
  for (var i=0; i<string_length; i++) {  
  var rnum = Math.floor(Math.random() * chars.length);  
  randomstring += chars.substring(rnum,rnum+1);  
  }  
  document.randform.randomfield.value = randomstring; 
}

onload = randomString();