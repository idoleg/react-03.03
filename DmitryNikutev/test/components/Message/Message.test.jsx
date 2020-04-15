import React from "react";
import {Message} from "../../../src/components/Message/Message";
import TestRenderer from "react-test-renderer"


describe("Message", () => {

   it("Render message", () => {
      const props = {
         name: "sender name",
         text: "message content",
         automated: false
      };

      const element = TestRenderer.create(<Message {...props} />);

      expect(element.toJSON()).toMatchSnapshot();

   });

});
