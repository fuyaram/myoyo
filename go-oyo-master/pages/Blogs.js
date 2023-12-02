import React, { useState } from 'react';
import '../pages/Blogs.css';

const blogs = [
  {
    title: 'SUPER OYO TAGGED HOTELS INCREASE 5X TO REACH 1000',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/08/OYO-Townhouse-992x680.jpg',
    shortContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt',
    fullContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt to stay at a Super OYO  Since the launch of Super OYO, the company has seen a significant reduction in check-in issues  OYO has announced that its ‘Super OYO’ tagged hotels have surpassed 1000 mark, spread across over 140 cities in India. The category ...',
  },
  {
    title: 'RAJASTHAN ACCOUNTS FOR 76% OF THE BOOKINGS FOR CULTURE AND HERITAGE TRAVEL: OYO’S WORLD TOURISM DAY REPORT',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/09/Palace_of_Wind_-_Hawa_Mahal_-_Jaipur-992x680.jpeg',
    shortContent: 'As per the report, Jaipur is the most popular cultural',
    fullContent: 'As per the report, Jaipur is the most popular cultural and heritage destination, followed by Agra, Mysore, Udaipur, and Jodhpur  Among spiritual destinations, Varanasi takes the lead, followed by Tirupati, Puri, Amritsar, and Haridwar  India is known for its diverse attractions that that transcend the typical allure of ...',
  },
  {
    title: 'SUPER OYO TAGGED HOTELS INCREASE 5X TO REACH 1000',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/08/OYO-Townhouse-992x680.jpg',
    shortContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt',
    fullContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt to stay at a Super OYO  Since the launch of Super OYO, the company has seen a significant reduction in check-in issues  OYO has announced that its ‘Super OYO’ tagged hotels have surpassed 1000 mark, spread across over 140 cities in India. The category ...',
  },
  {
    title: 'RAJASTHAN ACCOUNTS FOR 76% OF THE BOOKINGS FOR CULTURE AND HERITAGE TRAVEL: OYO’S WORLD TOURISM DAY REPORT',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/09/Palace_of_Wind_-_Hawa_Mahal_-_Jaipur-992x680.jpeg',
    shortContent: 'As per the report, Jaipur is the most popular cultural',
    fullContent: 'As per the report, Jaipur is the most popular cultural and heritage destination, followed by Agra, Mysore, Udaipur, and Jodhpur  Among spiritual destinations, Varanasi takes the lead, followed by Tirupati, Puri, Amritsar, and Haridwar  India is known for its diverse attractions that that transcend the typical allure of ...',
  },
  {
    title: 'SUPER OYO TAGGED HOTELS INCREASE 5X TO REACH 1000',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/08/OYO-Townhouse-992x680.jpg',
    shortContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt',
    fullContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt to stay at a Super OYO  Since the launch of Super OYO, the company has seen a significant reduction in check-in issues  OYO has announced that its ‘Super OYO’ tagged hotels have surpassed 1000 mark, spread across over 140 cities in India. The category ...',
  },
  {
    title: 'RAJASTHAN ACCOUNTS FOR 76% OF THE BOOKINGS FOR CULTURE AND HERITAGE TRAVEL: OYO’S WORLD TOURISM DAY REPORT',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/09/Palace_of_Wind_-_Hawa_Mahal_-_Jaipur-992x680.jpeg',
    shortContent: 'As per the report, Jaipur is the most popular cultural',
    fullContent: 'As per the report, Jaipur is the most popular cultural and heritage destination, followed by Agra, Mysore, Udaipur, and Jodhpur  Among spiritual destinations, Varanasi takes the lead, followed by Tirupati, Puri, Amritsar, and Haridwar  India is known for its diverse attractions that that transcend the typical allure of ...',
  },
  {
    title: 'SUPER OYO TAGGED HOTELS INCREASE 5X TO REACH 1000',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/08/OYO-Townhouse-992x680.jpg',
    shortContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt',
    fullContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt to stay at a Super OYO  Since the launch of Super OYO, the company has seen a significant reduction in check-in issues  OYO has announced that its ‘Super OYO’ tagged hotels have surpassed 1000 mark, spread across over 140 cities in India. The category ...',
  },
  {
    title: 'RAJASTHAN ACCOUNTS FOR 76% OF THE BOOKINGS FOR CULTURE AND HERITAGE TRAVEL: OYO’S WORLD TOURISM DAY REPORT',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/09/Palace_of_Wind_-_Hawa_Mahal_-_Jaipur-992x680.jpeg',
    shortContent: 'As per the report, Jaipur is the most popular cultural',
    fullContent: 'As per the report, Jaipur is the most popular cultural and heritage destination, followed by Agra, Mysore, Udaipur, and Jodhpur  Among spiritual destinations, Varanasi takes the lead, followed by Tirupati, Puri, Amritsar, and Haridwar  India is known for its diverse attractions that that transcend the typical allure of ...',
  },
  {
    title: 'SUPER OYO TAGGED HOTELS INCREASE 5X TO REACH 1000',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/08/OYO-Townhouse-992x680.jpg',
    shortContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt',
    fullContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt to stay at a Super OYO  Since the launch of Super OYO, the company has seen a significant reduction in check-in issues  OYO has announced that its ‘Super OYO’ tagged hotels have surpassed 1000 mark, spread across over 140 cities in India. The category ...',
  },
  {
    title: 'RAJASTHAN ACCOUNTS FOR 76% OF THE BOOKINGS FOR CULTURE AND HERITAGE TRAVEL: OYO’S WORLD TOURISM DAY REPORT',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/09/Palace_of_Wind_-_Hawa_Mahal_-_Jaipur-992x680.jpeg',
    shortContent: 'As per the report, Jaipur is the most popular cultural',
    fullContent: 'As per the report, Jaipur is the most popular cultural and heritage destination, followed by Agra, Mysore, Udaipur, and Jodhpur  Among spiritual destinations, Varanasi takes the lead, followed by Tirupati, Puri, Amritsar, and Haridwar  India is known for its diverse attractions that that transcend the typical allure of ...',
  },
  {
    title: 'SUPER OYO TAGGED HOTELS INCREASE 5X TO REACH 1000',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/08/OYO-Townhouse-992x680.jpg',
    shortContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt',
    fullContent: 'OYO to end FY24 with 1500 Super OYOs    One in four OYO customers opt to stay at a Super OYO  Since the launch of Super OYO, the company has seen a significant reduction in check-in issues  OYO has announced that its ‘Super OYO’ tagged hotels have surpassed 1000 mark, spread across over 140 cities in India. The category ...',
  },
  {
    title: 'RAJASTHAN ACCOUNTS FOR 76% OF THE BOOKINGS FOR CULTURE AND HERITAGE TRAVEL: OYO’S WORLD TOURISM DAY REPORT',
    imageUrl: 'https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2023/09/Palace_of_Wind_-_Hawa_Mahal_-_Jaipur-992x680.jpeg',
    shortContent: 'As per the report, Jaipur is the most popular cultural',
    fullContent: 'As per the report, Jaipur is the most popular cultural and heritage destination, followed by Agra, Mysore, Udaipur, and Jodhpur  Among spiritual destinations, Varanasi takes the lead, followed by Tirupati, Puri, Amritsar, and Haridwar  India is known for its diverse attractions that that transcend the typical allure of ...',
  },
];

const Blog = ({ title, imageUrl, shortContent, fullContent }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="blog-container">
      <img src='https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2015/12/Header-1-1.jpg' alt='hj' className='jsdf'></img>
      <h2 className="blog-title">{title}</h2>
      <img className="blog-image" src={imageUrl} alt={title} />
      <p className={`blog-content ${showFullContent ? 'expanded' : ''}`}>
        {showFullContent ? fullContent : shortContent}
      </p>
      {!showFullContent && (
        <button className="read-more-button" onClick={toggleContent}>
          Read More
        </button>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <img src='https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2015/12/Header-1-1.jpg' alt='hj' className='jsdfdf'></img>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <Blog key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default App;
