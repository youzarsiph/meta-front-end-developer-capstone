import React from "react";
import styles from "../styles/components/Button.module.css";

interface Props {
  color?: "green" | "yellow";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode | React.ReactNode[];
}

export default class Button extends React.Component<Props> {
  private style: string = styles.btn;

  constructor(props: Props) {
    super(props);

    if (props.color === "yellow") {
      this.style += ` ${styles.yellow}`;
    } else {
      this.style += ` ${styles.green}`;
    }
  }

  render(): React.ReactNode {
    return (
      <button type={this.props.type || "button"} className={this.style}>
        {this.props.children}
      </button>
    );
  }
}
