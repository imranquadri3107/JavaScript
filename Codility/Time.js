
// Function to write T in seconds, converts it into a string in the format <<hours>>h<<minutes>>m<<seconds>>s".

function solution(T){
  let totalSeconds = T;
  let hours = Math.floor(totalSeconds/3600);

  totalSeconds%=3600;

  let minutes = Math.floor(totalSeconds / 60);

  let seconds = totalSeconds % 60;

  let S = hours + 'h' + minutes + 'm' + seconds + 's';
  return(S);
}

console.log(solution(4600));
