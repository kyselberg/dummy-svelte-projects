import {AvatarGenerator} from 'random-avatar-generator';
import last from './files/last-names.js';
import first from './files/first-names.js';
import middle from './files/middle-names.js';

export const pluralize = (quantity, singleWord, pluralWord) => {
    const plural = pluralWord || `${singleWord}s`;
    return quantity > 1 ? plural : singleWord;
};

export const random = () => {
    const r = names => () => names[~~(Math.random() * names.length)];

    const firstName = r(first);
    const lastName = r(last);
    const middleName = r(middle);
    const age = () => Math.ceil(Math.random() * 70);

    return {
        firstName, lastName, middleName, age
    }
};

export const getRandomPerson = () => {
    const generator = new AvatarGenerator;
    const age = random().age();
    return {
        details: {
            age: `${age} ${pluralize(age, 'year')}`,
        },
        name: `${random().firstName()} ${random().lastName()}`,
        imgUrl: generator.generateRandomAvatar(),
    };
};

export const getRandomPersonList = length => {
    const people = [];

    for (let i = 0; i < length; i++) {
        people.push(getRandomPerson())
    }

    return people;
};

