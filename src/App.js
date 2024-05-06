import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/login/LoginComponent';
import WelcomeComponent from './components/welcome/WelcomeComponent';
import ErrorComponent from './components/error/ErrorComponent';
import TodoListComponent from './components/todolist/TodoListComponent';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import AuthProvider, { useAuthContext } from './contexts/security/AuthContext';
import HomeComponent from './components/home/HomeComponent';
import TaskComponent from './components/task/TaskComponent';


function AuthenticatedRoutes({children}) {

  const authContext = useAuthContext();

  return (
    authContext.isAuthenticated ? 
      children
      :
      <Navigate to="/login" /> 
  )

}

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path='*' element={<ErrorComponent />}/>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/login' element={<LoginComponent />} />

          <Route path='/welcome/:username' element=
          {
            <AuthenticatedRoutes>
              <WelcomeComponent />
            </AuthenticatedRoutes>
          } />

          <Route path='/todos' element=
          {
            <AuthenticatedRoutes>
              <TodoListComponent />
            </AuthenticatedRoutes>
          } />

          <Route path='/tasks' element=
          {
            <AuthenticatedRoutes>
              <TaskComponent />
            </AuthenticatedRoutes>
          } />
                    <Route path='/tasks/:userEmail' element=
          {
            <AuthenticatedRoutes>
              <TaskComponent />
            </AuthenticatedRoutes>
          } />

        </Routes>
        <FooterComponent />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
