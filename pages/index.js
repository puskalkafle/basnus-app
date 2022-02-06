import Head from "next/head";
import { Header } from "../src/components/atoms/header";
import { Footer } from "../src/components/atoms/footer";
import { GridSlider } from "../src/components/atoms/grid-slider";
import { Card } from "../src/components/atoms/card";
import Container from "../src/components/common/Container";
import downArrow from "../public/image/arrow-down.svg";
import rightArrow from "../public/image/arrow-forward.svg";
import buyHome from "../public/image/card/buy_home.svg";
import iconFacebook from "../public/image/social-media/facebook.svg";

let socialMedias = [
  { name: "Facebook", link: "#test", image: iconFacebook.src },
  { name: "Facebook", link: "#test", image: iconFacebook.src },
  { name: "Facebook", link: "#test", image: iconFacebook.src },
];
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
      <Container>
        <h5 className="h2 bn-space-xxl-top bn-space-xl-bottom title-light">
          GETTING STARTED
        </h5>
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
      </Container>

      <GridSlider downArrowPath={downArrow.src} rightArrowPath={rightArrow.src}>
        <h5 className="h2 bn-space-xxl-top bn-space-xl-bottom title-light">
          GETTING STARTED
        </h5>
      </GridSlider>
      <Footer className="bn-space-xxl-top" socialMedias={[...socialMedias]} />
    </>
  );
}
