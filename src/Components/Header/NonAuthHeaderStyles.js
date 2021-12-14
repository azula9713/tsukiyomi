import styled from "styled-components";

const NonAuthNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  /* If color needed */
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

const NonAuthLogin = styled.a`
  cursor: pointer;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.42px;
  /* border: 1px solid #fff; */
  border-radius: 4px;
  transition: all 0.3s ease 0s;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #fff;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
    /* text-decoration: underline;
    color: white;
    border-color: transparent; */
  }
`;

export { NonAuthNav, NonAuthLogin };
