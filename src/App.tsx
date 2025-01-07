import { Fragment } from "react";
import { Image } from "./Image.js";
import { RefreshOnFocus } from "./RefreshOnFocus.js";

const Reloader =
  window.location.hostname === "localhost" ? RefreshOnFocus : Fragment;

export const App = () => {
  return (
    <Reloader>
      <div
        style={{
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 400,
          padding: 16,
        }}
      >
        <Image
          alt="Babel Logo"
          aspectRatio="1638 / 744"
          src="./Babel_Logo.svg"
          style={{ display: "block" }}
        />
        <h1 style={{ marginBottom: 0, marginTop: 0, textAlign: "center" }}>
          Babel + JavaScript modules + Preact
        </h1>
      </div>
    </Reloader>
  );
};
