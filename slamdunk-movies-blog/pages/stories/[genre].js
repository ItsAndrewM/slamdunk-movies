import { usePathname } from "next/navigation";
import { getAllPostIds, getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout";
import Post from "../../components/post";
import utilStyles from "../../styles/utils.module.css";
import Recent from "../../components/recent";
import layoutStyles from "../../components/layout.module.css";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

const Genre = ({ allPostsData }) => {
  const pathname = usePathname();
  const split = pathname.split("/")[pathname.split("/").length - 1];

  const filtered = allPostsData.filter((posts) => {
    return posts.genre === split;
  });

  return (
    <Layout>
      <section className={layoutStyles.section}>
        <h2 className={`${utilStyles.sectionHeader} ${utilStyles.capitalize}`}>
          {pathname.split("/")[pathname.split("/").length - 1]}
        </h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title, index }) => ( */}
          {filtered.map(({ id, date, title, genre }, index) => {
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
      </section>
      <section className={layoutStyles.section}>
        <h2 className={utilStyles.sectionHeader}>
          Check out some recent stories
        </h2>
        <Recent props={allPostsData} count={5} />
      </section>
    </Layout>
  );
};

export default Genre;

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const slugs = getAllPostIds();
  const paths = slugs.map((slug) => {
    return {
      params: { genre: slug.params.genre },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
