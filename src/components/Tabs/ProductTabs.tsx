import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
interface ProductTabsProps {
  productData: Product | Product[] | null;
}
const ProductTabs: React.FC<ProductTabsProps> = ({ productData }) => {
  const [data, setData] = useState<Product | {}>(productData || {});

  useEffect(() => {
    if (productData) {
      setData(productData);
    }
  }, [productData]);
  const { description } = data as Product;

  return (
    <>
      <Row className="product-tabs">
        {data && (
          <Tabs defaultActiveKey="description" className="mb-3 tabs">
            <Tab
              eventKey="description"
              title="Description"
              className="p-2 text-left"
            >
              {description}
            </Tab>
            <Tab eventKey="reviews" title="Reviews" className="p-2 text-left">
              Tab content for Profile
            </Tab>
            <Tab eventKey="comments" title="Comments" className="p-2 text-left">
              Tab content for Contact
            </Tab>
          </Tabs>
        )}
      </Row>
    </>
  );
};

export default ProductTabs;
