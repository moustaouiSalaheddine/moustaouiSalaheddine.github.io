function verify(){
	var email = document.getElementById("Email");
	var verifierEmail = document.getElementById("verifierEmail");
	var message = document.getElementById("message");
	if(email.value != verifierEmail.value)
	{
		message.innerHTML = "Email n'est pas vérifier";
		message.style.color = "red";
		verifierEmail.value ="";
	}
	else
		message.innerHTML = "";
}

function captcha(){
	var cap = document.getElementById("Captcha");

	var a = Math.ceil(Math.random() * 9)+ '';
	var b = Math.ceil(Math.random() * 9)+ '';
	var c = Math.ceil(Math.random() * 9)+ '';
	var d = Math.ceil(Math.random() * 9)+ '';
 	var code = a + '' + b  + '' + c + '' + d  ;
  	cap.value = code;
  
}

function verifierAge()
{
	var today = new Date();
	var dateNaiss = document.getElementById("Date");
	var an = dateNaiss.value.substr(0,4); 
	var age = today.getFullYear()-an;
	var message2 = document.getElementById("message2");
	if(age < 18 || age > 22)
	{
		message2.innerHTML = "L'age doit être entre 18 et 22 ans";
		message2.style.color = "red";
		dateNaiss.value = "";
	}
	else
	{
		message2.innerHTML = "";
	}	
}

function verifierCaptcha(){
	var captcha = document.getElementById("Captcha");
	var text =  document.getElementById("saisirCaptcha");
	var message = document.getElementById("message3");

	if(captcha.value != text.value)
	{
		message.innerHTML = "Veuillez saisir un code exact";
		message.style.color = "red";
		text.value = '';
	}
	else
		message.innerHTML = "";

}





