import AppHeader from "../components/AppHeader";

export default function ContactPage() {
  const fullName = "John";
  let age = 36;
  const showDate = <p>{new Date().getFullYear()}</p>;
  const isLogin = false;

  const showMsg = () => {
    alert("Hello Next JS");
  };

  return (
    <>
      <h1>Contact Page</h1>
      <AppHeader title="Hello App Header" postCode={1200}/>
      
      <button onClick={showMsg}>Click Me!</button> 
      <hr />

      <button 
        onClick={() => {
          age = 40;
          alert("Hello React 18");
        }}
      >
        Click Me2!
      </button>
      <hr />

      {isLogin ? <p>Welcome K. {fullName}</p> : <p> Please login to System</p>}
      {isLogin && <p>{fullName}</p>}
      <p>
        Hello Khun {fullName.toUpperCase()} Age {age}{" "}
      </p>
      {showDate}
    </>
  );
}
