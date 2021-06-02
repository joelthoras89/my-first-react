import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CreditCard from "../credit-card";
import MaskInput from "react-maskinput";
import { FORM_CARD_FIELDS, CREDIT_CARD } from "../../utils/constants/form";
import "./index.model.css";

export default () => {
  const [cardNumberMask, setCardNumberMask] = useState("0000-0000-0000-0000");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardFlag, setCardFlag] = useState("");
  const [rotate, setRotate] = useState(false);
  const {
    formState: { errors },
  } = useForm();
  useEffect(() => {
    observeCardNumber();
    return () => setCardFlag("");
  }, [cardNumber]);

  const observeCardNumber = () => {
    const flagImage = Object.entries(CREDIT_CARD)
      .filter(([_, { prefix }]) =>
        prefix
          .map((required) => new RegExp(`^${required}`, "ig").test(cardNumber))
          .includes(true)
      )
      .slice(0, 1)
      .reduce((findedFlag, [_, { flag }]) => findedFlag || flag, "");
    setCardFlag(flagImage);
  };

  const handleChange = (e) => {
    switch (e.target.getAttribute("name")) {
      case FORM_CARD_FIELDS.CARD_NUMBER:
        if (
          CREDIT_CARD.AMEX["prefix"]
            .concat(CREDIT_CARD.DINNERS_CLUB["prefix"])
            .find((pre) => e.target.value.startsWith(pre))
        ) {
          setCardNumberMask("0000-000000-00000");
        } else {
          setCardNumberMask("0000-0000-0000-0000");
        }
        setCardNumber(e.target.value.split("-").join(" "));
        break;
      case FORM_CARD_FIELDS.EXP_DATE:
        setExpDate(e.target.value);
        break;
      case FORM_CARD_FIELDS.CARD_NAME:
        setCardName(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <div>
        <form>
          <div className="form-group">
          <label>Card number</label>
            <div className="cc-box">
              <MaskInput
                name={FORM_CARD_FIELDS.CARD_NUMBER}
                onChange={handleChange}
                maskChar=""
                mask={cardNumberMask}
                className="form-control"
                placeholder="Card number"
              />
              {!rotate && (
                <CreditCard
                  number={cardNumber}
                  date={expDate}
                  name={cardName}
                  flag={cardFlag}
                />
              )}
            </div>
          </div>
        </form>
      </div>
      
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Expiry date</label>
          <select className="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Year</label>
          <select
            className="form-control"
            defaultValue={{ label: "Select Dept", value: 0 }}
          >
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
            <option>2029</option>
            <option>2030</option>
            <option>2031</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Security code</label>
          <input type="number" min="0" className="form-control" />
        </div>
      </div>
      <b className="payment-title">Billing address</b>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>First Name</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group col-md-6">
          <label>Last Name</label>
          <input className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <label>Street address</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Apartment / Suite / Building</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>City</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group col-md-4">
          <label>State</label>
          <input className="form-control" />
        </div>
        <div className="form-group col-md-4">
          <label>ZIP code</label>
          <input type="number" className="form-control" />
        </div>
      </div>
      <p>
        By clicking "Buy subscription," you agree to the Pearson Mojo
        <u>Subscription Agreement</u>, acknowledge our
        <u>Privacy Policy</u>, and are subscribing to a minimum 4-month
        subscription with automatic payments of (plus tax) a month. After your
        first term ends, we’ll automatically renew your subscription and charge
        you every month until you turn off auto-renew in <u>your account</u>.
        You can cancel your subscription within 14 days for a full refund by
        contacting Pearson Support. You can turn off auto-renew any time, which
        will be effective after your initial 4-month subscription term ends.
      </p>
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="form-row">
        <input className="buy-sub" type="submit" value="Buy subscription" />
      </div>
    </div>
  );
};
