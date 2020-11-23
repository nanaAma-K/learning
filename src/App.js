
import './App.css';
import SignupForm from './SignupForm'
import LogInForm from './LogInForm'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import HomePage from './HomePage'
import View from './View'
import LogoutButton from './LogoutButton'


function App() {
  return (
    <div>
       <HomePage/> <View/>  <LikeButton/>
        <DislikeButton/> <br></br>
       <LogInForm/>
       <LogoutButton/>
        <SignupForm/> <br></br>
       
         
    </div>
  );
}

export default App;
