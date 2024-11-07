import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from '../store/store';


interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    const { id } = useParams();
  const navigate = useNavigate();
  const { floors  } = useSelector((state: RootState) => state.floor);

  useEffect(() => {
    const index = Number(id) ;
    if (!floors[index]) {
      navigate('/forbidden');
    }
  }, []);
  return <div className="ProtectedRoute">{component}</div>;
};

export default PrivateRoute