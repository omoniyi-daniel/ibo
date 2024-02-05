import Head from "next/head";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import { css } from "@emotion/css";
import FrameComponent from "../components/frame-component";

const NewLandingPage = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--white);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 0px 0px 23px;
        box-sizing: border-box;
        gap: var(--gap-54xl);
        letter-spacing: normal;
        @media screen and (max-width: 750px) {
          gap: var(--gap-54xl);
        }
        @media screen and (max-width: 450px) {
          gap: var(--gap-54xl);
        }
      `}
    >
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px 0px 0px;
          box-sizing: border-box;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            max-width: 100%;
          `}
        >
          <FrameComponent2 />
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent />
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          position: relative;
          max-width: 100%;
          text-align: left;
          font-size: var(--font-size-181xl);
          color: var(--color-royalblue-200);
          font-family: var(--mini-header);
        `}
      >
        <h1
          className={css`
            margin: 0 !important;
            height: 242px;
            width: 880px;
            position: absolute;
            top: 2px;
            left: -143px;
            font-size: inherit;
            text-transform: uppercase;
            font-weight: 900;
            font-family: inherit;
            display: inline-block;
            z-index: 1;
            @media screen and (max-width: 1050px) {
              font-size: var(--font-size-61xl);
            }
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-31xl);
            }
          `}
        >
          Ibrahim
        </h1>
        <h1
          className={css`
            margin: 0 !important;
            height: 242px;
            width: 1241px;
            position: absolute;
            right: -494px;
            bottom: 0px;
            font-size: inherit;
            text-transform: uppercase;
            font-weight: 900;
            font-family: inherit;
            display: inline-block;
            z-index: 3;
            @media screen and (max-width: 1050px) {
              font-size: var(--font-size-61xl);
            }
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-31xl);
            }
          `}
        >
          Obanikoro
        </h1>
        <div
          className={css`
            height: 52px;
            width: 642px;
            position: absolute;
            margin: 0 !important;
            bottom: 337px;
            left: -404px;
            background-color: var(--color-royalblue-200);
            z-index: 1;
          `}
        />
        <div
          className={css`
            height: 52px;
            width: 642px;
            position: absolute;
            margin: 0 !important;
            right: -540px;
            bottom: 337px;
            background-color: var(--color-royalblue-200);
            z-index: 1;
          `}
        />
        <div
          className={css`
            flex: 1;
            background-color: var(--color-royalblue-100);
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-start;
            padding: 49px 2px 242px;
            box-sizing: border-box;
            gap: var(--gap-76xl);
            max-width: 100%;
            font-size: var(--mini-header-size);
            color: var(--white);
            @media screen and (max-width: 750px) {
              gap: var(--gap-76xl);
              padding-top: var(--padding-13xl);
              padding-bottom: 157px;
              box-sizing: border-box;
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-76xl);
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              height: 728px;
              position: relative;
              background-color: var(--color-royalblue-100);
              display: none;
            `}
          />
          <div
            className={css`
              width: 964px;
              height: 100px;
              position: relative;
              max-width: 100%;
            `}
          >
            <input
              className={css`
                border: none;
                outline: none;
                background-color: var(--color-royalblue-200);
                position: absolute;
                top: 48px;
                left: 322px;
                width: 642px;
                height: 52px;
                z-index: 1;
              `}
              type="text"
            />
            <h1
              className={css`
                margin: 0;
                position: absolute;
                top: 0px;
                left: 20px;
                font-size: inherit;
                font-weight: 700;
                font-family: inherit;
                z-index: 2;
                @media screen and (max-width: 1050px) {
                  font-size: var(--font-size-19xl);
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-10xl);
                }
              `}
            >
              Achievement video
            </h1>
          </div>
          <div
            className={css`
              width: 1319px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: center;
              padding: 0px var(--padding-xl);
              box-sizing: border-box;
              max-width: 100%;
              font-size: var(--font-size-181xl);
              color: var(--color-royalblue-200);
            `}
          >
            <div
              className={css`
                width: 1033px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                position: relative;
                max-width: 100%;
              `}
            >
              <h1
                className={css`
                  margin: 0;
                  height: 242px;
                  flex: 1;
                  position: relative;
                  font-size: inherit;
                  text-transform: uppercase;
                  font-weight: 900;
                  font-family: inherit;
                  display: inline-block;
                  max-width: 100%;
                  z-index: 2;
                  @media screen and (max-width: 1050px) {
                    font-size: var(--font-size-61xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-31xl);
                  }
                `}
              >
                Babajide
              </h1>
              <div
                className={css`
                  height: 490px;
                  width: 1152px;
                  position: absolute;
                  margin: 0 !important;
                  bottom: -195px;
                  left: -262px;
                `}
              >
                <input
                  className={css`
                    border: none;
                    outline: none;
                    background-color: var(--color-royalblue-200);
                    position: absolute;
                    top: 390px;
                    left: 0px;
                    width: 642px;
                    height: 52px;
                    z-index: 1;
                  `}
                  type="text"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 288px;
                    border-radius: 15px;
                    max-height: 100%;
                    width: 864px;
                    object-fit: cover;
                    z-index: 4;
                  `}
                  loading="eager"
                  alt=""
                  src="/screenshotiboorgng202210-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewLandingPage;
