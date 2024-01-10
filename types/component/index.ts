export interface userToken {
  userId: string;
  iat: number;
}

export interface userProfileData {
  _id: string;
  username: string;
  email: string;
  profileImage: string;
  bannerImage: string;
  occupation: string;
  followers: [];
  following: [];
  points: number;
  bio: string;
  website: string;
  twitter: string;
  facebook: string;
  instagram: string;
  createdAt: Date;
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
  userId: {
    username: any;
    _id: string;
    profileImage: string;
  };
  createdAt: Date;
  image: string;
  revenue: number;
  updates: number;
  website: string;
  tags: string[];
}
