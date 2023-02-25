import Comments from "../comments/Comments";
import "./recherche.css";

const Recherche = ({ trump }) => {
  rech(formJson);
  return (
    <div className="recherche">
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>
        <hr />

        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
      <h1>recherche</h1>
      <Comments trump={trump} />
    </div>
  );
};

export default Recherche;

function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  console.log("form=", form);
  const formData = new FormData(form);
  console.log("formData=", formData);

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
  console.log(formJson.myInput);
}

const rech = (formJson) => {
  console.log(formJson);
};
