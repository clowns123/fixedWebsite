var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subLinks = $('.submenu a');

subLinks.attr('class', 'icon-dot-circled');

menuLinks.click(function (e){
    e.preventDefault();
    menuItems.removeClass('menu-item-act');
    $(this).parent().addClass('menu-item-act');
});