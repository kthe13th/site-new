var currentTabz = "steps1";

function showTabz(tabNamez) {
  var stepsNumber = parseInt(currentTabz.replace("steps", ""));

  if (tabNamez === 'prevz') {
    if (stepsNumber === 1) {
      currentTabz = 'steps9';
    } else {
      currentTabz = 'steps' + (stepsNumber - 1);
    }
  } else if (tabNamez === 'nextz') {
    if (stepsNumber === 9) {
      currentTabz = 'steps1';
    } else {
      currentTabz = 'steps' + (stepsNumber + 1);
    }
  }

  var tabzs = document.getElementsByClassName("tabcontentz");
  for (var i = 0; i < tabzs.length; i++) {
    tabzs[i].style.display = "none";
  }

  document.getElementById(currentTabz).style.display = "block";
}
showTabz(currentTabz);
