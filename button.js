  function toggleMenu(menuIndex) {
    // Скрыть все меню, кроме выбранного
    for (var i = 1; i <= 3; i++) {
      var menuButton = document.getElementById("menu" + i);
      var menuItems = document.getElementById("menu" + i + "-items");
      if (i === menuIndex) {
        menuButton.classList.add("active");
        menuItems.style.display = "block";
      } else {
        menuButton.classList.remove("active");
        menuItems.style.display = "none";
      }
    }
  }
