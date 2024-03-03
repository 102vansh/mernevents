import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "https://www.cvent.com/sites/default/files/styles/column_content_width/public/migrated_attachments/attendee-experience.png?itok=ns811WP-",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "https://www.visionvivaah.com/blog/wp-content/uploads/2019/12/Event-Organisers-For-Dance-Parties-1024x514.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "https://img.freepik.com/free-photo/bunch-flowers-leaves-table_1304-4187.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "https://www.grandweddings.co.in/wp-content/uploads/2020/01/Top-Wedding-Event-Management-Companies-in-Hyderabad.jpg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;