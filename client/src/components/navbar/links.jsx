'use client';
import Link from "next/link";
import styles from "./navbar.module.css"
import { usePathname,useRouter } from "next/navigation";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logoutfunction } from "@/utils/Apis";
const Links = ({show,setShow,width}) =>{
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
    const handelclick = () =>{
        if(width<768){
            setShow(!show)
        }
    }
    return(
        <div className={`flex-col md:text-md text-xs p-2 glass items-center md:flex-row ${styles.link}`}>
            <Link onClick={handelclick} href="/" className={pathName==="/"? styles.active:"random"}>Home</Link>
            {userInfo?.is_admin && <Link onClick={handelclick} href="https://railway-sa53.onrender.com/admin/" className="text-center" target="_blank">Admin Pannel</Link>}
            <Link onClick={handelclick} href="/contact" className={`text-center ${pathName==="/contact"? styles.active:"random"}`}>Contact Us</Link>
            {userInfo?.id == null?<>
            <Link onClick={handelclick} href="/login" className={`text-center${pathName==="/login" ? styles.active:"random"}`}>Login</Link>
            <Link onClick={handelclick} href="/register" className={pathName==="/register" ? styles.active:"random"}>Register</Link>
            </>:<><Link onClick={handelclick} href="/profile"><AccountCircleIcon /></Link><button className={styles.btn} onClick={handelLogout}>Logout</button></>}
        </div>
    )
}
export default Links;