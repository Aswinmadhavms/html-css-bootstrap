let s= window.prompt("enter value");
console.log(typeof(s));
console.log(s[3]);
console.log(s.length);
document.write(typeof(s));
let a= window.prompt("enter value");
if(a>0)
{
    console.log("a is postive")
    document.write(a+ "is postive")
}
else if(a<0)
{
    console.log("a is negative") 
    document.write(a+ "is negative")
}
else
{
    console.log("a is zero")
    document.write(a+ "is zero")
}