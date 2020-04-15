import React from "react";
import {shallow} from "enzyme";
import {LoginForm} from "../../../src/components/LoginForm/LoginForm";
import Fab from "@material-ui/core/Fab";


describe("LoginForm", () => {

   it("render shallow", () => {

      const updatedName = "Dmitry";

      const props = {
         username: "user",
         setUsername: jest.fn(),
      };

      const element = shallow(<LoginForm {...props}/>);

      const input = element.find({label: props.username}).at(0);
      input.simulate("change", {currentTarget: {value: updatedName}});

      const button = element.find(Fab);
      button.simulate("click");

      expect(props.setUsername).toHaveBeenCalledWith(updatedName);
   });
});

