import styled from "styled-components";
import { useState } from "react";
import "@ibm/plex/css/ibm-plex-sans-kr.css";

const MainContainer = styled.div`
  background-image: url("/background.png");
  width: 100vw;
  height: 100vh;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "IBM Plex Sans KR", sans-serif;
  color: white;
`;

const Pickup = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  img {
    position: relative;
    right: 190px;
    height: 100%;
    width: auto;
  }
`;

const StringAndPickup = styled.div`
  height: 90%;

  .description {
    transition: transform 2.5s ease-out;
  }
  .description.active {
    transform: translateY(-10px);
    transition: none;
  }
`;

const StringContainer = styled.div`
  height: 3vh;
  width: 100%;
  /* border: black solid 2px; */

  position: absolute;
  top: ${(props) => 21 + parseInt(props.idx) * 10.5}%;

  img {
    transform: scaleY(0.7);
  }
  .real {
    position: absolute;
    top: 50%;

    width: 100%;
    transition: all 2.5s ease-out;
    /* filter: blur(4px); */
  }
  .real.active {
    top: 50%;
    width: 100%;
    filter: blur(9px);
    transition: none;
  }

  .illusionTop {
    position: absolute;
    top: 50%;
    width: 100%;

    transition: all 2.5s ease-out;
  }
  .illusionTop.active {
    position: absolute;
    top: 20%;
    filter: blur(2.5px);
    transition: none;
  }

  .illusionBottom {
    position: absolute;
    top: 50%;
    width: 100%;

    transition: all 2.5s ease-out;
  }
  .illusionBottom.active {
    position: absolute;
    top: 80%;
    filter: blur(2px);
    transition: none;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  right: calc(${(props) => props.right} + 25vh);

  width: 100%;

  font-size: 4.5vh;
  text-align: right;
`;

const String = ({ idx, stringVib, setstringsVib }) => {
  const setstringVib = (index, newValue) => {
    setstringsVib((prev) =>
      prev.map((item, i) => (i === index ? newValue : item))
    );
  };
  return (
    <StringContainer
      onMouseEnter={() => setstringVib(idx, true)}
      onMouseLeave={() => setstringVib(idx, false)}
      idx={idx}
    >
      <img
        src={`/string${idx + 1}.png`}
        className={`illusionTop ${stringVib ? "active" : ""}`}
      />

      <img
        src={`/string${idx + 1}.png`}
        id="stable"
        className={`real ${stringVib ? "active" : ""}`}
      />

      <img
        src={`/string${idx + 1}.png`}
        id="stable"
        className={`real ${stringVib ? "active" : ""}`}
      />

      <img
        src={`/string${idx + 1}.png`}
        id="stable"
        className={`real ${stringVib ? "active" : ""}`}
      />

      <img
        src={`/string${idx + 1}.png`}
        className={`illusionBottom ${stringVib ? "active" : ""}`}
      />
    </StringContainer>
  );
};
const Main = () => {
  const [stringsVib, setstringsVib] = useState(() => new Array(6).fill(false));

  return (
    <MainContainer>
      <StringAndPickup>
        <Pickup>
          <img src="/pickup.png" />
        </Pickup>
        <TextContainer
          top="16%"
          right="300px"
          className={`description ${stringsVib[0] ? "active" : ""}`}
        >
          2004년5월11일생 강대한
        </TextContainer>

        <TextContainer
          top="26.5%"
          right="330px"
          className={`description ${stringsVib[1] ? "active" : ""}`}
        >
          중앙대학교 소프트웨어학부
        </TextContainer>

        <TextContainer
          top="37%"
          right="360px"
          className={`description ${stringsVib[2] ? "active" : ""}`}
        >
          코딩 잘함
        </TextContainer>

        <TextContainer
          top="47.5%"
          right="390px"
          className={`description ${stringsVib[3] ? "active" : ""}`}
        >
          기타 잘침
        </TextContainer>

        <TextContainer
          top="58%"
          right="420px"
          className={`description ${stringsVib[4] ? "active" : ""}`}
        >
          4개국어임
        </TextContainer>

        <TextContainer
          top="68.5%"
          right="450px"
          className={`description ${stringsVib[5] ? "active" : ""}`}
        >
          미필
        </TextContainer>

        {Array.from({ length: 6 }, (_, idx) => {
          return (
            <String
              idx={idx}
              stringVib={stringsVib[idx]}
              setstringsVib={setstringsVib}
            />
          );
        })}
      </StringAndPickup>
    </MainContainer>
  );
};
export default Main;
