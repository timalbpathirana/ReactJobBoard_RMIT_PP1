import Enzyme from 'enzyme';
import  React from 'react';
import Header from './Header';
import TestRenderer from 'react-test-renderer';


describe("Header", () => {
    
    it("User sign out successful",()=>{
        jest.mock('react',()=>{
            const ActualReact = jest.requireActual('react');
            return {
                ...ActualReact,
                useContext:()=>({}),
            }
        });
        const setLoggedInUser = jest.fn();
        const wrapper = new TestRenderer.create(
            
              <Header setLoggedInUser={setLoggedInUser}/>
        )
        wrapper.find('MenuItem').simulate('click');
        expect(onSubmitSpy).toBeCalled();
 
    })
    

});