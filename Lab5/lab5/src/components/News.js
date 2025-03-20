import React from 'react';
import { Card, Link } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';

const newLists = [
  { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: 'images/event-1.jpg', details: 'Jess Lydon shares her unique family tradition of baking pies with humorous, expletive-laden messages to surprise her grandmother every year. What began as a playful prank has now become a cherished ritual, bringing laughter and joy to her family gatherings.' },
  { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: 'images/event-2.jpg', details: 'Martha Stewart, the Queen of Thanksgiving, had to cancel her traditional turkey dinner this year due to unforeseen circumstances. However, she didn’t let that dampen her holiday spirit—she baked an impressive 30 pies, showcasing her culinary skills and festive enthusiasm.' },
  { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: 'images/event-3.jpg', details: 'Burger King is introducing a new breakfast sandwich that’s sure to delight flatbread fans. The sandwich features a fluffy egg, crispy bacon, and melted cheese, all wrapped in a warm flatbread. It’s currently in the testing phase in select locations.' },
  { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: 'images/event-4.jpg', details: 'Popeyes has exciting news for chicken lovers—they’ve permanently added chicken wings to their menu! Available in five mouthwatering flavors, including spicy buffalo and honey garlic, these wings are sure to become a fan favorite.' },
  { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: 'images/event-5.jpg', details: 'Learn how to elevate your salmon dish with a sizzling tadka—a South Asian technique that involves frying aromatics and spices in hot oil and pouring them over the fish for a burst of flavor. This method adds a dramatic and delicious finish to your meal.' },
  { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: 'images/event-6.jpg', details: 'Get ready for the holidays with 80 Christmas dinner ideas that will make your feast unforgettable. From classic roasts to festive desserts, these recipes will help you create the perfect menu for your family and friends.' },
  { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: 'images/event-7.jpg', details: 'This guide will walk you through the easiest way to make a juicy and delicious prime rib roast for the holidays. With simple tips and tricks, you’ll impress your guests with a perfectly cooked centerpiece for your festive table.' },
  { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: 'images/event-8.jpg', details: 'Transform your leftover Thanksgiving turkey into a flavorful Waldorf salad. This light and bright dish combines turkey with crisp apples, celery, walnuts, and a creamy dressing, making it the perfect post-Thanksgiving lunch.' },
];

const News = () => {
  return (
    <div className="news-container">
      <h2>News Category</h2>
      <div className="news-grid">
        {newLists.map((news) => (
          <Card key={news.id} className="news-card">
            <Card.Img variant="top" src={news.images} />
            <Card.Body className="news-card-body">
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>{news.description}</Card.Text>
              <div className="read-more-wrapper">
                <RouterLink to={`/details/news/${news.id}`}>Read more</RouterLink>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;