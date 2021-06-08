import { useRouter } from 'next/router';
function SinglePortfolio() {
  const router = useRouter();

  return (
    <div>
      <h1>portfolio with dynamic route of {router.query.portfolioId}</h1>
    </div>
  );
}
export default SinglePortfolio;
