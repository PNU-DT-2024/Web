import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
  return (
    <Map
      center={{ lat: 35.17402959698592, lng: 129.12938121809884 }} // 설정된 위도, 경도
      style={{ width: "450px", height: "320px" }} // 크기
      level={3} // 줌 레벨 설정
    >
      <MapMarker
        position={{ lat: 35.17402959698592, lng: 129.12938121809884 }}
      ></MapMarker>
    </Map>
  );
}

export default KakaoMap;