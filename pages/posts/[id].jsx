import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import utilStyles from '../../styles/utils.module.css';

const Post = ({ postData }) => {
  const showPostBody = () => {
    const postBody = document.getElementById('post-body');
    const el = document.createElement('div');

    el.innerHTML = postData.contentHtml;
    postBody.appendChild(el);
  };

  useEffect(() => {
    showPostBody();
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>

        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        <div id="post-body" />
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default Post;
