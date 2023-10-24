import {} from "./Character";

const Characters = () => {
    const characters = [
        {id:1,name:'Rick Sanchez',status:'Alive',species:'Human',gender:'Male',image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
        {id:2,name:'Evil Rick',status:'Dead',species:'Humanoid',gender:'Male',image:'https://rickandmortyapi.com/api/character/avatar/119.jpeg'},
        {id:3,name:'Morty Smith',status:'Alive',species:'Human',gender:'Male',image:'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
        {id:5,name:'Summer Smith',status:'Alive',species:'Human',gender:'Female',image:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'},
        {id:5,name:'Beth Smith',status:'Alive',species:'Human',gender:'Female',image:'https://rickandmortyapi.com/api/character/avatar/4.jpeg'},
        {id:6,name:'Jerry Smith',status:'Alive',species:'Human',gender:'Male',image:'https://rickandmortyapi.com/api/character/avatar/5.jpeg'},
    ]

  return(
      <div>
          {characters.map(character => <Characters key={character.id} character={character}/> )}
      </div>
  );
};

export {Characters};