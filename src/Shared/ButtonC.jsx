import Link from "next/link";

const primaryClr = "#fc5d8d";
// OUTLINE - btn btn-outline
const ButtonC = ({ text, type, theme, href }) => {
  return href ? (
    <Link className="p-2" href={href}>
      <button
        className={`btn ${type} `}
        style={{ "--primary-color": primaryClr }}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={`btn ${type} `}
      style={{ "--primary-color": primaryClr }}
    >
      {text}
    </button>
  );
};

export default ButtonC;
