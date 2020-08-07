import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AD } from "../queries/GetAd";

import { Grid, GridCell, GridRow } from "@rmwc/grid";

import AdDetailImages from "../components/ads/AdDetailImages";
import AdDetailContent from "../components/ads/AdDetailContent";
import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";
import NotFound from "../components/shared/NotFound";

function AdDetail() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_AD(id));

  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <Error message={ error.message }/>;
  }
  if (!data) {
    return <NotFound/>;
  }

  return (
    <Grid>
      <GridRow>
        <GridCell span={ 4 }>
          <AdDetailContent
            id={ data.ad.id }
            score={ data.ad.score }
            type={ data.ad.type }
            description={ data.ad.description }
            size={ data.ad.size }
            height={ data.ad.height }
            km={ data.ad.km }
            color={ data.ad.color }
            fabricant={ data.ad.fabricant }
          />
        </GridCell>
        <GridCell span={ 8 }>
          <AdDetailImages images={ data.ad.images }/>
        </GridCell>
      </GridRow>
    </Grid>
  );
}

export default AdDetail;
