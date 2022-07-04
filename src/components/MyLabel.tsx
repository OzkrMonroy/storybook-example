import "./myLabel.css";

interface Props {
  /**
   * This property set the text to display
   */
  label: string;
  /**
   * This property set the size of the element
   */
  size: "normal" | "h1" | "h2" | "h3";
}

export const MyLabel = ({
  label = "Default label",
  size = "normal",
}: Props) => {
  return <span className={`${size}`}>{label}</span>;
};
