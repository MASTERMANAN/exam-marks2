const total=document.getElementById("total");
const ob=document.getElementById("ob");
let result;
const h3=document.getElementById("h3i");
const myimage=document.getElementById("myimage");
const btn=document.getElementById("btn")

myimage.style.visibility="hidden"
function show(){    
     
    result=(ob.value/total.value)*100
    if(result>0 && result<=100)
    {
        if(result>80)
        {
            h3.innerHTML="congratulation"+result+"%";
            myimage.src="excellent.gif";
            myimage.style.visibility="visible";
        }
        if(result=80)
        {
            h3.innerHTML="Nice"+result+"%";
            myimage.src="nice.gif";
            myimage.style.visibility="visible";  
        }
        if(result<80 && result)
        {
            h3.innerHTML="Nice"+result+"%";
            myimage.src="awesome.gif";
            myimage.style.visibility="visible";
        }
        if(result<60)
        {
            
            h3.innerHTML="Study hard"+result+"%";
            myimage.src="nexttime.gif";
            myimage.style.visibility="visible";
        }
    }


    else
    h3.innerHTML="invaild entry"
}