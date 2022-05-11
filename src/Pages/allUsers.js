import React, { useEffect } from "react";
import All_User from "../Components/allUsers";
import { useDispatch, useSelector } from "react-redux"
import { loadUsers } from "../Redux/action";
import { Link } from "react-router-dom";
function All_Users() {
    const { users } = useSelector((state) => state.users)
    const { looding } = useSelector((state) => state.looding)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsers()) 
    }, [])
    let sum = 0;
    return (
        looding === true ?
            <div className="mt-4 pt-4">
                <h1>Looding....</h1>
                <h4>Please start the json server by typing the <b>'npm run server'</b> instruction, adding that the <b>'npm start'</b> instruction</h4>
                <h5>Note: Both instructions must be written together.....</h5>
            </div> : (
                <div>
                    <div className="container"> 
                        <div className="main-body">
                            <h2 className="mb-4 ">You have {sum = users.length} users in this app</h2>
                            <Link to={'/add_user'}>
                                <button className="btn btn-info my-2 px-3">Add New User</button>
                            </Link>
                            <div className="row mt-2 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
                                {users.map((Users, index) =>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <All_User users={Users} key={index} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div >)
    )
}
export default All_Users