/* =========================================================
   ALTIORA SITE CONFIGURATION
   Shared configuration used by the header, footer and Talk modal.
   ========================================================= */


export const ALTIORA_FAVICON_SVG = `
<svg
  viewBox="0 0 24 24"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 7,14 7,14C10,9 15,9.5 17,8Z"
  />
</svg>
`;

export const TALK_CONTACTS = [
  {
    title: 'Benedict Salami',
    number: '+234 813 795 5284',
    whatsapp: '2348137955284',
    message: 'Hello Altiora, I would like to make a general enquiry.',
  },
  {
    title: 'Abiola Beloved',
    number: '+234 905 136 2724',
    whatsapp: '2349051362724',
    message: 'Hello Altiora, I would like to discuss a partnership.',
  },
  {
    title: 'David',
    number: '+234 707 075 4329',
    whatsapp: '2347070754329',
    message: 'Hello Altiora, I would like to learn more about your programs and opportunities.',
  },
  {
    title: 'ADEBAYO99',
    number: '+234 705 441 1096',
    whatsapp: '2347054411096',
    message: 'Hello Altiora, I would like to discuss a media or collaboration opportunity.',
  },
] as const;

export const ALTIORA_COMMUNITY_LINK =
  'https://chat.whatsapp.com/Elrxd0HkDk4L8M2wxtbSzd';

export function buildWhatsAppUrl(
  contact: (typeof TALK_CONTACTS)[number]
): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.message)}`;
}

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/the_altiora_community?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
  gmail: 'mailto:thealtioracommunity@gmail.com',
  whatsapp: buildWhatsAppUrl(TALK_CONTACTS[0]),
  twitter: 'https://x.com',
} as const;

export const WHATSAPP = {
  group: ALTIORA_COMMUNITY_LINK,
  number: TALK_CONTACTS[0].whatsapp,
} as const;

export const WHATSAPP_CHAT_URL = buildWhatsAppUrl(TALK_CONTACTS[0]);

export const WHATSAPP_ICON = `
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.02 3C8.84 3 3 8.78 3 15.89c0 2.51.74 4.95 2.13 7.04L3 29l6.25-2.04a13.1 13.1 0 0 0 6.77 1.86h.01C23.2 28.82 29 23.04 29 15.91 29 8.78 23.2 3 16.02 3Zm0 23.52c-2.1 0-4.15-.57-5.93-1.65l-.43-.26-3.71 1.21 1.21-3.61-.28-.46a10.36 10.36 0 0 1-1.59-5.53c0-5.73 4.8-10.4 10.72-10.4 5.91 0 10.71 4.67 10.71 10.4 0 5.74-4.8 10.4-10.7 10.4Zm5.88-7.8c-.32-.16-1.9-.93-2.19-1.04-.29-.11-.5-.16-.71.16-.21.31-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.56-.95-.84-1.59-1.88-1.78-2.2-.19-.31-.02-.48.14-.63.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.53 5.48 4.81.77.3 1.37.48 1.84.61.77.2 1.47.17 2.03.1.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.29-.22-.61-.38Z" />
  </svg>
`;
