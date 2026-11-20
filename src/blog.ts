import './blog.css';


// =========================================================
// BLOG IMAGES
// =========================================================

import blogHero from './assets/blog-hero.jpg';
import blogLifestyle from './assets/blog-lifestyle.jpg';
import blogPersonalGrowth from './assets/blog-personal growth.png';
import blogLeadership from './assets/blog-leadership.jpg';
import blogWellbeing from './assets/blog-wellbeing.jpg';

import { SOCIAL_LINKS } from './site';


export function renderBlogPage(): string {
  return `
    <main class="blog-page">


      <!-- =================================================
           HERO SECTION
           ================================================= -->

      <section class="blog-hero">

        <!-- LEFT: HERO COPY -->

        <div class="blog-hero-content">

          <span class="blog-hero-label">
            OUR BLOG
          </span>


          <h1>
            Ideas. Insights<span class="dot">.</span>
            <br />
            Real Growth<span class="dot">.</span>
          </h1>


          <p>
            Practical advice, honest conversations and fresh
            perspectives to help you grow — personally,
            professionally and together.
          </p>

        </div>


        <!-- RIGHT: HERO IMAGE -->

        <div class="blog-hero-image">

          <div
            class="blog-hero-image-bg"
            style="background-image: url('${blogHero}');"
            role="img"
            aria-label="Altiora Blog"
          ></div>

        </div>

      </section>


      <!-- =================================================
           EDITORIAL BLOG GRID
           ================================================= -->

      <section class="blog-grid">


        <!-- ===============================================
             ARTICLE 1
             IMAGE LEFT | DARK RIGHT
             =============================================== -->

        <a
          href="${SOCIAL_LINKS.instagram}"
          class="blog-row"
          data-blog-article="1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read The Altiora Community post on Instagram"
        >

          <div class="blog-card-image">

            <div
              class="blog-card-img-bg"
              style="
                background-image:
                  url('${blogPersonalGrowth}');
              "
              role="img"
              aria-label="Personal growth article"
            ></div>

          </div>


          <div class="blog-card-content bg-dark">

            

            <h2 class="blog-title">
              The
              <br />
              Altiora Community
            </h2>


            <p class="blog-desc">
             This is the beginning of the Altiora community — a place to learn,
              build, connect and grow. Here’s to new beginnings, better days
              and meaningful growth together.
            </p>

            <div class="blog-meta-footer">

              <div class="blog-meta-info">

                <span>
                  Apr 12, 2025
                </span>

                <span>
                  •
                </span>

                <span>
                  5 min read
                </span>

              </div>


              <div class="read-more">

                Read More

                <span class="read-more-arrow">
                  →
                </span>

              </div>

            </div>

          </div>

        </a>


        <!-- ===============================================
             ARTICLE 2
             IMAGE LEFT | TERRACOTTA RIGHT
             =============================================== -->

        <a
          href="#blog"
          class="blog-row"
          data-blog-article="2"
          data-coming-soon
        >

          <div class="blog-card-image">

            <div
              class="blog-card-img-bg"
              style="
                background-image:
                  url('${blogLifestyle}');
              "
              role="img"
              aria-label="Career article"
            ></div>

          </div>


          <div class="blog-card-content bg-terracotta">

            <span class="blog-category">
              CAREER
            </span>


            <h2 class="blog-title">
              Finding purpose
              <br />
              in your work
            </h2>


            <p class="blog-desc">
              It's not just about what you do, but why you do it.
              Here's how to align your career with your values.
            </p>


            <div class="blog-meta-footer">

              <div class="blog-meta-info">

                <span>
                  Apr 8, 2025
                </span>

                <span>
                  •
                </span>

                <span>
                  4 min read
                </span>

              </div>


              <div class="read-more">

                Read More

                <span class="read-more-arrow">
                  →
                </span>

              </div>

            </div>

          </div>

        </a>


        <!-- ===============================================
             ARTICLE 3
             CREAM LEFT | IMAGE RIGHT
             =============================================== -->

        <a
          href="#blog"
          class="blog-row"
          data-blog-article="3"
          data-coming-soon
        >

          <div class="blog-card-content bg-cream">

            <span class="blog-category">
              COMMUNITY
            </span>


            <h2 class="blog-title">
              The power of
              <br />
              surrounding yourself
              <br />
              with the right people
            </h2>


            <p class="blog-desc">
              Your environment shapes your mindset.
              Here's how to build a supportive circle
              that lifts you higher.
            </p>


            <div class="blog-meta-footer">

              <div class="blog-meta-info">

                <span>
                  Apr 2, 2025
                </span>

                <span>
                  •
                </span>

                <span>
                  4 min read
                </span>

              </div>


              <div class="read-more">

                Read More

                <span class="read-more-arrow">
                  →
                </span>

              </div>

            </div>

          </div>


          <div class="blog-card-image">

            <div
              class="blog-card-img-bg"
              style="
                background-image:
                  url('${blogLeadership}');
              "
              role="img"
              aria-label="Community article"
            ></div>

          </div>

        </a>


        <!-- ===============================================
             ARTICLE 4
             DARK LEFT | IMAGE RIGHT
             =============================================== -->

        <a
          href="#blog"
          class="blog-row"
          data-blog-article="4"
          data-coming-soon
        >

          <div class="blog-card-content bg-dark">

            <span class="blog-category">
              LEADERSHIP
            </span>


            <h2 class="blog-title">
              Leading with
              <br />
              empathy and courage
            </h2>


            <p class="blog-desc">
              Strong leadership isn't about control —
              it's about people. Learn how to lead with
              clarity, empathy and purpose.
            </p>


            <div class="blog-meta-footer">

              <div class="blog-meta-info">

                <span>
                  Mar 28, 2025
                </span>

                <span>
                  •
                </span>

                <span>
                  5 min read
                </span>

              </div>


              <div class="read-more">

                Read More

                <span class="read-more-arrow">
                  →
                </span>

              </div>

            </div>

          </div>


          <div class="blog-card-image">

            <div
              class="blog-card-img-bg"
              style="
                background-image:
                  url('${blogLeadership}');
              "
              role="img"
              aria-label="Leadership article"
            ></div>

          </div>

        </a>


        <!-- ===============================================
             ARTICLE 5
             TERRACOTTA LEFT | IMAGE RIGHT
             =============================================== -->

        <a
          href="#blog"
          class="blog-row"
          data-blog-article="5"
          data-coming-soon
        >

          <div class="blog-card-content bg-terracotta">

            <span class="blog-category">
              WELLBEING
            </span>


            <h2 class="blog-title">
              Your mental health
              <br />
              matters
            </h2>


            <p class="blog-desc">
              You can't pour from an empty cup.
              Here are simple, effective ways to
              prioritise your mental wellbeing.
            </p>


            <div class="blog-meta-footer">

              <div class="blog-meta-info">

                <span>
                  Mar 20, 2025
                </span>

                <span>
                  •
                </span>

                <span>
                  4 min read
                </span>

              </div>


              <div class="read-more">

                Read More

                <span class="read-more-arrow">
                  →
                </span>

              </div>

            </div>

          </div>


          <div class="blog-card-image">

            <div
              class="blog-card-img-bg"
              style="
                background-image:
                  url('${blogWellbeing}');
              "
              role="img"
              aria-label="Wellbeing article"
            ></div>

          </div>

        </a>


        <!-- ===============================================
             ARTICLE 6
             IMAGE LEFT | CREAM RIGHT
             =============================================== -->

        <a
          href="#blog"
          class="blog-row"
          data-blog-article="6"
          data-coming-soon
        >

          <div class="blog-card-image">

            <div
              class="blog-card-img-bg"
              style="
                background-image:
                  url('${blogLifestyle}');
              "
              role="img"
              aria-label="Lifestyle article"
            ></div>

          </div>


          <div class="blog-card-content bg-cream">

            <span class="blog-category">
              LIFESTYLE
            </span>


            <h2 class="blog-title">
              Simple ways to
              <br />
              live with more intention
            </h2>


            <p class="blog-desc">
              A more intentional life isn't about doing more —
              it's about choosing what matters. Here's how
              to start today.
            </p>


            <div class="blog-meta-footer">

              <div class="blog-meta-info">

                <span>
                  Mar 15, 2025
                </span>

                <span>
                  •
                </span>

                <span>
                  4 min read
                </span>

              </div>


              <div class="read-more">

                Read More

                <span class="read-more-arrow">
                  →
                </span>

              </div>

            </div>

          </div>

        </a>


      </section>

    </main>
  `;
}


/* =========================================================
   BLOG INTERACTIONS
   ========================================================= */

export function setupBlogInteractions(): void {
  // Blog links use normal anchors for the first published post and
  // data-coming-soon for posts whose full article pages are not live yet.
}
