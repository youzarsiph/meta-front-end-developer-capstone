import React from "react";
import Badge from "./badge";
import styles from "../styles/components/Alert.module.css";

interface Props {
  label: string;
  color?: "green" | "yellow";
  children?: React.ReactNode | React.ReactNode[];
}

interface State {
  visible?: boolean;
}

export default class Alert extends React.Component<Props, State> {
  private style: string = styles.container;

  constructor(props: Props) {
    super(props);

    // Bind toggle
    this.toggleVisible = this.toggleVisible.bind(this);

    // State
    this.state = {
      visible: true,
    };

    if (props.color === "yellow") {
      this.style += ` ${styles.yellow}`;
    } else {
      this.style += ` ${styles.green}`;
    }
  }

  toggleVisible() {
    this.setState({ visible: !this.state.visible });
  }

  render(): React.ReactNode {
    return (
      <div
        role={"alert"}
        className={`${this.style} ${
          this.state.visible ? "" : styles.invisible
        }`}
      >
        <Badge color={this.props.color}>{this.props.label}</Badge>
        <p className={styles.text}>{this.props.children}</p>
        <button
          type="button"
          className={styles.btn}
          onClick={this.toggleVisible}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-lime-900 dark:text-lime-600"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    );
  }
}
