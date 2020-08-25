

var con=confirm("Do You want us send u massges for the new movies we have !")
var str;
if(con==true)
{
Email=prompt("Please Give us Your Email");
str="Thank you for answer , we will make you updating with our movie "
document.write('<h3>'+str+'</h3>')
}
else
{
str= "Its oke , We glad u are here <3 ";  
document.write('<h3>'+str+'</h3>')

}