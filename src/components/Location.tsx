import React, {useState} from "react";
import styled from "styled-components";
import Map from 'react-map-gl';

const Location= () => {
    const [viewport, setViewport] = useState({
        longitude: 16.852538,
        latitude: 52.395256,
        zoom: 13.94,
      });
    return (
        <section id="location">
            <LocationContainer>
                <div>
                    <h2>Lokalizacja</h2>
                    <div>
                        <p>
                           Osiedle Ogrody Marysin przy ul. Ludowej znajduje się w cichej i spokojnej miejscowości Marysin (gm. Lesznowola), położonej ok. 20km od centrum Warszawy. Okolica z zabudową domków jednorodzinnych jest otoczona rozległymi terenami zielonymi. Wyróżnia ją dobre połączenie z kluczowymi tarasami. Bardzo szybko dotrzesz do Alei Krakowskiej, która prowadzi do dróg S7 i S8, zapewniających wygodny dojazd do samego serca stolicy.
                        </p>
                    </div>
                </div>
                <div>
                <Map initialViewState={{
                  longitude: viewport.longitude,
                  latitude: viewport.latitude,
                  zoom: viewport.zoom,
                  }} 
                  mapboxAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
                  mapStyle="mapbox://styles/krzysztof77777/cl0cz55v6001p14mlkv5dzyfd" 
                  style={{ width: 600, height: 600 }}
                >
                </Map>
                </div>
            </LocationContainer>
        </section>
    );
};
  
export default Location;

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  position:relative;
  width:100%;
  max-width: 1274px;
  margin: 50px auto;
  padding: 0px 15px;
  &>div:nth-of-type(1) {
    display:flex;
    flex-direction: column;
    justify-content:center;
    position:relative;
    flex-grow:1;
    &> h2 {
      font-weight:700;
      font-size:43px;
      line-height:50px;
      color: #2A4819;
      margin-bottom: 20px;
      padding-left:60px;
    }
    &>div {
        width:100%;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        background: #9AC259;
        padding: 40px 60px;
        &>p {
          font-weight:400;
          font-size:18px;
          line-height:21px;
          color: #ffff;
        }
    }
  }
  & .mapboxgl-ctrl-bottom-right {
    display:none;
  }
`