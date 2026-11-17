# Koko Bakehouse

A small, mobile-first fictional bakery landing page for the TeniVision trial.

## Run

Open `index.html` directly, or serve this folder with `python -m http.server 8080` and visit `http://localhost:8080`. No installation or build step is needed.

## Choices

- Plain HTML, CSS and a small deferred JavaScript file. No framework, external fonts, tracking, network-loaded images or backend.
- The page has the requested delivery announcement, four menu items with sample prices, and WhatsApp order links with a pre-filled message.
- A small original SVG bread illustration keeps the page self-contained and lightweight. System fonts avoid additional requests and font loading shifts.
- Semantic headings, a real menu list, descriptive image text, keyboard focus indicators, a skip link and reduced-motion support.
- WhatsApp links have working HTML fallbacks when JavaScript is disabled. The script keeps the shared order message in one place.

## Demo assumptions / shortcuts

The menu, copy and Nigerian naira prices are illustrative. The supplied number `0800 000 0000` is a placeholder; it is expressed as `2348000000000` in the `wa.me` URL using Nigeria's country code. This is not a verified WhatsApp recipient. Replace it with the confirmed international number before a real launch. No order was sent during testing.

Ordering is a conversation in WhatsApp; there is no cart, payment, stock system or delivery-fee calculation. Those are outside the brief. Both calls to action use the same message.

## Checks

Run `node check.mjs` for the brief/content, assets, fallback links and generated WhatsApp-link checks. See `QA.md` for browser verification results.

Prepared by Viktor Volkov. This fictional assessment remains the author's work and is not a deployed client website.
