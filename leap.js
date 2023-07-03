let y= window.prompt("enter the year")
if((y%4==0)&&(y%100!=0))
{
    document.write(" leap year")
}
else if(y%400==0)
{  
    document.write(" leap year")
}
else
{
    document.write("not leap year")
}
cc