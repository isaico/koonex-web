import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './layout/Hero';
import { Navbar } from './components/Navbar';
import { CoursesConteiner } from './layout/Courses/CoursesConteiner';
import { CoursesDetail } from './layout/CoursesDetail/CoursesDetail';
import './config/i18n'
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact index element={<Hero />} />
                <Route exact path="/:URL" element={<CoursesConteiner />} />
                <Route exact path="/:URL/:URL/:DETAILURL" element={<CoursesDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
