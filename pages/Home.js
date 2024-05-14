import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar'; 

const Home = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const backgroundImageUrls = ['/one.jpg', '/image8.jpeg', '/image5.webp','/four.jpg','/five.jpg']; 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome to SVECW College</title>
      </Head>
      <Navbar /> {/* Include the Navbar component */}
      <div className="slideshow-container">
        {backgroundImageUrls.map((url, index) => (
          <div
            className={`background-image ${index === backgroundImageIndex ? 'active' : ''}`}
            key={index}
            style={{ backgroundImage: `url(${url})` }}
          >
            <div className="overlay">
              <h1>WELCOME TO SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN </h1>
              <p>Discover endless possibilities.</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
  .slideshow-container {
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
  }

  .background-image {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    animation: fade 3s infinite;
  }

  .background-image.active {
    display: block;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    animation: zigzag 3s infinite;
  }

  .overlay h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .overlay p {
    font-size: 30px;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes zigzag {
    0% {
      transform: translate(-50%, -50%);
    }
    25% {
      transform: translate(-50%, -40%);
    }
    50% {
      transform: translate(-50%, -50%);
    }
    75% {
      transform: translate(-50%, -60%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
`}</style>

    </div>
  );
}

export default Home;
