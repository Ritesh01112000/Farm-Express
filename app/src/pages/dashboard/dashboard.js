import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Dialogue from "../machineDetails/dialogue";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllMachines } from "../../action/machines";
import './dashboard.css'

const Home =()=> {
 
  const navigate= useNavigate()
 const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
           dispatch(getAllMachines(),navigate)
  
     } catch (error) {
        console.error('Error fetching machines', error);
      }
    }
    fetchData();
  }, []);

    return (
      <div>
        <Navbar />
 
        <div className="">
          <div className="">
            <div className="row">
              <div className="col">
                <div className="container">
                  <span>
                    <h3 className="pt-5 text-center mt-4">
                      <b>
                        Discover every machine  you need <br />
                        to plan your Farm
                      </b>
                    </h3>
                    <br />
                    <p className="text-center">
                      Search over 1,000 local professionals with reviews,
                      <br /> pricing, and more
                    </p>
                    <br/>
                      <p className="text-center">

                    Empowering Farmers, Enabling Growth: Experience the future of farming with <b style={{color:"#dc3545"}}>FarmEXPRESS</b>. Effortless, Efficient, and Environmentally Friendly.
                    </p>
                  </span>

                  <br />
                  <br />
                  {/* <div className="shadow  bg-white rounded input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for"
                      aria-label="Search for"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-danger p-3   rounded"
                      type="button"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="col-sm">
                <img
                  src="assets/Harvester.png"
                  className="img-fluid float-right  text-right  "
                  style={{ float: "right", MarginLeft: "20vh" }}
                ></img>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-danger text-light d-flex justify-content-between ">
          <div className="container ">
            <div className="d-flex justify-content-between align-items-center p-5">
              <h3 className="">Rent Machinery From FarmExpress</h3>

              <div className="input-group news-input">
               <Link to='/selectoptions'>
                 <button  
                  className="btn btn-light btn-lg align-items-right"
                  type="button"
                  >
                    Click Here
                 </button>
              
                </Link>
              </div>
              
          </div>
            </div>
            {/* <div className="float-right">
              <img src="assets/farmsvg.gif" className="img-gif"/>          
            </div> */}
        </section>

      
      </div>
    );
  }

export default Home;
