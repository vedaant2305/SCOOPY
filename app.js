const chatbotResponses = {
    greeting: [
        "Hello! I'm SCOOP, your personal ice cream assistant 🍦",
        "Hi there! Ready to explore our delightful world of frozen treats?",
        "Hey hey! Craving something sweet?",
        "Welcome to Velvet Cream Co.! What scoop can I help you with today?",
        "Sweet greetings! Ask me anything about our menu, timings, or offers 🍨"
        

    ],
    flavors: [
        "Based on today's warm weather, I'd recommend our refreshing Tender Coconut (₹48) or zesty Alphonso Mango (₹45)!",
        "Feeling adventurous? Try our premium Ferrero Rocher (₹65) - it's absolutely divine!",
        "For a classic treat, our Belgian Chocolate (₹50) or Vanilla Bean (₹40) never disappoint!",
        "If you're in a tropical mood, our Tender Coconut (₹48) is perfect for this weather!",
        "Craving something fruity? Strawberry Delight (₹42) is a fan favorite 🍓",
        "How about something luxurious like Tiramisu (₹60) or Red Velvet (₹58)?"
    ],
    orders: [
        "I'd love to help you order! Would you like a cone, cup, or family pack? What flavor catches your fancy?",
        "Great choice! We offer single scoops, double scoops, and family packs. Which size would you prefer?",
        "Perfect! Would you like to add any toppings? We have chocolate chips, nuts, fresh fruits, and more!",
        "Just tap the 'Order Now' button on our site, and select your favorite flavor to get started!",
        "You can also place your order through phone or WhatsApp — quick and creamy!"
    ],
    offers: [
        "🎉 Today's Special: Buy 2 scoops, get 1 FREE on all regular flavors!",
        "💫 New Flavor Alert: Try our Ferrero Rocher at 20% off this week only!",
        "🍦 Family Pack Deal: Get 1L of any flavor for just ₹350 (usually ₹400)!",
        "⭐ Premium Monday: All premium flavors at regular flavor prices!",
        "🔥 Limited Time: 10% off on orders above ₹200. Don’t miss out!",
        "🛵 Free delivery on prepaid orders within 3km!"
    ],
    faqs: [
        "We're open 10 AM to 11 PM daily. We deliver within 5km radius in 30-45 minutes!",
        "Yes, we accept online payments, cash on delivery, and card payments at our store!",
        "Our ice cream is made fresh daily with premium ingredients and no artificial preservatives!",
        "Absolutely! We offer sugar-free and vegan options. Just ask and I'll guide you!",
        "Need help choosing a flavor? I'm here to assist!"
    ],
    feedback: [
        "Your feedback makes us better! Please rate your experience from 1-5 stars and share what you loved most.",
        "Thank you for choosing Velvet Cream Co.! We'd love to hear about your experience with us.",
        "Help us serve you better! Any suggestions or compliments? We're all ears! 👂",
        "Drop your review on Google or Instagram — it means the world to us 🌍",
        "Got a moment? Let us know how we did. Every scoop of feedback helps 🍦"
    ],
    weather: [
        "Perfect weather for ice cream! I recommend our cooling Tender Coconut or refreshing Strawberry Delight!",
        "Hot day ahead? Our Alphonso Mango and Mint flavors will cool you right down!",
        "Rainy mood? Comfort yourself with our rich Belgian Chocolate or cozy Vanilla Bean!",
        "Too hot to think? Let me scoop you some chill with Kesar Pista or Coconut 🍧"
    ],
    timings: [
        "We're open every day from 10:00 AM to 11:00 PM — come by anytime!",
        "Yes! Our shop runs daily, including weekends, from 10 AM to 11 PM.",
        "Craving late night dessert? We’ve got you till 11 PM!",
        "Weekends, weekdays — we’re always open from 10 to 11!"
    ],
    location: [
        "We're located at 123 Marine Drive, Mumbai 🗺️ — swing by for a scoop with a sea view!",
        "Visit us at Marine Drive, Mumbai – Pin code 400001 📍",
        "We’re just a walk away from the Queen’s Necklace 🌊",
        "Come chill by the sea with our chillest scoops at Marine Drive!"
    ],
    payments: [
        "Yes! We accept UPI, cards, cash, and digital wallets 💳",
        "No worries — we take PayTM, GPay, and all major cards!",
        "Pay the way you like — cashless or classic!",
        "GPay, PayTM, cards, or cash — pick your scoop and swipe!"
    ],
    vegan: [
        "Yes! Try our Coconut Milk Mango and Almond Cocoa — 100% vegan 🌱",
        "We’ve got vegan-friendly flavors like Tender Coconut and Strawberry Bliss 🍓",
        "No dairy? No problem — vegan options await!",
        "Cruelty-free & creamy! Check out our plant-based delights 🌿"
    ],
    bestsellers: [
        "Belgian Chocolate and Alphonso Mango are absolute hits 🍫🥭",
        "Our top scoops? Ferrero Rocher, Kesar Pista, and Tiramisu!",
        "Everyone loves our Red Velvet swirl too 😍",
        "Vanilla Bean might sound simple, but it's a crowd favorite for a reason!"
    ],
    kids: [
        "Kids love Vanilla Bean and Strawberry Delight — colorful, creamy, and fun 🍓",
        "We have fun toppings and kiddie cups — perfect for little ones 👶",
        "Make it extra fun with sprinkles or chocolate chips!",
        "Strawberry, chocolate chips, and rainbow cones — heaven for the little champs!"
    ],
    thanks: [
        "You're so welcome! It's my pleasure to help you find the perfect ice cream treat! 🍦",
        "Happy to help! See you soon for a real scoop 🛍️"
    ],
    goodbye: [
        "Sweet dreams and sweeter ice cream! Come back anytime for more delicious conversations! 👋",
        "Goodbye for now! Hope to scoop with you soon again 🍨"
    ],
    default: [
        "I'd love to help you with that! You can ask me about our flavors, place an order, check today's offers, or get answers to common questions. What interests you most?",
        "Hmm... I'm not sure I got that. Try asking about our menu, timings, or current offers!"
    ]
};

function getRandomResponse(type) {
    const responses = chatbotResponses[type];
    if (Array.isArray(responses)) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
}

document.addEventListener('DOMContentLoaded', () => {
    const scoopBtn = document.getElementById('scoopBtn');
    const chatbotOverlay = document.getElementById('chatbotOverlay');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatInput = document.getElementById('chatInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    const quickBtns = document.querySelectorAll('.quick-btn');

    scoopBtn.addEventListener('click', () => {
        chatbotOverlay.style.display = 'flex';
        chatInput.focus();
    });

    closeChatbot.addEventListener('click', () => {
        chatbotOverlay.style.display = 'none';
    });

    sendMessageBtn.addEventListener('click', handleUserInput);
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') handleUserInput();
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            addUserMessage(getQuickActionText(action));
            addBotMessage(getRandomResponse(action));
        });
    });
});

function handleUserInput() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    if (message) {
        addUserMessage(message);
        chatInput.value = '';
        processMessage(message);
    }
}

function processMessage(message) {
  const text = message.toLowerCase();

  // If input doesn't match keywords, call backend
  if (!match(text, [
    "flavor", "flavour", "menu", "recommend", "suggest",
    "order", "buy", "purchase",
    "offer", "deal", "discount", "promotion",
    "faq", "question", "doubt",
    "feedback", "review", "rate",
    "weather", "hot", "cold", "rain", "sunny",
    "time", "open", "hours", "timing",
    "location", "where", "address", "map",
    "payment", "upi", "gpay", "pay", "card", "cash",
    "vegan", "plant", "dairy free",
    "bestseller", "popular", "top",
    "kid", "children", "child", "small",
    "thank", "thanks", "appreciate",
    "bye", "goodbye", "see you",
    "hello", "hi", "hey"
  ])) {
    // Send message to backend server (OpenAI)
    return fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    })
    .then(res => res.json())
    .then(data => addBotMessage(data.reply))
    .catch(err => {
      console.error(err);
      addBotMessage("Oops, Scoopy’s brain is on vacation! 😵🍦");
    });
  }

  // Regular keyword responses
  if (match(text, ["flavor", "flavour", "menu", "recommend", "suggest"])) return respond("flavors");
  if (match(text, ["order", "buy", "purchase"])) return respond("orders");
  if (match(text, ["offer", "deal", "discount", "promotion"])) return respond("offers");
  if (match(text, ["faq", "question", "doubt"])) return respond("faqs");
  if (match(text, ["feedback", "review", "rate"])) return respond("feedback");
  if (match(text, ["weather", "hot", "cold", "rain", "sunny"])) return respond("weather");
  if (match(text, ["time", "open", "hours", "timing"])) return respond("timings");
  if (match(text, ["location", "where", "address", "map"])) return respond("location");
  if (match(text, ["payment", "upi", "gpay", "pay", "card", "cash"])) return respond("payments");
  if (match(text, ["vegan", "plant", "dairy free"])) return respond("vegan");
  if (match(text, ["bestseller", "popular", "top"])) return respond("bestsellers");
  if (match(text, ["kid", "children", "child", "small"])) return respond("kids");
  if (match(text, ["thank", "thanks", "appreciate"])) return respond("thanks");
  if (match(text, ["bye", "goodbye", "see you"])) return respond("goodbye");
  if (match(text, ["hello", "hi", "hey"])) return respond("greeting");

  respond("default");
}


function respond(category) {
    const response = getRandomResponse(category);
    addBotMessage(response);
}

function addUserMessage(message) {
    const container = document.getElementById('chatbotMessages');
    const div = document.createElement('div');
    div.className = 'message user-message';
    div.innerHTML = `<div class="message-content">${message}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function addBotMessage(message) {
    const container = document.getElementById('chatbotMessages');
    const div = document.createElement('div');
    div.className = 'message bot-message';
    div.innerHTML = `<div class="message-content">${message}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function match(text, keywords) {
    return keywords.some(word => text.includes(word));
}

function getQuickActionText(action) {
    const map = {
        flavors: "Suggest me some flavors",
        orders: "I want to place an order",
        offers: "Show me today’s offers",
        faqs: "I have a question"
    };
    return map[action] || "Help me";
}
