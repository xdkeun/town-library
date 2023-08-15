import { useLocation } from "react-router-dom";
function OrderComplete() {
  const location = useLocation();
  const book = location.state.book;
  return (
    <div>
      <p>{book.title}</p>
    </div>
  );
}
export default OrderComplete;
