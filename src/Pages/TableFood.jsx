import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteFood, viewFood } from "../Components/FoodSlice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { LuView } from "react-icons/lu";
import { Bounce, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

export default function FoodTable() {
  const { foodList } = useSelector((state) => state.FoodList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewFood());
  });

  function trash(id) {
    
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to Delete This Product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          
        })
        dispatch(deleteFood(id));
      }else{
        Swal.fire({
          title: "Not Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }
  return (
    <>
      <div
        className="container mt-5 p-4 rounded-4 shadow-lg"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{
            color: "#1e3c72",
          }}
        >
          🍴 Food Orders
        </h2>

        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead
              className="text-white"
              style={{
                background: "linear-gradient(90deg, #1e3c72, #2a5298)",
              }}
            >
              <tr>
                <th>Customer Name</th>
                <th>Food Category</th>
                <th>Image</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delivery Address</th>
                <th>Instructions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {foodList.map((food) => (
                <tr key={food.id}>
                  <td>{food.customerName}</td>
                  <td>{food.foodCategory}</td>
                  <td>
                    <img
                      src={food.url}
                      alt={food.foodCategory}
                      style={{
                        width: "80px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </td>
                  <td>₹{food.price}</td>
                  <td>{food.quantity}</td>
                  <td>{food.deliveryAddress}</td>
                  <td>{food.Instructions || "-"}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className="fs-5 btn btn-danger"
                        onClick={() => trash(food.id)}
                      >
                        <AiFillDelete />
                      </button>
                      <NavLink
                        className="fs-5 btn btn-warning"
                        to={`/updatefood/${food.id}`}
                      >
                        <AiFillEdit />
                      </NavLink>
                      <NavLink
                        className="fs-5 btn btn-info"
                        to={`/viewfood/${food.id}`}
                      >
                        <LuView />
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-4">
          <NavLink
            to="/ordernow"
            className="btn btn-info rounded-pill px-5 py-2 shadow-sm fw-semibold"
          >
            Add New Order
          </NavLink>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </>
  );
}
