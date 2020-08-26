

function Valid(name)
{
if(name==null||name=="")
Valid(Nameinfo())
else
document.write('<h3>'+"Welcome "+name+'</h3>')

}

function Nameinfo()
{
    var name = prompt ("Enter Your name pls ");
    return name
}

Valid(Nameinfo());