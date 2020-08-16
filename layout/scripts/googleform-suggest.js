const scriptURL = 'https://script.google.com/macros/s/AKfycbwpFlg4tQeHE7pPUOD7d6ZQJJrFlXCocmqxr4ip8g/exec'
  const form = document.forms['suggest']

  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("submit").value = "Submitting...";
    document.getElementById("submit").disabled = true;
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then((response) => {
        console.log('Success!', response);
        form.style.display = "none";
        document.getElementById("submissionMessage").innerHTML = "</br>Got it. Thanks!</br></br><ul class='nospace group element btmspace-80'><li class='one_half first centered small_screen_stretch'><article><a href='https://uah.link'><div class='txtwrap alt-full-border'>Return to Main Page</div></a></article></li></ul>";
        document.getElementById("formResponse").style.display = "block";
        document.getElementById("submit").value = "Send";
        document.getElementById("submit").disabled = false;
        form.reset();
      })
      .catch((error) => {
         console.error('Error!', error.message);
         form.style.display = "none";
         document.getElementById("submissionMessage").innerHTML = "</br></br></br>An error occured, please try again.</br></br></br>";
         document.getElementById("formResponse").style.display = "block";
         document.getElementById("submit").value = "Send";
         document.getElementById("submit").disabled = false;
      });
  })
  
  