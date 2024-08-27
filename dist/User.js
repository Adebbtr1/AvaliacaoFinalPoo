"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Base_1 = require("./Base");
const Tweet_1 = require("./Tweet");
class User extends Base_1.Base {
    static usersById = new Map();
    name;
    username;
    password;
    followers = [];
    following = [];
    tweets = [];
    constructor(name, username, password) {
        super();
        this.name = name;
        this.username = username;
        this.password = password;
        User.usersById.set(this.id, this);
    }
    sendTweet(content, type) {
        const tweet = new Tweet_1.Tweet(content, type, this.username);
        this.tweets.push(tweet);
        return tweet;
    }
    likeTweet(tweet) {
        tweet.like(this.id);
    }
    replyToTweet(tweet, content) {
        const replyTweet = tweet.reply(content, this.username);
        this.tweets.push(replyTweet);
        return replyTweet;
    }
    static getUserById(userId) {
        return User.usersById.get(userId);
    }
}
exports.User = User;
