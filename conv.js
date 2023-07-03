function display()
{
 var a=parseFloat(document.getElementById("a7").value);
  console.log("a")
 var b=parseFloat(document.getElementById("a8").value);
 var c=parseFloat(a*12);
 var d=parseFloat(c+b);
 var e=d*2.54;
 document.getElementById("a6").innerHTML=e;
 
}