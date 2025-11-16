import { useForm } from "react-hook-form";
import foodCategories from "../utils/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { createFood, updateFood } from "../Components/FoodSlice";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Success from "../utils/Toast";
import { ToastContainer } from "react-toastify";

export default function CreateForm() {
  const { register, handleSubmit, reset } = useForm();
  const { foodList } = useSelector((state) => state.FoodList);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // Update mode data
  const updateData = foodList?.find((food) => food.id == id);

  useEffect(() => {
    if (id && updateData) {
      reset(updateData);
    }
  }, [id, updateData]);

  function addForm(data) {
    if (!id) {
      // Create Mode
      dispatch(createFood(data));
      reset();
      Success("Order Successfully Placed!");
    } else {
      // Update Mode
      dispatch(updateFood({ ...data, id }));
      Success("Food Updated Successfully!");
    }

    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  return (
    <>
      <ToastContainer />
<section className="mx-2">
      <form
        className="container mt-5 shadow-lg p-4 p-md-5 rounded-4"
        method="post"
        onSubmit={handleSubmit(addForm)}
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center text-primary mb-4">
          🍽️ {id ? "Update Food" : "Order Food"}
        </h2>

        {/* Customer Name */}
        <div className="mb-3">
          <label className="mb-1 fw-bold">Customer Name:</label>
          <input
            type="text"
            {...register("customerName", { required: true })}
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        {/* Food Category */}
        <div className="mb-3">
          <label className="mb-1 fw-bold">Select Food:</label>
          <select
            {...register("foodCategory", { required: true })}
            className="form-select"
            defaultValue=""
          >
            <option value="" disabled>
              -- Select Food --
            </option>
            {foodCategories.map((food) => (
              <option key={food} value={food}>
                {food}
              </option>
            ))}
          </select>
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="mb-1 fw-bold">Food Image URL:</label>
          <input
            type="url"
            {...register("url")}
            className="form-control"
            placeholder="Enter food image URL"
          />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="mb-1 fw-bold">Food Price:</label>
          <input
            type="number"
            {...register("price", { required: true, min: 1 })}
            className="form-control"
            placeholder="Enter price"
          />
        </div>

        {/* Quantity */}
        <div className="mb-3">
          <label className="mb-1 fw-bold">Food Quantity:</label>
          <input
            type="number"
            {...register("quantity", { required: true, min: 1 })}
            className="form-control"
            placeholder="Enter quantity"
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="mb-1 fw-bold">Delivery Address:</label>
          <textarea
            {...register("deliveryAddress", { required: true })}
            className="form-control"
            rows={3}
            placeholder="Enter delivery address"
          ></textarea>
        </div>

        {/* Instructions */}
        <div className="mb-3">
          <label className="mb-1 fw-bold">Instructions:</label>
          <textarea
            {...register("Instructions")}
            className="form-control"
            rows={2}
            placeholder="Any special instructions?"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="mt-4 d-flex gap-3">
          <button type="submit" className="btn btn-primary px-4 fs-6">
            {id ? "Update" : "Order"}
          </button>

          <NavLink className="btn btn-dark px-4 fs-6" to="/">
            Back
          </NavLink>
        </div>
      </form>
      </section>
    </>
  );
}
