// Interactive behavior for Oven'n Cravings demo site
(function(){
  const PHONE_PLACEHOLDER = 'YOUR_PHONE_NUMBER'; // replace in README and optionally here to use direct wa.me number

  function openWhatsAppWithText(text){
    // Use WhatsApp share link that pre-fills a message. If a phone number is provided, you can use https://wa.me/<number>?text=...
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, '_blank');
  }

  // Product order buttons
  document.querySelectorAll('.whatsapp-order').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      const item = btn.dataset.item || btn.closest('.product')?.dataset?.name || 'a product';
      openWhatsAppWithText(`Hi Oven'n Cravings! I'd like to order: ${item}. Please share available sizes and prices.`);
    });
  });

  // Hero/order buttons
  document.getElementById('hero-whatsapp').addEventListener('click', e=>{
    e.preventDefault();
    openWhatsAppWithText("Hi! I'd like to place an order. Can you help?");
  });

  document.getElementById('contact-whatsapp').addEventListener('click', e=>{
    e.preventDefault();
    openWhatsAppWithText("Hello Oven'n Cravings — I have a question about ordering and delivery.");
  });

  document.getElementById('custom-cake-order').addEventListener('click', e=>{
    e.preventDefault();
    openWhatsAppWithText("I'd like to order a custom cake. Date: __, Size: __, Theme/colors: __, Contact: __");
  });

  // Simple testimonials carousel
  const track = document.getElementById('testimonialTrack');
  const next = document.getElementById('nextTestimonial');
  const prev = document.getElementById('prevTestimonial');
  let current = 0;
  const total = track.children.length;

  function updateCarousel(){
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  next.addEventListener('click', ()=>{ current = (current+1) % total; updateCarousel(); });
  prev.addEventListener('click', ()=>{ current = (current-1+total) % total; updateCarousel(); });

  // Auto-advance every 6s
  setInterval(()=>{ current = (current+1) % total; updateCarousel(); }, 6000);

  // Mobile nav toggle (uses .open class so CSS can animate/position)
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
  });

  // Mobile order bar quick button
  const mobileBtn = document.getElementById('mobile-whatsapp');
  if(mobileBtn){
    mobileBtn.addEventListener('click', e=>{
      e.preventDefault();
      openWhatsAppWithText("Hi Oven'n Cravings — I'd like to place an order. Could you assist?");
    });
  }

})();
