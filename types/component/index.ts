export interface userToken {
  userId: string;
  iat: number;
}

export interface ActionBarLink {
  label: string;
  icon: any;
  value?: number;
  status: boolean;
}
