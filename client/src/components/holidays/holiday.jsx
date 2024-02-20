import Image from "next/image";
import Link from "next/link";
import { plans } from "./plans";
import Styles from "./holioday.module.css"
const Holiday = () => {
  return (
    <div className={Styles.main}>
      {plans.map((plan,idx) => (
        <div key={plan.title} className={Styles.box}>
          <div className={Styles.image}><Image src={plan.img} alt="image" fill/></div>
          <h3 className="text-black text-xl font-sans font-bold">{plan.title}</h3>
          <p className="text-wrap text-black px-2 opacity-60">{plan.subtitle}</p>
          <Link href={plan.link} className="text-black py-2">Read More-&gt;</Link>
        </div>
      ))}
    </div>
  );
};

export default Holiday;
