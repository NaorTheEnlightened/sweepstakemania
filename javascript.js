function callback(response){
    console.log(response);
    if(response.country_code == "GB")
        console.log("Authorized UK Visitor! Easy Conversion :)");
    else if(response.country_code == "US")
        window.location.replace("https://afflat3e1.com/lnk.asp?o=21010&c=918277&a=518164&k=0&l=21960");
    else if(response.country_code == "CA")
        window.location.replace("https://www.mb102.com/lnk.asp?o=18738&c=918277&a=518164&k=0&l=19889");
    else if(response.country_code == "FR")
        window.location.replace("https://www.mb103.com/lnk.asp?o=20249&c=918277&a=518164&k=0&l=21197");
    else if(response.country_code == "DE")
        window.location.replace("https://afflat3e1.com/lnk.asp?o=19515&c=918277&a=518164&k=0&l=20486");
    else if(response.country_code == "NZ")
        window.location.replace("https://afflat3e1.com/lnk.asp?o=20366&c=918277&a=518164&k=0&l=21294");
    else if(response.country_code == "IL")
        alert("WELCOME DEAR ISRAELI VISITOR!");
    else
        window.location.replace("https://www.mb103.com/lnk.asp?o=20902&c=918277&a=518164&k=0&l=21952");
    
    var dataInfo = [];
     
    for(var i in response)
        dataInfo.push([i,response[i]]);
        
    document.getElementById("dataFormInput").value=dataInfo;
    
}
        
        $.ajax({
    url:"https://geolocation-db.com/jsonp/",
    dataType:"jsonp"
})


            
   


function validateEmail ()
{

          var email = document.getElementById('email').value;
          if(email.length == 0) {
              
            
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
              
              alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

}


function validateForm() 
{
          if (!validateEmail()) {

            alert("Form not submitted");//Validation Message
            return false;
          }
          else {
            submitted=true;
            return true;
          }
}