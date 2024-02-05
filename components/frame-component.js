import { css } from "@emotion/css";

const FrameComponent = () => {
  return (
    <section
      className={css`
        width: 1275px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0px var(--padding-xl);
        box-sizing: border-box;
        gap: var(--gap-119xl);
        max-width: 100%;
        text-align: left;
        font-size: var(--mini-header-size);
        color: var(--dark-blue);
        font-family: var(--mini-header);
        @media screen and (max-width: 1200px) {
          gap: var(--gap-119xl);
        }
        @media screen and (max-width: 1050px) {
          flex-wrap: wrap;
        }
        @media screen and (max-width: 750px) {
          gap: var(--gap-119xl);
        }
        @media screen and (max-width: 450px) {
          gap: var(--gap-119xl);
        }
      `}
    >
      <div
        className={css`
          height: 465px;
          width: 465px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          className={css`
            height: 100%;
            width: 100%;
            max-width: 100%;
            object-fit: contain;
            position: absolute;
            left: 0px;
            top: 0px;
            transform: scale(1.172);
            @media screen and (max-width: 1050px) {
              flex: 1;
            }
          `}
          loading="eager"
          alt=""
          src="/group-36.svg"
        />
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-34xl);
          min-width: 411px;
          max-width: 100%;
          @media screen and (max-width: 750px) {
            gap: var(--gap-34xl);
            min-width: 100%;
          }
        `}
      >
        <div
          className={css`
            height: 139px;
            position: relative;
            display: inline-block;
            max-width: 100%;
            @media screen and (max-width: 1050px) {
              font-size: var(--font-size-19xl);
            }
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-10xl);
            }
          `}
        >
          <p
            className={css`
              margin: 0;
            `}
          >
            <b className={css``}>Let's Make</b>
          </p>
          <p
            className={css`
              margin: 0;
              font-size: var(--header-size);
              font-weight: 900;
            `}
          >
            History Together!
          </p>
        </div>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            font-size: var(--paragraph-semibold-size);
            color: var(--color-black);
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-lg);
            }
          `}
        >
          <p
            className={css`
              margin: 0;
            `}
          >
            Democracy arises out of the notion that those who are equal in any
            respect are equal in all respects; because men are equally free.
          </p>
          <p
            className={css`
              margin: 0;
            `}
          >
            &nbsp;
          </p>
          <p
            className={css`
              margin: 0;
            `}
          >
            We’re working to keep Eti-Osa safe and supported, and to keep
            Eti-Osa moving forward. We’ve made real progress together , there’s
            much more to do.
          </p>
          <p
            className={css`
              margin: 0;
            `}
          >
            &nbsp;
          </p>
          <p
            className={css`
              margin: 0;
            `}
          >
            Get to know more about
          </p>
        </div>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: var(--padding-lgi) var(--padding-16xl);
            background-color: var(--light-blue);
            border-radius: var(--br-3xs);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
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
    </section>
  );
};

export default FrameComponent;
