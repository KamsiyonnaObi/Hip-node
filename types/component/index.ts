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

export interface interviewData {
  _id: string;
  title: string;
  desc: string;
  userId: { username: any; _id: { toString: () => string | undefined } };
  createdAt: Date;
  image: string;
  revenue: number;
  updates: number;
  website: string;
  tags: string[];
}
