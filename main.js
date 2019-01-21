fetch("nav2.html")
    .then(response => response.text())
    .then(html => {
        document.querySelector("#nav-container").innerHTML = html;
        window.mdc.autoInit();
        setupTopBar();
    });