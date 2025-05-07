import React from 'react';
import styles from '../assets/scss/contato/index.module.css';

function Contato() {
  return (
    <div className={`${styles.container} container`}>
      <h1 className={styles['form-title']}>Entre em contato</h1>
      <p className={styles['form-description']}>
        Ao preencher este formulário você nos ajuda a entender as suas
        necessidades para que possamos dedicar o máximo de esforço para te ajudar
      </p>

      <form id='contact'>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Seu nome</label>
          <input type="text" className={`form-control ${styles['form-control']}`} id="nome" placeholder="Value" />
        </div>

        <div className="mb-3">
          <label htmlFor="convidados" className="form-label">Quantidade de convidados</label>
          <input type="number" className={`form-control ${styles['form-control']}`} id="convidados" placeholder="Value" />
        </div>

        <div className={`d-flex ${styles['form-sections']}`}>
          {/* Evento */}
          <div className={styles['form-group-section']}>
            <label className="form-label">Evento</label>
            {['Casamento', 'Debutante', 'Corporativo', 'Chá Revelação', 'Aniversários', 'Outro'].map((item, i) => (
              <div className={`form-check ${styles['form-check']}`} key={i}>
                <input className={`form-check-input ${styles['form-check-input']}`} type="checkbox" id={`evento-${i}`}  />
                <label className={`form-check-label ${styles['form-check-label']}`} htmlFor={`evento-${i}`}>{item}</label>
              </div>
            ))}
          </div>

          {/* Local */}
          <div className={`${styles['form-group-section']} ${styles['border-start']} ps-3`}>
            <label className="form-label">Como será o local do evento</label>
            {['Aberto', 'Fechado', 'Ainda não decidi'].map((item, i) => (
              <div className={`form-check ${styles['form-check']}`} key={i}>
                <input className={`form-check-input ${styles['form-check-input']}`} type="checkbox" id={`local-${i}`}  />
                <label className={`form-check-label ${styles['form-check-label']}`} htmlFor={`local-${i}`}>{item}</label>
              </div>
            ))}
          </div>

          {/* Serviço */}
          <div className={styles['form-group-section']}>
            <label className="form-label">Qual tipo de serviço você deseja</label>
            {['Assessoria Personalizada', 'Assessoria do Dia', 'Cerimonial'].map((item, i) => (
              <div className={`form-check ${styles['form-check']}`} key={i}>
                <input className={`form-check-input ${styles['form-check-input']}`} type="checkbox" id={`servico-${i}`}  />
                <label className={`form-check-label ${styles['form-check-label']}`} htmlFor={`servico-${i}`}>{item}</label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className={`btn mt-4 ${styles['btn-submit']}`}>Enviar</button>

        <p className={`mt-2 ${styles['form-footer']}`}>
          {/* Não conhece nossos serviços? <a href="#">Clique aqui para saber mais</a> */}
        </p>
      </form>
    </div>
  );
}

export default Contato;
