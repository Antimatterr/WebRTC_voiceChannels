import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';



import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation'
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';


const isAuth = false;
const user = {
  activated: false
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={
          <GuestRoute>
            <Home />
          </GuestRoute>}
        >
        </Route>
        <Route path='/authenticate' element={
          <GuestRoute>
            <Authenticate />
          </GuestRoute>
        }>
        </Route>
        <Route path='/activate' element={
          <SemiProtected>
            <Activate />
          </SemiProtected>
        }>
        </Route>
        <Route path='/rooms' element={
          <Protected>
            <Rooms />
          </Protected>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children }) => {
  return isAuth ? (<Navigate to={"/rooms"} />) : (children)
}

const SemiProtected = ({ children }) => {
  return !isAuth ? (<Navigate to={"/"} />) : isAuth && !user.activated ? (children) : <Navigate to={"/rooms"} />
}

const Protected = ({ children }) => {
  return !isAuth ? (<Navigate to={"/"} />) : isAuth && !user.activated ? (<Navigate to={"/activate"} />) : (children)
}






export default App;





// protected routes new funbctional commponet so that we can include checks iin thi scomponet
// all component will pass through the component where we implement checks
// const GuestRoute = ({ children, ...rest }) => {
//   return (
//     <Route {...rest}
//       render={({ location }) => {
//         return isAuth ?
//           (
//             <Navigate to={{
//               pathname: '/rooms',
//               state: { from: location }
//             }} />
//           )
//           :
//           (
//             children
//           )

//       }}
//     > </Route>
//   )
// }