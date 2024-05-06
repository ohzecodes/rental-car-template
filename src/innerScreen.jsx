import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IdNumber from "./IdNumber";
import TextField from "@mui/material/TextField";
import car from "./assets/car.png";
import dayjs from "dayjs";
import { useState } from "react";
import { config } from "./config";
import { LocalizationProvider } from "@mui/x-date-pickers";
const carImageStyle = {
  width: "120px", 
  marginRight: "20px"
};

const Header = () => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#3d005b",
      color: "#fff"
    }}
  >
    <h1>{process.env.REACT_APP_RENTAL_COMPANY || ""} Rent A Car</h1>
    <img src={car} alt="Car" style={carImageStyle} />
  </header>
);

const Footer = () => (
  <>
    <footer
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: process.env.REACT_APP_INNER_FOOTER_COLOR || "PURPLE",
        color: "#fff"
      }}
    >
      <h2>{config.footer.address}</h2>
      <h3>{config.footer.phoneNumber}</h3>
    </footer>
  </>
);
const InnerScreen = ({ logout }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <div className="noPrint">
        <button
          style={{ margin: 10 }}
          className="btn btn-primary btn-block"
          onClick={() => logout()}
        >
          Log out
        </button>
        <button
          onClick={() => window.print()}
          className="btn-primary btn noPrint"
        >
          Print
        </button>
      </div>
      <div>
        <Header />
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
              width: "95%"
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={"date"}
                views={["year", "month", "day"]}
                value={selectedDate}
                sx={{
                  width: 0.5,
                  marginBottom: "5px"
                }}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
            {["Wage"].map((e, k) => (
              <TextField
                key={k}
                sx={{
                  marginLeft: "5px",
                  width: 0.5
                }}
                id="outlined-basic"
                label={e}
                variant="outlined"
              />
            ))}
          </div>
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
              marginTop: "10px"
            }}
          >
            {["Name", "Phone Number"].map((e, k) => (
              <TextField
                key={k}
                sx={{
                  width: 0.5,
                  marginLeft: "5px"
                }}
                id="outlined-basic"
                label={e}
                variant="outlined"
              />
            ))}
          </div>
          <IdNumber {...config.idField} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "95%",
              marginBottom: "20px"
            }}
          >
            {["Address"].map((e, k) => (
              <TextField
                key={k}
                sx={{ width: 1 }}
                id="outlined-basic"
                label={e}
                variant="outlined"
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default InnerScreen;
