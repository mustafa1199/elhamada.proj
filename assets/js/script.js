$( document ).ready(function() {

    $('#ourAgents .agents section').on('click', function(){
        /*agents*/
            /*fading code*/
        var ma= $(this).data('class');
        $('.agentActive').fadeOut(1000, function(){
            $(ma).fadeIn(1000).addClass('agentActive').siblings().removeClass('agentActive');
            });
        });
            /*agentInfo div sliding code */
        $('#ourAgents .agentCards').mouseenter( function(){
            $('#ourAgents .agentsDetails .agentInfo').css('left','0px');
        });
        $('#ourAgents .agentCards').mouseleave( function(){
            $('#ourAgents .agentsDetails .agentInfo').css('left','-420px');
        });
    /*Portfolio code*/
    /*gallery navigation*/
    $('#Portfolio .mainGallery .galleryLinks li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all'){
            $('#Portfolio .gallery img').fadeIn();
        }
        else{
            $('#Portfolio .gallery img').fadeOut();
            $($(this).data('class')).fadeIn();
        }
    });
//scroll to top button
    var toTopBtn = $('#scrollToTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(toTopBtn).fadeIn();
        } else {
            $(toTopBtn).fadeOut();
        }
        });
    
        $(toTopBtn).click(function () {
            $("html, body").animate({
            scrollTop: 0
            }, 500);
        });










});