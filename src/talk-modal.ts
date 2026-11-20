import './talk-modal.css';

import {
  ALTIORA_COMMUNITY_LINK,
  TALK_CONTACTS,
  WHATSAPP_ICON,
  buildWhatsAppUrl,
} from './site';

const MODAL_ID = 'talk-modal';

function buildTalkModalMarkup(): string {
  return `
    <div class="talk-modal" id="${MODAL_ID}" aria-hidden="true">
      <div class="talk-modal-backdrop" data-talk-close></div>

      <section
        class="talk-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="talk-modal-title"
        tabindex="-1"
      >
        <button
          class="talk-modal-close"
          id="talk-modal-close"
          type="button"
          aria-label="Close talk dialog"
        >
          &times;
        </button>

        <div class="talk-modal-kicker">Let’s Talk</div>

        <h2 class="talk-modal-title" id="talk-modal-title">
          Choose how you’d like<br class="talk-desktop-break" />
          to connect with us.
        </h2>

        <p class="talk-modal-intro">
          Choose the team or area you’d like to speak with and we’ll
          take you straight to WhatsApp.
        </p>

        <div class="talk-contact-list">
          ${TALK_CONTACTS.map((contact) => `
            <a
              class="talk-contact"
              href="${buildWhatsAppUrl(contact)}"
              target="_blank"
              rel="noopener noreferrer"
              data-talk-link
            >
              <span class="talk-whatsapp-icon">
                ${WHATSAPP_ICON}
              </span>
              <span class="talk-contact-copy">
                <span class="talk-contact-title">${contact.title}</span>
                <span class="talk-contact-number">${contact.number}</span>
              </span>
              <span class="talk-contact-arrow" aria-hidden="true">&rarr;</span>
            </a>
          `).join('')}
        </div>

        <a
          class="talk-community-link"
          href="${ALTIORA_COMMUNITY_LINK}"
          target="_blank"
          rel="noopener noreferrer"
          data-talk-link
        >
          <span class="talk-community-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="13" r="5.5" stroke="currentColor" stroke-width="2.4"/>
              <circle cx="11.5" cy="18" r="4.5" stroke="currentColor" stroke-width="2.4"/>
              <circle cx="36.5" cy="18" r="4.5" stroke="currentColor" stroke-width="2.4"/>
              <path d="M14 34c0-6.1 4.2-10 10-10s10 3.9 10 10v2H14v-2Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
              <path d="M3.5 35.5c0-4.8 3.1-7.8 7.5-7.8 2.2 0 4 .7 5.3 2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
              <path d="M44.5 35.5c0-4.8-3.1-7.8-7.5-7.8-2.2 0-4 .7-5.3 2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="talk-community-copy">
            <span class="talk-community-kicker">Join the Altiora Community</span>
            <span class="talk-community-text">Be part of something bigger.</span>
          </span>
          <span class="talk-community-arrow" aria-hidden="true">&rarr;</span>
        </a>
      </section>
    </div>
  `;
}

function ensureTalkModal(): HTMLElement {
  const existing = document.getElementById(MODAL_ID);
  if (existing) return existing;

  document.body.insertAdjacentHTML('beforeend', buildTalkModalMarkup());
  return document.getElementById(MODAL_ID)!;
}

let initialized = false;
let lastFocusedElement: HTMLElement | null = null;

export function closeTalkModal(): void {
  const modal = document.getElementById(MODAL_ID);
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('talk-modal-open');

  if (lastFocusedElement) {
    window.setTimeout(() => lastFocusedElement?.focus(), 0);
  }
}

export function openTalkModal(button: HTMLElement): void {
  const modal = ensureTalkModal();
  const closeButton = modal.querySelector<HTMLButtonElement>('#talk-modal-close');

  lastFocusedElement = button;

  const mobileNavigation = document.querySelector<HTMLElement>('#mobile-navigation');
  const mobileMenuButton = document.querySelector<HTMLButtonElement>('#mobile-menu-toggle');

  if (mobileNavigation?.classList.contains('open')) {
    mobileNavigation.classList.remove('open');
    mobileNavigation.setAttribute('aria-hidden', 'true');
    mobileMenuButton?.classList.remove('open');
    mobileMenuButton?.setAttribute('aria-expanded', 'false');
    mobileMenuButton?.setAttribute('aria-label', 'Open navigation menu');
    document.body.classList.remove('mobile-menu-open');
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('talk-modal-open');

  window.setTimeout(() => closeButton?.focus(), 30);
}

export function initializeTalkModal(): void {
  if (initialized) return;
  initialized = true;

  ensureTalkModal();

  document.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    const openButton = target?.closest<HTMLElement>('#talk-button, #mobile-talk-button, [data-talk-open]');

    if (openButton) {
      event.preventDefault();
      openTalkModal(openButton);
      return;
    }

    const closeTarget = target?.closest<HTMLElement>('#talk-modal-close, [data-talk-close]');
    if (closeTarget) {
      event.preventDefault();
      closeTalkModal();
    }

    if (target?.closest<HTMLElement>('[data-talk-link]')) {
      closeTalkModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    const modal = document.getElementById(MODAL_ID);
    const dialog = modal?.querySelector<HTMLElement>('.talk-modal-dialog');

    if (!modal?.classList.contains('is-open') || !dialog) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeTalkModal();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      )
    );

    if (!focusableElements.length) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}
