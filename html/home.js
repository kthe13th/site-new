var currentTab = "step1";

function showTab(tabName) {
  // Update the current tab
  currentTab = tabName;

  var tabs = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    tab.style.display = "none";
    tab.classList.remove("active-tab-content");

    var buttonTab = tab.getAttribute("data-tab");
    updateTabButtonColor(buttonTab);
  }

  var currentTabElement = document.getElementById(currentTab);
  currentTabElement.style.display = "block";
  currentTabElement.classList.add("active-tab-content");

  updateTabButtonColor(currentTab);
}

function updateTabButtonColor(tabName) {
  var tabButtons = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tabButtons.length; i++) {
    var button = tabButtons[i];
    var buttonTab = button.getAttribute("data-tab");
    button.classList.remove("active");
    if (buttonTab === tabName) {
      button.classList.add("active", buttonTab);
    }
  }
}

showTab(currentTab);


