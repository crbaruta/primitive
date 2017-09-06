(function($) { // Begin jQuery
    $(function() { // DOM ready

        // If a link has a dropdown, add sub menu toggle.
        $(".liv1 a:not(:only-child)").click(function(e) {
            //seleziono solo i tag a che hanno sotto menu, altrimenti il prevent default blocca anche il click tutti gli altri a
            e.preventDefault();
            //$(this).css("background-color","yellow");
            //risalgo il dom a selezionare l'elemento li per prelevarne l'id
            var itemLi = $(this).closest("li");
            var sectionId = itemLi.attr("id");
            // alert(sectionId);
            $("#"+sectionId).find(".nav-liv-2").toggle();

            /*if($("#"+sectionId).find(".nav-liv-2").hasClass('opened')){
                $("#"+sectionId).find(".nav-liv-2").removeClass('opened').toggle();
            }else{
                $("#"+sectionId).find(".nav-liv-2").addClass('opened').toggle();
            }
            */

            // tutti quelli del livello uno che non hanno
            // l'id devono essere chiusi
            //entrambe le istruzioni seguenti non pemettono al menu-dorpdaown nav-liv-3 di funzionare correttamente
            var notSectionId = $("li.liv1").not("#"+sectionId);
            var childrenSection = notSectionId.children(".nav-liv-2");
            //childrenSection.hide();
            //$(".nav-liv-2").parent(".liv1").not("#"+sectionId).hide();
            //$('.nav-liv-2').not($(this).siblings()).hide();

            //$('nav ul li:not(#'+contentPanelId+').liv1.ifsub .nav-liv-2').hide()

            e.stopPropagation();

        });


        // Secondo livello
/*
        $('.liv2 a:not(:only-child)').click(function(k) {
            k.preventDefault();
            //$(this).css("background-color","red");
            //$(this).closest('.liv2').find('.nav-liv-3').toggle();
            $(this).closest('.liv2').children('ul').toggle();


            k.stopPropagation();
        });
*/
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });

        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function(m) {
            m.preventDefault();
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery