import salad from '/src/assets/icons_assets/greek salad.jpg';
import bruchetta from '/src/assets/icons_assets/bruchetta.svg';
import  lemon from  '/src/assets/icons_assets/lemon dessert.jpg'
import Alex  from '/src/assets/testimonial assets/alex-mccarthy-RGKdWJOUFH0-unsplash.jpg';
import Guiseppe from '/src/assets/testimonial assets/giuseppe-fogliano-K6wPjUh_FIM-unsplash.jpg';
import Jonas from '/src/assets/testimonial assets/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg';
import Nobert from '/src/assets/testimonial assets/norbert-buduczki-_h3sqkJ4RrY-unsplash.jpg';
import NobertMubu from '/src/assets/testimonial assets/norbert-buduczki-_h3sqkJ4RrY-unsplash.jpg';
import Yogendra from '/src/assets/testimonial assets/yogendra-singh-HrpYHchKb5Y-unsplash.jpg'


const nav = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Menu', link: '/menu' },
    { name: 'Reservations', link: '/reservations' },
    { name: 'Order Online', link: '/order-online' },
    { name: 'Login', link: '/login' },
];


const highlights=[
    {name:"Greek Salad",image:salad,price:12.99,description:"Enjoy our classic Greek Salad, featuring crisp romaine lettuce, juicy tomatoes, crunchy cucumbers, and tangy Kalamata olives, topped with creamy feta cheese and a drizzle of extra virgin olive oil. Finished with a sprinkle of oregano and a squeeze of fresh lemon juice, this refreshing salad is a perfect choice for a light meal or side dish!",order:"Order a delivery "},
    {name:"Bruchetta",image:bruchetta,price:5.99,description:" Savor our delicious Bruschetta, featuring toasted rustic bread topped with a vibrant mix of ripe tomatoes, fresh basil, and a hint of garlic. Drizzled with balsamic glaze and extra virgin olive oil, this classic Italian appetizer is perfect for sharing or enjoying on your own!",order:"Order a delivery "},
    {name:"Lemon Dessert",image:lemon,price:5.00,description:" Indulge in our delightful Lemon Dessert, featuring a luscious lemon curd layered atop a buttery crust. Finished with a light dusting of powdered sugar, this sweet and tangy treat is the perfect way to brighten your day and satisfy your sweet tooth!",order:"Order a delivery "},

    
]

const testimonials = [
    {
        name: "Alex McCarthy",
        image: Alex,
        description: "I love the food at The Little Lemon! The flavors are always fresh and delicious, and the service is top-notch. I highly recommend the Greek Salad and Lemon Dessert!",
    },
    {
        name: "Giuseppe Fogliano",
        image: Guiseppe,
        description: "The Little Lemon is my go-to spot for a quick and tasty meal. The Bruschetta is my favorite appetizer, and the Lemon Dessert is the perfect way to end a meal. I always leave satisfied!",
    },
    {
        name: "Jonas Kakaroto",
        image: Jonas,
        description: "The Little Lemon never disappoints! The Greek Salad is always fresh and flavorful, and the Bruschetta is the perfect way to start a meal. I highly recommend trying the Lemon Dessert for a sweet treat!",
    },
    {
        name: "Norbert Buduczki",
        image: Nobert,
        description: "I've been a regular at The Little Lemon for years, and I'm always impressed by the quality of the food and the friendly service. The Greek Salad is my favorite, and the Lemon Dessert is the best way to finish the meal!",
    },
    {
        name: "Yogendra Singh",
        image: Yogendra,
        description: "The Little Lemon is my favorite restaurant in town! The food is always fresh and delicious, and the service is excellent. I highly recommend the Greek Salad and Lemon Dessert!",
    },
    {
        name: "Norbert Seid",
        image: NobertMubu,
        description: "I've been a regular at The Little Lemon for years, and I'm always impressed by the quality of the food and the friendly service. The Greek Salad is my favorite, and the Lemon Dessert is a must-try!",
    },
];


export { nav ,highlights, testimonials};
