import React from 'react';
import renderer from 'react-test-renderer';
import { BezosHeaderRaw as BezosHeader } from '../../Components/BezosHeader';

describe('BezosHeaderRaw Component', () => {
    it('matches snapshot', () => {
        const props = {
          classes: {
              paper: "paper-css",
              avatar: "avatar-css",
          },
        };
        const bezosHeaderComponentTree = renderer.create(
          <BezosHeader {...props} />
        ).toJSON();
        expect(bezosHeaderComponentTree).toMatchSnapshot();
    });
});
