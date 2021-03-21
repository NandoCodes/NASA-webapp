import { useState, useEffect} from "react";

import ImagesService from "../services/images.service"
import { Card } from "react-bootstrap";



const ImageDay = () => {
    
  const [image,setImage]= useState("");
  const [explanation,setExplanation]=useState("");
  const [title,setTitle]=useState("");

  useEffect(() => {
    ImagesService.getNasaImage().then(
      (response) => {
        setImage(response.data.url );
        setTitle(response.data.title);
        setExplanation(response.data.explanation);
      }
      
    ).catch(error => console.log(error))
  }, []);

    return (
      <>
    <h2  style={{color:'SteelBlue',display: 'flex',  justifyContent:'center'}}>
      Image of the Day
    </h2>
      <Card className="align-items-center" style={{ heigth:'60%' }}>
  <Card.Img  variant="top" src={image} />
  <Card.Body className="bg-light">
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {explanation}
    </Card.Text>
    
  </Card.Body>
</Card>
</>
     
  
    );
  };
  
  export default ImageDay;