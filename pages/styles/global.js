import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--mini-header: Inter;
--font-poppins: Poppins;

/* font sizes */
--font-size-181xl: 200px;
--font-size-31xl: 50px;
--font-size-61xl: 80px;
--mini-header-size: 48px;
--font-size-10xl: 29px;
--font-size-19xl: 38px;
--paragraph-semibold-size: 22px;
--font-size-lg: 18px;
--header-size: 64px;
--font-size-32xl: 51px;
--font-size-13xl: 32px;
--font-size-lgi: 19px;
--font-size-7xl: 26px;

/* Colors */
--white: #fff;
--color-royalblue-100: #0075ff;
--color-royalblue-200: #006ded;
--light-blue: #00d1ed;
--color-darkturquoise-100: #00b8d4;
--dark-blue: #0a3444;
--color-black: #000;

/* Gaps */
--gap-54xl: 73px;
--gap-76xl: 95px;
--gap-119xl: 138px;
--gap-34xl: 53px;
--gap-12xl: 31px;
--gap-xl: 20px;
--gap-13xl: 32px;

/* Paddings */
--padding-13xl: 32px;
--padding-xl: 20px;
--padding-lgi: 19px;
--padding-16xl: 35px;
--padding-5xs: 8px;
--padding-28xl: 47px;
--padding-46xl: 65px;
--padding-18xl: 37px;
--padding-10xl: 29px;
--padding-59xl: 78px;
--padding-57xl: 76px;
--padding-19xl: 38px;
--padding-20xl: 39px;

/* Border radiuses */
--br-3xs: 10px;

}
`;
}
