import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import vm from 'node:vm';

const html = await readFile(new URL('index.html', import.meta.url), 'utf8');
assert.match(html, /Weekend delivery now open/);
assert.equal((html.match(/<li>/g) || []).length, 4, 'Exactly four menu items');
assert.equal((html.match(/class="price"/g) || []).length, 4, 'Every menu item has a price');
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.match(html, /name="viewport"/);
assert.match(html, /lang="en"/);
assert.match(html, /width="600" height="500" alt="[^"]+"/);
assert(!/<(?:iframe|form)\b/i.test(html), 'No backend/order submission form');

const links = [...html.matchAll(/data-order-link href="([^"]+)"/g)].map(match => ({ href: match[1] }));
assert.equal(links.length, 2, 'Hero and menu order links');
const checkLink = href => {
  const url = new URL(href);
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/2348000000000');
  assert.equal(url.searchParams.get('text'), "Hi Koko Bakehouse! I'd like to order for weekend delivery. Could you share availability and delivery details?");
};
links.forEach(link => checkLink(link.href));
vm.runInNewContext(await readFile(new URL('script.js', import.meta.url), 'utf8'), {
  URL,
  document: { querySelectorAll(selector) { assert.equal(selector, '[data-order-link]'); return links; } }
});
links.forEach(link => checkLink(link.href));

for (const path of ['styles.css', 'script.js', 'bread.svg']) {
  assert((await stat(new URL(path, import.meta.url))).size > 0, `${path} exists`);
}
console.log('Passed: brief content, four priced items, local assets, and both WhatsApp links with/without JavaScript.');
