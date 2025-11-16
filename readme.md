# Oven'n Cravings — Demo Bakery Website

This is a small, responsive demo website for Oven'n Cravings — a warm, premium bakery brand.

Features
- Cozy brown / cream / gold theme with soft shadows and large imagery
- Hero section with slogan: "Freshly baked. Perfectly craved."
- Product categories: Cakes, Pastries, Bread, Cookies, Doughnuts, Small Chops
- Each product has an image, short description, and an "Order on WhatsApp" button
- Custom cake order prefilled WhatsApp message
- Testimonials carousel
- Contact details and pickup/delivery notice

Customization
- To direct WhatsApp orders to a specific number, replace the placeholder in `js/script.js` and the example instructions below.

WhatsApp behavior
- By default the site uses the WhatsApp prefilled-message URL (`https://api.whatsapp.com/send?text=...`) which opens WhatsApp Web or the app for the user to choose where to send the message.
- If you'd like orders to go to a specific phone number, change the JS to use `https://wa.me/<PHONE>?text=<ENCODED>` or `https://api.whatsapp.com/send?phone=<PHONE>&text=<ENCODED>` and replace `<PHONE>` with the international phone number (no plus sign). Example:

  `https://wa.me/2348012345678?text=I%20want%20to%20order%20Cakes` 

Local preview
1. Open `index.html` in a browser (double-click or right-click -> Open with).
2. For local development with a quick static server, you can run Python's simple server:

```powershell
# from the project root
python -m http.server 8000; Start-Process http://localhost:8000
```

Notes
- Images in the demo are hotlinked from Unsplash for convenience. Replace them with your own photography for production use.
- Colors, copy, and button text are easily customizable via `css/styles.css` and `js/script.js`.

Next steps I can take for you
- Replace the WhatsApp links to include a specific business number.
- Swap demo images with provided product photos.
- Add a simple server-side order form or integrate with a headless CMS.

If you'd like any of those, tell me which phone number (or whether to keep the open share link), and I'll update the site.
