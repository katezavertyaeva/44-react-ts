import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles';
import Layout from 'components/Layout/Layout';

//Pages
import Home from 'pages/Home/Home';
import Users from 'pages/Users/Users';
import About from 'pages/About/About';
import Clients from 'pages/Clients/Clients';
import Facebook from 'pages/Clients/components/Facebook/Facebook';
import Google from 'pages/Clients/components/Google/Google';
import Amazon from 'pages/Clients/components/Amazon/Amazon';

// Consultations import
// import Consultation_04 from './consultations/Consultation_04/Consultation_04';
import Consultation_07 from 'consultations/Consultation_07/Consultation_07';

//Lessons import 
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import Lesson09 from './lessons/Lesson09/Lesson09';
// import Lesson10 from './lessons/Lesson10/Lesson10';
// import Lesson11 from './lessons/Lesson11/Lesson11';
// import Lesson12 from './lessons/Lesson12/Lesson12';
// import Lesson14 from 'lessons/Lesson14/Lesson14';
import Lesson16 from 'lessons/Lesson16/Lesson16';
import Weather from 'pages/Weather/Weather';

//Homeworks import 
// import Homework07 from './homeworks/Homework07/Homework07';
// import Homework08 from './homeworks/Homework08/Homework08';
// import Homework09 from './homeworks/Homework09/Homework09';
// import Homework10 from './homeworks/Homework10/Homework10';
// import Homework11 from './homeworks/Homework11/Homework11';
// import Homework12 from 'homeworks/Homework12/Homework12';
// import Homework14 from 'homeworks/Homework14/Homework14';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson06 /> */}
      {/* <Lesson07/> */}
      {/* <Homework07 /> */}
      {/* <Lesson08/> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Homework09/> */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}
      {/* <Lesson11 /> */}
      {/* <Consultation_04 /> */}
      {/* <Homework11 /> */}
      {/* <Lesson12 /> */}
      {/* <Homework12/> */}
      {/* <Lesson14 /> */}
      {/* <Homework14/> */}
      {/* Lesson15 and Homework15 example with pages */}
      {/* <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/about' element={<About />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/amazon' element={<Amazon />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/google' element={<Google />} />
          <Route path='*' element={'Page not found'} />
        </Routes>
      </Layout> */}
      {/* <Lesson16 /> */}
      {/* <Consultation_07/> */}
      <Weather />
    </BrowserRouter>
  );
}

export default App;
