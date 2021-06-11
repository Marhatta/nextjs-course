import classes from './FeaturedPosts.module.css';
import PostsGrid from '../Posts/PostsGrid.component';

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
