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
  commentedDate: string;
  lastEditDate: string;
  imgUrl: string;
  comment: string;
  reply: {
    name: string;
    commentedDate: string;
    lastEditDate: string;
    imgUrl: string;
    comment: string;
  }[];
}
