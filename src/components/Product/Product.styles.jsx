import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  width: 500px;
  height: 50vh;
  min-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  border-radius: 10px;
  position: relative;

  &:hover ${".info"} {
    opacity: 1;
  }

  .image {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .image img {
    height: 70%;
    width: 70%;
    max-width: 300px;
  }
  .circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
  }

  .info {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease 0.5s;
    border-radius: 10px;
  }
  .info .icons {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all ease-in-out 0.3s;

    &:hover {
      background-color: #ffc8b4;
      transform: scale(1.1);
    }
  }
`;
