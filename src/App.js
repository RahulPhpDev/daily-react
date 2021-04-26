import React, { lazy, Suspense, Context } from 'react'
import './App.css';
import User from './component/Composition/User';

// import Expertise from './component/Expertise'
// import Testimonial from './component/Testimonial'
// import Portfolio from './component/Portfolio'

const Expertise = lazy(() => import('./component/Expertise') )
const Testimonial = lazy( () => import ('./component/Testimonial') )
const Portfolio = lazy( () => import ('./component/Portfolio'))
const ReferenceInput = lazy( () => import('./component/ReferenceInput') )
const ErrorBoundary = lazy( () => import('./ErrorBoundary') )
const Dashboard = lazy( () => import ('./component/Composition/Dashboard') )



function App() {


  let expertise = ['Laravel', 'Codeigniter', 'jQuery', 'React', 'Vue'];

let testimonials = [
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been", 
        name: "Sarah Dayan", 
        role: "Staff Engineer, Algolia"
    }
];
  return (
    <div className="App">
 
          <Suspense fallback = {<div> Loading ... </div>} >
             <ErrorBoundary>
              <header className="App-header">
               
               


              <Dashboard>
                <User name="React Tip" />   
              </Dashboard>
   







{/*         
              Daily React
              <ReferenceInput />
              <Expertise expertise = {expertise}/>
              <Testimonial testimonials = {testimonials}/>
              <Portfolio/> */}
            </header>
            </ErrorBoundary>
            </Suspense>
    </div>
  );
}

export default App;
