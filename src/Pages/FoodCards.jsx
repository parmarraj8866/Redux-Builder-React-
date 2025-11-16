import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { LuView } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, viewFood } from "../Components/FoodSlice";
import Swal from "sweetalert2";

export default function ProductList() {
  const { foodList } = useSelector((state) => state.FoodList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewFood());
  }, []);

  function trash(id) {
    Swal.fire({
      title: "Do You Want to Delete This Food?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Food removed successfully.",
          icon: "success",
        });
        dispatch(deleteFood(id));
      }
    });
  }

  return (
    <>
      <div className="text-center mt-5">
        <NavLink
          className="btn btn-primary border-0 fs-5 px-4 py-2"
          style={{ backgroundColor: "#f76a05ff" }}
          to="/ordernow"
        >
          Order Now
        </NavLink>
      </div>

      <div className="container mt-5">
        <div className="row g-4">
          {foodList && foodList.length > 0 ? (
            foodList.map((food, i) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                <div className="card h-100 shadow-sm">

                  <img
                    className="card-img-top"
                    src={food.url}
                    alt="Food"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Name: {food.foodCategory}</h5>
                    <p className="text-muted mb-1">Quantity: {food.quantity}</p>
                    <p className="fw-bold mb-3">Price: ₹{food.price}</p>

                    <div className="mt-auto d-flex gap-2">
                      <button
                        className="btn btn-danger fs-5"
                        onClick={() => trash(food.id)}
                      >
                        <AiFillDelete />
                      </button>

                      <NavLink
                        className="btn btn-warning fs-5"
                        to={`/updatefood/${food.id}`}
                      >
                        <AiFillEdit />
                      </NavLink>

                      <NavLink
                        className="btn btn-info fs-5"
                        to={`/viewfood/${food.id}`}
                      >
                        <LuView />
                      </NavLink>
                    </div>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center">No food items available.</h3>
          )}
        </div>
      </div>
    </>
  );
}
