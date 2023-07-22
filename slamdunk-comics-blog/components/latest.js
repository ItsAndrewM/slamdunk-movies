import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

const Latest = ({ id, date, title, index }) => {
  return (
    index < 5 && (
      <li className={utilStyles.listItem} key={id}>
        <Link href={`/stories/${id}`}>{title}</Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
    )
  );
};

export default Latest;
