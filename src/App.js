import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import Counter from './pages/hooks/Counter';
import UseEffectDemo from './pages/hooks/UseEffectDemo';
import ApiRcc from './pages/hooks/ApiRcc';
import ApiRfc from './pages/hooks/ApiRfc';
import UseCallBackDemo from './pages/hooks/UseCallBackDemo';
import useMemoDemo from './pages/hooks/useMemoDemo';
import UseRefDemo from './pages/hooks/UseRefDemo';
import ReduxDemo from './pages/ReduxDemo/ReduxDemo';
import ApiMiddleWare from './pages/ReduxDemo/ApiMiddleWare';

// cấu hình routing
function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* Đường path /home sẽ hiện component Home */}
      {/* Nếu ko có exact thì so sánh đường dẫn có chứa ký tự thì thoả đk 
       exact: so sánh bằng chính xác đường dẫn
       */}
      <Switch>
        
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/use-effect" component={UseEffectDemo} />
        <Route exact path="/apircc" component={ApiRcc} />
        <Route exact path="/apirfc" component={ApiRfc} />
        <Route exact path="/usecallback" component={UseCallBackDemo} />
        <Route exact path="/usememo" component={useMemoDemo} />
        <Route exact path="/useref" component={UseRefDemo} />
        <Route exact path="/reduxdemo" component={ReduxDemo} />
        <Route exact path="/apiredux" component={ApiMiddleWare} />

        {/* Khi ko có / trang cụ thể thì mặc định hiện Home */}
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
