import { useEffect, useState } from "react";
import Image from "next/image"
import reactLogo from "../public/react1.jpg"
import { MdHome } from "react-icons/md";


export default function AboutPage() {
  const [age, setAge] = useState(30);
  const [isShow, setIsShow] = useState(false);

  const showMsg = () => {
    setAge(40);
    setIsShow(!isShow);
  };

  useEffect(() => {
    console.log("Use Effect About Page it is call at the begin time and re-render");
  });
  
  useEffect(() => {
      console.log("Use Effect About Page it is call at the begin time only 1 time");
    },[]);
    
    useEffect(() => {
        console.log("Use Effect About Page it is call at the begin time only 1 time and age has been updated");
    },[age]);
    
    useEffect(() => {
      return ()=>{
        console.log("Exit about page")
      }
    });
    
    return (
      <>
      {/* <AppNavbar /> */}
      <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      {isShow && <p>Your Age {age}</p>}

      <Image src={reactLogo} alt="React Logo" />
      <hr/>

      <Image src="/pic2.jpeg" alt="Cloud Logo2" width={400} height={400} />
      <hr/>

      <Image src="https://codingthailand.com/site/img/book1.png" alt="Book Logo3" width={180} height={300} />


      <hr/>
      <button onClick={showMsg}>Click Me</button>
      

      <hr/>
      <MdHome size={40}></MdHome>

      </>

      

  );
}
