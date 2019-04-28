import React,{Component}from 'react';
import './Left.css';
import { Grid, Button,Menu } from 'semantic-ui-react';


export default class Left extends Component {
  state = { activeItem: 'Anasayfa' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state
    return (
    <>
    <div className="Frame">
        <Grid columns={2} >
          <Grid.Row >
           <Grid.Row>
                <p className="Lorem-ipsum-Dolor-Sit-Amet-Lorem  "style={{marginTop:'40px'}}>
                  Lorem ipsum Dolor Sit Amet Lorem
               </p>
            </Grid.Row>
            <Grid.Row>
                <Button className="Button-1" color='black'style={{marginLeft:'150px',marginTop:'160px',width:'241px'}}>Button</Button>
            </Grid.Row>
          </Grid.Row>
            <Grid.Row>
              <Grid.Column style={{ marginLeft:'410px',marginTop: "120px",width:'165px'}}>
                <Menu text>
                  <Menu.Item style={{ color: "white" }}
                    name='Anasayfa'
                    active={activeItem === 'Anasayfa'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item style={{ color: "white" }}
                    name='Hakkımızda'
                    active={activeItem === 'hakkımızda'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item style={{ color: "white" }}
                    name='WeWantEd Lab'
                    active={activeItem === 'mostComments'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item style={{ color: "white", }}
                    name='Etkinlikler'
                    active={activeItem === 'etkinlikler'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item style={{ color: "white"}}
                    name='Blog'
                    active={activeItem === 'blog'}
                    onClick={this.handleItemClick}
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
        </Grid>

              
        
    </div>
    </>
  );
}
}

