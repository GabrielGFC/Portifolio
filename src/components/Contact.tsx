import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.scss';

const channels = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabrielgfc1',
    description: 'Conecte para alinhar demandas e agendar conversas tecnicas.',
  },
  {
    id: 'email',
    label: 'E-mail',
    href: 'mailto:bibigfc@gmail.com',
    description: 'Envie cronogramas, anexos ou convites formais.',
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className={styles.kicker}>Vamos conversar?</p>
          <h2>Pronto para acelerar o seu proximo release institucional.</h2>
          <p className={styles.subtitle}>
            Respondo rapido com foco em escopo, riscos e roadmap. Escolha o canal ideal:
          </p>

          <div className={styles.channels}>
            {channels.map((channel) => (
              <a
                key={channel.id}
                className={styles.channel}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className={styles.channelHeading}>{channel.label}</span>
                <span className={styles.channelDescription}>{channel.description}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
