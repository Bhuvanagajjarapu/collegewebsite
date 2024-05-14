import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const UpcomingEvent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  
  const eventData = [
    {
      date: "May 15, 2024",
      title: "Tech Summit 2024",
      description: "Join us for an exciting day of technology discussions, workshops, and networking opportunities. This working is conducting by the IET the pretegous club all over the world the the tech speaker is MR.Aginkya lokahare the most great Hacker all the time for the present generation",
    },
    {
      date: "May 16, 2024",
      title: "Innovation Conference",
      description: "Explore the latest innovations in various industries and learn from industry experts.The man of innovation named vijay malik is joining us today with lots of experince and ready to dive you to the world of innovation to increase the experince to all the folks",
    },
    {
        date: "May 16, 2024",
        title: "Civil Summit 2024",
        description: "Department of Civil Engineering Inaugurated the Centre of Excellence for Sustainable Construction Materials and MoU Signing Ceremony of UltraTech Cement Ltd., and the Department of Civil Engineering.Ready to increase your knowledge through the practical experinece",
      },
      {
        date: "May 20, 2024",
        title: "MECOW club Event",
        description: "The objectives of the Mega Events Celebration of the World club is to enrich students knowledge levels, enhance LSRW skills, to build up their observation, concentration and analytical skills by celebrating the days that are declared by the United Nation Organization(UNO). On specific days various activities are conducted by students for students. This club aims at enhancing the communication and leadership skills of students.",
      },
      {
        date: "May 20, 2024",
        title: "Algozenith 2024",
        description: "The codding club of svecw going to conduct the coding context for the first year student ..This is the club iniated by the Mr.Vivek Gupta and successfully running in the world.",
      },
      {
        date: "May 20, 2024",
        title: "Tech Summit 2024",
        description: "Join us for an exciting day of technology discussions, workshops, and networking opportunities.",
      },
      
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      
      setScrollPosition(prevPosition => {
        const newPosition = prevPosition + 1;
        if (newPosition >= eventData.length * 100) {
          
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [eventData.length]);

  return (
    <div>
      <Navbar />
      <div className="event-container">
        <h1>Upcoming Events</h1>
        <div className="event-list" style={{ transform: `translateY(-${scrollPosition}px)` }}>
          {eventData.map((event, index) => (
            <div key={index} className="event-item">
              <p className="event-date">{event.date}</p>
              <div>
                <p className="event-title">{event.title}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .event-container {
          margin-top: 60px;
          padding: 20px;
          overflow: hidden;
          height: 400px; 
          position: relative;
        }

        h1 {
          text-align: center;
          color: #333;
          font-size: 28px; 
        }

        .event-list {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          transition: transform 0.1s ease-out;
        }

        .event-item {
          background-color: #f2f2f2; 
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 10px;
          border: 4px solid #888888; 
        }

        .event-date {
          font-weight: bold;
          color: #0066ff;
          font-size: 18px;
        }

        .event-title {
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
          font-size: 20px; 
        }

        .event-description {
          color: #666;
          font-size: 18px; 
        }
      `}</style>
    </div>
  );
}

export default UpcomingEvent;
