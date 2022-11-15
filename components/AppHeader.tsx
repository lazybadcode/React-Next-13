type AppHeaderProps = {
    title : String,
    postCode : number,
}

export default function AppHeader({title, postCode}:AppHeaderProps) {
  return (
    <>
      <h2>{ title } </h2>
      <p>{ postCode }</p>
    </>
  );
}
