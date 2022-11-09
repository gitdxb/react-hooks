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
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';

// cấu hình routing
function App() {
  return (
    <BrowserRouter>
      <Header />
       
      {/* <Header /> // dùng cho tất cả trang*/}
      {/* đường path /home sẽ hiện component Home */}
      {/* nếu không có exact thì so sanh đường dẫn có chứa (inclued) ký tự thì thỏa đk 
          exact: so sánh bằng chính xác đường dẫn
      */}
      {/* Template: mẫu UI được dùng chung cho nhiều trang
          + HomeTemplate (Header - dùng chung cho các trang bình thường)
          + FormTemplate (thiêt kế không dùng header)
          + AdminTempate (sidebar, header riêng của admin)
       */}
      {/* HOC: truyền component này vào props của component khác 
       Home => props của HomeTemplate */}
      <Switch>
         {/* <Route exact path="/home" render={(propsRoute) => {
          return <div>
            <Header />
            <Home {...propsRoute} />
          </div>
        }} />
        <Route exact path="/about" render={(propsRoute) => {
          return <div>
            <Header />
            <About {...propsRoute} />
          </div>
        }} /> */}
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
        <Route exact path="/detail/:maPhim" component={Detail} />
        <Route exact path="/profile" component={Profile} />

        {/* Khi ko có / trang cụ thể thì mặc định hiện Home */}
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
