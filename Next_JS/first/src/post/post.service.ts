import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  private posts = [
    { id: 1, title: 'First Post', content: 'This is the first post' },
    { id: 2, title: 'Second Post', content: 'This is the second post' },
  ];
  findAll() {
    return this.posts;
  }
  findOne(id: number) {
    return this.posts.find(post => post.id === id);
  }
}
