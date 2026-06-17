export type CateringMenuItem = {
  imageUrl?: string;
  title: string;
  description: string;
  luxury?: boolean;
};

export type CateringMenuSection = {
  title: string;
  note?: string;
  items: CateringMenuItem[];
};

export const cateringMenuDefaults: CateringMenuSection[] = [
  {
    title: "Appetizers",
    items: [
      { title: "Seafood Egg Rolls", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Crispy, golden wrapper stuffed with a seasoned medley of fresh seafood." },
      { title: "Philly Cheesesteak Egg Rolls", imageUrl: "/images/menu/philly-cheesesteak-egg-rolls.jpg", description: "Tender shaved steak, melted cheese, and grilled peppers rolled up and fried to perfection." },
      { title: "Mini Crab Cakes", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Bite-sized, premium jumbo lump crab cakes served with a signature house remoulade." },
      { title: "Fried Lobster Bites", imageUrl: "/images/menu/lobster-bites.jpg", description: "Crispy lobster pieces tossed in a sweet and spicy honey sriracha glaze.", luxury: true },
      { title: "Fried Chicken Sliders", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Crispy hand-breaded chicken breast on a toasted mini brioche bun with house pickles." },
      { title: "Mini Shrimp Po'boys", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Classic New Orleans-style mini sandwiches with crispy fried shrimp and creole dressing." },
      { title: "Honey Chili Salmon Sliders", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Seared salmon bites glazed in a sweet honey chili sauce on artisan mini buns." },
      { title: "Mini Cheeseburgers", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Flame-grilled beef sliders topped with melted cheddar on soft brioche buns." }
    ]
  },
  {
    title: "Seafood Boil",
    note: "$80 per person | Minimum 10 people",
    items: [
      { title: "Shrimp", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Classic seafood boil shrimp cooked with Chef Thai seasoning." },
      { title: "Snow Crab", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Sweet snow crab served as part of the seafood boil spread." },
      { title: "Mussels", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Tender mussels simmered into the boil for rich seafood flavor." },
      { title: "Crawfish", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Luxury seafood boil add-on with Cajun flavor.", luxury: true },
      { title: "King Crab", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Luxury king crab add-on for premium seafood events.", luxury: true },
      { title: "Lobster Tail", imageUrl: "/images/menu/lobster-tail.jpg", description: "Buttery lobster tail add-on for elevated seafood service.", luxury: true },
      { title: "Sausage", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Savory sausage rounds cooked into the seafood boil." },
      { title: "Potatoes", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Boil-style potatoes seasoned with the seafood spread." },
      { title: "Corn on the Cob", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Sweet corn on the cob served with the boil." },
      { title: "Boiled Eggs", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Classic boiled eggs finished in the seafood boil seasoning." }
    ]
  },
  {
    title: "Pasta & More",
    items: [
      { title: "Chicken or Shrimp Alfredo", imageUrl: "/images/menu/chicken-alfredo-pasta.jpg", description: "Garlic parmesan cream sauce over pasta with chicken or shrimp." },
      { title: "Rasta Pasta", imageUrl: "/images/menu/rasta-pasta.jpg", description: "Creamy Caribbean-inspired pasta with peppers and jerk seasoning." },
      { title: "Shrimp Scampi", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Shrimp sauteed in lemon, garlic, herbs, and butter sauce." },
      { title: "Stroganoff Pasta", imageUrl: "/images/menu/beef-stronganoff.jpg", description: "Savory mushroom and beef cream sauce over tender pasta." },
      { title: "Lasagna Rolls", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Rolled lasagna layers filled with cheese, herbs, and house sauce." },
      { title: "Pesto Pasta", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Pasta tossed in basil pesto with parmesan." },
      { title: "Gumbo", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Slow-simmered Creole stew with rich roux and bold seasoning." },
      { title: "Mixed Berry Salad", imageUrl: "/images/menu/mixed-berry-salad.jpg", description: "Field greens with seasonal berries and vinaigrette." },
      { title: "Caesar Salad", imageUrl: "/images/menu/caesar-salad.jpg", description: "Romaine, Caesar dressing, croutons, and parmesan." },
      { title: "Heirloom Tomato and Basil with Burrata", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Heirloom tomatoes with basil and creamy burrata cheese." },
      { title: "Spring Veggie Salad", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Fresh spring greens with seasonal vegetables." },
      { title: "Horseradish Cream", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "A bold sauce option for savory dishes." },
      { title: "Mushroom Sauce", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Rich mushroom sauce for steaks, proteins, and sides." }
    ]
  },
  {
    title: "Protein",
    items: [
      { title: "Fried Party Wings with Hot Honey Sauces", imageUrl: "/images/menu/fried-party-wings.jpg", description: "Crispy wings finished with sweet and fiery hot honey sauce." },
      { title: "Baked Chicken", imageUrl: "/images/menu/baked-chicken.jpg", description: "Herb-roasted chicken cooked for tenderness and flavor." },
      { title: "Oxtail", imageUrl: "/images/menu/oxtail.jpg", description: "Deeply savory braised oxtails cooked until tender.", luxury: true },
      { title: "Lamb Chops", imageUrl: "/images/menu/lamb-chops.jpg", description: "Seared premium lamb chops with Chef Thai seasoning.", luxury: true },
      { title: "Pot Roast", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Classic slow-cooked beef pot roast with comfort-food flavor." },
      { title: "Red Wine Short Ribs", imageUrl: "/images/menu/red-wine-short-ribs.jpg", description: "Short ribs braised in a rich red wine reduction.", luxury: true },
      { title: "Barbecue Ribs or Chicken", imageUrl: "/images/menu/bbq-ribs-chicken.jpg", description: "Tender barbecue meats with bold house sauce." },
      { title: "Pork Chops: Smothered or Fried", imageUrl: "/images/menu/smothered-pork-chops.jpg", description: "Southern-style pork chops served smothered or fried." },
      { title: "Shrimp: Sauteed, Fried, or Garlic Butter", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Shrimp prepared in the guest's preferred style." },
      { title: "Halibut Cajun Garlic Butter or Miso Glazed", imageUrl: "/images/menu/halibut.jpg", description: "Premium halibut with Cajun garlic butter or miso glaze.", luxury: true },
      { title: "Salmon: Blackened or Honey Chili Sauce", imageUrl: "/images/menu/salmon.jpg", description: "Salmon prepared blackened or glazed with honey chili sauce." },
      { title: "Catfish: Blackened or Fried", imageUrl: "/images/menu/catfish.jpg", description: "Catfish served blackened or Southern-fried." },
      { title: "Sirloin Burgers or Chicken", imageUrl: "/images/menu/sirloin-burgers.jpg", description: "Grilled sirloin burgers or chicken prepared for the event." },
      { title: "Steak: Ribeye, Filet, or T-Bone with Chimichurri", imageUrl: "/images/menu/steak-chimichurri.jpg", description: "Steak selections served with chimichurri." },
      { title: "Crab Legs", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Sweet crab legs served with rich seafood flavor.", luxury: true },
      { title: "Lobster Tail", imageUrl: "/images/menu/lobster-tail.jpg", description: "Broiled lobster tail seasoned and finished with butter.", luxury: true },
      { title: "Kabobs: Shrimp or Chicken", imageUrl: "/images/menu/kabobs.jpg", description: "Skewered shrimp or chicken with vegetables." },
      { title: "Smothered Turkey Wings", imageUrl: "/images/menu/smothered-turkey-wings.jpg", description: "Tender turkey wings covered in savory gravy." }
    ]
  },
  {
    title: "Sides",
    items: [
      { title: "Fried Rice: Veggie, Chicken, or Shrimp", imageUrl: "/images/menu/fried-rice.jpg", description: "Seasoned fried rice with vegetable, chicken, or shrimp options." },
      { title: "Dirty Rice", imageUrl: "/images/menu/dirty-rice.jpg", description: "Cajun rice cooked with bold seasoning and aromatics." },
      { title: "Red Beans and Rice", imageUrl: "/images/menu/red-beans-rice.jpg", description: "Slow-simmered red beans served over rice." },
      { title: "Baked Mac and Cheese", imageUrl: "/images/menu/baked-mac-cheese.jpg", description: "Creamy baked macaroni with a golden cheese crust." },
      { title: "Smoked Turkey Black Eyed Peas", imageUrl: "/images/menu/smoked-turkey-black-eyed-peas.jpg", description: "Black eyed peas infused with smoked turkey flavor." },
      { title: "Stuffed Loaded Baked Potatoes", imageUrl: "/images/menu/stuffed-loaded-baked-potato.jpg", description: "Loaded baked potatoes with classic toppings." },
      { title: "Mashed Potatoes and Gravy", imageUrl: "/images/menu/mashed-potatoes-gravy.jpg", description: "Creamy mashed potatoes with savory gravy." },
      { title: "Broccolini", imageUrl: "/images/menu/broccolini.jpg", description: "Tender broccolini with light garlic seasoning." },
      { title: "Garlic Herb Asparagus", imageUrl: "/images/menu/garlic-herb-asparagus.jpg", description: "Asparagus roasted with garlic and herbs." },
      { title: "Brussel Sprouts with Bacon", imageUrl: "/images/menu/brussel-sprouts-bacon.jpg", description: "Roasted brussel sprouts with smoky bacon." },
      { title: "Smoked Turkey Green Beans", imageUrl: "/images/menu/smoked-turkey-green-beans.jpg", description: "Southern green beans simmered with smoked turkey." },
      { title: "Cream of Corn", imageUrl: "/images/menu/cream-of-corn.jpg", description: "Sweet, rich creamed corn." },
      { title: "Fried Plantains", imageUrl: "/images/menu/fried-plantains.jpg", description: "Sweet plantains fried until golden." },
      { title: "Fried Cabbage", imageUrl: "/images/menu/fried-cabbage.jpg", description: "Cabbage cooked with smoky seasoning." },
      { title: "Smoked Turkey Collard Greens", imageUrl: "/images/menu/smothered-turkey-wings.jpg", description: "Collard greens braised with smoked turkey." },
      { title: "Yellow Rice", imageUrl: "/images/menu/yellow-rice.jpg", description: "Aromatic yellow rice seasoned for catering service." },
      { title: "Cornbread", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Sweet, buttery cornbread served warm." },
      { title: "Rolls", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Soft rolls served with the meal." },
      { title: "Mediterranean Rice", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Rice with fresh herbs and Mediterranean seasoning." },
      { title: "Candied Yams", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Sweet potatoes baked in a brown sugar glaze." },
      { title: "Cajun Crawfish Rice", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Premium rice packed with Cajun spice and crawfish.", luxury: true },
      { title: "Seafood Mac and Cheese", imageUrl: "/images/menu/seafood-mac-cheese.jpg", description: "Baked mac and cheese elevated with seafood.", luxury: true }
    ]
  },
  {
    title: "Dessert",
    items: [
      { title: "Cheesecake: Peach Cobbler or Banana Pudding", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Cheesecake with peach cobbler or banana pudding topping." },
      { title: "Red Velvet Cake", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Classic red velvet cake with cream cheese frosting." },
      { title: "Yellow Cake with Chocolate Frosting", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Moist yellow cake with chocolate frosting." },
      { title: "Lemon Blueberry Pound Cake", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Buttery pound cake with lemon and blueberry flavor." },
      { title: "Brownies", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Fudgy chocolate brownies." },
      { title: "Peach Cobbler", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "Warm peach cobbler with a buttery crust." }
    ]
  }
];
