function setupTopBar() {
    const topAppBar = document.querySelector('.mdc-top-app-bar').MDCTopAppBar;
    const drawer = document.querySelector('.mdc-drawer').MDCDrawer;

    topAppBar.setScrollTarget(document.querySelector('.main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });
}