
import Enzyme from 'enzyme';
import * as React from 'react';
import Login from './Login';



describe("<Login/>", () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React,"useState");
    useStateSpy.mockImplementationOnce((init)=>[init,setState]);

    beforeEach(()=>{
        wrapper = Enzyme.mount(Enzyme.shallow(<Login/>).get(0))
    });

    afterEach(()=>{
        jest.clearAllMocks();
    });
    it("Should update to state when blur",async ()=>{
        const email = wrapper.find("input#email");
        email.simulate('focus');
        email.simulate('change',{target:{value:'wangyumeng0207@gmail.com'}});
        email.simulate('blur');
        expect(setState).toHaveBeenCalledWith("wangyumeng0207@gmail.com");
        
    })
});




