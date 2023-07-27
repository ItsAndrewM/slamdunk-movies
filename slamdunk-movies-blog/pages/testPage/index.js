import Movies from "../../components/movies";
import { getCineplexInTheatres } from "../api/in-theatres"
import utilStyles from "../.././styles/utils.module.css";
import layoutStyles from "../../components/layout.module.css";

export const getServerSideProps = async () => {
    const moviesData = await getCineplexInTheatres();
    return {
        props: {
            moviesData
        }
    }
}

const Page = ({ moviesData }) => {
    return (
        <div>
            <ul className={`${utilStyles.list} ${layoutStyles.bannerList}`}>
                {moviesData.data.map((movie, index) => {
                    return <Movies data={movie} key={movie.id} />
                })}
            </ul>
        </div>
    );
}

export default Page;