import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface buttonStyle {
  link: string;
  btntop: string;
  btnbot: string;
}

const DownloadButton = ({ link, btntop, btnbot }: buttonStyle) => {
  return (
    <StyleButton to={link} rel="noopener noreferrer" target="_blank">
      {/* <div className="btn-outer">
        <div className="btn-mask btn-top">
          <div className="btn-text">{btntop}</div>
        </div>
        <div className="btn-mask btn-bottom">
          <div className="btn-text">{btnbot}</div>
        </div>
      </div> */}

      <div className="btn-text btntop">
        <span>{btntop}</span>
      </div>
      <div className="btn-text btnbot">
        <span>{btnbot}</span>
      </div>
    </StyleButton>
  );
};

const StyleButton = styled(Link)`
  font-weight: 400;
  cursor: pointer;
  position: relative;
  .btn-text {
    transition: 0.2s;
    font-size: 12px;
    line-height: 12px;
  }
  .btntop {
    overflow: hidden;
    position: absolute;
    z-index: 10;
    background-color: #2a2a2a;
    color: #f0f0f0;
    padding: 7px 0 6px 10px;
    border-radius: 999px;
    width: 110px; //사이즈가변
  }
  .btnbot {
    position: absolute;
    z-index: 5;
    background-color: #ccc4b9;
    justify-content: flex-start;
    padding: 7px 0 6px 10px;
    border-radius: 999px;
    width: 110px; //위에랑 맞출것
  }
  :hover {
    .btntop {
      width: 4px;
      height: 1px;
      overflow: hidden;
      transform: translate(8px, 6px);
      span {
        visibility: hidden;
      }
    }
    .btnbot {
      padding-left: 28px;
      width: 90px;
    }
  }
  /* .btn-outer {
    cursor: pointer;
    position: relative;
    .btn-mask {
      transition: 0.35s;
      position: absolute;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .btn-text {
        font-size: 12px;
      }
      height: 10px;
    }
    .btn-mask.btn-top {
      z-index: 30;
      background-color: #2a2a2a;
      color: #f0f0f0;
      border-radius: 999px;
      overflow: hidden;
      width: 130px;
      padding: 7px 0;
      padding-left: 10px;
    }
    .btn-mask.btn-bottom {
      transition: 0.5s;
      align-items: flex-start;
      background-color: #ccc4b9;
      justify-content: flex-start;
      padding: 7px 10px;
      padding-left: 5px;
      display: flex;
      border-radius: 999px;
      overflow: hidden;
      .btn-text {
        display: none;
      }
    }
    :hover {
      transition: 0.5s;
      .btn-mask.btn-top {
        width: 12px;
        padding: 1px 0;
        overflow: hidden;
        transform: translate(8px, 55%);
        .btn-text {
          visibility: hidden;
          transform: translateY(-50%);
        }
      }
      .btn-mask.btn-bottom {
        height: 10px;
        padding: 7px 30px;
        padding-left: 25px;
        .btn-text {
          display: block;
        }
      }
    }
  } */
`;

export default DownloadButton;
