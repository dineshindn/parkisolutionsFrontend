import styled from "styled-components";

export const FormHeading = styled.div`
  h3 {
    font-weight: 500;
    font-size: 24px;
    text-align: left;
    color: #545454;
    line-height: 36px;
  }
  p {
    padding: 0;
    margin-top: -24px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    span {
      color: #f0642f;
    }
  }
`;

export const FormStyle = styled.div`
  .ant-form-item .ant-form-item-label label {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    color: #000000;
  }

  .ant-input-outlined,
  .ant-picker-outlined,
  .ant-select-selector,
  .ant-input-number-input,
  .ant-select-customize-inpu {
    border: 1px solid #545454;
  }

  :where(.css-dev-only-do-not-override-ccdg5a).ant-select-outlined:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    border: 1px solid #545454;
    background: #ffffff;
  }
`;
