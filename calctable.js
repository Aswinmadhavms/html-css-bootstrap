function display(h)
{
 var d=h;
 document.getElementById ("a4").innerHTML+=d;
}
function clr()
{
    document.getElementById("a4").value="";
}
function solve()
{
    let a=document.getElementById("a4").value;
    let b=eval(a);
    document.getElementById("a4").innerHTML=b;
}
