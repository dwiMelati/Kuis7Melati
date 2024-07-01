const products = [
  {
    id: 1,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell",],
  },
  {
    id: 2,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
  {
    id: 3,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
  {
    id: 4,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
  {
    id: 5,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
  {
    id: 6,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
  {
    id: 7,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
  {
    id: 8,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
  {
    id: 9,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
  {
    id: 10,
    name: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
    price: "Rp. 4.600.000",
    desc: ["Windows 64bit", "Dell"],
  },
];
products.map((product) => {
  card(product);
});
function card(product) {
    let content = document.querySelector(".content");
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    let img = document.createElement("img");
    img.src = product.image;
    let h1 = document.createElement("h1");
    h1.textContent = product.name;
    let h2 = document.createElement("h2");
    h2.textContent = product.price;
    let ul = document.createElement("ul");
    product.desc.map((d)=> {
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })
    let button1 =document.createElement("button");
    button1.textContent="beli";
    button1.addEventListener('click', ()=>{
        confirm('Yes')
    })
    let like = document.createElement('button');
    like.textContent="like";
    like.addEventListener("click", ()=> {
        alert('Anda menyukai produk ini')}
    );
    let button2 =document.createElement("button");
    button2.textContent="coment";
    button2.addEventListener('click', ()=>{
        prompt('isi komen')
    })
    figcaption.appendChild(h1);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figcaption.appendChild(button1);
    figcaption.appendChild(like);
    figcaption.appendChild(button2);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    content.appendChild(figure);
  }
// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_USl6lZ9CnDIOXUslQQ3nZMSzIA0cUuulJg&s",
//     price: "Rp. 1.630.000",
//     desc: ["Windows 64bit", "Dell"],
//   },
// ];
// products.map((product) => {
//   card(product);
// });
// function card(product) {
//   let content = document.querySelector('.content');
//   let figure = document.createElement('figure');
//   let figcaption = document.createElement('figcaption');
//   let img = document.createElement('img');
//   img.src = product.image;
//   let h1 = document.createElement('h1');
//   h1.textContent = product.name;
//   let h2 = document.createElement('h2');
//   h2.textContent = product.price;
//   let ul = document.createElemen('ul');
//   product.desc.map((d) => {
//     let li = document.createElement('li');
//     li.textContent = d;
//     ul.appendChild(li);
//   });
//   figcaption.appendChild(h1);
//   figcaption.appendChild(ul);
//   figcaption.appendChild(h2);
//   figure.appendChild(img);
//   figure.appendChild(figcaption);
//   content.appendChild(figure);
// }
