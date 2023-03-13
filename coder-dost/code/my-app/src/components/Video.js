import './Video.css';
const Video = ({ title, views, channel, time }) => {
  let bg = 'dark';
  let verified = true;

  return (
    <>
      <div className="container">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/11/10/42/plants-7844173_960_720.jpg"
          alt="beautiful"
        />
        {/* <div className="dark">React Js Tutorial</div> */}
        <div className={bg}>{title} </div>
        <div className="cont">
          <div className="channel">
            <div className="channel">
              {channel} {verified && '✅'}
            </div>
          </div>
          <div className="views">
            {views}
            <span>.</span>
            {time}
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
