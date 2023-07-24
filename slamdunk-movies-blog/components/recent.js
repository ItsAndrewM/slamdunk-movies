import Link from "next/link";
import recentStyles from "../styles/recent.module.css"
import utilStyles from "../styles/utils.module.css"
import layoutStyles from "./layout.module.css"
import Date from "./date";

const Recent = ({ props, count }) => {
    return (
        <ul className={recentStyles.cardContainer}>
            {props.map(({ id, date, title, genre }, index) => {
                if (index < count) {
                    return (
                        <li className={recentStyles.card} key={id}>
                            <Link href={`/stories/${genre}/${id}`}>{title}</Link>
                            <br />
                            <div className={recentStyles.smallContainer}>
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                                <Link href={`/stories/${genre}`}>
                                    <small className={utilStyles.lightText}>{genre}</small>
                                </Link>
                            </div>
                        </li>
                    )
                }
            })}

        </ul>
    );
}

export default Recent;