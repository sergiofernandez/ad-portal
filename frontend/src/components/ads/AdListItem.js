import React from "react";
import { Link } from "react-router-dom";

import { Card, CardActionButton, CardActions, CardMedia, CardPrimaryAction } from "@rmwc/card";
import { Typography } from "@rmwc/typography";

function AdListItem(props) {
  return (
    <Card>
      <CardPrimaryAction>
        { props.images[0] ?
          <CardMedia
            sixteenByNine
            style={ { backgroundImage: `url(${ props.images[0].url })` } }
          />
          :
          <Typography use="headline4" style={ { textAlign: "center", padding: "1rem" } }>
            Sin imagen
          </Typography>
        }
        <div style={ { padding: "0 1rem 1rem 1rem" } }>
          <Typography use="headline6" tag="h2">
            { props.type }
          </Typography>
          <Typography use="subtitle2" tag="h3" theme="textSecondaryOnBackground" style={ { marginTop: "-1rem" } }>
            Puntuación: { props.score }/100
          </Typography>
          <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
            { props.description }
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions fullBleed>
        <CardActionButton label="Ver anuncio" trailingIcon="arrow_forward" tag={ Link } to={ `/ads/${ props.id }` }/>
      </CardActions>
    </Card>
  );
}

export default AdListItem;
