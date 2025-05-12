import React, { useState } from 'react';
import styles from '../assets/scss/contato/index.module.css';

function Contato() {
  const [data, setData] = useState({
    nome: '',
    qtd_convidados: 0,
    evento: '',
    local: '',
    servico: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const telefone = "5511946289761"; // Número do WhatsApp

    const nome = data.nome ? encodeURIComponent(data.nome) : "Não informado";
    const evento = data.evento ? encodeURIComponent(data.evento) : "Não informado";
    const qtd_pessoas = data.qtd_convidados ? encodeURIComponent(data.qtd_convidados) : "Não informado";
    const local_evento = data.local ? encodeURIComponent(data.local) : "Não informado";
    const servico = data.servico ? encodeURIComponent(data.servico) : "Não informado";
    const observacoes = data.observacoes ? encodeURIComponent(data.observacoes) : "Não informado";

    const mensagem = `*Meu nome:*%20${nome}%0A%0A*Evento:*%20${evento}%0A%0A*Quantidade de pessoas:*%20${qtd_pessoas}%0A%0A*Como será o local do evento:*%20${local_evento}%0A%0A*Serviço desejado:*%20${servico}%0A%0A*Observações/dúvidas:*%20${observacoes}`;

    const linkWhatsApp = `https://wa.me/${telefone}?text=${mensagem}`;

    const link = document.createElement('a');
    link.href = linkWhatsApp;
    link.target = '_blank';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className={`${styles.container} container`}>
      <h1 className={styles['form-title']}>Entre em contato</h1>
      <p className={styles['form-description']}>
        Ao preencher este formulário você nos ajuda a entender as suas
        necessidades para que possamos dedicar o máximo de esforço para te ajudar
      </p>

      <form id="contact" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Seu nome</label>
          <input type="text" className={`form-control ${styles['form-control']}`} id="nome" name="nome" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="convidados" className="form-label">Quantidade de convidados</label>
          <input type="number" className={`form-control ${styles['form-control']}`} id="convidados" name="qtd_convidados" onChange={handleChange} />
        </div>

        <div className={`d-flex ${styles['form-sections']}`}>
          {/* Evento */}
          <div className={styles['form-group-section']}>
            <label className="form-label">Evento</label>
            {['Casamento', 'Debutante', 'Corporativo', 'Chá Revelação', 'Aniversários', 'Outro'].map((item, i) => (
              <div className={`form-check ${styles['form-check']}`} key={i}>
                <input
                  className={`form-check-input ${styles['form-check-input']}`}
                  type="radio"
                  id={`evento-${i}`}
                  name="evento"
                  value={item}
                  checked={data.evento === item}
                  onChange={handleChange}
                />
                <label className={`form-check-label ${styles['form-check-label']}`} htmlFor={`evento-${i}`}>{item}</label>
              </div>
            ))}
          </div>

          {/* Local */}
          <div className={`${styles['form-group-section']} ${styles['border-start']} ps-3`}>
            <label className="form-label">Como será o local do evento</label>
            {['Aberto', 'Fechado', 'Ainda não decidi'].map((item, i) => (
              <div className={`form-check ${styles['form-check']}`} key={i}>
                <input
                  className={`form-check-input ${styles['form-check-input']}`}
                  type="radio"
                  id={`local-${i}`}
                  name="local"
                  value={item}
                  checked={data.local === item}
                  onChange={handleChange}
                />
                <label className={`form-check-label ${styles['form-check-label']}`} htmlFor={`local-${i}`}>{item}</label>
              </div>
            ))}
          </div>

          {/* Serviço */}
          <div className={styles['form-group-section']}>
            <label className="form-label">Qual tipo de serviço você deseja</label>
            {['Assessoria Personalizada', 'Assessoria do Dia', 'Cerimonial'].map((item, i) => (
              <div className={`form-check ${styles['form-check']}`} key={i}>
                <input
                  className={`form-check-input ${styles['form-check-input']}`}
                  type="radio"
                  id={`servico-${i}`}
                  name="servico"
                  value={item}
                  checked={data.servico === item}
                  onChange={handleChange}
                />
                <label className={`form-check-label ${styles['form-check-label']}`} htmlFor={`servico-${i}`}>{item}</label>
              </div>
            ))}
          </div>

          <textarea
            name="observacoes"
            className={`form-control ${styles['form-control']}`}
            placeholder="Deixe aqui suas dúvidas ou observações"
            onChange={handleChange}
          />

        </div>

        <button type="submit" className={`btn mt-4 ${styles['btn-submit']}`}>Enviar</button>

        <p className={`mt-2 ${styles['form-footer']}`}></p>
      </form>
    </div>
  );
}

export default Contato;
