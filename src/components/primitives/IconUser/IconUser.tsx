import "./IconUser.css"

function IconUser({ fillColor }: {fillColor?: "red" | "white"}) {
  return (
    <div className="iconContainer">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path
          className={fillColor === "red" ? "redFill" : "whiteFill"}
          id="especs_logo"
          fillRule="evenodd"
          d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5 7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

export default IconUser;