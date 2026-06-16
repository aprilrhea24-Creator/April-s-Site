export type CateringMenuItem = {
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
      { title: "Seafood Egg Rolls", description: "Crispy, golden wrapper stuffed with a seasoned medley of fresh seafood." },
      { title: "Philly Cheesesteak Egg Rolls", description: "Tender shaved steak, melted cheese, and grilled peppers rolled up and fried to perfection." },
      { title: "Mini Crab Cakes", description: "Bite-sized, premium jumbo lump crab cakes served with a signature house remoulade." },
      { title: "Fried Lobster Bites", description: "Crispy lobster pieces tossed in a sweet and spicy honey sriracha glaze.", luxury: true },
      { title: "Fried Chicken Sliders", description: "Crispy hand-breaded chicken breast on a toasted mini brioche bun with house pickles." },
      { title: "Mini Shrimp Po'boys", description: "Classic New Orleans-style mini sandwiches with crispy fried shrimp and creole dressing." },
      { title: "Honey Chili Salmon Sliders", description: "Seared salmon bites glazed in a sweet honey chili sauce on artisan mini buns." },
      { title: "Mini Cheeseburgers", description: "Flame-grilled beef sliders topped with melted cheddar on soft brioche buns." }
    ]
  },
  {
    title: "Seafood Boil",
    note: "$80 per person | Minimum 10 people",
    items: [
      { title: "Shrimp", description: "Classic seafood boil shrimp cooked with Chef Thai seasoning." },
      { title: "Snow Crab", description: "Sweet snow crab served as part of the seafood boil spread." },
      { title: "Mussels", description: "Tender mussels simmered into the boil for rich seafood flavor." },
      { title: "Crawfish", description: "Luxury seafood boil add-on with Cajun flavor.", luxury: true },
      { title: "King Crab", description: "Luxury king crab add-on for premium seafood events.", luxury: true },
      { title: "Lobster Tail", description: "Buttery lobster tail add-on for elevated seafood service.", luxury: true },
      { title: "Sausage", description: "Savory sausage rounds cooked into the seafood boil." },
      { title: "Potatoes", description: "Boil-style potatoes seasoned with the seafood spread." },
      { title: "Corn on the Cob", description: "Sweet corn on the cob served with the boil." },
      { title: "Boiled Eggs", description: "Classic boiled eggs finished in the seafood boil seasoning." }
    ]
  },
  {
    title: "Pasta & More",
    items: [
      { title: "Chicken or Shrimp Alfredo", description: "Garlic parmesan cream sauce over pasta with chicken or shrimp." },
      { title: "Rasta Pasta", description: "Creamy Caribbean-inspired pasta with peppers and jerk seasoning." },
      { title: "Shrimp Scampi", description: "Shrimp sauteed in lemon, garlic, herbs, and butter sauce." },
      { title: "Stroganoff Pasta", description: "Savory mushroom and beef cream sauce over tender pasta." },
      { title: "Lasagna Rolls", description: "Rolled lasagna layers filled with cheese, herbs, and house sauce." },
      { title: "Pesto Pasta", description: "Pasta tossed in basil pesto with parmesan." },
      { title: "Gumbo", description: "Slow-simmered Creole stew with rich roux and bold seasoning." },
      { title: "Mixed Berry Salad", description: "Field greens with seasonal berries and vinaigrette." },
      { title: "Caesar Salad", description: "Romaine, Caesar dressing, croutons, and parmesan." },
      { title: "Heirloom Tomato and Basil with Burrata", description: "Heirloom tomatoes with basil and creamy burrata cheese." },
      { title: "Spring Veggie Salad", description: "Fresh spring greens with seasonal vegetables." },
      { title: "Horseradish Cream", description: "A bold sauce option for savory dishes." },
      { title: "Mushroom Sauce", description: "Rich mushroom sauce for steaks, proteins, and sides." }
    ]
  },
  {
    title: "Protein",
    items: [
      { title: "Fried Party Wings with Hot Honey Sauces", description: "Crispy wings finished with sweet and fiery hot honey sauce." },
      { title: "Baked Chicken", description: "Herb-roasted chicken cooked for tenderness and flavor." },
      { title: "Oxtail", description: "Deeply savory braised oxtails cooked until tender.", luxury: true },
      { title: "Lamb Chops", description: "Seared premium lamb chops with Chef Thai seasoning.", luxury: true },
      { title: "Pot Roast", description: "Classic slow-cooked beef pot roast with comfort-food flavor." },
      { title: "Red Wine Short Ribs", description: "Short ribs braised in a rich red wine reduction.", luxury: true },
      { title: "Barbecue Ribs or Chicken", description: "Tender barbecue meats with bold house sauce." },
      { title: "Pork Chops: Smothered or Fried", description: "Southern-style pork chops served smothered or fried." },
      { title: "Shrimp: Sauteed, Fried, or Garlic Butter", description: "Shrimp prepared in the guest's preferred style." },
      { title: "Halibut Cajun Garlic Butter or Miso Glazed", description: "Premium halibut with Cajun garlic butter or miso glaze.", luxury: true },
      { title: "Salmon: Blackened or Honey Chili Sauce", description: "Salmon prepared blackened or glazed with honey chili sauce." },
      { title: "Catfish: Blackened or Fried", description: "Catfish served blackened or Southern-fried." },
      { title: "Sirloin Burgers or Chicken", description: "Grilled sirloin burgers or chicken prepared for the event." },
      { title: "Steak: Ribeye, Filet, or T-Bone with Chimichurri", description: "Steak selections served with chimichurri." },
      { title: "Crab Legs", description: "Sweet crab legs served with rich seafood flavor.", luxury: true },
      { title: "Lobster Tail", description: "Broiled lobster tail seasoned and finished with butter.", luxury: true },
      { title: "Kabobs: Shrimp or Chicken", description: "Skewered shrimp or chicken with vegetables." },
      { title: "Smothered Turkey Wings", description: "Tender turkey wings covered in savory gravy." }
    ]
  },
  {
    title: "Sides",
    items: [
      { title: "Fried Rice: Veggie, Chicken, or Shrimp", description: "Seasoned fried rice with vegetable, chicken, or shrimp options." },
      { title: "Dirty Rice", description: "Cajun rice cooked with bold seasoning and aromatics." },
      { title: "Red Beans and Rice", description: "Slow-simmered red beans served over rice." },
      { title: "Baked Mac and Cheese", description: "Creamy baked macaroni with a golden cheese crust." },
      { title: "Smoked Turkey Black Eyed Peas", description: "Black eyed peas infused with smoked turkey flavor." },
      { title: "Stuffed Loaded Baked Potatoes", description: "Loaded baked potatoes with classic toppings." },
      { title: "Mashed Potatoes and Gravy", description: "Creamy mashed potatoes with savory gravy." },
      { title: "Broccolini", description: "Tender broccolini with light garlic seasoning." },
      { title: "Garlic Herb Asparagus", description: "Asparagus roasted with garlic and herbs." },
      { title: "Brussel Sprouts with Bacon", description: "Roasted brussel sprouts with smoky bacon." },
      { title: "Smoked Turkey Green Beans", description: "Southern green beans simmered with smoked turkey." },
      { title: "Cream of Corn", description: "Sweet, rich creamed corn." },
      { title: "Fried Plantains", description: "Sweet plantains fried until golden." },
      { title: "Fried Cabbage", description: "Cabbage cooked with smoky seasoning." },
      { title: "Smoked Turkey Collard Greens", description: "Collard greens braised with smoked turkey." },
      { title: "Yellow Rice", description: "Aromatic yellow rice seasoned for catering service." },
      { title: "Cornbread", description: "Sweet, buttery cornbread served warm." },
      { title: "Rolls", description: "Soft rolls served with the meal." },
      { title: "Mediterranean Rice", description: "Rice with fresh herbs and Mediterranean seasoning." },
      { title: "Candied Yams", description: "Sweet potatoes baked in a brown sugar glaze." },
      { title: "Cajun Crawfish Rice", description: "Premium rice packed with Cajun spice and crawfish.", luxury: true },
      { title: "Seafood Mac and Cheese", description: "Baked mac and cheese elevated with seafood.", luxury: true }
    ]
  },
  {
    title: "Dessert",
    items: [
      { title: "Cheesecake: Peach Cobbler or Banana Pudding", description: "Cheesecake with peach cobbler or banana pudding topping." },
      { title: "Red Velvet Cake", description: "Classic red velvet cake with cream cheese frosting." },
      { title: "Yellow Cake with Chocolate Frosting", description: "Moist yellow cake with chocolate frosting." },
      { title: "Lemon Blueberry Pound Cake", description: "Buttery pound cake with lemon and blueberry flavor." },
      { title: "Brownies", description: "Fudgy chocolate brownies." },
      { title: "Peach Cobbler", description: "Warm peach cobbler with a buttery crust." }
    ]
  }
];
