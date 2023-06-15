import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person ms-3">
            <img src={image} alt={name} />
            <div>
              <h4 className="text-success">{name}</h4>
              <p className="fw-bold">{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
