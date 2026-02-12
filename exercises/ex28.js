/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    name: "John",
    theNumberOfFriend: 10,
    posted: ["old message"],
    postMessage: function(message) {
        this.posted.push(message)
    },
    deleteMessage: function(i) {
        this.posted.splice(i,1)
    },
    addFriend: function(){
        this.theNumberOfFriend = this.theNumberOfFriend + 1;
        },
    removeFriend: function(){
        if (this.theNumberOfFriend > 0) {
            this.theNumberOfFriend = this.theNumberOfFriend -1;
        }
    }
    }

facebookProfile.postMessage("new message")
facebookProfile.deleteMessage(0)
facebookProfile.addFriend()
facebookProfile.removeFriend()
console.log (facebookProfile)


//done

