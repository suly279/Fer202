import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    setErrors({ ...errors, [name]: '' });
    setSuccess({ ...success, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const newSuccess = {};

    if (!formData.firstName) newErrors.firstName = 'Please provide a valid first name.';
    else newSuccess.firstName = 'Looks good!';

    if (!formData.lastName) newErrors.lastName = 'Please provide a valid last name.';
    else newSuccess.lastName = 'Looks good!';

    if (!formData.username) newErrors.username = 'Please choose a username.';
    else newSuccess.username = 'Looks good!';

    if (!formData.city) newErrors.city = 'Please provide a valid city.';
    else newSuccess.city = 'Looks good!';

    if (!formData.state) newErrors.state = 'Please provide a valid state.';
    else newSuccess.state = 'Looks good!';

    if (!formData.zip) newErrors.zip = 'Please provide a valid zip.';
    else newSuccess.zip = 'Looks good!';

    if (!formData.terms) newErrors.terms = 'You must agree to terms and conditions.';

    setErrors(newErrors);
    setSuccess(newSuccess);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
      });
      setSuccess({});
    }
  };

  return (
    <div className="news-container">
      <h2>Contact Page</h2>
      <div className="contact-card-wrapper">
        <Card className="news-card">
          <Card.Body className="contact-card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : success.firstName ? 'is-valid' : ''}`}
                    id="firstName"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  {success.firstName && <div className="valid-feedback">{success.firstName}</div>}
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : success.lastName ? 'is-valid' : ''}`}
                    id="lastName"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  {success.lastName && <div className="valid-feedback">{success.lastName}</div>}
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : success.username ? 'is-valid' : ''}`}
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                  {success.username && <div className="valid-feedback">{success.username}</div>}
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="city" className="form-label">City</label>
                  <input
                    type="text"
                    className={`form-control ${errors.city ? 'is-invalid' : success.city ? 'is-valid' : ''}`}
                    id="city"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  {success.city && <div className="valid-feedback">{success.city}</div>}
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="state" className="form-label">State</label>
                  <input
                    type="text"
                    className={`form-control ${errors.state ? 'is-invalid' : success.state ? 'is-valid' : ''}`}
                    id="state"
                    name="state"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                  {success.state && <div className="valid-feedback">{success.state}</div>}
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="zip" className="form-label">Zip</label>
                  <input
                    type="text"
                    className={`form-control ${errors.zip ? 'is-invalid' : success.zip ? 'is-valid' : ''}`}
                    id="zip"
                    name="zip"
                    placeholder="Enter zip"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                  {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                  {success.zip && <div className="valid-feedback">{success.zip}</div>}
                </div>
              </div>

              <div className="mb-3 form-check text-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="terms">Agree to terms and conditions</label>
                {errors.terms && <div className="invalid-feedback d-block">{errors.terms}</div>}
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit form</button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Contact;