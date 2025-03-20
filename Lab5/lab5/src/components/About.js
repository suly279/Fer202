import React from 'react';
import { Card, Link } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';

const menuItems = [
  { id: 1, title: 'Strawberry Delight', description: 'A refreshing dessert with fresh strawberries and cream.', images: 'images/menu-01.jpg', details: 'This delightful dessert is made with the freshest strawberries, hand-picked from local farms, and topped with a light, fluffy cream. Perfect for a summer treat!' },
  { id: 2, title: 'Chocolate Dream Cake', description: 'Rich chocolate cake with a creamy ganache topping.', images: 'images/menu-02.jpg', details: 'Indulge in our rich chocolate cake, layered with a velvety ganache that melts in your mouth. A chocolate lover’s dream come true!' },
  { id: 3, title: 'Vanilla Bliss Cupcake', description: 'Soft vanilla cupcakes with a sweet buttercream frosting.', images: 'images/menu-03.jpg', details: 'Our vanilla cupcakes are baked to perfection, topped with a sweet buttercream frosting that’s light and fluffy. A classic treat for any occasion!' },
  { id: 4, title: 'Lemon Zest Tart', description: 'Tangy lemon tart with a crispy pastry crust.', images: 'images/menu-04.jpg', details: 'This tangy lemon tart features a zesty filling in a crispy, buttery pastry crust. A refreshing dessert with the perfect balance of sweet and tart!' },
  { id: 5, title: 'Berry Smoothie Bowl', description: 'A healthy bowl with mixed berries and granola.', images: 'images/menu-05.jpg', details: 'Start your day with our healthy berry smoothie bowl, packed with mixed berries, crunchy granola, and a drizzle of honey. A nutritious and delicious option!' },
  { id: 6, title: 'Caramel Macchiato', description: 'A delightful coffee drink with caramel drizzle.', images: 'images/menu-06.jpg', details: 'Our caramel macchiato is a delightful blend of espresso, steamed milk, and a sweet caramel drizzle. The perfect pick-me-up for coffee lovers!' },
  { id: 7, title: 'Mango Passion Sorbet', description: 'Cool and refreshing mango sorbet with a tropical twist.', images: 'images/menu-07.jpg', details: 'Cool off with our mango passion sorbet, made with ripe mangoes and a hint of passion fruit. A tropical twist that’s refreshing and delicious!' },
  { id: 8, title: 'Pistachio Ice Cream', description: 'Creamy ice cream with crunchy pistachio pieces.', images: 'images/menu-08.jpg', details: 'Our pistachio ice cream is creamy and rich, with crunchy pistachio pieces in every bite. A nutty delight for ice cream lovers!' },
];

const About = () => {
  return (
    <div className="news-container">
      <h2>Our Menu</h2>
      <div className="news-grid">
        {menuItems.map((item) => (
          <Card key={item.id} className="news-card">
            <Card.Img variant="top" src={item.images} />
            <Card.Body className="news-card-body">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <div className="read-more-wrapper">
                <RouterLink to={`/details/menu/${item.id}`}>View Details</RouterLink>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;