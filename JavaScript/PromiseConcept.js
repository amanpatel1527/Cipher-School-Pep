let sum = (...args) => {
    let sum = 0;
    for (let ele of args) {
      sum += ele;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(sum);
      }, 5000);
    });
  };
  
  let testingFunction = async () => {
    try {
      let sum = await sum(1, 2, 3, 4, 5);
      console.log(sum);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Finally");
    }
  };
  
  testingFunction();
  