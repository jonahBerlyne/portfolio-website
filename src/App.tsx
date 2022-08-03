import React from 'react';
import MainSlide from './slides/MainSlide/slide/MainSlide';
import WorkSlide from './slides/WorkSlide/slide/WorkSlide';
import ContactSlide from './slides/ContactSlide/slide/ContactSlide';

export default function App() {
  return (
    <div className="App">
      <MainSlide />
      <WorkSlide />
      <ContactSlide />
    </div>
  );
}