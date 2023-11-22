import React from "react"
import "../styles/products.css"

function Products() {
  return (
    <div className="container">
      <div className="d-flex justify-content-end mt-2">
        <div className="d-flex">
          <p className="me-1 fw-normal fs-6">Hide Filters</p>
          <div>
            <i className="fa-solid fa-filter" style={{ color: "#0c0d0d" }}></i>
          </div>
        </div>
        <div className="d-flex">
          <p className="mx-2 fw-normal fs-6">Sort By</p>
          <div>
            <i
              className="fa-solid fa-arrow-down"
              style={{ color: "#050505" }}
            ></i>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap row-gap-4">
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-shoe-HWWX9W.png"
              className="img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Nike Air Force 1'07</h5>
              <p className="card-text text-secondary my-1">Men's Shoe</p>
              <p className="card-text text-secondary my-1">1 Colour</p>
              <p className="card-text">MRP: ₹ 8 195.00</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46196893-638f-4d14-bb06-12f57d5044e8/air-max-cirro-slides-96vclH.png"
              className="img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Nike Air Max Cirro</h5>
              <p className="card-text text-secondary my-1">Men's Slides</p>
              <p className="card-text text-secondary my-1">4 Colour</p>
              <p className="card-text">MRP: ₹ 3 695.00</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5742f317-d0c8-4d01-8a66-81d6f4bc73ca/sb-zoom-blazer-low-pro-gt-skate-shoes-ckWK6g.png"
              className="img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Nike Killshot 2 Leather</h5>
              <p className="card-text text-secondary my-1">Men's Shoe</p>
              <p className="card-text text-secondary my-1">2 Colour</p>
              <p className="card-text">MRP: ₹ 7 995.00</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ef66458b-6949-44e7-a35e-21818fc5d1e1/air-jordan-1-low-se-shoes-nvlTsP.png"
              className="img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Air Jordan 1 Low SE</h5>
              <p className="card-text text-secondary my-1">Men's Shoe</p>
              <p className="card-text text-secondary my-1">2 Colour</p>
              <p className="card-text">MRP: ₹ 10 295.00</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/air-force-1-07-easyon-shoes-LKXPhZ.png"
              className="img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Nike Air Force 1'07 EasyOn</h5>
              <p className="card-text text-secondary my-1">Men's Shoe</p>
              <p className="card-text text-secondary my-1">1 Colour</p>
              <p className="card-text">MRP: ₹ 9 695.00</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22dbb81f-bb9b-43a9-a854-cf1e4ca4a2c0/offcourt-adjust-slides-6L2C07.png"
              className="img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Nike Offcourt Adjust</h5>
              <p className="card-text text-secondary my-1 ms-0">Men's Shoe</p>
              <p className="card-text text-secondary my-1">2 Colour</p>
              <p className="card-text">MRP: ₹ 3 195.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
