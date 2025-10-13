import { useForm } from "react-hook-form";
import foodCategories from "../utils/FoodData";
import {useDispatch, useSelector} from 'react-redux'
import { createFood, updateFood } from "../Components/FoodSlice";
import { NavLink, useNavigate } from "react-router-dom";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import Success from "../utils/Toast";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";




export default function CreateForm() {
  const { register, handleSubmit, reset } = useForm();
  let {foodList}= useSelector((state) => state.FoodList)
  
  let {id} = useParams()
  
  let updateData = foodList.find((food)=> food.id == id)

  let dispatch = useDispatch()
  let redirect = useNavigate()

  useEffect(()=> {
    reset(updateData)
  }, [id])

  function addForm(data) {
    if(id == null){
      dispatch(createFood(data))
      reset()
      redirect("/")
      Success("Order SuccessFully!")
    }else{
      dispatch(updateFood(data))
      reset(data)
      redirect("/")
      Success("Product Update SuccessFully!")
    }
  }


  return (
    <>
      <form
        className="container mt-5 shadow-lg p-5 w-50"
        method="post"
        onSubmit={handleSubmit(addForm)}
      >
        <h2 className="text-center text-primary mb-5">🍽️ Order Food</h2>

        <div className="mb-4 ">
          <input
            type="text"
            {...register("customerName", { required: true })}
            className="form-control"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="mb-4">
          <select
            {...register("foodCategory", { required: true })}
            className="form-select"
            defaultValue=""
          >
            <option value="" disabled>
              --Select Food--
            </option>
            {foodCategories.map((food) => (
              <option key={food} value={food}>
                {food}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <input
            type="url"
            {...register("url")}
            className="form-control"
            placeholder="Enter URL"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            {...register("price", { required: true, min: 1 })}
            className="form-control"
            placeholder="Enter Price"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            {...register("quantity", { required: true, min: 1 })}
            className="form-control"
            placeholder="Enter Quantity"
          />
        </div>

        <div className="mb-4">
          <textarea
            {...register("deliveryAddress", { required: true })}
            className="form-control"
            placeholder="Enter Delivery Address"
            rows={3}
          ></textarea>
        </div>

        <div className="mb-4">
          <textarea
            {...register("Instructions")}
            className="form-control"
            placeholder="Any Special Instructions?"
            rows={2}
          ></textarea>
        </div>

        <button type="submit"  className="btn btn-primary px-4 fs-6">
          Order
        </button>
        <NavLink className='btn btn-dark mx-2 px-4 fs-56' to="/">Back</NavLink>

      </form>
    </>
  );
}
