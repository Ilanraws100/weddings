'use client';
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { primaryColor } from "@/consts";

export function AromaEventzButton(props){
  return (
    <Button
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      sx={{
        color: props.color??"white",
        backgroundColor: props.backgroundColor??primaryColor,
        fontWeight: "bold",
        maxWidth: 350,
        borderRadius: 5,
        fontSize: 16,
        padding: "10px 20px",
        ":hover": {
          borderColor: "blanchedalmond",
          backgroundColor: "blanchedalmond",
          color: "deeppink",
        },
      }}
    >
      {props.label??'Go To Aroma Events'}
    </Button>
  );
}
export function ContactAromaButton(){
  return (
    <Button
      variant="outlined"
      sx={{
        color: "black",
        borderColor: "black",
        fontWeight: "bold",
        borderRadius: 5,
        padding: "10px 20px",
        ":hover": {
          borderColor: "blanchedalmond",
          backgroundColor: "blanchedalmond",
          color: "deeppink",
        },
      }}
    >
      Contact Aroma
    </Button>
  );
}
export default function CustomButton(props) {
  return (
    <Button
      sx={{
        color: "black",
        backgroundColor: "white",
        variant: "contained",
        padding: props.padding || "5px 20px",
        fontWeight: "bold",
        margin: "10px",
        ":hover": {
          color: "white",
        },
      }}
    >
      {props.label}
    </Button>
  );
}