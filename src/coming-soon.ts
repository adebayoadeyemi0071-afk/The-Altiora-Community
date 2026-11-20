/* =========================================================
   ALTIORA COMING SOON FLOATER
   Shared interaction for unfinished pages, articles and features.
   ========================================================= */

import './coming-soon.css';

let initialized = false;
let hideTimer: number | undefined;

function getFloater(): HTMLDivElement {
  let floater = document.querySelector<HTMLDivElement>('#altiora-coming-soon');

  if (floater) return floater;

  floater = document.createElement('div');
  floater.id = 'altiora-coming-soon';
  floater.className = 'coming-soon-floater';
  floater.setAttribute('role', 'status');
  floater.setAttribute('aria-live', 'polite');
  floater.innerHTML = `
    <span>Coming soon</span>
  `;

  document.body.appendChild(floater);
  return floater;
}

function showFloater(): void {
  const floater = getFloater();

  floater.classList.add('visible');

  if (hideTimer !== undefined) {
    window.clearTimeout(hideTimer);
  }

  hideTimer = window.setTimeout(() => {
    floater.classList.remove('visible');
  }, 2400);
}

export function initializeComingSoon(): void {
  if (initialized) return;
  initialized = true;

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const trigger = target?.closest<HTMLElement>('[data-coming-soon]');

    if (!trigger) return;

    event.preventDefault();
    showFloater();
  });
}
