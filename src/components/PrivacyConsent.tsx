import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PrivacyConsent.module.scss";

const STORAGE_KEY = "gfc-privacy-consent";
const POLICY_VERSION = "2026-06-03";

type ConsentStatus = "accepted" | "rejected" | null;
type ConsentRecord = {
  status: Exclude<ConsentStatus, null>;
  version: string;
  decidedAt: string;
};

const readConsent = (): ConsentRecord | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== POLICY_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
};

const writeConsent = (status: Exclude<ConsentStatus, null>) => {
  try {
    const record: ConsentRecord = {
      status,
      version: POLICY_VERSION,
      decidedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    window.dispatchEvent(
      new CustomEvent("gfc:consent-change", { detail: record })
    );
  } catch {
    /* noop */
  }
};

const PrivacyConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const record = readConsent();
    if (!record) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (next: Exclude<ConsentStatus, null>) => {
    writeConsent(next);
    setVisible(false);
    setExpanded(false);
  };

  useEffect(() => {
    const onReopen = () => {
      setVisible(true);
      setExpanded(false);
    };
    window.addEventListener("gfc:open-privacy", onReopen);
    return () => window.removeEventListener("gfc:open-privacy", onReopen);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible ? (
          <motion.div
            className={styles.banner}
            role="dialog"
            aria-modal="false"
            aria-live="polite"
            aria-label="Aviso de privacidade conforme LGPD"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.content}>
              <div className={styles.text}>
                <h3 className={styles.heading}>Sua privacidade importa</h3>
                <p className={styles.message}>
                  Usamos cookies necessários para o site funcionar. Com seu
                  consentimento, também usamos cookies para entender como o
                  site é usado e melhorá-lo.{" "}
                  <button
                    type="button"
                    className={styles.inlineLink}
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                  >
                    Saiba mais
                  </button>
                </p>

                {expanded ? (
                  <div className={styles.details}>
                    <p>
                      <strong>Base legal:</strong> consentimento (art. 7º, I da
                      Lei nº 13.709/2018 — LGPD).
                    </p>
                    <p>
                      <strong>Cookies necessários:</strong> indispensáveis pro
                      site carregar e lembrar a sua escolha de tema
                      (claro/escuro) e de consentimento. Não rastreiam você.
                    </p>
                    <p>
                      <strong>Cookies analíticos (opcional):</strong> coletam
                      dados anônimos e agregados de navegação pra eu entender
                      quais seções funcionam. Só são ativados se você clicar em
                      <em> Aceitar</em>.
                    </p>
                    <p>
                      <strong>Seus direitos:</strong> você pode acessar,
                      corrigir, revogar o consentimento ou pedir a remoção dos
                      seus dados a qualquer momento escrevendo para{" "}
                      <a
                        className={styles.mailLink}
                        href="mailto:carvalhogabrielgfc1@gmail.com"
                      >
                        carvalhogabrielgfc1@gmail.com
                      </a>
                      .
                    </p>
                    <p className={styles.controller}>
                      Controlador dos dados: Gabriel Fernandes de Carvalho ·
                      Anápolis-GO · Política v. {POLICY_VERSION}
                    </p>
                  </div>
                ) : null}
              </div>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.secondary}
                  onClick={() => decide("rejected")}
                >
                  Recusar
                </button>
                <button
                  type="button"
                  className={styles.primary}
                  onClick={() => decide("accepted")}
                >
                  Aceitar
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

    </>
  );
};

export default PrivacyConsent;
