
import Enzyme from 'enzyme';
import  React from 'react';
import Registration from './Registration';



describe("Registration input", () => {
    const user = {
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        location: '',
        field: '',
        userStatus: '',
    };
    it("Registration form redner successful",()=>{
        const wrapper = Enzyme.shallow(<Registration/>);
        const input = (<div className="invalid-feedback">Please Fill a valid first name</div>);
        expect(wrapper.contains(input)).toEqual(true);
    });
   
    it("UseState changed when blur input ",()=>{
        const mockedEvent = {target:{name:'email',value:"wangyumeng0207@gmail.com"}};
        const setUser = jest.fn();
        let wrapper = Enzyme.shallow(<Registration setUser={setUser}/>);
        wrapper.find('input#email').simulate('blur',mockedEvent);
        expect(setUser).toBeCalled();
    })

    it("UseState changed when radio clicked ",()=>{
        const mockedEvent = {target:{name:'userStatus',checked:true}};
        const setUser = jest.fn();
        let wrapper = Enzyme.shallow(<Registration setUser={setUser}/>);
        wrapper.find('input#contrator').simulate('change',mockedEvent);
        expect(setUser).toBeCalled();
    })
    

});


describe("Registration submit", () => {
    const user = {
        isSignedIn: false,
        firstName: 'yumeng',
        lastName: 'wang',
        email: 'wangyumeng0207@gmail.com',
        password: '1234567',
        location: '1234567',
        field: 'Boilermaker',
        userStatus: 'contrator',
    };
    
//can not solve this, method will not be called
    it("Registration Form submit successful ",()=>{
        const onSubmitSpy = jest.fn();
        const wrapper = Enzyme.mount(<Registration onsubmit={onSubmitSpy} user={user}/>)
        wrapper.find('form').simulate('submit');
        expect(onSubmitSpy).toBeCalled();
 
    })
    

});