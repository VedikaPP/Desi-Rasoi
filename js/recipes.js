const recipes = [
  // ================= VEG (1–25) =================
  { id:1, name:"Paneer Butter Masala", type:"Veg", image:"images/veg/paneer.jpg",
    ingredients:["Paneer","Butter","Tomato","Cream","Spices"],
    steps:["Heat butter","Add tomato gravy","Add paneer","Simmer & enjoy"],
    fun:"Warning ⚠️: May cause sudden happiness 😄",
    info:"A rich and creamy North Indian dish loved by all." },

  { id:2, name:"Masala Dosa", type:"Veg", image:"images/veg/dosa.jpg",
    ingredients:["Rice Batter","Potato Masala","Spices"],
    steps:["Prepare dosa batter","Spread on tawa","Add masala","Fold like a pro"],
    fun:"Crispy outside, soft inside — like your heart ❤️",
    info:"South Indian crispy dosa with spicy potato filling." },

  { id:3, name:"Veg Biryani", type:"Veg", image:"images/veg/veg-biryani.jpg",
    ingredients:["Rice","Vegetables","Biryani Spices","Saffron"],
    steps:["Cook vegetables","Layer rice","Add spices","Steam cook"],
    fun:"Smells so good, neighbors will knock for lunch 😋",
    info:"Aromatic spiced rice with fresh vegetables." },

  { id:4, name:"Chole Bhature", type:"Veg", image:"images/veg/chole.jpg",
    ingredients:["Chickpeas","Spices","Flour for bhature"],
    steps:["Cook chickpeas","Prepare bhature dough","Fry bhature","Serve hot"],
    fun:"Filling meal may cause nap 😴",
    info:"North Indian spicy chickpeas served with fried bread." },

  { id:5, name:"Rajma Chawal", type:"Veg", image:"images/veg/rajma.jpg",
    ingredients:["Kidney Beans","Tomato","Onion","Spices","Rice"],
    steps:["Cook kidney beans","Prepare gravy","Serve with rice"],
    fun:"Comfort food for Monday blues 💛",
    info:"Classic Punjabi kidney bean curry with steamed rice." },

  { id:6, name:"Aloo Paratha", type:"Veg", image:"images/veg/aloo-paratha.jpg",
    ingredients:["Wheat Flour","Potato Filling","Spices","Ghee"],
    steps:["Prepare dough","Stuff with potato","Cook on tawa","Serve hot"],
    fun:"Breakfast king 👑 of India",
    info:"Soft stuffed bread served with butter or curd." },

  { id:7, name:"Pav Bhaji", type:"Veg", image:"images/veg/pav-bhaji.jpg",
    ingredients:["Mixed Vegetables","Butter","Spices","Pav Bread"],
    steps:["Mash vegetables","Cook with spices","Serve with buttered pav"],
    fun:"Street food magic at home 🏡",
    info:"Mumbai's iconic spiced vegetable mash served with bread." },

  { id:8, name:"Idli Sambhar", type:"Veg", image:"images/veg/idli.jpg",
    ingredients:["Idli Batter","Sambhar","Coconut Chutney"],
    steps:["Steam idlis","Prepare sambhar","Serve with chutney"],
    fun:"Soft, fluffy, and Instagram-worthy 📸",
    info:"South Indian breakfast combo of idlis and lentil soup." },

  // ================= NON-VEG (26–50) =================
  { id:9, name:"Chicken Curry", type:"Non-Veg", image:"images/nonveg/chicken.png",
    ingredients:["Chicken","Onion","Tomato","Spices"],
    steps:["Marinate chicken","Cook onions","Add spices","Simmer slowly"],
    fun:"One bite and Sunday mood activated 🐔🔥",
    info:"Classic Indian chicken curry with aromatic spices." },

  { id:10, name:"Butter Chicken", type:"Non-Veg", image:"images/nonveg/butter-chicken.jpg",
    ingredients:["Chicken","Butter","Cream","Tomato","Spices"],
    steps:["Cook chicken","Prepare buttery gravy","Mix and serve"],
    fun:"Warning: May cause happy dance 💃🕺",
    info:"Rich and creamy chicken curry loved worldwide." },

  { id:11, name:"Egg Curry", type:"Non-Veg", image:"images/nonveg/egg-curry.jpg",
    ingredients:["Eggs","Onion","Tomato","Spices"],
    steps:["Boil eggs","Prepare gravy","Add eggs and simmer"],
    fun:"Egg-cellent choice for lunch or dinner 🥚😄",
    info:"Spiced egg curry served with steamed rice." },

  { id:12, name:"Chicken Biryani", type:"Non-Veg", image:"images/nonveg/chicken-biryani.jpg",
    ingredients:["Chicken","Rice","Biryani Spices","Saffron"],
    steps:["Marinate chicken","Layer rice and chicken","Cook with steam"],
    fun:"Fragrance alert! People will follow the smell 😋",
    info:"Fragrant Indian chicken biryani with spices and saffron." },

  { id:13, name:"Fish Curry", type:"Non-Veg", image:"images/nonveg/fish-curry.jpg",
    ingredients:["Fish","Coconut Milk","Spices","Tamarind"],
    steps:["Marinate fish","Prepare coconut gravy","Cook fish gently"],
    fun:"Make waves in taste! 🌊🐟",
    info:"South Indian tangy and spicy fish curry." },

  { id:14, name:"Mutton Rogan Josh", type:"Non-Veg", image:"images/nonveg/mutton.png",
    ingredients:["Mutton","Yogurt","Spices","Onion"],
    steps:["Marinate mutton","Cook onions and spices","Add mutton & simmer"],
    fun:"Mutton lover? You’ll forget your diet 😜",
    info:"Kashmiri slow-cooked mutton curry with rich spices." },

  { id:15, name:"Prawn Masala", type:"Non-Veg", image:"images/nonveg/prawn.png",
    ingredients:["Prawns","Onion","Tomato","Spices"],
    steps:["Clean prawns","Cook gravy","Add prawns and simmer"],
    fun:"Tiny prawns, huge flavor 🦐😄",
    info:"Spicy prawn curry perfect with steamed rice." },

  { id:16, name:"Chicken Tikka", type:"Non-Veg", image:"images/nonveg/chicken-tikka.jpg",
    ingredients:["Chicken","Yogurt","Spices"],
    steps:["Marinate chicken","Grill or bake","Serve hot"],
    fun:"Grill it, thrill it! 🔥",
    info:"Spiced and grilled chicken pieces, juicy inside." },

  { id:17, name:"Egg Biryani", type:"Non-Veg", image:"images/nonveg/egg-biryani.jpg",
    ingredients:["Eggs","Rice","Spices","Onion"],
    steps:["Boil eggs","Cook rice","Layer eggs and rice","Steam cook"],
    fun:"Eggs never looked this fancy 🥚✨",
    info:"Spiced rice layered with boiled eggs." },

  { id:18, name:"Fish Fry", type:"Non-Veg", image:"images/nonveg/fish-fry.jpg",
    ingredients:["Fish","Spices","Oil"],
    steps:["Marinate fish","Shallow fry till golden","Serve hot"],
    fun:"Crispy outside, tender inside 😍",
    info:"Simple, crispy, South Indian style fish fry." },

];
