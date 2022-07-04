import { useMemo } from "react";

const getColorKor = (color) => {
  console.log("getColorKor");
  switch (color) {
    case "red":
      return "빨강";
    case "orange":
      return "주황";
    case "yellow":
      return "노랑";
    case "green":
      return "초록";
    case "blue":
      return "파랑";
    case "navy":
      return "남";
    case "purple":
      return "보라";
    default:
      return "레인보우";
  }
};

const getMovieGenreKor = (movie) => {
  console.log("getMovieGenreKor");
  switch (movie) {
    case "Marriage Story":
      return "드라마";
    case "The Fast And The Furious":
      return "액션";
    case "Avengers":
      return "슈퍼히어로";
    default:
      return "아직 잘 모름";
  }
};

const Info = ({ color, movie }) => {
  //useMemo를 안 쓸 때에는 하나만 변경되도 두 함수가 다 변경됐었다.
  //useMemo를 쓰면 두 함수가 다 변경되지 않고 []안의 값이 변할 때에만
  // colorKor,movieGenreKor가 변한다
  const colorKor = useMemo(() => getColorKor(color), [color]);
  const movieGenreKor = useMemo(() => getMovieGenreKor(movie), [movie]);

  return (
    <div className="info-wrapper">
      제가 가장 좋아하는 색은 {colorKor} 이고, <br />
      즐겨보는 영화 장르는 {movieGenreKor} 입니다.
    </div>
  );
};

export default Info;
