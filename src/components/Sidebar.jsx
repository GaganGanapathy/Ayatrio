import React from "react"
import "../styles/sidebar.css"

function Sidebar() {
  return (
    <div className="mt-2">
      <span className="ms-3 text-dark fw-medium">Men's Shoes (503)</span>
      <div className="mt-3">
        <ul className="nav flex-column fw-medium row-gap-0 pb-4">
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Lifestyle
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Jordan
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Running
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Basketball
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Football
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Training & Gym
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Skateboaring
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Golf
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Tennis
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Athletics
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="nav-link text-dark  py-0" href="#">
              Walking
            </a>
          </li>
        </ul>
      </div>
      <hr className="mx-3 text-secondary" />
      <div>
        {/* Gender */}
        <div className="accordion" id="gender">
          <div className="accordion-item">
            <h2 className="accordion-header " id="button">
              <button
                className="accordion-button text-dark bg-white fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#genderTab"
                aria-expanded="true"
                aria-controls="genderTab"
              >
                Gender(1)
              </button>
            </h2>
            <div
              id="genderTab"
              className="accordion-collapse collapse show border-shadow"
              data-bs-parent="#gender"
            >
              <div className="accordion-body pt-0">
                <div className="form-check">
                  <input
                    className="form-check-input check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Men
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Women
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Unisex
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-3 text-secondary" />
        {/* Price */}
        <div className="accordion" id="price">
          <div className="accordion-item">
            <h2 className="accordion-header " id="button">
              <button
                className="accordion-button text-dark bg-white fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#priceTab"
                aria-expanded="true"
                aria-controls="priceTab"
              >
                Shop By Price
              </button>
            </h2>
            <div
              id="priceTab"
              className="accordion-collapse collapse show border-shadow"
              data-bs-parent="#price"
            >
              <div className="accordion-body pt-0">
                <div className="form-check">
                  <input
                    className="form-check-input check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Under ₹ 2 500.00
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    ₹ 2 500.00 - ₹ 7 500.00
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    ₹ 7 501.00 - ₹ 12 999.00
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Over ₹ 13 000.00
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-3 text-secondary" />
        {/* Sale */}
        <div className="accordion" id="sale">
          <div className="accordion-item">
            <h2 className="accordion-header " id="button">
              <button
                className="accordion-button text-dark bg-white fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#saleTab"
                aria-expanded="true"
                aria-controls="saleTab"
              >
                Sale & Offers
              </button>
            </h2>
            <div
              id="saleTab"
              className="accordion-collapse collapse show border-shadow"
              data-bs-parent="#sale"
            >
              <div className="accordion-body pt-0">
                <div className="form-check">
                  <input
                    className="form-check-input check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Sale
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-3 text-secondary" />
        {/* Size */}
        <div className="accordion" id="size">
          <div className="accordion-item">
            <h2 className="accordion-header " id="button">
              <button
                className="accordion-button text-dark bg-white fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sizeTab"
                aria-expanded="true"
                aria-controls="sizeTab"
              >
                Size
              </button>
            </h2>
            <div
              id="sizeTab"
              className="accordion-collapse collapse show border-shadow"
              data-bs-parent="#size"
            >
              <div className="accordion-body pt-0">
                <div className="d-flex flex-wrap row-gap-2">
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-1"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-1"
                    >
                      1.5
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-2"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-2"
                    >
                      2
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-3"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-3"
                    >
                      2.5
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-4"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-4"
                    >
                      3
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-5"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-5"
                    >
                      3.5
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-6"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-6"
                    >
                      4
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-7"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-7"
                    >
                      4.5
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-8"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-8"
                    >
                      5
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btn-check-9"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="btn-check-9"
                    >
                      5.5
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
