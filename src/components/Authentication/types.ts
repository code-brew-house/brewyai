interface Authority {
  authority: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  enabled: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  authorities: Authority[];
}
