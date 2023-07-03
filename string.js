let g=window.prompt("enter the value");
let d=window.prompt("enter the value");
function string(a,b)
{
    if(a.length>b.length)
    {
        document.write("g");
    }
    else if(b.length>a.length)
    {
        document.write("d")
    }
    else 
    {
        document.write("g")
        document.write("d")

    }
}
string(g,d);