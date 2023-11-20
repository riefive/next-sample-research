export async function getServerSideProps() {
  const session: any = { username: 'test' };
  return { props: { data: session } };
}

export default function SessionPage(props: { data: any }) {
  return (
    <>
      <h1>{props.data.username}</h1>
    </>
  );
}
