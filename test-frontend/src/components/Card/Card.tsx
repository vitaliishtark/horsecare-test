import { FC, MouseEventHandler } from "react";
import "./Card.scss";
import { Employee } from "../../redux/thunks/employeeThunk";

interface IProps {
  employee: Employee;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const Card: FC<IProps> = ({ employee, onButtonClick }) => {
  const { image, first_name, last_name } = employee;
  return (
    <div className="card">
      <img src={image} alt={first_name} className="card__image" />
      <div className="card__content">
        <h2 className="card__name">
          {first_name} {last_name}
        </h2>
        <button className="card__button" onClick={onButtonClick}>
          <span className="card__button__text">Get Info</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
