var zenGardenData = [
  {
    name: 'rock'
  },
  {
    name: 'sand'
  },
  {
    name: 'bonsai'
  }
];

ReactDOM.render(
  //debugger;
  <ZenGarden gardenItems={zenGardenData}/>,
  document.getElementById('app')
);
