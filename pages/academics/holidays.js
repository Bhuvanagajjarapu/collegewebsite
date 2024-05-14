import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar'; 


const Holidays = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  
  const backgroundImages = ['/image1.jpeg', '/image10.jpeg', '/image13.jpeg'];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Include the Navbar component */}
      <Navbar />
      
      {/* Display the main image */}
      <div className="slideshow-background" style={{ backgroundImage: `url(${backgroundImages[backgroundImageIndex]})` }}>
        <div className="holiday-table">
          <h1>LIST OF HOLIDAYS</h1>
          <table>
            <thead>
              <tr>
                <th>MONTH</th>
                <th>DATE</th>
                <th>DAY</th>
                <th>FESTIVAL/OCCASION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JANUARY</td>
                <td>14.01.24</td>
                <td>SUNDAY</td>
                <td>BHOGI</td>
              </tr>
              <tr>
                <td>JANUARY</td>
                <td>15.01.24</td>
                <td>MONDAY</td>
                <td>MAKARA SANKRANTI</td>
              </tr>
              <tr>
                <td>JANUARY</td>
                <td>16.01.24</td>
                <td>TUESDAY</td>
                <td>KANUMA</td>
              </tr>
              <tr>
                <td>JANUARY</td>
                <td>26.01.24</td>
                <td>FRIDAY</td>
                <td>REPUBLIC DAY</td>
              </tr>
              <tr>
                <td>MARCH</td>
                <td>08.03.24</td>
                <td>FRIDAY</td>
                <td>MAHA SIVARATHRI</td>
              </tr>
              <tr>
                <td>MARCH</td>
                <td>25.03.24</td>
                <td>MONDAY</td>
                <td>HOLI</td>
              </tr>
              <tr>
                <td>MARCH</td>
                <td>29.03.24</td>
                <td>FRIDAY</td>
                <td>GOOD FRIDAY</td>
              </tr>
              <tr>
                <td>APRIL</td>
                <td>05.04.24</td>
                <td>FRIDAY</td>
                <td>BABU JAGJIVANRAM JAYANTI</td>
              </tr>
              <tr>
                <td>APRIL</td>
                <td>09.04.24</td>
                <td>TUESDAY</td>
                <td>UGADI</td>
              </tr>
              <tr>
                <td>APRIL</td>
                <td>11.04.24</td>
                <td>THURSDAY</td>
                <td>RAMAZAN (EID-UL-FITR)</td>
              </tr>
              <tr>
                <td>APRIL</td>
                <td>14.04.24</td>
                <td>SUNDAY</td>
                <td>Dr. B. R. AMBEDKAR JAYANTHI</td>
              </tr>
              <tr>
                <td>APRIL</td>
                <td>17.04.24</td>
                <td>WEDNESDAY</td>
                <td>SRI RAMA NAVAMI</td>
              </tr>
              <tr>
                <td>JUNE</td>
                <td>17.06.24</td>
                <td>MONDAY</td>
                <td>BAKRID (EID-UL-AZHA)</td>
              </tr>
              <tr>
                <td>JULY</td>
                <td>17.07.24</td>
                <td>WEDNESDAY</td>
                <td>MOHARRUM</td>
              </tr>
              <tr>
                <td>AUGUST</td>
                <td>15.08.24</td>
                <td>THURSDAY</td>
                <td>INDEPENDENCE DAY</td>
              </tr>
              <tr>
                <td>AUGUST</td>
                <td>26.08.24</td>
                <td>MONDAY</td>
                <td>SRI KRISHNASHTAMI</td>
              </tr>
              <tr>
                <td>SEPTEMBER</td>
                <td>07.09.24</td>
                <td>SATURDAY</td>
                <td>VINAYAKA CHAVITHI</td>
              </tr>
              <tr>
                <td>SEPTEMBER</td>
                <td>16.09.24</td>
                <td>MONDAY</td>
                <td>EID MILAD-UN-NABI</td>
              </tr>
              <tr>
                <td>OCTOBER</td>
                <td>02.10.24</td>
                <td>WEDNESDAY</td>
                <td>GANDHI JAYANTI</td>
              </tr>
              <tr>
                <td>OCTOBER</td>
                <td>11.10.24</td>
                <td>FRIDAY</td>
                <td>DURGASHTAMI</td>
              </tr>
              <tr>
                <td>OCTOBER</td>
                <td>12.10.24</td>
                <td>SATURDAY</td>
                <td>VIJAYADASHAMI</td>
              </tr>
              <tr>
                <td>OCTOBER</td>
                <td>31.10.24</td>
                <td>THURSDAY</td>
                <td>DEEPAVALI</td>
              </tr>
              <tr>
                <td>DECEMBER</td>
                <td>25.12.24</td>
                <td>WEDNESDAY</td>
                <td>CHRISTMAS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .slideshow-background {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          transition: background-image 1s ease-in-out;
        }

        .holiday-table {
          position: relative;
          z-index: 2;
          background-color: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 10px;
          margin: 50px auto;
          max-width: 80%;
          overflow: auto;
        }

        .holiday-table h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }

        th {
          background-color: #f2f2f2;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        tr:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
}


export default Holidays;
