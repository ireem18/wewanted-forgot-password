import React,{Component} from 'react';
import Right from './Right';
import Left from './Left';
import Mobil from './Mobil';
import { Responsive, Grid } from 'semantic-ui-react';

export default class App extends Component {
  render() {
   return (
      <>
       <Responsive minWidth={992}>

         <Grid columns={2}>
           <Grid.Row  >
             <Grid.Column width={10} style={{ margin: '0px', padding: "0px" }} >
               <Left />
             </Grid.Column>
             <Grid.Column width={2} style={{ margin: '0px', padding: "0px" }}>
               <Right />
             </Grid.Column>
           </Grid.Row>
         </Grid>
       </Responsive>

       <Responsive maxWidth={450}>
         <Mobil />
       </Responsive>
      </>
    );
  }
}