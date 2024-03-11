var currentTabv = "stepv1";

function showTabv(tabNamev) {
  var stepvNumber = parseInt(currentTabv.replace("stepv", ""));

  if (tabNamev === 'prevv') {
    if (stepvNumber === 1) {
      currentTabv = 'stepv12';
    } else {
      currentTabv = 'stepv' + (stepvNumber - 1);
    }
  } else if (tabNamev === 'nextv') {
    if (stepvNumber === 12) {
      currentTabv = 'stepv1';
    } else {
      currentTabv = 'stepv' + (stepvNumber + 1);
    }
  }

  // Hide all tabs
  var tabvs = document.getElementsByClassName("tabcontentv");
  for (var i = 0; i < tabvs.length; i++) {
    tabvs[i].style.display = "none";
  }

  // Display the current tab
  document.getElementById(currentTabv).style.display = "block";
}

// Show the first tab initially
showTabzv(currentTabv);
