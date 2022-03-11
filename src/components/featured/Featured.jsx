import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          {console.log(type)}
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img
        src="https://images.pexels.com/photos/3644098/pexels-photo-3644098.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
      />
      <div className="info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3x1Ja-rzs-xKwFYxehwrQ2myhgDTnrb99vw&usqp=CAU"
          alt=""
        />

        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo
          pariatur iure voluptatum ipsa ipsam repellat nesciunt optio.
          Praesentium, eveniet laudantium excepturi ullam commodi incidunt
          doloremque reiciendis in delectus molestiae.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
