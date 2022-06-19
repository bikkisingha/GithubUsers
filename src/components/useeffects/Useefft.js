import React, { useEffect, useState } from "react";

const Useefft = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(`https://api.github.com/users`);
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  //axios

  return (
    <div className="bdy">
      <h1 className="text">Github User's List</h1>
      <div className="container-fluid mt-5">
        <div className="row" text-center="true">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5" key={curElem.node_id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={curElem.order_id}
                        className="rounded"
                        width="140"
                        alt="users imag"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textleft">
                        {" "}
                        Name: {curElem.parent_order_id}
                      </h4>
                      <span className="textleft">{curElem.order_status}</span>
                      <div className="p-.7 mb-2 mt-4 bg-light d-flex justify-content-between rounded text-while stats">
                        <div className="d-flex flex-column">
                          <span className="articles">type</span>
                          <span className="number1">{curElem.order_total}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className=" serial">Serial No</span>

                          <span className="  number2">
                            {curElem.scheduled_date}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className=" rating">Rating</span>
                          <span className="number3">5</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers"> U_Id </span>

                          <span className="number4">{curElem.hub_city} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Useefft;
