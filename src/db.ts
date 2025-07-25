export type User = {
  login: string;
  password: string;
};

export const users: User[] = [
  { login: 'test', password: '111' },
];

export function checkUser(login: string, password: string): boolean {
  return users.some(u => u.login === login && u.password === password);
}

export function addUser(login: string, password: string) {
  users.push({ login, password });
}
