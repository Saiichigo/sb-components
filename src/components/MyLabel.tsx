import "./mylabel.css";

export interface MyLabelProps {
  /**
   * label
   */
  label: string;
  /**
   * tamaño por defecto normal
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalizar label
   */
  allCaps: boolean;
  /**
   * asignar color al boton o al label
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Color personalizad de la fuenta
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "secondary",
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
