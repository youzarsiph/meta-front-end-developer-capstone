import React from "react";
import styles from "../styles/components/Badge.module.css";

interface Props {
  color?: "green" | "yellow";
  children?: React.ReactNode | React.ReactNode[];
}

export default class Badge extends React.Component<Props> {
  private style: string = styles.badge;

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
      <strong className={this.style} role={"status"}>
        {this.props.children}
      </strong>
    );
  }
}
