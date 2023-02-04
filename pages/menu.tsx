import Head from "next/head";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";
import MenuItem from "../components/menuitem";
import styles from "../styles/Home.module.css";

export default function Menu() {
  let menu = [
    { name: "Salad", url: "salad.jpg", price: 5 },
    { name: "Pasta", url: "pasta.jpg", price: 10 },
    { name: "Kebab", url: "Grill_B.jpg", price: 30 },
    { name: "Grilled meat", url: "Grill.jpg", price: 25 },
    { name: "Bruschetta", url: "Bruschetta.jpg", price: 10 },
    { name: "Greek salad", url: "Greek_salad.jpg", price: 7 },
    { name: "Grilled fish", url: "Grilled_fish.jpg", price: 20 },
    { name: "Lemon dessert", url: "Lemon_dessert.jpg", price: 15 },
  ];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* HTML Meta Tags */}
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Little Lemon | Your Local Mediterranean Bistro | Menu</title>
        <meta
          name="description"
          content="Capstone project for Meta Front-End Developer professional certificate"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://littleleomn.com" />
        <meta
          property="og:title"
          content="Little Lemon | Your Local Mediterranean Bistro"
        />
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
        <meta
          name="twitter:title"
          content="Little Lemon | Your Local Mediterranean Bistro"
        />
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
          <section className="pb-4">
            <h1
              data-testid="heading"
              className="text-lime-700 dark:text-lime-600"
            >
              Menu
            </h1>
            <div className="grid gap-4 lg:grid-cols-2">
              {menu.map((item) => {
                return <MenuItem key={item.name} item={item} />;
              })}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
