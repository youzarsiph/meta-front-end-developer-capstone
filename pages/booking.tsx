import React from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import Input from "../components/input";
import Alert from "../components/alert";
import Button from "../components/button";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function Booking() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* HTML Meta Tags */}
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Little Lemon | Reserve a table</title>
        <meta
          name="description"
          content="Capstone project for Meta Front-End Developer professional certificate"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://littleleomn.com" />
        <meta property="og:title" content="Little Lemon | Reserve a table" />
        <meta
          property="og:image"
          content="https://littleleomn.com/banner.png"
        />
        <meta
          property="og:description"
          content="Capstone project for Meta Front-End Developer professional certificate"
        />

        {/*  Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="littleleomn.com" />
        <meta property="twitter:url" content="https://littleleomn.com" />
        <meta name="twitter:title" content="Little Lemon | Reserve a table" />
        <meta
          name="twitter:image"
          content="https://littleleomn.com/banner.png"
        />
        <meta
          name="twitter:description"
          content="Capstone project for Meta Front-End Developer professional certificate"
        />
      </Head>

      <Header />
      <div className={styles.container}>
        <main className={"prose max-w-full lg:prose-lg"}>
          <Hero />
          <h1 className="text-lime-700 dark:text-lime-600">Reserve a Table</h1>
          {show && <Alert label="Success">Reservation Complete!</Alert>}
          <div className="grid gap-8 lg:grid-cols-2">
            <form
              method="post"
              onSubmit={(event) => {
                event.preventDefault();
                setShow(!show);
              }}
            >
              <Input required name="date" label="Booking Date" type="date" />
              <Input required name="time" label="Booking Time" type="time" />
              <Input
                required
                name="number"
                label="Number of Guests"
                type="number"
                min={1}
                max={10}
                placeholder="Enter the number of guests"
              />
              <Input required name="time" label="Occasion" type="select">
                <option value="1">Birthday</option>
                <option value="2">Anniversary</option>
              </Input>
              <Button color="yellow" type="submit">
                Make Your Reservation
              </Button>
            </form>
            <figure>
              <Image
                width={100}
                height={100}
                className={styles.img}
                src={"/img/restaurant_inside.jpg"}
                alt={"Inside the restaurant"}
              />
              <figcaption className="text-center">
                Inside Little Lemon Restaurant
              </figcaption>
            </figure>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
