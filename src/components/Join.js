import React from 'react';
import Right from './Right';
import Left from './Left';
import Mobil from './Mobil';
import { Responsive, Grid } from 'semantic-ui-react';

export default function Join() {
  return (
    <>
<Responsive minWidth={992}>
  
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={10}>
          <Left />
        </Grid.Column>
        <Grid.Column width={2}>
          <Right />
        </Grid.Column>
      </Grid.Row>
    </Grid>
</Responsive>

<Responsive maxWidth={450}>
  <Mobil />
</Responsive>

</>
  )
}