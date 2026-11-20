import { ALTIORA_FAVICON_SVG } from './site';

export function renderHeader(): string {
  const hash = window.location.hash.replace(/^#/, '').trim().toLowerCase();
  const route = hash || 'home';

  return `
    <header class="hero-header">
      <div class="logo-container">
        <a href="#home" class="logo-mark" aria-label="Altiora Home">
          ${ALTIORA_FAVICON_SVG}
        </a>
      </div>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <ul class="nav-links">
          <li><a href="#home" class="${route === 'home' ? 'active' : ''}" ${route === 'home' ? 'aria-current="page"' : ''}>Home</a></li>
          <li><a href="#community" class="${route === 'community' ? 'active' : ''}" ${route === 'community' ? 'aria-current="page"' : ''}>Community</a></li>
          <li><a href="#about" class="${route === 'about' ? 'active' : ''}" ${route === 'about' ? 'aria-current="page"' : ''}>About</a></li>
          <li><a href="#blog" class="${route === 'blog' ? 'active' : ''}" ${route === 'blog' ? 'aria-current="page"' : ''}>Blog</a></li>
        </ul>
      </nav>

      <button class="talk-btn desktop-talk-btn" id="talk-button" type="button">
        Talk <span>&nearr;</span>
      </button>

      <button
        class="mobile-menu-toggle"
        id="mobile-menu-toggle"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="mobile-navigation"
      >
        <span></span><span></span><span></span>
      </button>

      <div class="mobile-navigation" id="mobile-navigation" aria-hidden="true">
        <nav aria-label="Mobile navigation">
          <ul class="mobile-nav-links">
            <li><a href="#home" class="${route === 'home' ? 'active' : ''}" ${route === 'home' ? 'aria-current="page"' : ''}>Home</a></li>
            <li><a href="#community" class="${route === 'community' ? 'active' : ''}" ${route === 'community' ? 'aria-current="page"' : ''}>Community</a></li>
            <li><a href="#about" class="${route === 'about' ? 'active' : ''}" ${route === 'about' ? 'aria-current="page"' : ''}>About</a></li>
            <li><a href="#blog" class="${route === 'blog' ? 'active' : ''}" ${route === 'blog' ? 'aria-current="page"' : ''}>Blog</a></li>
          </ul>
          <button class="talk-btn mobile-talk-btn" id="mobile-talk-button" type="button">Talk <span>&nearr;</span></button>
        </nav>
      </div>
    </header>
  `;
}
