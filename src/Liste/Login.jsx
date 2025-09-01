function Login() {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Connexion</h1>
        <form>
          <div>
            <label>Nom d'utilisateur:</label>
            <input type="text" />
          </div>
          <div>
            <label>Mot de passe:</label>
            <input type="password" />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  