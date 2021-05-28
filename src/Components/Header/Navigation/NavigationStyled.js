import styled from "styled-components";

export const NavigationContainer = styled.header`
  font-family: GothamPro-Bold;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  width: inherit;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e0e0e0;
    padding: 18px 15px;
  }
  .list {
    display: flex;
    justify-content: space-evenly;
    li:not(:last-child) {
      margin-right: 15px;
    }
    .link {
      list-style: none;

      color: #9b9faa;
    }
    .active-link {
      color: #212121;
    }
    .link a {
      text-transform: uppercase;
      text-decoration: none;
      font-family: GothamPro-Bold;
      font-size: 14px;
      line-height: 0.93;
      letter-spacing: 0.04em;
    }
    .userInfo {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 4px 0 4px 15px;
      background-color: #eff1f3;
    }
  }
`;
