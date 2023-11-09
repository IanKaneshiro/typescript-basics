// ---- Tuples
// Tuples are arrays of fixed lengths and ordered with specific types - like rigid arrays

const color: [number, number, number] = [255, 0, 255];

// More on tuples

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

// Tuples dont prevent you from pushing extra elements to it
// This is valid
goodRes.push(123);

// Enums
// Allow us to define a set of named constants. We can give these constants numeric or string values

enum OrderStatus {
  // Each are automatically assigned a value of 0
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// MORE ON ENUMS

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  // Can also mix type
  BACK = 5,
}

// Its a way to get a group of names we can always refer to. It also is nice to have the auto complete
// Enums behind the scenes
/*
There is a difference in compiling when we
declare our enum with a const
const enum vs just enum


*/
