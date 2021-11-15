import React from 'react'
import { Header, Segment, Icon } from 'semantic-ui-react'

const HeaderFloating = () => (
  <Segment clearing>
    <Header as='h2' floated='right'>
	<Icon name='user'/>Log in
    </Header>
    <Header as='h2' floated='left'>
      Admin Deptos
    </Header>
  </Segment>
)

export default HeaderFloating
