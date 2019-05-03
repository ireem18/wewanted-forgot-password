import React from 'react';
import './../index.css';
import logo from './../issue/LOGO1.png';
import {Grid} from 'semantic-ui-react';


export default function Right() {
  return (
    <>
    
        <Grid.Column className="FrameRight" style={{margin:'0px',padding:"0px"}}>
        <Grid.Row style={{ margin:"0px" }}>
          <Grid.Column>
            <img class=" ui small" src={logo} style={{ marginTop: '15px', width: '307px', height: '78px', marginLeft: '65px' }} alt="logo" />
          </Grid.Column>
          <Grid.Column >
            <p className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry" style={{ marginTop: "20px", marginLeft: "40px" }}>
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </Grid.Column>
          <Grid.Column>
            <p className="Lorem-Ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500s-when-an-unknown-printer-took-a-galley-of-type-it-specimen-book" style={{ marginLeft: "40px" }}>
              Lorem ipsum has been the industry standerd dummy text ever since the 1500s,when an unknown printer took a gallery
              of the type it specimen book.
            </p>
          </Grid.Column>
          <Grid.Column>
            <input icon="envolpe" type="text " className="Input-Base" placeholder='  E-posta adresi' style={{ marginLeft: "35px", width: "420px" }} />
          </Grid.Column>
          <Grid.Column>
            <button type="button" className="baseButton" style={{ marginLeft: "35px", width: "420px" }}>Sıfırlama Maili Gönder</button>
          </Grid.Column>
          <Grid.Column>
            <div className="footer" style={{ marginTop: '45px', marginLeft: '10px' }}>
              <span className="Giris-yapa-don">Giriş Yap'a Geri Dön</span>
              <hr className="hr" style={{ backgroundColor: '#f89f23' }} />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="footer" style={{ marginTop: '70px', marginBottom: '0px', marginLeft: '20px' }}>
              <span className="Aramza-katlmak-ister-misin-Kayt-Ol" >
                Aramıza katılmak ister misin?{' '}
              </span>
              <span className="kayit-ol" id="signUp">

                Kayıt Ol
        </span>
            </div>
          </Grid.Column>
        </Grid.Row>
       
        </Grid.Column>
 
    </>
  );
  }


/*
 

        */