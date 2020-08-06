import React, { useState } from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import ProductListItem from "./ProductListItem";

function ProductList() {
  const [products] = useState([
      {
        id: 1, type: "CHALET", score: 60, images: [
          {
            "id": 4,
            "url": "https://lh3.googleusercontent.com/LeSa57xyAqiF_IlnidwRIXoNrN9j-nB0Xoe_L3iCsVsfleMc-q0aKLGzYznYXqRh_hwj8wmnQDQt99IEUGoCTnKhhCvc_R-Dz9Iz00M9BA",
            "quality": "HD"
          }
        ]
      },
      {
        id: 2, type: "PISO", score: 96, images: [
          {
            "id": 5,
            "url": "https://lh3.googleusercontent.com/BsxXJrp7yIPs5lS_jvQMGitJcTCeMF9EDf-Yhm-Nf9ZH3uZD-zN8y4aZNsz5WnyMJHn34nasVuE32GDas8Z1TjS9-fnu3mCRss9nwdE",
            "quality": "SD"
          }
        ]
      }
    ]
  );

  return (
    <Grid>
      <GridRow>
        { products.map(product =>
          <GridCell span={ 2 } key={ product.id }>
            <ProductListItem
              type={ product.type }
              score={ product.score }
              images={ product.images }
            />
          </GridCell>)
        }
      </GridRow>
    </Grid>
  );
}

export default ProductList;