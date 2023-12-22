import React from "react";
import "./HomeCards.css";

interface cardsData {
  heading: string;
  description: string;
  img: string;
}
const HomeCards: React.FC = () => {
  const cardsData = [
    {
      heading: "Shop, Sell and Support",
      description:
        "C-Angelx enables individual Patrons (customers, supporters, etc) to follow listed merchants & NPOs of their choice on this platform - & shop online, place lay-buys, or donate to any of the listed NPOs they like",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/new/shop.png",
    },
    {
      heading: "Business Efficiencies",
      description:
        "You are also able to create an online merchant & sell online, or an NPO (cause) account for superior fundraising & receiving donations online safely. Add your staff as subordinates to upload inventory & process sales’ while you manage the business...",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/new/give.png",
    },
    {
      heading: "One Stop Solution",
      description:
        "C-Angelx has everything figured out for your merchant: DHL Courier services can collect directly from your shop & deliver directly to your customer’s door, securely & safely. No Hassles!",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/new/one.png",
    },
    {
      heading: "Safe and Secured",
      description:
        "C-Angelx is designed with security in mind, & further hosted in highly secure & reliable global servers’ as a Global-Platform.",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/new/safe.png",
    },
    {
      heading: "Quick and Easy",
      description:
        "We have partnered with known and trusted 3rd party suppliers in the global ecommerce industry – for secure transactions, and reliable courier services.",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/new/quick.png",
    },
    {
      heading: "So how much",
      description:
        "There are No fixed monthly fees on merchants, but a 3% commission for each sale - plus the separate Payment gateway’s fee of 2,9 – 3,5% (around 7% in total, which is still lower than the 10 – 15% charged by other platforms!). NPOs (causes) are exempt of our fee, except of the payment gateway’s fee.",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/new/how.png",
    },
  ];

  return (
    <>
      <div className="our_solution_category">
        {cardsData.map((item) => (
          <div className="col-lg-4">
            <div className="solution_card">
              <div className="hover_color_bubble"></div>
              <div className="so_top_icon">
                <img src={item.img} />
              </div>
              <div className="solu_title">
                <h3>{item.heading}</h3>
              </div>
              <div className="solu_description">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCards;
