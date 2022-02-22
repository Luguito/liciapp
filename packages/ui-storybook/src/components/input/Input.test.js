import React from 'react';
import { shallow, mount } from 'enzyme';
import { TextInput } from "./Input";
import { Gray } from "../../colors";

describe("Input", () => {
    describe("Text", () => {
        it ("Snapshot", () => {
            const comp = shallow(<TextInput />);
            expect(comp).toMatchSnapshot()
        })

        it("Should have valid state for default", ()  => {
            const comp = mount(<TextInput placeholder="Say greetings" defaultValue="hello!" />);
            expect(comp).toHaveStyleRule('font-family', 'Barlow');
            expect(comp.find("input")).toHaveStyleRule('border-radius', '3px');
            expect(comp.find("input")).toHaveStyleRule('border', `solid 1px ${Gray.normal}`);
        })

        it("onChanged should be called", () => {
            const onChanged = jest.fn();
            const comp = mount(<TextInput onChange={onChanged} />);

            comp.find('input').simulate("change");
            expect(onChanged).toHaveBeenCalled();
        })

        it("Should have valid attrs", () => {
            const comp = mount(<TextInput defaultValue="hi" maxLength={10} textAlign="right" />);

            expect(comp.find('input').prop("value")).toEqual("hi")
            expect(comp.find('input').prop("maxLength")).toEqual(10)
            expect(comp.find('input')).toHaveStyleRule('text-align', "left")
        })
    });

    describe("Text with Prefix", () => {
        it("Should render the prefix", () => {
            const comp = mount(<TextInput prefix="C.C." />);
            expect(comp.containsMatchingElement(<span>C.C.</span>)).toEqual(true);
        })
    })
});
