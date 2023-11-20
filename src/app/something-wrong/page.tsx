export default async function SomethingPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error('Something wrong');
}
