import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const AiBranches = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const backgroundImages = ['/ai1.webp', '/ai2.jpg','/ai3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="ai-container">
        <div className="slideshow-background" style={{ backgroundImage: `url(${backgroundImages[backgroundImageIndex]})` }} />
        <div className="department-info">
          <h1>Artificial Intelligence (AI)</h1>
          <p>The department of Artificial Intelligence was established in the academic year 2020-2021 with annual intake of 60 in B.Tech CSE[Artificial Intelligence and Data Science]. Subsequently the intake was increased to 120 from the Academic Year 2021-2022. In the same Academic Year, one new UG Programme CSE[Artificial Intelligence and Machine Learning] has been sanctioned with an intake of 60. Subsequently the intake was increased to 120 from the Academic Year 2022-2023.These programmes are duly approved by the AICTE and the Government of Andhra Pradesh and are affiliated to JNTUK, Kakinada. The Department has state of the art facilities, infrastructure and high end computing equipment along with uninterrupted high-speed internet connection to fulfill the requirements of academics.</p>
          <h2>Courses Offered</h2>
          <p>B.Tech in Computer Science & Engineering [AI & DS] – 120</p>
          <p>B.Tech in Computer Science & Engineering [AI & ML] – 120</p>
          <h3>About CSE [AI & DS]</h3>
          <p>CSE[Artificial Intelligence & Data Science Programme] aims at preparing students to have necessary skills in analyzing data intelligently for various real-world applications in the fast-changing world of advanced technologies. During this decade, data science has become one of the most high-growth, dynamic, and lucrative careers in Engineering and technology. This AI & DS course prepares students to acquire competency in artificial intelligence, data mining and data modelling. In addition, it gives intensive inputs in areas of machine learning and big data analytics. This course is advantageous because students will gain cross-disciplinary skills in the areas like statistics, computer science, machine learning, and other related areas and there are plentiful career opportunities in healthcare, business, ecommerce, social networking companies, biotechnology, genetics, and other important areas.</p>
          <p>The four-year course that lead to a degree in Bachelor of Technology (B.Tech.), adopt a University-mandated semester system of 8 semesters. Each semester is of 16 weeks duration.</p>
          <h3>About CSE [AI & ML]</h3>
          <p>Artificial Intelligence is a wide-ranging branch of computer science deals with creating intelligent machines capable of performing task that typically require human intelligence. Machine Learning is a sub area of AI, makes a machine to learn on its own without being explicitly programmed. Its provides system the ability to automatically learn and advance from experience.</p>
          <p>CSE [Artificial Intelligence and Machine Learning (AI & ML)] is an undergraduate programme deeply rooted in Computer Science along with specialized skills like machine learning, deep learning, Natural language processing, Computer Vision etc.. as per the industry 4.0 standards.</p>
          <p>This specialization is intended to empower students to create intelligent machines, applications for various business problems in a variety of domains and business applications with help of cutting edge combination of machine learning, analytics and visualisation technquies.</p>
          <p>The four-year course that lead to a degree in Bachelor of Technology (B.Tech.), adopt a University-mandated semester system of 8 semesters. Each semester is of 16 weeks duration.</p>
        </div>
      </div>
      <h1><center><mark>AI-ML MIND-TREE</mark></center></h1>
      <img className="ces-mind-image" src="/aiml-mind.png" alt="CES Mind" />
      <h1><center><mark>AI-DS MIND-TREE</mark></center></h1>
      <img className="ces-mind-image" src="/aids_mind.png" alt="CES Mind" />

      <style jsx>{`
        .ai-container {
          display: flex;
          align-items: flex-start;
        }

        .slideshow-background {
          flex: 1;
          min-height: 130vh;
          background-size: cover;
          background-position: center;
          transition: background-image 1s ease-in-out;
        }

        .department-info {
          flex: 1;
          padding: 20px;
        }

        .ces-mind-image {
          width: 100%;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default AiBranches;
