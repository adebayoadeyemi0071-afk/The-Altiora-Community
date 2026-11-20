import './about.css';

import aboutHero from './assets/about-hero.jpg';
import ourStory from './assets/our-story.jpg';
import beliefs from './assets/beliefs.jpg';
import approach from './assets/approach.jpg';
import founders from './assets/founders.jpg';
import communityCta from './assets/community-cta.jpg';

export function renderAboutPage(): string {
  return `
    <main class="about-page">

      <!-- =====================================================
           ABOUT HERO
           ===================================================== -->

      <section
        class="about-hero"
        style="background-image: url('${aboutHero}')"
      >
        <div class="about-overlay"></div>

        <div class="about-hero-content">

          <h1>
            Growth is better
            <br />
            together<span>.</span>
          </h1>

          <p>
            Altiora is a growth community built to help you
            learn, build, connect and grow — with practical
            resources, meaningful conversations, real support
            and people who are moving forward too.
          </p>


        </div>
      </section>


      <!-- =====================================================
           OUR STORY
           ===================================================== -->

      <section
        id="our-story"
        class="about-image-section"
        style="background-image: url('${ourStory}')"
      >

        <div class="about-overlay dark"></div>

        <div class="about-section-content">
          <h2>
            A community
            <br />
            born from a shared dream.
          </h2>

          <p>
            Altiora started with a simple belief — growth is easier to sustain
            when you do not have to figure everything out alone. We are
            building a space where you can learn, build, connect with
            others and keep growing with purpose.
          </p>

        </div>
      </section>


      <!-- =====================================================
           WHAT WE BELIEVE
           ===================================================== -->

      <section class="beliefs-section">

        <div class="beliefs-copy">

          <span class="section-label">
            WHAT WE BELIEVE
          </span>

          <h2>
            Learn. Build. Connect.
            <br />
            Grow together<span>.</span>
          </h2>

          <p>
            We believe meaningful growth happens when learning, action,
            relationships and personal development work together.
          </p>

        </div>


        <div
          class="beliefs-image"
          style="background-image: url('${beliefs}')"
        >

          <div class="beliefs-overlay"></div>


          <div class="belief-items">

            <!-- Community First -->

            <div class="belief-item">

              <div class="white-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >

                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                  />

                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                  />

                  <path
                    d="M22 21v-2a4 4 0 0 0-3-3.87"
                  />

                  <path
                    d="M16 3.13a4 4 0 0 1 0 7.75"
                  />

                </svg>

              </div>


              <h3>
                Community First
              </h3>

              <p>
                People who learn, build, connect
                and grow together.
              </p>

            </div>


            <!-- Practical Learning -->

            <div class="belief-item">

              <div class="white-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >

                  <path
                    d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                  />

                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
                  />

                </svg>

              </div>


              <h3>
                Practical Learning
              </h3>

              <p>
                Useful knowledge.
                Practical opportunities.
              </p>

            </div>


            <!-- Greater Impact -->

            <div class="belief-item">

              <div class="white-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >

                  <path
                    d="M12 22V12"
                  />

                  <path
                    d="M12 12C12 6 16 3 21 3c0 6-3 9-9 9Z"
                  />

                  <path
                    d="M12 15C12 10 8 7 3 7c0 5 3 8 9 8Z"
                  />

                </svg>

              </div>


              <h3>
                Greater Impact
              </h3>

              <p>
                Personal growth.
                Shared impact.
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           OUR APPROACH
           ===================================================== -->

      <section
        class="about-image-section approach-section"
        style="background-image: url('${approach}')"
      >

        <div class="about-overlay dark"></div>

        <div class="about-section-content">

          <span class="section-label">
            OUR APPROACH
          </span>

          <h2>
            Learn. Build. Connect. Grow.
          </h2>

          <p>
            We bring together practical resources, honest conversations,
            meaningful connections and intentional support so you can
            turn what you learn into real progress.
          </p>

        </div>

      </section>


      <!-- =====================================================
           FOUNDERS
           ===================================================== -->

      <section class="founders-section">

        <div
          class="founders-image"
          style="background-image: url('${founders}')"
        >
        </div>


        <div class="founders-copy">

          <span class="section-label">
            THE FOUNDERS
          </span>

          <h2>
            Building a better
            <br />
            future, together<span>.</span>
          </h2>

          <p>
            We're building Altiora around a simple idea: everyone should have
            a place to learn, build, connect and grow with purpose —
            surrounded by people who are moving forward too.
          </p>

          <button
            type="button"
            class="about-button outline"
            data-coming-soon
          >
            Founders
          </button>

        </div>

      </section>


      <!-- =====================================================
           JOIN THE COMMUNITY CTA
           ===================================================== -->

      <section
        class="about-cta"
        style="background-image: url('${communityCta}')"
      >

        <div class="about-overlay dark"></div>

        <div class="cta-content">

          <span class="section-label">
            JOIN THE COMMUNITY
          </span>

          <h2>
            Grow. Connect. Make an Impact.
          </h2>

          <p>
            Join a community where you can learn, build, connect and grow —
            with people who are moving forward too.
          </p>

          <button
            type="button"
            class="about-button filled"
            data-talk-open
            aria-label="Open Altiora contact options"
          >
            Join Now →
          </button>

        </div>

      </section>

    </main>
  `;
}