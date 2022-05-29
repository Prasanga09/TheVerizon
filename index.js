var password = "ilikethiccgirls";
function passcheck() {
  if (document.getElementById('bruh').value != password} {
    alert('Wrong password, Try Again.');
    return false;
  }
  if (document.getElementById('bruh').value == password} {
    alert('Correct password. Click OK to enter webpage');
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
