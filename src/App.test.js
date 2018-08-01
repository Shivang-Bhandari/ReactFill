import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactTestUtils from 'react-dom/test-utils'; 
import AutoFill from './AutoFill'
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('autofill renders', ()=> {
  const div = document.createElement('div');
  ReactDOM.render(<AutoFill/ >, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('component renders', ()=> {
  const list = ['ab', 'bc', 'cd', 'zx']
  const component = renderer.create(<AutoFill list={list}></AutoFill>,);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})
