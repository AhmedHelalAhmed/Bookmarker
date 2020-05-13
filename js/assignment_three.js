
 
var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var nameError=document.getElementById("nameError");
var urlError=document.getElementById("urlError");
var submitBtn=document.getElementById("submitBtn");
var siteDate=document.getElementById("siteDate");



submitBtn.onclick=function()
{

    if(siteName.value=="" && siteUrl.value=="")
    {
        nameError.innerHTML="Name is required" ;
        urlError.innerHTML="Url Field is required";
    }

    else if(siteName.value=="")
    {
        nameError.innerHTML="Name is required" ;
    }

    else if( siteUrl.value=="")
    {
        urlError.innerHTML="Url Field is required"
        
    }

    else
    {
     addSite();
     clear();
     show();
    }
 
}

var siteContainer;
if(localStorage.getItem("mySite")==null)
{
    siteContainer=[];
}
else
{
    siteContainer=JSON.parse (localStorage.getItem("mySite"))
    show();
}

function addSite()
{

  var mySite=
  {
    name:siteName.value ,
    url:siteUrl.value 

  }

  siteContainer.push(mySite);
 
  localStorage.setItem("mySite" , JSON.stringify(siteContainer));

}

function clear()
{

    siteName.value="";
    siteUrl.value="";
}




function show()
{

col="";

for(var i=0;i<siteContainer.length;i++)
{
 
    col+=` <div class="row my-4 py-4 bg-color  ">
    <div class="col-sm-6">

        <div class="row ">
            <div class="col-md-8">
             <p>`+siteContainer[i].name+`</p>
            </div>
            <div class="col-md-4">
            <a href="`+siteContainer[i].url+`" target="_blank"> 
            <button class="btn btn-info">visit</button> 
            </a>
            <button onclick="deleteSite(`+i+`)" class="btn btn-danger">Delete</button>
            </div>
        </div>

    </div>

</div>`


}

siteDate.innerHTML=col;

}


function deleteSite(index)
{
    siteContainer.splice(index,1);
    localStorage.setItem("mySite" , JSON.stringify(siteContainer));
    show();
}