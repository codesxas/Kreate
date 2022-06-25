import React from "react";
import * as _ from "lodash";

import Tile from "./Tile";

function Grid() {
  var arr: any = _.range(15).map((item: any, index: number) => item);

  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-4 mx-5">
      {arr.map((item: any, index: number) => (
        <div className="col" key={index}>
          <Tile />
        </div>
      ))}
    </div>
  );
}

export default Grid;
