const Booking = () => {
    return (
      <div className="container" style={{paddingBottom: "100px", marginTop: '50px'}}>
        <h1 style={{margin: "0 0 30px 0"}} className="text-center">Book Your Table</h1>
        <form>
          <div className="row mb-3" style={{paddingBottom: '30px'}}>
            <div className="col-md-4"><input type="text" className="form-control" placeholder="Your Name *" /></div>
            <div className="col-md-4"><input type="email" className="form-control" placeholder="Your Email *" /></div>
            <div className="col-md-4">
              <select className="form-control">
                <option>Select a Service</option>
                <option>Dine In</option>
                <option>Take Away</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Please write your comment"></textarea>
          </div>
          <button style={{color: "white", padding: "10px 20px"}} className="btn btn-warning">Send Message</button>
        </form>
      </div>
    );
  };

  export default Booking;