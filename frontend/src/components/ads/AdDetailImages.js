import React from "react";

import { GridList, GridTile, GridTilePrimary, GridTilePrimaryContent } from "@rmwc/grid-list";
import { Typography } from "@rmwc/typography";

function AdDetailImages(props) {
  return (<>
    { props.images.length > 0 ?
      <GridList tileAspect={ "16x9" }>
        { props.images.map(image =>
          <GridTile key={ image.id }>
            <GridTilePrimary>
              <GridTilePrimaryContent src={ image.url }/>
            </GridTilePrimary>
          </GridTile>)
        }
      </GridList>
      : <Typography use="headline5">(Sin imágenes)</Typography> }
  </>);
}

export default AdDetailImages;
