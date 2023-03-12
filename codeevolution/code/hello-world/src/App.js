import './App.css';
// import Greet from './Components/Greet';
// import GreetClass from './Components/GreetClass';
// import Hello from './Components/Hello';
// import Hello2 from './Components/Hello2';
// import Message from './Components/Message';
// import Counter from './Components/Counter';

// import FunctionClick from './Components/FunctionClick';
// import ClassClick from './Components/ClassClick';

// import EventBind from './Components/EventBind';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import NameList2 from './Components/NameList2';
// import StyleSheet from './Components/StyleSheet';
// import InlineStyle from './Components/InlineStyle';

import './Components/appStyle.css';
import styles from './Components/appStyle.module.css';

function App() {
  return (
    <>
      <h1 className="error">Heading1</h1>
      <h2 className={styles.success}>Heading2</h2>
      {/* <InlineStyle /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList2 /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Apple" heroName="Fruit" />;
      <Greet name="Grapes" />
      <Greet>Hi There</Greet>
      <GreetClass name="JackFruit">Hi!!!</GreetClass> */}
      {/* <Hello />
      <Hello2 /> */}
    </>
  );
}

export default App;
