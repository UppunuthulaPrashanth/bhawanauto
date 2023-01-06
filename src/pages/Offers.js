import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OFFERS } from "../config/Constants";
import { getOffersData } from "../redux/features/cms/offerSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import parse from 'html-react-parser';

export default function Offers() {
  const [offers, setOffers] = useState();
  const [tempOffer, setTempOffer] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffersData()).then((response) => {
      setOffers(response.payload);
    });
  }, []);

  // Modal functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    var data = offers.filter((x) => x.id === id);
    setTempOffer(data[0]);
    setShow(true);
  };

  return (
    <>
      <h4 className="text-center mt-4 mb-3">Best Offers</h4>
      <div class="row m-2">
        {offers ? (
          offers.map((item, key) => {
            return (
              <div className="col col-md-6" key={key}>
                <div class="details card">
                  <div class="heading d-flex mt-2">
                    <div>
                      <img
                        src={OFFERS + item.image}
                        style={{ height: "100px" }}
                      ></img>
                    </div>
                  </div>
                  <h4>{item.title}</h4> 
                  <p>
                    <small class="text-muted">{item.short_description}</small>
                  </p>

                  <div class="text-muted hurry">
                    <small>Hurry. book now. Limited time offer</small> &nbsp;
                    <button
                      className="btn btn-primary mb-2"
                      onClick={() => handleShow(item.id)}
                    >
                      Know more
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No offers found</p>
        )}
      </div>

      {tempOffer ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div class="details card">
              <div class="heading d-flex mt-2">
                <div className="text-center mx-auto mb-4">
                  <img
                    src={OFFERS + tempOffer.image}
                    style={{ height: "100px" }}
                  ></img>
                </div>
              </div>
              <h4>{tempOffer.title}</h4>
              <p>
                <small class="text-muted">{tempOffer.short_description}</small>
              </p>
              {parse(tempOffer.long_description)}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}
