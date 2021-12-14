import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  /* If color needed */
  background-color: #040714;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

const Logo = styled.div`
  padding: 0;
  margin-top: 4px;
  width: 160px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 20px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 25px;
      min-width: 25px;
      width: 25px;
      z-index: auto;
    }
    span {
      color: white;
      font-size: 20px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      margin-left: 5px;

      &:before {
        background-color: white;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        opacity: 1;
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDownMenu = styled.div`
  /* display: none; */
  opacity: 0;
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
`;

const Logout = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    ${DropDownMenu} {
      display: block;
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export { Nav, NavMenu, Logo, UserImg, Logout, DropDownMenu };
