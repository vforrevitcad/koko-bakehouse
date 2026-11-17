// Demo number 0800 000 0000, formatted with Nigeria's +234 country code for wa.me.
// shortcut: replace this placeholder with the bakery's verified number before a real launch.
const orderUrl = new URL('https://wa.me/2348000000000');
orderUrl.searchParams.set('text', "Hi Koko Bakehouse! I'd like to order for weekend delivery. Could you share availability and delivery details?");
document.querySelectorAll('[data-order-link]').forEach(link => {
  link.href = orderUrl.href;
});
