document.getElementById("ag").onclick=function()
{
    let a=document.getElementById("as").value;
    let b=2*3.14*a;
    c=Math.pow(a,2);
    let d=3.14*c;
    document.getElementById("ad").innerHTML=("area=" +b);
    document.getElementById("af").innerHTML=("circumfernce= " +d);
}
.
