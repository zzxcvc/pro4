import p1 from "../assets/platos/sopamiso.jpg"
import k2 from "../assets/platos/kaisoki.jpg"
import k3 from "../assets/platos/yakitori.jpg"

const menu = [
    {
      id: 1,
      nombre: "Sopa Miso",
      Image: p1,
      ingredientes: ["Caldo de bonito (dashi), al que se añaden cubos de tofu, pasta miso, hongos shiitake y rábanos."],
      precio: 11.990,
    },

    {
      id: 2,
      nombre: "Kaiseki",
      Image: k2,
      ingredientes: ["El origen del kaiseki es la tradicional ceremonia del té, en la que se ofrecen pequeños bocados de comida junto al té verde amargo."],
      precio: 16.990,
    },

    {
      id: 3,
      nombre: "Yakitori",
      Image: k3,
      ingredientes: ["Brochetas de pollo hechas a la brasa."],
      precio: 9.990,
    },

];
  
export default menu;