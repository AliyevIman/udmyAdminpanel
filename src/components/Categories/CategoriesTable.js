import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { courseDelete } from "../../Redux/Actions/CategoryActions";

const CategoriesTable = ({categories}) => {
  const   {category} = categories
  const dispatch = useDispatch()
  const deleteHandler=(id)=>{
    let result = window.confirm("Are you sure?")
    if(result){
     dispatch(courseDelete(id))
    }
  }
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Category</th>
            <th>Parent Category</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {categories?.map((category,i)=>(
            <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>{i+1}</td>
            <td>
              <b>{category.name}</b>
            </td>
            <td>
              <b>{category.parentName ?? "-"}</b>
            </td>
            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link to={`/category/edit/${category.categoryId}`} className="dropdown-item" >
                    Edit info
                  </Link>
                  <Link
                  onClick={()=>deleteHandler(category.categoryId)}
                  className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          ))}
          
     
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
