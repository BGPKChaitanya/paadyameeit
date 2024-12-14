import React, { Suspense, useRef, useState } from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import { useFormik } from "formik";
import ContactUsText from "../../Config/ContactUs";
import Maps from "./Maps";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";
import { RingLoader } from "react-spinners";

const Contact = () => {
  const form = useRef();
  const [load, setLoad] = useState(false);

  const sendEmail = async (e, values) => {
    // EmailJs Login ID: murali@paadyamee.com, Password: 9247836429
    // e.preventDefault();

    try {
      setLoad(true);
      // const result = await emailjs.sendForm(
      //   "service_sbfh4c3", // Service ID
      //   "template_r8t0715", // Template ID
      //   form.current,
      //   "zRxoKoaiKsRiyKPQf" // User ID
      // );

      // EmailJs Login ID: murali@paadyamee.com, Password: 9247836429

      const personalmail = await emailjs
        .sendForm(
          "service_z5bk26w", // Service ID
          "template_0zdppoc", // Template ID
          form.current,
          "qtWgK1hL_ZvmRfnAA" // User ID
        )
        .then((s) => console.log("Success"))
        .catch((err) => console.log("Error: ", err));
      setLoad(false);
      toast.success(
        "Mail sent successfully. Our team will get in touch with you."
      );
      // setEmailStatus("Email sent successfully!");
    } catch (error) {
      // setEmailStatus("Failed to send email. Please try again.");

      toast.error("Failed");
    }
  };

  var formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { setValues }) => {
      sendEmail();
      // Handle form submission here
      setTimeout(() => {
        // Reset the form
        setValues({
          name: "",
          mobile: "",
          email: "",
          message: "",
        });
        // sendEmail(values);
      }, 10000); // Simulated delay for the reset

      // Reset the form after submission
    },
  });

  return (
    <Suspense fallback={<Loading />}>
      <section className="conBox">
        <Box className="conT2">
          <Typography className="contactus">Get in Touch</Typography>
          <Box className="conTssx">
            <Box className="cont1">
              <Maps />
            </Box>
            <Box className="cont2">
              <Typography>{ContactUsText.des1}</Typography>
              <Box sx={{ marginTop: "15px", marginBottom: "15px" }}>
                <Box className="mailBox">
                  <AlternateEmailOutlinedIcon
                    sx={{ color: "#267ea3", marginRight: "15px" }}
                  />
                  <Typography>
                    {ContactUsText.email}, {ContactUsText.personalMail}
                  </Typography>
                </Box>
                <Box className="mailBox">
                  <PhoneOutlinedIcon
                    sx={{ color: "#267ea3", marginRight: "15px" }}
                  />
                  <Typography>{ContactUsText.phone}</Typography>
                </Box>
                {/* <Box className="mailBox">
                <PlaceIcon sx={{ color: "#267ea3", marginRight: "15px" }} />
                <Typography>{ContactUsText.Address}</Typography>
              </Box> */}
              </Box>
              <Divider />
              <Typography
                sx={{ fontWeight: "bold", marginTop: "20px", fontSize: "22px" }}
              >
                Talk to Us:
              </Typography>
              <form ref={form} onSubmit={formik.handleSubmit}>
                <TextField
                  id="outlined-basic"
                  placeholder="Full Name"
                  hiddenLabel
                  name="name"
                  variant="standard"
                  required
                  sx={{ width: "100%", marginTop: "20px" }}
                  size="small"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Email"
                  hiddenLabel
                  name="email"
                  variant="standard"
                  type="email"
                  required
                  sx={{ width: "100%", marginTop: "20px" }}
                  size="small"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <TextField
                  id="outlined-basic"
                  hiddenLabel
                  placeholder="Phone No"
                  name="mobile"
                  variant="standard"
                  required
                  type="number"
                  sx={{ width: "100%", marginTop: "20px" }}
                  size="small"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                />
                <TextField
                  id="outlined-basic"
                  hiddenLabel
                  placeholder="Message"
                  name="message"
                  variant="standard"
                  required
                  multiline
                  rows={4}
                  sx={{ width: "100%", marginTop: "20px" }}
                  size="small"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />

                {load ? (
                  <div
                    style={{
                      margin: "20px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <RingLoader color="#058037" />
                  </div>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      marginTop: "20px",
                      borderRadius: "50px",
                      width: "150px",
                    }}
                  >
                    Submit
                  </Button>
                )}
              </form>
              <ToastContainer />
            </Box>
          </Box>
          <Box className="addCont">
            <Box className="addBox">
              <PlaceIcon
                sx={{ color: "red", fontSize: "50px", marginBottom: "15px" }}
              />
              <Typography sx={{ textAlign: "center" }}>
                <span style={{ fontWeight: "Bold" }}>Registered Office: </span>
                {ContactUsText.Address2}
              </Typography>
            </Box>
            <Box className="addBox">
              <PlaceIcon
                sx={{ color: "Red", fontSize: "50px", marginBottom: "15px" }}
              />
              <Typography sx={{ textAlign: "center" }}>
                <span style={{ fontWeight: "Bold" }}>Branch Office: </span>
                {ContactUsText.Address}
              </Typography>
            </Box>
          </Box>
        </Box>
      </section>
    </Suspense>
  );
};

export default Contact;
