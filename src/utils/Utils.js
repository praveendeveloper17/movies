
const Utils = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingminutes = minutes % 60;

  return `${hours}h ${remainingminutes}m`
}

export default Utils