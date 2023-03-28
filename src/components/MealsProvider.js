import React, { useState, createContext } from "react";

const todaysMeals = [
  { id: 1, name: "Baked Beans", ticked: false },
  { id: 2, name: "Baked Sweet Potatoes", ticked: false },
  { id: 3, name: "Baked Potatoes", ticked: false },
];

export const MealsContext = createContext();

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const tickMeal = (id) => {
    const updatedMeals = meals.map((meal) => {
      if (meal.id === id) {
        return { ...meal, ticked: !meal.ticked };
      } else {
        return meal;
      }
    });
    setMeals(updatedMeals);
  };

  return (
    <MealsContext.Provider value={{ meals, tickMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
