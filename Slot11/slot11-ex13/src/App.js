import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ValidatedInput from './component/Ex4';
import AuthForm from './component/Ex5';
import RegistrationForm from './component/Ex6';

function App() {
  return (
    <div className="app-container">
    <ValidatedInput/>
    <AuthForm/>
    <RegistrationForm/>
    </div>
  );
}

export default App;
