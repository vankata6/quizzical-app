import Question from "./Question";
import { useNavigate } from "react-router-dom";

export default function Answers() {
    const navigate = useNavigate();

  return(
      <div>
          <Question/>
      </div>
  )
}