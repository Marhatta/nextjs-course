import { useRouter } from 'next/router';
function SelectedClientProjects() {
  const router = useRouter();
  return (
    <div>
      <h1>
        specific client specific project id {router.query.clientProjectId}
      </h1>
    </div>
  );
}

export default SelectedClientProjects;
