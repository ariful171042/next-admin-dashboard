import styles from "../../ui/dashboard/users/users.module.css";
import Paginations from "../../ui/dashboard/paginations/Pagination.jsx";
import Search from "../../ui/dashboard/search/Search.jsx";
import Link from "next/link";
import Image from "next/image.js";
import { fetchUsers } from "../../lib/data";

const UserPage = async () => {
  const users = await fetchUsers();

  console.log(users);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for user..."} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addBtton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => (
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=" "
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Paginations />
    </div>
  );
};

export default UserPage;
