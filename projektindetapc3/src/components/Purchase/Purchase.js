import React from "react";
import Typography from "@material-ui/core/Typography";
import { CardPurchase, CustomModal } from "../";
import { purchaseArray } from "../../utils/purchaseArray";
const Purchase = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Typography variant="h2">Nasza oferta</Typography>
      <div className="d-flex justify-content-center">
        {purchaseArray.map((item, index) => (
          <div className="mx-3" key={index + item.name}>
            <CardPurchase
              name={item.name}
              image={item.image}
              level={item.level}
              description={item.description}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
