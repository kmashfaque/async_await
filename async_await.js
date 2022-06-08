// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppinggs: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       console.log(resolve, ms);
//       setTimeout(resolve, ms);
//     } else {
//       console.log("Shop is closed");
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`order is placed for ${stocks.Fruits[0]}`);

//     await time(0000);
//     console.log("Production has started");

//     await time(2000);
//     console.log("Cut the fruit");

//     await time(1000);
//     console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

//     await time(1000);
//     console.log("Start the machine");

//     await time(2000);
//     console.log(`Selecting the container ${stocks.holder[0]}`);

//     await time(3000);
//     console.log(`Adding the toppings ${stocks.toppinggs[0]}`);

//     await time(2000);
//     console.log("Serve the ICE CREAM");
//   } catch (error) {
//     console.log(error.msg);
//   }
// }

// kitchen();

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppinggs: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve();
      }, ms);
    } else {
      console.log("Shop is closed");
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`order is placed for ${stocks.Fruits[0]}`);

    await time(0000);
    console.log("Production has started");

    await time(2000);
    console.log("Cut the fruit");

    await time(1000);
    console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

    await time(1000);
    console.log("Start the machine");

    await time(2000);
    console.log(`Selecting the container ${stocks.holder[0]}`);

    await time(3000);
    console.log(`Adding the toppings ${stocks.toppinggs[0]}`);

    await time(2000);
    console.log("Serve the ICE CREAM");
  } catch (error) {
    console.log(error.msg);
  }
}

kitchen();
