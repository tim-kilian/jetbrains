import { Tester } from '../../Tester';
import ${NAME}Module from '../../../src/features/${Module}';

describe('modules/$Module - $NAME', () => {
    let diagram;
    let $Module;

    beforeEach(() => {
        diagram = new Tester({ modules: [ ${NAME}Module ] });
        $Module = diagram.get('$Module');
    });

    it('should be defined', () => expect($Module).toBeDefined());

    describe('Provider', () => {

    });

});
