 function hitungRating() {
  var attendance = parseFloat(document.formulir.attendance.value);
  var reading    = parseFloat(document.formulir.reading.value);
  var quiz       = parseFloat(document.formulir.quiz.value);
  var sum        = attendance+reading+quiz;
  var sum2       = parseFloat(sum/3);

  document.formulir.wadahRating.value = sum2;
  }
