import React from "react";
import Badge from "./badge";
import Button from "./button";
import Image from "next/image";
import styles from "../styles/components/MenuItem.module.css";

interface Props {
  item: {
    name: string;
    price: number;
    url: string;
  };
}

export default class MenuItem extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <div className="not-prose w-full">
          <Image
            width={100}
            height={100}
            alt={this.props.item.name}
            className={styles.img}
            src={`/img/items/${this.props.item.url}`}
          />
        </div>
        <div className={styles.body}>
          <h2 className={styles.title}>{this.props.item.name}</h2>
          <Badge>${this.props.item.price}</Badge>
          <Button>Add To Cart</Button>
        </div>
      </div>
    );
  }
}
