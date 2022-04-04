export interface AppUser {
  email?: string;
  username?: string;
  id?: string;
}

export function createUser(user?: any) {
  return {
    email: user?.email,
    id: user?.uid,
  } as AppUser;
}

export interface Session {
  token: string;
  user: AppUser;
}

export function createSession(params?: Partial<Session>) {
  return {
    token: params?.token,
    user: createUser(params?.user),
  } as Session;
}
