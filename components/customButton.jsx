"use client";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { primaryColor } from "@/consts";

export function AromaEventzButton(props) {
  return (
    <button
      className={`font-bold max-w-xs rounded-full text-lg py-2 px-4 hover:bg-black ${
        props.backgroundColor ? "bg-[props.backgroundColor]" : "bg-primary"
      } ${props.color ? "text-[props.color]" : "text-white"}`}
    >
      {props.label || "Go To Aroma Events"}
      <span className="ml-2 inline-block align-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14m-7-7l7 7-7 7"
          />
        </svg>
      </span>
    </button>

    // <Button
    //   variant="contained"
    //   endIcon={<ArrowForwardIcon />}
    //   sx={{
    //     color: props.color??"white",
    //     backgroundColor: props.backgroundColor??primaryColor,
    //     fontWeight: "bold",
    //     maxWidth: 350,
    //     borderRadius: 5,
    //     fontSize: 16,
    //     padding: "10px 20px",
    //     ":hover": {
    //       borderColor: "blanchedalmond",
    //       backgroundColor: "blanchedalmond",
    //       color: "deeppink",
    //     },
    //   }}
    // >
    //   {props.label??'Go To Aroma Events'}
    // </Button>
  );
}
export function ContactAromaButton() {
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
    <button
      className={`text-black bg-white font-bold m-2 hover:bg-transparent hover:text-white rounded-sm + ${
        props.display ? props.display : "block"
      }`}
      style={{
        padding: props.padding || "5px 20px",
      }}
    >
      {props.label}
    </button>
  );
}
