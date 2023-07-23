import { getSortedPostsData } from "../../lib/posts.js";
import Link from "next/link";
import Date from "../../components/date.js";
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout.js";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Page = ({ allPostsData }) => {
  return (
    <Layout>
      <section>
        {allPostsData.map(({ id, date, title, genre }, index) => {
          return (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/stories/${genre}/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          );
        })}
      </section>
    </Layout>
  );
};

export default Page;
