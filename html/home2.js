var currentTaby = "stepy1";

function showTaby(tabNamey) {
  var stepyNumber = parseInt(currentTaby.replace("stepy", ""));

  if (tabNamey === 'prevy') {
    if (stepyNumber === 1) {
      currentTaby = 'stepy7';
    } else {
      currentTaby = 'stepy' + (stepyNumber - 1);
    }
  } else if (tabNamey === 'nexty') {
    if (stepyNumber === 7) {
      currentTaby = 'stepy1';
    } else {
      currentTaby = 'stepy' + (stepyNumber + 1);
    }
  }

  var tabys = document.getElementsByClassName("tabcontenty");
  for (var i = 0; i < tabys.length; i++) {
    tabys[i].style.display = "none";
  }

  document.getElementById(currentTaby).style.display = "block";
}


showTabzy(currentTaby);
