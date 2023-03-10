import { Button } from "@mui/material";
import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RoomIcon from "@material-ui/icons/Room";
import CreateIcon from "@mui/icons-material/Create";

function Card({ Name, Description, Imageurl, date, TechStack, id }) {
  const url = "/project/" + id;

  return (
    <>
      <div className="bg-white w-72 shadow-lg rounded-lg cardmain">
        {/* <img
          src={Imageurl}
          alt=""
          className="w-full h-44 object-cover rounded-t-lg"
        /> */}
        <div className="px-6 py-3 sbody">
          <div className="bodypart">
            <div className="innnis">
              <h1
                className="font-bold text-[20px] stag"
                style={{ textDecoration: "none" }}
              >
                {Name}
              </h1>
              <p className="text-gray-800 pt-3 pb-2 dead">
                <CreateIcon />{" "}
                <span className="dedy">
                  {" "}
                  {new Date(date).getDate().toString() +
                    "/" +
                    (new Date(date).getMonth() + 1).toString() +
                    "/" +
                    new Date(date).getFullYear().toString()}
                </span>
              </p>
            </div>

            <div className="eligi">
              <h5>Small description :</h5>
              <h6>{Description[0] + "."}</h6>
            </div>
            <div className="desc">
              <h5>Tech-Stack want :</h5>
              <h6 className="pt-2 mb-5 text-[15px] text-gray-700">
                {TechStack.map((item, idx) => {
                  return (
                    <>
                      <span>
                        {item + (idx == TechStack.length - 1 ? "." : ", ")}
                      </span>
                    </>
                  );
                })}
              </h6>
            </div>
            <div className="buttforsc">
              <Link style={{ textDecoration: "none" }} to={url}>
                <button> View </button>
              </Link>
            </div>
            <div className="p-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
