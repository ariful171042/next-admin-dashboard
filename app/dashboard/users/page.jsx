import styles from "../../ui/dashboard/users/users.module.css";

import Search from "../../ui/dashboard/search/Search.jsx";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for user..."} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addBtton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}></table>
    </div>
  );
};

export default UserPage;
