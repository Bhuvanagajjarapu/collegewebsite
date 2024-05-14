import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';


const It = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const backgroundImages = ['/it1.jpeg', '/it2.webp', '/it3.avif'];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="it-container">
        <div className="slideshow-background" style={{ backgroundImage: `url(${backgroundImages[backgroundImageIndex]})` }} />
        <div className="department-info">
          <h1>WELCOME TO <mark>IT</mark> DEPARTMENT</h1>
          <h1>Information Technology (IT)</h1>
          <p>The Department of Information Technology was established in the academic year 2001-02 with an annual intake of 60.  The intake is increased to 180 from the academic year 2020-21.</p>
          <p>The programme is duly approved by the AICTE and the Government of Andhra Pradesh and is affiliated to JNTUK, Kakinada. The B.Tech. Programme in Information Technology is accredited by NBA (National Board of Accreditation, AICTE, Delhi) under Tier-I in June 2019.</p>
          <p>The Department has a number of well-equipped laboratories and provides excellent facilities for learning. All Computer Labs and Servers are supported by robust and reliable UPS system with 30 min. backup. Besides the labs are also supported by a 420KVA generator.</p>
          <p>The Department periodically organizes seminars, symposia, workshops and guest lectures for the benefit of both the students and the faculty. Personality Development programs are regularly conducted for the benefit of the students. These programmes help in imparting and developing soft skills which help the students to enhance the commitment at all levels.</p>

          <h2>Program Educational Objectives (PEOs)</h2>
          <table>
            <tbody>
              <tr>
                <td>PEO 1</td>
                <td>Graduates will be leaders in academia, industry and research pursuit through strong Knowledge in core and application domain, that develops the ability to solve real world problems individually and in team.</td>
              </tr>
              <tr>
                <td>PEO 2</td>
                <td>Graduates will continue to learn and adapt in a world of constantly evolving technology.</td>
              </tr>
              <tr>
                <td>PEO 3</td>
                <td>Graduates will have deep awareness of ethical responsibilities in their profession and towards the society.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* First Mind Tree */}
      <div className="it-container">
        <div className="mind-tree">
          <img src='/it_mind.png' alt="Mind Tree" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      
      {/* Table for Program Outcomes (POs) */}
      <h2>Program Outcomes (POs) - B. Tech. - IT</h2>
      <table>
        <tbody>
          <tr>
            <td>PO 1</td>
            <td>Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</td>
          </tr>
          <tr>
            <td>PO 2</td>
            <td>Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</td>
          </tr>
          <tr>
            <td>PO 3</td>
            <td>Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</td>
          </tr>
          <tr>
            <td>PO 4</td>
            <td>Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</td>
          </tr>
          <tr>
            <td>PO 5</td>
            <td>Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</td>
          </tr>
          <tr>
            <td>PO 6</td>
            <td>The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</td>
          </tr>
          <tr>
            <td>PO 7</td>
            <td>Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</td>
          </tr>
          <tr>
            <td>PO 8</td>
            <td>Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</td>
          </tr>
          <tr>
            <td>PO 9</td>
            <td>Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</td>
          </tr>
          <tr>
            <td>PO 10</td>
            <td>Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</td>
          </tr>
          <tr>
            <td>PO 11</td>
            <td>Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</td>
          </tr>
          <tr>
            <td>PO 12</td>
            <td>Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        .it-container {
          display: flex;
          justify-content: flex-start; /* Align to the left */
          align-items: center;
          margin-top: 20px; /* Added margin between the sections */
        }

        .slideshow-background {
          flex: 1;
          min-height: 90vh;
          background-size: cover;
          background-position: center;
          transition: background-image 1s ease-in-out;
        }

        .department-info {
          flex: 1;
          padding: 20px;
        }

        .mind-tree {
          margin-right: 20px; /* Added margin between the images */
        }

        .mind-tree img {
          max-width: 100%;
          max-height: 100%;
        }

        table {
          width: 100%;
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
      `}</style>
    </div>
  );
};

export default It;
