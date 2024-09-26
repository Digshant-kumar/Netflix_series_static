function Profile() {
  return (
    <>
      <ProfileCard
        name="Digshant"
        age={24}
        greetings={
          <div>
            <strong>Hi Digshant Good Morning</strong>
          </div>
        }
      >
        <p>Hobbies : Cricket, Gaming</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Krati"
        age={23}
        greetings={
          <div>
            <strong>Hi Krati Good Morning</strong>
          </div>
        }
      >
        <p>Hobbies : Eating, Singing</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
}

export default Profile;

function ProfileCard({ name, age, greetings, children }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{greetings}</p>
      <p>{children}</p>
    </>
  );
}
