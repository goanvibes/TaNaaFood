const MENU_CATEGORIES = [
  {
    id: 'quick-bites',
    name: 'Quick Bites & Breakfast',
    tagline: 'Fresh snacks, pav, toast, parathas and comfort plates.',
    items: [
      {name:'Bhajji / Vada / Mirchi Pav', desc:'Mixed and suka options', price:50, veg:true},
      {name:'Aloo Paratha', desc:'Homestyle stuffed paratha', price:50, veg:true},
      {name:'Poori Bhajji', desc:'3 pieces with bhajji', price:70, veg:true},
      {name:'Chapati Bhajji', desc:'Soft chapati with bhajji', price:70, veg:true},
      {name:'Veg Sandwich / Toast', desc:'Fresh vegetarian toast', price:50, veg:true},
      {name:'Bread Butter Toast', desc:'Simple golden toast', price:40, veg:true},
      {name:'Fruit Salad', desc:'Full bowl', price:120, veg:true},
      {name:'Mirchi', desc:'Crispy spicy mirchi', price:40, veg:true},
      {name:'Samosa', desc:'2 pieces', price:60, veg:true},
      {name:'Kappa / Potato Bajji', desc:'Crispy fried snack', price:80, veg:true},
      {name:'French Fries', desc:'Classic fries', price:70, veg:true},
      {name:'Veg Patties', desc:'Flaky snack patty', price:30, veg:true},
      {name:'Veg Rolls', desc:'Hot vegetarian roll', price:70, veg:true},
      {name:'Bhajji', desc:'Crispy bhajji portion', price:40, veg:true},
      {name:'Chicken / Egg Patties', desc:'Fresh savoury patty', price:40, veg:false},
      {name:'Chicken Sandwich Toast', desc:'Toasted chicken sandwich', price:80, veg:false},
      {name:'Chicken Spring Rolls', desc:'Crispy rolls', price:80, veg:false},
      {name:'Egg Burji with 2 Chapati', desc:'Masala egg bhurji meal', price:80, veg:false},
      {name:'Chicken Masala with 2 Chapati', desc:'Chicken masala meal', price:149, veg:false},
      {name:'Bread Omelette', desc:'Classic breakfast favourite', price:50, veg:false},
      {name:'Omelette Masala', desc:'Double egg masala omelette', price:40, veg:false}
    ]
  },
  {
    id: 'starters',
    name: 'Starters & Fry Specials',
    tagline: 'Crispy, spicy and made for sharing before the main meal.',
    items: [
      {name:'Veg Manchurian', desc:'Indo-Chinese favourite', price:179, veg:true},
      {name:'Paneer 65', desc:'Spicy fried paneer', price:189, veg:true},
      {name:'Veg 65', desc:'Crispy vegetable starter', price:179, veg:true},
      {name:'Veg Crispy', desc:'Crunchy tossed vegetables', price:179, veg:true},
      {name:'French Fries - Peri Peri / Cheese', desc:'Flavoured fries', price:99, veg:true},
      {name:'Masala Papad', desc:'Crisp papad with masala topping', price:89, veg:true},
      {name:'Paneer Tikka', desc:'Tandoori style paneer', price:189, veg:true},
      {name:'Mushroom Tikka', desc:'Spiced mushroom tikka', price:189, veg:true},
      {name:'Chilli Chicken', desc:'Spicy Indo-Chinese chicken', price:189, veg:false},
      {name:'Chicken 65 / Kabab', desc:'Crispy chicken starter', price:189, veg:false},
      {name:'Crispy Honey Chicken', desc:'Sweet-spicy crispy chicken', price:229, veg:false},
      {name:'Crispy Chicken', desc:'Crisp fried chicken', price:189, veg:false},
      {name:'Pepper Chicken', desc:'Peppery chicken starter', price:189, veg:false},
      {name:'Prawns Fry', desc:'Fresh prawns fried crisp', price:299, veg:false},
      {name:'Prawns 65', desc:'Spicy prawns 65', price:299, veg:false},
      {name:'Mutton Sukha', desc:'Dry mutton preparation', price:349, veg:false},
      {name:'Mutton 65', desc:'Spicy mutton starter', price:349, veg:false},
      {name:'Fish Fry - Bangda', desc:'Rava / tawa style', price:60, veg:false},
      {name:'Fish Fry - Lepo', desc:'Rava / tawa style', price:60, veg:false},
      {name:'Fish Fry - Kingfish / Modso / Chonak (1 pc)', desc:'Fresh fish fry', price:99, veg:false},
      {name:'Fish Fry - Kingfish / Modso / Chonak (2 pc)', desc:'Fresh fish fry', price:189, veg:false},
      {name:'Fish Fry - Kingfish / Modso / Chonak (4 pc)', desc:'Fresh fish fry', price:299, veg:false},
      {name:'Pomfret Fish Fry', desc:'Whole pomfret fry', price:299, veg:false}
    ]
  },
  {
    id: 'main-course',
    name: 'Main Course Curries',
    tagline: 'Veg, chicken, mutton, fish and prawns gravies with rich home-style flavour.',
    items: [
      {name:'Dal Tadka', desc:'Yellow dal with tadka', price:159, veg:true},
      {name:'Paneer Masala', desc:'Paneer in masala gravy', price:179, veg:true},
      {name:'Paneer Tikka Masala', desc:'Smoky paneer gravy', price:179, veg:true},
      {name:'Paneer Matter', desc:'Paneer with green peas', price:179, veg:true},
      {name:'Shahi Paneer', desc:'Creamy paneer curry', price:179, veg:true},
      {name:'Paneer Pasanda', desc:'Rich paneer preparation', price:179, veg:true},
      {name:'Paneer Butter Masala', desc:'Creamy tomato butter gravy', price:179, veg:true},
      {name:'Aloo Bendi', desc:'Potato and bhindi masala', price:179, veg:true},
      {name:'Aloo Matter', desc:'Potato and peas curry', price:179, veg:true},
      {name:'Aloo Tikka Masala', desc:'Spiced potato gravy', price:179, veg:true},
      {name:'Aloo Gobi Masala', desc:'Potato cauliflower curry', price:179, veg:true},
      {name:'Mix Veg', desc:'Mixed vegetable curry', price:179, veg:true},
      {name:'Veg Kolhapuri', desc:'Spicy Kolhapuri gravy', price:179, veg:true},
      {name:'Chicken / Mutton Sukha', desc:'Dry masala preparation', price:189, veg:false},
      {name:'Chicken / Mutton Handi', desc:'Handi style gravy', price:189, veg:false},
      {name:'Mutton Sakuti', desc:'Goan-style mutton curry', price:299, veg:false},
      {name:'Mutton Gosh', desc:'Rich mutton gravy', price:299, veg:false},
      {name:'Fish Gravy - Kingfish / Modso / Chonak', desc:'Fresh fish curry', price:299, veg:false},
      {name:'Fish Gravy - Bangda / Lepo', desc:'Local fish gravy', price:199, veg:false},
      {name:'Prawns Masala', desc:'Prawns in masala gravy', price:349, veg:false}
    ]
  },
  {
    id: 'thalis',
    name: 'Thalis & Homestyle Meals',
    tagline: 'Complete meals with rice, chapati, curry, sol kadhi and sides.',
    items: [
      {name:'Veg Thali', desc:'Rice, chapati, 3 veg curries, papad, pickle and salad', price:149, veg:true},
      {name:'Andhra Veg Thali', desc:'Rice, chapati, karam podi, 3 veg curries, rasam, sambar, curd, papad and pickle', price:199, veg:true},
      {name:'Dal Kichadi', desc:'With papad, pickle and salad', price:129, veg:true},
      {name:'Dal Chapati / Rice', desc:'Simple dal meal', price:89, veg:true},
      {name:'Curd Rice', desc:'Cool comfort bowl', price:89, veg:true},
      {name:'Chapati', desc:'Single chapati', price:20, veg:true},
      {name:'Chicken Thali', desc:'Rice, chapati, chicken masala, sol kadhi, kismur/egg fry, veg curry, papad, pickle and salad', price:169, veg:false},
      {name:'Andhra Chicken Thali', desc:'Rice, chapati, karam podi, chicken gravy, chicken fry, egg fry, 2 veg curries, sambar, rasam, curd, papad and pickle', price:249, veg:false},
      {name:'Fish Thali - Lepo / Bangda', desc:'Rice, chapati, fish rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, papad, pickle and salad', price:169, veg:false},
      {name:'Fish Thali - Chonak / Modso', desc:'Rice, chapati, fish rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, papad, pickle and salad', price:199, veg:false},
      {name:'Fish Thali - Kingfish', desc:'Rice, chapati, kingfish rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, papad, pickle and salad', price:239, veg:false},
      {name:'Fish Thali - Pomfret', desc:'Rice, chapati, pomfret rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, papad, pickle and salad', price:349, veg:false},
      {name:'Prawns Thali', desc:'Rice, chapati, prawns rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, papad, pickle and salad', price:239, veg:false},
      {name:'Mutton Thali', desc:'Rice, chapati, mutton gravy, sol kadhi, egg fry, veg curry, papad, pickle and salad', price:299, veg:false}
    ]
  },
  {
    id: 'biryani-rice',
    name: 'Biryani, Rice & Chinese',
    tagline: 'Filling rice bowls, biryani plates, fried rice and noodles.',
    items: [
      {name:'Veg Biryani', desc:'Vegetarian biryani', price:179, veg:true},
      {name:'Paneer Biryani', desc:'Paneer biryani', price:199, veg:true},
      {name:'Jeera Rice', desc:'Fragrant cumin rice', price:80, veg:true},
      {name:'Plain Rice', desc:'Steamed rice', price:40, veg:true},
      {name:'Chicken Biryani - Full', desc:'Full portion', price:199, veg:false},
      {name:'Chicken Biryani - Half', desc:'Half portion', price:139, veg:false},
      {name:'Mutton Biryani', desc:'Mutton biryani', price:349, veg:false},
      {name:'Prawns Biryani', desc:'Prawns biryani', price:299, veg:false},
      {name:'Fish Fry Biryani', desc:'Biryani with fish fry', price:199, veg:false},
      {name:'Veg Fried Rice / Szechwan', desc:'Veg rice options', price:169, veg:true},
      {name:'Veg Hakka Noodles / Szechwan', desc:'Veg noodles options', price:169, veg:true},
      {name:'Chicken Fried Rice / Szechwan', desc:'Chicken rice options', price:189, veg:false},
      {name:'Chicken Hakka Noodles / Szechwan', desc:'Chicken noodles options', price:189, veg:false},
      {name:'Egg Fried Rice / Szechwan', desc:'Egg rice options', price:179, veg:false},
      {name:'Egg Hakka Noodles / Szechwan', desc:'Egg noodles options', price:179, veg:false}
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    tagline: 'Cool drinks to finish the meal.',
    items: [
      {name:'Fresh Juice', desc:'No sugar added', price:99, veg:true},
      {name:'Lime Soda', desc:'Sweet / salt', price:40, veg:true},
      {name:'Butter Milk', desc:'Refreshing chaas', price:40, veg:true},
      {name:'Sweet Lassi', desc:'Sweet yoghurt drink', price:60, veg:true},
      {name:'Pepsi / Coke / Thumbs Up', desc:'Can', price:50, veg:true},
      {name:'Water', desc:'500ml / 1L', price:10, veg:true}
    ]
  }
];

const REVIEWS = [
  {name:'Subrata Mondal', text:'A true gem for fish lovers. The owner is welcoming, and the food was awesome and healthy.', tag:'Fish lovers'},
  {name:'Mohammed Bin', text:'Great quality and quantity for the price. A small cozy café where the food makes up for everything.', tag:'Value for money'},
  {name:'Suthakar M.', text:'The rasam was full of flavour and memorable. Pleasant atmosphere and attentive staff.', tag:'Rasam & service'},
  {name:'Nihar Rathod', text:'Amazing quality and quantity for thali. Prawns Thali recommended. Also try Kingfish.', tag:'Prawns thali'},
  {name:'Susan Shee', text:'Wonderful place to have food at a great price. Full value for your money. Awesome biryani.', tag:'Biryani'},
  {name:'Rose D’ Souza', text:'Excellent service, extremely tasty food, excellent hygiene and graceful ambience.', tag:'Hygiene'},
  {name:'Kumar Komil', text:'We had breakfast, lunch and dinner here for four days. Food quality is awesome and the owner is very nice.', tag:'Daily meals'},
  {name:'Vaishnavi Kharat', text:'Affordable prices, really good food quality and taste. Fish thali and kingfish were cool.', tag:'Fish thali'}
];
