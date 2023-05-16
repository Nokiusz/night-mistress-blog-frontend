export type Author = {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    avatarLink: string
  }

export interface Post {
  postId: number,
  friendlyName: string,
  thumbnail: string,
  description: string,
  author: Author,
  created: string,
  title: string,
  content: string,
  tags: string[]
}

export interface PostToCreate {

  thumbnail: string,
  description: string,
  friendlyName: string,
  authorId: number,
  created: string,
  title: string,
  content: string,
  tags: string[]
}

export type Posts = Array<Post>