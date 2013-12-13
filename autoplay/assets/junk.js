$(document).ready(function () {
    // functions available on page load
    $( function() {

        // Toggle Library Issue View

        $('#toggle-issue-view').on('click', function( e ) {
            $('.library').toggleClass('grid');
            $(this).find('i').toggleClass('icon-list');
            $(this).find('i').toggleClass('icon-th-large');
        });

        // Show and hide TOC

        // $('.toc').addClass('visually-hidden');
        $('.btn-toc').on('click', function( e ) {
            $('.toc').toggleClass('active');
        });


        // Show and hide "jump to" menu

        $('.jump-to-button').on('click', function( e ) {
            $('.jump-to').toggleClass('active');
            $('.jump-to-links').toggleClass('visually-hidden');
        });

        $('.hide-social').on('click', function() {
            $('.global-header-social').removeClass("active");
        });

        //

        //show and hide drawer for mobile
        $('.btn-issue-nav').on('click', function ( e ) {
            e.preventDefault();
            $('body').toggleClass('nav-showing');
        });

        $('.btn-search').on('click', function( e ){
            var search = $('.search-main');
        
            $('body').toggleClass('nav-showing');
            search.show();
            $(search).find('input').focus();

            $(search).on('click', function( e, search ) {
                search.hide();
            });

            e.preventDefault();
        });

        // share menu display
        $('.show-share').on('click', function( e ){
            $(this).toggleClass('active');
            $('.nav-share').toggle();

            e.preventDefault();
        });
    
    });


});