import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const Mech = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const backgroundImages = ['/mech1.png', '/mech2.png', '/mech3.webp'];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mech-container">
        <div className="slideshow-background" style={{ backgroundImage: `url(${backgroundImages[backgroundImageIndex]})` }} />
        <div className="department-info">
          <h1>Mechanical Engineering (ME)</h1>
          <p>Mechanical engineers design machines, devices, and methods to solve problems. They understand the dynamics of mechanical devices and know how to control their operation. Transportation vehicles, methods of energy conversion, control systems, environmental systems, and manufacturing systems are just a few examples of mechanical engineers’ work.</p>
          <p>Mechanical engineering course work has a solid core in mathematics, physics, chemistry, and the engineering sciences. Mechanical engineering is also computer oriented in that the computer is used extensively for problem solving and engineering design. At SVECW, we have Computer Aided Design and manufacturing facilities for the realization of student designs. The motto of SVECW mechanical engineering is to “Develop the strong core background and make the students marketable to local and national industries, government agencies, and graduate schools.</p>
          <p>SVECW started Mechanical Engineering programme in 2009. The Faculty in the department are in the track of excellence in terms of qualification and experience. Coming from various reputed universities, industries and research oriented organizations, faculty are committed to the noble cause of teaching learning process synchronizing with their efforts.</p>
          
          <p>The laboratories under various domains are fully equipped with up to date experimental facilities and machineries to train our students and to conduct research. Our students are trained in Solid Edge design laboratory, AutoCAD, FEMAP, CAM EXPRESS and Ansys software. They are also trained in characterizing the microstructure of materials using optical microscope interfaced with image analyzer, hardness tester after making heat treatment such as quenching and tempering, induction hardening and normalizing. These kinds of laboratory trainings are very essential to work in various industries. The project allows the students to develop innovative concepts such as robot, automated cars and solar powered equipments and alternate fuel development etc.</p>
          <h2>Faculty</h2>
          <p>Based on the specialization of the members of the faculty, the discipline has been divided into six domains such as CAD and Automation, Machine Design, Manufacturing Engineering, Thermal Engineering, Automobile Technology, and Fluid Mechanics. This allows the faculty to concentrate on their research and development activities in their chosen field as a team. They are encouraged to do research in the advanced technology and update their knowledge by attending seminars, conferences and faculty development programmes. The faculty is publishing high quality research papers in various reputed National and International journals.</p>
          <h2>Goals</h2>
          <p>The mechanical engineering program GOALS are to:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Create well-rounded engineers who possess theoretical and practical skills, and understand the significance of humanities and social sciences</li>
            <li>Produce graduates who have the necessary teamwork and leadership skills to excel in multidisciplinary team environments</li>
            <li>Develop innovative and creative thinking with an understanding of entrepreneurship</li>
            <li>Develop science, mathematics, analytical, computational, and experimental skills and apply them to formulate and solve engineering problems</li>
            
          </ul>
          <h2>Objectives</h2>
          <p>These four goals manifest as the following program EDUCATIONAL OBJECTIVES, which state: SVECW Mechanical Engineering graduates will possess:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>An ability to apply knowledge of mathematics, science and engineering</li>
            <li>An ability to design and conduct experiments, as well as to analyze and interpret data</li>
            <li>An ability to design a system, component, or process to meet desired needs</li>
            
            <li>An understanding of professional and ethical responsibility</li>
            <li>An ability to communicate effectively</li>
            <li>The broad education necessary to understand the impact of engineering solutions in a global and societal context</li>
            <li>A recognition of the need for and an ability to engage in life-long learning</li>
            <li>A knowledge of contemporary issues</li>
            <li>An ability to use the techniques, skills and modern engineering tools necessary for engineering practice</li>
            
            <li>A familiarity with statistics and linear algebra</li>
            <li>An ability to work professionally in both thermal and mechanical systems areas including the design and realization of such systems</li>
            
          </ul>
        </div>
      </div>
      <img className="mech-mind-image" src="/mech-mind.png" alt="Mechanical Engineering Mind" />

      <style jsx>{`
        .mech-container {
          display: flex;
          align-items: flex-start;
        }

        .slideshow-background {
          flex: 1;
          min-height: 180vh;
          background-size: cover;
          background-position: center;
          transition: background-image 1s ease-in-out;
        }

        .department-info {
          flex: 1;
          padding: 20px;
        }

        .mech-mind-image {
          width: 100%;
          margin-top: 20px;
        }

        ul {
          margin-left: 0; /* Remove default margin */
        }

        ul li {
          list-style-type: disc; /* Use disc bullet points */
        }
      `}</style>
    </div>
  );
};

export default Mech;
