import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const BuyFilter = ({ filterToggle, arrowToggle }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleClick = () => {
    filterToggle();
    arrowToggle();
  };

  return (
    <div className="buy__filter__container">
      <div className="buy__filter__title">
        <h1>Filter in Your Way</h1>
      </div>

      <div className="buy__filter__content">
        <h1>Built Date</h1>
        <div className="buy__filter__date">
          <DatePicker selected={startDate} onChange={setStartDate} />
        </div>
      </div>

      <div className="buy__filter__content">
        <h1>Location</h1>
        <div className="buy__filter__input">
        <select >
          <option value=""> Choose Location </option>
                  <option value="Bhaktapur">Kathmansu</option>
                      <option value="Kathmandu">Bhaktpur</option>
                      <option value="Kathmandu">Lalipur</option>
                      <option value="Kathmandu">Bhojpur</option>
                      <option value="Kathmandu">Dhankuta</option>
                      <option value="Kathmandu">Ilam</option>
                      <option value="Kathmandu">Jhapa</option>
                      <option value="Kathmandu">Khotang</option>
                      <option value="Kathmandu">Morang</option>
                      <option value="Kathmandu">Okhaldhunga</option>
                      <option value="Kathmandu">Panchthar</option>
                      <option value="Kathmandu">Sankhuwasabha</option>
                      <option value="Kathmandu">Solukhumbu</option>
                      <option value="Kathmandu">Sunsari</option>
                      <option value="Kathmandu">Taplejung</option>
                      <option value="Kathmandu">Terhathum</option>
                      <option value="Kathmandu">Udayapur</option>
                      <option value="Kathmandu">Bara</option>
                      <option value="Kathmandu">Dhanusa</option>
                       <option value="Kathmandu">Mahottari</option>
                       <option value="Kathmandu">Parsa</option>
                        <option value="Kathmandu">Rautahat</option>
                        <option value="Kathmandu">Saptari</option>
                         <option value="Kathmandu">Sarlahi</option>
                         <option value="Kathmandu">Siraha</option>
                          <option value="Kathmandu">Bhaktapur District</option>
                           <option value="Kathmandu">Chitwan</option>
                           <option value="Kathmandu">Dhading</option>
                           <option value="Kathmandu">Dolakha</option>
                           <option value="Kathmandu">Kavrepalanchok</option>
                           <option value="Kathmandu">Makawanpur</option>
                           <option value="Kathmandu">Ramechhap </option>
                           <option value="Kathmandu">Rasuwa </option>
                           <option value="Kathmandu">Sindhuli </option>
                           <option value="Kathmandu">Sindhupalchok </option>
                           <option value="Kathmandu">Baglung </option>
                           <option value="Kathmandu">Gorkha </option>
                           <option value="Kathmandu">Kaski </option>
                           <option value="Kathmandu">Lamjung </option>
                           <option value="Kathmandu">Manang </option>
                           <option value="Kathmandu">Mustang </option>
                           <option value="Kathmandu">Myagdi </option>
                           <option value="Kathmandu">Nawalparasi  </option>
                           <option value="Kathmandu">Parbat </option>
                           <option value="Kathmandu">Syangja </option>
                           <option value="Kathmandu">Tanahu  </option>
                           <option value="Kathmandu">Arghakhanchi </option>
                           <option value="Kathmandu">Banke </option>
                           <option value="Kathmandu">Dang </option>
                           <option value="Kathmandu">Bardiya </option>
                           <option value="Kathmandu">Gulmi </option>
                           <option value="Kathmandu">Kapilvastu </option>
                           <option value="Kathmandu">Nawalparasi  </option>
                           <option value="Kathmandu">Palpa</option>
                           <option value="Kathmandu">Pyuthan </option>
                           <option value="Kathmandu">Rolpa </option>
                           <option value="Kathmandu">Purbi Rukum</option>
                           <option value="Kathmandu">Rupandehi</option>
                           <option value="Kathmandu">Dailekh  </option>
                           <option value="Kathmandu">Dolpa </option>
                           <option value="Kathmandu">Humla  </option>
                           <option value="Kathmandu">Jajarkot  </option>
                           <option value="Kathmandu">Jumla  </option>
                           <option value="Kathmandu">Kalikot  </option>
                           <option value="Kathmandu">Mugu  </option>
                           <option value="Kathmandu">Rukum  </option>
                           <option value="Kathmandu">Salyan  </option>
                           <option value="Kathmandu">Achham   </option>
                           <option value="Kathmandu">Baitadi  </option>
                           <option value="Kathmandu">Bajhang  </option>
                           <option value="Kathmandu">Dadeldhura  </option>


        </select>
        </div> 
      </div>

      <div className="buy__filter__content">
        <h1>Price range</h1>
        <div className="buy__filter__input">
          <input type="text" placeholder="pricerange" />
        </div>
      </div>

      <div className="buy__filter__content">
        <h1>House type</h1>
        <div className="buy__filter__input">
          <input type="text" placeholder="housetype" />
        </div>
      </div>

      <div className="buy__filter__button">
        <Row>
          <Col md={6}>
            <Button variant="dark" size="lg">
              Clear
            </Button>
          </Col>
          <Col md={6}>
            <Button variant="primary" size="lg" onClick={handleClick}>
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BuyFilter;
