import Navbar from '../../components/Navbar'; // Adjust the import path based on the actual location of your Navbar component
import { useEffect, useState } from 'react';

const Values = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const backgroundImageUrls = ['/image11.jpeg', '/image12.jpeg', '/image13.jpeg']; // Add your image URLs here

  // Function to change background image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
    }, 2000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="college-history">
        <div className="slideshow-background" style={{ backgroundImage: `url(${backgroundImageUrls[backgroundImageIndex]})` }}></div>
        <div className="content">
          <h1><center>Values - Quality Policy</center></h1>
          <ul>
          <li>We take pride in the quality of our organization and work, and we value originality, integrity, consistency, and attention to detail</li>
            <li>We strive for excellence in all that we do in order to model success for our students</li>
            <li>We focus on students’ success and satisfaction and meeting the needs of the community</li>
            <li>We stay abreast of ever-changing youth culture, emerging communication technologies, and design trends</li>
            <li>We set benchmarks and model high-quality standards for students, faculty, staff, and community partners</li>
            <li>We lay utmost importance on discipline, punctuality, personal values, and healthy practices</li>
            <li>We create an innovative environment for students and staff to develop an integrated personality</li>
            <li>Inclusive community projects</li>
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
          animation: scrollUp 30s linear infinite; 
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
          font-size: 36px;
          margin-bottom: 20px;
        }

        ul {
          margin-bottom: 20px;
        }

        li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default Values;
