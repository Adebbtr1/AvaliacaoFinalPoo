"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const Base_1 = require("./Base");
const Like_1 = require("./Like");
const User_1 = require("./User");
class Tweet extends Base_1.Base {
    content;
    type;
    likes = [];
    replies = [];
    creatorUsername;
    constructor(content, type, creatorUsername) {
        super();
        this.content = content;
        this.type = type;
        this.creatorUsername = creatorUsername;
    }
    reply(content, creatorUsername) {
        const replyTweet = new Tweet(content, "reply", creatorUsername);
        this.replies.push(replyTweet);
        return replyTweet;
    }
    like(userId) {
        const like = new Like_1.Like(userId);
        this.likes.push(like);
    }
    display(username, indentLevel = 0) {
        const indent = " ".repeat(indentLevel * 2);
        console.log(`${indent}@${this.creatorUsername}: ${this.content}`);
        if (this.likes.length === 0) {
            console.log(`${indent}No likes.`);
        }
        else if (this.likes.length === 1) {
            const user = User_1.User.getUserById(this.likes[0].userId);
            console.log(`${indent}Liked by: ${user?.name || this.likes[0].userId}`);
        }
        else if (this.likes.length === 2) {
            const user1 = User_1.User.getUserById(this.likes[0].userId);
            const user2 = User_1.User.getUserById(this.likes[1].userId);
            console.log(`${indent}Liked by: ${user1?.name || this.likes[0].userId} and ${user2?.name || this.likes[1].userId}`);
        }
        else {
            const user1 = User_1.User.getUserById(this.likes[0].userId);
            const user2 = User_1.User.getUserById(this.likes[1].userId);
            const additionalLikes = this.likes.length - 2;
            console.log(`${indent}Liked by: ${user1?.name || this.likes[0].userId}, ${user2?.name || this.likes[1].userId} and ${additionalLikes} more users`);
        }
        this.replies.forEach(reply => {
            reply.display(reply.creatorUsername, indentLevel + 1);
        });
    }
}
exports.Tweet = Tweet;
