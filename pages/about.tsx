import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function About() {
  let items = [
    {
      description:
        "Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
      img: "/img/restaurant_inside.jpg",
    },
    {
      description:
        "The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.",
      img: "/img/MarioAndAdrian.jpg",
    },
    {
      description:
        "The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.",
      img: "/img/restaurantFood.jpg",
    },
    {
      description:
        "Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.",
      img: "/img/mario-and-adrian.jpg",
    },
    {
      description:
        "To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.",
      img: "/img/head_chef.jpg",
    },
    {
      description:
        "Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.",
      img: "/img/restaurantChef.jpg",
    },
  ];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* HTML Meta Tags */}
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Little Lemon | About</title>
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
          <h1
            data-testid="heading"
            className="text-lime-700 dark:text-lime-600"
          >
            About Us
          </h1>
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              return (
                <div
                  key={item.img}
                  className="grid gap-4 rounded-xl border-2 border-lime-800 shadow-lg"
                >
                  <div className="not-prose w-full">
                    <Image
                      width={100}
                      height={100}
                      className={styles.img}
                      src={item.img}
                      alt={item.img}
                    />
                  </div>
                  <p className="m-0 p-4 dark:text-white">{item.description}</p>
                </div>
              );
            })}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
