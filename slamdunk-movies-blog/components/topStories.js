import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css";
import Image from "next/image";

const TopStories = ({ id, date, title, genre, thumbnail, index }) => {
    if (index < 4) {
        return (
            <li className={`${utilStyles.listItem} ${layoutStyles.listItem}`} key={id}>
                <div style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${thumbnail})`
                }} className={`${layoutStyles.bannerItem}`}>

                    <div className={layoutStyles.insideList}>
                        <Link href={`/stories/${genre}/${id}`} className={layoutStyles.link}>
                            {title}
                        </Link>
                        <br />
                        <div className={`${layoutStyles.smallContainer} ${utilStyles.spaceBetween}`}>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                            <Link href={`/stories/${genre}`} className={layoutStyles.smallLink}>
                                <small className={utilStyles.lightText}>{genre}</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default TopStories;