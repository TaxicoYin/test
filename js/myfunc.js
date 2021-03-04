function check()

{
var pwd=document.getElementById('pass').value;
var sha=sha512(pwd)
if (pwd==""){
document.getElementById('p1').innerHTML="Ooops,looks like you didn't type anything"
}
if (pwd=="ftcsb"){
	document.getElementById('p1').innerHTML="确实，很难不赞同。。。"
}
else{
	if (sha=="a7186c57d8d0444f78792730bb14ba1e5fe6e0efa0d84fb829bf4273b7283958fe293dda04d05e6eb88562bab7f7ad83da13e3e04639bc200b1b3a634b7d3979")
		window.location.href="note.html";
	else
	document.getElementById('p1').innerHTML="Wrong password!"	
	}
}
function dokeydown() 
    { 
     var button = document.getElementById('ok');
        if ( event.keyCode == 13) 
        { 
          button.click();
        } 
    } 
