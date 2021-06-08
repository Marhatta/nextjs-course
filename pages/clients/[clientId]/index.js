import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
function ClientProjects() {
  const router = useRouter();
  return (
    <div>
      <h1>specific client projects - client is {router.query.clientId}</h1>
    </div>
  );
}

export default ClientProjects;
