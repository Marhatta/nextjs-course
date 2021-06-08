import { useRouter } from 'next/router';
function AllBlogsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>all blogs</h1>
    </div>
  );
}

export default AllBlogsPage;
