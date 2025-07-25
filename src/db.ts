export type User = {
  login: string;
  password: string;
};

const users: User[] = [
  { login: 'test', password: '111' },
];

export function checkUser(login: string, password: string): boolean {
  return users.some(u => u.login === login && u.password === password);
}
