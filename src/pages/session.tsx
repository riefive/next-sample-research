export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/auth');
  const session = await res.json();
  return { props: { data: session } };
}

export default function SessionPage(props: { data: any }) {
  return (
    <>
      <h1>{props.data.username}</h1>
    </>
  );
}

/*
SessionPage.getInitialProps = async (context: any) => {
  const { req, query, res, asPath, pathname } = context;
  if (req) {
    let host = req.headers.host; // will give you localhost:3000
  }
};
*/
