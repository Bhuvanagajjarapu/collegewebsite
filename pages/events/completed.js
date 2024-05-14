import Navbar from '../../components/Navbar'; 
import { useEffect, useState } from 'react';

const CompletedEvents = () => {
  
  const completedEventsData = [
    {
      id: 1,
      title: "Event 1",
      imageUrl: "/google.jpeg", 
      description: "The GDSC club event is conducted in SVECW inorder to increase the cloud knowlege t othe students by encouraging by giving the swags like bag,bottle,and T-Shirt to the students who are enrolled and intrested.",
      date: "May 1, 2020"
    },
    {
        id: 2,
        title: "Event 2",
        imageUrl: "/frshers.jpg", 
        description: "The freshers Event had succesfully completed to the first year students by the second year students with the cheif guest as TAMAN the singer in the cinema industry.",
        date: "May 12, 2020"
      },
      {
        id: 3,
        title: "Event 3",
        imageUrl: "/girls.webp", 
        description: "Girls web is the event conducted by the shri vishnu engineering college for women with the cash prize of 100000 conducted national wide and the winners are the team INITIATORS the students of svecw",
        date: "April 10, 2021"
      },
      {
        id: 4,
        title: "Event 4",
        imageUrl: "/sankranthi.jpeg", 
        description: "The sankranti event is successfully completed in the svecw with joy of laughter and with the lights of enjoyment with the enjoyable shops and games with the lots of food and food feast by the students",
        date: "june 1, 2022"
      },
      {
        id: 5,
        title: "Event 5",
        imageUrl: "/technocrats.png",
        description: "The technocrats is the national level technical event conducted by the shri vishnu engineering college for women in order to encourage the young generation to motivate the young engineers to made the new inventions and creativity",
        date: "May 1, 2023"
      },
      {
        id: 6,
        title: "Event 6",
        imageUrl: "/csp.jpeg", 
        description: "The community service programme is iniatated by the students of to educate the rural people about education,health,and nutrition and make them understand about the value of education to the uneducate rural people ",
        date: "july 2, 2023"
      },
      {
        id: 7,
        title: "Event 7",
        imageUrl: "/iste.jpeg", 
        description: "The indian society for technical education is a club in shri vishnu engineering college for women which conducted couple of event and word hunt is a event which conducted recently to encourage the women in tech",
        date: "August 18, 2023"
      },
      {
        id: 8,
        title: "Event 8",
        imageUrl: "/boat.jpeg", 
        description: "The concrete 2024 is a event by svecw by the department of civil ,ehich is a national level event and there are 50 fifferent colleges participated and 10000 is the first cash prize and won by shri vishnu engineering college for women",
        date: "January 19, 2024"
      },
    
  ];

  return (
    <div>
      <Navbar />
      <div className="completed-events">
        {completedEventsData.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.imageUrl} alt={event.title} className="event-image" />
            <div className="event-details">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .completed-events {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          padding-top: 60px; 
        }

        .event-card {
          width: 300px;
          background-color: #f0f0f0;
          margin-bottom: 20px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .event-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .event-details {
          padding: 20px;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          margin-bottom: 5px;
        }

        strong {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default CompletedEvents;
