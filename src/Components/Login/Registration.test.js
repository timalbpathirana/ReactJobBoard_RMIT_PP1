
import Enzyme from 'enzyme';
import  React from 'react';
import Registration from './Registration';

const user = {
    isSignedIn: false,
    firstName: 'rain',
    lastName: 'wang',
    email: 'wangyumeng0207@gmail.com',
    password: '1234567',
    location: 'Melbourne',
    field: 'ac',
    userStatus: '',
};

describe("<Login/>", () => {
    it("handleSubmit is called",  ()=>{
        let handleSubmit = jest.fn();

        const wrapper = Enzyme.mount(<Registration user={user}/>);
        wrapper.find("form").simulate('submit');

        expect(handleSubmit).toHaveBeenCalled();


        
    })
});