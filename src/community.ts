import './community.css';

import { ALTIORA_COMMUNITY_LINK, SOCIAL_LINKS } from './site';

import communityHero from './assets/community-hero.jpg';
import communityConnection from './assets/community-connection.jpg';
import communityLearning from './assets/community-learning.jpg';
import communitySupport from './assets/community-support.jpg';
import communityImpact from './assets/community-impact.jpg';
import communityMoments from './assets/community-moments.jpg';
import communityCta from './assets/community-cta.jpg';


/**
 * Altiora Community page
 *
 * Visual direction:
 * - No human photography
 * - Abstract objects / illustrations that represent connection
 * - Cream, charcoal and terracotta palette
 * - Editorial, minimal and spacious layout
 * - Uses the existing shared navbar from main.ts
 */
export function renderCommunityPage(): string {
  return `
    <main class="community-page">

      <!-- =====================================================
           COMMUNITY HERO
           ===================================================== -->
      <section
        class="community-hero"
        style="background-image: url('${communityHero}')"
      >
        <div class="community-hero-overlay"></div>

        <div class="community-hero-content">

          <h1>
            Real connection.<br />
            Shared growth<span>.</span>
          </h1>

          <p>
            A space to connect with people, ideas and opportunities
            that move you forward — because growth becomes greater
            when we grow together.
          </p>

          <a
            href="${ALTIORA_COMMUNITY_LINK}"
            class="community-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Altiora Community on WhatsApp"
          >
            Explore the Community <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <!-- =====================================================
           INTRO / CONNECTION
           ===================================================== -->
      <section class="community-intro" id="why-join">
        <div class="community-intro-copy">
          <span class="community-label">WHY COMMUNITY</span>

          <h2>
            More than just<br />
            being connected<span>.</span>
          </h2>

          <p>
            Altiora is built around meaningful connection — the kind
            that turns conversations into ideas, ideas into action,
            and individual progress into collective impact.
          </p>
        </div>

        <div
          class="community-intro-image"
          style="background-image: url('${communityConnection}')"
          role="img"
          aria-label="Abstract connected shapes representing community"
        ></div>
      </section>

      <!-- =====================================================
           COMMUNITY PILLARS
           ===================================================== -->
      <section class="community-pillars">
        <div class="community-pillars-header">
          <span class="community-label">WHAT YOU FIND HERE</span>

          <h2>
            Different paths.<br />
            One connected space<span>.</span>
          </h2>
        </div>

        <div class="community-pillar-grid">

          <!-- CONNECTION -->
          <article class="community-pillar community-pillar-dark">
            <div
              class="community-pillar-visual"
              style="background-image: url('${communityConnection}')"
            ></div>

            <div class="community-pillar-content">
              <span class="community-number">01</span>
              <h3>Meaningful Connections</h3>
              <p>
                Build relationships around shared goals, interests
                and the desire to keep growing.
              </p>
            </div>
          </article>

          <!-- LEARNING -->
          <article class="community-pillar community-pillar-terracotta">
            <div
              class="community-pillar-visual"
              style="background-image: url('${communityLearning}')"
            ></div>

            <div class="community-pillar-content">
              <span class="community-number">02</span>
              <h3>Practical Learning</h3>
              <p>
                Exchange knowledge, discover useful resources and
                learn from ideas that can be applied in real life.
              </p>
            </div>
          </article>

          <!-- SUPPORT -->
          <article class="community-pillar community-pillar-cream">
            <div
              class="community-pillar-visual"
              style="background-image: url('${communitySupport}')"
            ></div>

            <div class="community-pillar-content">
              <span class="community-number">03</span>
              <h3>Mutual Support</h3>
              <p>
                Find encouragement, perspective and practical support
                as you navigate your own journey.
              </p>
            </div>
          </article>

          <!-- IMPACT -->
          <article class="community-pillar community-pillar-dark">
            <div
              class="community-pillar-visual"
              style="background-image: url('${communityImpact}')"
            ></div>

            <div class="community-pillar-content">
              <span class="community-number">04</span>
              <h3>Lasting Impact</h3>
              <p>
                Turn personal growth into something bigger by
                contributing to the people and ideas around you.
              </p>
            </div>
          </article>

        </div>
      </section>

      <!-- =====================================================
           COMMUNITY MOMENTS
           ===================================================== -->
      <section class="community-moments">
        <div class="community-moments-visual">
          <div
            class="community-moments-image"
            style="background-image: url('${communityMoments}')"
            role="img"
            aria-label="Abstract illustration showing connected forms"
          ></div>
        </div>

        <div class="community-moments-copy">

          <h2>
            Ideas meet.<br />
            Connections grow<span>.</span>
          </h2>

          <p>
            From conversations and learning sessions to collaborations
            and shared opportunities, the community is where separate
            paths can meet and create something stronger together.
          </p>

          <a
            href="${SOCIAL_LINKS.instagram}"
            target="_blank"
            rel="noopener noreferrer"
            class="community-text-link"
            aria-label="See what is happening on Altiora Instagram"
          >
            See what is happening <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <!-- =====================================================
           CONNECTION STATEMENT
           ===================================================== -->
      <section class="community-statement">
        <div class="community-statement-inner">
          <span class="community-label">THE ALTIORA IDEA</span>

          <h2>
            One connection can open a door.<br />
            Many connections can build a path<span>.</span>
          </h2>

          <p>
            We believe the right environment can help people move
            with more clarity, confidence and purpose.
          </p>
        </div>
      </section>

      <!-- =====================================================
           JOIN CTA
           ===================================================== -->
      <section
        class="community-cta"
        id="join-community"
        style="background-image: url('${communityCta}')"
      >
        <div class="community-cta-overlay"></div>

        <div class="community-cta-content">
          <span class="community-label">JOIN THE COMMUNITY</span>

          <h2>
            Great things happen<br />
            when we connect<span>.</span>
          </h2>

          <p>
            Come to learn. Stay to connect. Build what matters and keep growing
            with people who believe there is more ahead.
          </p>

          <button
            type="button"
            class="community-button community-button-light"
            data-talk-open
            aria-label="Open Talk options"
          >
            Join Now <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

    </main>
  `;
}
