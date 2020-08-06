import React from "react";
import { Card, CardMedia, CardPrimaryAction } from "@rmwc/card";
import { Typography } from "@rmwc/typography";

function ProductListItem(props) {
  return (
    <Card>
      <CardPrimaryAction>
        <CardMedia
          sixteenByNine
          style={ { backgroundImage: `url(${ props.images[0].url })` } }
        />
        <div style={ { padding: "0 1rem 1rem 1rem" } }>
          <Typography use="headline6" tag="h2">
            { props.type }
          </Typography>
          <Typography use="subtitle2" tag="h3" theme="textSecondaryOnBackground" style={ { marginTop: "-1rem" } }>
            Puntuación: { props.score }
          </Typography>
        </div>
      </CardPrimaryAction>
    </Card>
  );
}

export default ProductListItem;