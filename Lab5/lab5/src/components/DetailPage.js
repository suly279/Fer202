import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const menuItems = [
  { id: 1, title: 'Strawberry Delight', description: 'A refreshing dessert with fresh strawberries and cream.', images: '/images/menu-01.jpg', details: 'This delightful dessert is made with the freshest strawberries, hand-picked from local farms, and topped with a light, fluffy cream. Perfect for a summer treat!' },
  { id: 2, title: 'Chocolate Dream Cake', description: 'Rich chocolate cake with a creamy ganache topping.', images: '/images/menu-02.jpg', details: 'Indulge in our rich chocolate cake, layered with a velvety ganache that melts in your mouth. A chocolate lover’s dream come true!' },
  { id: 3, title: 'Vanilla Bliss Cupcake', description: 'Soft vanilla cupcakes with a sweet buttercream frosting.', images: '/images/menu-03.jpg', details: 'Our vanilla cupcakes are baked to perfection, topped with a sweet buttercream frosting that’s light and fluffy. A classic treat for any occasion!' },
  { id: 4, title: 'Lemon Zest Tart', description: 'Tangy lemon tart with a crispy pastry crust.', images: '/images/menu-04.jpg', details: 'This tangy lemon tart features a zesty filling in a crispy, buttery pastry crust. A refreshing dessert with the perfect balance of sweet and tart!' },
  { id: 5, title: 'Berry Smoothie Bowl', description: 'A healthy bowl with mixed berries and granola.', images: '/images/menu-05.jpg', details: 'Start your day with our healthy berry smoothie bowl, packed with mixed berries, crunchy granola, and a drizzle of honey. A nutritious and delicious option!' },
  { id: 6, title: 'Caramel Macchiato', description: 'A delightful coffee drink with caramel drizzle.', images: '/images/menu-06.jpg', details: 'Our caramel macchiato is a delightful blend of espresso, steamed milk, and a sweet caramel drizzle. The perfect pick-me-up for coffee lovers!' },
  { id: 7, title: 'Mango Passion Sorbet', description: 'Cool and refreshing mango sorbet with a tropical twist.', images: '/images/menu-07.jpg', details: 'Cool off with our mango passion sorbet, made with ripe mangoes and a hint of passion fruit. A tropical twist that’s refreshing and delicious!' },
  { id: 8, title: 'Pistachio Ice Cream', description: 'Creamy ice cream with crunchy pistachio pieces.', images: '/images/menu-08.jpg', details: 'Our pistachio ice cream is creamy and rich, with crunchy pistachio pieces in every bite. A nutty delight for ice cream lovers!' },
];

const newLists = [
  { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: '/images/event-1.jpg', details: 'Jess Lydon shares her unique family tradition of baking pies with humorous, expletive-laden messages to surprise her grandmother every year. What began as a playful prank has now become a cherished ritual, bringing laughter and joy to her family gatherings.' },
  { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: '/images/event-2.jpg', details: 'Martha Stewart, the Queen of Thanksgiving, had to cancel her traditional turkey dinner this year due to unforeseen circumstances. However, she didn’t let that dampen her holiday spirit—she baked an impressive 30 pies, showcasing her culinary skills and festive enthusiasm.' },
  { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: '/images/event-3.jpg', details: 'Burger King is introducing a new breakfast sandwich that’s sure to delight flatbread fans. The sandwich features a fluffy egg, crispy bacon, and melted cheese, all wrapped in a warm flatbread. It’s currently in the testing phase in select locations.' },
  { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: '/images/event-4.jpg', details: 'Popeyes has exciting news for chicken lovers—they’ve permanently added chicken wings to their menu! Available in five mouthwatering flavors, including spicy buffalo and honey garlic, these wings are sure to become a fan favorite.' },
  { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: '/images/event-5.jpg', details: 'Learn how to elevate your salmon dish with a sizzling tadka—a South Asian technique that involves frying aromatics and spices in hot oil and pouring them over the fish for a burst of flavor. This method adds a dramatic and delicious finish to your meal.' },
  { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: '/images/event-6.jpg', details: 'Get ready for the holidays with 80 Christmas dinner ideas that will make your feast unforgettable. From classic roasts to festive desserts, these recipes will help you create the perfect menu for your family and friends.' },
  { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: '/images/event-7.jpg', details: 'This guide will walk you through the easiest way to make a juicy and delicious prime rib roast for the holidays. With simple tips and tricks, you’ll impress your guests with a perfectly cooked centerpiece for your festive table.' },
  { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: '/images/event-8.jpg', details: 'Transform your leftover Thanksgiving turkey into a flavorful Waldorf salad. This light and bright dish combines turkey with crisp apples, celery, walnuts, and a creamy dressing, making it the perfect post-Thanksgiving lunch.' },
];

const DetailPage = () => {
  const { type, id } = useParams();
  const items = type === 'menu' ? menuItems : newLists;
  const item = items.find((i) => i.id === parseInt(id)); 

  if (!item) {
    return <div className="news-container"><h2>Item not found</h2></div>;
  }

  return (
    <div className="news-container">
      <h2>{type === 'menu' ? 'Menu Item Details' : 'News Details'}</h2>
      <div className="detail-card-wrapper">
        <Card className="news-card">
          <Card.Img variant="top" src={item.images} />
          <Card.Body className="news-card-body">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.details}</Card.Text>
            <div className="read-more-wrapper">
              <Link to={type === 'menu' ? '/about' : '/news'}>
                <Button variant="primary">Back to {type === 'menu' ? 'Menu' : 'News'}</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DetailPage;