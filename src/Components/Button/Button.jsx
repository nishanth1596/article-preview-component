function Button({ handleActive, shareIconImg, type }) {
  const base = "flex items-center justify-center rounded-full p-2.5";

  const styles = {
    primary: {
      className: base + "  bg-[#ecf2f8]",
      fill: "#6E8098",
    },

    secondary: {
      className:
        base + " bg-[#638098] ease-linear animate-bounce" + " lg:hidden",
      fill: "#FFF",
    },
  };

  return (
    <button
      onClick={handleActive}
      className={styles[type].className}
      style={{ animationDelay: ".5s" }}
      aria-label="Share"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
        <path
          fill={styles[type].fill}
          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
        />
      </svg>
    </button>
  );
}

export default Button;
