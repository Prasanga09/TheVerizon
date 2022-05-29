var password = "ilikethiccgirls";
function passcheck() {
  if (document.getElementById('bruh').value != password) {
    alert('Wrong password, Try Again. Trust me if you do not have the password then you will get your ass kicked!');
    return false;
  }
  if (document.getElementById('bruh').value == password) {
    alert('Correct password. Click OK to enter into the secret!');
  }
}
document.onkeydown=function(e)
{
  if(event.keyCode == 123)
  {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keycode == 'I'.charCodeAt(0))
  {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keycode == 'J'.charCodeAt(0))
  {
    return false;
  }
  if(e.ctrlKey && e.keycode == 'U'.charCodeAt(0))
  {
    return false;
  }
}
