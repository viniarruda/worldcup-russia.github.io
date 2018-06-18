import React from 'react';
import styled from 'styled-components';
import Fifa from '../../../assets/images/cup.jpg'

const Match = styled.div`
  margin: 15px;
  flex: 1;
  text-align: center;
  background: linear-gradient(127deg, rgba(172,218,215,.8), rgba(172,218,215,0) 70.71%),
              linear-gradient(217deg, rgba(167,219,216,.8), rgba(167,219,216,0) 70.71%),
              linear-gradient(336deg, rgba(72,149,143),.8), rgba(72,149,143),0) 70.71%);
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  min-width: 300px;
  height: auto;
  background-color: #A7DBD8;
  box-shadow: 0px 10px 12px rgba(0,0,0,0.2);
  color: #fff;
  position: relative;
`;

export default Match