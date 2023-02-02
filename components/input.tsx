import React from "react";
import styles from "../styles/components/Input.module.css";

interface Props {
  id?: string;
  min?: number;
  max?: number;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string | number;
  children?: React.ReactNode | React.ReactNode[];
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | "select";
}

interface State {
  disabled?: boolean;
  value?: string | number;
}

export default class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Bind onChange
    this.onChange = this.onChange.bind(this);

    // State
    this.state = {
      value: this.props.value || "",
      disabled: this.props.disabled || false,
    };
  }

  onChange(event: { target: { value: any } }) {
    this.setState({ ...this.state, value: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <label htmlFor={this.props.id}>
          <div className={styles.label}>{this.props.label}</div>
          {this.props.type !== "select" ? (
            <input
              id={this.props.id}
              min={this.props.min}
              max={this.props.max}
              name={this.props.name}
              type={this.props.type}
              value={this.state.value}
              onChange={this.onChange}
              className={styles.input}
              required={this.props.required}
              disabled={this.state.disabled}
              placeholder={this.props.placeholder}
            />
          ) : (
            <select
              id={this.props.id}
              name={this.props.name}
              onChange={this.onChange}
              className={styles.input}
              required={this.props.required}
              disabled={this.state.disabled}
            >
              <option value="0">Select an option</option>
              {this.props.children}
            </select>
          )}
        </label>
      </div>
    );
  }
}
