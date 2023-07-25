import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css";
import Image from "next/image";

const Latest = ({ id, date, title, genre, index, thumbnail }) => {
  return (
    index < 5 && (
      <li
        className={`${utilStyles.listItem} ${layoutStyles.listItem}`}
        key={id}
      >
        <div className={layoutStyles.insideList}>
          <Link href={`/stories/${genre}/${id}`} className={layoutStyles.link}>
            {title}
          </Link>
          <br />
          <div className={layoutStyles.smallContainer}>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <Link href={`/stories/${genre}`} className={layoutStyles.smallLink}>
              <small className={utilStyles.lightText}>{genre}</small>
            </Link>
          </div>
        </div>
        <Link href={`/stories/${genre}/${id}`} className={layoutStyles.imageLink}>
          <Image
            className={utilStyles.imageCover}
            src={thumbnail}
            height={100}
            width={100}
          />
        </Link>
      </li>
    )
  );
};

export default Latest;
