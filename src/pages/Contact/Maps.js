import React from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import locater from "../../ProjectImages/gps.png";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import ContactUsText from "../../Config/ContactUs";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: locater,
  iconSize: [60, 60],
});

const Maps = () => {
  // const position = {

  //     [16.47872, 80.69845],
  //     [17.46297, 78.47467],
  //   ],
  // };

  const position = [
    {
      name: "Registered Office",
      location: [17.46297, 78.47467],
      Address: ContactUsText.Address,
    },
    {
      name: "Branch Office",
      location: [16.47872, 80.69845],
      Address: ContactUsText.Address2,
    },
  ];

  return (
    <MapContainer
      center={[17.020845, 79.58656]}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {position.map((item) => (
        <Marker position={item.location} icon={customIcon}>
          <Popup>
            <strong>{item.name}</strong>
            <p>Address: {item.Address}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
