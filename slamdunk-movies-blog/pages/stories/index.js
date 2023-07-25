import { usePathname } from "next/navigation";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Post from "../../components/post";
import layoutStyles from "../../components/layout.module.css";

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
      <section className={layoutStyles.section}>
        <h2 className={`${utilStyles.sectionHeader} ${utilStyles.capitalize}`}>
          {pathname.split("/")[pathname.split("/").length - 1]}
        </h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title, index }) => ( */}
          {allPostsData.map(({ id, date, title, genre, thumbnail }, index) => {
            return (
              <Post
                id={id}
                date={date}
                title={title}
                genre={genre}
                thumbnail={thumbnail}
                key={index}
              />
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default Page;
