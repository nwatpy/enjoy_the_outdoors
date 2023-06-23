import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import { getParkArticles } from "../../utils";

function ParkArticles(locationID) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (locationID) {
      getArticles();
    } 
  }, [locationID, getArticles]);

  const getArticles = async () => {
    const campgrounds = await getParkArticles(locationID, 3);
    setArticles(campgrounds);
  };

  return (
    <CardGroup>
      {articles.length > 0 &&
        articles.map((article) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={article.listingImage?.url} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
      
              <Card.Text>
                {article.listingDescription}
              </Card.Text>
              <Card.Link target="_blank" href={article.url}>Article Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
    </CardGroup>
  );
}

export default ParkArticles;
