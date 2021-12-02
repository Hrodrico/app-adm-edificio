import React from 'react'
import { Header, Segment, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const HeaderFloating = ({imgBusiness, nameBusiness}) => (
  <Segment clearing>
    <Link to="/"> 
    <Header as='h4' floated='left'>
      
        <Image className="logo" src={imgBusiness} />{nameBusiness}
    </Header>
      </Link>
    <Header as='h4' floated='right'><Icon name='user'/>Log in</Header>
  </Segment>
)

export default HeaderFloating
