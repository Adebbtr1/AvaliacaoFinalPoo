"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const debora = new User_1.User("Debora", "Adebbtr", "debylay2");
const joana = new User_1.User("Joana", "Jo", "12345");
const tweet1 = debora.sendTweet("Bora Growdev", "original");
joana.likeTweet(tweet1);
joana.replyToTweet(tweet1, "Concordo com você, Adebbtr");
tweet1.display(debora.username);
