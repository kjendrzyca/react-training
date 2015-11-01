jest.autoMockOff();

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Shop = require('../components/shop.jsx');

describe('Shop', () => {
    it('should contain Products List', () => {
        // given
        let shallowRenderer = TestUtils.createRenderer();

        // when
        shallowRenderer.render(<Shop />);
        let output = shallowRenderer.getRenderOutput();

        // then
        console.log(output);
    });
});
