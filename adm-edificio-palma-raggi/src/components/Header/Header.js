import React from 'react'
import { Header, Segment, Icon } from 'semantic-ui-react'

const HeaderFloating = () => (
  <Segment clearing>
    {/* <Header as='h4' floated='left'>Bienvenido a Min-Deptos!!!</Header> */}
    <Header as='h4' floated='right'><Icon name='user'/>Log in</Header>
  </Segment>
)

export default HeaderFloating
