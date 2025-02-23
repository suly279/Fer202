import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    { id: 1, text: "Anessa" },
    { id: 2, text: "La Roche-Posay" },
    { id: 3, text: "Estee Lauder" },
    { id: 4, text: "The Ordinary" },
    { id: 5, text: "CeraVe" },
    { id: 6, text: "Laneige" },
    { id: 7, text: "Senka" },
    { id: 8, text: "Kiehl’s" },
    { id: 9, text: "MAC" },
    { id: 10, text: "Black Rouge" },
  ];

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-2">
      <input
        type="text"
        placeholder="Nhập từ khóa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      <div className="row">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="card-text text-muted">Không tìm thấy kết quả</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
