import { lazy, Suspense } from 'react'
import './App.css';

// import Expertise from './component/Expertise'
// import Testimonial from './component/Testimonial'
// import Portfolio from './component/Portfolio'

const Expertise = lazy(() => import('./component/Expertise') )
const Testimonial = lazy( () => import ('./component/Testimonial') )
const Portfolio = lazy( () => import ('./component/Portfolio'))

function App() {


  let expertise = ['Laravel', 'Codeigniter', 'jQuery', 'React', 'Vue'];
let testimonials = [
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
        name: "Sarah Dayan", 
        role: "Staff Engineer, Algolia"
    }
];
  return (
    <div className="App">
      <header className="App-header">
         <Suspense fallback = {<div> Loading ... </div>} >
            Daily React
            <Expertise expertise = {expertise}/>
            <Testimonial testimonials = {testimonials}/>
            <Portfolio/>
          </Suspense>
      </header>
    </div>
  );
}

export default App;
