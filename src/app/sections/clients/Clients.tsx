import { Card } from "@/app/components/Card/Card";
import styles from "./Clients.module.css";

export const Clients = () => {
  return (
    <section className={styles.ourClients}>
      <h2>Os nossos clientes</h2>
      <div className={styles.ourClientsContainer}>
        <Card
          title="Lara Costa"
          image="/images/person1.jpeg"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ultricies lorem. Pellentesque facilisis quam mi,
						ut mollis tellus placerat congue. Phasellus ullamcorper justo libero, eget luctus augue aliquet id."
        />
        <Card
          title="Lara Costa"
          image="/images/person1.jpeg"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ultricies lorem. Pellentesque facilisis quam mi,
						ut mollis tellus placerat congue. Phasellus ullamcorper justo libero, eget luctus augue aliquet id."
        />
        <Card
          title="Lara Costa"
          image="/images/person1.jpeg"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ultricies lorem. Pellentesque facilisis quam mi,
						ut mollis tellus placerat congue. Phasellus ullamcorper justo libero, eget luctus augue aliquet id."
        />
      </div>
    </section>
  );
};
