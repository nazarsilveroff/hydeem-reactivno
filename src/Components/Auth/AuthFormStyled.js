import styled from "styled-components";

export const AuthFormContainer = styled.div`

  font-family: GothamPro-Bold;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  width: inherit;
  .navContainer{
      display: flex;
    justify-content: space-between;
    align-items: center;   
    padding: 18px 15px;
    flex-direction: column;


    @media screen and (min-width: 768px) {
      padding: 17px 87px 19px 69px;
  }
  .authTitle {
 font-family: Gotham Pro;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 13px;
letter-spacing: 0.04em;
text-transform: uppercase;
margin-bottom: 60px;
color: #FC842D;


   
  }
  .form{
      display: flex;
    flex-direction: column;
    align-items: center;
  }
.input{
    border-bottom: 1px solid rgb(224, 224, 224);
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 15px 15px 15px 0px;
    width: 289px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9B9FAA;
    outline: none;
    background-color: white;
}

.button{
    width: 176px;
    height: 44px;
    background: rgb(255, 255, 255);
    border: 2px solid rgb(252, 132, 45);
    box-sizing: border-box;
    border-radius: 30px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: rgb(252, 132, 45);
    outline: none;
        margin-top: 60px;
}
button:hover {
    background: rgb(252, 132, 45);
    color: white;
    box-shadow: rgb(252 132 45 / 50%) 0px 4px 10px;
}

`;
