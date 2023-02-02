import React from "react";
import Image from "next/image";
import styles from "../styles/components/Hero.module.css";

export default class Hero extends React.Component {
  render(): React.ReactNode {
    return (
      <section className={styles.container}>
        <div>
          <h1 className="tracking-wide">
            <strong className="text-white">Little</strong>
            <strong className="text-yellow-400">Lemon</strong>
            <sub className="text-white">Chicago</sub>
          </h1>
          <p className="font-medium text-white">
            Little Lemon Your Local Mediterranean Bistro
          </p>
          <p className="text-white">
            Based in Chicago, Illinois, Little Lemon is a family owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist.
          </p>
        </div>
        <div className="not-prose w-full">
          <Image
            width={100}
            height={100}
            className={styles.img}
            src={`/img/restaurant.jpg`}
            alt={"Inside the Restaurant"}
          />
        </div>
      </section>
    );
  }
}
