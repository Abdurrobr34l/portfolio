import React from 'react';

const App = () => {
  return (
    <div>
      <h1 className='text-3xl'>App</h1>
      {/* <!-- 🌞 Light Theme / 🌙 Dark Theme --> */}
<div
  class="min-h-screen 
         bg-gray-50 dark:bg-slate-900 
         text-gray-900 dark:text-slate-100
         border border-gray-200 dark:border-slate-700
         transition-colors duration-500">

  {/* <!-- Card / Surface --> */}
  <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700">
    <h1 class="text-gray-900 dark:text-slate-100 text-2xl font-bold mb-2">
      Abdur Rob
    </h1>

    <p class="text-gray-600 dark:text-slate-400 mb-4">
      Front-End Developer & Designer
    </p>

    {/* <!-- Accent Button --> */}
    <button
      class="px-4 py-2 rounded-lg 
             bg-indigo-500 dark:bg-indigo-400 
             hover:bg-indigo-600 dark:hover:bg-indigo-300
             text-white transition-all duration-300">
      View Projects
    </button>
  </div>
</div>

    </div>
  );
};

export default App;