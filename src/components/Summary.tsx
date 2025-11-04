import React from 'react';
import { motion } from 'framer-motion';
import styles from './Summary.module.scss';

const Summary: React.FC = () => {
  return (
    <section id="summary" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Resumo profissional
        </motion.h2>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            Desenvolvo plataformas institucionais com APIs REST, integracoes internas e automacoes seguras. Escolho
            Node.js, TypeScript, Laravel e PostgreSQL para entregar servicos consistentes. Uso OpenAPI e testes
            automatizados para manter previsibilidade.
          </p>
          <p>
            Na Fabrica de Tecnologias Turing da UniEVANGELICA coordeno dominios de pesquisa, eventos e autenticacao.
            Estruturo arquitetura limpa, LGPD aplicada e pipelines leves. Trabalho proximo a design, produto e equipes
            operacionais para ajustar fluxos rapidamente.
          </p>
          <p>
            Entreguei integracoes auditaveis para o Sistema James Fanstone e apoio a Forca Aerea Brasileira em APIs
            sensiveis. Melhorei monitoramento com logs estruturados e alertas simples, reduzindo tempo de resposta do
            time tecnico em entregas criticas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
