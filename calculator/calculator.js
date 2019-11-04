var weight = document.getElementById('weight');
var reps = document.getElementById('reps');
var rpe = document.getElementById('rpe');

document.querySelector('form').addEventListener('submit', 
  function (e) { 
    e.preventDefault(); 
    var maxReps = (10 - parseFloat(rpe.value)) + parseFloat(reps.value);
    document.getElementById('1rm').innerHTML = Math.round((weight.value) / (1.0278 - 0.0278 * parseFloat(maxReps)));
  })

// document.write(erm);