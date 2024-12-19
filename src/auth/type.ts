export type AuthUserType = null | Record<string, any>;

// ----------------------------------------------------------------------
export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthStateType = {
  status?: string;
  loading: boolean;
  user: AuthUserType;
  open?: boolean;
};

type CanRemove = {
  login?: (email: string, password: string) => Promise<void>;
  register?: (
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
};
// ----------------------------------------------------------------------
export type ContextType = CanRemove & {
  user: AuthUserType;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  // Drawer
  open: boolean;
  onToggle: VoidFunction;
  onClose: VoidFunction;
};
