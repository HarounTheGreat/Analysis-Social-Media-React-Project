import trump from "../data/data";
import "../component/comment.css";
function Comment() {
  console.log(trump[0].comment);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="Comment">
      <h1>Haroun The Great</h1>
      <div class="flex-container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
      </div>
      <div className="comm">
        <Tabb trump_object={trump} />
        gfddf
      </div>
    </div>
  );
}
export default Comment;

const Tabb = ({ trump_object }) => {
  console.log(trump_object);
  const matList = trump_object.map((line) => (
    <div className="box">
      <div className="box_element">{line.N}</div>
      <div className="box_element">{line.comment}</div>
    </div>
  ));
  return <div className="card">{matList}</div>;
};
