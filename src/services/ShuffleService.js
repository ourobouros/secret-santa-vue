let shuffle = {}

shuffle.people = []

shuffle.setPeople = (_people) => {
  shuffle.people = _people
}

// Tombola
shuffle.shuffle = (a) => {
  for (let i in a.length) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

shuffle.draw = () => {
  if (!shuffle.people) {
    return
  }
  let _newPeople = shuffle.shuffle(shuffle.people)
  _.each(_newPeople, (guy, index) => {
    guy.designatedFriend = _newPeople[(index + 1) % _newPeople.length]
  })

  return _newPeople
}

shuffle.checkFriends = (friends) => {
  let _error = false
  let _friends = []
  _.each(friends, (friend, index) => {
    if (!friend.name && !friend.email && index > 1) {
			// do nothing
      return
    }
    _friends.push(friend)

    if (!friend.name || !friend.email) {
      _error = 'missing'
    }
  })

  if (_friends.length < 2) {
    _error = 'nofriends'
  }

  return {friends: _friends, error: _error}
}

export default shuffle

