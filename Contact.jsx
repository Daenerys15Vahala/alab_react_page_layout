function Contact(props) {
  return (
    <>
      <div className="contact_info">
        <h4>{props.conTitle}</h4>
        <p>{props.conNumber}</p>
      </div>
    </>
  );
}

export default Contact;