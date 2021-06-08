import Link from 'next/link';
import { useRouter } from 'next/router';
function ClientProjects() {
  const router = useRouter();

  function loadProject() {
    //load data....
    //navigate programatically
    //this is similar to Link
    //router.push(`/clients/${router.query.clientId}/1`);

    //alternative way
    router.push({
      pathname: '/clients/[clientId]/[clientProjectId]',
      query: {
        clientId: router.query.clientId,
        clientProjectId: '1',
      },
    });
  }

  return (
    <div>
      <h1>specific client projects - client is {router.query.clientId}</h1>
      <div>
        <Link href={`/clients/${router.query.clientId}/1`}>
          Show client project 1
        </Link>

        <button onClick={loadProject}>Show client project 1</button>
      </div>
    </div>
  );
}

export default ClientProjects;
