import { Fragment } from 'react';
import Hero from '../components/HomePage/Hero.component';
import FeaturedPosts from '../components/HomePage/FeaturedPosts.component';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
