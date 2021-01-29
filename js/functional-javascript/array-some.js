module.exports = function checkUsersValid(goodUsers) {
    // console.log(goodUsers);
    return function allUsersValid(submittedUsers) {
        // console.log(submittedUsers);        
        return submittedUsers.every(submittedUser => goodUsers
            .some(goodUser => goodUser.id === submittedUser.id));
    };
}