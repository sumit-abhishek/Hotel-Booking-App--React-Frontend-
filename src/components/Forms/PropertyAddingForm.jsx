import React from "react";

const PropertyAddingForm = () => {
  return (
    <section class="add-property" id="add-property-id">
      <div class="add-property-form">
        <form class="adding-form" id="property-form">
          <div class="mb-3">
            <label for="hotelName" class="form-label">
              Hotel Name
            </label>
            <input type="text" class="form-control" id="hotelName" />
          </div>
          <div class="mb-3">
            <label for="hotelLocation" class="form-label">
              Hotel Location
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="hotelLocation"
            >
              <option selected disabled>
                Select Location
              </option>
              <option value="Lansdowne">Lansdowne</option>
              <option value="Kanatal">Kanatal</option>
              <option value="Mussorrie">Mussorrie</option>
              <option value="Harshil">Harshil</option>
              <option value="Chakrata">Chakrata</option>
              <option value="Chopta">Chopta</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="hotelDescription" class="form-label">
              Hotel Description
            </label>
            <textarea
              class="form-control"
              id="hotelDescription"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="hotelPrice" class="form-label">
              Hotel Price
            </label>
            <input type="number" class="form-control" id="hotelPrice" />
          </div>
          <div class="mb-3">
            <label for="hotelImg" class="form-label">
              Hotel Image
            </label>
            <input type="text" class="form-control" id="hotelImg" />
          </div>
          <label for="hotelFacilities" class="form-label">
            Hotel Facilites
          </label>
          <div class="hotel-facilites mb-3">
            <div class="form-check" id="checkedData">
              <input
                class="form-check-input"
                type="checkbox"
                name="popular-filter"
                value="freewifi"
                id="freewifi"
              />
              <label class="form-check-label" for="freewifi">
                {" "}
                Free Wifi{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="popular-filter"
                value="breakfast"
                id="breakfast"
              />
              <label class="form-check-label" for="breakfast">
                Breakfast
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="popular-filter"
                value="fittnessStudio"
                id="fitness"
              />
              <label class="form-check-label" for="fitness">
                Fitness Studio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="popular-filter"
                value="swimmingPool"
                id="swimming"
              />
              <label class="form-check-label" for="swimming">
                Swimming Pool
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="popular-filter"
                value="petsAllowed"
                id="pet"
              />
              <label class="form-check-label" for="pet">
                {" "}
                Pets Allowed{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="popular-filter"
                value="campsite"
                id="camp"
              />
              <label class="form-check-label" for="camp">
                Campsite
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="popular-filter"
                value="bonfire"
                id="bonfire"
              />
              <label class="form-check-label" for="bonfire">
                Bonfire
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="popular-filter"
                value="trekking"
                id="trek"
              />
              <label class="form-check-label" for="trek">
                Trekking
              </label>
            </div>
          </div>
          <button type="submit" id="addProperty" class="btn btn-primary">
            Add Property
          </button>
          <button type="submit" id="propertyEdit" class="btn btn-secondary">
            Edit Property
          </button>
        </form>
        <button
          id="form-close-button"
          type="button"
          form="property-form"
          class="btn btn-outline-danger"
          onclick="propertyFormCloseButton()"
        >
          <i class="fa-solid fa-rectangle-xmark"></i>
        </button>
      </div>
    </section>
  );
};

export default PropertyAddingForm;
