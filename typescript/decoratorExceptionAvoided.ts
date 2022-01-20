const avoidException = (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    let result = undefined;
    try {
      result = originalMethod.apply(this, args);
    } catch (error) {}
    return result ? result : "exception avoided";
  };

  return descriptor;
};

class Rocket {
  @avoidException
  launch() {
    throw new Error("Launch failed");
    console.log("Launching rocket in 3... 2... 1... 🚀");
    return 4;
  }
}

const rocket = new Rocket();

console.log(rocket.launch());
