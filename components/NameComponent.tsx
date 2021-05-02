export default function testComponent({ name }: { name: string }): JSX.Element {
  return (
    <div>
      <h1>Hey Your name: {name}</h1>
    </div>
  )
}
