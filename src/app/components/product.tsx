import Image from "next/image";
import styles from "../styles/body.module.css";
import ArrowRightIcon from "../assets/icons/arrowRightIcon";
import ArrowLeftIcon from "../assets/icons/arrowLeftIcon";
import ProductDescription from "./productDescription";

export default function Product() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImages}>
        <div className={styles.imageOptions}>
          <div className={styles.carrouselArrowLeft}>
            <ArrowLeftIcon />
          </div>
          <div className={styles.optionsWrapper}>
            <Image
              src="/images/mainImageTv.png"
              width={128}
              height={67}
              alt="Main image Tv"
            />
          </div>
          <div className={styles.optionsWrapper}>
            <Image
              src="/images/imageTv2.png"
              width={128}
              height={67}
              alt="imageTv2"
              style={{width:"100%",height:"auto"}}
            />
          </div>
          <div className={styles.optionsWrapper}>
            <Image
              src="/images/imageTv3.png"
              width={128}
              height={67}
              alt="imageTv3"
              style={{width:"100%",height:"auto"}}
            />
          </div>
          <div className={styles.optionsWrapper}>
            <Image
              src="/images/imageTv4.png"
              width={128}
              height={67}
              alt="imageTv4"
              style={{width:"100%",height:"auto"}}
            />
          </div>
          <div className={styles.carrouselArrow}>
            <ArrowRightIcon />
          </div>
        </div>
        <div className={styles.mainImage}>
          <img
            src="/images/mainImageTv.png"
            alt="Main image Tv"
          />
        </div>
      </div>
      <ProductDescription />
    </div>
  );
}
