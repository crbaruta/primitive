(function($) { // Begin jQuery
    $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            //dovrebe mantenere aperti i genitori degli elementi con classe .cur
            $('.nav-dropdown .cur').parents($(this)).show();
            e.stopPropagation();
        });
        /* // If a link has a dropdown, add sub menu toggle.
         $('ul.nav-dropdown li a:not(:only-child)').click(function(e) {
         $(this).siblings('.nav-dropdown-2').toggle();
         // Close one dropdown when selecting another
         $('.nav-dropdown-2').not($(this).siblings()).hide();
         $('.nav-dropdown-2').parents().show();
         e.stopPropagation();
         });*/

        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery