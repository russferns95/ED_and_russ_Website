import React from "react";
import "./Section_6.css";

const Section_6 = () => {
  const data = [
    {
      date: "MAY 7, 2025",
      author: "KEVIN GARDEN",
      title: "10 Principles Of Effective Web Design",
    },
    {
      date: "APRIL 9, 2025",
      author: "KEVIN GARDEN",
      title: "7 Easy Techniques for Impressive Code",
    },
    {
      date: "MARCH 9, 2025",
      author: "KEVIN GARDEN",
      title: "Making Your Design Accessible: Easy Tips",
    },
  ];

  return (
    <section className="section6">
      <div className="section6-container">
        <h2 className="section6-title">Recent News</h2>

        <div className="cards">
          {data.map((item, index) => (
            <div key={index} className="card">
              <p className="card-date">
                {item.date} <span>BY {item.author}</span>
              </p>

              <h3 className="card-title">{item.title}</h3>

              <div className="card-footer">
                <button className="discover-btn">
                  DISCOVER MORE
                </button>

                <div className="share-icon">
                  <span>↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_6;