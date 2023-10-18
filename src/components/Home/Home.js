import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {getMeal} from "../../store/theMealSlice"

const Home = () => {
  const { meal } = useSelector((state) => state.theMeal);
  const [input, setInput] = useState("");
  const dispatch=useDispatch()
  const handeSubmit = (e) => {
    e.preventDefault()
    dispatch(getMeal(input))
  };
  return (
    <div>
      <form onSubmit={handeSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" >Search</button>
      </form>
      <div className="content">
        {meal &&
          meal.map((elem, i) => {
            return (
              <div key={i} className="card">
                <div className="img">
                  <img src={elem.strMealThumb} alt="" />
                </div>
                <p>{elem.strMeal}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
