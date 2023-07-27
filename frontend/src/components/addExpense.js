import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpense() {
    const [expname, setExpName] = useState("");
    const [category, setCategory] = useState("");
    const [doe, setDoe] = useState("");
    const [exp, setExp] = useState("");
    const [email,setEmail]= useState("");
  
  
    let cats = [
      { label: "Food", value: "food" },
      { label: "Travel", value: "travel" },
      { label: "Living Expense", value: "living expense" }
  ]
  
  // Using this function to update the state of fruit
  // whenever a new option is selected from the dropdown
  let handleCatChange = (e) => {
    setCategory(e.target.value)
  }


  let navigate=useNavigate();


  const handleChange = event => {
      const result = event.target.value.replace(/\D/g, '');
  
      setExp(result.toString());
    };
  
    const handleSubmit = (e) => {
        console.log(expname,email,category,doe,exp);
        fetch("http://localhost:5000/createExpense", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            expname,
            email,
            category,
            doe,
            exp,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "updated");
            if (data.status === "ok") {
              alert("updation Successful");
            } else {
              alert("Something went wrong");
            }
          });
          let path = `/`; 
          e.preventDefault();
          navigate(path);
         
    };
  
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Add Expense</h3>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                onChange={(e) => setExpName(e.target.value)}
              />
            </div>

            <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

            <div className="mb-3">
              <label>Category</label>
               <select onChange={handleCatChange}
               className="form-control"> 
               <option value="⬇️ Select a Expense ⬇️"> -- Select a Expense -- </option>
                     {/* Mapping through each fruit object in our fruits array
                   and returning an option element with the appropriate attributes / values.
                  */}
               {cats.map((category) => <option key= {category.label}value={category.value}>{category.label}</option>)}
             </select>
            </div>
            <div className="mb-3">
              <label>Date of Expense</label>
              <input type="date"
              onChange={e=>setDoe(e.target.value)}
              className="form-control">
              </input>
            </div>
            <div className="mb-3">
              <label>Expense</label>
              <input
                type="text"
                placeholder="Expense"
                className="form-control"
                value={exp.toString()}
                onChange={handleChange}
                />
            </div>
  
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              
            </div>
          </form>
        </div>
      </div>
      
    );
}
