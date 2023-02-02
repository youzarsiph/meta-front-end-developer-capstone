import React from "react";
import Link from "next/link";
import styles from "../styles/components/Footer.module.css";

export default class Footer extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="prose max-w-full p-4 lg:prose-lg">
        <footer className={styles.container}>
          <div>
            <h1 className="tracking-wide">
              <strong className="text-lime-600">Little</strong>
              <strong className="text-yellow-400">Lemon</strong>
            </h1>
            <p className="font-bold tracking-wide text-lime-900 dark:text-lime-700">
              Your Local Mediterranean Bistro
            </p>
          </div>
          <div className="not-prose mb-4">
            <ul className={styles.menu}>
              <li className={styles.item}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.item}>
                <Link href={"/about"}>About</Link>
              </li>
              <li className={styles.item}>
                <Link href={"/menu"}>Menu</Link>
              </li>
              <li className={styles.item}>
                <Link href={"/booking"}>Book</Link>
              </li>
            </ul>
          </div>
          <small className="text-lime-700 text-center">
            &copy; All Rights Reserved, Little Lemon 2023
          </small>
        </footer>
      </div>
    );
  }
}
