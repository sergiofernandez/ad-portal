import React from "react";
import { Link } from "react-router-dom";

import { Grid, GridCell, GridRow } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";
import { Button } from "@rmwc/button";

function AdDetailContent(props) {
  return (
    <Grid>
      <GridRow>
        <GridCell span={ 12 }>
          <Typography use="caption">Referencia: { props.id }</Typography>
        </GridCell>
        <GridCell span={ 12 }>
          <Typography use="caption">Puntuación: { props.score }/100</Typography>
        </GridCell>
        <GridCell span={ 12 }>
          <Typography use="headline4">{ props.type }</Typography>
        </GridCell>
        { props.description &&
        <GridCell span={ 12 }>
          <Typography use="body1">{ props.description }</Typography>
        </GridCell>
        }
        { props.size &&
        <GridCell span={ 12 }>
          <Typography use="body2">Tamaño: { props.size }</Typography>
        </GridCell>
        }
        { props.height &&
        <GridCell span={ 12 }>
          <Typography use="body2">Altura: { props.height }</Typography>
        </GridCell>
        }
        { props.km &&
        <GridCell span={ 12 }>
          <Typography use="body2">Km: { props.km }</Typography>
        </GridCell>
        }
        { props.color &&
        <GridCell span={ 12 }>
          <Typography use="body2">Color: { props.color }</Typography>
        </GridCell>
        }
        { props.fabricant &&
        <GridCell span={ 12 }>
          <Typography use="body2">Fabricante: { props.fabricant }</Typography>
        </GridCell>
        }
        <GridCell span={ 12 }>
          <Button label="Volver al listado de anuncios" tag={ Link } to={ `/` }/>
        </GridCell>
      </GridRow>
    </Grid>
  );
}

export default AdDetailContent;
