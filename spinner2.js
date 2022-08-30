let spinnerParts = ['\r|   ','\r|   ','\r-   ','\r\\   ','\r\|   ','\r\/   ','\r\-   ','\r\|   ']
let delay = 0;
const spin = () => {  
  for(let part of spinnerParts){
    setTimeout(() => {
      process.stdout.write(part);
    }, delay);
    delay += 200
  }
}

spin()

