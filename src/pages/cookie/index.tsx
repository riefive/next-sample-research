import cookie from 'js-cookie';

export function getServerSideProps() {
  return { props: {} };
}

export default function CookiePage() {
  return (
    <main>
      <h1>Cookies</h1>
      <button
        type='button'
        onClick={() => {
          cookie.set('token', 'ABCD', { expires: 1 / 24 });
        }}
      >
        Login
      </button>{' '}
      <button
        type='button'
        onClick={() => {
          cookie.remove('token');
        }}
      >
        Logout
      </button>
    </main>
  );
}
