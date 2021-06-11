import AllPosts from '../../components/Posts/AllPosts.component';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a Reasct framework for production - it makes building full stack React Apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a Reasct framework for production - it makes building full stack React Apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a Reasct framework for production - it makes building full stack React Apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs-4',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a Reasct framework for production - it makes building full stack React Apps',
    date: '2022-02-10',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
