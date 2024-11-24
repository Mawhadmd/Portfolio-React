// export default function throttle<Args extends unknown[]>(
//   fn: (...args: Args) => void,
//   cooldown: number
// ) {
//   let lastArgs: Args | undefined;

//   const run = () => { //waits if there is lastarg then runs the callback after delay
//     if (lastArgs) {
//       fn(...lastArgs);
//       lastArgs = undefined;
//     }
//   };

//   const throttled = (...args: Args) => {
//     const isOnCooldown = !!lastArgs; //if there is lastargs then wait else run the above function

//     lastArgs = args;

//     if (isOnCooldown) {
//       return;
//     }

//     window.setTimeout(run, cooldown); //cooldown
//   };

//   return throttled;
// }

function useThrottle(callback: any, delay: any) {
  let lastargs: any = null;
  let isoncooldown: boolean = true;
  return (...args: any) => {
    // returns a function with the args, no variables were craited as a function
    if (!!lastargs && isoncooldown) {
      //if there is last args, run the delay
      isoncooldown = false;
      setTimeout(() => {
        //The delay is running
        isoncooldown = true;
        callback(...lastargs);
        console.log("run");
        lastargs = null;
      }, delay);
    } else {
      lastargs = args;
    }
  };
}

export default useThrottle;
