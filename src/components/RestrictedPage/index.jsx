const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>Você não pode acessar a página!</h1>
          <button onClick={Login}>Entrar</button>
        </div>
      ) : (
        <div>
          <h1>Seja bem-vindo, {user}!</h1>
          <button onClick={Logout}>Sair</button>
        </div>
      )}
    </div>
  );
};

export default RestrictedPage;
