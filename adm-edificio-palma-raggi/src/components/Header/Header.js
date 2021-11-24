import React from 'react'
import { Header, Segment, Icon, Image } from 'semantic-ui-react'

const HeaderFloating = ({imgBusiness, nameBusiness}) => (
  <Segment clearing>
    <Header as='h4' floated='left'><Image className="logo" src={imgBusiness} />{nameBusiness}</Header>
    <Header as='h4' floated='right'><Icon name='user'/>Log in</Header>
  </Segment>
)

export default HeaderFloating
