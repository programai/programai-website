(function(window, document, undefined) {
  var topMenuHidden = true;
  var mainMenuHidden = true;

  document.querySelector('#toggle-top-menu').onclick = function(e) {
    var menuButton = e.target;

    if (topMenuHidden) {
      document.querySelector('#top-menu .menu').style.display = 'block';
      menuButton.className = 'menu-toggled';
    } else {
      document.querySelector('#top-menu .menu').style.display = 'none';
      menuButton.className = '';
    }

    topMenuHidden = ! topMenuHidden;
  };

  document.getElementById('toggle-main-menu').onclick = function(e) {
    var menuButton = e.target;

    if (mainMenuHidden) {
      document.querySelector('#main-menu .menu').style.transform = 'translateX(0)';
      menuButton.className = 'menu-toggled';
    } else {
      document.querySelector('#main-menu .menu').style.transform = '';
      menuButton.className = '';
    }

    mainMenuHidden = !mainMenuHidden;
  };

  var adjustTopMenu = function() {
    var screenWidth = document.body.clientWidth;

    if (screenWidth < 480) {
      if (topMenuHidden) {
        document.querySelector('#top-menu .menu').style.display = 'none';
      }
    } else {
      var displayStatus = 
        document.querySelector('#top-menu .menu').style.display;

      if (displayStatus === 'none') {
        document.querySelector('#top-menu .menu').style.display = 'block';
      }
    }
  };

  var adjustMainMenu = function() {
    var screenWidth = document.body.clientWidth;

    if (screenWidth < 480) {
      if (topMenuHidden) {
        document.querySelector('#top-menu .menu').style.display = 'none';
      }
    } else {
      var displayStatus = 
        document.querySelector('#top-menu .menu').style.display;

      if (displayStatus === 'none') {
        document.querySelector('#top-menu .menu').style.display = 'block';
      }
    }
  };

  window.addEventListener('resize', adjustTopMenu);
  window.addEventListener('orientationchange', adjustTopMenu);
})(window, document, undefined);
