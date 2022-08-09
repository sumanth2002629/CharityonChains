import React from 'react';
import { Card, CardImg, CardBody, CardHeader, CardText } from "reactstrap";

function ItemCards(props){
	return (
		<div>
		<Card className="text-center">
      <CardHeader color="dark">
        {props.name}
      </CardHeader>
      <CardBody>
        <ul>
					<li>Quantity: {props.quantity}</li>
					<li>Price: {props.price}</li>
				</ul>
      </CardBody>
    </Card>
		</div>)
}

export default ItemCards;