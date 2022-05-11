import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import "../css/allUsers.css"
import { usersDeleted } from "../Redux/action";
function All_User(props) {
    let Users = props.users
    const dispatch = useDispatch()
    const handelDeleted = (id) => {
        if (window.confirm('are you sure wanted to delete the user ?')) {
            dispatch(usersDeleted(id))
        }
    }
    return (
        <div>

            <div className="mb-3">
                <div className="card">
                    <img src={Users.imageHeager} alt="Cover" className="card-img-top" />
                    <div className="card-body text-center">
                        <img src={Users.imageAvatar} style={{ width: 100 + 'px', margintop: -65 + 'px' }} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
                        <h5 className="card-title">{Users.name} </h5>
                        <p className="text-secondary mb-1">{Users.phone}</p>
                        <p className="text-muted font-size-sm">{Users.email}</p>
                    </div>
                    <div className="card-footer justify-content-center">
                        <ul className="list-inline mb-4">
                            <li className="list-inline-item">
                                <Link to={'/edite_User/' + Users.id}>
                                    <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" onClick={() => handelDeleted(Users.id)} title="Delete"><i className="fa fa-trash"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default All_User