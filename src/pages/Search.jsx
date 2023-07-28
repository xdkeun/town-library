
import { useParams } from "react-router-dom";
function Search(){
  const { search } = useParams();
  return (
    <div>{search}</div>
  )
}
export default Search;