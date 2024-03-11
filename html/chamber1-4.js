var currentTab = "step1";

function showTab(tabName) {
  var tabs = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  if (tabName === 'prev') {
    var stepNumber = parseInt(currentTab.replace("step", ""));
    if (stepNumber === 1) {
      currentTab = 'step8';
    } else {
      currentTab = 'step' + (stepNumber - 1);
    }
  } else if (tabName === 'next') {
    var stepNumber = parseInt(currentTab.replace("step", ""));
    if (stepNumber === 8) {
      currentTab = 'step1';
    } else {
      currentTab = 'step' + (stepNumber + 1);
    }
  } else {
    currentTab = tabName;
  }

  document.querySelector("[data-tab='" + currentTab + "']").classList.add("active");
  document.getElementById(currentTab).style.display = "block";
}

showTab(currentTab);
