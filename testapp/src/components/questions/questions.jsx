
import React from 'react';
import './questions.css'; // Custom styling for the questions component

const questionsData = [
  {
    question: 'Where are we going?',
    answer: 'We are committed to leading the industry in financial technology innovation. Our vision is to continuously enhance our solutions to meet the evolving needs of our clients, ensuring secure, efficient, and accessible financial services worldwide.',
  },
  {
    question: 'What are we doing?',
    answer: 'We are developing and implementing cutting-edge financial technologies and solutions that cater to the dynamic requirements of the banking and fintech sectors. Our initiatives include advancing payment systems, enhancing security protocols, and expanding our service offerings to new markets.',
  },
  {
    question: 'What is guiding us?',
    answer: 'Our mission is guided by a commitment to excellence, integrity, and innovation. We prioritize customer satisfaction, technological advancement, and ethical practices in all our endeavors. Our core values drive us to create value for our clients, partners, and stakeholders while contributing positively to the financial technology landscape.',
  },
];

const questions = () => {
  return (
    <div className="questions-section">
      
      <div className="questions-container">
        {questionsData.map((item, index) => (
          <div key={index} className="question-item">
            <h3 className="question">{item.question}</h3>
            <p className="answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default questions;
