import Head from "next/head";
import Image from "next/image";
import { Header } from "../src/components/atoms/header";
import { Footer } from "../src/components/atoms/footer";
import { GridSlider } from "../src/components/atoms/grid-slider";
import { Card } from "../src/components/atoms/card";
import downArrow from "../public/image/arrow-down.svg";
import rightArrow from "../public/image/arrow-forward.svg";
import buyHome from "../public/image/card/buy_home.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basnus</title>
        <meta
          name="description"
          content="Saerch house, flat, rooms, lands etc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="row">
        <div className="col">
          <Card
            imgSrc={buyHome.src}
            title={"title"}
            content={"adasdasdasdasd"}
          />
        </div>
        <div className="col">
          <Card
            imgSrc={buyHome.src}
            title={"title"}
            content={"adasdasdasdasd"}
          />
        </div>
        <div className="col">
          <Card
            imgSrc={buyHome.src}
            title={"title"}
            content={"adasdasdasdasd"}
          />
        </div>
      </div>

      <GridSlider
        downArrowPath={downArrow.src}
        rightArrowPath={rightArrow.src}
      />
      <Footer />
    </>
  );
}
