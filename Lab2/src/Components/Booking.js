import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InputField = ({ type, placeholder }) => (
  <input type={type} className="form-control" placeholder={placeholder} />
);

const SelectField = ({ options }) => (
  <select className="form-control">
    {options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
);

const TextArea = ({ placeholder }) => (
  <textarea className="form-control" placeholder={placeholder}></textarea>
);

const BookingForm = () => {
  return (
    <form>
      <div className="row mb-3" style={{ paddingBottom: "30px" }}>
        <div className="col-md-4"><InputField type="text" placeholder="Your Name *" /></div>
        <div className="col-md-4"><InputField type="email" placeholder="Your Email *" /></div>
        <div className="col-md-4">
          <SelectField options={["Select a Service", "Dine In", "Take Away"]} />
        </div>
      </div>
      <div className="mb-3">
        <TextArea placeholder="Please write your comment" />
      </div>
      <button style={{ color: "white", padding: "10px 20px" }} className="btn btn-warning">Send Message</button>
    </form>
  );
};

const Booking = () => {
  return (
    <div className="container" style={{ paddingBottom: "100px", marginTop: "50px" }}>
      <h1 style={{ margin: "0 0 30px 0" }} className="text-center">Book Your Table</h1>
      <BookingForm />
    </div>
  );
};

export default Booking;
