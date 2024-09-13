import React, { useState } from 'react';
import './directors.css'; // Custom styling for the team component
import Botchwey from '../../assets/botchwey.jpg';
import kayode from '../../assets/kayode.jpg';
import chinaza from '../../assets/chinaza.jpg';
import addo from '../../assets/addo.jpg';
import aelex from '../../assets/aelex.jpg';
import yalleyA from '../../assets/yalley-1.jpg'

// Sample team data
const teamData = [
    {
        id: 1,
        name: 'Emmanuel Botchwey',
        role: 'Chairman',
        photo: Botchwey,
        experience: ` Mr Botchwey is an award-winning Real Estate mogul who founded and owns majority stake in one of Ghana's largest real estate companies operating also in Sierra Leone. He is the Executive Chairman of the Regimanuel Gray Group of companies which is made up of Regimanuel Gray Ltd, Regimanuel Gray Estate Management Company Ltd. (RGEMC), Regimanuel Gray (Sierra Leone) Ltd, Regimanuel Gray (Liberia) Ltd, Desjoyaux Pools Ltd, Bessblock Concrete Products Ltd, Sierrablock Concrete Products Ltd and Regimanuel Concrete Products LTD. As an astute entrepreneur, Emmanuel has been celebrated with several awards among which are the Property Personality of the year for 2009, the Entrepreneurs Foundation’s 2010 award for Best Entrepreneur - Real Estate Development, and the Kwame Nkrumah Excellence Award in Enterprise. In 2011 the Republic of Ghana conferred one of its highest national honours, Officer of the Order of the Volta, on him for his outstanding contribution to housing in Ghana.`,
      },
      {
        id: 2,
        name: 'Micheal Adotey Addo',
        role: 'Director',
        photo: addo,
        experience: `Michael is an international business and finance professional with over three decades hands-on experience in pensions, funds management, oil & gas, and real estate with top companies in Ghana, Nigeria, and the United States of America. He is currently the Deputy Director-General for Finance and Administration at SSNIT, Ghana’s foremost pension scheme. Apart from Global Accelerex Ghana, he sits on the Boards of 2 universal banks, Ghana’s Stock Exchange, and an oil company. Previously, he has been on the Board of 7 other companies in cross-cutting sectors including pharmaceutical and financial services. Michael holds an MBA Finance from the Johnson Graduate School of Management, Cornell University; an MSAT (Insurance) from Barney School of Business, University of Hartford and BA Economics from Bates College, all in the USA.`,
      },
      {
        id: 3,
        name: 'Kayode O. Ariyo',
        role: 'Director',
        photo: kayode,
        experience: `Kayode is an astute business development professional and entrepreneur with over 20 years’ experience in business execution, sales, retail strategy, supply chain/distribution, and operations. Expertise in areas ranging from business administration to sales, supply chain and service operations management. He successfully grew three businesses from start-up to Billions in annual sales through effective business planning, creative sales techniques, and innovative marketing. He serves on the Board of two organisations including a Non-Governmental Organisation that is  focused on healthcare intervention for the poor. Kayode completed the Advanced Management Program for Entrepreneur at the Pan African University and Bachelors in Agricultural Engineering at the Ibadan.`,
      },
      {
        id: 4,
        name: 'Chinaza Onuzu',
        role: 'Director',
        photo: chinaza,
        experience: `Chinaza is a leading private equity professional with over 13 years of experience with  over $1 billion of transactions closed. He specialises in Telecoms, Media and Technology (TMT). Up until 2019, Chinaza was the TMT lead for African Capital Alliance (ACA); a leading West African focused Private Equity firm. Prior to joining ACA in 2006, Chinaza completed his M.Sc. in Economics and Finance at Warwick Business School and a BSc in Economics from Duke University. In his time at ACA, Chinaza acquired experience investing in and working with companies in different sectors including, oil and gas, power, telecoms, and financial services in addition to TMT. Chinaza has experience through the entire private equity fund cycle, from fundraising, through sourcing and deal making, to portfolio management and exit. Chinaza is also a founder and director at Inkblot Productions; a leading Nigerian production company. `,
      },
      {
        id: 5,
        name: 'Sebastian Yalley',
        role: 'Director',
        photo: yalleyA,
        experience: `Sebastian has rich experience in rolling out digital products and services ranging from payment cards, POS terminals, Mobile Money platforms, Mobile Banking, Collections Platforms to Remittance products in the Ghanaian banking sector. His banking career spans over 15 years with 5 top tier banks where he held both managerial and executive level positions in Digital Banking, Alternative Channels, and Card Services. A highly successful business technology executive with a can-do approach to projects, Sebastian specialises in Financial Technology, Growth and Strategy for start-ups, Solutions Delivery, Operations Management, Innovations and Leadership. As a knowledge broker, he facilitates sessions on Payment Systems at the National Banking College and speaks on motivational topics. He holds a Master’s in Computer and Internet Applications from the University of Bedfordshire, a Bachelor’s in Computing from the University of Greenwich and an Executive MBA in Project Management from the University of Ghana Business School. He also holds certificates in Card Fraud and Risk Management and MasterCard Pricing and Acquirer P&L from Visa Business School and MasterCard Academy respectively. Sebastian is a Chartered IT Professional with the British Computer Society and a member of the Institute of Directors Ghana. He is passionate about aligning business and technology goals.`,
      },
      {
        id: 6,
        name: 'ǼLEX',
        role: 'Board Secretary',
        photo: aelex,
        experience: `ǼLEX is a leading Commercial & Dispute Resolution law firm. They are one of the largest full-service law firms in West Africa with offices in Lagos, Port Harcourt and Abuja in Nigeria and Accra, Ghana. They provide legal services involving commercial practice areas that cover a broad spectrum of matters relating to Project Finance, Tax Law, International Trade Law, Securities Law, Energy & Infrastructure, Banking & Finance Law, Aviation & Maritime Law and Intellectual Property Law.`,
      },
  // Your team data here
];

const directors = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Function to open modal with selected member details
  const handleSeeMore = (member) => {
    setSelectedMember(member);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-section">
      <h1 className="section-title">Board of Directors</h1>
      <div className="team-grid">
        {teamData.map((member) => (
          <div key={member.id} className="team-member">
            <div className="team-photo-wrapper">
              <img src={member.photo} alt={member.name} className="team-photo" />
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <button onClick={() => handleSeeMore(member)} className="see-more-btn">
                See More <span className="arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing detailed info */}
      {selectedMember && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <img
              src={selectedMember.photo}
              alt={selectedMember.name}
              className="modal-photo"
            />
            <div className="modal-text">
              <h2 className="modal-name">{selectedMember.name}</h2>
              <p className="modal-role">{selectedMember.role}</p>
              <p className="modal-experience">{selectedMember.experience}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default directors;
