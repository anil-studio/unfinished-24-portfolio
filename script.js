if (window.location.pathname === '/en' || window.location.pathname === '/') {
  // Code pour la version anglaise de votre site ou la page d'accueil

  // COLOR SWITCH
  // Sélectionnez l'élément ".ui-toggle" avec l'attribut "light = 0"
  let uiToggleDark = document.querySelector('.ui_color-toggle_button[light="0"]');
  let uiToggleLight = document.querySelector('.ui_color-toggle_button[light="1"]');
  let elementsDark;
  let elementsLight;
  let currentTheme = $('.value_wrap').attr('theme');
  let newColor = currentTheme === '-1' ? '#393939' : '#ede0d4';

  uiToggleDark.addEventListener('click', function () {
    elementsDark = document.querySelectorAll('[theme="-1"]');
    elementsLight = document.querySelectorAll('[theme="1"]');
    elementsDark.forEach(function (element) {
      element.setAttribute('theme', '1');
    });
    elementsLight.forEach(function (element) {
      element.setAttribute('theme', '-1')
    });
    // Get the current theme of the element
    currentTheme = $('.value_wrap').attr('theme');
    // Set the new color based on the current theme
    newColor = currentTheme === '-1' ? '#393939' : '#ede0d4';
    console.log(newColor);
  });
  uiToggleLight.addEventListener('click', function () {
    elementsDark = document.querySelectorAll('[theme="-1"]');
    elementsLight = document.querySelectorAll('[theme="1"]');
    elementsDark.forEach(function (element) {
      element.setAttribute('theme', '1');
    });
    elementsLight.forEach(function (element) {
      element.setAttribute('theme', '-1')
    });
    // Get the current theme of the element
    currentTheme = $('.value_wrap').attr('theme');
    // Set the new color based on the current theme
    newColor = currentTheme === '-1' ? '#393939' : '#ede0d4';
    console.log(newColor);
  });

  /*// LENIS SMOOTH SCROLL -----------------------------------------*/

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  let lenis;
  if (Webflow.env("editor") === undefined) {
    lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.80,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false
    });

    requestAnimationFrame(raf);
  }
  $("[data-lenis-start]").on("click", function () {
    lenis.start();
  });
  $("[data-lenis-stop]").on("click", function () {
    lenis.stop();
  });
  $("[data-lenis-toggle]").on("click", function () {
    $(this).toggleClass("stop-scroll");
    if ($(this).hasClass("stop-scroll")) {
      lenis.stop();
    } else {
      lenis.start();
    }
  });

  /* CONTACT REAVEAL ----------------------------------------- */
  let contactHeadWords = new SplitType('.contact_heading_text--fs1', {
    types: 'words',
    tagName: 'span'
  })

  const contactTL = gsap.timeline({ paused: true });
  contactTL.from(".contact_wrap", {
    autoAlpha: 0,
    duration: 0.0001,
    ease: "power3.inOut"
  })

  contactTL.from(".contact_panel", {
    scale: 0.4,
    duration: 1,
    ease: "expo.inOut"
  }, ">");

  contactTL.from(".contact_panel.is-middle", {
    autoAlpha: 0,
    z: -300,
    yPercent: -20,
    rotateX: 90,
    duration: 1,
    ease: "expo.inOut"
  }, "<");

  contactTL.from(".contact_panel.is-left", {
    autoAlpha: 0,
    transformOrigin: "50%, 0%",
    z: 100,
    rotateY: "1.8rad",
    duration: 1,
    ease: "expo.inOut"
  }, "<");

  contactTL.from(".contact_panel.is-right", {
    autoAlpha: 0,
    transformOrigin: "50%, 0%",
    z: 100,
    rotateY: "-1.8rad",
    duration: 1,
    ease: "expo.inOut"
  }, "<");

  contactTL.from(".contact_panel.is-small-left", {
    autoAlpha: 0,
    xPercent: 20,
    rotateY: "1.8rad",
    duration: 1,
    ease: "expo.inOut"
  }, "<0.2");

  contactTL.from(".contact_panel.is-small-right", {
    autoAlpha: 0,
    xPercent: -20,
    rotateY: "-1.8rad",
    duration: 1,
    ease: "expo.inOut"
  }, "<");

  contactTL.from(".contact_heading_text--fs1 .contact_text_word", {
    autoAlpha: 0,
    yPercent: 100,
    z: -300,
    rotateX: -30,
    stagger: 0.1,
    duration: 1.2,
    ease: "expo.inOut"
  }, "<0.3")

  contactTL.from(".contact_close", {
    autoAlpha: 0,
    duration: 0.8,
    ease: "power3.inOut"
  }, "<0.2")

  contactTL.from(".contact_socials_contain, .contact_form_contain, .contact_info--cd12-cp6", {
    autoAlpha: 0,
    duration: 1.2,
    ease: "expo.inOut"
  }, "<0.4")

  $(document).on("click", "[data-contact-btn]", function () {
    contactTL.play();
  });

  $(document).on("click", "[data-contact-close]", function () {
    contactTL.reverse();
  });

  /* HERO SECTION GSAP ANIMATIONS ----------------------------------------- */
  const heroWrap = document.querySelector(".hero_wrap");
  const heroHeadlines = document.querySelectorAll(".hero_heading--fs2 .hero_heading_line");

  let heroHeadlinesSplit = new SplitType('.hero_heading--fs2', {
    types: 'lines',
    tagName: 'span'
  })
  let heroSublinesSplit = new SplitType('.hero_subheading_text', {
    types: 'lines',
    tagName: 'span'
  })

  let heroTL = gsap.timeline();

  // SET display heading for loading animation
  heroTL.set('.hero_display_text--fs0', { scale: 0.5, yPercent: -10, autoAlpha: 1 });

  //SET hero logo autoAlpha to 0
  heroTL.set('.nav_logo_svg', { autoAlpha: 0, yPercent: -100 })

  // Display heading stagger char animation
  heroTL.from('.hero_display_text--fs0 .hero_display_char', {
    autoAlpha: 0,
    yPercent: -100,
    transformOrigin: "50% 100%",
    z: -300,
    rotationX: 120,
    //rotationY: "0.5rad",
    duration: 2.5,
    ease: 'back.out',
    stagger: { amount: 0.5, from: "center" }
  }, 0.4);
  // Display heading scale up
  heroTL.to('.hero_display_text--fs0', { scale: 1, yPercent: 0, duration: 2, ease: 'expo.inOut' },
    "<2.2");
  // Background line panel scale up
  heroTL.from('.line_panel', {
      autoAlpha: 0,
      scaleY: 0,
      duration: 2,
      stagger: {
        amount: 1,
        from: "center"
      }
    },
    "<0.7");
  // Heading stagger line fade up
  heroTL.from(heroHeadlines, {
    autoAlpha: 0,
    yPercent: 120,
    duration: 1.5,
    ease: 'expo.out',
    stagger: 0.1
  }, "<0.25");
  // Paragraph stagger line fade up
  heroTL.from('.hero_subheading_text .hero_subheading_line', {
    autoAlpha: 0,
    yPercent: 120,
    duration: 1.5,
    ease: 'expo.out',
    stagger: 0.1
  }, "<");
  // Heading and paragraph rotate
  heroTL.from('.hero_heading--fs2, .hero_subheading_text', {
    rotateX: -60,
    ease: 'expo.out',
    duration: 1.5,
  }, "<");
  // UI elements fade up
  heroTL.from('.nav_button, .ui_wrap, .hero_scroll_text, .hero_scroll_round', {
    autoAlpha: 0,
    yPercent: 10,
    duration: 1.5,
    ease: 'expo.out',
    onComplete: activateHeroScrollTL
  }, "<0.1")

  /* HERO SECTION -- WHILE SCROLLING --------------------------------------- */

  function activateHeroScrollTL() {

    let heroScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: heroWrap,
        start: "05% top",
        end: "bottom 10%",
        scrub: 2,
        ease: 'expo.inOut',
        // markers: true
      }
    });

    heroScrollTL.to(heroHeadlines, {
      autoAlpha: 0,
      yPercent: -100,
      duration: 0.2,
      stagger: 0.02
    })

    heroScrollTL.to('.hero_scroll_round', { y: '-38vh', duration: 1 }, "<")

    heroScrollTL.to('.hero_display_text--fs0', { scale: 0.5, yPercent: -20, duration: 2 }, "<")

    heroScrollTL.to('.hero_subheading_text .hero_subheading_line', {
      yPercent: -200,
      autoAlpha: 0,
      duration: 1.2,
      stagger: 0.02
    }, "<0.5")

    heroScrollTL.to('.hero_scroll_round', {
      x: '-47vw',
      duration: 1,
      rotate: -360
    }, "<0.2")

    heroScrollTL.to('.hero_display_text--fs0 .hero_display_char', {
      autoAlpha: 0,
      yPercent: -100,
      transformOrigin: "50% 0%",
      z: -300,
      rotationX: 30,
      duration: 0.8,
      stagger: { each: 0.05, from: "end" }
    }, "<")

    /*heroScrollTL.to('.hero_scroll_round', {
      backgroundColor: "#393939",
      borderRadius: "0% 0%",
      scrub: 1,
      duration: 1
    }, "<")*/

    heroScrollTL.to('.hero_scroll_round', {
      "--theme--color-plus": newColor,
      borderRadius: "0% 0%",
      scrub: 1,
      duration: 1
    }, "<");
    console.log("scroll" + newColor);

    heroScrollTL.to('.nav_logo_svg', { autoAlpha: 1, yPercent: 0, duration: 0.5 }, "<")

    heroScrollTL.to('.hero_scroll_round', { scale: 120, rotate: 120, scrub: 1, duration: 1.5 },
      ">0.2")

    heroScrollTL.to(heroWrap, {
        backgroundColor: newColor,
        duration: 0.1
      },
      "<0.2")

    heroScrollTL.to('.hero_scroll_round', {
      autoAlpha: 0,
      duration: 0.5
    }, ">")
  }

  /* VALUE CONTEXT -- WHILE SCROLLING --------------------------------------- */
  let vContextTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.value_header_heading--fs1-tw1.is-custom',
      start: 'top bottom',
      toggleActions: 'play none none none',
      //markers: true
    }
  })

  vContextTL.from('.value_header_heading--fs1-tw1.is-custom .value_heading_line', {
    autoAlpha: 0,
    yPercent: -250,
    rotateX: 70,
    transformOrigin: '50% 100%',
    z: -300,
    duration: 2.5,
    ease: 'power3.inOut',
    stagger: 0.1
  });

  vContextTL.fromTo('.value_header_img-height', {
    autoAlpha: 0,
    yPercent: 50,
  }, {
    autoAlpha: 1,
    yPercent: -12,
    z: 0,
    duration: 2,
    ease: 'power3.out'
  }, '>-1')

  vContextTL.from('.value_context_subheader--cd4-ct5-st8-cp5-sp2', {
    autoAlpha: 0,
    yPercent: 100,
    ease: 'power3.inOut',
    duration: 2,
    ease: 'power3.out'
  }, '<0.3');

  let vContextScrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".value_context_sticky-wrap",
      start: "20% center",
      end: "bottom top",
      scrub: 2,
      ease: 'expo.inOut'
    }
  });

  vContextScrollTL.to('.value_heading_line.is-1', {
    xPercent: -4,
    rotateY: "-0.0125rad",
    duration: 4
  })

  vContextScrollTL.to('.value_heading_line.is-2', {
    xPercent: 4,
    rotateY: "0.0125rad",
    duration: 4
  }, "<")

  vContextScrollTL.to('.value_header_img-height', { yPercent: -150, duration: 3 }, "<")

  vContextScrollTL.to('.value_context_subheader--cd4-ct5-st8-cp5-sp2', {
    y: "-60vh",
    duration: 3
  }, "<")

  /* VALUE ANSWER -- WHILE SCROLLING --------------------------------------- */
  let vAnswerTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.value_header_heading--fs1-tw1.is-unique',
      start: 'top bottom',
      toggleActions: 'play none none none',
      //markers: true
    }
  })

  vAnswerTL.set('.value_header_heading--fs1-tw1.is-unique', { xPercent: 35 })

  vAnswerTL.set('.value_unique_word.is-unique-word', { autoAlpha: 0 })

  vAnswerTL.from('.value_header_heading--fs1-tw1.is-unique .value_heading_word', {
    autoAlpha: 0,
    yPercent: 300,
    rotateX: -60,
    transformOrigin: '50% 0% -150',
    z: -500,
    duration: 2,
    ease: 'expo.inOut',
    stagger: 0.05
  }, 0.2)

  let vAnswerScrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".value_answer_sticky-wrap--ct8-cp6",
      start: "30% center",
      end: "bottom center",
      scrub: 2,
      ease: "expo.inOut",
    }
  })

  vAnswerScrollTL.to(".value_header_heading--fs1-tw1.is-unique", {
    xPercent: 0,
    duration: 4
  })

  vAnswerScrollTL.from(".value_unique_word.is-unique-word", {
    rotateX: -70,
    xPercent: 40,
    yPercent: 200,
    z: -200,
    transformOrigin: "50% 000%",
    duration: 2
  }, "<")

  vAnswerScrollTL.from(".value_unique_word.is-unique-word", {
    autoAlpha: 0,
    duration: 2
  }, "<0.5")

  vAnswerScrollTL.from(".value_answer_text", {
    autoAlpha: 0,
    yPercent: 30,
    stagger: 1,
    duration: 2
  }, "<1")

  /* EXPRESSION -- WHILE SCROLLING --------------------------------------- */

  let expressionLinesSplit = new SplitType('.expression_paragraph_text', {
    types: 'lines',
    tagName: 'span'
  })

  let expressionTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.expression_header--gd1-ct12-cp6',
      start: 'top bottom',
      toggleActions: 'play none none none',
      //markers: true
    }
  })

  expressionTL.from('.expression_header_text-wrap', {
    autoAlpha: 0,
    yPercent: 150,
    rotateX: -70,
    transformOrigin: '50% 100%',
    z: -300,
    duration: 2,
    ease: 'power3.inOut',
    stagger: 0.1
  }, "<0.1");

  expressionTL.from('.expression_paragraph_text .expression_text_line', {
    autoAlpha: 0,
    yPercent: 300,
    rotate: 20,
    duration: 1,
    ease: "expo.Out",
    duration: 1,
    stagger: 0.1
  }, "<0.6")

  expressionTL.from(".expression_video-wrap--ct5-sd7-st8-cp6-sp2-rp2", {
    autoAlpha: 0,
    yPercent: 50,
    transformOrigin: "0% 100%",
    rotateX: -2,
    duration: 2,
    ease: "power3.inout"
  }, "<0.2")

  expressionTL.from(
    ".expression_plus--sd8-st7-sp1, .expression_subcontent--sd9-st8-cd3-ct4-cp4-sp2", {
      autoAlpha: 0,
      yPercent: 50,
      duration: 1.5,
      ease: "power3.inout"
    }, "<0.4")

  /* WORD -- WHILE SCROLLING --------------------------------------- */

  let wordTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".word_wrap-sticky",
      start: "-2% top",
      end: "bottom -170%",
      scrub: 2,
      ease: 'power3.inOut',
      duration: 2
    }
  })

  wordTL.to(".word_img-height", {
    yPercent: 240,
    duration: 3
  })

  wordTL.to(".word_text_letter.is-w", {
    autoAlpha: 0,
    transformOrigin: "50% 100%",
    yPercent: -100,
    rotate: -30,
    // xPercent: -100,
    rotateX: 60,
    z: -300,
    duration: 5
  }, "<")

  wordTL.to(".word_text_letter.is-r", {
    autoAlpha: 0,
    transformOrigin: "50% 100%",
    // yPercent: -200,
    rotate: -50,
    xPercent: 100,
    rotateX: -60,
    z: -300,
    duration: 5
  }, "<0.05")

  wordTL.to(".word_text_letter.is-k", {
    autoAlpha: 0,
    transformOrigin: "50% 100%",
    rotate: -70,
    xPercent: 500,
    rotateX: 60,
    z: -300,
    duration: 5
  }, "<0.05")

  wordTL.to(".word_img-height", {
    autoAlpha: 0,
    rotate: 30,
    rotateX: 160,
    z: -500,
    duration: 1.5
  }, "<")

  wordTL.to(".word_text_letter.is-o", {
    autoAlpha: 0,
    transformOrigin: "50% 100%",
    // yPercent: -300,
    rotate: -20,
    xPercent: 200,
    rotateX: -180,
    z: 400,
    duration: 8
  }, "<0.05")

  wordTL.to(".word_bg-color", {
      scale: 0,
      // color: "#ece2d2",
      yPercent: 30,
      rotate: 180,
      rotateX: 160,
      borderRadius: "100vw",
      duration: 3
    },
    0.4)

  /* WORK -- SWIPER  --------------------------------------- */

  const swiperWork = new Swiper('.swiper.is-work', {
    direction: "horizontal",
    mousewheel: false,
    loop: true,
    keyboard: true,
    speed: 2000,
    effect: 'fade', // Set the effect to 'fade'

    navigation: {
      nextEl: ".work_button_right",
      prevEl: ".work_button_left"
    }
  })

  swiperWork.on("slideChangeTransitionStart", function () {
    // Create a GSAP timeline
    let slideStartTL = gsap.timeline();

    slideStartTL.to(swiperWork.slides[swiperWork.previousIndex].querySelector(
      ".work_video_heading"), {
      autoAlpha: 0,
      yPercent: -100,
      ease: "expo.inOut",
      duration: 1
    })

    slideStartTL.to(swiperWork.slides[swiperWork.previousIndex].querySelector(
      ".work_visual_video-wrap"), {
      autoAlpha: 0,
      yPercent: -40,
      rotateX: 70,
      z: -400,
      ease: "expo.inOut",
      duration: 1.5
    }, "<0.1")

    slideStartTL.to(swiperWork.slides[swiperWork.previousIndex].querySelectorAll(
      ".work_visual_paragraph, .work_text_tags, .work_text_paragraph, .button_cta_text, .work_text_tools, .work_visual_ident, .work_visual_year"
    ), {
      autoAlpha: 0,
      y: "-5rem",
      ease: "expo.inOut",
      duration: 1.5,
      stagger: 0.05
    }, "<")

    // ACTIVE ---------------------------------------

    slideStartTL.fromTo(swiperWork.slides[swiperWork.activeIndex].querySelector(
      ".work_visual_video-wrap"), {
      autoAlpha: 0,
      yPercent: 200,
      rotateX: -60,
      z: -500,
      ease: "expo.inOut",
      duration: 1.5
    }, {
      autoAlpha: 1,
      yPercent: 0,
      rotateX: 0,
      z: 0
    }, 1)

    slideStartTL.fromTo(swiperWork.slides[swiperWork.activeIndex].querySelector(
      ".work_video_heading"), {
      autoAlpha: 0,
      yPercent: 50,
      ease: "expo.inOut",
      duration: 1.5
    }, {
      autoAlpha: 1,
      yPercent: 0
    }, "<0.5")

    slideStartTL.fromTo(swiperWork.slides[swiperWork.activeIndex].querySelectorAll(
      ".work_visual_paragraph, .work_text_tags, .work_text_paragraph, .button_cta_text, .work_text_tools, .work_visual_ident, .work_visual_year"
    ), {
      autoAlpha: 0,
      y: "2rem",
      ease: "expo.inOut",
      duration: 2
    }, {
      autoAlpha: 1.5,
      y: "0rem",
      stagger: 0.025
    }, "<")

  });

  swiperWork.on("slideChangeTransitionEnd", function () {
    // Create a GSAP timeline
    let slideEndTL = gsap.timeline();
  });

  /* PROCESS  --------------------------------------- */

  let processlinesSplit = new SplitType('.process_paragraph_text', {
    types: 'lines',
    tagName: 'span'
  })

  let processTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".process_wrap",
      start: "top 80%",
      end: "20% bottom",
      toggleActions: "play none none none",
    }
  })

  processTL.from('.process_heading_text--fs0 .process_text_letter', {
    autoAlpha: 0,
    yPercent: 100,
    duration: 1.5,
    ease: "expo.inOut",
    stagger: 0.1
  })

  processTL.from(".process_video_contain", {
    scale: 0.2,
    duration: 2.5,
    ease: "expo.inOut"
  }, "<1")

  processTL.from('.process_nb_text', {
    autoAlpha: 0,
    yPercent: 30,
    duration: 1.5,
    ease: "expo.inOut"
  }, "<0.5")

  processTL.from(".process_paragraph_text .process_text_line", {
    autoAlpha: 0,
    yPercent: 150,
    duration: 1.5,
    ease: "expo.inOut",
    stagger: 0.1
  }, "<")

  /* Footer SCROLL  --------------------------------------- */

  let footerTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer_wrap",
      start: "top 65%",
    }
  })

  footerTL.from(".footer_display_text--fs0 .footer_text_letter", {
    autoAlpha: 0,
    yPercent: 80,
    ease: "power3.inOut",
    duration: 1.2,
    stagger: { amount: 0.35, from: "center" }
  })

  footerTL.from(".footer_cta--cd4-ct6-sd5-st4-cp6 .button_cta", {
    autoAlpha: 0,
    yPercent: 150,
    rotateX: -95,
    z: -200,
    transformOrigin: "50% 0%",
    ease: "power3.inOut",
    duration: 1
  }, "<1")

  footerTL.from(
    ".footer_tools_text, .footer_fonts_text, .footer_copyright_text, .footer_social_link", {
      autoAlpha: 0,
      yPercent: 10,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.2
    }, "<0.5")
}
