import lion from '../image/lion.jpg'
import gorilla from '../image/gorrila.jpeg'
import zebra from '../image/zebra.jpg'


const animals = [
    {
      name: "Lion",
      scientificName: "Panthero leo",
      size: 140,
      diet: ["meat"],
      image: lion
    },
    {
      name: "Gorilla",
      scientificName: "Gorilla beringei",
      size: 205,
      diet: ["plants", "insects"],
      image: gorilla,
      additional: {
        notes: "This is the eastern gorilla. There is also a western gorilla that is a different species."
      }
    },
    {
      name: "Zebra",
      scientificName: "Equus quagga",
      size: 322,
      diet: ["plants"],
      image: zebra,
      additional: {
        notes: "There are three different species of zebra.",
        link: "https://en.wikipedia.org/wiki/Zebra"
      }
    }
  ];
  
  export default animals;
  