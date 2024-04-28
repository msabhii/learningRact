import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return <>User:{userid}</>;
};
export default User;
