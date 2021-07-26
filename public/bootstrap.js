const script = document.createElement('script');
script.onload = function () {
  console.log("Module loaded...");
};

script.type = 'module';
script.src = 'http://localhost:8080/dist/index.js';

document.head.appendChild(script);
