import { usePathname } from "next/navigation";
import Layout from "../../components/layout";

import utilStyles from "../../styles/utils.module.css"
import { getSortedPostsData } from "../../lib/posts";
import Post from "../../components/post";

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};

const Page = ({ allPostsData }) => {
    const pathname = usePathname();
    return (
        <Layout>
            <ul className={utilStyles.list}>
                {/* {allPostsData.map(({ id, date, title, index }) => ( */}
                {allPostsData.map(({ id, date, title, genre }, index) => {
                    return (
                        <Post
                            id={id}
                            date={date}
                            title={title}
                            genre={genre}
                            key={index}
                        />
                    );
                })}
            </ul>
        </Layout>
    );
}

export default Page;