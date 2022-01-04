var x = document.getElementById("location");
var c = document.getElementById("container");

function getLocation( )
{
  if( navigator.geolocation )
  {
      console.log(" >> Inside nav.geoloc if()");
      navigator.geolocation.getCurrentPosition( showPosition, logError );
  } 
  else
  {
    console.log(" >> Geolocation is not supported by browser");
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition( position )
{
    console.log(" >>showPosition called");
  x.innerHTML = 
    "Latitude: " + position.coords.latitude + 
    "<br/>" + "Longitude: " + position.coords.longitude;
}

function logError( positionError ) 
{
    console.log(positionError);
    x.innerHTML =  "Could not retrieve location: \"" + positionError.message + "\" \n Will show box to enter city they reside in";
    newTextBox();
}

function newTextBox(element)
{               
    // Create new input field
    console.log(c)
    c.style.display="block";
    
}

/*
function createForm(element) {
    var form = document.createElement("form");
    document.body.insertBefore(form, element);
    form.method = "POST";
    form.action = "login.php";

    var newInput = document.createElement("INPUT");
    newInput.id = "cityName";
    newInput.name = "cityName";
    newInput.type = "text";

    var label = document.createElement("Label");

    label.htmlFor = "cityLabel";
    label.innerHTML="City";

    var submitType = document.createElement("SUBMIT");
    submitTyp.innerHTML = "Submit";
    submitType.type = "submit";

    form.appendChild(label);
    form.appendChild(newInput);
    form.appendChild(submitType);
 }
 */
// getLocation( );