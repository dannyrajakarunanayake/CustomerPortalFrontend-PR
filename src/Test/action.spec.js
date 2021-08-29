import { loginSuccess } from "../slices/auth";

describe("loginSuccess", () => {
  it("should create an action to login", () => {
    const customerId = "login";
    const expectActions = {
      type: loginSuccess.type,
    };
    expect(actions.loginSuccess()).toEqual(expectActions);
  });
});
