import { useLocation } from "react-router-dom";
import "./Details.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Employee } from "../../redux/thunks/employeeThunk";
import { handleCheckout } from "../../utils/handleCheckout";

const Details = () => {
  const location = useLocation();

  const { image, first_name, last_name, description }: Employee =
    location.state.item;

  return (
    <>
      <Header />
      <div className="container">
        <div className="details">
          <div className="details__image-container">
            <img
              src={image}
              alt={`${first_name} ${last_name}`}
              className="details__image"
            />
          </div>
          <div className="details__info-container">
            <div className="details__name">
              <h2>{`${first_name} ${last_name}`}</h2>
            </div>
            <div className="details__content">
              <p className="details__experience">{description}</p>
            </div>
            <div className="details__buy-message">
              <p>
                You can order and pay for the services of this employee in a few
                clicks.
              </p>
            </div>
            <button className="details__buy-button" onClick={handleCheckout}>
              Pay for services
            </button>
          </div>
        </div>
        <div className="benefits">
          <div className="benefits__title">
            <span>OUR BENEFITS</span>
          </div>
          <div className="benefits__body">
            <p>
              <span className="benefits__subtitle">
                Expertise in Equine Care:
              </span>{" "}
              Our master has a wealth of experience and expertise in the
              comprehensive care of horses. From nutrition and health monitoring
              to grooming and exercise routines, our master is well-versed in
              providing top-notch care to ensure the well-being and happiness of
              your horse.
            </p>
            <p>
              <span className="benefits__subtitle">Personalized Approach:</span>{" "}
              We understand that each horse is unique, and our master takes a
              personalized approach to meet the specific needs and preferences
              of every horse. Whether your horse requires specialized dietary
              plans, particular grooming techniques, or specific training
              methods, our master tailors their care to ensure the best possible
              outcome for your equine companion.
            </p>
            <p>
              <span className="benefits__subtitle">
                Commitment to Health and Wellness:
              </span>{" "}
              Our master is dedicated to maintaining the optimal health and
              wellness of every horse. Regular veterinary check-ups, preventive
              care measures, and a keen eye for early signs of discomfort or
              health issues are integral parts of our care philosophy. We
              believe in proactive measures to keep your horse in excellent
              condition.
            </p>
            <p>
              <span className="benefits__subtitle">Passion for Horses:</span>{" "}
              Our master doesn't just see horse care as a job; it's a true
              passion. This genuine love for horses translates into exceptional
              care and attention. From daily interactions to special training
              sessions, our master's passion fosters a positive and nurturing
              environment that your horse will thrive in.
            </p>
            <p>
              <span className="benefits__subtitle">
                Excellent Track Record:
              </span>
              We take pride in our master's proven track record of success in
              equine care. Satisfied clients, healthy and happy horses, and a
              history of positive outcomes speak to the quality of our services.
              Choosing our master means entrusting your horse to someone with a
              demonstrated commitment to excellence in equine care.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
