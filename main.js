$('#city-type').append('<option>NYC</option>')
$('#city-type').append('<option>SF</option>')
$('#city-type').append('<option>LA</option>')
$('#city-type').append('<option>Sydney</option>')
$('#city-type').append('<option>Austin</option>')

$('#city-type').change(changeBackground)
$(function () {
  var myArray = ['nyc', 'sf', 'austin', 'sydney', 'la']
  $.each( myArray, function( append, changeBackground ) {
  });
})


// for loop , get options and then clean code / decrease repetition
//use an aray - how to loop through an aray with a for loop
