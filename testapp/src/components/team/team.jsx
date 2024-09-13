import React, { useState } from 'react';
import './team.css'; // Custom styling for the team component
import yalley from '../../assets/yalley-team.jpg';
import tay from '../../assets/tay.jpg';
import mark from '../../assets/mark.jpg';
import boye from '../../assets/boye.jpg';
import Felix from '../../assets/Felix.jpg';

// Sample team data
const teamData = [
    {
        id: 1,
        name: 'Sebastian Yalley',
        role: 'CEO/Managing Director',
        photo: yalley,
        experience: ` Sebastian has rich experience in rolling out digital products and services ranging from payment cards, POS terminals, Mobile Money platforms, Mobile Banking, Collections Platforms to Remittance products in the Ghanaian banking sector. His banking career spans over 15 years with 5 top tier banks where he held both managerial and executive level positions in Digital Banking, Alternative Channels, and Card Services. A highly successful business technology executive with a can-do approach to projects, Sebastian specialises in Financial Technology, Growth and Strategy for start-ups, Solutions Delivery, Operations Management, Innovations and Leadership. As a knowledge broker, he facilitates sessions on Payment Systems at the National Banking College and speaks on motivational topics. He holds a Master’s in Computer and Internet Applications from the University of Bedfordshire, a Bachelor’s in Computing from the University of Greenwich and an Executive MBA in Project Management from the University of Ghana Business School. He also holds certificates in Card Fraud and Risk Management and MasterCard Pricing and Acquirer P&L from Visa Business School and MasterCard Academy respectively. Sebastian is a Chartered IT Professional with the British Computer Society and a member of the Institute of Directors Ghana. He is passionate about aligning business and technology goals.`,
      },
      {
        id: 2,
        name: 'Selassie Tay',
        role: `Manager, Business Dev't & PR`,
        photo: tay,
        experience: `Selassie comes from a professional background in Financial Inclusion, Fintech, Consultancy, and Social Entrepreneurship within multicultural settings. He’s held management roles in Business Development, Commercial Operations, Finance, and Administration. An extremely goal-focused person, he has expertise in Business Strategy and Coaching, Negotiation, Partnerships Building, Market Research and Diagnostic, Product Development and Management, and Policy Influencing. He has a positive approach to work, often seeing new ways existing opportunities could be developed to grow market share and profitability. Selassie studied MBA in Finance; BSc in Banking and Finance; and Certificates in Microfinance and Social Change leadership. He is currently pursuing professional certifications in Digital Finance and PMP. He’s a Fellow of the Dalai Lama Fellowship; YALI; Emerging African Leaders’ Programme; and the Emerging Leaders’ Programme by Mohammed VI King of Morocco. Selassie is passionate about solving social problems with business and technological innovations.`,
      },
      {
        id: 3,
        name: 'Mark Ayumu',
        role: 'Manager, Finance and Admin',
        photo: mark,
        experience: `Mark brings to bear a rich professional experience in Corporate Reporting, Taxation and Business Information Systems across various sectors including, Information Technology, HR, Real Estate, Aviation and Oil & Gas where he implemented several Accounting, Payroll and ERP solutions. He is well vested in the Ghanaian tax system and has provided tax advisory and representation services to several multinational companies. As a problem solver and a highly results oriented person, he approaches situations with ethical considerations and high moral aptitude. Mark is a Chartered Accountant, a member of the Institute of Chartered Accountants, Ghana. He holds a Master of Science in Development Finance from the University of Ghana Business School; a Bachelor of Commerce from the University of Cape Coast; and a Higher National Diploma in Accountancy from Koforidua Technical University. He is currently pursuing Bachelor of Laws (LLB) and hopes to be called to the Ghanaian Bar in the years to come.`,
      },
      {
        id: 4,
        name: 'Percy Boye',
        role: 'Manager, Risk and Compliance',
        photo: boye,
        experience: `Percy has 8 years’ professional experience in the financial service sector and management consultancy mainly in internal auditing, financial accounting, risk management and sales roles. In his immediate past role as Acting Head of Audit at Letshego, he led several audit assignments and investigations to ensure adherence to IFRS standards and corporate regulations. His areas of expertise are risk management, enhancing internal controls and reducing regulatory infractions to the barest minimum. He brings to the team a deep understanding of the regulatory compliance landscape across Africa as a result of his international work exposure within the continent. Percy holds a bachelor’s degree in business administration; certifications in fraud and security management, Cybersecurity Compliance Framework and System Administration, Projects Risk and Change Management; and membership with the Institute of Internal Auditors (IIA), both local and global. `,
      },
      {
        id: 5,
        name: 'Felix Titiati',
        role: 'Manager, Tech Operations and Solution Delivery',
        photo: Felix,
        experience: `Felix has a niche in creating next-generation payments systems from scratch. Over the past 12 years, he has worked with IBM West Africa as a Financial Services and application consultant, Fidelity Bank Ghana Limited as a systems administrator and solutions architect, and Sovereign Bank Ghana as the head of the e-banking unit. In both banks he led the design and implementation of various payment systems and card products.  Felix works with our clients and developers to create and launch our exceptional payment systems and products. He is and avid reader with an interest in systems programming and distributed computing.`,
      },
  // Your team data here
];

const team = () => {
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
      <h1 className="section-title">Meet Our Team</h1>
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
            <button className="close-btn" onClick={handleCloseModal}>x</button>
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

export default team;
