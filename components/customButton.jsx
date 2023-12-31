"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import ReplyIcon from "@mui/icons-material/Reply";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";

export function AromaEventzButton(props) {
  return (
    <Link href={props.href || "/login"}>
      <button
        className={`font-bold max-w-xs rounded-full text-lg py-2 px-4 hover:bg-black ${
          props.style ? props.style : "bg-primary text-white"
        }`}
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
    </Link>

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
    <Link href="/contact">
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
    </Link>
  );
}

export function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Aroma Events",
          text: "Complete Bengali Event Management Services- Decoration, Venue and Catering Services for your wedding, reception, or any other event in Kolkata.",
          url: "https://aromaeventz.com",
        });
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      console.log("Web Share not supported. Implement fallback here.");
    }
  };
  return (
    <IconButton aria-label="email" size="large" onClick={handleShare}>
      <ReplyIcon fontSize="inherit" className="scale-x-[-1]" />
    </IconButton>
  );
}
export default function CustomButton(props) {
  return (
    <Link href={props.href ?? "/login"}>
      <button
        className={`text-black bg-white font-bold hover:bg-transparent hover:text-white rounded-sm + ${
          props.display ? props.display : "block"
        }`}
        style={{
          padding: props.padding || "5px 20px",
        }}
      >
        {props.label}
      </button>
    </Link>
  );
}

export function BackButton() {
  return (
    <button
      className="px-6 py-1 m-5 border border-gray-800 rounded-md"
      onClick={() => history.back()}
    >
      Back
    </button>
  );
}
export function ContinueButton() {
  const history = useRouter();
  return (
    <button
      className="px-6 py-1 m-5 rounded-md bg-primary text-white font-bold"
      onClick={() => history.push('/dashboard/venue1')}
    >
      Continue
    </button>
  );
}
