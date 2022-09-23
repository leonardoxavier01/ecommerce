import React from "react";
import ContainerPage from "../../components/ContainerPage";

const Checkout = () => {
  return (
    <ContainerPage>
      <section>
        <div className="product">
          <img
            src="https://i.imgur.com/EHyR2nP.png"
            alt="The cover of Stubborn Attachments"
          />
          <div className="description">
            <h3>Stubborn Attachments</h3>
            <h5>$20.00</h5>
          </div>
        </div>
        <form action="http://localhost:5000/create-checkout-session" method="POST">
          <button type="submit">Checkout</button>
        </form>
      </section>
    </ContainerPage>
  );
};

export default Checkout;
