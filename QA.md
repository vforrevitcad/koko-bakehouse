# Verification — 17 November 2026

- `node --preserve-symlinks-main check.mjs` passed. The extra Node flag was needed for Windows filesystem compatibility in the test environment, not by the website.
- Local HTTP preview returned 200. HTML, CSS, JavaScript and the SVG loaded successfully.
- Inspected browser screenshots at 320, 390, 768 and 1440 px widths. No horizontal overflow. Four menu items and all four prices remained readable.
- Both order links contained the placeholder international number and the expected pre-filled message. Checked fallback HTML links and JavaScript-generated URLs. No WhatsApp message was sent and recipient validity was not tested.
- Menu navigation updated the URL to `#menu`. Keyboard Tab reached the menu link with a visible solid focus outline.
- Browser console log query returned no entries.
- The browser disallows `file:` navigation, so direct-file opening was not browser-tested. The actual rendering checks used HTTP. The page has no module imports, fetch calls or server logic.
- No Lighthouse score, throttled-network benchmark, real iOS/Safari or Android/WhatsApp-app test was performed. The rendering checks used a local HTTP server, not a public deployment.

Mobile and desktop screenshots were supplied separately by email.
