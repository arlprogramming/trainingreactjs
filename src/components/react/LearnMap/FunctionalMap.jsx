import React from "react";
import DataNba from "./props";

const FunctionalMap = () => {
  //   const dataNew = ["Lebron", "James", "Lakers"];
  const data = [
    { id: 1, name: "Lebron", says: "NBA" },
    { id: 2, name: "CURRY", says: "NBA" },
    { id: 3, name: "JORDAN", says: "NBA" },
  ];

  return (
    <div>
      {data.map((dataMap) => (
        // console.log(name, says);
        <div>
          <h3>{`${dataMap.key} Name player : ${dataMap.name} and He says : ${dataMap.says}`}</h3>
        </div>
        //ini kalau menggunakan props
        //<DataNba key={dataMap.id} name={dataMap.name} says={dataMap.says} />
      ))}
    </div>
  );
};

export default FunctionalMap;
