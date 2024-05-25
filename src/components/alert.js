
function Alert(props) {
  return (
    props.alert && <div class="alert alert-primary" role="alert">
      <strong>{props.alert.type}: </strong> {props.alert.message}
    </div>
  );
}

export default Alert;
