// xmlhttp request 
// this is used make AJAX(Asyc Javascript and XML)(here XML almost replaced JSON which commonly used in API communication) calls


var reqXML = new XMLHttpRequest();
var url = "https://api.publicapis.org/entries?title=bu&description=te";

// GET POST UPDATE DELET PUT APPEND 

// console.log(reqXML);
// Four states in the xml http request object
// 0 request not initialezed
// 1 server connection established
// 2 request received
// 3 processing request 
// 4 request finished and response is ready 

reqXML.onreadystatechange = function() {
    // console.log(this);
    if(this.readyState==4 && this.status==200) {
        console.log(reqXML.responseText);
    }
};

reqXML.open("GET",url,true);

// console.log(reqXML);
reqXML.send();

// console.log(reqXML);











