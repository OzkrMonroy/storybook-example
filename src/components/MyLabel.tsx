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
  /**
   * This property let you to set a custom font color.
   */
  fontColor?: string;
  /**
   * This property let you to set the element background.
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "Default label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
