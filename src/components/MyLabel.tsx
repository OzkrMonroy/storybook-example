import "./myLabel.css";

interface Props {
  /**
   * This property set the text to display
   */
  label: string;
  /**
   * This property set the element size, by default normal is selected.
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * This property set the element color. By default primary is selected.
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * This property set if the label will be displayed with uppercase option, by default is false.
   */
  allCaps?: boolean;
}

export const MyLabel = ({
  label = "Default label",
  size = "normal",
  color = "primary",
  allCaps = false,
}: Props) => {
  return (
    <span className={`label ${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
