
export default class User {
    fullnameKey="fullname";
    tokenKey="auth-token";

    setCredential(token: string, fullname: string): void {
        window.localStorage.setItem(this.tokenKey, token);
        window.localStorage.setItem(this.fullnameKey, fullname);
    }

    removeCredential(): void {
        window.localStorage.removeItem(this.tokenKey);
        window.localStorage.removeItem(this.fullnameKey);
    }

    getToken(): string {
        const token = window.localStorage.getItem(this.tokenKey) as string;

        return token;
    }

    getFullname(): string {
        const fullname = window.localStorage.getItem(this.fullnameKey) as string;

        return fullname;
    }
}