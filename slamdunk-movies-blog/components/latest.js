import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css";

const Latest = ({ id, date, title, genre, index }) => {
  return (
    index < 5 && (
      <li className={utilStyles.listItem} key={id}>
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
      </li>
    )
  );
};

export default Latest;
