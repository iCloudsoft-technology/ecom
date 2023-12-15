import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const ProductTabs: React.FC = () => {
  const [key, setKey] = useState<string>("description");

  return (
    <Tabs
      id="product-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k as string)}
      className="mb-3"
    >
      <Tab eventKey="description" title="Description">
        {/* Content for the Description tab */}
        <p>This is the description of the product.</p>
      </Tab>
      <Tab eventKey="specification" title="Specification">
        {/* Content for the Specification tab */}
        <p>These are the specifications of the product.</p>
      </Tab>
      <Tab eventKey="reviews" title="Reviews">
        {/* Content for the Reviews tab */}
        <p>Read the reviews about the product here.</p>
      </Tab>
    </Tabs>
  );
};

export default ProductTabs;
