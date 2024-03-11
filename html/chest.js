  var chestImage = document.getElementById("chestImage");
  var dropdownContent = document.getElementById("dropdownContent");
  var timeoutId;

  function showDropdown() {
    dropdownContent.style.display = "block";
    chestImage.src = "chestflipopen.png";
  }

  function hideDropdown() {
    timeoutId = setTimeout(function () {
      dropdownContent.style.display = "none";
      chestImage.src = "chestflipclosed.png";
    }, 500);
  }

  chestImage.addEventListener("mouseover", showDropdown);

  chestImage.addEventListener("mouseout", hideDropdown);

  dropdownContent.addEventListener("mouseover", function () {
    clearTimeout(timeoutId);
    showDropdown();
  });

  dropdownContent.addEventListener("mouseout", hideDropdown);
