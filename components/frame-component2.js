import { css } from "@emotion/css";

const FrameComponent2 = () => {
  return (
    <header
      className={css`
        align-self: stretch;
        background-color: var(--white);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: var(--padding-10xl) var(--padding-59xl) var(--padding-10xl)
          var(--padding-57xl);
        box-sizing: border-box;
        top: 0;
        z-index: 99;
        position: sticky;
        max-width: 100%;
        text-align: left;
        font-size: var(--paragraph-semibold-size);
        color: var(--dark-blue);
        font-family: var(--mini-header);
        @media screen and (max-width: 750px) {
          padding-left: var(--padding-19xl);
          padding-right: var(--padding-20xl);
          box-sizing: border-box;
        }
      `}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: var(--gap-xl);
          max-width: 100%;
        `}
      >
        <img
          className={css`
            height: 63px;
            width: 63px;
            position: relative;
            object-fit: cover;
          `}
          loading="eager"
          alt=""
          src="/image-1@2x.png"
        />
        <div
          className={css`
            width: 1044px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-13xl);
            max-width: 100%;
            @media screen and (max-width: 1200px) {
              display: none;
            }
            @media screen and (max-width: 750px) {
              gap: var(--gap-13xl);
            }
          `}
        >
          <div
            className={css`
              height: 27px;
              position: relative;
              font-weight: 600;
              display: inline-block;
            `}
          >
            Home
          </div>
          <div
            className={css`
              height: 27px;
              position: relative;
              display: inline-block;
              white-space: nowrap;
            `}
          >
            The Man
          </div>
          <div
            className={css`
              position: relative;
              white-space: nowrap;
            `}
          >
            The Agenda
          </div>
          <div
            className={css`
              height: 27px;
              flex: 1;
              position: relative;
              display: inline-block;
              white-space: nowrap;
            `}
          >{`Bills & Motions`}</div>
          <div
            className={css`
              position: relative;
              white-space: nowrap;
            `}
          >
            Photo Gallery
          </div>
          <div
            className={css`
              height: 27px;
              flex: 1;
              position: relative;
              display: inline-block;
              white-space: nowrap;
            `}
          >
            Press Releases
          </div>
          <div
            className={css`
              height: 27px;
              position: relative;
              display: inline-block;
              white-space: nowrap;
            `}
          >
            Contact ibo
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
