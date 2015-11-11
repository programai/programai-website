(function(document) {
    var topMenuHidden = true;

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

    var adjustMenu = function() {
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

    window.addEventListener('resize', adjustMenu);
    window.addEventListener('orientationchange', adjustMenu);
})(document);
