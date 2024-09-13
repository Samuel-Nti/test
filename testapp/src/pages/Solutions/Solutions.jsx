import React from 'react';
import './Solutions.css'; // Custom styling for the solutions component

const solutionsData = [
  {
    name: 'Accelerex Point of Sale Apps',
    description: 'Accelerex POS Applications are provisioned on our Linux and Android based Point-of-Sale terminal devices for secure and reliable transactions. These applications can be adapted to suit the diverse needs of merchants.The Accelerex POS Applications can be easily customised. Merchants can tailor the menu of the app to suit their business needs and use case. Some examples of customisations have been done for churches, fuel stations, hotels, hospitals etc  The Accelerex App comes with a value-added platform called POSMON which  is a PoS Monitoring Platform that allows corporates view reports and monitor terminal performance as well as accessing the e-journal functionality which provides access to receipts for dispute resolution.The Accelerex App comes installed on our NEXGO range of Point-of-Sales devices which includes NEXGO G2, NEXGO G3, NEXGO N3 Smart POS, and NEXGO N5 Smart POS.',
  },
 
  {
    name: 'RexRetail',
    description: 'RexRetail is an SME-tailored wholistic all-in-one solution for all retail business needs. The product is a Mobile Point of Sales Solution that allows small to medium sized merchants to digitise their retail operations around inventory management, payments, store management, cashier management etc. It is an android-based application that works on the NEXGO N5 device as the primary device type due to its robust features and durability. It is also available on the web, making it possible for users to login from anywhere securely and access the web functionality through the web engine on mobile or any other android devices.SMEs that use this product will enjoy inventory management, customer management, customer notifications, multiple payment options, reporting and analytics, bar code scanning long lasting battery life as well as reduction in operational cost. It is also available on google play.',
  },
  {
    name: 'Terminal Management solution',
    description: 'Our Terminal Management Solution helps Acquiring Banks manage their acquiring terminal devices on their payments infrastructure. Banks can easily track and monitor Terminal up-time, location and performance of their terminal devices real-time.The Terminal Management Solution enables banks to administer control over their payment devices and serves as a mini switch with the ability to route terminal transactions across their payment processing value chain.',
  },
  {
    name: 'Accelerex Network Platform',
    description: 'Accelerex Agent Network Platform (ANP) is a robust web-based portal that serves all stakeholders in the agent banking ecosystem. It is flexible, making it possible to accommodate different agent network business requirements and various delivery models. It makes the supervision, administration, and management of super agents’ businesses simpler and easier. It is secure and allows for easy onboarding and relationship management of agents, including proper KYC and due diligence documentation. Other unique features include instant settlement and reconciliation; fund and account management; transaction management; dashboard and reporting; third party connectivity; audit and fraud control. Banks can leverage this platform to streamline their Agent Network Operations while licensed Super Agents can leverage it to manage their operations.',
  },
  {
    name: 'Accelerex Collections Platform',
    description: 'ACP is a platform which streamlines the digital payment collection processes of various revenue collecting organisations such as Ministries, Departments and Agencies (MDAs), Financial institutions and other corporate entities by improving transparency, optimal allocation, utilisation and movement of financial resources within the organisation. Payment collection through ACP can be done via different channels such as POS, Web, USSSD and Bank Branches to enable collection of fees, dues, tariffs etc. ACP can be integrated to a company’s accounting system and is designed to be flexible and customisable to meet business requirements and delivery models.',
  },
  {
    name: 'Rexpay',
    description: 'RexPay is a robust payment platform that helps merchants to receive payment in a fast, convenient, and secure manner. RexPay allows merchants accept payments on the web or mobile channels from their customers who opt for payments using either Card, Account Transfers (Internet Banking) and Mobile Money.Whether you are an e-commerce merchant, or you sell through social media such as Instagram, WhatsApp or on your phone, our RexPay Checkout and Payment links allows you to receive payments instantly without any complex integration.RexPay is much more than just a payment gateway, it’s a solution that helps you scale your business for growth and wide acceptance. RexPay offers you seamless onboarding, competitive pricing, consolidated reporting and dashboard, convenience, and security. The platform is PCIDSS certified. Your customers do not have to worry about the security of their cards. Our Fraud management engine helps you track and identify suspicious payments on your platform.',
  },
  {
    name: 'Mobile Sales Automation Solution',
    description: 'MSAS is an enterprise business solution that allows FMCG companies and other similar retail products offering distribution organisations to process card transactions, manage sales and inventory, record and track customers orders and or to enroll and monitor their field marketing and sales operations contracted to third parties (e.g. sales agents). ',
  },
];

const Solutions = () => {
  return (
    <div className="solutions-section">
      <h1 className="section-title">Our Solutions</h1>
      <div className="solutions-list">
        {solutionsData.map((solution, index) => (
          <div key={index} className="solution-item">
            <h3 className="solution-name">{solution.name}</h3>
            <p className="solution-description">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
