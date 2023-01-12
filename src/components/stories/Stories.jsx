import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Nebiyou Girma",
      img:"data:image/jpeg;base64,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"
    },
    {
      id: 2,
      name: "Bane Brain",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjwYfeVbzZtitC3Q1s1OqbUi7BWGEIunCgg&usqp=CAU",
    },
    {
      id: 3,
      name: "Philip Dunphy",
      img: "data:image/jpeg;base64,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"
    },
    {
      id: 4,
      name: "Swiss Carn",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLLWkxFXN8jAHRzPQgxAzBPT5bqXmgYvR2063m6szR-UJlY2zuTFaEcVKA8rhwHAgdq0&usqp=CAU",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories