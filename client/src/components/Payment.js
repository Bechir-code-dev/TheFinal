import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Payment = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <section>
        <h2 style={{ textDecoration: "underline" }}>
          1-Informations personnelles
        </h2>
        <br />
        <p style={{ marginLeft: "-500px" }}>Titre</p>
        <form>
          <label>
            <input type="radio" name="option" checked />M
          </label>
          <label>
            <input type="radio" name="option" />
            Mme
          </label>
          <br />
          <br />
          <label>Prénom :</label>
          <input
            style={{ marginBottom: "10px" }}
            placeholder="Entrer votre Prénom"
          />
          <br />
          <label>Nom :</label>
          <input
            style={{ marginBottom: "10px" }}
            placeholder="Entrer votre Nom"
          />
          <br />
          <label>Téléphone :</label>
          <input
            style={{ marginBottom: "10px" }}
            placeholder="Entrer votre Téléphone"
          />
          <br />
          <label>E-mail :</label>
          <input
            style={{ marginBottom: "10px" }}
            placeholder="Entrer votre e-mail"
          />
          <br />
          <p style={{ marginLeft: "-200px", fontWeight: "bold" }}>
            Créez votre compte (optionnel)
          </p>
          <button
            style={{ marginLeft: "500px" }}
            class="btn btn-secondary"
            onClick={openModal}
          >
            Creation de compte
          </button>
          <br />

          <label>Date de naissance :</label>
          <input style={{ marginBottom: "10px" }} placeholder="DD/MM/YYYY" />
          <br />
          <span>(Ex. : 31/05/1970)</span>
          <footer class="form-footer clearfix">
            <input type="hidden" name="submitCreate" value="1" />

            <button
              class="btn btn-primary"
              type="submit"
              style={{ marginLeft: "700px" }}
            >
              Continue
            </button>
          </footer>
        </form>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </>
  );
};
export default Payment;
