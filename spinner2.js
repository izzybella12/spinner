let spinnerArray = ["\r|     ", "\r/     ", "\r-     ", "\r\\     ", "\r|     ", 
                    "\r/     ", "\r-     ", "\r\\     ", "\r|     \n" ];

let spinnerFunction = function () {
  let timer = 0; 
  for (let turn of spinnerArray) {
    timer += 300;
    setTimeout(() => {
      process.stdout.write(turn); 
    }, timer);
  } 
};

spinnerFunction();