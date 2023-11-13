import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Link from "next/link";
import Paginations from "../../ui/dashboard/paginations/Pagination.jsx";
import Search from "../../ui/dashboard/search/Search";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for user..."} />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.addBtton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Drescription</td>
            <td>price</td>
            <td>stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src={"/noavatar.png"}
                  alt=" "
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                IPhone
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              unde!
            </td>
            <td>$250.00</td>
            <td>40</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/"}>
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
        </tbody>
      </table>
      <Paginations />
    </div>
  );
};

export default Products;
