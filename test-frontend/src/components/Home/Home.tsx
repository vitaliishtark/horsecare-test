// Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { fetchEmployees } from "../../redux/thunks/employeeThunk";
import Header from "../Header/Header";
import "./Home.scss";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.employees);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const filteredEmployees = users.filter(
    (employee) =>
      employee.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="mainContainer__banner">
          <span className="mainContainer__title">
            THE PLACE TO FIND & OFFER SERVICES AROUND HORSES!
          </span>
        </div>
        <div className="serviceSection">
          <div>
            <span className="serviceSection__title">
              LOOKING FOR A SERVICE?
            </span>
            <p className="serviceSection__subtitle">
              EVERYTHING YOU NEED IS HERE
            </p>

            <p className="serviceSection__text">
              From farrier, grooms, stables, ... to trainers and horses to ride,
              every service you could possibly need is here!
            </p>
            <p className="serviceSection__text">
              Our platform dedicated to horses and their well-being is very easy
              to use: perform a simple search with your criteria and find the
              best services close to you.
            </p>
          </div>
          <div>
            <span className="serviceSection__title">OFFERING A SERVICE?</span>
            <p className="serviceSection__subtitle">EASILY LIST YOUR OFFERS</p>
            <p className="serviceSection__text">
              Whether your are a professional of the equestrian world or someone
              offering help, listing your services here is easy and very
              efficient.
            </p>
            <p className="serviceSection__text">
              Create and publish your ads with a few clicks, and instantly get
              contacted by new client prospects near you!
            </p>
          </div>
        </div>
        <div className="employeesSection">
          <div className="employeesSection__title">
            <span>OUR EMPLOYEES</span>
          </div>
          <div className="employeesSection__search-container">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {filteredEmployees.length > 0 ? (
            <div className="employeesSection__cards">
              {filteredEmployees.map((item) => (
                <Card
                  key={item.id}
                  employee={item}
                  onButtonClick={() =>
                    navigate(`/details/${item.id}`, { state: { item } })
                  }
                />
              ))}
            </div>
          ) : (
            <div className="employeesSection__no-results">
              No results found.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
