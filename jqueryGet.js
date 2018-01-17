console.log('jquery file connected');

//window.addEventListener('load', getData); //Event when window loads run callback function getData.

//window.addEventListener('load', getData); //Event when window loads run callback function getData.

$(function(){ //Callback function on load
  $('#github').click(function(evt) { //on click run this function
    evt.preventDefault(); //disables default behvaior
    // const url = "https://api.github.com/users/petter123456" //const variable that sets url to githubs apu

    const url = "https://www.aftonbladet.se/" //const variable that sets url to githubs apu

    $.get(url, function(result) { //get data from url
      $('#output').append(getData(result)); //  Calling the getData function at the bottom
      console.dir(result)
      //console.dir(arguments) //arguments is a hidden variable in a function call, which will put in some are
    });
  });
});

function getData(result) { // Function
  let output = ""; //let will stay within the function
  output += "<ul>";
  for (const key in result) { // key in this case is like a placeholder (|placeholder|) in ruby
    // console.log(key)
    output += "<li>"; //the lop is pushing this into the output variable
    output += key + " - " + result[key]; //getting the value from the keys in the json hash.//the lop is pushing this into the output variable
    output += "</li>";//the lop is pushing this into the output variable
  };
  output += "</ul>";
  return output;
};
