import salad from '/src/assets/icons_assets/greek salad.jpg';
import bruchetta from '/src/assets/icons_assets/bruchetta.svg';
import  lemon from  '/src/assets/icons_assets/lemon dessert.jpg'
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
export { nav ,highlights};
