import { usePathname } from "next/navigation";
import { getAllLegalIds, getLegalData } from "../../lib/legal";
import layoutStyles from "../../components/layout.module.css";
import Layout from "../../components/layout";

const Page = ({ legalData }) => {
    return (
        <Layout>
            <div className={layoutStyles.postWrapper}
                dangerouslySetInnerHTML={{ __html: legalData.contentHtml }} />
        </Layout>
    );
}

export const getStaticPaths = async () => {
    // Return a list of possible value for id
    const paths = getAllLegalIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    // Fetch necessary data for the blog post using params.id
    const legalData = await getLegalData(params.id);
    return {
        props: {
            legalData,
        },
    };
};

export default Page;

