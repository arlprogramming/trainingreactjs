import React from "react";

const DataNba = (nba) => {
  //   const { name, says } = nba;
  return (
    <div>
      <h3>{`${nba.key} Name player : ${nba.name} and He says : ${nba.says}`}</h3>
    </div>
  );
};

export default DataNba;
