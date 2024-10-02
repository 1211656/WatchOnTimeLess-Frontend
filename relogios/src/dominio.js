export class Usuario {
    constructor(nome, login, password,email) {
        this.nome = nome;
        this.login = login;
        this.email = email;
        this.password = password;
    }

    getNome() { return this.nome; }
    getEmail() { return this.email;}
    getLogin() { return this.login;}
    getPassword() { return this.password;}




}

export const admin = new Usuario("nome","1", "1", "@"); 
