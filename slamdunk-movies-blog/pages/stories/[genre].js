import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Genre = ({ allPostsData }) => {
  const router = useRouter();
  console.log(router.asPath);
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

export default Genre;
