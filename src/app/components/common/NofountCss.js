import styled from "styled-components";

export const NofoundStyle = styled.div`
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;

    .not-found-title {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
      font-weight: 600;
    }
    .not-found-text {
      font-size: 16px;
      color: #777;
      .not-found-path {
        font-weight: bold;
        color: #ff0000;
      }
    }

    .goBack {
      margin-top: 25px;
      padding: 0 50px;
    }
  }
`;
