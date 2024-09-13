import React, { useState } from 'react';
import './NewsUpdates.css'; // Custom styling for the news and updates component
import bog from '../../assets/bog-3.jpg';
import award from '../../assets/award.png';
import Global from '../../assets/GLOBAL.png';
import Moove from '../../assets/Moove.png';


// Sample news data
const newsData = [
  {
    id: 1,
    title: 'BoG grants Global Accelerex enhanced PSP licence',
    date: 'March 22, 2021',
    description: 'The Bank of Ghana has granted Global Accelerex Ghana Limited – a payment service provider and platform operator – an enhanced Payment Service Provider (PSP) license under the Payment Systems and Services Act, 2019 (Act 987).',
    image: bog,
    details: 'The Bank of Ghana has granted Global Accelerex Ghana Limited – a payment service provider and platform operator – an enhanced Payment Service Provider (PSP) license under the Payment Systems and Services Act, 2019 (Act 987).The license permits Global Accelerex to offer POS devices and applications agency banking platforms, merchant payment collections, terminal management systems, and terminal aggregator management systems. Through product innovation and impeccable attention to customer needs, the company is gradually emerging as the financial technology company to watch in the Ghanaian market over the coming years.A subsidiary of the Accelerex Holdings Group, which has footprints in Nigeria and Kenya, Global Accelerex Ghana commenced operations in the country in 2019; and after fulfilling all regulatory requirements, the BoG has awarded it an enhanced PSP license.The group recently secured a US$20million investment from Africa Capital Alliance to expand into South Africa, Cote d’Ivoire, and Tanzania.Prior to approval from the central bank, Global Accelerex Ghana was granted the ISO 27001:2013 and PCI-DSS certifications. This currently makes the company the only fintech within the enhanced PSP category that provides Point-of-Sale terminals, merchant acquiring, and agency banking solutions in Ghana.Speaking on the achievements, Chief Executive Officer and Managing Director of Global Accelerex Ghana Limited, Sebastian Yalley, noted that: “The delivery of superior payment solutions must be backed by the necessary regulatory compliance to protect consumers”.He further noted that at Global Accelerex Ghana, standardisation and compliance “remain the bedrock of our operations across all our subsidiaries in Africa: We believe that having this licence is a demonstration of our commitment to the Ghanaian market, and serves as the foundation for rolling out simple, secured, and convenient payment solutions for all customer segments. We intend to use this as a leverage to deepen our existing relationships with our bank clients. In that same spirit of collaboration, we are open to working with other fintech companies to deliver superior value for the Ghanaian market”.To increase its footprint in the country, the company is planning to – in the second quarter of 2021 – roll out two new products targeted at micro, small, and medium enterprises in the retail and services sector.They comprise RexRetail and RexPay – products built with entrepreneurs in mind. These products have business management features which give entrepreneurs the power to do more than just accept payments, the company said.“With these certifications and experience, Global Accelerex Ghana is poised to drive the Fintech market by providing payment solutions to individuals and businesses across different channels and verticals,” the CEO added.',
  },
  {
    id: 2,
    title: 'Global Accelerex wins Innovative e-Payment Solutions Provider of the year',
    date: '2024-08-30',
    description: 'Our company has achieved a significant milestone in our expansion efforts. This achievement marks a new chapter in our growth story.',
    image: award,
    details: 'Global Accelerex Ghana has been adjudged the most “Innovative e-Payment Solutions Provider” of the year at the 11th Ghana Information Technology and Telecoms Awards (GITTA) held in Accra.GITTA is a flagship industry event that promotes and celebrates both public and private sector players within the technology and telecommunication space that are contributing to the growth of the digital economy of Ghana and serving last-mile communities using technology.The award is in recognition of Global Accelerex’s contribution to Ghana’s cash-lite agenda through e-payments solutions such as RexPay and RexRetail that are enabling merchants to seamlessly accept card and money payments on Point-of-Sale (POS) device and online.Additionally, the company is contributing to the country’s financial inclusion through its POS implementation and agency banking solutions.Commenting on the award, Chief Executive Officer and Managing Director of Global Accelerex Ghana, Sebastian Yalley, expressed gratitude for the recognition,  saying “this is a demonstration of our intent in the Ghanaian market and indeed across the entire market we operate in – to be foremost e-payment innovator. This award tell us that we are on the right path and for us, it is an indication to accelerate, to keep people at the centre of our product development to solve real life problems around payments and financial service delivery.”He also dedicated the award to customers and staff.The event was attended by heads of companies within the technology, telecommunication, and banking sector. Heads of government agencies and ministries including, The Minister of Communications and Digitalisation, Ursula Owusu was also in attendance as the guest of honour.Global Accelerex is a Pan-African fintech with operations in Ghana, Nigeria, Kenya, Tanzania and Congo DRC. The company is part of the Accelerex Holdings which has subsidiaries in payment, microfinance, and agency banking.',
  },
  {
    id: 3,
    title: 'Banking Survey 2020: Global Accelerex',
    date: '2024-08-20',
    description: 'Global Accelerex is a financial technology company operating in Ghana, Nigeria, and now expanding to Kenya with a holding group in Mauritius. We are a leading Payment Terminal Services Providers and Payments Solutions & Services Provider.',
    image: Global,
    details: 'While the Coronavirus may have forced organisations to adjust the way they operate, at Global Accelerex, it has not halted either our progress or our commitment to extend financial inclusion, improve the daily lives of people through the provision of bespoke e-payment solutions and our quest to spur growth of our business partners.“COVID-19, as devastating as it has been, also opened new possibilities for digital innovations especially in financial service delivery. Financial service providers that will stay ahead of the competition in the post COVID-19 era are the ones that will reimagine their products to solve real problems digitally.As a financial technology company with expertise and experience across Africa, we bring to the Ghanaian market, a commitment to support financial service providers innovate their service delivery processes to delight their customers. Talk to us first if you need payment or collection solutions,” says Sebastian Yalley, Chief Executive Officer of Accelerex Ghana.Although Accelerex is not immune to the wider impact of the Coronavirus pandemic particularly on the economy, as a financial technology player, we see opportunities to innovate, increase demand for alternative channels from end-users, increase in demand for digital solutions from service providers and to diversify our product mix to meet demand in the face of the crisis.',
  },

  {
    id: 4,
    title: 'Global Accelerex Partner Moove to delight Uber riders',
    date: '2024-08-20',
    description: 'Africa’s leading financial technology company, Global Accelerex Ltd, has partnered with Moove, Uber’s preferred fleet partner in sub-Saharan Africa, to make payments seamless for riders across Africa.To address the inconvenience of cash payment on Uber rides and provide comfort to passengers who do not want to enter their card details online,',
    image: Moove,
    details: 'The portable and stylish N3 PoS terminal outperforms the competition with unique features that make it the preferred choice for businesses that value-efficient operations. It comes loaded with multiple payment options which enables bank card, mobile and QR payments; long-lasting battery, ideal for drivers on the go; exceptional security that guarantees peace of mind; faster operating experience with android 5.X; and dual camera. It is also 4G, Wi-Fi & Bluetooth-enabled, making it the perfect payment device for the 21st century transportation business.Speaking about this strategic alliance, the Executive Director, Business Development and Operations of Global Accelerex, Mr. Kayode Ariyo, stated that it is a union of two market leaders in the technology-driven business space constantly seeking to make life easier for consumers.“We are thrilled to partner with Moove to offer the revolutionary N3 device for deployment in their cars to make payment simple and safer for passengers. I am particularly glad about the fact that it reduces the restriction on payment options as passengers can now pay with their cards while on the move, and not just at stationary locations. This is an exciting development for our company because it underscores our commitment to promote a cashless system and aligns with our objective to make e-payment accessible to Nigerians,” Mr. Ariyo said.',
  },
];

const NewsUpdates = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  // Function to open modal with selected news details
  const handleSeeMore = (news) => {
    setSelectedNews(news);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="news-updates-section">
      <h1>News and Updates</h1>
      <div className="news-container">
        {newsData.map((newsItem) => (
          <div key={newsItem.id} className="news-item">
            <img src={newsItem.image} alt={newsItem.title} className="news-image" />
            <div className="news-content">
              <h2 className="news-title">{newsItem.title}</h2>
              <p className="news-date">{newsItem.date}</p>
              <p className="news-description">{newsItem.description}</p>
              <button onClick={() => handleSeeMore(newsItem)} className="see-more-btn">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing detailed info */}
      {selectedNews && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <div className="modal-inner">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="modal-photo"
              />
              <div className="modal-text">
                <h2 className="modal-title">{selectedNews.title}</h2>
                <p className="modal-date">{selectedNews.date}</p>
                <p className="modal-details">{selectedNews.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsUpdates;
