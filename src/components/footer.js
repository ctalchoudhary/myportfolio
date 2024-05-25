
function Footer(props) {
  return (
<footer className={`container-fluid text-center text-${props.switchText} bg-${props.mode}`}>
  <p>{props.text}</p>
</footer>
  );
}

export default Footer;
