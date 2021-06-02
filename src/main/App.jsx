import React from 'react';
import Form from '../components/form';
import Header from '../components/header';
import Footer from '../components/footer';

import { useContext } from "react";
import useInput from "./useInput";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import "react-tabs/style/react-tabs.css";
import './App.model.css';


const DownIcon = ({ width }) => (
  <svg width={width} viewBox="0 0 16 16" fill="#151515">
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    ></path>
  </svg>
);

const UpIcon = ({ width }) => (
  <svg width={width} viewBox="0 0 16 16" fill="#151515">
    <path
      fillRule="evenodd"
      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
    ></path>
  </svg>
);
function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className="apply-text"
      // style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      <span>{children}</span>
      {isCurrentEventKey ? (
        <DownIcon width="16"></DownIcon>
      ) : (
        <UpIcon width="16"></UpIcon>
      )}
    </button>
  );
}
export default () => {
  const promo = useInput();
  return(
  <div>
      <Header></Header>
      <div className="container-section">
        <div className="form-section">
          <div className="title">
            <b className="payment-title"> Payment </b>
            <label className="payment--subtitle">
              We can only accept PayPal and US credit cards
            </label>
          </div>
          <Tabs>
            <TabList>
              <Tab>
                <b>Credit Card</b>
              </Tab>
              <Tab>
                <img
                  className="paypal-image"
                  alt="Not Found"
                  src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg"
                />
              </Tab>
            </TabList>
            <TabPanel>
            <Form></Form>
            </TabPanel>
            <TabPanel>
              <div className="title">
                <h2> Pay with PayPal </h2>
                <p> You’ ll be able to review your order before paying </p>
              </div>
              <div className="form-row">
              <input className="buy-sub" type="submit" value="Continue to Paypal" />
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="details">
          <div className="details-title">
            <div>
              <b> Basic </b>
            </div>
            <div>
              <b> $7 .99 </b> (+ tax) a month
            </div>
          </div>
          <div className="details-sub">
            Use of 1 eText title, Minimum 4 - month commitment
          </div>
          <div>
            <b> Setected title </b>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <img
                src="https://www.pearson.com/content/dam/global-store/global/images/products/AWS_Foundations.jpg"
                className="img-fluid d-block"
                alt="Not Found"
              />
            </div>
            <div className="form-group col-md-9 flex-column">
              <label>Campbell Biology</label>
              <label>11th Edition</label>
              <label>by Lisa A. Urry, Rebecca, Dunes</label>
            </div>
          </div>

          <div className="sub-title">
            <Accordion defaultActiveKey="0">
              <div>
                <ContextAwareToggle eventKey="0">
                  Add promo code
                </ContextAwareToggle>

                <Accordion.Collapse eventKey="1">
                  <div>
                    <div>
                      <input className="apply-input" />
                      <button type="button" className="apply-button">
                        Apply
                      </button>
                    </div>

                    {promo.value === "PROMO1" ? (
                      <div className="valid-promo">Promo code applied</div>
                    ) : (
                      <div className="invalid-promo">
                        Invalid or expired promo code
                      </div>
                    )}
                    {promo.value === "PROMO1" && (
                      <div className="sub-title">
                        <span>{promo.value}</span>
                        <span className="remove external-link">Remove</span>
                      </div>
                    )}
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>
          </div>
          <hr className="my-4" />
          <div className="sub-title">
            <div>Subscription term</div>
            <div>4 months</div>
          </div>
          <div className="sub-title">
            <div>Estimated tax</div>
            <div>$7.99</div>
          </div>
          <div className="sub-title">
            <b>Due today</b>
            <b>$7.99</b>
          </div>
        </div>
      </div>
    
      <Footer></Footer>
  </div>
)};
