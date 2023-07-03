document.getElementById("ad").onclick=function()
{
let a=document.getElementById("ab").value;

a=Number(a);
let c=Math.pow(a,2);
let b=document.getElementById("ac").value;
b=Number(b);
let d=Math.pow(b,2);
let h=c+d;
let g=Math.sqrt(h);
document.getElementById("af").innerHTML=g;
}