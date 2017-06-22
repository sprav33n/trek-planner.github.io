var myHeader = document.querySelector('h1');
myHeader.textContent = 'Hello World!';

var img = document.querySelector('img');

img.onclick = function(){
  var file_name = img.getAttribute('src');

  if (file_name === 'images/abc.jpg') {

    img.setAttribute('src', 'images/abc2.jpg');
  }
  else{

    img.setAttribute('src', 'images/abc.jpg');

  }
}

var cu_btn = document.querySelector('button');

cu_btn.onclick = setUserName();

function setUserName(){

  var myName = prompt('Who goes there?!');
  localStorage.setItem('name', myName);
  myHeader.textContent = 'Hello ' + myName;

}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  if (storedName === "null") { // Interestingly, == null didn't work!
    storedName = 'Human';
  }
  myHeader.textContent = 'Hello ' + storedName;
}
