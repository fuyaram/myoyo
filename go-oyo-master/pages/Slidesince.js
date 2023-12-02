
import React, { useEffect, useRef } from 'react';
import './Slidesince.css';

const Slidesince = () => {
  const textContainers = useRef([]);

  useEffect(() => {
    textContainers.current.forEach(container => {
      const slideInAt = window.scrollY + window.innerHeight - container.clientHeight / 2;
      const containerBottom = container.offsetTop + container.clientHeight;
      const isHalfShown = slideInAt > container.offsetTop;
      const isNotScrolledPast = window.scrollY < containerBottom;

      if (isHalfShown && isNotScrolledPast) {
        container.classList.add('slide-in');
      } else {
        container.classList.remove('slide-in');
      }
    });
  }, []);

  return (
    
   <>
   
    <div className="section">
        <div>
        <h1 id='jc'>World's leading chain <br />of hotels and homes</h1>
        </div>
      <div className="text-container" ref={el => textContainers.current.push(el)}>
      <h2 id='sux'>World's leading chain of hotels and homes</h2>
        <p id='suxx' >World's leading chain of hotels and homes
More Destinations. More Ease. More Affordable.</p>
      </div>
      <div className="text-container" ref={el => textContainers.current.push(el)}>
        <h2 id='sux'>World's leading chain of hotels and homes</h2>
        <p id='suxx'>World's leading chain of hotels and homes
More Destinations. More Ease. More Affordable.</p>
      </div>
      <div className="text-container" ref={el => textContainers.current.push(el)}>
      <h2 id='sux'>World's leading chain of hotels and homes</h2>
        <p id='suxx'>World's leading chain of hotels and homes
More Destinations. More Ease. More Affordable.</p>
      </div>
      <div className="text-container" ref={el => textContainers.current.push(el)}>
      <h2 id='sux'>World's leading chain of hotels and homes</h2>
        <p id='suxx'>World's leading chain of hotels and homes
More Destinations. More Ease. More Affordable.</p>
      </div>
      <div className="text-container" ref={el => textContainers.current.push(el)}>
      <h2 id='sux'>World's leading chain of hotels and homes</h2>
        <p id='suxx'>World's leading chain of hotels and homes
More Destinations. More Ease. More Affordable.</p>
      </div>
      <div className="text-container" ref={el => textContainers.current.push(el)}>
      <h2 id='sux'>World's leading chain of hotels and homes</h2>
        <p id='suxx'>World's leading chain of hotels and homes
More Destinations. More Ease. More Affordable.</p>
      </div>
    </div>
   
   </>
  );
};

export default Slidesince;
