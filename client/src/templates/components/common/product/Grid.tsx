import * as _ from "lodash";
import { useContext } from "react";
import { ImageContext } from "../../../../helpers";

import Tile from "./Tile";

function Grid() {
  // var arr: any = _.range(15).map((item: any, index: number) => item);
  const images = useContext(ImageContext);

  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-4 grid">
      {images.map((item: any, index: number) => (
        <div className="col" key={index}>
          <Tile {...item} />
        </div>
      ))}
    </div>
  );
}

export default Grid;
