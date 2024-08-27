import { Base } from "./Base";
import { Tweet } from "./Tweet";
import { Like } from "./Like";

export class User extends Base {
    static usersById: Map<string, User> = new Map();

    name: string;
    username: string;
    password: string;
    followers: User[] = [];
    following: User[] = [];
    tweets: Tweet[] = [];

    constructor(name: string, username: string, password: string) {
        super();
        this.name = name;
        this.username = username;
        this.password = password;
        User.usersById.set(this.id, this);
    }

    sendTweet(content: string, type: string): Tweet {
        const tweet = new Tweet(content, type, this.username);
        this.tweets.push(tweet);
        return tweet;
    }

    likeTweet(tweet: Tweet): void {
        tweet.like(this.id);
    }

    replyToTweet(tweet: Tweet, content: string): Tweet {
        const replyTweet = tweet.reply(content, this.username);
        this.tweets.push(replyTweet);
        return replyTweet;
    }

    static getUserById(userId: string): User | undefined {
        return User.usersById.get(userId);
    }
}
