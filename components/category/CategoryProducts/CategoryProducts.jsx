/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import ProductBox from "../../ProductBox/ProductBox";
import ProductList from "../../ProductList/ProductList";

import cls from "./categoryProducts.module.scss";

const products = [{}, {}, {}, {}, {}, {}];

const CategoryProducts = ({ viewType }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const changePage = (e, pageNum) => {
    setPageNumber(pageNum);
  };

  return (
    <div className={cls.categoryProducts}>

      {products.length >= 1 ?

        <>
          {viewType === "grid" ? (
            <>
              <Grid container columnSpacing={3}>
                {products.map((product, idx) => (
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={idx}>
                    <ProductBox />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <>
              <Grid container columnSpacing={3}>
                {products.map((product, idx) => (
                  <Grid item xs={12} key={idx}>
                    <ProductList />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </>

        :

        <div className="empty">
  
          <img src="/imgs/empty/cart.png" alt="emptyImage" />
  
          <h6>No products found in this category!</h6>
  
        </div>  
    
      }

      {products.length >= 1 && (
        <div className={`${cls.pagination} pagination`}>
          <Pagination count={20} page={pageNumber} onChange={changePage} />
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
