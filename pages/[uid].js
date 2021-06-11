function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userid = params.uid;
  return {
    props: {
      id: 'userId-' + userid,
    },
  };
}
