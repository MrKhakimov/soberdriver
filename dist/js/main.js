$(document).ready((function(){AOS.init(),$(".mobile-nav-btn").click((function(e){e.preventDefault(),$(".dark-fn").addClass("opened"),$(".header-mobile-nav").addClass("opened"),$("html").addClass("overflowHidden")})),$(".menu-close").click((function(e){e.preventDefault(),$(".header-mobile-nav").removeClass("opened"),$(".dark-fn").removeClass("opened"),$("html").removeClass("overflowHidden")})),$(".dark-fn").click((function(){$(".header-mobile-nav").removeClass("opened"),$(this).removeClass("opened"),$("html").removeClass("overflowHidden")})),$(".arrow-btn").click((function(e){$(this).toggleClass("active"),$(".header-phones").slideToggle(300)})),$(document).mouseup((function(e){var o=$(".header-info");o.is(e.target)||0!==o.has(e.target).length||($(".header-phones").slideUp(200),$(".arrow-btn").removeClass("active"))})),$(document).on("click",'ul li a[href^="#"]',(function(e){e.preventDefault(),$(this).closest("li").addClass("active").closest("li").siblings("li").removeClass("active"),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)})),$(".top-banner-slide").owlCarousel({items:1,dots:!0,center:!0,nav:!1,loop:!0,grab:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,animateOut:"fadeOut"}),$(".resent-slider").owlCarousel({items:2,dots:!0,center:!1,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,margin:50,responsive:{0:{items:1,margin:0},700:{items:2,margin:40}}}),$(".button-up").click((function(){$("body,html").animate({scrollTop:0},1e3)})),$(".scroll-link").on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},1e3)})),$(".adresId").on("input",(function(e){$("#adresGet").val($(this).val()),$("#adresSpan").text($(this).val())}))}));
//# sourceMappingURL=main.js.map