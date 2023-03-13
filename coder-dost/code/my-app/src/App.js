import PlayButton from './components/PlayButton';
import Video from './components/Video';

const App = () => {
  return (
    <>
      <div>Hello</div>
      <Video title="React Js" time="2" views="1000" channel="code" />
      <Video title="Node Js" />

      <PlayButton
        message="play"
        onPlay={() => console.log('Playyyy')}
        onPause={() => console.log('Pause')}
      >
        Play
      </PlayButton>
      {/* <PlayButton message="pause" onClick={() => alert('Playyy')}>
        Pause
      </PlayButton> */}
    </>
  );
};

export default App;
