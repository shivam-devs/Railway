'use client';
import Link from "next/link";
import styles from "./navbar.module.css"
import { usePathname,useRouter } from "next/navigation";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Links = () =>{
    const pathName = usePathname();
    const [{ userInfo },dispatch] = useStateProvider();
    const router = useRouter();
    const handelLogout = () =>{
        dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {},
          });
        router.push('/');
    }
    return(
        <div className={styles.link}>
            <Link href="/" className={pathName==="/"? styles.active:"random"}>Home</Link>
            <Link href="http://localhost:8000/admin/" target="_blank">Admin Login</Link>
            <Link href="/contact" className={pathName==="/contact"? styles.active:"random"}>Contact Us</Link>
            {userInfo?.id == null?<>
            <Link href="/login" className={pathName==="/login" ? styles.active:"random"}>Login</Link>
            <Link href="/register" className={pathName==="/register" ? styles.active:"random"}>Register</Link>
            </>:<><Link href="/profile"><AccountCircleIcon /></Link><button className={styles.btn} onClick={handelLogout}>Logout</button></>}
        </div>
    )
}
export default Links;