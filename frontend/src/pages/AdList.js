import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ADS } from "../queries/GetAds";

import { Grid, GridCell, GridRow } from "@rmwc/grid";

import AdListItem from "../components/ads/AdListItem";
import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";
import NotFound from "../components/shared/NotFound";

function AdList() {
  const { data, loading, error } = useQuery(GET_ADS);

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
        { data.ads.map(ad =>
          <GridCell span={ 2 } key={ ad.id }>
            <AdListItem
              id={ ad.id }
              type={ ad.type }
              score={ ad.score }
              images={ ad.images }
              description={ ad.description }
            />
          </GridCell>)
        }
      </GridRow>
    </Grid>
  );
}

export default AdList;
