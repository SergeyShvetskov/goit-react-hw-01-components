export const FriendList = ({friends}) => (
    <ul class="friend-list">
        {friends.map(friend => (
            <li key={friend.id} class="item">
                <span class="status">{friend.isOnline}</span>
                <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p class="name">{friend.name}</p>
            </li>
        ))}
</ul>
);
