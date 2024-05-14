import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const Cse = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const backgroundImages = ['/cse1.png', '/cse2.jpeg', '/cse3.webp'];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="cse-container">
        <div className="slideshow-background" style={{ backgroundImage: `url(${backgroundImages[backgroundImageIndex]})` }} />
        <div className="department-info">
          <h1>Computer Science & Engineering (CSE)</h1>
          <p>The Department of Computer Science & Engineering was established in the academic year 2001-02 with an annual intake of 60. The intake was increased to 120 from the academic year 2006-07. The department intake was increased to 180 from the academic year 2012-2013. The Department is offering two M.Tech courses Computer Science & Engineering and Software Engineering. The UG-CSE Programme is accredited by NBA (National Board of Accreditation, AICTE, Delhi) in Tier-I and PG-CSE Programme is accredited by NBA (National Board of Accreditation, AICTE, Delhi) in Tier-II.</p>
          <p>The Department focuses on preparing the students for wide range of IT careers equipping them with unique enriching experience of molding tomorrow’s technocrats with high caliber and commitment.</p>
          <h2>B.Tech.</h2>
          <p>B.Tech. in Computer Science & Allied courses includes study of various aspects of computer to meet the requirements of the various industries. The course contains study of the basic computer sciences and its application, as well as the detailed study of the various aspects of its working. The course of B.Tech in Computer Science trains an individual in the fields related to computer and its industry.</p>
          <p>The four-year course that lead to a degree in Bachelor of Technology (B.Tech.), adopt a University-mandated semester system of 8 semesters. Each semester is of 16 weeks duration.</p>
          <table>
            <caption>B.Tech. Intake</caption>
            <thead>
              <tr>
                <th>Program</th>
                <th>Intake</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Computer Science & Engineering [Cyber Security]</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Computer Science & Engineering</td>
                <td>180</td>
              </tr>
            </tbody>
          </table>
          <h2>M.Tech.</h2>
          <p>The objective of this discipline is to train the manpower required (a) to meet the industry needs of the country, (b) to pursue research in specialized areas, and (c) to meet the growing needs of engineering colleges for trained faculty in Computer Science and Engineering. The programme includes courses covering the core of Computer Science and Engineering discipline and several electives in the latest areas of developments in the field of Computer Science.</p>
          <p>The two-year course that lead to a degree in Master of Technology (M.Tech), adopt a University-mandated semester system of 4 semesters. Each semester is of 16 weeks duration.</p>
          <table>
            <caption>M.Tech. Intake</caption>
            <thead>
              <tr>
                <th>Program</th>
                <th>Intake</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SE</td>
                <td>09</td>
              </tr>
              <tr>
                <td>CSE</td>
                <td>18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <img className="ces-mind-image" src="/cse_mind.png" alt="CES Mind" />

      <style jsx>{`
        .cse-container {
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

        table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
        }

        .ces-mind-image {
          width: 100%;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Cse;
