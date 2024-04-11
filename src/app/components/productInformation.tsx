"use client";
import { useState } from "react";
import styles from "../styles/body.module.css";

export default function ProductInformation() {
  const [activeTab, setActiveTab] = useState("Description");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };
  const renderInformation = () => {
    switch (activeTab) {
      case "Specification":
        return (
          <div className={styles.infoContainer}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra aliquet eget sit amet. Aliquet sagittis id consectetur
              purus. Tincidunt praesent semper feugiat nibh sed. Neque gravida
              in fermentum et sollicitudin. Dignissim sodales ut eu sem integer
              vitae justo eget magna. Quam pellentesque nec nam aliquam sem et
              tortor consequat. Eget egestas purus viverra accumsan in nisl nisi
              scelerisque. Dui id ornare arcu odio ut sem nulla pharetra. Ut
              morbi tincidunt augue interdum. Nunc congue nisi vitae suscipit
              tellus mauris a diam. Ultricies lacus sed turpis tincidunt. Id
              cursus metus aliquam eleifend mi in. Lobortis feugiat vivamus at
              augue. Velit euismod in pellentesque massa placerat duis. Eu
              ultrices vitae auctor eu augue. Ipsum consequat nisl vel pretium
              lectus. Non blandit massa enim nec dui. Id porta nibh venenatis
              cras sed.
            </p>
          </div>
        );

      case "Reviews":
        return (
          <div className={styles.infoContainer}>
            <p>
              Accumsan sit amet nulla facilisi morbi. Mattis pellentesque id
              nibh tortor id aliquet. Duis tristique sollicitudin nibh sit amet
              commodo nulla. Tristique et egestas quis ipsum suspendisse. Vel
              turpis nunc eget lorem dolor sed viverra ipsum nunc. Tellus
              pellentesque eu tincidunt tortor. Aliquam ultrices sagittis orci a
              scelerisque purus. Sed pulvinar proin gravida hendrerit lectus a.
              Id faucibus nisl tincidunt eget nullam non nisi. Feugiat vivamus
              at augue eget. Quis hendrerit dolor magna eget est lorem ipsum
              dolor sit. Fames ac turpis egestas sed tempus. Augue lacus viverra
              vitae congue eu. Feugiat in ante metus dictum. Elementum curabitur
              vitae nunc sed velit dignissim sodales.
            </p>
          </div>
        );

      default:
        return (
          <div className={styles.descriptionInfo}>
            <p>
              The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around
              OLED TV we've tested. Although all OLEDs deliver similar fantastic
              picture quality, this one stands out for its value because it has
              many gaming oriented features that are great for gamers.
            </p>
            <p>
              *Only 65G2 is shown in the image for example purposes. All 2022 LG
              OLED models feature eco-friendly packaging.
            </p>
            <p>
              **z65C2 Stand model is at a minimum 39% lighter than the C1
              series.
              <span className="more">More...</span>
            </p>
          </div>
        );
    }
  };
  return (
    <div className={styles.productInfo}>
      <div className={styles.infoTabs}>
        <div
          className={styles.tabItem}
          onClick={() => handleClick("Description")}
        >
          <span>Description</span>
        </div>
        <div
          className={styles.tabItem}
          onClick={() => handleClick("Specification")}
        >
          <span>Specification</span>
        </div>
        <div className={styles.tabItem} onClick={() => handleClick("Reviews")}>
          <span>Reviews</span>
        </div>
      </div>
      <div className="information">{activeTab && renderInformation()}</div>
    </div>
  );
}
