var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subLinks = $('.submenu a');
var boardItems = $('.board li');
var section = $('.board section');
var tab = $('.tab');

subLinks.attr('class', 'icon-dot-circled');
boardItems.attr('class', 'icon-dot-circled');

menuLinks.click(function (e){
    e.preventDefault();
    menuItems.removeClass('menu-item-act');
    $(this).parent().addClass('menu-item-act');
});

tab.click(function(e){
    e.preventDefault();
    section.removeClass('board-act');
    $(this).parent().parent().addClass('board-act')
});