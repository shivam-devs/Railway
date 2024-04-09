'use client';
import Link from "next/link";
import styles from "./navbar.module.css"
import { usePathname,useRouter } from "next/navigation";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logoutfunction } from "@/utils/Apis";
const Links = ({show,setShow}) =>{
    const pathName = usePathname();
    const [{ userInfo },dispatch] = useStateProvider();
    const router = useRouter();
    const handelLogout =async () =>{
        await logoutfunction();
        dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {},
          });
        router.push('/');
    }
    return(
        <div className={`flex-col md:text-md text-xs p-2 glass items-center md:flex-row ${styles.link}`}>
            <Link onClick={()=>setShow(!show)} href="/" className={pathName==="/"? styles.active:"random"}>Home</Link>
            {userInfo?.is_admin && <Link onClick={()=>setShow(!show)} href="http://localhost:8000/admin/" className="text-center" target="_blank">Admin Pannel</Link>}
            <Link onClick={()=>setShow(!show)} href="/contact" className={`text-center ${pathName==="/contact"? styles.active:"random"}`}>Contact Us</Link>
            {userInfo?.id == null?<>
            <Link onClick={()=>setShow(!show)} href="/login" className={`text-center${pathName==="/login" ? styles.active:"random"}`}>Login</Link>
            <Link onClick={()=>setShow(!show)} href="/register" className={pathName==="/register" ? styles.active:"random"}>Register</Link>
            </>:<><Link onClick={()=>setShow(!show)} href="/profile"><AccountCircleIcon /></Link><button className={styles.btn} onClick={handelLogout}>Logout</button></>}
        </div>
    )
}
export default Links;