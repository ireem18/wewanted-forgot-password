import React from 'react';
import './Mobil.css';
import './../index.css';
import logo from './../issue/LOGO1.png';
import email from './../issue/e.png';
import { Image, Input, Icon, Grid, Button } from 'semantic-ui-react';


export default function Right() {
  return (
    <>
    <div className="mobil">
        <Grid.Row >
          <Grid.Column>
            <img class=" ui small Logo1" src={logo} style={{ marginTop: '5px', width: '307px', height: '78px', marginLeft: '5px' }} alt="logo" />
          </Grid.Column>
          <Grid.Column >
            <p className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry" style={{ marginTop: "20px", marginLeft: "0px",width:"320px" }}>
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </Grid.Column>
          <Grid.Column>
            <p className="Lorem-Ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500s-when-an-unknown-printer-took-a-galley-of-type-it-specimen-book" style={{ marginLeft: "1px", width: "320px" }}>
              Lorem ipsum has been the industry standerd dummy text ever since the 1500s,when an unknown printer took a gallery
              of the type it specimen book.
            </p>
          </Grid.Column>
          <Grid.Column>
            <input icon="envolpe" type="text " className="Input-Base" placeholder='  E-posta adresi' style={{ marginLeft: "1px", width: "310px" }} />
          </Grid.Column>
          <Grid.Column>
            <button type="button" className="baseButton" style={{ marginLeft: "1px", width: "310px" }}>Sıfırlama Maili Gönder</button>
          </Grid.Column>
          <Grid.Column>
            <div className="footer" style={{ marginTop: '45px', marginLeft: '0px' }}>
              <span className="Giris-yap">Giriş Yap'a Geri Dön</span>
              <hr className="hro" style={{ backgroundColor: '#f89f23' }} />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="footer" style={{ marginTop: '90px', marginLeft: '20px' }}>
              <span className="Aramza-katlmak-ister-misin-Kayt">
                Aramıza katılmak ister misin?{' '}
              </span>
              <span className="kayit-ol" id="signUp">

                Kayıt Ol
        </span>
            </div>
          </Grid.Column>
        </Grid.Row>

    </div>
    </>
  );
  }
