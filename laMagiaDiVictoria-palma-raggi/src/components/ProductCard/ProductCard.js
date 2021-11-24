import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './ProductCard.css';

const ProductCard = ({ img, name, date, description }) => (
	<div className='ProductCard'>
		<Card>
			<Image src={img} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>
					<span className='date'>{date}</span>
				</Card.Meta>
				<Card.Description>{description}</Card.Description>
			</Card.Content>
		</Card>
	</div>
);

export default ProductCard;
