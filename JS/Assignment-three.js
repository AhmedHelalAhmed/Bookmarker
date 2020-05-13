

// var siteName=document.getElementById("siteName");
// var siteUrl=document.getElementById("siteUrl");

// var sitesContainer;

// if (localStorage.getItem("mysite")==null)
// {
//     sitesContainer= [];
// }
// else
// {
//     sitesContainer= JSON.parse( localStorage.getItem("mysite") );
//     show(); 
// }

// function add()
// {
 
//     var mySites =
//     {
//        name:siteName.value,
//        url:siteUrl.value
//     }

//     sitesContainer.push(mySites);

//  if(mySites.name=="" && mySites.url=="")
//  {
//       nameError();
//       urlError();
//  }

//   else if(mySites.name=="")
//   {
//     nameError();
//   }
//    else if(mySites.url=="")
//   {
//     urlError();
//   }

//   else
//  {

//     localStorage.setItem("mysite" , JSON.stringify(sitesContainer))

//  show();

//  }

      
// }


// function show()
// {

// var col="";

// for(var i=0;i<sitesContainer.length;i++) 
// {
//   col+=`<div class="text-center mt-4 p-3 d-flex">` +sitesContainer[i].name+
//    `<button onclick="visitSite(`+i+`)"  class=" btn btn-info ml-5 ">visit</button> 
//    <button onclick="deleteSite(`+i+`)" class="btn btn-danger ml-2">Delete</button> 
//    </div>`
// }

// document.getElementById("button-container").innerHTML=col;
// }



// function nameError()
// {
//   document.getElementById("nameError").innerHTML="Name is required";
// }

// function urlError()
// {
//   document.getElementById("urlError").innerHTML="Url Field is required";
// }


// function deleteSite(index)
// {
//     sitesContainer.splice(index,1);
//     localStorage.setItem("mysite" ,JSON.stringify ( sitesContainer ) )
//    show();
// }

// function visitSite(index)
// {
   
//   var visit=` <a href="`+sitesContainer[index].url+`" target="_blank">visit</a> `
//   document.getElementById("link").innerHTML=visit;
  
// }





/// start from here

 
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
        urlError.innerHTML="Url Field is required"
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
 
    col+=` <div class="row mb-3 py-4 bg-color  ">
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