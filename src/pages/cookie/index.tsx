import cookie from 'js-cookie';

export function getServerSideProps() {
  return { props: {} };
}

export default function CookiePage() {
  const isClient = false;
  const onAdd = () => {
    if (isClient) {
      cookie.set('token', 'ABCD', { expires: 1 / 24 });
    } else {
      fetch('/api/token-add', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: 'ABCDEFG' }),
      });
    }
  };
  const onRemove = () => {
    if (isClient) {
      cookie.remove('token');
    } else {
      fetch('/api/token-remove', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
    }
  };
  return (
    <main>
      <h1>Cookies</h1>
      <button type='button' onClick={() => onAdd()}>
        Login
      </button>{' '}
      <button type='button' onClick={() => onRemove()}>
        Logout
      </button>
    </main>
  );
}
