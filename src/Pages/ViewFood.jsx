import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ViewFood() {
  const { foodList } = useSelector((state) => state.FoodList);
  const { id } = useParams();

  // Safe check (foodList loaded + item exists)
  const newArr = foodList?.find((food) => food.id == id);

  return (
    <>
      <div className="text-center mt-5">
        <NavLink
          className="btn btn-primary rounded-4 border-0 fs-5 px-4 py-2"
          style={{ backgroundColor: "#f7bb05ff" }}
          to="/ordernow"
        >
          Order Now
        </NavLink>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          
          {/* If item not found */}
          {!newArr ? (
            <h3 className="text-center text-danger">Food not found!</h3>
          ) : (
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">

              <div className="card shadow-lg rounded-4">
                
                <img
                  className="card-img-top rounded-top-4"
                  src={newArr.url}
                  alt="Food"
                  style={{ height: "260px", objectFit: "cover" }}
                />

                <div className="card-body">

                  <h4 className="fw-bold">{newArr.foodCategory}</h4>

                  <p className="text-muted mb-1">
                    Quantity: {newArr.quantity}
                  </p>

                  <p className="fw-bold fs-5">Price: ₹ {newArr.price}</p>

                  <div className="d-flex justify-content-between mt-4">
                    <NavLink to="/" className="btn btn-dark px-4">
                      Back
                    </NavLink>
                  </div>

                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </>
  );
}
