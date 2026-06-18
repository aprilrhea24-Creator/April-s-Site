export type CateringMenuSection = {
  title: string;
  note?: string;
  items: {
    title: string;
  note?: string;
    image?: string | null;
    description: string;
    luxury?: boolean;
  }[];
};

export const cateringMenuDefaults: CateringMenuSection[] = [
  {
    title: "Seafood Boil",
    items: [
      { title: "The Starter Boil", image: "/images/menu/seafood-boil-1.jpg", description: "1 Cluster, half pound shrimp, potatoes, corn, egg, sausage." },
      { title: "The Classic Boil", image: "/images/menu/seafood-boil-2.jpg", description: "2 Clusters, half pound shrimp, potatoes, corn, egg, sausage." },
      { title: "The Feast Boil", image: "/images/menu/seafood-boil-3.jpg", description: "3 Clusters, half pound shrimp, potatoes, corn, egg, sausage." }
    ]
  },
  {
    title: "Appetizers",
    items: [
      { title: "Seafood Egg Rolls", image: "/seafood-egg-rolls.jpg", description: "Crispy egg rolls stuffed with premium seafood and herbs." },
      { title: "Philly Cheesesteak Egg Rolls", image: "/philly-cheesesteak-egg-rolls.jpg", description: "Thin-sliced steak, onions, and melted cheese in a crispy wrapper." },
      { title: "Cajun Seafood Dip", image: "/cajun-seafood-dip.jpg", description: "Rich, creamy dip loaded with seasoned seafood and served with crackers." },
      { title: "Spinach Artichoke Dip", image: "/spinach-artichoke-dip.jpg", description: "Classic creamy blend of spinach and artichoke." },
      { title: "Charcuterie Board", image: "/charcuterie-board.jpg", description: "A curated selection of meats, cheeses, fruits, and crackers." },
      { title: "Lobster Bites", image: "/lobster-bites.jpg", description: "Tender chunks of lobster, lightly breaded and fried to golden perfection.", luxury: true }
    ]
  },
  {
    title: "Pasta & More",
    items: [
      { title: "Chicken Alfredo", image: "/chicken-alfredo-pasta.jpg", description: "Fettuccine pasta in a rich, creamy parmesan sauce with grilled chicken." },
      { title: "Rasta Pasta: Chicken, Oxtail, or Seafood", image: "/rasta-pasta.jpg", description: "Caribbean-inspired pasta with bell peppers and a kick of spice." },
      { title: "Beef Stroganoff", image: "/beef-stroganoff.jpg", description: "Savory mushroom and beef cream sauce over tender pasta." },
      { title: "Lasagna Rolls", image: "/lasagna-rolls.jpg", description: "Rolled lasagna layers filled with cheese, herbs, and house sauce." },
      { title: "Pesto Pasta", image: "/pesto-pasta.jpg", description: "Pasta tossed in basil pesto with parmesan." },
      { title: "Gumbo", image: "/gumbo.jpg", description: "Slow-simmered Creole stew with rich roux and bold seasoning." },
      { title: "Mixed Berry Salad", image: "/mixed-berry-salad.jpg", description: "Field greens with seasonal berries and vinaigrette." },
      { title: "Caesar Salad", image: "/caesar-salad.jpg", description: "Romaine, Caesar dressing, croutons, and parmesan." },
      { title: "Heirloom Tomato and Basil with Burrata", image: "/heirloom-tomato-burrata.jpg", description: "Heirloom tomatoes with basil and creamy burrata cheese." },
      { title: "Spring Veggie Salad", image: "/spring-veggie-salad.jpg", description: "Fresh spring greens with seasonal vegetables." },
      { title: "Horseradish Cream", image: "/horseradish-cream.jpg", description: "A bold sauce option for savory dishes." },
      { title: "Mushroom Sauce", image: "/mushroom-sauce.jpg", description: "Rich mushroom sauce for steaks, proteins, and sides." }
    ]
  },
  {
    title: "Protein",
    items: [
      { title: "Fried Party Wings with Hot Honey Sauces", image: "/fried-party-wings.jpg", description: "Crispy wings finished with sweet and fiery hot honey sauce." },
      { title: "Baked Chicken", image: "/baked-chicken.jpg", description: "Herb-roasted chicken cooked for tenderness and flavor." },
      { title: "Oxtail", image: "/oxtail.jpg", description: "Deeply savory braised oxtails cooked until tender.", luxury: true },
      { title: "Lamb Chops", image: "/lamb-chops.jpg", description: "Seared premium lamb chops with Chef Thai seasoning.", luxury: true },
      { title: "Pot Roast", image: "/pot-roast.jpg", description: "Classic slow-cooked beef pot roast with comfort-food flavor." },
      { title: "Red Wine Short Ribs", image: "/red-wine-short-ribs.jpg", description: "Short ribs braised in a rich red wine reduction.", luxury: true },
      { title: "Barbecue Ribs or Chicken", image: "/bbq-ribs-chicken.jpg", description: "Tender barbecue meats with bold house sauce." },
      { title: "Pork Chops: Smothered or Fried", image: "/smothered-pork-chops.jpg", description: "Southern-style pork chops served smothered or fried." },
      { title: "Shrimp: Sauteed, Fried, or Garlic Butter", image: "/shrimp.jpg", description: "Shrimp prepared in the guest's preferred style." },
      { title: "Halibut Cajun Garlic Butter or Miso Glazed", image: "/halibut.jpg", description: "Premium halibut with Cajun garlic butter or miso glaze.", luxury: true },
      { title: "Salmon: Blackened or Honey Chili Sauce", image: "/salmon.jpg", description: "Salmon prepared blackened or glazed with honey chili sauce." },
      { title: "Catfish: Blackened or Fried", image: "/catfish.jpg", description: "Catfish served blackened or Southern-fried." },
      { title: "Sirloin Burgers or Chicken", image: "/sirloin-burgers.jpg", description: "Grilled sirloin burgers or chicken prepared for the event." },
      { title: "Steak: Ribeye, Filet, or T-Bone with Chimichurri", image: "/steak-chimichurri.jpg", description: "Steak selections served with chimichurri." },
      { title: "Crab Legs", image: "/crab-legs.jpg", description: "Sweet crab legs served with rich seafood flavor.", luxury: true },
      { title: "Lobster Tail", image: "/lobster-tail.jpg", description: "Broiled lobster tail seasoned and finished with butter.", luxury: true },
      { title: "Kabobs: Shrimp or Chicken", image: "/kabobs.jpg", description: "Skewered shrimp or chicken with vegetables." },
      { title: "Smothered Turkey Wings", image: "/smothered-turkey-wings.jpg", description: "Tender turkey wings covered in savory gravy." }
    ]
  },
  {
    title: "Sides",
    items: [
      { title: "Fried Rice: Veggie, Chicken, or Shrimp", image: "/fried-rice.jpg", description: "Seasoned fried rice with vegetable, chicken, or shrimp options." },
      { title: "Dirty Rice", image: "/dirty-rice.jpg", description: "Cajun rice cooked with bold seasoning and aromatics." },
      { title: "Red Beans and Rice", image: "/red-beans-rice.jpg", description: "Slow-simmered red beans served over rice." },
      { title: "Baked Mac and Cheese", image: "/baked-mac-cheese.jpg", description: "Creamy baked macaroni with a golden cheese crust." },
      { title: "Smoked Turkey Black Eyed Peas", image: "/smoked-turkey-black-eyed-peas.jpg", description: "Black eyed peas infused with smoked turkey flavor." },
      { title: "Stuffed Loaded Baked Potatoes", image: "/stuffed-loaded-baked-potato.jpg", description: "Loaded baked potatoes with classic toppings." },
      { title: "Mashed Potatoes and Gravy", image: "/mashed-potatoes-gravy.jpg", description: "Creamy mashed potatoes with savory gravy." },
      { title: "Broccolini", image: "/broccolini.jpg", description: "Tender broccolini with light garlic seasoning." },
      { title: "Garlic Herb Asparagus", image: "/garlic-herb-asparagus.jpg", description: "Asparagus roasted with garlic and herbs." },
      { title: "Brussel Sprouts with Bacon", image: "/brussel-sprouts-bacon.jpg", description: "Roasted brussel sprouts with smoky bacon." },
      { title: "Smoked Turkey Green Beans", image: "/smoked-turkey-green-beans.jpg", description: "Southern green beans simmered with smoked turkey." },
      { title: "Cream of Corn", image: "/cream-of-corn.jpg", description: "Sweet, rich creamed corn." },
      { title: "Fried Plantains", image: "/fried-plantains.jpg", description: "Sweet plantains fried until golden." },
      { title: "Fried Cabbage", image: "/fried-cabbage.jpg", description: "Cabbage cooked with smoky seasoning." },
      { title: "Smoked Turkey Collard Greens", image: "/smothered-turkey-wings.jpg", description: "Collard greens braised with smoked turkey." },
      { title: "Yellow Rice", image: "/yellow-rice.jpg", description: "Aromatic yellow rice seasoned for catering service." },
      { title: "Cornbread", image: "/cornbread.jpg", description: "Sweet, buttery cornbread served warm." },
      { title: "Rolls", image: "/rolls.jpg", description: "Soft rolls served with the meal." },
      { title: "Mediterranean Rice", image: "/mediterranean-rice.jpg", description: "Rice with fresh herbs and Mediterranean seasoning." },
      { title: "Candied Yams", image: "/candied-yams.jpg", description: "Sweet potatoes baked in a brown sugar glaze." },
      { title: "Cajun Crawfish Rice", image: "/cajun-crawfish-rice.jpg", description: "Premium rice packed with Cajun spice and crawfish.", luxury: true },
      { title: "Seafood Mac and Cheese", image: "/seafood-mac-cheese.jpg", description: "Baked mac and cheese elevated with seafood.", luxury: true }
    ]
  },
  {
    title: "Dessert",
    items: [
      { title: "Cheesecake: Peach Cobbler or Banana Pudding", image: "/cheesecake.jpg", description: "Cheesecake with peach cobbler or banana pudding topping." },
      { title: "Red Velvet Cake", image: "/red-velvet-cake.jpg", description: "Classic red velvet cake with cream cheese frosting." },
      { title: "Yellow Cake with Chocolate Frosting", image: "/yellow-cake.jpg", description: "Moist yellow cake with chocolate frosting." },
      { title: "Lemon Blueberry Pound Cake", image: "/lemon-pound-cake.jpg", description: "Buttery pound cake with lemon and blueberry flavor." },
      { title: "Brownies", image: "/brownies.jpg", description: "Fudgy chocolate brownies." },
      { title: "Peach Cobbler", image: "/peach-cobbler.jpg", description: "Warm peach cobbler with a buttery crust." }
    ]
  }
];
