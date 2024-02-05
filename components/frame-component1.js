import { css } from "@emotion/css";

const FrameComponent1 = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        padding: var(--padding-5xs) 0px;
        box-sizing: border-box;
        position: relative;
        min-height: 878px;
        max-width: 100%;
        margin-top: -75px;
        text-align: left;
        font-size: var(--font-size-13xl);
        color: var(--white);
        font-family: var(--font-poppins);
      `}
    >
      <img
        className={css`
          height: 100%;
          width: 100%;
          position: absolute;
          margin: 0 !important;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: contain;
        `}
        alt=""
        src="/mask-group@2x.png"
      />
      <div
        className={css`
          flex: 1;
          background: linear-gradient(82.22deg, #000 0.5%, rgba(0, 0, 0, 0.04));
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-start;
          padding: var(--padding-28xl) 0px 0px var(--padding-46xl);
          box-sizing: border-box;
          row-gap: 20px;
          max-width: 100%;
          z-index: 1;
          @media screen and (max-width: 1200px) {
            flex-wrap: wrap;
            padding-left: var(--padding-xl);
            padding-right: var(--padding-xl);
            padding-bottom: var(--padding-xl);
            box-sizing: border-box;
          }
          @media screen and (max-width: 1050px) {
            padding-top: var(--padding-5xs);
            box-sizing: border-box;
          }
        `}
      >
        <div
          className={css`
            height: 796px;
            width: 1440px;
            position: relative;
            background: linear-gradient(
              82.22deg,
              #000 0.5%,
              rgba(0, 0, 0, 0.04)
            );
            display: none;
            max-width: 100%;
          `}
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            min-width: 625px;
            min-height: 540px;
            max-width: 100%;
            @media screen and (max-width: 1200px) {
              flex: 1;
              min-height: auto;
            }
            @media screen and (max-width: 750px) {
              min-width: 100%;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              position: relative;
              min-height: 480px;
              max-width: 100%;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-12xl);
                max-width: 100%;
                @media screen and (max-width: 750px) {
                  gap: var(--gap-12xl);
                }
              `}
            >
              <h3
                className={css`
                  margin: 0;
                  width: 524px;
                  height: 48px;
                  position: relative;
                  font-size: inherit;
                  font-weight: 500;
                  font-family: inherit;
                  display: inline-block;
                  max-width: 100%;
                  padding-right: var(--padding-xl);
                  z-index: 2;
                  @media screen and (max-width: 1050px) {
                    font-size: var(--font-size-7xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lgi);
                  }
                `}
              >
                Welcome to my official website
              </h3>
              <h1
                className={css`
                  margin: 0;
                  height: 154px;
                  position: relative;
                  font-size: var(--header-size);
                  font-weight: 900;
                  font-family: var(--mini-header);
                  display: inline-block;
                  z-index: 2;
                  @media screen and (max-width: 1050px) {
                    font-size: var(--font-size-32xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-19xl);
                  }
                `}
              >
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  IBRAHIM BABAJIDE
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  OBANIKORO
                </p>
              </h1>
              <button
                className={css`
                  cursor: pointer;
                  border: none;
                  padding: var(--padding-lgi) var(--padding-13xl)
                    var(--padding-lgi) var(--padding-18xl);
                  background-color: var(--light-blue);
                  border-radius: var(--br-3xs);
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  white-space: nowrap;
                  z-index: 2;
                  &:hover {
                    background-color: var(--color-darkturquoise-100);
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-size: var(--paragraph-semibold-size);
                    font-weight: 600;
                    font-family: var(--mini-header);
                    color: var(--dark-blue);
                    text-align: left;
                  `}
                >
                  View More
                </div>
              </button>
            </div>
            <img
              className={css`
                width: 79px;
                height: 18.9px;
                position: absolute;
                margin: 0 !important;
                bottom: 0.1px;
                left: 20px;
                z-index: 2;
              `}
              loading="eager"
              alt=""
              src="/group-5.svg"
            />
          </div>
        </div>
        <img
          className={css`
            height: 749px;
            flex: 1;
            position: relative;
            max-width: 100%;
            overflow: hidden;
            object-fit: cover;
            min-width: 487px;
            z-index: 2;
            @media screen and (max-width: 750px) {
              min-width: 100%;
            }
          `}
          loading="eager"
          alt=""
          src="/image-9@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
