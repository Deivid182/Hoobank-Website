import { clients } from "../constants"
import styles from "../styles"

export default function Clients() {
  return (
    <section className={styles.flexCenter + "my-4"}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(client => (
          <div className={`flex-1 ${styles.flexCenter} sm:w-[192px] min-w-[120px] `} key={client.id}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain " />
          </div>
        ))}
      </div>
    </section>
  )
}
