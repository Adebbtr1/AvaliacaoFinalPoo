import { Base } from "./Base";
import { Like } from "./Like";
import { User } from "./User";

export class Tweet extends Base {
    content: string;
    type: string;
    likes: Like[] = [];
    replies: Tweet[] = [];
    creatorUsername: string;

    constructor(content: string, type: string, creatorUsername: string) {
        super();
        this.content = content;
        this.type = type;
        this.creatorUsername = creatorUsername;
    }

    reply(content: string, creatorUsername: string): Tweet {
        const replyTweet = new Tweet(content, "reply", creatorUsername);
        this.replies.push(replyTweet);
        return replyTweet;
    }

    like(userId: string): void {
        const like = new Like(userId);
        this.likes.push(like);
    }

    display(username: string, indentLevel: number = 0): void {
        const indent = " ".repeat(indentLevel * 2);
        console.log(`${indent}@${this.creatorUsername}: ${this.content}`);
        
        if (this.likes.length === 0) {
            console.log(`${indent}No likes.`);
        } else if (this.likes.length === 1) {
            const user = User.getUserById(this.likes[0].userId);
            console.log(`${indent}Liked by: ${user?.name || this.likes[0].userId}`);
        } else if (this.likes.length === 2) {
            const user1 = User.getUserById(this.likes[0].userId);
            const user2 = User.getUserById(this.likes[1].userId);
            console.log(`${indent}Liked by: ${user1?.name || this.likes[0].userId} and ${user2?.name || this.likes[1].userId}`);
        } else {
            const user1 = User.getUserById(this.likes[0].userId);
            const user2 = User.getUserById(this.likes[1].userId);
            const additionalLikes = this.likes.length - 2;
            console.log(`${indent}Liked by: ${user1?.name || this.likes[0].userId}, ${user2?.name || this.likes[1].userId} and ${additionalLikes} more users`);
        }

        this.replies.forEach(reply => {
            reply.display(reply.creatorUsername, indentLevel + 1);
        });
    }
}
