import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, viewFood } from "../Components/FoodSlice";
import { LuView } from "react-icons/lu";
import ToastContainer from "../utils/ToastContainer";

export default function ProductList() {
  let { foodList } = useSelector((state) => state.FoodList);

  let dispatch =  useDispatch()
  useEffect(()=> {
    dispatch(viewFood())
  },[])

  function trash(id){
    dispatch(deleteFood(id))
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

      <div className="container-fluid d-flex justify-content-center gap-5 flex-wrap mt-5">
        {foodList.map((food, index) => {
         return <div className="col-md-2 mb-4 " key={index}>
            <div className="card h-100 shadow-sm">
              <img
                className="card-img-top"
                src={food.url}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Name : {food.foodCategory}</h5> 
                <p className="card-text text-muted mb-2">Quantity : {food.quantity} </p>
                <span className="fw-bold mb-3">Price : ₹ {food.price}</span>
                <div className="mt-auto d-flex justify-content-start align-items-center">
                  <button className="fs-5 btn btn-danger" onClick={() => trash(food.id)}><AiFillDelete/></button>
                  <NavLink className="fs-5 btn btn-warning mx-4" to={`/updatefood/${food.id}`} ><AiFillEdit/></NavLink>
                  <NavLink className="fs-5 btn btn-info" to={`/viewfood/${food.id}`}><LuView/></NavLink>
                </div>
              </div>
            </div>
          </div>;
        })}
      </div>
      <ToastContainer/>
    </>
  );
}
