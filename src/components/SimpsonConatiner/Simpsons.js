import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {id:1, name:`Homer`,img:`https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png`},
        {id:2, name:`Marge`,img:`https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png`},
        {id:3, name:`Bart`,img:`https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png`},
        {id:4, name:`Lisa`,img:`https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png`},
        {id:5, name:`Maggiе`,img:`https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png`}
    ]
    return(

        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};