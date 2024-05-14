import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

const History = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const backgroundImageUrls = ['/image12.jpeg', '/image1.jpeg', '/image8.jpeg']; 

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="college-history">
        <div className="slideshow-background" style={{ backgroundImage: `url(${backgroundImageUrls[backgroundImageIndex]})` }}></div>
        <div className="content">
          <h1><center>About SVECW</center></h1>
          <ul>
            <li>Empowering women through knowledge and action. Shri Vishnu Engineering College For Women is located in Bhimavaram – the central part of Coastal Andhra. The area generally known for its commercial activities has recently established itself as a Center for Academics.</li>
            <li>The campus is located in Vishnupur which is 3 km from Bhimavaram on Tadepalligudem Road.</li>
            <li>The campus spreads around 100 acres landscape known for its salubrious climate and presents congenial atmosphere to pursue higher studies.</li>
            <li>Our infrastructure is vibrant in nature because of constant attempt to maintain pace with the development available. The infrastructure acts as a facilitator for the effective delivery of our curriculum.</li>
            <li>Apart from the common central facilities the colleges has well-equipped laboratories, lecture halls, drawing and seminar halls etc.</li>
            <li>The organization provides adequate infrastructural support for all sports activities which provide students physical fitness and personality development in turn cultivate in them sportsman spirit, team spirit, leadership and talent.</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .college-history {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .slideshow-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: contain; 
          background-position: center;
          opacity: 0.5;
          z-index: -1;
          transition: opacity 1s ease-in-out;
        }

        .content {
          padding: 50px;
          color: #333;
          font-size: 24px; 
          font-weight: bold; 
          font-family: Arial, sans-serif; 
          animation: scrollUp 15s linear infinite; 
        }

        @keyframes scrollUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(-100%);
          }
        }

        h1 {
          font-size: 48px; 
          margin-bottom: 20px;
          font-weight: bold; 
        }

        ul {
          list-style-type: disc; 
          margin-left: 20px; 
        }

        li {
          margin-bottom: 10px; 
        }
      `}</style>
    </div>
  );
}

export default History;
