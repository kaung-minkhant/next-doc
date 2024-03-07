export default async function DelayComponent() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return <div>Delayed Component</div>;
}
