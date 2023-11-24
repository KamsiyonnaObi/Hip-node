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

export interface commentDataType {
  name: string;
  createdAt: string;
  updatedAt: string;
  imgUrl: string;
  text: string;
  reply: {
    name: string;
    createdAt: string;
    updatedAt: string;
    imgUrl: string;
    text: string;
  }[];
}
