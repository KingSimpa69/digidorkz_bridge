import styles from "@/styles/Header.module.css"
import Image from "next/image"
import Web3Button from "./Web3Button"

const Header = () => {

    return(
        <div className={styles.headerWrap}>
            <div className={styles.headerCont}><Image src={"/images/1.png"} width={80} height={80} alt={"noggles"}/></div>
            <div className={styles.headerCont}><Web3Button /></div>
        </div>
    )
}

export default Header