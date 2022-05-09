import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const backgroundPage = css`
  min-height: 100vh;
  width: 100%;
  z-index: -1;
  margin: 0px;
  background-image: linear-gradient(to right, #009bbc, #023a4e);
  display: flex;

  flex-wrap: wrap;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 900px) {
    padding: 1px;
  }
`;

const wrapper2 = css`
  min-height: 80vh;
  width: 80%;
  background-color: #ffffff;
  display: flex;
  border-radius: 25px;
  flex-wrap: wrap;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;

const imgStyle = css`
  height: auto;
  width: 40%;
`;

const imgStyle2 = css`
  position: relative;
  @media screen and (max-height: 600px) {
    visibility: hidden;
    position: absolute;
  }
`;

const h1Style = css`
  font-family: Helvetica, Arial, sans-serif;
  color: #ffa0b7;
  font-weight: 800;
  font-size: 9em;
`;

const h2Style = css`
  font-family: 'Koulen', cursive;
  color: #011c25;
  font-weight: 900;
  font-size: 48px;
  margin: 40px;
  text-align: center;
  @media screen and (max-height: 600px) {
    margin: 0;
    position: absolute;
    top: 30%;
  }
`;

const iconWrapper = css`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-left: 8px;
  padding-right: 8px;
  @media screen and (max-width: 900px) {
    gap: 20px;
  }
`;

const linkStyle = css`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Koulen&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div css={backgroundPage}>
        <div css={wrapper2}>
          <Image
            src="/voyalLogo.png"
            height={225}
            width={400}
            css={imgStyle2}
          />

          <div css={h2Style}>Coming soon...</div>
          <div css={iconWrapper}>
            <Image src="/facebook.png" height={40} width={40} />
            <Image src="/instagram.png" height={40} width={40} />
            <Image src="/telegram.png" height={40} width={40} />
            <Image src="/whatsapp.png" height={40} width={40} />
            <Image src="/youtube.png" height={40} width={40} />
          </div>
        </div>
        <div css={linkStyle}>
          <a
            href="https://www.flaticon.com/free-icons/whatsapp"
            title="whatsapp icons"
          >
            Icons created by Pixel perfect - Flaticon
          </a>
        </div>
      </div>
    </>
  );
}
