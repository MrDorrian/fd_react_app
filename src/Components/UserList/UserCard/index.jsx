function UserCard(props) {
  const {
    user: { id, firstName, lastName, url },
    isChecked,
  } = props;

  const style = {
    border: isChecked ? '4px solid' : undefined,
  };


  return (
    <article style={style}>
      <h1>
        Full Name: {firstName} {lastName}
      </h1>
      <p>ID: {id}</p>
      <img src={url} alt={firstName} />
      <button
        onClick={(e) => {
          switchCard();
        }}
      >
        Select
      </button>
    </article>
  );
}

export default UserCard;
