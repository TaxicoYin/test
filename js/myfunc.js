function check()

{
var pwd=document.getElementById('pass').value;
var sha=hex_sha1(pwd)
if (pwd==""){
document.getElementById('p1').innerHTML="Ooops,looks like you didn't type anything"
}
else{
	if (sha=="fc7a734dba518f032608dfeb04f4eeb79f025aa7")
	login()
	else
	document.getElementById('p1').innerHTML="Wrong password!"	
	}
}
function login()
{
	
　　window.location.href="note.html";

}
function dokeydown() 
    { 
     var button = document.getElementById('ok');
        if ( event.keyCode == 13) 
        { 
          button.click();
        } 
    } 
