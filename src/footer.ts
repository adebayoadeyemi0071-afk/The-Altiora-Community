import { ALTIORA_FAVICON_SVG, SOCIAL_LINKS, WHATSAPP, WHATSAPP_CHAT_URL, WHATSAPP_ICON } from './site';

export function renderFooter(): string {
  return `
    <!-- =====================================================
         FOOTER
         ===================================================== -->

    <footer class="altiora-footer">

      <div class="footer-container">


        <!-- BRAND -->

        <div class="footer-col footer-brand-col">

          <div class="footer-brand">

            <div class="footer-brand-mark" aria-hidden="true">
              ${ALTIORA_FAVICON_SVG}
            </div>


           
          </div>


          <p class="footer-brand-statement">
            A community for deeper growth, greater purpose
            and lasting impact.
          </p>

        </div>


        <!-- SOCIAL LINKS -->

        <div class="footer-col footer-social-col">

          <h4 class="footer-heading">
            Follow Us
          </h4>


          <div class="footer-social-icons">


            <!-- INSTAGRAM -->

            <a
              href="${SOCIAL_LINKS.instagram}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >

                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />

              </svg>

            </a>


            <!-- EMAIL -->

            <a
              href="${SOCIAL_LINKS.gmail}"
              aria-label="Email"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <path d="M3 5h18v14H3z" />

                <path d="m3 6 9 7 9-7" />

              </svg>

            </a>


            <!-- WHATSAPP -->

            <a
              href="${SOCIAL_LINKS.whatsapp}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >

              ${WHATSAPP_ICON}

            </a>


            <!-- X -->

            <a
              href="${SOCIAL_LINKS.twitter}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >

              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.55l-5.13-6.7L5.2 22H1.94l7.61-8.7L1.5 2h6.72l4.64 6.15L18.244 2Zm-1.15 17.9h1.81L7.22 4h-1.94l11.81 15.9Z"/>
              </svg>

            </a>


          </div>

        </div>


        <!-- COMMUNITY GROUP -->

        <div class="footer-col footer-action-col">

          <a
            href="${WHATSAPP.group}"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-action"
          >

            <span class="footer-action-icon">

              ${WHATSAPP_ICON}

            </span>


            <span class="footer-action-content">

              <strong>
                Join Our<br />
                Community Group
              </strong>


            
            </span>


            <span class="footer-action-arrow">
              &rarr;
            </span>

          </a>

        </div>


        <!-- CHAT -->

        <div class="footer-col footer-action-col">

          <a
            href="${WHATSAPP_CHAT_URL}"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-action"
          >

            <span class="footer-action-icon">

              ${WHATSAPP_ICON}

            </span>


            <span class="footer-action-content">

              <strong>
                Chat With Us
              </strong>


            </span>


            <span class="footer-action-arrow">
              &rarr;
            </span>

          </a>

        </div>


      </div>


      <!-- ===================================================
           FOOTER BOTTOM
           =================================================== -->

      <div class="footer-bottom">

        <p class="footer-copyright">
          © ${new Date().getFullYear()} Altiora. All rights reserved.
        </p>


        <div class="footer-motto">

        
          <span>
            GROW
          </span>

          <b>
            •
          </b>

          <span>
            CONNECT
          </span>

          <b>
            •
          </b>

          <span>
            MAKE AN IMPACT
          </span>

        </div>

      </div>

    </footer>

  `;
}
