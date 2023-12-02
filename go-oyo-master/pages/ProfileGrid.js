import React from 'react';
import ProfileCard from '../pages/ProfileCard';

const profiles = [
  {
    id: 1,
    title: 'Ritesh Agarwal',
    content: 'OYO Hotels & Homes was founded by Ritesh Agarwal, the first resident Asian to be accepted to the Thiel Fellowship (started by Paypal founder Peter Thiel). Travelling across India at the age of 17, Ritesh stayed in more than 100 bed and breakfasts, guest houses, and hotels to realize there was a massive dearth of affordable and good-quality hotels in the unbranded budget hotel category.',
    image: 'https://assets.oyoroomscdn.com/medium/Ritesh_Agarwal_final1.png',
  },
  {
    id: 2,
    title: 'Aditya Ghosh',
    content: 'Aditya Ghosh is a seasoned business leader with over 22 years of experience. Aditya is currently a member of the Board of Directors at OYO. Most recently, he was the CEO at OYO Hotels & Homes- India & South Asia.',
    image: 'https://assets.oyoroomscdn.com/medium/Aditya_Ghosh_final1.png',
  },
  {
    id: 3,
    title: 'Bejul Somaia',
    content: 'Bejul Somaia is a Partner at Lightspeed India Partners LLP, which advises Lightspeed Venture Partners, a global venture firm with more than USD 7 billion under management.',
    image: 'https://assets.oyoroomscdn.com/medium/Bejul_final1.png',
  },
  {
    id: 4,
    title: 'Deepa Malik',
    content: 'Dr. Deepa Malik, Padma Shri, Khel Ratna & Arjuna Awardee, is India’s first paraplegic woman biker, swimmer, rallyist & India’s first ever female Paralympic medalist. She has continually risen above all odds, while also enabling people with disabilities through her foundation Wheeling Happiness. She also serves as the President of the Paralympic Committee of India and has led the most successful Paralympic Team in Indian history at Tokyo 2020.',
    image: 'https://assets.oyoroomscdn.com/medium/deepa_malik.png',
  },
  {
    id: 5,
    title: 'Troy Alstead',
    content: 'Troy worked with the Starbucks Corporation for 24 years having most recently served as Chief Operating Officer. He is also on the Board of Topgolf Group Ltd, Harley-Davidson Inc, and Levi Strauss & Co.',
    image: 'https://assets.oyoroomscdn.com/medium/Troy_Alstead_final.png',
  },
  {
    id: 6,
    title: 'Dr. W. Steve Albrecht',
    content: ' Steve is the former president of the American Accounting Association and Association of Certified Fraud Examiners and has served on boards of 10 corporates',
    image: 'https://assets.oyoroomscdn.com/medium/SteveA_final.png',
  },
];

const ProfileGrid = () => {
  return (
    <div className="profile-grid">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          title={profile.title}
          content={profile.content}
          image={profile.image}
        />
      ))}
    </div>
  );
};

export default ProfileGrid;
