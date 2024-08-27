import { User } from "./User";
import { Tweet } from "./Tweet";

const debora = new User("Debora", "Adebbtr", "debylay2");
const joana = new User("Joana", "Jo", "12345");

const tweet1 = debora.sendTweet("Bora Growdev", "original");

joana.likeTweet(tweet1);

joana.replyToTweet(tweet1, "Concordo com você, Adebbtr");

tweet1.display(debora.username);
