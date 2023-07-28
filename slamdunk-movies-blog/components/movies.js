import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css";

const Movies = ({ data }) => {
  return (
    <li className={`${utilStyles.listItem} ${layoutStyles.listItem}`}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${data.mediumPosterImageUrl})`,
        }}
        className={`${layoutStyles.bannerItem}`}
      >
        <div className={layoutStyles.insideList}>
          <Link
            href={`https://www.cineplex.com/movie/${data.urlSlug}`}
            className={layoutStyles.link}
          >
            {data.name}
          </Link>
          <br />
          <div
            className={`${layoutStyles.smallContainer} ${utilStyles.spaceBetween} ${utilStyles.smallGap}`}
          >
            <small className={utilStyles.lightText}>
              <Date dateString={data.releaseDate} />
            </small>
            <Link href={"/stories/movies"} className={layoutStyles.smallLink}>
              <small className={utilStyles.lightText}>Movies</small>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Movies;
