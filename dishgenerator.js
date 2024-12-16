const dishes = {
Italian: [
{
name: "Spaghetti Carbonara",
image: "images/spaghetti-carbonara-recipe-snippet.jpg",
calories: "450",
protein: "18g",
fat: "22g",
carbs: "45g",
instructions: "To prepare Spaghetti Carbonara, begin by cooking the spaghetti in salted boiling water until it reaches an al dente texture. Reserve a small amount of pasta water before draining. In a mixing bowl, whisk together eggs and freshly grated Parmesan cheese to create a creamy sauce base. In a skillet, cook diced pancetta or bacon until crispy and remove from heat. Toss the hot spaghetti with the pancetta, then quickly stir in the egg mixture, adding the reserved pasta water as needed to achieve a silky, creamy consistency. Serve immediately with a generous topping of black pepper and extra Parmesan.",
video: "https://www.youtube.com/embed/3AAdKl1UYZs"
},

{
name: "Margherita Pizza",
image: "images/margherita-pizza.jfif",
calories: "300", 
protein: "12g", 
fat: "10g",
carbs: "40g",
instructions: "To make Margherita Pizza, roll out the pizza dough and place it on a baking sheet or pizza stone. Spread a thin and even layer of tomato sauce over the dough. Arrange fresh mozzarella slices and whole basil leaves on top. Bake in a preheated oven at 475°F (245°C) for 8-12 minutes, or until the crust is golden brown and the cheese is bubbly. Slice and serve hot.",
video: "https://www.youtube.com/embed/1-SJGQ2HLp8"
},
 
{
name: "Lasagna",
image: "images/Homemade-lasagna-1200x675.png",
calories: "500", 
protein: "25g", 
fat: "25g", 
carbs: "45g",
instructions: "For Lasagna, start by pre-cooking lasagna sheets unless you're using oven-ready ones. In a baking dish, layer meat sauce (ground meat cooked with tomato sauce), lasagna sheets, and ricotta cheese or béchamel sauce. Repeat the layers until the dish is full, then top with shredded mozzarella and Parmesan cheese. Bake in a preheated oven at 375°F (190°C) for 40-50 minutes. Let the lasagna cool slightly before slicing and serving.",
video: "https://www.youtube.com/embed/7Rp3etXNy3c"
},
 
{
name: "Risotto",
image: "images/Creamy-Parmesan-Risotto.jpg",
calories: "400", 
protein: "10g",
fat: "15g", 
carbs: "50g",
instructions: "To prepare Risotto, sauté minced onions in butter until they turn translucent. Add Arborio rice to the pan and toast it lightly, then deglaze with white wine. Gradually add warm broth, stirring constantly, until the rice is fully cooked and creamy. Finish the dish by stirring in grated Parmesan cheese and a pat of butter for added richness. Serve warm.",
video: "https://www.youtube.com/embed/E_8wQsmjn0A"
},

{
name: "Tiramisu",
image: "images/olive-garden-tiramisu-recipe-e1720991120649.jpg",
calories: "450", 
protein: "6g", 
fat: "30g", 
carbs: "40g",
instructions: "For Tiramisu, start by brewing strong coffee and allowing it to cool. Dip ladyfinger biscuits briefly into the coffee and arrange them in a serving dish. In a separate bowl, mix mascarpone cheese with sugar and whipped cream until smooth. Layer the mascarpone mixture over the soaked ladyfingers, alternating layers until the dish is full. Dust the top with cocoa powder and refrigerate for at least 4 hours before serving.",
video: "https://www.youtube.com/embed/C__032Z_m8g"
        
}
],
    
Indian: [
{
name: "Chicken Tikka Masala",
image: "images/DSC_9207.webp",
calories: "530", 
protein: "30g", 
fat: "20g", 
carbs: "55g",
instructions: "To make Chicken Tikka Masala, marinate chicken pieces in a mixture of yogurt, garlic, ginger, and spices like turmeric and cumin. Grill or pan-fry the marinated chicken until fully cooked. In a saucepan, prepare the masala sauce by sautéing onions and tomatoes with aromatic spices, then blend the mixture until smooth. Add the cooked chicken to the sauce and simmer for 10 minutes. Serve hot with steamed rice or naan bread.",
video: "https://www.youtube.com/embed/Bkd0LxBd2L8"
},

{
name: "Paneer Butter Masala",
image: "images/peanut.jfif",
calories: "400", 
protein: "15g", 
fat: "25g", 
carbs: "30g",
instructions: "Paneer Butter Masala is made by first sautéing paneer cubes in butter until they are lightly golden. Prepare a creamy tomato-based sauce in a separate pan using butter, heavy cream, and Indian spices like garam masala. Combine the paneer with the sauce and simmer for a few minutes. Serve with naan or roti.",
video: "https://www.youtube.com/embed/U1LVDFwi8qI"
},

{
name: "Biryani",
image: "images/biryani.jfif",
calories: "600", 
protein: "25g", 
fat: "20g", 
carbs: "80g",
instructions: "For Biryani, begin by parboiling rice with whole spices such as cardamom and cinnamon. Layer the partially cooked rice with spiced meat or vegetables in a pot. Cover the pot and cook on low heat to allow the flavors to meld together. Garnish the dish with fried onions and fresh herbs before serving.",
video: "https://www.youtube.com/embed/-cLDrBc4Of4"
},

{
name: "Samosa",
image: "images/samosa.jfif",
calories: "250", 
protein: "5g", 
fat: "15g", 
carbs: "25g",
instructions: "To prepare Samosas, create a filling of spiced mashed potatoes mixed with peas and sautéed onions. Place the filling in triangular dough wrappers and seal the edges securely. Deep fry the samosas in hot oil until they are golden brown. Serve with chutney or ketchup.",
video: "https://www.youtube.com/embed/3OZn-iCGf5s"
},

{
name: "Gulab Jamun",
image: "images/gulab.jfif",
calories: "200", 
protein: "2g", 
fat: "10g", 
carbs: "25g",
instructions: "For Gulab Jamun, knead a dough made from milk powder, flour, and a liquid base into small, smooth balls. Deep fry the balls until golden brown, then soak them in warm sugar syrup flavored with cardamom and rose water. Serve warm or chilled.",
video: "https://www.youtube.com/embed/J3O0ZEJYLFQ"
}
],

Japanese: [
{
name: "Sushi Platter",
image: "images/sushi.jfif",
calories: "350", 
protein: "15g", 
fat: "5g", 
carbs: "60g",
instructions: "To create a Sushi Platter, cook sushi rice and season it with rice vinegar, sugar, and salt. Slice fresh fish, such as tuna or salmon, into thin pieces. Use nori sheets to roll the rice and fillings, such as fish, cucumber, or avocado, into sushi rolls. Alternatively, prepare nigiri by molding rice into small rectangles and topping them with slices of fish. Serve with soy sauce, wasabi, and pickled ginger.",
video: "https://www.youtube.com/embed/nIoOv6lWYnk&t=37s"
},

{
name: "Ramen",
image: "images/ramen.jpg",
calories: "450", 
protein: "20g", 
fat: "15g", 
carbs: "55g",
instructions: "To prepare Ramen, make a rich broth using chicken or pork bones, soy sauce, or miso paste. Cook ramen noodles separately and add them to the broth. Top with sliced pork, soft-boiled eggs, seaweed, and green onions. Serve steaming hot.",
video: "https://www.youtube.com/embed/eDSwdEDKYds"
},
        
{
name: "Tempura",
image: "images/tempura.jpg",
calories: "300", 
protein: "10g", 
fat: "15g", 
carbs: "30g",
instructions: "Tempura is made by dipping vegetables or seafood in a light batter of flour, cold water, and eggs. Fry the battered pieces in hot oil until they are crispy and golden brown. Serve immediately with a dipping sauce.",
video: "https://www.youtube.com/embed/YjqRU1mNBSQ"
},

{
name: "Miso Soup",
image: "images/miso.webp",
calories: "100", 
protein: "5g", 
fat: "3g", 
carbs: "10g",
instructions: "To make Miso Soup, heat dashi broth and stir in miso paste until dissolved. Add cubed tofu, wakame seaweed, and sliced green onions to the broth. Serve warm as a starter or side dish.",
video: "https://www.youtube.com/embed/hWnPT7ucF_I"
},

{
name: "Matcha Ice Cream",
image: "images/matcha.jpg",
calories: "250", 
protein: "5g", 
fat: "15g", 
carbs: "20g",
instructions: "For Matcha Ice Cream, whisk matcha powder into a base made of cream, milk, and sugar. Pour the mixture into an ice cream maker and churn until creamy. Freeze the ice cream until firm before serving.",
video: "https://www.youtube.com/embed/fpK0U_fb9_U"
}
],

Mexican: [
{
name: "Tacos",
image: "images/tacos.jpg",
calories: "300", 
protein: "15g", 
fat: "10g", 
carbs: "35g",
instructions: "To make Tacos, cook seasoned meat, such as beef, chicken, or pork, in a skillet until browned and fully cooked. Warm tortillas and fill them with the meat, shredded lettuce, diced tomatoes, grated cheese, and salsa. Serve immediately.",
video: "https://www.youtube.com/embed/vmuLzYet9K4"
},

{
name: "Guacamole",
image: "images/guac.jpg",
calories: "150", 
protein: "2g", 
fat: "10g", 
carbs: "10g",
instructions: "For Guacamole, mash ripe avocados in a bowl. Mix in lime juice, chopped onions, diced tomatoes, and salt. Serve as a dip or as a topping for tacos and nachos.",
video: "https://www.youtube.com/embed/a6yCQdx3Pkg&t=328s"
},
        
{
name: "Enchiladas",
image: "images/enchiladas.jfif",
calories: "400", 
protein: "20g", 
fat: "15g", 
carbs: "40g",
instructions: "Enchiladas are made by filling tortillas with meat or beans, rolling them tightly, and placing them in a baking dish. Top with enchilada sauce and shredded cheese, then bake in the oven until bubbly. Serve warm.",
video: "https://www.youtube.com/embed/Db_dBp8V6HU"
},

{
name: "Churros",
image: "images/churros.webp",
calories: "250", 
protein: "3g", 
fat: "15g", 
carbs: "25g",
instructions: "To make Churros, pipe dough into hot oil using a pastry bag fitted with a star tip. Fry the dough until golden brown, then roll the churros in cinnamon sugar. Serve with chocolate dipping sauce if desired.",
video: "https://www.youtube.com/embed/Agx6Gq9OVIk"
},
        
{
name: "Quesadillas",
image: "images/dillas.webp",
calories: "350", 
protein: "15g", 
fat: "250", 
carbs: "30g",
instructions: "Quesadillas are prepared by filling tortillas with cheese and optional ingredients like chicken or vegetables. Fold the tortillas and cook on a skillet until the cheese is melted and the tortilla is golden. Slice and serve warm.",
video: "https://www.youtube.com/embed/E0G5Y2SOW0c"
}
]

};

function generateDish(cuisine) {

    const cuisineDishes = dishes[cuisine];
const randomIndex = Math.floor(Math.random() * cuisineDishes.length);
const dish = cuisineDishes[randomIndex];
const dishContainer = document.getElementById('dish-container');

dishContainer.innerHTML = `

<img src="${dish.image}" alt="${dish.name}">

<h2>${dish.name}</h2>

<div class="calories"><strong>Calories:</strong> ${dish.calories}</div>
<div class="protein"><strong>Protein:</strong> ${dish.protein}</div>
<div class="fat"><strong>Fat:</strong> ${dish.fat}</div>
<div class="carbs"><strong>Carbs:</strong> ${dish.carbs}</div>
<div class="instructions"><strong>Instructions:</strong> ${dish.instructions}</div>

${dish.video ? `<iframe width="560" height="315" src="${dish.video}" frameborder="0" allowfullscreen></iframe>`:''}

`;
    
}