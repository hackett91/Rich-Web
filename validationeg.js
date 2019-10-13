// Basic Validation Functions
//This validation function already works as expected and returns the appropriate error message if the provided input is invalid.
const checkUserName = data =>
  data && data.length > 8
    ? data
    : “Minimum of 8 characters required!”;
// validate the username
checkUserName("User A"); // => “Minimum 8 characters required!”

// Another example
// Again, we can dynamically define the error message
// when needed, but we also might want to be able to
// define the validation function itself.
// This would leave our checkUserName function to
//have no concept of what a user name actually is.
const checkUserName = (data, errorMsg) =>
  data && data.length > 8
    ? data
    : errorMsg;
// validate the username
checkUserName(“User A”, “Minimum of 8 characters is required!”);
// => “Minimum of 8 characters is required!”

//Check this out
// We renamed our checkUserName function to runValidation, as this function is independent of any context.
//It expects the data, a validation function and an error message.
//Taking a closer look at runValidation, we might notice that if we wanted to run checkUserName with different data,
//we would have to redefine the validation function and error message every time as well.
const runValidation = (data, validation, errorMsg) =>
  validation(data) ? data : errorMsg;
// validate the username
runValidation(
  “User A”,
  data => data && data.length > 8,
  “Minimum 8 of characters required!”
); // => “Minimum of 8 characters required!”



// we’re mainly interested in defining the specific
// validation function and error message once, and then running that function with different data.
// This approach ensures that the validation function can be defined once and run multiple times with different inputs.
const runValidation = (validation, errorMsg) => data =>
  validation(data) ? data : errorMsg;
// validate the username
const validateUserName = runValidation(
  data => data && data.length > 8,
  “Minimum 8 characters required!”
);
validateUserName(“User A”); // => “Minimum 8 characters required!”

// What if we were able to build a pipeline, not needing to manually handle the case, but define what should happen when the validation is run?
// Let’s see how this might look like.
const createUserName = createValidation(
  a => a && a.length > 6,
  “Minimum of 7 characters required”
);

//
