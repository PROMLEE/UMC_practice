import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Weather() {
  const [city, setcity] = useState("");
  const [data, setdata] = useState(null);
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c57053b6a048368d602a4987f58969a`;

  async function searchWeather() {
    try {
      const api = await axios.get(url);
      setdata(api.data);
      console.log(api.data);
    } catch (err) {
      console.error(`error: ${err}`);
      setdata(null);
    }
  }

  const onChange = (e) => {
    setcity(e.target.value);
  };

  const search = async (e) => {
    console.log(city);
    if (e.key === "Enter") {
      await searchWeather();
    }
  };

  return (
    <Form>
      <Inputform
        onChange={onChange}
        onKeyDown={search}
        placeholder="도시를 입력하세요"
      />
      {data && (
        <Weatherform>
          <City>{data.name}</City>
          <Temp>{Math.round((data.main.temp - 273.15) * 10) / 10}℃</Temp>
          <Weatherimg
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt=""
          />
          <Weatherinfo>{data.weather[0].description}</Weatherinfo>
        </Weatherform>
      )}
    </Form>
  );
}

const Form = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Inputform = styled.input`
  padding-left: 20px;
  font-size: 15px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
`;
const Weatherform = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 40px;
  width: 130px;
  border: solid 1px;
  border-radius: 5px;
`;
const City = styled.div`
  font-size: 20px;
`;
const Temp = styled.div`
  margin-top: 10px;
  font-size: 40px;
`;
const Weatherimg = styled.img`
  margin-top: 10px;
  font-size: 50px;
`;
const Weatherinfo = styled.div`
  margin-top: 10px;
  font-size: 20px;
  margin-left: auto;
`;
