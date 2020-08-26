
var age = prompt ("Enter Your Age :");

while (isNaN(age) || age=="" || age==null)
    {
         age = prompt ("Pls Enter Correct Age ");
    }

if (age<=13 &&age>5)
    alert("Hi, I advice you to watch the page 1 Movie ,Thank You");

else if (age>13 && age<=100)
    alert("Hi, I advice you to watch the page 2 Movie ,Thank You");

else 
    alert("Hi, I advice you Leave this page,Thank You")



//-------------------------------------------------
var Info = prompt ("Do you add any susggestion movie to upload them for you ?Answer With Writing \"Yes\" or \"No\":");
while(!(Info =="Yes" ||Info =="yes" ||Info =="No" ||Info =="no") )
    {
        Info = prompt ("Please Answer With Writing \"Yes\" or \"No\":");
    }      
//----------
if(Info=="No" ||Info=="no");


else
{
    var num = prompt ("How many movie you want to suggest,you have from 1 to 5:");
    while(!(num <=5 && num>=1) ||(isNaN(num) ))
        {
            Info = prompt ("Please Select number from 1 to 5");
        }

    var MovieList="";
    for(i=0 ;i<num;i++)
    {
        var m= prompt ("Please insert the movie Name number ("+(i+1)+"):");

         while(m==null || m=="" )
             {
               m= prompt ("Please insert the movie Name number ("+(i+1)+"): (Dont let it Empty) !");
             }   

         MovieList=MovieList+m;

         if (i<num-1)
         MovieList=MovieList+",";

    }   

alert("Your Movie Suggerstion are ("+MovieList+") , Thank you !");

}

//---------------------------------------------------------------------------------------------------


var con=confirm("Do You want us send u massges for the new movies we have !")
var str;

function Massage(flag,email)
{
    if(flag==true)
    {
         Email =email;
         if(Email==null || Email=="")
            EmailConf();
         else
         {
             str="Thank you for answer , we will make you updating with our movie ";
             document.write('<h3>'+str+'</h3>');
         }

    }
    else
    {
        str= "Its oke , We glad u are here <3 ";  
        document.write('<h3>'+str+'</h3>');
    }
}

function EmailConf()
{
    if(con==true)
      var Email=prompt("Please Give us Your Email");

    Massage(con,Email);
}

EmailConf()