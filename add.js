document.getElementById("d").onclick=function()
{
    let a=document.getElementById("b").value;
    a=Number(a);
    let b=document.getElementById("c").value;
    b=Number(b);
    let total=a+b;
    let mul=a*b;
    let sub=a-b;
    let div=a/b;
    document.getElementById("h").innerHTML=total;
    document.getElementById("i").innerHTML=mul;
    document.getElementById("j").innerHTML=sub;
    document.getElementById("k").innerHTML=div;
    
}
