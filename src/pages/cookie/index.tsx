import cookie from 'js-cookie';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: any
) => {
  const req = context.req || {};
  console.log(context.res);
  return { props: { token: req?.cookies?.token || '' } };
};

export default function CookiePage(props: { token: any }) {
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
      <h2>Token: {props.token}</h2>
      <button type='button' onClick={() => onAdd()}>
        Login
      </button>{' '}
      <button type='button' onClick={() => onRemove()}>
        Logout
      </button>
    </main>
  );
}
