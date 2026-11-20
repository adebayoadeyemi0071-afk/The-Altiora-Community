import './style.css';

import heroIllustration from './assets/growth new.png';

import { renderAboutPage } from './about';
import { renderBlogPage, setupBlogInteractions } from './blog';
import { renderCommunityPage } from './community';
import { renderHeader } from './header';
import { renderFooter } from './footer';
import { initializeTalkModal } from './talk-modal';
import { initializeComingSoon } from './coming-soon';
import { ALTIORA_FAVICON_SVG } from './site';


/* =========================================================
   DOCUMENT BRANDING
   ========================================================= */

document.title = 'Altiora';

const META_DESCRIPTION =
  'Altiora is a growth community where you can learn, build, connect and grow with purpose.';

const existingDescription =
  document.querySelector<HTMLMetaElement>('meta[name="description"]');

if (existingDescription) {
  existingDescription.content = META_DESCRIPTION;
} else {
  const descriptionMeta = document.createElement('meta');
  descriptionMeta.name = 'description';
  descriptionMeta.content = META_DESCRIPTION;
  document.head.appendChild(descriptionMeta);
}

const existingThemeColor =
  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

if (existingThemeColor) {
  existingThemeColor.content = '#F5EBDD';
} else {
  const themeColorMeta = document.createElement('meta');
  themeColorMeta.name = 'theme-color';
  themeColorMeta.content = '#F5EBDD';
  document.head.appendChild(themeColorMeta);
}

const existingFavicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

if (existingFavicon) {
  existingFavicon.href = `data:image/svg+xml,${encodeURIComponent(ALTIORA_FAVICON_SVG)}`;
  existingFavicon.type = 'image/svg+xml';
} else {
  const faviconLink = document.createElement('link');
  faviconLink.rel = 'icon';
  faviconLink.type = 'image/svg+xml';
  faviconLink.href = `data:image/svg+xml,${encodeURIComponent(ALTIORA_FAVICON_SVG)}`;
  document.head.appendChild(faviconLink);
}


/* =========================================================
   APP
   ========================================================= */

const app =
  document.querySelector<HTMLDivElement>('#app');


if (!app) {
  throw new Error(
    'Could not find the #app element.'
  );
}


/* =========================================================
   ROUTE HELPERS
   ========================================================= */

function getCurrentRoute(): string {

  const hash =
    window.location.hash
      .replace(/^#/, '')
      .trim()
      .toLowerCase();


  return hash || 'home';
}


/* =========================================================
   SHARED HEADER / NAVBAR
   ========================================================= */

/* =========================================================
   HOME PAGE
   ========================================================= */

function renderHomePage(): string {

  return `

    ${renderHeader()}


    <!-- =====================================================
         HERO
         ===================================================== -->

    <main
      id="home"
      class="hero-container"
    >

      <div class="hero-content">

        <h1>
          Learn. Build.<br />
          Connect. Grow<span class="dot">.</span>
        </h1>


        <p class="hero-subtitle">

          Wherever you are in your journey, Altiora gives you a place to
          learn what matters, build what you believe in, connect with
          people who get it, and keep growing with purpose.

        </p>

      </div>


      <div class="hero-image-wrapper">

        <img
          src="${heroIllustration}"
          alt="Growth Hub Path Illustration"
        />

      </div>

    </main>


    <!-- =====================================================
         JOURNEY
         ===================================================== -->

    <section
      id="journey"
      class="journey-section"
    >

      <div class="journey-header">

        <h2>
          Your Journey. Your Growth. Our Community
          <span class="dot">.</span>
        </h2>


        <p class="journey-intro">
          You do not have to figure everything out alone. Altiora brings
          together useful knowledge, practical action, meaningful
          connections and support for every stage of your growth.
        </p>

      </div>


      <div class="journey-timeline-container">


        <svg
          class="journey-curve-desktop"
          viewBox="0 0 1000 140"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >

          <path
            d="M 60,95 C 130,35 190,15 260,28 C 350,45 400,115 480,105 C 560,95 620,20 700,28 C 780,35 830,90 910,82 H 945"
            stroke="#D3C3B1"
            stroke-width="3"
            stroke-linecap="round"
          />

          <path
            d="M 938,75 L 952,82 L 938,89"
            stroke="#D3C3B1"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

        </svg>


        <div class="journey-steps">


          <!-- START -->

          <div class="step-card">

            <div class="icon-circle icon-circle-start">

              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292B29"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                />

                <circle
                  cx="12"
                  cy="7"
                  r="4"
                />

              </svg>

            </div>


            <div class="step-label">

              <span class="step-tag">
                START
              </span>

              <span class="step-subtag">
                Where you are
              </span>

            </div>


            <p class="step-desc">
              Every journey starts somewhere. You don't have
              to have it all figured out.
            </p>

          </div>


          <!-- CLARITY -->

          <div class="step-card">

            <div class="icon-circle icon-circle-clarity">

              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292B29"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />

              </svg>

            </div>


            <div class="step-num">
              01
            </div>


            <h3 class="step-title">
              CLARITY
            </h3>


            <p class="step-desc">
              Understand your situation, identify what matters
              and set clear goals.
            </p>

          </div>


          <!-- SUPPORT -->

          <div class="step-card">

            <div class="icon-circle icon-circle-support">

              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292B29"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <path
                  d="M17 21v-2a4 4 0 0 0-3-3.87"
                />

                <path
                  d="M7 21v-2a4 4 0 0 1 3-3.87"
                />

                <path
                  d="M16 3.13a4 4 0 0 1 0 7.75"
                />

                <circle
                  cx="12"
                  cy="7"
                  r="4"
                />

                <path
                  d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
                />

              </svg>

            </div>


            <div class="step-num">
              02
            </div>


            <h3 class="step-title">
              SUPPORT
            </h3>


            <p class="step-desc">
              Get guidance, encouragement and practical help
              from people who walk with you.
            </p>

          </div>


          <!-- GROWTH -->

          <div class="step-card">

            <div class="icon-circle icon-circle-growth">

              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292B29"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <path
                  d="M12 22V10"
                />

                <path
                  d="M12 10C12 6 8 4 4 4C4 8 7 12 12 12"
                />

                <path
                  d="M12 14C12 11 16 9 20 9C20 13 17 16 12 16"
                />

              </svg>

            </div>


            <div class="step-num">
              03
            </div>


            <h3 class="step-title">
              GROWTH
            </h3>


            <p class="step-desc">
              Take consistent action, build confidence and
              develop into who you're called to be.
            </p>

          </div>


          <!-- IMPACT -->

          <div class="step-card">

            <div class="icon-circle icon-circle-impact">

              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292B29"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <path
                  d="M4 22L12 2l8 20-8-5-8 5z"
                />

                <path
                  d="M12 2v15"
                />

              </svg>

            </div>


            <div class="step-num">
              04
            </div>


            <h3 class="step-title">
              IMPACT
            </h3>


            <p class="step-desc">
              Use your growth to make a difference and help
              others on their journey.
            </p>

          </div>


        </div>

      </div>

    </section>


    <!-- =====================================================
         WHAT WE DO
         ===================================================== -->

    <section class="what-we-do-section">

      <div class="wwd-header">
        <span class="wwd-label">
          WHAT WE DO
        </span>

        <h2>
          We help you learn, build, connect and grow
          <span class="dot">.</span>
        </h2>
      </div>

      <div class="carousel-layout">

        <!-- PREVIOUS -->
        <button
          class="carousel-arrow prev"
          aria-label="Previous card"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <!-- VIEWPORT -->
        <div class="carousel-viewport">
          <div class="carousel-track">

            <!-- CARD 1: LEARN -->
            <div class="carousel-card card-bg-1">
              <div class="card-columns">
                <div class="card-left">
                  <h3 class="card-title">
                    1. Learn
                  </h3>

                  <p class="card-desc">
                    Gain useful knowledge, practical skills and
                    perspectives that help you move forward.
                  </p>
                </div>

                <div class="card-right">
                  <p class="list-heading">
                    You can:
                  </p>

                  <ul class="card-list">
                    <li>Learn from practical resources and conversations</li>
                    <li>Discover ideas you can apply in real life</li>
                    <li>Learn from people with different experiences</li>
                    <li>Ask questions and gain new perspectives</li>
                    <li>Build knowledge that supports your next step</li>
                  </ul>

                  <p class="card-subtext">
                    Because growth starts with understanding what matters
                    and knowing what to do next.
                  </p>
                </div>
              </div>
            </div>

            <!-- CARD 2: BUILD -->
            <div class="carousel-card card-bg-2">
              <div class="card-columns">
                <div class="card-left">
                  <h3 class="card-title">
                    2. Build
                  </h3>

                  <p class="card-desc">
                    Turn what you learn into projects, skills and
                    meaningful work that moves your ideas forward.
                  </p>
                </div>

                <div class="card-right">
                  <p class="list-heading">
                    You can:
                  </p>

                  <ul class="card-list">
                    <li>Turn ideas into practical projects</li>
                    <li>Develop skills through action</li>
                    <li>Find people to build and collaborate with</li>
                    <li>Share your work and learn from feedback</li>
                    <li>Create opportunities from what you know</li>
                  </ul>

                  <p class="card-subtext">
                    Because progress becomes real when ideas are put
                    into action.
                  </p>
                </div>
              </div>
            </div>

            <!-- CARD 3: CONNECT -->
            <div class="carousel-card card-bg-3">
              <div class="card-columns">
                <div class="card-left">
                  <h3 class="card-title">
                    3. Connect
                  </h3>

                  <p class="card-desc">
                    Find people, conversations and opportunities that
                    make the journey less isolated and more meaningful.
                  </p>
                </div>

                <div class="card-right">
                  <p class="list-heading">
                    You can:
                  </p>

                  <ul class="card-list">
                    <li>Meet people with shared goals and interests</li>
                    <li>Have real conversations without the noise</li>
                    <li>Exchange ideas, experiences and opportunities</li>
                    <li>Build relationships that grow beyond one conversation</li>
                    <li>Find support when you need it</li>
                  </ul>

                  <p class="card-subtext">
                    Because the right people can change what you see,
                    what you try and what becomes possible.
                  </p>
                </div>
              </div>
            </div>

            <!-- CARD 4: GROW -->
            <div class="carousel-card card-bg-1">
              <div class="card-columns">
                <div class="card-left">
                  <h3 class="card-title">
                    4. Grow
                  </h3>

                  <p class="card-desc">
                    Keep moving with clarity, support and purpose as
                    you become the person you want to be.
                  </p>
                </div>

                <div class="card-right">
                  <p class="list-heading">
                    You can:
                  </p>

                  <ul class="card-list">
                    <li>Set clearer goals and direction</li>
                    <li>Take consistent action</li>
                    <li>Build confidence through progress</li>
                    <li>Learn from setbacks and keep going</li>
                    <li>Use your growth to create a positive impact</li>
                  </ul>

                  <p class="card-subtext">
                    Because growth is not a destination — it is an ongoing
                    journey we do better together.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- NEXT -->
        <button
          class="carousel-arrow next"
          aria-label="Next card"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div class="carousel-progress"></div>
      </div>
    </section>


    <!-- =====================================================
         UPCOMING PROGRAMS
         ===================================================== -->

    <section
      class="upcoming-programs-section"
    >

      <div class="upcoming-header-wrapper">

        <span class="upcoming-label">
          UPCOMING PROGRAMS
        </span>


        <div
          class="upcoming-label-underline"
        ></div>

      </div>


      <div class="upcoming-watermark">

        <h2>
          COMING SOON
        </h2>

      </div>


      <div class="upcoming-message">

        <p>
          Exciting programs are on the way.<br />
          Stay connected and be the first to know.
        </p>

      </div>


      <div
        class="upcoming-decoration"
        aria-hidden="true"
      >

        <svg
          viewBox="0 0 220 320"
          xmlns="http://www.w3.org/2000/svg"
        >

          <path
            d="M190 315C166 275 151 236 153 190C156 143 176 102 210 68"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          />

          <path
            d="M160 235C129 216 107 190 103 158C136 157 160 175 174 205C177 215 173 226 160 235Z"
            fill="currentColor"
          />

          <path
            d="M155 187C125 165 108 138 110 108C143 112 164 133 170 164C169 174 164 182 155 187Z"
            fill="currentColor"
          />

          <path
            d="M173 142C158 111 158 79 175 53C197 76 202 103 191 128C187 135 181 140 173 142Z"
            fill="currentColor"
          />

          <path
            d="M145 275C112 264 89 242 82 215C114 215 139 231 151 256C153 264 151 270 145 275Z"
            fill="currentColor"
          />

        </svg>

      </div>

    </section>


    ${renderFooter()}

  `;
}


/* =========================================================
   ABOUT INTERNAL SCROLL
   ========================================================= */

function setupAboutInteractions(): void {

  const scrollButtons =
    document.querySelectorAll<HTMLElement>(
      '[data-scroll-to]'
    );


  scrollButtons.forEach(
    (button) => {

      button.addEventListener(
        'click',
        () => {

          const targetId =
            button.dataset.scrollTo;


          if (!targetId) {
            return;
          }


          const target =
            document.getElementById(
              targetId
            );


          if (!target) {
            return;
          }


          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

        }
      );

    }
  );

}


/* =========================================================
   PAGE REVEAL
   ========================================================= */

function setupRevealAnimations(): void {

  const revealElements =
    document.querySelectorAll<HTMLElement>(
      [
        '.step-card',
        '.carousel-card',
        '.upcoming-programs-section',
        '.altiora-footer',
        '.about-image-section',
        '.beliefs-section',
        '.founders-section',
        '.about-cta',
        '.blog-page',
        '.blog-row',
        '.community-intro',
        '.community-pillar',
        '.community-moments',
        '.community-statement',
        '.community-cta',
      ].join(', ')
    );


  if (!revealElements.length) {
    return;
  }


  if (
    !('IntersectionObserver' in window)
  ) {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          'visible'
        );

      }
    );

    return;
  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (!entry.isIntersecting) {
              return;
            }


            entry.target.classList.add(
              'visible'
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.15,
        rootMargin:
          '0px 0px -50px 0px',
      }
    );


  revealElements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu(): void {
  const menuButton = document.querySelector<HTMLButtonElement>('#mobile-menu-toggle');
  const mobileNavigation = document.querySelector<HTMLElement>('#mobile-navigation');
  const mobileLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-nav-links a');

  if (!menuButton || !mobileNavigation) return;

  const closeMenu = (): void => {
    menuButton.classList.remove('open');
    mobileNavigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    mobileNavigation.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mobile-menu-open');
  };

  const openMenu = (): void => {
    menuButton.classList.add('open');
    mobileNavigation.classList.add('open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation menu');
    mobileNavigation.setAttribute('aria-hidden', 'false');
    document.body.classList.add('mobile-menu-open');

    const firstLink = mobileNavigation.querySelector<HTMLAnchorElement>('.mobile-nav-links a');
    firstLink?.focus();
  };

  menuButton.addEventListener('click', () => {
    mobileNavigation.classList.contains('open') ? closeMenu() : openMenu();
  });

  mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}


/* =========================================================
   CAROUSEL
   ========================================================= */

function setupCarousel(): void {

  const track =
    document.querySelector<HTMLElement>(
      '.carousel-track'
    );


  const cards =
    document.querySelectorAll<HTMLElement>(
      '.carousel-card'
    );


  const prevBtn =
    document.querySelector<HTMLButtonElement>(
      '.carousel-arrow.prev'
    );


  const nextBtn =
    document.querySelector<HTMLButtonElement>(
      '.carousel-arrow.next'
    );


  const dotsContainer =
    document.querySelector<HTMLElement>(
      '.carousel-progress'
    );


  /*
   * Not every page has the carousel.
   * About and Blog safely return here.
   */

  if (
    !track ||
    !cards.length ||
    !prevBtn ||
    !nextBtn ||
    !dotsContainer
  ) {

    return;

  }


  let currentIndex = 0;

  let timer:
    number | undefined;


  /* =======================================================
     DOTS
     ======================================================= */

  dotsContainer.innerHTML = '';


  cards.forEach(
    (_, index) => {

      const dot =
        document.createElement(
          'button'
        );


      dot.type = 'button';


      dot.classList.add(
        'indicator-dot'
      );


      dot.setAttribute(
        'aria-label',
        `Go to slide ${index + 1}`
      );


      if (index === 0) {

        dot.classList.add(
          'active'
        );

      }


      dotsContainer.appendChild(
        dot
      );

    }
  );


  const dots =
    dotsContainer.querySelectorAll<HTMLButtonElement>(
      '.indicator-dot'
    );


  /* =======================================================
     UPDATE
     ======================================================= */

  function updateCarousel(): void {

    const maxIndex =
      Math.max(
        0,
        cards.length - 1
      );


    if (
      currentIndex >
      maxIndex
    ) {

      currentIndex =
        maxIndex;

    }


    if (
      currentIndex < 0
    ) {

      currentIndex = 0;

    }


    const card =
      cards[0];


    const cardWidth =
      card.offsetWidth;


    const gap =
      parseFloat(
        window.getComputedStyle(
          track
        ).gap
      ) || 0;


    const move =
      currentIndex *
      (cardWidth + gap);


    track.style.transform =
      `translateX(-${move}px)`;


    dots.forEach(
      (dot, index) => {

        dot.classList.toggle(
          'active',
          index === currentIndex
        );

      }
    );


    prevBtn.style.opacity =
      currentIndex === 0
        ? '0.3'
        : '1';


    prevBtn.style.pointerEvents =
      currentIndex === 0
        ? 'none'
        : 'auto';


    nextBtn.style.opacity =
      currentIndex === maxIndex
        ? '0.3'
        : '1';


    nextBtn.style.pointerEvents =
      currentIndex === maxIndex
        ? 'none'
        : 'auto';

  }


  /* =======================================================
     NEXT
     ======================================================= */

  function nextCard(): void {

    const maxIndex =
      Math.max(
        0,
        cards.length - 1
      );


    if (
      currentIndex <
      maxIndex
    ) {

      currentIndex++;

    } else {

      currentIndex = 0;

    }


    updateCarousel();

  }


  /* =======================================================
     PREVIOUS
     ======================================================= */

  function prevCard(): void {

    if (
      currentIndex > 0
    ) {

      currentIndex--;

      updateCarousel();

    }

  }


  /* =======================================================
     AUTOPLAY
     ======================================================= */

  function startTimer(): void {

    if (
      timer !== undefined
    ) {

      window.clearTimeout(
        timer
      );

    }


    timer =
      window.setTimeout(
        () => {

          nextCard();

          startTimer();

        },
        4000
      );

  }


  function resetInteraction(): void {

    startTimer();

  }


  /* =======================================================
     EVENTS
     ======================================================= */

  nextBtn.addEventListener(
    'click',
    () => {

      nextCard();

      resetInteraction();

    }
  );


  prevBtn.addEventListener(
    'click',
    () => {

      prevCard();

      resetInteraction();

    }
  );


  dots.forEach(
    (dot, index) => {

      dot.addEventListener(
        'click',
        () => {

          currentIndex =
            Math.min(
              index,
              cards.length - 1
            );


          updateCarousel();

          resetInteraction();

        }
      );

    }
  );


  /* =======================================================
     RESIZE
     ======================================================= */

  window.addEventListener(
    'resize',
    updateCarousel
  );


  /* =======================================================
     SWIPE
     ======================================================= */

  let touchStartX = 0;

  let touchEndX = 0;


  track.addEventListener(
    'touchstart',
    (event) => {

      touchStartX =
        event.changedTouches[0]
          .screenX;


      if (
        timer !== undefined
      ) {

        window.clearTimeout(
          timer
        );

      }

    },
    {
      passive: true,
    }
  );


  track.addEventListener(
    'touchend',
    (event) => {

      touchEndX =
        event.changedTouches[0]
          .screenX;


      const threshold = 40;


      if (
        touchStartX -
          touchEndX >
        threshold
      ) {

        nextCard();

      } else if (
        touchEndX -
          touchStartX >
        threshold
      ) {

        prevCard();

      }


      resetInteraction();

    },
    {
      passive: true,
    }
  );


  /* =======================================================
     INITIALIZE
     ======================================================= */

  updateCarousel();

  startTimer();

}


/* =========================================================
   ROUTER
   ========================================================= */

function renderPage(): void {

  const route =
    getCurrentRoute();


  /* =======================================================
     ABOUT
     ======================================================= */

  if (route === 'about') {

    app.innerHTML = `
      ${renderHeader()}
      ${renderAboutPage()}
      ${renderFooter()}
    `;


    setupPageInteractions();

    setupAboutInteractions();

    return;
  }


  /* =======================================================
     BLOG
     =======================================================

     ACTIVE

     blog.ts is responsible for importing blog.css.
     ======================================================= */

  if (route === 'blog') {

    app.innerHTML = `
      ${renderHeader()}
      ${renderBlogPage()}
      ${renderFooter()}
    `;


    setupPageInteractions();
    setupBlogInteractions();

    return;
  }


  /* =======================================================
     COMMUNITY
     ======================================================= */

  if (route === 'community') {

    app.innerHTML = `
      ${renderHeader()}
      ${renderCommunityPage()}
      ${renderFooter()}
    `;

    setupPageInteractions();

    return;
  }



  /* =======================================================
     HOME
     ======================================================= */

  app.innerHTML =
    renderHomePage();


  setupPageInteractions();

}


/* =========================================================
   PAGE INTERACTIONS
   ========================================================= */

function setupPageInteractions(): void {

  setupMobileMenu();

  setupRevealAnimations();

  setupCarousel();

}


/* =========================================================
   ROUTE LISTENER
   ========================================================= */

window.addEventListener(
  'hashchange',
  () => {

    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });

    renderPage();

  }
);


/* =========================================================
   INITIAL PAGE
   ========================================================= */

initializeTalkModal();
initializeComingSoon();
renderPage();