import React from "react";
import Badge from "./badge";
import Link from "next/link";
import Button from "./button";
import Image from "next/image";
import styles from "../styles/components/Header.module.css";

const Cart = () => {
  const items = [
    { name: "Lemon dessert", url: "Lemon_dessert.jpg", price: 15 },
    { name: "Bruschetta", url: "Bruschetta.jpg", price: 10 },
    { name: "Kebab", url: "Grill_B.jpg", price: 30 },
    { name: "Pasta", url: "pasta.jpg", price: 10 },
  ];

  return (
    <div className={styles.cart}>
      <div className="prose">
        <h2 className="text-lime-800 dark:text-lime-600">Items in Cart</h2>
      </div>
      <ul className={styles.cartMenu}>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <div className={styles.cartItem}>
                <Image
                  width={100}
                  height={100}
                  alt={item.name}
                  className={styles.cartImg}
                  src={`/img/items/${item.url}`}
                />
                <div className={styles.cartBody}>
                  <h2 className={styles.cartTitle}>{item.name}</h2>
                  <Badge>${item.price}</Badge>
                  <Button color="yellow">Remove</Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Dropdown = () => {
  return (
    <div className={`${styles.cart} ${styles.maxWidthXs}`}>
      <Image
        width={100}
        height={100}
        alt={"Profile Picture"}
        className={styles.cartImg}
        src={"/profile.png"}
      />
      <div className="prose text-center">
        <p className="text-lime-800 dark:text-lime-700">
          Developed and Designed by
        </p>
        <h2 className="mt-0 tracking-wide text-lime-700 dark:text-lime-600">
          Yousef Abu Shanab
        </h2>
        <small className="text-lime-800 dark:text-lime-700">
          &copy; All Rights Reserved
        </small>
      </div>
    </div>
  );
};

interface Props {}

interface State {
  open?: boolean;
  cartOpen?: boolean;
  dropdownOpen?: boolean;
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Bind onChange
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);

    // State
    this.state = {
      open: false,
      cartOpen: false,
      dropdownOpen: false,
    };
  }

  toggleMenu() {
    this.setState({ ...this.state, open: !this.state.open });
  }

  toggleCart() {
    this.setState({ ...this.state, cartOpen: !this.state.cartOpen });
  }

  toggleDropdown() {
    this.setState({ ...this.state, dropdownOpen: !this.state.dropdownOpen });
  }

  render(): React.ReactNode {
    return (
      <header className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.header}>
            <button
              className={`${styles.btn} ${styles.lgHidden}`}
              onClick={this.toggleMenu}
            >
              {this.state.open ? (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-lime-900 dark:text-white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-lime-900 dark:text-white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
            <h1 className="text-xl">
              <Link href={"/"}>
                <strong className="text-lime-600">Little</strong>
                <strong className="text-yellow-400">Lemon</strong>
              </Link>
            </h1>
            <div className="flex items-center gap-4 lg:hidden">
              <button className={styles.btn} onClick={this.toggleCart}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-lime-900 dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
              <button
                onClick={this.toggleDropdown}
                className={`${styles.btn} ${styles.avatar}`}
              >
                Y
              </button>
            </div>
          </div>
          <ul
            className={`${styles.menu} ${this.state.open ? styles.open : ""}`}
          >
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
              <Link href={"/booking"}>Booking</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <button className={styles.btn} onClick={this.toggleCart}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-lime-900 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <button
            onClick={this.toggleDropdown}
            className={`${styles.btn} ${styles.avatar}`}
          >
            Y
          </button>
        </div>
        {this.state.cartOpen && <Cart />}
        {this.state.dropdownOpen && <Dropdown />}
      </header>
    );
  }
}
