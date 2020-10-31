function Board(props) {
    let htmlboard =[]
    const {boards} = props;

    boards.map(item =>{
        htmlboard.push(`<li>${item.name}</li>`)
    })
    return (
      htmlboard
    );
  }
  
  export default Board;