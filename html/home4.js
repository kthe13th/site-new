var currentTabzx = "stepsx1";

function showTabzx(tabNamezx) {
  var stepsxNumber = parseInt(currentTabzx.replace("stepsx", ""));

  if (tabNamezx === 'prevzx') {
    if (stepsxNumber === 1) {
      currentTabzx = 'stepsx9';
    } else {
      currentTabzx = 'stepsx' + (stepsxNumber - 1);
    }
  } else if (tabNamezx === 'nextzx') {
    if (stepsxNumber === 9) {
      currentTabzx = 'stepsx1';
    } else {
      currentTabzx = 'stepsx' + (stepsxNumber + 1);
    }
  }


  var tabzxs = document.getElementsByClassName("tabcontentzx");
  for (var i = 0; i < tabzxs.length; i++) {
    tabzxs[i].style.display = "none";
  }

  document.getElementById(currentTabzx).style.display = "block";
}


showTabz(currentTabzx);
