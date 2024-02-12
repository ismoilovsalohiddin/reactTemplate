import { useNavigate, useParams } from "react-router-dom";

export const useDetailProps = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const onSubmit = (e) =>{
    
  }

  return {
    id,
    navigate,
    onSubmit,
  };
};
